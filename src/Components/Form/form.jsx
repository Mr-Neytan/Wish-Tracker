import React from 'react'
import { useState, useEffect } from 'react';
import Results from '../Results/Results';
import "./form.css"


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
        if (inputs.intertwined_fates){
          setFates(Number(inputs.intertwined_fates))
          console.log(`changed fates: ${inputs.intertwined_fates}`)
        }
        if (inputs.primo_count){
          setPrimogems(Number(inputs.primo_count))
          console.log(`changed primos:${inputs.primo_count};`)
        }
        
        
        
        }}>
        <label>Number of Primogems</label>
        <input type="number" min={0} name="primo_count" value={inputs.primo_count || ""} onChange={handleChange}></input>
        <label>Number of Intertwined Fates</label>
        <input type="number" min={0} name="intertwined_fates" value={inputs.intertwined_fates || ""} onChange={handleChange}></input>
        <input type="submit" value='Compute!' className='submit'></input>
    </form>
    <Results primogems={primogems} fates={inter_fates}/>
    <button className="clear" onClick={() => {
      setPrimogems(0)
      setFates(0)
      setInputs({})
    }}>Clear</button>
    </>
  )
}


export default Form
