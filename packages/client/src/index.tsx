import React from "react";
import { createRoot } from "react-dom/client";
import { App, GlobalStyles } from "@components";
import { ThemeProvider } from "styled-components";

const theme = {};
async function main() {

    // conditional compilation for Mock service worker integration
    // if (process.env.NODE_ENV === "development") {
    //     const {worker} = require("./mocks/browser");
    //     await worker.start({
    //         onUnhandledRequest: "bypass",
    //         quiet: true,
    //         serviceWorker: {
    //             url: "/mockServiceWorker.js"
    //         }
    //     });
    // }

    const rootElement = document.getElementById("root");
    const root = createRoot(
        rootElement || document.body.appendChild(document.createElement("div"))
    );

    // <StrictMode> causes additional
    // rerenders, no representative for production
    // gets stripped in prod builds
    root.render( <React.StrictMode>
        <ThemeProvider theme={ theme }>
            <>
                <GlobalStyles/>
                <App/>
            </>
        </ThemeProvider>
    </React.StrictMode> );
}

main().catch(err => console.error(err));
