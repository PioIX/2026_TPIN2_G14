
"use client"

export default function Message({ mensaje, esPropio }) {
  return (
    <div style={{ textAlign: esPropio ? "right" : "left" }}>
      <p style={{ fontWeight: "bold" }}>{mensaje.nombre}</p>
      <p>{mensaje.contenido}</p>
    </div>
  );
}