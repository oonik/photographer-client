import React from 'react';

const Blog = () => {
    return (
        <div className='my-10 border p-10 rounded'>
             <h1 className='text-3xl font-bold text-center mb-5'>Blog page</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between sql and nosql ?
                </div>
                <div className="collapse-content">
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables, with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;