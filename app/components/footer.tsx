//import { Button } from '@headlessui/react'
//const buttonStyles = "rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"

export default function Footer() {
  return (
    <>
      <footer className="bottom-0 sticky h-[5vh] row-start-3 flex gap-6 flex-wrap items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <nav className="flex items-center gap-12">
          <a className="hover:underline hover:underline-offset-4"
            href="/"
            target=""
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a className="hover:underline hover:underline-offset-4"
            href="/projects"
            target=""
            rel="noopener noreferrer"
          >
            Projects
          </a>
          <a className="hover:underline hover:underline-offset-4"
            href="/resume"
            target=""
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>

      </footer>
    </>
  );
}

