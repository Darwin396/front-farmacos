import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu flex">
      <li>
        <Link to="inventario">Inventario</Link>
      </li>
      <li>
        <Link to="disponibles">Disponibles</Link>
      </li>
      <li>
        <Link to="agotados">Agotados</Link>
      </li>
      <li>
        <Link to="proveedores">Proveedores</Link>
      </li>
    </ul>
  );
}

export default Menu;