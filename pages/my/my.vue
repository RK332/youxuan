<template>
	<view>
		<!-- #ifndef H5 -->
		<u-navbar title="个人中心" :is-back="false" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<!-- #endif -->
		<view class="" style="height: 450rpx;background-image: linear-gradient(to left,#1bbf80,#1ecc93);">
			<view class="d-flex j-sb a-start">
				<view class="d-flex a-center" style="padding-top: 90rpx;">
					<u-avatar src="/static/images/avatar.png" mode="circle" size="160" :show-level="true" class="mx-30"></u-avatar>
					<view class="d-flex flex-column white-color">
						<text class="u-font-36 font-weight" style="letter-spacing: 5rpx;" @click="jump('/pages/login/login')">登录/注册</text>
						<text>ID:16666666666</text>
					</view>
				</view>
				<view class="u-m-r-10" style="position: relative;" @click="jump('/pages/message/message')">
					<u-icon name="chat" size="60" color="#ffffff" style="margin-right: 20rpx;margin-top: 20rpx;"></u-icon>
					<u-badge type="error" count="7" size="mini" :offset="[10,10]"></u-badge>
				</view>
			</view>
			<view class="white-color u-m-t-45 d-flex j-sa">
				<view class="d-flex flex-column a-center">
					<text class="u-font-40 font-weight">166</text>
					<text class="u-font-30">余额</text>
				</view>
				<view class="d-flex flex-column a-center">
					<text class="u-font-40 font-weight">3930</text>
					<text class="u-font-30">积分</text>
				</view>
				<view class="d-flex flex-column a-center">
					<text class="u-font-40 font-weight">6</text>
					<text class="u-font-30">优惠券</text>
				</view>
			</view>
		</view>
		
		<view class="bg-white-color u-m-t-20">
			<u-section title="我的订单" font-size="32" color="#1bbf80" style="height: 100rpx;" @click="jump('/pages/order/order')"></u-section>
			<view class="d-flex j-sa u-padding-bottom-20">
				<view class="d-flex flex-column a-center">
					<view class="img-80 my-20 bg-main-color u-padding-10 u-border-radius-lg d-flex a-center j-center white-color u-font-26">
						待付款
					</view>
					<text class="gray-color">待付款</text>
				</view>
				<view class="d-flex flex-column a-center">
					<view class="img-80 my-20 bg-main-color u-padding-10 u-border-radius-lg d-flex a-center j-center white-color u-font-26">
						待发货
					</view>
					<text class="gray-color">待发货</text>
				</view>
				<view class="d-flex flex-column a-center">
					<view class="img-80 my-20 bg-main-color u-padding-10 u-border-radius-lg d-flex a-center j-center white-color u-font-26">
						待收货
					</view>
					<text class="gray-color">待收货</text>
				</view>
				<view class="d-flex flex-column a-center">
					<view class="img-80 my-20 bg-main-color u-padding-10 u-border-radius-lg d-flex a-center j-center white-color u-font-26">
						已完成
					</view>
					<text class="gray-color">已完成</text>
				</view>
				<view class="d-flex flex-column a-center">
					<view class="img-80 my-20 bg-main-color u-padding-10 u-border-radius-lg d-flex a-center j-center white-color u-font-26">
						退款
					</view>
					<text class="gray-color">退款</text>
				</view>
			</view>
		</view>
		<view class="">
			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="star" title="我的收藏" @click="jump('/pages/collect/collect')"></u-cell-item>
					<u-cell-item icon="coupon" title="优惠券" @click="jump('/pages/coupon/coupon')"></u-cell-item>
					<u-cell-item icon="photo" title="收货地址" @click="jump('/pages/address/address')"></u-cell-item>
					<u-cell-item icon="heart" title="关于我们" @click="jump('/pages/aboutUs/aboutUs')"></u-cell-item>
				</u-cell-group>
			</view>
			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="setting" title="设置" @click="jump('/pages/setting/setting')"></u-cell-item>
				</u-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jump(url){
				this.$u.route({
					url:url
				})
			}
		}
	}
</script>

<style>

</style>
