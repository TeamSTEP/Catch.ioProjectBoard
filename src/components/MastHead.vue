<template>
    <parallax-image />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ParallaxImage from '@/components/ParallaxImage.vue';

export default defineComponent({
    name: 'MastHead',
    components: {
        ParallaxImage,
    },
});
</script>
