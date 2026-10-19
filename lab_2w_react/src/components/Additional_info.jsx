function AdditionalInfo() {
  return (
    <section className="bg-zinc-900/90 p-7 rounded-2xl border-2 border-rose-950 hover:border-rose-600/80 shadow-lg shadow-black/60 transition-all duration-300 hover:scale-[1.005]">
      <h2 className="text-2xl font-serif font-bold text-rose-500 tracking-widest mb-4 border-b border-rose-900/60 pb-2 flex items-center gap-2">
        <span>📜</span> Languages & Additional Info
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-zinc-950/90 rounded-xl border border-zinc-800">
          <h3 className="font-serif font-bold text-rose-500 text-xs uppercase tracking-widest mb-2">
            Languages
          </h3>
          <ul className="space-y-2 text-xs font-mono text-zinc-300">
            <li className="flex justify-between items-center border-b border-zinc-800 pb-1">
              <span>Ukrainian</span>
              <span className="bg-rose-950 text-rose-300 border border-rose-800 px-2 py-0.5 rounded-md font-bold">Native</span>
            </li>
            <li className="flex justify-between items-center pt-1">
              <span>English</span>
              <span className="bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded-md font-bold">C1 Advanced</span>
            </li>
          </ul>
        </div>

        <div className="p-4 bg-zinc-950/90 rounded-xl border border-zinc-800">
          <h3 className="font-serif font-bold text-rose-500 text-xs uppercase tracking-widest mb-2">
            Additional Info
          </h3>
          <p className="text-xs font-mono text-zinc-400 bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
            Valid international passport 
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdditionalInfo;