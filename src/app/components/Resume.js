export default function ResumeCTA() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      <div
        className="
          rounded-2xl
          bg-gradient-to-br from-cyan-500/10 via-cyan-400/5 to-transparent
          border border-cyan-400/30
          p-10
        "
      >
        <h3 className="text-2xl font-semibold mb-4">
          Resume
        </h3>

        <p className="text-gray-400 mb-8">
          A concise overview of my education, skills, and experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* View Resume */}
          <a
            href="/Resume.pdf"
            target="_blank"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 rounded-xl
              bg-cyan-400 text-black font-semibold
              hover:bg-cyan-300 transition
            "
          >
            👀 View Resume
          </a>

          {/* Download Resume */}
          <a
            href="/Resume.pdf"
            download
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 rounded-xl
              border border-cyan-400 text-cyan-400 font-semibold
              hover:bg-cyan-400/10 transition
            "
          >
            ⬇️ Download PDF
          </a>

        </div>
      </div>
    </section>
  );
}
