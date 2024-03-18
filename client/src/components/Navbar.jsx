import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-between px-16 '>
      <div>
        <h1><a href='/' className='text-[40px] font-tuf text-maintext font-bold no-underline'>takeUforward</a></h1>
      </div>
      <a href='https://github.com/ankur1493/tuf-assignment'>
        <button className='w-28 h-12 bg-secondbg my-4 border-none rounded-lg text-maintext text-[20px] font-medium'>Like This?</button>
      </a>
    </div>
  )
}

export default Navbar
