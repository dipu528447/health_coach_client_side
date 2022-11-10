import React from 'react';

const Blogs = () => {
    return (
        <div>
            
            <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            <h2 className="font-semibold text-3xl mb-5 text-left">Blog 1: Difference between SQL and NoSQL</h2>
                <h1 className='text-left'>SQL</h1>
                <p className='text-left'>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage.
                These databases are best suited for complex queries.It is vertically Scalable and follows ACID property. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.
                </p>
                <hr className="my-6 border-gray-300" />
                <h1 className='text-left'>NoSQL</h1>
                <p className='text-left'>Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage.
                These databases are not so good for complex queries. It is horizontally Scalable and follows CAP property. Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                </p>
            </div>

            <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
            <h2 className="font-semibold text-3xl mb-5 text-left">Blog 2: What is JWT, and how does it work?</h2>
                
                <p className='text-left'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p>
                <hr className="my-6 border-gray-300" />
                <h1 className='text-xl text-left'>How it Works?</h1>
                <p className='text-left'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                <ul className='text-left list-decimal ml-5'>
                    <li>User sign-in using username and password or google/facebook.</li>
                    <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                    <li>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                    <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                </ul>
                <hr className="my-6 border-gray-300" />
                
            </div>
        </div>
    );
};

export default Blogs;