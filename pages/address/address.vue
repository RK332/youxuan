<template>
	<view>
		<u-navbar title="收货地址" :is-back="true" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<u-gap height="30"></u-gap>
		<view v-for="(item,index) in addressList" :key="index" class="d-flex flex-column mx-20 u-p-20 u-border-radius shadow j-sb u-m-b-30" style="height: 160rpx;">
			<view class="d-flex j-sb">
				<view class="d-flex a-center u-m-b-20">
					<u-tag v-if="item.isDefault" type="success" text="默认" class="u-m-r-15"></u-tag>
					<text class="u-font-32 font-weight mx-5">{{ item.name }}</text>
					<text>{{ item.mobile }}</text>
				</view>
				<u-icon name="edit-pen" size="36" @click="editAddress(item,index)"></u-icon>
			</view>
			<view class="u-line-1">{{ item.detailAddress }}</view>
		</view>
		<u-button @click="jump('/pages/addressAdd/addressAdd')" type="success" class="p-fixed left-0 right-0 bottom-0 mx-20" style="margin-bottom: 45rpx;">
			<u-icon name="plus" size="32" class="u-m-r-10"></u-icon>
			<text>添加新地址</text>
		</u-button>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapState({
				addressList:state=>state.address.addressList
			})
		},
		methods: {
			jump(url){
				this.$u.route({
					url:url
				})
			},
			editAddress(item,index){
				let obj = {
					item:item,
					index:index
				}
				uni.navigateTo({
					url: '/pages/addressEdit/addressEdit?address=' + JSON.stringify(obj),
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>

</style>
