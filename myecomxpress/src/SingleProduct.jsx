import React from 'react'
import styled from 'styled-components'
//for id routing
import {useParams} from 'react-router-dom'
//for context
import {useProductContext} from './context/productcontext'
import { useEffect } from 'react'

const API="https://api.pujakaitem.com/api/products"
const SingleProduct = () => {


  //for using the required thigs from cotext
  const {getSingleProduct,isSingleLoading,singleProduct
  }=useProductContext()
  const {id}=useParams()
  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`)
  },[]);
  

  const {
    id:alias,name,company,price,category,stock,stars,description,reviews}=singleProduct
  
  return (
    <Wrapper>SingleProduct</Wrapper>
  )
}
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;
export default SingleProduct