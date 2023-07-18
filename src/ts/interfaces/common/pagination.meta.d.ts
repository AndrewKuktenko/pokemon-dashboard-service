import { IPagination } from './pagination';

export interface IPaginationMeta extends IPagination {
    totalPages?: number;
    totalItems?: number;
}