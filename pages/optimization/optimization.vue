<template>
	<view>
		<u-navbar title="优选商品" :is-back="false" class="shadow"></u-navbar>
		<u-gap height="30"></u-gap>
		<u-waterfall v-model="goodsList" class="" ref="Uwaterfall">
			<template v-slot:left="{leftList}">
				<view v-for="(item, index) in leftList" :key="index" @click="jump(item)" class="shadow u-m-b-30 u-m-l-20"
					style="border-top-left-radius: 10rpx;border-top-right-radius: 10rpx;width: 345rpx;overflow: hidden;">
					<!-- 这里编写您的内容，改为文字占位图 -->
					<view style="border-top-left-radius: 10rpx;border-top-right-radius: 10rpx;height: 345rpx;background-color:#E8F7F1;"
						class="d-flex a-center j-center">
						<text class="u-font-28 main-color u-line-2 t-justify px-20">{{ item.goodsName }}</text>
					</view>
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
			</template>
			<template v-slot:right="{rightList}">
				<view v-for="(item, index) in rightList" :key="index" @click="jump(item)" class="shadow u-m-b-30 u-m-l-10"
					style="border-top-left-radius: 10rpx;border-top-right-radius: 10rpx;width: 345rpx;overflow: hidden;">
					<!-- 这里编写您的内容，改为文字占位图 -->
					<view style="border-top-left-radius: 10rpx;border-top-right-radius: 10rpx;height: 345rpx;background-color:#E8F7F1;"
						class="d-flex a-center j-center">
						<text class="u-font-28 main-color u-line-2 t-justify px-20">{{ item.goodsName }}</text>
					</view>
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
			</template>
		</u-waterfall>
		<u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" />
		<u-gap height="100"></u-gap>
	</view>
</template>

<script>
	import waterFallGoods from "@/common/data/waterFallGoods.js"
	export default {
		data() {
			return {
				flowList: waterFallGoods,
				goodsList: [],
				status: 'loadmore',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				}
			}
		},
		onReachBottom() {
			this.status = 'loading'
			setTimeout(()=>{
				this.addRandomGoods()
			},1000)
		},
		onPullDownRefresh() {
			uni.showToast({
				title: '刷新中...',
				icon: 'none'
			})
			setTimeout(() => {
				uni.hideLoading()
				this.refreshList()
				uni.stopPullDownRefresh()
				uni.showToast({
					title: '刷新成功',
					icon: 'none'
				})
			}, 1000)
		},
		onLoad() {
			this.addRandomGoods()
		},
		methods: {
			addRandomGoods() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.flowList.length - 1)
					let item = this.flowList[index]
					this.goodsList.push(item)
				}
			},
			async refreshList() {
				await this.$refs.Uwaterfall.clear()
				this.addRandomGoods()
			},
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
