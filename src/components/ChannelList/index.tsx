import React from 'react';

//import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text Channel</span>
        <AddCategoryIcon />
      </Category>
    </Container>
  );
};

export default ChannelList;
