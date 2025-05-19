import React from 'react'

import { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'
import { Link } from 'react-router-dom'


const ProductList = ({product}) => {
    console.log(product)

  return (
    <div className='product_card'>
      
        <img src={product.images.url} alt=''/>

        <div className='product_box'>
            <h2 title={product.title}>{product.title}</h2>
            <span>${product.price}</span>
            <p>{product.description}</p>
        </div>
        <div className='row-btn'>
           <Link id='#btn-buy' to={`#!`}>
           Buy Now

           </Link>

           <Link id='#btn_view' to={`detail/${product._id}`}>
View Now
           </Link>
        </div>

       
    </div>
  )
}

export default ProductList
