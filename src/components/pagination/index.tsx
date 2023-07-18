import { FC } from 'react';
import { EPaginationDefault } from 'ts/enums/pagination.default';
import { PaginationProps } from 'ts/types/pagination.props';
import { Pagination, Container } from './styles';

const CommonPagination: FC<PaginationProps> = ({ 
  pageSize = EPaginationDefault.PAGE_SIZE,
  pageNumber = EPaginationDefault.PAGE_NUMBER,
  totalItems = 0,
  onChangePage = () => {},
 }) => {

  return (
    <Container>
      <Pagination
        defaultCurrent={EPaginationDefault.PAGE_NUMBER}
        defaultPageSize={EPaginationDefault.PAGE_SIZE}
        onChange={onChangePage}
        current={pageNumber}
        total={totalItems}
        pageSize={pageSize}
        showSizeChanger={false}
      />
    </Container>
  )
};

export default CommonPagination;
