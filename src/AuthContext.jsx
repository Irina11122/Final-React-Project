import { createContext, useState, useEffect, useContext } from 'react';
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from './localStorageHelper';

 const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = loadFromLocalStorage('token');
        const storedUser = loadFromLocalStorage('user');

        if(token && storedUser) {
            console.log('Najdeno vo local storage', {token, storedUser});
            setUser(storedUser);
        } else {
            console.log('Ne e najdeno vo localStorage');
        }
    }, []);
    const login = (username, password) => {
        if (username === 'user' && password === 'password') {
            const token = 'mine-jwt-token';
            const user = {username};

            saveToLocalStorage('token', token);
            saveToLocalStorage('user',user);

            console.log('Zacuvani token i user:', token, user)
            setUser(user);
        } else {
            throw new Error('Nevazecko');
        }
        
    };

    const logout = () => {
        removeFromLocalStorage('token');
        removeFromLocalStorage('user');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);

export default UserContext;