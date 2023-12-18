import { Route, Routes } from "react-router-dom";
import { HomePage, SearchPage, AddMoviePage } from "../pages";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="add" element={<AddMoviePage />} />
        </Routes>
    )
}
