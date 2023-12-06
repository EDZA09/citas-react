//import { useState } from "react";
/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";*/
import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
Formulario;
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  //const [count, setCount] = useState(0);
  const sumar = () => {
    //console.log(2 + 2);
    const numero = 5;

    if (numero > 5) {
      console.log("Si es mayor");
    } else {
      console.log("No es mayor");
    }
  };

  //sumar();*/

  //const edad = 18;
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header numeros={1} isAdmin={false} fn={sumar} />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
