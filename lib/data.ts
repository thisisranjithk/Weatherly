interface getCoordinates {
  latitude: number;
  longitude: number;
}

export const getCoordinates = (): Promise<getCoordinates> =>
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
