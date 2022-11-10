import React, { useContext, useState } from 'react';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const ServiceDetails = () => {
    const data=useLoaderData();
    const {services,comments}=data;
    
    const [user,setUser]=useContext(UserContext);
    
    const navigate=useNavigate();
    
    const review=()=>{
        console.log(user);
        if(user && user.uid){
            const newMyReview={
                comment:document.getElementById('exampleFormControlTextarea1').value,
                email: user.email,
                profile_photo: user.profile_photo?user.profile_photo:"https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGljb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                service_id:services._id,
                service_name:services.service_name,
                profile_name:user.displayName?user.displayName:user.email
            }
            
            console.log(newMyReview)
            fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    
                },
                body: JSON.stringify(newMyReview)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        alert('Comment Added successfully')
                        navigate(0)
                    }
                })
                .catch(er => console.error(er));
    
        }
        else{
            navigate('/login')
            
        }
    }
    return (
        <div>
            <div className="flex justify-center m-10 ">
                <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
                    <img className=" w-full h-1/2 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src={services.service_image} alt="" />
                    <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-5xl font-medium mb-2 text-left">{services.service_name}</h5>
                    <p className="text-gray-700 text-xl mb-4 text-left">
                        {services.details}
                    </p>
                    <p className="text-gray-700 text-2xl text-left">Price:  {services.service_price}</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <h1 className='text-5xl'>Reviews</h1>
                <hr></hr>
                {comments.map(comment=>{
                    return(

                        <div className='flex m-10'>
                            <div>
                                <img src={comment.profile_photo} className="rounded rounded-full w-24 h-24" alt="not found"/>
                                
                            </div>
                            <div className='mx-10'>
                                <p className='text-xl text-left'>Name: {comment.profile_name}</p>
                                <p className='text-italic text-left'>Review: {comment.comment}</p>
                            </div>
                        </div>
                    )
                })}
                <div className='container mx-auto'>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <label for="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-gray-700"
                            >Enter your review</label
                            >
                            <textarea
                            className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Your message"
                            ></textarea>
                            
                        </div>
                        
                    </div>
                    <div className="flex space-x-2 justify-center">
                        <button type="button" onClick={review} id="comment" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit Review</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetails;