// 直接更新state的多个方法的对象

export default {
    REVEIVE_ADDRESS(state,address){
        state.address = address
    },
    REVEIVE_CITY(state,city){
        state.city = city
    },
    REVEIVE_NAME(state,name){
        state.name = name
    },

}