var Ii = Object.defineProperty;
var Pi = (e, t, n) => t in e ? Ii(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Rt = (e, t, n) => (Pi(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as E from "react";
import _e, { Children as $i, isValidElement as nn, cloneElement as rn, useState as Ni, useEffect as Nr } from "react";
import { useTheme as ki, useMediaQuery as Ai, Box as qt, CssBaseline as Mi, Drawer as ji } from "@mui/material";
import fr from "axios";
import _i from "@emotion/styled";
import { ThemeContext as Di, keyframes as Ft, css as Lo } from "@emotion/react";
import * as Bi from "react-dom";
import Xt from "react-dom";
function Li(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kn = { exports: {} }, wt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function Vi() {
  if (kr)
    return wt;
  kr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var c in s)
        c !== "key" && (i[c] = s[c]);
    } else
      i = s;
    return s = i.ref, {
      $$typeof: e,
      type: o,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return wt.Fragment = t, wt.jsx = n, wt.jsxs = n, wt;
}
var It = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function Fi() {
  return Ar || (Ar = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null)
        return null;
      if (typeof b == "function")
        return b.$$typeof === z ? null : b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case x:
          return "Fragment";
        case $:
          return "Profiler";
        case S:
          return "StrictMode";
        case N:
          return "Suspense";
        case M:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case p:
            return "Portal";
          case v:
            return b.displayName || "Context";
          case O:
            return (b._context.displayName || "Context") + ".Consumer";
          case C:
            var _ = b.render;
            return b = b.displayName, b || (b = _.displayName || _.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case j:
            return _ = b.displayName || null, _ !== null ? _ : e(b.type) || "Memo";
          case B:
            _ = b._payload, b = b._init;
            try {
              return e(b(_));
            } catch {
            }
        }
      return null;
    }
    function t(b) {
      return "" + b;
    }
    function n(b) {
      try {
        t(b);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var V = _.error, U = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return V.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), t(b);
      }
    }
    function o(b) {
      if (b === x)
        return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === B)
        return "<...>";
      try {
        var _ = e(b);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var b = d.A;
      return b === null ? null : b.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(b) {
      if (k.call(b, "key")) {
        var _ = Object.getOwnPropertyDescriptor(b, "key").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function c(b, _) {
      function V() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: V,
        configurable: !0
      });
    }
    function l() {
      var b = e(this.type);
      return Y[b] || (Y[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function u(b, _, V, U, Z, Q) {
      var H = V.ref;
      return b = {
        $$typeof: y,
        type: b,
        key: _,
        props: V,
        _owner: U
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function f(b, _, V, U, Z, Q) {
      var H = _.children;
      if (H !== void 0)
        if (U)
          if (R(H)) {
            for (U = 0; U < H.length; U++)
              m(H[U]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          m(H);
      if (k.call(_, "key")) {
        H = e(b);
        var J = Object.keys(_).filter(function(W) {
          return W !== "key";
        });
        U = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", I[H + U] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          H,
          J,
          H
        ), I[H + U] = !0);
      }
      if (H = null, V !== void 0 && (n(V), H = "" + V), a(_) && (n(_.key), H = "" + _.key), "key" in _) {
        V = {};
        for (var te in _)
          te !== "key" && (V[te] = _[te]);
      } else
        V = _;
      return H && c(
        V,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), u(
        b,
        H,
        V,
        s(),
        Z,
        Q
      );
    }
    function m(b) {
      g(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === B && (b._payload.status === "fulfilled" ? g(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function g(b) {
      return typeof b == "object" && b !== null && b.$$typeof === y;
    }
    var h = _e, y = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), v = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), d = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, R = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var A, Y = {}, F = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), L = w(o(i)), I = {};
    It.Fragment = x, It.jsx = function(b, _, V) {
      var U = 1e4 > d.recentlyCreatedOwnerStacks++;
      return f(
        b,
        _,
        V,
        !1,
        U ? Error("react-stack-top-frame") : F,
        U ? w(o(b)) : L
      );
    }, It.jsxs = function(b, _, V) {
      var U = 1e4 > d.recentlyCreatedOwnerStacks++;
      return f(
        b,
        _,
        V,
        !0,
        U ? Error("react-stack-top-frame") : F,
        U ? w(o(b)) : L
      );
    };
  }()), It;
}
process.env.NODE_ENV === "production" ? Kn.exports = Vi() : Kn.exports = Fi();
var T = Kn.exports;
let mr = !1;
const zi = () => {
  mr = !0;
}, Ui = () => {
  mr = !1;
}, Wi = fr.create(), sn = fr.create({
  baseURL: "https://dev.api.lumora.capital",
  headers: {
    "X-API-Key": "c504bac2ee5655b29385dbf7b7f3df6561b92efcb4adebbccefcda43e65c1fb9",
    "Content-Type": "application/json"
  }
});
sn.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("lumoraAccessToken");
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
sn.interceptors.response.use(
  (e) => e,
  async (e) => {
    var n;
    const t = e.config;
    if (((n = e.response) == null ? void 0 : n.status) === 401 && mr && t && !t._retry) {
      t._retry = !0;
      try {
        const o = localStorage.getItem("lumoraRefreshToken");
        if (!o)
          throw new Error("No refresh token available");
        const s = await Wi.post(
          "https://dev.api.lumora.capital/auth/refresh",
          { refresh_token: o },
          {
            headers: {
              "X-API-Key": "c504bac2ee5655b29385dbf7b7f3df6561b92efcb4adebbccefcda43e65c1fb9",
              "Content-Type": "application/json"
            }
          }
        );
        if (s.data.success && s.data.accessToken)
          return localStorage.setItem(
            "lumoraAccessToken",
            s.data.accessToken
          ), s.data.refreshToken && localStorage.setItem(
            "lumoraRefreshToken",
            s.data.refreshToken
          ), t.headers.Authorization = `Bearer ${s.data.accessToken}`, sn(t);
        throw new Error("Invalid refresh response");
      } catch (o) {
        return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), window.location.href = "/login", Promise.reject(o);
      }
    }
    return Promise.reject(e);
  }
);
const Yi = async () => {
  const e = localStorage.getItem("lumoraRefreshToken");
  if (!e)
    throw new Error("No refresh token available for logout");
  await sn.post("/auth/logout", {
    refresh_token: e
  });
}, Gi = async () => {
  const e = localStorage.getItem("lumoraAccessToken"), t = localStorage.getItem("lumoraRefreshToken");
  if (e)
    return !0;
  if (t)
    try {
      const n = await fr.post(
        "https://dev.api.lumora.capital/auth/refresh",
        { refresh_token: t },
        {
          headers: {
            "X-API-Key": "c504bac2ee5655b29385dbf7b7f3df6561b92efcb4adebbccefcda43e65c1fb9",
            "Content-Type": "application/json"
          }
        }
      );
      if (n.data.success && n.data.accessToken)
        return localStorage.setItem(
          "lumoraAccessToken",
          n.data.accessToken
        ), n.data.refreshToken && localStorage.setItem(
          "lumoraRefreshToken",
          n.data.refreshToken
        ), !0;
    } catch (n) {
      console.error("Token refresh failed:", n);
    }
  return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), window.location.href = "/login", !1;
};
function Ge(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((o) => n.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const gr = "$$material";
function Hi(e) {
  for (var t = 0, n, o = 0, s = e.length; s >= 4; ++o, s -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ki = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function qi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Xi = !1, Qi = /[A-Z]|^ms/g, Ji = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Vo = function(t) {
  return t.charCodeAt(1) === 45;
}, Mr = function(t) {
  return t != null && typeof t != "boolean";
}, kn = /* @__PURE__ */ qi(function(e) {
  return Vo(e) ? e : e.replace(Qi, "-$&").toLowerCase();
}), jr = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ji, function(o, s, i) {
          return Me = {
            name: s,
            styles: i,
            next: Me
          }, s;
        });
  }
  return Ki[t] !== 1 && !Vo(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Zi = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Bt(e, t, n) {
  if (n == null)
    return "";
  var o = n;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var s = n;
      if (s.anim === 1)
        return Me = {
          name: s.name,
          styles: s.styles,
          next: Me
        }, s.name;
      var i = n;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Me = {
              name: a.name,
              styles: a.styles,
              next: Me
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return ea(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Me, u = n(e);
        return Me = l, Bt(e, t, u);
      }
      break;
    }
  }
  var f = n;
  if (t == null)
    return f;
  var m = t[f];
  return m !== void 0 ? m : f;
}
function ea(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var s = 0; s < n.length; s++)
      o += Bt(e, t, n[s]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? o += i + "{" + t[c] + "}" : Mr(c) && (o += kn(i) + ":" + jr(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Xi)
          throw new Error(Zi);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            Mr(a[l]) && (o += kn(i) + ":" + jr(i, a[l]) + ";");
        else {
          var u = Bt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              o += kn(i) + ":" + u + ";";
              break;
            }
            default:
              o += i + "{" + u + "}";
          }
        }
      }
    }
  return o;
}
var _r = /label:\s*([^\s;{]+)\s*(;|$)/g, Me;
function ta(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, s = "";
  Me = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    o = !1, s += Bt(n, t, i);
  else {
    var a = i;
    s += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (s += Bt(n, t, e[c]), o) {
      var l = i;
      s += l[c];
    }
  _r.lastIndex = 0;
  for (var u = "", f; (f = _r.exec(s)) !== null; )
    u += "-" + f[1];
  var m = Hi(s) + u;
  return {
    name: m,
    styles: s,
    next: Me
  };
}
var qn = { exports: {} }, Qt = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function na() {
  if (Dr)
    return re;
  Dr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function O(C) {
    if (typeof C == "object" && C !== null) {
      var N = C.$$typeof;
      switch (N) {
        case t:
          switch (C = C.type, C) {
            case l:
            case u:
            case o:
            case i:
            case s:
            case m:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case c:
                case f:
                case y:
                case h:
                case a:
                  return C;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  function v(C) {
    return O(C) === u;
  }
  return re.AsyncMode = l, re.ConcurrentMode = u, re.ContextConsumer = c, re.ContextProvider = a, re.Element = t, re.ForwardRef = f, re.Fragment = o, re.Lazy = y, re.Memo = h, re.Portal = n, re.Profiler = i, re.StrictMode = s, re.Suspense = m, re.isAsyncMode = function(C) {
    return v(C) || O(C) === l;
  }, re.isConcurrentMode = v, re.isContextConsumer = function(C) {
    return O(C) === c;
  }, re.isContextProvider = function(C) {
    return O(C) === a;
  }, re.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, re.isForwardRef = function(C) {
    return O(C) === f;
  }, re.isFragment = function(C) {
    return O(C) === o;
  }, re.isLazy = function(C) {
    return O(C) === y;
  }, re.isMemo = function(C) {
    return O(C) === h;
  }, re.isPortal = function(C) {
    return O(C) === n;
  }, re.isProfiler = function(C) {
    return O(C) === i;
  }, re.isStrictMode = function(C) {
    return O(C) === s;
  }, re.isSuspense = function(C) {
    return O(C) === m;
  }, re.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === o || C === u || C === i || C === s || C === m || C === g || typeof C == "object" && C !== null && (C.$$typeof === y || C.$$typeof === h || C.$$typeof === a || C.$$typeof === c || C.$$typeof === f || C.$$typeof === x || C.$$typeof === S || C.$$typeof === $ || C.$$typeof === p);
  }, re.typeOf = O, re;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br;
function ra() {
  return Br || (Br = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function O(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === o || D === u || D === i || D === s || D === m || D === g || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === h || D.$$typeof === a || D.$$typeof === c || D.$$typeof === f || D.$$typeof === x || D.$$typeof === S || D.$$typeof === $ || D.$$typeof === p);
    }
    function v(D) {
      if (typeof D == "object" && D !== null) {
        var me = D.$$typeof;
        switch (me) {
          case t:
            var xe = D.type;
            switch (xe) {
              case l:
              case u:
              case o:
              case i:
              case s:
              case m:
                return xe;
              default:
                var Pe = xe && xe.$$typeof;
                switch (Pe) {
                  case c:
                  case f:
                  case y:
                  case h:
                  case a:
                    return Pe;
                  default:
                    return me;
                }
            }
          case n:
            return me;
        }
      }
    }
    var C = l, N = u, M = c, j = a, B = t, G = f, z = o, d = y, k = h, R = n, w = i, A = s, Y = m, F = !1;
    function L(D) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(D) || v(D) === l;
    }
    function I(D) {
      return v(D) === u;
    }
    function b(D) {
      return v(D) === c;
    }
    function _(D) {
      return v(D) === a;
    }
    function V(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function U(D) {
      return v(D) === f;
    }
    function Z(D) {
      return v(D) === o;
    }
    function Q(D) {
      return v(D) === y;
    }
    function H(D) {
      return v(D) === h;
    }
    function J(D) {
      return v(D) === n;
    }
    function te(D) {
      return v(D) === i;
    }
    function W(D) {
      return v(D) === s;
    }
    function ee(D) {
      return v(D) === m;
    }
    oe.AsyncMode = C, oe.ConcurrentMode = N, oe.ContextConsumer = M, oe.ContextProvider = j, oe.Element = B, oe.ForwardRef = G, oe.Fragment = z, oe.Lazy = d, oe.Memo = k, oe.Portal = R, oe.Profiler = w, oe.StrictMode = A, oe.Suspense = Y, oe.isAsyncMode = L, oe.isConcurrentMode = I, oe.isContextConsumer = b, oe.isContextProvider = _, oe.isElement = V, oe.isForwardRef = U, oe.isFragment = Z, oe.isLazy = Q, oe.isMemo = H, oe.isPortal = J, oe.isProfiler = te, oe.isStrictMode = W, oe.isSuspense = ee, oe.isValidElementType = O, oe.typeOf = v;
  }()), oe;
}
var Lr;
function Fo() {
  return Lr || (Lr = 1, process.env.NODE_ENV === "production" ? Qt.exports = na() : Qt.exports = ra()), Qt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var An, Vr;
function oa() {
  if (Vr)
    return An;
  Vr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return An = s() ? Object.assign : function(i, a) {
    for (var c, l = o(i), u, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var m in c)
        t.call(c, m) && (l[m] = c[m]);
      if (e) {
        u = e(c);
        for (var g = 0; g < u.length; g++)
          n.call(c, u[g]) && (l[u[g]] = c[u[g]]);
      }
    }
    return l;
  }, An;
}
var Mn, Fr;
function hr() {
  if (Fr)
    return Mn;
  Fr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mn = e, Mn;
}
var jn, zr;
function zo() {
  return zr || (zr = 1, jn = Function.call.bind(Object.prototype.hasOwnProperty)), jn;
}
var _n, Ur;
function sa() {
  if (Ur)
    return _n;
  Ur = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = hr(), n = {}, o = zo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function s(i, a, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (o(i, f)) {
          var m;
          try {
            if (typeof i[f] != "function") {
              var g = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = i[f](a, f, l, c, null, t);
          } catch (y) {
            m = y;
          }
          if (m && !(m instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var h = u ? u() : "";
            e(
              "Failed " + c + " type: " + m.message + (h ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, _n = s, _n;
}
var Dn, Wr;
function ia() {
  if (Wr)
    return Dn;
  Wr = 1;
  var e = Fo(), t = oa(), n = hr(), o = zo(), s = sa(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Dn = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(I) {
      var b = I && (u && I[u] || I[f]);
      if (typeof b == "function")
        return b;
    }
    var g = "<<anonymous>>", h = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: $(),
      arrayOf: O,
      element: v(),
      elementType: C(),
      instanceOf: N,
      node: G(),
      objectOf: j,
      oneOf: M,
      oneOfType: B,
      shape: d,
      exact: k
    };
    function y(I, b) {
      return I === b ? I !== 0 || 1 / I === 1 / b : I !== I && b !== b;
    }
    function p(I, b) {
      this.message = I, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function x(I) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, _ = 0;
      function V(Z, Q, H, J, te, W, ee) {
        if (J = J || g, W = W || H, ee !== n) {
          if (l) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var me = J + ":" + H;
            !b[me] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[me] = !0, _++);
          }
        }
        return Q[H] == null ? Z ? Q[H] === null ? new p("The " + te + " `" + W + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new p("The " + te + " `" + W + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : I(Q, H, J, te, W);
      }
      var U = V.bind(null, !1);
      return U.isRequired = V.bind(null, !0), U;
    }
    function S(I) {
      function b(_, V, U, Z, Q, H) {
        var J = _[V], te = A(J);
        if (te !== I) {
          var W = Y(J);
          return new p(
            "Invalid " + Z + " `" + Q + "` of type " + ("`" + W + "` supplied to `" + U + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return x(b);
    }
    function $() {
      return x(a);
    }
    function O(I) {
      function b(_, V, U, Z, Q) {
        if (typeof I != "function")
          return new p("Property `" + Q + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var H = _[V];
        if (!Array.isArray(H)) {
          var J = A(H);
          return new p("Invalid " + Z + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected an array."));
        }
        for (var te = 0; te < H.length; te++) {
          var W = I(H, te, U, Z, Q + "[" + te + "]", n);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return x(b);
    }
    function v() {
      function I(b, _, V, U, Z) {
        var Q = b[_];
        if (!c(Q)) {
          var H = A(Q);
          return new p("Invalid " + U + " `" + Z + "` of type " + ("`" + H + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(I);
    }
    function C() {
      function I(b, _, V, U, Z) {
        var Q = b[_];
        if (!e.isValidElementType(Q)) {
          var H = A(Q);
          return new p("Invalid " + U + " `" + Z + "` of type " + ("`" + H + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(I);
    }
    function N(I) {
      function b(_, V, U, Z, Q) {
        if (!(_[V] instanceof I)) {
          var H = I.name || g, J = L(_[V]);
          return new p("Invalid " + Z + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return x(b);
    }
    function M(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function b(_, V, U, Z, Q) {
        for (var H = _[V], J = 0; J < I.length; J++)
          if (y(H, I[J]))
            return null;
        var te = JSON.stringify(I, function(ee, D) {
          var me = Y(D);
          return me === "symbol" ? String(D) : D;
        });
        return new p("Invalid " + Z + " `" + Q + "` of value `" + String(H) + "` " + ("supplied to `" + U + "`, expected one of " + te + "."));
      }
      return x(b);
    }
    function j(I) {
      function b(_, V, U, Z, Q) {
        if (typeof I != "function")
          return new p("Property `" + Q + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var H = _[V], J = A(H);
        if (J !== "object")
          return new p("Invalid " + Z + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected an object."));
        for (var te in H)
          if (o(H, te)) {
            var W = I(H, te, U, Z, Q + "." + te, n);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return x(b);
    }
    function B(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var b = 0; b < I.length; b++) {
        var _ = I[b];
        if (typeof _ != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + F(_) + " at index " + b + "."
          ), a;
      }
      function V(U, Z, Q, H, J) {
        for (var te = [], W = 0; W < I.length; W++) {
          var ee = I[W], D = ee(U, Z, Q, H, J, n);
          if (D == null)
            return null;
          D.data && o(D.data, "expectedType") && te.push(D.data.expectedType);
        }
        var me = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new p("Invalid " + H + " `" + J + "` supplied to " + ("`" + Q + "`" + me + "."));
      }
      return x(V);
    }
    function G() {
      function I(b, _, V, U, Z) {
        return R(b[_]) ? null : new p("Invalid " + U + " `" + Z + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return x(I);
    }
    function z(I, b, _, V, U) {
      return new p(
        (I || "React class") + ": " + b + " type `" + _ + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function d(I) {
      function b(_, V, U, Z, Q) {
        var H = _[V], J = A(H);
        if (J !== "object")
          return new p("Invalid " + Z + " `" + Q + "` of type `" + J + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var te in I) {
          var W = I[te];
          if (typeof W != "function")
            return z(U, Z, Q, te, Y(W));
          var ee = W(H, te, U, Z, Q + "." + te, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return x(b);
    }
    function k(I) {
      function b(_, V, U, Z, Q) {
        var H = _[V], J = A(H);
        if (J !== "object")
          return new p("Invalid " + Z + " `" + Q + "` of type `" + J + "` " + ("supplied to `" + U + "`, expected `object`."));
        var te = t({}, _[V], I);
        for (var W in te) {
          var ee = I[W];
          if (o(I, W) && typeof ee != "function")
            return z(U, Z, Q, W, Y(ee));
          if (!ee)
            return new p(
              "Invalid " + Z + " `" + Q + "` key `" + W + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(_[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var D = ee(H, W, U, Z, Q + "." + W, n);
          if (D)
            return D;
        }
        return null;
      }
      return x(b);
    }
    function R(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(R);
          if (I === null || c(I))
            return !0;
          var b = m(I);
          if (b) {
            var _ = b.call(I), V;
            if (b !== I.entries) {
              for (; !(V = _.next()).done; )
                if (!R(V.value))
                  return !1;
            } else
              for (; !(V = _.next()).done; ) {
                var U = V.value;
                if (U && !R(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function w(I, b) {
      return I === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function A(I) {
      var b = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : w(b, I) ? "symbol" : b;
    }
    function Y(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var b = A(I);
      if (b === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function F(I) {
      var b = Y(I);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function L(I) {
      return !I.constructor || !I.constructor.name ? g : I.constructor.name;
    }
    return h.checkPropTypes = s, h.resetWarningCache = s.resetWarningCache, h.PropTypes = h, h;
  }, Dn;
}
var Bn, Yr;
function aa() {
  if (Yr)
    return Bn;
  Yr = 1;
  var e = hr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Bn = function() {
    function o(a, c, l, u, f, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    o.isRequired = o;
    function s() {
      return o;
    }
    var i = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: s,
      element: o,
      elementType: o,
      instanceOf: s,
      node: o,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Bn;
}
if (process.env.NODE_ENV !== "production") {
  var ca = Fo(), la = !0;
  qn.exports = ia()(ca.isElement, la);
} else
  qn.exports = aa()();
var ua = qn.exports;
const r = /* @__PURE__ */ Li(ua);
/**
 * @mui/styled-engine v7.3.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Uo(e, t) {
  const n = _i(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const s = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${s})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((i) => i === void 0) && console.error(`MUI: the styled(${s})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
function da(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Gr = [];
function ot(e) {
  return Gr[0] = e, ta(Gr);
}
var Xn = { exports: {} }, ue = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function pa() {
  if (Hr)
    return ue;
  Hr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function y(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case n:
            case s:
            case o:
            case l:
            case u:
            case g:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case c:
                case m:
                case f:
                  return p;
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return ue.ContextConsumer = i, ue.ContextProvider = a, ue.Element = e, ue.ForwardRef = c, ue.Fragment = n, ue.Lazy = m, ue.Memo = f, ue.Portal = t, ue.Profiler = s, ue.StrictMode = o, ue.Suspense = l, ue.SuspenseList = u, ue.isContextConsumer = function(p) {
    return y(p) === i;
  }, ue.isContextProvider = function(p) {
    return y(p) === a;
  }, ue.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ue.isForwardRef = function(p) {
    return y(p) === c;
  }, ue.isFragment = function(p) {
    return y(p) === n;
  }, ue.isLazy = function(p) {
    return y(p) === m;
  }, ue.isMemo = function(p) {
    return y(p) === f;
  }, ue.isPortal = function(p) {
    return y(p) === t;
  }, ue.isProfiler = function(p) {
    return y(p) === s;
  }, ue.isStrictMode = function(p) {
    return y(p) === o;
  }, ue.isSuspense = function(p) {
    return y(p) === l;
  }, ue.isSuspenseList = function(p) {
    return y(p) === u;
  }, ue.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === s || p === o || p === l || p === u || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === f || p.$$typeof === a || p.$$typeof === i || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, ue.typeOf = y, ue;
}
var de = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function fa() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var x = p.$$typeof;
        switch (x) {
          case t:
            switch (p = p.type, p) {
              case o:
              case i:
              case s:
              case u:
              case f:
              case h:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case c:
                  case l:
                  case g:
                  case m:
                    return p;
                  case a:
                    return p;
                  default:
                    return x;
                }
            }
          case n:
            return x;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    de.ContextConsumer = a, de.ContextProvider = c, de.Element = t, de.ForwardRef = l, de.Fragment = o, de.Lazy = g, de.Memo = m, de.Portal = n, de.Profiler = i, de.StrictMode = s, de.Suspense = u, de.SuspenseList = f, de.isContextConsumer = function(p) {
      return e(p) === a;
    }, de.isContextProvider = function(p) {
      return e(p) === c;
    }, de.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, de.isForwardRef = function(p) {
      return e(p) === l;
    }, de.isFragment = function(p) {
      return e(p) === o;
    }, de.isLazy = function(p) {
      return e(p) === g;
    }, de.isMemo = function(p) {
      return e(p) === m;
    }, de.isPortal = function(p) {
      return e(p) === n;
    }, de.isProfiler = function(p) {
      return e(p) === i;
    }, de.isStrictMode = function(p) {
      return e(p) === s;
    }, de.isSuspense = function(p) {
      return e(p) === u;
    }, de.isSuspenseList = function(p) {
      return e(p) === f;
    }, de.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === o || p === i || p === s || p === u || p === f || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === m || p.$$typeof === c || p.$$typeof === a || p.$$typeof === l || p.$$typeof === y || p.getModuleId !== void 0);
    }, de.typeOf = e;
  }()), de;
}
process.env.NODE_ENV === "production" ? Xn.exports = pa() : Xn.exports = fa();
var st = Xn.exports;
function je(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Wo(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || st.isValidElementType(e) || !je(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Wo(e[n]);
  }), t;
}
function Te(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? {
    ...e
  } : e;
  return je(e) && je(t) && Object.keys(t).forEach((s) => {
    /* @__PURE__ */ E.isValidElement(t[s]) || st.isValidElementType(t[s]) ? o[s] = t[s] : je(t[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, s) && je(e[s]) ? o[s] = Te(e[s], t[s], n) : n.clone ? o[s] = je(t[s]) ? Wo(t[s]) : t[s] : o[s] = t[s];
  }), o;
}
const ma = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function ga(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: o = 5,
    ...s
  } = e, i = ma(t), a = Object.keys(i);
  function c(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n})`;
  }
  function l(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - o / 100}${n})`;
  }
  function u(g, h) {
    const y = a.indexOf(h);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : h) - o / 100}${n})`;
  }
  function f(g) {
    return a.indexOf(g) + 1 < a.length ? u(g, a[a.indexOf(g) + 1]) : c(g);
  }
  function m(g) {
    const h = a.indexOf(g);
    return h === 0 ? c(a[1]) : h === a.length - 1 ? l(a[h]) : u(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: l,
    between: u,
    only: f,
    not: m,
    unit: n,
    ...s
  };
}
function qr(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, s) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = o.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = s.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return n.length ? n.reduce((o, s) => {
    const i = t[s];
    return delete o[s], o[s] = i, o;
  }, {
    ...t
  }) : t;
}
function ha(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function ya(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ge(18, `(${t})`));
    return null;
  }
  const [, o, s] = n, i = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(s).up(i);
}
function ba(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function n(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const l = t(e.breakpoints.not(...c), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const o = {}, s = (i) => (n(o, i), o);
  return n(s), {
    ...e,
    containerQueries: s
  };
}
const va = {
  borderRadius: 4
}, xa = va, Ta = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.string, r.object, r.array]) : {}, Ke = Ta;
function _t(e, t) {
  return t ? Te(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const yn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Xr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${yn[e]}px)`
}, Ea = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : yn[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function ke(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const i = o.breakpoints || Xr;
    return t.reduce((a, c, l) => (a[i.up(i.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = o.breakpoints || Xr;
    return Object.keys(t).reduce((a, c) => {
      if (ha(i.keys, c)) {
        const l = ya(o.containerQueries ? o : Ea, c);
        l && (a[l] = n(t[c], c));
      } else if (Object.keys(i.values || yn).includes(c)) {
        const l = i.up(c);
        a[l] = n(t[c], c);
      } else {
        const l = c;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Yo(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((o, s) => {
    const i = e.up(s);
    return o[i] = {}, o;
  }, {})) || {};
}
function Qn(e, t) {
  return e.reduce((n, o) => {
    const s = n[o];
    return (!s || Object.keys(s).length === 0) && delete n[o], n;
  }, t);
}
function Ca(e, ...t) {
  const n = Yo(e), o = [n, ...t].reduce((s, i) => Te(s, i), {});
  return Qn(Object.keys(n), o);
}
function Sa(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, o = Object.keys(t);
  return Array.isArray(e) ? o.forEach((s, i) => {
    i < e.length && (n[s] = !0);
  }) : o.forEach((s) => {
    e[s] != null && (n[s] = !0);
  }), n;
}
function Ln({
  values: e,
  breakpoints: t,
  base: n
}) {
  const o = n || Sa(e, t), s = Object.keys(o);
  if (s.length === 0)
    return e;
  let i;
  return s.reduce((a, c, l) => (Array.isArray(e) ? (a[c] = e[l] != null ? e[l] : e[i], i = l) : typeof e == "object" ? (a[c] = e[c] != null ? e[c] : e[i], i = c) : a[c] = e, a), {});
}
function q(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ge(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function bn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((s, i) => s && s[i] ? s[i] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, s) => o && o[s] != null ? o[s] : null, e);
}
function an(e, t, n, o = n) {
  let s;
  return typeof e == "function" ? s = e(n) : Array.isArray(e) ? s = e[n] || o : s = bn(e, n) || o, t && (s = t(s, o, e)), s;
}
function ve(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: s
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, u = bn(l, o) || {};
    return ke(a, c, (m) => {
      let g = an(u, s, m);
      return m === g && typeof m == "string" && (g = an(u, s, `${t}${m === "default" ? "" : q(m)}`, m)), n === !1 ? g : {
        [n]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ke
  } : {}, i.filterProps = [t], i;
}
function Oa(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ra = {
  m: "margin",
  p: "padding"
}, wa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Qr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ia = Oa((e) => {
  if (e.length > 2)
    if (Qr[e])
      e = Qr[e];
    else
      return [e];
  const [t, n] = e.split(""), o = Ra[t], s = wa[n] || "";
  return Array.isArray(s) ? s.map((i) => o + i) : [o + s];
}), vn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], xn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Pa = [...vn, ...xn];
function zt(e, t, n, o) {
  const s = bn(e, t, !0) ?? n;
  return typeof s == "number" || typeof s == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${i}.`), typeof s == "string" ? s.startsWith("var(") && i === 0 ? 0 : s.startsWith("var(") && i === 1 ? s : `calc(${i} * ${s})` : s * i) : Array.isArray(s) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = s[a];
    return i >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Tn(e) {
  return zt(e, "spacing", 8, "spacing");
}
function it(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function $a(e, t) {
  return (n) => e.reduce((o, s) => (o[s] = it(t, n), o), {});
}
function Na(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const s = Ia(n), i = $a(s, o), a = e[n];
  return ke(e, a, i);
}
function Go(e, t) {
  const n = Tn(e.theme);
  return Object.keys(e).map((o) => Na(e, t, o, n)).reduce(_t, {});
}
function he(e) {
  return Go(e, vn);
}
he.propTypes = process.env.NODE_ENV !== "production" ? vn.reduce((e, t) => (e[t] = Ke, e), {}) : {};
he.filterProps = vn;
function ye(e) {
  return Go(e, xn);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? xn.reduce((e, t) => (e[t] = Ke, e), {}) : {};
ye.filterProps = xn;
process.env.NODE_ENV !== "production" && Pa.reduce((e, t) => (e[t] = Ke, e), {});
function Ho(e = 8, t = Tn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function En(...e) {
  const t = e.reduce((o, s) => (s.filterProps.forEach((i) => {
    o[i] = s;
  }), o), {}), n = (o) => Object.keys(o).reduce((s, i) => t[i] ? _t(s, t[i](o)) : s, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, s) => Object.assign(o, s.propTypes), {}) : {}, n.filterProps = e.reduce((o, s) => o.concat(s.filterProps), []), n;
}
function we(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ie(e, t) {
  return ve({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ka = Ie("border", we), Aa = Ie("borderTop", we), Ma = Ie("borderRight", we), ja = Ie("borderBottom", we), _a = Ie("borderLeft", we), Da = Ie("borderColor"), Ba = Ie("borderTopColor"), La = Ie("borderRightColor"), Va = Ie("borderBottomColor"), Fa = Ie("borderLeftColor"), za = Ie("outline", we), Ua = Ie("outlineColor"), Cn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = zt(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: it(t, o)
    });
    return ke(e, e.borderRadius, n);
  }
  return null;
};
Cn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ke
} : {};
Cn.filterProps = ["borderRadius"];
En(ka, Aa, Ma, ja, _a, Da, Ba, La, Va, Fa, Cn, za, Ua);
const Sn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = zt(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: it(t, o)
    });
    return ke(e, e.gap, n);
  }
  return null;
};
Sn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ke
} : {};
Sn.filterProps = ["gap"];
const On = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = zt(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: it(t, o)
    });
    return ke(e, e.columnGap, n);
  }
  return null;
};
On.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ke
} : {};
On.filterProps = ["columnGap"];
const Rn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = zt(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: it(t, o)
    });
    return ke(e, e.rowGap, n);
  }
  return null;
};
Rn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ke
} : {};
Rn.filterProps = ["rowGap"];
const Wa = ve({
  prop: "gridColumn"
}), Ya = ve({
  prop: "gridRow"
}), Ga = ve({
  prop: "gridAutoFlow"
}), Ha = ve({
  prop: "gridAutoColumns"
}), Ka = ve({
  prop: "gridAutoRows"
}), qa = ve({
  prop: "gridTemplateColumns"
}), Xa = ve({
  prop: "gridTemplateRows"
}), Qa = ve({
  prop: "gridTemplateAreas"
}), Ja = ve({
  prop: "gridArea"
});
En(Sn, On, Rn, Wa, Ya, Ga, Ha, Ka, qa, Xa, Qa, Ja);
function yt(e, t) {
  return t === "grey" ? t : e;
}
const Za = ve({
  prop: "color",
  themeKey: "palette",
  transform: yt
}), ec = ve({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: yt
}), tc = ve({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: yt
});
En(Za, ec, tc);
function Se(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const nc = ve({
  prop: "width",
  transform: Se
}), yr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var s, i, a, c, l;
      const o = ((a = (i = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[n]) || yn[n];
      return o ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: Se(n)
      };
    };
    return ke(e, e.maxWidth, t);
  }
  return null;
};
yr.filterProps = ["maxWidth"];
const rc = ve({
  prop: "minWidth",
  transform: Se
}), oc = ve({
  prop: "height",
  transform: Se
}), sc = ve({
  prop: "maxHeight",
  transform: Se
}), ic = ve({
  prop: "minHeight",
  transform: Se
});
ve({
  prop: "size",
  cssProperty: "width",
  transform: Se
});
ve({
  prop: "size",
  cssProperty: "height",
  transform: Se
});
const ac = ve({
  prop: "boxSizing"
});
En(nc, yr, rc, oc, sc, ic, ac);
const cc = {
  // borders
  border: {
    themeKey: "borders",
    transform: we
  },
  borderTop: {
    themeKey: "borders",
    transform: we
  },
  borderRight: {
    themeKey: "borders",
    transform: we
  },
  borderBottom: {
    themeKey: "borders",
    transform: we
  },
  borderLeft: {
    themeKey: "borders",
    transform: we
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: we
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Cn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: yt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: yt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: yt
  },
  // spacing
  p: {
    style: ye
  },
  pt: {
    style: ye
  },
  pr: {
    style: ye
  },
  pb: {
    style: ye
  },
  pl: {
    style: ye
  },
  px: {
    style: ye
  },
  py: {
    style: ye
  },
  padding: {
    style: ye
  },
  paddingTop: {
    style: ye
  },
  paddingRight: {
    style: ye
  },
  paddingBottom: {
    style: ye
  },
  paddingLeft: {
    style: ye
  },
  paddingX: {
    style: ye
  },
  paddingY: {
    style: ye
  },
  paddingInline: {
    style: ye
  },
  paddingInlineStart: {
    style: ye
  },
  paddingInlineEnd: {
    style: ye
  },
  paddingBlock: {
    style: ye
  },
  paddingBlockStart: {
    style: ye
  },
  paddingBlockEnd: {
    style: ye
  },
  m: {
    style: he
  },
  mt: {
    style: he
  },
  mr: {
    style: he
  },
  mb: {
    style: he
  },
  ml: {
    style: he
  },
  mx: {
    style: he
  },
  my: {
    style: he
  },
  margin: {
    style: he
  },
  marginTop: {
    style: he
  },
  marginRight: {
    style: he
  },
  marginBottom: {
    style: he
  },
  marginLeft: {
    style: he
  },
  marginX: {
    style: he
  },
  marginY: {
    style: he
  },
  marginInline: {
    style: he
  },
  marginInlineStart: {
    style: he
  },
  marginInlineEnd: {
    style: he
  },
  marginBlock: {
    style: he
  },
  marginBlockStart: {
    style: he
  },
  marginBlockEnd: {
    style: he
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Sn
  },
  rowGap: {
    style: Rn
  },
  columnGap: {
    style: On
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Se
  },
  maxWidth: {
    style: yr
  },
  minWidth: {
    transform: Se
  },
  height: {
    transform: Se
  },
  maxHeight: {
    transform: Se
  },
  minHeight: {
    transform: Se
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Ut = cc;
function lc(...e) {
  const t = e.reduce((o, s) => o.concat(Object.keys(s)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function uc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dc() {
  function e(n, o, s, i) {
    const a = {
      [n]: o,
      theme: s
    }, c = i[n];
    if (!c)
      return {
        [n]: o
      };
    const {
      cssProperty: l = n,
      themeKey: u,
      transform: f,
      style: m
    } = c;
    if (o == null)
      return null;
    if (u === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const g = bn(s, u) || {};
    return m ? m(a) : ke(a, o, (y) => {
      let p = an(g, f, y);
      return y === p && typeof y == "string" && (p = an(g, f, `${n}${y === "default" ? "" : q(y)}`, y)), l === !1 ? p : {
        [l]: p
      };
    });
  }
  function t(n) {
    const {
      sx: o,
      theme: s = {},
      nested: i
    } = n || {};
    if (!o)
      return null;
    const a = s.unstable_sxConfig ?? Ut;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(s);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const f = Yo(s.breakpoints), m = Object.keys(f);
      let g = f;
      return Object.keys(u).forEach((h) => {
        const y = uc(u[h], s);
        if (y != null)
          if (typeof y == "object")
            if (a[h])
              g = _t(g, e(h, y, s, a));
            else {
              const p = ke({
                theme: s
              }, y, (x) => ({
                [h]: x
              }));
              lc(p, y) ? g[h] = t({
                sx: y,
                theme: s,
                nested: !0
              }) : g = _t(g, p);
            }
          else
            g = _t(g, e(h, y, s, a));
      }), !i && s.modularCssLayers ? {
        "@layer sx": qr(s, Qn(m, g))
      } : qr(s, Qn(m, g));
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const Ko = dc();
Ko.filterProps = ["sx"];
const xt = Ko;
function pc(e, t) {
  var o;
  const n = this;
  if (n.vars) {
    if (!((o = n.colorSchemes) != null && o[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let s = n.getColorSchemeSelector(e);
    return s === "&" ? t : ((s.includes("data-") || s.includes(".")) && (s = `*:where(${s.replace(/\s*&$/, "")}) &`), {
      [s]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function wn(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: s,
    shape: i = {},
    ...a
  } = e, c = ga(n), l = Ho(s);
  let u = Te({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: l,
    shape: {
      ...xa,
      ...i
    }
  }, a);
  return u = ba(u), u.applyStyles = pc, u = t.reduce((f, m) => Te(f, m), u), u.unstable_sxConfig = {
    ...Ut,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return xt({
      sx: m,
      theme: this
    });
  }, u;
}
function fc(e) {
  return Object.keys(e).length === 0;
}
function mc(e = null) {
  const t = E.useContext(Di);
  return !t || fc(t) ? e : t;
}
const gc = wn();
function br(e = gc) {
  return mc(e);
}
const hc = (e) => {
  var o;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((o = e == null ? void 0 : e.theme) == null ? void 0 : o.unstable_sxConfig) ?? Ut;
  return Object.keys(e).forEach((s) => {
    n[s] ? t.systemProps[s] = e[s] : t.otherProps[s] = e[s];
  }), t;
};
function vr(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: o,
    otherProps: s
  } = hc(n);
  let i;
  return Array.isArray(t) ? i = [o, ...t] : typeof t == "function" ? i = (...a) => {
    const c = t(...a);
    return je(c) ? {
      ...o,
      ...c
    } : o;
  } : i = {
    ...o,
    ...t
  }, {
    ...s,
    sx: i
  };
}
const Jr = (e) => e, yc = () => {
  let e = Jr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Jr;
    }
  };
}, bc = yc(), qo = bc;
function Xo(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = Xo(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function X() {
  for (var e, t, n = 0, o = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = Xo(e)) && (o && (o += " "), o += t);
  return o;
}
function vc(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: o = "MuiBox-root",
    generateClassName: s
  } = e, i = Uo("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(xt);
  return /* @__PURE__ */ E.forwardRef(function(l, u) {
    const f = br(n), {
      className: m,
      component: g = "div",
      ...h
    } = vr(l);
    return /* @__PURE__ */ T.jsx(i, {
      as: g,
      ref: u,
      className: X(m, s ? s(o) : o),
      theme: t && f[t] || f,
      ...h
    });
  });
}
const xc = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function se(e, t, n = "Mui") {
  const o = xc[t];
  return o ? `${n}-${o}` : `${qo.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const o = {};
  return t.forEach((s) => {
    o[s] = se(e, s, n);
  }), o;
}
function Qo(e, t = "") {
  return e.displayName || e.name || t;
}
function Zr(e, t, n) {
  const o = Qo(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function Tc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Qo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case st.ForwardRef:
          return Zr(e, e.render, "ForwardRef");
        case st.Memo:
          return Zr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Jo(e) {
  const {
    variants: t,
    ...n
  } = e, o = {
    variants: t,
    style: ot(n),
    isProcessed: !0
  };
  return o.style === n || t && t.forEach((s) => {
    typeof s.style != "function" && (s.style = ot(s.style));
  }), o;
}
const Ec = wn();
function Vn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function nt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Cc(e) {
  return e ? (t, n) => n[e] : null;
}
function Sc(e, t, n) {
  e.theme = wc(e.theme) ? n : e.theme[t] || e.theme;
}
function on(e, t, n) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o))
    return o.flatMap((s) => on(e, s, n));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let s;
    if (o.isProcessed)
      s = n ? nt(o.style, n) : o.style;
    else {
      const {
        variants: i,
        ...a
      } = o;
      s = n ? nt(ot(a), n) : a;
    }
    return Zo(e, o.variants, [s], n);
  }
  return o != null && o.isProcessed ? n ? nt(ot(o.style), n) : o.style : n ? nt(ot(o), n) : o;
}
function Zo(e, t, n = [], o = void 0) {
  var i;
  let s;
  e:
    for (let a = 0; a < t.length; a += 1) {
      const c = t[a];
      if (typeof c.props == "function") {
        if (s ?? (s = {
          ...e,
          ...e.ownerState,
          ownerState: e.ownerState
        }), !c.props(s))
          continue;
      } else
        for (const l in c.props)
          if (e[l] !== c.props[l] && ((i = e.ownerState) == null ? void 0 : i[l]) !== c.props[l])
            continue e;
      typeof c.style == "function" ? (s ?? (s = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), n.push(o ? nt(ot(c.style(s)), o) : c.style(s))) : n.push(o ? nt(ot(c.style), o) : c.style);
    }
  return n;
}
function es(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ec,
    rootShouldForwardProp: o = Vn,
    slotShouldForwardProp: s = Vn
  } = e;
  function i(c) {
    Sc(c, t, n);
  }
  return (c, l = {}) => {
    da(c, (N) => N.filter((M) => M !== xt));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: m,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = Cc(ts(f)),
      ...y
    } = l, p = u && u.startsWith("Mui") || f ? "components" : "custom", x = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), S = g || !1;
    let $ = Vn;
    f === "Root" || f === "root" ? $ = o : f ? $ = s : Ic(c) && ($ = void 0);
    const O = Uo(c, {
      shouldForwardProp: $,
      label: Rc(u, f),
      ...y
    }), v = (N) => {
      if (N.__emotion_real === N)
        return N;
      if (typeof N == "function")
        return function(j) {
          return on(j, N, j.theme.modularCssLayers ? p : void 0);
        };
      if (je(N)) {
        const M = Jo(N);
        return function(B) {
          return M.variants ? on(B, M, B.theme.modularCssLayers ? p : void 0) : B.theme.modularCssLayers ? nt(M.style, p) : M.style;
        };
      }
      return N;
    }, C = (...N) => {
      const M = [], j = N.map(v), B = [];
      if (M.push(i), u && h && B.push(function(k) {
        var Y, F;
        const w = (F = (Y = k.theme.components) == null ? void 0 : Y[u]) == null ? void 0 : F.styleOverrides;
        if (!w)
          return null;
        const A = {};
        for (const L in w)
          A[L] = on(k, w[L], k.theme.modularCssLayers ? "theme" : void 0);
        return h(k, A);
      }), u && !x && B.push(function(k) {
        var A, Y;
        const R = k.theme, w = (Y = (A = R == null ? void 0 : R.components) == null ? void 0 : A[u]) == null ? void 0 : Y.variants;
        return w ? Zo(k, w, [], k.theme.modularCssLayers ? "theme" : void 0) : null;
      }), S || B.push(xt), Array.isArray(j[0])) {
        const d = j.shift(), k = new Array(M.length).fill(""), R = new Array(B.length).fill("");
        let w;
        w = [...k, ...d, ...R], w.raw = [...k, ...d.raw, ...R], M.unshift(w);
      }
      const G = [...M, ...j, ...B], z = O(...G);
      return c.muiName && (z.muiName = c.muiName), process.env.NODE_ENV !== "production" && (z.displayName = Oc(u, f, c)), z;
    };
    return O.withConfig && (C.withConfig = O.withConfig), C;
  };
}
function Oc(e, t, n) {
  return e ? `${e}${q(t || "")}` : `Styled(${Tc(n)})`;
}
function Rc(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${ts(t || "Root")}`), n;
}
function wc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ic(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ts(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Pc = es(), $c = Pc;
function Lt(e, t, n = !1) {
  const o = {
    ...t
  };
  for (const s in e)
    if (Object.prototype.hasOwnProperty.call(e, s)) {
      const i = s;
      if (i === "components" || i === "slots")
        o[i] = {
          ...e[i],
          ...o[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], c = t[i];
        if (!c)
          o[i] = a || {};
        else if (!a)
          o[i] = c;
        else {
          o[i] = {
            ...c
          };
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
              const u = l;
              o[i][u] = Lt(a[u], c[u], n);
            }
        }
      } else
        i === "className" && n && t.className ? o.className = X(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? o.style = {
          ...e == null ? void 0 : e.style,
          ...t == null ? void 0 : t.style
        } : o[i] === void 0 && (o[i] = e[i]);
    }
  return o;
}
function Nc(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : Lt(t.components[n].defaultProps, o);
}
function kc({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let s = br(n);
  return o && (s = s[o] || s), Nc({
    theme: s,
    name: t,
    props: e
  });
}
const Ac = typeof window < "u" ? E.useLayoutEffect : E.useEffect, Tt = Ac;
function Mc(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function xr(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Mc(e, t, n);
}
function jc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, s) => s < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function He(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return He(jc(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ge(9, e));
  let o = e.substring(t + 1, e.length - 1), s;
  if (n === "color") {
    if (o = o.split(" "), s = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ge(10, s));
  } else
    o = o.split(",");
  return o = o.map((i) => parseFloat(i)), {
    type: n,
    values: o,
    colorSpace: s
  };
}
const _c = (e) => {
  const t = He(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, kt = (e, t) => {
  try {
    return _c(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function In(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((s, i) => i < 3 ? parseInt(s, 10) : s) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function ns(e) {
  e = He(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, s = t[2] / 100, i = o * Math.min(s, 1 - s), a = (u, f = (u + n / 30) % 12) => s - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), In({
    type: c,
    values: l
  });
}
function Jn(e) {
  e = He(e);
  let t = e.type === "hsl" || e.type === "hsla" ? He(ns(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function eo(e, t) {
  const n = Jn(e), o = Jn(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function cn(e, t) {
  return e = He(e), t = xr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, In(e);
}
function Je(e, t, n) {
  try {
    return cn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Pn(e, t) {
  if (e = He(e), t = xr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return In(e);
}
function ie(e, t, n) {
  try {
    return Pn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function $n(e, t) {
  if (e = He(e), t = xr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return In(e);
}
function ae(e, t, n) {
  try {
    return $n(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Zn(e, t = 0.15) {
  return Jn(e) > 0.5 ? Pn(e, t) : $n(e, t);
}
function Jt(e, t, n) {
  try {
    return Zn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
const Dc = "exact-prop: ​";
function rs(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Dc]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Bc = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (r.node, r.bool);
const os = () => E.useContext(Bc) ?? !1, Lc = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (r.node, r.object);
function Vc(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  if (!t || !t.components || !t.components[n])
    return o;
  const s = t.components[n];
  return s.defaultProps ? Lt(s.defaultProps, o, t.components.mergeClassNameAndStyle) : !s.styleOverrides && !s.variants ? Lt(s, o, t.components.mergeClassNameAndStyle) : o;
}
function Fc({
  props: e,
  name: t
}) {
  const n = E.useContext(Lc);
  return Vc({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let to = 0;
function zc(e) {
  const [t, n] = E.useState(e), o = e || t;
  return E.useEffect(() => {
    t == null && (to += 1, n(`mui-${to}`));
  }, [t]), o;
}
const Uc = {
  ...E
}, no = Uc.useId;
function ss(e) {
  if (no !== void 0) {
    const t = no();
    return e ?? t;
  }
  return zc(e);
}
const ro = {
  theme: void 0
};
function Wc(e) {
  let t, n;
  return function(s) {
    let i = t;
    return (i === void 0 || s.theme !== n) && (ro.theme = s.theme, i = Jo(e(ro)), t = i, n = s.theme), i;
  };
}
function Yc(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const s = o[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${s}${t(...o.slice(1))})` : `, ${s}`;
  }
  return (o, ...s) => `var(--${e ? `${e}-` : ""}${o}${t(...s)})`;
}
const oo = (e, t, n, o = []) => {
  let s = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(s) ? s[Number(i)] = n : s && typeof s == "object" && (s[i] = n) : s && typeof s == "object" && (s[i] || (s[i] = o.includes(i) ? [] : {}), s = s[i]);
  });
}, Gc = (e, t, n) => {
  function o(s, i = [], a = []) {
    Object.entries(s).forEach(([c, l]) => {
      (!n || n && !n([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? o(l, [...i, c], Array.isArray(l) ? [...a, c] : a) : t([...i, c], l, a));
    });
  }
  o(e);
}, Hc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Fn(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, s = {}, i = {}, a = {};
  return Gc(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!o || !o(c, l))) {
        const f = `--${n ? `${n}-` : ""}${c.join("-")}`, m = Hc(c, l);
        Object.assign(s, {
          [f]: m
        }), oo(i, c, `var(${f})`, u), oo(a, c, `var(${f}, ${m})`, u);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: s,
    vars: i,
    varsWithDefaults: a
  };
}
function Kc(e, t = {}) {
  const {
    getSelector: n = S,
    disableCssColorScheme: o,
    colorSchemeSelector: s,
    enableContrastVars: i
  } = t, {
    colorSchemes: a = {},
    components: c,
    defaultColorScheme: l = "light",
    ...u
  } = e, {
    vars: f,
    css: m,
    varsWithDefaults: g
  } = Fn(u, t);
  let h = g;
  const y = {}, {
    [l]: p,
    ...x
  } = a;
  if (Object.entries(x || {}).forEach(([v, C]) => {
    const {
      vars: N,
      css: M,
      varsWithDefaults: j
    } = Fn(C, t);
    h = Te(h, j), y[v] = {
      css: M,
      vars: N
    };
  }), p) {
    const {
      css: v,
      vars: C,
      varsWithDefaults: N
    } = Fn(p, t);
    h = Te(h, N), y[l] = {
      css: v,
      vars: C
    };
  }
  function S(v, C) {
    var M, j;
    let N = s;
    if (s === "class" && (N = ".%s"), s === "data" && (N = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (N = `[${s}="%s"]`), v) {
      if (N === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((j = (M = a[v]) == null ? void 0 : M.palette) == null ? void 0 : j.mode) || v})`]: {
            ":root": C
          }
        };
      if (N)
        return e.defaultColorScheme === v ? `:root, ${N.replace("%s", String(v))}` : N.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let v = {
        ...f
      };
      return Object.entries(y).forEach(([, {
        vars: C
      }]) => {
        v = Te(v, C);
      }), v;
    },
    generateStyleSheets: () => {
      var B, G;
      const v = [], C = e.defaultColorScheme || "light";
      function N(z, d) {
        Object.keys(d).length && v.push(typeof z == "string" ? {
          [z]: {
            ...d
          }
        } : z);
      }
      N(n(void 0, {
        ...m
      }), m);
      const {
        [C]: M,
        ...j
      } = y;
      if (M) {
        const {
          css: z
        } = M, d = (G = (B = a[C]) == null ? void 0 : B.palette) == null ? void 0 : G.mode, k = !o && d ? {
          colorScheme: d,
          ...z
        } : {
          ...z
        };
        N(n(C, {
          ...k
        }), k);
      }
      return Object.entries(j).forEach(([z, {
        css: d
      }]) => {
        var w, A;
        const k = (A = (w = a[z]) == null ? void 0 : w.palette) == null ? void 0 : A.mode, R = !o && k ? {
          colorScheme: k,
          ...d
        } : {
          ...d
        };
        N(n(z, {
          ...R
        }), R);
      }), i && v.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), v;
    }
  };
}
function qc(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function pe(e, t, n = void 0) {
  const o = {};
  for (const s in e) {
    const i = e[s];
    let a = "", c = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u && (a += (c === !0 ? "" : " ") + t(u), c = !1, n && n[u] && (a += " " + n[u]));
    }
    o[s] = a;
  }
  return o;
}
function is(e, t) {
  var n, o, s;
  return /* @__PURE__ */ E.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((s = (o = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : o.value) == null ? void 0 : s.muiName)
  ) !== -1;
}
const Xc = wn(), Qc = $c("div", {
  name: "MuiStack",
  slot: "Root"
});
function Jc(e) {
  return kc({
    props: e,
    name: "MuiStack",
    defaultTheme: Xc
  });
}
function Zc(e, t) {
  const n = E.Children.toArray(e).filter(Boolean);
  return n.reduce((o, s, i) => (o.push(s), i < n.length - 1 && o.push(/* @__PURE__ */ E.cloneElement(t, {
    key: `separator-${i}`
  })), o), []);
}
const el = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], tl = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...ke({
      theme: t
    }, Ln({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (o) => ({
      flexDirection: o
    }))
  };
  if (e.spacing) {
    const o = Tn(t), s = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), i = Ln({
      values: e.direction,
      base: s
    }), a = Ln({
      values: e.spacing,
      base: s
    });
    typeof i == "object" && Object.keys(i).forEach((l, u, f) => {
      if (!i[l]) {
        const g = u > 0 ? i[f[u - 1]] : "column";
        i[l] = g;
      }
    }), n = Te(n, ke({
      theme: t
    }, a, (l, u) => e.useFlexGap ? {
      gap: it(o, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${el(u ? i[u] : e.direction)}`]: it(o, l)
      }
    }));
  }
  return n = Ca(t.breakpoints, n), n;
};
function nl(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Qc,
    useThemeProps: n = Jc,
    componentName: o = "MuiStack"
  } = e, s = () => pe({
    root: ["root"]
  }, (l) => se(o, l), {}), i = t(tl), a = /* @__PURE__ */ E.forwardRef(function(l, u) {
    const f = n(l), m = vr(f), {
      component: g = "div",
      direction: h = "column",
      spacing: y = 0,
      divider: p,
      children: x,
      className: S,
      useFlexGap: $ = !1,
      ...O
    } = m, v = {
      direction: h,
      spacing: y,
      useFlexGap: $
    }, C = s();
    return /* @__PURE__ */ T.jsx(i, {
      as: g,
      ownerState: v,
      ref: u,
      className: X(C.root, S),
      ...O,
      children: p ? Zc(x, p) : x
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: r.node,
    direction: r.oneOfType([r.oneOf(["column-reverse", "column", "row-reverse", "row"]), r.arrayOf(r.oneOf(["column-reverse", "column", "row-reverse", "row"])), r.object]),
    divider: r.node,
    spacing: r.oneOfType([r.arrayOf(r.oneOfType([r.number, r.string])), r.number, r.object, r.string]),
    sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
  }), a;
}
const rl = {
  black: "#000",
  white: "#fff"
}, Vt = rl, ol = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, sl = ol, il = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, ct = il, al = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, lt = al, cl = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Pt = cl, ll = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ut = ll, ul = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, dt = ul, dl = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, pt = dl;
function as() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Vt.white,
      default: Vt.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const cs = as();
function ls() {
  return {
    text: {
      primary: Vt.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Vt.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const er = ls();
function so(e, t, n, o) {
  const s = o.light || o, i = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = $n(e.main, s) : t === "dark" && (e.dark = Pn(e.main, i)));
}
function io(e, t, n, o, s) {
  const i = s.light || s, a = s.dark || s * 1.5;
  t[n] || (t.hasOwnProperty(o) ? t[n] = t[o] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function pl(e = "light") {
  return e === "dark" ? {
    main: ut[200],
    light: ut[50],
    dark: ut[400]
  } : {
    main: ut[700],
    light: ut[400],
    dark: ut[800]
  };
}
function fl(e = "light") {
  return e === "dark" ? {
    main: ct[200],
    light: ct[50],
    dark: ct[400]
  } : {
    main: ct[500],
    light: ct[300],
    dark: ct[700]
  };
}
function ml(e = "light") {
  return e === "dark" ? {
    main: lt[500],
    light: lt[300],
    dark: lt[700]
  } : {
    main: lt[700],
    light: lt[400],
    dark: lt[800]
  };
}
function gl(e = "light") {
  return e === "dark" ? {
    main: dt[400],
    light: dt[300],
    dark: dt[700]
  } : {
    main: dt[700],
    light: dt[500],
    dark: dt[900]
  };
}
function hl(e = "light") {
  return e === "dark" ? {
    main: pt[400],
    light: pt[300],
    dark: pt[700]
  } : {
    main: pt[800],
    light: pt[500],
    dark: pt[900]
  };
}
function yl(e = "light") {
  return e === "dark" ? {
    main: Pt[400],
    light: Pt[300],
    dark: Pt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Pt[500],
    dark: Pt[900]
  };
}
function bl(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Tr(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    colorSpace: s,
    ...i
  } = e, a = e.primary || pl(t), c = e.secondary || fl(t), l = e.error || ml(t), u = e.info || gl(t), f = e.success || hl(t), m = e.warning || yl(t);
  function g(x) {
    if (s)
      return bl(x);
    const S = eo(x, er.text.primary) >= n ? er.text.primary : cs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const $ = eo(x, S);
      $ < 3 && console.error([`MUI: The contrast ratio of ${$}:1 for ${S} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const h = ({
    color: x,
    name: S,
    mainShade: $ = 500,
    lightShade: O = 300,
    darkShade: v = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[$] && (x.main = x[$]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${$}\` property.` : Ge(11, S ? ` (${S})` : "", $));
    if (typeof x.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(x.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ge(12, S ? ` (${S})` : "", JSON.stringify(x.main)));
    return s ? (io(s, x, "light", O, o), io(s, x, "dark", v, o)) : (so(x, "light", O, o), so(x, "dark", v, o)), x.contrastText || (x.contrastText = g(x.main)), x;
  };
  let y;
  return t === "light" ? y = as() : t === "dark" && (y = ls()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Te({
    // A collection of common colors.
    common: {
      ...Vt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: sl,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...y
  }, i);
}
function vl(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [s, i] = o;
    typeof i == "object" && (t[s] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function xl(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Tl(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ao = {
  textTransform: "uppercase"
}, co = '"Roboto", "Helvetica", "Arial", sans-serif';
function El(e, t) {
  const {
    fontFamily: n = co,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: f,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = o / 14, h = f || ((x) => `${x / l * g}rem`), y = (x, S, $, O, v) => ({
    fontFamily: n,
    fontWeight: x,
    fontSize: h(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === co ? {
      letterSpacing: `${Tl(O / S)}em`
    } : {},
    ...v,
    ...u
  }), p = {
    h1: y(s, 96, 1.167, -1.5),
    h2: y(s, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, ao),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, ao),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Te({
    htmlFontSize: l,
    pxToRem: h,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...p
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Cl = 0.2, Sl = 0.14, Ol = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Cl})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Sl})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ol})`].join(",");
}
const Rl = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], wl = Rl, Il = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Pl = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function lo(e) {
  return `${Math.round(e)}ms`;
}
function $l(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Nl(e) {
  const t = {
    ...Il,
    ...e.easing
  }, n = {
    ...Pl,
    ...e.duration
  };
  return {
    getAutoHeightDuration: $l,
    create: (s = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const f = (g) => typeof g == "string", m = (g) => !Number.isNaN(parseFloat(g));
        !f(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !m(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((f) => `${f} ${typeof a == "string" ? a : lo(a)} ${c} ${typeof l == "string" ? l : lo(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const kl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Al = kl;
function Ml(e) {
  return je(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function us(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const s = Object.entries(o);
    for (let i = 0; i < s.length; i++) {
      const [a, c] = s[i];
      !Ml(c) || a.startsWith("unstable_") ? delete o[a] : je(c) && (o[a] = {
        ...c
      }, n(o[a]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function uo(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const jl = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let n = 0;
  for (let o = 0; o < t.length; o += 1)
    n += +t[o];
  return n;
};
function _l(e) {
  Object.assign(e, {
    alpha(t, n) {
      const o = this || e;
      return o.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : o.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : cn(t, jl(n));
    },
    lighten(t, n) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #fff ${uo(n)})` : $n(t, n);
    },
    darken(t, n) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #000 ${uo(n)})` : Pn(t, n);
    }
  });
}
function tr(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: o = {},
    spacing: s,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: l,
    colorSpace: u,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ge(20));
  const m = Tr({
    ...i,
    colorSpace: u
  }), g = wn(e);
  let h = Te(g, {
    mixins: xl(g.breakpoints, o),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: wl.slice(),
    typography: El(m, c),
    transitions: Nl(a),
    zIndex: {
      ...Al
    }
  });
  if (h = Te(h, f), h = t.reduce((y, p) => Te(y, p), h), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (x, S) => {
      let $;
      for ($ in x) {
        const O = x[$];
        if (y.includes($) && Object.keys(O).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = se("", $);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${$}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: O
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[$] = {};
        }
      }
    };
    Object.keys(h.components).forEach((x) => {
      const S = h.components[x].styleOverrides;
      S && x.startsWith("Mui") && p(S, x);
    });
  }
  return h.unstable_sxConfig = {
    ...Ut,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, h.unstable_sx = function(p) {
    return xt({
      sx: p,
      theme: this
    });
  }, h.toRuntimeSource = us, _l(h), h;
}
function nr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Dl = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = nr(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function ds(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ps(e) {
  return e === "dark" ? Dl : [];
}
function Bl(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: o,
    colorSpace: s,
    ...i
  } = e, a = Tr({
    ...t,
    colorSpace: s
  });
  return {
    palette: a,
    opacity: {
      ...ds(a.mode),
      ...n
    },
    overlays: o || ps(a.mode),
    ...i
  };
}
function Ll(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Vl = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Fl = Vl, zl = (e) => (t, n) => {
  const o = e.rootSelector || ":root", s = e.colorSchemeSelector;
  let i = s;
  if (s === "class" && (i = ".%s"), s === "data" && (i = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (i = `[${s}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Fl(e.cssVarPrefix).forEach((c) => {
        a[c] = n[c], delete n[c];
      }), i === "media" ? {
        [o]: n,
        "@media (prefers-color-scheme: dark)": {
          [o]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${o}, ${i.replace("%s", t)}`]: n
      } : {
        [o]: {
          ...n,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${o}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [o]: n
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return o;
};
function Ul(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function P(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function At(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ns(e);
}
function Le(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = kt(At(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Wl(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ae = (e) => {
  try {
    return e();
  } catch {
  }
}, Yl = (e = "mui") => Yc(e);
function zn(e, t, n, o, s) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = s === "dark" ? "dark" : "light";
  if (!o) {
    t[s] = Bl({
      ...n,
      palette: {
        mode: i,
        ...n == null ? void 0 : n.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...c
  } = tr({
    ...o,
    palette: {
      mode: i,
      ...n == null ? void 0 : n.palette
    },
    colorSpace: e
  });
  return t[s] = {
    ...n,
    palette: a,
    opacity: {
      ...ds(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || ps(i)
  }, c;
}
function Gl(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: s = !1,
    cssVarPrefix: i = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: c = Ll,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...f
  } = e, m = Object.keys(n)[0], g = o || (n.light && m !== "light" ? "light" : m), h = Yl(i), {
    [g]: y,
    light: p,
    dark: x,
    ...S
  } = n, $ = {
    ...S
  };
  let O = y;
  if ((g === "dark" && !("dark" in n) || g === "light" && !("light" in n)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : Ge(21, g));
  let v;
  a && (v = "oklch");
  const C = zn(v, $, O, f, g);
  p && !$.light && zn(v, $, p, void 0, "light"), x && !$.dark && zn(v, $, x, void 0, "dark");
  let N = {
    defaultColorScheme: g,
    ...C,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: h,
    colorSchemes: $,
    font: {
      ...vl(C.typography),
      ...C.font
    },
    spacing: Wl(f.spacing)
  };
  Object.keys(N.colorSchemes).forEach((z) => {
    const d = N.colorSchemes[z].palette, k = (w) => {
      const A = w.split("-"), Y = A[1], F = A[2];
      return h(w, d[Y][F]);
    };
    d.mode === "light" && (P(d.common, "background", "#fff"), P(d.common, "onBackground", "#000")), d.mode === "dark" && (P(d.common, "background", "#000"), P(d.common, "onBackground", "#fff"));
    function R(w, A, Y) {
      if (v) {
        let F;
        return w === Je && (F = `transparent ${((1 - Y) * 100).toFixed(0)}%`), w === ie && (F = `#000 ${(Y * 100).toFixed(0)}%`), w === ae && (F = `#fff ${(Y * 100).toFixed(0)}%`), `color-mix(in ${v}, ${A}, ${F})`;
      }
      return w(A, Y);
    }
    if (Ul(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      P(d.Alert, "errorColor", R(ie, d.error.light, 0.6)), P(d.Alert, "infoColor", R(ie, d.info.light, 0.6)), P(d.Alert, "successColor", R(ie, d.success.light, 0.6)), P(d.Alert, "warningColor", R(ie, d.warning.light, 0.6)), P(d.Alert, "errorFilledBg", k("palette-error-main")), P(d.Alert, "infoFilledBg", k("palette-info-main")), P(d.Alert, "successFilledBg", k("palette-success-main")), P(d.Alert, "warningFilledBg", k("palette-warning-main")), P(d.Alert, "errorFilledColor", Ae(() => d.getContrastText(d.error.main))), P(d.Alert, "infoFilledColor", Ae(() => d.getContrastText(d.info.main))), P(d.Alert, "successFilledColor", Ae(() => d.getContrastText(d.success.main))), P(d.Alert, "warningFilledColor", Ae(() => d.getContrastText(d.warning.main))), P(d.Alert, "errorStandardBg", R(ae, d.error.light, 0.9)), P(d.Alert, "infoStandardBg", R(ae, d.info.light, 0.9)), P(d.Alert, "successStandardBg", R(ae, d.success.light, 0.9)), P(d.Alert, "warningStandardBg", R(ae, d.warning.light, 0.9)), P(d.Alert, "errorIconColor", k("palette-error-main")), P(d.Alert, "infoIconColor", k("palette-info-main")), P(d.Alert, "successIconColor", k("palette-success-main")), P(d.Alert, "warningIconColor", k("palette-warning-main")), P(d.AppBar, "defaultBg", k("palette-grey-100")), P(d.Avatar, "defaultBg", k("palette-grey-400")), P(d.Button, "inheritContainedBg", k("palette-grey-300")), P(d.Button, "inheritContainedHoverBg", k("palette-grey-A100")), P(d.Chip, "defaultBorder", k("palette-grey-400")), P(d.Chip, "defaultAvatarColor", k("palette-grey-700")), P(d.Chip, "defaultIconColor", k("palette-grey-700")), P(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), P(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), P(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), P(d.LinearProgress, "primaryBg", R(ae, d.primary.main, 0.62)), P(d.LinearProgress, "secondaryBg", R(ae, d.secondary.main, 0.62)), P(d.LinearProgress, "errorBg", R(ae, d.error.main, 0.62)), P(d.LinearProgress, "infoBg", R(ae, d.info.main, 0.62)), P(d.LinearProgress, "successBg", R(ae, d.success.main, 0.62)), P(d.LinearProgress, "warningBg", R(ae, d.warning.main, 0.62)), P(d.Skeleton, "bg", v ? R(Je, d.text.primary, 0.11) : `rgba(${k("palette-text-primaryChannel")} / 0.11)`), P(d.Slider, "primaryTrack", R(ae, d.primary.main, 0.62)), P(d.Slider, "secondaryTrack", R(ae, d.secondary.main, 0.62)), P(d.Slider, "errorTrack", R(ae, d.error.main, 0.62)), P(d.Slider, "infoTrack", R(ae, d.info.main, 0.62)), P(d.Slider, "successTrack", R(ae, d.success.main, 0.62)), P(d.Slider, "warningTrack", R(ae, d.warning.main, 0.62));
      const w = v ? R(ie, d.background.default, 0.6825) : Jt(d.background.default, 0.8);
      P(d.SnackbarContent, "bg", w), P(d.SnackbarContent, "color", Ae(() => v ? er.text.primary : d.getContrastText(w))), P(d.SpeedDialAction, "fabHoverBg", Jt(d.background.paper, 0.15)), P(d.StepConnector, "border", k("palette-grey-400")), P(d.StepContent, "border", k("palette-grey-400")), P(d.Switch, "defaultColor", k("palette-common-white")), P(d.Switch, "defaultDisabledColor", k("palette-grey-100")), P(d.Switch, "primaryDisabledColor", R(ae, d.primary.main, 0.62)), P(d.Switch, "secondaryDisabledColor", R(ae, d.secondary.main, 0.62)), P(d.Switch, "errorDisabledColor", R(ae, d.error.main, 0.62)), P(d.Switch, "infoDisabledColor", R(ae, d.info.main, 0.62)), P(d.Switch, "successDisabledColor", R(ae, d.success.main, 0.62)), P(d.Switch, "warningDisabledColor", R(ae, d.warning.main, 0.62)), P(d.TableCell, "border", R(ae, R(Je, d.divider, 1), 0.88)), P(d.Tooltip, "bg", R(Je, d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      P(d.Alert, "errorColor", R(ae, d.error.light, 0.6)), P(d.Alert, "infoColor", R(ae, d.info.light, 0.6)), P(d.Alert, "successColor", R(ae, d.success.light, 0.6)), P(d.Alert, "warningColor", R(ae, d.warning.light, 0.6)), P(d.Alert, "errorFilledBg", k("palette-error-dark")), P(d.Alert, "infoFilledBg", k("palette-info-dark")), P(d.Alert, "successFilledBg", k("palette-success-dark")), P(d.Alert, "warningFilledBg", k("palette-warning-dark")), P(d.Alert, "errorFilledColor", Ae(() => d.getContrastText(d.error.dark))), P(d.Alert, "infoFilledColor", Ae(() => d.getContrastText(d.info.dark))), P(d.Alert, "successFilledColor", Ae(() => d.getContrastText(d.success.dark))), P(d.Alert, "warningFilledColor", Ae(() => d.getContrastText(d.warning.dark))), P(d.Alert, "errorStandardBg", R(ie, d.error.light, 0.9)), P(d.Alert, "infoStandardBg", R(ie, d.info.light, 0.9)), P(d.Alert, "successStandardBg", R(ie, d.success.light, 0.9)), P(d.Alert, "warningStandardBg", R(ie, d.warning.light, 0.9)), P(d.Alert, "errorIconColor", k("palette-error-main")), P(d.Alert, "infoIconColor", k("palette-info-main")), P(d.Alert, "successIconColor", k("palette-success-main")), P(d.Alert, "warningIconColor", k("palette-warning-main")), P(d.AppBar, "defaultBg", k("palette-grey-900")), P(d.AppBar, "darkBg", k("palette-background-paper")), P(d.AppBar, "darkColor", k("palette-text-primary")), P(d.Avatar, "defaultBg", k("palette-grey-600")), P(d.Button, "inheritContainedBg", k("palette-grey-800")), P(d.Button, "inheritContainedHoverBg", k("palette-grey-700")), P(d.Chip, "defaultBorder", k("palette-grey-700")), P(d.Chip, "defaultAvatarColor", k("palette-grey-300")), P(d.Chip, "defaultIconColor", k("palette-grey-300")), P(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), P(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), P(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), P(d.LinearProgress, "primaryBg", R(ie, d.primary.main, 0.5)), P(d.LinearProgress, "secondaryBg", R(ie, d.secondary.main, 0.5)), P(d.LinearProgress, "errorBg", R(ie, d.error.main, 0.5)), P(d.LinearProgress, "infoBg", R(ie, d.info.main, 0.5)), P(d.LinearProgress, "successBg", R(ie, d.success.main, 0.5)), P(d.LinearProgress, "warningBg", R(ie, d.warning.main, 0.5)), P(d.Skeleton, "bg", v ? R(Je, d.text.primary, 0.13) : `rgba(${k("palette-text-primaryChannel")} / 0.13)`), P(d.Slider, "primaryTrack", R(ie, d.primary.main, 0.5)), P(d.Slider, "secondaryTrack", R(ie, d.secondary.main, 0.5)), P(d.Slider, "errorTrack", R(ie, d.error.main, 0.5)), P(d.Slider, "infoTrack", R(ie, d.info.main, 0.5)), P(d.Slider, "successTrack", R(ie, d.success.main, 0.5)), P(d.Slider, "warningTrack", R(ie, d.warning.main, 0.5));
      const w = v ? R(ae, d.background.default, 0.985) : Jt(d.background.default, 0.98);
      P(d.SnackbarContent, "bg", w), P(d.SnackbarContent, "color", Ae(() => v ? cs.text.primary : d.getContrastText(w))), P(d.SpeedDialAction, "fabHoverBg", Jt(d.background.paper, 0.15)), P(d.StepConnector, "border", k("palette-grey-600")), P(d.StepContent, "border", k("palette-grey-600")), P(d.Switch, "defaultColor", k("palette-grey-300")), P(d.Switch, "defaultDisabledColor", k("palette-grey-600")), P(d.Switch, "primaryDisabledColor", R(ie, d.primary.main, 0.55)), P(d.Switch, "secondaryDisabledColor", R(ie, d.secondary.main, 0.55)), P(d.Switch, "errorDisabledColor", R(ie, d.error.main, 0.55)), P(d.Switch, "infoDisabledColor", R(ie, d.info.main, 0.55)), P(d.Switch, "successDisabledColor", R(ie, d.success.main, 0.55)), P(d.Switch, "warningDisabledColor", R(ie, d.warning.main, 0.55)), P(d.TableCell, "border", R(ie, R(Je, d.divider, 1), 0.68)), P(d.Tooltip, "bg", R(Je, d.grey[700], 0.92));
    }
    Le(d.background, "default"), Le(d.background, "paper"), Le(d.common, "background"), Le(d.common, "onBackground"), Le(d, "divider"), Object.keys(d).forEach((w) => {
      const A = d[w];
      w !== "tonalOffset" && A && typeof A == "object" && (A.main && P(d[w], "mainChannel", kt(At(A.main))), A.light && P(d[w], "lightChannel", kt(At(A.light))), A.dark && P(d[w], "darkChannel", kt(At(A.dark))), A.contrastText && P(d[w], "contrastTextChannel", kt(At(A.contrastText))), w === "text" && (Le(d[w], "primary"), Le(d[w], "secondary")), w === "action" && (A.active && Le(d[w], "active"), A.selected && Le(d[w], "selected")));
    });
  }), N = t.reduce((z, d) => Te(z, d), N);
  const M = {
    prefix: i,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: c,
    getSelector: zl(N),
    enableContrastVars: a
  }, {
    vars: j,
    generateThemeVars: B,
    generateStyleSheets: G
  } = Kc(N, M);
  return N.vars = j, Object.entries(N.colorSchemes[N.defaultColorScheme]).forEach(([z, d]) => {
    N[z] = d;
  }), N.generateThemeVars = B, N.generateStyleSheets = G, N.generateSpacing = function() {
    return Ho(f.spacing, Tn(this));
  }, N.getColorSchemeSelector = qc(l), N.spacing = N.generateSpacing(), N.shouldSkipGeneratingVar = c, N.unstable_sxConfig = {
    ...Ut,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, N.unstable_sx = function(d) {
    return xt({
      sx: d,
      theme: this
    });
  }, N.toRuntimeSource = us, N;
}
function po(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Tr({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function fs(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: o = !1,
    colorSchemes: s = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...a
  } = e, c = i || "light", l = s == null ? void 0 : s[c], u = {
    ...s,
    ...n ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: n
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return tr(e, ...t);
    let f = n;
    "palette" in e || u[c] && (u[c] !== !0 ? f = u[c].palette : c === "dark" && (f = {
      mode: "dark"
    }));
    const m = tr({
      ...e,
      palette: f
    }, ...t);
    return m.defaultColorScheme = c, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, po(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, po(m, "light", u.light)), m;
  }
  return !n && !("light" in u) && c === "light" && (u.light = !0), Gl({
    ...a,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof o != "boolean" && o
  }, ...t);
}
const Hl = fs(), ms = Hl;
function Wt() {
  const e = br(ms);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[gr] || e;
}
function Kl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ql = (e) => Kl(e) && e !== "classes", St = ql, Xl = es({
  themeId: gr,
  defaultTheme: ms,
  rootShouldForwardProp: St
}), K = Xl;
function Ql() {
  return vr;
}
const Jl = Wc, ge = Jl;
process.env.NODE_ENV !== "production" && (r.node, r.object.isRequired);
function le(e) {
  return Fc(e);
}
function Zl(e) {
  return typeof e.main == "string";
}
function eu(e, t = []) {
  if (!Zl(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function at(e = []) {
  return ([, t]) => t && eu(t, e);
}
function tu(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function gs(e, t, n, o) {
  const s = e[t];
  if (s == null || !Number.isInteger(s)) {
    const i = tu(s);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function hs(e, t, n, o) {
  return e[t] === void 0 ? null : gs(e, t, n, o);
}
function rr() {
  return null;
}
hs.isRequired = gs;
rr.isRequired = rr;
const nu = process.env.NODE_ENV === "production" ? rr : hs, bt = nu;
function Be(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function ru(e) {
  return se("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const ou = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: s
  } = e, i = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return pe(i, ru, s);
}, su = K("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(ge(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), ys = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var h;
  const o = le({
    props: t,
    name: "MuiPaper"
  }), s = Wt(), {
    className: i,
    component: a = "div",
    elevation: c = 1,
    square: l = !1,
    variant: u = "elevation",
    ...f
  } = o, m = {
    ...o,
    component: a,
    elevation: c,
    square: l,
    variant: u
  }, g = ou(m);
  return process.env.NODE_ENV !== "production" && s.shadows[c] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${c}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${c}]\` is defined.`].join(`
`)), /* @__PURE__ */ T.jsx(su, {
    as: a,
    ownerState: m,
    className: X(g.root, i),
    ref: n,
    ...f,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (s.vars || s).shadows[c],
        ...s.vars && {
          "--Paper-overlay": (h = s.vars.overlays) == null ? void 0 : h[c]
        },
        ...!s.vars && s.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${cn("#fff", nr(c))}, ${cn("#fff", nr(c))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ys.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Be(bt, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: r.bool,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: r.oneOfType([r.oneOf(["elevation", "outlined"]), r.string])
});
const Nn = ys;
function iu(e) {
  return se("MuiAppBar", e);
}
ce("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const au = (e) => {
  const {
    color: t,
    position: n,
    classes: o
  } = e, s = {
    root: ["root", `color${q(t)}`, `position${q(n)}`]
  };
  return pe(s, iu, o);
}, fo = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, cu = K(Nn, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${q(n.position)}`], t[`color${q(n.color)}`]];
  }
})(ge(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  // Prevent padding issue with the Modal and fixed positioned AppBar.
  flexShrink: 0,
  variants: [{
    props: {
      position: "fixed"
    },
    style: {
      position: "fixed",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0,
      "@media print": {
        // Prevent the app bar to be visible on each printed page.
        position: "absolute"
      }
    }
  }, {
    props: {
      position: "absolute"
    },
    style: {
      position: "absolute",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "sticky"
    },
    style: {
      position: "sticky",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "static"
    },
    style: {
      position: "static"
    }
  }, {
    props: {
      position: "relative"
    },
    style: {
      position: "relative"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      "--AppBar-color": "inherit"
    }
  }, {
    props: {
      color: "default"
    },
    style: {
      "--AppBar-background": e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[100],
      "--AppBar-color": e.vars ? e.vars.palette.text.primary : e.palette.getContrastText(e.palette.grey[100]),
      ...e.applyStyles("dark", {
        "--AppBar-background": e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[900],
        "--AppBar-color": e.vars ? e.vars.palette.text.primary : e.palette.getContrastText(e.palette.grey[900])
      })
    }
  }, ...Object.entries(e.palette).filter(at(["contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--AppBar-background": (e.vars ?? e).palette[t].main,
      "--AppBar-color": (e.vars ?? e).palette[t].contrastText
    }
  })), {
    props: (t) => t.enableColorOnDark === !0 && !["inherit", "transparent"].includes(t.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)"
    }
  }, {
    props: (t) => t.enableColorOnDark === !1 && !["inherit", "transparent"].includes(t.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...e.applyStyles("dark", {
        backgroundColor: e.vars ? fo(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? fo(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
      })
    }
  }, {
    props: {
      color: "transparent"
    },
    style: {
      "--AppBar-background": "transparent",
      "--AppBar-color": "inherit",
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...e.applyStyles("dark", {
        backgroundImage: "none"
      })
    }
  }]
}))), bs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiAppBar"
  }), {
    className: s,
    color: i = "primary",
    enableColorOnDark: a = !1,
    position: c = "fixed",
    ...l
  } = o, u = {
    ...o,
    color: i,
    position: c,
    enableColorOnDark: a
  }, f = au(u);
  return /* @__PURE__ */ T.jsx(cu, {
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: X(f.root, s, c === "fixed" && "mui-fixed"),
    ref: n,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (bs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]), r.string]),
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: r.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: r.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const lu = bs, uu = ce("MuiBox", ["root"]), du = uu, pu = fs(), vs = vc({
  themeId: gr,
  defaultTheme: pu,
  defaultClassName: du.root,
  generateClassName: qo.generate
});
process.env.NODE_ENV !== "production" && (vs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: r.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const xs = vs, Ts = nl({
  createStyledComponent: K("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => le({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Ts.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: r.oneOfType([r.oneOf(["column-reverse", "column", "row-reverse", "row"]), r.arrayOf(r.oneOf(["column-reverse", "column", "row-reverse", "row"])), r.object]),
  /**
   * Add an element between each child.
   */
  divider: r.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: r.oneOfType([r.arrayOf(r.oneOfType([r.number, r.string])), r.number, r.object, r.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: r.bool
});
const Ye = Ts;
function fu(e) {
  return se("MuiToolbar", e);
}
ce("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const mu = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: o
  } = e;
  return pe({
    root: ["root", !n && "gutters", o]
  }, fu, t);
}, gu = K("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(ge(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: e.spacing(2),
      paddingRight: e.spacing(2),
      [e.breakpoints.up("sm")]: {
        paddingLeft: e.spacing(3),
        paddingRight: e.spacing(3)
      }
    }
  }, {
    props: {
      variant: "dense"
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: "regular"
    },
    style: e.mixins.toolbar
  }]
}))), Es = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiToolbar"
  }), {
    className: s,
    component: i = "div",
    disableGutters: a = !1,
    variant: c = "regular",
    ...l
  } = o, u = {
    ...o,
    component: i,
    disableGutters: a,
    variant: c
  }, f = mu(u);
  return /* @__PURE__ */ T.jsx(gu, {
    as: i,
    className: X(f.root, s),
    ref: n,
    ownerState: u,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (Es.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: r.oneOfType([r.oneOf(["dense", "regular"]), r.string])
});
const hu = Es;
function mo(...e) {
  return e.reduce((t, n) => n == null ? t : function(...s) {
    t.apply(this, s), n.apply(this, s);
  }, () => {
  });
}
function yu(e) {
  return se("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const bu = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, s = {
    root: ["root", t !== "inherit" && `color${q(t)}`, `fontSize${q(n)}`]
  };
  return pe(s, yu, o);
}, vu = K("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${q(n.color)}`], t[`fontSize${q(n.fontSize)}`]];
  }
})(ge(({
  theme: e
}) => {
  var t, n, o, s, i, a, c, l, u, f, m, g, h, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (s = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : s.call(t, "fill", {
      duration: (o = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : o.shorter
    }),
    variants: [
      {
        props: (p) => !p.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((l = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : l.call(c, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((f = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : f.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, p]) => p && p.main).map(([p]) => {
        var x, S;
        return {
          props: {
            color: p
          },
          style: {
            color: (S = (x = (e.vars ?? e).palette) == null ? void 0 : x[p]) == null ? void 0 : S.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : y.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Er = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: s,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: m,
    viewBox: g = "0 0 24 24",
    ...h
  } = o, y = /* @__PURE__ */ E.isValidElement(s) && s.type === "svg", p = {
    ...o,
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: g,
    hasSvgAsChild: y
  }, x = {};
  f || (x.viewBox = g);
  const S = bu(p);
  return /* @__PURE__ */ T.jsxs(vu, {
    as: c,
    className: X(S.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...x,
    ...h,
    ...y && s.props,
    ownerState: p,
    children: [y ? s.props.children : s, m ? /* @__PURE__ */ T.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Er.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: r.oneOfType([r.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: r.oneOfType([r.oneOf(["inherit", "large", "medium", "small"]), r.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: r.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: r.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: r.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: r.string
});
Er.muiName = "SvgIcon";
const go = Er;
function qe(e, t) {
  function n(o, s) {
    return /* @__PURE__ */ T.jsx(go, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: s,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = go.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(n));
}
function Cs(e, t = 166) {
  let n;
  function o(...s) {
    const i = () => {
      e.apply(this, s);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return o.clear = () => {
    clearTimeout(n);
  }, o;
}
function De(e) {
  return e && e.ownerDocument || document;
}
function Fe(e) {
  return De(e).defaultView || window;
}
function ho(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function vt(e) {
  const t = E.useRef(e);
  return Tt(() => {
    t.current = e;
  }), E.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ee(...e) {
  const t = E.useRef(void 0), n = E.useCallback((o) => {
    const s = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const a = i, c = a(o);
        return typeof c == "function" ? c : () => {
          a(null);
        };
      }
      return i.current = o, () => {
        i.current = null;
      };
    });
    return () => {
      s.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return E.useMemo(() => e.every((o) => o == null) ? null : (o) => {
    t.current && (t.current(), t.current = void 0), o != null && (t.current = n(o));
  }, e);
}
function xu(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Ss(e, t) {
  if (!e)
    return t;
  function n(a, c) {
    const l = {};
    return Object.keys(c).forEach((u) => {
      xu(u, c[u]) && typeof a[u] == "function" && (l[u] = (...f) => {
        a[u](...f), c[u](...f);
      });
    }), l;
  }
  if (typeof e == "function" || typeof t == "function")
    return (a) => {
      const c = typeof t == "function" ? t(a) : t, l = typeof e == "function" ? e({
        ...a,
        ...c
      }) : e, u = X(a == null ? void 0 : a.className, c == null ? void 0 : c.className, l == null ? void 0 : l.className), f = n(l, c);
      return {
        ...c,
        ...l,
        ...f,
        ...!!u && {
          className: u
        },
        ...(c == null ? void 0 : c.style) && (l == null ? void 0 : l.style) && {
          style: {
            ...c.style,
            ...l.style
          }
        },
        ...(c == null ? void 0 : c.sx) && (l == null ? void 0 : l.sx) && {
          sx: [...Array.isArray(c.sx) ? c.sx : [c.sx], ...Array.isArray(l.sx) ? l.sx : [l.sx]]
        }
      };
    };
  const o = t, s = n(e, o), i = X(o == null ? void 0 : o.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...s,
    ...!!i && {
      className: i
    },
    ...(o == null ? void 0 : o.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...o.style,
        ...e.style
      }
    },
    ...(o == null ? void 0 : o.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(o.sx) ? o.sx : [o.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
const Tu = qe(/* @__PURE__ */ T.jsx("path", {
  d: "M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
}), "MenuRounded"), Eu = r.oneOfType([r.func, r.object]), Os = Eu;
function Cu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Su(e, t, n, o, s) {
  const i = e[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Cu(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Cr = Be(r.elementType, Su);
function yo(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const bo = {};
function Rs(e, t) {
  const n = E.useRef(bo);
  return n.current === bo && (n.current = e(t)), n;
}
class ln {
  constructor() {
    Rt(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new ln();
  }
  static use() {
    const t = Rs(ln.create).current, [n, o] = E.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, E.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Ru(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function Ou() {
  return ln.use();
}
function Ru() {
  let e, t;
  const n = new Promise((o, s) => {
    e = o, t = s;
  });
  return n.resolve = e, n.reject = t, n;
}
function or() {
  return or = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, or.apply(null, arguments);
}
function ws(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var o in e)
    if ({}.hasOwnProperty.call(e, o)) {
      if (t.indexOf(o) !== -1)
        continue;
      n[o] = e[o];
    }
  return n;
}
function sr(e, t) {
  return sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, sr(e, t);
}
function Is(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, sr(e, t);
}
const vo = {
  disabled: !1
};
var wu = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.shape({
  enter: r.number,
  exit: r.number,
  appear: r.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && r.oneOfType([r.string, r.shape({
  enter: r.string,
  exit: r.string,
  active: r.string
}), r.shape({
  enter: r.string,
  enterDone: r.string,
  enterActive: r.string,
  exit: r.string,
  exitDone: r.string,
  exitActive: r.string
})]);
const un = _e.createContext(null);
var Iu = function(t) {
  return t.scrollTop;
}, Mt = "unmounted", et = "exited", tt = "entering", mt = "entered", ir = "exiting", ze = /* @__PURE__ */ function(e) {
  Is(t, e);
  function t(o, s) {
    var i;
    i = e.call(this, o, s) || this;
    var a = s, c = a && !a.isMounting ? o.enter : o.appear, l;
    return i.appearStatus = null, o.in ? c ? (l = et, i.appearStatus = tt) : l = mt : o.unmountOnExit || o.mountOnEnter ? l = Mt : l = et, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(s, i) {
    var a = s.in;
    return a && i.status === Mt ? {
      status: et
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(s) {
    var i = null;
    if (s !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== tt && a !== mt && (i = tt) : (a === tt || a === mt) && (i = ir);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var s = this.props.timeout, i, a, c;
    return i = a = c = s, s != null && typeof s != "number" && (i = s.exit, a = s.enter, c = s.appear !== void 0 ? s.appear : a), {
      exit: i,
      enter: a,
      appear: c
    };
  }, n.updateStatus = function(s, i) {
    if (s === void 0 && (s = !1), i !== null)
      if (this.cancelNextCallback(), i === tt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Xt.findDOMNode(this);
          a && Iu(a);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === et && this.setState({
        status: Mt
      });
  }, n.performEnter = function(s) {
    var i = this, a = this.props.enter, c = this.context ? this.context.isMounting : s, l = this.props.nodeRef ? [c] : [Xt.findDOMNode(this), c], u = l[0], f = l[1], m = this.getTimeouts(), g = c ? m.appear : m.enter;
    if (!s && !a || vo.disabled) {
      this.safeSetState({
        status: mt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: tt
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(g, function() {
        i.safeSetState({
          status: mt
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, n.performExit = function() {
    var s = this, i = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Xt.findDOMNode(this);
    if (!i || vo.disabled) {
      this.safeSetState({
        status: et
      }, function() {
        s.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: ir
    }, function() {
      s.props.onExiting(c), s.onTransitionEnd(a.exit, function() {
        s.safeSetState({
          status: et
        }, function() {
          s.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(s, i) {
    i = this.setNextCallback(i), this.setState(s, i);
  }, n.setNextCallback = function(s) {
    var i = this, a = !0;
    return this.nextCallback = function(c) {
      a && (a = !1, i.nextCallback = null, s(c));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(s, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Xt.findDOMNode(this), c = s == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], f = l[1];
      this.props.addEndListener(u, f);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, n.render = function() {
    var s = this.state.status;
    if (s === Mt)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = ws(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ _e.createElement(un.Provider, {
        value: null
      }, typeof a == "function" ? a(s, c) : _e.cloneElement(_e.Children.only(a), c))
    );
  }, t;
}(_e.Component);
ze.contextType = un;
ze.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: r.shape({
    current: typeof Element > "u" ? r.any : function(e, t, n, o, s, i) {
      var a = e[t];
      return r.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, o, s, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: r.oneOfType([r.func.isRequired, r.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: r.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: r.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: r.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: r.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: r.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: r.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = wu;
    t.addEndListener || (n = n.isRequired);
    for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      s[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(s));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: r.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: r.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: r.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: r.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: r.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: r.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: r.func
} : {};
function ft() {
}
ze.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ft,
  onEntering: ft,
  onEntered: ft,
  onExit: ft,
  onExiting: ft,
  onExited: ft
};
ze.UNMOUNTED = Mt;
ze.EXITED = et;
ze.ENTERING = tt;
ze.ENTERED = mt;
ze.EXITING = ir;
const Sr = ze;
function Pu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Or(e, t) {
  var n = function(i) {
    return t && nn(i) ? t(i) : i;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && $i.map(e, function(s) {
    return s;
  }).forEach(function(s) {
    o[s.key] = n(s);
  }), o;
}
function $u(e, t) {
  e = e || {}, t = t || {};
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var o = /* @__PURE__ */ Object.create(null), s = [];
  for (var i in e)
    i in t ? s.length && (o[i] = s, s = []) : s.push(i);
  var a, c = {};
  for (var l in t) {
    if (o[l])
      for (a = 0; a < o[l].length; a++) {
        var u = o[l][a];
        c[o[l][a]] = n(u);
      }
    c[l] = n(l);
  }
  for (a = 0; a < s.length; a++)
    c[s[a]] = n(s[a]);
  return c;
}
function rt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Nu(e, t) {
  return Or(e.children, function(n) {
    return rn(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: rt(n, "appear", e),
      enter: rt(n, "enter", e),
      exit: rt(n, "exit", e)
    });
  });
}
function ku(e, t, n) {
  var o = Or(e.children), s = $u(t, o);
  return Object.keys(s).forEach(function(i) {
    var a = s[i];
    if (nn(a)) {
      var c = i in t, l = i in o, u = t[i], f = nn(u) && !u.props.in;
      l && (!c || f) ? s[i] = rn(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: rt(a, "exit", e),
        enter: rt(a, "enter", e)
      }) : !l && c && !f ? s[i] = rn(a, {
        in: !1
      }) : l && c && nn(u) && (s[i] = rn(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: rt(a, "exit", e),
        enter: rt(a, "enter", e)
      }));
    }
  }), s;
}
var Au = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Mu = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Rr = /* @__PURE__ */ function(e) {
  Is(t, e);
  function t(o, s) {
    var i;
    i = e.call(this, o, s) || this;
    var a = i.handleExited.bind(Pu(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(s, i) {
    var a = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? Nu(s, c) : ku(s, a, c),
      firstRender: !1
    };
  }, n.handleExited = function(s, i) {
    var a = Or(this.props.children);
    s.key in a || (s.props.onExited && s.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = or({}, c.children);
      return delete l[s.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var s = this.props, i = s.component, a = s.childFactory, c = ws(s, ["component", "childFactory"]), l = this.state.contextValue, u = Au(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ _e.createElement(un.Provider, {
      value: l
    }, u) : /* @__PURE__ */ _e.createElement(un.Provider, {
      value: l
    }, /* @__PURE__ */ _e.createElement(i, c, u));
  }, t;
}(_e.Component);
Rr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: r.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: r.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: r.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: r.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: r.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: r.func
} : {};
Rr.defaultProps = Mu;
const ju = Rr, _u = [];
function Du(e) {
  E.useEffect(e, _u);
}
class wr {
  constructor() {
    Rt(this, "currentId", null);
    Rt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Rt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new wr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Ps() {
  const e = Rs(wr.create).current;
  return Du(e.disposeEffect), e;
}
function $s(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: s,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: l,
    timeout: u
  } = e, [f, m] = E.useState(!1), g = X(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), h = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + s
  }, y = X(n.child, f && n.childLeaving, o && n.childPulsate);
  return !c && !f && m(!0), E.useEffect(() => {
    if (!c && l != null) {
      const p = setTimeout(l, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ T.jsx("span", {
    className: g,
    style: h,
    children: /* @__PURE__ */ T.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && ($s.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object.isRequired,
  className: r.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: r.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: r.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: r.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: r.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: r.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: r.number,
  /**
   * exit delay
   */
  timeout: r.number.isRequired
});
const Bu = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Re = Bu, ar = 550, Lu = 80, Vu = Ft`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Fu = Ft`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, zu = Ft`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Uu = K("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Wu = K($s, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Re.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Vu};
    animation-duration: ${ar}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Re.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Re.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Re.childLeaving} {
    opacity: 0;
    animation-name: ${Fu};
    animation-duration: ${ar}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Re.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${zu};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ns = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: s = !1,
    classes: i = {},
    className: a,
    ...c
  } = o, [l, u] = E.useState([]), f = E.useRef(0), m = E.useRef(null);
  E.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const g = E.useRef(!1), h = Ps(), y = E.useRef(null), p = E.useRef(null), x = E.useCallback((v) => {
    const {
      pulsate: C,
      rippleX: N,
      rippleY: M,
      rippleSize: j,
      cb: B
    } = v;
    u((G) => [...G, /* @__PURE__ */ T.jsx(Wu, {
      classes: {
        ripple: X(i.ripple, Re.ripple),
        rippleVisible: X(i.rippleVisible, Re.rippleVisible),
        ripplePulsate: X(i.ripplePulsate, Re.ripplePulsate),
        child: X(i.child, Re.child),
        childLeaving: X(i.childLeaving, Re.childLeaving),
        childPulsate: X(i.childPulsate, Re.childPulsate)
      },
      timeout: ar,
      pulsate: C,
      rippleX: N,
      rippleY: M,
      rippleSize: j
    }, f.current)]), f.current += 1, m.current = B;
  }, [i]), S = E.useCallback((v = {}, C = {}, N = () => {
  }) => {
    const {
      pulsate: M = !1,
      center: j = s || C.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = C;
    if ((v == null ? void 0 : v.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (g.current = !0);
    const G = B ? null : p.current, z = G ? G.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let d, k, R;
    if (j || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      d = Math.round(z.width / 2), k = Math.round(z.height / 2);
    else {
      const {
        clientX: w,
        clientY: A
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      d = Math.round(w - z.left), k = Math.round(A - z.top);
    }
    if (j)
      R = Math.sqrt((2 * z.width ** 2 + z.height ** 2) / 3), R % 2 === 0 && (R += 1);
    else {
      const w = Math.max(Math.abs((G ? G.clientWidth : 0) - d), d) * 2 + 2, A = Math.max(Math.abs((G ? G.clientHeight : 0) - k), k) * 2 + 2;
      R = Math.sqrt(w ** 2 + A ** 2);
    }
    v != null && v.touches ? y.current === null && (y.current = () => {
      x({
        pulsate: M,
        rippleX: d,
        rippleY: k,
        rippleSize: R,
        cb: N
      });
    }, h.start(Lu, () => {
      y.current && (y.current(), y.current = null);
    })) : x({
      pulsate: M,
      rippleX: d,
      rippleY: k,
      rippleSize: R,
      cb: N
    });
  }, [s, x, h]), $ = E.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), O = E.useCallback((v, C) => {
    if (h.clear(), (v == null ? void 0 : v.type) === "touchend" && y.current) {
      y.current(), y.current = null, h.start(0, () => {
        O(v, C);
      });
      return;
    }
    y.current = null, u((N) => N.length > 0 ? N.slice(1) : N), m.current = C;
  }, [h]);
  return E.useImperativeHandle(n, () => ({
    pulsate: $,
    start: S,
    stop: O
  }), [$, S, O]), /* @__PURE__ */ T.jsx(Uu, {
    className: X(Re.root, i.root, a),
    ref: p,
    ...c,
    children: /* @__PURE__ */ T.jsx(ju, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string
});
const Yu = Ns;
function Gu(e) {
  return se("MuiButtonBase", e);
}
const Hu = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ku = Hu, qu = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: s
  } = e, a = pe({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Gu, s);
  return n && o && (a.root += ` ${o}`), a;
}, Xu = K("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Ku.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ks = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: s,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: m = !1,
    focusRipple: g = !1,
    focusVisibleClassName: h,
    LinkComponent: y = "a",
    onBlur: p,
    onClick: x,
    onContextMenu: S,
    onDragLeave: $,
    onFocus: O,
    onFocusVisible: v,
    onKeyDown: C,
    onKeyUp: N,
    onMouseDown: M,
    onMouseLeave: j,
    onMouseUp: B,
    onTouchEnd: G,
    onTouchMove: z,
    onTouchStart: d,
    tabIndex: k = 0,
    TouchRippleProps: R,
    touchRippleRef: w,
    type: A,
    ...Y
  } = o, F = E.useRef(null), L = Ou(), I = Ee(L.ref, w), [b, _] = E.useState(!1);
  u && b && _(!1), E.useImperativeHandle(s, () => ({
    focusVisible: () => {
      _(!0), F.current.focus();
    }
  }), []);
  const V = L.shouldMount && !f && !u;
  E.useEffect(() => {
    b && g && !f && L.pulsate();
  }, [f, g, b, L]);
  const U = Ve(L, "start", M, m), Z = Ve(L, "stop", S, m), Q = Ve(L, "stop", $, m), H = Ve(L, "stop", B, m), J = Ve(L, "stop", (ne) => {
    b && ne.preventDefault(), j && j(ne);
  }, m), te = Ve(L, "start", d, m), W = Ve(L, "stop", G, m), ee = Ve(L, "stop", z, m), D = Ve(L, "stop", (ne) => {
    yo(ne.target) || _(!1), p && p(ne);
  }, !1), me = vt((ne) => {
    F.current || (F.current = ne.currentTarget), yo(ne.target) && (_(!0), v && v(ne)), O && O(ne);
  }), xe = () => {
    const ne = F.current;
    return l && l !== "button" && !(ne.tagName === "A" && ne.href);
  }, Pe = vt((ne) => {
    g && !ne.repeat && b && ne.key === " " && L.stop(ne, () => {
      L.start(ne);
    }), ne.target === ne.currentTarget && xe() && ne.key === " " && ne.preventDefault(), C && C(ne), ne.target === ne.currentTarget && xe() && ne.key === "Enter" && !u && (ne.preventDefault(), x && x(ne));
  }), Kt = vt((ne) => {
    g && ne.key === " " && b && !ne.defaultPrevented && L.stop(ne, () => {
      L.pulsate(ne);
    }), N && N(ne), x && ne.target === ne.currentTarget && xe() && ne.key === " " && !ne.defaultPrevented && x(ne);
  });
  let Xe = l;
  Xe === "button" && (Y.href || Y.to) && (Xe = y);
  const Ue = {};
  Xe === "button" ? (Ue.type = A === void 0 ? "button" : A, Ue.disabled = u) : (!Y.href && !Y.to && (Ue.role = "button"), u && (Ue["aria-disabled"] = u));
  const Qe = Ee(n, F), Ot = {
    ...o,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: m,
    focusRipple: g,
    tabIndex: k,
    focusVisible: b
  }, Ce = qu(Ot);
  return /* @__PURE__ */ T.jsxs(Xu, {
    as: Xe,
    className: X(Ce.root, c),
    ownerState: Ot,
    onBlur: D,
    onClick: x,
    onContextMenu: Z,
    onFocus: me,
    onKeyDown: Pe,
    onKeyUp: Kt,
    onMouseDown: U,
    onMouseLeave: J,
    onMouseUp: H,
    onDragLeave: Q,
    onTouchEnd: W,
    onTouchMove: ee,
    onTouchStart: te,
    ref: Qe,
    tabIndex: u ? -1 : k,
    type: A,
    ...Ue,
    ...Y,
    children: [a, V ? /* @__PURE__ */ T.jsx(Yu, {
      ref: I,
      center: i,
      ...R
    }) : null]
  });
});
function Ve(e, t, n, o = !1) {
  return vt((s) => (n && n(s), o || e[t](s), !0));
}
process.env.NODE_ENV !== "production" && (ks.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Os,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Cr,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: r.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  href: r.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: r.elementType,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * @ignore
   */
  onContextMenu: r.func,
  /**
   * @ignore
   */
  onDragLeave: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * @ignore
   */
  onMouseDown: r.func,
  /**
   * @ignore
   */
  onMouseLeave: r.func,
  /**
   * @ignore
   */
  onMouseUp: r.func,
  /**
   * @ignore
   */
  onTouchEnd: r.func,
  /**
   * @ignore
   */
  onTouchMove: r.func,
  /**
   * @ignore
   */
  onTouchStart: r.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @default 0
   */
  tabIndex: r.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: r.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: r.oneOfType([r.func, r.shape({
    current: r.shape({
      pulsate: r.func.isRequired,
      start: r.func.isRequired,
      stop: r.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string])
});
const Yt = ks;
function Qu(e) {
  return se("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const $e = 44, cr = Ft`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, lr = Ft`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Ju = typeof cr != "string" ? Lo`
        animation: ${cr} 1.4s linear infinite;
      ` : null, Zu = typeof lr != "string" ? Lo`
        animation: ${lr} 1.4s ease-in-out infinite;
      ` : null, ed = (e) => {
  const {
    classes: t,
    variant: n,
    color: o,
    disableShrink: s
  } = e, i = {
    root: ["root", n, `color${q(o)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${q(n)}`, s && "circleDisableShrink"]
  };
  return pe(i, Qu, t);
}, td = K("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${q(n.color)}`]];
  }
})(ge(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: Ju || {
      animation: `${cr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(at()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), nd = K("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), rd = K("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${q(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(ge(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: Zu || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${lr} 1.4s ease-in-out infinite`
    }
  }]
}))), od = K("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(ge(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), As = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: s,
    color: i = "primary",
    disableShrink: a = !1,
    enableTrackSlot: c = !1,
    size: l = 40,
    style: u,
    thickness: f = 3.6,
    value: m = 0,
    variant: g = "indeterminate",
    ...h
  } = o, y = {
    ...o,
    color: i,
    disableShrink: a,
    size: l,
    thickness: f,
    value: m,
    variant: g,
    enableTrackSlot: c
  }, p = ed(y), x = {}, S = {}, $ = {};
  if (g === "determinate") {
    const O = 2 * Math.PI * (($e - f) / 2);
    x.strokeDasharray = O.toFixed(3), $["aria-valuenow"] = Math.round(m), x.strokeDashoffset = `${((100 - m) / 100 * O).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ T.jsx(td, {
    className: X(p.root, s),
    style: {
      width: l,
      height: l,
      ...S,
      ...u
    },
    ownerState: y,
    ref: n,
    role: "progressbar",
    ...$,
    ...h,
    children: /* @__PURE__ */ T.jsxs(nd, {
      className: p.svg,
      ownerState: y,
      viewBox: `${$e / 2} ${$e / 2} ${$e} ${$e}`,
      children: [c ? /* @__PURE__ */ T.jsx(od, {
        className: p.track,
        ownerState: y,
        cx: $e,
        cy: $e,
        r: ($e - f) / 2,
        fill: "none",
        strokeWidth: f,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ T.jsx(rd, {
        className: p.circle,
        style: x,
        ownerState: y,
        cx: $e,
        cy: $e,
        r: ($e - f) / 2,
        fill: "none",
        strokeWidth: f
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (As.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Be(r.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */
  enableTrackSlot: r.bool,
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: r.oneOfType([r.number, r.string]),
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: r.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: r.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: r.oneOf(["determinate", "indeterminate"])
});
const Ms = As;
function sd(e) {
  return se("MuiIconButton", e);
}
const id = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), xo = id, ad = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: s,
    size: i,
    loading: a
  } = e, c = {
    root: ["root", a && "loading", n && "disabled", o !== "default" && `color${q(o)}`, s && `edge${q(s)}`, `size${q(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return pe(c, sd, t);
}, cd = K(Yt, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${q(n.color)}`], n.edge && t[`edge${q(n.edge)}`], t[`size${q(n.size)}`]];
  }
})(ge(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), ge(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(at()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(at()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${xo.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${xo.loading}`]: {
    color: "transparent"
  }
}))), ld = K("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), js = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: s = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: f = "medium",
    id: m,
    loading: g = null,
    loadingIndicator: h,
    ...y
  } = o, p = ss(m), x = h ?? /* @__PURE__ */ T.jsx(Ms, {
    "aria-labelledby": p,
    color: "inherit",
    size: 16
  }), S = {
    ...o,
    edge: s,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    loading: g,
    loadingIndicator: x,
    size: f
  }, $ = ad(S);
  return /* @__PURE__ */ T.jsxs(cd, {
    id: g ? p : m,
    className: X($.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l || g,
    ref: n,
    ...y,
    ownerState: S,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ T.jsx("span", {
      className: $.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ T.jsx(ld, {
        className: $.loadingIndicator,
        ownerState: S,
        children: g && x
      })
    }), i]
  });
});
process.env.NODE_ENV !== "production" && (js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Be(r.node, (e) => E.Children.toArray(e.children).some((n) => /* @__PURE__ */ E.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: r.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: r.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: r.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: r.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Ir = js;
function ud(e) {
  return se("MuiTypography", e);
}
const dd = ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), To = dd, pd = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, fd = Ql(), md = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: s,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, e.align !== "inherit" && `align${q(t)}`, n && "gutterBottom", o && "noWrap", s && "paragraph"]
  };
  return pe(c, ud, a);
}, gd = K("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${q(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(ge(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([n, o]) => n !== "inherit" && o && typeof o == "object").map(([n, o]) => ({
      props: {
        variant: n
      },
      style: o
    })), ...Object.entries(e.palette).filter(at()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${q(n)}`
      },
      style: {
        color: (e.vars || e).palette.text[n]
      }
    })), {
      props: ({
        ownerState: n
      }) => n.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), Eo = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, _s = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    color: o,
    ...s
  } = le({
    props: t,
    name: "MuiTypography"
  }), i = !pd[o], a = fd({
    ...s,
    ...i && {
      color: o
    }
  }), {
    align: c = "inherit",
    className: l,
    component: u,
    gutterBottom: f = !1,
    noWrap: m = !1,
    paragraph: g = !1,
    variant: h = "body1",
    variantMapping: y = Eo,
    ...p
  } = a, x = {
    ...a,
    align: c,
    color: o,
    className: l,
    component: u,
    gutterBottom: f,
    noWrap: m,
    paragraph: g,
    variant: h,
    variantMapping: y
  }, S = u || (g ? "p" : y[h] || Eo[h]) || "span", $ = md(x);
  return /* @__PURE__ */ T.jsx(gd, {
    as: S,
    ref: n,
    className: X($.root, l),
    ...p,
    ownerState: x,
    style: {
      ...c !== "inherit" && {
        "--Typography-textAlign": c
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (_s.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: r.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: r.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: r.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: r.bool,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: r.oneOfType([r.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), r.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: r.object
});
const Oe = _s;
function dn(e) {
  return typeof e == "string";
}
function Ds(e, t, n) {
  return e === void 0 || dn(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Bs(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function Co(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Ls(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: s,
    className: i
  } = e;
  if (!t) {
    const h = X(n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, o == null ? void 0 : o.className), y = {
      ...n == null ? void 0 : n.style,
      ...s == null ? void 0 : s.style,
      ...o == null ? void 0 : o.style
    }, p = {
      ...n,
      ...s,
      ...o
    };
    return h.length > 0 && (p.className = h), Object.keys(y).length > 0 && (p.style = y), {
      props: p,
      internalRef: void 0
    };
  }
  const a = Bs({
    ...s,
    ...o
  }), c = Co(o), l = Co(s), u = t(a), f = X(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, o == null ? void 0 : o.className), m = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...s == null ? void 0 : s.style,
    ...o == null ? void 0 : o.style
  }, g = {
    ...u,
    ...n,
    ...l,
    ...c
  };
  return f.length > 0 && (g.className = f), Object.keys(m).length > 0 && (g.style = m), {
    props: g,
    internalRef: u.ref
  };
}
function Vs(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Fs(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: s = !1,
    ...i
  } = e, a = s ? {} : Vs(n, o), {
    props: c,
    internalRef: l
  } = Ls({
    ...i,
    externalSlotProps: a
  }), u = Ee(l, a == null ? void 0 : a.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return Ds(t, {
    ...c,
    ref: u
  }, o);
}
const hd = qe(/* @__PURE__ */ T.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz"), yd = K(Yt, {
  name: "MuiBreadcrumbCollapsed"
})(ge(({
  theme: e
}) => ({
  display: "flex",
  marginLeft: `calc(${e.spacing(1)} * 0.5)`,
  marginRight: `calc(${e.spacing(1)} * 0.5)`,
  ...e.palette.mode === "light" ? {
    backgroundColor: e.palette.grey[100],
    color: e.palette.grey[700]
  } : {
    backgroundColor: e.palette.grey[700],
    color: e.palette.grey[100]
  },
  borderRadius: 2,
  "&:hover, &:focus": {
    ...e.palette.mode === "light" ? {
      backgroundColor: e.palette.grey[200]
    } : {
      backgroundColor: e.palette.grey[600]
    }
  },
  "&:active": {
    boxShadow: e.shadows[0],
    ...e.palette.mode === "light" ? {
      backgroundColor: Zn(e.palette.grey[200], 0.12)
    } : {
      backgroundColor: Zn(e.palette.grey[600], 0.12)
    }
  }
}))), bd = K(hd)({
  width: 24,
  height: 16
});
function zs(e) {
  const {
    slots: t = {},
    slotProps: n = {},
    ...o
  } = e, s = e;
  return /* @__PURE__ */ T.jsx("li", {
    children: /* @__PURE__ */ T.jsx(yd, {
      focusRipple: !0,
      ...o,
      ownerState: s,
      children: /* @__PURE__ */ T.jsx(bd, {
        as: t.CollapsedIcon,
        ownerState: s,
        ...n.collapsedIcon
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (zs.propTypes = {
  /**
   * The props used for the CollapsedIcon slot.
   * @default {}
   */
  slotProps: r.shape({
    collapsedIcon: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the BreadcumbCollapsed.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    CollapsedIcon: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.object
});
function vd(e) {
  return se("MuiBreadcrumbs", e);
}
const xd = ce("MuiBreadcrumbs", ["root", "ol", "li", "separator"]), ur = xd, Td = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  }, vd, t);
}, Ed = K(Oe, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${ur.li}`]: t.li
  }, t.root]
})({}), Cd = K("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol"
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
}), Sd = K("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator"
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function Od(e, t, n, o) {
  return e.reduce((s, i, a) => (a < e.length - 1 ? s = s.concat(i, /* @__PURE__ */ T.jsx(Sd, {
    "aria-hidden": !0,
    className: t,
    ownerState: o,
    children: n
  }, `separator-${a}`)) : s.push(i), s), []);
}
const Us = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiBreadcrumbs"
  }), {
    children: s,
    className: i,
    component: a = "nav",
    slots: c = {},
    slotProps: l = {},
    expandText: u = "Show path",
    itemsAfterCollapse: f = 1,
    itemsBeforeCollapse: m = 1,
    maxItems: g = 8,
    separator: h = "/",
    ...y
  } = o, [p, x] = E.useState(!1), S = {
    ...o,
    component: a,
    expanded: p,
    expandText: u,
    itemsAfterCollapse: f,
    itemsBeforeCollapse: m,
    maxItems: g,
    separator: h
  }, $ = Td(S), O = Fs({
    elementType: c.CollapsedIcon,
    externalSlotProps: l.collapsedIcon,
    ownerState: S
  }), v = E.useRef(null), C = (M) => {
    const j = () => {
      x(!0);
      const B = v.current.querySelector("a[href],button,[tabindex]");
      B && B.focus();
    };
    return m + f >= M.length ? (process.env.NODE_ENV !== "production" && console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.", `itemsAfterCollapse={${f}} + itemsBeforeCollapse={${m}} >= maxItems={${g}}`].join(`
`)), M) : [...M.slice(0, m), /* @__PURE__ */ T.jsx(zs, {
      "aria-label": u,
      slots: {
        CollapsedIcon: c.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: O
      },
      onClick: j
    }, "ellipsis"), ...M.slice(M.length - f, M.length)];
  }, N = E.Children.toArray(s).filter((M) => (process.env.NODE_ENV !== "production" && st.isFragment(M) && console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ E.isValidElement(M))).map((M, j) => /* @__PURE__ */ T.jsx("li", {
    className: $.li,
    children: M
  }, `child-${j}`));
  return /* @__PURE__ */ T.jsx(Ed, {
    ref: n,
    component: a,
    color: "textSecondary",
    className: X($.root, i),
    ownerState: S,
    ...y,
    children: /* @__PURE__ */ T.jsx(Cd, {
      className: $.ol,
      ref: v,
      ownerState: S,
      children: Od(p || g && N.length <= g ? N : C(N), $.separator, h, S)
    })
  });
});
process.env.NODE_ENV !== "production" && (Us.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Show path'
   */
  expandText: r.string,
  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   * @default 1
   */
  itemsAfterCollapse: bt,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: bt,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: bt,
  /**
   * Custom separator node.
   * @default '/'
   */
  separator: r.node,
  /**
   * The props used for each slot inside the Breadcumb.
   * @default {}
   */
  slotProps: r.shape({
    collapsedIcon: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Breadcumb.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    CollapsedIcon: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Rd = Us, wd = qe(/* @__PURE__ */ T.jsx("path", {
  d: "M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"
}), "NavigateNextRounded"), Id = K(Rd)(({ theme: e }) => ({
  margin: e.spacing(1, 0),
  [`& .${ur.separator}`]: {
    color: (e.vars || e).palette.action.disabled,
    margin: 1
  },
  [`& .${ur.ol}`]: {
    alignItems: "center"
  }
})), Pd = ({
  appName: e = "Dashboard",
  pageName: t = "Home"
}) => /* @__PURE__ */ T.jsxs(
  Id,
  {
    "aria-label": "breadcrumb",
    separator: /* @__PURE__ */ T.jsx(wd, { fontSize: "small" }),
    children: [
      /* @__PURE__ */ T.jsx(Oe, { variant: "body1", children: e }),
      /* @__PURE__ */ T.jsx(
        Oe,
        {
          variant: "body1",
          sx: { color: "text.primary", fontWeight: 600 },
          children: t
        }
      )
    ]
  }
), $d = K(hu)({
  width: "100%",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "8px",
  flexShrink: 0
}), Nd = ({
  appName: e = "Dashboard",
  pageName: t = "Home",
  onMenuClick: n,
  showMenuButton: o = !0,
  headerStyles: s
}) => /* @__PURE__ */ T.jsx(
  lu,
  {
    position: "fixed",
    sx: {
      boxShadow: 0,
      background: "white",
      backgroundImage: "none",
      top: "var(--template-frame-height, 0px)",
      left: { xs: 0, md: "240px" },
      // Full width on mobile, right of sidebar on desktop
      width: { xs: "100%", md: "calc(100% - 240px)" },
      // Full width on mobile, excluding sidebar on desktop
      zIndex: 1,
      // Lower z-index so sidebar appears above,
      height: "50px",
      ...s
    },
    children: /* @__PURE__ */ T.jsx($d, { variant: "dense", children: /* @__PURE__ */ T.jsxs(
      Ye,
      {
        direction: "row",
        sx: {
          alignItems: "center",
          flexGrow: 1,
          width: "100%",
          gap: 1
        },
        children: [
          /* @__PURE__ */ T.jsx(xs, { sx: { mr: "auto" }, children: /* @__PURE__ */ T.jsx(
            Pd,
            {
              appName: e,
              pageName: t
            }
          ) }),
          o && /* @__PURE__ */ T.jsx(
            Ir,
            {
              "aria-label": "menu",
              onClick: n,
              sx: {
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "action.hover"
                }
              },
              children: /* @__PURE__ */ T.jsx(Tu, {})
            }
          )
        ]
      }
    ) })
  }
);
function kd(e) {
  return se("MuiCard", e);
}
ce("MuiCard", ["root"]);
const Ad = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, kd, t);
}, Md = K(Nn, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Ws = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiCard"
  }), {
    className: s,
    raised: i = !1,
    ...a
  } = o, c = {
    ...o,
    raised: i
  }, l = Ad(c);
  return /* @__PURE__ */ T.jsx(Md, {
    className: X(l.root, s),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: c,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Ws.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: Be(r.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const jd = Ws;
function _d(e) {
  return se("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const Dd = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, _d, t);
}, Bd = K("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Ys = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiCardContent"
  }), {
    className: s,
    component: i = "div",
    ...a
  } = o, c = {
    ...o,
    component: i
  }, l = Dd(c);
  return /* @__PURE__ */ T.jsx(Bd, {
    as: i,
    className: X(l.root, s),
    ownerState: c,
    ref: n,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Ys.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Ld = Ys;
function Vd(e) {
  return se("MuiButton", e);
}
const Fd = ce("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Ze = Fd, Gs = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (Gs.displayName = "ButtonGroupContext");
const zd = Gs, Hs = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (Hs.displayName = "ButtonGroupButtonContext");
const Ud = Hs, Wd = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: o,
    size: s,
    variant: i,
    loading: a,
    loadingPosition: c,
    classes: l
  } = e, u = {
    root: ["root", a && "loading", i, `${i}${q(t)}`, `size${q(s)}`, `${i}Size${q(s)}`, `color${q(t)}`, n && "disableElevation", o && "fullWidth", a && `loadingPosition${q(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${q(s)}`],
    endIcon: ["icon", "endIcon", `iconSize${q(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = pe(u, Vd, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Ks = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Yd = K(Yt, {
  shouldForwardProp: (e) => St(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${q(n.color)}`], t[`size${q(n.size)}`], t[`${n.variant}Size${q(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Ze.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Ze.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Ze.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Ze.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(at()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[o].main,
        "--variant-outlinedColor": (e.vars || e).palette[o].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[o].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[o].contrastText,
        "--variant-containedBg": (e.vars || e).palette[o].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[o].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[o].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[o].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[o].main, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Ze.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Ze.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Ze.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Gd = K("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${q(n.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Ks]
})), Hd = K("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${q(n.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Ks]
})), Kd = K("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), So = K("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), qs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = E.useContext(zd), s = E.useContext(Ud), i = Lt(o, t), a = le({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: f,
    disabled: m = !1,
    disableElevation: g = !1,
    disableFocusRipple: h = !1,
    endIcon: y,
    focusVisibleClassName: p,
    fullWidth: x = !1,
    id: S,
    loading: $ = null,
    loadingIndicator: O,
    loadingPosition: v = "center",
    size: C = "medium",
    startIcon: N,
    type: M,
    variant: j = "text",
    ...B
  } = a, G = ss(S), z = O ?? /* @__PURE__ */ T.jsx(Ms, {
    "aria-labelledby": G,
    color: "inherit",
    size: 16
  }), d = {
    ...a,
    color: l,
    component: u,
    disabled: m,
    disableElevation: g,
    disableFocusRipple: h,
    fullWidth: x,
    loading: $,
    loadingIndicator: z,
    loadingPosition: v,
    size: C,
    type: M,
    variant: j
  }, k = Wd(d), R = (N || $ && v === "start") && /* @__PURE__ */ T.jsx(Gd, {
    className: k.startIcon,
    ownerState: d,
    children: N || /* @__PURE__ */ T.jsx(So, {
      className: k.loadingIconPlaceholder,
      ownerState: d
    })
  }), w = (y || $ && v === "end") && /* @__PURE__ */ T.jsx(Hd, {
    className: k.endIcon,
    ownerState: d,
    children: y || /* @__PURE__ */ T.jsx(So, {
      className: k.loadingIconPlaceholder,
      ownerState: d
    })
  }), A = s || "", Y = typeof $ == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ T.jsx("span", {
      className: k.loadingWrapper,
      style: {
        display: "contents"
      },
      children: $ && /* @__PURE__ */ T.jsx(Kd, {
        className: k.loadingIndicator,
        ownerState: d,
        children: z
      })
    })
  ) : null;
  return /* @__PURE__ */ T.jsxs(Yd, {
    ownerState: d,
    className: X(o.className, k.root, f, A),
    component: u,
    disabled: m || $,
    focusRipple: !h,
    focusVisibleClassName: X(k.focusVisible, p),
    ref: n,
    type: M,
    id: $ ? G : S,
    ...B,
    classes: k,
    children: [R, v !== "end" && Y, c, v === "end" && Y, w]
  });
});
process.env.NODE_ENV !== "production" && (qs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * Element placed after the children.
   */
  endIcon: r.node,
  /**
   * @ignore
   */
  focusVisibleClassName: r.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: r.string,
  /**
   * @ignore
   */
  id: r.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: r.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: r.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: r.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * Element placed before the children.
   */
  startIcon: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: r.oneOfType([r.oneOf(["contained", "outlined", "text"]), r.string])
});
const Xs = qs, qd = qe(/* @__PURE__ */ T.jsx("path", {
  d: "m19.46 8 .79-1.75L22 5.46c.39-.18.39-.73 0-.91l-1.75-.79L19.46 2c-.18-.39-.73-.39-.91 0l-.79 1.75-1.76.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0M11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5-.79 1.75-1.75.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.73.39.91 0l.79-1.75 1.76-.79c.39-.18.39-.73 0-.91l-1.75-.79-.79-1.76c-.18-.39-.74-.39-.92 0"
}), "AutoAwesomeRounded"), Qs = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: o,
  show: s = !0
}) => s ? /* @__PURE__ */ T.jsx(jd, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ T.jsxs(Ld, { children: [
  /* @__PURE__ */ T.jsx(qd, { fontSize: "small" }),
  /* @__PURE__ */ T.jsx(Oe, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ T.jsx(
    Oe,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: t
    }
  ),
  /* @__PURE__ */ T.jsx(
    Xs,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: o,
      children: n
    }
  )
] }) }) : null, Js = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (Js.displayName = "ListContext");
const Ne = Js;
function Xd(e) {
  return se("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const Qd = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: s
  } = e;
  return pe({
    root: ["root", !n && "padding", o && "dense", s && "subheader"]
  }, Xd, t);
}, Jd = K("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), Zs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiList"
  }), {
    children: s,
    className: i,
    component: a = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: u,
    ...f
  } = o, m = E.useMemo(() => ({
    dense: c
  }), [c]), g = {
    ...o,
    component: a,
    dense: c,
    disablePadding: l
  }, h = Qd(g);
  return /* @__PURE__ */ T.jsx(Ne.Provider, {
    value: m,
    children: /* @__PURE__ */ T.jsxs(Jd, {
      as: a,
      className: X(h.root, i),
      ref: n,
      ownerState: g,
      ...f,
      children: [u, s]
    })
  });
});
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: r.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: r.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const dr = Zs;
function Zd(e) {
  return se("MuiListItem", e);
}
ce("MuiListItem", ["root", "container", "dense", "alignItemsFlexStart", "divider", "gutters", "padding", "secondaryAction"]);
function ep(e) {
  return se("MuiListItemButton", e);
}
const tp = ce("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), gt = tp, np = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters];
}, rp = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: o,
    disabled: s,
    disableGutters: i,
    divider: a,
    selected: c
  } = e, u = pe({
    root: ["root", o && "dense", !i && "gutters", a && "divider", s && "disabled", t === "flex-start" && "alignItemsFlexStart", c && "selected"]
  }, ep, n);
  return {
    ...n,
    ...u
  };
}, op = K(Yt, {
  shouldForwardProp: (e) => St(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: np
})(ge(({
  theme: e
}) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${gt.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${gt.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${gt.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${gt.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${gt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: {
      alignItems: "flex-start"
    },
    style: {
      alignItems: "flex-start"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }]
}))), ei = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: s = "center",
    autoFocus: i = !1,
    component: a = "div",
    children: c,
    dense: l = !1,
    disableGutters: u = !1,
    divider: f = !1,
    focusVisibleClassName: m,
    selected: g = !1,
    className: h,
    ...y
  } = o, p = E.useContext(Ne), x = E.useMemo(() => ({
    dense: l || p.dense || !1,
    alignItems: s,
    disableGutters: u
  }), [s, p.dense, l, u]), S = E.useRef(null);
  Tt(() => {
    i && (S.current ? S.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [i]);
  const $ = {
    ...o,
    alignItems: s,
    dense: x.dense,
    disableGutters: u,
    divider: f,
    selected: g
  }, O = rp($), v = Ee(S, n);
  return /* @__PURE__ */ T.jsx(Ne.Provider, {
    value: x,
    children: /* @__PURE__ */ T.jsx(op, {
      ref: v,
      href: y.href || y.to,
      component: (y.href || y.to) && a === "div" ? "button" : a,
      focusVisibleClassName: X(O.focusVisible, m),
      ownerState: $,
      className: X(O.root, h),
      ...y,
      classes: O,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (ei.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: r.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: r.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  href: r.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Oo = ei;
function sp(e) {
  return se("MuiListItemSecondaryAction", e);
}
ce("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const ip = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return pe({
    root: ["root", t && "disableGutters"]
  }, sp, n);
}, ap = K("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.disableGutters && t.disableGutters];
  }
})({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)",
  variants: [{
    props: ({
      ownerState: e
    }) => e.disableGutters,
    style: {
      right: 0
    }
  }]
}), Pr = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: s,
    ...i
  } = o, a = E.useContext(Ne), c = {
    ...o,
    disableGutters: a.disableGutters
  }, l = ip(c);
  return /* @__PURE__ */ T.jsx(ap, {
    className: X(l.root, s),
    ownerState: c,
    ref: n,
    ...i
  });
});
process.env.NODE_ENV !== "production" && (Pr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
Pr.muiName = "ListItemSecondaryAction";
const cp = Pr, lp = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.hasSecondaryAction && t.secondaryAction];
}, up = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: o,
    disableGutters: s,
    disablePadding: i,
    divider: a,
    hasSecondaryAction: c
  } = e;
  return pe({
    root: ["root", o && "dense", !s && "gutters", !i && "padding", a && "divider", t === "flex-start" && "alignItemsFlexStart", c && "secondaryAction"],
    container: ["container"]
  }, Zd, n);
}, dp = K("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: lp
})(ge(({
  theme: e
}) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disablePadding && t.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disablePadding && !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disablePadding && !!t.secondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.secondaryAction,
    style: {
      [`& > .${gt.root}`]: {
        paddingRight: 48
      }
    }
  }, {
    props: {
      alignItems: "flex-start"
    },
    style: {
      alignItems: "flex-start"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.button,
    style: {
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (e.vars || e).palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hasSecondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }]
}))), pp = K("li", {
  name: "MuiListItem",
  slot: "Container"
})({
  position: "relative"
}), ti = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: s = "center",
    children: i,
    className: a,
    component: c,
    components: l = {},
    componentsProps: u = {},
    ContainerComponent: f = "li",
    ContainerProps: {
      className: m,
      ...g
    } = {},
    dense: h = !1,
    disableGutters: y = !1,
    disablePadding: p = !1,
    divider: x = !1,
    secondaryAction: S,
    slotProps: $ = {},
    slots: O = {},
    ...v
  } = o, C = E.useContext(Ne), N = E.useMemo(() => ({
    dense: h || C.dense || !1,
    alignItems: s,
    disableGutters: y
  }), [s, C.dense, h, y]), M = E.useRef(null), j = E.Children.toArray(i), B = j.length && is(j[j.length - 1], ["ListItemSecondaryAction"]), G = {
    ...o,
    alignItems: s,
    dense: N.dense,
    disableGutters: y,
    disablePadding: p,
    divider: x,
    hasSecondaryAction: B
  }, z = up(G), d = Ee(M, n), k = O.root || l.Root || dp, R = $.root || u.root || {}, w = {
    className: X(z.root, R.className, a),
    ...v
  };
  let A = c || "li";
  return B ? (A = !w.component && !c ? "div" : A, f === "li" && (A === "li" ? A = "div" : w.component === "li" && (w.component = "div")), /* @__PURE__ */ T.jsx(Ne.Provider, {
    value: N,
    children: /* @__PURE__ */ T.jsxs(pp, {
      as: f,
      className: X(z.container, m),
      ref: d,
      ownerState: G,
      ...g,
      children: [/* @__PURE__ */ T.jsx(k, {
        ...R,
        ...!dn(k) && {
          as: A,
          ownerState: {
            ...G,
            ...R.ownerState
          }
        },
        ...w,
        children: j
      }), j.pop()]
    })
  })) : /* @__PURE__ */ T.jsx(Ne.Provider, {
    value: N,
    children: /* @__PURE__ */ T.jsxs(k, {
      ...R,
      as: A,
      ref: d,
      ...!dn(k) && {
        ownerState: {
          ...G,
          ...R.ownerState
        }
      },
      ...w,
      children: [j, S && /* @__PURE__ */ T.jsx(cp, {
        children: S
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (ti.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: r.oneOf(["center", "flex-start"]),
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: Be(r.node, (e) => {
    const t = E.Children.toArray(e.children);
    let n = -1;
    for (let o = t.length - 1; o >= 0; o -= 1) {
      const s = t[o];
      if (is(s, ["ListItemSecondaryAction"])) {
        n = o;
        break;
      }
    }
    return n !== -1 && n !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  componentsProps: r.shape({
    root: r.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated Use the `component` or `slots.root` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ContainerComponent: Cr,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated Use the `slotProps.root` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ContainerProps: r.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: r.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: r.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: r.bool,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: r.node,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: r.shape({
    root: r.object
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: r.shape({
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Ro = ti;
function fp(e) {
  return se("MuiListItemIcon", e);
}
const mp = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), wo = mp, gp = (e) => {
  const {
    alignItems: t,
    classes: n
  } = e;
  return pe({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, fp, n);
}, hp = K("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(ge(({
  theme: e
}) => ({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex",
  variants: [{
    props: {
      alignItems: "flex-start"
    },
    style: {
      marginTop: 8
    }
  }]
}))), ni = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: s,
    ...i
  } = o, a = E.useContext(Ne), c = {
    ...o,
    alignItems: a.alignItems
  }, l = gp(c);
  return /* @__PURE__ */ T.jsx(hp, {
    className: X(l.root, s),
    ownerState: c,
    ref: n,
    ...i
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Io = ni;
function yp(e) {
  return se("MuiListItemText", e);
}
const bp = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), ht = bp;
function be(e, t) {
  const {
    className: n,
    elementType: o,
    ownerState: s,
    externalForwardedProps: i,
    internalForwardedProps: a,
    shouldForwardComponentProp: c = !1,
    ...l
  } = t, {
    component: u,
    slots: f = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...g
  } = i, h = f[e] || o, y = Vs(m[e], s), {
    props: {
      component: p,
      ...x
    },
    internalRef: S
  } = Ls({
    className: n,
    ...l,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: y
  }), $ = Ee(S, y == null ? void 0 : y.ref, t.ref), O = e === "root" ? p || u : p, v = Ds(h, {
    ...e === "root" && !u && !f[e] && a,
    ...e !== "root" && !f[e] && a,
    ...x,
    ...O && !c && {
      as: O
    },
    ...O && c && {
      component: O
    },
    ref: $
  }, s);
  return [h, v];
}
const vp = (e) => {
  const {
    classes: t,
    inset: n,
    primary: o,
    secondary: s,
    dense: i
  } = e;
  return pe({
    root: ["root", n && "inset", i && "dense", o && s && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, yp, t);
}, xp = K("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ht.primary}`]: t.primary
    }, {
      [`& .${ht.secondary}`]: t.secondary
    }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${To.root}:where(& .${ht.primary})`]: {
    display: "block"
  },
  [`.${To.root}:where(& .${ht.secondary})`]: {
    display: "block"
  },
  variants: [{
    props: ({
      ownerState: e
    }) => e.primary && e.secondary,
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, {
    props: ({
      ownerState: e
    }) => e.inset,
    style: {
      paddingLeft: 56
    }
  }]
}), ri = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItemText"
  }), {
    children: s,
    className: i,
    disableTypography: a = !1,
    inset: c = !1,
    primary: l,
    primaryTypographyProps: u,
    secondary: f,
    secondaryTypographyProps: m,
    slots: g = {},
    slotProps: h = {},
    ...y
  } = o, {
    dense: p
  } = E.useContext(Ne);
  let x = l ?? s, S = f;
  const $ = {
    ...o,
    disableTypography: a,
    inset: c,
    primary: !!x,
    secondary: !!S,
    dense: p
  }, O = vp($), v = {
    slots: g,
    slotProps: {
      primary: u,
      secondary: m,
      ...h
    }
  }, [C, N] = be("root", {
    className: X(O.root, i),
    elementType: xp,
    externalForwardedProps: {
      ...v,
      ...y
    },
    ownerState: $,
    ref: n
  }), [M, j] = be("primary", {
    className: O.primary,
    elementType: Oe,
    externalForwardedProps: v,
    ownerState: $
  }), [B, G] = be("secondary", {
    className: O.secondary,
    elementType: Oe,
    externalForwardedProps: v,
    ownerState: $
  });
  return x != null && x.type !== Oe && !a && (x = /* @__PURE__ */ T.jsx(M, {
    variant: p ? "body2" : "body1",
    component: j != null && j.variant ? void 0 : "span",
    ...j,
    children: x
  })), S != null && S.type !== Oe && !a && (S = /* @__PURE__ */ T.jsx(B, {
    variant: "body2",
    color: "textSecondary",
    ...G,
    children: S
  })), /* @__PURE__ */ T.jsxs(C, {
    ...N,
    children: [x, S]
  });
});
process.env.NODE_ENV !== "production" && (ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: r.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: r.bool,
  /**
   * The main content element.
   */
  primary: r.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.primary` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  primaryTypographyProps: r.object,
  /**
   * The secondary content element.
   */
  secondary: r.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.secondary` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  secondaryTypographyProps: r.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    primary: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    secondary: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    primary: r.elementType,
    root: r.elementType,
    secondary: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Po = ri, oi = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: o
}) => {
  const s = (i) => {
    o && o(i);
  };
  return /* @__PURE__ */ T.jsxs(Ye, { sx: { flexGrow: 1, p: 1, justifyContent: "space-between" }, children: [
    /* @__PURE__ */ T.jsx(dr, { dense: !0, children: e.map((i, a) => /* @__PURE__ */ T.jsx(
      Ro,
      {
        disablePadding: !0,
        sx: { display: "block" },
        children: /* @__PURE__ */ T.jsxs(
          Oo,
          {
            selected: n === i.path,
            onClick: () => s(i.path),
            component: "a",
            href: i.path,
            sx: {
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "action.hover",
                "& .MuiListItemText-primary": {
                  color: "text.primary"
                },
                "& .MuiListItemIcon-root": {
                  color: "text.primary"
                }
              },
              "&.Mui-selected": {
                backgroundColor: "action.selected",
                "& .MuiListItemText-primary": {
                  color: "text.primary"
                },
                "& .MuiListItemIcon-root": {
                  color: "text.primary"
                }
              }
            },
            children: [
              /* @__PURE__ */ T.jsx(Io, { children: i.icon }),
              /* @__PURE__ */ T.jsx(Po, { primary: i.text })
            ]
          }
        )
      },
      a
    )) }),
    t.length > 0 && /* @__PURE__ */ T.jsx(dr, { dense: !0, children: t.map((i, a) => /* @__PURE__ */ T.jsx(
      Ro,
      {
        disablePadding: !0,
        sx: { display: "block" },
        children: /* @__PURE__ */ T.jsxs(
          Oo,
          {
            selected: n === i.path,
            onClick: () => s(i.path),
            component: "a",
            href: i.path,
            sx: {
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "action.hover",
                "& .MuiListItemText-primary": {
                  color: "text.primary"
                },
                "& .MuiListItemIcon-root": {
                  color: "text.primary"
                }
              },
              "&.Mui-selected": {
                backgroundColor: "action.selected",
                "& .MuiListItemText-primary": {
                  color: "text.primary"
                },
                "& .MuiListItemIcon-root": {
                  color: "text.primary"
                }
              }
            },
            children: [
              /* @__PURE__ */ T.jsx(Io, { children: i.icon }),
              /* @__PURE__ */ T.jsx(Po, { primary: i.text })
            ]
          }
        )
      },
      a
    )) })
  ] });
}, Tp = qe(/* @__PURE__ */ T.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Ep(e) {
  return se("MuiAvatar", e);
}
ce("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Cp = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: o
  } = e;
  return pe({
    root: ["root", n, o && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Ep, t);
}, Sp = K("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
  }
})(ge(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: e.typography.fontFamily,
  fontSize: e.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  variants: [{
    props: {
      variant: "rounded"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius
    }
  }, {
    props: {
      variant: "square"
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: !0
    },
    style: {
      color: (e.vars || e).palette.background.default,
      ...e.vars ? {
        backgroundColor: e.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: e.palette.grey[400],
        ...e.applyStyles("dark", {
          backgroundColor: e.palette.grey[600]
        })
      }
    }
  }]
}))), Op = K("img", {
  name: "MuiAvatar",
  slot: "Img"
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
}), Rp = K(Tp, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function wp({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: o
}) {
  const [s, i] = E.useState(!1);
  return E.useEffect(() => {
    if (!n && !o)
      return;
    i(!1);
    let a = !0;
    const c = new Image();
    return c.onload = () => {
      a && i("loaded");
    }, c.onerror = () => {
      a && i("error");
    }, c.crossOrigin = e, c.referrerPolicy = t, c.src = n, o && (c.srcset = o), () => {
      a = !1;
    };
  }, [e, t, n, o]), s;
}
const si = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: s,
    children: i,
    className: a,
    component: c = "div",
    slots: l = {},
    slotProps: u = {},
    imgProps: f,
    sizes: m,
    src: g,
    srcSet: h,
    variant: y = "circular",
    ...p
  } = o;
  let x = null;
  const S = {
    ...o,
    component: c,
    variant: y
  }, $ = wp({
    ...f,
    ...typeof u.img == "function" ? u.img(S) : u.img,
    src: g,
    srcSet: h
  }), O = g || h, v = O && $ !== "error";
  S.colorDefault = !v, delete S.ownerState;
  const C = Cp(S), [N, M] = be("root", {
    ref: n,
    className: X(C.root, a),
    elementType: Sp,
    externalForwardedProps: {
      slots: l,
      slotProps: u,
      component: c,
      ...p
    },
    ownerState: S
  }), [j, B] = be("img", {
    className: C.img,
    elementType: Op,
    externalForwardedProps: {
      slots: l,
      slotProps: {
        img: {
          ...f,
          ...u.img
        }
      }
    },
    additionalProps: {
      alt: s,
      src: g,
      srcSet: h,
      sizes: m
    },
    ownerState: S
  }), [G, z] = be("fallback", {
    className: C.fallback,
    elementType: Rp,
    externalForwardedProps: {
      slots: l,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: S
  });
  return v ? x = /* @__PURE__ */ T.jsx(j, {
    ...B
  }) : i || i === 0 ? x = i : O && s ? x = s[0] : x = /* @__PURE__ */ T.jsx(G, {
    ...z
  }), /* @__PURE__ */ T.jsx(N, {
    ...M,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (si.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: r.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  imgProps: r.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: r.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    fallback: r.oneOfType([r.func, r.object]),
    img: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    fallback: r.elementType,
    img: r.elementType,
    root: r.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: r.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: r.oneOfType([r.oneOf(["circular", "rounded", "square"]), r.string])
});
const ii = si;
function Ip(e) {
  return se("MuiDivider", e);
}
const Pp = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), $o = Pp, $p = (e) => {
  const {
    absolute: t,
    children: n,
    classes: o,
    flexItem: s,
    light: i,
    orientation: a,
    textAlign: c,
    variant: l
  } = e;
  return pe({
    root: ["root", t && "absolute", l, i && "light", a === "vertical" && "vertical", s && "flexItem", n && "withChildren", n && a === "vertical" && "withChildrenVertical", c === "right" && a !== "vertical" && "textAlignRight", c === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, Ip, o);
}, Np = K("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(ge(({
  theme: e
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin",
  variants: [{
    props: {
      absolute: !0
    },
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }
  }, {
    props: {
      light: !0
    },
    style: {
      borderColor: e.alpha((e.vars || e).palette.divider, 0.08)
    }
  }, {
    props: {
      variant: "inset"
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: "middle",
      orientation: "horizontal"
    },
    style: {
      marginLeft: e.spacing(2),
      marginRight: e.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }
  }, {
    props: {
      flexItem: !0
    },
    style: {
      alignSelf: "stretch",
      height: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.children,
    style: {
      display: "flex",
      textAlign: "center",
      border: 0,
      borderTopStyle: "solid",
      borderLeftStyle: "solid",
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.children && t.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(e.vars || e).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.orientation === "vertical" && t.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.textAlign === "right" && t.orientation !== "vertical",
    style: {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.textAlign === "left" && t.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
}))), kp = K("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(ge(({
  theme: e
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${e.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${e.spacing(1)} * 1.2)`
    }
  }]
}))), pn = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: s = !1,
    children: i,
    className: a,
    orientation: c = "horizontal",
    component: l = i || c === "vertical" ? "div" : "hr",
    flexItem: u = !1,
    light: f = !1,
    role: m = l !== "hr" ? "separator" : void 0,
    textAlign: g = "center",
    variant: h = "fullWidth",
    ...y
  } = o, p = {
    ...o,
    absolute: s,
    component: l,
    flexItem: u,
    light: f,
    orientation: c,
    role: m,
    textAlign: g,
    variant: h
  }, x = $p(p);
  return /* @__PURE__ */ T.jsx(Np, {
    as: l,
    className: X(x.root, a),
    role: m,
    ref: n,
    ownerState: p,
    "aria-orientation": m === "separator" && (l !== "hr" || c === "vertical") ? c : void 0,
    ...y,
    children: i ? /* @__PURE__ */ T.jsx(kp, {
      className: x.wrapper,
      ownerState: p,
      children: i
    }) : null
  });
});
pn && (pn.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (pn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: r.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  light: r.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: r.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: r.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: r.oneOfType([r.oneOf(["fullWidth", "inset", "middle"]), r.string])
});
const fn = pn;
function ai(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Ap(e) {
  const t = De(e);
  return t.body === e ? Fe(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Dt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function No(e) {
  return parseInt(Fe(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Mp(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function ko(e, t, n, o, s) {
  const i = [t, n, ...o];
  [].forEach.call(e.children, (a) => {
    const c = !i.includes(a), l = !Mp(a);
    c && l && Dt(a, s);
  });
}
function Un(e, t) {
  let n = -1;
  return e.some((o, s) => t(o) ? (n = s, !0) : !1), n;
}
function jp(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (Ap(o)) {
      const a = ai(Fe(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${No(o) + a}px`;
      const c = De(o).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${No(l) + a}px`;
      });
    }
    let i;
    if (o.parentNode instanceof DocumentFragment)
      i = De(o).body;
    else {
      const a = o.parentElement, c = Fe(o);
      i = (a == null ? void 0 : a.nodeName) === "HTML" && c.getComputedStyle(a).overflowY === "scroll" ? a : o;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: a,
      property: c
    }) => {
      i ? a.style.setProperty(c, i) : a.style.removeProperty(c);
    });
  };
}
function _p(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Dp {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && Dt(t.modalRef, !1);
    const s = _p(n);
    ko(n, t.mount, t.modalRef, s, !0);
    const i = Un(this.containers, (a) => a.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: s
    }), o);
  }
  mount(t, n) {
    const o = Un(this.containers, (i) => i.modals.includes(t)), s = this.containers[o];
    s.restore || (s.restore = jp(s, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const s = Un(this.containers, (a) => a.modals.includes(t)), i = this.containers[s];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(o, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Dt(t.modalRef, n), ko(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && Dt(a.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Et(e, t, n, o, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = s || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function Bp(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ci(e, t, n, o, s) {
  const i = e[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !Bp(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const li = Be(r.element, ci);
li.isRequired = Be(r.element.isRequired, ci);
const Gt = li;
function Ht(e) {
  var t;
  return parseInt(E.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Lp = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Vp(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Fp(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function zp(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Fp(e));
}
function Up(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Lp)).forEach((o, s) => {
    const i = Vp(o);
    i === -1 || !zp(o) || (i === 0 ? t.push(o) : n.push({
      documentOrder: s,
      tabIndex: i,
      node: o
    }));
  }), n.sort((o, s) => o.tabIndex === s.tabIndex ? o.documentOrder - s.documentOrder : o.tabIndex - s.tabIndex).map((o) => o.node).concat(t);
}
function Wp() {
  return !0;
}
function mn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: s = !1,
    getTabbable: i = Up,
    isEnabled: a = Wp,
    open: c
  } = e, l = E.useRef(!1), u = E.useRef(null), f = E.useRef(null), m = E.useRef(null), g = E.useRef(null), h = E.useRef(!1), y = E.useRef(null), p = Ee(Ht(t), y), x = E.useRef(null);
  E.useEffect(() => {
    !c || !y.current || (h.current = !n);
  }, [n, c]), E.useEffect(() => {
    if (!c || !y.current)
      return;
    const O = De(y.current);
    return y.current.contains(O.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), h.current && y.current.focus()), () => {
      s || (m.current && m.current.focus && (l.current = !0, m.current.focus()), m.current = null);
    };
  }, [c]), E.useEffect(() => {
    if (!c || !y.current)
      return;
    const O = De(y.current), v = (M) => {
      x.current = M, !(o || !a() || M.key !== "Tab") && O.activeElement === y.current && M.shiftKey && (l.current = !0, f.current && f.current.focus());
    }, C = () => {
      var B, G;
      const M = y.current;
      if (M === null)
        return;
      if (!O.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (M.contains(O.activeElement) || o && O.activeElement !== u.current && O.activeElement !== f.current)
        return;
      if (O.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!h.current)
        return;
      let j = [];
      if ((O.activeElement === u.current || O.activeElement === f.current) && (j = i(y.current)), j.length > 0) {
        const z = !!((B = x.current) != null && B.shiftKey && ((G = x.current) == null ? void 0 : G.key) === "Tab"), d = j[0], k = j[j.length - 1];
        typeof d != "string" && typeof k != "string" && (z ? k.focus() : d.focus());
      } else
        M.focus();
    };
    O.addEventListener("focusin", C), O.addEventListener("keydown", v, !0);
    const N = setInterval(() => {
      O.activeElement && O.activeElement.tagName === "BODY" && C();
    }, 50);
    return () => {
      clearInterval(N), O.removeEventListener("focusin", C), O.removeEventListener("keydown", v, !0);
    };
  }, [n, o, s, a, c, i]);
  const S = (O) => {
    m.current === null && (m.current = O.relatedTarget), h.current = !0, g.current = O.target;
    const v = t.props.onFocus;
    v && v(O);
  }, $ = (O) => {
    m.current === null && (m.current = O.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ T.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ T.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: $,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: p,
      onFocus: S
    }), /* @__PURE__ */ T.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: $,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (mn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Gt,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: r.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: r.func,
  /**
   * If `true`, focus is locked.
   */
  open: r.bool.isRequired
});
process.env.NODE_ENV !== "production" && (mn["propTypes"] = rs(mn.propTypes));
function Yp(e) {
  return typeof e == "function" ? e() : e;
}
const gn = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    children: o,
    container: s,
    disablePortal: i = !1
  } = t, [a, c] = E.useState(null), l = Ee(/* @__PURE__ */ E.isValidElement(o) ? Ht(o) : null, n);
  if (Tt(() => {
    i || c(Yp(s) || document.body);
  }, [s, i]), Tt(() => {
    if (a && !i)
      return ho(n, a), () => {
        ho(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ E.isValidElement(o)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ E.cloneElement(o, u);
    }
    return o;
  }
  return a && /* @__PURE__ */ Bi.createPortal(o, a);
});
process.env.NODE_ENV !== "production" && (gn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: r.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Et, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool
});
process.env.NODE_ENV !== "production" && (gn["propTypes"] = rs(gn.propTypes));
const Gp = gn, $r = (e) => e.scrollTop;
function Ct(e, t) {
  const {
    timeout: n,
    easing: o,
    style: s = {}
  } = e;
  return {
    duration: s.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: s.transitionTimingFunction ?? (typeof o == "object" ? o[t.mode] : o),
    delay: s.transitionDelay
  };
}
const Hp = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, ui = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = Wt(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: c,
    easing: l,
    in: u,
    onEnter: f,
    onEntered: m,
    onEntering: g,
    onExit: h,
    onExited: y,
    onExiting: p,
    style: x,
    timeout: S = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: $ = Sr,
    ...O
  } = t, v = E.useRef(null), C = Ee(v, Ht(c), n), N = (R) => (w) => {
    if (R) {
      const A = v.current;
      w === void 0 ? R(A) : R(A, w);
    }
  }, M = N(g), j = N((R, w) => {
    $r(R);
    const A = Ct({
      style: x,
      timeout: S,
      easing: l
    }, {
      mode: "enter"
    });
    R.style.webkitTransition = o.transitions.create("opacity", A), R.style.transition = o.transitions.create("opacity", A), f && f(R, w);
  }), B = N(m), G = N(p), z = N((R) => {
    const w = Ct({
      style: x,
      timeout: S,
      easing: l
    }, {
      mode: "exit"
    });
    R.style.webkitTransition = o.transitions.create("opacity", w), R.style.transition = o.transitions.create("opacity", w), h && h(R);
  }), d = N(y), k = (R) => {
    i && i(v.current, R);
  };
  return /* @__PURE__ */ T.jsx($, {
    appear: a,
    in: u,
    nodeRef: v,
    onEnter: j,
    onEntered: B,
    onEntering: M,
    onExit: z,
    onExited: d,
    onExiting: G,
    addEndListener: k,
    timeout: S,
    ...O,
    children: (R, {
      ownerState: w,
      ...A
    }) => /* @__PURE__ */ E.cloneElement(c, {
      style: {
        opacity: 0,
        visibility: R === "exited" && !u ? "hidden" : void 0,
        ...Hp[R],
        ...x,
        ...c.props.style
      },
      ref: C,
      ...A
    })
  });
});
process.env.NODE_ENV !== "production" && (ui.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: Gt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
const Kp = ui;
function qp(e) {
  return se("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const Xp = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return pe({
    root: ["root", n && "invisible"]
  }, qp, t);
}, Qp = K("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), di = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: s,
    className: i,
    component: a = "div",
    invisible: c = !1,
    open: l,
    components: u = {},
    componentsProps: f = {},
    slotProps: m = {},
    slots: g = {},
    TransitionComponent: h,
    transitionDuration: y,
    ...p
  } = o, x = {
    ...o,
    component: a,
    invisible: c
  }, S = Xp(x), $ = {
    transition: h,
    root: u.Root,
    ...g
  }, O = {
    ...f,
    ...m
  }, v = {
    component: a,
    slots: $,
    slotProps: O
  }, [C, N] = be("root", {
    elementType: Qp,
    externalForwardedProps: v,
    className: X(S.root, i),
    ownerState: x
  }), [M, j] = be("transition", {
    elementType: Kp,
    externalForwardedProps: v,
    ownerState: x
  });
  return /* @__PURE__ */ T.jsx(M, {
    in: l,
    timeout: y,
    ...p,
    ...j,
    children: /* @__PURE__ */ T.jsx(C, {
      "aria-hidden": !0,
      ...N,
      classes: S,
      ref: n,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    root: r.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: r.bool,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: r.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
const Jp = di;
function Zp(e) {
  return typeof e == "function" ? e() : e;
}
function ef(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Ao = () => {
}, Zt = new Dp();
function tf(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    closeAfterTransition: s = !1,
    onTransitionEnter: i,
    onTransitionExited: a,
    children: c,
    onClose: l,
    open: u,
    rootRef: f
  } = e, m = E.useRef({}), g = E.useRef(null), h = E.useRef(null), y = Ee(h, f), [p, x] = E.useState(!u), S = ef(c);
  let $ = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && ($ = !1);
  const O = () => De(g.current), v = () => (m.current.modalRef = h.current, m.current.mount = g.current, m.current), C = () => {
    Zt.mount(v(), {
      disableScrollLock: o
    }), h.current && (h.current.scrollTop = 0);
  }, N = vt(() => {
    const w = Zp(t) || O().body;
    Zt.add(v(), w), h.current && C();
  }), M = () => Zt.isTopModal(v()), j = vt((w) => {
    g.current = w, w && (u && M() ? C() : h.current && Dt(h.current, $));
  }), B = E.useCallback(() => {
    Zt.remove(v(), $);
  }, [$]);
  E.useEffect(() => () => {
    B();
  }, [B]), E.useEffect(() => {
    u ? N() : (!S || !s) && B();
  }, [u, B, S, s, N]);
  const G = (w) => (A) => {
    var Y;
    (Y = w.onKeyDown) == null || Y.call(w, A), !(A.key !== "Escape" || A.which === 229 || // Wait until IME is settled.
    !M()) && (n || (A.stopPropagation(), l && l(A, "escapeKeyDown")));
  }, z = (w) => (A) => {
    var Y;
    (Y = w.onClick) == null || Y.call(w, A), A.target === A.currentTarget && l && l(A, "backdropClick");
  };
  return {
    getRootProps: (w = {}) => {
      const A = Bs(e);
      delete A.onTransitionEnter, delete A.onTransitionExited;
      const Y = {
        ...A,
        ...w
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...Y,
        onKeyDown: G(Y),
        ref: y
      };
    },
    getBackdropProps: (w = {}) => {
      const A = w;
      return {
        "aria-hidden": !0,
        ...A,
        onClick: z(A),
        open: u
      };
    },
    getTransitionProps: () => {
      const w = () => {
        x(!1), i && i();
      }, A = () => {
        x(!0), a && a(), s && B();
      };
      return {
        onEnter: mo(w, (c == null ? void 0 : c.props.onEnter) ?? Ao),
        onExited: mo(A, (c == null ? void 0 : c.props.onExited) ?? Ao)
      };
    },
    rootRef: y,
    portalRef: j,
    isTopModal: M,
    exited: p,
    hasTransition: S
  };
}
function nf(e) {
  return se("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const rf = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return pe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, nf, o);
}, of = K("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(ge(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), sf = K(Jp, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), pi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: s = sf,
    BackdropProps: i,
    classes: a,
    className: c,
    closeAfterTransition: l = !1,
    children: u,
    container: f,
    component: m,
    components: g = {},
    componentsProps: h = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: p = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: S = !1,
    disableRestoreFocus: $ = !1,
    disableScrollLock: O = !1,
    hideBackdrop: v = !1,
    keepMounted: C = !1,
    onClose: N,
    onTransitionEnter: M,
    onTransitionExited: j,
    open: B,
    slotProps: G = {},
    slots: z = {},
    // eslint-disable-next-line react/prop-types
    theme: d,
    ...k
  } = o, R = {
    ...o,
    closeAfterTransition: l,
    disableAutoFocus: y,
    disableEnforceFocus: p,
    disableEscapeKeyDown: x,
    disablePortal: S,
    disableRestoreFocus: $,
    disableScrollLock: O,
    hideBackdrop: v,
    keepMounted: C
  }, {
    getRootProps: w,
    getBackdropProps: A,
    getTransitionProps: Y,
    portalRef: F,
    isTopModal: L,
    exited: I,
    hasTransition: b
  } = tf({
    ...R,
    rootRef: n
  }), _ = {
    ...R,
    exited: I
  }, V = rf(_), U = {};
  if (u.props.tabIndex === void 0 && (U.tabIndex = "-1"), b) {
    const {
      onEnter: W,
      onExited: ee
    } = Y();
    U.onEnter = W, U.onExited = ee;
  }
  const Z = {
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...z
    },
    slotProps: {
      ...h,
      ...G
    }
  }, [Q, H] = be("root", {
    ref: n,
    elementType: of,
    externalForwardedProps: {
      ...Z,
      ...k,
      component: m
    },
    getSlotProps: w,
    ownerState: _,
    className: X(c, V == null ? void 0 : V.root, !_.open && _.exited && (V == null ? void 0 : V.hidden))
  }), [J, te] = be("backdrop", {
    ref: i == null ? void 0 : i.ref,
    elementType: s,
    externalForwardedProps: Z,
    shouldForwardComponentProp: !0,
    additionalProps: i,
    getSlotProps: (W) => A({
      ...W,
      onClick: (ee) => {
        W != null && W.onClick && W.onClick(ee);
      }
    }),
    className: X(i == null ? void 0 : i.className, V == null ? void 0 : V.backdrop),
    ownerState: _
  });
  return !C && !B && (!b || I) ? null : /* @__PURE__ */ T.jsx(Gp, {
    ref: F,
    container: f,
    disablePortal: S,
    children: /* @__PURE__ */ T.jsxs(Q, {
      ...H,
      children: [!v && s ? /* @__PURE__ */ T.jsx(J, {
        ...te
      }) : null, /* @__PURE__ */ T.jsx(mn, {
        disableEnforceFocus: p,
        disableAutoFocus: y,
        disableRestoreFocus: $,
        isEnabled: L,
        open: B,
        children: /* @__PURE__ */ E.cloneElement(u, U)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: r.object,
  /**
   * A single child content element.
   */
  children: Gt.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: r.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Backdrop: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Et, r.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: r.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: r.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: r.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const fi = pi;
function af(e, t, n) {
  const o = t.getBoundingClientRect(), s = n && n.getBoundingClientRect(), i = Fe(t);
  let a;
  if (t.fakeTransform)
    a = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    a = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let c = 0, l = 0;
  if (a && a !== "none" && typeof a == "string") {
    const u = a.split("(")[1].split(")")[0].split(",");
    c = parseInt(u[4], 10), l = parseInt(u[5], 10);
  }
  return e === "left" ? s ? `translateX(${s.right + c - o.left}px)` : `translateX(${i.innerWidth + c - o.left}px)` : e === "right" ? s ? `translateX(-${o.right - s.left - c}px)` : `translateX(-${o.left + o.width - c}px)` : e === "up" ? s ? `translateY(${s.bottom + l - o.top}px)` : `translateY(${i.innerHeight + l - o.top}px)` : s ? `translateY(-${o.top - s.top + o.height - l}px)` : `translateY(-${o.top + o.height - l}px)`;
}
function mi(e) {
  return typeof e == "function" ? e() : e;
}
function en(e, t, n) {
  const o = mi(n), s = af(e, t, o);
  s && (t.style.webkitTransform = s, t.style.transform = s);
}
const gi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = Wt(), s = {
    enter: o.transitions.easing.easeOut,
    exit: o.transitions.easing.sharp
  }, i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: c = !0,
    children: l,
    container: u,
    direction: f = "down",
    easing: m = s,
    in: g,
    onEnter: h,
    onEntered: y,
    onEntering: p,
    onExit: x,
    onExited: S,
    onExiting: $,
    style: O,
    timeout: v = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = Sr,
    ...N
  } = t, M = E.useRef(null), j = Ee(Ht(l), M, n), B = (F) => (L) => {
    F && (L === void 0 ? F(M.current) : F(M.current, L));
  }, G = B((F, L) => {
    en(f, F, u), $r(F), h && h(F, L);
  }), z = B((F, L) => {
    const I = Ct({
      timeout: v,
      style: O,
      easing: m
    }, {
      mode: "enter"
    });
    F.style.webkitTransition = o.transitions.create("-webkit-transform", {
      ...I
    }), F.style.transition = o.transitions.create("transform", {
      ...I
    }), F.style.webkitTransform = "none", F.style.transform = "none", p && p(F, L);
  }), d = B(y), k = B($), R = B((F) => {
    const L = Ct({
      timeout: v,
      style: O,
      easing: m
    }, {
      mode: "exit"
    });
    F.style.webkitTransition = o.transitions.create("-webkit-transform", L), F.style.transition = o.transitions.create("transform", L), en(f, F, u), x && x(F);
  }), w = B((F) => {
    F.style.webkitTransition = "", F.style.transition = "", S && S(F);
  }), A = (F) => {
    a && a(M.current, F);
  }, Y = E.useCallback(() => {
    M.current && en(f, M.current, u);
  }, [f, u]);
  return E.useEffect(() => {
    if (g || f === "down" || f === "right")
      return;
    const F = Cs(() => {
      M.current && en(f, M.current, u);
    }), L = Fe(M.current);
    return L.addEventListener("resize", F), () => {
      F.clear(), L.removeEventListener("resize", F);
    };
  }, [f, g, u]), E.useEffect(() => {
    g || Y();
  }, [g, Y]), /* @__PURE__ */ T.jsx(C, {
    nodeRef: M,
    onEnter: G,
    onEntered: d,
    onEntering: z,
    onExit: R,
    onExited: w,
    onExiting: k,
    addEndListener: A,
    appear: c,
    in: g,
    timeout: v,
    ...N,
    children: (F, {
      ownerState: L,
      ...I
    }) => /* @__PURE__ */ E.cloneElement(l, {
      ref: j,
      style: {
        visibility: F === "exited" && !g ? "hidden" : void 0,
        ...O,
        ...l.props.style
      },
      ...I
    })
  });
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: Gt.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Be(r.oneOfType([Et, r.func]), (e) => {
    if (e.open) {
      const t = mi(e.container);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: r.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
const cf = gi;
function lf(e) {
  return se("MuiDrawer", e);
}
ce("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const hi = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, uf = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: o
  } = e, s = {
    root: ["root", `anchor${q(n)}`],
    docked: [(o === "permanent" || o === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${q(n)}`, o !== "temporary" && `paperAnchorDocked${q(n)}`]
  };
  return pe(s, lf, t);
}, df = K(fi, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: hi
})(ge(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), pf = K("div", {
  shouldForwardProp: St,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: hi
})({
  flex: "0 0 auto"
}), ff = K(Nn, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${q(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${q(n.anchor)}`]];
  }
})(ge(({
  theme: e
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "left" && t.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "top" && t.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "right" && t.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchor === "bottom" && t.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(e.vars || e).palette.divider}`
    }
  }]
}))), yi = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function mf(e) {
  return ["left", "right"].includes(e);
}
function gf({
  direction: e
}, t) {
  return e === "rtl" && mf(t) ? yi[t] : t;
}
const bi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiDrawer"
  }), s = Wt(), i = os(), a = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    anchor: c = "left",
    BackdropProps: l,
    children: u,
    className: f,
    elevation: m = 16,
    hideBackdrop: g = !1,
    ModalProps: {
      BackdropProps: h,
      ...y
    } = {},
    onClose: p,
    open: x = !1,
    PaperProps: S = {},
    SlideProps: $,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O,
    transitionDuration: v = a,
    variant: C = "temporary",
    slots: N = {},
    slotProps: M = {},
    ...j
  } = o, B = E.useRef(!1);
  E.useEffect(() => {
    B.current = !0;
  }, []);
  const G = gf({
    direction: i ? "rtl" : "ltr"
  }, c), d = {
    ...o,
    anchor: c,
    elevation: m,
    open: x,
    variant: C,
    ...j
  }, k = uf(d), R = {
    slots: {
      transition: O,
      ...N
    },
    slotProps: {
      paper: S,
      transition: $,
      ...M,
      backdrop: Ss(M.backdrop || {
        ...l,
        ...h
      }, {
        transitionDuration: v
      })
    }
  }, [w, A] = be("root", {
    ref: n,
    elementType: df,
    className: X(k.root, k.modal, f),
    shouldForwardComponentProp: !0,
    ownerState: d,
    externalForwardedProps: {
      ...R,
      ...j,
      ...y
    },
    additionalProps: {
      open: x,
      onClose: p,
      hideBackdrop: g,
      slots: {
        backdrop: R.slots.backdrop
      },
      slotProps: {
        backdrop: R.slotProps.backdrop
      }
    }
  }), [Y, F] = be("paper", {
    elementType: ff,
    shouldForwardComponentProp: !0,
    className: X(k.paper, S.className),
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: {
      elevation: C === "temporary" ? m : 0,
      square: !0,
      ...C === "temporary" && {
        role: "dialog",
        "aria-modal": "true"
      }
    }
  }), [L, I] = be("docked", {
    elementType: pf,
    ref: n,
    className: X(k.root, k.docked, f),
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: j
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [b, _] = be("transition", {
    elementType: cf,
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: {
      in: x,
      direction: yi[G],
      timeout: v,
      appear: B.current
    }
  }), V = /* @__PURE__ */ T.jsx(Y, {
    ...F,
    children: u
  });
  if (C === "permanent")
    return /* @__PURE__ */ T.jsx(L, {
      ...I,
      children: V
    });
  const U = /* @__PURE__ */ T.jsx(b, {
    ..._,
    children: V
  });
  return C === "persistent" ? /* @__PURE__ */ T.jsx(L, {
    ...I,
    children: U
  }) : /* @__PURE__ */ T.jsx(w, {
    ...A,
    children: U
  });
});
process.env.NODE_ENV !== "production" && (bi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: r.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: r.object,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: bt,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: r.bool,
  /**
   * Props applied to the [`Modal`](https://mui.com/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: r.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: r.bool,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @deprecated use the `slotProps.paper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PaperProps: r.object,
  /**
   * Props applied to the [`Slide`](https://mui.com/material-ui/api/slide/) element.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SlideProps: r.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    docked: r.oneOfType([r.func, r.object]),
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    docked: r.elementType,
    paper: r.elementType,
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: r.oneOf(["permanent", "persistent", "temporary"])
});
const hf = bi, vi = qe([/* @__PURE__ */ T.jsx("path", {
  d: "M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
}, "0"), /* @__PURE__ */ T.jsx("path", {
  d: "m20.65 11.65-2.79-2.79c-.32-.32-.86-.1-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
}, "1")], "LogoutRounded"), yf = qe(/* @__PURE__ */ T.jsx("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z"
}), "NotificationsRounded");
function xi(e) {
  const t = E.useRef({});
  return E.useEffect(() => {
    t.current = e;
  }), t.current;
}
function bf(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: o = 99,
    showZero: s = !1
  } = e, i = xi({
    badgeContent: t,
    max: o
  });
  let a = n;
  n === !1 && t === 0 && !s && (a = !0);
  const {
    badgeContent: c,
    max: l = o
  } = a ? i : e, u = c && Number(c) > l ? `${l}+` : c;
  return {
    badgeContent: c,
    invisible: a,
    max: l,
    displayValue: u
  };
}
function vf(e) {
  return se("MuiBadge", e);
}
const xf = ce("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), We = xf, Wn = 10, Yn = 4, Tf = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: o,
    overlap: s,
    variant: i,
    classes: a = {}
  } = e, c = {
    root: ["root"],
    badge: ["badge", i, o && "invisible", `anchorOrigin${q(n.vertical)}${q(n.horizontal)}`, `anchorOrigin${q(n.vertical)}${q(n.horizontal)}${q(s)}`, `overlap${q(s)}`, t !== "default" && `color${q(t)}`]
  };
  return pe(c, vf, a);
}, Ef = K("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), Cf = K("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${q(n.anchorOrigin.vertical)}${q(n.anchorOrigin.horizontal)}${q(n.overlap)}`], n.color !== "default" && t[`color${q(n.color)}`], n.invisible && t.invisible];
  }
})(ge(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(12),
  minWidth: Wn * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: Wn * 2,
  borderRadius: Wn,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(e.palette).filter(at(["contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: (e.vars || e).palette[t].main,
      color: (e.vars || e).palette[t].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: Yn,
      height: Yn * 2,
      minWidth: Yn * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${We.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${We.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${We.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${We.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${We.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${We.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${We.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${We.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: !0
    },
    style: {
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeInOut,
        duration: e.transitions.duration.leavingScreen
      })
    }
  }]
})));
function Mo(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
  };
}
const Ti = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiBadge"
  }), {
    anchorOrigin: s,
    className: i,
    classes: a,
    component: c,
    components: l = {},
    componentsProps: u = {},
    children: f,
    overlap: m = "rectangular",
    color: g = "default",
    invisible: h = !1,
    max: y = 99,
    badgeContent: p,
    slots: x,
    slotProps: S,
    showZero: $ = !1,
    variant: O = "standard",
    ...v
  } = o, {
    badgeContent: C,
    invisible: N,
    max: M,
    displayValue: j
  } = bf({
    max: y,
    invisible: h,
    badgeContent: p,
    showZero: $
  }), B = xi({
    anchorOrigin: Mo(s),
    color: g,
    overlap: m,
    variant: O,
    badgeContent: p
  }), G = N || C == null && O !== "dot", {
    color: z = g,
    overlap: d = m,
    anchorOrigin: k,
    variant: R = O
  } = G ? B : o, w = Mo(k), A = R !== "dot" ? j : void 0, Y = {
    ...o,
    badgeContent: C,
    invisible: G,
    max: M,
    displayValue: A,
    showZero: $,
    anchorOrigin: w,
    color: z,
    overlap: d,
    variant: R
  }, F = Tf(Y), L = {
    slots: {
      root: (x == null ? void 0 : x.root) ?? l.Root,
      badge: (x == null ? void 0 : x.badge) ?? l.Badge
    },
    slotProps: {
      root: (S == null ? void 0 : S.root) ?? u.root,
      badge: (S == null ? void 0 : S.badge) ?? u.badge
    }
  }, [I, b] = be("root", {
    elementType: Ef,
    externalForwardedProps: {
      ...L,
      ...v
    },
    ownerState: Y,
    className: X(F.root, i),
    ref: n,
    additionalProps: {
      as: c
    }
  }), [_, V] = be("badge", {
    elementType: Cf,
    externalForwardedProps: L,
    ownerState: Y,
    className: F.badge
  });
  return /* @__PURE__ */ T.jsxs(I, {
    ...b,
    children: [f, /* @__PURE__ */ T.jsx(_, {
      ...V,
      children: A
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin: r.shape({
    horizontal: r.oneOf(["left", "right"]),
    vertical: r.oneOf(["bottom", "top"])
  }),
  /**
   * The content rendered within the badge.
   */
  badgeContent: r.node,
  /**
   * The badge will be added relative to this node.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Badge: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    badge: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: r.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: r.number,
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap: r.oneOf(["circular", "rectangular"]),
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: r.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    badge: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    badge: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: r.oneOfType([r.oneOf(["dot", "standard"]), r.string])
});
const Sf = Ti, Of = ({
  open: e,
  onClose: t,
  mainLinks: n,
  secondaryLinks: o = [],
  activePath: s,
  onLinkClick: i,
  userName: a = "User Name",
  userAvatar: c,
  onLogout: l,
  showNotifications: u = !1,
  notificationCount: f = 0,
  alertProps: m
}) => {
  const g = (h) => {
    i == null || i(h), t();
  };
  return /* @__PURE__ */ T.jsx(
    hf,
    {
      anchor: "right",
      open: e,
      onClose: t,
      sx: {
        zIndex: (h) => h.zIndex.drawer + 1,
        "& .MuiDrawer-paper": {
          backgroundImage: "none",
          backgroundColor: "background.paper"
        }
      },
      children: /* @__PURE__ */ T.jsxs(
        Ye,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ T.jsxs(Ye, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
              /* @__PURE__ */ T.jsxs(
                Ye,
                {
                  direction: "row",
                  sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                  children: [
                    /* @__PURE__ */ T.jsx(
                      ii,
                      {
                        sizes: "small",
                        alt: a,
                        src: c,
                        sx: { width: 24, height: 24 }
                      }
                    ),
                    /* @__PURE__ */ T.jsx(Oe, { component: "p", variant: "h6", children: a })
                  ]
                }
              ),
              u && /* @__PURE__ */ T.jsx(
                Sf,
                {
                  color: "error",
                  variant: "dot",
                  invisible: f === 0,
                  sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                  children: /* @__PURE__ */ T.jsx(Ir, { size: "small", children: /* @__PURE__ */ T.jsx(yf, {}) })
                }
              )
            ] }),
            /* @__PURE__ */ T.jsx(fn, {}),
            /* @__PURE__ */ T.jsxs(Ye, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ T.jsx(
                oi,
                {
                  mainLinks: n,
                  secondaryLinks: o,
                  activePath: s,
                  onLinkClick: g
                }
              ),
              /* @__PURE__ */ T.jsx(fn, {})
            ] }),
            (m == null ? void 0 : m.show) && /* @__PURE__ */ T.jsx(Qs, { ...m }),
            /* @__PURE__ */ T.jsx(Ye, { sx: { p: 2 }, children: /* @__PURE__ */ T.jsx(
              Xs,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ T.jsx(vi, {}),
                onClick: l,
                children: "Logout"
              }
            ) })
          ]
        }
      )
    }
  );
};
function Gn(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function jo(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Ei(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function $t(e, t, n, o, s, i) {
  let a = !1, c = s(e, t, t ? n : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = o ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !Ei(c, i) || l)
      c = s(e, c, n);
    else
      return c.focus(), !0;
  }
  return !1;
}
const Ci = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: s = !1,
    autoFocusItem: i = !1,
    children: a,
    className: c,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: f,
    variant: m = "selectedMenu",
    ...g
  } = t, h = E.useRef(null), y = E.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Tt(() => {
    s && h.current.focus();
  }, [s]), E.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (O, {
      direction: v
    }) => {
      const C = !h.current.style.width;
      if (O.clientHeight < h.current.clientHeight && C) {
        const N = `${ai(Fe(O))}px`;
        h.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = N, h.current.style.width = `calc(100% + ${N})`;
      }
      return h.current;
    }
  }), []);
  const p = (O) => {
    const v = h.current, C = O.key;
    if (O.ctrlKey || O.metaKey || O.altKey) {
      f && f(O);
      return;
    }
    const M = De(v).activeElement;
    if (C === "ArrowDown")
      O.preventDefault(), $t(v, M, u, l, Gn);
    else if (C === "ArrowUp")
      O.preventDefault(), $t(v, M, u, l, jo);
    else if (C === "Home")
      O.preventDefault(), $t(v, null, u, l, Gn);
    else if (C === "End")
      O.preventDefault(), $t(v, null, u, l, jo);
    else if (C.length === 1) {
      const j = y.current, B = C.toLowerCase(), G = performance.now();
      j.keys.length > 0 && (G - j.lastTime > 500 ? (j.keys = [], j.repeating = !0, j.previousKeyMatched = !0) : j.repeating && B !== j.keys[0] && (j.repeating = !1)), j.lastTime = G, j.keys.push(B);
      const z = M && !j.repeating && Ei(M, j);
      j.previousKeyMatched && (z || $t(v, M, !1, l, Gn, j)) ? O.preventDefault() : j.previousKeyMatched = !1;
    }
    f && f(O);
  }, x = Ee(h, n);
  let S = -1;
  E.Children.forEach(a, (O, v) => {
    if (!/* @__PURE__ */ E.isValidElement(O)) {
      S === v && (S += 1, S >= a.length && (S = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && st.isFragment(O) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), O.props.disabled || (m === "selectedMenu" && O.props.selected || S === -1) && (S = v), S === v && (O.props.disabled || O.props.muiSkipListHighlight || O.type.muiSkipListHighlight) && (S += 1, S >= a.length && (S = -1));
  });
  const $ = E.Children.map(a, (O, v) => {
    if (v === S) {
      const C = {};
      return i && (C.autoFocus = !0), O.props.tabIndex === void 0 && m === "selectedMenu" && (C.tabIndex = 0), /* @__PURE__ */ E.cloneElement(O, C);
    }
    return O;
  });
  return /* @__PURE__ */ T.jsx(dr, {
    role: "menu",
    ref: x,
    className: c,
    onKeyDown: p,
    tabIndex: s ? 0 : -1,
    ...g,
    children: $
  });
});
process.env.NODE_ENV !== "production" && (Ci.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: r.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: r.node,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: r.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: r.bool,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: r.oneOf(["menu", "selectedMenu"])
});
const Rf = Ci;
function pr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const wf = {
  entering: {
    opacity: 1,
    transform: pr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Hn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), hn = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: s = !0,
    children: i,
    easing: a,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: f,
    onExit: m,
    onExited: g,
    onExiting: h,
    style: y,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Sr,
    ...S
  } = t, $ = Ps(), O = E.useRef(), v = Wt(), C = E.useRef(null), N = Ee(C, Ht(i), n), M = (w) => (A) => {
    if (w) {
      const Y = C.current;
      A === void 0 ? w(Y) : w(Y, A);
    }
  }, j = M(f), B = M((w, A) => {
    $r(w);
    const {
      duration: Y,
      delay: F,
      easing: L
    } = Ct({
      style: y,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    let I;
    p === "auto" ? (I = v.transitions.getAutoHeightDuration(w.clientHeight), O.current = I) : I = Y, w.style.transition = [v.transitions.create("opacity", {
      duration: I,
      delay: F
    }), v.transitions.create("transform", {
      duration: Hn ? I : I * 0.666,
      delay: F,
      easing: L
    })].join(","), l && l(w, A);
  }), G = M(u), z = M(h), d = M((w) => {
    const {
      duration: A,
      delay: Y,
      easing: F
    } = Ct({
      style: y,
      timeout: p,
      easing: a
    }, {
      mode: "exit"
    });
    let L;
    p === "auto" ? (L = v.transitions.getAutoHeightDuration(w.clientHeight), O.current = L) : L = A, w.style.transition = [v.transitions.create("opacity", {
      duration: L,
      delay: Y
    }), v.transitions.create("transform", {
      duration: Hn ? L : L * 0.666,
      delay: Hn ? Y : Y || L * 0.333,
      easing: F
    })].join(","), w.style.opacity = 0, w.style.transform = pr(0.75), m && m(w);
  }), k = M(g), R = (w) => {
    p === "auto" && $.start(O.current || 0, w), o && o(C.current, w);
  };
  return /* @__PURE__ */ T.jsx(x, {
    appear: s,
    in: c,
    nodeRef: C,
    onEnter: B,
    onEntered: G,
    onEntering: j,
    onExit: d,
    onExited: k,
    onExiting: z,
    addEndListener: R,
    timeout: p === "auto" ? null : p,
    ...S,
    children: (w, {
      ownerState: A,
      ...Y
    }) => /* @__PURE__ */ E.cloneElement(i, {
      style: {
        opacity: 0,
        transform: pr(0.75),
        visibility: w === "exited" && !c ? "hidden" : void 0,
        ...wf[w],
        ...y,
        ...i.props.style
      },
      ref: N,
      ...Y
    })
  });
});
process.env.NODE_ENV !== "production" && (hn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: Gt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
hn && (hn.muiSupportAuto = !0);
const If = hn;
function Pf(e) {
  return se("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function _o(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Do(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Bo(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function jt(e) {
  return typeof e == "function" ? e() : e;
}
const $f = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"]
  }, Pf, t);
}, Nf = K(fi, {
  name: "MuiPopover",
  slot: "Root"
})({}), Si = K(Nn, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Oi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiPopover"
  }), {
    action: s,
    anchorEl: i,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: c,
    anchorReference: l = "anchorEl",
    children: u,
    className: f,
    container: m,
    elevation: g = 8,
    marginThreshold: h = 16,
    open: y,
    PaperProps: p = {},
    // TODO: remove in v7
    slots: x = {},
    slotProps: S = {},
    transformOrigin: $ = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: O,
    // TODO: remove in v7
    transitionDuration: v = "auto",
    TransitionProps: C = {},
    // TODO: remove in v7
    disableScrollLock: N = !1,
    ...M
  } = o, j = E.useRef(), B = {
    ...o,
    anchorOrigin: a,
    anchorReference: l,
    elevation: g,
    marginThreshold: h,
    transformOrigin: $,
    TransitionComponent: O,
    transitionDuration: v,
    TransitionProps: C
  }, G = $f(B), z = E.useCallback(() => {
    if (l === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (c || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), c;
    const W = jt(i), ee = W && W.nodeType === 1 ? W : De(j.current).body, D = ee.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const me = ee.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && me.top === 0 && me.left === 0 && me.right === 0 && me.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: D.top + _o(D, a.vertical),
      left: D.left + Do(D, a.horizontal)
    };
  }, [i, a.horizontal, a.vertical, c, l]), d = E.useCallback((W) => ({
    vertical: _o(W, $.vertical),
    horizontal: Do(W, $.horizontal)
  }), [$.horizontal, $.vertical]), k = E.useCallback((W) => {
    const ee = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, D = d(ee);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Bo(D)
      };
    const me = z();
    let xe = me.top - D.vertical, Pe = me.left - D.horizontal;
    const Kt = xe + ee.height, Xe = Pe + ee.width, Ue = Fe(jt(i)), Qe = Ue.innerHeight - h, Ot = Ue.innerWidth - h;
    if (h !== null && xe < h) {
      const Ce = xe - h;
      xe -= Ce, D.vertical += Ce;
    } else if (h !== null && Kt > Qe) {
      const Ce = Kt - Qe;
      xe -= Ce, D.vertical += Ce;
    }
    if (process.env.NODE_ENV !== "production" && ee.height > Qe && ee.height && Qe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ee.height - Qe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), h !== null && Pe < h) {
      const Ce = Pe - h;
      Pe -= Ce, D.horizontal += Ce;
    } else if (Xe > Ot) {
      const Ce = Xe - Ot;
      Pe -= Ce, D.horizontal += Ce;
    }
    return {
      top: `${Math.round(xe)}px`,
      left: `${Math.round(Pe)}px`,
      transformOrigin: Bo(D)
    };
  }, [i, l, z, d, h]), [R, w] = E.useState(y), A = E.useCallback(() => {
    const W = j.current;
    if (!W)
      return;
    const ee = k(W);
    ee.top !== null && W.style.setProperty("top", ee.top), ee.left !== null && (W.style.left = ee.left), W.style.transformOrigin = ee.transformOrigin, w(!0);
  }, [k]);
  E.useEffect(() => (N && window.addEventListener("scroll", A), () => window.removeEventListener("scroll", A)), [i, N, A]);
  const Y = () => {
    A();
  }, F = () => {
    w(!1);
  };
  E.useEffect(() => {
    y && A();
  }), E.useImperativeHandle(s, () => y ? {
    updatePosition: () => {
      A();
    }
  } : null, [y, A]), E.useEffect(() => {
    if (!y)
      return;
    const W = Cs(() => {
      A();
    }), ee = Fe(jt(i));
    return ee.addEventListener("resize", W), () => {
      W.clear(), ee.removeEventListener("resize", W);
    };
  }, [i, y, A]);
  let L = v;
  const I = {
    slots: {
      transition: O,
      ...x
    },
    slotProps: {
      transition: C,
      paper: p,
      ...S
    }
  }, [b, _] = be("transition", {
    elementType: If,
    externalForwardedProps: I,
    ownerState: B,
    getSlotProps: (W) => ({
      ...W,
      onEntering: (ee, D) => {
        var me;
        (me = W.onEntering) == null || me.call(W, ee, D), Y();
      },
      onExited: (ee) => {
        var D;
        (D = W.onExited) == null || D.call(W, ee), F();
      }
    }),
    additionalProps: {
      appear: !0,
      in: y
    }
  });
  v === "auto" && !b.muiSupportAuto && (L = void 0);
  const V = m || (i ? De(jt(i)).body : void 0), [U, {
    slots: Z,
    slotProps: Q,
    ...H
  }] = be("root", {
    ref: n,
    elementType: Nf,
    externalForwardedProps: {
      ...I,
      ...M
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: Ss(typeof S.backdrop == "function" ? S.backdrop(B) : S.backdrop, {
          invisible: !0
        })
      },
      container: V,
      open: y
    },
    ownerState: B,
    className: X(G.root, f)
  }), [J, te] = be("paper", {
    ref: j,
    className: G.paper,
    elementType: Si,
    externalForwardedProps: I,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: g,
      style: R ? void 0 : {
        opacity: 0
      }
    },
    ownerState: B
  });
  return /* @__PURE__ */ T.jsx(U, {
    ...H,
    ...!dn(U) && {
      slots: Z,
      slotProps: Q,
      disableScrollLock: N
    },
    children: /* @__PURE__ */ T.jsx(b, {
      ..._,
      timeout: L,
      children: /* @__PURE__ */ T.jsx(J, {
        ...te,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Oi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Os,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Be(r.oneOfType([Et, r.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = jt(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: r.shape({
    horizontal: r.oneOfType([r.oneOf(["center", "left", "right"]), r.number]).isRequired,
    vertical: r.oneOfType([r.oneOf(["bottom", "center", "top"]), r.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: r.shape({
    left: r.number.isRequired,
    top: r.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: r.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: r.object,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([Et, r.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: bt,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: r.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overridden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: r.shape({
    component: Cr
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    paper: r.elementType,
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: r.shape({
    horizontal: r.oneOfType([r.oneOf(["center", "left", "right"]), r.number]).isRequired,
    vertical: r.oneOfType([r.oneOf(["bottom", "center", "top"]), r.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: r.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: r.object
});
const kf = Oi;
function Af(e) {
  return se("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const Mf = {
  vertical: "top",
  horizontal: "right"
}, jf = {
  vertical: "top",
  horizontal: "left"
}, _f = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Af, t);
}, Df = K(kf, {
  shouldForwardProp: (e) => St(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), Bf = K(Si, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Lf = K(Rf, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ri = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: i,
    className: a,
    disableAutoFocusItem: c = !1,
    MenuListProps: l = {},
    onClose: u,
    open: f,
    PaperProps: m = {},
    PopoverClasses: g,
    transitionDuration: h = "auto",
    TransitionProps: {
      onEntering: y,
      ...p
    } = {},
    variant: x = "selectedMenu",
    slots: S = {},
    slotProps: $ = {},
    ...O
  } = o, v = os(), C = {
    ...o,
    autoFocus: s,
    disableAutoFocusItem: c,
    MenuListProps: l,
    onEntering: y,
    PaperProps: m,
    transitionDuration: h,
    TransitionProps: p,
    variant: x
  }, N = _f(C), M = s && !c && f, j = E.useRef(null), B = (L, I) => {
    j.current && j.current.adjustStyleForScrollbar(L, {
      direction: v ? "rtl" : "ltr"
    }), y && y(L, I);
  }, G = (L) => {
    L.key === "Tab" && (L.preventDefault(), u && u(L, "tabKeyDown"));
  };
  let z = -1;
  E.Children.map(i, (L, I) => {
    /* @__PURE__ */ E.isValidElement(L) && (process.env.NODE_ENV !== "production" && st.isFragment(L) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), L.props.disabled || (x === "selectedMenu" && L.props.selected || z === -1) && (z = I));
  });
  const d = {
    slots: S,
    slotProps: {
      list: l,
      transition: p,
      paper: m,
      ...$
    }
  }, k = Fs({
    elementType: S.root,
    externalSlotProps: $.root,
    ownerState: C,
    className: [N.root, a]
  }), [R, w] = be("paper", {
    className: N.paper,
    elementType: Bf,
    externalForwardedProps: d,
    shouldForwardComponentProp: !0,
    ownerState: C
  }), [A, Y] = be("list", {
    className: X(N.list, l.className),
    elementType: Lf,
    shouldForwardComponentProp: !0,
    externalForwardedProps: d,
    getSlotProps: (L) => ({
      ...L,
      onKeyDown: (I) => {
        var b;
        G(I), (b = L.onKeyDown) == null || b.call(L, I);
      }
    }),
    ownerState: C
  }), F = typeof d.slotProps.transition == "function" ? d.slotProps.transition(C) : d.slotProps.transition;
  return /* @__PURE__ */ T.jsx(Df, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: v ? "right" : "left"
    },
    transformOrigin: v ? Mf : jf,
    slots: {
      root: S.root,
      paper: R,
      backdrop: S.backdrop,
      ...S.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: S.transition
      }
    },
    slotProps: {
      root: k,
      paper: w,
      backdrop: typeof $.backdrop == "function" ? $.backdrop(C) : $.backdrop,
      transition: {
        ...F,
        onEntering: (...L) => {
          var I;
          B(...L), (I = F == null ? void 0 : F.onEntering) == null || I.call(F, ...L);
        }
      }
    },
    open: f,
    ref: n,
    transitionDuration: h,
    ownerState: C,
    ...O,
    classes: g,
    children: /* @__PURE__ */ T.jsx(A, {
      actions: j,
      autoFocus: s && (z === -1 || c),
      autoFocusItem: M,
      variant: x,
      ...Y,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: r.oneOfType([Et, r.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: r.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: r.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: r.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: r.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: r.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    list: r.oneOfType([r.func, r.object]),
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    list: r.elementType,
    paper: r.elementType,
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: r.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: r.oneOf(["menu", "selectedMenu"])
});
const Vf = Ri;
function Ff(e) {
  return se("MuiMenuItem", e);
}
const zf = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Nt = zf, Uf = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Wf = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: o,
    disableGutters: s,
    selected: i,
    classes: a
  } = e, l = pe({
    root: ["root", n && "dense", t && "disabled", !s && "gutters", o && "divider", i && "selected"]
  }, Ff, a);
  return {
    ...a,
    ...l
  };
}, Yf = K(Yt, {
  shouldForwardProp: (e) => St(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Uf
})(ge(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Nt.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Nt.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Nt.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Nt.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Nt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${$o.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${$o.inset}`]: {
    marginLeft: 52
  },
  [`& .${ht.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${ht.inset}`]: {
    paddingLeft: 36
  },
  [`& .${wo.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${wo.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), wi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: s = !1,
    component: i = "li",
    dense: a = !1,
    divider: c = !1,
    disableGutters: l = !1,
    focusVisibleClassName: u,
    role: f = "menuitem",
    tabIndex: m,
    className: g,
    ...h
  } = o, y = E.useContext(Ne), p = E.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: l
  }), [y.dense, a, l]), x = E.useRef(null);
  Tt(() => {
    s && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [s]);
  const S = {
    ...o,
    dense: p.dense,
    divider: c,
    disableGutters: l
  }, $ = Wf(o), O = Ee(x, n);
  let v;
  return o.disabled || (v = m !== void 0 ? m : -1), /* @__PURE__ */ T.jsx(Ne.Provider, {
    value: p,
    children: /* @__PURE__ */ T.jsx(Yf, {
      ref: O,
      role: f,
      tabIndex: v,
      component: i,
      focusVisibleClassName: X($.focusVisible, u),
      className: X($.root, g),
      ...h,
      ownerState: S,
      classes: $
    })
  });
});
process.env.NODE_ENV !== "production" && (wi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: r.bool,
  /**
   * @ignore
   */
  disabled: r.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  role: r.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @default 0
   */
  tabIndex: r.number
});
const tn = wi, Gf = qe(/* @__PURE__ */ T.jsx("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), "MoreVertRounded"), Hf = ({
  userName: e = "User Name",
  userEmail: t = "user@email.com",
  userAvatar: n,
  onLogout: o,
  onProfileClick: s,
  onAccountClick: i,
  onSettingsClick: a
}) => {
  const [c, l] = E.useState(null), u = !!c, f = (h) => {
    l(h.currentTarget);
  }, m = () => {
    l(null);
  }, g = (h) => {
    h == null || h(), m();
  };
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsxs(
      Ye,
      {
        direction: "row",
        sx: {
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider"
        },
        children: [
          /* @__PURE__ */ T.jsx(
            ii,
            {
              sizes: "small",
              alt: e,
              src: n,
              sx: { width: 36, height: 36 }
            }
          ),
          /* @__PURE__ */ T.jsxs(xs, { sx: { mr: "auto" }, children: [
            /* @__PURE__ */ T.jsx(
              Oe,
              {
                variant: "body2",
                sx: { fontWeight: 500, lineHeight: "16px" },
                children: e
              }
            ),
            /* @__PURE__ */ T.jsx(
              Oe,
              {
                variant: "caption",
                sx: { color: "text.secondary" },
                children: t
              }
            )
          ] }),
          /* @__PURE__ */ T.jsx(
            Ir,
            {
              size: "small",
              onClick: f,
              sx: { borderColor: "transparent" },
              children: /* @__PURE__ */ T.jsx(Gf, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ T.jsxs(
      Vf,
      {
        anchorEl: c,
        open: u,
        onClose: m,
        transformOrigin: { horizontal: "right", vertical: "top" },
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
        sx: {
          "& .MuiList-root": {
            padding: "4px"
          },
          "& .MuiPaper-root": {
            padding: 0
          },
          "& .MuiDivider-root": {
            margin: "4px -4px"
          }
        },
        children: [
          /* @__PURE__ */ T.jsx(tn, { onClick: () => g(s), children: "Profile" }),
          /* @__PURE__ */ T.jsx(tn, { onClick: () => g(i), children: "My account" }),
          /* @__PURE__ */ T.jsx(fn, {}),
          /* @__PURE__ */ T.jsx(tn, { onClick: () => g(a), children: "Settings" }),
          /* @__PURE__ */ T.jsx(fn, {}),
          /* @__PURE__ */ T.jsxs(tn, { onClick: () => g(o), children: [
            /* @__PURE__ */ T.jsx(Oe, { sx: { flexGrow: 1 }, children: "Logout" }),
            /* @__PURE__ */ T.jsx(vi, { fontSize: "small" })
          ] })
        ]
      }
    )
  ] });
}, tm = ({
  children: e,
  sidebarLinks: t = [],
  secondarySidebarLinks: n = [],
  appName: o = "Dashboard",
  pageName: s = "Home",
  showHeader: i = !0,
  showSidebar: a = !0,
  enableRefreshToken: c = !1,
  activePath: l,
  onLinkClick: u,
  userName: f,
  userEmail: m,
  userAvatar: g,
  onLogout: h,
  onProfileClick: y,
  onAccountClick: p,
  onSettingsClick: x,
  showNotifications: S = !1,
  notificationCount: $ = 0,
  alertProps: O,
  style: v,
  headerStyles: C,
  sidebarStyles: N,
  contentStyles: M
}) => {
  const j = ki(), B = Ai(j.breakpoints.down("md")), [G, z] = Ni(!1), d = () => {
    z(!G);
  }, k = () => {
    z(!1);
  }, R = async () => {
    try {
      await Yi(), localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), h == null || h();
    } catch (w) {
      localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), h == null || h(
        w instanceof Error ? w : new Error("Logout failed")
      );
    }
  };
  return Nr(() => (c && zi(), () => {
    Ui();
  }), [c]), Nr(() => {
    c && Gi();
  }, [c]), /* @__PURE__ */ T.jsxs(qt, { sx: { display: "flex", height: "100vh", ...v }, children: [
    /* @__PURE__ */ T.jsx(Mi, {}),
    i && /* @__PURE__ */ T.jsx(
      Nd,
      {
        appName: o,
        pageName: s,
        onMenuClick: B && a ? d : void 0,
        showMenuButton: B && a,
        headerStyles: C
      }
    ),
    a && !B && /* @__PURE__ */ T.jsxs(
      ji,
      {
        variant: "permanent",
        sx: {
          width: 240,
          flexShrink: 0,
          zIndex: 2,
          // Higher z-index than app bar
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "background.paper",
            mt: 0
            // Extend to top
          },
          ...N
        },
        children: [
          /* @__PURE__ */ T.jsx(
            qt,
            {
              sx: {
                display: "flex",
                mt: "calc(var(--template-frame-height, 0px) + 4px)",
                p: 1.5
              }
            }
          ),
          /* @__PURE__ */ T.jsxs(
            qt,
            {
              sx: {
                overflow: "auto",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              },
              children: [
                /* @__PURE__ */ T.jsx(
                  oi,
                  {
                    mainLinks: t,
                    secondaryLinks: n,
                    activePath: l,
                    onLinkClick: u
                  }
                ),
                (O == null ? void 0 : O.show) && /* @__PURE__ */ T.jsx(Qs, { ...O })
              ]
            }
          ),
          /* @__PURE__ */ T.jsx(
            Hf,
            {
              userName: f,
              userEmail: m,
              userAvatar: g,
              onLogout: R,
              onProfileClick: y,
              onAccountClick: p,
              onSettingsClick: x
            }
          )
        ]
      }
    ),
    a && B && /* @__PURE__ */ T.jsx(
      Of,
      {
        open: G,
        onClose: k,
        mainLinks: t,
        secondaryLinks: n,
        activePath: l,
        onLinkClick: u,
        userName: f,
        userEmail: m,
        userAvatar: g,
        onLogout: R,
        showNotifications: S,
        notificationCount: $,
        alertProps: O
      }
    ),
    /* @__PURE__ */ T.jsx(
      qt,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          m: 1,
          width: B ? "100%" : a ? "calc(100% - 240px)" : "100%",
          // mt: showHeader ? '80px' : 0, // Account for AppNavbar height only if header is shown
          // ml: isMobile ? 0 : showSidebar ? '240px' : 0, // Offset for sidebar on desktop
          overflow: "auto",
          ...M
        },
        children: e
      }
    )
  ] });
};
export {
  tm as LumoraWrapper,
  tm as default,
  Yi as logoutUser
};
