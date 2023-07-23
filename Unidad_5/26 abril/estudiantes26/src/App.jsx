import { useState } from 'react'
import './App.css'
import TablaEstudiantes from './components/TablaEstudiantes'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div > 
        <TablaEstudiantes/>
      </div>
  )
}

export default App;
