import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ReCalculate = () => {
    const { state: data } = useLocation();

    if (!data) {
        return <p>No data available. Please calculate first.</p>;
    }
    return (
        <>
            <div className="relative h-40 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>
            <div className="">
                <div className="bg-white shadow-lg rounded-lg max-w-8xl w-full p-6 sm:p-8">
                    <h1 className="text-2xl font-semibold text-center mb-6 bg-orange-600 text-white py-2 rounded-t-lg">
                        calculation Results
                    </h1>
                    {/* calculated data */}
                    <div className='my-3 px-2'>

                        <p>Monthly Consumption: {data.monthlyConsumption.toFixed(2)} kWh</p>
                        <p>Daily Energy Requirement: {data.dailyEnergyRequirement.toFixed(2)} kWh</p>
                        <p>System Capacity: {data.requiredSystemCapacity.toFixed(2)} kW</p>
                        <p>Area Required: {data.areaRequired.toFixed(2)} sq.m.</p>
                        {/* <p>Calculated Plant Capacity: {data.calculatedPlantCapacity.toFixed(2)} kW</p> */}
                        {/* <p>Monthly Savings: ₹{data.monthlySavings.toFixed(2)}</p> */}
                        <p>Available Roof Area Capacity: {data.maxCapacityFromRoof.toFixed(2)} kWh</p>
                        <p>Annual Energy Generation: {data.annualEnergyGeneration.toFixed(2)} kWh/year</p>
                        <p>CO₂ Savings (per year): {data.co2SavingsKg.toFixed(2)} kg ({data.co2SavingsMetricTons.toFixed(2)} metric tons)</p>
                        <p>CO₂ Savings (25 years): {data.cumulativeCo2SavingsKg.toFixed(2)} kg ({data.cumulativeCo2SavingsMetricTons.toFixed(2)} metric tons)</p>
                        <p>Equivalent Trees Planted (per year): {data.equivalentTreesPlantedPerYear.toFixed(2)} trees/year</p>
                        <p>Cumulative Equivalent Trees Planted (25 years): {data.cumulativeEquivalentTreesPlanted.toFixed(2)} trees</p>
                    </div>

                    <Link to={"/solar_calculator"} className="text-1xl  text-center mb-6 bg-orange-600 text-white py-2 rounded p-2">Recalculate</Link>

                </div>
            </div>
        </>
    )
}

export default ReCalculate
