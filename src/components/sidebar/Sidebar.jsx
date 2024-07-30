import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import { FaUserFriends } from 'react-icons/fa'
import { GrPowerShutdown } from 'react-icons/gr'
import { IoIosHome, IoIosNotificationsOutline, IoIosSettings } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { SiGooglemeet } from 'react-icons/si'

function Sidebar() {
  return (
    <div>
      <div className='max-w-container mx-auto flex items-start'>
        <div className='w-full h-20 flex  '>
            <div className='flex gap-x-8 items-center  justify-between'>
              <h1 className='flex items-center text-7xl mt-4'><CgProfile /></h1>
                <div className='flex  mt-4 pl-4 pr-4 rounded-md items-center border-2 border-black h-20 '>
                <div>
                  <div className='rounded-full text-3xl'><CiSearch /></div>
                  </div>
                  <div className='flex items-center outline-none h-12 ml-3'>
                  <input  className='w-80 h-8  outline-none text-2xl cursor-pointer' type="text"  />
                  </div>
                </div>
                <div>
                  <ul className='flex gap-8 items-center ml-20'>
                    <li className='text-5xl'><IoIosHome /></li>
                    <li className='text-5xl'><FaUserFriends /></li>
                    <li className='text-5xl'><IoIosNotificationsOutline /></li>
                    <li className='text-5xl'><SiGooglemeet /></li>
                    <li className='text-5xl'><IoIosSettings /></li>
                   
                  </ul>
                </div>
                <div>
                  <button className='text-4xl ml-40 border-4 border-blue-400 rounded-full p-4'><GrPowerShutdown /></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar