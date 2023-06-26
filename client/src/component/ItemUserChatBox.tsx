import { StatusEnum } from 'constants/enum';
import React from 'react';

interface IItemUserChatBoxProps {
  src: string;
  nickname: string;
  status: StatusEnum;
}

const STATUS_SIGNAL_USER = {
  [StatusEnum.ONLINE]: 'blue',
  [StatusEnum.OFFLINE]: 'orange'
}

const TEXT_STATUS = {
  [StatusEnum.ONLINE]: 'Online',
  [StatusEnum.OFFLINE]: 'Offline'
}

const ItemUserChatBox = ({ src, nickname, status }: IItemUserChatBoxProps) => {
  return (
    <li>
      <img src={src} alt={nickname} />
      <div>
        <h2>{nickname}</h2>
        <h3>
          <span className={`status ${STATUS_SIGNAL_USER[status]}`}></span>
          {TEXT_STATUS[status]}
        </h3>
      </div>
    </li>
  )
}

export default React.memo(ItemUserChatBox);
