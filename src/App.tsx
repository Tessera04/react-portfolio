import Titulo from "./Titulo";

function App() {
  //No es codigo HTML, es codigo JSX/TSX
  //Esto se va a transformar en codigo Javascript para que el navegador pueda leerlo
  //Si ponemos este codigo en BABEL, nos va a retornar lo que se crea que es un elemento React.createElement()
  return <Titulo />;
}

export default App;
