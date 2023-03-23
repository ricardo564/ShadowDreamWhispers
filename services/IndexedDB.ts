interface Item {
  id: number
  [key: string]: any
}

class Database {
  private static readonly VERSION = 1
  private static dbs: {
    [name: string]: IDBDatabase | PromiseLike<IDBDatabase>
  } = {}

  static deleteItem: any

  private static async open(name: string): Promise<IDBDatabase> {
    return new Promise<IDBDatabase>((resolve, reject) => {
      if (Database.dbs[name]) {
        resolve(Database.dbs[name])
        return
      }

      const request = window.indexedDB.open(name, Database.VERSION)

      request.onerror = () => {
        reject(new Error('Error opening db'))
      }

      request.onsuccess = (e) => {
        const request = e.target as IDBRequest<IDBDatabase>
        const db = request.result
        if (db) {
          Database.dbs[name] = db
          resolve(db)
        }
        else {
          reject(new Error('Database is null'))
        }
      }

      request.onupgradeneeded = () => {
        console.log('onupgradeneeded')
        const db = request.result
        if (db) {
          db.createObjectStore(name, {
            autoIncrement: true,
            keyPath: 'id',
          })
        }
      }
    })
  }

  public static async getItems(dbName: string): Promise<Item[]> {
    const db = await Database.open(dbName)

    return new Promise((resolve) => {
      const trans = db.transaction([dbName], 'readonly')
      const store = trans.objectStore(dbName)
      const items: Item[] = []

      trans.oncomplete = () => {
        resolve(items)
      }

      store.openCursor().onsuccess = (e) => {
        const cursor = (e.target as IDBRequest)
          .result as IDBCursorWithValue
        if (cursor) {
          items.push(cursor.value)
          cursor.continue()
        }
      }
    })
  }

  public static async saveItem(dbName: string, item: Item): Promise<void> {
    const db = await Database.open(dbName)

    return new Promise((resolve) => {
      const trans = db.transaction([dbName], 'readwrite')
      const store = trans.objectStore(dbName)

      trans.oncomplete = () => {
        resolve()
      }

      store.put(item)
    })
  }

  public async deleteItem(dbName: string, id: number): Promise<void> {
    const db = await Database.open(dbName)

    return new Promise((resolve) => {
      const trans = db.transaction([dbName], 'readwrite')
      const store = trans.objectStore(dbName)

      trans.oncomplete = () => {
        resolve()
      }

      store.delete(id)
    })
  }

  public static async getAllDatabasesList(): Promise<string[]> {
    return new Promise((resolve) => {
      window.indexedDB.databases().then((databases: IDBDatabaseInfo[]) => {
        const databaseList = databases.map((database) => database.name);
        resolve(databaseList);
      });
    });
  }

  public static async createDatabase(name: string): Promise<string> {
    return new Promise((resolve) => {
      const request = window.indexedDB.open(name, Database.VERSION)
      request.onsuccess = () => {
        resolve(name)
      }
    })
  }
}

export default Database
