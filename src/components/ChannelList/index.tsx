import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text Channel</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='tutorials' />
      <ChannelButton channelName='open-source' />
      <ChannelButton channelName='i-made-this' />
      <ChannelButton channelName='hire-me' />
      <ChannelButton channelName='help' />
    </Container>
  );
};

export default ChannelList;
