<template>
	<view>
		<u-navbar title="优惠券" :is-back="true" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<u-gap height="30"></u-gap>
		<view class="px-20">
			<view class="" v-for="(item,index) in couponList" :key="index">
				<view class="u-border-radius shadow d-flex a-center j-sb u-m-b-30" style="height: 180rpx;overflow: hidden;">
					<view class="d-flex flex-column u-m-l-10">
						<text class="u-font-32 u-m-b-15 font-weight">{{ item.title }}</text>
						<text class="u-font-20">{{ $u.timeFormat(item.startTime,"yyyy年mm月dd日") + '~' + $u.timeFormat(item.endTime,"yyyy年mm月dd日")}}</text>
					</view>
					<template v-if="item.disable">
						<view class="d-flex flex-column bg-main-color h-100 a-center j-center white-color" style="width: 240rpx;">
							<view class="u-m-t-10">
								<text class="u-font-40 font-weight">{{ item.type == 1 ? item.price : (item.discount*10)}}</text>
								<text class="u-font-28 font-weight">{{ item.type == 1 ? '元' : '折'}}</text>
							</view>
							<text class="u-font-24 my-10">{{ item.type == 1 ? '满减' : '折扣'}}</text>
							<u-tag text="去使用" type="success"></u-tag>
						</view>
					</template>
					<template v-else>
						<view class="d-flex flex-column h-100 a-center j-center white-color" style="width: 240rpx;background-color: #CCCCCC;">
							<view class="u-m-t-10">
								<text class="u-font-40 font-weight">{{ item.type == 1 ? item.price : (item.discount*10)}}</text>
								<text class="u-font-28 font-weight">{{ item.type == 1 ? '元' : '折'}}</text>
							</view>
							<text class="u-font-24 my-10">{{ item.type == 1 ? '满减' : '折扣'}}</text>
							<u-tag text="已过期" type="info"></u-tag>
						</view>
					</template>
				</view>
				<!-- <view class="u-border-radius shadow d-flex a-center j-sb" style="height: 180rpx;overflow: hidden;">
					<view class="d-flex flex-column u-m-l-10">
						<text class="u-font-32 u-m-b-15 font-weight">优惠券1</text>
						<text class="u-font-20">2021年10月1日至2021年10月31日</text>
					</view>
					<view class="d-flex flex-column h-100 a-center j-center white-color" style="width: 240rpx;background-color: #CCCCCC;">
						<text class="u-font-40 font-weight u-m-t-10">100元</text>
						<text class="u-font-24 my-10">满减</text>
						<u-tag text="去使用" type="info"></u-tag>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import couponList from "@/common/data/coupon.js"
	export default {
		data() {
			return {
				couponList:couponList
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
