import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  const imgClass = "mx-auto md:max-h-[70px]"
  const imgBack = "bg-white rounded-lg p-1"
  const languageRowBase = "grid gap-2 m-2"
  const subSection = "bg-white rounded-lg p-1"
  const figcaption = "text-nowrap object-bottom inline-block align-bottom text-xs"
  const header = "text-center font-bold"
  const internHeader = "pb-5 text-center text-lg"
  const internLogo = "max-h-[50px] mx-auto"

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-5 min-h-[85vh]"/*className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]"*/>
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr]  gap-6 justify-items-center min-h-[70vh] ">

          <article className="w-full p-5 bg-cyan-500/50 md:max-h-[80vh]">
            <div id="intro" className="py-1">
              <strong><h2 className="text-center text-xl">Hello, I am Helix LeRoy!</h2></strong>
              <br />
              <p>I have a Bachelor&apos;s degree in Information Technology with a concentration in Software Development from UNH.</p>
            </div>
            <hr />
            <div id="internships" className="py-5">
              <h2 className={internHeader}>Previous Internships</h2>
              <div id="walkinPetsInternship" className={languageRowBase + " grid-cols-1 md:grid-cols-2"}>
                <div className={subSection}>
                  <a href="https://walkinpets.com/">
                    <img className={internLogo} src="/images/internships/WalkinPetsLogo.png" height="160px" alt="Walkin' Pets Logo" />
                  </a>
                  <ul className="list-disc pl-5">
                    <li>Design new webpages that align with the template made by the design department.</li>
                    <li>Update existing pages on company's Wordpress website.</li>
                    <li>Communicate between different departments to accomplish goals.</li>
                    <li>Update items on NetSuite and In8sync.</li>
                    <li>Update Doofinder search bar on website.</li>

                  </ul>
                </div>
                <div id="canyonComponentsInternship" className={subSection}>
                  <a href="https://www.canyoncomponents.com/">
                    <img className={internLogo} src="/images/internships/CanyonComponentsLogo.png" height="160px" alt="Canyon Components Logo" />
                  </a>
                  <ul className="list-disc pl-5">
                    <li>Design new webpages that align with the template made by the design department.</li>
                    <li>Update existing pages on company&apos;s Wix and Builder.io websites.</li>
                    <li>Communicate between different departments to accomplish goals.</li>
                    <li>Create Typescript components that can be used on Builder.io</li>
                  </ul>
                </div>
              </div>
            </div>

            {/*<hr />
            <h2>Previous Experience</h2>
            <p>I know HTML, CSS, Tailwind, JavaScript, Typescript, jQuery, React Native, NextJS,  Python, SQL</p>
            <p>I&apos;ve worked with Microsoft Office, PhotoShop, GitHub, Visual Studio Code, Expo, Vercel, WordPress, Builder.IO, NetSuite, In8Suite MySQL</p>
          */}
            </article>

          <aside className="w-full p-2 bg-blue-500/50 md:max-h-[80vh]">
            <h2 className={header}>Languages</h2>
            <div></div>
            <div className={languageRowBase + " grid-cols-3"}>
              <a href="/">
                <figure className={imgBack} >
                  <img src="/images/languages/HTML_Logo180.png" className={imgClass} alt="Canyon Components Logo" />
                  <figcaption className={figcaption}>HTML 5</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className={imgBack}>
                  <img src="/images/languages/CSS_Logo180.png" className={imgClass} alt="Canyon Components Logo" />
                  <figcaption className={figcaption}>CSS 3</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className={imgBack + " h-[100%]"}>
                  <img src="/images/languages/JS_Logo180.png" className={imgClass + " "} alt="Canyon Components Logo" />
                  <figcaption className={figcaption}>JavaScript</figcaption>
                </figure>
              </a>
            </div>
            <div className={languageRowBase + " grid-cols-[1fr,2fr]"}>
              <a href="/">
                <figure className={imgBack + " h-[100%]"}>
                  <img src="/images/languages/Python_Logo180.png" className={imgClass} alt="Canyon Components Logo" />
                  <figcaption className={figcaption}>Python</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className={imgBack + " h-[100%]"}>
                  <img src="/images/languages/sql_Logo180.png" className={imgClass} alt="Canyon Components Logo" />
                  <figcaption className={figcaption}>SQL</figcaption>
                </figure>
              </a>
            </div>
            <div className={languageRowBase + " grid-cols-1"}>

            </div>
            <h3 className={header}>Libraries</h3>
            <div className={languageRowBase + " grid-cols-2 lg:grid-cols-3"}>
              <a href="/">
                <figure className={imgBack + " h-[100%]"}>
                  <img src="/images/languages/tailwind_Logo180.png" className={imgClass + " py-3"} alt="Canyon Components Logo" />
                  <figcaption className={figcaption}>Tailwind</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className={imgBack + " h-[100%]"}>
                  <img src="/images/languages/jquery_Logo180.png" className={imgClass} alt="Canyon Components Logo" />
                  <figcaption className={figcaption}>jQuery</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className={imgBack + " h-[100%]"}>
                  <img src="/images/languages/Typescript_Logo180.png" className={imgClass} alt="Canyon Components Logo" />
                  <figcaption className={figcaption}>TypeScript</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className={imgBack + " h-[100%]"}>
                  <img src="/images/languages/NextJS_512Logo.png" className={imgClass} alt="Canyon Components Logo" />
                  <figcaption className={figcaption}>NextJS</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className={imgBack + " h-[100%]"}>
                  <img src="/images/languages/ReactNative_Logo180.png" className={imgClass} alt="Canyon Components Logo" />
                  <figcaption className={figcaption + " text-xs"}>React Native</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className={imgBack + " h-[100%]"}>
                  <img src="/images/languages/pygame_Logo180.png" className={imgClass} alt="Canyon Components Logo" />
                  <figcaption className={figcaption}>PyGame</figcaption>
                </figure>
              </a>
            </div>


          </aside>

        </div>
      </main>
      <Footer />
    </>
  );
}

