import React, { useState } from 'react'
import './components.css'

const Product = (props) => {

  const [num, setnum] = useState(0)


  return (
    <div className='completeProduct h-[200px] w-40 m-2 inline-block items-center justify-center'>
        <div className="product h-48 w-36 bg-blue-600 rounded-md p-1 overflow-hidden">
            <img src={props.img} alt="" />
            <div className="productName">{props.name}</div>
            <div className="productDetail">{props.detail}</div>
            <div className="productPrice">{props.price}</div>
      <div className="productCount flex border-2 rounded-md border-black m-1 w-fit h-[30px]">      
      <button onClick={()=>{
        if(num>=1){Nav
          setnum(num-1)
        }
      }}><i className="ri-subtract-fill"></i></button> 
      <h3 className='countValue h-[26px] w-10 text-center items-center justify-center text-[26px] flex
      '>{num}</h3>
      <button onClick={()=>setnum(num+1)}><i className="ri-add-fill"></i></button></div>
            <div className="productAddToCart border-2 border-black rounded-md px-[1px] w-24 bg-slate-300 text-black text-center">Add To Cart<button>{props.cart}</button></div>
        </div>
    </div>
  )
}

export default Product