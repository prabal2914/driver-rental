import React from "react";

import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full h-fit text-white bg-gray-900">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="px-4 py-12 text-center">
          <h2 className="text-5xl font-bold">Pricing</h2>
          <p className="text-xl py-8 text-gray-500">
           The types of pricing options we offer. The prices are pre fixed and are non negotiable,
           please complain if a driver tries to do so and your issues will be dealt with. The prices are 
           affordable and sustainable for the drivers.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          {/* pricing card */}

          <PriceCard
            priceCategory="Short Trips - One time and One Day Trips"
            dollar="87"
            features={[
              {
                id: 1,
                title: "Number of stops are limited.",
              },
              {
                id: 2,
                title: "You can ask the driver to make detours.",
              },
              {
                id: 3,
                title: "The driver can ask for breaks please understand and be compassionate.",
              },
            ]}
          />
          <PriceCard
            priceCategory="Long Trips - Inter and Intra City Trips"
            dollar="96"
            features={[
              {
                id: 1,
                title: "You can make as many stops you like.",
              },
              {
                id: 2,
                title: "You can ask the driver to make detours.",
              },
              {
                id: 3,
                title: "The driver can ask for breaks please understand and be compassionate.",
              },
            ]}
          />

          {/* pricing card end */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;