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
               <Image 
                    src="/images/logo_seg1_blue.svg" 
                    className='absolute bottom-0 2xl:right-[269px] sm:right-[215px] xs:right-[164px] right-[114px] 2xl:w-[353px] sm:w-[282px] xs:w-[210px] w-[140px]' 
                    width={353} height={81} alt="" 
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 0.4 }}
            >
                <Image 
                    src="/images/logo_seg2_blue.svg" 
                    className='absolute bottom-0 2xl:right-[188px] sm:right-[150px] xs:right-[115px] right-[77px] 2xl:w-[200px] sm:w-[160px] xs:w-[120px] w-[80px]' 
                    width={200} height={99} alt="" 
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 0.75 }}
            >
                 <Image 
                    src="/images/logo_seg3_blue.svg" 
                    className='absolute bottom-0 right-0 2xl:w-[245px] sm:w-[196px] xs:w-[150px] w-[98px]' 
                    width={245} height={141} alt="" 
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.1 }}
            >
                <Image 
                    src="/images/logo_seg4_blue.svg" 
                    className='absolute 2xl:bottom-[108px] sm:bottom-[87px] xs:bottom-[66px] bottom-[44px] right-0 2xl:w-[174px] sm:w-[139px] xs:w-[106px] w-[70px]' 
                    width={174} height={131} alt="" 
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.45 }}
            >
                <Image 
                    src="/images/logo_seg5_blue.svg" 
                    className='absolute 2xl:bottom-[160px] sm:bottom-[128px] xs:bottom-[96px] bottom-[67px] right-0 2xl:w-[141px] sm:w-[113px] xs:w-[85px] w-[55px]' 
                    width={141} height={221} alt="" 
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0.5, 1, 0.5, 0]}}
                transition={{ repeat: Infinity , duration: 2, delay: 1.8 }}
            >
                <Image 
                    src="/images/logo_seg6_blue.svg" 
                    className='absolute 2xl:bottom-[94px] sm:bottom-[75px] xs:bottom-[57px] bottom-[39px] 2xl:right-[163px] sm:right-[130px] xs:right-[100px] right-[67px] 2xl:w-[70px] sm:w-[56px] xs:w-[42px] w-[28px]' 
                    width={70} height={44} alt="" 
                />
            </motion.div>
        </div>
    )
}