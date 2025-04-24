import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

// components/Hero.tsx
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">SuperProduct</h1>
      <p className="text-xl mb-6">Revolutionizing the way you manage your workflow.</p>
      <a href="#features">
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-xl hover:bg-gray-200">Learn More</button>
      </a>
      <ChevronDown className="mt-10 animate-bounce" size={32} />
    </section>
  );
}

// components/Features.tsx
export default function Features() {
  const features = [
    { title: 'Fast Integration', desc: 'Connect and deploy in minutes.', icon: '⚡' },
    { title: 'Secure by Design', desc: 'Top-tier security practices.', icon: '🔒' },
    { title: 'Scalable', desc: 'Built to grow with your needs.', icon: '📈' },
    { title: '24/7 Support', desc: 'Always here for you.', icon: '💬' },
  ];

  return (
    <section id="features" className="py-16 px-8 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feat, idx) => (
          <div key={idx} className="bg-gray-100 rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl mb-4">{feat.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
            <p>{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// components/About.tsx
export default function About() {
  return (
    <section className="py-16 px-8 bg-gray-50 text-gray-900 flex flex-col md:flex-row items-center gap-8">
      <img src="/about-illustration.svg" alt="About us" className="w-full md:w-1/2 rounded-xl" />
      <div>
        <h2 className="text-3xl font-bold mb-4">About SuperProduct</h2>
        <p>
          SuperProduct is a fictional startup dedicated to helping teams organize and
          optimize their workflows through cutting-edge technology.
        </p>
      </div>
    </section>
  );
}

// components/Contact.tsx
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

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

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>Contact: contact@superproduct.io</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:underline">Twitter</a>
        <a href="#" className="hover:underline">LinkedIn</a>
        <a href="#" className="hover:underline">GitHub</a>
      </div>
    </footer>
  );
}
