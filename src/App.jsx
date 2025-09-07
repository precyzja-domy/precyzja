export default function App() {
  return (
    <div className="bg-gray-950">
      <section
        className="min-h-[70vh] bg-left bg-cover bg-no-repeat bg-gray-950 text-gray-200 flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/2024-10-22.png')" }}
      >
        <h1 className="text-5xl font-bold text-orange-600 mb-4">PRECYZJA</h1>
        <h2 className="text-2xl mb-6">Budownictwo | Geodezja</h2>
        {/*<p className="max-w-2xl text-lg text-gray-400">
          Profesjonalne usługi geodezyjne i budowlane. Precyzja, jakość i
          doświadczenie na każdym etapie inwestycji.
        </p>*/}
      </section>
      <section className="min-h-[30vh] bg-gray-900 text-gray-200 flex flex-col items-center justify-center px-6 py-12">
        <h3 className="text-3xl font-bold text-orange-500 mb-4">Kontakt</h3>
        <div className="space-y-2 text-center">
          <p className="text-xl font-semibold">PRECYZJA</p>
          <p className="text-lg">Witold Płoskonka | Teresa Grochot-Płoskonka</p>
          <div className="mt-6 space-y-2">
            <p>E-mail: precyzja.geodezja@gmail.com</p>
            <p>Telefon: +48 501 480 466</p>
            <p>Adres: Wielicka 103/I p, 32-003 Podłęże</p>
            <br />
          </div>
          <div className="mt-6 space-y-2 text-gray-400">
            <p className="text-xl font-semibold">Godziny otwarcia:</p>
            <p>poniedziałek: 8:00-16:00</p>
            <p>wtorek: 8:00-15:30</p>
            <p>środa: 8:00-15:30</p>
            <p>czwartek: 8:00-15:30</p>
            <p>piątek: 8:00-15:30</p>
            <p>sobota, niedziela: Zamknięte</p>
          </div>
        </div>
      </section>
    </div>
  );
}
