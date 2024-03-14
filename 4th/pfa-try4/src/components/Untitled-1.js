import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
const PageSignup = () => {
  return (
    <>
    <Navbar/>
    <div className=" flex items-center justify-center min-h-screen bg-[#000300]">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Sign up</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome! Please enter your details
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Full Name</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="name"
              id="name"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">CIN</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="cin"
              id="cin"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">CNE</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="cne"
              id="cne"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Adresse</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="adresse"
              id="adresse"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">CV</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="cv"
              id="cv"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">CV</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="cv"
              id="cv"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Email/Username</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="password"
              id="password"
            />
          </div>
          
          
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign Up
          </button>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            <FaGoogle className="w-4 h-4 inline mr-3 mt-[-3.5px]" />
            Sign Up with Google
          </button>
          <div className="text-center text-gray-400">
            Already have an account ?
            <Link to="/signup" className="font-bold text-black"> Login</Link>
          </div>
        </div>
        </div>
      </div>
    
    <Footer/>
    </>
  )
}

export default PageSignup
