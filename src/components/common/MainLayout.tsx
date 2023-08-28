// import MainHeader from "../static/MainHeader"
import {Outlet} from "react-router-dom"
// import FootProps from "../props/FootProps"
import UserSider from "../../pages/screen/UserSider"
const MainLayout = () => {
  return (
    // <div>
    //     <MainHeader/>
    //     <Outlet/>
    //     <FootProps/>
    // </div>

     <div className="flex w-[100%]  ">
     <div className="flex ">
       <UserSider />
   </div>
     <div className={` w-[calc(100vw-170px)] ml-[170px] `}>
       <Outlet />
     </div>
   </div>
  )
}

export default MainLayout