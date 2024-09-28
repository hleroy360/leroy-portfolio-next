export default function Header() {
  return (
    <>
    <header className="grid grid-cols-2 gap-12 items-center justify-center w-full h-[10vh] bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="flex mx-auto gap-12">Helix LeRoy&apos;s Portfolio</h1>
        <ul className="flex items-center gap-12">
          <li className="hover:underline hover:underline-offset-4"><a href="/">Home</a></li>
          <li className="hover:underline hover:underline-offset-4"><a href="/">Projects</a></li>
          <li className="hover:underline hover:underline-offset-4"><a href="/">Resume</a></li>
        </ul>
    </header>
    </>
  );
}

