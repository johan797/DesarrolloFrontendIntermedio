import { useState } from 'react'
import './App.css'
import TareaForm from './components/TareaForm'
import TareaLista from './components/TareaLista';

function App() {
  //arreglo de tareas
  const [tareas, setTareas]=useState([]);

  const agregarTarea =(tarea)=>{
    // Utiliza el operador de propagación (...) para crear una nueva matriz con la tarea agregada
    setTareas([...tareas, tarea]);
  };

  const quitarTarea = (tarea) => {
    // Filtra las tareas y crea una nueva matriz sin la tarea especificada
    setTareas(tareas.filter((t)=> t !== tarea));
  };

  const actualizarTarea = (tareaAnterior, tareaEditada) => {
    setTareas(
      // Actualiza la tarea en el arreglo utilizando el método map() y el operador ternario
      tareas.map((tarea)=>tarea=== tareaAnterior ? tareaEditada : tarea)
    );
  };

  return (
    
      <div className='container'>
       <h1>Lista De tareas</h1>
       <TareaForm agregarTarea={agregarTarea} />
       <TareaLista tareas={tareas} quitarTarea={quitarTarea} actualizarTarea={actualizarTarea} />
      </div>

  )
}

export default App
