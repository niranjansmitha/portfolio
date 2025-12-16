export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50
      bg-gradient-to-r from-gray-950 via-black to-gray-950
      border-b border-cyan-400/40
      shadow-[0_2px_20px_rgba(34,211,238,0.1)]
    ">

      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-center">
        <div className="flex gap-12 text-lg font-medium">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                text-gray-300
                hover:text-cyan-400
                transition-colors
                relative
                after:absolute after:left-0 after:-bottom-2
                after:w-0 after:h-[2px]
                after:bg-cyan-400
                after:transition-all
                hover:after:w-full
              "
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
