<template>
	<view class="container">
		<u-navbar title="我的订单" :is-back="true" title-color="#000000" :title-bold="true"></u-navbar>
		<view>
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false" active-color="#1bbf80"
			 swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" :style="'height:' + getScrollH + 'px'">
			<swiper-item class="swiper-item" v-for="(item, index) in orderList" :key="index">
				<scroll-view scroll-y style="width: 100%;" @scrolltolower="onreachBottom" :style="'height:' + getScrollH + 'px'">
					<template v-if="item.length != 0">
						<view class="mx-20 my-30 px-20 u-border-radius shadow bg-white-color u-m-b-30" v-for="(itemOne,indexOne) in item" :key="indexOne">
							<view class="d-flex j-sb a-center" style="height: 100rpx;border-bottom: 2rpx solid #dddddd;">
								<view class="">
									<text>订单号:</text>
									<text>{{ itemOne.orderNo }}</text>
								</view>
								<view class="u-font-30 font-weight main-color">{{ itemOne.orderStatus }}</view>
							</view>
							<view class="d-flex u-border-bottom py-30 flex-column">
								<view v-for="(itemTwo,indexTwo) in itemOne.goodsList" :key="indexTwo" class="d-flex a-center u-m-b-30 u-border-bottom u-p-b-30">
									<image :src="itemTwo.goodsThumb[0]" mode="" class="img-160 flex-shrink u-m-r-20"></image>
									<view class="d-flex flex-column j-sb u-line-1 w-100">
										<view class="d-flex flex-column u-m-b-20">
											<view class="font-weight u-font-32 u-line-1 u-m-b-10">{{ itemTwo.goodsName }}</view>
											<view class="u-font-24 d-flex" >
												<text v-for="(itemThree,indexThree) in itemTwo.goodsAttrs" :key="indexThree" class="u-border u-border-radius px-10 py-5 u-m-r-10">
												{{ itemThree.list[itemThree.selected].name }}
												</text>
											</view>
										</view>
										<view class="d-flex j-sb a-end">
											<text>x{{ itemTwo.goodsNum }}</text>
											<h-pprice :pprice="itemTwo.pPrice"></h-pprice>
										</view>
									</view>
								</view>
								<view class="d-flex flex-column a-end" style="border-top: 2rpx solid #dddddd;">
									<view class="d-flex a-end u-m-t-10" style="height: 60rpx;">
										<view class="d-flex j-end a-end u-m-r-30">
											<text class="gray-color u-font-24">总价:</text>
											<h-oprice :oprice="itemOne.orderOPrice"></h-oprice>
										</view>
										<view class="d-flex j-end a-end">
											<text class="gray-color u-font-24">实付款:</text>
											<h-pprice :pprice="itemOne.orderPPrice"></h-pprice>
										</view>
									</view>
									<view class="d-flex a-center u-m-t-20" style="height: 60rpx;">
										<u-tag text="提醒发货" type="success" class="u-m-r-30"></u-tag>
										<u-tag text="查看物流" type="info"></u-tag>
									</view>
								</view>
							</view>
						</view>
						<u-gap height="5"></u-gap>
					</template>
					<template v-else>
						<view style="margin-top: 300rpx;">
							<u-empty text="空空如也..." mode="car"></u-empty>
						</view>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import orderList from "@/common/data/orderList.js"
	export default {
		data() {
			return {
				list: [{
					name: '待付款'
				}, {
					name: '待发货'
				}, {
					name: '待收货'
				}, {
					name: '已完成'
				}, {
					name: '退款'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				tabs:[1,2,3,4,5],
				scrollH:0,
				orderList: orderList
			};
		},
		onLoad(e) {
			let systemInfo = uni.getSystemInfoSync()
			this.scrollH = systemInfo.windowHeight
			if(e.orderInfo){
				let orderInfo = JSON.parse(e.orderInfo)
				if(orderInfo.orderStatus == "待发货"){
					this.current = 1
					this.swiperCurrent = 1
					this.orderList[1].unshift(orderInfo)
				}
			}
		},
		computed:{
			getScrollH(){
				return this.scrollH - 44 - 40
			}
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				
			}
		}
	};
</script>
