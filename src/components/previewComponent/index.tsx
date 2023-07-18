import { FC } from 'react';
import { useAppSelector } from 'data/store';
import { previewPokemonSelector } from 'data/selectors/pokemon';
import { getLoadingSelector } from 'data/selectors/loading';
import FullScreenLoader from 'components/fullScreenLoader/fullScreenLoader';
import toUpperCaseFirst from 'helpers/toUpperCaseFirst';
import {
  Container,
  PreviewImage,
  DescriptionContainer,
  Title,
  PropertyItem,
  ImageContainer,
} from './styles';

const PreviewComponent: FC = () => {
  const pokemon = useAppSelector(previewPokemonSelector);
  const loading = useAppSelector(getLoadingSelector('get_pokemon'));
  const isLoading = loading || !pokemon;

  if (isLoading) return <FullScreenLoader />;

  return (
    <Container>
      <ImageContainer>
        <PreviewImage src={require(`assets/${pokemon.id}.png`)} />
      </ImageContainer>
      <DescriptionContainer>
        <Title>
          {pokemon.name}
        </Title>
        <PropertyItem>
          <span>Types</span>
          <span>{pokemon.types.map(e => e.type.name).join(', ')}</span>
        </PropertyItem>
        {pokemon.stats.map((item) => (
          <PropertyItem>
            <span>{toUpperCaseFirst(item.stat.name)}</span>
            <span>{item.base_stat}</span>
          </PropertyItem>
        ))}
      </DescriptionContainer>
    </Container>
  );
}

export default PreviewComponent;
