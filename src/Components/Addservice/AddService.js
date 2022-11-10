import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const AddService = () => {
    const [user,setUser]=useContext(UserContext);
    const navigate=useNavigate();
    const location=useLocation();
    const [success,setSuccess]=useState(false);
    function review(event){
        event.preventDefault();
        console.log(user);
        if(user && user.uid){
            // new service which need to push in server
            const newService={
                service_name:document.getElementById('name').value,
                service_image: document.getElementById('service_image').value,
                details: document.getElementById('details').value,
                service_price:document.getElementById('price').value,
            }
            
            console.log(newService)
            fetch('https://doctor-service-server-khaki.vercel.app/addService', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    
                },
                body: JSON.stringify(newService)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        setSuccess(true);
                    }
                })
                .catch(er => console.error(er));
    
        }
        else{
            navigate('/login')
            
        }
    }
    return (
        <div >
            <div className="block p-6 w-1/2 rounded-lg shadow-lg bg-white container mx-auto mt-28">
                <form onSubmit={(event)=>review(event)}>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
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
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                            placeholder="Service Name" required/>
                        </div>
                        <div className="form-group mb-6">
                        <input type="text" className="form-control block
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
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="service_image"
                            placeholder="Service Picture URL" required/>
                        </div>
                        <div className="form-group mb-6">
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
                        id="details"
                        rows="3"
                        placeholder="Details..."
                        required></textarea>
                        </div>
                        <div className="form-group mb-6">
                        <input type="text" className="form-control block
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
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="price"
                            placeholder="Service Price" required/>
                        </div>
                        
                        <button type="submit" className="
                        w-full
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Add Service</button>
                    </form>
                </div>
                <div className={`flex space-x-2 justify-center ${success?"block":"hidden"}`}>
                    <div className="bg-white shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block" id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
                        <div className=" bg-white flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
                        <p className="font-bold text-gray-500">Success!!!</p>
                        <div className="flex items-center">
                            
                            <button type="button" onClick={()=>{setSuccess(false); navigate(0)}} className=" btn-close box-content w-4 h-4 ml-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-mdb-dismiss="toast" aria-label="Close"></button>
                        </div>
                        </div>
                        <div className="p-3 bg-white rounded-b-lg break-words text-gray-700">
                        Service Added successfully
                        </div>
                    </div>
                    </div>
        </div>
    );
};

export default AddService;