<template>
	<view>
		<u-navbar title="购物车" :is-back="false" :title-bold="true" class="shadow">
			<view @click="changCartStatus" class="mx-20 gray-color" slot="right">{{ cartStatus == 1 ? "编辑" : "完成"}}</view>
		</u-navbar>
		<view class="">
			<!-- 空购物车 -->
			<template v-if="cartGoodsList.length == 0">
				<u-gap height="300"></u-gap>
				<u-empty text="空空如也..." mode="car"></u-empty>
			</template>
			<template v-else>
				<u-gap height="30"></u-gap>
				<view v-for="(item,index) in cartGoodsList" :key="index" class="d-flex a-center bg-white-color u-m-b-20" style="height: 200rpx;">
					<view class="d-flex a-center j-center flex-shrink" style="width: 120rpx;">
						<label class="radio" @click="chooseItem(index)">
							<radio value="" :checked="item.chooseed" color="#1BBF80"/><text></text>
						</label>
					</view>
					<view class="d-flex u-line-1 w-100">
						<image :src="item.goodsThumb[0]" mode="" class="img-160 flex-shrink u-border-radius"></image>
						<view class="d-flex flex-column j-sb mx-20 u-line-1 w-100">
							<view class="d-flex flex-column w-100">
								<view class="u-line-1 u-font-30 font-weight u-m-b-10 w-100">{{ item.goodsName }}</view>
								<view class="u-font-22 gray-color">
									<text v-for="(itemOne,indexOne) in item.goodsAttrs" :key = "indexOne" class="u-border u-border-radius px-10 py-5 u-m-r-15">{{ itemOne.list[itemOne.selected].name }}</text>
								</view>
							</view>
							<view class="d-flex j-sb">
								<h-pprice :pprice="item.pPrice"></h-pprice>
								<u-number-box @change="changeGoodsNum($event,item)" :min="1" :max="item.goodsStock" :value="item.goodsNum"></u-number-box>
							</view>
						</view>
					</view>
				</view>
			</template>
		</view>
		<view class="d-flex a-center j-sb p-fixed left-0 right-0 bottom-0 bg-white-color" style="height: 100rpx;z-index: 99;">
			<view class="d-flex a-center u-m-l-20">
				<label class="radio" @click="doChooseAll">
					<radio value="" color="#1BBF80" :checked="chooseAll && cartGoodsListLength" :disabled="disableChoose"/><text class="mx-10 u-font-30">全选</text>
				</label>
			</view>
			<template v-if="cartStatus == 2">
				<view @click="doDelCartGoods" class="d-flex a-center j-center bg-danger-color white-color h-100 u-font-36 font-weight" style="width: 300rpx;">
					删除商品
				</view>
			</template>
			<template v-else>
				<view class="d-flex a-center h-100">
					<h-pprice :pprice="totalPrice"></h-pprice>
					<view class="d-flex a-center j-center bg-main-color white-color h-100 u-font-36 font-weight" style="width: 300rpx;" @click="goOrderConfirm" hover-class="u-hover-class">
						立刻购买
					</view>
				</view>
			</template>
		</view>
		<!-- #ifdef H5 -->
		<u-gap height="200"></u-gap>
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<u-gap height="100"></u-gap>
		<!-- #endif -->
	</view>
</template>

<script>
	import { mapState,mapMutations,mapGetters,mapActions } from "vuex"
	export default {
		data() {
			return {
				cartStatus:1
			}
		},
		computed:{
			...mapState({
				cartGoodsList:state=>state.cart.cartGoodsList
			}),
			...mapGetters([
				'chooseAll',
				'totalPrice',
				'disableChoose'
			]),
			cartGoodsListLength(){
				if(this.cartGoodsList.length == 0){
					return false
				}else{
					return true
				}
			}
		},
		methods: {
			...mapMutations([
				'chooseItem'
			]),
			...mapActions([
				'doChooseAll',
				'doDelCartGoods'
			]),
			changCartStatus(){
				this.cartStatus == 1 ? this.cartStatus = 2 : this.cartStatus = 1
			},
			changeGoodsNum(e,item){
				item.goodsNum = e.value
			},
			goOrderConfirm(){
				this.$u.route({
					url:'/pages/orderConfirm/orderConfirm'
				})
			}
		}
	}
</script>

<style>

</style>
