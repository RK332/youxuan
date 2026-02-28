<template>
	<view>
		<u-navbar title="消息列表" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<u-gap height="30"></u-gap>
		<view class="" v-for="(item,index) in messageData" :key="index">
			<template v-if="item.type == 1">
				<view @click="goArticle(item)" class="d-flex u-p-20 u-border-radius u-m-b-20 shadow mx-20" hover-class="u-hover-class">
					<image :src="item.thumb[0]" mode="" class="u-border-radius u-m-r-20 flex-shrink" style="width: 220rpx;height: 160rpx;"></image>
					<view class="d-flex flex-column j-sb u-font-30">
						<view class="u-line-2">{{ item.title }}</view>
						<view class="d-flex j-sb">
							<view class="gray-color d-flex u-font-24">
								<text class="u-m-r-15">阅读量：{{ item.readNum }}</text>
								<text>点赞：{{ item.zan }}</text>
							</view>
							<u-icon name="close" size="24" color="#999999"></u-icon>
						</view>
					</view>
				</view>
			</template>
			<template v-if="item.type == 2">
				<view @click="goArticle(item)" class="d-flex flex-column u-p-20 u-border-radius u-m-b-20 mx-20 shadow">
					<view class="u-line-2 u-font-30 u-m-b-15">{{ item.title }}</view>
					<view class="d-flex j-sb">
						<image :src="item.thumb[0]" style="width: 220rpx;height: 160rpx;border-top-left-radius: 10rpx;border-bottom-left-radius: 10rpx;" mode=""></image>
						<image :src="item.thumb[1]" style="width: 220rpx;height: 160rpx;" mode=""></image>
						<image :src="item.thumb[2]" style="width: 220rpx;height: 160rpx;border-top-right-radius: 10rpx;border-bottom-right-radius: 10rpx;" mode=""></image>
					</view>
					<view class="d-flex j-sb u-m-t-20">
						<view class="d-flex gray-color u-font-24">
							<text class="u-m-r-15">阅读量：{{ item.readNum}}</text>
							<text>点赞：{{ item.zan }}</text>
						</view>
						<u-icon name="close" size="24" color="#999999"></u-icon>
					</view>
				</view>
			</template>
			<template v-if="item.type == 3">
				<view @click="goArticle(item)" class="d-flex flex-column u-p-20 u-border-radius u-m-b-20 mx-20 shadow">
					<view class="u-line-2 u-font-30 u-m-b-15">{{ item.title }}</view>
					<view class="" style="width: 670rpx;height: 375rpx;">
						<video :src="item.thumb[0]" class="h-100 w-100 u-border-radius" objectFit="fill" controls></video>
					</view>
					<view class="d-flex j-sb u-m-t-20">
						<view class="d-flex gray-color u-font-24">
							<text class="u-m-r-15">阅读量：{{ item.readNum }}</text>
							<text>点赞：{{ item.zan }}</text>
						</view>
						<u-icon name="close" size="24" color="#999999"></u-icon>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import messageData from "@/common/data/messageList.js"
	export default {
		data() {
			return {
				messageData: messageData
			}
		},
		methods: {
			goArticle(item){
				this.$u.route({
					url:'/pages/article/article',
					params:{
						articleDetail:JSON.stringify(item)
					}
				})
			}
		}
	}
</script>

<style>

</style>
