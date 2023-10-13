import React from 'react';

// Adjust the path based on where you place the Navbar component
import AppFooter from '../components/AppFooter';
import AppNavbar from '../components/AppNavbar';

// Adjust the path based on where you place the Footer component

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <AppNavbar />

      <main className="flex-grow p-10">
        <section className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">
            Privacy Policy for ChatGPT No Login
          </h1>

          <h2 className="text-2xl font-semibold mb-4">
            Collection of Information
          </h2>
          <p className="text-lg mb-4">
            We collect information that you provide to us directly through the
            ChatGPT No Login website. This includes information such as your
            name, email address, and any other information you choose to
            provide.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Use of Information</h2>
          <p className="text-lg mb-4">
            We may use the information we collect to provide, maintain, and
            improve the ChatGPT No Login website, to communicate with you, to
            customize your experience, and to comply with legal obligations.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Disclosure of Information
          </h2>
          <p className="text-lg mb-4">
            We may disclose your personal information to third-party service
            providers who perform services on our behalf, such as payment
            processing, data analysis, and marketing. We may also disclose your
            information if required by law or to protect our rights or the
            rights of others.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="text-lg mb-4">
            We take appropriate measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction.
            However, no security system is impenetrable, and we cannot guarantee
            the security of your information.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
          <p className="text-lg mb-4">
            You have the right to access, update, and delete the personal
            information we have about you. You may also opt-out of receiving
            promotional emails from us by following the instructions in those
            emails. When using our service, you also agree to the OpenAI ChatGPT
            terms of use.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Changes to this Policy
          </h2>
          <p className="text-lg mb-4">
            We may update this Privacy Policy from time to time. If we make any
            material changes, we will notify you by posting a notice on our
            website or by sending you an email.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">
            If you have any questions or concerns about this Privacy Policy or
            our practices, please contact us at{' '}
            <a
              href="mailto:info@chatgptnologin.com"
              className="text-light-green font-semibold"
            >
              info@chatgptnologin.com
            </a>
            .
          </p>
        </section>
      </main>

      <AppFooter />
    </div>
  );
};

export default PrivacyPolicy;
