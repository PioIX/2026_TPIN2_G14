(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Frontend/src/app/chat/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$hooks$2f$useSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/src/hooks/useSocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$Message$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/src/components/Message.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$chat$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Frontend/src/app/chat/[id]/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ChatPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const idChat = params?.id;
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const idUsuario = searchParams.get("idUsuario");
    const nombreChat = searchParams.get("nombreChat");
    const { socket } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$hooks$2f$useSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [mensajes, setMensajes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contenido, setContenido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            if (!idChat) return;
            fetch(`http://localhost:4000/chats/${idChat}/mensajes`).then({
                "ChatPage.useEffect": (response)=>response.json()
            }["ChatPage.useEffect"]).then({
                "ChatPage.useEffect": (data)=>{
                    setMensajes(Array.isArray(data) ? data : []);
                }
            }["ChatPage.useEffect"]).catch({
                "ChatPage.useEffect": (err)=>console.error("Error al obtener historial:", err)
            }["ChatPage.useEffect"]);
        }
    }["ChatPage.useEffect"], [
        idChat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            if (!socket || !idChat) return;
            socket.emit("join_room", idChat);
            const handleReceiveMessage = {
                "ChatPage.useEffect.handleReceiveMessage": (nuevoMensaje)=>{
                    setMensajes({
                        "ChatPage.useEffect.handleReceiveMessage": (anteriores)=>[
                                ...anteriores,
                                nuevoMensaje
                            ]
                    }["ChatPage.useEffect.handleReceiveMessage"]);
                }
            }["ChatPage.useEffect.handleReceiveMessage"];
            socket.on("receive_message", handleReceiveMessage);
            return ({
                "ChatPage.useEffect": ()=>{
                    socket.off("receive_message", handleReceiveMessage);
                }
            })["ChatPage.useEffect"];
        }
    }["ChatPage.useEffect"], [
        socket,
        idChat
    ]);
    const onChangeContenido = (event)=>{
        setContenido(event.target.value);
    };
    const enviarMensaje = ()=>{
        if (!contenido.trim() || !socket) return;
        socket.emit("send_message", {
            id_chat: idChat,
            id_usuario: idUsuario,
            contenido: contenido
        });
        setContenido("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$chat$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedor,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$chat$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                children: nombreChat || "Chat"
            }, void 0, false, {
                fileName: "[project]/Frontend/src/app/chat/[id]/page.js",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$chat$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mensajes,
                children: mensajes.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$Message$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        mensaje: msg,
                        esPropio: String(msg.id_usuario) === String(idUsuario)
                    }, msg.id_mensaje || index, false, {
                        fileName: "[project]/Frontend/src/app/chat/[id]/page.js",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Frontend/src/app/chat/[id]/page.js",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$chat$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barraEnvio,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$chat$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        value: contenido,
                        onChange: onChangeContenido,
                        onKeyDown: (e)=>e.key === "Enter" && enviarMensaje(),
                        placeholder: "Escribe un mensaje..."
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/app/chat/[id]/page.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$chat$2f5b$id$5d2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].boton,
                        onClick: enviarMensaje,
                        children: "Enviar"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/app/chat/[id]/page.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Frontend/src/app/chat/[id]/page.js",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Frontend/src/app/chat/[id]/page.js",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(ChatPage, "kOMkUQtiy/+OpnsyRUEXnX5tNKM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$hooks$2f$useSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ChatPage;
var _c;
__turbopack_context__.k.register(_c, "ChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend/src/app/chat/[id]/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "barraEnvio": "page-module__rVuh5q__barraEnvio",
  "boton": "page-module__rVuh5q__boton",
  "contenedor": "page-module__rVuh5q__contenedor",
  "input": "page-module__rVuh5q__input",
  "mensajes": "page-module__rVuh5q__mensajes",
  "titulo": "page-module__rVuh5q__titulo",
});
}),
"[project]/Frontend/src/components/Message.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Message
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Message({ mensaje, esPropio }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: esPropio ? "right" : "left"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontWeight: "bold"
                },
                children: mensaje.nombre
            }, void 0, false, {
                fileName: "[project]/Frontend/src/components/Message.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: mensaje.contenido
            }, void 0, false, {
                fileName: "[project]/Frontend/src/components/Message.js",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Frontend/src/components/Message.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Message;
var _c;
__turbopack_context__.k.register(_c, "Message");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend/src/hooks/useSocket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Frontend/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
;
;
function useSocket({ serverUrl = "ws://localhost:4000", options = {} } = {}) {
    _s();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!socketRef.current) {
        // Solo se crea una vez
        socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(serverUrl, options);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSocket.useEffect": ()=>{
            const socket = socketRef.current;
            const onConnect = {
                "useSocket.useEffect.onConnect": ()=>{
                    setIsConnected(true);
                    console.log(" WebSocket conectado:", socket.id);
                }
            }["useSocket.useEffect.onConnect"];
            const onDisconnect = {
                "useSocket.useEffect.onDisconnect": ()=>{
                    setIsConnected(false);
                    console.log(" WebSocket desconectado");
                }
            }["useSocket.useEffect.onDisconnect"];
            socket.on("connect", onConnect);
            socket.on("disconnect", onDisconnect);
            return ({
                "useSocket.useEffect": ()=>{
                    socket.off("connect", onConnect);
                    socket.off("disconnect", onDisconnect);
                }
            })["useSocket.useEffect"];
        }
    }["useSocket.useEffect"], []);
    return {
        socket: socketRef.current,
        isConnected
    };
}
_s(useSocket, "dKqSXJnoeWXkGZYCwYfPCTsfw1o=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Frontend_src_19adf3_._.js.map