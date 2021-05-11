<template>
    <div>
        <p>{{ label }}</p>
    </div>
</template>

<script>
export default {
    name: 'Subtitle',
    props:{
        label: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
    p {
        font-weight: bold;
        font-size: 15px;
    }
</style>