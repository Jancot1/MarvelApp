import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"

export const MarvelApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}
