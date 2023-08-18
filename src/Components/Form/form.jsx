import React from 'react'
import { useState, useEffect } from 'react';
import Results from '../Results/Results';

const Form = () => {
  const [primogems,setPrimogems] = useState(() => {
    const stored_primos = Number(localStorage.getItem("primogem_count"))
    return stored_primos ? parseInt(stored_primos) : 0
  });
 

  useEffect(()=>{
    localStorage.setItem("primogem_count",String(primogems))
    console.log(`Newest logged data: ${Number(localStorage.getItem("primogem_count"))} vs ${primogems}`)
  },[primogems])
  
    const [inputs, setInputs] = useState({});
    const handleChange = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
        console.log(inputs)
    }

  return (
    <>
    <form onSubmit={(e) => {
        e.preventDefault();
        setPrimogems(inputs.primo_count)
        }}>
        <input type="number" name="primo_count" value={inputs.primo_count || ""} onChange={handleChange}></input>
        <input type="submit" value='Compute!'></input>
    </form>
    <Results primogems={primogems}/>
    </>
  )
}


export default Form
