import { useParams } from "react-router-dom";
import "./DetalleMedicamento.css";
import { useState, useEffect } from "react";

function DetalleMedicamento() {
  const { id } = useParams();

  const [medicamento, setMedicamento] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:3000/data/medicamentos/${id}.json`)
      .then((response) => response.json())
      .then((data) => setMedicamento(data));
  }, [id]);

  if (!medicamento) return null;

  const moneda = function(number){
    return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'COP', minimumFractionDigits: 3}).format(number);
  };

  return (
    <article id="medicamento">
      <div className="medicamento container flex direction-row justify-space-around">
        <div className="encabezado-medicamento">
          <h1 className="mb-3">{medicamento.nombre}</h1>
          <h6 style={{color: '#6c7793'}}>{medicamento.nombre_proveedor}</h6>
          <h3 style={{color: '#418fde'}}>{moneda(medicamento.precio)}</h3>
          <h4>Unidades disponibles: {medicamento.unidades}</h4>
        </div>
        <div className="info-medicamento">
          <p>Tipo: {medicamento.tipo}</p>
          <p>Vía de administración: {medicamento.administracion}</p>
          <p>Presentación: {medicamento.presentacion}</p>
          <p>Fabricante: {medicamento.nombre_fabricante}</p>
        </div>
        <div className="flex justify-space-around modificar-unidades">
          <label>Unidades</label>
          <input className="cantidad" type="number" placeholder="0"></input>
          <button>Agregar unidades</button>
          <button>Quitar unidades</button>
        </div>
      </div>
    </article>
  );
}

export default DetalleMedicamento;