import Container from './container/Container'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./add/Add"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
      
      <Routes>
      <Route path="/" element={<Container/>}/>
      <Route path="/add" element={<Add/>}/>
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
