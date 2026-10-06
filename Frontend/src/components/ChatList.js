// src/components/ChatList.js
"use client"

import ChatItem from "./ChatItem";

export default function ChatList({ chats, onClickChat }) {
  return (
    <div>
      <h3><u>Lista de Chats</u></h3>
      <br />
      <ul>
        {chats.map((chat) => (
          <li key={chat.id_chat}>
            <ChatItem
              chat={chat}
              onClick={onClickChat}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}