import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-36 flex items-center justify-center px-6
  bg-gradient-to-br from-black via-gray-950 to-cyan-950/20">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
  <span className="text-cyan-400">Niranjan</span> Smitha
</h1>

          <p className="text-lg md:text-2xl text-gray-400">
            Software Engineer · Algorithms · Finance ·{" "}
            <span className="whitespace-nowrap text-blue-400">IIT Bombay</span>
          </p>

        </div>

        {/* RIGHT: High-quality Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={800}
            height={800}
            priority
            className="
                w-64 h-64 md:w-80 md:h-80
                object-cover
                rounded-2xl
                border border-cyan-400/40
                shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "

          />
        </div>

      </div>
    </section>
  );
}
