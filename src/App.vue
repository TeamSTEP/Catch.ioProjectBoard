<template>
    <navbar />
    <mast-head />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import MastHead from '@/components/MastHead.vue';

export default defineComponent({
    name: 'App',
    components: {
        Navbar,
        MastHead,
    },
});
</script>
