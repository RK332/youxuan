<template>
	<view class="container bg-white-color u-skeleton">
		<u-swiper height="750" border-radius="0" :list="goodsInfo.goodsThumb" class="u-skeleton-rect"></u-swiper>
		<view class="d-flex j-sb a-center bg-main-color px-20 u-skeleton-rect" style="height: 100rpx;">
			<view class="d-flex a-end">
				<h-pprice :pprice="goodsInfo.pPrice" fontColor="#ffffff" fontSize="50" style="margin-bottom: -10rpx;"></h-pprice>
				<h-oprice :oprice="goodsInfo.oPrice" fontColor="#ffffff"></h-oprice>
			</view>
			<view class="d-flex flex-column a-end j-sb h-100 py-10">
				<text class="white-color u-font-24">限时抢购</text>
				<u-count-down :timestamp="86400" font-size="28" color="#1bbf80" separator-color="#ffffff"></u-count-down>
			</view>
		</view>
		<view class="d-flex flex-column u-p-10">
			<text class="u-font-32 font-weight main-color my-10 u-skeleton-rect">{{ goodsInfo.goodsName }}</text>
			<text class="u-font-28 gray-color u-skeleton-rect">{{ goodsInfo.goodsDesc }}</text>
		</view>
		<view class="u-border u-border-radius u-m-10" style="overflow: hidden;">
			<u-cell-group class="u-skeleton-rect">
				<u-cell-item title="规格" @click="goodsAttrsShow"></u-cell-item>
				<u-cell-item title="参数" @click="goodsParamsShow"></u-cell-item>
				<u-cell-item title="评论" @click="goodsCommentsShow"></u-cell-item>
				<u-cell-item :arrow="false">
					<view class="d-flex j-sb">
						<view class="d-flex a-center">
							<u-icon name="checkmark-circle" size="36" class="u-m-r-10" color="#1bbf80"></u-icon>
							<text>实体公司</text>
						</view>
						<view class="d-flex a-center">
							<u-icon name="checkmark-circle" size="36" class="u-m-r-10" color="#1bbf80"></u-icon>
							<text>专业靠谱</text>
						</view>
						<view class="d-flex a-center">
							<u-icon name="checkmark-circle" size="36" class="u-m-r-10" color="#1bbf80"></u-icon>
							<text>体系完善</text>
						</view>
						<view class="d-flex a-center">
							<u-icon name="checkmark-circle" size="36" class="u-m-r-10" color="#1bbf80"></u-icon>
							<text>优质服务</text>
						</view>
					</view>
				</u-cell-item>
			</u-cell-group>
		</view>
		<!-- 全局去掉“商品详情”模块（标题 + 详情内容） -->
		<h-rec-title title="猜您喜欢" desc="Pick of the week" class="u-skeleton-rect"></h-rec-title>
		<h-goods-list :goodsList="goodsList" class="u-skeleton-rect"></h-goods-list>
		<u-gap height="100"></u-gap>
			<view class="d-flex j-sb bg-white-color shadow w-100 a-center p-fixed left-0 right-0 bottom-0" style="height: 100rpx;">
			<view class="d-flex j-sa u-flex-1 j-end">
				<view class="d-flex flex-column a-center" @click="jump('/pages/index/index','switchTab')">
					<view class="d-flex a-center j-center bg-main-color white-color u-border-radius" style="height: 45rpx;width: 45rpx;">
						<text class="u-font-22">首页</text>
					</view>
				</view>
				<view class="d-flex flex-column a-center">
					<view class="d-flex a-center j-center bg-main-color white-color u-border-radius" style="height: 45rpx;width: 45rpx;">
						<text class="u-font-22">收藏</text>
					</view>
				</view>
				<view class="d-flex flex-column a-center">
					<view class="d-flex a-center j-center bg-main-color white-color u-border-radius" style="height: 45rpx;width: 45rpx;">
						<text class="u-font-22">客服</text>
					</view>
				</view>
			</view>
			<view class="bg-main-color white-color u-font-36 font-weight d-flex a-center j-center h-100" hover-class="u-hover-class" style="width: 360rpx;" @click="addCart">立刻购买</view>
		</view>
		<u-skeleton :loading="loading" :animation="true"></u-skeleton>
		
		<!-- 商品属性遮罩层 -->
		<u-mask @click="clearMark" :show="attrsShow" :duration="400" :custom-style="{ background: 'rgba(0,0,0,0.75)'}">
			<view class="p-fixed left-0 right-0 bottom-0" @tap.stop>
				<view class="bg-white-color u-p-t-40 px-20" style="height: 1000rpx;border-radius: 20rpx 20rpx 0 0;overflow: hidden;">
					<!-- 商品基本信息 -->
					<view class="d-flex">
						<image :src="goodsInfo.goodsThumb[0]" mode="" style="height: 180rpx;width: 180rpx;" class="u-m-r-20 flex-shrink u-border-radius"></image>
						<view class="d-flex flex-column j-sb w-100 u-line-1">
							<view class="w-100">
								<view class="u-font-32 font-weight u-m-b-20 u-line-1">{{ goodsInfo.goodsName }}</view>
								<view class="u-font-24 u-line-1">{{ goodsInfo.goodsDesc }}</view>
							</view>
							<view class="d-flex a-end j-end">
								<h-pprice :pprice="goodsInfo.pPrice" :fontSize="50" style="margin-bottom: -10rpx;" class="u-m-r-15"></h-pprice>
								<h-oprice :oprice="goodsInfo.oPrice" fontColor="#999999"></h-oprice>
							</view>
						</view>
					</view>
					<!-- 商品属性 -->
					<scroll-view scroll-y="true" style="height: 580rpx;">
						<view class="u-m-t-60" v-for="(item,index) in goodsInfo.goodsAttrs" :key="index" @tap.stop>
							<u-section :title="item.title" font-size="32" color="#1bbf80" :arrow="false" :right="false"></u-section>
							<view class="d-flex flex-wrap u-m-t-30 u-border u-border-radius-big py-5 px-30 u-m-r-15" v-for="(itemOne,indexOne) in item.list" :key="indexOne" style="display: inline-block;" :class="item.selected == indexOne ? 'active-attr' : ''" @click="chooseAttr(item,indexOne)">
								<text class="">{{ itemOne.name }}</text>
							</view>
						</view>
					</scroll-view>
					<view class="d-flex j-sb a-center" style="height: 100rpx;">
						<text class="u-font-32 font-weight">商品数量</text>
						<u-number-box :min="1" :max="goodsInfo.goodsStock" :value="goodsInfo.goodsNum" color="#1bbf80"></u-number-box>
					</view>
					<u-button type="success" :ripple="true" ripple-bg-color="#1ecc93" @click="clearMark">确定</u-button>
				</view>
			</view>
		</u-mask>
		<u-mask @click="clearMark" :show="paramsShow" :duration="400" :custom-style="{ background: 'rgba(0,0,0,0.75)'}">
			<view class="p-fixed left-0 right-0 bottom-0" @tap.stop>
				<view class="bg-white-color u-p-t-40 px-20" style="height: 1000rpx;border-radius: 20rpx 20rpx 0 0;overflow: hidden;">
					<scroll-view scroll-y="true" style="height: 920rpx;">
						<u-table align="left">
							<u-tr style="80rpx" v-for="(item,index) in goodsInfo.goodsParams" :key="index">
								<u-th>{{ item.title}}</u-th>
								<u-td>{{ item.content }}</u-td>
							</u-tr>
						</u-table>
					</scroll-view>
				</view>
			</view>
		</u-mask>
		<u-mask @click="clearMark" :show="commentsShow" :duration="400" :custom-style="{ background: 'rgba(0,0,0,0.75)'}">
			<view class="p-fixed left-0 right-0 bottom-0">
				<view class="bg-white-color u-p-t-40 px-20" style="height: 1000rpx;border-radius: 20rpx 20rpx 0 0;overflow: hidden;">
					<scroll-view scroll-y="true" style="height: 920rpx;">
						<view class="d-flex my-30" v-for="(item,index) in goodsInfo.commentsList" :key="index">
							<image :src="item.avatar" class="u-border-radius-lg u-border flex-shrink u-m-r-15" style="height: 75rpx;width: 75rpx;" mode=""></image>
							<view class="d-flex flex-column u-flex-1">
								<view class="d-flex j-sb">
									<text class="u-font-30 font-weight">{{ item.userName }}</text>
									<u-rate :count="count" v-model="value"></u-rate>
								</view>
								<text class="u-font-26 u-m-t-10">{{ item.content }}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	import goodsList from "@/common/data/recGoods.js"
	import { mapState } from "vuex"
	export default {
		data() {
			return {
				swiperList: [
					'/static/category/dingzhikaifa.png',
					'/static/category/appshangjia.png',
				],
				goodsDetail:'<img src="/static/images/logo.png" /><img src="/static/images/cate1.png" /><img src="/static/images/cate2.png" /><img src="/static/images/cate3.png" /><img src="/static/category/dingzhikaifa.png" />',
				articleStyle:{
					img:'display:block'
				},
				goodsList:goodsList,
				loading:true,
				attrsShow:false,
				paramsShow:false,
				commentsShow:false,
				count:5,
				value:4,
				goodsInfo:''
			}
		},
		onLoad(e) {
			console.log(e);
			if(e.goodsData){
				this.goodsInfo = JSON.parse(e.goodsData)
			}
			setTimeout(() => {
				this.loading = false
			},1500)
		},
		computed:{
			...mapState({
				cartGoodsList:state=>state.cart.cartGoodsList
			})
		},
		methods: {
			goodsAttrsShow(){
				this.attrsShow = true
			},
			clearMark(){
				this.attrsShow = false
				this.paramsShow = false
				this.commentsShow = false
			},
			goodsParamsShow(){
				this.paramsShow =true
			},
			goodsCommentsShow(){
				this.commentsShow = true
			},
			jump(url,type="navigateTo"){
				this.$u.route({
					url:url,
					type:type
				})
			},
			chooseAttr(item,indexOne){
				item.selected = indexOne
			},
			addCart(){
				this.cartGoodsList.unshift(this.goodsInfo)
				uni.showToast({
					title: '加入购物车成功',
					icon:"none"
				});
				setTimeout(()=>{
					this.jump('/pages/cart/cart','switchTab')
				},500)
			}
		}
	}
</script>

<style>
	.active-attr{
		background-color: #1bbf80;
		color: #FFFFFF;
	}
</style>
