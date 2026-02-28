import addressList from "@/common/data/address.js"
export default {
	state:{
		addressList: addressList
	},
	getters:{
		defaultAddress:(state)=>{
			return state.addressList.filter(v=>{
				return v.isDefault
			})
		}
	},
	mutations:{
		createAddress(state,item){
			state.addressList.unshift(item)
		},
		removeDefault(state){
			state.addressList.forEach((v)=>{
				if(v.isDefault){
					v.isDefault = false
				}
			})
		},
		editAddress(state,{item,index}){
			for(let key in item){
				state.addressList[index][key] = item[key]
			}
		},
		delAddress(state,index){
			state.addressList.splice(index,1)
		}
	},
	actions:{
		createAddressAction({commit},item){
			if(item.isDefault){
				commit('removeDefault')
			}
			commit('createAddress',item)
		},
		editAddressAction({commit,state},obj){
			if(obj.item.isDefault){
				commit('removeDefault')
			}
			commit('editAddress',obj)
		}
	}
}