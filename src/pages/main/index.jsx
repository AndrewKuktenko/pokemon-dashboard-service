import { FC, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { PaginationQuery } from 'ts/types/pagination.query.d';
import { EPaginationDefault } from 'ts/enums/pagination.default';
import { useAppDispatch, useAppSelector } from 'data/store';
import { findPokemons } from 'data/actions/pokemon';
import { pokemonsDataSelector, pokemonsMetaSelector } from 'data/selectors/pokemon';
import { getLoadingSelector } from 'data/selectors/loading';
import CardItem from 'components/cardItem';
import CommonPagination from 'components/pagination';
import FullScreenLoader from 'components/fullScreenLoader/fullScreenLoader';
import { Container } from './styles';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const pokemons = useAppSelector(pokemonsDataSelector);
  const { totalItems = 0, totalPages = 0 } = useAppSelector(pokemonsMetaSelector);
  const loading = useAppSelector(getLoadingSelector('find_pokemons'));

  const parsedLocation: PaginationQuery = queryString.parse(location.search);  
  const [pageNumber, setPageNumber] = useState(parseInt(parsedLocation.page, 10) || EPaginationDefault.PAGE_NUMBER);
  const [pageSize] = useState(parseInt(parsedLocation.size, 10) || EPaginationDefault.PAGE_SIZE);

  useEffect(() => {
    dispatch(findPokemons({ pageNumber, pageSize }));
    navigate({ pathname: '/', search: `?page=${pageNumber}&size=${pageSize}` });
  }, [dispatch, navigate, pageNumber, pageSize]);

  if (loading) {
    return (<FullScreenLoader />);
  }

  return (
    <>
      <Container>
        {pokemons.map((pokemon) => (<CardItem key={pokemon.name} {...pokemon} onClick={() => navigate(`/pokemon/${pokemon.name}`)} />))}
      </Container>
      <CommonPagination
        totalItems={totalItems}
        totalPages={totalPages}
        pageSize={pageSize}
        pageNumber={pageNumber}
        onChangePage={setPageNumber}
      />
    </>
  );
};

export default MainPage;
