<template>
	<view class="">
		<!-- 自定义导航 -->
		<u-navbar :is-back="false" title="优选商城" :background="bgColor" title-color="#ffffff" :title-bold="true"
			duration="1000"></u-navbar>
		<!-- 轮播图组件：改为文字轮播，方便控制字体大小 -->
		<swiper class="index-banner" circular autoplay interval="3000" indicator-dots indicator-active-color="#ffffff">
			<swiper-item v-for="(item,index) in banner" :key="index">
				<view class="banner-slide" :style="{ backgroundColor: item.bgColor }">
					<text class="banner-title">{{ item.title }}</text>
					<text class="banner-desc">{{ item.desc }}</text>
				</view>
			</swiper-item>
		</swiper>
		<!-- 宫格布局组件 -->
		<u-grid :col="5" :border="false">
			<u-grid-item v-for="(item,index) in cateList" :key="index" :custom-style="gridStyle">
				<image :src="item.cateImg" mode="" class="img-80 u-border u-border-radius-big u-p-10 box-content">
				</image>
				<view class="grid-text u-m-t-20">{{ item.cateTitle }}</view>
			</u-grid-item>
		</u-grid>
		<!-- 搜索框 -->
		<u-search placeholder="请输入您要搜索的商品..." v-model="keyword" :animation="true" shape="square" class="px-20 u-m-t-30" :disabled="true" @click="goSearch">
		</u-search>
		<!-- 推荐分类 -->
		<h-rec-cate :recCateList="recCate"></h-rec-cate>
		<!-- 自定义标题组件 -->
		<h-rec-title></h-rec-title>
		<!-- 商品列表样式2 -->
		<u-gap height="20" bg-color="#f8f8f8"></u-gap>
		<h-goods-listrow :goodsList="goodsList"></h-goods-listrow>
		<!-- 返回顶部 -->
		<u-back-top :scrollTop="scrollTop" :icon-style="iconStyle"></u-back-top>
		<!-- 上拉加载更多 -->
		<u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" />
		<u-gap height="100"></u-gap>
	</view>
</template>

<script>
	import banner from "@/common/data/swiper.js"
	import cateList from "@/common/data/cateList.js"
	import recCate from "@/common/data/recCate.js"
	import goodsList from "@/common/data/goodsList.js"
	export default {
		data() {
			return {
				bgColor: {
					backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				banner: banner,
				noticeList: [
					'专注软件开发10年，专业从事APP开发，小程序定制,网站制作,SEO优化,线上推广等，集PC+手机+小程序+APP和运营优化推广一条龙服务!',
					'uView是uni-app生态专用的UI框架，uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序(微信/支付宝/百度/头条/QQ/钉钉)等多个平台(引言自uni-app网)。'
				],
				recCate: recCate,
				cateList: cateList,
				gridStyle: {
					padding: "30rpx 0 0 0"
				},
				keyword: '',
				goodsList: goodsList,
				scrollTop: 0,
				iconStyle: {
					fontSize: '32rpx',
					color: '#1bbf80'
				},
				status: 'loadmore',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				}

			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onReachBottom() {
			this.status = 'loading',
			setTimeout(()=>{
				this.addGoods()
			},1000)
		},
		onLoad() {

		},
		methods: {
			addGoods(){
				for(let i = 0;i < 10 ;i++){
					let index = this.$u.random(0,this.goodsList.length - 1)
					let item = this.goodsList[index]
					this.goodsList.push(item)
				}
			},
			goSearch(){
				this.$u.route({
					url:'/pages/search/search'
				})
			}
		}
	}
</script>

<style>
	.cateRight {
		border-right: 1rpx solid #CCCCCC;
	}

	.cateBottom {
		border-bottom: 1rpx solid #CCCCCC;
	}

	.index-banner {
		height: 260rpx;
	}

	.banner-slide {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
	}

	.banner-title {
		font-size: 40rpx;
		font-weight: bold;
	}

	.banner-desc {
		font-size: 24rpx;
		margin-top: 10rpx;
		opacity: 0.9;
	}
</style>
