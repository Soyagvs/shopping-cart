import { useState } from "react"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main.jsx"
import { db } from "./data/db.js"

function App() {

  //useState
  const [data, setData] = useState(db)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
