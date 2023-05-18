import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-5">
            <div className="hero-content flex ">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-5">
                    <h1 className="text-4xl font-bold text-center">Login now!</h1>
                    <from className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </from>
                    <p>New to Toy car wonderland? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;