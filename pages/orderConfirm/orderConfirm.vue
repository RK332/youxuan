<template>
	<view>
		<u-navbar title="确认订单" :is-back="true" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<view @click="changeAddress" class="d-flex px-20 j-sb u-m-t-45 u-padding-bottom-20"
			style="border-bottom: 5rpx dashed #1BBF80;" hover-class="u-hover-class">
			<view v-if="!newReceiveAdddressStatus" class="" style="width: 90%;">
				<view class="d-flex a-end u-m-b-10">
					<text class="u-font-30 font-weight u-m-r-10">{{ defaultAddress[0].name}}</text>
					<text class="u-font-26 gray-color">{{ defaultAddress[0].mobile }}</text>
				</view>
				<view class="u-line-1">
					{{ defaultAddress[0].area + ' ' + defaultAddress[0].detailAddress }}
				</view>
			</view>
			<view v-else class="" style="width: 90%;">
				<view class="d-flex a-end u-m-b-10">
					<text class="u-font-30 font-weight u-m-r-10">{{ newReceiveAddress.name}}</text>
					<text class="u-font-26 gray-color">{{ newReceiveAddress.mobile }}</text>
				</view>
				<view class="u-line-1">
					{{ newReceiveAddress.area + ' ' + newReceiveAddress.detailAddress }}
				</view>
			</view>
			<u-icon name="arrow-right"></u-icon>
		</view>
		<u-gap height="45" bg-color="#ffffff"></u-gap>
		<view class="bg-white-color">
			<u-section title="我的订单" color="#1bbf80" font-size="32" :arrow="false" class="u-p-r-20"
				:sub-title="'共 ' + orderGoodsCount + ' 件'"></u-section>
			<u-gap height="45" bg-color="#ffffff"></u-gap>
			<h-goods-listrow :goodsList="cartChooseGoodsList" :buttonStatus="false" :goodsNumStatus="true">
			</h-goods-listrow>
			<u-gap height="30" bg-color="#ffffff"></u-gap>
			<u-cell-group>
				<u-cell-item title="优惠券" :arrow="false" @click="chooseCoupon"><text>共{{ orderCount }}张优惠券</text>
				</u-cell-item>
				<u-cell-item title="订单总价" :arrow="false">
					<h-pprice :pprice="totalPrice" fontSize="36"></h-pprice>
				</u-cell-item>
			</u-cell-group>
			<u-gap height="45" bg-color="#ffffff"></u-gap>
			<u-section title="支付方式" color="#1bbf80" font-size="32" :arrow="false" class="u-p-r-20"></u-section>
			<u-gap height="30" bg-color="#ffffff"></u-gap>
			<view class="mx-30">
				<view v-for="(item,index) in payMethod" :key="index" @click="choosePay(index)"
					class="d-flex j-sb a-center u-m-b-30 u-border-bottom u-p-b-20">
					<view class="d-flex a-center">
						<u-icon :name="item.iconName" color="#ffffff" size="60"
							:style="'background-color:' + item.bgColor" class="u-p-10 u-border-radius u-m-r-30">
						</u-icon>
						<text class="u-font-30">{{ item.title }}</text>
					</view>
					<view class="">
						<label class="radio">
							<radio value="" color="#1BBF80" :checked="item.isChooseed" /><text></text>
						</label>
					</view>
				</view>
			</view>
			<view class="d-flex j-sb a-center p-fixed left-0 right-0 bottom-0 bg-white-color shadow"
				style="height: 100rpx;z-index: 99;">
				<view class="d-flex a-end">
					<text class="u-m-l-20">实付款:</text>
					<h-pprice :pprice="newOrderPrice ? newOrderPrice : totalPrice" fontSize="50" class="u-m-l-20"
						style="margin-bottom: -10rpx;"></h-pprice>
				</view>
				<view class="d-flex j-center a-center u-font-36 font-weight white-color bg-main-color"
					hover-class="u-hover-class" style="width: 360rpx;height: 100%;" @click="goPay">去支付</view>
			</view>
		</view>
		<u-gap height="100"></u-gap>
		<!-- 收货地址遮罩层 -->
		<u-mask @click="clearMark" :show="addressShow" :duration="400" :zoom="true"
			:custom-style="{ background:'rgba(0,0,0,0.75)'}">
			<view class="p-fixed left-0 right-0 bottom-0">
				<view class="bg-white-color u-p-t-40 px-20"
					style="height: 1000rpx;border-radius: 20rpx 20rpx 0 0;overflow: hidden;" @tap.stop>
					<scroll-view scroll-y="true" style="height: 900rpx;">
						<view @click="receiveAddress(item)" class="u-border-bottom u-m-b-30"
							hover-class="u-hover-class u-border-radius" v-for="(item,index) in addressList"
							:key="index">
							<view class="u-m-b-15">
								<u-tag v-if="item.isDefault" type="success" text="默认" class="u-m-r-15"></u-tag>
								<text class="u-font-32 font-weight u-m-r-15">{{ item.name }}</text>
								<text>{{ item.mobile }}</text>
							</view>
							<view class="u-line-1">{{ item.area + ' ' + item.detailAddress }}</view>
							<u-gap height="30"></u-gap>
						</view>
					</scroll-view>
				</view>
			</view>
		</u-mask>
		<!-- 优惠券列表 -->
		<u-mask @click="clearMark" :show="couponShow" :duration="400" :zoom="true"
			:custom-style="{ background:'rgba(0,0,0,0.75)'}">
			<view class="p-fixed left-0 right-0 bottom-0">
				<view class="bg-white-color u-p-t-40 px-20"
					style="height: 1000rpx;border-radius: 20rpx 20rpx 0 0;overflow: hidden;" @tap.stop>
					<scroll-view scroll-y="true" style="height: 900rpx;">
						<view class="u-p-10" v-for="(item,index) in ableCoupon" :key="index">
							<view class="shadow u-border-radius d-flex a-center j-sb u-m-b-30"
								style="height: 180rpx;overflow: hidden;" @click="useCoupon(index)">
								<view class="d-flex flex-column u-m-l-10">
									<text class="u-font-32 u-m-b-15 font-weight">{{ item.title }}</text>
									<text
										class="u-font-20">{{ $u.timeFormat(item.startTime,"yyyy年mm月dd日") + '~' + $u.timeFormat(item.endTime,"yyyy年mm月dd日")}}</text>
								</view>
								<view class="d-flex flex-column bg-main-color h-100 a-center j-center white-color"
									style="width: 240rpx;">
									<view class="u-m-t-10">
										<text
											class="u-font-40 font-weight">{{ item.type == 1 ? item.price : (item.discount*10)}}</text>
										<text class="u-font-28 font-weight">{{ item.type == 1 ? '元' : '折'}}</text>
									</view>
									<text class="u-font-24 my-10">{{ item.type == 1 ? '满减' : '折扣'}}</text>
									<u-tag text="去使用" type="success"></u-tag>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</u-mask>
		<!-- 支付键盘 -->
		<u-keyboard mode="number" :mask="true" :mask-close-able="false" :dot-enabled="false"
			:safe-area-inset-bottom="true" :tooltip="false" v-model="keyboardShow" @change="changeNum"
			@backspace="delPassword">
			<view class="u-m-b-20">
				<view class="u-p-20 d-flex">
					<view style="width: 95%;" class="d-flex a-end j-center">
						<h-pprice :pprice="newOrderPrice" fontSize="60" class="u-m-l-20" style="margin-bottom: -10rpx;">
						</h-pprice>
						<text class="u-font-20">元</text>
					</view>
					<view class="d-flex j-end a-start" style="width: 5%;" @click="closeKeyboard">
						<u-icon name="close" color="#333333" size="20"></u-icon>
					</view>
				</view>
				<view class="d-flex j-center">
					<u-message-input mode="box" :maxlength="6" :dot-fill="true" :disabled-keyboard="true"
						v-model="password"></u-message-input>
				</view>
			</view>
		</u-keyboard>
	</view>
