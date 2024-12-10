import SearchInput from "@/components/Common/SearchInput";

export default async function Home() {
  return (
    <section className="h-screen w-screen flex pt-44 justify-center">
      <SearchInput
        placeholder="Enter a location.."
        classes="p-4 text-2xl md:text-4xl "
        cloudIconClasses="text-2xl md:text-4xl right-7 top-5"
      />
    </section>
  );
}
