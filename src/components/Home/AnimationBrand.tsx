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
                <Image src="/images/logo_seg1.svg" className='absolute bottom-0 right-[299px]' width={392} height={90} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 0.4 }}
            >
                <Image src="/images/logo_seg2.svg" className='absolute bottom-0 right-[209px]' width={222} height={110} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 0.75 }}
            >
                <Image src="/images/logo_seg3.svg" className='absolute bottom-0 right-0' width={272} height={157} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.1 }}
            >
                <Image src="/images/logo_seg4.svg" className='absolute bottom-[120px] right-0' width={193} height={145} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.45 }}
            >
                <Image src="/images/logo_seg5.svg" className='absolute bottom-[178px] right-0' width={157} height={245} alt="" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.8 }}
            >
                <Image src="/images/logo_seg6.svg" className='absolute bottom-[106px] right-[180px]' width={78} height={49} alt="" />
            </motion.div>
        </div>
    )
}