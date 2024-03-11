import { useEffect, useState } from "react";
import "./App.css";

//Components
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import SingUp from "./Components/SingUp/SingUp";
import Account from "./Components/Account/Account";

//React-Rouer-Dom;
import { Route, Routes } from "react-router-dom";

//Context
import { AuthContextProvider } from "./Components/Context/Autch";

function App() {
  const [showTimeoutMessage, setShowTimeoutMessage] = useState(true);
  useEffect(() => {
    document.title = "Netflix Deutschland-Serien online";
  }, []);

  setTimeout(() => {
    setShowTimeoutMessage(false);
  }, 4000);

  return (
    <div className="App">
      {showTimeoutMessage && (
        <div className="bg-red-600 h-[400px] absolute left-0 top-0 w-full z-40">
          <div className="flex flex-col items-center justify-center h-[400px]">
            <h1 className="text-2xl text-white font-bold">
              لطفا برای باز شدن پروژه وی پی ان را روشن کنید
            </h1>
          </div>
        </div>
      )}
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sinup" element={<SingUp />} />
          <Route path="/acount" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
