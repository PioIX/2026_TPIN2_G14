CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha_registro datetime NOT NULL,
    foto VARCHAR(255)
);

CREATE TABLE Chats (
    id_chat INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    fecha datetime,
    foto VARCHAR(255),
    tipo bool
);

CREATE TABLE UsuariosPorChat (
	id_chat_usuario INT AUTO_INCREMENT PRIMARY KEY,
	id_chat INT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_chat) REFERENCES Chats(id_chat),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Mensajes (
    id_mensaje INT AUTO_INCREMENT PRIMARY KEY,
    contenido TEXT NOT NULL,
    fecha_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(255),
	id_chat INT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_chat) REFERENCES Chats(id_chat),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);