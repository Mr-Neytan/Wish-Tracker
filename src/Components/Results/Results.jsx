import React, { useEffect } from 'react'
import { useState } from 'react'
import "./results.css"

const Results = (props) => {
  console.log(`number of primogems ${props.primogems}`)
  let num = Number(props.primogems)
  const [purchasable, setPurchasable] = useState(() => {
    return Math.floor(num/160)
  })
  const [total, setTotal] = useState(() => {
    return Number(purchasable)+props.fates
  })
  const [next, setNext] = useState(()=>{
    return 160-(props.primogems % 160)
  })

  useEffect(() => {
    setPurchasable(Math.floor(props.primogems/160))
    setTotal(Number(purchasable)+Number(props.fates))
    setNext(160-(props.primogems % 160))
  },[props.primogems,props.fates,purchasable])


    return(
    <>
    <div className='container'>
      <h1>Results</h1>
    
    <div className='row'>
      <div id="result_label">
        <h2>Primogems</h2>
        <p>{props.primogems}</p>
      </div>
      <div id="result_label">
        <h2>Intertwined Fates</h2>
        <p>{props.fates}</p>
      </div>
      </div>
      <div className='row'>
      <div id="result_label">
        <h2>Purchasable Fates</h2>
        <p>{purchasable}</p>
      </div>
      <div id="result_label">
        <h2>Primogems for Next Fate</h2>
        <p>{next}</p>
      </div>
    </div>
    <div className='total'>
        <h2 >Total</h2>
        <p>{total}</p>
      </div>
    </div>

    </>
  )
}

export default Results