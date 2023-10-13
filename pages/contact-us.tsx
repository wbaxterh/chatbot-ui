import React from 'react';
import { useForm } from 'react-hook-form';

import Head from 'next/head';

import AppFooter from '@/components/AppFooter';
import AppNavbar from '@/components/AppNavbar';

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle the form submission, like sending the data to an API
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Contact Us - ChatGPT No Login</title>
        <meta
          name="description"
          content="Contact us anytime. We're here to help!"
        />
      </Head>
      <AppNavbar />

      <main className="flex-grow p-10">
        <section className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-8">
            Have questions or feedback? Feel free to reach out. We're always
            here to help!
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">
                Name
              </label>
              <input
                id="name"
                {...register('name', { required: true })}
                className="w-full p-2 rounded mt-1"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { required: true })}
                className="w-full p-2 rounded mt-1"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">
                Message
              </label>
              <textarea
                id="message"
                {...register('message', { required: true })}
                className="w-full p-2 rounded mt-1 h-32"
              ></textarea>
              {errors.message && (
                <span className="text-red-600">Message is required</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-dark-green text-white px-6 py-2 rounded-full text-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      <AppFooter />
    </div>
  );
};

export default Contact;
