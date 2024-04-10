import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import AppFooter from '@/components/AppFooter';
import AppNavbar from '@/components/AppNavbar';

const posts = [
  {
    id: 'using-chatgpt-for-morning-routine',
    title: 'Using ChatGPT to Create a Morning Routine',
    author: 'Evan Reed',
    date: 'October 20, 2023',
    image: '/bgHeader.png',
  },
  {
    id: 'streamlining-web-dev-with-chatgpt',
    title: "Streamlining Web Development with ChatGPT: A Developer's Companion",
    author: 'Evan Reed',
    date: 'January 20, 2024', // You can adjust the date as needed
    image: '/blog/bgHeaderWebDev.png', // Replace with your preferred image path
  },
  {
    id: 'using-chatgpt-for-cooking-tasks',
    title: 'Enhancing Your Kitchen Experience with ChatGPT: A Recipe Guide',
    author: 'Lia Harper',
    date: 'March 23, 2024', // You can adjust the date as needed
    image: '/blog/kitchen.webp', // Replace with your preferred image path
  },
  {
    id: 'fun-kids-activities',
    title: 'Fun and Educational Activities for Kids with ChatGPT',
    author: 'Lia Harper',
    date: 'April 3, 2024', // You can adjust the date as needed
    image: '/blog/child-coloring-creative-activity.webp', // Replace with your preferred image path
  },
  {
    id: 'mastering-algebra-with-chatgpt',
    title: 'Mastering Algebra with ChatGPT',
    author: 'Evan Reed',
    date: 'April 10, 2024', // You can adjust the date as needed
    image: '/blog/person-writing-algebra.webp', // Replace with your preferred image path
  },
  // Add more posts here
];

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog - ChatGPT No Login</title>
        <meta
          name="description"
          content="Blog covering topics about ChatGPT No Login"
        />
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <AppNavbar />
        <main className="flex-grow p-10">
          <section className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/posts/${post.id}`}>
                  <div className="bg-dark-green rounded-lg p-4 cursor-pointer">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-semibold mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm">
                      By {post.author} on {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <AppFooter />
      </div>
    </>
  );
};

export default Blog;
