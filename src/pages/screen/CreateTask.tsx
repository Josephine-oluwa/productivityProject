// import Inputemoji from "react-input-emoji"
// const CreateTask = () => {
//   return (
//     <div className="w-full h-[100vh] flex justify-center items-center">
//       <div className="w-[40%] h-[40px] rounded-[20px] bg-white">
//         <div><Inputemoji/></div>
//       </div>
//     </div>
//   )
// }

// export default CreateTask


import Input from "react-input-emoji"
import { AiFillDelete } from "react-icons/ai"
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query"
import { createTask , deleteTask, readTask} from "../../apis/tasksApi"
import { useState } from "react"
import { useSelector } from "react-redux"
import ActiveUser from "./ActiveUser"
// import { useAutoAnimate } from "@formkit/auto-animate/react"

const queryClient = new QueryClient()


const TaskScreen = () => {
    // const [parent] = useAutoAnimate()
    const userID = useSelector((state: any) => state.mainState);
    console.log(userID)
    const [tasked, setTasked] = useState<string>("")

    const { data } = useQuery({
        queryKey: ["tasks"],
        queryFn: readTask,
        refetchInterval: 1000
    })

    const mutate = useMutation({
        mutationKey: ["tasks"],
        mutationFn: (data: any) => createTask(data, userID),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
        },
    })


    const onSubmit = () => {
        mutate.mutate(tasked)
    }
    return (
        <div className='flex flex-col items-center' >
            <br />
            <br />
            <div className='w-[400px]' >
                <Input
                    value={tasked}
                    onChange={setTasked}
                    onEnter={onSubmit}
                    cleanOnEnter placeholder='enter a task'
                />
            </div>

            <div className="flex flex-wrap">
                {
                    data?.map(({ task, _id, userID }: any) => (
                        <div key={_id}>
                            <div className="flex items-center w-[150px] border border-[silver] rounded h-[90px] justify-between p-2 m-2 "  >
                                <div>
                                    <div className="font-bold text-[18px]">{task}</div>
                                    <ActiveUser myID={userID} />
                                </div>
                                <AiFillDelete className="text-red-700 hover:cursor-pointer hover:scale-[1.08] "
                                    onClick={() => {
                                        deleteTask(_id)
                                    }}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default TaskScreen