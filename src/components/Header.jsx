function Header({ numeros, isAdmin, fn }) {
  console.log(numeros);
  console.log(isAdmin);
  console.log(fn);
  return (
    <>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        Seguimiento Pacientes{" "}
        <span className="text-indigo-600">Veterinario</span>
      </h1>
    </>
  );
}

export default Header;
