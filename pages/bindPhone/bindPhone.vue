<template>
	<view>
		<u-navbar title="绑定手机号" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<u-gap height="30"></u-gap>
		<view class="bg-white-color">
			<u-form ref="uForm" :model="form">
				<u-form-item prop="mobile" label="手机号" label-width="150"><u-input v-model="form.mobile" placeholder="请输入要绑定的手机号"></u-input></u-form-item>
			</u-form>
		</view>
		<u-button type="success" class="p-fixed left-0 right-0 bottom-0 u-m-b-45 mx-20" @click="submit">
			<text>提交</text>
		</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					mobile:''
				},
				rules:{
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
					]
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},
		methods: {
			submit(){
				this.$refs.uForm.validate(valid => {
					if(valid){
						uni.navigateTo({
							url: '/pages/capture/capture',
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
						setTimeout(()=>{
							uni.showToast({
								title: '验证码发送成功',
								icon:'none'
							},500);
						})
					}else{
						uni.showToast({
							title: '手机号码不正确',
							icon:'none'
						});
					}
				})
			}
		}
	}
</script>

<style>

</style>
