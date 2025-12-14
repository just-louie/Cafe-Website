import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About-us/About-us";
import Contacts from "./pages/Contacts/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
       <Home />
       <AboutUs />
       <Contacts />
     
    </BrowserRouter>
  )
}

export default App
