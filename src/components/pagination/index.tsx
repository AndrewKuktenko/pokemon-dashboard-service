import { FC } from 'react';
import { Pagination, Container } from './styles';

const CommonPagination: FC = () => {
  return (
    <Container>
      <Pagination defaultCurrent={1} total={50} />
    </Container>
  )
};

export default CommonPagination;
