'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AnimationBrand() {
    return (
        <div className='relative h-full w-full'>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
              transition={{ repeat: Infinity , duration: 2 }}
            >
                <Image src="/images/logo_seg1.svg" className='absolute bottom-0 right-[332px]' width={436} height={99} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 0.4 }}
            >
                <Image src="/images/logo_seg2.svg" className='absolute bottom-0 right-[232px]' width={247} height={122} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 0.75 }}
            >
                <Image src="/images/logo_seg3.svg" className='absolute bottom-0 right-0' width={302} height={175} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.1 }}
            >
                <Image src="/images/logo_seg4.svg" className='absolute bottom-[134px] right-0' width={215} height={161} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.45 }}
            >
                <Image src="/images/logo_seg5.svg" className='absolute bottom-[198px] right-0' width={175} height={272} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.8 }}
            >
                <Image src="/images/logo_seg6.svg" className='absolute bottom-[118px] right-[202px]' width={87} height={54} alt="" />
            </motion.div>
        </div>
    )
}