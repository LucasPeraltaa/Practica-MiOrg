import "./ListaOpciones.css"

const ListaOpciones = () => {

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

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { equipos.map((equipo, index)=>{ // recorremos el arrglemo para tomar sus datos
                return <option key={index}>{equipo}</option> //index es la posicion del elemento en el arreglo
            }) }
        </select>
    </div>
}

export default ListaOpciones