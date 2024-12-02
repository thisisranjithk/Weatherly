import Navbar from "@/components/Layout/Navbar";
import Weather from "@/components/Weather/Weather";
import WeatherDetails from "@/components/Weather/WeatherDetails";
import WeatherForecast from "@/components/Weather/WeatherForecast";
import axiosInstance from "@/components/services/data";

export default async function Home() {
  const latitude = 12.9333;
  const longitude = 78.7167;

  const response = await axiosInstance.get(
    `forecast.json?key=${process.env.API_KEY}&q=${latitude},${longitude}&days=5`
  );

  if (!response) {
    return <h2>Unable to fetch Data from the Server</h2>;
  }
  // console.log(response.data.forecast);
  return (
    <main className="w-screen h-auto md:h-screen bg-hero bg-center bg-cover bg-no-repeat">
      <Navbar />
      <section className="grid-container">
        <Weather
          location={response.data.location}
          current={response.data.current}
        />
        <WeatherDetails current={response.data.current} />
        <WeatherForecast forecastData={response.data.forecast.forecastday} />
      </section>
    </main>
  );
}
