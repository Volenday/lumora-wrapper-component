var vc = Object.defineProperty;
var xc = (e, t, n) => t in e ? vc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var vo = (e, t, n) => (xc(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as T from "react";
import at, { Children as Tc, isValidElement as hn, cloneElement as gn, useState as ir, useEffect as sr } from "react";
import { useTheme as Ec, useMediaQuery as wc, Box as xo, CircularProgress as Oc, CssBaseline as Sc, Drawer as Cc, Grid as ar } from "@mui/material";
import Yr from "axios";
import Rc from "@emotion/styled";
import { Global as Nc, ThemeContext as kc, keyframes as qo, css as Zs } from "@emotion/react";
import * as Pc from "react-dom";
import nn from "react-dom";
function $c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cr = { exports: {} }, rn = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function Ic() {
  if (Ci)
    return rn;
  Ci = 1;
  var e = Symbol.for("react.fragment");
  return rn.Fragment = e, rn.jsxDEV = void 0, rn;
}
var sn = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ri;
function Ac() {
  return Ri || (Ri = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h) {
      if (h == null)
        return null;
      if (typeof h == "function")
        return h.$$typeof === U ? null : h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case x:
          return "Fragment";
        case C:
          return "Profiler";
        case O:
          return "StrictMode";
        case S:
          return "Suspense";
        case I:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case f:
            return "Portal";
          case y:
            return h.displayName || "Context";
          case w:
            return (h._context.displayName || "Context") + ".Consumer";
          case E:
            var A = h.render;
            return h = h.displayName, h || (h = A.displayName || A.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case _:
            return A = h.displayName || null, A !== null ? A : e(h.type) || "Memo";
          case D:
            A = h._payload, h = h._init;
            try {
              return e(h(A));
            } catch {
            }
        }
      return null;
    }
    function t(h) {
      return "" + h;
    }
    function n(h) {
      try {
        t(h);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var L = A.error, z = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return L.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(h);
      }
    }
    function r(h) {
      if (h === x)
        return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === D)
        return "<...>";
      try {
        var A = e(h);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var h = d.A;
      return h === null ? null : h.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(h) {
      if (N.call(h, "key")) {
        var A = Object.getOwnPropertyDescriptor(h, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function l(h, A) {
      function L() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var h = e(this.type);
      return V[h] || (V[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function u(h, A, L, z, K, ee) {
      var q = L.ref;
      return h = {
        $$typeof: v,
        type: h,
        key: A,
        props: L,
        _owner: z
      }, (q !== void 0 ? q : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(h, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function p(h, A, L, z, K, ee) {
      var q = A.children;
      if (q !== void 0)
        if (z)
          if (R(q)) {
            for (z = 0; z < q.length; z++)
              m(q[z]);
            Object.freeze && Object.freeze(q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          m(q);
      if (N.call(A, "key")) {
        q = e(h);
        var X = Object.keys(A).filter(function(Y) {
          return Y !== "key";
        });
        z = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", k[q + z] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          q,
          X,
          q
        ), k[q + z] = !0);
      }
      if (q = null, L !== void 0 && (n(L), q = "" + L), a(A) && (n(A.key), q = "" + A.key), "key" in A) {
        L = {};
        for (var Q in A)
          Q !== "key" && (L[Q] = A[Q]);
      } else
        L = A;
      return q && l(
        L,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), u(
        h,
        q,
        L,
        i(),
        K,
        ee
      );
    }
    function m(h) {
      g(h) ? h._store && (h._store.validated = 1) : typeof h == "object" && h !== null && h.$$typeof === D && (h._payload.status === "fulfilled" ? g(h._payload.value) && h._payload.value._store && (h._payload.value._store.validated = 1) : h._store && (h._store.validated = 1));
    }
    function g(h) {
      return typeof h == "object" && h !== null && h.$$typeof === v;
    }
    var b = at, v = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), y = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), d = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, R = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(h) {
        return h();
      }
    };
    var P, V = {}, M = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), B = $(r(s)), k = {};
    sn.Fragment = x, sn.jsxDEV = function(h, A, L, z) {
      var K = 1e4 > d.recentlyCreatedOwnerStacks++;
      return p(
        h,
        A,
        L,
        z,
        K ? Error("react-stack-top-frame") : M,
        K ? $(r(h)) : B
      );
    };
  }()), sn;
}
process.env.NODE_ENV === "production" ? Cr.exports = Ic() : Cr.exports = Ac();
var G = Cr.exports;
let Gr = !1;
const jc = () => {
  Gr = !0;
}, Dc = () => {
  Gr = !1;
}, Mc = Yr.create(), vn = Yr.create({
  baseURL: { BASE_URL: "/", MODE: "production", DEV: !0, PROD: !1, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000",
  headers: {
    "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !0, PROD: !1, SSR: !1 }.VITE_API_KEY || "",
    "Content-Type": "application/json"
  }
});
vn.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("lumoraAccessToken");
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
vn.interceptors.response.use(
  (e) => e,
  async (e) => {
    var n;
    const t = e.config;
    if (((n = e.response) == null ? void 0 : n.status) === 401 && Gr && t && !t._retry) {
      t._retry = !0;
      try {
        const r = localStorage.getItem("lumoraRefreshToken");
        if (!r)
          throw new Error("No refresh token available");
        const i = await Mc.post(
          `${{ BASE_URL: "/", MODE: "production", DEV: !0, PROD: !1, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000"}/auth/refresh`,
          { refresh_token: r },
          {
            headers: {
              "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !0, PROD: !1, SSR: !1 }.VITE_API_KEY || "",
              "Content-Type": "application/json"
            }
          }
        );
        if (i.data.success && i.data.accessToken)
          return localStorage.setItem(
            "lumoraAccessToken",
            i.data.accessToken
          ), i.data.refreshToken && localStorage.setItem(
            "lumoraRefreshToken",
            i.data.refreshToken
          ), t.headers.Authorization = `Bearer ${i.data.accessToken}`, vn(t);
        throw new Error("Invalid refresh response");
      } catch (r) {
        return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), window.location.href = "/login", Promise.reject(r);
      }
    }
    return Promise.reject(e);
  }
);
const av = async () => {
  const e = localStorage.getItem("lumoraRefreshToken");
  if (!e)
    throw new Error("No refresh token available for logout");
  await vn.post("/auth/logout", {
    refresh_token: e
  });
}, _c = async () => {
  const e = localStorage.getItem("lumoraAccessToken"), t = localStorage.getItem("lumoraRefreshToken");
  if (e)
    return !0;
  if (t)
    try {
      const n = await Yr.post(
        `${{ BASE_URL: "/", MODE: "production", DEV: !0, PROD: !1, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000"}/auth/refresh`,
        { refresh_token: t },
        {
          headers: {
            "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !0, PROD: !1, SSR: !1 }.VITE_API_KEY || "",
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
}, Ni = (e) => e, Bc = () => {
  let e = Ni;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ni;
    }
  };
}, Lc = Bc(), ea = Lc;
function vt(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function Z(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : vt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ki(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
var Rr = { exports: {} }, an = { exports: {} }, ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi;
function Fc() {
  if (Pi)
    return ge;
  Pi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function w(E) {
    if (typeof E == "object" && E !== null) {
      var S = E.$$typeof;
      switch (S) {
        case t:
          switch (E = E.type, E) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case m:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case p:
                case v:
                case b:
                case a:
                  return E;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function y(E) {
    return w(E) === u;
  }
  return ge.AsyncMode = c, ge.ConcurrentMode = u, ge.ContextConsumer = l, ge.ContextProvider = a, ge.Element = t, ge.ForwardRef = p, ge.Fragment = r, ge.Lazy = v, ge.Memo = b, ge.Portal = n, ge.Profiler = s, ge.StrictMode = i, ge.Suspense = m, ge.isAsyncMode = function(E) {
    return y(E) || w(E) === c;
  }, ge.isConcurrentMode = y, ge.isContextConsumer = function(E) {
    return w(E) === l;
  }, ge.isContextProvider = function(E) {
    return w(E) === a;
  }, ge.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, ge.isForwardRef = function(E) {
    return w(E) === p;
  }, ge.isFragment = function(E) {
    return w(E) === r;
  }, ge.isLazy = function(E) {
    return w(E) === v;
  }, ge.isMemo = function(E) {
    return w(E) === b;
  }, ge.isPortal = function(E) {
    return w(E) === n;
  }, ge.isProfiler = function(E) {
    return w(E) === s;
  }, ge.isStrictMode = function(E) {
    return w(E) === i;
  }, ge.isSuspense = function(E) {
    return w(E) === m;
  }, ge.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === u || E === s || E === i || E === m || E === g || typeof E == "object" && E !== null && (E.$$typeof === v || E.$$typeof === b || E.$$typeof === a || E.$$typeof === l || E.$$typeof === p || E.$$typeof === x || E.$$typeof === O || E.$$typeof === C || E.$$typeof === f);
  }, ge.typeOf = w, ge;
}
var be = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $i;
function Vc() {
  return $i || ($i = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function w(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === r || H === u || H === s || H === i || H === m || H === g || typeof H == "object" && H !== null && (H.$$typeof === v || H.$$typeof === b || H.$$typeof === a || H.$$typeof === l || H.$$typeof === p || H.$$typeof === x || H.$$typeof === O || H.$$typeof === C || H.$$typeof === f);
    }
    function y(H) {
      if (typeof H == "object" && H !== null) {
        var se = H.$$typeof;
        switch (se) {
          case t:
            var ie = H.type;
            switch (ie) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case m:
                return ie;
              default:
                var me = ie && ie.$$typeof;
                switch (me) {
                  case l:
                  case p:
                  case v:
                  case b:
                  case a:
                    return me;
                  default:
                    return se;
                }
            }
          case n:
            return se;
        }
      }
    }
    var E = c, S = u, I = l, _ = a, D = t, W = p, U = r, d = v, N = b, R = n, $ = s, P = i, V = m, M = !1;
    function B(H) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(H) || y(H) === c;
    }
    function k(H) {
      return y(H) === u;
    }
    function h(H) {
      return y(H) === l;
    }
    function A(H) {
      return y(H) === a;
    }
    function L(H) {
      return typeof H == "object" && H !== null && H.$$typeof === t;
    }
    function z(H) {
      return y(H) === p;
    }
    function K(H) {
      return y(H) === r;
    }
    function ee(H) {
      return y(H) === v;
    }
    function q(H) {
      return y(H) === b;
    }
    function X(H) {
      return y(H) === n;
    }
    function Q(H) {
      return y(H) === s;
    }
    function Y(H) {
      return y(H) === i;
    }
    function te(H) {
      return y(H) === m;
    }
    be.AsyncMode = E, be.ConcurrentMode = S, be.ContextConsumer = I, be.ContextProvider = _, be.Element = D, be.ForwardRef = W, be.Fragment = U, be.Lazy = d, be.Memo = N, be.Portal = R, be.Profiler = $, be.StrictMode = P, be.Suspense = V, be.isAsyncMode = B, be.isConcurrentMode = k, be.isContextConsumer = h, be.isContextProvider = A, be.isElement = L, be.isForwardRef = z, be.isFragment = K, be.isLazy = ee, be.isMemo = q, be.isPortal = X, be.isProfiler = Q, be.isStrictMode = Y, be.isSuspense = te, be.isValidElementType = w, be.typeOf = y;
  }()), be;
}
var Ii;
function ta() {
  return Ii || (Ii = 1, process.env.NODE_ENV === "production" ? an.exports = Fc() : an.exports = Vc()), an.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lr, Ai;
function Uc() {
  if (Ai)
    return lr;
  Ai = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        u[p] = p;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return lr = i() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var m in l)
        t.call(l, m) && (c[m] = l[m]);
      if (e) {
        u = e(l);
        for (var g = 0; g < u.length; g++)
          n.call(l, u[g]) && (c[u[g]] = l[u[g]]);
      }
    }
    return c;
  }, lr;
}
var cr, ji;
function Kr() {
  if (ji)
    return cr;
  ji = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return cr = e, cr;
}
var ur, Di;
function oa() {
  return Di || (Di = 1, ur = Function.call.bind(Object.prototype.hasOwnProperty)), ur;
}
var pr, Mi;
function zc() {
  if (Mi)
    return pr;
  Mi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Kr(), n = {}, r = oa();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in s)
        if (r(s, p)) {
          var m;
          try {
            if (typeof s[p] != "function") {
              var g = Error(
                (c || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = s[p](a, p, c, l, null, t);
          } catch (v) {
            m = v;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (b ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, pr = i, pr;
}
var dr, _i;
function Wc() {
  if (_i)
    return dr;
  _i = 1;
  var e = ta(), t = Uc(), n = Kr(), r = oa(), i = zc(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return dr = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(k) {
      var h = k && (u && k[u] || k[p]);
      if (typeof h == "function")
        return h;
    }
    var g = "<<anonymous>>", b = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: C(),
      arrayOf: w,
      element: y(),
      elementType: E(),
      instanceOf: S,
      node: W(),
      objectOf: _,
      oneOf: I,
      oneOfType: D,
      shape: d,
      exact: N
    };
    function v(k, h) {
      return k === h ? k !== 0 || 1 / k === 1 / h : k !== k && h !== h;
    }
    function f(k, h) {
      this.message = k, this.data = h && typeof h == "object" ? h : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function x(k) {
      if (process.env.NODE_ENV !== "production")
        var h = {}, A = 0;
      function L(K, ee, q, X, Q, Y, te) {
        if (X = X || g, Y = Y || q, te !== n) {
          if (c) {
            var H = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw H.name = "Invariant Violation", H;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = X + ":" + q;
            !h[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), h[se] = !0, A++);
          }
        }
        return ee[q] == null ? K ? ee[q] === null ? new f("The " + Q + " `" + Y + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new f("The " + Q + " `" + Y + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : k(ee, q, X, Q, Y);
      }
      var z = L.bind(null, !1);
      return z.isRequired = L.bind(null, !0), z;
    }
    function O(k) {
      function h(A, L, z, K, ee, q) {
        var X = A[L], Q = P(X);
        if (Q !== k) {
          var Y = V(X);
          return new f(
            "Invalid " + K + " `" + ee + "` of type " + ("`" + Y + "` supplied to `" + z + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return x(h);
    }
    function C() {
      return x(a);
    }
    function w(k) {
      function h(A, L, z, K, ee) {
        if (typeof k != "function")
          return new f("Property `" + ee + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var q = A[L];
        if (!Array.isArray(q)) {
          var X = P(q);
          return new f("Invalid " + K + " `" + ee + "` of type " + ("`" + X + "` supplied to `" + z + "`, expected an array."));
        }
        for (var Q = 0; Q < q.length; Q++) {
          var Y = k(q, Q, z, K, ee + "[" + Q + "]", n);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return x(h);
    }
    function y() {
      function k(h, A, L, z, K) {
        var ee = h[A];
        if (!l(ee)) {
          var q = P(ee);
          return new f("Invalid " + z + " `" + K + "` of type " + ("`" + q + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(k);
    }
    function E() {
      function k(h, A, L, z, K) {
        var ee = h[A];
        if (!e.isValidElementType(ee)) {
          var q = P(ee);
          return new f("Invalid " + z + " `" + K + "` of type " + ("`" + q + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(k);
    }
    function S(k) {
      function h(A, L, z, K, ee) {
        if (!(A[L] instanceof k)) {
          var q = k.name || g, X = B(A[L]);
          return new f("Invalid " + K + " `" + ee + "` of type " + ("`" + X + "` supplied to `" + z + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return x(h);
    }
    function I(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function h(A, L, z, K, ee) {
        for (var q = A[L], X = 0; X < k.length; X++)
          if (v(q, k[X]))
            return null;
        var Q = JSON.stringify(k, function(te, H) {
          var se = V(H);
          return se === "symbol" ? String(H) : H;
        });
        return new f("Invalid " + K + " `" + ee + "` of value `" + String(q) + "` " + ("supplied to `" + z + "`, expected one of " + Q + "."));
      }
      return x(h);
    }
    function _(k) {
      function h(A, L, z, K, ee) {
        if (typeof k != "function")
          return new f("Property `" + ee + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var q = A[L], X = P(q);
        if (X !== "object")
          return new f("Invalid " + K + " `" + ee + "` of type " + ("`" + X + "` supplied to `" + z + "`, expected an object."));
        for (var Q in q)
          if (r(q, Q)) {
            var Y = k(q, Q, z, K, ee + "." + Q, n);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return x(h);
    }
    function D(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var h = 0; h < k.length; h++) {
        var A = k[h];
        if (typeof A != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + M(A) + " at index " + h + "."
          ), a;
      }
      function L(z, K, ee, q, X) {
        for (var Q = [], Y = 0; Y < k.length; Y++) {
          var te = k[Y], H = te(z, K, ee, q, X, n);
          if (H == null)
            return null;
          H.data && r(H.data, "expectedType") && Q.push(H.data.expectedType);
        }
        var se = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new f("Invalid " + q + " `" + X + "` supplied to " + ("`" + ee + "`" + se + "."));
      }
      return x(L);
    }
    function W() {
      function k(h, A, L, z, K) {
        return R(h[A]) ? null : new f("Invalid " + z + " `" + K + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return x(k);
    }
    function U(k, h, A, L, z) {
      return new f(
        (k || "React class") + ": " + h + " type `" + A + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function d(k) {
      function h(A, L, z, K, ee) {
        var q = A[L], X = P(q);
        if (X !== "object")
          return new f("Invalid " + K + " `" + ee + "` of type `" + X + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var Q in k) {
          var Y = k[Q];
          if (typeof Y != "function")
            return U(z, K, ee, Q, V(Y));
          var te = Y(q, Q, z, K, ee + "." + Q, n);
          if (te)
            return te;
        }
        return null;
      }
      return x(h);
    }
    function N(k) {
      function h(A, L, z, K, ee) {
        var q = A[L], X = P(q);
        if (X !== "object")
          return new f("Invalid " + K + " `" + ee + "` of type `" + X + "` " + ("supplied to `" + z + "`, expected `object`."));
        var Q = t({}, A[L], k);
        for (var Y in Q) {
          var te = k[Y];
          if (r(k, Y) && typeof te != "function")
            return U(z, K, ee, Y, V(te));
          if (!te)
            return new f(
              "Invalid " + K + " `" + ee + "` key `" + Y + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(A[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var H = te(q, Y, z, K, ee + "." + Y, n);
          if (H)
            return H;
        }
        return null;
      }
      return x(h);
    }
    function R(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(R);
          if (k === null || l(k))
            return !0;
          var h = m(k);
          if (h) {
            var A = h.call(k), L;
            if (h !== k.entries) {
              for (; !(L = A.next()).done; )
                if (!R(L.value))
                  return !1;
            } else
              for (; !(L = A.next()).done; ) {
                var z = L.value;
                if (z && !R(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function $(k, h) {
      return k === "symbol" ? !0 : h ? h["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && h instanceof Symbol : !1;
    }
    function P(k) {
      var h = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : $(h, k) ? "symbol" : h;
    }
    function V(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var h = P(k);
      if (h === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return h;
    }
    function M(k) {
      var h = V(k);
      switch (h) {
        case "array":
        case "object":
          return "an " + h;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + h;
        default:
          return h;
      }
    }
    function B(k) {
      return !k.constructor || !k.constructor.name ? g : k.constructor.name;
    }
    return b.checkPropTypes = i, b.resetWarningCache = i.resetWarningCache, b.PropTypes = b, b;
  }, dr;
}
var fr, Bi;
function Hc() {
  if (Bi)
    return fr;
  Bi = 1;
  var e = Kr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, fr = function() {
    function r(a, l, c, u, p, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, fr;
}
if (process.env.NODE_ENV !== "production") {
  var qc = ta(), Yc = !0;
  Rr.exports = Wc()(qc.isElement, Yc);
} else
  Rr.exports = Hc()();
var Gc = Rr.exports;
const o = /* @__PURE__ */ $c(Gc);
function na(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = na(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function ne() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = na(e)) && (r && (r += " "), r += t);
  return r;
}
function pe(e, t, n = void 0) {
  const r = {};
  for (const i in e) {
    const s = e[i];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, n && n[u] && (a += " " + n[u]));
    }
    r[i] = a;
  }
  return r;
}
var Nr = { exports: {} }, Te = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Li;
function Kc() {
  if (Li)
    return Te;
  Li = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
  function v(f) {
    if (typeof f == "object" && f !== null) {
      var x = f.$$typeof;
      switch (x) {
        case e:
          switch (f = f.type, f) {
            case n:
            case i:
            case r:
            case c:
            case u:
            case g:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case l:
                case m:
                case p:
                  return f;
                case s:
                  return f;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Te.ContextConsumer = s, Te.ContextProvider = a, Te.Element = e, Te.ForwardRef = l, Te.Fragment = n, Te.Lazy = m, Te.Memo = p, Te.Portal = t, Te.Profiler = i, Te.StrictMode = r, Te.Suspense = c, Te.SuspenseList = u, Te.isContextConsumer = function(f) {
    return v(f) === s;
  }, Te.isContextProvider = function(f) {
    return v(f) === a;
  }, Te.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Te.isForwardRef = function(f) {
    return v(f) === l;
  }, Te.isFragment = function(f) {
    return v(f) === n;
  }, Te.isLazy = function(f) {
    return v(f) === m;
  }, Te.isMemo = function(f) {
    return v(f) === p;
  }, Te.isPortal = function(f) {
    return v(f) === t;
  }, Te.isProfiler = function(f) {
    return v(f) === i;
  }, Te.isStrictMode = function(f) {
    return v(f) === r;
  }, Te.isSuspense = function(f) {
    return v(f) === c;
  }, Te.isSuspenseList = function(f) {
    return v(f) === u;
  }, Te.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === i || f === r || f === c || f === u || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === p || f.$$typeof === a || f.$$typeof === s || f.$$typeof === l || f.$$typeof === b || f.getModuleId !== void 0);
  }, Te.typeOf = v, Te;
}
var Ee = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function Xc() {
  return Fi || (Fi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var x = f.$$typeof;
        switch (x) {
          case t:
            switch (f = f.type, f) {
              case r:
              case s:
              case i:
              case u:
              case p:
              case b:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case l:
                  case c:
                  case g:
                  case m:
                    return f;
                  case a:
                    return f;
                  default:
                    return x;
                }
            }
          case n:
            return x;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
    Ee.ContextConsumer = a, Ee.ContextProvider = l, Ee.Element = t, Ee.ForwardRef = c, Ee.Fragment = r, Ee.Lazy = g, Ee.Memo = m, Ee.Portal = n, Ee.Profiler = s, Ee.StrictMode = i, Ee.Suspense = u, Ee.SuspenseList = p, Ee.isContextConsumer = function(f) {
      return e(f) === a;
    }, Ee.isContextProvider = function(f) {
      return e(f) === l;
    }, Ee.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, Ee.isForwardRef = function(f) {
      return e(f) === c;
    }, Ee.isFragment = function(f) {
      return e(f) === r;
    }, Ee.isLazy = function(f) {
      return e(f) === g;
    }, Ee.isMemo = function(f) {
      return e(f) === m;
    }, Ee.isPortal = function(f) {
      return e(f) === n;
    }, Ee.isProfiler = function(f) {
      return e(f) === s;
    }, Ee.isStrictMode = function(f) {
      return e(f) === i;
    }, Ee.isSuspense = function(f) {
      return e(f) === u;
    }, Ee.isSuspenseList = function(f) {
      return e(f) === p;
    }, Ee.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === r || f === s || f === i || f === u || f === p || typeof f == "object" && f !== null && (f.$$typeof === g || f.$$typeof === m || f.$$typeof === l || f.$$typeof === a || f.$$typeof === c || f.$$typeof === v || f.getModuleId !== void 0);
    }, Ee.typeOf = e;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Nr.exports = Kc() : Nr.exports = Xc();
var Yt = Nr.exports;
function bt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ra(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || Yt.isValidElementType(e) || !bt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ra(e[n]);
  }), t;
}
function _e(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return bt(e) && bt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ T.isValidElement(t[i]) || Yt.isValidElementType(t[i]) ? r[i] = t[i] : bt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && bt(e[i]) ? r[i] = _e(e[i], t[i], n) : n.clone ? r[i] = bt(t[i]) ? ra(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
function Do(e, t) {
  return t ? _e(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Jc = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, Dt = Jc;
function Vi(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, i) => {
    var a, l;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((a = r.match(s)) == null ? void 0 : a[1]) || 0) - +(((l = i.match(s)) == null ? void 0 : l[1]) || 0);
  });
  return n.length ? n.reduce((r, i) => {
    const s = t[i];
    return delete r[i], r[i] = s, r;
  }, {
    ...t
  }) : t;
}
function Qc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Zc(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : vt(18, `(${t})`));
    return null;
  }
  const [, r, i] = n, s = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(s);
}
function eu(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function n(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const r = {}, i = (s) => (n(r, s), r);
  return n(i), {
    ...e,
    containerQueries: i
  };
}
const jn = {
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
}, Ui = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${jn[e]}px)`
}, tu = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : jn[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function lt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Ui;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Ui;
    return Object.keys(t).reduce((a, l) => {
      if (Qc(s.keys, l)) {
        const c = Zc(r.containerQueries ? r : tu, l);
        c && (a[c] = n(t[l], l));
      } else if (Object.keys(s.values || jn).includes(l)) {
        const c = s.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function ia(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function kr(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function ou(e, ...t) {
  const n = ia(e), r = [n, ...t].reduce((i, s) => _e(i, s), {});
  return kr(Object.keys(n), r);
}
function nu(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((i, s) => {
    s < e.length && (n[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (n[i] = !0);
  }), n;
}
function mr({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || nu(e, t), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function Dn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function xn(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Dn(e, n) || r, t && (i = t(i, r, e)), i;
}
function Ae(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Dn(c, r) || {};
    return lt(a, l, (m) => {
      let g = xn(u, i, m);
      return m === g && typeof m == "string" && (g = xn(u, i, `${t}${m === "default" ? "" : Z(m)}`, m)), n === !1 ? g : {
        [n]: g
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Dt
  } : {}, s.filterProps = [t], s;
}
function ru(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const iu = {
  m: "margin",
  p: "padding"
}, su = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, zi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, au = ru((e) => {
  if (e.length > 2)
    if (zi[e])
      e = zi[e];
    else
      return [e];
  const [t, n] = e.split(""), r = iu[t], i = su[n] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), Mn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], _n = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], lu = [...Mn, ..._n];
function Yo(e, t, n, r) {
  const i = Dn(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), typeof i == "string" ? i.startsWith("var(") && s === 0 ? 0 : i.startsWith("var(") && s === 1 ? i : `calc(${s} * ${i})` : i * s) : Array.isArray(i) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[a];
    return s >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Bn(e) {
  return Yo(e, "spacing", 8, "spacing");
}
function Gt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function cu(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Gt(t, n), r), {});
}
function uu(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = au(n), s = cu(i, r), a = e[n];
  return lt(e, a, s);
}
function sa(e, t) {
  const n = Bn(e.theme);
  return Object.keys(e).map((r) => uu(e, t, r, n)).reduce(Do, {});
}
function ke(e) {
  return sa(e, Mn);
}
ke.propTypes = process.env.NODE_ENV !== "production" ? Mn.reduce((e, t) => (e[t] = Dt, e), {}) : {};
ke.filterProps = Mn;
function Pe(e) {
  return sa(e, _n);
}
Pe.propTypes = process.env.NODE_ENV !== "production" ? _n.reduce((e, t) => (e[t] = Dt, e), {}) : {};
Pe.filterProps = _n;
process.env.NODE_ENV !== "production" && lu.reduce((e, t) => (e[t] = Dt, e), {});
function Ln(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, s) => t[s] ? Do(i, t[s](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Je(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function tt(e, t) {
  return Ae({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const pu = tt("border", Je), du = tt("borderTop", Je), fu = tt("borderRight", Je), mu = tt("borderBottom", Je), hu = tt("borderLeft", Je), gu = tt("borderColor"), bu = tt("borderTopColor"), yu = tt("borderRightColor"), vu = tt("borderBottomColor"), xu = tt("borderLeftColor"), Tu = tt("outline", Je), Eu = tt("outlineColor"), Fn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Yo(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Gt(t, r)
    });
    return lt(e, e.borderRadius, n);
  }
  return null;
};
Fn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Dt
} : {};
Fn.filterProps = ["borderRadius"];
Ln(pu, du, fu, mu, hu, gu, bu, yu, vu, xu, Fn, Tu, Eu);
const Vn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Yo(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Gt(t, r)
    });
    return lt(e, e.gap, n);
  }
  return null;
};
Vn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Dt
} : {};
Vn.filterProps = ["gap"];
const Un = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Yo(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Gt(t, r)
    });
    return lt(e, e.columnGap, n);
  }
  return null;
};
Un.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Dt
} : {};
Un.filterProps = ["columnGap"];
const zn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Yo(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Gt(t, r)
    });
    return lt(e, e.rowGap, n);
  }
  return null;
};
zn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Dt
} : {};
zn.filterProps = ["rowGap"];
const wu = Ae({
  prop: "gridColumn"
}), Ou = Ae({
  prop: "gridRow"
}), Su = Ae({
  prop: "gridAutoFlow"
}), Cu = Ae({
  prop: "gridAutoColumns"
}), Ru = Ae({
  prop: "gridAutoRows"
}), Nu = Ae({
  prop: "gridTemplateColumns"
}), ku = Ae({
  prop: "gridTemplateRows"
}), Pu = Ae({
  prop: "gridTemplateAreas"
}), $u = Ae({
  prop: "gridArea"
});
Ln(Vn, Un, zn, wu, Ou, Su, Cu, Ru, Nu, ku, Pu, $u);
function ao(e, t) {
  return t === "grey" ? t : e;
}
const Iu = Ae({
  prop: "color",
  themeKey: "palette",
  transform: ao
}), Au = Ae({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ao
}), ju = Ae({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ao
});
Ln(Iu, Au, ju);
function We(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Du = Ae({
  prop: "width",
  transform: We
}), Xr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, s, a, l, c;
      const r = ((a = (s = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[n]) || jn[n];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: We(n)
      };
    };
    return lt(e, e.maxWidth, t);
  }
  return null;
};
Xr.filterProps = ["maxWidth"];
const Mu = Ae({
  prop: "minWidth",
  transform: We
}), _u = Ae({
  prop: "height",
  transform: We
}), Bu = Ae({
  prop: "maxHeight",
  transform: We
}), Lu = Ae({
  prop: "minHeight",
  transform: We
});
Ae({
  prop: "size",
  cssProperty: "width",
  transform: We
});
Ae({
  prop: "size",
  cssProperty: "height",
  transform: We
});
const Fu = Ae({
  prop: "boxSizing"
});
Ln(Du, Xr, Mu, _u, Bu, Lu, Fu);
const Vu = {
  // borders
  border: {
    themeKey: "borders",
    transform: Je
  },
  borderTop: {
    themeKey: "borders",
    transform: Je
  },
  borderRight: {
    themeKey: "borders",
    transform: Je
  },
  borderBottom: {
    themeKey: "borders",
    transform: Je
  },
  borderLeft: {
    themeKey: "borders",
    transform: Je
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
    transform: Je
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Fn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ao
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ao
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ao
  },
  // spacing
  p: {
    style: Pe
  },
  pt: {
    style: Pe
  },
  pr: {
    style: Pe
  },
  pb: {
    style: Pe
  },
  pl: {
    style: Pe
  },
  px: {
    style: Pe
  },
  py: {
    style: Pe
  },
  padding: {
    style: Pe
  },
  paddingTop: {
    style: Pe
  },
  paddingRight: {
    style: Pe
  },
  paddingBottom: {
    style: Pe
  },
  paddingLeft: {
    style: Pe
  },
  paddingX: {
    style: Pe
  },
  paddingY: {
    style: Pe
  },
  paddingInline: {
    style: Pe
  },
  paddingInlineStart: {
    style: Pe
  },
  paddingInlineEnd: {
    style: Pe
  },
  paddingBlock: {
    style: Pe
  },
  paddingBlockStart: {
    style: Pe
  },
  paddingBlockEnd: {
    style: Pe
  },
  m: {
    style: ke
  },
  mt: {
    style: ke
  },
  mr: {
    style: ke
  },
  mb: {
    style: ke
  },
  ml: {
    style: ke
  },
  mx: {
    style: ke
  },
  my: {
    style: ke
  },
  margin: {
    style: ke
  },
  marginTop: {
    style: ke
  },
  marginRight: {
    style: ke
  },
  marginBottom: {
    style: ke
  },
  marginLeft: {
    style: ke
  },
  marginX: {
    style: ke
  },
  marginY: {
    style: ke
  },
  marginInline: {
    style: ke
  },
  marginInlineStart: {
    style: ke
  },
  marginInlineEnd: {
    style: ke
  },
  marginBlock: {
    style: ke
  },
  marginBlockStart: {
    style: ke
  },
  marginBlockEnd: {
    style: ke
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
    style: Vn
  },
  rowGap: {
    style: zn
  },
  columnGap: {
    style: Un
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
    transform: We
  },
  maxWidth: {
    style: Xr
  },
  minWidth: {
    transform: We
  },
  height: {
    transform: We
  },
  maxHeight: {
    transform: We
  },
  minHeight: {
    transform: We
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
}, Go = Vu;
function Uu(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function zu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wu() {
  function e(n, r, i, s) {
    const a = {
      [n]: r,
      theme: i
    }, l = s[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: p,
      style: m
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const g = Dn(i, u) || {};
    return m ? m(a) : lt(a, r, (v) => {
      let f = xn(g, p, v);
      return v === f && typeof v == "string" && (f = xn(g, p, `${n}${v === "default" ? "" : Z(v)}`, v)), c === !1 ? f : {
        [c]: f
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: i = {},
      nested: s
    } = n || {};
    if (!r)
      return null;
    const a = i.unstable_sxConfig ?? Go;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const p = ia(i.breakpoints), m = Object.keys(p);
      let g = p;
      return Object.keys(u).forEach((b) => {
        const v = zu(u[b], i);
        if (v != null)
          if (typeof v == "object")
            if (a[b])
              g = Do(g, e(b, v, i, a));
            else {
              const f = lt({
                theme: i
              }, v, (x) => ({
                [b]: x
              }));
              Uu(f, v) ? g[b] = t({
                sx: v,
                theme: i,
                nested: !0
              }) : g = Do(g, f);
            }
          else
            g = Do(g, e(b, v, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": Vi(i, kr(m, g))
      } : Vi(i, kr(m, g));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const aa = Wu();
aa.filterProps = ["sx"];
const lo = aa, Hu = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Go;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function Jr(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: i
  } = Hu(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return bt(l) ? {
      ...r,
      ...l
    } : r;
  } : s = {
    ...r,
    ...t
  }, {
    ...i,
    sx: s
  };
}
function qu(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Yu = {
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
function Gu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ku = !0, Wi = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Xu = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Ju = /[A-Z]|^ms/g, la = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qr = function(t) {
  return t.charCodeAt(1) === 45;
}, Hi = function(t) {
  return t != null && typeof t != "boolean";
}, hr = /* @__PURE__ */ Gu(function(e) {
  return Qr(e) ? e : e.replace(Ju, "-$&").toLowerCase();
}), Tn = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(la, function(r, i, s) {
          return gt = {
            name: i,
            styles: s,
            next: gt
          }, i;
        });
  }
  return Yu[t] !== 1 && !Qr(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
{
  var Qu = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Zu = ["normal", "none", "initial", "inherit", "unset"], ep = Tn, tp = /^-ms-/, op = /-(.)/g, qi = {};
  Tn = function(t, n) {
    if (t === "content" && (typeof n != "string" || Zu.indexOf(n) === -1 && !Qu.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = ep(t, n);
    return r !== "" && !Qr(t) && t.indexOf("-") !== -1 && qi[t] === void 0 && (qi[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(tp, "ms-").replace(op, function(i, s) {
      return s.toUpperCase();
    }) + "?")), r;
  };
}
var ca = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Fo(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0) {
    if (String(r) === "NO_COMPONENT_SELECTOR")
      throw new Error(ca);
    return r;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return gt = {
          name: i.name,
          styles: i.styles,
          next: gt
        }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            gt = {
              name: a.name,
              styles: a.styles,
              next: gt
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return np(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = gt, u = n(e);
        return gt = c, Fo(e, t, u);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      {
        var p = [], m = n.replace(la, function(v, f, x) {
          var O = "animation" + p.length;
          return p.push("const " + O + " = keyframes`" + x.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + O + "}";
        });
        p.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(p, ["`" + m + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

css\`` + m + "`");
      }
      break;
  }
  var g = n;
  if (t == null)
    return g;
  var b = t[g];
  return b !== void 0 ? b : g;
}
function np(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Fo(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : Hi(l) && (r += hr(s) + ":" + Tn(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Ku)
          throw new Error(ca);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Hi(a[c]) && (r += hr(s) + ":" + Tn(s, a[c]) + ";");
        else {
          var u = Fo(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += hr(s) + ":" + u + ";";
              break;
            }
            default:
              s === "undefined" && console.error(Xu), r += s + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Yi = /label:\s*([^\s;{]+)\s*(;|$)/g, gt;
function rp(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  gt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, i += Fo(n, t, s);
  else {
    var a = s;
    a[0] === void 0 && console.error(Wi), i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += Fo(n, t, e[l]), r) {
      var c = s;
      c[l] === void 0 && console.error(Wi), i += c[l];
    }
  Yi.lastIndex = 0;
  for (var u = "", p; (p = Yi.exec(i)) !== null; )
    u += "-" + p[1];
  var m = qu(i) + u;
  {
    var g = {
      name: m,
      styles: i,
      next: gt,
      toString: function() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return g;
  }
}
var Pr = { exports: {} }, To = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi;
function ip() {
  if (Gi)
    return To;
  Gi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var l in i)
        l !== "key" && (s[l] = i[l]);
    } else
      s = i;
    return i = s.ref, {
      $$typeof: e,
      type: r,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return To.Fragment = t, To.jsx = n, To.jsxs = n, To;
}
var Eo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ki;
function sp() {
  return Ki || (Ki = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h) {
      if (h == null)
        return null;
      if (typeof h == "function")
        return h.$$typeof === U ? null : h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case x:
          return "Fragment";
        case C:
          return "Profiler";
        case O:
          return "StrictMode";
        case S:
          return "Suspense";
        case I:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case f:
            return "Portal";
          case y:
            return h.displayName || "Context";
          case w:
            return (h._context.displayName || "Context") + ".Consumer";
          case E:
            var A = h.render;
            return h = h.displayName, h || (h = A.displayName || A.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case _:
            return A = h.displayName || null, A !== null ? A : e(h.type) || "Memo";
          case D:
            A = h._payload, h = h._init;
            try {
              return e(h(A));
            } catch {
            }
        }
      return null;
    }
    function t(h) {
      return "" + h;
    }
    function n(h) {
      try {
        t(h);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var L = A.error, z = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return L.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(h);
      }
    }
    function r(h) {
      if (h === x)
        return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === D)
        return "<...>";
      try {
        var A = e(h);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var h = d.A;
      return h === null ? null : h.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(h) {
      if (N.call(h, "key")) {
        var A = Object.getOwnPropertyDescriptor(h, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function l(h, A) {
      function L() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var h = e(this.type);
      return V[h] || (V[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function u(h, A, L, z, K, ee) {
      var q = L.ref;
      return h = {
        $$typeof: v,
        type: h,
        key: A,
        props: L,
        _owner: z
      }, (q !== void 0 ? q : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(h, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function p(h, A, L, z, K, ee) {
      var q = A.children;
      if (q !== void 0)
        if (z)
          if (R(q)) {
            for (z = 0; z < q.length; z++)
              m(q[z]);
            Object.freeze && Object.freeze(q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          m(q);
      if (N.call(A, "key")) {
        q = e(h);
        var X = Object.keys(A).filter(function(Y) {
          return Y !== "key";
        });
        z = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", k[q + z] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          q,
          X,
          q
        ), k[q + z] = !0);
      }
      if (q = null, L !== void 0 && (n(L), q = "" + L), a(A) && (n(A.key), q = "" + A.key), "key" in A) {
        L = {};
        for (var Q in A)
          Q !== "key" && (L[Q] = A[Q]);
      } else
        L = A;
      return q && l(
        L,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), u(
        h,
        q,
        L,
        i(),
        K,
        ee
      );
    }
    function m(h) {
      g(h) ? h._store && (h._store.validated = 1) : typeof h == "object" && h !== null && h.$$typeof === D && (h._payload.status === "fulfilled" ? g(h._payload.value) && h._payload.value._store && (h._payload.value._store.validated = 1) : h._store && (h._store.validated = 1));
    }
    function g(h) {
      return typeof h == "object" && h !== null && h.$$typeof === v;
    }
    var b = at, v = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), y = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), d = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, R = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(h) {
        return h();
      }
    };
    var P, V = {}, M = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), B = $(r(s)), k = {};
    Eo.Fragment = x, Eo.jsx = function(h, A, L) {
      var z = 1e4 > d.recentlyCreatedOwnerStacks++;
      return p(
        h,
        A,
        L,
        !1,
        z ? Error("react-stack-top-frame") : M,
        z ? $(r(h)) : B
      );
    }, Eo.jsxs = function(h, A, L) {
      var z = 1e4 > d.recentlyCreatedOwnerStacks++;
      return p(
        h,
        A,
        L,
        !0,
        z ? Error("react-stack-top-frame") : M,
        z ? $(r(h)) : B
      );
    };
  }()), Eo;
}
process.env.NODE_ENV === "production" ? Pr.exports = ip() : Pr.exports = sp();
var j = Pr.exports;
function ap(e) {
  return e == null || Object.keys(e).length === 0;
}
function ua(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (i) => t(ap(i) ? n : i) : t;
  return /* @__PURE__ */ j.jsx(Nc, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (ua.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v7.3.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function pa(e, t) {
  const n = Rc(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function lp(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Xi = [];
function At(e) {
  return Xi[0] = e, rp(Xi);
}
const cp = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function up(e) {
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
    step: r = 5,
    ...i
  } = e, s = cp(t), a = Object.keys(s);
  function l(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n})`;
  }
  function c(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - r / 100}${n})`;
  }
  function u(g, b) {
    const v = a.indexOf(b);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n}) and (max-width:${(v !== -1 && typeof t[a[v]] == "number" ? t[a[v]] : b) - r / 100}${n})`;
  }
  function p(g) {
    return a.indexOf(g) + 1 < a.length ? u(g, a[a.indexOf(g) + 1]) : l(g);
  }
  function m(g) {
    const b = a.indexOf(g);
    return b === 0 ? l(a[1]) : b === a.length - 1 ? c(a[b]) : u(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: p,
    not: m,
    unit: n,
    ...i
  };
}
const pp = {
  borderRadius: 4
}, dp = pp;
function da(e = 8, t = Bn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function fp(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Wn(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, l = up(n), c = da(i);
  let u = _e({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: c,
    shape: {
      ...dp,
      ...s
    }
  }, a);
  return u = eu(u), u.applyStyles = fp, u = t.reduce((p, m) => _e(p, m), u), u.unstable_sxConfig = {
    ...Go,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return lo({
      sx: m,
      theme: this
    });
  }, u;
}
function mp(e) {
  return Object.keys(e).length === 0;
}
function fa(e = null) {
  const t = T.useContext(kc);
  return !t || mp(t) ? e : t;
}
const hp = Wn();
function Hn(e = hp) {
  return fa(e);
}
function gr(e) {
  const t = At(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function ma({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Hn(n), i = t && r[t] || r;
  let s = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(s) ? s = s.map((a) => gr(typeof a == "function" ? a(i) : a)) : s = gr(s)), /* @__PURE__ */ j.jsx(ua, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (ma.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
function gp(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, s = pa("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(lo);
  return /* @__PURE__ */ T.forwardRef(function(c, u) {
    const p = Hn(n), {
      className: m,
      component: g = "div",
      ...b
    } = Jr(c);
    return /* @__PURE__ */ j.jsx(s, {
      as: g,
      ref: u,
      className: ne(m, i ? i(r) : r),
      theme: t && p[t] || p,
      ...b
    });
  });
}
const bp = {
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
function ue(e, t, n = "Mui") {
  const r = bp[t];
  return r ? `${n}-${r}` : `${ea.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ue(e, i, n);
  }), r;
}
function ha(e, t = "") {
  return e.displayName || e.name || t;
}
function Ji(e, t, n) {
  const r = ha(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function yp(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ha(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt.ForwardRef:
          return Ji(e, e.render, "ForwardRef");
        case Yt.Memo:
          return Ji(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ga(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: At(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = At(i.style));
  }), r;
}
const vp = Wn();
function br(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function zt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function xp(e) {
  return e ? (t, n) => n[e] : null;
}
function Tp(e, t, n) {
  e.theme = Op(e.theme) ? n : e.theme[t] || e.theme;
}
function bn(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((i) => bn(e, i, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let i;
    if (r.isProcessed)
      i = n ? zt(r.style, n) : r.style;
    else {
      const {
        variants: s,
        ...a
      } = r;
      i = n ? zt(At(a), n) : a;
    }
    return ba(e, r.variants, [i], n);
  }
  return r != null && r.isProcessed ? n ? zt(At(r.style), n) : r.style : n ? zt(At(r), n) : r;
}
function ba(e, t, n = [], r = void 0) {
  var s;
  let i;
  e:
    for (let a = 0; a < t.length; a += 1) {
      const l = t[a];
      if (typeof l.props == "function") {
        if (i ?? (i = {
          ...e,
          ...e.ownerState,
          ownerState: e.ownerState
        }), !l.props(i))
          continue;
      } else
        for (const c in l.props)
          if (e[c] !== l.props[c] && ((s = e.ownerState) == null ? void 0 : s[c]) !== l.props[c])
            continue e;
      typeof l.style == "function" ? (i ?? (i = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), n.push(r ? zt(At(l.style(i)), r) : l.style(i))) : n.push(r ? zt(At(l.style), r) : l.style);
    }
  return n;
}
function ya(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = vp,
    rootShouldForwardProp: r = br,
    slotShouldForwardProp: i = br
  } = e;
  function s(l) {
    Tp(l, t, n);
  }
  return (l, c = {}) => {
    lp(l, (S) => S.filter((I) => I !== lo));
    const {
      name: u,
      slot: p,
      skipVariantsResolver: m,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = xp(va(p)),
      ...v
    } = c, f = u && u.startsWith("Mui") || p ? "components" : "custom", x = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), O = g || !1;
    let C = br;
    p === "Root" || p === "root" ? C = r : p ? C = i : Sp(l) && (C = void 0);
    const w = pa(l, {
      shouldForwardProp: C,
      label: wp(u, p),
      ...v
    }), y = (S) => {
      if (S.__emotion_real === S)
        return S;
      if (typeof S == "function")
        return function(_) {
          return bn(_, S, _.theme.modularCssLayers ? f : void 0);
        };
      if (bt(S)) {
        const I = ga(S);
        return function(D) {
          return I.variants ? bn(D, I, D.theme.modularCssLayers ? f : void 0) : D.theme.modularCssLayers ? zt(I.style, f) : I.style;
        };
      }
      return S;
    }, E = (...S) => {
      const I = [], _ = S.map(y), D = [];
      if (I.push(s), u && b && D.push(function(N) {
        var V, M;
        const $ = (M = (V = N.theme.components) == null ? void 0 : V[u]) == null ? void 0 : M.styleOverrides;
        if (!$)
          return null;
        const P = {};
        for (const B in $)
          P[B] = bn(N, $[B], N.theme.modularCssLayers ? "theme" : void 0);
        return b(N, P);
      }), u && !x && D.push(function(N) {
        var P, V;
        const R = N.theme, $ = (V = (P = R == null ? void 0 : R.components) == null ? void 0 : P[u]) == null ? void 0 : V.variants;
        return $ ? ba(N, $, [], N.theme.modularCssLayers ? "theme" : void 0) : null;
      }), O || D.push(lo), Array.isArray(_[0])) {
        const d = _.shift(), N = new Array(I.length).fill(""), R = new Array(D.length).fill("");
        let $;
        $ = [...N, ...d, ...R], $.raw = [...N, ...d.raw, ...R], I.unshift($);
      }
      const W = [...I, ..._, ...D], U = w(...W);
      return l.muiName && (U.muiName = l.muiName), process.env.NODE_ENV !== "production" && (U.displayName = Ep(u, p, l)), U;
    };
    return w.withConfig && (E.withConfig = w.withConfig), E;
  };
}
function Ep(e, t, n) {
  return e ? `${e}${Z(t || "")}` : `Styled(${yp(n)})`;
}
function wp(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${va(t || "Root")}`), n;
}
function Op(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Sp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function va(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Cp = ya(), Rp = Cp;
function Vo(e, t, n = !1) {
  const r = {
    ...t
  };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = i;
      if (s === "components" || s === "slots")
        r[s] = {
          ...e[s],
          ...r[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const a = e[s], l = t[s];
        if (!l)
          r[s] = a || {};
        else if (!a)
          r[s] = l;
        else {
          r[s] = {
            ...l
          };
          for (const c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
              const u = c;
              r[s][u] = Vo(a[u], l[u], n);
            }
        }
      } else
        s === "className" && n && t.className ? r.className = ne(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : s === "style" && n && t.style ? r.style = {
          ...e == null ? void 0 : e.style,
          ...t == null ? void 0 : t.style
        } : r[s] === void 0 && (r[s] = e[s]);
    }
  return r;
}
function xa(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Vo(t.components[n].defaultProps, r);
}
function Np({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = Hn(n);
  return r && (i = i[r] || i), xa({
    theme: i,
    name: t,
    props: e
  });
}
const kp = typeof window < "u" ? T.useLayoutEffect : T.useEffect, ct = kp;
function Pp(e, t, n, r, i) {
  const [s, a] = T.useState(() => i && n ? n(e).matches : r ? r(e).matches : t);
  return ct(() => {
    if (!n)
      return;
    const l = n(e), c = () => {
      a(l.matches);
    };
    return c(), l.addEventListener("change", c), () => {
      l.removeEventListener("change", c);
    };
  }, [e, n]), s;
}
const $p = {
  ...T
}, Ta = $p.useSyncExternalStore;
function Ip(e, t, n, r, i) {
  const s = T.useCallback(() => t, [t]), a = T.useMemo(() => {
    if (i && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: p
      } = r(e);
      return () => p;
    }
    return s;
  }, [s, e, r, i, n]), [l, c] = T.useMemo(() => {
    if (n === null)
      return [s, () => () => {
      }];
    const p = n(e);
    return [() => p.matches, (m) => (p.addEventListener("change", m), () => {
      p.removeEventListener("change", m);
    })];
  }, [s, n, e]);
  return Ta(c, l, a);
}
function Ap(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, i = {}) {
    let s = fa();
    s && t && (s = s[t] || s);
    const a = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: l = !1,
      matchMedia: c = a ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: p = !1
    } = xa({
      name: "MuiUseMediaQuery",
      props: i,
      theme: s
    });
    process.env.NODE_ENV !== "production" && typeof r == "function" && s === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let m = typeof r == "function" ? r(s) : r;
    m = m.replace(/^@media( ?)/m, ""), m.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`));
    const b = (Ta !== void 0 ? Ip : Pp)(m, l, c, u, p);
    return process.env.NODE_ENV !== "production" && T.useDebugValue({
      query: m,
      match: b
    }), b;
  };
}
function jp(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Zr(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), jp(e, t, n);
}
function Dp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function jt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return jt(Dp(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : vt(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : vt(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const Mp = (e) => {
  const t = jt(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Po = (e, t) => {
  try {
    return Mp(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function qn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Ea(e) {
  e = jt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, s = r * Math.min(i, 1 - i), a = (u, p = (u + n / 30) % 12) => i - s * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), qn({
    type: l,
    values: c
  });
}
function $r(e) {
  e = jt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? jt(Ea(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Qi(e, t) {
  const n = $r(e), r = $r(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function En(e, t) {
  return e = jt(e), t = Zr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, qn(e);
}
function Bt(e, t, n) {
  try {
    return En(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Yn(e, t) {
  if (e = jt(e), t = Zr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return qn(e);
}
function ye(e, t, n) {
  try {
    return Yn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Gn(e, t) {
  if (e = jt(e), t = Zr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return qn(e);
}
function ve(e, t, n) {
  try {
    return Gn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function _p(e, t = 0.15) {
  return $r(e) > 0.5 ? Yn(e, t) : Gn(e, t);
}
function ln(e, t, n) {
  try {
    return _p(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
const Bp = "exact-prop: ​";
function wa(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Bp]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Lp = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const Kn = () => T.useContext(Lp) ?? !1, Fp = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (o.node, o.object);
function Vp(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? Vo(i.defaultProps, r, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? Vo(i, r, t.components.mergeClassNameAndStyle) : r;
}
function Up({
  props: e,
  name: t
}) {
  const n = T.useContext(Fp);
  return Vp({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Zi = 0;
function zp(e) {
  const [t, n] = T.useState(e), r = e || t;
  return T.useEffect(() => {
    t == null && (Zi += 1, n(`mui-${Zi}`));
  }, [t]), r;
}
const Wp = {
  ...T
}, es = Wp.useId;
function Ko(e) {
  if (es !== void 0) {
    const t = es();
    return e ?? t;
  }
  return zp(e);
}
const ts = {
  theme: void 0
};
function Hp(e) {
  let t, n;
  return function(i) {
    let s = t;
    return (s === void 0 || i.theme !== n) && (ts.theme = i.theme, s = ga(e(ts)), t = s, n = i.theme), s;
  };
}
function qp(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const os = (e, t, n, r = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = n : i && typeof i == "object" && (i[s] = n) : i && typeof i == "object" && (i[s] || (i[s] = r.includes(s) ? [] : {}), i = i[s]);
  });
}, Yp = (e, t, n) => {
  function r(i, s = [], a = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  r(e);
}, Gp = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function yr(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, s = {}, a = {};
  return Yp(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const p = `--${n ? `${n}-` : ""}${l.join("-")}`, m = Gp(l, c);
        Object.assign(i, {
          [p]: m
        }), os(s, l, `var(${p})`, u), os(a, l, `var(${p}, ${m})`, u);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: s,
    varsWithDefaults: a
  };
}
function Kp(e, t = {}) {
  const {
    getSelector: n = O,
    disableCssColorScheme: r,
    colorSchemeSelector: i,
    enableContrastVars: s
  } = t, {
    colorSchemes: a = {},
    components: l,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: p,
    css: m,
    varsWithDefaults: g
  } = yr(u, t);
  let b = g;
  const v = {}, {
    [c]: f,
    ...x
  } = a;
  if (Object.entries(x || {}).forEach(([y, E]) => {
    const {
      vars: S,
      css: I,
      varsWithDefaults: _
    } = yr(E, t);
    b = _e(b, _), v[y] = {
      css: I,
      vars: S
    };
  }), f) {
    const {
      css: y,
      vars: E,
      varsWithDefaults: S
    } = yr(f, t);
    b = _e(b, S), v[c] = {
      css: y,
      vars: E
    };
  }
  function O(y, E) {
    var I, _;
    let S = i;
    if (i === "class" && (S = ".%s"), i === "data" && (S = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (S = `[${i}="%s"]`), y) {
      if (S === "media")
        return e.defaultColorScheme === y ? ":root" : {
          [`@media (prefers-color-scheme: ${((_ = (I = a[y]) == null ? void 0 : I.palette) == null ? void 0 : _.mode) || y})`]: {
            ":root": E
          }
        };
      if (S)
        return e.defaultColorScheme === y ? `:root, ${S.replace("%s", String(y))}` : S.replace("%s", String(y));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let y = {
        ...p
      };
      return Object.entries(v).forEach(([, {
        vars: E
      }]) => {
        y = _e(y, E);
      }), y;
    },
    generateStyleSheets: () => {
      var D, W;
      const y = [], E = e.defaultColorScheme || "light";
      function S(U, d) {
        Object.keys(d).length && y.push(typeof U == "string" ? {
          [U]: {
            ...d
          }
        } : U);
      }
      S(n(void 0, {
        ...m
      }), m);
      const {
        [E]: I,
        ..._
      } = v;
      if (I) {
        const {
          css: U
        } = I, d = (W = (D = a[E]) == null ? void 0 : D.palette) == null ? void 0 : W.mode, N = !r && d ? {
          colorScheme: d,
          ...U
        } : {
          ...U
        };
        S(n(E, {
          ...N
        }), N);
      }
      return Object.entries(_).forEach(([U, {
        css: d
      }]) => {
        var $, P;
        const N = (P = ($ = a[U]) == null ? void 0 : $.palette) == null ? void 0 : P.mode, R = !r && N ? {
          colorScheme: N,
          ...d
        } : {
          ...d
        };
        S(n(U, {
          ...R
        }), R);
      }), s && y.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), y;
    }
  };
}
function Xp(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function vr(e, t) {
  var n, r, i;
  return /* @__PURE__ */ T.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
const Jp = Wn(), Qp = Rp("div", {
  name: "MuiStack",
  slot: "Root"
});
function Zp(e) {
  return Np({
    props: e,
    name: "MuiStack",
    defaultTheme: Jp
  });
}
function ed(e, t) {
  const n = T.Children.toArray(e).filter(Boolean);
  return n.reduce((r, i, s) => (r.push(i), s < n.length - 1 && r.push(/* @__PURE__ */ T.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const td = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], od = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...lt({
      theme: t
    }, mr({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Bn(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = mr({
      values: e.direction,
      base: i
    }), a = mr({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, p) => {
      if (!s[c]) {
        const g = u > 0 ? s[p[u - 1]] : "column";
        s[c] = g;
      }
    }), n = _e(n, lt({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: Gt(r, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${td(u ? s[u] : e.direction)}`]: Gt(r, c)
      }
    }));
  }
  return n = ou(t.breakpoints, n), n;
};
function nd(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Qp,
    useThemeProps: n = Zp,
    componentName: r = "MuiStack"
  } = e, i = () => pe({
    root: ["root"]
  }, (c) => ue(r, c), {}), s = t(od), a = /* @__PURE__ */ T.forwardRef(function(c, u) {
    const p = n(c), m = Jr(p), {
      component: g = "div",
      direction: b = "column",
      spacing: v = 0,
      divider: f,
      children: x,
      className: O,
      useFlexGap: C = !1,
      ...w
    } = m, y = {
      direction: b,
      spacing: v,
      useFlexGap: C
    }, E = i();
    return /* @__PURE__ */ j.jsx(s, {
      as: g,
      ownerState: y,
      ref: u,
      className: ne(E.root, O),
      ...w,
      children: f ? ed(x, f) : x
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: o.node,
    direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
    divider: o.node,
    spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
    sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
  }), a;
}
const rd = {
  black: "#000",
  white: "#fff"
}, Uo = rd, id = {
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
}, sd = id, ad = {
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
}, Zt = ad, ld = {
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
}, eo = ld, cd = {
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
}, wo = cd, ud = {
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
}, to = ud, pd = {
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
}, oo = pd, dd = {
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
}, no = dd;
function Oa() {
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
      paper: Uo.white,
      default: Uo.white
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
const Sa = Oa();
function Ca() {
  return {
    text: {
      primary: Uo.white,
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
      active: Uo.white,
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
const Ir = Ca();
function ns(e, t, n, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Gn(e.main, i) : t === "dark" && (e.dark = Yn(e.main, s)));
}
function rs(e, t, n, r, i) {
  const s = i.light || i, a = i.dark || i * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function fd(e = "light") {
  return e === "dark" ? {
    main: to[200],
    light: to[50],
    dark: to[400]
  } : {
    main: to[700],
    light: to[400],
    dark: to[800]
  };
}
function md(e = "light") {
  return e === "dark" ? {
    main: Zt[200],
    light: Zt[50],
    dark: Zt[400]
  } : {
    main: Zt[500],
    light: Zt[300],
    dark: Zt[700]
  };
}
function hd(e = "light") {
  return e === "dark" ? {
    main: eo[500],
    light: eo[300],
    dark: eo[700]
  } : {
    main: eo[700],
    light: eo[400],
    dark: eo[800]
  };
}
function gd(e = "light") {
  return e === "dark" ? {
    main: oo[400],
    light: oo[300],
    dark: oo[700]
  } : {
    main: oo[700],
    light: oo[500],
    dark: oo[900]
  };
}
function bd(e = "light") {
  return e === "dark" ? {
    main: no[400],
    light: no[300],
    dark: no[700]
  } : {
    main: no[800],
    light: no[500],
    dark: no[900]
  };
}
function yd(e = "light") {
  return e === "dark" ? {
    main: wo[400],
    light: wo[300],
    dark: wo[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: wo[500],
    dark: wo[900]
  };
}
function vd(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ei(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: i,
    ...s
  } = e, a = e.primary || fd(t), l = e.secondary || md(t), c = e.error || hd(t), u = e.info || gd(t), p = e.success || bd(t), m = e.warning || yd(t);
  function g(x) {
    if (i)
      return vd(x);
    const O = Qi(x, Ir.text.primary) >= n ? Ir.text.primary : Sa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = Qi(x, O);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${O} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return O;
  }
  const b = ({
    color: x,
    name: O,
    mainShade: C = 500,
    lightShade: w = 300,
    darkShade: y = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[C] && (x.main = x[C]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : vt(11, O ? ` (${O})` : "", C));
    if (typeof x.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(x.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : vt(12, O ? ` (${O})` : "", JSON.stringify(x.main)));
    return i ? (rs(i, x, "light", w, r), rs(i, x, "dark", y, r)) : (ns(x, "light", w, r), ns(x, "dark", y, r)), x.contrastText || (x.contrastText = g(x.main)), x;
  };
  let v;
  return t === "light" ? v = Oa() : t === "dark" && (v = Ca()), process.env.NODE_ENV !== "production" && (v || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), _e({
    // A collection of common colors.
    common: {
      ...Uo
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: b({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: b({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: b({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: b({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: b({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: b({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: sd,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: b,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...v
  }, s);
}
function xd(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, s] = r;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function Td(e, t) {
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
function Ed(e) {
  return Math.round(e * 1e5) / 1e5;
}
const is = {
  textTransform: "uppercase"
}, ss = '"Roboto", "Helvetica", "Arial", sans-serif';
function wd(e, t) {
  const {
    fontFamily: n = ss,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: p,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = r / 14, b = p || ((x) => `${x / c * g}rem`), v = (x, O, C, w, y) => ({
    fontFamily: n,
    fontWeight: x,
    fontSize: b(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === ss ? {
      letterSpacing: `${Ed(w / O)}em`
    } : {},
    ...y,
    ...u
  }), f = {
    h1: v(i, 96, 1.167, -1.5),
    h2: v(i, 60, 1.2, -0.5),
    h3: v(s, 48, 1.167, 0),
    h4: v(s, 34, 1.235, 0.25),
    h5: v(s, 24, 1.334, 0),
    h6: v(a, 20, 1.6, 0.15),
    subtitle1: v(s, 16, 1.75, 0.15),
    subtitle2: v(a, 14, 1.57, 0.1),
    body1: v(s, 16, 1.5, 0.15),
    body2: v(s, 14, 1.43, 0.15),
    button: v(a, 14, 1.75, 0.4, is),
    caption: v(s, 12, 1.66, 0.4),
    overline: v(s, 12, 2.66, 1, is),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return _e({
    htmlFontSize: c,
    pxToRem: b,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...f
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Od = 0.2, Sd = 0.14, Cd = 0.12;
function Ce(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Od})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Sd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Cd})`].join(",");
}
const Rd = ["none", Ce(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ce(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ce(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ce(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ce(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ce(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ce(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ce(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ce(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ce(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ce(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ce(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ce(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ce(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ce(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ce(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ce(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ce(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ce(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ce(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ce(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ce(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ce(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ce(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Nd = Rd, kd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Pd = {
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
function as(e) {
  return `${Math.round(e)}ms`;
}
function $d(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Id(e) {
  const t = {
    ...kd,
    ...e.easing
  }, n = {
    ...Pd,
    ...e.duration
  };
  return {
    getAutoHeightDuration: $d,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const p = (g) => typeof g == "string", m = (g) => !Number.isNaN(parseFloat(g));
        !p(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(l) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !p(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((p) => `${p} ${typeof a == "string" ? a : as(a)} ${l} ${typeof c == "string" ? c : as(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Ad = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, jd = Ad;
function Dd(e) {
  return bt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ra(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let s = 0; s < i.length; s++) {
      const [a, l] = i[s];
      !Dd(l) || a.startsWith("unstable_") ? delete r[a] : bt(l) && (r[a] = {
        ...l
      }, n(r[a]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ls(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Md = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let n = 0;
  for (let r = 0; r < t.length; r += 1)
    n += +t[r];
  return n;
};
function _d(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : En(t, Md(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${ls(n)})` : Gn(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${ls(n)})` : Yn(t, n);
    }
  });
}
function Ar(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: i,
    palette: s = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    colorSpace: u,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : vt(20));
  const m = ei({
    ...s,
    colorSpace: u
  }), g = Wn(e);
  let b = _e(g, {
    mixins: Td(g.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Nd.slice(),
    typography: wd(m, l),
    transitions: Id(a),
    zIndex: {
      ...jd
    }
  });
  if (b = _e(b, p), b = t.reduce((v, f) => _e(v, f), b), process.env.NODE_ENV !== "production") {
    const v = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (x, O) => {
      let C;
      for (C in x) {
        const w = x[C];
        if (v.includes(C) && Object.keys(w).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const y = ue("", C);
            console.error([`MUI: The \`${O}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${y}' syntax:`, JSON.stringify({
              root: {
                [`&.${y}`]: w
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[C] = {};
        }
      }
    };
    Object.keys(b.components).forEach((x) => {
      const O = b.components[x].styleOverrides;
      O && x.startsWith("Mui") && f(O, x);
    });
  }
  return b.unstable_sxConfig = {
    ...Go,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, b.unstable_sx = function(f) {
    return lo({
      sx: f,
      theme: this
    });
  }, b.toRuntimeSource = Ra, _d(b), b;
}
function jr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Bd = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = jr(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Na(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ka(e) {
  return e === "dark" ? Bd : [];
}
function Ld(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: i,
    ...s
  } = e, a = ei({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...Na(a.mode),
      ...n
    },
    overlays: r || ka(a.mode),
    ...s
  };
}
function Fd(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Vd = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ud = Vd, zd = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let s = i;
  if (i === "class" && (s = ".%s"), i === "data" && (s = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Ud(e.cssVarPrefix).forEach((l) => {
        a[l] = n[l], delete n[l];
      }), s === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: a
        }
      } : s ? {
        [s.replace("%s", t)]: a,
        [`${r}, ${s.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...a
        }
      };
    }
    if (s && s !== "media")
      return `${r}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return r;
};
function Wd(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function $o(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ea(e);
}
function Ot(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Po($o(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Hd(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const mt = (e) => {
  try {
    return e();
  } catch {
  }
}, qd = (e = "mui") => qp(e);
function xr(e, t, n, r, i) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const s = i === "dark" ? "dark" : "light";
  if (!r) {
    t[i] = Ld({
      ...n,
      palette: {
        mode: s,
        ...n == null ? void 0 : n.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...l
  } = Ar({
    ...r,
    palette: {
      mode: s,
      ...n == null ? void 0 : n.palette
    },
    colorSpace: e
  });
  return t[i] = {
    ...n,
    palette: a,
    opacity: {
      ...Na(s),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || ka(s)
  }, l;
}
function Yd(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: l = Fd,
    colorSchemeSelector: c = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...p
  } = e, m = Object.keys(n)[0], g = r || (n.light && m !== "light" ? "light" : m), b = qd(s), {
    [g]: v,
    light: f,
    dark: x,
    ...O
  } = n, C = {
    ...O
  };
  let w = v;
  if ((g === "dark" && !("dark" in n) || g === "light" && !("light" in n)) && (w = !0), !w)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : vt(21, g));
  let y;
  a && (y = "oklch");
  const E = xr(y, C, w, p, g);
  f && !C.light && xr(y, C, f, void 0, "light"), x && !C.dark && xr(y, C, x, void 0, "dark");
  let S = {
    defaultColorScheme: g,
    ...E,
    cssVarPrefix: s,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: b,
    colorSchemes: C,
    font: {
      ...xd(E.typography),
      ...E.font
    },
    spacing: Hd(p.spacing)
  };
  Object.keys(S.colorSchemes).forEach((U) => {
    const d = S.colorSchemes[U].palette, N = ($) => {
      const P = $.split("-"), V = P[1], M = P[2];
      return b($, d[V][M]);
    };
    d.mode === "light" && (F(d.common, "background", "#fff"), F(d.common, "onBackground", "#000")), d.mode === "dark" && (F(d.common, "background", "#000"), F(d.common, "onBackground", "#fff"));
    function R($, P, V) {
      if (y) {
        let M;
        return $ === Bt && (M = `transparent ${((1 - V) * 100).toFixed(0)}%`), $ === ye && (M = `#000 ${(V * 100).toFixed(0)}%`), $ === ve && (M = `#fff ${(V * 100).toFixed(0)}%`), `color-mix(in ${y}, ${P}, ${M})`;
      }
      return $(P, V);
    }
    if (Wd(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      F(d.Alert, "errorColor", R(ye, d.error.light, 0.6)), F(d.Alert, "infoColor", R(ye, d.info.light, 0.6)), F(d.Alert, "successColor", R(ye, d.success.light, 0.6)), F(d.Alert, "warningColor", R(ye, d.warning.light, 0.6)), F(d.Alert, "errorFilledBg", N("palette-error-main")), F(d.Alert, "infoFilledBg", N("palette-info-main")), F(d.Alert, "successFilledBg", N("palette-success-main")), F(d.Alert, "warningFilledBg", N("palette-warning-main")), F(d.Alert, "errorFilledColor", mt(() => d.getContrastText(d.error.main))), F(d.Alert, "infoFilledColor", mt(() => d.getContrastText(d.info.main))), F(d.Alert, "successFilledColor", mt(() => d.getContrastText(d.success.main))), F(d.Alert, "warningFilledColor", mt(() => d.getContrastText(d.warning.main))), F(d.Alert, "errorStandardBg", R(ve, d.error.light, 0.9)), F(d.Alert, "infoStandardBg", R(ve, d.info.light, 0.9)), F(d.Alert, "successStandardBg", R(ve, d.success.light, 0.9)), F(d.Alert, "warningStandardBg", R(ve, d.warning.light, 0.9)), F(d.Alert, "errorIconColor", N("palette-error-main")), F(d.Alert, "infoIconColor", N("palette-info-main")), F(d.Alert, "successIconColor", N("palette-success-main")), F(d.Alert, "warningIconColor", N("palette-warning-main")), F(d.AppBar, "defaultBg", N("palette-grey-100")), F(d.Avatar, "defaultBg", N("palette-grey-400")), F(d.Button, "inheritContainedBg", N("palette-grey-300")), F(d.Button, "inheritContainedHoverBg", N("palette-grey-A100")), F(d.Chip, "defaultBorder", N("palette-grey-400")), F(d.Chip, "defaultAvatarColor", N("palette-grey-700")), F(d.Chip, "defaultIconColor", N("palette-grey-700")), F(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(d.LinearProgress, "primaryBg", R(ve, d.primary.main, 0.62)), F(d.LinearProgress, "secondaryBg", R(ve, d.secondary.main, 0.62)), F(d.LinearProgress, "errorBg", R(ve, d.error.main, 0.62)), F(d.LinearProgress, "infoBg", R(ve, d.info.main, 0.62)), F(d.LinearProgress, "successBg", R(ve, d.success.main, 0.62)), F(d.LinearProgress, "warningBg", R(ve, d.warning.main, 0.62)), F(d.Skeleton, "bg", y ? R(Bt, d.text.primary, 0.11) : `rgba(${N("palette-text-primaryChannel")} / 0.11)`), F(d.Slider, "primaryTrack", R(ve, d.primary.main, 0.62)), F(d.Slider, "secondaryTrack", R(ve, d.secondary.main, 0.62)), F(d.Slider, "errorTrack", R(ve, d.error.main, 0.62)), F(d.Slider, "infoTrack", R(ve, d.info.main, 0.62)), F(d.Slider, "successTrack", R(ve, d.success.main, 0.62)), F(d.Slider, "warningTrack", R(ve, d.warning.main, 0.62));
      const $ = y ? R(ye, d.background.default, 0.6825) : ln(d.background.default, 0.8);
      F(d.SnackbarContent, "bg", $), F(d.SnackbarContent, "color", mt(() => y ? Ir.text.primary : d.getContrastText($))), F(d.SpeedDialAction, "fabHoverBg", ln(d.background.paper, 0.15)), F(d.StepConnector, "border", N("palette-grey-400")), F(d.StepContent, "border", N("palette-grey-400")), F(d.Switch, "defaultColor", N("palette-common-white")), F(d.Switch, "defaultDisabledColor", N("palette-grey-100")), F(d.Switch, "primaryDisabledColor", R(ve, d.primary.main, 0.62)), F(d.Switch, "secondaryDisabledColor", R(ve, d.secondary.main, 0.62)), F(d.Switch, "errorDisabledColor", R(ve, d.error.main, 0.62)), F(d.Switch, "infoDisabledColor", R(ve, d.info.main, 0.62)), F(d.Switch, "successDisabledColor", R(ve, d.success.main, 0.62)), F(d.Switch, "warningDisabledColor", R(ve, d.warning.main, 0.62)), F(d.TableCell, "border", R(ve, R(Bt, d.divider, 1), 0.88)), F(d.Tooltip, "bg", R(Bt, d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      F(d.Alert, "errorColor", R(ve, d.error.light, 0.6)), F(d.Alert, "infoColor", R(ve, d.info.light, 0.6)), F(d.Alert, "successColor", R(ve, d.success.light, 0.6)), F(d.Alert, "warningColor", R(ve, d.warning.light, 0.6)), F(d.Alert, "errorFilledBg", N("palette-error-dark")), F(d.Alert, "infoFilledBg", N("palette-info-dark")), F(d.Alert, "successFilledBg", N("palette-success-dark")), F(d.Alert, "warningFilledBg", N("palette-warning-dark")), F(d.Alert, "errorFilledColor", mt(() => d.getContrastText(d.error.dark))), F(d.Alert, "infoFilledColor", mt(() => d.getContrastText(d.info.dark))), F(d.Alert, "successFilledColor", mt(() => d.getContrastText(d.success.dark))), F(d.Alert, "warningFilledColor", mt(() => d.getContrastText(d.warning.dark))), F(d.Alert, "errorStandardBg", R(ye, d.error.light, 0.9)), F(d.Alert, "infoStandardBg", R(ye, d.info.light, 0.9)), F(d.Alert, "successStandardBg", R(ye, d.success.light, 0.9)), F(d.Alert, "warningStandardBg", R(ye, d.warning.light, 0.9)), F(d.Alert, "errorIconColor", N("palette-error-main")), F(d.Alert, "infoIconColor", N("palette-info-main")), F(d.Alert, "successIconColor", N("palette-success-main")), F(d.Alert, "warningIconColor", N("palette-warning-main")), F(d.AppBar, "defaultBg", N("palette-grey-900")), F(d.AppBar, "darkBg", N("palette-background-paper")), F(d.AppBar, "darkColor", N("palette-text-primary")), F(d.Avatar, "defaultBg", N("palette-grey-600")), F(d.Button, "inheritContainedBg", N("palette-grey-800")), F(d.Button, "inheritContainedHoverBg", N("palette-grey-700")), F(d.Chip, "defaultBorder", N("palette-grey-700")), F(d.Chip, "defaultAvatarColor", N("palette-grey-300")), F(d.Chip, "defaultIconColor", N("palette-grey-300")), F(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(d.LinearProgress, "primaryBg", R(ye, d.primary.main, 0.5)), F(d.LinearProgress, "secondaryBg", R(ye, d.secondary.main, 0.5)), F(d.LinearProgress, "errorBg", R(ye, d.error.main, 0.5)), F(d.LinearProgress, "infoBg", R(ye, d.info.main, 0.5)), F(d.LinearProgress, "successBg", R(ye, d.success.main, 0.5)), F(d.LinearProgress, "warningBg", R(ye, d.warning.main, 0.5)), F(d.Skeleton, "bg", y ? R(Bt, d.text.primary, 0.13) : `rgba(${N("palette-text-primaryChannel")} / 0.13)`), F(d.Slider, "primaryTrack", R(ye, d.primary.main, 0.5)), F(d.Slider, "secondaryTrack", R(ye, d.secondary.main, 0.5)), F(d.Slider, "errorTrack", R(ye, d.error.main, 0.5)), F(d.Slider, "infoTrack", R(ye, d.info.main, 0.5)), F(d.Slider, "successTrack", R(ye, d.success.main, 0.5)), F(d.Slider, "warningTrack", R(ye, d.warning.main, 0.5));
      const $ = y ? R(ve, d.background.default, 0.985) : ln(d.background.default, 0.98);
      F(d.SnackbarContent, "bg", $), F(d.SnackbarContent, "color", mt(() => y ? Sa.text.primary : d.getContrastText($))), F(d.SpeedDialAction, "fabHoverBg", ln(d.background.paper, 0.15)), F(d.StepConnector, "border", N("palette-grey-600")), F(d.StepContent, "border", N("palette-grey-600")), F(d.Switch, "defaultColor", N("palette-grey-300")), F(d.Switch, "defaultDisabledColor", N("palette-grey-600")), F(d.Switch, "primaryDisabledColor", R(ye, d.primary.main, 0.55)), F(d.Switch, "secondaryDisabledColor", R(ye, d.secondary.main, 0.55)), F(d.Switch, "errorDisabledColor", R(ye, d.error.main, 0.55)), F(d.Switch, "infoDisabledColor", R(ye, d.info.main, 0.55)), F(d.Switch, "successDisabledColor", R(ye, d.success.main, 0.55)), F(d.Switch, "warningDisabledColor", R(ye, d.warning.main, 0.55)), F(d.TableCell, "border", R(ye, R(Bt, d.divider, 1), 0.68)), F(d.Tooltip, "bg", R(Bt, d.grey[700], 0.92));
    }
    Ot(d.background, "default"), Ot(d.background, "paper"), Ot(d.common, "background"), Ot(d.common, "onBackground"), Ot(d, "divider"), Object.keys(d).forEach(($) => {
      const P = d[$];
      $ !== "tonalOffset" && P && typeof P == "object" && (P.main && F(d[$], "mainChannel", Po($o(P.main))), P.light && F(d[$], "lightChannel", Po($o(P.light))), P.dark && F(d[$], "darkChannel", Po($o(P.dark))), P.contrastText && F(d[$], "contrastTextChannel", Po($o(P.contrastText))), $ === "text" && (Ot(d[$], "primary"), Ot(d[$], "secondary")), $ === "action" && (P.active && Ot(d[$], "active"), P.selected && Ot(d[$], "selected")));
    });
  }), S = t.reduce((U, d) => _e(U, d), S);
  const I = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: zd(S),
    enableContrastVars: a
  }, {
    vars: _,
    generateThemeVars: D,
    generateStyleSheets: W
  } = Kp(S, I);
  return S.vars = _, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([U, d]) => {
    S[U] = d;
  }), S.generateThemeVars = D, S.generateStyleSheets = W, S.generateSpacing = function() {
    return da(p.spacing, Bn(this));
  }, S.getColorSchemeSelector = Xp(c), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = l, S.unstable_sxConfig = {
    ...Go,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, S.unstable_sx = function(d) {
    return lo({
      sx: d,
      theme: this
    });
  }, S.toRuntimeSource = Ra, S;
}
function cs(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: ei({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Pa(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = n == null ? void 0 : n.mode,
    ...a
  } = e, l = s || "light", c = i == null ? void 0 : i[l], u = {
    ...i,
    ...n ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Ar(e, ...t);
    let p = n;
    "palette" in e || u[l] && (u[l] !== !0 ? p = u[l].palette : l === "dark" && (p = {
      mode: "dark"
    }));
    const m = Ar({
      ...e,
      palette: p
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, cs(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, cs(m, "light", u.light)), m;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), Yd({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Gd = Pa(), ti = Gd, Xo = "$$material";
function go() {
  const e = Hn(ti);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[Xo] || e;
}
function $a(e) {
  return /* @__PURE__ */ j.jsx(ma, {
    ...e,
    defaultTheme: ti,
    themeId: Xo
  });
}
process.env.NODE_ENV !== "production" && ($a.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Ia(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Kd = (e) => Ia(e) && e !== "classes", Ye = Kd, Xd = ya({
  themeId: Xo,
  defaultTheme: ti,
  rootShouldForwardProp: Ye
}), J = Xd;
function Jd(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ j.jsx($a, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
function Qd() {
  return Jr;
}
const Zd = Hp, de = Zd;
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function fe(e) {
  return Up(e);
}
function ef(e) {
  return ue("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const tf = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${Z(t)}`, `fontSize${Z(n)}`]
  };
  return pe(i, ef, r);
}, of = J("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Z(n.color)}`], t[`fontSize${Z(n.fontSize)}`]];
  }
})(de(({
  theme: e
}) => {
  var t, n, r, i, s, a, l, c, u, p, m, g, b, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (r = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
    }),
    variants: [
      {
        props: (f) => !f.hasSvgAsChild,
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
          fontSize: ((a = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : p.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, f]) => f && f.main).map(([f]) => {
        var x, O;
        return {
          props: {
            color: f
          },
          style: {
            color: (O = (x = (e.vars ?? e).palette) == null ? void 0 : x[f]) == null ? void 0 : O.main
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
          color: (v = (b = (e.vars ?? e).palette) == null ? void 0 : b.action) == null ? void 0 : v.disabled
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
})), oi = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: p = !1,
    titleAccess: m,
    viewBox: g = "0 0 24 24",
    ...b
  } = r, v = /* @__PURE__ */ T.isValidElement(i) && i.type === "svg", f = {
    ...r,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: g,
    hasSvgAsChild: v
  }, x = {};
  p || (x.viewBox = g);
  const O = tf(f);
  return /* @__PURE__ */ j.jsxs(of, {
    as: l,
    className: ne(O.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...x,
    ...b,
    ...v && i.props,
    ownerState: f,
    children: [v ? i.props.children : i, m ? /* @__PURE__ */ j.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (oi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
oi.muiName = "SvgIcon";
const us = oi;
function Nt(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ j.jsx(us, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = us.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(n));
}
function ni(e, t = 166) {
  let n;
  function r(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function He(e) {
  return e && e.ownerDocument || document;
}
function ut(e) {
  return He(e).defaultView || window;
}
function ps(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Dr(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: i = "value"
  } = e, {
    current: s
  } = T.useRef(t !== void 0), [a, l] = T.useState(n), c = s ? t : a;
  if (process.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      s !== (t !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${i} state of ${r} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [i, r, t]);
    const {
      current: p
    } = T.useRef(n);
    T.useEffect(() => {
      !s && JSON.stringify(n) !== JSON.stringify(p) && console.error([`MUI: A component is changing the default ${i} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(n)]);
  }
  const u = T.useCallback((p) => {
    s || l(p);
  }, []);
  return [c, u];
}
function Ct(e) {
  const t = T.useRef(e);
  return ct(() => {
    t.current = e;
  }), T.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Me(...e) {
  const t = T.useRef(void 0), n = T.useCallback((r) => {
    const i = e.map((s) => {
      if (s == null)
        return null;
      if (typeof s == "function") {
        const a = s, l = a(r);
        return typeof l == "function" ? l : () => {
          a(null);
        };
      }
      return s.current = r, () => {
        s.current = null;
      };
    });
    return () => {
      i.forEach((s) => s == null ? void 0 : s());
    };
  }, e);
  return T.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function nf(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Aa(e, t) {
  if (!e)
    return t;
  function n(a, l) {
    const c = {};
    return Object.keys(l).forEach((u) => {
      nf(u, l[u]) && typeof a[u] == "function" && (c[u] = (...p) => {
        a[u](...p), l[u](...p);
      });
    }), c;
  }
  if (typeof e == "function" || typeof t == "function")
    return (a) => {
      const l = typeof t == "function" ? t(a) : t, c = typeof e == "function" ? e({
        ...a,
        ...l
      }) : e, u = ne(a == null ? void 0 : a.className, l == null ? void 0 : l.className, c == null ? void 0 : c.className), p = n(c, l);
      return {
        ...l,
        ...c,
        ...p,
        ...!!u && {
          className: u
        },
        ...(l == null ? void 0 : l.style) && (c == null ? void 0 : c.style) && {
          style: {
            ...l.style,
            ...c.style
          }
        },
        ...(l == null ? void 0 : l.sx) && (c == null ? void 0 : c.sx) && {
          sx: [...Array.isArray(l.sx) ? l.sx : [l.sx], ...Array.isArray(c.sx) ? c.sx : [c.sx]]
        }
      };
    };
  const r = t, i = n(e, r), s = ne(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...i,
    ...!!s && {
      className: s
    },
    ...(r == null ? void 0 : r.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...r.style,
        ...e.style
      }
    },
    ...(r == null ? void 0 : r.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
const rf = Nt(/* @__PURE__ */ j.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"
}), "AccountCircleRounded"), ja = Nt([/* @__PURE__ */ j.jsx("path", {
  d: "M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
}, "0"), /* @__PURE__ */ j.jsx("path", {
  d: "m20.65 11.65-2.79-2.79c-.32-.32-.86-.1-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
}, "1")], "LogoutRounded"), sf = Nt(/* @__PURE__ */ j.jsx("path", {
  d: "M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
}), "MenuRounded"), af = Nt(/* @__PURE__ */ j.jsx("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
}), "NotificationsOutlined"), lf = Nt(/* @__PURE__ */ j.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "SearchRounded");
function cf(e) {
  return typeof e.main == "string";
}
function uf(e, t = []) {
  if (!cf(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function pt(e = []) {
  return ([, t]) => t && uf(t, e);
}
function pf(e) {
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
function Da(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = pf(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Ma(e, t, n, r) {
  return e[t] === void 0 ? null : Da(e, t, n, r);
}
function Mr() {
  return null;
}
Ma.isRequired = Da;
Mr.isRequired = Mr;
const df = process.env.NODE_ENV === "production" ? Mr : Ma, ri = df;
function Et(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function ff(e) {
  return ue("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const mf = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return pe(s, ff, i);
}, hf = J("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(de(({
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
}))), _a = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var b;
  const r = fe({
    props: t,
    name: "MuiPaper"
  }), i = go(), {
    className: s,
    component: a = "div",
    elevation: l = 1,
    square: c = !1,
    variant: u = "elevation",
    ...p
  } = r, m = {
    ...r,
    component: a,
    elevation: l,
    square: c,
    variant: u
  }, g = mf(m);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ j.jsx(hf, {
    as: a,
    ownerState: m,
    className: ne(g.root, s),
    ref: n,
    ...p,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (b = i.vars.overlays) == null ? void 0 : b[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${En("#fff", jr(l))}, ${En("#fff", jr(l))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (_a.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Et(ri, (e) => {
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
  square: o.bool,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
const Xn = _a;
function gf(e) {
  return ue("MuiAppBar", e);
}
ce("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const bf = (e) => {
  const {
    color: t,
    position: n,
    classes: r
  } = e, i = {
    root: ["root", `color${Z(t)}`, `position${Z(n)}`]
  };
  return pe(i, gf, r);
}, ds = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, yf = J(Xn, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${Z(n.position)}`], t[`color${Z(n.color)}`]];
  }
})(de(({
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
  }, ...Object.entries(e.palette).filter(pt(["contrastText"])).map(([t]) => ({
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
        backgroundColor: e.vars ? ds(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? ds(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
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
}))), Ba = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiAppBar"
  }), {
    className: i,
    color: s = "primary",
    enableColorOnDark: a = !1,
    position: l = "fixed",
    ...c
  } = r, u = {
    ...r,
    color: s,
    position: l,
    enableColorOnDark: a
  }, p = bf(u);
  return /* @__PURE__ */ j.jsx(yf, {
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: ne(p.root, i, l === "fixed" && "mui-fixed"),
    ref: n,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (Ba.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]), o.string]),
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: o.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: o.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const vf = Ba, xf = Nt(/* @__PURE__ */ j.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Tf(e) {
  return ue("MuiAvatar", e);
}
ce("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
function wn(e) {
  return typeof e == "string";
}
function La(e, t, n) {
  return e === void 0 || wn(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Fa(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Va(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function fs(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Ua(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const b = ne(n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), v = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, f = {
      ...n,
      ...i,
      ...r
    };
    return b.length > 0 && (f.className = b), Object.keys(v).length > 0 && (f.style = v), {
      props: f,
      internalRef: void 0
    };
  }
  const a = Va({
    ...i,
    ...r
  }), l = fs(r), c = fs(i), u = t(a), p = ne(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), m = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, g = {
    ...u,
    ...n,
    ...c,
    ...l
  };
  return p.length > 0 && (g.className = p), Object.keys(m).length > 0 && (g.style = m), {
    props: g,
    internalRef: u.ref
  };
}
function xe(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: i,
    externalForwardedProps: s,
    internalForwardedProps: a,
    shouldForwardComponentProp: l = !1,
    ...c
  } = t, {
    component: u,
    slots: p = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...g
  } = s, b = p[e] || r, v = Fa(m[e], i), {
    props: {
      component: f,
      ...x
    },
    internalRef: O
  } = Ua({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: v
  }), C = Me(O, v == null ? void 0 : v.ref, t.ref), w = e === "root" ? f || u : f, y = La(b, {
    ...e === "root" && !u && !p[e] && a,
    ...e !== "root" && !p[e] && a,
    ...x,
    ...w && !l && {
      as: w
    },
    ...w && l && {
      component: w
    },
    ref: C
  }, i);
  return [b, y];
}
const Ef = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: r
  } = e;
  return pe({
    root: ["root", n, r && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Tf, t);
}, wf = J("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
  }
})(de(({
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
}))), Of = J("img", {
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
}), Sf = J(xf, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function Cf({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: r
}) {
  const [i, s] = T.useState(!1);
  return T.useEffect(() => {
    if (!n && !r)
      return;
    s(!1);
    let a = !0;
    const l = new Image();
    return l.onload = () => {
      a && s("loaded");
    }, l.onerror = () => {
      a && s("error");
    }, l.crossOrigin = e, l.referrerPolicy = t, l.src = n, r && (l.srcset = r), () => {
      a = !1;
    };
  }, [e, t, n, r]), i;
}
const za = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: i,
    children: s,
    className: a,
    component: l = "div",
    slots: c = {},
    slotProps: u = {},
    imgProps: p,
    sizes: m,
    src: g,
    srcSet: b,
    variant: v = "circular",
    ...f
  } = r;
  let x = null;
  const O = {
    ...r,
    component: l,
    variant: v
  }, C = Cf({
    ...p,
    ...typeof u.img == "function" ? u.img(O) : u.img,
    src: g,
    srcSet: b
  }), w = g || b, y = w && C !== "error";
  O.colorDefault = !y, delete O.ownerState;
  const E = Ef(O), [S, I] = xe("root", {
    ref: n,
    className: ne(E.root, a),
    elementType: wf,
    externalForwardedProps: {
      slots: c,
      slotProps: u,
      component: l,
      ...f
    },
    ownerState: O
  }), [_, D] = xe("img", {
    className: E.img,
    elementType: Of,
    externalForwardedProps: {
      slots: c,
      slotProps: {
        img: {
          ...p,
          ...u.img
        }
      }
    },
    additionalProps: {
      alt: i,
      src: g,
      srcSet: b,
      sizes: m
    },
    ownerState: O
  }), [W, U] = xe("fallback", {
    className: E.fallback,
    elementType: Sf,
    externalForwardedProps: {
      slots: c,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: O
  });
  return y ? x = /* @__PURE__ */ j.jsx(_, {
    ...D
  }) : s || s === 0 ? x = s : w && i ? x = i[0] : x = /* @__PURE__ */ j.jsx(W, {
    ...U
  }), /* @__PURE__ */ j.jsx(S, {
    ...I,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (za.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: o.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  imgProps: o.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: o.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    fallback: o.oneOfType([o.func, o.object]),
    img: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    fallback: o.elementType,
    img: o.elementType,
    root: o.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: o.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: o.oneOfType([o.oneOf(["circular", "rounded", "square"]), o.string])
});
const Wa = za;
function Ha(e) {
  const t = T.useRef({});
  return T.useEffect(() => {
    t.current = e;
  }), t.current;
}
function Rf(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: r = 99,
    showZero: i = !1
  } = e, s = Ha({
    badgeContent: t,
    max: r
  });
  let a = n;
  n === !1 && t === 0 && !i && (a = !0);
  const {
    badgeContent: l,
    max: c = r
  } = a ? s : e, u = l && Number(l) > c ? `${c}+` : l;
  return {
    badgeContent: l,
    invisible: a,
    max: c,
    displayValue: u
  };
}
function Nf(e) {
  return ue("MuiBadge", e);
}
const kf = ce("MuiBadge", [
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
]), $t = kf, Tr = 10, Er = 4, Pf = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: r,
    overlap: i,
    variant: s,
    classes: a = {}
  } = e, l = {
    root: ["root"],
    badge: ["badge", s, r && "invisible", `anchorOrigin${Z(n.vertical)}${Z(n.horizontal)}`, `anchorOrigin${Z(n.vertical)}${Z(n.horizontal)}${Z(i)}`, `overlap${Z(i)}`, t !== "default" && `color${Z(t)}`]
  };
  return pe(l, Nf, a);
}, $f = J("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), If = J("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${Z(n.anchorOrigin.vertical)}${Z(n.anchorOrigin.horizontal)}${Z(n.overlap)}`], n.color !== "default" && t[`color${Z(n.color)}`], n.invisible && t.invisible];
  }
})(de(({
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
  minWidth: Tr * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: Tr * 2,
  borderRadius: Tr,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(e.palette).filter(pt(["contrastText"])).map(([t]) => ({
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
      borderRadius: Er,
      height: Er * 2,
      minWidth: Er * 2,
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
      [`&.${$t.invisible}`]: {
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
      [`&.${$t.invisible}`]: {
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
      [`&.${$t.invisible}`]: {
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
      [`&.${$t.invisible}`]: {
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
      [`&.${$t.invisible}`]: {
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
      [`&.${$t.invisible}`]: {
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
      [`&.${$t.invisible}`]: {
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
      [`&.${$t.invisible}`]: {
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
function ms(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
  };
}
const qa = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiBadge"
  }), {
    anchorOrigin: i,
    className: s,
    classes: a,
    component: l,
    components: c = {},
    componentsProps: u = {},
    children: p,
    overlap: m = "rectangular",
    color: g = "default",
    invisible: b = !1,
    max: v = 99,
    badgeContent: f,
    slots: x,
    slotProps: O,
    showZero: C = !1,
    variant: w = "standard",
    ...y
  } = r, {
    badgeContent: E,
    invisible: S,
    max: I,
    displayValue: _
  } = Rf({
    max: v,
    invisible: b,
    badgeContent: f,
    showZero: C
  }), D = Ha({
    anchorOrigin: ms(i),
    color: g,
    overlap: m,
    variant: w,
    badgeContent: f
  }), W = S || E == null && w !== "dot", {
    color: U = g,
    overlap: d = m,
    anchorOrigin: N,
    variant: R = w
  } = W ? D : r, $ = ms(N), P = R !== "dot" ? _ : void 0, V = {
    ...r,
    badgeContent: E,
    invisible: W,
    max: I,
    displayValue: P,
    showZero: C,
    anchorOrigin: $,
    color: U,
    overlap: d,
    variant: R
  }, M = Pf(V), B = {
    slots: {
      root: (x == null ? void 0 : x.root) ?? c.Root,
      badge: (x == null ? void 0 : x.badge) ?? c.Badge
    },
    slotProps: {
      root: (O == null ? void 0 : O.root) ?? u.root,
      badge: (O == null ? void 0 : O.badge) ?? u.badge
    }
  }, [k, h] = xe("root", {
    elementType: $f,
    externalForwardedProps: {
      ...B,
      ...y
    },
    ownerState: V,
    className: ne(M.root, s),
    ref: n,
    additionalProps: {
      as: l
    }
  }), [A, L] = xe("badge", {
    elementType: If,
    externalForwardedProps: B,
    ownerState: V,
    className: M.badge
  });
  return /* @__PURE__ */ j.jsxs(k, {
    ...h,
    children: [p, /* @__PURE__ */ j.jsx(A, {
      ...L,
      children: P
    })]
  });
});
process.env.NODE_ENV !== "production" && (qa.propTypes = {
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
  anchorOrigin: o.shape({
    horizontal: o.oneOf(["left", "right"]),
    vertical: o.oneOf(["bottom", "top"])
  }),
  /**
   * The content rendered within the badge.
   */
  badgeContent: o.node,
  /**
   * The badge will be added relative to this node.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Badge: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    badge: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: o.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: o.number,
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap: o.oneOf(["circular", "rectangular"]),
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: o.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    badge: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    badge: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: o.oneOfType([o.oneOf(["dot", "standard"]), o.string])
});
const Ya = qa, Af = ce("MuiBox", ["root"]), jf = Af, Df = Pa(), Ga = gp({
  themeId: Xo,
  defaultTheme: Df,
  defaultClassName: jf.root,
  generateClassName: ea.generate
});
process.env.NODE_ENV !== "production" && (Ga.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Io = Ga;
function Mf(e) {
  return ue("MuiDivider", e);
}
const _f = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), hs = _f, Bf = (e) => {
  const {
    absolute: t,
    children: n,
    classes: r,
    flexItem: i,
    light: s,
    orientation: a,
    textAlign: l,
    variant: c
  } = e;
  return pe({
    root: ["root", t && "absolute", c, s && "light", a === "vertical" && "vertical", i && "flexItem", n && "withChildren", n && a === "vertical" && "withChildrenVertical", l === "right" && a !== "vertical" && "textAlignRight", l === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, Mf, r);
}, Lf = J("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(de(({
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
}))), Ff = J("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(de(({
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
}))), On = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: i = !1,
    children: s,
    className: a,
    orientation: l = "horizontal",
    component: c = s || l === "vertical" ? "div" : "hr",
    flexItem: u = !1,
    light: p = !1,
    role: m = c !== "hr" ? "separator" : void 0,
    textAlign: g = "center",
    variant: b = "fullWidth",
    ...v
  } = r, f = {
    ...r,
    absolute: i,
    component: c,
    flexItem: u,
    light: p,
    orientation: l,
    role: m,
    textAlign: g,
    variant: b
  }, x = Bf(f);
  return /* @__PURE__ */ j.jsx(Lf, {
    as: c,
    className: ne(x.root, a),
    role: m,
    ref: n,
    ownerState: f,
    "aria-orientation": m === "separator" && (c !== "hr" || l === "vertical") ? l : void 0,
    ...v,
    children: s ? /* @__PURE__ */ j.jsx(Ff, {
      className: x.wrapper,
      ownerState: f,
      children: s
    }) : null
  });
});
On && (On.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (On.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: o.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  light: o.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: o.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: o.oneOfType([o.oneOf(["fullWidth", "inset", "middle"]), o.string])
});
const Ht = On, Vf = o.oneOfType([o.func, o.object]), dt = Vf;
function Uf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function zf(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Uf(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ii = Et(o.elementType, zf);
function Sn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const gs = {};
function Ka(e, t) {
  const n = T.useRef(gs);
  return n.current === gs && (n.current = e(t)), n;
}
class Cn {
  constructor() {
    vo(this, "mountEffect", () => {
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
    return new Cn();
  }
  static use() {
    const t = Ka(Cn.create).current, [n, r] = T.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, T.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Hf(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Wf() {
  return Cn.use();
}
function Hf() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function _r() {
  return _r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _r.apply(null, arguments);
}
function Xa(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1)
        continue;
      n[r] = e[r];
    }
  return n;
}
function Br(e, t) {
  return Br = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Br(e, t);
}
function Ja(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Br(e, t);
}
const bs = {
  disabled: !1
};
var qf = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const Rn = at.createContext(null);
var Yf = function(t) {
  return t.scrollTop;
}, Ao = "unmounted", Vt = "exited", Ut = "entering", io = "entered", Lr = "exiting", kt = /* @__PURE__ */ function(e) {
  Ja(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = Vt, s.appearStatus = Ut) : c = io : r.unmountOnExit || r.mountOnEnter ? c = Ao : c = Vt, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Ao ? {
      status: Vt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Ut && a !== io && (s = Ut) : (a === Ut || a === io) && (s = Lr);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === Ut) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : nn.findDOMNode(this);
          a && Yf(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Vt && this.setState({
        status: Ao
      });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [nn.findDOMNode(this), l], u = c[0], p = c[1], m = this.getTimeouts(), g = l ? m.appear : m.enter;
    if (!i && !a || bs.disabled) {
      this.safeSetState({
        status: io
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, p), this.safeSetState({
      status: Ut
    }, function() {
      s.props.onEntering(u, p), s.onTransitionEnd(g, function() {
        s.safeSetState({
          status: io
        }, function() {
          s.props.onEntered(u, p);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : nn.findDOMNode(this);
    if (!s || bs.disabled) {
      this.safeSetState({
        status: Vt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Lr
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Vt
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, n.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : nn.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], p = c[1];
      this.props.addEndListener(u, p);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Ao)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = Xa(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ at.createElement(Rn.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : at.cloneElement(at.Children.only(a), l))
    );
  }, t;
}(at.Component);
kt.contextType = Rn;
kt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, n, r, i, s) {
      var a = e[t];
      return o.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, s);
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
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
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
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
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
    var n = qf;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(i));
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
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function ro() {
}
kt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ro,
  onEntering: ro,
  onEntered: ro,
  onExit: ro,
  onExiting: ro,
  onExited: ro
};
kt.UNMOUNTED = Ao;
kt.EXITED = Vt;
kt.ENTERING = Ut;
kt.ENTERED = io;
kt.EXITING = Lr;
const si = kt;
function Gf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ai(e, t) {
  var n = function(s) {
    return t && hn(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Tc.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function Kf(e, t) {
  e = e || {}, t = t || {};
  function n(p) {
    return p in t ? t[p] : e[p];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (r[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var u = r[c][a];
        l[r[c][a]] = n(u);
      }
    l[c] = n(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = n(i[a]);
  return l;
}
function Wt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Xf(e, t) {
  return ai(e.children, function(n) {
    return gn(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Wt(n, "appear", e),
      enter: Wt(n, "enter", e),
      exit: Wt(n, "exit", e)
    });
  });
}
function Jf(e, t, n) {
  var r = ai(e.children), i = Kf(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (hn(a)) {
      var l = s in t, c = s in r, u = t[s], p = hn(u) && !u.props.in;
      c && (!l || p) ? i[s] = gn(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: Wt(a, "exit", e),
        enter: Wt(a, "enter", e)
      }) : !c && l && !p ? i[s] = gn(a, {
        in: !1
      }) : c && l && hn(u) && (i[s] = gn(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: Wt(a, "exit", e),
        enter: Wt(a, "enter", e)
      }));
    }
  }), i;
}
var Qf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Zf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, li = /* @__PURE__ */ function(e) {
  Ja(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(Gf(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
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
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Xf(i, l) : Jf(i, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = ai(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = _r({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = Xa(i, ["component", "childFactory"]), c = this.state.contextValue, u = Qf(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ at.createElement(Rn.Provider, {
      value: c
    }, u) : /* @__PURE__ */ at.createElement(Rn.Provider, {
      value: c
    }, /* @__PURE__ */ at.createElement(s, l, u));
  }, t;
}(at.Component);
li.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
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
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
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
  childFactory: o.func
} : {};
li.defaultProps = Zf;
const em = li, tm = [];
function om(e) {
  T.useEffect(e, tm);
}
class Jn {
  constructor() {
    vo(this, "currentId", null);
    vo(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    vo(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Jn();
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
function so() {
  const e = Ka(Jn.create).current;
  return om(e.disposeEffect), e;
}
function Qa(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [p, m] = T.useState(!1), g = ne(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), b = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, v = ne(n.child, p && n.childLeaving, r && n.childPulsate);
  return !l && !p && m(!0), T.useEffect(() => {
    if (!l && c != null) {
      const f = setTimeout(c, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ j.jsx("span", {
    className: g,
    style: b,
    children: /* @__PURE__ */ j.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Qa.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const nm = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Xe = nm, Fr = 550, rm = 80, im = qo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, sm = qo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, am = qo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, lm = J("span", {
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
}), cm = J(Qa, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Xe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${im};
    animation-duration: ${Fr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Xe.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Xe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Xe.childLeaving} {
    opacity: 0;
    animation-name: ${sm};
    animation-duration: ${Fr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Xe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${am};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Za = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a,
    ...l
  } = r, [c, u] = T.useState([]), p = T.useRef(0), m = T.useRef(null);
  T.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const g = T.useRef(!1), b = so(), v = T.useRef(null), f = T.useRef(null), x = T.useCallback((y) => {
    const {
      pulsate: E,
      rippleX: S,
      rippleY: I,
      rippleSize: _,
      cb: D
    } = y;
    u((W) => [...W, /* @__PURE__ */ j.jsx(cm, {
      classes: {
        ripple: ne(s.ripple, Xe.ripple),
        rippleVisible: ne(s.rippleVisible, Xe.rippleVisible),
        ripplePulsate: ne(s.ripplePulsate, Xe.ripplePulsate),
        child: ne(s.child, Xe.child),
        childLeaving: ne(s.childLeaving, Xe.childLeaving),
        childPulsate: ne(s.childPulsate, Xe.childPulsate)
      },
      timeout: Fr,
      pulsate: E,
      rippleX: S,
      rippleY: I,
      rippleSize: _
    }, p.current)]), p.current += 1, m.current = D;
  }, [s]), O = T.useCallback((y = {}, E = {}, S = () => {
  }) => {
    const {
      pulsate: I = !1,
      center: _ = i || E.pulsate,
      fakeElement: D = !1
      // For test purposes
    } = E;
    if ((y == null ? void 0 : y.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (g.current = !0);
    const W = D ? null : f.current, U = W ? W.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let d, N, R;
    if (_ || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches)
      d = Math.round(U.width / 2), N = Math.round(U.height / 2);
    else {
      const {
        clientX: $,
        clientY: P
      } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      d = Math.round($ - U.left), N = Math.round(P - U.top);
    }
    if (_)
      R = Math.sqrt((2 * U.width ** 2 + U.height ** 2) / 3), R % 2 === 0 && (R += 1);
    else {
      const $ = Math.max(Math.abs((W ? W.clientWidth : 0) - d), d) * 2 + 2, P = Math.max(Math.abs((W ? W.clientHeight : 0) - N), N) * 2 + 2;
      R = Math.sqrt($ ** 2 + P ** 2);
    }
    y != null && y.touches ? v.current === null && (v.current = () => {
      x({
        pulsate: I,
        rippleX: d,
        rippleY: N,
        rippleSize: R,
        cb: S
      });
    }, b.start(rm, () => {
      v.current && (v.current(), v.current = null);
    })) : x({
      pulsate: I,
      rippleX: d,
      rippleY: N,
      rippleSize: R,
      cb: S
    });
  }, [i, x, b]), C = T.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), w = T.useCallback((y, E) => {
    if (b.clear(), (y == null ? void 0 : y.type) === "touchend" && v.current) {
      v.current(), v.current = null, b.start(0, () => {
        w(y, E);
      });
      return;
    }
    v.current = null, u((S) => S.length > 0 ? S.slice(1) : S), m.current = E;
  }, [b]);
  return T.useImperativeHandle(n, () => ({
    pulsate: C,
    start: O,
    stop: w
  }), [C, O, w]), /* @__PURE__ */ j.jsx(lm, {
    className: ne(Xe.root, s.root, a),
    ref: f,
    ...l,
    children: /* @__PURE__ */ j.jsx(em, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Za.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
const um = Za;
function pm(e) {
  return ue("MuiButtonBase", e);
}
const dm = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), fm = dm, mm = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, a = pe({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, pm, i);
  return n && r && (a.root += ` ${r}`), a;
}, hm = J("button", {
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
  [`&.${fm.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), el = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: p = !1,
    disableTouchRipple: m = !1,
    focusRipple: g = !1,
    focusVisibleClassName: b,
    LinkComponent: v = "a",
    onBlur: f,
    onClick: x,
    onContextMenu: O,
    onDragLeave: C,
    onFocus: w,
    onFocusVisible: y,
    onKeyDown: E,
    onKeyUp: S,
    onMouseDown: I,
    onMouseLeave: _,
    onMouseUp: D,
    onTouchEnd: W,
    onTouchMove: U,
    onTouchStart: d,
    tabIndex: N = 0,
    TouchRippleProps: R,
    touchRippleRef: $,
    type: P,
    ...V
  } = r, M = T.useRef(null), B = Wf(), k = Me(B.ref, $), [h, A] = T.useState(!1);
  u && h && A(!1), T.useImperativeHandle(i, () => ({
    focusVisible: () => {
      A(!0), M.current.focus();
    }
  }), []);
  const L = B.shouldMount && !p && !u;
  T.useEffect(() => {
    h && g && !p && B.pulsate();
  }, [p, g, h, B]);
  const z = St(B, "start", I, m), K = St(B, "stop", O, m), ee = St(B, "stop", C, m), q = St(B, "stop", D, m), X = St(B, "stop", (oe) => {
    h && oe.preventDefault(), _ && _(oe);
  }, m), Q = St(B, "start", d, m), Y = St(B, "stop", W, m), te = St(B, "stop", U, m), H = St(B, "stop", (oe) => {
    Sn(oe.target) || A(!1), f && f(oe);
  }, !1), se = Ct((oe) => {
    M.current || (M.current = oe.currentTarget), Sn(oe.target) && (A(!0), y && y(oe)), w && w(oe);
  }), ie = () => {
    const oe = M.current;
    return c && c !== "button" && !(oe.tagName === "A" && oe.href);
  }, me = Ct((oe) => {
    g && !oe.repeat && h && oe.key === " " && B.stop(oe, () => {
      B.start(oe);
    }), oe.target === oe.currentTarget && ie() && oe.key === " " && oe.preventDefault(), E && E(oe), oe.target === oe.currentTarget && ie() && oe.key === "Enter" && !u && (oe.preventDefault(), x && x(oe));
  }), Ie = Ct((oe) => {
    g && oe.key === " " && h && !oe.defaultPrevented && B.stop(oe, () => {
      B.pulsate(oe);
    }), S && S(oe), x && oe.target === oe.currentTarget && ie() && oe.key === " " && !oe.defaultPrevented && x(oe);
  });
  let Re = c;
  Re === "button" && (V.href || V.to) && (Re = v);
  const Se = {};
  Re === "button" ? (Se.type = P === void 0 ? "button" : P, Se.disabled = u) : (!V.href && !V.to && (Se.role = "button"), u && (Se["aria-disabled"] = u));
  const je = Me(n, M), Oe = {
    ...r,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: p,
    disableTouchRipple: m,
    focusRipple: g,
    tabIndex: N,
    focusVisible: h
  }, we = mm(Oe);
  return /* @__PURE__ */ j.jsxs(hm, {
    as: Re,
    className: ne(we.root, l),
    ownerState: Oe,
    onBlur: H,
    onClick: x,
    onContextMenu: K,
    onFocus: se,
    onKeyDown: me,
    onKeyUp: Ie,
    onMouseDown: z,
    onMouseLeave: X,
    onMouseUp: q,
    onDragLeave: ee,
    onTouchEnd: Y,
    onTouchMove: te,
    onTouchStart: Q,
    ref: je,
    tabIndex: u ? -1 : N,
    type: P,
    ...Se,
    ...V,
    children: [a, L ? /* @__PURE__ */ j.jsx(um, {
      ref: k,
      center: s,
      ...R
    }) : null]
  });
});
function St(e, t, n, r = !1) {
  return Ct((i) => (n && n(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (el.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: dt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ii,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
const ci = el;
function gm(e) {
  return ue("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const it = 44, Vr = qo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ur = qo`
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
`, bm = typeof Vr != "string" ? Zs`
        animation: ${Vr} 1.4s linear infinite;
      ` : null, ym = typeof Ur != "string" ? Zs`
        animation: ${Ur} 1.4s ease-in-out infinite;
      ` : null, vm = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: i
  } = e, s = {
    root: ["root", n, `color${Z(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${Z(n)}`, i && "circleDisableShrink"]
  };
  return pe(s, gm, t);
}, xm = J("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${Z(n.color)}`]];
  }
})(de(({
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
    style: bm || {
      animation: `${Vr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(pt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Tm = J("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Em = J("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${Z(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(de(({
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
    style: ym || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Ur} 1.4s ease-in-out infinite`
    }
  }]
}))), wm = J("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(de(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), tl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: s = "primary",
    disableShrink: a = !1,
    enableTrackSlot: l = !1,
    size: c = 40,
    style: u,
    thickness: p = 3.6,
    value: m = 0,
    variant: g = "indeterminate",
    ...b
  } = r, v = {
    ...r,
    color: s,
    disableShrink: a,
    size: c,
    thickness: p,
    value: m,
    variant: g,
    enableTrackSlot: l
  }, f = vm(v), x = {}, O = {}, C = {};
  if (g === "determinate") {
    const w = 2 * Math.PI * ((it - p) / 2);
    x.strokeDasharray = w.toFixed(3), C["aria-valuenow"] = Math.round(m), x.strokeDashoffset = `${((100 - m) / 100 * w).toFixed(3)}px`, O.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ j.jsx(xm, {
    className: ne(f.root, i),
    style: {
      width: c,
      height: c,
      ...O,
      ...u
    },
    ownerState: v,
    ref: n,
    role: "progressbar",
    ...C,
    ...b,
    children: /* @__PURE__ */ j.jsxs(Tm, {
      className: f.svg,
      ownerState: v,
      viewBox: `${it / 2} ${it / 2} ${it} ${it}`,
      children: [l ? /* @__PURE__ */ j.jsx(wm, {
        className: f.track,
        ownerState: v,
        cx: it,
        cy: it,
        r: (it - p) / 2,
        fill: "none",
        strokeWidth: p,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ j.jsx(Em, {
        className: f.circle,
        style: x,
        ownerState: v,
        cx: it,
        cy: it,
        r: (it - p) / 2,
        fill: "none",
        strokeWidth: p
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (tl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Et(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */
  enableTrackSlot: o.bool,
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: o.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: o.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["determinate", "indeterminate"])
});
const ol = tl;
function Om(e) {
  return ue("MuiIconButton", e);
}
const Sm = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), ys = Sm, Cm = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: s,
    loading: a
  } = e, l = {
    root: ["root", a && "loading", n && "disabled", r !== "default" && `color${Z(r)}`, i && `edge${Z(i)}`, `size${Z(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return pe(l, Om, t);
}, Rm = J(ci, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${Z(n.color)}`], n.edge && t[`edge${Z(n.edge)}`], t[`size${Z(n.size)}`]];
  }
})(de(({
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
})), de(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(pt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(pt()).map(([t]) => ({
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
  [`&.${ys.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${ys.loading}`]: {
    color: "transparent"
  }
}))), Nm = J("span", {
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
})), nl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: p = "medium",
    id: m,
    loading: g = null,
    loadingIndicator: b,
    ...v
  } = r, f = Ko(m), x = b ?? /* @__PURE__ */ j.jsx(ol, {
    "aria-labelledby": f,
    color: "inherit",
    size: 16
  }), O = {
    ...r,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    loading: g,
    loadingIndicator: x,
    size: p
  }, C = Cm(O);
  return /* @__PURE__ */ j.jsxs(Rm, {
    id: g ? f : m,
    className: ne(C.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c || g,
    ref: n,
    ...v,
    ownerState: O,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ j.jsx("span", {
      className: C.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ j.jsx(Nm, {
        className: C.loadingIndicator,
        ownerState: O,
        children: g && x
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (nl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Et(o.node, (e) => T.Children.toArray(e.children).some((n) => /* @__PURE__ */ T.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: o.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: o.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: o.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const zo = nl;
function km(e) {
  return ue("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Pm = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, $m = Qd(), Im = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${Z(t)}`, n && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return pe(l, km, a);
}, Am = J("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${Z(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(de(({
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
    }, ...Object.entries(e.typography).filter(([n, r]) => n !== "inherit" && r && typeof r == "object").map(([n, r]) => ({
      props: {
        variant: n
      },
      style: r
    })), ...Object.entries(e.palette).filter(pt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${Z(n)}`
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
})), vs = {
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
}, rl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    color: r,
    ...i
  } = fe({
    props: t,
    name: "MuiTypography"
  }), s = !Pm[r], a = $m({
    ...i,
    ...s && {
      color: r
    }
  }), {
    align: l = "inherit",
    className: c,
    component: u,
    gutterBottom: p = !1,
    noWrap: m = !1,
    paragraph: g = !1,
    variant: b = "body1",
    variantMapping: v = vs,
    ...f
  } = a, x = {
    ...a,
    align: l,
    color: r,
    className: c,
    component: u,
    gutterBottom: p,
    noWrap: m,
    paragraph: g,
    variant: b,
    variantMapping: v
  }, O = u || (g ? "p" : v[b] || vs[b]) || "span", C = Im(x);
  return /* @__PURE__ */ j.jsx(Am, {
    as: O,
    ref: n,
    className: ne(C.root, c),
    ...f,
    ownerState: x,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (rl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: o.bool,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
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
  variantMapping: o.object
});
const It = rl, il = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (il.displayName = "FormControlContext");
const Qn = il;
function Xt() {
  return T.useContext(Qn);
}
function jm(e) {
  return ue("MuiInputAdornment", e);
}
const Dm = ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), xs = Dm;
var Ts;
const Mm = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${Z(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, _m = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: i,
    size: s,
    variant: a
  } = e, l = {
    root: ["root", n && "disablePointerEvents", i && `position${Z(i)}`, a, r && "hiddenLabel", s && `size${Z(s)}`]
  };
  return pe(l, jm, t);
}, Bm = J("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: Mm
})(de(({
  theme: e
}) => ({
  display: "flex",
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active,
  variants: [{
    props: {
      variant: "filled"
    },
    style: {
      [`&.${xs.positionStart}&:not(.${xs.hiddenLabel})`]: {
        marginTop: 16
      }
    }
  }, {
    props: {
      position: "start"
    },
    style: {
      marginRight: 8
    }
  }, {
    props: {
      position: "end"
    },
    style: {
      marginLeft: 8
    }
  }, {
    props: {
      disablePointerEvents: !0
    },
    style: {
      pointerEvents: "none"
    }
  }]
}))), sl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: i,
    className: s,
    component: a = "div",
    disablePointerEvents: l = !1,
    disableTypography: c = !1,
    position: u,
    variant: p,
    ...m
  } = r, g = Xt() || {};
  let b = p;
  p && g.variant && process.env.NODE_ENV !== "production" && p === g.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), g && !b && (b = g.variant);
  const v = {
    ...r,
    hiddenLabel: g.hiddenLabel,
    size: g.size,
    disablePointerEvents: l,
    position: u,
    variant: b
  }, f = _m(v);
  return /* @__PURE__ */ j.jsx(Qn.Provider, {
    value: null,
    children: /* @__PURE__ */ j.jsx(Bm, {
      as: a,
      ownerState: v,
      className: ne(f.root, s),
      ref: n,
      ...m,
      children: typeof i == "string" && !c ? /* @__PURE__ */ j.jsx(It, {
        color: "textSecondary",
        children: i
      }) : /* @__PURE__ */ j.jsxs(T.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Ts || (Ts = /* @__PURE__ */ j.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, i]
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (sl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: o.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: o.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: o.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const Lm = sl;
function xt(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function al(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : Fa(n, r), {
    props: l,
    internalRef: c
  } = Ua({
    ...s,
    externalSlotProps: a
  }), u = Me(c, a == null ? void 0 : a.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return La(t, {
    ...l,
    ref: u
  }, r);
}
const ll = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (ll.displayName = "ListContext");
const zr = ll;
function Fm(e) {
  return ue("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const Vm = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return pe({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, Fm, t);
}, Um = J("ul", {
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
}), cl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u,
    ...p
  } = r, m = T.useMemo(() => ({
    dense: l
  }), [l]), g = {
    ...r,
    component: a,
    dense: l,
    disablePadding: c
  }, b = Vm(g);
  return /* @__PURE__ */ j.jsx(zr.Provider, {
    value: m,
    children: /* @__PURE__ */ j.jsxs(Um, {
      as: a,
      className: ne(b.root, s),
      ref: n,
      ownerState: g,
      ...p,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (cl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const zm = cl;
function ul(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function wr(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Es(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function pl(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function Oo(e, t, n, r, i, s) {
  let a = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !pl(l, s) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const dl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: p,
    variant: m = "selectedMenu",
    ...g
  } = t, b = T.useRef(null), v = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  ct(() => {
    i && b.current.focus();
  }, [i]), T.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (w, {
      direction: y
    }) => {
      const E = !b.current.style.width;
      if (w.clientHeight < b.current.clientHeight && E) {
        const S = `${ul(ut(w))}px`;
        b.current.style[y === "rtl" ? "paddingLeft" : "paddingRight"] = S, b.current.style.width = `calc(100% + ${S})`;
      }
      return b.current;
    }
  }), []);
  const f = (w) => {
    const y = b.current, E = w.key;
    if (w.ctrlKey || w.metaKey || w.altKey) {
      p && p(w);
      return;
    }
    const I = He(y).activeElement;
    if (E === "ArrowDown")
      w.preventDefault(), Oo(y, I, u, c, wr);
    else if (E === "ArrowUp")
      w.preventDefault(), Oo(y, I, u, c, Es);
    else if (E === "Home")
      w.preventDefault(), Oo(y, null, u, c, wr);
    else if (E === "End")
      w.preventDefault(), Oo(y, null, u, c, Es);
    else if (E.length === 1) {
      const _ = v.current, D = E.toLowerCase(), W = performance.now();
      _.keys.length > 0 && (W - _.lastTime > 500 ? (_.keys = [], _.repeating = !0, _.previousKeyMatched = !0) : _.repeating && D !== _.keys[0] && (_.repeating = !1)), _.lastTime = W, _.keys.push(D);
      const U = I && !_.repeating && pl(I, _);
      _.previousKeyMatched && (U || Oo(y, I, !1, c, wr, _)) ? w.preventDefault() : _.previousKeyMatched = !1;
    }
    p && p(w);
  }, x = Me(b, n);
  let O = -1;
  T.Children.forEach(a, (w, y) => {
    if (!/* @__PURE__ */ T.isValidElement(w)) {
      O === y && (O += 1, O >= a.length && (O = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Yt.isFragment(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (m === "selectedMenu" && w.props.selected || O === -1) && (O = y), O === y && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (O += 1, O >= a.length && (O = -1));
  });
  const C = T.Children.map(a, (w, y) => {
    if (y === O) {
      const E = {};
      return s && (E.autoFocus = !0), w.props.tabIndex === void 0 && m === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ T.cloneElement(w, E);
    }
    return w;
  });
  return /* @__PURE__ */ j.jsx(zm, {
    role: "menu",
    ref: x,
    className: l,
    onKeyDown: f,
    tabIndex: i ? 0 : -1,
    ...g,
    children: C
  });
});
process.env.NODE_ENV !== "production" && (dl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const Wm = dl;
function Hm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function fl(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !Hm(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ml = Et(o.element, fl);
ml.isRequired = Et(o.element.isRequired, fl);
const bo = ml;
function Jt(e) {
  var t;
  return parseInt(T.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const ui = (e) => e.scrollTop;
function co(e, t) {
  const {
    timeout: n,
    easing: r,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: i.transitionDelay
  };
}
function Wr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const qm = {
  entering: {
    opacity: 1,
    transform: Wr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Or = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Nn = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: p,
    onExit: m,
    onExited: g,
    onExiting: b,
    style: v,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = si,
    ...O
  } = t, C = so(), w = T.useRef(), y = go(), E = T.useRef(null), S = Me(E, Jt(s), n), I = ($) => (P) => {
    if ($) {
      const V = E.current;
      P === void 0 ? $(V) : $(V, P);
    }
  }, _ = I(p), D = I(($, P) => {
    ui($);
    const {
      duration: V,
      delay: M,
      easing: B
    } = co({
      style: v,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let k;
    f === "auto" ? (k = y.transitions.getAutoHeightDuration($.clientHeight), w.current = k) : k = V, $.style.transition = [y.transitions.create("opacity", {
      duration: k,
      delay: M
    }), y.transitions.create("transform", {
      duration: Or ? k : k * 0.666,
      delay: M,
      easing: B
    })].join(","), c && c($, P);
  }), W = I(u), U = I(b), d = I(($) => {
    const {
      duration: P,
      delay: V,
      easing: M
    } = co({
      style: v,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let B;
    f === "auto" ? (B = y.transitions.getAutoHeightDuration($.clientHeight), w.current = B) : B = P, $.style.transition = [y.transitions.create("opacity", {
      duration: B,
      delay: V
    }), y.transitions.create("transform", {
      duration: Or ? B : B * 0.666,
      delay: Or ? V : V || B * 0.333,
      easing: M
    })].join(","), $.style.opacity = 0, $.style.transform = Wr(0.75), m && m($);
  }), N = I(g), R = ($) => {
    f === "auto" && C.start(w.current || 0, $), r && r(E.current, $);
  };
  return /* @__PURE__ */ j.jsx(x, {
    appear: i,
    in: l,
    nodeRef: E,
    onEnter: D,
    onEntered: W,
    onEntering: _,
    onExit: d,
    onExited: N,
    onExiting: U,
    addEndListener: R,
    timeout: f === "auto" ? null : f,
    ...O,
    children: ($, {
      ownerState: P,
      ...V
    }) => /* @__PURE__ */ T.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Wr(0.75),
        visibility: $ === "exited" && !l ? "hidden" : void 0,
        ...qm[$],
        ...v,
        ...s.props.style
      },
      ref: S,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (Nn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: bo.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
Nn && (Nn.muiSupportAuto = !0);
const hl = Nn;
function Ym(e) {
  const t = He(e);
  return t.body === e ? ut(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Mo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ws(e) {
  return parseInt(ut(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Gm(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Os(e, t, n, r, i) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = !s.includes(a), c = !Gm(a);
    l && c && Mo(a, i);
  });
}
function Sr(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Km(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Ym(r)) {
      const a = ul(ut(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${ws(r) + a}px`;
      const l = He(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${ws(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = He(r).body;
    else {
      const a = r.parentElement, l = ut(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function Xm(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Jm {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Mo(t.modalRef, !1);
    const i = Xm(n);
    Os(n, t.mount, t.modalRef, i, !0);
    const s = Sr(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Sr(this.containers, (s) => s.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Km(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Sr(this.containers, (a) => a.modals.includes(t)), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Mo(t.modalRef, n), Os(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Mo(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Qm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Zm(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function eh(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function th(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || eh(e));
}
function oh(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Qm)).forEach((r, i) => {
    const s = Zm(r);
    s === -1 || !th(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function nh() {
  return !0;
}
function kn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = oh,
    isEnabled: a = nh,
    open: l
  } = e, c = T.useRef(!1), u = T.useRef(null), p = T.useRef(null), m = T.useRef(null), g = T.useRef(null), b = T.useRef(!1), v = T.useRef(null), f = Me(Jt(t), v), x = T.useRef(null);
  T.useEffect(() => {
    !l || !v.current || (b.current = !n);
  }, [n, l]), T.useEffect(() => {
    if (!l || !v.current)
      return;
    const w = He(v.current);
    return v.current.contains(w.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), b.current && v.current.focus()), () => {
      i || (m.current && m.current.focus && (c.current = !0, m.current.focus()), m.current = null);
    };
  }, [l]), T.useEffect(() => {
    if (!l || !v.current)
      return;
    const w = He(v.current), y = (I) => {
      x.current = I, !(r || !a() || I.key !== "Tab") && w.activeElement === v.current && I.shiftKey && (c.current = !0, p.current && p.current.focus());
    }, E = () => {
      var D, W;
      const I = v.current;
      if (I === null)
        return;
      if (!w.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (I.contains(w.activeElement) || r && w.activeElement !== u.current && w.activeElement !== p.current)
        return;
      if (w.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!b.current)
        return;
      let _ = [];
      if ((w.activeElement === u.current || w.activeElement === p.current) && (_ = s(v.current)), _.length > 0) {
        const U = !!((D = x.current) != null && D.shiftKey && ((W = x.current) == null ? void 0 : W.key) === "Tab"), d = _[0], N = _[_.length - 1];
        typeof d != "string" && typeof N != "string" && (U ? N.focus() : d.focus());
      } else
        I.focus();
    };
    w.addEventListener("focusin", E), w.addEventListener("keydown", y, !0);
    const S = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(S), w.removeEventListener("focusin", E), w.removeEventListener("keydown", y, !0);
    };
  }, [n, r, i, a, l, s]);
  const O = (w) => {
    m.current === null && (m.current = w.relatedTarget), b.current = !0, g.current = w.target;
    const y = t.props.onFocus;
    y && y(w);
  }, C = (w) => {
    m.current === null && (m.current = w.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ j.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ j.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: f,
      onFocus: O
    }), /* @__PURE__ */ j.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (kn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: bo,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (kn["propTypes"] = wa(kn.propTypes));
function rh(e) {
  return typeof e == "function" ? e() : e;
}
const Pn = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = T.useState(null), c = Me(/* @__PURE__ */ T.isValidElement(r) ? Jt(r) : null, n);
  if (ct(() => {
    s || l(rh(i) || document.body);
  }, [i, s]), ct(() => {
    if (a && !s)
      return ps(n, a), () => {
        ps(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ T.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ T.cloneElement(r, u);
    }
    return r;
  }
  return a && /* @__PURE__ */ Pc.createPortal(r, a);
});
process.env.NODE_ENV !== "production" && (Pn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: o.node,
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
  container: o.oneOfType([xt, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (Pn["propTypes"] = wa(Pn.propTypes));
const gl = Pn, ih = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, bl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = go(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: p,
    onEntered: m,
    onEntering: g,
    onExit: b,
    onExited: v,
    onExiting: f,
    style: x,
    timeout: O = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = si,
    ...w
  } = t, y = T.useRef(null), E = Me(y, Jt(l), n), S = (R) => ($) => {
    if (R) {
      const P = y.current;
      $ === void 0 ? R(P) : R(P, $);
    }
  }, I = S(g), _ = S((R, $) => {
    ui(R);
    const P = co({
      style: x,
      timeout: O,
      easing: c
    }, {
      mode: "enter"
    });
    R.style.webkitTransition = r.transitions.create("opacity", P), R.style.transition = r.transitions.create("opacity", P), p && p(R, $);
  }), D = S(m), W = S(f), U = S((R) => {
    const $ = co({
      style: x,
      timeout: O,
      easing: c
    }, {
      mode: "exit"
    });
    R.style.webkitTransition = r.transitions.create("opacity", $), R.style.transition = r.transitions.create("opacity", $), b && b(R);
  }), d = S(v), N = (R) => {
    s && s(y.current, R);
  };
  return /* @__PURE__ */ j.jsx(C, {
    appear: a,
    in: u,
    nodeRef: y,
    onEnter: _,
    onEntered: D,
    onEntering: I,
    onExit: U,
    onExited: d,
    onExiting: W,
    addEndListener: N,
    timeout: O,
    ...w,
    children: (R, {
      ownerState: $,
      ...P
    }) => /* @__PURE__ */ T.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: R === "exited" && !u ? "hidden" : void 0,
        ...ih[R],
        ...x,
        ...l.props.style
      },
      ref: E,
      ...P
    })
  });
});
process.env.NODE_ENV !== "production" && (bl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: bo.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const sh = bl;
function ah(e) {
  return ue("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const lh = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return pe({
    root: ["root", n && "invisible"]
  }, ah, t);
}, ch = J("div", {
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
}), yl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: s,
    component: a = "div",
    invisible: l = !1,
    open: c,
    components: u = {},
    componentsProps: p = {},
    slotProps: m = {},
    slots: g = {},
    TransitionComponent: b,
    transitionDuration: v,
    ...f
  } = r, x = {
    ...r,
    component: a,
    invisible: l
  }, O = lh(x), C = {
    transition: b,
    root: u.Root,
    ...g
  }, w = {
    ...p,
    ...m
  }, y = {
    component: a,
    slots: C,
    slotProps: w
  }, [E, S] = xe("root", {
    elementType: ch,
    externalForwardedProps: y,
    className: ne(O.root, s),
    ownerState: x
  }), [I, _] = xe("transition", {
    elementType: sh,
    externalForwardedProps: y,
    ownerState: x
  });
  return /* @__PURE__ */ j.jsx(I, {
    in: c,
    timeout: v,
    ...f,
    ..._,
    children: /* @__PURE__ */ j.jsx(E, {
      "aria-hidden": !0,
      ...S,
      classes: O,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (yl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const uh = yl;
function ph(e) {
  return typeof e == "function" ? e() : e;
}
function dh(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Ss = () => {
}, cn = new Jm();
function fh(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: l,
    onClose: c,
    open: u,
    rootRef: p
  } = e, m = T.useRef({}), g = T.useRef(null), b = T.useRef(null), v = Me(b, p), [f, x] = T.useState(!u), O = dh(l);
  let C = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (C = !1);
  const w = () => He(g.current), y = () => (m.current.modalRef = b.current, m.current.mount = g.current, m.current), E = () => {
    cn.mount(y(), {
      disableScrollLock: r
    }), b.current && (b.current.scrollTop = 0);
  }, S = Ct(() => {
    const $ = ph(t) || w().body;
    cn.add(y(), $), b.current && E();
  }), I = () => cn.isTopModal(y()), _ = Ct(($) => {
    g.current = $, $ && (u && I() ? E() : b.current && Mo(b.current, C));
  }), D = T.useCallback(() => {
    cn.remove(y(), C);
  }, [C]);
  T.useEffect(() => () => {
    D();
  }, [D]), T.useEffect(() => {
    u ? S() : (!O || !i) && D();
  }, [u, D, O, i, S]);
  const W = ($) => (P) => {
    var V;
    (V = $.onKeyDown) == null || V.call($, P), !(P.key !== "Escape" || P.which === 229 || // Wait until IME is settled.
    !I()) && (n || (P.stopPropagation(), c && c(P, "escapeKeyDown")));
  }, U = ($) => (P) => {
    var V;
    (V = $.onClick) == null || V.call($, P), P.target === P.currentTarget && c && c(P, "backdropClick");
  };
  return {
    getRootProps: ($ = {}) => {
      const P = Va(e);
      delete P.onTransitionEnter, delete P.onTransitionExited;
      const V = {
        ...P,
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
        ...V,
        onKeyDown: W(V),
        ref: v
      };
    },
    getBackdropProps: ($ = {}) => {
      const P = $;
      return {
        "aria-hidden": !0,
        ...P,
        onClick: U(P),
        open: u
      };
    },
    getTransitionProps: () => {
      const $ = () => {
        x(!1), s && s();
      }, P = () => {
        x(!0), a && a(), i && D();
      };
      return {
        onEnter: ki($, (l == null ? void 0 : l.props.onEnter) ?? Ss),
        onExited: ki(P, (l == null ? void 0 : l.props.onExited) ?? Ss)
      };
    },
    rootRef: v,
    portalRef: _,
    isTopModal: I,
    exited: f,
    hasTransition: O
  };
}
function mh(e) {
  return ue("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const hh = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return pe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, mh, r);
}, gh = J("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(de(({
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
}))), bh = J(uh, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), vl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = bh,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: p,
    component: m,
    components: g = {},
    componentsProps: b = {},
    disableAutoFocus: v = !1,
    disableEnforceFocus: f = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: O = !1,
    disableRestoreFocus: C = !1,
    disableScrollLock: w = !1,
    hideBackdrop: y = !1,
    keepMounted: E = !1,
    onClose: S,
    onTransitionEnter: I,
    onTransitionExited: _,
    open: D,
    slotProps: W = {},
    slots: U = {},
    // eslint-disable-next-line react/prop-types
    theme: d,
    ...N
  } = r, R = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: v,
    disableEnforceFocus: f,
    disableEscapeKeyDown: x,
    disablePortal: O,
    disableRestoreFocus: C,
    disableScrollLock: w,
    hideBackdrop: y,
    keepMounted: E
  }, {
    getRootProps: $,
    getBackdropProps: P,
    getTransitionProps: V,
    portalRef: M,
    isTopModal: B,
    exited: k,
    hasTransition: h
  } = fh({
    ...R,
    rootRef: n
  }), A = {
    ...R,
    exited: k
  }, L = hh(A), z = {};
  if (u.props.tabIndex === void 0 && (z.tabIndex = "-1"), h) {
    const {
      onEnter: Y,
      onExited: te
    } = V();
    z.onEnter = Y, z.onExited = te;
  }
  const K = {
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...U
    },
    slotProps: {
      ...b,
      ...W
    }
  }, [ee, q] = xe("root", {
    ref: n,
    elementType: gh,
    externalForwardedProps: {
      ...K,
      ...N,
      component: m
    },
    getSlotProps: $,
    ownerState: A,
    className: ne(l, L == null ? void 0 : L.root, !A.open && A.exited && (L == null ? void 0 : L.hidden))
  }), [X, Q] = xe("backdrop", {
    ref: s == null ? void 0 : s.ref,
    elementType: i,
    externalForwardedProps: K,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (Y) => P({
      ...Y,
      onClick: (te) => {
        Y != null && Y.onClick && Y.onClick(te);
      }
    }),
    className: ne(s == null ? void 0 : s.className, L == null ? void 0 : L.backdrop),
    ownerState: A
  });
  return !E && !D && (!h || k) ? null : /* @__PURE__ */ j.jsx(gl, {
    ref: M,
    container: p,
    disablePortal: O,
    children: /* @__PURE__ */ j.jsxs(ee, {
      ...q,
      children: [!y && i ? /* @__PURE__ */ j.jsx(X, {
        ...Q
      }) : null, /* @__PURE__ */ j.jsx(kn, {
        disableEnforceFocus: f,
        disableAutoFocus: v,
        disableRestoreFocus: C,
        isEnabled: B,
        open: D,
        children: /* @__PURE__ */ T.cloneElement(u, z)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (vl.propTypes = {
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
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: bo.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
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
  container: o.oneOfType([xt, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const xl = vl;
function yh(e) {
  return ue("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function Cs(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Rs(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ns(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function jo(e) {
  return typeof e == "function" ? e() : e;
}
const vh = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"]
  }, yh, t);
}, xh = J(xl, {
  name: "MuiPopover",
  slot: "Root"
})({}), Tl = J(Xn, {
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
}), El = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: s,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: u,
    className: p,
    container: m,
    elevation: g = 8,
    marginThreshold: b = 16,
    open: v,
    PaperProps: f = {},
    // TODO: remove in v7
    slots: x = {},
    slotProps: O = {},
    transformOrigin: C = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w,
    // TODO: remove in v7
    transitionDuration: y = "auto",
    TransitionProps: E = {},
    // TODO: remove in v7
    disableScrollLock: S = !1,
    ...I
  } = r, _ = T.useRef(), D = {
    ...r,
    anchorOrigin: a,
    anchorReference: c,
    elevation: g,
    marginThreshold: b,
    transformOrigin: C,
    TransitionComponent: w,
    transitionDuration: y,
    TransitionProps: E
  }, W = vh(D), U = T.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const Y = jo(s), te = Y && Y.nodeType === 1 ? Y : He(_.current).body, H = te.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const se = te.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && se.top === 0 && se.left === 0 && se.right === 0 && se.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: H.top + Cs(H, a.vertical),
      left: H.left + Rs(H, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), d = T.useCallback((Y) => ({
    vertical: Cs(Y, C.vertical),
    horizontal: Rs(Y, C.horizontal)
  }), [C.horizontal, C.vertical]), N = T.useCallback((Y) => {
    const te = {
      width: Y.offsetWidth,
      height: Y.offsetHeight
    }, H = d(te);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ns(H)
      };
    const se = U();
    let ie = se.top - H.vertical, me = se.left - H.horizontal;
    const Ie = ie + te.height, Re = me + te.width, Se = ut(jo(s)), je = Se.innerHeight - b, Oe = Se.innerWidth - b;
    if (b !== null && ie < b) {
      const we = ie - b;
      ie -= we, H.vertical += we;
    } else if (b !== null && Ie > je) {
      const we = Ie - je;
      ie -= we, H.vertical += we;
    }
    if (process.env.NODE_ENV !== "production" && te.height > je && te.height && je && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${te.height - je}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), b !== null && me < b) {
      const we = me - b;
      me -= we, H.horizontal += we;
    } else if (Re > Oe) {
      const we = Re - Oe;
      me -= we, H.horizontal += we;
    }
    return {
      top: `${Math.round(ie)}px`,
      left: `${Math.round(me)}px`,
      transformOrigin: Ns(H)
    };
  }, [s, c, U, d, b]), [R, $] = T.useState(v), P = T.useCallback(() => {
    const Y = _.current;
    if (!Y)
      return;
    const te = N(Y);
    te.top !== null && Y.style.setProperty("top", te.top), te.left !== null && (Y.style.left = te.left), Y.style.transformOrigin = te.transformOrigin, $(!0);
  }, [N]);
  T.useEffect(() => (S && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [s, S, P]);
  const V = () => {
    P();
  }, M = () => {
    $(!1);
  };
  T.useEffect(() => {
    v && P();
  }), T.useImperativeHandle(i, () => v ? {
    updatePosition: () => {
      P();
    }
  } : null, [v, P]), T.useEffect(() => {
    if (!v)
      return;
    const Y = ni(() => {
      P();
    }), te = ut(jo(s));
    return te.addEventListener("resize", Y), () => {
      Y.clear(), te.removeEventListener("resize", Y);
    };
  }, [s, v, P]);
  let B = y;
  const k = {
    slots: {
      transition: w,
      ...x
    },
    slotProps: {
      transition: E,
      paper: f,
      ...O
    }
  }, [h, A] = xe("transition", {
    elementType: hl,
    externalForwardedProps: k,
    ownerState: D,
    getSlotProps: (Y) => ({
      ...Y,
      onEntering: (te, H) => {
        var se;
        (se = Y.onEntering) == null || se.call(Y, te, H), V();
      },
      onExited: (te) => {
        var H;
        (H = Y.onExited) == null || H.call(Y, te), M();
      }
    }),
    additionalProps: {
      appear: !0,
      in: v
    }
  });
  y === "auto" && !h.muiSupportAuto && (B = void 0);
  const L = m || (s ? He(jo(s)).body : void 0), [z, {
    slots: K,
    slotProps: ee,
    ...q
  }] = xe("root", {
    ref: n,
    elementType: xh,
    externalForwardedProps: {
      ...k,
      ...I
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: Aa(typeof O.backdrop == "function" ? O.backdrop(D) : O.backdrop, {
          invisible: !0
        })
      },
      container: L,
      open: v
    },
    ownerState: D,
    className: ne(W.root, p)
  }), [X, Q] = xe("paper", {
    ref: _,
    className: W.paper,
    elementType: Tl,
    externalForwardedProps: k,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: g,
      style: R ? void 0 : {
        opacity: 0
      }
    },
    ownerState: D
  });
  return /* @__PURE__ */ j.jsx(z, {
    ...q,
    ...!wn(z) && {
      slots: K,
      slotProps: ee,
      disableScrollLock: S
    },
    children: /* @__PURE__ */ j.jsx(h, {
      ...A,
      timeout: B,
      children: /* @__PURE__ */ j.jsx(X, {
        ...Q,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (El.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: dt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Et(o.oneOfType([xt, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = jo(e.anchorEl);
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
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: o.object,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([xt, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: ri,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overridden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: ii
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    paper: o.elementType,
    root: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
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
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: o.object
});
const Th = El;
function Eh(e) {
  return ue("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const wh = {
  vertical: "top",
  horizontal: "right"
}, Oh = {
  vertical: "top",
  horizontal: "left"
}, Sh = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Eh, t);
}, Ch = J(Th, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), Rh = J(Tl, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Nh = J(Wm, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), wl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: s,
    className: a,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: u,
    open: p,
    PaperProps: m = {},
    PopoverClasses: g,
    transitionDuration: b = "auto",
    TransitionProps: {
      onEntering: v,
      ...f
    } = {},
    variant: x = "selectedMenu",
    slots: O = {},
    slotProps: C = {},
    ...w
  } = r, y = Kn(), E = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: v,
    PaperProps: m,
    transitionDuration: b,
    TransitionProps: f,
    variant: x
  }, S = Sh(E), I = i && !l && p, _ = T.useRef(null), D = (B, k) => {
    _.current && _.current.adjustStyleForScrollbar(B, {
      direction: y ? "rtl" : "ltr"
    }), v && v(B, k);
  }, W = (B) => {
    B.key === "Tab" && (B.preventDefault(), u && u(B, "tabKeyDown"));
  };
  let U = -1;
  T.Children.map(s, (B, k) => {
    /* @__PURE__ */ T.isValidElement(B) && (process.env.NODE_ENV !== "production" && Yt.isFragment(B) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), B.props.disabled || (x === "selectedMenu" && B.props.selected || U === -1) && (U = k));
  });
  const d = {
    slots: O,
    slotProps: {
      list: c,
      transition: f,
      paper: m,
      ...C
    }
  }, N = al({
    elementType: O.root,
    externalSlotProps: C.root,
    ownerState: E,
    className: [S.root, a]
  }), [R, $] = xe("paper", {
    className: S.paper,
    elementType: Rh,
    externalForwardedProps: d,
    shouldForwardComponentProp: !0,
    ownerState: E
  }), [P, V] = xe("list", {
    className: ne(S.list, c.className),
    elementType: Nh,
    shouldForwardComponentProp: !0,
    externalForwardedProps: d,
    getSlotProps: (B) => ({
      ...B,
      onKeyDown: (k) => {
        var h;
        W(k), (h = B.onKeyDown) == null || h.call(B, k);
      }
    }),
    ownerState: E
  }), M = typeof d.slotProps.transition == "function" ? d.slotProps.transition(E) : d.slotProps.transition;
  return /* @__PURE__ */ j.jsx(Ch, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: y ? "right" : "left"
    },
    transformOrigin: y ? wh : Oh,
    slots: {
      root: O.root,
      paper: R,
      backdrop: O.backdrop,
      ...O.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: O.transition
      }
    },
    slotProps: {
      root: N,
      paper: $,
      backdrop: typeof C.backdrop == "function" ? C.backdrop(E) : C.backdrop,
      transition: {
        ...M,
        onEntering: (...B) => {
          var k;
          D(...B), (k = M == null ? void 0 : M.onEntering) == null || k.call(M, ...B);
        }
      }
    },
    open: p,
    ref: n,
    transitionDuration: b,
    ownerState: E,
    ...w,
    classes: g,
    children: /* @__PURE__ */ j.jsx(P, {
      actions: _,
      autoFocus: i && (U === -1 || l),
      autoFocusItem: I,
      variant: x,
      ...V,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([xt, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    list: o.oneOfType([o.func, o.object]),
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    list: o.elementType,
    paper: o.elementType,
    root: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const Ol = wl, kh = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), ks = kh, Ph = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Ps = Ph;
function $h(e) {
  return ue("MuiMenuItem", e);
}
const Ih = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), So = Ih, Ah = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, jh = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = pe({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, $h, a);
  return {
    ...a,
    ...c
  };
}, Dh = J(ci, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Ah
})(de(({
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
  [`&.${So.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${So.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${So.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${So.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${So.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${hs.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${hs.inset}`]: {
    marginLeft: 52
  },
  [`& .${Ps.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Ps.inset}`]: {
    paddingLeft: 36
  },
  [`& .${ks.root}`]: {
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
      [`& .${ks.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Sl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: s = "li",
    dense: a = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: p = "menuitem",
    tabIndex: m,
    className: g,
    ...b
  } = r, v = T.useContext(zr), f = T.useMemo(() => ({
    dense: a || v.dense || !1,
    disableGutters: c
  }), [v.dense, a, c]), x = T.useRef(null);
  ct(() => {
    i && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const O = {
    ...r,
    dense: f.dense,
    divider: l,
    disableGutters: c
  }, C = jh(r), w = Me(x, n);
  let y;
  return r.disabled || (y = m !== void 0 ? m : -1), /* @__PURE__ */ j.jsx(zr.Provider, {
    value: f,
    children: /* @__PURE__ */ j.jsx(Dh, {
      ref: w,
      role: p,
      tabIndex: y,
      component: s,
      focusVisibleClassName: ne(C.focusVisible, u),
      className: ne(C.root, g),
      ...b,
      ownerState: O,
      classes: C
    })
  });
});
process.env.NODE_ENV !== "production" && (Sl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: o.bool,
  /**
   * @ignore
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  role: o.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number
});
const $s = Sl, Cl = nd({
  createStyledComponent: J("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => fe({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
  /**
   * Add an element between each child.
   */
  divider: o.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: o.bool
});
const st = Cl;
function un(e) {
  return parseInt(e, 10) || 0;
}
const Mh = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function _h(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Is(e) {
  return _h(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Rl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = T.useRef(l != null), p = T.useRef(null), m = Me(n, p), g = T.useRef(null), b = T.useRef(null), v = T.useCallback(() => {
    const w = p.current, y = b.current;
    if (!w || !y)
      return;
    const S = ut(w).getComputedStyle(w);
    if (S.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    y.style.width = S.width, y.value = w.value || t.placeholder || "x", y.value.slice(-1) === `
` && (y.value += " ");
    const I = S.boxSizing, _ = un(S.paddingBottom) + un(S.paddingTop), D = un(S.borderBottomWidth) + un(S.borderTopWidth), W = y.scrollHeight;
    y.value = "x";
    const U = y.scrollHeight;
    let d = W;
    s && (d = Math.max(Number(s) * U, d)), i && (d = Math.min(Number(i) * U, d)), d = Math.max(d, U);
    const N = d + (I === "border-box" ? _ + D : 0), R = Math.abs(d - W) <= 1;
    return {
      outerHeightStyle: N,
      overflowing: R
    };
  }, [i, s, t.placeholder]), f = Ct(() => {
    const w = p.current, y = v();
    if (!w || !y || Is(y))
      return !1;
    const E = y.outerHeightStyle;
    return g.current != null && g.current !== E;
  }), x = T.useCallback(() => {
    const w = p.current, y = v();
    if (!w || !y || Is(y))
      return;
    const E = y.outerHeightStyle;
    g.current !== E && (g.current = E, w.style.height = `${E}px`), w.style.overflow = y.overflowing ? "hidden" : "";
  }, [v]), O = T.useRef(-1);
  ct(() => {
    const w = ni(x), y = p == null ? void 0 : p.current;
    if (!y)
      return;
    const E = ut(y);
    E.addEventListener("resize", w);
    let S;
    return typeof ResizeObserver < "u" && (S = new ResizeObserver(() => {
      f() && (S.unobserve(y), cancelAnimationFrame(O.current), x(), O.current = requestAnimationFrame(() => {
        S.observe(y);
      }));
    }), S.observe(y)), () => {
      w.clear(), cancelAnimationFrame(O.current), E.removeEventListener("resize", w), S && S.disconnect();
    };
  }, [v, x, f]), ct(() => {
    x();
  });
  const C = (w) => {
    u || x();
    const y = w.target, E = y.value.length, S = y.value.endsWith(`
`), I = y.selectionStart === E;
    S && I && y.setSelectionRange(E, E), r && r(w);
  };
  return /* @__PURE__ */ j.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ j.jsx("textarea", {
      value: l,
      onChange: C,
      ref: m,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ j.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: b,
      tabIndex: -1,
      style: {
        ...Mh.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  placeholder: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * @ignore
   */
  value: o.oneOfType([o.arrayOf(o.string), o.number, o.string])
});
const Bh = Rl;
function yo({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
function As(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function $n(e, t = !1) {
  return e && (As(e.value) && e.value !== "" || t && As(e.defaultValue) && e.defaultValue !== "");
}
function Lh(e) {
  return e.startAdornment;
}
function Fh(e) {
  return ue("MuiInputBase", e);
}
const Vh = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), uo = Vh;
var js;
const Zn = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${Z(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, er = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Uh = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: p,
    readOnly: m,
    size: g,
    startAdornment: b,
    type: v
  } = e, f = {
    root: ["root", `color${Z(n)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", g && g !== "medium" && `size${Z(g)}`, p && "multiline", b && "adornedStart", s && "adornedEnd", u && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", v === "search" && "inputTypeSearch", p && "inputMultiline", g === "small" && "inputSizeSmall", u && "inputHiddenLabel", b && "inputAdornedStart", s && "inputAdornedEnd", m && "readOnly"]
  };
  return pe(f, Fh, t);
}, tr = J("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Zn
})(de(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${uo.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: n
    }) => t.multiline && n === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), or = J("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: er
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, r = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": n,
    "&::-moz-placeholder": n,
    // Firefox 19+
    "&::-ms-input-placeholder": n,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${uo.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${uo.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), Ds = Jd({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), Nl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: s,
    autoFocus: a,
    className: l,
    color: c,
    components: u = {},
    componentsProps: p = {},
    defaultValue: m,
    disabled: g,
    disableInjectingGlobalStyles: b,
    endAdornment: v,
    error: f,
    fullWidth: x = !1,
    id: O,
    inputComponent: C = "input",
    inputProps: w = {},
    inputRef: y,
    margin: E,
    maxRows: S,
    minRows: I,
    multiline: _ = !1,
    name: D,
    onBlur: W,
    onChange: U,
    onClick: d,
    onFocus: N,
    onKeyDown: R,
    onKeyUp: $,
    placeholder: P,
    readOnly: V,
    renderSuffix: M,
    rows: B,
    size: k,
    slotProps: h = {},
    slots: A = {},
    startAdornment: L,
    type: z = "text",
    value: K,
    ...ee
  } = r, q = w.value != null ? w.value : K, {
    current: X
  } = T.useRef(q != null), Q = T.useRef(), Y = T.useCallback((ae) => {
    process.env.NODE_ENV !== "production" && ae && ae.nodeName !== "INPUT" && !ae.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), te = Me(Q, y, w.ref, Y), [H, se] = T.useState(!1), ie = Xt();
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (ie)
      return ie.registerEffect();
  }, [ie]);
  const me = yo({
    props: r,
    muiFormControl: ie,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  me.focused = ie ? ie.focused : H, T.useEffect(() => {
    !ie && g && H && (se(!1), W && W());
  }, [ie, g, H, W]);
  const Ie = ie && ie.onFilled, Re = ie && ie.onEmpty, Se = T.useCallback((ae) => {
    $n(ae) ? Ie && Ie() : Re && Re();
  }, [Ie, Re]);
  ct(() => {
    X && Se({
      value: q
    });
  }, [q, Se, X]);
  const je = (ae) => {
    N && N(ae), w.onFocus && w.onFocus(ae), ie && ie.onFocus ? ie.onFocus(ae) : se(!0);
  }, Oe = (ae) => {
    W && W(ae), w.onBlur && w.onBlur(ae), ie && ie.onBlur ? ie.onBlur(ae) : se(!1);
  }, we = (ae, ...Ke) => {
    if (!X) {
      const Le = ae.target || Q.current;
      if (Le == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : vt(1));
      Se({
        value: Le.value
      });
    }
    w.onChange && w.onChange(ae, ...Ke), U && U(ae, ...Ke);
  };
  T.useEffect(() => {
    Se(Q.current);
  }, []);
  const oe = (ae) => {
    Q.current && ae.currentTarget === ae.target && Q.current.focus(), d && d(ae);
  };
  let Be = C, Ne = w;
  _ && Be === "input" && (B ? (process.env.NODE_ENV !== "production" && (I || S) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Ne = {
    type: void 0,
    minRows: B,
    maxRows: B,
    ...Ne
  }) : Ne = {
    type: void 0,
    maxRows: S,
    minRows: I,
    ...Ne
  }, Be = Bh);
  const ot = (ae) => {
    Se(ae.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  T.useEffect(() => {
    ie && ie.setAdornedStart(!!L);
  }, [ie, L]);
  const Ge = {
    ...r,
    color: me.color || "primary",
    disabled: me.disabled,
    endAdornment: v,
    error: me.error,
    focused: me.focused,
    formControl: ie,
    fullWidth: x,
    hiddenLabel: me.hiddenLabel,
    multiline: _,
    size: me.size,
    startAdornment: L,
    type: z
  }, nt = Uh(Ge), ft = A.root || u.Root || tr, Ue = h.root || p.root || {}, wt = A.input || u.Input || or;
  return Ne = {
    ...Ne,
    ...h.input ?? p.input
  }, /* @__PURE__ */ j.jsxs(T.Fragment, {
    children: [!b && typeof Ds == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (js || (js = /* @__PURE__ */ j.jsx(Ds, {}))), /* @__PURE__ */ j.jsxs(ft, {
      ...Ue,
      ref: n,
      onClick: oe,
      ...ee,
      ...!wn(ft) && {
        ownerState: {
          ...Ge,
          ...Ue.ownerState
        }
      },
      className: ne(nt.root, Ue.className, l, V && "MuiInputBase-readOnly"),
      children: [L, /* @__PURE__ */ j.jsx(Qn.Provider, {
        value: null,
        children: /* @__PURE__ */ j.jsx(wt, {
          "aria-invalid": me.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: m,
          disabled: me.disabled,
          id: O,
          onAnimationStart: ot,
          name: D,
          placeholder: P,
          readOnly: V,
          required: me.required,
          rows: B,
          value: q,
          onKeyDown: R,
          onKeyUp: $,
          type: z,
          ...Ne,
          ...!wn(wt) && {
            as: Be,
            ownerState: {
              ...Ge,
              ...Ne.ownerState
            }
          },
          ref: te,
          className: ne(nt.input, Ne.className, V && "MuiInputBase-readOnly"),
          onBlur: Oe,
          onChange: we,
          onFocus: je
        })
      }), v, M ? M({
        ...me,
        startAdornment: L
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Nl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: ii,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * @ignore
   */
  renderSuffix: o.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
const pi = Nl;
function zh(e) {
  return ue("MuiInput", e);
}
const Wh = {
  ...uo,
  ...ce("MuiInput", ["root", "underline", "input"])
}, Co = Wh, Hh = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = pe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, zh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, qh = J(tr, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Zn(e, t), !n.disableUnderline && t.underline];
  }
})(de(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: r
      }) => r.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => !r.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Co.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Co.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Co.disabled}, .${Co.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Co.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(pt()).map(([r]) => ({
      props: {
        color: r,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    }))]
  };
})), Yh = J(or, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: er
})({}), di = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: i = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    inputComponent: c = "input",
    multiline: u = !1,
    slotProps: p,
    slots: m = {},
    type: g = "text",
    ...b
  } = r, v = Hh(r), x = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, O = p ?? a ? _e(p ?? a, x) : x, C = m.root ?? s.Root ?? qh, w = m.input ?? s.Input ?? Yh;
  return /* @__PURE__ */ j.jsx(pi, {
    slots: {
      root: C,
      input: w
    },
    slotProps: O,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: n,
    type: g,
    ...b,
    classes: v
  });
});
process.env.NODE_ENV !== "production" && (di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
di.muiName = "Input";
const kl = di;
function Gh(e) {
  return ue("MuiFilledInput", e);
}
const Kh = {
  ...uo,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, Lt = Kh, Xh = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: i,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", r && "adornedStart", i && "adornedEnd", s === "small" && `size${Z(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = pe(c, Gh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, Jh = J(tr, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Zn(e, t), !n.disableUnderline && t.underline];
  }
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${Lt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Lt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s
    },
    variants: [{
      props: ({
        ownerState: a
      }) => !a.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Lt.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Lt.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Lt.disabled}, .${Lt.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Lt.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(pt()).map(([a]) => {
      var l;
      return {
        props: {
          disableUnderline: !1,
          color: a
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(l = (e.vars || e).palette[a]) == null ? void 0 : l.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: a
      }) => a.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: a,
        size: l
      }) => a.multiline && l === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline && a.hiddenLabel && a.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), Qh = J(or, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: er
})(de(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), fi = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: i = !1,
    components: s = {},
    componentsProps: a,
    fullWidth: l = !1,
    hiddenLabel: c,
    // declare here to prevent spreading to DOM
    inputComponent: u = "input",
    multiline: p = !1,
    slotProps: m,
    slots: g = {},
    type: b = "text",
    ...v
  } = r, f = {
    ...r,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: u,
    multiline: p,
    type: b
  }, x = Xh(r), O = {
    root: {
      ownerState: f
    },
    input: {
      ownerState: f
    }
  }, C = m ?? a ? _e(O, m ?? a) : O, w = g.root ?? s.Root ?? Jh, y = g.input ?? s.Input ?? Qh;
  return /* @__PURE__ */ j.jsx(pi, {
    slots: {
      root: w,
      input: y
    },
    slotProps: C,
    fullWidth: l,
    inputComponent: u,
    multiline: p,
    ref: n,
    type: b,
    ...v,
    classes: x
  });
});
process.env.NODE_ENV !== "production" && (fi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
fi.muiName = "Input";
const Pl = fi;
var Ms;
const Zh = J("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Ye
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), eg = J("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Ye
})(de(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function $l(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: i,
    notched: s,
    ...a
  } = e, l = i != null && i !== "", c = {
    ...e,
    notched: s,
    withLabel: l
  };
  return /* @__PURE__ */ j.jsx(Zh, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ j.jsx(eg, {
      ownerState: c,
      children: l ? /* @__PURE__ */ j.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ms || (Ms = /* @__PURE__ */ j.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && ($l.propTypes = {
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The label.
   */
  label: o.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool.isRequired,
  /**
   * @ignore
   */
  style: o.object
});
function tg(e) {
  return ue("MuiOutlinedInput", e);
}
const og = {
  ...uo,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, ht = og, ng = (e) => {
  const {
    classes: t
  } = e, r = pe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, tg, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, rg = J(tr, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Zn
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${ht.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${ht.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${ht.focused} .${ht.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(pt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${ht.focused} .${ht.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${ht.error} .${ht.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${ht.disabled} .${ht.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: n,
        size: r
      }) => n.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), ig = J($l, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), sg = J(or, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: er
})(de(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), mi = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: i = {},
    fullWidth: s = !1,
    inputComponent: a = "input",
    label: l,
    multiline: c = !1,
    notched: u,
    slots: p = {},
    slotProps: m = {},
    type: g = "text",
    ...b
  } = r, v = ng(r), f = Xt(), x = yo({
    props: r,
    muiFormControl: f,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), O = {
    ...r,
    color: x.color || "primary",
    disabled: x.disabled,
    error: x.error,
    focused: x.focused,
    formControl: f,
    fullWidth: s,
    hiddenLabel: x.hiddenLabel,
    multiline: c,
    size: x.size,
    type: g
  }, C = p.root ?? i.Root ?? rg, w = p.input ?? i.Input ?? sg, [y, E] = xe("notchedOutline", {
    elementType: ig,
    className: v.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: O,
    externalForwardedProps: {
      slots: p,
      slotProps: m
    },
    additionalProps: {
      label: l != null && l !== "" && x.required ? /* @__PURE__ */ j.jsxs(T.Fragment, {
        children: [l, " ", "*"]
      }) : l
    }
  });
  return /* @__PURE__ */ j.jsx(pi, {
    slots: {
      root: C,
      input: w
    },
    slotProps: m,
    renderSuffix: (S) => /* @__PURE__ */ j.jsx(y, {
      ...E,
      notched: typeof u < "u" ? u : !!(S.startAdornment || S.filled || S.focused)
    }),
    fullWidth: s,
    inputComponent: a,
    multiline: c,
    ref: n,
    type: g,
    ...b,
    classes: {
      ...v,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (mi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: dt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: o.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    notchedOutline: o.oneOfType([o.func, o.object]),
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    notchedOutline: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
mi.muiName = "Input";
const Il = mi;
function ag(e) {
  return ue("MuiFormLabel", e);
}
const lg = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), _o = lg, cg = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${Z(n)}`, i && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return pe(c, ag, t);
}, ug = J("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(de(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(pt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${_o.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${_o.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${_o.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), pg = J("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(de(({
  theme: e
}) => ({
  [`&.${_o.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Al = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: s,
    color: a,
    component: l = "label",
    disabled: c,
    error: u,
    filled: p,
    focused: m,
    required: g,
    ...b
  } = r, v = Xt(), f = yo({
    props: r,
    muiFormControl: v,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), x = {
    ...r,
    color: f.color || "primary",
    component: l,
    disabled: f.disabled,
    error: f.error,
    filled: f.filled,
    focused: f.focused,
    required: f.required
  }, O = cg(x);
  return /* @__PURE__ */ j.jsxs(ug, {
    as: l,
    ownerState: x,
    className: ne(O.root, s),
    ref: n,
    ...b,
    children: [i, f.required && /* @__PURE__ */ j.jsxs(pg, {
      ownerState: x,
      "aria-hidden": !0,
      className: O.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Al.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const dg = Al;
function fg(e) {
  return ue("MuiInputLabel", e);
}
ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const mg = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !s && "animated", i && "shrink", r && r !== "medium" && `size${Z(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = pe(c, fg, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, hg = J(dg, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${_o.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(de(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "filled" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n,
      size: r
    }) => t === "filled" && n.shrink && r === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "outlined" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), jl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: s,
    shrink: a,
    variant: l,
    className: c,
    ...u
  } = r, p = Xt();
  let m = a;
  typeof m > "u" && p && (m = p.filled || p.focused || p.adornedStart);
  const g = yo({
    props: r,
    muiFormControl: p,
    states: ["size", "variant", "required", "focused"]
  }), b = {
    ...r,
    disableAnimation: i,
    formControl: p,
    shrink: m,
    size: g.size,
    variant: g.variant,
    required: g.required,
    focused: g.focused
  }, v = mg(b);
  return /* @__PURE__ */ j.jsx(hg, {
    "data-shrink": m,
    ref: n,
    className: ne(v.root, c),
    ...u,
    ownerState: b,
    classes: v
  });
});
process.env.NODE_ENV !== "production" && (jl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const gg = jl;
function bg(e) {
  return ue("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const yg = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${Z(n)}`, r && "fullWidth"]
  };
  return pe(i, bg, t);
}, vg = J("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${Z(n.margin)}`], n.fullWidth && t.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), Dl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: p,
    fullWidth: m = !1,
    hiddenLabel: g = !1,
    margin: b = "none",
    required: v = !1,
    size: f = "medium",
    variant: x = "outlined",
    ...O
  } = r, C = {
    ...r,
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: m,
    hiddenLabel: g,
    margin: b,
    required: v,
    size: f,
    variant: x
  }, w = yg(C), [y, E] = T.useState(() => {
    let P = !1;
    return i && T.Children.forEach(i, (V) => {
      if (!vr(V, ["Input", "Select"]))
        return;
      const M = vr(V, ["Select"]) ? V.props.input : V;
      M && Lh(M.props) && (P = !0);
    }), P;
  }), [S, I] = T.useState(() => {
    let P = !1;
    return i && T.Children.forEach(i, (V) => {
      vr(V, ["Input", "Select"]) && ($n(V.props, !0) || $n(V.props.inputProps, !0)) && (P = !0);
    }), P;
  }), [_, D] = T.useState(!1);
  c && _ && D(!1);
  const W = p !== void 0 && !c ? p : _;
  let U;
  const d = T.useRef(!1);
  process.env.NODE_ENV !== "production" && (U = () => (d.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), d.current = !0, () => {
    d.current = !1;
  }));
  const N = T.useCallback(() => {
    I(!0);
  }, []), R = T.useCallback(() => {
    I(!1);
  }, []), $ = T.useMemo(() => ({
    adornedStart: y,
    setAdornedStart: E,
    color: a,
    disabled: c,
    error: u,
    filled: S,
    focused: W,
    fullWidth: m,
    hiddenLabel: g,
    size: f,
    onBlur: () => {
      D(!1);
    },
    onFocus: () => {
      D(!0);
    },
    onEmpty: R,
    onFilled: N,
    registerEffect: U,
    required: v,
    variant: x
  }), [y, a, c, u, S, W, m, g, U, R, N, v, f, x]);
  return /* @__PURE__ */ j.jsx(Qn.Provider, {
    value: $,
    children: /* @__PURE__ */ j.jsx(vg, {
      as: l,
      ownerState: C,
      className: ne(w.root, s),
      ref: n,
      ...O,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Dl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const xg = Dl;
function Tg(e) {
  return ue("MuiFormHelperText", e);
}
const Eg = ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), _s = Eg;
var Bs;
const wg = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", s && "error", r && `size${Z(r)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return pe(u, Tg, t);
}, Og = J("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${Z(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(de(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${_s.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${_s.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), Ml = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: s,
    component: a = "p",
    disabled: l,
    error: c,
    filled: u,
    focused: p,
    margin: m,
    required: g,
    variant: b,
    ...v
  } = r, f = Xt(), x = yo({
    props: r,
    muiFormControl: f,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), O = {
    ...r,
    component: a,
    contained: x.variant === "filled" || x.variant === "outlined",
    variant: x.variant,
    size: x.size,
    disabled: x.disabled,
    error: x.error,
    filled: x.filled,
    focused: x.focused,
    required: x.required
  };
  delete O.ownerState;
  const C = wg(O);
  return /* @__PURE__ */ j.jsx(Og, {
    as: a,
    className: ne(C.root, s),
    ref: n,
    ...v,
    ownerState: O,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Bs || (Bs = /* @__PURE__ */ j.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (Ml.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
const Sg = Ml;
function Cg(e) {
  return ue("MuiNativeSelect", e);
}
const Rg = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), hi = Rg, Ng = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${Z(n)}`, s && "iconOpen", r && "disabled"]
  };
  return pe(l, Cg, t);
}, _l = J("select", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${hi.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), kg = J(_l, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Ye,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${hi.multiple}`]: t.multiple
    }];
  }
})({}), Bl = J("svg", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${hi.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), Pg = J(Bl, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Ll = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: i,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard",
    ...u
  } = t, p = {
    ...t,
    disabled: i,
    variant: c,
    error: s
  }, m = Ng(p);
  return /* @__PURE__ */ j.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ j.jsx(kg, {
      ownerState: p,
      className: ne(m.select, r),
      disabled: i,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ j.jsx(Pg, {
      as: a,
      ownerState: p,
      className: m.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ll.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: dt,
  /**
   * @ignore
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const $g = Ll;
function Fl(e) {
  return ue("MuiSelect", e);
}
const Ro = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Ls;
const Ig = J(_l, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Ro.select}`]: t.select
      },
      {
        [`&.${Ro.select}`]: t[n.variant]
      },
      {
        [`&.${Ro.error}`]: t.error
      },
      {
        [`&.${Ro.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Ro.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Ag = J(Bl, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
  }
})({}), jg = J("input", {
  shouldForwardProp: (e) => Ia(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput"
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Fs(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Dg(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Mg = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${Z(n)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return pe(l, Fl, t);
}, Vl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var Qt, en, _t, tn;
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: p,
    disabled: m,
    displayEmpty: g,
    error: b = !1,
    IconComponent: v,
    inputRef: f,
    labelId: x,
    MenuProps: O = {},
    multiple: C,
    name: w,
    onBlur: y,
    onChange: E,
    onClose: S,
    onFocus: I,
    onOpen: _,
    open: D,
    readOnly: W,
    renderValue: U,
    required: d,
    SelectDisplayProps: N = {},
    tabIndex: R,
    // catching `type` from Input which makes no sense for SelectInput
    type: $,
    value: P,
    variant: V = "standard",
    ...M
  } = t, [B, k] = Dr({
    controlled: P,
    default: p,
    name: "Select"
  }), [h, A] = Dr({
    controlled: D,
    default: u,
    name: "Select"
  }), L = T.useRef(null), z = T.useRef(null), [K, ee] = T.useState(null), {
    current: q
  } = T.useRef(D != null), [X, Q] = T.useState(), Y = Me(n, f), te = T.useCallback((re) => {
    z.current = re, re && ee(re);
  }, []), H = K == null ? void 0 : K.parentNode;
  T.useImperativeHandle(Y, () => ({
    focus: () => {
      z.current.focus();
    },
    node: L.current,
    value: B
  }), [B]), T.useEffect(() => {
    u && h && K && !q && (Q(a ? null : H.clientWidth), z.current.focus());
  }, [K, a]), T.useEffect(() => {
    s && z.current.focus();
  }, [s]), T.useEffect(() => {
    if (!x)
      return;
    const re = He(z.current).getElementById(x);
    if (re) {
      const he = () => {
        getSelection().isCollapsed && z.current.focus();
      };
      return re.addEventListener("click", he), () => {
        re.removeEventListener("click", he);
      };
    }
  }, [x]);
  const se = (re, he) => {
    re ? _ && _(he) : S && S(he), q || (Q(a ? null : H.clientWidth), A(re));
  }, ie = (re) => {
    re.button === 0 && (re.preventDefault(), z.current.focus(), se(!0, re));
  }, me = (re) => {
    se(!1, re);
  }, Ie = T.Children.toArray(l), Re = (re) => {
    const he = Ie.find((De) => De.props.value === re.target.value);
    he !== void 0 && (k(he.props.value), E && E(re, he));
  }, Se = (re) => (he) => {
    let De;
    if (he.currentTarget.hasAttribute("tabindex")) {
      if (C) {
        De = Array.isArray(B) ? B.slice() : [];
        const Pt = B.indexOf(re.props.value);
        Pt === -1 ? De.push(re.props.value) : De.splice(Pt, 1);
      } else
        De = re.props.value;
      if (re.props.onClick && re.props.onClick(he), B !== De && (k(De), E)) {
        const Pt = he.nativeEvent || he, on = new Pt.constructor(Pt.type, Pt);
        Object.defineProperty(on, "target", {
          writable: !0,
          value: {
            value: De,
            name: w
          }
        }), E(on, re);
      }
      C || se(!1, he);
    }
  }, je = (re) => {
    W || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(re.key) && (re.preventDefault(), se(!0, re));
  }, Oe = K !== null && h, we = (re) => {
    !Oe && y && (Object.defineProperty(re, "target", {
      writable: !0,
      value: {
        value: B,
        name: w
      }
    }), y(re));
  };
  delete M["aria-invalid"];
  let oe, Be;
  const Ne = [];
  let ot = !1, Ge = !1;
  ($n({
    value: B
  }) || g) && (U ? oe = U(B) : ot = !0);
  const nt = Ie.map((re) => {
    if (!/* @__PURE__ */ T.isValidElement(re))
      return null;
    process.env.NODE_ENV !== "production" && Yt.isFragment(re) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let he;
    if (C) {
      if (!Array.isArray(B))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : vt(2));
      he = B.some((De) => Fs(De, re.props.value)), he && ot && Ne.push(re.props.children);
    } else
      he = Fs(B, re.props.value), he && ot && (Be = re.props.children);
    return he && (Ge = !0), /* @__PURE__ */ T.cloneElement(re, {
      "aria-selected": he ? "true" : "false",
      onClick: Se(re),
      onKeyUp: (De) => {
        De.key === " " && De.preventDefault(), re.props.onKeyUp && re.props.onKeyUp(De);
      },
      role: "option",
      selected: he,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": re.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (!Ge && !C && B !== "") {
      const re = Ie.map((he) => he.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${B}\` for the select ${w ? `(name="${w}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${re.filter((he) => he != null).map((he) => `\`${he}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ge, Ie, C, w, B]), ot && (C ? Ne.length === 0 ? oe = null : oe = Ne.reduce((re, he, De) => (re.push(he), De < Ne.length - 1 && re.push(", "), re), []) : oe = Be);
  let ft = X;
  !a && q && K && (ft = H.clientWidth);
  let Ue;
  typeof R < "u" ? Ue = R : Ue = m ? null : 0;
  const wt = N.id || (w ? `mui-component-select-${w}` : void 0), ae = {
    ...t,
    variant: V,
    value: B,
    open: Oe,
    error: b
  }, Ke = Mg(ae), Le = {
    ...O.PaperProps,
    ...typeof ((Qt = O.slotProps) == null ? void 0 : Qt.paper) == "function" ? O.slotProps.paper(ae) : (en = O.slotProps) == null ? void 0 : en.paper
  }, ze = {
    ...O.MenuListProps,
    ...typeof ((_t = O.slotProps) == null ? void 0 : _t.list) == "function" ? O.slotProps.list(ae) : (tn = O.slotProps) == null ? void 0 : tn.list
  }, Zo = Ko();
  return /* @__PURE__ */ j.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ j.jsx(Ig, {
      as: "div",
      ref: te,
      tabIndex: Ue,
      role: "combobox",
      "aria-controls": Oe ? Zo : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": Oe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [x, wt].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": d ? "true" : void 0,
      "aria-invalid": b ? "true" : void 0,
      onKeyDown: je,
      onMouseDown: m || W ? null : ie,
      onBlur: we,
      onFocus: I,
      ...N,
      ownerState: ae,
      className: ne(N.className, Ke.select, c),
      id: wt,
      children: Dg(oe) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ls || (Ls = /* @__PURE__ */ j.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : oe
    }), /* @__PURE__ */ j.jsx(jg, {
      "aria-invalid": b,
      value: Array.isArray(B) ? B.join(",") : B,
      name: w,
      ref: L,
      "aria-hidden": !0,
      onChange: Re,
      tabIndex: -1,
      disabled: m,
      className: Ke.nativeInput,
      autoFocus: s,
      required: d,
      ...M,
      ownerState: ae
    }), /* @__PURE__ */ j.jsx(Ag, {
      as: v,
      className: Ke.icon,
      ownerState: ae
    }), /* @__PURE__ */ j.jsx(Ol, {
      id: `menu-${w || ""}`,
      anchorEl: H,
      open: Oe,
      onClose: me,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...O,
      slotProps: {
        ...O.slotProps,
        list: {
          "aria-labelledby": x,
          role: "listbox",
          "aria-multiselectable": C ? "true" : void 0,
          disableListWrap: !0,
          id: Zo,
          ...ze
        },
        paper: {
          ...Le,
          style: {
            minWidth: ft,
            ...Le != null ? Le.style : null
          }
        }
      },
      children: nt
    })]
  });
});
process.env.NODE_ENV !== "production" && (Vl.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * @ignore
   */
  "aria-label": o.string,
  /**
   * @ignore
   */
  autoFocus: o.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: dt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * @ignore
   */
  readOnly: o.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * If `true`, the component is required.
   */
  required: o.bool,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  type: o.any,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const _g = Vl, Bg = Nt(/* @__PURE__ */ j.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Lg = (e) => {
  const {
    classes: t
  } = e, r = pe({
    root: ["root"]
  }, Fl, t);
  return {
    ...t,
    ...r
  };
}, gi = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Ye(e) && e !== "variant"
}, Fg = J(kl, gi)(""), Vg = J(Il, gi)(""), Ug = J(Pl, gi)(""), bi = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: p = Bg,
    id: m,
    input: g,
    inputProps: b,
    label: v,
    labelId: f,
    MenuProps: x,
    multiple: O = !1,
    native: C = !1,
    onClose: w,
    onOpen: y,
    open: E,
    renderValue: S,
    SelectDisplayProps: I,
    variant: _ = "outlined",
    ...D
  } = r, W = C ? $g : _g, U = Xt(), d = yo({
    props: r,
    muiFormControl: U,
    states: ["variant", "error"]
  }), N = d.variant || _, R = {
    ...r,
    variant: N,
    classes: a
  }, $ = Lg(R), {
    root: P,
    ...V
  } = $, M = g || {
    standard: /* @__PURE__ */ j.jsx(Fg, {
      ownerState: R
    }),
    outlined: /* @__PURE__ */ j.jsx(Vg, {
      label: v,
      ownerState: R
    }),
    filled: /* @__PURE__ */ j.jsx(Ug, {
      ownerState: R
    })
  }[N], B = Me(n, Jt(M));
  return /* @__PURE__ */ j.jsx(T.Fragment, {
    children: /* @__PURE__ */ T.cloneElement(M, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: W,
      inputProps: {
        children: s,
        error: d.error,
        IconComponent: p,
        variant: N,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: O,
        ...C ? {
          id: m
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: u,
          labelId: f,
          MenuProps: x,
          onClose: w,
          onOpen: y,
          open: E,
          renderValue: S,
          SelectDisplayProps: {
            id: m,
            ...I
          }
        },
        ...b,
        classes: b ? _e(V, b.classes) : V,
        ...g ? g.props.inputProps : {}
      },
      ...(O && C || u) && N === "outlined" ? {
        notched: !0
      } : {},
      ref: B,
      className: ne(M.props.className, l, $.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!g && {
        variant: N
      },
      ...D
    })
  });
});
process.env.NODE_ENV !== "production" && (bi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: o.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: o.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: o.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: o.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: o.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: o.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: o.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: o.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: o.oneOfType([o.oneOf([""]), o.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
bi.muiName = "Select";
const zg = bi;
function Wg(e) {
  return ue("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const Hg = {
  standard: kl,
  filled: Pl,
  outlined: Il
}, qg = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, Wg, t);
}, Yg = J(xg, {
  name: "MuiTextField",
  slot: "Root"
})({}), Ul = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: p = !1,
    error: m = !1,
    FormHelperTextProps: g,
    fullWidth: b = !1,
    helperText: v,
    id: f,
    InputLabelProps: x,
    inputProps: O,
    InputProps: C,
    inputRef: w,
    label: y,
    maxRows: E,
    minRows: S,
    multiline: I = !1,
    name: _,
    onBlur: D,
    onChange: W,
    onFocus: U,
    placeholder: d,
    required: N = !1,
    rows: R,
    select: $ = !1,
    SelectProps: P,
    slots: V = {},
    slotProps: M = {},
    type: B,
    value: k,
    variant: h = "outlined",
    ...A
  } = r, L = {
    ...r,
    autoFocus: s,
    color: c,
    disabled: p,
    error: m,
    fullWidth: b,
    multiline: I,
    required: N,
    select: $,
    variant: h
  }, z = qg(L);
  process.env.NODE_ENV !== "production" && $ && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const K = Ko(f), ee = v && K ? `${K}-helper-text` : void 0, q = y && K ? `${K}-label` : void 0, X = Hg[h], Q = {
    slots: V,
    slotProps: {
      input: C,
      inputLabel: x,
      htmlInput: O,
      formHelperText: g,
      select: P,
      ...M
    }
  }, Y = {}, te = Q.slotProps.inputLabel;
  h === "outlined" && (te && typeof te.shrink < "u" && (Y.notched = te.shrink), Y.label = y), $ && ((!P || !P.native) && (Y.id = void 0), Y["aria-describedby"] = void 0);
  const [H, se] = xe("root", {
    elementType: Yg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...Q,
      ...A
    },
    ownerState: L,
    className: ne(z.root, l),
    ref: n,
    additionalProps: {
      disabled: p,
      error: m,
      fullWidth: b,
      required: N,
      color: c,
      variant: h
    }
  }), [ie, me] = xe("input", {
    elementType: X,
    externalForwardedProps: Q,
    additionalProps: Y,
    ownerState: L
  }), [Ie, Re] = xe("inputLabel", {
    elementType: gg,
    externalForwardedProps: Q,
    ownerState: L
  }), [Se, je] = xe("htmlInput", {
    elementType: "input",
    externalForwardedProps: Q,
    ownerState: L
  }), [Oe, we] = xe("formHelperText", {
    elementType: Sg,
    externalForwardedProps: Q,
    ownerState: L
  }), [oe, Be] = xe("select", {
    elementType: zg,
    externalForwardedProps: Q,
    ownerState: L
  }), Ne = /* @__PURE__ */ j.jsx(ie, {
    "aria-describedby": ee,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: b,
    multiline: I,
    name: _,
    rows: R,
    maxRows: E,
    minRows: S,
    type: B,
    value: k,
    id: K,
    inputRef: w,
    onBlur: D,
    onChange: W,
    onFocus: U,
    placeholder: d,
    inputProps: je,
    slots: {
      input: V.htmlInput ? Se : void 0
    },
    ...me
  });
  return /* @__PURE__ */ j.jsxs(H, {
    ...se,
    children: [y != null && y !== "" && /* @__PURE__ */ j.jsx(Ie, {
      htmlFor: K,
      id: q,
      ...Re,
      children: y
    }), $ ? /* @__PURE__ */ j.jsx(oe, {
      "aria-describedby": ee,
      id: K,
      labelId: q,
      value: k,
      input: Ne,
      ...Be,
      children: a
    }) : Ne, v && /* @__PURE__ */ j.jsx(Oe, {
      id: ee,
      ...we,
      children: v
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ul.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: dt,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: o.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: o.object,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    formHelperText: o.oneOfType([o.func, o.object]),
    htmlInput: o.oneOfType([o.func, o.object]),
    input: o.oneOfType([o.func, o.object]),
    inputLabel: o.oneOfType([o.func, o.object]),
    select: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    formHelperText: o.elementType,
    htmlInput: o.elementType,
    input: o.elementType,
    inputLabel: o.elementType,
    root: o.elementType,
    select: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const Gg = Ul;
function Kg(e) {
  return ue("MuiToolbar", e);
}
ce("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const Xg = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return pe({
    root: ["root", !n && "gutters", r]
  }, Kg, t);
}, Jg = J("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(de(({
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
}))), zl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: s = "div",
    disableGutters: a = !1,
    variant: l = "regular",
    ...c
  } = r, u = {
    ...r,
    component: s,
    disableGutters: a,
    variant: l
  }, p = Xg(u);
  return /* @__PURE__ */ j.jsx(Jg, {
    as: s,
    className: ne(p.root, i),
    ref: n,
    ownerState: u,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (zl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: o.oneOfType([o.oneOf(["dense", "regular"]), o.string])
});
const Qg = zl, Zg = Ap({
  themeId: Xo
}), eb = Zg, tb = J(Qg)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), ob = ({
  appName: e = "Dashboard",
  pageName: t = "Home",
  onMenuClick: n,
  showMenuButton: r = !0,
  headerStyles: i,
  userName: s = "User Name",
  userEmail: a,
  userAvatar: l,
  onProfileClick: c,
  onAccountClick: u,
  onSettingsClick: p,
  onLogout: m,
  showNotifications: g = !1,
  notificationCount: b = 0,
  showSearchbar: v = !0,
  searchValue: f,
  onSearchChange: x,
  onSearchSubmit: O,
  showProfile: C = !0,
  userRole: w,
  accentColor: y = "#01584f",
  contentBackgroundColor: E = "#f2f9fc",
  navbarBackground: S = "#ff0000",
  navbarAccentColor: I = "#000000"
}) => {
  const _ = eb((M) => M.breakpoints.up("md")), [D, W] = T.useState(null), U = !!D, d = (M) => {
    x == null || x(M.target.value);
  }, N = (M) => {
    M.key === "Enter" && O && f && O(f);
  }, R = (M) => M ? M.charAt(0).toUpperCase() + M.slice(1).toLowerCase() : "User", $ = (M) => {
    W(M.currentTarget);
  }, P = () => {
    W(null);
  }, V = (M) => {
    M == null || M(), P();
  };
  return /* @__PURE__ */ G.jsxDEV(
    vf,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: S,
        backgroundImage: "none",
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...i
      },
      children: /* @__PURE__ */ G.jsxDEV(tb, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ G.jsxDEV(
          st,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              r && !_ && /* @__PURE__ */ G.jsxDEV(
                zo,
                {
                  "aria-label": "menu",
                  onClick: n,
                  sx: {
                    color: I,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ G.jsxDEV(sf, {}, void 0, !1, {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                    lineNumber: 161,
                    columnNumber: 8
                  }, globalThis)
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                  lineNumber: 152,
                  columnNumber: 7
                },
                globalThis
              ),
              /* @__PURE__ */ G.jsxDEV(
                st,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ G.jsxDEV(
                      It,
                      {
                        variant: "h6",
                        sx: {
                          color: I,
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: 1,
                          textTransform: "uppercase"
                        },
                        children: e
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 172,
                        columnNumber: 7
                      },
                      globalThis
                    ),
                    /* @__PURE__ */ G.jsxDEV("img", { src: "/lumora-logo.svg", alt: "NEXA Logo", width: 24, height: 24, style: { flexShrink: 0 } }, void 0, !1, {
                      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                      lineNumber: 183,
                      columnNumber: 7
                    }, globalThis)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                  lineNumber: 165,
                  columnNumber: 6
                },
                globalThis
              ),
              v && _ && /* @__PURE__ */ G.jsxDEV(
                Gg,
                {
                  placeholder: "Search for deals or documents...",
                  value: f || "",
                  onChange: d,
                  onKeyDown: N,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: E,
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "transparent"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: y
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ G.jsxDEV(Lm, { position: "start", children: /* @__PURE__ */ G.jsxDEV(lf, { sx: { color: I } }, void 0, !1, {
                      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                      lineNumber: 212,
                      columnNumber: 11
                    }, globalThis) }, void 0, !1, {
                      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                      lineNumber: 211,
                      columnNumber: 10
                    }, globalThis)
                  }
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                  lineNumber: 187,
                  columnNumber: 7
                },
                globalThis
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
            lineNumber: 143,
            columnNumber: 5
          },
          globalThis
        ),
        /* @__PURE__ */ G.jsxDEV(
          st,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              g && /* @__PURE__ */ G.jsxDEV(
                Ya,
                {
                  color: "error",
                  variant: "dot",
                  invisible: b === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ G.jsxDEV(zo, { size: "small", sx: { color: I }, children: /* @__PURE__ */ G.jsxDEV(af, {}, void 0, !1, {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                  }, globalThis) }, void 0, !1, {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                    lineNumber: 240,
                    columnNumber: 8
                  }, globalThis)
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                  lineNumber: 230,
                  columnNumber: 7
                },
                globalThis
              ),
              g && C && /* @__PURE__ */ G.jsxDEV(
                Ht,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                  lineNumber: 247,
                  columnNumber: 7
                },
                globalThis
              ),
              C && /* @__PURE__ */ G.jsxDEV(G.Fragment, { children: [
                /* @__PURE__ */ G.jsxDEV(
                  st,
                  {
                    direction: "row",
                    onClick: $,
                    sx: {
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                      borderRadius: "8px",
                      padding: "4px 8px",
                      "&:hover": {
                        backgroundColor: "action.hover"
                      }
                    },
                    children: [
                      l ? /* @__PURE__ */ G.jsxDEV(Wa, { src: l, sx: { width: 32, height: 32 } }, void 0, !1, {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 274,
                        columnNumber: 10
                      }, globalThis) : /* @__PURE__ */ G.jsxDEV(
                        rf,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: I
                          }
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                          lineNumber: 276,
                          columnNumber: 10
                        },
                        globalThis
                      ),
                      /* @__PURE__ */ G.jsxDEV(
                        Io,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ G.jsxDEV(
                              It,
                              {
                                variant: "body2",
                                sx: {
                                  color: I,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: s
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                                lineNumber: 291,
                                columnNumber: 10
                              },
                              globalThis
                            ),
                            /* @__PURE__ */ G.jsxDEV(
                              It,
                              {
                                variant: "caption",
                                sx: {
                                  color: I,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: R(w)
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                                lineNumber: 304,
                                columnNumber: 10
                              },
                              globalThis
                            )
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                          lineNumber: 284,
                          columnNumber: 9
                        },
                        globalThis
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                    lineNumber: 260,
                    columnNumber: 8
                  },
                  globalThis
                ),
                /* @__PURE__ */ G.jsxDEV(
                  Ol,
                  {
                    anchorEl: D,
                    open: U,
                    onClose: P,
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
                      /* @__PURE__ */ G.jsxDEV($s, { onClick: () => V(p), children: "Settings" }, void 0, !1, {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                      }, globalThis),
                      /* @__PURE__ */ G.jsxDEV(Ht, {}, void 0, !1, {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                      }, globalThis),
                      /* @__PURE__ */ G.jsxDEV(
                        $s,
                        {
                          onClick: () => V(m),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ G.jsxDEV(It, { sx: { flexGrow: 1 }, children: "Logout" }, void 0, !1, {
                              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                              lineNumber: 345,
                              columnNumber: 10
                            }, globalThis),
                            /* @__PURE__ */ G.jsxDEV(ja, { fontSize: "small" }, void 0, !1, {
                              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                              lineNumber: 346,
                              columnNumber: 10
                            }, globalThis)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                          lineNumber: 337,
                          columnNumber: 9
                        },
                        globalThis
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                    lineNumber: 318,
                    columnNumber: 8
                  },
                  globalThis
                )
              ] }, void 0, !0, {
                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                lineNumber: 259,
                columnNumber: 7
              }, globalThis)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
            lineNumber: 221,
            columnNumber: 5
          },
          globalThis
        )
      ] }, void 0, !0, {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
        lineNumber: 141,
        columnNumber: 4
      }, globalThis)
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
      lineNumber: 128,
      columnNumber: 3
    },
    globalThis
  );
};
function nb(e) {
  return ue("MuiCard", e);
}
ce("MuiCard", ["root"]);
const rb = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, nb, t);
}, ib = J(Xn, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Wl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiCard"
  }), {
    className: i,
    raised: s = !1,
    ...a
  } = r, l = {
    ...r,
    raised: s
  }, c = rb(l);
  return /* @__PURE__ */ j.jsx(ib, {
    className: ne(c.root, i),
    elevation: s ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: Et(o.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const sb = Wl;
function ab(e) {
  return ue("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const lb = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, ab, t);
}, cb = J("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Hl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiCardContent"
  }), {
    className: i,
    component: s = "div",
    ...a
  } = r, l = {
    ...r,
    component: s
  }, c = lb(l);
  return /* @__PURE__ */ j.jsx(cb, {
    as: s,
    className: ne(c.root, i),
    ownerState: l,
    ref: n,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Hl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const ub = Hl;
function pb(e) {
  return ue("MuiButton", e);
}
const db = ce("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Ft = db, ql = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (ql.displayName = "ButtonGroupContext");
const fb = ql, Yl = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Yl.displayName = "ButtonGroupButtonContext");
const mb = Yl, hb = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: i,
    variant: s,
    loading: a,
    loadingPosition: l,
    classes: c
  } = e, u = {
    root: ["root", a && "loading", s, `${s}${Z(t)}`, `size${Z(i)}`, `${s}Size${Z(i)}`, `color${Z(t)}`, n && "disableElevation", r && "fullWidth", a && `loadingPosition${Z(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${Z(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${Z(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, p = pe(u, pb, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...p
  };
}, Gl = [{
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
}], gb = J(ci, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${Z(n.color)}`], t[`size${Z(n.size)}`], t[`${n.variant}Size${Z(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(de(({
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
    [`&.${Ft.disabled}`]: {
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
        [`&.${Ft.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Ft.disabled}`]: {
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
        [`&.${Ft.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(pt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity)
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
        [`&.${Ft.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Ft.disabled}`]: {
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
        [`&.${Ft.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), bb = J("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${Z(n.size)}`]];
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
  }, ...Gl]
})), yb = J("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${Z(n.size)}`]];
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
  }, ...Gl]
})), vb = J("span", {
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
})), Vs = J("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Kl = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = T.useContext(fb), i = T.useContext(mb), s = Vo(r, t), a = fe({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: p,
    disabled: m = !1,
    disableElevation: g = !1,
    disableFocusRipple: b = !1,
    endIcon: v,
    focusVisibleClassName: f,
    fullWidth: x = !1,
    id: O,
    loading: C = null,
    loadingIndicator: w,
    loadingPosition: y = "center",
    size: E = "medium",
    startIcon: S,
    type: I,
    variant: _ = "text",
    ...D
  } = a, W = Ko(O), U = w ?? /* @__PURE__ */ j.jsx(ol, {
    "aria-labelledby": W,
    color: "inherit",
    size: 16
  }), d = {
    ...a,
    color: c,
    component: u,
    disabled: m,
    disableElevation: g,
    disableFocusRipple: b,
    fullWidth: x,
    loading: C,
    loadingIndicator: U,
    loadingPosition: y,
    size: E,
    type: I,
    variant: _
  }, N = hb(d), R = (S || C && y === "start") && /* @__PURE__ */ j.jsx(bb, {
    className: N.startIcon,
    ownerState: d,
    children: S || /* @__PURE__ */ j.jsx(Vs, {
      className: N.loadingIconPlaceholder,
      ownerState: d
    })
  }), $ = (v || C && y === "end") && /* @__PURE__ */ j.jsx(yb, {
    className: N.endIcon,
    ownerState: d,
    children: v || /* @__PURE__ */ j.jsx(Vs, {
      className: N.loadingIconPlaceholder,
      ownerState: d
    })
  }), P = i || "", V = typeof C == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ j.jsx("span", {
      className: N.loadingWrapper,
      style: {
        display: "contents"
      },
      children: C && /* @__PURE__ */ j.jsx(vb, {
        className: N.loadingIndicator,
        ownerState: d,
        children: U
      })
    })
  ) : null;
  return /* @__PURE__ */ j.jsxs(gb, {
    ownerState: d,
    className: ne(r.className, N.root, p, P),
    component: u,
    disabled: m || C,
    focusRipple: !b,
    focusVisibleClassName: ne(N.focusVisible, f),
    ref: n,
    type: I,
    id: C ? W : O,
    ...D,
    classes: N,
    children: [R, y !== "end" && V, l, y === "end" && V, $]
  });
});
process.env.NODE_ENV !== "production" && (Kl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * Element placed after the children.
   */
  endIcon: o.node,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: o.string,
  /**
   * @ignore
   */
  id: o.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: o.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: o.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: o.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * Element placed before the children.
   */
  startIcon: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["contained", "outlined", "text"]), o.string])
});
const Xl = Kl, xb = Nt(/* @__PURE__ */ j.jsx("path", {
  d: "m19.46 8 .79-1.75L22 5.46c.39-.18.39-.73 0-.91l-1.75-.79L19.46 2c-.18-.39-.73-.39-.91 0l-.79 1.75-1.76.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0M11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5-.79 1.75-1.75.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.73.39.91 0l.79-1.75 1.76-.79c.39-.18.39-.73 0-.91l-1.75-.79-.79-1.76c-.18-.39-.74-.39-.92 0"
}), "AutoAwesomeRounded"), Jl = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: r,
  show: i = !0
}) => i ? /* @__PURE__ */ G.jsxDEV(sb, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ G.jsxDEV(ub, { children: [
  /* @__PURE__ */ G.jsxDEV(xb, { fontSize: "small" }, void 0, !1, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/CardAlert.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, globalThis),
  /* @__PURE__ */ G.jsxDEV(It, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }, void 0, !1, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/CardAlert.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, globalThis),
  /* @__PURE__ */ G.jsxDEV(
    It,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: t
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/CardAlert.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    globalThis
  ),
  /* @__PURE__ */ G.jsxDEV(
    Xl,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: r,
      children: n
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/CardAlert.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    globalThis
  )
] }, void 0, !0, {
  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/CardAlert.tsx",
  lineNumber: 27,
  columnNumber: 4
}, globalThis) }, void 0, !1, {
  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/CardAlert.tsx",
  lineNumber: 26,
  columnNumber: 3
}, globalThis) : null;
var Fe = "top", Ze = "bottom", et = "right", Ve = "left", yi = "auto", Jo = [Fe, Ze, et, Ve], po = "start", Wo = "end", Tb = "clippingParents", Ql = "viewport", No = "popper", Eb = "reference", Us = /* @__PURE__ */ Jo.reduce(function(e, t) {
  return e.concat([t + "-" + po, t + "-" + Wo]);
}, []), Zl = /* @__PURE__ */ [].concat(Jo, [yi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + po, t + "-" + Wo]);
}, []), wb = "beforeRead", Ob = "read", Sb = "afterRead", Cb = "beforeMain", Rb = "main", Nb = "afterMain", kb = "beforeWrite", Pb = "write", $b = "afterWrite", Ib = [wb, Ob, Sb, Cb, Rb, Nb, kb, Pb, $b];
function Tt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function qe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Kt(e) {
  var t = qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function vi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ab(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, s = t.elements[n];
    !Qe(s) || !Tt(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function jb(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], s = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Qe(i) || !Tt(i) || (Object.assign(i.style, l), Object.keys(s).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Db = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ab,
  effect: jb,
  requires: ["computeStyles"]
};
function yt(e) {
  return e.split("-")[0];
}
var qt = Math.max, In = Math.min, fo = Math.round;
function Hr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ec() {
  return !/^((?!chrome|android).)*safari/i.test(Hr());
}
function mo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && Qe(e) && (i = e.offsetWidth > 0 && fo(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && fo(r.height) / e.offsetHeight || 1);
  var a = Kt(e) ? qe(e) : window, l = a.visualViewport, c = !ec() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, p = (r.top + (c && l ? l.offsetTop : 0)) / s, m = r.width / i, g = r.height / s;
  return {
    width: m,
    height: g,
    top: p,
    right: u + m,
    bottom: p + g,
    left: u,
    x: u,
    y: p
  };
}
function xi(e) {
  var t = mo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function tc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && vi(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Rt(e) {
  return qe(e).getComputedStyle(e);
}
function Mb(e) {
  return ["table", "td", "th"].indexOf(Tt(e)) >= 0;
}
function Mt(e) {
  return ((Kt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function nr(e) {
  return Tt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (vi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mt(e)
  );
}
function zs(e) {
  return !Qe(e) || // https://github.com/popperjs/popper-core/issues/837
  Rt(e).position === "fixed" ? null : e.offsetParent;
}
function _b(e) {
  var t = /firefox/i.test(Hr()), n = /Trident/i.test(Hr());
  if (n && Qe(e)) {
    var r = Rt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = nr(e);
  for (vi(i) && (i = i.host); Qe(i) && ["html", "body"].indexOf(Tt(i)) < 0; ) {
    var s = Rt(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Qo(e) {
  for (var t = qe(e), n = zs(e); n && Mb(n) && Rt(n).position === "static"; )
    n = zs(n);
  return n && (Tt(n) === "html" || Tt(n) === "body" && Rt(n).position === "static") ? t : n || _b(e) || t;
}
function Ti(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bo(e, t, n) {
  return qt(e, In(t, n));
}
function Bb(e, t, n) {
  var r = Bo(e, t, n);
  return r > n ? n : r;
}
function oc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function nc(e) {
  return Object.assign({}, oc(), e);
}
function rc(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Lb = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, nc(typeof t != "number" ? t : rc(t, Jo));
};
function Fb(e) {
  var t, n = e.state, r = e.name, i = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, l = yt(n.placement), c = Ti(l), u = [Ve, et].indexOf(l) >= 0, p = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = Lb(i.padding, n), g = xi(s), b = c === "y" ? Fe : Ve, v = c === "y" ? Ze : et, f = n.rects.reference[p] + n.rects.reference[c] - a[c] - n.rects.popper[p], x = a[c] - n.rects.reference[c], O = Qo(s), C = O ? c === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, w = f / 2 - x / 2, y = m[b], E = C - g[p] - m[v], S = C / 2 - g[p] / 2 + w, I = Bo(y, S, E), _ = c;
    n.modifiersData[r] = (t = {}, t[_] = I, t.centerOffset = I - S, t);
  }
}
function Vb(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || tc(t.elements.popper, i) && (t.elements.arrow = i));
}
const Ub = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Fb,
  effect: Vb,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ho(e) {
  return e.split("-")[1];
}
var zb = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Wb(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: fo(n * i) / i || 0,
    y: fo(r * i) / i || 0
  };
}
function Ws(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, m = e.isFixed, g = a.x, b = g === void 0 ? 0 : g, v = a.y, f = v === void 0 ? 0 : v, x = typeof p == "function" ? p({
    x: b,
    y: f
  }) : {
    x: b,
    y: f
  };
  b = x.x, f = x.y;
  var O = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), w = Ve, y = Fe, E = window;
  if (u) {
    var S = Qo(n), I = "clientHeight", _ = "clientWidth";
    if (S === qe(n) && (S = Mt(n), Rt(S).position !== "static" && l === "absolute" && (I = "scrollHeight", _ = "scrollWidth")), S = S, i === Fe || (i === Ve || i === et) && s === Wo) {
      y = Ze;
      var D = m && S === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[I]
      );
      f -= D - r.height, f *= c ? 1 : -1;
    }
    if (i === Ve || (i === Fe || i === Ze) && s === Wo) {
      w = et;
      var W = m && S === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[_]
      );
      b -= W - r.width, b *= c ? 1 : -1;
    }
  }
  var U = Object.assign({
    position: l
  }, u && zb), d = p === !0 ? Wb({
    x: b,
    y: f
  }, qe(n)) : {
    x: b,
    y: f
  };
  if (b = d.x, f = d.y, c) {
    var N;
    return Object.assign({}, U, (N = {}, N[y] = C ? "0" : "", N[w] = O ? "0" : "", N.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + f + "px)" : "translate3d(" + b + "px, " + f + "px, 0)", N));
  }
  return Object.assign({}, U, (t = {}, t[y] = C ? f + "px" : "", t[w] = O ? b + "px" : "", t.transform = "", t));
}
function Hb(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: yt(t.placement),
    variation: ho(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ws(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ws(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const qb = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Hb,
  data: {}
};
var pn = {
  passive: !0
};
function Yb(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, c = qe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(p) {
    p.addEventListener("scroll", n.update, pn);
  }), l && c.addEventListener("resize", n.update, pn), function() {
    s && u.forEach(function(p) {
      p.removeEventListener("scroll", n.update, pn);
    }), l && c.removeEventListener("resize", n.update, pn);
  };
}
const Gb = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Yb,
  data: {}
};
var Kb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Kb[t];
  });
}
var Xb = {
  start: "end",
  end: "start"
};
function Hs(e) {
  return e.replace(/start|end/g, function(t) {
    return Xb[t];
  });
}
function Ei(e) {
  var t = qe(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function wi(e) {
  return mo(Mt(e)).left + Ei(e).scrollLeft;
}
function Jb(e, t) {
  var n = qe(e), r = Mt(e), i = n.visualViewport, s = r.clientWidth, a = r.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = ec();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: l + wi(e),
    y: c
  };
}
function Qb(e) {
  var t, n = Mt(e), r = Ei(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = qt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = qt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + wi(e), c = -r.scrollTop;
  return Rt(i || n).direction === "rtl" && (l += qt(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Oi(e) {
  var t = Rt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function ic(e) {
  return ["html", "body", "#document"].indexOf(Tt(e)) >= 0 ? e.ownerDocument.body : Qe(e) && Oi(e) ? e : ic(nr(e));
}
function Lo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ic(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = qe(r), a = i ? [s].concat(s.visualViewport || [], Oi(r) ? r : []) : r, l = t.concat(a);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Lo(nr(a)))
  );
}
function qr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Zb(e, t) {
  var n = mo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function qs(e, t, n) {
  return t === Ql ? qr(Jb(e, n)) : Kt(t) ? Zb(t, n) : qr(Qb(Mt(e)));
}
function ey(e) {
  var t = Lo(nr(e)), n = ["absolute", "fixed"].indexOf(Rt(e).position) >= 0, r = n && Qe(e) ? Qo(e) : e;
  return Kt(r) ? t.filter(function(i) {
    return Kt(i) && tc(i, r) && Tt(i) !== "body";
  }) : [];
}
function ty(e, t, n, r) {
  var i = t === "clippingParents" ? ey(e) : [].concat(t), s = [].concat(i, [n]), a = s[0], l = s.reduce(function(c, u) {
    var p = qs(e, u, r);
    return c.top = qt(p.top, c.top), c.right = In(p.right, c.right), c.bottom = In(p.bottom, c.bottom), c.left = qt(p.left, c.left), c;
  }, qs(e, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function sc(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? yt(r) : null, s = r ? ho(r) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case Fe:
      c = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Ze:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case et:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Ve:
      c = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? Ti(i) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (s) {
      case po:
        c[u] = c[u] - (t[p] / 2 - n[p] / 2);
        break;
      case Wo:
        c[u] = c[u] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return c;
}
function Ho(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, s = n.strategy, a = s === void 0 ? e.strategy : s, l = n.boundary, c = l === void 0 ? Tb : l, u = n.rootBoundary, p = u === void 0 ? Ql : u, m = n.elementContext, g = m === void 0 ? No : m, b = n.altBoundary, v = b === void 0 ? !1 : b, f = n.padding, x = f === void 0 ? 0 : f, O = nc(typeof x != "number" ? x : rc(x, Jo)), C = g === No ? Eb : No, w = e.rects.popper, y = e.elements[v ? C : g], E = ty(Kt(y) ? y : y.contextElement || Mt(e.elements.popper), c, p, a), S = mo(e.elements.reference), I = sc({
    reference: S,
    element: w,
    strategy: "absolute",
    placement: i
  }), _ = qr(Object.assign({}, w, I)), D = g === No ? _ : S, W = {
    top: E.top - D.top + O.top,
    bottom: D.bottom - E.bottom + O.bottom,
    left: E.left - D.left + O.left,
    right: D.right - E.right + O.right
  }, U = e.modifiersData.offset;
  if (g === No && U) {
    var d = U[i];
    Object.keys(W).forEach(function(N) {
      var R = [et, Ze].indexOf(N) >= 0 ? 1 : -1, $ = [Fe, Ze].indexOf(N) >= 0 ? "y" : "x";
      W[N] += d[$] * R;
    });
  }
  return W;
}
function oy(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, s = n.rootBoundary, a = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Zl : c, p = ho(r), m = p ? l ? Us : Us.filter(function(v) {
    return ho(v) === p;
  }) : Jo, g = m.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  g.length === 0 && (g = m);
  var b = g.reduce(function(v, f) {
    return v[f] = Ho(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[yt(f)], v;
  }, {});
  return Object.keys(b).sort(function(v, f) {
    return b[v] - b[f];
  });
}
function ny(e) {
  if (yt(e) === yi)
    return [];
  var t = yn(e);
  return [Hs(e), t, Hs(t)];
}
function ry(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, p = n.boundary, m = n.rootBoundary, g = n.altBoundary, b = n.flipVariations, v = b === void 0 ? !0 : b, f = n.allowedAutoPlacements, x = t.options.placement, O = yt(x), C = O === x, w = c || (C || !v ? [yn(x)] : ny(x)), y = [x].concat(w).reduce(function(z, K) {
      return z.concat(yt(K) === yi ? oy(t, {
        placement: K,
        boundary: p,
        rootBoundary: m,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: f
      }) : K);
    }, []), E = t.rects.reference, S = t.rects.popper, I = /* @__PURE__ */ new Map(), _ = !0, D = y[0], W = 0; W < y.length; W++) {
      var U = y[W], d = yt(U), N = ho(U) === po, R = [Fe, Ze].indexOf(d) >= 0, $ = R ? "width" : "height", P = Ho(t, {
        placement: U,
        boundary: p,
        rootBoundary: m,
        altBoundary: g,
        padding: u
      }), V = R ? N ? et : Ve : N ? Ze : Fe;
      E[$] > S[$] && (V = yn(V));
      var M = yn(V), B = [];
      if (s && B.push(P[d] <= 0), l && B.push(P[V] <= 0, P[M] <= 0), B.every(function(z) {
        return z;
      })) {
        D = U, _ = !1;
        break;
      }
      I.set(U, B);
    }
    if (_)
      for (var k = v ? 3 : 1, h = function(K) {
        var ee = y.find(function(q) {
          var X = I.get(q);
          if (X)
            return X.slice(0, K).every(function(Q) {
              return Q;
            });
        });
        if (ee)
          return D = ee, "break";
      }, A = k; A > 0; A--) {
        var L = h(A);
        if (L === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const iy = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ry,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ys(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Gs(e) {
  return [Fe, et, Ze, Ve].some(function(t) {
    return e[t] >= 0;
  });
}
function sy(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = Ho(t, {
    elementContext: "reference"
  }), l = Ho(t, {
    altBoundary: !0
  }), c = Ys(a, r), u = Ys(l, i, s), p = Gs(c), m = Gs(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: p,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": m
  });
}
const ay = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sy
};
function ly(e, t, n) {
  var r = yt(e), i = [Ve, Fe].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * i, [Ve, et].indexOf(r) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function cy(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, s = i === void 0 ? [0, 0] : i, a = Zl.reduce(function(p, m) {
    return p[m] = ly(m, t.rects, s), p;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const uy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: cy
};
function py(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = sc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const dy = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: py,
  data: {}
};
function fy(e) {
  return e === "x" ? "y" : "x";
}
function my(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.padding, g = n.tether, b = g === void 0 ? !0 : g, v = n.tetherOffset, f = v === void 0 ? 0 : v, x = Ho(t, {
    boundary: c,
    rootBoundary: u,
    padding: m,
    altBoundary: p
  }), O = yt(t.placement), C = ho(t.placement), w = !C, y = Ti(O), E = fy(y), S = t.modifiersData.popperOffsets, I = t.rects.reference, _ = t.rects.popper, D = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, W = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, d = {
    x: 0,
    y: 0
  };
  if (S) {
    if (s) {
      var N, R = y === "y" ? Fe : Ve, $ = y === "y" ? Ze : et, P = y === "y" ? "height" : "width", V = S[y], M = V + x[R], B = V - x[$], k = b ? -_[P] / 2 : 0, h = C === po ? I[P] : _[P], A = C === po ? -_[P] : -I[P], L = t.elements.arrow, z = b && L ? xi(L) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : oc(), ee = K[R], q = K[$], X = Bo(0, I[P], z[P]), Q = w ? I[P] / 2 - k - X - ee - W.mainAxis : h - X - ee - W.mainAxis, Y = w ? -I[P] / 2 + k + X + q + W.mainAxis : A + X + q + W.mainAxis, te = t.elements.arrow && Qo(t.elements.arrow), H = te ? y === "y" ? te.clientTop || 0 : te.clientLeft || 0 : 0, se = (N = U == null ? void 0 : U[y]) != null ? N : 0, ie = V + Q - se - H, me = V + Y - se, Ie = Bo(b ? In(M, ie) : M, V, b ? qt(B, me) : B);
      S[y] = Ie, d[y] = Ie - V;
    }
    if (l) {
      var Re, Se = y === "x" ? Fe : Ve, je = y === "x" ? Ze : et, Oe = S[E], we = E === "y" ? "height" : "width", oe = Oe + x[Se], Be = Oe - x[je], Ne = [Fe, Ve].indexOf(O) !== -1, ot = (Re = U == null ? void 0 : U[E]) != null ? Re : 0, Ge = Ne ? oe : Oe - I[we] - _[we] - ot + W.altAxis, nt = Ne ? Oe + I[we] + _[we] - ot - W.altAxis : Be, ft = b && Ne ? Bb(Ge, Oe, nt) : Bo(b ? Ge : oe, Oe, b ? nt : Be);
      S[E] = ft, d[E] = ft - Oe;
    }
    t.modifiersData[r] = d;
  }
}
const hy = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: my,
  requiresIfExists: ["offset"]
};
function gy(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function by(e) {
  return e === qe(e) || !Qe(e) ? Ei(e) : gy(e);
}
function yy(e) {
  var t = e.getBoundingClientRect(), n = fo(t.width) / e.offsetWidth || 1, r = fo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function vy(e, t, n) {
  n === void 0 && (n = !1);
  var r = Qe(t), i = Qe(t) && yy(t), s = Mt(t), a = mo(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Tt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Oi(s)) && (l = by(t)), Qe(t) ? (c = mo(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = wi(s))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function xy(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && i(c);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || i(s);
  }), r;
}
function Ty(e) {
  var t = xy(e);
  return Ib.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Ey(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function wy(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ks = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Xs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Oy(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, s = i === void 0 ? Ks : i;
  return function(l, c, u) {
    u === void 0 && (u = s);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ks, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], g = !1, b = {
      state: p,
      setOptions: function(O) {
        var C = typeof O == "function" ? O(p.options) : O;
        f(), p.options = Object.assign({}, s, p.options, C), p.scrollParents = {
          reference: Kt(l) ? Lo(l) : l.contextElement ? Lo(l.contextElement) : [],
          popper: Lo(c)
        };
        var w = Ty(wy([].concat(r, p.options.modifiers)));
        return p.orderedModifiers = w.filter(function(y) {
          return y.enabled;
        }), v(), b.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var O = p.elements, C = O.reference, w = O.popper;
          if (Xs(C, w)) {
            p.rects = {
              reference: vy(C, Qo(w), p.options.strategy === "fixed"),
              popper: xi(w)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(W) {
              return p.modifiersData[W.name] = Object.assign({}, W.data);
            });
            for (var y = 0; y < p.orderedModifiers.length; y++) {
              if (p.reset === !0) {
                p.reset = !1, y = -1;
                continue;
              }
              var E = p.orderedModifiers[y], S = E.fn, I = E.options, _ = I === void 0 ? {} : I, D = E.name;
              typeof S == "function" && (p = S({
                state: p,
                options: _,
                name: D,
                instance: b
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ey(function() {
        return new Promise(function(x) {
          b.forceUpdate(), x(p);
        });
      }),
      destroy: function() {
        f(), g = !0;
      }
    };
    if (!Xs(l, c))
      return b;
    b.setOptions(u).then(function(x) {
      !g && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function v() {
      p.orderedModifiers.forEach(function(x) {
        var O = x.name, C = x.options, w = C === void 0 ? {} : C, y = x.effect;
        if (typeof y == "function") {
          var E = y({
            state: p,
            name: O,
            instance: b,
            options: w
          }), S = function() {
          };
          m.push(E || S);
        }
      });
    }
    function f() {
      m.forEach(function(x) {
        return x();
      }), m = [];
    }
    return b;
  };
}
var Sy = [Gb, dy, qb, Db, uy, iy, hy, Ub, ay], Cy = /* @__PURE__ */ Oy({
  defaultModifiers: Sy
});
function Ry(e) {
  return ue("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function Ny(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function An(e) {
  return typeof e == "function" ? e() : e;
}
function rr(e) {
  return e.nodeType !== void 0;
}
function ky(e) {
  return !rr(e);
}
const Py = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, Ry, t);
}, $y = {}, Iy = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    direction: s,
    disablePortal: a,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: p,
    popperRef: m,
    slotProps: g = {},
    slots: b = {},
    TransitionProps: v,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...x
  } = t, O = T.useRef(null), C = Me(O, n), w = T.useRef(null), y = Me(w, m), E = T.useRef(y);
  ct(() => {
    E.current = y;
  }, [y]), T.useImperativeHandle(m, () => w.current, []);
  const S = Ny(u, s), [I, _] = T.useState(S), [D, W] = T.useState(An(r));
  T.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), T.useEffect(() => {
    r && W(An(r));
  }, [r]), ct(() => {
    if (!D || !c)
      return;
    const $ = (M) => {
      _(M.placement);
    };
    if (process.env.NODE_ENV !== "production" && D && rr(D) && D.nodeType === 1) {
      const M = D.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && M.top === 0 && M.left === 0 && M.right === 0 && M.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let P = [{
      name: "preventOverflow",
      options: {
        altBoundary: a
      }
    }, {
      name: "flip",
      options: {
        altBoundary: a
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: M
      }) => {
        $(M);
      }
    }];
    l != null && (P = P.concat(l)), p && p.modifiers != null && (P = P.concat(p.modifiers));
    const V = Cy(D, O.current, {
      placement: S,
      ...p,
      modifiers: P
    });
    return E.current(V), () => {
      V.destroy(), E.current(null);
    };
  }, [D, a, l, c, p, S]);
  const U = {
    placement: I
  };
  v !== null && (U.TransitionProps = v);
  const d = Py(t), N = b.root ?? "div", R = al({
    elementType: N,
    externalSlotProps: g.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: d.root
  });
  return /* @__PURE__ */ j.jsx(N, {
    ...R,
    children: typeof i == "function" ? i(U) : i
  });
}), ac = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    container: s,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: p,
    placement: m = "bottom",
    popperOptions: g = $y,
    popperRef: b,
    style: v,
    transition: f = !1,
    slotProps: x = {},
    slots: O = {},
    ...C
  } = t, [w, y] = T.useState(!0), E = () => {
    y(!1);
  }, S = () => {
    y(!0);
  };
  if (!c && !p && (!f || w))
    return null;
  let I;
  if (s)
    I = s;
  else if (r) {
    const W = An(r);
    I = W && rr(W) ? He(W).body : He(null).body;
  }
  const _ = !p && c && (!f || w) ? "none" : void 0, D = f ? {
    in: p,
    onEnter: E,
    onExited: S
  } : void 0;
  return /* @__PURE__ */ j.jsx(gl, {
    disablePortal: l,
    container: I,
    children: /* @__PURE__ */ j.jsx(Iy, {
      anchorEl: r,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: f ? !w : p,
      placement: m,
      popperOptions: g,
      popperRef: b,
      slotProps: x,
      slots: O,
      ...C,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: _,
        ...v
      },
      TransitionProps: D,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (ac.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Et(o.oneOfType([xt, o.object, o.func]), (e) => {
    if (e.open) {
      const t = An(e.anchorEl);
      if (t && rr(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || ky(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
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
  container: o.oneOfType([xt, o.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: o.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: dt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
const Ay = ac, jy = J(Ay, {
  name: "MuiPopper",
  slot: "Root"
})({}), lc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Kn(), i = fe({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: a,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: p,
    keepMounted: m,
    modifiers: g,
    open: b,
    placement: v,
    popperOptions: f,
    popperRef: x,
    transition: O,
    slots: C,
    slotProps: w,
    ...y
  } = i, E = (C == null ? void 0 : C.root) ?? (l == null ? void 0 : l.Root), S = {
    anchorEl: s,
    container: u,
    disablePortal: p,
    keepMounted: m,
    modifiers: g,
    open: b,
    placement: v,
    popperOptions: f,
    popperRef: x,
    transition: O,
    ...y
  };
  return /* @__PURE__ */ j.jsx(jy, {
    as: a,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: E
    },
    slotProps: w ?? c,
    ...S,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (lc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: o.oneOfType([xt, o.object, o.func]),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: o.shape({
    root: o.oneOfType([o.func, o.object])
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
  container: o.oneOfType([xt, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: dt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
const cc = lc;
function Dy(e) {
  return ue("MuiTooltip", e);
}
const My = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), $e = My;
function _y(e) {
  return Math.round(e * 1e5) / 1e5;
}
const By = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: i,
    placement: s
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", i && "touch", `tooltipPlacement${Z(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return pe(a, Dy, t);
}, Ly = J(cc, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(de(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: t
    }) => !t,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${$e.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${$e.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${$e.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${$e.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${$e.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${$e.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${$e.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${$e.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), Fy = J("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${Z(n.placement.split("-")[0])}`]];
  }
})(de(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${$e.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${$e.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${$e.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${$e.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${_y(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${$e.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${$e.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${$e.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${$e.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${$e.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${$e.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${$e.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${$e.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${$e.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${$e.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Vy = J("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(de(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let dn = !1;
const Js = new Jn();
let ko = {
  x: 0,
  y: 0
};
function fn(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const uc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: i = !1,
    children: s,
    classes: a,
    components: l = {},
    componentsProps: c = {},
    describeChild: u = !1,
    disableFocusListener: p = !1,
    disableHoverListener: m = !1,
    disableInteractive: g = !1,
    disableTouchListener: b = !1,
    enterDelay: v = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: x = 700,
    followCursor: O = !1,
    id: C,
    leaveDelay: w = 0,
    leaveTouchDelay: y = 1500,
    onClose: E,
    onOpen: S,
    open: I,
    placement: _ = "bottom",
    PopperComponent: D,
    PopperProps: W = {},
    slotProps: U = {},
    slots: d = {},
    title: N,
    TransitionComponent: R,
    TransitionProps: $,
    ...P
  } = r, V = /* @__PURE__ */ T.isValidElement(s) ? s : /* @__PURE__ */ j.jsx("span", {
    children: s
  }), M = go(), B = Kn(), [k, h] = T.useState(), [A, L] = T.useState(null), z = T.useRef(!1), K = g || O, ee = so(), q = so(), X = so(), Q = so(), [Y, te] = Dr({
    controlled: I,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let H = Y;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: le
    } = T.useRef(I !== void 0);
    T.useEffect(() => {
      k && k.disabled && !le && N !== "" && k.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [N, k, le]);
  }
  const se = Ko(C), ie = T.useRef(), me = Ct(() => {
    ie.current !== void 0 && (document.body.style.WebkitUserSelect = ie.current, ie.current = void 0), Q.clear();
  });
  T.useEffect(() => me, [me]);
  const Ie = (le) => {
    Js.clear(), dn = !0, te(!0), S && !H && S(le);
  }, Re = Ct(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (le) => {
      Js.start(800 + w, () => {
        dn = !1;
      }), te(!1), E && H && E(le), ee.start(M.transitions.duration.shortest, () => {
        z.current = !1;
      });
    }
  ), Se = (le) => {
    z.current && le.type !== "touchstart" || (k && k.removeAttribute("title"), q.clear(), X.clear(), v || dn && f ? q.start(dn ? f : v, () => {
      Ie(le);
    }) : Ie(le));
  }, je = (le) => {
    q.clear(), X.start(w, () => {
      Re(le);
    });
  }, [, Oe] = T.useState(!1), we = (le) => {
    Sn(le.target) || (Oe(!1), je(le));
  }, oe = (le) => {
    k || h(le.currentTarget), Sn(le.target) && (Oe(!0), Se(le));
  }, Be = (le) => {
    z.current = !0;
    const rt = V.props;
    rt.onTouchStart && rt.onTouchStart(le);
  }, Ne = (le) => {
    Be(le), X.clear(), ee.clear(), me(), ie.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(x, () => {
      document.body.style.WebkitUserSelect = ie.current, Se(le);
    });
  }, ot = (le) => {
    V.props.onTouchEnd && V.props.onTouchEnd(le), me(), X.start(y, () => {
      Re(le);
    });
  };
  T.useEffect(() => {
    if (!H)
      return;
    function le(rt) {
      rt.key === "Escape" && Re(rt);
    }
    return document.addEventListener("keydown", le), () => {
      document.removeEventListener("keydown", le);
    };
  }, [Re, H]);
  const Ge = Me(Jt(V), h, n);
  !N && N !== 0 && (H = !1);
  const nt = T.useRef(), ft = (le) => {
    const rt = V.props;
    rt.onMouseMove && rt.onMouseMove(le), ko = {
      x: le.clientX,
      y: le.clientY
    }, nt.current && nt.current.update();
  }, Ue = {}, wt = typeof N == "string";
  u ? (Ue.title = !H && wt && !m ? N : null, Ue["aria-describedby"] = H ? se : null) : (Ue["aria-label"] = wt ? N : null, Ue["aria-labelledby"] = H && !wt ? se : null);
  const ae = {
    ...Ue,
    ...P,
    ...V.props,
    className: ne(P.className, V.props.className),
    onTouchStart: Be,
    ref: Ge,
    ...O ? {
      onMouseMove: ft
    } : {}
  };
  process.env.NODE_ENV !== "production" && (ae["data-mui-internal-clone-element"] = !0, T.useEffect(() => {
    k && !k.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [k]));
  const Ke = {};
  b || (ae.onTouchStart = Ne, ae.onTouchEnd = ot), m || (ae.onMouseOver = fn(Se, ae.onMouseOver), ae.onMouseLeave = fn(je, ae.onMouseLeave), K || (Ke.onMouseOver = Se, Ke.onMouseLeave = je)), p || (ae.onFocus = fn(oe, ae.onFocus), ae.onBlur = fn(we, ae.onBlur), K || (Ke.onFocus = oe, Ke.onBlur = we)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const Le = {
    ...r,
    isRtl: B,
    arrow: i,
    disableInteractive: K,
    placement: _,
    PopperComponentProp: D,
    touch: z.current
  }, ze = typeof U.popper == "function" ? U.popper(Le) : U.popper, Zo = T.useMemo(() => {
    var rt, Si;
    let le = [{
      name: "arrow",
      enabled: !!A,
      options: {
        element: A,
        padding: 4
      }
    }];
    return (rt = W.popperOptions) != null && rt.modifiers && (le = le.concat(W.popperOptions.modifiers)), (Si = ze == null ? void 0 : ze.popperOptions) != null && Si.modifiers && (le = le.concat(ze.popperOptions.modifiers)), {
      ...W.popperOptions,
      ...ze == null ? void 0 : ze.popperOptions,
      modifiers: le
    };
  }, [A, W.popperOptions, ze == null ? void 0 : ze.popperOptions]), Qt = By(Le), en = typeof U.transition == "function" ? U.transition(Le) : U.transition, _t = {
    slots: {
      popper: l.Popper,
      transition: l.Transition ?? R,
      tooltip: l.Tooltip,
      arrow: l.Arrow,
      ...d
    },
    slotProps: {
      arrow: U.arrow ?? c.arrow,
      popper: {
        ...W,
        ...ze ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: U.tooltip ?? c.tooltip,
      transition: {
        ...$,
        ...en ?? c.transition
      }
    }
  }, [tn, re] = xe("popper", {
    elementType: Ly,
    externalForwardedProps: _t,
    ownerState: Le,
    className: ne(Qt.popper, W == null ? void 0 : W.className)
  }), [he, De] = xe("transition", {
    elementType: hl,
    externalForwardedProps: _t,
    ownerState: Le
  }), [Pt, on] = xe("tooltip", {
    elementType: Fy,
    className: Qt.tooltip,
    externalForwardedProps: _t,
    ownerState: Le
  }), [bc, yc] = xe("arrow", {
    elementType: Vy,
    className: Qt.arrow,
    externalForwardedProps: _t,
    ownerState: Le,
    ref: L
  });
  return /* @__PURE__ */ j.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ T.cloneElement(V, ae), /* @__PURE__ */ j.jsx(tn, {
      as: D ?? cc,
      placement: _,
      anchorEl: O ? {
        getBoundingClientRect: () => ({
          top: ko.y,
          left: ko.x,
          right: ko.x,
          bottom: ko.y,
          width: 0,
          height: 0
        })
      } : k,
      popperRef: nt,
      open: k ? H : !1,
      id: se,
      transition: !0,
      ...Ke,
      ...re,
      popperOptions: Zo,
      children: ({
        TransitionProps: le
      }) => /* @__PURE__ */ j.jsx(he, {
        timeout: M.transitions.duration.shorter,
        ...le,
        ...De,
        children: /* @__PURE__ */ j.jsxs(Pt, {
          ...on,
          children: [N, i ? /* @__PURE__ */ j.jsx(bc, {
            ...yc
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (uc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: o.bool,
  /**
   * Tooltip reference element.
   */
  children: bo.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    Arrow: o.elementType,
    Popper: o.elementType,
    Tooltip: o.elementType,
    Transition: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    arrow: o.object,
    popper: o.object,
    tooltip: o.object,
    transition: o.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: o.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: o.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: o.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: o.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: o.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: o.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: o.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: o.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: o.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: o.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: o.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: o.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: o.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: o.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    arrow: o.oneOfType([o.func, o.object]),
    popper: o.oneOfType([o.func, o.object]),
    tooltip: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    arrow: o.elementType,
    popper: o.elementType,
    tooltip: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: o.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: o.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: o.object
});
const Qs = uc, pc = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: r,
  accentColor: i = "#01584f"
}) => {
  const s = (a) => {
    r && r(a);
  };
  return /* @__PURE__ */ G.jsxDEV(
    st,
    {
      sx: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: 1
      },
      children: [
        e.map((a, l) => /* @__PURE__ */ G.jsxDEV(T.Fragment, { children: [
          /* @__PURE__ */ G.jsxDEV(Qs, { title: a.text, placement: "right", arrow: !0, children: /* @__PURE__ */ G.jsxDEV(
            zo,
            {
              component: "a",
              href: a.path,
              onClick: () => s(a.path),
              sx: {
                width: 44,
                height: 44,
                color: n === a.path ? "#ffffff" : i,
                backgroundColor: n === a.path ? i : "transparent",
                borderRadius: n === a.path ? "4px" : "50%",
                "&:hover": {
                  backgroundColor: n === a.path ? i : "action.hover",
                  borderRadius: "4px"
                }
              },
              children: a.icon
            },
            void 0,
            !1,
            {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
              lineNumber: 42,
              columnNumber: 7
            },
            globalThis
          ) }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 41,
            columnNumber: 6
          }, globalThis),
          l < e.length - 1 && /* @__PURE__ */ G.jsxDEV(Io, { sx: { width: "100%", display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ G.jsxDEV(Ht, { sx: { width: "60%", borderColor: "divider" } }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 62,
            columnNumber: 8
          }, globalThis) }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 61,
            columnNumber: 7
          }, globalThis)
        ] }, l, !0, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
          lineNumber: 40,
          columnNumber: 5
        }, globalThis)),
        t.length > 0 && /* @__PURE__ */ G.jsxDEV(G.Fragment, { children: [
          /* @__PURE__ */ G.jsxDEV(Io, { sx: { width: "100%", my: 2, display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ G.jsxDEV(Ht, { sx: { width: "60%", borderColor: "divider" } }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 70,
            columnNumber: 7
          }, globalThis) }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 69,
            columnNumber: 6
          }, globalThis),
          /* @__PURE__ */ G.jsxDEV(Io, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ G.jsxDEV(st, { gap: 1, alignItems: "center", children: t.map((a, l) => /* @__PURE__ */ G.jsxDEV(T.Fragment, { children: [
            /* @__PURE__ */ G.jsxDEV(Qs, { title: a.text, placement: "right", arrow: !0, children: /* @__PURE__ */ G.jsxDEV(
              zo,
              {
                component: "a",
                href: a.path,
                onClick: () => s(a.path),
                sx: {
                  width: 48,
                  height: 48,
                  color: n === a.path ? "#ffffff" : "text.secondary",
                  backgroundColor: n === a.path ? "#01584F" : "transparent",
                  borderRadius: n === a.path ? "4px" : "50%",
                  "&:hover": {
                    backgroundColor: n === a.path ? "#01584F" : "action.hover",
                    borderRadius: "4px"
                  }
                },
                children: a.icon
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
                lineNumber: 77,
                columnNumber: 11
              },
              globalThis
            ) }, void 0, !1, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
              lineNumber: 76,
              columnNumber: 10
            }, globalThis),
            l < t.length - 1 && /* @__PURE__ */ G.jsxDEV(Io, { sx: { width: "100%", display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ G.jsxDEV(Ht, { sx: { width: "60%", borderColor: "divider" } }, void 0, !1, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
              lineNumber: 98,
              columnNumber: 12
            }, globalThis) }, void 0, !1, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
              lineNumber: 97,
              columnNumber: 11
            }, globalThis)
          ] }, l, !0, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, globalThis)) }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 73,
            columnNumber: 7
          }, globalThis) }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 72,
            columnNumber: 6
          }, globalThis)
        ] }, void 0, !0, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
          lineNumber: 68,
          columnNumber: 5
        }, globalThis)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
      lineNumber: 31,
      columnNumber: 3
    },
    globalThis
  );
}, Uy = Nt(/* @__PURE__ */ j.jsx("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z"
}), "NotificationsRounded");
function zy(e, t, n) {
  const r = t.getBoundingClientRect(), i = n && n.getBoundingClientRect(), s = ut(t);
  let a;
  if (t.fakeTransform)
    a = t.fakeTransform;
  else {
    const u = s.getComputedStyle(t);
    a = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let l = 0, c = 0;
  if (a && a !== "none" && typeof a == "string") {
    const u = a.split("(")[1].split(")")[0].split(",");
    l = parseInt(u[4], 10), c = parseInt(u[5], 10);
  }
  return e === "left" ? i ? `translateX(${i.right + l - r.left}px)` : `translateX(${s.innerWidth + l - r.left}px)` : e === "right" ? i ? `translateX(-${r.right - i.left - l}px)` : `translateX(-${r.left + r.width - l}px)` : e === "up" ? i ? `translateY(${i.bottom + c - r.top}px)` : `translateY(${s.innerHeight + c - r.top}px)` : i ? `translateY(-${r.top - i.top + r.height - c}px)` : `translateY(-${r.top + r.height - c}px)`;
}
function dc(e) {
  return typeof e == "function" ? e() : e;
}
function mn(e, t, n) {
  const r = dc(n), i = zy(e, t, r);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const fc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = go(), i = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, s = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: l = !0,
    children: c,
    container: u,
    direction: p = "down",
    easing: m = i,
    in: g,
    onEnter: b,
    onEntered: v,
    onEntering: f,
    onExit: x,
    onExited: O,
    onExiting: C,
    style: w,
    timeout: y = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = si,
    ...S
  } = t, I = T.useRef(null), _ = Me(Jt(c), I, n), D = (M) => (B) => {
    M && (B === void 0 ? M(I.current) : M(I.current, B));
  }, W = D((M, B) => {
    mn(p, M, u), ui(M), b && b(M, B);
  }), U = D((M, B) => {
    const k = co({
      timeout: y,
      style: w,
      easing: m
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = r.transitions.create("-webkit-transform", {
      ...k
    }), M.style.transition = r.transitions.create("transform", {
      ...k
    }), M.style.webkitTransform = "none", M.style.transform = "none", f && f(M, B);
  }), d = D(v), N = D(C), R = D((M) => {
    const B = co({
      timeout: y,
      style: w,
      easing: m
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = r.transitions.create("-webkit-transform", B), M.style.transition = r.transitions.create("transform", B), mn(p, M, u), x && x(M);
  }), $ = D((M) => {
    M.style.webkitTransition = "", M.style.transition = "", O && O(M);
  }), P = (M) => {
    a && a(I.current, M);
  }, V = T.useCallback(() => {
    I.current && mn(p, I.current, u);
  }, [p, u]);
  return T.useEffect(() => {
    if (g || p === "down" || p === "right")
      return;
    const M = ni(() => {
      I.current && mn(p, I.current, u);
    }), B = ut(I.current);
    return B.addEventListener("resize", M), () => {
      M.clear(), B.removeEventListener("resize", M);
    };
  }, [p, g, u]), T.useEffect(() => {
    g || V();
  }, [g, V]), /* @__PURE__ */ j.jsx(E, {
    nodeRef: I,
    onEnter: W,
    onEntered: d,
    onEntering: U,
    onExit: R,
    onExited: $,
    onExiting: N,
    addEndListener: P,
    appear: l,
    in: g,
    timeout: y,
    ...S,
    children: (M, {
      ownerState: B,
      ...k
    }) => /* @__PURE__ */ T.cloneElement(c, {
      ref: _,
      style: {
        visibility: M === "exited" && !g ? "hidden" : void 0,
        ...w,
        ...c.props.style
      },
      ...k
    })
  });
});
process.env.NODE_ENV !== "production" && (fc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: bo.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Et(o.oneOfType([xt, o.func]), (e) => {
    if (e.open) {
      const t = dc(e.container);
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
  direction: o.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const Wy = fc;
function Hy(e) {
  return ue("MuiDrawer", e);
}
ce("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const mc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, qy = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: r
  } = e, i = {
    root: ["root", `anchor${Z(n)}`],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${Z(n)}`, r !== "temporary" && `paperAnchorDocked${Z(n)}`]
  };
  return pe(i, Hy, t);
}, Yy = J(xl, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: mc
})(de(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), Gy = J("div", {
  shouldForwardProp: Ye,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: mc
})({
  flex: "0 0 auto"
}), Ky = J(Xn, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${Z(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${Z(n.anchor)}`]];
  }
})(de(({
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
}))), hc = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function Xy(e) {
  return ["left", "right"].includes(e);
}
function Jy({
  direction: e
}, t) {
  return e === "rtl" && Xy(t) ? hc[t] : t;
}
const gc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiDrawer"
  }), i = go(), s = Kn(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: u,
    className: p,
    elevation: m = 16,
    hideBackdrop: g = !1,
    ModalProps: {
      BackdropProps: b,
      ...v
    } = {},
    onClose: f,
    open: x = !1,
    PaperProps: O = {},
    SlideProps: C,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w,
    transitionDuration: y = a,
    variant: E = "temporary",
    slots: S = {},
    slotProps: I = {},
    ..._
  } = r, D = T.useRef(!1);
  T.useEffect(() => {
    D.current = !0;
  }, []);
  const W = Jy({
    direction: s ? "rtl" : "ltr"
  }, l), d = {
    ...r,
    anchor: l,
    elevation: m,
    open: x,
    variant: E,
    ..._
  }, N = qy(d), R = {
    slots: {
      transition: w,
      ...S
    },
    slotProps: {
      paper: O,
      transition: C,
      ...I,
      backdrop: Aa(I.backdrop || {
        ...c,
        ...b
      }, {
        transitionDuration: y
      })
    }
  }, [$, P] = xe("root", {
    ref: n,
    elementType: Yy,
    className: ne(N.root, N.modal, p),
    shouldForwardComponentProp: !0,
    ownerState: d,
    externalForwardedProps: {
      ...R,
      ..._,
      ...v
    },
    additionalProps: {
      open: x,
      onClose: f,
      hideBackdrop: g,
      slots: {
        backdrop: R.slots.backdrop
      },
      slotProps: {
        backdrop: R.slotProps.backdrop
      }
    }
  }), [V, M] = xe("paper", {
    elementType: Ky,
    shouldForwardComponentProp: !0,
    className: ne(N.paper, O.className),
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: {
      elevation: E === "temporary" ? m : 0,
      square: !0,
      ...E === "temporary" && {
        role: "dialog",
        "aria-modal": "true"
      }
    }
  }), [B, k] = xe("docked", {
    elementType: Gy,
    ref: n,
    className: ne(N.root, N.docked, p),
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: _
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [h, A] = xe("transition", {
    elementType: Wy,
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: {
      in: x,
      direction: hc[W],
      timeout: y,
      appear: D.current
    }
  }), L = /* @__PURE__ */ j.jsx(V, {
    ...M,
    children: u
  });
  if (E === "permanent")
    return /* @__PURE__ */ j.jsx(B, {
      ...k,
      children: L
    });
  const z = /* @__PURE__ */ j.jsx(h, {
    ...A,
    children: L
  });
  return E === "persistent" ? /* @__PURE__ */ j.jsx(B, {
    ...k,
    children: z
  }) : /* @__PURE__ */ j.jsx($, {
    ...P,
    children: z
  });
});
process.env.NODE_ENV !== "production" && (gc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: o.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: o.object,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: ri,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Props applied to the [`Modal`](https://mui.com/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: o.bool,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @deprecated use the `slotProps.paper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PaperProps: o.object,
  /**
   * Props applied to the [`Slide`](https://mui.com/material-ui/api/slide/) element.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SlideProps: o.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    docked: o.oneOfType([o.func, o.object]),
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object]),
    transition: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    docked: o.elementType,
    paper: o.elementType,
    root: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: o.oneOf(["permanent", "persistent", "temporary"])
});
const Qy = gc, Zy = ({
  open: e,
  onClose: t,
  mainLinks: n,
  secondaryLinks: r = [],
  activePath: i,
  onLinkClick: s,
  userName: a = "User Name",
  userAvatar: l,
  onLogout: c,
  showNotifications: u = !1,
  notificationCount: p = 0,
  alertProps: m,
  accentColor: g = "#01584f"
}) => {
  const b = (v) => {
    s == null || s(v), t();
  };
  return /* @__PURE__ */ G.jsxDEV(
    Qy,
    {
      anchor: "right",
      open: e,
      onClose: t,
      sx: {
        zIndex: (v) => v.zIndex.drawer + 1,
        "& .MuiDrawer-paper": {
          backgroundImage: "none",
          backgroundColor: "background.paper"
        }
      },
      children: /* @__PURE__ */ G.jsxDEV(
        st,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ G.jsxDEV(st, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
              /* @__PURE__ */ G.jsxDEV(
                st,
                {
                  direction: "row",
                  sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                  children: [
                    /* @__PURE__ */ G.jsxDEV(
                      Wa,
                      {
                        sizes: "small",
                        alt: a,
                        src: l,
                        sx: { width: 24, height: 24 }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
                        lineNumber: 84,
                        columnNumber: 7
                      },
                      globalThis
                    ),
                    /* @__PURE__ */ G.jsxDEV(It, { component: "p", variant: "h6", children: a }, void 0, !1, {
                      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
                      lineNumber: 90,
                      columnNumber: 7
                    }, globalThis)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
                  lineNumber: 80,
                  columnNumber: 6
                },
                globalThis
              ),
              u && /* @__PURE__ */ G.jsxDEV(
                Ya,
                {
                  color: "error",
                  variant: "dot",
                  invisible: p === 0,
                  sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                  children: /* @__PURE__ */ G.jsxDEV(zo, { size: "small", children: /* @__PURE__ */ G.jsxDEV(Uy, {}, void 0, !1, {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                  }, globalThis) }, void 0, !1, {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
                    lineNumber: 101,
                    columnNumber: 8
                  }, globalThis)
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
                  lineNumber: 95,
                  columnNumber: 7
                },
                globalThis
              )
            ] }, void 0, !0, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
              lineNumber: 79,
              columnNumber: 5
            }, globalThis),
            /* @__PURE__ */ G.jsxDEV(Ht, {}, void 0, !1, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
              lineNumber: 107,
              columnNumber: 5
            }, globalThis),
            /* @__PURE__ */ G.jsxDEV(st, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ G.jsxDEV(
                pc,
                {
                  mainLinks: n,
                  secondaryLinks: r,
                  activePath: i,
                  onLinkClick: b,
                  accentColor: g
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
                  lineNumber: 109,
                  columnNumber: 6
                },
                globalThis
              ),
              /* @__PURE__ */ G.jsxDEV(Ht, {}, void 0, !1, {
                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
                lineNumber: 116,
                columnNumber: 6
              }, globalThis)
            ] }, void 0, !0, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
              lineNumber: 108,
              columnNumber: 5
            }, globalThis),
            (m == null ? void 0 : m.show) && /* @__PURE__ */ G.jsxDEV(Jl, { ...m }, void 0, !1, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
              lineNumber: 118,
              columnNumber: 26
            }, globalThis),
            /* @__PURE__ */ G.jsxDEV(st, { sx: { p: 2 }, children: /* @__PURE__ */ G.jsxDEV(
              Xl,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ G.jsxDEV(ja, {}, void 0, !1, {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
                  lineNumber: 123,
                  columnNumber: 18
                }, globalThis),
                onClick: c,
                children: "Logout"
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
                lineNumber: 120,
                columnNumber: 6
              },
              globalThis
            ) }, void 0, !1, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
              lineNumber: 119,
              columnNumber: 5
            }, globalThis)
          ]
        },
        void 0,
        !0,
        {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
          lineNumber: 73,
          columnNumber: 4
        },
        globalThis
      )
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
      lineNumber: 61,
      columnNumber: 3
    },
    globalThis
  );
}, lv = ({
  children: e,
  sidebarLinks: t = [],
  secondarySidebarLinks: n = [],
  appName: r = "Dashboard",
  pageName: i = "Home",
  showHeader: s = !0,
  showSidebar: a = !0,
  enableRefreshToken: l = !1,
  activePath: c,
  onLinkClick: u,
  userName: p,
  userEmail: m,
  userAvatar: g,
  onLogout: b,
  onProfileClick: v,
  onAccountClick: f,
  onSettingsClick: x,
  showNotifications: O = !0,
  notificationCount: C = 0,
  showSearchbar: w = !0,
  searchValue: y,
  onSearchChange: E,
  onSearchSubmit: S,
  showProfile: I = !0,
  userRole: _,
  alertProps: D,
  style: W,
  headerStyles: U,
  sidebarStyles: d,
  contentStyles: N,
  accentColor: R = "#01584f",
  contentBackgroundColor: $ = "#f2f9fc",
  navbarBackground: P = "#ffffff",
  navbarAccentColor: V = "#000000",
  GlobalChatSidebar: M,
  useChatSidebar: B
}) => {
  const k = Ec(), h = wc(k.breakpoints.down("md")), [A, L] = ir(!1), [z, K] = ir(!0), [ee, q] = ir(!1), X = B == null ? void 0 : B(), Q = (X == null ? void 0 : X.isOpen) ?? !1, Y = () => {
    L(!A);
  }, te = () => {
    L(!1);
  };
  return sr(() => {
    (() => {
      try {
        if (!localStorage.getItem("lumoraRefreshToken")) {
          console.log("No session found, redirecting to login"), window.location.href = "/login";
          return;
        }
        q(!0);
      } catch (se) {
        console.error("Error checking session:", se), window.location.href = "/login";
      } finally {
        K(!1);
      }
    })();
  }, []), sr(() => (l && jc(), () => {
    Dc();
  }), [l]), sr(() => {
    l && _c();
  }, [l]), z ? /* @__PURE__ */ G.jsxDEV(
    xo,
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
        /* @__PURE__ */ G.jsxDEV(Oc, { size: 60, thickness: 4, sx: { color: R } }, void 0, !1, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
          lineNumber: 197,
          columnNumber: 5
        }, globalThis),
        /* @__PURE__ */ G.jsxDEV(xo, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." }, void 0, !1, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
          lineNumber: 198,
          columnNumber: 5
        }, globalThis)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
      lineNumber: 188,
      columnNumber: 4
    },
    globalThis
  ) : ee ? /* @__PURE__ */ G.jsxDEV(
    xo,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...W
      },
      children: [
        /* @__PURE__ */ G.jsxDEV(Sc, {}, void 0, !1, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
          lineNumber: 216,
          columnNumber: 4
        }, globalThis),
        s && /* @__PURE__ */ G.jsxDEV(
          ob,
          {
            appName: r,
            pageName: i,
            onMenuClick: h && a ? Y : void 0,
            showMenuButton: h && a,
            headerStyles: U,
            userName: p,
            userEmail: m,
            userAvatar: g,
            onProfileClick: v,
            onAccountClick: f,
            onSettingsClick: x,
            onLogout: b,
            showNotifications: O,
            notificationCount: C,
            showSearchbar: w,
            searchValue: y,
            onSearchChange: E,
            onSearchSubmit: S,
            showProfile: I,
            userRole: _,
            accentColor: R,
            contentBackgroundColor: $,
            navbarBackground: P,
            navbarAccentColor: V
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
            lineNumber: 220,
            columnNumber: 5
          },
          globalThis
        ),
        a && !h && /* @__PURE__ */ G.jsxDEV(
          Cc,
          {
            variant: "permanent",
            sx: {
              width: 80,
              flexShrink: 0,
              zIndex: 2,
              // Higher z-index than app bar
              "& .MuiDrawer-paper": {
                width: 80,
                boxSizing: "border-box",
                bgcolor: $,
                borderRight: "none",
                top: s ? "60px" : 0,
                // Position below header
                height: s ? "calc(100vh - 60px)" : "100vh"
              },
              ...d
            },
            children: /* @__PURE__ */ G.jsxDEV(
              xo,
              {
                sx: {
                  overflow: "auto",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  pt: 2
                },
                children: [
                  /* @__PURE__ */ G.jsxDEV(
                    pc,
                    {
                      mainLinks: t,
                      secondaryLinks: n,
                      activePath: c,
                      onLinkClick: u,
                      accentColor: R
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                      lineNumber: 274,
                      columnNumber: 7
                    },
                    globalThis
                  ),
                  (D == null ? void 0 : D.show) && /* @__PURE__ */ G.jsxDEV(Jl, { ...D }, void 0, !1, {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                    lineNumber: 281,
                    columnNumber: 28
                  }, globalThis)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                lineNumber: 266,
                columnNumber: 6
              },
              globalThis
            )
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
            lineNumber: 250,
            columnNumber: 5
          },
          globalThis
        ),
        a && h && /* @__PURE__ */ G.jsxDEV(
          Zy,
          {
            open: A,
            onClose: te,
            mainLinks: t,
            secondaryLinks: n,
            activePath: c,
            onLinkClick: u,
            userName: p,
            userEmail: m,
            userAvatar: g,
            onLogout: b,
            onProfileClick: v,
            showNotifications: O,
            notificationCount: C,
            alertProps: D,
            accentColor: R
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
            lineNumber: 288,
            columnNumber: 5
          },
          globalThis
        ),
        /* @__PURE__ */ G.jsxDEV(
          xo,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              m: 1,
              width: h ? "100%" : a ? "calc(100% - 80px)" : "100%",
              mt: s ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: $,
              // White background for main content
              ...N
            },
            children: /* @__PURE__ */ G.jsxDEV(ar, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ G.jsxDEV(
                ar,
                {
                  size: { xs: 12, md: Q && M ? 8.5 : 12 },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                  lineNumber: 321,
                  columnNumber: 6
                },
                globalThis
              ),
              Q && M && /* @__PURE__ */ G.jsxDEV(
                ar,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    position: { xs: "static", md: "sticky" },
                    top: { xs: "auto", md: s ? "60px" : "0px" },
                    // Stick below navbar
                    alignSelf: "flex-start",
                    height: {
                      xs: "auto",
                      md: s ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    },
                    // Viewport - navbar - top padding - top margin
                    maxHeight: {
                      xs: "none",
                      md: s ? "calc(100vh - 60px - 24px - 8px)" : "calc(100vh - 24px - 8px)"
                    }
                    // Viewport - navbar - top padding - top margin
                  },
                  children: /* @__PURE__ */ G.jsxDEV(M, {}, void 0, !1, {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                    lineNumber: 347,
                    columnNumber: 8
                  }, globalThis)
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                  lineNumber: 330,
                  columnNumber: 7
                },
                globalThis
              )
            ] }, void 0, !0, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
              lineNumber: 320,
              columnNumber: 5
            }, globalThis)
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
            lineNumber: 308,
            columnNumber: 4
          },
          globalThis
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
      lineNumber: 210,
      columnNumber: 3
    },
    globalThis
  ) : null;
};
export {
  lv as LumoraWrapper,
  lv as default,
  av as logoutUser
};
