export const dynamic = "force-dynamic";

import Navbar from "@/components/Layout/Navbar";
import WeatherDetails from "@/components/Weather/WeatherDetails";
import WeatherForecast from "@/components/Weather/WeatherForecast";
import WeatherMain from "@/components/Weather/WeatherMain";
import { fetchWeatherData } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";

const Weather = async ({ searchParams }: { searchParams?: any }) => {
  const searchQuery = await searchParams;
  const query = searchQuery?.q;
  const response = await fetchWeatherData(query);

  if (!response) {
    return (
      <section className="w-screen h-screen flex items-center flex-col pt-32 text-center font-bold">
        <p>No matching location found. Please try again.</p>
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
        <Suspense fallback={<p>Loading...</p>}>
          <WeatherMain
            location={response.data.location}
            current={response.data.current}
          />
        </Suspense>
        <WeatherDetails current={response.data.current} />
        <WeatherForecast forecastData={response.data.forecast.forecastday} />
      </section>
    </>
  );
};

export default Weather;
