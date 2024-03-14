import Navbar from '@/components/Navbar';
import { useState } from 'react';

const PageSignUp2 = () => {
  const [accountType, setAccountType] = useState('');

  return (
    <><Navbar />
    <div className="flex items-center justify-center p-8  md:p-14 bg-white shadow-2xl rounded-2xl">
    <form className='rounded w-full p-12 bg-white space-y-8'>
          <label htmlFor="account-type" className="block text-sm font-medium leading-6 text-gray-900 ">
              Select Account Type:
          </label>
          <select
              id="account-type"
              name="account-type"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
          >
              <option value="">Select...</option>
              <option value="student">Student/Employee</option>
              <option value="company">Company</option>
              <option value="guest">Guest</option>
          </select>
          <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
          </div>

          {accountType === 'student' && (
              <div>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                              First name
                          </label>
                          <div className="mt-2">
                              <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                              Last name
                          </label>
                          <div className="mt-2">
                              <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>

                      <div className="sm:col-span-4">
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                              Email address
                          </label>
                          <div className="mt-2">
                              <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                              Country
                          </label>
                          <div className="mt-2">
                              <select
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                  <option>Morocco</option>
                                  <option>USA</option>
                                  <option>UK</option>
                                  <option>France</option>
                                  <option>Spain</option>

                              </select>
                          </div>
                      </div>

                      <div className="col-span-full">
                          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                              Street address
                          </label>
                          <div className="mt-2">
                              <input
                                  type="text"
                                  name="street-address"
                                  id="street-address"
                                  autoComplete="street-address"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                              City
                          </label>
                          <div className="mt-2">
                              <input
                                  type="text"
                                  name="city"
                                  id="city"
                                  autoComplete="address-level2"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>

                      <div className="sm:col-span-2">
                          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                              State / Province
                          </label>
                          <div className="mt-2">
                              <input
                                  type="text"
                                  name="region"
                                  id="region"
                                  autoComplete="address-level1"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>

                      <div className="sm:col-span-2">
                          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                              ZIP / Postal code
                          </label>
                          <div className="mt-2">
                              <input
                                  type="text"
                                  name="postal-code"
                                  id="postal-code"
                                  autoComplete="postal-code"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[indigo]-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>
                  </div>
              </div>

          )}

          {accountType === 'company' && (
              <div>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                              First name
                          </label>
                          <div className="mt-2">
                              <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                              Last name
                          </label>
                          <div className="mt-2">
                              <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>

                      <div className="sm:col-span-4">
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                              Professional Email address
                          </label>
                          <div className="mt-2">
                              <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                              Country
                          </label>
                          <div className="mt-2">
                              <select
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                  <option>Morocco</option>
                                  <option>USA</option>
                                  <option>UK</option>
                                  <option>France</option>
                                  <option>Spain</option>

                              </select>
                          </div>
                      </div>

                      <div className="col-span-full">
                          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                              Company Name
                          </label>
                          <div className="mt-2">
                              <input
                                  type="text"
                                  name="street-address"
                                  id="street-address"
                                  autoComplete="street-address"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                              Company size
                          </label>
                          <div className="mt-2">
                              <select
                                  id="company_size"
                                  name="company_size"
                                  autoComplete="company_size"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                  <option value="1-10 employees">1-10 employees</option>
                                  <option value="11-50 employees">11-50 employees</option>
                                  <option value="51-200 employees">51-200 employees</option>
                                  <option value="201-500 employees">201-500 employees</option>
                                  <option value="501-1000 employees">501-1000 employees</option>
                                  <option value="1001-5000 employees">1001-5000 employees</option>
                                  <option value="5000+ employees">5000+ employees</option>

                              </select>
                          </div>
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                              Company role
                          </label>
                          <div className="mt-2">
                              <select
                                  id="company_role"
                                  name="company_role"
                                  autoComplete="company_role"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                  <option value="">Intitulé de poste...</option><option value="Recruiter">Recruteur</option><option value="Manager">Responsable</option><option value="Director">Directeur</option><option value="Vice President">Vice-président</option><option value="C Suite">Cadre dirigeant</option><option value="NULL">Autre</option>

                              </select>
                          </div>
                      </div>
                  </div>
              </div>
          )}

          {accountType === 'guest' && (
              <div>
                  {/* Champs pour les invités */}
              </div>
          )}

          <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                  Cancel
              </button>
              <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                  Save
            </button>
          </div>
        </form>
      </div>
      </>
  )
}

export default PageSignUp2;
