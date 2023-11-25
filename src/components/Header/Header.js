import React from 'react'

export default function Header() {
  return (
    <header className='w-full h-[91vh] text-white bg-slate-600 flex flex-col  items-center justify-center gap-4'>

        <h2 className='text-[3rem] font-bold'>Unlimited movies, TV show and more</h2>

        <p className='text-3xl'>Watch anywhere. Cancel anytime.</p>

        <p className='text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>

        <div className='flex gap-2'>
        <input className='px-32 py-4 rounded-md bg-black border-green-700 border-[2px]' type="text" placeholder='Email address' />
        <button className='flex px-20 py-4 bg-red-700 rounded-md'>
          Get Started
        
         </button>
        </div>
    </header>

  )
}
