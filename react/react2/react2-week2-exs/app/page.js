"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useReducer, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ThemeSwitchButton from "./Components/ThemeSwitchButton";
import { ThemeChangeContext } from "./Context/ThemeChangeContext";
import Titles from "./Components/Titles";
import Reducer from "./Reducer/reducer";
import { TasksDispatchContext } from "./Context/ThemeChangeContext";

export default function Home({}) {
  const [state, dispatch] = useReducer(Reducer, { todos: [], todo: "", theme: "light" });
  // const [theme, setTheme] = useState("light");

  // const data = {
  //   theme,
  //   setTheme,
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", todo: state.todo });
  };

  const handleInputChange = (input) => {
    // setTodo(input.target.value);
    dispatch({ type: "SET_TODO", value: input.target.value });
  };

  return (
    <>
      <ThemeChangeContext.Provider value={state}>
        <TasksDispatchContext.Provider value={dispatch}>
          <Header></Header>
          <Titles></Titles>
          <Footer></Footer>
        </TasksDispatchContext.Provider>
      </ThemeChangeContext.Provider>

      <h1> To Do app </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.todo} onChange={handleInputChange}></input>
        <button type="submit"> Add </button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}> {todo}</li>
        ))}
      </ul>
    </>
  );
}
