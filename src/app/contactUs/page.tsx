'use client'

import Input from '@/elements/input'

export default function ContactUs() {
  return (
    <div>
      <div className="bg-mainBlue grid grid-cols-5 gap-20 pt-48 pb-36 2xl:px-52 px-32 relative">
        <div className='text-white col-span-3'>
          <p className='2xl:text-3xl text-2xl font-bold'>
            So we work together?
          </p>

          <div className='grid grid-cols-2 gap-8 2xl:mt-24 mt-16'>
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

            <div className='2xl:mt-16 mt-12'>
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

            <div className='2xl:mt-16 mt-12'>
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

            <div className='2xl:mt-16 mt-12 col-span-2'>
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

            <div className='2xl:mt-16 mt-12 col-span-2'>
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
          <p className='2xl:text-3xl text-2xl font-bold'>
            Other inquries?
          </p>
          
          <div className='2xl:mt-24 mt-16'>
            <p className='2xl:text-xl text-lg font-bold mb-2'>Office</p>
            <p className='2xl:text-xl text-lg mb-2'>office@welleplan.com</p>
            <p className='2xl:text-xl text-lg'>+387 60 345 65 36</p>
          </div>

          <div className='2xl:mt-24 mt-16'>
            <p className='2xl:text-xl text-lg font-bold mb-2'>Projects</p>
            <p className='2xl:text-xl text-lg mb-2'>projects@welleplan.com</p>
            <p className='2xl:text-xl text-lg'>+387 60 345 65 36</p>
          </div>
        </div>
      </div>
    </div>
  )
}
