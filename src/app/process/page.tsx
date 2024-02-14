'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/elements/button'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import AnimationBlueBrand from '@/components/Home/AnimationBlueBrand'


export default function ContactUs() {
  const first_section = useRef(null);
  const first_section_view = useInView(first_section);
  const second_section = useRef(null);
  const second_section_view = useInView(second_section);
  const third_section = useRef(null);
  const third_section_view = useInView(third_section);
  const router = useRouter();

  const elements = typeof document !== 'undefined' ? Array.from(document.querySelectorAll('.hover-effect')) : [];
const group_elements = typeof document !== 'undefined' ? Array.from(document.querySelectorAll('.hover-group')) : [];
let timeoutId: number | undefined;

group_elements?.forEach((group_element: Element | null, index: number) => {
  if (group_element) {
    group_element.addEventListener('mouseenter', () => {
      timeoutId = window.setTimeout(() => {
        if (elements[index * 2]) {
          elements[index * 2].classList.remove('hidden');
        }
        if (elements[index * 2 + 1]) {
          elements[index * 2 + 1].classList.remove('hidden');
        }
      }, 500);
    });

    group_element.addEventListener('mouseleave', () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      if (elements[index * 2]) {
        elements[index * 2].classList.add('hidden');
      }
      if (elements[index * 2 + 1]) {
        elements[index * 2 + 1].classList.add('hidden');
      }
    });
  }
});

  return (
    <div>
      <div className="bg-white lg:h-auto sm:h-[600px] h-[700px] grid lg:grid-cols-2 grid-cols-1 lg:gap-20 lg:pt-52 pt-40 pb-4 2xl:px-52 lg:px-32 xs:px-10 px-5 relative">
        <div className='flex sm:items-center lg:w-full sm:w-2/3 w-full'>
          <div>
            <p className='2xl:text-4xl xs:text-3xl xxs:text-2xl text-xl xs:mb-4 mb-2'>Our development</p>
            <p className='2xl:text-4xl xs:text-3xl xxs:text-2xl text-xl font-bold xs:mb-6 mb-4'>process</p>
            <p className='2xl:text-xl xs:text-lg xxs:text-base text-sm font-medium !leading-relaxed'>
              We are a web development agency that specializes in creating custom, high-quality web apps for businesses of all sizes. 
              We follow a proven development process to ensure that every project is delivered on time and to budget, and that our clients are completely satisfied with the results.
            </p>
          </div>
        </div>
        <div className='lg:relative absolute sm:bottom-0 xs:-bottom-[10px] bottom-12 lg:right-0 right-[40px]'>
          <div className='lg:w-full w-[300px] h-[200px] lg:h-full'>
            <AnimationBlueBrand></AnimationBlueBrand>
          </div>
        </div>
      </div>

      <div className='bg-white xs:py-24 py-10 2xl:px-52 md:px-32 xs:px-10 px-5 relative md:text-2xl xs:text-xl text-lg font-semibold leading-normal'>
        At Welleplan, we believe that a well-defined software development process is essential for delivering high-quality products on time and within budget. 
        Our process is based on the following key principles:
      </div>

      <div 
        className="bg-white 2xl:px-52 md:px-32 xs:px-10 px-5 relative"
        ref={first_section}
      >
        <motion.div 
          initial={{opacity: 0}}
          animate={first_section_view? {opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center md:w-1/2 md:pb-8 xs:pb-6'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl md:text-3xl xs:text-2xl text-xl font-semibold'>Communication and collaboration:</p>
            </div>

            <p className='2xl:text-base text-sm mb-6 font-semibold !leading-relaxed'>
              We believe that close communication and collaboration between our team and our clients is essential for success. 
              We start by working with our clients to understand their needs and requirements. 
              Once we have a good understanding of the project, we develop a detailed plan and timeline. 
              We keep our clients updated on our progress throughout the development process and make sure to get their feedback on all major decisions.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity: 0}}
          animate={first_section_view? {opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 0.7 } : {}}
          className='flex items-center md:w-1/2 md:pb-8 xs:pb-6'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl md:text-3xl xs:text-2xl text-xl font-semibold'>Quality assurance:</p>
            </div>

            <p className='2xl:text-base text-sm mb-6 font-semibold !leading-relaxed'>
              We take quality assurance very seriously. 
              We have a dedicated QA team that tests our software at every stage of the development process. 
              We also use a variety of tools and techniques to ensure that our software is bug-free and meets the highest standards of quality.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity: 0}}
          animate={first_section_view? {opacity: 1} : {}}
          transition={first_section_view? { duration: 1, delay: 1.1 } : {}}
          className='flex items-center md:w-1/2 md:pb-8 xs:pb-6'
        >
          <div>
            <div className='flex items-center mb-4'>
              <p className='2xl:text-4xl md:text-3xl xs:text-2xl text-xl font-semibold'>Agility:</p>
            </div>

            <p className='2xl:text-base text-sm mb-6 font-semibold !leading-relaxed'>
              We believe that it is important to be agile and adaptable in the software development process. 
              Things don&apos;t always go according to plan, so we are prepared to make adjustments as needed. 
              We also believe that it is important to be transparent with our clients about any challenges or setbacks that we encounter.
            </p>
          </div>
        </motion.div>
      </div>

      <div className='bg-white md:py-24 xs:py-12 py-8 2xl:px-52 md:px-32 xs:px-10 px-5 relative 2xl:text-4xl md:text-3xl xs:text-2xl text-xl font-semibold text-center !leading-normal'>
        Our software development process<br className='lg:block hidden'/> typically consists of the following steps:
      </div>

      <div 
        className="bg-white grid grid-cols-2 2xl:gap-20 md:gap-16 gap-10 pb-24 2xl:px-52 md:px-32 xs:px-10 px-5 relative"
        ref={second_section}
      >
        <motion.div 
          initial={{opacity: 0}}
          animate={second_section_view? {opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          className='hover-group group cursor-pointer lg:col-span-1 col-span-2'
        >
          <div className='w-full items-start'>
            <div className='flex items-center justify-center group-hover:justify-start 2xl:py-8 py-4 2xl:px-10 px-6 bg-mainBlue'>
              <Image src="/images/icon_consultation.svg" className='group-hover:hidden' width={32} height={32} alt="" />
              <p className='2xl:text-3xl xs:text-2xl text-base font-semibold pl-8 text-processTitleColor'>
                Consultation
              </p>
            </div>

            <div className='group-hover:transition-all group-hover:duration-1000 duration-500 ease-in-out 
                  h-0 group-hover:md:h-64 group-hover:sm:h-52 group-hover:xs:h-64 group-hover:h-[300px] 
                  flex sm:flex-row flex-col items-center justify-center bg-mainGrey 
                  group-hover:md:px-8 px-6 group-hover:md:py-8 group-hover:py-6'>
              <div>
                <Image
                  src="/images/image_consultation.svg" 
                  className='hover-effect hidden xl:w-48 lg:w-32 sm:w-48 w-32 xl:h-48 lg:h-32 sm:h-48 h-32 xl:pr-8 sm:pr-5' 
                  width={0} height={0} alt="" />
              </div>
              <div className='hover-effect hidden flex-1 2xl:text-xl text-sm font-semibold'>
                We start by getting to know your business and your goals for your website. 
                We discuss your target audience, the features and functionality you need, and the overall look and feel you&apos;re going for.
              </div>
              {/* <div>
                <Image 
                  src="/images/image_consultation.svg" 
                  className='group-hover:transition-all group-hover:delay-300 delay-100 duration-100 ease-in-out opacity-0 group-hover:opacity-100 
                    max-w-max xl:!w-48 lg:w-32 sm:w-48 w-32 xl:h-48 lg:h-32 sm:h-48 h-32 xl:pr-8 sm:pr-5' 
                  width={190} height={190} alt="" />
              </div>
              <div className='2xl:text-xl text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:transition-all delay-100 
                    group-hover:delay-300 duration-100 ease-in-out'>
                We start by getting to know your business and your goals for your website. 
                 We discuss your target audience, the features and functionality you need, and the overall look and feel you&apos;re going for.
              </div> */}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{opacity: 0}}
          animate={second_section_view? {opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          className='hover-group group cursor-pointer lg:col-span-1 col-span-2'
        >
          <div className='w-full'>
            <div className='flex items-center justify-center group-hover:justify-start 2xl:py-8 py-4 2xl:px-10 px-6 bg-mainBlue'>
              <Image src="/images/icon_planning.svg" className='group-hover:hidden' width={36} height={36} alt="" />
              <p className='2xl:text-3xl xs:text-2xl text-base font-semibold pl-8 text-processTitleColor'>
                Planning
              </p>
            </div>

            <div className='group-hover:transition-all group-hover:duration-1000 duration-500 ease-in-out 
                  h-0 group-hover:md:h-64 group-hover:sm:h-52 group-hover:xs:h-64 group-hover:h-[300px] 
                  flex sm:flex-row flex-col items-center justify-center bg-mainGrey group-hover:md:px-8 px-6 
                  group-hover:md:py-8 group-hover:py-6'>
              <div>
                <Image 
                  src="/images/image_planning.svg" 
                  className='hover-effect hidden group-hover:transition-all group-hover:delay-300 delay-100 duration-100 ease-in-out 
                  opacity-0 group-hover:opacity-100 max-w-max xl:!w-48 lg:w-32 sm:w-48 w-32 xl:h-48 lg:h-32 sm:h-48 h-32 xl:pr-8 sm:pr-5' 
                  width={190} height={190} alt="" />
              </div>
              <div className='hover-effect hidden 2xl:text-xl text-sm font-semibold'>
                Once we have a good understanding of your needs, we create a detailed project plan that outlines the scope of work, timeline, and budget. 
                We&apos;ll also work with you to develop a content strategy and sitemap.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity: 0}}
          animate={second_section_view? {opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          className='hover-group group cursor-pointer lg:col-span-1 col-span-2'
        >
          <div className='w-full'>
            <div className='flex items-center justify-center group-hover:justify-start 2xl:py-8 py-4 2xl:px-10 px-6 bg-mainBlue'>
              <Image src="/images/icon_design.svg" className='group-hover:hidden' width={36} height={36} alt="" />
              <p className='2xl:text-3xl xs:text-2xl text-base font-semibold pl-8 text-processTitleColor'>
                Design
              </p>
            </div>

            <div className='group-hover:transition-all group-hover:duration-1000 duration-500 ease-in-out h-0 group-hover:md:h-64 group-hover:sm:h-52 group-hover:xs:h-64 group-hover:h-[300px] flex sm:flex-row flex-col items-center justify-center bg-mainGrey group-hover:md:px-8 px-6 group-hover:md:py-8 group-hover:py-6'>
              <div>
                <Image 
                  src="/images/image_design.svg" 
                  className='hover-effect hidden max-w-max xl:!w-48 lg:w-32 sm:w-48 w-32 xl:h-48 lg:h-32 sm:h-48 h-32 xl:pr-8 sm:pr-5' 
                  width={190} height={190} alt="" />
              </div>
              <div className='hover-effect hidden 2xl:text-xl text-sm font-semibold'>
                Once we have a good understanding of the requirements, we design the system architecture. 
                This includes defining the system&apos;s components, their interactions, and the interfaces between them.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity: 0}}
          animate={second_section_view? {opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          className='hover-group group cursor-pointer lg:col-span-1 col-span-2'
        >
          <div className='w-full'>
            <div className='flex items-center justify-center group-hover:justify-start 2xl:py-8 py-4 2xl:px-10 px-6 bg-mainBlue'>
              <Image src="/images/icon_development.svg" className='group-hover:hidden' width={36} height={36} alt="" />
              <p className='2xl:text-3xl xs:text-2xl text-base font-semibold pl-8 text-processTitleColor'>
                Development
              </p>
            </div>

            <div className='group-hover:transition-all group-hover:duration-1000 duration-500 ease-in-out h-0 group-hover:md:h-64 group-hover:sm:h-52 group-hover:xs:h-64 group-hover:h-[300px] flex sm:flex-row flex-col items-center justify-center bg-mainGrey group-hover:md:px-8 px-6 group-hover:md:py-8 group-hover:py-6'>
              <div>
                <Image 
                  src="/images/image_development.svg" 
                  className='hover-effect hidden max-w-max xl:!w-48 lg:w-32 sm:w-48 w-32 xl:h-48 lg:h-32 sm:h-48 h-32 xl:pr-8 sm:pr-5' 
                    width={190} height={190} alt="" />
              </div>
              <div className='hover-effect hidden 2xl:text-xl text-sm font-semibold'>
                Once the system architecture is in place, we begin development. 
                This involves writing code, testing it, and debugging it. We also integrate the system with any third-party components that it relies on.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity: 0}}
          animate={second_section_view? {opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          className='hover-group group cursor-pointer lg:col-span-1 col-span-2'
        >
          <div className='w-full'>
            <div className='flex items-center justify-center group-hover:justify-start 2xl:py-8 py-4 2xl:px-10 px-6 bg-mainBlue'>
              <Image src="/images/icon_testing.svg" className='group-hover:hidden' width={36} height={36} alt="" />
              <p className='2xl:text-3xl xs:text-2xl text-base font-semibold pl-8 text-processTitleColor'>
                Testing
              </p>
            </div>

            <div className='group-hover:transition-all group-hover:duration-1000 duration-500 ease-in-out h-0 group-hover:md:h-64 group-hover:sm:h-52 group-hover:xs:h-64 group-hover:h-[300px] flex sm:flex-row flex-col items-center justify-center bg-mainGrey group-hover:md:px-8 px-6 group-hover:md:py-8 group-hover:py-6'>
              <div>
                <Image 
                  src="/images/image_testing.svg" 
                  className='hover-effect hidden max-w-max xl:!w-48 lg:w-32 sm:w-48 w-32 xl:h-48 lg:h-32 sm:h-48 h-32 xl:pr-8 sm:pr-5'
                    width={190} height={190} alt="" />
              </div>
              <div className='hover-effect hidden 2xl:text-xl text-sm font-semibold'>
                Once we have a good understanding of the requirements, we design the system architecture. 
                This includes defining the system&apos;s components, their interactions, and the interfaces between them.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity: 0}}
          animate={second_section_view? {opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          className='hover-group group cursor-pointer lg:col-span-1 col-span-2'
        >
          <div className='w-full'>
            <div className='flex items-center justify-center group-hover:justify-start 2xl:py-8 py-4 2xl:px-10 px-6 bg-mainBlue'>
              <Image src="/images/icon_launch.svg" className='group-hover:hidden' width={36} height={36} alt="" />
              <p className='2xl:text-3xl xs:text-2xl text-base font-semibold pl-8 text-processTitleColor'>
                Launch
              </p>
            </div>

            <div className='group-hover:transition-all group-hover:duration-1000 duration-500 ease-in-out h-0 group-hover:md:h-64 group-hover:sm:h-52 group-hover:xs:h-64 group-hover:h-[300px] flex sm:flex-row flex-col items-center justify-center bg-mainGrey group-hover:md:px-8 px-6 group-hover:md:py-8 group-hover:py-6'>
              <div>
                <Image 
                  src="/images/image_launch.svg" 
                  className='hover-effect hidden max-w-max xl:!w-48 lg:w-32 sm:w-48 w-32 xl:h-48 lg:h-32 sm:h-48 h-32 xl:pr-8 sm:pr-5'
                    width={190} height={190} alt="" />
              </div>
              <div className='hover-effect hidden 2xl:text-xl text-sm font-semibold'>
                Once the system architecture is in place, we begin development. 
                This involves writing code, testing it, and debugging it. 
                We also integrate the system with any third-party components that it relies on.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity: 0}}
          animate={second_section_view? {opacity: 1} : {}}
          transition={second_section_view? { duration: 1, delay: 0.3 } : {}}
          className='flex items-center col-span-2 justify-center'
        >
          <div className='hover-group group lg:w-2/3 w-full cursor-pointer'>
            <div className='flex items-center justify-center group-hover:justify-start 2xl:py-8 py-4 2xl:px-10 px-6 bg-mainBlue'>
              <Image src="/images/icon_support.svg" className='group-hover:hidden' width={36} height={36} alt="" />
              <p className='2xl:text-3xl xs:text-2xl text-base font-semibold pl-8 text-processTitleColor'>
                Maitanance & Support
              </p>
            </div>

            <div className='group-hover:transition-all group-hover:duration-1000 duration-500 ease-in-out h-0 group-hover:md:h-64 group-hover:sm:h-52 group-hover:xs:h-64 group-hover:h-[300px] flex sm:flex-row flex-col items-center justify-center bg-mainGrey group-hover:md:px-8 px-6 group-hover:md:py-8 group-hover:py-6'>
              <div>
                <Image 
                  src="/images/image_support.svg" 
                  className='hover-effect hidden max-w-max xl:!w-48 lg:w-32 sm:w-48 w-32 xl:h-48 lg:h-32 sm:h-48 h-32 xl:pr-8 sm:pr-5' 
                    width={190} height={190} alt="" />
              </div>
              <div className='hover-effect hidden 2xl:text-xl text-sm font-semibold'>
                Once the system is deployed, we continue to provide maintenance and support to our clients. 
                This includes fixing bugs, adding new features, and helping them to troubleshoot any problems that they encounter.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div        
        className="bg-white 2xl:gap-20 gap-16 xs:pb-24 xxs:pb-12 pb-8 2xl:px-52 md:px-32 xs:px-10 px-5 relative"
        ref={third_section}
      >
        <div className='mx-auto 2xl:text-3xl md:text-2xl xs:text-xl text-lg font-semibold !leading-normal'>
          We understand that every software project is different, so we tailor our process to the specific needs of each client. 
          However, the principles outlined above are the foundation of our software development process.<br></br><br></br>
          We believe that by following these principles, we can deliver high-quality products that meet the expectations of our clients.
        
          <div className='w-full flex justify-end md:pt-20 xs:pt-12 pt-8'>
            <div>
              <p className='2xl:text-3xl md:text-2xl xs:text-xl text-lg font-semibold'>Have any questions?</p>
              <p className='md:text-base text-sm text-right xs:pt-4 pt-2'>We‘d love to hear from you.</p>
              <div className='w-full md:h-20 h-16 pt-4'>
                <Button
                  style={
                    { 
                        fontSize: '2xl:text-3xl md:text-2xl xs:text-xl text-lg', 
                        fontColor: 'text-white',
                        bgColor: 'bg-mainBlue', 
                        hoveredBgColor: 'hover:bg-mainYellow'
                    }
                  }
                  handleClick={()=>{router.push('/contactUs')}}
                >
                    {"Get in touch."}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
