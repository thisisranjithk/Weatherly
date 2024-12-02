import { FaCloudversify } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-milkywhite/[.20]">
      <header className="max-w-6xl mx-auto px-6 md:px-0 h-24 flex items-center justify-between  text-primary ">
        <div>
          <h2 className="text-xl md:text-3xl font-black tracking-wider ">
            Weatherly
          </h2>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Location.."
            className="py-2 w-36 text-sm md:text-md md:w-auto px-3 md:px-6 bg-transparent border-[2.5px] font-bold rounded-md placeholder:text-primary border-primary active:border-none outline-none"
          />
          <FaCloudversify className="absolute top-3 text-sm md:text-xl right-4 hover:text-[#071952] duration-200 " />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
