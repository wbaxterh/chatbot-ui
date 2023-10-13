import Link from 'next/link';

const AppNavbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-semibold text-white">
            ChatGPT No Login
          </h1>
        </Link>
        <div className="space-x-4">
          <Link href="/chatbot">
            <span className="bg-dark-green text-white px-6 py-2 rounded-full text-lg font-semibold">
              Chat
            </span>
          </Link>
          <Link href="/about">
            <span className="text-white">About</span>
          </Link>
          <Link href="/blog">
            <span className="text-white">Blog</span>
          </Link>
          <Link href="/faq">
            <span className="text-white">FAQ</span>
          </Link>
          <Link href="/contact">
            <span className="text-white">Contact Us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
