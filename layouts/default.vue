<template>
    <div class="flex flex-col min-h-screen bg-gray-100">
        <header class="bg-blue-500 text-white p-4 shadow-md">
            <h1 class="text-2xl font-semibold">Cadastro de Usuários</h1>
        </header>

        <main class="flex-grow p-6">
            <slot />
        </main>

        <footer class="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2024 Meu Projeto de Cadastro. Todos os direitos reservados.</p>
        </footer>
    </div>
</template>

<script lang="ts" setup>
// Aqui você pode adicionar qualquer lógica se necessário
</script>

<style scoped>
/* Adicione estilos adicionais se necessário */
</style>
