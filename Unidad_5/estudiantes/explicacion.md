```import { useState, useEffect } from 'react'
import './App.css'

function App() {  
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  });

  return (
    
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>
       
    
  )
}

export default App 
```

En este ejemplo utilizamos el hook useState para declarar una variable de estado count y su función setCount para actualizarla.

Luego, utilizamos el hook useEffect para realizar una operación secundaria. En este caso, cada vez que el componente se renderiza o se actualiza, el efecto se ejecuta. En el efecto, actualizamos el título del documento (document.title) con el valor actual del contador. Cuando el usuario hace clic en el botón "Incrementar", se llama a la función setCount para incrementar el valor de count en 1. 

En resumen, puedes utilizar el hook useEffect para ejecutar diferentes operaciones secundarias, como suscripciones a eventos, llamadas a API, limpieza de recursos, etc., en respuesta a cambios en el componente o en alguna de sus dependencias.

```
import { useState, useEffect, createContext, useContext } from 'react'
import './App.css'

const ThemeContext = createContext();

function ThemeComponent() {
  // Utilizamos el hook useContext para acceder al valor del contexto
  const theme = useContext(ThemeContext);
  return <p>Tema actual: {theme}</p>;
}

function App() {  


  return (
    <ThemeContext.Provider value="light">
      <div>
        <h1>Ejemplo de useContext</h1>
        <ThemeComponent />
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App
```

En este ejemplo, creamos un contexto llamado ThemeContext utilizando la función createContext() de React. Luego, tenemos un componente llamado ThemeComponent que utiliza el hook useContext para acceder al valor proporcionado por el contexto.

Dentro del componente App, envolvemos el ThemeComponent con el ThemeContext.Provider y le proporcionamos un valor de contexto específico, en este caso, el valor "light" para el tema. Esto hace que el valor del contexto esté disponible para todos los componentes descendientes del Provider.

Cuando el ThemeComponent se renderiza, utiliza el hook useContext(ThemeContext) para obtener el valor actual del contexto. En este caso, el tema actual se muestra en un elemento p.

El hook useContext hace que sea más sencillo y legible consumir y utilizar los valores proporcionados por el contexto en diferentes componentes dentro de la jerarquía de la aplicación.

Recuerda que el useContext debe ser utilizado dentro de un componente hijo directo del Provider correspondiente al contexto que se quiere consumir.
### Otro ejemplo
```
import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto
const UserContext = createContext();

// Componente que utiliza el contexto
function UserProfile() {
  // Utilizamos el hook useContext para acceder al valor del contexto
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Perfil de usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

// Componente que provee el valor del contexto
function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Aplicación de Ejemplo</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
```