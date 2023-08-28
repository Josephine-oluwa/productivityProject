import pix from "../../assets/team.svg";


const AdminProgress = () => {
  return (
    <div className="h-[100vh] p-4 w-[100%] flex flex-col flex-wrap ">
        <div className="w-[350px] p-3 flex flex-col justify-evenly m-4 h-[150px] border-[1px] border-[gray] rounded-md ">
          <span className="font-bold text-[13px] ">
            Name of Progress
          </span>
          <p className="font-bold text-[13px] ">
            Priority of Progress
          </p>
          <div className="flex items-center mt-5 ">
            <img
              src={pix}
              className="w-[50px] h-[50px] border-[1px] border-[silver] rounded-full "
            />
            <span className="text-[12px] font-bold ml-[8px]  ">
              Task creator
            </span>
          </div>
        </div>

    </div>
  )
}

export default AdminProgress