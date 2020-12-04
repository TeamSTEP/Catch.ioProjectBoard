<template>
    <div class="corner">
        <RuneIcon class="top-left" />
        <RuneIcon class="top-right" />
        <RuneIcon class="bottom-left" />
        <RuneIcon class="bottom-right" />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import RuneIcon from '@/components/icons/RuneIcon.vue';

@Options({
    components: {
        RuneIcon,
    },
})
export default class Overlay extends Vue {}
</script>

<style lang="scss">
.corner {
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    z-index: 2;

    .top-left {
        position: fixed;
        transform: translate(0%, 0%);
        -webkit-transform: translate(0%, 0%);
        top: 0%;
        left: 0%;
        width: 5rem;
        height: auto;
    }
    .top-right {
        position: fixed;
        transform: translate(-100%, 0%);
        -webkit-transform: translate(-100%, 0%);
        top: 0%;
        left: 100%;
        width: 5rem;
        height: auto;
    }
    .bottom-left {
        position: fixed;
        transform: translate(0%, -100%);
        -webkit-transform: translate(0%, -100%);
        top: 100%;
        left: 0%;
        width: 5rem;
        height: auto;
    }
    .bottom-right {
        position: fixed;
        transform: translate(-100%, -100%);
        -webkit-transform: translate(-100%, -100%);
        top: 100%;
        left: 100%;
        width: 5rem;
        height: auto;
    }
}
</style>
