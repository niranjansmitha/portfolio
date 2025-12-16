export default function Skills() {
  const skills = [
    "C++", "Python", "JavaScript",
    "Data Structures", "Algorithms",
    "OOP", "Git", "Linux"
  ];

  return (
    <section
      id="skills"
      className="max-w-4xl mx-auto py-20 px-6 scroll-mt-24"
    >
      <div className="h-px w-full bg-gray-800 mb-12" />

      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(skill => (
          <div
            key={skill}
            className="border border-gray-700 rounded-lg py-3 text-center hover:bg-gray-800 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
