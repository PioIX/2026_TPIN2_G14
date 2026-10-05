"use client"

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import useSocket from "@/hooks/useSocket";
import Message from "@/components/Message";
import styles from "./page.module.css";

export default function ChatPage() {
  const params = useParams();
  const idChat = params.id;

  const searchParams = useSearchParams();
  const idUsuario = searchParams.get("id");
  const nombreUsuario = searchParams.get("nombre");

  const { socket } = useSocket();

  const [mensajes, setMensajes] = useState([]);
  const [contenido, setContenido] = useState("");


  useEffect(() => {
    fetch(`http://localhost:4000/chats/${idChat}/mensajes`)
      .then((response) => response.json())
      .then((data) => {
        setMensajes(data);
      });
  }, [idChat]);


  useEffect(() => {
    if (!socket) return;

    socket.emit("join_room", idChat);

    socket.on("receive_message", (data) => {
      setMensajes((anteriores) => [...anteriores, data]);
    });
  }, [socket, idChat]);

  const onChangeContenido = (event) => {
    setContenido(event.target.value);
  };


  const enviarMensaje = () => {
    socket.emit("send_message", {
      id_chat: idChat,
      id_usuario: idUsuario,
      contenido: contenido,
    });
    setContenido("");
  };

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Chat</h1>

      <div className={styles.mensajes}>
        {mensajes.map((msg) => (
          <Message
            key={msg.id_mensaje}
            mensaje={msg}
            esPropio={String(msg.id_usuario) === String(idUsuario)}
          />
        ))}
      </div>

      <div className={styles.barraEnvio}>
        <input
          className={styles.input}
          value={contenido}
          onChange={onChangeContenido}
        />
        <button className={styles.boton} onClick={enviarMensaje}>Enviar</button>
      </div>
    </div>
  );
}