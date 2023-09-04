'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/elements/button'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import AnimationBrand from '@/components/Home/AnimationBrand'


export default function ContactUs() {
  const first_section = useRef(null);
  const first_section_view = useInView(first_section);
  const router = useRouter();

  return (
    <div>
      <div className="bg-gradient-to-r from-darkYellow_gradient to-lightYellow_gradient grid grid-cols-2 gap-20 2xl:pt-28 pt-24 pb-4 2xl:px-52 px-32 relative">
        <div className='flex items-center'>
          <div>
            <p className='2xl:text-4xl text-3xl mb-4'>Our development</p>
            <p className='2xl:text-4xl text-3xl font-bold mb-6'>Services</p>
            <p className='2xl:text-xl text-lg font-medium !leading-relaxed'>
              We are proven software engineering and consulting team.<br></br>
              We partner with companies around the globe to create custom solutions<br></br>
              that drive your business success.
            </p>
          </div>
        </div>

        <div className='2xl:h-[480px] h-96'>
          <AnimationBrand></AnimationBrand>
        </div>
      </div>

      <div 
        className="bg-white grid grid-cols-2 2xl:gap-20 gap-16 py-24 2xl:px-52 px-32 relative"
        ref={first_section}
      >
        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl text-3xl font-bold mr-2 p-3 rounded-lg bg-mainBlue_light'>Web</p>
              <p className='2xl:text-4xl text-3xl'>development</p>
            </div>

            <p className='2xl:text-lg mb-6 !leading-relaxed'>
              Our web development team crafts responsive and feature-rich websites using cutting-edge technologies. 
              We ensure your online presence is not only visually appealing but also functional and user-friendly.
            </p>

            <div className='2xl:w-28 w-20 2xl:h-10 h-8'>
              <Button
                style={
                  { 
                      fontSize: '2xl:text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{router.push('/services/webDevelopment')}}
              >
                  {"More"}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 200, opacity: 0}}
          animate={first_section_view? { y: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex justify-center items-center'
        >
          <Image src="/images/image_landing1.svg" className='2xl:inline hidden' width={578} height={385} alt="" />
          <Image src="/images/image_landing1.svg" className='2xl:hidden inline' width={405} height={269} alt="" />
        </motion.div>

        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex justify-center items-center'
        >
          <Image src="/images/image_landing2.svg" className='2xl:inline hidden' width={400} height={400} alt="" />
          <Image src="/images/image_landing2.svg" className='2xl:hidden inline' width={280} height={280} alt="" />
        </motion.div>

        <motion.div 
          initial={{ y: 200, opacity: 0}}
          animate={first_section_view? { y: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex items-center'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl text-3xl font-bold mr-2 p-3 rounded-lg bg-mainBlue_light'>Mobile </p>
              <p className='2xl:text-4xl text-3xl'>development</p>
            </div>

            <p className='2xl:text-lg !leading-relaxed mb-6'>
              Reach your audience on their devices with our mobile app development services. 
              We create apps for iOS and Android that are intuitive, engaging, and aligned with your business goals.
            </p>

            <div className='2xl:w-28 w-20 2xl:h-10 h-8'>
              <Button
                style={
                  { 
                      fontSize: 'text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{router.push('/services/mobileDevelopment')}}
              >
                  {"More"}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl text-3xl font-bold mr-2 p-3 rounded-lg bg-mainBlue_light'>UI/UX</p>
              <p className='2xl:text-4xl text-3xl'>design</p>
            </div>

            <p className='2xl:text-lg mb-6 !leading-relaxed'>
              A great user experience is paramount. 
              Our designers create visually stunning and intuitive interfaces that enhance user engagement and satisfaction.
            </p>

            <div className='2xl:w-28 w-20 2xl:h-10 h-8'>
              <Button
                style={
                  { 
                      fontSize: '2xl:text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{}}
              >
                  {"More"}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 200, opacity: 0}}
          animate={first_section_view? { y: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex justify-center items-center'
        >
          <Image src="/images/image_landing1.svg" className='2xl:inline hidden' width={578} height={385} alt="" />
          <Image src="/images/image_landing1.svg" className='2xl:hidden inline' width={405} height={269} alt="" />
        </motion.div>

        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex justify-center items-center'
        >
          <Image src="/images/image_landing2.svg" className='2xl:inline hidden' width={400} height={400} alt="" />
          <Image src="/images/image_landing2.svg" className='2xl:hidden inline' width={280} height={280} alt="" />
        </motion.div>

        <motion.div 
          initial={{ y: 200, opacity: 0}}
          animate={first_section_view? { y: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex items-center'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl text-3xl font-bold mr-2 p-3 rounded-lg bg-mainBlue_light'>Custom </p>
              <p className='2xl:text-4xl text-3xl'>development</p>
            </div>

            <p className='2xl:text-lg !leading-relaxed mb-6'>
              We specialize in creating bespoke software solutions that cater to your specific requirements. 
              Whether you need a web application, mobile app, or desktop software, our experts are here to build it from the ground up.
            </p>

            <div className='2xl:w-28 w-20 2xl:h-10 h-8'>
              <Button
                style={
                  { 
                      fontSize: 'text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{}}
              >
                  {"More"}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x:-200, opacity: 0}}
          animate={first_section_view? { x: 0, opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl text-3xl font-bold mr-2 p-3 rounded-lg bg-mainBlue_light'>Software</p>
              <p className='2xl:text-4xl text-3xl'>consultation</p>
            </div>

            <p className='2xl:text-lg mb-6 !leading-relaxed'>
              Not sure where to start?
              We provide expert consultation to help you define your project scope, choose the right technologies, and develop a strategic roadmap for success.
            </p>

            {/* <div className='2xl:w-28 w-20 2xl:h-10 h-8'>
              <Button
                style={
                  { 
                      fontSize: '2xl:text-lg', 
                      fontColor: 'text-white',
                      bgColor: 'bg-mainBlue', 
                      hoveredBgColor: 'hover:bg-mainYellow'
                  }
                }
                handleClick={()=>{}}
              >
                  {"More"}
              </Button>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
