import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative bg-white border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" aria-label="Home">
              <span>
                <img
                  className="h-32 w-auto sm:h-16 hidden sm:block"
                  src="https://i.imgur.com/sx2SkH7.png"
                  alt="Custom logo"
                />
                <img
                  className="h-32 w-auto sm:h-16 sm:hidden"
                  src="https://i.imgur.com/sx2SkH7.png"
                  alt="Custom logo"
                />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={openMenu}
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10">
            <Link href="/product">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900" aria-label="Product">
                Product
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900" aria-label="About">
                About
              </a>
            </Link>
            <Link href="/portfolio">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900" aria-label="Portfolio">
                Portfolio
              </a>
            </Link>
            <Link href="/team">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900" aria-label="Team">
                Team
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900" aria-label="Contact">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {openMenu && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <img
                  className="h-8 w-auto"
                  src="https://i.imgur.com/sx2SkH7.png"
                  alt="Custom logo"
                />
                <button
                  type="button"
                  onClick={() => setOpenMenu(false)}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded={openMenu}
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/product">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" aria-label="Product">
                      <span className="ml-3 text-base font-medium text-gray-900">Product</span>
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" aria-label="About">
                      <span className="ml-3 text-base font-medium text-gray-900">About</span>
                    </a>
                  </Link>
                  <Link href="/portfolio">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" aria-label="Portfolio">
                      <span className="ml-3 text-base font-medium text-gray-900">Portfolio</span>
                    </a>
                  </Link>
                  <Link href="/team">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" aria-label="Team">
                      <span className="ml-3 text-base font-medium text-gray-900">Team</span>
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" aria-label="Contact">
                      <span className="ml-3 text-base font-medium text-gray-900">Contact</span>
                    /a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;