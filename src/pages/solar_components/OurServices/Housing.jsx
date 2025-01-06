import React from "react";

const Housing = () => {
  return (
    <div>
      <div className="relative h-40 sm:h-28 lg:my-10 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl text-center">
          {/* Header Section */}
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Housing Societies – Sustainable Solar Solutions for Communities
          </h1>

          {/* Content Section */}
          <p className="text-gray-600 text-lg mb-6">
            Transform your housing society into a model of sustainability with
            Solar Ark’s collective solar solutions. We specialize in designing
            solar systems for entire housing communities, providing a renewable
            energy source that reduces overall energy costs for residents while
            enhancing sustainability. Our solutions can be customized to fit the
            unique needs of every community, making it easier for everyone to
            embrace clean energy. Solar Ark handles everything from the initial
            assessment to installation and maintenance, ensuring smooth
            operation and continued efficiency. By adopting solar energy at a
            community level, housing societies can significantly lower utility
            bills and contribute to a greener planet.
          </p>

          {/* Benefits List */}
          <ul className="text-gray-700 text-left list-disc list-inside mx-auto mb-6 max-w-2xl">
            <li className="mb-2">
              <strong>Community-Wide Solar Solutions:</strong> Integrating solar
              technology across housing societies helps everyone enjoy the
              benefits of clean energy.
            </li>
            <li className="mb-2">
              <strong>Energy Cost Savings:</strong> Solar power provides
              substantial savings on collective energy bills, reducing the
              overall costs for residents.
            </li>
            <li className="mb-2">
              <strong>Environmental Impact:</strong> Reduce the carbon footprint
              of the entire community, contributing to a more sustainable
              future.
            </li>
            <li>
              <strong>Easy Transition:</strong> Our team manages the entire
              process, from assessment to installation and beyond, so residents
              can enjoy hassle-free energy solutions.
            </li>
          </ul>

          {/* Call-to-Action Button */}
        </div>
      </div>
    </div>
  );
};

export default Housing;
