import {BrowserRouter, Routes, Route, Link }from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx";
import "./App.css";
function App(){
  return(
    <>
    <div class="show-container">
      <h2>Task Manager</h2>
      <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">AboutUs</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}
export default App;