import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold my-5">Register Here</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" required className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Register</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <button className="btn btn-primary text-white">Google Sign-in</button>
                        </div>
                        <p><small>Already have an account? <Link to="/login">Login</Link> </small></p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;