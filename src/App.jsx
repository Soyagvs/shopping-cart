import { useState } from "react"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main.jsx"

function App() {

  //State
  const [auth, setAuth] = useState({})

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
