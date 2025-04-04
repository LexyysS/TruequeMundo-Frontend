import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isSesionActive, setIsSesionActive] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsSesionActive(!!token);
  }, []);
  return (
    <div className=" flex items-center justify-around bg-[#e5e7eb] text-center lg:text-left pt-5 pb-5 p-4 md:p-10">
     
      <div className="flex flex-col lg:pe-4 gap-5 lg:gap-10 box-border">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Intercambia lo que no usas por lo que necesitas
          </h1>
        </div>
        <div>
          <p className="text-sm lg:text-xl">
            Truequemundo es la plataforma donde puedes intercambiar objetos sin
            usar dinero. Encuentra lo que buscas y ofrece lo que ya no
            necesitas.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {isSesionActive ? (
            <a
              href="/marketplace"
              className="whitespace-nowrap bg-black rounded-lg py-3 px-6 duration-200 text-white hover:bg-slate-900 shadow-lg transform hover:scale-105 transition-transform"
            >
              Comenzar a intercambiar
            </a>
          ) : (
            <a
              href="/loginregistro?form=register"
              className="whitespace-nowrap bg-black rounded-lg py-3 px-6 duration-200 text-white hover:bg-slate-900 shadow-lg transform hover:scale-105 transition-transform"
            >
              Comenzar a intercambiar
            </a>
          )}
          <a
            href="/categorias"
            className="whitespace-nowrap rounded-lg border border-gray-400 text-black py-3 px-6 duration-200 hover:bg-slate-100 shadow-lg transform hover:scale-105 transition-transform bg-white"
          >
            Explorar Categorias
          </a>
        </div>
      </div>

    
      <div className="hidden w-400 lg:flex lg:flex-col text-end text-xs text-gray-500 font-mono">
        <img
          src="../img/hero.jpg"
          alt=""
          className="h-max w-auto rounded-3xl"
        />
        <p>
          Diseñado por{" "}
          <a target="_blank" href="https://www.freepik.es/">
            Freepik
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
