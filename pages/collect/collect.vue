<template>
	<view>
		<u-navbar title="收藏列表" :is-back="true" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<u-gap height="30"></u-gap>
		<h-goods-listrow :goodsList="goodsData" :isCollect="true"></h-goods-listrow>
	</view>
</template>

<script>
	import goodsData from "@/common/data/collect.js"
	export default {
		data() {
			return {
				goodsData: goodsData
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
