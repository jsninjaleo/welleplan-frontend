'use client'

import { useRef } from 'react'
import Input from '@/elements/input'
import { motion, useInView } from 'framer-motion'


export default function ContactUs() {
  return (
    <div>
      <div className="bg-mainBlue grid grid-cols-5 gap-20 pt-48 pb-36 2xl:px-52 px-32 relative">
        <div className='text-white col-span-3'>
          <p className='text-4xl font-bold'>
            So we work together?
          </p>

          <div className='grid grid-cols-2 gap-8 mt-24'>
            <div className='col-span-2'>
              <Input
                settings={
                  {
                    placeholder: 'Your name',
                    type: 'text'
                  }
                }
                input={(value)=>{}}
              />
            </div>

            <div className='mt-16'>
              <Input
                settings={
                  {
                    placeholder: 'E-mail',
                    type: 'email'
                  }
                }
                input={(value)=>{}}
              />
            </div>

            <div className='mt-16'>
              <Input
                settings={
                  {
                    placeholder: 'Phone number',
                    type: 'tel'
                  }
                }
                input={(value)=>{}}
              />
            </div>

            <div className='mt-16 col-span-2'>
              <Input
                settings={
                  {
                    placeholder: 'Details of your project',
                    type: 'text'
                  }
                }
                input={(value)=>{}}
              />
            </div>

            <div className='mt-16 col-span-2'>
              <Input
                settings={
                  {
                    placeholder: 'Your budget',
                    type: 'number'
                  }
                }
                input={(value)=>{}}
              />
            </div>
          </div>
        </div>

        <div className='text-white col-span-2'>
          <p className='text-4xl font-bold'>
            Other inquries?
          </p>
          
          <div className='mt-24'>
            <p className='text-xl font-bold mb-2'>Office</p>
            <p className='text-xl mb-2'>office@welleplan.com</p>
            <p className='text-xl'>+387 60 345 65 36</p>
          </div>

          <div className='mt-24'>
            <p className='text-xl font-bold mb-2'>Projects</p>
            <p className='text-xl mb-2'>projects@welleplan.com</p>
            <p className='text-xl'>+387 60 345 65 36</p>
          </div>
        </div>
      </div>
    </div>
  )
}
