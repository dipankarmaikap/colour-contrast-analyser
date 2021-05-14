import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="max-w-lg mx-auto bg-white">
        <div className="p-1 flex space-x-1 text-sm text-gray-500">
          <img className="w-[18px]" src="/favicon/favicon-16x16.png" alt="" />
          <p>Colour Contrast Analyser (CCA)</p>
        </div>
      </div>
      <div className="max-w-lg bg-white mx-auto">
        <nav className="px-2 py-1 flex space-x-2 text-sm ">
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Edit</a>
          </Link>
          <Link href="/">
            <a>View</a>
          </Link>
          <Link href="/">
            <a>Development</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
