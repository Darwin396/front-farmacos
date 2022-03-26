import { Link } from "react-router-dom";
import "./Medicamento.css";

function Medicamento({ data }) {

  const moneda = function(number){
    return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'COP', minimumFractionDigits: 3}).format(number);
  };

  return (
    <div className="medicamento">
      <div className="info">
        <p>{data.nombre_proveedor}</p>
        <h2 className="info principal">{data.nombre}</h2>
        <h6>{data.presentacion}</h6>
        <h2>{moneda(data.precio)}</h2>
        <p>Unidades disponibles:
          {
            (data.unidades === 0) ? 
            <spam style={{color: 'red'}}> {data.unidades}</spam> : 
            <spam> {data.unidades}</spam>
          }
        </p>
        <Link to={`/medicamento/${data.id}`}>ver más</Link>
      </div>
    </div>
  );
}

export default Medicamento;