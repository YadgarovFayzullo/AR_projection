import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out", 
      once: true, 
    });
  }, []);

  return (
    <div>
      <div id="header" className="bg-gray-50 min-h-screen flex items-center px-5 md:px-10 w-full overflow-hidden">
        <div className="relative w-full h-full">
          <div
            className="absolute bottom-0 left-[80%] md:w-[30%] md:h-[100%] bg-orange-100/100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"
            data-aos="fade-right"
          ></div>
          <div
            className="absolute bottom-0 top-[50%] md:w-[20%] h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"
            data-aos="fade-left"
          ></div>
          <img
            className="absolute -right-[50%] top-0 w-[200px] lg:-right-28 lg:bottom-0 lg:w-[500px] lg:object-contain animate-hand"
            src="robot-hand.png"
            alt="hand"
            data-aos="zoom-out"
          />
          <div className="lg:mr-[700px] text-[#1e2238] mt-16 ">
            <h1
              className="mr-24 font-Sara mb-5 font-bold text-6xl"
              data-aos="fade-up"
            >
              AR Projection
            </h1>
            <h1 className="font-Dsc" data-aos="fade-up">
              AR Projection - инновационное приложение, разработанное для
              превращения рисунков начертательной графики из книг в
              захватывающие трехмерные объекты. Это революционное решение
              позволяет перенести чтение книг на новый уровень, предоставляя
              читателям возможность взаимодействовать с виртуальными образами и
              сценами прямо с экрана мобильного устройства. Благодаря технологии
              дополненной реальности, AR Projection создает уникальные
              визуальные миры, где каждая страница книги становится живым и
              динамичным пространством истории. Пользователи могут исследовать
              детали и полностью погрузиться в увлекательный мир книги,
              превращенной в трехмерную реальность.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
