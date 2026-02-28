<template>
	<view class="container">
		<!-- 顶部搜索框 -->
		<u-navbar :is-back="false" duration="1000" :border-bottom="false">
			<!-- 搜索框 -->
			<u-search placeholder="请输入您要搜索的商品..." v-model="keyword" :animation="true" shape="square" class="px-20 u-m-t-30">
			</u-search>
		</u-navbar>
		<u-gap height="30" bg-color="#ffffff"></u-gap>
		<view class="d-flex h-100" style="border-top: 2rpx solid #CCCCCC;">
			<!-- 左侧一级分类滚动区域 -->
			<scroll-view scroll-y="true" :scroll-top="leftScrollTop" :scroll-with-animation="true" style="width: 200rpx;" class="left-scroll-view">
				<view class="" style="border-right: 2rpx solid #CCCCCC;">
					<view @click="changeCate(index)" v-for="(item,index) in cateData" :key="index" :class="current == index ? 'left-active-cate' : ''" class="d-flex j-center a-center left-cate-item" style="height: 100rpx;border-bottom: 2rpx solid #CCCCCC;">{{ item.cateName }}</view>
				</view>
			</scroll-view>
			<!-- 右侧二级分类滚动区域 -->
			<scroll-view :scroll-top="rightScrollTop" :scroll-with-animation="true" scroll-y="true" @scroll="rightScroll" class="u-flex-1 u-p-20 u-m-t-10">
					<view class="" v-for="(item,index) in cateData" :key="index" class="u-m-b-30 right-cate-item">
						<u-section :title="item.cateName" :right="false" color="#1bbf80"></u-section>
						<view class="d-flex flex-wrap">
							<view v-for="(itemOne,indexOne) in item.cateItem" :key="indexOne" class="d-flex flex-column a-center u-m-t-30" style="width: 33%;">
								<image :src="itemOne.thumb" mode="" class="img-100 u-border-radius u-m-b-15"></image>
								<text class="u-font-26">{{ itemOne.name }}</text>
							</view>
						</view>
					</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import cateData from "@/common/data/category.js"
	export default {
		data() {
			return {
				keyword:'',
				cateData: cateData,
				current:0,
				menuH:0,
				menuItemH:0,
				leftScrollTop:0,
				arr:[],
				rightScrollTop:0
			}
		},
		methods: {
			async changeCate(index){
				if(this.arr.length){
					await this.getRightItemTop()
				}
				if(this.current == index) return
				if(this.arr.length == 0){
					await this.getRightItemTop()
				}
				this.rightScrollTop = this.arr[index]
				this.leftMenuStatus()
			},
			async leftMenuStatus(index){
				console.log('111');
				this.current = index
				if(this.menuH == 0 || this.menuItemH == 0){
					await this.getEleRect('left-scroll-view','menuH')
					await this.getEleRect('left-cate-item','menuItemH')
				}
				this.leftScrollTop = this.menuItemH*index+this.menuItemH/2 - this.menuH/2
			},
			getEleRect(eleClass,dataVal){
				new Promise((resolve,reject) => {
					const query = uni.createSelectorQuery().in(this)
					query.select('.' + eleClass).fields({
						size:true
					},res=>{
						if(!res){
							setTimeout(()=>{
								this.getEleRect()
							},100)
							return
						}
						this[dataVal] = res.height
						resolve()
					}).exec()
				})
			},
			getRightItemTop(){
				new Promise((resolve => {
					const selectorQuery = uni.createSelectorQuery()
					selectorQuery.selectAll('.right-cate-item').boundingClientRect((rects) => {
						if(!rects.length){
							setTimeout(()=>{
								this.getRightItemTop()
							},100)
							return
						}
						rects.forEach((rect) => {
							this.arr.push(rect.top - rects[0].top)
							resolve()
						})
					}).exec()
				}))
			},
			async rightScroll(e){
				if(this.arr.length == 0){
					await this.getRightItemTop()
				}
				setTimeout(()=>{
					let scrollH = e.detail.scrollTop + this.menuItemH
					for(let i = 0;i < this.arr.length;i++){
						let height1 = this.arr[i]
						let height2 = this.arr[i+1]
						if(scrollH >= height1 && scrollH <= height2 || !height2){
							this.leftMenuStatus(i)
							return
						}
					}
				},100)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.left-active-cate{
		border-left: 8rpx solid #1BBF80;
		color: #1BBF80;
		font-weight: bold;
	}
	.right-cate-item:last-child{
		min-height: 100vh;
	}
</style>
