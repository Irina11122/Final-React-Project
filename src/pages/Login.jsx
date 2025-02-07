import { useContext, useState } from "react"
import UserContext from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const {login} =useContext(UserContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            login(username, password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        }
    }
  return (
    <div className="login-container">
        <div className="login-box">
      <h2> Najava </h2>
      {error && <p> {error} </p> }
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Korisnicko ime" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit"> Najavi se </button>
      </form>
      </div>
    </div>
  )
}
