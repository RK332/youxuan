import couponList from "@/common/data/coupon.js"
export default {
	state:{
		couponList:couponList,
		ableCoupon:[]
	},
	mutations:{
		doCoupon(state,totalPrice){
			for(let i = 0;i < state.couponList.length;i++){
				if(totalPrice >= state.couponList[i].startPrice && totalPrice < state.couponList[i].endPrice){
					state.ableCoupon.push(state.couponList[i])
				}
			}
		},
		clearCoupon(state){
			state.ableCoupon = []
		}
	}
}