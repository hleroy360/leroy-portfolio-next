import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Script from 'next/script'
import { Document } from 'react-pdf'
import PDF from "../components/pdf";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-5 min-h-[85vh]"/*className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]"*/>
        <PDF />
      </main>
      <Footer />
    </>
  );
}

