import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const displayName = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password)

        createUser(email, password, displayName, photoUrl)
            .then((result) => {
                // User created successfully, update profile
                const loggedUser = result.user;
                return updateProfile(loggedUser, {
                    displayName: displayName,
                    photoURL: photoUrl,
                }).then(() => {
                    console.log(loggedUser);
                    toast.success("User registered successfully")
                    form.reset();
                });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                toast.success("User registered successfully")
            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <ToastContainer></ToastContainer>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold my-5">Register Here</h1>
                </div>
                <div className="card flex-shrink-0 p-7 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
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
                            <button className="btn btn-info text-white">Register</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="form-control mx-6">

                        <button onClick={handleGoogleLogin} className="btn btn-info text-white"><FaGoogle size={15} className="mr-2"></FaGoogle> Google Sign-in</button>
                    </div>
                    <p className="text-center my-3"><small>Already have an account? <Link to="/login">Login</Link> </small></p>
                </div>
            </div>
        </div>

    );
};

export default Register;