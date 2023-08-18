import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from "./Components/Header/header.jsx"
import Results from './Components/Results/Results.jsx'
import Form from './Components/Form/form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header/>
  <Form/>
  </React.StrictMode>,
)
