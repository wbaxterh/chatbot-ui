import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Head from 'next/head';

import AppFooter from '@/components/AppFooter';
import AppNavbar from '@/components/AppNavbar';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setMessage('Email sent successfully!');
        setIsError(false);
        //reset(); // Reset form fields after successful submission
      } else {
        setMessage('Failed to send email. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Failed to send email', error);
      setMessage('An error occurred. Please try again.');
      setIsError(true);
    }
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
          {message && (
            <div
              className={`p-4 mb-4 text-lg rounded ${
                isError ? 'bg-red-600' : 'bg-green-500'
              }`}
            >
              {message}
            </div>
          )}
          <p className="text-lg mb-8">
            Have questions or feedback? Feel free to reach out. We are always
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
                className="w-full p-2 rounded mt-1 text-black"
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
                className="w-full p-2 rounded mt-1 text-black"
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
                className="w-full p-2 rounded mt-1 h-32 text-black"
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
