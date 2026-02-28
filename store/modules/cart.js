import cartGoodsList from "@/common/data/cartGoodsList.js"
export default {
	state:{
		// 存放状态
		cartGoodsList :cartGoodsList,
		// 选中商品id的存放数组
		selectGoodsIds:[],
		//选中商品的数据
		chooseGoodsList:[]
	},
	getters:{
		//state的计算属性
		chooseAll:(state) =>{
			return state.cartGoodsList.length == state.selectGoodsIds.length
		},
		// 购物车选中商品的总价
		totalPrice:(state) => {
			let total = 0
			state.cartGoodsList.forEach(v=>{
				if(state.selectGoodsIds.indexOf(v.goodsId) > -1){
					total += v.pPrice*v.goodsNum
				}
			})
			return total
		},
		disableChoose:(state) => {
			return state.cartGoodsList.length == 0
		}
	},
	mutations:{
		//更改state中的状态逻辑，同步操作
		// 选中/取消选中某个商品
		chooseItem(state,index){
			let id = state.cartGoodsList[index].goodsId
			let i = state.selectGoodsIds.indexOf(id)
			// 当前商品处于选中状态
			if(i > -1){
				state.cartGoodsList[index].chooseed = false
				state.chooseGoodsList.splice(i,1)
				return state.selectGoodsIds.splice(i,1)
			}
			// 当前商品处于未选中状态
			state.cartGoodsList[index].chooseed = true
			state.selectGoodsIds.push(id)
			state.chooseGoodsList.push(state.cartGoodsList[index])
		},
		// 全选购物车商品
		chooseAllGoods(state){
			state.selectGoodsIds = state.cartGoodsList.map(v=>{
				v.chooseed = true
				return v.goodsId
			})
			state.chooseGoodsList = state.cartGoodsList.map(v=>{
				return v
			})
		},
		// 取消全选
		unChooseAllGoods(state){
			state.cartGoodsList.forEach(v=>{
				v.chooseed = false
			})
			state.selectGoodsIds = []
			state.chooseGoodsList = []
		},
		//删除购物车商品
		delCartGoods(state){
			state.cartGoodsList = state.cartGoodsList.filter(v => {
				return state.selectGoodsIds.indexOf(v.goodsId) == -1
			})
		}
	},
	actions:{
		//提交mutation操作，异步操作
		doChooseAll({commit,getters}){
			getters.chooseAll ? commit('unChooseAllGoods') : commit('chooseAllGoods')
		},
		doDelCartGoods({commit,state}){
			uni.showModal({
				title: '提示',
				content: '是否删除选中商品',
				showCancel: true,
				cancelText: '取消',
				confirmText: '确认',
				success: res => {
					if(res.confirm){
						commit('delCartGoods')
						uni.showToast({
							title: '删除成功',
							icon:"none"
						});
					}
					state.selectGoodsIds = []
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
}