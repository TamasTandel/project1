import React from 'react'
import Product from './Product'

const ProductInput = () => {
    const product =[
        {img:"./img/Circle AZ Logo.enc", name:"aastha", detail:"this is our product details", price:"888",count:"ProductCount"},
        {img:"./img/Circle AZ Logo.enc", name:"aastha", detail:"this is our product details", price:"888",count:"ProductCount"},
        {img:"./img/Circle AZ Logo.enc", name:"aastha", detail:"this is our product details", price:"888",count:"ProductCount"},
        {img:"./img/Circle AZ Logo.enc", name:"aastha", detail:"this is our product details", price:"888",count:"ProductCount"},
        {img:"./img/Circle AZ Logo.enc", name:"aastha", detail:"this is our product details", price:"888",count:"ProductCount"},
        {img:"./img/Circle AZ Logo.enc", name:"aastha", detail:"this is our product details", price:"888",count:"ProductCount"},
        {img:"./img/Circle AZ Logo.enc", name:"aastha", detail:"this is our product details", price:"888",count:"ProductCount"},
        {img:"./img/Circle AZ Logo.enc", name:"aastha", detail:"this is our product details", price:"888",count:"ProductCount"},
        {img:"./img/Circle AZ Logo.enc", name:"aastha", detail:"this is our product details", price:"888",count:"ProductCount"},
        {img:"./img/Circle AZ Logo.enc", name:"aastha", detail:"this is our product details", price:"888",count:"ProductCount"},
    ]    
    return (
        <>
        <div>
        <div className="productTitel w-full h-8 text-2xl my-2 text-center font-semibold">Product Titel</div>
      {product.map(function(elem,idx){
        return <Product key={idx} img={elem.img} name={elem.name} detail={elem.detail} price={elem.price} count={elem.count}/>
      })}
       </div>
    </>
  )
}

export default ProductInput