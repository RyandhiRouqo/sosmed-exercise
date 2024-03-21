import React from 'react'
import { Button } from './ui/button'

const Navbar: React.FC = () => {
  return (
    <nav className='bg-primary'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-3xl font-bold cursor-pointer'>SOSMED</h1>
          <div className='flex gap-4 '>
            <Button className=' text-white'>Login</Button>
            <Button className=' text-white'>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar