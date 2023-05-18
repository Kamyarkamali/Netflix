import './App.css';

//Components
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

//React-Rouer-Dom;
import { Route,Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
