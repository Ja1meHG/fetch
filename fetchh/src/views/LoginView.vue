<template>
  <main>
    <form @submit.prevent="login" class="login-form">
      <h1>Login</h1>
      <input v-model="email" type="email" placeholder="Email Address" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('user@correo.com'); 
const password = ref('1234'); 
const login = () => {
  if (email.value === 'user@correo.com' && password.value === '1234') {
    alert('Inicio de sesión exitoso.');
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
