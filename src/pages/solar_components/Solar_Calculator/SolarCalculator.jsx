import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const SolarCalculator = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [category, setCategory] = useState("");
  const [monthlyBill, setMonthlyBill] = useState("");
  const [roofArea, setRoofArea] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [plantCapacity, setPlantCapacity] = useState(0);
  const [sanctionLoad, setSanctionLoad] = useState(0);
  const [unit, setUnit] = useState("sqFeet");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const fallbackStates = [
    { _id: 1, name: "Andhra Pradesh" },
    { _id: 2, name: "Arunachal Pradesh" },
    { _id: 3, name: "Assam" },
    { _id: 4, name: "Bihar" },
    { _id: 5, name: "Chhattisgarh" },
    { _id: 6, name: "Goa" },
    { _id: 7, name: "Gujrat" },
    { _id: 8, name: "Haryana" },
    { _id: 9, name: "Himachal Pradesh" },
    { _id: 10, name: "Jharkhand" },
    { _id: 11, name: "Karnataka" },
    { _id: 12, name: "Kerala" },
    { _id: 13, name: "Madhya Pradesh" },
    { _id: 14, name: "Maharashtra" },
  ];

  // Fetch states from the backend API
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/states"); // API endpoint to fetch states
        const data = await response.json();
        setStates(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching states:", error);
        setStates(fallbackStates);
      }
    };

    fetchStates();
  }, []);

  // Delay visibility by 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1-second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Handle Calculate Button Click
  const handleCalculate = () => {
    const tariffRate = 6;
    const roofAreaPerKW = unit === "sqMeter" ? 10 : 100;
    const solarHours = 5;
    const co2EmissionFactor = 0.85;
    const yearsOfSavings = 25;
    const treeAbsorptionRate = 21;
    const costPerKW = 50000;

    // Step 1: Calculate monthly consumption in kWh
    const monthlyConsumption = monthlyBill / tariffRate;

    // Step 2: Calculate daily energy
    const dailyEnergyRequirement = monthlyConsumption / 30;

    // Step 3: Calculate system capacity
    let requiredSystemCapacity = dailyEnergyRequirement / solarHours;

    // Step 4: Check if the available area
    let areaRequired = requiredSystemCapacity * 10; // in sq. meters
    // const maxCapacityFromRoof = roofArea / roofAreaPerKW;

    // if (roofArea < areaRequired) {
    //   // Adjust system capacity based on available area
    //   requiredSystemCapacity = roofArea / 10;
    //   areaRequired = roofArea;
    // }

    areaRequired = Number(areaRequired);

    // Step 5: Adjust capacity based on area and investment
    // const maxCapacityFromInvestment = investment / costPerKW;
    // const calculatedPlantCapacity = Math.min(
    //   requiredSystemCapacity,
    //   maxCapacityFromRoof,
    //   maxCapacityFromInvestment,
    //   sanctionLoad || Infinity
    // );

    // calculate co2
    const annualEnergyGeneration = requiredSystemCapacity * solarHours * 365;

    const co2SavingsKg = annualEnergyGeneration * co2EmissionFactor; // in kg/year
    const co2SavingsMetricTons = co2SavingsKg / 1000;
    const cumulativeCo2SavingsKg = co2SavingsKg * yearsOfSavings; // 25 years
    const cumulativeCo2SavingsMetricTons = cumulativeCo2SavingsKg / 1000;

    // Step 6: Calculate estimated monthly savings
    // const dailyGeneration = calculatedPlantCapacity * solarHours; // kWh/day
    // const monthlyGeneration = dailyGeneration * 30; // kWh/month
    // const monthlySavings = monthlyGeneration * tariffRate;

    //tree plantation
    const equivalentTreesPlantedPerYear = co2SavingsKg / treeAbsorptionRate;
    const cumulativeEquivalentTreesPlanted =
      equivalentTreesPlantedPerYear * yearsOfSavings;

    const resultData = {
      monthlyConsumption,
      dailyEnergyRequirement,
      requiredSystemCapacity,
      areaRequired,
      // calculatedPlantCapacity,
      // monthlySavings,
      // maxCapacityFromRoof,
      annualEnergyGeneration,
      // maxCapacityFromInvestment,
      co2SavingsKg,
      co2SavingsMetricTons,
      cumulativeCo2SavingsKg,
      cumulativeCo2SavingsMetricTons,
      equivalentTreesPlantedPerYear,
      cumulativeEquivalentTreesPlanted,
    };

    navigate("/recalculate", { state: resultData });
  };

  return (
    <>
      <div className="relative h-40 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>

      {isVisible && (
        <div className="fade-in-bottom min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg max-w-8xl w-full p-6 sm:p-8">
            <h1 className="text-2xl font-semibold text-center mb-6 bg-orange-600 text-white py-2 rounded-t-lg">
              Solar Rooftop Calculator
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left section */}
              <div className="p-4">
                <h2 className="text-lg font-medium text-center text-gray-800 mb-4">
                  Please enter the following details
                </h2>

                <div className="flex flex-col mb-4">
                  <label className="text-gray-700 mb-2">Your State</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state._id} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col mb-4">
                  <label className="text-gray-700 mb-2">Your Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select Category</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Government">Government</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Institutional">Institutional</option>
                    <option value="Residential">Residential</option>
                    <option value="Social">Social Sectors</option>
                  </select>
                </div>

                <div className="flex flex-col mb-4">
                  <label className="text-gray-700 mb-2">
                    Average Monthly Bill
                  </label>
                  <div className="flex items-center">
                    <span className="px-3 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-l-md">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      placeholder="Enter amount"
                      className="px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right section */}
              <div className="p-4 border border-gray-200 rounded-md">
                <h2 className="text-lg font-medium text-center text-orange-600 mb-4">
                  Enter Details for More Accurate Information (Optional)
                </h2>

                <div className="flex items-center mb-4">
                  <span className="text-gray-700 mr-4">
                    Total Available Roof Top Area
                  </span>
                  <label className="mr-2">
                    <input
                      type="radio"
                      value="sqMeter"
                      checked={unit === "sqMeter"}
                      onChange={() => setUnit("sqMeter")}
                      className="mr-1"
                    />
                    Sq. m.
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="sqFeet"
                      checked={unit === "sqFeet"}
                      onChange={() => setUnit("sqFeet")}
                      className="mr-1"
                    />
                    Sq. Feet
                  </label>
                </div>

                <div className="flex flex-col mb-4">
                  <label className="text-gray-700 mb-2">
                    Total Available Roof Top Area
                  </label>
                  <input
                    type="number"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                    placeholder="0"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label className="text-gray-700 mb-2">
                    How much do you want to invest?
                  </label>
                  <input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                    placeholder="0"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label className="text-gray-700 mb-2">
                    Required Solar Plant Capacity (in kW)
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={plantCapacity}
                      onChange={(e) => setPlantCapacity(e.target.value)}
                      placeholder="0"
                      className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                    />
                    <span className="px-3 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-r-md">
                      kW
                    </span>
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <label className="text-gray-700 mb-2">Sanction Load</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={sanctionLoad}
                      onChange={(e) => setSanctionLoad(e.target.value)}
                      placeholder="0"
                      className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                    />
                    <span className="px-3 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-r-md">
                      kW
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                // to={"/recalculate"}
                onClick={handleCalculate}
                className="py-2 px-6 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition duration-200"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SolarCalculator;
