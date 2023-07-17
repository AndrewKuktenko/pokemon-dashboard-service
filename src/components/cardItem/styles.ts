import { styled } from "styled-components";
import { Card as AntdCard } from 'antd';
import * as CONSTANTS from 'ts/enums/styles';

interface IMeta {
  titlecolor?: string;
}

const { Meta: AntdMeta } = AntdCard;

export const Card = styled(AntdCard)`
  .ant-card  {
    width: 400px;
  }

  .ant-card-cover {
    padding: 20px 35px 0px 35px;
  }
`;

export const Meta = styled(AntdMeta) <IMeta>`
  .ant-card-meta-title {
    text-align: center;
    font-weight: 500;
    margin: 0 20px;
  }

  .ant-card-meta-detail {
    border-radius: 5px;
    ${(props) => (`background-color: ${props.titlecolor || CONSTANTS.COLORS.L_BLUE}`)}
  }
`;

export const CardImage = styled.img`
  height: inherit;
  width: auto;
`;
