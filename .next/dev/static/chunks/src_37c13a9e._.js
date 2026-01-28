(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dropdown-menu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 18,
        columnNumber: 11
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 24,
        columnNumber: 11
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.jsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 49,
        columnNumber: 11
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 100,
        columnNumber: 11
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 168,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.jsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.jsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/avatar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Avatar;
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = AvatarImage;
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex size-full items-center justify-center rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c2 = AvatarFallback;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "AvatarImage");
__turbopack_context__.k.register(_c2, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sheet.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.jsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.jsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.jsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = "right", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.jsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.jsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.jsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.jsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth/AuthModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const AuthModal = ({ isOpen, onClose, onLoginSuccess })=>{
    _s();
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1) // 1: Telefon, 2: SMS kod
    ;
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('+998');
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [timer, setTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(120) // 2 minut = 120 sekund
    ;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Taymer logikasi
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthModal.useEffect": ()=>{
            let interval;
            if (step === 2 && timer > 0) {
                interval = setInterval({
                    "AuthModal.useEffect": ()=>setTimer({
                            "AuthModal.useEffect": (prev)=>prev - 1
                        }["AuthModal.useEffect"])
                }["AuthModal.useEffect"], 1000);
            }
            return ({
                "AuthModal.useEffect": ()=>clearInterval(interval)
            })["AuthModal.useEffect"];
        }
    }["AuthModal.useEffect"], [
        step,
        timer
    ]);
    const formatTime = (seconds)=>{
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };
    const handlePhoneSubmit = (e)=>{
        e.preventDefault();
        if (phone.length < 13) {
            setError("To'g'ri raqam kiriting");
            return;
        }
        setLoading(true);
        // SMS yuborish imitatsiyasi
        setTimeout(()=>{
            setLoading(false);
            setStep(2);
            setTimer(120);
            setError('');
        }, 1000);
    };
    const handleCodeSubmit = (e)=>{
        e.preventDefault();
        if (code === '123456') {
            login(phone);
            onLoginSuccess(); // Muvaffaqiyatli kirganda checkoutni ochish uchun
            onClose();
            // Reset
            setStep(1);
            setCode('');
            setPhone('+998');
        } else {
            setError("Kod noto'g'ri! Qaytadan urinib ko'ring.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[400px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "text-center text-xl font-bold",
                        children: step === 1 ? "Kirish yoki ro'yxatdan o'tish" : 'Kodni kiriting'
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/AuthModal.js",
                        lineNumber: 74,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/AuthModal.js",
                    lineNumber: 73,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handlePhoneSubmit,
                    className: "space-y-4 mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 text-center",
                            children: "Telefon raqamingizni kiriting va biz tasdiqlash kodini yuboramiz."
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/AuthModal.js",
                            lineNumber: 81,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/AuthModal.js",
                                    lineNumber: 85,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: phone,
                                    onChange: (e)=>setPhone(e.target.value),
                                    className: "pl-10 text-lg",
                                    placeholder: "+998 90 123 45 67"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/AuthModal.js",
                                    lineNumber: 86,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/AuthModal.js",
                            lineNumber: 84,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm text-center",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/AuthModal.js",
                            lineNumber: 94,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            className: "w-full bg-orange-500 hover:bg-orange-600 h-12 text-lg",
                            disabled: loading,
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/AuthModal.js",
                                lineNumber: 101,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)) : 'Kod olish'
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/AuthModal.js",
                            lineNumber: 96,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/AuthModal.js",
                    lineNumber: 80,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleCodeSubmit,
                    className: "space-y-4 mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 text-center",
                            children: [
                                phone,
                                " raqamiga SMS kod yuborildi."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/AuthModal.js",
                            lineNumber: 106,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/AuthModal.js",
                                    lineNumber: 110,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: code,
                                    onChange: (e)=>setCode(e.target.value),
                                    className: "pl-10 text-lg tracking-widest text-center",
                                    placeholder: "123456",
                                    maxLength: 6
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/AuthModal.js",
                                    lineNumber: 111,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/AuthModal.js",
                            lineNumber: 109,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm text-center",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/AuthModal.js",
                            lineNumber: 120,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-500",
                            children: [
                                "Qolgan vaqt:",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-orange-500",
                                    children: formatTime(timer)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/AuthModal.js",
                                    lineNumber: 125,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/AuthModal.js",
                            lineNumber: 123,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            className: "w-full bg-orange-500 hover:bg-orange-600 h-12 text-lg",
                            children: "Tasdiqlash"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/AuthModal.js",
                            lineNumber: 130,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "ghost",
                            onClick: ()=>setStep(1),
                            className: "w-full text-blue-600",
                            children: "Raqamni o'zgartirish"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/AuthModal.js",
                            lineNumber: 136,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/AuthModal.js",
                    lineNumber: 105,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/AuthModal.js",
            lineNumber: 72,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/auth/AuthModal.js",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthModal, "jfFBI+azjlKXccBuTB2tephTddE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AuthModal;
const __TURBOPACK__default__export__ = AuthModal;
var _c;
__turbopack_context__.k.register(_c, "AuthModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
// Contextlarni ulaymiz
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.js [app-client] (ecmascript)");
// Komponentlar
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.jsx [app-client] (ecmascript)"); // Mobile menu uchun qulayroq
// Biz yaratgan Modal
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthModal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/home/Navbar.js
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const categories = [
    'Oshxona jihozlari',
    'Tozalash texnikasi',
    'Isitish va sovutish',
    'Shaxsiy parvarish',
    'Aqlli uy',
    'Aksiyalar'
];
const Navbar = ()=>{
    _s();
    // 1. Global Contextlardan ma'lumot olamiz
    const { isLoggedIn, user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { totalCartCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    // 2. Lokal statelar
    const [isAuthModalOpen, setAuthModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isAuthModalOpen,
                onClose: ()=>setAuthModalOpen(false),
                onLoginSuccess: ()=>setAuthModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/home/Navbar.js",
                lineNumber: 59,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 w-full border-b bg-white shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 h-20 flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo.png",
                                            alt: "Tech House Logo",
                                            width: 150,
                                            height: 50,
                                            className: "object-contain h-12 w-auto",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Navbar.js",
                                            lineNumber: 70,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 69,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        className: "bg-blue-900 text-white hover:bg-blue-800 hover:text-white border-none flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/home/Navbar.js",
                                                                lineNumber: 87,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Katalog"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 83,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Navbar.js",
                                                    lineNumber: 82,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                    className: "w-56 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                            children: "Bo'limlar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/Navbar.js",
                                                            lineNumber: 92,
                                                            columnNumber: 10
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/home/Navbar.js",
                                                            lineNumber: 93,
                                                            columnNumber: 10
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        categories.map((cat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                className: "cursor-pointer",
                                                                children: cat
                                                            }, index, false, {
                                                                fileName: "[project]/src/components/home/Navbar.js",
                                                                lineNumber: 95,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/Navbar.js",
                                                    lineNumber: 91,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/Navbar.js",
                                            lineNumber: 81,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 80,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Navbar.js",
                                lineNumber: 68,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex flex-1 max-w-lg items-center relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "text",
                                        placeholder: "Mahsulotlarni qidirish...",
                                        className: "pr-10 border-blue-200 focus-visible:ring-blue-900 rounded-r-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 106,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "rounded-l-none bg-blue-100 text-blue-900 hover:bg-blue-200 border border-l-0 border-blue-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Navbar.js",
                                            lineNumber: 112,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 111,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Navbar.js",
                                lineNumber: 105,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/orders",
                                        className: "flex flex-col items-center text-gray-600 hover:text-blue-900 transition text-xs font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                className: "h-6 w-6 mb-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 123,
                                                columnNumber: 8
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Buyurtmalar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 119,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/cart",
                                        className: "flex flex-col items-center text-gray-600 hover:text-blue-900 transition text-xs font-medium relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                        className: "h-6 w-6 mb-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 133,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    totalCartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -top-1 -right-2 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                                                        children: totalCartCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 135,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 132,
                                                columnNumber: 8
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Savat"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 128,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            className: "h-8 w-8 border-2 border-blue-900",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                    src: "https://github.com/shadcn.png"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/home/Navbar.js",
                                                                    lineNumber: 149,
                                                                    columnNumber: 12
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                    children: "TH"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/home/Navbar.js",
                                                                    lineNumber: 150,
                                                                    columnNumber: 12
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/home/Navbar.js",
                                                            lineNumber: 148,
                                                            columnNumber: 11
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium text-gray-700 mt-1 max-w-[60px] truncate",
                                                            children: user?.phone || 'Profil'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/Navbar.js",
                                                            lineNumber: 152,
                                                            columnNumber: 11
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/Navbar.js",
                                                    lineNumber: 147,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 146,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "end",
                                                className: "w-48",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                        children: "Mening Hisobim"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 158,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-2 text-xs text-gray-500 mb-2",
                                                        children: user?.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 159,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 162,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/orders",
                                                            className: "cursor-pointer w-full",
                                                            children: "Buyurtmalarim"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/Navbar.js",
                                                            lineNumber: 164,
                                                            columnNumber: 11
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 163,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 168,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: logout,
                                                        className: "text-red-500 cursor-pointer focus:text-red-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/home/Navbar.js",
                                                                lineNumber: 173,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Chiqish"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 169,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 157,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 145,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setAuthModalOpen(true),
                                        className: "bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 182,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Kirish"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 178,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Navbar.js",
                                lineNumber: 117,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/cart",
                                        className: "relative text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 191,
                                                columnNumber: 8
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            totalCartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                                                children: totalCartCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 193,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 190,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                            fileName: "[project]/src/components/home/Navbar.js",
                                            lineNumber: 205,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                                            fileName: "[project]/src/components/home/Navbar.js",
                                            lineNumber: 205,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 200,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Navbar.js",
                                lineNumber: 189,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Navbar.js",
                        lineNumber: 66,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden border-t bg-white p-4 absolute w-full left-0 shadow-lg z-40 animate-in slide-in-from-top-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "text",
                                            placeholder: "Qidirish...",
                                            className: "w-full bg-gray-50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Navbar.js",
                                            lineNumber: 216,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Navbar.js",
                                            lineNumber: 221,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/Navbar.js",
                                    lineNumber: 215,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 border-b pb-4",
                                    children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                className: "h-10 w-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                        src: "https://github.com/shadcn.png"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 229,
                                                        columnNumber: 12
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        children: "TH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 230,
                                                        columnNumber: 12
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 228,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-sm",
                                                        children: "Foydalanuvchi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 233,
                                                        columnNumber: 12
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: user?.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Navbar.js",
                                                        lineNumber: 234,
                                                        columnNumber: 12
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 232,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                onClick: ()=>{
                                                    logout();
                                                    setIsMobileMenuOpen(false);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "h-5 w-5 text-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Navbar.js",
                                                    lineNumber: 244,
                                                    columnNumber: 12
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 236,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 227,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            setAuthModalOpen(true);
                                            setIsMobileMenuOpen(false);
                                        },
                                        className: "bg-orange-500 w-full text-white",
                                        children: "Kirish / Ro'yxatdan o'tish"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 248,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Navbar.js",
                                    lineNumber: 225,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/orders",
                                        className: "flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                className: "h-5 w-5 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 265,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Buyurtmalarim"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Navbar.js",
                                                lineNumber: 266,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/Navbar.js",
                                        lineNumber: 261,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Navbar.js",
                                    lineNumber: 260,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold mb-2 text-sm text-gray-500 uppercase",
                                            children: "Kategoriyalar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Navbar.js",
                                            lineNumber: 272,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: categories.map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "justify-start text-xs h-9",
                                                    children: cat
                                                }, idx, false, {
                                                    fileName: "[project]/src/components/home/Navbar.js",
                                                    lineNumber: 277,
                                                    columnNumber: 11
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Navbar.js",
                                            lineNumber: 275,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/Navbar.js",
                                    lineNumber: 271,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/Navbar.js",
                            lineNumber: 213,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Navbar.js",
                        lineNumber: 212,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/Navbar.js",
                lineNumber: 65,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Navbar, "KE4ML4gcRzULsbvdXN9VrshnIDg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/separator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/tabs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/datas/Products.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"nomi\":\"Elektr choynak Xiaomi OL-546\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Choynaklar\",\"brand\":\"Xiaomi\",\"rating\":4,\"reviewsCount\":3,\"ordersCount\":883,\"oldPrice\":4636000,\"newPrice\":3708000,\"discount\":20,\"tags\":[],\"colors\":[\"#FFFFFF\",\"#000000\",\"#808080\"],\"seller\":{\"name\":\"Xiaomi Official Store\",\"rating\":\"4.8\",\"reviews\":325},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/teapot?lock=10\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/teapot?lock=11\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/teapot?lock=12\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/teapot?lock=13\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"796 W\"},{\"key\":\"Hajm\",\"value\":\"1.1 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Metal\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Xiaomi\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"796 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"9\"},{\"label\":\"Idish hajmi\",\"value\":\"1.1 L\"}]}],\"description\":\"Suvni tez qaynatish uchun zamonaviy elektr choynak. Zanglamaydigan po'latdan yasalgan korpus. Ullus approbo nesciunt verbum. Cito reprehenderit thymbra advoco textilis suscipio maxime.\",\"advantages\":[\"colo rerum umquam\",\"comprehendo pel aveho corporis\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Guiseppe\",\"date\":\"9 yanvar 2024\",\"rating\":4,\"comment\":\"Vomica eos succedo illum adulescens fugiat sodalitas turba.\",\"pros\":\"vilitas recusandae accedo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Una\",\"date\":\"8 fevral 2024\",\"rating\":5,\"comment\":\"Urbanus approbo suppono sulum confido aureus appositus cuius.\",\"pros\":\"ubi vaco tredecim\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Dianna\",\"date\":\"1 aprel 2024\",\"rating\":3,\"comment\":\"Desidero conventus spectaculum quisquam cuppedia.\",\"pros\":\"pariatur vestrum aurum\",\"cons\":\"vesco sufficio\"}]},{\"id\":2,\"nomi\":\"Yandex Stansiya JBL KN-705\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"JBL\",\"rating\":4.1,\"reviewsCount\":10,\"ordersCount\":903,\"oldPrice\":4492000,\"newPrice\":3459000,\"discount\":23,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\"],\"seller\":{\"name\":\"JBL Official Store\",\"rating\":\"4.5\",\"reviews\":1930},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=20\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=21\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"JBL\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Dolores derelinquo strues rerum terror consectetur beatae utor caecus. Vacuus cado vulgivagus utor culpa adinventitias textus unus ara.\",\"advantages\":[\"studio crepusculum arma\",\"demo comminor commodo vacuus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Joanny\",\"date\":\"19 iyul 2024\",\"rating\":5,\"comment\":\"Tertius eaque summa natus asperiores cado tandem sumo.\",\"pros\":\"deinde quo tendo\",\"cons\":\"tutamen cervus\"},{\"id\":10002,\"user\":\"Santina\",\"date\":\"12 yanvar 2024\",\"rating\":3,\"comment\":\"Video conculco absconditus tracto auxilium damnatio venio umquam vulpes.\",\"pros\":\"aliquam calco aeternus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Alena\",\"date\":\"28 avgust 2024\",\"rating\":4,\"comment\":\"Color voluptate terra aeternus.\",\"pros\":\"asporto patrocinor convoco\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Joe\",\"date\":\"7 iyul 2024\",\"rating\":4,\"comment\":\"Beatus blandior appono ustilo sit vicissitudo degusto voluntarius sit.\",\"pros\":\"solium aspernatur contego\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Cooper\",\"date\":\"6 oktyabr 2024\",\"rating\":5,\"comment\":\"Tibi absens atavus.\",\"pros\":\"acquiro vulgo vere\",\"cons\":\"possimus error\"},{\"id\":10006,\"user\":\"Barton\",\"date\":\"18 iyun 2024\",\"rating\":4,\"comment\":\"Allatus vinum succurro verumtamen.\",\"pros\":\"vapulus laboriosam inventore\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Tod\",\"date\":\"4 aprel 2024\",\"rating\":4,\"comment\":\"Odit argumentum admoveo atque vomica.\",\"pros\":\"audeo vomito utrimque\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Curt\",\"date\":\"9 sentyabr 2024\",\"rating\":5,\"comment\":\"Vobis adinventitias sophismata allatus acquiro.\",\"pros\":\"a crinis demoror\",\"cons\":\"Yo'q\"},{\"id\":10009,\"user\":\"Madelynn\",\"date\":\"26 dekabr 2024\",\"rating\":3,\"comment\":\"Veritatis tremo temporibus tamen curo.\",\"pros\":\"sperno conscendo sapiente\",\"cons\":\"adstringo solum\"},{\"id\":10010,\"user\":\"Makenzie\",\"date\":\"22 noyabr 2024\",\"rating\":4,\"comment\":\"Sed trans solus uxor vaco vere auctor benigne.\",\"pros\":\"assumenda tres nostrum\",\"cons\":\"Yo'q\"}]},{\"id\":3,\"nomi\":\"Aqlli choynak Xiaomi EQ-693\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Choynaklar\",\"brand\":\"Xiaomi\",\"rating\":4,\"reviewsCount\":0,\"ordersCount\":54,\"oldPrice\":7135000,\"newPrice\":5280000,\"discount\":26,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#000000\"],\"seller\":{\"name\":\"Xiaomi Official Store\",\"rating\":\"4.9\",\"reviews\":328},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/kettle?lock=30\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/kettle?lock=31\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/kettle?lock=32\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/kettle?lock=33\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"1413 W\"},{\"key\":\"Hajm\",\"value\":\"3.4 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Plastik\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Xiaomi\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"1413 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"5\"},{\"label\":\"Idish hajmi\",\"value\":\"3.4 L\"}]}],\"description\":\"Suvni tez qaynatish uchun zamonaviy elektr choynak. Zanglamaydigan po'latdan yasalgan korpus. Calamitas sumo vestigium vigor tepidus. Delinquo sufficio tabula.\",\"advantages\":[\"conforto contabesco sophismata\",\"amet conscendo sui aequitas\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":4,\"nomi\":\"Oshxona kombayni Braun ZG-491\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Braun\",\"rating\":4,\"reviewsCount\":4,\"ordersCount\":267,\"oldPrice\":3005000,\"newPrice\":2404000,\"discount\":20,\"tags\":[],\"colors\":[\"#000000\"],\"seller\":{\"name\":\"Braun Official Store\",\"rating\":\"4.6\",\"reviews\":1641},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=40\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=41\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"705 W\"},{\"key\":\"Hajm\",\"value\":\"4.7 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Plastik\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Braun\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"705 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"8\"},{\"label\":\"Idish hajmi\",\"value\":\"4.7 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Caries video vorax quo. Soluta cubitum patior tristis tracto corrigo.\",\"advantages\":[\"blandior spoliatio crinis\",\"ademptio nesciunt cognomen decimus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Virgie\",\"date\":\"19 iyul 2024\",\"rating\":5,\"comment\":\"Vivo tui doloremque victus tamdiu terga absens.\",\"pros\":\"usque amet aperio\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Pablo\",\"date\":\"28 yanvar 2024\",\"rating\":5,\"comment\":\"Aequus audeo solio eum caput vereor.\",\"pros\":\"supplanto cubo cunabula\",\"cons\":\"cohibeo clarus\"},{\"id\":10003,\"user\":\"Henriette\",\"date\":\"1 avgust 2024\",\"rating\":3,\"comment\":\"Villa cubicularis cognatus turpis admiratio tubineus compello eveniet desino aestivus.\",\"pros\":\"thesaurus quisquam cupiditas\",\"cons\":\"versus error\"},{\"id\":10004,\"user\":\"Cielo\",\"date\":\"7 iyul 2024\",\"rating\":3,\"comment\":\"Audentia angulus centum custodia esse altus summa inventore calcar.\",\"pros\":\"adhuc tergum vitiosus\",\"cons\":\"volo certe\"}]},{\"id\":5,\"nomi\":\"Isitgich Vitek FT-231\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Vitek\",\"rating\":3.8,\"reviewsCount\":5,\"ordersCount\":317,\"oldPrice\":894000,\"newPrice\":778000,\"discount\":13,\"tags\":[],\"colors\":[\"#FFFFFF\",\"#808080\",\"#1E3A8A\"],\"seller\":{\"name\":\"Vitek Official Store\",\"rating\":\"4.8\",\"reviews\":407},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=50\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=51\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=52\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=53\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"22 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Vitek\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"22 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Avaritia apparatus varius tabernus vilicus adhuc damnatio tenus triduana. Sopor cresco supellex ustilo charisma.\",\"advantages\":[\"constans quod correptius\",\"vita capto venia strenuus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Franco\",\"date\":\"9 may 2024\",\"rating\":4,\"comment\":\"Ago creator consectetur.\",\"pros\":\"cimentarius validus candidus\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Kianna\",\"date\":\"5 iyun 2024\",\"rating\":3,\"comment\":\"Tenetur porro vorax dolore debilito urbs voluptatum.\",\"pros\":\"cultellus beatae arcus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Payton\",\"date\":\"24 aprel 2024\",\"rating\":5,\"comment\":\"Clarus hic vox aureus.\",\"pros\":\"iusto doloremque degusto\",\"cons\":\"carcer audio\"},{\"id\":10004,\"user\":\"Shirley\",\"date\":\"4 aprel 2024\",\"rating\":4,\"comment\":\"Vulgus fugiat ut venio cerno cedo.\",\"pros\":\"architecto blandior aggero\",\"cons\":\"valeo adhuc\"},{\"id\":10005,\"user\":\"Coby\",\"date\":\"7 oktyabr 2024\",\"rating\":3,\"comment\":\"Statim pel video sustineo aeternus despecto desparatus.\",\"pros\":\"aperte voluntarius arbor\",\"cons\":\"bos concedo\"}]},{\"id\":6,\"nomi\":\"Aqlli rozetka Xiaomi VR-207\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Xiaomi\",\"rating\":4.3,\"reviewsCount\":3,\"ordersCount\":312,\"oldPrice\":1378000,\"newPrice\":950000,\"discount\":31,\"tags\":[],\"colors\":[\"#1E3A8A\",\"#FFFFFF\"],\"seller\":{\"name\":\"Xiaomi Official Store\",\"rating\":\"5.0\",\"reviews\":638},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=60\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=61\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Xiaomi\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Theatrum demonstro patior carbo stips. Defero tracto decumbo turba denego bene.\",\"advantages\":[\"admitto ab inventore\",\"denique cras cena amaritudo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Callie\",\"date\":\"18 may 2024\",\"rating\":5,\"comment\":\"Quae vitae delectatio communis asper.\",\"pros\":\"tabula circumvenio subiungo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Aurelia\",\"date\":\"21 aprel 2024\",\"rating\":3,\"comment\":\"Stabilis tenax acceptus amoveo adiuvo stultus.\",\"pros\":\"vix aer adeo\",\"cons\":\"ascisco magnam\"},{\"id\":10003,\"user\":\"Daija\",\"date\":\"1 sentyabr 2024\",\"rating\":5,\"comment\":\"Angulus curso delectus.\",\"pros\":\"theologus vitiosus culpo\",\"cons\":\"Yo'q\"}]},{\"id\":7,\"nomi\":\"Inverter konditsioner Samsung TX-783\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Konditsionerlar\",\"brand\":\"Samsung\",\"rating\":4,\"reviewsCount\":6,\"ordersCount\":774,\"oldPrice\":7781000,\"newPrice\":6770000,\"discount\":13,\"tags\":[],\"colors\":[\"#FFFFFF\",\"#FF0000\"],\"seller\":{\"name\":\"Samsung Official Store\",\"rating\":\"4.8\",\"reviews\":1821},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=70\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=71\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=72\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=73\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"37 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Samsung\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"37 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A+\"}]}],\"description\":\"Yozda salqinlik, qishda issiqlik ulashuvchi zamonaviy konditsioner. Elektr energiyasini tejaydi. Degusto coniecto celo derelinquo vestrum saepe videlicet decretum. Aegrus cilicium aliqua demonstro vir crudelis consequuntur.\",\"advantages\":[\"absens saepe numquam\",\"sto cura adipisci celo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Alda\",\"date\":\"1 aprel 2024\",\"rating\":3,\"comment\":\"Ascit soluta coruscus ago chirographum celebrer valeo.\",\"pros\":\"quisquam curso beneficium\",\"cons\":\"tabernus creber\"},{\"id\":10002,\"user\":\"Malcolm\",\"date\":\"10 mart 2024\",\"rating\":4,\"comment\":\"Thesaurus tracto vomer bestia quis convoco spiritus.\",\"pros\":\"numquam curriculum quas\",\"cons\":\"cognomen complectus\"},{\"id\":10003,\"user\":\"Lucie\",\"date\":\"7 avgust 2024\",\"rating\":4,\"comment\":\"Umerus tredecim calculus tener condico.\",\"pros\":\"adficio bellicus varius\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Chester\",\"date\":\"22 noyabr 2024\",\"rating\":4,\"comment\":\"Excepturi nihil cerno ex subiungo centum celer fugiat suggero armarium.\",\"pros\":\"accendo vomer nulla\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Keegan\",\"date\":\"14 avgust 2024\",\"rating\":4,\"comment\":\"Voluptatem decimus sed viscus tenetur.\",\"pros\":\"tenax maxime suspendo\",\"cons\":\"acerbitas depromo\"},{\"id\":10006,\"user\":\"Cleo\",\"date\":\"7 aprel 2024\",\"rating\":5,\"comment\":\"Color tamen tandem supplanto.\",\"pros\":\"casso strues cognatus\",\"cons\":\"Yo'q\"}]},{\"id\":8,\"nomi\":\"Epilyator Panasonic DR-280\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Panasonic\",\"rating\":4.2,\"reviewsCount\":6,\"ordersCount\":392,\"oldPrice\":1449000,\"newPrice\":1144000,\"discount\":21,\"tags\":[],\"colors\":[\"#FFFFFF\",\"#1E3A8A\",\"#FF0000\"],\"seller\":{\"name\":\"Panasonic Official Store\",\"rating\":\"4.8\",\"reviews\":794},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=80\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=81\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=82\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"5\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Panasonic\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Vitium sub summa adicio thesis qui taceo tardus temperantia acquiro. Tutamen autem valens cito vereor repellendus ago cruciamentum approbo aegrus.\",\"advantages\":[\"exercitationem summisse vehemens\",\"surculus vetus magni subiungo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Declan\",\"date\":\"21 yanvar 2024\",\"rating\":3,\"comment\":\"Cubicularis territo tollo deludo curo tabernus ipsam commemoro depono velut.\",\"pros\":\"denuo vulnero crapula\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Juliet\",\"date\":\"27 noyabr 2024\",\"rating\":5,\"comment\":\"Vere tubineus decretum cunabula vox venia alioqui comprehendo.\",\"pros\":\"degero tergeo basium\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Kamryn\",\"date\":\"6 sentyabr 2024\",\"rating\":3,\"comment\":\"Aptus taceo absque solus.\",\"pros\":\"velociter vulgivagus pax\",\"cons\":\"delectus sub\"},{\"id\":10004,\"user\":\"Cleveland\",\"date\":\"8 dekabr 2024\",\"rating\":4,\"comment\":\"Aqua temeritas ducimus amitto vesper error cetera delectatio.\",\"pros\":\"sophismata articulus alveus\",\"cons\":\"denuncio delicate\"},{\"id\":10005,\"user\":\"Jeff\",\"date\":\"3 dekabr 2024\",\"rating\":5,\"comment\":\"Ventosus comedo sursum considero abeo.\",\"pros\":\"calco complectus usitas\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Briana\",\"date\":\"21 mart 2024\",\"rating\":5,\"comment\":\"Amor tabula verus nesciunt demonstro.\",\"pros\":\"cuppedia varius spiritus\",\"cons\":\"Yo'q\"}]},{\"id\":9,\"nomi\":\"Epilyator Philips BY-623\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Philips\",\"rating\":3.6,\"reviewsCount\":8,\"ordersCount\":393,\"oldPrice\":2588000,\"newPrice\":2070000,\"discount\":20,\"tags\":[],\"colors\":[\"#1E3A8A\",\"#808080\",\"#FFFFFF\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.9\",\"reviews\":1581},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=90\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=91\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=92\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=93\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Akumulyator\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"2\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Cohaero acsi arcesso vigor. Verumtamen inflammatio volaticus amicitia adversus terror tenax.\",\"advantages\":[\"certus asporto spiritus\",\"contigo amplus sortitus accusamus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Valentin\",\"date\":\"28 oktyabr 2024\",\"rating\":3,\"comment\":\"Ventito reiciendis cohors argumentum deficio.\",\"pros\":\"debitis recusandae correptius\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Marco\",\"date\":\"7 fevral 2024\",\"rating\":3,\"comment\":\"Auditor valens vinum turbo veritas campana colo consequuntur viridis.\",\"pros\":\"aggredior templum adficio\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Johanna\",\"date\":\"26 dekabr 2024\",\"rating\":3,\"comment\":\"Comitatus amicitia fuga undique vilis statim vestigium cognatus.\",\"pros\":\"attonbitus cubo cumque\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Alice\",\"date\":\"4 iyul 2024\",\"rating\":5,\"comment\":\"Currus arto vulariter tergeo contigo.\",\"pros\":\"culpo admitto adfero\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Lia\",\"date\":\"16 aprel 2024\",\"rating\":3,\"comment\":\"Coruscus vetus vulnero beatae.\",\"pros\":\"comes adamo una\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Delmer\",\"date\":\"19 yanvar 2024\",\"rating\":3,\"comment\":\"Caute asporto communis argentum adflicto nihil talus laboriosam.\",\"pros\":\"infit reprehenderit bis\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Leonard\",\"date\":\"7 iyul 2024\",\"rating\":4,\"comment\":\"Truculenter bibo voro alveus.\",\"pros\":\"apostolus aperte tunc\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Amy\",\"date\":\"4 may 2024\",\"rating\":5,\"comment\":\"Cotidie absum accusator umquam ipsam unus defaeco circumvenio.\",\"pros\":\"vorax arx deinde\",\"cons\":\"Yo'q\"}]},{\"id\":10,\"nomi\":\"Changyutgich LG EE-623\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Changyutgichlar\",\"brand\":\"LG\",\"rating\":3.6,\"reviewsCount\":5,\"ordersCount\":542,\"oldPrice\":1369000,\"newPrice\":958000,\"discount\":30,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#FF0000\"],\"seller\":{\"name\":\"LG Official Store\",\"rating\":\"4.5\",\"reviews\":1474},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=100\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=101\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=102\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"3835 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"LG\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"3835 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"78 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.8 L\"}]}],\"description\":\"Uyingiz tozaligini saqlash uchun kuchli va qulay changyutgich. Changni mukammal tortib oladi. Concedo demergo una tempus laborum corporis. Decretum adhaero thesaurus ex tabernus comedo anser.\",\"advantages\":[\"depraedor temeritas amor\",\"stella eum civis harum\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Adrienne\",\"date\":\"15 oktyabr 2024\",\"rating\":3,\"comment\":\"Vicissitudo praesentium vinco curriculum.\",\"pros\":\"cupiditas beneficium basium\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Prince\",\"date\":\"9 iyul 2024\",\"rating\":3,\"comment\":\"Vehemens clamo tactus eum desino.\",\"pros\":\"tabella nisi audax\",\"cons\":\"caelestis corrumpo\"},{\"id\":10003,\"user\":\"Paige\",\"date\":\"16 noyabr 2024\",\"rating\":5,\"comment\":\"Concido urbanus totus cultellus.\",\"pros\":\"tamquam desparatus tonsor\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Alexanne\",\"date\":\"9 aprel 2024\",\"rating\":3,\"comment\":\"Trado cohibeo tumultus adicio spargo avaritia delectus convoco conturbo.\",\"pros\":\"solitudo bellum conatus\",\"cons\":\"ratione apud\"},{\"id\":10005,\"user\":\"Eugene\",\"date\":\"24 fevral 2024\",\"rating\":4,\"comment\":\"Despecto cresco toties votum aptus.\",\"pros\":\"delectus tantum maxime\",\"cons\":\"Yo'q\"}]},{\"id\":11,\"nomi\":\"Oshxona kombayni Moulinex RM-849\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Moulinex\",\"rating\":4,\"reviewsCount\":7,\"ordersCount\":837,\"oldPrice\":7264000,\"newPrice\":6247000,\"discount\":14,\"tags\":[],\"colors\":[\"#808080\",\"#1E3A8A\",\"#FFFFFF\"],\"seller\":{\"name\":\"Moulinex Official Store\",\"rating\":\"4.6\",\"reviews\":861},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=110\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=111\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=112\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"651 W\"},{\"key\":\"Hajm\",\"value\":\"2.4 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Metal\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Moulinex\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"651 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"7\"},{\"label\":\"Idish hajmi\",\"value\":\"2.4 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Aliquid decet tepidus vulnero tergo. Tamdiu iste terror consectetur patrocinor.\",\"advantages\":[\"cur calculus agnosco\",\"terror dedico vestigium careo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Mekhi\",\"date\":\"28 may 2024\",\"rating\":3,\"comment\":\"Viridis thymbra peior sursum venia vulnus testimonium conitor.\",\"pros\":\"surgo adimpleo curo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Erika\",\"date\":\"14 mart 2024\",\"rating\":4,\"comment\":\"Clibanus talio sopor solutio spargo vivo videlicet est thymbra.\",\"pros\":\"maiores depulso arcus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Lorena\",\"date\":\"1 sentyabr 2024\",\"rating\":5,\"comment\":\"Aegrotatio condico subnecto volup deputo subiungo carpo civitas.\",\"pros\":\"possimus iusto sperno\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Anne\",\"date\":\"21 noyabr 2024\",\"rating\":3,\"comment\":\"Contigo quia strenuus beatus adiuvo ipsum certe denego vinculum.\",\"pros\":\"vicinus careo assentator\",\"cons\":\"tabula urbs\"},{\"id\":10005,\"user\":\"Alexis\",\"date\":\"1 oktyabr 2024\",\"rating\":4,\"comment\":\"Bos adipisci antiquus demoror voco.\",\"pros\":\"usitas laudantium vitae\",\"cons\":\"vomer adhaero\"},{\"id\":10006,\"user\":\"Magali\",\"date\":\"14 may 2024\",\"rating\":4,\"comment\":\"Tego stipes delectatio hic cohibeo.\",\"pros\":\"perspiciatis certus desino\",\"cons\":\"bos calcar\"},{\"id\":10007,\"user\":\"Bryce\",\"date\":\"9 iyun 2024\",\"rating\":5,\"comment\":\"Vallum argumentum facilis.\",\"pros\":\"validus pariatur nobis\",\"cons\":\"Yo'q\"}]},{\"id\":12,\"nomi\":\"Elektr ustara Panasonic ND-415\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Panasonic\",\"rating\":3.6,\"reviewsCount\":9,\"ordersCount\":641,\"oldPrice\":1128000,\"newPrice\":936000,\"discount\":17,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#FF0000\",\"#FFFFFF\"],\"seller\":{\"name\":\"Panasonic Official Store\",\"rating\":\"4.7\",\"reviews\":1298},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=120\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=121\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Akumulyator\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"4\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Panasonic\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Bardus anser campana adversus vicinus. Turbo utroque cupressus careo patruus.\",\"advantages\":[\"defungo perferendis degero\",\"atque victoria tego sustineo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Hilbert\",\"date\":\"23 iyul 2024\",\"rating\":4,\"comment\":\"Adicio complectus cibo victus baiulus vitium.\",\"pros\":\"cultellus adulatio dolorum\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Ronny\",\"date\":\"4 aprel 2024\",\"rating\":3,\"comment\":\"Adeo dens copiose anser.\",\"pros\":\"substantia tactus verbum\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Green\",\"date\":\"6 aprel 2024\",\"rating\":4,\"comment\":\"Aer validus sit vinum corporis turba ago alias.\",\"pros\":\"tibi somnus talis\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Tina\",\"date\":\"13 sentyabr 2024\",\"rating\":3,\"comment\":\"Quos defungo supra coadunatio suus adipiscor sol.\",\"pros\":\"summisse solitudo aegrus\",\"cons\":\"creator subseco\"},{\"id\":10005,\"user\":\"Payton\",\"date\":\"28 dekabr 2024\",\"rating\":4,\"comment\":\"Venustas supra stipes versus.\",\"pros\":\"sumo aggredior reiciendis\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Alivia\",\"date\":\"28 mart 2024\",\"rating\":3,\"comment\":\"Totidem acervus video condico ventosus eius pel tollo.\",\"pros\":\"cohaero solitudo contego\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Janick\",\"date\":\"26 oktyabr 2024\",\"rating\":3,\"comment\":\"Apto valde aegre carmen stella concedo adopto.\",\"pros\":\"apostolus dolorem claro\",\"cons\":\"vox numquam\"},{\"id\":10008,\"user\":\"Alicia\",\"date\":\"2 noyabr 2024\",\"rating\":3,\"comment\":\"Cilicium constans admitto crudelis causa deorsum ventito tum vulgus caries.\",\"pros\":\"cubicularis ambulo confugo\",\"cons\":\"Yo'q\"},{\"id\":10009,\"user\":\"Magali\",\"date\":\"12 mart 2024\",\"rating\":5,\"comment\":\"Vomer curiositas tertius pecto.\",\"pros\":\"omnis velit at\",\"cons\":\"Yo'q\"}]},{\"id\":13,\"nomi\":\"Ovozli yordamchi Apple AC-484\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"Apple\",\"rating\":3.7,\"reviewsCount\":6,\"ordersCount\":198,\"oldPrice\":5360000,\"newPrice\":3645000,\"discount\":32,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#FFFFFF\",\"#1E3A8A\"],\"seller\":{\"name\":\"Apple Official Store\",\"rating\":\"5.0\",\"reviews\":971},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=130\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=131\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=132\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Apple\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Ara dens synagoga theca conventus tumultus suscipio. Adipisci pauper demulceo asporto vulpes tandem adflicto.\",\"advantages\":[\"auctor doloribus bestia\",\"xiphias avarus tersus sustineo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Mateo\",\"date\":\"17 fevral 2024\",\"rating\":5,\"comment\":\"Vulnus tantillus volaticus.\",\"pros\":\"demoror accusator terror\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Abbey\",\"date\":\"24 avgust 2024\",\"rating\":3,\"comment\":\"Denique suspendo certus cohors.\",\"pros\":\"totam peior cenaculum\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Sonia\",\"date\":\"24 avgust 2024\",\"rating\":3,\"comment\":\"Ultio antea laboriosam asperiores acsi aer curia clam amitto neque.\",\"pros\":\"bene sponte dolor\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Ruben\",\"date\":\"24 aprel 2024\",\"rating\":3,\"comment\":\"Thema nulla cumque asporto volo deripio auctus contego.\",\"pros\":\"talio suus absque\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Randy\",\"date\":\"15 may 2024\",\"rating\":5,\"comment\":\"Uterque tepesco distinctio decimus thalassinus blandior denique amiculum suppellex.\",\"pros\":\"credo adipisci admitto\",\"cons\":\"sed conculco\"},{\"id\":10006,\"user\":\"Else\",\"date\":\"18 aprel 2024\",\"rating\":3,\"comment\":\"Derelinquo temeritas anser aperiam adaugeo vivo antea thesis.\",\"pros\":\"bellicus iusto varius\",\"cons\":\"commodi texo\"}]},{\"id\":14,\"nomi\":\"Oshxona kombayni Bosch YH-215\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Bosch\",\"rating\":3.9,\"reviewsCount\":8,\"ordersCount\":839,\"oldPrice\":3463000,\"newPrice\":2147000,\"discount\":38,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#000000\",\"#808080\"],\"seller\":{\"name\":\"Bosch Official Store\",\"rating\":\"4.9\",\"reviews\":1157},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=140\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=141\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"1390 W\"},{\"key\":\"Hajm\",\"value\":\"4 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Plastik\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Bosch\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"1390 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"8\"},{\"label\":\"Idish hajmi\",\"value\":\"4 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Corporis civis volo. Synagoga ex tenuis arceo dolor necessitatibus sunt.\",\"advantages\":[\"appositus amplus quod\",\"vorax adsum careo laudantium\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Adrian\",\"date\":\"15 noyabr 2024\",\"rating\":3,\"comment\":\"Virtus absconditus constans desidero.\",\"pros\":\"cervus addo derelinquo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Jessyca\",\"date\":\"21 fevral 2024\",\"rating\":4,\"comment\":\"Depopulo casus baiulus nulla trans vix umbra.\",\"pros\":\"condico aveho tabernus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Merlin\",\"date\":\"9 sentyabr 2024\",\"rating\":3,\"comment\":\"Ancilla defluo odit cedo eaque candidus cerno abscido accommodo thesis.\",\"pros\":\"aspernatur cohaero subnecto\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Garret\",\"date\":\"26 dekabr 2024\",\"rating\":5,\"comment\":\"Tenetur utroque argumentum.\",\"pros\":\"auditor cuius synagoga\",\"cons\":\"via arma\"},{\"id\":10005,\"user\":\"Mckenzie\",\"date\":\"10 mart 2024\",\"rating\":3,\"comment\":\"Cunctatio aufero stillicidium natus conduco.\",\"pros\":\"spiculum alias altus\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Mollie\",\"date\":\"20 yanvar 2024\",\"rating\":3,\"comment\":\"Tribuo concedo victus.\",\"pros\":\"adopto atqui vociferor\",\"cons\":\"appositus ipsam\"},{\"id\":10007,\"user\":\"Percival\",\"date\":\"23 aprel 2024\",\"rating\":5,\"comment\":\"Ascit tam agnitio.\",\"pros\":\"suffoco tenetur apostolus\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Jamal\",\"date\":\"6 iyun 2024\",\"rating\":5,\"comment\":\"Tredecim vomica aureus conturbo.\",\"pros\":\"timor corrumpo apto\",\"cons\":\"Yo'q\"}]},{\"id\":15,\"nomi\":\"Blender Braun EF-754\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Braun\",\"rating\":5,\"reviewsCount\":0,\"ordersCount\":488,\"oldPrice\":3213000,\"newPrice\":2827000,\"discount\":12,\"tags\":[],\"colors\":[\"#1E3A8A\"],\"seller\":{\"name\":\"Braun Official Store\",\"rating\":\"4.6\",\"reviews\":916},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=150\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=151\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=152\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"967 W\"},{\"key\":\"Hajm\",\"value\":\"2.3 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Metal\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Braun\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"967 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"3\"},{\"label\":\"Idish hajmi\",\"value\":\"2.3 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Turpis curvo aperio cohaero viridis natus contabesco. Odio umbra defluo deludo aetas decerno.\",\"advantages\":[\"triduana conturbo utrum\",\"summisse thermae vinum universe\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":16,\"nomi\":\"Ventilyator Vitek MN-294\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Vitek\",\"rating\":4.1,\"reviewsCount\":7,\"ordersCount\":720,\"oldPrice\":1123000,\"newPrice\":1010000,\"discount\":10,\"tags\":[],\"colors\":[\"#FFFFFF\"],\"seller\":{\"name\":\"Vitek Official Store\",\"rating\":\"4.7\",\"reviews\":1147},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=160\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=161\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=162\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=163\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"33 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Vitek\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"33 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Voro cibo decumbo patruus desolo perferendis denego testimonium. Argentum creber adinventitias victoria.\",\"advantages\":[\"ullam corrupti comes\",\"mollitia tempus ultio casus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Merle\",\"date\":\"28 iyul 2024\",\"rating\":3,\"comment\":\"Credo temeritas delectus temptatio cohors depraedor.\",\"pros\":\"thorax arguo quo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Roy\",\"date\":\"25 aprel 2024\",\"rating\":5,\"comment\":\"Articulus textus bene adsidue tempus amitto.\",\"pros\":\"excepturi molestiae accusator\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Dayne\",\"date\":\"8 iyul 2024\",\"rating\":4,\"comment\":\"Ager cariosus deserunt civitas.\",\"pros\":\"deinde comburo verus\",\"cons\":\"accusator quidem\"},{\"id\":10004,\"user\":\"Adela\",\"date\":\"21 yanvar 2024\",\"rating\":5,\"comment\":\"Nesciunt accusator neque.\",\"pros\":\"coaegresco pariatur undique\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Jeanie\",\"date\":\"22 avgust 2024\",\"rating\":4,\"comment\":\"Timor possimus abundans sursum coniecto copiose aperio clam altus.\",\"pros\":\"coepi abeo agnosco\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Letha\",\"date\":\"4 iyul 2024\",\"rating\":5,\"comment\":\"Tantillus vere perspiciatis tibi censura vivo accedo.\",\"pros\":\"abundans ipsam valeo\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Haven\",\"date\":\"15 yanvar 2024\",\"rating\":3,\"comment\":\"Officia valens amicitia succurro tum verecundia.\",\"pros\":\"apto tenus in\",\"cons\":\"Yo'q\"}]},{\"id\":17,\"nomi\":\"Bug'li dazmol Philips PP-751\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Philips\",\"rating\":4.4,\"reviewsCount\":9,\"ordersCount\":111,\"oldPrice\":4312000,\"newPrice\":3061000,\"discount\":29,\"tags\":[],\"colors\":[\"#FF0000\",\"#FFFFFF\",\"#1E3A8A\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.9\",\"reviews\":1020},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=170\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=171\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=172\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"2239 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"2239 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"71 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.6 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Consectetur candidus aequus tempore amplitudo desipio caritas numquam antepono. Tabesco viduo currus creta.\",\"advantages\":[\"recusandae vere creo\",\"una consectetur acquiro comminor\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Tania\",\"date\":\"18 sentyabr 2024\",\"rating\":5,\"comment\":\"Tepidus compello somnus degenero.\",\"pros\":\"capitulus virgo acquiro\",\"cons\":\"sulum suscipio\"},{\"id\":10002,\"user\":\"Shaniya\",\"date\":\"14 fevral 2024\",\"rating\":3,\"comment\":\"Suscipio arbitro timor cicuta abbas.\",\"pros\":\"acsi vapulus cupiditate\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Mabelle\",\"date\":\"3 avgust 2024\",\"rating\":4,\"comment\":\"Audentia defungo quaerat victus velociter.\",\"pros\":\"vilicus tempore ipsa\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Brandon\",\"date\":\"16 aprel 2024\",\"rating\":4,\"comment\":\"Audio tot culpo vomica terebro ea demergo sopor.\",\"pros\":\"et truculenter vesco\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Kaylin\",\"date\":\"23 oktyabr 2024\",\"rating\":5,\"comment\":\"Deporto capio aveho cena succedo accusantium absorbeo iusto animadverto aut.\",\"pros\":\"tertius abbas odit\",\"cons\":\"sollicito conicio\"},{\"id\":10006,\"user\":\"Sincere\",\"date\":\"17 fevral 2024\",\"rating\":4,\"comment\":\"Surculus cunabula inventore ater comprehendo.\",\"pros\":\"audentia despecto altus\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Greyson\",\"date\":\"25 yanvar 2024\",\"rating\":5,\"comment\":\"Stips cui tui expedita callide suggero ara labore illo nisi.\",\"pros\":\"voro deludo contabesco\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Reed\",\"date\":\"7 sentyabr 2024\",\"rating\":5,\"comment\":\"Benigne animus arcesso compello cognatus antepono sum.\",\"pros\":\"trucido spargo tam\",\"cons\":\"Yo'q\"},{\"id\":10009,\"user\":\"Agustina\",\"date\":\"22 avgust 2024\",\"rating\":5,\"comment\":\"Combibo carcer confero trado damno praesentium acies dolore.\",\"pros\":\"curia volubilis tendo\",\"cons\":\"Yo'q\"}]},{\"id\":18,\"nomi\":\"Epilyator Braun SY-536\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Braun\",\"rating\":4.7,\"reviewsCount\":9,\"ordersCount\":365,\"oldPrice\":1600000,\"newPrice\":1088000,\"discount\":32,\"tags\":[],\"colors\":[\"#FF0000\",\"#808080\"],\"seller\":{\"name\":\"Braun Official Store\",\"rating\":\"4.8\",\"reviews\":107},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=180\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=181\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=182\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=183\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"4\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Braun\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Coruscus certus tenuis admiratio subnecto carmen amo tactus aureus. Numquam vobis barba tabernus neque curis uter derelinquo utrum.\",\"advantages\":[\"abstergo voluptas aveho\",\"uterque curis decet varietas\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Erna\",\"date\":\"11 iyul 2024\",\"rating\":4,\"comment\":\"Alii virga ulciscor tolero videlicet.\",\"pros\":\"cedo beneficium advenio\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Elise\",\"date\":\"8 yanvar 2024\",\"rating\":5,\"comment\":\"Confugo cernuus brevis tracto concedo calculus illum.\",\"pros\":\"statim advoco sophismata\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Reta\",\"date\":\"21 iyun 2024\",\"rating\":5,\"comment\":\"Virga volutabrum commodo adinventitias suggero sursum vesper numquam accedo.\",\"pros\":\"ait comis quisquam\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Khalid\",\"date\":\"8 oktyabr 2024\",\"rating\":4,\"comment\":\"Sustineo depono deorsum tego socius aeneus clamo fugit deduco tibi.\",\"pros\":\"tenax ademptio ut\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Irving\",\"date\":\"6 yanvar 2024\",\"rating\":5,\"comment\":\"Aranea curto aperio accommodo vulticulus adstringo quaerat.\",\"pros\":\"bestia solio vester\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Paul\",\"date\":\"28 yanvar 2024\",\"rating\":5,\"comment\":\"Tandem desolo sumo adsum thymbra aequitas.\",\"pros\":\"voro alo vomer\",\"cons\":\"cauda adopto\"},{\"id\":10007,\"user\":\"Kane\",\"date\":\"23 noyabr 2024\",\"rating\":5,\"comment\":\"Quae decerno vestigium arbor alveus uter voco patruus atrocitas architecto.\",\"pros\":\"termes facilis caelestis\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Adolf\",\"date\":\"25 iyul 2024\",\"rating\":5,\"comment\":\"Cohibeo tametsi vorago agnitio omnis vallum accusator.\",\"pros\":\"ipsa sui ceno\",\"cons\":\"Yo'q\"},{\"id\":10009,\"user\":\"Orville\",\"date\":\"16 sentyabr 2024\",\"rating\":4,\"comment\":\"Curto adficio cimentarius crepusculum adduco defleo.\",\"pros\":\"volubilis templum tamdiu\",\"cons\":\"atque tolero\"}]},{\"id\":19,\"nomi\":\"Soch feni (Fen) Philips SU-249\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Soch parvarishi\",\"brand\":\"Philips\",\"rating\":4.8,\"reviewsCount\":0,\"ordersCount\":37,\"oldPrice\":2374000,\"newPrice\":1661000,\"discount\":30,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#FF0000\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.9\",\"reviews\":826},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=190\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=191\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Akumulyator\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"5\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]}],\"description\":\"Sochlaringizni quritish va shakl berish uchun professional vosita. Soch tolalarini himoya qiladi. Coepi confero clam adipiscor. Coniuratio certe molestiae vesco terminatio ars cupiditas dolores.\",\"advantages\":[\"tricesimus certus sui\",\"necessitatibus cur calco tero\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":20,\"nomi\":\"Ovozli yordamchi Apple QS-237\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"Apple\",\"rating\":3.5,\"reviewsCount\":2,\"ordersCount\":339,\"oldPrice\":5421000,\"newPrice\":3740000,\"discount\":31,\"tags\":[],\"colors\":[\"#808080\"],\"seller\":{\"name\":\"Apple Official Store\",\"rating\":\"4.9\",\"reviews\":1819},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=200\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=201\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=202\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Apple\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Bonus cresco comes curis curtus. Cinis ultio cedo vito assentator labore.\",\"advantages\":[\"thesaurus adinventitias vobis\",\"callide tumultus conduco ambitus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Irwin\",\"date\":\"19 mart 2024\",\"rating\":3,\"comment\":\"Argentum degusto thema audacia victus curtus.\",\"pros\":\"id illum cetera\",\"cons\":\"tollo quia\"},{\"id\":10002,\"user\":\"Clifton\",\"date\":\"15 yanvar 2024\",\"rating\":4,\"comment\":\"Admitto defero tactus praesentium vinculum cito sustineo.\",\"pros\":\"desidero theca brevis\",\"cons\":\"Yo'q\"}]},{\"id\":21,\"nomi\":\"Aqlli kolonka Apple DE-452\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"Apple\",\"rating\":5,\"reviewsCount\":2,\"ordersCount\":234,\"oldPrice\":4531000,\"newPrice\":3625000,\"discount\":20,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FFFFFF\"],\"seller\":{\"name\":\"Apple Official Store\",\"rating\":\"4.5\",\"reviews\":1276},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=210\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=211\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=212\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Apple\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Cubo provident eum ater. Creber centum deorsum thema delego nulla valde.\",\"advantages\":[\"vix abbas placeat\",\"verto officia explicabo decumbo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Alex\",\"date\":\"13 sentyabr 2024\",\"rating\":5,\"comment\":\"Conscendo crur vulgivagus crur decerno.\",\"pros\":\"ullam cresco auditor\",\"cons\":\"campana claro\"},{\"id\":10002,\"user\":\"Brody\",\"date\":\"23 fevral 2024\",\"rating\":5,\"comment\":\"Terreo basium aliquam bellicus consequuntur allatus.\",\"pros\":\"currus auctor alveus\",\"cons\":\"coerceo conspergo\"}]},{\"id\":22,\"nomi\":\"Split-tizim Samsung AS-382\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Konditsionerlar\",\"brand\":\"Samsung\",\"rating\":4.4,\"reviewsCount\":0,\"ordersCount\":301,\"oldPrice\":6087000,\"newPrice\":5113000,\"discount\":16,\"tags\":[],\"colors\":[\"#000000\"],\"seller\":{\"name\":\"Samsung Official Store\",\"rating\":\"4.9\",\"reviews\":931},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=220\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=221\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"37 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Samsung\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"37 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A+\"}]}],\"description\":\"Yozda salqinlik, qishda issiqlik ulashuvchi zamonaviy konditsioner. Elektr energiyasini tejaydi. Basium caelestis turba speculum error complectus sumptus capitulus. Ultio votum exercitationem dignissimos spes verbera denuo.\",\"advantages\":[\"theologus magnam adulatio\",\"acervus ulterius totam bis\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":23,\"nomi\":\"Aqlli rozetka Yandex GH-705\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Yandex\",\"rating\":3.5,\"reviewsCount\":2,\"ordersCount\":609,\"oldPrice\":5235000,\"newPrice\":4397000,\"discount\":16,\"tags\":[],\"colors\":[\"#808080\"],\"seller\":{\"name\":\"Yandex Official Store\",\"rating\":\"4.8\",\"reviews\":488},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=230\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=231\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=232\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=233\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Yandex\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Teneo cresco auctus atrox repellendus caries velut contabesco. Thesaurus doloribus curo eius adulescens.\",\"advantages\":[\"dicta ara aestus\",\"caput conicio decor vinum\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Dillan\",\"date\":\"27 avgust 2024\",\"rating\":4,\"comment\":\"Repellat sordeo amo adhuc dedecor ceno nemo asperiores.\",\"pros\":\"celo tabula vox\",\"cons\":\"solutio ullus\"},{\"id\":10002,\"user\":\"Lucio\",\"date\":\"3 noyabr 2024\",\"rating\":3,\"comment\":\"Cariosus vilis officiis alioqui provident venio textus vicinus qui.\",\"pros\":\"strues suscipio communis\",\"cons\":\"Yo'q\"}]},{\"id\":24,\"nomi\":\"Epilyator Panasonic TJ-732\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Panasonic\",\"rating\":4.7,\"reviewsCount\":0,\"ordersCount\":52,\"oldPrice\":1669000,\"newPrice\":1402000,\"discount\":16,\"tags\":[],\"colors\":[\"#FFFFFF\"],\"seller\":{\"name\":\"Panasonic Official Store\",\"rating\":\"4.6\",\"reviews\":1040},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=240\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=241\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=242\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"2\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Panasonic\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Curso tutamen demulceo censura qui accendo curis bellicus. Surgo considero antiquus vestigium calculus.\",\"advantages\":[\"veniam ex cernuus\",\"ustulo debitis iste comedo\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":25,\"nomi\":\"Yuvuvchi changyutgich Xiaomi HK-879\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Changyutgichlar\",\"brand\":\"Xiaomi\",\"rating\":4.3,\"reviewsCount\":7,\"ordersCount\":710,\"oldPrice\":4939000,\"newPrice\":3753000,\"discount\":24,\"tags\":[],\"colors\":[\"#FFFFFF\",\"#808080\",\"#1E3A8A\"],\"seller\":{\"name\":\"Xiaomi Official Store\",\"rating\":\"5.0\",\"reviews\":1579},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=250\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=251\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"3308 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Xiaomi\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"3308 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"80 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.8 L\"}]}],\"description\":\"Uyingiz tozaligini saqlash uchun kuchli va qulay changyutgich. Changni mukammal tortib oladi. Veritatis pecco defluo. Cresco vapulus talis absens facere acer.\",\"advantages\":[\"vado vinitor deripio\",\"recusandae catena delego accusator\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Antonina\",\"date\":\"18 aprel 2024\",\"rating\":5,\"comment\":\"Tenuis amor tergo voluptate thermae tantum.\",\"pros\":\"aliquid alter vitiosus\",\"cons\":\"venustas ver\"},{\"id\":10002,\"user\":\"Jaylin\",\"date\":\"5 oktyabr 2024\",\"rating\":5,\"comment\":\"Aqua aequus quam cohors auctor varius aliqua pecto vilis voluptates.\",\"pros\":\"subseco comedo tersus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Rosamond\",\"date\":\"11 avgust 2024\",\"rating\":5,\"comment\":\"Vestrum valeo deserunt aggero vado.\",\"pros\":\"caveo somniculosus textilis\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Andrew\",\"date\":\"5 noyabr 2024\",\"rating\":5,\"comment\":\"Suppellex caveo tui volva voluptate creo textor vere.\",\"pros\":\"nulla acies volup\",\"cons\":\"acies curo\"},{\"id\":10005,\"user\":\"Craig\",\"date\":\"12 aprel 2024\",\"rating\":4,\"comment\":\"Totam claudeo coniuratio cognomen cunae.\",\"pros\":\"aeger altus uberrime\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Oliver\",\"date\":\"23 iyul 2024\",\"rating\":3,\"comment\":\"Abeo cibus virgo aqua tantillus.\",\"pros\":\"defaeco texo ars\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Effie\",\"date\":\"21 iyul 2024\",\"rating\":3,\"comment\":\"Possimus eligendi cilicium quidem valens conspergo tantum contigo.\",\"pros\":\"alienus cunabula amicitia\",\"cons\":\"Yo'q\"}]},{\"id\":26,\"nomi\":\"Vertikal dazmol Tefal GV-558\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Tefal\",\"rating\":5,\"reviewsCount\":2,\"ordersCount\":883,\"oldPrice\":6609000,\"newPrice\":4891000,\"discount\":26,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#808080\"],\"seller\":{\"name\":\"Tefal Official Store\",\"rating\":\"5.0\",\"reviews\":113},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=260\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=261\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=262\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=263\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"4262 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Tefal\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"4262 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"76 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.6 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Ter campana commemoro triumphus capillus amita clementia officiis. Exercitationem creta tabula asper delego aestas solium utroque.\",\"advantages\":[\"vesper vociferor summa\",\"vulgus cresco aegre stabilis\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Rowena\",\"date\":\"16 iyul 2024\",\"rating\":5,\"comment\":\"Clarus velit cursim curiositas deserunt varietas voluptate cursim statim.\",\"pros\":\"tendo dolor celebrer\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Bart\",\"date\":\"9 iyul 2024\",\"rating\":5,\"comment\":\"Canis vis tempore aveho pecto contra patria baiulus denuo contigo.\",\"pros\":\"ars votum vociferor\",\"cons\":\"comitatus ver\"}]},{\"id\":27,\"nomi\":\"Aqlli rozetka Yeelight KV-557\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Yeelight\",\"rating\":4,\"reviewsCount\":3,\"ordersCount\":900,\"oldPrice\":3310000,\"newPrice\":2515000,\"discount\":24,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#FFFFFF\"],\"seller\":{\"name\":\"Yeelight Official Store\",\"rating\":\"4.8\",\"reviews\":141},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=270\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=271\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=272\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Yeelight\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Vapulus colligo compono carus corporis subnecto cubitum aedificium statua. Vinculum aeger deserunt totam repellat aestas vigilo commodi damnatio.\",\"advantages\":[\"viridis auxilium contra\",\"videlicet beatus apparatus collum\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Chaya\",\"date\":\"7 fevral 2024\",\"rating\":4,\"comment\":\"Amplitudo soleo sulum cedo quae bellicus ea tantum comminor animi.\",\"pros\":\"aiunt valetudo vilicus\",\"cons\":\"sustineo valeo\"},{\"id\":10002,\"user\":\"Roscoe\",\"date\":\"21 yanvar 2024\",\"rating\":3,\"comment\":\"Adsidue amitto decimus spero angustus.\",\"pros\":\"suscipio ea demens\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Thad\",\"date\":\"5 iyun 2024\",\"rating\":5,\"comment\":\"Cuppedia calculus decretum calculus vergo thema cras benigne deporto.\",\"pros\":\"sophismata vigilo universe\",\"cons\":\"caute tondeo\"}]},{\"id\":28,\"nomi\":\"Isitgich Electrolux KY-288\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Electrolux\",\"rating\":3.5,\"reviewsCount\":2,\"ordersCount\":516,\"oldPrice\":6147000,\"newPrice\":4733000,\"discount\":23,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#000000\",\"#FFFFFF\",\"#808080\"],\"seller\":{\"name\":\"Electrolux Official Store\",\"rating\":\"4.9\",\"reviews\":1837},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=280\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=281\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=282\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"44 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Electrolux\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"44 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A+\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Ventito artificiose centum. Bibo fugiat vinco arceo comis attollo benevolentia tabesco adaugeo.\",\"advantages\":[\"charisma tredecim ultra\",\"ulterius quisquam cometes necessitatibus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Margaret\",\"date\":\"20 fevral 2024\",\"rating\":4,\"comment\":\"Quis est cubitum.\",\"pros\":\"cicuta vulticulus tamisium\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Gideon\",\"date\":\"19 mart 2024\",\"rating\":3,\"comment\":\"Curatio pauper usque advoco desino cuius abbas sumptus vehemens.\",\"pros\":\"deludo vivo clam\",\"cons\":\"Yo'q\"}]},{\"id\":29,\"nomi\":\"Changyutgich LG DT-876\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Changyutgichlar\",\"brand\":\"LG\",\"rating\":4.2,\"reviewsCount\":6,\"ordersCount\":280,\"oldPrice\":6273000,\"newPrice\":5018000,\"discount\":20,\"tags\":[],\"colors\":[\"#FF0000\"],\"seller\":{\"name\":\"LG Official Store\",\"rating\":\"5.0\",\"reviews\":854},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/cleaning robot?lock=290\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/cleaning robot?lock=291\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/cleaning robot?lock=292\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"2066 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"LG\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"2066 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"66 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.6 L\"}]}],\"description\":\"Uyingiz tozaligini saqlash uchun kuchli va qulay changyutgich. Changni mukammal tortib oladi. Distinctio aduro arbor vos. Magni candidus atqui totus absens tenax non inflammatio deleo vel.\",\"advantages\":[\"est cur statua\",\"tertius vere cervus creber\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Jarrell\",\"date\":\"13 noyabr 2024\",\"rating\":3,\"comment\":\"Cilicium solutio ater caute deprecator asperiores nostrum surgo concido ait.\",\"pros\":\"toties circumvenio ipsum\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Jeremy\",\"date\":\"28 oktyabr 2024\",\"rating\":4,\"comment\":\"Adamo videlicet tabella cruciamentum abutor aurum patruus volva.\",\"pros\":\"amplexus vis correptius\",\"cons\":\"appositus uxor\"},{\"id\":10003,\"user\":\"Marley\",\"date\":\"12 iyun 2024\",\"rating\":4,\"comment\":\"Attero uterque astrum denuo deorsum umquam terebro tepesco.\",\"pros\":\"fugiat trado vicinus\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Ian\",\"date\":\"3 dekabr 2024\",\"rating\":4,\"comment\":\"Articulus viridis tendo adstringo amitto.\",\"pros\":\"vero adicio auctor\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Ava\",\"date\":\"5 noyabr 2024\",\"rating\":5,\"comment\":\"Vereor arcus curso.\",\"pros\":\"vestrum atqui dolorum\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Ansley\",\"date\":\"23 iyun 2024\",\"rating\":5,\"comment\":\"Deleniti cubicularis animi architecto testimonium decor ulterius.\",\"pros\":\"venustas comburo stillicidium\",\"cons\":\"Yo'q\"}]},{\"id\":30,\"nomi\":\"Stayler Babyliss DR-579\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Soch parvarishi\",\"brand\":\"Babyliss\",\"rating\":4.5,\"reviewsCount\":4,\"ordersCount\":757,\"oldPrice\":918000,\"newPrice\":872000,\"discount\":5,\"tags\":[],\"colors\":[\"#1E3A8A\",\"#FF0000\"],\"seller\":{\"name\":\"Babyliss Official Store\",\"rating\":\"4.9\",\"reviews\":494},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/hair straightener?lock=300\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/hair straightener?lock=301\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/hair straightener?lock=302\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/hair straightener?lock=303\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Akumulyator\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"3\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Babyliss\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]}],\"description\":\"Sochlaringizni quritish va shakl berish uchun professional vosita. Soch tolalarini himoya qiladi. Facilis minima carmen voveo rem. Candidus ultio autem ulciscor vallum absque compello vulgo aiunt.\",\"advantages\":[\"aggredior termes cubitum\",\"comptus trucido audentia tergeo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Jayda\",\"date\":\"6 sentyabr 2024\",\"rating\":4,\"comment\":\"Vorax fugit angelus vereor quae.\",\"pros\":\"voluptatum tendo surgo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Kennedi\",\"date\":\"1 noyabr 2024\",\"rating\":4,\"comment\":\"Cum anser autem appono verumtamen curriculum.\",\"pros\":\"desino curo praesentium\",\"cons\":\"depromo caput\"},{\"id\":10003,\"user\":\"Marisol\",\"date\":\"23 yanvar 2024\",\"rating\":5,\"comment\":\"Conitor synagoga eaque.\",\"pros\":\"colo conscendo sursum\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Osborne\",\"date\":\"9 avgust 2024\",\"rating\":5,\"comment\":\"Cognatus arbor unus tametsi demum.\",\"pros\":\"addo communis quisquam\",\"cons\":\"paulatim coniecto\"}]},{\"id\":31,\"nomi\":\"Inverter konditsioner Artel JO-115\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Konditsionerlar\",\"brand\":\"Artel\",\"rating\":4,\"reviewsCount\":5,\"ordersCount\":595,\"oldPrice\":5575000,\"newPrice\":4460000,\"discount\":20,\"tags\":[],\"colors\":[\"#1E3A8A\"],\"seller\":{\"name\":\"Artel Official Store\",\"rating\":\"4.9\",\"reviews\":406},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=310\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=311\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"49 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Artel\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"49 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A+\"}]}],\"description\":\"Yozda salqinlik, qishda issiqlik ulashuvchi zamonaviy konditsioner. Elektr energiyasini tejaydi. Vilitas impedit amissio desino tempore depereo cotidie amaritudo. Solitudo ullam ulterius umquam delectatio apparatus congregatio supellex tamdiu auctus.\",\"advantages\":[\"vigor aeternus caveo\",\"auxilium solium cunae aranea\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Callie\",\"date\":\"7 may 2024\",\"rating\":5,\"comment\":\"Depraedor culpa ipsa vinum annus.\",\"pros\":\"laudantium caritas ventito\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Edmond\",\"date\":\"26 mart 2024\",\"rating\":3,\"comment\":\"Harum facere viriliter theologus tui.\",\"pros\":\"repellat tero architecto\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Jamarcus\",\"date\":\"1 aprel 2024\",\"rating\":4,\"comment\":\"Utroque adulatio umquam corona verbum amicitia curvo audentia crepusculum tergo.\",\"pros\":\"custodia vis venio\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Florida\",\"date\":\"16 iyun 2024\",\"rating\":4,\"comment\":\"Versus accedo arbitro verbera ait cupiditate vilis sui admiratio torqueo.\",\"pros\":\"tempore adeptio cuius\",\"cons\":\"aut subvenio\"},{\"id\":10005,\"user\":\"Dawn\",\"date\":\"27 noyabr 2024\",\"rating\":4,\"comment\":\"Succurro alter strenuus argentum accusantium adflicto confero volva.\",\"pros\":\"usus culpo culpo\",\"cons\":\"patior caveo\"}]},{\"id\":32,\"nomi\":\"Stol chirog'i Yandex MQ-411\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Yandex\",\"rating\":3.8,\"reviewsCount\":8,\"ordersCount\":640,\"oldPrice\":2732000,\"newPrice\":1721000,\"discount\":37,\"tags\":[],\"colors\":[\"#1E3A8A\",\"#FF0000\",\"#808080\"],\"seller\":{\"name\":\"Yandex Official Store\",\"rating\":\"4.9\",\"reviews\":840},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=320\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=321\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=322\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=323\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Yandex\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Taedium celo audacia concedo minima sophismata attollo assentator. Terminatio iste canonicus verecundia.\",\"advantages\":[\"urbanus patrocinor tricesimus\",\"sursum coma cuppedia vulariter\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Emmy\",\"date\":\"15 sentyabr 2024\",\"rating\":4,\"comment\":\"Auctor denuncio conforto tonsor cotidie tantillus arceo cupressus benigne sono.\",\"pros\":\"thymum aequitas triduana\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Priscilla\",\"date\":\"24 iyul 2024\",\"rating\":3,\"comment\":\"Dens vulnero adopto tenuis clamo averto odit fugiat desino.\",\"pros\":\"summisse adeo accendo\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Lance\",\"date\":\"19 fevral 2024\",\"rating\":3,\"comment\":\"Xiphias desolo caelum spectaculum.\",\"pros\":\"centum dens clam\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Martin\",\"date\":\"28 yanvar 2024\",\"rating\":4,\"comment\":\"Nam numquam cruentus vindico autus animadverto.\",\"pros\":\"magnam adsum solus\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Eddie\",\"date\":\"10 dekabr 2024\",\"rating\":4,\"comment\":\"Vobis traho condico abduco vitiosus solus tego civitas crustulum coepi.\",\"pros\":\"claudeo utique vae\",\"cons\":\"cernuus volo\"},{\"id\":10006,\"user\":\"Rae\",\"date\":\"18 dekabr 2024\",\"rating\":4,\"comment\":\"Nihil adiuvo absum esse explicabo.\",\"pros\":\"confugo voluptatibus versus\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Tony\",\"date\":\"10 oktyabr 2024\",\"rating\":4,\"comment\":\"Certus spoliatio sequi tergum voluptatibus tempus aufero.\",\"pros\":\"virgo cur optio\",\"cons\":\"validus tamquam\"},{\"id\":10008,\"user\":\"Ellie\",\"date\":\"1 dekabr 2024\",\"rating\":4,\"comment\":\"Umquam totam caelestis tenus.\",\"pros\":\"ante cimentarius aedificium\",\"cons\":\"tantillus caelum\"}]},{\"id\":33,\"nomi\":\"Ovozli yordamchi Google NM-273\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"Google\",\"rating\":4,\"reviewsCount\":6,\"ordersCount\":194,\"oldPrice\":1604000,\"newPrice\":1299000,\"discount\":19,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#FFFFFF\",\"#1E3A8A\"],\"seller\":{\"name\":\"Google Official Store\",\"rating\":\"4.5\",\"reviews\":696},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=330\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=331\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=332\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Google\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Canto votum labore ustulo. Carmen accommodo desidero sursum omnis unde.\",\"advantages\":[\"crebro cinis acer\",\"admitto caecus vinum amicitia\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Ervin\",\"date\":\"20 iyul 2024\",\"rating\":4,\"comment\":\"Nulla crudelis tabesco quisquam sursum trepide tergo odio stultus.\",\"pros\":\"causa tempore vulnero\",\"cons\":\"theatrum venustas\"},{\"id\":10002,\"user\":\"Cesar\",\"date\":\"13 noyabr 2024\",\"rating\":5,\"comment\":\"Ademptio utique vero.\",\"pros\":\"curtus turba velum\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Lew\",\"date\":\"19 mart 2024\",\"rating\":3,\"comment\":\"Amo expedita bene stips curtus venustas debilito tantillus cupio absconditus.\",\"pros\":\"certus brevis conicio\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Nicolas\",\"date\":\"20 aprel 2024\",\"rating\":3,\"comment\":\"Crur nulla celer dapifer.\",\"pros\":\"colligo avaritia amet\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Eldridge\",\"date\":\"27 may 2024\",\"rating\":4,\"comment\":\"Comis aduro conservo astrum volup trucido sopor demum.\",\"pros\":\"adsuesco combibo denuo\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Bettye\",\"date\":\"4 yanvar 2024\",\"rating\":5,\"comment\":\"Facilis comburo spero dens crepusculum consuasor pariatur tripudio patrocinor aspicio.\",\"pros\":\"vesco tamdiu cedo\",\"cons\":\"Yo'q\"}]},{\"id\":34,\"nomi\":\"Kofemolka Moulinex VX-900\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Moulinex\",\"rating\":3.8,\"reviewsCount\":4,\"ordersCount\":380,\"oldPrice\":3552000,\"newPrice\":3161000,\"discount\":11,\"tags\":[],\"colors\":[\"#FF0000\"],\"seller\":{\"name\":\"Moulinex Official Store\",\"rating\":\"4.6\",\"reviews\":1452},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=340\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=341\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"535 W\"},{\"key\":\"Hajm\",\"value\":\"4.2 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Metal\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Moulinex\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"535 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"5\"},{\"label\":\"Idish hajmi\",\"value\":\"4.2 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Depraedor trado fugiat consectetur avaritia. Canto auctor deputo molestiae crebro commodo appositus.\",\"advantages\":[\"ex summopere turbo\",\"bellum benigne adopto cultellus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Chaya\",\"date\":\"11 fevral 2024\",\"rating\":3,\"comment\":\"Incidunt cicuta argentum aestus inventore valens accommodo carpo certus.\",\"pros\":\"vaco tamen coma\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Karli\",\"date\":\"13 fevral 2024\",\"rating\":5,\"comment\":\"Ver dolor saepe censura.\",\"pros\":\"coerceo maxime aequus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Henderson\",\"date\":\"1 mart 2024\",\"rating\":3,\"comment\":\"Sto corona sunt caterva facere crepusculum tactus cum ago cursim.\",\"pros\":\"tego solio cubo\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Sabina\",\"date\":\"1 fevral 2024\",\"rating\":4,\"comment\":\"Iusto ventus laborum conicio spargo denique cuppedia.\",\"pros\":\"vado spargo asper\",\"cons\":\"Yo'q\"}]},{\"id\":35,\"nomi\":\"RGB lenta Yeelight BL-696\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Yeelight\",\"rating\":3.4,\"reviewsCount\":7,\"ordersCount\":97,\"oldPrice\":1433000,\"newPrice\":1075000,\"discount\":25,\"tags\":[],\"colors\":[\"#000000\"],\"seller\":{\"name\":\"Yeelight Official Store\",\"rating\":\"4.7\",\"reviews\":1114},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=350\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=351\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=352\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Yeelight\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Capillus decimus ambulo aurum turpis deorsum similique compello textilis virgo. Vir cunabula cuppedia beatus tollo vetus cogo trado.\",\"advantages\":[\"debilito aureus tui\",\"cubicularis decerno id adversus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Myrna\",\"date\":\"11 avgust 2024\",\"rating\":3,\"comment\":\"Patrocinor venio acies antepono.\",\"pros\":\"video consuasor delicate\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Pink\",\"date\":\"25 iyun 2024\",\"rating\":3,\"comment\":\"Aegrotatio vos sodalitas cras defleo.\",\"pros\":\"casso coaegresco cum\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Sabrina\",\"date\":\"10 dekabr 2024\",\"rating\":5,\"comment\":\"Careo tametsi veritatis.\",\"pros\":\"cuius pecus beatae\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Tracy\",\"date\":\"10 oktyabr 2024\",\"rating\":3,\"comment\":\"Vado suscipio eum absum vapulus pecus alii suadeo spiritus.\",\"pros\":\"alioqui claustrum adsidue\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Nelda\",\"date\":\"16 avgust 2024\",\"rating\":4,\"comment\":\"Tenax temptatio tumultus certus fuga.\",\"pros\":\"adinventitias suffoco aegre\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Tavares\",\"date\":\"6 iyul 2024\",\"rating\":3,\"comment\":\"Vomica contra angelus sapiente cruentus doloremque vulgo sustineo creta.\",\"pros\":\"comptus uter perspiciatis\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Lillie\",\"date\":\"17 iyun 2024\",\"rating\":3,\"comment\":\"Addo id alii supellex blanditiis desparatus.\",\"pros\":\"comparo veritas ante\",\"cons\":\"Yo'q\"}]},{\"id\":36,\"nomi\":\"Dazmol Panasonic PL-542\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Panasonic\",\"rating\":4.5,\"reviewsCount\":2,\"ordersCount\":395,\"oldPrice\":7920000,\"newPrice\":5623000,\"discount\":29,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#1E3A8A\",\"#FF0000\"],\"seller\":{\"name\":\"Panasonic Official Store\",\"rating\":\"4.6\",\"reviews\":681},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=360\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=361\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=362\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"2542 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Panasonic\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"2542 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"75 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.5 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Cui amicitia ars. Clarus hic tibi temeritas consequatur.\",\"advantages\":[\"ancilla theca debilito\",\"unde nulla laudantium voco\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Kassandra\",\"date\":\"8 sentyabr 2024\",\"rating\":4,\"comment\":\"Annus terebro cresco stips antepono contabesco administratio vobis clarus.\",\"pros\":\"sunt infit capillus\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Austin\",\"date\":\"17 dekabr 2024\",\"rating\":5,\"comment\":\"Capto virga cado accommodo facilis.\",\"pros\":\"tempore bestia demulceo\",\"cons\":\"Yo'q\"}]},{\"id\":37,\"nomi\":\"Moyli radiator Electrolux LY-253\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Electrolux\",\"rating\":4.7,\"reviewsCount\":0,\"ordersCount\":666,\"oldPrice\":5381000,\"newPrice\":4305000,\"discount\":20,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FFFFFF\",\"#808080\"],\"seller\":{\"name\":\"Electrolux Official Store\",\"rating\":\"4.8\",\"reviews\":1231},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=370\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=371\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"38 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Electrolux\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"38 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A++\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Creator delectus aequus sequi. Terminatio tonsor spiculum rerum commodo.\",\"advantages\":[\"adiuvo ascit curiositas\",\"solio assentator vobis tenetur\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":38,\"nomi\":\"RGB lenta Xiaomi GG-772\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Xiaomi\",\"rating\":4.5,\"reviewsCount\":6,\"ordersCount\":790,\"oldPrice\":3894000,\"newPrice\":2648000,\"discount\":32,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\"],\"seller\":{\"name\":\"Xiaomi Official Store\",\"rating\":\"4.7\",\"reviews\":1266},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=380\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=381\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=382\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=383\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Xiaomi\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Adulescens tabernus quam porro esse calamitas. Caveo surgo aspernatur turpis vinco quod veritas creber velut.\",\"advantages\":[\"depraedor constans suppono\",\"cervus crur carcer texo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Kennedy\",\"date\":\"15 avgust 2024\",\"rating\":4,\"comment\":\"Quia amet cognatus.\",\"pros\":\"conduco alii doloremque\",\"cons\":\"suffoco quas\"},{\"id\":10002,\"user\":\"Jimmy\",\"date\":\"27 fevral 2024\",\"rating\":3,\"comment\":\"Admitto asporto comitatus.\",\"pros\":\"minima complectus versus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Milo\",\"date\":\"1 fevral 2024\",\"rating\":5,\"comment\":\"Delibero tollo cruciamentum centum dolorem rem caries.\",\"pros\":\"repellat validus optio\",\"cons\":\"apud deserunt\"},{\"id\":10004,\"user\":\"Melyssa\",\"date\":\"11 mart 2024\",\"rating\":5,\"comment\":\"Amo impedit vado appono caries suppellex peior.\",\"pros\":\"decumbo attero optio\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Citlalli\",\"date\":\"13 sentyabr 2024\",\"rating\":5,\"comment\":\"Strues demum apto temptatio itaque audeo tam casso accusantium.\",\"pros\":\"coma voluptatibus est\",\"cons\":\"crudelis calco\"},{\"id\":10006,\"user\":\"Lonie\",\"date\":\"18 sentyabr 2024\",\"rating\":5,\"comment\":\"Fugit dolores tendo compono conor termes ipsa.\",\"pros\":\"aggredior vulnero stipes\",\"cons\":\"Yo'q\"}]},{\"id\":39,\"nomi\":\"Ovozli yordamchi Google FI-314\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"Google\",\"rating\":3.9,\"reviewsCount\":7,\"ordersCount\":760,\"oldPrice\":5642000,\"newPrice\":3724000,\"discount\":34,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#FFFFFF\",\"#FF0000\"],\"seller\":{\"name\":\"Google Official Store\",\"rating\":\"4.5\",\"reviews\":1449},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=390\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=391\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Google\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Cibo denuncio desidero utpote sunt. Paulatim verumtamen creber conicio arcesso aggero.\",\"advantages\":[\"sortitus stips defungo\",\"tamquam conforto sequi conqueror\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Giovanna\",\"date\":\"13 iyul 2024\",\"rating\":4,\"comment\":\"Vae cras temporibus comes quia tollo video.\",\"pros\":\"voluptatibus uterque vinum\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Ward\",\"date\":\"23 fevral 2024\",\"rating\":3,\"comment\":\"Appono textilis conforto ara doloribus creptio.\",\"pros\":\"collum accedo tumultus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Della\",\"date\":\"10 dekabr 2024\",\"rating\":3,\"comment\":\"Vix delicate uredo curvo patior audio thesis.\",\"pros\":\"aggero abduco succedo\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Mateo\",\"date\":\"2 avgust 2024\",\"rating\":5,\"comment\":\"Tametsi cauda uxor corpus aestivus video reprehenderit avarus.\",\"pros\":\"aut adulescens aureus\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Alena\",\"date\":\"15 avgust 2024\",\"rating\":3,\"comment\":\"Voveo vomer ceno caste adeptio.\",\"pros\":\"amo adimpleo eveniet\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Friedrich\",\"date\":\"7 mart 2024\",\"rating\":4,\"comment\":\"Averto avarus est.\",\"pros\":\"urbanus vallum vomer\",\"cons\":\"vitium caput\"},{\"id\":10007,\"user\":\"Dudley\",\"date\":\"24 fevral 2024\",\"rating\":5,\"comment\":\"Admitto omnis tergiversatio.\",\"pros\":\"magni solum vorago\",\"cons\":\"Yo'q\"}]},{\"id\":40,\"nomi\":\"Aqlli rozetka Yeelight CS-597\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Yeelight\",\"rating\":4,\"reviewsCount\":4,\"ordersCount\":239,\"oldPrice\":1993000,\"newPrice\":1754000,\"discount\":12,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#FFFFFF\",\"#FF0000\"],\"seller\":{\"name\":\"Yeelight Official Store\",\"rating\":\"5.0\",\"reviews\":521},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=400\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=401\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=402\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=403\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Yeelight\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Cupressus damno vaco voro ad adipiscor testimonium aiunt. Tribuo enim taceo comparo dignissimos comptus conventus decipio arguo suadeo.\",\"advantages\":[\"aspicio demum deputo\",\"suffragium temeritas thesaurus spero\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Alison\",\"date\":\"12 oktyabr 2024\",\"rating\":5,\"comment\":\"Cervus virtus expedita voveo.\",\"pros\":\"quam cultura coadunatio\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Lennie\",\"date\":\"23 yanvar 2024\",\"rating\":5,\"comment\":\"Arcesso admoneo apparatus atque balbus averto.\",\"pros\":\"omnis acidus desidero\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Arne\",\"date\":\"4 dekabr 2024\",\"rating\":3,\"comment\":\"Sit solitudo vitae cavus statim.\",\"pros\":\"decor corona voluptas\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Harmony\",\"date\":\"5 aprel 2024\",\"rating\":3,\"comment\":\"Appello crepusculum tabula carmen.\",\"pros\":\"magnam consequatur confugo\",\"cons\":\"Yo'q\"}]},{\"id\":41,\"nomi\":\"Konditsioner Artel LD-518\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Konditsionerlar\",\"brand\":\"Artel\",\"rating\":4,\"reviewsCount\":4,\"ordersCount\":689,\"oldPrice\":4415000,\"newPrice\":3223000,\"discount\":27,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#000000\",\"#FF0000\"],\"seller\":{\"name\":\"Artel Official Store\",\"rating\":\"4.8\",\"reviews\":728},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=410\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=411\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=412\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=413\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"39 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Artel\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"39 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A\"}]}],\"description\":\"Yozda salqinlik, qishda issiqlik ulashuvchi zamonaviy konditsioner. Elektr energiyasini tejaydi. Tabesco damno correptius suffragium sublime trepide aveho. Aperio caecus defendo thema laborum veniam apostolus dolor theologus vilis.\",\"advantages\":[\"contego quo virgo\",\"tripudio expedita libero ratione\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Arden\",\"date\":\"3 noyabr 2024\",\"rating\":4,\"comment\":\"Aliquam quis architecto amitto officia succedo coruscus ulciscor alii.\",\"pros\":\"sodalitas truculenter villa\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Kenna\",\"date\":\"21 noyabr 2024\",\"rating\":4,\"comment\":\"Utilis tutamen vado caput arbitro.\",\"pros\":\"suspendo aptus alius\",\"cons\":\"circumvenio speciosus\"},{\"id\":10003,\"user\":\"Avery\",\"date\":\"25 oktyabr 2024\",\"rating\":5,\"comment\":\"Vigilo baiulus temptatio aggero caveo vilitas defleo.\",\"pros\":\"arca copiose acidus\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Gus\",\"date\":\"9 may 2024\",\"rating\":3,\"comment\":\"Vacuus ver attonbitus amor.\",\"pros\":\"suffragium cornu ara\",\"cons\":\"corrupti ambulo\"}]},{\"id\":42,\"nomi\":\"Mikser Bosch NW-454\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Bosch\",\"rating\":4.3,\"reviewsCount\":6,\"ordersCount\":824,\"oldPrice\":4154000,\"newPrice\":3406000,\"discount\":18,\"tags\":[],\"colors\":[\"#000000\",\"#1E3A8A\",\"#808080\"],\"seller\":{\"name\":\"Bosch Official Store\",\"rating\":\"4.5\",\"reviews\":1874},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=420\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=421\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"1237 W\"},{\"key\":\"Hajm\",\"value\":\"3.5 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Metal\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Bosch\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"1237 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"8\"},{\"label\":\"Idish hajmi\",\"value\":\"3.5 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Capio cerno aureus solitudo. Absconditus civitas peccatus tamquam peccatus comparo voro decor.\",\"advantages\":[\"verumtamen bellum aer\",\"cubitum deleniti vulnus ipsa\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Alex\",\"date\":\"25 noyabr 2024\",\"rating\":5,\"comment\":\"Dignissimos vesica autus.\",\"pros\":\"ancilla conturbo veritas\",\"cons\":\"utrum praesentium\"},{\"id\":10002,\"user\":\"Verna\",\"date\":\"27 oktyabr 2024\",\"rating\":5,\"comment\":\"Tres pariatur tero curriculum callide confero thema turbo.\",\"pros\":\"architecto illo atrox\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Elliott\",\"date\":\"21 sentyabr 2024\",\"rating\":4,\"comment\":\"Caecus cognatus venia aequitas deduco cultellus tepesco comprehendo vomer apud.\",\"pros\":\"vox cetera tum\",\"cons\":\"labore spiculum\"},{\"id\":10004,\"user\":\"Gussie\",\"date\":\"3 may 2024\",\"rating\":4,\"comment\":\"Capillus temptatio coniecto porro triumphus ancilla vinum dapifer at constans.\",\"pros\":\"summa campana anser\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Eloise\",\"date\":\"21 sentyabr 2024\",\"rating\":5,\"comment\":\"Supra angulus agnosco debitis pectus defaeco.\",\"pros\":\"auditor ratione bellicus\",\"cons\":\"modi beatus\"},{\"id\":10006,\"user\":\"Reba\",\"date\":\"1 dekabr 2024\",\"rating\":3,\"comment\":\"Tactus tubineus sui qui vilicus bestia degusto subito non.\",\"pros\":\"nulla non tempore\",\"cons\":\"Yo'q\"}]},{\"id\":43,\"nomi\":\"Isitgich Electrolux ET-413\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Electrolux\",\"rating\":5,\"reviewsCount\":2,\"ordersCount\":385,\"oldPrice\":3597000,\"newPrice\":3022000,\"discount\":16,\"tags\":[],\"colors\":[\"#1E3A8A\",\"#000000\"],\"seller\":{\"name\":\"Electrolux Official Store\",\"rating\":\"4.6\",\"reviews\":1172},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=430\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=431\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"37 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Electrolux\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"37 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A+\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Venustas cotidie vobis ea stillicidium enim tumultus thesis aeternus crudelis. Est casus tenetur.\",\"advantages\":[\"solitudo vulgaris candidus\",\"cupio sollicito contra atrox\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Edd\",\"date\":\"10 noyabr 2024\",\"rating\":5,\"comment\":\"Verbum copia caveo comburo sed censura canto sonitus convoco perferendis.\",\"pros\":\"cultura catena doloremque\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Kristin\",\"date\":\"1 sentyabr 2024\",\"rating\":5,\"comment\":\"Cupiditas baiulus porro vir.\",\"pros\":\"commodo occaecati capitulus\",\"cons\":\"Yo'q\"}]},{\"id\":44,\"nomi\":\"Epilyator Philips XG-379\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Philips\",\"rating\":3.8,\"reviewsCount\":9,\"ordersCount\":33,\"oldPrice\":593000,\"newPrice\":403000,\"discount\":32,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#1E3A8A\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.8\",\"reviews\":1645},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=440\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=441\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"5\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Odio admitto tot perferendis tego ante delinquo auditor comparo. Tam impedit suggero cohibeo quia victus.\",\"advantages\":[\"coniuratio thalassinus architecto\",\"amet celer tyrannus tendo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Kamille\",\"date\":\"13 mart 2024\",\"rating\":4,\"comment\":\"Appono paens textus ascisco sperno.\",\"pros\":\"commodi tubineus culpo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Connie\",\"date\":\"23 yanvar 2024\",\"rating\":3,\"comment\":\"Delicate undique aeternus assumenda cognatus voro vero uberrime.\",\"pros\":\"defungo sui demens\",\"cons\":\"exercitationem tolero\"},{\"id\":10003,\"user\":\"Jody\",\"date\":\"11 iyun 2024\",\"rating\":4,\"comment\":\"Deficio patria amaritudo debilito deludo tergum bis somniculosus acerbitas.\",\"pros\":\"ut synagoga demergo\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Gerard\",\"date\":\"5 noyabr 2024\",\"rating\":5,\"comment\":\"Patria commodo ubi ipsa tribuo alter.\",\"pros\":\"venio contra creo\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Mariano\",\"date\":\"28 avgust 2024\",\"rating\":3,\"comment\":\"Talis supra damnatio victus.\",\"pros\":\"reiciendis culpa modi\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Adrian\",\"date\":\"24 iyun 2024\",\"rating\":5,\"comment\":\"Cras pectus architecto ultio sophismata angulus canto deprecator tredecim.\",\"pros\":\"sufficio aptus aeger\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Lucienne\",\"date\":\"25 iyul 2024\",\"rating\":4,\"comment\":\"Thymum arbor tener venia unde ducimus.\",\"pros\":\"autus acidus vel\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Brendon\",\"date\":\"3 fevral 2024\",\"rating\":3,\"comment\":\"Absens alter tenax vindico damno voveo toties communis tunc.\",\"pros\":\"tricesimus valens torqueo\",\"cons\":\"Yo'q\"},{\"id\":10009,\"user\":\"Dandre\",\"date\":\"15 yanvar 2024\",\"rating\":3,\"comment\":\"Territo corrumpo brevis.\",\"pros\":\"crudelis totam tibi\",\"cons\":\"Yo'q\"}]},{\"id\":45,\"nomi\":\"Ovozli yordamchi JBL MP-541\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"JBL\",\"rating\":3,\"reviewsCount\":1,\"ordersCount\":276,\"oldPrice\":5359000,\"newPrice\":4663000,\"discount\":13,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#FF0000\"],\"seller\":{\"name\":\"JBL Official Store\",\"rating\":\"4.9\",\"reviews\":1551},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=450\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=451\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"JBL\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Demitto creator paulatim thalassinus arma degenero contabesco tergo vaco tametsi. Odio concedo ultio summa attero aestivus villa anser benigne itaque.\",\"advantages\":[\"solus tergum voluptas\",\"sublime vulgus tollo cruciamentum\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Alvera\",\"date\":\"4 dekabr 2024\",\"rating\":3,\"comment\":\"Adeo aperio desparatus tardus vesica confugo velociter bellicus.\",\"pros\":\"coaegresco caterva catena\",\"cons\":\"Yo'q\"}]},{\"id\":46,\"nomi\":\"Mikser Philips QL-389\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Philips\",\"rating\":5,\"reviewsCount\":5,\"ordersCount\":93,\"oldPrice\":3520000,\"newPrice\":3203000,\"discount\":9,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#000000\",\"#FFFFFF\",\"#808080\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.9\",\"reviews\":673},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=460\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=461\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=462\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"1079 W\"},{\"key\":\"Hajm\",\"value\":\"1.4 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Shisha\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"1079 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"2\"},{\"label\":\"Idish hajmi\",\"value\":\"1.4 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Pax cohaero conturbo trans atqui porro temptatio adsum facilis culpo. Tabgo bardus aegre laboriosam theologus usitas cogito aspernatur.\",\"advantages\":[\"subseco curtus comis\",\"benevolentia voluptas auctor vomer\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Coby\",\"date\":\"12 noyabr 2024\",\"rating\":5,\"comment\":\"Spiritus comedo arbor.\",\"pros\":\"color cetera bonus\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Camron\",\"date\":\"17 oktyabr 2024\",\"rating\":5,\"comment\":\"Ascisco adsidue viscus vulgo amplitudo illo suspendo curis credo claustrum.\",\"pros\":\"curtus eos aegrus\",\"cons\":\"armarium convoco\"},{\"id\":10003,\"user\":\"Pattie\",\"date\":\"16 sentyabr 2024\",\"rating\":5,\"comment\":\"Repellat aut quos vergo uxor voco valens aetas custodia soluta.\",\"pros\":\"suspendo asper bardus\",\"cons\":\"apto aggero\"},{\"id\":10004,\"user\":\"Elva\",\"date\":\"27 may 2024\",\"rating\":5,\"comment\":\"Alius eum laudantium voro quis suscipio.\",\"pros\":\"caelestis adsum surculus\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Sienna\",\"date\":\"27 noyabr 2024\",\"rating\":5,\"comment\":\"Vorax aedificium vix auctus decumbo culpa taedium terror.\",\"pros\":\"curis tum speculum\",\"cons\":\"tener voluptate\"}]},{\"id\":47,\"nomi\":\"Blender Braun GD-750\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Braun\",\"rating\":4.2,\"reviewsCount\":5,\"ordersCount\":428,\"oldPrice\":1219000,\"newPrice\":878000,\"discount\":28,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FF0000\",\"#808080\",\"#000000\"],\"seller\":{\"name\":\"Braun Official Store\",\"rating\":\"4.5\",\"reviews\":531},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=470\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=471\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=472\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/mixer?lock=473\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"1351 W\"},{\"key\":\"Hajm\",\"value\":\"1.8 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Plastik\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Braun\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"1351 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"2\"},{\"label\":\"Idish hajmi\",\"value\":\"1.8 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Chirographum desidero rem varietas vulnero utpote bonus. Veritatis cohors usitas complectus ara derelinquo calamitas solvo alter.\",\"advantages\":[\"corrumpo desino ulciscor\",\"rerum absens earum crepusculum\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Alphonso\",\"date\":\"3 noyabr 2024\",\"rating\":5,\"comment\":\"Vitae clamo super id adstringo triduana apostolus temporibus pecto.\",\"pros\":\"possimus defaeco facere\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Yasmine\",\"date\":\"11 fevral 2024\",\"rating\":5,\"comment\":\"Curso correptius perferendis sustineo adstringo agnitio delego.\",\"pros\":\"ullam vulariter maxime\",\"cons\":\"conturbo alias\"},{\"id\":10003,\"user\":\"Lura\",\"date\":\"1 sentyabr 2024\",\"rating\":4,\"comment\":\"Tum asper adiuvo ocer calcar delicate.\",\"pros\":\"aurum depono commodi\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Kolby\",\"date\":\"9 noyabr 2024\",\"rating\":3,\"comment\":\"Aut tamisium adstringo ubi claudeo.\",\"pros\":\"abstergo argentum antepono\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Demetris\",\"date\":\"25 sentyabr 2024\",\"rating\":4,\"comment\":\"Turbo ea solum valeo esse degusto temptatio subnecto usus coruscus.\",\"pros\":\"blanditiis tristis causa\",\"cons\":\"Yo'q\"}]},{\"id\":48,\"nomi\":\"Dazmol Philips EF-127\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Philips\",\"rating\":4,\"reviewsCount\":2,\"ordersCount\":259,\"oldPrice\":1380000,\"newPrice\":1049000,\"discount\":24,\"tags\":[],\"colors\":[\"#808080\",\"#FFFFFF\",\"#000000\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.9\",\"reviews\":1675},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=480\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=481\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"4197 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"4197 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"68 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.9 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Magni timidus cultellus crastinus tepidus coepi decens bene assentator attonbitus. Aliqua ullam colo arma.\",\"advantages\":[\"odio concido avaritia\",\"adopto corrigo avarus velociter\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Sterling\",\"date\":\"19 iyul 2024\",\"rating\":3,\"comment\":\"Tertius cras vulpes anser vado cavus callide.\",\"pros\":\"quam concido apud\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Chesley\",\"date\":\"28 mart 2024\",\"rating\":5,\"comment\":\"Neque perferendis incidunt.\",\"pros\":\"amicitia curtus tibi\",\"cons\":\"Yo'q\"}]},{\"id\":49,\"nomi\":\"Vertikal dazmol Panasonic PP-561\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Panasonic\",\"rating\":3.5,\"reviewsCount\":2,\"ordersCount\":694,\"oldPrice\":5276000,\"newPrice\":3271000,\"discount\":38,\"tags\":[],\"colors\":[\"#000000\",\"#1E3A8A\",\"#808080\"],\"seller\":{\"name\":\"Panasonic Official Store\",\"rating\":\"5.0\",\"reviews\":1503},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=490\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=491\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=492\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=493\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"4683 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Panasonic\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"4683 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"66 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.6 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Tempus vilicus basium sono ipsam cohaero. Demergo volup talis sonitus suggero.\",\"advantages\":[\"contra absconditus praesentium\",\"abutor solio pectus stella\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Nathan\",\"date\":\"1 may 2024\",\"rating\":3,\"comment\":\"Delectatio veritas soleo tres bestia balbus cauda tripudio.\",\"pros\":\"ager corrupti autus\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Cooper\",\"date\":\"27 fevral 2024\",\"rating\":4,\"comment\":\"Spiritus umerus stultus campana thesis auctor deporto tenax dolore spectaculum.\",\"pros\":\"aegre depopulo auctor\",\"cons\":\"reiciendis vae\"}]},{\"id\":50,\"nomi\":\"Moyli radiator Electrolux SW-523\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Electrolux\",\"rating\":4.1,\"reviewsCount\":8,\"ordersCount\":836,\"oldPrice\":1296000,\"newPrice\":1011000,\"discount\":22,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#FFFFFF\",\"#000000\"],\"seller\":{\"name\":\"Electrolux Official Store\",\"rating\":\"4.7\",\"reviews\":1196},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=500\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=501\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=502\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=503\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"40 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Electrolux\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"40 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Vado amissio beneficium umbra quam cum. Uxor uterque dedecor triumphus credo.\",\"advantages\":[\"aiunt coepi agnitio\",\"titulus decens vestrum cubo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Sandy\",\"date\":\"23 yanvar 2024\",\"rating\":4,\"comment\":\"Casus aggero nisi teres.\",\"pros\":\"tactus benigne ex\",\"cons\":\"provident culpa\"},{\"id\":10002,\"user\":\"Angela\",\"date\":\"5 dekabr 2024\",\"rating\":5,\"comment\":\"Crudelis aer acceptus spiritus amor ea creator decimus adicio cerno.\",\"pros\":\"temptatio possimus decerno\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Bryon\",\"date\":\"22 oktyabr 2024\",\"rating\":5,\"comment\":\"Capillus derelinquo adamo.\",\"pros\":\"arbustum doloremque dolorum\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Wiley\",\"date\":\"14 sentyabr 2024\",\"rating\":4,\"comment\":\"Adfectus angustus optio defleo coadunatio.\",\"pros\":\"ad civis subnecto\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Francesco\",\"date\":\"23 fevral 2024\",\"rating\":3,\"comment\":\"Deputo aureus vero crebro dens arguo stips adamo pauper.\",\"pros\":\"conatus succedo theologus\",\"cons\":\"baiulus dolor\"},{\"id\":10006,\"user\":\"Gerry\",\"date\":\"15 yanvar 2024\",\"rating\":5,\"comment\":\"Vero defetiscor tutamen rerum vulgus strenuus accusamus tum.\",\"pros\":\"spiritus unus victus\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Otto\",\"date\":\"26 avgust 2024\",\"rating\":4,\"comment\":\"Alienus abbas deinde avarus.\",\"pros\":\"crur reprehenderit animi\",\"cons\":\"carbo armarium\"},{\"id\":10008,\"user\":\"Lucio\",\"date\":\"22 dekabr 2024\",\"rating\":3,\"comment\":\"Tracto tabella allatus.\",\"pros\":\"cum turba sequi\",\"cons\":\"Yo'q\"}]},{\"id\":51,\"nomi\":\"Konvektor Electrolux IJ-328\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Electrolux\",\"rating\":4,\"reviewsCount\":7,\"ordersCount\":247,\"oldPrice\":2962000,\"newPrice\":2547000,\"discount\":14,\"tags\":[],\"colors\":[\"#000000\",\"#FFFFFF\",\"#808080\"],\"seller\":{\"name\":\"Electrolux Official Store\",\"rating\":\"4.9\",\"reviews\":469},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=510\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=511\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"39 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Electrolux\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"39 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A+\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Ter vita quis confero vestigium crapula abundans depereo. Bellum tredecim ipsum aspernatur dolor iste sperno tollo.\",\"advantages\":[\"vox solitudo animus\",\"verus spargo vacuus usus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Raymond\",\"date\":\"17 aprel 2024\",\"rating\":3,\"comment\":\"Vindico ocer theologus tener verbum correptius cunctatio coruscus.\",\"pros\":\"ad illo vomica\",\"cons\":\"fugiat aedificium\"},{\"id\":10002,\"user\":\"Palma\",\"date\":\"2 mart 2024\",\"rating\":3,\"comment\":\"Valetudo copiose cuppedia arguo abstergo infit aggredior.\",\"pros\":\"odio autus contego\",\"cons\":\"tracto odit\"},{\"id\":10003,\"user\":\"Harley\",\"date\":\"3 yanvar 2024\",\"rating\":5,\"comment\":\"Crapula caries benevolentia victoria curto repellat est crur tempora.\",\"pros\":\"celo cavus sopor\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Shanelle\",\"date\":\"4 mart 2024\",\"rating\":3,\"comment\":\"Versus atque strues.\",\"pros\":\"ad solvo cribro\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Helga\",\"date\":\"24 may 2024\",\"rating\":5,\"comment\":\"Adaugeo tubineus cattus aetas distinctio rerum trepide vox suffoco victoria.\",\"pros\":\"tego unde vulgo\",\"cons\":\"deserunt aureus\"},{\"id\":10006,\"user\":\"Melyna\",\"date\":\"2 may 2024\",\"rating\":4,\"comment\":\"Appono apto amplexus repellat angelus vorax cohaero volutabrum.\",\"pros\":\"comitatus conservo vinculum\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Jarod\",\"date\":\"18 sentyabr 2024\",\"rating\":5,\"comment\":\"Compono veniam studio accedo velum.\",\"pros\":\"colo derelinquo succedo\",\"cons\":\"ademptio animi\"}]},{\"id\":52,\"nomi\":\"Stayler Remington XO-506\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Soch parvarishi\",\"brand\":\"Remington\",\"rating\":4.4,\"reviewsCount\":5,\"ordersCount\":624,\"oldPrice\":7427000,\"newPrice\":6610000,\"discount\":11,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#FFFFFF\"],\"seller\":{\"name\":\"Remington Official Store\",\"rating\":\"4.6\",\"reviews\":1234},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=520\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=521\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=522\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=523\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"4\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Remington\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]}],\"description\":\"Sochlaringizni quritish va shakl berish uchun professional vosita. Soch tolalarini himoya qiladi. Ventosus tenus dicta harum dedico defero curto despecto. Auctor avarus bene dedecor commemoro cena capitulus vilicus deduco creator.\",\"advantages\":[\"vel decet cinis\",\"contigo capitulus admitto solum\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Kelvin\",\"date\":\"2 may 2024\",\"rating\":4,\"comment\":\"Cursim auctus cognomen creta aranea vivo concedo templum.\",\"pros\":\"debeo repellat commemoro\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Charlene\",\"date\":\"12 mart 2024\",\"rating\":4,\"comment\":\"Truculenter crur aptus absum doloremque arbor decet vilis sub tantum.\",\"pros\":\"congregatio eligendi tantillus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Ena\",\"date\":\"20 noyabr 2024\",\"rating\":5,\"comment\":\"Bene terreo tumultus vespillo asper currus surculus.\",\"pros\":\"teneo vulpes cinis\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Hailie\",\"date\":\"5 oktyabr 2024\",\"rating\":5,\"comment\":\"Dignissimos voveo turpis temperantia ipsum dolorem adeptio ipsum.\",\"pros\":\"cometes tersus perferendis\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Ottis\",\"date\":\"21 avgust 2024\",\"rating\":4,\"comment\":\"Ceno triduana sonitus trado deprecator aro.\",\"pros\":\"claro terror cupiditas\",\"cons\":\"Yo'q\"}]},{\"id\":53,\"nomi\":\"Dazmol Philips XZ-394\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Philips\",\"rating\":4.7,\"reviewsCount\":0,\"ordersCount\":89,\"oldPrice\":3936000,\"newPrice\":2676000,\"discount\":32,\"tags\":[],\"colors\":[\"#1E3A8A\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.9\",\"reviews\":385},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=530\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=531\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=532\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"3088 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"3088 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"60 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.8 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Tribuo congregatio timor peior vacuus debilito acquiro beatus. Sapiente aequitas cometes theca deporto adhuc crastinus.\",\"advantages\":[\"argumentum alter cohors\",\"quas thema clam triduana\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":54,\"nomi\":\"Bug'li dazmol Tefal YY-251\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Tefal\",\"rating\":3.5,\"reviewsCount\":4,\"ordersCount\":347,\"oldPrice\":3114000,\"newPrice\":2149000,\"discount\":31,\"tags\":[],\"colors\":[\"#000000\",\"#808080\",\"#FFFFFF\"],\"seller\":{\"name\":\"Tefal Official Store\",\"rating\":\"4.5\",\"reviews\":775},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=540\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=541\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=542\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=543\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"4398 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Tefal\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"4398 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"61 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.4 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Exercitationem comminor cernuus spes. Angulus voluptatibus arto accusamus caritas.\",\"advantages\":[\"adficio civitas tumultus\",\"comis quis aestivus ocer\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Junior\",\"date\":\"14 aprel 2024\",\"rating\":4,\"comment\":\"Aqua suspendo iste.\",\"pros\":\"trado corpus sustineo\",\"cons\":\"suscipit claustrum\"},{\"id\":10002,\"user\":\"Columbus\",\"date\":\"23 fevral 2024\",\"rating\":4,\"comment\":\"Amplus pauci animi volubilis sequi creta aperio amplitudo territo.\",\"pros\":\"curriculum caelestis corrupti\",\"cons\":\"charisma auctor\"},{\"id\":10003,\"user\":\"Cassidy\",\"date\":\"10 mart 2024\",\"rating\":3,\"comment\":\"Vorax umbra dolorum adstringo quam totam.\",\"pros\":\"aurum eveniet vado\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Akeem\",\"date\":\"2 iyun 2024\",\"rating\":3,\"comment\":\"Utilis coniuratio angustus praesentium cubo eum pecto.\",\"pros\":\"vinitor absens vilis\",\"cons\":\"Yo'q\"}]},{\"id\":55,\"nomi\":\"Moyli radiator Electrolux RL-376\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Electrolux\",\"rating\":3,\"reviewsCount\":2,\"ordersCount\":133,\"oldPrice\":2760000,\"newPrice\":2456000,\"discount\":11,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#000000\"],\"seller\":{\"name\":\"Electrolux Official Store\",\"rating\":\"4.7\",\"reviews\":689},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=550\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=551\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=552\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=553\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"33 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Electrolux\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"33 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A++\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Accendo summopere victus tricesimus coma baiulus occaecati iste itaque. Suadeo tenus accusamus autem theatrum abutor.\",\"advantages\":[\"aurum villa tremo\",\"voluptatem depulso alter stella\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Sierra\",\"date\":\"24 sentyabr 2024\",\"rating\":3,\"comment\":\"Confugo denique adiuvo aduro curto itaque venio spectaculum.\",\"pros\":\"ulciscor depopulo blanditiis\",\"cons\":\"vesco terreo\"},{\"id\":10002,\"user\":\"Kaitlyn\",\"date\":\"5 iyul 2024\",\"rating\":3,\"comment\":\"Sordeo utroque amita.\",\"pros\":\"adficio usitas inventore\",\"cons\":\"Yo'q\"}]},{\"id\":56,\"nomi\":\"Bug'li dazmol Tefal MD-755\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Tefal\",\"rating\":3.5,\"reviewsCount\":2,\"ordersCount\":498,\"oldPrice\":3715000,\"newPrice\":3120000,\"discount\":16,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FF0000\",\"#808080\"],\"seller\":{\"name\":\"Tefal Official Store\",\"rating\":\"4.8\",\"reviews\":166},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=560\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=561\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=562\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"1668 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Tefal\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"1668 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"72 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.4 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Tibi cogito admiratio reprehenderit animadverto. Quos praesentium cubo.\",\"advantages\":[\"substantia dedecor appositus\",\"comes apostolus corrigo cibo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Modesta\",\"date\":\"6 fevral 2024\",\"rating\":4,\"comment\":\"Curis contego ancilla arca suus turbo approbo antiquus clementia vitiosus.\",\"pros\":\"adinventitias cena deinde\",\"cons\":\"comitatus tondeo\"},{\"id\":10002,\"user\":\"Elinor\",\"date\":\"16 mart 2024\",\"rating\":3,\"comment\":\"Concido concido adimpleo.\",\"pros\":\"balbus ipsam agnitio\",\"cons\":\"Yo'q\"}]},{\"id\":57,\"nomi\":\"Bug'li dazmol Tefal UH-502\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Tefal\",\"rating\":3.4,\"reviewsCount\":9,\"ordersCount\":463,\"oldPrice\":7637000,\"newPrice\":5880000,\"discount\":23,\"tags\":[],\"colors\":[\"#FFFFFF\"],\"seller\":{\"name\":\"Tefal Official Store\",\"rating\":\"4.5\",\"reviews\":1166},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=570\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=571\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=572\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"1561 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Tefal\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"1561 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"64 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.4 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Catena vinco totus eum. Solum comptus tabella.\",\"advantages\":[\"deduco aedificium vociferor\",\"curiositas adsum speculum delicate\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Litzy\",\"date\":\"8 may 2024\",\"rating\":3,\"comment\":\"Vox tempora adfectus ultra carcer.\",\"pros\":\"sufficio volo nostrum\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Pat\",\"date\":\"12 mart 2024\",\"rating\":3,\"comment\":\"Coniuratio adversus venio custodia tremo demoror ambitus bellum.\",\"pros\":\"vulgaris cupio dolorem\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Alverta\",\"date\":\"3 mart 2024\",\"rating\":3,\"comment\":\"Non utroque ratione tutamen eligendi tolero temperantia triumphus cernuus.\",\"pros\":\"comparo atque verus\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Kendra\",\"date\":\"7 fevral 2024\",\"rating\":3,\"comment\":\"Vereor deinde capto ducimus.\",\"pros\":\"cervus taceo ullam\",\"cons\":\"a sperno\"},{\"id\":10005,\"user\":\"Norbert\",\"date\":\"25 mart 2024\",\"rating\":3,\"comment\":\"Volva vero volubilis demergo alo beatus civitas culpo.\",\"pros\":\"delectatio sonitus vulpes\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Grady\",\"date\":\"13 fevral 2024\",\"rating\":4,\"comment\":\"Derideo vulariter compono ait absens illo tamen verumtamen sublime.\",\"pros\":\"agnitio sollers varius\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Anika\",\"date\":\"26 avgust 2024\",\"rating\":5,\"comment\":\"Capillus illum avaritia compono stips at vestrum tergum.\",\"pros\":\"absque audeo vox\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Brennan\",\"date\":\"19 noyabr 2024\",\"rating\":3,\"comment\":\"Aggredior strues suadeo stella constans aequus.\",\"pros\":\"addo sollers caritas\",\"cons\":\"cui capillus\"},{\"id\":10009,\"user\":\"Federico\",\"date\":\"25 may 2024\",\"rating\":4,\"comment\":\"Amoveo tenax adflicto coruscus vulgaris adfero defaeco.\",\"pros\":\"apparatus bellum apparatus\",\"cons\":\"Yo'q\"}]},{\"id\":58,\"nomi\":\"Konditsioner Gree KL-209\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Konditsionerlar\",\"brand\":\"Gree\",\"rating\":3.5,\"reviewsCount\":2,\"ordersCount\":812,\"oldPrice\":3495000,\"newPrice\":2097000,\"discount\":40,\"tags\":[],\"colors\":[\"#808080\"],\"seller\":{\"name\":\"Gree Official Store\",\"rating\":\"4.6\",\"reviews\":1307},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=580\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=581\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=582\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=583\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"26 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Gree\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"26 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A+\"}]}],\"description\":\"Yozda salqinlik, qishda issiqlik ulashuvchi zamonaviy konditsioner. Elektr energiyasini tejaydi. Color vita recusandae vix qui culpa delectus tergeo verus avarus. Suus vindico commodi compono quia derelinquo demitto deprecator cupiditate.\",\"advantages\":[\"confero harum thalassinus\",\"certus peior aequitas constans\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Lucie\",\"date\":\"2 oktyabr 2024\",\"rating\":4,\"comment\":\"Vulnus tenax corpus nesciunt confido convoco cervus attonbitus antiquus.\",\"pros\":\"vere eaque sto\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Pattie\",\"date\":\"10 avgust 2024\",\"rating\":3,\"comment\":\"Arbitro adfectus aliqua suffoco verbera conculco vesica adfero tabernus.\",\"pros\":\"architecto arx capillus\",\"cons\":\"Yo'q\"}]},{\"id\":59,\"nomi\":\"Mikser Braun BD-860\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Braun\",\"rating\":4.2,\"reviewsCount\":9,\"ordersCount\":554,\"oldPrice\":7009000,\"newPrice\":4696000,\"discount\":33,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#000000\"],\"seller\":{\"name\":\"Braun Official Store\",\"rating\":\"5.0\",\"reviews\":1963},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=590\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=591\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=592\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"952 W\"},{\"key\":\"Hajm\",\"value\":\"2.8 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Metal\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Braun\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"952 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"3\"},{\"label\":\"Idish hajmi\",\"value\":\"2.8 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Demonstro stipes delectus tremo audacia advoco succedo tantum vulpes. Quisquam aptus commodi curia stipes cervus tego creptio defero.\",\"advantages\":[\"tardus vulgus aequus\",\"facere viridis claustrum cetera\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Angelica\",\"date\":\"1 aprel 2024\",\"rating\":5,\"comment\":\"Benigne desolo spargo aetas casso repellendus audacia atqui cunae.\",\"pros\":\"bardus soleo aliquid\",\"cons\":\"infit arx\"},{\"id\":10002,\"user\":\"Emory\",\"date\":\"25 noyabr 2024\",\"rating\":3,\"comment\":\"Aequus cumque aut clam agnitio calamitas calamitas arbitro.\",\"pros\":\"aurum stabilis cornu\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Arlene\",\"date\":\"18 iyun 2024\",\"rating\":5,\"comment\":\"Sunt termes utrum combibo vitium compono nemo titulus temperantia.\",\"pros\":\"curriculum caute crapula\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"William\",\"date\":\"14 may 2024\",\"rating\":5,\"comment\":\"Vinitor sponte sperno cernuus adstringo thymbra.\",\"pros\":\"curvo virga validus\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Tristian\",\"date\":\"10 may 2024\",\"rating\":5,\"comment\":\"Cursim bis comprehendo asporto auctus cribro.\",\"pros\":\"suffoco aestas thema\",\"cons\":\"thema ad\"},{\"id\":10006,\"user\":\"Dillan\",\"date\":\"19 iyun 2024\",\"rating\":3,\"comment\":\"Aegrotatio magnam crastinus adipisci anser viriliter despecto concedo adflicto.\",\"pros\":\"tergum via tandem\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Allen\",\"date\":\"19 dekabr 2024\",\"rating\":4,\"comment\":\"Quas commodo subiungo adamo.\",\"pros\":\"caelestis spoliatio strenuus\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Chauncey\",\"date\":\"8 aprel 2024\",\"rating\":4,\"comment\":\"Deserunt quidem sursum alveus.\",\"pros\":\"appositus coniecto aeneus\",\"cons\":\"Yo'q\"},{\"id\":10009,\"user\":\"Greg\",\"date\":\"2 noyabr 2024\",\"rating\":4,\"comment\":\"Officiis adipisci cohors ubi auctor depulso reprehenderit.\",\"pros\":\"confero cupiditas convoco\",\"cons\":\"Yo'q\"}]},{\"id\":60,\"nomi\":\"Moyli radiator Electrolux LK-581\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Electrolux\",\"rating\":4.7,\"reviewsCount\":0,\"ordersCount\":970,\"oldPrice\":1883000,\"newPrice\":1205000,\"discount\":36,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\"],\"seller\":{\"name\":\"Electrolux Official Store\",\"rating\":\"4.8\",\"reviews\":969},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=600\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=601\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=602\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/electric fan?lock=603\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"30 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Electrolux\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"30 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A++\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Deludo ultio sed. Basium universe amitto versus cur decimus comedo.\",\"advantages\":[\"umquam tamisium sublime\",\"aestivus vinco aequitas sequi\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":61,\"nomi\":\"Changyutgich Dyson DH-204\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Changyutgichlar\",\"brand\":\"Dyson\",\"rating\":3.8,\"reviewsCount\":8,\"ordersCount\":695,\"oldPrice\":5685000,\"newPrice\":3922000,\"discount\":31,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FFFFFF\",\"#808080\"],\"seller\":{\"name\":\"Dyson Official Store\",\"rating\":\"4.7\",\"reviews\":541},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=610\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=611\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=612\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=613\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"4765 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Dyson\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"4765 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"72 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.9 L\"}]}],\"description\":\"Uyingiz tozaligini saqlash uchun kuchli va qulay changyutgich. Changni mukammal tortib oladi. Voluptas aperiam aggero desipio abeo sint dapifer solutio quibusdam tendo. Voluptates veritatis civitas volup.\",\"advantages\":[\"constans pax vulgo\",\"cohaero constans taedium uredo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Dangelo\",\"date\":\"27 iyul 2024\",\"rating\":5,\"comment\":\"Truculenter crapula vilis uberrime coniecto aegrus beatae centum suasoria.\",\"pros\":\"debeo decumbo ver\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Margarette\",\"date\":\"19 oktyabr 2024\",\"rating\":3,\"comment\":\"Carmen iure quo comis talio facere voluptatem urbanus xiphias.\",\"pros\":\"credo adsidue vinum\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Luis\",\"date\":\"2 iyul 2024\",\"rating\":3,\"comment\":\"Tenax cultura venustas adicio numquam.\",\"pros\":\"autus voluptatibus anser\",\"cons\":\"amiculum suscipit\"},{\"id\":10004,\"user\":\"Edyth\",\"date\":\"2 yanvar 2024\",\"rating\":4,\"comment\":\"Audentia utilis curto acer voluptas cetera capitulus conspergo vero.\",\"pros\":\"sunt conservo curis\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Donato\",\"date\":\"11 avgust 2024\",\"rating\":4,\"comment\":\"Delicate vulariter adnuo utrimque spectaculum teres vivo ulterius.\",\"pros\":\"cunae trucido vinculum\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Axel\",\"date\":\"27 iyul 2024\",\"rating\":4,\"comment\":\"Adeptio decerno templum causa certus terror caute unde testimonium.\",\"pros\":\"amoveo suadeo arx\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Richmond\",\"date\":\"28 noyabr 2024\",\"rating\":4,\"comment\":\"Angelus somnus verbera ex adulescens coerceo perspiciatis sequi aiunt.\",\"pros\":\"vulnero nulla hic\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Aditya\",\"date\":\"6 may 2024\",\"rating\":3,\"comment\":\"Venio minus vester considero vae delego.\",\"pros\":\"cura id ab\",\"cons\":\"Yo'q\"}]},{\"id\":62,\"nomi\":\"Soqol olgich Panasonic IT-327\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Panasonic\",\"rating\":3.9,\"reviewsCount\":8,\"ordersCount\":43,\"oldPrice\":5348000,\"newPrice\":4439000,\"discount\":17,\"tags\":[],\"colors\":[\"#FF0000\"],\"seller\":{\"name\":\"Panasonic Official Store\",\"rating\":\"4.7\",\"reviews\":161},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=620\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=621\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=622\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Akumulyator\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"5\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Panasonic\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Vulariter vix despecto. Vix defetiscor sufficio taedium caelum villa.\",\"advantages\":[\"deduco enim delibero\",\"defetiscor sollicito verbera angulus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Treva\",\"date\":\"10 iyun 2024\",\"rating\":4,\"comment\":\"Deleo deleo ademptio viriliter calculus curia vestrum conculco animi.\",\"pros\":\"vigor aurum venustas\",\"cons\":\"convoco cogo\"},{\"id\":10002,\"user\":\"Sydni\",\"date\":\"13 fevral 2024\",\"rating\":3,\"comment\":\"Demulceo solvo cinis volva sustineo curto.\",\"pros\":\"vomer adhuc absorbeo\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Demarco\",\"date\":\"2 iyul 2024\",\"rating\":3,\"comment\":\"Canis campana cruentus una cunae confido canis adsidue commemoro.\",\"pros\":\"celebrer sufficio laudantium\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Lazaro\",\"date\":\"19 sentyabr 2024\",\"rating\":3,\"comment\":\"Sulum centum accusator vulgus degero subiungo crastinus tersus certus.\",\"pros\":\"urbanus adipisci sequi\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Antonietta\",\"date\":\"8 iyun 2024\",\"rating\":5,\"comment\":\"Velit exercitationem adicio thorax angustus angustus vitiosus voluptas.\",\"pros\":\"absens asperiores trepide\",\"cons\":\"expedita sto\"},{\"id\":10006,\"user\":\"Dewitt\",\"date\":\"2 aprel 2024\",\"rating\":5,\"comment\":\"Derelinquo arto admiratio conspergo.\",\"pros\":\"baiulus cupiditas adstringo\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Antonio\",\"date\":\"16 avgust 2024\",\"rating\":3,\"comment\":\"Trepide aspernatur sunt corpus eveniet tenuis vomica crastinus patior.\",\"pros\":\"sordeo amoveo tum\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Grayson\",\"date\":\"19 may 2024\",\"rating\":5,\"comment\":\"Denique stabilis tenus sortitus alius aduro sulum aggero.\",\"pros\":\"sufficio sulum video\",\"cons\":\"Yo'q\"}]},{\"id\":63,\"nomi\":\"Aqlli rozetka Yeelight LU-772\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Yeelight\",\"rating\":3,\"reviewsCount\":2,\"ordersCount\":992,\"oldPrice\":5679000,\"newPrice\":4714000,\"discount\":17,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#000000\",\"#FFFFFF\"],\"seller\":{\"name\":\"Yeelight Official Store\",\"rating\":\"4.5\",\"reviews\":1524},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=630\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=631\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Yeelight\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Eaque virtus velum peccatus alienus tenus tactus abscido speculum. Decerno socius speciosus creber caute voluptatem.\",\"advantages\":[\"venustas aestas pecto\",\"apud color surculus convoco\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Antonietta\",\"date\":\"28 iyun 2024\",\"rating\":3,\"comment\":\"Vulgivagus benevolentia libero arguo deputo uter cunabula beatae vulnero vapulus.\",\"pros\":\"sono corrumpo tabesco\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Camden\",\"date\":\"10 avgust 2024\",\"rating\":3,\"comment\":\"Assentator animadverto desparatus delinquo conspergo suspendo comedo vestrum conventus valens.\",\"pros\":\"necessitatibus conatus uter\",\"cons\":\"Yo'q\"}]},{\"id\":64,\"nomi\":\"Elektr choynak Xiaomi SB-306\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Choynaklar\",\"brand\":\"Xiaomi\",\"rating\":3.7,\"reviewsCount\":7,\"ordersCount\":850,\"oldPrice\":7115000,\"newPrice\":4340000,\"discount\":39,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#FFFFFF\",\"#000000\"],\"seller\":{\"name\":\"Xiaomi Official Store\",\"rating\":\"4.8\",\"reviews\":281},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/kettle?lock=640\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/kettle?lock=641\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/kettle?lock=642\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/kettle?lock=643\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"1296 W\"},{\"key\":\"Hajm\",\"value\":\"3.9 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Metal\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Xiaomi\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"1296 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"10\"},{\"label\":\"Idish hajmi\",\"value\":\"3.9 L\"}]}],\"description\":\"Suvni tez qaynatish uchun zamonaviy elektr choynak. Zanglamaydigan po'latdan yasalgan korpus. Derelinquo sum universe crepusculum. Soluta adsuesco aliqua patior adfero supellex recusandae infit tendo.\",\"advantages\":[\"terror turba quo\",\"commemoro defero vivo ipsam\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Bianka\",\"date\":\"2 iyun 2024\",\"rating\":3,\"comment\":\"Conservo depereo sollers tepesco conor tego contabesco vehemens nisi.\",\"pros\":\"clam sto desino\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Eliane\",\"date\":\"25 iyul 2024\",\"rating\":4,\"comment\":\"Adimpleo aspicio uterque conspergo vomito credo terminatio suffragium campana vaco.\",\"pros\":\"tabula cupiditas dens\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Hoyt\",\"date\":\"11 dekabr 2024\",\"rating\":4,\"comment\":\"Censura amaritudo advenio adsum certus velociter.\",\"pros\":\"solus brevis pauci\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Josiane\",\"date\":\"19 iyul 2024\",\"rating\":3,\"comment\":\"Adeo cerno accedo vulgus ascit antiquus.\",\"pros\":\"vulnero convoco ciminatio\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Matilde\",\"date\":\"25 aprel 2024\",\"rating\":5,\"comment\":\"Canonicus ipsum vitium asper vehemens sopor.\",\"pros\":\"ter laudantium tumultus\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Claudie\",\"date\":\"5 mart 2024\",\"rating\":3,\"comment\":\"Censura alii aestus universe vae arbor dedico ultra attero.\",\"pros\":\"animus utrimque odio\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Maryam\",\"date\":\"28 yanvar 2024\",\"rating\":4,\"comment\":\"Alienus tenax vallum aureus vester totus.\",\"pros\":\"strues absens conicio\",\"cons\":\"Yo'q\"}]},{\"id\":65,\"nomi\":\"Elektr ustara Philips RJ-851\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Philips\",\"rating\":3.4,\"reviewsCount\":9,\"ordersCount\":353,\"oldPrice\":5924000,\"newPrice\":4324000,\"discount\":27,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#FFFFFF\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.8\",\"reviews\":263},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=650\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=651\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=652\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Akumulyator\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"5\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Pecto dedico tempore cibo corroboro. Sopor carpo atrox theologus.\",\"advantages\":[\"correptius perferendis tutis\",\"agnitio casus placeat praesentium\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Joelle\",\"date\":\"21 iyul 2024\",\"rating\":3,\"comment\":\"Barba crudelis timidus soleo.\",\"pros\":\"vestigium ex amoveo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Shayna\",\"date\":\"11 fevral 2024\",\"rating\":3,\"comment\":\"Degenero copiose eos clam patior sto.\",\"pros\":\"pax vesica totidem\",\"cons\":\"aegrotatio sursum\"},{\"id\":10003,\"user\":\"Rosamond\",\"date\":\"25 oktyabr 2024\",\"rating\":3,\"comment\":\"Tot adeo torrens statua clibanus convoco cursus vix.\",\"pros\":\"adficio utrimque urbs\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Trisha\",\"date\":\"1 avgust 2024\",\"rating\":4,\"comment\":\"Tendo ubi optio delectatio aetas tersus solus caelum quas abutor.\",\"pros\":\"acer et casus\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Cullen\",\"date\":\"18 aprel 2024\",\"rating\":3,\"comment\":\"Adimpleo crebro doloribus ago adulescens canonicus culpo.\",\"pros\":\"sed soleo voluntarius\",\"cons\":\"verbera corroboro\"},{\"id\":10006,\"user\":\"Burley\",\"date\":\"28 may 2024\",\"rating\":5,\"comment\":\"Creptio ventito clam defluo tui derideo cras.\",\"pros\":\"summa barba blandior\",\"cons\":\"ea deleo\"},{\"id\":10007,\"user\":\"Vito\",\"date\":\"9 yanvar 2024\",\"rating\":3,\"comment\":\"Basium patria demitto repudiandae.\",\"pros\":\"comprehendo conduco cerno\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Manley\",\"date\":\"20 sentyabr 2024\",\"rating\":3,\"comment\":\"Curvo timor amoveo attollo cicuta cohaero victus absens tredecim cerno.\",\"pros\":\"conturbo molestiae tamquam\",\"cons\":\"Yo'q\"},{\"id\":10009,\"user\":\"Lydia\",\"date\":\"19 iyul 2024\",\"rating\":4,\"comment\":\"Quidem utrum patruus cavus casso tamisium.\",\"pros\":\"cerno laudantium deorsum\",\"cons\":\"Yo'q\"}]},{\"id\":66,\"nomi\":\"Oshxona kombayni Artel CJ-874\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Artel\",\"rating\":4.3,\"reviewsCount\":0,\"ordersCount\":374,\"oldPrice\":1403000,\"newPrice\":1206000,\"discount\":14,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#FF0000\"],\"seller\":{\"name\":\"Artel Official Store\",\"rating\":\"4.6\",\"reviews\":294},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/blender?lock=660\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/blender?lock=661\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/blender?lock=662\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"1392 W\"},{\"key\":\"Hajm\",\"value\":\"3.6 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Plastik\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Artel\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"1392 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"10\"},{\"label\":\"Idish hajmi\",\"value\":\"3.6 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Creo caterva abduco vulticulus thalassinus somnus. Cunabula venia tenuis clementia defetiscor.\",\"advantages\":[\"volva aestivus comis\",\"amoveo absconditus repellat avarus\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":67,\"nomi\":\"Termopot Tefal II-572\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Choynaklar\",\"brand\":\"Tefal\",\"rating\":4,\"reviewsCount\":5,\"ordersCount\":514,\"oldPrice\":1522000,\"newPrice\":1446000,\"discount\":5,\"tags\":[],\"colors\":[\"#808080\",\"#FFFFFF\",\"#FF0000\"],\"seller\":{\"name\":\"Tefal Official Store\",\"rating\":\"4.6\",\"reviews\":1871},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/teapot?lock=670\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/teapot?lock=671\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/teapot?lock=672\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"539 W\"},{\"key\":\"Hajm\",\"value\":\"4.1 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Plastik\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Tefal\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"539 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"5\"},{\"label\":\"Idish hajmi\",\"value\":\"4.1 L\"}]}],\"description\":\"Suvni tez qaynatish uchun zamonaviy elektr choynak. Zanglamaydigan po'latdan yasalgan korpus. Modi tantillus fugit. Socius derelinquo aliqua similique suppellex.\",\"advantages\":[\"toties explicabo sint\",\"comedo maiores usque laudantium\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Camden\",\"date\":\"10 sentyabr 2024\",\"rating\":4,\"comment\":\"Ex provident amplexus acies arto peccatus.\",\"pros\":\"cicuta cado cibo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Unique\",\"date\":\"10 oktyabr 2024\",\"rating\":4,\"comment\":\"Tergo defaeco comminor.\",\"pros\":\"curia bestia sui\",\"cons\":\"excepturi clarus\"},{\"id\":10003,\"user\":\"Alva\",\"date\":\"25 iyul 2024\",\"rating\":5,\"comment\":\"Porro modi officia subvenio averto adiuvo.\",\"pros\":\"audax antepono decimus\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Teresa\",\"date\":\"7 oktyabr 2024\",\"rating\":4,\"comment\":\"Volaticus desipio coruscus vergo expedita vestrum stillicidium.\",\"pros\":\"comburo creber advenio\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Edythe\",\"date\":\"12 sentyabr 2024\",\"rating\":3,\"comment\":\"Teres causa usitas vicinus patria ciminatio.\",\"pros\":\"baiulus ventosus quidem\",\"cons\":\"Yo'q\"}]},{\"id\":68,\"nomi\":\"Ovozli yordamchi Yandex GI-828\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"Yandex\",\"rating\":4.6,\"reviewsCount\":5,\"ordersCount\":430,\"oldPrice\":1868000,\"newPrice\":1420000,\"discount\":24,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#808080\"],\"seller\":{\"name\":\"Yandex Official Store\",\"rating\":\"4.8\",\"reviews\":503},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=680\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=681\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Yandex\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Usus adinventitias tenus amita varietas vomer adimpleo colo delibero. Via colo voluntarius argentum nemo amoveo tamquam praesentium.\",\"advantages\":[\"demonstro deprimo amoveo\",\"calcar caries territo clibanus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Michaela\",\"date\":\"1 yanvar 2024\",\"rating\":4,\"comment\":\"Talis vindico suggero enim.\",\"pros\":\"adsum civis coepi\",\"cons\":\"at amor\"},{\"id\":10002,\"user\":\"Luis\",\"date\":\"12 iyul 2024\",\"rating\":4,\"comment\":\"Triumphus colligo vicissitudo sed vindico tantum.\",\"pros\":\"audeo numquam ascisco\",\"cons\":\"id campana\"},{\"id\":10003,\"user\":\"Zena\",\"date\":\"7 aprel 2024\",\"rating\":5,\"comment\":\"Vivo ara tum.\",\"pros\":\"color stabilis careo\",\"cons\":\"spoliatio ambitus\"},{\"id\":10004,\"user\":\"Florine\",\"date\":\"8 sentyabr 2024\",\"rating\":5,\"comment\":\"Absorbeo decipio sublime blanditiis astrum tempore.\",\"pros\":\"arguo cur denego\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Lexie\",\"date\":\"26 iyul 2024\",\"rating\":5,\"comment\":\"Tricesimus eius caries.\",\"pros\":\"corpus vacuus tantum\",\"cons\":\"Yo'q\"}]},{\"id\":69,\"nomi\":\"Vertikal dazmol Philips XI-518\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Philips\",\"rating\":4.1,\"reviewsCount\":9,\"ordersCount\":528,\"oldPrice\":7515000,\"newPrice\":6313000,\"discount\":16,\"tags\":[],\"colors\":[\"#1E3A8A\",\"#000000\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"5.0\",\"reviews\":651},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=690\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=691\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=692\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"4329 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"4329 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"73 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.4 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Excepturi amplitudo cras abutor theca theca magnam accedo custodia ad. Tactus sumptus vilitas aspernatur dolores curatio.\",\"advantages\":[\"utroque officia concedo\",\"dolor theologus volutabrum textus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Maida\",\"date\":\"27 dekabr 2024\",\"rating\":5,\"comment\":\"Ustulo fuga volo.\",\"pros\":\"carmen impedit uxor\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Stan\",\"date\":\"16 fevral 2024\",\"rating\":3,\"comment\":\"Tyrannus toties delicate bellum synagoga tutamen tempora.\",\"pros\":\"solio benevolentia deleo\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Ettie\",\"date\":\"24 sentyabr 2024\",\"rating\":3,\"comment\":\"Cenaculum condico labore constans illo deprimo crudelis tredecim vinum.\",\"pros\":\"apud benevolentia aegrus\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Vena\",\"date\":\"16 iyul 2024\",\"rating\":3,\"comment\":\"Quia vitae canto claudeo aperte coniuratio.\",\"pros\":\"tergo delectatio tum\",\"cons\":\"velit arto\"},{\"id\":10005,\"user\":\"London\",\"date\":\"10 avgust 2024\",\"rating\":5,\"comment\":\"Libero crustulum conturbo verumtamen territo.\",\"pros\":\"verus cervus abscido\",\"cons\":\"rerum alienus\"},{\"id\":10006,\"user\":\"Murphy\",\"date\":\"6 dekabr 2024\",\"rating\":5,\"comment\":\"Uterque cunabula minus temporibus congregatio amitto.\",\"pros\":\"auctus sumptus urbs\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Cecile\",\"date\":\"9 iyul 2024\",\"rating\":3,\"comment\":\"Incidunt cito basium.\",\"pros\":\"delibero unde synagoga\",\"cons\":\"virgo ultio\"},{\"id\":10008,\"user\":\"Camren\",\"date\":\"16 iyun 2024\",\"rating\":5,\"comment\":\"At corona venio.\",\"pros\":\"aestas creta sophismata\",\"cons\":\"Yo'q\"},{\"id\":10009,\"user\":\"Roslyn\",\"date\":\"8 mart 2024\",\"rating\":5,\"comment\":\"Agnitio atavus tendo agnitio charisma accusamus videlicet sum vito.\",\"pros\":\"creator abstergo utrimque\",\"cons\":\"asperiores acceptus\"}]},{\"id\":70,\"nomi\":\"Elektr ustara Philips DJ-870\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Philips\",\"rating\":3.9,\"reviewsCount\":8,\"ordersCount\":201,\"oldPrice\":1040000,\"newPrice\":739000,\"discount\":29,\"tags\":[],\"colors\":[\"#FFFFFF\",\"#FF0000\",\"#1E3A8A\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.6\",\"reviews\":1700},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=700\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=701\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=702\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=703\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"2\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Tametsi animadverto pariatur degusto caste. Cui debeo confido amet supplanto armarium custodia ullus callide dapifer.\",\"advantages\":[\"centum aestivus minima\",\"dolores officiis quo accusator\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Lawson\",\"date\":\"25 iyul 2024\",\"rating\":3,\"comment\":\"Cribro virga argumentum conqueror officiis suus vomito ullam titulus cena.\",\"pros\":\"cogo vis cometes\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Jacynthe\",\"date\":\"12 sentyabr 2024\",\"rating\":5,\"comment\":\"Inflammatio adstringo cresco confugo fuga tot cras asper ocer.\",\"pros\":\"cras vulgaris beatus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Rozella\",\"date\":\"20 iyul 2024\",\"rating\":5,\"comment\":\"Vicissitudo ustilo denuncio tutis.\",\"pros\":\"animus amicitia asperiores\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Emery\",\"date\":\"20 oktyabr 2024\",\"rating\":4,\"comment\":\"Teneo traho terminatio vinum creber sperno.\",\"pros\":\"abundans admiratio creptio\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Marlen\",\"date\":\"16 iyun 2024\",\"rating\":4,\"comment\":\"Amita arbitro textilis solitudo aduro.\",\"pros\":\"validus vergo eos\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Vicky\",\"date\":\"18 iyun 2024\",\"rating\":3,\"comment\":\"Solio tempore dedico aperio architecto vicinus minima tremo defleo tactus.\",\"pros\":\"patruus aiunt sui\",\"cons\":\"colligo delego\"},{\"id\":10007,\"user\":\"Claire\",\"date\":\"16 oktyabr 2024\",\"rating\":4,\"comment\":\"Volo tertius contra vere arguo adamo supplanto.\",\"pros\":\"aegrus balbus dens\",\"cons\":\"arceo decens\"},{\"id\":10008,\"user\":\"William\",\"date\":\"8 dekabr 2024\",\"rating\":3,\"comment\":\"Deputo derelinquo credo rerum.\",\"pros\":\"corroboro absens callide\",\"cons\":\"Yo'q\"}]},{\"id\":71,\"nomi\":\"Split-tizim Artel PH-538\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Konditsionerlar\",\"brand\":\"Artel\",\"rating\":3.8,\"reviewsCount\":6,\"ordersCount\":743,\"oldPrice\":3673000,\"newPrice\":3122000,\"discount\":15,\"tags\":[],\"colors\":[\"#1E3A8A\",\"#FFFFFF\"],\"seller\":{\"name\":\"Artel Official Store\",\"rating\":\"4.8\",\"reviews\":1303},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=710\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=711\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=712\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=713\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"25 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Artel\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"25 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A\"}]}],\"description\":\"Yozda salqinlik, qishda issiqlik ulashuvchi zamonaviy konditsioner. Elektr energiyasini tejaydi. Corpus abbas derideo delibero. Voco avarus demergo creator.\",\"advantages\":[\"adfero tracto vir\",\"somniculosus reiciendis volubilis suppono\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Kory\",\"date\":\"16 avgust 2024\",\"rating\":3,\"comment\":\"Eveniet cras demens cohibeo tabernus reprehenderit.\",\"pros\":\"volaticus exercitationem suggero\",\"cons\":\"campana decens\"},{\"id\":10002,\"user\":\"Carmel\",\"date\":\"22 yanvar 2024\",\"rating\":4,\"comment\":\"Vigilo decipio concedo abscido assumenda creptio.\",\"pros\":\"umquam carcer veritas\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Nelle\",\"date\":\"8 noyabr 2024\",\"rating\":3,\"comment\":\"Vobis capio abundans clam addo vis ea quasi.\",\"pros\":\"ante adamo cohibeo\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Alden\",\"date\":\"18 iyul 2024\",\"rating\":3,\"comment\":\"Benevolentia aiunt vomito cohibeo depopulo adipisci suffragium venustas adiuvo videlicet.\",\"pros\":\"adnuo eos commodi\",\"cons\":\"audio titulus\"},{\"id\":10005,\"user\":\"Meredith\",\"date\":\"10 may 2024\",\"rating\":5,\"comment\":\"Vallum aestas decipio natus peior corona pecco.\",\"pros\":\"asperiores thymbra accusantium\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Darren\",\"date\":\"7 fevral 2024\",\"rating\":5,\"comment\":\"Thesis appono umquam cribro cognatus aranea pecco animadverto pel verecundia.\",\"pros\":\"soluta valetudo doloremque\",\"cons\":\"Yo'q\"}]},{\"id\":72,\"nomi\":\"Aqlli rozetka Philips Hue YS-567\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Philips Hue\",\"rating\":4,\"reviewsCount\":1,\"ordersCount\":544,\"oldPrice\":7455000,\"newPrice\":6039000,\"discount\":19,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FFFFFF\",\"#1E3A8A\",\"#000000\"],\"seller\":{\"name\":\"Philips Hue Official Store\",\"rating\":\"4.9\",\"reviews\":1328},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=720\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=721\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=722\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips Hue\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Territo supra cupiditate arca. Caelum capitulus strues ager patior.\",\"advantages\":[\"vester alii vereor\",\"amplus utrimque summisse cohibeo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Fiona\",\"date\":\"7 iyul 2024\",\"rating\":4,\"comment\":\"Contego desidero debilito animi minima textus ceno.\",\"pros\":\"commemoro veniam teneo\",\"cons\":\"Yo'q\"}]},{\"id\":73,\"nomi\":\"Elektr ustara Braun OJ-106\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Braun\",\"rating\":3.5,\"reviewsCount\":2,\"ordersCount\":727,\"oldPrice\":3951000,\"newPrice\":3398000,\"discount\":14,\"tags\":[],\"colors\":[\"#FF0000\",\"#1E3A8A\",\"#000000\"],\"seller\":{\"name\":\"Braun Official Store\",\"rating\":\"4.9\",\"reviews\":1889},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=730\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/shaver?lock=731\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"5\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Braun\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Voluptatum antea apparatus depereo brevis sapiente. Cribro trans cerno repudiandae tunc vindico cunae coruscus dedecor adulatio.\",\"advantages\":[\"spargo verus tollo\",\"alter decimus crur usitas\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Kiana\",\"date\":\"12 dekabr 2024\",\"rating\":4,\"comment\":\"Usitas aggero victoria deficio.\",\"pros\":\"viriliter tepesco commodo\",\"cons\":\"dolores error\"},{\"id\":10002,\"user\":\"Mittie\",\"date\":\"25 noyabr 2024\",\"rating\":3,\"comment\":\"Compello coerceo ducimus barba deporto temporibus absum.\",\"pros\":\"tremo tot modi\",\"cons\":\"Yo'q\"}]},{\"id\":74,\"nomi\":\"Soch tekislagich Dyson GR-349\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Soch parvarishi\",\"brand\":\"Dyson\",\"rating\":3.1,\"reviewsCount\":7,\"ordersCount\":26,\"oldPrice\":1854000,\"newPrice\":1112000,\"discount\":40,\"tags\":[],\"colors\":[\"#808080\"],\"seller\":{\"name\":\"Dyson Official Store\",\"rating\":\"4.8\",\"reviews\":1803},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=740\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=741\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Akumulyator\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"3\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Dyson\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]}],\"description\":\"Sochlaringizni quritish va shakl berish uchun professional vosita. Soch tolalarini himoya qiladi. Vester patrocinor umquam temptatio aegrotatio aqua vulticulus. Vergo nihil dapifer non desipio accendo vergo maiores.\",\"advantages\":[\"dedico clarus vomito\",\"aeternus desolo modi pauper\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Stacy\",\"date\":\"15 sentyabr 2024\",\"rating\":3,\"comment\":\"Apparatus at audentia varietas.\",\"pros\":\"arbustum tenax abutor\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Mittie\",\"date\":\"22 mart 2024\",\"rating\":3,\"comment\":\"Ultio corrigo defetiscor creo decor verto condico abundans.\",\"pros\":\"super ver tui\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Naomie\",\"date\":\"10 oktyabr 2024\",\"rating\":3,\"comment\":\"Asporto capio autem angustus triumphus rerum defetiscor.\",\"pros\":\"cibo comes tamdiu\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Kaleb\",\"date\":\"5 noyabr 2024\",\"rating\":3,\"comment\":\"Consectetur coadunatio curtus porro sortitus quod aliqua.\",\"pros\":\"thermae repellendus doloribus\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Sedrick\",\"date\":\"2 oktyabr 2024\",\"rating\":4,\"comment\":\"Aro ex tunc chirographum victoria.\",\"pros\":\"censura cervus vacuus\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Dolores\",\"date\":\"28 oktyabr 2024\",\"rating\":3,\"comment\":\"Coerceo anser coniecto itaque copia.\",\"pros\":\"curso demens asporto\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Erwin\",\"date\":\"6 sentyabr 2024\",\"rating\":3,\"comment\":\"Pauci amaritudo tardus arx adeo vetus compono.\",\"pros\":\"ventus terra summa\",\"cons\":\"utor confero\"}]},{\"id\":75,\"nomi\":\"Aqlli kolonka Google MQ-487\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"Google\",\"rating\":4,\"reviewsCount\":10,\"ordersCount\":270,\"oldPrice\":7703000,\"newPrice\":6548000,\"discount\":15,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FF0000\",\"#FFFFFF\"],\"seller\":{\"name\":\"Google Official Store\",\"rating\":\"5.0\",\"reviews\":1854},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=750\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=751\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Google\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Alii talio comis thymum volutabrum argentum sol. Dens acidus caelestis vulariter aegrus adeo defetiscor atrox.\",\"advantages\":[\"vulgaris verus acer\",\"speciosus cunctatio blandior quo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Colby\",\"date\":\"1 iyun 2024\",\"rating\":3,\"comment\":\"Blandior assentator adhuc tonsor comis summopere aureus.\",\"pros\":\"sumo bellicus sufficio\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Darron\",\"date\":\"4 iyun 2024\",\"rating\":4,\"comment\":\"Explicabo vita thymbra baiulus absorbeo.\",\"pros\":\"textilis assentator vicinus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Houston\",\"date\":\"17 may 2024\",\"rating\":4,\"comment\":\"Administratio celo commemoro texo tremo fugit contigo.\",\"pros\":\"subito attonbitus alo\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Neva\",\"date\":\"27 yanvar 2024\",\"rating\":5,\"comment\":\"Cito tamdiu tonsor thesaurus pariatur curo ratione explicabo aegre.\",\"pros\":\"cumque pectus victus\",\"cons\":\"sumo virtus\"},{\"id\":10005,\"user\":\"Merritt\",\"date\":\"7 iyun 2024\",\"rating\":4,\"comment\":\"Cura delego quis ademptio clibanus appono tenuis tricesimus cicuta.\",\"pros\":\"porro stillicidium rerum\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Hilma\",\"date\":\"1 may 2024\",\"rating\":5,\"comment\":\"Calculus nostrum alii.\",\"pros\":\"vergo aetas spiritus\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Rigoberto\",\"date\":\"28 yanvar 2024\",\"rating\":3,\"comment\":\"Cenaculum conduco cimentarius decimus inventore cotidie damnatio cohibeo vester magni.\",\"pros\":\"vester capio cena\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Devyn\",\"date\":\"27 noyabr 2024\",\"rating\":3,\"comment\":\"Thermae depromo aequus thermae vulgaris tamen.\",\"pros\":\"speculum cuppedia comparo\",\"cons\":\"certus solio\"},{\"id\":10009,\"user\":\"Melba\",\"date\":\"2 mart 2024\",\"rating\":4,\"comment\":\"Aspicio arcus ustilo tersus tempus autem vis accendo tamdiu.\",\"pros\":\"depulso agnosco caritas\",\"cons\":\"curso ipsam\"},{\"id\":10010,\"user\":\"Michael\",\"date\":\"15 avgust 2024\",\"rating\":5,\"comment\":\"Attollo cui usus defessus tam at cervus.\",\"pros\":\"colo dolorem cetera\",\"cons\":\"Yo'q\"}]},{\"id\":76,\"nomi\":\"Aqlli kolonka Yandex HT-899\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"Yandex\",\"rating\":4.3,\"reviewsCount\":8,\"ordersCount\":986,\"oldPrice\":7999000,\"newPrice\":5679000,\"discount\":29,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#808080\",\"#FF0000\"],\"seller\":{\"name\":\"Yandex Official Store\",\"rating\":\"5.0\",\"reviews\":1742},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=760\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/homepod?lock=761\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Yandex\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Vicinus aequitas animi civis tunc cito strenuus omnis antepono. Aperio spiritus vindico.\",\"advantages\":[\"voluptatem error et\",\"bellicus delibero corrupti vulgus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Karina\",\"date\":\"4 aprel 2024\",\"rating\":5,\"comment\":\"Subiungo talis anser necessitatibus.\",\"pros\":\"vomito stips a\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Mohammed\",\"date\":\"6 may 2024\",\"rating\":5,\"comment\":\"Cruentus utroque sopor thymbra quos laborum appello conscendo congregatio.\",\"pros\":\"defero arbitro accendo\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Danial\",\"date\":\"10 sentyabr 2024\",\"rating\":4,\"comment\":\"Cornu ratione amita.\",\"pros\":\"consectetur torqueo spiritus\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Pierre\",\"date\":\"21 mart 2024\",\"rating\":3,\"comment\":\"Vulnero videlicet vulgo auctor ancilla asporto clam.\",\"pros\":\"cuppedia provident vinco\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Jerome\",\"date\":\"25 dekabr 2024\",\"rating\":4,\"comment\":\"Adhaero argentum cerno vulnero aqua vinitor deporto.\",\"pros\":\"arcus placeat abduco\",\"cons\":\"acervus possimus\"},{\"id\":10006,\"user\":\"Helga\",\"date\":\"17 sentyabr 2024\",\"rating\":4,\"comment\":\"Cursus angustus comminor aequitas umbra subito adsidue caelestis.\",\"pros\":\"calamitas ambitus terebro\",\"cons\":\"caries tego\"},{\"id\":10007,\"user\":\"Hosea\",\"date\":\"5 sentyabr 2024\",\"rating\":5,\"comment\":\"Alius amplexus accusantium abundans pauper sonitus bibo uter.\",\"pros\":\"tepesco arx deduco\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Hilton\",\"date\":\"4 oktyabr 2024\",\"rating\":4,\"comment\":\"Angustus praesentium alioqui rerum vester alienus taedium theatrum.\",\"pros\":\"quaerat perferendis amet\",\"cons\":\"Yo'q\"}]},{\"id\":77,\"nomi\":\"Soqol olgich Panasonic XC-623\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Panasonic\",\"rating\":3.8,\"reviewsCount\":6,\"ordersCount\":893,\"oldPrice\":4356000,\"newPrice\":3877000,\"discount\":11,\"tags\":[],\"colors\":[\"#FFFFFF\",\"#808080\",\"#1E3A8A\"],\"seller\":{\"name\":\"Panasonic Official Store\",\"rating\":\"4.9\",\"reviews\":1761},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=770\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=771\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"5\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Panasonic\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Aurum abstergo colo quisquam cruentus depono. Fugiat theatrum defaeco ago curo sonitus somnus amoveo.\",\"advantages\":[\"uter fugit ex\",\"absconditus color comprehendo auctus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Floy\",\"date\":\"23 may 2024\",\"rating\":3,\"comment\":\"Aequitas appello cattus corrupti tabernus vomer defetiscor magnam.\",\"pros\":\"thema desidero delectus\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Casandra\",\"date\":\"14 iyul 2024\",\"rating\":5,\"comment\":\"Accusantium bonus coaegresco dens adipiscor aliquam quaerat vestigium aut eveniet.\",\"pros\":\"crepusculum voluptatum temperantia\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Vella\",\"date\":\"4 dekabr 2024\",\"rating\":3,\"comment\":\"Temperantia arguo sulum audax mollitia.\",\"pros\":\"suscipit perferendis certus\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Vernice\",\"date\":\"16 may 2024\",\"rating\":4,\"comment\":\"Claudeo pax viridis aegrus comparo cursim suffragium aqua tristis.\",\"pros\":\"admiratio coepi callide\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Shad\",\"date\":\"10 noyabr 2024\",\"rating\":3,\"comment\":\"Deinde aegrus itaque.\",\"pros\":\"contra deinde neque\",\"cons\":\"molestiae comedo\"},{\"id\":10006,\"user\":\"Ari\",\"date\":\"22 aprel 2024\",\"rating\":5,\"comment\":\"Quibusdam venio sortitus appello nam solium.\",\"pros\":\"cimentarius cito undique\",\"cons\":\"Yo'q\"}]},{\"id\":78,\"nomi\":\"Dazmol Tefal XY-227\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Tefal\",\"rating\":4.7,\"reviewsCount\":3,\"ordersCount\":167,\"oldPrice\":7201000,\"newPrice\":5401000,\"discount\":25,\"tags\":[],\"colors\":[\"#808080\",\"#FF0000\",\"#000000\"],\"seller\":{\"name\":\"Tefal Official Store\",\"rating\":\"5.0\",\"reviews\":1323},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=780\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=781\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=782\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"4400 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Tefal\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"4400 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"75 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.9 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Utilis casus qui callide cornu tergum defaeco aliquam desipio vomica. Tempus adduco deprimo cuius suppono torqueo deinde earum.\",\"advantages\":[\"curiositas adstringo adfectus\",\"ait comis adaugeo curvo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Darrion\",\"date\":\"1 aprel 2024\",\"rating\":5,\"comment\":\"Uredo possimus vergo aeneus adfectus considero creber excepturi vobis voluptas.\",\"pros\":\"cupiditate acceptus surgo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Michel\",\"date\":\"23 may 2024\",\"rating\":4,\"comment\":\"Ulterius tabgo deprecator demergo cinis vorax acidus.\",\"pros\":\"umerus temperantia soluta\",\"cons\":\"turbo accusantium\"},{\"id\":10003,\"user\":\"Philip\",\"date\":\"3 noyabr 2024\",\"rating\":5,\"comment\":\"Carcer testimonium vinco bibo.\",\"pros\":\"dolorem ancilla patrocinor\",\"cons\":\"Yo'q\"}]},{\"id\":79,\"nomi\":\"Konvektor Polaris GR-300\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Polaris\",\"rating\":4,\"reviewsCount\":2,\"ordersCount\":443,\"oldPrice\":5050000,\"newPrice\":4596000,\"discount\":9,\"tags\":[],\"colors\":[\"#1E3A8A\"],\"seller\":{\"name\":\"Polaris Official Store\",\"rating\":\"4.5\",\"reviews\":1964},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=790\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=791\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=792\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"48 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Polaris\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"48 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Conspergo abundans thesis denuo. Doloremque varius appositus theca depereo subnecto turbo calco.\",\"advantages\":[\"denuncio complectus considero\",\"non appositus ventosus quis\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Antonette\",\"date\":\"9 iyul 2024\",\"rating\":4,\"comment\":\"Clibanus temeritas et eveniet audax crebro.\",\"pros\":\"arcesso desino trepide\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Orin\",\"date\":\"27 noyabr 2024\",\"rating\":4,\"comment\":\"Labore repellat cognomen capto natus careo.\",\"pros\":\"totidem cunctatio crebro\",\"cons\":\"Yo'q\"}]},{\"id\":80,\"nomi\":\"Yuvuvchi changyutgich Karcher MQ-136\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Changyutgichlar\",\"brand\":\"Karcher\",\"rating\":4,\"reviewsCount\":2,\"ordersCount\":188,\"oldPrice\":1224000,\"newPrice\":1040000,\"discount\":15,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FFFFFF\"],\"seller\":{\"name\":\"Karcher Official Store\",\"rating\":\"4.7\",\"reviews\":1950},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/cleaning robot?lock=800\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/cleaning robot?lock=801\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/cleaning robot?lock=802\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"3113 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Karcher\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"3113 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"75 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.7 L\"}]}],\"description\":\"Uyingiz tozaligini saqlash uchun kuchli va qulay changyutgich. Changni mukammal tortib oladi. Caries substantia virtus vilis error ulterius. Denuo uter vilicus arceo decipio eligendi perferendis earum tripudio damno.\",\"advantages\":[\"alveus consectetur veritas\",\"abstergo vigilo ultio sit\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Donald\",\"date\":\"19 dekabr 2024\",\"rating\":4,\"comment\":\"Vapulus cupressus sol tabella vinitor vesco vel clarus.\",\"pros\":\"umquam patior aro\",\"cons\":\"vado auctus\"},{\"id\":10002,\"user\":\"Raymundo\",\"date\":\"25 avgust 2024\",\"rating\":4,\"comment\":\"Aptus adsidue centum congregatio.\",\"pros\":\"convoco cunabula ciminatio\",\"cons\":\"urbs acies\"}]},{\"id\":81,\"nomi\":\"Elektr choynak Vitek VB-703\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Choynaklar\",\"brand\":\"Vitek\",\"rating\":4.4,\"reviewsCount\":0,\"ordersCount\":525,\"oldPrice\":1031000,\"newPrice\":722000,\"discount\":30,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FFFFFF\",\"#808080\",\"#000000\"],\"seller\":{\"name\":\"Vitek Official Store\",\"rating\":\"4.7\",\"reviews\":397},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/kettle?lock=810\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/kettle?lock=811\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"391 W\"},{\"key\":\"Hajm\",\"value\":\"3.8 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Metal\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Vitek\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"391 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"9\"},{\"label\":\"Idish hajmi\",\"value\":\"3.8 L\"}]}],\"description\":\"Suvni tez qaynatish uchun zamonaviy elektr choynak. Zanglamaydigan po'latdan yasalgan korpus. Ante vita abstergo demulceo alias tibi trepide. Perspiciatis amaritudo demens.\",\"advantages\":[\"venia surgo asporto\",\"nulla deorsum incidunt benevolentia\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":82,\"nomi\":\"Aqlli kolonka Apple CS-421\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Kolonkalar\",\"brand\":\"Apple\",\"rating\":3.7,\"reviewsCount\":3,\"ordersCount\":114,\"oldPrice\":5576000,\"newPrice\":3401000,\"discount\":39,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#FF0000\"],\"seller\":{\"name\":\"Apple Official Store\",\"rating\":\"4.8\",\"reviews\":282},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=820\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=821\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart speaker?lock=822\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Apple\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Ovozli buyruqlar bilan ishlaydigan aqlli kolonka. Musiqa tinglash va uyni boshqarish uchun. Optio tot calcar civis tutis uxor. Sollers eveniet clarus vulgaris tepesco delego terga.\",\"advantages\":[\"adsidue taedium vetus\",\"abduco apostolus pauci caute\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Lesley\",\"date\":\"16 yanvar 2024\",\"rating\":3,\"comment\":\"Altus dolorem votum deprecator spargo vesper accusantium vitae aggero tepesco.\",\"pros\":\"vorax censura vesica\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Martine\",\"date\":\"6 yanvar 2024\",\"rating\":5,\"comment\":\"Desino careo utor bene necessitatibus utrimque theca appello officia stillicidium.\",\"pros\":\"desolo defessus curiositas\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Adell\",\"date\":\"15 fevral 2024\",\"rating\":3,\"comment\":\"Abbas venia tergo spes.\",\"pros\":\"turpis amiculum demum\",\"cons\":\"corona commodo\"}]},{\"id\":83,\"nomi\":\"Vertikal dazmol Philips AI-388\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Philips\",\"rating\":3.9,\"reviewsCount\":7,\"ordersCount\":720,\"oldPrice\":1884000,\"newPrice\":1695000,\"discount\":10,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FFFFFF\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"5.0\",\"reviews\":1065},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=830\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=831\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=832\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=833\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"3632 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"3632 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"60 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.7 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Tero appositus teres spiritus similique minima averto. Magni vobis confero arbustum decipio vilis suppono.\",\"advantages\":[\"capio commodo sed\",\"sui adsuesco conturbo vero\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Daija\",\"date\":\"16 iyun 2024\",\"rating\":5,\"comment\":\"Caveo ascisco delectus triumphus totidem.\",\"pros\":\"vitium ars sapiente\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Arlo\",\"date\":\"19 avgust 2024\",\"rating\":3,\"comment\":\"Earum deprecator vitium theatrum congregatio talio soleo tamisium cruciamentum.\",\"pros\":\"aliquam arceo copiose\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Kellen\",\"date\":\"28 mart 2024\",\"rating\":5,\"comment\":\"Terga toties sapiente vulnero voluptatum unde amissio spoliatio demo.\",\"pros\":\"ipsum tempora cibo\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Kamren\",\"date\":\"9 fevral 2024\",\"rating\":4,\"comment\":\"Verumtamen sordeo demo voluntarius rerum enim spes advenio trans stella.\",\"pros\":\"coerceo atavus vestigium\",\"cons\":\"cursus repellat\"},{\"id\":10005,\"user\":\"Filiberto\",\"date\":\"2 oktyabr 2024\",\"rating\":4,\"comment\":\"Statim arguo celo censura cur tandem constans tabella adfectus amplus.\",\"pros\":\"verus tardus ciminatio\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Percy\",\"date\":\"1 fevral 2024\",\"rating\":3,\"comment\":\"Virgo voluptates recusandae.\",\"pros\":\"aliquid creta consuasor\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Nicole\",\"date\":\"7 avgust 2024\",\"rating\":3,\"comment\":\"Derideo consequatur ascisco defaeco optio video.\",\"pros\":\"cilicium adsum suscipio\",\"cons\":\"Yo'q\"}]},{\"id\":84,\"nomi\":\"Mikser Bosch GA-798\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Bosch\",\"rating\":3.8,\"reviewsCount\":6,\"ordersCount\":602,\"oldPrice\":2077000,\"newPrice\":1662000,\"discount\":20,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\",\"#000000\",\"#FF0000\"],\"seller\":{\"name\":\"Bosch Official Store\",\"rating\":\"4.5\",\"reviews\":1577},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=840\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=841\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=842\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=843\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"1443 W\"},{\"key\":\"Hajm\",\"value\":\"2.7 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Plastik\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Bosch\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"1443 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"5\"},{\"label\":\"Idish hajmi\",\"value\":\"2.7 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Tabella tabernus argumentum asperiores complectus terga attonbitus terror. Sophismata cunabula blanditiis.\",\"advantages\":[\"quo ubi animadverto\",\"commodi consectetur accusantium thermae\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Stephan\",\"date\":\"14 noyabr 2024\",\"rating\":3,\"comment\":\"Complectus catena tutamen xiphias acies alii.\",\"pros\":\"quisquam tribuo thymum\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Jaiden\",\"date\":\"23 avgust 2024\",\"rating\":3,\"comment\":\"Perferendis maiores adduco desidero decet.\",\"pros\":\"conturbo arceo sopor\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Brayan\",\"date\":\"19 dekabr 2024\",\"rating\":4,\"comment\":\"Super tracto comedo magni.\",\"pros\":\"accusamus absorbeo ara\",\"cons\":\"appello beatae\"},{\"id\":10004,\"user\":\"Ward\",\"date\":\"15 mart 2024\",\"rating\":5,\"comment\":\"Defero thesis excepturi totus cicuta capitulus solum defaeco quaerat at.\",\"pros\":\"soleo commemoro virga\",\"cons\":\"vilicus valetudo\"},{\"id\":10005,\"user\":\"Edwardo\",\"date\":\"26 may 2024\",\"rating\":5,\"comment\":\"Arbustum cultellus virgo.\",\"pros\":\"demonstro maxime alveus\",\"cons\":\"tego cubitum\"},{\"id\":10006,\"user\":\"Kacey\",\"date\":\"11 mart 2024\",\"rating\":3,\"comment\":\"Neque modi corrumpo patruus.\",\"pros\":\"corrumpo tamen timidus\",\"cons\":\"Yo'q\"}]},{\"id\":85,\"nomi\":\"Blender Artel CW-607\",\"catalog\":\"Oshxona jihozlari\",\"category\":\"Maishiy texnika / Oshxona / Blenderlar\",\"brand\":\"Artel\",\"rating\":4,\"reviewsCount\":4,\"ordersCount\":701,\"oldPrice\":7960000,\"newPrice\":6606000,\"discount\":17,\"tags\":[],\"colors\":[\"#FF0000\",\"#808080\",\"#000000\"],\"seller\":{\"name\":\"Artel Official Store\",\"rating\":\"4.9\",\"reviews\":482},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=850\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=851\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=852\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/kitchen?lock=853\"}],\"shortSpecs\":[{\"key\":\"Quvvat\",\"value\":\"371 W\"},{\"key\":\"Hajm\",\"value\":\"4.5 L\"},{\"key\":\"Korpus materiali\",\"value\":\"Metal\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Artel\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik parametrlar\",\"items\":[{\"label\":\"Quvvat\",\"value\":\"371 W\"},{\"label\":\"Tezlik rejimlari\",\"value\":\"3\"},{\"label\":\"Idish hajmi\",\"value\":\"4.5 L\"}]}],\"description\":\"Oshxonangiz uchun ajralmas yordamchi. Turli xil mahsulotlarni aralashtirish va maydalash uchun mo'ljallangan. Appono sordeo depono viriliter sonitus defungo tumultus damnatio acceptus. Arma depraedor adsum capio cunabula vix vox vergo voluptatum.\",\"advantages\":[\"consequatur tamen decumbo\",\"concido delectatio consectetur constans\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Kari\",\"date\":\"9 yanvar 2024\",\"rating\":5,\"comment\":\"Vulgo textor alias vulgo trepide.\",\"pros\":\"adamo decimus benevolentia\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Carmine\",\"date\":\"13 may 2024\",\"rating\":3,\"comment\":\"Cotidie hic clam decipio aetas adsidue curia utrimque constans.\",\"pros\":\"strenuus cresco peccatus\",\"cons\":\"acer suggero\"},{\"id\":10003,\"user\":\"Delia\",\"date\":\"2 avgust 2024\",\"rating\":4,\"comment\":\"Coruscus antiquus aliquid degero cauda vomito coepi vallum verbera asperiores.\",\"pros\":\"vaco impedit valetudo\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Roderick\",\"date\":\"9 fevral 2024\",\"rating\":4,\"comment\":\"Conservo decerno spes atrox coniuratio animadverto acidus umquam veritas.\",\"pros\":\"compono vulnero magnam\",\"cons\":\"Yo'q\"}]},{\"id\":86,\"nomi\":\"Vertikal dazmol Philips TP-133\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Philips\",\"rating\":3.6,\"reviewsCount\":5,\"ordersCount\":629,\"oldPrice\":7511000,\"newPrice\":5858000,\"discount\":22,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#1E3A8A\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.7\",\"reviews\":961},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=860\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=861\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=862\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/iron?lock=863\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"3260 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"3260 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"77 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.7 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Dolores recusandae tribuo caute talis cauda conor tepidus reiciendis solio. Clarus cimentarius molestiae turbo conicio absconditus vacuus perspiciatis.\",\"advantages\":[\"civitas caecus turba\",\"bardus vae conitor victoria\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Carissa\",\"date\":\"23 oktyabr 2024\",\"rating\":3,\"comment\":\"Tabernus comminor aptus virtus terreo.\",\"pros\":\"ager conitor cometes\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Enoch\",\"date\":\"26 iyun 2024\",\"rating\":3,\"comment\":\"Convoco excepturi consequatur vulgivagus spectaculum comitatus illum.\",\"pros\":\"repellendus correptius undique\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Malinda\",\"date\":\"19 sentyabr 2024\",\"rating\":5,\"comment\":\"Acer appono voluptas aestivus verbera comes.\",\"pros\":\"adfectus vetus dicta\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Magdalena\",\"date\":\"17 sentyabr 2024\",\"rating\":4,\"comment\":\"Necessitatibus uterque spectaculum vulgus paulatim cubo calamitas sapiente.\",\"pros\":\"angulus urbanus asper\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Larissa\",\"date\":\"15 oktyabr 2024\",\"rating\":3,\"comment\":\"Usus tot numquam depulso terror quisquam.\",\"pros\":\"confugo consequuntur utique\",\"cons\":\"Yo'q\"}]},{\"id\":87,\"nomi\":\"Elektr ustara Braun JF-214\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Braun\",\"rating\":3.9,\"reviewsCount\":8,\"ordersCount\":192,\"oldPrice\":240000,\"newPrice\":148000,\"discount\":38,\"tags\":[],\"colors\":[\"#FFFFFF\",\"#000000\",\"#808080\"],\"seller\":{\"name\":\"Braun Official Store\",\"rating\":\"4.9\",\"reviews\":111},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=870\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=871\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=872\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=873\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"5\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Braun\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Suffoco subvenio arbor deinde cognomen curia depono cilicium. Quidem allatus curiositas tepidus adsuesco arceo talio angelus.\",\"advantages\":[\"aurum adficio molestiae\",\"at cunae centum tergiversatio\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Delaney\",\"date\":\"24 yanvar 2024\",\"rating\":5,\"comment\":\"Quam cunae sui auctus agnitio conduco tantum coruscus.\",\"pros\":\"vilis cubitum textor\",\"cons\":\"curo ademptio\"},{\"id\":10002,\"user\":\"Buck\",\"date\":\"13 avgust 2024\",\"rating\":4,\"comment\":\"Atque celo utique deprimo absens somnus cursus supplanto accusamus arbor.\",\"pros\":\"textor paulatim totam\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Kaya\",\"date\":\"18 fevral 2024\",\"rating\":5,\"comment\":\"Cunabula omnis acerbitas atrocitas.\",\"pros\":\"temperantia averto torqueo\",\"cons\":\"vaco bellicus\"},{\"id\":10004,\"user\":\"Cayla\",\"date\":\"18 yanvar 2024\",\"rating\":3,\"comment\":\"Acidus contigo tristis stabilis acervus.\",\"pros\":\"terra abduco aggero\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Trace\",\"date\":\"17 iyun 2024\",\"rating\":3,\"comment\":\"Suscipit animadverto tamen compono eos sub utrimque cohaero.\",\"pros\":\"textor pauci officia\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Emory\",\"date\":\"1 may 2024\",\"rating\":4,\"comment\":\"Causa cuius desipio vesco amo cibus cilicium vergo earum.\",\"pros\":\"crastinus modi degenero\",\"cons\":\"caelum aestas\"},{\"id\":10007,\"user\":\"Paris\",\"date\":\"21 oktyabr 2024\",\"rating\":3,\"comment\":\"Volup decumbo consuasor canis totam degusto non sint tergeo deleo.\",\"pros\":\"vobis tergeo cito\",\"cons\":\"sursum consuasor\"},{\"id\":10008,\"user\":\"Marcia\",\"date\":\"1 dekabr 2024\",\"rating\":4,\"comment\":\"Degusto hic recusandae.\",\"pros\":\"stella certus adaugeo\",\"cons\":\"Yo'q\"}]},{\"id\":88,\"nomi\":\"Robot-changyutgich Karcher VR-250\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Changyutgichlar\",\"brand\":\"Karcher\",\"rating\":3.8,\"reviewsCount\":9,\"ordersCount\":728,\"oldPrice\":1317000,\"newPrice\":962000,\"discount\":27,\"tags\":[],\"colors\":[\"#FF0000\",\"#FFFFFF\"],\"seller\":{\"name\":\"Karcher Official Store\",\"rating\":\"4.5\",\"reviews\":220},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=880\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/vacuum cleaner?lock=881\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"4126 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Karcher\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"4126 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"73 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.9 L\"}]}],\"description\":\"Uyingiz tozaligini saqlash uchun kuchli va qulay changyutgich. Changni mukammal tortib oladi. Fuga placeat suppono. Capto cohors teneo perferendis perferendis spargo cultura.\",\"advantages\":[\"collum universe benigne\",\"compello vir apostolus aeger\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Roger\",\"date\":\"11 iyul 2024\",\"rating\":4,\"comment\":\"Decimus arx audeo cerno suppono alius cito undique.\",\"pros\":\"optio annus desino\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Valentina\",\"date\":\"21 fevral 2024\",\"rating\":3,\"comment\":\"Pecco defero veritatis tener.\",\"pros\":\"absque video est\",\"cons\":\"apto arbor\"},{\"id\":10003,\"user\":\"Dexter\",\"date\":\"28 iyun 2024\",\"rating\":3,\"comment\":\"Sunt aliqua beneficium peior harum cum.\",\"pros\":\"adflicto tribuo explicabo\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Jackeline\",\"date\":\"12 yanvar 2024\",\"rating\":5,\"comment\":\"Adhaero ascisco denego.\",\"pros\":\"tardus carpo dens\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Betsy\",\"date\":\"14 sentyabr 2024\",\"rating\":4,\"comment\":\"Tabella victus cedo coerceo tempore accendo demonstro vito aeternus.\",\"pros\":\"bellum aggero speciosus\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Jaycee\",\"date\":\"16 fevral 2024\",\"rating\":5,\"comment\":\"Annus tego trucido vehemens.\",\"pros\":\"accedo degero verbera\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Monica\",\"date\":\"14 aprel 2024\",\"rating\":3,\"comment\":\"Alo dicta turpis.\",\"pros\":\"adipisci angelus tactus\",\"cons\":\"strues aqua\"},{\"id\":10008,\"user\":\"Heaven\",\"date\":\"27 iyun 2024\",\"rating\":3,\"comment\":\"Quo coadunatio succurro acsi victoria veniam arbor.\",\"pros\":\"appello baiulus repellendus\",\"cons\":\"tersus acer\"},{\"id\":10009,\"user\":\"Jermain\",\"date\":\"23 aprel 2024\",\"rating\":4,\"comment\":\"Succedo ager blandior studio aspernatur adulescens aliquid demonstro abeo.\",\"pros\":\"appello addo esse\",\"cons\":\"Yo'q\"}]},{\"id\":89,\"nomi\":\"Trimmer Philips HE-388\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Soch parvarishi\",\"brand\":\"Philips\",\"rating\":4,\"reviewsCount\":3,\"ordersCount\":966,\"oldPrice\":4492000,\"newPrice\":4178000,\"discount\":7,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FFFFFF\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.7\",\"reviews\":166},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=890\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=891\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=892\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=893\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"5\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]}],\"description\":\"Sochlaringizni quritish va shakl berish uchun professional vosita. Soch tolalarini himoya qiladi. Adaugeo cinis verus. Abstergo audio templum recusandae adimpleo adamo tenus confido.\",\"advantages\":[\"bestia ustulo vae\",\"cohibeo sordeo tabella vilicus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Antonia\",\"date\":\"6 sentyabr 2024\",\"rating\":4,\"comment\":\"Turbo aeger amissio solium concedo tot capillus.\",\"pros\":\"impedit illo usitas\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Ervin\",\"date\":\"6 yanvar 2024\",\"rating\":3,\"comment\":\"Demulceo ut toties texo tam laudantium tabesco crudelis demergo.\",\"pros\":\"defendo decretum adeptio\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Cara\",\"date\":\"11 avgust 2024\",\"rating\":5,\"comment\":\"Bibo comminor alo cohaero varius suffragium via uterque eveniet.\",\"pros\":\"tot statua accusantium\",\"cons\":\"Yo'q\"}]},{\"id\":90,\"nomi\":\"Ventilyator Vitek CW-892\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Vitek\",\"rating\":5,\"reviewsCount\":2,\"ordersCount\":102,\"oldPrice\":6465000,\"newPrice\":5948000,\"discount\":8,\"tags\":[],\"colors\":[\"#000000\"],\"seller\":{\"name\":\"Vitek Official Store\",\"rating\":\"4.5\",\"reviews\":682},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=900\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=901\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"35 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Vitek\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Vetnam\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"35 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A+\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Vir caute torrens ambulo vilis adipiscor. Decretum eius considero.\",\"advantages\":[\"tubineus corpus tibi\",\"provident voro ter atqui\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Melvina\",\"date\":\"8 dekabr 2024\",\"rating\":5,\"comment\":\"Nostrum crur vicissitudo conqueror tollo agnitio suffragium voluptatem.\",\"pros\":\"contabesco demo beatus\",\"cons\":\"carmen dedico\"},{\"id\":10002,\"user\":\"Forest\",\"date\":\"10 mart 2024\",\"rating\":5,\"comment\":\"Toties aduro ater reprehenderit sophismata comedo.\",\"pros\":\"victoria accusator a\",\"cons\":\"Yo'q\"}]},{\"id\":91,\"nomi\":\"Moyli radiator Vitek ZI-596\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Isitgichlar\",\"brand\":\"Vitek\",\"rating\":4,\"reviewsCount\":5,\"ordersCount\":164,\"oldPrice\":2917000,\"newPrice\":2246000,\"discount\":23,\"tags\":[],\"colors\":[\"#FF0000\",\"#FFFFFF\"],\"seller\":{\"name\":\"Vitek Official Store\",\"rating\":\"4.6\",\"reviews\":1789},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=910\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/heater?lock=911\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"28 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Vitek\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"28 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A\"}]}],\"description\":\"Sovuq kunlarda uyingizni isitish uchun xavfsiz va samarali isitgich. Utique explicabo cupiditas strues quo ab bestia natus vir. Alienus soluta amplitudo agnosco admoveo aduro recusandae modi vilicus.\",\"advantages\":[\"dens bonus nostrum\",\"abutor asper conforto temptatio\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Lorna\",\"date\":\"27 iyun 2024\",\"rating\":3,\"comment\":\"Compono strues sollicito.\",\"pros\":\"correptius sint cubo\",\"cons\":\"peior clarus\"},{\"id\":10002,\"user\":\"Audrey\",\"date\":\"11 mart 2024\",\"rating\":4,\"comment\":\"Velum demens apostolus iure vestigium cubicularis carpo thymbra tollo.\",\"pros\":\"decipio ocer vehemens\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Anahi\",\"date\":\"22 iyun 2024\",\"rating\":4,\"comment\":\"Civitas explicabo expedita ventosus adsuesco.\",\"pros\":\"tenuis antepono sit\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Arturo\",\"date\":\"16 dekabr 2024\",\"rating\":5,\"comment\":\"Umbra arbitro baiulus sordeo veritas brevis.\",\"pros\":\"aedificium utor terror\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Felicity\",\"date\":\"4 oktyabr 2024\",\"rating\":4,\"comment\":\"Tempore suspendo pecus.\",\"pros\":\"similique certe conspergo\",\"cons\":\"Yo'q\"}]},{\"id\":92,\"nomi\":\"Bug'li dazmol Philips LP-486\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Philips\",\"rating\":4.3,\"reviewsCount\":10,\"ordersCount\":853,\"oldPrice\":3146000,\"newPrice\":2737000,\"discount\":13,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#FF0000\",\"#1E3A8A\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.5\",\"reviews\":1885},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=920\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=921\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=922\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"2113 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"2113 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"70 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.7 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Custodia comprehendo somniculosus alioqui. Vitium demulceo ocer caterva vix.\",\"advantages\":[\"subnecto adeo officia\",\"consectetur alii aranea addo\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Jordan\",\"date\":\"23 dekabr 2024\",\"rating\":5,\"comment\":\"Uterque pauper clam cunabula caelestis utor admoveo dapifer subiungo.\",\"pros\":\"vestigium tenuis clamo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Bertha\",\"date\":\"21 aprel 2024\",\"rating\":5,\"comment\":\"Thorax caelestis facere derelinquo cur sunt advoco cado.\",\"pros\":\"votum alo depraedor\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Aubree\",\"date\":\"18 avgust 2024\",\"rating\":5,\"comment\":\"Ver cariosus undique cattus.\",\"pros\":\"undique tertius ratione\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Evelyn\",\"date\":\"4 iyul 2024\",\"rating\":3,\"comment\":\"Succurro virga curto spiritus.\",\"pros\":\"abduco attonbitus cunctatio\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Camren\",\"date\":\"10 iyun 2024\",\"rating\":5,\"comment\":\"Admitto apostolus conturbo attonbitus.\",\"pros\":\"stillicidium substantia vespillo\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Damien\",\"date\":\"5 sentyabr 2024\",\"rating\":3,\"comment\":\"Vix nihil vomer.\",\"pros\":\"ademptio validus voluptate\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Donny\",\"date\":\"16 dekabr 2024\",\"rating\":3,\"comment\":\"Comis dicta curis hic depopulo aggredior conatus validus.\",\"pros\":\"tracto voluptate deputo\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Dannie\",\"date\":\"27 yanvar 2024\",\"rating\":4,\"comment\":\"Vigilo super iure labore explicabo illo.\",\"pros\":\"patruus confero quae\",\"cons\":\"sufficio carcer\"},{\"id\":10009,\"user\":\"Bette\",\"date\":\"18 avgust 2024\",\"rating\":5,\"comment\":\"Vigor verbera eum cibus demum.\",\"pros\":\"autem defleo casso\",\"cons\":\"Yo'q\"},{\"id\":10010,\"user\":\"Jessica\",\"date\":\"6 oktyabr 2024\",\"rating\":5,\"comment\":\"Tego conor xiphias astrum maxime denego decerno cohibeo.\",\"pros\":\"abscido volubilis sopor\",\"cons\":\"Yo'q\"}]},{\"id\":93,\"nomi\":\"RGB lenta Yeelight TG-483\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Yeelight\",\"rating\":4,\"reviewsCount\":7,\"ordersCount\":70,\"oldPrice\":7724000,\"newPrice\":6797000,\"discount\":12,\"tags\":[],\"colors\":[\"#808080\",\"#1E3A8A\",\"#000000\"],\"seller\":{\"name\":\"Yeelight Official Store\",\"rating\":\"4.5\",\"reviews\":1367},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=930\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=931\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=932\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/smart home?lock=933\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Yeelight\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Cito thymbra avarus coadunatio verto chirographum quas quae. Animus rerum volo unde bos conduco crapula aegrus.\",\"advantages\":[\"comparo adipiscor ex\",\"corporis placeat tabernus asper\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Jeff\",\"date\":\"14 iyun 2024\",\"rating\":4,\"comment\":\"Turbo aegrotatio eveniet dapifer abeo.\",\"pros\":\"distinctio defleo taedium\",\"cons\":\"ambulo nam\"},{\"id\":10002,\"user\":\"Cassidy\",\"date\":\"27 yanvar 2024\",\"rating\":4,\"comment\":\"Cohors tabgo terminatio maiores sophismata capio peccatus sui clibanus correptius.\",\"pros\":\"substantia communis tutamen\",\"cons\":\"labore consequatur\"},{\"id\":10003,\"user\":\"Herminio\",\"date\":\"5 avgust 2024\",\"rating\":4,\"comment\":\"Aeger currus synagoga volo depulso cimentarius.\",\"pros\":\"asporto contego caelestis\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Lilla\",\"date\":\"1 aprel 2024\",\"rating\":5,\"comment\":\"Delinquo stabilis tot.\",\"pros\":\"via aliquam ter\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Uriah\",\"date\":\"6 oktyabr 2024\",\"rating\":5,\"comment\":\"Summa cuius amet pauci cetera soluta textor ter dignissimos tantum.\",\"pros\":\"decens admoveo capto\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Eduardo\",\"date\":\"13 avgust 2024\",\"rating\":3,\"comment\":\"Deleo quibusdam succedo angustus caveo.\",\"pros\":\"aspernatur stips ullam\",\"cons\":\"Yo'q\"},{\"id\":10007,\"user\":\"Alessandro\",\"date\":\"12 mart 2024\",\"rating\":3,\"comment\":\"Sum sum magni inventore cauda angulus templum.\",\"pros\":\"conscendo depulso succurro\",\"cons\":\"Yo'q\"}]},{\"id\":94,\"nomi\":\"Epilyator Panasonic PO-806\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Elektr ustaralar\",\"brand\":\"Panasonic\",\"rating\":3.5,\"reviewsCount\":2,\"ordersCount\":273,\"oldPrice\":3803000,\"newPrice\":2662000,\"discount\":30,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#000000\",\"#FF0000\"],\"seller\":{\"name\":\"Panasonic Official Store\",\"rating\":\"4.6\",\"reviews\":1903},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=940\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=941\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/razor?lock=942\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"2\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Panasonic\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]}],\"description\":\"Yuz terisini ta'sirlantirmasdan toza va silliq olish uchun elektr ustara. Auxilium tero tracto. Angelus antea doloribus cotidie ipsum dolore compello apto.\",\"advantages\":[\"triumphus teres terebro\",\"attero antea altus stipes\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Meredith\",\"date\":\"12 yanvar 2024\",\"rating\":3,\"comment\":\"A ceno utrum amplus conventus coerceo capio.\",\"pros\":\"deripio occaecati viriliter\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Rosalia\",\"date\":\"8 mart 2024\",\"rating\":4,\"comment\":\"Torrens adeo utilis attollo denuo aspernatur tubineus via tibi abbas.\",\"pros\":\"centum tabula tutamen\",\"cons\":\"conor curso\"}]},{\"id\":95,\"nomi\":\"Trimmer Dyson BW-475\",\"catalog\":\"Shaxsiy parvarish\",\"category\":\"Go'zallik va salomatlik / Soch parvarishi\",\"brand\":\"Dyson\",\"rating\":4.9,\"reviewsCount\":0,\"ordersCount\":826,\"oldPrice\":4225000,\"newPrice\":2746000,\"discount\":35,\"tags\":[],\"colors\":[\"#FFFFFF\"],\"seller\":{\"name\":\"Dyson Official Store\",\"rating\":\"4.6\",\"reviews\":620},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=950\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/hair dryer?lock=951\"}],\"shortSpecs\":[{\"key\":\"Quvvat manbai\",\"value\":\"Tarmoq\"},{\"key\":\"Qoplamasi\",\"value\":\"Keramika\"},{\"key\":\"Harorat rejimlari\",\"value\":\"3\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Dyson\"},{\"label\":\"Kafolat\",\"value\":\"2 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Malayziya\"}]}],\"description\":\"Sochlaringizni quritish va shakl berish uchun professional vosita. Soch tolalarini himoya qiladi. Conscendo cupressus subseco curriculum architecto fugit tantum cilicium tabgo. Theatrum attollo cinis quia defaeco.\",\"advantages\":[\"aqua candidus quaerat\",\"audax ea civitas tibi\",\"Kafolatli xizmat\"],\"reviewsList\":[]},{\"id\":96,\"nomi\":\"Konditsioner Samsung IO-442\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Konditsionerlar\",\"brand\":\"Samsung\",\"rating\":4.7,\"reviewsCount\":3,\"ordersCount\":239,\"oldPrice\":1081000,\"newPrice\":984000,\"discount\":9,\"tags\":[],\"colors\":[\"#FF0000\",\"#808080\"],\"seller\":{\"name\":\"Samsung Official Store\",\"rating\":\"4.5\",\"reviews\":1006},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=960\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=961\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=962\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/ac unit?lock=963\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"40 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Samsung\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"40 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A+\"}]}],\"description\":\"Yozda salqinlik, qishda issiqlik ulashuvchi zamonaviy konditsioner. Elektr energiyasini tejaydi. Molestias amissio surculus. Amaritudo valde claudeo.\",\"advantages\":[\"conturbo accusamus decor\",\"civitas deludo uxor clementia\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Nedra\",\"date\":\"17 fevral 2024\",\"rating\":5,\"comment\":\"Apto advoco adamo suadeo capitulus.\",\"pros\":\"pauci speculum comedo\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Annalise\",\"date\":\"27 iyun 2024\",\"rating\":4,\"comment\":\"Accusantium corrumpo teneo valetudo stella totam appono torrens caute.\",\"pros\":\"barba aequitas adamo\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Rosetta\",\"date\":\"6 noyabr 2024\",\"rating\":5,\"comment\":\"Compello abduco collum tristis blandior adulatio crinis depereo tenuis tum.\",\"pros\":\"eius tergiversatio cauda\",\"cons\":\"Yo'q\"}]},{\"id\":97,\"nomi\":\"RGB lenta Yandex HJ-386\",\"catalog\":\"Aqlli uy\",\"category\":\"Elektronika / Aqlli uy / Yoritish\",\"brand\":\"Yandex\",\"rating\":4,\"reviewsCount\":7,\"ordersCount\":573,\"oldPrice\":1568000,\"newPrice\":1066000,\"discount\":32,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#FFFFFF\",\"#FF0000\",\"#808080\"],\"seller\":{\"name\":\"Yandex Official Store\",\"rating\":\"4.9\",\"reviews\":1582},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=970\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=971\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=972\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/smart bulb?lock=973\"}],\"shortSpecs\":[{\"key\":\"Ulanish\",\"value\":\"Wi-Fi / Bluetooth\"},{\"key\":\"Ovozli boshqaruv\",\"value\":\"Mavjud\"},{\"key\":\"Tizim\",\"value\":\"Smart Home\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Yandex\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Germaniya\"}]},{\"group\":\"Ulanish\",\"items\":[{\"label\":\"Simsiz aloqa\",\"value\":\"Wi-Fi 2.4 GHz\"},{\"label\":\"Ilova orqali boshqarish\",\"value\":\"Bor\"},{\"label\":\"Ekosistema\",\"value\":\"Google Home / Alexa / Yandex\"}]}],\"description\":\"Smartfon orqali boshqariladigan aqlli yoritish tizimi. Ranglarni o'zgartirish imkoniyati. Tamdiu blandior volva dolores. Molestiae thesis socius.\",\"advantages\":[\"comis somniculosus trepide\",\"vita spectaculum adnuo cenaculum\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Ceasar\",\"date\":\"3 may 2024\",\"rating\":5,\"comment\":\"Alioqui adhuc cohors auctor aufero vox aestas.\",\"pros\":\"aduro porro aufero\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Melyssa\",\"date\":\"17 sentyabr 2024\",\"rating\":4,\"comment\":\"Arguo congregatio confido demitto usus tracto calco calco vos.\",\"pros\":\"ea unus clarus\",\"cons\":\"Yo'q\"},{\"id\":10003,\"user\":\"Kaitlyn\",\"date\":\"20 dekabr 2024\",\"rating\":4,\"comment\":\"Tantillus alo ciminatio tracto.\",\"pros\":\"timor uterque abbas\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Marian\",\"date\":\"16 yanvar 2024\",\"rating\":4,\"comment\":\"Damno reprehenderit tot vetus arx tonsor arbustum.\",\"pros\":\"tum tripudio ancilla\",\"cons\":\"tamisium consuasor\"},{\"id\":10005,\"user\":\"Tyrel\",\"date\":\"1 fevral 2024\",\"rating\":4,\"comment\":\"Defendo tondeo adduco alias adfero verbum deludo deleo.\",\"pros\":\"sufficio tumultus derideo\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Gregory\",\"date\":\"20 noyabr 2024\",\"rating\":4,\"comment\":\"Ustilo soluta constans vulgivagus pecus quis.\",\"pros\":\"crudelis uxor speciosus\",\"cons\":\"iure beneficium\"},{\"id\":10007,\"user\":\"Miracle\",\"date\":\"9 aprel 2024\",\"rating\":3,\"comment\":\"Arx supellex vociferor atqui approbo claudeo.\",\"pros\":\"validus exercitationem ventosus\",\"cons\":\"Yo'q\"}]},{\"id\":98,\"nomi\":\"Konditsioner Midea YO-181\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Konditsionerlar\",\"brand\":\"Midea\",\"rating\":3.8,\"reviewsCount\":4,\"ordersCount\":474,\"oldPrice\":1131000,\"newPrice\":927000,\"discount\":18,\"tags\":[],\"colors\":[\"#000000\",\"#808080\",\"#1E3A8A\"],\"seller\":{\"name\":\"Midea Official Store\",\"rating\":\"4.6\",\"reviews\":999},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=980\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=981\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=982\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=983\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"30 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Midea\"},{\"label\":\"Kafolat\",\"value\":\"1 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"30 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A++\"}]}],\"description\":\"Yozda salqinlik, qishda issiqlik ulashuvchi zamonaviy konditsioner. Elektr energiyasini tejaydi. Ex canis absum acerbitas basium centum tempora. Inflammatio eos calculus tamisium adamo aegrus ante synagoga vehemens synagoga.\",\"advantages\":[\"thesis beatus correptius\",\"deserunt villa ocer causa\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Kadin\",\"date\":\"6 noyabr 2024\",\"rating\":3,\"comment\":\"Sodalitas alius textilis odit vulgo quia ustilo vapulus crapula.\",\"pros\":\"caelum balbus enim\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Adolfo\",\"date\":\"1 yanvar 2024\",\"rating\":5,\"comment\":\"Claudeo conatus delego.\",\"pros\":\"speculum labore cupiditas\",\"cons\":\"alo sursum\"},{\"id\":10003,\"user\":\"Owen\",\"date\":\"25 fevral 2024\",\"rating\":4,\"comment\":\"Cernuus summisse claudeo vomito patior.\",\"pros\":\"pecco odio caelum\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Vella\",\"date\":\"20 iyul 2024\",\"rating\":3,\"comment\":\"Cunae tunc copiose allatus.\",\"pros\":\"decet cometes charisma\",\"cons\":\"ad celebrer\"}]},{\"id\":99,\"nomi\":\"Split-tizim Gree UE-446\",\"catalog\":\"Isitish va sovutish\",\"category\":\"Iqlim texnikasi / Konditsionerlar\",\"brand\":\"Gree\",\"rating\":4,\"reviewsCount\":6,\"ordersCount\":85,\"oldPrice\":6296000,\"newPrice\":4029000,\"discount\":36,\"tags\":[],\"colors\":[\"#FFFFFF\",\"#000000\"],\"seller\":{\"name\":\"Gree Official Store\",\"rating\":\"5.0\",\"reviews\":1855},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=990\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/air conditioner?lock=991\"}],\"shortSpecs\":[{\"key\":\"Xizmat ko'rsatish maydoni\",\"value\":\"47 m²\"},{\"key\":\"Rejimlar\",\"value\":\"Isitish / Sovutish\"},{\"key\":\"Displey\",\"value\":\"Mavjud\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Gree\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Texnik xususiyatlar\",\"items\":[{\"label\":\"Tavsiya etilgan maydon\",\"value\":\"47 m²\"},{\"label\":\"Freon turi\",\"value\":\"R410A\"},{\"label\":\"Energiya samaradorligi\",\"value\":\"A+\"}]}],\"description\":\"Yozda salqinlik, qishda issiqlik ulashuvchi zamonaviy konditsioner. Elektr energiyasini tejaydi. Facilis deporto ducimus reprehenderit suggero claudeo ratione. Campana triduana circumvenio cena demonstro casso ambulo.\",\"advantages\":[\"omnis viriliter coniuratio\",\"caries ago careo talus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Hannah\",\"date\":\"11 mart 2024\",\"rating\":4,\"comment\":\"Aedificium calamitas sperno cum somnus.\",\"pros\":\"articulus tempus tubineus\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Victor\",\"date\":\"9 oktyabr 2024\",\"rating\":5,\"comment\":\"Celo supra voluptate allatus.\",\"pros\":\"caput sol depono\",\"cons\":\"vita tergo\"},{\"id\":10003,\"user\":\"Karen\",\"date\":\"10 fevral 2024\",\"rating\":4,\"comment\":\"Adsum viscus aliquam amitto creptio tubineus desipio talus cultellus absconditus.\",\"pros\":\"vulgus subiungo clibanus\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Travis\",\"date\":\"14 iyun 2024\",\"rating\":3,\"comment\":\"Vilis temptatio clementia terga angulus delibero dicta denuo iste compono.\",\"pros\":\"canis ultra verto\",\"cons\":\"cultura repellat\"},{\"id\":10005,\"user\":\"Torey\",\"date\":\"22 iyun 2024\",\"rating\":4,\"comment\":\"Cumque balbus corporis acidus tunc barba consectetur undique vorax ait.\",\"pros\":\"enim brevis ait\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Prince\",\"date\":\"21 mart 2024\",\"rating\":4,\"comment\":\"Adeptio trado tui derideo summopere.\",\"pros\":\"congregatio sollicito optio\",\"cons\":\"tergum saepe\"}]},{\"id\":100,\"nomi\":\"Bug'li dazmol Philips FN-571\",\"catalog\":\"Tozalash texnikasi\",\"category\":\"Maishiy texnika / Tozalash / Dazmollar\",\"brand\":\"Philips\",\"rating\":3.8,\"reviewsCount\":10,\"ordersCount\":420,\"oldPrice\":7007000,\"newPrice\":5676000,\"discount\":19,\"tags\":[\"Hit\",\"Tavsiya\"],\"colors\":[\"#808080\",\"#FF0000\",\"#FFFFFF\"],\"seller\":{\"name\":\"Philips Official Store\",\"rating\":\"4.8\",\"reviews\":1218},\"images\":[{\"id\":1,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=1000\"},{\"id\":2,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=1001\"},{\"id\":3,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=1002\"},{\"id\":4,\"imageUrl\":\"https://loremflickr.com/500/500/steam iron?lock=1003\"}],\"shortSpecs\":[{\"key\":\"So'rish kuchi\",\"value\":\"3347 Pa\"},{\"key\":\"Tozalash turi\",\"value\":\"Quruq va nam\"},{\"key\":\"Filtr\",\"value\":\"HEPA\"}],\"fullSpecs\":[{\"group\":\"Asosiy\",\"items\":[{\"label\":\"Brend\",\"value\":\"Philips\"},{\"label\":\"Kafolat\",\"value\":\"3 yil\"},{\"label\":\"Ishlab chiqarilgan davlat\",\"value\":\"Xitoy\"}]},{\"group\":\"Samaradorlik\",\"items\":[{\"label\":\"So'rish kuchi\",\"value\":\"3347 Pa\"},{\"label\":\"Shovqin darajasi\",\"value\":\"65 dB\"},{\"label\":\"Chang yig'uvchi hajm\",\"value\":\"0.8 L\"}]}],\"description\":\"Kiyimlaringizni silliq va tartibli saqlash uchun bug'li dazmol. Seramika taglikka ega. Distinctio ambulo deficio verbum pax adflicto solium suadeo anser. Urbanus nisi abscido virgo solum bibo ater.\",\"advantages\":[\"recusandae vilitas illum\",\"clarus crepusculum capillus alveus\",\"Kafolatli xizmat\"],\"reviewsList\":[{\"id\":10001,\"user\":\"Noemi\",\"date\":\"14 oktyabr 2024\",\"rating\":3,\"comment\":\"Conqueror debeo victoria fuga ante sollicito terror.\",\"pros\":\"spargo spes degusto\",\"cons\":\"Yo'q\"},{\"id\":10002,\"user\":\"Rasheed\",\"date\":\"22 iyun 2024\",\"rating\":4,\"comment\":\"Anser accusator porro ex praesentium id vulnero comparo.\",\"pros\":\"aspernatur truculenter cotidie\",\"cons\":\"subiungo vivo\"},{\"id\":10003,\"user\":\"Baby\",\"date\":\"15 may 2024\",\"rating\":5,\"comment\":\"Suscipio abundans decimus bardus verto ter amor.\",\"pros\":\"comburo pecto aetas\",\"cons\":\"Yo'q\"},{\"id\":10004,\"user\":\"Holden\",\"date\":\"5 fevral 2024\",\"rating\":4,\"comment\":\"Debeo vulpes tabula ademptio stella suppellex tolero carus.\",\"pros\":\"tenuis substantia arca\",\"cons\":\"Yo'q\"},{\"id\":10005,\"user\":\"Casey\",\"date\":\"3 dekabr 2024\",\"rating\":3,\"comment\":\"Venia claro explicabo aequitas voluntarius vesper.\",\"pros\":\"veniam vaco antepono\",\"cons\":\"Yo'q\"},{\"id\":10006,\"user\":\"Tillman\",\"date\":\"21 yanvar 2024\",\"rating\":5,\"comment\":\"Sol arto appello.\",\"pros\":\"usus spargo vestrum\",\"cons\":\"concedo triduana\"},{\"id\":10007,\"user\":\"Ara\",\"date\":\"12 dekabr 2024\",\"rating\":3,\"comment\":\"Substantia tepesco demitto deserunt adversus verbera conventus venustas.\",\"pros\":\"accendo turbo textilis\",\"cons\":\"Yo'q\"},{\"id\":10008,\"user\":\"Tomas\",\"date\":\"17 aprel 2024\",\"rating\":4,\"comment\":\"Quo tricesimus addo.\",\"pros\":\"arma textor ante\",\"cons\":\"Yo'q\"},{\"id\":10009,\"user\":\"Adonis\",\"date\":\"24 mart 2024\",\"rating\":3,\"comment\":\"Conspergo decor argentum repellendus valetudo.\",\"pros\":\"aspernatur voluptatem suppellex\",\"cons\":\"Yo'q\"},{\"id\":10010,\"user\":\"Eliane\",\"date\":\"24 dekabr 2024\",\"rating\":4,\"comment\":\"Validus in ocer officiis acer vociferor sollicito charisma barba caritas.\",\"pros\":\"cattus cuppedia urbs\",\"cons\":\"Yo'q\"}]}]"));}),
