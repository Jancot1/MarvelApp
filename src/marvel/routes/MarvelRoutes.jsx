import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelLayout } from "../layout/MarvelLayout";
import { CharactersPage, ComicsPage, ColectionsPage, HomePage } from "../";
import { ComicView } from "../views/ComicView";
import { CharacterView } from "../views/CharacterView";
import { EventView } from "../views/EventView";


export const MarvelRoutes = () => {
  return (
    <Routes>
      <Route element={<MarvelLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="comics" element={<ComicsPage />} />
        <Route path="characters" element={<CharactersPage />} />
        <Route path="colections" element={<ColectionsPage />} />

        <Route path="comic/:id" element={<ComicView />} />
        <Route path="character/:id" element={<CharacterView />} />
        <Route path="event/:id" element={<EventView/>} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
