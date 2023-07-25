import React from 'react'



const About = () => {
    const details = [
        {
          id: 1,
          title: "ALWAYS",
          subtitle: "On time",
        },
        {
          id: 2,
          title: "24/7",
          subtitle: "Customer serviced",
        },
        {
          id: 3,
          title: "100%",
          subtitle: "Safe travelling",
        },
        {
          id: 4,
          title: "FREE",
          subtitle: "Cancellation",
        },
      ];

  return (
    <div
      name="about"
      className="w-full h-full md:h-screen bg-gray-900 text-white"
    >
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
      <div className="text-center">
          <h2 className="text-3xl font-bold">
            <span className="text-lightColor">About</span> {" "}
            <span >Us</span>
          </h2>
          <p className="text-xl font-light text-gray-500 py-3">
           We help you to connect with nearby drivers who will assist you to travel 
           hassle free. You will hire polite and well trained professionals. The fixed prices
           help to maintain a smooth experience and enjoyable rides.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 px-1 w-full">
          {details.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="flex items-center justify-center odd:skew-x-12 even:-skew-x-12 hover:skew-x-0 duration-300"
            >
              <div className="flex flex-col items-center justify-center w-60 h-60 py-2 rounded-full shadow-lg shadow-lightColor">
                <p className="text-3xl font-bold text-lightColor">{title}</p>
                <p className="text-gray-400 mt-2 capitalize">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default About
