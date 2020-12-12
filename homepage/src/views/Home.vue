<template>
    <vue-agile :speed="2000" class="w-screen h-screen">
        <div class="slide">
            <introduction />
        </div>
        <div class="slide">
            <game-play />
        </div>

        <div class="slide">
            <development-info />
        </div>

        <div class="slide">
            <social-network />
        </div>
    </vue-agile>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Introduction from '@/views/sections/Introduction.vue';
import GamePlay from '@/views/sections/GamePlay.vue';
import DevelopmentInfo from '@/views/sections/DevelopmentInfo.vue';
import SocialNetwork from '@/views/sections/SocialNetwork.vue';
import Navbar from '@/components/Navbar.vue';
import { VueAgile } from 'vue-agile';

@Options({
    components: {
        Introduction,
        VueAgile,
        GamePlay,
        DevelopmentInfo,
        SocialNetwork,
        Navbar,
    },
})
export default class Home extends Vue {}
</script>

<style lang="sass">
.agile
	&__list
		position: absolute
		height: 100%
	&__slide
		height: 100%
	&__nav-button
		background: transparent
		border: none
		color: #aaa
		cursor: pointer
		font-size: 24px
		height: 100%
		position: absolute
		top: 0
		transition-duration: .3s
		width: 80px

		&:hover
			background-color: rgba(#000, .5)
			opacity: 1

		&--prev
			left: 0

		&--next
			right: 0

	&__dots
		bottom: 10px
		left: 50%
		position: absolute
		transform: translateX(-50%)

	&__dot
		margin: 0 10px

		button
			background-color: transparent
			border: 1px solid #aaa
			border-radius: 50%
			cursor: pointer
			display: block
			height: 10px
			font-size: 0
			line-height: 0
			margin: 0
			padding: 0
			transition-duration: .3s
			width: 10px

		&--current,
		&:hover
			button
				background-color: #888
</style>
