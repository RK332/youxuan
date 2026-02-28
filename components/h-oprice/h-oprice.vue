<template>
	<view class="line-through gray-color u-font-26" :style="'color:' + fontColor">
		{{ oprice }}
	</view>
</template>

<script>
	export default {
		props:{
			oprice:{
				type:Number,
				default:0
			},
			fontColor:{
				type:String,
				default:'#1bbf80'
			}
		}
	}
</script>

<style>
</style>
