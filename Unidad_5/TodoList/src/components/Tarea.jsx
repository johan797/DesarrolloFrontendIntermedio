
import React, { useState } from "react";

const Tarea = ({ tarea, quitarTarea, actualizarTarea }) => {

    const [editando, setEditando] = useState(false);
    const [tareaEditada, setTareaEditada] = useState(tarea);

    const editarTarea = () => {
        if (editando) {
            if (tareaEditada.trim()) {
                actualizarTarea(tarea, tareaEditada)
            } else {
                setTareaEditada(tarea);
            }
        }
        setEditando(!editando);
    };

    const actualizarTareaEditada = (e) => {
        setTareaEditada(e.target.value);
    }

    const textoTarea = <span>{tarea}</span>;
    const inputTareaEditada = <input type="text" value={tareaEditada} onChange={actualizarTareaEditada} />

    return (
        <div className="tarea">
            {
                editando ? inputTareaEditada : textoTarea
            }
            <button onClick={editarTarea}>
                {
                    editando ? 'Guardar' : 'Editar'
                }
            </button>
            <button className="btn-eliminar" onClick={() => quitarTarea(tarea)}>
                Eliminar
            </button>
        </div>

    );

};

export default Tarea