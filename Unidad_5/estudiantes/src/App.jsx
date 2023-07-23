import { useContext } from 'react'
import './App.css'
import AuthContext from './components/AuthContext'
import Login from './components/LoginReducer'
import TablaEstudiantes from './components/TablaEstudiantes'
import LogoutButton from './components/LogoutButton'
import DatosUser from './components/DatosUser'

function App() {

  const {user, token} = useContext(AuthContext);

  return (
    <div>
      {
        token ?
        (
          <>
            <nav>
              <ul>
                <li>Identificación: { user.identificacion}</li>
                <li>Correo: { user.correo}</li>
                <li>Registrar Estudiante</li>
                <li>
                  <LogoutButton />
                </li>
              </ul>              
            </nav>
            <DatosUser />
            <TablaEstudiantes />
          </>          
        ) : (
          <Login />
         )
      }
    </div>
  )
}

export default App