<template>
    <!--Nav-->
    <nav id="header" class="w-full z-30 top-0 text-white shadow">
        <div
            class="w-full container mx-auto flex justify-center md:justify-start mt-0 py-4 max-h-auto"
        >
            <a
                class="no-underline hover:no-underline font-bold text-4xl text-white flex flex-row items-center"
                href="#"
            >
                <img
                    :src="require('@/assets/img/icon-1024.png')"
                    class="max-h-12 h-auto w-auto px-5 m-auto"
                    alt="logo"
                />
                <span id="title-text">Witch One</span>
            </a>
        </div>
        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Navbar extends Vue {}
</script>

<style lang="scss">
#header {
    background-color: #1c0f67;
    backdrop-filter: blur(5px);
    #title-text {
        font-family: 'Annie Use Your Telescope', Helvetica, Arial, cursive;
        text-shadow: 2px 2px 5px black;
    }
}
</style>
