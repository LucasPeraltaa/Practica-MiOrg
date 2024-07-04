import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () =>{

    const manejarEnvio = (e) => { // evento - event - e
        e.preventDefault() //le quitamos la responsabilidad al navegador de como tiene que comportarse
        console.log("manejar el envio", e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresa puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresa enlace de foto"/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario