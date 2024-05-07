import React, { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div id="about" className="bg-gray-50 min-h-screen flex items-center md:px-10 px-5 w-full overflow-hidden">
      <div className="flex items-center justify-between" data-aos="fade-up">
        <div
          className="absolute md:bottom-0 md:top-[50%] md:w-[30%] md:h-72 w-[50%] h-[25%] top-[40%]  bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"
          data-aos="fade-left"
        ></div>
        <div className="md:flex md:items-center md:justify-around">
        <img className="w-[90%] md:w-[30%] animate-phone" src="Iphone.png" alt="" />
        <div className="w-full max-w-[700px]">
          <div className="text-[#1e2238]">
            <h1
              className="font-Sara mb-3 text-5xl lg:text-7xl font-bold"
              data-aos="fade-right"
            >
              О нас
            </h1> 
            <h3 className="font-Dsc" data-aos="fade-left">
              Используйте уникальные возможности дополненной реальности (AR) для
              проекции виртуальных объектов в реальное пространство. Наше
              приложение для мобильных телефонов позволяет вам создавать
              захватывающие AR проекции, превращая ваше устройство в мощный
              инструмент для визуализации и взаимодействия с виртуальными
              элементами. Погрузитесь в удивительный мир AR Projection прямо
              сейчас!
            </h3>
            </div>
            <div data-aos="fade-up">
              <div className="mt-3">
                <a href="https://t.me/ar_projection">
                <button className="button font-semibold">
                  Установить <MdKeyboardArrowRight className="mt-1" size={20} />
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
