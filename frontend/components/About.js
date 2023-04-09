import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='  flex flex-col  relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className=' absolute top-24 uppercase tracking-[20px] text-transparent  bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-2xl'>About</h3>
            <motion.img
            initial={{
                x:-200,
                opacity:0,
            }}
            transition={{duration:1.2}}
            whileInView={{x:0,opacity:1}}
             src='/myphoto.png' 
            //  viewport={{once:true}}
             
             className='-mb-60 absolute md:relative top-[140px] md:top-0 block w-56 h-56 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
             />
             <div className='space-y-10 px-0 md:px-10 absolute md:relative  top-[400px] md:top-0 '>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline '>little</span> background</h4>
                <p className='text-base'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                </p>
             </div>
        </div>

    );
}

export default About;
