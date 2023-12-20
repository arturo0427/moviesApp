import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage, SearchPage, AddMoviePage, DetailMoviePage, ErrorPage } from "../pages";





export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="add" element={<AddMoviePage />} />
            <Route path="movie/:id" element={<DetailMoviePage />} />
            <Route path="error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to='/error' />} />
        </Routes>
    )
}
