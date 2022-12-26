import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex justify-around mt-20">
      <div className="card w-96 bg-cyan-300 shadow-xl">
        <div className="flex p-10 items-center gap-5 text-white">
          <div>
            <FaRegClock className="text-7xl" />
          </div>
          <div>
            <h2 className="card-title">Opening Hours</h2>
            <p>Open 9.00 am to 5.00 pm.</p>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-rose-300 shadow-xl">
        <div className="flex p-10 items-center gap-5 text-white">
          <div>
            <FaMapMarkerAlt className="text-7xl" />
          </div>
          <div>
            <h2 className="card-title">Our Location</h2>
            <p>Golachipa, Narayanganj, Dhaka</p>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-amber-300 shadow-xl">
        <div className="flex p-10 items-center gap-5 text-white">
          <div>
            <FaPhoneAlt className="text-7xl" />
          </div>
          <div>
            <h2 className="card-title">Contact Us</h2>
            <p>+880 1675-913288</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
