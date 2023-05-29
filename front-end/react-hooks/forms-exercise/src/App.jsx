import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [studentData, setStudentData] = useState({
    name: '',
    age: 0,
    city: '',
    module: '',
  })

  const handleChange = ({target}) => {
    const { name, value } = target;
    setStudentData({...studentData, [name]: value,});
  }

  return (
    <form>
      <input onChange={handleChange} type="text" placeholder='Nome'name='name' value={studentData.name}/>
      <input onChange={handleChange} type="number" placeholder='Idade' name='age' value={studentData.age}/>
      <input onChange={handleChange} type="text" placeholder='Cidade' name='city' value={studentData.city}/>
      <input onChange={handleChange} type="radio" name="module" value='Fundamentos' id=""/>Fundamentos
      <input onChange={handleChange} type="radio" name="module" value='Front-end' id="" />Front-end
      <input onChange={handleChange} type="radio" name="module" value='Back-end' id="" />Back-end
      <input onChange={handleChange} type="radio" name="module" value='Ciência da computação' id="" />Ciência da computação
      <button type='button'>Enviar</button>
    </form>
  )
}

export default App
