import { FC } from 'react';
import { Card, Meta, CardImage } from './styles';
import * as CONSTANTS from 'ts/enums/styles';
import testImg from 'assets/1.png';

const CardItem: FC = ({ name, ...props }) => {
  const generateColor = () => {
    const colors = [
      CONSTANTS.COLORS.L_BLUE,
      CONSTANTS.COLORS.L_GREEN,
      CONSTANTS.COLORS.L_ORANGE,
      CONSTANTS.COLORS.L_PURPLE,
      CONSTANTS.COLORS.L_RED,
      CONSTANTS.COLORS.L_YELLOW,
    ]

    return colors[Math.floor(Math.random()*colors.length)]
  };

  return (
    <Card
      {...props}
      hoverable
      cover={<CardImage alt="example" src={testImg} />}
    >
      <Meta titlecolor={generateColor()} title="www.instagram.com" />
    </Card>
  )
};

export default CardItem;