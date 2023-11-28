//import { useState } from "react";
/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";*/
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

  sumar();

  //const edad = 18;

  return (
    <>
      <Header />
      <Formulario />
      <ListadoPacientes />
    </>
  );
}

export default App;
