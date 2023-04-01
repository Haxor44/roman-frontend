
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./containers/Header";
import ServiceListing from "./containers/ServiceListing";
import ServiceDetail from "./containers/ServiceDetail";
import Login from "./containers/Login";
import Register from "./containers/Register";
import './App.css';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Routes>
        <Route exact path="/" element={<ServiceListing/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/service/:serviceId"  element={<ServiceDetail/>}/>
        <Route>404 Not Found!!!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
