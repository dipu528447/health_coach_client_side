import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LoadingContext, UserContext, } from '../../App';


const PrivateRoute = ({children}) => {
    const [user,setUser] = useContext(UserContext) 
    const [loading,setLoading]=useContext(LoadingContext);
    const location=useLocation();
    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        console.log(user)
        return children
    }
    return <Navigate to='/login' state={{from:location}}replace></Navigate>
    
};

export default PrivateRoute;