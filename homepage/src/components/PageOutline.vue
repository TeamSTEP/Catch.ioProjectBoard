<template>
    <div class="container">
        <slot></slot>
        <div class="edges">
            <RuneIcon class="top-left" />
            <CenterArrowIcon class="top-mid" />
            <RuneIcon class="top-right" />
            <RuneIcon class="bottom-left" />
            <RuneIcon class="bottom-right" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import RuneIcon from '@/components/icons/RuneIcon.vue';
import CenterArrowIcon from '@/components/icons/CenterArrowIcon.vue';

@Options({
    components: {
        RuneIcon,
        CenterArrowIcon,
    },
})
export default class PageOutline extends Vue {}
</script>

<style lang="scss">
.container {
    position: relative;
}

.edges {
    .top-left,
    .top-right,
    .bottom-left,
    .bottom-right {
        position: absolute;
        width: 5rem;
        height: auto;
    }

    .top-mid {
        position: absolute;
        height: 5rem;
        width: auto;
        transform: translate(50%, 0%);
        -webkit-transform: translate(50%, 0%);
        top: 0%;
        left: 50%;
    }

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
        left: 100vw;
    }
    .bottom-left {
        transform: translate(0%, -100%);
        -webkit-transform: translate(0%, -100%);
        top: 100vh;
        left: 0%;
    }
    .bottom-right {
        transform: translate(-100%, -100%);
        -webkit-transform: translate(-100%, -100%);
        top: 100vh;
        left: 100vw;
    }
}
</style>
