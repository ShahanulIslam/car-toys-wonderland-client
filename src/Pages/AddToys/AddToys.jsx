import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToys = () => {
    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const seller = form.sellerName.value;
        const seller_email = form.email.value;
        const category = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.rating.value;
        const description = form.rating.value;
        const addToy = {
            category, picture, name, price, rating, quantity, seller, description, seller_email
        }
        console.log(addToy)
        fetch("http://localhost:3500/carToys", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged == true)
                    {
                    // toast("Added product successfully")
                }
            })
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <form onSubmit={handleAddToy} className="card-body">
                <div className="flex w-3/5 mx-auto gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Picture URL of the toy</span>
                        </label>
                        <input type="text" required placeholder="Picture URL" name="picture" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" required placeholder="Name" name="name" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex w-3/5 mx-auto gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" placeholder="Seller Name" name="sellerName" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" placeholder="Seller Email" name="email" className="input input-bordered" />
                    </div>
                </div >
                <div className="flex w-3/5 mx-auto gap-4 ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" required placeholder="Sub-category" name="subcategory" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" required placeholder="Price" name="price" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex w-3/5 mx-auto gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" required placeholder="Quantity" name="quantity" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control w-3/5 mx-auto">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <textarea placeholder="Description" name="description" className="textarea textarea-bordered"></textarea>
                </div>
                <div className="form-control mt-6 w-3/5 mx-auto">
                    <input className="btn bg-[#e6c6d8] border-0 text-black hover:text-white" type="submit" value="Add Toy" />
                </div>
            </form>
        </div>

    );
};

export default AddToys;