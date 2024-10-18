<template>
  <div>
    <header>
      <h1>Cadastro de Usuários</h1>
      <!-- Aqui você pode incluir elementos que são fixos, como um menu ou logo -->
    </header>
    
    <!-- O NuxtPage é onde o conteúdo específico da página será renderizado -->
    <NuxtPage />
    
    <footer>
      <!-- Rodapé da aplicação -->
      <p>© 2024 User Registration App. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
// Aqui você pode importar coisas globais, como o Pinia, mas já configuramos no plugin
</script>

<style>
/* Estilos globais para header, footer ou layout principal */
header {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
}

footer {
  background-color: #f1f3f5;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
}
</style>
