import { Link } from "react-router-dom";
import "./Proveedor.css";

function Proveedor({ data }) {

  const moneda = function(number){
    return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'COP', minimumFractionDigits: 3}).format(number);
  };

  return (
    <div className="proveedor">
      <div className="info">
        <h2 className="info principal">{data.nombre}</h2>
        <h5>NIT.{data.nit}</h5>
        <Link to={`/proveedor/${data.nit}`}>ver más</Link>
      </div>
    </div>
  );
}

export default Proveedor;