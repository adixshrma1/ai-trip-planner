import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='py-3 px-5 shadow-sm flex justify-between items-center'>
        <img className='cursor-pointer' src='logo.svg' />
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header