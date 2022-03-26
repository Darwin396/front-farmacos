import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Template from "./components/Template/Template";
import Inventario from "./components/Inventario/Inventario";
import MedicamentosAgotados from "./components/MedicamentosAgotados/MedicamentosAgotados";
import MedicamentosDisponibles from "./components/MedicamentosDisponibles/MedicamentosDisponibles";
import DetalleMedicamento from "./components/DetalleMedicamento/DetalleMedicamento";
import Proveedores from "./components/Proveedores/Proveedores";
import DetalleProveedor from "./components/DetalleProveedor/DetalleProveedor";



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<Navigate to="/inventario" replace />} />
            <Route path="inventario" element={<Inventario />} />
            <Route path="medicamento/:id" element={<DetalleMedicamento />} />
            <Route path="disponibles" element={<MedicamentosDisponibles />} />
            <Route path="agotados" element={<MedicamentosAgotados />} />
            <Route path="proveedores" element={<Proveedores />} />
            <Route path="proveedor/:nit" element={<DetalleProveedor />} />
          </Route>
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
