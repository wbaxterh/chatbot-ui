/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import AppFooter from '@/components/AppFooter';
import AppNavbar from '@/components/AppNavbar';

const UsingChatGPTForDailyCookingTasks: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <AppNavbar />
      <main className="flex-grow p-10">
        <section className="container mx-auto w-3/4">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Enhancing Your Kitchen Experience with ChatGPT: A Recipe Guide
          </h1>
          <p className="text-lg mb-4">
            Cooking is both an art and a daily necessity, often requiring a fine
            balance between creativity, timing, and the practical aspects of
            meal preparation. ChatGPT can be your digital sous-chef, making the
            process smoother and more enjoyable.
          </p>
          <Image
            src="/blog/kitchen.webp"
            alt="Illustration of a person cooking in a kitchen"
            width={800}
            height={500}
            className="text-center mx-auto"
          />
          <p className="text-md mt-4 mb-4">
            Imagine having access to a vast library of recipes, along with tips
            for meal planning, grocery shopping, and even culinary advice
            tailored to your diet and taste preferences. ChatGPT offers all this
            and more, thanks to its expansive knowledge base and ability to
            process natural language inquiries.
          </p>

          <p className="text-md mb-4">
            For example, if you're unsure about what to make for dinner, you
            could ask ChatGPT, "What's a quick and healthy dinner recipe that
            includes chicken and broccoli?" ChatGPT can provide a step-by-step
            recipe, offer suggestions for side dishes, and even advise on wine
            pairings.
          </p>

          <Image
            src="/blog/kitchen2.webp"
            alt="ChatGPT interface with a cooking recipe displayed"
            width={400}
            height={300}
            className="text-center mx-auto"
          />

          <p className="text-md mb-4 mt-4">
            Beyond recipes, ChatGPT can assist with meal prep strategies to save
            time during busy weeks. It can suggest meals that can be made in
            bulk, advise on the best ways to store leftovers, and provide tips
            for reheating. It's like having a culinary consultant in your
            pocket.
          </p>
          <p className="text-md mb-4">
            The convenience of ChatGPT extends to shopping lists and meal
            planning. By telling ChatGPT your meal plans for the week, it can
            generate a comprehensive shopping list, ensuring you buy exactly
            what you need, reducing waste and saving money.
          </p>
          <Link href="/chatbot">
            <p className="bg-dark-green text-white px-6 py-3 mt-4 rounded-full text-lg text-center font-semibold">
              Explore Cooking Ideas
            </p>
          </Link>
          {/* Add more content here */}
        </section>
      </main>
      <AppFooter />
    </div>
  );
};

export default UsingChatGPTForDailyCookingTasks;
