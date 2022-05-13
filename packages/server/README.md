# @atothek/server

Adding new routes are a manual process atm. which can be optimized,
with cli based generators or schema based generators etc. this is just a simple starting point that at least
separates handlers from resolvers and data sources.

## adding new router namespace /user

1. create a new file & folder structure

```
./src/routes/
  |-- data/
    |-- handlers/
        |-- index.ts
    |-- resolvers/
        |-- index.ts
    |-- index.ts
```

2. create new resolver `./src/routes/data/resolvers/getDataResponse.ts`

```typescript
// getDataResponse.ts
import { PaginationParameters } from "../../../types";
import { envelopeResponse } from "../../../utils/response";
import { ResponseEnvelope } from "../../../types";

interface DataResponse {
    readonly id: string;
    readonly title: string;
    readonly created: Date;
}

export function getDataResponse( pagination: PaginationParameters ): ResponseEnvelope<DataResponse[]> {
    const data = new Array( pagination.limit )
        .fill( { id: "id", title: "title", created: new Date() } )
        .map( ( _, idx ) => {
            return { id: "id#" + idx, title: "Some Title " + idx, created: new Date( +( new Date() ) - Math.floor( Math.random() * 10000000000 ) ) }
        });
    return envelopeResponse( data, { ...pagination, total: 100 } );
}
```

3. create new handler `./src/routes/data/handlers/dataHandler.ts` 

```typescript
// dataHandler.ts
import { NextFunction, Request, Response } from "express";
import { extractPaginationParameters } from "../../../utils/params";
import { getDataResponse } from "../resolvers/getDataResponse";

// underscore params that are not used
export function dataHandler( request: Request, response:Response, _next: NextFunction  ): void {
    const pagination = extractPaginationParameters( request, "created" );
    const data = getDataResponse( pagination );
    response.status( 200 ).json( data );
}
```

4. create express router for namespace `user` in  `./src/routes/user/index.ts`

```typescript
// index.ts
import { Router } from "express";
import { dataHandler } from "./handlers";

export function getRoutes( path: string ): Router {
    const router = Router();
    const basePath = `${path}/data`;

    router.get( `${basePath}`, dataHandler );
    // add new routes+handlers here

    return router;
}
```

5. add new namespace routes to server

open `./src/routes/index.ts`

```typescript
// index.ts
import type { Router } from "express";
import { getRoutes as getSysRoutes } from "./sys";
import { getRoutes as getDataRoutes } from "./data";

export const routes: Router[] = [
    getSysRoutes( "/v1" ),
    getDataRoutes( "/v1" ),
];
```