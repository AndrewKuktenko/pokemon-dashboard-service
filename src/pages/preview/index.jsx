import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import PreviewComponent from 'components/previewComponent';

const PreviewPage: FC = () => {
  const params = useParams();
  
  return (
    <Container>
      <PreviewComponent name={params.name} />
    </Container>
  );
};

export default PreviewPage;
