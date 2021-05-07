<template>
    <div class="container">
        <parallax-image :layers="mockLayers" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ParallaxImage from '@/components/ParallaxImage.vue';

const mockLayers = [
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-1.png',
        speed: 4,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-2.png',
        speed: 8,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-3.png',
        speed: 8,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-4.png',
        speed: 9,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-5.png',
        speed: 10,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-6.png',
        speed: 10,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-7.png',
        speed: 10,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-8.png',
        speed: 10,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-9.png',
        speed: 10,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-10.png',
        speed: 10,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-11.png',
        speed: 10,
    },
];

export default defineComponent({
    name: 'MastHead',
    components: {
        ParallaxImage,
    },
    setup() {
        return {
            mockLayers,
        };
    },
});
</script>
