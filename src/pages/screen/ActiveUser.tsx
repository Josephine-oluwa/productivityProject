import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { readOneAPI } from "../../apis/UserAuthAPI"


interface iData {
    myID: string
}

const ActiveUser: React.FC<iData> = ({ myID }) => {


    const { data: user } = useQuery({
        queryKey: ["user", { id: myID }],
        queryFn: () => readOneAPI(myID),
        refetchInterval: 1000
    })

    return (
        <div>
            <div
                className="uppercase text-[12px]"
            >{user?.name}</div>
            <div
                className="capitalize text-[7px]"
            >{user?.email}</div>
        </div>
    )
}

export default ActiveUser