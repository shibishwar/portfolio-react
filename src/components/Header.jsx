import { Bars3Icon, XMarkIcon  } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){

    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <>
            <header className="flex justify-between px-5 py-5 bg-primary">
                <a href="#" className="text-slate-100 font-extrabold font-mono">David</a>
                <nav className="hidden md:block">
                    <ul className="flex space-x-5 text-white">
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                {toggleMenu && (
                    <nav className="fixed top-0 left-0 w-screen h-screen bg-primary flex flex-col items-center justify-center z-50">
                        <button
                            onClick={() => setToggleMenu(false)}
                            className="absolute top-5 right-5 text-white"
                        >
                            <XMarkIcon className="h-6 w-6 " />
                        </button>
                        <ul className="text-white text-lg space-y-8 text-center">
                        <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
                            <li><a href="#resume" onClick={() => setToggleMenu(false)}>Resume</a></li>
                            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                        </ul>
                    </nav>
                )}
                
                <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
            </header>
            
        </>
    )
}