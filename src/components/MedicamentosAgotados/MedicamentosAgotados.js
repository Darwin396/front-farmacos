import "./MedicamentosAgotados.css";
import Medicamento from "../Medicamento/Medicamento";
import { useEffect, useState, useContext } from "react";

function MedicamentosAgotados() {
  const [medicamentos, setMedicamentos] = useState([]);

  const cargarMedicamentos = () => {
    fetch("http://localhost:3000/data/agotados.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setMedicamentos(data));
  };

  useEffect(() => {
    cargarMedicamentos();
  }, []);

  return (
    <section id="medicamentos">
      <div className="container">
        <h1>Inventario</h1>
        
        <div className="grid-medicamentos">
          {medicamentos.map((medicamento) => (
            <Medicamento key={medicamento.id} data={medicamento}></Medicamento>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MedicamentosAgotados;