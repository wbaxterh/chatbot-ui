import React from 'react';

import AppNavbar from '@/components/AppNavbar';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar (You can include your existing navbar here) */}
      <AppNavbar />

      {/* Main Content */}
      <main className="flex-grow p-10">
        <section className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>

          <div className="bg-dark-green text-white rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-lg">
              We are a team of independent developers and fans of ChatGPT. Our
              mission is to make this powerful chatbot technology more
              accessible to users like you.
            </p>
          </div>

          <div className="bg-light-green text-white rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Purpose</h3>
            <p className="text-lg">
              We believe that everyone should have the opportunity to experience
              the capabilities of ChatGPT without the hassle of logging in or
              going through complicated setups. That&apos;s why we created
              ChatGPT No Login.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Disclaimer</h3>
            <p className="text-lg">
              We are not associated with OpenAI. We are independent developers
              committed to creating easy-to-use software that enhances your
              ChatGPT experience.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">We&apos;d Love to Hear From You!</p>
          <p className="text-lg">
            Have feedback? Reach out to us at
            <a
              href="mailto:info@chatgptnologin.com"
              className="text-light-green font-semibold"
            >
              info@chatgptnologin.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
