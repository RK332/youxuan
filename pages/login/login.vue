<template>
	<view class="bg-white-color container">
		<u-navbar title="登录" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<view class="u-font-40 font-weight mx-20" style="margin-top: 100rpx;">
			手机号登录
		</view>
		<view class="px-20" style="margin-top: 150rpx;">
			<u-form :model="form" ref="uForm">
				<u-form-item label="手机号" label-width="150" prop="mobile">
					<u-input v-model="form.mobile"></u-input>
				</u-form-item>
				<u-form-item label="验证码" label-width="150" prop="code">
					<u-input placeholder="验证码" v-model="form.code"></u-input>
					<u-button @click="getCode" type="success" size="mini" slot="right">{{ form.codeTips }}</u-button>
				</u-form-item>
			</u-form>
			<u-button @click="submit" type="success" style="margin-top: 150rpx;">登录</u-button>
			<view class="d-flex j-center gray-color u-m-t-45">
				<text class="u-m-r-10">还没有账号？</text>
				<text class="main-color">立即注册</text>
			</view>
		</view>
		<view class="p-fixed left-0 right-0 bottom-0" style="margin-top: 200rpx;">
			<view class="" style="position: relative;">
				<view class="gray-color d-flex j-center w-100" style="position: absolute;">
					<text class="bg-white-color px-30" style="z-index: 99;margin-top: -15rpx;">第三方登录</text>
				</view>
				<u-line></u-line>
			</view>
			<view class="d-flex j-sa" style="margin: 60rpx auto 45rpx;width: 60%;">
				<view class="u-border-radius-lg d-flex j-center a-center" style="height: 75rpx;width: 75rpx;background-color: #eeeeee;">
					<u-icon name="zhifubao" color="#999999" size="60"></u-icon>
				</view>
				<view class="u-border-radius-lg d-flex j-center a-center" style="height: 75rpx;width: 75rpx;background-color: #eeeeee;">
					<u-icon name="weixin-fill" color="#999999" size="60"></u-icon>
				</view>
				<view class="u-border-radius-lg d-flex j-center a-center" style="height: 75rpx;width: 75rpx;background-color: #eeeeee;">
					<u-icon name="weibo" color="#999999" size="60"></u-icon>
				</view>
			</view>
		</view>
		<u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					mobile:'',
					code:'',
					codeTips:'获取验证码'
				},
				rules:{
					mobile:[
						{
							required:true,
							message:'请输入手机号',
							trigger:['change','blur']
						},
						{
							validator:(rule,value,callback) => {
								return this.$u.test.mobile(value)
							},
							message:'手机号码不正确',
							trigger:['change','blur']
						}
					],
					code:[
						{
							required:true,
							message:'验证码不能为空',
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
						if(this.form.code == '123456'){
							uni.switchTab({
								url:"../my/my"
							})
						}else{
							uni.showToast({
								title: '验证码错误',
								icon:'none'
							});
							return
						}
						setTimeout(() => {
							uni.showToast({
								title: '登录成功',
								icon:'none'
							});
						},500)
					}else{
						// uni.showToast({
						// 	title: '登录失败',
						// 	icon:'none'
						// });
					}
				})
			},
			getCode(){
				if(this.$refs.uCode.canGetCode){
					uni.showLoading({
						title: '正在获取验证码...',
						mask: false
					});
					setTimeout(() => {
						uni.hideLoading()
						uni.showToast({
							title: '验证码:123456',
							icon:'none'
						});
						this.$refs.uCode.start()
					},2000)
				}
			},
			codeChange(text){
				this.form.codeTips = text
			}
		}
	}
</script>

<style>

</style>
