<script setup>

const props = defineProps({
    info: Array
})

</script>
<template>
    <div class="relative shadow-md sm:rounded-lg h-full overflow-y-scroll">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Usuario
                    </th>
                    <th scope="col" class="px-6 py-3">
                        email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        ID empleado
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    v-for="user in info" :key="user.id">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ user.id }}
                    </th>
                    <td class="px-6 py-4">
                        {{ user.username }}
                    </td>
                    <td class="px-6 py-4">
                        {{ user.email }}
                    </td>
                    <td class="px-6 py-4">
                        {{ user.employee_id }}
                    </td>
                    <td class=" py-4">
                        <button class="bg-transparent"><box-icon type='solid' name='edit' color="#BEC65B"
                                size="28px"></box-icon></button>
                        <button class="bg-transparent ml-4"><box-icon name='trash-alt' type='solid' color="#C24A0E"
                                size="28px"></box-icon></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped></style>