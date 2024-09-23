import { useContext } from "react"
import { ThemeChangeContext } from "../Context/ThemeChangeContext"
import ThemeSwitchButton from "./ThemeSwitchButton"


export default function Header() {

    const {theme,setTheme} = useContext(ThemeChangeContext)

    return <> 
    <ThemeSwitchButton theme={theme} setTheme={setTheme}></ThemeSwitchButton>
    <div> Header theme = {theme} </div>
    </>
}