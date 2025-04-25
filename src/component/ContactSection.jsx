import React from 'react'
import { FaEnvelope } from "react-icons/fa";

const ContactSection = ({ form, handleChange, handleSubmit, loading, feedback }) => {
  return (
    <>
      <section
        className="max-w-md mx-auto relative overflow-hidden z-10 p-8 m-6 bg-gray-800 shadow-black  border-3 border-purple-600 rounded-2xl shadow-2xl before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" for="name">Your Name</label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" for="email">Email Address</label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" for="message">Message</label>
            <textarea
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              rows="3"
              name="message" value={form.message} onChange={handleChange} placeholder="Your Message"
              id="message"
            ></textarea>
          </div>

          <div class="flex justify-end">
            <button
              className={`bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80 ${loading ? "cursor-not-allowed opacity-50" : ""}`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        {feedback && (
          <div className={`mt-4 ${feedback.includes("success") ? "text-green-500" : "text-red-500"}`}>
            {feedback}
          </div>
        )}
      </section>

    </>
  )
}

export default ContactSection
