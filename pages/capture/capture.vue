<template>
	<view>
		<u-navbar title="获取验证码" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<view class="" style="margin-top: 300rpx;">
			<u-message-input @finish="submit"></u-message-input>
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
			submit(e){
				console.log(e);
				if(e == '1234'){
					uni.navigateTo({
						url: '/pages/setting/setting',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					setTimeout(()=>{
						uni.showToast({
							title: '绑定手机成功',
							icon:'none'
						});
					})
				}else{
					uni.showToast({
						title: '验证码不正确',
						icon:'none'
					});
				}
			}
		}
	}
</script>

<style>

</style>
