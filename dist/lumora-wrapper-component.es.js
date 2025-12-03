var cc = Object.defineProperty;
var uc = (e, t, o) => t in e ? cc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var bn = (e, t, o) => (uc(e, typeof t != "symbol" ? t + "" : t, o), o);
import * as x from "react";
import gt, { Children as pc, isValidElement as po, cloneElement as fo, useState as tr, useEffect as nr } from "react";
import { useTheme as dc, useMediaQuery as fc, Box as vn, CircularProgress as mc, CssBaseline as hc, Drawer as gc, Grid as or } from "@mui/material";
import Vr from "axios";
import yc from "@emotion/styled";
import { Global as bc, ThemeContext as vc, keyframes as Hn, css as Us } from "@emotion/react";
import * as xc from "react-dom";
import no from "react-dom";
function Tc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Er = { exports: {} }, xn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi;
function Ec() {
  if (xi)
    return xn;
  xi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(r, i, s) {
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
  return xn.Fragment = t, xn.jsx = o, xn.jsxs = o, xn;
}
var Tn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti;
function Oc() {
  return Ti || (Ti = 1, process.env.NODE_ENV !== "production" && function() {
    function e(S) {
      if (S == null)
        return null;
      if (typeof S == "function")
        return S.$$typeof === F ? null : S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case v:
          return "Fragment";
        case R:
          return "Profiler";
        case w:
          return "StrictMode";
        case C:
          return "Suspense";
        case N:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case f:
            return "Portal";
          case y:
            return S.displayName || "Context";
          case E:
            return (S._context.displayName || "Context") + ".Consumer";
          case T:
            var W = S.render;
            return S = S.displayName, S || (S = W.displayName || W.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case D:
            return W = S.displayName || null, W !== null ? W : e(S.type) || "Memo";
          case A:
            W = S._payload, S = S._init;
            try {
              return e(S(W));
            } catch {
            }
        }
      return null;
    }
    function t(S) {
      return "" + S;
    }
    function o(S) {
      try {
        t(S);
        var W = !1;
      } catch {
        W = !0;
      }
      if (W) {
        W = console;
        var U = W.error, H = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return U.call(
          W,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), t(S);
      }
    }
    function r(S) {
      if (S === v)
        return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === A)
        return "<...>";
      try {
        var W = e(S);
        return W ? "<" + W + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var S = d.A;
      return S === null ? null : S.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(S) {
      if ($.call(S, "key")) {
        var W = Object.getOwnPropertyDescriptor(S, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function l(S, W) {
      function U() {
        k || (k = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          W
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: U,
        configurable: !0
      });
    }
    function c() {
      var S = e(this.type);
      return L[S] || (L[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function u(S, W, U, H, G, Z) {
      var Y = U.ref;
      return S = {
        $$typeof: b,
        type: S,
        key: W,
        props: U,
        _owner: H
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function p(S, W, U, H, G, Z) {
      var Y = W.children;
      if (Y !== void 0)
        if (H)
          if (P(Y)) {
            for (H = 0; H < Y.length; H++)
              m(Y[H]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          m(Y);
      if ($.call(W, "key")) {
        Y = e(S);
        var Q = Object.keys(W).filter(function(q) {
          return q !== "key";
        });
        H = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", I[Y + H] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          Y,
          Q,
          Y
        ), I[Y + H] = !0);
      }
      if (Y = null, U !== void 0 && (o(U), Y = "" + U), a(W) && (o(W.key), Y = "" + W.key), "key" in W) {
        U = {};
        for (var J in W)
          J !== "key" && (U[J] = W[J]);
      } else
        U = W;
      return Y && l(
        U,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), u(
        S,
        Y,
        U,
        i(),
        G,
        Z
      );
    }
    function m(S) {
      h(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === A && (S._payload.status === "fulfilled" ? h(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function h(S) {
      return typeof S == "object" && S !== null && S.$$typeof === b;
    }
    var g = gt, b = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), y = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), d = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, P = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var k, L = {}, M = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), _ = j(r(s)), I = {};
    Tn.Fragment = v, Tn.jsx = function(S, W, U) {
      var H = 1e4 > d.recentlyCreatedOwnerStacks++;
      return p(
        S,
        W,
        U,
        !1,
        H ? Error("react-stack-top-frame") : M,
        H ? j(r(S)) : _
      );
    }, Tn.jsxs = function(S, W, U) {
      var H = 1e4 > d.recentlyCreatedOwnerStacks++;
      return p(
        S,
        W,
        U,
        !0,
        H ? Error("react-stack-top-frame") : M,
        H ? j(r(S)) : _
      );
    };
  }()), Tn;
}
process.env.NODE_ENV === "production" ? Er.exports = Ec() : Er.exports = Oc();
var O = Er.exports;
let Wr = !1;
const wc = () => {
  Wr = !0;
}, Sc = () => {
  Wr = !1;
}, Cc = Vr.create(), go = Vr.create({
  baseURL: { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000",
  headers: {
    "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
    "Content-Type": "application/json"
  }
});
go.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("lumoraAccessToken");
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
go.interceptors.response.use(
  (e) => e,
  async (e) => {
    var o;
    const t = e.config;
    if (((o = e.response) == null ? void 0 : o.status) === 401 && Wr && t && !t._retry) {
      t._retry = !0;
      try {
        const r = localStorage.getItem("lumoraRefreshToken");
        if (!r)
          throw new Error("No refresh token available");
        const i = await Cc.post(
          `${{ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000"}/auth/refresh`,
          { refresh_token: r },
          {
            headers: {
              "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
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
          ), t.headers.Authorization = `Bearer ${i.data.accessToken}`, go(t);
        throw new Error("Invalid refresh response");
      } catch (r) {
        return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), window.location.href = "/login", Promise.reject(r);
      }
    }
    return Promise.reject(e);
  }
);
const Hb = async () => {
  const e = localStorage.getItem("lumoraRefreshToken");
  if (!e)
    throw new Error("No refresh token available for logout");
  await go.post("/auth/logout", {
    refresh_token: e
  });
}, Rc = async () => {
  const e = localStorage.getItem("lumoraAccessToken"), t = localStorage.getItem("lumoraRefreshToken");
  if (e)
    return !0;
  if (t)
    try {
      const o = await Vr.post(
        `${{ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000"}/auth/refresh`,
        { refresh_token: t },
        {
          headers: {
            "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
            "Content-Type": "application/json"
          }
        }
      );
      if (o.data.success && o.data.accessToken)
        return localStorage.setItem(
          "lumoraAccessToken",
          o.data.accessToken
        ), o.data.refreshToken && localStorage.setItem(
          "lumoraRefreshToken",
          o.data.refreshToken
        ), !0;
    } catch (o) {
      console.error("Token refresh failed:", o);
    }
  return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), window.location.href = "/login", !1;
}, Ei = (e) => e, Pc = () => {
  let e = Ei;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ei;
    }
  };
}, $c = Pc(), Hs = $c;
function bt(e, ...t) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => o.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${o} for the full message.`;
}
function X(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : bt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Oi(...e) {
  return e.reduce((t, o) => o == null ? t : function(...i) {
    t.apply(this, i), o.apply(this, i);
  }, () => {
  });
}
var Or = { exports: {} }, oo = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wi;
function Ic() {
  if (wi)
    return he;
  wi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function E(T) {
    if (typeof T == "object" && T !== null) {
      var C = T.$$typeof;
      switch (C) {
        case t:
          switch (T = T.type, T) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case m:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case l:
                case p:
                case b:
                case g:
                case a:
                  return T;
                default:
                  return C;
              }
          }
        case o:
          return C;
      }
    }
  }
  function y(T) {
    return E(T) === u;
  }
  return he.AsyncMode = c, he.ConcurrentMode = u, he.ContextConsumer = l, he.ContextProvider = a, he.Element = t, he.ForwardRef = p, he.Fragment = r, he.Lazy = b, he.Memo = g, he.Portal = o, he.Profiler = s, he.StrictMode = i, he.Suspense = m, he.isAsyncMode = function(T) {
    return y(T) || E(T) === c;
  }, he.isConcurrentMode = y, he.isContextConsumer = function(T) {
    return E(T) === l;
  }, he.isContextProvider = function(T) {
    return E(T) === a;
  }, he.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, he.isForwardRef = function(T) {
    return E(T) === p;
  }, he.isFragment = function(T) {
    return E(T) === r;
  }, he.isLazy = function(T) {
    return E(T) === b;
  }, he.isMemo = function(T) {
    return E(T) === g;
  }, he.isPortal = function(T) {
    return E(T) === o;
  }, he.isProfiler = function(T) {
    return E(T) === s;
  }, he.isStrictMode = function(T) {
    return E(T) === i;
  }, he.isSuspense = function(T) {
    return E(T) === m;
  }, he.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === r || T === u || T === s || T === i || T === m || T === h || typeof T == "object" && T !== null && (T.$$typeof === b || T.$$typeof === g || T.$$typeof === a || T.$$typeof === l || T.$$typeof === p || T.$$typeof === v || T.$$typeof === w || T.$$typeof === R || T.$$typeof === f);
  }, he.typeOf = E, he;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Si;
function kc() {
  return Si || (Si = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function E(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === r || V === u || V === s || V === i || V === m || V === h || typeof V == "object" && V !== null && (V.$$typeof === b || V.$$typeof === g || V.$$typeof === a || V.$$typeof === l || V.$$typeof === p || V.$$typeof === v || V.$$typeof === w || V.$$typeof === R || V.$$typeof === f);
    }
    function y(V) {
      if (typeof V == "object" && V !== null) {
        var ie = V.$$typeof;
        switch (ie) {
          case t:
            var re = V.type;
            switch (re) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case m:
                return re;
              default:
                var fe = re && re.$$typeof;
                switch (fe) {
                  case l:
                  case p:
                  case b:
                  case g:
                  case a:
                    return fe;
                  default:
                    return ie;
                }
            }
          case o:
            return ie;
        }
      }
    }
    var T = c, C = u, N = l, D = a, A = t, z = p, F = r, d = b, $ = g, P = o, j = s, k = i, L = m, M = !1;
    function _(V) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(V) || y(V) === c;
    }
    function I(V) {
      return y(V) === u;
    }
    function S(V) {
      return y(V) === l;
    }
    function W(V) {
      return y(V) === a;
    }
    function U(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function H(V) {
      return y(V) === p;
    }
    function G(V) {
      return y(V) === r;
    }
    function Z(V) {
      return y(V) === b;
    }
    function Y(V) {
      return y(V) === g;
    }
    function Q(V) {
      return y(V) === o;
    }
    function J(V) {
      return y(V) === s;
    }
    function q(V) {
      return y(V) === i;
    }
    function ee(V) {
      return y(V) === m;
    }
    ge.AsyncMode = T, ge.ConcurrentMode = C, ge.ContextConsumer = N, ge.ContextProvider = D, ge.Element = A, ge.ForwardRef = z, ge.Fragment = F, ge.Lazy = d, ge.Memo = $, ge.Portal = P, ge.Profiler = j, ge.StrictMode = k, ge.Suspense = L, ge.isAsyncMode = _, ge.isConcurrentMode = I, ge.isContextConsumer = S, ge.isContextProvider = W, ge.isElement = U, ge.isForwardRef = H, ge.isFragment = G, ge.isLazy = Z, ge.isMemo = Y, ge.isPortal = Q, ge.isProfiler = J, ge.isStrictMode = q, ge.isSuspense = ee, ge.isValidElementType = E, ge.typeOf = y;
  }()), ge;
}
var Ci;
function qs() {
  return Ci || (Ci = 1, process.env.NODE_ENV === "production" ? oo.exports = Ic() : oo.exports = kc()), oo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var rr, Ri;
function Nc() {
  if (Ri)
    return rr;
  Ri = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
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
  return rr = i() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var m in l)
        t.call(l, m) && (c[m] = l[m]);
      if (e) {
        u = e(l);
        for (var h = 0; h < u.length; h++)
          o.call(l, u[h]) && (c[u[h]] = l[u[h]]);
      }
    }
    return c;
  }, rr;
}
var ir, Pi;
function Ur() {
  if (Pi)
    return ir;
  Pi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ir = e, ir;
}
var sr, $i;
function Ys() {
  return $i || ($i = 1, sr = Function.call.bind(Object.prototype.hasOwnProperty)), sr;
}
var ar, Ii;
function jc() {
  if (Ii)
    return ar;
  Ii = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ur(), o = {}, r = Ys();
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
              var h = Error(
                (c || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = s[p](a, p, c, l, null, t);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in o)) {
            o[m.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, ar = i, ar;
}
var lr, ki;
function Ac() {
  if (ki)
    return lr;
  ki = 1;
  var e = qs(), t = Nc(), o = Ur(), r = Ys(), i = jc(), s = function() {
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
  return lr = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(I) {
      var S = I && (u && I[u] || I[p]);
      if (typeof S == "function")
        return S;
    }
    var h = "<<anonymous>>", g = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: R(),
      arrayOf: E,
      element: y(),
      elementType: T(),
      instanceOf: C,
      node: z(),
      objectOf: D,
      oneOf: N,
      oneOfType: A,
      shape: d,
      exact: $
    };
    function b(I, S) {
      return I === S ? I !== 0 || 1 / I === 1 / S : I !== I && S !== S;
    }
    function f(I, S) {
      this.message = I, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function v(I) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, W = 0;
      function U(G, Z, Y, Q, J, q, ee) {
        if (Q = Q || h, q = q || Y, ee !== o) {
          if (c) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = Q + ":" + Y;
            !S[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[ie] = !0, W++);
          }
        }
        return Z[Y] == null ? G ? Z[Y] === null ? new f("The " + J + " `" + q + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new f("The " + J + " `" + q + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : I(Z, Y, Q, J, q);
      }
      var H = U.bind(null, !1);
      return H.isRequired = U.bind(null, !0), H;
    }
    function w(I) {
      function S(W, U, H, G, Z, Y) {
        var Q = W[U], J = k(Q);
        if (J !== I) {
          var q = L(Q);
          return new f(
            "Invalid " + G + " `" + Z + "` of type " + ("`" + q + "` supplied to `" + H + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return v(S);
    }
    function R() {
      return v(a);
    }
    function E(I) {
      function S(W, U, H, G, Z) {
        if (typeof I != "function")
          return new f("Property `" + Z + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var Y = W[U];
        if (!Array.isArray(Y)) {
          var Q = k(Y);
          return new f("Invalid " + G + " `" + Z + "` of type " + ("`" + Q + "` supplied to `" + H + "`, expected an array."));
        }
        for (var J = 0; J < Y.length; J++) {
          var q = I(Y, J, H, G, Z + "[" + J + "]", o);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return v(S);
    }
    function y() {
      function I(S, W, U, H, G) {
        var Z = S[W];
        if (!l(Z)) {
          var Y = k(Z);
          return new f("Invalid " + H + " `" + G + "` of type " + ("`" + Y + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(I);
    }
    function T() {
      function I(S, W, U, H, G) {
        var Z = S[W];
        if (!e.isValidElementType(Z)) {
          var Y = k(Z);
          return new f("Invalid " + H + " `" + G + "` of type " + ("`" + Y + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(I);
    }
    function C(I) {
      function S(W, U, H, G, Z) {
        if (!(W[U] instanceof I)) {
          var Y = I.name || h, Q = _(W[U]);
          return new f("Invalid " + G + " `" + Z + "` of type " + ("`" + Q + "` supplied to `" + H + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return v(S);
    }
    function N(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function S(W, U, H, G, Z) {
        for (var Y = W[U], Q = 0; Q < I.length; Q++)
          if (b(Y, I[Q]))
            return null;
        var J = JSON.stringify(I, function(ee, V) {
          var ie = L(V);
          return ie === "symbol" ? String(V) : V;
        });
        return new f("Invalid " + G + " `" + Z + "` of value `" + String(Y) + "` " + ("supplied to `" + H + "`, expected one of " + J + "."));
      }
      return v(S);
    }
    function D(I) {
      function S(W, U, H, G, Z) {
        if (typeof I != "function")
          return new f("Property `" + Z + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var Y = W[U], Q = k(Y);
        if (Q !== "object")
          return new f("Invalid " + G + " `" + Z + "` of type " + ("`" + Q + "` supplied to `" + H + "`, expected an object."));
        for (var J in Y)
          if (r(Y, J)) {
            var q = I(Y, J, H, G, Z + "." + J, o);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return v(S);
    }
    function A(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var S = 0; S < I.length; S++) {
        var W = I[S];
        if (typeof W != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + M(W) + " at index " + S + "."
          ), a;
      }
      function U(H, G, Z, Y, Q) {
        for (var J = [], q = 0; q < I.length; q++) {
          var ee = I[q], V = ee(H, G, Z, Y, Q, o);
          if (V == null)
            return null;
          V.data && r(V.data, "expectedType") && J.push(V.data.expectedType);
        }
        var ie = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new f("Invalid " + Y + " `" + Q + "` supplied to " + ("`" + Z + "`" + ie + "."));
      }
      return v(U);
    }
    function z() {
      function I(S, W, U, H, G) {
        return P(S[W]) ? null : new f("Invalid " + H + " `" + G + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return v(I);
    }
    function F(I, S, W, U, H) {
      return new f(
        (I || "React class") + ": " + S + " type `" + W + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function d(I) {
      function S(W, U, H, G, Z) {
        var Y = W[U], Q = k(Y);
        if (Q !== "object")
          return new f("Invalid " + G + " `" + Z + "` of type `" + Q + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var J in I) {
          var q = I[J];
          if (typeof q != "function")
            return F(H, G, Z, J, L(q));
          var ee = q(Y, J, H, G, Z + "." + J, o);
          if (ee)
            return ee;
        }
        return null;
      }
      return v(S);
    }
    function $(I) {
      function S(W, U, H, G, Z) {
        var Y = W[U], Q = k(Y);
        if (Q !== "object")
          return new f("Invalid " + G + " `" + Z + "` of type `" + Q + "` " + ("supplied to `" + H + "`, expected `object`."));
        var J = t({}, W[U], I);
        for (var q in J) {
          var ee = I[q];
          if (r(I, q) && typeof ee != "function")
            return F(H, G, Z, q, L(ee));
          if (!ee)
            return new f(
              "Invalid " + G + " `" + Z + "` key `" + q + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(W[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var V = ee(Y, q, H, G, Z + "." + q, o);
          if (V)
            return V;
        }
        return null;
      }
      return v(S);
    }
    function P(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(P);
          if (I === null || l(I))
            return !0;
          var S = m(I);
          if (S) {
            var W = S.call(I), U;
            if (S !== I.entries) {
              for (; !(U = W.next()).done; )
                if (!P(U.value))
                  return !1;
            } else
              for (; !(U = W.next()).done; ) {
                var H = U.value;
                if (H && !P(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(I, S) {
      return I === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function k(I) {
      var S = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : j(S, I) ? "symbol" : S;
    }
    function L(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var S = k(I);
      if (S === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function M(I) {
      var S = L(I);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function _(I) {
      return !I.constructor || !I.constructor.name ? h : I.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, lr;
}
var cr, Ni;
function Mc() {
  if (Ni)
    return cr;
  Ni = 1;
  var e = Ur();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, cr = function() {
    function r(a, l, c, u, p, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
      checkPropTypes: o,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, cr;
}
if (process.env.NODE_ENV !== "production") {
  var Dc = qs(), Bc = !0;
  Or.exports = Ac()(Dc.isElement, Bc);
} else
  Or.exports = Mc()();
var _c = Or.exports;
const n = /* @__PURE__ */ Tc(_c);
function Gs(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (o = Gs(e[t])) && (r && (r += " "), r += o);
    } else
      for (o in e)
        e[o] && (r && (r += " "), r += o);
  return r;
}
function ne() {
  for (var e, t, o = 0, r = "", i = arguments.length; o < i; o++)
    (e = arguments[o]) && (t = Gs(e)) && (r && (r += " "), r += t);
  return r;
}
function ue(e, t, o = void 0) {
  const r = {};
  for (const i in e) {
    const s = e[i];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, o && o[u] && (a += " " + o[u]));
    }
    r[i] = a;
  }
  return r;
}
var wr = { exports: {} }, xe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji;
function Lc() {
  if (ji)
    return xe;
  ji = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case e:
          switch (f = f.type, f) {
            case o:
            case i:
            case r:
            case c:
            case u:
            case h:
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
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return xe.ContextConsumer = s, xe.ContextProvider = a, xe.Element = e, xe.ForwardRef = l, xe.Fragment = o, xe.Lazy = m, xe.Memo = p, xe.Portal = t, xe.Profiler = i, xe.StrictMode = r, xe.Suspense = c, xe.SuspenseList = u, xe.isContextConsumer = function(f) {
    return b(f) === s;
  }, xe.isContextProvider = function(f) {
    return b(f) === a;
  }, xe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, xe.isForwardRef = function(f) {
    return b(f) === l;
  }, xe.isFragment = function(f) {
    return b(f) === o;
  }, xe.isLazy = function(f) {
    return b(f) === m;
  }, xe.isMemo = function(f) {
    return b(f) === p;
  }, xe.isPortal = function(f) {
    return b(f) === t;
  }, xe.isProfiler = function(f) {
    return b(f) === i;
  }, xe.isStrictMode = function(f) {
    return b(f) === r;
  }, xe.isSuspense = function(f) {
    return b(f) === c;
  }, xe.isSuspenseList = function(f) {
    return b(f) === u;
  }, xe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === i || f === r || f === c || f === u || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === p || f.$$typeof === a || f.$$typeof === s || f.$$typeof === l || f.$$typeof === g || f.getModuleId !== void 0);
  }, xe.typeOf = b, xe;
}
var Te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function Fc() {
  return Ai || (Ai = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var v = f.$$typeof;
        switch (v) {
          case t:
            switch (f = f.type, f) {
              case r:
              case s:
              case i:
              case u:
              case p:
              case g:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case l:
                  case c:
                  case h:
                  case m:
                    return f;
                  case a:
                    return f;
                  default:
                    return v;
                }
            }
          case o:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    Te.ContextConsumer = a, Te.ContextProvider = l, Te.Element = t, Te.ForwardRef = c, Te.Fragment = r, Te.Lazy = h, Te.Memo = m, Te.Portal = o, Te.Profiler = s, Te.StrictMode = i, Te.Suspense = u, Te.SuspenseList = p, Te.isContextConsumer = function(f) {
      return e(f) === a;
    }, Te.isContextProvider = function(f) {
      return e(f) === l;
    }, Te.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, Te.isForwardRef = function(f) {
      return e(f) === c;
    }, Te.isFragment = function(f) {
      return e(f) === r;
    }, Te.isLazy = function(f) {
      return e(f) === h;
    }, Te.isMemo = function(f) {
      return e(f) === m;
    }, Te.isPortal = function(f) {
      return e(f) === o;
    }, Te.isProfiler = function(f) {
      return e(f) === s;
    }, Te.isStrictMode = function(f) {
      return e(f) === i;
    }, Te.isSuspense = function(f) {
      return e(f) === u;
    }, Te.isSuspenseList = function(f) {
      return e(f) === p;
    }, Te.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === r || f === s || f === i || f === u || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === m || f.$$typeof === l || f.$$typeof === a || f.$$typeof === c || f.$$typeof === b || f.getModuleId !== void 0);
    }, Te.typeOf = e;
  }()), Te;
}
process.env.NODE_ENV === "production" ? wr.exports = Lc() : wr.exports = Fc();
var qt = wr.exports;
function ht(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ks(e) {
  if (/* @__PURE__ */ x.isValidElement(e) || qt.isValidElementType(e) || !ht(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Ks(e[o]);
  }), t;
}
function De(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? {
    ...e
  } : e;
  return ht(e) && ht(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ x.isValidElement(t[i]) || qt.isValidElementType(t[i]) ? r[i] = t[i] : ht(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && ht(e[i]) ? r[i] = De(e[i], t[i], o) : o.clone ? r[i] = ht(t[i]) ? Ks(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
function An(e, t) {
  return t ? De(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const zc = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {}, At = zc;
function Mi(e, t) {
  if (!e.containerQueries)
    return t;
  const o = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, i) => {
    var a, l;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((a = r.match(s)) == null ? void 0 : a[1]) || 0) - +(((l = i.match(s)) == null ? void 0 : l[1]) || 0);
  });
  return o.length ? o.reduce((r, i) => {
    const s = t[i];
    return delete r[i], r[i] = s, r;
  }, {
    ...t
  }) : t;
}
function Vc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((o) => t.startsWith(`@${o}`)) || !!t.match(/^@\d/));
}
function Wc(e, t) {
  const o = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : bt(18, `(${t})`));
    return null;
  }
  const [, r, i] = o, s = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(s);
}
function Uc(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function o(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const r = {}, i = (s) => (o(r, s), r);
  return o(i), {
    ...e,
    containerQueries: i
  };
}
const Io = {
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
}, Di = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Io[e]}px)`
}, Hc = {
  containerQueries: (e) => ({
    up: (t) => {
      let o = typeof t == "number" ? t : Io[t] || t;
      return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function st(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Di;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = o(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Di;
    return Object.keys(t).reduce((a, l) => {
      if (Vc(s.keys, l)) {
        const c = Wc(r.containerQueries ? r : Hc, l);
        c && (a[c] = o(t[l], l));
      } else if (Object.keys(s.values || Io).includes(l)) {
        const c = s.up(l);
        a[c] = o(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return o(t);
}
function Xs(e = {}) {
  var o;
  return ((o = e.keys) == null ? void 0 : o.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function Sr(e, t) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, t);
}
function qc(e, ...t) {
  const o = Xs(e), r = [o, ...t].reduce((i, s) => De(i, s), {});
  return Sr(Object.keys(o), r);
}
function Yc(e, t) {
  if (typeof e != "object")
    return {};
  const o = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((i, s) => {
    s < e.length && (o[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (o[i] = !0);
  }), o;
}
function ur({
  values: e,
  breakpoints: t,
  base: o
}) {
  const r = o || Yc(e, t), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function ko(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function yo(e, t, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = ko(e, o) || r, t && (i = t(i, r, e)), i;
}
function Ne(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = ko(c, r) || {};
    return st(a, l, (m) => {
      let h = yo(u, i, m);
      return m === h && typeof m == "string" && (h = yo(u, i, `${t}${m === "default" ? "" : X(m)}`, m)), o === !1 ? h : {
        [o]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: At
  } : {}, s.filterProps = [t], s;
}
function Gc(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Kc = {
  m: "margin",
  p: "padding"
}, Xc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Bi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Qc = Gc((e) => {
  if (e.length > 2)
    if (Bi[e])
      e = Bi[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Kc[t], i = Xc[o] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), No = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], jo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Jc = [...No, ...jo];
function qn(e, t, o, r) {
  const i = ko(e, t, !0) ?? o;
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
function Ao(e) {
  return qn(e, "spacing", 8, "spacing");
}
function Yt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Zc(e, t) {
  return (o) => e.reduce((r, i) => (r[i] = Yt(t, o), r), {});
}
function eu(e, t, o, r) {
  if (!t.includes(o))
    return null;
  const i = Qc(o), s = Zc(i, r), a = e[o];
  return st(e, a, s);
}
function Qs(e, t) {
  const o = Ao(e.theme);
  return Object.keys(e).map((r) => eu(e, t, r, o)).reduce(An, {});
}
function Pe(e) {
  return Qs(e, No);
}
Pe.propTypes = process.env.NODE_ENV !== "production" ? No.reduce((e, t) => (e[t] = At, e), {}) : {};
Pe.filterProps = No;
function $e(e) {
  return Qs(e, jo);
}
$e.propTypes = process.env.NODE_ENV !== "production" ? jo.reduce((e, t) => (e[t] = At, e), {}) : {};
$e.filterProps = jo;
process.env.NODE_ENV !== "production" && Jc.reduce((e, t) => (e[t] = At, e), {});
function Mo(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, s) => t[s] ? An(i, t[s](r)) : i, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, o.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), o;
}
function Xe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function et(e, t) {
  return Ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const tu = et("border", Xe), nu = et("borderTop", Xe), ou = et("borderRight", Xe), ru = et("borderBottom", Xe), iu = et("borderLeft", Xe), su = et("borderColor"), au = et("borderTopColor"), lu = et("borderRightColor"), cu = et("borderBottomColor"), uu = et("borderLeftColor"), pu = et("outline", Xe), du = et("outlineColor"), Do = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = qn(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: Yt(t, r)
    });
    return st(e, e.borderRadius, o);
  }
  return null;
};
Do.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: At
} : {};
Do.filterProps = ["borderRadius"];
Mo(tu, nu, ou, ru, iu, su, au, lu, cu, uu, Do, pu, du);
const Bo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = qn(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: Yt(t, r)
    });
    return st(e, e.gap, o);
  }
  return null;
};
Bo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: At
} : {};
Bo.filterProps = ["gap"];
const _o = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = qn(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: Yt(t, r)
    });
    return st(e, e.columnGap, o);
  }
  return null;
};
_o.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: At
} : {};
_o.filterProps = ["columnGap"];
const Lo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = qn(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: Yt(t, r)
    });
    return st(e, e.rowGap, o);
  }
  return null;
};
Lo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: At
} : {};
Lo.filterProps = ["rowGap"];
const fu = Ne({
  prop: "gridColumn"
}), mu = Ne({
  prop: "gridRow"
}), hu = Ne({
  prop: "gridAutoFlow"
}), gu = Ne({
  prop: "gridAutoColumns"
}), yu = Ne({
  prop: "gridAutoRows"
}), bu = Ne({
  prop: "gridTemplateColumns"
}), vu = Ne({
  prop: "gridTemplateRows"
}), xu = Ne({
  prop: "gridTemplateAreas"
}), Tu = Ne({
  prop: "gridArea"
});
Mo(Bo, _o, Lo, fu, mu, hu, gu, yu, bu, vu, xu, Tu);
function an(e, t) {
  return t === "grey" ? t : e;
}
const Eu = Ne({
  prop: "color",
  themeKey: "palette",
  transform: an
}), Ou = Ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: an
}), wu = Ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: an
});
Mo(Eu, Ou, wu);
function We(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Su = Ne({
  prop: "width",
  transform: We
}), Hr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var i, s, a, l, c;
      const r = ((a = (s = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[o]) || Io[o];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: We(o)
      };
    };
    return st(e, e.maxWidth, t);
  }
  return null;
};
Hr.filterProps = ["maxWidth"];
const Cu = Ne({
  prop: "minWidth",
  transform: We
}), Ru = Ne({
  prop: "height",
  transform: We
}), Pu = Ne({
  prop: "maxHeight",
  transform: We
}), $u = Ne({
  prop: "minHeight",
  transform: We
});
Ne({
  prop: "size",
  cssProperty: "width",
  transform: We
});
Ne({
  prop: "size",
  cssProperty: "height",
  transform: We
});
const Iu = Ne({
  prop: "boxSizing"
});
Mo(Su, Hr, Cu, Ru, Pu, $u, Iu);
const ku = {
  // borders
  border: {
    themeKey: "borders",
    transform: Xe
  },
  borderTop: {
    themeKey: "borders",
    transform: Xe
  },
  borderRight: {
    themeKey: "borders",
    transform: Xe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Xe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Xe
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
    transform: Xe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Do
  },
  // palette
  color: {
    themeKey: "palette",
    transform: an
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: an
  },
  backgroundColor: {
    themeKey: "palette",
    transform: an
  },
  // spacing
  p: {
    style: $e
  },
  pt: {
    style: $e
  },
  pr: {
    style: $e
  },
  pb: {
    style: $e
  },
  pl: {
    style: $e
  },
  px: {
    style: $e
  },
  py: {
    style: $e
  },
  padding: {
    style: $e
  },
  paddingTop: {
    style: $e
  },
  paddingRight: {
    style: $e
  },
  paddingBottom: {
    style: $e
  },
  paddingLeft: {
    style: $e
  },
  paddingX: {
    style: $e
  },
  paddingY: {
    style: $e
  },
  paddingInline: {
    style: $e
  },
  paddingInlineStart: {
    style: $e
  },
  paddingInlineEnd: {
    style: $e
  },
  paddingBlock: {
    style: $e
  },
  paddingBlockStart: {
    style: $e
  },
  paddingBlockEnd: {
    style: $e
  },
  m: {
    style: Pe
  },
  mt: {
    style: Pe
  },
  mr: {
    style: Pe
  },
  mb: {
    style: Pe
  },
  ml: {
    style: Pe
  },
  mx: {
    style: Pe
  },
  my: {
    style: Pe
  },
  margin: {
    style: Pe
  },
  marginTop: {
    style: Pe
  },
  marginRight: {
    style: Pe
  },
  marginBottom: {
    style: Pe
  },
  marginLeft: {
    style: Pe
  },
  marginX: {
    style: Pe
  },
  marginY: {
    style: Pe
  },
  marginInline: {
    style: Pe
  },
  marginInlineStart: {
    style: Pe
  },
  marginInlineEnd: {
    style: Pe
  },
  marginBlock: {
    style: Pe
  },
  marginBlockStart: {
    style: Pe
  },
  marginBlockEnd: {
    style: Pe
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
    style: Bo
  },
  rowGap: {
    style: Lo
  },
  columnGap: {
    style: _o
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
    style: Hr
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
}, Yn = ku;
function Nu(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function ju(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Au() {
  function e(o, r, i, s) {
    const a = {
      [o]: r,
      theme: i
    }, l = s[o];
    if (!l)
      return {
        [o]: r
      };
    const {
      cssProperty: c = o,
      themeKey: u,
      transform: p,
      style: m
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const h = ko(i, u) || {};
    return m ? m(a) : st(a, r, (b) => {
      let f = yo(h, p, b);
      return b === f && typeof b == "string" && (f = yo(h, p, `${o}${b === "default" ? "" : X(b)}`, b)), c === !1 ? f : {
        [c]: f
      };
    });
  }
  function t(o) {
    const {
      sx: r,
      theme: i = {},
      nested: s
    } = o || {};
    if (!r)
      return null;
    const a = i.unstable_sxConfig ?? Yn;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const p = Xs(i.breakpoints), m = Object.keys(p);
      let h = p;
      return Object.keys(u).forEach((g) => {
        const b = ju(u[g], i);
        if (b != null)
          if (typeof b == "object")
            if (a[g])
              h = An(h, e(g, b, i, a));
            else {
              const f = st({
                theme: i
              }, b, (v) => ({
                [g]: v
              }));
              Nu(f, b) ? h[g] = t({
                sx: b,
                theme: i,
                nested: !0
              }) : h = An(h, f);
            }
          else
            h = An(h, e(g, b, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": Mi(i, Sr(m, h))
      } : Mi(i, Sr(m, h));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const Js = Au();
Js.filterProps = ["sx"];
const ln = Js, Mu = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, o = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Yn;
  return Object.keys(e).forEach((i) => {
    o[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function qr(e) {
  const {
    sx: t,
    ...o
  } = e, {
    systemProps: r,
    otherProps: i
  } = Mu(o);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return ht(l) ? {
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
function Du(e) {
  for (var t = 0, o, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    o = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, t = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
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
var Bu = {
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
function _u(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var Lu = !1, Fu = /[A-Z]|^ms/g, zu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Zs = function(t) {
  return t.charCodeAt(1) === 45;
}, _i = function(t) {
  return t != null && typeof t != "boolean";
}, pr = /* @__PURE__ */ _u(function(e) {
  return Zs(e) ? e : e.replace(Fu, "-$&").toLowerCase();
}), Li = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(zu, function(r, i, s) {
          return mt = {
            name: i,
            styles: s,
            next: mt
          }, i;
        });
  }
  return Bu[t] !== 1 && !Zs(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
}, Vu = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ln(e, t, o) {
  if (o == null)
    return "";
  var r = o;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var i = o;
      if (i.anim === 1)
        return mt = {
          name: i.name,
          styles: i.styles,
          next: mt
        }, i.name;
      var s = o;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            mt = {
              name: a.name,
              styles: a.styles,
              next: mt
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return Wu(e, t, o);
    }
    case "function": {
      if (e !== void 0) {
        var c = mt, u = o(e);
        return mt = c, Ln(e, t, u);
      }
      break;
    }
  }
  var p = o;
  if (t == null)
    return p;
  var m = t[p];
  return m !== void 0 ? m : p;
}
function Wu(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var i = 0; i < o.length; i++)
      r += Ln(e, t, o[i]) + ";";
  else
    for (var s in o) {
      var a = o[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : _i(l) && (r += pr(s) + ":" + Li(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Lu)
          throw new Error(Vu);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            _i(a[c]) && (r += pr(s) + ":" + Li(s, a[c]) + ";");
        else {
          var u = Ln(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += pr(s) + ":" + u + ";";
              break;
            }
            default:
              r += s + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Fi = /label:\s*([^\s;{]+)\s*(;|$)/g, mt;
function Uu(e, t, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  mt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, i += Ln(o, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += Ln(o, t, e[l]), r) {
      var c = s;
      i += c[l];
    }
  Fi.lastIndex = 0;
  for (var u = "", p; (p = Fi.exec(i)) !== null; )
    u += "-" + p[1];
  var m = Du(i) + u;
  return {
    name: m,
    styles: i,
    next: mt
  };
}
function Hu(e) {
  return e == null || Object.keys(e).length === 0;
}
function ea(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e, r = typeof t == "function" ? (i) => t(Hu(i) ? o : i) : t;
  return /* @__PURE__ */ O.jsx(bc, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (ea.propTypes = {
  defaultTheme: n.object,
  styles: n.oneOfType([n.array, n.string, n.object, n.func])
});
/**
 * @mui/styled-engine v7.3.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ta(e, t) {
  const o = yc(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
function qu(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const zi = [];
function Nt(e) {
  return zi[0] = e, Uu(zi);
}
const Yu = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => ({
    ...o,
    [r.key]: r.val
  }), {});
};
function Gu(e) {
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
    unit: o = "px",
    step: r = 5,
    ...i
  } = e, s = Yu(t), a = Object.keys(s);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${o})`;
  }
  function u(h, g) {
    const b = a.indexOf(g);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : g) - r / 100}${o})`;
  }
  function p(h) {
    return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : l(h);
  }
  function m(h) {
    const g = a.indexOf(h);
    return g === 0 ? l(a[1]) : g === a.length - 1 ? c(a[g]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: p,
    not: m,
    unit: o,
    ...i
  };
}
const Ku = {
  borderRadius: 4
}, Xu = Ku;
function na(e = 8, t = Ao({
  spacing: e
})) {
  if (e.mui)
    return e;
  const o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return o.mui = !0, o;
}
function Qu(e, t) {
  var r;
  const o = this;
  if (o.vars) {
    if (!((r = o.colorSchemes) != null && r[e]) || typeof o.getColorSchemeSelector != "function")
      return {};
    let i = o.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return o.palette.mode === e ? t : {};
}
function Fo(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, l = Gu(o), c = na(i);
  let u = De({
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
      ...Xu,
      ...s
    }
  }, a);
  return u = Uc(u), u.applyStyles = Qu, u = t.reduce((p, m) => De(p, m), u), u.unstable_sxConfig = {
    ...Yn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return ln({
      sx: m,
      theme: this
    });
  }, u;
}
function Ju(e) {
  return Object.keys(e).length === 0;
}
function oa(e = null) {
  const t = x.useContext(vc);
  return !t || Ju(t) ? e : t;
}
const Zu = Fo();
function zo(e = Zu) {
  return oa(e);
}
function dr(e) {
  const t = Nt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function ra({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = zo(o), i = t && r[t] || r;
  let s = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(s) ? s = s.map((a) => dr(typeof a == "function" ? a(i) : a)) : s = dr(s)), /* @__PURE__ */ O.jsx(ea, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: n.object,
  /**
   * @ignore
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool]),
  /**
   * @ignore
   */
  themeId: n.string
});
function ep(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, s = ta("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(ln);
  return /* @__PURE__ */ x.forwardRef(function(c, u) {
    const p = zo(o), {
      className: m,
      component: h = "div",
      ...g
    } = qr(c);
    return /* @__PURE__ */ O.jsx(s, {
      as: h,
      ref: u,
      className: ne(m, i ? i(r) : r),
      theme: t && p[t] || p,
      ...g
    });
  });
}
const tp = {
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
function ce(e, t, o = "Mui") {
  const r = tp[t];
  return r ? `${o}-${r}` : `${Hs.generate(e)}-${t}`;
}
function le(e, t, o = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ce(e, i, o);
  }), r;
}
function ia(e, t = "") {
  return e.displayName || e.name || t;
}
function Vi(e, t, o) {
  const r = ia(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function np(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ia(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case qt.ForwardRef:
          return Vi(e, e.render, "ForwardRef");
        case qt.Memo:
          return Vi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function sa(e) {
  const {
    variants: t,
    ...o
  } = e, r = {
    variants: t,
    style: Nt(o),
    isProcessed: !0
  };
  return r.style === o || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = Nt(i.style));
  }), r;
}
const op = Fo();
function fr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Vt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function rp(e) {
  return e ? (t, o) => o[e] : null;
}
function ip(e, t, o) {
  e.theme = lp(e.theme) ? o : e.theme[t] || e.theme;
}
function mo(e, t, o) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((i) => mo(e, i, o));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let i;
    if (r.isProcessed)
      i = o ? Vt(r.style, o) : r.style;
    else {
      const {
        variants: s,
        ...a
      } = r;
      i = o ? Vt(Nt(a), o) : a;
    }
    return aa(e, r.variants, [i], o);
  }
  return r != null && r.isProcessed ? o ? Vt(Nt(r.style), o) : r.style : o ? Vt(Nt(r), o) : r;
}
function aa(e, t, o = [], r = void 0) {
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
      }), o.push(r ? Vt(Nt(l.style(i)), r) : l.style(i))) : o.push(r ? Vt(Nt(l.style), r) : l.style);
    }
  return o;
}
function la(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = op,
    rootShouldForwardProp: r = fr,
    slotShouldForwardProp: i = fr
  } = e;
  function s(l) {
    ip(l, t, o);
  }
  return (l, c = {}) => {
    qu(l, (C) => C.filter((N) => N !== ln));
    const {
      name: u,
      slot: p,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = rp(ca(p)),
      ...b
    } = c, f = u && u.startsWith("Mui") || p ? "components" : "custom", v = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), w = h || !1;
    let R = fr;
    p === "Root" || p === "root" ? R = r : p ? R = i : cp(l) && (R = void 0);
    const E = ta(l, {
      shouldForwardProp: R,
      label: ap(u, p),
      ...b
    }), y = (C) => {
      if (C.__emotion_real === C)
        return C;
      if (typeof C == "function")
        return function(D) {
          return mo(D, C, D.theme.modularCssLayers ? f : void 0);
        };
      if (ht(C)) {
        const N = sa(C);
        return function(A) {
          return N.variants ? mo(A, N, A.theme.modularCssLayers ? f : void 0) : A.theme.modularCssLayers ? Vt(N.style, f) : N.style;
        };
      }
      return C;
    }, T = (...C) => {
      const N = [], D = C.map(y), A = [];
      if (N.push(s), u && g && A.push(function($) {
        var L, M;
        const j = (M = (L = $.theme.components) == null ? void 0 : L[u]) == null ? void 0 : M.styleOverrides;
        if (!j)
          return null;
        const k = {};
        for (const _ in j)
          k[_] = mo($, j[_], $.theme.modularCssLayers ? "theme" : void 0);
        return g($, k);
      }), u && !v && A.push(function($) {
        var k, L;
        const P = $.theme, j = (L = (k = P == null ? void 0 : P.components) == null ? void 0 : k[u]) == null ? void 0 : L.variants;
        return j ? aa($, j, [], $.theme.modularCssLayers ? "theme" : void 0) : null;
      }), w || A.push(ln), Array.isArray(D[0])) {
        const d = D.shift(), $ = new Array(N.length).fill(""), P = new Array(A.length).fill("");
        let j;
        j = [...$, ...d, ...P], j.raw = [...$, ...d.raw, ...P], N.unshift(j);
      }
      const z = [...N, ...D, ...A], F = E(...z);
      return l.muiName && (F.muiName = l.muiName), process.env.NODE_ENV !== "production" && (F.displayName = sp(u, p, l)), F;
    };
    return E.withConfig && (T.withConfig = E.withConfig), T;
  };
}
function sp(e, t, o) {
  return e ? `${e}${X(t || "")}` : `Styled(${np(o)})`;
}
function ap(e, t) {
  let o;
  return process.env.NODE_ENV !== "production" && e && (o = `${e}-${ca(t || "Root")}`), o;
}
function lp(e) {
  for (const t in e)
    return !1;
  return !0;
}
function cp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ca(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const up = la(), pp = up;
function Fn(e, t, o = !1) {
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
              r[s][u] = Fn(a[u], l[u], o);
            }
        }
      } else
        s === "className" && o && t.className ? r.className = ne(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : s === "style" && o && t.style ? r.style = {
          ...e == null ? void 0 : e.style,
          ...t == null ? void 0 : t.style
        } : r[s] === void 0 && (r[s] = e[s]);
    }
  return r;
}
function ua(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : Fn(t.components[o].defaultProps, r);
}
function dp({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let i = zo(o);
  return r && (i = i[r] || i), ua({
    theme: i,
    name: t,
    props: e
  });
}
const fp = typeof window < "u" ? x.useLayoutEffect : x.useEffect, at = fp;
function mp(e, t, o, r, i) {
  const [s, a] = x.useState(() => i && o ? o(e).matches : r ? r(e).matches : t);
  return at(() => {
    if (!o)
      return;
    const l = o(e), c = () => {
      a(l.matches);
    };
    return c(), l.addEventListener("change", c), () => {
      l.removeEventListener("change", c);
    };
  }, [e, o]), s;
}
const hp = {
  ...x
}, pa = hp.useSyncExternalStore;
function gp(e, t, o, r, i) {
  const s = x.useCallback(() => t, [t]), a = x.useMemo(() => {
    if (i && o)
      return () => o(e).matches;
    if (r !== null) {
      const {
        matches: p
      } = r(e);
      return () => p;
    }
    return s;
  }, [s, e, r, i, o]), [l, c] = x.useMemo(() => {
    if (o === null)
      return [s, () => () => {
      }];
    const p = o(e);
    return [() => p.matches, (m) => (p.addEventListener("change", m), () => {
      p.removeEventListener("change", m);
    })];
  }, [s, o, e]);
  return pa(c, l, a);
}
function yp(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, i = {}) {
    let s = oa();
    s && t && (s = s[t] || s);
    const a = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: l = !1,
      matchMedia: c = a ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: p = !1
    } = ua({
      name: "MuiUseMediaQuery",
      props: i,
      theme: s
    });
    process.env.NODE_ENV !== "production" && typeof r == "function" && s === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let m = typeof r == "function" ? r(s) : r;
    m = m.replace(/^@media( ?)/m, ""), m.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`));
    const g = (pa !== void 0 ? gp : mp)(m, l, c, u, p);
    return process.env.NODE_ENV !== "production" && x.useDebugValue({
      query: m,
      match: g
    }), g;
  };
}
function bp(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
function Yr(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), bp(e, t, o);
}
function vp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function jt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return jt(vp(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : bt(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : bt(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: o,
    values: r,
    colorSpace: i
  };
}
const xp = (e) => {
  const t = jt(e);
  return t.values.slice(0, 3).map((o, r) => t.type.includes("hsl") && r !== 0 ? `${o}%` : o).join(" ");
}, $n = (e, t) => {
  try {
    return xp(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Vo(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function da(e) {
  e = jt(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, i = t[2] / 100, s = r * Math.min(i, 1 - i), a = (u, p = (u + o / 30) % 12) => i - s * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Vo({
    type: l,
    values: c
  });
}
function Cr(e) {
  e = jt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? jt(da(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Wi(e, t) {
  const o = Cr(e), r = Cr(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function bo(e, t) {
  return e = jt(e), t = Yr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Vo(e);
}
function Bt(e, t, o) {
  try {
    return bo(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Wo(e, t) {
  if (e = jt(e), t = Yr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return Vo(e);
}
function ye(e, t, o) {
  try {
    return Wo(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Uo(e, t) {
  if (e = jt(e), t = Yr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return Vo(e);
}
function be(e, t, o) {
  try {
    return Uo(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Tp(e, t = 0.15) {
  return Cr(e) > 0.5 ? Wo(e, t) : Uo(e, t);
}
function ro(e, t, o) {
  try {
    return Tp(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
const Ep = "exact-prop: ​";
function fa(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Ep]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Op = /* @__PURE__ */ x.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const Ho = () => x.useContext(Op) ?? !1, wp = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (n.node, n.object);
function Sp(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const i = t.components[o];
  return i.defaultProps ? Fn(i.defaultProps, r, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? Fn(i, r, t.components.mergeClassNameAndStyle) : r;
}
function Cp({
  props: e,
  name: t
}) {
  const o = x.useContext(wp);
  return Sp({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
let Ui = 0;
function Rp(e) {
  const [t, o] = x.useState(e), r = e || t;
  return x.useEffect(() => {
    t == null && (Ui += 1, o(`mui-${Ui}`));
  }, [t]), r;
}
const Pp = {
  ...x
}, Hi = Pp.useId;
function Gn(e) {
  if (Hi !== void 0) {
    const t = Hi();
    return e ?? t;
  }
  return Rp(e);
}
const qi = {
  theme: void 0
};
function $p(e) {
  let t, o;
  return function(i) {
    let s = t;
    return (s === void 0 || i.theme !== o) && (qi.theme = i.theme, s = sa(e(qi)), t = s, o = i.theme), s;
  };
}
function Ip(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Yi = (e, t, o, r = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = o : i && typeof i == "object" && (i[s] = o) : i && typeof i == "object" && (i[s] || (i[s] = r.includes(s) ? [] : {}), i = i[s]);
  });
}, kp = (e, t, o) => {
  function r(i, s = [], a = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!o || o && !o([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  r(e);
}, Np = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function mr(e, t) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, s = {}, a = {};
  return kp(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const p = `--${o ? `${o}-` : ""}${l.join("-")}`, m = Np(l, c);
        Object.assign(i, {
          [p]: m
        }), Yi(s, l, `var(${p})`, u), Yi(a, l, `var(${p}, ${m})`, u);
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
function jp(e, t = {}) {
  const {
    getSelector: o = w,
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
    varsWithDefaults: h
  } = mr(u, t);
  let g = h;
  const b = {}, {
    [c]: f,
    ...v
  } = a;
  if (Object.entries(v || {}).forEach(([y, T]) => {
    const {
      vars: C,
      css: N,
      varsWithDefaults: D
    } = mr(T, t);
    g = De(g, D), b[y] = {
      css: N,
      vars: C
    };
  }), f) {
    const {
      css: y,
      vars: T,
      varsWithDefaults: C
    } = mr(f, t);
    g = De(g, C), b[c] = {
      css: y,
      vars: T
    };
  }
  function w(y, T) {
    var N, D;
    let C = i;
    if (i === "class" && (C = ".%s"), i === "data" && (C = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (C = `[${i}="%s"]`), y) {
      if (C === "media")
        return e.defaultColorScheme === y ? ":root" : {
          [`@media (prefers-color-scheme: ${((D = (N = a[y]) == null ? void 0 : N.palette) == null ? void 0 : D.mode) || y})`]: {
            ":root": T
          }
        };
      if (C)
        return e.defaultColorScheme === y ? `:root, ${C.replace("%s", String(y))}` : C.replace("%s", String(y));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let y = {
        ...p
      };
      return Object.entries(b).forEach(([, {
        vars: T
      }]) => {
        y = De(y, T);
      }), y;
    },
    generateStyleSheets: () => {
      var A, z;
      const y = [], T = e.defaultColorScheme || "light";
      function C(F, d) {
        Object.keys(d).length && y.push(typeof F == "string" ? {
          [F]: {
            ...d
          }
        } : F);
      }
      C(o(void 0, {
        ...m
      }), m);
      const {
        [T]: N,
        ...D
      } = b;
      if (N) {
        const {
          css: F
        } = N, d = (z = (A = a[T]) == null ? void 0 : A.palette) == null ? void 0 : z.mode, $ = !r && d ? {
          colorScheme: d,
          ...F
        } : {
          ...F
        };
        C(o(T, {
          ...$
        }), $);
      }
      return Object.entries(D).forEach(([F, {
        css: d
      }]) => {
        var j, k;
        const $ = (k = (j = a[F]) == null ? void 0 : j.palette) == null ? void 0 : k.mode, P = !r && $ ? {
          colorScheme: $,
          ...d
        } : {
          ...d
        };
        C(o(F, {
          ...P
        }), P);
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
function Ap(e) {
  return function(o) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && o !== "light" && o !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${o}'.`), `@media (prefers-color-scheme: ${o})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${o}"] &` : e === "class" ? `.${o} &` : e === "data" ? `[data-${o}] &` : `${e.replace("%s", o)} &` : "&";
  };
}
function hr(e, t) {
  var o, r, i;
  return /* @__PURE__ */ x.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (o = e.type) == null ? void 0 : o._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
const Mp = Fo(), Dp = pp("div", {
  name: "MuiStack",
  slot: "Root"
});
function Bp(e) {
  return dp({
    props: e,
    name: "MuiStack",
    defaultTheme: Mp
  });
}
function _p(e, t) {
  const o = x.Children.toArray(e).filter(Boolean);
  return o.reduce((r, i, s) => (r.push(i), s < o.length - 1 && r.push(/* @__PURE__ */ x.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const Lp = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Fp = ({
  ownerState: e,
  theme: t
}) => {
  let o = {
    display: "flex",
    flexDirection: "column",
    ...st({
      theme: t
    }, ur({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Ao(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = ur({
      values: e.direction,
      base: i
    }), a = ur({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, p) => {
      if (!s[c]) {
        const h = u > 0 ? s[p[u - 1]] : "column";
        s[c] = h;
      }
    }), o = De(o, st({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: Yt(r, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Lp(u ? s[u] : e.direction)}`]: Yt(r, c)
      }
    }));
  }
  return o = qc(t.breakpoints, o), o;
};
function zp(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Dp,
    useThemeProps: o = Bp,
    componentName: r = "MuiStack"
  } = e, i = () => ue({
    root: ["root"]
  }, (c) => ce(r, c), {}), s = t(Fp), a = /* @__PURE__ */ x.forwardRef(function(c, u) {
    const p = o(c), m = qr(p), {
      component: h = "div",
      direction: g = "column",
      spacing: b = 0,
      divider: f,
      children: v,
      className: w,
      useFlexGap: R = !1,
      ...E
    } = m, y = {
      direction: g,
      spacing: b,
      useFlexGap: R
    }, T = i();
    return /* @__PURE__ */ O.jsx(s, {
      as: h,
      ownerState: y,
      ref: u,
      className: ne(T.root, w),
      ...E,
      children: f ? _p(v, f) : v
    });
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: n.node,
    direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
    divider: n.node,
    spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
  }), a;
}
const Vp = {
  black: "#000",
  white: "#fff"
}, zn = Vp, Wp = {
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
}, Up = Wp, Hp = {
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
}, Jt = Hp, qp = {
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
}, Zt = qp, Yp = {
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
}, En = Yp, Gp = {
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
}, en = Gp, Kp = {
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
}, tn = Kp, Xp = {
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
}, nn = Xp;
function ma() {
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
      paper: zn.white,
      default: zn.white
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
const ha = ma();
function ga() {
  return {
    text: {
      primary: zn.white,
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
      active: zn.white,
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
const Rr = ga();
function Gi(e, t, o, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = Uo(e.main, i) : t === "dark" && (e.dark = Wo(e.main, s)));
}
function Ki(e, t, o, r, i) {
  const s = i.light || i, a = i.dark || i * 1.5;
  t[o] || (t.hasOwnProperty(r) ? t[o] = t[r] : o === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : o === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Qp(e = "light") {
  return e === "dark" ? {
    main: en[200],
    light: en[50],
    dark: en[400]
  } : {
    main: en[700],
    light: en[400],
    dark: en[800]
  };
}
function Jp(e = "light") {
  return e === "dark" ? {
    main: Jt[200],
    light: Jt[50],
    dark: Jt[400]
  } : {
    main: Jt[500],
    light: Jt[300],
    dark: Jt[700]
  };
}
function Zp(e = "light") {
  return e === "dark" ? {
    main: Zt[500],
    light: Zt[300],
    dark: Zt[700]
  } : {
    main: Zt[700],
    light: Zt[400],
    dark: Zt[800]
  };
}
function ed(e = "light") {
  return e === "dark" ? {
    main: tn[400],
    light: tn[300],
    dark: tn[700]
  } : {
    main: tn[700],
    light: tn[500],
    dark: tn[900]
  };
}
function td(e = "light") {
  return e === "dark" ? {
    main: nn[400],
    light: nn[300],
    dark: nn[700]
  } : {
    main: nn[800],
    light: nn[500],
    dark: nn[900]
  };
}
function nd(e = "light") {
  return e === "dark" ? {
    main: En[400],
    light: En[300],
    dark: En[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: En[500],
    dark: En[900]
  };
}
function od(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Gr(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2,
    colorSpace: i,
    ...s
  } = e, a = e.primary || Qp(t), l = e.secondary || Jp(t), c = e.error || Zp(t), u = e.info || ed(t), p = e.success || td(t), m = e.warning || nd(t);
  function h(v) {
    if (i)
      return od(v);
    const w = Wi(v, Rr.text.primary) >= o ? Rr.text.primary : ha.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = Wi(v, w);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${w} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return w;
  }
  const g = ({
    color: v,
    name: w,
    mainShade: R = 500,
    lightShade: E = 300,
    darkShade: y = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[R] && (v.main = v[R]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : bt(11, w ? ` (${w})` : "", R));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : bt(12, w ? ` (${w})` : "", JSON.stringify(v.main)));
    return i ? (Ki(i, v, "light", E, r), Ki(i, v, "dark", y, r)) : (Gi(v, "light", E, r), Gi(v, "dark", y, r)), v.contrastText || (v.contrastText = h(v.main)), v;
  };
  let b;
  return t === "light" ? b = ma() : t === "dark" && (b = ga()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), De({
    // A collection of common colors.
    common: {
      ...zn
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
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: c,
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
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Up,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...b
  }, s);
}
function rd(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, s] = r;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function id(e, t) {
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
function sd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Xi = {
  textTransform: "uppercase"
}, Qi = '"Roboto", "Helvetica", "Arial", sans-serif';
function ad(e, t) {
  const {
    fontFamily: o = Qi,
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
  const h = r / 14, g = p || ((v) => `${v / c * h}rem`), b = (v, w, R, E, y) => ({
    fontFamily: o,
    fontWeight: v,
    fontSize: g(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === Qi ? {
      letterSpacing: `${sd(E / w)}em`
    } : {},
    ...y,
    ...u
  }), f = {
    h1: b(i, 96, 1.167, -1.5),
    h2: b(i, 60, 1.2, -0.5),
    h3: b(s, 48, 1.167, 0),
    h4: b(s, 34, 1.235, 0.25),
    h5: b(s, 24, 1.334, 0),
    h6: b(a, 20, 1.6, 0.15),
    subtitle1: b(s, 16, 1.75, 0.15),
    subtitle2: b(a, 14, 1.57, 0.1),
    body1: b(s, 16, 1.5, 0.15),
    body2: b(s, 14, 1.43, 0.15),
    button: b(a, 14, 1.75, 0.4, Xi),
    caption: b(s, 12, 1.66, 0.4),
    overline: b(s, 12, 2.66, 1, Xi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return De({
    htmlFontSize: c,
    pxToRem: g,
    fontFamily: o,
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
const ld = 0.2, cd = 0.14, ud = 0.12;
function Se(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ld})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${cd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ud})`].join(",");
}
const pd = ["none", Se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], dd = pd, fd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, md = {
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
function Ji(e) {
  return `${Math.round(e)}ms`;
}
function hd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function gd(e) {
  const t = {
    ...fd,
    ...e.easing
  }, o = {
    ...md,
    ...e.duration
  };
  return {
    getAutoHeightDuration: hd,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = o.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const p = (h) => typeof h == "string", m = (h) => !Number.isNaN(parseFloat(h));
        !p(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(l) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !p(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((p) => `${p} ${typeof a == "string" ? a : Ji(a)} ${l} ${typeof c == "string" ? c : Ji(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: o
  };
}
const yd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, bd = yd;
function vd(e) {
  return ht(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ya(e = {}) {
  const t = {
    ...e
  };
  function o(r) {
    const i = Object.entries(r);
    for (let s = 0; s < i.length; s++) {
      const [a, l] = i[s];
      !vd(l) || a.startsWith("unstable_") ? delete r[a] : ht(l) && (r[a] = {
        ...l
      }, o(r[a]));
    }
  }
  return o(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Zi(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const xd = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let o = 0;
  for (let r = 0; r < t.length; r += 1)
    o += +t[r];
  return o;
};
function Td(e) {
  Object.assign(e, {
    alpha(t, o) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof o == "string" ? `calc(${o})` : o})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof o == "string" ? `calc(${o})` : o})` : bo(t, xd(o));
    },
    lighten(t, o) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Zi(o)})` : Uo(t, o);
    },
    darken(t, o) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Zi(o)})` : Wo(t, o);
    }
  });
}
function Pr(e = {}, ...t) {
  const {
    breakpoints: o,
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : bt(20));
  const m = Gr({
    ...s,
    colorSpace: u
  }), h = Fo(e);
  let g = De(h, {
    mixins: id(h.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: dd.slice(),
    typography: ad(m, l),
    transitions: gd(a),
    zIndex: {
      ...bd
    }
  });
  if (g = De(g, p), g = t.reduce((b, f) => De(b, f), g), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (v, w) => {
      let R;
      for (R in v) {
        const E = v[R];
        if (b.includes(R) && Object.keys(E).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const y = ce("", R);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${y}' syntax:`, JSON.stringify({
              root: {
                [`&.${y}`]: E
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[R] = {};
        }
      }
    };
    Object.keys(g.components).forEach((v) => {
      const w = g.components[v].styleOverrides;
      w && v.startsWith("Mui") && f(w, v);
    });
  }
  return g.unstable_sxConfig = {
    ...Yn,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, g.unstable_sx = function(f) {
    return ln({
      sx: f,
      theme: this
    });
  }, g.toRuntimeSource = ya, Td(g), g;
}
function $r(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Ed = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const o = $r(t);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function ba(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function va(e) {
  return e === "dark" ? Ed : [];
}
function Od(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: r,
    colorSpace: i,
    ...s
  } = e, a = Gr({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...ba(a.mode),
      ...o
    },
    overlays: r || va(a.mode),
    ...s
  };
}
function wd(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Sd = (e) => [...[...Array(25)].map((t, o) => `--${e ? `${e}-` : ""}overlays-${o}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Cd = Sd, Rd = (e) => (t, o) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let s = i;
  if (i === "class" && (s = ".%s"), i === "data" && (s = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Cd(e.cssVarPrefix).forEach((l) => {
        a[l] = o[l], delete o[l];
      }), s === "media" ? {
        [r]: o,
        "@media (prefers-color-scheme: dark)": {
          [r]: a
        }
      } : s ? {
        [s.replace("%s", t)]: a,
        [`${r}, ${s.replace("%s", t)}`]: o
      } : {
        [r]: {
          ...o,
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
          [r]: o
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return r;
};
function Pd(e, t) {
  t.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function B(e, t, o) {
  !e[t] && o && (e[t] = o);
}
function In(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : da(e);
}
function Ot(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = $n(In(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function $d(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const dt = (e) => {
  try {
    return e();
  } catch {
  }
}, Id = (e = "mui") => Ip(e);
function gr(e, t, o, r, i) {
  if (!o)
    return;
  o = o === !0 ? {} : o;
  const s = i === "dark" ? "dark" : "light";
  if (!r) {
    t[i] = Od({
      ...o,
      palette: {
        mode: s,
        ...o == null ? void 0 : o.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...l
  } = Pr({
    ...r,
    palette: {
      mode: s,
      ...o == null ? void 0 : o.palette
    },
    colorSpace: e
  });
  return t[i] = {
    ...o,
    palette: a,
    opacity: {
      ...ba(s),
      ...o == null ? void 0 : o.opacity
    },
    overlays: (o == null ? void 0 : o.overlays) || va(s)
  }, l;
}
function kd(e = {}, ...t) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: l = wd,
    colorSchemeSelector: c = o.light && o.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...p
  } = e, m = Object.keys(o)[0], h = r || (o.light && m !== "light" ? "light" : m), g = Id(s), {
    [h]: b,
    light: f,
    dark: v,
    ...w
  } = o, R = {
    ...w
  };
  let E = b;
  if ((h === "dark" && !("dark" in o) || h === "light" && !("light" in o)) && (E = !0), !E)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : bt(21, h));
  let y;
  a && (y = "oklch");
  const T = gr(y, R, E, p, h);
  f && !R.light && gr(y, R, f, void 0, "light"), v && !R.dark && gr(y, R, v, void 0, "dark");
  let C = {
    defaultColorScheme: h,
    ...T,
    cssVarPrefix: s,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: g,
    colorSchemes: R,
    font: {
      ...rd(T.typography),
      ...T.font
    },
    spacing: $d(p.spacing)
  };
  Object.keys(C.colorSchemes).forEach((F) => {
    const d = C.colorSchemes[F].palette, $ = (j) => {
      const k = j.split("-"), L = k[1], M = k[2];
      return g(j, d[L][M]);
    };
    d.mode === "light" && (B(d.common, "background", "#fff"), B(d.common, "onBackground", "#000")), d.mode === "dark" && (B(d.common, "background", "#000"), B(d.common, "onBackground", "#fff"));
    function P(j, k, L) {
      if (y) {
        let M;
        return j === Bt && (M = `transparent ${((1 - L) * 100).toFixed(0)}%`), j === ye && (M = `#000 ${(L * 100).toFixed(0)}%`), j === be && (M = `#fff ${(L * 100).toFixed(0)}%`), `color-mix(in ${y}, ${k}, ${M})`;
      }
      return j(k, L);
    }
    if (Pd(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      B(d.Alert, "errorColor", P(ye, d.error.light, 0.6)), B(d.Alert, "infoColor", P(ye, d.info.light, 0.6)), B(d.Alert, "successColor", P(ye, d.success.light, 0.6)), B(d.Alert, "warningColor", P(ye, d.warning.light, 0.6)), B(d.Alert, "errorFilledBg", $("palette-error-main")), B(d.Alert, "infoFilledBg", $("palette-info-main")), B(d.Alert, "successFilledBg", $("palette-success-main")), B(d.Alert, "warningFilledBg", $("palette-warning-main")), B(d.Alert, "errorFilledColor", dt(() => d.getContrastText(d.error.main))), B(d.Alert, "infoFilledColor", dt(() => d.getContrastText(d.info.main))), B(d.Alert, "successFilledColor", dt(() => d.getContrastText(d.success.main))), B(d.Alert, "warningFilledColor", dt(() => d.getContrastText(d.warning.main))), B(d.Alert, "errorStandardBg", P(be, d.error.light, 0.9)), B(d.Alert, "infoStandardBg", P(be, d.info.light, 0.9)), B(d.Alert, "successStandardBg", P(be, d.success.light, 0.9)), B(d.Alert, "warningStandardBg", P(be, d.warning.light, 0.9)), B(d.Alert, "errorIconColor", $("palette-error-main")), B(d.Alert, "infoIconColor", $("palette-info-main")), B(d.Alert, "successIconColor", $("palette-success-main")), B(d.Alert, "warningIconColor", $("palette-warning-main")), B(d.AppBar, "defaultBg", $("palette-grey-100")), B(d.Avatar, "defaultBg", $("palette-grey-400")), B(d.Button, "inheritContainedBg", $("palette-grey-300")), B(d.Button, "inheritContainedHoverBg", $("palette-grey-A100")), B(d.Chip, "defaultBorder", $("palette-grey-400")), B(d.Chip, "defaultAvatarColor", $("palette-grey-700")), B(d.Chip, "defaultIconColor", $("palette-grey-700")), B(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), B(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), B(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), B(d.LinearProgress, "primaryBg", P(be, d.primary.main, 0.62)), B(d.LinearProgress, "secondaryBg", P(be, d.secondary.main, 0.62)), B(d.LinearProgress, "errorBg", P(be, d.error.main, 0.62)), B(d.LinearProgress, "infoBg", P(be, d.info.main, 0.62)), B(d.LinearProgress, "successBg", P(be, d.success.main, 0.62)), B(d.LinearProgress, "warningBg", P(be, d.warning.main, 0.62)), B(d.Skeleton, "bg", y ? P(Bt, d.text.primary, 0.11) : `rgba(${$("palette-text-primaryChannel")} / 0.11)`), B(d.Slider, "primaryTrack", P(be, d.primary.main, 0.62)), B(d.Slider, "secondaryTrack", P(be, d.secondary.main, 0.62)), B(d.Slider, "errorTrack", P(be, d.error.main, 0.62)), B(d.Slider, "infoTrack", P(be, d.info.main, 0.62)), B(d.Slider, "successTrack", P(be, d.success.main, 0.62)), B(d.Slider, "warningTrack", P(be, d.warning.main, 0.62));
      const j = y ? P(ye, d.background.default, 0.6825) : ro(d.background.default, 0.8);
      B(d.SnackbarContent, "bg", j), B(d.SnackbarContent, "color", dt(() => y ? Rr.text.primary : d.getContrastText(j))), B(d.SpeedDialAction, "fabHoverBg", ro(d.background.paper, 0.15)), B(d.StepConnector, "border", $("palette-grey-400")), B(d.StepContent, "border", $("palette-grey-400")), B(d.Switch, "defaultColor", $("palette-common-white")), B(d.Switch, "defaultDisabledColor", $("palette-grey-100")), B(d.Switch, "primaryDisabledColor", P(be, d.primary.main, 0.62)), B(d.Switch, "secondaryDisabledColor", P(be, d.secondary.main, 0.62)), B(d.Switch, "errorDisabledColor", P(be, d.error.main, 0.62)), B(d.Switch, "infoDisabledColor", P(be, d.info.main, 0.62)), B(d.Switch, "successDisabledColor", P(be, d.success.main, 0.62)), B(d.Switch, "warningDisabledColor", P(be, d.warning.main, 0.62)), B(d.TableCell, "border", P(be, P(Bt, d.divider, 1), 0.88)), B(d.Tooltip, "bg", P(Bt, d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      B(d.Alert, "errorColor", P(be, d.error.light, 0.6)), B(d.Alert, "infoColor", P(be, d.info.light, 0.6)), B(d.Alert, "successColor", P(be, d.success.light, 0.6)), B(d.Alert, "warningColor", P(be, d.warning.light, 0.6)), B(d.Alert, "errorFilledBg", $("palette-error-dark")), B(d.Alert, "infoFilledBg", $("palette-info-dark")), B(d.Alert, "successFilledBg", $("palette-success-dark")), B(d.Alert, "warningFilledBg", $("palette-warning-dark")), B(d.Alert, "errorFilledColor", dt(() => d.getContrastText(d.error.dark))), B(d.Alert, "infoFilledColor", dt(() => d.getContrastText(d.info.dark))), B(d.Alert, "successFilledColor", dt(() => d.getContrastText(d.success.dark))), B(d.Alert, "warningFilledColor", dt(() => d.getContrastText(d.warning.dark))), B(d.Alert, "errorStandardBg", P(ye, d.error.light, 0.9)), B(d.Alert, "infoStandardBg", P(ye, d.info.light, 0.9)), B(d.Alert, "successStandardBg", P(ye, d.success.light, 0.9)), B(d.Alert, "warningStandardBg", P(ye, d.warning.light, 0.9)), B(d.Alert, "errorIconColor", $("palette-error-main")), B(d.Alert, "infoIconColor", $("palette-info-main")), B(d.Alert, "successIconColor", $("palette-success-main")), B(d.Alert, "warningIconColor", $("palette-warning-main")), B(d.AppBar, "defaultBg", $("palette-grey-900")), B(d.AppBar, "darkBg", $("palette-background-paper")), B(d.AppBar, "darkColor", $("palette-text-primary")), B(d.Avatar, "defaultBg", $("palette-grey-600")), B(d.Button, "inheritContainedBg", $("palette-grey-800")), B(d.Button, "inheritContainedHoverBg", $("palette-grey-700")), B(d.Chip, "defaultBorder", $("palette-grey-700")), B(d.Chip, "defaultAvatarColor", $("palette-grey-300")), B(d.Chip, "defaultIconColor", $("palette-grey-300")), B(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), B(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), B(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), B(d.LinearProgress, "primaryBg", P(ye, d.primary.main, 0.5)), B(d.LinearProgress, "secondaryBg", P(ye, d.secondary.main, 0.5)), B(d.LinearProgress, "errorBg", P(ye, d.error.main, 0.5)), B(d.LinearProgress, "infoBg", P(ye, d.info.main, 0.5)), B(d.LinearProgress, "successBg", P(ye, d.success.main, 0.5)), B(d.LinearProgress, "warningBg", P(ye, d.warning.main, 0.5)), B(d.Skeleton, "bg", y ? P(Bt, d.text.primary, 0.13) : `rgba(${$("palette-text-primaryChannel")} / 0.13)`), B(d.Slider, "primaryTrack", P(ye, d.primary.main, 0.5)), B(d.Slider, "secondaryTrack", P(ye, d.secondary.main, 0.5)), B(d.Slider, "errorTrack", P(ye, d.error.main, 0.5)), B(d.Slider, "infoTrack", P(ye, d.info.main, 0.5)), B(d.Slider, "successTrack", P(ye, d.success.main, 0.5)), B(d.Slider, "warningTrack", P(ye, d.warning.main, 0.5));
      const j = y ? P(be, d.background.default, 0.985) : ro(d.background.default, 0.98);
      B(d.SnackbarContent, "bg", j), B(d.SnackbarContent, "color", dt(() => y ? ha.text.primary : d.getContrastText(j))), B(d.SpeedDialAction, "fabHoverBg", ro(d.background.paper, 0.15)), B(d.StepConnector, "border", $("palette-grey-600")), B(d.StepContent, "border", $("palette-grey-600")), B(d.Switch, "defaultColor", $("palette-grey-300")), B(d.Switch, "defaultDisabledColor", $("palette-grey-600")), B(d.Switch, "primaryDisabledColor", P(ye, d.primary.main, 0.55)), B(d.Switch, "secondaryDisabledColor", P(ye, d.secondary.main, 0.55)), B(d.Switch, "errorDisabledColor", P(ye, d.error.main, 0.55)), B(d.Switch, "infoDisabledColor", P(ye, d.info.main, 0.55)), B(d.Switch, "successDisabledColor", P(ye, d.success.main, 0.55)), B(d.Switch, "warningDisabledColor", P(ye, d.warning.main, 0.55)), B(d.TableCell, "border", P(ye, P(Bt, d.divider, 1), 0.68)), B(d.Tooltip, "bg", P(Bt, d.grey[700], 0.92));
    }
    Ot(d.background, "default"), Ot(d.background, "paper"), Ot(d.common, "background"), Ot(d.common, "onBackground"), Ot(d, "divider"), Object.keys(d).forEach((j) => {
      const k = d[j];
      j !== "tonalOffset" && k && typeof k == "object" && (k.main && B(d[j], "mainChannel", $n(In(k.main))), k.light && B(d[j], "lightChannel", $n(In(k.light))), k.dark && B(d[j], "darkChannel", $n(In(k.dark))), k.contrastText && B(d[j], "contrastTextChannel", $n(In(k.contrastText))), j === "text" && (Ot(d[j], "primary"), Ot(d[j], "secondary")), j === "action" && (k.active && Ot(d[j], "active"), k.selected && Ot(d[j], "selected")));
    });
  }), C = t.reduce((F, d) => De(F, d), C);
  const N = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: Rd(C),
    enableContrastVars: a
  }, {
    vars: D,
    generateThemeVars: A,
    generateStyleSheets: z
  } = jp(C, N);
  return C.vars = D, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([F, d]) => {
    C[F] = d;
  }), C.generateThemeVars = A, C.generateStyleSheets = z, C.generateSpacing = function() {
    return na(p.spacing, Ao(this));
  }, C.getColorSchemeSelector = Ap(c), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = l, C.unstable_sxConfig = {
    ...Yn,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, C.unstable_sx = function(d) {
    return ln({
      sx: d,
      theme: this
    });
  }, C.toRuntimeSource = ya, C;
}
function es(e, t, o) {
  e.colorSchemes && o && (e.colorSchemes[t] = {
    ...o !== !0 && o,
    palette: Gr({
      ...o === !0 ? {} : o.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function xa(e = {}, ...t) {
  const {
    palette: o,
    cssVariables: r = !1,
    colorSchemes: i = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = o == null ? void 0 : o.mode,
    ...a
  } = e, l = s || "light", c = i == null ? void 0 : i[l], u = {
    ...i,
    ...o ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: o
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Pr(e, ...t);
    let p = o;
    "palette" in e || u[l] && (u[l] !== !0 ? p = u[l].palette : l === "dark" && (p = {
      mode: "dark"
    }));
    const m = Pr({
      ...e,
      palette: p
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, es(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, es(m, "light", u.light)), m;
  }
  return !o && !("light" in u) && l === "light" && (u.light = !0), kd({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Nd = xa(), Kr = Nd, Kn = "$$material";
function hn() {
  const e = zo(Kr);
  return process.env.NODE_ENV !== "production" && x.useDebugValue(e), e[Kn] || e;
}
function Ta(e) {
  return /* @__PURE__ */ O.jsx(ra, {
    ...e,
    defaultTheme: Kr,
    themeId: Kn
  });
}
process.env.NODE_ENV !== "production" && (Ta.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function Ea(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const jd = (e) => Ea(e) && e !== "classes", qe = jd, Ad = la({
  themeId: Kn,
  defaultTheme: Kr,
  rootShouldForwardProp: qe
}), K = Ad;
function Md(e) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ O.jsx(Ta, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...o
        }) : e
      })
    );
  };
}
function Dd() {
  return qr;
}
const Bd = $p, pe = Bd;
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function de(e) {
  return Cp(e);
}
function _d(e) {
  return ce("MuiSvgIcon", e);
}
le("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ld = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(o)}`]
  };
  return ue(i, _d, r);
}, Fd = K("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${X(o.color)}`], t[`fontSize${X(o.fontSize)}`]];
  }
})(pe(({
  theme: e
}) => {
  var t, o, r, i, s, a, l, c, u, p, m, h, g, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (r = (o = (e.vars ?? e).transitions) == null ? void 0 : o.duration) == null ? void 0 : r.shorter
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
        var v, w;
        return {
          props: {
            color: f
          },
          style: {
            color: (w = (v = (e.vars ?? e).palette) == null ? void 0 : v[f]) == null ? void 0 : w.main
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
          color: (b = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) == null ? void 0 : b.disabled
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
})), Xr = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    viewBox: h = "0 0 24 24",
    ...g
  } = r, b = /* @__PURE__ */ x.isValidElement(i) && i.type === "svg", f = {
    ...r,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: h,
    hasSvgAsChild: b
  }, v = {};
  p || (v.viewBox = h);
  const w = Ld(f);
  return /* @__PURE__ */ O.jsxs(Fd, {
    as: l,
    className: ne(w.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: o,
    ...v,
    ...g,
    ...b && i.props,
    ownerState: f,
    children: [b ? i.props.children : i, m ? /* @__PURE__ */ O.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Xr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
Xr.muiName = "SvgIcon";
const ts = Xr;
function Rt(e, t) {
  function o(r, i) {
    return /* @__PURE__ */ O.jsx(ts, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = ts.muiName, /* @__PURE__ */ x.memo(/* @__PURE__ */ x.forwardRef(o));
}
function Qr(e, t = 166) {
  let o;
  function r(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(o), o = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function Ue(e) {
  return e && e.ownerDocument || document;
}
function lt(e) {
  return Ue(e).defaultView || window;
}
function ns(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Ir(e) {
  const {
    controlled: t,
    default: o,
    name: r,
    state: i = "value"
  } = e, {
    current: s
  } = x.useRef(t !== void 0), [a, l] = x.useState(o), c = s ? t : a;
  if (process.env.NODE_ENV !== "production") {
    x.useEffect(() => {
      s !== (t !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${i} state of ${r} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [i, r, t]);
    const {
      current: p
    } = x.useRef(o);
    x.useEffect(() => {
      !s && JSON.stringify(o) !== JSON.stringify(p) && console.error([`MUI: A component is changing the default ${i} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(o)]);
  }
  const u = x.useCallback((p) => {
    s || l(p);
  }, []);
  return [c, u];
}
function St(e) {
  const t = x.useRef(e);
  return at(() => {
    t.current = e;
  }), x.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Me(...e) {
  const t = x.useRef(void 0), o = x.useCallback((r) => {
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
  return x.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = o(r));
  }, e);
}
function zd(e, t) {
  const o = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && o >= 65 && o <= 90 && typeof t == "function";
}
function Oa(e, t) {
  if (!e)
    return t;
  function o(a, l) {
    const c = {};
    return Object.keys(l).forEach((u) => {
      zd(u, l[u]) && typeof a[u] == "function" && (c[u] = (...p) => {
        a[u](...p), l[u](...p);
      });
    }), c;
  }
  if (typeof e == "function" || typeof t == "function")
    return (a) => {
      const l = typeof t == "function" ? t(a) : t, c = typeof e == "function" ? e({
        ...a,
        ...l
      }) : e, u = ne(a == null ? void 0 : a.className, l == null ? void 0 : l.className, c == null ? void 0 : c.className), p = o(c, l);
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
  const r = t, i = o(e, r), s = ne(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
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
const Vd = Rt(/* @__PURE__ */ O.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"
}), "AccountCircleRounded"), wa = Rt([/* @__PURE__ */ O.jsx("path", {
  d: "M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
}, "0"), /* @__PURE__ */ O.jsx("path", {
  d: "m20.65 11.65-2.79-2.79c-.32-.32-.86-.1-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
}, "1")], "LogoutRounded"), Wd = Rt(/* @__PURE__ */ O.jsx("path", {
  d: "M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
}), "MenuRounded"), Ud = Rt(/* @__PURE__ */ O.jsx("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
}), "NotificationsOutlined"), Hd = Rt(/* @__PURE__ */ O.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "SearchRounded");
function qd(e) {
  return typeof e.main == "string";
}
function Yd(e, t = []) {
  if (!qd(e))
    return !1;
  for (const o of t)
    if (!e.hasOwnProperty(o) || typeof e[o] != "string")
      return !1;
  return !0;
}
function ct(e = []) {
  return ([, t]) => t && Yd(t, e);
}
function Gd(e) {
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
function Sa(e, t, o, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = Gd(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function Ca(e, t, o, r) {
  return e[t] === void 0 ? null : Sa(e, t, o, r);
}
function kr() {
  return null;
}
Ca.isRequired = Sa;
kr.isRequired = kr;
const Kd = process.env.NODE_ENV === "production" ? kr : Ca, Jr = Kd;
function Tt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Xd(e) {
  return ce("MuiPaper", e);
}
le("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Qd = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return ue(s, Xd, i);
}, Jd = K("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(pe(({
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
}))), Ra = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var g;
  const r = de({
    props: t,
    name: "MuiPaper"
  }), i = hn(), {
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
  }, h = Qd(m);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ O.jsx(Jd, {
    as: a,
    ownerState: m,
    className: ne(h.root, s),
    ref: o,
    ...p,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (g = i.vars.overlays) == null ? void 0 : g[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${bo("#fff", $r(l))}, ${bo("#fff", $r(l))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Tt(Jr, (e) => {
    const {
      elevation: t,
      variant: o
    } = e;
    return t > 0 && o === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${o}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
const qo = Ra;
function Zd(e) {
  return ce("MuiAppBar", e);
}
le("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const ef = (e) => {
  const {
    color: t,
    position: o,
    classes: r
  } = e, i = {
    root: ["root", `color${X(t)}`, `position${X(o)}`]
  };
  return ue(i, Zd, r);
}, os = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, tf = K(qo, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`position${X(o.position)}`], t[`color${X(o.color)}`]];
  }
})(pe(({
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
  }, ...Object.entries(e.palette).filter(ct(["contrastText"])).map(([t]) => ({
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
        backgroundColor: e.vars ? os(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? os(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
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
}))), Pa = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
  }, p = ef(u);
  return /* @__PURE__ */ O.jsx(tf, {
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: ne(p.root, i, l === "fixed" && "mui-fixed"),
    ref: o,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (Pa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]), n.string]),
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: n.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: n.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const nf = Pa, of = Rt(/* @__PURE__ */ O.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function rf(e) {
  return ce("MuiAvatar", e);
}
le("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
function vo(e) {
  return typeof e == "string";
}
function $a(e, t, o) {
  return e === void 0 || vo(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...o
    }
  };
}
function Ia(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function ka(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function rs(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function Na(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const g = ne(o == null ? void 0 : o.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), b = {
      ...o == null ? void 0 : o.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, f = {
      ...o,
      ...i,
      ...r
    };
    return g.length > 0 && (f.className = g), Object.keys(b).length > 0 && (f.style = b), {
      props: f,
      internalRef: void 0
    };
  }
  const a = ka({
    ...i,
    ...r
  }), l = rs(r), c = rs(i), u = t(a), p = ne(u == null ? void 0 : u.className, o == null ? void 0 : o.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), m = {
    ...u == null ? void 0 : u.style,
    ...o == null ? void 0 : o.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...u,
    ...o,
    ...c,
    ...l
  };
  return p.length > 0 && (h.className = p), Object.keys(m).length > 0 && (h.style = m), {
    props: h,
    internalRef: u.ref
  };
}
function ve(e, t) {
  const {
    className: o,
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
    ...h
  } = s, g = p[e] || r, b = Ia(m[e], i), {
    props: {
      component: f,
      ...v
    },
    internalRef: w
  } = Na({
    className: o,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: b
  }), R = Me(w, b == null ? void 0 : b.ref, t.ref), E = e === "root" ? f || u : f, y = $a(g, {
    ...e === "root" && !u && !p[e] && a,
    ...e !== "root" && !p[e] && a,
    ...v,
    ...E && !l && {
      as: E
    },
    ...E && l && {
      component: E
    },
    ref: R
  }, i);
  return [g, y];
}
const sf = (e) => {
  const {
    classes: t,
    variant: o,
    colorDefault: r
  } = e;
  return ue({
    root: ["root", o, r && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, rf, t);
}, af = K("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], o.colorDefault && t.colorDefault];
  }
})(pe(({
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
}))), lf = K("img", {
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
}), cf = K(of, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function uf({
  crossOrigin: e,
  referrerPolicy: t,
  src: o,
  srcSet: r
}) {
  const [i, s] = x.useState(!1);
  return x.useEffect(() => {
    if (!o && !r)
      return;
    s(!1);
    let a = !0;
    const l = new Image();
    return l.onload = () => {
      a && s("loaded");
    }, l.onerror = () => {
      a && s("error");
    }, l.crossOrigin = e, l.referrerPolicy = t, l.src = o, r && (l.srcset = r), () => {
      a = !1;
    };
  }, [e, t, o, r]), i;
}
const ja = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    src: h,
    srcSet: g,
    variant: b = "circular",
    ...f
  } = r;
  let v = null;
  const w = {
    ...r,
    component: l,
    variant: b
  }, R = uf({
    ...p,
    ...typeof u.img == "function" ? u.img(w) : u.img,
    src: h,
    srcSet: g
  }), E = h || g, y = E && R !== "error";
  w.colorDefault = !y, delete w.ownerState;
  const T = sf(w), [C, N] = ve("root", {
    ref: o,
    className: ne(T.root, a),
    elementType: af,
    externalForwardedProps: {
      slots: c,
      slotProps: u,
      component: l,
      ...f
    },
    ownerState: w
  }), [D, A] = ve("img", {
    className: T.img,
    elementType: lf,
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
      src: h,
      srcSet: g,
      sizes: m
    },
    ownerState: w
  }), [z, F] = ve("fallback", {
    className: T.fallback,
    elementType: cf,
    externalForwardedProps: {
      slots: c,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: w
  });
  return y ? v = /* @__PURE__ */ O.jsx(D, {
    ...A
  }) : s || s === 0 ? v = s : E && i ? v = i[0] : v = /* @__PURE__ */ O.jsx(z, {
    ...F
  }), /* @__PURE__ */ O.jsx(C, {
    ...N,
    children: v
  });
});
process.env.NODE_ENV !== "production" && (ja.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: n.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  imgProps: n.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: n.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    fallback: n.oneOfType([n.func, n.object]),
    img: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    fallback: n.elementType,
    img: n.elementType,
    root: n.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: n.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: n.oneOfType([n.oneOf(["circular", "rounded", "square"]), n.string])
});
const Aa = ja;
function Ma(e) {
  const t = x.useRef({});
  return x.useEffect(() => {
    t.current = e;
  }), t.current;
}
function pf(e) {
  const {
    badgeContent: t,
    invisible: o = !1,
    max: r = 99,
    showZero: i = !1
  } = e, s = Ma({
    badgeContent: t,
    max: r
  });
  let a = o;
  o === !1 && t === 0 && !i && (a = !0);
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
function df(e) {
  return ce("MuiBadge", e);
}
const ff = le("MuiBadge", [
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
]), It = ff, yr = 10, br = 4, mf = (e) => {
  const {
    color: t,
    anchorOrigin: o,
    invisible: r,
    overlap: i,
    variant: s,
    classes: a = {}
  } = e, l = {
    root: ["root"],
    badge: ["badge", s, r && "invisible", `anchorOrigin${X(o.vertical)}${X(o.horizontal)}`, `anchorOrigin${X(o.vertical)}${X(o.horizontal)}${X(i)}`, `overlap${X(i)}`, t !== "default" && `color${X(t)}`]
  };
  return ue(l, df, a);
}, hf = K("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), gf = K("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.badge, t[o.variant], t[`anchorOrigin${X(o.anchorOrigin.vertical)}${X(o.anchorOrigin.horizontal)}${X(o.overlap)}`], o.color !== "default" && t[`color${X(o.color)}`], o.invisible && t.invisible];
  }
})(pe(({
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
  minWidth: yr * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: yr * 2,
  borderRadius: yr,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(e.palette).filter(ct(["contrastText"])).map(([t]) => ({
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
      borderRadius: br,
      height: br * 2,
      minWidth: br * 2,
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
      [`&.${It.invisible}`]: {
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
      [`&.${It.invisible}`]: {
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
      [`&.${It.invisible}`]: {
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
      [`&.${It.invisible}`]: {
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
      [`&.${It.invisible}`]: {
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
      [`&.${It.invisible}`]: {
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
      [`&.${It.invisible}`]: {
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
      [`&.${It.invisible}`]: {
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
function is(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
  };
}
const Da = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    color: h = "default",
    invisible: g = !1,
    max: b = 99,
    badgeContent: f,
    slots: v,
    slotProps: w,
    showZero: R = !1,
    variant: E = "standard",
    ...y
  } = r, {
    badgeContent: T,
    invisible: C,
    max: N,
    displayValue: D
  } = pf({
    max: b,
    invisible: g,
    badgeContent: f,
    showZero: R
  }), A = Ma({
    anchorOrigin: is(i),
    color: h,
    overlap: m,
    variant: E,
    badgeContent: f
  }), z = C || T == null && E !== "dot", {
    color: F = h,
    overlap: d = m,
    anchorOrigin: $,
    variant: P = E
  } = z ? A : r, j = is($), k = P !== "dot" ? D : void 0, L = {
    ...r,
    badgeContent: T,
    invisible: z,
    max: N,
    displayValue: k,
    showZero: R,
    anchorOrigin: j,
    color: F,
    overlap: d,
    variant: P
  }, M = mf(L), _ = {
    slots: {
      root: (v == null ? void 0 : v.root) ?? c.Root,
      badge: (v == null ? void 0 : v.badge) ?? c.Badge
    },
    slotProps: {
      root: (w == null ? void 0 : w.root) ?? u.root,
      badge: (w == null ? void 0 : w.badge) ?? u.badge
    }
  }, [I, S] = ve("root", {
    elementType: hf,
    externalForwardedProps: {
      ..._,
      ...y
    },
    ownerState: L,
    className: ne(M.root, s),
    ref: o,
    additionalProps: {
      as: l
    }
  }), [W, U] = ve("badge", {
    elementType: gf,
    externalForwardedProps: _,
    ownerState: L,
    className: M.badge
  });
  return /* @__PURE__ */ O.jsxs(I, {
    ...S,
    children: [p, /* @__PURE__ */ O.jsx(W, {
      ...U,
      children: k
    })]
  });
});
process.env.NODE_ENV !== "production" && (Da.propTypes = {
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
  anchorOrigin: n.shape({
    horizontal: n.oneOf(["left", "right"]),
    vertical: n.oneOf(["bottom", "top"])
  }),
  /**
   * The content rendered within the badge.
   */
  badgeContent: n.node,
  /**
   * The badge will be added relative to this node.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Badge: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    badge: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: n.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: n.number,
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap: n.oneOf(["circular", "rectangular"]),
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: n.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    badge: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    badge: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: n.oneOfType([n.oneOf(["dot", "standard"]), n.string])
});
const Ba = Da, yf = le("MuiBox", ["root"]), bf = yf, vf = xa(), _a = ep({
  themeId: Kn,
  defaultTheme: vf,
  defaultClassName: bf.root,
  generateClassName: Hs.generate
});
process.env.NODE_ENV !== "production" && (_a.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const kn = _a;
function xf(e) {
  return ce("MuiDivider", e);
}
const Tf = le("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), ss = Tf, Ef = (e) => {
  const {
    absolute: t,
    children: o,
    classes: r,
    flexItem: i,
    light: s,
    orientation: a,
    textAlign: l,
    variant: c
  } = e;
  return ue({
    root: ["root", t && "absolute", c, s && "light", a === "vertical" && "vertical", i && "flexItem", o && "withChildren", o && a === "vertical" && "withChildrenVertical", l === "right" && a !== "vertical" && "textAlignRight", l === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, xf, r);
}, Of = K("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.absolute && t.absolute, t[o.variant], o.light && t.light, o.orientation === "vertical" && t.vertical, o.flexItem && t.flexItem, o.children && t.withChildren, o.children && o.orientation === "vertical" && t.withChildrenVertical, o.textAlign === "right" && o.orientation !== "vertical" && t.textAlignRight, o.textAlign === "left" && o.orientation !== "vertical" && t.textAlignLeft];
  }
})(pe(({
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
}))), wf = K("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.wrapper, o.orientation === "vertical" && t.wrapperVertical];
  }
})(pe(({
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
}))), xo = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    textAlign: h = "center",
    variant: g = "fullWidth",
    ...b
  } = r, f = {
    ...r,
    absolute: i,
    component: c,
    flexItem: u,
    light: p,
    orientation: l,
    role: m,
    textAlign: h,
    variant: g
  }, v = Ef(f);
  return /* @__PURE__ */ O.jsx(Of, {
    as: c,
    className: ne(v.root, a),
    role: m,
    ref: o,
    ownerState: f,
    "aria-orientation": m === "separator" && (c !== "hr" || l === "vertical") ? l : void 0,
    ...b,
    children: s ? /* @__PURE__ */ O.jsx(wf, {
      className: v.wrapper,
      ownerState: f,
      children: s
    }) : null
  });
});
xo && (xo.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (xo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: n.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  light: n.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: n.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: n.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: n.oneOfType([n.oneOf(["fullWidth", "inset", "middle"]), n.string])
});
const Ut = xo, Sf = n.oneOfType([n.func, n.object]), ut = Sf;
function Cf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Rf(e, t, o, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Cf(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Zr = Tt(n.elementType, Rf);
function To(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const as = {};
function La(e, t) {
  const o = x.useRef(as);
  return o.current === as && (o.current = e(t)), o;
}
class Eo {
  constructor() {
    bn(this, "mountEffect", () => {
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
    return new Eo();
  }
  static use() {
    const t = La(Eo.create).current, [o, r] = x.useState(!1);
    return t.shouldMount = o, t.setShouldMount = r, x.useEffect(t.mountEffect, [o]), t;
  }
  mount() {
    return this.mounted || (this.mounted = $f(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.pulsate(...t);
    });
  }
}
function Pf() {
  return Eo.use();
}
function $f() {
  let e, t;
  const o = new Promise((r, i) => {
    e = r, t = i;
  });
  return o.resolve = e, o.reject = t, o;
}
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, Nr.apply(null, arguments);
}
function Fa(e, t) {
  if (e == null)
    return {};
  var o = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1)
        continue;
      o[r] = e[r];
    }
  return o;
}
function jr(e, t) {
  return jr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, jr(e, t);
}
function za(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, jr(e, t);
}
const ls = {
  disabled: !1
};
var If = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]);
const Oo = gt.createContext(null);
var kf = function(t) {
  return t.scrollTop;
}, Nn = "unmounted", Ft = "exited", zt = "entering", rn = "entered", Ar = "exiting", Pt = /* @__PURE__ */ function(e) {
  za(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = Ft, s.appearStatus = zt) : c = rn : r.unmountOnExit || r.mountOnEnter ? c = Nn : c = Ft, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Nn ? {
      status: Ft
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== zt && a !== rn && (s = zt) : (a === zt || a === rn) && (s = Ar);
    }
    this.updateStatus(!1, s);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, o.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === zt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : no.findDOMNode(this);
          a && kf(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Ft && this.setState({
        status: Nn
      });
  }, o.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [no.findDOMNode(this), l], u = c[0], p = c[1], m = this.getTimeouts(), h = l ? m.appear : m.enter;
    if (!i && !a || ls.disabled) {
      this.safeSetState({
        status: rn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, p), this.safeSetState({
      status: zt
    }, function() {
      s.props.onEntering(u, p), s.onTransitionEnd(h, function() {
        s.safeSetState({
          status: rn
        }, function() {
          s.props.onEntered(u, p);
        });
      });
    });
  }, o.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : no.findDOMNode(this);
    if (!s || ls.disabled) {
      this.safeSetState({
        status: Ft
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Ar
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Ft
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, o.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : no.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], p = c[1];
      this.props.addEndListener(u, p);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, o.render = function() {
    var i = this.state.status;
    if (i === Nn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = Fa(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ gt.createElement(Oo.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : gt.cloneElement(gt.Children.only(a), l))
    );
  }, t;
}(gt.Component);
Pt.contextType = Oo;
Pt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, o, r, i, s) {
      var a = e[t];
      return n.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, o, r, i, s);
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
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
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
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
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
    var o = If;
    t.addEndListener || (o = o.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return o.apply(void 0, [t].concat(i));
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
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function on() {
}
Pt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: on,
  onEntering: on,
  onEntered: on,
  onExit: on,
  onExiting: on,
  onExited: on
};
Pt.UNMOUNTED = Nn;
Pt.EXITED = Ft;
Pt.ENTERING = zt;
Pt.ENTERED = rn;
Pt.EXITING = Ar;
const ei = Pt;
function Nf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ti(e, t) {
  var o = function(s) {
    return t && po(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && pc.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function jf(e, t) {
  e = e || {}, t = t || {};
  function o(p) {
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
        l[r[c][a]] = o(u);
      }
    l[c] = o(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = o(i[a]);
  return l;
}
function Wt(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Af(e, t) {
  return ti(e.children, function(o) {
    return fo(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: Wt(o, "appear", e),
      enter: Wt(o, "enter", e),
      exit: Wt(o, "exit", e)
    });
  });
}
function Mf(e, t, o) {
  var r = ti(e.children), i = jf(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (po(a)) {
      var l = s in t, c = s in r, u = t[s], p = po(u) && !u.props.in;
      c && (!l || p) ? i[s] = fo(a, {
        onExited: o.bind(null, a),
        in: !0,
        exit: Wt(a, "exit", e),
        enter: Wt(a, "enter", e)
      }) : !c && l && !p ? i[s] = fo(a, {
        in: !1
      }) : c && l && po(u) && (i[s] = fo(a, {
        onExited: o.bind(null, a),
        in: u.props.in,
        exit: Wt(a, "exit", e),
        enter: Wt(a, "enter", e)
      }));
    }
  }), i;
}
var Df = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Bf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ni = /* @__PURE__ */ function(e) {
  za(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(Nf(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Af(i, l) : Mf(i, a, l),
      firstRender: !1
    };
  }, o.handleExited = function(i, s) {
    var a = ti(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = Nr({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = Fa(i, ["component", "childFactory"]), c = this.state.contextValue, u = Df(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ gt.createElement(Oo.Provider, {
      value: c
    }, u) : /* @__PURE__ */ gt.createElement(Oo.Provider, {
      value: c
    }, /* @__PURE__ */ gt.createElement(s, l, u));
  }, t;
}(gt.Component);
ni.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
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
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
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
  childFactory: n.func
} : {};
ni.defaultProps = Bf;
const _f = ni, Lf = [];
function Ff(e) {
  x.useEffect(e, Lf);
}
class Yo {
  constructor() {
    bn(this, "currentId", null);
    bn(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    bn(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Yo();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
}
function sn() {
  const e = La(Yo.create).current;
  return Ff(e.disposeEffect), e;
}
function Va(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [p, m] = x.useState(!1), h = ne(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, b = ne(o.child, p && o.childLeaving, r && o.childPulsate);
  return !l && !p && m(!0), x.useEffect(() => {
    if (!l && c != null) {
      const f = setTimeout(c, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ O.jsx("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ O.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Va.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const zf = le("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ke = zf, Mr = 550, Vf = 80, Wf = Hn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Uf = Hn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Hf = Hn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, qf = K("span", {
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
}), Yf = K(Va, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ke.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Wf};
    animation-duration: ${Mr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ke.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ke.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ke.childLeaving} {
    opacity: 0;
    animation-name: ${Uf};
    animation-duration: ${Mr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ke.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Hf};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Wa = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a,
    ...l
  } = r, [c, u] = x.useState([]), p = x.useRef(0), m = x.useRef(null);
  x.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const h = x.useRef(!1), g = sn(), b = x.useRef(null), f = x.useRef(null), v = x.useCallback((y) => {
    const {
      pulsate: T,
      rippleX: C,
      rippleY: N,
      rippleSize: D,
      cb: A
    } = y;
    u((z) => [...z, /* @__PURE__ */ O.jsx(Yf, {
      classes: {
        ripple: ne(s.ripple, Ke.ripple),
        rippleVisible: ne(s.rippleVisible, Ke.rippleVisible),
        ripplePulsate: ne(s.ripplePulsate, Ke.ripplePulsate),
        child: ne(s.child, Ke.child),
        childLeaving: ne(s.childLeaving, Ke.childLeaving),
        childPulsate: ne(s.childPulsate, Ke.childPulsate)
      },
      timeout: Mr,
      pulsate: T,
      rippleX: C,
      rippleY: N,
      rippleSize: D
    }, p.current)]), p.current += 1, m.current = A;
  }, [s]), w = x.useCallback((y = {}, T = {}, C = () => {
  }) => {
    const {
      pulsate: N = !1,
      center: D = i || T.pulsate,
      fakeElement: A = !1
      // For test purposes
    } = T;
    if ((y == null ? void 0 : y.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (h.current = !0);
    const z = A ? null : f.current, F = z ? z.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let d, $, P;
    if (D || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches)
      d = Math.round(F.width / 2), $ = Math.round(F.height / 2);
    else {
      const {
        clientX: j,
        clientY: k
      } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      d = Math.round(j - F.left), $ = Math.round(k - F.top);
    }
    if (D)
      P = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), P % 2 === 0 && (P += 1);
    else {
      const j = Math.max(Math.abs((z ? z.clientWidth : 0) - d), d) * 2 + 2, k = Math.max(Math.abs((z ? z.clientHeight : 0) - $), $) * 2 + 2;
      P = Math.sqrt(j ** 2 + k ** 2);
    }
    y != null && y.touches ? b.current === null && (b.current = () => {
      v({
        pulsate: N,
        rippleX: d,
        rippleY: $,
        rippleSize: P,
        cb: C
      });
    }, g.start(Vf, () => {
      b.current && (b.current(), b.current = null);
    })) : v({
      pulsate: N,
      rippleX: d,
      rippleY: $,
      rippleSize: P,
      cb: C
    });
  }, [i, v, g]), R = x.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), E = x.useCallback((y, T) => {
    if (g.clear(), (y == null ? void 0 : y.type) === "touchend" && b.current) {
      b.current(), b.current = null, g.start(0, () => {
        E(y, T);
      });
      return;
    }
    b.current = null, u((C) => C.length > 0 ? C.slice(1) : C), m.current = T;
  }, [g]);
  return x.useImperativeHandle(o, () => ({
    pulsate: R,
    start: w,
    stop: E
  }), [R, w, E]), /* @__PURE__ */ O.jsx(qf, {
    className: ne(Ke.root, s.root, a),
    ref: f,
    ...l,
    children: /* @__PURE__ */ O.jsx(_f, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Wa.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
const Gf = Wa;
function Kf(e) {
  return ce("MuiButtonBase", e);
}
const Xf = le("MuiButtonBase", ["root", "disabled", "focusVisible"]), Qf = Xf, Jf = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, a = ue({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, Kf, i);
  return o && r && (a.root += ` ${r}`), a;
}, Zf = K("button", {
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
  [`&.${Qf.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ua = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    focusRipple: h = !1,
    focusVisibleClassName: g,
    LinkComponent: b = "a",
    onBlur: f,
    onClick: v,
    onContextMenu: w,
    onDragLeave: R,
    onFocus: E,
    onFocusVisible: y,
    onKeyDown: T,
    onKeyUp: C,
    onMouseDown: N,
    onMouseLeave: D,
    onMouseUp: A,
    onTouchEnd: z,
    onTouchMove: F,
    onTouchStart: d,
    tabIndex: $ = 0,
    TouchRippleProps: P,
    touchRippleRef: j,
    type: k,
    ...L
  } = r, M = x.useRef(null), _ = Pf(), I = Me(_.ref, j), [S, W] = x.useState(!1);
  u && S && W(!1), x.useImperativeHandle(i, () => ({
    focusVisible: () => {
      W(!0), M.current.focus();
    }
  }), []);
  const U = _.shouldMount && !p && !u;
  x.useEffect(() => {
    S && h && !p && _.pulsate();
  }, [p, h, S, _]);
  const H = wt(_, "start", N, m), G = wt(_, "stop", w, m), Z = wt(_, "stop", R, m), Y = wt(_, "stop", A, m), Q = wt(_, "stop", (te) => {
    S && te.preventDefault(), D && D(te);
  }, m), J = wt(_, "start", d, m), q = wt(_, "stop", z, m), ee = wt(_, "stop", F, m), V = wt(_, "stop", (te) => {
    To(te.target) || W(!1), f && f(te);
  }, !1), ie = St((te) => {
    M.current || (M.current = te.currentTarget), To(te.target) && (W(!0), y && y(te)), E && E(te);
  }), re = () => {
    const te = M.current;
    return c && c !== "button" && !(te.tagName === "A" && te.href);
  }, fe = St((te) => {
    h && !te.repeat && S && te.key === " " && _.stop(te, () => {
      _.start(te);
    }), te.target === te.currentTarget && re() && te.key === " " && te.preventDefault(), T && T(te), te.target === te.currentTarget && re() && te.key === "Enter" && !u && (te.preventDefault(), v && v(te));
  }), ke = St((te) => {
    h && te.key === " " && S && !te.defaultPrevented && _.stop(te, () => {
      _.pulsate(te);
    }), C && C(te), v && te.target === te.currentTarget && re() && te.key === " " && !te.defaultPrevented && v(te);
  });
  let Ce = c;
  Ce === "button" && (L.href || L.to) && (Ce = b);
  const we = {};
  Ce === "button" ? (we.type = k === void 0 ? "button" : k, we.disabled = u) : (!L.href && !L.to && (we.role = "button"), u && (we["aria-disabled"] = u));
  const je = Me(o, M), Oe = {
    ...r,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: p,
    disableTouchRipple: m,
    focusRipple: h,
    tabIndex: $,
    focusVisible: S
  }, Ee = Jf(Oe);
  return /* @__PURE__ */ O.jsxs(Zf, {
    as: Ce,
    className: ne(Ee.root, l),
    ownerState: Oe,
    onBlur: V,
    onClick: v,
    onContextMenu: G,
    onFocus: ie,
    onKeyDown: fe,
    onKeyUp: ke,
    onMouseDown: H,
    onMouseLeave: Q,
    onMouseUp: Y,
    onDragLeave: Z,
    onTouchEnd: q,
    onTouchMove: ee,
    onTouchStart: J,
    ref: je,
    tabIndex: u ? -1 : $,
    type: k,
    ...we,
    ...L,
    children: [a, U ? /* @__PURE__ */ O.jsx(Gf, {
      ref: I,
      center: s,
      ...P
    }) : null]
  });
});
function wt(e, t, o, r = !1) {
  return St((i) => (o && o(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (Ua.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ut,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Zr,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
const oi = Ua;
function em(e) {
  return ce("MuiCircularProgress", e);
}
le("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const rt = 44, Dr = Hn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Br = Hn`
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
`, tm = typeof Dr != "string" ? Us`
        animation: ${Dr} 1.4s linear infinite;
      ` : null, nm = typeof Br != "string" ? Us`
        animation: ${Br} 1.4s ease-in-out infinite;
      ` : null, om = (e) => {
  const {
    classes: t,
    variant: o,
    color: r,
    disableShrink: i
  } = e, s = {
    root: ["root", o, `color${X(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${X(o)}`, i && "circleDisableShrink"]
  };
  return ue(s, em, t);
}, rm = K("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`color${X(o.color)}`]];
  }
})(pe(({
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
    style: tm || {
      animation: `${Dr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), im = K("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), sm = K("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.circle, t[`circle${X(o.variant)}`], o.disableShrink && t.circleDisableShrink];
  }
})(pe(({
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
    style: nm || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Br} 1.4s ease-in-out infinite`
    }
  }]
}))), am = K("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(pe(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Ha = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    variant: h = "indeterminate",
    ...g
  } = r, b = {
    ...r,
    color: s,
    disableShrink: a,
    size: c,
    thickness: p,
    value: m,
    variant: h,
    enableTrackSlot: l
  }, f = om(b), v = {}, w = {}, R = {};
  if (h === "determinate") {
    const E = 2 * Math.PI * ((rt - p) / 2);
    v.strokeDasharray = E.toFixed(3), R["aria-valuenow"] = Math.round(m), v.strokeDashoffset = `${((100 - m) / 100 * E).toFixed(3)}px`, w.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ O.jsx(rm, {
    className: ne(f.root, i),
    style: {
      width: c,
      height: c,
      ...w,
      ...u
    },
    ownerState: b,
    ref: o,
    role: "progressbar",
    ...R,
    ...g,
    children: /* @__PURE__ */ O.jsxs(im, {
      className: f.svg,
      ownerState: b,
      viewBox: `${rt / 2} ${rt / 2} ${rt} ${rt}`,
      children: [l ? /* @__PURE__ */ O.jsx(am, {
        className: f.track,
        ownerState: b,
        cx: rt,
        cy: rt,
        r: (rt - p) / 2,
        fill: "none",
        strokeWidth: p,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ O.jsx(sm, {
        className: f.circle,
        style: v,
        ownerState: b,
        cx: rt,
        cy: rt,
        r: (rt - p) / 2,
        fill: "none",
        strokeWidth: p
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Ha.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Tt(n.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */
  enableTrackSlot: n.bool,
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: n.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: n.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: n.oneOf(["determinate", "indeterminate"])
});
const qa = Ha;
function lm(e) {
  return ce("MuiIconButton", e);
}
const cm = le("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), cs = cm, um = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: i,
    size: s,
    loading: a
  } = e, l = {
    root: ["root", a && "loading", o && "disabled", r !== "default" && `color${X(r)}`, i && `edge${X(i)}`, `size${X(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return ue(l, lm, t);
}, pm = K(oi, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.loading && t.loading, o.color !== "default" && t[`color${X(o.color)}`], o.edge && t[`edge${X(o.edge)}`], t[`size${X(o.size)}`]];
  }
})(pe(({
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
})), pe(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
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
  [`&.${cs.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${cs.loading}`]: {
    color: "transparent"
  }
}))), dm = K("span", {
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
})), Ya = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    loading: h = null,
    loadingIndicator: g,
    ...b
  } = r, f = Gn(m), v = g ?? /* @__PURE__ */ O.jsx(qa, {
    "aria-labelledby": f,
    color: "inherit",
    size: 16
  }), w = {
    ...r,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    loading: h,
    loadingIndicator: v,
    size: p
  }, R = um(w);
  return /* @__PURE__ */ O.jsxs(pm, {
    id: h ? f : m,
    className: ne(R.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c || h,
    ref: o,
    ...b,
    ownerState: w,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ O.jsx("span", {
      className: R.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ O.jsx(dm, {
        className: R.loadingIndicator,
        ownerState: w,
        children: h && v
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (Ya.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Tt(n.node, (e) => x.Children.toArray(e.children).some((o) => /* @__PURE__ */ x.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Vn = Ya;
function fm(e) {
  return ce("MuiTypography", e);
}
le("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const mm = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, hm = Dd(), gm = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${X(t)}`, o && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return ue(l, fm, a);
}, ym = K("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${X(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
  }
})(pe(({
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
    }, ...Object.entries(e.typography).filter(([o, r]) => o !== "inherit" && r && typeof r == "object").map(([o, r]) => ({
      props: {
        variant: o
      },
      style: r
    })), ...Object.entries(e.palette).filter(ct()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, o]) => typeof o == "string").map(([o]) => ({
      props: {
        color: `text${X(o)}`
      },
      style: {
        color: (e.vars || e).palette.text[o]
      }
    })), {
      props: ({
        ownerState: o
      }) => o.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), us = {
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
}, Ga = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const {
    color: r,
    ...i
  } = de({
    props: t,
    name: "MuiTypography"
  }), s = !mm[r], a = hm({
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
    paragraph: h = !1,
    variant: g = "body1",
    variantMapping: b = us,
    ...f
  } = a, v = {
    ...a,
    align: l,
    color: r,
    className: c,
    component: u,
    gutterBottom: p,
    noWrap: m,
    paragraph: h,
    variant: g,
    variantMapping: b
  }, w = u || (h ? "p" : b[g] || us[g]) || "span", R = gm(v);
  return /* @__PURE__ */ O.jsx(ym, {
    as: w,
    ref: o,
    className: ne(R.root, c),
    ...f,
    ownerState: v,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ga.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: n.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: n.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: n.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: n.oneOfType([n.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), n.string]),
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
  variantMapping: n.object
});
const kt = Ga, Ka = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ka.displayName = "FormControlContext");
const Go = Ka;
function Kt() {
  return x.useContext(Go);
}
function bm(e) {
  return ce("MuiInputAdornment", e);
}
const vm = le("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), ps = vm;
var ds;
const xm = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, t[`position${X(o.position)}`], o.disablePointerEvents === !0 && t.disablePointerEvents, t[o.variant]];
}, Tm = (e) => {
  const {
    classes: t,
    disablePointerEvents: o,
    hiddenLabel: r,
    position: i,
    size: s,
    variant: a
  } = e, l = {
    root: ["root", o && "disablePointerEvents", i && `position${X(i)}`, a, r && "hiddenLabel", s && `size${X(s)}`]
  };
  return ue(l, bm, t);
}, Em = K("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: xm
})(pe(({
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
      [`&.${ps.positionStart}&:not(.${ps.hiddenLabel})`]: {
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
}))), Xa = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
  } = r, h = Kt() || {};
  let g = p;
  p && h.variant && process.env.NODE_ENV !== "production" && p === h.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), h && !g && (g = h.variant);
  const b = {
    ...r,
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: l,
    position: u,
    variant: g
  }, f = Tm(b);
  return /* @__PURE__ */ O.jsx(Go.Provider, {
    value: null,
    children: /* @__PURE__ */ O.jsx(Em, {
      as: a,
      ownerState: b,
      className: ne(f.root, s),
      ref: o,
      ...m,
      children: typeof i == "string" && !c ? /* @__PURE__ */ O.jsx(kt, {
        color: "textSecondary",
        children: i
      }) : /* @__PURE__ */ O.jsxs(x.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          ds || (ds = /* @__PURE__ */ O.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, i]
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Xa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: n.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: n.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: n.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const Om = Xa;
function vt(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
function Qa(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : Ia(o, r), {
    props: l,
    internalRef: c
  } = Na({
    ...s,
    externalSlotProps: a
  }), u = Me(c, a == null ? void 0 : a.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return $a(t, {
    ...l,
    ref: u
  }, r);
}
const Ja = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (Ja.displayName = "ListContext");
const _r = Ja;
function wm(e) {
  return ce("MuiList", e);
}
le("MuiList", ["root", "padding", "dense", "subheader"]);
const Sm = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return ue({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, wm, t);
}, Cm = K("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disablePadding && t.padding, o.dense && t.dense, o.subheader && t.subheader];
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
}), Za = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
  } = r, m = x.useMemo(() => ({
    dense: l
  }), [l]), h = {
    ...r,
    component: a,
    dense: l,
    disablePadding: c
  }, g = Sm(h);
  return /* @__PURE__ */ O.jsx(_r.Provider, {
    value: m,
    children: /* @__PURE__ */ O.jsxs(Cm, {
      as: a,
      className: ne(g.root, s),
      ref: o,
      ownerState: h,
      ...p,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (Za.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Rm = Za;
function el(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function vr(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function fs(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function tl(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.startsWith(t.keys.join(""));
}
function On(e, t, o, r, i, s) {
  let a = !1, l = i(e, t, t ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !tl(l, s) || c)
      l = i(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const nl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    ...h
  } = t, g = x.useRef(null), b = x.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  at(() => {
    i && g.current.focus();
  }, [i]), x.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (E, {
      direction: y
    }) => {
      const T = !g.current.style.width;
      if (E.clientHeight < g.current.clientHeight && T) {
        const C = `${el(lt(E))}px`;
        g.current.style[y === "rtl" ? "paddingLeft" : "paddingRight"] = C, g.current.style.width = `calc(100% + ${C})`;
      }
      return g.current;
    }
  }), []);
  const f = (E) => {
    const y = g.current, T = E.key;
    if (E.ctrlKey || E.metaKey || E.altKey) {
      p && p(E);
      return;
    }
    const N = Ue(y).activeElement;
    if (T === "ArrowDown")
      E.preventDefault(), On(y, N, u, c, vr);
    else if (T === "ArrowUp")
      E.preventDefault(), On(y, N, u, c, fs);
    else if (T === "Home")
      E.preventDefault(), On(y, null, u, c, vr);
    else if (T === "End")
      E.preventDefault(), On(y, null, u, c, fs);
    else if (T.length === 1) {
      const D = b.current, A = T.toLowerCase(), z = performance.now();
      D.keys.length > 0 && (z - D.lastTime > 500 ? (D.keys = [], D.repeating = !0, D.previousKeyMatched = !0) : D.repeating && A !== D.keys[0] && (D.repeating = !1)), D.lastTime = z, D.keys.push(A);
      const F = N && !D.repeating && tl(N, D);
      D.previousKeyMatched && (F || On(y, N, !1, c, vr, D)) ? E.preventDefault() : D.previousKeyMatched = !1;
    }
    p && p(E);
  }, v = Me(g, o);
  let w = -1;
  x.Children.forEach(a, (E, y) => {
    if (!/* @__PURE__ */ x.isValidElement(E)) {
      w === y && (w += 1, w >= a.length && (w = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && qt.isFragment(E) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), E.props.disabled || (m === "selectedMenu" && E.props.selected || w === -1) && (w = y), w === y && (E.props.disabled || E.props.muiSkipListHighlight || E.type.muiSkipListHighlight) && (w += 1, w >= a.length && (w = -1));
  });
  const R = x.Children.map(a, (E, y) => {
    if (y === w) {
      const T = {};
      return s && (T.autoFocus = !0), E.props.tabIndex === void 0 && m === "selectedMenu" && (T.tabIndex = 0), /* @__PURE__ */ x.cloneElement(E, T);
    }
    return E;
  });
  return /* @__PURE__ */ O.jsx(Rm, {
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: f,
    tabIndex: i ? 0 : -1,
    ...h,
    children: R
  });
});
process.env.NODE_ENV !== "production" && (nl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: n.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
const Pm = nl;
function $m(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ol(e, t, o, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !$m(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const rl = Tt(n.element, ol);
rl.isRequired = Tt(n.element.isRequired, ol);
const gn = rl;
function Xt(e) {
  var t;
  return parseInt(x.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const ri = (e) => e.scrollTop;
function cn(e, t) {
  const {
    timeout: o,
    easing: r,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof o == "number" ? o : o[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: i.transitionDelay
  };
}
function Lr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Im = {
  entering: {
    opacity: 1,
    transform: Lr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, xr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), wo = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    onExited: h,
    onExiting: g,
    style: b,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = ei,
    ...w
  } = t, R = sn(), E = x.useRef(), y = hn(), T = x.useRef(null), C = Me(T, Xt(s), o), N = (j) => (k) => {
    if (j) {
      const L = T.current;
      k === void 0 ? j(L) : j(L, k);
    }
  }, D = N(p), A = N((j, k) => {
    ri(j);
    const {
      duration: L,
      delay: M,
      easing: _
    } = cn({
      style: b,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let I;
    f === "auto" ? (I = y.transitions.getAutoHeightDuration(j.clientHeight), E.current = I) : I = L, j.style.transition = [y.transitions.create("opacity", {
      duration: I,
      delay: M
    }), y.transitions.create("transform", {
      duration: xr ? I : I * 0.666,
      delay: M,
      easing: _
    })].join(","), c && c(j, k);
  }), z = N(u), F = N(g), d = N((j) => {
    const {
      duration: k,
      delay: L,
      easing: M
    } = cn({
      style: b,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let _;
    f === "auto" ? (_ = y.transitions.getAutoHeightDuration(j.clientHeight), E.current = _) : _ = k, j.style.transition = [y.transitions.create("opacity", {
      duration: _,
      delay: L
    }), y.transitions.create("transform", {
      duration: xr ? _ : _ * 0.666,
      delay: xr ? L : L || _ * 0.333,
      easing: M
    })].join(","), j.style.opacity = 0, j.style.transform = Lr(0.75), m && m(j);
  }), $ = N(h), P = (j) => {
    f === "auto" && R.start(E.current || 0, j), r && r(T.current, j);
  };
  return /* @__PURE__ */ O.jsx(v, {
    appear: i,
    in: l,
    nodeRef: T,
    onEnter: A,
    onEntered: z,
    onEntering: D,
    onExit: d,
    onExited: $,
    onExiting: F,
    addEndListener: P,
    timeout: f === "auto" ? null : f,
    ...w,
    children: (j, {
      ownerState: k,
      ...L
    }) => /* @__PURE__ */ x.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Lr(0.75),
        visibility: j === "exited" && !l ? "hidden" : void 0,
        ...Im[j],
        ...b,
        ...s.props.style
      },
      ref: C,
      ...L
    })
  });
});
process.env.NODE_ENV !== "production" && (wo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: gn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
wo && (wo.muiSupportAuto = !0);
const il = wo;
function km(e) {
  const t = Ue(e);
  return t.body === e ? lt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Mn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ms(e) {
  return parseInt(lt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Nm(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function hs(e, t, o, r, i) {
  const s = [t, o, ...r];
  [].forEach.call(e.children, (a) => {
    const l = !s.includes(a), c = !Nm(a);
    l && c && Mn(a, i);
  });
}
function Tr(e, t) {
  let o = -1;
  return e.some((r, i) => t(r) ? (o = i, !0) : !1), o;
}
function jm(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (km(r)) {
      const a = el(lt(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${ms(r) + a}px`;
      const l = Ue(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${ms(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = Ue(r).body;
    else {
      const a = r.parentElement, l = lt(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    o.push({
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
    o.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function Am(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class Mm {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Mn(t.modalRef, !1);
    const i = Am(o);
    hs(o, t.mount, t.modalRef, i, !0);
    const s = Tr(this.containers, (a) => a.container === o);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, o) {
    const r = Tr(this.containers, (s) => s.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = jm(i, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Tr(this.containers, (a) => a.modals.includes(t)), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Mn(t.modalRef, o), hs(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Mn(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Dm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Bm(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function _m(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function Lm(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || _m(e));
}
function Fm(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(Dm)).forEach((r, i) => {
    const s = Bm(r);
    s === -1 || !Lm(r) || (s === 0 ? t.push(r) : o.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function zm() {
  return !0;
}
function So(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = Fm,
    isEnabled: a = zm,
    open: l
  } = e, c = x.useRef(!1), u = x.useRef(null), p = x.useRef(null), m = x.useRef(null), h = x.useRef(null), g = x.useRef(!1), b = x.useRef(null), f = Me(Xt(t), b), v = x.useRef(null);
  x.useEffect(() => {
    !l || !b.current || (g.current = !o);
  }, [o, l]), x.useEffect(() => {
    if (!l || !b.current)
      return;
    const E = Ue(b.current);
    return b.current.contains(E.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), g.current && b.current.focus()), () => {
      i || (m.current && m.current.focus && (c.current = !0, m.current.focus()), m.current = null);
    };
  }, [l]), x.useEffect(() => {
    if (!l || !b.current)
      return;
    const E = Ue(b.current), y = (N) => {
      v.current = N, !(r || !a() || N.key !== "Tab") && E.activeElement === b.current && N.shiftKey && (c.current = !0, p.current && p.current.focus());
    }, T = () => {
      var A, z;
      const N = b.current;
      if (N === null)
        return;
      if (!E.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (N.contains(E.activeElement) || r && E.activeElement !== u.current && E.activeElement !== p.current)
        return;
      if (E.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let D = [];
      if ((E.activeElement === u.current || E.activeElement === p.current) && (D = s(b.current)), D.length > 0) {
        const F = !!((A = v.current) != null && A.shiftKey && ((z = v.current) == null ? void 0 : z.key) === "Tab"), d = D[0], $ = D[D.length - 1];
        typeof d != "string" && typeof $ != "string" && (F ? $.focus() : d.focus());
      } else
        N.focus();
    };
    E.addEventListener("focusin", T), E.addEventListener("keydown", y, !0);
    const C = setInterval(() => {
      E.activeElement && E.activeElement.tagName === "BODY" && T();
    }, 50);
    return () => {
      clearInterval(C), E.removeEventListener("focusin", T), E.removeEventListener("keydown", y, !0);
    };
  }, [o, r, i, a, l, s]);
  const w = (E) => {
    m.current === null && (m.current = E.relatedTarget), g.current = !0, h.current = E.target;
    const y = t.props.onFocus;
    y && y(E);
  }, R = (E) => {
    m.current === null && (m.current = E.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ O.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ O.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: R,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ x.cloneElement(t, {
      ref: f,
      onFocus: w
    }), /* @__PURE__ */ O.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: R,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (So.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: gn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
process.env.NODE_ENV !== "production" && (So["propTypes"] = fa(So.propTypes));
function Vm(e) {
  return typeof e == "function" ? e() : e;
}
const Co = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = x.useState(null), c = Me(/* @__PURE__ */ x.isValidElement(r) ? Xt(r) : null, o);
  if (at(() => {
    s || l(Vm(i) || document.body);
  }, [i, s]), at(() => {
    if (a && !s)
      return ns(o, a), () => {
        ns(o, null);
      };
  }, [o, a, s]), s) {
    if (/* @__PURE__ */ x.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ x.cloneElement(r, u);
    }
    return r;
  }
  return a && /* @__PURE__ */ xc.createPortal(r, a);
});
process.env.NODE_ENV !== "production" && (Co.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
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
  container: n.oneOfType([vt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (Co["propTypes"] = fa(Co.propTypes));
const sl = Co, Wm = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, al = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = hn(), i = {
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
    onEntering: h,
    onExit: g,
    onExited: b,
    onExiting: f,
    style: v,
    timeout: w = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = ei,
    ...E
  } = t, y = x.useRef(null), T = Me(y, Xt(l), o), C = (P) => (j) => {
    if (P) {
      const k = y.current;
      j === void 0 ? P(k) : P(k, j);
    }
  }, N = C(h), D = C((P, j) => {
    ri(P);
    const k = cn({
      style: v,
      timeout: w,
      easing: c
    }, {
      mode: "enter"
    });
    P.style.webkitTransition = r.transitions.create("opacity", k), P.style.transition = r.transitions.create("opacity", k), p && p(P, j);
  }), A = C(m), z = C(f), F = C((P) => {
    const j = cn({
      style: v,
      timeout: w,
      easing: c
    }, {
      mode: "exit"
    });
    P.style.webkitTransition = r.transitions.create("opacity", j), P.style.transition = r.transitions.create("opacity", j), g && g(P);
  }), d = C(b), $ = (P) => {
    s && s(y.current, P);
  };
  return /* @__PURE__ */ O.jsx(R, {
    appear: a,
    in: u,
    nodeRef: y,
    onEnter: D,
    onEntered: A,
    onEntering: N,
    onExit: F,
    onExited: d,
    onExiting: z,
    addEndListener: $,
    timeout: w,
    ...E,
    children: (P, {
      ownerState: j,
      ...k
    }) => /* @__PURE__ */ x.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: P === "exited" && !u ? "hidden" : void 0,
        ...Wm[P],
        ...v,
        ...l.props.style
      },
      ref: T,
      ...k
    })
  });
});
process.env.NODE_ENV !== "production" && (al.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: gn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
const Um = al;
function Hm(e) {
  return ce("MuiBackdrop", e);
}
le("MuiBackdrop", ["root", "invisible"]);
const qm = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return ue({
    root: ["root", o && "invisible"]
  }, Hm, t);
}, Ym = K("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.invisible && t.invisible];
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
}), ll = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    slots: h = {},
    TransitionComponent: g,
    transitionDuration: b,
    ...f
  } = r, v = {
    ...r,
    component: a,
    invisible: l
  }, w = qm(v), R = {
    transition: g,
    root: u.Root,
    ...h
  }, E = {
    ...p,
    ...m
  }, y = {
    component: a,
    slots: R,
    slotProps: E
  }, [T, C] = ve("root", {
    elementType: Ym,
    externalForwardedProps: y,
    className: ne(w.root, s),
    ownerState: v
  }), [N, D] = ve("transition", {
    elementType: Um,
    externalForwardedProps: y,
    ownerState: v
  });
  return /* @__PURE__ */ O.jsx(N, {
    in: c,
    timeout: b,
    ...f,
    ...D,
    children: /* @__PURE__ */ O.jsx(T, {
      "aria-hidden": !0,
      ...C,
      classes: w,
      ref: o,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (ll.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
const Gm = ll;
function Km(e) {
  return typeof e == "function" ? e() : e;
}
function Xm(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const gs = () => {
}, io = new Mm();
function Qm(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: l,
    onClose: c,
    open: u,
    rootRef: p
  } = e, m = x.useRef({}), h = x.useRef(null), g = x.useRef(null), b = Me(g, p), [f, v] = x.useState(!u), w = Xm(l);
  let R = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (R = !1);
  const E = () => Ue(h.current), y = () => (m.current.modalRef = g.current, m.current.mount = h.current, m.current), T = () => {
    io.mount(y(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, C = St(() => {
    const j = Km(t) || E().body;
    io.add(y(), j), g.current && T();
  }), N = () => io.isTopModal(y()), D = St((j) => {
    h.current = j, j && (u && N() ? T() : g.current && Mn(g.current, R));
  }), A = x.useCallback(() => {
    io.remove(y(), R);
  }, [R]);
  x.useEffect(() => () => {
    A();
  }, [A]), x.useEffect(() => {
    u ? C() : (!w || !i) && A();
  }, [u, A, w, i, C]);
  const z = (j) => (k) => {
    var L;
    (L = j.onKeyDown) == null || L.call(j, k), !(k.key !== "Escape" || k.which === 229 || // Wait until IME is settled.
    !N()) && (o || (k.stopPropagation(), c && c(k, "escapeKeyDown")));
  }, F = (j) => (k) => {
    var L;
    (L = j.onClick) == null || L.call(j, k), k.target === k.currentTarget && c && c(k, "backdropClick");
  };
  return {
    getRootProps: (j = {}) => {
      const k = ka(e);
      delete k.onTransitionEnter, delete k.onTransitionExited;
      const L = {
        ...k,
        ...j
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...L,
        onKeyDown: z(L),
        ref: b
      };
    },
    getBackdropProps: (j = {}) => {
      const k = j;
      return {
        "aria-hidden": !0,
        ...k,
        onClick: F(k),
        open: u
      };
    },
    getTransitionProps: () => {
      const j = () => {
        v(!1), s && s();
      }, k = () => {
        v(!0), a && a(), i && A();
      };
      return {
        onEnter: Oi(j, (l == null ? void 0 : l.props.onEnter) ?? gs),
        onExited: Oi(k, (l == null ? void 0 : l.props.onExited) ?? gs)
      };
    },
    rootRef: b,
    portalRef: D,
    isTopModal: N,
    exited: f,
    hasTransition: w
  };
}
function Jm(e) {
  return ce("MuiModal", e);
}
le("MuiModal", ["root", "hidden", "backdrop"]);
const Zm = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return ue({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, Jm, r);
}, eh = K("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(pe(({
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
}))), th = K(Gm, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), cl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = th,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: p,
    component: m,
    components: h = {},
    componentsProps: g = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: f = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: w = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: E = !1,
    hideBackdrop: y = !1,
    keepMounted: T = !1,
    onClose: C,
    onTransitionEnter: N,
    onTransitionExited: D,
    open: A,
    slotProps: z = {},
    slots: F = {},
    // eslint-disable-next-line react/prop-types
    theme: d,
    ...$
  } = r, P = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: b,
    disableEnforceFocus: f,
    disableEscapeKeyDown: v,
    disablePortal: w,
    disableRestoreFocus: R,
    disableScrollLock: E,
    hideBackdrop: y,
    keepMounted: T
  }, {
    getRootProps: j,
    getBackdropProps: k,
    getTransitionProps: L,
    portalRef: M,
    isTopModal: _,
    exited: I,
    hasTransition: S
  } = Qm({
    ...P,
    rootRef: o
  }), W = {
    ...P,
    exited: I
  }, U = Zm(W), H = {};
  if (u.props.tabIndex === void 0 && (H.tabIndex = "-1"), S) {
    const {
      onEnter: q,
      onExited: ee
    } = L();
    H.onEnter = q, H.onExited = ee;
  }
  const G = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...F
    },
    slotProps: {
      ...g,
      ...z
    }
  }, [Z, Y] = ve("root", {
    ref: o,
    elementType: eh,
    externalForwardedProps: {
      ...G,
      ...$,
      component: m
    },
    getSlotProps: j,
    ownerState: W,
    className: ne(l, U == null ? void 0 : U.root, !W.open && W.exited && (U == null ? void 0 : U.hidden))
  }), [Q, J] = ve("backdrop", {
    ref: s == null ? void 0 : s.ref,
    elementType: i,
    externalForwardedProps: G,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (q) => k({
      ...q,
      onClick: (ee) => {
        q != null && q.onClick && q.onClick(ee);
      }
    }),
    className: ne(s == null ? void 0 : s.className, U == null ? void 0 : U.backdrop),
    ownerState: W
  });
  return !T && !A && (!S || I) ? null : /* @__PURE__ */ O.jsx(sl, {
    ref: M,
    container: p,
    disablePortal: w,
    children: /* @__PURE__ */ O.jsxs(Z, {
      ...Y,
      children: [!y && i ? /* @__PURE__ */ O.jsx(Q, {
        ...J
      }) : null, /* @__PURE__ */ O.jsx(So, {
        disableEnforceFocus: f,
        disableAutoFocus: b,
        disableRestoreFocus: R,
        isEnabled: _,
        open: A,
        children: /* @__PURE__ */ x.cloneElement(u, H)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (cl.propTypes = {
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
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: gn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
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
  container: n.oneOfType([vt, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const ul = cl;
function nh(e) {
  return ce("MuiPopover", e);
}
le("MuiPopover", ["root", "paper"]);
function ys(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function bs(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function vs(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function jn(e) {
  return typeof e == "function" ? e() : e;
}
const oh = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"]
  }, nh, t);
}, rh = K(ul, {
  name: "MuiPopover",
  slot: "Root"
})({}), pl = K(qo, {
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
}), dl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    elevation: h = 8,
    marginThreshold: g = 16,
    open: b,
    PaperProps: f = {},
    // TODO: remove in v7
    slots: v = {},
    slotProps: w = {},
    transformOrigin: R = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: E,
    // TODO: remove in v7
    transitionDuration: y = "auto",
    TransitionProps: T = {},
    // TODO: remove in v7
    disableScrollLock: C = !1,
    ...N
  } = r, D = x.useRef(), A = {
    ...r,
    anchorOrigin: a,
    anchorReference: c,
    elevation: h,
    marginThreshold: g,
    transformOrigin: R,
    TransitionComponent: E,
    transitionDuration: y,
    TransitionProps: T
  }, z = oh(A), F = x.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const q = jn(s), ee = q && q.nodeType === 1 ? q : Ue(D.current).body, V = ee.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ie = ee.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ie.top === 0 && ie.left === 0 && ie.right === 0 && ie.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: V.top + ys(V, a.vertical),
      left: V.left + bs(V, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), d = x.useCallback((q) => ({
    vertical: ys(q, R.vertical),
    horizontal: bs(q, R.horizontal)
  }), [R.horizontal, R.vertical]), $ = x.useCallback((q) => {
    const ee = {
      width: q.offsetWidth,
      height: q.offsetHeight
    }, V = d(ee);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: vs(V)
      };
    const ie = F();
    let re = ie.top - V.vertical, fe = ie.left - V.horizontal;
    const ke = re + ee.height, Ce = fe + ee.width, we = lt(jn(s)), je = we.innerHeight - g, Oe = we.innerWidth - g;
    if (g !== null && re < g) {
      const Ee = re - g;
      re -= Ee, V.vertical += Ee;
    } else if (g !== null && ke > je) {
      const Ee = ke - je;
      re -= Ee, V.vertical += Ee;
    }
    if (process.env.NODE_ENV !== "production" && ee.height > je && ee.height && je && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ee.height - je}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && fe < g) {
      const Ee = fe - g;
      fe -= Ee, V.horizontal += Ee;
    } else if (Ce > Oe) {
      const Ee = Ce - Oe;
      fe -= Ee, V.horizontal += Ee;
    }
    return {
      top: `${Math.round(re)}px`,
      left: `${Math.round(fe)}px`,
      transformOrigin: vs(V)
    };
  }, [s, c, F, d, g]), [P, j] = x.useState(b), k = x.useCallback(() => {
    const q = D.current;
    if (!q)
      return;
    const ee = $(q);
    ee.top !== null && q.style.setProperty("top", ee.top), ee.left !== null && (q.style.left = ee.left), q.style.transformOrigin = ee.transformOrigin, j(!0);
  }, [$]);
  x.useEffect(() => (C && window.addEventListener("scroll", k), () => window.removeEventListener("scroll", k)), [s, C, k]);
  const L = () => {
    k();
  }, M = () => {
    j(!1);
  };
  x.useEffect(() => {
    b && k();
  }), x.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      k();
    }
  } : null, [b, k]), x.useEffect(() => {
    if (!b)
      return;
    const q = Qr(() => {
      k();
    }), ee = lt(jn(s));
    return ee.addEventListener("resize", q), () => {
      q.clear(), ee.removeEventListener("resize", q);
    };
  }, [s, b, k]);
  let _ = y;
  const I = {
    slots: {
      transition: E,
      ...v
    },
    slotProps: {
      transition: T,
      paper: f,
      ...w
    }
  }, [S, W] = ve("transition", {
    elementType: il,
    externalForwardedProps: I,
    ownerState: A,
    getSlotProps: (q) => ({
      ...q,
      onEntering: (ee, V) => {
        var ie;
        (ie = q.onEntering) == null || ie.call(q, ee, V), L();
      },
      onExited: (ee) => {
        var V;
        (V = q.onExited) == null || V.call(q, ee), M();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  y === "auto" && !S.muiSupportAuto && (_ = void 0);
  const U = m || (s ? Ue(jn(s)).body : void 0), [H, {
    slots: G,
    slotProps: Z,
    ...Y
  }] = ve("root", {
    ref: o,
    elementType: rh,
    externalForwardedProps: {
      ...I,
      ...N
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: v.backdrop
      },
      slotProps: {
        backdrop: Oa(typeof w.backdrop == "function" ? w.backdrop(A) : w.backdrop, {
          invisible: !0
        })
      },
      container: U,
      open: b
    },
    ownerState: A,
    className: ne(z.root, p)
  }), [Q, J] = ve("paper", {
    ref: D,
    className: z.paper,
    elementType: pl,
    externalForwardedProps: I,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: h,
      style: P ? void 0 : {
        opacity: 0
      }
    },
    ownerState: A
  });
  return /* @__PURE__ */ O.jsx(H, {
    ...Y,
    ...!vo(H) && {
      slots: G,
      slotProps: Z,
      disableScrollLock: C
    },
    children: /* @__PURE__ */ O.jsx(S, {
      ...W,
      timeout: _,
      children: /* @__PURE__ */ O.jsx(Q, {
        ...J,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (dl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: ut,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Tt(n.oneOfType([vt, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = jn(e.anchorEl);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
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
  anchorOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: n.shape({
    left: n.number.isRequired,
    top: n.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: n.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: n.object,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([vt, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Jr,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: n.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overridden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: n.shape({
    component: Zr
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
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
  transformOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object
});
const ih = dl;
function sh(e) {
  return ce("MuiMenu", e);
}
le("MuiMenu", ["root", "paper", "list"]);
const ah = {
  vertical: "top",
  horizontal: "right"
}, lh = {
  vertical: "top",
  horizontal: "left"
}, ch = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, sh, t);
}, uh = K(ih, {
  shouldForwardProp: (e) => qe(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), ph = K(pl, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), dh = K(Pm, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), fl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    PopoverClasses: h,
    transitionDuration: g = "auto",
    TransitionProps: {
      onEntering: b,
      ...f
    } = {},
    variant: v = "selectedMenu",
    slots: w = {},
    slotProps: R = {},
    ...E
  } = r, y = Ho(), T = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: b,
    PaperProps: m,
    transitionDuration: g,
    TransitionProps: f,
    variant: v
  }, C = ch(T), N = i && !l && p, D = x.useRef(null), A = (_, I) => {
    D.current && D.current.adjustStyleForScrollbar(_, {
      direction: y ? "rtl" : "ltr"
    }), b && b(_, I);
  }, z = (_) => {
    _.key === "Tab" && (_.preventDefault(), u && u(_, "tabKeyDown"));
  };
  let F = -1;
  x.Children.map(s, (_, I) => {
    /* @__PURE__ */ x.isValidElement(_) && (process.env.NODE_ENV !== "production" && qt.isFragment(_) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), _.props.disabled || (v === "selectedMenu" && _.props.selected || F === -1) && (F = I));
  });
  const d = {
    slots: w,
    slotProps: {
      list: c,
      transition: f,
      paper: m,
      ...R
    }
  }, $ = Qa({
    elementType: w.root,
    externalSlotProps: R.root,
    ownerState: T,
    className: [C.root, a]
  }), [P, j] = ve("paper", {
    className: C.paper,
    elementType: ph,
    externalForwardedProps: d,
    shouldForwardComponentProp: !0,
    ownerState: T
  }), [k, L] = ve("list", {
    className: ne(C.list, c.className),
    elementType: dh,
    shouldForwardComponentProp: !0,
    externalForwardedProps: d,
    getSlotProps: (_) => ({
      ..._,
      onKeyDown: (I) => {
        var S;
        z(I), (S = _.onKeyDown) == null || S.call(_, I);
      }
    }),
    ownerState: T
  }), M = typeof d.slotProps.transition == "function" ? d.slotProps.transition(T) : d.slotProps.transition;
  return /* @__PURE__ */ O.jsx(uh, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: y ? "right" : "left"
    },
    transformOrigin: y ? ah : lh,
    slots: {
      root: w.root,
      paper: P,
      backdrop: w.backdrop,
      ...w.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: w.transition
      }
    },
    slotProps: {
      root: $,
      paper: j,
      backdrop: typeof R.backdrop == "function" ? R.backdrop(T) : R.backdrop,
      transition: {
        ...M,
        onEntering: (..._) => {
          var I;
          A(..._), (I = M == null ? void 0 : M.onEntering) == null || I.call(M, ..._);
        }
      }
    },
    open: p,
    ref: o,
    transitionDuration: g,
    ownerState: T,
    ...E,
    classes: h,
    children: /* @__PURE__ */ O.jsx(k, {
      actions: D,
      autoFocus: i && (F === -1 || l),
      autoFocusItem: N,
      variant: v,
      ...L,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (fl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([vt, n.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: n.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: n.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: n.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: n.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    list: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    list: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
const ml = fl, fh = le("MuiListItemIcon", ["root", "alignItemsFlexStart"]), xs = fh, mh = le("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Ts = mh;
function hh(e) {
  return ce("MuiMenuItem", e);
}
const gh = le("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), wn = gh, yh = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.divider && t.divider, !o.disableGutters && t.gutters];
}, bh = (e) => {
  const {
    disabled: t,
    dense: o,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = ue({
    root: ["root", o && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, hh, a);
  return {
    ...a,
    ...c
  };
}, vh = K(oi, {
  shouldForwardProp: (e) => qe(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: yh
})(pe(({
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
  [`&.${wn.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${wn.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${wn.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${wn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${wn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${ss.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${ss.inset}`]: {
    marginLeft: 52
  },
  [`& .${Ts.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Ts.inset}`]: {
    paddingLeft: 36
  },
  [`& .${xs.root}`]: {
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
      [`& .${xs.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), hl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    className: h,
    ...g
  } = r, b = x.useContext(_r), f = x.useMemo(() => ({
    dense: a || b.dense || !1,
    disableGutters: c
  }), [b.dense, a, c]), v = x.useRef(null);
  at(() => {
    i && (v.current ? v.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const w = {
    ...r,
    dense: f.dense,
    divider: l,
    disableGutters: c
  }, R = bh(r), E = Me(v, o);
  let y;
  return r.disabled || (y = m !== void 0 ? m : -1), /* @__PURE__ */ O.jsx(_r.Provider, {
    value: f,
    children: /* @__PURE__ */ O.jsx(vh, {
      ref: E,
      role: p,
      tabIndex: y,
      component: s,
      focusVisibleClassName: ne(R.focusVisible, u),
      className: ne(R.root, h),
      ...g,
      ownerState: w,
      classes: R
    })
  });
});
process.env.NODE_ENV !== "production" && (hl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: n.bool,
  /**
   * @ignore
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  role: n.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number
});
const Es = hl, gl = zp({
  createStyledComponent: K("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => de({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (gl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: n.oneOfType([n.oneOf(["column-reverse", "column", "row-reverse", "row"]), n.arrayOf(n.oneOf(["column-reverse", "column", "row-reverse", "row"])), n.object]),
  /**
   * Add an element between each child.
   */
  divider: n.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: n.oneOfType([n.arrayOf(n.oneOfType([n.number, n.string])), n.number, n.object, n.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: n.bool
});
const it = gl;
function so(e) {
  return parseInt(e, 10) || 0;
}
const xh = {
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
function Th(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Os(e) {
  return Th(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const yl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = x.useRef(l != null), p = x.useRef(null), m = Me(o, p), h = x.useRef(null), g = x.useRef(null), b = x.useCallback(() => {
    const E = p.current, y = g.current;
    if (!E || !y)
      return;
    const C = lt(E).getComputedStyle(E);
    if (C.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    y.style.width = C.width, y.value = E.value || t.placeholder || "x", y.value.slice(-1) === `
` && (y.value += " ");
    const N = C.boxSizing, D = so(C.paddingBottom) + so(C.paddingTop), A = so(C.borderBottomWidth) + so(C.borderTopWidth), z = y.scrollHeight;
    y.value = "x";
    const F = y.scrollHeight;
    let d = z;
    s && (d = Math.max(Number(s) * F, d)), i && (d = Math.min(Number(i) * F, d)), d = Math.max(d, F);
    const $ = d + (N === "border-box" ? D + A : 0), P = Math.abs(d - z) <= 1;
    return {
      outerHeightStyle: $,
      overflowing: P
    };
  }, [i, s, t.placeholder]), f = St(() => {
    const E = p.current, y = b();
    if (!E || !y || Os(y))
      return !1;
    const T = y.outerHeightStyle;
    return h.current != null && h.current !== T;
  }), v = x.useCallback(() => {
    const E = p.current, y = b();
    if (!E || !y || Os(y))
      return;
    const T = y.outerHeightStyle;
    h.current !== T && (h.current = T, E.style.height = `${T}px`), E.style.overflow = y.overflowing ? "hidden" : "";
  }, [b]), w = x.useRef(-1);
  at(() => {
    const E = Qr(v), y = p == null ? void 0 : p.current;
    if (!y)
      return;
    const T = lt(y);
    T.addEventListener("resize", E);
    let C;
    return typeof ResizeObserver < "u" && (C = new ResizeObserver(() => {
      f() && (C.unobserve(y), cancelAnimationFrame(w.current), v(), w.current = requestAnimationFrame(() => {
        C.observe(y);
      }));
    }), C.observe(y)), () => {
      E.clear(), cancelAnimationFrame(w.current), T.removeEventListener("resize", E), C && C.disconnect();
    };
  }, [b, v, f]), at(() => {
    v();
  });
  const R = (E) => {
    u || v();
    const y = E.target, T = y.value.length, C = y.value.endsWith(`
`), N = y.selectionStart === T;
    C && N && y.setSelectionRange(T, T), r && r(E);
  };
  return /* @__PURE__ */ O.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ O.jsx("textarea", {
      value: l,
      onChange: R,
      ref: m,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ O.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: g,
      tabIndex: -1,
      style: {
        ...xh.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (yl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  onChange: n.func,
  /**
   * @ignore
   */
  placeholder: n.string,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * @ignore
   */
  value: n.oneOfType([n.arrayOf(n.string), n.number, n.string])
});
const Eh = yl;
function yn({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
function ws(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ro(e, t = !1) {
  return e && (ws(e.value) && e.value !== "" || t && ws(e.defaultValue) && e.defaultValue !== "");
}
function Oh(e) {
  return e.startAdornment;
}
function wh(e) {
  return ce("MuiInputBase", e);
}
const Sh = le("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), un = Sh;
var Ss;
const Ko = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${X(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, Xo = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, Ch = (e) => {
  const {
    classes: t,
    color: o,
    disabled: r,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: p,
    readOnly: m,
    size: h,
    startAdornment: g,
    type: b
  } = e, f = {
    root: ["root", `color${X(o)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", h && h !== "medium" && `size${X(h)}`, p && "multiline", g && "adornedStart", s && "adornedEnd", u && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", b === "search" && "inputTypeSearch", p && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", g && "inputAdornedStart", s && "inputAdornedEnd", m && "readOnly"]
  };
  return ue(f, wh, t);
}, Qo = K("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Ko
})(pe(({
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
  [`&.${un.disabled}`]: {
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
      size: o
    }) => t.multiline && o === "small",
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
}))), Jo = K("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Xo
})(pe(({
  theme: e
}) => {
  const t = e.palette.mode === "light", o = {
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
    "&::-webkit-input-placeholder": o,
    "&::-moz-placeholder": o,
    // Firefox 19+
    "&::-ms-input-placeholder": o,
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
    [`label[data-shrink=false] + .${un.formControl} &`]: {
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
    [`&.${un.disabled}`]: {
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
})), Cs = Md({
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
}), bl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    disabled: h,
    disableInjectingGlobalStyles: g,
    endAdornment: b,
    error: f,
    fullWidth: v = !1,
    id: w,
    inputComponent: R = "input",
    inputProps: E = {},
    inputRef: y,
    margin: T,
    maxRows: C,
    minRows: N,
    multiline: D = !1,
    name: A,
    onBlur: z,
    onChange: F,
    onClick: d,
    onFocus: $,
    onKeyDown: P,
    onKeyUp: j,
    placeholder: k,
    readOnly: L,
    renderSuffix: M,
    rows: _,
    size: I,
    slotProps: S = {},
    slots: W = {},
    startAdornment: U,
    type: H = "text",
    value: G,
    ...Z
  } = r, Y = E.value != null ? E.value : G, {
    current: Q
  } = x.useRef(Y != null), J = x.useRef(), q = x.useCallback((se) => {
    process.env.NODE_ENV !== "production" && se && se.nodeName !== "INPUT" && !se.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ee = Me(J, y, E.ref, q), [V, ie] = x.useState(!1), re = Kt();
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    if (re)
      return re.registerEffect();
  }, [re]);
  const fe = yn({
    props: r,
    muiFormControl: re,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fe.focused = re ? re.focused : V, x.useEffect(() => {
    !re && h && V && (ie(!1), z && z());
  }, [re, h, V, z]);
  const ke = re && re.onFilled, Ce = re && re.onEmpty, we = x.useCallback((se) => {
    Ro(se) ? ke && ke() : Ce && Ce();
  }, [ke, Ce]);
  at(() => {
    Q && we({
      value: Y
    });
  }, [Y, we, Q]);
  const je = (se) => {
    $ && $(se), E.onFocus && E.onFocus(se), re && re.onFocus ? re.onFocus(se) : ie(!0);
  }, Oe = (se) => {
    z && z(se), E.onBlur && E.onBlur(se), re && re.onBlur ? re.onBlur(se) : ie(!1);
  }, Ee = (se, ...Ge) => {
    if (!Q) {
      const _e = se.target || J.current;
      if (_e == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : bt(1));
      we({
        value: _e.value
      });
    }
    E.onChange && E.onChange(se, ...Ge), F && F(se, ...Ge);
  };
  x.useEffect(() => {
    we(J.current);
  }, []);
  const te = (se) => {
    J.current && se.currentTarget === se.target && J.current.focus(), d && d(se);
  };
  let Be = R, Re = E;
  D && Be === "input" && (_ ? (process.env.NODE_ENV !== "production" && (N || C) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Re = {
    type: void 0,
    minRows: _,
    maxRows: _,
    ...Re
  }) : Re = {
    type: void 0,
    maxRows: C,
    minRows: N,
    ...Re
  }, Be = Eh);
  const tt = (se) => {
    we(se.animationName === "mui-auto-fill-cancel" ? J.current : {
      value: "x"
    });
  };
  x.useEffect(() => {
    re && re.setAdornedStart(!!U);
  }, [re, U]);
  const Ye = {
    ...r,
    color: fe.color || "primary",
    disabled: fe.disabled,
    endAdornment: b,
    error: fe.error,
    focused: fe.focused,
    formControl: re,
    fullWidth: v,
    hiddenLabel: fe.hiddenLabel,
    multiline: D,
    size: fe.size,
    startAdornment: U,
    type: H
  }, nt = Ch(Ye), pt = W.root || u.Root || Qo, ze = S.root || p.root || {}, Et = W.input || u.Input || Jo;
  return Re = {
    ...Re,
    ...S.input ?? p.input
  }, /* @__PURE__ */ O.jsxs(x.Fragment, {
    children: [!g && typeof Cs == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Ss || (Ss = /* @__PURE__ */ O.jsx(Cs, {}))), /* @__PURE__ */ O.jsxs(pt, {
      ...ze,
      ref: o,
      onClick: te,
      ...Z,
      ...!vo(pt) && {
        ownerState: {
          ...Ye,
          ...ze.ownerState
        }
      },
      className: ne(nt.root, ze.className, l, L && "MuiInputBase-readOnly"),
      children: [U, /* @__PURE__ */ O.jsx(Go.Provider, {
        value: null,
        children: /* @__PURE__ */ O.jsx(Et, {
          "aria-invalid": fe.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: m,
          disabled: fe.disabled,
          id: w,
          onAnimationStart: tt,
          name: A,
          placeholder: k,
          readOnly: L,
          required: fe.required,
          rows: _,
          value: Y,
          onKeyDown: P,
          onKeyUp: j,
          type: H,
          ...Re,
          ...!vo(Et) && {
            as: Be,
            ownerState: {
              ...Ye,
              ...Re.ownerState
            }
          },
          ref: ee,
          className: ne(nt.input, Re.className, L && "MuiInputBase-readOnly"),
          onBlur: Oe,
          onChange: Ee,
          onFocus: je
        })
      }), b, M ? M({
        ...fe,
        startAdornment: U
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (bl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Zr,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ut,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * @ignore
   */
  renderSuffix: n.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
const ii = bl;
function Rh(e) {
  return ce("MuiInput", e);
}
const Ph = {
  ...un,
  ...le("MuiInput", ["root", "underline", "input"])
}, Sn = Ph, $h = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = ue({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, Rh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, Ih = K(Qo, {
  shouldForwardProp: (e) => qe(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...Ko(e, t), !o.disableUnderline && t.underline];
  }
})(pe(({
  theme: e
}) => {
  let o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (o = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)), {
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
        [`&.${Sn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Sn.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${o}`,
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
        [`&:hover:not(.${Sn.disabled}, .${Sn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${o}`
          }
        },
        [`&.${Sn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(ct()).map(([r]) => ({
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
})), kh = K(Jo, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Xo
})({}), si = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    type: h = "text",
    ...g
  } = r, b = $h(r), v = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, w = p ?? a ? De(p ?? a, v) : v, R = m.root ?? s.Root ?? Ih, E = m.input ?? s.Input ?? kh;
  return /* @__PURE__ */ O.jsx(ii, {
    slots: {
      root: R,
      input: E
    },
    slotProps: w,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: o,
    type: h,
    ...g,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (si.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ut,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
si.muiName = "Input";
const vl = si;
function Nh(e) {
  return ce("MuiFilledInput", e);
}
const jh = {
  ...un,
  ...le("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, _t = jh, Ah = (e) => {
  const {
    classes: t,
    disableUnderline: o,
    startAdornment: r,
    endAdornment: i,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !o && "underline", r && "adornedStart", i && "adornedEnd", s === "small" && `size${X(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = ue(c, Nh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, Mh = K(Qo, {
  shouldForwardProp: (e) => qe(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...Ko(e, t), !o.disableUnderline && t.underline];
  }
})(pe(({
  theme: e
}) => {
  const t = e.palette.mode === "light", o = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
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
    [`&.${_t.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${_t.disabled}`]: {
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
        [`&.${_t.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${_t.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : o}`,
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
        [`&:hover:not(.${_t.disabled}, .${_t.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${_t.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(ct()).map(([a]) => {
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
})), Dh = K(Jo, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Xo
})(pe(({
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
}))), ai = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    slots: h = {},
    type: g = "text",
    ...b
  } = r, f = {
    ...r,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: u,
    multiline: p,
    type: g
  }, v = Ah(r), w = {
    root: {
      ownerState: f
    },
    input: {
      ownerState: f
    }
  }, R = m ?? a ? De(w, m ?? a) : w, E = h.root ?? s.Root ?? Mh, y = h.input ?? s.Input ?? Dh;
  return /* @__PURE__ */ O.jsx(ii, {
    slots: {
      root: E,
      input: y
    },
    slotProps: R,
    fullWidth: l,
    inputComponent: u,
    multiline: p,
    ref: o,
    type: g,
    ...b,
    classes: v
  });
});
process.env.NODE_ENV !== "production" && (ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ut,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
ai.muiName = "Input";
const xl = ai;
var Rs;
const Bh = K("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: qe
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
}), _h = K("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: qe
})(pe(({
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
function Tl(e) {
  const {
    children: t,
    classes: o,
    className: r,
    label: i,
    notched: s,
    ...a
  } = e, l = i != null && i !== "", c = {
    ...e,
    notched: s,
    withLabel: l
  };
  return /* @__PURE__ */ O.jsx(Bh, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ O.jsx(_h, {
      ownerState: c,
      children: l ? /* @__PURE__ */ O.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Rs || (Rs = /* @__PURE__ */ O.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (Tl.propTypes = {
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The label.
   */
  label: n.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool.isRequired,
  /**
   * @ignore
   */
  style: n.object
});
function Lh(e) {
  return ce("MuiOutlinedInput", e);
}
const Fh = {
  ...un,
  ...le("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, ft = Fh, zh = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Lh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, Vh = K(Qo, {
  shouldForwardProp: (e) => qe(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Ko
})(pe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${ft.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${ft.focused} .${ft.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(ct()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        [`&.${ft.focused} .${ft.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[o].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${ft.error} .${ft.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${ft.disabled} .${ft.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: o
      }) => o.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: o
      }) => o.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: o
      }) => o.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: o,
        size: r
      }) => o.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), Wh = K(Tl, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(pe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), Uh = K(Jo, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Xo
})(pe(({
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
}))), li = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    type: h = "text",
    ...g
  } = r, b = zh(r), f = Kt(), v = yn({
    props: r,
    muiFormControl: f,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), w = {
    ...r,
    color: v.color || "primary",
    disabled: v.disabled,
    error: v.error,
    focused: v.focused,
    formControl: f,
    fullWidth: s,
    hiddenLabel: v.hiddenLabel,
    multiline: c,
    size: v.size,
    type: h
  }, R = p.root ?? i.Root ?? Vh, E = p.input ?? i.Input ?? Uh, [y, T] = ve("notchedOutline", {
    elementType: Wh,
    className: b.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: w,
    externalForwardedProps: {
      slots: p,
      slotProps: m
    },
    additionalProps: {
      label: l != null && l !== "" && v.required ? /* @__PURE__ */ O.jsxs(x.Fragment, {
        children: [l, " ", "*"]
      }) : l
    }
  });
  return /* @__PURE__ */ O.jsx(ii, {
    slots: {
      root: R,
      input: E
    },
    slotProps: m,
    renderSuffix: (C) => /* @__PURE__ */ O.jsx(y, {
      ...T,
      notched: typeof u < "u" ? u : !!(C.startAdornment || C.filled || C.focused)
    }),
    fullWidth: s,
    inputComponent: a,
    multiline: c,
    ref: o,
    type: h,
    ...g,
    classes: {
      ...b,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ut,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: n.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    notchedOutline: n.oneOfType([n.func, n.object]),
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    notchedOutline: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
li.muiName = "Input";
const El = li;
function Hh(e) {
  return ce("MuiFormLabel", e);
}
const qh = le("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Dn = qh, Yh = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${X(o)}`, i && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return ue(c, Hh, t);
}, Gh = K("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color === "secondary" && t.colorSecondary, o.filled && t.filled];
  }
})(pe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Dn.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Dn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Dn.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), Kh = K("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(pe(({
  theme: e
}) => ({
  [`&.${Dn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Ol = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    required: h,
    ...g
  } = r, b = Kt(), f = yn({
    props: r,
    muiFormControl: b,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), v = {
    ...r,
    color: f.color || "primary",
    component: l,
    disabled: f.disabled,
    error: f.error,
    filled: f.filled,
    focused: f.focused,
    required: f.required
  }, w = Yh(v);
  return /* @__PURE__ */ O.jsxs(Gh, {
    as: l,
    ownerState: v,
    className: ne(w.root, s),
    ref: o,
    ...g,
    children: [i, f.required && /* @__PURE__ */ O.jsxs(Kh, {
      ownerState: v,
      "aria-hidden": !0,
      className: w.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Xh = Ol;
function Qh(e) {
  return ce("MuiInputLabel", e);
}
le("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Jh = (e) => {
  const {
    classes: t,
    formControl: o,
    size: r,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", o && "formControl", !s && "animated", i && "shrink", r && r !== "medium" && `size${X(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = ue(c, Qh, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, Zh = K(Xh, {
  shouldForwardProp: (e) => qe(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Dn.asterisk}`]: t.asterisk
    }, t.root, o.formControl && t.formControl, o.size === "small" && t.sizeSmall, o.shrink && t.shrink, !o.disableAnimation && t.animated, o.focused && t.focused, t[o.variant]];
  }
})(pe(({
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
      ownerState: o
    }) => t === "filled" && o.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: o,
      size: r
    }) => t === "filled" && o.shrink && r === "small",
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
      ownerState: o
    }) => t === "outlined" && o.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), wl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: s,
    shrink: a,
    variant: l,
    className: c,
    ...u
  } = r, p = Kt();
  let m = a;
  typeof m > "u" && p && (m = p.filled || p.focused || p.adornedStart);
  const h = yn({
    props: r,
    muiFormControl: p,
    states: ["size", "variant", "required", "focused"]
  }), g = {
    ...r,
    disableAnimation: i,
    formControl: p,
    shrink: m,
    size: h.size,
    variant: h.variant,
    required: h.required,
    focused: h.focused
  }, b = Jh(g);
  return /* @__PURE__ */ O.jsx(Zh, {
    "data-shrink": m,
    ref: o,
    className: ne(b.root, c),
    ...u,
    ownerState: g,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const eg = wl;
function tg(e) {
  return ce("MuiFormControl", e);
}
le("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const ng = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${X(o)}`, r && "fullWidth"]
  };
  return ue(i, tg, t);
}, og = K("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`margin${X(o.margin)}`], o.fullWidth && t.fullWidth];
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
}), Sl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    hiddenLabel: h = !1,
    margin: g = "none",
    required: b = !1,
    size: f = "medium",
    variant: v = "outlined",
    ...w
  } = r, R = {
    ...r,
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: m,
    hiddenLabel: h,
    margin: g,
    required: b,
    size: f,
    variant: v
  }, E = ng(R), [y, T] = x.useState(() => {
    let k = !1;
    return i && x.Children.forEach(i, (L) => {
      if (!hr(L, ["Input", "Select"]))
        return;
      const M = hr(L, ["Select"]) ? L.props.input : L;
      M && Oh(M.props) && (k = !0);
    }), k;
  }), [C, N] = x.useState(() => {
    let k = !1;
    return i && x.Children.forEach(i, (L) => {
      hr(L, ["Input", "Select"]) && (Ro(L.props, !0) || Ro(L.props.inputProps, !0)) && (k = !0);
    }), k;
  }), [D, A] = x.useState(!1);
  c && D && A(!1);
  const z = p !== void 0 && !c ? p : D;
  let F;
  const d = x.useRef(!1);
  process.env.NODE_ENV !== "production" && (F = () => (d.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), d.current = !0, () => {
    d.current = !1;
  }));
  const $ = x.useCallback(() => {
    N(!0);
  }, []), P = x.useCallback(() => {
    N(!1);
  }, []), j = x.useMemo(() => ({
    adornedStart: y,
    setAdornedStart: T,
    color: a,
    disabled: c,
    error: u,
    filled: C,
    focused: z,
    fullWidth: m,
    hiddenLabel: h,
    size: f,
    onBlur: () => {
      A(!1);
    },
    onFocus: () => {
      A(!0);
    },
    onEmpty: P,
    onFilled: $,
    registerEffect: F,
    required: b,
    variant: v
  }), [y, a, c, u, C, z, m, h, F, P, $, b, f, v]);
  return /* @__PURE__ */ O.jsx(Go.Provider, {
    value: j,
    children: /* @__PURE__ */ O.jsx(og, {
      as: l,
      ownerState: R,
      className: ne(E.root, s),
      ref: o,
      ...w,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Sl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const rg = Sl;
function ig(e) {
  return ce("MuiFormHelperText", e);
}
const sg = le("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Ps = sg;
var $s;
const ag = (e) => {
  const {
    classes: t,
    contained: o,
    size: r,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", s && "error", r && `size${X(r)}`, o && "contained", l && "focused", a && "filled", c && "required"]
  };
  return ue(u, ig, t);
}, lg = K("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size && t[`size${X(o.size)}`], o.contained && t.contained, o.filled && t.filled];
  }
})(pe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Ps.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ps.error}`]: {
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
}))), Cl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    required: h,
    variant: g,
    ...b
  } = r, f = Kt(), v = yn({
    props: r,
    muiFormControl: f,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), w = {
    ...r,
    component: a,
    contained: v.variant === "filled" || v.variant === "outlined",
    variant: v.variant,
    size: v.size,
    disabled: v.disabled,
    error: v.error,
    filled: v.filled,
    focused: v.focused,
    required: v.required
  };
  delete w.ownerState;
  const R = ag(w);
  return /* @__PURE__ */ O.jsx(lg, {
    as: a,
    className: ne(R.root, s),
    ref: o,
    ...b,
    ownerState: w,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      $s || ($s = /* @__PURE__ */ O.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
const cg = Cl;
function ug(e) {
  return ce("MuiNativeSelect", e);
}
const pg = le("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), ci = pg, dg = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${X(o)}`, s && "iconOpen", r && "disabled"]
  };
  return ue(l, ug, t);
}, Rl = K("select", {
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
  [`&.${ci.disabled}`]: {
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
})), fg = K(Rl, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: qe,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${ci.multiple}`]: t.multiple
    }];
  }
})({}), Pl = K("svg", {
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
  [`&.${ci.disabled}`]: {
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
})), mg = K(Pl, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${X(o.variant)}`], o.open && t.iconOpen];
  }
})({}), $l = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  }, m = dg(p);
  return /* @__PURE__ */ O.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ O.jsx(fg, {
      ownerState: p,
      className: ne(m.select, r),
      disabled: i,
      ref: l || o,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ O.jsx(mg, {
      as: a,
      ownerState: p,
      className: m.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && ($l.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: ut,
  /**
   * @ignore
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
const hg = $l;
function Il(e) {
  return ce("MuiSelect", e);
}
const Cn = le("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Is;
const gg = K(Rl, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Cn.select}`]: t.select
      },
      {
        [`&.${Cn.select}`]: t[o.variant]
      },
      {
        [`&.${Cn.error}`]: t.error
      },
      {
        [`&.${Cn.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Cn.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), yg = K(Pl, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${X(o.variant)}`], o.open && t.iconOpen];
  }
})({}), bg = K("input", {
  shouldForwardProp: (e) => Ea(e) && e !== "classes",
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
function ks(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function vg(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const xg = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${X(o)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return ue(l, Il, t);
}, kl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var Qt, Zn, Dt, eo;
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
    displayEmpty: h,
    error: g = !1,
    IconComponent: b,
    inputRef: f,
    labelId: v,
    MenuProps: w = {},
    multiple: R,
    name: E,
    onBlur: y,
    onChange: T,
    onClose: C,
    onFocus: N,
    onOpen: D,
    open: A,
    readOnly: z,
    renderValue: F,
    required: d,
    SelectDisplayProps: $ = {},
    tabIndex: P,
    // catching `type` from Input which makes no sense for SelectInput
    type: j,
    value: k,
    variant: L = "standard",
    ...M
  } = t, [_, I] = Ir({
    controlled: k,
    default: p,
    name: "Select"
  }), [S, W] = Ir({
    controlled: A,
    default: u,
    name: "Select"
  }), U = x.useRef(null), H = x.useRef(null), [G, Z] = x.useState(null), {
    current: Y
  } = x.useRef(A != null), [Q, J] = x.useState(), q = Me(o, f), ee = x.useCallback((oe) => {
    H.current = oe, oe && Z(oe);
  }, []), V = G == null ? void 0 : G.parentNode;
  x.useImperativeHandle(q, () => ({
    focus: () => {
      H.current.focus();
    },
    node: U.current,
    value: _
  }), [_]), x.useEffect(() => {
    u && S && G && !Y && (J(a ? null : V.clientWidth), H.current.focus());
  }, [G, a]), x.useEffect(() => {
    s && H.current.focus();
  }, [s]), x.useEffect(() => {
    if (!v)
      return;
    const oe = Ue(H.current).getElementById(v);
    if (oe) {
      const me = () => {
        getSelection().isCollapsed && H.current.focus();
      };
      return oe.addEventListener("click", me), () => {
        oe.removeEventListener("click", me);
      };
    }
  }, [v]);
  const ie = (oe, me) => {
    oe ? D && D(me) : C && C(me), Y || (J(a ? null : V.clientWidth), W(oe));
  }, re = (oe) => {
    oe.button === 0 && (oe.preventDefault(), H.current.focus(), ie(!0, oe));
  }, fe = (oe) => {
    ie(!1, oe);
  }, ke = x.Children.toArray(l), Ce = (oe) => {
    const me = ke.find((Ae) => Ae.props.value === oe.target.value);
    me !== void 0 && (I(me.props.value), T && T(oe, me));
  }, we = (oe) => (me) => {
    let Ae;
    if (me.currentTarget.hasAttribute("tabindex")) {
      if (R) {
        Ae = Array.isArray(_) ? _.slice() : [];
        const $t = _.indexOf(oe.props.value);
        $t === -1 ? Ae.push(oe.props.value) : Ae.splice($t, 1);
      } else
        Ae = oe.props.value;
      if (oe.props.onClick && oe.props.onClick(me), _ !== Ae && (I(Ae), T)) {
        const $t = me.nativeEvent || me, to = new $t.constructor($t.type, $t);
        Object.defineProperty(to, "target", {
          writable: !0,
          value: {
            value: Ae,
            name: E
          }
        }), T(to, oe);
      }
      R || ie(!1, me);
    }
  }, je = (oe) => {
    z || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(oe.key) && (oe.preventDefault(), ie(!0, oe));
  }, Oe = G !== null && S, Ee = (oe) => {
    !Oe && y && (Object.defineProperty(oe, "target", {
      writable: !0,
      value: {
        value: _,
        name: E
      }
    }), y(oe));
  };
  delete M["aria-invalid"];
  let te, Be;
  const Re = [];
  let tt = !1, Ye = !1;
  (Ro({
    value: _
  }) || h) && (F ? te = F(_) : tt = !0);
  const nt = ke.map((oe) => {
    if (!/* @__PURE__ */ x.isValidElement(oe))
      return null;
    process.env.NODE_ENV !== "production" && qt.isFragment(oe) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let me;
    if (R) {
      if (!Array.isArray(_))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : bt(2));
      me = _.some((Ae) => ks(Ae, oe.props.value)), me && tt && Re.push(oe.props.children);
    } else
      me = ks(_, oe.props.value), me && tt && (Be = oe.props.children);
    return me && (Ye = !0), /* @__PURE__ */ x.cloneElement(oe, {
      "aria-selected": me ? "true" : "false",
      onClick: we(oe),
      onKeyUp: (Ae) => {
        Ae.key === " " && Ae.preventDefault(), oe.props.onKeyUp && oe.props.onKeyUp(Ae);
      },
      role: "option",
      selected: me,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": oe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    if (!Ye && !R && _ !== "") {
      const oe = ke.map((me) => me.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${_}\` for the select ${E ? `(name="${E}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${oe.filter((me) => me != null).map((me) => `\`${me}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ye, ke, R, E, _]), tt && (R ? Re.length === 0 ? te = null : te = Re.reduce((oe, me, Ae) => (oe.push(me), Ae < Re.length - 1 && oe.push(", "), oe), []) : te = Be);
  let pt = Q;
  !a && Y && G && (pt = V.clientWidth);
  let ze;
  typeof P < "u" ? ze = P : ze = m ? null : 0;
  const Et = $.id || (E ? `mui-component-select-${E}` : void 0), se = {
    ...t,
    variant: L,
    value: _,
    open: Oe,
    error: g
  }, Ge = xg(se), _e = {
    ...w.PaperProps,
    ...typeof ((Qt = w.slotProps) == null ? void 0 : Qt.paper) == "function" ? w.slotProps.paper(se) : (Zn = w.slotProps) == null ? void 0 : Zn.paper
  }, Ve = {
    ...w.MenuListProps,
    ...typeof ((Dt = w.slotProps) == null ? void 0 : Dt.list) == "function" ? w.slotProps.list(se) : (eo = w.slotProps) == null ? void 0 : eo.list
  }, Jn = Gn();
  return /* @__PURE__ */ O.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ O.jsx(gg, {
      as: "div",
      ref: ee,
      tabIndex: ze,
      role: "combobox",
      "aria-controls": Oe ? Jn : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": Oe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [v, Et].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": d ? "true" : void 0,
      "aria-invalid": g ? "true" : void 0,
      onKeyDown: je,
      onMouseDown: m || z ? null : re,
      onBlur: Ee,
      onFocus: N,
      ...$,
      ownerState: se,
      className: ne($.className, Ge.select, c),
      id: Et,
      children: vg(te) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Is || (Is = /* @__PURE__ */ O.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : te
    }), /* @__PURE__ */ O.jsx(bg, {
      "aria-invalid": g,
      value: Array.isArray(_) ? _.join(",") : _,
      name: E,
      ref: U,
      "aria-hidden": !0,
      onChange: Ce,
      tabIndex: -1,
      disabled: m,
      className: Ge.nativeInput,
      autoFocus: s,
      required: d,
      ...M,
      ownerState: se
    }), /* @__PURE__ */ O.jsx(yg, {
      as: b,
      className: Ge.icon,
      ownerState: se
    }), /* @__PURE__ */ O.jsx(ml, {
      id: `menu-${E || ""}`,
      anchorEl: V,
      open: Oe,
      onClose: fe,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...w,
      slotProps: {
        ...w.slotProps,
        list: {
          "aria-labelledby": v,
          role: "listbox",
          "aria-multiselectable": R ? "true" : void 0,
          disableListWrap: !0,
          id: Jn,
          ...Ve
        },
        paper: {
          ..._e,
          style: {
            minWidth: pt,
            ..._e != null ? _e.style : null
          }
        }
      },
      children: nt
    })]
  });
});
process.env.NODE_ENV !== "production" && (kl.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * @ignore
   */
  "aria-label": n.string,
  /**
   * @ignore
   */
  autoFocus: n.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: ut,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * @ignore
   */
  readOnly: n.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * If `true`, the component is required.
   */
  required: n.bool,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  type: n.any,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
const Tg = kl, Eg = Rt(/* @__PURE__ */ O.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Og = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"]
  }, Il, t);
  return {
    ...t,
    ...r
  };
}, ui = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => qe(e) && e !== "variant"
}, wg = K(vl, ui)(""), Sg = K(El, ui)(""), Cg = K(xl, ui)(""), pi = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: p = Eg,
    id: m,
    input: h,
    inputProps: g,
    label: b,
    labelId: f,
    MenuProps: v,
    multiple: w = !1,
    native: R = !1,
    onClose: E,
    onOpen: y,
    open: T,
    renderValue: C,
    SelectDisplayProps: N,
    variant: D = "outlined",
    ...A
  } = r, z = R ? hg : Tg, F = Kt(), d = yn({
    props: r,
    muiFormControl: F,
    states: ["variant", "error"]
  }), $ = d.variant || D, P = {
    ...r,
    variant: $,
    classes: a
  }, j = Og(P), {
    root: k,
    ...L
  } = j, M = h || {
    standard: /* @__PURE__ */ O.jsx(wg, {
      ownerState: P
    }),
    outlined: /* @__PURE__ */ O.jsx(Sg, {
      label: b,
      ownerState: P
    }),
    filled: /* @__PURE__ */ O.jsx(Cg, {
      ownerState: P
    })
  }[$], _ = Me(o, Xt(M));
  return /* @__PURE__ */ O.jsx(x.Fragment, {
    children: /* @__PURE__ */ x.cloneElement(M, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: z,
      inputProps: {
        children: s,
        error: d.error,
        IconComponent: p,
        variant: $,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: w,
        ...R ? {
          id: m
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: u,
          labelId: f,
          MenuProps: v,
          onClose: E,
          onOpen: y,
          open: T,
          renderValue: C,
          SelectDisplayProps: {
            id: m,
            ...N
          }
        },
        ...g,
        classes: g ? De(L, g.classes) : L,
        ...h ? h.props.inputProps : {}
      },
      ...(w && R || u) && $ === "outlined" ? {
        notched: !0
      } : {},
      ref: _,
      className: ne(M.props.className, l, j.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!h && {
        variant: $
      },
      ...A
    })
  });
});
process.env.NODE_ENV !== "production" && (pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
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
  displayEmpty: n.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: n.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: n.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: n.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: n.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: n.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: n.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: n.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: n.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: n.oneOfType([n.oneOf([""]), n.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
pi.muiName = "Select";
const Rg = pi;
function Pg(e) {
  return ce("MuiTextField", e);
}
le("MuiTextField", ["root"]);
const $g = {
  standard: vl,
  filled: xl,
  outlined: El
}, Ig = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, Pg, t);
}, kg = K(rg, {
  name: "MuiTextField",
  slot: "Root"
})({}), Nl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    FormHelperTextProps: h,
    fullWidth: g = !1,
    helperText: b,
    id: f,
    InputLabelProps: v,
    inputProps: w,
    InputProps: R,
    inputRef: E,
    label: y,
    maxRows: T,
    minRows: C,
    multiline: N = !1,
    name: D,
    onBlur: A,
    onChange: z,
    onFocus: F,
    placeholder: d,
    required: $ = !1,
    rows: P,
    select: j = !1,
    SelectProps: k,
    slots: L = {},
    slotProps: M = {},
    type: _,
    value: I,
    variant: S = "outlined",
    ...W
  } = r, U = {
    ...r,
    autoFocus: s,
    color: c,
    disabled: p,
    error: m,
    fullWidth: g,
    multiline: N,
    required: $,
    select: j,
    variant: S
  }, H = Ig(U);
  process.env.NODE_ENV !== "production" && j && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const G = Gn(f), Z = b && G ? `${G}-helper-text` : void 0, Y = y && G ? `${G}-label` : void 0, Q = $g[S], J = {
    slots: L,
    slotProps: {
      input: R,
      inputLabel: v,
      htmlInput: w,
      formHelperText: h,
      select: k,
      ...M
    }
  }, q = {}, ee = J.slotProps.inputLabel;
  S === "outlined" && (ee && typeof ee.shrink < "u" && (q.notched = ee.shrink), q.label = y), j && ((!k || !k.native) && (q.id = void 0), q["aria-describedby"] = void 0);
  const [V, ie] = ve("root", {
    elementType: kg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...J,
      ...W
    },
    ownerState: U,
    className: ne(H.root, l),
    ref: o,
    additionalProps: {
      disabled: p,
      error: m,
      fullWidth: g,
      required: $,
      color: c,
      variant: S
    }
  }), [re, fe] = ve("input", {
    elementType: Q,
    externalForwardedProps: J,
    additionalProps: q,
    ownerState: U
  }), [ke, Ce] = ve("inputLabel", {
    elementType: eg,
    externalForwardedProps: J,
    ownerState: U
  }), [we, je] = ve("htmlInput", {
    elementType: "input",
    externalForwardedProps: J,
    ownerState: U
  }), [Oe, Ee] = ve("formHelperText", {
    elementType: cg,
    externalForwardedProps: J,
    ownerState: U
  }), [te, Be] = ve("select", {
    elementType: Rg,
    externalForwardedProps: J,
    ownerState: U
  }), Re = /* @__PURE__ */ O.jsx(re, {
    "aria-describedby": Z,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: g,
    multiline: N,
    name: D,
    rows: P,
    maxRows: T,
    minRows: C,
    type: _,
    value: I,
    id: G,
    inputRef: E,
    onBlur: A,
    onChange: z,
    onFocus: F,
    placeholder: d,
    inputProps: je,
    slots: {
      input: L.htmlInput ? we : void 0
    },
    ...fe
  });
  return /* @__PURE__ */ O.jsxs(V, {
    ...ie,
    children: [y != null && y !== "" && /* @__PURE__ */ O.jsx(ke, {
      htmlFor: G,
      id: Y,
      ...Ce,
      children: y
    }), j ? /* @__PURE__ */ O.jsx(te, {
      "aria-describedby": Z,
      id: G,
      labelId: Y,
      value: I,
      input: Re,
      ...Be,
      children: a
    }) : Re, b && /* @__PURE__ */ O.jsx(Oe, {
      id: Z,
      ...Ee,
      children: b
    })]
  });
});
process.env.NODE_ENV !== "production" && (Nl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * @ignore
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ut,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: n.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: n.object,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    formHelperText: n.oneOfType([n.func, n.object]),
    htmlInput: n.oneOfType([n.func, n.object]),
    input: n.oneOfType([n.func, n.object]),
    inputLabel: n.oneOfType([n.func, n.object]),
    select: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    formHelperText: n.elementType,
    htmlInput: n.elementType,
    input: n.elementType,
    inputLabel: n.elementType,
    root: n.elementType,
    select: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const Ng = Nl;
function jg(e) {
  return ce("MuiToolbar", e);
}
le("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const Ag = (e) => {
  const {
    classes: t,
    disableGutters: o,
    variant: r
  } = e;
  return ue({
    root: ["root", !o && "gutters", r]
  }, jg, t);
}, Mg = K("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disableGutters && t.gutters, t[o.variant]];
  }
})(pe(({
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
}))), jl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
  }, p = Ag(u);
  return /* @__PURE__ */ O.jsx(Mg, {
    as: s,
    className: ne(p.root, i),
    ref: o,
    ownerState: u,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (jl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: n.oneOfType([n.oneOf(["dense", "regular"]), n.string])
});
const Dg = jl, Bg = yp({
  themeId: Kn
}), _g = Bg, Lg = K(Dg)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Fg = ({
  appName: e = "Dashboard",
  pageName: t = "Home",
  onMenuClick: o,
  showMenuButton: r = !0,
  headerStyles: i,
  userName: s = "User Name",
  userEmail: a,
  userAvatar: l,
  onProfileClick: c,
  onAccountClick: u,
  onSettingsClick: p,
  onLogout: m,
  showNotifications: h = !1,
  notificationCount: g = 0,
  showSearchbar: b = !0,
  searchValue: f,
  onSearchChange: v,
  onSearchSubmit: w,
  showProfile: R = !0,
  userRole: E,
  accentColor: y = "#01584f",
  contentBackgroundColor: T = "#f2f9fc",
  navbarBackground: C = "#ff0000",
  navbarAccentColor: N = "#000000"
}) => {
  const D = _g((M) => M.breakpoints.up("md")), [A, z] = x.useState(null), F = !!A, d = (M) => {
    v == null || v(M.target.value);
  }, $ = (M) => {
    M.key === "Enter" && w && f && w(f);
  }, P = (M) => M ? M.charAt(0).toUpperCase() + M.slice(1).toLowerCase() : "User", j = (M) => {
    z(M.currentTarget);
  }, k = () => {
    z(null);
  }, L = (M) => {
    M == null || M(), k();
  };
  return /* @__PURE__ */ O.jsx(
    nf,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: C,
        backgroundImage: "none",
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...i
      },
      children: /* @__PURE__ */ O.jsxs(Lg, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ O.jsxs(
          it,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              r && !D && /* @__PURE__ */ O.jsx(
                Vn,
                {
                  "aria-label": "menu",
                  onClick: o,
                  sx: {
                    color: N,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ O.jsx(Wd, {})
                }
              ),
              /* @__PURE__ */ O.jsxs(
                it,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ O.jsx(
                      kt,
                      {
                        variant: "h6",
                        sx: {
                          color: N,
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: 1,
                          textTransform: "uppercase"
                        },
                        children: e
                      }
                    ),
                    /* @__PURE__ */ O.jsx("img", { src: "/lumora-logo.svg", alt: "NEXA Logo", width: 24, height: 24, style: { flexShrink: 0 } })
                  ]
                }
              ),
              b && D && /* @__PURE__ */ O.jsx(
                Ng,
                {
                  placeholder: "Search for deals or documents...",
                  value: f || "",
                  onChange: d,
                  onKeyDown: $,
                  size: "small",
                  sx: {
                    width: "400px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: T,
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
                    startAdornment: /* @__PURE__ */ O.jsx(Om, { position: "start", children: /* @__PURE__ */ O.jsx(Hd, { sx: { color: N } }) })
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ O.jsxs(
          it,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              h && /* @__PURE__ */ O.jsx(
                Ba,
                {
                  color: "error",
                  variant: "dot",
                  invisible: g === 0,
                  sx: {
                    "& .MuiBadge-badge": {
                      right: 2,
                      top: 2
                    }
                  },
                  children: /* @__PURE__ */ O.jsx(Vn, { size: "small", sx: { color: N }, children: /* @__PURE__ */ O.jsx(Ud, {}) })
                }
              ),
              h && R && /* @__PURE__ */ O.jsx(
                Ut,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                }
              ),
              R && /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
                /* @__PURE__ */ O.jsxs(
                  it,
                  {
                    direction: "row",
                    onClick: j,
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
                      l ? /* @__PURE__ */ O.jsx(Aa, { src: l, sx: { width: 32, height: 32 } }) : /* @__PURE__ */ O.jsx(
                        Vd,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: N
                          }
                        }
                      ),
                      /* @__PURE__ */ O.jsxs(
                        kn,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ O.jsx(
                              kt,
                              {
                                variant: "body2",
                                sx: {
                                  color: N,
                                  fontWeight: 500,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: s
                              }
                            ),
                            /* @__PURE__ */ O.jsx(
                              kt,
                              {
                                variant: "caption",
                                sx: {
                                  color: N,
                                  lineHeight: 1.2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  maxWidth: "150px"
                                },
                                children: P(E)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ O.jsxs(
                  ml,
                  {
                    anchorEl: A,
                    open: F,
                    onClose: k,
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
                      /* @__PURE__ */ O.jsx(Es, { onClick: () => L(p), children: "Settings" }),
                      /* @__PURE__ */ O.jsx(Ut, {}),
                      /* @__PURE__ */ O.jsxs(
                        Es,
                        {
                          onClick: () => L(m),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ O.jsx(kt, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ O.jsx(wa, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] })
    }
  );
};
function zg(e) {
  return ce("MuiCard", e);
}
le("MuiCard", ["root"]);
const Vg = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, zg, t);
}, Wg = K(qo, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Al = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
    props: t,
    name: "MuiCard"
  }), {
    className: i,
    raised: s = !1,
    ...a
  } = r, l = {
    ...r,
    raised: s
  }, c = Vg(l);
  return /* @__PURE__ */ O.jsx(Wg, {
    className: ne(c.root, i),
    elevation: s ? 8 : void 0,
    ref: o,
    ownerState: l,
    ...a
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
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: Tt(n.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Ug = Al;
function Hg(e) {
  return ce("MuiCardContent", e);
}
le("MuiCardContent", ["root"]);
const qg = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, Hg, t);
}, Yg = K("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Ml = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
    props: t,
    name: "MuiCardContent"
  }), {
    className: i,
    component: s = "div",
    ...a
  } = r, l = {
    ...r,
    component: s
  }, c = qg(l);
  return /* @__PURE__ */ O.jsx(Yg, {
    as: s,
    className: ne(c.root, i),
    ownerState: l,
    ref: o,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Ml.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Gg = Ml;
function Kg(e) {
  return ce("MuiButton", e);
}
const Xg = le("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Lt = Xg, Dl = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (Dl.displayName = "ButtonGroupContext");
const Qg = Dl, Bl = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (Bl.displayName = "ButtonGroupButtonContext");
const Jg = Bl, Zg = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: i,
    variant: s,
    loading: a,
    loadingPosition: l,
    classes: c
  } = e, u = {
    root: ["root", a && "loading", s, `${s}${X(t)}`, `size${X(i)}`, `${s}Size${X(i)}`, `color${X(t)}`, o && "disableElevation", r && "fullWidth", a && `loadingPosition${X(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${X(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${X(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, p = ue(u, Kg, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...p
  };
}, _l = [{
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
}], ey = K(oi, {
  shouldForwardProp: (e) => qe(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${X(o.color)}`], t[`size${X(o.size)}`], t[`${o.variant}Size${X(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth, o.loading && t.loading];
  }
})(pe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], o = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
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
    [`&.${Lt.disabled}`]: {
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
        [`&.${Lt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Lt.disabled}`]: {
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
        [`&.${Lt.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(ct()).map(([r]) => ({
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
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : o,
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
        [`&.${Lt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Lt.disabled}`]: {
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
        [`&.${Lt.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), ty = K("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, o.loading && t.startIconLoadingStart, t[`iconSize${X(o.size)}`]];
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
  }, ..._l]
})), ny = K("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, o.loading && t.endIconLoadingEnd, t[`iconSize${X(o.size)}`]];
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
  }, ..._l]
})), oy = K("span", {
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
})), Ns = K("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Ll = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = x.useContext(Qg), i = x.useContext(Jg), s = Fn(r, t), a = de({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: p,
    disabled: m = !1,
    disableElevation: h = !1,
    disableFocusRipple: g = !1,
    endIcon: b,
    focusVisibleClassName: f,
    fullWidth: v = !1,
    id: w,
    loading: R = null,
    loadingIndicator: E,
    loadingPosition: y = "center",
    size: T = "medium",
    startIcon: C,
    type: N,
    variant: D = "text",
    ...A
  } = a, z = Gn(w), F = E ?? /* @__PURE__ */ O.jsx(qa, {
    "aria-labelledby": z,
    color: "inherit",
    size: 16
  }), d = {
    ...a,
    color: c,
    component: u,
    disabled: m,
    disableElevation: h,
    disableFocusRipple: g,
    fullWidth: v,
    loading: R,
    loadingIndicator: F,
    loadingPosition: y,
    size: T,
    type: N,
    variant: D
  }, $ = Zg(d), P = (C || R && y === "start") && /* @__PURE__ */ O.jsx(ty, {
    className: $.startIcon,
    ownerState: d,
    children: C || /* @__PURE__ */ O.jsx(Ns, {
      className: $.loadingIconPlaceholder,
      ownerState: d
    })
  }), j = (b || R && y === "end") && /* @__PURE__ */ O.jsx(ny, {
    className: $.endIcon,
    ownerState: d,
    children: b || /* @__PURE__ */ O.jsx(Ns, {
      className: $.loadingIconPlaceholder,
      ownerState: d
    })
  }), k = i || "", L = typeof R == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ O.jsx("span", {
      className: $.loadingWrapper,
      style: {
        display: "contents"
      },
      children: R && /* @__PURE__ */ O.jsx(oy, {
        className: $.loadingIndicator,
        ownerState: d,
        children: F
      })
    })
  ) : null;
  return /* @__PURE__ */ O.jsxs(ey, {
    ownerState: d,
    className: ne(r.className, $.root, p, k),
    component: u,
    disabled: m || R,
    focusRipple: !g,
    focusVisibleClassName: ne($.focusVisible, f),
    ref: o,
    type: N,
    id: R ? z : w,
    ...A,
    classes: $,
    children: [P, y !== "end" && L, l, y === "end" && L, j]
  });
});
process.env.NODE_ENV !== "production" && (Ll.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: n.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
const Fl = Ll, ry = Rt(/* @__PURE__ */ O.jsx("path", {
  d: "m19.46 8 .79-1.75L22 5.46c.39-.18.39-.73 0-.91l-1.75-.79L19.46 2c-.18-.39-.73-.39-.91 0l-.79 1.75-1.76.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0M11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5-.79 1.75-1.75.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.73.39.91 0l.79-1.75 1.76-.79c.39-.18.39-.73 0-.91l-1.75-.79-.79-1.76c-.18-.39-.74-.39-.92 0"
}), "AutoAwesomeRounded"), zl = ({
  title: e = "",
  message: t = "",
  buttonText: o = "",
  onButtonClick: r,
  show: i = !0
}) => i ? /* @__PURE__ */ O.jsx(Ug, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ O.jsxs(Gg, { children: [
  /* @__PURE__ */ O.jsx(ry, { fontSize: "small" }),
  /* @__PURE__ */ O.jsx(kt, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ O.jsx(
    kt,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: t
    }
  ),
  /* @__PURE__ */ O.jsx(
    Fl,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: r,
      children: o
    }
  )
] }) }) : null;
var Le = "top", Je = "bottom", Ze = "right", Fe = "left", di = "auto", Xn = [Le, Je, Ze, Fe], pn = "start", Wn = "end", iy = "clippingParents", Vl = "viewport", Rn = "popper", sy = "reference", js = /* @__PURE__ */ Xn.reduce(function(e, t) {
  return e.concat([t + "-" + pn, t + "-" + Wn]);
}, []), Wl = /* @__PURE__ */ [].concat(Xn, [di]).reduce(function(e, t) {
  return e.concat([t, t + "-" + pn, t + "-" + Wn]);
}, []), ay = "beforeRead", ly = "read", cy = "afterRead", uy = "beforeMain", py = "main", dy = "afterMain", fy = "beforeWrite", my = "write", hy = "afterWrite", gy = [ay, ly, cy, uy, py, dy, fy, my, hy];
function xt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function He(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Gt(e) {
  var t = He(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qe(e) {
  var t = He(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function fi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = He(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function yy(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, i = t.attributes[o] || {}, s = t.elements[o];
    !Qe(s) || !xt(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function by(e) {
  var t = e.state, o = {
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
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], s = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Qe(i) || !xt(i) || (Object.assign(i.style, l), Object.keys(s).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const vy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: yy,
  effect: by,
  requires: ["computeStyles"]
};
function yt(e) {
  return e.split("-")[0];
}
var Ht = Math.max, Po = Math.min, dn = Math.round;
function Fr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ul() {
  return !/^((?!chrome|android).)*safari/i.test(Fr());
}
function fn(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && Qe(e) && (i = e.offsetWidth > 0 && dn(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && dn(r.height) / e.offsetHeight || 1);
  var a = Gt(e) ? He(e) : window, l = a.visualViewport, c = !Ul() && o, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, p = (r.top + (c && l ? l.offsetTop : 0)) / s, m = r.width / i, h = r.height / s;
  return {
    width: m,
    height: h,
    top: p,
    right: u + m,
    bottom: p + h,
    left: u,
    x: u,
    y: p
  };
}
function mi(e) {
  var t = fn(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function Hl(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && fi(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ct(e) {
  return He(e).getComputedStyle(e);
}
function xy(e) {
  return ["table", "td", "th"].indexOf(xt(e)) >= 0;
}
function Mt(e) {
  return ((Gt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Zo(e) {
  return xt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (fi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mt(e)
  );
}
function As(e) {
  return !Qe(e) || // https://github.com/popperjs/popper-core/issues/837
  Ct(e).position === "fixed" ? null : e.offsetParent;
}
function Ty(e) {
  var t = /firefox/i.test(Fr()), o = /Trident/i.test(Fr());
  if (o && Qe(e)) {
    var r = Ct(e);
    if (r.position === "fixed")
      return null;
  }
  var i = Zo(e);
  for (fi(i) && (i = i.host); Qe(i) && ["html", "body"].indexOf(xt(i)) < 0; ) {
    var s = Ct(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Qn(e) {
  for (var t = He(e), o = As(e); o && xy(o) && Ct(o).position === "static"; )
    o = As(o);
  return o && (xt(o) === "html" || xt(o) === "body" && Ct(o).position === "static") ? t : o || Ty(e) || t;
}
function hi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bn(e, t, o) {
  return Ht(e, Po(t, o));
}
function Ey(e, t, o) {
  var r = Bn(e, t, o);
  return r > o ? o : r;
}
function ql() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Yl(e) {
  return Object.assign({}, ql(), e);
}
function Gl(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var Oy = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Yl(typeof t != "number" ? t : Gl(t, Xn));
};
function wy(e) {
  var t, o = e.state, r = e.name, i = e.options, s = o.elements.arrow, a = o.modifiersData.popperOffsets, l = yt(o.placement), c = hi(l), u = [Fe, Ze].indexOf(l) >= 0, p = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = Oy(i.padding, o), h = mi(s), g = c === "y" ? Le : Fe, b = c === "y" ? Je : Ze, f = o.rects.reference[p] + o.rects.reference[c] - a[c] - o.rects.popper[p], v = a[c] - o.rects.reference[c], w = Qn(s), R = w ? c === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, E = f / 2 - v / 2, y = m[g], T = R - h[p] - m[b], C = R / 2 - h[p] / 2 + E, N = Bn(y, C, T), D = c;
    o.modifiersData[r] = (t = {}, t[D] = N, t.centerOffset = N - C, t);
  }
}
function Sy(e) {
  var t = e.state, o = e.options, r = o.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Hl(t.elements.popper, i) && (t.elements.arrow = i));
}
const Cy = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: wy,
  effect: Sy,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function mn(e) {
  return e.split("-")[1];
}
var Ry = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Py(e, t) {
  var o = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: dn(o * i) / i || 0,
    y: dn(r * i) / i || 0
  };
}
function Ms(e) {
  var t, o = e.popper, r = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, m = e.isFixed, h = a.x, g = h === void 0 ? 0 : h, b = a.y, f = b === void 0 ? 0 : b, v = typeof p == "function" ? p({
    x: g,
    y: f
  }) : {
    x: g,
    y: f
  };
  g = v.x, f = v.y;
  var w = a.hasOwnProperty("x"), R = a.hasOwnProperty("y"), E = Fe, y = Le, T = window;
  if (u) {
    var C = Qn(o), N = "clientHeight", D = "clientWidth";
    if (C === He(o) && (C = Mt(o), Ct(C).position !== "static" && l === "absolute" && (N = "scrollHeight", D = "scrollWidth")), C = C, i === Le || (i === Fe || i === Ze) && s === Wn) {
      y = Je;
      var A = m && C === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[N]
      );
      f -= A - r.height, f *= c ? 1 : -1;
    }
    if (i === Fe || (i === Le || i === Je) && s === Wn) {
      E = Ze;
      var z = m && C === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[D]
      );
      g -= z - r.width, g *= c ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: l
  }, u && Ry), d = p === !0 ? Py({
    x: g,
    y: f
  }, He(o)) : {
    x: g,
    y: f
  };
  if (g = d.x, f = d.y, c) {
    var $;
    return Object.assign({}, F, ($ = {}, $[y] = R ? "0" : "", $[E] = w ? "0" : "", $.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", $));
  }
  return Object.assign({}, F, (t = {}, t[y] = R ? f + "px" : "", t[E] = w ? g + "px" : "", t.transform = "", t));
}
function $y(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, i = r === void 0 ? !0 : r, s = o.adaptive, a = s === void 0 ? !0 : s, l = o.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: yt(t.placement),
    variation: mn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ms(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ms(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Iy = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: $y,
  data: {}
};
var ao = {
  passive: !0
};
function ky(e) {
  var t = e.state, o = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, c = He(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(p) {
    p.addEventListener("scroll", o.update, ao);
  }), l && c.addEventListener("resize", o.update, ao), function() {
    s && u.forEach(function(p) {
      p.removeEventListener("scroll", o.update, ao);
    }), l && c.removeEventListener("resize", o.update, ao);
  };
}
const Ny = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ky,
  data: {}
};
var jy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ho(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return jy[t];
  });
}
var Ay = {
  start: "end",
  end: "start"
};
function Ds(e) {
  return e.replace(/start|end/g, function(t) {
    return Ay[t];
  });
}
function gi(e) {
  var t = He(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function yi(e) {
  return fn(Mt(e)).left + gi(e).scrollLeft;
}
function My(e, t) {
  var o = He(e), r = Mt(e), i = o.visualViewport, s = r.clientWidth, a = r.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = Ul();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: l + yi(e),
    y: c
  };
}
function Dy(e) {
  var t, o = Mt(e), r = gi(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ht(o.scrollWidth, o.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ht(o.scrollHeight, o.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + yi(e), c = -r.scrollTop;
  return Ct(i || o).direction === "rtl" && (l += Ht(o.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function bi(e) {
  var t = Ct(e), o = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + i + r);
}
function Kl(e) {
  return ["html", "body", "#document"].indexOf(xt(e)) >= 0 ? e.ownerDocument.body : Qe(e) && bi(e) ? e : Kl(Zo(e));
}
function _n(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = Kl(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = He(r), a = i ? [s].concat(s.visualViewport || [], bi(r) ? r : []) : r, l = t.concat(a);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(_n(Zo(a)))
  );
}
function zr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function By(e, t) {
  var o = fn(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Bs(e, t, o) {
  return t === Vl ? zr(My(e, o)) : Gt(t) ? By(t, o) : zr(Dy(Mt(e)));
}
function _y(e) {
  var t = _n(Zo(e)), o = ["absolute", "fixed"].indexOf(Ct(e).position) >= 0, r = o && Qe(e) ? Qn(e) : e;
  return Gt(r) ? t.filter(function(i) {
    return Gt(i) && Hl(i, r) && xt(i) !== "body";
  }) : [];
}
function Ly(e, t, o, r) {
  var i = t === "clippingParents" ? _y(e) : [].concat(t), s = [].concat(i, [o]), a = s[0], l = s.reduce(function(c, u) {
    var p = Bs(e, u, r);
    return c.top = Ht(p.top, c.top), c.right = Po(p.right, c.right), c.bottom = Po(p.bottom, c.bottom), c.left = Ht(p.left, c.left), c;
  }, Bs(e, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Xl(e) {
  var t = e.reference, o = e.element, r = e.placement, i = r ? yt(r) : null, s = r ? mn(r) : null, a = t.x + t.width / 2 - o.width / 2, l = t.y + t.height / 2 - o.height / 2, c;
  switch (i) {
    case Le:
      c = {
        x: a,
        y: t.y - o.height
      };
      break;
    case Je:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ze:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Fe:
      c = {
        x: t.x - o.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? hi(i) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (s) {
      case pn:
        c[u] = c[u] - (t[p] / 2 - o[p] / 2);
        break;
      case Wn:
        c[u] = c[u] + (t[p] / 2 - o[p] / 2);
        break;
    }
  }
  return c;
}
function Un(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = r === void 0 ? e.placement : r, s = o.strategy, a = s === void 0 ? e.strategy : s, l = o.boundary, c = l === void 0 ? iy : l, u = o.rootBoundary, p = u === void 0 ? Vl : u, m = o.elementContext, h = m === void 0 ? Rn : m, g = o.altBoundary, b = g === void 0 ? !1 : g, f = o.padding, v = f === void 0 ? 0 : f, w = Yl(typeof v != "number" ? v : Gl(v, Xn)), R = h === Rn ? sy : Rn, E = e.rects.popper, y = e.elements[b ? R : h], T = Ly(Gt(y) ? y : y.contextElement || Mt(e.elements.popper), c, p, a), C = fn(e.elements.reference), N = Xl({
    reference: C,
    element: E,
    strategy: "absolute",
    placement: i
  }), D = zr(Object.assign({}, E, N)), A = h === Rn ? D : C, z = {
    top: T.top - A.top + w.top,
    bottom: A.bottom - T.bottom + w.bottom,
    left: T.left - A.left + w.left,
    right: A.right - T.right + w.right
  }, F = e.modifiersData.offset;
  if (h === Rn && F) {
    var d = F[i];
    Object.keys(z).forEach(function($) {
      var P = [Ze, Je].indexOf($) >= 0 ? 1 : -1, j = [Le, Je].indexOf($) >= 0 ? "y" : "x";
      z[$] += d[j] * P;
    });
  }
  return z;
}
function Fy(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = o.boundary, s = o.rootBoundary, a = o.padding, l = o.flipVariations, c = o.allowedAutoPlacements, u = c === void 0 ? Wl : c, p = mn(r), m = p ? l ? js : js.filter(function(b) {
    return mn(b) === p;
  }) : Xn, h = m.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  h.length === 0 && (h = m);
  var g = h.reduce(function(b, f) {
    return b[f] = Un(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[yt(f)], b;
  }, {});
  return Object.keys(g).sort(function(b, f) {
    return g[b] - g[f];
  });
}
function zy(e) {
  if (yt(e) === di)
    return [];
  var t = ho(e);
  return [Ds(e), t, Ds(t)];
}
function Vy(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = o.mainAxis, s = i === void 0 ? !0 : i, a = o.altAxis, l = a === void 0 ? !0 : a, c = o.fallbackPlacements, u = o.padding, p = o.boundary, m = o.rootBoundary, h = o.altBoundary, g = o.flipVariations, b = g === void 0 ? !0 : g, f = o.allowedAutoPlacements, v = t.options.placement, w = yt(v), R = w === v, E = c || (R || !b ? [ho(v)] : zy(v)), y = [v].concat(E).reduce(function(H, G) {
      return H.concat(yt(G) === di ? Fy(t, {
        placement: G,
        boundary: p,
        rootBoundary: m,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: f
      }) : G);
    }, []), T = t.rects.reference, C = t.rects.popper, N = /* @__PURE__ */ new Map(), D = !0, A = y[0], z = 0; z < y.length; z++) {
      var F = y[z], d = yt(F), $ = mn(F) === pn, P = [Le, Je].indexOf(d) >= 0, j = P ? "width" : "height", k = Un(t, {
        placement: F,
        boundary: p,
        rootBoundary: m,
        altBoundary: h,
        padding: u
      }), L = P ? $ ? Ze : Fe : $ ? Je : Le;
      T[j] > C[j] && (L = ho(L));
      var M = ho(L), _ = [];
      if (s && _.push(k[d] <= 0), l && _.push(k[L] <= 0, k[M] <= 0), _.every(function(H) {
        return H;
      })) {
        A = F, D = !1;
        break;
      }
      N.set(F, _);
    }
    if (D)
      for (var I = b ? 3 : 1, S = function(G) {
        var Z = y.find(function(Y) {
          var Q = N.get(Y);
          if (Q)
            return Q.slice(0, G).every(function(J) {
              return J;
            });
        });
        if (Z)
          return A = Z, "break";
      }, W = I; W > 0; W--) {
        var U = S(W);
        if (U === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const Wy = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Vy,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function _s(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function Ls(e) {
  return [Le, Ze, Je, Fe].some(function(t) {
    return e[t] >= 0;
  });
}
function Uy(e) {
  var t = e.state, o = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = Un(t, {
    elementContext: "reference"
  }), l = Un(t, {
    altBoundary: !0
  }), c = _s(a, r), u = _s(l, i, s), p = Ls(c), m = Ls(u);
  t.modifiersData[o] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: p,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": m
  });
}
const Hy = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Uy
};
function qy(e, t, o) {
  var r = yt(e), i = [Fe, Le].indexOf(r) >= 0 ? -1 : 1, s = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * i, [Fe, Ze].indexOf(r) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function Yy(e) {
  var t = e.state, o = e.options, r = e.name, i = o.offset, s = i === void 0 ? [0, 0] : i, a = Wl.reduce(function(p, m) {
    return p[m] = qy(m, t.rects, s), p;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const Gy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Yy
};
function Ky(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Xl({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Xy = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ky,
  data: {}
};
function Qy(e) {
  return e === "x" ? "y" : "x";
}
function Jy(e) {
  var t = e.state, o = e.options, r = e.name, i = o.mainAxis, s = i === void 0 ? !0 : i, a = o.altAxis, l = a === void 0 ? !1 : a, c = o.boundary, u = o.rootBoundary, p = o.altBoundary, m = o.padding, h = o.tether, g = h === void 0 ? !0 : h, b = o.tetherOffset, f = b === void 0 ? 0 : b, v = Un(t, {
    boundary: c,
    rootBoundary: u,
    padding: m,
    altBoundary: p
  }), w = yt(t.placement), R = mn(t.placement), E = !R, y = hi(w), T = Qy(y), C = t.modifiersData.popperOffsets, N = t.rects.reference, D = t.rects.popper, A = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, z = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, d = {
    x: 0,
    y: 0
  };
  if (C) {
    if (s) {
      var $, P = y === "y" ? Le : Fe, j = y === "y" ? Je : Ze, k = y === "y" ? "height" : "width", L = C[y], M = L + v[P], _ = L - v[j], I = g ? -D[k] / 2 : 0, S = R === pn ? N[k] : D[k], W = R === pn ? -D[k] : -N[k], U = t.elements.arrow, H = g && U ? mi(U) : {
        width: 0,
        height: 0
      }, G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ql(), Z = G[P], Y = G[j], Q = Bn(0, N[k], H[k]), J = E ? N[k] / 2 - I - Q - Z - z.mainAxis : S - Q - Z - z.mainAxis, q = E ? -N[k] / 2 + I + Q + Y + z.mainAxis : W + Q + Y + z.mainAxis, ee = t.elements.arrow && Qn(t.elements.arrow), V = ee ? y === "y" ? ee.clientTop || 0 : ee.clientLeft || 0 : 0, ie = ($ = F == null ? void 0 : F[y]) != null ? $ : 0, re = L + J - ie - V, fe = L + q - ie, ke = Bn(g ? Po(M, re) : M, L, g ? Ht(_, fe) : _);
      C[y] = ke, d[y] = ke - L;
    }
    if (l) {
      var Ce, we = y === "x" ? Le : Fe, je = y === "x" ? Je : Ze, Oe = C[T], Ee = T === "y" ? "height" : "width", te = Oe + v[we], Be = Oe - v[je], Re = [Le, Fe].indexOf(w) !== -1, tt = (Ce = F == null ? void 0 : F[T]) != null ? Ce : 0, Ye = Re ? te : Oe - N[Ee] - D[Ee] - tt + z.altAxis, nt = Re ? Oe + N[Ee] + D[Ee] - tt - z.altAxis : Be, pt = g && Re ? Ey(Ye, Oe, nt) : Bn(g ? Ye : te, Oe, g ? nt : Be);
      C[T] = pt, d[T] = pt - Oe;
    }
    t.modifiersData[r] = d;
  }
}
const Zy = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Jy,
  requiresIfExists: ["offset"]
};
function eb(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function tb(e) {
  return e === He(e) || !Qe(e) ? gi(e) : eb(e);
}
function nb(e) {
  var t = e.getBoundingClientRect(), o = dn(t.width) / e.offsetWidth || 1, r = dn(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function ob(e, t, o) {
  o === void 0 && (o = !1);
  var r = Qe(t), i = Qe(t) && nb(t), s = Mt(t), a = fn(e, i, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((xt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  bi(s)) && (l = tb(t)), Qe(t) ? (c = fn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = yi(s))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function rb(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    o.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!o.has(l)) {
        var c = t.get(l);
        c && i(c);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    o.has(s.name) || i(s);
  }), r;
}
function ib(e) {
  var t = rb(e);
  return gy.reduce(function(o, r) {
    return o.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function sb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function ab(e) {
  var t = e.reduce(function(o, r) {
    var i = o[r.name];
    return o[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var Fs = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function zs() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function lb(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, i = t.defaultOptions, s = i === void 0 ? Fs : i;
  return function(l, c, u) {
    u === void 0 && (u = s);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Fs, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], h = !1, g = {
      state: p,
      setOptions: function(w) {
        var R = typeof w == "function" ? w(p.options) : w;
        f(), p.options = Object.assign({}, s, p.options, R), p.scrollParents = {
          reference: Gt(l) ? _n(l) : l.contextElement ? _n(l.contextElement) : [],
          popper: _n(c)
        };
        var E = ib(ab([].concat(r, p.options.modifiers)));
        return p.orderedModifiers = E.filter(function(y) {
          return y.enabled;
        }), b(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var w = p.elements, R = w.reference, E = w.popper;
          if (zs(R, E)) {
            p.rects = {
              reference: ob(R, Qn(E), p.options.strategy === "fixed"),
              popper: mi(E)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(z) {
              return p.modifiersData[z.name] = Object.assign({}, z.data);
            });
            for (var y = 0; y < p.orderedModifiers.length; y++) {
              if (p.reset === !0) {
                p.reset = !1, y = -1;
                continue;
              }
              var T = p.orderedModifiers[y], C = T.fn, N = T.options, D = N === void 0 ? {} : N, A = T.name;
              typeof C == "function" && (p = C({
                state: p,
                options: D,
                name: A,
                instance: g
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sb(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(p);
        });
      }),
      destroy: function() {
        f(), h = !0;
      }
    };
    if (!zs(l, c))
      return g;
    g.setOptions(u).then(function(v) {
      !h && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function b() {
      p.orderedModifiers.forEach(function(v) {
        var w = v.name, R = v.options, E = R === void 0 ? {} : R, y = v.effect;
        if (typeof y == "function") {
          var T = y({
            state: p,
            name: w,
            instance: g,
            options: E
          }), C = function() {
          };
          m.push(T || C);
        }
      });
    }
    function f() {
      m.forEach(function(v) {
        return v();
      }), m = [];
    }
    return g;
  };
}
var cb = [Ny, Xy, Iy, vy, Gy, Wy, Zy, Cy, Hy], ub = /* @__PURE__ */ lb({
  defaultModifiers: cb
});
function pb(e) {
  return ce("MuiPopper", e);
}
le("MuiPopper", ["root"]);
function db(e, t) {
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
function $o(e) {
  return typeof e == "function" ? e() : e;
}
function er(e) {
  return e.nodeType !== void 0;
}
function fb(e) {
  return !er(e);
}
const mb = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, pb, t);
}, hb = {}, gb = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    slotProps: h = {},
    slots: g = {},
    TransitionProps: b,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...v
  } = t, w = x.useRef(null), R = Me(w, o), E = x.useRef(null), y = Me(E, m), T = x.useRef(y);
  at(() => {
    T.current = y;
  }, [y]), x.useImperativeHandle(m, () => E.current, []);
  const C = db(u, s), [N, D] = x.useState(C), [A, z] = x.useState($o(r));
  x.useEffect(() => {
    E.current && E.current.forceUpdate();
  }), x.useEffect(() => {
    r && z($o(r));
  }, [r]), at(() => {
    if (!A || !c)
      return;
    const j = (M) => {
      D(M.placement);
    };
    if (process.env.NODE_ENV !== "production" && A && er(A) && A.nodeType === 1) {
      const M = A.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && M.top === 0 && M.left === 0 && M.right === 0 && M.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let k = [{
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
        j(M);
      }
    }];
    l != null && (k = k.concat(l)), p && p.modifiers != null && (k = k.concat(p.modifiers));
    const L = ub(A, w.current, {
      placement: C,
      ...p,
      modifiers: k
    });
    return T.current(L), () => {
      L.destroy(), T.current(null);
    };
  }, [A, a, l, c, p, C]);
  const F = {
    placement: N
  };
  b !== null && (F.TransitionProps = b);
  const d = mb(t), $ = g.root ?? "div", P = Qa({
    elementType: $,
    externalSlotProps: h.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: R
    },
    ownerState: t,
    className: d.root
  });
  return /* @__PURE__ */ O.jsx($, {
    ...P,
    children: typeof i == "function" ? i(F) : i
  });
}), Ql = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    popperOptions: h = hb,
    popperRef: g,
    style: b,
    transition: f = !1,
    slotProps: v = {},
    slots: w = {},
    ...R
  } = t, [E, y] = x.useState(!0), T = () => {
    y(!1);
  }, C = () => {
    y(!0);
  };
  if (!c && !p && (!f || E))
    return null;
  let N;
  if (s)
    N = s;
  else if (r) {
    const z = $o(r);
    N = z && er(z) ? Ue(z).body : Ue(null).body;
  }
  const D = !p && c && (!f || E) ? "none" : void 0, A = f ? {
    in: p,
    onEnter: T,
    onExited: C
  } : void 0;
  return /* @__PURE__ */ O.jsx(sl, {
    disablePortal: l,
    container: N,
    children: /* @__PURE__ */ O.jsx(gb, {
      anchorEl: r,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: o,
      open: f ? !E : p,
      placement: m,
      popperOptions: h,
      popperRef: g,
      slotProps: v,
      slots: w,
      ...R,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: D,
        ...b
      },
      TransitionProps: A,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Ql.propTypes = {
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
  anchorEl: Tt(n.oneOfType([vt, n.object, n.func]), (e) => {
    if (e.open) {
      const t = $o(e.anchorEl);
      if (t && er(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || fb(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
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
  container: n.oneOfType([vt, n.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: n.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ut,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const yb = Ql, bb = K(yb, {
  name: "MuiPopper",
  slot: "Root"
})({}), Jl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Ho(), i = de({
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
    modifiers: h,
    open: g,
    placement: b,
    popperOptions: f,
    popperRef: v,
    transition: w,
    slots: R,
    slotProps: E,
    ...y
  } = i, T = (R == null ? void 0 : R.root) ?? (l == null ? void 0 : l.Root), C = {
    anchorEl: s,
    container: u,
    disablePortal: p,
    keepMounted: m,
    modifiers: h,
    open: g,
    placement: b,
    popperOptions: f,
    popperRef: v,
    transition: w,
    ...y
  };
  return /* @__PURE__ */ O.jsx(bb, {
    as: a,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: T
    },
    slotProps: E ?? c,
    ...C,
    ref: o
  });
});
process.env.NODE_ENV !== "production" && (Jl.propTypes = {
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
  anchorEl: n.oneOfType([vt, n.object, n.func]),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: n.shape({
    root: n.oneOfType([n.func, n.object])
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
  container: n.oneOfType([vt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ut,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const Zl = Jl;
function vb(e) {
  return ce("MuiTooltip", e);
}
const xb = le("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Ie = xb;
function Tb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Eb = (e) => {
  const {
    classes: t,
    disableInteractive: o,
    arrow: r,
    touch: i,
    placement: s
  } = e, a = {
    popper: ["popper", !o && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", i && "touch", `tooltipPlacement${X(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return ue(a, vb, t);
}, Ob = K(Zl, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.popper, !o.disableInteractive && t.popperInteractive, o.arrow && t.popperArrow, !o.open && t.popperClose];
  }
})(pe(({
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
      [`&[data-popper-placement*="bottom"] .${Ie.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Ie.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Ie.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Ie.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${Ie.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Ie.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ie.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ie.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), wb = K("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.tooltip, o.touch && t.touch, o.arrow && t.tooltipArrow, t[`tooltipPlacement${X(o.placement.split("-")[0])}`]];
  }
})(pe(({
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
  [`.${Ie.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Ie.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Ie.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Ie.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${Tb(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${Ie.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Ie.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Ie.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Ie.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Ie.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Ie.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Ie.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Ie.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ie.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ie.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Sb = K("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(pe(({
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
let lo = !1;
const Vs = new Yo();
let Pn = {
  x: 0,
  y: 0
};
function co(e, t) {
  return (o, ...r) => {
    t && t(o, ...r), e(o, ...r);
  };
}
const ec = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
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
    disableInteractive: h = !1,
    disableTouchListener: g = !1,
    enterDelay: b = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: v = 700,
    followCursor: w = !1,
    id: R,
    leaveDelay: E = 0,
    leaveTouchDelay: y = 1500,
    onClose: T,
    onOpen: C,
    open: N,
    placement: D = "bottom",
    PopperComponent: A,
    PopperProps: z = {},
    slotProps: F = {},
    slots: d = {},
    title: $,
    TransitionComponent: P,
    TransitionProps: j,
    ...k
  } = r, L = /* @__PURE__ */ x.isValidElement(s) ? s : /* @__PURE__ */ O.jsx("span", {
    children: s
  }), M = hn(), _ = Ho(), [I, S] = x.useState(), [W, U] = x.useState(null), H = x.useRef(!1), G = h || w, Z = sn(), Y = sn(), Q = sn(), J = sn(), [q, ee] = Ir({
    controlled: N,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let V = q;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: ae
    } = x.useRef(N !== void 0);
    x.useEffect(() => {
      I && I.disabled && !ae && $ !== "" && I.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [$, I, ae]);
  }
  const ie = Gn(R), re = x.useRef(), fe = St(() => {
    re.current !== void 0 && (document.body.style.WebkitUserSelect = re.current, re.current = void 0), J.clear();
  });
  x.useEffect(() => fe, [fe]);
  const ke = (ae) => {
    Vs.clear(), lo = !0, ee(!0), C && !V && C(ae);
  }, Ce = St(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ae) => {
      Vs.start(800 + E, () => {
        lo = !1;
      }), ee(!1), T && V && T(ae), Z.start(M.transitions.duration.shortest, () => {
        H.current = !1;
      });
    }
  ), we = (ae) => {
    H.current && ae.type !== "touchstart" || (I && I.removeAttribute("title"), Y.clear(), Q.clear(), b || lo && f ? Y.start(lo ? f : b, () => {
      ke(ae);
    }) : ke(ae));
  }, je = (ae) => {
    Y.clear(), Q.start(E, () => {
      Ce(ae);
    });
  }, [, Oe] = x.useState(!1), Ee = (ae) => {
    To(ae.target) || (Oe(!1), je(ae));
  }, te = (ae) => {
    I || S(ae.currentTarget), To(ae.target) && (Oe(!0), we(ae));
  }, Be = (ae) => {
    H.current = !0;
    const ot = L.props;
    ot.onTouchStart && ot.onTouchStart(ae);
  }, Re = (ae) => {
    Be(ae), Q.clear(), Z.clear(), fe(), re.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", J.start(v, () => {
      document.body.style.WebkitUserSelect = re.current, we(ae);
    });
  }, tt = (ae) => {
    L.props.onTouchEnd && L.props.onTouchEnd(ae), fe(), Q.start(y, () => {
      Ce(ae);
    });
  };
  x.useEffect(() => {
    if (!V)
      return;
    function ae(ot) {
      ot.key === "Escape" && Ce(ot);
    }
    return document.addEventListener("keydown", ae), () => {
      document.removeEventListener("keydown", ae);
    };
  }, [Ce, V]);
  const Ye = Me(Xt(L), S, o);
  !$ && $ !== 0 && (V = !1);
  const nt = x.useRef(), pt = (ae) => {
    const ot = L.props;
    ot.onMouseMove && ot.onMouseMove(ae), Pn = {
      x: ae.clientX,
      y: ae.clientY
    }, nt.current && nt.current.update();
  }, ze = {}, Et = typeof $ == "string";
  u ? (ze.title = !V && Et && !m ? $ : null, ze["aria-describedby"] = V ? ie : null) : (ze["aria-label"] = Et ? $ : null, ze["aria-labelledby"] = V && !Et ? ie : null);
  const se = {
    ...ze,
    ...k,
    ...L.props,
    className: ne(k.className, L.props.className),
    onTouchStart: Be,
    ref: Ye,
    ...w ? {
      onMouseMove: pt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (se["data-mui-internal-clone-element"] = !0, x.useEffect(() => {
    I && !I.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [I]));
  const Ge = {};
  g || (se.onTouchStart = Re, se.onTouchEnd = tt), m || (se.onMouseOver = co(we, se.onMouseOver), se.onMouseLeave = co(je, se.onMouseLeave), G || (Ge.onMouseOver = we, Ge.onMouseLeave = je)), p || (se.onFocus = co(te, se.onFocus), se.onBlur = co(Ee, se.onBlur), G || (Ge.onFocus = te, Ge.onBlur = Ee)), process.env.NODE_ENV !== "production" && L.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${L.props.title}\` or the Tooltip component.`].join(`
`));
  const _e = {
    ...r,
    isRtl: _,
    arrow: i,
    disableInteractive: G,
    placement: D,
    PopperComponentProp: A,
    touch: H.current
  }, Ve = typeof F.popper == "function" ? F.popper(_e) : F.popper, Jn = x.useMemo(() => {
    var ot, vi;
    let ae = [{
      name: "arrow",
      enabled: !!W,
      options: {
        element: W,
        padding: 4
      }
    }];
    return (ot = z.popperOptions) != null && ot.modifiers && (ae = ae.concat(z.popperOptions.modifiers)), (vi = Ve == null ? void 0 : Ve.popperOptions) != null && vi.modifiers && (ae = ae.concat(Ve.popperOptions.modifiers)), {
      ...z.popperOptions,
      ...Ve == null ? void 0 : Ve.popperOptions,
      modifiers: ae
    };
  }, [W, z.popperOptions, Ve == null ? void 0 : Ve.popperOptions]), Qt = Eb(_e), Zn = typeof F.transition == "function" ? F.transition(_e) : F.transition, Dt = {
    slots: {
      popper: l.Popper,
      transition: l.Transition ?? P,
      tooltip: l.Tooltip,
      arrow: l.Arrow,
      ...d
    },
    slotProps: {
      arrow: F.arrow ?? c.arrow,
      popper: {
        ...z,
        ...Ve ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: F.tooltip ?? c.tooltip,
      transition: {
        ...j,
        ...Zn ?? c.transition
      }
    }
  }, [eo, oe] = ve("popper", {
    elementType: Ob,
    externalForwardedProps: Dt,
    ownerState: _e,
    className: ne(Qt.popper, z == null ? void 0 : z.className)
  }), [me, Ae] = ve("transition", {
    elementType: il,
    externalForwardedProps: Dt,
    ownerState: _e
  }), [$t, to] = ve("tooltip", {
    elementType: wb,
    className: Qt.tooltip,
    externalForwardedProps: Dt,
    ownerState: _e
  }), [ac, lc] = ve("arrow", {
    elementType: Sb,
    className: Qt.arrow,
    externalForwardedProps: Dt,
    ownerState: _e,
    ref: U
  });
  return /* @__PURE__ */ O.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ x.cloneElement(L, se), /* @__PURE__ */ O.jsx(eo, {
      as: A ?? Zl,
      placement: D,
      anchorEl: w ? {
        getBoundingClientRect: () => ({
          top: Pn.y,
          left: Pn.x,
          right: Pn.x,
          bottom: Pn.y,
          width: 0,
          height: 0
        })
      } : I,
      popperRef: nt,
      open: I ? V : !1,
      id: ie,
      transition: !0,
      ...Ge,
      ...oe,
      popperOptions: Jn,
      children: ({
        TransitionProps: ae
      }) => /* @__PURE__ */ O.jsx(me, {
        timeout: M.transitions.duration.shorter,
        ...ae,
        ...Ae,
        children: /* @__PURE__ */ O.jsxs($t, {
          ...to,
          children: [$, i ? /* @__PURE__ */ O.jsx(ac, {
            ...lc
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (ec.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: n.bool,
  /**
   * Tooltip reference element.
   */
  children: gn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: n.shape({
    Arrow: n.elementType,
    Popper: n.elementType,
    Tooltip: n.elementType,
    Transition: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: n.shape({
    arrow: n.object,
    popper: n.object,
    tooltip: n.object,
    transition: n.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: n.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: n.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: n.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: n.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: n.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: n.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: n.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: n.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: n.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: n.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: n.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: n.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: n.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: n.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    arrow: n.oneOfType([n.func, n.object]),
    popper: n.oneOfType([n.func, n.object]),
    tooltip: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    arrow: n.elementType,
    popper: n.elementType,
    tooltip: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: n.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: n.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: n.object
});
const Ws = ec, tc = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: o,
  onLinkClick: r,
  accentColor: i = "#01584f"
}) => {
  const s = (a) => {
    r && r(a);
  };
  return /* @__PURE__ */ O.jsxs(
    it,
    {
      sx: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: 1
      },
      children: [
        e.map((a, l) => /* @__PURE__ */ O.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ O.jsx(Ws, { title: a.text, placement: "right", arrow: !0, children: /* @__PURE__ */ O.jsx(
            Vn,
            {
              component: "a",
              href: a.path,
              onClick: () => s(a.path),
              sx: {
                width: 44,
                height: 44,
                color: o === a.path ? "#ffffff" : i,
                backgroundColor: o === a.path ? i : "transparent",
                borderRadius: o === a.path ? "4px" : "50%",
                "&:hover": {
                  backgroundColor: o === a.path ? i : "action.hover",
                  borderRadius: "4px"
                }
              },
              children: a.icon
            }
          ) }),
          l < e.length - 1 && /* @__PURE__ */ O.jsx(kn, { sx: { width: "100%", display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ O.jsx(Ut, { sx: { width: "60%", borderColor: "divider" } }) })
        ] }, l)),
        t.length > 0 && /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
          /* @__PURE__ */ O.jsx(kn, { sx: { width: "100%", my: 2, display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ O.jsx(Ut, { sx: { width: "60%", borderColor: "divider" } }) }),
          /* @__PURE__ */ O.jsx(kn, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ O.jsx(it, { gap: 1, alignItems: "center", children: t.map((a, l) => /* @__PURE__ */ O.jsxs(x.Fragment, { children: [
            /* @__PURE__ */ O.jsx(Ws, { title: a.text, placement: "right", arrow: !0, children: /* @__PURE__ */ O.jsx(
              Vn,
              {
                component: "a",
                href: a.path,
                onClick: () => s(a.path),
                sx: {
                  width: 48,
                  height: 48,
                  color: o === a.path ? "#ffffff" : "text.secondary",
                  backgroundColor: o === a.path ? "#01584F" : "transparent",
                  borderRadius: o === a.path ? "4px" : "50%",
                  "&:hover": {
                    backgroundColor: o === a.path ? "#01584F" : "action.hover",
                    borderRadius: "4px"
                  }
                },
                children: a.icon
              }
            ) }),
            l < t.length - 1 && /* @__PURE__ */ O.jsx(kn, { sx: { width: "100%", display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ O.jsx(Ut, { sx: { width: "60%", borderColor: "divider" } }) })
          ] }, l)) }) })
        ] })
      ]
    }
  );
}, Cb = Rt(/* @__PURE__ */ O.jsx("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z"
}), "NotificationsRounded");
function Rb(e, t, o) {
  const r = t.getBoundingClientRect(), i = o && o.getBoundingClientRect(), s = lt(t);
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
function nc(e) {
  return typeof e == "function" ? e() : e;
}
function uo(e, t, o) {
  const r = nc(o), i = Rb(e, t, r);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const oc = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = hn(), i = {
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
    in: h,
    onEnter: g,
    onEntered: b,
    onEntering: f,
    onExit: v,
    onExited: w,
    onExiting: R,
    style: E,
    timeout: y = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = ei,
    ...C
  } = t, N = x.useRef(null), D = Me(Xt(c), N, o), A = (M) => (_) => {
    M && (_ === void 0 ? M(N.current) : M(N.current, _));
  }, z = A((M, _) => {
    uo(p, M, u), ri(M), g && g(M, _);
  }), F = A((M, _) => {
    const I = cn({
      timeout: y,
      style: E,
      easing: m
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = r.transitions.create("-webkit-transform", {
      ...I
    }), M.style.transition = r.transitions.create("transform", {
      ...I
    }), M.style.webkitTransform = "none", M.style.transform = "none", f && f(M, _);
  }), d = A(b), $ = A(R), P = A((M) => {
    const _ = cn({
      timeout: y,
      style: E,
      easing: m
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = r.transitions.create("-webkit-transform", _), M.style.transition = r.transitions.create("transform", _), uo(p, M, u), v && v(M);
  }), j = A((M) => {
    M.style.webkitTransition = "", M.style.transition = "", w && w(M);
  }), k = (M) => {
    a && a(N.current, M);
  }, L = x.useCallback(() => {
    N.current && uo(p, N.current, u);
  }, [p, u]);
  return x.useEffect(() => {
    if (h || p === "down" || p === "right")
      return;
    const M = Qr(() => {
      N.current && uo(p, N.current, u);
    }), _ = lt(N.current);
    return _.addEventListener("resize", M), () => {
      M.clear(), _.removeEventListener("resize", M);
    };
  }, [p, h, u]), x.useEffect(() => {
    h || L();
  }, [h, L]), /* @__PURE__ */ O.jsx(T, {
    nodeRef: N,
    onEnter: z,
    onEntered: d,
    onEntering: F,
    onExit: P,
    onExited: j,
    onExiting: $,
    addEndListener: k,
    appear: l,
    in: h,
    timeout: y,
    ...C,
    children: (M, {
      ownerState: _,
      ...I
    }) => /* @__PURE__ */ x.cloneElement(c, {
      ref: D,
      style: {
        visibility: M === "exited" && !h ? "hidden" : void 0,
        ...E,
        ...c.props.style
      },
      ...I
    })
  });
});
process.env.NODE_ENV !== "production" && (oc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: gn.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Tt(n.oneOfType([vt, n.func]), (e) => {
    if (e.open) {
      const t = nc(e.container);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
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
  direction: n.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
const Pb = oc;
function $b(e) {
  return ce("MuiDrawer", e);
}
le("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const rc = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, (o.variant === "permanent" || o.variant === "persistent") && t.docked, t.modal];
}, Ib = (e) => {
  const {
    classes: t,
    anchor: o,
    variant: r
  } = e, i = {
    root: ["root", `anchor${X(o)}`],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${X(o)}`, r !== "temporary" && `paperAnchorDocked${X(o)}`]
  };
  return ue(i, $b, t);
}, kb = K(ul, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: rc
})(pe(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), Nb = K("div", {
  shouldForwardProp: qe,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: rc
})({
  flex: "0 0 auto"
}), jb = K(qo, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`paperAnchor${X(o.anchor)}`], o.variant !== "temporary" && t[`paperAnchorDocked${X(o.anchor)}`]];
  }
})(pe(({
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
}))), ic = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function Ab(e) {
  return ["left", "right"].includes(e);
}
function Mb({
  direction: e
}, t) {
  return e === "rtl" && Ab(t) ? ic[t] : t;
}
const sc = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = de({
    props: t,
    name: "MuiDrawer"
  }), i = hn(), s = Ho(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: u,
    className: p,
    elevation: m = 16,
    hideBackdrop: h = !1,
    ModalProps: {
      BackdropProps: g,
      ...b
    } = {},
    onClose: f,
    open: v = !1,
    PaperProps: w = {},
    SlideProps: R,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E,
    transitionDuration: y = a,
    variant: T = "temporary",
    slots: C = {},
    slotProps: N = {},
    ...D
  } = r, A = x.useRef(!1);
  x.useEffect(() => {
    A.current = !0;
  }, []);
  const z = Mb({
    direction: s ? "rtl" : "ltr"
  }, l), d = {
    ...r,
    anchor: l,
    elevation: m,
    open: v,
    variant: T,
    ...D
  }, $ = Ib(d), P = {
    slots: {
      transition: E,
      ...C
    },
    slotProps: {
      paper: w,
      transition: R,
      ...N,
      backdrop: Oa(N.backdrop || {
        ...c,
        ...g
      }, {
        transitionDuration: y
      })
    }
  }, [j, k] = ve("root", {
    ref: o,
    elementType: kb,
    className: ne($.root, $.modal, p),
    shouldForwardComponentProp: !0,
    ownerState: d,
    externalForwardedProps: {
      ...P,
      ...D,
      ...b
    },
    additionalProps: {
      open: v,
      onClose: f,
      hideBackdrop: h,
      slots: {
        backdrop: P.slots.backdrop
      },
      slotProps: {
        backdrop: P.slotProps.backdrop
      }
    }
  }), [L, M] = ve("paper", {
    elementType: jb,
    shouldForwardComponentProp: !0,
    className: ne($.paper, w.className),
    ownerState: d,
    externalForwardedProps: P,
    additionalProps: {
      elevation: T === "temporary" ? m : 0,
      square: !0,
      ...T === "temporary" && {
        role: "dialog",
        "aria-modal": "true"
      }
    }
  }), [_, I] = ve("docked", {
    elementType: Nb,
    ref: o,
    className: ne($.root, $.docked, p),
    ownerState: d,
    externalForwardedProps: P,
    additionalProps: D
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [S, W] = ve("transition", {
    elementType: Pb,
    ownerState: d,
    externalForwardedProps: P,
    additionalProps: {
      in: v,
      direction: ic[z],
      timeout: y,
      appear: A.current
    }
  }), U = /* @__PURE__ */ O.jsx(L, {
    ...M,
    children: u
  });
  if (T === "permanent")
    return /* @__PURE__ */ O.jsx(_, {
      ...I,
      children: U
    });
  const H = /* @__PURE__ */ O.jsx(S, {
    ...W,
    children: U
  });
  return T === "persistent" ? /* @__PURE__ */ O.jsx(_, {
    ...I,
    children: H
  }) : /* @__PURE__ */ O.jsx(j, {
    ...k,
    children: H
  });
});
process.env.NODE_ENV !== "production" && (sc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: n.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: n.object,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: Jr,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Props applied to the [`Modal`](https://mui.com/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: n.bool,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @deprecated use the `slotProps.paper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PaperProps: n.object,
  /**
   * Props applied to the [`Slide`](https://mui.com/material-ui/api/slide/) element.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SlideProps: n.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    docked: n.oneOfType([n.func, n.object]),
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object]),
    transition: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    docked: n.elementType,
    paper: n.elementType,
    root: n.elementType,
    transition: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: n.oneOf(["permanent", "persistent", "temporary"])
});
const Db = sc, Bb = ({
  open: e,
  onClose: t,
  mainLinks: o,
  secondaryLinks: r = [],
  activePath: i,
  onLinkClick: s,
  userName: a = "User Name",
  userAvatar: l,
  onLogout: c,
  showNotifications: u = !1,
  notificationCount: p = 0,
  alertProps: m,
  accentColor: h = "#01584f"
}) => {
  const g = (b) => {
    s == null || s(b), t();
  };
  return /* @__PURE__ */ O.jsx(
    Db,
    {
      anchor: "right",
      open: e,
      onClose: t,
      sx: {
        zIndex: (b) => b.zIndex.drawer + 1,
        "& .MuiDrawer-paper": {
          backgroundImage: "none",
          backgroundColor: "background.paper"
        }
      },
      children: /* @__PURE__ */ O.jsxs(
        it,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ O.jsxs(it, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
              /* @__PURE__ */ O.jsxs(
                it,
                {
                  direction: "row",
                  sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                  children: [
                    /* @__PURE__ */ O.jsx(
                      Aa,
                      {
                        sizes: "small",
                        alt: a,
                        src: l,
                        sx: { width: 24, height: 24 }
                      }
                    ),
                    /* @__PURE__ */ O.jsx(kt, { component: "p", variant: "h6", children: a })
                  ]
                }
              ),
              u && /* @__PURE__ */ O.jsx(
                Ba,
                {
                  color: "error",
                  variant: "dot",
                  invisible: p === 0,
                  sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                  children: /* @__PURE__ */ O.jsx(Vn, { size: "small", children: /* @__PURE__ */ O.jsx(Cb, {}) })
                }
              )
            ] }),
            /* @__PURE__ */ O.jsx(Ut, {}),
            /* @__PURE__ */ O.jsxs(it, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ O.jsx(
                tc,
                {
                  mainLinks: o,
                  secondaryLinks: r,
                  activePath: i,
                  onLinkClick: g,
                  accentColor: h
                }
              ),
              /* @__PURE__ */ O.jsx(Ut, {})
            ] }),
            (m == null ? void 0 : m.show) && /* @__PURE__ */ O.jsx(zl, { ...m }),
            /* @__PURE__ */ O.jsx(it, { sx: { p: 2 }, children: /* @__PURE__ */ O.jsx(
              Fl,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ O.jsx(wa, {}),
                onClick: c,
                children: "Logout"
              }
            ) })
          ]
        }
      )
    }
  );
}, qb = ({
  children: e,
  sidebarLinks: t = [],
  secondarySidebarLinks: o = [],
  appName: r = "Dashboard",
  pageName: i = "Home",
  showHeader: s = !0,
  showSidebar: a = !0,
  enableRefreshToken: l = !1,
  activePath: c,
  onLinkClick: u,
  userName: p,
  userEmail: m,
  userAvatar: h,
  onLogout: g,
  onProfileClick: b,
  onAccountClick: f,
  onSettingsClick: v,
  showNotifications: w = !0,
  notificationCount: R = 0,
  showSearchbar: E = !0,
  searchValue: y,
  onSearchChange: T,
  onSearchSubmit: C,
  showProfile: N = !0,
  userRole: D,
  alertProps: A,
  style: z,
  headerStyles: F,
  sidebarStyles: d,
  contentStyles: $,
  accentColor: P = "#01584f",
  contentBackgroundColor: j = "#f2f9fc",
  navbarBackground: k = "#ffffff",
  navbarAccentColor: L = "#000000",
  GlobalChatSidebar: M,
  useChatSidebar: _
}) => {
  const I = dc(), S = fc(I.breakpoints.down("md")), [W, U] = tr(!1), [H, G] = tr(!0), [Z, Y] = tr(!1), Q = _ == null ? void 0 : _(), J = (Q == null ? void 0 : Q.isOpen) ?? !1, q = () => {
    U(!W);
  }, ee = () => {
    U(!1);
  };
  return nr(() => {
    (() => {
      try {
        if (!localStorage.getItem("lumoraRefreshToken")) {
          console.log("No session found, redirecting to login"), window.location.href = "/login";
          return;
        }
        Y(!0);
      } catch (ie) {
        console.error("Error checking session:", ie), window.location.href = "/login";
      } finally {
        G(!1);
      }
    })();
  }, []), nr(() => (l && wc(), () => {
    Sc();
  }), [l]), nr(() => {
    l && Rc();
  }, [l]), H ? /* @__PURE__ */ O.jsxs(
    vn,
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
        /* @__PURE__ */ O.jsx(mc, { size: 60, thickness: 4, sx: { color: P } }),
        /* @__PURE__ */ O.jsx(vn, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) : Z ? /* @__PURE__ */ O.jsxs(
    vn,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...z
      },
      children: [
        /* @__PURE__ */ O.jsx(hc, {}),
        s && /* @__PURE__ */ O.jsx(
          Fg,
          {
            appName: r,
            pageName: i,
            onMenuClick: S && a ? q : void 0,
            showMenuButton: S && a,
            headerStyles: F,
            userName: p,
            userEmail: m,
            userAvatar: h,
            onProfileClick: b,
            onAccountClick: f,
            onSettingsClick: v,
            onLogout: g,
            showNotifications: w,
            notificationCount: R,
            showSearchbar: E,
            searchValue: y,
            onSearchChange: T,
            onSearchSubmit: C,
            showProfile: N,
            userRole: D,
            accentColor: P,
            contentBackgroundColor: j,
            navbarBackground: k,
            navbarAccentColor: L
          }
        ),
        a && !S && /* @__PURE__ */ O.jsx(
          gc,
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
                bgcolor: j,
                borderRight: "none",
                top: s ? "60px" : 0,
                // Position below header
                height: s ? "calc(100vh - 60px)" : "100vh"
              },
              ...d
            },
            children: /* @__PURE__ */ O.jsxs(
              vn,
              {
                sx: {
                  overflow: "auto",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  pt: 2
                },
                children: [
                  /* @__PURE__ */ O.jsx(
                    tc,
                    {
                      mainLinks: t,
                      secondaryLinks: o,
                      activePath: c,
                      onLinkClick: u,
                      accentColor: P
                    }
                  ),
                  (A == null ? void 0 : A.show) && /* @__PURE__ */ O.jsx(zl, { ...A })
                ]
              }
            )
          }
        ),
        a && S && /* @__PURE__ */ O.jsx(
          Bb,
          {
            open: W,
            onClose: ee,
            mainLinks: t,
            secondaryLinks: o,
            activePath: c,
            onLinkClick: u,
            userName: p,
            userEmail: m,
            userAvatar: h,
            onLogout: g,
            onProfileClick: b,
            showNotifications: w,
            notificationCount: R,
            alertProps: A,
            accentColor: P
          }
        ),
        /* @__PURE__ */ O.jsx(
          vn,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              m: 1,
              width: S ? "100%" : a ? "calc(100% - 80px)" : "100%",
              mt: s ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: j,
              // White background for main content
              ...$
            },
            children: /* @__PURE__ */ O.jsxs(or, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ O.jsx(
                or,
                {
                  size: { xs: 12, md: J && M ? 8.5 : 12 },
                  sx: {
                    display: "flex",
                    flexDirection: "column"
                  },
                  children: e
                }
              ),
              J && M && /* @__PURE__ */ O.jsx(
                or,
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
                  children: /* @__PURE__ */ O.jsx(M, {})
                }
              )
            ] })
          }
        )
      ]
    }
  ) : null;
};
export {
  qb as LumoraWrapper,
  qb as default,
  Hb as logoutUser
};
