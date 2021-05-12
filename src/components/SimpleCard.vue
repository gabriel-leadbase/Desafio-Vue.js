<template>
    <div>
        <q-card class="my-card bg-light-green-6 text-white">
            <q-card-section>
                <div class="text-h7">{{ title }}</div>
            </q-card-section>

            <q-separator dark />

            <q-card-section class="bg-light-green-2 text-black">
                <div>{{ content }}</div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
    name: 'SimpleCard',
    props:{
        title: {
            type: String,
            required: true,
        },
        content: {
            required: true,
        }
    }
}
</script>