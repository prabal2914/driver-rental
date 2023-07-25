import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "One Time Trip",
      subtitle: `You can hire driver who will pick you up from your given location and drop you at a destination.`,
    },
    {
      id: 2,
      title: "One Day Trip",
      subtitle: `You can hire a driver for an entire day 9am to 9pm and any extra time will be charged according to rate per hour.`,
    },
    {
      id: 3,
      title: "Inter City Trip",
      subtitle: `You can hire a driver who will help you travel anywhere inside the city. The rates will be either according to rate per km or rate per hour.`,
    },
    {
      id: 4,
      title: "Intra City",
      subtitle: `You can hire a driver who will help you travel to different cities. The rates will be according to rate per hour, i.e, one day will count as 24 hours.`,
    },
  ];

  return (
    <div name="services" className="w-full h-fit md:h-screen bg-slate-300">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <h2 className="text-5xl font-bold text-center">Services</h2>

        <p className="text-xl py-8 text-gray-600 text-center">
          Here are some of the services we offer to our customers.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-4">
          {services.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="flex items-start p-4 bg-gray-900 text-white rounded-md"
            >
              <div>
                <FaChevronCircleRight
                  size={20}
                  className="mt-3 mr-4 text-lightColor"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-lightColor pt-2 pb-4 capitalize">
                  {title}
                </h3>
                <p className="text-lg">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;