import { defineStore } from 'pinia'

interface User {
    id: number
    name: string
    email: string
    password: string
}

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [] as User[],
        nextId: 1,
    }),
    actions: {
        addUser(user: Omit<User, 'id'>) {
            this.users.push({ ...user, id: this.nextId++ })
        },
        // TODO: Outras ações, como deleteUser ou updateUser
    },
})
