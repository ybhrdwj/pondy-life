// Hero component example
const Hero = () => {

  return (
    <div className="relative bg-cover bg-center text-center py-16 lg:py-32" style={{ backgroundImage: "url('/hero.png')" }}>
      <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white">The most trusted list of recos for pondy</h1>
      <p className="mt-2 text-base sm:text-lg lg:text-2xl text-white">Stop getting lost on Google.</p>
      <button className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-700 transition duration-300 ease-in-out">
        Share
      </button>
      
    </div>
    
  );
};

export default Hero;
