import React from 'react'
import Chategaries from './Chategaries';

const ChategariesInput = () => {
  const userdata = [
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
    { name:"tamas", src:"../public/Circle AZ Logo.enc"},
  ];

  return (
    <div>
      {userdata.map(function(elem,idx){
        return <Chategaries key={idx} chateimg={elem.src} chatedetail={elem.name}/>
      })}
    </div>
  )
}

export default ChategariesInput