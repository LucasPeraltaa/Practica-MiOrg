import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //metodo map -> arreglo.map( (equipos, index) ) => {
        // return <option></option>
        //}
    const equipos = [ //arreglo equipo
        "Programacion",
        "FrontEnd",
        "Data Science",
        "Devops",
        "YX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]

    const manejarCambio = (e) => {
        console.log("cambio",e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo,index) => <option key={index} value={equipo}>{equipo} </option>)}
        </select>
    </div>
}

export default ListaOpciones

// recorremos el arrglemo para tomar sus datos
//index es la posicion del elemento en el arreglo
/*{ equipos.map((equipo, index)=>{ 
            return <option key={index}>{equipo}</option> 
            }) } */