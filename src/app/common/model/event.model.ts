import {PaginableResponse} from './pagination.model';

export interface Event {
    id: number;
    name: string;
}

export interface EventResponse extends PaginableResponse{
    content: Event[];
}

export enum Menu {
    EVENTS = 'EVENTS'
}