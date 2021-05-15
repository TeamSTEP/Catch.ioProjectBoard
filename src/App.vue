<template>
    <navbar />
    <parallax-image />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import ParallaxImage from '@/components/ParallaxImage.vue';

export default defineComponent({
    name: 'App',
    components: {
        Navbar,
        ParallaxImage,
    },
});
</script>
