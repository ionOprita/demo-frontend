import {GET_ALL_ORDERS_SUCCESS}  from "./actions";

const initialState = {
   allOrders:[]
}
function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_ORDERS_SUCCESS:
        return{
            ...state,
              allOrders: action.payload
        }
        default: return state;
    }
}

export default rootReducer;


