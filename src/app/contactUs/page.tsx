'use client'

import Input from '@/elements/input'

export default function ContactUs() {
  return (
    <div>
      <div className="bg-mainBlue grid md:grid-cols-5 grid-cols-1 md:gap-20 gap-y-12 md:pt-48 pt-36 md:pb-36 xs:pb-24 pb-16 2xl:px-52 lg:px-32 xs:px-10 px-5 relative">
        <div className='text-white md:col-span-3'>
          <p className='2xl:text-3xl xs:text-2xl text-lg font-bold'>
            So we work together?
          </p>

          <div className='grid grid-cols-2 xs:gap-8 gap-x-3 2xl:mt-24 xs:mt-16 mt-8'>
            <div className='col-span-2 placeholder:lg:text-lg placeholder:md:text-sm placeholder:xs:text-xs placeholder:text-[10px]'>
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
          <p className='2xl:text-3xl xs:text-2xl text-xl font-bold'>
            Other inquries?
          </p>
          
          <div className='2xl:mt-24 xs:mt-16 mt-10'>
            <p className='2xl:text-xl xs:text-lg text-base font-bold mb-2'>Office</p>
            <p className='2xl:text-xl xs:text-lg text-base mb-2'>office@welleplan.com</p>
            <p className='2xl:text-xl xs:text-lg text-base'>+387 60 345 65 36</p>
          </div>

          <div className='2xl:mt-24 xs:mt-16 mt-10'>
            <p className='2xl:text-xl xs:text-lg text-base font-bold mb-2'>Projects</p>
            <p className='2xl:text-xl xs:text-lg text-base mb-2'>projects@welleplan.com</p>
            <p className='2xl:text-xl xs:text-lg text-base'>+387 60 345 65 36</p>
          </div>
        </div>
      </div>
    </div>
  )
}
