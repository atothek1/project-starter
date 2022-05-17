import { Server } from "./core/Server";
import { routes } from "./routes";
import { notFoundHandler } from "./routes/sys/handlers";

new Server( { allowedOrigins: [ "http://localhost:3000" ] } )
    .routes( routes )
    .notFoundHandler( notFoundHandler )
    .start();