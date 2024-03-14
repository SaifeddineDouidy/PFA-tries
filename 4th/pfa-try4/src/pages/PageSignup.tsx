import { SetStateAction, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const PageSignup = () => {
  // Account Type Handling
  const [accountType, setAccountType] = useState('');
  // Student/Employee Handling Fields
  const [cin, setCin] = useState('');
  const [cne, setCne] = useState('');
  const [school, setSchool] = useState('');

  // Company Handling Fields
  const [firstName, setFirstName] = useState('');
  const [fullname, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [desiredRecruitments, setDesiredRecruitments] = useState('');

  const [linkAcc, setLinkAccount] = useState('');

  const handleAccountTypeChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
  };


 

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-[#000300]">
        <div className="relative flex flex-col mx-6 md:mx-auto md:max-w-xl">
          <div className="flex flex-col justify-center p-8 w-[500px] md:p-14 bg-white shadow-2xl rounded-2xl">
            <span className="mb-3 text-4xl font-bold">Sign up</span>
            <span className="font-light text-gray-400 mb-8">
              Welcome! Please select account type and enter your details
            </span>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="py-2">
                <span className="mb-2 text-md">Select Account Type:</span>
                <div className="flex items-center space-x-4">
                  <label>
                    <input
                      type="radio"
                      value="student"
                      checked={accountType === 'student'}
                      onChange={handleAccountTypeChange}
                    />
                    Student
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="company"
                      checked={accountType === 'company'}
                      onChange={handleAccountTypeChange}
                    />
                    Company
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="guest"
                      checked={accountType === 'guest'}
                      onChange={handleAccountTypeChange}
                    />
                    Guest
                  </label>
                </div>
              </div>
              {accountType === 'student' && (
                <>
                <div className="py-2">
                    <span className="mb-2 text-md">Full Name</span>
                    <input
                      type="text"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="name"
                      id="name"
                    />
                  </div>
                  
                  <div className="py-2">
                    <span className="mb-2 text-md">CIN</span>
                    <input
                      type="text"
                      value={cin}
                      onChange={(e) => setCin(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="cin"
                      id="cin"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">CNE</span>
                    <input
                      type="text"
                      value={cne}
                      onChange={(e) => setCne(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="cne"
                      id="cne"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Num Téléphone</span>
                    <input
                      type="text"
                      value={cne}
                      onChange={(e) => setCne(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="tel"
                      id="tel"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">School/University Name</span>
                    <input
                      type="text"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="school"
                      id="school"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Email/Username</span>
                    <input
                      type="text"
                      value={cin}
                      onChange={(e) => setCin(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Password</span>
                    <input
                      type="text"
                      value={cin}
                      onChange={(e) => setCin(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="password"
                      id="password"
                    />
                  </div>
                  <div className="py-2">
                <span className="mb-2 text-md">Upload CV</span>
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="cv"
                  id="cv"
                />
              </div>
              <div className="py-2">
                <span className="mb-2 text-md">Upload Additional Documents (Motivation Letter)</span>
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="additionalDocs"
                  id="additionalDocs"
                />
              </div>
                </>
              )}
              {accountType === 'company' && (
                <>
                  <div className="py-2">
                    <span className="mb-2 text-md">First Name</span>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="firstName"
                      id="firstName"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Last Name</span>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="lastName"
                      id="lastName"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Phone Number</span>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="phoneNumber"
                      id="phoneNumber"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Email</span>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Country/Region</span>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="country"
                      id="country"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Company Name</span>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="companyName"
                      id="companyName"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Company Size</span>
                    <input
                      type="text"
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="companySize"
                      id="companySize"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Job Title</span>
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="jobTitle"
                      id="jobTitle"
                    />
                  </div>
                  <div className="py-2">
                    <span className="mb-2 text-md">Desired Recruitments</span>
                    <input
                      type="text"
                      value={desiredRecruitments}
                      onChange={(e) => setDesiredRecruitments(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="desiredRecruitments"
                      id="desiredRecruitments"
                    />
                  </div>
                </>
              )}
              {accountType === 'guest' && (
                <>
                  <div className="py-2">
                    <span className="mb-2 text-md">Link to Account</span>
                    <input
                      type="text"
                      value={linkAcc}
                      onChange={(e) => setLinkAccount(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                      name="companySize"
                      id="companySize"
                    />
                  </div>
                </>
              )}
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
              >
                Submit
              </button>
              
              <div className="text-center text-gray-400">
                Already have an account ?{' '}
                <Link to="/login" className="font-bold text-black">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageSignup;
