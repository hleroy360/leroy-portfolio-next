import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Script from 'next/script'

export default function Home() {
  return (
    <>
        <Header />
        <main className="max-w-5xl mx-auto p-5 min-h-[85vh]"/*className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]"*/>
      

          <div className="justify-items-center min-h-[70vh] grid grid-cols-[2fr,1fr] gap-6">
            <article className="w-full p-5 bg-cyan-500/50">
              <h1>Helix LeRoy&apos;s Portfolio</h1>

            </article>
            <aside className="w-full p-5 bg-blue-500/50">
              <p>Aside content</p>
            </aside>
          </div>
        </main>
        <Footer />
    </>
  );
}

