'use client'

import CountUp from 'react-countup';

export default function TotalCount() {
    return (
        <div className="lg:m-12 m-8 lg:py-12 py-8 bg-gray-50 rounded grid lg:grid-cols-3 grid-cols-1 gap-5 ">

            <div className="flex flex-col items-center">

                <CountUp
                    duration={2}
                    start={0}
                    end={450}
                    decimal=","
                    className="text-5xl" />
                <p className=' mt-3'>Total Transaction</p>
            </div>
            <div className="flex flex-col lg:border-x items-center">
                <CountUp
                    duration={2}
                    start={0}
                    end={4500}
                    decimal=","
                    className="text-5xl" />
                <p className=' mt-3 '>Total Client</p>
            </div>
            <div className="flex flex-col items-center">
                <CountUp
                    duration={2}
                    start={0}
                    decimal=","
                    end={1789} className="text-5xl" />
                <p className=' mt-3 text-center'>Total User</p>
            </div>
        </div>
    )
}
