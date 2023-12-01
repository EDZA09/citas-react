const ListadoPacientes = () => {
  return (
    <div className="w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes </h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">Eduar</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">
            eduarstiven2001@gmail.com
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha de Alta: {""}
          <span className="font-normal normal-case">10 Diciembre de 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          S&iacute;ntomas: {""}
          <span className="font-normal normal-case">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            itaque aperiam voluptas illum et. Amet at est doloremque ratione ad
            minus laboriosam expedita laudantium id dignissimos. Itaque et saepe
            ducimus!
          </span>
        </p>
      </div>
    </div>
  );
};

export default ListadoPacientes;
