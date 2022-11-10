import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const AddService = () => {
    const [user,setUser]=useContext(UserContext);
    const navigate=useNavigate();
    const location=useLocation();
    const review=()=>{
        console.log(user);
        if(user && user.uid){
            const newService={
                service_name:document.getElementById('name').value,
                service_image: document.getElementById('service_image').value,
                details: document.getElementById('details'),
                service_price:document.getElementById('price').value,
            }
            
            console.log(newService)
            fetch('http://localhost:5000/addService', {
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
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form>
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block
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
                            placeholder="Service Name"/>
                        </div>
                        <div class="form-group mb-6">
                        <input type="text" class="form-control block
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
                            placeholder="Service Picture URL"/>
                        </div>
                        <div class="form-group mb-6">
                        <textarea
                        class="
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
                        ></textarea>
                        </div>
                        <div class="form-group mb-6">
                        <input type="text" class="form-control block
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
                            placeholder="Service Price"/>
                        </div>
                        <div class="form-group form-check text-center mb-6">
                        
                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
                        </div>
                        <button type="submit" class="
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
        </div>
    );
};

export default AddService;