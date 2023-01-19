import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {
    const [advice, setAdvice] = useState("");

    const fetchData = async () => {
        await axios.get("https://api.adviceslip.com/advice")
            .then((response) => {
                console.log(response)
                const advice = response.data.slip.advice
                setAdvice(advice)
            console.log(advice)
            }).catch((error) => 
        console.log(error))
        }
    useEffect(() => {
        fetchData()
    }, [advice])
    return (
      <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={() => fetchData()}>
                    <span>Give Me Advice</span>
                </button>
            </div>
      </div>
  )
}

export default App