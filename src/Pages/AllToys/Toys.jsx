import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Toys = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { _id, seller, price, category, name, quantity, picture } = toy;

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
                {user ? (
                    <Link to={`/alltoys/${_id}`}><button className='btn bg-[#e6c6d8] border-0 text-black hover:text-white'>View Details</button></Link>
                ) : (
                    <Link to={`/alltoys/${_id}`}>
                        <button
                            className="bg-[#e6c6d8] border-0 text-black px-4 py-2 rounded-md mt-4"
                            onClick={() => {
                                Swal.fire({
                                    icon: "error",
                                    title: "Please login first",
                                    showConfirmButton: false,
                                    timer: 3000,
                                });
                            }}
                        >
                            View Details
                        </button>
                    </Link>
                )}
            </th>
        </tr>
    );
};

export default Toys;