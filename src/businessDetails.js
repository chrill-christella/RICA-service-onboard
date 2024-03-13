

function businessDetails() {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen space-x-0 md:space-x-0">
      <div className="border border-blue shadow-md overflow-hidden w-full md:w-4/5">
      <div className="flex flex-col top-0 md:flex-row bg-blue text-white">
            <h4 className="text-lg  font-semibold flex items-center justify-center">Business Details</h4>
          </div>
          <div className="flex flex-col md:flex-row bg-white p-8">
          <div className="w-full md:w-5/5 md-6">
          <form id="loginForm">
            <div className="form-group">
              <label htmlFor="profile_type" className="text-2xl font-bold text-gray-700">
                Business Details
              </label>
              <div  className="flex flex-row space-x-8 ">
              <div className="form-group flex-grow">
                <label htmlFor="number" className="text-sm font-semibold text-gray-700">
                  Business type
                </label>
                <select
                id="profile_type"
                className="form-select mt-1 block w-full  bg-white border focus:ring focus:ring-yellow focus:ring-opacity-50"
                name="profile_type"
                required
              >
                <option value="">Select Business Type</option>
                <option value="Rwandan">Retailer</option>
                <option value="Foreigner">Wholesale</option>
                <option value="Foreigner">Manufacturer</option>
              </select>
              </div>
              <div className="form-group flex-grow">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Company name
                </label>
                <input
                  id="email"
                  className="form-input mt-1 block w-full  bg-white border focus:border-yellow focus:ring focus:ring-yellow focus:ring-opacity-50"
                  type="text"
                  placeholder="company name*"
                  
                  required
                />
              </div>
              </div>

              <div  className="flex flex-row space-x-8">
              <div className="form-group flex-grow">
                <label htmlFor="number" className="text-sm font-semibold text-gray-700">
                  TIN number
                </label>
                <input
                  id="TIN-number"
                  className="form-input mt-1 block w-full  bg-white border focus:ring focus:ring-yellow focus:ring-opacity-50"
                  type=" number "
                  placeholder="Enter your TIN number"
                  name="TIN"
                  minLength={9}
                  required
                />
              </div>
              <div className="form-group flex-grow">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Registration Date
                </label>
                <input
                  id="registration date"
                  className="form-input mt-1 block w-full bg-white border-gray-300 border focus:ring focus:ring-yellow focus:ring-opacity-50"
                  type=" date"
                  placeholder="check Date"
                  name="date"
                  required
                />
              </div>
              </div>
            </div>
           
          

          <div>
            <h3>Business owner Address</h3>
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Province
              </label>
              <select
                id="profile_type"
                className="form-select mt-1 block w-full  bg-white border-gray-300 border focus:ring focus:ring-yellow focus:ring-opacity-50"
                name="profile_type"
                required
              >
                <option value="">Location</option>
                <option value="Kigali">Kigali</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East">East</option>
                <option value="West">West</option>
              </select>
          </div>
          <div className="flex flex-col mt-8 md:flex-row bg-blue text-white justify-center">
            <button className="text-lg  font-bold left-50 items-center justify-center">Submit</button>
          </div>
          </form>
        </div>
        </div>
        </div>      
    </div>

  );
}

export default businessDetails;
