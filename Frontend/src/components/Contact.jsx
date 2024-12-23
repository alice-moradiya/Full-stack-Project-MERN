import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 flex items-center justify-center">
        <div className="mt-20 bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Contact <span className="text-green-500"> Us </span>
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We'd love to hear from you! Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter the subject"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <Link to="/"
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
