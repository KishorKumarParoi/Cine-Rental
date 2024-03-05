import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Page"
import { MovieContext } from "./contexts"

export default function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <Main />
        <Footer />
      </MovieContext.Provider>
    </>
  )
}