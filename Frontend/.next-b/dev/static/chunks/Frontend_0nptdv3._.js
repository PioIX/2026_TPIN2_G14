(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Frontend/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Frontend/node_modules/reactjs-popup/dist/reactjs-popup.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popup",
    ()=>Popup,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var useOnEscape = function useOnEscape(handler, active) {
    if (active === void 0) {
        active = true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOnEscape.useEffect": function() {
            if (!active) return;
            var listener = function listener(event) {
                // check if key is an Escape
                if (event.key === 'Escape') handler(event);
            };
            document.addEventListener('keyup', listener);
            return ({
                "useOnEscape.useEffect": function() {
                    if (!active) return;
                    document.removeEventListener('keyup', listener);
                }
            })["useOnEscape.useEffect"];
        }
    }["useOnEscape.useEffect"], [
        handler,
        active
    ]);
};
var useRepositionOnResize = function useRepositionOnResize(handler, active) {
    if (active === void 0) {
        active = true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRepositionOnResize.useEffect": function() {
            if (!active) return;
            var listener = function listener() {
                handler();
            };
            window.addEventListener('resize', listener);
            return ({
                "useRepositionOnResize.useEffect": function() {
                    if (!active) return;
                    window.removeEventListener('resize', listener);
                }
            })["useRepositionOnResize.useEffect"];
        }
    }["useRepositionOnResize.useEffect"], [
        handler,
        active
    ]);
};
var useOnClickOutside = function useOnClickOutside(ref, handler, active) {
    if (active === void 0) {
        active = true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOnClickOutside.useEffect": function() {
            if (!active) return;
            var listener = function listener(event) {
                // Do nothing if clicking ref's element or descendent elements
                var refs = Array.isArray(ref) ? ref : [
                    ref
                ];
                var contains = false;
                refs.forEach({
                    "useOnClickOutside.useEffect.listener": function(r) {
                        if (!r.current || r.current.contains(event.target)) {
                            contains = true;
                            return;
                        }
                    }
                }["useOnClickOutside.useEffect.listener"]);
                event.stopPropagation();
                if (!contains) handler(event);
            };
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
            return ({
                "useOnClickOutside.useEffect": function() {
                    if (!active) return;
                    document.removeEventListener('mousedown', listener);
                    document.removeEventListener('touchstart', listener);
                }
            })["useOnClickOutside.useEffect"];
        }
    }["useOnClickOutside.useEffect"], [
        ref,
        handler,
        active
    ]);
}; // Make sure that user is not able TAB out of the Modal content on Open
var useTabbing = function useTabbing(contentRef, active) {
    if (active === void 0) {
        active = true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTabbing.useEffect": function() {
            if (!active) return;
            var listener = function listener(event) {
                // check if key is an Tab
                if (event.keyCode === 9) {
                    var _contentRef$current;
                    var els = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
                    var focusableEls = Array.prototype.slice.call(els);
                    if (focusableEls.length === 1) {
                        event.preventDefault();
                        return;
                    }
                    var firstFocusableEl = focusableEls[0];
                    var lastFocusableEl = focusableEls[focusableEls.length - 1];
                    if (event.shiftKey && document.activeElement === firstFocusableEl) {
                        event.preventDefault();
                        lastFocusableEl.focus();
                    } else if (document.activeElement === lastFocusableEl) {
                        event.preventDefault();
                        firstFocusableEl.focus();
                    }
                }
            };
            document.addEventListener('keydown', listener);
            return ({
                "useTabbing.useEffect": function() {
                    if (!active) return;
                    document.removeEventListener('keydown', listener);
                }
            })["useTabbing.useEffect"];
        }
    }["useTabbing.useEffect"], [
        contentRef,
        active
    ]);
};
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var Style = {
    popupContent: {
        tooltip: {
            position: 'absolute',
            zIndex: 999
        },
        modal: {
            position: 'relative',
            margin: 'auto'
        }
    },
    popupArrow: {
        height: '8px',
        width: '16px',
        position: 'absolute',
        background: 'transparent',
        color: '#FFF',
        zIndex: -1
    },
    overlay: {
        tooltip: {
            position: 'fixed',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            zIndex: 999
        },
        modal: {
            position: 'fixed',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            display: 'flex',
            zIndex: 999
        }
    }
};
var POSITION_TYPES = [
    'top left',
    'top center',
    'top right',
    'right top',
    'right center',
    'right bottom',
    'bottom left',
    'bottom center',
    'bottom right',
    'left top',
    'left center',
    'left bottom'
];
var getCoordinatesForPosition = function getCoordinatesForPosition(triggerBounding, ContentBounding, position, arrow, _ref) {
    var offsetX = _ref.offsetX, offsetY = _ref.offsetY;
    var margin = arrow ? 8 : 0;
    var args = position.split(' '); // the step N 1 : center the popup content => ok
    var CenterTop = triggerBounding.top + triggerBounding.height / 2;
    var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
    var height = ContentBounding.height, width = ContentBounding.width;
    var top = CenterTop - height / 2;
    var left = CenterLeft - width / 2;
    var transform = '';
    var arrowTop = '0%';
    var arrowLeft = '0%'; // the  step N 2 : => ok
    switch(args[0]){
        case 'top':
            top -= height / 2 + triggerBounding.height / 2 + margin;
            transform = "rotate(180deg)  translateX(50%)";
            arrowTop = '100%';
            arrowLeft = '50%';
            break;
        case 'bottom':
            top += height / 2 + triggerBounding.height / 2 + margin;
            transform = "rotate(0deg) translateY(-100%) translateX(-50%)";
            arrowLeft = '50%';
            break;
        case 'left':
            left -= width / 2 + triggerBounding.width / 2 + margin;
            transform = " rotate(90deg)  translateY(50%) translateX(-25%)";
            arrowLeft = '100%';
            arrowTop = '50%';
            break;
        case 'right':
            left += width / 2 + triggerBounding.width / 2 + margin;
            transform = "rotate(-90deg)  translateY(-150%) translateX(25%)";
            arrowTop = '50%';
            break;
    }
    switch(args[1]){
        case 'top':
            top = triggerBounding.top;
            arrowTop = triggerBounding.height / 2 + "px";
            break;
        case 'bottom':
            top = triggerBounding.top - height + triggerBounding.height;
            arrowTop = height - triggerBounding.height / 2 + "px";
            break;
        case 'left':
            left = triggerBounding.left;
            arrowLeft = triggerBounding.width / 2 + "px";
            break;
        case 'right':
            left = triggerBounding.left - width + triggerBounding.width;
            arrowLeft = width - triggerBounding.width / 2 + "px";
            break;
    }
    top = args[0] === 'top' ? top - offsetY : top + offsetY;
    left = args[0] === 'left' ? left - offsetX : left + offsetX;
    return {
        top: top,
        left: left,
        transform: transform,
        arrowLeft: arrowLeft,
        arrowTop: arrowTop
    };
};
var getTooltipBoundary = function getTooltipBoundary(keepTooltipInside) {
    // add viewport
    var boundingBox = {
        top: 0,
        left: 0,
        /* eslint-disable-next-line no-undef */ width: window.innerWidth,
        /* eslint-disable-next-line no-undef */ height: window.innerHeight
    };
    if (typeof keepTooltipInside === 'string') {
        /* eslint-disable-next-line no-undef */ var selector = document.querySelector(keepTooltipInside);
        if ("TURBOPACK compile-time truthy", 1) {
            if (selector === null) throw new Error(keepTooltipInside + " selector does not exist : keepTooltipInside must be a valid html selector 'class' or 'Id'  or a boolean value");
        }
        if (selector !== null) boundingBox = selector.getBoundingClientRect();
    }
    return boundingBox;
};
var calculatePosition = function calculatePosition(triggerBounding, ContentBounding, position, arrow, _ref2, keepTooltipInside) {
    var offsetX = _ref2.offsetX, offsetY = _ref2.offsetY;
    var bestCoords = {
        arrowLeft: '0%',
        arrowTop: '0%',
        left: 0,
        top: 0,
        transform: 'rotate(135deg)'
    };
    var i = 0;
    var wrapperBox = getTooltipBoundary(keepTooltipInside);
    var positions = Array.isArray(position) ? position : [
        position
    ]; // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array
    if (keepTooltipInside || Array.isArray(position)) positions = [].concat(positions, POSITION_TYPES); // add viewPort for WarpperBox
    // wrapperBox.top = wrapperBox.top + window.scrollY;
    // wrapperBox.left = wrapperBox.left + window.scrollX;
    while(i < positions.length){
        bestCoords = getCoordinatesForPosition(triggerBounding, ContentBounding, positions[i], arrow, {
            offsetX: offsetX,
            offsetY: offsetY
        });
        var contentBox = {
            top: bestCoords.top,
            left: bestCoords.left,
            width: ContentBounding.width,
            height: ContentBounding.height
        };
        if (contentBox.top <= wrapperBox.top || contentBox.left <= wrapperBox.left || contentBox.top + contentBox.height >= wrapperBox.top + wrapperBox.height || contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width) {
            i++;
        } else {
            break;
        }
    }
    return bestCoords;
};
var popupIdCounter = 0;
var getRootPopup = function getRootPopup() {
    var PopupRoot = document.getElementById('popup-root');
    if (PopupRoot === null) {
        PopupRoot = document.createElement('div');
        PopupRoot.setAttribute('id', 'popup-root');
        document.body.appendChild(PopupRoot);
    }
    return PopupRoot;
};
var Popup = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$trigger = _ref.trigger, trigger = _ref$trigger === void 0 ? null : _ref$trigger, _ref$onOpen = _ref.onOpen, onOpen = _ref$onOpen === void 0 ? function() {} : _ref$onOpen, _ref$onClose = _ref.onClose, onClose = _ref$onClose === void 0 ? function() {} : _ref$onClose, _ref$defaultOpen = _ref.defaultOpen, defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen, _ref$open = _ref.open, open = _ref$open === void 0 ? undefined : _ref$open, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, _ref$nested = _ref.nested, nested = _ref$nested === void 0 ? false : _ref$nested, _ref$closeOnDocumentC = _ref.closeOnDocumentClick, closeOnDocumentClick = _ref$closeOnDocumentC === void 0 ? true : _ref$closeOnDocumentC, _ref$repositionOnResi = _ref.repositionOnResize, repositionOnResize = _ref$repositionOnResi === void 0 ? true : _ref$repositionOnResi, _ref$closeOnEscape = _ref.closeOnEscape, closeOnEscape = _ref$closeOnEscape === void 0 ? true : _ref$closeOnEscape, _ref$on = _ref.on, on = _ref$on === void 0 ? [
        'click'
    ] : _ref$on, _ref$contentStyle = _ref.contentStyle, contentStyle = _ref$contentStyle === void 0 ? {} : _ref$contentStyle, _ref$arrowStyle = _ref.arrowStyle, arrowStyle = _ref$arrowStyle === void 0 ? {} : _ref$arrowStyle, _ref$overlayStyle = _ref.overlayStyle, overlayStyle = _ref$overlayStyle === void 0 ? {} : _ref$overlayStyle, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, _ref$position = _ref.position, position = _ref$position === void 0 ? 'bottom center' : _ref$position, _ref$modal = _ref.modal, modal = _ref$modal === void 0 ? false : _ref$modal, _ref$lockScroll = _ref.lockScroll, lockScroll = _ref$lockScroll === void 0 ? false : _ref$lockScroll, _ref$arrow = _ref.arrow, arrow = _ref$arrow === void 0 ? true : _ref$arrow, _ref$offsetX = _ref.offsetX, offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX, _ref$offsetY = _ref.offsetY, offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY, _ref$mouseEnterDelay = _ref.mouseEnterDelay, mouseEnterDelay = _ref$mouseEnterDelay === void 0 ? 100 : _ref$mouseEnterDelay, _ref$mouseLeaveDelay = _ref.mouseLeaveDelay, mouseLeaveDelay = _ref$mouseLeaveDelay === void 0 ? 100 : _ref$mouseLeaveDelay, _ref$keepTooltipInsid = _ref.keepTooltipInside, keepTooltipInside = _ref$keepTooltipInsid === void 0 ? false : _ref$keepTooltipInsid, children = _ref.children;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(open || defaultOpen), isOpen = _useState[0], setIsOpen = _useState[1];
    var triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var focusedElBeforeOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var popupId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("popup-" + ++popupIdCounter);
    var isModal = modal ? true : !trigger;
    var timeOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    useIsomorphicLayoutEffect({
        "Popup.useIsomorphicLayoutEffect": function() {
            if (isOpen) {
                focusedElBeforeOpen.current = document.activeElement;
                setPosition();
                focusContentOnOpen(); // for accessibility
                lockScrolll();
            } else {
                resetScroll();
            }
            return ({
                "Popup.useIsomorphicLayoutEffect": function() {
                    clearTimeout(timeOut.current);
                }
            })["Popup.useIsomorphicLayoutEffect"];
        }
    }["Popup.useIsomorphicLayoutEffect"], [
        isOpen
    ]); // for uncontrolled popup we need to sync isOpen with open prop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popup.useEffect": function() {
            if (typeof open === 'boolean') {
                if (open) openPopup();
                else closePopup();
            }
        }
    }["Popup.useEffect"], [
        open,
        disabled
    ]);
    var openPopup = function openPopup(event) {
        if (isOpen || disabled) return;
        setIsOpen(true);
        setTimeout(function() {
            return onOpen(event);
        }, 0);
    };
    var closePopup = function closePopup(event) {
        var _focusedElBeforeOpen$;
        if (!isOpen || disabled) return;
        setIsOpen(false);
        if (isModal) (_focusedElBeforeOpen$ = focusedElBeforeOpen.current) === null || _focusedElBeforeOpen$ === void 0 ? void 0 : _focusedElBeforeOpen$.focus();
        setTimeout(function() {
            return onClose(event);
        }, 0);
    };
    var togglePopup = function togglePopup(event) {
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        if (!isOpen) openPopup(event);
        else closePopup(event);
    };
    var onMouseEnter = function onMouseEnter(event) {
        clearTimeout(timeOut.current);
        timeOut.current = setTimeout(function() {
            return openPopup(event);
        }, mouseEnterDelay);
    };
    var onContextMenu = function onContextMenu(event) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        togglePopup();
    };
    var onMouseLeave = function onMouseLeave(event) {
        clearTimeout(timeOut.current);
        timeOut.current = setTimeout(function() {
            return closePopup(event);
        }, mouseLeaveDelay);
    };
    var lockScrolll = function lockScrolll() {
        if (isModal && lockScroll) document.getElementsByTagName('body')[0].style.overflow = 'hidden'; // migrate to document.body
    };
    var resetScroll = function resetScroll() {
        if (isModal && lockScroll) document.getElementsByTagName('body')[0].style.overflow = 'auto';
    };
    var focusContentOnOpen = function focusContentOnOpen() {
        var _contentRef$current;
        var focusableEls = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
        var firstEl = Array.prototype.slice.call(focusableEls)[0];
        firstEl === null || firstEl === void 0 ? void 0 : firstEl.focus();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Popup.useImperativeHandle": function() {
            return {
                open: function open() {
                    openPopup();
                },
                close: function close() {
                    closePopup();
                },
                toggle: function toggle() {
                    togglePopup();
                }
            };
        }
    }["Popup.useImperativeHandle"]); // set Position
    var setPosition = function setPosition() {
        if (isModal || !isOpen) return;
        if (!(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(contentRef === null || contentRef === void 0 ? void 0 : contentRef.current)) return; /// show error as one of ref is undefined
        var trigger = triggerRef.current.getBoundingClientRect();
        var content = contentRef.current.getBoundingClientRect();
        var cords = calculatePosition(trigger, content, position, arrow, {
            offsetX: offsetX,
            offsetY: offsetY
        }, keepTooltipInside);
        contentRef.current.style.top = cords.top + window.scrollY + "px";
        contentRef.current.style.left = cords.left + window.scrollX + "px";
        if (arrow && !!arrowRef.current) {
            var _arrowStyle$top, _arrowStyle$left;
            arrowRef.current.style.transform = cords.transform;
            arrowRef.current.style.setProperty('-ms-transform', cords.transform);
            arrowRef.current.style.setProperty('-webkit-transform', cords.transform);
            arrowRef.current.style.top = ((_arrowStyle$top = arrowStyle.top) === null || _arrowStyle$top === void 0 ? void 0 : _arrowStyle$top.toString()) || cords.arrowTop;
            arrowRef.current.style.left = ((_arrowStyle$left = arrowStyle.left) === null || _arrowStyle$left === void 0 ? void 0 : _arrowStyle$left.toString()) || cords.arrowLeft;
        }
    }; // hooks
    useOnEscape(closePopup, closeOnEscape); // can be optimized if we disabled for hover
    useTabbing(contentRef, isOpen && isModal);
    useRepositionOnResize(setPosition, repositionOnResize);
    useOnClickOutside(!!trigger ? [
        contentRef,
        triggerRef
    ] : [
        contentRef
    ], closePopup, closeOnDocumentClick && !nested); // we need to add a ne
    // render the trigger element and add events
    var renderTrigger = function renderTrigger() {
        var triggerProps = {
            key: 'T',
            ref: triggerRef,
            'aria-describedby': popupId.current
        };
        var onAsArray = Array.isArray(on) ? on : [
            on
        ];
        for(var i = 0, len = onAsArray.length; i < len; i++){
            switch(onAsArray[i]){
                case 'click':
                    triggerProps.onClick = togglePopup;
                    break;
                case 'right-click':
                    triggerProps.onContextMenu = onContextMenu;
                    break;
                case 'hover':
                    triggerProps.onMouseEnter = onMouseEnter;
                    triggerProps.onMouseLeave = onMouseLeave;
                    break;
                case 'focus':
                    triggerProps.onFocus = onMouseEnter;
                    triggerProps.onBlur = onMouseLeave;
                    break;
            }
        }
        if (typeof trigger === 'function') {
            var comp = trigger(isOpen);
            return !!trigger && __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(comp, triggerProps);
        }
        return !!trigger && __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(trigger, triggerProps);
    };
    var addWarperAction = function addWarperAction() {
        var popupContentStyle = isModal ? Style.popupContent.modal : Style.popupContent.tooltip;
        var childrenElementProps = {
            className: "popup-content " + (className !== '' ? className.split(' ').map(function(c) {
                return c + "-content";
            }).join(' ') : ''),
            style: _extends({}, popupContentStyle, contentStyle, {
                pointerEvents: 'auto'
            }),
            ref: contentRef,
            onClick: function onClick(e) {
                e.stopPropagation();
            }
        };
        if (!modal && on.indexOf('hover') >= 0) {
            childrenElementProps.onMouseEnter = onMouseEnter;
            childrenElementProps.onMouseLeave = onMouseLeave;
        }
        return childrenElementProps;
    };
    var renderContent = function renderContent() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({}, addWarperAction(), {
            key: "C",
            role: isModal ? 'dialog' : 'tooltip',
            id: popupId.current
        }), arrow && !isModal && __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: arrowRef,
            style: Style.popupArrow
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
            "data-testid": "arrow",
            className: "popup-arrow " + (className !== '' ? className.split(' ').map(function(c) {
                return c + "-arrow";
            }).join(' ') : ''),
            viewBox: "0 0 32 16",
            style: _extends({
                position: 'absolute'
            }, arrowStyle)
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M16 0l16 16H0z",
            fill: "currentcolor"
        }))), children && typeof children === 'function' ? children(closePopup, isOpen) : children);
    };
    var overlay = !(on.indexOf('hover') >= 0);
    var ovStyle = isModal ? Style.overlay.modal : Style.overlay.tooltip;
    var content = [
        overlay && __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            key: "O",
            "data-testid": "overlay",
            "data-popup": isModal ? 'modal' : 'tooltip',
            className: "popup-overlay " + (className !== '' ? className.split(' ').map(function(c) {
                return c + "-overlay";
            }).join(' ') : ''),
            style: _extends({}, ovStyle, overlayStyle, {
                pointerEvents: closeOnDocumentClick && nested || isModal ? 'auto' : 'none'
            }),
            onClick: closeOnDocumentClick && nested ? closePopup : undefined,
            tabIndex: -1
        }, isModal && renderContent()),
        !isModal && renderContent()
    ];
    return __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, renderTrigger(), isOpen && __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(content, getRootPopup()));
});
const __TURBOPACK__default__export__ = Popup;
;
}),
"[project]/Frontend/src/app/contactos/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$ChatList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/src/components/ChatList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$NuevoChatPopUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/src/components/NuevoChatPopUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$NuevoGrupoPopUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/src/components/NuevoGrupoPopUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$contactos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Frontend/src/app/contactos/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ContactosPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const idUsuario = searchParams.get("id");
    const nombreUsuario = searchParams.get("nombre");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const cargarChats = ()=>{
        if (!idUsuario) return;
        fetch(`http://localhost:4000/chats/usuario/${idUsuario}`).then((response)=>response.json()).then((data)=>setChats(data)).catch((err)=>console.error("Error al cargar chats:", err));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactosPage.useEffect": ()=>{
            cargarChats();
        }
    }["ContactosPage.useEffect"], [
        idUsuario
    ]);
    const handleClickChat = (chat)=>{
        const nombreDestino = chat.nombre || "Chat";
        router.push(`/chat/${chat.id_chat}?idUsuario=${idUsuario}&nombreChat=${encodeURIComponent(nombreDestino)}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$contactos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedor,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$contactos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                children: [
                    "Hola, ",
                    nombreUsuario
                ]
            }, void 0, true, {
                fileName: "[project]/Frontend/src/app/contactos/page.js",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$app$2f$contactos$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].acciones,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$NuevoChatPopUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        idUsuario: idUsuario,
                        onChatCreado: cargarChats
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/app/contactos/page.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$NuevoGrupoPopUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$ChatList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(ContactosPage, "x7p7GkURqG9tlt1OiZWO4P6iyqU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ContactosPage;
var _c;
__turbopack_context__.k.register(_c, "ContactosPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend/src/app/contactos/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "acciones": "page-module__5pZPEq__acciones",
  "contenedor": "page-module__5pZPEq__contenedor",
  "titulo": "page-module__5pZPEq__titulo",
});
}),
"[project]/Frontend/src/components/ChatItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/ChatItem.js
"use client";
;
function ChatItem({ chat, onClick }) {
    const fotoAMostrar = chat.foto ? chat.foto : "/default.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: ()=>onClick(chat),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: chat.nombre
            }, void 0, false, {
                fileName: "[project]/Frontend/src/components/ChatItem.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
_c = ChatItem;
var _c;
__turbopack_context__.k.register(_c, "ChatItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend/src/components/ChatList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$ChatItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/src/components/ChatItem.js [app-client] (ecmascript)");
// src/components/ChatList.js
"use client";
;
;
function ChatList({ chats, onClickChat }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("u", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/Frontend/src/components/ChatList.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: chats.map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$src$2f$components$2f$ChatItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = ChatList;
var _c;
__turbopack_context__.k.register(_c, "ChatList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend/src/components/NuevoChatPopUp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NuevoChatPopUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$reactjs$2d$popup$2f$dist$2f$reactjs$2d$popup$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/reactjs-popup/dist/reactjs-popup.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NuevoChatPopUp({ idUsuario, onChatCreado }) {
    _s();
    const [emailDestino, setEmailDestino] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$reactjs$2d$popup$2f$dist$2f$reactjs$2d$popup$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            children: "Nuevo chat"
        }, void 0, false, {
            fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
            lineNumber: 38,
            columnNumber: 21
        }, this),
        modal: true,
        children: (close)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Ingrese el mail del contacto"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: emailDestino,
                        onChange: onChangeEmail
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>crearChat(close),
                        children: "Crear"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoChatPopUp.js",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(NuevoChatPopUp, "2MBd5HK8vqS4Ce0xcXnrrLWpwgg=");
_c = NuevoChatPopUp;
var _c;
__turbopack_context__.k.register(_c, "NuevoChatPopUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Frontend/src/components/NuevoGrupoPopUp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NuevoGrupoPopUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$reactjs$2d$popup$2f$dist$2f$reactjs$2d$popup$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Frontend/node_modules/reactjs-popup/dist/reactjs-popup.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
//NuevoGrupoPopUp
"use client";
;
;
;
function NuevoGrupoPopUp({ idUsuario, onGrupoCreado }) {
    _s();
    const [nombreGrupo, setNombreGrupo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [emails, setEmails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [foto, setFoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$reactjs$2d$popup$2f$dist$2f$reactjs$2d$popup$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            children: "Nuevo grupo"
        }, void 0, false, {
            fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
            lineNumber: 51,
            columnNumber: 21
        }, this),
        modal: true,
        children: (close)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Nombre del grupo"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: nombreGrupo,
                        onChange: onChangeNombreGrupo
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Mails de los integrantes"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: emails,
                        onChange: onChangeEmails
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Foto del grupo"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        onChange: onChangeFoto,
                        accept: "image/*"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>crearGrupo(close),
                        children: "Crear grupo"
                    }, void 0, false, {
                        fileName: "[project]/Frontend/src/components/NuevoGrupoPopUp.js",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(NuevoGrupoPopUp, "iDc+FAI8uGKKyiCQkf4eJ1jnJfU=");
_c = NuevoGrupoPopUp;
var _c;
__turbopack_context__.k.register(_c, "NuevoGrupoPopUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Frontend_0nptdv3._.js.map