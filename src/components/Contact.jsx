import React from 'react'
import './components.css'

const Contact = () => {
  return (
    <>
    <div className='contactPage w-full'>
        <div className="contactUs bg-red-900">
            <div className="contactTitel text-7xl font-extrabold text-center">Contact Us</div>
            <div className="contactIcon flex gap-5 mx-5">
            <i className="ri-whatsapp-line text-5xl"></i>
            <i className="ri-mail-line text-5xl"></i>
            </div>
            <div className="contactNumber flex w-full h-28 max-sm:h-40">
            <i className="ri-phone-line text-7xl w-[20%] flex items-center justify-center"></i>
            <div className="number flex w-[80%] h-28 flex-wrap text-center items-center">
                <div className="mainNumber w-full h-10 flex max-sm:flex-col max-sm:h-20 justify-evenly">
                  <a className="firstNumber h-10 text-3xl" tel='9313168851' href='9313168851'>9313168851</a>
                  <a className="firstNumber h-10 text-3xl" tel='9313168851' href='9313168851'>9313168851</a>
                </div>
                <div className="mainNumber w-full h-10 flex max-sm:flex-col max-sm:h-20 justify-evenly">
                  <a className="firstNumber h-10 text-3xl" tel='9313168851' href='9313168851'>9313168851</a>
                  <a className="firstNumber h-10 text-3xl" tel='9313168851' href='9313168851'>9313168851</a>
                </div>
            </div>
            </div>
        </div>
        <div className="followUs bg-green-300">
            <div className="followUsTitel text-7xl font-extrabold text-center py-8">Follow Us</div>
            <div className="followIcon flex gap-4 w-full justify-evenly py-6">
            <i className="ri-twitter-x-line text-6xl"></i>
            <i className="ri-youtube-line text-6xl "></i>
            <i className="ri-instagram-line text-6xl"></i>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact