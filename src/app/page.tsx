'use client'

import { useRef } from 'react'
import Button from '@/elements/button'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const first_section = useRef(null);
  const second_section = useRef(null);
  const third_section = useRef(null);
  const first_section_view = useInView(first_section);
  const second_section_view = useInView(second_section);
  const third_section_view = useInView(third_section);

  return (
    <div>
      <div className="h-screen bg-mainBlue grid grid-cols-2 gap-4 items-center 2xl:px-52 px-36 relative">
        <div className='text-white'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0}}
            animate={first_section_view? { scale: [1, 1.1, 1], opacity: 1} : {}}
            transition={first_section_view? { duration: 2, delay: 0.3 } : {}}
            ref={first_section}
          >
            <h1 className='text-7xl font-bold leading-normal'>Creating software that matters</h1>
          </motion.div>

          <motion.div
            initial={{ x: -800}}
            animate={first_section_view? { x: 0} : {}}
            transition={first_section_view? { duration: 1.5, delay: 0.5 } : {}}
            ref={first_section}
          >
            <p className='text-3xl font-bold my-6'>Full stack software development</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0}}
            animate={first_section_view? { opacity: 1} : {}}
            transition={first_section_view? { duration: 1.5, delay: 1 } : {}}
            className='flex'
            ref={first_section}
          >
            <div className='h-16 w-60 mr-6'>
                <Button
                  style={
                    { 
                        fontSize: 'text-xl', 
                        fontColor: 'text-white',
                        hoveredFontColor: 'hover:text-mainYellow',
                        bgColor: 'bg-mainYellow', 
                        hoveredBgColor: 'hover:bg-white' 
                    }
                  }
                  handleClick={()=>{}}
                >
                    See our work
                </Button>
            </div>
            <div className='h-16 w-40'>
              <Button
                style={
                    { 
                        fontSize: 'text-xl', 
                        fontColor: 'text-mainBlue',
                        hoveredFontColor: 'hover:text-white',
                        bgColor: 'bg-white', 
                        hoveredBgColor: 'hover:bg-mainPurple' 
                    }
                }
                handleClick={()=>{}}
              >
                  Blog
              </Button>
            </div>
          </motion.div>
        </div>

        <div className='h-full relative'>
          <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
              transition={{ repeat: Infinity , duration: 2 }}
          >
            <Image src="/images/logo_seg1.svg" className='absolute bottom-16 right-[415px]' width={545} height={124} alt="" />
          </motion.div>

          <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
              transition={{ repeat: Infinity , duration: 2, delay: 0.4 }}
          >
            <Image src="/images/logo_seg2.svg" className='absolute bottom-16 right-[290px]' width={309} height={153} alt="" />
          </motion.div>

          <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
              transition={{ repeat: Infinity , duration: 2, delay: 0.75 }}
          >
            <Image src="/images/logo_seg3.svg" className='absolute bottom-16 right-0' width={378} height={219} alt="" />
          </motion.div>

          <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
              transition={{ repeat: Infinity , duration: 2, delay: 1.1 }}
          >
            <Image src="/images/logo_seg4.svg" className='absolute bottom-[232px] right-0' width={269} height={201} alt="" />
          </motion.div>

          <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
              transition={{ repeat: Infinity , duration: 2, delay: 1.45 }}
          >
            <Image src="/images/logo_seg5.svg" className='absolute bottom-[312px] right-0' width={219} height={340} alt="" />
          </motion.div>

          <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
              transition={{ repeat: Infinity , duration: 2, delay: 1.8 }}
          >
            <Image src="/images/logo_seg6.svg" className='absolute bottom-[211px] right-[251px]' width={109} height={67} alt="" />
          </motion.div>
        </div>  
      </div>

      <div className='h-screen bg-white grid grid-cols-5 gap-4 items-center 2xl:px-52 px-36 relative'>
        <motion.div
          initial={{ x:-200, opacity: 0}}
          animate={second_section_view? { x: 0, opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          className='col-span-2'
          ref={second_section}
        >
          <p className='text-5xl font-bold leading-[60px] mb-10'>Who we are<br/> and what we do?</p>
          <p className='text-xl'>
            WELLEPLAN is a software development company based in Sarajevo, Bosnia and Herzegovina with offices in China and Austria. 
            For almost a decade, we have been transforming businesses with adaptable and powerful digital solutions through full-cycle software development.<br/><br/>
            By bringing the latest IT advancements to various industries, we deliver custom software that completely fits the behavior and needs of our customers. 
            While WELLEPLAN records continuous growth and expansion, with the software solutions we provide, our customers grow, too. We foster a positive work environment based on trust, teamwork, open communication, and last but not least - lots of laughs.
          </p>
        </motion.div>

        <motion.div
          initial={{ y:200, opacity: 0}}
          animate={second_section_view? { y: 0, opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          className='col-span-3 flex items-center justify-center'
          ref={second_section}
        >
          <Image src="/images/image_landing1.svg" width={722} height={481} alt="" />
        </motion.div>
      </div>

      <div className='h-screen bg-mainBlue 2xl:px-52 px-36'>
        <div className='relative h-full flex justify-center items-center'>
          <p className='text-6xl text-white text-center leading-[72px]'>
            Welleplan is a software, product design and engineering company that’s passionate about crafting ideas into lovable products.
            While coding is what we love to do most, we also do much more than that.
          </p>
          <Image src="/images/brand.svg" className='absolute bottom-24 right-0' width={95} height={93} alt="" />
        </div>  
      </div>

      <div 
        className='bg-white grid grid-cols-2 gap-4 2xl:px-52 px-36 py-64' 
        ref={third_section}
      >
        <motion.div
          initial={{ x:-200, opacity: 0}}
          animate={third_section_view? { x: 0, opacity: 1} : {}}
          transition={third_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center justify-center'
        >
          <Image src="/images/image_landing2.svg" width={500} height={500} alt='' />
        </motion.div>
 
        <motion.div
          initial={{ y:200, opacity: 0}}
          animate={third_section_view? { y: 0, opacity: 1} : {}}
          transition={third_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center'
        >
            <div>
              <p className='text-7xl font-bold mb-10'>Mobile</p>
              <p className='text-4xl leading-[52px]'>
                We got you covered.
                Our dedicated development teams can respond to any task or challenge that you have.
              </p>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0}}
          animate={third_section_view? { opacity: 1} : {}}
          transition={third_section_view? { duration: 1, delay: 0.7 } : {}}
          className='col-span-2 font-medium text-6xl text-center py-20'
        >
          Or
        </motion.div>

        <motion.div
          initial={{ x: -200, opacity: 0}}
          animate={third_section_view? { x: 0, opacity: 1} : {}}
          transition={third_section_view? { duration: 1, delay: 1.1 } : {}}
          className='flex items-center'
        >
          <div>
            <p className='text-7xl font-bold mb-10'>Desktop</p>
            <p className='text-4xl leading-[52px]'>
              As our core competence tech stack. 
              We at Welleplan make your web projects run fast and reliable.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0}}
          animate={third_section_view? { y: 0, opacity: 1} : {}}
          transition={third_section_view? { duration: 1, delay: 1.1 } : {}}
          className='flex items-center justify-center'
        >
          <Image src="/images/image_landing3.svg" alt='' width={497} height={331}  />
        </motion.div>

        <motion.div
          initial={{ x: -200, opacity: 0}}
          animate={third_section_view? { x: 0, opacity: 1} : {}}
          transition={third_section_view? { duration: 1, delay: 1.5 } : {}}
          className='flex items-center justify-center mt-52'
        >
          <Image src="/images/image_landing4.svg" alt=''  width={489} height={326} />
        </motion.div>

        <div className='flex items-center mt-52'>
          <div>
            <motion.div
              initial={{ y: 200, opacity: 0}}
              animate={third_section_view? { y: 0, opacity: 1} : {}}
              transition={third_section_view? { duration: 0.5, delay: 1.5 } : {}}
            >
              <p className='text-7xl font-bold mb-10'>We Love</p>
              <p className='text-7xl font-medium leading-[84px]'>
                to build great projects...<br/>
                ...for you!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0}}
              animate={third_section_view? { opacity: 1} : {}}
              transition={third_section_view? { duration: 0.5, delay: 1.8 } : {}}
              className='h-16 w-72 mr-6 mt-12'
            >
              <Button
                style={
                  { 
                      fontSize: 'text-xl', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{}}
              >
                  {"Let's build something"}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='bg-mainBlue 2xl:px-52 px-36 pt-16 pb-20'>
        <div className='text-center'>
          <p className='text-5xl font-medium'>
            Want to stay in the loop?
          </p>
        </div>

        <div className='text-center mt-8'>
          <p className='text-4xl'>
            Subscribe to our newsletter
          </p>
        </div>

        <div className='flex items-center justify-center mt-10'>
          <div className='w-1/2 mr-4'>
            <input 
                className='py-3 px-10 text-2xl rounded-full w-full'
                type="text" 
                placeholder='...enter your email address'
              />
          </div>

          <div className='w-60 h-[56px]'>
            <Button
              style={
                { 
                    fontSize: 'text-xl', 
                    fontColor: 'text-white',
                    hoveredFontColor: 'hover:text-mainYellow',
                    bgColor: 'bg-mainBlue',
                    border: 'border-4 border-white',
                }
              }
              handleClick={()=>{}}
            >
                SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>

      <div className='bg-white 2xl:px-52 px-36 py-32 grid grid-cols-4 gap-4'>
         <div className='col-span-2'>
          <p className='text-5xl font-semibold mb-8'>Addittional content</p>
          <p className='text-4xl leading-[46px]'>
            We got you covered. Our dedicated development teams can respond to any task or challenge that you have.
          </p>
         </div>
      </div>
    </div>
  )
}
