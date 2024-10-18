<template>
    <ul>
        <li v-for="user in userStore.users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
    </ul>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

console.log('Usuários na lista:', userStore.users)
</script>
