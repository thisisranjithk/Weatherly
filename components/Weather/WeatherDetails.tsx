import { Current } from "@/lib/types";

interface WeatherDetailsProps {
  current: Current;
}
const WeatherDetails = ({ current }: WeatherDetailsProps) => {
  return (
    <section className="relative mx-4 lg:mx-0 col-span-4 md:col-span-3 h-auto  md:h-60 rounded-lg bg-milkywhite/[.50] text-primary">
      <h2 className="absolute top-[-30px] left-4 font-bold tracking-wider bg-primary px-4 rounded-full text-white">
        Weather Details
      </h2>
      <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6 font-black text-sm md:text-[16px]">
        <div className="h-20 bg-blue-300/[.30] flex flex-col items-center justify-center rounded-md gap-3">
          <span>Feels Like</span>
          <span>{`${current?.feelslike_c}`}</span>
        </div>
        <div className="h-20 bg-blue-300/[.30] flex flex-col items-center justify-center rounded-md gap-3">
          <span>{current.wind_dir} Wind</span>
          <span>{`${current.wind_kph}`} kph</span>
        </div>
        <div className="h-20 bg-blue-300/[.30] flex flex-col items-center justify-center rounded-md gap-3">
          <span>Humidity</span>
          <span>{`${current.humidity}`}%</span>
        </div>
        <div className="h-20 bg-blue-300/[.30] flex flex-col items-center justify-center rounded-md gap-3">
          <span>UV</span>
          <span>{`${current.uv}`}</span>
        </div>
        <div className="h-20 bg-blue-300/[.30] flex flex-col items-center justify-center rounded-md gap-3">
          <span>Visiblity</span>
          <span>{`${current.vis_miles}`} mi</span>
        </div>
        <div className="h-20 bg-blue-300/[.30] flex flex-col items-center justify-center rounded-md gap-3">
          <span>Pressure</span>
          <span>{`${current.pressure_mb}`} pha</span>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;
