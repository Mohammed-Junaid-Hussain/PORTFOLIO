import React from "react";
import Final_Resume from "../../components/Final_Resume.pdf";

function LeftSider() {
  return (
    <div  className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className=" flex flex-col gap-3 sm:flex-row">
          <a href="mailto:junaidhussain798@outlook.com">
            {" "}
            <i class="ri-mail-line text-gray-400 text-2xl sm:text-xs lg:text-4xl" ></i>
          </a>
          <a href="https://www.linkedin.com/in/mohammed-junaid-hussain-6953641b7/">
            {""}
            <i class="ri-linkedin-box-line text-gray-400 text-2xl sm:text-xs lg:text-4xl"></i>
          </a>
          <a href="https://github.com/Mohammed-Juniad-Hussain">
            {""}
          <i class="ri-github-fill text-gray-400 text-2xl sm:text-xs lg:text-4xl"></i>
          </a>
          <a href={Final_Resume}>
            {""}
          <i class="ri-file-paper-2-line text-gray-400 text-2xl sm:text-xs lg:text-4xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
