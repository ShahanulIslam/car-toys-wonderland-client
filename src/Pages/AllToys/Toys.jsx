import { Link } from 'react-router-dom';

const Toys = ({toy}) => {
    const { _id, seller,price, rating, name, quantity, picture } = toy;
    console.log(toy)
    return (
        <tr className='text-center'>

            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {<img src={picture} />}
                    </div>
                </div>
            </td>
            <td>
                {seller}
            </td>
            <td>
                {name}
            </td>
            <td>{quantity}</td>
            <td> {price}</td>
            <td>{rating}</td>
            <th className='text-center'>
                <Link to={`/alltoys/${_id}`}><button className='border-0 btn btn-outline'>View Details</button></Link>
            </th>
        </tr>
    );
};

export default Toys;