import { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function App() {

    const [citizenship, setCitizenship] = useState('');
    const [passport, setPassport] = useState('');
    const [surname, setSurname] = useState('');
    const [value, setValue] = useState()
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [surnameError, setSurnameError] = useState('');
    
   
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
    };
    const handleSurnameChange = (event) => {
      const value = event.target.value;
      setSurname(value);
      if (!isValidName(value)) {
        setSurnameError('Please enter a valid surname.');
      } 
    };
  const handleCitizenshipChange = (event) => {
    setCitizenship(event.target.value);
  };
  const isValidName = (name) => {
    return /^[a-zA-Z\s]*$/.test(name);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <div className="border border-blue shadow-md overflow-hidden w-full md:w-4/5">
      <div className="flex flex-col top-0 md:flex-row bg-blue text-white justify-center">
            <h4 className="text-2xl  font-bold left-50 items-center ">Business Owner Details</h4>
          </div>
        <div className="flex flex-col md:flex-row bg-white p-8">
          <div className="w-full md:w-5/5">
            <form id="loginForm" >
            <div className="w-full md:w-3/5 bg-white p-8 relative ">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Owner Details</h3>
              <div className="form-group">
                <label htmlFor="profile_type" className="text-sm font-semibold text-gray-700">
                  Applicant Citizenship
                </label>
                <select
                  id="profile_type"
                  className="form-select mt-1 block  w-full   text-70 bg-gray-100  border focus:ring-0"
                  name="profile_type"
                  value={citizenship}
                  onChange={handleCitizenshipChange}
                  required
                >
                  <option value="">Select the Citizenship</option>
                  <option value="Rwandan">Rwandan</option>
                  <option value="Foreigner">Foreigner</option>
                </select>
              </div>
              {citizenship === 'Foreigner' && (
                <div className="form-group">
                  <label htmlFor="passport" className="text-sm font-semibold text-gray-700">
                    Passport Number
                  </label>
                  <input
                    id="passport"
                    className="form-input mt-1 block w-full  bg-gray-100 border-transparent focus:border-blue-500 focus:ring-0"
                    type="text"
                    placeholder="Passport Number"
                    name="passport"
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                    required
                
                  />
                </div>
              )}
                {citizenship === 'Rwandan' && (
                <div className="form-group">
                  <label htmlFor="passport" className="text-sm font-semibold text-gray-700">
                    ID Number
                  </label>
                  <input
                    id="passport"
                    className="form-input mt-1 block w-full  bg-gray-100 border-transparent focus:border-blue-500 focus:ring-0"
                    type="text"
                    placeholder="Enter your ID Number"
                    name="ID "
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                    required
                
                  />
                </div>
              )}

<div className=" flex flex-col mt-1 md:flex-row  space-x-4 md:space-x-4 ">
<div className="form-group">
                <label htmlFor="surname" className="text-sm font-semibold  text-gray-700">
                  Surname
                </label>
                <input
                  id="surname"
                  className="form-input mt-1 block w-full r bg-gray-100 border focus:ring-0"
                  type="text"
                  placeholder="Surname"
                  name="surname"
                  value={surname}
                  onChange={handleSurnameChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="other" className="text-sm focus:bg-gray font-semibold text-gray-700">
                  Other Names
                </label>
                <input
                  id="other"
                  className="form-input mt-1 block w-full  bg-gray-100  border hover:bg-gray focus:ring-0"
                  type="text"
                  placeholder="Other Names"
                  name="other"
                  required
                />
              </div>
  </div>
              <div className="flex flex-col md:flex-row  md:space-x-4">
                <div className="form-group flex-grow">
                  <label htmlFor="number" className="text-sm  font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
                </div>
                <div className="form-group flex-grow">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    className="form-input mt-1 block w-full  bg-gray-100 border focus:border-blue-500 focus:ring-0"
                    type="email"
                    placeholder="enter your Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row  md:space-x-4">
               
                <div className="form-group flex-grow">
                  <label htmlFor="nationality" className="text-sm font-semibold text-gray-700">
                    Nationality
                  </label>
                  <input
                    id="nationality"
                    className="form-input mt-1 block w-full  bg-gray-100 border focus:border-blue-500 focus:ring-0"
                    type="email"
                    placeholder="enter your nationality"
                    name="nationality"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mt-3 text-gray-800 mb-2">Business Owner Address</h3>
                <div className="form-group">
                  <label htmlFor="province" className="text-sm font-semibold text-gray-700">
                    Province
                  </label>
                  <select
                    id="province"
                    className="form-select mt-1 block w-full  bg-gray-100 border  focus:ring-0"
                    name="province"
                    required
                  >
                    <option value="">Select the province</option>
                    <option value="Kigali">Kigali</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                  </select>
                </div>
              </div>
              </div>
              <div className="flex flex-col  md:flex-row bg-blue text-white justify-center">
            <button className="text-lg  font-bold left-50 items-center justify-center">Submit</button>
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
