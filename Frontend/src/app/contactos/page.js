
"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import ChatList from "@/components/ChatList"
import NuevoChatPopUp from "@/components/NuevoChatPopUp"
import NuevoGrupoPopUp from "@/components/NuevoGrupoPopUp"

export default function ContactosPage() {
  const searchParams = useSearchParams()
  const idUsuario = searchParams.get("id")
  const nombreUsuario = searchParams.get("nombre")

  const router = useRouter()

  const [chats, setChats] = useState([])

  const cargarChats = () => {
    fetch(`http://localhost:4000/chats/usuario/${idUsuario}`)
      .then((response) => response.json())
      .then((data) => {
        setChats(data)
      })
  }

  useEffect(() => {
    cargarChats()
  }, [idUsuario])

  const handleClickChat = (chat) => {
    router.push(`/chat/${chat.id_chat}?id=${idUsuario}&nombre=${nombreUsuario}`)
  }

  return (
    <div>
      <h1>Hola, {nombreUsuario}</h1>

      <NuevoChatPopUp idUsuario={idUsuario} onChatCreado={cargarChats} />
      <NuevoGrupoPopUp idUsuario={idUsuario} onGrupoCreado={cargarChats} />

      <ChatList chats={chats} onClickChat={handleClickChat} />
    </div>
  );
}