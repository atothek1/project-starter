import { Navigation } from "@components/core";
import { BaseLayout } from "@components/layout";
import { Home, NotFound } from "@pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BaseLayout headerElement={ <h2>Header</h2>} navigationElement={ <Navigation /> } /> } >
                    <Route index element={ <Home /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
