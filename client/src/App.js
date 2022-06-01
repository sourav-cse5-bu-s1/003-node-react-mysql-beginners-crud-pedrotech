import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [position, setPosition] = useState('')
  const [country, setCountry] = useState('')
  const [wage, setWage] = useState(0)

  const addEmployee = () => {
    axios.post(
      'http://localhost:3001/create', 
      { name, age, position, country, wage }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <div className='information'>
        <label>Name</label>
        <input type='text' onChange={(e) => setName(e.target.value)}/>
        <label>Age</label>
        <input type='number' onChange={(e) => setAge(e.target.value)}/>
        <label>Position</label>
        <input type='text' onChange={(e) => setPosition(e.target.value)}/>
        <label>Country</label>
        <input type='text' onChange={(e) => setCountry(e.target.value)}/>
        <label>Wage (year)</label>
        <input type='number' onChange={(e) => setWage(e.target.value)}/>
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App
