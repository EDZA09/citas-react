import { Paciente } from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {pacientes.length !== 0 ? (
        pacientes.map((paciente) => <Paciente paciente={paciente} />)
      ) : (
        <div className="bg-yellow-200 text-gray-700 text-center p-3 uppercase font-bold mb-5 rounded-md">
          <p>No hay pacientes aún</p>
        </div>
      )}
    </div>
  );
};

export default ListadoPacientes;
