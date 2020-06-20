import React from 'react';

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>Made with Typescript</Title>
      <Separator />
      <Description>Showcase what you made using Typescript</Description>
    </Container>
  );
};

export default ChannelInfo;
