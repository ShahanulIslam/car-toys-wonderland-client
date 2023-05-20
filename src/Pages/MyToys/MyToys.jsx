import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Toy from './Toy';


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    const url = (`http://localhost:3500/myToys?email=${user.email}`)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>
                                <label>
                                    Delete
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <Toy
                                key={toy._id}
                                toy={toy}
                            ></Toy>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;