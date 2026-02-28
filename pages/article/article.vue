<template>
	<view>
		<u-navbar title="文章详情" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<u-gap height="30"></u-gap>
		<view class="u-m-20">
			<view class="u-font-32 font-weight">{{ article.title }}</view>
			<view class="d-flex j-sb u-font-28 my-20">
				<text>{{ article.author }}</text>
				<text>{{ $u.timeFormat(article.create_time,'yyyy-mm-dd hh:MM:ss')}}</text>
			</view>
			<u-parse :html="article.detail"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article:''
			}
		},
		onLoad(e) {
			if(e.articleDetail){
				this.article = JSON.parse(e.articleDetail)
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
