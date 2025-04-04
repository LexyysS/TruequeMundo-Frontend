import Footer from "../components/NavbarFooter/Footer";
import NavBar from "/src/components/NavbarFooter/NavBar";


const categorias = [
    { id:1, nombre: "Electrónica", emoji: "💻", ruta: "/marketplace?categoria=electronica" },
    { id:2, nombre: "Hogar", emoji: "🏠", ruta: "/marketplace?categoria=hogar" },
    { id:3,nombre: "Ropa", emoji: "👗", ruta: "/marketplace?categoria=ropa" },
    { id:4,nombre: "Automotriz", emoji: "🚗", ruta: "/marketplace?categoria=automotriz" },
    { id:5,nombre: "Muebles", emoji: "🛋️", ruta: "/marketplace?categoria=muebles" },
    { id:6,nombre: "Juguetes", emoji: "🧸", ruta: "/marketplace?categoria=juguetes" },
    { id:8,nombre: "Deportes", emoji: "⚽", ruta: "/marketplace?categoria=deportes" },
    { id:9,nombre: "Herramientas", emoji: "🛠️", ruta: `/marketplace?categoria=` },
    { id:10,nombre: "Jardinería", emoji: "🌻", ruta: "/marketplace?categoria=jardineria" },
    { id:11,nombre: "Mascotas", emoji: "🐶", ruta: "/marketplace?categoria=mascotas" },
    { id:12,nombre: "Salud y Belleza", emoji: "💄", ruta: "/marketplace?categoria=salud-y-belleza" },
    { id:13,nombre: "Alimentos y Bebidas", emoji: "🍔", ruta: "/marketplace?categoria=alimentos-y-bebidas" },
    { id:14,nombre: "Arte y Manualidades", emoji: "🎨", ruta: "/marketplace?categoria=arte-y-manualidades" },
    { id:15,nombre: "Libros y Revistas", emoji: "📚", ruta: "/marketplace?categoria=libros-y-revistas" },
    { id:16,nombre: "Música e Instrumentos", emoji: "🎸", ruta: "/marketplace?categoria=musica-e-instrumentos" },
    { id:17,nombre: "Videojuegos", emoji: "🎮", ruta: "/marketplace?categoria=videojuegos" },
    { id:18,nombre: "Antigüedades", emoji: "🏺", ruta: "/marketplace?categoria=antiguedades" },
    { id:19,nombre: "Coleccionables", emoji: "🧸", ruta: "/marketplace?categoria=coleccionables" },
    { id:20,nombre: "Bebés y Niños", emoji: "👶", ruta: "/marketplace?categoria=bebes-y-ninos" },
    { id:21,nombre: "Cámaras y Fotografía", emoji: "📷", ruta: "/marketplace?categoria=camaras-y-fotografia" },
    { id:22,nombre: "Computación", emoji: "🖥️", ruta: "/marketplace?categoria=computacion" },
    { id:23,nombre: "Celulares y Accesorios", emoji: "📱", ruta: "/marketplace?categoria=celulares-y-accesorios" },
];

const Categorias = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
   
      <NavBar />


      <div className="bg-white py-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Explora nuestras categorías
        </h2>
        <p className="text-center text-lg text-gray-600 mt-4">
          Descubre productos de tus categorías favoritas.
        </p>
      </div>

   
      <div className="py-12 px-6 lg:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {categorias.map((categoria) => (
            
                <a href={`/marketplace?categoria=${categoria.nombre}`}
                className="group"
                key={categoria.nombre}
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
      </div>
      <Footer />
    </div>
  );
};

export default Categorias;
