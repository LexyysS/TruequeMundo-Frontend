
import { Link } from "react-router-dom";


const categorias = [
  {
    nombre: "Electrónica",
    emoji: "💻",
    ruta: "/marketplace?categoria=electronica",
  },
  { nombre: "Hogar", emoji: "🏠", ruta: "/marketplace?categoria=hogar" },
  { nombre: "Ropa", emoji: "👗", ruta: "/marketplace?categoria=ropa" },
  { nombre: "Deportes", emoji: "⚽", ruta: "/marketplace?categoria=deportes" },

];

const CategoriasDestacadas = () => {
  
  const categoriasDestacadas = categorias.slice(0, 4);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Categorías Destacadas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre las categorías más populares y encuentra exactamente lo que
            buscas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categoriasDestacadas.map((categoria) => (

            <a
              href={`/marketplace?categoria=${categoria.nombre}`}
              key={categoria.nombre}
              className="group"
            >

              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-24 h-24 mx-auto flex items-center justify-center bg-gray-100 rounded-full mb-4 group-hover:bg-gray-200 transition-colors">
                  <span className="text-5xl">{categoria.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {categoria.nombre}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/categorias"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md hover:shadow-lg"
          >
            Ver Todas las Categorías
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriasDestacadas;
