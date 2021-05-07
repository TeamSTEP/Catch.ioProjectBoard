<template>
    <div id="parallax" class="keyart container">
        <div
            v-for="(layer, index) in layers"
            :id="'keyart-' + index"
            :key="layer.imgSrc"
            v-rellax="{ speed: layer.speed }"
            class="keyart_layer parallax"
        >
            <img :alt="'layer-' + index" :src="layer.imgSrc" class="keyart_layer" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface ParallaxImageLayer {
    imgSrc: string;
    speed: number;
}

export default defineComponent({
    props: {
        layers: {
            type: Array as () => ParallaxImageLayer[],
            required: true,
        },
    },
});
</script>

<style scoped>
#parallax {
    position: relative;
}

.container {
    min-height: 100vh;
    width: 100%;
}

.keyart_layer.parallax {
    position: absolute;
}

img.keyart_layer {
    height: auto;
    width: 100%;
}
</style>
