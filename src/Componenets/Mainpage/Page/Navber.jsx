import { NavLink } from "react-router-dom";


const Navber = () => {
    const Links= <>
   <NavLink className="mr-3" to="/"><li>Home</li></NavLink>
   <NavLink className="mr-3" to="/addservice"><li>About</li></NavLink>
   <NavLink className="mr-3" to="/signup"><li>Signup</li></NavLink>
   <NavLink className="mr-3" to="/login"><li>Login</li></NavLink>
   <NavLink to="/service"><li>Service</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline  btn-success">Service</a>
            </div>
        </div>
    );
};

export default Navber;