import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Shop from "./pages/Shop";
import NewArrivel from "./pages/NewArrivel";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path="/shop" element={<Shop/>} />
          <Route exact path="/newarrivel" element={<NewArrivel/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        </>
  );
};

export default App;
