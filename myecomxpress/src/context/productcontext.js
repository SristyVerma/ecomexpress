import {createContext, useContext, useReducer,useEffect} from 'react';
import axios from 'axios'
import reducer from '../reducer/productReducer'
export const AppContext=createContext();
const API="https://api.pujakaitem.com/api/products"


const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
}
export const AppProvider=({children})=>{

const [state,dispatch]=useReducer(reducer,initialState)


    const getProducts=async (url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const res=await axios.get(url)
            const products=await res.data
            // console.log(products)
            dispatch({type:"SET_API_DATA",payload:products})
        } catch (error) {
            dispatch({type:"Api_error"})
        }
    }
useEffect(()=>{
  getProducts(API)
    },[])
  

return (
<AppContext.Provider value={{...state}}>
    {children}
    </AppContext.Provider>
    )
}
//custom hook
// export const useProductContext=()=>{
//     return useContext(AppContext)
// 
// }