import React from 'react';

const Gallery = () => {
    return (
        <div className='my-24'>
            <h1 className='text-5xl text-center'>Gallery</h1>
            <hr className='mt-10'></hr>
            <section className="overflow-hidden text-gray-700">
                <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwdHJhaW5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.unsplash.com/photo-1578971102567-916960872844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        </div>
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHlvZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHlvZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.unsplash.com/photo-1645005512942-ebb840398a6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRjYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    );
};

export default Gallery;