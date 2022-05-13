export interface PaginationParameters {
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: Order;
    readonly orderBy?: string;
}

export type Order = "ASC" | "DESC";
export type Environment = "development" | "production";

export type Pagination = PaginationParameters & { readonly total: number };

export interface ResponseEnvelope<TData> {
    readonly pagination?: Pagination;
    readonly data: TData;
}