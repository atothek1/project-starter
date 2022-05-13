import express, { RequestHandler } from "express";
import type { Express, Router } from "express";
import cors from "cors";
import helmet from "helmet";

type ResponseCode = "401" | "403" | "404";

export class Server {
    private app: Express;

    private handlerBuffer: Record<ResponseCode, RequestHandler> = {} as any;

    constructor( private host: string = "localhost", private port: number = 3001 ) {
        this.app = express();
        this.init();
    }

    public routes( routes: Router[] ): this {
        routes.forEach( router => {
            this.app.use(router)
        });
        return this;
    }

    public notFoundHandler( handler:RequestHandler ): this {
        if( !( "404" in this.handlerBuffer ) ) {
            this.handlerBuffer["404"] = handler;
        }
        return this;
    }

    public start(): this {

        console.log(`starting express server: ${this.host}:${this.port}`);

        const fallbackHandler: (code:ResponseCode) => RequestHandler = ( code ): RequestHandler => (_req, res, _next) => { res.status( parseInt( code ) ).send() };

        // register some handlers right before the start of the server
        this.app.use("*", this.handlerBuffer["404"] || fallbackHandler( "404" ) );

        this.app.listen(this.port, this.host, this.handleListen.bind(this));
        return this;
    }

    private init() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.set("etag", false);
        this.app.disable("x-powered-by");
    }

    private handleListen(): void {
        console.log("server started");
    }
}
