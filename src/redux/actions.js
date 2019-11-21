import axios from "axios";
export const ADD_DATA = "ADD_DATA";
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ALL_ORDERS_SUCCESS = "GET_ALL_ORDERS_SUCCESS";
export const GET_ALL_ORDERS_FAILED = "GET_ALL_ORDERS_FAILED";

const server="http://localhost:8081/";
//let addNote = hotel => {
//    return  async (dispatch) => {
//        dispatch({
//            type:ADD_DATA
//        });
//      await axios.post(`${server}addHotel`,hotel).then(response=>{
//            dispatch({
//                 type:ADD_HOTEL_SUCCESS
//             })
//
//        })
//        .catch(error=>{
//            dispatch({
//                type: ADD_HOTEL_FAILED
//            });
//        })
//    }
//    }
//
//    let removeAllHotels = () =>{
//        return async (dispatch) =>{
//            dispatch({
//                type: REMOVE_ALL_HOTELS
//            });
//            await axios.delete(`${server}deleteAll`).then(response=>{
//                dispatch({
//                    type:REMOVE_ALL_HOTELS_SUCCESS
//                })
//
//            })
//            .catch(error=>{
//                dispatch({
//                    type:REMOVE_ALL_HOTELS_FAILED
//                })
//            })
//}
//}

let getAllOrders = ()=>{
    return async (dispatch) =>{
        dispatch({
           type: GET_ALL_ORDERS
        });
        await axios.get(`${server}Order/allOrders`).then(response=>{
        console.log(response);
           dispatch({
           type: GET_ALL_ORDERS_SUCCESS,
           payload: response.data
           })
        })
    }
}


let Actions = {
   getAllOrders

}
export default Actions;
  