import React from 'react'

const LoginPage = () => {
  return (<>
      <div className='loginPage bg-opacity-10 bg-gray-50 h-[500px] w-[400px] flex items-center justify-center text-black rounded-2xl'>
        <div className="titel text-4xl font-semibold m-2">Login Here</div>
        <div className="loginPage bg-opacity-10 bg-gray-50 h-[500px] w-[400px] flex items-center justify-center text-black rounded-2xl">
            <div>
                <div className=''>
                <div className="mobileNo text-xl m-2">Enter Your Mobile Number : <input type="tel" pattern='[6-9]{1}[-][0-9]{8}[-][0-9]{1}' placeholder='Enter Your Number'/></div>
            <div className="userName text-xl m-2">Enter Your Name : <input type="text" placeholder='Enter Your Name' /></div>
            <button className='text-xl font-bold rounded-lg border-black border-2 mx-1 my-2 p-1'>Genrate OTP</button>
            <input type="number" pattern='[0-9]{4}' className='w-20 text-center text-xl rounded-md mx-3 h-8'/>
            <button className="continue border-black border-[3px] w-28 text-2xl rounded-2xl font-semibold m-2 ">Continue</button>
            <button className="createNewAcc border-black border-[2px] w-48 rounded-2xl font-semibold m-2">Create A New Accont</button>
                </div>
            </div>
        </div>

    </div>
  </>
  )
}

export default LoginPage