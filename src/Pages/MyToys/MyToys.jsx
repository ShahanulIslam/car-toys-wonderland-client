import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const url = (`http://localhost:3500/myToys?email=${user.email}`)
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[url])

    return (
        <div>
           <h2>This is my toys</h2> 
        </div>
    );
};

export default MyToys;