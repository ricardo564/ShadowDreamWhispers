import { acceptHMRUpdate, defineStore } from 'pinia'
import Database from '~/services/IndexedDB'
import { startNprogress } from '~/utils/nProgress'
import type { Item } from '~/types/message'

export const useDatabaseStore = defineStore({
  id: 'database',
  state: () => ({
    allResponses: [] as Item[],
    databaseId: 'chat-1',
    databaseList: [] as string[],
    user: {
      id: 1,
      name: 'UserName',
    },
  }),
  getters: {
    getDatabaseId(): string {
      return this.databaseId
    },
    getAllResponsesLength(): number {
      return this.allResponses.length
    },
    getAllResponses(): Item[] {
      return this.allResponses.sort((a, b) => {
        return Number(a.id) - Number(b.id)
      })
    },
    getDatabaseList(): string[] {
      return this.databaseList
    },
    getUserId(): number {
      return this.user.id
    },
  },
  actions: {
    createNewDatabase(name: string): void {
      startNprogress()

      Database.createDatabase(name).then((result: string) => {
        this.databaseList.push(result)
      })
    },
    openDatabase() {
      startNprogress()

      Database.openDb(this.databaseId)

      this.getAllData(this.databaseId)
    },
    setDatabaseId(id: string): void {
      this.databaseId = id
      console.log('setDatabaseId: ', this.databaseId)
      startNprogress()
    },
    async getAllData(dbId: string): Promise<void> {
      try {
        startNprogress()

        const items = await Database.getItems(dbId)

        this.allResponses = items
      }
      catch (error) {
        console.error(error)
      }
    },
    getAllDatabaseInIndexedDB(): void {
      Database.getAllDatabasesList().then((result: string[]) => {
        this.databaseList = result
      })
    },
    async saveResponse(chatId: string, response: Item): Promise<void> {
      try {
        startNprogress()
        await Database.saveItem(chatId, response)
        this.allResponses.push(response)
      }
      catch (error) {
        console.error(error)
      }
    },
    async saveQuery(query: Item): Promise<void> {
      console.log('saveQuery: ', query)
      try {
        startNprogress()
        await Database.saveItem(this.databaseId, query)
        this.allResponses.push(query)
      }
      catch (error) {
        console.error(error)
      }
    },
    async deleteResponse(chatId: string, id: string): Promise<void> {
      try {
        startNprogress()
        await Database.deleteItem(chatId, Number(id))
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
