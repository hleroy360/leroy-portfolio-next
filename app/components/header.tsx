import { Button } from '@headlessui/react'

const buttonStyles = "rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"

export default function Header() {
  return (
    <>
      <header className="top-0 sticky h-[50px] grid grid-cols-2 gap-12 items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="flex mx-auto gap-12">Helix LeRoy&apos;s Portfolio</h1>
        <nav className="flex items-center gap-12">
          <a href="/"><Button className={buttonStyles}>Home</Button></a>
          <a href="/"><Button className={buttonStyles}>Projects</Button></a>
          <a href="/"><Button className={buttonStyles}>Resume</Button></a>
        </nav>
      </header>
    </>
  );
}

