import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Link from 'next/link';

const AppNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-semibold text-white cursor-pointer">
            ChatGPT No Login
          </h1>
        </Link>
        <div className="lg:hidden">
          {isOpen ? (
            <FaTimes
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <FaBars className="text-white" onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
        <div
          className={`${
            isOpen
              ? 'flex flex-col space-y-4 fixed top-16 right-0 w-full bg-gray-800 text-center p-4'
              : 'hidden'
          } lg:space-y-0 lg:static lg:flex lg:space-x-4`}
        >
          <Link href="/chatbot">
            <span className="bg-dark-green text-white px-6 py-2 rounded-full text-lg font-semibold cursor-pointer">
              Chat
            </span>
          </Link>
          <Link href="/about">
            <span className="text-white cursor-pointer">About</span>
          </Link>
          <Link href="/blog">
            <span className="text-white cursor-pointer">Blog</span>
          </Link>
          <Link href="/faq">
            <span className="text-white cursor-pointer">FAQ</span>
          </Link>
          <Link href="/contact">
            <span className="text-white cursor-pointer">Contact Us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
