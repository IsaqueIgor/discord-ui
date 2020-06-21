import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelChat from '../ChannelChat';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserLList from '../UserList';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <ChannelChat />
      <UserInfo />
      <UserLList />
    </Grid>
  );
};

export default Layout;
