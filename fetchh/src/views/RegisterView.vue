<template>
  <main>
    <form @submit.prevent="register" class="register-form">
      <h1>Register</h1>
      <input v-model="email" type="email" placeholder="Email Address" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const users = ref<{ email: string; password: string }[]>([]);

const register = () => {
  if (!email.value || !password.value) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const userExists = users.value.some(user => user.email === email.value);
  if (userExists) {
    alert('El correo ya está registrado. Por favor, utiliza otro.');
    return;
  }

  users.value.push({ email: email.value, password: password.value });

  alert('Usuario registrado correctamente.');
};
</script>

<style scoped>
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
