export default function Oferta() {
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen flex flex-col items-center pt-12 px-6">
      {/* Page title */}
      <h1
        className="text-5xl font-bold text-orange-600 mb-10 font-ubuntuMono tracking-widest text-center"
        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }}
      >
        OFERTA SPRZEDAŻY
      </h1>

      {/* Oferta 1 */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-3xl w-full mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 font-ubuntuMono mb-4">
          Budynek mieszkalny – stan deweloperski
        </h2>

        <p className="text-gray-300 mb-2">
          wg projektu{" "}
          <span className="italic">ARCHON – Dom w Strelicjach (A)</span>
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Powierzchnia użytkowa:</strong> 131,05 m²
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Lokalizacja:</strong> Staniątki, gm. Niepołomice – działka
          1747 o pow. 0.0634 ha
        </p>
        <p className="text-gray-300 mb-6">
          <strong>Cena:</strong> 7800 zł / m²
        </p>

        {/* Zalaczniki */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-orange-500 mb-2 font-ubuntuMono">
            Załączniki
          </h3>
          <a
            href="/staniatki_978_prospekt.pdf"
            className="text-orange-400 hover:text-orange-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Staniątki 978 – prospekt.pdf
          </a>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-xl font-semibold text-orange-500 mb-2 font-ubuntuMono">
            Kontakt
          </h3>
          <p>Precyzja</p>
          <p>Witold Płoskonka</p>
          <p>32-003 Podłęże 103</p>
          <p>tel. 604 942 645</p>
          <p>
            email:{" "}
            <a
              href="mailto:precyzja@g.pl"
              className="text-orange-400 hover:text-orange-500"
            >
              precyzja@g.pl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
