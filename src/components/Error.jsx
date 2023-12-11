//const Error = ({ mensaje }) => {
const Error = ({ children }) => {
  //toma todo lo que se le envia al componente
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-5 rounded-md">
      <p>{children}</p>
    </div>
  );
};

export default Error;
