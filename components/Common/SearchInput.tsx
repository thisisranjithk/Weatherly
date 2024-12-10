"use client";
import { FaCloudversify } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import { useState } from "react";

interface SearchInputProps {
  placeholder: string;
  classes?: string;
  cloudIconClasses?: string;
}

const SearchInput = ({
  placeholder,
  classes,
  cloudIconClasses,
}: SearchInputProps) => {
  const [queryTerm, setQueryTerm] = useState<string>("");
  const searchparams = useSearchParams();
  const params = new URLSearchParams(searchparams);

  const handleKeyPress = (key: string) => {
    if (key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (queryTerm) {
      params.set("q", queryTerm);
    }
    setQueryTerm("");
    redirect(`/weather?${params.toString()}`);
  };

  return (
    <div className="relative">
      <input
        className={`${classes} bg-transparent text-primary border-[2.5px] font-bold rounded-md placeholder:text-primary border-primary active:border-none outline-none`}
        type="text"
        value={queryTerm}
        placeholder={placeholder}
        onChange={(e) => setQueryTerm(e.target.value)}
        onKeyUp={(e) => handleKeyPress(e.key)}
      />

      <FaCloudversify
        onClick={handleClick}
        className={`${cloudIconClasses} absolute top-3 text-primary hover:text-[#071952] right-3 duration-200 `}
      />
    </div>
  );
};

export default SearchInput;
