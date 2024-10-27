import Header from "../components/header";
import Footer from "../components/footer";
import Script from 'next/script'

const awesomeVideo = 'https://youtu.be/NZJtHQS0cns';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-5 min-h-[85vh]">

        {/*Project 1*/}
        <div data-snack-id="@hleroy360/final-todos" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light"
          className="overflow-hidden bg-[#fbfcfd] border-solid border-black border-2 p-5 rounded-md h-[80vh] w-full"></div>

        {/*Project 2 - Needs to update*/}
        <div data-snack-id="@hleroy360/final-lightcone-calculator" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light"
          className="overflow-hidden bg-[#fbfcfd] border-solid border-black border-2 p-5 rounded-md h-[80vh] w-full"></div>
        <Script async src="https://snack.expo.dev/embed.js" />

        {/*Project 3 - Needs to get working*/}
        <video src={awesomeVideo} />

        <div className="justify-items-center min-h-[70vh] grid grid-cols-[2fr,1fr] gap-6">
          <article className="w-full p-5 bg-cyan-500/50">
            <h1>Helix LeRoy&apos;s Portfolio</h1>

          </article>
          <aside className="w-full p-5 bg-blue-500/50">
            <p>Aside content</p>
          </aside>
        </div>
      </main >
      <Footer />
    </>
  );
}

