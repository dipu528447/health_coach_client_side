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

            
        </div>
    );
};

export default Blogs;