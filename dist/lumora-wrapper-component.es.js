var ac = Object.defineProperty;
var lc = (e, t, o) => t in e ? ac(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var xn = (e, t, o) => (lc(e, typeof t != "symbol" ? t + "" : t, o), o);
import { jsx as C, jsxs as ie, Fragment as Vs } from "react/jsx-runtime";
import { useTheme as cc, useMediaQuery as uc, Box as Tn, CircularProgress as pc, CssBaseline as dc, Drawer as fc, Grid as er } from "@mui/material";
import * as x from "react";
import St, { Children as mc, isValidElement as uo, cloneElement as po, useState as tr, useEffect as nr } from "react";
import zr from "axios";
import hc from "@emotion/styled";
import { Global as gc, ThemeContext as yc, keyframes as Un, css as Ws } from "@emotion/react";
import * as bc from "react-dom";
import to from "react-dom";
let Vr = !1;
const vc = () => {
  Vr = !0;
}, xc = () => {
  Vr = !1;
}, Tc = zr.create(), ho = zr.create({
  baseURL: { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_BASE_URL || "http://localhost:3000",
  headers: {
    "X-API-Key": { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_API_KEY || "",
    "Content-Type": "application/json"
  }
});
ho.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("lumoraAccessToken");
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
ho.interceptors.response.use(
  (e) => e,
  async (e) => {
    var o;
    const t = e.config;
    if (((o = e.response) == null ? void 0 : o.status) === 401 && Vr && t && !t._retry) {
      t._retry = !0;
      try {
        const r = localStorage.getItem("lumoraRefreshToken");
        if (!r)
          throw new Error("No refresh token available");
        const i = await Tc.post(
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
          ), t.headers.Authorization = `Bearer ${i.data.accessToken}`, ho(t);
        throw new Error("Invalid refresh response");
      } catch (r) {
        return localStorage.removeItem("lumoraAccessToken"), localStorage.removeItem("lumoraRefreshToken"), window.location.href = "/login", Promise.reject(r);
      }
    }
    return Promise.reject(e);
  }
);
const zb = async () => {
  const e = localStorage.getItem("lumoraRefreshToken");
  if (!e)
    throw new Error("No refresh token available for logout");
  await ho.post("/auth/logout", {
    refresh_token: e
  });
}, Ec = async () => {
  const e = localStorage.getItem("lumoraAccessToken"), t = localStorage.getItem("lumoraRefreshToken");
  if (e)
    return !0;
  if (t)
    try {
      const o = await zr.post(
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
}, vi = (e) => e, Oc = () => {
  let e = vi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = vi;
    }
  };
}, wc = Oc(), Us = wc;
function vt(e, ...t) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => o.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${o} for the full message.`;
}
function K(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : vt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function xi(...e) {
  return e.reduce((t, o) => o == null ? t : function(...i) {
    t.apply(this, i), o.apply(this, i);
  }, () => {
  });
}
function Cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tr = { exports: {} }, no = { exports: {} }, ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti;
function Sc() {
  if (Ti)
    return ge;
  Ti = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function E(T) {
    if (typeof T == "object" && T !== null) {
      var w = T.$$typeof;
      switch (w) {
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
                  return w;
              }
          }
        case o:
          return w;
      }
    }
  }
  function y(T) {
    return E(T) === u;
  }
  return ge.AsyncMode = c, ge.ConcurrentMode = u, ge.ContextConsumer = l, ge.ContextProvider = a, ge.Element = t, ge.ForwardRef = p, ge.Fragment = r, ge.Lazy = b, ge.Memo = g, ge.Portal = o, ge.Profiler = s, ge.StrictMode = i, ge.Suspense = m, ge.isAsyncMode = function(T) {
    return y(T) || E(T) === c;
  }, ge.isConcurrentMode = y, ge.isContextConsumer = function(T) {
    return E(T) === l;
  }, ge.isContextProvider = function(T) {
    return E(T) === a;
  }, ge.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, ge.isForwardRef = function(T) {
    return E(T) === p;
  }, ge.isFragment = function(T) {
    return E(T) === r;
  }, ge.isLazy = function(T) {
    return E(T) === b;
  }, ge.isMemo = function(T) {
    return E(T) === g;
  }, ge.isPortal = function(T) {
    return E(T) === o;
  }, ge.isProfiler = function(T) {
    return E(T) === s;
  }, ge.isStrictMode = function(T) {
    return E(T) === i;
  }, ge.isSuspense = function(T) {
    return E(T) === m;
  }, ge.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === r || T === u || T === s || T === i || T === m || T === h || typeof T == "object" && T !== null && (T.$$typeof === b || T.$$typeof === g || T.$$typeof === a || T.$$typeof === l || T.$$typeof === p || T.$$typeof === v || T.$$typeof === O || T.$$typeof === S || T.$$typeof === f);
  }, ge.typeOf = E, ge;
}
var ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ei;
function Rc() {
  return Ei || (Ei = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function E(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === s || _ === i || _ === m || _ === h || typeof _ == "object" && _ !== null && (_.$$typeof === b || _.$$typeof === g || _.$$typeof === a || _.$$typeof === l || _.$$typeof === p || _.$$typeof === v || _.$$typeof === O || _.$$typeof === S || _.$$typeof === f);
    }
    function y(_) {
      if (typeof _ == "object" && _ !== null) {
        var ae = _.$$typeof;
        switch (ae) {
          case t:
            var oe = _.type;
            switch (oe) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case m:
                return oe;
              default:
                var me = oe && oe.$$typeof;
                switch (me) {
                  case l:
                  case p:
                  case b:
                  case g:
                  case a:
                    return me;
                  default:
                    return ae;
                }
            }
          case o:
            return ae;
        }
      }
    }
    var T = c, w = u, $ = l, D = a, B = t, F = p, j = r, d = b, P = g, R = o, M = s, N = i, L = m, z = !1;
    function k(_) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(_) || y(_) === c;
    }
    function I(_) {
      return y(_) === u;
    }
    function V(_) {
      return y(_) === l;
    }
    function q(_) {
      return y(_) === a;
    }
    function U(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function H(_) {
      return y(_) === p;
    }
    function G(_) {
      return y(_) === r;
    }
    function J(_) {
      return y(_) === b;
    }
    function X(_) {
      return y(_) === g;
    }
    function Z(_) {
      return y(_) === o;
    }
    function Q(_) {
      return y(_) === s;
    }
    function W(_) {
      return y(_) === i;
    }
    function ee(_) {
      return y(_) === m;
    }
    ye.AsyncMode = T, ye.ConcurrentMode = w, ye.ContextConsumer = $, ye.ContextProvider = D, ye.Element = B, ye.ForwardRef = F, ye.Fragment = j, ye.Lazy = d, ye.Memo = P, ye.Portal = R, ye.Profiler = M, ye.StrictMode = N, ye.Suspense = L, ye.isAsyncMode = k, ye.isConcurrentMode = I, ye.isContextConsumer = V, ye.isContextProvider = q, ye.isElement = U, ye.isForwardRef = H, ye.isFragment = G, ye.isLazy = J, ye.isMemo = X, ye.isPortal = Z, ye.isProfiler = Q, ye.isStrictMode = W, ye.isSuspense = ee, ye.isValidElementType = E, ye.typeOf = y;
  }()), ye;
}
var Oi;
function Hs() {
  return Oi || (Oi = 1, process.env.NODE_ENV === "production" ? no.exports = Sc() : no.exports = Rc()), no.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var or, wi;
function Pc() {
  if (wi)
    return or;
  wi = 1;
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
  return or = i() ? Object.assign : function(s, a) {
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
  }, or;
}
var rr, Ci;
function Wr() {
  if (Ci)
    return rr;
  Ci = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return rr = e, rr;
}
var ir, Si;
function qs() {
  return Si || (Si = 1, ir = Function.call.bind(Object.prototype.hasOwnProperty)), ir;
}
var sr, Ri;
function $c() {
  if (Ri)
    return sr;
  Ri = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Wr(), o = {}, r = qs();
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
  }, sr = i, sr;
}
var ar, Pi;
function Ic() {
  if (Pi)
    return ar;
  Pi = 1;
  var e = Hs(), t = Pc(), o = Wr(), r = qs(), i = $c(), s = function() {
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
  return ar = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(I) {
      var V = I && (u && I[u] || I[p]);
      if (typeof V == "function")
        return V;
    }
    var h = "<<anonymous>>", g = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: S(),
      arrayOf: E,
      element: y(),
      elementType: T(),
      instanceOf: w,
      node: F(),
      objectOf: D,
      oneOf: $,
      oneOfType: B,
      shape: d,
      exact: P
    };
    function b(I, V) {
      return I === V ? I !== 0 || 1 / I === 1 / V : I !== I && V !== V;
    }
    function f(I, V) {
      this.message = I, this.data = V && typeof V == "object" ? V : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function v(I) {
      if (process.env.NODE_ENV !== "production")
        var V = {}, q = 0;
      function U(G, J, X, Z, Q, W, ee) {
        if (Z = Z || h, W = W || X, ee !== o) {
          if (c) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = Z + ":" + X;
            !V[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), V[ae] = !0, q++);
          }
        }
        return J[X] == null ? G ? J[X] === null ? new f("The " + Q + " `" + W + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new f("The " + Q + " `" + W + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : I(J, X, Z, Q, W);
      }
      var H = U.bind(null, !1);
      return H.isRequired = U.bind(null, !0), H;
    }
    function O(I) {
      function V(q, U, H, G, J, X) {
        var Z = q[U], Q = N(Z);
        if (Q !== I) {
          var W = L(Z);
          return new f(
            "Invalid " + G + " `" + J + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return v(V);
    }
    function S() {
      return v(a);
    }
    function E(I) {
      function V(q, U, H, G, J) {
        if (typeof I != "function")
          return new f("Property `" + J + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var X = q[U];
        if (!Array.isArray(X)) {
          var Z = N(X);
          return new f("Invalid " + G + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + H + "`, expected an array."));
        }
        for (var Q = 0; Q < X.length; Q++) {
          var W = I(X, Q, H, G, J + "[" + Q + "]", o);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return v(V);
    }
    function y() {
      function I(V, q, U, H, G) {
        var J = V[q];
        if (!l(J)) {
          var X = N(J);
          return new f("Invalid " + H + " `" + G + "` of type " + ("`" + X + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(I);
    }
    function T() {
      function I(V, q, U, H, G) {
        var J = V[q];
        if (!e.isValidElementType(J)) {
          var X = N(J);
          return new f("Invalid " + H + " `" + G + "` of type " + ("`" + X + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(I);
    }
    function w(I) {
      function V(q, U, H, G, J) {
        if (!(q[U] instanceof I)) {
          var X = I.name || h, Z = k(q[U]);
          return new f("Invalid " + G + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + H + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return v(V);
    }
    function $(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function V(q, U, H, G, J) {
        for (var X = q[U], Z = 0; Z < I.length; Z++)
          if (b(X, I[Z]))
            return null;
        var Q = JSON.stringify(I, function(ee, _) {
          var ae = L(_);
          return ae === "symbol" ? String(_) : _;
        });
        return new f("Invalid " + G + " `" + J + "` of value `" + String(X) + "` " + ("supplied to `" + H + "`, expected one of " + Q + "."));
      }
      return v(V);
    }
    function D(I) {
      function V(q, U, H, G, J) {
        if (typeof I != "function")
          return new f("Property `" + J + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var X = q[U], Z = N(X);
        if (Z !== "object")
          return new f("Invalid " + G + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + H + "`, expected an object."));
        for (var Q in X)
          if (r(X, Q)) {
            var W = I(X, Q, H, G, J + "." + Q, o);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return v(V);
    }
    function B(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var V = 0; V < I.length; V++) {
        var q = I[V];
        if (typeof q != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(q) + " at index " + V + "."
          ), a;
      }
      function U(H, G, J, X, Z) {
        for (var Q = [], W = 0; W < I.length; W++) {
          var ee = I[W], _ = ee(H, G, J, X, Z, o);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && Q.push(_.data.expectedType);
        }
        var ae = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new f("Invalid " + X + " `" + Z + "` supplied to " + ("`" + J + "`" + ae + "."));
      }
      return v(U);
    }
    function F() {
      function I(V, q, U, H, G) {
        return R(V[q]) ? null : new f("Invalid " + H + " `" + G + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return v(I);
    }
    function j(I, V, q, U, H) {
      return new f(
        (I || "React class") + ": " + V + " type `" + q + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function d(I) {
      function V(q, U, H, G, J) {
        var X = q[U], Z = N(X);
        if (Z !== "object")
          return new f("Invalid " + G + " `" + J + "` of type `" + Z + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var Q in I) {
          var W = I[Q];
          if (typeof W != "function")
            return j(H, G, J, Q, L(W));
          var ee = W(X, Q, H, G, J + "." + Q, o);
          if (ee)
            return ee;
        }
        return null;
      }
      return v(V);
    }
    function P(I) {
      function V(q, U, H, G, J) {
        var X = q[U], Z = N(X);
        if (Z !== "object")
          return new f("Invalid " + G + " `" + J + "` of type `" + Z + "` " + ("supplied to `" + H + "`, expected `object`."));
        var Q = t({}, q[U], I);
        for (var W in Q) {
          var ee = I[W];
          if (r(I, W) && typeof ee != "function")
            return j(H, G, J, W, L(ee));
          if (!ee)
            return new f(
              "Invalid " + G + " `" + J + "` key `" + W + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(q[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var _ = ee(X, W, H, G, J + "." + W, o);
          if (_)
            return _;
        }
        return null;
      }
      return v(V);
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
          if (I === null || l(I))
            return !0;
          var V = m(I);
          if (V) {
            var q = V.call(I), U;
            if (V !== I.entries) {
              for (; !(U = q.next()).done; )
                if (!R(U.value))
                  return !1;
            } else
              for (; !(U = q.next()).done; ) {
                var H = U.value;
                if (H && !R(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function M(I, V) {
      return I === "symbol" ? !0 : V ? V["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && V instanceof Symbol : !1;
    }
    function N(I) {
      var V = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : M(V, I) ? "symbol" : V;
    }
    function L(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var V = N(I);
      if (V === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return V;
    }
    function z(I) {
      var V = L(I);
      switch (V) {
        case "array":
        case "object":
          return "an " + V;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + V;
        default:
          return V;
      }
    }
    function k(I) {
      return !I.constructor || !I.constructor.name ? h : I.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, ar;
}
var lr, $i;
function Nc() {
  if ($i)
    return lr;
  $i = 1;
  var e = Wr();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, lr = function() {
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
  }, lr;
}
if (process.env.NODE_ENV !== "production") {
  var kc = Hs(), Mc = !0;
  Tr.exports = Ic()(kc.isElement, Mc);
} else
  Tr.exports = Nc()();
var Ac = Tr.exports;
const n = /* @__PURE__ */ Cc(Ac);
function Ys(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (o = Ys(e[t])) && (r && (r += " "), r += o);
    } else
      for (o in e)
        e[o] && (r && (r += " "), r += o);
  return r;
}
function ne() {
  for (var e, t, o = 0, r = "", i = arguments.length; o < i; o++)
    (e = arguments[o]) && (t = Ys(e)) && (r && (r += " "), r += t);
  return r;
}
function pe(e, t, o = void 0) {
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
var Er = { exports: {} }, Te = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ii;
function Dc() {
  if (Ii)
    return Te;
  Ii = 1;
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
  return Te.ContextConsumer = s, Te.ContextProvider = a, Te.Element = e, Te.ForwardRef = l, Te.Fragment = o, Te.Lazy = m, Te.Memo = p, Te.Portal = t, Te.Profiler = i, Te.StrictMode = r, Te.Suspense = c, Te.SuspenseList = u, Te.isContextConsumer = function(f) {
    return b(f) === s;
  }, Te.isContextProvider = function(f) {
    return b(f) === a;
  }, Te.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Te.isForwardRef = function(f) {
    return b(f) === l;
  }, Te.isFragment = function(f) {
    return b(f) === o;
  }, Te.isLazy = function(f) {
    return b(f) === m;
  }, Te.isMemo = function(f) {
    return b(f) === p;
  }, Te.isPortal = function(f) {
    return b(f) === t;
  }, Te.isProfiler = function(f) {
    return b(f) === i;
  }, Te.isStrictMode = function(f) {
    return b(f) === r;
  }, Te.isSuspense = function(f) {
    return b(f) === c;
  }, Te.isSuspenseList = function(f) {
    return b(f) === u;
  }, Te.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === i || f === r || f === c || f === u || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === p || f.$$typeof === a || f.$$typeof === s || f.$$typeof === l || f.$$typeof === g || f.getModuleId !== void 0);
  }, Te.typeOf = b, Te;
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
var Ni;
function Bc() {
  return Ni || (Ni = 1, process.env.NODE_ENV !== "production" && function() {
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
    Ee.ContextConsumer = a, Ee.ContextProvider = l, Ee.Element = t, Ee.ForwardRef = c, Ee.Fragment = r, Ee.Lazy = h, Ee.Memo = m, Ee.Portal = o, Ee.Profiler = s, Ee.StrictMode = i, Ee.Suspense = u, Ee.SuspenseList = p, Ee.isContextConsumer = function(f) {
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
      return e(f) === o;
    }, Ee.isProfiler = function(f) {
      return e(f) === s;
    }, Ee.isStrictMode = function(f) {
      return e(f) === i;
    }, Ee.isSuspense = function(f) {
      return e(f) === u;
    }, Ee.isSuspenseList = function(f) {
      return e(f) === p;
    }, Ee.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === r || f === s || f === i || f === u || f === p || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === m || f.$$typeof === l || f.$$typeof === a || f.$$typeof === c || f.$$typeof === b || f.getModuleId !== void 0);
    }, Ee.typeOf = e;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Er.exports = Dc() : Er.exports = Bc();
var Yt = Er.exports;
function yt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Gs(e) {
  if (/* @__PURE__ */ x.isValidElement(e) || Yt.isValidElementType(e) || !yt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Gs(e[o]);
  }), t;
}
function je(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? {
    ...e
  } : e;
  return yt(e) && yt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ x.isValidElement(t[i]) || Yt.isValidElementType(t[i]) ? r[i] = t[i] : yt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && yt(e[i]) ? r[i] = je(e[i], t[i], o) : o.clone ? r[i] = yt(t[i]) ? Gs(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
function Mn(e, t) {
  return t ? je(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const jc = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {}, Bt = jc;
function ki(e, t) {
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
function Lc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((o) => t.startsWith(`@${o}`)) || !!t.match(/^@\d/));
}
function _c(e, t) {
  const o = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : vt(18, `(${t})`));
    return null;
  }
  const [, r, i] = o, s = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(s);
}
function Fc(e) {
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
const $o = {
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
}, Mi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${$o[e]}px)`
}, zc = {
  containerQueries: (e) => ({
    up: (t) => {
      let o = typeof t == "number" ? t : $o[t] || t;
      return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function at(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Mi;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = o(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Mi;
    return Object.keys(t).reduce((a, l) => {
      if (Lc(s.keys, l)) {
        const c = _c(r.containerQueries ? r : zc, l);
        c && (a[c] = o(t[l], l));
      } else if (Object.keys(s.values || $o).includes(l)) {
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
function Ks(e = {}) {
  var o;
  return ((o = e.keys) == null ? void 0 : o.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function Or(e, t) {
  return e.reduce((o, r) => {
    const i = o[r];
    return (!i || Object.keys(i).length === 0) && delete o[r], o;
  }, t);
}
function Vc(e, ...t) {
  const o = Ks(e), r = [o, ...t].reduce((i, s) => je(i, s), {});
  return Or(Object.keys(o), r);
}
function Wc(e, t) {
  if (typeof e != "object")
    return {};
  const o = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((i, s) => {
    s < e.length && (o[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (o[i] = !0);
  }), o;
}
function cr({
  values: e,
  breakpoints: t,
  base: o
}) {
  const r = o || Wc(e, t), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function Io(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function go(e, t, o, r = o) {
  let i;
  return typeof e == "function" ? i = e(o) : Array.isArray(e) ? i = e[o] || r : i = Io(e, o) || r, t && (i = t(i, r, e)), i;
}
function Me(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Io(c, r) || {};
    return at(a, l, (m) => {
      let h = go(u, i, m);
      return m === h && typeof m == "string" && (h = go(u, i, `${t}${m === "default" ? "" : K(m)}`, m)), o === !1 ? h : {
        [o]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Bt
  } : {}, s.filterProps = [t], s;
}
function Uc(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Hc = {
  m: "margin",
  p: "padding"
}, qc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ai = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Yc = Uc((e) => {
  if (e.length > 2)
    if (Ai[e])
      e = Ai[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Hc[t], i = qc[o] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), No = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ko = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Gc = [...No, ...ko];
function Hn(e, t, o, r) {
  const i = Io(e, t, !0) ?? o;
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
function Mo(e) {
  return Hn(e, "spacing", 8, "spacing");
}
function Gt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Kc(e, t) {
  return (o) => e.reduce((r, i) => (r[i] = Gt(t, o), r), {});
}
function Xc(e, t, o, r) {
  if (!t.includes(o))
    return null;
  const i = Yc(o), s = Kc(i, r), a = e[o];
  return at(e, a, s);
}
function Xs(e, t) {
  const o = Mo(e.theme);
  return Object.keys(e).map((r) => Xc(e, t, r, o)).reduce(Mn, {});
}
function $e(e) {
  return Xs(e, No);
}
$e.propTypes = process.env.NODE_ENV !== "production" ? No.reduce((e, t) => (e[t] = Bt, e), {}) : {};
$e.filterProps = No;
function Ie(e) {
  return Xs(e, ko);
}
Ie.propTypes = process.env.NODE_ENV !== "production" ? ko.reduce((e, t) => (e[t] = Bt, e), {}) : {};
Ie.filterProps = ko;
process.env.NODE_ENV !== "production" && Gc.reduce((e, t) => (e[t] = Bt, e), {});
function Ao(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), o = (r) => Object.keys(r).reduce((i, s) => t[s] ? Mn(i, t[s](r)) : i, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, o.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), o;
}
function Qe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function nt(e, t) {
  return Me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Qc = nt("border", Qe), Jc = nt("borderTop", Qe), Zc = nt("borderRight", Qe), eu = nt("borderBottom", Qe), tu = nt("borderLeft", Qe), nu = nt("borderColor"), ou = nt("borderTopColor"), ru = nt("borderRightColor"), iu = nt("borderBottomColor"), su = nt("borderLeftColor"), au = nt("outline", Qe), lu = nt("outlineColor"), Do = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Hn(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: Gt(t, r)
    });
    return at(e, e.borderRadius, o);
  }
  return null;
};
Do.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Bt
} : {};
Do.filterProps = ["borderRadius"];
Ao(Qc, Jc, Zc, eu, tu, nu, ou, ru, iu, su, Do, au, lu);
const Bo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Hn(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: Gt(t, r)
    });
    return at(e, e.gap, o);
  }
  return null;
};
Bo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Bt
} : {};
Bo.filterProps = ["gap"];
const jo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Hn(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: Gt(t, r)
    });
    return at(e, e.columnGap, o);
  }
  return null;
};
jo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Bt
} : {};
jo.filterProps = ["columnGap"];
const Lo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Hn(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: Gt(t, r)
    });
    return at(e, e.rowGap, o);
  }
  return null;
};
Lo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Bt
} : {};
Lo.filterProps = ["rowGap"];
const cu = Me({
  prop: "gridColumn"
}), uu = Me({
  prop: "gridRow"
}), pu = Me({
  prop: "gridAutoFlow"
}), du = Me({
  prop: "gridAutoColumns"
}), fu = Me({
  prop: "gridAutoRows"
}), mu = Me({
  prop: "gridTemplateColumns"
}), hu = Me({
  prop: "gridTemplateRows"
}), gu = Me({
  prop: "gridTemplateAreas"
}), yu = Me({
  prop: "gridArea"
});
Ao(Bo, jo, Lo, cu, uu, pu, du, fu, mu, hu, gu, yu);
function cn(e, t) {
  return t === "grey" ? t : e;
}
const bu = Me({
  prop: "color",
  themeKey: "palette",
  transform: cn
}), vu = Me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: cn
}), xu = Me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: cn
});
Ao(bu, vu, xu);
function Ue(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Tu = Me({
  prop: "width",
  transform: Ue
}), Ur = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var i, s, a, l, c;
      const r = ((a = (s = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[o]) || $o[o];
      return r ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Ue(o)
      };
    };
    return at(e, e.maxWidth, t);
  }
  return null;
};
Ur.filterProps = ["maxWidth"];
const Eu = Me({
  prop: "minWidth",
  transform: Ue
}), Ou = Me({
  prop: "height",
  transform: Ue
}), wu = Me({
  prop: "maxHeight",
  transform: Ue
}), Cu = Me({
  prop: "minHeight",
  transform: Ue
});
Me({
  prop: "size",
  cssProperty: "width",
  transform: Ue
});
Me({
  prop: "size",
  cssProperty: "height",
  transform: Ue
});
const Su = Me({
  prop: "boxSizing"
});
Ao(Tu, Ur, Eu, Ou, wu, Cu, Su);
const Ru = {
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
    style: Do
  },
  // palette
  color: {
    themeKey: "palette",
    transform: cn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: cn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: cn
  },
  // spacing
  p: {
    style: Ie
  },
  pt: {
    style: Ie
  },
  pr: {
    style: Ie
  },
  pb: {
    style: Ie
  },
  pl: {
    style: Ie
  },
  px: {
    style: Ie
  },
  py: {
    style: Ie
  },
  padding: {
    style: Ie
  },
  paddingTop: {
    style: Ie
  },
  paddingRight: {
    style: Ie
  },
  paddingBottom: {
    style: Ie
  },
  paddingLeft: {
    style: Ie
  },
  paddingX: {
    style: Ie
  },
  paddingY: {
    style: Ie
  },
  paddingInline: {
    style: Ie
  },
  paddingInlineStart: {
    style: Ie
  },
  paddingInlineEnd: {
    style: Ie
  },
  paddingBlock: {
    style: Ie
  },
  paddingBlockStart: {
    style: Ie
  },
  paddingBlockEnd: {
    style: Ie
  },
  m: {
    style: $e
  },
  mt: {
    style: $e
  },
  mr: {
    style: $e
  },
  mb: {
    style: $e
  },
  ml: {
    style: $e
  },
  mx: {
    style: $e
  },
  my: {
    style: $e
  },
  margin: {
    style: $e
  },
  marginTop: {
    style: $e
  },
  marginRight: {
    style: $e
  },
  marginBottom: {
    style: $e
  },
  marginLeft: {
    style: $e
  },
  marginX: {
    style: $e
  },
  marginY: {
    style: $e
  },
  marginInline: {
    style: $e
  },
  marginInlineStart: {
    style: $e
  },
  marginInlineEnd: {
    style: $e
  },
  marginBlock: {
    style: $e
  },
  marginBlockStart: {
    style: $e
  },
  marginBlockEnd: {
    style: $e
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
    style: jo
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
    transform: Ue
  },
  maxWidth: {
    style: Ur
  },
  minWidth: {
    transform: Ue
  },
  height: {
    transform: Ue
  },
  maxHeight: {
    transform: Ue
  },
  minHeight: {
    transform: Ue
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
}, qn = Ru;
function Pu(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function $u(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Iu() {
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
    const h = Io(i, u) || {};
    return m ? m(a) : at(a, r, (b) => {
      let f = go(h, p, b);
      return b === f && typeof b == "string" && (f = go(h, p, `${o}${b === "default" ? "" : K(b)}`, b)), c === !1 ? f : {
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
    const a = i.unstable_sxConfig ?? qn;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const p = Ks(i.breakpoints), m = Object.keys(p);
      let h = p;
      return Object.keys(u).forEach((g) => {
        const b = $u(u[g], i);
        if (b != null)
          if (typeof b == "object")
            if (a[g])
              h = Mn(h, e(g, b, i, a));
            else {
              const f = at({
                theme: i
              }, b, (v) => ({
                [g]: v
              }));
              Pu(f, b) ? h[g] = t({
                sx: b,
                theme: i,
                nested: !0
              }) : h = Mn(h, f);
            }
          else
            h = Mn(h, e(g, b, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": ki(i, Or(m, h))
      } : ki(i, Or(m, h));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const Qs = Iu();
Qs.filterProps = ["sx"];
const un = Qs, Nu = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, o = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? qn;
  return Object.keys(e).forEach((i) => {
    o[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function Hr(e) {
  const {
    sx: t,
    ...o
  } = e, {
    systemProps: r,
    otherProps: i
  } = Nu(o);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return yt(l) ? {
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
function ku(e) {
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
var Mu = {
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
function Au(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var Du = !1, Bu = /[A-Z]|^ms/g, ju = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Js = function(t) {
  return t.charCodeAt(1) === 45;
}, Di = function(t) {
  return t != null && typeof t != "boolean";
}, ur = /* @__PURE__ */ Au(function(e) {
  return Js(e) ? e : e.replace(Bu, "-$&").toLowerCase();
}), Bi = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(ju, function(r, i, s) {
          return ht = {
            name: i,
            styles: s,
            next: ht
          }, i;
        });
  }
  return Mu[t] !== 1 && !Js(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
}, Lu = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
        return ht = {
          name: i.name,
          styles: i.styles,
          next: ht
        }, i.name;
      var s = o;
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
      return _u(e, t, o);
    }
    case "function": {
      if (e !== void 0) {
        var c = ht, u = o(e);
        return ht = c, Ln(e, t, u);
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
function _u(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var i = 0; i < o.length; i++)
      r += Ln(e, t, o[i]) + ";";
  else
    for (var s in o) {
      var a = o[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : Di(l) && (r += ur(s) + ":" + Bi(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Du)
          throw new Error(Lu);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Di(a[c]) && (r += ur(s) + ":" + Bi(s, a[c]) + ";");
        else {
          var u = Ln(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += ur(s) + ":" + u + ";";
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
var ji = /label:\s*([^\s;{]+)\s*(;|$)/g, ht;
function Fu(e, t, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  ht = void 0;
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
  ji.lastIndex = 0;
  for (var u = "", p; (p = ji.exec(i)) !== null; )
    u += "-" + p[1];
  var m = ku(i) + u;
  return {
    name: m,
    styles: i,
    next: ht
  };
}
function zu(e) {
  return e == null || Object.keys(e).length === 0;
}
function Zs(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e;
  return /* @__PURE__ */ C(gc, {
    styles: typeof t == "function" ? (i) => t(zu(i) ? o : i) : t
  });
}
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
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
function ea(e, t) {
  const o = hc(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
function Vu(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Li = [];
function Mt(e) {
  return Li[0] = e, Fu(Li);
}
const Wu = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => ({
    ...o,
    [r.key]: r.val
  }), {});
};
function Uu(e) {
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
  } = e, s = Wu(t), a = Object.keys(s);
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
const Hu = {
  borderRadius: 4
}, qu = Hu;
function ta(e = 8, t = Mo({
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
function Yu(e, t) {
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
function _o(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, l = Uu(o), c = ta(i);
  let u = je({
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
      ...qu,
      ...s
    }
  }, a);
  return u = Fc(u), u.applyStyles = Yu, u = t.reduce((p, m) => je(p, m), u), u.unstable_sxConfig = {
    ...qn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return un({
      sx: m,
      theme: this
    });
  }, u;
}
function Gu(e) {
  return Object.keys(e).length === 0;
}
function na(e = null) {
  const t = x.useContext(yc);
  return !t || Gu(t) ? e : t;
}
const Ku = _o();
function Fo(e = Ku) {
  return na(e);
}
function pr(e) {
  const t = Mt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function oa({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = Fo(o), i = t && r[t] || r;
  let s = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(s) ? s = s.map((a) => pr(typeof a == "function" ? a(i) : a)) : s = pr(s)), /* @__PURE__ */ C(Zs, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (oa.propTypes = {
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
function Xu(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, s = ea("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(un);
  return /* @__PURE__ */ x.forwardRef(function(c, u) {
    const p = Fo(o), {
      className: m,
      component: h = "div",
      ...g
    } = Hr(c);
    return /* @__PURE__ */ C(s, {
      as: h,
      ref: u,
      className: ne(m, i ? i(r) : r),
      theme: t && p[t] || p,
      ...g
    });
  });
}
const Qu = {
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
function ue(e, t, o = "Mui") {
  const r = Qu[t];
  return r ? `${o}-${r}` : `${Us.generate(e)}-${t}`;
}
function ce(e, t, o = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ue(e, i, o);
  }), r;
}
function ra(e, t = "") {
  return e.displayName || e.name || t;
}
function _i(e, t, o) {
  const r = ra(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function Ju(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ra(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt.ForwardRef:
          return _i(e, e.render, "ForwardRef");
        case Yt.Memo:
          return _i(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ia(e) {
  const {
    variants: t,
    ...o
  } = e, r = {
    variants: t,
    style: Mt(o),
    isProcessed: !0
  };
  return r.style === o || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = Mt(i.style));
  }), r;
}
const Zu = _o();
function dr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ut(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function ep(e) {
  return e ? (t, o) => o[e] : null;
}
function tp(e, t, o) {
  e.theme = rp(e.theme) ? o : e.theme[t] || e.theme;
}
function fo(e, t, o) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((i) => fo(e, i, o));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let i;
    if (r.isProcessed)
      i = o ? Ut(r.style, o) : r.style;
    else {
      const {
        variants: s,
        ...a
      } = r;
      i = o ? Ut(Mt(a), o) : a;
    }
    return sa(e, r.variants, [i], o);
  }
  return r != null && r.isProcessed ? o ? Ut(Mt(r.style), o) : r.style : o ? Ut(Mt(r), o) : r;
}
function sa(e, t, o = [], r = void 0) {
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
      }), o.push(r ? Ut(Mt(l.style(i)), r) : l.style(i))) : o.push(r ? Ut(Mt(l.style), r) : l.style);
    }
  return o;
}
function aa(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = Zu,
    rootShouldForwardProp: r = dr,
    slotShouldForwardProp: i = dr
  } = e;
  function s(l) {
    tp(l, t, o);
  }
  return (l, c = {}) => {
    Vu(l, (w) => w.filter(($) => $ !== un));
    const {
      name: u,
      slot: p,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = ep(la(p)),
      ...b
    } = c, f = u && u.startsWith("Mui") || p ? "components" : "custom", v = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), O = h || !1;
    let S = dr;
    p === "Root" || p === "root" ? S = r : p ? S = i : ip(l) && (S = void 0);
    const E = ea(l, {
      shouldForwardProp: S,
      label: op(u, p),
      ...b
    }), y = (w) => {
      if (w.__emotion_real === w)
        return w;
      if (typeof w == "function")
        return function(D) {
          return fo(D, w, D.theme.modularCssLayers ? f : void 0);
        };
      if (yt(w)) {
        const $ = ia(w);
        return function(B) {
          return $.variants ? fo(B, $, B.theme.modularCssLayers ? f : void 0) : B.theme.modularCssLayers ? Ut($.style, f) : $.style;
        };
      }
      return w;
    }, T = (...w) => {
      const $ = [], D = w.map(y), B = [];
      if ($.push(s), u && g && B.push(function(P) {
        var L, z;
        const M = (z = (L = P.theme.components) == null ? void 0 : L[u]) == null ? void 0 : z.styleOverrides;
        if (!M)
          return null;
        const N = {};
        for (const k in M)
          N[k] = fo(P, M[k], P.theme.modularCssLayers ? "theme" : void 0);
        return g(P, N);
      }), u && !v && B.push(function(P) {
        var N, L;
        const R = P.theme, M = (L = (N = R == null ? void 0 : R.components) == null ? void 0 : N[u]) == null ? void 0 : L.variants;
        return M ? sa(P, M, [], P.theme.modularCssLayers ? "theme" : void 0) : null;
      }), O || B.push(un), Array.isArray(D[0])) {
        const d = D.shift(), P = new Array($.length).fill(""), R = new Array(B.length).fill("");
        let M;
        M = [...P, ...d, ...R], M.raw = [...P, ...d.raw, ...R], $.unshift(M);
      }
      const F = [...$, ...D, ...B], j = E(...F);
      return l.muiName && (j.muiName = l.muiName), process.env.NODE_ENV !== "production" && (j.displayName = np(u, p, l)), j;
    };
    return E.withConfig && (T.withConfig = E.withConfig), T;
  };
}
function np(e, t, o) {
  return e ? `${e}${K(t || "")}` : `Styled(${Ju(o)})`;
}
function op(e, t) {
  let o;
  return process.env.NODE_ENV !== "production" && e && (o = `${e}-${la(t || "Root")}`), o;
}
function rp(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ip(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function la(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const sp = aa(), ap = sp;
function _n(e, t, o = !1) {
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
              r[s][u] = _n(a[u], l[u], o);
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
function ca(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : _n(t.components[o].defaultProps, r);
}
function lp({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let i = Fo(o);
  return r && (i = i[r] || i), ca({
    theme: i,
    name: t,
    props: e
  });
}
const cp = typeof window < "u" ? x.useLayoutEffect : x.useEffect, lt = cp;
function up(e, t, o, r, i) {
  const [s, a] = x.useState(() => i && o ? o(e).matches : r ? r(e).matches : t);
  return lt(() => {
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
const pp = {
  ...x
}, ua = pp.useSyncExternalStore;
function dp(e, t, o, r, i) {
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
  return ua(c, l, a);
}
function fp(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, i = {}) {
    let s = na();
    s && t && (s = s[t] || s);
    const a = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: l = !1,
      matchMedia: c = a ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: p = !1
    } = ca({
      name: "MuiUseMediaQuery",
      props: i,
      theme: s
    });
    process.env.NODE_ENV !== "production" && typeof r == "function" && s === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let m = typeof r == "function" ? r(s) : r;
    m = m.replace(/^@media( ?)/m, ""), m.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`));
    const g = (ua !== void 0 ? dp : up)(m, l, c, u, p);
    return process.env.NODE_ENV !== "production" && x.useDebugValue({
      query: m,
      match: g
    }), g;
  };
}
function mp(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
function qr(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), mp(e, t, o);
}
function hp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Dt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Dt(hp(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : vt(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (o === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : vt(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: o,
    values: r,
    colorSpace: i
  };
}
const gp = (e) => {
  const t = Dt(e);
  return t.values.slice(0, 3).map((o, r) => t.type.includes("hsl") && r !== 0 ? `${o}%` : o).join(" ");
}, $n = (e, t) => {
  try {
    return gp(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function zo(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function pa(e) {
  e = Dt(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, i = t[2] / 100, s = r * Math.min(i, 1 - i), a = (u, p = (u + o / 30) % 12) => i - s * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), zo({
    type: l,
    values: c
  });
}
function wr(e) {
  e = Dt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Dt(pa(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Fi(e, t) {
  const o = wr(e), r = wr(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function yo(e, t) {
  return e = Dt(e), t = qr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, zo(e);
}
function _t(e, t, o) {
  try {
    return yo(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Vo(e, t) {
  if (e = Dt(e), t = qr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return zo(e);
}
function be(e, t, o) {
  try {
    return Vo(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Wo(e, t) {
  if (e = Dt(e), t = qr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return zo(e);
}
function ve(e, t, o) {
  try {
    return Wo(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function yp(e, t = 0.15) {
  return wr(e) > 0.5 ? Vo(e, t) : Wo(e, t);
}
function oo(e, t, o) {
  try {
    return yp(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
const bp = "exact-prop: ​";
function da(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [bp]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const vp = /* @__PURE__ */ x.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const Uo = () => x.useContext(vp) ?? !1, xp = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (n.node, n.object);
function Tp(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const i = t.components[o];
  return i.defaultProps ? _n(i.defaultProps, r, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? _n(i, r, t.components.mergeClassNameAndStyle) : r;
}
function Ep({
  props: e,
  name: t
}) {
  const o = x.useContext(xp);
  return Tp({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
let zi = 0;
function Op(e) {
  const [t, o] = x.useState(e), r = e || t;
  return x.useEffect(() => {
    t == null && (zi += 1, o(`mui-${zi}`));
  }, [t]), r;
}
const wp = {
  ...x
}, Vi = wp.useId;
function Yn(e) {
  if (Vi !== void 0) {
    const t = Vi();
    return e ?? t;
  }
  return Op(e);
}
const Wi = {
  theme: void 0
};
function Cp(e) {
  let t, o;
  return function(i) {
    let s = t;
    return (s === void 0 || i.theme !== o) && (Wi.theme = i.theme, s = ia(e(Wi)), t = s, o = i.theme), s;
  };
}
function Sp(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Ui = (e, t, o, r = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = o : i && typeof i == "object" && (i[s] = o) : i && typeof i == "object" && (i[s] || (i[s] = r.includes(s) ? [] : {}), i = i[s]);
  });
}, Rp = (e, t, o) => {
  function r(i, s = [], a = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!o || o && !o([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  r(e);
}, Pp = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function fr(e, t) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, s = {}, a = {};
  return Rp(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(l, c))) {
        const p = `--${o ? `${o}-` : ""}${l.join("-")}`, m = Pp(l, c);
        Object.assign(i, {
          [p]: m
        }), Ui(s, l, `var(${p})`, u), Ui(a, l, `var(${p}, ${m})`, u);
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
function $p(e, t = {}) {
  const {
    getSelector: o = O,
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
  } = fr(u, t);
  let g = h;
  const b = {}, {
    [c]: f,
    ...v
  } = a;
  if (Object.entries(v || {}).forEach(([y, T]) => {
    const {
      vars: w,
      css: $,
      varsWithDefaults: D
    } = fr(T, t);
    g = je(g, D), b[y] = {
      css: $,
      vars: w
    };
  }), f) {
    const {
      css: y,
      vars: T,
      varsWithDefaults: w
    } = fr(f, t);
    g = je(g, w), b[c] = {
      css: y,
      vars: T
    };
  }
  function O(y, T) {
    var $, D;
    let w = i;
    if (i === "class" && (w = ".%s"), i === "data" && (w = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (w = `[${i}="%s"]`), y) {
      if (w === "media")
        return e.defaultColorScheme === y ? ":root" : {
          [`@media (prefers-color-scheme: ${((D = ($ = a[y]) == null ? void 0 : $.palette) == null ? void 0 : D.mode) || y})`]: {
            ":root": T
          }
        };
      if (w)
        return e.defaultColorScheme === y ? `:root, ${w.replace("%s", String(y))}` : w.replace("%s", String(y));
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
        y = je(y, T);
      }), y;
    },
    generateStyleSheets: () => {
      var B, F;
      const y = [], T = e.defaultColorScheme || "light";
      function w(j, d) {
        Object.keys(d).length && y.push(typeof j == "string" ? {
          [j]: {
            ...d
          }
        } : j);
      }
      w(o(void 0, {
        ...m
      }), m);
      const {
        [T]: $,
        ...D
      } = b;
      if ($) {
        const {
          css: j
        } = $, d = (F = (B = a[T]) == null ? void 0 : B.palette) == null ? void 0 : F.mode, P = !r && d ? {
          colorScheme: d,
          ...j
        } : {
          ...j
        };
        w(o(T, {
          ...P
        }), P);
      }
      return Object.entries(D).forEach(([j, {
        css: d
      }]) => {
        var M, N;
        const P = (N = (M = a[j]) == null ? void 0 : M.palette) == null ? void 0 : N.mode, R = !r && P ? {
          colorScheme: P,
          ...d
        } : {
          ...d
        };
        w(o(j, {
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
function Ip(e) {
  return function(o) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && o !== "light" && o !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${o}'.`), `@media (prefers-color-scheme: ${o})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${o}"] &` : e === "class" ? `.${o} &` : e === "data" ? `[data-${o}] &` : `${e.replace("%s", o)} &` : "&";
  };
}
function mr(e, t) {
  var o, r, i;
  return /* @__PURE__ */ x.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (r = (o = e.type) == null ? void 0 : o._payload) == null ? void 0 : r.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
const Np = _o(), kp = ap("div", {
  name: "MuiStack",
  slot: "Root"
});
function Mp(e) {
  return lp({
    props: e,
    name: "MuiStack",
    defaultTheme: Np
  });
}
function Ap(e, t) {
  const o = x.Children.toArray(e).filter(Boolean);
  return o.reduce((r, i, s) => (r.push(i), s < o.length - 1 && r.push(/* @__PURE__ */ x.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const Dp = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Bp = ({
  ownerState: e,
  theme: t
}) => {
  let o = {
    display: "flex",
    flexDirection: "column",
    ...at({
      theme: t
    }, cr({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Mo(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = cr({
      values: e.direction,
      base: i
    }), a = cr({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, p) => {
      if (!s[c]) {
        const h = u > 0 ? s[p[u - 1]] : "column";
        s[c] = h;
      }
    }), o = je(o, at({
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
        [`margin${Dp(u ? s[u] : e.direction)}`]: Gt(r, c)
      }
    }));
  }
  return o = Vc(t.breakpoints, o), o;
};
function jp(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = kp,
    useThemeProps: o = Mp,
    componentName: r = "MuiStack"
  } = e, i = () => pe({
    root: ["root"]
  }, (c) => ue(r, c), {}), s = t(Bp), a = /* @__PURE__ */ x.forwardRef(function(c, u) {
    const p = o(c), m = Hr(p), {
      component: h = "div",
      direction: g = "column",
      spacing: b = 0,
      divider: f,
      children: v,
      className: O,
      useFlexGap: S = !1,
      ...E
    } = m, y = {
      direction: g,
      spacing: b,
      useFlexGap: S
    }, T = i();
    return /* @__PURE__ */ C(s, {
      as: h,
      ownerState: y,
      ref: u,
      className: ne(T.root, O),
      ...E,
      children: f ? Ap(v, f) : v
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
const Lp = {
  black: "#000",
  white: "#fff"
}, Fn = Lp, _p = {
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
}, Fp = _p, zp = {
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
}, Zt = zp, Vp = {
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
}, en = Vp, Wp = {
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
}, En = Wp, Up = {
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
}, tn = Up, Hp = {
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
}, nn = Hp, qp = {
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
}, on = qp;
function fa() {
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
      paper: Fn.white,
      default: Fn.white
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
const ma = fa();
function ha() {
  return {
    text: {
      primary: Fn.white,
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
      active: Fn.white,
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
const Cr = ha();
function Hi(e, t, o, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = Wo(e.main, i) : t === "dark" && (e.dark = Vo(e.main, s)));
}
function qi(e, t, o, r, i) {
  const s = i.light || i, a = i.dark || i * 1.5;
  t[o] || (t.hasOwnProperty(r) ? t[o] = t[r] : o === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : o === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Yp(e = "light") {
  return e === "dark" ? {
    main: tn[200],
    light: tn[50],
    dark: tn[400]
  } : {
    main: tn[700],
    light: tn[400],
    dark: tn[800]
  };
}
function Gp(e = "light") {
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
function Kp(e = "light") {
  return e === "dark" ? {
    main: en[500],
    light: en[300],
    dark: en[700]
  } : {
    main: en[700],
    light: en[400],
    dark: en[800]
  };
}
function Xp(e = "light") {
  return e === "dark" ? {
    main: nn[400],
    light: nn[300],
    dark: nn[700]
  } : {
    main: nn[700],
    light: nn[500],
    dark: nn[900]
  };
}
function Qp(e = "light") {
  return e === "dark" ? {
    main: on[400],
    light: on[300],
    dark: on[700]
  } : {
    main: on[800],
    light: on[500],
    dark: on[900]
  };
}
function Jp(e = "light") {
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
function Zp(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Yr(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2,
    colorSpace: i,
    ...s
  } = e, a = e.primary || Yp(t), l = e.secondary || Gp(t), c = e.error || Kp(t), u = e.info || Xp(t), p = e.success || Qp(t), m = e.warning || Jp(t);
  function h(v) {
    if (i)
      return Zp(v);
    const O = Fi(v, Cr.text.primary) >= o ? Cr.text.primary : ma.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = Fi(v, O);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${O} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return O;
  }
  const g = ({
    color: v,
    name: O,
    mainShade: S = 500,
    lightShade: E = 300,
    darkShade: y = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[S] && (v.main = v[S]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : vt(11, O ? ` (${O})` : "", S));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : vt(12, O ? ` (${O})` : "", JSON.stringify(v.main)));
    return i ? (qi(i, v, "light", E, r), qi(i, v, "dark", y, r)) : (Hi(v, "light", E, r), Hi(v, "dark", y, r)), v.contrastText || (v.contrastText = h(v.main)), v;
  };
  let b;
  return t === "light" ? b = fa() : t === "dark" && (b = ha()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), je({
    // A collection of common colors.
    common: {
      ...Fn
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
    grey: Fp,
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
function ed(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, s] = r;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function td(e, t) {
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
function nd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yi = {
  textTransform: "uppercase"
}, Gi = '"Roboto", "Helvetica", "Arial", sans-serif';
function od(e, t) {
  const {
    fontFamily: o = Gi,
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
  const h = r / 14, g = p || ((v) => `${v / c * h}rem`), b = (v, O, S, E, y) => ({
    fontFamily: o,
    fontWeight: v,
    fontSize: g(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === Gi ? {
      letterSpacing: `${nd(E / O)}em`
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
    button: b(a, 14, 1.75, 0.4, Yi),
    caption: b(s, 12, 1.66, 0.4),
    overline: b(s, 12, 2.66, 1, Yi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return je({
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
const rd = 0.2, id = 0.14, sd = 0.12;
function Se(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${rd})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${id})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${sd})`].join(",");
}
const ad = ["none", Se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ld = ad, cd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ud = {
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
function Ki(e) {
  return `${Math.round(e)}ms`;
}
function pd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function dd(e) {
  const t = {
    ...cd,
    ...e.easing
  }, o = {
    ...ud,
    ...e.duration
  };
  return {
    getAutoHeightDuration: pd,
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
      return (Array.isArray(i) ? i : [i]).map((p) => `${p} ${typeof a == "string" ? a : Ki(a)} ${l} ${typeof c == "string" ? c : Ki(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: o
  };
}
const fd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, md = fd;
function hd(e) {
  return yt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ga(e = {}) {
  const t = {
    ...e
  };
  function o(r) {
    const i = Object.entries(r);
    for (let s = 0; s < i.length; s++) {
      const [a, l] = i[s];
      !hd(l) || a.startsWith("unstable_") ? delete r[a] : yt(l) && (r[a] = {
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
function Xi(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const gd = (e) => {
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
function yd(e) {
  Object.assign(e, {
    alpha(t, o) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof o == "string" ? `calc(${o})` : o})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof o == "string" ? `calc(${o})` : o})` : yo(t, gd(o));
    },
    lighten(t, o) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Xi(o)})` : Wo(t, o);
    },
    darken(t, o) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Xi(o)})` : Vo(t, o);
    }
  });
}
function Sr(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : vt(20));
  const m = Yr({
    ...s,
    colorSpace: u
  }), h = _o(e);
  let g = je(h, {
    mixins: td(h.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ld.slice(),
    typography: od(m, l),
    transitions: dd(a),
    zIndex: {
      ...md
    }
  });
  if (g = je(g, p), g = t.reduce((b, f) => je(b, f), g), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (v, O) => {
      let S;
      for (S in v) {
        const E = v[S];
        if (b.includes(S) && Object.keys(E).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const y = ue("", S);
            console.error([`MUI: The \`${O}\` component increases the CSS specificity of the \`${S}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${y}' syntax:`, JSON.stringify({
              root: {
                [`&.${y}`]: E
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[S] = {};
        }
      }
    };
    Object.keys(g.components).forEach((v) => {
      const O = g.components[v].styleOverrides;
      O && v.startsWith("Mui") && f(O, v);
    });
  }
  return g.unstable_sxConfig = {
    ...qn,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, g.unstable_sx = function(f) {
    return un({
      sx: f,
      theme: this
    });
  }, g.toRuntimeSource = ga, yd(g), g;
}
function Rr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const bd = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const o = Rr(t);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function ya(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ba(e) {
  return e === "dark" ? bd : [];
}
function vd(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: r,
    colorSpace: i,
    ...s
  } = e, a = Yr({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...ya(a.mode),
      ...o
    },
    overlays: r || ba(a.mode),
    ...s
  };
}
function xd(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Td = (e) => [...[...Array(25)].map((t, o) => `--${e ? `${e}-` : ""}overlays-${o}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ed = Td, Od = (e) => (t, o) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let s = i;
  if (i === "class" && (s = ".%s"), i === "data" && (s = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Ed(e.cssVarPrefix).forEach((l) => {
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
function wd(e, t) {
  t.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function A(e, t, o) {
  !e[t] && o && (e[t] = o);
}
function In(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : pa(e);
}
function wt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = $n(In(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Cd(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ft = (e) => {
  try {
    return e();
  } catch {
  }
}, Sd = (e = "mui") => Sp(e);
function hr(e, t, o, r, i) {
  if (!o)
    return;
  o = o === !0 ? {} : o;
  const s = i === "dark" ? "dark" : "light";
  if (!r) {
    t[i] = vd({
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
  } = Sr({
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
      ...ya(s),
      ...o == null ? void 0 : o.opacity
    },
    overlays: (o == null ? void 0 : o.overlays) || ba(s)
  }, l;
}
function Rd(e = {}, ...t) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: l = xd,
    colorSchemeSelector: c = o.light && o.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...p
  } = e, m = Object.keys(o)[0], h = r || (o.light && m !== "light" ? "light" : m), g = Sd(s), {
    [h]: b,
    light: f,
    dark: v,
    ...O
  } = o, S = {
    ...O
  };
  let E = b;
  if ((h === "dark" && !("dark" in o) || h === "light" && !("light" in o)) && (E = !0), !E)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : vt(21, h));
  let y;
  a && (y = "oklch");
  const T = hr(y, S, E, p, h);
  f && !S.light && hr(y, S, f, void 0, "light"), v && !S.dark && hr(y, S, v, void 0, "dark");
  let w = {
    defaultColorScheme: h,
    ...T,
    cssVarPrefix: s,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: g,
    colorSchemes: S,
    font: {
      ...ed(T.typography),
      ...T.font
    },
    spacing: Cd(p.spacing)
  };
  Object.keys(w.colorSchemes).forEach((j) => {
    const d = w.colorSchemes[j].palette, P = (M) => {
      const N = M.split("-"), L = N[1], z = N[2];
      return g(M, d[L][z]);
    };
    d.mode === "light" && (A(d.common, "background", "#fff"), A(d.common, "onBackground", "#000")), d.mode === "dark" && (A(d.common, "background", "#000"), A(d.common, "onBackground", "#fff"));
    function R(M, N, L) {
      if (y) {
        let z;
        return M === _t && (z = `transparent ${((1 - L) * 100).toFixed(0)}%`), M === be && (z = `#000 ${(L * 100).toFixed(0)}%`), M === ve && (z = `#fff ${(L * 100).toFixed(0)}%`), `color-mix(in ${y}, ${N}, ${z})`;
      }
      return M(N, L);
    }
    if (wd(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      A(d.Alert, "errorColor", R(be, d.error.light, 0.6)), A(d.Alert, "infoColor", R(be, d.info.light, 0.6)), A(d.Alert, "successColor", R(be, d.success.light, 0.6)), A(d.Alert, "warningColor", R(be, d.warning.light, 0.6)), A(d.Alert, "errorFilledBg", P("palette-error-main")), A(d.Alert, "infoFilledBg", P("palette-info-main")), A(d.Alert, "successFilledBg", P("palette-success-main")), A(d.Alert, "warningFilledBg", P("palette-warning-main")), A(d.Alert, "errorFilledColor", ft(() => d.getContrastText(d.error.main))), A(d.Alert, "infoFilledColor", ft(() => d.getContrastText(d.info.main))), A(d.Alert, "successFilledColor", ft(() => d.getContrastText(d.success.main))), A(d.Alert, "warningFilledColor", ft(() => d.getContrastText(d.warning.main))), A(d.Alert, "errorStandardBg", R(ve, d.error.light, 0.9)), A(d.Alert, "infoStandardBg", R(ve, d.info.light, 0.9)), A(d.Alert, "successStandardBg", R(ve, d.success.light, 0.9)), A(d.Alert, "warningStandardBg", R(ve, d.warning.light, 0.9)), A(d.Alert, "errorIconColor", P("palette-error-main")), A(d.Alert, "infoIconColor", P("palette-info-main")), A(d.Alert, "successIconColor", P("palette-success-main")), A(d.Alert, "warningIconColor", P("palette-warning-main")), A(d.AppBar, "defaultBg", P("palette-grey-100")), A(d.Avatar, "defaultBg", P("palette-grey-400")), A(d.Button, "inheritContainedBg", P("palette-grey-300")), A(d.Button, "inheritContainedHoverBg", P("palette-grey-A100")), A(d.Chip, "defaultBorder", P("palette-grey-400")), A(d.Chip, "defaultAvatarColor", P("palette-grey-700")), A(d.Chip, "defaultIconColor", P("palette-grey-700")), A(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), A(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), A(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), A(d.LinearProgress, "primaryBg", R(ve, d.primary.main, 0.62)), A(d.LinearProgress, "secondaryBg", R(ve, d.secondary.main, 0.62)), A(d.LinearProgress, "errorBg", R(ve, d.error.main, 0.62)), A(d.LinearProgress, "infoBg", R(ve, d.info.main, 0.62)), A(d.LinearProgress, "successBg", R(ve, d.success.main, 0.62)), A(d.LinearProgress, "warningBg", R(ve, d.warning.main, 0.62)), A(d.Skeleton, "bg", y ? R(_t, d.text.primary, 0.11) : `rgba(${P("palette-text-primaryChannel")} / 0.11)`), A(d.Slider, "primaryTrack", R(ve, d.primary.main, 0.62)), A(d.Slider, "secondaryTrack", R(ve, d.secondary.main, 0.62)), A(d.Slider, "errorTrack", R(ve, d.error.main, 0.62)), A(d.Slider, "infoTrack", R(ve, d.info.main, 0.62)), A(d.Slider, "successTrack", R(ve, d.success.main, 0.62)), A(d.Slider, "warningTrack", R(ve, d.warning.main, 0.62));
      const M = y ? R(be, d.background.default, 0.6825) : oo(d.background.default, 0.8);
      A(d.SnackbarContent, "bg", M), A(d.SnackbarContent, "color", ft(() => y ? Cr.text.primary : d.getContrastText(M))), A(d.SpeedDialAction, "fabHoverBg", oo(d.background.paper, 0.15)), A(d.StepConnector, "border", P("palette-grey-400")), A(d.StepContent, "border", P("palette-grey-400")), A(d.Switch, "defaultColor", P("palette-common-white")), A(d.Switch, "defaultDisabledColor", P("palette-grey-100")), A(d.Switch, "primaryDisabledColor", R(ve, d.primary.main, 0.62)), A(d.Switch, "secondaryDisabledColor", R(ve, d.secondary.main, 0.62)), A(d.Switch, "errorDisabledColor", R(ve, d.error.main, 0.62)), A(d.Switch, "infoDisabledColor", R(ve, d.info.main, 0.62)), A(d.Switch, "successDisabledColor", R(ve, d.success.main, 0.62)), A(d.Switch, "warningDisabledColor", R(ve, d.warning.main, 0.62)), A(d.TableCell, "border", R(ve, R(_t, d.divider, 1), 0.88)), A(d.Tooltip, "bg", R(_t, d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      A(d.Alert, "errorColor", R(ve, d.error.light, 0.6)), A(d.Alert, "infoColor", R(ve, d.info.light, 0.6)), A(d.Alert, "successColor", R(ve, d.success.light, 0.6)), A(d.Alert, "warningColor", R(ve, d.warning.light, 0.6)), A(d.Alert, "errorFilledBg", P("palette-error-dark")), A(d.Alert, "infoFilledBg", P("palette-info-dark")), A(d.Alert, "successFilledBg", P("palette-success-dark")), A(d.Alert, "warningFilledBg", P("palette-warning-dark")), A(d.Alert, "errorFilledColor", ft(() => d.getContrastText(d.error.dark))), A(d.Alert, "infoFilledColor", ft(() => d.getContrastText(d.info.dark))), A(d.Alert, "successFilledColor", ft(() => d.getContrastText(d.success.dark))), A(d.Alert, "warningFilledColor", ft(() => d.getContrastText(d.warning.dark))), A(d.Alert, "errorStandardBg", R(be, d.error.light, 0.9)), A(d.Alert, "infoStandardBg", R(be, d.info.light, 0.9)), A(d.Alert, "successStandardBg", R(be, d.success.light, 0.9)), A(d.Alert, "warningStandardBg", R(be, d.warning.light, 0.9)), A(d.Alert, "errorIconColor", P("palette-error-main")), A(d.Alert, "infoIconColor", P("palette-info-main")), A(d.Alert, "successIconColor", P("palette-success-main")), A(d.Alert, "warningIconColor", P("palette-warning-main")), A(d.AppBar, "defaultBg", P("palette-grey-900")), A(d.AppBar, "darkBg", P("palette-background-paper")), A(d.AppBar, "darkColor", P("palette-text-primary")), A(d.Avatar, "defaultBg", P("palette-grey-600")), A(d.Button, "inheritContainedBg", P("palette-grey-800")), A(d.Button, "inheritContainedHoverBg", P("palette-grey-700")), A(d.Chip, "defaultBorder", P("palette-grey-700")), A(d.Chip, "defaultAvatarColor", P("palette-grey-300")), A(d.Chip, "defaultIconColor", P("palette-grey-300")), A(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), A(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), A(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), A(d.LinearProgress, "primaryBg", R(be, d.primary.main, 0.5)), A(d.LinearProgress, "secondaryBg", R(be, d.secondary.main, 0.5)), A(d.LinearProgress, "errorBg", R(be, d.error.main, 0.5)), A(d.LinearProgress, "infoBg", R(be, d.info.main, 0.5)), A(d.LinearProgress, "successBg", R(be, d.success.main, 0.5)), A(d.LinearProgress, "warningBg", R(be, d.warning.main, 0.5)), A(d.Skeleton, "bg", y ? R(_t, d.text.primary, 0.13) : `rgba(${P("palette-text-primaryChannel")} / 0.13)`), A(d.Slider, "primaryTrack", R(be, d.primary.main, 0.5)), A(d.Slider, "secondaryTrack", R(be, d.secondary.main, 0.5)), A(d.Slider, "errorTrack", R(be, d.error.main, 0.5)), A(d.Slider, "infoTrack", R(be, d.info.main, 0.5)), A(d.Slider, "successTrack", R(be, d.success.main, 0.5)), A(d.Slider, "warningTrack", R(be, d.warning.main, 0.5));
      const M = y ? R(ve, d.background.default, 0.985) : oo(d.background.default, 0.98);
      A(d.SnackbarContent, "bg", M), A(d.SnackbarContent, "color", ft(() => y ? ma.text.primary : d.getContrastText(M))), A(d.SpeedDialAction, "fabHoverBg", oo(d.background.paper, 0.15)), A(d.StepConnector, "border", P("palette-grey-600")), A(d.StepContent, "border", P("palette-grey-600")), A(d.Switch, "defaultColor", P("palette-grey-300")), A(d.Switch, "defaultDisabledColor", P("palette-grey-600")), A(d.Switch, "primaryDisabledColor", R(be, d.primary.main, 0.55)), A(d.Switch, "secondaryDisabledColor", R(be, d.secondary.main, 0.55)), A(d.Switch, "errorDisabledColor", R(be, d.error.main, 0.55)), A(d.Switch, "infoDisabledColor", R(be, d.info.main, 0.55)), A(d.Switch, "successDisabledColor", R(be, d.success.main, 0.55)), A(d.Switch, "warningDisabledColor", R(be, d.warning.main, 0.55)), A(d.TableCell, "border", R(be, R(_t, d.divider, 1), 0.68)), A(d.Tooltip, "bg", R(_t, d.grey[700], 0.92));
    }
    wt(d.background, "default"), wt(d.background, "paper"), wt(d.common, "background"), wt(d.common, "onBackground"), wt(d, "divider"), Object.keys(d).forEach((M) => {
      const N = d[M];
      M !== "tonalOffset" && N && typeof N == "object" && (N.main && A(d[M], "mainChannel", $n(In(N.main))), N.light && A(d[M], "lightChannel", $n(In(N.light))), N.dark && A(d[M], "darkChannel", $n(In(N.dark))), N.contrastText && A(d[M], "contrastTextChannel", $n(In(N.contrastText))), M === "text" && (wt(d[M], "primary"), wt(d[M], "secondary")), M === "action" && (N.active && wt(d[M], "active"), N.selected && wt(d[M], "selected")));
    });
  }), w = t.reduce((j, d) => je(j, d), w);
  const $ = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: Od(w),
    enableContrastVars: a
  }, {
    vars: D,
    generateThemeVars: B,
    generateStyleSheets: F
  } = $p(w, $);
  return w.vars = D, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([j, d]) => {
    w[j] = d;
  }), w.generateThemeVars = B, w.generateStyleSheets = F, w.generateSpacing = function() {
    return ta(p.spacing, Mo(this));
  }, w.getColorSchemeSelector = Ip(c), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = l, w.unstable_sxConfig = {
    ...qn,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, w.unstable_sx = function(d) {
    return un({
      sx: d,
      theme: this
    });
  }, w.toRuntimeSource = ga, w;
}
function Qi(e, t, o) {
  e.colorSchemes && o && (e.colorSchemes[t] = {
    ...o !== !0 && o,
    palette: Yr({
      ...o === !0 ? {} : o.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function va(e = {}, ...t) {
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
      return Sr(e, ...t);
    let p = o;
    "palette" in e || u[l] && (u[l] !== !0 ? p = u[l].palette : l === "dark" && (p = {
      mode: "dark"
    }));
    const m = Sr({
      ...e,
      palette: p
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, Qi(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, Qi(m, "light", u.light)), m;
  }
  return !o && !("light" in u) && l === "light" && (u.light = !0), Rd({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Pd = va(), Gr = Pd, Gn = "$$material";
function yn() {
  const e = Fo(Gr);
  return process.env.NODE_ENV !== "production" && x.useDebugValue(e), e[Gn] || e;
}
function xa(e) {
  return /* @__PURE__ */ C(oa, {
    ...e,
    defaultTheme: Gr,
    themeId: Gn
  });
}
process.env.NODE_ENV !== "production" && (xa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function Ta(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const $d = (e) => Ta(e) && e !== "classes", Ye = $d, Id = aa({
  themeId: Gn,
  defaultTheme: Gr,
  rootShouldForwardProp: Ye
}), Y = Id;
function Nd(e) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ C(xa, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...o
        }) : e
      })
    );
  };
}
function kd() {
  return Hr;
}
const Md = Cp, de = Md;
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function fe(e) {
  return Ep(e);
}
function Ad(e) {
  return ue("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Dd = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${K(t)}`, `fontSize${K(o)}`]
  };
  return pe(i, Ad, r);
}, Bd = Y("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${K(o.color)}`], t[`fontSize${K(o.fontSize)}`]];
  }
})(de(({
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
        var v, O;
        return {
          props: {
            color: f
          },
          style: {
            color: (O = (v = (e.vars ?? e).palette) == null ? void 0 : v[f]) == null ? void 0 : O.main
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
})), Kr = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  const O = Dd(f);
  return /* @__PURE__ */ ie(Bd, {
    as: l,
    className: ne(O.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: o,
    ...v,
    ...g,
    ...b && i.props,
    ownerState: f,
    children: [b ? i.props.children : i, m ? /* @__PURE__ */ C("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Kr.propTypes = {
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
Kr.muiName = "SvgIcon";
const Ji = Kr;
function $t(e, t) {
  function o(r, i) {
    return /* @__PURE__ */ C(Ji, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = Ji.muiName, /* @__PURE__ */ x.memo(/* @__PURE__ */ x.forwardRef(o));
}
function Xr(e, t = 166) {
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
function He(e) {
  return e && e.ownerDocument || document;
}
function ct(e) {
  return He(e).defaultView || window;
}
function Zi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Pr(e) {
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
function Rt(e) {
  const t = x.useRef(e);
  return lt(() => {
    t.current = e;
  }), x.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Be(...e) {
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
function jd(e, t) {
  const o = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && o >= 65 && o <= 90 && typeof t == "function";
}
function Ea(e, t) {
  if (!e)
    return t;
  function o(a, l) {
    const c = {};
    return Object.keys(l).forEach((u) => {
      jd(u, l[u]) && typeof a[u] == "function" && (c[u] = (...p) => {
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
const es = $t(/* @__PURE__ */ C("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"
}), "AccountCircleRounded"), Oa = $t([/* @__PURE__ */ C("path", {
  d: "M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
}, "0"), /* @__PURE__ */ C("path", {
  d: "m20.65 11.65-2.79-2.79c-.32-.32-.86-.1-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
}, "1")], "LogoutRounded"), Ld = $t(/* @__PURE__ */ C("path", {
  d: "M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
}), "MenuRounded"), _d = $t(/* @__PURE__ */ C("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
}), "NotificationsOutlined"), Fd = $t(/* @__PURE__ */ C("path", {
  d: "M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "SearchRounded");
function zd(e) {
  return typeof e.main == "string";
}
function Vd(e, t = []) {
  if (!zd(e))
    return !1;
  for (const o of t)
    if (!e.hasOwnProperty(o) || typeof e[o] != "string")
      return !1;
  return !0;
}
function ut(e = []) {
  return ([, t]) => t && Vd(t, e);
}
function Wd(e) {
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
function wa(e, t, o, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = Wd(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function Ca(e, t, o, r) {
  return e[t] === void 0 ? null : wa(e, t, o, r);
}
function $r() {
  return null;
}
Ca.isRequired = wa;
$r.isRequired = $r;
const Ud = process.env.NODE_ENV === "production" ? $r : Ca, Qr = Ud;
function Et(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Hd(e) {
  return ue("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const qd = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return pe(s, Hd, i);
}, Yd = Y("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
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
}))), Sa = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var g;
  const r = fe({
    props: t,
    name: "MuiPaper"
  }), i = yn(), {
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
  }, h = qd(m);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ C(Yd, {
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
          "--Paper-overlay": `linear-gradient(${yo("#fff", Rr(l))}, ${yo("#fff", Rr(l))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Sa.propTypes = {
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
  elevation: Et(Qr, (e) => {
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
const Ho = Sa;
function Gd(e) {
  return ue("MuiAppBar", e);
}
ce("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const Kd = (e) => {
  const {
    color: t,
    position: o,
    classes: r
  } = e, i = {
    root: ["root", `color${K(t)}`, `position${K(o)}`]
  };
  return pe(i, Gd, r);
}, ts = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, Xd = Y(Ho, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`position${K(o.position)}`], t[`color${K(o.color)}`]];
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
  }, ...Object.entries(e.palette).filter(ut(["contrastText"])).map(([t]) => ({
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
        backgroundColor: e.vars ? ts(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? ts(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
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
}))), Ra = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  }, p = Kd(u);
  return /* @__PURE__ */ C(Xd, {
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: ne(p.root, i, l === "fixed" && "mui-fixed"),
    ref: o,
    ...c
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
const Qd = Ra, Jd = $t(/* @__PURE__ */ C("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Zd(e) {
  return ue("MuiAvatar", e);
}
ce("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
function bo(e) {
  return typeof e == "string";
}
function Pa(e, t, o) {
  return e === void 0 || bo(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...o
    }
  };
}
function $a(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function Ia(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function ns(e) {
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
  const a = Ia({
    ...i,
    ...r
  }), l = ns(r), c = ns(i), u = t(a), p = ne(u == null ? void 0 : u.className, o == null ? void 0 : o.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), m = {
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
function xe(e, t) {
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
  } = s, g = p[e] || r, b = $a(m[e], i), {
    props: {
      component: f,
      ...v
    },
    internalRef: O
  } = Na({
    className: o,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: b
  }), S = Be(O, b == null ? void 0 : b.ref, t.ref), E = e === "root" ? f || u : f, y = Pa(g, {
    ...e === "root" && !u && !p[e] && a,
    ...e !== "root" && !p[e] && a,
    ...v,
    ...E && !l && {
      as: E
    },
    ...E && l && {
      component: E
    },
    ref: S
  }, i);
  return [g, y];
}
const ef = (e) => {
  const {
    classes: t,
    variant: o,
    colorDefault: r
  } = e;
  return pe({
    root: ["root", o, r && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Zd, t);
}, tf = Y("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], o.colorDefault && t.colorDefault];
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
}))), nf = Y("img", {
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
}), of = Y(Jd, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function rf({
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
const ka = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    src: h,
    srcSet: g,
    variant: b = "circular",
    ...f
  } = r;
  let v = null;
  const O = {
    ...r,
    component: l,
    variant: b
  }, S = rf({
    ...p,
    ...typeof u.img == "function" ? u.img(O) : u.img,
    src: h,
    srcSet: g
  }), E = h || g, y = E && S !== "error";
  O.colorDefault = !y, delete O.ownerState;
  const T = ef(O), [w, $] = xe("root", {
    ref: o,
    className: ne(T.root, a),
    elementType: tf,
    externalForwardedProps: {
      slots: c,
      slotProps: u,
      component: l,
      ...f
    },
    ownerState: O
  }), [D, B] = xe("img", {
    className: T.img,
    elementType: nf,
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
    ownerState: O
  }), [F, j] = xe("fallback", {
    className: T.fallback,
    elementType: of,
    externalForwardedProps: {
      slots: c,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: O
  });
  return y ? v = /* @__PURE__ */ C(D, {
    ...B
  }) : s || s === 0 ? v = s : E && i ? v = i[0] : v = /* @__PURE__ */ C(F, {
    ...j
  }), /* @__PURE__ */ C(w, {
    ...$,
    children: v
  });
});
process.env.NODE_ENV !== "production" && (ka.propTypes = {
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
const Ir = ka;
function Ma(e) {
  const t = x.useRef({});
  return x.useEffect(() => {
    t.current = e;
  }), t.current;
}
function sf(e) {
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
function af(e) {
  return ue("MuiBadge", e);
}
const lf = ce("MuiBadge", [
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
]), kt = lf, gr = 10, yr = 4, cf = (e) => {
  const {
    color: t,
    anchorOrigin: o,
    invisible: r,
    overlap: i,
    variant: s,
    classes: a = {}
  } = e, l = {
    root: ["root"],
    badge: ["badge", s, r && "invisible", `anchorOrigin${K(o.vertical)}${K(o.horizontal)}`, `anchorOrigin${K(o.vertical)}${K(o.horizontal)}${K(i)}`, `overlap${K(i)}`, t !== "default" && `color${K(t)}`]
  };
  return pe(l, af, a);
}, uf = Y("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), pf = Y("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.badge, t[o.variant], t[`anchorOrigin${K(o.anchorOrigin.vertical)}${K(o.anchorOrigin.horizontal)}${K(o.overlap)}`], o.color !== "default" && t[`color${K(o.color)}`], o.invisible && t.invisible];
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
  minWidth: gr * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: gr * 2,
  borderRadius: gr,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(e.palette).filter(ut(["contrastText"])).map(([t]) => ({
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
      borderRadius: yr,
      height: yr * 2,
      minWidth: yr * 2,
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
      [`&.${kt.invisible}`]: {
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
      [`&.${kt.invisible}`]: {
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
      [`&.${kt.invisible}`]: {
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
      [`&.${kt.invisible}`]: {
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
      [`&.${kt.invisible}`]: {
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
      [`&.${kt.invisible}`]: {
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
      [`&.${kt.invisible}`]: {
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
      [`&.${kt.invisible}`]: {
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
function os(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
  };
}
const Aa = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    color: h = "default",
    invisible: g = !1,
    max: b = 99,
    badgeContent: f,
    slots: v,
    slotProps: O,
    showZero: S = !1,
    variant: E = "standard",
    ...y
  } = r, {
    badgeContent: T,
    invisible: w,
    max: $,
    displayValue: D
  } = sf({
    max: b,
    invisible: g,
    badgeContent: f,
    showZero: S
  }), B = Ma({
    anchorOrigin: os(i),
    color: h,
    overlap: m,
    variant: E,
    badgeContent: f
  }), F = w || T == null && E !== "dot", {
    color: j = h,
    overlap: d = m,
    anchorOrigin: P,
    variant: R = E
  } = F ? B : r, M = os(P), N = R !== "dot" ? D : void 0, L = {
    ...r,
    badgeContent: T,
    invisible: F,
    max: $,
    displayValue: N,
    showZero: S,
    anchorOrigin: M,
    color: j,
    overlap: d,
    variant: R
  }, z = cf(L), k = {
    slots: {
      root: (v == null ? void 0 : v.root) ?? c.Root,
      badge: (v == null ? void 0 : v.badge) ?? c.Badge
    },
    slotProps: {
      root: (O == null ? void 0 : O.root) ?? u.root,
      badge: (O == null ? void 0 : O.badge) ?? u.badge
    }
  }, [I, V] = xe("root", {
    elementType: uf,
    externalForwardedProps: {
      ...k,
      ...y
    },
    ownerState: L,
    className: ne(z.root, s),
    ref: o,
    additionalProps: {
      as: l
    }
  }), [q, U] = xe("badge", {
    elementType: pf,
    externalForwardedProps: k,
    ownerState: L,
    className: z.badge
  });
  return /* @__PURE__ */ ie(I, {
    ...V,
    children: [p, /* @__PURE__ */ C(q, {
      ...U,
      children: N
    })]
  });
});
process.env.NODE_ENV !== "production" && (Aa.propTypes = {
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
const Da = Aa, df = ce("MuiBox", ["root"]), ff = df, mf = va(), Ba = Xu({
  themeId: Gn,
  defaultTheme: mf,
  defaultClassName: ff.root,
  generateClassName: Us.generate
});
process.env.NODE_ENV !== "production" && (Ba.propTypes = {
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
const an = Ba;
function hf(e) {
  return ue("MuiDivider", e);
}
const gf = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), rs = gf, yf = (e) => {
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
  return pe({
    root: ["root", t && "absolute", c, s && "light", a === "vertical" && "vertical", i && "flexItem", o && "withChildren", o && a === "vertical" && "withChildrenVertical", l === "right" && a !== "vertical" && "textAlignRight", l === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, hf, r);
}, bf = Y("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.absolute && t.absolute, t[o.variant], o.light && t.light, o.orientation === "vertical" && t.vertical, o.flexItem && t.flexItem, o.children && t.withChildren, o.children && o.orientation === "vertical" && t.withChildrenVertical, o.textAlign === "right" && o.orientation !== "vertical" && t.textAlignRight, o.textAlign === "left" && o.orientation !== "vertical" && t.textAlignLeft];
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
}))), vf = Y("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.wrapper, o.orientation === "vertical" && t.wrapperVertical];
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
}))), vo = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  }, v = yf(f);
  return /* @__PURE__ */ C(bf, {
    as: c,
    className: ne(v.root, a),
    role: m,
    ref: o,
    ownerState: f,
    "aria-orientation": m === "separator" && (c !== "hr" || l === "vertical") ? l : void 0,
    ...b,
    children: s ? /* @__PURE__ */ C(vf, {
      className: v.wrapper,
      ownerState: f,
      children: s
    }) : null
  });
});
vo && (vo.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (vo.propTypes = {
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
const At = vo, xf = n.oneOfType([n.func, n.object]), pt = xf;
function Tf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ef(e, t, o, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Tf(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Jr = Et(n.elementType, Ef);
function xo(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const is = {};
function ja(e, t) {
  const o = x.useRef(is);
  return o.current === is && (o.current = e(t)), o;
}
class To {
  constructor() {
    xn(this, "mountEffect", () => {
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
    return new To();
  }
  static use() {
    const t = ja(To.create).current, [o, r] = x.useState(!1);
    return t.shouldMount = o, t.setShouldMount = r, x.useEffect(t.mountEffect, [o]), t;
  }
  mount() {
    return this.mounted || (this.mounted = wf(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Of() {
  return To.use();
}
function wf() {
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
function La(e, t) {
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
function kr(e, t) {
  return kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, kr(e, t);
}
function _a(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, kr(e, t);
}
const ss = {
  disabled: !1
};
var Cf = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
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
const Eo = St.createContext(null);
var Sf = function(t) {
  return t.scrollTop;
}, Nn = "unmounted", Vt = "exited", Wt = "entering", sn = "entered", Mr = "exiting", It = /* @__PURE__ */ function(e) {
  _a(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = Vt, s.appearStatus = Wt) : c = sn : r.unmountOnExit || r.mountOnEnter ? c = Nn : c = Vt, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Nn ? {
      status: Vt
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Wt && a !== sn && (s = Wt) : (a === Wt || a === sn) && (s = Mr);
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
      if (this.cancelNextCallback(), s === Wt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : to.findDOMNode(this);
          a && Sf(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Vt && this.setState({
        status: Nn
      });
  }, o.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [to.findDOMNode(this), l], u = c[0], p = c[1], m = this.getTimeouts(), h = l ? m.appear : m.enter;
    if (!i && !a || ss.disabled) {
      this.safeSetState({
        status: sn
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
          status: sn
        }, function() {
          s.props.onEntered(u, p);
        });
      });
    });
  }, o.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : to.findDOMNode(this);
    if (!s || ss.disabled) {
      this.safeSetState({
        status: Vt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Mr
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Vt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : to.findDOMNode(this), l = i == null && !this.props.addEndListener;
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
    var l = La(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ St.createElement(Eo.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : St.cloneElement(St.Children.only(a), l))
    );
  }, t;
}(St.Component);
It.contextType = Eo;
It.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var o = Cf;
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
function rn() {
}
It.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: rn,
  onEntering: rn,
  onEntered: rn,
  onExit: rn,
  onExiting: rn,
  onExited: rn
};
It.UNMOUNTED = Nn;
It.EXITED = Vt;
It.ENTERING = Wt;
It.ENTERED = sn;
It.EXITING = Mr;
const Zr = It;
function Rf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ei(e, t) {
  var o = function(s) {
    return t && uo(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && mc.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = o(i);
  }), r;
}
function Pf(e, t) {
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
function Ht(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function $f(e, t) {
  return ei(e.children, function(o) {
    return po(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: Ht(o, "appear", e),
      enter: Ht(o, "enter", e),
      exit: Ht(o, "exit", e)
    });
  });
}
function If(e, t, o) {
  var r = ei(e.children), i = Pf(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (uo(a)) {
      var l = s in t, c = s in r, u = t[s], p = uo(u) && !u.props.in;
      c && (!l || p) ? i[s] = po(a, {
        onExited: o.bind(null, a),
        in: !0,
        exit: Ht(a, "exit", e),
        enter: Ht(a, "enter", e)
      }) : !c && l && !p ? i[s] = po(a, {
        in: !1
      }) : c && l && uo(u) && (i[s] = po(a, {
        onExited: o.bind(null, a),
        in: u.props.in,
        exit: Ht(a, "exit", e),
        enter: Ht(a, "enter", e)
      }));
    }
  }), i;
}
var Nf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, kf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ti = /* @__PURE__ */ function(e) {
  _a(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(Rf(s));
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
      children: c ? $f(i, l) : If(i, a, l),
      firstRender: !1
    };
  }, o.handleExited = function(i, s) {
    var a = ei(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = Nr({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = La(i, ["component", "childFactory"]), c = this.state.contextValue, u = Nf(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ St.createElement(Eo.Provider, {
      value: c
    }, u) : /* @__PURE__ */ St.createElement(Eo.Provider, {
      value: c
    }, /* @__PURE__ */ St.createElement(s, l, u));
  }, t;
}(St.Component);
ti.propTypes = process.env.NODE_ENV !== "production" ? {
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
ti.defaultProps = kf;
const Mf = ti, Af = [];
function Df(e) {
  x.useEffect(e, Af);
}
class qo {
  constructor() {
    xn(this, "currentId", null);
    xn(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    xn(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new qo();
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
function ln() {
  const e = ja(qo.create).current;
  return Df(e.disposeEffect), e;
}
function Fa(e) {
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
  }, [c, l, u]), /* @__PURE__ */ C("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ C("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Fa.propTypes = {
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
const Bf = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Xe = Bf, Ar = 550, jf = 80, Lf = Un`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, _f = Un`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Ff = Un`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, zf = Y("span", {
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
}), Vf = Y(Fa, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Xe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Lf};
    animation-duration: ${Ar}ms;
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
    animation-name: ${_f};
    animation-duration: ${Ar}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Xe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ff};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, za = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = fe({
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
  const h = x.useRef(!1), g = ln(), b = x.useRef(null), f = x.useRef(null), v = x.useCallback((y) => {
    const {
      pulsate: T,
      rippleX: w,
      rippleY: $,
      rippleSize: D,
      cb: B
    } = y;
    u((F) => [...F, /* @__PURE__ */ C(Vf, {
      classes: {
        ripple: ne(s.ripple, Xe.ripple),
        rippleVisible: ne(s.rippleVisible, Xe.rippleVisible),
        ripplePulsate: ne(s.ripplePulsate, Xe.ripplePulsate),
        child: ne(s.child, Xe.child),
        childLeaving: ne(s.childLeaving, Xe.childLeaving),
        childPulsate: ne(s.childPulsate, Xe.childPulsate)
      },
      timeout: Ar,
      pulsate: T,
      rippleX: w,
      rippleY: $,
      rippleSize: D
    }, p.current)]), p.current += 1, m.current = B;
  }, [s]), O = x.useCallback((y = {}, T = {}, w = () => {
  }) => {
    const {
      pulsate: $ = !1,
      center: D = i || T.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = T;
    if ((y == null ? void 0 : y.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (h.current = !0);
    const F = B ? null : f.current, j = F ? F.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let d, P, R;
    if (D || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches)
      d = Math.round(j.width / 2), P = Math.round(j.height / 2);
    else {
      const {
        clientX: M,
        clientY: N
      } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      d = Math.round(M - j.left), P = Math.round(N - j.top);
    }
    if (D)
      R = Math.sqrt((2 * j.width ** 2 + j.height ** 2) / 3), R % 2 === 0 && (R += 1);
    else {
      const M = Math.max(Math.abs((F ? F.clientWidth : 0) - d), d) * 2 + 2, N = Math.max(Math.abs((F ? F.clientHeight : 0) - P), P) * 2 + 2;
      R = Math.sqrt(M ** 2 + N ** 2);
    }
    y != null && y.touches ? b.current === null && (b.current = () => {
      v({
        pulsate: $,
        rippleX: d,
        rippleY: P,
        rippleSize: R,
        cb: w
      });
    }, g.start(jf, () => {
      b.current && (b.current(), b.current = null);
    })) : v({
      pulsate: $,
      rippleX: d,
      rippleY: P,
      rippleSize: R,
      cb: w
    });
  }, [i, v, g]), S = x.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), E = x.useCallback((y, T) => {
    if (g.clear(), (y == null ? void 0 : y.type) === "touchend" && b.current) {
      b.current(), b.current = null, g.start(0, () => {
        E(y, T);
      });
      return;
    }
    b.current = null, u((w) => w.length > 0 ? w.slice(1) : w), m.current = T;
  }, [g]);
  return x.useImperativeHandle(o, () => ({
    pulsate: S,
    start: O,
    stop: E
  }), [S, O, E]), /* @__PURE__ */ C(zf, {
    className: ne(Xe.root, s.root, a),
    ref: f,
    ...l,
    children: /* @__PURE__ */ C(Mf, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (za.propTypes = {
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
const Wf = za;
function Uf(e) {
  return ue("MuiButtonBase", e);
}
const Hf = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), qf = Hf, Yf = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: i
  } = e, a = pe({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, Uf, i);
  return o && r && (a.root += ` ${r}`), a;
}, Gf = Y("button", {
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
  [`&.${qf.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Va = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    focusRipple: h = !1,
    focusVisibleClassName: g,
    LinkComponent: b = "a",
    onBlur: f,
    onClick: v,
    onContextMenu: O,
    onDragLeave: S,
    onFocus: E,
    onFocusVisible: y,
    onKeyDown: T,
    onKeyUp: w,
    onMouseDown: $,
    onMouseLeave: D,
    onMouseUp: B,
    onTouchEnd: F,
    onTouchMove: j,
    onTouchStart: d,
    tabIndex: P = 0,
    TouchRippleProps: R,
    touchRippleRef: M,
    type: N,
    ...L
  } = r, z = x.useRef(null), k = Of(), I = Be(k.ref, M), [V, q] = x.useState(!1);
  u && V && q(!1), x.useImperativeHandle(i, () => ({
    focusVisible: () => {
      q(!0), z.current.focus();
    }
  }), []);
  const U = k.shouldMount && !p && !u;
  x.useEffect(() => {
    V && h && !p && k.pulsate();
  }, [p, h, V, k]);
  const H = Ct(k, "start", $, m), G = Ct(k, "stop", O, m), J = Ct(k, "stop", S, m), X = Ct(k, "stop", B, m), Z = Ct(k, "stop", (te) => {
    V && te.preventDefault(), D && D(te);
  }, m), Q = Ct(k, "start", d, m), W = Ct(k, "stop", F, m), ee = Ct(k, "stop", j, m), _ = Ct(k, "stop", (te) => {
    xo(te.target) || q(!1), f && f(te);
  }, !1), ae = Rt((te) => {
    z.current || (z.current = te.currentTarget), xo(te.target) && (q(!0), y && y(te)), E && E(te);
  }), oe = () => {
    const te = z.current;
    return c && c !== "button" && !(te.tagName === "A" && te.href);
  }, me = Rt((te) => {
    h && !te.repeat && V && te.key === " " && k.stop(te, () => {
      k.start(te);
    }), te.target === te.currentTarget && oe() && te.key === " " && te.preventDefault(), T && T(te), te.target === te.currentTarget && oe() && te.key === "Enter" && !u && (te.preventDefault(), v && v(te));
  }), ke = Rt((te) => {
    h && te.key === " " && V && !te.defaultPrevented && k.stop(te, () => {
      k.pulsate(te);
    }), w && w(te), v && te.target === te.currentTarget && oe() && te.key === " " && !te.defaultPrevented && v(te);
  });
  let Re = c;
  Re === "button" && (L.href || L.to) && (Re = b);
  const Ce = {};
  Re === "button" ? (Ce.type = N === void 0 ? "button" : N, Ce.disabled = u) : (!L.href && !L.to && (Ce.role = "button"), u && (Ce["aria-disabled"] = u));
  const Ae = Be(o, z), we = {
    ...r,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: p,
    disableTouchRipple: m,
    focusRipple: h,
    tabIndex: P,
    focusVisible: V
  }, Oe = Yf(we);
  return /* @__PURE__ */ ie(Gf, {
    as: Re,
    className: ne(Oe.root, l),
    ownerState: we,
    onBlur: _,
    onClick: v,
    onContextMenu: G,
    onFocus: ae,
    onKeyDown: me,
    onKeyUp: ke,
    onMouseDown: H,
    onMouseLeave: Z,
    onMouseUp: X,
    onDragLeave: J,
    onTouchEnd: W,
    onTouchMove: ee,
    onTouchStart: Q,
    ref: Ae,
    tabIndex: u ? -1 : P,
    type: N,
    ...Ce,
    ...L,
    children: [a, U ? /* @__PURE__ */ C(Wf, {
      ref: I,
      center: s,
      ...R
    }) : null]
  });
});
function Ct(e, t, o, r = !1) {
  return Rt((i) => (o && o(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (Va.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: pt,
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
  component: Jr,
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
const ni = Va;
function Kf(e) {
  return ue("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const st = 44, Dr = Un`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Br = Un`
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
`, Xf = typeof Dr != "string" ? Ws`
        animation: ${Dr} 1.4s linear infinite;
      ` : null, Qf = typeof Br != "string" ? Ws`
        animation: ${Br} 1.4s ease-in-out infinite;
      ` : null, Jf = (e) => {
  const {
    classes: t,
    variant: o,
    color: r,
    disableShrink: i
  } = e, s = {
    root: ["root", o, `color${K(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${K(o)}`, i && "circleDisableShrink"]
  };
  return pe(s, Kf, t);
}, Zf = Y("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`color${K(o.color)}`]];
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
    style: Xf || {
      animation: `${Dr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(ut()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), em = Y("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), tm = Y("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.circle, t[`circle${K(o.variant)}`], o.disableShrink && t.circleDisableShrink];
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
    style: Qf || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Br} 1.4s ease-in-out infinite`
    }
  }]
}))), nm = Y("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(de(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Wa = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  }, f = Jf(b), v = {}, O = {}, S = {};
  if (h === "determinate") {
    const E = 2 * Math.PI * ((st - p) / 2);
    v.strokeDasharray = E.toFixed(3), S["aria-valuenow"] = Math.round(m), v.strokeDashoffset = `${((100 - m) / 100 * E).toFixed(3)}px`, O.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ C(Zf, {
    className: ne(f.root, i),
    style: {
      width: c,
      height: c,
      ...O,
      ...u
    },
    ownerState: b,
    ref: o,
    role: "progressbar",
    ...S,
    ...g,
    children: /* @__PURE__ */ ie(em, {
      className: f.svg,
      ownerState: b,
      viewBox: `${st / 2} ${st / 2} ${st} ${st}`,
      children: [l ? /* @__PURE__ */ C(nm, {
        className: f.track,
        ownerState: b,
        cx: st,
        cy: st,
        r: (st - p) / 2,
        fill: "none",
        strokeWidth: p,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ C(tm, {
        className: f.circle,
        style: v,
        ownerState: b,
        cx: st,
        cy: st,
        r: (st - p) / 2,
        fill: "none",
        strokeWidth: p
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Wa.propTypes = {
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
  disableShrink: Et(n.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
const Ua = Wa;
function om(e) {
  return ue("MuiIconButton", e);
}
const rm = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), as = rm, im = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: i,
    size: s,
    loading: a
  } = e, l = {
    root: ["root", a && "loading", o && "disabled", r !== "default" && `color${K(r)}`, i && `edge${K(i)}`, `size${K(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return pe(l, om, t);
}, sm = Y(ni, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.loading && t.loading, o.color !== "default" && t[`color${K(o.color)}`], o.edge && t[`edge${K(o.edge)}`], t[`size${K(o.size)}`]];
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
  }, ...Object.entries(e.palette).filter(ut()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(ut()).map(([t]) => ({
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
  [`&.${as.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${as.loading}`]: {
    color: "transparent"
  }
}))), am = Y("span", {
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
})), Ha = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    loading: h = null,
    loadingIndicator: g,
    ...b
  } = r, f = Yn(m), v = g ?? /* @__PURE__ */ C(Ua, {
    "aria-labelledby": f,
    color: "inherit",
    size: 16
  }), O = {
    ...r,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    loading: h,
    loadingIndicator: v,
    size: p
  }, S = im(O);
  return /* @__PURE__ */ ie(sm, {
    id: h ? f : m,
    className: ne(S.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c || h,
    ref: o,
    ...b,
    ownerState: O,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ C("span", {
      className: S.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ C(am, {
        className: S.loadingIndicator,
        ownerState: O,
        children: h && v
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (Ha.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Et(n.node, (e) => x.Children.toArray(e.children).some((o) => /* @__PURE__ */ x.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const zn = Ha;
function lm(e) {
  return ue("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const cm = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, um = kd(), pm = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${K(t)}`, o && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return pe(l, lm, a);
}, dm = Y("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${K(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
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
    }, ...Object.entries(e.typography).filter(([o, r]) => o !== "inherit" && r && typeof r == "object").map(([o, r]) => ({
      props: {
        variant: o
      },
      style: r
    })), ...Object.entries(e.palette).filter(ut()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        color: (e.vars || e).palette[o].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, o]) => typeof o == "string").map(([o]) => ({
      props: {
        color: `text${K(o)}`
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
})), ls = {
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
}, qa = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const {
    color: r,
    ...i
  } = fe({
    props: t,
    name: "MuiTypography"
  }), s = !cm[r], a = um({
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
    variantMapping: b = ls,
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
  }, O = u || (h ? "p" : b[g] || ls[g]) || "span", S = pm(v);
  return /* @__PURE__ */ C(dm, {
    as: O,
    ref: o,
    className: ne(S.root, c),
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
process.env.NODE_ENV !== "production" && (qa.propTypes = {
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
const gt = qa, Ya = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ya.displayName = "FormControlContext");
const Yo = Ya;
function Xt() {
  return x.useContext(Yo);
}
function fm(e) {
  return ue("MuiInputAdornment", e);
}
const mm = ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), cs = mm;
var us;
const hm = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, t[`position${K(o.position)}`], o.disablePointerEvents === !0 && t.disablePointerEvents, t[o.variant]];
}, gm = (e) => {
  const {
    classes: t,
    disablePointerEvents: o,
    hiddenLabel: r,
    position: i,
    size: s,
    variant: a
  } = e, l = {
    root: ["root", o && "disablePointerEvents", i && `position${K(i)}`, a, r && "hiddenLabel", s && `size${K(s)}`]
  };
  return pe(l, fm, t);
}, ym = Y("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: hm
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
      [`&.${cs.positionStart}&:not(.${cs.hiddenLabel})`]: {
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
}))), Ga = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  } = r, h = Xt() || {};
  let g = p;
  p && h.variant && process.env.NODE_ENV !== "production" && p === h.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), h && !g && (g = h.variant);
  const b = {
    ...r,
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: l,
    position: u,
    variant: g
  }, f = gm(b);
  return /* @__PURE__ */ C(Yo.Provider, {
    value: null,
    children: /* @__PURE__ */ C(ym, {
      as: a,
      ownerState: b,
      className: ne(f.root, s),
      ref: o,
      ...m,
      children: typeof i == "string" && !c ? /* @__PURE__ */ C(gt, {
        color: "textSecondary",
        children: i
      }) : /* @__PURE__ */ ie(x.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          us || (us = /* @__PURE__ */ C("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, i]
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Ga.propTypes = {
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
const bm = Ga;
function xt(e, t, o, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
function Ka(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : $a(o, r), {
    props: l,
    internalRef: c
  } = Na({
    ...s,
    externalSlotProps: a
  }), u = Be(c, a == null ? void 0 : a.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return Pa(t, {
    ...l,
    ref: u
  }, r);
}
const Xa = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (Xa.displayName = "ListContext");
const jr = Xa;
function vm(e) {
  return ue("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const xm = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: i
  } = e;
  return pe({
    root: ["root", !o && "padding", r && "dense", i && "subheader"]
  }, vm, t);
}, Tm = Y("ul", {
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
}), Qa = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  } = r, m = x.useMemo(() => ({
    dense: l
  }), [l]), h = {
    ...r,
    component: a,
    dense: l,
    disablePadding: c
  }, g = xm(h);
  return /* @__PURE__ */ C(jr.Provider, {
    value: m,
    children: /* @__PURE__ */ ie(Tm, {
      as: a,
      className: ne(g.root, s),
      ref: o,
      ownerState: h,
      ...p,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (Qa.propTypes = {
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
const Em = Qa;
function Ja(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function br(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function ps(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function Za(e, t) {
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
    if (!l.hasAttribute("tabindex") || !Za(l, s) || c)
      l = i(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const el = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  lt(() => {
    i && g.current.focus();
  }, [i]), x.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (E, {
      direction: y
    }) => {
      const T = !g.current.style.width;
      if (E.clientHeight < g.current.clientHeight && T) {
        const w = `${Ja(ct(E))}px`;
        g.current.style[y === "rtl" ? "paddingLeft" : "paddingRight"] = w, g.current.style.width = `calc(100% + ${w})`;
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
    const $ = He(y).activeElement;
    if (T === "ArrowDown")
      E.preventDefault(), On(y, $, u, c, br);
    else if (T === "ArrowUp")
      E.preventDefault(), On(y, $, u, c, ps);
    else if (T === "Home")
      E.preventDefault(), On(y, null, u, c, br);
    else if (T === "End")
      E.preventDefault(), On(y, null, u, c, ps);
    else if (T.length === 1) {
      const D = b.current, B = T.toLowerCase(), F = performance.now();
      D.keys.length > 0 && (F - D.lastTime > 500 ? (D.keys = [], D.repeating = !0, D.previousKeyMatched = !0) : D.repeating && B !== D.keys[0] && (D.repeating = !1)), D.lastTime = F, D.keys.push(B);
      const j = $ && !D.repeating && Za($, D);
      D.previousKeyMatched && (j || On(y, $, !1, c, br, D)) ? E.preventDefault() : D.previousKeyMatched = !1;
    }
    p && p(E);
  }, v = Be(g, o);
  let O = -1;
  x.Children.forEach(a, (E, y) => {
    if (!/* @__PURE__ */ x.isValidElement(E)) {
      O === y && (O += 1, O >= a.length && (O = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Yt.isFragment(E) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), E.props.disabled || (m === "selectedMenu" && E.props.selected || O === -1) && (O = y), O === y && (E.props.disabled || E.props.muiSkipListHighlight || E.type.muiSkipListHighlight) && (O += 1, O >= a.length && (O = -1));
  });
  const S = x.Children.map(a, (E, y) => {
    if (y === O) {
      const T = {};
      return s && (T.autoFocus = !0), E.props.tabIndex === void 0 && m === "selectedMenu" && (T.tabIndex = 0), /* @__PURE__ */ x.cloneElement(E, T);
    }
    return E;
  });
  return /* @__PURE__ */ C(Em, {
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: f,
    tabIndex: i ? 0 : -1,
    ...h,
    children: S
  });
});
process.env.NODE_ENV !== "production" && (el.propTypes = {
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
const Om = el;
function wm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function tl(e, t, o, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !wm(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const nl = Et(n.element, tl);
nl.isRequired = Et(n.element.isRequired, tl);
const bn = nl;
function Qt(e) {
  var t;
  return parseInt(x.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const oi = (e) => e.scrollTop;
function pn(e, t) {
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
const Cm = {
  entering: {
    opacity: 1,
    transform: Lr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, vr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Oo = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    TransitionComponent: v = Zr,
    ...O
  } = t, S = ln(), E = x.useRef(), y = yn(), T = x.useRef(null), w = Be(T, Qt(s), o), $ = (M) => (N) => {
    if (M) {
      const L = T.current;
      N === void 0 ? M(L) : M(L, N);
    }
  }, D = $(p), B = $((M, N) => {
    oi(M);
    const {
      duration: L,
      delay: z,
      easing: k
    } = pn({
      style: b,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let I;
    f === "auto" ? (I = y.transitions.getAutoHeightDuration(M.clientHeight), E.current = I) : I = L, M.style.transition = [y.transitions.create("opacity", {
      duration: I,
      delay: z
    }), y.transitions.create("transform", {
      duration: vr ? I : I * 0.666,
      delay: z,
      easing: k
    })].join(","), c && c(M, N);
  }), F = $(u), j = $(g), d = $((M) => {
    const {
      duration: N,
      delay: L,
      easing: z
    } = pn({
      style: b,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let k;
    f === "auto" ? (k = y.transitions.getAutoHeightDuration(M.clientHeight), E.current = k) : k = N, M.style.transition = [y.transitions.create("opacity", {
      duration: k,
      delay: L
    }), y.transitions.create("transform", {
      duration: vr ? k : k * 0.666,
      delay: vr ? L : L || k * 0.333,
      easing: z
    })].join(","), M.style.opacity = 0, M.style.transform = Lr(0.75), m && m(M);
  }), P = $(h);
  return /* @__PURE__ */ C(v, {
    appear: i,
    in: l,
    nodeRef: T,
    onEnter: B,
    onEntered: F,
    onEntering: D,
    onExit: d,
    onExited: P,
    onExiting: j,
    addEndListener: (M) => {
      f === "auto" && S.start(E.current || 0, M), r && r(T.current, M);
    },
    timeout: f === "auto" ? null : f,
    ...O,
    children: (M, {
      ownerState: N,
      ...L
    }) => /* @__PURE__ */ x.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Lr(0.75),
        visibility: M === "exited" && !l ? "hidden" : void 0,
        ...Cm[M],
        ...b,
        ...s.props.style
      },
      ref: w,
      ...L
    })
  });
});
process.env.NODE_ENV !== "production" && (Oo.propTypes = {
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
  children: bn.isRequired,
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
Oo && (Oo.muiSupportAuto = !0);
const ol = Oo;
function Sm(e) {
  const t = He(e);
  return t.body === e ? ct(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function An(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ds(e) {
  return parseInt(ct(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Rm(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function fs(e, t, o, r, i) {
  const s = [t, o, ...r];
  [].forEach.call(e.children, (a) => {
    const l = !s.includes(a), c = !Rm(a);
    l && c && An(a, i);
  });
}
function xr(e, t) {
  let o = -1;
  return e.some((r, i) => t(r) ? (o = i, !0) : !1), o;
}
function Pm(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Sm(r)) {
      const a = Ja(ct(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${ds(r) + a}px`;
      const l = He(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${ds(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = He(r).body;
    else {
      const a = r.parentElement, l = ct(r);
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
function $m(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class Im {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && An(t.modalRef, !1);
    const i = $m(o);
    fs(o, t.mount, t.modalRef, i, !0);
    const s = xr(this.containers, (a) => a.container === o);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, o) {
    const r = xr(this.containers, (s) => s.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Pm(i, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = xr(this.containers, (a) => a.modals.includes(t)), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && An(t.modalRef, o), fs(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && An(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Nm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function km(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Mm(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function Am(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Mm(e));
}
function Dm(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(Nm)).forEach((r, i) => {
    const s = km(r);
    s === -1 || !Am(r) || (s === 0 ? t.push(r) : o.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), o.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Bm() {
  return !0;
}
function wo(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = Dm,
    isEnabled: a = Bm,
    open: l
  } = e, c = x.useRef(!1), u = x.useRef(null), p = x.useRef(null), m = x.useRef(null), h = x.useRef(null), g = x.useRef(!1), b = x.useRef(null), f = Be(Qt(t), b), v = x.useRef(null);
  x.useEffect(() => {
    !l || !b.current || (g.current = !o);
  }, [o, l]), x.useEffect(() => {
    if (!l || !b.current)
      return;
    const E = He(b.current);
    return b.current.contains(E.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), g.current && b.current.focus()), () => {
      i || (m.current && m.current.focus && (c.current = !0, m.current.focus()), m.current = null);
    };
  }, [l]), x.useEffect(() => {
    if (!l || !b.current)
      return;
    const E = He(b.current), y = ($) => {
      v.current = $, !(r || !a() || $.key !== "Tab") && E.activeElement === b.current && $.shiftKey && (c.current = !0, p.current && p.current.focus());
    }, T = () => {
      var B, F;
      const $ = b.current;
      if ($ === null)
        return;
      if (!E.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if ($.contains(E.activeElement) || r && E.activeElement !== u.current && E.activeElement !== p.current)
        return;
      if (E.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let D = [];
      if ((E.activeElement === u.current || E.activeElement === p.current) && (D = s(b.current)), D.length > 0) {
        const j = !!((B = v.current) != null && B.shiftKey && ((F = v.current) == null ? void 0 : F.key) === "Tab"), d = D[0], P = D[D.length - 1];
        typeof d != "string" && typeof P != "string" && (j ? P.focus() : d.focus());
      } else
        $.focus();
    };
    E.addEventListener("focusin", T), E.addEventListener("keydown", y, !0);
    const w = setInterval(() => {
      E.activeElement && E.activeElement.tagName === "BODY" && T();
    }, 50);
    return () => {
      clearInterval(w), E.removeEventListener("focusin", T), E.removeEventListener("keydown", y, !0);
    };
  }, [o, r, i, a, l, s]);
  const O = (E) => {
    m.current === null && (m.current = E.relatedTarget), g.current = !0, h.current = E.target;
    const y = t.props.onFocus;
    y && y(E);
  }, S = (E) => {
    m.current === null && (m.current = E.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ ie(x.Fragment, {
    children: [/* @__PURE__ */ C("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ x.cloneElement(t, {
      ref: f,
      onFocus: O
    }), /* @__PURE__ */ C("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (wo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: bn,
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
process.env.NODE_ENV !== "production" && (wo["propTypes"] = da(wo.propTypes));
function jm(e) {
  return typeof e == "function" ? e() : e;
}
const Co = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = x.useState(null), c = Be(/* @__PURE__ */ x.isValidElement(r) ? Qt(r) : null, o);
  if (lt(() => {
    s || l(jm(i) || document.body);
  }, [i, s]), lt(() => {
    if (a && !s)
      return Zi(o, a), () => {
        Zi(o, null);
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
  return a && /* @__PURE__ */ bc.createPortal(r, a);
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
  container: n.oneOfType([xt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (Co["propTypes"] = da(Co.propTypes));
const rl = Co, Lm = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, il = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = yn(), i = {
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
    timeout: O = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = Zr,
    ...E
  } = t, y = x.useRef(null), T = Be(y, Qt(l), o), w = (R) => (M) => {
    if (R) {
      const N = y.current;
      M === void 0 ? R(N) : R(N, M);
    }
  }, $ = w(h), D = w((R, M) => {
    oi(R);
    const N = pn({
      style: v,
      timeout: O,
      easing: c
    }, {
      mode: "enter"
    });
    R.style.webkitTransition = r.transitions.create("opacity", N), R.style.transition = r.transitions.create("opacity", N), p && p(R, M);
  }), B = w(m), F = w(f), j = w((R) => {
    const M = pn({
      style: v,
      timeout: O,
      easing: c
    }, {
      mode: "exit"
    });
    R.style.webkitTransition = r.transitions.create("opacity", M), R.style.transition = r.transitions.create("opacity", M), g && g(R);
  }), d = w(b);
  return /* @__PURE__ */ C(S, {
    appear: a,
    in: u,
    nodeRef: y,
    onEnter: D,
    onEntered: B,
    onEntering: $,
    onExit: j,
    onExited: d,
    onExiting: F,
    addEndListener: (R) => {
      s && s(y.current, R);
    },
    timeout: O,
    ...E,
    children: (R, {
      ownerState: M,
      ...N
    }) => /* @__PURE__ */ x.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: R === "exited" && !u ? "hidden" : void 0,
        ...Lm[R],
        ...v,
        ...l.props.style
      },
      ref: T,
      ...N
    })
  });
});
process.env.NODE_ENV !== "production" && (il.propTypes = {
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
  children: bn.isRequired,
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
const _m = il;
function Fm(e) {
  return ue("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const zm = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return pe({
    root: ["root", o && "invisible"]
  }, Fm, t);
}, Vm = Y("div", {
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
}), sl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    slots: h = {},
    TransitionComponent: g,
    transitionDuration: b,
    ...f
  } = r, v = {
    ...r,
    component: a,
    invisible: l
  }, O = zm(v), S = {
    transition: g,
    root: u.Root,
    ...h
  }, E = {
    ...p,
    ...m
  }, y = {
    component: a,
    slots: S,
    slotProps: E
  }, [T, w] = xe("root", {
    elementType: Vm,
    externalForwardedProps: y,
    className: ne(O.root, s),
    ownerState: v
  }), [$, D] = xe("transition", {
    elementType: _m,
    externalForwardedProps: y,
    ownerState: v
  });
  return /* @__PURE__ */ C($, {
    in: c,
    timeout: b,
    ...f,
    ...D,
    children: /* @__PURE__ */ C(T, {
      "aria-hidden": !0,
      ...w,
      classes: O,
      ref: o,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (sl.propTypes = {
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
const Wm = sl;
function Um(e) {
  return typeof e == "function" ? e() : e;
}
function Hm(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ms = () => {
}, ro = new Im();
function qm(e) {
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
  } = e, m = x.useRef({}), h = x.useRef(null), g = x.useRef(null), b = Be(g, p), [f, v] = x.useState(!u), O = Hm(l);
  let S = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (S = !1);
  const E = () => He(h.current), y = () => (m.current.modalRef = g.current, m.current.mount = h.current, m.current), T = () => {
    ro.mount(y(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, w = Rt(() => {
    const M = Um(t) || E().body;
    ro.add(y(), M), g.current && T();
  }), $ = () => ro.isTopModal(y()), D = Rt((M) => {
    h.current = M, M && (u && $() ? T() : g.current && An(g.current, S));
  }), B = x.useCallback(() => {
    ro.remove(y(), S);
  }, [S]);
  x.useEffect(() => () => {
    B();
  }, [B]), x.useEffect(() => {
    u ? w() : (!O || !i) && B();
  }, [u, B, O, i, w]);
  const F = (M) => (N) => {
    var L;
    (L = M.onKeyDown) == null || L.call(M, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !$()) && (o || (N.stopPropagation(), c && c(N, "escapeKeyDown")));
  }, j = (M) => (N) => {
    var L;
    (L = M.onClick) == null || L.call(M, N), N.target === N.currentTarget && c && c(N, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const N = Ia(e);
      delete N.onTransitionEnter, delete N.onTransitionExited;
      const L = {
        ...N,
        ...M
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
        onKeyDown: F(L),
        ref: b
      };
    },
    getBackdropProps: (M = {}) => {
      const N = M;
      return {
        "aria-hidden": !0,
        ...N,
        onClick: j(N),
        open: u
      };
    },
    getTransitionProps: () => {
      const M = () => {
        v(!1), s && s();
      }, N = () => {
        v(!0), a && a(), i && B();
      };
      return {
        onEnter: xi(M, (l == null ? void 0 : l.props.onEnter) ?? ms),
        onExited: xi(N, (l == null ? void 0 : l.props.onExited) ?? ms)
      };
    },
    rootRef: b,
    portalRef: D,
    isTopModal: $,
    exited: f,
    hasTransition: O
  };
}
function Ym(e) {
  return ue("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const Gm = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return pe({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, Ym, r);
}, Km = Y("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
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
}))), Xm = Y(Wm, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), al = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = fe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Xm,
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
    disablePortal: O = !1,
    disableRestoreFocus: S = !1,
    disableScrollLock: E = !1,
    hideBackdrop: y = !1,
    keepMounted: T = !1,
    onClose: w,
    onTransitionEnter: $,
    onTransitionExited: D,
    open: B,
    slotProps: F = {},
    slots: j = {},
    // eslint-disable-next-line react/prop-types
    theme: d,
    ...P
  } = r, R = {
    ...r,
    closeAfterTransition: c,
    disableAutoFocus: b,
    disableEnforceFocus: f,
    disableEscapeKeyDown: v,
    disablePortal: O,
    disableRestoreFocus: S,
    disableScrollLock: E,
    hideBackdrop: y,
    keepMounted: T
  }, {
    getRootProps: M,
    getBackdropProps: N,
    getTransitionProps: L,
    portalRef: z,
    isTopModal: k,
    exited: I,
    hasTransition: V
  } = qm({
    ...R,
    rootRef: o
  }), q = {
    ...R,
    exited: I
  }, U = Gm(q), H = {};
  if (u.props.tabIndex === void 0 && (H.tabIndex = "-1"), V) {
    const {
      onEnter: W,
      onExited: ee
    } = L();
    H.onEnter = W, H.onExited = ee;
  }
  const G = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...j
    },
    slotProps: {
      ...g,
      ...F
    }
  }, [J, X] = xe("root", {
    ref: o,
    elementType: Km,
    externalForwardedProps: {
      ...G,
      ...P,
      component: m
    },
    getSlotProps: M,
    ownerState: q,
    className: ne(l, U == null ? void 0 : U.root, !q.open && q.exited && (U == null ? void 0 : U.hidden))
  }), [Z, Q] = xe("backdrop", {
    ref: s == null ? void 0 : s.ref,
    elementType: i,
    externalForwardedProps: G,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (W) => N({
      ...W,
      onClick: (ee) => {
        W != null && W.onClick && W.onClick(ee);
      }
    }),
    className: ne(s == null ? void 0 : s.className, U == null ? void 0 : U.backdrop),
    ownerState: q
  });
  return !T && !B && (!V || I) ? null : /* @__PURE__ */ C(rl, {
    ref: z,
    container: p,
    disablePortal: O,
    children: /* @__PURE__ */ ie(J, {
      ...X,
      children: [!y && i ? /* @__PURE__ */ C(Z, {
        ...Q
      }) : null, /* @__PURE__ */ C(wo, {
        disableEnforceFocus: f,
        disableAutoFocus: b,
        disableRestoreFocus: S,
        isEnabled: k,
        open: B,
        children: /* @__PURE__ */ x.cloneElement(u, H)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (al.propTypes = {
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
  children: bn.isRequired,
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
  container: n.oneOfType([xt, n.func]),
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
const ll = al;
function Qm(e) {
  return ue("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function hs(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function gs(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function ys(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function kn(e) {
  return typeof e == "function" ? e() : e;
}
const Jm = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"]
  }, Qm, t);
}, Zm = Y(ll, {
  name: "MuiPopover",
  slot: "Root"
})({}), cl = Y(Ho, {
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
}), ul = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    elevation: h = 8,
    marginThreshold: g = 16,
    open: b,
    PaperProps: f = {},
    // TODO: remove in v7
    slots: v = {},
    slotProps: O = {},
    transformOrigin: S = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: E,
    // TODO: remove in v7
    transitionDuration: y = "auto",
    TransitionProps: T = {},
    // TODO: remove in v7
    disableScrollLock: w = !1,
    ...$
  } = r, D = x.useRef(), B = {
    ...r,
    anchorOrigin: a,
    anchorReference: c,
    elevation: h,
    marginThreshold: g,
    transformOrigin: S,
    TransitionComponent: E,
    transitionDuration: y,
    TransitionProps: T
  }, F = Jm(B), j = x.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const W = kn(s), ee = W && W.nodeType === 1 ? W : He(D.current).body, _ = ee.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ae = ee.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ae.top === 0 && ae.left === 0 && ae.right === 0 && ae.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: _.top + hs(_, a.vertical),
      left: _.left + gs(_, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), d = x.useCallback((W) => ({
    vertical: hs(W, S.vertical),
    horizontal: gs(W, S.horizontal)
  }), [S.horizontal, S.vertical]), P = x.useCallback((W) => {
    const ee = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, _ = d(ee);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ys(_)
      };
    const ae = j();
    let oe = ae.top - _.vertical, me = ae.left - _.horizontal;
    const ke = oe + ee.height, Re = me + ee.width, Ce = ct(kn(s)), Ae = Ce.innerHeight - g, we = Ce.innerWidth - g;
    if (g !== null && oe < g) {
      const Oe = oe - g;
      oe -= Oe, _.vertical += Oe;
    } else if (g !== null && ke > Ae) {
      const Oe = ke - Ae;
      oe -= Oe, _.vertical += Oe;
    }
    if (process.env.NODE_ENV !== "production" && ee.height > Ae && ee.height && Ae && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ee.height - Ae}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && me < g) {
      const Oe = me - g;
      me -= Oe, _.horizontal += Oe;
    } else if (Re > we) {
      const Oe = Re - we;
      me -= Oe, _.horizontal += Oe;
    }
    return {
      top: `${Math.round(oe)}px`,
      left: `${Math.round(me)}px`,
      transformOrigin: ys(_)
    };
  }, [s, c, j, d, g]), [R, M] = x.useState(b), N = x.useCallback(() => {
    const W = D.current;
    if (!W)
      return;
    const ee = P(W);
    ee.top !== null && W.style.setProperty("top", ee.top), ee.left !== null && (W.style.left = ee.left), W.style.transformOrigin = ee.transformOrigin, M(!0);
  }, [P]);
  x.useEffect(() => (w && window.addEventListener("scroll", N), () => window.removeEventListener("scroll", N)), [s, w, N]);
  const L = () => {
    N();
  }, z = () => {
    M(!1);
  };
  x.useEffect(() => {
    b && N();
  }), x.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      N();
    }
  } : null, [b, N]), x.useEffect(() => {
    if (!b)
      return;
    const W = Xr(() => {
      N();
    }), ee = ct(kn(s));
    return ee.addEventListener("resize", W), () => {
      W.clear(), ee.removeEventListener("resize", W);
    };
  }, [s, b, N]);
  let k = y;
  const I = {
    slots: {
      transition: E,
      ...v
    },
    slotProps: {
      transition: T,
      paper: f,
      ...O
    }
  }, [V, q] = xe("transition", {
    elementType: ol,
    externalForwardedProps: I,
    ownerState: B,
    getSlotProps: (W) => ({
      ...W,
      onEntering: (ee, _) => {
        var ae;
        (ae = W.onEntering) == null || ae.call(W, ee, _), L();
      },
      onExited: (ee) => {
        var _;
        (_ = W.onExited) == null || _.call(W, ee), z();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  y === "auto" && !V.muiSupportAuto && (k = void 0);
  const U = m || (s ? He(kn(s)).body : void 0), [H, {
    slots: G,
    slotProps: J,
    ...X
  }] = xe("root", {
    ref: o,
    elementType: Zm,
    externalForwardedProps: {
      ...I,
      ...$
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: v.backdrop
      },
      slotProps: {
        backdrop: Ea(typeof O.backdrop == "function" ? O.backdrop(B) : O.backdrop, {
          invisible: !0
        })
      },
      container: U,
      open: b
    },
    ownerState: B,
    className: ne(F.root, p)
  }), [Z, Q] = xe("paper", {
    ref: D,
    className: F.paper,
    elementType: cl,
    externalForwardedProps: I,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: h,
      style: R ? void 0 : {
        opacity: 0
      }
    },
    ownerState: B
  });
  return /* @__PURE__ */ C(H, {
    ...X,
    ...!bo(H) && {
      slots: G,
      slotProps: J,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ C(V, {
      ...q,
      timeout: k,
      children: /* @__PURE__ */ C(Z, {
        ...Q,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ul.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: pt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Et(n.oneOfType([xt, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = kn(e.anchorEl);
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
  container: n.oneOfType([xt, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Qr,
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
    component: Jr
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
const eh = ul;
function th(e) {
  return ue("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const nh = {
  vertical: "top",
  horizontal: "right"
}, oh = {
  vertical: "top",
  horizontal: "left"
}, rh = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, th, t);
}, ih = Y(eh, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), sh = Y(cl, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), ah = Y(Om, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), pl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    PopoverClasses: h,
    transitionDuration: g = "auto",
    TransitionProps: {
      onEntering: b,
      ...f
    } = {},
    variant: v = "selectedMenu",
    slots: O = {},
    slotProps: S = {},
    ...E
  } = r, y = Uo(), T = {
    ...r,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: b,
    PaperProps: m,
    transitionDuration: g,
    TransitionProps: f,
    variant: v
  }, w = rh(T), $ = i && !l && p, D = x.useRef(null), B = (k, I) => {
    D.current && D.current.adjustStyleForScrollbar(k, {
      direction: y ? "rtl" : "ltr"
    }), b && b(k, I);
  }, F = (k) => {
    k.key === "Tab" && (k.preventDefault(), u && u(k, "tabKeyDown"));
  };
  let j = -1;
  x.Children.map(s, (k, I) => {
    /* @__PURE__ */ x.isValidElement(k) && (process.env.NODE_ENV !== "production" && Yt.isFragment(k) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), k.props.disabled || (v === "selectedMenu" && k.props.selected || j === -1) && (j = I));
  });
  const d = {
    slots: O,
    slotProps: {
      list: c,
      transition: f,
      paper: m,
      ...S
    }
  }, P = Ka({
    elementType: O.root,
    externalSlotProps: S.root,
    ownerState: T,
    className: [w.root, a]
  }), [R, M] = xe("paper", {
    className: w.paper,
    elementType: sh,
    externalForwardedProps: d,
    shouldForwardComponentProp: !0,
    ownerState: T
  }), [N, L] = xe("list", {
    className: ne(w.list, c.className),
    elementType: ah,
    shouldForwardComponentProp: !0,
    externalForwardedProps: d,
    getSlotProps: (k) => ({
      ...k,
      onKeyDown: (I) => {
        var V;
        F(I), (V = k.onKeyDown) == null || V.call(k, I);
      }
    }),
    ownerState: T
  }), z = typeof d.slotProps.transition == "function" ? d.slotProps.transition(T) : d.slotProps.transition;
  return /* @__PURE__ */ C(ih, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: y ? "right" : "left"
    },
    transformOrigin: y ? nh : oh,
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
      root: P,
      paper: M,
      backdrop: typeof S.backdrop == "function" ? S.backdrop(T) : S.backdrop,
      transition: {
        ...z,
        onEntering: (...k) => {
          var I;
          B(...k), (I = z == null ? void 0 : z.onEntering) == null || I.call(z, ...k);
        }
      }
    },
    open: p,
    ref: o,
    transitionDuration: g,
    ownerState: T,
    ...E,
    classes: h,
    children: /* @__PURE__ */ C(N, {
      actions: D,
      autoFocus: i && (j === -1 || l),
      autoFocusItem: $,
      variant: v,
      ...L,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (pl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([xt, n.func]),
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
const dl = pl, lh = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), bs = lh, ch = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), vs = ch;
function uh(e) {
  return ue("MuiMenuItem", e);
}
const ph = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), wn = ph, dh = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.divider && t.divider, !o.disableGutters && t.gutters];
}, fh = (e) => {
  const {
    disabled: t,
    dense: o,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = pe({
    root: ["root", o && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, uh, a);
  return {
    ...a,
    ...c
  };
}, mh = Y(ni, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: dh
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
  [`& + .${rs.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${rs.inset}`]: {
    marginLeft: 52
  },
  [`& .${vs.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${vs.inset}`]: {
    paddingLeft: 36
  },
  [`& .${bs.root}`]: {
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
      [`& .${bs.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), fl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    className: h,
    ...g
  } = r, b = x.useContext(jr), f = x.useMemo(() => ({
    dense: a || b.dense || !1,
    disableGutters: c
  }), [b.dense, a, c]), v = x.useRef(null);
  lt(() => {
    i && (v.current ? v.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const O = {
    ...r,
    dense: f.dense,
    divider: l,
    disableGutters: c
  }, S = fh(r), E = Be(v, o);
  let y;
  return r.disabled || (y = m !== void 0 ? m : -1), /* @__PURE__ */ C(jr.Provider, {
    value: f,
    children: /* @__PURE__ */ C(mh, {
      ref: E,
      role: p,
      tabIndex: y,
      component: s,
      focusVisibleClassName: ne(S.focusVisible, u),
      className: ne(S.root, h),
      ...g,
      ownerState: O,
      classes: S
    })
  });
});
process.env.NODE_ENV !== "production" && (fl.propTypes = {
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
const xs = fl, ml = jp({
  createStyledComponent: Y("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => fe({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (ml.propTypes = {
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
const Je = ml;
function io(e) {
  return parseInt(e, 10) || 0;
}
const hh = {
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
function gh(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ts(e) {
  return gh(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const hl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l,
    ...c
  } = t, {
    current: u
  } = x.useRef(l != null), p = x.useRef(null), m = Be(o, p), h = x.useRef(null), g = x.useRef(null), b = x.useCallback(() => {
    const E = p.current, y = g.current;
    if (!E || !y)
      return;
    const w = ct(E).getComputedStyle(E);
    if (w.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    y.style.width = w.width, y.value = E.value || t.placeholder || "x", y.value.slice(-1) === `
` && (y.value += " ");
    const $ = w.boxSizing, D = io(w.paddingBottom) + io(w.paddingTop), B = io(w.borderBottomWidth) + io(w.borderTopWidth), F = y.scrollHeight;
    y.value = "x";
    const j = y.scrollHeight;
    let d = F;
    s && (d = Math.max(Number(s) * j, d)), i && (d = Math.min(Number(i) * j, d)), d = Math.max(d, j);
    const P = d + ($ === "border-box" ? D + B : 0), R = Math.abs(d - F) <= 1;
    return {
      outerHeightStyle: P,
      overflowing: R
    };
  }, [i, s, t.placeholder]), f = Rt(() => {
    const E = p.current, y = b();
    if (!E || !y || Ts(y))
      return !1;
    const T = y.outerHeightStyle;
    return h.current != null && h.current !== T;
  }), v = x.useCallback(() => {
    const E = p.current, y = b();
    if (!E || !y || Ts(y))
      return;
    const T = y.outerHeightStyle;
    h.current !== T && (h.current = T, E.style.height = `${T}px`), E.style.overflow = y.overflowing ? "hidden" : "";
  }, [b]), O = x.useRef(-1);
  lt(() => {
    const E = Xr(v), y = p == null ? void 0 : p.current;
    if (!y)
      return;
    const T = ct(y);
    T.addEventListener("resize", E);
    let w;
    return typeof ResizeObserver < "u" && (w = new ResizeObserver(() => {
      f() && (w.unobserve(y), cancelAnimationFrame(O.current), v(), O.current = requestAnimationFrame(() => {
        w.observe(y);
      }));
    }), w.observe(y)), () => {
      E.clear(), cancelAnimationFrame(O.current), T.removeEventListener("resize", E), w && w.disconnect();
    };
  }, [b, v, f]), lt(() => {
    v();
  });
  const S = (E) => {
    u || v();
    const y = E.target, T = y.value.length, w = y.value.endsWith(`
`), $ = y.selectionStart === T;
    w && $ && y.setSelectionRange(T, T), r && r(E);
  };
  return /* @__PURE__ */ ie(x.Fragment, {
    children: [/* @__PURE__ */ C("textarea", {
      value: l,
      onChange: S,
      ref: m,
      rows: s,
      style: a,
      ...c
    }), /* @__PURE__ */ C("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: g,
      tabIndex: -1,
      style: {
        ...hh.shadow,
        ...a,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (hl.propTypes = {
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
const yh = hl;
function vn({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, i) => (r[i] = e[i], o && typeof e[i] > "u" && (r[i] = o[i]), r), {});
}
function Es(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function So(e, t = !1) {
  return e && (Es(e.value) && e.value !== "" || t && Es(e.defaultValue) && e.defaultValue !== "");
}
function bh(e) {
  return e.startAdornment;
}
function vh(e) {
  return ue("MuiInputBase", e);
}
const xh = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), dn = xh;
var Os;
const Go = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${K(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, Ko = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, Th = (e) => {
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
    root: ["root", `color${K(o)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", h && h !== "medium" && `size${K(h)}`, p && "multiline", g && "adornedStart", s && "adornedEnd", u && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", b === "search" && "inputTypeSearch", p && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", g && "inputAdornedStart", s && "inputAdornedEnd", m && "readOnly"]
  };
  return pe(f, vh, t);
}, Xo = Y("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Go
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
  [`&.${dn.disabled}`]: {
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
}))), Qo = Y("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Ko
})(de(({
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
    [`label[data-shrink=false] + .${dn.formControl} &`]: {
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
    [`&.${dn.disabled}`]: {
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
})), ws = Nd({
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
}), gl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    disabled: h,
    disableInjectingGlobalStyles: g,
    endAdornment: b,
    error: f,
    fullWidth: v = !1,
    id: O,
    inputComponent: S = "input",
    inputProps: E = {},
    inputRef: y,
    margin: T,
    maxRows: w,
    minRows: $,
    multiline: D = !1,
    name: B,
    onBlur: F,
    onChange: j,
    onClick: d,
    onFocus: P,
    onKeyDown: R,
    onKeyUp: M,
    placeholder: N,
    readOnly: L,
    renderSuffix: z,
    rows: k,
    size: I,
    slotProps: V = {},
    slots: q = {},
    startAdornment: U,
    type: H = "text",
    value: G,
    ...J
  } = r, X = E.value != null ? E.value : G, {
    current: Z
  } = x.useRef(X != null), Q = x.useRef(), W = x.useCallback((se) => {
    process.env.NODE_ENV !== "production" && se && se.nodeName !== "INPUT" && !se.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ee = Be(Q, y, E.ref, W), [_, ae] = x.useState(!1), oe = Xt();
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    if (oe)
      return oe.registerEffect();
  }, [oe]);
  const me = vn({
    props: r,
    muiFormControl: oe,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  me.focused = oe ? oe.focused : _, x.useEffect(() => {
    !oe && h && _ && (ae(!1), F && F());
  }, [oe, h, _, F]);
  const ke = oe && oe.onFilled, Re = oe && oe.onEmpty, Ce = x.useCallback((se) => {
    So(se) ? ke && ke() : Re && Re();
  }, [ke, Re]);
  lt(() => {
    Z && Ce({
      value: X
    });
  }, [X, Ce, Z]);
  const Ae = (se) => {
    P && P(se), E.onFocus && E.onFocus(se), oe && oe.onFocus ? oe.onFocus(se) : ae(!0);
  }, we = (se) => {
    F && F(se), E.onBlur && E.onBlur(se), oe && oe.onBlur ? oe.onBlur(se) : ae(!1);
  }, Oe = (se, ...Ke) => {
    if (!Z) {
      const _e = se.target || Q.current;
      if (_e == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : vt(1));
      Ce({
        value: _e.value
      });
    }
    E.onChange && E.onChange(se, ...Ke), j && j(se, ...Ke);
  };
  x.useEffect(() => {
    Ce(Q.current);
  }, []);
  const te = (se) => {
    Q.current && se.currentTarget === se.target && Q.current.focus(), d && d(se);
  };
  let Le = S, Pe = E;
  D && Le === "input" && (k ? (process.env.NODE_ENV !== "production" && ($ || w) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Pe = {
    type: void 0,
    minRows: k,
    maxRows: k,
    ...Pe
  }) : Pe = {
    type: void 0,
    maxRows: w,
    minRows: $,
    ...Pe
  }, Le = yh);
  const ot = (se) => {
    Ce(se.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  x.useEffect(() => {
    oe && oe.setAdornedStart(!!U);
  }, [oe, U]);
  const Ge = {
    ...r,
    color: me.color || "primary",
    disabled: me.disabled,
    endAdornment: b,
    error: me.error,
    focused: me.focused,
    formControl: oe,
    fullWidth: v,
    hiddenLabel: me.hiddenLabel,
    multiline: D,
    size: me.size,
    startAdornment: U,
    type: H
  }, rt = Th(Ge), dt = q.root || u.Root || Xo, Ve = V.root || p.root || {}, Ot = q.input || u.Input || Qo;
  return Pe = {
    ...Pe,
    ...V.input ?? p.input
  }, /* @__PURE__ */ ie(x.Fragment, {
    children: [!g && typeof ws == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Os || (Os = /* @__PURE__ */ C(ws, {}))), /* @__PURE__ */ ie(dt, {
      ...Ve,
      ref: o,
      onClick: te,
      ...J,
      ...!bo(dt) && {
        ownerState: {
          ...Ge,
          ...Ve.ownerState
        }
      },
      className: ne(rt.root, Ve.className, l, L && "MuiInputBase-readOnly"),
      children: [U, /* @__PURE__ */ C(Yo.Provider, {
        value: null,
        children: /* @__PURE__ */ C(Ot, {
          "aria-invalid": me.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: m,
          disabled: me.disabled,
          id: O,
          onAnimationStart: ot,
          name: B,
          placeholder: N,
          readOnly: L,
          required: me.required,
          rows: k,
          value: X,
          onKeyDown: R,
          onKeyUp: M,
          type: H,
          ...Pe,
          ...!bo(Ot) && {
            as: Le,
            ownerState: {
              ...Ge,
              ...Pe.ownerState
            }
          },
          ref: ee,
          className: ne(rt.input, Pe.className, L && "MuiInputBase-readOnly"),
          onBlur: we,
          onChange: Oe,
          onFocus: Ae
        })
      }), b, z ? z({
        ...me,
        startAdornment: U
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (gl.propTypes = {
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
  inputComponent: Jr,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: pt,
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
const ri = gl;
function Eh(e) {
  return ue("MuiInput", e);
}
const Oh = {
  ...dn,
  ...ce("MuiInput", ["root", "underline", "input"])
}, Cn = Oh, wh = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, i = pe({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, Eh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, Ch = Y(Xo, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...Go(e, t), !o.disableUnderline && t.underline];
  }
})(de(({
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
        [`&.${Cn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Cn.error}`]: {
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
        [`&:hover:not(.${Cn.disabled}, .${Cn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${o}`
          }
        },
        [`&.${Cn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(ut()).map(([r]) => ({
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
})), Sh = Y(Qo, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Ko
})({}), ii = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    type: h = "text",
    ...g
  } = r, b = wh(r), v = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, O = p ?? a ? je(p ?? a, v) : v, S = m.root ?? s.Root ?? Ch, E = m.input ?? s.Input ?? Sh;
  return /* @__PURE__ */ C(ri, {
    slots: {
      root: S,
      input: E
    },
    slotProps: O,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: o,
    type: h,
    ...g,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (ii.propTypes = {
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
  inputRef: pt,
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
ii.muiName = "Input";
const yl = ii;
function Rh(e) {
  return ue("MuiFilledInput", e);
}
const Ph = {
  ...dn,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, Ft = Ph, $h = (e) => {
  const {
    classes: t,
    disableUnderline: o,
    startAdornment: r,
    endAdornment: i,
    size: s,
    hiddenLabel: a,
    multiline: l
  } = e, c = {
    root: ["root", !o && "underline", r && "adornedStart", i && "adornedEnd", s === "small" && `size${K(s)}`, a && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = pe(c, Rh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, Ih = Y(Xo, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...Go(e, t), !o.disableUnderline && t.underline];
  }
})(de(({
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
    [`&.${Ft.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Ft.disabled}`]: {
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
        [`&.${Ft.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Ft.error}`]: {
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
        [`&:hover:not(.${Ft.disabled}, .${Ft.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Ft.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(ut()).map(([a]) => {
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
})), Nh = Y(Qo, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Ko
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
}))), si = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  }, v = $h(r), O = {
    root: {
      ownerState: f
    },
    input: {
      ownerState: f
    }
  }, S = m ?? a ? je(O, m ?? a) : O, E = h.root ?? s.Root ?? Ih, y = h.input ?? s.Input ?? Nh;
  return /* @__PURE__ */ C(ri, {
    slots: {
      root: E,
      input: y
    },
    slotProps: S,
    fullWidth: l,
    inputComponent: u,
    multiline: p,
    ref: o,
    type: g,
    ...b,
    classes: v
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
  inputRef: pt,
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
const bl = si;
var Cs;
const kh = Y("fieldset", {
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
}), Mh = Y("legend", {
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
function vl(e) {
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
  return /* @__PURE__ */ C(kh, {
    "aria-hidden": !0,
    className: r,
    ownerState: c,
    ...a,
    children: /* @__PURE__ */ C(Mh, {
      ownerState: c,
      children: l ? /* @__PURE__ */ C("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Cs || (Cs = /* @__PURE__ */ C("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (vl.propTypes = {
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
function Ah(e) {
  return ue("MuiOutlinedInput", e);
}
const Dh = {
  ...dn,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, mt = Dh, Bh = (e) => {
  const {
    classes: t
  } = e, r = pe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Ah, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, jh = Y(Xo, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Go
})(de(({
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
    variants: [...Object.entries(e.palette).filter(ut()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        [`&.${mt.focused} .${mt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[o].main
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
})), Lh = Y(vl, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), _h = Y(Qo, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Ko
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
}))), ai = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    type: h = "text",
    ...g
  } = r, b = Bh(r), f = Xt(), v = vn({
    props: r,
    muiFormControl: f,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), O = {
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
  }, S = p.root ?? i.Root ?? jh, E = p.input ?? i.Input ?? _h, [y, T] = xe("notchedOutline", {
    elementType: Lh,
    className: b.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: O,
    externalForwardedProps: {
      slots: p,
      slotProps: m
    },
    additionalProps: {
      label: l != null && l !== "" && v.required ? /* @__PURE__ */ ie(x.Fragment, {
        children: [l, " ", "*"]
      }) : l
    }
  });
  return /* @__PURE__ */ C(ri, {
    slots: {
      root: S,
      input: E
    },
    slotProps: m,
    renderSuffix: (w) => /* @__PURE__ */ C(y, {
      ...T,
      notched: typeof u < "u" ? u : !!(w.startAdornment || w.filled || w.focused)
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
  inputRef: pt,
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
ai.muiName = "Input";
const xl = ai;
function Fh(e) {
  return ue("MuiFormLabel", e);
}
const zh = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Dn = zh, Vh = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${K(o)}`, i && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return pe(c, Fh, t);
}, Wh = Y("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color === "secondary" && t.colorSecondary, o.filled && t.filled];
  }
})(de(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(ut()).map(([t]) => ({
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
}))), Uh = Y("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(de(({
  theme: e
}) => ({
  [`&.${Dn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Tl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    required: h,
    ...g
  } = r, b = Xt(), f = vn({
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
  }, O = Vh(v);
  return /* @__PURE__ */ ie(Wh, {
    as: l,
    ownerState: v,
    className: ne(O.root, s),
    ref: o,
    ...g,
    children: [i, f.required && /* @__PURE__ */ ie(Uh, {
      ownerState: v,
      "aria-hidden": !0,
      className: O.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Tl.propTypes = {
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
const Hh = Tl;
function qh(e) {
  return ue("MuiInputLabel", e);
}
ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Yh = (e) => {
  const {
    classes: t,
    formControl: o,
    size: r,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", o && "formControl", !s && "animated", i && "shrink", r && r !== "medium" && `size${K(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = pe(c, qh, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, Gh = Y(Hh, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
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
}))), El = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  const h = vn({
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
  }, b = Yh(g);
  return /* @__PURE__ */ C(Gh, {
    "data-shrink": m,
    ref: o,
    className: ne(b.root, c),
    ...u,
    ownerState: g,
    classes: b
  });
});
process.env.NODE_ENV !== "production" && (El.propTypes = {
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
const Kh = El;
function Xh(e) {
  return ue("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Qh = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, i = {
    root: ["root", o !== "none" && `margin${K(o)}`, r && "fullWidth"]
  };
  return pe(i, Xh, t);
}, Jh = Y("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`margin${K(o.margin)}`], o.fullWidth && t.fullWidth];
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
}), Ol = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    hiddenLabel: h = !1,
    margin: g = "none",
    required: b = !1,
    size: f = "medium",
    variant: v = "outlined",
    ...O
  } = r, S = {
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
  }, E = Qh(S), [y, T] = x.useState(() => {
    let N = !1;
    return i && x.Children.forEach(i, (L) => {
      if (!mr(L, ["Input", "Select"]))
        return;
      const z = mr(L, ["Select"]) ? L.props.input : L;
      z && bh(z.props) && (N = !0);
    }), N;
  }), [w, $] = x.useState(() => {
    let N = !1;
    return i && x.Children.forEach(i, (L) => {
      mr(L, ["Input", "Select"]) && (So(L.props, !0) || So(L.props.inputProps, !0)) && (N = !0);
    }), N;
  }), [D, B] = x.useState(!1);
  c && D && B(!1);
  const F = p !== void 0 && !c ? p : D;
  let j;
  const d = x.useRef(!1);
  process.env.NODE_ENV !== "production" && (j = () => (d.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), d.current = !0, () => {
    d.current = !1;
  }));
  const P = x.useCallback(() => {
    $(!0);
  }, []), R = x.useCallback(() => {
    $(!1);
  }, []), M = x.useMemo(() => ({
    adornedStart: y,
    setAdornedStart: T,
    color: a,
    disabled: c,
    error: u,
    filled: w,
    focused: F,
    fullWidth: m,
    hiddenLabel: h,
    size: f,
    onBlur: () => {
      B(!1);
    },
    onFocus: () => {
      B(!0);
    },
    onEmpty: R,
    onFilled: P,
    registerEffect: j,
    required: b,
    variant: v
  }), [y, a, c, u, w, F, m, h, j, R, P, b, f, v]);
  return /* @__PURE__ */ C(Yo.Provider, {
    value: M,
    children: /* @__PURE__ */ C(Jh, {
      as: l,
      ownerState: S,
      className: ne(E.root, s),
      ref: o,
      ...O,
      children: i
    })
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
const Zh = Ol;
function eg(e) {
  return ue("MuiFormHelperText", e);
}
const tg = ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Ss = tg;
var Rs;
const ng = (e) => {
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
    root: ["root", i && "disabled", s && "error", r && `size${K(r)}`, o && "contained", l && "focused", a && "filled", c && "required"]
  };
  return pe(u, eg, t);
}, og = Y("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size && t[`size${K(o.size)}`], o.contained && t.contained, o.filled && t.filled];
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
  [`&.${Ss.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ss.error}`]: {
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
}))), wl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    required: h,
    variant: g,
    ...b
  } = r, f = Xt(), v = vn({
    props: r,
    muiFormControl: f,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), O = {
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
  delete O.ownerState;
  const S = ng(O);
  return /* @__PURE__ */ C(og, {
    as: a,
    className: ne(S.root, s),
    ref: o,
    ...b,
    ownerState: O,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Rs || (Rs = /* @__PURE__ */ C("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (wl.propTypes = {
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
const rg = wl;
function ig(e) {
  return ue("MuiNativeSelect", e);
}
const sg = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), li = sg, ag = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${K(o)}`, s && "iconOpen", r && "disabled"]
  };
  return pe(l, ig, t);
}, Cl = Y("select", {
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
  [`&.${li.disabled}`]: {
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
})), lg = Y(Cl, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Ye,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${li.multiple}`]: t.multiple
    }];
  }
})({}), Sl = Y("svg", {
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
  [`&.${li.disabled}`]: {
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
})), cg = Y(Sl, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${K(o.variant)}`], o.open && t.iconOpen];
  }
})({}), Rl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  }, m = ag(p);
  return /* @__PURE__ */ ie(x.Fragment, {
    children: [/* @__PURE__ */ C(lg, {
      ownerState: p,
      className: ne(m.select, r),
      disabled: i,
      ref: l || o,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ C(cg, {
      as: a,
      ownerState: p,
      className: m.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
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
  inputRef: pt,
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
const ug = Rl;
function Pl(e) {
  return ue("MuiSelect", e);
}
const Sn = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Ps;
const pg = Y(Cl, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Sn.select}`]: t.select
      },
      {
        [`&.${Sn.select}`]: t[o.variant]
      },
      {
        [`&.${Sn.error}`]: t.error
      },
      {
        [`&.${Sn.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Sn.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), dg = Y(Sl, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${K(o.variant)}`], o.open && t.iconOpen];
  }
})({}), fg = Y("input", {
  shouldForwardProp: (e) => Ta(e) && e !== "classes",
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
function $s(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function mg(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const hg = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", o, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${K(o)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return pe(l, Pl, t);
}, $l = /* @__PURE__ */ x.forwardRef(function(t, o) {
  var Jt, Jn, Lt, Zn;
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
    MenuProps: O = {},
    multiple: S,
    name: E,
    onBlur: y,
    onChange: T,
    onClose: w,
    onFocus: $,
    onOpen: D,
    open: B,
    readOnly: F,
    renderValue: j,
    required: d,
    SelectDisplayProps: P = {},
    tabIndex: R,
    // catching `type` from Input which makes no sense for SelectInput
    type: M,
    value: N,
    variant: L = "standard",
    ...z
  } = t, [k, I] = Pr({
    controlled: N,
    default: p,
    name: "Select"
  }), [V, q] = Pr({
    controlled: B,
    default: u,
    name: "Select"
  }), U = x.useRef(null), H = x.useRef(null), [G, J] = x.useState(null), {
    current: X
  } = x.useRef(B != null), [Z, Q] = x.useState(), W = Be(o, f), ee = x.useCallback((re) => {
    H.current = re, re && J(re);
  }, []), _ = G == null ? void 0 : G.parentNode;
  x.useImperativeHandle(W, () => ({
    focus: () => {
      H.current.focus();
    },
    node: U.current,
    value: k
  }), [k]), x.useEffect(() => {
    u && V && G && !X && (Q(a ? null : _.clientWidth), H.current.focus());
  }, [G, a]), x.useEffect(() => {
    s && H.current.focus();
  }, [s]), x.useEffect(() => {
    if (!v)
      return;
    const re = He(H.current).getElementById(v);
    if (re) {
      const he = () => {
        getSelection().isCollapsed && H.current.focus();
      };
      return re.addEventListener("click", he), () => {
        re.removeEventListener("click", he);
      };
    }
  }, [v]);
  const ae = (re, he) => {
    re ? D && D(he) : w && w(he), X || (Q(a ? null : _.clientWidth), q(re));
  }, oe = (re) => {
    re.button === 0 && (re.preventDefault(), H.current.focus(), ae(!0, re));
  }, me = (re) => {
    ae(!1, re);
  }, ke = x.Children.toArray(l), Re = (re) => {
    const he = ke.find((De) => De.props.value === re.target.value);
    he !== void 0 && (I(he.props.value), T && T(re, he));
  }, Ce = (re) => (he) => {
    let De;
    if (he.currentTarget.hasAttribute("tabindex")) {
      if (S) {
        De = Array.isArray(k) ? k.slice() : [];
        const Nt = k.indexOf(re.props.value);
        Nt === -1 ? De.push(re.props.value) : De.splice(Nt, 1);
      } else
        De = re.props.value;
      if (re.props.onClick && re.props.onClick(he), k !== De && (I(De), T)) {
        const Nt = he.nativeEvent || he, eo = new Nt.constructor(Nt.type, Nt);
        Object.defineProperty(eo, "target", {
          writable: !0,
          value: {
            value: De,
            name: E
          }
        }), T(eo, re);
      }
      S || ae(!1, he);
    }
  }, Ae = (re) => {
    F || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(re.key) && (re.preventDefault(), ae(!0, re));
  }, we = G !== null && V, Oe = (re) => {
    !we && y && (Object.defineProperty(re, "target", {
      writable: !0,
      value: {
        value: k,
        name: E
      }
    }), y(re));
  };
  delete z["aria-invalid"];
  let te, Le;
  const Pe = [];
  let ot = !1, Ge = !1;
  (So({
    value: k
  }) || h) && (j ? te = j(k) : ot = !0);
  const rt = ke.map((re) => {
    if (!/* @__PURE__ */ x.isValidElement(re))
      return null;
    process.env.NODE_ENV !== "production" && Yt.isFragment(re) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let he;
    if (S) {
      if (!Array.isArray(k))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : vt(2));
      he = k.some((De) => $s(De, re.props.value)), he && ot && Pe.push(re.props.children);
    } else
      he = $s(k, re.props.value), he && ot && (Le = re.props.children);
    return he && (Ge = !0), /* @__PURE__ */ x.cloneElement(re, {
      "aria-selected": he ? "true" : "false",
      onClick: Ce(re),
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
    if (!Ge && !S && k !== "") {
      const re = ke.map((he) => he.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${k}\` for the select ${E ? `(name="${E}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${re.filter((he) => he != null).map((he) => `\`${he}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ge, ke, S, E, k]), ot && (S ? Pe.length === 0 ? te = null : te = Pe.reduce((re, he, De) => (re.push(he), De < Pe.length - 1 && re.push(", "), re), []) : te = Le);
  let dt = Z;
  !a && X && G && (dt = _.clientWidth);
  let Ve;
  typeof R < "u" ? Ve = R : Ve = m ? null : 0;
  const Ot = P.id || (E ? `mui-component-select-${E}` : void 0), se = {
    ...t,
    variant: L,
    value: k,
    open: we,
    error: g
  }, Ke = hg(se), _e = {
    ...O.PaperProps,
    ...typeof ((Jt = O.slotProps) == null ? void 0 : Jt.paper) == "function" ? O.slotProps.paper(se) : (Jn = O.slotProps) == null ? void 0 : Jn.paper
  }, We = {
    ...O.MenuListProps,
    ...typeof ((Lt = O.slotProps) == null ? void 0 : Lt.list) == "function" ? O.slotProps.list(se) : (Zn = O.slotProps) == null ? void 0 : Zn.list
  }, Qn = Yn();
  return /* @__PURE__ */ ie(x.Fragment, {
    children: [/* @__PURE__ */ C(pg, {
      as: "div",
      ref: ee,
      tabIndex: Ve,
      role: "combobox",
      "aria-controls": we ? Qn : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": we ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [v, Ot].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": d ? "true" : void 0,
      "aria-invalid": g ? "true" : void 0,
      onKeyDown: Ae,
      onMouseDown: m || F ? null : oe,
      onBlur: Oe,
      onFocus: $,
      ...P,
      ownerState: se,
      className: ne(P.className, Ke.select, c),
      id: Ot,
      children: mg(te) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ps || (Ps = /* @__PURE__ */ C("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : te
    }), /* @__PURE__ */ C(fg, {
      "aria-invalid": g,
      value: Array.isArray(k) ? k.join(",") : k,
      name: E,
      ref: U,
      "aria-hidden": !0,
      onChange: Re,
      tabIndex: -1,
      disabled: m,
      className: Ke.nativeInput,
      autoFocus: s,
      required: d,
      ...z,
      ownerState: se
    }), /* @__PURE__ */ C(dg, {
      as: b,
      className: Ke.icon,
      ownerState: se
    }), /* @__PURE__ */ C(dl, {
      id: `menu-${E || ""}`,
      anchorEl: _,
      open: we,
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
          "aria-labelledby": v,
          role: "listbox",
          "aria-multiselectable": S ? "true" : void 0,
          disableListWrap: !0,
          id: Qn,
          ...We
        },
        paper: {
          ..._e,
          style: {
            minWidth: dt,
            ..._e != null ? _e.style : null
          }
        }
      },
      children: rt
    })]
  });
});
process.env.NODE_ENV !== "production" && ($l.propTypes = {
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
  inputRef: pt,
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
const gg = $l, yg = $t(/* @__PURE__ */ C("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), bg = (e) => {
  const {
    classes: t
  } = e, r = pe({
    root: ["root"]
  }, Pl, t);
  return {
    ...t,
    ...r
  };
}, ci = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Ye(e) && e !== "variant"
}, vg = Y(yl, ci)(""), xg = Y(xl, ci)(""), Tg = Y(bl, ci)(""), ui = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    IconComponent: p = yg,
    id: m,
    input: h,
    inputProps: g,
    label: b,
    labelId: f,
    MenuProps: v,
    multiple: O = !1,
    native: S = !1,
    onClose: E,
    onOpen: y,
    open: T,
    renderValue: w,
    SelectDisplayProps: $,
    variant: D = "outlined",
    ...B
  } = r, F = S ? ug : gg, j = Xt(), d = vn({
    props: r,
    muiFormControl: j,
    states: ["variant", "error"]
  }), P = d.variant || D, R = {
    ...r,
    variant: P,
    classes: a
  }, M = bg(R), {
    root: N,
    ...L
  } = M, z = h || {
    standard: /* @__PURE__ */ C(vg, {
      ownerState: R
    }),
    outlined: /* @__PURE__ */ C(xg, {
      label: b,
      ownerState: R
    }),
    filled: /* @__PURE__ */ C(Tg, {
      ownerState: R
    })
  }[P], k = Be(o, Qt(z));
  return /* @__PURE__ */ C(x.Fragment, {
    children: /* @__PURE__ */ x.cloneElement(z, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: F,
      inputProps: {
        children: s,
        error: d.error,
        IconComponent: p,
        variant: P,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: O,
        ...S ? {
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
          renderValue: w,
          SelectDisplayProps: {
            id: m,
            ...$
          }
        },
        ...g,
        classes: g ? je(L, g.classes) : L,
        ...h ? h.props.inputProps : {}
      },
      ...(O && S || u) && P === "outlined" ? {
        notched: !0
      } : {},
      ref: k,
      className: ne(z.props.className, l, M.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!h && {
        variant: P
      },
      ...B
    })
  });
});
process.env.NODE_ENV !== "production" && (ui.propTypes = {
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
ui.muiName = "Select";
const Eg = ui;
function Og(e) {
  return ue("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const wg = {
  standard: yl,
  filled: bl,
  outlined: xl
}, Cg = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, Og, t);
}, Sg = Y(Zh, {
  name: "MuiTextField",
  slot: "Root"
})({}), Il = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    FormHelperTextProps: h,
    fullWidth: g = !1,
    helperText: b,
    id: f,
    InputLabelProps: v,
    inputProps: O,
    InputProps: S,
    inputRef: E,
    label: y,
    maxRows: T,
    minRows: w,
    multiline: $ = !1,
    name: D,
    onBlur: B,
    onChange: F,
    onFocus: j,
    placeholder: d,
    required: P = !1,
    rows: R,
    select: M = !1,
    SelectProps: N,
    slots: L = {},
    slotProps: z = {},
    type: k,
    value: I,
    variant: V = "outlined",
    ...q
  } = r, U = {
    ...r,
    autoFocus: s,
    color: c,
    disabled: p,
    error: m,
    fullWidth: g,
    multiline: $,
    required: P,
    select: M,
    variant: V
  }, H = Cg(U);
  process.env.NODE_ENV !== "production" && M && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const G = Yn(f), J = b && G ? `${G}-helper-text` : void 0, X = y && G ? `${G}-label` : void 0, Z = wg[V], Q = {
    slots: L,
    slotProps: {
      input: S,
      inputLabel: v,
      htmlInput: O,
      formHelperText: h,
      select: N,
      ...z
    }
  }, W = {}, ee = Q.slotProps.inputLabel;
  V === "outlined" && (ee && typeof ee.shrink < "u" && (W.notched = ee.shrink), W.label = y), M && ((!N || !N.native) && (W.id = void 0), W["aria-describedby"] = void 0);
  const [_, ae] = xe("root", {
    elementType: Sg,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...Q,
      ...q
    },
    ownerState: U,
    className: ne(H.root, l),
    ref: o,
    additionalProps: {
      disabled: p,
      error: m,
      fullWidth: g,
      required: P,
      color: c,
      variant: V
    }
  }), [oe, me] = xe("input", {
    elementType: Z,
    externalForwardedProps: Q,
    additionalProps: W,
    ownerState: U
  }), [ke, Re] = xe("inputLabel", {
    elementType: Kh,
    externalForwardedProps: Q,
    ownerState: U
  }), [Ce, Ae] = xe("htmlInput", {
    elementType: "input",
    externalForwardedProps: Q,
    ownerState: U
  }), [we, Oe] = xe("formHelperText", {
    elementType: rg,
    externalForwardedProps: Q,
    ownerState: U
  }), [te, Le] = xe("select", {
    elementType: Eg,
    externalForwardedProps: Q,
    ownerState: U
  }), Pe = /* @__PURE__ */ C(oe, {
    "aria-describedby": J,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: g,
    multiline: $,
    name: D,
    rows: R,
    maxRows: T,
    minRows: w,
    type: k,
    value: I,
    id: G,
    inputRef: E,
    onBlur: B,
    onChange: F,
    onFocus: j,
    placeholder: d,
    inputProps: Ae,
    slots: {
      input: L.htmlInput ? Ce : void 0
    },
    ...me
  });
  return /* @__PURE__ */ ie(_, {
    ...ae,
    children: [y != null && y !== "" && /* @__PURE__ */ C(ke, {
      htmlFor: G,
      id: X,
      ...Re,
      children: y
    }), M ? /* @__PURE__ */ C(te, {
      "aria-describedby": J,
      id: G,
      labelId: X,
      value: I,
      input: Pe,
      ...Le,
      children: a
    }) : Pe, b && /* @__PURE__ */ C(we, {
      id: J,
      ...Oe,
      children: b
    })]
  });
});
process.env.NODE_ENV !== "production" && (Il.propTypes = {
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
  inputRef: pt,
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
const Rg = Il;
function Pg(e) {
  return ue("MuiToolbar", e);
}
ce("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const $g = (e) => {
  const {
    classes: t,
    disableGutters: o,
    variant: r
  } = e;
  return pe({
    root: ["root", !o && "gutters", r]
  }, Pg, t);
}, Ig = Y("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disableGutters && t.gutters, t[o.variant]];
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
}))), Nl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  }, p = $g(u);
  return /* @__PURE__ */ C(Ig, {
    as: s,
    className: ne(p.root, i),
    ref: o,
    ownerState: u,
    ...c
  });
});
process.env.NODE_ENV !== "production" && (Nl.propTypes = {
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
const Ng = Nl, kg = fp({
  themeId: Gn
}), Mg = kg, Ag = Y(Ng)({
  width: "100%",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  flexShrink: 0
}), Dg = ({
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
  onSearchSubmit: O,
  showProfile: S = !0,
  userRole: E,
  accentColor: y = "#01584f",
  contentBackgroundColor: T = "#f2f9fc",
  navbarBackground: w = "#ff0000",
  navbarAccentColor: $ = "#000000",
  rightExtraContent: D = []
}) => {
  const B = Mg((k) => k.breakpoints.up("md")), [F, j] = x.useState(null), d = !!F, P = (k) => {
    v == null || v(k.target.value);
  }, R = (k) => {
    k.key === "Enter" && O && f && O(f);
  }, M = (k) => k ? k.charAt(0).toUpperCase() + k.slice(1).toLowerCase() : "User", N = (k) => {
    j(k.currentTarget);
  }, L = () => {
    j(null);
  }, z = (k) => {
    k == null || k(), L();
  };
  return /* @__PURE__ */ C(
    Qd,
    {
      position: "fixed",
      sx: {
        boxShadow: 0,
        background: w,
        top: "var(--template-frame-height, 0px)",
        left: 0,
        width: "100%",
        zIndex: 1,
        height: "60px",
        ...i
      },
      children: /* @__PURE__ */ ie(Ag, { variant: "dense", sx: { height: "100%" }, children: [
        /* @__PURE__ */ ie(
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
              r && !B && /* @__PURE__ */ C(
                zn,
                {
                  "aria-label": "menu",
                  onClick: o,
                  sx: {
                    color: $,
                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  },
                  children: /* @__PURE__ */ C(Ld, {})
                }
              ),
              /* @__PURE__ */ ie(
                Je,
                {
                  direction: "row",
                  sx: {
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ C(
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
                      }
                    ),
                    /* @__PURE__ */ C(
                      "img",
                      {
                        src: "/lumora-logo.svg",
                        alt: "NEXA Logo",
                        width: 24,
                        height: 24,
                        style: { flexShrink: 0 }
                      }
                    )
                  ]
                }
              ),
              b && B && /* @__PURE__ */ C(
                Rg,
                {
                  placeholder: "Search for deals or documents...",
                  value: f || "",
                  onChange: P,
                  onKeyDown: R,
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
                    startAdornment: /* @__PURE__ */ C(bm, { position: "start", children: /* @__PURE__ */ C(
                      Fd,
                      {
                        sx: { color: $ }
                      }
                    ) })
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ ie(
          Je,
          {
            direction: "row",
            sx: {
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0
            },
            children: [
              h && /* @__PURE__ */ C(
                Da,
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
                  children: /* @__PURE__ */ C(
                    zn,
                    {
                      size: "small",
                      sx: { color: $ },
                      children: /* @__PURE__ */ C(_d, {})
                    }
                  )
                }
              ),
              h && S && /* @__PURE__ */ C(
                At,
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
              S && /* @__PURE__ */ ie(Vs, { children: [
                /* @__PURE__ */ ie(
                  Je,
                  {
                    direction: "row",
                    onClick: N,
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
                      l ? /* @__PURE__ */ C(
                        Ir,
                        {
                          src: l,
                          sx: { width: 32, height: 32 }
                        }
                      ) : /* @__PURE__ */ C(
                        es,
                        {
                          sx: {
                            width: 32,
                            height: 32,
                            color: $
                          }
                        }
                      ),
                      /* @__PURE__ */ ie(
                        an,
                        {
                          sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ C(
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
                              }
                            ),
                            /* @__PURE__ */ C(
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
                                children: M(E)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ ie(
                  dl,
                  {
                    anchorEl: F,
                    open: d,
                    onClose: L,
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
                      /* @__PURE__ */ C(
                        xs,
                        {
                          onClick: () => z(p),
                          children: "Settings"
                        }
                      ),
                      /* @__PURE__ */ C(At, {}),
                      /* @__PURE__ */ ie(
                        xs,
                        {
                          onClick: () => z(m),
                          sx: {
                            color: "error.main",
                            "&:hover": {
                              color: "error.dark"
                            }
                          },
                          children: [
                            /* @__PURE__ */ C(gt, { sx: { flexGrow: 1 }, children: "Logout" }),
                            /* @__PURE__ */ C(Oa, { fontSize: "small" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              D.length !== 0 && D.map((k) => k.type === "divider" ? /* @__PURE__ */ C(
                At,
                {
                  orientation: "vertical",
                  flexItem: !0,
                  sx: {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    height: "24px",
                    alignSelf: "center"
                  }
                }
              ) : k.type === "profile" ? /* @__PURE__ */ ie(
                Je,
                {
                  direction: "row",
                  onClick: k.onClick,
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
                    k.avatar ? /* @__PURE__ */ C(
                      Ir,
                      {
                        src: k.avatar,
                        sx: { width: 32, height: 32 }
                      }
                    ) : /* @__PURE__ */ C(
                      es,
                      {
                        sx: {
                          width: 32,
                          height: 32,
                          color: $
                        }
                      }
                    ),
                    /* @__PURE__ */ ie(
                      an,
                      {
                        sx: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          minWidth: 0
                        },
                        children: [
                          /* @__PURE__ */ C(
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
                              children: k.name
                            }
                          ),
                          /* @__PURE__ */ C(
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
                              children: k.role
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ) : null)
            ]
          }
        )
      ] })
    }
  );
};
function Bg(e) {
  return ue("MuiCard", e);
}
ce("MuiCard", ["root"]);
const jg = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, Bg, t);
}, Lg = Y(Ho, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), kl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  }, c = jg(l);
  return /* @__PURE__ */ C(Lg, {
    className: ne(c.root, i),
    elevation: s ? 8 : void 0,
    ref: o,
    ownerState: l,
    ...a
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
  raised: Et(n.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const _g = kl;
function Fg(e) {
  return ue("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const zg = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, Fg, t);
}, Vg = Y("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Ml = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  }, c = zg(l);
  return /* @__PURE__ */ C(Vg, {
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
const Wg = Ml;
function Ug(e) {
  return ue("MuiButton", e);
}
const Hg = ce("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), zt = Hg, Al = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (Al.displayName = "ButtonGroupContext");
const qg = Al, Dl = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (Dl.displayName = "ButtonGroupButtonContext");
const Yg = Dl, Gg = (e) => {
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
    root: ["root", a && "loading", s, `${s}${K(t)}`, `size${K(i)}`, `${s}Size${K(i)}`, `color${K(t)}`, o && "disableElevation", r && "fullWidth", a && `loadingPosition${K(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${K(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${K(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, p = pe(u, Ug, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...p
  };
}, Bl = [{
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
}], Kg = Y(ni, {
  shouldForwardProp: (e) => Ye(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${K(o.color)}`], t[`size${K(o.size)}`], t[`${o.variant}Size${K(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth, o.loading && t.loading];
  }
})(de(({
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
    }, ...Object.entries(e.palette).filter(ut()).map(([r]) => ({
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
})), Xg = Y("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, o.loading && t.startIconLoadingStart, t[`iconSize${K(o.size)}`]];
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
  }, ...Bl]
})), Qg = Y("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, o.loading && t.endIconLoadingEnd, t[`iconSize${K(o.size)}`]];
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
  }, ...Bl]
})), Jg = Y("span", {
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
})), Is = Y("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), jl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = x.useContext(qg), i = x.useContext(Yg), s = _n(r, t), a = fe({
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
    id: O,
    loading: S = null,
    loadingIndicator: E,
    loadingPosition: y = "center",
    size: T = "medium",
    startIcon: w,
    type: $,
    variant: D = "text",
    ...B
  } = a, F = Yn(O), j = E ?? /* @__PURE__ */ C(Ua, {
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
    loading: S,
    loadingIndicator: j,
    loadingPosition: y,
    size: T,
    type: $,
    variant: D
  }, P = Gg(d), R = (w || S && y === "start") && /* @__PURE__ */ C(Xg, {
    className: P.startIcon,
    ownerState: d,
    children: w || /* @__PURE__ */ C(Is, {
      className: P.loadingIconPlaceholder,
      ownerState: d
    })
  }), M = (b || S && y === "end") && /* @__PURE__ */ C(Qg, {
    className: P.endIcon,
    ownerState: d,
    children: b || /* @__PURE__ */ C(Is, {
      className: P.loadingIconPlaceholder,
      ownerState: d
    })
  }), N = i || "", L = typeof S == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ C("span", {
      className: P.loadingWrapper,
      style: {
        display: "contents"
      },
      children: S && /* @__PURE__ */ C(Jg, {
        className: P.loadingIndicator,
        ownerState: d,
        children: j
      })
    })
  ) : null;
  return /* @__PURE__ */ ie(Kg, {
    ownerState: d,
    className: ne(r.className, P.root, p, N),
    component: u,
    disabled: m || S,
    focusRipple: !g,
    focusVisibleClassName: ne(P.focusVisible, f),
    ref: o,
    type: $,
    id: S ? F : O,
    ...B,
    classes: P,
    children: [R, y !== "end" && L, l, y === "end" && L, M]
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
const Ll = jl, Zg = $t(/* @__PURE__ */ C("path", {
  d: "m19.46 8 .79-1.75L22 5.46c.39-.18.39-.73 0-.91l-1.75-.79L19.46 2c-.18-.39-.73-.39-.91 0l-.79 1.75-1.76.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0M11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5-.79 1.75-1.75.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.73.39.91 0l.79-1.75 1.76-.79c.39-.18.39-.73 0-.91l-1.75-.79-.79-1.76c-.18-.39-.74-.39-.92 0"
}), "AutoAwesomeRounded"), _l = ({
  title: e = "",
  message: t = "",
  buttonText: o = "",
  onButtonClick: r,
  show: i = !0
}) => i ? /* @__PURE__ */ C(_g, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ ie(Wg, { children: [
  /* @__PURE__ */ C(Zg, { fontSize: "small" }),
  /* @__PURE__ */ C(gt, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ C(
    gt,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: t
    }
  ),
  /* @__PURE__ */ C(
    Ll,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: r,
      children: o
    }
  )
] }) }) : null;
var Fe = "top", et = "bottom", tt = "right", ze = "left", pi = "auto", Kn = [Fe, et, tt, ze], fn = "start", Vn = "end", ey = "clippingParents", Fl = "viewport", Rn = "popper", ty = "reference", Ns = /* @__PURE__ */ Kn.reduce(function(e, t) {
  return e.concat([t + "-" + fn, t + "-" + Vn]);
}, []), zl = /* @__PURE__ */ [].concat(Kn, [pi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + fn, t + "-" + Vn]);
}, []), ny = "beforeRead", oy = "read", ry = "afterRead", iy = "beforeMain", sy = "main", ay = "afterMain", ly = "beforeWrite", cy = "write", uy = "afterWrite", py = [ny, oy, ry, iy, sy, ay, ly, cy, uy];
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
function Ze(e) {
  var t = qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function di(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function dy(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, i = t.attributes[o] || {}, s = t.elements[o];
    !Ze(s) || !Tt(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function fy(e) {
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
      !Ze(i) || !Tt(i) || (Object.assign(i.style, l), Object.keys(s).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const my = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: dy,
  effect: fy,
  requires: ["computeStyles"]
};
function bt(e) {
  return e.split("-")[0];
}
var qt = Math.max, Ro = Math.min, mn = Math.round;
function _r() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Vl() {
  return !/^((?!chrome|android).)*safari/i.test(_r());
}
function hn(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && Ze(e) && (i = e.offsetWidth > 0 && mn(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && mn(r.height) / e.offsetHeight || 1);
  var a = Kt(e) ? qe(e) : window, l = a.visualViewport, c = !Vl() && o, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, p = (r.top + (c && l ? l.offsetTop : 0)) / s, m = r.width / i, h = r.height / s;
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
function fi(e) {
  var t = hn(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function Wl(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && di(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Pt(e) {
  return qe(e).getComputedStyle(e);
}
function hy(e) {
  return ["table", "td", "th"].indexOf(Tt(e)) >= 0;
}
function jt(e) {
  return ((Kt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Jo(e) {
  return Tt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (di(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    jt(e)
  );
}
function ks(e) {
  return !Ze(e) || // https://github.com/popperjs/popper-core/issues/837
  Pt(e).position === "fixed" ? null : e.offsetParent;
}
function gy(e) {
  var t = /firefox/i.test(_r()), o = /Trident/i.test(_r());
  if (o && Ze(e)) {
    var r = Pt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = Jo(e);
  for (di(i) && (i = i.host); Ze(i) && ["html", "body"].indexOf(Tt(i)) < 0; ) {
    var s = Pt(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Xn(e) {
  for (var t = qe(e), o = ks(e); o && hy(o) && Pt(o).position === "static"; )
    o = ks(o);
  return o && (Tt(o) === "html" || Tt(o) === "body" && Pt(o).position === "static") ? t : o || gy(e) || t;
}
function mi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bn(e, t, o) {
  return qt(e, Ro(t, o));
}
function yy(e, t, o) {
  var r = Bn(e, t, o);
  return r > o ? o : r;
}
function Ul() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Hl(e) {
  return Object.assign({}, Ul(), e);
}
function ql(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var by = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Hl(typeof t != "number" ? t : ql(t, Kn));
};
function vy(e) {
  var t, o = e.state, r = e.name, i = e.options, s = o.elements.arrow, a = o.modifiersData.popperOffsets, l = bt(o.placement), c = mi(l), u = [ze, tt].indexOf(l) >= 0, p = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = by(i.padding, o), h = fi(s), g = c === "y" ? Fe : ze, b = c === "y" ? et : tt, f = o.rects.reference[p] + o.rects.reference[c] - a[c] - o.rects.popper[p], v = a[c] - o.rects.reference[c], O = Xn(s), S = O ? c === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, E = f / 2 - v / 2, y = m[g], T = S - h[p] - m[b], w = S / 2 - h[p] / 2 + E, $ = Bn(y, w, T), D = c;
    o.modifiersData[r] = (t = {}, t[D] = $, t.centerOffset = $ - w, t);
  }
}
function xy(e) {
  var t = e.state, o = e.options, r = o.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Wl(t.elements.popper, i) && (t.elements.arrow = i));
}
const Ty = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: vy,
  effect: xy,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function gn(e) {
  return e.split("-")[1];
}
var Ey = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Oy(e, t) {
  var o = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: mn(o * i) / i || 0,
    y: mn(r * i) / i || 0
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
  var O = a.hasOwnProperty("x"), S = a.hasOwnProperty("y"), E = ze, y = Fe, T = window;
  if (u) {
    var w = Xn(o), $ = "clientHeight", D = "clientWidth";
    if (w === qe(o) && (w = jt(o), Pt(w).position !== "static" && l === "absolute" && ($ = "scrollHeight", D = "scrollWidth")), w = w, i === Fe || (i === ze || i === tt) && s === Vn) {
      y = et;
      var B = m && w === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[$]
      );
      f -= B - r.height, f *= c ? 1 : -1;
    }
    if (i === ze || (i === Fe || i === et) && s === Vn) {
      E = tt;
      var F = m && w === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[D]
      );
      g -= F - r.width, g *= c ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: l
  }, u && Ey), d = p === !0 ? Oy({
    x: g,
    y: f
  }, qe(o)) : {
    x: g,
    y: f
  };
  if (g = d.x, f = d.y, c) {
    var P;
    return Object.assign({}, j, (P = {}, P[y] = S ? "0" : "", P[E] = O ? "0" : "", P.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", P));
  }
  return Object.assign({}, j, (t = {}, t[y] = S ? f + "px" : "", t[E] = O ? g + "px" : "", t.transform = "", t));
}
function wy(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, i = r === void 0 ? !0 : r, s = o.adaptive, a = s === void 0 ? !0 : s, l = o.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: bt(t.placement),
    variation: gn(t.placement),
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
const Cy = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: wy,
  data: {}
};
var so = {
  passive: !0
};
function Sy(e) {
  var t = e.state, o = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, c = qe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(p) {
    p.addEventListener("scroll", o.update, so);
  }), l && c.addEventListener("resize", o.update, so), function() {
    s && u.forEach(function(p) {
      p.removeEventListener("scroll", o.update, so);
    }), l && c.removeEventListener("resize", o.update, so);
  };
}
const Ry = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Sy,
  data: {}
};
var Py = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function mo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Py[t];
  });
}
var $y = {
  start: "end",
  end: "start"
};
function As(e) {
  return e.replace(/start|end/g, function(t) {
    return $y[t];
  });
}
function hi(e) {
  var t = qe(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function gi(e) {
  return hn(jt(e)).left + hi(e).scrollLeft;
}
function Iy(e, t) {
  var o = qe(e), r = jt(e), i = o.visualViewport, s = r.clientWidth, a = r.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = Vl();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: l + gi(e),
    y: c
  };
}
function Ny(e) {
  var t, o = jt(e), r = hi(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = qt(o.scrollWidth, o.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = qt(o.scrollHeight, o.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + gi(e), c = -r.scrollTop;
  return Pt(i || o).direction === "rtl" && (l += qt(o.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function yi(e) {
  var t = Pt(e), o = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + i + r);
}
function Yl(e) {
  return ["html", "body", "#document"].indexOf(Tt(e)) >= 0 ? e.ownerDocument.body : Ze(e) && yi(e) ? e : Yl(Jo(e));
}
function jn(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = Yl(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = qe(r), a = i ? [s].concat(s.visualViewport || [], yi(r) ? r : []) : r, l = t.concat(a);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(jn(Jo(a)))
  );
}
function Fr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ky(e, t) {
  var o = hn(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Ds(e, t, o) {
  return t === Fl ? Fr(Iy(e, o)) : Kt(t) ? ky(t, o) : Fr(Ny(jt(e)));
}
function My(e) {
  var t = jn(Jo(e)), o = ["absolute", "fixed"].indexOf(Pt(e).position) >= 0, r = o && Ze(e) ? Xn(e) : e;
  return Kt(r) ? t.filter(function(i) {
    return Kt(i) && Wl(i, r) && Tt(i) !== "body";
  }) : [];
}
function Ay(e, t, o, r) {
  var i = t === "clippingParents" ? My(e) : [].concat(t), s = [].concat(i, [o]), a = s[0], l = s.reduce(function(c, u) {
    var p = Ds(e, u, r);
    return c.top = qt(p.top, c.top), c.right = Ro(p.right, c.right), c.bottom = Ro(p.bottom, c.bottom), c.left = qt(p.left, c.left), c;
  }, Ds(e, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Gl(e) {
  var t = e.reference, o = e.element, r = e.placement, i = r ? bt(r) : null, s = r ? gn(r) : null, a = t.x + t.width / 2 - o.width / 2, l = t.y + t.height / 2 - o.height / 2, c;
  switch (i) {
    case Fe:
      c = {
        x: a,
        y: t.y - o.height
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
    case ze:
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
  var u = i ? mi(i) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (s) {
      case fn:
        c[u] = c[u] - (t[p] / 2 - o[p] / 2);
        break;
      case Vn:
        c[u] = c[u] + (t[p] / 2 - o[p] / 2);
        break;
    }
  }
  return c;
}
function Wn(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = r === void 0 ? e.placement : r, s = o.strategy, a = s === void 0 ? e.strategy : s, l = o.boundary, c = l === void 0 ? ey : l, u = o.rootBoundary, p = u === void 0 ? Fl : u, m = o.elementContext, h = m === void 0 ? Rn : m, g = o.altBoundary, b = g === void 0 ? !1 : g, f = o.padding, v = f === void 0 ? 0 : f, O = Hl(typeof v != "number" ? v : ql(v, Kn)), S = h === Rn ? ty : Rn, E = e.rects.popper, y = e.elements[b ? S : h], T = Ay(Kt(y) ? y : y.contextElement || jt(e.elements.popper), c, p, a), w = hn(e.elements.reference), $ = Gl({
    reference: w,
    element: E,
    strategy: "absolute",
    placement: i
  }), D = Fr(Object.assign({}, E, $)), B = h === Rn ? D : w, F = {
    top: T.top - B.top + O.top,
    bottom: B.bottom - T.bottom + O.bottom,
    left: T.left - B.left + O.left,
    right: B.right - T.right + O.right
  }, j = e.modifiersData.offset;
  if (h === Rn && j) {
    var d = j[i];
    Object.keys(F).forEach(function(P) {
      var R = [tt, et].indexOf(P) >= 0 ? 1 : -1, M = [Fe, et].indexOf(P) >= 0 ? "y" : "x";
      F[P] += d[M] * R;
    });
  }
  return F;
}
function Dy(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, i = o.boundary, s = o.rootBoundary, a = o.padding, l = o.flipVariations, c = o.allowedAutoPlacements, u = c === void 0 ? zl : c, p = gn(r), m = p ? l ? Ns : Ns.filter(function(b) {
    return gn(b) === p;
  }) : Kn, h = m.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  h.length === 0 && (h = m);
  var g = h.reduce(function(b, f) {
    return b[f] = Wn(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[bt(f)], b;
  }, {});
  return Object.keys(g).sort(function(b, f) {
    return g[b] - g[f];
  });
}
function By(e) {
  if (bt(e) === pi)
    return [];
  var t = mo(e);
  return [As(e), t, As(t)];
}
function jy(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = o.mainAxis, s = i === void 0 ? !0 : i, a = o.altAxis, l = a === void 0 ? !0 : a, c = o.fallbackPlacements, u = o.padding, p = o.boundary, m = o.rootBoundary, h = o.altBoundary, g = o.flipVariations, b = g === void 0 ? !0 : g, f = o.allowedAutoPlacements, v = t.options.placement, O = bt(v), S = O === v, E = c || (S || !b ? [mo(v)] : By(v)), y = [v].concat(E).reduce(function(H, G) {
      return H.concat(bt(G) === pi ? Dy(t, {
        placement: G,
        boundary: p,
        rootBoundary: m,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: f
      }) : G);
    }, []), T = t.rects.reference, w = t.rects.popper, $ = /* @__PURE__ */ new Map(), D = !0, B = y[0], F = 0; F < y.length; F++) {
      var j = y[F], d = bt(j), P = gn(j) === fn, R = [Fe, et].indexOf(d) >= 0, M = R ? "width" : "height", N = Wn(t, {
        placement: j,
        boundary: p,
        rootBoundary: m,
        altBoundary: h,
        padding: u
      }), L = R ? P ? tt : ze : P ? et : Fe;
      T[M] > w[M] && (L = mo(L));
      var z = mo(L), k = [];
      if (s && k.push(N[d] <= 0), l && k.push(N[L] <= 0, N[z] <= 0), k.every(function(H) {
        return H;
      })) {
        B = j, D = !1;
        break;
      }
      $.set(j, k);
    }
    if (D)
      for (var I = b ? 3 : 1, V = function(G) {
        var J = y.find(function(X) {
          var Z = $.get(X);
          if (Z)
            return Z.slice(0, G).every(function(Q) {
              return Q;
            });
        });
        if (J)
          return B = J, "break";
      }, q = I; q > 0; q--) {
        var U = V(q);
        if (U === "break")
          break;
      }
    t.placement !== B && (t.modifiersData[r]._skip = !0, t.placement = B, t.reset = !0);
  }
}
const Ly = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: jy,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Bs(e, t, o) {
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
function js(e) {
  return [Fe, tt, et, ze].some(function(t) {
    return e[t] >= 0;
  });
}
function _y(e) {
  var t = e.state, o = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = Wn(t, {
    elementContext: "reference"
  }), l = Wn(t, {
    altBoundary: !0
  }), c = Bs(a, r), u = Bs(l, i, s), p = js(c), m = js(u);
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
const Fy = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _y
};
function zy(e, t, o) {
  var r = bt(e), i = [ze, Fe].indexOf(r) >= 0 ? -1 : 1, s = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * i, [ze, tt].indexOf(r) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function Vy(e) {
  var t = e.state, o = e.options, r = e.name, i = o.offset, s = i === void 0 ? [0, 0] : i, a = zl.reduce(function(p, m) {
    return p[m] = zy(m, t.rects, s), p;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const Wy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Vy
};
function Uy(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Gl({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Hy = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Uy,
  data: {}
};
function qy(e) {
  return e === "x" ? "y" : "x";
}
function Yy(e) {
  var t = e.state, o = e.options, r = e.name, i = o.mainAxis, s = i === void 0 ? !0 : i, a = o.altAxis, l = a === void 0 ? !1 : a, c = o.boundary, u = o.rootBoundary, p = o.altBoundary, m = o.padding, h = o.tether, g = h === void 0 ? !0 : h, b = o.tetherOffset, f = b === void 0 ? 0 : b, v = Wn(t, {
    boundary: c,
    rootBoundary: u,
    padding: m,
    altBoundary: p
  }), O = bt(t.placement), S = gn(t.placement), E = !S, y = mi(O), T = qy(y), w = t.modifiersData.popperOffsets, $ = t.rects.reference, D = t.rects.popper, B = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, F = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, d = {
    x: 0,
    y: 0
  };
  if (w) {
    if (s) {
      var P, R = y === "y" ? Fe : ze, M = y === "y" ? et : tt, N = y === "y" ? "height" : "width", L = w[y], z = L + v[R], k = L - v[M], I = g ? -D[N] / 2 : 0, V = S === fn ? $[N] : D[N], q = S === fn ? -D[N] : -$[N], U = t.elements.arrow, H = g && U ? fi(U) : {
        width: 0,
        height: 0
      }, G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ul(), J = G[R], X = G[M], Z = Bn(0, $[N], H[N]), Q = E ? $[N] / 2 - I - Z - J - F.mainAxis : V - Z - J - F.mainAxis, W = E ? -$[N] / 2 + I + Z + X + F.mainAxis : q + Z + X + F.mainAxis, ee = t.elements.arrow && Xn(t.elements.arrow), _ = ee ? y === "y" ? ee.clientTop || 0 : ee.clientLeft || 0 : 0, ae = (P = j == null ? void 0 : j[y]) != null ? P : 0, oe = L + Q - ae - _, me = L + W - ae, ke = Bn(g ? Ro(z, oe) : z, L, g ? qt(k, me) : k);
      w[y] = ke, d[y] = ke - L;
    }
    if (l) {
      var Re, Ce = y === "x" ? Fe : ze, Ae = y === "x" ? et : tt, we = w[T], Oe = T === "y" ? "height" : "width", te = we + v[Ce], Le = we - v[Ae], Pe = [Fe, ze].indexOf(O) !== -1, ot = (Re = j == null ? void 0 : j[T]) != null ? Re : 0, Ge = Pe ? te : we - $[Oe] - D[Oe] - ot + F.altAxis, rt = Pe ? we + $[Oe] + D[Oe] - ot - F.altAxis : Le, dt = g && Pe ? yy(Ge, we, rt) : Bn(g ? Ge : te, we, g ? rt : Le);
      w[T] = dt, d[T] = dt - we;
    }
    t.modifiersData[r] = d;
  }
}
const Gy = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Yy,
  requiresIfExists: ["offset"]
};
function Ky(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Xy(e) {
  return e === qe(e) || !Ze(e) ? hi(e) : Ky(e);
}
function Qy(e) {
  var t = e.getBoundingClientRect(), o = mn(t.width) / e.offsetWidth || 1, r = mn(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function Jy(e, t, o) {
  o === void 0 && (o = !1);
  var r = Ze(t), i = Ze(t) && Qy(t), s = jt(t), a = hn(e, i, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((Tt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  yi(s)) && (l = Xy(t)), Ze(t) ? (c = hn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = gi(s))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function Zy(e) {
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
function eb(e) {
  var t = Zy(e);
  return py.reduce(function(o, r) {
    return o.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function tb(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function nb(e) {
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
var Ls = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function _s() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ob(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, i = t.defaultOptions, s = i === void 0 ? Ls : i;
  return function(l, c, u) {
    u === void 0 && (u = s);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ls, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], h = !1, g = {
      state: p,
      setOptions: function(O) {
        var S = typeof O == "function" ? O(p.options) : O;
        f(), p.options = Object.assign({}, s, p.options, S), p.scrollParents = {
          reference: Kt(l) ? jn(l) : l.contextElement ? jn(l.contextElement) : [],
          popper: jn(c)
        };
        var E = eb(nb([].concat(r, p.options.modifiers)));
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
          var O = p.elements, S = O.reference, E = O.popper;
          if (_s(S, E)) {
            p.rects = {
              reference: Jy(S, Xn(E), p.options.strategy === "fixed"),
              popper: fi(E)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(F) {
              return p.modifiersData[F.name] = Object.assign({}, F.data);
            });
            for (var y = 0; y < p.orderedModifiers.length; y++) {
              if (p.reset === !0) {
                p.reset = !1, y = -1;
                continue;
              }
              var T = p.orderedModifiers[y], w = T.fn, $ = T.options, D = $ === void 0 ? {} : $, B = T.name;
              typeof w == "function" && (p = w({
                state: p,
                options: D,
                name: B,
                instance: g
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: tb(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(p);
        });
      }),
      destroy: function() {
        f(), h = !0;
      }
    };
    if (!_s(l, c))
      return g;
    g.setOptions(u).then(function(v) {
      !h && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function b() {
      p.orderedModifiers.forEach(function(v) {
        var O = v.name, S = v.options, E = S === void 0 ? {} : S, y = v.effect;
        if (typeof y == "function") {
          var T = y({
            state: p,
            name: O,
            instance: g,
            options: E
          }), w = function() {
          };
          m.push(T || w);
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
var rb = [Ry, Hy, Cy, my, Wy, Ly, Gy, Ty, Fy], ib = /* @__PURE__ */ ob({
  defaultModifiers: rb
});
function sb(e) {
  return ue("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function ab(e, t) {
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
function Po(e) {
  return typeof e == "function" ? e() : e;
}
function Zo(e) {
  return e.nodeType !== void 0;
}
function lb(e) {
  return !Zo(e);
}
const cb = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, sb, t);
}, ub = {}, pb = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
  } = t, O = x.useRef(null), S = Be(O, o), E = x.useRef(null), y = Be(E, m), T = x.useRef(y);
  lt(() => {
    T.current = y;
  }, [y]), x.useImperativeHandle(m, () => E.current, []);
  const w = ab(u, s), [$, D] = x.useState(w), [B, F] = x.useState(Po(r));
  x.useEffect(() => {
    E.current && E.current.forceUpdate();
  }), x.useEffect(() => {
    r && F(Po(r));
  }, [r]), lt(() => {
    if (!B || !c)
      return;
    const M = (z) => {
      D(z.placement);
    };
    if (process.env.NODE_ENV !== "production" && B && Zo(B) && B.nodeType === 1) {
      const z = B.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && z.top === 0 && z.left === 0 && z.right === 0 && z.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let N = [{
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
        M(z);
      }
    }];
    l != null && (N = N.concat(l)), p && p.modifiers != null && (N = N.concat(p.modifiers));
    const L = ib(B, O.current, {
      placement: w,
      ...p,
      modifiers: N
    });
    return T.current(L), () => {
      L.destroy(), T.current(null);
    };
  }, [B, a, l, c, p, w]);
  const j = {
    placement: $
  };
  b !== null && (j.TransitionProps = b);
  const d = cb(t), P = g.root ?? "div", R = Ka({
    elementType: P,
    externalSlotProps: h.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: d.root
  });
  return /* @__PURE__ */ C(P, {
    ...R,
    children: typeof i == "function" ? i(j) : i
  });
}), Kl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    popperOptions: h = ub,
    popperRef: g,
    style: b,
    transition: f = !1,
    slotProps: v = {},
    slots: O = {},
    ...S
  } = t, [E, y] = x.useState(!0), T = () => {
    y(!1);
  }, w = () => {
    y(!0);
  };
  if (!c && !p && (!f || E))
    return null;
  let $;
  if (s)
    $ = s;
  else if (r) {
    const F = Po(r);
    $ = F && Zo(F) ? He(F).body : He(null).body;
  }
  const D = !p && c && (!f || E) ? "none" : void 0, B = f ? {
    in: p,
    onEnter: T,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ C(rl, {
    disablePortal: l,
    container: $,
    children: /* @__PURE__ */ C(pb, {
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
      slots: O,
      ...S,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: D,
        ...b
      },
      TransitionProps: B,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Kl.propTypes = {
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
  anchorEl: Et(n.oneOfType([xt, n.object, n.func]), (e) => {
    if (e.open) {
      const t = Po(e.anchorEl);
      if (t && Zo(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || lb(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: n.oneOfType([xt, n.func]),
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
  popperRef: pt,
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
const db = Kl, fb = Y(db, {
  name: "MuiPopper",
  slot: "Root"
})({}), Xl = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = Uo(), i = fe({
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
    transition: O,
    slots: S,
    slotProps: E,
    ...y
  } = i, T = (S == null ? void 0 : S.root) ?? (l == null ? void 0 : l.Root), w = {
    anchorEl: s,
    container: u,
    disablePortal: p,
    keepMounted: m,
    modifiers: h,
    open: g,
    placement: b,
    popperOptions: f,
    popperRef: v,
    transition: O,
    ...y
  };
  return /* @__PURE__ */ C(fb, {
    as: a,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: T
    },
    slotProps: E ?? c,
    ...w,
    ref: o
  });
});
process.env.NODE_ENV !== "production" && (Xl.propTypes = {
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
  anchorEl: n.oneOfType([xt, n.object, n.func]),
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
  container: n.oneOfType([xt, n.func]),
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
  popperRef: pt,
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
const Ql = Xl;
function mb(e) {
  return ue("MuiTooltip", e);
}
const hb = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Ne = hb;
function gb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const yb = (e) => {
  const {
    classes: t,
    disableInteractive: o,
    arrow: r,
    touch: i,
    placement: s
  } = e, a = {
    popper: ["popper", !o && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", i && "touch", `tooltipPlacement${K(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return pe(a, mb, t);
}, bb = Y(Ql, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.popper, !o.disableInteractive && t.popperInteractive, o.arrow && t.popperArrow, !o.open && t.popperClose];
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
      [`&[data-popper-placement*="bottom"] .${Ne.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Ne.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Ne.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Ne.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${Ne.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Ne.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ne.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ne.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), vb = Y("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.tooltip, o.touch && t.touch, o.arrow && t.tooltipArrow, t[`tooltipPlacement${K(o.placement.split("-")[0])}`]];
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
  [`.${Ne.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Ne.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Ne.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Ne.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${gb(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${Ne.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Ne.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Ne.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Ne.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Ne.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Ne.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Ne.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Ne.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ne.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ne.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), xb = Y("span", {
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
let ao = !1;
const Fs = new qo();
let Pn = {
  x: 0,
  y: 0
};
function lo(e, t) {
  return (o, ...r) => {
    t && t(o, ...r), e(o, ...r);
  };
}
const Jl = /* @__PURE__ */ x.forwardRef(function(t, o) {
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
    disableInteractive: h = !1,
    disableTouchListener: g = !1,
    enterDelay: b = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: v = 700,
    followCursor: O = !1,
    id: S,
    leaveDelay: E = 0,
    leaveTouchDelay: y = 1500,
    onClose: T,
    onOpen: w,
    open: $,
    placement: D = "bottom",
    PopperComponent: B,
    PopperProps: F = {},
    slotProps: j = {},
    slots: d = {},
    title: P,
    TransitionComponent: R,
    TransitionProps: M,
    ...N
  } = r, L = /* @__PURE__ */ x.isValidElement(s) ? s : /* @__PURE__ */ C("span", {
    children: s
  }), z = yn(), k = Uo(), [I, V] = x.useState(), [q, U] = x.useState(null), H = x.useRef(!1), G = h || O, J = ln(), X = ln(), Z = ln(), Q = ln(), [W, ee] = Pr({
    controlled: $,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let _ = W;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: le
    } = x.useRef($ !== void 0);
    x.useEffect(() => {
      I && I.disabled && !le && P !== "" && I.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [P, I, le]);
  }
  const ae = Yn(S), oe = x.useRef(), me = Rt(() => {
    oe.current !== void 0 && (document.body.style.WebkitUserSelect = oe.current, oe.current = void 0), Q.clear();
  });
  x.useEffect(() => me, [me]);
  const ke = (le) => {
    Fs.clear(), ao = !0, ee(!0), w && !_ && w(le);
  }, Re = Rt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (le) => {
      Fs.start(800 + E, () => {
        ao = !1;
      }), ee(!1), T && _ && T(le), J.start(z.transitions.duration.shortest, () => {
        H.current = !1;
      });
    }
  ), Ce = (le) => {
    H.current && le.type !== "touchstart" || (I && I.removeAttribute("title"), X.clear(), Z.clear(), b || ao && f ? X.start(ao ? f : b, () => {
      ke(le);
    }) : ke(le));
  }, Ae = (le) => {
    X.clear(), Z.start(E, () => {
      Re(le);
    });
  }, [, we] = x.useState(!1), Oe = (le) => {
    xo(le.target) || (we(!1), Ae(le));
  }, te = (le) => {
    I || V(le.currentTarget), xo(le.target) && (we(!0), Ce(le));
  }, Le = (le) => {
    H.current = !0;
    const it = L.props;
    it.onTouchStart && it.onTouchStart(le);
  }, Pe = (le) => {
    Le(le), Z.clear(), J.clear(), me(), oe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(v, () => {
      document.body.style.WebkitUserSelect = oe.current, Ce(le);
    });
  }, ot = (le) => {
    L.props.onTouchEnd && L.props.onTouchEnd(le), me(), Z.start(y, () => {
      Re(le);
    });
  };
  x.useEffect(() => {
    if (!_)
      return;
    function le(it) {
      it.key === "Escape" && Re(it);
    }
    return document.addEventListener("keydown", le), () => {
      document.removeEventListener("keydown", le);
    };
  }, [Re, _]);
  const Ge = Be(Qt(L), V, o);
  !P && P !== 0 && (_ = !1);
  const rt = x.useRef(), dt = (le) => {
    const it = L.props;
    it.onMouseMove && it.onMouseMove(le), Pn = {
      x: le.clientX,
      y: le.clientY
    }, rt.current && rt.current.update();
  }, Ve = {}, Ot = typeof P == "string";
  u ? (Ve.title = !_ && Ot && !m ? P : null, Ve["aria-describedby"] = _ ? ae : null) : (Ve["aria-label"] = Ot ? P : null, Ve["aria-labelledby"] = _ && !Ot ? ae : null);
  const se = {
    ...Ve,
    ...N,
    ...L.props,
    className: ne(N.className, L.props.className),
    onTouchStart: Le,
    ref: Ge,
    ...O ? {
      onMouseMove: dt
    } : {}
  };
  process.env.NODE_ENV !== "production" && (se["data-mui-internal-clone-element"] = !0, x.useEffect(() => {
    I && !I.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [I]));
  const Ke = {};
  g || (se.onTouchStart = Pe, se.onTouchEnd = ot), m || (se.onMouseOver = lo(Ce, se.onMouseOver), se.onMouseLeave = lo(Ae, se.onMouseLeave), G || (Ke.onMouseOver = Ce, Ke.onMouseLeave = Ae)), p || (se.onFocus = lo(te, se.onFocus), se.onBlur = lo(Oe, se.onBlur), G || (Ke.onFocus = te, Ke.onBlur = Oe)), process.env.NODE_ENV !== "production" && L.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${L.props.title}\` or the Tooltip component.`].join(`
`));
  const _e = {
    ...r,
    isRtl: k,
    arrow: i,
    disableInteractive: G,
    placement: D,
    PopperComponentProp: B,
    touch: H.current
  }, We = typeof j.popper == "function" ? j.popper(_e) : j.popper, Qn = x.useMemo(() => {
    var it, bi;
    let le = [{
      name: "arrow",
      enabled: !!q,
      options: {
        element: q,
        padding: 4
      }
    }];
    return (it = F.popperOptions) != null && it.modifiers && (le = le.concat(F.popperOptions.modifiers)), (bi = We == null ? void 0 : We.popperOptions) != null && bi.modifiers && (le = le.concat(We.popperOptions.modifiers)), {
      ...F.popperOptions,
      ...We == null ? void 0 : We.popperOptions,
      modifiers: le
    };
  }, [q, F.popperOptions, We == null ? void 0 : We.popperOptions]), Jt = yb(_e), Jn = typeof j.transition == "function" ? j.transition(_e) : j.transition, Lt = {
    slots: {
      popper: l.Popper,
      transition: l.Transition ?? R,
      tooltip: l.Tooltip,
      arrow: l.Arrow,
      ...d
    },
    slotProps: {
      arrow: j.arrow ?? c.arrow,
      popper: {
        ...F,
        ...We ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: j.tooltip ?? c.tooltip,
      transition: {
        ...M,
        ...Jn ?? c.transition
      }
    }
  }, [Zn, re] = xe("popper", {
    elementType: bb,
    externalForwardedProps: Lt,
    ownerState: _e,
    className: ne(Jt.popper, F == null ? void 0 : F.className)
  }), [he, De] = xe("transition", {
    elementType: ol,
    externalForwardedProps: Lt,
    ownerState: _e
  }), [Nt, eo] = xe("tooltip", {
    elementType: vb,
    className: Jt.tooltip,
    externalForwardedProps: Lt,
    ownerState: _e
  }), [ic, sc] = xe("arrow", {
    elementType: xb,
    className: Jt.arrow,
    externalForwardedProps: Lt,
    ownerState: _e,
    ref: U
  });
  return /* @__PURE__ */ ie(x.Fragment, {
    children: [/* @__PURE__ */ x.cloneElement(L, se), /* @__PURE__ */ C(Zn, {
      as: B ?? Ql,
      placement: D,
      anchorEl: O ? {
        getBoundingClientRect: () => ({
          top: Pn.y,
          left: Pn.x,
          right: Pn.x,
          bottom: Pn.y,
          width: 0,
          height: 0
        })
      } : I,
      popperRef: rt,
      open: I ? _ : !1,
      id: ae,
      transition: !0,
      ...Ke,
      ...re,
      popperOptions: Qn,
      children: ({
        TransitionProps: le
      }) => /* @__PURE__ */ C(he, {
        timeout: z.transitions.duration.shorter,
        ...le,
        ...De,
        children: /* @__PURE__ */ ie(Nt, {
          ...eo,
          children: [P, i ? /* @__PURE__ */ C(ic, {
            ...sc
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Jl.propTypes = {
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
  children: bn.isRequired,
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
const zs = Jl, Zl = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: o,
  onLinkClick: r,
  accentColor: i = "#01584f"
}) => {
  const s = (a) => {
    r && r(a);
  };
  return /* @__PURE__ */ ie(
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
        e.map((a, l) => /* @__PURE__ */ ie(x.Fragment, { children: [
          /* @__PURE__ */ C(zs, { title: a.text, placement: "right", arrow: !0, children: /* @__PURE__ */ C(
            zn,
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
          l < e.length - 1 && /* @__PURE__ */ C(an, { sx: { width: "100%", display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ C(At, { sx: { width: "60%", borderColor: "divider" } }) })
        ] }, l)),
        t.length > 0 && /* @__PURE__ */ ie(Vs, { children: [
          /* @__PURE__ */ C(an, { sx: { width: "100%", my: 2, display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ C(At, { sx: { width: "60%", borderColor: "divider" } }) }),
          /* @__PURE__ */ C(an, { sx: { mt: "auto", pb: 2 }, children: /* @__PURE__ */ C(Je, { gap: 1, alignItems: "center", children: t.map((a, l) => /* @__PURE__ */ ie(x.Fragment, { children: [
            /* @__PURE__ */ C(zs, { title: a.text, placement: "right", arrow: !0, children: /* @__PURE__ */ C(
              zn,
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
            l < t.length - 1 && /* @__PURE__ */ C(an, { sx: { width: "100%", display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ C(At, { sx: { width: "60%", borderColor: "divider" } }) })
          ] }, l)) }) })
        ] })
      ]
    }
  );
}, Tb = $t(/* @__PURE__ */ C("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z"
}), "NotificationsRounded");
function Eb(e, t, o) {
  const r = t.getBoundingClientRect(), i = o && o.getBoundingClientRect(), s = ct(t);
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
function ec(e) {
  return typeof e == "function" ? e() : e;
}
function co(e, t, o) {
  const r = ec(o), i = Eb(e, t, r);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const tc = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = yn(), i = {
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
    onExited: O,
    onExiting: S,
    style: E,
    timeout: y = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Zr,
    ...w
  } = t, $ = x.useRef(null), D = Be(Qt(c), $, o), B = (z) => (k) => {
    z && (k === void 0 ? z($.current) : z($.current, k));
  }, F = B((z, k) => {
    co(p, z, u), oi(z), g && g(z, k);
  }), j = B((z, k) => {
    const I = pn({
      timeout: y,
      style: E,
      easing: m
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = r.transitions.create("-webkit-transform", {
      ...I
    }), z.style.transition = r.transitions.create("transform", {
      ...I
    }), z.style.webkitTransform = "none", z.style.transform = "none", f && f(z, k);
  }), d = B(b), P = B(S), R = B((z) => {
    const k = pn({
      timeout: y,
      style: E,
      easing: m
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = r.transitions.create("-webkit-transform", k), z.style.transition = r.transitions.create("transform", k), co(p, z, u), v && v(z);
  }), M = B((z) => {
    z.style.webkitTransition = "", z.style.transition = "", O && O(z);
  }), N = (z) => {
    a && a($.current, z);
  }, L = x.useCallback(() => {
    $.current && co(p, $.current, u);
  }, [p, u]);
  return x.useEffect(() => {
    if (h || p === "down" || p === "right")
      return;
    const z = Xr(() => {
      $.current && co(p, $.current, u);
    }), k = ct($.current);
    return k.addEventListener("resize", z), () => {
      z.clear(), k.removeEventListener("resize", z);
    };
  }, [p, h, u]), x.useEffect(() => {
    h || L();
  }, [h, L]), /* @__PURE__ */ C(T, {
    nodeRef: $,
    onEnter: F,
    onEntered: d,
    onEntering: j,
    onExit: R,
    onExited: M,
    onExiting: P,
    addEndListener: N,
    appear: l,
    in: h,
    timeout: y,
    ...w,
    children: (z, {
      ownerState: k,
      ...I
    }) => /* @__PURE__ */ x.cloneElement(c, {
      ref: D,
      style: {
        visibility: z === "exited" && !h ? "hidden" : void 0,
        ...E,
        ...c.props.style
      },
      ...I
    })
  });
});
process.env.NODE_ENV !== "production" && (tc.propTypes = {
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
  children: bn.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Et(n.oneOfType([xt, n.func]), (e) => {
    if (e.open) {
      const t = ec(e.container);
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
const Ob = tc;
function wb(e) {
  return ue("MuiDrawer", e);
}
ce("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const nc = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, (o.variant === "permanent" || o.variant === "persistent") && t.docked, t.modal];
}, Cb = (e) => {
  const {
    classes: t,
    anchor: o,
    variant: r
  } = e, i = {
    root: ["root", `anchor${K(o)}`],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${K(o)}`, r !== "temporary" && `paperAnchorDocked${K(o)}`]
  };
  return pe(i, wb, t);
}, Sb = Y(ll, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: nc
})(de(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), Rb = Y("div", {
  shouldForwardProp: Ye,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: nc
})({
  flex: "0 0 auto"
}), Pb = Y(Ho, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`paperAnchor${K(o.anchor)}`], o.variant !== "temporary" && t[`paperAnchorDocked${K(o.anchor)}`]];
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
}))), oc = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function $b(e) {
  return ["left", "right"].includes(e);
}
function Ib({
  direction: e
}, t) {
  return e === "rtl" && $b(t) ? oc[t] : t;
}
const rc = /* @__PURE__ */ x.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiDrawer"
  }), i = yn(), s = Uo(), a = {
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
    PaperProps: O = {},
    SlideProps: S,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E,
    transitionDuration: y = a,
    variant: T = "temporary",
    slots: w = {},
    slotProps: $ = {},
    ...D
  } = r, B = x.useRef(!1);
  x.useEffect(() => {
    B.current = !0;
  }, []);
  const F = Ib({
    direction: s ? "rtl" : "ltr"
  }, l), d = {
    ...r,
    anchor: l,
    elevation: m,
    open: v,
    variant: T,
    ...D
  }, P = Cb(d), R = {
    slots: {
      transition: E,
      ...w
    },
    slotProps: {
      paper: O,
      transition: S,
      ...$,
      backdrop: Ea($.backdrop || {
        ...c,
        ...g
      }, {
        transitionDuration: y
      })
    }
  }, [M, N] = xe("root", {
    ref: o,
    elementType: Sb,
    className: ne(P.root, P.modal, p),
    shouldForwardComponentProp: !0,
    ownerState: d,
    externalForwardedProps: {
      ...R,
      ...D,
      ...b
    },
    additionalProps: {
      open: v,
      onClose: f,
      hideBackdrop: h,
      slots: {
        backdrop: R.slots.backdrop
      },
      slotProps: {
        backdrop: R.slotProps.backdrop
      }
    }
  }), [L, z] = xe("paper", {
    elementType: Pb,
    shouldForwardComponentProp: !0,
    className: ne(P.paper, O.className),
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: {
      elevation: T === "temporary" ? m : 0,
      square: !0,
      ...T === "temporary" && {
        role: "dialog",
        "aria-modal": "true"
      }
    }
  }), [k, I] = xe("docked", {
    elementType: Rb,
    ref: o,
    className: ne(P.root, P.docked, p),
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: D
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [V, q] = xe("transition", {
    elementType: Ob,
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: {
      in: v,
      direction: oc[F],
      timeout: y,
      appear: B.current
    }
  }), U = /* @__PURE__ */ C(L, {
    ...z,
    children: u
  });
  if (T === "permanent")
    return /* @__PURE__ */ C(k, {
      ...I,
      children: U
    });
  const H = /* @__PURE__ */ C(V, {
    ...q,
    children: U
  });
  return T === "persistent" ? /* @__PURE__ */ C(k, {
    ...I,
    children: H
  }) : /* @__PURE__ */ C(M, {
    ...N,
    children: H
  });
});
process.env.NODE_ENV !== "production" && (rc.propTypes = {
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
  elevation: Qr,
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
const Nb = rc, kb = ({
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
}) => /* @__PURE__ */ C(
  Nb,
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
    children: /* @__PURE__ */ ie(
      Je,
      {
        sx: {
          maxWidth: "70dvw",
          height: "100%"
        },
        children: [
          /* @__PURE__ */ ie(Je, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
            /* @__PURE__ */ ie(
              Je,
              {
                direction: "row",
                sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                children: [
                  /* @__PURE__ */ C(
                    Ir,
                    {
                      sizes: "small",
                      alt: a,
                      src: l,
                      sx: { width: 24, height: 24 }
                    }
                  ),
                  /* @__PURE__ */ C(gt, { component: "p", variant: "h6", children: a })
                ]
              }
            ),
            u && /* @__PURE__ */ C(
              Da,
              {
                color: "error",
                variant: "dot",
                invisible: p === 0,
                sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                children: /* @__PURE__ */ C(zn, { size: "small", children: /* @__PURE__ */ C(Tb, {}) })
              }
            )
          ] }),
          /* @__PURE__ */ C(At, {}),
          /* @__PURE__ */ ie(Je, { sx: { flexGrow: 1 }, children: [
            /* @__PURE__ */ C(
              Zl,
              {
                mainLinks: o,
                secondaryLinks: r,
                activePath: i,
                onLinkClick: (b) => {
                  s == null || s(b), t();
                },
                accentColor: h
              }
            ),
            /* @__PURE__ */ C(At, {})
          ] }),
          (m == null ? void 0 : m.show) && /* @__PURE__ */ C(_l, { ...m }),
          /* @__PURE__ */ C(Je, { sx: { p: 2 }, children: /* @__PURE__ */ C(
            Ll,
            {
              variant: "outlined",
              fullWidth: !0,
              startIcon: /* @__PURE__ */ C(Oa, {}),
              onClick: c,
              children: "Logout"
            }
          ) })
        ]
      }
    )
  }
), Vb = ({
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
  showNotifications: O = !0,
  notificationCount: S = 0,
  showSearchbar: E = !0,
  searchValue: y,
  onSearchChange: T,
  onSearchSubmit: w,
  showProfile: $ = !0,
  userRole: D,
  alertProps: B,
  style: F,
  headerStyles: j,
  sidebarStyles: d,
  contentStyles: P,
  accentColor: R = "#01584f",
  contentBackgroundColor: M = "#f2f9fc",
  navbarBackground: N = "#ffffff",
  navbarAccentColor: L = "#000000",
  GlobalChatSidebar: z,
  useChatSidebar: k,
  rightExtraContent: I
}) => {
  const V = cc(), q = uc(V.breakpoints.down("md")), [U, H] = tr(!1), [G, J] = tr(!0), [X, Z] = tr(!1), Q = k == null ? void 0 : k(), W = (Q == null ? void 0 : Q.isOpen) ?? !1, ee = () => {
    H(!U);
  }, _ = () => {
    H(!1);
  };
  return nr(() => {
    (() => {
      try {
        if (!localStorage.getItem("lumoraRefreshToken")) {
          console.log("No session found, redirecting to login"), window.location.href = "/login";
          return;
        }
        Z(!0);
      } catch (oe) {
        console.error("Error checking session:", oe), window.location.href = "/login";
      } finally {
        J(!1);
      }
    })();
  }, []), nr(() => (l && vc(), () => {
    xc();
  }), [l]), nr(() => {
    l && Ec();
  }, [l]), G ? /* @__PURE__ */ ie(
    Tn,
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
        /* @__PURE__ */ C(
          pc,
          {
            size: 60,
            thickness: 4,
            sx: { color: R }
          }
        ),
        /* @__PURE__ */ C(Tn, { sx: { mt: 2, color: "text.secondary" }, children: "Checking session..." })
      ]
    }
  ) : X ? /* @__PURE__ */ ie(
    Tn,
    {
      sx: {
        display: "flex",
        minHeight: "100vh",
        ...F
      },
      children: [
        /* @__PURE__ */ C(dc, {}),
        s && /* @__PURE__ */ C(
          Dg,
          {
            appName: r,
            pageName: i,
            onMenuClick: q && a ? ee : void 0,
            showMenuButton: q && a,
            headerStyles: j,
            userName: p,
            userEmail: m,
            userAvatar: h,
            onProfileClick: b,
            onAccountClick: f,
            onSettingsClick: v,
            onLogout: g,
            showNotifications: O,
            notificationCount: S,
            showSearchbar: E,
            searchValue: y,
            onSearchChange: T,
            onSearchSubmit: w,
            showProfile: $,
            userRole: D,
            accentColor: R,
            contentBackgroundColor: M,
            navbarBackground: N,
            navbarAccentColor: L,
            rightExtraContent: I
          }
        ),
        a && !q && /* @__PURE__ */ C(
          fc,
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
                bgcolor: M,
                borderRight: "none",
                top: s ? "60px" : 0,
                // Position below header
                height: s ? "calc(100vh - 60px)" : "100vh"
              },
              ...d
            },
            children: /* @__PURE__ */ ie(
              Tn,
              {
                sx: {
                  overflow: "auto",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  pt: 2
                },
                children: [
                  /* @__PURE__ */ C(
                    Zl,
                    {
                      mainLinks: t,
                      secondaryLinks: o,
                      activePath: c,
                      onLinkClick: u,
                      accentColor: R
                    }
                  ),
                  (B == null ? void 0 : B.show) && /* @__PURE__ */ C(_l, { ...B })
                ]
              }
            )
          }
        ),
        a && q && /* @__PURE__ */ C(
          kb,
          {
            open: U,
            onClose: _,
            mainLinks: t,
            secondaryLinks: o,
            activePath: c,
            onLinkClick: u,
            userName: p,
            userEmail: m,
            userAvatar: h,
            onLogout: g,
            onProfileClick: b,
            showNotifications: O,
            notificationCount: S,
            alertProps: B,
            accentColor: R
          }
        ),
        /* @__PURE__ */ C(
          Tn,
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
              backgroundColor: M,
              // White background for main content
              ...P
            },
            children: /* @__PURE__ */ ie(er, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ C(
                er,
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
                }
              ),
              W && z && /* @__PURE__ */ C(
                er,
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
                  children: /* @__PURE__ */ C(z, {})
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
  Vb as LumoraWrapper,
  Vb as default,
  zb as logoutUser
};
