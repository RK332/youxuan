<template>
	<view class="main-color u-m-r-15" :style="'color:' + fontColor">
		<text class="font-weight u-font-26">￥</text>
		<text class="font-weight u-font-36" :style="'font-size:' + fontSize + 'rpx;'">{{ pprice }}</text>
	</view>
</template>

<script>
	export default {
		props:{
			pprice:{
				type:[Number,String],
				default:0
			},
			fontColor:{
				type:String,
				default:'#1bbf80'
			},
			fontSize:{
				type:[Number,String],
				default:36
			}
		}
	}
</script>

<style>
</style>
