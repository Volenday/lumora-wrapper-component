var fc = Object.defineProperty;
var mc = (e, t, n) => t in e ? fc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var wo = (e, t, n) => (mc(e, typeof t != "symbol" ? t + "" : t, n), n);
import { jsxDEV as V, Fragment as Ks } from "react/jsx-dev-runtime";
import { useTheme as hc, useMediaQuery as gc, Box as Eo, CircularProgress as bc, CssBaseline as yc, Drawer as vc, Grid as ir } from "@mui/material";
import * as x from "react";
import Nt, { Children as xc, isValidElement as hn, cloneElement as gn, useState as sr, useEffect as ar } from "react";
import qr from "axios";
import { jsx as L, jsxs as Ie } from "react/jsx-runtime";
import Tc from "@emotion/styled";
import { Global as wc, ThemeContext as Ec, keyframes as Yo, css as Xs } from "@emotion/react";
import * as Oc from "react-dom";
import sn from "react-dom";
let Yr = !1;
const Cc = () => {
  Yr = !0;
}, Sc = () => {
  Yr = !1;
}, Nc = qr.create(), vn = qr.create({
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
    if (((n = e.response) == null ? void 0 : n.status) === 401 && Yr && t && !t._retry) {
      t._retry = !0;
      try {
        const r = localStorage.getItem("lumoraRefreshToken");
        if (!r)
          throw new Error("No refresh token available");
        const i = await Nc.post(
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
const Jy = async () => {
  const e = localStorage.getItem("lumoraRefreshToken");
  if (!e)
    throw new Error("No refresh token available for logout");
  await vn.post("/auth/logout", {
    refresh_token: e
  });
}, Rc = async () => {
  const e = localStorage.getItem("lumoraAccessToken"), t = localStorage.getItem("lumoraRefreshToken");
  if (e)
    return !0;
  if (t)
    try {
      const n = await qr.post(
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
}, Ci = (e) => e, kc = () => {
  let e = Ci;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ci;
    }
  };
}, Pc = kc(), Qs = Pc;
function vt(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function K(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : vt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Si(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function $c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sr = { exports: {} }, an = { exports: {} }, ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ni;
function Ic() {
  if (Ni)
    return ge;
  Ni = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function w(T) {
    if (typeof T == "object" && T !== null) {
      var O = T.$$typeof;
      switch (O) {
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
                case y:
                case g:
                case a:
                  return T;
                default:
                  return O;
              }
          }
        case n:
          return O;
      }
    }
  }
  function b(T) {
    return w(T) === u;
  }
  return ge.AsyncMode = c, ge.ConcurrentMode = u, ge.ContextConsumer = l, ge.ContextProvider = a, ge.Element = t, ge.ForwardRef = p, ge.Fragment = r, ge.Lazy = y, ge.Memo = g, ge.Portal = n, ge.Profiler = s, ge.StrictMode = i, ge.Suspense = m, ge.isAsyncMode = function(T) {
    return b(T) || w(T) === c;
  }, ge.isConcurrentMode = b, ge.isContextConsumer = function(T) {
    return w(T) === l;
  }, ge.isContextProvider = function(T) {
    return w(T) === a;
  }, ge.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, ge.isForwardRef = function(T) {
    return w(T) === p;
  }, ge.isFragment = function(T) {
    return w(T) === r;
  }, ge.isLazy = function(T) {
    return w(T) === y;
  }, ge.isMemo = function(T) {
    return w(T) === g;
  }, ge.isPortal = function(T) {
    return w(T) === n;
  }, ge.isProfiler = function(T) {
    return w(T) === s;
  }, ge.isStrictMode = function(T) {
    return w(T) === i;
  }, ge.isSuspense = function(T) {
    return w(T) === m;
  }, ge.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === r || T === u || T === s || T === i || T === m || T === h || typeof T == "object" && T !== null && (T.$$typeof === y || T.$$typeof === g || T.$$typeof === a || T.$$typeof === l || T.$$typeof === p || T.$$typeof === v || T.$$typeof === E || T.$$typeof === C || T.$$typeof === f);
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
var Ri;
function Mc() {
  return Ri || (Ri = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function w(U) {
      return typeof U == "string" || typeof U == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      U === r || U === u || U === s || U === i || U === m || U === h || typeof U == "object" && U !== null && (U.$$typeof === y || U.$$typeof === g || U.$$typeof === a || U.$$typeof === l || U.$$typeof === p || U.$$typeof === v || U.$$typeof === E || U.$$typeof === C || U.$$typeof === f);
    }
    function b(U) {
      if (typeof U == "object" && U !== null) {
        var le = U.$$typeof;
        switch (le) {
          case t:
            var ne = U.type;
            switch (ne) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case m:
                return ne;
              default:
                var pe = ne && ne.$$typeof;
                switch (pe) {
                  case l:
                  case p:
                  case y:
                  case g:
                  case a:
                    return pe;
                  default:
                    return le;
                }
            }
          case n:
            return le;
        }
      }
    }
    var T = c, O = u, $ = l, I = a, M = t, F = p, j = r, d = y, N = g, S = n, R = s, P = i, _ = m, z = !1;
    function A(U) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(U) || b(U) === c;
    }
    function k(U) {
      return b(U) === u;
    }
    function B(U) {
      return b(U) === l;
    }
    function q(U) {
      return b(U) === a;
    }
    function H(U) {
      return typeof U == "object" && U !== null && U.$$typeof === t;
    }
    function Y(U) {
      return b(U) === p;
    }
    function J(U) {
      return b(U) === r;
    }
    function Q(U) {
      return b(U) === y;
    }
    function X(U) {
      return b(U) === g;
    }
    function ee(U) {
      return b(U) === n;
    }
    function Z(U) {
      return b(U) === s;
    }
    function W(U) {
      return b(U) === i;
    }
    function te(U) {
      return b(U) === m;
    }
    be.AsyncMode = T, be.ConcurrentMode = O, be.ContextConsumer = $, be.ContextProvider = I, be.Element = M, be.ForwardRef = F, be.Fragment = j, be.Lazy = d, be.Memo = N, be.Portal = S, be.Profiler = R, be.StrictMode = P, be.Suspense = _, be.isAsyncMode = A, be.isConcurrentMode = k, be.isContextConsumer = B, be.isContextProvider = q, be.isElement = H, be.isForwardRef = Y, be.isFragment = J, be.isLazy = Q, be.isMemo = X, be.isPortal = ee, be.isProfiler = Z, be.isStrictMode = W, be.isSuspense = te, be.isValidElementType = w, be.typeOf = b;
  }()), be;
}
var ki;
function Js() {
  return ki || (ki = 1, process.env.NODE_ENV === "production" ? an.exports = Ic() : an.exports = Mc()), an.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lr, Pi;
function Ac() {
  if (Pi)
    return lr;
  Pi = 1;
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
        for (var h = 0; h < u.length; h++)
          n.call(l, u[h]) && (c[u[h]] = l[u[h]]);
      }
    }
    return c;
  }, lr;
}
var cr, $i;
function Gr() {
  if ($i)
    return cr;
  $i = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return cr = e, cr;
}
var ur, Ii;
function Zs() {
  return Ii || (Ii = 1, ur = Function.call.bind(Object.prototype.hasOwnProperty)), ur;
}
var pr, Mi;
function Dc() {
  if (Mi)
    return pr;
  Mi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Gr(), n = {}, r = Zs();
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
          } catch (y) {
            m = y;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, pr = i, pr;
}
var dr, Ai;
function Bc() {
  if (Ai)
    return dr;
  Ai = 1;
  var e = Js(), t = Ac(), n = Gr(), r = Zs(), i = Dc(), s = function() {
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
      var B = k && (u && k[u] || k[p]);
      if (typeof B == "function")
        return B;
    }
    var h = "<<anonymous>>", g = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: C(),
      arrayOf: w,
      element: b(),
      elementType: T(),
      instanceOf: O,
      node: F(),
      objectOf: I,
      oneOf: $,
      oneOfType: M,
      shape: d,
      exact: N
    };
    function y(k, B) {
      return k === B ? k !== 0 || 1 / k === 1 / B : k !== k && B !== B;
    }
    function f(k, B) {
      this.message = k, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function v(k) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, q = 0;
      function H(J, Q, X, ee, Z, W, te) {
        if (ee = ee || h, W = W || X, te !== n) {
          if (c) {
            var U = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw U.name = "Invariant Violation", U;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = ee + ":" + X;
            !B[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[le] = !0, q++);
          }
        }
        return Q[X] == null ? J ? Q[X] === null ? new f("The " + Z + " `" + W + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new f("The " + Z + " `" + W + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : k(Q, X, ee, Z, W);
      }
      var Y = H.bind(null, !1);
      return Y.isRequired = H.bind(null, !0), Y;
    }
    function E(k) {
      function B(q, H, Y, J, Q, X) {
        var ee = q[H], Z = P(ee);
        if (Z !== k) {
          var W = _(ee);
          return new f(
            "Invalid " + J + " `" + Q + "` of type " + ("`" + W + "` supplied to `" + Y + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return v(B);
    }
    function C() {
      return v(a);
    }
    function w(k) {
      function B(q, H, Y, J, Q) {
        if (typeof k != "function")
          return new f("Property `" + Q + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var X = q[H];
        if (!Array.isArray(X)) {
          var ee = P(X);
          return new f("Invalid " + J + " `" + Q + "` of type " + ("`" + ee + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var Z = 0; Z < X.length; Z++) {
          var W = k(X, Z, Y, J, Q + "[" + Z + "]", n);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return v(B);
    }
    function b() {
      function k(B, q, H, Y, J) {
        var Q = B[q];
        if (!l(Q)) {
          var X = P(Q);
          return new f("Invalid " + Y + " `" + J + "` of type " + ("`" + X + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(k);
    }
    function T() {
      function k(B, q, H, Y, J) {
        var Q = B[q];
        if (!e.isValidElementType(Q)) {
          var X = P(Q);
          return new f("Invalid " + Y + " `" + J + "` of type " + ("`" + X + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(k);
    }
    function O(k) {
      function B(q, H, Y, J, Q) {
        if (!(q[H] instanceof k)) {
          var X = k.name || h, ee = A(q[H]);
          return new f("Invalid " + J + " `" + Q + "` of type " + ("`" + ee + "` supplied to `" + Y + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return v(B);
    }
    function $(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function B(q, H, Y, J, Q) {
        for (var X = q[H], ee = 0; ee < k.length; ee++)
          if (y(X, k[ee]))
            return null;
        var Z = JSON.stringify(k, function(te, U) {
          var le = _(U);
          return le === "symbol" ? String(U) : U;
        });
        return new f("Invalid " + J + " `" + Q + "` of value `" + String(X) + "` " + ("supplied to `" + Y + "`, expected one of " + Z + "."));
      }
      return v(B);
    }
    function I(k) {
      function B(q, H, Y, J, Q) {
        if (typeof k != "function")
          return new f("Property `" + Q + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var X = q[H], ee = P(X);
        if (ee !== "object")
          return new f("Invalid " + J + " `" + Q + "` of type " + ("`" + ee + "` supplied to `" + Y + "`, expected an object."));
        for (var Z in X)
          if (r(X, Z)) {
            var W = k(X, Z, Y, J, Q + "." + Z, n);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return v(B);
    }
    function M(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var B = 0; B < k.length; B++) {
        var q = k[B];
        if (typeof q != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(q) + " at index " + B + "."
          ), a;
      }
      function H(Y, J, Q, X, ee) {
        for (var Z = [], W = 0; W < k.length; W++) {
          var te = k[W], U = te(Y, J, Q, X, ee, n);
          if (U == null)
            return null;
          U.data && r(U.data, "expectedType") && Z.push(U.data.expectedType);
        }
        var le = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new f("Invalid " + X + " `" + ee + "` supplied to " + ("`" + Q + "`" + le + "."));
      }
      return v(H);
    }
    function F() {
      function k(B, q, H, Y, J) {
        return S(B[q]) ? null : new f("Invalid " + Y + " `" + J + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return v(k);
    }
    function j(k, B, q, H, Y) {
      return new f(
        (k || "React class") + ": " + B + " type `" + q + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function d(k) {
      function B(q, H, Y, J, Q) {
        var X = q[H], ee = P(X);
        if (ee !== "object")
          return new f("Invalid " + J + " `" + Q + "` of type `" + ee + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var Z in k) {
          var W = k[Z];
          if (typeof W != "function")
            return j(Y, J, Q, Z, _(W));
          var te = W(X, Z, Y, J, Q + "." + Z, n);
          if (te)
            return te;
        }
        return null;
      }
      return v(B);
    }
    function N(k) {
      function B(q, H, Y, J, Q) {
        var X = q[H], ee = P(X);
        if (ee !== "object")
          return new f("Invalid " + J + " `" + Q + "` of type `" + ee + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var Z = t({}, q[H], k);
        for (var W in Z) {
          var te = k[W];
          if (r(k, W) && typeof te != "function")
            return j(Y, J, Q, W, _(te));
          if (!te)
            return new f(
              "Invalid " + J + " `" + Q + "` key `" + W + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(q[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var U = te(X, W, Y, J, Q + "." + W, n);
          if (U)
            return U;
        }
        return null;
      }
      return v(B);
    }
    function S(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(S);
          if (k === null || l(k))
            return !0;
          var B = m(k);
          if (B) {
            var q = B.call(k), H;
            if (B !== k.entries) {
              for (; !(H = q.next()).done; )
                if (!S(H.value))
                  return !1;
            } else
              for (; !(H = q.next()).done; ) {
                var Y = H.value;
                if (Y && !S(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function R(k, B) {
      return k === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function P(k) {
      var B = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : R(B, k) ? "symbol" : B;
    }
    function _(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var B = P(k);
      if (B === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function z(k) {
      var B = _(k);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function A(k) {
      return !k.constructor || !k.constructor.name ? h : k.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, dr;
}
var fr, Di;
function jc() {
  if (Di)
    return fr;
  Di = 1;
  var e = Gr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, fr = function() {
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
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, fr;
}
if (process.env.NODE_ENV !== "production") {
  var Lc = Js(), _c = !0;
  Sr.exports = Bc()(Lc.isElement, _c);
} else
  Sr.exports = jc()();
var Fc = Sr.exports;
const o = /* @__PURE__ */ $c(Fc);
function ea(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = ea(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function ie() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = ea(e)) && (r && (r += " "), r += t);
  return r;
}
function de(e, t, n = void 0) {
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
var Nr = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bi;
function Uc() {
  if (Bi)
    return we;
  Bi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
  function y(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case e:
          switch (f = f.type, f) {
            case n:
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
  return we.ContextConsumer = s, we.ContextProvider = a, we.Element = e, we.ForwardRef = l, we.Fragment = n, we.Lazy = m, we.Memo = p, we.Portal = t, we.Profiler = i, we.StrictMode = r, we.Suspense = c, we.SuspenseList = u, we.isContextConsumer = function(f) {
    return y(f) === s;
  }, we.isContextProvider = function(f) {
    return y(f) === a;
  }, we.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, we.isForwardRef = function(f) {
    return y(f) === l;
  }, we.isFragment = function(f) {
    return y(f) === n;
  }, we.isLazy = function(f) {
    return y(f) === m;
  }, we.isMemo = function(f) {
    return y(f) === p;
  }, we.isPortal = function(f) {
    return y(f) === t;
  }, we.isProfiler = function(f) {
    return y(f) === i;
  }, we.isStrictMode = function(f) {
    return y(f) === r;
  }, we.isSuspense = function(f) {
    return y(f) === c;
  }, we.isSuspenseList = function(f) {
    return y(f) === u;
  }, we.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === i || f === r || f === c || f === u || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === p || f.$$typeof === a || f.$$typeof === s || f.$$typeof === l || f.$$typeof === g || f.getModuleId !== void 0);
  }, we.typeOf = y, we;
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
var ji;
function zc() {
  return ji || (ji = 1, process.env.NODE_ENV !== "production" && function() {
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
          case n:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    Ee.ContextConsumer = a, Ee.ContextProvider = l, Ee.Element = t, Ee.ForwardRef = c, Ee.Fragment = r, Ee.Lazy = h, Ee.Memo = m, Ee.Portal = n, Ee.Profiler = s, Ee.StrictMode = i, Ee.Suspense = u, Ee.SuspenseList = p, Ee.isContextConsumer = function(f) {
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
      return e(f) === h;
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
      return typeof f == "string" || typeof f == "function" || f === r || f === s || f === i || f === u || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === m || f.$$typeof === l || f.$$typeof === a || f.$$typeof === c || f.$$typeof === y || f.getModuleId !== void 0);
    }, Ee.typeOf = e;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Nr.exports = Uc() : Nr.exports = zc();
var Gt = Nr.exports;
function bt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ta(e) {
  if (/* @__PURE__ */ x.isValidElement(e) || Gt.isValidElementType(e) || !bt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ta(e[n]);
  }), t;
}
function Le(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return bt(e) && bt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ x.isValidElement(t[i]) || Gt.isValidElementType(t[i]) ? r[i] = t[i] : bt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && bt(e[i]) ? r[i] = Le(e[i], t[i], n) : n.clone ? r[i] = bt(t[i]) ? ta(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
function Bo(e, t) {
  return t ? Le(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Vc = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, jt = Vc;
function Li(e, t) {
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
function Wc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Hc(e, t) {
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
function qc(e) {
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
const An = {
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
}, _i = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${An[e]}px)`
}, Yc = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : An[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function lt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || _i;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || _i;
    return Object.keys(t).reduce((a, l) => {
      if (Wc(s.keys, l)) {
        const c = Hc(r.containerQueries ? r : Yc, l);
        c && (a[c] = n(t[l], l));
      } else if (Object.keys(s.values || An).includes(l)) {
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
function oa(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function Rr(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Gc(e, ...t) {
  const n = oa(e), r = [n, ...t].reduce((i, s) => Le(i, s), {});
  return Rr(Object.keys(n), r);
}
function Kc(e, t) {
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
  const r = n || Kc(e, t), i = Object.keys(r);
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
function Me(e) {
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
      let h = xn(u, i, m);
      return m === h && typeof m == "string" && (h = xn(u, i, `${t}${m === "default" ? "" : K(m)}`, m)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: jt
  } : {}, s.filterProps = [t], s;
}
function Xc(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Qc = {
  m: "margin",
  p: "padding"
}, Jc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Fi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Zc = Xc((e) => {
  if (e.length > 2)
    if (Fi[e])
      e = Fi[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Qc[t], i = Jc[n] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), Bn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], jn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], eu = [...Bn, ...jn];
function Go(e, t, n, r) {
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
function Ln(e) {
  return Go(e, "spacing", 8, "spacing");
}
function Kt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function tu(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Kt(t, n), r), {});
}
function ou(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = Zc(n), s = tu(i, r), a = e[n];
  return lt(e, a, s);
}
function na(e, t) {
  const n = Ln(e.theme);
  return Object.keys(e).map((r) => ou(e, t, r, n)).reduce(Bo, {});
}
function ke(e) {
  return na(e, Bn);
}
ke.propTypes = process.env.NODE_ENV !== "production" ? Bn.reduce((e, t) => (e[t] = jt, e), {}) : {};
ke.filterProps = Bn;
function Pe(e) {
  return na(e, jn);
}
Pe.propTypes = process.env.NODE_ENV !== "production" ? jn.reduce((e, t) => (e[t] = jt, e), {}) : {};
Pe.filterProps = jn;
process.env.NODE_ENV !== "production" && eu.reduce((e, t) => (e[t] = jt, e), {});
function _n(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, s) => t[s] ? Bo(i, t[s](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Qe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ot(e, t) {
  return Me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const nu = ot("border", Qe), ru = ot("borderTop", Qe), iu = ot("borderRight", Qe), su = ot("borderBottom", Qe), au = ot("borderLeft", Qe), lu = ot("borderColor"), cu = ot("borderTopColor"), uu = ot("borderRightColor"), pu = ot("borderBottomColor"), du = ot("borderLeftColor"), fu = ot("outline", Qe), mu = ot("outlineColor"), Fn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Go(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Kt(t, r)
    });
    return lt(e, e.borderRadius, n);
  }
  return null;
};
Fn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: jt
} : {};
Fn.filterProps = ["borderRadius"];
_n(nu, ru, iu, su, au, lu, cu, uu, pu, du, Fn, fu, mu);
const Un = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Go(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Kt(t, r)
    });
    return lt(e, e.gap, n);
  }
  return null;
};
Un.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: jt
} : {};
Un.filterProps = ["gap"];
const zn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Go(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Kt(t, r)
    });
    return lt(e, e.columnGap, n);
  }
  return null;
};
zn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: jt
} : {};
zn.filterProps = ["columnGap"];
const Vn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Go(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Kt(t, r)
    });
    return lt(e, e.rowGap, n);
  }
  return null;
};
Vn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: jt
} : {};
Vn.filterProps = ["rowGap"];
const hu = Me({
  prop: "gridColumn"
}), gu = Me({
  prop: "gridRow"
}), bu = Me({
  prop: "gridAutoFlow"
}), yu = Me({
  prop: "gridAutoColumns"
}), vu = Me({
  prop: "gridAutoRows"
}), xu = Me({
  prop: "gridTemplateColumns"
}), Tu = Me({
  prop: "gridTemplateRows"
}), wu = Me({
  prop: "gridTemplateAreas"
}), Eu = Me({
  prop: "gridArea"
});
_n(Un, zn, Vn, hu, gu, bu, yu, vu, xu, Tu, wu, Eu);
function lo(e, t) {
  return t === "grey" ? t : e;
}
const Ou = Me({
  prop: "color",
  themeKey: "palette",
  transform: lo
}), Cu = Me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: lo
}), Su = Me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: lo
});
_n(Ou, Cu, Su);
function qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Nu = Me({
  prop: "width",
  transform: qe
}), Kr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, s, a, l, c;
      const r = ((a = (s = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[n]) || An[n];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: qe(n)
      };
    };
    return lt(e, e.maxWidth, t);
  }
  return null;
};
Kr.filterProps = ["maxWidth"];
const Ru = Me({
  prop: "minWidth",
  transform: qe
}), ku = Me({
  prop: "height",
  transform: qe
}), Pu = Me({
  prop: "maxHeight",
  transform: qe
}), $u = Me({
  prop: "minHeight",
  transform: qe
});
Me({
  prop: "size",
  cssProperty: "width",
  transform: qe
});
Me({
  prop: "size",
  cssProperty: "height",
  transform: qe
});
const Iu = Me({
  prop: "boxSizing"
});
_n(Nu, Kr, Ru, ku, Pu, $u, Iu);
const Mu = {
  // borders
  border: {
    themeKey: "borders",
    transform: Qe
  },
  borderTop: {
    themeKey: "borders",
    transform: Qe
  },
  borderRight: {
    themeKey: "borders",
    transform: Qe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Qe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Qe
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
    transform: Qe
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
    transform: lo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: lo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: lo
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
    style: Un
  },
  rowGap: {
    style: Vn
  },
  columnGap: {
    style: zn
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
    transform: qe
  },
  maxWidth: {
    style: Kr
  },
  minWidth: {
    transform: qe
  },
  height: {
    transform: qe
  },
  maxHeight: {
    transform: qe
  },
  minHeight: {
    transform: qe
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
}, Ko = Mu;
function Au(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Du(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bu() {
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
    const h = Dn(i, u) || {};
    return m ? m(a) : lt(a, r, (y) => {
      let f = xn(h, p, y);
      return y === f && typeof y == "string" && (f = xn(h, p, `${n}${y === "default" ? "" : K(y)}`, y)), c === !1 ? f : {
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
    const a = i.unstable_sxConfig ?? Ko;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const p = oa(i.breakpoints), m = Object.keys(p);
      let h = p;
      return Object.keys(u).forEach((g) => {
        const y = Du(u[g], i);
        if (y != null)
          if (typeof y == "object")
            if (a[g])
              h = Bo(h, e(g, y, i, a));
            else {
              const f = lt({
                theme: i
              }, y, (v) => ({
                [g]: v
              }));
              Au(f, y) ? h[g] = t({
                sx: y,
                theme: i,
                nested: !0
              }) : h = Bo(h, f);
            }
          else
            h = Bo(h, e(g, y, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": Li(i, Rr(m, h))
      } : Li(i, Rr(m, h));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const ra = Bu();
ra.filterProps = ["sx"];
const co = ra, ju = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Ko;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function Xr(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: i
  } = ju(n);
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
function Lu(e) {
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
var _u = {
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
function Fu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Uu = !0, Ui = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, zu = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Vu = /[A-Z]|^ms/g, ia = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qr = function(t) {
  return t.charCodeAt(1) === 45;
}, zi = function(t) {
  return t != null && typeof t != "boolean";
}, hr = /* @__PURE__ */ Fu(function(e) {
  return Qr(e) ? e : e.replace(Vu, "-$&").toLowerCase();
}), Tn = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ia, function(r, i, s) {
          return ht = {
            name: i,
            styles: s,
            next: ht
          }, i;
        });
  }
  return _u[t] !== 1 && !Qr(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
{
  var Wu = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Hu = ["normal", "none", "initial", "inherit", "unset"], qu = Tn, Yu = /^-ms-/, Gu = /-(.)/g, Vi = {};
  Tn = function(t, n) {
    if (t === "content" && (typeof n != "string" || Hu.indexOf(n) === -1 && !Wu.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = qu(t, n);
    return r !== "" && !Qr(t) && t.indexOf("-") !== -1 && Vi[t] === void 0 && (Vi[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Yu, "ms-").replace(Gu, function(i, s) {
      return s.toUpperCase();
    }) + "?")), r;
  };
}
var sa = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Uo(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0) {
    if (String(r) === "NO_COMPONENT_SELECTOR")
      throw new Error(sa);
    return r;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return ht = {
          name: i.name,
          styles: i.styles,
          next: ht
        }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            ht = {
              name: a.name,
              styles: a.styles,
              next: ht
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return Ku(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = ht, u = n(e);
        return ht = c, Uo(e, t, u);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      {
        var p = [], m = n.replace(ia, function(y, f, v) {
          var E = "animation" + p.length;
          return p.push("const " + E + " = keyframes`" + v.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + E + "}";
        });
        p.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(p, ["`" + m + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

css\`` + m + "`");
      }
      break;
  }
  var h = n;
  if (t == null)
    return h;
  var g = t[h];
  return g !== void 0 ? g : h;
}
function Ku(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Uo(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : zi(l) && (r += hr(s) + ":" + Tn(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Uu)
          throw new Error(sa);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            zi(a[c]) && (r += hr(s) + ":" + Tn(s, a[c]) + ";");
        else {
          var u = Uo(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += hr(s) + ":" + u + ";";
              break;
            }
            default:
              s === "undefined" && console.error(zu), r += s + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Wi = /label:\s*([^\s;{]+)\s*(;|$)/g, ht;
function Xu(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  ht = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, i += Uo(n, t, s);
  else {
    var a = s;
    a[0] === void 0 && console.error(Ui), i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += Uo(n, t, e[l]), r) {
      var c = s;
      c[l] === void 0 && console.error(Ui), i += c[l];
    }
  Wi.lastIndex = 0;
  for (var u = "", p; (p = Wi.exec(i)) !== null; )
    u += "-" + p[1];
  var m = Lu(i) + u;
  {
    var h = {
      name: m,
      styles: i,
      next: ht,
      toString: function() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return h;
  }
}
function Qu(e) {
  return e == null || Object.keys(e).length === 0;
}
function aa(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ L(wc, {
    styles: typeof t == "function" ? (i) => t(Qu(i) ? n : i) : t
  });
}
process.env.NODE_ENV !== "production" && (aa.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v7.3.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function la(e, t) {
  const n = Tc(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function Ju(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Hi = [];
function At(e) {
  return Hi[0] = e, Xu(Hi);
}
const Zu = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function ep(e) {
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
  } = e, s = Zu(t), a = Object.keys(s);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function u(h, g) {
    const y = a.indexOf(g);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : g) - r / 100}${n})`;
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
    unit: n,
    ...i
  };
}
const tp = {
  borderRadius: 4
}, op = tp;
function ca(e = 8, t = Ln({
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
function np(e, t) {
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
  } = e, l = ep(n), c = ca(i);
  let u = Le({
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
      ...op,
      ...s
    }
  }, a);
  return u = qc(u), u.applyStyles = np, u = t.reduce((p, m) => Le(p, m), u), u.unstable_sxConfig = {
    ...Ko,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return co({
      sx: m,
      theme: this
    });
  }, u;
}
function rp(e) {
  return Object.keys(e).length === 0;
}
function ua(e = null) {
  const t = x.useContext(Ec);
  return !t || rp(t) ? e : t;
}
const ip = Wn();
function Hn(e = ip) {
  return ua(e);
}
function gr(e) {
  const t = At(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function pa({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Hn(n), i = t && r[t] || r;
  let s = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(s) ? s = s.map((a) => gr(typeof a == "function" ? a(i) : a)) : s = gr(s)), /* @__PURE__ */ L(aa, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (pa.propTypes = {
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
function sp(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, s = la("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(co);
  return /* @__PURE__ */ x.forwardRef(function(c, u) {
    const p = Hn(n), {
      className: m,
      component: h = "div",
      ...g
    } = Xr(c);
    return /* @__PURE__ */ L(s, {
      as: h,
      ref: u,
      className: ie(m, i ? i(r) : r),
      theme: t && p[t] || p,
      ...g
    });
  });
}
const ap = {
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
  const r = ap[t];
  return r ? `${n}-${r}` : `${Qs.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ue(e, i, n);
  }), r;
}
function da(e, t = "") {
  return e.displayName || e.name || t;
}
function qi(e, t, n) {
  const r = da(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function lp(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return da(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Gt.ForwardRef:
          return qi(e, e.render, "ForwardRef");
        case Gt.Memo:
          return qi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function fa(e) {
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
const cp = Wn();
function br(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ht(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function up(e) {
  return e ? (t, n) => n[e] : null;
}
function pp(e, t, n) {
  e.theme = mp(e.theme) ? n : e.theme[t] || e.theme;
}
function bn(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((i) => bn(e, i, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let i;
    if (r.isProcessed)
      i = n ? Ht(r.style, n) : r.style;
    else {
      const {
        variants: s,
        ...a
      } = r;
      i = n ? Ht(At(a), n) : a;
    }
    return ma(e, r.variants, [i], n);
  }
  return r != null && r.isProcessed ? n ? Ht(At(r.style), n) : r.style : n ? Ht(At(r), n) : r;
}
function ma(e, t, n = [], r = void 0) {
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
      }), n.push(r ? Ht(At(l.style(i)), r) : l.style(i))) : n.push(r ? Ht(At(l.style), r) : l.style);
    }
  return n;
}
function ha(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = cp,
    rootShouldForwardProp: r = br,
    slotShouldForwardProp: i = br
  } = e;
  function s(l) {
    pp(l, t, n);
  }
  return (l, c = {}) => {
    Ju(l, (O) => O.filter(($) => $ !== co));
    const {
      name: u,
      slot: p,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = up(ga(p)),
      ...y
    } = c, f = u && u.startsWith("Mui") || p ? "components" : "custom", v = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), E = h || !1;
    let C = br;
    p === "Root" || p === "root" ? C = r : p ? C = i : hp(l) && (C = void 0);
    const w = la(l, {
      shouldForwardProp: C,
      label: fp(u, p),
      ...y
    }), b = (O) => {
      if (O.__emotion_real === O)
        return O;
      if (typeof O == "function")
        return function(I) {
          return bn(I, O, I.theme.modularCssLayers ? f : void 0);
        };
      if (bt(O)) {
        const $ = fa(O);
        return function(M) {
          return $.variants ? bn(M, $, M.theme.modularCssLayers ? f : void 0) : M.theme.modularCssLayers ? Ht($.style, f) : $.style;
        };
      }
      return O;
    }, T = (...O) => {
      const $ = [], I = O.map(b), M = [];
      if ($.push(s), u && g && M.push(function(N) {
        var _, z;
        const R = (z = (_ = N.theme.components) == null ? void 0 : _[u]) == null ? void 0 : z.styleOverrides;
        if (!R)
          return null;
        const P = {};
        for (const A in R)
          P[A] = bn(N, R[A], N.theme.modularCssLayers ? "theme" : void 0);
        return g(N, P);
      }), u && !v && M.push(function(N) {
        var P, _;
        const S = N.theme, R = (_ = (P = S == null ? void 0 : S.components) == null ? void 0 : P[u]) == null ? void 0 : _.variants;
        return R ? ma(N, R, [], N.theme.modularCssLayers ? "theme" : void 0) : null;
      }), E || M.push(co), Array.isArray(I[0])) {
        const d = I.shift(), N = new Array($.length).fill(""), S = new Array(M.length).fill("");
        let R;
        R = [...N, ...d, ...S], R.raw = [...N, ...d.raw, ...S], $.unshift(R);
      }
      const F = [...$, ...I, ...M], j = w(...F);
      return l.muiName && (j.muiName = l.muiName), process.env.NODE_ENV !== "production" && (j.displayName = dp(u, p, l)), j;
    };
    return w.withConfig && (T.withConfig = w.withConfig), T;
  };
}
function dp(e, t, n) {
  return e ? `${e}${K(t || "")}` : `Styled(${lp(n)})`;
}
function fp(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${ga(t || "Root")}`), n;
}
function mp(e) {
  for (const t in e)
    return !1;
  return !0;
}
function hp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ga(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const gp = ha(), bp = gp;
function zo(e, t, n = !1) {
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
              r[s][u] = zo(a[u], l[u], n);
            }
        }
      } else
        s === "className" && n && t.className ? r.className = ie(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : s === "style" && n && t.style ? r.style = {
          ...e == null ? void 0 : e.style,
          ...t == null ? void 0 : t.style
        } : r[s] === void 0 && (r[s] = e[s]);
    }
  return r;
}
function ba(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : zo(t.components[n].defaultProps, r);
}
function yp({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = Hn(n);
  return r && (i = i[r] || i), ba({
    theme: i,
    name: t,
    props: e
  });
}
const vp = typeof window < "u" ? x.useLayoutEffect : x.useEffect, ct = vp;
function xp(e, t, n, r, i) {
  const [s, a] = x.useState(() => i && n ? n(e).matches : r ? r(e).matches : t);
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
const Tp = {
  ...x
}, ya = Tp.useSyncExternalStore;
function wp(e, t, n, r, i) {
  const s = x.useCallback(() => t, [t]), a = x.useMemo(() => {
    if (i && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: p
      } = r(e);
      return () => p;
    }
    return s;
  }, [s, e, r, i, n]), [l, c] = x.useMemo(() => {
    if (n === null)
      return [s, () => () => {
      }];
    const p = n(e);
    return [() => p.matches, (m) => (p.addEventListener("change", m), () => {
      p.removeEventListener("change", m);
    })];
  }, [s, n, e]);
  return ya(c, l, a);
}
function Ep(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, i = {}) {
    let s = ua();
    s && t && (s = s[t] || s);
    const a = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: l = !1,
      matchMedia: c = a ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: p = !1
    } = ba({
      name: "MuiUseMediaQuery",
      props: i,
      theme: s
    });
    process.env.NODE_ENV !== "production" && typeof r == "function" && s === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let m = typeof r == "function" ? r(s) : r;
    m = m.replace(/^@media( ?)/m, ""), m.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`));
    const g = (ya !== void 0 ? wp : xp)(m, l, c, u, p);
    return process.env.NODE_ENV !== "production" && x.useDebugValue({
      query: m,
      match: g
    }), g;
  };
}
function Op(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Jr(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Op(e, t, n);
}
function Cp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Bt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Bt(Cp(e));
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
const Sp = (e) => {
  const t = Bt(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, $o = (e, t) => {
  try {
    return Sp(e);
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
function va(e) {
  e = Bt(e);
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
function kr(e) {
  e = Bt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Bt(va(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Yi(e, t) {
  const n = kr(e), r = kr(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function wn(e, t) {
  return e = Bt(e), t = Jr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, qn(e);
}
function Ft(e, t, n) {
  try {
    return wn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Yn(e, t) {
  if (e = Bt(e), t = Jr(t), e.type.includes("hsl"))
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
  if (e = Bt(e), t = Jr(t), e.type.includes("hsl"))
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
function Np(e, t = 0.15) {
  return kr(e) > 0.5 ? Yn(e, t) : Gn(e, t);
}
function ln(e, t, n) {
  try {
    return Np(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
const Rp = "exact-prop: ​";
function xa(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Rp]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const kp = /* @__PURE__ */ x.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const Kn = () => x.useContext(kp) ?? !1, Pp = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (o.node, o.object);
function $p(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? zo(i.defaultProps, r, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? zo(i, r, t.components.mergeClassNameAndStyle) : r;
}
function Ip({
  props: e,
  name: t
}) {
  const n = x.useContext(Pp);
  return $p({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Gi = 0;
function Mp(e) {
  const [t, n] = x.useState(e), r = e || t;
  return x.useEffect(() => {
    t == null && (Gi += 1, n(`mui-${Gi}`));
  }, [t]), r;
}
const Ap = {
  ...x
}, Ki = Ap.useId;
function Xo(e) {
  if (Ki !== void 0) {
    const t = Ki();
    return e ?? t;
  }
  return Mp(e);
}
const Xi = {
  theme: void 0
};
function Dp(e) {
  let t, n;
  return function(i) {
    let s = t;
    return (s === void 0 || i.theme !== n) && (Xi.theme = i.theme, s = fa(e(Xi)), t = s, n = i.theme), s;
  };
}
function Bp(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Qi = (e, t, n, r = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = n : i && typeof i == "object" && (i[s] = n) : i && typeof i == "object" && (i[s] || (i[s] = r.includes(s) ? [] : {}), i = i[s]);
  });
}, jp = (e, t, n) => {
  function r(i, s = [], a = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  r(e);
}, Lp = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function yr(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, s = {}, a = {};
  return jp(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const p = `--${n ? `${n}-` : ""}${l.join("-")}`, m = Lp(l, c);
        Object.assign(i, {
          [p]: m
        }), Qi(s, l, `var(${p})`, u), Qi(a, l, `var(${p}, ${m})`, u);
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
function _p(e, t = {}) {
  const {
    getSelector: n = E,
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
  } = yr(u, t);
  let g = h;
  const y = {}, {
    [c]: f,
    ...v
  } = a;
  if (Object.entries(v || {}).forEach(([b, T]) => {
    const {
      vars: O,
      css: $,
      varsWithDefaults: I
    } = yr(T, t);
    g = Le(g, I), y[b] = {
      css: $,
      vars: O
    };
  }), f) {
    const {
      css: b,
      vars: T,
      varsWithDefaults: O
    } = yr(f, t);
    g = Le(g, O), y[c] = {
      css: b,
      vars: T
    };
  }
  function E(b, T) {
    var $, I;
    let O = i;
    if (i === "class" && (O = ".%s"), i === "data" && (O = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (O = `[${i}="%s"]`), b) {
      if (O === "media")
        return e.defaultColorScheme === b ? ":root" : {
          [`@media (prefers-color-scheme: ${((I = ($ = a[b]) == null ? void 0 : $.palette) == null ? void 0 : I.mode) || b})`]: {
            ":root": T
          }
        };
      if (O)
        return e.defaultColorScheme === b ? `:root, ${O.replace("%s", String(b))}` : O.replace("%s", String(b));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let b = {
        ...p
      };
      return Object.entries(y).forEach(([, {
        vars: T
      }]) => {
        b = Le(b, T);
      }), b;
    },
    generateStyleSheets: () => {
      var M, F;
      const b = [], T = e.defaultColorScheme || "light";
      function O(j, d) {
        Object.keys(d).length && b.push(typeof j == "string" ? {
          [j]: {
            ...d
          }
        } : j);
      }
      O(n(void 0, {
        ...m
      }), m);
      const {
        [T]: $,
        ...I
      } = y;
      if ($) {
        const {
          css: j
        } = $, d = (F = (M = a[T]) == null ? void 0 : M.palette) == null ? void 0 : F.mode, N = !r && d ? {
          colorScheme: d,
          ...j
        } : {
          ...j
        };
        O(n(T, {
          ...N
        }), N);
      }
      return Object.entries(I).forEach(([j, {
        css: d
      }]) => {
        var R, P;
        const N = (P = (R = a[j]) == null ? void 0 : R.palette) == null ? void 0 : P.mode, S = !r && N ? {
          colorScheme: N,
          ...d
        } : {
          ...d
        };
        O(n(j, {
          ...S
        }), S);
      }), s && b.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), b;
    }
  };
}
function Fp(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function vr(e, t) {
  var n, r, i;
  return /* @__PURE__ */ x.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
const Up = Wn(), zp = bp("div", {
  name: "MuiStack",
  slot: "Root"
});
function Vp(e) {
  return yp({
    props: e,
    name: "MuiStack",
    defaultTheme: Up
  });
}
function Wp(e, t) {
  const n = x.Children.toArray(e).filter(Boolean);
  return n.reduce((r, i, s) => (r.push(i), s < n.length - 1 && r.push(/* @__PURE__ */ x.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const Hp = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], qp = ({
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
    const r = Ln(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = mr({
      values: e.direction,
      base: i
    }), a = mr({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, p) => {
      if (!s[c]) {
        const h = u > 0 ? s[p[u - 1]] : "column";
        s[c] = h;
      }
    }), n = Le(n, lt({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: Kt(r, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Hp(u ? s[u] : e.direction)}`]: Kt(r, c)
      }
    }));
  }
  return n = Gc(t.breakpoints, n), n;
};
function Yp(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = zp,
    useThemeProps: n = Vp,
    componentName: r = "MuiStack"
  } = e, i = () => de({
    root: ["root"]
  }, (c) => ue(r, c), {}), s = t(qp), a = /* @__PURE__ */ x.forwardRef(function(c, u) {
    const p = n(c), m = Xr(p), {
      component: h = "div",
      direction: g = "column",
      spacing: y = 0,
      divider: f,
      children: v,
      className: E,
      useFlexGap: C = !1,
      ...w
    } = m, b = {
      direction: g,
      spacing: y,
      useFlexGap: C
    }, T = i();
    return /* @__PURE__ */ L(s, {
      as: h,
      ownerState: b,
      ref: u,
      className: ie(T.root, E),
      ...w,
      children: f ? Wp(v, f) : v
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
const Gp = {
  black: "#000",
  white: "#fff"
}, Vo = Gp, Kp = {
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
}, Xp = Kp, Qp = {
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
}, Zt = Qp, Jp = {
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
}, eo = Jp, Zp = {
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
}, Oo = Zp, ed = {
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
}, to = ed, td = {
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
}, oo = td, od = {
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
}, no = od;
function Ta() {
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
      paper: Vo.white,
      default: Vo.white
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
const wa = Ta();
function Ea() {
  return {
    text: {
      primary: Vo.white,
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
      active: Vo.white,
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
const Pr = Ea();
function Ji(e, t, n, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Gn(e.main, i) : t === "dark" && (e.dark = Yn(e.main, s)));
}
function Zi(e, t, n, r, i) {
  const s = i.light || i, a = i.dark || i * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function nd(e = "light") {
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
function rd(e = "light") {
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
function id(e = "light") {
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
function sd(e = "light") {
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
function ad(e = "light") {
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
function ld(e = "light") {
  return e === "dark" ? {
    main: Oo[400],
    light: Oo[300],
    dark: Oo[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Oo[500],
    dark: Oo[900]
  };
}
function cd(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Zr(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: i,
    ...s
  } = e, a = e.primary || nd(t), l = e.secondary || rd(t), c = e.error || id(t), u = e.info || sd(t), p = e.success || ad(t), m = e.warning || ld(t);
  function h(v) {
    if (i)
      return cd(v);
    const E = Yi(v, Pr.text.primary) >= n ? Pr.text.primary : wa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = Yi(v, E);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${E} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const g = ({
    color: v,
    name: E,
    mainShade: C = 500,
    lightShade: w = 300,
    darkShade: b = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[C] && (v.main = v[C]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : vt(11, E ? ` (${E})` : "", C));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : vt(12, E ? ` (${E})` : "", JSON.stringify(v.main)));
    return i ? (Zi(i, v, "light", w, r), Zi(i, v, "dark", b, r)) : (Ji(v, "light", w, r), Ji(v, "dark", b, r)), v.contrastText || (v.contrastText = h(v.main)), v;
  };
  let y;
  return t === "light" ? y = Ta() : t === "dark" && (y = Ea()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Le({
    // A collection of common colors.
    common: {
      ...Vo
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
    grey: Xp,
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
    tonalOffset: r,
    // The light and dark mode object.
    ...y
  }, s);
}
function ud(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, s] = r;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function pd(e, t) {
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
function dd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const es = {
  textTransform: "uppercase"
}, ts = '"Roboto", "Helvetica", "Arial", sans-serif';
function fd(e, t) {
  const {
    fontFamily: n = ts,
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
  const h = r / 14, g = p || ((v) => `${v / c * h}rem`), y = (v, E, C, w, b) => ({
    fontFamily: n,
    fontWeight: v,
    fontSize: g(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === ts ? {
      letterSpacing: `${dd(w / E)}em`
    } : {},
    ...b,
    ...u
  }), f = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, es),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, es),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Le({
    htmlFontSize: c,
    pxToRem: g,
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
const md = 0.2, hd = 0.14, gd = 0.12;
function Se(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${md})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${hd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${gd})`].join(",");
}
const bd = ["none", Se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], yd = bd, vd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, xd = {
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
function os(e) {
  return `${Math.round(e)}ms`;
}
function Td(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function wd(e) {
  const t = {
    ...vd,
    ...e.easing
  }, n = {
    ...xd,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Td,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const p = (h) => typeof h == "string", m = (h) => !Number.isNaN(parseFloat(h));
        !p(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(l) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !p(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((p) => `${p} ${typeof a == "string" ? a : os(a)} ${l} ${typeof c == "string" ? c : os(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Ed = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Od = Ed;
function Cd(e) {
  return bt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Oa(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let s = 0; s < i.length; s++) {
      const [a, l] = i[s];
      !Cd(l) || a.startsWith("unstable_") ? delete r[a] : bt(l) && (r[a] = {
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
function ns(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Sd = (e) => {
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
function Nd(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : wn(t, Sd(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${ns(n)})` : Gn(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${ns(n)})` : Yn(t, n);
    }
  });
}
function $r(e = {}, ...t) {
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
  const m = Zr({
    ...s,
    colorSpace: u
  }), h = Wn(e);
  let g = Le(h, {
    mixins: pd(h.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: yd.slice(),
    typography: fd(m, l),
    transitions: wd(a),
    zIndex: {
      ...Od
    }
  });
  if (g = Le(g, p), g = t.reduce((y, f) => Le(y, f), g), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (v, E) => {
      let C;
      for (C in v) {
        const w = v[C];
        if (y.includes(C) && Object.keys(w).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const b = ue("", C);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${b}' syntax:`, JSON.stringify({
              root: {
                [`&.${b}`]: w
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[C] = {};
        }
      }
    };
    Object.keys(g.components).forEach((v) => {
      const E = g.components[v].styleOverrides;
      E && v.startsWith("Mui") && f(E, v);
    });
  }
  return g.unstable_sxConfig = {
    ...Ko,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, g.unstable_sx = function(f) {
    return co({
      sx: f,
      theme: this
    });
  }, g.toRuntimeSource = Oa, Nd(g), g;
}
function Ir(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Rd = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Ir(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Ca(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Sa(e) {
  return e === "dark" ? Rd : [];
}
function kd(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: i,
    ...s
  } = e, a = Zr({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...Ca(a.mode),
      ...n
    },
    overlays: r || Sa(a.mode),
    ...s
  };
}
function Pd(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const $d = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Id = $d, Md = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let s = i;
  if (i === "class" && (s = ".%s"), i === "data" && (s = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Id(e.cssVarPrefix).forEach((l) => {
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
function Ad(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function D(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Io(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : va(e);
}
function Ct(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = $o(Io(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Dd(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ft = (e) => {
  try {
    return e();
  } catch {
  }
}, Bd = (e = "mui") => Bp(e);
function xr(e, t, n, r, i) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const s = i === "dark" ? "dark" : "light";
  if (!r) {
    t[i] = kd({
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
  } = $r({
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
      ...Ca(s),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || Sa(s)
  }, l;
}
function jd(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: l = Pd,
    colorSchemeSelector: c = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...p
  } = e, m = Object.keys(n)[0], h = r || (n.light && m !== "light" ? "light" : m), g = Bd(s), {
    [h]: y,
    light: f,
    dark: v,
    ...E
  } = n, C = {
    ...E
  };
  let w = y;
  if ((h === "dark" && !("dark" in n) || h === "light" && !("light" in n)) && (w = !0), !w)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : vt(21, h));
  let b;
  a && (b = "oklch");
  const T = xr(b, C, w, p, h);
  f && !C.light && xr(b, C, f, void 0, "light"), v && !C.dark && xr(b, C, v, void 0, "dark");
  let O = {
    defaultColorScheme: h,
    ...T,
    cssVarPrefix: s,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: g,
    colorSchemes: C,
    font: {
      ...ud(T.typography),
      ...T.font
    },
    spacing: Dd(p.spacing)
  };
  Object.keys(O.colorSchemes).forEach((j) => {
    const d = O.colorSchemes[j].palette, N = (R) => {
      const P = R.split("-"), _ = P[1], z = P[2];
      return g(R, d[_][z]);
    };
    d.mode === "light" && (D(d.common, "background", "#fff"), D(d.common, "onBackground", "#000")), d.mode === "dark" && (D(d.common, "background", "#000"), D(d.common, "onBackground", "#fff"));
    function S(R, P, _) {
      if (b) {
        let z;
        return R === Ft && (z = `transparent ${((1 - _) * 100).toFixed(0)}%`), R === ye && (z = `#000 ${(_ * 100).toFixed(0)}%`), R === ve && (z = `#fff ${(_ * 100).toFixed(0)}%`), `color-mix(in ${b}, ${P}, ${z})`;
      }
      return R(P, _);
    }
    if (Ad(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      D(d.Alert, "errorColor", S(ye, d.error.light, 0.6)), D(d.Alert, "infoColor", S(ye, d.info.light, 0.6)), D(d.Alert, "successColor", S(ye, d.success.light, 0.6)), D(d.Alert, "warningColor", S(ye, d.warning.light, 0.6)), D(d.Alert, "errorFilledBg", N("palette-error-main")), D(d.Alert, "infoFilledBg", N("palette-info-main")), D(d.Alert, "successFilledBg", N("palette-success-main")), D(d.Alert, "warningFilledBg", N("palette-warning-main")), D(d.Alert, "errorFilledColor", ft(() => d.getContrastText(d.error.main))), D(d.Alert, "infoFilledColor", ft(() => d.getContrastText(d.info.main))), D(d.Alert, "successFilledColor", ft(() => d.getContrastText(d.success.main))), D(d.Alert, "warningFilledColor", ft(() => d.getContrastText(d.warning.main))), D(d.Alert, "errorStandardBg", S(ve, d.error.light, 0.9)), D(d.Alert, "infoStandardBg", S(ve, d.info.light, 0.9)), D(d.Alert, "successStandardBg", S(ve, d.success.light, 0.9)), D(d.Alert, "warningStandardBg", S(ve, d.warning.light, 0.9)), D(d.Alert, "errorIconColor", N("palette-error-main")), D(d.Alert, "infoIconColor", N("palette-info-main")), D(d.Alert, "successIconColor", N("palette-success-main")), D(d.Alert, "warningIconColor", N("palette-warning-main")), D(d.AppBar, "defaultBg", N("palette-grey-100")), D(d.Avatar, "defaultBg", N("palette-grey-400")), D(d.Button, "inheritContainedBg", N("palette-grey-300")), D(d.Button, "inheritContainedHoverBg", N("palette-grey-A100")), D(d.Chip, "defaultBorder", N("palette-grey-400")), D(d.Chip, "defaultAvatarColor", N("palette-grey-700")), D(d.Chip, "defaultIconColor", N("palette-grey-700")), D(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), D(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), D(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), D(d.LinearProgress, "primaryBg", S(ve, d.primary.main, 0.62)), D(d.LinearProgress, "secondaryBg", S(ve, d.secondary.main, 0.62)), D(d.LinearProgress, "errorBg", S(ve, d.error.main, 0.62)), D(d.LinearProgress, "infoBg", S(ve, d.info.main, 0.62)), D(d.LinearProgress, "successBg", S(ve, d.success.main, 0.62)), D(d.LinearProgress, "warningBg", S(ve, d.warning.main, 0.62)), D(d.Skeleton, "bg", b ? S(Ft, d.text.primary, 0.11) : `rgba(${N("palette-text-primaryChannel")} / 0.11)`), D(d.Slider, "primaryTrack", S(ve, d.primary.main, 0.62)), D(d.Slider, "secondaryTrack", S(ve, d.secondary.main, 0.62)), D(d.Slider, "errorTrack", S(ve, d.error.main, 0.62)), D(d.Slider, "infoTrack", S(ve, d.info.main, 0.62)), D(d.Slider, "successTrack", S(ve, d.success.main, 0.62)), D(d.Slider, "warningTrack", S(ve, d.warning.main, 0.62));
      const R = b ? S(ye, d.background.default, 0.6825) : ln(d.background.default, 0.8);
      D(d.SnackbarContent, "bg", R), D(d.SnackbarContent, "color", ft(() => b ? Pr.text.primary : d.getContrastText(R))), D(d.SpeedDialAction, "fabHoverBg", ln(d.background.paper, 0.15)), D(d.StepConnector, "border", N("palette-grey-400")), D(d.StepContent, "border", N("palette-grey-400")), D(d.Switch, "defaultColor", N("palette-common-white")), D(d.Switch, "defaultDisabledColor", N("palette-grey-100")), D(d.Switch, "primaryDisabledColor", S(ve, d.primary.main, 0.62)), D(d.Switch, "secondaryDisabledColor", S(ve, d.secondary.main, 0.62)), D(d.Switch, "errorDisabledColor", S(ve, d.error.main, 0.62)), D(d.Switch, "infoDisabledColor", S(ve, d.info.main, 0.62)), D(d.Switch, "successDisabledColor", S(ve, d.success.main, 0.62)), D(d.Switch, "warningDisabledColor", S(ve, d.warning.main, 0.62)), D(d.TableCell, "border", S(ve, S(Ft, d.divider, 1), 0.88)), D(d.Tooltip, "bg", S(Ft, d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      D(d.Alert, "errorColor", S(ve, d.error.light, 0.6)), D(d.Alert, "infoColor", S(ve, d.info.light, 0.6)), D(d.Alert, "successColor", S(ve, d.success.light, 0.6)), D(d.Alert, "warningColor", S(ve, d.warning.light, 0.6)), D(d.Alert, "errorFilledBg", N("palette-error-dark")), D(d.Alert, "infoFilledBg", N("palette-info-dark")), D(d.Alert, "successFilledBg", N("palette-success-dark")), D(d.Alert, "warningFilledBg", N("palette-warning-dark")), D(d.Alert, "errorFilledColor", ft(() => d.getContrastText(d.error.dark))), D(d.Alert, "infoFilledColor", ft(() => d.getContrastText(d.info.dark))), D(d.Alert, "successFilledColor", ft(() => d.getContrastText(d.success.dark))), D(d.Alert, "warningFilledColor", ft(() => d.getContrastText(d.warning.dark))), D(d.Alert, "errorStandardBg", S(ye, d.error.light, 0.9)), D(d.Alert, "infoStandardBg", S(ye, d.info.light, 0.9)), D(d.Alert, "successStandardBg", S(ye, d.success.light, 0.9)), D(d.Alert, "warningStandardBg", S(ye, d.warning.light, 0.9)), D(d.Alert, "errorIconColor", N("palette-error-main")), D(d.Alert, "infoIconColor", N("palette-info-main")), D(d.Alert, "successIconColor", N("palette-success-main")), D(d.Alert, "warningIconColor", N("palette-warning-main")), D(d.AppBar, "defaultBg", N("palette-grey-900")), D(d.AppBar, "darkBg", N("palette-background-paper")), D(d.AppBar, "darkColor", N("palette-text-primary")), D(d.Avatar, "defaultBg", N("palette-grey-600")), D(d.Button, "inheritContainedBg", N("palette-grey-800")), D(d.Button, "inheritContainedHoverBg", N("palette-grey-700")), D(d.Chip, "defaultBorder", N("palette-grey-700")), D(d.Chip, "defaultAvatarColor", N("palette-grey-300")), D(d.Chip, "defaultIconColor", N("palette-grey-300")), D(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), D(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), D(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), D(d.LinearProgress, "primaryBg", S(ye, d.primary.main, 0.5)), D(d.LinearProgress, "secondaryBg", S(ye, d.secondary.main, 0.5)), D(d.LinearProgress, "errorBg", S(ye, d.error.main, 0.5)), D(d.LinearProgress, "infoBg", S(ye, d.info.main, 0.5)), D(d.LinearProgress, "successBg", S(ye, d.success.main, 0.5)), D(d.LinearProgress, "warningBg", S(ye, d.warning.main, 0.5)), D(d.Skeleton, "bg", b ? S(Ft, d.text.primary, 0.13) : `rgba(${N("palette-text-primaryChannel")} / 0.13)`), D(d.Slider, "primaryTrack", S(ye, d.primary.main, 0.5)), D(d.Slider, "secondaryTrack", S(ye, d.secondary.main, 0.5)), D(d.Slider, "errorTrack", S(ye, d.error.main, 0.5)), D(d.Slider, "infoTrack", S(ye, d.info.main, 0.5)), D(d.Slider, "successTrack", S(ye, d.success.main, 0.5)), D(d.Slider, "warningTrack", S(ye, d.warning.main, 0.5));
      const R = b ? S(ve, d.background.default, 0.985) : ln(d.background.default, 0.98);
      D(d.SnackbarContent, "bg", R), D(d.SnackbarContent, "color", ft(() => b ? wa.text.primary : d.getContrastText(R))), D(d.SpeedDialAction, "fabHoverBg", ln(d.background.paper, 0.15)), D(d.StepConnector, "border", N("palette-grey-600")), D(d.StepContent, "border", N("palette-grey-600")), D(d.Switch, "defaultColor", N("palette-grey-300")), D(d.Switch, "defaultDisabledColor", N("palette-grey-600")), D(d.Switch, "primaryDisabledColor", S(ye, d.primary.main, 0.55)), D(d.Switch, "secondaryDisabledColor", S(ye, d.secondary.main, 0.55)), D(d.Switch, "errorDisabledColor", S(ye, d.error.main, 0.55)), D(d.Switch, "infoDisabledColor", S(ye, d.info.main, 0.55)), D(d.Switch, "successDisabledColor", S(ye, d.success.main, 0.55)), D(d.Switch, "warningDisabledColor", S(ye, d.warning.main, 0.55)), D(d.TableCell, "border", S(ye, S(Ft, d.divider, 1), 0.68)), D(d.Tooltip, "bg", S(Ft, d.grey[700], 0.92));
    }
    Ct(d.background, "default"), Ct(d.background, "paper"), Ct(d.common, "background"), Ct(d.common, "onBackground"), Ct(d, "divider"), Object.keys(d).forEach((R) => {
      const P = d[R];
      R !== "tonalOffset" && P && typeof P == "object" && (P.main && D(d[R], "mainChannel", $o(Io(P.main))), P.light && D(d[R], "lightChannel", $o(Io(P.light))), P.dark && D(d[R], "darkChannel", $o(Io(P.dark))), P.contrastText && D(d[R], "contrastTextChannel", $o(Io(P.contrastText))), R === "text" && (Ct(d[R], "primary"), Ct(d[R], "secondary")), R === "action" && (P.active && Ct(d[R], "active"), P.selected && Ct(d[R], "selected")));
    });
  }), O = t.reduce((j, d) => Le(j, d), O);
  const $ = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: Md(O),
    enableContrastVars: a
  }, {
    vars: I,
    generateThemeVars: M,
    generateStyleSheets: F
  } = _p(O, $);
  return O.vars = I, Object.entries(O.colorSchemes[O.defaultColorScheme]).forEach(([j, d]) => {
    O[j] = d;
  }), O.generateThemeVars = M, O.generateStyleSheets = F, O.generateSpacing = function() {
    return ca(p.spacing, Ln(this));
  }, O.getColorSchemeSelector = Fp(c), O.spacing = O.generateSpacing(), O.shouldSkipGeneratingVar = l, O.unstable_sxConfig = {
    ...Ko,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, O.unstable_sx = function(d) {
    return co({
      sx: d,
      theme: this
    });
  }, O.toRuntimeSource = Oa, O;
}
function rs(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Zr({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Na(e = {}, ...t) {
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
      return $r(e, ...t);
    let p = n;
    "palette" in e || u[l] && (u[l] !== !0 ? p = u[l].palette : l === "dark" && (p = {
      mode: "dark"
    }));
    const m = $r({
      ...e,
      palette: p
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, rs(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, rs(m, "light", u.light)), m;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), jd({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Ld = Na(), ei = Ld, Qo = "$$material";
function bo() {
  const e = Hn(ei);
  return process.env.NODE_ENV !== "production" && x.useDebugValue(e), e[Qo] || e;
}
function Ra(e) {
  return /* @__PURE__ */ L(pa, {
    ...e,
    defaultTheme: ei,
    themeId: Qo
  });
}
process.env.NODE_ENV !== "production" && (Ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function ka(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const _d = (e) => ka(e) && e !== "classes", Ke = _d, Fd = ha({
  themeId: Qo,
  defaultTheme: ei,
  rootShouldForwardProp: Ke
}), G = Fd;
function Ud(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ L(Ra, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
function zd() {
  return Xr;
}
const Vd = Dp, fe = Vd;
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function me(e) {
  return Ip(e);
}
function Wd(e) {
  return ue("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Hd = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${K(t)}`, `fontSize${K(n)}`]
  };
  return de(i, Wd, r);
}, qd = G("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${K(n.color)}`], t[`fontSize${K(n.fontSize)}`]];
  }
})(fe(({
  theme: e
}) => {
  var t, n, r, i, s, a, l, c, u, p, m, h, g, y;
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
        var v, E;
        return {
          props: {
            color: f
          },
          style: {
            color: (E = (v = (e.vars ?? e).palette) == null ? void 0 : v[f]) == null ? void 0 : E.main
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
})), ti = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  } = r, y = /* @__PURE__ */ x.isValidElement(i) && i.type === "svg", f = {
    ...r,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: h,
    hasSvgAsChild: y
  }, v = {};
  p || (v.viewBox = h);
  const E = Hd(f);
  return /* @__PURE__ */ Ie(qd, {
    as: l,
    className: ie(E.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...v,
    ...g,
    ...y && i.props,
    ownerState: f,
    children: [y ? i.props.children : i, m ? /* @__PURE__ */ L("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (ti.propTypes = {
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
ti.muiName = "SvgIcon";
const is = ti;
function Pt(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ L(is, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = is.muiName, /* @__PURE__ */ x.memo(/* @__PURE__ */ x.forwardRef(n));
}
function oi(e, t = 166) {
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
function Ye(e) {
  return e && e.ownerDocument || document;
}
function ut(e) {
  return Ye(e).defaultView || window;
}
function ss(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Mr(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: i = "value"
  } = e, {
    current: s
  } = x.useRef(t !== void 0), [a, l] = x.useState(n), c = s ? t : a;
  if (process.env.NODE_ENV !== "production") {
    x.useEffect(() => {
      s !== (t !== void 0) && console.error([`MUI: A component is changing the ${s ? "" : "un"}controlled ${i} state of ${r} to be ${s ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [i, r, t]);
    const {
      current: p
    } = x.useRef(n);
    x.useEffect(() => {
      !s && JSON.stringify(n) !== JSON.stringify(p) && console.error([`MUI: A component is changing the default ${i} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(n)]);
  }
  const u = x.useCallback((p) => {
    s || l(p);
  }, []);
  return [c, u];
}
function Rt(e) {
  const t = x.useRef(e);
  return ct(() => {
    t.current = e;
  }), x.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Be(...e) {
  const t = x.useRef(void 0), n = x.useCallback((r) => {
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
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function Yd(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Pa(e, t) {
  if (!e)
    return t;
  function n(a, l) {
    const c = {};
    return Object.keys(l).forEach((u) => {
      Yd(u, l[u]) && typeof a[u] == "function" && (c[u] = (...p) => {
        a[u](...p), l[u](...p);
      });
    }), c;
  }
  if (typeof e == "function" || typeof t == "function")
    return (a) => {
      const l = typeof t == "function" ? t(a) : t, c = typeof e == "function" ? e({
        ...a,
        ...l
      }) : e, u = ie(a == null ? void 0 : a.className, l == null ? void 0 : l.className, c == null ? void 0 : c.className), p = n(c, l);
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
  const r = t, i = n(e, r), s = ie(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
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
const as = Pt(/* @__PURE__ */ L("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"
}), "AccountCircleRounded"), $a = Pt([/* @__PURE__ */ L("path", {
  d: "M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
}, "0"), /* @__PURE__ */ L("path", {
  d: "m20.65 11.65-2.79-2.79c-.32-.32-.86-.1-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
}, "1")], "LogoutRounded"), Gd = Pt(/* @__PURE__ */ L("path", {
  d: "M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
}), "MenuRounded"), Kd = Pt(/* @__PURE__ */ L("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
}), "NotificationsOutlined"), Xd = Pt(/* @__PURE__ */ L("path", {
  d: "M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "SearchRounded");
function Qd(e) {
  return typeof e.main == "string";
}
function Jd(e, t = []) {
  if (!Qd(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function pt(e = []) {
  return ([, t]) => t && Jd(t, e);
}
function Zd(e) {
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
function Ia(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = Zd(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Ma(e, t, n, r) {
  return e[t] === void 0 ? null : Ia(e, t, n, r);
}
function Ar() {
  return null;
}
Ma.isRequired = Ia;
Ar.isRequired = Ar;
const ef = process.env.NODE_ENV === "production" ? Ar : Ma, ni = ef;
function wt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function tf(e) {
  return ue("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const of = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return de(s, tf, i);
}, nf = G("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(fe(({
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
}))), Aa = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var g;
  const r = me({
    props: t,
    name: "MuiPaper"
  }), i = bo(), {
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
  }, h = of(m);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ L(nf, {
    as: a,
    ownerState: m,
    className: ie(h.root, s),
    ref: n,
    ...p,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (g = i.vars.overlays) == null ? void 0 : g[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${wn("#fff", Ir(l))}, ${wn("#fff", Ir(l))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Aa.propTypes = {
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
  elevation: wt(ni, (e) => {
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
const Xn = Aa;
function rf(e) {
  return ue("MuiAppBar", e);
}
ce("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const sf = (e) => {
  const {
    color: t,
    position: n,
    classes: r
  } = e, i = {
    root: ["root", `color${K(t)}`, `position${K(n)}`]
  };
  return de(i, rf, r);
}, ls = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, af = G(Xn, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${K(n.position)}`], t[`color${K(n.color)}`]];
  }
})(fe(({
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
        backgroundColor: e.vars ? ls(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? ls(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
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
}))), Da = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  }, p = sf(u);
  return /* @__PURE__ */ L(af, {
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: ie(p.root, i, l === "fixed" && "mui-fixed"),
    ref: n,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (Da.propTypes = {
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
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 4
   */
  elevation: o.number,
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: o.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: o.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * If `false`, rounded corners are enabled.
   * @default true
   */
  square: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const lf = Da, cf = Pt(/* @__PURE__ */ L("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function uf(e) {
  return ue("MuiAvatar", e);
}
ce("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
function En(e) {
  return typeof e == "string";
}
function Ba(e, t, n) {
  return e === void 0 || En(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function ja(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function La(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function cs(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function _a(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const g = ie(n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), y = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, f = {
      ...n,
      ...i,
      ...r
    };
    return g.length > 0 && (f.className = g), Object.keys(y).length > 0 && (f.style = y), {
      props: f,
      internalRef: void 0
    };
  }
  const a = La({
    ...i,
    ...r
  }), l = cs(r), c = cs(i), u = t(a), p = ie(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), m = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...u,
    ...n,
    ...c,
    ...l
  };
  return p.length > 0 && (h.className = p), Object.keys(m).length > 0 && (h.style = m), {
    props: h,
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
    ...h
  } = s, g = p[e] || r, y = ja(m[e], i), {
    props: {
      component: f,
      ...v
    },
    internalRef: E
  } = _a({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: y
  }), C = Be(E, y == null ? void 0 : y.ref, t.ref), w = e === "root" ? f || u : f, b = Ba(g, {
    ...e === "root" && !u && !p[e] && a,
    ...e !== "root" && !p[e] && a,
    ...v,
    ...w && !l && {
      as: w
    },
    ...w && l && {
      component: w
    },
    ref: C
  }, i);
  return [g, b];
}
const pf = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: r
  } = e;
  return de({
    root: ["root", n, r && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, uf, t);
}, df = G("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
  }
})(fe(({
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
}))), ff = G("img", {
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
}), mf = G(cf, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function hf({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: r
}) {
  const [i, s] = x.useState(!1);
  return x.useEffect(() => {
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
const Fa = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    variant: y = "circular",
    ...f
  } = r;
  let v = null;
  const E = {
    ...r,
    component: l,
    variant: y
  }, C = hf({
    ...p,
    ...typeof u.img == "function" ? u.img(E) : u.img,
    src: h,
    srcSet: g
  }), w = h || g, b = w && C !== "error";
  E.colorDefault = !b, delete E.ownerState;
  const T = pf(E), [O, $] = xe("root", {
    ref: n,
    className: ie(T.root, a),
    elementType: df,
    externalForwardedProps: {
      slots: c,
      slotProps: u,
      component: l,
      ...f
    },
    ownerState: E
  }), [I, M] = xe("img", {
    className: T.img,
    elementType: ff,
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
    ownerState: E
  }), [F, j] = xe("fallback", {
    className: T.fallback,
    elementType: mf,
    externalForwardedProps: {
      slots: c,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: E
  });
  return b ? v = /* @__PURE__ */ L(I, {
    ...M
  }) : s || s === 0 ? v = s : w && i ? v = i[0] : v = /* @__PURE__ */ L(F, {
    ...j
  }), /* @__PURE__ */ L(O, {
    ...$,
    children: v
  });
});
process.env.NODE_ENV !== "production" && (Fa.propTypes = {
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
const Dr = Fa;
function Ua(e) {
  const t = x.useRef({});
  return x.useEffect(() => {
    t.current = e;
  }), t.current;
}
function gf(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: r = 99,
    showZero: i = !1
  } = e, s = Ua({
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
function bf(e) {
  return ue("MuiBadge", e);
}
const yf = ce("MuiBadge", [
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
]), Mt = yf, Tr = 10, wr = 4, vf = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: r,
    overlap: i,
    variant: s,
    classes: a = {}
  } = e, l = {
    root: ["root"],
    badge: ["badge", s, r && "invisible", `anchorOrigin${K(n.vertical)}${K(n.horizontal)}`, `anchorOrigin${K(n.vertical)}${K(n.horizontal)}${K(i)}`, `overlap${K(i)}`, t !== "default" && `color${K(t)}`]
  };
  return de(l, bf, a);
}, xf = G("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), Tf = G("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${K(n.anchorOrigin.vertical)}${K(n.anchorOrigin.horizontal)}${K(n.overlap)}`], n.color !== "default" && t[`color${K(n.color)}`], n.invisible && t.invisible];
  }
})(fe(({
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
      borderRadius: wr,
      height: wr * 2,
      minWidth: wr * 2,
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
      [`&.${Mt.invisible}`]: {
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
      [`&.${Mt.invisible}`]: {
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
      [`&.${Mt.invisible}`]: {
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
      [`&.${Mt.invisible}`]: {
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
      [`&.${Mt.invisible}`]: {
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
      [`&.${Mt.invisible}`]: {
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
      [`&.${Mt.invisible}`]: {
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
      [`&.${Mt.invisible}`]: {
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
function us(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
  };
}
const za = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    max: y = 99,
    badgeContent: f,
    slots: v,
    slotProps: E,
    showZero: C = !1,
    variant: w = "standard",
    ...b
  } = r, {
    badgeContent: T,
    invisible: O,
    max: $,
    displayValue: I
  } = gf({
    max: y,
    invisible: g,
    badgeContent: f,
    showZero: C
  }), M = Ua({
    anchorOrigin: us(i),
    color: h,
    overlap: m,
    variant: w,
    badgeContent: f
  }), F = O || T == null && w !== "dot", {
    color: j = h,
    overlap: d = m,
    anchorOrigin: N,
    variant: S = w
  } = F ? M : r, R = us(N), P = S !== "dot" ? I : void 0, _ = {
    ...r,
    badgeContent: T,
    invisible: F,
    max: $,
    displayValue: P,
    showZero: C,
    anchorOrigin: R,
    color: j,
    overlap: d,
    variant: S
  }, z = vf(_), A = {
    slots: {
      root: (v == null ? void 0 : v.root) ?? c.Root,
      badge: (v == null ? void 0 : v.badge) ?? c.Badge
    },
    slotProps: {
      root: (E == null ? void 0 : E.root) ?? u.root,
      badge: (E == null ? void 0 : E.badge) ?? u.badge
    }
  }, [k, B] = xe("root", {
    elementType: xf,
    externalForwardedProps: {
      ...A,
      ...b
    },
    ownerState: _,
    className: ie(z.root, s),
    ref: n,
    additionalProps: {
      as: l
    }
  }), [q, H] = xe("badge", {
    elementType: Tf,
    externalForwardedProps: A,
    ownerState: _,
    className: z.badge
  });
  return /* @__PURE__ */ Ie(k, {
    ...B,
    children: [p, /* @__PURE__ */ L(q, {
      ...H,
      children: P
    })]
  });
});
process.env.NODE_ENV !== "production" && (za.propTypes = {
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
const Va = za, wf = ce("MuiBox", ["root"]), Ef = wf, Of = Na(), Wa = sp({
  themeId: Qo,
  defaultTheme: Of,
  defaultClassName: Ef.root,
  generateClassName: Qs.generate
});
process.env.NODE_ENV !== "production" && (Wa.propTypes = {
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
const so = Wa;
function Cf(e) {
  return ue("MuiDivider", e);
}
const Sf = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), ps = Sf, Nf = (e) => {
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
  return de({
    root: ["root", t && "absolute", c, s && "light", a === "vertical" && "vertical", i && "flexItem", n && "withChildren", n && a === "vertical" && "withChildrenVertical", l === "right" && a !== "vertical" && "textAlignRight", l === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, Cf, r);
}, Rf = G("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(fe(({
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
}))), kf = G("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(fe(({
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
}))), On = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    ...y
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
  }, v = Nf(f);
  return /* @__PURE__ */ L(Rf, {
    as: c,
    className: ie(v.root, a),
    role: m,
    ref: n,
    ownerState: f,
    "aria-orientation": m === "separator" && (c !== "hr" || l === "vertical") ? l : void 0,
    ...y,
    children: s ? /* @__PURE__ */ L(kf, {
      className: v.wrapper,
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
const Dt = On, Pf = o.oneOfType([o.func, o.object]), dt = Pf;
function $f(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function If(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !$f(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ri = wt(o.elementType, If);
function Cn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const ds = {};
function Ha(e, t) {
  const n = x.useRef(ds);
  return n.current === ds && (n.current = e(t)), n;
}
class Sn {
  constructor() {
    wo(this, "mountEffect", () => {
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
    return new Sn();
  }
  static use() {
    const t = Ha(Sn.create).current, [n, r] = x.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, x.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Af(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Mf() {
  return Sn.use();
}
function Af() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Br() {
  return Br = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Br.apply(null, arguments);
}
function qa(e, t) {
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
function jr(e, t) {
  return jr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, jr(e, t);
}
function Ya(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, jr(e, t);
}
const fs = {
  disabled: !1
};
var Df = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
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
const Nn = Nt.createContext(null);
var Bf = function(t) {
  return t.scrollTop;
}, Mo = "unmounted", Vt = "exited", Wt = "entering", io = "entered", Lr = "exiting", $t = /* @__PURE__ */ function(e) {
  Ya(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = Vt, s.appearStatus = Wt) : c = io : r.unmountOnExit || r.mountOnEnter ? c = Mo : c = Vt, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Mo ? {
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
      this.props.in ? a !== Wt && a !== io && (s = Wt) : (a === Wt || a === io) && (s = Lr);
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
      if (this.cancelNextCallback(), s === Wt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : sn.findDOMNode(this);
          a && Bf(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Vt && this.setState({
        status: Mo
      });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [sn.findDOMNode(this), l], u = c[0], p = c[1], m = this.getTimeouts(), h = l ? m.appear : m.enter;
    if (!i && !a || fs.disabled) {
      this.safeSetState({
        status: io
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, p), this.safeSetState({
      status: Wt
    }, function() {
      s.props.onEntering(u, p), s.onTransitionEnd(h, function() {
        s.safeSetState({
          status: io
        }, function() {
          s.props.onEntered(u, p);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : sn.findDOMNode(this);
    if (!s || fs.disabled) {
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : sn.findDOMNode(this), l = i == null && !this.props.addEndListener;
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
    if (i === Mo)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = qa(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Nt.createElement(Nn.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : Nt.cloneElement(Nt.Children.only(a), l))
    );
  }, t;
}(Nt.Component);
$t.contextType = Nn;
$t.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = Df;
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
$t.defaultProps = {
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
$t.UNMOUNTED = Mo;
$t.EXITED = Vt;
$t.ENTERING = Wt;
$t.ENTERED = io;
$t.EXITING = Lr;
const ii = $t;
function jf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function si(e, t) {
  var n = function(s) {
    return t && hn(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && xc.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function Lf(e, t) {
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
function qt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function _f(e, t) {
  return si(e.children, function(n) {
    return gn(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: qt(n, "appear", e),
      enter: qt(n, "enter", e),
      exit: qt(n, "exit", e)
    });
  });
}
function Ff(e, t, n) {
  var r = si(e.children), i = Lf(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (hn(a)) {
      var l = s in t, c = s in r, u = t[s], p = hn(u) && !u.props.in;
      c && (!l || p) ? i[s] = gn(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: qt(a, "exit", e),
        enter: qt(a, "enter", e)
      }) : !c && l && !p ? i[s] = gn(a, {
        in: !1
      }) : c && l && hn(u) && (i[s] = gn(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: qt(a, "exit", e),
        enter: qt(a, "enter", e)
      }));
    }
  }), i;
}
var Uf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, zf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ai = /* @__PURE__ */ function(e) {
  Ya(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(jf(s));
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
      children: c ? _f(i, l) : Ff(i, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = si(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = Br({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = qa(i, ["component", "childFactory"]), c = this.state.contextValue, u = Uf(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ Nt.createElement(Nn.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Nt.createElement(Nn.Provider, {
      value: c
    }, /* @__PURE__ */ Nt.createElement(s, l, u));
  }, t;
}(Nt.Component);
ai.propTypes = process.env.NODE_ENV !== "production" ? {
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
ai.defaultProps = zf;
const Vf = ai, Wf = [];
function Hf(e) {
  x.useEffect(e, Wf);
}
class Qn {
  constructor() {
    wo(this, "currentId", null);
    wo(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    wo(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Qn();
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
function ao() {
  const e = Ha(Qn.create).current;
  return Hf(e.disposeEffect), e;
}
function Ga(e) {
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
  } = e, [p, m] = x.useState(!1), h = ie(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, y = ie(n.child, p && n.childLeaving, r && n.childPulsate);
  return !l && !p && m(!0), x.useEffect(() => {
    if (!l && c != null) {
      const f = setTimeout(c, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ L("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ L("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (Ga.propTypes = {
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
const qf = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Xe = qf, _r = 550, Yf = 80, Gf = Yo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Kf = Yo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Xf = Yo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Qf = G("span", {
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
}), Jf = G(Ga, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Xe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Gf};
    animation-duration: ${_r}ms;
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
    animation-name: ${Kf};
    animation-duration: ${_r}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Xe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Xf};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ka = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  const h = x.useRef(!1), g = ao(), y = x.useRef(null), f = x.useRef(null), v = x.useCallback((b) => {
    const {
      pulsate: T,
      rippleX: O,
      rippleY: $,
      rippleSize: I,
      cb: M
    } = b;
    u((F) => [...F, /* @__PURE__ */ L(Jf, {
      classes: {
        ripple: ie(s.ripple, Xe.ripple),
        rippleVisible: ie(s.rippleVisible, Xe.rippleVisible),
        ripplePulsate: ie(s.ripplePulsate, Xe.ripplePulsate),
        child: ie(s.child, Xe.child),
        childLeaving: ie(s.childLeaving, Xe.childLeaving),
        childPulsate: ie(s.childPulsate, Xe.childPulsate)
      },
      timeout: _r,
      pulsate: T,
      rippleX: O,
      rippleY: $,
      rippleSize: I
    }, p.current)]), p.current += 1, m.current = M;
  }, [s]), E = x.useCallback((b = {}, T = {}, O = () => {
  }) => {
    const {
      pulsate: $ = !1,
      center: I = i || T.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = T;
    if ((b == null ? void 0 : b.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (h.current = !0);
    const F = M ? null : f.current, j = F ? F.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let d, N, S;
    if (I || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      d = Math.round(j.width / 2), N = Math.round(j.height / 2);
    else {
      const {
        clientX: R,
        clientY: P
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      d = Math.round(R - j.left), N = Math.round(P - j.top);
    }
    if (I)
      S = Math.sqrt((2 * j.width ** 2 + j.height ** 2) / 3), S % 2 === 0 && (S += 1);
    else {
      const R = Math.max(Math.abs((F ? F.clientWidth : 0) - d), d) * 2 + 2, P = Math.max(Math.abs((F ? F.clientHeight : 0) - N), N) * 2 + 2;
      S = Math.sqrt(R ** 2 + P ** 2);
    }
    b != null && b.touches ? y.current === null && (y.current = () => {
      v({
        pulsate: $,
        rippleX: d,
        rippleY: N,
        rippleSize: S,
        cb: O
      });
    }, g.start(Yf, () => {
      y.current && (y.current(), y.current = null);
    })) : v({
      pulsate: $,
      rippleX: d,
      rippleY: N,
      rippleSize: S,
      cb: O
    });
  }, [i, v, g]), C = x.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), w = x.useCallback((b, T) => {
    if (g.clear(), (b == null ? void 0 : b.type) === "touchend" && y.current) {
      y.current(), y.current = null, g.start(0, () => {
        w(b, T);
      });
      return;
    }
    y.current = null, u((O) => O.length > 0 ? O.slice(1) : O), m.current = T;
  }, [g]);
  return x.useImperativeHandle(n, () => ({
    pulsate: C,
    start: E,
    stop: w
  }), [C, E, w]), /* @__PURE__ */ L(Qf, {
    className: ie(Xe.root, s.root, a),
    ref: f,
    ...l,
    children: /* @__PURE__ */ L(Vf, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Ka.propTypes = {
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
const Zf = Ka;
function em(e) {
  return ue("MuiButtonBase", e);
}
const tm = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), om = tm, nm = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, a = de({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, em, i);
  return n && r && (a.root += ` ${r}`), a;
}, rm = G("button", {
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
  [`&.${om.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Xa = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    LinkComponent: y = "a",
    onBlur: f,
    onClick: v,
    onContextMenu: E,
    onDragLeave: C,
    onFocus: w,
    onFocusVisible: b,
    onKeyDown: T,
    onKeyUp: O,
    onMouseDown: $,
    onMouseLeave: I,
    onMouseUp: M,
    onTouchEnd: F,
    onTouchMove: j,
    onTouchStart: d,
    tabIndex: N = 0,
    TouchRippleProps: S,
    touchRippleRef: R,
    type: P,
    ..._
  } = r, z = x.useRef(null), A = Mf(), k = Be(A.ref, R), [B, q] = x.useState(!1);
  u && B && q(!1), x.useImperativeHandle(i, () => ({
    focusVisible: () => {
      q(!0), z.current.focus();
    }
  }), []);
  const H = A.shouldMount && !p && !u;
  x.useEffect(() => {
    B && h && !p && A.pulsate();
  }, [p, h, B, A]);
  const Y = St(A, "start", $, m), J = St(A, "stop", E, m), Q = St(A, "stop", C, m), X = St(A, "stop", M, m), ee = St(A, "stop", (oe) => {
    B && oe.preventDefault(), I && I(oe);
  }, m), Z = St(A, "start", d, m), W = St(A, "stop", F, m), te = St(A, "stop", j, m), U = St(A, "stop", (oe) => {
    Cn(oe.target) || q(!1), f && f(oe);
  }, !1), le = Rt((oe) => {
    z.current || (z.current = oe.currentTarget), Cn(oe.target) && (q(!0), b && b(oe)), w && w(oe);
  }), ne = () => {
    const oe = z.current;
    return c && c !== "button" && !(oe.tagName === "A" && oe.href);
  }, pe = Rt((oe) => {
    h && !oe.repeat && B && oe.key === " " && A.stop(oe, () => {
      A.start(oe);
    }), oe.target === oe.currentTarget && ne() && oe.key === " " && oe.preventDefault(), T && T(oe), oe.target === oe.currentTarget && ne() && oe.key === "Enter" && !u && (oe.preventDefault(), v && v(oe));
  }), je = Rt((oe) => {
    h && oe.key === " " && B && !oe.defaultPrevented && A.stop(oe, () => {
      A.pulsate(oe);
    }), O && O(oe), v && oe.target === oe.currentTarget && ne() && oe.key === " " && !oe.defaultPrevented && v(oe);
  });
  let Ne = c;
  Ne === "button" && (_.href || _.to) && (Ne = y);
  const Te = {};
  if (Ne === "button") {
    const oe = !!_.formAction;
    Te.type = P === void 0 && !oe ? "button" : P, Te.disabled = u;
  } else
    !_.href && !_.to && (Te.role = "button"), u && (Te["aria-disabled"] = u);
  const Ae = Be(n, z), Re = {
    ...r,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: p,
    disableTouchRipple: m,
    focusRipple: h,
    tabIndex: N,
    focusVisible: B
  }, Oe = nm(Re);
  return /* @__PURE__ */ Ie(rm, {
    as: Ne,
    className: ie(Oe.root, l),
    ownerState: Re,
    onBlur: U,
    onClick: v,
    onContextMenu: J,
    onFocus: le,
    onKeyDown: pe,
    onKeyUp: je,
    onMouseDown: Y,
    onMouseLeave: ee,
    onMouseUp: X,
    onDragLeave: Q,
    onTouchEnd: W,
    onTouchMove: te,
    onTouchStart: Z,
    ref: Ae,
    tabIndex: u ? -1 : N,
    type: P,
    ...Te,
    ..._,
    children: [a, H ? /* @__PURE__ */ L(Zf, {
      ref: k,
      center: s,
      ...S
    }) : null]
  });
});
function St(e, t, n, r = !1) {
  return Rt((i) => (n && n(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (Xa.propTypes = {
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
  component: ri,
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
  formAction: o.oneOfType([o.func, o.string]),
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
const li = Xa;
function im(e) {
  return ue("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const at = 44, Fr = Yo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ur = Yo`
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
`, sm = typeof Fr != "string" ? Xs`
        animation: ${Fr} 1.4s linear infinite;
      ` : null, am = typeof Ur != "string" ? Xs`
        animation: ${Ur} 1.4s ease-in-out infinite;
      ` : null, lm = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: i
  } = e, s = {
    root: ["root", n, `color${K(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${K(n)}`, i && "circleDisableShrink"]
  };
  return de(s, im, t);
}, cm = G("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${K(n.color)}`]];
  }
})(fe(({
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
    style: sm || {
      animation: `${Fr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(pt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), um = G("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), pm = G("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${K(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(fe(({
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
    style: am || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Ur} 1.4s ease-in-out infinite`
    }
  }]
}))), dm = G("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(fe(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Qa = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  } = r, y = {
    ...r,
    color: s,
    disableShrink: a,
    size: c,
    thickness: p,
    value: m,
    variant: h,
    enableTrackSlot: l
  }, f = lm(y), v = {}, E = {}, C = {};
  if (h === "determinate") {
    const w = 2 * Math.PI * ((at - p) / 2);
    v.strokeDasharray = w.toFixed(3), C["aria-valuenow"] = Math.round(m), v.strokeDashoffset = `${((100 - m) / 100 * w).toFixed(3)}px`, E.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ L(cm, {
    className: ie(f.root, i),
    style: {
      width: c,
      height: c,
      ...E,
      ...u
    },
    ownerState: y,
    ref: n,
    role: "progressbar",
    ...C,
    ...g,
    children: /* @__PURE__ */ Ie(um, {
      className: f.svg,
      ownerState: y,
      viewBox: `${at / 2} ${at / 2} ${at} ${at}`,
      children: [l ? /* @__PURE__ */ L(dm, {
        className: f.track,
        ownerState: y,
        cx: at,
        cy: at,
        r: (at - p) / 2,
        fill: "none",
        strokeWidth: p,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ L(pm, {
        className: f.circle,
        style: v,
        ownerState: y,
        cx: at,
        cy: at,
        r: (at - p) / 2,
        fill: "none",
        strokeWidth: p
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Qa.propTypes = {
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
  disableShrink: wt(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
const Ja = Qa;
function fm(e) {
  return ue("MuiIconButton", e);
}
const mm = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), ms = mm, hm = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: s,
    loading: a
  } = e, l = {
    root: ["root", a && "loading", n && "disabled", r !== "default" && `color${K(r)}`, i && `edge${K(i)}`, `size${K(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return de(l, fm, t);
}, gm = G(li, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${K(n.color)}`], n.edge && t[`edge${K(n.edge)}`], t[`size${K(n.size)}`]];
  }
})(fe(({
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
})), fe(({
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
  [`&.${ms.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${ms.loading}`]: {
    color: "transparent"
  }
}))), bm = G("span", {
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
})), Za = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    ...y
  } = r, f = Xo(m), v = g ?? /* @__PURE__ */ L(Ja, {
    "aria-labelledby": f,
    color: "inherit",
    size: 16
  }), E = {
    ...r,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    loading: h,
    loadingIndicator: v,
    size: p
  }, C = hm(E);
  return /* @__PURE__ */ Ie(gm, {
    id: h ? f : m,
    className: ie(C.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c || h,
    ref: n,
    ...y,
    ownerState: E,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ L("span", {
      className: C.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ L(bm, {
        className: C.loadingIndicator,
        ownerState: E,
        children: h && v
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (Za.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: wt(o.node, (e) => x.Children.toArray(e.children).some((n) => /* @__PURE__ */ x.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const Wo = Za;
function ym(e) {
  return ue("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const vm = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, xm = zd(), Tm = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${K(t)}`, n && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return de(l, ym, a);
}, wm = G("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${K(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(fe(({
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
})), hs = {
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
}, el = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    color: r,
    ...i
  } = me({
    props: t,
    name: "MuiTypography"
  }), s = !vm[r], a = xm({
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
    variantMapping: y = hs,
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
    variantMapping: y
  }, E = u || (h ? "p" : y[g] || hs[g]) || "span", C = Tm(v);
  return /* @__PURE__ */ L(wm, {
    as: E,
    ref: n,
    className: ie(C.root, c),
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
process.env.NODE_ENV !== "production" && (el.propTypes = {
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
const gt = el, tl = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (tl.displayName = "FormControlContext");
const Jn = tl;
function Qt() {
  return x.useContext(Jn);
}
function Em(e) {
  return ue("MuiInputAdornment", e);
}
const Om = ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), gs = Om;
var bs;
const Cm = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${K(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, Sm = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: i,
    size: s,
    variant: a
  } = e, l = {
    root: ["root", n && "disablePointerEvents", i && `position${K(i)}`, a, r && "hiddenLabel", s && `size${K(s)}`]
  };
  return de(l, Em, t);
}, Nm = G("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: Cm
})(fe(({
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
      [`&.${gs.positionStart}&:not(.${gs.hiddenLabel})`]: {
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
}))), ol = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  } = r, h = Qt() || {};
  let g = p;
  p && h.variant && process.env.NODE_ENV !== "production" && p === h.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), h && !g && (g = h.variant);
  const y = {
    ...r,
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: l,
    position: u,
    variant: g
  }, f = Sm(y);
  return /* @__PURE__ */ L(Jn.Provider, {
    value: null,
    children: /* @__PURE__ */ L(Nm, {
      as: a,
      ownerState: y,
      className: ie(f.root, s),
      ref: n,
      ...m,
      children: typeof i == "string" && !c ? /* @__PURE__ */ L(gt, {
        color: "textSecondary",
        children: i
      }) : /* @__PURE__ */ Ie(x.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          bs || (bs = /* @__PURE__ */ L("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, i]
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ol.propTypes = {
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
const Rm = ol;
function xt(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function nl(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : ja(n, r), {
    props: l,
    internalRef: c
  } = _a({
    ...s,
    externalSlotProps: a
  }), u = Be(c, a == null ? void 0 : a.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return Ba(t, {
    ...l,
    ref: u
  }, r);
}
const rl = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (rl.displayName = "ListContext");
const zr = rl;
function km(e) {
  return ue("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const Pm = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return de({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, km, t);
}, $m = G("ul", {
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
}), il = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  }, g = Pm(h);
  return /* @__PURE__ */ L(zr.Provider, {
    value: m,
    children: /* @__PURE__ */ Ie($m, {
      as: a,
      className: ie(g.root, s),
      ref: n,
      ownerState: h,
      ...p,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (il.propTypes = {
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
const Im = il;
function Ao(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function sl(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Er(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function ys(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function al(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function Co(e, t, n, r, i, s) {
  let a = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !al(l, s) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const ll = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = t, g = x.useRef(null), y = x.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  ct(() => {
    i && g.current.focus();
  }, [i]), x.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (w, {
      direction: b
    }) => {
      const T = !g.current.style.width;
      if (w.clientHeight < g.current.clientHeight && T) {
        const O = `${sl(ut(w))}px`;
        g.current.style[b === "rtl" ? "paddingLeft" : "paddingRight"] = O, g.current.style.width = `calc(100% + ${O})`;
      }
      return g.current;
    }
  }), []);
  const f = (w) => {
    const b = g.current, T = w.key;
    if (w.ctrlKey || w.metaKey || w.altKey) {
      p && p(w);
      return;
    }
    const $ = Ao(Ye(b));
    if (T === "ArrowDown")
      w.preventDefault(), Co(b, $, u, c, Er);
    else if (T === "ArrowUp")
      w.preventDefault(), Co(b, $, u, c, ys);
    else if (T === "Home")
      w.preventDefault(), Co(b, null, u, c, Er);
    else if (T === "End")
      w.preventDefault(), Co(b, null, u, c, ys);
    else if (T.length === 1) {
      const I = y.current, M = T.toLowerCase(), F = performance.now();
      I.keys.length > 0 && (F - I.lastTime > 500 ? (I.keys = [], I.repeating = !0, I.previousKeyMatched = !0) : I.repeating && M !== I.keys[0] && (I.repeating = !1)), I.lastTime = F, I.keys.push(M);
      const j = $ && !I.repeating && al($, I);
      I.previousKeyMatched && (j || Co(b, $, !1, c, Er, I)) ? w.preventDefault() : I.previousKeyMatched = !1;
    }
    p && p(w);
  }, v = Be(g, n);
  let E = -1;
  x.Children.forEach(a, (w, b) => {
    if (!/* @__PURE__ */ x.isValidElement(w)) {
      E === b && (E += 1, E >= a.length && (E = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Gt.isFragment(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (m === "selectedMenu" && w.props.selected || E === -1) && (E = b), E === b && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (E += 1, E >= a.length && (E = -1));
  });
  const C = x.Children.map(a, (w, b) => {
    if (b === E) {
      const T = {};
      return s && (T.autoFocus = !0), w.props.tabIndex === void 0 && m === "selectedMenu" && (T.tabIndex = 0), /* @__PURE__ */ x.cloneElement(w, T);
    }
    return w;
  });
  return /* @__PURE__ */ L(Im, {
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: f,
    tabIndex: i ? 0 : -1,
    ...h,
    children: C
  });
});
process.env.NODE_ENV !== "production" && (ll.propTypes = {
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
const Mm = ll;
function Am(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function cl(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !Am(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ul = wt(o.element, cl);
ul.isRequired = wt(o.element.isRequired, cl);
const yo = ul;
function Jt(e) {
  var t;
  return parseInt(x.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const ci = (e) => e.scrollTop;
function uo(e, t) {
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
function Vr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Dm = {
  entering: {
    opacity: 1,
    transform: Vr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Or = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Rn = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    style: y,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = ii,
    ...E
  } = t, C = ao(), w = x.useRef(), b = bo(), T = x.useRef(null), O = Be(T, Jt(s), n), $ = (R) => (P) => {
    if (R) {
      const _ = T.current;
      P === void 0 ? R(_) : R(_, P);
    }
  }, I = $(p), M = $((R, P) => {
    ci(R);
    const {
      duration: _,
      delay: z,
      easing: A
    } = uo({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let k;
    f === "auto" ? (k = b.transitions.getAutoHeightDuration(R.clientHeight), w.current = k) : k = _, R.style.transition = [b.transitions.create("opacity", {
      duration: k,
      delay: z
    }), b.transitions.create("transform", {
      duration: Or ? k : k * 0.666,
      delay: z,
      easing: A
    })].join(","), c && c(R, P);
  }), F = $(u), j = $(g), d = $((R) => {
    const {
      duration: P,
      delay: _,
      easing: z
    } = uo({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let A;
    f === "auto" ? (A = b.transitions.getAutoHeightDuration(R.clientHeight), w.current = A) : A = P, R.style.transition = [b.transitions.create("opacity", {
      duration: A,
      delay: _
    }), b.transitions.create("transform", {
      duration: Or ? A : A * 0.666,
      delay: Or ? _ : _ || A * 0.333,
      easing: z
    })].join(","), R.style.opacity = 0, R.style.transform = Vr(0.75), m && m(R);
  }), N = $(h);
  return /* @__PURE__ */ L(v, {
    appear: i,
    in: l,
    nodeRef: T,
    onEnter: M,
    onEntered: F,
    onEntering: I,
    onExit: d,
    onExited: N,
    onExiting: j,
    addEndListener: (R) => {
      f === "auto" && C.start(w.current || 0, R), r && r(T.current, R);
    },
    timeout: f === "auto" ? null : f,
    ...E,
    children: (R, {
      ownerState: P,
      ..._
    }) => /* @__PURE__ */ x.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Vr(0.75),
        visibility: R === "exited" && !l ? "hidden" : void 0,
        ...Dm[R],
        ...y,
        ...s.props.style
      },
      ref: O,
      ..._
    })
  });
});
process.env.NODE_ENV !== "production" && (Rn.propTypes = {
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
  children: yo.isRequired,
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
Rn && (Rn.muiSupportAuto = !0);
const pl = Rn;
function Bm(e) {
  const t = Ye(e);
  return t.body === e ? ut(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function jo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function vs(e) {
  return parseInt(ut(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function jm(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function xs(e, t, n, r, i) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = !s.includes(a), c = !jm(a);
    l && c && jo(a, i);
  });
}
function Cr(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Lm(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Bm(r)) {
      const a = sl(ut(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${vs(r) + a}px`;
      const l = Ye(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${vs(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = Ye(r).body;
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
function _m(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Fm {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && jo(t.modalRef, !1);
    const i = _m(n);
    xs(n, t.mount, t.modalRef, i, !0);
    const s = Cr(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Cr(this.containers, (s) => s.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Lm(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Cr(this.containers, (a) => a.modals.includes(t)), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && jo(t.modalRef, n), xs(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && jo(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Um = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function zm(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Vm(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Wm(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Vm(e));
}
function Hm(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Um)).forEach((r, i) => {
    const s = zm(r);
    s === -1 || !Wm(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function qm() {
  return !0;
}
function kn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = Hm,
    isEnabled: a = qm,
    open: l
  } = e, c = x.useRef(!1), u = x.useRef(null), p = x.useRef(null), m = x.useRef(null), h = x.useRef(null), g = x.useRef(!1), y = x.useRef(null), f = Be(Jt(t), y), v = x.useRef(null);
  x.useEffect(() => {
    !l || !y.current || (g.current = !n);
  }, [n, l]), x.useEffect(() => {
    if (!l || !y.current)
      return;
    const w = Ye(y.current), b = Ao(w);
    return y.current.contains(b) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), g.current && y.current.focus()), () => {
      i || (m.current && m.current.focus && (c.current = !0, m.current.focus()), m.current = null);
    };
  }, [l]), x.useEffect(() => {
    if (!l || !y.current)
      return;
    const w = Ye(y.current), b = Ao(w), T = (I) => {
      v.current = I, !(r || !a() || I.key !== "Tab") && b === y.current && I.shiftKey && (c.current = !0, p.current && p.current.focus());
    }, O = () => {
      var j, d;
      const I = y.current;
      if (I === null)
        return;
      const M = Ao(w);
      if (!w.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (I.contains(M) || r && M !== u.current && M !== p.current)
        return;
      if (M !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let F = [];
      if ((M === u.current || M === p.current) && (F = s(y.current)), F.length > 0) {
        const N = !!((j = v.current) != null && j.shiftKey && ((d = v.current) == null ? void 0 : d.key) === "Tab"), S = F[0], R = F[F.length - 1];
        typeof S != "string" && typeof R != "string" && (N ? R.focus() : S.focus());
      } else
        I.focus();
    };
    w.addEventListener("focusin", O), w.addEventListener("keydown", T, !0);
    const $ = setInterval(() => {
      const I = Ao(w);
      I && I.tagName === "BODY" && O();
    }, 50);
    return () => {
      clearInterval($), w.removeEventListener("focusin", O), w.removeEventListener("keydown", T, !0);
    };
  }, [n, r, i, a, l, s]);
  const E = (w) => {
    m.current === null && (m.current = w.relatedTarget), g.current = !0, h.current = w.target;
    const b = t.props.onFocus;
    b && b(w);
  }, C = (w) => {
    m.current === null && (m.current = w.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ Ie(x.Fragment, {
    children: [/* @__PURE__ */ L("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ x.cloneElement(t, {
      ref: f,
      onFocus: E
    }), /* @__PURE__ */ L("div", {
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
  children: yo,
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
process.env.NODE_ENV !== "production" && (kn["propTypes"] = xa(kn.propTypes));
function Ym(e) {
  return typeof e == "function" ? e() : e;
}
const Pn = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = x.useState(null), c = Be(/* @__PURE__ */ x.isValidElement(r) ? Jt(r) : null, n);
  if (ct(() => {
    s || l(Ym(i) || document.body);
  }, [i, s]), ct(() => {
    if (a && !s)
      return ss(n, a), () => {
        ss(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ x.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ x.cloneElement(r, u);
    }
    return r;
  }
  return a && /* @__PURE__ */ Oc.createPortal(r, a);
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
process.env.NODE_ENV !== "production" && (Pn["propTypes"] = xa(Pn.propTypes));
const dl = Pn, Gm = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, fl = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = bo(), i = {
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
    onExited: y,
    onExiting: f,
    style: v,
    timeout: E = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = ii,
    ...w
  } = t, b = x.useRef(null), T = Be(b, Jt(l), n), O = (S) => (R) => {
    if (S) {
      const P = b.current;
      R === void 0 ? S(P) : S(P, R);
    }
  }, $ = O(h), I = O((S, R) => {
    ci(S);
    const P = uo({
      style: v,
      timeout: E,
      easing: c
    }, {
      mode: "enter"
    });
    S.style.webkitTransition = r.transitions.create("opacity", P), S.style.transition = r.transitions.create("opacity", P), p && p(S, R);
  }), M = O(m), F = O(f), j = O((S) => {
    const R = uo({
      style: v,
      timeout: E,
      easing: c
    }, {
      mode: "exit"
    });
    S.style.webkitTransition = r.transitions.create("opacity", R), S.style.transition = r.transitions.create("opacity", R), g && g(S);
  }), d = O(y);
  return /* @__PURE__ */ L(C, {
    appear: a,
    in: u,
    nodeRef: b,
    onEnter: I,
    onEntered: M,
    onEntering: $,
    onExit: j,
    onExited: d,
    onExiting: F,
    addEndListener: (S) => {
      s && s(b.current, S);
    },
    timeout: E,
    ...w,
    children: (S, {
      ownerState: R,
      ...P
    }) => /* @__PURE__ */ x.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: S === "exited" && !u ? "hidden" : void 0,
        ...Gm[S],
        ...v,
        ...l.props.style
      },
      ref: T,
      ...P
    })
  });
});
process.env.NODE_ENV !== "production" && (fl.propTypes = {
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
  children: yo.isRequired,
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
const Km = fl;
function Xm(e) {
  return ue("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const Qm = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return de({
    root: ["root", n && "invisible"]
  }, Xm, t);
}, Jm = G("div", {
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
}), ml = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    transitionDuration: y,
    ...f
  } = r, v = {
    ...r,
    component: a,
    invisible: l
  }, E = Qm(v), C = {
    transition: g,
    root: u.Root,
    ...h
  }, w = {
    ...p,
    ...m
  }, b = {
    component: a,
    slots: C,
    slotProps: w
  }, [T, O] = xe("root", {
    elementType: Jm,
    externalForwardedProps: b,
    className: ie(E.root, s),
    ownerState: v
  }), [$, I] = xe("transition", {
    elementType: Km,
    externalForwardedProps: b,
    ownerState: v
  });
  return /* @__PURE__ */ L($, {
    in: c,
    timeout: y,
    ...f,
    ...I,
    children: /* @__PURE__ */ L(T, {
      "aria-hidden": !0,
      ...O,
      classes: E,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (ml.propTypes = {
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
const Zm = ml;
function eh(e) {
  return typeof e == "function" ? e() : e;
}
function th(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Ts = () => {
}, cn = new Fm();
function oh(e) {
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
  } = e, m = x.useRef({}), h = x.useRef(null), g = x.useRef(null), y = Be(g, p), [f, v] = x.useState(!u), E = th(l);
  let C = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (C = !1);
  const w = () => Ye(h.current), b = () => (m.current.modalRef = g.current, m.current.mount = h.current, m.current), T = () => {
    cn.mount(b(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, O = Rt(() => {
    const R = eh(t) || w().body;
    cn.add(b(), R), g.current && T();
  }), $ = () => cn.isTopModal(b()), I = Rt((R) => {
    h.current = R, R && (u && $() ? T() : g.current && jo(g.current, C));
  }), M = x.useCallback(() => {
    cn.remove(b(), C);
  }, [C]);
  x.useEffect(() => () => {
    M();
  }, [M]), x.useEffect(() => {
    u ? O() : (!E || !i) && M();
  }, [u, M, E, i, O]);
  const F = (R) => (P) => {
    var _;
    (_ = R.onKeyDown) == null || _.call(R, P), !(P.key !== "Escape" || P.which === 229 || // Wait until IME is settled.
    !$()) && (n || (P.stopPropagation(), c && c(P, "escapeKeyDown")));
  }, j = (R) => (P) => {
    var _;
    (_ = R.onClick) == null || _.call(R, P), P.target === P.currentTarget && c && c(P, "backdropClick");
  };
  return {
    getRootProps: (R = {}) => {
      const P = La(e);
      delete P.onTransitionEnter, delete P.onTransitionExited;
      const _ = {
        ...P,
        ...R
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ..._,
        onKeyDown: F(_),
        ref: y
      };
    },
    getBackdropProps: (R = {}) => {
      const P = R;
      return {
        "aria-hidden": !0,
        ...P,
        onClick: j(P),
        open: u
      };
    },
    getTransitionProps: () => {
      const R = () => {
        v(!1), s && s();
      }, P = () => {
        v(!0), a && a(), i && M();
      };
      return {
        onEnter: Si(R, (l == null ? void 0 : l.props.onEnter) ?? Ts),
        onExited: Si(P, (l == null ? void 0 : l.props.onExited) ?? Ts)
      };
    },
    rootRef: y,
    portalRef: I,
    isTopModal: $,
    exited: f,
    hasTransition: E
  };
}
function nh(e) {
  return ue("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const rh = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return de({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, nh, r);
}, ih = G("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(fe(({
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
}))), sh = G(Zm, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), hl = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = sh,
    BackdropProps: s,
    classes: a,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: p,
    component: m,
    components: h = {},
    componentsProps: g = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: f = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: E = !1,
    disableRestoreFocus: C = !1,
    disableScrollLock: w = !1,
    hideBackdrop: b = !1,
    keepMounted: T = !1,
    onClose: O,
    onTransitionEnter: $,
    onTransitionExited: I,
    open: M,
    slotProps: F = {},
    slots: j = {},
    // eslint-disable-next-line react/prop-types
    theme: d,
    ...N
  } = r, S = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: y,
    disableEnforceFocus: f,
    disableEscapeKeyDown: v,
    disablePortal: E,
    disableRestoreFocus: C,
    disableScrollLock: w,
    hideBackdrop: b,
    keepMounted: T
  }, {
    getRootProps: R,
    getBackdropProps: P,
    getTransitionProps: _,
    portalRef: z,
    isTopModal: A,
    exited: k,
    hasTransition: B
  } = oh({
    ...S,
    rootRef: n
  }), q = {
    ...S,
    exited: k
  }, H = rh(q), Y = {};
  if (u.props.tabIndex === void 0 && (Y.tabIndex = "-1"), B) {
    const {
      onEnter: W,
      onExited: te
    } = _();
    Y.onEnter = W, Y.onExited = te;
  }
  const J = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...j
    },
    slotProps: {
      ...g,
      ...F
    }
  }, [Q, X] = xe("root", {
    ref: n,
    elementType: ih,
    externalForwardedProps: {
      ...J,
      ...N,
      component: m
    },
    getSlotProps: R,
    ownerState: q,
    className: ie(l, H == null ? void 0 : H.root, !q.open && q.exited && (H == null ? void 0 : H.hidden))
  }), [ee, Z] = xe("backdrop", {
    ref: s == null ? void 0 : s.ref,
    elementType: i,
    externalForwardedProps: J,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (W) => P({
      ...W,
      onClick: (te) => {
        W != null && W.onClick && W.onClick(te);
      }
    }),
    className: ie(s == null ? void 0 : s.className, H == null ? void 0 : H.backdrop),
    ownerState: q
  });
  return !T && !M && (!B || k) ? null : /* @__PURE__ */ L(dl, {
    ref: z,
    container: p,
    disablePortal: E,
    children: /* @__PURE__ */ Ie(Q, {
      ...X,
      children: [!b && i ? /* @__PURE__ */ L(ee, {
        ...Z
      }) : null, /* @__PURE__ */ L(kn, {
        disableEnforceFocus: f,
        disableAutoFocus: y,
        disableRestoreFocus: C,
        isEnabled: A,
        open: M,
        children: /* @__PURE__ */ x.cloneElement(u, Y)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (hl.propTypes = {
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
  children: yo.isRequired,
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
const gl = hl;
function ah(e) {
  return ue("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function ws(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Es(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Os(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Do(e) {
  return typeof e == "function" ? e() : e;
}
const lh = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"],
    paper: ["paper"]
  }, ah, t);
}, ch = G(gl, {
  name: "MuiPopover",
  slot: "Root"
})({}), bl = G(Xn, {
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
}), yl = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    open: y,
    PaperProps: f = {},
    // TODO: remove in v7
    slots: v = {},
    slotProps: E = {},
    transformOrigin: C = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w,
    // TODO: remove in v7
    transitionDuration: b = "auto",
    TransitionProps: T = {},
    // TODO: remove in v7
    disableScrollLock: O = !1,
    ...$
  } = r, I = x.useRef(), M = {
    ...r,
    anchorOrigin: a,
    anchorReference: c,
    elevation: h,
    marginThreshold: g,
    transformOrigin: C,
    TransitionComponent: w,
    transitionDuration: b,
    TransitionProps: T
  }, F = lh(M), j = x.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const W = Do(s), te = W && W.nodeType === 1 ? W : Ye(I.current).body, U = te.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const le = te.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && le.top === 0 && le.left === 0 && le.right === 0 && le.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: U.top + ws(U, a.vertical),
      left: U.left + Es(U, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), d = x.useCallback((W) => ({
    vertical: ws(W, C.vertical),
    horizontal: Es(W, C.horizontal)
  }), [C.horizontal, C.vertical]), N = x.useCallback((W) => {
    const te = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, U = d(te);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Os(U)
      };
    const le = j();
    let ne = le.top - U.vertical, pe = le.left - U.horizontal;
    const je = ne + te.height, Ne = pe + te.width, Te = ut(Do(s)), Ae = Te.innerHeight - g, Re = Te.innerWidth - g;
    if (g !== null && ne < g) {
      const Oe = ne - g;
      ne -= Oe, U.vertical += Oe;
    } else if (g !== null && je > Ae) {
      const Oe = je - Ae;
      ne -= Oe, U.vertical += Oe;
    }
    if (process.env.NODE_ENV !== "production" && te.height > Ae && te.height && Ae && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${te.height - Ae}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && pe < g) {
      const Oe = pe - g;
      pe -= Oe, U.horizontal += Oe;
    } else if (Ne > Re) {
      const Oe = Ne - Re;
      pe -= Oe, U.horizontal += Oe;
    }
    return {
      top: `${Math.round(ne)}px`,
      left: `${Math.round(pe)}px`,
      transformOrigin: Os(U)
    };
  }, [s, c, j, d, g]), [S, R] = x.useState(y), P = x.useCallback(() => {
    const W = I.current;
    if (!W)
      return;
    const te = N(W);
    te.top !== null && W.style.setProperty("top", te.top), te.left !== null && (W.style.left = te.left), W.style.transformOrigin = te.transformOrigin, R(!0);
  }, [N]);
  x.useEffect(() => (O && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [s, O, P]);
  const _ = () => {
    P();
  }, z = () => {
    R(!1);
  };
  x.useEffect(() => {
    y && P();
  }), x.useImperativeHandle(i, () => y ? {
    updatePosition: () => {
      P();
    }
  } : null, [y, P]), x.useEffect(() => {
    if (!y)
      return;
    const W = oi(() => {
      P();
    }), te = ut(Do(s));
    return te.addEventListener("resize", W), () => {
      W.clear(), te.removeEventListener("resize", W);
    };
  }, [s, y, P]);
  let A = b;
  const k = {
    slots: {
      transition: w,
      ...v
    },
    slotProps: {
      transition: T,
      paper: f,
      ...E
    }
  }, [B, q] = xe("transition", {
    elementType: pl,
    externalForwardedProps: k,
    ownerState: M,
    getSlotProps: (W) => ({
      ...W,
      onEntering: (te, U) => {
        var le;
        (le = W.onEntering) == null || le.call(W, te, U), _();
      },
      onExited: (te) => {
        var U;
        (U = W.onExited) == null || U.call(W, te), z();
      }
    }),
    additionalProps: {
      appear: !0,
      in: y
    }
  });
  b === "auto" && !B.muiSupportAuto && (A = void 0);
  const H = m || (s ? Ye(Do(s)).body : void 0), [Y, {
    slots: J,
    slotProps: Q,
    ...X
  }] = xe("root", {
    ref: n,
    elementType: ch,
    externalForwardedProps: {
      ...k,
      ...$
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: v.backdrop
      },
      slotProps: {
        backdrop: Pa(typeof E.backdrop == "function" ? E.backdrop(M) : E.backdrop, {
          invisible: !0
        })
      },
      container: H,
      open: y
    },
    ownerState: M,
    className: ie(F.root, p)
  }), [ee, Z] = xe("paper", {
    ref: I,
    className: F.paper,
    elementType: bl,
    externalForwardedProps: k,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: h,
      style: S ? void 0 : {
        opacity: 0
      }
    },
    ownerState: M
  });
  return /* @__PURE__ */ L(Y, {
    ...X,
    ...!En(Y) && {
      slots: J,
      slotProps: Q,
      disableScrollLock: O
    },
    children: /* @__PURE__ */ L(B, {
      ...q,
      timeout: A,
      children: /* @__PURE__ */ L(ee, {
        ...Z,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (yl.propTypes = {
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
  anchorEl: wt(o.oneOfType([xt, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Do(e.anchorEl);
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
  elevation: ni,
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
    component: ri
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
const uh = yl;
function ph(e) {
  return ue("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const dh = {
  vertical: "top",
  horizontal: "right"
}, fh = {
  vertical: "top",
  horizontal: "left"
}, mh = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, ph, t);
}, hh = G(uh, {
  shouldForwardProp: (e) => Ke(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), gh = G(bl, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), bh = G(Mm, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), vl = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
      onEntering: y,
      ...f
    } = {},
    variant: v = "selectedMenu",
    slots: E = {},
    slotProps: C = {},
    ...w
  } = r, b = Kn(), T = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: y,
    PaperProps: m,
    transitionDuration: g,
    TransitionProps: f,
    variant: v
  }, O = mh(T), $ = i && !l && p, I = x.useRef(null), M = (A, k) => {
    I.current && I.current.adjustStyleForScrollbar(A, {
      direction: b ? "rtl" : "ltr"
    }), y && y(A, k);
  }, F = (A) => {
    A.key === "Tab" && (A.preventDefault(), u && u(A, "tabKeyDown"));
  };
  let j = -1;
  x.Children.map(s, (A, k) => {
    /* @__PURE__ */ x.isValidElement(A) && (process.env.NODE_ENV !== "production" && Gt.isFragment(A) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), A.props.disabled || (v === "selectedMenu" && A.props.selected || j === -1) && (j = k));
  });
  const d = {
    slots: E,
    slotProps: {
      list: c,
      transition: f,
      paper: m,
      ...C
    }
  }, N = nl({
    elementType: E.root,
    externalSlotProps: C.root,
    ownerState: T,
    className: [O.root, a]
  }), [S, R] = xe("paper", {
    className: O.paper,
    elementType: gh,
    externalForwardedProps: d,
    shouldForwardComponentProp: !0,
    ownerState: T
  }), [P, _] = xe("list", {
    className: ie(O.list, c.className),
    elementType: bh,
    shouldForwardComponentProp: !0,
    externalForwardedProps: d,
    getSlotProps: (A) => ({
      ...A,
      onKeyDown: (k) => {
        var B;
        F(k), (B = A.onKeyDown) == null || B.call(A, k);
      }
    }),
    ownerState: T
  }), z = typeof d.slotProps.transition == "function" ? d.slotProps.transition(T) : d.slotProps.transition;
  return /* @__PURE__ */ L(hh, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: b ? "right" : "left"
    },
    transformOrigin: b ? dh : fh,
    slots: {
      root: E.root,
      paper: S,
      backdrop: E.backdrop,
      ...E.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: E.transition
      }
    },
    slotProps: {
      root: N,
      paper: R,
      backdrop: typeof C.backdrop == "function" ? C.backdrop(T) : C.backdrop,
      transition: {
        ...z,
        onEntering: (...A) => {
          var k;
          M(...A), (k = z == null ? void 0 : z.onEntering) == null || k.call(z, ...A);
        }
      }
    },
    open: p,
    ref: n,
    transitionDuration: g,
    ownerState: T,
    ...w,
    classes: h,
    children: /* @__PURE__ */ L(P, {
      actions: I,
      autoFocus: i && (j === -1 || l),
      autoFocusItem: $,
      variant: v,
      ..._,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (vl.propTypes = {
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
const xl = vl, yh = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Cs = yh, vh = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Ss = vh;
function xh(e) {
  return ue("MuiMenuItem", e);
}
const Th = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), So = Th, wh = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Eh = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = de({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, xh, a);
  return {
    ...a,
    ...c
  };
}, Oh = G(li, {
  shouldForwardProp: (e) => Ke(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: wh
})(fe(({
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
  [`& + .${ps.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${ps.inset}`]: {
    marginLeft: 52
  },
  [`& .${Ss.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Ss.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Cs.root}`]: {
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
      [`& .${Cs.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Tl = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  } = r, y = x.useContext(zr), f = x.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: c
  }), [y.dense, a, c]), v = x.useRef(null);
  ct(() => {
    i && (v.current ? v.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const E = {
    ...r,
    dense: f.dense,
    divider: l,
    disableGutters: c
  }, C = Eh(r), w = Be(v, n);
  let b;
  return r.disabled || (b = m !== void 0 ? m : -1), /* @__PURE__ */ L(zr.Provider, {
    value: f,
    children: /* @__PURE__ */ L(Oh, {
      ref: w,
      role: p,
      tabIndex: b,
      component: s,
      focusVisibleClassName: ie(C.focusVisible, u),
      className: ie(C.root, h),
      ...g,
      ownerState: E,
      classes: C
    })
  });
});
process.env.NODE_ENV !== "production" && (Tl.propTypes = {
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
const Ns = Tl, wl = Yp({
  createStyledComponent: G("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => me({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (wl.propTypes = {
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
const Je = wl;
function un(e) {
  return parseInt(e, 10) || 0;
}
const Ch = {
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
function Sh(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Rs(e) {
  return Sh(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const El = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = x.useRef(l != null), p = x.useRef(null), m = Be(n, p), h = x.useRef(null), g = x.useRef(null), y = x.useCallback(() => {
    const w = p.current, b = g.current;
    if (!w || !b)
      return;
    const O = ut(w).getComputedStyle(w);
    if (O.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    b.style.width = O.width, b.value = w.value || t.placeholder || "x", b.value.slice(-1) === `
` && (b.value += " ");
    const $ = O.boxSizing, I = un(O.paddingBottom) + un(O.paddingTop), M = un(O.borderBottomWidth) + un(O.borderTopWidth), F = b.scrollHeight;
    b.value = "x";
    const j = b.scrollHeight;
    let d = F;
    s && (d = Math.max(Number(s) * j, d)), i && (d = Math.min(Number(i) * j, d)), d = Math.max(d, j);
    const N = d + ($ === "border-box" ? I + M : 0), S = Math.abs(d - F) <= 1;
    return {
      outerHeightStyle: N,
      overflowing: S
    };
  }, [i, s, t.placeholder]), f = Rt(() => {
    const w = p.current, b = y();
    if (!w || !b || Rs(b))
      return !1;
    const T = b.outerHeightStyle;
    return h.current != null && h.current !== T;
  }), v = x.useCallback(() => {
    const w = p.current, b = y();
    if (!w || !b || Rs(b))
      return;
    const T = b.outerHeightStyle;
    h.current !== T && (h.current = T, w.style.height = `${T}px`), w.style.overflow = b.overflowing ? "hidden" : "";
  }, [y]), E = x.useRef(-1);
  ct(() => {
    const w = oi(v), b = p == null ? void 0 : p.current;
    if (!b)
      return;
    const T = ut(b);
    T.addEventListener("resize", w);
    let O;
    return typeof ResizeObserver < "u" && (O = new ResizeObserver(() => {
      f() && (O.unobserve(b), cancelAnimationFrame(E.current), v(), E.current = requestAnimationFrame(() => {
        O.observe(b);
      }));
    }), O.observe(b)), () => {
      w.clear(), cancelAnimationFrame(E.current), T.removeEventListener("resize", w), O && O.disconnect();
    };
  }, [y, v, f]), ct(() => {
    v();
  });
  const C = (w) => {
    u || v();
    const b = w.target, T = b.value.length, O = b.value.endsWith(`
`), $ = b.selectionStart === T;
    O && $ && b.setSelectionRange(T, T), r && r(w);
  };
  return /* @__PURE__ */ Ie(x.Fragment, {
    children: [/* @__PURE__ */ L("textarea", {
      value: l,
      onChange: C,
      ref: m,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ L("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: g,
      tabIndex: -1,
      style: {
        ...Ch.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (El.propTypes = {
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
const Nh = El;
function vo({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
function ks(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function $n(e, t = !1) {
  return e && (ks(e.value) && e.value !== "" || t && ks(e.defaultValue) && e.defaultValue !== "");
}
function Rh(e) {
  return e.startAdornment;
}
function kh(e) {
  return ue("MuiInputBase", e);
}
const Ph = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), po = Ph;
var Ps;
const Zn = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${K(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, er = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, $h = (e) => {
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
    size: h,
    startAdornment: g,
    type: y
  } = e, f = {
    root: ["root", `color${K(n)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", h && h !== "medium" && `size${K(h)}`, p && "multiline", g && "adornedStart", s && "adornedEnd", u && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", y === "search" && "inputTypeSearch", p && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", g && "inputAdornedStart", s && "inputAdornedEnd", m && "readOnly"]
  };
  return de(f, kh, t);
}, tr = G("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Zn
})(fe(({
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
  [`&.${po.disabled}`]: {
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
}))), or = G("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: er
})(fe(({
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
    [`label[data-shrink=false] + .${po.formControl} &`]: {
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
    [`&.${po.disabled}`]: {
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
})), $s = Ud({
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
}), Ol = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    endAdornment: y,
    error: f,
    fullWidth: v = !1,
    id: E,
    inputComponent: C = "input",
    inputProps: w = {},
    inputRef: b,
    margin: T,
    maxRows: O,
    minRows: $,
    multiline: I = !1,
    name: M,
    onBlur: F,
    onChange: j,
    onClick: d,
    onFocus: N,
    onKeyDown: S,
    onKeyUp: R,
    placeholder: P,
    readOnly: _,
    renderSuffix: z,
    rows: A,
    size: k,
    slotProps: B = {},
    slots: q = {},
    startAdornment: H,
    type: Y = "text",
    value: J,
    ...Q
  } = r, X = w.value != null ? w.value : J, {
    current: ee
  } = x.useRef(X != null), Z = x.useRef(), W = x.useCallback((ae) => {
    process.env.NODE_ENV !== "production" && ae && ae.nodeName !== "INPUT" && !ae.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), te = Be(Z, b, w.ref, W), [U, le] = x.useState(!1), ne = Qt();
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    if (ne)
      return ne.registerEffect();
  }, [ne]);
  const pe = vo({
    props: r,
    muiFormControl: ne,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  pe.focused = ne ? ne.focused : U, x.useEffect(() => {
    !ne && h && U && (le(!1), F && F());
  }, [ne, h, U, F]);
  const je = ne && ne.onFilled, Ne = ne && ne.onEmpty, Te = x.useCallback((ae) => {
    $n(ae) ? je && je() : Ne && Ne();
  }, [je, Ne]);
  ct(() => {
    ee && Te({
      value: X
    });
  }, [X, Te, ee]);
  const Ae = (ae) => {
    N && N(ae), w.onFocus && w.onFocus(ae), ne && ne.onFocus ? ne.onFocus(ae) : le(!0);
  }, Re = (ae) => {
    F && F(ae), w.onBlur && w.onBlur(ae), ne && ne.onBlur ? ne.onBlur(ae) : le(!1);
  }, Oe = (ae, ...it) => {
    if (!ee) {
      const _e = ae.target || Z.current;
      if (_e == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : vt(1));
      Te({
        value: _e.value
      });
    }
    w.onChange && w.onChange(ae, ...it), j && j(ae, ...it);
  };
  x.useEffect(() => {
    Te(Z.current);
  }, []);
  const oe = (ae) => {
    Z.current && ae.currentTarget === ae.target && Z.current.focus(), d && d(ae);
  };
  let We = C, Ce = w;
  I && We === "input" && (A ? (process.env.NODE_ENV !== "production" && ($ || O) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Ce = {
    type: void 0,
    minRows: A,
    maxRows: A,
    ...Ce
  }) : Ce = {
    type: void 0,
    maxRows: O,
    minRows: $,
    ...Ce
  }, We = Nh);
  const Et = (ae) => {
    Te(ae.animationName === "mui-auto-fill-cancel" ? Z.current : {
      value: "x"
    });
  };
  x.useEffect(() => {
    ne && ne.setAdornedStart(!!H);
  }, [ne, H]);
  const He = {
    ...r,
    color: pe.color || "primary",
    disabled: pe.disabled,
    endAdornment: y,
    error: pe.error,
    focused: pe.focused,
    formControl: ne,
    fullWidth: v,
    hiddenLabel: pe.hiddenLabel,
    multiline: I,
    size: pe.size,
    startAdornment: H,
    type: Y
  }, Ue = $h(He), nt = q.root || u.Root || tr, rt = B.root || p.root || {}, Ot = q.input || u.Input || or;
  return Ce = {
    ...Ce,
    ...B.input ?? p.input
  }, /* @__PURE__ */ Ie(x.Fragment, {
    children: [!g && typeof $s == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Ps || (Ps = /* @__PURE__ */ L($s, {}))), /* @__PURE__ */ Ie(nt, {
      ...rt,
      ref: n,
      onClick: oe,
      ...Q,
      ...!En(nt) && {
        ownerState: {
          ...He,
          ...rt.ownerState
        }
      },
      className: ie(Ue.root, rt.className, l, _ && "MuiInputBase-readOnly"),
      children: [H, /* @__PURE__ */ L(Jn.Provider, {
        value: null,
        children: /* @__PURE__ */ L(Ot, {
          "aria-invalid": pe.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: m,
          disabled: pe.disabled,
          id: E,
          onAnimationStart: Et,
          name: M,
          placeholder: P,
          readOnly: _,
          required: pe.required,
          rows: A,
          value: X,
          onKeyDown: S,
          onKeyUp: R,
          type: Y,
          ...Ce,
          ...!En(Ot) && {
            as: We,
            ownerState: {
              ...He,
              ...Ce.ownerState
            }
          },
          ref: te,
          className: ie(Ue.input, Ce.className, _ && "MuiInputBase-readOnly"),
          onBlur: Re,
          onChange: Oe,
          onFocus: Ae
        })
      }), y, z ? z({
        ...pe,
        startAdornment: H
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
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
  inputComponent: ri,
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
const ui = Ol;
function Ih(e) {
  return ue("MuiInput", e);
}
const Mh = {
  ...po,
  ...ce("MuiInput", ["root", "underline", "input"])
}, No = Mh, Ah = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = de({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Ih, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, Dh = G(tr, {
  shouldForwardProp: (e) => Ke(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Zn(e, t), !n.disableUnderline && t.underline];
  }
})(fe(({
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
        [`&.${No.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${No.error}`]: {
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
        [`&:hover:not(.${No.disabled}, .${No.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${No.disabled}:before`]: {
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
})), Bh = G(or, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: er
})({}), pi = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  } = r, y = Ah(r), v = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, E = p ?? a ? Le(p ?? a, v) : v, C = m.root ?? s.Root ?? Dh, w = m.input ?? s.Input ?? Bh;
  return /* @__PURE__ */ L(ui, {
    slots: {
      root: C,
      input: w
    },
    slotProps: E,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: n,
    type: h,
    ...g,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (pi.propTypes = {
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
pi.muiName = "Input";
const Cl = pi;
function jh(e) {
  return ue("MuiFilledInput", e);
}
const Lh = {
  ...po,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, Ut = Lh, _h = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: i,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", r && "adornedStart", i && "adornedEnd", s === "small" && `size${K(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = de(c, jh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, Fh = G(tr, {
  shouldForwardProp: (e) => Ke(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Zn(e, t), !n.disableUnderline && t.underline];
  }
})(fe(({
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
    [`&.${Ut.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Ut.disabled}`]: {
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
        [`&.${Ut.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Ut.error}`]: {
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
        [`&:hover:not(.${Ut.disabled}, .${Ut.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Ut.disabled}:before`]: {
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
})), Uh = G(or, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: er
})(fe(({
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
}))), di = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    ...y
  } = r, f = {
    ...r,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: u,
    multiline: p,
    type: g
  }, v = _h(r), E = {
    root: {
      ownerState: f
    },
    input: {
      ownerState: f
    }
  }, C = m ?? a ? Le(E, m ?? a) : E, w = h.root ?? s.Root ?? Fh, b = h.input ?? s.Input ?? Uh;
  return /* @__PURE__ */ L(ui, {
    slots: {
      root: w,
      input: b
    },
    slotProps: C,
    fullWidth: l,
    inputComponent: u,
    multiline: p,
    ref: n,
    type: g,
    ...y,
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
di.muiName = "Input";
const Sl = di;
var Is;
const zh = G("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Ke
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
}), Vh = G("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Ke
})(fe(({
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
function Nl(e) {
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
  return /* @__PURE__ */ L(zh, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ L(Vh, {
      ownerState: c,
      children: l ? /* @__PURE__ */ L("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Is || (Is = /* @__PURE__ */ L("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (Nl.propTypes = {
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
function Wh(e) {
  return ue("MuiOutlinedInput", e);
}
const Hh = {
  ...po,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, mt = Hh, qh = (e) => {
  const {
    classes: t
  } = e, r = de({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Wh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, Yh = G(tr, {
  shouldForwardProp: (e) => Ke(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Zn
})(fe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${mt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${mt.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${mt.focused} .${mt.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(pt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${mt.focused} .${mt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${mt.error} .${mt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${mt.disabled} .${mt.notchedOutline}`]: {
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
})), Gh = G(Nl, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(fe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), Kh = G(or, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: er
})(fe(({
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
}))), fi = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  } = r, y = qh(r), f = Qt(), v = vo({
    props: r,
    muiFormControl: f,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), E = {
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
  }, C = p.root ?? i.Root ?? Yh, w = p.input ?? i.Input ?? Kh, [b, T] = xe("notchedOutline", {
    elementType: Gh,
    className: y.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: E,
    externalForwardedProps: {
      slots: p,
      slotProps: m
    },
    additionalProps: {
      label: l != null && l !== "" && v.required ? /* @__PURE__ */ Ie(x.Fragment, {
        children: [l, " ", "*"]
      }) : l
    }
  });
  return /* @__PURE__ */ L(ui, {
    slots: {
      root: C,
      input: w
    },
    slotProps: m,
    renderSuffix: (O) => /* @__PURE__ */ L(b, {
      ...T,
      notched: typeof u < "u" ? u : !!(O.startAdornment || O.filled || O.focused)
    }),
    fullWidth: s,
    inputComponent: a,
    multiline: c,
    ref: n,
    type: h,
    ...g,
    classes: {
      ...y,
      notchedOutline: null
    }
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
fi.muiName = "Input";
const Rl = fi;
function Xh(e) {
  return ue("MuiFormLabel", e);
}
const Qh = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Lo = Qh, Jh = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${K(n)}`, i && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return de(c, Xh, t);
}, Zh = G("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(fe(({
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
      [`&.${Lo.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Lo.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Lo.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), eg = G("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(fe(({
  theme: e
}) => ({
  [`&.${Lo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), kl = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  } = r, y = Qt(), f = vo({
    props: r,
    muiFormControl: y,
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
  }, E = Jh(v);
  return /* @__PURE__ */ Ie(Zh, {
    as: l,
    ownerState: v,
    className: ie(E.root, s),
    ref: n,
    ...g,
    children: [i, f.required && /* @__PURE__ */ Ie(eg, {
      ownerState: v,
      "aria-hidden": !0,
      className: E.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (kl.propTypes = {
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
const tg = kl;
function og(e) {
  return ue("MuiInputLabel", e);
}
ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const ng = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !s && "animated", i && "shrink", r && r !== "medium" && `size${K(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = de(c, og, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, rg = G(tg, {
  shouldForwardProp: (e) => Ke(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Lo.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(fe(({
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
}))), Pl = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: s,
    shrink: a,
    variant: l,
    className: c,
    ...u
  } = r, p = Qt();
  let m = a;
  typeof m > "u" && p && (m = p.filled || p.focused || p.adornedStart);
  const h = vo({
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
  }, y = ng(g);
  return /* @__PURE__ */ L(rg, {
    "data-shrink": m,
    ref: n,
    className: ie(y.root, c),
    ...u,
    ownerState: g,
    classes: y
  });
});
process.env.NODE_ENV !== "production" && (Pl.propTypes = {
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
const ig = Pl;
function sg(e) {
  return ue("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const ag = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${K(n)}`, r && "fullWidth"]
  };
  return de(i, sg, t);
}, lg = G("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${K(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), $l = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    required: y = !1,
    size: f = "medium",
    variant: v = "outlined",
    ...E
  } = r, C = {
    ...r,
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: m,
    hiddenLabel: h,
    margin: g,
    required: y,
    size: f,
    variant: v
  }, w = ag(C), [b, T] = x.useState(() => {
    let P = !1;
    return i && x.Children.forEach(i, (_) => {
      if (!vr(_, ["Input", "Select"]))
        return;
      const z = vr(_, ["Select"]) ? _.props.input : _;
      z && Rh(z.props) && (P = !0);
    }), P;
  }), [O, $] = x.useState(() => {
    let P = !1;
    return i && x.Children.forEach(i, (_) => {
      vr(_, ["Input", "Select"]) && ($n(_.props, !0) || $n(_.props.inputProps, !0)) && (P = !0);
    }), P;
  }), [I, M] = x.useState(!1);
  c && I && M(!1);
  const F = p !== void 0 && !c ? p : I;
  let j;
  const d = x.useRef(!1);
  process.env.NODE_ENV !== "production" && (j = () => (d.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), d.current = !0, () => {
    d.current = !1;
  }));
  const N = x.useCallback(() => {
    $(!0);
  }, []), S = x.useCallback(() => {
    $(!1);
  }, []), R = x.useMemo(() => ({
    adornedStart: b,
    setAdornedStart: T,
    color: a,
    disabled: c,
    error: u,
    filled: O,
    focused: F,
    fullWidth: m,
    hiddenLabel: h,
    size: f,
    onBlur: () => {
      M(!1);
    },
    onFocus: () => {
      M(!0);
    },
    onEmpty: S,
    onFilled: N,
    registerEffect: j,
    required: y,
    variant: v
  }), [b, a, c, u, O, F, m, h, j, S, N, y, f, v]);
  return /* @__PURE__ */ L(Jn.Provider, {
    value: R,
    children: /* @__PURE__ */ L(lg, {
      as: l,
      ownerState: C,
      className: ie(w.root, s),
      ref: n,
      ...E,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && ($l.propTypes = {
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
const cg = $l;
function ug(e) {
  return ue("MuiFormHelperText", e);
}
const pg = ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Ms = pg;
var As;
const dg = (e) => {
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
    root: ["root", i && "disabled", s && "error", r && `size${K(r)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return de(u, ug, t);
}, fg = G("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${K(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(fe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Ms.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ms.error}`]: {
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
}))), Il = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    ...y
  } = r, f = Qt(), v = vo({
    props: r,
    muiFormControl: f,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), E = {
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
  delete E.ownerState;
  const C = dg(E);
  return /* @__PURE__ */ L(fg, {
    as: a,
    className: ie(C.root, s),
    ref: n,
    ...y,
    ownerState: E,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      As || (As = /* @__PURE__ */ L("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (Il.propTypes = {
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
const mg = Il;
function hg(e) {
  return ue("MuiNativeSelect", e);
}
const gg = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), mi = gg, bg = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${K(n)}`, s && "iconOpen", r && "disabled"]
  };
  return de(l, hg, t);
}, Ml = G("select", {
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
  [`&.${mi.disabled}`]: {
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
})), yg = G(Ml, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Ke,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${mi.multiple}`]: t.multiple
    }];
  }
})({}), Al = G("svg", {
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
  [`&.${mi.disabled}`]: {
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
})), vg = G(Al, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${K(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Dl = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, m = bg(p);
  return /* @__PURE__ */ Ie(x.Fragment, {
    children: [/* @__PURE__ */ L(yg, {
      ownerState: p,
      className: ie(m.select, r),
      disabled: i,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ L(vg, {
      as: a,
      ownerState: p,
      className: m.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Dl.propTypes = {
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
const xg = Dl;
function Bl(e) {
  return ue("MuiSelect", e);
}
const Ro = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Ds;
const Tg = G(Ml, {
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
}), wg = G(Al, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${K(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Eg = G("input", {
  shouldForwardProp: (e) => ka(e) && e !== "classes",
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
function Bs(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Og(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Cg = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${K(n)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return de(l, Bl, t);
}, jl = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var _t, tn, on, nn;
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
    IconComponent: y,
    inputRef: f,
    labelId: v,
    MenuProps: E = {},
    multiple: C,
    name: w,
    onBlur: b,
    onChange: T,
    onClose: O,
    onFocus: $,
    // eslint-disable-next-line react/prop-types
    onKeyDown: I,
    // eslint-disable-next-line react/prop-types
    onMouseDown: M,
    onOpen: F,
    open: j,
    readOnly: d,
    renderValue: N,
    required: S,
    SelectDisplayProps: R = {},
    tabIndex: P,
    // catching `type` from Input which makes no sense for SelectInput
    type: _,
    value: z,
    variant: A = "standard",
    ...k
  } = t, [B, q] = Mr({
    controlled: z,
    default: p,
    name: "Select"
  }), [H, Y] = Mr({
    controlled: j,
    default: u,
    name: "Select"
  }), J = x.useRef(null), Q = x.useRef(null), [X, ee] = x.useState(null), {
    current: Z
  } = x.useRef(j != null), [W, te] = x.useState(), U = Be(n, f), le = x.useCallback((re) => {
    Q.current = re, re && ee(re);
  }, []), ne = X == null ? void 0 : X.parentNode;
  x.useImperativeHandle(U, () => ({
    focus: () => {
      Q.current.focus();
    },
    node: J.current,
    value: B
  }), [B]), x.useEffect(() => {
    u && H && X && !Z && (te(a ? null : ne.clientWidth), Q.current.focus());
  }, [X, a]), x.useEffect(() => {
    s && Q.current.focus();
  }, [s]), x.useEffect(() => {
    if (!v)
      return;
    const re = Ye(Q.current).getElementById(v);
    if (re) {
      const he = () => {
        getSelection().isCollapsed && Q.current.focus();
      };
      return re.addEventListener("click", he), () => {
        re.removeEventListener("click", he);
      };
    }
  }, [v]);
  const pe = (re, he) => {
    re ? F && F(he) : O && O(he), Z || (te(a ? null : ne.clientWidth), Y(re));
  }, je = (re) => {
    M == null || M(re), re.button === 0 && (re.preventDefault(), Q.current.focus(), pe(!0, re));
  }, Ne = (re) => {
    pe(!1, re);
  }, Te = x.Children.toArray(l), Ae = (re) => {
    const he = Te.find((De) => De.props.value === re.target.value);
    he !== void 0 && (q(he.props.value), T && T(re, he));
  }, Re = (re) => (he) => {
    let De;
    if (he.currentTarget.hasAttribute("tabindex")) {
      if (C) {
        De = Array.isArray(B) ? B.slice() : [];
        const It = B.indexOf(re.props.value);
        It === -1 ? De.push(re.props.value) : De.splice(It, 1);
      } else
        De = re.props.value;
      if (re.props.onClick && re.props.onClick(he), B !== De && (q(De), T)) {
        const It = he.nativeEvent || he, rn = new It.constructor(It.type, It);
        Object.defineProperty(rn, "target", {
          writable: !0,
          value: {
            value: De,
            name: w
          }
        }), T(rn, re);
      }
      C || pe(!1, he);
    }
  }, Oe = (re) => {
    d || ([
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(re.key) && (re.preventDefault(), pe(!0, re)), I == null || I(re));
  }, oe = X !== null && H, We = (re) => {
    !oe && b && (Object.defineProperty(re, "target", {
      writable: !0,
      value: {
        value: B,
        name: w
      }
    }), b(re));
  };
  delete k["aria-invalid"];
  let Ce, Et;
  const He = [];
  let Ue = !1, nt = !1;
  ($n({
    value: B
  }) || h) && (N ? Ce = N(B) : Ue = !0);
  const rt = Te.map((re) => {
    if (!/* @__PURE__ */ x.isValidElement(re))
      return null;
    process.env.NODE_ENV !== "production" && Gt.isFragment(re) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let he;
    if (C) {
      if (!Array.isArray(B))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : vt(2));
      he = B.some((De) => Bs(De, re.props.value)), he && Ue && He.push(re.props.children);
    } else
      he = Bs(B, re.props.value), he && Ue && (Et = re.props.children);
    return he && (nt = !0), /* @__PURE__ */ x.cloneElement(re, {
      "aria-selected": he ? "true" : "false",
      onClick: Re(re),
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
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    if (!nt && !C && B !== "") {
      const re = Te.map((he) => he.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${B}\` for the select ${w ? `(name="${w}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${re.filter((he) => he != null).map((he) => `\`${he}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [nt, Te, C, w, B]), Ue && (C ? He.length === 0 ? Ce = null : Ce = He.reduce((re, he, De) => (re.push(he), De < He.length - 1 && re.push(", "), re), []) : Ce = Et);
  let Ot = W;
  !a && Z && X && (Ot = ne.clientWidth);
  let ae;
  typeof P < "u" ? ae = P : ae = m ? null : 0;
  const it = R.id || (w ? `mui-component-select-${w}` : void 0), _e = {
    ...t,
    variant: A,
    value: B,
    open: oe,
    error: g
  }, Fe = Cg(_e), xo = {
    ...E.PaperProps,
    ...typeof ((_t = E.slotProps) == null ? void 0 : _t.paper) == "function" ? E.slotProps.paper(_e) : (tn = E.slotProps) == null ? void 0 : tn.paper
  }, To = {
    ...E.MenuListProps,
    ...typeof ((on = E.slotProps) == null ? void 0 : on.list) == "function" ? E.slotProps.list(_e) : (nn = E.slotProps) == null ? void 0 : nn.list
  }, en = Xo();
  return /* @__PURE__ */ Ie(x.Fragment, {
    children: [/* @__PURE__ */ L(Tg, {
      as: "div",
      ref: le,
      tabIndex: ae,
      role: "combobox",
      "aria-controls": oe ? en : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": oe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [v, it].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": S ? "true" : void 0,
      "aria-invalid": g ? "true" : void 0,
      onKeyDown: Oe,
      onMouseDown: m || d ? null : je,
      onBlur: We,
      onFocus: $,
      ...R,
      ownerState: _e,
      className: ie(R.className, Fe.select, c),
      id: it,
      children: Og(Ce) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ds || (Ds = /* @__PURE__ */ L("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Ce
    }), /* @__PURE__ */ L(Eg, {
      "aria-invalid": g,
      value: Array.isArray(B) ? B.join(",") : B,
      name: w,
      ref: J,
      "aria-hidden": !0,
      onChange: Ae,
      tabIndex: -1,
      disabled: m,
      className: Fe.nativeInput,
      autoFocus: s,
      required: S,
      ...k,
      ownerState: _e
    }), /* @__PURE__ */ L(wg, {
      as: y,
      className: Fe.icon,
      ownerState: _e
    }), /* @__PURE__ */ L(xl, {
      id: `menu-${w || ""}`,
      anchorEl: ne,
      open: oe,
      onClose: Ne,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...E,
      slotProps: {
        ...E.slotProps,
        list: {
          "aria-labelledby": v,
          role: "listbox",
          "aria-multiselectable": C ? "true" : void 0,
          disableListWrap: !0,
          id: en,
          ...To
        },
        paper: {
          ...xo,
          style: {
            minWidth: Ot,
            ...xo != null ? xo.style : null
          }
        }
      },
      children: rt
    })]
  });
});
process.env.NODE_ENV !== "production" && (jl.propTypes = {
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
const Sg = jl, Ng = Pt(/* @__PURE__ */ L("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Rg = (e) => {
  const {
    classes: t
  } = e, r = de({
    root: ["root"]
  }, Bl, t);
  return {
    ...t,
    ...r
  };
}, hi = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Ke(e) && e !== "variant"
}, kg = G(Cl, hi)(""), Pg = G(Rl, hi)(""), $g = G(Sl, hi)(""), gi = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: p = Ng,
    id: m,
    input: h,
    inputProps: g,
    label: y,
    labelId: f,
    MenuProps: v,
    multiple: E = !1,
    native: C = !1,
    onClose: w,
    onOpen: b,
    open: T,
    renderValue: O,
    SelectDisplayProps: $,
    variant: I = "outlined",
    ...M
  } = r, F = C ? xg : Sg, j = Qt(), d = vo({
    props: r,
    muiFormControl: j,
    states: ["variant", "error"]
  }), N = d.variant || I, S = {
    ...r,
    variant: N,
    classes: a
  }, R = Rg(S), {
    root: P,
    ..._
  } = R, z = h || {
    standard: /* @__PURE__ */ L(kg, {
      ownerState: S
    }),
    outlined: /* @__PURE__ */ L(Pg, {
      label: y,
      ownerState: S
    }),
    filled: /* @__PURE__ */ L($g, {
      ownerState: S
    })
  }[N], A = Be(n, Jt(z));
  return /* @__PURE__ */ L(x.Fragment, {
    children: /* @__PURE__ */ x.cloneElement(z, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: F,
      inputProps: {
        children: s,
        error: d.error,
        IconComponent: p,
        variant: N,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: E,
        ...C ? {
          id: m
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: u,
          labelId: f,
          MenuProps: v,
          onClose: w,
          onOpen: b,
          open: T,
          renderValue: O,
          SelectDisplayProps: {
            id: m,
            ...$
          }
        },
        ...g,
        classes: g ? Le(_, g.classes) : _,
        ...h ? h.props.inputProps : {}
      },
      ...(E && C || u) && N === "outlined" ? {
        notched: !0
      } : {},
      ref: A,
      className: ie(z.props.className, l, R.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!h && {
        variant: N
      },
      ...M
    })
  });
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
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
gi.muiName = "Select";
const Ig = gi;
function Mg(e) {
  return ue("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const Ag = {
  standard: Cl,
  filled: Sl,
  outlined: Rl
}, Dg = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, Mg, t);
}, Bg = G(cg, {
  name: "MuiTextField",
  slot: "Root"
})({}), Ll = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    helperText: y,
    id: f,
    InputLabelProps: v,
    inputProps: E,
    InputProps: C,
    inputRef: w,
    label: b,
    maxRows: T,
    minRows: O,
    multiline: $ = !1,
    name: I,
    onBlur: M,
    onChange: F,
    onFocus: j,
    placeholder: d,
    required: N = !1,
    rows: S,
    select: R = !1,
    SelectProps: P,
    slots: _ = {},
    slotProps: z = {},
    type: A,
    value: k,
    variant: B = "outlined",
    ...q
  } = r, H = {
    ...r,
    autoFocus: s,
    color: c,
    disabled: p,
    error: m,
    fullWidth: g,
    multiline: $,
    required: N,
    select: R,
    variant: B
  }, Y = Dg(H);
  process.env.NODE_ENV !== "production" && R && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const J = Xo(f), Q = y && J ? `${J}-helper-text` : void 0, X = b && J ? `${J}-label` : void 0, ee = Ag[B], Z = {
    slots: _,
    slotProps: {
      input: C,
      inputLabel: v,
      htmlInput: E,
      formHelperText: h,
      select: P,
      ...z
    }
  }, W = {}, te = Z.slotProps.inputLabel;
  B === "outlined" && (te && typeof te.shrink < "u" && (W.notched = te.shrink), W.label = b), R && ((!P || !P.native) && (W.id = void 0), W["aria-describedby"] = void 0);
  const [U, le] = xe("root", {
    elementType: Bg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...Z,
      ...q
    },
    ownerState: H,
    className: ie(Y.root, l),
    ref: n,
    additionalProps: {
      disabled: p,
      error: m,
      fullWidth: g,
      required: N,
      color: c,
      variant: B
    }
  }), [ne, pe] = xe("input", {
    elementType: ee,
    externalForwardedProps: Z,
    additionalProps: W,
    ownerState: H
  }), [je, Ne] = xe("inputLabel", {
    elementType: ig,
    externalForwardedProps: Z,
    ownerState: H
  }), [Te, Ae] = xe("htmlInput", {
    elementType: "input",
    externalForwardedProps: Z,
    ownerState: H
  }), [Re, Oe] = xe("formHelperText", {
    elementType: mg,
    externalForwardedProps: Z,
    ownerState: H
  }), [oe, We] = xe("select", {
    elementType: Ig,
    externalForwardedProps: Z,
    ownerState: H
  }), Ce = /* @__PURE__ */ L(ne, {
    "aria-describedby": Q,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: g,
    multiline: $,
    name: I,
    rows: S,
    maxRows: T,
    minRows: O,
    type: A,
    value: k,
    id: J,
    inputRef: w,
    onBlur: M,
    onChange: F,
    onFocus: j,
    placeholder: d,
    inputProps: Ae,
    slots: {
      input: _.htmlInput ? Te : void 0
    },
    ...pe
  });
  return /* @__PURE__ */ Ie(U, {
    ...le,
    children: [b != null && b !== "" && /* @__PURE__ */ L(je, {
      htmlFor: J,
      id: X,
      ...Ne,
      children: b
    }), R ? /* @__PURE__ */ L(oe, {
      "aria-describedby": Q,
      id: J,
      labelId: X,
      value: k,
      input: Ce,
      ...We,
      children: a
    }) : Ce, y && /* @__PURE__ */ L(Re, {
      id: Q,
      ...Oe,
      children: y
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ll.propTypes = {
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
const jg = Ll;
function Lg(e) {
  return ue("MuiToolbar", e);
}
ce("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const _g = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return de({
    root: ["root", !n && "gutters", r]
  }, Lg, t);
}, Fg = G("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(fe(({
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
}))), _l = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
  }, p = _g(u);
  return /* @__PURE__ */ L(Fg, {
    as: s,
    className: ie(p.root, i),
    ref: n,
    ownerState: u,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (_l.propTypes = {
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
const Ug = _l, zg = Ep({
  themeId: Qo
}), Vg = zg, Wg = G(Ug)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Hg = ({
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
  showNotifications: h = !1,
  notificationCount: g = 0,
  showSearchbar: y = !0,
  searchValue: f,
  onSearchChange: v,
  onSearchSubmit: E,
  showProfile: C = !0,
  userRole: w,
  accentColor: b = "#01584f",
  contentBackgroundColor: T = "#f2f9fc",
  navbarBackground: O = "#ff0000",
  navbarAccentColor: $ = "#000000",
  rightExtraContent: I = []
}) => {
  const M = Vg((A) => A.breakpoints.up("md")), [F, j] = x.useState(null), d = !!F, N = (A) => {
    v == null || v(A.target.value);
  }, S = (A) => {
    A.key === "Enter" && E && f && E(f);
  }, R = (A) => A ? A.charAt(0).toUpperCase() + A.slice(1).toLowerCase() : "User", P = (A) => {
    j(A.currentTarget);
  }, _ = () => {
    j(null);
  }, z = (A) => {
    A == null || A(), _();
  };
  return /* @__PURE__ */ V(
    lf,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: O,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...i
      },
      children: /* @__PURE__ */ V(Wg, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ V(
          Je,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 2,
              flexShrink: 0,
              flexGrow: 1
            },
            children: [
              r && !M && /* @__PURE__ */ V(
                Wo,
                {
                  "aria-label": "menu",
                  onClick: n,
                  sx: {
                    color: $,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ V(Gd, {}, void 0, !1, {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                    lineNumber: 174,
                    columnNumber: 8
                  }, globalThis)
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                  lineNumber: 164,
                  columnNumber: 7
                },
                globalThis
              ),
              /* @__PURE__ */ V(
                Je,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ V(
                      gt,
                      {
                        variant: "h6",
                        sx: {
                          color: $,
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
                        lineNumber: 186,
                        columnNumber: 7
                      },
                      globalThis
                    ),
                    /* @__PURE__ */ V(
                      "img",
                      {
                        src: "/lumora-logo.svg",
                        alt: "NEXA Logo",
                        width: 24,
                        height: 24,
                        style: { flexShrink: 0 }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 198,
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
                  lineNumber: 178,
                  columnNumber: 6
                },
                globalThis
              ),
              y && M && /* @__PURE__ */ V(
                jg,
                {
                  placeholder: "Search for deals or documents...",
                  value: f || "",
                  onChange: N,
                  onKeyDown: S,
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
                        borderColor: b
                      }
                    }
                  },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ V(Rm, { position: "start", children: /* @__PURE__ */ V(
                      Xd,
                      {
                        sx: { color: $ }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                      },
                      globalThis
                    ) }, void 0, !1, {
                      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                      lineNumber: 232,
                      columnNumber: 10
                    }, globalThis)
                  }
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                  lineNumber: 208,
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
            lineNumber: 154,
            columnNumber: 5
          },
          globalThis
        ),
        /* @__PURE__ */ V(
          Je,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              h && /* @__PURE__ */ V(
                Va,
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
                  children: /* @__PURE__ */ V(
                    Wo,
                    {
                      size: "small",
                      sx: { color: $ },
                      children: /* @__PURE__ */ V(Kd, {}, void 0, !1, {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                      }, globalThis)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                      lineNumber: 265,
                      columnNumber: 8
                    },
                    globalThis
                  )
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                  lineNumber: 254,
                  columnNumber: 7
                },
                globalThis
              ),
              h && C && /* @__PURE__ */ V(
                Dt,
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
                  lineNumber: 275,
                  columnNumber: 7
                },
                globalThis
              ),
              C && /* @__PURE__ */ V(Ks, { children: [
                /* @__PURE__ */ V(
                  Je,
                  {
                    direction: "row",
                    onClick: P,
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
                      l ? /* @__PURE__ */ V(
                        Dr,
                        {
                          src: l,
                          sx: { width: 32, height: 32 }
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                          lineNumber: 303,
                          columnNumber: 10
                        },
                        globalThis
                      ) : /* @__PURE__ */ V(
                        as,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: $
                          }
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                          lineNumber: 308,
                          columnNumber: 10
                        },
                        globalThis
                      ),
                      /* @__PURE__ */ V(
                        so,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ V(
                              gt,
                              {
                                variant: "body2",
                                sx: {
                                  color: $,
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
                                lineNumber: 324,
                                columnNumber: 10
                              },
                              globalThis
                            ),
                            /* @__PURE__ */ V(
                              gt,
                              {
                                variant: "caption",
                                sx: {
                                  color: $,
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
                                lineNumber: 338,
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
                          lineNumber: 316,
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
                    lineNumber: 288,
                    columnNumber: 8
                  },
                  globalThis
                ),
                /* @__PURE__ */ V(
                  xl,
                  {
                    anchorEl: F,
                    open: d,
                    onClose: _,
                    transformOrigin: {
                      horizontal: "right",
                      vertical: "top"
                    },
                    anchorOrigin: {
                      horizontal: "right",
                      vertical: "bottom"
                    },
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
                      /* @__PURE__ */ V(
                        Ns,
                        {
                          onClick: () => z(p),
                          children: "Settings"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                          lineNumber: 377,
                          columnNumber: 9
                        },
                        globalThis
                      ),
                      /* @__PURE__ */ V(Dt, {}, void 0, !1, {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                      }, globalThis),
                      /* @__PURE__ */ V(
                        Ns,
                        {
                          onClick: () => z(m),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ V(gt, { sx: { flexGrow: 1 }, children: "Logout" }, void 0, !1, {
                              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                              lineNumber: 396,
                              columnNumber: 10
                            }, globalThis),
                            /* @__PURE__ */ V($a, { fontSize: "small" }, void 0, !1, {
                              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                              lineNumber: 399,
                              columnNumber: 10
                            }, globalThis)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                          lineNumber: 385,
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
                    lineNumber: 353,
                    columnNumber: 8
                  },
                  globalThis
                )
              ] }, void 0, !0, {
                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                lineNumber: 287,
                columnNumber: 7
              }, globalThis),
              I.length !== 0 && I.map((A) => A.type === "divider" ? /* @__PURE__ */ V(
                Dt,
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
                  lineNumber: 408,
                  columnNumber: 10
                },
                globalThis
              ) : A.type === "profile" ? /* @__PURE__ */ V(
                Je,
                {
                  direction: "row",
                  onClick: A.onClick,
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
                    A.avatar ? /* @__PURE__ */ V(
                      Dr,
                      {
                        src: A.avatar,
                        sx: { width: 32, height: 32 }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 437,
                        columnNumber: 12
                      },
                      globalThis
                    ) : /* @__PURE__ */ V(
                      as,
                      {
                        sx: {
                          width: 32,
                          height: 32,
                          color: $
                        }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 442,
                        columnNumber: 12
                      },
                      globalThis
                    ),
                    /* @__PURE__ */ V(
                      so,
                      {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          minWidth: 0
                        },
                        children: [
                          /* @__PURE__ */ V(
                            gt,
                            {
                              variant: "body2",
                              sx: {
                                color: $,
                                fontWeight: 500,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: A.name
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                              lineNumber: 458,
                              columnNumber: 12
                            },
                            globalThis
                          ),
                          /* @__PURE__ */ V(
                            gt,
                            {
                              variant: "caption",
                              sx: {
                                color: $,
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "150px"
                              },
                              children: A.role
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                              lineNumber: 472,
                              columnNumber: 12
                            },
                            globalThis
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                      },
                      globalThis
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
                  lineNumber: 422,
                  columnNumber: 10
                },
                globalThis
              ) : null)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
            lineNumber: 244,
            columnNumber: 5
          },
          globalThis
        )
      ] }, void 0, !0, {
        fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
        lineNumber: 152,
        columnNumber: 4
      }, globalThis)
    },
    void 0,
    !1,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/AppNavbar.tsx",
      lineNumber: 139,
      columnNumber: 3
    },
    globalThis
  );
};
function qg(e) {
  return ue("MuiCard", e);
}
ce("MuiCard", ["root"]);
const Yg = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, qg, t);
}, Gg = G(Xn, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Fl = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCard"
  }), {
    className: i,
    raised: s = !1,
    ...a
  } = r, l = {
    ...r,
    raised: s
  }, c = Yg(l);
  return /* @__PURE__ */ L(Gg, {
    className: ie(c.root, i),
    elevation: s ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Fl.propTypes = {
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
  raised: wt(o.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Kg = Fl;
function Xg(e) {
  return ue("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const Qg = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, Xg, t);
}, Jg = G("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Ul = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCardContent"
  }), {
    className: i,
    component: s = "div",
    ...a
  } = r, l = {
    ...r,
    component: s
  }, c = Qg(l);
  return /* @__PURE__ */ L(Jg, {
    as: s,
    className: ie(c.root, i),
    ownerState: l,
    ref: n,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Ul.propTypes = {
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
const Zg = Ul;
function eb(e) {
  return ue("MuiButton", e);
}
const tb = ce("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), zt = tb, zl = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (zl.displayName = "ButtonGroupContext");
const ob = zl, Vl = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (Vl.displayName = "ButtonGroupButtonContext");
const nb = Vl, rb = (e) => {
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
    root: ["root", a && "loading", s, `${s}${K(t)}`, `size${K(i)}`, `${s}Size${K(i)}`, `color${K(t)}`, n && "disableElevation", r && "fullWidth", a && `loadingPosition${K(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${K(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${K(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, p = de(u, eb, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...p
  };
}, Wl = [{
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
}], ib = G(li, {
  shouldForwardProp: (e) => Ke(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${K(n.color)}`], t[`size${K(n.size)}`], t[`${n.variant}Size${K(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(fe(({
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
    [`&.${zt.disabled}`]: {
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
        [`&.${zt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${zt.disabled}`]: {
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
        [`&.${zt.disabled}`]: {
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
        [`&.${zt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${zt.disabled}`]: {
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
        [`&.${zt.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), sb = G("span", {
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
  }, ...Wl]
})), ab = G("span", {
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
  }, ...Wl]
})), lb = G("span", {
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
})), js = G("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Hl = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = x.useContext(ob), i = x.useContext(nb), s = zo(r, t), a = me({
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
    endIcon: y,
    focusVisibleClassName: f,
    fullWidth: v = !1,
    id: E,
    loading: C = null,
    loadingIndicator: w,
    loadingPosition: b = "center",
    size: T = "medium",
    startIcon: O,
    type: $,
    variant: I = "text",
    ...M
  } = a, F = Xo(E), j = w ?? /* @__PURE__ */ L(Ja, {
    "aria-labelledby": F,
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
    loading: C,
    loadingIndicator: j,
    loadingPosition: b,
    size: T,
    type: $,
    variant: I
  }, N = rb(d), S = (O || C && b === "start") && /* @__PURE__ */ L(sb, {
    className: N.startIcon,
    ownerState: d,
    children: O || /* @__PURE__ */ L(js, {
      className: N.loadingIconPlaceholder,
      ownerState: d
    })
  }), R = (y || C && b === "end") && /* @__PURE__ */ L(ab, {
    className: N.endIcon,
    ownerState: d,
    children: y || /* @__PURE__ */ L(js, {
      className: N.loadingIconPlaceholder,
      ownerState: d
    })
  }), P = i || "", _ = typeof C == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ L("span", {
      className: N.loadingWrapper,
      style: {
        display: "contents"
      },
      children: C && /* @__PURE__ */ L(lb, {
        className: N.loadingIndicator,
        ownerState: d,
        children: j
      })
    })
  ) : null;
  return /* @__PURE__ */ Ie(ib, {
    ownerState: d,
    className: ie(r.className, N.root, p, P),
    component: u,
    disabled: m || C,
    focusRipple: !g,
    focusVisibleClassName: ie(N.focusVisible, f),
    ref: n,
    type: $,
    id: C ? F : E,
    ...M,
    classes: N,
    children: [S, b !== "end" && _, l, b === "end" && _, R]
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
const ql = Hl, cb = Pt(/* @__PURE__ */ L("path", {
  d: "m19.46 8 .79-1.75L22 5.46c.39-.18.39-.73 0-.91l-1.75-.79L19.46 2c-.18-.39-.73-.39-.91 0l-.79 1.75-1.76.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0M11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5-.79 1.75-1.75.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.73.39.91 0l.79-1.75 1.76-.79c.39-.18.39-.73 0-.91l-1.75-.79-.79-1.76c-.18-.39-.74-.39-.92 0"
}), "AutoAwesomeRounded"), Yl = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: r,
  show: i = !0
}) => i ? /* @__PURE__ */ V(Kg, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ V(Zg, { children: [
  /* @__PURE__ */ V(cb, { fontSize: "small" }, void 0, !1, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/CardAlert.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, globalThis),
  /* @__PURE__ */ V(gt, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }, void 0, !1, {
    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/CardAlert.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, globalThis),
  /* @__PURE__ */ V(
    gt,
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
  /* @__PURE__ */ V(
    ql,
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
var ze = "top", et = "bottom", tt = "right", Ve = "left", bi = "auto", Jo = [ze, et, tt, Ve], fo = "start", Ho = "end", ub = "clippingParents", Gl = "viewport", ko = "popper", pb = "reference", Ls = /* @__PURE__ */ Jo.reduce(function(e, t) {
  return e.concat([t + "-" + fo, t + "-" + Ho]);
}, []), Kl = /* @__PURE__ */ [].concat(Jo, [bi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + fo, t + "-" + Ho]);
}, []), db = "beforeRead", fb = "read", mb = "afterRead", hb = "beforeMain", gb = "main", bb = "afterMain", yb = "beforeWrite", vb = "write", xb = "afterWrite", Tb = [db, fb, mb, hb, gb, bb, yb, vb, xb];
function Tt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ge(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Xt(e) {
  var t = Ge(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ze(e) {
  var t = Ge(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function yi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ge(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function wb(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, s = t.elements[n];
    !Ze(s) || !Tt(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Eb(e) {
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
      !Ze(i) || !Tt(i) || (Object.assign(i.style, l), Object.keys(s).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Ob = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: wb,
  effect: Eb,
  requires: ["computeStyles"]
};
function yt(e) {
  return e.split("-")[0];
}
var Yt = Math.max, In = Math.min, mo = Math.round;
function Wr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Xl() {
  return !/^((?!chrome|android).)*safari/i.test(Wr());
}
function ho(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && Ze(e) && (i = e.offsetWidth > 0 && mo(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && mo(r.height) / e.offsetHeight || 1);
  var a = Xt(e) ? Ge(e) : window, l = a.visualViewport, c = !Xl() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, p = (r.top + (c && l ? l.offsetTop : 0)) / s, m = r.width / i, h = r.height / s;
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
function vi(e) {
  var t = ho(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Ql(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && yi(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function kt(e) {
  return Ge(e).getComputedStyle(e);
}
function Cb(e) {
  return ["table", "td", "th"].indexOf(Tt(e)) >= 0;
}
function Lt(e) {
  return ((Xt(e) ? e.ownerDocument : (
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
    (yi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Lt(e)
  );
}
function _s(e) {
  return !Ze(e) || // https://github.com/popperjs/popper-core/issues/837
  kt(e).position === "fixed" ? null : e.offsetParent;
}
function Sb(e) {
  var t = /firefox/i.test(Wr()), n = /Trident/i.test(Wr());
  if (n && Ze(e)) {
    var r = kt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = nr(e);
  for (yi(i) && (i = i.host); Ze(i) && ["html", "body"].indexOf(Tt(i)) < 0; ) {
    var s = kt(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Zo(e) {
  for (var t = Ge(e), n = _s(e); n && Cb(n) && kt(n).position === "static"; )
    n = _s(n);
  return n && (Tt(n) === "html" || Tt(n) === "body" && kt(n).position === "static") ? t : n || Sb(e) || t;
}
function xi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function _o(e, t, n) {
  return Yt(e, In(t, n));
}
function Nb(e, t, n) {
  var r = _o(e, t, n);
  return r > n ? n : r;
}
function Jl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Zl(e) {
  return Object.assign({}, Jl(), e);
}
function ec(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Rb = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Zl(typeof t != "number" ? t : ec(t, Jo));
};
function kb(e) {
  var t, n = e.state, r = e.name, i = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, l = yt(n.placement), c = xi(l), u = [Ve, tt].indexOf(l) >= 0, p = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = Rb(i.padding, n), h = vi(s), g = c === "y" ? ze : Ve, y = c === "y" ? et : tt, f = n.rects.reference[p] + n.rects.reference[c] - a[c] - n.rects.popper[p], v = a[c] - n.rects.reference[c], E = Zo(s), C = E ? c === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, w = f / 2 - v / 2, b = m[g], T = C - h[p] - m[y], O = C / 2 - h[p] / 2 + w, $ = _o(b, O, T), I = c;
    n.modifiersData[r] = (t = {}, t[I] = $, t.centerOffset = $ - O, t);
  }
}
function Pb(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Ql(t.elements.popper, i) && (t.elements.arrow = i));
}
const $b = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: kb,
  effect: Pb,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function go(e) {
  return e.split("-")[1];
}
var Ib = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Mb(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: mo(n * i) / i || 0,
    y: mo(r * i) / i || 0
  };
}
function Fs(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, m = e.isFixed, h = a.x, g = h === void 0 ? 0 : h, y = a.y, f = y === void 0 ? 0 : y, v = typeof p == "function" ? p({
    x: g,
    y: f
  }) : {
    x: g,
    y: f
  };
  g = v.x, f = v.y;
  var E = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), w = Ve, b = ze, T = window;
  if (u) {
    var O = Zo(n), $ = "clientHeight", I = "clientWidth";
    if (O === Ge(n) && (O = Lt(n), kt(O).position !== "static" && l === "absolute" && ($ = "scrollHeight", I = "scrollWidth")), O = O, i === ze || (i === Ve || i === tt) && s === Ho) {
      b = et;
      var M = m && O === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[$]
      );
      f -= M - r.height, f *= c ? 1 : -1;
    }
    if (i === Ve || (i === ze || i === et) && s === Ho) {
      w = tt;
      var F = m && O === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[I]
      );
      g -= F - r.width, g *= c ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: l
  }, u && Ib), d = p === !0 ? Mb({
    x: g,
    y: f
  }, Ge(n)) : {
    x: g,
    y: f
  };
  if (g = d.x, f = d.y, c) {
    var N;
    return Object.assign({}, j, (N = {}, N[b] = C ? "0" : "", N[w] = E ? "0" : "", N.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", N));
  }
  return Object.assign({}, j, (t = {}, t[b] = C ? f + "px" : "", t[w] = E ? g + "px" : "", t.transform = "", t));
}
function Ab(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: yt(t.placement),
    variation: go(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Fs(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Fs(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Db = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ab,
  data: {}
};
var pn = {
  passive: !0
};
function Bb(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, c = Ge(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(p) {
    p.addEventListener("scroll", n.update, pn);
  }), l && c.addEventListener("resize", n.update, pn), function() {
    s && u.forEach(function(p) {
      p.removeEventListener("scroll", n.update, pn);
    }), l && c.removeEventListener("resize", n.update, pn);
  };
}
const jb = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Bb,
  data: {}
};
var Lb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Lb[t];
  });
}
var _b = {
  start: "end",
  end: "start"
};
function Us(e) {
  return e.replace(/start|end/g, function(t) {
    return _b[t];
  });
}
function Ti(e) {
  var t = Ge(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function wi(e) {
  return ho(Lt(e)).left + Ti(e).scrollLeft;
}
function Fb(e, t) {
  var n = Ge(e), r = Lt(e), i = n.visualViewport, s = r.clientWidth, a = r.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = Xl();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: l + wi(e),
    y: c
  };
}
function Ub(e) {
  var t, n = Lt(e), r = Ti(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Yt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Yt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + wi(e), c = -r.scrollTop;
  return kt(i || n).direction === "rtl" && (l += Yt(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Ei(e) {
  var t = kt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function tc(e) {
  return ["html", "body", "#document"].indexOf(Tt(e)) >= 0 ? e.ownerDocument.body : Ze(e) && Ei(e) ? e : tc(nr(e));
}
function Fo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = tc(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Ge(r), a = i ? [s].concat(s.visualViewport || [], Ei(r) ? r : []) : r, l = t.concat(a);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Fo(nr(a)))
  );
}
function Hr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zb(e, t) {
  var n = ho(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function zs(e, t, n) {
  return t === Gl ? Hr(Fb(e, n)) : Xt(t) ? zb(t, n) : Hr(Ub(Lt(e)));
}
function Vb(e) {
  var t = Fo(nr(e)), n = ["absolute", "fixed"].indexOf(kt(e).position) >= 0, r = n && Ze(e) ? Zo(e) : e;
  return Xt(r) ? t.filter(function(i) {
    return Xt(i) && Ql(i, r) && Tt(i) !== "body";
  }) : [];
}
function Wb(e, t, n, r) {
  var i = t === "clippingParents" ? Vb(e) : [].concat(t), s = [].concat(i, [n]), a = s[0], l = s.reduce(function(c, u) {
    var p = zs(e, u, r);
    return c.top = Yt(p.top, c.top), c.right = In(p.right, c.right), c.bottom = In(p.bottom, c.bottom), c.left = Yt(p.left, c.left), c;
  }, zs(e, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function oc(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? yt(r) : null, s = r ? go(r) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case ze:
      c = {
        x: a,
        y: t.y - n.height
      };
      break;
    case et:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case tt:
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
  var u = i ? xi(i) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (s) {
      case fo:
        c[u] = c[u] - (t[p] / 2 - n[p] / 2);
        break;
      case Ho:
        c[u] = c[u] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return c;
}
function qo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, s = n.strategy, a = s === void 0 ? e.strategy : s, l = n.boundary, c = l === void 0 ? ub : l, u = n.rootBoundary, p = u === void 0 ? Gl : u, m = n.elementContext, h = m === void 0 ? ko : m, g = n.altBoundary, y = g === void 0 ? !1 : g, f = n.padding, v = f === void 0 ? 0 : f, E = Zl(typeof v != "number" ? v : ec(v, Jo)), C = h === ko ? pb : ko, w = e.rects.popper, b = e.elements[y ? C : h], T = Wb(Xt(b) ? b : b.contextElement || Lt(e.elements.popper), c, p, a), O = ho(e.elements.reference), $ = oc({
    reference: O,
    element: w,
    strategy: "absolute",
    placement: i
  }), I = Hr(Object.assign({}, w, $)), M = h === ko ? I : O, F = {
    top: T.top - M.top + E.top,
    bottom: M.bottom - T.bottom + E.bottom,
    left: T.left - M.left + E.left,
    right: M.right - T.right + E.right
  }, j = e.modifiersData.offset;
  if (h === ko && j) {
    var d = j[i];
    Object.keys(F).forEach(function(N) {
      var S = [tt, et].indexOf(N) >= 0 ? 1 : -1, R = [ze, et].indexOf(N) >= 0 ? "y" : "x";
      F[N] += d[R] * S;
    });
  }
  return F;
}
function Hb(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, s = n.rootBoundary, a = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Kl : c, p = go(r), m = p ? l ? Ls : Ls.filter(function(y) {
    return go(y) === p;
  }) : Jo, h = m.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  h.length === 0 && (h = m);
  var g = h.reduce(function(y, f) {
    return y[f] = qo(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[yt(f)], y;
  }, {});
  return Object.keys(g).sort(function(y, f) {
    return g[y] - g[f];
  });
}
function qb(e) {
  if (yt(e) === bi)
    return [];
  var t = yn(e);
  return [Us(e), t, Us(t)];
}
function Yb(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, p = n.boundary, m = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, y = g === void 0 ? !0 : g, f = n.allowedAutoPlacements, v = t.options.placement, E = yt(v), C = E === v, w = c || (C || !y ? [yn(v)] : qb(v)), b = [v].concat(w).reduce(function(Y, J) {
      return Y.concat(yt(J) === bi ? Hb(t, {
        placement: J,
        boundary: p,
        rootBoundary: m,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: f
      }) : J);
    }, []), T = t.rects.reference, O = t.rects.popper, $ = /* @__PURE__ */ new Map(), I = !0, M = b[0], F = 0; F < b.length; F++) {
      var j = b[F], d = yt(j), N = go(j) === fo, S = [ze, et].indexOf(d) >= 0, R = S ? "width" : "height", P = qo(t, {
        placement: j,
        boundary: p,
        rootBoundary: m,
        altBoundary: h,
        padding: u
      }), _ = S ? N ? tt : Ve : N ? et : ze;
      T[R] > O[R] && (_ = yn(_));
      var z = yn(_), A = [];
      if (s && A.push(P[d] <= 0), l && A.push(P[_] <= 0, P[z] <= 0), A.every(function(Y) {
        return Y;
      })) {
        M = j, I = !1;
        break;
      }
      $.set(j, A);
    }
    if (I)
      for (var k = y ? 3 : 1, B = function(J) {
        var Q = b.find(function(X) {
          var ee = $.get(X);
          if (ee)
            return ee.slice(0, J).every(function(Z) {
              return Z;
            });
        });
        if (Q)
          return M = Q, "break";
      }, q = k; q > 0; q--) {
        var H = B(q);
        if (H === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const Gb = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Yb,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Vs(e, t, n) {
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
function Ws(e) {
  return [ze, tt, et, Ve].some(function(t) {
    return e[t] >= 0;
  });
}
function Kb(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = qo(t, {
    elementContext: "reference"
  }), l = qo(t, {
    altBoundary: !0
  }), c = Vs(a, r), u = Vs(l, i, s), p = Ws(c), m = Ws(u);
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
const Xb = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Kb
};
function Qb(e, t, n) {
  var r = yt(e), i = [Ve, ze].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * i, [Ve, tt].indexOf(r) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function Jb(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, s = i === void 0 ? [0, 0] : i, a = Kl.reduce(function(p, m) {
    return p[m] = Qb(m, t.rects, s), p;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const Zb = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Jb
};
function ey(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = oc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ty = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ey,
  data: {}
};
function oy(e) {
  return e === "x" ? "y" : "x";
}
function ny(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.padding, h = n.tether, g = h === void 0 ? !0 : h, y = n.tetherOffset, f = y === void 0 ? 0 : y, v = qo(t, {
    boundary: c,
    rootBoundary: u,
    padding: m,
    altBoundary: p
  }), E = yt(t.placement), C = go(t.placement), w = !C, b = xi(E), T = oy(b), O = t.modifiersData.popperOffsets, $ = t.rects.reference, I = t.rects.popper, M = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, F = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, d = {
    x: 0,
    y: 0
  };
  if (O) {
    if (s) {
      var N, S = b === "y" ? ze : Ve, R = b === "y" ? et : tt, P = b === "y" ? "height" : "width", _ = O[b], z = _ + v[S], A = _ - v[R], k = g ? -I[P] / 2 : 0, B = C === fo ? $[P] : I[P], q = C === fo ? -I[P] : -$[P], H = t.elements.arrow, Y = g && H ? vi(H) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Jl(), Q = J[S], X = J[R], ee = _o(0, $[P], Y[P]), Z = w ? $[P] / 2 - k - ee - Q - F.mainAxis : B - ee - Q - F.mainAxis, W = w ? -$[P] / 2 + k + ee + X + F.mainAxis : q + ee + X + F.mainAxis, te = t.elements.arrow && Zo(t.elements.arrow), U = te ? b === "y" ? te.clientTop || 0 : te.clientLeft || 0 : 0, le = (N = j == null ? void 0 : j[b]) != null ? N : 0, ne = _ + Z - le - U, pe = _ + W - le, je = _o(g ? In(z, ne) : z, _, g ? Yt(A, pe) : A);
      O[b] = je, d[b] = je - _;
    }
    if (l) {
      var Ne, Te = b === "x" ? ze : Ve, Ae = b === "x" ? et : tt, Re = O[T], Oe = T === "y" ? "height" : "width", oe = Re + v[Te], We = Re - v[Ae], Ce = [ze, Ve].indexOf(E) !== -1, Et = (Ne = j == null ? void 0 : j[T]) != null ? Ne : 0, He = Ce ? oe : Re - $[Oe] - I[Oe] - Et + F.altAxis, Ue = Ce ? Re + $[Oe] + I[Oe] - Et - F.altAxis : We, nt = g && Ce ? Nb(He, Re, Ue) : _o(g ? He : oe, Re, g ? Ue : We);
      O[T] = nt, d[T] = nt - Re;
    }
    t.modifiersData[r] = d;
  }
}
const ry = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ny,
  requiresIfExists: ["offset"]
};
function iy(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function sy(e) {
  return e === Ge(e) || !Ze(e) ? Ti(e) : iy(e);
}
function ay(e) {
  var t = e.getBoundingClientRect(), n = mo(t.width) / e.offsetWidth || 1, r = mo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ly(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ze(t), i = Ze(t) && ay(t), s = Lt(t), a = ho(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Tt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ei(s)) && (l = sy(t)), Ze(t) ? (c = ho(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = wi(s))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function cy(e) {
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
function uy(e) {
  var t = cy(e);
  return Tb.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function py(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function dy(e) {
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
var Hs = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function fy(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, s = i === void 0 ? Hs : i;
  return function(l, c, u) {
    u === void 0 && (u = s);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Hs, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], h = !1, g = {
      state: p,
      setOptions: function(E) {
        var C = typeof E == "function" ? E(p.options) : E;
        f(), p.options = Object.assign({}, s, p.options, C), p.scrollParents = {
          reference: Xt(l) ? Fo(l) : l.contextElement ? Fo(l.contextElement) : [],
          popper: Fo(c)
        };
        var w = uy(dy([].concat(r, p.options.modifiers)));
        return p.orderedModifiers = w.filter(function(b) {
          return b.enabled;
        }), y(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var E = p.elements, C = E.reference, w = E.popper;
          if (qs(C, w)) {
            p.rects = {
              reference: ly(C, Zo(w), p.options.strategy === "fixed"),
              popper: vi(w)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(F) {
              return p.modifiersData[F.name] = Object.assign({}, F.data);
            });
            for (var b = 0; b < p.orderedModifiers.length; b++) {
              if (p.reset === !0) {
                p.reset = !1, b = -1;
                continue;
              }
              var T = p.orderedModifiers[b], O = T.fn, $ = T.options, I = $ === void 0 ? {} : $, M = T.name;
              typeof O == "function" && (p = O({
                state: p,
                options: I,
                name: M,
                instance: g
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: py(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(p);
        });
      }),
      destroy: function() {
        f(), h = !0;
      }
    };
    if (!qs(l, c))
      return g;
    g.setOptions(u).then(function(v) {
      !h && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function y() {
      p.orderedModifiers.forEach(function(v) {
        var E = v.name, C = v.options, w = C === void 0 ? {} : C, b = v.effect;
        if (typeof b == "function") {
          var T = b({
            state: p,
            name: E,
            instance: g,
            options: w
          }), O = function() {
          };
          m.push(T || O);
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
var my = [jb, ty, Db, Ob, Zb, Gb, ry, $b, Xb], hy = /* @__PURE__ */ fy({
  defaultModifiers: my
});
function gy(e) {
  return ue("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function by(e, t) {
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
function Mn(e) {
  return typeof e == "function" ? e() : e;
}
function rr(e) {
  return e.nodeType !== void 0;
}
function yy(e) {
  return !rr(e);
}
const vy = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, gy, t);
}, xy = {}, Ty = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    TransitionProps: y,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...v
  } = t, E = x.useRef(null), C = Be(E, n), w = x.useRef(null), b = Be(w, m), T = x.useRef(b);
  ct(() => {
    T.current = b;
  }, [b]), x.useImperativeHandle(m, () => w.current, []);
  const O = by(u, s), [$, I] = x.useState(O), [M, F] = x.useState(Mn(r));
  x.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), x.useEffect(() => {
    r && F(Mn(r));
  }, [r]), ct(() => {
    if (!M || !c)
      return;
    const R = (z) => {
      I(z.placement);
    };
    if (process.env.NODE_ENV !== "production" && M && rr(M) && M.nodeType === 1) {
      const z = M.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && z.top === 0 && z.left === 0 && z.right === 0 && z.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
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
        state: z
      }) => {
        R(z);
      }
    }];
    l != null && (P = P.concat(l)), p && p.modifiers != null && (P = P.concat(p.modifiers));
    const _ = hy(M, E.current, {
      placement: O,
      ...p,
      modifiers: P
    });
    return T.current(_), () => {
      _.destroy(), T.current(null);
    };
  }, [M, a, l, c, p, O]);
  const j = {
    placement: $
  };
  y !== null && (j.TransitionProps = y);
  const d = vy(t), N = g.root ?? "div", S = nl({
    elementType: N,
    externalSlotProps: h.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: d.root
  });
  return /* @__PURE__ */ L(N, {
    ...S,
    children: typeof i == "function" ? i(j) : i
  });
}), nc = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    popperOptions: h = xy,
    popperRef: g,
    style: y,
    transition: f = !1,
    slotProps: v = {},
    slots: E = {},
    ...C
  } = t, [w, b] = x.useState(!0), T = () => {
    b(!1);
  }, O = () => {
    b(!0);
  };
  if (!c && !p && (!f || w))
    return null;
  let $;
  if (s)
    $ = s;
  else if (r) {
    const F = Mn(r);
    $ = F && rr(F) ? Ye(F).body : Ye(null).body;
  }
  const I = !p && c && (!f || w) ? "none" : void 0, M = f ? {
    in: p,
    onEnter: T,
    onExited: O
  } : void 0;
  return /* @__PURE__ */ L(dl, {
    disablePortal: l,
    container: $,
    children: /* @__PURE__ */ L(Ty, {
      anchorEl: r,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: f ? !w : p,
      placement: m,
      popperOptions: h,
      popperRef: g,
      slotProps: v,
      slots: E,
      ...C,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: I,
        ...y
      },
      TransitionProps: M,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (nc.propTypes = {
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
  anchorEl: wt(o.oneOfType([xt, o.object, o.func]), (e) => {
    if (e.open) {
      const t = Mn(e.anchorEl);
      if (t && rr(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || yy(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
const wy = nc, Ey = G(wy, {
  name: "MuiPopper",
  slot: "Root"
})({}), rc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = Kn(), i = me({
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
    placement: y,
    popperOptions: f,
    popperRef: v,
    transition: E,
    slots: C,
    slotProps: w,
    ...b
  } = i, T = (C == null ? void 0 : C.root) ?? (l == null ? void 0 : l.Root), O = {
    anchorEl: s,
    container: u,
    disablePortal: p,
    keepMounted: m,
    modifiers: h,
    open: g,
    placement: y,
    popperOptions: f,
    popperRef: v,
    transition: E,
    ...b
  };
  return /* @__PURE__ */ L(Ey, {
    as: a,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: T
    },
    slotProps: w ?? c,
    ...O,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (rc.propTypes = {
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
const ic = rc;
function Oy(e) {
  return ue("MuiTooltip", e);
}
const Cy = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), $e = Cy;
function Sy(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ny = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: i,
    placement: s
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", i && "touch", `tooltipPlacement${K(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return de(a, Oy, t);
}, Ry = G(ic, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(fe(({
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
}))), ky = G("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${K(n.placement.split("-")[0])}`]];
  }
})(fe(({
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
      lineHeight: `${Sy(16 / 14)}em`,
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
}))), Py = G("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(fe(({
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
const Ys = new Qn();
let Po = {
  x: 0,
  y: 0
};
function fn(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const sc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
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
    enterDelay: y = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: v = 700,
    followCursor: E = !1,
    id: C,
    leaveDelay: w = 0,
    leaveTouchDelay: b = 1500,
    onClose: T,
    onOpen: O,
    open: $,
    placement: I = "bottom",
    PopperComponent: M,
    PopperProps: F = {},
    slotProps: j = {},
    slots: d = {},
    title: N,
    TransitionComponent: S,
    TransitionProps: R,
    ...P
  } = r, _ = /* @__PURE__ */ x.isValidElement(s) ? s : /* @__PURE__ */ L("span", {
    children: s
  }), z = bo(), A = Kn(), [k, B] = x.useState(), [q, H] = x.useState(null), Y = x.useRef(!1), J = h || E, Q = ao(), X = ao(), ee = ao(), Z = ao(), [W, te] = Mr({
    controlled: $,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let U = W;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: se
    } = x.useRef($ !== void 0);
    x.useEffect(() => {
      k && k.disabled && !se && N !== "" && k.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [N, k, se]);
  }
  const le = Xo(C), ne = x.useRef(), pe = Rt(() => {
    ne.current !== void 0 && (document.body.style.WebkitUserSelect = ne.current, ne.current = void 0), Z.clear();
  });
  x.useEffect(() => pe, [pe]);
  const je = (se) => {
    Ys.clear(), dn = !0, te(!0), O && !U && O(se);
  }, Ne = Rt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (se) => {
      Ys.start(800 + w, () => {
        dn = !1;
      }), te(!1), T && U && T(se), Q.start(z.transitions.duration.shortest, () => {
        Y.current = !1;
      });
    }
  ), Te = (se) => {
    Y.current && se.type !== "touchstart" || (k && k.removeAttribute("title"), X.clear(), ee.clear(), y || dn && f ? X.start(dn ? f : y, () => {
      je(se);
    }) : je(se));
  }, Ae = (se) => {
    X.clear(), ee.start(w, () => {
      Ne(se);
    });
  }, [, Re] = x.useState(!1), Oe = (se) => {
    Cn(se.target) || (Re(!1), Ae(se));
  }, oe = (se) => {
    k || B(se.currentTarget), Cn(se.target) && (Re(!0), Te(se));
  }, We = (se) => {
    Y.current = !0;
    const st = _.props;
    st.onTouchStart && st.onTouchStart(se);
  }, Ce = (se) => {
    We(se), ee.clear(), Q.clear(), pe(), ne.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Z.start(v, () => {
      document.body.style.WebkitUserSelect = ne.current, Te(se);
    });
  }, Et = (se) => {
    _.props.onTouchEnd && _.props.onTouchEnd(se), pe(), ee.start(b, () => {
      Ne(se);
    });
  };
  x.useEffect(() => {
    if (!U)
      return;
    function se(st) {
      st.key === "Escape" && Ne(st);
    }
    return document.addEventListener("keydown", se), () => {
      document.removeEventListener("keydown", se);
    };
  }, [Ne, U]);
  const He = Be(Jt(_), B, n);
  !N && N !== 0 && (U = !1);
  const Ue = x.useRef(), nt = (se) => {
    const st = _.props;
    st.onMouseMove && st.onMouseMove(se), Po = {
      x: se.clientX,
      y: se.clientY
    }, Ue.current && Ue.current.update();
  }, rt = {}, Ot = typeof N == "string";
  u ? (rt.title = !U && Ot && !m ? N : null, rt["aria-describedby"] = U ? le : null) : (rt["aria-label"] = Ot ? N : null, rt["aria-labelledby"] = U && !Ot ? le : null);
  const ae = {
    ...rt,
    ...P,
    ..._.props,
    className: ie(P.className, _.props.className),
    onTouchStart: We,
    ref: He,
    ...E ? {
      onMouseMove: nt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (ae["data-mui-internal-clone-element"] = !0, x.useEffect(() => {
    k && !k.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [k]));
  const it = {};
  g || (ae.onTouchStart = Ce, ae.onTouchEnd = Et), m || (ae.onMouseOver = fn(Te, ae.onMouseOver), ae.onMouseLeave = fn(Ae, ae.onMouseLeave), J || (it.onMouseOver = Te, it.onMouseLeave = Ae)), p || (ae.onFocus = fn(oe, ae.onFocus), ae.onBlur = fn(Oe, ae.onBlur), J || (it.onFocus = oe, it.onBlur = Oe)), process.env.NODE_ENV !== "production" && _.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${_.props.title}\` or the Tooltip component.`].join(`
`));
  const _e = {
    ...r,
    isRtl: A,
    arrow: i,
    disableInteractive: J,
    placement: I,
    PopperComponentProp: M,
    touch: Y.current
  }, Fe = typeof j.popper == "function" ? j.popper(_e) : j.popper, xo = x.useMemo(() => {
    var st, Oi;
    let se = [{
      name: "arrow",
      enabled: !!q,
      options: {
        element: q,
        padding: 4
      }
    }];
    return (st = F.popperOptions) != null && st.modifiers && (se = se.concat(F.popperOptions.modifiers)), (Oi = Fe == null ? void 0 : Fe.popperOptions) != null && Oi.modifiers && (se = se.concat(Fe.popperOptions.modifiers)), {
      ...F.popperOptions,
      ...Fe == null ? void 0 : Fe.popperOptions,
      modifiers: se
    };
  }, [q, F.popperOptions, Fe == null ? void 0 : Fe.popperOptions]), To = Ny(_e), en = typeof j.transition == "function" ? j.transition(_e) : j.transition, _t = {
    slots: {
      popper: l.Popper,
      transition: l.Transition ?? S,
      tooltip: l.Tooltip,
      arrow: l.Arrow,
      ...d
    },
    slotProps: {
      arrow: j.arrow ?? c.arrow,
      popper: {
        ...F,
        ...Fe ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: j.tooltip ?? c.tooltip,
      transition: {
        ...R,
        ...en ?? c.transition
      }
    }
  }, [tn, on] = xe("popper", {
    elementType: Ry,
    externalForwardedProps: _t,
    ownerState: _e,
    className: ie(To.popper, F == null ? void 0 : F.className)
  }), [nn, re] = xe("transition", {
    elementType: pl,
    externalForwardedProps: _t,
    ownerState: _e
  }), [he, De] = xe("tooltip", {
    elementType: ky,
    className: To.tooltip,
    externalForwardedProps: _t,
    ownerState: _e
  }), [It, rn] = xe("arrow", {
    elementType: Py,
    className: To.arrow,
    externalForwardedProps: _t,
    ownerState: _e,
    ref: H
  });
  return /* @__PURE__ */ Ie(x.Fragment, {
    children: [/* @__PURE__ */ x.cloneElement(_, ae), /* @__PURE__ */ L(tn, {
      as: M ?? ic,
      placement: I,
      anchorEl: E ? {
        getBoundingClientRect: () => ({
          top: Po.y,
          left: Po.x,
          right: Po.x,
          bottom: Po.y,
          width: 0,
          height: 0
        })
      } : k,
      popperRef: Ue,
      open: k ? U : !1,
      id: le,
      transition: !0,
      ...it,
      ...on,
      popperOptions: xo,
      children: ({
        TransitionProps: se
      }) => /* @__PURE__ */ L(nn, {
        timeout: z.transitions.duration.shorter,
        ...se,
        ...re,
        children: /* @__PURE__ */ Ie(he, {
          ...De,
          children: [N, i ? /* @__PURE__ */ L(It, {
            ...rn
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (sc.propTypes = {
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
  children: yo.isRequired,
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
const Gs = sc, ac = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: r,
  accentColor: i = "#01584f"
}) => {
  const s = (a) => {
    r && r(a);
  };
  return /* @__PURE__ */ V(
    Je,
    {
      sx: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        pt: 2,
        gap: 1
      },
      children: [
        e.map((a, l) => /* @__PURE__ */ V(x.Fragment, { children: [
          /* @__PURE__ */ V(Gs, { title: a.text, placement: "right", arrow: !0, children: /* @__PURE__ */ V(
            Wo,
            {
              component: "a",
              href: a.path,
              onClick: (c) => {
                c.preventDefault(), c.stopPropagation(), s(a.path);
              },
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
              lineNumber: 43,
              columnNumber: 7
            },
            globalThis
          ) }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 42,
            columnNumber: 6
          }, globalThis),
          l < e.length - 1 && /* @__PURE__ */ V(
            so,
            {
              sx: {
                width: "100%",
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ V(
                Dt,
                {
                  sx: { width: "60%", borderColor: "divider" }
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
                  lineNumber: 84,
                  columnNumber: 8
                },
                globalThis
              )
            },
            void 0,
            !1,
            {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
              lineNumber: 77,
              columnNumber: 7
            },
            globalThis
          )
        ] }, l, !0, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
          lineNumber: 41,
          columnNumber: 5
        }, globalThis)),
        t.length > 0 && /* @__PURE__ */ V(Ks, { children: [
          /* @__PURE__ */ V(
            so,
            {
              sx: {
                width: "100%",
                my: 2,
                display: "flex",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ V(
                Dt,
                {
                  sx: { width: "60%", borderColor: "divider" }
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
                  lineNumber: 101,
                  columnNumber: 7
                },
                globalThis
              )
            },
            void 0,
            !1,
            {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
              lineNumber: 93,
              columnNumber: 6
            },
            globalThis
          ),
          /* @__PURE__ */ V(so, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ V(Je, { gap: 1, alignItems: "center", children: t.map((a, l) => /* @__PURE__ */ V(x.Fragment, { children: [
            /* @__PURE__ */ V(
              Gs,
              {
                title: a.text,
                placement: "right",
                arrow: !0,
                children: /* @__PURE__ */ V(
                  Wo,
                  {
                    component: "a",
                    href: a.path,
                    onClick: (c) => {
                      c.preventDefault(), c.stopPropagation(), s(a.path);
                    },
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
                    lineNumber: 114,
                    columnNumber: 11
                  },
                  globalThis
                )
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
                lineNumber: 109,
                columnNumber: 10
              },
              globalThis
            ),
            l < t.length - 1 && /* @__PURE__ */ V(
              so,
              {
                sx: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ V(
                  Dt,
                  {
                    sx: {
                      width: "60%",
                      borderColor: "divider"
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
                    lineNumber: 157,
                    columnNumber: 12
                  },
                  globalThis
                )
              },
              void 0,
              !1,
              {
                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
                lineNumber: 150,
                columnNumber: 11
              },
              globalThis
            )
          ] }, l, !0, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, globalThis)) }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 106,
            columnNumber: 7
          }, globalThis) }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
            lineNumber: 105,
            columnNumber: 6
          }, globalThis)
        ] }, void 0, !0, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MenuContent.tsx",
          lineNumber: 92,
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
}, $y = Pt(/* @__PURE__ */ L("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z"
}), "NotificationsRounded");
function Iy(e, t, n) {
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
function lc(e) {
  return typeof e == "function" ? e() : e;
}
function mn(e, t, n) {
  const r = lc(n), i = Iy(e, t, r);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const cc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = bo(), i = {
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
    onEntered: y,
    onEntering: f,
    onExit: v,
    onExited: E,
    onExiting: C,
    style: w,
    timeout: b = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = ii,
    ...O
  } = t, $ = x.useRef(null), I = Be(Jt(c), $, n), M = (z) => (A) => {
    z && (A === void 0 ? z($.current) : z($.current, A));
  }, F = M((z, A) => {
    mn(p, z, u), ci(z), g && g(z, A);
  }), j = M((z, A) => {
    const k = uo({
      timeout: b,
      style: w,
      easing: m
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = r.transitions.create("-webkit-transform", {
      ...k
    }), z.style.transition = r.transitions.create("transform", {
      ...k
    }), z.style.webkitTransform = "none", z.style.transform = "none", f && f(z, A);
  }), d = M(y), N = M(C), S = M((z) => {
    const A = uo({
      timeout: b,
      style: w,
      easing: m
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = r.transitions.create("-webkit-transform", A), z.style.transition = r.transitions.create("transform", A), mn(p, z, u), v && v(z);
  }), R = M((z) => {
    z.style.webkitTransition = "", z.style.transition = "", E && E(z);
  }), P = (z) => {
    a && a($.current, z);
  }, _ = x.useCallback(() => {
    $.current && mn(p, $.current, u);
  }, [p, u]);
  return x.useEffect(() => {
    if (h || p === "down" || p === "right")
      return;
    const z = oi(() => {
      $.current && mn(p, $.current, u);
    }), A = ut($.current);
    return A.addEventListener("resize", z), () => {
      z.clear(), A.removeEventListener("resize", z);
    };
  }, [p, h, u]), x.useEffect(() => {
    h || _();
  }, [h, _]), /* @__PURE__ */ L(T, {
    nodeRef: $,
    onEnter: F,
    onEntered: d,
    onEntering: j,
    onExit: S,
    onExited: R,
    onExiting: N,
    addEndListener: P,
    appear: l,
    in: h,
    timeout: b,
    ...O,
    children: (z, {
      ownerState: A,
      ...k
    }) => /* @__PURE__ */ x.cloneElement(c, {
      ref: I,
      style: {
        visibility: z === "exited" && !h ? "hidden" : void 0,
        ...w,
        ...c.props.style
      },
      ...k
    })
  });
});
process.env.NODE_ENV !== "production" && (cc.propTypes = {
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
  children: yo.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: wt(o.oneOfType([xt, o.func]), (e) => {
    if (e.open) {
      const t = lc(e.container);
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
const My = cc;
function Ay(e) {
  return ue("MuiDrawer", e);
}
ce("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const uc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, Dy = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: r
  } = e, i = {
    root: ["root", `anchor${K(n)}`],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${K(n)}`, r !== "temporary" && `paperAnchorDocked${K(n)}`]
  };
  return de(i, Ay, t);
}, By = G(gl, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: uc
})(fe(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), jy = G("div", {
  shouldForwardProp: Ke,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: uc
})({
  flex: "0 0 auto"
}), Ly = G(Xn, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${K(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${K(n.anchor)}`]];
  }
})(fe(({
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
}))), pc = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function _y(e) {
  return ["left", "right"].includes(e);
}
function Fy({
  direction: e
}, t) {
  return e === "rtl" && _y(t) ? pc[t] : t;
}
const dc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDrawer"
  }), i = bo(), s = Kn(), a = {
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
      ...y
    } = {},
    onClose: f,
    open: v = !1,
    PaperProps: E = {},
    SlideProps: C,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w,
    transitionDuration: b = a,
    variant: T = "temporary",
    slots: O = {},
    slotProps: $ = {},
    ...I
  } = r, M = x.useRef(!1);
  x.useEffect(() => {
    M.current = !0;
  }, []);
  const F = Fy({
    direction: s ? "rtl" : "ltr"
  }, l), d = {
    ...r,
    anchor: l,
    elevation: m,
    open: v,
    variant: T,
    ...I
  }, N = Dy(d), S = {
    slots: {
      transition: w,
      ...O
    },
    slotProps: {
      paper: E,
      transition: C,
      ...$,
      backdrop: Pa($.backdrop || {
        ...c,
        ...g
      }, {
        transitionDuration: b
      })
    }
  }, [R, P] = xe("root", {
    ref: n,
    elementType: By,
    className: ie(N.root, N.modal, p),
    shouldForwardComponentProp: !0,
    ownerState: d,
    externalForwardedProps: {
      ...S,
      ...I,
      ...y
    },
    additionalProps: {
      open: v,
      onClose: f,
      hideBackdrop: h,
      slots: {
        backdrop: S.slots.backdrop
      },
      slotProps: {
        backdrop: S.slotProps.backdrop
      }
    }
  }), [_, z] = xe("paper", {
    elementType: Ly,
    shouldForwardComponentProp: !0,
    className: ie(N.paper, E.className),
    ownerState: d,
    externalForwardedProps: S,
    additionalProps: {
      elevation: T === "temporary" ? m : 0,
      square: !0,
      ...T === "temporary" && {
        role: "dialog",
        "aria-modal": "true"
      }
    }
  }), [A, k] = xe("docked", {
    elementType: jy,
    ref: n,
    className: ie(N.root, N.docked, p),
    ownerState: d,
    externalForwardedProps: S,
    additionalProps: I
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [B, q] = xe("transition", {
    elementType: My,
    ownerState: d,
    externalForwardedProps: S,
    additionalProps: {
      in: v,
      direction: pc[F],
      timeout: b,
      appear: M.current
    }
  }), H = /* @__PURE__ */ L(_, {
    ...z,
    children: u
  });
  if (T === "permanent")
    return /* @__PURE__ */ L(A, {
      ...k,
      children: H
    });
  const Y = /* @__PURE__ */ L(B, {
    ...q,
    children: H
  });
  return T === "persistent" ? /* @__PURE__ */ L(A, {
    ...k,
    children: Y
  }) : /* @__PURE__ */ L(R, {
    ...P,
    children: Y
  });
});
process.env.NODE_ENV !== "production" && (dc.propTypes = {
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
  elevation: ni,
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
const Uy = dc, zy = ({
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
  accentColor: h = "#01584f"
}) => /* @__PURE__ */ V(
  Uy,
  {
    anchor: "right",
    open: e,
    onClose: t,
    sx: {
      zIndex: (y) => y.zIndex.drawer + 1,
      "& .MuiDrawer-paper": {
        backgroundImage: "none",
        backgroundColor: "background.paper"
      }
    },
    children: /* @__PURE__ */ V(
      Je,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ V(Je, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ V(
              Je,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ V(
                    Dr,
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
                  /* @__PURE__ */ V(gt, { component: "p", variant: "h6", children: a }, void 0, !1, {
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
            u && /* @__PURE__ */ V(
              Va,
              {
                color: "error",
                variant: "dot",
                invisible: p === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ V(Wo, { size: "small", children: /* @__PURE__ */ V($y, {}, void 0, !1, {
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
          /* @__PURE__ */ V(Dt, {}, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
            lineNumber: 107,
            columnNumber: 5
          }, globalThis),
          /* @__PURE__ */ V(Je, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ V(
              ac,
              {
                mainLinks: n,
                secondaryLinks: r,
                activePath: i,
                onLinkClick: (y) => {
                  s == null || s(y), t();
                },
                accentColor: h
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
            /* @__PURE__ */ V(Dt, {}, void 0, !1, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
              lineNumber: 116,
              columnNumber: 6
            }, globalThis)
          ] }, void 0, !0, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
            lineNumber: 108,
            columnNumber: 5
          }, globalThis),
          (m == null ? void 0 : m.show) && /* @__PURE__ */ V(Yl, { ...m }, void 0, !1, {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/MobileSidebar.tsx",
            lineNumber: 118,
            columnNumber: 26
          }, globalThis),
          /* @__PURE__ */ V(Je, { sx: { p: 2 }, children: /* @__PURE__ */ V(
            ql,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ V($a, {}, void 0, !1, {
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
), Zy = ({
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
  userAvatar: h,
  onLogout: g,
  onProfileClick: y,
  onAccountClick: f,
  onSettingsClick: v,
  showNotifications: E = !0,
  notificationCount: C = 0,
  showSearchbar: w = !0,
  searchValue: b,
  onSearchChange: T,
  onSearchSubmit: O,
  showProfile: $ = !0,
  userRole: I,
  alertProps: M,
  style: F,
  headerStyles: j,
  sidebarStyles: d,
  contentStyles: N,
  accentColor: S = "#01584f",
  contentBackgroundColor: R = "#f2f9fc",
  navbarBackground: P = "#ffffff",
  navbarAccentColor: _ = "#000000",
  GlobalChatSidebar: z,
  useChatSidebar: A,
  rightExtraContent: k
}) => {
  const B = hc(), q = gc(B.breakpoints.down("md")), [H, Y] = sr(!1), [J, Q] = sr(!0), [X, ee] = sr(!1), Z = A == null ? void 0 : A(), W = (Z == null ? void 0 : Z.isOpen) ?? !1, te = () => {
    Y(!H);
  }, U = () => {
    Y(!1);
  };
  return ar(() => {
    (() => {
      try {
        if (!localStorage.getItem("lumoraRefreshToken")) {
          console.log("No session found, redirecting to login"), window.location.href = "/login";
          return;
        }
        ee(!0);
      } catch (ne) {
        console.error("Error checking session:", ne), window.location.href = "/login";
      } finally {
        Q(!1);
      }
    })();
  }, []), ar(() => (l && Cc(), () => {
    Sc();
  }), [l]), ar(() => {
    l && Rc();
  }, [l]), J ? /* @__PURE__ */ V(
    Eo,
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
        /* @__PURE__ */ V(
          bc,
          {
            size: 60,
            thickness: 4,
            sx: { color: S }
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
            lineNumber: 214,
            columnNumber: 5
          },
          globalThis
        ),
        /* @__PURE__ */ V(Eo, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." }, void 0, !1, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
          lineNumber: 219,
          columnNumber: 5
        }, globalThis)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
      lineNumber: 204,
      columnNumber: 4
    },
    globalThis
  ) : X ? /* @__PURE__ */ V(
    Eo,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...F
      },
      children: [
        /* @__PURE__ */ V(yc, {}, void 0, !1, {
          fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
          lineNumber: 240,
          columnNumber: 4
        }, globalThis),
        s && /* @__PURE__ */ V(
          Hg,
          {
            appName: r,
            pageName: i,
            onMenuClick: q && a ? te : void 0,
            showMenuButton: q && a,
            headerStyles: j,
            userName: p,
            userEmail: m,
            userAvatar: h,
            onProfileClick: y,
            onAccountClick: f,
            onSettingsClick: v,
            onLogout: g,
            showNotifications: E,
            notificationCount: C,
            showSearchbar: w,
            searchValue: b,
            onSearchChange: T,
            onSearchSubmit: O,
            showProfile: $,
            userRole: I,
            accentColor: S,
            contentBackgroundColor: R,
            navbarBackground: P,
            navbarAccentColor: _,
            rightExtraContent: k
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
            lineNumber: 244,
            columnNumber: 5
          },
          globalThis
        ),
        a && !q && /* @__PURE__ */ V(
          vc,
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
                bgcolor: R,
                borderRight: "none",
                top: s ? "60px" : 0,
                // Position below header
                height: s ? "calc(100vh - 60px)" : "100vh"
              },
              ...d
            },
            children: /* @__PURE__ */ V(
              Eo,
              {
                sx: {
                  overflow: "auto",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  pt: 2
                },
                children: [
                  /* @__PURE__ */ V(
                    ac,
                    {
                      mainLinks: t,
                      secondaryLinks: n,
                      activePath: c,
                      onLinkClick: u,
                      accentColor: S
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                      lineNumber: 305,
                      columnNumber: 7
                    },
                    globalThis
                  ),
                  (M == null ? void 0 : M.show) && /* @__PURE__ */ V(Yl, { ...M }, void 0, !1, {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                    lineNumber: 312,
                    columnNumber: 28
                  }, globalThis)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                lineNumber: 296,
                columnNumber: 6
              },
              globalThis
            )
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
            lineNumber: 279,
            columnNumber: 5
          },
          globalThis
        ),
        a && q && /* @__PURE__ */ V(
          zy,
          {
            open: H,
            onClose: U,
            mainLinks: t,
            secondaryLinks: n,
            activePath: c,
            onLinkClick: u,
            userName: p,
            userEmail: m,
            userAvatar: h,
            onLogout: g,
            onProfileClick: y,
            showNotifications: E,
            notificationCount: C,
            alertProps: M,
            accentColor: S
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
            lineNumber: 319,
            columnNumber: 5
          },
          globalThis
        ),
        /* @__PURE__ */ V(
          Eo,
          {
            component: "main",
            sx: {
              flexGrow: 1,
              p: 3,
              m: 1,
              width: q ? "100%" : a ? "calc(100% - 80px)" : "100%",
              mt: s ? "60px" : 0,
              // Account for AppNavbar height (60px)
              ml: 0,
              // Offset for sidebar on desktop
              backgroundColor: R,
              // White background for main content
              ...N
            },
            children: /* @__PURE__ */ V(ir, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ V(
                ir,
                {
                  size: {
                    xs: 12,
                    md: W && z ? 8.5 : 12
                  },
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
                  lineNumber: 357,
                  columnNumber: 6
                },
                globalThis
              ),
              W && z && /* @__PURE__ */ V(
                ir,
                {
                  size: { xs: 12, md: 3.5 },
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    position: { xs: "static", md: "sticky" },
                    top: {
                      xs: "auto",
                      md: s ? "60px" : "0px"
                    },
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
                  children: /* @__PURE__ */ V(z, {}, void 0, !1, {
                    fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                    lineNumber: 395,
                    columnNumber: 8
                  }, globalThis)
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
                  lineNumber: 370,
                  columnNumber: 7
                },
                globalThis
              )
            ] }, void 0, !0, {
              fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
              lineNumber: 356,
              columnNumber: 5
            }, globalThis)
          },
          void 0,
          !1,
          {
            fileName: "/Users/koddievangelista/Desktop/lumora/lumora-wrapper-component/src/lib/components/LumoraWrapper.tsx",
            lineNumber: 339,
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
      lineNumber: 233,
      columnNumber: 3
    },
    globalThis
  ) : null;
};
export {
  Zy as LumoraWrapper,
  Zy as default,
  Jy as logoutUser
};
