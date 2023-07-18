import { IPaginationMeta } from 'ts/interfaces/common/pagination.meta'

declare function onChangePage(pageNumber: number): void;

export type PaginationProps = IPaginationMeta & {
  onChangePage?,
}