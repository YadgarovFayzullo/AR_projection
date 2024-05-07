import React, { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineFolderArrowDown } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Download() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <div
      id="examples"
      className="bg-gray-50 min-h-screen flex items-center px-5 md:px-10 w-full overflow-hidden"
    >
      <div className="flex justify-between" data-aos="fade-up">
        <div className="md:flex md:items-center md:justify-around">
          <div className="flex flex-wrap md:gap-32">
            <div className="w-full max-w-[700px]">
              <div className="text-[#1e2238]">
                <h1
                  className="font-Sara mb-3 text-5xl lg:text-7xl font-bold"
                  data-aos="fade-right"
                >
                  Примеры
                </h1>
                <h3 className="font-Dsc" data-aos="fade-left">
                  Взгляните на потрясающие возможности AR Projection через наши
                  вдохновляющие примеры использования. Наши демонстрации покажут
                  вам, как AR Projection трансформирует статичные изображения в
                  захватывающие трехмерные сцены, наполняя их жизнью и
                  динамикой. Исследуйте возможности взаимодействия с
                  виртуальными объектами и окунитесь в уникальные визуальные
                  миры прямо из вашего мобильного устройства.
                </h3>
              </div>
              <div data-aos="fade-up">
                <div className="mt-3">
                  <a target="blank" href="/AR-qr.pdf">
                    <button className="button font-semibold gap-2">
                      Скачать
                      <HiOutlineFolderArrowDown className="mt-1" size={20} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <a target="blank" href="/AR-qr.pdf">
              <img
                className="mt-8 ml-5 w-[85%] md:w-[90%]"
                src="folder.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
