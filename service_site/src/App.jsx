import './App.css'
import Application from "./Application"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

function App() {

  return (
    <>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Application/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
