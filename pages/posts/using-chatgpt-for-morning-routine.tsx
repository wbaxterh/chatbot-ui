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
          <p className="text-lg mb-4">
            Morning routines are essential for a productive day, especially when
            you have a busy schedule. But planning a morning routine can be
            challenging. That's where ChatGPT comes in.
          </p>
          {/* Add more content here */}
        </section>
      </main>
      <AppFooter />
    </div>
  );
};

export default UsingChatGPTForMorningRoutine;
