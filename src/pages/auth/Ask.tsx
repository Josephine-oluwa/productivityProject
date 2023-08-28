import { Link } from "react-router-dom"
import admin from "../../assets/admin.webp"
import main from "../../assets/main.webp"

const Ask = () => {
  return (
    <div className="w-full h-[100vh] bg-gray-300 flex justify-center items-center">
        <div className="w-[600px] h-[400px] bg-white rounded-[20px] shadow-md">
            <div className="flex items-center justify-between">
                <div className="w-[50%] h-[400px] items-center justify-center flex">
                    <div className="w-[90%] h-[90%] bg-white flex flex-col items-center justify-center">
                    <div className="w-[150px] h-[150px] rounded-[50%] bg-gray-100 overflow-hidden"><img src={main} alt="" className="object-cover h-full w-full"/></div>
                   <Link to="/admin/signup">
                   <div className="text-white mt-[30px] px-4 py-2 bg-black rounded-[20px] hover:scale-105 duration-300 cursor-pointer capitalize">Sign in as an admin</div>
                   </Link>
                    </div>
                </div>
                <div className="w-[50%] h-[400px] items-center justify-center flex">
                    <div className="w-[90%] h-[90%] flex flex-col items-center justify-center"> 
                    <div className="w-[150px] h-[150px] rounded-[50%] bg-gray-100 overflow-hidden"><img src={admin} alt="" className="object-cover h-full w-full"/></div>
                   <Link to="/signup">
                   <div className="text-white mt-[30px] px-4 py-2 bg-black rounded-[20px] hover:scale-105 duration-300 cursor-pointer capitalize" >Sign in as a user</div>
                   </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ask