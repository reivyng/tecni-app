
import "../index.css";

export const Nav = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center gap-4">
                <a href="#" className="text-xl font-bold">🌍</a>
                <p className="text-gray-600">-320 4155186</p>
            </div>
            <ul className="flex space-x-6 text-lg font-semibold">
                <li><a href="#" className="hover:text-blue-700">Inicio</a></li>
                <li><a href="#" className="hover:text-blue-700">Contactanos</a></li>
                <li className="border-b-2 border-blue-700"><a href="#">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-blue-700">Servicios</a></li>
                <li><a href="#" className="hover:text-blue-700">Proyectos</a></li>
            </ul>
        </nav>
    );
};