"[project]/src/app/product/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-down.js [app-client] (ecmascript) <export default as ThumbsDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
// Context va Komponentlar
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.jsx [app-client] (ecmascript)");
// Yangilangan JSON ma'lumotlar
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$datas$2f$Products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/datas/Products.json (json)");
;
var _s = __turbopack_context__.k.signature();
// src/app/product/[id]/page.js
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function ProductPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    // Mahsulotni topish
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$datas$2f$Products$2e$json__$28$json$29$__["default"].find((p)=>p.id === parseInt(params.id));
    // State: Tanlangan rasm va Tab
    const [activeImage, setActiveImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('desc');
    // Dastlabki rasm
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductPage.useEffect": ()=>{
            if (product?.images?.length > 0) {
                setActiveImage(product.images[0].imageUrl);
            }
        }
    }["ProductPage.useEffect"], [
        product
    ]);
    // Agar mahsulot topilmasa
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/product/[id]/page.js",
                    lineNumber: 59,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center h-[60vh] text-center px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold mb-4",
                            children: "Mahsulot topilmadi 😕"
                        }, void 0, false, {
                            fileName: "[project]/src/app/product/[id]/page.js",
                            lineNumber: 61,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                children: "Bosh sahifaga qaytish"
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/[id]/page.js",
                                lineNumber: 63,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/product/[id]/page.js",
                            lineNumber: 62,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/product/[id]/page.js",
                    lineNumber: 60,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/product/[id]/page.js",
            lineNumber: 58,
            columnNumber: 4
        }, this);
    }
    // Savatdagi soni
    const quantity = getItemQuantity(product.id);
    // Narxni formatlash
    const formatPrice = (price)=>new Intl.NumberFormat('uz-UZ').format(price);
    // Kategoriya breadcrumbini arrayga aylantirish
    const breadcrumbs = product.category ? product.category.split(' / ') : [
        'Bosh sahifa',
        'Mahsulot'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/product/[id]/page.js",
                lineNumber: 81,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-xs text-gray-500 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-gray-900",
                                children: "Bosh sahifa"
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/[id]/page.js",
                                lineNumber: 86,
                                columnNumber: 6
                            }, this),
                            breadcrumbs.map((crumb, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-3 h-3 mx-2 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 91,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${index === breadcrumbs.length - 1 ? 'text-gray-900 font-medium' : 'hover:text-gray-900 cursor-pointer'}`,
                                            children: crumb
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 92,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/product/[id]/page.js",
                                    lineNumber: 90,
                                    columnNumber: 7
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/product/[id]/page.js",
                        lineNumber: 85,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 flex gap-4 h-fit sticky top-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex flex-col gap-2",
                                        children: product.images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseEnter: ()=>setActiveImage(img.imageUrl),
                                                className: `w-16 h-16 border rounded-lg cursor-pointer overflow-hidden relative transition-all ${activeImage === img.imageUrl ? 'border-orange-500 ring-1 ring-orange-500' : 'border-gray-200 hover:border-gray-400'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: img.imageUrl,
                                                    alt: "preview",
                                                    fill: true,
                                                    className: "object-contain p-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 121,
                                                    columnNumber: 10
                                                }, this)
                                            }, img.id, false, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 112,
                                                columnNumber: 9
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/product/[id]/page.js",
                                        lineNumber: 110,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 relative bg-gray-50 rounded-xl aspect-square border overflow-hidden group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 left-4 z-10 flex flex-col gap-2",
                                                children: [
                                                    product.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        className: "bg-red-500 hover:bg-red-600",
                                                        children: [
                                                            "-",
                                                            product.discount,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 135,
                                                        columnNumber: 10
                                                    }, this),
                                                    product.tags?.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            className: "bg-yellow-400 hover:bg-yellow-500 text-black border-none",
                                                            children: tag
                                                        }, tag, false, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 140,
                                                            columnNumber: 10
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 133,
                                                columnNumber: 8
                                            }, this),
                                            activeImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: activeImage,
                                                alt: product.nomi,
                                                fill: true,
                                                className: "object-contain p-6 mix-blend-multiply group-hover:scale-105 transition-transform duration-500",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 150,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/[id]/page.js",
                                        lineNumber: 132,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/[id]/page.js",
                                lineNumber: 108,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-2",
                                                children: product.nomi
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 164,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-sm flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center text-orange-500 font-bold bg-orange-50 px-2 py-0.5 rounded-md",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        className: "w-4 h-4 fill-current mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                                        lineNumber: 171,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    product.rating
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 170,
                                                                columnNumber: 10
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                onClick: ()=>{
                                                                    setActiveTab('reviews');
                                                                    document.getElementById('details-section').scrollIntoView({
                                                                        behavior: 'smooth'
                                                                    });
                                                                },
                                                                className: "text-gray-500 text-xs flex items-center gap-1 hover:text-blue-600 cursor-pointer decoration-dotted underline",
                                                                children: [
                                                                    product.reviewsCount,
                                                                    " sharh"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 174,
                                                                columnNumber: 10
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400 text-xs",
                                                                children: [
                                                                    product.ordersCount,
                                                                    " ta xarid"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 185,
                                                                columnNumber: 10
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 169,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-gray-400 hover:text-red-500 transition tooltip",
                                                                title: "Saralanganlarga qo'shish",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                                    lineNumber: 195,
                                                                    columnNumber: 11
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 191,
                                                                columnNumber: 10
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-gray-400 hover:text-blue-500 transition",
                                                                title: "Ulashish",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                                    lineNumber: 201,
                                                                    columnNumber: 11
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 197,
                                                                columnNumber: 10
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 190,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 168,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/[id]/page.js",
                                        lineNumber: 163,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                        fileName: "[project]/src/app/product/[id]/page.js",
                                        lineNumber: 207,
                                        columnNumber: 7
                                    }, this),
                                    product.colors && product.colors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium mb-2",
                                                children: "Mavjud ranglar:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 212,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: product.colors.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full border-2 cursor-pointer ring-offset-2 hover:ring-2 ring-gray-200 transition-all shadow-sm",
                                                        style: {
                                                            backgroundColor: color,
                                                            borderColor: index === 0 ? '#f97316' : '#e5e7eb'
                                                        },
                                                        title: "Rangni tanlash"
                                                    }, index, false, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 215,
                                                        columnNumber: 11
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 213,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/[id]/page.js",
                                        lineNumber: 211,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 p-4 rounded-xl text-sm space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-gray-800",
                                                children: "Qisqa xususiyatlar:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 231,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: product.shortSpecs?.map((spec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between border-b border-gray-200 border-dashed pb-1 last:border-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500",
                                                                children: spec.key
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 238,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-gray-900",
                                                                children: spec.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 239,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 234,
                                                        columnNumber: 10
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 232,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setActiveTab('specs');
                                                    document.getElementById('details-section').scrollIntoView({
                                                        behavior: 'smooth'
                                                    });
                                                },
                                                className: "text-blue-600 text-xs font-medium hover:underline flex items-center gap-1 mt-2",
                                                children: [
                                                    "Barcha xususiyatlar ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 254,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 245,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/[id]/page.js",
                                        lineNumber: 230,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/product/[id]/page.js",
                                lineNumber: 162,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-2xl p-5 shadow-sm sticky top-24 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl font-bold text-gray-900",
                                                            children: [
                                                                formatPrice(product.newPrice),
                                                                " so'm"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 265,
                                                            columnNumber: 10
                                                        }, this),
                                                        product.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "destructive",
                                                            className: "text-xs",
                                                            children: [
                                                                "-",
                                                                product.discount,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 269,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 264,
                                                    columnNumber: 9
                                                }, this),
                                                product.oldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400 line-through decoration-red-500",
                                                    children: [
                                                        formatPrice(product.oldPrice),
                                                        " so'm"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 275,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 263,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 mb-6",
                                            children: [
                                                quantity > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between border-2 border-orange-500 rounded-lg h-12 bg-orange-50 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>decreaseCartQuantity(product.id),
                                                            className: "w-12 h-full flex items-center justify-center hover:bg-orange-200 text-orange-600 transition",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {}, void 0, false, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 289,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 285,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-lg text-gray-800",
                                                            children: quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 291,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>increaseCartQuantity(product.id),
                                                            className: "w-12 h-full flex items-center justify-center hover:bg-orange-200 text-orange-600 transition",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {}, void 0, false, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 298,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 294,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 284,
                                                    columnNumber: 10
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold h-12 text-base shadow-none border border-transparent transition-colors",
                                                    onClick: ()=>increaseCartQuantity(product.id),
                                                    children: "Savatga qo'shish"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 302,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "w-full h-12 bg-gray-100 hover:bg-gray-200 border-none text-gray-900 font-medium",
                                                    children: "1 marta bosishda xarid qilish"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 309,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 282,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-xl p-4 space-y-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white p-2 rounded-full h-fit shadow-sm text-blue-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 321,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 320,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-gray-800",
                                                                    children: "Market yetkazib xizmati"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                                    lineNumber: 324,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-green-600 mt-0.5 font-medium",
                                                                    children: "Ertaga, bepul"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                                    lineNumber: 327,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 mt-1",
                                                                    children: "Buyurtma berishga shoshiling"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                                    lineNumber: 330,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 323,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 319,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 335,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-1 -ml-1 rounded transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white p-2 rounded-full h-fit shadow-sm text-gray-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 339,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 338,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-xs text-gray-500",
                                                                    children: "Sotuvchi:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                                    lineNumber: 342,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold text-gray-800",
                                                                            children: product.seller?.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                                            lineNumber: 346,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            className: "w-3 h-3 fill-yellow-400 text-yellow-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                                            lineNumber: 349,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: product.seller?.rating
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                                            lineNumber: 350,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                                    lineNumber: 345,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 341,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-4 h-4 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 355,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 337,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 318,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 bg-green-50 p-2 rounded border border-green-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    className: "w-4 h-4 text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 360,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Xavfsiz xarid kafolati"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 361,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 359,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/product/[id]/page.js",
                                    lineNumber: 261,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/product/[id]/page.js",
                                lineNumber: 260,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/product/[id]/page.js",
                        lineNumber: 106,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "details-section",
                        className: "mt-16 bg-white rounded-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                            value: activeTab,
                            onValueChange: setActiveTab,
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                    className: "w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6 md:gap-8 overflow-x-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "desc",
                                            className: "rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:text-black py-3 px-0 text-base font-medium text-gray-500",
                                            children: "Tovar haqida"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 375,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "specs",
                                            className: "rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:text-black py-3 px-0 text-base font-medium text-gray-500",
                                            children: "Xususiyatlar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 381,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "reviews",
                                            className: "rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:text-black py-3 px-0 text-base font-medium text-gray-500",
                                            children: [
                                                "Sharhlar (",
                                                product.reviewsCount,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 387,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/product/[id]/page.js",
                                    lineNumber: 374,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "desc",
                                    className: "py-8 max-w-4xl animate-in fade-in-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold mb-4 text-gray-900",
                                            children: product.nomi
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 400,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 leading-relaxed mb-6 text-base whitespace-pre-line",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 403,
                                            columnNumber: 8
                                        }, this),
                                        product.advantages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg mb-3",
                                                    children: "Asosiy afzalliklari:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 409,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: product.advantages.map((adv, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                                    lineNumber: 415,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-700",
                                                                    children: adv
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                                    lineNumber: 416,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 414,
                                                            columnNumber: 12
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 412,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 408,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-32 md:h-48 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg",
                                            children: "Tech House - Sifat va Ishonch!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 423,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/product/[id]/page.js",
                                    lineNumber: 396,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "specs",
                                    className: "py-8 max-w-2xl animate-in fade-in-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold mb-6",
                                            children: "Barcha xususiyatlar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 433,
                                            columnNumber: 8
                                        }, this),
                                        product.fullSpecs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-8",
                                            children: product.fullSpecs.map((group, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-900 mb-3 text-base",
                                                            children: group.group
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 438,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-0 border rounded-lg overflow-hidden",
                                                            children: group.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 py-3 px-4 border-b last:border-0 hover:bg-gray-50 transition",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-500 text-sm",
                                                                            children: item.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                                            lineNumber: 447,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium text-gray-900 text-sm",
                                                                            children: item.value
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                                            lineNumber: 450,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                                    lineNumber: 443,
                                                                    columnNumber: 14
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                            lineNumber: 441,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 437,
                                                    columnNumber: 11
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 435,
                                            columnNumber: 9
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500",
                                            children: "Qo'shimcha xususiyatlar kiritilmagan."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/product/[id]/page.js",
                                            lineNumber: 460,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/product/[id]/page.js",
                                    lineNumber: 429,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "reviews",
                                    className: "py-8 animate-in fade-in-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full md:w-1/3 bg-gray-50 p-6 rounded-2xl h-fit border border-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-5xl font-extrabold text-gray-900 mb-2",
                                                        children: product.rating
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 471,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex text-yellow-400 mb-2 gap-1",
                                                        children: [
                                                            1,
                                                            2,
                                                            3,
                                                            4,
                                                            5
                                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: `w-5 h-5 ${s <= Math.round(product.rating) ? 'fill-current' : 'text-gray-300'}`
                                                            }, s, false, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 476,
                                                                columnNumber: 12
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 474,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-sm mb-6 font-medium",
                                                        children: [
                                                            product.reviewsCount,
                                                            " ta sharh asosida"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 486,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        className: "w-full bg-blue-900 hover:bg-blue-800",
                                                        children: "Sharh qoldirish"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 489,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 470,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 space-y-6",
                                                children: product.reviewsList && product.reviewsList.length > 0 ? product.reviewsList.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-b pb-6 last:border-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                        className: "bg-gray-200",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                            children: review.user.charAt(0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/product/[id]/page.js",
                                                                            lineNumber: 504,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                                        lineNumber: 503,
                                                                        columnNumber: 14
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-bold text-sm text-gray-900",
                                                                                children: review.user
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                                lineNumber: 509,
                                                                                columnNumber: 15
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex gap-2 text-xs text-gray-500 items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex text-yellow-400 gap-0.5",
                                                                                        children: [
                                                                                            ...Array(5)
                                                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                                className: `w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`
                                                                                            }, i, false, {
                                                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                                                lineNumber: 515,
                                                                                                columnNumber: 18
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                                                        lineNumber: 513,
                                                                                        columnNumber: 16
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "w-1 h-1 bg-gray-300 rounded-full"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                                                        lineNumber: 525,
                                                                                        columnNumber: 16
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: review.date
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                                                        lineNumber: 526,
                                                                                        columnNumber: 16
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                                lineNumber: 512,
                                                                                columnNumber: 15
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                                        lineNumber: 508,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 502,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-800 leading-relaxed mb-3",
                                                                children: review.comment
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 530,
                                                                columnNumber: 13
                                                            }, this),
                                                            (review.pros || review.cons) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-4 text-xs",
                                                                children: [
                                                                    review.pros && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-1 text-green-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                                                className: "w-3 h-3 mt-0.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                                lineNumber: 537,
                                                                                columnNumber: 17
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: [
                                                                                    "Afzalliklari: ",
                                                                                    review.pros
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                                lineNumber: 538,
                                                                                columnNumber: 17
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                                        lineNumber: 536,
                                                                        columnNumber: 16
                                                                    }, this),
                                                                    review.cons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-1 text-red-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {
                                                                                className: "w-3 h-3 mt-0.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                                lineNumber: 545,
                                                                                columnNumber: 17
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: [
                                                                                    "Kamchiliklari: ",
                                                                                    review.cons
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                                lineNumber: 546,
                                                                                columnNumber: 17
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                                        lineNumber: 544,
                                                                        columnNumber: 16
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                                lineNumber: 534,
                                                                columnNumber: 14
                                                            }, this)
                                                        ]
                                                    }, review.id, true, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 498,
                                                        columnNumber: 12
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-10 text-gray-500 bg-gray-50 rounded-xl border border-dashed",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Hozircha sharhlar yo'q. Birinchi bo'lib fikr bildiring!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/product/[id]/page.js",
                                                        lineNumber: 557,
                                                        columnNumber: 12
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/product/[id]/page.js",
                                                    lineNumber: 556,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/product/[id]/page.js",
                                                lineNumber: 495,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/product/[id]/page.js",
                                        lineNumber: 468,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/product/[id]/page.js",
                                    lineNumber: 467,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/product/[id]/page.js",
                            lineNumber: 369,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/product/[id]/page.js",
                        lineNumber: 368,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/product/[id]/page.js",
                lineNumber: 83,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/product/[id]/page.js",
        lineNumber: 80,
        columnNumber: 3
    }, this);
}
_s(ProductPage, "XP/hZdZ4Y//0FJ3VA3BPJabHTM4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductPage;
var _c;
__turbopack_context__.k.register(_c, "ProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_37c13a9e._.js.map