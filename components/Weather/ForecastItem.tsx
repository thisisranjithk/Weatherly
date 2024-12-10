import { forecastday } from "@/lib/types";
// import Image from "next/image";
interface ForecastItemProps {
  data: forecastday;
}

const ForecastItem = ({ data }: ForecastItemProps) => {
  return (
    <div className="relative h-20 bg-blue-300/[.30] flex flex-col rounded-md mt-2">
      <span className="absolute top-[-18px] font-poppins font-semibold tracking-wider text-[11px] left-1">{`${formatDay(
        data.date
      )}`}</span>
      <span className="font-poppins font-normal text-[12px] ml-2 pt-3 w-20">
        {data.day?.condition.text}
      </span>
      <span className="text-xl md:text-2xl font-mono absolute bottom-1 left-2">
        22.9&deg;C
      </span>
      <img
        src={data.day?.condition.icon}
        height={45}
        width={45}
        alt={data.day?.condition.text}
        className="absolute right-1"
      />
    </div>
  );
};

export default ForecastItem;

const formatDay = (date: string) => {
  const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date(date)
  );

  return day;
};
