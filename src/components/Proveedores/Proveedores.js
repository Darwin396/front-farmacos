import "./Proveedores.css";
import Proveedor from "../Proveedor/Proveedor";
import { useEffect, useState, useContext } from "react";

function Proveedores() {
  const [proveedores, setProveedores] = useState([]);

  const cargarProveedores = () => {
    fetch("http://localhost:3000/data/proveedores.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setProveedores(data));
  };

  useEffect(() => {
    cargarProveedores();
  }, []);

  return (
    <section id="proveedores">
      <div className="container">
        <h1>Proveedores</h1>
        
        <div className="grid-proveedores">
          {proveedores.map((proveedor) => (
            <Proveedor key={proveedor.id} data={proveedor}></Proveedor>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proveedores;