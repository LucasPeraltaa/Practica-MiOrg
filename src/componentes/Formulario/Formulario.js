import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    
    const manejarEnvio = (e) => { // evento - event - e
        e.preventDefault() //le quitamos la responsabilidad al navegador de como tiene que comportarse
        console.log("manejar el envio")
        let datosAEnviar = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        console.log(datosAEnviar)
    }

    return <section className="formulario">

        <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crear el colaborador</h2>

            <CampoTexto titulo="Nombre" 
                        placeholder="Ingresa nombre"
                        required 
                        valor={nombre}
                        actualizarValor={actualizarNombre}
            />

            <CampoTexto titulo="Puesto" 
                        placeholder="Ingresa puesto"
                        required
                        valor={puesto}
                        actualizarValor={actualizarPuesto}
            />

            <CampoTexto titulo="Foto" 
                        placeholder="Ingresa enlace de foto" 
                        required
                        valor={foto}
                        actualizarValor={actualizarFoto}
            />

            <ListaOpciones valor={equipo}
                    actualizarEquipo={actualizarEquipo}/>

            <Boton
                Crear
            />

        </form>
    </section>
}

export default Formulario