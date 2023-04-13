import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard'
const Experience = () => {
    return (
        <motion.div initial={{ opacity: 0 }} transition={{ duration: 1.2 }} viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }} className='h-screen  flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-transparent  bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-2xl '>Experience</h3>
            <div className='   w-full flex space-x-5 overflow-x-scroll p-10  snap-x snap-mandatory'>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
            </div>
        </motion.div>
    );
}

export default Experience;
