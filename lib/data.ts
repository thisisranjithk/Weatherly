import axiosInstance from "@/components/services/data";
import { Coordinates } from "./types";

export const getCoordinates = (): Promise<Coordinates> =>
  new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => reject(error)
      );
    } else {
      reject(
        new Error("Geolocation is not supported or running on the server.")
      );
    }
  });

export const fetchWeatherData = async (query: string) => {
  try {
    const response = await axiosInstance.get(
      `forecast.json?key=${process.env.API_KEY}&q=${query}&days=5`
    );
    return response;
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.error?.message || "An unknown error occurred";
    console.log(errorMessage);
    // return errorMessage;
  }
};
