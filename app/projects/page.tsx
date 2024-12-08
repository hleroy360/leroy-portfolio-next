import Header from "../components/header";
import Footer from "../components/footer";
import MuxVideo from "@mux/mux-video-react";

export default function Home() {
  const headerText = "text-lg font-bold"
  const link = " underline hover:text-sky-700"
  const project = "grid gap-5 grid-cols-1 md:grid-cols-[1fr,2fr] py-5"
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-5 min-h-[85vh]">

        <div className="grid grid-cols-1 gap-6 justify-items-center min-h-[70vh] ">
          <article className="w-full p-5 bg-cyan-500/50">
            {/*Project 3 - PyGame Project*/}
            <div id="Project-3" className={project}>
              <div>
                <h3 className={headerText}>PyGame Project - Python</h3>
                <br />
                <p>A simple test game made in PyGame.</p>
                <br />
                <p className="font-bold">Features:</p>
                <ul className="list-disc pl-5">
                  <li>Rocket flips vertically and horizontally based on key pressed.</li>
                  <li>Text is printed to console when pressing &quot;Hit Me&quot; button, or changing text in text boxes.</li>
                  <li>A looping timer that resets when pressing &quot;result&quot;.</li>
                </ul>
              </div>
              <div>
                <MuxVideo
                  style={{}}
                  src="/videos/Project3.mp4"
                  metadata={{
                    video_title: 'PyGame Project',
                  }}
                  controls
                  muted
                />
              </div>
            </div>
            <hr/>

            {/*Project 1*/}
            <div id="Project-1" className={project}>
              <div className="mx-auto">
                <MuxVideo
                  style={{ maxHeight: '70vh' }}
                  src="/videos/TodoApp.mp4"
                  metadata={{
                    video_title: 'Todo App',
                  }}
                  controls
                  muted
                />
              </div>
              <div>
                <h3 className={headerText + link}>
                  <a href="https://github.com/hleroy360/ReactNative-ToDoApp.git" target="_blank">Todo App - React Native</a>
                </h3>
                <br />
                <p>A simple todo app made in React Native.</p>
                <br />
                <p className="font-bold">Features:</p>
                <ul className="list-disc pl-5">
                  <li>Add a todo with its own uuid code.</li>
                  <li>Remove todos.</li>
                  <li>Loading and textbox animations.</li>
                  <li>Get text of last submitted todo and copy to textbox.</li>
                </ul>
              </div>

            </div>
            <hr/>

            {/*Project 2 - Needs to update*/}
            <div id="Project-2" className={project}>
              <div>
                <h3 className={headerText + link}>
                  <a href="https://github.com/hleroy360/lightcone-calculator-app.git" target="_blank">Lightcone Calculator App - React Native</a>
                </h3>
                <br />
                <p>A simple calculator app made in React Native. It keeps track of the materials that are needed to level up a &quot;lightcone&quot; from the game Honkai Star Rail.</p>
              </div>
              <div>
                <MuxVideo
                  style={{ maxHeight: '70vh' }}
                  src="/videos/LightconeCalculator.mp4"
                  metadata={{
                    video_title: 'Todo App',
                  }}
                  controls
                  muted
                />
              </div>
            </div>
          </article>
        </div>

      </main >
      <Footer />
    </>
  );
}

