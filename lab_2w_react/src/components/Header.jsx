function Header() {
  return (
    <header className="relative overflow-hidden bg-zinc-950 text-zinc-100 p-8 rounded-3xl border-2 border-rose-700/80 shadow-[0_0_25px_rgba(190,18,60,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(225,29,72,0.5)]">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-rose-600 text-xs tracking-[0.3em] uppercase mb-1 font-serif">
          ✝️ Gothic Cyberlolita Resume ✝️
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif tracking-widest font-bold text-rose-500 mb-3 drop-shadow-[0_2px_10px_rgba(225,29,72,0.6)]">
          Riepina Sofiia 🖤
        </h1>
        <p className="text-xs sm:text-sm font-serif tracking-wide max-w-3xl leading-relaxed bg-zinc-900/80 backdrop-blur-md p-4 rounded-2xl border border-rose-900/50 text-zinc-300 shadow-inner">
          <span className="text-rose-400 font-semibold">Date of birth:</span>14.07.2008<span className="text-rose-600 mx-1">✝</span> 
          <span className="text-rose-400 font-semibold">Nationality:</span> Ukrainian <span className="text-rose-600 mx-1">✝</span> 
          <span className="text-rose-400 font-semibold">Gender:</span> Female <span className="text-rose-600 mx-1">✝</span> 
          <span className="text-rose-400 font-semibold">Phone:</span> (+380)xxxxxxx <span className="text-rose-600 mx-1">✝</span> 
          <span className="text-rose-400 font-semibold">Email: </span>
          <a href="sofiia.riepina.kb.2025@lpnu.ua" className="underline font-medium text-rose-300 hover:text-rose-100 transition-colors">
           sofiia.riepina.kb.2025@lpnu.ua
          </a>
        </p>
      </div>
    
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-rose-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-900/30 rounded-full blur-3xl pointer-events-none"></div>
    </header>
  );
}

export default Header;