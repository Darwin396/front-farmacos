import { Link } from "react-router-dom";
import "./Medicamento.css";

function Medicamento({ data }) {
  return (
    <div className="medicamento">
      <img src={data.imagen}></img>
      <div className="info">
        <h2>{data.titulo}</h2>
        <Link to={`/medicamento/${data.id}`}>ver más</Link>
      </div>
    </div>
  );
}

export default Medicamento;