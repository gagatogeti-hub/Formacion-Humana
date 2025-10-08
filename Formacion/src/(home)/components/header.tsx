function Header() {
  return (
    <header className="flex items-center justify-between bg-[#0f172a] text-white px-8 py-4 shadow-md">
      Religion
      {/* MENÚ EN HORIZONTAL */}
      <ul className="flex space-x-8">
        <a href="#">
          <li className="p-1 rounded-2xl hover:text-fuchsia-200 hover:border-b-fuchsia-300 hover:border-2 cursor-pointer">
            Inicio
          </li>
        </a>
        <a href="#">
          <li className="p-1 rounded-2xl hover:text-green-200 hover:border-b-green-300 hover:border-2 cursor-pointer">
            Servicios
          </li>
        </a>
        <a href="#">
          <li className="p-1 rounded-2xl hover:text-fuchsia-200 hover:border-b-fuchsia-300 hover:border-2 cursor-pointer">
            Proyectos
          </li>
        </a>
        <a href="#">
          <li className="p-1 rounded-2xl hover:text-green-200 hover:border-b-green-300 hover:border-2 cursor-pointer">
            Contacto
          </li>
        </a>
      </ul>
      {/* BOTÓN */}
      <button className="bg-white hover:bg-green-200 text-black px-4 py-2 rounded-lg transition">
        Iniciar sesión
      </button>
    </header>
  );
}

export default Header;
