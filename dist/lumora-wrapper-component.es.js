var ji = Object.defineProperty;
var _i = (e, t, n) => t in e ? ji(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Rt = (e, t, n) => (_i(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as T from "react";
import _e, { Children as Bi, isValidElement as tn, cloneElement as nn, useState as Nn, useEffect as An } from "react";
import { useTheme as Di, useMediaQuery as Li, Box as lt, CircularProgress as Fi, CssBaseline as Vi, Drawer as zi } from "@mui/material";
import br from "axios";
import Ui from "@emotion/styled";
import { ThemeContext as Wi, keyframes as zt, css as Wo } from "@emotion/react";
import * as Gi from "react-dom";
import Xt from "react-dom";
function Yi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qn = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function Hi() {
  if (jr)
    return It;
  jr = 1;
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
  return It.Fragment = t, It.jsx = n, It.jsxs = n, It;
}
var $t = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function qi() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
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
        case R:
          return "Profiler";
        case S:
          return "StrictMode";
        case k:
          return "Suspense";
        case M:
          return "SuspenseList";
        case Y:
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
          case D:
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
      if (typeof b == "object" && b !== null && b.$$typeof === D)
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
      if (N.call(b, "key")) {
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
      return G[b] || (G[b] = !0, console.error(
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
          if (w(H)) {
            for (U = 0; U < H.length; U++)
              m(H[U]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          m(H);
      if (N.call(_, "key")) {
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
      h(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === D && (b._payload.status === "fulfilled" ? h(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function h(b) {
      return typeof b == "object" && b !== null && b.$$typeof === y;
    }
    var g = _e, y = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), v = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), d = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, w = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var A, G = {}, F = g.react_stack_bottom_frame.bind(
      g,
      i
    )(), L = $(o(i)), I = {};
    $t.Fragment = x, $t.jsx = function(b, _, V) {
      var U = 1e4 > d.recentlyCreatedOwnerStacks++;
      return f(
        b,
        _,
        V,
        !1,
        U ? Error("react-stack-top-frame") : F,
        U ? $(o(b)) : L
      );
    }, $t.jsxs = function(b, _, V) {
      var U = 1e4 > d.recentlyCreatedOwnerStacks++;
      return f(
        b,
        _,
        V,
        !0,
        U ? Error("react-stack-top-frame") : F,
        U ? $(o(b)) : L
      );
    };
  }()), $t;
}
process.env.NODE_ENV === "production" ? Qn.exports = Hi() : Qn.exports = qi();
var E = Qn.exports;
let vr = !1;
const Ki = () => {
  vr = !0;
}, Xi = () => {
  vr = !1;
}, Qi = br.create(), on = br.create({
  baseURL: { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000",
  headers: {
    "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
    "Content-Type": "application/json"
  }
});
on.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("lumoraAccessToken");
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
on.interceptors.response.use(
  (e) => e,
  async (e) => {
    var n;
    const t = e.config;
    if (((n = e.response) == null ? void 0 : n.status) === 401 && vr && t && !t._retry) {
      t._retry = !0;
      try {
        const o = localStorage.getItem("lumoraRefreshToken");
        if (!o)
          throw new Error("No refresh token available");
        const s = await Qi.post(
          `${{ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000"}/auth/refresh`,
          { refresh_token: o },
          {
            headers: {
              "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
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
          ), t.headers.Authorization = `Bearer ${s.data.accessToken}`, on(t);
        throw new Error("Invalid refresh response");
      } catch (o) {
        return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), window.location.href = "/login", Promise.reject(o);
      }
    }
    return Promise.reject(e);
  }
);
const Ji = async () => {
  const e = localStorage.getItem("lumoraRefreshToken");
  if (!e)
    throw new Error("No refresh token available for logout");
  await on.post("/auth/logout", {
    refresh_token: e
  });
}, Zi = async () => {
  const e = localStorage.getItem("lumoraAccessToken"), t = localStorage.getItem("lumoraRefreshToken");
  if (e)
    return !0;
  if (t)
    try {
      const n = await br.post(
        `${{ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000"}/auth/refresh`,
        { refresh_token: t },
        {
          headers: {
            "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
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
}, Br = (e) => e, ea = () => {
  let e = Br;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Br;
    }
  };
}, ta = ea(), Go = ta;
function Ye(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((o) => n.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function K(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ye(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Dr(...e) {
  return e.reduce((t, n) => n == null ? t : function(...s) {
    t.apply(this, s), n.apply(this, s);
  }, () => {
  });
}
var Jn = { exports: {} }, Qt = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr;
function na() {
  if (Lr)
    return re;
  Lr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function O(C) {
    if (typeof C == "object" && C !== null) {
      var k = C.$$typeof;
      switch (k) {
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
                case g:
                case a:
                  return C;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function v(C) {
    return O(C) === u;
  }
  return re.AsyncMode = l, re.ConcurrentMode = u, re.ContextConsumer = c, re.ContextProvider = a, re.Element = t, re.ForwardRef = f, re.Fragment = o, re.Lazy = y, re.Memo = g, re.Portal = n, re.Profiler = i, re.StrictMode = s, re.Suspense = m, re.isAsyncMode = function(C) {
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
    return O(C) === g;
  }, re.isPortal = function(C) {
    return O(C) === n;
  }, re.isProfiler = function(C) {
    return O(C) === i;
  }, re.isStrictMode = function(C) {
    return O(C) === s;
  }, re.isSuspense = function(C) {
    return O(C) === m;
  }, re.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === o || C === u || C === i || C === s || C === m || C === h || typeof C == "object" && C !== null && (C.$$typeof === y || C.$$typeof === g || C.$$typeof === a || C.$$typeof === c || C.$$typeof === f || C.$$typeof === x || C.$$typeof === S || C.$$typeof === R || C.$$typeof === p);
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
var Fr;
function ra() {
  return Fr || (Fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function O(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === o || B === u || B === i || B === s || B === m || B === h || typeof B == "object" && B !== null && (B.$$typeof === y || B.$$typeof === g || B.$$typeof === a || B.$$typeof === c || B.$$typeof === f || B.$$typeof === x || B.$$typeof === S || B.$$typeof === R || B.$$typeof === p);
    }
    function v(B) {
      if (typeof B == "object" && B !== null) {
        var me = B.$$typeof;
        switch (me) {
          case t:
            var xe = B.type;
            switch (xe) {
              case l:
              case u:
              case o:
              case i:
              case s:
              case m:
                return xe;
              default:
                var Ie = xe && xe.$$typeof;
                switch (Ie) {
                  case c:
                  case f:
                  case y:
                  case g:
                  case a:
                    return Ie;
                  default:
                    return me;
                }
            }
          case n:
            return me;
        }
      }
    }
    var C = l, k = u, M = c, j = a, D = t, Y = f, z = o, d = y, N = g, w = n, $ = i, A = s, G = m, F = !1;
    function L(B) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(B) || v(B) === l;
    }
    function I(B) {
      return v(B) === u;
    }
    function b(B) {
      return v(B) === c;
    }
    function _(B) {
      return v(B) === a;
    }
    function V(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function U(B) {
      return v(B) === f;
    }
    function Z(B) {
      return v(B) === o;
    }
    function Q(B) {
      return v(B) === y;
    }
    function H(B) {
      return v(B) === g;
    }
    function J(B) {
      return v(B) === n;
    }
    function te(B) {
      return v(B) === i;
    }
    function W(B) {
      return v(B) === s;
    }
    function ee(B) {
      return v(B) === m;
    }
    oe.AsyncMode = C, oe.ConcurrentMode = k, oe.ContextConsumer = M, oe.ContextProvider = j, oe.Element = D, oe.ForwardRef = Y, oe.Fragment = z, oe.Lazy = d, oe.Memo = N, oe.Portal = w, oe.Profiler = $, oe.StrictMode = A, oe.Suspense = G, oe.isAsyncMode = L, oe.isConcurrentMode = I, oe.isContextConsumer = b, oe.isContextProvider = _, oe.isElement = V, oe.isForwardRef = U, oe.isFragment = Z, oe.isLazy = Q, oe.isMemo = H, oe.isPortal = J, oe.isProfiler = te, oe.isStrictMode = W, oe.isSuspense = ee, oe.isValidElementType = O, oe.typeOf = v;
  }()), oe;
}
var Vr;
function Yo() {
  return Vr || (Vr = 1, process.env.NODE_ENV === "production" ? Qt.exports = na() : Qt.exports = ra()), Qt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Mn, zr;
function oa() {
  if (zr)
    return Mn;
  zr = 1;
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
  return Mn = s() ? Object.assign : function(i, a) {
    for (var c, l = o(i), u, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var m in c)
        t.call(c, m) && (l[m] = c[m]);
      if (e) {
        u = e(c);
        for (var h = 0; h < u.length; h++)
          n.call(c, u[h]) && (l[u[h]] = c[u[h]]);
      }
    }
    return l;
  }, Mn;
}
var jn, Ur;
function xr() {
  if (Ur)
    return jn;
  Ur = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jn = e, jn;
}
var _n, Wr;
function Ho() {
  return Wr || (Wr = 1, _n = Function.call.bind(Object.prototype.hasOwnProperty)), _n;
}
var Bn, Gr;
function sa() {
  if (Gr)
    return Bn;
  Gr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = xr(), n = {}, o = Ho();
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
              var h = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = i[f](a, f, l, c, null, t);
          } catch (y) {
            m = y;
          }
          if (m && !(m instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + c + " type: " + m.message + (g ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Bn = s, Bn;
}
var Dn, Yr;
function ia() {
  if (Yr)
    return Dn;
  Yr = 1;
  var e = Yo(), t = oa(), n = xr(), o = Ho(), s = sa(), i = function() {
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
    var h = "<<anonymous>>", g = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: R(),
      arrayOf: O,
      element: v(),
      elementType: C(),
      instanceOf: k,
      node: Y(),
      objectOf: j,
      oneOf: M,
      oneOfType: D,
      shape: d,
      exact: N
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
        if (J = J || h, W = W || H, ee !== n) {
          if (l) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
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
          var W = G(J);
          return new p(
            "Invalid " + Z + " `" + Q + "` of type " + ("`" + W + "` supplied to `" + U + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return x(b);
    }
    function R() {
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
    function k(I) {
      function b(_, V, U, Z, Q) {
        if (!(_[V] instanceof I)) {
          var H = I.name || h, J = L(_[V]);
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
        var te = JSON.stringify(I, function(ee, B) {
          var me = G(B);
          return me === "symbol" ? String(B) : B;
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
    function D(I) {
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
          var ee = I[W], B = ee(U, Z, Q, H, J, n);
          if (B == null)
            return null;
          B.data && o(B.data, "expectedType") && te.push(B.data.expectedType);
        }
        var me = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new p("Invalid " + H + " `" + J + "` supplied to " + ("`" + Q + "`" + me + "."));
      }
      return x(V);
    }
    function Y() {
      function I(b, _, V, U, Z) {
        return w(b[_]) ? null : new p("Invalid " + U + " `" + Z + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
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
            return z(U, Z, Q, te, G(W));
          var ee = W(H, te, U, Z, Q + "." + te, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return x(b);
    }
    function N(I) {
      function b(_, V, U, Z, Q) {
        var H = _[V], J = A(H);
        if (J !== "object")
          return new p("Invalid " + Z + " `" + Q + "` of type `" + J + "` " + ("supplied to `" + U + "`, expected `object`."));
        var te = t({}, _[V], I);
        for (var W in te) {
          var ee = I[W];
          if (o(I, W) && typeof ee != "function")
            return z(U, Z, Q, W, G(ee));
          if (!ee)
            return new p(
              "Invalid " + Z + " `" + Q + "` key `" + W + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(_[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var B = ee(H, W, U, Z, Q + "." + W, n);
          if (B)
            return B;
        }
        return null;
      }
      return x(b);
    }
    function w(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(w);
          if (I === null || c(I))
            return !0;
          var b = m(I);
          if (b) {
            var _ = b.call(I), V;
            if (b !== I.entries) {
              for (; !(V = _.next()).done; )
                if (!w(V.value))
                  return !1;
            } else
              for (; !(V = _.next()).done; ) {
                var U = V.value;
                if (U && !w(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function $(I, b) {
      return I === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function A(I) {
      var b = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : $(b, I) ? "symbol" : b;
    }
    function G(I) {
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
      var b = G(I);
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
      return !I.constructor || !I.constructor.name ? h : I.constructor.name;
    }
    return g.checkPropTypes = s, g.resetWarningCache = s.resetWarningCache, g.PropTypes = g, g;
  }, Dn;
}
var Ln, Hr;
function aa() {
  if (Hr)
    return Ln;
  Hr = 1;
  var e = xr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ln = function() {
    function o(a, c, l, u, f, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, Ln;
}
if (process.env.NODE_ENV !== "production") {
  var ca = Yo(), la = !0;
  Jn.exports = ia()(ca.isElement, la);
} else
  Jn.exports = aa()();
var ua = Jn.exports;
const r = /* @__PURE__ */ Yi(ua);
function qo(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = qo(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function X() {
  for (var e, t, n = 0, o = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = qo(e)) && (o && (o += " "), o += t);
  return o;
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
var Zn = { exports: {} }, ue = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function da() {
  if (qr)
    return ue;
  qr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
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
            case h:
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
    return typeof p == "string" || typeof p == "function" || p === n || p === s || p === o || p === l || p === u || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === f || p.$$typeof === a || p.$$typeof === i || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
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
function pa() {
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
              case g:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case c:
                  case l:
                  case h:
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
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    de.ContextConsumer = a, de.ContextProvider = c, de.Element = t, de.ForwardRef = l, de.Fragment = o, de.Lazy = h, de.Memo = m, de.Portal = n, de.Profiler = i, de.StrictMode = s, de.Suspense = u, de.SuspenseList = f, de.isContextConsumer = function(p) {
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
      return e(p) === h;
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
      return typeof p == "string" || typeof p == "function" || p === o || p === i || p === s || p === u || p === f || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === m || p.$$typeof === c || p.$$typeof === a || p.$$typeof === l || p.$$typeof === y || p.getModuleId !== void 0);
    }, de.typeOf = e;
  }()), de;
}
process.env.NODE_ENV === "production" ? Zn.exports = da() : Zn.exports = pa();
var ot = Zn.exports;
function je(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ko(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || ot.isValidElementType(e) || !je(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ko(e[n]);
  }), t;
}
function Te(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? {
    ...e
  } : e;
  return je(e) && je(t) && Object.keys(t).forEach((s) => {
    /* @__PURE__ */ T.isValidElement(t[s]) || ot.isValidElementType(t[s]) ? o[s] = t[s] : je(t[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, s) && je(e[s]) ? o[s] = Te(e[s], t[s], n) : n.clone ? o[s] = je(t[s]) ? Ko(t[s]) : t[s] : o[s] = t[s];
  }), o;
}
function Bt(e, t) {
  return t ? Te(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const fa = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.string, r.object, r.array]) : {}, qe = fa;
function Xr(e, t) {
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
function ma(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function ha(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ye(18, `(${t})`));
    return null;
  }
  const [, o, s] = n, i = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(s).up(i);
}
function ga(e) {
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
const gn = {
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
}, Qr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${gn[e]}px)`
}, ya = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : gn[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Ne(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const i = o.breakpoints || Qr;
    return t.reduce((a, c, l) => (a[i.up(i.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = o.breakpoints || Qr;
    return Object.keys(t).reduce((a, c) => {
      if (ma(i.keys, c)) {
        const l = ha(o.containerQueries ? o : ya, c);
        l && (a[l] = n(t[c], c));
      } else if (Object.keys(i.values || gn).includes(c)) {
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
function Xo(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((o, s) => {
    const i = e.up(s);
    return o[i] = {}, o;
  }, {})) || {};
}
function er(e, t) {
  return e.reduce((n, o) => {
    const s = n[o];
    return (!s || Object.keys(s).length === 0) && delete n[o], n;
  }, t);
}
function ba(e, ...t) {
  const n = Xo(e), o = [n, ...t].reduce((s, i) => Te(s, i), {});
  return er(Object.keys(n), o);
}
function va(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, o = Object.keys(t);
  return Array.isArray(e) ? o.forEach((s, i) => {
    i < e.length && (n[s] = !0);
  }) : o.forEach((s) => {
    e[s] != null && (n[s] = !0);
  }), n;
}
function Fn({
  values: e,
  breakpoints: t,
  base: n
}) {
  const o = n || va(e, t), s = Object.keys(o);
  if (s.length === 0)
    return e;
  let i;
  return s.reduce((a, c, l) => (Array.isArray(e) ? (a[c] = e[l] != null ? e[l] : e[i], i = l) : typeof e == "object" ? (a[c] = e[c] != null ? e[c] : e[i], i = c) : a[c] = e, a), {});
}
function yn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((s, i) => s && s[i] ? s[i] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, s) => o && o[s] != null ? o[s] : null, e);
}
function sn(e, t, n, o = n) {
  let s;
  return typeof e == "function" ? s = e(n) : Array.isArray(e) ? s = e[n] || o : s = yn(e, n) || o, t && (s = t(s, o, e)), s;
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
    const c = a[t], l = a.theme, u = yn(l, o) || {};
    return Ne(a, c, (m) => {
      let h = sn(u, s, m);
      return m === h && typeof m == "string" && (h = sn(u, s, `${t}${m === "default" ? "" : K(m)}`, m)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: qe
  } : {}, i.filterProps = [t], i;
}
function xa(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ta = {
  m: "margin",
  p: "padding"
}, Ea = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Jr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ca = xa((e) => {
  if (e.length > 2)
    if (Jr[e])
      e = Jr[e];
    else
      return [e];
  const [t, n] = e.split(""), o = Ta[t], s = Ea[n] || "";
  return Array.isArray(s) ? s.map((i) => o + i) : [o + s];
}), bn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], vn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Sa = [...bn, ...vn];
function Ut(e, t, n, o) {
  const s = yn(e, t, !0) ?? n;
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
function xn(e) {
  return Ut(e, "spacing", 8, "spacing");
}
function st(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Oa(e, t) {
  return (n) => e.reduce((o, s) => (o[s] = st(t, n), o), {});
}
function wa(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const s = Ca(n), i = Oa(s, o), a = e[n];
  return Ne(e, a, i);
}
function Qo(e, t) {
  const n = xn(e.theme);
  return Object.keys(e).map((o) => wa(e, t, o, n)).reduce(Bt, {});
}
function ge(e) {
  return Qo(e, bn);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? bn.reduce((e, t) => (e[t] = qe, e), {}) : {};
ge.filterProps = bn;
function ye(e) {
  return Qo(e, vn);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? vn.reduce((e, t) => (e[t] = qe, e), {}) : {};
ye.filterProps = vn;
process.env.NODE_ENV !== "production" && Sa.reduce((e, t) => (e[t] = qe, e), {});
function Tn(...e) {
  const t = e.reduce((o, s) => (s.filterProps.forEach((i) => {
    o[i] = s;
  }), o), {}), n = (o) => Object.keys(o).reduce((s, i) => t[i] ? Bt(s, t[i](o)) : s, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, s) => Object.assign(o, s.propTypes), {}) : {}, n.filterProps = e.reduce((o, s) => o.concat(s.filterProps), []), n;
}
function we(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Re(e, t) {
  return ve({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ra = Re("border", we), Ia = Re("borderTop", we), $a = Re("borderRight", we), Pa = Re("borderBottom", we), ka = Re("borderLeft", we), Na = Re("borderColor"), Aa = Re("borderTopColor"), Ma = Re("borderRightColor"), ja = Re("borderBottomColor"), _a = Re("borderLeftColor"), Ba = Re("outline", we), Da = Re("outlineColor"), En = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ut(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: st(t, o)
    });
    return Ne(e, e.borderRadius, n);
  }
  return null;
};
En.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: qe
} : {};
En.filterProps = ["borderRadius"];
Tn(Ra, Ia, $a, Pa, ka, Na, Aa, Ma, ja, _a, En, Ba, Da);
const Cn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ut(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: st(t, o)
    });
    return Ne(e, e.gap, n);
  }
  return null;
};
Cn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: qe
} : {};
Cn.filterProps = ["gap"];
const Sn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ut(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: st(t, o)
    });
    return Ne(e, e.columnGap, n);
  }
  return null;
};
Sn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: qe
} : {};
Sn.filterProps = ["columnGap"];
const On = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ut(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: st(t, o)
    });
    return Ne(e, e.rowGap, n);
  }
  return null;
};
On.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: qe
} : {};
On.filterProps = ["rowGap"];
const La = ve({
  prop: "gridColumn"
}), Fa = ve({
  prop: "gridRow"
}), Va = ve({
  prop: "gridAutoFlow"
}), za = ve({
  prop: "gridAutoColumns"
}), Ua = ve({
  prop: "gridAutoRows"
}), Wa = ve({
  prop: "gridTemplateColumns"
}), Ga = ve({
  prop: "gridTemplateRows"
}), Ya = ve({
  prop: "gridTemplateAreas"
}), Ha = ve({
  prop: "gridArea"
});
Tn(Cn, Sn, On, La, Fa, Va, za, Ua, Wa, Ga, Ya, Ha);
function vt(e, t) {
  return t === "grey" ? t : e;
}
const qa = ve({
  prop: "color",
  themeKey: "palette",
  transform: vt
}), Ka = ve({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: vt
}), Xa = ve({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: vt
});
Tn(qa, Ka, Xa);
function Se(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Qa = ve({
  prop: "width",
  transform: Se
}), Tr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var s, i, a, c, l;
      const o = ((a = (i = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[n]) || gn[n];
      return o ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: Se(n)
      };
    };
    return Ne(e, e.maxWidth, t);
  }
  return null;
};
Tr.filterProps = ["maxWidth"];
const Ja = ve({
  prop: "minWidth",
  transform: Se
}), Za = ve({
  prop: "height",
  transform: Se
}), ec = ve({
  prop: "maxHeight",
  transform: Se
}), tc = ve({
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
const nc = ve({
  prop: "boxSizing"
});
Tn(Qa, Tr, Ja, Za, ec, tc, nc);
const rc = {
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
    style: En
  },
  // palette
  color: {
    themeKey: "palette",
    transform: vt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: vt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: vt
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
    style: ge
  },
  mt: {
    style: ge
  },
  mr: {
    style: ge
  },
  mb: {
    style: ge
  },
  ml: {
    style: ge
  },
  mx: {
    style: ge
  },
  my: {
    style: ge
  },
  margin: {
    style: ge
  },
  marginTop: {
    style: ge
  },
  marginRight: {
    style: ge
  },
  marginBottom: {
    style: ge
  },
  marginLeft: {
    style: ge
  },
  marginX: {
    style: ge
  },
  marginY: {
    style: ge
  },
  marginInline: {
    style: ge
  },
  marginInlineStart: {
    style: ge
  },
  marginInlineEnd: {
    style: ge
  },
  marginBlock: {
    style: ge
  },
  marginBlockStart: {
    style: ge
  },
  marginBlockEnd: {
    style: ge
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
    style: Cn
  },
  rowGap: {
    style: On
  },
  columnGap: {
    style: Sn
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
    style: Tr
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
}, Wt = rc;
function oc(...e) {
  const t = e.reduce((o, s) => o.concat(Object.keys(s)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function sc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ic() {
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
    const h = yn(s, u) || {};
    return m ? m(a) : Ne(a, o, (y) => {
      let p = sn(h, f, y);
      return y === p && typeof y == "string" && (p = sn(h, f, `${n}${y === "default" ? "" : K(y)}`, y)), l === !1 ? p : {
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
    const a = s.unstable_sxConfig ?? Wt;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(s);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const f = Xo(s.breakpoints), m = Object.keys(f);
      let h = f;
      return Object.keys(u).forEach((g) => {
        const y = sc(u[g], s);
        if (y != null)
          if (typeof y == "object")
            if (a[g])
              h = Bt(h, e(g, y, s, a));
            else {
              const p = Ne({
                theme: s
              }, y, (x) => ({
                [g]: x
              }));
              oc(p, y) ? h[g] = t({
                sx: y,
                theme: s,
                nested: !0
              }) : h = Bt(h, p);
            }
          else
            h = Bt(h, e(g, y, s, a));
      }), !i && s.modularCssLayers ? {
        "@layer sx": Xr(s, er(m, h))
      } : Xr(s, er(m, h));
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const Jo = ic();
Jo.filterProps = ["sx"];
const Et = Jo, ac = (e) => {
  var o;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((o = e == null ? void 0 : e.theme) == null ? void 0 : o.unstable_sxConfig) ?? Wt;
  return Object.keys(e).forEach((s) => {
    n[s] ? t.systemProps[s] = e[s] : t.otherProps[s] = e[s];
  }), t;
};
function Er(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: o,
    otherProps: s
  } = ac(n);
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
function cc(e) {
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
var lc = {
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
function uc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var dc = !1, pc = /[A-Z]|^ms/g, fc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Zo = function(t) {
  return t.charCodeAt(1) === 45;
}, Zr = function(t) {
  return t != null && typeof t != "boolean";
}, Vn = /* @__PURE__ */ uc(function(e) {
  return Zo(e) ? e : e.replace(pc, "-$&").toLowerCase();
}), eo = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(fc, function(o, s, i) {
          return Me = {
            name: s,
            styles: i,
            next: Me
          }, s;
        });
  }
  return lc[t] !== 1 && !Zo(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, mc = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Lt(e, t, n) {
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
      return hc(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Me, u = n(e);
        return Me = l, Lt(e, t, u);
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
function hc(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var s = 0; s < n.length; s++)
      o += Lt(e, t, n[s]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? o += i + "{" + t[c] + "}" : Zr(c) && (o += Vn(i) + ":" + eo(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && dc)
          throw new Error(mc);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            Zr(a[l]) && (o += Vn(i) + ":" + eo(i, a[l]) + ";");
        else {
          var u = Lt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              o += Vn(i) + ":" + u + ";";
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
var to = /label:\s*([^\s;{]+)\s*(;|$)/g, Me;
function gc(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, s = "";
  Me = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    o = !1, s += Lt(n, t, i);
  else {
    var a = i;
    s += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (s += Lt(n, t, e[c]), o) {
      var l = i;
      s += l[c];
    }
  to.lastIndex = 0;
  for (var u = "", f; (f = to.exec(s)) !== null; )
    u += "-" + f[1];
  var m = cc(s) + u;
  return {
    name: m,
    styles: s,
    next: Me
  };
}
/**
 * @mui/styled-engine v7.3.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function es(e, t) {
  const n = Ui(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const s = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${s})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((i) => i === void 0) && console.error(`MUI: the styled(${s})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
function yc(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const no = [];
function rt(e) {
  return no[0] = e, gc(no);
}
const bc = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function vc(e) {
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
  } = e, i = bc(t), a = Object.keys(i);
  function c(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - o / 100}${n})`;
  }
  function u(h, g) {
    const y = a.indexOf(g);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : g) - o / 100}${n})`;
  }
  function f(h) {
    return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : c(h);
  }
  function m(h) {
    const g = a.indexOf(h);
    return g === 0 ? c(a[1]) : g === a.length - 1 ? l(a[g]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
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
const xc = {
  borderRadius: 4
}, Tc = xc;
function ts(e = 8, t = xn({
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
function Ec(e, t) {
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
  } = e, c = vc(n), l = ts(s);
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
      ...Tc,
      ...i
    }
  }, a);
  return u = ga(u), u.applyStyles = Ec, u = t.reduce((f, m) => Te(f, m), u), u.unstable_sxConfig = {
    ...Wt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return Et({
      sx: m,
      theme: this
    });
  }, u;
}
function Cc(e) {
  return Object.keys(e).length === 0;
}
function ns(e = null) {
  const t = T.useContext(Wi);
  return !t || Cc(t) ? e : t;
}
const Sc = wn();
function Cr(e = Sc) {
  return ns(e);
}
function Oc(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: o = "MuiBox-root",
    generateClassName: s
  } = e, i = es("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(Et);
  return /* @__PURE__ */ T.forwardRef(function(l, u) {
    const f = Cr(n), {
      className: m,
      component: h = "div",
      ...g
    } = Er(l);
    return /* @__PURE__ */ E.jsx(i, {
      as: h,
      ref: u,
      className: X(m, s ? s(o) : o),
      theme: t && f[t] || f,
      ...g
    });
  });
}
const wc = {
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
  const o = wc[t];
  return o ? `${n}-${o}` : `${Go.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const o = {};
  return t.forEach((s) => {
    o[s] = se(e, s, n);
  }), o;
}
function rs(e, t = "") {
  return e.displayName || e.name || t;
}
function ro(e, t, n) {
  const o = rs(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function Rc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return rs(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ot.ForwardRef:
          return ro(e, e.render, "ForwardRef");
        case ot.Memo:
          return ro(e, e.type, "memo");
        default:
          return;
      }
  }
}
function os(e) {
  const {
    variants: t,
    ...n
  } = e, o = {
    variants: t,
    style: rt(n),
    isProcessed: !0
  };
  return o.style === n || t && t.forEach((s) => {
    typeof s.style != "function" && (s.style = rt(s.style));
  }), o;
}
const Ic = wn();
function zn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function tt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function $c(e) {
  return e ? (t, n) => n[e] : null;
}
function Pc(e, t, n) {
  e.theme = Ac(e.theme) ? n : e.theme[t] || e.theme;
}
function rn(e, t, n) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o))
    return o.flatMap((s) => rn(e, s, n));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let s;
    if (o.isProcessed)
      s = n ? tt(o.style, n) : o.style;
    else {
      const {
        variants: i,
        ...a
      } = o;
      s = n ? tt(rt(a), n) : a;
    }
    return ss(e, o.variants, [s], n);
  }
  return o != null && o.isProcessed ? n ? tt(rt(o.style), n) : o.style : n ? tt(rt(o), n) : o;
}
function ss(e, t, n = [], o = void 0) {
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
      }), n.push(o ? tt(rt(c.style(s)), o) : c.style(s))) : n.push(o ? tt(rt(c.style), o) : c.style);
    }
  return n;
}
function is(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ic,
    rootShouldForwardProp: o = zn,
    slotShouldForwardProp: s = zn
  } = e;
  function i(c) {
    Pc(c, t, n);
  }
  return (c, l = {}) => {
    yc(c, (k) => k.filter((M) => M !== Et));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = $c(as(f)),
      ...y
    } = l, p = u && u.startsWith("Mui") || f ? "components" : "custom", x = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), S = h || !1;
    let R = zn;
    f === "Root" || f === "root" ? R = o : f ? R = s : Mc(c) && (R = void 0);
    const O = es(c, {
      shouldForwardProp: R,
      label: Nc(u, f),
      ...y
    }), v = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(j) {
          return rn(j, k, j.theme.modularCssLayers ? p : void 0);
        };
      if (je(k)) {
        const M = os(k);
        return function(D) {
          return M.variants ? rn(D, M, D.theme.modularCssLayers ? p : void 0) : D.theme.modularCssLayers ? tt(M.style, p) : M.style;
        };
      }
      return k;
    }, C = (...k) => {
      const M = [], j = k.map(v), D = [];
      if (M.push(i), u && g && D.push(function(N) {
        var G, F;
        const $ = (F = (G = N.theme.components) == null ? void 0 : G[u]) == null ? void 0 : F.styleOverrides;
        if (!$)
          return null;
        const A = {};
        for (const L in $)
          A[L] = rn(N, $[L], N.theme.modularCssLayers ? "theme" : void 0);
        return g(N, A);
      }), u && !x && D.push(function(N) {
        var A, G;
        const w = N.theme, $ = (G = (A = w == null ? void 0 : w.components) == null ? void 0 : A[u]) == null ? void 0 : G.variants;
        return $ ? ss(N, $, [], N.theme.modularCssLayers ? "theme" : void 0) : null;
      }), S || D.push(Et), Array.isArray(j[0])) {
        const d = j.shift(), N = new Array(M.length).fill(""), w = new Array(D.length).fill("");
        let $;
        $ = [...N, ...d, ...w], $.raw = [...N, ...d.raw, ...w], M.unshift($);
      }
      const Y = [...M, ...j, ...D], z = O(...Y);
      return c.muiName && (z.muiName = c.muiName), process.env.NODE_ENV !== "production" && (z.displayName = kc(u, f, c)), z;
    };
    return O.withConfig && (C.withConfig = O.withConfig), C;
  };
}
function kc(e, t, n) {
  return e ? `${e}${K(t || "")}` : `Styled(${Rc(n)})`;
}
function Nc(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${as(t || "Root")}`), n;
}
function Ac(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Mc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function as(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const jc = is(), _c = jc;
function Ft(e, t, n = !1) {
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
              o[i][u] = Ft(a[u], c[u], n);
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
function cs(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : Ft(t.components[n].defaultProps, o);
}
function Bc({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let s = Cr(n);
  return o && (s = s[o] || s), cs({
    theme: s,
    name: t,
    props: e
  });
}
const Dc = typeof window < "u" ? T.useLayoutEffect : T.useEffect, it = Dc;
function Lc(e, t, n, o, s) {
  const [i, a] = T.useState(() => s && n ? n(e).matches : o ? o(e).matches : t);
  return it(() => {
    if (!n)
      return;
    const c = n(e), l = () => {
      a(c.matches);
    };
    return l(), c.addEventListener("change", l), () => {
      c.removeEventListener("change", l);
    };
  }, [e, n]), i;
}
const Fc = {
  ...T
}, ls = Fc.useSyncExternalStore;
function Vc(e, t, n, o, s) {
  const i = T.useCallback(() => t, [t]), a = T.useMemo(() => {
    if (s && n)
      return () => n(e).matches;
    if (o !== null) {
      const {
        matches: f
      } = o(e);
      return () => f;
    }
    return i;
  }, [i, e, o, s, n]), [c, l] = T.useMemo(() => {
    if (n === null)
      return [i, () => () => {
      }];
    const f = n(e);
    return [() => f.matches, (m) => (f.addEventListener("change", m), () => {
      f.removeEventListener("change", m);
    })];
  }, [i, n, e]);
  return ls(l, c, a);
}
function zc(e = {}) {
  const {
    themeId: t
  } = e;
  return function(o, s = {}) {
    let i = ns();
    i && t && (i = i[t] || i);
    const a = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: c = !1,
      matchMedia: l = a ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: f = !1
    } = cs({
      name: "MuiUseMediaQuery",
      props: s,
      theme: i
    });
    process.env.NODE_ENV !== "production" && typeof o == "function" && i === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let m = typeof o == "function" ? o(i) : o;
    m = m.replace(/^@media( ?)/m, ""), m.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`));
    const g = (ls !== void 0 ? Vc : Lc)(m, c, l, u, f);
    return process.env.NODE_ENV !== "production" && T.useDebugValue({
      query: m,
      match: g
    }), g;
  };
}
function Uc(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Sr(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Uc(e, t, n);
}
function Wc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, s) => s < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function He(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return He(Wc(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ye(9, e));
  let o = e.substring(t + 1, e.length - 1), s;
  if (n === "color") {
    if (o = o.split(" "), s = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ye(10, s));
  } else
    o = o.split(",");
  return o = o.map((i) => parseFloat(i)), {
    type: n,
    values: o,
    colorSpace: s
  };
}
const Gc = (e) => {
  const t = He(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, At = (e, t) => {
  try {
    return Gc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Rn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((s, i) => i < 3 ? parseInt(s, 10) : s) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function us(e) {
  e = He(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, s = t[2] / 100, i = o * Math.min(s, 1 - s), a = (u, f = (u + n / 30) % 12) => s - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), Rn({
    type: c,
    values: l
  });
}
function tr(e) {
  e = He(e);
  let t = e.type === "hsl" || e.type === "hsla" ? He(us(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function oo(e, t) {
  const n = tr(e), o = tr(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function an(e, t) {
  return e = He(e), t = Sr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Rn(e);
}
function Qe(e, t, n) {
  try {
    return an(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function In(e, t) {
  if (e = He(e), t = Sr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Rn(e);
}
function ie(e, t, n) {
  try {
    return In(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function $n(e, t) {
  if (e = He(e), t = Sr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Rn(e);
}
function ae(e, t, n) {
  try {
    return $n(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function nr(e, t = 0.15) {
  return tr(e) > 0.5 ? In(e, t) : $n(e, t);
}
function Jt(e, t, n) {
  try {
    return nr(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
const Yc = "exact-prop: ​";
function ds(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Yc]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Hc = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (r.node, r.bool);
const ps = () => T.useContext(Hc) ?? !1, qc = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (r.node, r.object);
function Kc(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  if (!t || !t.components || !t.components[n])
    return o;
  const s = t.components[n];
  return s.defaultProps ? Ft(s.defaultProps, o, t.components.mergeClassNameAndStyle) : !s.styleOverrides && !s.variants ? Ft(s, o, t.components.mergeClassNameAndStyle) : o;
}
function Xc({
  props: e,
  name: t
}) {
  const n = T.useContext(qc);
  return Kc({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let so = 0;
function Qc(e) {
  const [t, n] = T.useState(e), o = e || t;
  return T.useEffect(() => {
    t == null && (so += 1, n(`mui-${so}`));
  }, [t]), o;
}
const Jc = {
  ...T
}, io = Jc.useId;
function fs(e) {
  if (io !== void 0) {
    const t = io();
    return e ?? t;
  }
  return Qc(e);
}
const ao = {
  theme: void 0
};
function Zc(e) {
  let t, n;
  return function(s) {
    let i = t;
    return (i === void 0 || s.theme !== n) && (ao.theme = s.theme, i = os(e(ao)), t = i, n = s.theme), i;
  };
}
function el(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const s = o[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${s}${t(...o.slice(1))})` : `, ${s}`;
  }
  return (o, ...s) => `var(--${e ? `${e}-` : ""}${o}${t(...s)})`;
}
const co = (e, t, n, o = []) => {
  let s = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(s) ? s[Number(i)] = n : s && typeof s == "object" && (s[i] = n) : s && typeof s == "object" && (s[i] || (s[i] = o.includes(i) ? [] : {}), s = s[i]);
  });
}, tl = (e, t, n) => {
  function o(s, i = [], a = []) {
    Object.entries(s).forEach(([c, l]) => {
      (!n || n && !n([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? o(l, [...i, c], Array.isArray(l) ? [...a, c] : a) : t([...i, c], l, a));
    });
  }
  o(e);
}, nl = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Un(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, s = {}, i = {}, a = {};
  return tl(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!o || !o(c, l))) {
        const f = `--${n ? `${n}-` : ""}${c.join("-")}`, m = nl(c, l);
        Object.assign(s, {
          [f]: m
        }), co(i, c, `var(${f})`, u), co(a, c, `var(${f}, ${m})`, u);
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
function rl(e, t = {}) {
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
    varsWithDefaults: h
  } = Un(u, t);
  let g = h;
  const y = {}, {
    [l]: p,
    ...x
  } = a;
  if (Object.entries(x || {}).forEach(([v, C]) => {
    const {
      vars: k,
      css: M,
      varsWithDefaults: j
    } = Un(C, t);
    g = Te(g, j), y[v] = {
      css: M,
      vars: k
    };
  }), p) {
    const {
      css: v,
      vars: C,
      varsWithDefaults: k
    } = Un(p, t);
    g = Te(g, k), y[l] = {
      css: v,
      vars: C
    };
  }
  function S(v, C) {
    var M, j;
    let k = s;
    if (s === "class" && (k = ".%s"), s === "data" && (k = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (k = `[${s}="%s"]`), v) {
      if (k === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((j = (M = a[v]) == null ? void 0 : M.palette) == null ? void 0 : j.mode) || v})`]: {
            ":root": C
          }
        };
      if (k)
        return e.defaultColorScheme === v ? `:root, ${k.replace("%s", String(v))}` : k.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: g,
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
      var D, Y;
      const v = [], C = e.defaultColorScheme || "light";
      function k(z, d) {
        Object.keys(d).length && v.push(typeof z == "string" ? {
          [z]: {
            ...d
          }
        } : z);
      }
      k(n(void 0, {
        ...m
      }), m);
      const {
        [C]: M,
        ...j
      } = y;
      if (M) {
        const {
          css: z
        } = M, d = (Y = (D = a[C]) == null ? void 0 : D.palette) == null ? void 0 : Y.mode, N = !o && d ? {
          colorScheme: d,
          ...z
        } : {
          ...z
        };
        k(n(C, {
          ...N
        }), N);
      }
      return Object.entries(j).forEach(([z, {
        css: d
      }]) => {
        var $, A;
        const N = (A = ($ = a[z]) == null ? void 0 : $.palette) == null ? void 0 : A.mode, w = !o && N ? {
          colorScheme: N,
          ...d
        } : {
          ...d
        };
        k(n(z, {
          ...w
        }), w);
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
function ol(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function ms(e, t) {
  var n, o, s;
  return /* @__PURE__ */ T.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((s = (o = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : o.value) == null ? void 0 : s.muiName)
  ) !== -1;
}
const sl = wn(), il = _c("div", {
  name: "MuiStack",
  slot: "Root"
});
function al(e) {
  return Bc({
    props: e,
    name: "MuiStack",
    defaultTheme: sl
  });
}
function cl(e, t) {
  const n = T.Children.toArray(e).filter(Boolean);
  return n.reduce((o, s, i) => (o.push(s), i < n.length - 1 && o.push(/* @__PURE__ */ T.cloneElement(t, {
    key: `separator-${i}`
  })), o), []);
}
const ll = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], ul = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Ne({
      theme: t
    }, Fn({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (o) => ({
      flexDirection: o
    }))
  };
  if (e.spacing) {
    const o = xn(t), s = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), i = Fn({
      values: e.direction,
      base: s
    }), a = Fn({
      values: e.spacing,
      base: s
    });
    typeof i == "object" && Object.keys(i).forEach((l, u, f) => {
      if (!i[l]) {
        const h = u > 0 ? i[f[u - 1]] : "column";
        i[l] = h;
      }
    }), n = Te(n, Ne({
      theme: t
    }, a, (l, u) => e.useFlexGap ? {
      gap: st(o, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${ll(u ? i[u] : e.direction)}`]: st(o, l)
      }
    }));
  }
  return n = ba(t.breakpoints, n), n;
};
function dl(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = il,
    useThemeProps: n = al,
    componentName: o = "MuiStack"
  } = e, s = () => pe({
    root: ["root"]
  }, (l) => se(o, l), {}), i = t(ul), a = /* @__PURE__ */ T.forwardRef(function(l, u) {
    const f = n(l), m = Er(f), {
      component: h = "div",
      direction: g = "column",
      spacing: y = 0,
      divider: p,
      children: x,
      className: S,
      useFlexGap: R = !1,
      ...O
    } = m, v = {
      direction: g,
      spacing: y,
      useFlexGap: R
    }, C = s();
    return /* @__PURE__ */ E.jsx(i, {
      as: h,
      ownerState: v,
      ref: u,
      className: X(C.root, S),
      ...O,
      children: p ? cl(x, p) : x
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
const pl = {
  black: "#000",
  white: "#fff"
}, Vt = pl, fl = {
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
}, ml = fl, hl = {
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
}, ut = hl, gl = {
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
}, dt = gl, yl = {
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
}, Pt = yl, bl = {
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
}, pt = bl, vl = {
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
}, ft = vl, xl = {
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
}, mt = xl;
function hs() {
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
const gs = hs();
function ys() {
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
const rr = ys();
function lo(e, t, n, o) {
  const s = o.light || o, i = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = $n(e.main, s) : t === "dark" && (e.dark = In(e.main, i)));
}
function uo(e, t, n, o, s) {
  const i = s.light || s, a = s.dark || s * 1.5;
  t[n] || (t.hasOwnProperty(o) ? t[n] = t[o] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Tl(e = "light") {
  return e === "dark" ? {
    main: pt[200],
    light: pt[50],
    dark: pt[400]
  } : {
    main: pt[700],
    light: pt[400],
    dark: pt[800]
  };
}
function El(e = "light") {
  return e === "dark" ? {
    main: ut[200],
    light: ut[50],
    dark: ut[400]
  } : {
    main: ut[500],
    light: ut[300],
    dark: ut[700]
  };
}
function Cl(e = "light") {
  return e === "dark" ? {
    main: dt[500],
    light: dt[300],
    dark: dt[700]
  } : {
    main: dt[700],
    light: dt[400],
    dark: dt[800]
  };
}
function Sl(e = "light") {
  return e === "dark" ? {
    main: ft[400],
    light: ft[300],
    dark: ft[700]
  } : {
    main: ft[700],
    light: ft[500],
    dark: ft[900]
  };
}
function Ol(e = "light") {
  return e === "dark" ? {
    main: mt[400],
    light: mt[300],
    dark: mt[700]
  } : {
    main: mt[800],
    light: mt[500],
    dark: mt[900]
  };
}
function wl(e = "light") {
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
function Rl(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Or(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    colorSpace: s,
    ...i
  } = e, a = e.primary || Tl(t), c = e.secondary || El(t), l = e.error || Cl(t), u = e.info || Sl(t), f = e.success || Ol(t), m = e.warning || wl(t);
  function h(x) {
    if (s)
      return Rl(x);
    const S = oo(x, rr.text.primary) >= n ? rr.text.primary : gs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = oo(x, S);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${S} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const g = ({
    color: x,
    name: S,
    mainShade: R = 500,
    lightShade: O = 300,
    darkShade: v = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[R] && (x.main = x[R]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : Ye(11, S ? ` (${S})` : "", R));
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
} });` : Ye(12, S ? ` (${S})` : "", JSON.stringify(x.main)));
    return s ? (uo(s, x, "light", O, o), uo(s, x, "dark", v, o)) : (lo(x, "light", O, o), lo(x, "dark", v, o)), x.contrastText || (x.contrastText = h(x.main)), x;
  };
  let y;
  return t === "light" ? y = hs() : t === "dark" && (y = ys()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Te({
    // A collection of common colors.
    common: {
      ...Vt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: ml,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...y
  }, i);
}
function Il(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [s, i] = o;
    typeof i == "object" && (t[s] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function $l(e, t) {
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
function Pl(e) {
  return Math.round(e * 1e5) / 1e5;
}
const po = {
  textTransform: "uppercase"
}, fo = '"Roboto", "Helvetica", "Arial", sans-serif';
function kl(e, t) {
  const {
    fontFamily: n = fo,
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
  const h = o / 14, g = f || ((x) => `${x / l * h}rem`), y = (x, S, R, O, v) => ({
    fontFamily: n,
    fontWeight: x,
    fontSize: g(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === fo ? {
      letterSpacing: `${Pl(O / S)}em`
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
    button: y(a, 14, 1.75, 0.4, po),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, po),
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
    pxToRem: g,
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
const Nl = 0.2, Al = 0.14, Ml = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Nl})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Al})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ml})`].join(",");
}
const jl = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], _l = jl, Bl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Dl = {
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
function mo(e) {
  return `${Math.round(e)}ms`;
}
function Ll(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Fl(e) {
  const t = {
    ...Bl,
    ...e.easing
  }, n = {
    ...Dl,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Ll,
    create: (s = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", m = (h) => !Number.isNaN(parseFloat(h));
        !f(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !m(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((f) => `${f} ${typeof a == "string" ? a : mo(a)} ${c} ${typeof l == "string" ? l : mo(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Vl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, zl = Vl;
function Ul(e) {
  return je(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function bs(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const s = Object.entries(o);
    for (let i = 0; i < s.length; i++) {
      const [a, c] = s[i];
      !Ul(c) || a.startsWith("unstable_") ? delete o[a] : je(c) && (o[a] = {
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
function ho(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Wl = (e) => {
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
function Gl(e) {
  Object.assign(e, {
    alpha(t, n) {
      const o = this || e;
      return o.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : o.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : an(t, Wl(n));
    },
    lighten(t, n) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #fff ${ho(n)})` : $n(t, n);
    },
    darken(t, n) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #000 ${ho(n)})` : In(t, n);
    }
  });
}
function or(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ye(20));
  const m = Or({
    ...i,
    colorSpace: u
  }), h = wn(e);
  let g = Te(h, {
    mixins: $l(h.breakpoints, o),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: _l.slice(),
    typography: kl(m, c),
    transitions: Fl(a),
    zIndex: {
      ...zl
    }
  });
  if (g = Te(g, f), g = t.reduce((y, p) => Te(y, p), g), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (x, S) => {
      let R;
      for (R in x) {
        const O = x[R];
        if (y.includes(R) && Object.keys(O).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = se("", R);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: O
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[R] = {};
        }
      }
    };
    Object.keys(g.components).forEach((x) => {
      const S = g.components[x].styleOverrides;
      S && x.startsWith("Mui") && p(S, x);
    });
  }
  return g.unstable_sxConfig = {
    ...Wt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, g.unstable_sx = function(p) {
    return Et({
      sx: p,
      theme: this
    });
  }, g.toRuntimeSource = bs, Gl(g), g;
}
function sr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Yl = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = sr(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function vs(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function xs(e) {
  return e === "dark" ? Yl : [];
}
function Hl(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: o,
    colorSpace: s,
    ...i
  } = e, a = Or({
    ...t,
    colorSpace: s
  });
  return {
    palette: a,
    opacity: {
      ...vs(a.mode),
      ...n
    },
    overlays: o || xs(a.mode),
    ...i
  };
}
function ql(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Kl = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Xl = Kl, Ql = (e) => (t, n) => {
  const o = e.rootSelector || ":root", s = e.colorSchemeSelector;
  let i = s;
  if (s === "class" && (i = ".%s"), s === "data" && (i = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (i = `[${s}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Xl(e.cssVarPrefix).forEach((c) => {
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
function Jl(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function P(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Mt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : us(e);
}
function Le(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = At(Mt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Zl(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ae = (e) => {
  try {
    return e();
  } catch {
  }
}, eu = (e = "mui") => el(e);
function Wn(e, t, n, o, s) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = s === "dark" ? "dark" : "light";
  if (!o) {
    t[s] = Hl({
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
  } = or({
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
      ...vs(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || xs(i)
  }, c;
}
function tu(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: s = !1,
    cssVarPrefix: i = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: c = ql,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...f
  } = e, m = Object.keys(n)[0], h = o || (n.light && m !== "light" ? "light" : m), g = eu(i), {
    [h]: y,
    light: p,
    dark: x,
    ...S
  } = n, R = {
    ...S
  };
  let O = y;
  if ((h === "dark" && !("dark" in n) || h === "light" && !("light" in n)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : Ye(21, h));
  let v;
  a && (v = "oklch");
  const C = Wn(v, R, O, f, h);
  p && !R.light && Wn(v, R, p, void 0, "light"), x && !R.dark && Wn(v, R, x, void 0, "dark");
  let k = {
    defaultColorScheme: h,
    ...C,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: g,
    colorSchemes: R,
    font: {
      ...Il(C.typography),
      ...C.font
    },
    spacing: Zl(f.spacing)
  };
  Object.keys(k.colorSchemes).forEach((z) => {
    const d = k.colorSchemes[z].palette, N = ($) => {
      const A = $.split("-"), G = A[1], F = A[2];
      return g($, d[G][F]);
    };
    d.mode === "light" && (P(d.common, "background", "#fff"), P(d.common, "onBackground", "#000")), d.mode === "dark" && (P(d.common, "background", "#000"), P(d.common, "onBackground", "#fff"));
    function w($, A, G) {
      if (v) {
        let F;
        return $ === Qe && (F = `transparent ${((1 - G) * 100).toFixed(0)}%`), $ === ie && (F = `#000 ${(G * 100).toFixed(0)}%`), $ === ae && (F = `#fff ${(G * 100).toFixed(0)}%`), `color-mix(in ${v}, ${A}, ${F})`;
      }
      return $(A, G);
    }
    if (Jl(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      P(d.Alert, "errorColor", w(ie, d.error.light, 0.6)), P(d.Alert, "infoColor", w(ie, d.info.light, 0.6)), P(d.Alert, "successColor", w(ie, d.success.light, 0.6)), P(d.Alert, "warningColor", w(ie, d.warning.light, 0.6)), P(d.Alert, "errorFilledBg", N("palette-error-main")), P(d.Alert, "infoFilledBg", N("palette-info-main")), P(d.Alert, "successFilledBg", N("palette-success-main")), P(d.Alert, "warningFilledBg", N("palette-warning-main")), P(d.Alert, "errorFilledColor", Ae(() => d.getContrastText(d.error.main))), P(d.Alert, "infoFilledColor", Ae(() => d.getContrastText(d.info.main))), P(d.Alert, "successFilledColor", Ae(() => d.getContrastText(d.success.main))), P(d.Alert, "warningFilledColor", Ae(() => d.getContrastText(d.warning.main))), P(d.Alert, "errorStandardBg", w(ae, d.error.light, 0.9)), P(d.Alert, "infoStandardBg", w(ae, d.info.light, 0.9)), P(d.Alert, "successStandardBg", w(ae, d.success.light, 0.9)), P(d.Alert, "warningStandardBg", w(ae, d.warning.light, 0.9)), P(d.Alert, "errorIconColor", N("palette-error-main")), P(d.Alert, "infoIconColor", N("palette-info-main")), P(d.Alert, "successIconColor", N("palette-success-main")), P(d.Alert, "warningIconColor", N("palette-warning-main")), P(d.AppBar, "defaultBg", N("palette-grey-100")), P(d.Avatar, "defaultBg", N("palette-grey-400")), P(d.Button, "inheritContainedBg", N("palette-grey-300")), P(d.Button, "inheritContainedHoverBg", N("palette-grey-A100")), P(d.Chip, "defaultBorder", N("palette-grey-400")), P(d.Chip, "defaultAvatarColor", N("palette-grey-700")), P(d.Chip, "defaultIconColor", N("palette-grey-700")), P(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), P(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), P(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), P(d.LinearProgress, "primaryBg", w(ae, d.primary.main, 0.62)), P(d.LinearProgress, "secondaryBg", w(ae, d.secondary.main, 0.62)), P(d.LinearProgress, "errorBg", w(ae, d.error.main, 0.62)), P(d.LinearProgress, "infoBg", w(ae, d.info.main, 0.62)), P(d.LinearProgress, "successBg", w(ae, d.success.main, 0.62)), P(d.LinearProgress, "warningBg", w(ae, d.warning.main, 0.62)), P(d.Skeleton, "bg", v ? w(Qe, d.text.primary, 0.11) : `rgba(${N("palette-text-primaryChannel")} / 0.11)`), P(d.Slider, "primaryTrack", w(ae, d.primary.main, 0.62)), P(d.Slider, "secondaryTrack", w(ae, d.secondary.main, 0.62)), P(d.Slider, "errorTrack", w(ae, d.error.main, 0.62)), P(d.Slider, "infoTrack", w(ae, d.info.main, 0.62)), P(d.Slider, "successTrack", w(ae, d.success.main, 0.62)), P(d.Slider, "warningTrack", w(ae, d.warning.main, 0.62));
      const $ = v ? w(ie, d.background.default, 0.6825) : Jt(d.background.default, 0.8);
      P(d.SnackbarContent, "bg", $), P(d.SnackbarContent, "color", Ae(() => v ? rr.text.primary : d.getContrastText($))), P(d.SpeedDialAction, "fabHoverBg", Jt(d.background.paper, 0.15)), P(d.StepConnector, "border", N("palette-grey-400")), P(d.StepContent, "border", N("palette-grey-400")), P(d.Switch, "defaultColor", N("palette-common-white")), P(d.Switch, "defaultDisabledColor", N("palette-grey-100")), P(d.Switch, "primaryDisabledColor", w(ae, d.primary.main, 0.62)), P(d.Switch, "secondaryDisabledColor", w(ae, d.secondary.main, 0.62)), P(d.Switch, "errorDisabledColor", w(ae, d.error.main, 0.62)), P(d.Switch, "infoDisabledColor", w(ae, d.info.main, 0.62)), P(d.Switch, "successDisabledColor", w(ae, d.success.main, 0.62)), P(d.Switch, "warningDisabledColor", w(ae, d.warning.main, 0.62)), P(d.TableCell, "border", w(ae, w(Qe, d.divider, 1), 0.88)), P(d.Tooltip, "bg", w(Qe, d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      P(d.Alert, "errorColor", w(ae, d.error.light, 0.6)), P(d.Alert, "infoColor", w(ae, d.info.light, 0.6)), P(d.Alert, "successColor", w(ae, d.success.light, 0.6)), P(d.Alert, "warningColor", w(ae, d.warning.light, 0.6)), P(d.Alert, "errorFilledBg", N("palette-error-dark")), P(d.Alert, "infoFilledBg", N("palette-info-dark")), P(d.Alert, "successFilledBg", N("palette-success-dark")), P(d.Alert, "warningFilledBg", N("palette-warning-dark")), P(d.Alert, "errorFilledColor", Ae(() => d.getContrastText(d.error.dark))), P(d.Alert, "infoFilledColor", Ae(() => d.getContrastText(d.info.dark))), P(d.Alert, "successFilledColor", Ae(() => d.getContrastText(d.success.dark))), P(d.Alert, "warningFilledColor", Ae(() => d.getContrastText(d.warning.dark))), P(d.Alert, "errorStandardBg", w(ie, d.error.light, 0.9)), P(d.Alert, "infoStandardBg", w(ie, d.info.light, 0.9)), P(d.Alert, "successStandardBg", w(ie, d.success.light, 0.9)), P(d.Alert, "warningStandardBg", w(ie, d.warning.light, 0.9)), P(d.Alert, "errorIconColor", N("palette-error-main")), P(d.Alert, "infoIconColor", N("palette-info-main")), P(d.Alert, "successIconColor", N("palette-success-main")), P(d.Alert, "warningIconColor", N("palette-warning-main")), P(d.AppBar, "defaultBg", N("palette-grey-900")), P(d.AppBar, "darkBg", N("palette-background-paper")), P(d.AppBar, "darkColor", N("palette-text-primary")), P(d.Avatar, "defaultBg", N("palette-grey-600")), P(d.Button, "inheritContainedBg", N("palette-grey-800")), P(d.Button, "inheritContainedHoverBg", N("palette-grey-700")), P(d.Chip, "defaultBorder", N("palette-grey-700")), P(d.Chip, "defaultAvatarColor", N("palette-grey-300")), P(d.Chip, "defaultIconColor", N("palette-grey-300")), P(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), P(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), P(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), P(d.LinearProgress, "primaryBg", w(ie, d.primary.main, 0.5)), P(d.LinearProgress, "secondaryBg", w(ie, d.secondary.main, 0.5)), P(d.LinearProgress, "errorBg", w(ie, d.error.main, 0.5)), P(d.LinearProgress, "infoBg", w(ie, d.info.main, 0.5)), P(d.LinearProgress, "successBg", w(ie, d.success.main, 0.5)), P(d.LinearProgress, "warningBg", w(ie, d.warning.main, 0.5)), P(d.Skeleton, "bg", v ? w(Qe, d.text.primary, 0.13) : `rgba(${N("palette-text-primaryChannel")} / 0.13)`), P(d.Slider, "primaryTrack", w(ie, d.primary.main, 0.5)), P(d.Slider, "secondaryTrack", w(ie, d.secondary.main, 0.5)), P(d.Slider, "errorTrack", w(ie, d.error.main, 0.5)), P(d.Slider, "infoTrack", w(ie, d.info.main, 0.5)), P(d.Slider, "successTrack", w(ie, d.success.main, 0.5)), P(d.Slider, "warningTrack", w(ie, d.warning.main, 0.5));
      const $ = v ? w(ae, d.background.default, 0.985) : Jt(d.background.default, 0.98);
      P(d.SnackbarContent, "bg", $), P(d.SnackbarContent, "color", Ae(() => v ? gs.text.primary : d.getContrastText($))), P(d.SpeedDialAction, "fabHoverBg", Jt(d.background.paper, 0.15)), P(d.StepConnector, "border", N("palette-grey-600")), P(d.StepContent, "border", N("palette-grey-600")), P(d.Switch, "defaultColor", N("palette-grey-300")), P(d.Switch, "defaultDisabledColor", N("palette-grey-600")), P(d.Switch, "primaryDisabledColor", w(ie, d.primary.main, 0.55)), P(d.Switch, "secondaryDisabledColor", w(ie, d.secondary.main, 0.55)), P(d.Switch, "errorDisabledColor", w(ie, d.error.main, 0.55)), P(d.Switch, "infoDisabledColor", w(ie, d.info.main, 0.55)), P(d.Switch, "successDisabledColor", w(ie, d.success.main, 0.55)), P(d.Switch, "warningDisabledColor", w(ie, d.warning.main, 0.55)), P(d.TableCell, "border", w(ie, w(Qe, d.divider, 1), 0.68)), P(d.Tooltip, "bg", w(Qe, d.grey[700], 0.92));
    }
    Le(d.background, "default"), Le(d.background, "paper"), Le(d.common, "background"), Le(d.common, "onBackground"), Le(d, "divider"), Object.keys(d).forEach(($) => {
      const A = d[$];
      $ !== "tonalOffset" && A && typeof A == "object" && (A.main && P(d[$], "mainChannel", At(Mt(A.main))), A.light && P(d[$], "lightChannel", At(Mt(A.light))), A.dark && P(d[$], "darkChannel", At(Mt(A.dark))), A.contrastText && P(d[$], "contrastTextChannel", At(Mt(A.contrastText))), $ === "text" && (Le(d[$], "primary"), Le(d[$], "secondary")), $ === "action" && (A.active && Le(d[$], "active"), A.selected && Le(d[$], "selected")));
    });
  }), k = t.reduce((z, d) => Te(z, d), k);
  const M = {
    prefix: i,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: c,
    getSelector: Ql(k),
    enableContrastVars: a
  }, {
    vars: j,
    generateThemeVars: D,
    generateStyleSheets: Y
  } = rl(k, M);
  return k.vars = j, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([z, d]) => {
    k[z] = d;
  }), k.generateThemeVars = D, k.generateStyleSheets = Y, k.generateSpacing = function() {
    return ts(f.spacing, xn(this));
  }, k.getColorSchemeSelector = ol(l), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = c, k.unstable_sxConfig = {
    ...Wt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, k.unstable_sx = function(d) {
    return Et({
      sx: d,
      theme: this
    });
  }, k.toRuntimeSource = bs, k;
}
function go(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Or({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ts(e = {}, ...t) {
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
      return or(e, ...t);
    let f = n;
    "palette" in e || u[c] && (u[c] !== !0 ? f = u[c].palette : c === "dark" && (f = {
      mode: "dark"
    }));
    const m = or({
      ...e,
      palette: f
    }, ...t);
    return m.defaultColorScheme = c, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, go(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, go(m, "light", u.light)), m;
  }
  return !n && !("light" in u) && c === "light" && (u.light = !0), tu({
    ...a,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof o != "boolean" && o
  }, ...t);
}
const nu = Ts(), Es = nu, Pn = "$$material";
function Gt() {
  const e = Cr(Es);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[Pn] || e;
}
function ru(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ou = (e) => ru(e) && e !== "classes", Ot = ou, su = is({
  themeId: Pn,
  defaultTheme: Es,
  rootShouldForwardProp: Ot
}), q = su;
function iu() {
  return Er;
}
const au = Zc, he = au;
process.env.NODE_ENV !== "production" && (r.node, r.object.isRequired);
function le(e) {
  return Xc(e);
}
function cu(e) {
  return se("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const lu = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, s = {
    root: ["root", t !== "inherit" && `color${K(t)}`, `fontSize${K(n)}`]
  };
  return pe(s, cu, o);
}, uu = q("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${K(n.color)}`], t[`fontSize${K(n.fontSize)}`]];
  }
})(he(({
  theme: e
}) => {
  var t, n, o, s, i, a, c, l, u, f, m, h, g, y;
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
          color: (h = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) == null ? void 0 : y.disabled
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
})), wr = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    viewBox: h = "0 0 24 24",
    ...g
  } = o, y = /* @__PURE__ */ T.isValidElement(s) && s.type === "svg", p = {
    ...o,
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: h,
    hasSvgAsChild: y
  }, x = {};
  f || (x.viewBox = h);
  const S = lu(p);
  return /* @__PURE__ */ E.jsxs(uu, {
    as: c,
    className: X(S.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...x,
    ...g,
    ...y && s.props,
    ownerState: p,
    children: [y ? s.props.children : s, m ? /* @__PURE__ */ E.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (wr.propTypes = {
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
wr.muiName = "SvgIcon";
const yo = wr;
function ct(e, t) {
  function n(o, s) {
    return /* @__PURE__ */ E.jsx(yo, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: s,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = yo.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(n));
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
function Be(e) {
  return e && e.ownerDocument || document;
}
function Ve(e) {
  return Be(e).defaultView || window;
}
function bo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function xt(e) {
  const t = T.useRef(e);
  return it(() => {
    t.current = e;
  }), T.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ee(...e) {
  const t = T.useRef(void 0), n = T.useCallback((o) => {
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
  return T.useMemo(() => e.every((o) => o == null) ? null : (o) => {
    t.current && (t.current(), t.current = void 0), o != null && (t.current = n(o));
  }, e);
}
function du(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Ss(e, t) {
  if (!e)
    return t;
  function n(a, c) {
    const l = {};
    return Object.keys(c).forEach((u) => {
      du(u, c[u]) && typeof a[u] == "function" && (l[u] = (...f) => {
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
const vo = ct(/* @__PURE__ */ E.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"
}), "AccountCircleRounded"), pu = ct(/* @__PURE__ */ E.jsx("path", {
  d: "M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
}), "MenuRounded"), Os = ct(/* @__PURE__ */ E.jsx("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z"
}), "NotificationsRounded");
function fu(e) {
  return typeof e.main == "string";
}
function mu(e, t = []) {
  if (!fu(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function at(e = []) {
  return ([, t]) => t && mu(t, e);
}
function hu(e) {
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
function ws(e, t, n, o) {
  const s = e[t];
  if (s == null || !Number.isInteger(s)) {
    const i = hu(s);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Rs(e, t, n, o) {
  return e[t] === void 0 ? null : ws(e, t, n, o);
}
function ir() {
  return null;
}
Rs.isRequired = ws;
ir.isRequired = ir;
const gu = process.env.NODE_ENV === "production" ? ir : Rs, Tt = gu;
function De(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function yu(e) {
  return se("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const bu = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: s
  } = e, i = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return pe(i, yu, s);
}, vu = q("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(he(({
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
}))), Is = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var g;
  const o = le({
    props: t,
    name: "MuiPaper"
  }), s = Gt(), {
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
  }, h = bu(m);
  return process.env.NODE_ENV !== "production" && s.shadows[c] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${c}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${c}]\` is defined.`].join(`
`)), /* @__PURE__ */ E.jsx(vu, {
    as: a,
    ownerState: m,
    className: X(h.root, i),
    ref: n,
    ...f,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (s.vars || s).shadows[c],
        ...s.vars && {
          "--Paper-overlay": (g = s.vars.overlays) == null ? void 0 : g[c]
        },
        ...!s.vars && s.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${an("#fff", sr(c))}, ${an("#fff", sr(c))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Is.propTypes = {
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
  elevation: De(Tt, (e) => {
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
const kn = Is;
function xu(e) {
  return se("MuiAppBar", e);
}
ce("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const Tu = (e) => {
  const {
    color: t,
    position: n,
    classes: o
  } = e, s = {
    root: ["root", `color${K(t)}`, `position${K(n)}`]
  };
  return pe(s, xu, o);
}, xo = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, Eu = q(kn, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${K(n.position)}`], t[`color${K(n.color)}`]];
  }
})(he(({
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
        backgroundColor: e.vars ? xo(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? xo(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
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
}))), $s = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, f = Tu(u);
  return /* @__PURE__ */ E.jsx(Eu, {
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: X(f.root, s, c === "fixed" && "mui-fixed"),
    ref: n,
    ...l
  });
});
process.env.NODE_ENV !== "production" && ($s.propTypes = {
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
const Cu = $s, Su = ct(/* @__PURE__ */ E.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Ou(e) {
  return se("MuiAvatar", e);
}
ce("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
function cn(e) {
  return typeof e == "string";
}
function Ps(e, t, n) {
  return e === void 0 || cn(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function ks(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ns(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function To(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function As(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: s,
    className: i
  } = e;
  if (!t) {
    const g = X(n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, o == null ? void 0 : o.className), y = {
      ...n == null ? void 0 : n.style,
      ...s == null ? void 0 : s.style,
      ...o == null ? void 0 : o.style
    }, p = {
      ...n,
      ...s,
      ...o
    };
    return g.length > 0 && (p.className = g), Object.keys(y).length > 0 && (p.style = y), {
      props: p,
      internalRef: void 0
    };
  }
  const a = Ns({
    ...s,
    ...o
  }), c = To(o), l = To(s), u = t(a), f = X(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, s == null ? void 0 : s.className, o == null ? void 0 : o.className), m = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...s == null ? void 0 : s.style,
    ...o == null ? void 0 : o.style
  }, h = {
    ...u,
    ...n,
    ...l,
    ...c
  };
  return f.length > 0 && (h.className = f), Object.keys(m).length > 0 && (h.style = m), {
    props: h,
    internalRef: u.ref
  };
}
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
    ...h
  } = i, g = f[e] || o, y = ks(m[e], s), {
    props: {
      component: p,
      ...x
    },
    internalRef: S
  } = As({
    className: n,
    ...l,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: y
  }), R = Ee(S, y == null ? void 0 : y.ref, t.ref), O = e === "root" ? p || u : p, v = Ps(g, {
    ...e === "root" && !u && !f[e] && a,
    ...e !== "root" && !f[e] && a,
    ...x,
    ...O && !c && {
      as: O
    },
    ...O && c && {
      component: O
    },
    ref: R
  }, s);
  return [g, v];
}
const wu = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: o
  } = e;
  return pe({
    root: ["root", n, o && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Ou, t);
}, Ru = q("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
  }
})(he(({
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
}))), Iu = q("img", {
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
}), $u = q(Su, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function Pu({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: o
}) {
  const [s, i] = T.useState(!1);
  return T.useEffect(() => {
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
const Ms = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    src: h,
    srcSet: g,
    variant: y = "circular",
    ...p
  } = o;
  let x = null;
  const S = {
    ...o,
    component: c,
    variant: y
  }, R = Pu({
    ...f,
    ...typeof u.img == "function" ? u.img(S) : u.img,
    src: h,
    srcSet: g
  }), O = h || g, v = O && R !== "error";
  S.colorDefault = !v, delete S.ownerState;
  const C = wu(S), [k, M] = be("root", {
    ref: n,
    className: X(C.root, a),
    elementType: Ru,
    externalForwardedProps: {
      slots: l,
      slotProps: u,
      component: c,
      ...p
    },
    ownerState: S
  }), [j, D] = be("img", {
    className: C.img,
    elementType: Iu,
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
      src: h,
      srcSet: g,
      sizes: m
    },
    ownerState: S
  }), [Y, z] = be("fallback", {
    className: C.fallback,
    elementType: $u,
    externalForwardedProps: {
      slots: l,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: S
  });
  return v ? x = /* @__PURE__ */ E.jsx(j, {
    ...D
  }) : i || i === 0 ? x = i : O && s ? x = s[0] : x = /* @__PURE__ */ E.jsx(Y, {
    ...z
  }), /* @__PURE__ */ E.jsx(k, {
    ...M,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (Ms.propTypes = {
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
const ar = Ms;
function js(e) {
  const t = T.useRef({});
  return T.useEffect(() => {
    t.current = e;
  }), t.current;
}
function ku(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: o = 99,
    showZero: s = !1
  } = e, i = js({
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
function Nu(e) {
  return se("MuiBadge", e);
}
const Au = ce("MuiBadge", [
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
]), We = Au, Gn = 10, Yn = 4, Mu = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: o,
    overlap: s,
    variant: i,
    classes: a = {}
  } = e, c = {
    root: ["root"],
    badge: ["badge", i, o && "invisible", `anchorOrigin${K(n.vertical)}${K(n.horizontal)}`, `anchorOrigin${K(n.vertical)}${K(n.horizontal)}${K(s)}`, `overlap${K(s)}`, t !== "default" && `color${K(t)}`]
  };
  return pe(c, Nu, a);
}, ju = q("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), _u = q("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${K(n.anchorOrigin.vertical)}${K(n.anchorOrigin.horizontal)}${K(n.overlap)}`], n.color !== "default" && t[`color${K(n.color)}`], n.invisible && t.invisible];
  }
})(he(({
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
  minWidth: Gn * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: Gn * 2,
  borderRadius: Gn,
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
function Eo(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
  };
}
const _s = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    color: h = "default",
    invisible: g = !1,
    max: y = 99,
    badgeContent: p,
    slots: x,
    slotProps: S,
    showZero: R = !1,
    variant: O = "standard",
    ...v
  } = o, {
    badgeContent: C,
    invisible: k,
    max: M,
    displayValue: j
  } = ku({
    max: y,
    invisible: g,
    badgeContent: p,
    showZero: R
  }), D = js({
    anchorOrigin: Eo(s),
    color: h,
    overlap: m,
    variant: O,
    badgeContent: p
  }), Y = k || C == null && O !== "dot", {
    color: z = h,
    overlap: d = m,
    anchorOrigin: N,
    variant: w = O
  } = Y ? D : o, $ = Eo(N), A = w !== "dot" ? j : void 0, G = {
    ...o,
    badgeContent: C,
    invisible: Y,
    max: M,
    displayValue: A,
    showZero: R,
    anchorOrigin: $,
    color: z,
    overlap: d,
    variant: w
  }, F = Mu(G), L = {
    slots: {
      root: (x == null ? void 0 : x.root) ?? l.Root,
      badge: (x == null ? void 0 : x.badge) ?? l.Badge
    },
    slotProps: {
      root: (S == null ? void 0 : S.root) ?? u.root,
      badge: (S == null ? void 0 : S.badge) ?? u.badge
    }
  }, [I, b] = be("root", {
    elementType: ju,
    externalForwardedProps: {
      ...L,
      ...v
    },
    ownerState: G,
    className: X(F.root, i),
    ref: n,
    additionalProps: {
      as: c
    }
  }), [_, V] = be("badge", {
    elementType: _u,
    externalForwardedProps: L,
    ownerState: G,
    className: F.badge
  });
  return /* @__PURE__ */ E.jsxs(I, {
    ...b,
    children: [f, /* @__PURE__ */ E.jsx(_, {
      ...V,
      children: A
    })]
  });
});
process.env.NODE_ENV !== "production" && (_s.propTypes = {
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
const Bs = _s, Bu = ce("MuiBox", ["root"]), Du = Bu, Lu = Ts(), Ds = Oc({
  themeId: Pn,
  defaultTheme: Lu,
  defaultClassName: Du.root,
  generateClassName: Go.generate
});
process.env.NODE_ENV !== "production" && (Ds.propTypes = {
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
const Hn = Ds, Fu = r.oneOfType([r.func, r.object]), Ls = Fu;
function Vu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function zu(e, t, n, o, s) {
  const i = e[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Vu(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Rr = De(r.elementType, zu);
function Co(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const So = {};
function Fs(e, t) {
  const n = T.useRef(So);
  return n.current === So && (n.current = e(t)), n;
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
    const t = Fs(ln.create).current, [n, o] = T.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, T.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Wu(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Uu() {
  return ln.use();
}
function Wu() {
  let e, t;
  const n = new Promise((o, s) => {
    e = o, t = s;
  });
  return n.resolve = e, n.reject = t, n;
}
function cr() {
  return cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, cr.apply(null, arguments);
}
function Vs(e, t) {
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
function lr(e, t) {
  return lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, lr(e, t);
}
function zs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, lr(e, t);
}
const Oo = {
  disabled: !1
};
var Gu = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.shape({
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
var Yu = function(t) {
  return t.scrollTop;
}, jt = "unmounted", Ze = "exited", et = "entering", gt = "entered", ur = "exiting", ze = /* @__PURE__ */ function(e) {
  zs(t, e);
  function t(o, s) {
    var i;
    i = e.call(this, o, s) || this;
    var a = s, c = a && !a.isMounting ? o.enter : o.appear, l;
    return i.appearStatus = null, o.in ? c ? (l = Ze, i.appearStatus = et) : l = gt : o.unmountOnExit || o.mountOnEnter ? l = jt : l = Ze, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(s, i) {
    var a = s.in;
    return a && i.status === jt ? {
      status: Ze
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(s) {
    var i = null;
    if (s !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== et && a !== gt && (i = et) : (a === et || a === gt) && (i = ur);
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
      if (this.cancelNextCallback(), i === et) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Xt.findDOMNode(this);
          a && Yu(a);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Ze && this.setState({
        status: jt
      });
  }, n.performEnter = function(s) {
    var i = this, a = this.props.enter, c = this.context ? this.context.isMounting : s, l = this.props.nodeRef ? [c] : [Xt.findDOMNode(this), c], u = l[0], f = l[1], m = this.getTimeouts(), h = c ? m.appear : m.enter;
    if (!s && !a || Oo.disabled) {
      this.safeSetState({
        status: gt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: et
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: gt
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, n.performExit = function() {
    var s = this, i = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Xt.findDOMNode(this);
    if (!i || Oo.disabled) {
      this.safeSetState({
        status: Ze
      }, function() {
        s.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: ur
    }, function() {
      s.props.onExiting(c), s.onTransitionEnd(a.exit, function() {
        s.safeSetState({
          status: Ze
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
    if (s === jt)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = Vs(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
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
    var n = Gu;
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
function ht() {
}
ze.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ht,
  onEntering: ht,
  onEntered: ht,
  onExit: ht,
  onExiting: ht,
  onExited: ht
};
ze.UNMOUNTED = jt;
ze.EXITED = Ze;
ze.ENTERING = et;
ze.ENTERED = gt;
ze.EXITING = ur;
const Ir = ze;
function Hu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $r(e, t) {
  var n = function(i) {
    return t && tn(i) ? t(i) : i;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && Bi.map(e, function(s) {
    return s;
  }).forEach(function(s) {
    o[s.key] = n(s);
  }), o;
}
function qu(e, t) {
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
function nt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Ku(e, t) {
  return $r(e.children, function(n) {
    return nn(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: nt(n, "appear", e),
      enter: nt(n, "enter", e),
      exit: nt(n, "exit", e)
    });
  });
}
function Xu(e, t, n) {
  var o = $r(e.children), s = qu(t, o);
  return Object.keys(s).forEach(function(i) {
    var a = s[i];
    if (tn(a)) {
      var c = i in t, l = i in o, u = t[i], f = tn(u) && !u.props.in;
      l && (!c || f) ? s[i] = nn(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: nt(a, "exit", e),
        enter: nt(a, "enter", e)
      }) : !l && c && !f ? s[i] = nn(a, {
        in: !1
      }) : l && c && tn(u) && (s[i] = nn(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: nt(a, "exit", e),
        enter: nt(a, "enter", e)
      }));
    }
  }), s;
}
var Qu = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ju = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Pr = /* @__PURE__ */ function(e) {
  zs(t, e);
  function t(o, s) {
    var i;
    i = e.call(this, o, s) || this;
    var a = i.handleExited.bind(Hu(i));
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
      children: l ? Ku(s, c) : Xu(s, a, c),
      firstRender: !1
    };
  }, n.handleExited = function(s, i) {
    var a = $r(this.props.children);
    s.key in a || (s.props.onExited && s.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = cr({}, c.children);
      return delete l[s.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var s = this.props, i = s.component, a = s.childFactory, c = Vs(s, ["component", "childFactory"]), l = this.state.contextValue, u = Qu(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ _e.createElement(un.Provider, {
      value: l
    }, u) : /* @__PURE__ */ _e.createElement(un.Provider, {
      value: l
    }, /* @__PURE__ */ _e.createElement(i, c, u));
  }, t;
}(_e.Component);
Pr.propTypes = process.env.NODE_ENV !== "production" ? {
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
Pr.defaultProps = Ju;
const Zu = Pr, ed = [];
function td(e) {
  T.useEffect(e, ed);
}
class kr {
  constructor() {
    Rt(this, "currentId", null);
    Rt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Rt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new kr();
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
function Us() {
  const e = Fs(kr.create).current;
  return td(e.disposeEffect), e;
}
function Ws(e) {
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
  } = e, [f, m] = T.useState(!1), h = X(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + s
  }, y = X(n.child, f && n.childLeaving, o && n.childPulsate);
  return !c && !f && m(!0), T.useEffect(() => {
    if (!c && l != null) {
      const p = setTimeout(l, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ E.jsx("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ E.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (Ws.propTypes = {
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
const nd = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Oe = nd, dr = 550, rd = 80, od = zt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, sd = zt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, id = zt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, ad = q("span", {
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
}), cd = q(Ws, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Oe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${od};
    animation-duration: ${dr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Oe.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Oe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Oe.childLeaving} {
    opacity: 0;
    animation-name: ${sd};
    animation-duration: ${dr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Oe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${id};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Gs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: s = !1,
    classes: i = {},
    className: a,
    ...c
  } = o, [l, u] = T.useState([]), f = T.useRef(0), m = T.useRef(null);
  T.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const h = T.useRef(!1), g = Us(), y = T.useRef(null), p = T.useRef(null), x = T.useCallback((v) => {
    const {
      pulsate: C,
      rippleX: k,
      rippleY: M,
      rippleSize: j,
      cb: D
    } = v;
    u((Y) => [...Y, /* @__PURE__ */ E.jsx(cd, {
      classes: {
        ripple: X(i.ripple, Oe.ripple),
        rippleVisible: X(i.rippleVisible, Oe.rippleVisible),
        ripplePulsate: X(i.ripplePulsate, Oe.ripplePulsate),
        child: X(i.child, Oe.child),
        childLeaving: X(i.childLeaving, Oe.childLeaving),
        childPulsate: X(i.childPulsate, Oe.childPulsate)
      },
      timeout: dr,
      pulsate: C,
      rippleX: k,
      rippleY: M,
      rippleSize: j
    }, f.current)]), f.current += 1, m.current = D;
  }, [i]), S = T.useCallback((v = {}, C = {}, k = () => {
  }) => {
    const {
      pulsate: M = !1,
      center: j = s || C.pulsate,
      fakeElement: D = !1
      // For test purposes
    } = C;
    if ((v == null ? void 0 : v.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (h.current = !0);
    const Y = D ? null : p.current, z = Y ? Y.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let d, N, w;
    if (j || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      d = Math.round(z.width / 2), N = Math.round(z.height / 2);
    else {
      const {
        clientX: $,
        clientY: A
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      d = Math.round($ - z.left), N = Math.round(A - z.top);
    }
    if (j)
      w = Math.sqrt((2 * z.width ** 2 + z.height ** 2) / 3), w % 2 === 0 && (w += 1);
    else {
      const $ = Math.max(Math.abs((Y ? Y.clientWidth : 0) - d), d) * 2 + 2, A = Math.max(Math.abs((Y ? Y.clientHeight : 0) - N), N) * 2 + 2;
      w = Math.sqrt($ ** 2 + A ** 2);
    }
    v != null && v.touches ? y.current === null && (y.current = () => {
      x({
        pulsate: M,
        rippleX: d,
        rippleY: N,
        rippleSize: w,
        cb: k
      });
    }, g.start(rd, () => {
      y.current && (y.current(), y.current = null);
    })) : x({
      pulsate: M,
      rippleX: d,
      rippleY: N,
      rippleSize: w,
      cb: k
    });
  }, [s, x, g]), R = T.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), O = T.useCallback((v, C) => {
    if (g.clear(), (v == null ? void 0 : v.type) === "touchend" && y.current) {
      y.current(), y.current = null, g.start(0, () => {
        O(v, C);
      });
      return;
    }
    y.current = null, u((k) => k.length > 0 ? k.slice(1) : k), m.current = C;
  }, [g]);
  return T.useImperativeHandle(n, () => ({
    pulsate: R,
    start: S,
    stop: O
  }), [R, S, O]), /* @__PURE__ */ E.jsx(ad, {
    className: X(Oe.root, i.root, a),
    ref: p,
    ...c,
    children: /* @__PURE__ */ E.jsx(Zu, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
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
const ld = Gs;
function ud(e) {
  return se("MuiButtonBase", e);
}
const dd = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), pd = dd, fd = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: s
  } = e, a = pe({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, ud, s);
  return n && o && (a.root += ` ${o}`), a;
}, md = q("button", {
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
  [`&.${pd.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ys = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    focusRipple: h = !1,
    focusVisibleClassName: g,
    LinkComponent: y = "a",
    onBlur: p,
    onClick: x,
    onContextMenu: S,
    onDragLeave: R,
    onFocus: O,
    onFocusVisible: v,
    onKeyDown: C,
    onKeyUp: k,
    onMouseDown: M,
    onMouseLeave: j,
    onMouseUp: D,
    onTouchEnd: Y,
    onTouchMove: z,
    onTouchStart: d,
    tabIndex: N = 0,
    TouchRippleProps: w,
    touchRippleRef: $,
    type: A,
    ...G
  } = o, F = T.useRef(null), L = Uu(), I = Ee(L.ref, $), [b, _] = T.useState(!1);
  u && b && _(!1), T.useImperativeHandle(s, () => ({
    focusVisible: () => {
      _(!0), F.current.focus();
    }
  }), []);
  const V = L.shouldMount && !f && !u;
  T.useEffect(() => {
    b && h && !f && L.pulsate();
  }, [f, h, b, L]);
  const U = Fe(L, "start", M, m), Z = Fe(L, "stop", S, m), Q = Fe(L, "stop", R, m), H = Fe(L, "stop", D, m), J = Fe(L, "stop", (ne) => {
    b && ne.preventDefault(), j && j(ne);
  }, m), te = Fe(L, "start", d, m), W = Fe(L, "stop", Y, m), ee = Fe(L, "stop", z, m), B = Fe(L, "stop", (ne) => {
    Co(ne.target) || _(!1), p && p(ne);
  }, !1), me = xt((ne) => {
    F.current || (F.current = ne.currentTarget), Co(ne.target) && (_(!0), v && v(ne)), O && O(ne);
  }), xe = () => {
    const ne = F.current;
    return l && l !== "button" && !(ne.tagName === "A" && ne.href);
  }, Ie = xt((ne) => {
    h && !ne.repeat && b && ne.key === " " && L.stop(ne, () => {
      L.start(ne);
    }), ne.target === ne.currentTarget && xe() && ne.key === " " && ne.preventDefault(), C && C(ne), ne.target === ne.currentTarget && xe() && ne.key === "Enter" && !u && (ne.preventDefault(), x && x(ne));
  }), Kt = xt((ne) => {
    h && ne.key === " " && b && !ne.defaultPrevented && L.stop(ne, () => {
      L.pulsate(ne);
    }), k && k(ne), x && ne.target === ne.currentTarget && xe() && ne.key === " " && !ne.defaultPrevented && x(ne);
  });
  let Ke = l;
  Ke === "button" && (G.href || G.to) && (Ke = y);
  const Ue = {};
  Ke === "button" ? (Ue.type = A === void 0 ? "button" : A, Ue.disabled = u) : (!G.href && !G.to && (Ue.role = "button"), u && (Ue["aria-disabled"] = u));
  const Xe = Ee(n, F), wt = {
    ...o,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: m,
    focusRipple: h,
    tabIndex: N,
    focusVisible: b
  }, Ce = fd(wt);
  return /* @__PURE__ */ E.jsxs(md, {
    as: Ke,
    className: X(Ce.root, c),
    ownerState: wt,
    onBlur: B,
    onClick: x,
    onContextMenu: Z,
    onFocus: me,
    onKeyDown: Ie,
    onKeyUp: Kt,
    onMouseDown: U,
    onMouseLeave: J,
    onMouseUp: H,
    onDragLeave: Q,
    onTouchEnd: W,
    onTouchMove: ee,
    onTouchStart: te,
    ref: Xe,
    tabIndex: u ? -1 : N,
    type: A,
    ...Ue,
    ...G,
    children: [a, V ? /* @__PURE__ */ E.jsx(ld, {
      ref: I,
      center: i,
      ...w
    }) : null]
  });
});
function Fe(e, t, n, o = !1) {
  return xt((s) => (n && n(s), o || e[t](s), !0));
}
process.env.NODE_ENV !== "production" && (Ys.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Ls,
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
  component: Rr,
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
const Yt = Ys;
function hd(e) {
  return se("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const $e = 44, pr = zt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, fr = zt`
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
`, gd = typeof pr != "string" ? Wo`
        animation: ${pr} 1.4s linear infinite;
      ` : null, yd = typeof fr != "string" ? Wo`
        animation: ${fr} 1.4s ease-in-out infinite;
      ` : null, bd = (e) => {
  const {
    classes: t,
    variant: n,
    color: o,
    disableShrink: s
  } = e, i = {
    root: ["root", n, `color${K(o)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${K(n)}`, s && "circleDisableShrink"]
  };
  return pe(i, hd, t);
}, vd = q("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${K(n.color)}`]];
  }
})(he(({
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
    style: gd || {
      animation: `${pr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(at()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), xd = q("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Td = q("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${K(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(he(({
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
    style: yd || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${fr} 1.4s ease-in-out infinite`
    }
  }]
}))), Ed = q("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(he(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Hs = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    variant: h = "indeterminate",
    ...g
  } = o, y = {
    ...o,
    color: i,
    disableShrink: a,
    size: l,
    thickness: f,
    value: m,
    variant: h,
    enableTrackSlot: c
  }, p = bd(y), x = {}, S = {}, R = {};
  if (h === "determinate") {
    const O = 2 * Math.PI * (($e - f) / 2);
    x.strokeDasharray = O.toFixed(3), R["aria-valuenow"] = Math.round(m), x.strokeDashoffset = `${((100 - m) / 100 * O).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ E.jsx(vd, {
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
    ...R,
    ...g,
    children: /* @__PURE__ */ E.jsxs(xd, {
      className: p.svg,
      ownerState: y,
      viewBox: `${$e / 2} ${$e / 2} ${$e} ${$e}`,
      children: [c ? /* @__PURE__ */ E.jsx(Ed, {
        className: p.track,
        ownerState: y,
        cx: $e,
        cy: $e,
        r: ($e - f) / 2,
        fill: "none",
        strokeWidth: f,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ E.jsx(Td, {
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
process.env.NODE_ENV !== "production" && (Hs.propTypes = {
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
  disableShrink: De(r.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
const qs = Hs;
function Cd(e) {
  return se("MuiButton", e);
}
const Sd = ce("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Je = Sd, Ks = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (Ks.displayName = "ButtonGroupContext");
const Od = Ks, Xs = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Xs.displayName = "ButtonGroupButtonContext");
const wd = Xs, Rd = (e) => {
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
    root: ["root", a && "loading", i, `${i}${K(t)}`, `size${K(s)}`, `${i}Size${K(s)}`, `color${K(t)}`, n && "disableElevation", o && "fullWidth", a && `loadingPosition${K(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${K(s)}`],
    endIcon: ["icon", "endIcon", `iconSize${K(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = pe(u, Cd, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Qs = [{
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
}], Id = q(Yt, {
  shouldForwardProp: (e) => Ot(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${K(n.color)}`], t[`size${K(n.size)}`], t[`${n.variant}Size${K(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(he(({
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
    [`&.${Je.disabled}`]: {
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
        [`&.${Je.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Je.disabled}`]: {
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
        [`&.${Je.disabled}`]: {
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
        [`&.${Je.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Je.disabled}`]: {
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
        [`&.${Je.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), $d = q("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${K(n.size)}`]];
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
  }, ...Qs]
})), Pd = q("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${K(n.size)}`]];
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
  }, ...Qs]
})), kd = q("span", {
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
})), wo = q("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Js = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = T.useContext(Od), s = T.useContext(wd), i = Ft(o, t), a = le({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: f,
    disabled: m = !1,
    disableElevation: h = !1,
    disableFocusRipple: g = !1,
    endIcon: y,
    focusVisibleClassName: p,
    fullWidth: x = !1,
    id: S,
    loading: R = null,
    loadingIndicator: O,
    loadingPosition: v = "center",
    size: C = "medium",
    startIcon: k,
    type: M,
    variant: j = "text",
    ...D
  } = a, Y = fs(S), z = O ?? /* @__PURE__ */ E.jsx(qs, {
    "aria-labelledby": Y,
    color: "inherit",
    size: 16
  }), d = {
    ...a,
    color: l,
    component: u,
    disabled: m,
    disableElevation: h,
    disableFocusRipple: g,
    fullWidth: x,
    loading: R,
    loadingIndicator: z,
    loadingPosition: v,
    size: C,
    type: M,
    variant: j
  }, N = Rd(d), w = (k || R && v === "start") && /* @__PURE__ */ E.jsx($d, {
    className: N.startIcon,
    ownerState: d,
    children: k || /* @__PURE__ */ E.jsx(wo, {
      className: N.loadingIconPlaceholder,
      ownerState: d
    })
  }), $ = (y || R && v === "end") && /* @__PURE__ */ E.jsx(Pd, {
    className: N.endIcon,
    ownerState: d,
    children: y || /* @__PURE__ */ E.jsx(wo, {
      className: N.loadingIconPlaceholder,
      ownerState: d
    })
  }), A = s || "", G = typeof R == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ E.jsx("span", {
      className: N.loadingWrapper,
      style: {
        display: "contents"
      },
      children: R && /* @__PURE__ */ E.jsx(kd, {
        className: N.loadingIndicator,
        ownerState: d,
        children: z
      })
    })
  ) : null;
  return /* @__PURE__ */ E.jsxs(Id, {
    ownerState: d,
    className: X(o.className, N.root, f, A),
    component: u,
    disabled: m || R,
    focusRipple: !g,
    focusVisibleClassName: X(N.focusVisible, p),
    ref: n,
    type: M,
    id: R ? Y : S,
    ...D,
    classes: N,
    children: [w, v !== "end" && G, c, v === "end" && G, $]
  });
});
process.env.NODE_ENV !== "production" && (Js.propTypes = {
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
const Nr = Js;
function Nd(e) {
  return se("MuiDivider", e);
}
const Ad = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Ro = Ad, Md = (e) => {
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
  }, Nd, o);
}, jd = q("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(he(({
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
}))), _d = q("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(he(({
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
}))), dn = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    textAlign: h = "center",
    variant: g = "fullWidth",
    ...y
  } = o, p = {
    ...o,
    absolute: s,
    component: l,
    flexItem: u,
    light: f,
    orientation: c,
    role: m,
    textAlign: h,
    variant: g
  }, x = Md(p);
  return /* @__PURE__ */ E.jsx(jd, {
    as: l,
    className: X(x.root, a),
    role: m,
    ref: n,
    ownerState: p,
    "aria-orientation": m === "separator" && (l !== "hr" || c === "vertical") ? c : void 0,
    ...y,
    children: i ? /* @__PURE__ */ E.jsx(_d, {
      className: x.wrapper,
      ownerState: p,
      children: i
    }) : null
  });
});
dn && (dn.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (dn.propTypes = {
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
const pn = dn;
function Bd(e) {
  return se("MuiIconButton", e);
}
const Dd = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), Io = Dd, Ld = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: s,
    size: i,
    loading: a
  } = e, c = {
    root: ["root", a && "loading", n && "disabled", o !== "default" && `color${K(o)}`, s && `edge${K(s)}`, `size${K(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return pe(c, Bd, t);
}, Fd = q(Yt, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${K(n.color)}`], n.edge && t[`edge${K(n.edge)}`], t[`size${K(n.size)}`]];
  }
})(he(({
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
})), he(({
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
  [`&.${Io.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Io.loading}`]: {
    color: "transparent"
  }
}))), Vd = q("span", {
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
})), Zs = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    loading: h = null,
    loadingIndicator: g,
    ...y
  } = o, p = fs(m), x = g ?? /* @__PURE__ */ E.jsx(qs, {
    "aria-labelledby": p,
    color: "inherit",
    size: 16
  }), S = {
    ...o,
    edge: s,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    loading: h,
    loadingIndicator: x,
    size: f
  }, R = Ld(S);
  return /* @__PURE__ */ E.jsxs(Fd, {
    id: h ? p : m,
    className: X(R.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l || h,
    ref: n,
    ...y,
    ownerState: S,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ E.jsx("span", {
      className: R.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ E.jsx(Vd, {
        className: R.loadingIndicator,
        ownerState: S,
        children: h && x
      })
    }), i]
  });
});
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: De(r.node, (e) => T.Children.toArray(e.children).some((n) => /* @__PURE__ */ T.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const mr = Zs;
function Ct(e, t, n, o, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = s || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function ei(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: s = !1,
    ...i
  } = e, a = s ? {} : ks(n, o), {
    props: c,
    internalRef: l
  } = As({
    ...i,
    externalSlotProps: a
  }), u = Ee(l, a == null ? void 0 : a.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return Ps(t, {
    ...c,
    ref: u
  }, o);
}
const ti = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (ti.displayName = "ListContext");
const ke = ti;
function zd(e) {
  return se("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const Ud = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: s
  } = e;
  return pe({
    root: ["root", !n && "padding", o && "dense", s && "subheader"]
  }, zd, t);
}, Wd = q("ul", {
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
}), ni = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  } = o, m = T.useMemo(() => ({
    dense: c
  }), [c]), h = {
    ...o,
    component: a,
    dense: c,
    disablePadding: l
  }, g = Ud(h);
  return /* @__PURE__ */ E.jsx(ke.Provider, {
    value: m,
    children: /* @__PURE__ */ E.jsxs(Wd, {
      as: a,
      className: X(g.root, i),
      ref: n,
      ownerState: h,
      ...f,
      children: [u, s]
    })
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
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
const hr = ni;
function ri(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function qn(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function $o(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function oi(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function kt(e, t, n, o, s, i) {
  let a = !1, c = s(e, t, t ? n : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = o ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !oi(c, i) || l)
      c = s(e, c, n);
    else
      return c.focus(), !0;
  }
  return !1;
}
const si = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    ...h
  } = t, g = T.useRef(null), y = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  it(() => {
    s && g.current.focus();
  }, [s]), T.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (O, {
      direction: v
    }) => {
      const C = !g.current.style.width;
      if (O.clientHeight < g.current.clientHeight && C) {
        const k = `${ri(Ve(O))}px`;
        g.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = k, g.current.style.width = `calc(100% + ${k})`;
      }
      return g.current;
    }
  }), []);
  const p = (O) => {
    const v = g.current, C = O.key;
    if (O.ctrlKey || O.metaKey || O.altKey) {
      f && f(O);
      return;
    }
    const M = Be(v).activeElement;
    if (C === "ArrowDown")
      O.preventDefault(), kt(v, M, u, l, qn);
    else if (C === "ArrowUp")
      O.preventDefault(), kt(v, M, u, l, $o);
    else if (C === "Home")
      O.preventDefault(), kt(v, null, u, l, qn);
    else if (C === "End")
      O.preventDefault(), kt(v, null, u, l, $o);
    else if (C.length === 1) {
      const j = y.current, D = C.toLowerCase(), Y = performance.now();
      j.keys.length > 0 && (Y - j.lastTime > 500 ? (j.keys = [], j.repeating = !0, j.previousKeyMatched = !0) : j.repeating && D !== j.keys[0] && (j.repeating = !1)), j.lastTime = Y, j.keys.push(D);
      const z = M && !j.repeating && oi(M, j);
      j.previousKeyMatched && (z || kt(v, M, !1, l, qn, j)) ? O.preventDefault() : j.previousKeyMatched = !1;
    }
    f && f(O);
  }, x = Ee(g, n);
  let S = -1;
  T.Children.forEach(a, (O, v) => {
    if (!/* @__PURE__ */ T.isValidElement(O)) {
      S === v && (S += 1, S >= a.length && (S = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && ot.isFragment(O) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), O.props.disabled || (m === "selectedMenu" && O.props.selected || S === -1) && (S = v), S === v && (O.props.disabled || O.props.muiSkipListHighlight || O.type.muiSkipListHighlight) && (S += 1, S >= a.length && (S = -1));
  });
  const R = T.Children.map(a, (O, v) => {
    if (v === S) {
      const C = {};
      return i && (C.autoFocus = !0), O.props.tabIndex === void 0 && m === "selectedMenu" && (C.tabIndex = 0), /* @__PURE__ */ T.cloneElement(O, C);
    }
    return O;
  });
  return /* @__PURE__ */ E.jsx(hr, {
    role: "menu",
    ref: x,
    className: c,
    onKeyDown: p,
    tabIndex: s ? 0 : -1,
    ...h,
    children: R
  });
});
process.env.NODE_ENV !== "production" && (si.propTypes = {
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
const Gd = si;
function Yd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ii(e, t, n, o, s) {
  const i = e[t], a = s || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !Yd(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ai = De(r.element, ii);
ai.isRequired = De(r.element.isRequired, ii);
const Ht = ai;
function qt(e) {
  var t;
  return parseInt(T.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Ar = (e) => e.scrollTop;
function St(e, t) {
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
function gr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Hd = {
  entering: {
    opacity: 1,
    transform: gr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Kn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), fn = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    onExited: h,
    onExiting: g,
    style: y,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Ir,
    ...S
  } = t, R = Us(), O = T.useRef(), v = Gt(), C = T.useRef(null), k = Ee(C, qt(i), n), M = ($) => (A) => {
    if ($) {
      const G = C.current;
      A === void 0 ? $(G) : $(G, A);
    }
  }, j = M(f), D = M(($, A) => {
    Ar($);
    const {
      duration: G,
      delay: F,
      easing: L
    } = St({
      style: y,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    let I;
    p === "auto" ? (I = v.transitions.getAutoHeightDuration($.clientHeight), O.current = I) : I = G, $.style.transition = [v.transitions.create("opacity", {
      duration: I,
      delay: F
    }), v.transitions.create("transform", {
      duration: Kn ? I : I * 0.666,
      delay: F,
      easing: L
    })].join(","), l && l($, A);
  }), Y = M(u), z = M(g), d = M(($) => {
    const {
      duration: A,
      delay: G,
      easing: F
    } = St({
      style: y,
      timeout: p,
      easing: a
    }, {
      mode: "exit"
    });
    let L;
    p === "auto" ? (L = v.transitions.getAutoHeightDuration($.clientHeight), O.current = L) : L = A, $.style.transition = [v.transitions.create("opacity", {
      duration: L,
      delay: G
    }), v.transitions.create("transform", {
      duration: Kn ? L : L * 0.666,
      delay: Kn ? G : G || L * 0.333,
      easing: F
    })].join(","), $.style.opacity = 0, $.style.transform = gr(0.75), m && m($);
  }), N = M(h), w = ($) => {
    p === "auto" && R.start(O.current || 0, $), o && o(C.current, $);
  };
  return /* @__PURE__ */ E.jsx(x, {
    appear: s,
    in: c,
    nodeRef: C,
    onEnter: D,
    onEntered: Y,
    onEntering: j,
    onExit: d,
    onExited: N,
    onExiting: z,
    addEndListener: w,
    timeout: p === "auto" ? null : p,
    ...S,
    children: ($, {
      ownerState: A,
      ...G
    }) => /* @__PURE__ */ T.cloneElement(i, {
      style: {
        opacity: 0,
        transform: gr(0.75),
        visibility: $ === "exited" && !c ? "hidden" : void 0,
        ...Hd[$],
        ...y,
        ...i.props.style
      },
      ref: k,
      ...G
    })
  });
});
process.env.NODE_ENV !== "production" && (fn.propTypes = {
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
  children: Ht.isRequired,
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
fn && (fn.muiSupportAuto = !0);
const qd = fn;
function Kd(e) {
  const t = Be(e);
  return t.body === e ? Ve(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Dt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Po(e) {
  return parseInt(Ve(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Xd(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function ko(e, t, n, o, s) {
  const i = [t, n, ...o];
  [].forEach.call(e.children, (a) => {
    const c = !i.includes(a), l = !Xd(a);
    c && l && Dt(a, s);
  });
}
function Xn(e, t) {
  let n = -1;
  return e.some((o, s) => t(o) ? (n = s, !0) : !1), n;
}
function Qd(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (Kd(o)) {
      const a = ri(Ve(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Po(o) + a}px`;
      const c = Be(o).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Po(l) + a}px`;
      });
    }
    let i;
    if (o.parentNode instanceof DocumentFragment)
      i = Be(o).body;
    else {
      const a = o.parentElement, c = Ve(o);
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
function Jd(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Zd {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && Dt(t.modalRef, !1);
    const s = Jd(n);
    ko(n, t.mount, t.modalRef, s, !0);
    const i = Xn(this.containers, (a) => a.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: s
    }), o);
  }
  mount(t, n) {
    const o = Xn(this.containers, (i) => i.modals.includes(t)), s = this.containers[o];
    s.restore || (s.restore = Qd(s, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const s = Xn(this.containers, (a) => a.modals.includes(t)), i = this.containers[s];
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
const ep = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function tp(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function np(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function rp(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || np(e));
}
function op(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(ep)).forEach((o, s) => {
    const i = tp(o);
    i === -1 || !rp(o) || (i === 0 ? t.push(o) : n.push({
      documentOrder: s,
      tabIndex: i,
      node: o
    }));
  }), n.sort((o, s) => o.tabIndex === s.tabIndex ? o.documentOrder - s.documentOrder : o.tabIndex - s.tabIndex).map((o) => o.node).concat(t);
}
function sp() {
  return !0;
}
function mn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: s = !1,
    getTabbable: i = op,
    isEnabled: a = sp,
    open: c
  } = e, l = T.useRef(!1), u = T.useRef(null), f = T.useRef(null), m = T.useRef(null), h = T.useRef(null), g = T.useRef(!1), y = T.useRef(null), p = Ee(qt(t), y), x = T.useRef(null);
  T.useEffect(() => {
    !c || !y.current || (g.current = !n);
  }, [n, c]), T.useEffect(() => {
    if (!c || !y.current)
      return;
    const O = Be(y.current);
    return y.current.contains(O.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), g.current && y.current.focus()), () => {
      s || (m.current && m.current.focus && (l.current = !0, m.current.focus()), m.current = null);
    };
  }, [c]), T.useEffect(() => {
    if (!c || !y.current)
      return;
    const O = Be(y.current), v = (M) => {
      x.current = M, !(o || !a() || M.key !== "Tab") && O.activeElement === y.current && M.shiftKey && (l.current = !0, f.current && f.current.focus());
    }, C = () => {
      var D, Y;
      const M = y.current;
      if (M === null)
        return;
      if (!O.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (M.contains(O.activeElement) || o && O.activeElement !== u.current && O.activeElement !== f.current)
        return;
      if (O.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let j = [];
      if ((O.activeElement === u.current || O.activeElement === f.current) && (j = i(y.current)), j.length > 0) {
        const z = !!((D = x.current) != null && D.shiftKey && ((Y = x.current) == null ? void 0 : Y.key) === "Tab"), d = j[0], N = j[j.length - 1];
        typeof d != "string" && typeof N != "string" && (z ? N.focus() : d.focus());
      } else
        M.focus();
    };
    O.addEventListener("focusin", C), O.addEventListener("keydown", v, !0);
    const k = setInterval(() => {
      O.activeElement && O.activeElement.tagName === "BODY" && C();
    }, 50);
    return () => {
      clearInterval(k), O.removeEventListener("focusin", C), O.removeEventListener("keydown", v, !0);
    };
  }, [n, o, s, a, c, i]);
  const S = (O) => {
    m.current === null && (m.current = O.relatedTarget), g.current = !0, h.current = O.target;
    const v = t.props.onFocus;
    v && v(O);
  }, R = (O) => {
    m.current === null && (m.current = O.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ E.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ E.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: R,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: p,
      onFocus: S
    }), /* @__PURE__ */ E.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: R,
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
  children: Ht,
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
process.env.NODE_ENV !== "production" && (mn["propTypes"] = ds(mn.propTypes));
function ip(e) {
  return typeof e == "function" ? e() : e;
}
const hn = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    children: o,
    container: s,
    disablePortal: i = !1
  } = t, [a, c] = T.useState(null), l = Ee(/* @__PURE__ */ T.isValidElement(o) ? qt(o) : null, n);
  if (it(() => {
    i || c(ip(s) || document.body);
  }, [s, i]), it(() => {
    if (a && !i)
      return bo(n, a), () => {
        bo(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ T.isValidElement(o)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ T.cloneElement(o, u);
    }
    return o;
  }
  return a && /* @__PURE__ */ Gi.createPortal(o, a);
});
process.env.NODE_ENV !== "production" && (hn.propTypes = {
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
  container: r.oneOfType([Ct, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool
});
process.env.NODE_ENV !== "production" && (hn["propTypes"] = ds(hn.propTypes));
const ap = hn, cp = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, ci = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = Gt(), s = {
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
    onEntering: h,
    onExit: g,
    onExited: y,
    onExiting: p,
    style: x,
    timeout: S = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = Ir,
    ...O
  } = t, v = T.useRef(null), C = Ee(v, qt(c), n), k = (w) => ($) => {
    if (w) {
      const A = v.current;
      $ === void 0 ? w(A) : w(A, $);
    }
  }, M = k(h), j = k((w, $) => {
    Ar(w);
    const A = St({
      style: x,
      timeout: S,
      easing: l
    }, {
      mode: "enter"
    });
    w.style.webkitTransition = o.transitions.create("opacity", A), w.style.transition = o.transitions.create("opacity", A), f && f(w, $);
  }), D = k(m), Y = k(p), z = k((w) => {
    const $ = St({
      style: x,
      timeout: S,
      easing: l
    }, {
      mode: "exit"
    });
    w.style.webkitTransition = o.transitions.create("opacity", $), w.style.transition = o.transitions.create("opacity", $), g && g(w);
  }), d = k(y), N = (w) => {
    i && i(v.current, w);
  };
  return /* @__PURE__ */ E.jsx(R, {
    appear: a,
    in: u,
    nodeRef: v,
    onEnter: j,
    onEntered: D,
    onEntering: M,
    onExit: z,
    onExited: d,
    onExiting: Y,
    addEndListener: N,
    timeout: S,
    ...O,
    children: (w, {
      ownerState: $,
      ...A
    }) => /* @__PURE__ */ T.cloneElement(c, {
      style: {
        opacity: 0,
        visibility: w === "exited" && !u ? "hidden" : void 0,
        ...cp[w],
        ...x,
        ...c.props.style
      },
      ref: C,
      ...A
    })
  });
});
process.env.NODE_ENV !== "production" && (ci.propTypes = {
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
  children: Ht.isRequired,
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
const lp = ci;
function up(e) {
  return se("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const dp = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return pe({
    root: ["root", n && "invisible"]
  }, up, t);
}, pp = q("div", {
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
}), li = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    slots: h = {},
    TransitionComponent: g,
    transitionDuration: y,
    ...p
  } = o, x = {
    ...o,
    component: a,
    invisible: c
  }, S = dp(x), R = {
    transition: g,
    root: u.Root,
    ...h
  }, O = {
    ...f,
    ...m
  }, v = {
    component: a,
    slots: R,
    slotProps: O
  }, [C, k] = be("root", {
    elementType: pp,
    externalForwardedProps: v,
    className: X(S.root, i),
    ownerState: x
  }), [M, j] = be("transition", {
    elementType: lp,
    externalForwardedProps: v,
    ownerState: x
  });
  return /* @__PURE__ */ E.jsx(M, {
    in: l,
    timeout: y,
    ...p,
    ...j,
    children: /* @__PURE__ */ E.jsx(C, {
      "aria-hidden": !0,
      ...k,
      classes: S,
      ref: n,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
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
const fp = li;
function mp(e) {
  return typeof e == "function" ? e() : e;
}
function hp(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const No = () => {
}, Zt = new Zd();
function gp(e) {
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
  } = e, m = T.useRef({}), h = T.useRef(null), g = T.useRef(null), y = Ee(g, f), [p, x] = T.useState(!u), S = hp(c);
  let R = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (R = !1);
  const O = () => Be(h.current), v = () => (m.current.modalRef = g.current, m.current.mount = h.current, m.current), C = () => {
    Zt.mount(v(), {
      disableScrollLock: o
    }), g.current && (g.current.scrollTop = 0);
  }, k = xt(() => {
    const $ = mp(t) || O().body;
    Zt.add(v(), $), g.current && C();
  }), M = () => Zt.isTopModal(v()), j = xt(($) => {
    h.current = $, $ && (u && M() ? C() : g.current && Dt(g.current, R));
  }), D = T.useCallback(() => {
    Zt.remove(v(), R);
  }, [R]);
  T.useEffect(() => () => {
    D();
  }, [D]), T.useEffect(() => {
    u ? k() : (!S || !s) && D();
  }, [u, D, S, s, k]);
  const Y = ($) => (A) => {
    var G;
    (G = $.onKeyDown) == null || G.call($, A), !(A.key !== "Escape" || A.which === 229 || // Wait until IME is settled.
    !M()) && (n || (A.stopPropagation(), l && l(A, "escapeKeyDown")));
  }, z = ($) => (A) => {
    var G;
    (G = $.onClick) == null || G.call($, A), A.target === A.currentTarget && l && l(A, "backdropClick");
  };
  return {
    getRootProps: ($ = {}) => {
      const A = Ns(e);
      delete A.onTransitionEnter, delete A.onTransitionExited;
      const G = {
        ...A,
        ...$
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...G,
        onKeyDown: Y(G),
        ref: y
      };
    },
    getBackdropProps: ($ = {}) => {
      const A = $;
      return {
        "aria-hidden": !0,
        ...A,
        onClick: z(A),
        open: u
      };
    },
    getTransitionProps: () => {
      const $ = () => {
        x(!1), i && i();
      }, A = () => {
        x(!0), a && a(), s && D();
      };
      return {
        onEnter: Dr($, (c == null ? void 0 : c.props.onEnter) ?? No),
        onExited: Dr(A, (c == null ? void 0 : c.props.onExited) ?? No)
      };
    },
    rootRef: y,
    portalRef: j,
    isTopModal: M,
    exited: p,
    hasTransition: S
  };
}
function yp(e) {
  return se("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const bp = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return pe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, yp, o);
}, vp = q("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(he(({
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
}))), xp = q(fp, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), ui = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = le({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: s = xp,
    BackdropProps: i,
    classes: a,
    className: c,
    closeAfterTransition: l = !1,
    children: u,
    container: f,
    component: m,
    components: h = {},
    componentsProps: g = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: p = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: S = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: O = !1,
    hideBackdrop: v = !1,
    keepMounted: C = !1,
    onClose: k,
    onTransitionEnter: M,
    onTransitionExited: j,
    open: D,
    slotProps: Y = {},
    slots: z = {},
    // eslint-disable-next-line react/prop-types
    theme: d,
    ...N
  } = o, w = {
    ...o,
    closeAfterTransition: l,
    disableAutoFocus: y,
    disableEnforceFocus: p,
    disableEscapeKeyDown: x,
    disablePortal: S,
    disableRestoreFocus: R,
    disableScrollLock: O,
    hideBackdrop: v,
    keepMounted: C
  }, {
    getRootProps: $,
    getBackdropProps: A,
    getTransitionProps: G,
    portalRef: F,
    isTopModal: L,
    exited: I,
    hasTransition: b
  } = gp({
    ...w,
    rootRef: n
  }), _ = {
    ...w,
    exited: I
  }, V = bp(_), U = {};
  if (u.props.tabIndex === void 0 && (U.tabIndex = "-1"), b) {
    const {
      onEnter: W,
      onExited: ee
    } = G();
    U.onEnter = W, U.onExited = ee;
  }
  const Z = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...z
    },
    slotProps: {
      ...g,
      ...Y
    }
  }, [Q, H] = be("root", {
    ref: n,
    elementType: vp,
    externalForwardedProps: {
      ...Z,
      ...N,
      component: m
    },
    getSlotProps: $,
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
  return !C && !D && (!b || I) ? null : /* @__PURE__ */ E.jsx(ap, {
    ref: F,
    container: f,
    disablePortal: S,
    children: /* @__PURE__ */ E.jsxs(Q, {
      ...H,
      children: [!v && s ? /* @__PURE__ */ E.jsx(J, {
        ...te
      }) : null, /* @__PURE__ */ E.jsx(mn, {
        disableEnforceFocus: p,
        disableAutoFocus: y,
        disableRestoreFocus: R,
        isEnabled: L,
        open: D,
        children: /* @__PURE__ */ T.cloneElement(u, U)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (ui.propTypes = {
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
  children: Ht.isRequired,
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
  container: r.oneOfType([Ct, r.func]),
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
const di = ui;
function Tp(e) {
  return se("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function Ao(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Mo(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function jo(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function _t(e) {
  return typeof e == "function" ? e() : e;
}
const Ep = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"]
  }, Tp, t);
}, Cp = q(di, {
  name: "MuiPopover",
  slot: "Root"
})({}), pi = q(kn, {
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
}), fi = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    elevation: h = 8,
    marginThreshold: g = 16,
    open: y,
    PaperProps: p = {},
    // TODO: remove in v7
    slots: x = {},
    slotProps: S = {},
    transformOrigin: R = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: O,
    // TODO: remove in v7
    transitionDuration: v = "auto",
    TransitionProps: C = {},
    // TODO: remove in v7
    disableScrollLock: k = !1,
    ...M
  } = o, j = T.useRef(), D = {
    ...o,
    anchorOrigin: a,
    anchorReference: l,
    elevation: h,
    marginThreshold: g,
    transformOrigin: R,
    TransitionComponent: O,
    transitionDuration: v,
    TransitionProps: C
  }, Y = Ep(D), z = T.useCallback(() => {
    if (l === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (c || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), c;
    const W = _t(i), ee = W && W.nodeType === 1 ? W : Be(j.current).body, B = ee.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const me = ee.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && me.top === 0 && me.left === 0 && me.right === 0 && me.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: B.top + Ao(B, a.vertical),
      left: B.left + Mo(B, a.horizontal)
    };
  }, [i, a.horizontal, a.vertical, c, l]), d = T.useCallback((W) => ({
    vertical: Ao(W, R.vertical),
    horizontal: Mo(W, R.horizontal)
  }), [R.horizontal, R.vertical]), N = T.useCallback((W) => {
    const ee = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, B = d(ee);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: jo(B)
      };
    const me = z();
    let xe = me.top - B.vertical, Ie = me.left - B.horizontal;
    const Kt = xe + ee.height, Ke = Ie + ee.width, Ue = Ve(_t(i)), Xe = Ue.innerHeight - g, wt = Ue.innerWidth - g;
    if (g !== null && xe < g) {
      const Ce = xe - g;
      xe -= Ce, B.vertical += Ce;
    } else if (g !== null && Kt > Xe) {
      const Ce = Kt - Xe;
      xe -= Ce, B.vertical += Ce;
    }
    if (process.env.NODE_ENV !== "production" && ee.height > Xe && ee.height && Xe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ee.height - Xe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && Ie < g) {
      const Ce = Ie - g;
      Ie -= Ce, B.horizontal += Ce;
    } else if (Ke > wt) {
      const Ce = Ke - wt;
      Ie -= Ce, B.horizontal += Ce;
    }
    return {
      top: `${Math.round(xe)}px`,
      left: `${Math.round(Ie)}px`,
      transformOrigin: jo(B)
    };
  }, [i, l, z, d, g]), [w, $] = T.useState(y), A = T.useCallback(() => {
    const W = j.current;
    if (!W)
      return;
    const ee = N(W);
    ee.top !== null && W.style.setProperty("top", ee.top), ee.left !== null && (W.style.left = ee.left), W.style.transformOrigin = ee.transformOrigin, $(!0);
  }, [N]);
  T.useEffect(() => (k && window.addEventListener("scroll", A), () => window.removeEventListener("scroll", A)), [i, k, A]);
  const G = () => {
    A();
  }, F = () => {
    $(!1);
  };
  T.useEffect(() => {
    y && A();
  }), T.useImperativeHandle(s, () => y ? {
    updatePosition: () => {
      A();
    }
  } : null, [y, A]), T.useEffect(() => {
    if (!y)
      return;
    const W = Cs(() => {
      A();
    }), ee = Ve(_t(i));
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
    elementType: qd,
    externalForwardedProps: I,
    ownerState: D,
    getSlotProps: (W) => ({
      ...W,
      onEntering: (ee, B) => {
        var me;
        (me = W.onEntering) == null || me.call(W, ee, B), G();
      },
      onExited: (ee) => {
        var B;
        (B = W.onExited) == null || B.call(W, ee), F();
      }
    }),
    additionalProps: {
      appear: !0,
      in: y
    }
  });
  v === "auto" && !b.muiSupportAuto && (L = void 0);
  const V = m || (i ? Be(_t(i)).body : void 0), [U, {
    slots: Z,
    slotProps: Q,
    ...H
  }] = be("root", {
    ref: n,
    elementType: Cp,
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
        backdrop: Ss(typeof S.backdrop == "function" ? S.backdrop(D) : S.backdrop, {
          invisible: !0
        })
      },
      container: V,
      open: y
    },
    ownerState: D,
    className: X(Y.root, f)
  }), [J, te] = be("paper", {
    ref: j,
    className: Y.paper,
    elementType: pi,
    externalForwardedProps: I,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: h,
      style: w ? void 0 : {
        opacity: 0
      }
    },
    ownerState: D
  });
  return /* @__PURE__ */ E.jsx(U, {
    ...H,
    ...!cn(U) && {
      slots: Z,
      slotProps: Q,
      disableScrollLock: k
    },
    children: /* @__PURE__ */ E.jsx(b, {
      ..._,
      timeout: L,
      children: /* @__PURE__ */ E.jsx(J, {
        ...te,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (fi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Ls,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: De(r.oneOfType([Ct, r.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = _t(e.anchorEl);
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
  container: r.oneOfType([Ct, r.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Tt,
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
    component: Rr
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
const Sp = fi;
function Op(e) {
  return se("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const wp = {
  vertical: "top",
  horizontal: "right"
}, Rp = {
  vertical: "top",
  horizontal: "left"
}, Ip = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Op, t);
}, $p = q(Sp, {
  shouldForwardProp: (e) => Ot(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), Pp = q(pi, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), kp = q(Gd, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), mi = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    PopoverClasses: h,
    transitionDuration: g = "auto",
    TransitionProps: {
      onEntering: y,
      ...p
    } = {},
    variant: x = "selectedMenu",
    slots: S = {},
    slotProps: R = {},
    ...O
  } = o, v = ps(), C = {
    ...o,
    autoFocus: s,
    disableAutoFocusItem: c,
    MenuListProps: l,
    onEntering: y,
    PaperProps: m,
    transitionDuration: g,
    TransitionProps: p,
    variant: x
  }, k = Ip(C), M = s && !c && f, j = T.useRef(null), D = (L, I) => {
    j.current && j.current.adjustStyleForScrollbar(L, {
      direction: v ? "rtl" : "ltr"
    }), y && y(L, I);
  }, Y = (L) => {
    L.key === "Tab" && (L.preventDefault(), u && u(L, "tabKeyDown"));
  };
  let z = -1;
  T.Children.map(i, (L, I) => {
    /* @__PURE__ */ T.isValidElement(L) && (process.env.NODE_ENV !== "production" && ot.isFragment(L) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), L.props.disabled || (x === "selectedMenu" && L.props.selected || z === -1) && (z = I));
  });
  const d = {
    slots: S,
    slotProps: {
      list: l,
      transition: p,
      paper: m,
      ...R
    }
  }, N = ei({
    elementType: S.root,
    externalSlotProps: R.root,
    ownerState: C,
    className: [k.root, a]
  }), [w, $] = be("paper", {
    className: k.paper,
    elementType: Pp,
    externalForwardedProps: d,
    shouldForwardComponentProp: !0,
    ownerState: C
  }), [A, G] = be("list", {
    className: X(k.list, l.className),
    elementType: kp,
    shouldForwardComponentProp: !0,
    externalForwardedProps: d,
    getSlotProps: (L) => ({
      ...L,
      onKeyDown: (I) => {
        var b;
        Y(I), (b = L.onKeyDown) == null || b.call(L, I);
      }
    }),
    ownerState: C
  }), F = typeof d.slotProps.transition == "function" ? d.slotProps.transition(C) : d.slotProps.transition;
  return /* @__PURE__ */ E.jsx($p, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: v ? "right" : "left"
    },
    transformOrigin: v ? wp : Rp,
    slots: {
      root: S.root,
      paper: w,
      backdrop: S.backdrop,
      ...S.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: S.transition
      }
    },
    slotProps: {
      root: N,
      paper: $,
      backdrop: typeof R.backdrop == "function" ? R.backdrop(C) : R.backdrop,
      transition: {
        ...F,
        onEntering: (...L) => {
          var I;
          D(...L), (I = F == null ? void 0 : F.onEntering) == null || I.call(F, ...L);
        }
      }
    },
    open: f,
    ref: n,
    transitionDuration: g,
    ownerState: C,
    ...O,
    classes: h,
    children: /* @__PURE__ */ E.jsx(A, {
      actions: j,
      autoFocus: s && (z === -1 || c),
      autoFocusItem: M,
      variant: x,
      ...G,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (mi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: r.oneOfType([Ct, r.func]),
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
const Np = mi;
function Ap(e) {
  return se("MuiListItemIcon", e);
}
const Mp = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), _o = Mp, jp = (e) => {
  const {
    alignItems: t,
    classes: n
  } = e;
  return pe({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, Ap, n);
}, _p = q("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(he(({
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
}))), hi = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: s,
    ...i
  } = o, a = T.useContext(ke), c = {
    ...o,
    alignItems: a.alignItems
  }, l = jp(c);
  return /* @__PURE__ */ E.jsx(_p, {
    className: X(l.root, s),
    ownerState: c,
    ref: n,
    ...i
  });
});
process.env.NODE_ENV !== "production" && (hi.propTypes = {
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
const Bo = hi;
function Bp(e) {
  return se("MuiTypography", e);
}
const Dp = ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), Do = Dp, Lp = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Fp = iu(), Vp = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: s,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, e.align !== "inherit" && `align${K(t)}`, n && "gutterBottom", o && "noWrap", s && "paragraph"]
  };
  return pe(c, Bp, a);
}, zp = q("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${K(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(he(({
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
        color: `text${K(n)}`
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
})), Lo = {
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
}, gi = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    color: o,
    ...s
  } = le({
    props: t,
    name: "MuiTypography"
  }), i = !Lp[o], a = Fp({
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
    paragraph: h = !1,
    variant: g = "body1",
    variantMapping: y = Lo,
    ...p
  } = a, x = {
    ...a,
    align: c,
    color: o,
    className: l,
    component: u,
    gutterBottom: f,
    noWrap: m,
    paragraph: h,
    variant: g,
    variantMapping: y
  }, S = u || (h ? "p" : y[g] || Lo[g]) || "span", R = Vp(x);
  return /* @__PURE__ */ E.jsx(zp, {
    as: S,
    ref: n,
    className: X(R.root, l),
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
process.env.NODE_ENV !== "production" && (gi.propTypes = {
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
const Pe = gi;
function Up(e) {
  return se("MuiListItemText", e);
}
const Wp = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), bt = Wp, Gp = (e) => {
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
  }, Up, t);
}, Yp = q("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${bt.primary}`]: t.primary
    }, {
      [`& .${bt.secondary}`]: t.secondary
    }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${Do.root}:where(& .${bt.primary})`]: {
    display: "block"
  },
  [`.${Do.root}:where(& .${bt.secondary})`]: {
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
}), yi = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    slots: h = {},
    slotProps: g = {},
    ...y
  } = o, {
    dense: p
  } = T.useContext(ke);
  let x = l ?? s, S = f;
  const R = {
    ...o,
    disableTypography: a,
    inset: c,
    primary: !!x,
    secondary: !!S,
    dense: p
  }, O = Gp(R), v = {
    slots: h,
    slotProps: {
      primary: u,
      secondary: m,
      ...g
    }
  }, [C, k] = be("root", {
    className: X(O.root, i),
    elementType: Yp,
    externalForwardedProps: {
      ...v,
      ...y
    },
    ownerState: R,
    ref: n
  }), [M, j] = be("primary", {
    className: O.primary,
    elementType: Pe,
    externalForwardedProps: v,
    ownerState: R
  }), [D, Y] = be("secondary", {
    className: O.secondary,
    elementType: Pe,
    externalForwardedProps: v,
    ownerState: R
  });
  return x != null && x.type !== Pe && !a && (x = /* @__PURE__ */ E.jsx(M, {
    variant: p ? "body2" : "body1",
    component: j != null && j.variant ? void 0 : "span",
    ...j,
    children: x
  })), S != null && S.type !== Pe && !a && (S = /* @__PURE__ */ E.jsx(D, {
    variant: "body2",
    color: "textSecondary",
    ...Y,
    children: S
  })), /* @__PURE__ */ E.jsxs(C, {
    ...k,
    children: [x, S]
  });
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
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
const Fo = yi;
function Hp(e) {
  return se("MuiMenuItem", e);
}
const qp = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Nt = qp, Kp = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Xp = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: o,
    disableGutters: s,
    selected: i,
    classes: a
  } = e, l = pe({
    root: ["root", n && "dense", t && "disabled", !s && "gutters", o && "divider", i && "selected"]
  }, Hp, a);
  return {
    ...a,
    ...l
  };
}, Qp = q(Yt, {
  shouldForwardProp: (e) => Ot(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Kp
})(he(({
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
  [`& + .${Ro.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Ro.inset}`]: {
    marginLeft: 52
  },
  [`& .${bt.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${bt.inset}`]: {
    paddingLeft: 36
  },
  [`& .${_o.root}`]: {
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
      [`& .${_o.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), bi = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    className: h,
    ...g
  } = o, y = T.useContext(ke), p = T.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: l
  }), [y.dense, a, l]), x = T.useRef(null);
  it(() => {
    s && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [s]);
  const S = {
    ...o,
    dense: p.dense,
    divider: c,
    disableGutters: l
  }, R = Xp(o), O = Ee(x, n);
  let v;
  return o.disabled || (v = m !== void 0 ? m : -1), /* @__PURE__ */ E.jsx(ke.Provider, {
    value: p,
    children: /* @__PURE__ */ E.jsx(Qp, {
      ref: O,
      role: f,
      tabIndex: v,
      component: i,
      focusVisibleClassName: X(R.focusVisible, u),
      className: X(R.root, h),
      ...g,
      ownerState: S,
      classes: R
    })
  });
});
process.env.NODE_ENV !== "production" && (bi.propTypes = {
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
const Vo = bi, vi = dl({
  createStyledComponent: q("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => le({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (vi.propTypes = {
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
const Ge = vi;
function Jp(e) {
  return se("MuiToolbar", e);
}
ce("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const Zp = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: o
  } = e;
  return pe({
    root: ["root", !n && "gutters", o]
  }, Jp, t);
}, ef = q("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(he(({
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
}))), xi = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, f = Zp(u);
  return /* @__PURE__ */ E.jsx(ef, {
    as: i,
    className: X(f.root, s),
    ref: n,
    ownerState: u,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (xi.propTypes = {
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
const tf = xi, nf = zc({
  themeId: Pn
}), rf = nf, of = ct(/* @__PURE__ */ E.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz"), sf = q(Yt, {
  name: "MuiBreadcrumbCollapsed"
})(he(({
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
      backgroundColor: nr(e.palette.grey[200], 0.12)
    } : {
      backgroundColor: nr(e.palette.grey[600], 0.12)
    }
  }
}))), af = q(of)({
  width: 24,
  height: 16
});
function Ti(e) {
  const {
    slots: t = {},
    slotProps: n = {},
    ...o
  } = e, s = e;
  return /* @__PURE__ */ E.jsx("li", {
    children: /* @__PURE__ */ E.jsx(sf, {
      focusRipple: !0,
      ...o,
      ownerState: s,
      children: /* @__PURE__ */ E.jsx(af, {
        as: t.CollapsedIcon,
        ownerState: s,
        ...n.collapsedIcon
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
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
function cf(e) {
  return se("MuiBreadcrumbs", e);
}
const lf = ce("MuiBreadcrumbs", ["root", "ol", "li", "separator"]), yr = lf, uf = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  }, cf, t);
}, df = q(Pe, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${yr.li}`]: t.li
  }, t.root]
})({}), pf = q("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol"
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
}), ff = q("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator"
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function mf(e, t, n, o) {
  return e.reduce((s, i, a) => (a < e.length - 1 ? s = s.concat(i, /* @__PURE__ */ E.jsx(ff, {
    "aria-hidden": !0,
    className: t,
    ownerState: o,
    children: n
  }, `separator-${a}`)) : s.push(i), s), []);
}
const Ei = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    maxItems: h = 8,
    separator: g = "/",
    ...y
  } = o, [p, x] = T.useState(!1), S = {
    ...o,
    component: a,
    expanded: p,
    expandText: u,
    itemsAfterCollapse: f,
    itemsBeforeCollapse: m,
    maxItems: h,
    separator: g
  }, R = uf(S), O = ei({
    elementType: c.CollapsedIcon,
    externalSlotProps: l.collapsedIcon,
    ownerState: S
  }), v = T.useRef(null), C = (M) => {
    const j = () => {
      x(!0);
      const D = v.current.querySelector("a[href],button,[tabindex]");
      D && D.focus();
    };
    return m + f >= M.length ? (process.env.NODE_ENV !== "production" && console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.", `itemsAfterCollapse={${f}} + itemsBeforeCollapse={${m}} >= maxItems={${h}}`].join(`
`)), M) : [...M.slice(0, m), /* @__PURE__ */ E.jsx(Ti, {
      "aria-label": u,
      slots: {
        CollapsedIcon: c.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: O
      },
      onClick: j
    }, "ellipsis"), ...M.slice(M.length - f, M.length)];
  }, k = T.Children.toArray(s).filter((M) => (process.env.NODE_ENV !== "production" && ot.isFragment(M) && console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ T.isValidElement(M))).map((M, j) => /* @__PURE__ */ E.jsx("li", {
    className: R.li,
    children: M
  }, `child-${j}`));
  return /* @__PURE__ */ E.jsx(df, {
    ref: n,
    component: a,
    color: "textSecondary",
    className: X(R.root, i),
    ownerState: S,
    ...y,
    children: /* @__PURE__ */ E.jsx(pf, {
      className: R.ol,
      ref: v,
      ownerState: S,
      children: mf(p || h && k.length <= h ? k : C(k), R.separator, g, S)
    })
  });
});
process.env.NODE_ENV !== "production" && (Ei.propTypes = {
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
  itemsAfterCollapse: Tt,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: Tt,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: Tt,
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
const hf = Ei, gf = q(hf)(({ theme: e }) => ({
  margin: e.spacing(1, 0),
  [`& .${yr.separator}`]: {
    color: (e.vars || e).palette.action.disabled,
    margin: 1
  },
  [`& .${yr.ol}`]: {
    alignItems: "center"
  }
})), Ci = ({
  appName: e = "Dashboard",
  pageName: t = "Home"
}) => /* @__PURE__ */ E.jsx(gf, { "aria-label": "breadcrumb", children: /* @__PURE__ */ E.jsx(
  Pe,
  {
    variant: "body1",
    sx: {
      fontWeight: 600,
      fontSize: (n) => n.typography.pxToRem(24),
      color: "#01584f"
    },
    children: e
  }
) }), yf = q(tf)({
  width: "100%",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "8px",
  flexShrink: 0
}), bf = ({
  appName: e = "Dashboard",
  pageName: t = "Home",
  onMenuClick: n,
  showMenuButton: o = !0,
  headerStyles: s,
  userName: i = "User Name",
  userEmail: a,
  userAvatar: c,
  onProfileClick: l,
  onLogout: u,
  showNotifications: f = !1,
  notificationCount: m = 0
}) => {
  const h = rf((R) => R.breakpoints.up("md")), [g, y] = T.useState(null), p = !!g, x = (R) => {
    y(R.currentTarget);
  }, S = () => {
    y(null);
  };
  return /* @__PURE__ */ E.jsx(
    Cu,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: "#ffffff",
        backgroundImage: "none",
        top: "var(--template-frame-height, 0px)",
        left: { xs: 0, md: "240px" },
        // Full width on mobile, right of sidebar on desktop
        width: { xs: "100%", md: "calc(100% - 240px)" },
        // Full width on mobile, excluding sidebar on desktop
        zIndex: 1,
        // Lower z-index so sidebar appears above,
        height: "100px",
        ...s
      },
      children: /* @__PURE__ */ E.jsx(yf, { variant: "dense", sx: { height: "100%" }, children: /* @__PURE__ */ E.jsxs(
        Ge,
        {
          direction: "row",
          sx: {
            alignItems: "center",
            flexGrow: 1,
            width: "100%",
            gap: 1
          },
          children: [
            !h && /* @__PURE__ */ E.jsx(Hn, { sx: { mr: "auto" }, children: /* @__PURE__ */ E.jsx(
              Ci,
              {
                appName: e,
                pageName: t
              }
            ) }),
            o && /* @__PURE__ */ E.jsx(
              mr,
              {
                "aria-label": "menu",
                onClick: n,
                sx: {
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "action.hover"
                  }
                },
                children: /* @__PURE__ */ E.jsx(pu, {})
              }
            ),
            h && /* @__PURE__ */ E.jsxs(
              Ge,
              {
                direction: "row",
                sx: { ml: "auto", alignItems: "center", gap: 1.5 },
                children: [
                  f && /* @__PURE__ */ E.jsx(
                    Bs,
                    {
                      color: "error",
                      variant: "dot",
                      invisible: m === 0,
                      sx: {
                        "& .MuiBadge-badge": {
                          right: 2,
                          top: 2
                        }
                      },
                      children: /* @__PURE__ */ E.jsx(
                        mr,
                        {
                          size: "small",
                          sx: { color: "text.secondary" },
                          children: /* @__PURE__ */ E.jsx(Os, {})
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ E.jsx(
                    Nr,
                    {
                      onClick: x,
                      startIcon: c ? /* @__PURE__ */ E.jsx(
                        ar,
                        {
                          src: c,
                          sx: { width: 24, height: 24 }
                        }
                      ) : /* @__PURE__ */ E.jsx(vo, {}),
                      sx: {
                        textTransform: "none",
                        color: "text.primary"
                      },
                      children: "Profile"
                    }
                  ),
                  /* @__PURE__ */ E.jsxs(
                    Np,
                    {
                      anchorEl: g,
                      open: p,
                      onClose: S,
                      transformOrigin: {
                        horizontal: "right",
                        vertical: "top"
                      },
                      anchorOrigin: {
                        horizontal: "right",
                        vertical: "bottom"
                      },
                      sx: {
                        "& .MuiList-root": { padding: "4px" },
                        "& .MuiPaper-root": { padding: 0 }
                      },
                      children: [
                        /* @__PURE__ */ E.jsxs(
                          Hn,
                          {
                            sx: {
                              p: 1.5,
                              display: "flex",
                              gap: 1,
                              alignItems: "center"
                            },
                            children: [
                              c ? /* @__PURE__ */ E.jsx(
                                ar,
                                {
                                  src: c,
                                  sx: { width: 32, height: 32 }
                                }
                              ) : /* @__PURE__ */ E.jsx(vo, {}),
                              /* @__PURE__ */ E.jsxs(Hn, { sx: { minWidth: 0 }, children: [
                                /* @__PURE__ */ E.jsx(
                                  Pe,
                                  {
                                    variant: "body2",
                                    sx: {
                                      fontWeight: 600,
                                      lineHeight: "18px",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap"
                                    },
                                    children: i
                                  }
                                ),
                                a && /* @__PURE__ */ E.jsx(
                                  Pe,
                                  {
                                    variant: "caption",
                                    sx: {
                                      color: "text.secondary",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap",
                                      display: "block"
                                    },
                                    children: a
                                  }
                                )
                              ] })
                            ]
                          }
                        ),
                        /* @__PURE__ */ E.jsx(pn, {}),
                        /* @__PURE__ */ E.jsx(
                          Vo,
                          {
                            onClick: () => {
                              S(), l == null || l();
                            },
                            children: "Profile"
                          }
                        ),
                        /* @__PURE__ */ E.jsx(pn, {}),
                        /* @__PURE__ */ E.jsx(
                          Vo,
                          {
                            onClick: () => {
                              S(), u == null || u();
                            },
                            children: "Logout"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      ) })
    }
  );
};
function vf(e) {
  return se("MuiCard", e);
}
ce("MuiCard", ["root"]);
const xf = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, vf, t);
}, Tf = q(kn, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Si = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, l = xf(c);
  return /* @__PURE__ */ E.jsx(Tf, {
    className: X(l.root, s),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: c,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Si.propTypes = {
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
  raised: De(r.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Ef = Si;
function Cf(e) {
  return se("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const Sf = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, Cf, t);
}, Of = q("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Oi = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
  }, l = Sf(c);
  return /* @__PURE__ */ E.jsx(Of, {
    as: i,
    className: X(l.root, s),
    ownerState: c,
    ref: n,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Oi.propTypes = {
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
const wf = Oi, Rf = ct(/* @__PURE__ */ E.jsx("path", {
  d: "m19.46 8 .79-1.75L22 5.46c.39-.18.39-.73 0-.91l-1.75-.79L19.46 2c-.18-.39-.73-.39-.91 0l-.79 1.75-1.76.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0M11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5-.79 1.75-1.75.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.73.39.91 0l.79-1.75 1.76-.79c.39-.18.39-.73 0-.91l-1.75-.79-.79-1.76c-.18-.39-.74-.39-.92 0"
}), "AutoAwesomeRounded"), wi = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: o,
  show: s = !0
}) => s ? /* @__PURE__ */ E.jsx(Ef, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ E.jsxs(wf, { children: [
  /* @__PURE__ */ E.jsx(Rf, { fontSize: "small" }),
  /* @__PURE__ */ E.jsx(Pe, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ E.jsx(
    Pe,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: t
    }
  ),
  /* @__PURE__ */ E.jsx(
    Nr,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: o,
      children: n
    }
  )
] }) }) : null;
function If(e) {
  return se("MuiListItem", e);
}
ce("MuiListItem", ["root", "container", "dense", "alignItemsFlexStart", "divider", "gutters", "padding", "secondaryAction"]);
function $f(e) {
  return se("MuiListItemButton", e);
}
const Pf = ce("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), yt = Pf, kf = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Nf = (e) => {
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
  }, $f, n);
  return {
    ...n,
    ...u
  };
}, Af = q(Yt, {
  shouldForwardProp: (e) => Ot(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: kf
})(he(({
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
  [`&.${yt.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${yt.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${yt.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${yt.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${yt.disabled}`]: {
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
}))), Ri = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    selected: h = !1,
    className: g,
    ...y
  } = o, p = T.useContext(ke), x = T.useMemo(() => ({
    dense: l || p.dense || !1,
    alignItems: s,
    disableGutters: u
  }), [s, p.dense, l, u]), S = T.useRef(null);
  it(() => {
    i && (S.current ? S.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [i]);
  const R = {
    ...o,
    alignItems: s,
    dense: x.dense,
    disableGutters: u,
    divider: f,
    selected: h
  }, O = Nf(R), v = Ee(S, n);
  return /* @__PURE__ */ E.jsx(ke.Provider, {
    value: x,
    children: /* @__PURE__ */ E.jsx(Af, {
      ref: v,
      href: y.href || y.to,
      component: (y.href || y.to) && a === "div" ? "button" : a,
      focusVisibleClassName: X(O.focusVisible, m),
      ownerState: R,
      className: X(O.root, g),
      ...y,
      classes: O,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
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
const zo = Ri;
function Mf(e) {
  return se("MuiListItemSecondaryAction", e);
}
ce("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const jf = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return pe({
    root: ["root", t && "disableGutters"]
  }, Mf, n);
}, _f = q("div", {
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
}), Mr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: s,
    ...i
  } = o, a = T.useContext(ke), c = {
    ...o,
    disableGutters: a.disableGutters
  }, l = jf(c);
  return /* @__PURE__ */ E.jsx(_f, {
    className: X(l.root, s),
    ownerState: c,
    ref: n,
    ...i
  });
});
process.env.NODE_ENV !== "production" && (Mr.propTypes = {
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
Mr.muiName = "ListItemSecondaryAction";
const Bf = Mr, Df = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.hasSecondaryAction && t.secondaryAction];
}, Lf = (e) => {
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
  }, If, n);
}, Ff = q("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: Df
})(he(({
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
      [`& > .${yt.root}`]: {
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
}))), Vf = q("li", {
  name: "MuiListItem",
  slot: "Container"
})({
  position: "relative"
}), Ii = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
      ...h
    } = {},
    dense: g = !1,
    disableGutters: y = !1,
    disablePadding: p = !1,
    divider: x = !1,
    secondaryAction: S,
    slotProps: R = {},
    slots: O = {},
    ...v
  } = o, C = T.useContext(ke), k = T.useMemo(() => ({
    dense: g || C.dense || !1,
    alignItems: s,
    disableGutters: y
  }), [s, C.dense, g, y]), M = T.useRef(null), j = T.Children.toArray(i), D = j.length && ms(j[j.length - 1], ["ListItemSecondaryAction"]), Y = {
    ...o,
    alignItems: s,
    dense: k.dense,
    disableGutters: y,
    disablePadding: p,
    divider: x,
    hasSecondaryAction: D
  }, z = Lf(Y), d = Ee(M, n), N = O.root || l.Root || Ff, w = R.root || u.root || {}, $ = {
    className: X(z.root, w.className, a),
    ...v
  };
  let A = c || "li";
  return D ? (A = !$.component && !c ? "div" : A, f === "li" && (A === "li" ? A = "div" : $.component === "li" && ($.component = "div")), /* @__PURE__ */ E.jsx(ke.Provider, {
    value: k,
    children: /* @__PURE__ */ E.jsxs(Vf, {
      as: f,
      className: X(z.container, m),
      ref: d,
      ownerState: Y,
      ...h,
      children: [/* @__PURE__ */ E.jsx(N, {
        ...w,
        ...!cn(N) && {
          as: A,
          ownerState: {
            ...Y,
            ...w.ownerState
          }
        },
        ...$,
        children: j
      }), j.pop()]
    })
  })) : /* @__PURE__ */ E.jsx(ke.Provider, {
    value: k,
    children: /* @__PURE__ */ E.jsxs(N, {
      ...w,
      as: A,
      ref: d,
      ...!cn(N) && {
        ownerState: {
          ...Y,
          ...w.ownerState
        }
      },
      ...$,
      children: [j, S && /* @__PURE__ */ E.jsx(Bf, {
        children: S
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Ii.propTypes = {
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
  children: De(r.node, (e) => {
    const t = T.Children.toArray(e.children);
    let n = -1;
    for (let o = t.length - 1; o >= 0; o -= 1) {
      const s = t[o];
      if (ms(s, ["ListItemSecondaryAction"])) {
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
  ContainerComponent: Rr,
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
const Uo = Ii, $i = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: o
}) => {
  const s = (i) => {
    o && o(i);
  };
  return /* @__PURE__ */ E.jsxs(Ge, { sx: { flexGrow: 1, justifyContent: "space-between" }, children: [
    /* @__PURE__ */ E.jsx(hr, { dense: !0, sx: { p: 0 }, children: e.map((i, a) => /* @__PURE__ */ E.jsx(
      Uo,
      {
        disablePadding: !0,
        sx: { display: "block" },
        children: /* @__PURE__ */ E.jsxs(
          zo,
          {
            selected: n === i.path,
            onClick: () => s(i.path),
            component: "a",
            href: i.path,
            sx: {
              px: 1.5,
              py: 1,
              mb: 0.5,
              "& .MuiListItemIcon-root": {
                minWidth: 36,
                color: "text.secondary"
              },
              "& .MuiListItemText-primary": {
                color: "text.primary"
              },
              "&:hover": {
                backgroundColor: "action.hover"
              },
              "&.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: "#01584F",
                color: "#ffffff",
                "& .MuiListItemText-primary": {
                  color: "#ffffff",
                  fontWeight: 600
                },
                "& .MuiListItemIcon-root": {
                  color: "#ffffff"
                }
              }
            },
            children: [
              /* @__PURE__ */ E.jsx(Bo, { children: i.icon }),
              /* @__PURE__ */ E.jsx(Fo, { primary: i.text })
            ]
          }
        )
      },
      a
    )) }),
    t.length > 0 && /* @__PURE__ */ E.jsx(hr, { dense: !0, children: t.map((i, a) => /* @__PURE__ */ E.jsx(
      Uo,
      {
        disablePadding: !0,
        sx: { display: "block" },
        children: /* @__PURE__ */ E.jsxs(
          zo,
          {
            selected: n === i.path,
            onClick: () => s(i.path),
            component: "a",
            href: i.path,
            sx: {
              borderRadius: "10px",
              px: 1.5,
              py: 1,
              mb: 0.5,
              "& .MuiListItemIcon-root": {
                minWidth: 36,
                color: "text.secondary"
              },
              "& .MuiListItemText-primary": {
                color: "text.primary"
              },
              "&:hover": {
                backgroundColor: "action.hover"
              },
              "&.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: "#01584F",
                color: "#ffffff",
                "& .MuiListItemText-primary": {
                  color: "#ffffff",
                  fontWeight: 600
                },
                "& .MuiListItemIcon-root": {
                  color: "#ffffff"
                }
              }
            },
            children: [
              /* @__PURE__ */ E.jsx(Bo, { children: i.icon }),
              /* @__PURE__ */ E.jsx(Fo, { primary: i.text })
            ]
          }
        )
      },
      a
    )) })
  ] });
}, zf = ct([/* @__PURE__ */ E.jsx("path", {
  d: "M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
}, "0"), /* @__PURE__ */ E.jsx("path", {
  d: "m20.65 11.65-2.79-2.79c-.32-.32-.86-.1-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
}, "1")], "LogoutRounded");
function Uf(e, t, n) {
  const o = t.getBoundingClientRect(), s = n && n.getBoundingClientRect(), i = Ve(t);
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
function Pi(e) {
  return typeof e == "function" ? e() : e;
}
function en(e, t, n) {
  const o = Pi(n), s = Uf(e, t, o);
  s && (t.style.webkitTransform = s, t.style.transform = s);
}
const ki = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = Gt(), s = {
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
    in: h,
    onEnter: g,
    onEntered: y,
    onEntering: p,
    onExit: x,
    onExited: S,
    onExiting: R,
    style: O,
    timeout: v = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = Ir,
    ...k
  } = t, M = T.useRef(null), j = Ee(qt(l), M, n), D = (F) => (L) => {
    F && (L === void 0 ? F(M.current) : F(M.current, L));
  }, Y = D((F, L) => {
    en(f, F, u), Ar(F), g && g(F, L);
  }), z = D((F, L) => {
    const I = St({
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
  }), d = D(y), N = D(R), w = D((F) => {
    const L = St({
      timeout: v,
      style: O,
      easing: m
    }, {
      mode: "exit"
    });
    F.style.webkitTransition = o.transitions.create("-webkit-transform", L), F.style.transition = o.transitions.create("transform", L), en(f, F, u), x && x(F);
  }), $ = D((F) => {
    F.style.webkitTransition = "", F.style.transition = "", S && S(F);
  }), A = (F) => {
    a && a(M.current, F);
  }, G = T.useCallback(() => {
    M.current && en(f, M.current, u);
  }, [f, u]);
  return T.useEffect(() => {
    if (h || f === "down" || f === "right")
      return;
    const F = Cs(() => {
      M.current && en(f, M.current, u);
    }), L = Ve(M.current);
    return L.addEventListener("resize", F), () => {
      F.clear(), L.removeEventListener("resize", F);
    };
  }, [f, h, u]), T.useEffect(() => {
    h || G();
  }, [h, G]), /* @__PURE__ */ E.jsx(C, {
    nodeRef: M,
    onEnter: Y,
    onEntered: d,
    onEntering: z,
    onExit: w,
    onExited: $,
    onExiting: N,
    addEndListener: A,
    appear: c,
    in: h,
    timeout: v,
    ...k,
    children: (F, {
      ownerState: L,
      ...I
    }) => /* @__PURE__ */ T.cloneElement(l, {
      ref: j,
      style: {
        visibility: F === "exited" && !h ? "hidden" : void 0,
        ...O,
        ...l.props.style
      },
      ...I
    })
  });
});
process.env.NODE_ENV !== "production" && (ki.propTypes = {
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
  children: Ht.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: De(r.oneOfType([Ct, r.func]), (e) => {
    if (e.open) {
      const t = Pi(e.container);
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
const Wf = ki;
function Gf(e) {
  return se("MuiDrawer", e);
}
ce("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Ni = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, Yf = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: o
  } = e, s = {
    root: ["root", `anchor${K(n)}`],
    docked: [(o === "permanent" || o === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${K(n)}`, o !== "temporary" && `paperAnchorDocked${K(n)}`]
  };
  return pe(s, Gf, t);
}, Hf = q(di, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Ni
})(he(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), qf = q("div", {
  shouldForwardProp: Ot,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Ni
})({
  flex: "0 0 auto"
}), Kf = q(kn, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${K(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${K(n.anchor)}`]];
  }
})(he(({
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
}))), Ai = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function Xf(e) {
  return ["left", "right"].includes(e);
}
function Qf({
  direction: e
}, t) {
  return e === "rtl" && Xf(t) ? Ai[t] : t;
}
const Mi = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiDrawer"
  }), s = Gt(), i = ps(), a = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    anchor: c = "left",
    BackdropProps: l,
    children: u,
    className: f,
    elevation: m = 16,
    hideBackdrop: h = !1,
    ModalProps: {
      BackdropProps: g,
      ...y
    } = {},
    onClose: p,
    open: x = !1,
    PaperProps: S = {},
    SlideProps: R,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O,
    transitionDuration: v = a,
    variant: C = "temporary",
    slots: k = {},
    slotProps: M = {},
    ...j
  } = o, D = T.useRef(!1);
  T.useEffect(() => {
    D.current = !0;
  }, []);
  const Y = Qf({
    direction: i ? "rtl" : "ltr"
  }, c), d = {
    ...o,
    anchor: c,
    elevation: m,
    open: x,
    variant: C,
    ...j
  }, N = Yf(d), w = {
    slots: {
      transition: O,
      ...k
    },
    slotProps: {
      paper: S,
      transition: R,
      ...M,
      backdrop: Ss(M.backdrop || {
        ...l,
        ...g
      }, {
        transitionDuration: v
      })
    }
  }, [$, A] = be("root", {
    ref: n,
    elementType: Hf,
    className: X(N.root, N.modal, f),
    shouldForwardComponentProp: !0,
    ownerState: d,
    externalForwardedProps: {
      ...w,
      ...j,
      ...y
    },
    additionalProps: {
      open: x,
      onClose: p,
      hideBackdrop: h,
      slots: {
        backdrop: w.slots.backdrop
      },
      slotProps: {
        backdrop: w.slotProps.backdrop
      }
    }
  }), [G, F] = be("paper", {
    elementType: Kf,
    shouldForwardComponentProp: !0,
    className: X(N.paper, S.className),
    ownerState: d,
    externalForwardedProps: w,
    additionalProps: {
      elevation: C === "temporary" ? m : 0,
      square: !0,
      ...C === "temporary" && {
        role: "dialog",
        "aria-modal": "true"
      }
    }
  }), [L, I] = be("docked", {
    elementType: qf,
    ref: n,
    className: X(N.root, N.docked, f),
    ownerState: d,
    externalForwardedProps: w,
    additionalProps: j
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [b, _] = be("transition", {
    elementType: Wf,
    ownerState: d,
    externalForwardedProps: w,
    additionalProps: {
      in: x,
      direction: Ai[Y],
      timeout: v,
      appear: D.current
    }
  }), V = /* @__PURE__ */ E.jsx(G, {
    ...F,
    children: u
  });
  if (C === "permanent")
    return /* @__PURE__ */ E.jsx(L, {
      ...I,
      children: V
    });
  const U = /* @__PURE__ */ E.jsx(b, {
    ..._,
    children: V
  });
  return C === "persistent" ? /* @__PURE__ */ E.jsx(L, {
    ...I,
    children: U
  }) : /* @__PURE__ */ E.jsx($, {
    ...A,
    children: U
  });
});
process.env.NODE_ENV !== "production" && (Mi.propTypes = {
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
  elevation: Tt,
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
const Jf = Mi, Zf = ({
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
  const h = (g) => {
    i == null || i(g), t();
  };
  return /* @__PURE__ */ E.jsx(
    Jf,
    {
      anchor: "right",
      open: e,
      onClose: t,
      sx: {
        zIndex: (g) => g.zIndex.drawer + 1,
        "& .MuiDrawer-paper": {
          backgroundImage: "none",
          backgroundColor: "background.paper"
        }
      },
      children: /* @__PURE__ */ E.jsxs(
        Ge,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ E.jsxs(Ge, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
              /* @__PURE__ */ E.jsxs(
                Ge,
                {
                  direction: "row",
                  sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                  children: [
                    /* @__PURE__ */ E.jsx(
                      ar,
                      {
                        sizes: "small",
                        alt: a,
                        src: c,
                        sx: { width: 24, height: 24 }
                      }
                    ),
                    /* @__PURE__ */ E.jsx(Pe, { component: "p", variant: "h6", children: a })
                  ]
                }
              ),
              u && /* @__PURE__ */ E.jsx(
                Bs,
                {
                  color: "error",
                  variant: "dot",
                  invisible: f === 0,
                  sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                  children: /* @__PURE__ */ E.jsx(mr, { size: "small", children: /* @__PURE__ */ E.jsx(Os, {}) })
                }
              )
            ] }),
            /* @__PURE__ */ E.jsx(pn, {}),
            /* @__PURE__ */ E.jsxs(Ge, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ E.jsx(
                $i,
                {
                  mainLinks: n,
                  secondaryLinks: o,
                  activePath: s,
                  onLinkClick: h
                }
              ),
              /* @__PURE__ */ E.jsx(pn, {})
            ] }),
            (m == null ? void 0 : m.show) && /* @__PURE__ */ E.jsx(wi, { ...m }),
            /* @__PURE__ */ E.jsx(Ge, { sx: { p: 2 }, children: /* @__PURE__ */ E.jsx(
              Nr,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ E.jsx(zf, {}),
                onClick: l,
                children: "Logout"
              }
            ) })
          ]
        }
      )
    }
  );
}, am = ({
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
  userAvatar: h,
  onLogout: g,
  onProfileClick: y,
  onAccountClick: p,
  onSettingsClick: x,
  showNotifications: S = !0,
  notificationCount: R = 0,
  alertProps: O,
  style: v,
  headerStyles: C,
  sidebarStyles: k,
  contentStyles: M
}) => {
  const j = Di(), D = Li(j.breakpoints.down("md")), [Y, z] = Nn(!1), [d, N] = Nn(!0), [w, $] = Nn(!1), A = () => {
    z(!Y);
  }, G = () => {
    z(!1);
  }, F = async () => {
    try {
      await Ji(), localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), g == null || g();
    } catch (L) {
      localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), g == null || g(
        L instanceof Error ? L : new Error("Logout failed")
      );
    }
  };
  return An(() => {
    (() => {
      try {
        if (!localStorage.getItem("lumoraRefreshToken")) {
          console.log("No session found, redirecting to login"), window.location.href = "/login";
          return;
        }
        $(!0);
      } catch (I) {
        console.error("Error checking session:", I), window.location.href = "/login";
      } finally {
        N(!1);
      }
    })();
  }, []), An(() => (c && Ki(), () => {
    Xi();
  }), [c]), An(() => {
    c && Zi();
  }, [c]), d ? /* @__PURE__ */ E.jsxs(
    lt,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "background.default"
      },
      children: [
        /* @__PURE__ */ E.jsx(Fi, { size: 60, thickness: 4 }),
        /* @__PURE__ */ E.jsx(lt, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) : w ? /* @__PURE__ */ E.jsxs(lt, { sx: { display: "flex", height: "100vh", ...v }, children: [
    /* @__PURE__ */ E.jsx(Vi, {}),
    i && /* @__PURE__ */ E.jsx(
      bf,
      {
        appName: o,
        pageName: s,
        onMenuClick: D && a ? A : void 0,
        showMenuButton: D && a,
        headerStyles: C,
        userName: f,
        userEmail: m,
        userAvatar: h,
        onProfileClick: y,
        onLogout: F,
        showNotifications: S,
        notificationCount: R
      }
    ),
    a && !D && /* @__PURE__ */ E.jsxs(
      zi,
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
            backgroundColor: "#ffffff",
            borderRight: "1px solid #f4f4f2",
            mt: 0
            // Extend to top
          },
          ...k
        },
        children: [
          /* @__PURE__ */ E.jsx(
            lt,
            {
              sx: {
                height: "100px",
                p: 4,
                display: "flex",
                alignItems: "center"
              },
              children: /* @__PURE__ */ E.jsx(
                Ci,
                {
                  appName: o,
                  pageName: s
                }
              )
            }
          ),
          /* @__PURE__ */ E.jsxs(
            lt,
            {
              sx: {
                overflow: "auto",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              },
              children: [
                /* @__PURE__ */ E.jsx(
                  $i,
                  {
                    mainLinks: t,
                    secondaryLinks: n,
                    activePath: l,
                    onLinkClick: u
                  }
                ),
                (O == null ? void 0 : O.show) && /* @__PURE__ */ E.jsx(wi, { ...O })
              ]
            }
          )
        ]
      }
    ),
    a && D && /* @__PURE__ */ E.jsx(
      Zf,
      {
        open: Y,
        onClose: G,
        mainLinks: t,
        secondaryLinks: n,
        activePath: l,
        onLinkClick: u,
        userName: f,
        userEmail: m,
        userAvatar: h,
        onLogout: F,
        onProfileClick: y,
        showNotifications: S,
        notificationCount: R,
        alertProps: O
      }
    ),
    /* @__PURE__ */ E.jsx(
      lt,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          m: 1,
          width: D ? "100%" : a ? "calc(100% - 240px)" : "100%",
          // mt: showHeader ? '80px' : 0, // Account for AppNavbar height only if header is shown
          // ml: isMobile ? 0 : showSidebar ? '240px' : 0, // Offset for sidebar on desktop
          overflow: "auto",
          ...M
        },
        children: e
      }
    )
  ] }) : null;
};
export {
  am as LumoraWrapper,
  am as default,
  Ji as logoutUser
};
