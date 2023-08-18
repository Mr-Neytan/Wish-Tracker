import React, { useEffect } from 'react'
import { useState } from 'react'
const Results = (props) => {
  let num = Number(props.primogems)
  const [purchasable, setPurchasable] = useState(() => {
    return Math.floor(num/160)
  })
  const [total, setTotal] = useState(() => {
    return purchasable+props.fates
  })
  const [next, setNext] = useState(()=>{
    return 160-(props.primogems % 160)
  })

  useEffect(() => {
    setPurchasable(Math.floor(props.primogems/160))
    setTotal(purchasable+props.fates)
    setNext(160-(props.primogems % 160))
  },[props.primogems,props.fates])

    return(
    <>
    <div>Results</div>
    <div>
      <div>
        <h2>primos</h2>
        <p>{props.primogems}</p>
      </div>
      <div>
        <h2>fates</h2>
        <p>{props.fates}</p>
      </div>

      <div>
        <h2>Fates that can be bought</h2>
        <p>{purchasable}</p>
      </div>
      <div>
        <h2>Primos Needed for Next Wish</h2>
        <p>{next}</p>
      </div>
    </div>

    <div>
        <h2>Total</h2>
        <p>{total}</p>
      </div>
    </>
  )
}

export default Results