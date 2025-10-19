export default function App() {
  return (
    <div className="bg-gray-950 pt-16 md:pt-16">
      {/* Hero Section */}
      <section
        className="relative min-h-[35vh] md:min-h-[45vh] bg-center bg-cover bg-no-repeat flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/2024-10-22.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-900 text-gray-200 flex flex-col items-center justify-center px-6 py-12">
        <h2
          className="text-5xl font-bold text-orange-600 mb-4 font-ubuntuMono tracking-widest"
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }}
        >
          PRECYZJA
        </h2>

        <h3
          className="text-2xl mb-6"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.9)" }}
        >
          Geodezja | Budownictwo
        </h3>

        {/* Address */}
        <div className=" text-center">
          <p>Telefon: +48 12 2818450</p>
          <p>Adres: Wielicka 103/I p, 32-003 Podłęże</p>
        </div>

        <h4 className="mt-12 text-3xl font-bold text-orange-500 mb-8 font-ubuntuMono">
          Kontakt
        </h4>

        {/* Two-column contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl mx-auto text-center">
          <div className="space-y-2">
            <h5 className="text-2xl font-semibold text-orange-400 font-ubuntuMono">
              Geodezja
            </h5>
            <p className="text-lg">Teresa Grochot-Płoskonka</p>
            <div className="mt-4 space-y-2">
              <p>E-mail: precyzja.geodezja@gmail.com</p>
              <p>Telefon: +48 501 480 466</p>
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="text-2xl font-semibold text-orange-400 font-ubuntuMono">
              Budownictwo
            </h5>
            <p className="text-lg">Witold Płoskonka</p>
            <div className="mt-4 space-y-2">
              <p>E-mail: precyzja@g.pl</p>
              <p>Telefon: +48 604 942 645</p>
            </div>
          </div>
        </div>

        {/* Opening hours */}
        <div className="mt-10 space-y-2 text-gray-400 text-center">
          <p className="text-xl font-semibold">Godziny otwarcia:</p>
          <p>poniedziałek: 8:00-16:00</p>
          <p>wtorek: 8:00-15:30</p>
          <p>środa: 8:00-15:30</p>
          <p>czwartek: 8:00-15:30</p>
          <p>piątek: 8:00-15:00</p>
          <p>sobota, niedziela: Zamknięte</p>
        </div>
      </section>
    </div>
  );
}
