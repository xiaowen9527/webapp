// 通过mutation间接更新state的多个方法的对象，
export default{
    reveive_address({commit},address){
        commit('REVEIVE_ADDRESS',address)
    },
    reveive_city({commit},city){
        commit('REVEIVE_CITY',city)
    },
    reveive_name({commit},name){
        commit('REVEIVE_NAME',name)
    },

}