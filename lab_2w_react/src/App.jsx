import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Add_info from './components/Additional_info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans p-4 md:p-10 selection:bg-rose-900 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <Header />
        <main className="space-y-8">
          <Education />
          <Experience />
          <Add_info />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;