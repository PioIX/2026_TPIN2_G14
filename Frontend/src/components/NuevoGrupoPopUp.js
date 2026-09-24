
"use client"

import { useState } from "react"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

export default function NuevoGrupoPopUp({ idUsuario, onGrupoCreado }) {
    
  const [nombreGrupo, setNombreGrupo] = useState("")
  const [emails, setEmails] = useState("")
  const [foto, setFoto] = useState(null)

  const onChangeNombreGrupo = (event) => {
    setNombreGrupo(event.target.value)
  };

  const onChangeEmails = (event) => {
    setEmails(event.target.value)
  };

  const onChangeFoto = (event) => {
    const archivo = event.target.files[0]
    setFoto(archivo)
  };

  const crearGrupo = (close) => {
    fetch("http://localhost:4000/chats/grupal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_usuario_emisor: idUsuario,
        nombre_grupo: nombreGrupo,
        emails_destino: emails,
      }),
    }).then((response) => {
      return response.json().then((data) => {
        if (response.ok) {
          setNombreGrupo("")
          setEmails("");
          onGrupoCreado()
          close()
        } else {
          alert(data.message)
        }
      });
    });
  };

  return (
    <Popup trigger={<button>Nuevo grupo</button>} modal>
      {(close) => (
        <div>
          <p>Nombre del grupo</p>
          <input value={nombreGrupo} onChange={onChangeNombreGrupo} />

          <p>Mails de los integrantes</p>
          <input value={emails} onChange={onChangeEmails} />

          <p>Foto del grupo</p>
          <input type="file" onChange={onChangeFoto} accept="image/*" />

          <button onClick={() => crearGrupo(close)}>Crear grupo</button>
          <button onClick={close}>Cancelar</button>
        </div>
      )}
    </Popup>
  )
}