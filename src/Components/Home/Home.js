import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'tw-elements';

const Home = () => {
    const services=useLoaderData();
    function showall(){
        document.getElementById('btnshow').classList.add('hidden')
        document.getElementById('serviceDefault').classList.remove('grid-rows-1');
        document.getElementById('serviceDefault').classList.add('grid-rows-2');
    }
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                    <img
                        src={'./images/1.jpg'}
                        className="block w-full"
                        alt="not found"
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        {/* <h5 className="text-xl">First slide label</h5> */}
                        {/* <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <img
                        src={'./images/2.jpg'}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        {/* <h5 className="text-xl">Second slide label</h5> */}
                        {/* <p>Some representative placeholder content for the second slide.</p> */}
                    </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <img
                        src={"./images/3.jpg"}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        {/* <h5 className="text-xl">Third slide label</h5> */}
                        {/* <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto my-10">
                    <h3 class="text-7xl font-bold mb-6 text-gray-800">Services</h3>
                </div>
                <div className="container mx-auto my-10 grid grid-rows-1 gap-4 grid-flow-col flex justify-content-between" id="serviceDefault">
                {services.map((service)=>{
                    return (
                        
                            <div className="rounded-lg shadow-lg bg-white max-w-sm" >
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img className="rounded-t-lg w-full h-1/2" src={service.service_image}  alt=""/>
                                </a>
                                <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{service.service_name}</h5>
                                <p class="text-gray-700 text-left text-base mb-4">{service.details.substring(0,100)} <Link to={`/services/${service.service_id}`}><span className='text-blue-500'>Read more...</span></Link></p>
                                <h5 className="text-gray-900 font-medium mb-2 text-left">Price: {service.service_price}</h5>
                                <Link to={`/services/${service.service_id}`}><button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show Details</button></Link>
                                </div>
                            </div>       
                    );
                })}
                </div>
                <Link to='/services'>
                    <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        id="btnshow"
                        onClick={showall}
                    >See All</button>
                </Link>
                
        </div>
    );
};

export default Home;