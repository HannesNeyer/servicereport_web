import React from 'react'

type Props = {}

export default function LoginPage({ }: Props) {
    return (
        <div className='flex w-screen h-screen justify-center items-center text-[#029294] text-5xl'>
            <div className='relative'>
                <div className='flex'>
                    <img src="sonderhofLogo.png" className='mt-2 -ml-11 h-12'></img>
                    <h1 className='font-bold z-10'>ServiceReport</h1>
                </div>

                <div className='mt-[-0.5rem] right-0 h-72 w-[21rem] border-[0.25rem] font-light fon-sans rounded-lg border-gray-500'>
                    <p className='mb-5 ml-2'>Login</p>
                    <div className='h-10 w-[20.2rem] border-[0.25rem] rounded-lg border-gray-500 mb-3 ml-2'></div>
                    <p className='mb-3 ml-2'>Passwort</p>
                    <div className='h-10 w-[20.2rem] border-[0.25rem] rounded-lg border-gray-500 ml-2'></div>
                    <button className='h-10 w-32 text-2xl border-2 rounded-full border-[#029294] ml-48 hover:border-blue-600 active:bg-[#9ce6e7]' onClick={() => {
                        alert("Button pressed")
                    }}>Bestätigen</button>
                </div>
            </div>

            <div className='flex justify-center mt-12 ml-8 items-center w-96 h-72 border-l-[0.25rem] border-gray-500 bg-gradient-to-r from-[#9ce6e7]'>
                <img src="henkelSonderhofLogo.png" className='w-96 h-38'></img>
            </div>
        </div>
    )
}