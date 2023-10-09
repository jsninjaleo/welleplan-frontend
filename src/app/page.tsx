'use client'

import { useRef } from 'react'
import Button from '@/elements/button'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AnimationBrand from "@/components/Home/AnimationBrand"

export default function Home() {
  const router = useRouter();

  const first_section = useRef(null);
  const second_section = useRef(null);
  const third_section = useRef(null);
  const forth_section = useRef(null);
  const first_section_view = useInView(first_section);
  const second_section_view = useInView(second_section);
  const third_section_view = useInView(third_section);
  const forth_section_view = useInView(forth_section);

  return (
    <div>
      <div className="h-screen bg-mainBlue grid 2xl:grid-cols-2 xl:grid-cols-5 grid-cols-2 gap-4 items-center 2xl:px-52 px-32 relative">
        <div className='text-white 2xl:col-span-1 xl:col-span-3'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0}}
            animate={first_section_view? { scale: [1, 1.1, 1], opacity: 1} : {}}
            transition={first_section_view? { duration: 2, delay: 0.3 } : {}}
            ref={first_section}
          >
            <p className='2xl:text-5xl xl:text-4xl text-3xl font-bold !leading-normal'>
              Welcome to Welleplan <br></br>Your Partner in Software Development
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -800}}
            animate={first_section_view? { x: 0} : {}}
            transition={first_section_view? { duration: 1.5, delay: 0.5 } : {}}
            ref={first_section}
          >
            <p className='2xl:text-2xl xl:text-xl text-lg font-bold my-6'>{"Let's Create Your Digital Success Story"}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0}}
            animate={first_section_view? { opacity: 1} : {}}
            transition={first_section_view? { duration: 1.5, delay: 1 } : {}}
            className='flex'
            ref={first_section}
          >
            <div className='2xl:h-12 h-8 2xl:w-48 w-36 mr-6'>
              <Button
                style={
                  { 
                    fontSize: '2xl:text-lg', 
                    fontColor: 'text-white',
                    hoveredFontColor: 'hover:text-mainYellow',
                    bgColor: 'bg-mainYellow', 
                    hoveredBgColor: 'hover:bg-white' 
                  }
                }
                handleClick={()=>{router.push('/contactUs');}}
              >
                Contact Us
              </Button>
            </div>
            {/* <div className='2xl:h-12 h-8 2xl:w-48 w-36'>
              <Button
                style={
                  { 
                    fontSize: '2xl:text-lg', 
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
            </div> */}
          </motion.div>
        </div>

        <div className='h-full pb-12 2xl:col-span-1 xl:col-span-2'>
          <AnimationBrand></AnimationBrand>
        </div>  
      </div>

      <div className='2xl:py-36 py-24 bg-white grid grid-cols-2 gap-4 items-center 2xl:px-52 px-32 relative'>
        <motion.div
          initial={{ x:-200, opacity: 0}}
          animate={second_section_view? { x: 0, opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          ref={second_section}
        >
          <p className='2xl:text-3xl text-2xl font-bold !leading-normal mb-10'>Who we are<br/> and what we do?</p>
          <p className='2xl:text-lg'>
            WELLEPLAN is a software development company based in Sarajevo, Bosnia and Herzegovina with offices in China and Austria. 
            For almost a decade, we have been transforming businesses with adaptable and powerful digital solutions through full-cycle software development.<br/><br/>
            At Welleplan, we&apos;re not just a web development agency; we&apos;re your strategic partner in the digital realm.
            With a profound passion for crafting exceptional web experiences, we&apos;ve been at the forefront of the industry, helping businesses of all sizes thrive in the online landscape.
          </p>
        </motion.div>

        <motion.div
          initial={{ y:200, opacity: 0}}
          animate={second_section_view? { y: 0, opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center justify-center'
          ref={second_section}
        >
          <Image src="/images/image_landing1.svg" className='2xl:inline hidden' width={578} height={385} alt="" />
          <Image src="/images/image_landing1.svg" className='2xl:hidden inline' width={404} height={269} alt="" />
        </motion.div>
      </div>

      <div className='2xl:py-36 py-24 bg-mainBlue 2xl:px-52 px-32'>
        <div className='relative h-full flex justify-center items-center'>
          <div className='w-4/5'>
            <p className='2xl:text-3xl text-2xl text-white text-center !leading-normal'>
              At Welleplan, we are passionate about turning your software dreams into reality. 
              With a team of highly skilled developers, designers, and innovators, we offer a comprehensive range of software development services tailored to meet your unique needs.
            </p>
          </div>

          <Image src="/images/brand.svg" className='absolute -bottom-20 2xl:inline hidden right-0' width={95} height={93} alt="" />
          <Image src="/images/brand.svg" className='absolute -bottom-16 2xl:hidden inline right-0' width={76} height={74} alt="" />
        </div>  
      </div>

      <div 
        className='bg-white grid grid-cols-2 gap-4 2xl:px-52 px-32 2xl:py-36 py-24' 
        ref={third_section}
      >
        <motion.div
          initial={{ x:-200, opacity: 0}}
          animate={third_section_view? { x: 0, opacity: 1} : {}}
          transition={third_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center justify-center'
        >
          <Image src="/images/image_landing2.svg" className='2xl:inline hidden' width={400} height={400} alt='' />
          <Image src="/images/image_landing2.svg" className='2xl:hidden inline' width={280} height={280} alt='' />
        </motion.div>
 
        <motion.div
          initial={{ y:200, opacity: 0}}
          animate={third_section_view? { y: 0, opacity: 1} : {}}
          transition={third_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center'
        >
          <div>
            <p className='2xl:text-5xl text-4xl font-bold mb-10'>Mobile</p>
            <p className='2xl:text-3xl text-2xl !leading-loose'>
              We got you covered.
              Our dedicated development teams can respond to any task or challenge that you have.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0}}
          animate={third_section_view? { opacity: 1} : {}}
          transition={third_section_view? { duration: 1, delay: 0.7 } : {}}
          className='col-span-2 font-medium 2xl:text-5xl text-4xl text-center 2xl:py-20 py-12'
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
            <p className='2xl:text-5xl text-4xl font-bold mb-10'>Desktop</p>
            <p className='2xl:text-3xl text-2xl !leading-loose'>
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
          <Image src="/images/image_landing3.svg" className='2xl:inline hidden' alt='' width={398} height={265} />
          <Image src="/images/image_landing3.svg" className='2xl:hidden inline' alt='' width={288} height={192} />
        </motion.div>

        <div className='flex items-center justify-center 2xl:mt-48 mt-24 col-span-2'>
          <div>
            <motion.div
              initial={{ y: 200, opacity: 0}}
              animate={third_section_view? { y: 0, opacity: 1} : {}}
              transition={third_section_view? { duration: 0.5, delay: 1.5 } : {}}
            >
              <p className='2xl:text-5xl text-4xl text-center font-bold 2xl:mb-4 mb-3'>We Love</p>
              <p className='2xl:text-4xl text-3xl font-medium !leading-loose'>
                to build great projects...<br/>
                ...for you!
              </p>
            </motion.div>

            <motion.div 
              className='flex justify-center items-center'
              initial={{ x: -200, opacity: 0}}
              animate={third_section_view? { x: 0, opacity: 1} : {}}
              transition={third_section_view? { duration: 0.5, delay: 1.5 } : {}}
            >
              <Image src="/images/image_landing4.svg" className='2xl:inline hidden' alt='' width={392} height={260} />
              <Image src="/images/image_landing4.svg" className='2xl:hidden inline' alt='' width={274} height={183} />
            </motion.div>
            
            <div className='flex justify-center items-center'>
              <motion.div
                initial={{ opacity: 0}}
                animate={third_section_view? { opacity: 1} : {}}
                transition={third_section_view? { duration: 0.5, delay: 1.8 } : {}}
                className='2xl:h-10 h-8 2xl:w-60 w-48 2xl:mt-8 mt-4'
              >
                <Button
                  style={
                    { 
                      fontSize: '2xl:text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                    }
                  }
                  handleClick={()=>{router.push('/contactUs');}}
                >
                  {"Let's build something"}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-mainBlue 2xl:px-52 px-32 2xl:py-36 py-24' ref={forth_section}>
        <div className='grid grid-cols-5 gap-4 2xl:mb-48 mb-36'>
          <div className='col-span-3'>
            <p className='2xl:text-4xl text-3xl font-bold'>Let&apos;s Collaborate</p>

            <p className='2xl:text-2xl text-xl font-medium 2xl:mt-6 mt-4'>
              Ready to embark on a journey of digital transformation?
            </p>

            <p className='2xl:text-2xl text-xl font-semibold 2xl:mt-16 mt-12'>
              We&apos;d love to hear about your project.<br></br><br></br>
              Contact us today to discuss your ideas, and together, we can bring your vision to life.<br></br><br></br>
              Join us at Welleplan and experience the difference in software development
            </p>
          </div>

          <div className="col-span-2 flex justify-center items-end">
            <motion.div
              initial={{ y: 200, opacity: 0}}
              animate={forth_section_view? { y: 0, opacity: 1} : {}}
              transition={forth_section_view? { duration: 1, delay: 0.5 } : {}}
            >
              <Image src="/images/image_landing5.svg" alt=''  width={240} height={240} />
              
              <div className='2xl:h-10 h-8 2xl:w-40 w-32 mx-auto my-6'>
                <Button
                  style={
                    { 
                      fontSize: '2xl:text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainYellow', 
                      hoveredBgColor: 'hover:bg-mainPurple'
                    }
                  }
                  handleClick={()=>{router.push('/contactUs')}}
                >
                  {"Contact Us"}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className='text-center'>
          <p className='2xl:text-4xl text-3xl font-medium'>
            Want to stay in the loop?
          </p>
        </div>

        <div className='text-center 2xl:mt-8 mt-6'>
          <p className='2xl:text-3xl text-2xl'>
            Subscribe to our newsletter
          </p>
        </div>

        <div className='flex items-center justify-center 2xl:mt-10 mt-8'>
          <div className='w-1/2 mr-4'>
            <input 
              className='py-2 px-10 2xl:text-xl text-lg rounded-full w-full'
              type="text" 
              placeholder='...enter your email address'
            />
          </div>

          <div className='2xl:w-48 w-36 2xl:h-12 h-10'>
            <Button
              style={
                { 
                  fontSize: '2xl:text-lg', 
                  fontColor: 'text-white',
                  hoveredFontColor: 'hover:text-mainYellow',
                  bgColor: 'bg-mainBlue',
                  border: 'border-2 border-white',
                }
              }
              handleClick={()=>{}}
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>

      {/* <div className='bg-white 2xl:px-52 px-36 py-36 grid grid-cols-4 gap-4'>
         <div className='col-span-2'>
          <p className='text-4xl font-semibold mb-8'>Addittional content</p>
          <p className='text-3xl leading-[46px]'>
            We got you covered. Our dedicated development teams can respond to any task or challenge that you have.
          </p>
         </div>
      </div> */}
    </div>
  )
}
