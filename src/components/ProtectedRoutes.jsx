import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext  from '../AuthContext';

const ProtectedRoutes = ({ children}) => {
    const {user} = useContext(UserContext);
    console.log(localStorage.getItem('user'));

    if(!user) {
        return <Navigate to='/login'/>;
    }
    return children;
};

export default ProtectedRoutes;