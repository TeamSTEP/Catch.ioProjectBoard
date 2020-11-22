<template>
    <Navbar />
    <router-view />
    <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';

@Options({
    components: {
        Navbar,
        Footer,
    },
})
export default class App extends Vue {}
</script>
