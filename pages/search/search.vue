<template>
	<view>
		<u-navbar :is-back="false" duration="1000" :border-bottom="false">
			<!-- 搜索框 -->
			<u-search @custom="searchKeyword" placeholder="请输入您要搜索的商品..." v-model="keyword" :animation="true" shape="square" class="px-20 u-m-t-30">
			</u-search>
		</u-navbar>
		<u-gap height="30" bg-color="#ffffff"></u-gap>
		<u-gap height="30"></u-gap>
		<u-section title="热门搜索" font-size="32" :right="false" color="#1bbf80"></u-section>
		<image src="/static/images/cate1.png" style="width: 710rpx;height: 180rpx;" mode="widthFix" class="u-border-radius mx-20 shadow u-m-t-30"></image>
		<view class="mx-20">
			<u-tag v-for="(item,index) in searchItem" :key="index" type="success" class="u-m-r-20 u-m-t-20" :text="item"></u-tag>
		</view>
		<u-gap height="45"></u-gap>
		<u-section title="搜索历史" font-size="32" color="#1bbf80">
			<view slot="right" class="u-m-r-20">清除历史</view>
		</u-section>
		<u-cell-group :border="false">
			<u-cell-item title="APP开发" bg-color="#f8f8f8" :arrow="false"></u-cell-item>
			<u-cell-item title="APP开发" bg-color="#f8f8f8" :arrow="false"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchItem:['APP开发','小程序定制','网站模板','api接口','服务器搭建','原型设计'],
				keyword:''
			}
		},
		methods: {
			searchKeyword(){
				this.$u.route({
					url:'/pages/searchList/searchList'
				})
			}
		}
	}
</script>

<style>

</style>
