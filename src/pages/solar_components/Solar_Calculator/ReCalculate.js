import React from 'react'
import { Link } from 'react-router-dom'

const ReCalculate = () => {
    return (
        <>
            <div className="relative h-40 lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header"></div>
            <div className="">
                <div className="bg-white shadow-lg rounded-lg max-w-8xl w-full p-6 sm:p-8">
                    <h1 className="text-2xl font-semibold text-center mb-6 bg-orange-600 text-white py-2 rounded-t-lg">
                        solar calculator
                    </h1>
                    <Link to={"/solar_calculator"} className="text-2xl font-semibold text-center mb-6 bg-orange-600 text-white py-2 rounded p-2">Recalculate</Link>

                </div>
            </div>
        </>
    )
}

export default ReCalculate
