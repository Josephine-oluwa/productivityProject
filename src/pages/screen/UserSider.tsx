import { GiLaurelCrown } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
// import pix from "../../assets/man.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../../global/GlobalState";
import { useEffect, useState } from "react";
import { readUserAPI } from "../../apis/UserAuthAPI";

const UserSider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState<[]>([]);

  useEffect(() => {
    readUserAPI().then((res) => {
      setState(res);
    });
  }, []);
  return (
    <div className="w-[170px] h-[100vh] bg-red-400 fixed flex  items-center flex-col">
      <div>
        <Link to="/access/create">
          <div className="flex items-center justify-center mt-[50px] hover:text-gray-400 cursor-pointer duration-300">
            <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
              <GiLaurelCrown className="w-[45px] h-[45px] " />
            </div>
            <div className="ml-[7px] font-Poppins mt-[3px] text-[20px] ">
              Monao
            </div>
          </div>
        </Link>
        <Link to="/access/view">
          <div className="flex items-center justify-center mt-[60px] cursor-pointer">
            <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
              <GiLaurelCrown className="w-[35px] h-[35px] " />
            </div>
            <div className="ml-[7px] font-Poppins mt-[3px] text-[14px]">
              View Details
            </div>
          </div>
        </Link>
        <Link to="/access/task">
          <div className="flex items-center justify-center mt-[60px] cursor-pointer">
            <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
              <GiLaurelCrown className="w-[35px] h-[35px] " />
            </div>
            <div className="ml-[7px] font-Poppins mt-[3px] text-[14px]">
              View Tasks
            </div>
          </div>
        </Link>
        <Link to="/access/progress">
          <div className="flex items-center justify-center mt-[60px] cursor-pointer">
            <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
              <GiLaurelCrown className="w-[35px] h-[35px] " />
            </div>
            <div className="ml-[7px] font-Poppins mt-[3px] text-[14px]">
              View Progress
            </div>
          </div>
        </Link>
      </div>
      <div className="w-[200px] mt-[90px]">
        |
        {state?.map((el: any) => (
          <div
            key={el._id}
            className="mt-[60px] flex flex-col items-center w-[full] h-[130px] "
          >
            <div className="w-[45px] h-[45px] rounded-[50%] overflow-hidden bg-white">
              <img src={el.avatar} alt="" className="w-full h-full " />
            </div>
            <div className="mt-[5px] text-[14px]">{el.name}</div>
            <div className="text-[11px] font-semibold">{el.email}</div>
            <div
              className="px-5 py-1 rounded-[15px] bg-white text-black mt-1.5 font-semibold hover:scale-95 cursor-pointer duration-300"
              onClick={() => {
                dispatch(logOut());
                navigate("/ask");
                // console.log("I've been clicked");
              }}
            >
              Logout
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSider;
