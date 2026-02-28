import Vue from "vue"
import Vuex from "vuex"

import cart from "@/store/modules/cart.js"
import address from "@/store/modules/address.js"
import coupon from "@/store/modules/coupon.js"

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		cart,
		address,
		coupon
	}
})
export default store