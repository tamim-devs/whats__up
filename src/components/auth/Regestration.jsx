import React from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik'
import { useFormik } from 'formik';
import { BsMeta } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { GrLinkedin } from 'react-icons/gr'

function Regestration() {
  const formik = useFormik({
     initialValues: {
      email: '',
      password: '',
    },
   
  });

  return (

    <>
      <div className='bg-[#EEF2F5]'>
          <div className='max-w-container mx-auto '>
          <div className='flex justify-center items-center h-screen'>
              <div className='pt-40 pb-20 bg-white px-40 rounded-[41px]'>
                  <div className='flex flex-col  gap-4' >
                    <div className='mb-20-32'>
                    <h1 className='text-4xl flex justify-center text-black'>Sign up</h1>
                    
                    </div>
                     <form onSubmit={formik.handleSubmit}>
                     <div className='flex flex-col gap-4'>
                        <div className='w-80 h-10 border-2 rounded-lg relative overflow-hidden border-[#8AC0FF] '>
                          <input  
                          placeholder='Enter your E-mail' 
                          className='w-80 left-4  absolute  h-10  outline-none' 
                          name='email' 
                          onChange={formik.handleChange} 
                          id='email' 
                          value={formik.values.email} 
                          type="email" />
                      </div>
                      <div className='w-80 h-10 border-2 rounded-lg relative overflow-hidden border-[#8AC0FF] '>
                         <input
                          placeholder='Enter your password'  
                          className='w-80 left-4  absolute  h-10  outline-none' 
                          type="password" 
                          onChange={formik.handleChange} 
                          id='password' 
                          value={formik.values.password} 
                          name='password' />
                      </div>
                      <div>
                      <p className='mt-4'>Create a new Account</p>                     
                      <p className='mb-4'> OR Continue With</p>
                      </div>

                      <div className='flex justify-center gap-12 mr-4'>
                        <div><FcGoogle className='w-9 h-9' /></div>
                        <div><GrLinkedin className='w-9 h-9 text-blue-700' /></div>                        
                        <div><BsMeta className='w-9 h-9 text-blue-700' /></div>
                      </div>
                      <button type='submit' className='w-[312px] rounded-2xl text-2xl font-bold text-white bg-sky h-[62px] '>Sign up</button>
                      </div>
                     </form>
                  </div>
              </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default Regestration