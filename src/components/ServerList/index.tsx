import React from 'react';
import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton mentions={1} />
      <ServerButton />
      <ServerButton hasNotifications={true} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={1} />
    </Container>
  );
};

export default ServerList;
