import { useParams } from "react-router-dom";
import "./DetalleMedicamento.css";
import { useState, useEffect } from "react";

function DetalleMedicamento() {
  const { id } = useParams();

  const [medicamento, setMedicamento] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:3000/json/${id}.json`)
      .then((response) => response.json())
      .then((data) => setMedicamento(data));
  }, [id]);

  if (!medicamento) return null;

  return (
    <article id="medicamento">
      <div className="container">
        <h1 className="mb-3">
          <i className="fas fa-film"></i> {medicamento.nombre}
        </h1>

        <div className="wrapper flex">
          
        </div>
      </div>
    </article>
  );
}

export default DetalleMedicamento;