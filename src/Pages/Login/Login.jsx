import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../Hook/useTitle";


const Login = () => {

    useTitle("Login")
    const { signIn, googleLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success("User logged in successfully!!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                toast.success("User logged in successfully!!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200 my-5">
            <ToastContainer></ToastContainer>
            <div className="hero-content flex ">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-4">
                    <h1 className="text-4xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" required placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required placeholder="password" name="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#e6c6d8] border-0 text-black hover:text-white" type="submit" value="Login" />
                        </div>
                        <p className="text-center"><small>New to Toy car wonderland? <Link to="/register">Register</Link></small></p>
                    </form>
                    <div className="divider mt-0">OR</div>
                    <div className="form-control mx-6 ">
                        <button onClick={handleGoogleLogin} className="btn bg-[#e6c6d8] border-0 text-black hover:text-white"><FaGoogle size={15} className="mr-2"></FaGoogle> Google Sign-in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;