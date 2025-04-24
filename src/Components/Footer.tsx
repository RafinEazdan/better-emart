export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>Contact: <a href="mailto:contact@eduhive.com" className="text-white hover:text-blue-400 hover:underline">contact@eduhive.com</a></p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">GitHub</a>
        </div>
      </footer>
    );
  }