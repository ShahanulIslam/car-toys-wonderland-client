import star from "../../../assets/img/star.png"

const Newsletter = () => {
    return (
        <div className="py-4 mb-20">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Newsletter</h2>
                <p className="text-lg text-gray-500">
                    Subscribe now and avail offers. Your email is safe with us.
                </p>
            </div>
            <div>
                <img className="mx-auto" src={star} alt="" />
            </div>
            <div className="text-center">
                <input className="py-2 w-80 border-b-2  border-black" type="email" name="" placeholder="Your email address" id="" />
                <button className="btn mx-3 bg-[#e6c6d8] border-0 text-black hover:text-white">
                    Submit
                </button>
            </div>

        </div>
    );
};

export default Newsletter;