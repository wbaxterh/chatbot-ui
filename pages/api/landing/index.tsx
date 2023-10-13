import React from 'react';

import Link from 'next/link';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">ChatGPT No Login</h1>
        </div>
      </nav>

      {/* Splash Section */}
      <section className="flex-grow flex items-center justify-center text-center p-10">
        <div>
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

      {/* Footer */}
      <footer className="bg-gray-800 p-4">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            © 2023 ChatGPT No Login. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
