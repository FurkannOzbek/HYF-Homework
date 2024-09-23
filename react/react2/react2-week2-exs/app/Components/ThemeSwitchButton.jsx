import { useReducer } from "react";
import Reducer from "../Reducer/reducer";
import { TasksDispatchContext,ThemeChangeContext } from "../Context/ThemeChangeContext";
import { useContext } from "react";

export default function ThemeSwitchButton({}) {

  const state = useContext(ThemeChangeContext);
  const dispatch = useContext(TasksDispatchContext);

    function handleThemeButton() {
      const newTheme = state.theme === "dark" ? "light" : "dark";
        dispatch({type:"CHANGE_THEME", theme: newTheme})
        // theme === "dark" ? setTheme("light") : setTheme("dark");
        // console.log(theme);
  
      }
      return <>
      <button onClick={handleThemeButton}> Change theme </button>
      </>
    }