import React, {PropsWithChildren} from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminRoute: React.FC<PropsWithChildren> = ({children}) => {
const admin = useSelector((state: any) => state.adminState)
  return (
    <div>
        {
            admin ? <div>{children}</div> : <Navigate to="/"/>
        }
    </div>
  )
}

export default AdminRoute