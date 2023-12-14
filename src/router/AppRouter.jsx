import { Route, Routes } from "react-router-dom";
import { RootLayout } from "../layout";
import { HomePage, SearchPage } from "../pages";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
        </Routes>
    )
}
