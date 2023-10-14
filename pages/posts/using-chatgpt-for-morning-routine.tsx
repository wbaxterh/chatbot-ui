/* eslint-disable quotes */
import React from 'react';

import AppFooter from '@/components/AppFooter';
import AppNavbar from '@/components/AppNavbar';

const UsingChatGPTForMorningRoutine: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <AppNavbar />
      <main className="flex-grow p-10">
        <section className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Using ChatGPT to Create a Morning Routine
          </h1>
          <p className="text-md mb-4">
            Morning routines are the cornerstone of a productive day, especially
            when you're juggling a busy schedule. The challenge often lies in
            planning a routine that's both effective and realistic. That's where
            ChatGPT comes in.
          </p>
          <p className="text-md mb-4">
            ChatGPT is not just a chatbot; it's a versatile tool that can help
            you organize your thoughts and tasks. The more context you provide,
            the better it can assist you.
          </p>
          <p className="text-md mb-4">
            For instance, instead of asking, "What should I do in the morning?",
            you could ask, "What's a good morning routine for someone who has to
            be at work by 9 AM, wants to exercise, and also has to prepare
            breakfast for two kids?"{' '}
          </p>

          <p className="text-md mb-4">
            By providing specific details, ChatGPT can generate a tailored
            routine that fits your unique needs. Perhaps it will suggest waking
            up at 6 AM to fit in a quick 20-minute workout, followed by
            preparing a simple yet nutritious breakfast for the family. It might
            even throw in a tip about meal prepping the night before to save
            time. After that, it could recommend setting aside 15 minutes for
            mindfulness or quick journaling to set a positive tone for the day.
            Finally, it might suggest leaving for work at 8:15 AM to account for
            potential traffic, ensuring you arrive on time.{' '}
          </p>
          <p className="text-md mb-4">
            The beauty of ChatGPT lies in its ability to adapt its suggestions
            based on the information you provide. It takes the guesswork out of
            planning and offers actionable advice that you can implement right
            away. So, the next time you're struggling to plan your morning,
            remember that ChatGPT is just a prompt away from helping you create
            a routine that sets you up for success.{' '}
          </p>
          {/* Add more content here */}
        </section>
      </main>
      <AppFooter />
    </div>
  );
};

export default UsingChatGPTForMorningRoutine;
