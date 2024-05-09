<script setup>
import { onMounted, ref } from "vue"


const horaActual = ref(null);

onMounted(() => {
    obtenerHora();
    // Actualizar la hora cada segundo
    setInterval(obtenerHora, 6000000000000)
})
const obtenerHora = () => {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    if (horas < 12 && minutos < 0 && segundos < 0) {
        horaActual.value = "Buenas Tardes";
    } else if (horas > 18 && minutos > 0 && segundos > 0) {
        horaActual.value = "Buenas noches";
    }
    else if (horas>3&&minutos>0&&segundos>0) {
        horaActual.value = "Buenos días";
    }
}
</script>
<template>
    <div class="h-screen w-full flex-col" v-if="$route.path == '/Dashboard'">
        <div class="flex-col text-center">
            <h1 class="text-white mt-10 text-5xl font-extrabold">{{ horaActual }}</h1>
            <h2 class="text-white mt-4 text-5xl font-extrabold">Anderson Aguilar</h2>
        </div>
        <div class="flex justify-evenly w-full h-3/6 mt-16">
            <RouterLink to="/User" class="w-1/3 h-full bg-blue-900 rounded-3xl flex-col text-center pt-2">
                <h3 class="text-white font-semibold text-2xl">Users</h3>
                <img src="/imagenes/Users.png" alt="">
            </RouterLink>
            <RouterLink to="/Employee" class="w-1/3 h-full bg-blue-900 rounded-3xl flex-col text-center pt-2">
                <h3 class="text-white font-semibold text-2xl">Employees</h3>
                <div class="flex justify-center items-center">
                    <img src="/imagenes/Employees.png" class="mt-10" alt="">
                </div>
            </RouterLink>
        </div>
        <div class="flex justify-end mt-10 mr-4">
            <RouterLink to="/"><button
                    class="bg-white w-32 h-10 rounded-lg flex justify-center items-center gap-2"><box-icon
                        name='arrow-back' size="28px" color="#000"></box-icon>Salir</button></RouterLink>
        </div>
    </div>
</template>