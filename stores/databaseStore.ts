import { acceptHMRUpdate, defineStore } from 'pinia'
import Database from '~/services/IndexedDb'

export interface Item {
  id: string
  [key: string]: any
}

export const useDatabaseStore = defineStore('database', {
  state: () => ({
    allResponses: [] as Item[],
    databaseId: '0',
    databaseList: [],
    userId: 'CamillusBloodfallen',
  }),
  getters: {
    getDatabaseId(): string {
      return this.databaseId
    },
    getAllResponses(): Item[] {
      return this.allResponses
    },
    getDatabaseList(): any[] {
      return this.databaseList
    },
    getUserId(): string {
      return this.userId
    },
  },
  actions: {
    createNewDatabase(name: string): void {
      Database.createDatabase(name).then((result: any) => {
        this.databaseList.push(result)
      })
    },
    setDatabaseId(id: string): void {
      this.databaseId = id
    },
    async getAllData(dbId: string): Promise<void> {
      try {
        const items = await Database.getItems(dbId)
        this.allResponses = items
      }
      catch (error) {
        console.error(error)
      }
    },
    getAllDatabaseInIndexedDB(): void {
      Database.getAllDatabasesList().then((result: any) => {
        this.databaseList = result
      })
    },
    async saveResponse(chatId: string, response: any): Promise<void> {
      try {
        await Database.saveItem(chatId, response)
        this.allResponses.push(response)
      }
      catch (error) {
        console.error(error)
      }
    },
    async saveQuery(userId: string, query: any): Promise<void> {
      try {
        await Database.saveItem(userId, query)
        this.allResponses.push(query)
      }
      catch (error) {
        console.error(error)
      }
    },
    async deleteResponse(chatId: string, id: string): Promise<void> {
      try {
        await Database.deleteItem(chatId, id)
        const index = this.allResponses.findIndex(item => item.id === id)
        if (index !== -1) {
          this.allResponses.splice(index, 1)
        }
      }
      catch (error) {
        console.error(error)
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDatabaseStore, import.meta.hot))
}