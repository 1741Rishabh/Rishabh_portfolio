import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
const Header = () => {
    return (
        <header className='sticky flex top-0  items-start justify-between p-5 max-w-7xl mx-auto xl:items-center z-20' >
            <motion.div initial={{x:-500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1}} className='flex flex-row item-center'>
                {/* <SocialIcon url="https://youtube.com/" fgColor='gray' bgColor='transparent' /> */}
                <SocialIcon url="https://youtube.com/" bgColor='transparent' fgColor='red' />
                <SocialIcon url="https://facebook.com/" bgColor='transparent' fgColor='blue' />
                <SocialIcon url="https://instagram.com/" bgColor='transparent' fgColor='red' />
            </motion.div>
            <motion.div initial={{x:500,opacity:0.5,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1}}  className=' flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon className='cursor-pointer' network='email' url="https://gmail.com/" fgColor='purple' bgColor='transparent' />
            <p className='uppercase hidden md:inline-flex text-sm text-purple-400'>Get in Touch</p>
            </motion.div>
        </header>
    );
}

export default Header;
