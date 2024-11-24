import Header from "./components/header";
import Footer from "./components/footer";
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-5 min-h-[85vh]"/*className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]"*/>


        <div className="justify-items-center min-h-[70vh] grid grid-cols-[2fr,1fr] gap-6">
          <article className="w-full p-5 bg-cyan-500/50">
            <p>Hello, I am Helix LeRoy!</p>
            <br />
            <p>I have a Bachelor's degree in Information Technology with a concentration in Software Development from UNH.</p>
            <hr />
            <h2>Previous Internships</h2>
            <ul>
              <li>
                <p>Walkin' Pets</p>
                <a href="https://walkinpets.com/">
                  <img src="https://walkinpets.com/cdn/shop/files/WP_PrimaryLogo_FullColor_NoTagline_RGB_72dpi.png?v=1730230554&width=600" width="200px" alt="Walkin' Pets Logo" />
                </a>
              </li>
              <li>
                <p>Canyon Components</p>
                <a href="https://www.canyoncomponents.com/">
                  <img src="https://www.canyoncomponents.com/_next/image?url=https%3A%2F%2Fcancomp.nyc3.cdn.digitaloceanspaces.com%2FPub%2Fimg%2Fgrphx%2FLogo%2FCanyon%2520Components%2520Official%2520Logo.png&w=256&q=75" width="200px" alt="Canyon Components Logo" />
                </a>
              </li>
            </ul>
            <hr />
            <p>I know HTML, CSS, Tailwind, JavaScript, Typescript, jQuery, React Native, NextJS,  Python, SQL</p>
            <p>I've worked with Microsoft Office, PhotoShop, GitHub, Visual Studio Code, Expo, Vercel, WordPress, Builder.IO, NetSuite, In8Suite MySQL</p>
          </article>
          <aside className="w-full p-5 bg-blue-500/50">

            <h2>Languages</h2>
            <div className="grid grid-cols-2 gap-2 m-1">
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img src="" width="200px" alt="Canyon Components Logo" />
                  <figcaption>HTML 5</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img src="" width="200px" alt="Canyon Components Logo" />
                  <figcaption>CSS 3</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img src="" width="200px" alt="Canyon Components Logo" />
                  <figcaption>JavaScript</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img src="" width="200px" alt="Canyon Components Logo" />
                  <figcaption>Python</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img src="" width="200px" alt="Canyon Components Logo" />
                  <figcaption>SQL</figcaption>
                </figure>
              </a>
            </div>
            <h3>Libraries</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img  width="200px" alt="Canyon Components Logo" />
                  <figcaption>Tailwind</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img src="" width="200px" alt="Canyon Components Logo" />
                  <figcaption>jQuery</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img src="" width="200px" alt="Canyon Components Logo" />
                  <figcaption>TypeScript</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img src="https://www.canyoncomponents.com/_next/image?url=https%3A%2F%2Fcancomp.nyc3.cdn.digitaloceanspaces.com%2FPub%2Fimg%2Fgrphx%2FLogo%2FCanyon%2520Components%2520Official%2520Logo.png&w=256&q=75" width="200px" alt="Canyon Components Logo" />
                  <figcaption>NextJS</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img src="https://www.canyoncomponents.com/_next/image?url=https%3A%2F%2Fcancomp.nyc3.cdn.digitaloceanspaces.com%2FPub%2Fimg%2Fgrphx%2FLogo%2FCanyon%2520Components%2520Official%2520Logo.png&w=256&q=75" width="200px" alt="Canyon Components Logo" />
                  <figcaption>React Native</figcaption>
                </figure>
              </a>
              <a href="/">
                <figure className="bg-white rounded-lg p-1">
                  <img src="https://www.canyoncomponents.com/_next/image?url=https%3A%2F%2Fcancomp.nyc3.cdn.digitaloceanspaces.com%2FPub%2Fimg%2Fgrphx%2FLogo%2FCanyon%2520Components%2520Official%2520Logo.png&w=256&q=75" width="200px" alt="Canyon Components Logo" />
                  <figcaption>PyGame</figcaption>
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

