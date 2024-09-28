export default function Footer() {
  return (
    <>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full h-[10vh] bg-gradient-to-r from-cyan-500 to-blue-500">
        <ol className="flex items-center gap-12">
          <li>
            <a className="hover:underline hover:underline-offset-4"
              href="/"
              target=""
              rel="noopener noreferrer"
            >
              Link 1
            </a>
          </li>
          <li>
            <a className="hover:underline hover:underline-offset-4"
              href="/"
              target=""
              rel="noopener noreferrer"
            >
              Link 2
            </a>
          </li>
          <li>
            <a className="hover:underline hover:underline-offset-4"
              href="/"
              target=""
              rel="noopener noreferrer"
            >
              Link 3
            </a>
          </li>
        </ol>

      </footer>
    </>
  );
}

