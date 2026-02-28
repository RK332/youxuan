<template>
	<!-- #ifdef H5 -->
	<view class="u-m-t-30">
	<!-- #endif -->
	<!-- #ifndef H5 -->
	<view class="">
	<!-- #endif -->
		<view class="" v-for="(item,index) in recCateList" :key="index">
			<!-- 顶部 banner：显示绿色背景 + 居中的标题文字，位置稍微靠上，避免被下面白色宫格遮挡 -->
			<view
				class="d-flex j-center a-start px-20"
				style="height: 375rpx;width: 100%;background-color: #1BBF80;"
			>
				<view class="white-color u-m-t-60">
					<!-- 第一个块显示固定文案“APP开发定制”，其他块显示各自分类名称 -->
					<text class="u-font-36 font-weight">{{ index === 0 ? 'APP开发定制' : item.cateName }}</text>
				</view>
			</view>
			<template v-if="item.cateStyle == 1">
				<view class="bg-white-color shadow u-border-radius d-flex flex-wrap" style="width: 710rpx;height: 350rpx;margin: -175rpx auto 30rpx;">
					<view v-for="(itemOne,indexOne) in item.secondCate" :key="indexOne" class="" >
						<view :class="[index % 2 === 0 ? 'cateRight' : '',(index == 0 || index == 1) ? 'cateBottom' : '']" class="d-flex j-sb" style="width: 355rpx;height: 175rpx;">
							<view class="black-color u-m-t-30 u-m-l-20">
								<text class="u-p-b-10" style="border-bottom: 2rpx solid #1BBF80;">{{ itemOne.cateName }}</text>
							</view>
							<image :src="itemOne.cateThumb" mode="" class="img-160 a-self-end"></image>
						</view>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="bg-white-color shadow u-border-radius" style="width: 710rpx;height: 350rpx;margin: -175rpx auto 30rpx;">
					<view class="d-flex h-100">
						<view
							v-for="(itemOne,indexOne) in item.secondCate"
							:key="indexOne"
							class="h-100 d-flex flex-column j-sb py-20 a-center"
							:style="(indexOne !== item.secondCate.length - 1 ? 'border-right:1rpx solid #cccccc;' : '') + 'flex:1;'"
						>
							<text class="u-font-26 font-weight u-m-t-20 u-p-b-10" style="border-bottom: 2rpx solid #1BBF80;">
								{{ itemOne.cateName }}
							</text>
							<image :src="itemOne.cateThumb" mode="" class="img-160"></image>
						</view>
					</view>
				</view>
			</template>
			<h-goods-list :goodsList = "item.cateGoodsList"></h-goods-list>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			recCateList:{
				type:Array,
				default:[]
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
</style>
