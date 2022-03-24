import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Template from "./components/Template/Template";
import Inventario from "./components/Inventario/Inventario";
import DetalleMedicamento from "./components/DetalleMedicamento/DetalleMedicamento";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<Navigate to="/inventario" replace />} />
            <Route path="inventario" element={<Inventario />} />
            <Route path="medicamento/:id" element={<DetalleMedicamento />} />
          </Route>
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
