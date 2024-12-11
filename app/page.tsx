import SearchInput from "@/components/Common/SearchInput";
import { Suspense } from "react";

export default async function Home() {
  return (
    <section className="h-screen w-screen flex pt-44 justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchInput
          placeholder="Enter a location.."
          classes="p-4 text-2xl md:text-4xl "
          cloudIconClasses="text-2xl md:text-4xl right-7 top-5"
        />
      </Suspense>
    </section>
  );
}
