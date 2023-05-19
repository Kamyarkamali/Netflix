import './App.css';

//Components
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';
import Account from './Components/Account/Account';

//React-Rouer-Dom;
import { Route,Routes } from "react-router-dom";

//Context
import { AuthContextProvider } from './Components/Context/Autch';



function App() {

  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/singup' element={<SingUp/>}/>
        <Route path='/acount' element={<Account/>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
