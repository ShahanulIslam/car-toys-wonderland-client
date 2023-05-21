import { Link } from "react-router-dom";
import img from "../../assets/img/404.png"
import useTitle from "../../Hook/useTitle";

const NotFound = () => {
    useTitle("Not Found")
    return (
        <div className='h-[450px] mt-36'>
            <div className='flex justify-center items-center text-8xl font-bold'>
                <div>4</div>
                <div><img className='w-20' src={img} alt="" /></div>
                <div>4</div>
            </div>
            <h1 className='text-4xl text-center mt-5 font-semibold'>Page is not found</h1>

            <div className="text-center my-5">
                <Link to="/"><button className="btn btn-primary">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;