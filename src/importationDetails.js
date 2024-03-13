import './App.css';

function importationDetails() {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen space-x-0 md:space-x-0">
      <div className="border border-blue shadow-md overflow-hidden w-full md:w-3/5">
      <div className="flex flex-col top-0 md:flex-row bg-blue text-white">
            <h4 className="text-lg  font-semibold flex items-center justify-center">Product Importation</h4>
          </div>
          <div className="flex flex-col md:flex-row bg-white p-8">
          <div className="w-full md:w-5/5 md-6">
          <form id="loginForm">
           
               <div className="form-group flex-grow">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Purpose of Importation
                </label>
                <select
                id="profile_type"
                className="form-select mt-1 block w-full bg-white border focus:ring focus:ring-yellow focus:ring-opacity-50"
                name="profile_type"
                required
              >
                <option value="Enter the puporse of importation"> Enter the purpose of importation</option>
                <option value="Direct Sale">Direct Sale</option>
                <option value="Personal Use">personal use</option>
                <option value="Trial Use">Trial use</option>
                <option value="other">other</option>
              </select>
              </div>

              <div className="form-group flex-grow">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Product Category
                </label>
                <select
                id="profile_type"
                className="form-select mt-1 block w-full  bg-white border focus:ring focus:ring-yellow focus:ring-opacity-50"
                name="profile_type"
                required
              >
                <option value=""> Select product category</option>
                <option value="Direct Sale">General purpose</option>
                <option value="Personal Use">Construction</option>
                <option value="Trial Use">chemicals</option>
                
              </select>
              </div>

              <div  className="flex flex-row space-x-8 ">
              <div className="form-group flex-grow">
                <label htmlFor="number" className="text-sm font-semibold text-gray-700">
                  Unity measurement
                </label>
                <select
                id="product-name"
                className="form-select mt-1 block w-full text-sm bg-white border focus:ring focus:ring-yellow focus:ring-opacity-50"
                name="product"
                required
              >
                <option value="">Select Business Type</option>
                <option value="Rwandan">Retailer</option>
                <option value="Foreigner">Wholesale</option>
                <option value="Foreigner">Manufacturer</option>
              </select>
              </div>
              <div className="form-group flex-grow">
                <label htmlFor="weight" className="text-sm font-semibold text-gray-700">
                  quantity of product
                </label>
                <input
                  id="weight"
                  className="form-input mt-1 block w-full  bg-white border focus:border-yellow focus:ring focus:ring-yellow focus:ring-opacity-50"
                  type="text"
                  placeholder="enter weight in kg"
                  
                  required
                />
              </div>
              </div>
              <div className="form-group flex-grow">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Product description
                </label>
                <textarea
                id='description'></textarea>
                </div>
            
           
          
          </form>
          </div>
          </div>
        </div>
    </div>
  
  );
}

export default importationDetails;
