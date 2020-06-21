import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(11).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author='Isaque Igor'
            date='21/06/2020'
            content='Maaan! I love work with React'
          />
        ))}

        <ChannelMessage
          author='Admin'
          date='21/06/2020'
          content={
            <>
              <Mention>@IsaqueIgor</Mention>, Are you willing to work remote or
              abroad?
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author='Isaque Igor'
          date='21/06/2020'
          content='Well, I`d love both ways'
        />
        <ChannelMessage
          author='Admin'
          date='21/06/2020'
          content={
            <>
              <Mention>@IsaqueIgor</Mention>, Send me your CV, pls!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Talk #hire-me' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
