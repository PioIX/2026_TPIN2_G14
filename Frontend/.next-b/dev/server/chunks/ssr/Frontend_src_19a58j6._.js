module.exports = [
"[project]/Frontend/src/app/contactos/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$ChatList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/src/components/ChatList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$NuevoChatPopUp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/src/components/NuevoChatPopUp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$NuevoGrupoPopUp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/src/components/NuevoGrupoPopUp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$contactos$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Frontend/src/app/contactos/page.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
function ContactosPage() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const idUsuario = searchParams.get("id");
    const nombreUsuario = searchParams.get("nombre");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const cargarChats = ()=>{
        if (!idUsuario) return;
        fetch(`http://localhost:4000/chats/usuario/${idUsuario}`).then((response)=>response.json()).then((data)=>setChats(data)).catch((err)=>console.error("Error al cargar chats:", err));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        cargarChats();
    }, [
        idUsuario
    ]);
    const handleClickChat = (chat)=>{
        const nombreDestino = chat.nombre || "Chat";
        router.push(`/chat/${chat.id_chat}?idUsuario=${idUsuario}&nombreChat=${encodeURIComponent(nombreDestino)}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$contactos$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contenedor,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$contactos$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titulo,
                children: [
                    "Hola, ",
                    nombreUsuario
                ]
            }, void 0, true, {
                fileName: "[project]/Frontend/src/app/contactos/page.js",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$contactos$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].acciones,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$NuevoChatPopUp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        idUsuario: idUsuario,
                        onChatCreado: cargarChats
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/app/contactos/page.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$NuevoGrupoPopUp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        idUsuario: idUsuario,
                        onGrupoCreado: cargarChats
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/app/contactos/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Frontend/src/app/contactos/page.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$ChatList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                chats: chats,
                onClickChat: handleClickChat
            }, void 0, false, {
                fileName: "[project]/Frontend/src/app/contactos/page.js",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Frontend/src/app/contactos/page.js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/Frontend/src/app/contactos/page.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "acciones": "page-module__5pZPEq__acciones",
  "contenedor": "page-module__5pZPEq__contenedor",
  "titulo": "page-module__5pZPEq__titulo",
});
}),
"[project]/Frontend/src/components/ChatItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/ChatItem.js
"use client";
;
function ChatItem({ chat, onClick }) {
    const fotoAMostrar = chat.foto ? chat.foto : "/default.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: ()=>onClick(chat),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: chat.nombre
            }, void 0, false, {
                fileName: "[project]/Frontend/src/components/ChatItem.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: fotoAMostrar,
                width: "50",
                height: "50"
            }, void 0, false, {
                fileName: "[project]/Frontend/src/components/ChatItem.js",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Frontend/src/components/ChatItem.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Frontend/src/components/ChatList.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$ChatItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/src/components/ChatItem.js [app-ssr] (ecmascript)");
// src/components/ChatList.js
"use client";
;
;
function ChatList({ chats, onClickChat }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("u", {
                    children: "Lista de Chats"
                }, void 0, false, {
                    fileName: "[project]/Frontend/src/components/ChatList.js",
                    lineNumber: 9,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Frontend/src/components/ChatList.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/Frontend/src/components/ChatList.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: chats.map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$ChatItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            chat: chat,
                            onClick: onClickChat
                        }, void 0, false, {
                            fileName: "[project]/Frontend/src/components/ChatList.js",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this)
                    }, chat.id_chat, false, {
                        fileName: "[project]/Frontend/src/components/ChatList.js",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Frontend/src/components/ChatList.js",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Frontend/src/components/ChatList.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Frontend/src/components/NuevoChatPopUp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NuevoChatPopUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$reactjs$2d$popup$2f$dist$2f$reactjs$2d$popup$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/reactjs-popup/dist/reactjs-popup.esm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function NuevoChatPopUp({ idUsuario, onChatCreado }) {
    const [emailDestino, setEmailDestino] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const onChangeEmail = (event)=>{
        setEmailDestino(event.target.value);
    };
    const crearChat = (close)=>{
        fetch("http://localhost:4000/chats/individual", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_usuario_emisor: idUsuario,
                email_destino: emailDestino
            })
        }).then((response)=>{
            return response.json().then((data)=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$reactjs$2d$popup$2f$dist$2f$reactjs$2d$popup$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            children: "Nuevo chat"
        }, void 0, false, {
            fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
            lineNumber: 38,
            columnNumber: 21
        }, this),
        modal: true,
        children: (close)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Ingrese el mail del contacto"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: emailDestino,
                        onChange: onChangeEmail
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>crearChat(close),
                        children: "Crear"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: close,
                        children: "Cancelar"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
                lineNumber: 40,
                columnNumber: 9
            }, this)
    }, void 0, false, {
        fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/Frontend/src/components/NuevoGrupoPopUp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NuevoGrupoPopUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$reactjs$2d$popup$2f$dist$2f$reactjs$2d$popup$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/reactjs-popup/dist/reactjs-popup.esm.js [app-ssr] (ecmascript)");
//NuevoGrupoPopUp
"use client";
;
;
;
;
function NuevoGrupoPopUp({ idUsuario, onGrupoCreado }) {
    const [nombreGrupo, setNombreGrupo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [emails, setEmails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [foto, setFoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const onChangeNombreGrupo = (event)=>{
        setNombreGrupo(event.target.value);
    };
    const onChangeEmails = (event)=>{
        setEmails(event.target.value);
    };
    const onChangeFoto = (event)=>{
        const archivo = event.target.files[0];
        setFoto(archivo);
    };
    const crearGrupo = (close)=>{
        fetch("http://localhost:4000/chats/grupal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_usuario_emisor: idUsuario,
                nombre_grupo: nombreGrupo,
                emails_destino: emails
            })
        }).then((response)=>{
            return response.json().then((data)=>{
                if (response.ok) {
                    setNombreGrupo("");
                    setEmails("");
                    onGrupoCreado();
                    close();
                } else {
                    alert(data.message);
                }
            });
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$reactjs$2d$popup$2f$dist$2f$reactjs$2d$popup$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            children: "Nuevo grupo"
        }, void 0, false, {
            fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
            lineNumber: 51,
            columnNumber: 21
        }, this),
        modal: true,
        children: (close)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Nombre del grupo"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: nombreGrupo,
                        onChange: onChangeNombreGrupo
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Mails de los integrantes"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: emails,
                        onChange: onChangeEmails
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Foto del grupo"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        onChange: onChangeFoto,
                        accept: "image/*"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>crearGrupo(close),
                        children: "Crear grupo"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: close,
                        children: "Cancelar"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                lineNumber: 53,
                columnNumber: 9
            }, this)
    }, void 0, false, {
        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Frontend_src_19a58j6._.js.map