import { useState } from 'react'
import './App.css'
import CsvToJsonConverter from './components/csvUploader/CsvUploader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CsvToJsonConverter /> 
    </>
  )
}

export default App
