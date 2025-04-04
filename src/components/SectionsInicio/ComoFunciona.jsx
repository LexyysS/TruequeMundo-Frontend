const ComoFunciona = () => {
  return (
    <div
      id="como-funciona"
      className="flex text-center md:text-left bg-white p-5 lg:p-10 flex-col lg:flex-row gap-6 justify-around items-center"
    >
      <div className="flex flex-col gap-4 md:gap-6 pt-5 pb-5 md:pt-10 md:pb-10 ">
        <h3 className="text-3xl md:text-4xl font-bold">Cómo Funciona</h3>
        <p className="text-sm md:text-base text-gray-700 md:text-xl">
          Intercambiar en TruequeMundo es fácil, seguro y sin complicaciones.
        </p>
        <div className="text-left">
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 flex items-center justify-center w-7 md:w-8 h-7 md:h-8 rounded-full bg-black text-white font-semibold">
                1
              </span>
              <div>
                <h3 className="font-bold md:text-xl">Registra tus artículos</h3>
                <p className="text-gray-600 text-sm md:text-xl">
                  Sube fotos y describe los artículos que quieres intercambiar.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 flex items-center justify-center w-7 md:w-8 h-7 md:h-8 rounded-full bg-black text-white font-semibold">
                2
              </span>
              <div>
                <h3 className="font-bold md:text-xl">Explora y encuentra</h3>
                <p className="text-gray-600 text-sm md:text-xl">
                  Busca artículos que te interesen y contacta a sus dueños.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 flex items-center justify-center w-7 md:w-8 h-7 md:h-8 rounded-full bg-black text-white font-semibold">
                3
              </span>
              <div>
                <h3 className="font-bold md:text-xl">Negocia el intercambio</h3>
                <p className="text-gray-600 text-sm md:text-xl">
                  Conversa con otros usuarios y acuerda los términos del
                  trueque.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 flex items-center justify-center w-7 md:w-8 h-7 md:h-8 rounded-full bg-black text-white font-semibold">
                4
              </span>
              <div>
                <h3 className="font-bold md:text-xl">Realiza el trueque</h3>
                <p className="text-gray-600 text-sm md:text-xl">
                  Encuentra un lugar seguro para hacer el intercambio y ¡Listo!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden w-260 lg:flex lg:flex-col text-end text-xs text-gray-500 font-mono lg:ml-10">
        <img src="../img/como.jpg" alt="" className="rounded-3xl" />
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

export default ComoFunciona;
