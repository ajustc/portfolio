import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [bgnavbar, setBgnavbar] = useState(false);
  const [togglenavbar, setToggleNavbar] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setBgnavbar(true);
    } else {
      setBgnavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const navigateScroll = (event, section) => {
    event.preventDefault();

    const element = document.getElementById(`navigate-${section}`);
    element.scrollIntoView({ behavior: "smooth" });

    setToggleNavbar(false)
  };

  return (
    <nav
      className={`navbar w-full mx-auto py-4 z-50 xl:px-40 md:px-20 px-0 transition-all fixed ${
        bgnavbar ? "bg-white/90" : ""
      }`}
    >
      <div className="flex items-center">
        <div className="w-4/12">
          <Link
            href="/"
            className="group flex items-center justify-center cursor-pointer"
          >
            <div className="w-10 h-10 bg-gray-600/70 group-hover:bg-white group-hover:text-gray-600/70 flex items-center justify-center rounded mr-4 shadow-lg text-white/90">
              J
            </div>
            Justc
          </Link>
        </div>
        <div className="md:hidden w-8/12 flex justify-end mr-10">
          {!togglenavbar ? (
            <button
              onClick={() => {
                setToggleNavbar(!togglenavbar);
                console.log(togglenavbar);
              }}
              className="bg-gray-100/50 w-10 h-10 group-hover:bg-white flex items-center justify-center rounded shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-align-justify"
              >
                <line x1="21" y1="10" x2="3" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="21" y1="18" x2="3" y2="18"></line>
              </svg>
            </button>
          ) : (
            <button
              onClick={() => {
                setToggleNavbar(false);
              }}
              className="bg-gray-100/50 w-10 h-10 group-hover:bg-white flex items-center justify-center rounded shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
        <div className="md:w-2/5 lg:w-8/12">
          <div className="flex justify-center">
            <ul
              className={`md:flex md:space-x-6 md:static md:w-0 md:flex-row transition-all absolute top-16 flex-col bg-white w-full
              ${togglenavbar ? "left-0" : "left-full"}
              `}
            >
              <li className="py-3 ml-10">
                <Link
                  href="/"
                  onClick={(event) => navigateScroll(event, "hero")}
                  id="clickhero"
                  className="bg-red px-2 py-1"
                >
                  Hero
                </Link>
              </li>
              <li className="py-3 ml-10">
                <Link
                  href="/"
                  onClick={(event) => navigateScroll(event, "tool")}
                  id="clicktool"
                  className="bg-red px-2 py-1"
                >
                  Tool
                </Link>
              </li>
              <li className="py-3 ml-10">
                <Link
                  href="/"
                  onClick={(event) => navigateScroll(event, "certificate")}
                  id="clickcertificate"
                  className="bg-red px-2 py-1"
                >
                  Certificate
                </Link>
              </li>
              <li className="py-3 ml-10">
                <Link
                  href="/"
                  onClick={(event) => navigateScroll(event, "activity")}
                  id="clickactivity"
                  className="bg-red px-2 py-1"
                >
                  Activity
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
