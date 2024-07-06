import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(true)

  // ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header/>
      {/*mostrarFormulario === true ? <Formulario/> : <div></div>*/}
      {mostrarFormulario && <Formulario/>} //es exactamente lo mismo pero ahorramos codigo
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
