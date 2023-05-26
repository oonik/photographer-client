import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/58c7ba055dc65de2adca7dc9621a5af4.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
      
     const handleLogout = ()=>{
        logOut()
        .then(()=>{

        })
        .catch(err =>{
          console.error(err);
        })
     }
    const menuItems = <>
      <li><Link to='/'>Home</Link></li>
      
     <li><Link to='/myReview'>My review</Link></li>
       
      {
        user?.email ? 
        <li className='font-semibold'>
            <>
            <button onClick={handleLogout} className=' btn-ghost'>Sign Out</button>
            <p className='text-end'>{user.email}</p>
            </>
         </li>
         :
         <li><Link to='/login'>Login</Link></li>  
      }

      
      
    </>
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link className=" normal-case text-xl">
            <img className='h-20 w-40' src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    );
};

export default Header;