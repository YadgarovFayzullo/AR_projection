import React, { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav className="backdrop-blur-md bg-white/50 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-2">
        {" "}
        <div className="items-center justify-between w-full md:w-auto md:order-1">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <RxCross1 className="h-6 w-6" />
              ) : (
                <CiMenuBurger className="h-6 w-6" />
              )}
            </button>
          </div>
          <ul
            className={`flex flex-col md:flex-row  ${
              isOpen ? "flex" : "hidden"
            } md:flex md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:border-0`}
          >
            <li>
              <a
                href="#header"
                className={`block py-2 px-3 text-[#1e2238] md:p-0 md:text-[#fc440c] hover:text-black transition duration-300`}
                aria-current="page"
                data-aos={isOpen ? "" : "fade-down"}
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`block py-2 px-3 text-[#1e2238] md:p-0 hover:text-[#fc440c] transition duration-300 ${
                  isOpen ? "md:hidden" : "md:text-[#1e2238]"
                }`}
                data-aos={isOpen ? "" : "fade-down"}
              >
                О нас
              </a>
            </li>
            <li>
              <a
                href="#examples"
                className={`block py-2 px-3 text-[#1e2238] md:p-0 hover:text-[#fc440c] transition duration-300 ${
                  isOpen ? "md:hidden" : "md:text-[#1e2238]"
                }`}
                data-aos={isOpen ? "" : "fade-down"}
              >
                Примеры
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-[#1e2238] md:p-0 hover:text-[#fc440c] transition duration-300 ${
                  isOpen ? "md:hidden" : "md:text-[#1e2238]"
                }`}
                data-aos={isOpen ? "" : "fade-down"}
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
