import React from 'react'
import RevLogo from '../assets/logo.png'
import PetLogo from '../assets/PetProLogo.png'
import WordGame from '../assets/WordGame.png'
import VehicleRental from '../assets/VehicleRental.png'



const ProjectsSection = () => {
  return (
    <>
      <section id="projects" className="p-10  text-center text-white">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 justify-items-center">

          {/* Project 1 */}
          <div className="w-80 h-full bg-gray-800 rounded-2xl border-2 border-purple-600 shadow-black shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div className="h-40 flex items-center justify-center bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 rounded-t-lg overflow-hidden">
              <img src={RevLogo} className="h-24 w-auto object-contain" />
            </div>
            <div className="p-5 text-left flex-grow">
              <h5 className="text-xl font-semibold mb-2 text-white text-center">RevNation - Riding Gears <br></br> E-Commerce</h5>
              <p className="text-sm text-gray-200 text-center">
              A Django-based e-commerce platform for bike safety gear with custom product models, cart logic, Razorpay integration, and a rugged, responsive UI.
              </p>
            </div>
            <div className="p-5 pt-0">
              <a href="https://github.com/raj1271/RevNation" className="inline-block bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 hover:opacity-80 text-white text-xs font-bold py-2 px-5 rounded-lg uppercase tracking-wide transition">
                GitHub
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-80 h-full bg-gray-800 rounded-2xl border-2 border-purple-600 shadow-black shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div className="h-40 flex items-center justify-center bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 rounded-t-lg overflow-hidden">
              <img src={PetLogo} className="h-35 w-auto object-contain" />
            </div>
            <div className="p-5 text-left flex-grow">
              <h5 className="text-xl font-semibold mb-2 text-white text-center">PetPro - Pet Store <br></br> E-Commerce</h5>
              <p className="text-sm text-gray-200 text-center">
              A Django-powered e-commerce platform for buying pets like dogs and cats, featuring product models, user authentication, cart system, Razorpay integration, and responsive pet-themed UI.
              </p>
            </div>
            <div className="p-5 pt-0">
              <a href="https://github.com/raj1271/petpro" className="inline-block bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 hover:opacity-80 text-white text-xs font-bold py-2 px-5 rounded-lg uppercase tracking-wide transition">
                GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-80 h-full bg-gray-800 rounded-2xl border-2 border-purple-600 shadow-black shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div className="h-40 flex items-center justify-center bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 rounded-t-lg overflow-hidden">
              <img src={VehicleRental} className="h-35 w-auto object-contain" />
            </div>
            <div className="p-5 text-left flex-grow">
              <h5 className="text-xl font-semibold mb-2 text-white text-center">Vehicle Rental System <br></br> Python</h5>
              <p className="text-sm text-gray-200 text-center">
              A console-based app using OOP to browse and rent Cars, Bikes, Trucks, and Buses with detailed pricing and specs.
              </p>
            </div>
            <div className="p-5 pt-0">
              <a href="https://github.com/raj1271/VehicleRental" className="inline-block bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 hover:opacity-80 text-white text-xs font-bold py-2 px-5 rounded-lg uppercase tracking-wide transition">
                GitHub
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="w-80 h-full bg-gray-800 rounded-2xl border-2 border-purple-600 shadow-black shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div className="h-40 flex items-center justify-center bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 rounded-t-lg overflow-hidden">
              <img src={WordGame} className="h-35 w-auto object-contain" />
            </div>
            <div className="p-5 text-left flex-grow">
              <h5 className="text-xl font-semibold mb-2 text-white text-center">Word Guessing Game <br></br> Python</h5>
              <p className="text-sm text-gray-200 text-center">
              A simple console game using Python where players guess valid words from given letters. Tracks score based on correct guesses and celebrates a win with a custom message.
              </p>
            </div>
            <div className="p-5 pt-0">
              <a href="https://github.com/raj1271/WordGame" className="inline-block bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 hover:opacity-80 text-white text-xs font-bold py-2 px-5 rounded-lg uppercase tracking-wide transition">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default ProjectsSection
