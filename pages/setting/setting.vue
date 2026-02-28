<template>
	<view>
		<u-navbar title="设置" :is-back="true" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<u-cell-group title="用户设置">
			<u-cell-item title="头像" :arrow="false" icon="account-fill">
				<view class="" slot="right-icon" @click="chooseAvatar">
					<image :src="avatar" mode="" class="img-100 u-border u-border-radius-lg"></image>
				</view>
			</u-cell-item>
			<u-cell-item title="个人信息" icon="file-text-fill" @click="jump('/pages/userInfo/userInfo')"></u-cell-item>
		</u-cell-group>
		<u-cell-group title="账号与安全">
			<u-cell-item title="绑定手机号" icon="phone-fill" @click="jump('/pages/bindPhone/bindPhone')"></u-cell-item>
			<u-cell-item title="修改密码" icon="lock-fill" @click="jump('/pages/changePassword/changePassword')">
			</u-cell-item>
			<u-cell-item title="清除缓存" icon="trash-fill" :arrow="false" :value="storageSize" @click="delStorage">
			</u-cell-item>
		</u-cell-group>
		<u-cell-group title="系统版本">
			<u-cell-item title="更新至最新版" icon="setting-fill" @click="updateSystem"></u-cell-item>
		</u-cell-group>
		<u-button class="p-fixed left-0 right-0 bottom-0 mx-20 u-m-b-45" type="success" :ripple="true"
			ripple-bg-color="#1ecc93">
			<text>退出登录</text>
		</u-button>

		<u-modal style="line-height: 1.75" v-model="windowShow" :show-cancel-button="true" confirm-text="升级" title="发现新版本"
			@confirm="confirm">
			<view class="u-update-content u-p-20 u-font-26">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: '/static/images/avatar.png',
				storageSize: '800k',
				windowShow: false,
				content: `
					1. 修复badge组件的size参数无效问题<br>
					2. 新增Modal模态框组件<br>
					3. 新增压窗屏组件，可以在APP上以弹窗的形式遮盖导航栏和底部tabbar<br>
					4. 修复键盘组件在微信小程序上遮罩无效的问题
				`
			}
		},
		created() {
			uni.$on('uAvatarCropper', path => {
				this.avatar = path
			})
		},
		methods: {
			chooseAvatar() {
				this.$u.route({
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					params: {
						filetype: 'jpg',
						destWidth: '300',
						rectWidth: '300'
					}
				})
			},
			jump(url) {
				this.$u.route({
					url: url
				})
			},
			delStorage() {
				uni.showModal({
					title: '是否清除缓存',
					content: '',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确认',
					success: res => {
						if (res.confirm) {
							this.storageSize = 0
							uni.showToast({
								title: '清除成功',
								icon: 'none'
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			updateSystem(){
				this.windowShow = true
			},
			confirm(){
				uni.showLoading({
					title: '正在升级中',
					mask: false
				});
				setTimeout(()=>{
					uni.hideLoading()
					uni.showToast({
						title: '升级成功'
					});
				},3000)
			}
		}
	}
</script>

<style>

</style>
