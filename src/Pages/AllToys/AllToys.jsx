import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';

const Alltoys = () => {

    const allToys = useLoaderData();
    const [limit, setLimit] = useState(20);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const updatedFilteredToys = allToys.filter((toy) => {
            const name = toy.name || ''; // Provide a default empty string if the toyName property is undefined
            return name.toLowerCase().includes(search.toLowerCase());
        });
        setFilter(updatedFilteredToys);
    }, [allToys, search]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value, 10));
    };

    const displayedToys = filter.slice(0, limit);

  

    return (

        <div>
            <h1 className="text-4xl">Your bookings {displayedToys.length}</h1>
            <div className="overflow-x-auto w-full">

                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Search by Toy Name"
                        className="border rounded px-4 py-2"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="limitSelect" className="mr-2">
                        Show:
                    </label>
                    <select
                        id="limitSelect"
                        className="border rounded px-4 py-2"
                        value={limit}
                        onChange={handleLimitChange}
                    >
                        {/* <option value={10}>10</option> */}
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                </div>

                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedToys.map((toy) => (
                            <Toys key={toy._id} toy={toy} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alltoys;