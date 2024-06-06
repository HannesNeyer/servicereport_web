import React from 'react'

type Props = {}

export default function LetterOfAcceptance({ }: Props) {
    return (
        <div>
            <div className='text-[#029294]'>Allgemein</div>
            <div className='text-[#029294]'>gem. ihrer Bestllung</div>

            <div>
                <div  className='border-2 border-gray-500'>1. Lieferung gemäß ihrem Auftrag vollständig und unbeschädigt erhalten</div>
                <input type="checkbox"></input>
                <input type="checkbox"></input>

                <div className=' border-2 border-gray-500'>
                    <div className='border-2'>Bemerkungen</div>
                    <input type="text" className='border-2'></input>
                </div>
            </div>

        </div>
        
    )
}