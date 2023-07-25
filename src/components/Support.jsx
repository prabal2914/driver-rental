import React from "react";

import {
  MdOutlineComputer,
  MdOutlineSupportAgent,
  MdPerson,
} from "react-icons/md";
import GreenBtn from "./GreenBtn";

const Support = () => {
  const supportLinks = [
    {
      id: 1,
      title: "Technical",
      subtitle: `Any technical fault in the website or trouble with booking you can contact us and our technical team will connect to you to solve the issue. Sorry for the inconvinience.`,
      icon: <MdOutlineComputer size={25} />,
    },
    {
      id: 2,
      title: "Customer Care",
      subtitle: `If there has been any trouble with our services you can contact us. We are 24/7 available to solve your problems.`,
      icon: <MdOutlineSupportAgent size={25} />,
    },
    {
      id: 3,
      title: "General",
      subtitle: `If there has been any trouble from our driver you can contact us. Prices are fixed any negotiations is not accepted if a driver does so you can contact with us.`,
      icon: <MdPerson size={25} />,
    },
  ];

  return (
    <div name="support" className="w-full h-fit bg-slate-300">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="px-4 py-12">
          <h2 className="text-5xl font-bold text-center">Support</h2>
          <p className="text-xl py-8  text-gray-600 text-center">
            If you face any difficulty feel free to contact us. We have representatives waiting to address 
            your grievances.
          </p>
        </div>

        {/* support cards */}
        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          {supportLinks.map(({ id, title, subtitle, icon }) => (
            <div
              key={id}
              className="bg-gray-900 text-white rounded-xl shadow-lg shadow-lightColor"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 p-4 bg-lightColor text-darkColor rounded-full mt-[-4rem]">
                  {icon}
                </div>
                <h3 className="font-bold text-2xl my-6">{title}</h3>
                <p className="text-gray-300 text-base pb-12">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-center">
          <GreenBtn
            title="contact us"
            className="capitalize py-3 px-6 w-1/2 my-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;