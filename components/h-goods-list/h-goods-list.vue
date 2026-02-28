<template>
	<view class="px-20 d-flex j-sb flex-wrap u-m-t-40">
		<view v-for="(item,index) in goodsList" @click="jump(item)" class="shadow u-m-b-30" style="border-top-left-radius: 10rpx;border-top-right-radius: 10rpx;width: 345rpx;">
			<image :src="item.goodsThumb[0]" mode="" class="img-345" style="border-top-left-radius: 10rpx;border-top-right-radius: 10rpx;"></image>
			<view class="px-10">
				<view class="u-line-1 u-font-28 font-weight black-color my-10">{{ item.goodsName }}</view>
				<view class="u-line-1 u-font-24 gray-color">{{ item.goodsDesc }}</view>
			</view>
			<view class="d-flex j-sb px-20 u-m-t-5">
				<view class="d-flex a-end">
					<h-pprice :pprice="item.pPrice"></h-pprice>
					<h-oprice :oprice="item.oPrice"></h-oprice>
				</view>
				<u-icon name="shopping-cart" color="#1bbf80" size="36"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			goodsList:{
				type:Array,
				default:[]
			}
		},
		methods:{
			jump(item){
				this.$u.route({
					url:'/pages/goods/goods',
					params:{
						goodsData:JSON.stringify(item)
					}
				})
			}
		}
	}
</script>

<style>
</style>
