import { useEffect, useState } from "react";
import { GiLaurelCrown } from "react-icons/gi";
// import { Link } from "react-router-dom"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../global/GlobalState";
import { readUserAPI } from "../../apis/UserAuthAPI";

const MainHeader = () => {
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

  const [hover, setHover] = useState<boolean>(false);
  const onHover = () => {
    setHover(!hover);
  };

  const dispath = useDispatch();
  const [state, setState] = useState<[]>([]);
  useEffect(() => {
    readUserAPI().then((res) => {
      setState(res);
    });
  }, []);
  return (
    <div>
      {scroll ? (
        <div className="w-full h-[60px] flex items-center justify-center bg-black text-white fixed duration-700 z-10 ">
          <div className="w-[93%] h-[50px] flex justify-between items-center ">
            <div className="flex items-center justify-center">
              <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
                <GiLaurelCrown className="w-[35px] h-[35px] " />
              </div>
              <div className="ml-[7px] font-Poppins mt-[3px]">Monao</div>
            </div>

            <div
              className="flex items-center cursor-pointer"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              {hover ? (
                <div className="absolute bg-gray-700 text-white px-8 py-2 rounded text-[14px] font-semibold mt-[60px] ml-[15px] cursor-pointer ">
                  Logout
                </div>
              ) : null}
              <div className="w-[40px] h-[40px] rounded-[50%] text-white mr-[5px] flex items-center justify-center">
                Img
              </div>
              <div className="font-semibold text-[13px] ml-[px] ">{}</div>
              <div>
                <MdOutlineArrowDropDown />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[60px] flex items-center justify-center  fixed duration-700 z-10 ">
          <div className="w-[93%] h-[50px] flex justify-between items-center ">
            <div className="flex items-center justify-center">
              <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
                <GiLaurelCrown className="w-[35px] h-[35px] " />
              </div>
              <div className="ml-[7px] font-Poppins mt-[3px]">Monao</div>
            </div>

            <div
              className="flex items-center cursor-pointer"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              {hover ? (
                <div
                  className="absolute bg-black text-white px-8 py-2 rounded text-[14px] font-semibold mt-[60px] ml-[15px] cursor-pointer "
                  onClick={() => {
                    dispath(logOut());
                  }}
                >
                  Logout
                </div>
              ) : null}
              
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-black mr-[5px] flex items-center justify-center">
                    <img src={""} alt="" />
                  </div>
                  <div className="font-semibold text-[13px] ml-[px] ">
                    username
                  </div>
                  <div>
                    <MdOutlineArrowDropDown />
                  </div>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
