import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {

    const { _id, seller, price, category, rating, name, quantity, picture } = toy;
    return (
        <tr className='text-center'>
            <td>
                <button className="btn-circle btn bg-[#e6c6d8] border-0 text-black hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <figure className='avatar rounded w-40 h-24'>
                    <img src={picture} alt="" />
                </figure>

            </td>
            <td>
                {seller}
            </td>
            <td>
                {name}
            </td>
            <td>{category}</td>
            <td> {price}</td>
            <td>{quantity}</td>
            <th className='text-center'>
                <Link to={`/alltoys/${_id}`}><button className='btn bg-[#e6c6d8] border-0 text-black hover:text-white'>View Details</button></Link>
            </th>
            <th className='text-center'>
                <Link><button className='btn bg-[#e6c6d8] border-0 text-black hover:text-white'>Update</button></Link>
            </th>
        </tr>
    );
};

export default Toy;