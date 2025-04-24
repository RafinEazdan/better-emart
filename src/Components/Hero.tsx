import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">EduHive</h1>
      <p className="text-xl mb-6">One Step Solution for better Education</p>
      <a href="#features">
        <button className="cursor-pointer bg-white text-indigo-700 px-6 py-3 rounded-xl hover:bg-gray-200">Learn More</button>
      <ChevronDown className="ml-12 mt-10 animate-bounce" size={32} />
      </a>
    </section>
  );
}