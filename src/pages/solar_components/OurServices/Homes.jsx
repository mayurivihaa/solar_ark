import React from "react";

const Homes = () => {
  return (
    <>
      <div className="relative h-40 sm:h-28 lg:my-10 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>
      <div className="bg-gray-100 min-h-screen py-4 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl text-center">
          {/* Header Section */}
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Homes – Custom Solar Systems for Homeowners
          </h1>

          {/* Content Section */}
          <p className="text-gray-600 text-lg mb-6">
            At Solar Ark, we offer customized solar solutions for homeowners who
            want to reduce their reliance on traditional power grids, lower
            their energy bills, and contribute to a cleaner planet. Our solar
            systems are tailored to fit your home's specific energy needs,
            ensuring maximum efficiency and savings. With our expert design and
            installation services, you can trust that your system will
            seamlessly integrate with your lifestyle while providing consistent,
            renewable energy. Whether you're aiming to achieve energy
            independence or simply reduce your carbon footprint, Solar Ark makes
            it easy and affordable to switch to solar power.
          </p>

          {/* Benefits List */}
          <ul className="text-gray-700 text-left list-disc list-inside mx-auto mb-6 max-w-2xl">
            <li className="mb-2">
              <strong>Custom Design: </strong> Lower Our professional team
              ensures a hassle-free installation with minimal disruption.
            </li>
            <li className="mb-2">
              <strong>Seamless Installation:</strong> Enjoy reduced energy bills
              and potential incentives while investing in clean energy. Our
              professional team ensures a hassle-free installation with minimal
              disruption.
            </li>
            <li className="mb-2">
              <strong>Long-Term Savings:</strong> Position your business as a
              leader in sustainability by adopting renewable energy and reducing
              your carbon footprint.
            </li>
            <li>
              <strong>Energy Independence:</strong> Take control of your energy
              consumption, decrease your reliance on nonrenewable sources, and
              secure long-term savings.
            </li>
          </ul>

          {/* Call-to-Action Button */}
        </div>
      </div>
    </>
  );
};

export default Homes;
