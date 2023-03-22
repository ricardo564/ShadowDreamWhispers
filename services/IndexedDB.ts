interface Item {
  id: number;
  [key: string]: any; // permite adicionar outras propriedades dinamicamente
}

class Database {
  private static readonly VERSION = 1;
  private static dbs: { [name: string]: IDBDatabase | PromiseLike<IDBDatabase> } = {};

  private static async open(name: string): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      if (Database.dbs[name]) {
        return resolve(Database.dbs[name]);
      }

      const request = window.indexedDB.open(name, Database.VERSION);

      request.onerror = (e) => {
        console.error('Error opening db', e);
        reject('Error');
      };

      request.onsuccess = (e) => {
        const request = e.target as IDBRequest<IDBDatabase>;
        const db = request.result;
        if (db) {
          Database.dbs[name] = db;
          resolve(db);
        } else {
          reject('Database is null');
        }
      };

      request.onupgradeneeded = (e) => {
        console.log('onupgradeneeded');
        const db = (e.target as IDBRequest<IDBDatabase>).result;
        if (db) {
          db.createObjectStore(name, { autoIncrement: true, keyPath: 'id' });
        }
      };
    });
  }

  public static async getItems(dbName: string): Promise<Item[]> {
    const db = await Database.open(dbName);

    return new Promise((resolve) => {
      const trans = db.transaction([dbName], 'readonly');
      const store = trans.objectStore(dbName);
      const items: Item[] = [];

      trans.oncomplete = () => {
        resolve(items);
      };

      store.openCursor().onsuccess = (e) => {
        const cursor = (e.target as IDBRequest).result as IDBCursorWithValue;
        if (cursor) {
          items.push(cursor.value);
          cursor.continue();
        }
      };
    });
  }

  public static async saveItem(dbName: string, item: Item): Promise<void> {
    const db = await Database.open(dbName);

    return new Promise((resolve) => {
      const trans = db.transaction([dbName], 'readwrite');
      const store = trans.objectStore(dbName);

      trans.oncomplete = () => {
        resolve();
      };

      store.put(item);
    });
  }

  public async deleteItem(dbName: string, id: number): Promise<void> {
    const db = await Database.open(dbName);

    return new Promise((resolve) => {
      const trans = db.transaction([dbName], 'readwrite');
      const store = trans.objectStore(dbName);

      trans.oncomplete = () => {
        resolve();
      };

      store.delete(id);
    });
  }
}

export default Database;
