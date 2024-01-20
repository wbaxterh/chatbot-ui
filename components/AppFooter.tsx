import Link from 'next/link';

const AppFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto text-center">
        <div className="space-x-4">
          <Link href="/privacy-policy">
            <span className="text-light-green">Privacy Policy</span>
          </Link>
          <Link href="/contact-us">
            <span className="text-light-green">Contact Us</span>
          </Link>
        </div>
        <p className="text-lg mt-2">
          © 2024 ChatGPT No Login. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
