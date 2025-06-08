import './App.css'
import Application from "./Application"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

function App() {

  return (
    <>
  <BrowserRouter basename='/service_site'>
    <Routes>
    <Route path="/"  element={<Application/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
