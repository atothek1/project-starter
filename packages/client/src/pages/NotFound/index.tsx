import { Highlight } from "@components";
import { useLocation } from "react-router-dom";

export function NotFound() {
    const { pathname } = useLocation();
    return (
        <>
            <h1>Page Not Found</h1>
            <p>The requested page <Highlight>{pathname}</Highlight> does not exists.</p>
        </>
    );
}