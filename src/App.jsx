import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services } from "./components/pages";
import MyCustomApp from "./components/MyCustomApp";
import Tarjet from "./components/pages/Tarjet";
function App() {
  return (
    <div className="App">
     
      <Navbar />
      <MyCustomApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tarjet" element={<Tarjet />} />
        
        
      </Routes>

     
    </div>
  );
}

export default App;
