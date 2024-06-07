import React from "react";
import { useSelector } from "react-redux";
import Final_Resume from "../../components/Final_Resume.pdf";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
  return (
    <div className="h-[90vh] bg-primary flex flex-col items-start justify-center gap-8 py-9">
      <h1 className="text-2xl sm:text-xs text-white">{welcomeText || ""}</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        {firstName || ""} {lastName || ""}
      </h1>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">
        {caption || ""}
      </h1>
      <p className="text-white w-2/3">{description || ""}</p>
      <a
        className="border-2 border-tertiary text-tertiary px-10 py-3 rounded"
        href={Final_Resume}
      >
        Resume
      </a>
    </div>
  );
}

export default Intro;
