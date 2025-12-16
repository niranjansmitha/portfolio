export default function Contact() {
  return (
    <section
    id="contact"
    className="max-w-4xl mx-auto py-32 px-6 text-center scroll-mt-32
    bg-gradient-to-br from-black via-gray-950 to-cyan-950/30 rounded-3xl"
    >

      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-400 mb-12">
        Feel free to reach out for opportunities, collaborations, or discussions.
      </p>

      <div className="flex flex-col items-center gap-6 text-lg">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/niranjan-smitha-a68437225"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zM9 9h4v1.7c.6-1 1.9-2 3.9-2 4.2 0 5.1 2.8 5.1 6.4V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V21H9z"/>
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/niranjan_smitha_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.8-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/>
          </svg>
          <span>Instagram</span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:getniranjan10@gmail.com"
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span>getniranjan10@gmail.com</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+917208337225"
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.2c1.1.4 2.3.6 3.6.6a1 1 0 011 1V20a1 1 0 01-1 1C10.6 21 3 13.4 3 4a1 1 0 011-1h3.2a1 1 0 011 1c0 1.3.2 2.5.6 3.6a1 1 0 01-.2 1l-2 2.2z"/>
          </svg>
          <span>+91 72083 37225</span>
        </a>

      </div>
    </section>
  );
}
