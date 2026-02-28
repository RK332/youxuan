<template>
	<view>
		<u-navbar title="个人资料" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<u-gap height="30"></u-gap>
		<view class="px-20 bg-white-color">
			<u-form>
				<u-form-item label="昵称"><u-input v-model="form.nickName" placeholder="请输入昵称"></u-input></u-form-item>
				<u-form-item label="签名"><u-input v-model="form.signName" placeholder="请输入签名"></u-input></u-form-item>
				<u-form-item label="性别"><u-input v-model="form.sex" type="select" placeholder="请输入性别" @click="sexShow = true"></u-input></u-form-item>
				<u-form-item label="生日"><u-input v-model="form.birthday" type="select" placeholder="请输入生日" @click="birthShow = true"></u-input></u-form-item>
				<u-form-item label="地区"><u-input v-model="form.area" type="select" placeholder="请输入所在地区" @click="areaShow = true"></u-input></u-form-item>
				<u-form-item label="详细地址" label-width="150"><u-input v-model="form.address" placeholder="请输入详细地址"></u-input></u-form-item>
			</u-form>
		</view>
		<u-button type="success" class="p-fixed left-0 right-0 bottom-0 u-m-b-45 mx-20" @click="submit" :ripple="true" ripple-bg-color="#1ecc93">
			<text>提交</text>
		</u-button>
		<u-action-sheet :list="sexList" v-model="sexShow" @click="sexClick"></u-action-sheet>
		<u-picker v-model="birthShow" mode="time" @confirm="chooseData"></u-picker>
		<u-picker v-model="areaShow" mode="region" @confirm="chooseArea"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sexShow: false,
				birthShow: false,
				areaShow:false,
				sexList:[
					{
						text:'男'
					},{
						text:'女'
					},{
						text:'保密'
					}
				],
				form:{
					nickName:'',
					signName:'',
					sex:'',
					birthday:'',
					area:'',
					address:''
				}
			}
		},
		methods: {
			sexClick(index){
				this.form.sex = this.sexList[index].text
			},
			chooseData(e){
				this.form.birthday = e.year + '-' + e.month + '-' + e.day
			},
			chooseArea(e){
				this.form.area = e.province.label + '-' + e.city.label + '-' + e.area.label
			},
			submit(){
				uni.showToast({
					title: '提交成功',
					icon:'none'
				});
			}
		}
	}
</script>

<style>

</style>
