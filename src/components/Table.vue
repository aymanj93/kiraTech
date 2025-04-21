<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import { UsersService } from '@/service/Users';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';    
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';


const users = ref();
const selectedUser = ref(null);
const dialogVisible = ref(false);
const filters = ref({global: { value: null, matchMode: FilterMatchMode.CONTAINS }});
const loading = ref(true);

onMounted(() => {
    UsersService.getUsers().then((data) => {
            users.value = getUsers(data);
            loading.value = false;
        });
});

const getUsers = (data) => {
    return [...(data || [])].map((d) => {
        return d;
    });
};

const onRowClick = (event) => {
    selectedUser.value = event.data;
    dialogVisible.value = true;
};

const refreshPage = () => {
  window.location.reload();
};
</script>

<template>
    <div class="mb-10 md:w-3/4 mx-auto px-10 md:px-0">
        <DataTable v-model:filters="filters" :value="users" paginator :rows="10" dataKey="id" :loading="loading"
                :globalFilterFields="['date','name', 'country.name', 'email', 'gender']"
                @row-click="onRowClick"
                selectionMode="single"
                :rowClass="() => 'cursor-pointer'">
            <template #header>
                <IconField>
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                </IconField>
            </template>
            <template #empty> No users found. </template>
            <template #loading> Loading users data. Please wait. </template>
            <Column>
                <template #header>
                    <p class="text-gray-400">Date</p>
                </template>
                <template #body="{ data }">
                    <p class="text-gray-400">{{ data.date }}</p>
                </template>
            </Column>
            <Column field="name" style="min-width: 40rem">
                <template #header>
                    <p class="text-gray-400">Name</p>
                </template>
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img :alt="data.name" :src="data.thumbnail" style="width: 50px" class="rounded" />
                        <p class="font-semibold">{{ data.name }}</p>
                    </div>
                </template>
            </Column>
            <Column field="gender" style="min-width: 12rem">
                <template #header>
                    <p class="text-gray-400">Gender</p>
                </template>
                <template #body="{ data }">
                    <p class="capitalize text-gray-400">{{ data.gender }}</p>
                </template>
            </Column>
            <Column style="min-width: 12rem">
                <template #header>
                    <p class="text-gray-400">Country</p>
                </template>
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column style="min-width: 6rem; text-align: end">
                <template #header>
                    <div class="text-gray-400" style="text-align: right; width: 100%">Email</div>
                </template>
                
                <template #body="{ data }">
                    <p class="text-gray-400">{{ data.email }}</p>
                </template>
            </Column>
        </DataTable>

        <div class="card flex justify-center mt-10">
            <Button @click="refreshPage" icon="pi pi-sync"  label="Refresh" />
        </div>



        <Dialog v-model:visible="dialogVisible" modal class="px-10">
            <template #header>
                <h1 class="text-dark font-bold text-4xl">{{ selectedUser.name }}</h1>
            </template>
            <div v-if="selectedUser" class="flex justify-center items-center gap-5 my-5">
                <div class="border rounded border-slate-300 shadow">
                    <img :src="selectedUser.thumbnail" :alt="selectedUser.name" style="max-width: 200px;">
                </div>
                <div class="flex gap-10">
                    <div class="text-gray-300 font-semibold">
                        <p>Date:</p>
                        <p>Status:</p>
                        <p>Gender:</p>
                        <p>Country:</p>
                        <p>Email:</p>
                    </div>
                    <div>
                        <p>{{selectedUser.date}}</p>
                        <p>Inactive</p>
                        <p class="capitalize">{{selectedUser.gender}}</p>
                        <p>{{selectedUser.country.name}}</p>
                        <p>{{selectedUser.email}}</p>
                        
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
</template>

