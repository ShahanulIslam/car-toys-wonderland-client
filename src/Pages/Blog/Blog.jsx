import useTitle from "../../hooks/useTitle";


const Blog = () => {
    useTitle("Blog")
    return (
        <div className="my-10">
            <div className="bg-gray-200 px-4 py-8 md:px-8">
                <h1 className="text-3xl text-center font-bold mb-8">Blogs</h1>
                <div className="max-w-xl mx-auto">
                    <div className="bg-white p-6 rounded-lg mb-6">
                        <h2 className="text-xl font-bold mb-4">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p className="text-gray-700">
                            An access token is a credential that is used to authorize and authenticate a client to access protected resources on a server. It is typically a JSON web token (JWT) that contains information about the user and their permissions. <br /> A refresh token is a token that is used to obtain a new access token without requiring the user to re-authenticate. It is usually longer-lived than an access token.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg mb-6">
                        <h2 className="text-xl font-bold mb-4">2. Compare SQL and NoSQL databases?</h2>
                        <p className="text-gray-700">
                            SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database systems. <br />
                           <span className="font-semibold"> SQL:</span>
                            <li>
                                SQL databases use a structured data model based on tables with predefined schemas. They follow a rigid structure where data is organized into rows and columns.
                            </li>
                            <li>
                                SQL databases typically scale vertically by adding more resources to a single server. Vertical scaling has limits in terms of hardware capabilities and can be expensive.
                            </li>
                            <span className="font-semibold">NoSQL:</span>
                            <li>
                                NoSQL databases use a flexible data model, often referred to as schema-less. They can store data in various formats like key-value pairs, documents, graphs, or wide-column stores.
                            </li>
                            <li>
                                NoSQL databases are designed to scale horizontally by distributing data across multiple servers. They offer better scalability and can handle large volumes of data and high traffic loads.
                            </li>

                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg mb-6">
                        <h2 className="text-xl font-bold mb-4">3. What is Express.js? What is Nest.js?</h2>
                        <p className="text-gray-700">
                            Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js offers a range of features, including routing, middleware support, and template engines. It is known for its minimalistic and unopinionated design, allowing developers to have more control over their applications structure and functionality. <br />
                            Nest.js, on the other hand, is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built on top of Express.js and provides a higher level of abstraction with its modular architecture and support for TypeScript. Nest.js incorporates concepts from Angular, such as decorators and dependency injection, to enhance developer productivity and code maintainability. It is well-suited for building enterprise-grade applications.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">4. What is MongoDB aggregate and how does it work?</h2>
                        <p className="text-gray-700">
                            MongoDBs aggregate is a powerful aggregation framework that allows for advanced data processing and analysis. It provides a way to perform complex queries, transformations, and aggregations on MongoDB collections.
                            The aggregation pipeline in MongoDB consists of multiple stages, each representing a transformation step. The stages can include operations like filtering, sorting, grouping, projecting, and joining. Aggregation pipelines can be composed of one or more stages to achieve the desired data manipulation.The aggregation framework leverages the power of native MongoDB operators and expressions to perform calculations, transformations, and aggregations on the data. It allows for grouping, counting, summing, averaging, and many other operations to generate meaningful insights from the data stored in MongoDB.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;