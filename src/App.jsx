import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState('')
  const options = { method: 'GET', url: 'https://api.adviceslip.com/advice' };

  useEffect(() => {
    return () => {
      fetchAdvice()
    }
  }, [])

  const fetchAdvice = () => {
    return (axios.request(options).then(function (response) {
      const { advice } = response.data.slip
      setAdvice(advice)
      // console.log(advice);
    }).catch(function (error) {
      console.error(error);
    }))
  }
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <div className="button" onClick={() => { fetchAdvice() }}>
          <span>Give Me Advice!</span>
        </div>
      </div>
    </div>
  )
}

export default App
