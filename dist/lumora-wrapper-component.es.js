var ws = Object.defineProperty;
var Rs = (e, t, n) => t in e ? ws(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Rt = (e, t, n) => (Rs(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as E from "react";
import _e, { Children as $s, isValidElement as rn, cloneElement as on, useState as Ps, useEffect as Is } from "react";
import { useTheme as ks, useMediaQuery as Ns, Box as Xt, CssBaseline as As, Drawer as js } from "@mui/material";
import Qe from "js-cookie";
import Ms from "@emotion/styled";
import { ThemeContext as _s, keyframes as Vt, css as Bo } from "@emotion/react";
import * as Bs from "react-dom";
import Jt from "react-dom";
function Ds(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qn = { exports: {} }, $t = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function Ls() {
  if (Pr)
    return $t;
  Pr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var c in i)
        c !== "key" && (s[c] = i[c]);
    } else
      s = i;
    return i = s.ref, {
      $$typeof: e,
      type: o,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return $t.Fragment = t, $t.jsx = n, $t.jsxs = n, $t;
}
var Pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir;
function Fs() {
  return Ir || (Ir = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null)
        return null;
      if (typeof b == "function")
        return b.$$typeof === V ? null : b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case x:
          return "Fragment";
        case I:
          return "Profiler";
        case S:
          return "StrictMode";
        case k:
          return "Suspense";
        case j:
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
          case M:
            return _ = b.displayName || null, _ !== null ? _ : e(b.type) || "Memo";
          case L:
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
        var z = _.error, U = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return z.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), t(b);
      }
    }
    function o(b) {
      if (b === x)
        return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === L)
        return "<...>";
      try {
        var _ = e(b);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var b = d.A;
      return b === null ? null : b.getOwner();
    }
    function s() {
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
      function z() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: z,
        configurable: !0
      });
    }
    function l() {
      var b = e(this.type);
      return G[b] || (G[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function u(b, _, z, U, Z, J) {
      var H = z.ref;
      return b = {
        $$typeof: y,
        type: b,
        key: _,
        props: z,
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
        value: J
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function f(b, _, z, U, Z, J) {
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
        var Q = Object.keys(_).filter(function(W) {
          return W !== "key";
        });
        U = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", R[H + U] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          H,
          Q,
          H
        ), R[H + U] = !0);
      }
      if (H = null, z !== void 0 && (n(z), H = "" + z), a(_) && (n(_.key), H = "" + _.key), "key" in _) {
        z = {};
        for (var te in _)
          te !== "key" && (z[te] = _[te]);
      } else
        z = _;
      return H && c(
        z,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), u(
        b,
        H,
        z,
        i(),
        Z,
        J
      );
    }
    function m(b) {
      g(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === L && (b._payload.status === "fulfilled" ? g(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function g(b) {
      return typeof b == "object" && b !== null && b.$$typeof === y;
    }
    var h = _e, y = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), v = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), d = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, w = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var A, G = {}, F = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), D = $(o(s)), R = {};
    Pt.Fragment = x, Pt.jsx = function(b, _, z) {
      var U = 1e4 > d.recentlyCreatedOwnerStacks++;
      return f(
        b,
        _,
        z,
        !1,
        U ? Error("react-stack-top-frame") : F,
        U ? $(o(b)) : D
      );
    }, Pt.jsxs = function(b, _, z) {
      var U = 1e4 > d.recentlyCreatedOwnerStacks++;
      return f(
        b,
        _,
        z,
        !0,
        U ? Error("react-stack-top-frame") : F,
        U ? $(o(b)) : D
      );
    };
  }()), Pt;
}
process.env.NODE_ENV === "production" ? qn.exports = Ls() : qn.exports = Fs();
var T = qn.exports, Kn = { exports: {} }, Qt = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function zs() {
  if (kr)
    return re;
  kr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function O(C) {
    if (typeof C == "object" && C !== null) {
      var k = C.$$typeof;
      switch (k) {
        case t:
          switch (C = C.type, C) {
            case l:
            case u:
            case o:
            case s:
            case i:
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
  return re.AsyncMode = l, re.ConcurrentMode = u, re.ContextConsumer = c, re.ContextProvider = a, re.Element = t, re.ForwardRef = f, re.Fragment = o, re.Lazy = y, re.Memo = h, re.Portal = n, re.Profiler = s, re.StrictMode = i, re.Suspense = m, re.isAsyncMode = function(C) {
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
    return O(C) === s;
  }, re.isStrictMode = function(C) {
    return O(C) === i;
  }, re.isSuspense = function(C) {
    return O(C) === m;
  }, re.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === o || C === u || C === s || C === i || C === m || C === g || typeof C == "object" && C !== null && (C.$$typeof === y || C.$$typeof === h || C.$$typeof === a || C.$$typeof === c || C.$$typeof === f || C.$$typeof === x || C.$$typeof === S || C.$$typeof === I || C.$$typeof === p);
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
var Nr;
function Vs() {
  return Nr || (Nr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function O(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === o || B === u || B === s || B === i || B === m || B === g || typeof B == "object" && B !== null && (B.$$typeof === y || B.$$typeof === h || B.$$typeof === a || B.$$typeof === c || B.$$typeof === f || B.$$typeof === x || B.$$typeof === S || B.$$typeof === I || B.$$typeof === p);
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
              case s:
              case i:
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
    var C = l, k = u, j = c, M = a, L = t, Y = f, V = o, d = y, N = h, w = n, $ = s, A = i, G = m, F = !1;
    function D(B) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(B) || v(B) === l;
    }
    function R(B) {
      return v(B) === u;
    }
    function b(B) {
      return v(B) === c;
    }
    function _(B) {
      return v(B) === a;
    }
    function z(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function U(B) {
      return v(B) === f;
    }
    function Z(B) {
      return v(B) === o;
    }
    function J(B) {
      return v(B) === y;
    }
    function H(B) {
      return v(B) === h;
    }
    function Q(B) {
      return v(B) === n;
    }
    function te(B) {
      return v(B) === s;
    }
    function W(B) {
      return v(B) === i;
    }
    function ee(B) {
      return v(B) === m;
    }
    oe.AsyncMode = C, oe.ConcurrentMode = k, oe.ContextConsumer = j, oe.ContextProvider = M, oe.Element = L, oe.ForwardRef = Y, oe.Fragment = V, oe.Lazy = d, oe.Memo = N, oe.Portal = w, oe.Profiler = $, oe.StrictMode = A, oe.Suspense = G, oe.isAsyncMode = D, oe.isConcurrentMode = R, oe.isContextConsumer = b, oe.isContextProvider = _, oe.isElement = z, oe.isForwardRef = U, oe.isFragment = Z, oe.isLazy = J, oe.isMemo = H, oe.isPortal = Q, oe.isProfiler = te, oe.isStrictMode = W, oe.isSuspense = ee, oe.isValidElementType = O, oe.typeOf = v;
  }()), oe;
}
var Ar;
function Do() {
  return Ar || (Ar = 1, process.env.NODE_ENV === "production" ? Qt.exports = zs() : Qt.exports = Vs()), Qt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Nn, jr;
function Us() {
  if (jr)
    return Nn;
  jr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(s) {
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
  return Nn = i() ? Object.assign : function(s, a) {
    for (var c, l = o(s), u, f = 1; f < arguments.length; f++) {
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
  }, Nn;
}
var An, Mr;
function fr() {
  if (Mr)
    return An;
  Mr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return An = e, An;
}
var jn, _r;
function Lo() {
  return _r || (_r = 1, jn = Function.call.bind(Object.prototype.hasOwnProperty)), jn;
}
var Mn, Br;
function Ws() {
  if (Br)
    return Mn;
  Br = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = fr(), n = {}, o = Lo();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in s)
        if (o(s, f)) {
          var m;
          try {
            if (typeof s[f] != "function") {
              var g = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = s[f](a, f, l, c, null, t);
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
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Mn = i, Mn;
}
var _n, Dr;
function Gs() {
  if (Dr)
    return _n;
  Dr = 1;
  var e = Do(), t = Us(), n = fr(), o = Lo(), i = Ws(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
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
  return _n = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(R) {
      var b = R && (u && R[u] || R[f]);
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
      any: I(),
      arrayOf: O,
      element: v(),
      elementType: C(),
      instanceOf: k,
      node: Y(),
      objectOf: M,
      oneOf: j,
      oneOfType: L,
      shape: d,
      exact: N
    };
    function y(R, b) {
      return R === b ? R !== 0 || 1 / R === 1 / b : R !== R && b !== b;
    }
    function p(R, b) {
      this.message = R, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function x(R) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, _ = 0;
      function z(Z, J, H, Q, te, W, ee) {
        if (Q = Q || g, W = W || H, ee !== n) {
          if (l) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var me = Q + ":" + H;
            !b[me] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[me] = !0, _++);
          }
        }
        return J[H] == null ? Z ? J[H] === null ? new p("The " + te + " `" + W + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new p("The " + te + " `" + W + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : R(J, H, Q, te, W);
      }
      var U = z.bind(null, !1);
      return U.isRequired = z.bind(null, !0), U;
    }
    function S(R) {
      function b(_, z, U, Z, J, H) {
        var Q = _[z], te = A(Q);
        if (te !== R) {
          var W = G(Q);
          return new p(
            "Invalid " + Z + " `" + J + "` of type " + ("`" + W + "` supplied to `" + U + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return x(b);
    }
    function I() {
      return x(a);
    }
    function O(R) {
      function b(_, z, U, Z, J) {
        if (typeof R != "function")
          return new p("Property `" + J + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var H = _[z];
        if (!Array.isArray(H)) {
          var Q = A(H);
          return new p("Invalid " + Z + " `" + J + "` of type " + ("`" + Q + "` supplied to `" + U + "`, expected an array."));
        }
        for (var te = 0; te < H.length; te++) {
          var W = R(H, te, U, Z, J + "[" + te + "]", n);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return x(b);
    }
    function v() {
      function R(b, _, z, U, Z) {
        var J = b[_];
        if (!c(J)) {
          var H = A(J);
          return new p("Invalid " + U + " `" + Z + "` of type " + ("`" + H + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(R);
    }
    function C() {
      function R(b, _, z, U, Z) {
        var J = b[_];
        if (!e.isValidElementType(J)) {
          var H = A(J);
          return new p("Invalid " + U + " `" + Z + "` of type " + ("`" + H + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(R);
    }
    function k(R) {
      function b(_, z, U, Z, J) {
        if (!(_[z] instanceof R)) {
          var H = R.name || g, Q = D(_[z]);
          return new p("Invalid " + Z + " `" + J + "` of type " + ("`" + Q + "` supplied to `" + U + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return x(b);
    }
    function j(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function b(_, z, U, Z, J) {
        for (var H = _[z], Q = 0; Q < R.length; Q++)
          if (y(H, R[Q]))
            return null;
        var te = JSON.stringify(R, function(ee, B) {
          var me = G(B);
          return me === "symbol" ? String(B) : B;
        });
        return new p("Invalid " + Z + " `" + J + "` of value `" + String(H) + "` " + ("supplied to `" + U + "`, expected one of " + te + "."));
      }
      return x(b);
    }
    function M(R) {
      function b(_, z, U, Z, J) {
        if (typeof R != "function")
          return new p("Property `" + J + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var H = _[z], Q = A(H);
        if (Q !== "object")
          return new p("Invalid " + Z + " `" + J + "` of type " + ("`" + Q + "` supplied to `" + U + "`, expected an object."));
        for (var te in H)
          if (o(H, te)) {
            var W = R(H, te, U, Z, J + "." + te, n);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return x(b);
    }
    function L(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var b = 0; b < R.length; b++) {
        var _ = R[b];
        if (typeof _ != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + F(_) + " at index " + b + "."
          ), a;
      }
      function z(U, Z, J, H, Q) {
        for (var te = [], W = 0; W < R.length; W++) {
          var ee = R[W], B = ee(U, Z, J, H, Q, n);
          if (B == null)
            return null;
          B.data && o(B.data, "expectedType") && te.push(B.data.expectedType);
        }
        var me = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new p("Invalid " + H + " `" + Q + "` supplied to " + ("`" + J + "`" + me + "."));
      }
      return x(z);
    }
    function Y() {
      function R(b, _, z, U, Z) {
        return w(b[_]) ? null : new p("Invalid " + U + " `" + Z + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return x(R);
    }
    function V(R, b, _, z, U) {
      return new p(
        (R || "React class") + ": " + b + " type `" + _ + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function d(R) {
      function b(_, z, U, Z, J) {
        var H = _[z], Q = A(H);
        if (Q !== "object")
          return new p("Invalid " + Z + " `" + J + "` of type `" + Q + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var te in R) {
          var W = R[te];
          if (typeof W != "function")
            return V(U, Z, J, te, G(W));
          var ee = W(H, te, U, Z, J + "." + te, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return x(b);
    }
    function N(R) {
      function b(_, z, U, Z, J) {
        var H = _[z], Q = A(H);
        if (Q !== "object")
          return new p("Invalid " + Z + " `" + J + "` of type `" + Q + "` " + ("supplied to `" + U + "`, expected `object`."));
        var te = t({}, _[z], R);
        for (var W in te) {
          var ee = R[W];
          if (o(R, W) && typeof ee != "function")
            return V(U, Z, J, W, G(ee));
          if (!ee)
            return new p(
              "Invalid " + Z + " `" + J + "` key `" + W + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(_[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var B = ee(H, W, U, Z, J + "." + W, n);
          if (B)
            return B;
        }
        return null;
      }
      return x(b);
    }
    function w(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(w);
          if (R === null || c(R))
            return !0;
          var b = m(R);
          if (b) {
            var _ = b.call(R), z;
            if (b !== R.entries) {
              for (; !(z = _.next()).done; )
                if (!w(z.value))
                  return !1;
            } else
              for (; !(z = _.next()).done; ) {
                var U = z.value;
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
    function $(R, b) {
      return R === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function A(R) {
      var b = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : $(b, R) ? "symbol" : b;
    }
    function G(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var b = A(R);
      if (b === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function F(R) {
      var b = G(R);
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
    function D(R) {
      return !R.constructor || !R.constructor.name ? g : R.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, _n;
}
var Bn, Lr;
function Ys() {
  if (Lr)
    return Bn;
  Lr = 1;
  var e = fr();
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
    function i() {
      return o;
    }
    var s = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: i,
      element: o,
      elementType: o,
      instanceOf: i,
      node: o,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Bn;
}
if (process.env.NODE_ENV !== "production") {
  var Hs = Do(), qs = !0;
  Kn.exports = Gs()(Hs.isElement, qs);
} else
  Kn.exports = Ys()();
var Ks = Kn.exports;
const r = /* @__PURE__ */ Ds(Ks);
function Fo(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Fo(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function X() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Fo(e)) && (o && (o += " "), o += t);
  return o;
}
function pe(e, t, n = void 0) {
  const o = {};
  for (const i in e) {
    const s = e[i];
    let a = "", c = !0;
    for (let l = 0; l < s.length; l += 1) {
      const u = s[l];
      u && (a += (c === !0 ? "" : " ") + t(u), c = !1, n && n[u] && (a += " " + n[u]));
    }
    o[i] = a;
  }
  return o;
}
function Ye(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((o) => n.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function K(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ye(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
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
var Fr;
function Xs() {
  if (Fr)
    return ue;
  Fr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function y(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case n:
            case i:
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
                case s:
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
  return ue.ContextConsumer = s, ue.ContextProvider = a, ue.Element = e, ue.ForwardRef = c, ue.Fragment = n, ue.Lazy = m, ue.Memo = f, ue.Portal = t, ue.Profiler = i, ue.StrictMode = o, ue.Suspense = l, ue.SuspenseList = u, ue.isContextConsumer = function(p) {
    return y(p) === s;
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
    return y(p) === i;
  }, ue.isStrictMode = function(p) {
    return y(p) === o;
  }, ue.isSuspense = function(p) {
    return y(p) === l;
  }, ue.isSuspenseList = function(p) {
    return y(p) === u;
  }, ue.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === i || p === o || p === l || p === u || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === f || p.$$typeof === a || p.$$typeof === s || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
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
var zr;
function Js() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var x = p.$$typeof;
        switch (x) {
          case t:
            switch (p = p.type, p) {
              case o:
              case s:
              case i:
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
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    de.ContextConsumer = a, de.ContextProvider = c, de.Element = t, de.ForwardRef = l, de.Fragment = o, de.Lazy = g, de.Memo = m, de.Portal = n, de.Profiler = s, de.StrictMode = i, de.Suspense = u, de.SuspenseList = f, de.isContextConsumer = function(p) {
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
      return e(p) === s;
    }, de.isStrictMode = function(p) {
      return e(p) === i;
    }, de.isSuspense = function(p) {
      return e(p) === u;
    }, de.isSuspenseList = function(p) {
      return e(p) === f;
    }, de.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === o || p === s || p === i || p === u || p === f || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === m || p.$$typeof === c || p.$$typeof === a || p.$$typeof === l || p.$$typeof === y || p.getModuleId !== void 0);
    }, de.typeOf = e;
  }()), de;
}
process.env.NODE_ENV === "production" ? Xn.exports = Xs() : Xn.exports = Js();
var st = Xn.exports;
function Me(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function zo(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || st.isValidElementType(e) || !Me(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = zo(e[n]);
  }), t;
}
function Te(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? {
    ...e
  } : e;
  return Me(e) && Me(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ E.isValidElement(t[i]) || st.isValidElementType(t[i]) ? o[i] = t[i] : Me(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Me(e[i]) ? o[i] = Te(e[i], t[i], n) : n.clone ? o[i] = Me(t[i]) ? zo(t[i]) : t[i] : o[i] = t[i];
  }), o;
}
function Bt(e, t) {
  return t ? Te(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Qs = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.string, r.object, r.array]) : {}, qe = Qs;
function Vr(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, i) => {
    var a, c;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((a = o.match(s)) == null ? void 0 : a[1]) || 0) - +(((c = i.match(s)) == null ? void 0 : c[1]) || 0);
  });
  return n.length ? n.reduce((o, i) => {
    const s = t[i];
    return delete o[i], o[i] = s, o;
  }, {
    ...t
  }) : t;
}
function Zs(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function ea(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ye(18, `(${t})`));
    return null;
  }
  const [, o, i] = n, s = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(i).up(s);
}
function ta(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function n(s, a) {
    s.up = (...c) => t(e.breakpoints.up(...c), a), s.down = (...c) => t(e.breakpoints.down(...c), a), s.between = (...c) => t(e.breakpoints.between(...c), a), s.only = (...c) => t(e.breakpoints.only(...c), a), s.not = (...c) => {
      const l = t(e.breakpoints.not(...c), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const o = {}, i = (s) => (n(o, s), o);
  return n(i), {
    ...e,
    containerQueries: i
  };
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
}, Ur = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${yn[e]}px)`
}, na = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : yn[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Ne(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const s = o.breakpoints || Ur;
    return t.reduce((a, c, l) => (a[s.up(s.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const s = o.breakpoints || Ur;
    return Object.keys(t).reduce((a, c) => {
      if (Zs(s.keys, c)) {
        const l = ea(o.containerQueries ? o : na, c);
        l && (a[l] = n(t[c], c));
      } else if (Object.keys(s.values || yn).includes(c)) {
        const l = s.up(c);
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
function Vo(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((o, i) => {
    const s = e.up(i);
    return o[s] = {}, o;
  }, {})) || {};
}
function Jn(e, t) {
  return e.reduce((n, o) => {
    const i = n[o];
    return (!i || Object.keys(i).length === 0) && delete n[o], n;
  }, t);
}
function ra(e, ...t) {
  const n = Vo(e), o = [n, ...t].reduce((i, s) => Te(i, s), {});
  return Jn(Object.keys(n), o);
}
function oa(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, o = Object.keys(t);
  return Array.isArray(e) ? o.forEach((i, s) => {
    s < e.length && (n[i] = !0);
  }) : o.forEach((i) => {
    e[i] != null && (n[i] = !0);
  }), n;
}
function Dn({
  values: e,
  breakpoints: t,
  base: n
}) {
  const o = n || oa(e, t), i = Object.keys(o);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, c, l) => (Array.isArray(e) ? (a[c] = e[l] != null ? e[l] : e[s], s = l) : typeof e == "object" ? (a[c] = e[c] != null ? e[c] : e[s], s = c) : a[c] = e, a), {});
}
function bn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, i) => o && o[i] != null ? o[i] : null, e);
}
function an(e, t, n, o = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || o : i = bn(e, n) || o, t && (i = t(i, o, e)), i;
}
function ve(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, u = bn(l, o) || {};
    return Ne(a, c, (m) => {
      let g = an(u, i, m);
      return m === g && typeof m == "string" && (g = an(u, i, `${t}${m === "default" ? "" : K(m)}`, m)), n === !1 ? g : {
        [n]: g
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: qe
  } : {}, s.filterProps = [t], s;
}
function ia(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const sa = {
  m: "margin",
  p: "padding"
}, aa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ca = ia((e) => {
  if (e.length > 2)
    if (Wr[e])
      e = Wr[e];
    else
      return [e];
  const [t, n] = e.split(""), o = sa[t], i = aa[n] || "";
  return Array.isArray(i) ? i.map((s) => o + s) : [o + i];
}), vn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], xn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], la = [...vn, ...xn];
function Ut(e, t, n, o) {
  const i = bn(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${s}.`), typeof i == "string" ? i.startsWith("var(") && s === 0 ? 0 : i.startsWith("var(") && s === 1 ? i : `calc(${s} * ${i})` : i * s) : Array.isArray(i) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = i[a];
    return s >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Tn(e) {
  return Ut(e, "spacing", 8, "spacing");
}
function at(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function ua(e, t) {
  return (n) => e.reduce((o, i) => (o[i] = at(t, n), o), {});
}
function da(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const i = ca(n), s = ua(i, o), a = e[n];
  return Ne(e, a, s);
}
function Uo(e, t) {
  const n = Tn(e.theme);
  return Object.keys(e).map((o) => da(e, t, o, n)).reduce(Bt, {});
}
function he(e) {
  return Uo(e, vn);
}
he.propTypes = process.env.NODE_ENV !== "production" ? vn.reduce((e, t) => (e[t] = qe, e), {}) : {};
he.filterProps = vn;
function ye(e) {
  return Uo(e, xn);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? xn.reduce((e, t) => (e[t] = qe, e), {}) : {};
ye.filterProps = xn;
process.env.NODE_ENV !== "production" && la.reduce((e, t) => (e[t] = qe, e), {});
function En(...e) {
  const t = e.reduce((o, i) => (i.filterProps.forEach((s) => {
    o[s] = i;
  }), o), {}), n = (o) => Object.keys(o).reduce((i, s) => t[s] ? Bt(i, t[s](o)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, i) => Object.assign(o, i.propTypes), {}) : {}, n.filterProps = e.reduce((o, i) => o.concat(i.filterProps), []), n;
}
function Re(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $e(e, t) {
  return ve({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const pa = $e("border", Re), fa = $e("borderTop", Re), ma = $e("borderRight", Re), ga = $e("borderBottom", Re), ha = $e("borderLeft", Re), ya = $e("borderColor"), ba = $e("borderTopColor"), va = $e("borderRightColor"), xa = $e("borderBottomColor"), Ta = $e("borderLeftColor"), Ea = $e("outline", Re), Ca = $e("outlineColor"), Cn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ut(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: at(t, o)
    });
    return Ne(e, e.borderRadius, n);
  }
  return null;
};
Cn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: qe
} : {};
Cn.filterProps = ["borderRadius"];
En(pa, fa, ma, ga, ha, ya, ba, va, xa, Ta, Cn, Ea, Ca);
const Sn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ut(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: at(t, o)
    });
    return Ne(e, e.gap, n);
  }
  return null;
};
Sn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: qe
} : {};
Sn.filterProps = ["gap"];
const On = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ut(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: at(t, o)
    });
    return Ne(e, e.columnGap, n);
  }
  return null;
};
On.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: qe
} : {};
On.filterProps = ["columnGap"];
const wn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ut(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: at(t, o)
    });
    return Ne(e, e.rowGap, n);
  }
  return null;
};
wn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: qe
} : {};
wn.filterProps = ["rowGap"];
const Sa = ve({
  prop: "gridColumn"
}), Oa = ve({
  prop: "gridRow"
}), wa = ve({
  prop: "gridAutoFlow"
}), Ra = ve({
  prop: "gridAutoColumns"
}), $a = ve({
  prop: "gridAutoRows"
}), Pa = ve({
  prop: "gridTemplateColumns"
}), Ia = ve({
  prop: "gridTemplateRows"
}), ka = ve({
  prop: "gridTemplateAreas"
}), Na = ve({
  prop: "gridArea"
});
En(Sn, On, wn, Sa, Oa, wa, Ra, $a, Pa, Ia, ka, Na);
function bt(e, t) {
  return t === "grey" ? t : e;
}
const Aa = ve({
  prop: "color",
  themeKey: "palette",
  transform: bt
}), ja = ve({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: bt
}), Ma = ve({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: bt
});
En(Aa, ja, Ma);
function Se(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const _a = ve({
  prop: "width",
  transform: Se
}), mr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, s, a, c, l;
      const o = ((a = (s = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[n]) || yn[n];
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
mr.filterProps = ["maxWidth"];
const Ba = ve({
  prop: "minWidth",
  transform: Se
}), Da = ve({
  prop: "height",
  transform: Se
}), La = ve({
  prop: "maxHeight",
  transform: Se
}), Fa = ve({
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
const za = ve({
  prop: "boxSizing"
});
En(_a, mr, Ba, Da, La, Fa, za);
const Va = {
  // borders
  border: {
    themeKey: "borders",
    transform: Re
  },
  borderTop: {
    themeKey: "borders",
    transform: Re
  },
  borderRight: {
    themeKey: "borders",
    transform: Re
  },
  borderBottom: {
    themeKey: "borders",
    transform: Re
  },
  borderLeft: {
    themeKey: "borders",
    transform: Re
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
    transform: Re
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
    transform: bt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: bt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: bt
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
    style: wn
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
    style: mr
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
}, Wt = Va;
function Ua(...e) {
  const t = e.reduce((o, i) => o.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function Wa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ga() {
  function e(n, o, i, s) {
    const a = {
      [n]: o,
      theme: i
    }, c = s[n];
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
    const g = bn(i, u) || {};
    return m ? m(a) : Ne(a, o, (y) => {
      let p = an(g, f, y);
      return y === p && typeof y == "string" && (p = an(g, f, `${n}${y === "default" ? "" : K(y)}`, y)), l === !1 ? p : {
        [l]: p
      };
    });
  }
  function t(n) {
    const {
      sx: o,
      theme: i = {},
      nested: s
    } = n || {};
    if (!o)
      return null;
    const a = i.unstable_sxConfig ?? Wt;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const f = Vo(i.breakpoints), m = Object.keys(f);
      let g = f;
      return Object.keys(u).forEach((h) => {
        const y = Wa(u[h], i);
        if (y != null)
          if (typeof y == "object")
            if (a[h])
              g = Bt(g, e(h, y, i, a));
            else {
              const p = Ne({
                theme: i
              }, y, (x) => ({
                [h]: x
              }));
              Ua(p, y) ? g[h] = t({
                sx: y,
                theme: i,
                nested: !0
              }) : g = Bt(g, p);
            }
          else
            g = Bt(g, e(h, y, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": Vr(i, Jn(m, g))
      } : Vr(i, Jn(m, g));
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const Wo = Ga();
Wo.filterProps = ["sx"];
const Tt = Wo, Ya = (e) => {
  var o;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((o = e == null ? void 0 : e.theme) == null ? void 0 : o.unstable_sxConfig) ?? Wt;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function gr(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: o,
    otherProps: i
  } = Ya(n);
  let s;
  return Array.isArray(t) ? s = [o, ...t] : typeof t == "function" ? s = (...a) => {
    const c = t(...a);
    return Me(c) ? {
      ...o,
      ...c
    } : o;
  } : s = {
    ...o,
    ...t
  }, {
    ...i,
    sx: s
  };
}
function Ha(e) {
  for (var t = 0, n, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
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
var qa = {
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
function Ka(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Xa = !1, Ja = /[A-Z]|^ms/g, Qa = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Go = function(t) {
  return t.charCodeAt(1) === 45;
}, Gr = function(t) {
  return t != null && typeof t != "boolean";
}, Ln = /* @__PURE__ */ Ka(function(e) {
  return Go(e) ? e : e.replace(Ja, "-$&").toLowerCase();
}), Yr = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Qa, function(o, i, s) {
          return je = {
            name: i,
            styles: s,
            next: je
          }, i;
        });
  }
  return qa[t] !== 1 && !Go(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Za = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      var i = n;
      if (i.anim === 1)
        return je = {
          name: i.name,
          styles: i.styles,
          next: je
        }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            je = {
              name: a.name,
              styles: a.styles,
              next: je
            }, a = a.next;
        var c = s.styles + ";";
        return c;
      }
      return ec(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = je, u = n(e);
        return je = l, Lt(e, t, u);
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
function ec(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      o += Lt(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? o += s + "{" + t[c] + "}" : Gr(c) && (o += Ln(s) + ":" + Yr(s, c) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Xa)
          throw new Error(Za);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            Gr(a[l]) && (o += Ln(s) + ":" + Yr(s, a[l]) + ";");
        else {
          var u = Lt(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              o += Ln(s) + ":" + u + ";";
              break;
            }
            default:
              o += s + "{" + u + "}";
          }
        }
      }
    }
  return o;
}
var Hr = /label:\s*([^\s;{]+)\s*(;|$)/g, je;
function tc(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  je = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    o = !1, i += Lt(n, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (i += Lt(n, t, e[c]), o) {
      var l = s;
      i += l[c];
    }
  Hr.lastIndex = 0;
  for (var u = "", f; (f = Hr.exec(i)) !== null; )
    u += "-" + f[1];
  var m = Ha(i) + u;
  return {
    name: m,
    styles: i,
    next: je
  };
}
/**
 * @mui/styled-engine v7.3.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Yo(e, t) {
  const n = Ms(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
function nc(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const qr = [];
function it(e) {
  return qr[0] = e, tc(qr);
}
const rc = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function oc(e) {
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
    ...i
  } = e, s = rc(t), a = Object.keys(s);
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
    values: s,
    up: c,
    down: l,
    between: u,
    only: f,
    not: m,
    unit: n,
    ...i
  };
}
const ic = {
  borderRadius: 4
}, sc = ic;
function Ho(e = 8, t = Tn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function ac(e, t) {
  var o;
  const n = this;
  if (n.vars) {
    if (!((o = n.colorSchemes) != null && o[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Rn(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, c = oc(n), l = Ho(i);
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
      ...sc,
      ...s
    }
  }, a);
  return u = ta(u), u.applyStyles = ac, u = t.reduce((f, m) => Te(f, m), u), u.unstable_sxConfig = {
    ...Wt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return Tt({
      sx: m,
      theme: this
    });
  }, u;
}
function cc(e) {
  return Object.keys(e).length === 0;
}
function lc(e = null) {
  const t = E.useContext(_s);
  return !t || cc(t) ? e : t;
}
const uc = Rn();
function hr(e = uc) {
  return lc(e);
}
const Kr = (e) => e, dc = () => {
  let e = Kr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Kr;
    }
  };
}, pc = dc(), qo = pc;
function fc(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: o = "MuiBox-root",
    generateClassName: i
  } = e, s = Yo("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(Tt);
  return /* @__PURE__ */ E.forwardRef(function(l, u) {
    const f = hr(n), {
      className: m,
      component: g = "div",
      ...h
    } = gr(l);
    return /* @__PURE__ */ T.jsx(s, {
      as: g,
      ref: u,
      className: X(m, i ? i(o) : o),
      theme: t && f[t] || f,
      ...h
    });
  });
}
const mc = {
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
function ie(e, t, n = "Mui") {
  const o = mc[t];
  return o ? `${n}-${o}` : `${qo.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const o = {};
  return t.forEach((i) => {
    o[i] = ie(e, i, n);
  }), o;
}
function Ko(e, t = "") {
  return e.displayName || e.name || t;
}
function Xr(e, t, n) {
  const o = Ko(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function gc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ko(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case st.ForwardRef:
          return Xr(e, e.render, "ForwardRef");
        case st.Memo:
          return Xr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Xo(e) {
  const {
    variants: t,
    ...n
  } = e, o = {
    variants: t,
    style: it(n),
    isProcessed: !0
  };
  return o.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = it(i.style));
  }), o;
}
const hc = Rn();
function Fn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function rt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function yc(e) {
  return e ? (t, n) => n[e] : null;
}
function bc(e, t, n) {
  e.theme = Tc(e.theme) ? n : e.theme[t] || e.theme;
}
function sn(e, t, n) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o))
    return o.flatMap((i) => sn(e, i, n));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let i;
    if (o.isProcessed)
      i = n ? rt(o.style, n) : o.style;
    else {
      const {
        variants: s,
        ...a
      } = o;
      i = n ? rt(it(a), n) : a;
    }
    return Jo(e, o.variants, [i], n);
  }
  return o != null && o.isProcessed ? n ? rt(it(o.style), n) : o.style : n ? rt(it(o), n) : o;
}
function Jo(e, t, n = [], o = void 0) {
  var s;
  let i;
  e:
    for (let a = 0; a < t.length; a += 1) {
      const c = t[a];
      if (typeof c.props == "function") {
        if (i ?? (i = {
          ...e,
          ...e.ownerState,
          ownerState: e.ownerState
        }), !c.props(i))
          continue;
      } else
        for (const l in c.props)
          if (e[l] !== c.props[l] && ((s = e.ownerState) == null ? void 0 : s[l]) !== c.props[l])
            continue e;
      typeof c.style == "function" ? (i ?? (i = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), n.push(o ? rt(it(c.style(i)), o) : c.style(i))) : n.push(o ? rt(it(c.style), o) : c.style);
    }
  return n;
}
function Qo(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = hc,
    rootShouldForwardProp: o = Fn,
    slotShouldForwardProp: i = Fn
  } = e;
  function s(c) {
    bc(c, t, n);
  }
  return (c, l = {}) => {
    nc(c, (k) => k.filter((j) => j !== Tt));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: m,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = yc(Zo(f)),
      ...y
    } = l, p = u && u.startsWith("Mui") || f ? "components" : "custom", x = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), S = g || !1;
    let I = Fn;
    f === "Root" || f === "root" ? I = o : f ? I = i : Ec(c) && (I = void 0);
    const O = Yo(c, {
      shouldForwardProp: I,
      label: xc(u, f),
      ...y
    }), v = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(M) {
          return sn(M, k, M.theme.modularCssLayers ? p : void 0);
        };
      if (Me(k)) {
        const j = Xo(k);
        return function(L) {
          return j.variants ? sn(L, j, L.theme.modularCssLayers ? p : void 0) : L.theme.modularCssLayers ? rt(j.style, p) : j.style;
        };
      }
      return k;
    }, C = (...k) => {
      const j = [], M = k.map(v), L = [];
      if (j.push(s), u && h && L.push(function(N) {
        var G, F;
        const $ = (F = (G = N.theme.components) == null ? void 0 : G[u]) == null ? void 0 : F.styleOverrides;
        if (!$)
          return null;
        const A = {};
        for (const D in $)
          A[D] = sn(N, $[D], N.theme.modularCssLayers ? "theme" : void 0);
        return h(N, A);
      }), u && !x && L.push(function(N) {
        var A, G;
        const w = N.theme, $ = (G = (A = w == null ? void 0 : w.components) == null ? void 0 : A[u]) == null ? void 0 : G.variants;
        return $ ? Jo(N, $, [], N.theme.modularCssLayers ? "theme" : void 0) : null;
      }), S || L.push(Tt), Array.isArray(M[0])) {
        const d = M.shift(), N = new Array(j.length).fill(""), w = new Array(L.length).fill("");
        let $;
        $ = [...N, ...d, ...w], $.raw = [...N, ...d.raw, ...w], j.unshift($);
      }
      const Y = [...j, ...M, ...L], V = O(...Y);
      return c.muiName && (V.muiName = c.muiName), process.env.NODE_ENV !== "production" && (V.displayName = vc(u, f, c)), V;
    };
    return O.withConfig && (C.withConfig = O.withConfig), C;
  };
}
function vc(e, t, n) {
  return e ? `${e}${K(t || "")}` : `Styled(${gc(n)})`;
}
function xc(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Zo(t || "Root")}`), n;
}
function Tc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ec(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Zo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Cc = Qo(), Sc = Cc;
function Ft(e, t, n = !1) {
  const o = {
    ...t
  };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = i;
      if (s === "components" || s === "slots")
        o[s] = {
          ...e[s],
          ...o[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const a = e[s], c = t[s];
        if (!c)
          o[s] = a || {};
        else if (!a)
          o[s] = c;
        else {
          o[s] = {
            ...c
          };
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
              const u = l;
              o[s][u] = Ft(a[u], c[u], n);
            }
        }
      } else
        s === "className" && n && t.className ? o.className = X(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : s === "style" && n && t.style ? o.style = {
          ...e == null ? void 0 : e.style,
          ...t == null ? void 0 : t.style
        } : o[s] === void 0 && (o[s] = e[s]);
    }
  return o;
}
function Oc(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : Ft(t.components[n].defaultProps, o);
}
function wc({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let i = hr(n);
  return o && (i = i[o] || i), Oc({
    theme: i,
    name: t,
    props: e
  });
}
const Rc = typeof window < "u" ? E.useLayoutEffect : E.useEffect, Et = Rc;
function $c(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function yr(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), $c(e, t, n);
}
function Pc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, i) => i < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function He(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return He(Pc(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ye(9, e));
  let o = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (o = o.split(" "), i = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ye(10, i));
  } else
    o = o.split(",");
  return o = o.map((s) => parseFloat(s)), {
    type: n,
    values: o,
    colorSpace: i
  };
}
const Ic = (e) => {
  const t = He(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, At = (e, t) => {
  try {
    return Ic(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function $n(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function ei(e) {
  e = He(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, i = t[2] / 100, s = o * Math.min(i, 1 - i), a = (u, f = (u + n / 30) % 12) => i - s * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), $n({
    type: c,
    values: l
  });
}
function Qn(e) {
  e = He(e);
  let t = e.type === "hsl" || e.type === "hsla" ? He(ei(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Jr(e, t) {
  const n = Qn(e), o = Qn(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function cn(e, t) {
  return e = He(e), t = yr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, $n(e);
}
function Ze(e, t, n) {
  try {
    return cn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Pn(e, t) {
  if (e = He(e), t = yr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return $n(e);
}
function se(e, t, n) {
  try {
    return Pn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function In(e, t) {
  if (e = He(e), t = yr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return $n(e);
}
function ae(e, t, n) {
  try {
    return In(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Zn(e, t = 0.15) {
  return Qn(e) > 0.5 ? Pn(e, t) : In(e, t);
}
function Zt(e, t, n) {
  try {
    return Zn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
const kc = "exact-prop: ​";
function ti(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [kc]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Nc = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (r.node, r.bool);
const ni = () => E.useContext(Nc) ?? !1, Ac = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (r.node, r.object);
function jc(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  if (!t || !t.components || !t.components[n])
    return o;
  const i = t.components[n];
  return i.defaultProps ? Ft(i.defaultProps, o, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? Ft(i, o, t.components.mergeClassNameAndStyle) : o;
}
function Mc({
  props: e,
  name: t
}) {
  const n = E.useContext(Ac);
  return jc({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Qr = 0;
function _c(e) {
  const [t, n] = E.useState(e), o = e || t;
  return E.useEffect(() => {
    t == null && (Qr += 1, n(`mui-${Qr}`));
  }, [t]), o;
}
const Bc = {
  ...E
}, Zr = Bc.useId;
function ri(e) {
  if (Zr !== void 0) {
    const t = Zr();
    return e ?? t;
  }
  return _c(e);
}
const eo = {
  theme: void 0
};
function Dc(e) {
  let t, n;
  return function(i) {
    let s = t;
    return (s === void 0 || i.theme !== n) && (eo.theme = i.theme, s = Xo(e(eo)), t = s, n = i.theme), s;
  };
}
function Lc(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const i = o[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...o.slice(1))})` : `, ${i}`;
  }
  return (o, ...i) => `var(--${e ? `${e}-` : ""}${o}${t(...i)})`;
}
const to = (e, t, n, o = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = n : i && typeof i == "object" && (i[s] = n) : i && typeof i == "object" && (i[s] || (i[s] = o.includes(s) ? [] : {}), i = i[s]);
  });
}, Fc = (e, t, n) => {
  function o(i, s = [], a = []) {
    Object.entries(i).forEach(([c, l]) => {
      (!n || n && !n([...s, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? o(l, [...s, c], Array.isArray(l) ? [...a, c] : a) : t([...s, c], l, a));
    });
  }
  o(e);
}, zc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function zn(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, i = {}, s = {}, a = {};
  return Fc(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!o || !o(c, l))) {
        const f = `--${n ? `${n}-` : ""}${c.join("-")}`, m = zc(c, l);
        Object.assign(i, {
          [f]: m
        }), to(s, c, `var(${f})`, u), to(a, c, `var(${f}, ${m})`, u);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: s,
    varsWithDefaults: a
  };
}
function Vc(e, t = {}) {
  const {
    getSelector: n = S,
    disableCssColorScheme: o,
    colorSchemeSelector: i,
    enableContrastVars: s
  } = t, {
    colorSchemes: a = {},
    components: c,
    defaultColorScheme: l = "light",
    ...u
  } = e, {
    vars: f,
    css: m,
    varsWithDefaults: g
  } = zn(u, t);
  let h = g;
  const y = {}, {
    [l]: p,
    ...x
  } = a;
  if (Object.entries(x || {}).forEach(([v, C]) => {
    const {
      vars: k,
      css: j,
      varsWithDefaults: M
    } = zn(C, t);
    h = Te(h, M), y[v] = {
      css: j,
      vars: k
    };
  }), p) {
    const {
      css: v,
      vars: C,
      varsWithDefaults: k
    } = zn(p, t);
    h = Te(h, k), y[l] = {
      css: v,
      vars: C
    };
  }
  function S(v, C) {
    var j, M;
    let k = i;
    if (i === "class" && (k = ".%s"), i === "data" && (k = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (k = `[${i}="%s"]`), v) {
      if (k === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((M = (j = a[v]) == null ? void 0 : j.palette) == null ? void 0 : M.mode) || v})`]: {
            ":root": C
          }
        };
      if (k)
        return e.defaultColorScheme === v ? `:root, ${k.replace("%s", String(v))}` : k.replace("%s", String(v));
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
      var L, Y;
      const v = [], C = e.defaultColorScheme || "light";
      function k(V, d) {
        Object.keys(d).length && v.push(typeof V == "string" ? {
          [V]: {
            ...d
          }
        } : V);
      }
      k(n(void 0, {
        ...m
      }), m);
      const {
        [C]: j,
        ...M
      } = y;
      if (j) {
        const {
          css: V
        } = j, d = (Y = (L = a[C]) == null ? void 0 : L.palette) == null ? void 0 : Y.mode, N = !o && d ? {
          colorScheme: d,
          ...V
        } : {
          ...V
        };
        k(n(C, {
          ...N
        }), N);
      }
      return Object.entries(M).forEach(([V, {
        css: d
      }]) => {
        var $, A;
        const N = (A = ($ = a[V]) == null ? void 0 : $.palette) == null ? void 0 : A.mode, w = !o && N ? {
          colorScheme: N,
          ...d
        } : {
          ...d
        };
        k(n(V, {
          ...w
        }), w);
      }), s && v.push({
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
function Uc(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function oi(e, t) {
  var n, o, i;
  return /* @__PURE__ */ E.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (o = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : o.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
const Wc = Rn(), Gc = Sc("div", {
  name: "MuiStack",
  slot: "Root"
});
function Yc(e) {
  return wc({
    props: e,
    name: "MuiStack",
    defaultTheme: Wc
  });
}
function Hc(e, t) {
  const n = E.Children.toArray(e).filter(Boolean);
  return n.reduce((o, i, s) => (o.push(i), s < n.length - 1 && o.push(/* @__PURE__ */ E.cloneElement(t, {
    key: `separator-${s}`
  })), o), []);
}
const qc = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Kc = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Ne({
      theme: t
    }, Dn({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (o) => ({
      flexDirection: o
    }))
  };
  if (e.spacing) {
    const o = Tn(t), i = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), s = Dn({
      values: e.direction,
      base: i
    }), a = Dn({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((l, u, f) => {
      if (!s[l]) {
        const g = u > 0 ? s[f[u - 1]] : "column";
        s[l] = g;
      }
    }), n = Te(n, Ne({
      theme: t
    }, a, (l, u) => e.useFlexGap ? {
      gap: at(o, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${qc(u ? s[u] : e.direction)}`]: at(o, l)
      }
    }));
  }
  return n = ra(t.breakpoints, n), n;
};
function Xc(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Gc,
    useThemeProps: n = Yc,
    componentName: o = "MuiStack"
  } = e, i = () => pe({
    root: ["root"]
  }, (l) => ie(o, l), {}), s = t(Kc), a = /* @__PURE__ */ E.forwardRef(function(l, u) {
    const f = n(l), m = gr(f), {
      component: g = "div",
      direction: h = "column",
      spacing: y = 0,
      divider: p,
      children: x,
      className: S,
      useFlexGap: I = !1,
      ...O
    } = m, v = {
      direction: h,
      spacing: y,
      useFlexGap: I
    }, C = i();
    return /* @__PURE__ */ T.jsx(s, {
      as: g,
      ownerState: v,
      ref: u,
      className: X(C.root, S),
      ...O,
      children: p ? Hc(x, p) : x
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
const Jc = {
  black: "#000",
  white: "#fff"
}, zt = Jc, Qc = {
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
}, Zc = Qc, el = {
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
}, lt = el, tl = {
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
}, ut = tl, nl = {
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
}, It = nl, rl = {
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
}, dt = rl, ol = {
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
}, pt = ol, il = {
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
}, ft = il;
function ii() {
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
      paper: zt.white,
      default: zt.white
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
const si = ii();
function ai() {
  return {
    text: {
      primary: zt.white,
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
      active: zt.white,
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
const er = ai();
function no(e, t, n, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = In(e.main, i) : t === "dark" && (e.dark = Pn(e.main, s)));
}
function ro(e, t, n, o, i) {
  const s = i.light || i, a = i.dark || i * 1.5;
  t[n] || (t.hasOwnProperty(o) ? t[n] = t[o] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function sl(e = "light") {
  return e === "dark" ? {
    main: dt[200],
    light: dt[50],
    dark: dt[400]
  } : {
    main: dt[700],
    light: dt[400],
    dark: dt[800]
  };
}
function al(e = "light") {
  return e === "dark" ? {
    main: lt[200],
    light: lt[50],
    dark: lt[400]
  } : {
    main: lt[500],
    light: lt[300],
    dark: lt[700]
  };
}
function cl(e = "light") {
  return e === "dark" ? {
    main: ut[500],
    light: ut[300],
    dark: ut[700]
  } : {
    main: ut[700],
    light: ut[400],
    dark: ut[800]
  };
}
function ll(e = "light") {
  return e === "dark" ? {
    main: pt[400],
    light: pt[300],
    dark: pt[700]
  } : {
    main: pt[700],
    light: pt[500],
    dark: pt[900]
  };
}
function ul(e = "light") {
  return e === "dark" ? {
    main: ft[400],
    light: ft[300],
    dark: ft[700]
  } : {
    main: ft[800],
    light: ft[500],
    dark: ft[900]
  };
}
function dl(e = "light") {
  return e === "dark" ? {
    main: It[400],
    light: It[300],
    dark: It[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: It[500],
    dark: It[900]
  };
}
function pl(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function br(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    colorSpace: i,
    ...s
  } = e, a = e.primary || sl(t), c = e.secondary || al(t), l = e.error || cl(t), u = e.info || ll(t), f = e.success || ul(t), m = e.warning || dl(t);
  function g(x) {
    if (i)
      return pl(x);
    const S = Jr(x, er.text.primary) >= n ? er.text.primary : si.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const I = Jr(x, S);
      I < 3 && console.error([`MUI: The contrast ratio of ${I}:1 for ${S} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const h = ({
    color: x,
    name: S,
    mainShade: I = 500,
    lightShade: O = 300,
    darkShade: v = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[I] && (x.main = x[I]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${I}\` property.` : Ye(11, S ? ` (${S})` : "", I));
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
    return i ? (ro(i, x, "light", O, o), ro(i, x, "dark", v, o)) : (no(x, "light", O, o), no(x, "dark", v, o)), x.contrastText || (x.contrastText = g(x.main)), x;
  };
  let y;
  return t === "light" ? y = ii() : t === "dark" && (y = ai()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Te({
    // A collection of common colors.
    common: {
      ...zt
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
    grey: Zc,
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
  }, s);
}
function fl(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [i, s] = o;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function ml(e, t) {
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
function gl(e) {
  return Math.round(e * 1e5) / 1e5;
}
const oo = {
  textTransform: "uppercase"
}, io = '"Roboto", "Helvetica", "Arial", sans-serif';
function hl(e, t) {
  const {
    fontFamily: n = io,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
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
  const g = o / 14, h = f || ((x) => `${x / l * g}rem`), y = (x, S, I, O, v) => ({
    fontFamily: n,
    fontWeight: x,
    fontSize: h(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: I,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === io ? {
      letterSpacing: `${gl(O / S)}em`
    } : {},
    ...v,
    ...u
  }), p = {
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
    button: y(a, 14, 1.75, 0.4, oo),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, oo),
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
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...p
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const yl = 0.2, bl = 0.14, vl = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${yl})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${bl})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${vl})`].join(",");
}
const xl = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Tl = xl, El = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Cl = {
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
function so(e) {
  return `${Math.round(e)}ms`;
}
function Sl(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Ol(e) {
  const t = {
    ...El,
    ...e.easing
  }, n = {
    ...Cl,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Sl,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const f = (g) => typeof g == "string", m = (g) => !Number.isNaN(parseFloat(g));
        !f(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !m(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((f) => `${f} ${typeof a == "string" ? a : so(a)} ${c} ${typeof l == "string" ? l : so(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const wl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Rl = wl;
function $l(e) {
  return Me(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ci(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const i = Object.entries(o);
    for (let s = 0; s < i.length; s++) {
      const [a, c] = i[s];
      !$l(c) || a.startsWith("unstable_") ? delete o[a] : Me(c) && (o[a] = {
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
function ao(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Pl = (e) => {
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
function Il(e) {
  Object.assign(e, {
    alpha(t, n) {
      const o = this || e;
      return o.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : o.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : cn(t, Pl(n));
    },
    lighten(t, n) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #fff ${ao(n)})` : In(t, n);
    },
    darken(t, n) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #000 ${ao(n)})` : Pn(t, n);
    }
  });
}
function tr(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: o = {},
    spacing: i,
    palette: s = {},
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
  const m = br({
    ...s,
    colorSpace: u
  }), g = Rn(e);
  let h = Te(g, {
    mixins: ml(g.breakpoints, o),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Tl.slice(),
    typography: hl(m, c),
    transitions: Ol(a),
    zIndex: {
      ...Rl
    }
  });
  if (h = Te(h, f), h = t.reduce((y, p) => Te(y, p), h), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (x, S) => {
      let I;
      for (I in x) {
        const O = x[I];
        if (y.includes(I) && Object.keys(O).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = ie("", I);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${I}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: O
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[I] = {};
        }
      }
    };
    Object.keys(h.components).forEach((x) => {
      const S = h.components[x].styleOverrides;
      S && x.startsWith("Mui") && p(S, x);
    });
  }
  return h.unstable_sxConfig = {
    ...Wt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, h.unstable_sx = function(p) {
    return Tt({
      sx: p,
      theme: this
    });
  }, h.toRuntimeSource = ci, Il(h), h;
}
function nr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const kl = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = nr(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function li(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ui(e) {
  return e === "dark" ? kl : [];
}
function Nl(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: o,
    colorSpace: i,
    ...s
  } = e, a = br({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...li(a.mode),
      ...n
    },
    overlays: o || ui(a.mode),
    ...s
  };
}
function Al(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const jl = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ml = jl, _l = (e) => (t, n) => {
  const o = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let s = i;
  if (i === "class" && (s = ".%s"), i === "data" && (s = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Ml(e.cssVarPrefix).forEach((c) => {
        a[c] = n[c], delete n[c];
      }), s === "media" ? {
        [o]: n,
        "@media (prefers-color-scheme: dark)": {
          [o]: a
        }
      } : s ? {
        [s.replace("%s", t)]: a,
        [`${o}, ${s.replace("%s", t)}`]: n
      } : {
        [o]: {
          ...n,
          ...a
        }
      };
    }
    if (s && s !== "media")
      return `${o}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [o]: n
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return o;
};
function Bl(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function P(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function jt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ei(e);
}
function Le(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = At(jt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Dl(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ae = (e) => {
  try {
    return e();
  } catch {
  }
}, Ll = (e = "mui") => Lc(e);
function Vn(e, t, n, o, i) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const s = i === "dark" ? "dark" : "light";
  if (!o) {
    t[i] = Nl({
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
    ...c
  } = tr({
    ...o,
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
      ...li(s),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || ui(s)
  }, c;
}
function Fl(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: c = Al,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...f
  } = e, m = Object.keys(n)[0], g = o || (n.light && m !== "light" ? "light" : m), h = Ll(s), {
    [g]: y,
    light: p,
    dark: x,
    ...S
  } = n, I = {
    ...S
  };
  let O = y;
  if ((g === "dark" && !("dark" in n) || g === "light" && !("light" in n)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : Ye(21, g));
  let v;
  a && (v = "oklch");
  const C = Vn(v, I, O, f, g);
  p && !I.light && Vn(v, I, p, void 0, "light"), x && !I.dark && Vn(v, I, x, void 0, "dark");
  let k = {
    defaultColorScheme: g,
    ...C,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: h,
    colorSchemes: I,
    font: {
      ...fl(C.typography),
      ...C.font
    },
    spacing: Dl(f.spacing)
  };
  Object.keys(k.colorSchemes).forEach((V) => {
    const d = k.colorSchemes[V].palette, N = ($) => {
      const A = $.split("-"), G = A[1], F = A[2];
      return h($, d[G][F]);
    };
    d.mode === "light" && (P(d.common, "background", "#fff"), P(d.common, "onBackground", "#000")), d.mode === "dark" && (P(d.common, "background", "#000"), P(d.common, "onBackground", "#fff"));
    function w($, A, G) {
      if (v) {
        let F;
        return $ === Ze && (F = `transparent ${((1 - G) * 100).toFixed(0)}%`), $ === se && (F = `#000 ${(G * 100).toFixed(0)}%`), $ === ae && (F = `#fff ${(G * 100).toFixed(0)}%`), `color-mix(in ${v}, ${A}, ${F})`;
      }
      return $(A, G);
    }
    if (Bl(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      P(d.Alert, "errorColor", w(se, d.error.light, 0.6)), P(d.Alert, "infoColor", w(se, d.info.light, 0.6)), P(d.Alert, "successColor", w(se, d.success.light, 0.6)), P(d.Alert, "warningColor", w(se, d.warning.light, 0.6)), P(d.Alert, "errorFilledBg", N("palette-error-main")), P(d.Alert, "infoFilledBg", N("palette-info-main")), P(d.Alert, "successFilledBg", N("palette-success-main")), P(d.Alert, "warningFilledBg", N("palette-warning-main")), P(d.Alert, "errorFilledColor", Ae(() => d.getContrastText(d.error.main))), P(d.Alert, "infoFilledColor", Ae(() => d.getContrastText(d.info.main))), P(d.Alert, "successFilledColor", Ae(() => d.getContrastText(d.success.main))), P(d.Alert, "warningFilledColor", Ae(() => d.getContrastText(d.warning.main))), P(d.Alert, "errorStandardBg", w(ae, d.error.light, 0.9)), P(d.Alert, "infoStandardBg", w(ae, d.info.light, 0.9)), P(d.Alert, "successStandardBg", w(ae, d.success.light, 0.9)), P(d.Alert, "warningStandardBg", w(ae, d.warning.light, 0.9)), P(d.Alert, "errorIconColor", N("palette-error-main")), P(d.Alert, "infoIconColor", N("palette-info-main")), P(d.Alert, "successIconColor", N("palette-success-main")), P(d.Alert, "warningIconColor", N("palette-warning-main")), P(d.AppBar, "defaultBg", N("palette-grey-100")), P(d.Avatar, "defaultBg", N("palette-grey-400")), P(d.Button, "inheritContainedBg", N("palette-grey-300")), P(d.Button, "inheritContainedHoverBg", N("palette-grey-A100")), P(d.Chip, "defaultBorder", N("palette-grey-400")), P(d.Chip, "defaultAvatarColor", N("palette-grey-700")), P(d.Chip, "defaultIconColor", N("palette-grey-700")), P(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), P(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), P(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), P(d.LinearProgress, "primaryBg", w(ae, d.primary.main, 0.62)), P(d.LinearProgress, "secondaryBg", w(ae, d.secondary.main, 0.62)), P(d.LinearProgress, "errorBg", w(ae, d.error.main, 0.62)), P(d.LinearProgress, "infoBg", w(ae, d.info.main, 0.62)), P(d.LinearProgress, "successBg", w(ae, d.success.main, 0.62)), P(d.LinearProgress, "warningBg", w(ae, d.warning.main, 0.62)), P(d.Skeleton, "bg", v ? w(Ze, d.text.primary, 0.11) : `rgba(${N("palette-text-primaryChannel")} / 0.11)`), P(d.Slider, "primaryTrack", w(ae, d.primary.main, 0.62)), P(d.Slider, "secondaryTrack", w(ae, d.secondary.main, 0.62)), P(d.Slider, "errorTrack", w(ae, d.error.main, 0.62)), P(d.Slider, "infoTrack", w(ae, d.info.main, 0.62)), P(d.Slider, "successTrack", w(ae, d.success.main, 0.62)), P(d.Slider, "warningTrack", w(ae, d.warning.main, 0.62));
      const $ = v ? w(se, d.background.default, 0.6825) : Zt(d.background.default, 0.8);
      P(d.SnackbarContent, "bg", $), P(d.SnackbarContent, "color", Ae(() => v ? er.text.primary : d.getContrastText($))), P(d.SpeedDialAction, "fabHoverBg", Zt(d.background.paper, 0.15)), P(d.StepConnector, "border", N("palette-grey-400")), P(d.StepContent, "border", N("palette-grey-400")), P(d.Switch, "defaultColor", N("palette-common-white")), P(d.Switch, "defaultDisabledColor", N("palette-grey-100")), P(d.Switch, "primaryDisabledColor", w(ae, d.primary.main, 0.62)), P(d.Switch, "secondaryDisabledColor", w(ae, d.secondary.main, 0.62)), P(d.Switch, "errorDisabledColor", w(ae, d.error.main, 0.62)), P(d.Switch, "infoDisabledColor", w(ae, d.info.main, 0.62)), P(d.Switch, "successDisabledColor", w(ae, d.success.main, 0.62)), P(d.Switch, "warningDisabledColor", w(ae, d.warning.main, 0.62)), P(d.TableCell, "border", w(ae, w(Ze, d.divider, 1), 0.88)), P(d.Tooltip, "bg", w(Ze, d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      P(d.Alert, "errorColor", w(ae, d.error.light, 0.6)), P(d.Alert, "infoColor", w(ae, d.info.light, 0.6)), P(d.Alert, "successColor", w(ae, d.success.light, 0.6)), P(d.Alert, "warningColor", w(ae, d.warning.light, 0.6)), P(d.Alert, "errorFilledBg", N("palette-error-dark")), P(d.Alert, "infoFilledBg", N("palette-info-dark")), P(d.Alert, "successFilledBg", N("palette-success-dark")), P(d.Alert, "warningFilledBg", N("palette-warning-dark")), P(d.Alert, "errorFilledColor", Ae(() => d.getContrastText(d.error.dark))), P(d.Alert, "infoFilledColor", Ae(() => d.getContrastText(d.info.dark))), P(d.Alert, "successFilledColor", Ae(() => d.getContrastText(d.success.dark))), P(d.Alert, "warningFilledColor", Ae(() => d.getContrastText(d.warning.dark))), P(d.Alert, "errorStandardBg", w(se, d.error.light, 0.9)), P(d.Alert, "infoStandardBg", w(se, d.info.light, 0.9)), P(d.Alert, "successStandardBg", w(se, d.success.light, 0.9)), P(d.Alert, "warningStandardBg", w(se, d.warning.light, 0.9)), P(d.Alert, "errorIconColor", N("palette-error-main")), P(d.Alert, "infoIconColor", N("palette-info-main")), P(d.Alert, "successIconColor", N("palette-success-main")), P(d.Alert, "warningIconColor", N("palette-warning-main")), P(d.AppBar, "defaultBg", N("palette-grey-900")), P(d.AppBar, "darkBg", N("palette-background-paper")), P(d.AppBar, "darkColor", N("palette-text-primary")), P(d.Avatar, "defaultBg", N("palette-grey-600")), P(d.Button, "inheritContainedBg", N("palette-grey-800")), P(d.Button, "inheritContainedHoverBg", N("palette-grey-700")), P(d.Chip, "defaultBorder", N("palette-grey-700")), P(d.Chip, "defaultAvatarColor", N("palette-grey-300")), P(d.Chip, "defaultIconColor", N("palette-grey-300")), P(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), P(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), P(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), P(d.LinearProgress, "primaryBg", w(se, d.primary.main, 0.5)), P(d.LinearProgress, "secondaryBg", w(se, d.secondary.main, 0.5)), P(d.LinearProgress, "errorBg", w(se, d.error.main, 0.5)), P(d.LinearProgress, "infoBg", w(se, d.info.main, 0.5)), P(d.LinearProgress, "successBg", w(se, d.success.main, 0.5)), P(d.LinearProgress, "warningBg", w(se, d.warning.main, 0.5)), P(d.Skeleton, "bg", v ? w(Ze, d.text.primary, 0.13) : `rgba(${N("palette-text-primaryChannel")} / 0.13)`), P(d.Slider, "primaryTrack", w(se, d.primary.main, 0.5)), P(d.Slider, "secondaryTrack", w(se, d.secondary.main, 0.5)), P(d.Slider, "errorTrack", w(se, d.error.main, 0.5)), P(d.Slider, "infoTrack", w(se, d.info.main, 0.5)), P(d.Slider, "successTrack", w(se, d.success.main, 0.5)), P(d.Slider, "warningTrack", w(se, d.warning.main, 0.5));
      const $ = v ? w(ae, d.background.default, 0.985) : Zt(d.background.default, 0.98);
      P(d.SnackbarContent, "bg", $), P(d.SnackbarContent, "color", Ae(() => v ? si.text.primary : d.getContrastText($))), P(d.SpeedDialAction, "fabHoverBg", Zt(d.background.paper, 0.15)), P(d.StepConnector, "border", N("palette-grey-600")), P(d.StepContent, "border", N("palette-grey-600")), P(d.Switch, "defaultColor", N("palette-grey-300")), P(d.Switch, "defaultDisabledColor", N("palette-grey-600")), P(d.Switch, "primaryDisabledColor", w(se, d.primary.main, 0.55)), P(d.Switch, "secondaryDisabledColor", w(se, d.secondary.main, 0.55)), P(d.Switch, "errorDisabledColor", w(se, d.error.main, 0.55)), P(d.Switch, "infoDisabledColor", w(se, d.info.main, 0.55)), P(d.Switch, "successDisabledColor", w(se, d.success.main, 0.55)), P(d.Switch, "warningDisabledColor", w(se, d.warning.main, 0.55)), P(d.TableCell, "border", w(se, w(Ze, d.divider, 1), 0.68)), P(d.Tooltip, "bg", w(Ze, d.grey[700], 0.92));
    }
    Le(d.background, "default"), Le(d.background, "paper"), Le(d.common, "background"), Le(d.common, "onBackground"), Le(d, "divider"), Object.keys(d).forEach(($) => {
      const A = d[$];
      $ !== "tonalOffset" && A && typeof A == "object" && (A.main && P(d[$], "mainChannel", At(jt(A.main))), A.light && P(d[$], "lightChannel", At(jt(A.light))), A.dark && P(d[$], "darkChannel", At(jt(A.dark))), A.contrastText && P(d[$], "contrastTextChannel", At(jt(A.contrastText))), $ === "text" && (Le(d[$], "primary"), Le(d[$], "secondary")), $ === "action" && (A.active && Le(d[$], "active"), A.selected && Le(d[$], "selected")));
    });
  }), k = t.reduce((V, d) => Te(V, d), k);
  const j = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: c,
    getSelector: _l(k),
    enableContrastVars: a
  }, {
    vars: M,
    generateThemeVars: L,
    generateStyleSheets: Y
  } = Vc(k, j);
  return k.vars = M, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([V, d]) => {
    k[V] = d;
  }), k.generateThemeVars = L, k.generateStyleSheets = Y, k.generateSpacing = function() {
    return Ho(f.spacing, Tn(this));
  }, k.getColorSchemeSelector = Uc(l), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = c, k.unstable_sxConfig = {
    ...Wt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, k.unstable_sx = function(d) {
    return Tt({
      sx: d,
      theme: this
    });
  }, k.toRuntimeSource = ci, k;
}
function co(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: br({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function di(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: o = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = n == null ? void 0 : n.mode,
    ...a
  } = e, c = s || "light", l = i == null ? void 0 : i[c], u = {
    ...i,
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
    }, co(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, co(m, "light", u.light)), m;
  }
  return !n && !("light" in u) && c === "light" && (u.light = !0), Fl({
    ...a,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof o != "boolean" && o
  }, ...t);
}
const zl = di(), pi = zl, vr = "$$material";
function Gt() {
  const e = hr(pi);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[vr] || e;
}
function Vl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ul = (e) => Vl(e) && e !== "classes", Ot = Ul, Wl = Qo({
  themeId: vr,
  defaultTheme: pi,
  rootShouldForwardProp: Ot
}), q = Wl;
function Gl() {
  return gr;
}
process.env.NODE_ENV !== "production" && (r.node, r.object.isRequired);
function le(e) {
  return Mc(e);
}
const fi = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (fi.displayName = "ListContext");
const ke = fi;
function Yl(e) {
  return ie("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const Hl = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: i
  } = e;
  return pe({
    root: ["root", !n && "padding", o && "dense", i && "subheader"]
  }, Yl, t);
}, ql = q("ul", {
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
}), mi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
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
  }, h = Hl(g);
  return /* @__PURE__ */ T.jsx(ke.Provider, {
    value: m,
    children: /* @__PURE__ */ T.jsxs(ql, {
      as: a,
      className: X(h.root, s),
      ref: n,
      ownerState: g,
      ...f,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (mi.propTypes = {
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
const rr = mi;
function De(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function Kl(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Xl(e, t, n, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof s == "function" && !Kl(s) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const xr = De(r.elementType, Xl);
function ln(e) {
  return typeof e == "string";
}
const Jl = Dc, ge = Jl;
function Ee(...e) {
  const t = E.useRef(void 0), n = E.useCallback((o) => {
    const i = e.map((s) => {
      if (s == null)
        return null;
      if (typeof s == "function") {
        const a = s, c = a(o);
        return typeof c == "function" ? c : () => {
          a(null);
        };
      }
      return s.current = o, () => {
        s.current = null;
      };
    });
    return () => {
      i.forEach((s) => s == null ? void 0 : s());
    };
  }, e);
  return E.useMemo(() => e.every((o) => o == null) ? null : (o) => {
    t.current && (t.current(), t.current = void 0), o != null && (t.current = n(o));
  }, e);
}
function Ql(e) {
  return ie("MuiListItem", e);
}
ce("MuiListItem", ["root", "container", "dense", "alignItemsFlexStart", "divider", "gutters", "padding", "secondaryAction"]);
const Zl = r.oneOfType([r.func, r.object]), gi = Zl;
function lo(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function vt(e) {
  const t = E.useRef(e);
  return Et(() => {
    t.current = e;
  }), E.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
const uo = {};
function hi(e, t) {
  const n = E.useRef(uo);
  return n.current === uo && (n.current = e(t)), n;
}
class un {
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
    return new un();
  }
  static use() {
    const t = hi(un.create).current, [n, o] = E.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, E.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = tu(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function eu() {
  return un.use();
}
function tu() {
  let e, t;
  const n = new Promise((o, i) => {
    e = o, t = i;
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
function yi(e, t) {
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
function ir(e, t) {
  return ir = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ir(e, t);
}
function bi(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ir(e, t);
}
const po = {
  disabled: !1
};
var nu = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.shape({
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
const dn = _e.createContext(null);
var ru = function(t) {
  return t.scrollTop;
}, Mt = "unmounted", tt = "exited", nt = "entering", gt = "entered", sr = "exiting", Ve = /* @__PURE__ */ function(e) {
  bi(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = i, c = a && !a.isMounting ? o.enter : o.appear, l;
    return s.appearStatus = null, o.in ? c ? (l = tt, s.appearStatus = nt) : l = gt : o.unmountOnExit || o.mountOnEnter ? l = Mt : l = tt, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Mt ? {
      status: tt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== nt && a !== gt && (s = nt) : (a === nt || a === gt) && (s = sr);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, s, a, c;
    return s = a = c = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, c = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: c
    };
  }, n.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === nt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Jt.findDOMNode(this);
          a && ru(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === tt && this.setState({
        status: Mt
      });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, c = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [c] : [Jt.findDOMNode(this), c], u = l[0], f = l[1], m = this.getTimeouts(), g = c ? m.appear : m.enter;
    if (!i && !a || po.disabled) {
      this.safeSetState({
        status: gt
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: nt
    }, function() {
      s.props.onEntering(u, f), s.onTransitionEnd(g, function() {
        s.safeSetState({
          status: gt
        }, function() {
          s.props.onEntered(u, f);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Jt.findDOMNode(this);
    if (!s || po.disabled) {
      this.safeSetState({
        status: tt
      }, function() {
        i.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: sr
    }, function() {
      i.props.onExiting(c), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: tt
        }, function() {
          i.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, n.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(c) {
      a && (a = !1, s.nextCallback = null, i(c));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Jt.findDOMNode(this), c = i == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], f = l[1];
      this.props.addEndListener(u, f);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Mt)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var c = yi(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ _e.createElement(dn.Provider, {
        value: null
      }, typeof a == "function" ? a(i, c) : _e.cloneElement(_e.Children.only(a), c))
    );
  }, t;
}(_e.Component);
Ve.contextType = dn;
Ve.propTypes = process.env.NODE_ENV !== "production" ? {
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
    current: typeof Element > "u" ? r.any : function(e, t, n, o, i, s) {
      var a = e[t];
      return r.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, o, i, s);
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
    var n = nu;
    t.addEndListener || (n = n.isRequired);
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
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
function mt() {
}
Ve.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: mt,
  onEntering: mt,
  onEntered: mt,
  onExit: mt,
  onExiting: mt,
  onExited: mt
};
Ve.UNMOUNTED = Mt;
Ve.EXITED = tt;
Ve.ENTERING = nt;
Ve.ENTERED = gt;
Ve.EXITING = sr;
const Tr = Ve;
function ou(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Er(e, t) {
  var n = function(s) {
    return t && rn(s) ? t(s) : s;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && $s.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    o[i.key] = n(i);
  }), o;
}
function iu(e, t) {
  e = e || {}, t = t || {};
  function n(f) {
    return f in t ? t[f] : e[f];
  }
  var o = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (o[s] = i, i = []) : i.push(s);
  var a, c = {};
  for (var l in t) {
    if (o[l])
      for (a = 0; a < o[l].length; a++) {
        var u = o[l][a];
        c[o[l][a]] = n(u);
      }
    c[l] = n(l);
  }
  for (a = 0; a < i.length; a++)
    c[i[a]] = n(i[a]);
  return c;
}
function ot(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function su(e, t) {
  return Er(e.children, function(n) {
    return on(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: ot(n, "appear", e),
      enter: ot(n, "enter", e),
      exit: ot(n, "exit", e)
    });
  });
}
function au(e, t, n) {
  var o = Er(e.children), i = iu(t, o);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (rn(a)) {
      var c = s in t, l = s in o, u = t[s], f = rn(u) && !u.props.in;
      l && (!c || f) ? i[s] = on(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: ot(a, "exit", e),
        enter: ot(a, "enter", e)
      }) : !l && c && !f ? i[s] = on(a, {
        in: !1
      }) : l && c && rn(u) && (i[s] = on(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: ot(a, "exit", e),
        enter: ot(a, "enter", e)
      }));
    }
  }), i;
}
var cu = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, lu = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Cr = /* @__PURE__ */ function(e) {
  bi(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = s.handleExited.bind(ou(s));
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
    var a = s.children, c = s.handleExited, l = s.firstRender;
    return {
      children: l ? su(i, c) : au(i, a, c),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = Er(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(c) {
      var l = or({}, c.children);
      return delete l[i.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, c = yi(i, ["component", "childFactory"]), l = this.state.contextValue, u = cu(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, s === null ? /* @__PURE__ */ _e.createElement(dn.Provider, {
      value: l
    }, u) : /* @__PURE__ */ _e.createElement(dn.Provider, {
      value: l
    }, /* @__PURE__ */ _e.createElement(s, c, u));
  }, t;
}(_e.Component);
Cr.propTypes = process.env.NODE_ENV !== "production" ? {
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
Cr.defaultProps = lu;
const uu = Cr, du = [];
function pu(e) {
  E.useEffect(e, du);
}
class Sr {
  constructor() {
    Rt(this, "currentId", null);
    Rt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Rt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Sr();
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
function vi() {
  const e = hi(Sr.create).current;
  return pu(e.disposeEffect), e;
}
function xi(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: c,
    onExited: l,
    timeout: u
  } = e, [f, m] = E.useState(!1), g = X(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), h = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
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
process.env.NODE_ENV !== "production" && (xi.propTypes = {
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
const fu = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), we = fu, ar = 550, mu = 80, gu = Vt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, hu = Vt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, yu = Vt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, bu = q("span", {
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
}), vu = q(xi, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${we.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${gu};
    animation-duration: ${ar}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${we.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${we.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${we.childLeaving} {
    opacity: 0;
    animation-name: ${hu};
    animation-duration: ${ar}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${we.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${yu};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ti = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a,
    ...c
  } = o, [l, u] = E.useState([]), f = E.useRef(0), m = E.useRef(null);
  E.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const g = E.useRef(!1), h = vi(), y = E.useRef(null), p = E.useRef(null), x = E.useCallback((v) => {
    const {
      pulsate: C,
      rippleX: k,
      rippleY: j,
      rippleSize: M,
      cb: L
    } = v;
    u((Y) => [...Y, /* @__PURE__ */ T.jsx(vu, {
      classes: {
        ripple: X(s.ripple, we.ripple),
        rippleVisible: X(s.rippleVisible, we.rippleVisible),
        ripplePulsate: X(s.ripplePulsate, we.ripplePulsate),
        child: X(s.child, we.child),
        childLeaving: X(s.childLeaving, we.childLeaving),
        childPulsate: X(s.childPulsate, we.childPulsate)
      },
      timeout: ar,
      pulsate: C,
      rippleX: k,
      rippleY: j,
      rippleSize: M
    }, f.current)]), f.current += 1, m.current = L;
  }, [s]), S = E.useCallback((v = {}, C = {}, k = () => {
  }) => {
    const {
      pulsate: j = !1,
      center: M = i || C.pulsate,
      fakeElement: L = !1
      // For test purposes
    } = C;
    if ((v == null ? void 0 : v.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (g.current = !0);
    const Y = L ? null : p.current, V = Y ? Y.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let d, N, w;
    if (M || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      d = Math.round(V.width / 2), N = Math.round(V.height / 2);
    else {
      const {
        clientX: $,
        clientY: A
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      d = Math.round($ - V.left), N = Math.round(A - V.top);
    }
    if (M)
      w = Math.sqrt((2 * V.width ** 2 + V.height ** 2) / 3), w % 2 === 0 && (w += 1);
    else {
      const $ = Math.max(Math.abs((Y ? Y.clientWidth : 0) - d), d) * 2 + 2, A = Math.max(Math.abs((Y ? Y.clientHeight : 0) - N), N) * 2 + 2;
      w = Math.sqrt($ ** 2 + A ** 2);
    }
    v != null && v.touches ? y.current === null && (y.current = () => {
      x({
        pulsate: j,
        rippleX: d,
        rippleY: N,
        rippleSize: w,
        cb: k
      });
    }, h.start(mu, () => {
      y.current && (y.current(), y.current = null);
    })) : x({
      pulsate: j,
      rippleX: d,
      rippleY: N,
      rippleSize: w,
      cb: k
    });
  }, [i, x, h]), I = E.useCallback(() => {
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
    y.current = null, u((k) => k.length > 0 ? k.slice(1) : k), m.current = C;
  }, [h]);
  return E.useImperativeHandle(n, () => ({
    pulsate: I,
    start: S,
    stop: O
  }), [I, S, O]), /* @__PURE__ */ T.jsx(bu, {
    className: X(we.root, s.root, a),
    ref: p,
    ...c,
    children: /* @__PURE__ */ T.jsx(uu, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
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
const xu = Ti;
function Tu(e) {
  return ie("MuiButtonBase", e);
}
const Eu = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), Cu = Eu, Su = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: i
  } = e, a = pe({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Tu, i);
  return n && o && (a.root += ` ${o}`), a;
}, Ou = q("button", {
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
  [`&.${Cu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ei = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
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
    onDragLeave: I,
    onFocus: O,
    onFocusVisible: v,
    onKeyDown: C,
    onKeyUp: k,
    onMouseDown: j,
    onMouseLeave: M,
    onMouseUp: L,
    onTouchEnd: Y,
    onTouchMove: V,
    onTouchStart: d,
    tabIndex: N = 0,
    TouchRippleProps: w,
    touchRippleRef: $,
    type: A,
    ...G
  } = o, F = E.useRef(null), D = eu(), R = Ee(D.ref, $), [b, _] = E.useState(!1);
  u && b && _(!1), E.useImperativeHandle(i, () => ({
    focusVisible: () => {
      _(!0), F.current.focus();
    }
  }), []);
  const z = D.shouldMount && !f && !u;
  E.useEffect(() => {
    b && g && !f && D.pulsate();
  }, [f, g, b, D]);
  const U = Fe(D, "start", j, m), Z = Fe(D, "stop", S, m), J = Fe(D, "stop", I, m), H = Fe(D, "stop", L, m), Q = Fe(D, "stop", (ne) => {
    b && ne.preventDefault(), M && M(ne);
  }, m), te = Fe(D, "start", d, m), W = Fe(D, "stop", Y, m), ee = Fe(D, "stop", V, m), B = Fe(D, "stop", (ne) => {
    lo(ne.target) || _(!1), p && p(ne);
  }, !1), me = vt((ne) => {
    F.current || (F.current = ne.currentTarget), lo(ne.target) && (_(!0), v && v(ne)), O && O(ne);
  }), xe = () => {
    const ne = F.current;
    return l && l !== "button" && !(ne.tagName === "A" && ne.href);
  }, Pe = vt((ne) => {
    g && !ne.repeat && b && ne.key === " " && D.stop(ne, () => {
      D.start(ne);
    }), ne.target === ne.currentTarget && xe() && ne.key === " " && ne.preventDefault(), C && C(ne), ne.target === ne.currentTarget && xe() && ne.key === "Enter" && !u && (ne.preventDefault(), x && x(ne));
  }), Kt = vt((ne) => {
    g && ne.key === " " && b && !ne.defaultPrevented && D.stop(ne, () => {
      D.pulsate(ne);
    }), k && k(ne), x && ne.target === ne.currentTarget && xe() && ne.key === " " && !ne.defaultPrevented && x(ne);
  });
  let Xe = l;
  Xe === "button" && (G.href || G.to) && (Xe = y);
  const Ue = {};
  Xe === "button" ? (Ue.type = A === void 0 ? "button" : A, Ue.disabled = u) : (!G.href && !G.to && (Ue.role = "button"), u && (Ue["aria-disabled"] = u));
  const Je = Ee(n, F), wt = {
    ...o,
    centerRipple: s,
    component: l,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: m,
    focusRipple: g,
    tabIndex: N,
    focusVisible: b
  }, Ce = Su(wt);
  return /* @__PURE__ */ T.jsxs(Ou, {
    as: Xe,
    className: X(Ce.root, c),
    ownerState: wt,
    onBlur: B,
    onClick: x,
    onContextMenu: Z,
    onFocus: me,
    onKeyDown: Pe,
    onKeyUp: Kt,
    onMouseDown: U,
    onMouseLeave: Q,
    onMouseUp: H,
    onDragLeave: J,
    onTouchEnd: W,
    onTouchMove: ee,
    onTouchStart: te,
    ref: Je,
    tabIndex: u ? -1 : N,
    type: A,
    ...Ue,
    ...G,
    children: [a, z ? /* @__PURE__ */ T.jsx(xu, {
      ref: R,
      center: s,
      ...w
    }) : null]
  });
});
function Fe(e, t, n, o = !1) {
  return vt((i) => (n && n(i), o || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (Ei.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: gi,
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
  component: xr,
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
const Yt = Ei;
function wu(e) {
  return ie("MuiListItemButton", e);
}
const Ru = ce("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), ht = Ru, $u = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Pu = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: o,
    disabled: i,
    disableGutters: s,
    divider: a,
    selected: c
  } = e, u = pe({
    root: ["root", o && "dense", !s && "gutters", a && "divider", i && "disabled", t === "flex-start" && "alignItemsFlexStart", c && "selected"]
  }, wu, n);
  return {
    ...n,
    ...u
  };
}, Iu = q(Yt, {
  shouldForwardProp: (e) => Ot(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: $u
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
  [`&.${ht.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${ht.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${ht.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${ht.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ht.disabled}`]: {
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
}))), Ci = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: i = "center",
    autoFocus: s = !1,
    component: a = "div",
    children: c,
    dense: l = !1,
    disableGutters: u = !1,
    divider: f = !1,
    focusVisibleClassName: m,
    selected: g = !1,
    className: h,
    ...y
  } = o, p = E.useContext(ke), x = E.useMemo(() => ({
    dense: l || p.dense || !1,
    alignItems: i,
    disableGutters: u
  }), [i, p.dense, l, u]), S = E.useRef(null);
  Et(() => {
    s && (S.current ? S.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [s]);
  const I = {
    ...o,
    alignItems: i,
    dense: x.dense,
    disableGutters: u,
    divider: f,
    selected: g
  }, O = Pu(I), v = Ee(S, n);
  return /* @__PURE__ */ T.jsx(ke.Provider, {
    value: x,
    children: /* @__PURE__ */ T.jsx(Iu, {
      ref: v,
      href: y.href || y.to,
      component: (y.href || y.to) && a === "div" ? "button" : a,
      focusVisibleClassName: X(O.focusVisible, m),
      ownerState: I,
      className: X(O.root, h),
      ...y,
      classes: O,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Ci.propTypes = {
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
const fo = Ci;
function ku(e) {
  return ie("MuiListItemSecondaryAction", e);
}
ce("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const Nu = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return pe({
    root: ["root", t && "disableGutters"]
  }, ku, n);
}, Au = q("div", {
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
}), Or = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: i,
    ...s
  } = o, a = E.useContext(ke), c = {
    ...o,
    disableGutters: a.disableGutters
  }, l = Nu(c);
  return /* @__PURE__ */ T.jsx(Au, {
    className: X(l.root, i),
    ownerState: c,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (Or.propTypes = {
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
Or.muiName = "ListItemSecondaryAction";
const ju = Or, Mu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.hasSecondaryAction && t.secondaryAction];
}, _u = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: o,
    disableGutters: i,
    disablePadding: s,
    divider: a,
    hasSecondaryAction: c
  } = e;
  return pe({
    root: ["root", o && "dense", !i && "gutters", !s && "padding", a && "divider", t === "flex-start" && "alignItemsFlexStart", c && "secondaryAction"],
    container: ["container"]
  }, Ql, n);
}, Bu = q("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: Mu
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
      [`& > .${ht.root}`]: {
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
}))), Du = q("li", {
  name: "MuiListItem",
  slot: "Container"
})({
  position: "relative"
}), Si = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: i = "center",
    children: s,
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
    slotProps: I = {},
    slots: O = {},
    ...v
  } = o, C = E.useContext(ke), k = E.useMemo(() => ({
    dense: h || C.dense || !1,
    alignItems: i,
    disableGutters: y
  }), [i, C.dense, h, y]), j = E.useRef(null), M = E.Children.toArray(s), L = M.length && oi(M[M.length - 1], ["ListItemSecondaryAction"]), Y = {
    ...o,
    alignItems: i,
    dense: k.dense,
    disableGutters: y,
    disablePadding: p,
    divider: x,
    hasSecondaryAction: L
  }, V = _u(Y), d = Ee(j, n), N = O.root || l.Root || Bu, w = I.root || u.root || {}, $ = {
    className: X(V.root, w.className, a),
    ...v
  };
  let A = c || "li";
  return L ? (A = !$.component && !c ? "div" : A, f === "li" && (A === "li" ? A = "div" : $.component === "li" && ($.component = "div")), /* @__PURE__ */ T.jsx(ke.Provider, {
    value: k,
    children: /* @__PURE__ */ T.jsxs(Du, {
      as: f,
      className: X(V.container, m),
      ref: d,
      ownerState: Y,
      ...g,
      children: [/* @__PURE__ */ T.jsx(N, {
        ...w,
        ...!ln(N) && {
          as: A,
          ownerState: {
            ...Y,
            ...w.ownerState
          }
        },
        ...$,
        children: M
      }), M.pop()]
    })
  })) : /* @__PURE__ */ T.jsx(ke.Provider, {
    value: k,
    children: /* @__PURE__ */ T.jsxs(N, {
      ...w,
      as: A,
      ref: d,
      ...!ln(N) && {
        ownerState: {
          ...Y,
          ...w.ownerState
        }
      },
      ...$,
      children: [M, S && /* @__PURE__ */ T.jsx(ju, {
        children: S
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Si.propTypes = {
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
    const t = E.Children.toArray(e.children);
    let n = -1;
    for (let o = t.length - 1; o >= 0; o -= 1) {
      const i = t[o];
      if (oi(i, ["ListItemSecondaryAction"])) {
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
  ContainerComponent: xr,
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
const mo = Si;
function Lu(e) {
  return ie("MuiListItemIcon", e);
}
const Fu = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), go = Fu, zu = (e) => {
  const {
    alignItems: t,
    classes: n
  } = e;
  return pe({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, Lu, n);
}, Vu = q("div", {
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
}))), Oi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: i,
    ...s
  } = o, a = E.useContext(ke), c = {
    ...o,
    alignItems: a.alignItems
  }, l = zu(c);
  return /* @__PURE__ */ T.jsx(Vu, {
    className: X(l.root, i),
    ownerState: c,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (Oi.propTypes = {
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
const ho = Oi;
function Uu(e) {
  return typeof e.main == "string";
}
function Wu(e, t = []) {
  if (!Uu(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function ct(e = []) {
  return ([, t]) => t && Wu(t, e);
}
function Gu(e) {
  return ie("MuiTypography", e);
}
const Yu = ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), yo = Yu, Hu = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, qu = Gl(), Ku = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: i,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, e.align !== "inherit" && `align${K(t)}`, n && "gutterBottom", o && "noWrap", i && "paragraph"]
  };
  return pe(c, Gu, a);
}, Xu = q("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${K(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
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
    })), ...Object.entries(e.palette).filter(ct()).map(([n]) => ({
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
})), bo = {
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
}, wi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    color: o,
    ...i
  } = le({
    props: t,
    name: "MuiTypography"
  }), s = !Hu[o], a = qu({
    ...i,
    ...s && {
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
    variantMapping: y = bo,
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
  }, S = u || (g ? "p" : y[h] || bo[h]) || "span", I = Ku(x);
  return /* @__PURE__ */ T.jsx(Xu, {
    as: S,
    ref: n,
    className: X(I.root, l),
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
process.env.NODE_ENV !== "production" && (wi.propTypes = {
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
const Oe = wi;
function Ju(e) {
  return ie("MuiListItemText", e);
}
const Qu = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), yt = Qu;
function Ri(e, t, n) {
  return e === void 0 || ln(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function $i(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Pi(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function vo(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Ii(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const h = X(n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, o == null ? void 0 : o.className), y = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...o == null ? void 0 : o.style
    }, p = {
      ...n,
      ...i,
      ...o
    };
    return h.length > 0 && (p.className = h), Object.keys(y).length > 0 && (p.style = y), {
      props: p,
      internalRef: void 0
    };
  }
  const a = Pi({
    ...i,
    ...o
  }), c = vo(o), l = vo(i), u = t(a), f = X(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, o == null ? void 0 : o.className), m = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
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
function be(e, t) {
  const {
    className: n,
    elementType: o,
    ownerState: i,
    externalForwardedProps: s,
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
  } = s, h = f[e] || o, y = $i(m[e], i), {
    props: {
      component: p,
      ...x
    },
    internalRef: S
  } = Ii({
    className: n,
    ...l,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: y
  }), I = Ee(S, y == null ? void 0 : y.ref, t.ref), O = e === "root" ? p || u : p, v = Ri(h, {
    ...e === "root" && !u && !f[e] && a,
    ...e !== "root" && !f[e] && a,
    ...x,
    ...O && !c && {
      as: O
    },
    ...O && c && {
      component: O
    },
    ref: I
  }, i);
  return [h, v];
}
const Zu = (e) => {
  const {
    classes: t,
    inset: n,
    primary: o,
    secondary: i,
    dense: s
  } = e;
  return pe({
    root: ["root", n && "inset", s && "dense", o && i && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, Ju, t);
}, ed = q("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${yt.primary}`]: t.primary
    }, {
      [`& .${yt.secondary}`]: t.secondary
    }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${yo.root}:where(& .${yt.primary})`]: {
    display: "block"
  },
  [`.${yo.root}:where(& .${yt.secondary})`]: {
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
}), ki = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiListItemText"
  }), {
    children: i,
    className: s,
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
  } = E.useContext(ke);
  let x = l ?? i, S = f;
  const I = {
    ...o,
    disableTypography: a,
    inset: c,
    primary: !!x,
    secondary: !!S,
    dense: p
  }, O = Zu(I), v = {
    slots: g,
    slotProps: {
      primary: u,
      secondary: m,
      ...h
    }
  }, [C, k] = be("root", {
    className: X(O.root, s),
    elementType: ed,
    externalForwardedProps: {
      ...v,
      ...y
    },
    ownerState: I,
    ref: n
  }), [j, M] = be("primary", {
    className: O.primary,
    elementType: Oe,
    externalForwardedProps: v,
    ownerState: I
  }), [L, Y] = be("secondary", {
    className: O.secondary,
    elementType: Oe,
    externalForwardedProps: v,
    ownerState: I
  });
  return x != null && x.type !== Oe && !a && (x = /* @__PURE__ */ T.jsx(j, {
    variant: p ? "body2" : "body1",
    component: M != null && M.variant ? void 0 : "span",
    ...M,
    children: x
  })), S != null && S.type !== Oe && !a && (S = /* @__PURE__ */ T.jsx(L, {
    variant: "body2",
    color: "textSecondary",
    ...Y,
    children: S
  })), /* @__PURE__ */ T.jsxs(C, {
    ...k,
    children: [x, S]
  });
});
process.env.NODE_ENV !== "production" && (ki.propTypes = {
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
const xo = ki, Ni = Xc({
  createStyledComponent: q("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => le({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Ni.propTypes = {
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
const Ge = Ni, Ai = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: o
}) => {
  const i = (s) => {
    o && o(s);
  };
  return /* @__PURE__ */ T.jsxs(Ge, { sx: { flexGrow: 1, p: 1, justifyContent: "space-between" }, children: [
    /* @__PURE__ */ T.jsx(rr, { dense: !0, children: e.map((s, a) => /* @__PURE__ */ T.jsx(
      mo,
      {
        disablePadding: !0,
        sx: { display: "block" },
        children: /* @__PURE__ */ T.jsxs(
          fo,
          {
            selected: n === s.path,
            onClick: () => i(s.path),
            component: "a",
            href: s.path,
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
              /* @__PURE__ */ T.jsx(ho, { children: s.icon }),
              /* @__PURE__ */ T.jsx(xo, { primary: s.text })
            ]
          }
        )
      },
      a
    )) }),
    t.length > 0 && /* @__PURE__ */ T.jsx(rr, { dense: !0, children: t.map((s, a) => /* @__PURE__ */ T.jsx(
      mo,
      {
        disablePadding: !0,
        sx: { display: "block" },
        children: /* @__PURE__ */ T.jsxs(
          fo,
          {
            selected: n === s.path,
            onClick: () => i(s.path),
            component: "a",
            href: s.path,
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
              /* @__PURE__ */ T.jsx(ho, { children: s.icon }),
              /* @__PURE__ */ T.jsx(xo, { primary: s.text })
            ]
          }
        )
      },
      a
    )) })
  ] });
};
function td(e) {
  return ie("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const nd = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${K(t)}`, `fontSize${K(n)}`]
  };
  return pe(i, td, o);
}, rd = q("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${K(n.color)}`], t[`fontSize${K(n.fontSize)}`]];
  }
})(ge(({
  theme: e
}) => {
  var t, n, o, i, s, a, c, l, u, f, m, g, h, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
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
          fontSize: ((a = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem"
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
})), wr = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: m,
    viewBox: g = "0 0 24 24",
    ...h
  } = o, y = /* @__PURE__ */ E.isValidElement(i) && i.type === "svg", p = {
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
  const S = nd(p);
  return /* @__PURE__ */ T.jsxs(rd, {
    as: c,
    className: X(S.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...x,
    ...h,
    ...y && i.props,
    ownerState: p,
    children: [y ? i.props.children : i, m ? /* @__PURE__ */ T.jsx("title", {
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
const To = wr;
function Ke(e, t) {
  function n(o, i) {
    return /* @__PURE__ */ T.jsx(To, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = To.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(n));
}
const od = Ke(/* @__PURE__ */ T.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function id(e) {
  return ie("MuiAvatar", e);
}
ce("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const sd = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: o
  } = e;
  return pe({
    root: ["root", n, o && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, id, t);
}, ad = q("div", {
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
}))), cd = q("img", {
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
}), ld = q(od, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function ud({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: o
}) {
  const [i, s] = E.useState(!1);
  return E.useEffect(() => {
    if (!n && !o)
      return;
    s(!1);
    let a = !0;
    const c = new Image();
    return c.onload = () => {
      a && s("loaded");
    }, c.onerror = () => {
      a && s("error");
    }, c.crossOrigin = e, c.referrerPolicy = t, c.src = n, o && (c.srcset = o), () => {
      a = !1;
    };
  }, [e, t, n, o]), i;
}
const ji = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: i,
    children: s,
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
  }, I = ud({
    ...f,
    ...typeof u.img == "function" ? u.img(S) : u.img,
    src: g,
    srcSet: h
  }), O = g || h, v = O && I !== "error";
  S.colorDefault = !v, delete S.ownerState;
  const C = sd(S), [k, j] = be("root", {
    ref: n,
    className: X(C.root, a),
    elementType: ad,
    externalForwardedProps: {
      slots: l,
      slotProps: u,
      component: c,
      ...p
    },
    ownerState: S
  }), [M, L] = be("img", {
    className: C.img,
    elementType: cd,
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
      alt: i,
      src: g,
      srcSet: h,
      sizes: m
    },
    ownerState: S
  }), [Y, V] = be("fallback", {
    className: C.fallback,
    elementType: ld,
    externalForwardedProps: {
      slots: l,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: S
  });
  return v ? x = /* @__PURE__ */ T.jsx(M, {
    ...L
  }) : s || s === 0 ? x = s : O && i ? x = i[0] : x = /* @__PURE__ */ T.jsx(Y, {
    ...V
  }), /* @__PURE__ */ T.jsx(k, {
    ...j,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (ji.propTypes = {
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
const Mi = ji, dd = ce("MuiBox", ["root"]), pd = dd, fd = di(), _i = fc({
  themeId: vr,
  defaultTheme: fd,
  defaultClassName: pd.root,
  generateClassName: qo.generate
});
process.env.NODE_ENV !== "production" && (_i.propTypes = {
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
const Bi = _i;
function md(e) {
  return ie("MuiDivider", e);
}
const gd = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Eo = gd, hd = (e) => {
  const {
    absolute: t,
    children: n,
    classes: o,
    flexItem: i,
    light: s,
    orientation: a,
    textAlign: c,
    variant: l
  } = e;
  return pe({
    root: ["root", t && "absolute", l, s && "light", a === "vertical" && "vertical", i && "flexItem", n && "withChildren", n && a === "vertical" && "withChildrenVertical", c === "right" && a !== "vertical" && "textAlignRight", c === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, md, o);
}, yd = q("div", {
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
}))), bd = q("span", {
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
    absolute: i = !1,
    children: s,
    className: a,
    orientation: c = "horizontal",
    component: l = s || c === "vertical" ? "div" : "hr",
    flexItem: u = !1,
    light: f = !1,
    role: m = l !== "hr" ? "separator" : void 0,
    textAlign: g = "center",
    variant: h = "fullWidth",
    ...y
  } = o, p = {
    ...o,
    absolute: i,
    component: l,
    flexItem: u,
    light: f,
    orientation: c,
    role: m,
    textAlign: g,
    variant: h
  }, x = hd(p);
  return /* @__PURE__ */ T.jsx(yd, {
    as: l,
    className: X(x.root, a),
    role: m,
    ref: n,
    ownerState: p,
    "aria-orientation": m === "separator" && (l !== "hr" || c === "vertical") ? c : void 0,
    ...y,
    children: s ? /* @__PURE__ */ T.jsx(bd, {
      className: x.wrapper,
      ownerState: p,
      children: s
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
function Co(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Di(e, t = 166) {
  let n;
  function o(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return o.clear = () => {
    clearTimeout(n);
  }, o;
}
function Be(e) {
  return e && e.ownerDocument || document;
}
function ze(e) {
  return Be(e).defaultView || window;
}
function So(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function vd(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Li(e, t) {
  if (!e)
    return t;
  function n(a, c) {
    const l = {};
    return Object.keys(c).forEach((u) => {
      vd(u, c[u]) && typeof a[u] == "function" && (l[u] = (...f) => {
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
  const o = t, i = n(e, o), s = X(o == null ? void 0 : o.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...i,
    ...!!s && {
      className: s
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
function xd(e) {
  return ie("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Ie = 44, cr = Vt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, lr = Vt`
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
`, Td = typeof cr != "string" ? Bo`
        animation: ${cr} 1.4s linear infinite;
      ` : null, Ed = typeof lr != "string" ? Bo`
        animation: ${lr} 1.4s ease-in-out infinite;
      ` : null, Cd = (e) => {
  const {
    classes: t,
    variant: n,
    color: o,
    disableShrink: i
  } = e, s = {
    root: ["root", n, `color${K(o)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${K(n)}`, i && "circleDisableShrink"]
  };
  return pe(s, xd, t);
}, Sd = q("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${K(n.color)}`]];
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
    style: Td || {
      animation: `${cr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Od = q("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), wd = q("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${K(n.variant)}`], n.disableShrink && t.circleDisableShrink];
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
    style: Ed || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${lr} 1.4s ease-in-out infinite`
    }
  }]
}))), Rd = q("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(ge(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Fi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: s = "primary",
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
    color: s,
    disableShrink: a,
    size: l,
    thickness: f,
    value: m,
    variant: g,
    enableTrackSlot: c
  }, p = Cd(y), x = {}, S = {}, I = {};
  if (g === "determinate") {
    const O = 2 * Math.PI * ((Ie - f) / 2);
    x.strokeDasharray = O.toFixed(3), I["aria-valuenow"] = Math.round(m), x.strokeDashoffset = `${((100 - m) / 100 * O).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ T.jsx(Sd, {
    className: X(p.root, i),
    style: {
      width: l,
      height: l,
      ...S,
      ...u
    },
    ownerState: y,
    ref: n,
    role: "progressbar",
    ...I,
    ...h,
    children: /* @__PURE__ */ T.jsxs(Od, {
      className: p.svg,
      ownerState: y,
      viewBox: `${Ie / 2} ${Ie / 2} ${Ie} ${Ie}`,
      children: [c ? /* @__PURE__ */ T.jsx(Rd, {
        className: p.track,
        ownerState: y,
        cx: Ie,
        cy: Ie,
        r: (Ie - f) / 2,
        fill: "none",
        strokeWidth: f,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ T.jsx(wd, {
        className: p.circle,
        style: x,
        ownerState: y,
        cx: Ie,
        cy: Ie,
        r: (Ie - f) / 2,
        fill: "none",
        strokeWidth: f
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Fi.propTypes = {
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
const zi = Fi;
function $d(e) {
  return ie("MuiIconButton", e);
}
const Pd = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), Oo = Pd, Id = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: i,
    size: s,
    loading: a
  } = e, c = {
    root: ["root", a && "loading", n && "disabled", o !== "default" && `color${K(o)}`, i && `edge${K(i)}`, `size${K(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return pe(c, $d, t);
}, kd = q(Yt, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${K(n.color)}`], n.edge && t[`edge${K(n.edge)}`], t[`size${K(n.size)}`]];
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
  [`&.${Oo.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Oo.loading}`]: {
    color: "transparent"
  }
}))), Nd = q("span", {
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
})), Vi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: f = "medium",
    id: m,
    loading: g = null,
    loadingIndicator: h,
    ...y
  } = o, p = ri(m), x = h ?? /* @__PURE__ */ T.jsx(zi, {
    "aria-labelledby": p,
    color: "inherit",
    size: 16
  }), S = {
    ...o,
    edge: i,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    loading: g,
    loadingIndicator: x,
    size: f
  }, I = Id(S);
  return /* @__PURE__ */ T.jsxs(kd, {
    id: g ? p : m,
    className: X(I.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l || g,
    ref: n,
    ...y,
    ownerState: S,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ T.jsx("span", {
      className: I.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ T.jsx(Nd, {
        className: I.loadingIndicator,
        ownerState: S,
        children: g && x
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (Vi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: De(r.node, (e) => E.Children.toArray(e.children).some((n) => /* @__PURE__ */ E.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const Rr = Vi;
function Ct(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function Ui(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : $i(n, o), {
    props: c,
    internalRef: l
  } = Ii({
    ...s,
    externalSlotProps: a
  }), u = Ee(l, a == null ? void 0 : a.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return Ri(t, {
    ...c,
    ref: u
  }, o);
}
function Wi(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Un(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function wo(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Gi(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function kt(e, t, n, o, i, s) {
  let a = !1, c = i(e, t, t ? n : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = o ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !Gi(c, s) || l)
      c = i(e, c, n);
    else
      return c.focus(), !0;
  }
  return !1;
}
const Yi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
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
  Et(() => {
    i && h.current.focus();
  }, [i]), E.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (O, {
      direction: v
    }) => {
      const C = !h.current.style.width;
      if (O.clientHeight < h.current.clientHeight && C) {
        const k = `${Wi(ze(O))}px`;
        h.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = k, h.current.style.width = `calc(100% + ${k})`;
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
    const j = Be(v).activeElement;
    if (C === "ArrowDown")
      O.preventDefault(), kt(v, j, u, l, Un);
    else if (C === "ArrowUp")
      O.preventDefault(), kt(v, j, u, l, wo);
    else if (C === "Home")
      O.preventDefault(), kt(v, null, u, l, Un);
    else if (C === "End")
      O.preventDefault(), kt(v, null, u, l, wo);
    else if (C.length === 1) {
      const M = y.current, L = C.toLowerCase(), Y = performance.now();
      M.keys.length > 0 && (Y - M.lastTime > 500 ? (M.keys = [], M.repeating = !0, M.previousKeyMatched = !0) : M.repeating && L !== M.keys[0] && (M.repeating = !1)), M.lastTime = Y, M.keys.push(L);
      const V = j && !M.repeating && Gi(j, M);
      M.previousKeyMatched && (V || kt(v, j, !1, l, Un, M)) ? O.preventDefault() : M.previousKeyMatched = !1;
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
  const I = E.Children.map(a, (O, v) => {
    if (v === S) {
      const C = {};
      return s && (C.autoFocus = !0), O.props.tabIndex === void 0 && m === "selectedMenu" && (C.tabIndex = 0), /* @__PURE__ */ E.cloneElement(O, C);
    }
    return O;
  });
  return /* @__PURE__ */ T.jsx(rr, {
    role: "menu",
    ref: x,
    className: c,
    onKeyDown: p,
    tabIndex: i ? 0 : -1,
    ...g,
    children: I
  });
});
process.env.NODE_ENV !== "production" && (Yi.propTypes = {
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
const Ad = Yi;
function jd(e) {
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
function Hi(e, t, n, o) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = jd(i);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function qi(e, t, n, o) {
  return e[t] === void 0 ? null : Hi(e, t, n, o);
}
function ur() {
  return null;
}
qi.isRequired = Hi;
ur.isRequired = ur;
const Md = process.env.NODE_ENV === "production" ? ur : qi, xt = Md;
function _d(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ki(e, t, n, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = s.type;
  return typeof l == "function" && !_d(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Xi = De(r.element, Ki);
Xi.isRequired = De(r.element.isRequired, Ki);
const Ht = Xi;
function qt(e) {
  var t;
  return parseInt(E.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const $r = (e) => e.scrollTop;
function St(e, t) {
  const {
    timeout: n,
    easing: o,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof o == "object" ? o[t.mode] : o),
    delay: i.transitionDelay
  };
}
function dr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Bd = {
  entering: {
    opacity: 1,
    transform: dr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Wn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), mn = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: i = !0,
    children: s,
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
    TransitionComponent: x = Tr,
    ...S
  } = t, I = vi(), O = E.useRef(), v = Gt(), C = E.useRef(null), k = Ee(C, qt(s), n), j = ($) => (A) => {
    if ($) {
      const G = C.current;
      A === void 0 ? $(G) : $(G, A);
    }
  }, M = j(f), L = j(($, A) => {
    $r($);
    const {
      duration: G,
      delay: F,
      easing: D
    } = St({
      style: y,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    let R;
    p === "auto" ? (R = v.transitions.getAutoHeightDuration($.clientHeight), O.current = R) : R = G, $.style.transition = [v.transitions.create("opacity", {
      duration: R,
      delay: F
    }), v.transitions.create("transform", {
      duration: Wn ? R : R * 0.666,
      delay: F,
      easing: D
    })].join(","), l && l($, A);
  }), Y = j(u), V = j(h), d = j(($) => {
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
    let D;
    p === "auto" ? (D = v.transitions.getAutoHeightDuration($.clientHeight), O.current = D) : D = A, $.style.transition = [v.transitions.create("opacity", {
      duration: D,
      delay: G
    }), v.transitions.create("transform", {
      duration: Wn ? D : D * 0.666,
      delay: Wn ? G : G || D * 0.333,
      easing: F
    })].join(","), $.style.opacity = 0, $.style.transform = dr(0.75), m && m($);
  }), N = j(g), w = ($) => {
    p === "auto" && I.start(O.current || 0, $), o && o(C.current, $);
  };
  return /* @__PURE__ */ T.jsx(x, {
    appear: i,
    in: c,
    nodeRef: C,
    onEnter: L,
    onEntered: Y,
    onEntering: M,
    onExit: d,
    onExited: N,
    onExiting: V,
    addEndListener: w,
    timeout: p === "auto" ? null : p,
    ...S,
    children: ($, {
      ownerState: A,
      ...G
    }) => /* @__PURE__ */ E.cloneElement(s, {
      style: {
        opacity: 0,
        transform: dr(0.75),
        visibility: $ === "exited" && !c ? "hidden" : void 0,
        ...Bd[$],
        ...y,
        ...s.props.style
      },
      ref: k,
      ...G
    })
  });
});
process.env.NODE_ENV !== "production" && (mn.propTypes = {
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
mn && (mn.muiSupportAuto = !0);
const Dd = mn;
function Ld(e) {
  const t = Be(e);
  return t.body === e ? ze(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Dt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ro(e) {
  return parseInt(ze(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Fd(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function $o(e, t, n, o, i) {
  const s = [t, n, ...o];
  [].forEach.call(e.children, (a) => {
    const c = !s.includes(a), l = !Fd(a);
    c && l && Dt(a, i);
  });
}
function Gn(e, t) {
  let n = -1;
  return e.some((o, i) => t(o) ? (n = i, !0) : !1), n;
}
function zd(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (Ld(o)) {
      const a = Wi(ze(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Ro(o) + a}px`;
      const c = Be(o).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Ro(l) + a}px`;
      });
    }
    let s;
    if (o.parentNode instanceof DocumentFragment)
      s = Be(o).body;
    else {
      const a = o.parentElement, c = ze(o);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && c.getComputedStyle(a).overflowY === "scroll" ? a : o;
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
      property: c
    }) => {
      s ? a.style.setProperty(c, s) : a.style.removeProperty(c);
    });
  };
}
function Vd(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Ud {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && Dt(t.modalRef, !1);
    const i = Vd(n);
    $o(n, t.mount, t.modalRef, i, !0);
    const s = Gn(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), o);
  }
  mount(t, n) {
    const o = Gn(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    i.restore || (i.restore = zd(i, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const i = Gn(this.containers, (a) => a.modals.includes(t)), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(o, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Dt(t.modalRef, n), $o(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Dt(a.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Wd = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Gd(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Yd(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Hd(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Yd(e));
}
function qd(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Wd)).forEach((o, i) => {
    const s = Gd(o);
    s === -1 || !Hd(o) || (s === 0 ? t.push(o) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: o
    }));
  }), n.sort((o, i) => o.tabIndex === i.tabIndex ? o.documentOrder - i.documentOrder : o.tabIndex - i.tabIndex).map((o) => o.node).concat(t);
}
function Kd() {
  return !0;
}
function gn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = qd,
    isEnabled: a = Kd,
    open: c
  } = e, l = E.useRef(!1), u = E.useRef(null), f = E.useRef(null), m = E.useRef(null), g = E.useRef(null), h = E.useRef(!1), y = E.useRef(null), p = Ee(qt(t), y), x = E.useRef(null);
  E.useEffect(() => {
    !c || !y.current || (h.current = !n);
  }, [n, c]), E.useEffect(() => {
    if (!c || !y.current)
      return;
    const O = Be(y.current);
    return y.current.contains(O.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), h.current && y.current.focus()), () => {
      i || (m.current && m.current.focus && (l.current = !0, m.current.focus()), m.current = null);
    };
  }, [c]), E.useEffect(() => {
    if (!c || !y.current)
      return;
    const O = Be(y.current), v = (j) => {
      x.current = j, !(o || !a() || j.key !== "Tab") && O.activeElement === y.current && j.shiftKey && (l.current = !0, f.current && f.current.focus());
    }, C = () => {
      var L, Y;
      const j = y.current;
      if (j === null)
        return;
      if (!O.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (j.contains(O.activeElement) || o && O.activeElement !== u.current && O.activeElement !== f.current)
        return;
      if (O.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!h.current)
        return;
      let M = [];
      if ((O.activeElement === u.current || O.activeElement === f.current) && (M = s(y.current)), M.length > 0) {
        const V = !!((L = x.current) != null && L.shiftKey && ((Y = x.current) == null ? void 0 : Y.key) === "Tab"), d = M[0], N = M[M.length - 1];
        typeof d != "string" && typeof N != "string" && (V ? N.focus() : d.focus());
      } else
        j.focus();
    };
    O.addEventListener("focusin", C), O.addEventListener("keydown", v, !0);
    const k = setInterval(() => {
      O.activeElement && O.activeElement.tagName === "BODY" && C();
    }, 50);
    return () => {
      clearInterval(k), O.removeEventListener("focusin", C), O.removeEventListener("keydown", v, !0);
    };
  }, [n, o, i, a, c, s]);
  const S = (O) => {
    m.current === null && (m.current = O.relatedTarget), h.current = !0, g.current = O.target;
    const v = t.props.onFocus;
    v && v(O);
  }, I = (O) => {
    m.current === null && (m.current = O.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ T.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ T.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: I,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: p,
      onFocus: S
    }), /* @__PURE__ */ T.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: I,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (gn.propTypes = {
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
process.env.NODE_ENV !== "production" && (gn["propTypes"] = ti(gn.propTypes));
function Xd(e) {
  return typeof e == "function" ? e() : e;
}
const hn = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const {
    children: o,
    container: i,
    disablePortal: s = !1
  } = t, [a, c] = E.useState(null), l = Ee(/* @__PURE__ */ E.isValidElement(o) ? qt(o) : null, n);
  if (Et(() => {
    s || c(Xd(i) || document.body);
  }, [i, s]), Et(() => {
    if (a && !s)
      return So(n, a), () => {
        So(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ E.isValidElement(o)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ E.cloneElement(o, u);
    }
    return o;
  }
  return a && /* @__PURE__ */ Bs.createPortal(o, a);
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
process.env.NODE_ENV !== "production" && (hn["propTypes"] = ti(hn.propTypes));
const Jd = hn, Qd = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ji = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = Gt(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
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
    timeout: S = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: I = Tr,
    ...O
  } = t, v = E.useRef(null), C = Ee(v, qt(c), n), k = (w) => ($) => {
    if (w) {
      const A = v.current;
      $ === void 0 ? w(A) : w(A, $);
    }
  }, j = k(g), M = k((w, $) => {
    $r(w);
    const A = St({
      style: x,
      timeout: S,
      easing: l
    }, {
      mode: "enter"
    });
    w.style.webkitTransition = o.transitions.create("opacity", A), w.style.transition = o.transitions.create("opacity", A), f && f(w, $);
  }), L = k(m), Y = k(p), V = k((w) => {
    const $ = St({
      style: x,
      timeout: S,
      easing: l
    }, {
      mode: "exit"
    });
    w.style.webkitTransition = o.transitions.create("opacity", $), w.style.transition = o.transitions.create("opacity", $), h && h(w);
  }), d = k(y), N = (w) => {
    s && s(v.current, w);
  };
  return /* @__PURE__ */ T.jsx(I, {
    appear: a,
    in: u,
    nodeRef: v,
    onEnter: M,
    onEntered: L,
    onEntering: j,
    onExit: V,
    onExited: d,
    onExiting: Y,
    addEndListener: N,
    timeout: S,
    ...O,
    children: (w, {
      ownerState: $,
      ...A
    }) => /* @__PURE__ */ E.cloneElement(c, {
      style: {
        opacity: 0,
        visibility: w === "exited" && !u ? "hidden" : void 0,
        ...Qd[w],
        ...x,
        ...c.props.style
      },
      ref: C,
      ...A
    })
  });
});
process.env.NODE_ENV !== "production" && (Ji.propTypes = {
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
const Zd = Ji;
function ep(e) {
  return ie("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const tp = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return pe({
    root: ["root", n && "invisible"]
  }, ep, t);
}, np = q("div", {
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
}), Qi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: s,
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
  }, S = tp(x), I = {
    transition: h,
    root: u.Root,
    ...g
  }, O = {
    ...f,
    ...m
  }, v = {
    component: a,
    slots: I,
    slotProps: O
  }, [C, k] = be("root", {
    elementType: np,
    externalForwardedProps: v,
    className: X(S.root, s),
    ownerState: x
  }), [j, M] = be("transition", {
    elementType: Zd,
    externalForwardedProps: v,
    ownerState: x
  });
  return /* @__PURE__ */ T.jsx(j, {
    in: l,
    timeout: y,
    ...p,
    ...M,
    children: /* @__PURE__ */ T.jsx(C, {
      "aria-hidden": !0,
      ...k,
      classes: S,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Qi.propTypes = {
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
const rp = Qi;
function op(e) {
  return typeof e == "function" ? e() : e;
}
function ip(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Po = () => {
}, en = new Ud();
function sp(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: c,
    onClose: l,
    open: u,
    rootRef: f
  } = e, m = E.useRef({}), g = E.useRef(null), h = E.useRef(null), y = Ee(h, f), [p, x] = E.useState(!u), S = ip(c);
  let I = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (I = !1);
  const O = () => Be(g.current), v = () => (m.current.modalRef = h.current, m.current.mount = g.current, m.current), C = () => {
    en.mount(v(), {
      disableScrollLock: o
    }), h.current && (h.current.scrollTop = 0);
  }, k = vt(() => {
    const $ = op(t) || O().body;
    en.add(v(), $), h.current && C();
  }), j = () => en.isTopModal(v()), M = vt(($) => {
    g.current = $, $ && (u && j() ? C() : h.current && Dt(h.current, I));
  }), L = E.useCallback(() => {
    en.remove(v(), I);
  }, [I]);
  E.useEffect(() => () => {
    L();
  }, [L]), E.useEffect(() => {
    u ? k() : (!S || !i) && L();
  }, [u, L, S, i, k]);
  const Y = ($) => (A) => {
    var G;
    (G = $.onKeyDown) == null || G.call($, A), !(A.key !== "Escape" || A.which === 229 || // Wait until IME is settled.
    !j()) && (n || (A.stopPropagation(), l && l(A, "escapeKeyDown")));
  }, V = ($) => (A) => {
    var G;
    (G = $.onClick) == null || G.call($, A), A.target === A.currentTarget && l && l(A, "backdropClick");
  };
  return {
    getRootProps: ($ = {}) => {
      const A = Pi(e);
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
        onClick: V(A),
        open: u
      };
    },
    getTransitionProps: () => {
      const $ = () => {
        x(!1), s && s();
      }, A = () => {
        x(!0), a && a(), i && L();
      };
      return {
        onEnter: Co($, (c == null ? void 0 : c.props.onEnter) ?? Po),
        onExited: Co(A, (c == null ? void 0 : c.props.onExited) ?? Po)
      };
    },
    rootRef: y,
    portalRef: M,
    isTopModal: j,
    exited: p,
    hasTransition: S
  };
}
function ap(e) {
  return ie("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const cp = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return pe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, ap, o);
}, lp = q("div", {
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
}))), up = q(rp, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Zi = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = up,
    BackdropProps: s,
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
    disableRestoreFocus: I = !1,
    disableScrollLock: O = !1,
    hideBackdrop: v = !1,
    keepMounted: C = !1,
    onClose: k,
    onTransitionEnter: j,
    onTransitionExited: M,
    open: L,
    slotProps: Y = {},
    slots: V = {},
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
    disableRestoreFocus: I,
    disableScrollLock: O,
    hideBackdrop: v,
    keepMounted: C
  }, {
    getRootProps: $,
    getBackdropProps: A,
    getTransitionProps: G,
    portalRef: F,
    isTopModal: D,
    exited: R,
    hasTransition: b
  } = sp({
    ...w,
    rootRef: n
  }), _ = {
    ...w,
    exited: R
  }, z = cp(_), U = {};
  if (u.props.tabIndex === void 0 && (U.tabIndex = "-1"), b) {
    const {
      onEnter: W,
      onExited: ee
    } = G();
    U.onEnter = W, U.onExited = ee;
  }
  const Z = {
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...V
    },
    slotProps: {
      ...h,
      ...Y
    }
  }, [J, H] = be("root", {
    ref: n,
    elementType: lp,
    externalForwardedProps: {
      ...Z,
      ...N,
      component: m
    },
    getSlotProps: $,
    ownerState: _,
    className: X(c, z == null ? void 0 : z.root, !_.open && _.exited && (z == null ? void 0 : z.hidden))
  }), [Q, te] = be("backdrop", {
    ref: s == null ? void 0 : s.ref,
    elementType: i,
    externalForwardedProps: Z,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (W) => A({
      ...W,
      onClick: (ee) => {
        W != null && W.onClick && W.onClick(ee);
      }
    }),
    className: X(s == null ? void 0 : s.className, z == null ? void 0 : z.backdrop),
    ownerState: _
  });
  return !C && !L && (!b || R) ? null : /* @__PURE__ */ T.jsx(Jd, {
    ref: F,
    container: f,
    disablePortal: S,
    children: /* @__PURE__ */ T.jsxs(J, {
      ...H,
      children: [!v && i ? /* @__PURE__ */ T.jsx(Q, {
        ...te
      }) : null, /* @__PURE__ */ T.jsx(gn, {
        disableEnforceFocus: p,
        disableAutoFocus: y,
        disableRestoreFocus: I,
        isEnabled: D,
        open: L,
        children: /* @__PURE__ */ E.cloneElement(u, U)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Zi.propTypes = {
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
const es = Zi;
function dp(e) {
  return ie("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const pp = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return pe(s, dp, i);
}, fp = q("div", {
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
}))), ts = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var h;
  const o = le({
    props: t,
    name: "MuiPaper"
  }), i = Gt(), {
    className: s,
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
  }, g = pp(m);
  return process.env.NODE_ENV !== "production" && i.shadows[c] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${c}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${c}]\` is defined.`].join(`
`)), /* @__PURE__ */ T.jsx(fp, {
    as: a,
    ownerState: m,
    className: X(g.root, s),
    ref: n,
    ...f,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[c],
        ...i.vars && {
          "--Paper-overlay": (h = i.vars.overlays) == null ? void 0 : h[c]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${cn("#fff", nr(c))}, ${cn("#fff", nr(c))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ts.propTypes = {
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
  elevation: De(xt, (e) => {
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
const kn = ts;
function mp(e) {
  return ie("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function Io(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function ko(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function No(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function _t(e) {
  return typeof e == "function" ? e() : e;
}
const gp = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"]
  }, mp, t);
}, hp = q(es, {
  name: "MuiPopover",
  slot: "Root"
})({}), ns = q(kn, {
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
}), rs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: s,
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
    transformOrigin: I = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: O,
    // TODO: remove in v7
    transitionDuration: v = "auto",
    TransitionProps: C = {},
    // TODO: remove in v7
    disableScrollLock: k = !1,
    ...j
  } = o, M = E.useRef(), L = {
    ...o,
    anchorOrigin: a,
    anchorReference: l,
    elevation: g,
    marginThreshold: h,
    transformOrigin: I,
    TransitionComponent: O,
    transitionDuration: v,
    TransitionProps: C
  }, Y = gp(L), V = E.useCallback(() => {
    if (l === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (c || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), c;
    const W = _t(s), ee = W && W.nodeType === 1 ? W : Be(M.current).body, B = ee.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const me = ee.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && me.top === 0 && me.left === 0 && me.right === 0 && me.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: B.top + Io(B, a.vertical),
      left: B.left + ko(B, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, c, l]), d = E.useCallback((W) => ({
    vertical: Io(W, I.vertical),
    horizontal: ko(W, I.horizontal)
  }), [I.horizontal, I.vertical]), N = E.useCallback((W) => {
    const ee = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, B = d(ee);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: No(B)
      };
    const me = V();
    let xe = me.top - B.vertical, Pe = me.left - B.horizontal;
    const Kt = xe + ee.height, Xe = Pe + ee.width, Ue = ze(_t(s)), Je = Ue.innerHeight - h, wt = Ue.innerWidth - h;
    if (h !== null && xe < h) {
      const Ce = xe - h;
      xe -= Ce, B.vertical += Ce;
    } else if (h !== null && Kt > Je) {
      const Ce = Kt - Je;
      xe -= Ce, B.vertical += Ce;
    }
    if (process.env.NODE_ENV !== "production" && ee.height > Je && ee.height && Je && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ee.height - Je}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), h !== null && Pe < h) {
      const Ce = Pe - h;
      Pe -= Ce, B.horizontal += Ce;
    } else if (Xe > wt) {
      const Ce = Xe - wt;
      Pe -= Ce, B.horizontal += Ce;
    }
    return {
      top: `${Math.round(xe)}px`,
      left: `${Math.round(Pe)}px`,
      transformOrigin: No(B)
    };
  }, [s, l, V, d, h]), [w, $] = E.useState(y), A = E.useCallback(() => {
    const W = M.current;
    if (!W)
      return;
    const ee = N(W);
    ee.top !== null && W.style.setProperty("top", ee.top), ee.left !== null && (W.style.left = ee.left), W.style.transformOrigin = ee.transformOrigin, $(!0);
  }, [N]);
  E.useEffect(() => (k && window.addEventListener("scroll", A), () => window.removeEventListener("scroll", A)), [s, k, A]);
  const G = () => {
    A();
  }, F = () => {
    $(!1);
  };
  E.useEffect(() => {
    y && A();
  }), E.useImperativeHandle(i, () => y ? {
    updatePosition: () => {
      A();
    }
  } : null, [y, A]), E.useEffect(() => {
    if (!y)
      return;
    const W = Di(() => {
      A();
    }), ee = ze(_t(s));
    return ee.addEventListener("resize", W), () => {
      W.clear(), ee.removeEventListener("resize", W);
    };
  }, [s, y, A]);
  let D = v;
  const R = {
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
    elementType: Dd,
    externalForwardedProps: R,
    ownerState: L,
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
  v === "auto" && !b.muiSupportAuto && (D = void 0);
  const z = m || (s ? Be(_t(s)).body : void 0), [U, {
    slots: Z,
    slotProps: J,
    ...H
  }] = be("root", {
    ref: n,
    elementType: hp,
    externalForwardedProps: {
      ...R,
      ...j
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: Li(typeof S.backdrop == "function" ? S.backdrop(L) : S.backdrop, {
          invisible: !0
        })
      },
      container: z,
      open: y
    },
    ownerState: L,
    className: X(Y.root, f)
  }), [Q, te] = be("paper", {
    ref: M,
    className: Y.paper,
    elementType: ns,
    externalForwardedProps: R,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: g,
      style: w ? void 0 : {
        opacity: 0
      }
    },
    ownerState: L
  });
  return /* @__PURE__ */ T.jsx(U, {
    ...H,
    ...!ln(U) && {
      slots: Z,
      slotProps: J,
      disableScrollLock: k
    },
    children: /* @__PURE__ */ T.jsx(b, {
      ..._,
      timeout: D,
      children: /* @__PURE__ */ T.jsx(Q, {
        ...te,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (rs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: gi,
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
  elevation: xt,
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
    component: xr
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
const yp = rs;
function bp(e) {
  return ie("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const vp = {
  vertical: "top",
  horizontal: "right"
}, xp = {
  vertical: "top",
  horizontal: "left"
}, Tp = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, bp, t);
}, Ep = q(yp, {
  shouldForwardProp: (e) => Ot(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), Cp = q(ns, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Sp = q(Ad, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), os = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: s,
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
    slotProps: I = {},
    ...O
  } = o, v = ni(), C = {
    ...o,
    autoFocus: i,
    disableAutoFocusItem: c,
    MenuListProps: l,
    onEntering: y,
    PaperProps: m,
    transitionDuration: h,
    TransitionProps: p,
    variant: x
  }, k = Tp(C), j = i && !c && f, M = E.useRef(null), L = (D, R) => {
    M.current && M.current.adjustStyleForScrollbar(D, {
      direction: v ? "rtl" : "ltr"
    }), y && y(D, R);
  }, Y = (D) => {
    D.key === "Tab" && (D.preventDefault(), u && u(D, "tabKeyDown"));
  };
  let V = -1;
  E.Children.map(s, (D, R) => {
    /* @__PURE__ */ E.isValidElement(D) && (process.env.NODE_ENV !== "production" && st.isFragment(D) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), D.props.disabled || (x === "selectedMenu" && D.props.selected || V === -1) && (V = R));
  });
  const d = {
    slots: S,
    slotProps: {
      list: l,
      transition: p,
      paper: m,
      ...I
    }
  }, N = Ui({
    elementType: S.root,
    externalSlotProps: I.root,
    ownerState: C,
    className: [k.root, a]
  }), [w, $] = be("paper", {
    className: k.paper,
    elementType: Cp,
    externalForwardedProps: d,
    shouldForwardComponentProp: !0,
    ownerState: C
  }), [A, G] = be("list", {
    className: X(k.list, l.className),
    elementType: Sp,
    shouldForwardComponentProp: !0,
    externalForwardedProps: d,
    getSlotProps: (D) => ({
      ...D,
      onKeyDown: (R) => {
        var b;
        Y(R), (b = D.onKeyDown) == null || b.call(D, R);
      }
    }),
    ownerState: C
  }), F = typeof d.slotProps.transition == "function" ? d.slotProps.transition(C) : d.slotProps.transition;
  return /* @__PURE__ */ T.jsx(Ep, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: v ? "right" : "left"
    },
    transformOrigin: v ? vp : xp,
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
      backdrop: typeof I.backdrop == "function" ? I.backdrop(C) : I.backdrop,
      transition: {
        ...F,
        onEntering: (...D) => {
          var R;
          L(...D), (R = F == null ? void 0 : F.onEntering) == null || R.call(F, ...D);
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
      actions: M,
      autoFocus: i && (V === -1 || c),
      autoFocusItem: j,
      variant: x,
      ...G,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (os.propTypes = {
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
const Op = os;
function wp(e) {
  return ie("MuiMenuItem", e);
}
const Rp = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Nt = Rp, $p = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Pp = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: o,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, l = pe({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", o && "divider", s && "selected"]
  }, wp, a);
  return {
    ...a,
    ...l
  };
}, Ip = q(Yt, {
  shouldForwardProp: (e) => Ot(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: $p
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
  [`& + .${Eo.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Eo.inset}`]: {
    marginLeft: 52
  },
  [`& .${yt.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${yt.inset}`]: {
    paddingLeft: 36
  },
  [`& .${go.root}`]: {
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
      [`& .${go.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), is = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: s = "li",
    dense: a = !1,
    divider: c = !1,
    disableGutters: l = !1,
    focusVisibleClassName: u,
    role: f = "menuitem",
    tabIndex: m,
    className: g,
    ...h
  } = o, y = E.useContext(ke), p = E.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: l
  }), [y.dense, a, l]), x = E.useRef(null);
  Et(() => {
    i && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const S = {
    ...o,
    dense: p.dense,
    divider: c,
    disableGutters: l
  }, I = Pp(o), O = Ee(x, n);
  let v;
  return o.disabled || (v = m !== void 0 ? m : -1), /* @__PURE__ */ T.jsx(ke.Provider, {
    value: p,
    children: /* @__PURE__ */ T.jsx(Ip, {
      ref: O,
      role: f,
      tabIndex: v,
      component: s,
      focusVisibleClassName: X(I.focusVisible, u),
      className: X(I.root, g),
      ...h,
      ownerState: S,
      classes: I
    })
  });
});
process.env.NODE_ENV !== "production" && (is.propTypes = {
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
const tn = is, kp = Ke(/* @__PURE__ */ T.jsx("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), "MoreVertRounded"), ss = Ke([/* @__PURE__ */ T.jsx("path", {
  d: "M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
}, "0"), /* @__PURE__ */ T.jsx("path", {
  d: "m20.65 11.65-2.79-2.79c-.32-.32-.86-.1-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
}, "1")], "LogoutRounded"), Np = ({
  userName: e = "User Name",
  userEmail: t = "user@email.com",
  userAvatar: n,
  onLogout: o,
  onProfileClick: i,
  onAccountClick: s,
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
      Ge,
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
            Mi,
            {
              sizes: "small",
              alt: e,
              src: n,
              sx: { width: 36, height: 36 }
            }
          ),
          /* @__PURE__ */ T.jsxs(Bi, { sx: { mr: "auto" }, children: [
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
            Rr,
            {
              size: "small",
              onClick: f,
              sx: { borderColor: "transparent" },
              children: /* @__PURE__ */ T.jsx(kp, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ T.jsxs(
      Op,
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
          /* @__PURE__ */ T.jsx(tn, { onClick: () => g(i), children: "Profile" }),
          /* @__PURE__ */ T.jsx(tn, { onClick: () => g(s), children: "My account" }),
          /* @__PURE__ */ T.jsx(fn, {}),
          /* @__PURE__ */ T.jsx(tn, { onClick: () => g(a), children: "Settings" }),
          /* @__PURE__ */ T.jsx(fn, {}),
          /* @__PURE__ */ T.jsxs(tn, { onClick: () => g(o), children: [
            /* @__PURE__ */ T.jsx(Oe, { sx: { flexGrow: 1 }, children: "Logout" }),
            /* @__PURE__ */ T.jsx(ss, { fontSize: "small" })
          ] })
        ]
      }
    )
  ] });
};
function Ap(e) {
  return ie("MuiCard", e);
}
ce("MuiCard", ["root"]);
const jp = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, Ap, t);
}, Mp = q(kn, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), as = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiCard"
  }), {
    className: i,
    raised: s = !1,
    ...a
  } = o, c = {
    ...o,
    raised: s
  }, l = jp(c);
  return /* @__PURE__ */ T.jsx(Mp, {
    className: X(l.root, i),
    elevation: s ? 8 : void 0,
    ref: n,
    ownerState: c,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (as.propTypes = {
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
const _p = as;
function Bp(e) {
  return ie("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const Dp = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, Bp, t);
}, Lp = q("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), cs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiCardContent"
  }), {
    className: i,
    component: s = "div",
    ...a
  } = o, c = {
    ...o,
    component: s
  }, l = Dp(c);
  return /* @__PURE__ */ T.jsx(Lp, {
    as: s,
    className: X(l.root, i),
    ownerState: c,
    ref: n,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (cs.propTypes = {
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
const Fp = cs;
function zp(e) {
  return ie("MuiButton", e);
}
const Vp = ce("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), et = Vp, ls = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (ls.displayName = "ButtonGroupContext");
const Up = ls, us = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (us.displayName = "ButtonGroupButtonContext");
const Wp = us, Gp = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: o,
    size: i,
    variant: s,
    loading: a,
    loadingPosition: c,
    classes: l
  } = e, u = {
    root: ["root", a && "loading", s, `${s}${K(t)}`, `size${K(i)}`, `${s}Size${K(i)}`, `color${K(t)}`, n && "disableElevation", o && "fullWidth", a && `loadingPosition${K(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${K(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${K(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = pe(u, zp, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, ds = [{
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
}], Yp = q(Yt, {
  shouldForwardProp: (e) => Ot(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${K(n.color)}`], t[`size${K(n.size)}`], t[`${n.variant}Size${K(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
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
    [`&.${et.disabled}`]: {
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
        [`&.${et.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${et.disabled}`]: {
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
        [`&.${et.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(ct()).map(([o]) => ({
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
        [`&.${et.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${et.disabled}`]: {
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
        [`&.${et.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Hp = q("span", {
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
  }, ...ds]
})), qp = q("span", {
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
  }, ...ds]
})), Kp = q("span", {
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
})), Ao = q("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), ps = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = E.useContext(Up), i = E.useContext(Wp), s = Ft(o, t), a = le({
    props: s,
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
    loading: I = null,
    loadingIndicator: O,
    loadingPosition: v = "center",
    size: C = "medium",
    startIcon: k,
    type: j,
    variant: M = "text",
    ...L
  } = a, Y = ri(S), V = O ?? /* @__PURE__ */ T.jsx(zi, {
    "aria-labelledby": Y,
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
    loading: I,
    loadingIndicator: V,
    loadingPosition: v,
    size: C,
    type: j,
    variant: M
  }, N = Gp(d), w = (k || I && v === "start") && /* @__PURE__ */ T.jsx(Hp, {
    className: N.startIcon,
    ownerState: d,
    children: k || /* @__PURE__ */ T.jsx(Ao, {
      className: N.loadingIconPlaceholder,
      ownerState: d
    })
  }), $ = (y || I && v === "end") && /* @__PURE__ */ T.jsx(qp, {
    className: N.endIcon,
    ownerState: d,
    children: y || /* @__PURE__ */ T.jsx(Ao, {
      className: N.loadingIconPlaceholder,
      ownerState: d
    })
  }), A = i || "", G = typeof I == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ T.jsx("span", {
      className: N.loadingWrapper,
      style: {
        display: "contents"
      },
      children: I && /* @__PURE__ */ T.jsx(Kp, {
        className: N.loadingIndicator,
        ownerState: d,
        children: V
      })
    })
  ) : null;
  return /* @__PURE__ */ T.jsxs(Yp, {
    ownerState: d,
    className: X(o.className, N.root, f, A),
    component: u,
    disabled: m || I,
    focusRipple: !h,
    focusVisibleClassName: X(N.focusVisible, p),
    ref: n,
    type: j,
    id: I ? Y : S,
    ...L,
    classes: N,
    children: [w, v !== "end" && G, c, v === "end" && G, $]
  });
});
process.env.NODE_ENV !== "production" && (ps.propTypes = {
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
const fs = ps, Xp = Ke(/* @__PURE__ */ T.jsx("path", {
  d: "m19.46 8 .79-1.75L22 5.46c.39-.18.39-.73 0-.91l-1.75-.79L19.46 2c-.18-.39-.73-.39-.91 0l-.79 1.75-1.76.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0M11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5-.79 1.75-1.75.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.73.39.91 0l.79-1.75 1.76-.79c.39-.18.39-.73 0-.91l-1.75-.79-.79-1.76c-.18-.39-.74-.39-.92 0"
}), "AutoAwesomeRounded"), ms = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: o,
  show: i = !0
}) => i ? /* @__PURE__ */ T.jsx(_p, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ T.jsxs(Fp, { children: [
  /* @__PURE__ */ T.jsx(Xp, { fontSize: "small" }),
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
    fs,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: o,
      children: n
    }
  )
] }) }) : null;
function Jp(e, t, n) {
  const o = t.getBoundingClientRect(), i = n && n.getBoundingClientRect(), s = ze(t);
  let a;
  if (t.fakeTransform)
    a = t.fakeTransform;
  else {
    const u = s.getComputedStyle(t);
    a = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let c = 0, l = 0;
  if (a && a !== "none" && typeof a == "string") {
    const u = a.split("(")[1].split(")")[0].split(",");
    c = parseInt(u[4], 10), l = parseInt(u[5], 10);
  }
  return e === "left" ? i ? `translateX(${i.right + c - o.left}px)` : `translateX(${s.innerWidth + c - o.left}px)` : e === "right" ? i ? `translateX(-${o.right - i.left - c}px)` : `translateX(-${o.left + o.width - c}px)` : e === "up" ? i ? `translateY(${i.bottom + l - o.top}px)` : `translateY(${s.innerHeight + l - o.top}px)` : i ? `translateY(-${o.top - i.top + o.height - l}px)` : `translateY(-${o.top + o.height - l}px)`;
}
function gs(e) {
  return typeof e == "function" ? e() : e;
}
function nn(e, t, n) {
  const o = gs(n), i = Jp(e, t, o);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const hs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = Gt(), i = {
    enter: o.transitions.easing.easeOut,
    exit: o.transitions.easing.sharp
  }, s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: c = !0,
    children: l,
    container: u,
    direction: f = "down",
    easing: m = i,
    in: g,
    onEnter: h,
    onEntered: y,
    onEntering: p,
    onExit: x,
    onExited: S,
    onExiting: I,
    style: O,
    timeout: v = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = Tr,
    ...k
  } = t, j = E.useRef(null), M = Ee(qt(l), j, n), L = (F) => (D) => {
    F && (D === void 0 ? F(j.current) : F(j.current, D));
  }, Y = L((F, D) => {
    nn(f, F, u), $r(F), h && h(F, D);
  }), V = L((F, D) => {
    const R = St({
      timeout: v,
      style: O,
      easing: m
    }, {
      mode: "enter"
    });
    F.style.webkitTransition = o.transitions.create("-webkit-transform", {
      ...R
    }), F.style.transition = o.transitions.create("transform", {
      ...R
    }), F.style.webkitTransform = "none", F.style.transform = "none", p && p(F, D);
  }), d = L(y), N = L(I), w = L((F) => {
    const D = St({
      timeout: v,
      style: O,
      easing: m
    }, {
      mode: "exit"
    });
    F.style.webkitTransition = o.transitions.create("-webkit-transform", D), F.style.transition = o.transitions.create("transform", D), nn(f, F, u), x && x(F);
  }), $ = L((F) => {
    F.style.webkitTransition = "", F.style.transition = "", S && S(F);
  }), A = (F) => {
    a && a(j.current, F);
  }, G = E.useCallback(() => {
    j.current && nn(f, j.current, u);
  }, [f, u]);
  return E.useEffect(() => {
    if (g || f === "down" || f === "right")
      return;
    const F = Di(() => {
      j.current && nn(f, j.current, u);
    }), D = ze(j.current);
    return D.addEventListener("resize", F), () => {
      F.clear(), D.removeEventListener("resize", F);
    };
  }, [f, g, u]), E.useEffect(() => {
    g || G();
  }, [g, G]), /* @__PURE__ */ T.jsx(C, {
    nodeRef: j,
    onEnter: Y,
    onEntered: d,
    onEntering: V,
    onExit: w,
    onExited: $,
    onExiting: N,
    addEndListener: A,
    appear: c,
    in: g,
    timeout: v,
    ...k,
    children: (F, {
      ownerState: D,
      ...R
    }) => /* @__PURE__ */ E.cloneElement(l, {
      ref: M,
      style: {
        visibility: F === "exited" && !g ? "hidden" : void 0,
        ...O,
        ...l.props.style
      },
      ...R
    })
  });
});
process.env.NODE_ENV !== "production" && (hs.propTypes = {
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
      const t = gs(e.container);
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
const Qp = hs;
function Zp(e) {
  return ie("MuiDrawer", e);
}
ce("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const ys = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, ef = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: o
  } = e, i = {
    root: ["root", `anchor${K(n)}`],
    docked: [(o === "permanent" || o === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${K(n)}`, o !== "temporary" && `paperAnchorDocked${K(n)}`]
  };
  return pe(i, Zp, t);
}, tf = q(es, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: ys
})(ge(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), nf = q("div", {
  shouldForwardProp: Ot,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: ys
})({
  flex: "0 0 auto"
}), rf = q(kn, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${K(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${K(n.anchor)}`]];
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
}))), bs = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function of(e) {
  return ["left", "right"].includes(e);
}
function sf({
  direction: e
}, t) {
  return e === "rtl" && of(t) ? bs[t] : t;
}
const vs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiDrawer"
  }), i = Gt(), s = ni(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
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
    SlideProps: I,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O,
    transitionDuration: v = a,
    variant: C = "temporary",
    slots: k = {},
    slotProps: j = {},
    ...M
  } = o, L = E.useRef(!1);
  E.useEffect(() => {
    L.current = !0;
  }, []);
  const Y = sf({
    direction: s ? "rtl" : "ltr"
  }, c), d = {
    ...o,
    anchor: c,
    elevation: m,
    open: x,
    variant: C,
    ...M
  }, N = ef(d), w = {
    slots: {
      transition: O,
      ...k
    },
    slotProps: {
      paper: S,
      transition: I,
      ...j,
      backdrop: Li(j.backdrop || {
        ...l,
        ...h
      }, {
        transitionDuration: v
      })
    }
  }, [$, A] = be("root", {
    ref: n,
    elementType: tf,
    className: X(N.root, N.modal, f),
    shouldForwardComponentProp: !0,
    ownerState: d,
    externalForwardedProps: {
      ...w,
      ...M,
      ...y
    },
    additionalProps: {
      open: x,
      onClose: p,
      hideBackdrop: g,
      slots: {
        backdrop: w.slots.backdrop
      },
      slotProps: {
        backdrop: w.slotProps.backdrop
      }
    }
  }), [G, F] = be("paper", {
    elementType: rf,
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
  }), [D, R] = be("docked", {
    elementType: nf,
    ref: n,
    className: X(N.root, N.docked, f),
    ownerState: d,
    externalForwardedProps: w,
    additionalProps: M
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [b, _] = be("transition", {
    elementType: Qp,
    ownerState: d,
    externalForwardedProps: w,
    additionalProps: {
      in: x,
      direction: bs[Y],
      timeout: v,
      appear: L.current
    }
  }), z = /* @__PURE__ */ T.jsx(G, {
    ...F,
    children: u
  });
  if (C === "permanent")
    return /* @__PURE__ */ T.jsx(D, {
      ...R,
      children: z
    });
  const U = /* @__PURE__ */ T.jsx(b, {
    ..._,
    children: z
  });
  return C === "persistent" ? /* @__PURE__ */ T.jsx(D, {
    ...R,
    children: U
  }) : /* @__PURE__ */ T.jsx($, {
    ...A,
    children: U
  });
});
process.env.NODE_ENV !== "production" && (vs.propTypes = {
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
  elevation: xt,
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
const af = vs, cf = Ke(/* @__PURE__ */ T.jsx("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z"
}), "NotificationsRounded");
function xs(e) {
  const t = E.useRef({});
  return E.useEffect(() => {
    t.current = e;
  }), t.current;
}
function lf(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: o = 99,
    showZero: i = !1
  } = e, s = xs({
    badgeContent: t,
    max: o
  });
  let a = n;
  n === !1 && t === 0 && !i && (a = !0);
  const {
    badgeContent: c,
    max: l = o
  } = a ? s : e, u = c && Number(c) > l ? `${l}+` : c;
  return {
    badgeContent: c,
    invisible: a,
    max: l,
    displayValue: u
  };
}
function uf(e) {
  return ie("MuiBadge", e);
}
const df = ce("MuiBadge", [
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
]), We = df, Yn = 10, Hn = 4, pf = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: o,
    overlap: i,
    variant: s,
    classes: a = {}
  } = e, c = {
    root: ["root"],
    badge: ["badge", s, o && "invisible", `anchorOrigin${K(n.vertical)}${K(n.horizontal)}`, `anchorOrigin${K(n.vertical)}${K(n.horizontal)}${K(i)}`, `overlap${K(i)}`, t !== "default" && `color${K(t)}`]
  };
  return pe(c, uf, a);
}, ff = q("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), mf = q("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${K(n.anchorOrigin.vertical)}${K(n.anchorOrigin.horizontal)}${K(n.overlap)}`], n.color !== "default" && t[`color${K(n.color)}`], n.invisible && t.invisible];
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
  minWidth: Yn * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: Yn * 2,
  borderRadius: Yn,
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
      borderRadius: Hn,
      height: Hn * 2,
      minWidth: Hn * 2,
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
function jo(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
  };
}
const Ts = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiBadge"
  }), {
    anchorOrigin: i,
    className: s,
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
    showZero: I = !1,
    variant: O = "standard",
    ...v
  } = o, {
    badgeContent: C,
    invisible: k,
    max: j,
    displayValue: M
  } = lf({
    max: y,
    invisible: h,
    badgeContent: p,
    showZero: I
  }), L = xs({
    anchorOrigin: jo(i),
    color: g,
    overlap: m,
    variant: O,
    badgeContent: p
  }), Y = k || C == null && O !== "dot", {
    color: V = g,
    overlap: d = m,
    anchorOrigin: N,
    variant: w = O
  } = Y ? L : o, $ = jo(N), A = w !== "dot" ? M : void 0, G = {
    ...o,
    badgeContent: C,
    invisible: Y,
    max: j,
    displayValue: A,
    showZero: I,
    anchorOrigin: $,
    color: V,
    overlap: d,
    variant: w
  }, F = pf(G), D = {
    slots: {
      root: (x == null ? void 0 : x.root) ?? l.Root,
      badge: (x == null ? void 0 : x.badge) ?? l.Badge
    },
    slotProps: {
      root: (S == null ? void 0 : S.root) ?? u.root,
      badge: (S == null ? void 0 : S.badge) ?? u.badge
    }
  }, [R, b] = be("root", {
    elementType: ff,
    externalForwardedProps: {
      ...D,
      ...v
    },
    ownerState: G,
    className: X(F.root, s),
    ref: n,
    additionalProps: {
      as: c
    }
  }), [_, z] = be("badge", {
    elementType: mf,
    externalForwardedProps: D,
    ownerState: G,
    className: F.badge
  });
  return /* @__PURE__ */ T.jsxs(R, {
    ...b,
    children: [f, /* @__PURE__ */ T.jsx(_, {
      ...z,
      children: A
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ts.propTypes = {
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
const gf = Ts, hf = ({
  open: e,
  onClose: t,
  mainLinks: n,
  secondaryLinks: o = [],
  activePath: i,
  onLinkClick: s,
  userName: a = "User Name",
  userAvatar: c,
  onLogout: l,
  showNotifications: u = !1,
  notificationCount: f = 0,
  alertProps: m
}) => {
  const g = (h) => {
    s == null || s(h), t();
  };
  return /* @__PURE__ */ T.jsx(
    af,
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
        Ge,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ T.jsxs(Ge, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
              /* @__PURE__ */ T.jsxs(
                Ge,
                {
                  direction: "row",
                  sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                  children: [
                    /* @__PURE__ */ T.jsx(
                      Mi,
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
                gf,
                {
                  color: "error",
                  variant: "dot",
                  invisible: f === 0,
                  sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                  children: /* @__PURE__ */ T.jsx(Rr, { size: "small", children: /* @__PURE__ */ T.jsx(cf, {}) })
                }
              )
            ] }),
            /* @__PURE__ */ T.jsx(fn, {}),
            /* @__PURE__ */ T.jsxs(Ge, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ T.jsx(
                Ai,
                {
                  mainLinks: n,
                  secondaryLinks: o,
                  activePath: i,
                  onLinkClick: g
                }
              ),
              /* @__PURE__ */ T.jsx(fn, {})
            ] }),
            (m == null ? void 0 : m.show) && /* @__PURE__ */ T.jsx(ms, { ...m }),
            /* @__PURE__ */ T.jsx(Ge, { sx: { p: 2 }, children: /* @__PURE__ */ T.jsx(
              fs,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ T.jsx(ss, {}),
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
function yf(e) {
  return ie("MuiAppBar", e);
}
ce("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const bf = (e) => {
  const {
    color: t,
    position: n,
    classes: o
  } = e, i = {
    root: ["root", `color${K(t)}`, `position${K(n)}`]
  };
  return pe(i, yf, o);
}, Mo = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, vf = q(kn, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${K(n.position)}`], t[`color${K(n.color)}`]];
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
        backgroundColor: e.vars ? Mo(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? Mo(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
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
}))), Es = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiAppBar"
  }), {
    className: i,
    color: s = "primary",
    enableColorOnDark: a = !1,
    position: c = "fixed",
    ...l
  } = o, u = {
    ...o,
    color: s,
    position: c,
    enableColorOnDark: a
  }, f = bf(u);
  return /* @__PURE__ */ T.jsx(vf, {
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: X(f.root, i, c === "fixed" && "mui-fixed"),
    ref: n,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (Es.propTypes = {
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
const xf = Es;
function Tf(e) {
  return ie("MuiToolbar", e);
}
ce("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const Ef = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: o
  } = e;
  return pe({
    root: ["root", !n && "gutters", o]
  }, Tf, t);
}, Cf = q("div", {
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
}))), Cs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: s = "div",
    disableGutters: a = !1,
    variant: c = "regular",
    ...l
  } = o, u = {
    ...o,
    component: s,
    disableGutters: a,
    variant: c
  }, f = Ef(u);
  return /* @__PURE__ */ T.jsx(Cf, {
    as: s,
    className: X(f.root, i),
    ref: n,
    ownerState: u,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (Cs.propTypes = {
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
const Sf = Cs, Of = Ke(/* @__PURE__ */ T.jsx("path", {
  d: "M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
}), "MenuRounded"), wf = Ke(/* @__PURE__ */ T.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz"), Rf = q(Yt, {
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
}))), $f = q(wf)({
  width: 24,
  height: 16
});
function Ss(e) {
  const {
    slots: t = {},
    slotProps: n = {},
    ...o
  } = e, i = e;
  return /* @__PURE__ */ T.jsx("li", {
    children: /* @__PURE__ */ T.jsx(Rf, {
      focusRipple: !0,
      ...o,
      ownerState: i,
      children: /* @__PURE__ */ T.jsx($f, {
        as: t.CollapsedIcon,
        ownerState: i,
        ...n.collapsedIcon
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
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
function Pf(e) {
  return ie("MuiBreadcrumbs", e);
}
const If = ce("MuiBreadcrumbs", ["root", "ol", "li", "separator"]), pr = If, kf = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  }, Pf, t);
}, Nf = q(Oe, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${pr.li}`]: t.li
  }, t.root]
})({}), Af = q("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol"
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
}), jf = q("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator"
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function Mf(e, t, n, o) {
  return e.reduce((i, s, a) => (a < e.length - 1 ? i = i.concat(s, /* @__PURE__ */ T.jsx(jf, {
    "aria-hidden": !0,
    className: t,
    ownerState: o,
    children: n
  }, `separator-${a}`)) : i.push(s), i), []);
}
const Os = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const o = le({
    props: t,
    name: "MuiBreadcrumbs"
  }), {
    children: i,
    className: s,
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
  }, I = kf(S), O = Ui({
    elementType: c.CollapsedIcon,
    externalSlotProps: l.collapsedIcon,
    ownerState: S
  }), v = E.useRef(null), C = (j) => {
    const M = () => {
      x(!0);
      const L = v.current.querySelector("a[href],button,[tabindex]");
      L && L.focus();
    };
    return m + f >= j.length ? (process.env.NODE_ENV !== "production" && console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.", `itemsAfterCollapse={${f}} + itemsBeforeCollapse={${m}} >= maxItems={${g}}`].join(`
`)), j) : [...j.slice(0, m), /* @__PURE__ */ T.jsx(Ss, {
      "aria-label": u,
      slots: {
        CollapsedIcon: c.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: O
      },
      onClick: M
    }, "ellipsis"), ...j.slice(j.length - f, j.length)];
  }, k = E.Children.toArray(i).filter((j) => (process.env.NODE_ENV !== "production" && st.isFragment(j) && console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ E.isValidElement(j))).map((j, M) => /* @__PURE__ */ T.jsx("li", {
    className: I.li,
    children: j
  }, `child-${M}`));
  return /* @__PURE__ */ T.jsx(Nf, {
    ref: n,
    component: a,
    color: "textSecondary",
    className: X(I.root, s),
    ownerState: S,
    ...y,
    children: /* @__PURE__ */ T.jsx(Af, {
      className: I.ol,
      ref: v,
      ownerState: S,
      children: Mf(p || g && k.length <= g ? k : C(k), I.separator, h, S)
    })
  });
});
process.env.NODE_ENV !== "production" && (Os.propTypes = {
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
  itemsAfterCollapse: xt,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: xt,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: xt,
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
const _f = Os, Bf = Ke(/* @__PURE__ */ T.jsx("path", {
  d: "M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"
}), "NavigateNextRounded"), Df = q(_f)(({ theme: e }) => ({
  margin: e.spacing(1, 0),
  [`& .${pr.separator}`]: {
    color: (e.vars || e).palette.action.disabled,
    margin: 1
  },
  [`& .${pr.ol}`]: {
    alignItems: "center"
  }
})), Lf = ({
  appName: e = "Dashboard",
  pageName: t = "Home"
}) => /* @__PURE__ */ T.jsxs(
  Df,
  {
    "aria-label": "breadcrumb",
    separator: /* @__PURE__ */ T.jsx(Bf, { fontSize: "small" }),
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
), Ff = q(Sf)({
  width: "100%",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "8px",
  flexShrink: 0
}), zf = ({
  appName: e = "Dashboard",
  pageName: t = "Home",
  onMenuClick: n,
  showMenuButton: o = !0,
  headerStyles: i
}) => /* @__PURE__ */ T.jsx(
  xf,
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
      ...i
    },
    children: /* @__PURE__ */ T.jsx(Ff, { variant: "dense", children: /* @__PURE__ */ T.jsxs(
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
          /* @__PURE__ */ T.jsx(Bi, { sx: { mr: "auto" }, children: /* @__PURE__ */ T.jsx(
            Lf,
            {
              appName: e,
              pageName: t
            }
          ) }),
          o && /* @__PURE__ */ T.jsx(
            Rr,
            {
              "aria-label": "menu",
              onClick: n,
              sx: {
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "action.hover"
                }
              },
              children: /* @__PURE__ */ T.jsx(Of, {})
            }
          )
        ]
      }
    ) })
  }
), Vf = 10 * 60 * 1e3, Uf = "/api/auth/refresh", _o = "/login", Jf = ({
  children: e,
  sidebarLinks: t = [],
  secondarySidebarLinks: n = [],
  appName: o = "Dashboard",
  pageName: i = "Home",
  showHeader: s = !0,
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
  notificationCount: I = 0,
  alertProps: O,
  style: v,
  headerStyles: C,
  sidebarStyles: k,
  contentStyles: j
}) => {
  const M = ks(), L = Ns(M.breakpoints.down("md")), [Y, V] = Ps(!1), d = () => {
    V(!Y);
  }, N = () => {
    V(!1);
  };
  return Is(() => {
    if (!c)
      return;
    (async () => {
      try {
        const $ = Qe.get("tokenExpiry");
        if (!$) {
          console.warn("No tokenExpiry cookie found");
          return;
        }
        const A = /* @__PURE__ */ new Date(), F = new Date($).getTime() - A.getTime();
        if (F <= Vf && F > 0) {
          console.log("Token expires soon, refreshing...");
          try {
            const D = await fetch(Uf, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              credentials: "include"
              // Include cookies in the request
            });
            if (!D.ok)
              throw new Error(
                `Refresh token API failed with status: ${D.status}`
              );
            const R = await D.json();
            R.token && Qe.set("token", R.token, {
              expires: 7,
              // 7 days
              secure: !0,
              sameSite: "strict"
            }), R.tokenExpiry && Qe.set("tokenExpiry", R.tokenExpiry, {
              expires: 7,
              // 7 days
              secure: !0,
              sameSite: "strict"
            }), console.log("Token refreshed successfully");
          } catch (D) {
            console.error("Token refresh failed:", D), Qe.remove("token"), Qe.remove("tokenExpiry"), window.location.href = _o;
          }
        } else
          F <= 0 ? (console.warn("Token has expired, redirecting to login"), Qe.remove("token"), Qe.remove("tokenExpiry"), window.location.href = _o) : console.log("Token is still valid, no refresh needed");
      } catch ($) {
        console.error("Error checking token expiry:", $);
      }
    })();
  }, [c]), /* @__PURE__ */ T.jsxs(Xt, { sx: { display: "flex", height: "100vh", ...v }, children: [
    /* @__PURE__ */ T.jsx(As, {}),
    s && /* @__PURE__ */ T.jsx(
      zf,
      {
        appName: o,
        pageName: i,
        onMenuClick: L && a ? d : void 0,
        showMenuButton: L && a,
        headerStyles: C
      }
    ),
    a && !L && /* @__PURE__ */ T.jsxs(
      js,
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
          ...k
        },
        children: [
          /* @__PURE__ */ T.jsx(
            Xt,
            {
              sx: {
                display: "flex",
                mt: "calc(var(--template-frame-height, 0px) + 4px)",
                p: 1.5
              }
            }
          ),
          /* @__PURE__ */ T.jsxs(
            Xt,
            {
              sx: {
                overflow: "auto",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              },
              children: [
                /* @__PURE__ */ T.jsx(
                  Ai,
                  {
                    mainLinks: t,
                    secondaryLinks: n,
                    activePath: l,
                    onLinkClick: u
                  }
                ),
                (O == null ? void 0 : O.show) && /* @__PURE__ */ T.jsx(ms, { ...O })
              ]
            }
          ),
          /* @__PURE__ */ T.jsx(
            Np,
            {
              userName: f,
              userEmail: m,
              userAvatar: g,
              onLogout: h,
              onProfileClick: y,
              onAccountClick: p,
              onSettingsClick: x
            }
          )
        ]
      }
    ),
    a && L && /* @__PURE__ */ T.jsx(
      hf,
      {
        open: Y,
        onClose: N,
        mainLinks: t,
        secondaryLinks: n,
        activePath: l,
        onLinkClick: u,
        userName: f,
        userEmail: m,
        userAvatar: g,
        onLogout: h,
        showNotifications: S,
        notificationCount: I,
        alertProps: O
      }
    ),
    /* @__PURE__ */ T.jsx(
      Xt,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          m: 1,
          width: L ? "100%" : a ? "calc(100% - 240px)" : "100%",
          // mt: showHeader ? '80px' : 0, // Account for AppNavbar height only if header is shown
          // ml: isMobile ? 0 : showSidebar ? '240px' : 0, // Offset for sidebar on desktop
          overflow: "auto",
          ...j
        },
        children: e
      }
    )
  ] });
};
export {
  Jf as LumoraWrapper,
  Jf as default
};
