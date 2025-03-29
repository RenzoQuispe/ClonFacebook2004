import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import FaqPage from "./pages/FaqPage"
import AboutPage from "./pages/AboutPage"
import AjustesPage from "./pages/AjustesPage"
import AmigosPage from "./pages/AmigosPage"
import PerfilPage from "./pages/PerfilPage"
import BuscarPage from "./pages/BuscarPage"

import Navbar from "./components/Navbar"
import { Route, Routes, Navigate } from "react-router"
import { estadoAuth } from "./estados/estadoAuth";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = estadoAuth();
  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log({ authUser });

  // Loader 
  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  
  return (
    <div>
      <Navbar />
      <div className="flex-grow flex py-1 justify-center items-center">
        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/register" element={!authUser ? <RegisterPage /> : <Navigate to="/" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/amigos" element={authUser ? <AmigosPage /> : <Navigate to="/login" />} />
          <Route path="/perfil" element={authUser ? <PerfilPage /> : <Navigate to="/login" />} />
          <Route path="/ajustes" element={authUser ? <AjustesPage /> : <Navigate to="/login" />} />
          <Route path="/buscar" element={authUser? <BuscarPage/> : <Navigate to="/login"/>} />
        </Routes>
        <Toaster />
      </div>
    </div>
  )
}

export default App
