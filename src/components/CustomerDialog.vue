<script setup>
import Dialog from 'primevue/dialog';

defineProps({
    visible: {
        type: Boolean,
        required: true
    },
    customer: {
        type: Object,
        default: null
    }
});

defineEmits(['update:visible']);
</script>

<template>
    <Dialog v-model:visible="visible" modal header="Customer Details" :style="{ width: '50vw' }" @update:visible="$emit('update:visible', $event)">
        <div v-if="customer" class="grid gap-4">
            <div class="flex items-center gap-2">
                <img :alt="customer.name" :src="customer.thumbnail" style="width: 64px" />
                <div>
                    <h3 class="text-xl font-bold">{{ customer.name }}</h3>
                    <p class="text-gray-600">{{ customer.email }}</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="font-semibold">Date</p>
                    <p>{{ customer.date }}</p>
                </div>
                <div>
                    <p class="font-semibold">Gender</p>
                    <p class="capitalize">{{ customer.gender }}</p>
                </div>
                <div>
                    <p class="font-semibold">Country</p>
                    <p>{{ customer.country.name }}</p>
                </div>
            </div>
        </div>
    </Dialog>
</template> 