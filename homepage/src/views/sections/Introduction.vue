<template>
    <PageOutline>
        <div class="relative w-screen h-screen">
            <video autoplay muted loop id="background">
                <source :src="require('@/assets/video/background.mp4')" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>

            <div class="pt-24 relative" id="content">
                <div
                    class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
                >
                    <!--Left Col-->
                    <div
                        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
                    >
                        <p class="uppercase tracking-loose w-full text-white">
                            Witch One
                        </p>
                        <h1 class="my-4 text-5xl font-bold leading-tight text-white">
                            The Stealthy Battle Royale
                        </h1>
                        <!--text divider-->
                        <div class="w-full mb-4">
                            <div
                                class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
                            ></div>
                        </div>
                        <p class="leading-normal text-2xl mb-8 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                            ipsum eu nunc commodo posuere et sit amet ligula.
                        </p>
                    </div>
                    <!--Right Col-->
                    <div class="w-full md:w-3/5 py-6 text-center">
                        <img
                            class="animate-wiggle w-full md:w-4/5 z-50"
                            src="@/assets/img/title.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PageOutline>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import PageOutline from '@/components/PageOutline.vue';

@Options({
    components: {
        PageOutline,
    },
})
export default class Introduction extends Vue {}
</script>

<style lang="scss">
#background {
    position: absolute;
    display: block;
    object-fit: cover;
    top: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}
#content {
    h1 {
        font-family: 'Annie Use Your Telescope', Helvetica, Arial, cursive;
    }
}
</style>
