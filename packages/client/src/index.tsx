import React from "react";
import { createRoot } from "react-dom/client";
import { App, GlobalStyles } from "@components";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FetchOptions, FetchProvider } from "./context";

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

    const fetchOptions: FetchOptions = {
        baseUrl: "http://localhost:3001/v1"
    };

    // <StrictMode> causes additional
    // rerenders, not representative for production
    // gets stripped in prod builds
    root.render( <React.StrictMode>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>
                <BrowserRouter>
                    <FetchProvider options={ fetchOptions }>
                        <App/>
                    </FetchProvider>
                </BrowserRouter>
            </>
        </ThemeProvider>
    </React.StrictMode> );
}

main().catch(err => console.error(err));
