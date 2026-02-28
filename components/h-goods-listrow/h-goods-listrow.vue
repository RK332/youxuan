<template>
	<view class="px-20">
		<view v-for="(item,index) in goodsList" :key="index" class="shadow u-border-radius d-flex u-p-10 a-center u-m-b-20" style="height: 200rpx;">
			<view class="flex-shrink img-160 u-border-radius mx-10 d-flex a-center j-center" style="background-color: #E8F7F1;">
				<text class="u-font-26 main-color u-line-2 t-justify">{{ item.goodsName }}</text>
			</view>
			<view class="d-flex flex-column j-sb h-100 u-line-1 u-p-r-10 w-100">
				<view class="u-m-t-10">
					<view class="u-line-1 u-font-32 u-m-b-5">{{ item.goodsName }}</view>
					<view class="u-line-1 u-font-26 gray-color">{{ item.goodsDesc }}</view>
				</view>
				<view class="d-flex j-sb w-100">
					<view class="d-flex a-end">
						<h-pprice :pprice="item.pPrice" style="margin-bottom: -5rpx;"></h-pprice>
						<h-oprice :oprice="item.oPrice"></h-oprice>
					</view>
					<view class="">
						<view class="" v-if="goodsNumStatus">
							x{{ item.goodsNum }}
						</view>
						<view class="" v-if="buttonStatus">
							<template v-if="!isCollect">
								<view class=""><u-button type="success" size="mini" @click="goGoodsDetail(item)">立刻购买</u-button></view>
							</template>
							<template v-else>
								<view class="d-flex">
									<view class="u-m-r-15"><u-button type="warning" size="mini">取消收藏</u-button></view>
									<view class=""><u-button type="success" size="mini" @click="goGoodsDetail(item)">立刻购买</u-button></view>
								</view>
							</template>
						</view>
					</view>
				</view>
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
			},
			isCollect:{
				type:Boolean,
				default:false
			},
			buttonStatus:{
				type:Boolean,
				default:true
			},
			goodsNumStatus:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			goGoodsDetail(item){
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
