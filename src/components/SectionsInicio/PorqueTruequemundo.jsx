import {
  ArrowPathIcon,
  ShieldCheckIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";

const PorqueTruequemundo = () => {
  return (
    <div className="flex items-center flex-col text-center pt-8 md:pt-12 pb-8 md:pb-12 bg-gray-50">
     
      <div className="flex items-center flex-col gap-3 mb-6 ">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
          ¿Por qué elegir TruequeMundo?
        </h3>
        <p className="text-sm md:text-lg text-gray-600  ">
          Descubre los beneficios de unirte a nuestra comunidad de intercambio.
        </p>
      </div>
   
      <div className="flex flex-wrap justify-center items-center flex-col md:flex-row p-4 gap-6">
        <div className="flex flex-col items-center rounded-lg border border-gray-300 p-5 gap-3 justify-center md:w-72 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <ArrowPathIcon className="w-10 h-10 text-green-500 hover:rotate-360 duration-500 ease-in-out"></ArrowPathIcon>
          <h5 className="font-bold text-xl text-gray-800">Economía Circular</h5>
          <p className="text-base text-gray-700">
            Contribuye al medio ambiente dando una segunda vida a los objetos
            que ya no utilizas.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg border border-gray-300 p-5 gap-3 justify-center md:w-72 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <ShieldCheckIcon className="w-10 h-10 text-blue-500 hover:scale-110 duration-500 ease-in-out"></ShieldCheckIcon>
          <h5 className="font-bold text-xl text-gray-800">Comunidad Segura</h5>
          <p className="text-base text-gray-700">
            Sistema de verificación de usuarios y valoraciones para garantizar
            intercambios seguros.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg border border-gray-300 p-5 gap-3 justify-center md:w-72 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <ChatBubbleOvalLeftIcon className="w-10 h-10 text-purple-500 hover:scale-110 duration-500 ease-in-out"></ChatBubbleOvalLeftIcon>
          <h5 className="font-bold text-xl text-gray-800">
            Comunicación Directa
          </h5>
          <p className="text-base text-gray-700">
            Chat integrado para facilitar la comunicación entre usuarios y
            acordar los intercambios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PorqueTruequemundo;
