export interface Pagination {
    page: number;
    size: number;
    filter: {
        name: string;
    }
}

export interface PaginableResponse {
    pageable: {
        pageNumber: number,
        pageSize: number,
    },
    totalElements: number,
}