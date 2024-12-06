import SearchInput from "../Common/SearchInput";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-milkywhite/[.20]">
      <header className="max-w-6xl mx-auto px-6 md:px-0 h-24 flex items-center justify-between  text-primary ">
        <div>
          <Link href="/">
            <h2 className="text-xl md:text-3xl font-black tracking-wider cursor-pointer ">
              Weatherly
            </h2>
          </Link>
        </div>
        <SearchInput
          placeholder="Location..."
          classes="py-2 w-36 text-sm md:text-md md:w-auto px-3 md:px-6"
          cloudIconClasses="text-sm md:text-xl"
        />
      </header>
    </div>
  );
};

export default Navbar;
