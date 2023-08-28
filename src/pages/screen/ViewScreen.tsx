// // // import { styled } from 'styled-components'
// // import { useForm } from "react-hook-form"
// // import * as yup from "yup"
// // import { yupResolver } from "@hookform/resolvers/yup"
// // // import { createTask } from '../utils/taskAPI'
// // import { useSelector } from 'react-redux'
// // import { useMutation, useQueryClient } from "@tanstack/react-query"

// const InputScreen = () => {
//     // const query = useQueryClient()
//     // const user: any = useSelector((state: any) => state.user)
//     // const schema = yup.object({
//     //     task: yup.string().required(),
//     //     priority: yup.string().required(),
//     // })

//     // const {
//     //     register,
//     //     formState: { errors },
//     //     handleSubmit,
//     //      } = useForm({
//     //         resolver: yupResolver(schema)
//     //     })

//     // const mutate = useMutation({
//     //     mutationKey: ['tasks'],
//     //     mutationFn: (data) => createTask(user, data),
//     //     onSuccess: (() => {
//     //         query.invalidateQueries({ queryKey: ["tasks"] })
//     //     })
//     // })

//     // const onSubmit = handleSubmit(async (res: any) => {
//     //     // createTask(user, res)
//     //     mutate.mutate(res)
//     // })

//     return (
//         <div>
//             <Card clas>
//                 <InputHolder>
//                     <InputText>Task</InputText>
//                     <Input placeholder="Task" className="border-[1px] border-[silver] rounded-[3px] "
//                     />
                    
//                 </InputHolder>
//                 <InputHolder>
//                     <InputText>Priority</InputText>
//                     <Input placeholder="Priority"
                        
//                     />
                    
//                 </InputHolder>

//                 <Button type="submit" >Add Task</Button>
//             </Card>

//         </div>
//     )
// }

// export default InputScreen

// const Card = styled.form``

// const Button = styled.button<{ bg?: string }>`
// width: 99%;
// height: 40px;
// justify-content: center;
// align-items: center;
// display:flex;
// background-color: ${({ bg }) => bg ? "#590059" : "dodgerblue"};

// color: white;
// border-radius: 3px;
// cursor: pointer;
// border: 0;
// outline: none;
// font-family: Poppins;
// font-size: 15px;
// margin-top: 20px;

// `

// const Error = styled.div`
// font-size: 12px;
// color: #c9016c;
// text-align: right;
// `

// const Input = styled.input`
// outline: none;
// border: 1px solid silver;
// border-radius: 3px;
// height: 30px;
// width: 97%;
// padding-left: 5px
// `

// const InputText = styled.div`
// font-size: 13px;
// `

// const InputHolder = styled.div`
// margin: 10px 0;
// `

import pix from "../../assets/work.svg"
import { AiOutlineAlignRight, AiOutlineAlignLeft } from "react-icons/ai"

const ViewScreen = () => {
  return (
    <div className='w-[100%] min-h-[100vh] flex justify-center items-center '>
      <div className='w-[90%] min-h-[500px] flex justify-between '>
      {/* Task */}
      <div className="w-[300px] min-h-[100%] ml-[25px] mr-[20px] bg-[rgb(242,242,247)] ">
        <span className=" text-[#5e6c84] mt-[10px] text-[15px] font-[650] w-[100%] flex justify-center ">TO DO 1</span>
        <div className="bg-[white] w-[95%] h-[100px] ml-[8px] mt-[20px] flex mb-[9px]  ">
        <div className=" w-[95%] h-[100px] ml-[8px] justify-evenly flex  flex-col">
        <span className=" text-[14px] ">Task Name</span>
        <span className=" text-[14px] ">Priority</span>

          <input type="checkbox" className="w-[15px] h-[15px] " />

        </div>
        <div className="flex h-[100%] w-[100px] flex-col ">

          <div className="flex h-[100%] w-[100px] p-[4px] ">
          <img src={pix} className="w-[30px] h-[30px] rounded-full border-red-400 border-[1px] object-cover mr-[5px] "/>
          <span className="text-[11px] font-semibold ">Task creator</span>
          </div>

          <div className="flex  ">
          <button className="w-[30px] h-[30px] hover:cursor-pointer mb-[5px] flex items-center justify-center bg-red-400 rounded-md mr-[12px] ">
            <AiOutlineAlignLeft className="text-[white] text-[20px] "/>
          </button>
          <button className="w-[30px] h-[30px] hover:cursor-pointer mb-[5px] flex items-center justify-center bg-red-400 rounded-md ">
            <AiOutlineAlignRight className="text-[white] text-[20px] "/>
          </button>
          </div>
        </div>
      </div>
      </div>
      {/* Task end */}

      {/* Task */}
      <div className="w-[300px] min-h-[100%] mr-[20px] bg-[rgb(242,242,247)] ">
      <span className=" text-[#5e6c84] mt-[10px] text-[15px] font-[650] w-[100%] flex justify-center uppercase ">In Progress</span>
      </div>
      {/* Task end */}

      {/* Task */}
      <div className="w-[300px] min-h-[100%] mr-[20px] bg-[rgb(242,242,247)] ">
      <span className=" text-[#5e6c84] mt-[10px] text-[15px] font-[650] w-[100%] flex justify-center uppercase ">Done</span>

      
      </div>
      {/* Task end */}
      </div>
    </div>
  )
}

export default ViewScreen