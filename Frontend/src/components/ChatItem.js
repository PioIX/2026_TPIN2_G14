// src/components/ChatItem.js
"use client"

export default function ChatItem({ chat, onClick }) {
  const fotoAMostrar = chat.foto ? chat.foto : "/default.png";

  return (
    <div onClick={() => onClick(chat)}>
      <p>{chat.nombre}</p>
      <img src={fotoAMostrar}  width="50" height="50" />
    </div>
  );
}