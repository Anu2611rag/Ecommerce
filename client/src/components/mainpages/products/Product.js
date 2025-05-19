import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductLists from '../utils/ProductLists/ProductLists'

const Product = () => {
  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products
  console.log(state)
  

  return (
    <div className='products'>      
      {
        products.map(product => {
          return <ProductLists key={product.id} product={product}/>
        })
      }      
    </div>
  )
}

export default Product
