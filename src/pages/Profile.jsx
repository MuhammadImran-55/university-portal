import React from 'react'
import dp from '../assets/images/test-avatar-2.webp'

const Profile = () => {
      
  return (
    <div className='p-12'>
        <div className='bg-[crimson] w-[90%] m-auto h-[300px] rounded-3xl flex relative'>
            <img src={dp} className='w-36 absolute -bottom-12 left-24 rounded-full border-6 border-white' alt="" />
            <h1 className='absolute text-white bottom-12 left-[30%] text-5xl font'>Muhammad Imran</h1>
        </div>
        <div className='border-2 border-black w-[90%] m-auto p-6 mt-12 bg-white rounded-2xl'>
              <div className='border-1 border-black rounded-2xl'>
                <div className='p-6 border-b-1 border-black rounded-2xl'>
                    <span className='ml-12 mr-12 text-xl'>Registeration Date</span>
                    <span className='text-xl ml-12'><strong>20 september 2025</strong></span>
                </div>
                <div className='p-6 border-b-1 border-black rounded-2xl'>
                    <span className='ml-12 mr-30 text-xl'>First Name</span>
                    <span className='text-xl ml-12'><strong>Muhammad</strong></span>
                </div>
                <div className='p-6 border-b-1 border-black rounded-2xl'>
                    <span className='ml-12 mr-30 text-xl'>Last Name</span>
                    <span className='text-xl ml-12'><strong>Imran</strong></span>
                </div>
                <div className='p-6 border-b-1 border-black rounded-2xl'>
                    <span className='ml-12 mr-30 text-xl'>Username</span>
                    <span className='text-xl ml-12'><strong>Sigma Coder</strong></span>
                </div>
                <div className='p-6 border-b-1 border-black rounded-2xl'>
                    <span className='ml-12 mr-40 text-xl'>Email</span>
                    <span className='text-xl ml-12'><strong>mimran11600@gmai.com</strong></span>
                </div>
                <div className='p-6 border-b-1 border-black rounded-2xl'>
                    <span className='ml-12 mr-38 text-xl'>Phone</span>
                    <span className='text-xl ml-12'><strong>+92 3011574440</strong></span>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Profile