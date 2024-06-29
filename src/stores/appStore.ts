import { defineStore } from "pinia";

export const useAppStore =  defineStore('appStore', {
    state: () => ({ myMessage: '' }),
    getters: {
      getAllMessage: (state) => `Complete message ${state.myMessage}`,
    },
    actions: {
      changeMessage(msg: string) {
        this.myMessage = msg
      },
    },
  })