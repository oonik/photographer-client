import React, { useContext } from 'react';
import login from '../../assets/login/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scen-removebg-previ.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(err =>{
            console.error(err);
        })
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 sm:flex-col lg:flex-row">
                <div className="text-center">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 max-w-sm w-full shadow-2xl bg-base-100 py-8">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>don't have an account ? <Link to='/signup' className='text-blue-600'>sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;