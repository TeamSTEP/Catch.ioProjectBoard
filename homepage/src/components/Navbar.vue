<template>
    <!--Nav-->
    <nav id="header" class="fixed w-full z-30 top-0 text-white shadow bg-rocky">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div class="pl-4 flex items-center">
                <a
                    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-white"
                    href="#"
                >
                    <!--Icon from: http://www.potlabicons.com/ -->
                    <svg
                        class="h-8 fill-current inline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512.005 512.005"
                    >
                        <rect
                            fill="#2a2a31"
                            x="16.539"
                            y="425.626"
                            width="479.767"
                            height="50.502"
                            transform="matrix(1,0,0,1,0,0)"
                        />
                        <path
                            class="plane-take-off"
                            d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                        />
                    </svg>
                    Witch One
                </a>
            </div>
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
}
</style>
