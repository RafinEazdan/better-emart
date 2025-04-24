export default function Features() {
    const features = [
      { title: 'Qualified Teacher', desc: 'We have a team of highly educated and experienced Teachers', icon: '⚡' },
      { title: 'Online Exam', desc: 'We offer best possible questions on each topics', icon: '📄' },
      { title: 'Proper Guidline', desc: "We ensure each student's guidline thoroughly ", icon: '📈' },
      { title: '24/7 Support', desc: 'QNA Teachers are always here for you.', icon: '💬' },
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