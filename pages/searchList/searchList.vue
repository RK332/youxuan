<template>
	<view>
		<u-navbar :is-back="false" duration="1000" :border-bottom="false">
			<!-- 搜索框 -->
			<u-search placeholder="请输入您要搜索的商品..." v-model="keyword" :animation="true" shape="square" class="px-20 u-m-t-30">
			</u-search>
		</u-navbar>
		<u-gap height="30" bg-color="#ffffff"></u-gap>
		<view class="">
			<u-dropdown active-color="#1bbf80" ref="uDropdown">
				<u-dropdown-item v-model="value1" title="综合" :options="options1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="销量" :options="options2"></u-dropdown-item>
				<u-dropdown-item v-model="value3" title="价格" :options="options3"></u-dropdown-item>
				<u-dropdown-item title="筛选">
					<view class="bg-white-color u-p-20">
						<view class="u-p-t-30">
							<u-tag @click="choosePrice(index)" v-for="(item,index) in options4" :key="index" :type="current == index ? 'success' : 'info'" :text="item.label" class="u-m-b-30 u-m-r-30"></u-tag>
						</view>
						<u-button @click="closeDropdown" type="success" class="u-m-t-20"><text>确定</text></u-button>
					</view>
				</u-dropdown-item>
			</u-dropdown>
		</view>
		<u-gap height="20"></u-gap>
		<h-goods-listrow :goodsList="goodsList"></h-goods-listrow>
	</view>
</template>

<script>
	import goodsList from "@/common/data/goodsList.js"
	export default {
		data() {
			return {
				keyword:'',
				goodsList:goodsList,
				current:0,
				value1:1,
				value2:2,
				value3:1,
				options1:[
					{
						label:'升序',
						value:1
					},
					{
						label:'降序',
						value:2
					}
				],
				options2:[
					{
						label:'升序2',
						value:1
					},
					{
						label:'降序2',
						value:2
					}
				],
				options3:[
					{
						label:'升序3',
						value:1
					},
					{
						label:'降序3',
						value:2
					}
				],
				options4:[
					{
						label:'不限',
						value:1
					},
					{
						label:'0~50',
						value:2
					},
					{
						label:'50~100',
						value:3
					},
					{
						label:'100~500',
						value:4
					},
					{
						label:'500~1000',
						value:5
					},
					{
						label:'1000以上',
						value:6
					}
				]
			}
		},
		methods: {
			choosePrice(index){
				this.current = index
			},
			closeDropdown(){
				this.$refs.uDropdown.close()
			}
		}
	}
</script>

<style>

</style>
