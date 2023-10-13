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
    'Yes, ChatGPT No Login is a free service.',
    'No, you can use ChatGPT No Login without registering.',
    'Currently, ChatGPT No Login is only available in English.',
    "ChatGPT is designed to be highly accurate, but it's not perfect. Always verify any critical information.",
    'We take data security seriously and employ various measures to protect your information.',
    'You can reach out to us via our Contact Us page to report any bugs or issues.',
    'Please refer to our Terms of Service for information on commercial usage.',
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
