import { Server } from "./core/Server";
import { routes } from "./routes";
import { notFoundHandler } from "./routes/sys/handlers/notFoundHandler";

new Server()
    .routes( routes )
    .notFoundHandler( notFoundHandler )
    .start();