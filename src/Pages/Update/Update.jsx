import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const toy = useLoaderData();
    const { _id, seller, price, category, rating, seller_email, name, quantity, description, picture } = toy
    console.log(toy)

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToy = {
            picture, name, price, quantity, description,
        }
        console.log(updateToy);
        fetch(`http://localhost:3500/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleUpdateToy} className="card-body">
                <div className="flex w-3/5 mx-auto gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Picture URL of the toy</span>
                        </label>
                        <input type="text" defaultValue={picture} required placeholder="Picture URL" name="picture" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" required placeholder="Name" defaultValue={name} name="name" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex w-3/5 mx-auto gap-4 ">

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" required defaultValue={price} placeholder="Price" name="price" className="input input-bordered" />
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" defaultValue={quantity} required placeholder="Quantity" name="quantity" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control w-3/5 mx-auto">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <textarea placeholder="Description" defaultValue={description} name="description" className="textarea textarea-bordered"></textarea>
                </div>
                <div className="form-control mt-6 w-3/5 mx-auto">
                    <input className="btn bg-[#e6c6d8] border-0 text-black hover:text-white" type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default Update;