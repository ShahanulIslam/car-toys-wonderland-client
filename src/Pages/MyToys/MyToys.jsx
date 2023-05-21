import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Toy from './Toy';
import Swal from 'sweetalert2';
import useTitle from '../../Hook/useTitle';

const MyToys = () => {
    useTitle("My Toys")
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [control, setControl] = useState(true)

    useEffect(() => {
        fetch(`https://toy-car-wonderland-server.vercel.app/myToys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [control]);

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-car-wonderland-server.vercel.app/myToys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            setControl(!control)
                            Swal.fire(
                                'Deleted!',
                                'Your Toy deleted successfully.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>
                                    Delete
                            </th>
                            <th>Image</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <Toy
                                key={toy._id}
                                toy={toy}
                                handleDelete= {handleDelete}
                            ></Toy>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;