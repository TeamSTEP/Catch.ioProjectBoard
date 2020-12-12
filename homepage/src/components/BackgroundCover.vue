<template>
    <!--background media-->
    <video v-if="isVideo" autoplay muted loop id="background">
        <source :src="src" type="video/mp4" />
        Your browser does not support HTML5 video.
    </video>
    <div v-else id="background" :style="`background-image: url(${src})`"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

type BackgroundMedia = 'video' | 'image';

export default defineComponent({
    name: 'BackgroundCover',
    props: {
        src: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        // this assumes that if the provided source is not mp4, it's an image
        // having a full MIME comparison is overkill
        const isVideo = computed(() => {
            return props.src.endsWith('.mp4');
        });

        return {
            isVideo,
        };
    },
});
</script>

<style lang="scss">
#background {
    position: absolute;
    display: block;
    object-fit: cover;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>
