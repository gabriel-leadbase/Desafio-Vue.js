<template>
    <div class="container-base q-pa-md q-ma-sm">
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'VBorder',
}
</script>

<style scoped>
    .container-base{
        border-radius: 6px;
        background: #f1f8e9;
    }
</style>