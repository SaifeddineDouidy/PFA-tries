import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-slate-900 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='text-left text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex ml-0 md:ml-[110px] flex-grow justify-center'>
        <Link className='p-4' to={'/'}>Home</Link>
        <Link className='p-4' to={'/about'}>About</Link>
        <Link className='p-4' to={'/contact'}>Contact</Link>
      </ul>
      <div className="space-x-5 hidden md:flex">
        <Link to={'/signup'}><button className="bg-white text-black px-5 py-2 rounded font-bold">Sign Up</button></Link>
        <Link to={'/login'}><button className="border px-5 py-2 rounded font-bold">Login</button></Link>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-64 h-full bg-slate-900 z-50 pt-24 transition-transform duration-300 ease-in-out transform translate-x-0' : 'fixed -left-full top-0 w-64 h-full bg-slate-900 z-50 pt-24 transition-transform duration-300 ease-in-out transform -translate-x-full'}>
        <div className="flex flex-col h-full justify-between">
          <div>
            <h1 className='w-full text-left text-3xl font-bold m-4 text-[#00df9a]'>LOGO.</h1>
            <ul className='p-4 uppercase lg:hidden'>
              <Link className='block p-4 border-b border-gray-600 text-white hover:text-[#00df9a]' to={'/'}>Home</Link>
              <Link className='block p-4 border-b border-gray-600 text-white hover:text-[#00df9a]' to={'/about'}>About</Link>
              <Link className='block p-4 text-white hover:text-[#00df9a]' to={'/contact'}>Contact</Link>
            </ul>
          </div>
          <div className="flex flex-col items-center mb-4">
            <Link to={'/signup'}><button className="block w-full bg-white text-black px-5 py-2 rounded font-bold mb-2">Sign Up</button></Link>
            <Link to={'/login'}><button className="block w-full border text-white border-white px-5 py-2 rounded font-bold">Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
