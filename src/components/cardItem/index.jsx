import { FC, useMemo } from 'react';
import { Card, Meta, CardImage } from './styles';
import { CardItemProps } from 'ts/types/card.item.props.d';
import * as CONSTANTS from 'ts/enums/styles';
import getPokemonIdFromUrl from 'helpers/getPokemonIdFromUrl';
import toUpperCaseFirst from 'helpers/toUpperCaseFirst';

const CardItem: FC<CardItemProps> = ({ name, url, ...props }) => {
  const metaColor = useMemo(() => {
    const colors = [
      CONSTANTS.COLORS.L_BLUE,
      CONSTANTS.COLORS.L_GREEN,
      CONSTANTS.COLORS.L_ORANGE,
      CONSTANTS.COLORS.L_PURPLE,
      CONSTANTS.COLORS.L_RED,
      CONSTANTS.COLORS.L_YELLOW,
    ]

    return colors[Math.floor(Math.random()*colors.length)]
  }, []);

  return (
    <Card
      {...props}
      hoverable
      cover={<CardImage alt="example" src={require(`assets/${getPokemonIdFromUrl(url)}.png`)} />}
    >
      <Meta titlecolor={metaColor} title={toUpperCaseFirst(name)} />
    </Card>
  )
};

export default CardItem;