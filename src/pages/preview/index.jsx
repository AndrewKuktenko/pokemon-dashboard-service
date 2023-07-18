import { FC, useEffect } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'data/store';
import { useParams } from 'react-router-dom';
import { getPokemon } from 'data/actions/pokemon';
import { Container } from './styles';
import PreviewComponent from 'components/previewComponent';

const PreviewPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    dispatch(getPokemon(name, (msg: string) => {
      message.open({ type: 'error', content: msg });
      navigate('/');
    }));
  }, [dispatch, navigate, name]);
  
  return (
    <Container>
      <PreviewComponent />
    </Container>
  );
};

export default PreviewPage;
