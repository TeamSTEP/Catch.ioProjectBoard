<template>
    <VueAgile
        :pause-on-hover="true"
        pause-on-dots-hover
        autoplay
        :autoplay-speed="10 * 1000"
        :speed="2000"
    >
        <div class="slide">
            <Introduction />
        </div>
        <div class="slide">
            <GamePlay />
        </div>

        <div class="slide">
            <DevelopmentInfo />
        </div>

        <div class="slide">
            <SocialNetwork />
        </div>
    </VueAgile>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Introduction from '@/views/sections/Introduction.vue';
import GamePlay from '@/views/sections/GamePlay.vue';
import DevelopmentInfo from '@/views/sections/DevelopmentInfo.vue';
import SocialNetwork from '@/views/sections/SocialNetwork.vue';
import { VueAgile } from 'vue-agile';

@Options({
    components: {
        Introduction,
        VueAgile,
        GamePlay,
        DevelopmentInfo,
        SocialNetwork,
    },
})
export default class Home extends Vue {}
</script>

<style lang="sass">
.agile
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

// Slides styles
.slide
	display: block
	height: 100vh
	object-fit: cover
	width: 100%
</style>
