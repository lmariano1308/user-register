<template>
    <form @submit.prevent="submitForm">
        <input v-model="name" placeholder="Nome" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Senha" required />
        <button type="submit">Adicionar Usuário</button>
    </form>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'

const userStore = useUserStore()
const name = ref('')
const email = ref('')
const password = ref('')

const submitForm = () => {
    userStore.addUser({ name: name.value, email: email.value, password: password.value })
    console.log('Usuário adicionado:', { name: name.value, email: email.value, password: password.value })
    name.value = ''
    email.value = ''
    password.value = ''
}
</script>
