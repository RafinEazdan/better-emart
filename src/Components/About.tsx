export default function About() {
    return (
        <section className="flex items-center justify-center gap-8 p-8 bg-gray-50">
        <img src="logo.png" alt="EduHive Logo" className="w-64 h-auto rounded-md shadow-md"/>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About EduHive</h2>
          <p className="text-gray-700 max-w-xl text-lg">
            EduHive is a modern learning platform designed to revolutionize education through
            community-driven collaboration and smart technology. Whether you’re a student, teacher,
            or lifelong learner, EduHive brings together powerful tools and engaging resources to make
            learning more efficient, interactive, and enjoyable.
          </p>
        </div>
      </section>
    );
  }