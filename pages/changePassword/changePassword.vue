<template>
	<view>
		<u-navbar title="修改密码" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<u-gap height="30"></u-gap>
		<view class="px-20 bg-white-color">
			<u-form :model="form" ref="uForm">
				<u-form-item label="旧密码" label-width="150" prop="oldPassword"><u-input v-model="form.oldPassword" type="password" placeholder="请输入旧密码"></u-input></u-form-item>
				<u-form-item label="新密码" label-width="150" prop="password"><u-input v-model="form.password" type="password" placeholder="请输入新密码"></u-input></u-form-item>
				<u-form-item label="确认密码" label-width="150" prop="rePassword"><u-input v-model="form.rePassword" type="password" placeholder="请确认密码"></u-input></u-form-item>
			</u-form>
			<u-button @click="submit" type="success" class="p-fixed left-0 right-0 bottom-0 u-m-b-45 mx-20" :ripple="true" ripple-bg-color="#1ecc93">
				<text>提交</text>
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					oldPassword:'',
					password:'',
					rePassword:''
				},
				rules:{
					oldPassword:[
						{
							required:true,
							message:'请输入旧密码',
							trigger:['change','blur']
						},
						{
							pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
							message:'需同事含有字母和数字，长度在6-12',
							trigger:['change','blur']
						}
					],
					password:[
						{
							required:true,
							message:'请输入新密码',
							trigger:['change','blur']
						},
						{
							pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
							message:'需同事含有字母和数字，长度在6-12',
							trigger:['change','blur']
						}
					],
					rePassword:[
						{
							required:true,
							message:'请确认密码',
							trigger:['change','blur']
						},
						{
							validator:(rule,value,callback)=>{
								return value == this.form.password
							},
							message:'两次输入的密码不一样',
							trigger:['change','blur']
						}
					]
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},
		methods: {
			submit(){
				this.$refs.uForm.validate(valid=>{
					if(valid){
						uni.navigateTo({
							url: '/pages/setting/setting',
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
						setTimeout((v)=>{
							uni.showToast({
								title: '修改密码成功'
							});
						},500)
					}else{
						uni.showToast({
							title: '验证失败'
						});
					}
				})
			}
		}
	}
</script>

<style>

</style>
