import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const users = {
        name: "murikan"
    }
    const authInfo = {users
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;