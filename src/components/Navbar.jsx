import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    console.log('Najden user vo Naavbar:', user);

    const handleLogout = () => {
        logout();
        navigate('/login');
    }
    return (
        <nav className="navbar">
            <h2> Task Tracker </h2>
            {user && ( <button  onClick={handleLogout}> Odjavi se </button> )}
        </nav>
    );
};

export default Navbar;