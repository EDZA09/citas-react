import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
Formulario;
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario paciente={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
