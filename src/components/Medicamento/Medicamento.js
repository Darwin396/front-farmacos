import { Link } from "react-router-dom";
import "./Medicamento.css";

function Medicamento({ data }) {

  const moneda = function(number){
    return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'COP', minimumFractionDigits: 3}).format(number);
  };

  return (
    <div className="medicamento">
      <div className="info">
        <p className="item-medicamento">{data.nombre_proveedor}</p>
        <h2 className="info principal item-medicamento">{data.nombre}</h2>
        <h6 className="item-medicamento">{data.presentacion}</h6>
        <h2 className="item-medicamento">{moneda(data.precio)}</h2>
        <p className="item-medicamento">Unidades disponibles:
          {
            (data.unidades === 0) ? 
            <spam style={{color: 'red'}}> {data.unidades}</spam> : 
            <spam> {data.unidades}</spam>
          }
        </p>
      </div>
      <div className="ver-mas">
        <Link to={`/medicamento/${data.id}`}>ver más</Link>
      </div>
    </div>
  );
}

export default Medicamento;