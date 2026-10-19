function Experience() {
  return (
    <section className="bg-zinc-900/90 p-7 rounded-2xl border-2 border-rose-950 hover:border-rose-600/80 shadow-lg shadow-black/60 transition-all duration-300 hover:scale-[1.005] space-y-6">
      <h2 className="text-2xl font-serif font-bold text-rose-500 tracking-widest border-b border-rose-900/60 pb-2 flex items-center gap-2">
        <span>🕷️</span> Key Skills & Cyber Security
      </h2>

      {/* Technical Skills */}
      <div>
        <h3 className="font-serif font-bold text-rose-500 text-xs uppercase tracking-widest mb-3">
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {['Python', 'C# / .NET (OOP)', 'HTML5'].map((skill) => (
            <span 
              key={skill}
              className="bg-rose-950/80 text-rose-200 border border-rose-700/60 font-serif text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md hover:scale-105 hover:bg-rose-900 transition-all cursor-default"
            >
              ✝️ {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {['Git & GitHub', 'Linux Basics', 'AWS (Cloud Security)'].map((tool) => (
            <span 
              key={tool}
              className="bg-zinc-950 text-zinc-300 border border-zinc-800 text-xs font-mono px-3.5 py-1.5 rounded-xl hover:border-rose-800 hover:text-rose-400 hover:scale-105 transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Information Security */}
      <div>
        <h3 className="font-serif font-bold text-rose-500 text-xs uppercase tracking-widest mb-3">
          Information Security & Standards
        </h3>
        <ul className="space-y-2">
          <li className="p-3 bg-zinc-950/80 rounded-xl border-l-4 border-rose-600 text-xs text-zinc-300 font-mono hover:translate-x-1 transition-transform">
            Conducted a simulated security audit to check system safety using <strong className="text-rose-400">ISO/IEC 27001</strong>.
          </li>
          <li className="p-3 bg-zinc-950/80 rounded-xl border-l-4 border-rose-600 text-xs text-zinc-300 font-mono hover:translate-x-1 transition-transform">
            Identification of potential cyberthreats and system vulnerabilities.
          </li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="font-serif font-bold text-rose-500 text-xs uppercase tracking-widest mb-3">
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Communication Skills', 'Attentive to Details', 'Adaptability'].map((soft) => (
            <span 
              key={soft}
              className="bg-purple-950/60 text-purple-300 border border-purple-800/60 text-xs font-serif font-semibold px-3 py-1.5 rounded-xl hover:bg-purple-900/80 hover:scale-105 transition-all cursor-default"
            >
              🖤 {soft}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;