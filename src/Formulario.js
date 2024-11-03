import React, {useState} from 'react'

function Formulario(){
    const [nombre, setNombre] = useState(" ");
    const [mensaje, setMensaje] = useState(" ");

    const handleChange = (e) => {
        setNombre(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        setMensaje(`¡Bienvenido, ${nombre}!`);
      };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Nombre:
                <input
                type="text"
                value={nombre}
                onChange={handleChange}
                placeholder="Introduce tu nombre"/>
                </label>
                <button type="submit">Enviar</button>
            </form>
      {mensaje && <h3>{mensaje}</h3>}
    </div>
    )
}
export default Formulario;