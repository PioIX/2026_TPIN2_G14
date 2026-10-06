"use client"

import { useState, useEffect } from "react"
import { useParams, useSearchParams } from "next/navigation"
import useSocket from "@/hooks/useSocket"
import Message from "@/components/Message"
import styles from "./page.module.css"

export default function ChatPage() {
  const params = useParams()
  const idChat = params?.id

  const searchParams = useSearchParams()
  const idUsuario = searchParams.get("idUsuario")
  const nombreChat = searchParams.get("nombreChat")

  const { socket } = useSocket()

  const [mensajes, setMensajes] = useState([])
  const [contenido, setContenido] = useState("")

  
  useEffect(() => {
    if (!idChat) return

    fetch(`http://localhost:4000/chats/${idChat}/mensajes`)
      .then((response) => response.json())
      .then((data) => {
        setMensajes(Array.isArray(data) ? data : [])
      })
      .catch((err) => console.error("Error al obtener historial:", err))
  }, [idChat])

  
  useEffect(() => {
    if (!socket || !idChat) return

    
    socket.emit("join_room", idChat)

    const handleReceiveMessage = (nuevoMensaje) => {
      setMensajes((anteriores) => [...anteriores, nuevoMensaje])
    }

    socket.on("receive_message", handleReceiveMessage)

    return () => {
      socket.off("receive_message", handleReceiveMessage)
    }
  }, [socket, idChat])

  const onChangeContenido = (event) => {
    setContenido(event.target.value)
  }

  const enviarMensaje = () => {
    if (!contenido.trim() || !socket) return

    
    socket.emit("send_message", {
      id_chat: idChat,
      id_usuario: idUsuario,
      contenido: contenido,
    })

    setContenido("")
  }

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>{nombreChat || "Chat"}</h1>

      <div className={styles.mensajes}>
        {mensajes.map((msg, index) => (
          <Message
            key={msg.id_mensaje || index}
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
          onKeyDown={(e) => e.key === "Enter" && enviarMensaje()}
          placeholder="Escribe un mensaje..."
        />
        <button className={styles.boton} onClick={enviarMensaje}>
          Enviar
        </button>
      </div>
    </div>
  )
}