import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Categories = () => {
  const { user } = useContext(AuthContext);
  const toys = useLoaderData();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    });
  }, []);
  
  // Get unique categories
  const categories = ['All', ...new Set(toys.map((toy) => toy.category))];

  return (
    <div>
      <div className='text-center my-3'>
        <h2 className="text-3xl font-bold mb-6">Categories</h2>
        <p className="text-lg text-gray-600 mb-6">Browse through different categories of toys</p>
      </div>
      <Tabs>
        <TabList className="flex flex-wrap">
          {categories.map((category) => (
            <Tab
              key={category}
              className={`px-4 py-2 mr-2 rounded-md cursor-pointer mb-2 ${activeCategory === category ? 'bg-blue-500 text-white' : ''
                }`}
              selectedClassName="bg-[#e6c6d8] border-0 text-black hover:text-white"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Tab>
          ))}

        </TabList>
        {categories.map((category) => (
          <TabPanel key={category} data-aos="zoom-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {toys
                .filter((toy) => category === 'All' || toy.category === category)
                .map((toy) => (
                  <div key={toy._id} className="bg-white p-4 rounded-md shadow-md relative">
                    <img src={toy.picture} className="w-full h-60" />
                    <div className='space-y-3'>
                      <h3 className="text-lg font-bold mt-2">{toy.name}</h3>
                      <p className="text-gray-600">Price: {toy.price}</p>
                      <p className="text-gray-600">Rating: {toy.rating}</p>
                    </div>
                    <div className='text-end'>
                      {user ? (
                        <Link to={`/categories/${toy._id}`}>
                          <button className="bg-[#e6c6d8] border-0 text-black px-4 py-2 rounded-md mt-4">View Details</button>
                        </Link>
                      ) : (
                        <Link to={`/categories/${toy._id}`}>
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
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Categories;
