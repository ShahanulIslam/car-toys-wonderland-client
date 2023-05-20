import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();

    return (
        <div>
            <h2>This is details </h2>
        </div>
    );
};

export default Details;