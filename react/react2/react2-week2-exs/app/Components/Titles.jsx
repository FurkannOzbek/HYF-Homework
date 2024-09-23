import { ThemeChangeContext } from "../Context/ThemeChangeContext"
import { useContext } from "react"

export default function Titles() {

    const {theme,setTheme} = useContext(ThemeChangeContext)
    return <section>
    <section>
      <div style={{ backgroundColor: theme === "dark" ? "black" : "white", padding: 10 }}>
        <h2> Section 1 </h2>
      </div>
    </section>
    <section>
      <div style={{ backgroundColor: theme === "dark" ? "black" : "white", padding: 20 }}>
        <h3> Section 2 </h3>
      </div>
    </section>
    <section>
      <div style={{ backgroundColor: theme === "dark" ? "black" : "white", padding: 30 }}>
        <h4> Section 3 </h4>
      </div>
    </section>
  </section>
}