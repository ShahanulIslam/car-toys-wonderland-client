import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';
import useTitle from '../../Hook/useTitle';

const Alltoys = () => {
    useTitle("All Toys")
    const allToys = useLoaderData();
    const [limit, setLimit] = useState(20);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const updatedFilteredToys = allToys.filter((toy) => {
            const name = toy.name || '';
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
            <div className="overflow-x-auto w-full">
                <div className="mt-4 text-center">
                    <input
                        type="text"
                        placeholder="Search by Toy Name "
                        className="border rounded px-4 py-2"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <div className="my-6 text-end">
                    <label htmlFor="limitSelect" className="mr-4">
                        Show By Limit:
                    </label>
                    <select
                        id="limitSelect"
                        className="border rounded px-4 py-2"
                        value={limit}
                        onChange={handleLimitChange}
                    >
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>Image</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View</th>
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