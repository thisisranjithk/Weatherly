"use client";
import { RiRefreshLine } from "react-icons/ri";

interface WeatherProp {
  location: any;
  current: any;
}

const Weather = ({ location, current }: WeatherProp) => {
  return (
    <section className="col-span-4 md:col-span-6 h-64 p-8 rounded-lg bg-milkywhite/[.50] text-primary">
      <div className="flex justify-between">
        <div>
          <div className="font-black mb-9">
            <span>{location.name}</span>
            <br />
            <span>
              {location.region}, {location.country}
            </span>
          </div>
          <div>
            <h2 className="text-6xl md:text-8xl font-bold">
              {current.temp_c}&deg;C
            </h2>
            <p className="font-extrabold visible md:hidden  text-md mt-4">
              {current.condition.text}
            </p>
          </div>
          <p className="text-start mt-2 hidden md:block">
            {current.last_updated}{" "}
            <RiRefreshLine className="inline-block cursor-not-allowed" />
          </p>
        </div>
        <div>
          <div className="font-semibold text-xl text-end mb-3">
            <p> {current.temp_c}&deg; C</p>
            <p> {current.temp_f}&deg; F</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="font-extrabold hidden md:block md:text-2xl">
              {current.condition.text}
            </p>
            <img
              src={current.condition.icon}
              alt="weather-icon"
              className="w-24 h-24 object-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
