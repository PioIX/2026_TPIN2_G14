"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import ChatList from "@/components/ChatList"
import NuevoChatPopUp from "@/components/NuevoChatPopUp"
import NuevoGrupoPopUp from "@/components/NuevoGrupoPopUp"
import styles from "./page.module.css"

export default function ContactosPage() {
  const searchParams = useSearchParams()
  const idUsuario = searchParams.get("id")
  const nombreUsuario = searchParams.get("nombre")

  const router = useRouter()
  const [chats, setChats] = useState([])

  const cargarChats = () => {
    if (!idUsuario) return
    fetch(`http://localhost:4000/chats/usuario/${idUsuario}`)
      .then((response) => response.json())
      .then((data) => setChats(data))
      .catch((err) => console.error("Error al cargar chats:", err))
  }

  useEffect(() => {
    cargarChats()
  }, [idUsuario])

  const handleClickChat = (chat) => {
    const nombreDestino = chat.nombre || "Chat"
    router.push(`/chat/${chat.id_chat}?idUsuario=${idUsuario}&nombreChat=${encodeURIComponent(nombreDestino)}`)
  }

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Hola, {nombreUsuario}</h1>

      <div className={styles.acciones}>
        <NuevoChatPopUp idUsuario={idUsuario} onChatCreado={cargarChats} />
        <NuevoGrupoPopUp idUsuario={idUsuario} onGrupoCreado={cargarChats} />
      </div>

      <ChatList chats={chats} onClickChat={handleClickChat} />
    </div>
  )
}