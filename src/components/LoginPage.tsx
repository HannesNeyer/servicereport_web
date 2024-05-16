import React from 'react'

type Props = {}

export default function LoginPage({ }: Props) {
    return (
        <div className='relative w-[24.3rem]'>
            <div className='flex'>
                <img src="sonderhofLogo.png" className='mt-2 w-18 h-12'></img>
                <h1 className='ml-2 font-bold text-5xl font-sans text-[#029294] z-10'>ServiceReport</h1>
            </div>

            <div className='absolute mt-[-0.5rem] right-0 h-72 w-[21rem] border-[0.25rem] rounded-lg border-gray-500'>
                <p className='font-light fon-sans text-5xl text-[#029294] mb-5 ml-2'>Login</p>
                <div className='h-10 w-[21.2rem] border-[0.25rem] rounded-lg border-gray-500 mb-3 ml-2'></div>
                <p className='font-light fon-sans text-5xl text-[#029294] mb-3 ml-2'>Passwort</p>
                <div className='h-10 w-[21.2rem] border-[0.25rem] rounded-lg border-gray-500 ml-2'></div>
            </div>
        </div>
    )
}