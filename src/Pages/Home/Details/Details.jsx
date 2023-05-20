import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const { description, name, picture, price, quantity, rating, seller,seller_email } = details;

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 flex items-center justify-center">
                    <img src={picture} alt={name} className="max-w-md rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 px-6 py-8 lg:py-0">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">{name}</h1>
                    <div className="space-y-3">
                        <p className="font-semibold">Seller Name : {seller}</p>
                        <p className="font-semibold">Seller Email : {seller_email}</p>
                        <p className="font-semibold">Price : {price}</p>
                        <p className="font-semibold">Available Quantity : {quantity}</p>
                        <p className="font-semibold">Ratings : {rating}</p>
                        <p className="font-semibold">Description : {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
