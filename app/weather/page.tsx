import Navbar from "@/components/Layout/Navbar";
import axiosInstance from "@/components/services/data";
import WeatherDetails from "@/components/Weather/WeatherDetails";
import WeatherForecast from "@/components/Weather/WeatherForecast";
import WeatherMain from "@/components/Weather/WeatherMain";
import Link from "next/link";

export const dynamic = "force-dynamic";

const Weather = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const query = searchParams?.q || "pernambut";
  let response;
  try {
    response = await axiosInstance.get(
      `forecast.json?key=${process.env.API_KEY}&q=${query}&days=5`
    );
  } catch (error) {
    return (
      <section className="w-screen h-screen flex items-center flex-col pt-32 text-center font-bold">
        <p>Error loading weather data. Please try again later.</p>
        <Link
          href="/"
          className="bg-primary text-white py-2 px-6 rounded-full mt-4"
        >
          Go Home
        </Link>
      </section>
    );
  }

  return (
    <>
      <Navbar />
      <section className="grid-container">
        <WeatherMain
          location={response.data.location}
          current={response.data.current}
        />
        <WeatherDetails current={response.data.current} />
        <WeatherForecast forecastData={response.data.forecast.forecastday} />
      </section>
    </>
  );
};

export default Weather;
