import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import AppFooter from '@/components/AppFooter';
import AppNavbar from '@/components/AppNavbar';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      {/* <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">ChatGPT No Login</h1>
        </div>
      </nav> */}
      <AppNavbar />

      {/* Splash Section */}
      <section className="flex-grow flex items-center justify-center text-center p-10 bg-header">
        <div className="bg-overlay p-10">
          <h2 className="text-4xl font-bold mb-4">
            Chat with ChatGPT, No Login Required!
          </h2>
          <p className="text-xl mb-8">
            Experience the power of AI chatbots without any hassle.
          </p>
          <Link href="/chatbot">
            <p className="bg-dark-green text-white px-6 py-3 rounded-full text-lg font-semibold">
              Go to Chatbot
            </p>
          </Link>
        </div>
      </section>

      {/* Information Sections */}
      <section className="bg-gray-800 p-10">
        <h3 className="text-2xl font-semibold mb-4">About the Project</h3>
        <p className="text-lg mb-4">
          This project aims to provide a seamless experience for users to
          interact with ChatGPT without the need for logging in.
        </p>
        <Link href="#about">
          <p className="text-light-green font-semibold">Learn More</p>
        </Link>
      </section>
      {/* How to Use Section */}
      <section className="bg-gray-900 p-10">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">How to Use</h3>
            <p className="text-lg mb-4">
              Using ChatGPT No Login is simple and straightforward. Just follow
              these steps:
            </p>
            <ol className="list-decimal list-inside text-lg mb-4">
              <li>
                Click the "Go to Chatbot" button to open the chat interface.
              </li>
              <li>Type your question or prompt in the input field.</li>
              <li>Press Enter or click the "Send" button.</li>
              <li>Wait for the ChatGPT to generate a response.</li>
            </ol>
            <h4 className="text-xl font-semibold mb-2">Example Prompts:</h4>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>"Tell me a joke."</li>
              <li>"What is the meaning of life?"</li>
              <li>"How does photosynthesis work?"</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">Screenshot:</h4>
              {/* Replace the placeholder with your actual screenshot */}
              <Image
                src="/screenshot.png"
                alt="ChatGPT Screenshot"
                width={500}
                height={300}
              />
              <Link href="/chatbot">
                <p className="bg-dark-green text-white px-6 py-3 mt-4 rounded-full text-lg text-center font-semibold">
                  Go to Chatbot
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <AppFooter />
    </div>
  );
};

export default Landing;
