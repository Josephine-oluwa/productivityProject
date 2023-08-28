import { Link } from "react-router-dom";
import { GiLaurelCrown } from "react-icons/gi";
import { useState } from "react";
// import Nav from "react-scroll";

const FirstHeader = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    setScroll(scroll);

    if (window.scrollY >= 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <div>
      {scroll ? (
        <div className="w-full h-[60px] flex items-center justify-center  fixed bg-black duration-700 z-10 text-white">
          <div className="w-[93%] h-[50px] flex justify-between items-center ">
            <div className="flex items-center justify-center">
              <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
                <GiLaurelCrown className="w-[35px] h-[35px] " />
              </div>
              <div className="ml-[7px] font-Poppins mt-[3px]">Monao</div>
            </div>
            
              <div className="cursor-pointer" id="about">
                About Us
              </div>
            
            <div>
              <Link
                to="/ask"
                className="px-8 py-2 rounded-[30px] border border-[grey]  font-Poppins"
              >
                Signin
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[60px] flex items-center justify-center  fixed z-10">
          <div className="w-[93%] h-[50px] flex justify-between items-center screen-">
            <div className="flex items-center justify-center">
              <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
                <GiLaurelCrown className="w-[35px] h-[35px] " />
              </div>
              <div className="ml-[7px] font-Poppins mt-[3px]">Monao</div>
            </div>
            <div className="cursor-pointe">About Us</div>
            <div>
              <Link
                to="/ask"
                className="px-8 py-2 rounded-[30px] border border-[grey]  font-Poppins"
              >
                Signin
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstHeader;
