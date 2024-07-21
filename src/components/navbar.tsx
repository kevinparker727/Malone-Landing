import clsx from "clsx";
import "../index.css";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";

// import Modal from "./Modal";

export function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  const navLinks = [
    {
      title: "Our Mission",
      path: "/ourmission",
      id: 1,
    },
    {
      title: "Team",
      path: "/team",
      id: 2,
    },
    {
      title: "Services",
      path: "/services",
      id: 3,
    },
    {
      title: "Get Involved",
      path: "/getinvolved",
      id: 4,
    },
    {
      title: "Blog",
      path: "/blog",
      id: 5,
    },
  ];

  return (
    <nav className="selection:bg-beigeHover">
      <Headroom>
        <header className="w-full flex items-center">
          <section
            className={
              sideBar
                ? "hidden"
                : "max-xl:h-16 px-5 lg:px-10 bg-gradient-to-r from-stone-300 to-stone-200 from-5% max-xl:w-full w-1/2 md:h-24 flex items-center justify-between"
            }
          >
            {/* menu */}
            <HiBars3
              onClick={() => setSideBar(true)}
              className="size-7 lg:size-9 cursor-pointer xl:hidden"
            />

            {/* logo */}
            <div className="md:pr-6 xl:pl-8">
              <Link
                to={"/"}
                className="text-stone-800 text-3xl tracking-wide xl:hover:text-maloneBeige duration-300 md:font-semibold md:text-4xl"
              >
                Malone
              </Link>
            </div>
          </section>

          <section className="hidden xl:block w-1/2">
            <div className="flex justify-between items-center h-24 bg-gradient-to-l from-stone-300 to-stone-200 from-5% pr-8">
              {navLinks.map((data, index) => (
                <Link
                  to={data.path}
                  key={index}
                  className="md:font-light md:text-lg md:hover:text-maloneBeige duration-300 tracking-wide"
                >
                  {data.title}
                </Link>
              ))}
              <div>
                <Link to={"/donate"}>
                  <button className=" bg-maloneBeige hover:bg-beigeHover duration-300 rounded-md w-36 h-16 font-poppins text-sm text-white font-medium md:text-md">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </header>
      </Headroom>

      {/* Sidebar Mobile */}
      <div
        onClick={() => setSideBar(false)}
        className={clsx(
          "fixed h-full w-screen xl:hidden top-0 right-0 -translate-x-full transition-all bg-black/40 backdrop-blur-sm",
          sideBar && "translate-x-0"
        )}
      >
        <section className="text-stone-800 bg-white flex-col absolute left-0 top-0 h-screen w-56 py-8 px-6 gap-10 flex z-50">
          <div className="flex">
            <div className="flex justify-end w-full">
              <TfiClose
                onClick={() => setSideBar(false)}
                className="size-5 cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Link
              to={"/"}
              className="text-2xl md:max-xl:text-3xl tracking-wide font-poppinsxl:pl-10 font-semibold"
            >
              Malone
            </Link>
          </div>

          <div>
            {navLinks.map((data, index) => (
              <div
                key={index}
                className="flex flex-row w-full justify-center tracking-wide text-lg font-normal md:max-lg:leading-8"
              >
                <Link to={data.path} key={index} className="mt-2">
                  {data.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to={"/donate"}>
              <button className="xl:hidden bg-maloneBeige rounded-md w-32 md:max-lg:w-40 h-12 md:max-lg:h-14 font-poppins text-sm md:max-lg:text-lg text-white  my-5 tracking-wide font-medium">
                Donate Now
              </button>
            </Link>
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
