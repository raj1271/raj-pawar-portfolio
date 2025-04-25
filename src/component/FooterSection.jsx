import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterSection = () => {
  return (
    <>
      <footer className="bg-gray-800 text-center py-6 mt-12 border-t border-gray-700">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/raj1271"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/raj-pawar-973033217/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:raj.pawar2821@gmail.com"
          className="text-white hover:text-indigo-400 text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-gray-400 text-sm">© 2025 Raj Pawar. All rights reserved.</p>
    </footer>
    </>
  )
}

export default FooterSection
