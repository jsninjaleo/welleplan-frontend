'use client'

import { useRef } from 'react'
import Input from '@/elements/input'
import { motion, useInView } from 'framer-motion'


export default function ContactUs() {
  return (
    <div>
      <div className="bg-mainBlue grid grid-cols-3 gap-20 pt-96 pb-36 2xl:px-52 px-36 relative">
        <div className='col-span-3 text-5xl font-bold'>
            Services
        </div>

        <div>
            <p className='text-3xl font-bold'>Web development</p>
        </div>
        
        <div>
            <p className='text-3xl font-bold'>Mobile development</p>
        </div>

        <div>
            <p className='text-3xl font-bold'>User interface design</p>
        </div>
      </div>
    </div>
  )
}