</template>

<script>
	import goodsList from "@/common/data/cartGoodsList"
	import {
		mapState,
		mapGetters,
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				goodsList: goodsList,
				addressShow: false,
				newReceiveAddress: '',
				newReceiveAdddressStatus: false,
				couponShow: false,
				newOrderPrice: 0,
				payMethod: [{
						id: 1,
						type: 'weixin',
						iconName: 'weixin-fill',
						bgColor: '#1bbf80',
						title: '微信支付',
						isChooseed: true
					},
					{
						id: 2,
						type: 'zhifubao',
						iconName: 'zhifubao',
						bgColor: '#007aff',
						title: '支付宝支付',
						isChooseed: false
					}
				],
				keyboardShow: false,
				password: ''
			}
		},
		computed: {
			...mapState({
				addressList: state => state.address.addressList,
				cartChooseGoodsList: state => state.cart.chooseGoodsList,
				ableCoupon: state => state.coupon.ableCoupon
			}),
			...mapGetters([
				'defaultAddress',
				'totalPrice'
			]),
			orderGoodsCount() {
				return this.cartChooseGoodsList.length
			},
			orderCount() {
				return this.ableCoupon.length
			}
		},
		onLoad() {
			this.doCoupon(this.totalPrice)
		},
		onUnload() {
			this.clearCoupon()
		},
		methods: {
			...mapMutations([
				'doCoupon',
				'clearCoupon'
			]),
			changeAddress() {
				this.addressShow = true
			},
			receiveAddress(item) {
				this.newReceiveAddress = item
				this.newReceiveAdddressStatus = true
				this.addressShow = false
			},
			chooseCoupon() {
				this.couponShow = true
			},
			clearMark() {
				this.addressShow = false
				this.couponShow = false
			},
			useCoupon(index) {
				if (this.ableCoupon[index].type == 1) {
					this.newOrderPrice = this.totalPrice - this.ableCoupon[index].price
				} else {
					this.newOrderPrice = (this.totalPrice * this.ableCoupon[index].discount).toFixed(2)
				}
				this.clearMark()
			},
			choosePay(index) {
				this.payMethod.forEach((v) => {
					v.isChooseed = false
				})
				this.payMethod[index].isChooseed = true
			},
			goPay() {
				this.keyboardShow = true
			},
			changeNum(value) {
				if (this.password.length < 6) {
					this.password += value
				}
				if (this.password.length >= 6) {
					if (this.password == '123456') {
						this.pay()
					} else {
						uni.showToast({
							title: '密码错误',
							icon: "none"
						});
					}
				}
			},
			pay() {
				uni.showLoading({
					title: '支付中',
					mask: false
				});
				setTimeout(() => {
					uni.hideLoading()
					this.keyboardShow = false
					uni.showToast({
						title: '支付成功',
						icon: "none"
					});
				})
				this.$u.route({
					url:'/pages/order/order',
					params:{
						orderInfo:JSON.stringify(this.orderPay())
					}
				})
			},
			orderPay(){
				let orderInfo = {
					orderId:1001,
					orderNo:this.randomNumber(),
					orderStatus:'待发货',
					goodsList:this.cartChooseGoodsList,
					orderOPrice:this.totalPrice,
					orderPPrice:this.newOrderPrice
				}
				return orderInfo
			},
			randomNumber(){
				const now = new Date()
				let year = now.getFullYear()
				let month = now.getMonth() + 1
				let day = now.getDate()
				let hour = now.getHours()
				let minute = now.getMinutes()
				let seconds = now.getSeconds()
				month = this.setTimeFormat(month)
				day = this.setTimeFormat(day)
				hour = this.setTimeFormat(hour)
				minute = this.setTimeFormat(minute)
				seconds = this.setTimeFormat(seconds)
				let orderCode = year.toString() + month.toString() + day.toString() + hour.toString() + minute.toString() + seconds.toString() + Math.round((Math.random()*10000000)).toString()
				return orderCode
			},
			setTimeFormat(s){
				return s < 10 ? '0'+s : s
			},
			delPassword() {
				if (this.password.length > 0) {
					this.password = this.password.substring(0, this.password.length - 1)
				}
			},
			closeKeyboard() {
				this.keyboardShow = false
				this.password = ''
			}
		}
	}
</script>

<style>

</style>
