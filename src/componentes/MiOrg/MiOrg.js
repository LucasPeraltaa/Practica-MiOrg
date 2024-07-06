import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    // estado utilizando hooks (funcionalidades que nos ayudan a trabjar con el comportamiento de react)
    // useState --- utiliza el estado
    // forma de definir un estado: const [nombreVariable, funcionActualiza] = useState(valorInicial)

    //const[mostrar, actualizarMostrar] = useState(true)

    //const manejarClick = () =>{
    //    console.log("Mostrar/Ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="titulo">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg