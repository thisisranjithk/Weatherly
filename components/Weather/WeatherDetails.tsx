interface currentObj {
  feelslike_c: Number;
  wind_kph: Number;
  humidity: Number;
  uv: Number;
  vis_miles: Number;
  pressure_mb: Number;
  wind_dir: String;
}

interface WeatherDetailsProps {
  current: currentObj;
}
const WeatherDetails = ({ current }: WeatherDetailsProps) => {
  return (
    <section className="relative col-span-4 md:col-span-3 h-56 rounded-lg bg-milkywhite/[.50] text-primary">
      <h2 className="absolute top-[-30px] left-4 font-bold tracking-wider">
        Weather Details
      </h2>
      <div className="p-6 grid grid-cols-3 gap-5 font-black text-xs md:text-[16px]">
        <div className="h-20 bg-blue-300/[.30] flex flex-col items-center justify-center rounded-md gap-3">
          <span>Feels Like</span>
          <span>{`${current.feelslike_c}`}</span>
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