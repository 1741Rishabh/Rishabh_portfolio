import React from 'react';
import BackgroundCircle from './BackgroundCircle';
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Link from 'next/link';
const Hero = () => {
    const [text, addtext] = useTypewriter({
        words: ['Full Stack Developer', 'Web Designer ', 'Apps Devloper', 'App Designer'],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />

            <Image
                src="/myphoto.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={100}
                className='rounded-full relative h-32 w-32 mx-auto object-cover'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-purple-600 font-bold tracking-[10px]'>Rishabh Kumar</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'><span>{text}</span>
                    <Cursor cursorColor='#D603FE' />
                </h1>
                <div className='py-3'>
                    <Link href='#about'>
                        <button className='heroButton '>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton '>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton '>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
