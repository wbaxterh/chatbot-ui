import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import Head from 'next/head';

import AppFooter from '@/components/AppFooter';
import AppNavbar from '@/components/AppNavbar';

const FAQ: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  const questions = [
    'Can I use ChatGPT for free?',
    'Do I need to register in ChatGPT?',
    'Is ChatGPT available in different languages?',
    'How accurate is ChatGPT?',
    'Is my data secure?',
    'How do I report a bug or issue?',
    'Can I use ChatGPT for commercial purposes?',
  ];

  const answers = [
    'Absolutely! At chatgptnologin.com, we provide a free service that leverages our API keys, allowing you to interact with ChatGPT without any cost. This platform is designed to be accessible, enabling you to experience the capabilities of ChatGPT without financial barriers.',
    'No registration is necessary at chatgptnologin.com. We value your privacy and convenience, offering you direct access to ChatGPT through our user-friendly GUI. Simply visit our website and start interacting with ChatGPT right away, no sign-up required.',
    'Currently, our service at chatgptnologin.com is primarily available in English. We are actively exploring ways to incorporate multiple languages to accommodate a wider audience and provide a more inclusive experience. Stay tuned for updates as we expand our language offerings.',
    'ChatGPT at chatgptnologin.com strives to provide highly accurate responses. Our platform utilizes the latest models of ChatGPT, engineered to understand and generate responses that are contextually relevant. While it is a robust tool, we recommend users apply critical thinking for complex or sensitive queries.',
    'Ensuring the security of your data is a top priority at chatgptnologin.com. We implement stringent security measures to protect your interactions and maintain confidentiality. Our platform operates with a commitment to privacy, requiring no registration or personal data for basic use.',
    'If you encounter any technical issues or bugs while using chatgptnologin.com, please contact us through the feedback mechanism provided on our site. We are dedicated to improving your experience and will address your concerns promptly to ensure seamless service.',
    'For commercial use of ChatGPT through chatgptnologin.com, please refer to our Terms of Service. We support various business applications and can discuss custom solutions to meet your organizational needs. Contact us to learn more about our commercial licenses and partnerships.',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Head>
        <title>FAQ - ChatGPT No Login</title>
        <meta
          name="description"
          content="Frequently Asked Questions about ChatGPT No Login"
        />
      </Head>
      <AppNavbar />

      <main className="flex-grow p-10">
        <section className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-2xl font-semibold">{question}</h3>
                  {activeQuestion === index ? (
                    <FiMinus size={24} />
                  ) : (
                    <FiPlus size={24} />
                  )}
                </div>
                {activeQuestion === index && (
                  <div className="mt-4 text-lg">{answers[index]}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
};

export default FAQ;
