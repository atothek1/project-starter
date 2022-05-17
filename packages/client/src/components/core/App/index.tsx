import { Navigation } from "@components/core";
import { BaseLayout } from "@components/layout";
import { Home, NotFound } from "@pages";
import { Route, Routes } from "react-router-dom";

export function App() {
    return (
        <Routes>
            <Route path="/" element={ <BaseLayout headerElement={ <h2>Header</h2>} navigationElement={ <Navigation /> } /> } >
                <Route index element={ <Home /> } />
                <Route path="*" element={ <NotFound /> } />
            </Route>
        </Routes>
    );
}
