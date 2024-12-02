import ForecastItem from "./ForecastItem";

interface WeatherForecastProps {
  forecastData: any;
}

const WeatherForecast = ({ forecastData }: WeatherForecastProps) => {
  // console.log(forecastData);
  return (
    <section className="relative col-span-4 md:col-span-3 h-auto md:h-60 rounded-lg bg-milkywhite/[.50] font-bold text-primary">
      <h2 className="absolute top-[-30px] left-4 font-bold tracking-wider bg-primary px-4 rounded-full text-white">
        5 days Weather forecast
      </h2>
      <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-5 font-black text-xs md:text-[16px]">
        {forecastData?.map((data: any) => (
          <ForecastItem key={data.date_epoch} data={data} />
        ))}
      </div>
    </section>
  );
};

export default WeatherForecast;
