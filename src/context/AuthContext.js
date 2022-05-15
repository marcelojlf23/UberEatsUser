import { Auth } from 'aws-amplify';
import { createContext, useEffect, useState, useContext } from 'react';

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [dbUser, setDbUser] = useState(null);

    useEffect(()=>{
        Auth.currentAuthenticatedUser( { bypassCache: true } )
    }, []);

    const sub = authUser?.attribute?.sub;

    return (
        <AuthContext.Provider value={{ authUser, dbUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);