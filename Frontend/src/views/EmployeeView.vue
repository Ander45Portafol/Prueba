<script setup>
import { onMounted, ref } from 'vue';
import TableEmployee from '../components/TableEmployee.vue'
import ModalEmployee from '../components/ModalEmployee.vue'
import {open_modal} from '../assets/scripts.js'
//Variable reactiva para guardar los datos
const read_const = ref(null);
//Funcion para cargar los datos de los empleados
async function read_employee() {
    try {
        await fetch('http://127.0.0.1:8000/api/employees').then(response => response.json()).then(emp => {
            read_const.value = emp.data;
        });
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    read_employee();

});
</script>
<template>
    <div class="h-screen w-full" v-if="$route.path == '/Employee'">
        <h1 class="text-white font-bold text-4xl text-center mt-4">Empleados</h1>
        <div class="flex mt-20">
            <div class="flex justify-center w-3/4">
                <button class="btn-search w-14 h-10 bg-white rounded-lg"><box-icon name='search' size="28px"
                        color="#000"></box-icon></button>
                <input type="text" placeholder="Buscar..." class="rounded-lg ml-3 w-3/5">
            </div>
            <button @click="open_modal(Employee)" class="bg-white w-32 h-10 rounded-lg flex justify-center items-center gap-2 font-semibold"><box-icon
                    type='solid' name='plus-circle' size="28px" color="#000"></box-icon>Agregar</button>
                    <ModalEmployee/>
        </div>
        <div class=" w-4/5 mt-10 m-auto table h-2/5">
            <TableEmployee :info="read_const" />
        </div>
        <div class="w-full h-32 mt-4 flex justify-end items-end">
            <RouterLink to="/Dashboard"><button
                    class="bg-white w-32 h-10 rounded-lg flex justify-center items-center gap-2"><box-icon
                        name='arrow-back' size="28px" color="#000"></box-icon>Regresar</button></RouterLink>
        </div>

    </div>
</template>
<style scoped></style>