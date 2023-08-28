import SecondPart from "../props/SecondPart"
import FirstHeader from "../static/FirstHeader"
import {Outlet} from "react-router-dom"
import FootProps from "../props/FootProps"

const FirstLayout = () => {
  return (
    <div>
        <FirstHeader/>
        <Outlet/>
        <SecondPart/>
        <FootProps/>
    </div>
  )
}

export default FirstLayout