import logo from '../assets/logo-text.png'
import { useState } from 'react'

const nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-white px-4 py-4 shadow-md lg:px-8">
            <div className="container relative mx-auto flex items-center justify-between">
                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded border border-gray-200 lg:hidden"
                >
                    <span className="block h-0.5 w-5 bg-gray-800" />
                    <span className="block h-0.5 w-5 bg-gray-800" />
                    <span className="block h-0.5 w-5 bg-gray-800" />
                </button>

                <a href="#Home" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
                    <img className="w-32 lg:w-auto" src={logo} alt="DevStack home" />
                </a>

                <ul className="hidden items-center gap-4 lg:flex">
                    <li><a href="#Home" className="text-pink-500">Home</a></li>
                    <li><a href="#technologies">Technologies</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="text-right text-sm lg:text-base">
                    <a href="#sign-in" >Sign In</a>
                    <a href="#sign-up" className="ml-2 rounded-full border border-pink-500 bg-pink-600 px-3 py-2 text-white lg:px-4">Sign Up</a>
                </div>

                {isMenuOpen && (
                    <ul className="absolute left-0 top-14 z-10 flex w-48 flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-lg lg:hidden">
                        <li><a href="#Home" className="text-pink-500">Home</a></li>
                        <li><a href="#technologies">Technologies</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default nav;