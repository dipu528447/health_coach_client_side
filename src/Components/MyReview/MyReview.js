import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../App';

const MyReview = () => {
    const [user,setUser]=useContext(UserContext);
    const [reviews,setReviews]=useState({});
    useEffect(()=>{
        console.log(user)
        fetch(`http://localhost:5000/myreviews/${user.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])
    return (
        
        <div className='container mx-auto'>
            {console.log(reviews)}
            <h1 className='text-5xl'>Reviews</h1> 
        </div>
    );
};

export default MyReview;