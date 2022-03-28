import { useParams } from "react-router-dom";
import "./DetalleProveedor.css";
import { useState, useEffect } from "react";

function DetalleProveedor() {
  const { nit } = useParams();

  const [proveedor, setProveedor] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:3000/data/proveedores/${nit}.json`)
      .then((response) => response.json())
      .then((data) => setProveedor(data));
  }, [nit]);

  if (!proveedor) return null;

  const moneda = function(number){
    return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'COP', minimumFractionDigits: 3}).format(number);
  };

  return (
    <article id="proveedor">
      <div className="proveedor container flex direction-column justify-space-around">
        <div className="encabezado-proveedor">
            <h1 className="mb-3 item-proveedor">{proveedor.nombre}</h1>
            <h6 className="item-proveedor" style={{color: '#6c7793'}}>NIT.{proveedor.nit}</h6>
        </div>
        <div className="info-proveedor">
          <p className="item-proveedor">País: {proveedor.pais}</p>
          <p className="item-proveedor">Contacto: {proveedor.telefono}</p>
        </div>
      </div>
    </article>
  );
}

export default DetalleProveedor;