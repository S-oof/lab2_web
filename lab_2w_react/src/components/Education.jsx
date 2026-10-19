function Education() {
  return (
    <section className="bg-zinc-900/90 p-7 rounded-2xl border-2 border-rose-950 hover:border-rose-600/80 shadow-lg shadow-black/60 transition-all duration-300 hover:scale-[1.005]">
      <h2 className="text-2xl font-serif font-bold text-rose-500 tracking-widest mb-4 border-b border-rose-900/60 pb-2 flex items-center gap-2">
        <span>🦇</span> Education & Certifications
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-serif font-semibold text-zinc-200 text-lg">Education</h3>
          <p className="text-sm font-mono text-rose-300 bg-zinc-950/80 p-3 rounded-xl border border-rose-900/40 inline-block mt-1">
            Bachelor in Cybersecurity at Lviv Polytechnic National University (2025 - present)
          </p>
        </div>
        <div>
          <h3 className="font-serif font-bold text-rose-500 text-xs uppercase tracking-widest mb-3">
            Certifications ✝️
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['AWS Academy ', 'Internship program at SoftServe ', 'Cambridge English Level 2 Certificate in ESOL International'].map((cert, index) => (
              <li 
                key={index} 
                className="p-3 bg-zinc-950/90 rounded-xl border border-rose-950 text-xs font-mono text-zinc-300 hover:border-rose-600 hover:text-rose-300 hover:scale-105 transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <span className="text-rose-600">🖤</span> {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;