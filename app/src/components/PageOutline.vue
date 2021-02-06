<template>
    <div class="relative w-full h-full">
        <slot></slot>
        <div id="edges" class="w-full h-full">
            <rune-circle-icon class="top-left" />
            <rune-circle-icon class="top-right" />
            <rune-circle-icon class="bottom-left" />
            <rune-circle-icon class="bottom-right" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RuneCircleIcon from '@/components/icons/RuneCircleIcon.vue';

export default defineComponent({
    name: 'PageOutline',
    components: {
        RuneCircleIcon,
    },
});
</script>

<style lang="scss">
#edges {
    // corner icon size
    .top-left,
    .top-right,
    .bottom-left,
    .bottom-right {
        position: absolute;
        width: 4rem;
        height: auto;
    }

    // icon position is relative to the parent div
    .top-left {
        transform: translate(0%, 0%);
        -webkit-transform: translate(0%, 0%);
        top: 0%;
        left: 0%;
    }
    .top-right {
        transform: translate(-100%, 0%);
        -webkit-transform: translate(-100%, 0%);
        top: 0%;
        left: 100%;
    }
    .bottom-left {
        transform: translate(0%, -100%);
        -webkit-transform: translate(0%, -100%);
        top: 100%;
        left: 0%;
    }
    .bottom-right {
        transform: translate(-100%, -100%);
        -webkit-transform: translate(-100%, -100%);
        top: 100%;
        left: 100%;
    }
}
</style>
