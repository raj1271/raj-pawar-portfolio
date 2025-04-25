import React from 'react'


const SkillsSection = () => {
  return (
    <>
      <section id="skills" className="p-6  text-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">

          {/* Frontend */}
          <div className="bg-gray-800 border-2 shadow-black  border-purple-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-lg mb-2 border-b-2 border-purple-500 pb-1">Frontend</h3>
            <ul className="space-y-1 text-sm">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-gray-800 border-2 shadow-black  border-purple-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-lg mb-2 border-b-2 border-purple-500 pb-1">Backend</h3>
            <ul className="space-y-1 text-sm">
              <li>Python</li>
              <li>Django</li>
            </ul>
          </div>

          {/* Database */}
          <div className="bg-gray-800 border-2 shadow-black  border-purple-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-lg mb-2 border-b-2 border-purple-500 pb-1">Database</h3>
            <ul className="space-y-1 text-sm">
              <li>SQL</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-gray-800 border-2 shadow-black  border-purple-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-lg mb-2 border-b-2 border-purple-500 pb-1">Tools</h3>
            <ul className="space-y-1 text-sm">
              <li>Visual Studio Code</li>
              <li>MySQL Server</li>
              <li>MySQL Workbench</li>
            </ul>
          </div>

          {/* Software */}
          <div className="bg-gray-800 border-2 shadow-black  border-purple-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="font-bold text-lg mb-2 border-b-2 border-purple-500 pb-1">Software</h3>
            <ul className="space-y-1 text-sm">
              <li>MS Excel</li>
              <li>MS Word</li>
              <li>MS PowerPoint</li>
            </ul>
          </div>

        </div>
      </section>

    </>
  )
}

export default SkillsSection
