import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Navbar from "./components/Navbar"
import { Route, Routes, Navigate } from "react-router"
function App() {
  return (

    <div>
      <Navbar/>
      <div className="flex-grow flex py-1 justify-center items-center">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
