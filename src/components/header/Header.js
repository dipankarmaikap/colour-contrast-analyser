import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="max-w-lg mx-auto bg-white">
        <div className="flex justify-between items-stretch ">
          <div className="p-1 flex space-x-1 text-sm text-gray-500">
            <img className="w-[18px]" src="/favicon/favicon-16x16.png" alt="" />
            <p>Colour Contrast Analyser (CCA)</p>
          </div>
          <div className="button text-gray-500 hover:bg-red-600 hover:text-white px-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
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
