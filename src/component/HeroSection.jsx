import React from 'react'
import Resume from '../assets/RESUME.pdf'
import Av from '../assets/Raj_AV.png'


const HeroSection = () => {
  return (
    <>
      <section className="min-h-0 flex flex-col justify-center items-center text-center p-6">
      <img
        src={Av}
        alt="Raj Pawar"
        className="w-60 h-60 p-1 shadow-black  bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 rounded-2xl mb-6 shadow-xl border-4 border-purple-600 backdrop-blur-sm"
      />
        <h1 className="text-5xl font-bold text-gradient-to-r from-purple-600 via-purple-400 to-blue-500">Raj Pawar</h1>
        <p className="text-xl mt-4">Fullstack Developer</p>
        <div className="mt-6 space-x-4">
          <a
            href={Resume}
            className="border-2 bg-gradient-to-r shadow-black shadow-lg from-purple-600 via-purple-400 to-blue-500 px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Download Resume
          </a>
          <a
            href="#projects"
            className="border-2 border-purple-600  px-4 py-2 shadow-black shadow-lg rounded-lg hover:bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 transition">
            View Projects
          </a>
        </div>
      </section>
    </>
  )
}

export default HeroSection
