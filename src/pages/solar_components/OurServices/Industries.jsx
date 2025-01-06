import React from "react";

const Industries = () => {
  return (
    <>
      <div className="relative h-40 sm:h-28 lg:my-10 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>
      <div className="bg-gray-100 min-h-screen py-4 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl text-center">
          {/* Header Section */}
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Industrial – Large-Scale Solar Systems for Industrial Facilities
          </h1>

          {/* Content Section */}
          <p className="text-gray-600 text-lg mb-6">
            For industries with large energy demands, Solar Ark offers powerful
            solar solutions that significantly reduce operational costs and
            enhance efficiency. Our industrial solar systems are designed to
            meet the heavy energy requirements of factories, warehouses, and
            other large-scale facilities. By leveraging renewable solar energy,
            your business can lower utility costs, reduce dependency on
            non-renewable resources, and contribute to global sustainability
            efforts. Solar Ark’s industrial solar solutions are engineered to
            perform under the most demanding conditions, providing reliable,
            long-term power generation that supports your facility's operations.
          </p>

          {/* Benefits List */}
          <ul className="text-gray-700 text-left list-disc list-inside mx-auto mb-6 max-w-2xl">
            <li className="mb-2">
              <strong>High-Energy Demands:</strong> Lower Tailored to meet the
              extensive energy needs of industrial facilities, ensuring
              uninterrupted and reliable power.
            </li>
            <li className="mb-2">
              <strong>Lower Operational Costs: </strong> Solar energy helps to
              reduce energy expenses by tapping into renewable resources,
              leading to long-term savings.
            </li>
            <li className="mb-2">
              <strong>Efficiency and Reliability: </strong> Our systems are
              designed for maximum efficiency, providing consistent performance
              even in demanding industrial environments.
            </li>
            <li>
              <strong>Sustainability Leadership:</strong>
              Embrace your role in sustainability by significantly reducing your
              facility’s carbon footprint and promoting eco-friendly practices.
            </li>
          </ul>

          {/* Call-to-Action Button */}
        </div>
      </div>
    </>
  );
};

export default Industries;
