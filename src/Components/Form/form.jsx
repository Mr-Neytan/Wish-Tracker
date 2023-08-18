import React from 'react'
import { useState, useEffect } from 'react';
import Results from '../Results/Results';

const Form = () => {
  const [primogems,setPrimogems] = useState(() => {
    const stored_primos = Number(localStorage.getItem("primogem_count"))
    return stored_primos ? parseInt(stored_primos) : 0;
  });

  const [inter_fates, setFates] = useState(() => {
    const stored_fates = Number(localStorage.getItem("inter_fate_count"))
    return stored_fates ? parseInt(stored_fates) : 0;
  })
 

  useEffect(()=>{
    localStorage.setItem("primogem_count",String(primogems))
    localStorage.setItem("inter_fate_count", String(inter_fates))
    console.log(`Newest logged data: ${Number(localStorage.getItem("primogem_count"))} vs ${primogems}`)
    console.log(`fate count = ${inter_fates}`)
  },[primogems,inter_fates])
  
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
        setFates(inputs.intertwined_fates)
        }}>

        <input type="number" name="primo_count" value={inputs.primo_count || ""} onChange={handleChange} required></input>
        <input type="number" name="intertwined_fates" value={inputs.intertwined_fates || ""} onChange={handleChange} required></input>
        <input type="submit" value='Compute!'></input>
    </form>
    <Results primogems={primogems} fates={inter_fates}/>
    </>
  )
}


export default Form
