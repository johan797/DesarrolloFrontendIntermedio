import React from 'react';
import Tarea from './Tarea';

const TareaLista =({tareas, quitarTarea, actualizarTarea})=>{

    return (        
        <>
        {            
        tareas.map((tarea)=>(
                <Tarea 
                    key={tarea}
                    tarea={tarea}
                    quitarTarea={quitarTarea}
                    actualizarTarea={actualizarTarea}
                />
            ))
        }
        </>
    );
};

export default TareaLista