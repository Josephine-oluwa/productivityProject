import { GiLaurelCrown } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sider = () => {
  return (
    <div className="w-[170px] h-[100vh] bg-red-400 fixed flex  items-center flex-col">
      <div>
        <Link to="/admin/home">
        <div className="flex items-center justify-center mt-[50px] hover:text-gray-400 cursor-pointer duration-300">
          <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
            <GiLaurelCrown className="w-[45px] h-[45px] " />
          </div>
          <div className="ml-[7px] font-Poppins mt-[3px] text-[20px] ">
            Monao
          </div>
        </div>
        </Link>
        <Link to="/admin/users">
        <div className="flex items-center justify-center mt-[60px] cursor-pointer">
          <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
            <GiLaurelCrown className="w-[35px] h-[35px] " />
          </div>
          <div className="ml-[7px] font-Poppins mt-[3px] text-[14px]">
            View Users
          </div>
        </div>
        </Link>
        <Link to="/admin/progress">
        <div className="flex items-center justify-center mt-[60px] cursor-pointer">
          <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
            <GiLaurelCrown className="w-[35px] h-[35px] " />
          </div>
          <div className="ml-[7px] font-Poppins mt-[3px] text-[14px]">
            View Progress
          </div>
        </div>
        </Link>
        <Link to="/admin/task">
        <div className="flex items-center justify-center mt-[60px] cursor-pointer">
          <div className="w-[35px] h-[35px] rounded-[50%] overflow-hidden flex items-center justify-center">
            <GiLaurelCrown className="w-[35px] h-[35px] " />
          </div>
          <div className="ml-[7px] font-Poppins mt-[3px] text-[14px]">
            View Tasks
          </div>
        </div>
        </Link>
      </div>
      <div className="w-[200px] mt-[90px]">
        <div className="mt-[60px] flex flex-col items-center w-[full] h-[130px] ">
          <div className="w-[45px] h-[45px] rounded-[50%] overflow-hidden bg-white">
            <img src="" alt="" className="w-full h-full " />
          </div>
          <div className="mt-[5px] text-[14px]">AdminName</div>
          <div className="text-[11px] font-semibold">Admin Email</div>
          <div className="px-5 py-1 rounded-[15px] bg-white text-black mt-1.5 font-semibold hover:scale-95 cursor-pointer duration-300">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
