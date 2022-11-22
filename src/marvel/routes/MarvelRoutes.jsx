import { Navigate, Route, Routes } from "react-router-dom"
import { MarvelLayout } from "../layout/MarvelLayout"
import { CharactersPage, ComicsPage, ColectionsPage } from "../"

export const MarvelRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<MarvelLayout />}>
                <Route path="comics" element={<ComicsPage />} />
                <Route path="characters" element={<CharactersPage />} />
                <Route path="colections" element={<ColectionsPage />} />

                <Route path="/*" element={ <Navigate to="/"/>} />
            </Route>
        </Routes>
    )
}
