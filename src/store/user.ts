import { defineStore } from 'pinia'

interface UserInfo {
  userName: string
  age: number
  token: string
}
export const useUserStore = defineStore('user', {
  state: (): UserInfo => ({
    userName: 'LiuJie',
    age: 23,
    token: 'ssssssss',
    //userData: null,
  }),
  getters: {
    doubleAge(): number {
      return this.age * 2
    },
  },
  actions: {
    changeAge(age: number) {
      console.log(age, this.age)
      this.age = age
    },
  },
  persist: {
    paths: ['token'],
  },
})
