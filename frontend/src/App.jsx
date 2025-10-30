import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import FaqPage from "./pages/FaqPage"
import AboutPage from "./pages/AboutPage"
import AjustesPage from "./pages/AjustesPage"
import AmigosPage from "./pages/AmigosPage"
import PerfilPage from "./pages/PerfilPage"
import BuscarPage from "./pages/BuscarPage"
import GruposPage from "./pages/GruposPage"
import SolicitudesPage from "./pages/SolicitudesPage"
import ChatPage from "./pages/ChatPage"
import Navbar from "./components/Navbar"
import CuentaPage from "./pages/CuentaPage"
import PrivacidadPage from "./pages/PrivacidadPage"
import FotosVideosPage from "./pages/FotosVideosPages"
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
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex py-1 justify-center">
        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/register" element={!authUser ? <RegisterPage /> : <Navigate to="/" />} />
          <Route path="/about" element={!authUser ? <AboutPage /> : <Navigate to="/" />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/amigos" element={authUser ? <AmigosPage /> : <Navigate to="/login" />} />
          <Route path="/perfil" element={authUser ? <PerfilPage /> : <Navigate to="/login" />} />
          <Route path="/ajustes" element={authUser ? <AjustesPage /> : <Navigate to="/login" />} />
          <Route path="/buscar" element={authUser ? <BuscarPage /> : <Navigate to="/login" />} />
          <Route path="/grupos" element={authUser ? <GruposPage /> : <Navigate to="/login" />} />
          <Route path="/solicitudes" element={authUser ? <SolicitudesPage /> : <Navigate to="/login" />} />
          <Route path="/chat" element={authUser ? <ChatPage /> : <Navigate to="/login" />} />
          <Route path="/cuenta" element={authUser ? <CuentaPage /> : <Navigate to="/login" />} />
          <Route path="/privacidad" element={authUser ? <PrivacidadPage /> : <Navigate to="/login" />} />
          <Route path="/fotosvideos" element={authUser ? <FotosVideosPage /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={authUser ? "/" : "/login"} />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  )
}

export default App
