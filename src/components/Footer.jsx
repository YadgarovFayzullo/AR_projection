import React from "react";
import { BsTelegram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-100">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-gray-800">Быстрые ссылки</p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#header"
                  className="transition-colors duration-100 text-gray-900 hover:text-[#fc440c]"
                >
                  Главная
                </a>
                <a
                  href="#about"
                  className="transition-colors duration-100 text-gray-900 hover:text-[#fc440c]"
                >
                  О нас
                </a>
                <a
                  href="#examples"
                  className="transition-colors duration-100 text-gray-900 hover:text-[#fc440c]"
                >
                  Примеры
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Партнеры</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="https://t.me/IEandGS"
                  className=" transition-colors duration-100 text-gray-90 hover:text-[#fc440c]"
                >
                  IE&GS
                </a>
                <a
                  href="#"
                  className=" transition-colors duration-100 text-gray-90 hover:text-[#fc440c]"
                ></a>
                <a
                  href="https://www.youtube.com/@user-qn4et6rk3q"
                  className=" transition-colors duration-100 text-gray-90 hover:text-[#fc440c]"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 md:my-8" />
          <div className="flex items-center justify-between">
            <div className="flex -mx-2">
              <a
                href="#"
                className="mx-2 transition-colors text-gray-900 hover:text-[#fc440c]"
                aria-label="Instagram"
              >
                <AiFillInstagram size={20} />
              </a>
              <a
                href="https://t.me/AR_Projection"
                className="mx-2 transition-colors text-gray-900 hover:text-[#fc440c]"
                aria-label="Telegram"
              >
                <BsTelegram size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
