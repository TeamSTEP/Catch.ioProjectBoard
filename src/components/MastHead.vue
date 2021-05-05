<template>
    <div class="container">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'MastHead',
});
</script>

<style scoped>
.container {
    min-height: 100vh;
    width: 100%;
    background-color: darkgreen;
}
</style>
