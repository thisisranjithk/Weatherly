export interface Location {
  country: string;
  lat: number;
  lon: number;
  localtime: string;
  localtime_epoch: number;
  name: string;
  region: string;
  tz_id: string;
}

interface condition {
  code?: number;
  icon: string;
  text: string;
}

export interface Current {
  cloud?: number;
  condition: condition;
  feelslike_c: number;
  feelslike_f: number;
  humidity: number;
  is_day?: number;
  last_updated: string;
  last_updated_epoch?: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_miles: number;
  wind_dir: string;
  wind_kph: number;
}

interface day {
  avgtemp_c: number;
  avgtemp_f: number;
  condition: condition;
}

export interface forecastday {
  date: string;
  date_epoch?: number;
  day: day;
  daily_chance_of_rain: number;
  astro?: any;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
