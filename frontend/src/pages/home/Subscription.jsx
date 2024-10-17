import React from "react";

const Subscription = () => {
  return (
    <div className="bg-white py-16 rounded-t-md">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          {/* left text */}
          <div className="md:w-1/2">
            {/* Add your left text content here */}
          </div>
          <div className="sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="flex-auto rounded-md border-bg-primary px-3.5 py-4 text-white shadow-sm text-sm sm:leading-6 focus:outline-btnColor"
              placeholder="Enter your email"
            />
            <button className="py-4 px-8 hover:bg-btnColor text-secondary hover:text-white transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
