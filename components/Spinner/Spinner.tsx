"use client";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
  display: "block",
  padding: "100px auto",
};

const Spinner = () => {
  return (
    <section className="absolute h-screen w-screen flex items-center justify-center z-50">
      <PacmanLoader
        color="#0A97B0"
        cssOverride={override}
        size={45}
        aria-label="loading..."
      ></PacmanLoader>
    </section>
  );
};

export default Spinner;
