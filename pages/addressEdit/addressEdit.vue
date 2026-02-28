<template>
	<view>
		<u-navbar title="编辑收货地址" :is-back="true" :title-bold="true" title-color="#000000" class="shadow">
			<view class="u-m-r-30 gray-color" slot="right" @click="addressDel">删除</view>
		</u-navbar>
		<u-gap height="30"></u-gap>
		<view class="bg-white-color px-20">
			<u-form :model="form" ref="uForm">
				<u-form-item label="姓名" prop="name" label-width="150"><u-input v-model="form.name" placeholder="请输入姓名"></u-input></u-form-item>
				<u-form-item label="电话" prop="mobile" label-width="150"><u-input v-model="form.mobile" placeholder="请输入手机号码"></u-input></u-form-item>
				<u-form-item label="所在地区" prop="area" label-width="150"><u-input type="select" :select-open="pickerShow" @click="pickerShow = true" v-model="form.area" placeholder="省/市/县/区"></u-input></u-form-item>
				<u-form-item label="详细地址" prop="detailAddress" label-width="150"><u-input v-model="form.detailAddress" placeholder="详细地址"></u-input></u-form-item>
				<u-form-item label="默认地址" label-width="150"><u-switch v-model="form.isDefault" slot="right" active-color="#1bbf80"></u-switch></u-form-item>
			</u-form>
			<u-button type="success" class="p-fixed left-0 right-0 bottom-0 u-m-b-45 mx-20" @click="submit">修改地址</u-button>
		</view>
		<u-picker mode="region" v-model="pickerShow" @confirm="confirmArea"></u-picker>
	</view>
</template>

<script>
	import { mapActions,mapMutations } from 'vuex'
	export default {
		data() {
			return {
				form:{
					name:'',
					mobile:'',
					area:'',
					detailAddress:'',
					isDefault:true
				},
				index:0,
				pickerShow: false,
				rules:{
					name:[
						{
							required:true,
							message:'用户名不能为空',
							trigger:['blur','change']
						}
					],
					mobile:[
						{
							required:true,
							message:'手机号码不能为空',
							trigger:['blur','change']
						},
						{
							validator:(rule,value,callback) => {
								return this.$u.test.mobile(value)
							},
							message:'手机号码不正确',
							trigger:['change','blur']
						}
					],
					area:[
						{
							required:true,
							message:'所在地不能为空',
							trigger:['blur','change']
						}
					],
					detailAddress:[
						{
							required:true,
							message:'详细地址不能为空',
							trigger:['blur','change']
						}
					],
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},
		onLoad(e) {
			if(e.address){
				let data = JSON.parse(e.address)
				this.index = data.index
				this.form = data.item
			}
		},
		methods: {
			...mapActions([
				'createAddressAction',
				'editAddressAction'
			]),
			...mapMutations([
				'delAddress'
			]),
			confirmArea(e){
				this.form.area = e.province.label + '-' + e.city.label + '-' + e.area.label
			},
			submit(){
				this.$refs.uForm.validate(valid => {
					if(valid){
						this.editAddressAction({
							index:this.index,
							item:this.form
						})
						uni.navigateTo({
							url: '/pages/address/address',
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
						setTimeout(()=>{
							uni.showToast({
								title: '修改成功',
								icon:'none'
							},500);
						})
					}else{
						uni.showToast({
							title: '请输入正确的信息',
							icon:'none'
						});
					}
				})
			},
			addressDel(){
				uni.showModal({
					title: '是否删除收货地址',
					content: '',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if(res.confirm){
							this.delAddress(this.index)
							uni.navigateTo({
								url: '/pages/address/address',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
							setTimeout(()=>{
								uni.showToast({
									title: '删除地址成功',
									icon:'none'
								},500);
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>

</style>
