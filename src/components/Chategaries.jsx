import React from 'react'
import './components.css'

const Chategaries = (props) => {

  return (
    <>
    <div className='chategaries h-24 w-24 bg-gray-500 inline-block m-1'>
        <img src={props.chateimg} alt="" className='chategariesimg h-24 w-24' />
        <div className='chategariesdetail h-4 text-[16px] items-center flex justify-center bottom-0'>{props.chatedetail}</div>
    </div>
    </>
  )
}

export default Chategaries