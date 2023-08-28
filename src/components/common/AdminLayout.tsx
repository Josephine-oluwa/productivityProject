import { Outlet } from "react-router-dom";
// import AdminHeader from "../static/AdminHeader";
import Sider from "../static/Sider";
// import FootProps from "../props/FootProps";

const AdminLayout = () => {
  return (
    <div className="flex w-[100%]  ">
      <div className="flex ">
        <Sider />
    </div>
      <div className={` w-[calc(100vw-170px)] ml-[170px] `}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
