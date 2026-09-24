
"use client"

import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function NuevoChatPopUp({ idUsuario, onChatCreado }) {
    
  const [emailDestino, setEmailDestino] = useState("");

  const onChangeEmail = (event) => {
    setEmailDestino(event.target.value);
  };

  const crearChat = (close) => {
    fetch("http://localhost:4000/chats/individual", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_usuario_emisor: idUsuario,
        email_destino: emailDestino,
      }),
    }).then((response) => {
      return response.json().then((data) => {
        if (response.ok) {
          setEmailDestino("");
          onChatCreado();
          close();
        } else {
          alert(data.message);
        }
      });
    });
  };

  return (
    <Popup trigger={<button>Nuevo chat</button>} modal>
      {(close) => (
        <div>
          <p>Ingrese el mail del contacto</p>
          <input value={emailDestino} onChange={onChangeEmail} />
          <button onClick={() => crearChat(close)}>Crear</button>
          <button onClick={close}>Cancelar</button>
        </div>
      )}
    </Popup>
  );
}