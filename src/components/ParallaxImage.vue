<template>
    <div class="parallax-container">
        <img
            v-for="(layer, index) in layers"
            :id="'keyart-' + index"
            :key="layer.imgSrc"
            v-rellax="{ speed: layer.speed, zindex: index }"
            :alt="'layer-' + index"
            :src="layer.imgSrc"
            class="layer-image"
            :style="layer.style"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface ParallaxImageLayer {
    imgSrc: string;
    speed: number;
    style?: object; // inline CSS style object
}

const keyartLayers: ParallaxImageLayer[] = [
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
        speed: -10,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-6.png',
        speed: 10,
    },
    {
        imgSrc: 'src/assets/img/keyart/keyart-layer-7.png',
        speed: 7,
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
    {
        imgSrc: 'src/assets/img/logo.png',
        speed: 3,
        style: {
            top: '0px',
        },
    },
];

export default defineComponent({
    setup() {
        const layers = reactive(keyartLayers);

        return {
            layers,
        };
    },
});
</script>

<style scoped>
.parallax-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex: 1;
}

img.layer-image {
    position: absolute;
    height: auto;
    max-width: 100%;
}
</style>
