import type { Router } from "express";
import { getRoutes as getSysRoutes } from "./sys";

export const routes: Router[] = [
    getSysRoutes( "/v1" ),
];
