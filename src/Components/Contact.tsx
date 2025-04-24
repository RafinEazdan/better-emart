'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-8 bg-white text-gray-900" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      {submitted ? (
        <p className="text-center text-green-600">Thank you! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <input type="text" placeholder="Name" required className="w-full border p-3 rounded-xl" />
          <input type="email" placeholder="Email" required className="w-full border p-3 rounded-xl" />
          <textarea placeholder="Message" required className="w-full border p-3 rounded-xl h-32" />
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700">Send</button>
        </form>
      )}
    </section>
  );
}