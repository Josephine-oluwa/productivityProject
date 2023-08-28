
import pix from "../../assets/admin.webp";

const ViewTasks = () => {
  return (
    <div className="w-full flex flex-col ">
      <div className="flex items-center w-[350px] bg-slate-300 border border-[silver] rounded h-[150px] justify-between p-2 m-2 ">
        <div className="flex">
          <img src={pix} className="mr-2 w-[50px] h-[50px] rounded-full border" />
          <div>
            <div className="font-bold text-[18px]">task</div>
            <div>name</div>
          </div>
        </div>
        <label className="text-red-700 hover:cursor-pointer hover:scale-[1.08] ">delete</label>
      </div>
    </div>
  );
};

export default ViewTasks;
