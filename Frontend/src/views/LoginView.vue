<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { onMounted } from 'vue'

import { initFlowbite } from 'flowbite'
onMounted(() => {
    initFlowbite();
})

</script>

<template>
    <main class="w-full h-screen flex justify-center items-center" v-if="$route.path == '/'">
        <form class="form  h-4/5 w-1/3 bg-gray-300 rounded-2xl flex flex-col pl-10">
            <div class="flex justify-center">
                <img src="/imagenes/login_account.png" class="h-64 w-72" alt="">
            </div>
            <h1 class="text-center mr-14 text-blue-900 text-3xl font-bold">Inicio de Sesión</h1>
            <div class="flex-col ml-10 mt-4">
                <div class="flex flex-col w-3/4">
                    <label>Usuario</label>
                    <input type="text" class="rounded-lg" placeholder="Ingrese su usuario.">
                </div>
                <div class=" flex flex-col w-3/4 mt-4">
                    <label>Contraseña</label>
                    <input type="password" class="rounded-lg" placeholder="Ingrese su contraseña.">
                </div>
                <div class="flex justify-center mr-20 mt-4">
                    <RouterLink to="/Dashboard"
                        class="bg-blue-900 text-white flex justify-center items-center w-40 h-14 rounded-2xl">Iniciar
                        session</RouterLink>
                </div>
            </div>
        </form>
    </main>
    <div class="" v-else>
        <RouterView />
    </div>
</template>


<style scoped>
form {
    box-shadow: 20px 15px #4C497A;
}
</style>
