import React from "react";

const Commercial = () => {
  return (
    <>
      <div className="relative h-40 sm:h-28 lg:my-10 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>
      <div className="bg-gray-100 min-h-screen py-4 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl text-center">
          {/* Header Section */}
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Commercial – Efficient Solar Installations for Businesses
          </h1>

          {/* Content Section */}
          <p className="text-gray-600 text-lg mb-6">
            As businesses increasingly seek ways to reduce operational costs and
            demonstrate their commitment to sustainability, Solar Ark provides
            innovative solar solutions that cater specifically to commercial
            needs. Our custom solar systems are designed to lower energy
            expenses while helping businesses achieve their environmental goals.
            Whether you are a small startup or a large corporation, Solar Ark
            delivers efficient and scalable solar solutions that seamlessly
            integrate into your business model.
          </p>

          {/* Benefits List */}
          <ul className="text-gray-700 text-left list-disc list-inside mx-auto mb-6 max-w-2xl">
            <li className="mb-2">
              <strong>Cost-Effective Energy Solutions:</strong> Lower
              operational expenses by reducing your reliance on traditional
              energy sources and harnessing the power of the sun.
            </li>
            <li className="mb-2">
              <strong>Custom Installations:</strong> We design systems that fit
              the unique needs of your business, ensuring maximum energy
              efficiency and savings.
            </li>
            <li className="mb-2">
              <strong>Environmental Responsibility:</strong> Position your
              business as a leader in sustainability by adopting renewable
              energy and reducing your carbon footprint.
            </li>
            <li>
              <strong>Scalable Solutions:</strong> Whether you're upgrading
              existing systems or building from scratch, we provide scalable
              solutions that grow with your business needs.
            </li>
          </ul>

          {/* Call-to-Action Button */}
        </div>
      </div>
    </>
  );
};

export default Commercial;
