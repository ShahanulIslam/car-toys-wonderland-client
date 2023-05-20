import { Link } from 'react-router-dom';

const Toys = ({ toy }) => {
    const { _id, seller, price,category, rating, name, quantity, picture } = toy;
    console.log(toy)
    return (
        <tr className='text-center'>
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
        </tr>
    );
};

export default Toys;