// 通过mutation间接更新state的多个方法的对象，
export default{
    reveive_address({commit},address){
        commit('REVEIVE_ADDRESS',address)
    },
    reveive_category({commit},category){
        commit('REVEIVE_CATEGORY',category)
    },
    reveive_shop({commit},shops){
        commit('REVEIVE_SHOP',shops)
    },

}