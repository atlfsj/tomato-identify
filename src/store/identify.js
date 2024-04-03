import { defineStore } from "pinia";

export const useIdentifyStore = defineStore('identify', {
    state: () => {
        return {
            imageUrl: '',
            uploadResult: null
        }
    }
})