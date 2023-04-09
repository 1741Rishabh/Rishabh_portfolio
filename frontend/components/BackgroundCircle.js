import React from 'react';
import { motion } from 'framer-motion';
/* #FFD805 ==>yellow
#E84A09 ==> orange 
#D603FE ==> purple 
#0963E8 ==> blue 
#0AFF5D ==> green */
const BackgroundCircle = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{scale:[2,2,3,1,1],opacity:[0.1,0.2,0.4,0.08,0.01,1.0],borderRadius:["20%","20%","50%","10%","5%"]}} transition={{duration:2.5}} className='relative flex justify-center items-center '>
            {/* <div className='absolute border border-[#D603FE] rounded-full h-[300px] w-[300px] mt-52 animate-ping' /> */}
            <div className='absolute border border-[#D603FE] rounded-full h-[300px] w-[300px] mt-52 animate-ping' />
            <div className='absolute border border-[#D603FE] rounded-full h-[400px] w-[400px] mt-52 animate-ping ' />
          
            <div className='absolute rounded-full  border border-[#D603FE] h-[700px] w-[700px] opacity-20  mt-52 animate-ping' />
            <div className='absolute rounded-full  border border-[#D603FE] h-[750px] w-[750px] opacity-20  mt-52 animate-pulse' />
        </motion.div>
    );
}

export default BackgroundCircle;
