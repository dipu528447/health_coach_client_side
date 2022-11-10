import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const MyReview = () => {
    const [user,setUser]=useContext(UserContext);
    const [reviews,setReviews]=useState([]);
    const navigation=useNavigate();
    useEffect(()=>{

        // load all review in start
        console.log(user)
        fetch(`https://doctor-service-server-khaki.vercel.app/myreviews/${user.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])
    function reviewDelete(id){
        


    }
    return (
        
        <div className='container mx-auto'>
            <h1 className='text-5xl'>My Reviews</h1> 
            {
                <div className='text-center my-36 '>
                    <h1 className={`text-6xl ${reviews.length>0?"hidden":"block"}`}>
                        No reviews Added
                    </h1>
                </div>
            }
            <div className={`${reviews.length>0?"block":"hidden"}`}>
            {
                reviews.map(review=>{
                    return (
                        <div className="flex justify-center" key={review._id}>
                            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">You have reviewed On {review.service_name} Service </h5>
                                <p className="text-gray-700 text-base mb-4">
                                    {review.comment}
                                </p>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{
                                            const confirm = window.confirm('Do you want to delete this review');
                                            
                                            if(confirm){
                                                fetch(`https://doctor-service-server-khaki.vercel.app/deletereview/${review._id}`, {
                                                    method: 'DELETE'
                                                })
                                                .then(res => res.json())
                                                .then(data => {
                                                    console.log(data);
                                                    if (data.deletedCount > 0){
                                                        alert('Successfully deleted');
                                                        navigation(0)
                                                    }
                                                })
                                            }
                                }}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default MyReview;