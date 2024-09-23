import { useContext } from "react"
import ThemeSwitchButton from "./ThemeSwitchButton"
import { ThemeChangeContext } from "../Context/ThemeChangeContext"



export default function Footer({}) {

    const {theme,setTheme} = useContext(ThemeChangeContext);
    return <> 
    <ThemeSwitchButton theme={theme} setTheme={setTheme}></ThemeSwitchButton>
    <div> Footer theme = {theme} </div>
    </>
}