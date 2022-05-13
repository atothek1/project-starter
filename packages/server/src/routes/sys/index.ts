import { Router } from "express";
import { pingHandler } from "./handlers";

export function getRoutes( path: string ): Router {
    const router = Router();
    const basePath = `${path}/sys`;

    router.get( `${basePath}/ping`, pingHandler );
    // add new routes+handlers here

    return router;
}
