<template>
    <Overlay />
    <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Overlay from '@/components/Overlay.vue';

@Options({
    components: {
        Overlay,
    },
})
export default class App extends Vue {}
</script>
