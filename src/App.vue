<template>
    <navbar />
    <mast-head>
        <div class="logo">
            <img alt="Vue logo" src="./assets/img/logo.png" />
        </div>
        <hello-world msg="Welcome to Witch One" />
    </mast-head>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
import MastHead from './components/MastHead.vue';

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld,
        Navbar,
        MastHead,
    },
});
</script>

<style>
@import './assets/styles/base.css';
</style>
