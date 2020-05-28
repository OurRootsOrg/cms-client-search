import React from 'react';

interface UserMessage {
  message: string;
}

const Message = (props: UserMessage): any => {
  return <p>{props.message}</p>;
};

export default Message;
