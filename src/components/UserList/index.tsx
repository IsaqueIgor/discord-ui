import React from 'react';

import { Container, Avatar, Role, User } from './styles';

interface UserProp {
  nickname: string;
  isBot?: boolean;
  online?: boolean;
}

const UserRow: React.FC<UserProp> = ({ nickname, isBot, online }) => {
  return (
    <User>
      <Avatar
        className={[isBot ? 'bot' : '', online ? 'online' : ''].join(' ')}
      />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Available - 3</Role>
      <UserRow nickname='Isaque' />
      <UserRow nickname='MusicBot' isBot />
      <UserRow nickname='Aki' isBot />

      <Role>Offline - 6</Role>
      <UserRow nickname='Admin' isBot />
      <UserRow nickname='Bill Gates' />
      <UserRow nickname='Alexandre' />
      <UserRow nickname='Maria' />
      <UserRow nickname='Jheny' />
      <UserRow nickname='Elon' />
    </Container>
  );
};

export default UserList;
