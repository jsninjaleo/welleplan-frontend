'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AnimationBlueBrand() {
    return (
        <div className='relative h-full w-full'>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
              transition={{ repeat: Infinity , duration: 2 }}
            >
                <Image src="/images/logo_seg1_blue.svg" className='absolute bottom-0 right-[269px] 2xl:inline hidden' width={353} height={81} alt="" />
                <Image src="/images/logo_seg1_blue.svg" className='absolute bottom-0 right-[215px] 2xl:hidden inline' width={282} height={65} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 0.4 }}
            >
                <Image src="/images/logo_seg2_blue.svg" className='absolute bottom-0 right-[188px] 2xl:inline hidden' width={200} height={99} alt="" />
                <Image src="/images/logo_seg2_blue.svg" className='absolute bottom-0 right-[150px] 2xl:hidden inline' width={160} height={80} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 0.75 }}
            >
                <Image src="/images/logo_seg3_blue.svg" className='absolute bottom-0 right-0 2xl:inline hidden' width={245} height={141} alt="" />
                <Image src="/images/logo_seg3_blue.svg" className='absolute bottom-0 right-0 2xl:hidden inline' width={196} height={113} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.1 }}
            >
                <Image src="/images/logo_seg4_blue.svg" className='absolute bottom-[108px] right-0 2xl:inline hidden' width={174} height={131} alt="" />
                <Image src="/images/logo_seg4_blue.svg" className='absolute bottom-[87px] right-0 2xl:hidden inline' width={139} height={105} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.45 }}
            >
                <Image src="/images/logo_seg5_blue.svg" className='absolute bottom-[160px] right-0 2xl:inline hidden' width={141} height={221} alt="" />
                <Image src="/images/logo_seg5_blue.svg" className='absolute bottom-[128px] right-0 2xl:hidden inline' width={113} height={177} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.8 }}
            >
                <Image src="/images/logo_seg6_blue.svg" className='absolute bottom-[94px] right-[163px] 2xl:inline hidden' width={70} height={44} alt="" />
                <Image src="/images/logo_seg6_blue.svg" className='absolute bottom-[75px] right-[130px] 2xl:hidden inline' width={56} height={35} alt="" />
            </motion.div>
        </div>
    )
}