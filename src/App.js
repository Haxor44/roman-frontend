
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomeNavbar from "./containers/HomeNavbar";
import Home from "./containers/Home";
import ServiceListing from "./containers/ServiceListing";
import ServiceDetail from "./containers/ServiceDetail";
import Services from "./containers/Services";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Checkout from "./containers/Checkout";
import './App.css';
function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Routes>
        <Route exact path="/" element={<Services/>}/>
        
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/service/:serviceId"  element={<ServiceDetail/>}/>
        <Route exact path="/checkout"  element={<Checkout/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route>404 Not Found!!!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
