import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import CardItem from 'components/cardItem';
import CommonPagination from 'components/pagination';
import { Container } from './styles';

const MainPage: FC = () => {
  const arr = new Array(20).fill(0);
  const navigate = useNavigate();

  return (
    <>
      <Container>
        {arr.map((item, index) => (<CardItem key={`name-${index}`} onClick={() => navigate(`/name-${index}`)} />))}
      </Container>
      <CommonPagination />
    </>
  );
};

export default MainPage;
