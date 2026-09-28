INSERT INTO Usuarios (nombre, apellido, email, password, fecha_registro, foto)
VALUES (Juan, Pérez, juan@gmail.com, 123456, 2026-09-14 08:30:00, juan_perez.jfif),
(María, López, maria@gmail.com, 654321, 2026-07-23 03:55:00, maria_lopez.avif);

INSERT INTO UsuariosPorChat (id_chat, id_usuario)
VALUES (1, 1),
(1, 2);

INSERT INTO Chats (nombe, fecha, foto, es_grupo)
VALUES (grupo,	2026-09-14 08:30:00,	grupo.jpg,	1),
(null, 2026-07-23 03:55:00, maria_lopez.avif, 0),
(null, 2026-07-25 20:35:00, juan_perez.jfif, 0);

INSERT INTO Mensajes (contenido, fecha_envio, estado, id_chat, id_usuario)
VALUES ("Hola, como estas?",	2026-09-14 10:30:00,	1,	2,	2),
("cuando se entrega el tp?",	2026-07-23 09:55:00,	0,	1,	1);