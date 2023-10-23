
import { Link } from 'react-router-dom';
import logo from './../../../assets/images/login/login.svg';
const Signup = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left w-1/2 mr-10">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
                    <h1 className="text-5xl p-4 font-bold">Register</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="test" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                           
                            <p className='text-base mt-3'>Have an Account  <Link href="" className='text-green-600' to='/login'>Login</Link></p>
                        </div>
                        <div className="form-control mt-6">
                        <input className='btn btn-success' type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;