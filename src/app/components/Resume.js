export default function Resume() {
  return (
    <section id="resume" className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>

      <p className="text-gray-400 mb-6">
        Download my resume to learn more about my experience and skills.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        className="inline-block px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-300 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
