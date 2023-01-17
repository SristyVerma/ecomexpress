import {createContext, useContext, useEffect} from 'react';
import axios from 'axios'
export const AppContext=createContext();
const API="https://api.pujakaitem.com/api/products"
export const AppProvider=({children})=>{
    const getProducts=async (url)=>{
        const res=await axios.get(url)
        const products=await res.data
        console.log(products)
    }
useEffect(()=>{
  getProducts(API)
    },[])
  

return (
<AppContext.Provider value={{names:"sris"}}>
    {children}
    </AppContext.Provider>
    )
}
//custom hook
// export const useProductContext=()=>{
//     return useContext(AppContext)
// 
// }