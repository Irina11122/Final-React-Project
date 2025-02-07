import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import './index.css'

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
