var Oa = Object.defineProperty;
var Ra = (e, t, n) => t in e ? Oa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Gt = (e, t, n) => (Ra(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as T from "react";
import Ge, { Children as wa, isValidElement as En, cloneElement as Tn, useState as $a, useEffect as Pa } from "react";
import { useTheme as Ia, useMediaQuery as ka, Box as mn, CssBaseline as Na, Drawer as ja } from "@mui/material";
import mt from "js-cookie";
import Ma from "@emotion/styled";
import { ThemeContext as Aa, keyframes as an, css as hi } from "@emotion/react";
import * as _a from "react-dom";
import gn from "react-dom";
function Da(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hr = { exports: {} }, Yt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function Ba() {
  if (co)
    return Yt;
  co = 1;
  var e = Ge, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, u) {
    var f, m = {}, h = null, y = null;
    u !== void 0 && (h = "" + u), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (f in l)
      o.call(l, f) && !s.hasOwnProperty(f) && (m[f] = l[f]);
    if (c && c.defaultProps)
      for (f in l = c.defaultProps, l)
        m[f] === void 0 && (m[f] = l[f]);
    return { $$typeof: t, type: c, key: h, ref: y, props: m, _owner: i.current };
  }
  return Yt.Fragment = n, Yt.jsx = a, Yt.jsxs = a, Yt;
}
var Ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function La() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ge, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b = Symbol.iterator, p = "@@iterator";
    function x(g) {
      if (g === null || typeof g != "object")
        return null;
      var _ = b && g[b] || g[p];
      return typeof _ == "function" ? _ : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(g) {
      {
        for (var _ = arguments.length, U = new Array(_ > 1 ? _ - 1 : 0), te = 1; te < _; te++)
          U[te - 1] = arguments[te];
        O("error", g, U);
      }
    }
    function O(g, _, U) {
      {
        var te = S.ReactDebugCurrentFrame, le = te.getStackAddendum();
        le !== "" && (_ += "%s", U = U.concat([le]));
        var xe = U.map(function(ce) {
          return String(ce);
        });
        xe.unshift("Warning: " + _), Function.prototype.apply.call(console[g], console, xe);
      }
    }
    var v = !1, C = !1, N = !1, M = !1, A = !1, F;
    F = Symbol.for("react.module.reference");
    function Y(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === o || g === s || A || g === i || g === u || g === f || M || g === y || v || C || N || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === c || g.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === F || g.getModuleId !== void 0));
    }
    function W(g, _, U) {
      var te = g.displayName;
      if (te)
        return te;
      var le = _.displayName || _.name || "";
      return le !== "" ? U + "(" + le + ")" : U;
    }
    function d(g) {
      return g.displayName || "Context";
    }
    function I(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case c:
            var _ = g;
            return d(_) + ".Consumer";
          case a:
            var U = g;
            return d(U._context) + ".Provider";
          case l:
            return W(g, g.render, "ForwardRef");
          case m:
            var te = g.displayName || null;
            return te !== null ? te : I(g.type) || "Memo";
          case h: {
            var le = g, xe = le._payload, ce = le._init;
            try {
              return I(ce(xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, $ = 0, j, G, V, B, P, L, q;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function K() {
      {
        if ($ === 0) {
          j = console.log, G = console.info, V = console.warn, B = console.error, P = console.group, L = console.groupCollapsed, q = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        $++;
      }
    }
    function ie() {
      {
        if ($--, $ === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, g, {
              value: j
            }),
            info: R({}, g, {
              value: G
            }),
            warn: R({}, g, {
              value: V
            }),
            error: R({}, g, {
              value: B
            }),
            group: R({}, g, {
              value: P
            }),
            groupCollapsed: R({}, g, {
              value: L
            }),
            groupEnd: R({}, g, {
              value: q
            })
          });
        }
        $ < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = S.ReactCurrentDispatcher, ee;
    function re(g, _, U) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (le) {
            var te = le.stack.trim().match(/\n( *(at )?)/);
            ee = te && te[1] || "";
          }
        return `
` + ee + g;
      }
    }
    var se = !1, z;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      z = new ne();
    }
    function D(g, _) {
      if (!g || se)
        return "";
      {
        var U = z.get(g);
        if (U !== void 0)
          return U;
      }
      var te;
      se = !0;
      var le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = Z.current, Z.current = null, K();
      try {
        if (_) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (Ae) {
              te = Ae;
            }
            Reflect.construct(g, [], ce);
          } else {
            try {
              ce.call();
            } catch (Ae) {
              te = Ae;
            }
            g.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ae) {
            te = Ae;
          }
          g();
        }
      } catch (Ae) {
        if (Ae && te && typeof Ae.stack == "string") {
          for (var ae = Ae.stack.split(`
`), je = te.stack.split(`
`), Re = ae.length - 1, Pe = je.length - 1; Re >= 1 && Pe >= 0 && ae[Re] !== je[Pe]; )
            Pe--;
          for (; Re >= 1 && Pe >= 0; Re--, Pe--)
            if (ae[Re] !== je[Pe]) {
              if (Re !== 1 || Pe !== 1)
                do
                  if (Re--, Pe--, Pe < 0 || ae[Re] !== je[Pe]) {
                    var Fe = `
` + ae[Re].replace(" at new ", " at ");
                    return g.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", g.displayName)), typeof g == "function" && z.set(g, Fe), Fe;
                  }
                while (Re >= 1 && Pe >= 0);
              break;
            }
        }
      } finally {
        se = !1, Z.current = xe, ie(), Error.prepareStackTrace = le;
      }
      var Rt = g ? g.displayName || g.name : "", ft = Rt ? re(Rt) : "";
      return typeof g == "function" && z.set(g, ft), ft;
    }
    function Ee(g, _, U) {
      return D(g, !1);
    }
    function Ie(g) {
      var _ = g.prototype;
      return !!(_ && _.isReactComponent);
    }
    function ke(g, _, U) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return D(g, Ie(g));
      if (typeof g == "string")
        return re(g);
      switch (g) {
        case u:
          return re("Suspense");
        case f:
          return re("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case l:
            return Ee(g.render);
          case m:
            return ke(g.type, _, U);
          case h: {
            var te = g, le = te._payload, xe = te._init;
            try {
              return ke(xe(le), _, U);
            } catch {
            }
          }
        }
      return "";
    }
    var qe = Object.prototype.hasOwnProperty, Ke = {}, Ue = S.ReactDebugCurrentFrame;
    function Le(g) {
      if (g) {
        var _ = g._owner, U = ke(g.type, g._source, _ ? _.type : null);
        Ue.setExtraStackFrame(U);
      } else
        Ue.setExtraStackFrame(null);
    }
    function pt(g, _, U, te, le) {
      {
        var xe = Function.call.bind(qe);
        for (var ce in g)
          if (xe(g, ce)) {
            var ae = void 0;
            try {
              if (typeof g[ce] != "function") {
                var je = Error((te || "React class") + ": " + U + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              ae = g[ce](_, ce, te, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Re) {
              ae = Re;
            }
            ae && !(ae instanceof Error) && (Le(le), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", U, ce, typeof ae), Le(null)), ae instanceof Error && !(ae.message in Ke) && (Ke[ae.message] = !0, Le(le), w("Failed %s type: %s", U, ae.message), Le(null));
          }
      }
    }
    var Ne = Array.isArray;
    function oe(g) {
      return Ne(g);
    }
    function ia(g) {
      {
        var _ = typeof Symbol == "function" && Symbol.toStringTag, U = _ && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return U;
      }
    }
    function sa(g) {
      try {
        return Jr(g), !1;
      } catch {
        return !0;
      }
    }
    function Jr(g) {
      return "" + g;
    }
    function Qr(g) {
      if (sa(g))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ia(g)), Jr(g);
    }
    var Ut = S.ReactCurrentOwner, aa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zr, eo, Kn;
    Kn = {};
    function ca(g) {
      if (qe.call(g, "ref")) {
        var _ = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function la(g) {
      if (qe.call(g, "key")) {
        var _ = Object.getOwnPropertyDescriptor(g, "key").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function ua(g, _) {
      if (typeof g.ref == "string" && Ut.current && _ && Ut.current.stateNode !== _) {
        var U = I(Ut.current.type);
        Kn[U] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Ut.current.type), g.ref), Kn[U] = !0);
      }
    }
    function da(g, _) {
      {
        var U = function() {
          Zr || (Zr = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        U.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function pa(g, _) {
      {
        var U = function() {
          eo || (eo = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        U.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var fa = function(g, _, U, te, le, xe, ce) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: _,
        ref: U,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: xe
      };
      return ae._store = {}, Object.defineProperty(ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function ma(g, _, U, te, le) {
      {
        var xe, ce = {}, ae = null, je = null;
        U !== void 0 && (Qr(U), ae = "" + U), la(_) && (Qr(_.key), ae = "" + _.key), ca(_) && (je = _.ref, ua(_, le));
        for (xe in _)
          qe.call(_, xe) && !aa.hasOwnProperty(xe) && (ce[xe] = _[xe]);
        if (g && g.defaultProps) {
          var Re = g.defaultProps;
          for (xe in Re)
            ce[xe] === void 0 && (ce[xe] = Re[xe]);
        }
        if (ae || je) {
          var Pe = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ae && da(ce, Pe), je && pa(ce, Pe);
        }
        return fa(g, ae, je, le, te, Ut.current, ce);
      }
    }
    var Xn = S.ReactCurrentOwner, to = S.ReactDebugCurrentFrame;
    function Ot(g) {
      if (g) {
        var _ = g._owner, U = ke(g.type, g._source, _ ? _.type : null);
        to.setExtraStackFrame(U);
      } else
        to.setExtraStackFrame(null);
    }
    var Jn;
    Jn = !1;
    function Qn(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function no() {
      {
        if (Xn.current) {
          var g = I(Xn.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function ga(g) {
      {
        if (g !== void 0) {
          var _ = g.fileName.replace(/^.*[\\\/]/, ""), U = g.lineNumber;
          return `

Check your code at ` + _ + ":" + U + ".";
        }
        return "";
      }
    }
    var ro = {};
    function ha(g) {
      {
        var _ = no();
        if (!_) {
          var U = typeof g == "string" ? g : g.displayName || g.name;
          U && (_ = `

Check the top-level render call using <` + U + ">.");
        }
        return _;
      }
    }
    function oo(g, _) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var U = ha(_);
        if (ro[U])
          return;
        ro[U] = !0;
        var te = "";
        g && g._owner && g._owner !== Xn.current && (te = " It was passed a child from " + I(g._owner.type) + "."), Ot(g), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, te), Ot(null);
      }
    }
    function io(g, _) {
      {
        if (typeof g != "object")
          return;
        if (oe(g))
          for (var U = 0; U < g.length; U++) {
            var te = g[U];
            Qn(te) && oo(te, _);
          }
        else if (Qn(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var le = x(g);
          if (typeof le == "function" && le !== g.entries)
            for (var xe = le.call(g), ce; !(ce = xe.next()).done; )
              Qn(ce.value) && oo(ce.value, _);
        }
      }
    }
    function ya(g) {
      {
        var _ = g.type;
        if (_ == null || typeof _ == "string")
          return;
        var U;
        if (typeof _ == "function")
          U = _.propTypes;
        else if (typeof _ == "object" && (_.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        _.$$typeof === m))
          U = _.propTypes;
        else
          return;
        if (U) {
          var te = I(_);
          pt(U, g.props, "prop", te, g);
        } else if (_.PropTypes !== void 0 && !Jn) {
          Jn = !0;
          var le = I(_);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
        }
        typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ba(g) {
      {
        for (var _ = Object.keys(g.props), U = 0; U < _.length; U++) {
          var te = _[U];
          if (te !== "children" && te !== "key") {
            Ot(g), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), Ot(null);
            break;
          }
        }
        g.ref !== null && (Ot(g), w("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
      }
    }
    var so = {};
    function ao(g, _, U, te, le, xe) {
      {
        var ce = Y(g);
        if (!ce) {
          var ae = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = ga(le);
          je ? ae += je : ae += no();
          var Re;
          g === null ? Re = "null" : oe(g) ? Re = "array" : g !== void 0 && g.$$typeof === t ? (Re = "<" + (I(g.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof g, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, ae);
        }
        var Pe = ma(g, _, U, le, xe);
        if (Pe == null)
          return Pe;
        if (ce) {
          var Fe = _.children;
          if (Fe !== void 0)
            if (te)
              if (oe(Fe)) {
                for (var Rt = 0; Rt < Fe.length; Rt++)
                  io(Fe[Rt], g);
                Object.freeze && Object.freeze(Fe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              io(Fe, g);
        }
        if (qe.call(_, "key")) {
          var ft = I(g), Ae = Object.keys(_).filter(function(Sa) {
            return Sa !== "key";
          }), Zn = Ae.length > 0 ? "{key: someKey, " + Ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!so[ft + Zn]) {
            var Ca = Ae.length > 0 ? "{" + Ae.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Zn, ft, Ca, ft), so[ft + Zn] = !0;
          }
        }
        return g === o ? ba(Pe) : ya(Pe), Pe;
      }
    }
    function va(g, _, U) {
      return ao(g, _, U, !0);
    }
    function xa(g, _, U) {
      return ao(g, _, U, !1);
    }
    var Ea = xa, Ta = va;
    Ht.Fragment = o, Ht.jsx = Ea, Ht.jsxs = Ta;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? hr.exports = Ba() : hr.exports = La();
var E = hr.exports, yr = { exports: {} }, hn = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function Fa() {
  if (uo)
    return ue;
  uo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function O(C) {
    if (typeof C == "object" && C !== null) {
      var N = C.$$typeof;
      switch (N) {
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
                case b:
                case y:
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
  return ue.AsyncMode = l, ue.ConcurrentMode = u, ue.ContextConsumer = c, ue.ContextProvider = a, ue.Element = t, ue.ForwardRef = f, ue.Fragment = o, ue.Lazy = b, ue.Memo = y, ue.Portal = n, ue.Profiler = s, ue.StrictMode = i, ue.Suspense = m, ue.isAsyncMode = function(C) {
    return v(C) || O(C) === l;
  }, ue.isConcurrentMode = v, ue.isContextConsumer = function(C) {
    return O(C) === c;
  }, ue.isContextProvider = function(C) {
    return O(C) === a;
  }, ue.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, ue.isForwardRef = function(C) {
    return O(C) === f;
  }, ue.isFragment = function(C) {
    return O(C) === o;
  }, ue.isLazy = function(C) {
    return O(C) === b;
  }, ue.isMemo = function(C) {
    return O(C) === y;
  }, ue.isPortal = function(C) {
    return O(C) === n;
  }, ue.isProfiler = function(C) {
    return O(C) === s;
  }, ue.isStrictMode = function(C) {
    return O(C) === i;
  }, ue.isSuspense = function(C) {
    return O(C) === m;
  }, ue.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === o || C === u || C === s || C === i || C === m || C === h || typeof C == "object" && C !== null && (C.$$typeof === b || C.$$typeof === y || C.$$typeof === a || C.$$typeof === c || C.$$typeof === f || C.$$typeof === x || C.$$typeof === S || C.$$typeof === w || C.$$typeof === p);
  }, ue.typeOf = O, ue;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function Va() {
  return po || (po = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function O(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === o || D === u || D === s || D === i || D === m || D === h || typeof D == "object" && D !== null && (D.$$typeof === b || D.$$typeof === y || D.$$typeof === a || D.$$typeof === c || D.$$typeof === f || D.$$typeof === x || D.$$typeof === S || D.$$typeof === w || D.$$typeof === p);
    }
    function v(D) {
      if (typeof D == "object" && D !== null) {
        var Ee = D.$$typeof;
        switch (Ee) {
          case t:
            var Ie = D.type;
            switch (Ie) {
              case l:
              case u:
              case o:
              case s:
              case i:
              case m:
                return Ie;
              default:
                var ke = Ie && Ie.$$typeof;
                switch (ke) {
                  case c:
                  case f:
                  case b:
                  case y:
                  case a:
                    return ke;
                  default:
                    return Ee;
                }
            }
          case n:
            return Ee;
        }
      }
    }
    var C = l, N = u, M = c, A = a, F = t, Y = f, W = o, d = b, I = y, R = n, $ = s, j = i, G = m, V = !1;
    function B(D) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(D) || v(D) === l;
    }
    function P(D) {
      return v(D) === u;
    }
    function L(D) {
      return v(D) === c;
    }
    function q(D) {
      return v(D) === a;
    }
    function H(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function K(D) {
      return v(D) === f;
    }
    function ie(D) {
      return v(D) === o;
    }
    function Z(D) {
      return v(D) === b;
    }
    function ee(D) {
      return v(D) === y;
    }
    function re(D) {
      return v(D) === n;
    }
    function se(D) {
      return v(D) === s;
    }
    function z(D) {
      return v(D) === i;
    }
    function ne(D) {
      return v(D) === m;
    }
    de.AsyncMode = C, de.ConcurrentMode = N, de.ContextConsumer = M, de.ContextProvider = A, de.Element = F, de.ForwardRef = Y, de.Fragment = W, de.Lazy = d, de.Memo = I, de.Portal = R, de.Profiler = $, de.StrictMode = j, de.Suspense = G, de.isAsyncMode = B, de.isConcurrentMode = P, de.isContextConsumer = L, de.isContextProvider = q, de.isElement = H, de.isForwardRef = K, de.isFragment = ie, de.isLazy = Z, de.isMemo = ee, de.isPortal = re, de.isProfiler = se, de.isStrictMode = z, de.isSuspense = ne, de.isValidElementType = O, de.typeOf = v;
  }()), de;
}
var fo;
function yi() {
  return fo || (fo = 1, process.env.NODE_ENV === "production" ? hn.exports = Fa() : hn.exports = Va()), hn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var er, mo;
function za() {
  if (mo)
    return er;
  mo = 1;
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
  return er = i() ? Object.assign : function(s, a) {
    for (var c, l = o(s), u, f = 1; f < arguments.length; f++) {
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
  }, er;
}
var tr, go;
function Ar() {
  if (go)
    return tr;
  go = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tr = e, tr;
}
var nr, ho;
function bi() {
  return ho || (ho = 1, nr = Function.call.bind(Object.prototype.hasOwnProperty)), nr;
}
var rr, yo;
function Wa() {
  if (yo)
    return rr;
  yo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ar(), n = {}, o = bi();
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
              var h = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = s[f](a, f, l, c, null, t);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var y = u ? u() : "";
            e(
              "Failed " + c + " type: " + m.message + (y ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, rr = i, rr;
}
var or, bo;
function Ua() {
  if (bo)
    return or;
  bo = 1;
  var e = yi(), t = za(), n = Ar(), o = bi(), i = Wa(), s = function() {
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
  return or = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(P) {
      var L = P && (u && P[u] || P[f]);
      if (typeof L == "function")
        return L;
    }
    var h = "<<anonymous>>", y = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: w(),
      arrayOf: O,
      element: v(),
      elementType: C(),
      instanceOf: N,
      node: Y(),
      objectOf: A,
      oneOf: M,
      oneOfType: F,
      shape: d,
      exact: I
    };
    function b(P, L) {
      return P === L ? P !== 0 || 1 / P === 1 / L : P !== P && L !== L;
    }
    function p(P, L) {
      this.message = P, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function x(P) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, q = 0;
      function H(ie, Z, ee, re, se, z, ne) {
        if (re = re || h, z = z || ee, ne !== n) {
          if (l) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = re + ":" + ee;
            !L[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[Ee] = !0, q++);
          }
        }
        return Z[ee] == null ? ie ? Z[ee] === null ? new p("The " + se + " `" + z + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new p("The " + se + " `" + z + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : P(Z, ee, re, se, z);
      }
      var K = H.bind(null, !1);
      return K.isRequired = H.bind(null, !0), K;
    }
    function S(P) {
      function L(q, H, K, ie, Z, ee) {
        var re = q[H], se = j(re);
        if (se !== P) {
          var z = G(re);
          return new p(
            "Invalid " + ie + " `" + Z + "` of type " + ("`" + z + "` supplied to `" + K + "`, expected ") + ("`" + P + "`."),
            { expectedType: P }
          );
        }
        return null;
      }
      return x(L);
    }
    function w() {
      return x(a);
    }
    function O(P) {
      function L(q, H, K, ie, Z) {
        if (typeof P != "function")
          return new p("Property `" + Z + "` of component `" + K + "` has invalid PropType notation inside arrayOf.");
        var ee = q[H];
        if (!Array.isArray(ee)) {
          var re = j(ee);
          return new p("Invalid " + ie + " `" + Z + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected an array."));
        }
        for (var se = 0; se < ee.length; se++) {
          var z = P(ee, se, K, ie, Z + "[" + se + "]", n);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return x(L);
    }
    function v() {
      function P(L, q, H, K, ie) {
        var Z = L[q];
        if (!c(Z)) {
          var ee = j(Z);
          return new p("Invalid " + K + " `" + ie + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(P);
    }
    function C() {
      function P(L, q, H, K, ie) {
        var Z = L[q];
        if (!e.isValidElementType(Z)) {
          var ee = j(Z);
          return new p("Invalid " + K + " `" + ie + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(P);
    }
    function N(P) {
      function L(q, H, K, ie, Z) {
        if (!(q[H] instanceof P)) {
          var ee = P.name || h, re = B(q[H]);
          return new p("Invalid " + ie + " `" + Z + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected ") + ("instance of `" + ee + "`."));
        }
        return null;
      }
      return x(L);
    }
    function M(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function L(q, H, K, ie, Z) {
        for (var ee = q[H], re = 0; re < P.length; re++)
          if (b(ee, P[re]))
            return null;
        var se = JSON.stringify(P, function(ne, D) {
          var Ee = G(D);
          return Ee === "symbol" ? String(D) : D;
        });
        return new p("Invalid " + ie + " `" + Z + "` of value `" + String(ee) + "` " + ("supplied to `" + K + "`, expected one of " + se + "."));
      }
      return x(L);
    }
    function A(P) {
      function L(q, H, K, ie, Z) {
        if (typeof P != "function")
          return new p("Property `" + Z + "` of component `" + K + "` has invalid PropType notation inside objectOf.");
        var ee = q[H], re = j(ee);
        if (re !== "object")
          return new p("Invalid " + ie + " `" + Z + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected an object."));
        for (var se in ee)
          if (o(ee, se)) {
            var z = P(ee, se, K, ie, Z + "." + se, n);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return x(L);
    }
    function F(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var L = 0; L < P.length; L++) {
        var q = P[L];
        if (typeof q != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(q) + " at index " + L + "."
          ), a;
      }
      function H(K, ie, Z, ee, re) {
        for (var se = [], z = 0; z < P.length; z++) {
          var ne = P[z], D = ne(K, ie, Z, ee, re, n);
          if (D == null)
            return null;
          D.data && o(D.data, "expectedType") && se.push(D.data.expectedType);
        }
        var Ee = se.length > 0 ? ", expected one of type [" + se.join(", ") + "]" : "";
        return new p("Invalid " + ee + " `" + re + "` supplied to " + ("`" + Z + "`" + Ee + "."));
      }
      return x(H);
    }
    function Y() {
      function P(L, q, H, K, ie) {
        return R(L[q]) ? null : new p("Invalid " + K + " `" + ie + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return x(P);
    }
    function W(P, L, q, H, K) {
      return new p(
        (P || "React class") + ": " + L + " type `" + q + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + K + "`."
      );
    }
    function d(P) {
      function L(q, H, K, ie, Z) {
        var ee = q[H], re = j(ee);
        if (re !== "object")
          return new p("Invalid " + ie + " `" + Z + "` of type `" + re + "` " + ("supplied to `" + K + "`, expected `object`."));
        for (var se in P) {
          var z = P[se];
          if (typeof z != "function")
            return W(K, ie, Z, se, G(z));
          var ne = z(ee, se, K, ie, Z + "." + se, n);
          if (ne)
            return ne;
        }
        return null;
      }
      return x(L);
    }
    function I(P) {
      function L(q, H, K, ie, Z) {
        var ee = q[H], re = j(ee);
        if (re !== "object")
          return new p("Invalid " + ie + " `" + Z + "` of type `" + re + "` " + ("supplied to `" + K + "`, expected `object`."));
        var se = t({}, q[H], P);
        for (var z in se) {
          var ne = P[z];
          if (o(P, z) && typeof ne != "function")
            return W(K, ie, Z, z, G(ne));
          if (!ne)
            return new p(
              "Invalid " + ie + " `" + Z + "` key `" + z + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(q[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
            );
          var D = ne(ee, z, K, ie, Z + "." + z, n);
          if (D)
            return D;
        }
        return null;
      }
      return x(L);
    }
    function R(P) {
      switch (typeof P) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !P;
        case "object":
          if (Array.isArray(P))
            return P.every(R);
          if (P === null || c(P))
            return !0;
          var L = m(P);
          if (L) {
            var q = L.call(P), H;
            if (L !== P.entries) {
              for (; !(H = q.next()).done; )
                if (!R(H.value))
                  return !1;
            } else
              for (; !(H = q.next()).done; ) {
                var K = H.value;
                if (K && !R(K[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function $(P, L) {
      return P === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function j(P) {
      var L = typeof P;
      return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : $(L, P) ? "symbol" : L;
    }
    function G(P) {
      if (typeof P > "u" || P === null)
        return "" + P;
      var L = j(P);
      if (L === "object") {
        if (P instanceof Date)
          return "date";
        if (P instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function V(P) {
      var L = G(P);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function B(P) {
      return !P.constructor || !P.constructor.name ? h : P.constructor.name;
    }
    return y.checkPropTypes = i, y.resetWarningCache = i.resetWarningCache, y.PropTypes = y, y;
  }, or;
}
var ir, vo;
function Ga() {
  if (vo)
    return ir;
  vo = 1;
  var e = Ar();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ir = function() {
    function o(a, c, l, u, f, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, ir;
}
if (process.env.NODE_ENV !== "production") {
  var Ya = yi(), Ha = !0;
  yr.exports = Ua()(Ya.isElement, Ha);
} else
  yr.exports = Ga()();
var qa = yr.exports;
const r = /* @__PURE__ */ Da(qa);
function vi(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = vi(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function Q() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = vi(e)) && (o && (o += " "), o += t);
  return o;
}
function ve(e, t, n = void 0) {
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
function ct(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((o) => n.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function J(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ct(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var br = { exports: {} }, ye = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo;
function Ka() {
  if (xo)
    return ye;
  xo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
  function b(p) {
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
            case h:
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
  return ye.ContextConsumer = s, ye.ContextProvider = a, ye.Element = e, ye.ForwardRef = c, ye.Fragment = n, ye.Lazy = m, ye.Memo = f, ye.Portal = t, ye.Profiler = i, ye.StrictMode = o, ye.Suspense = l, ye.SuspenseList = u, ye.isContextConsumer = function(p) {
    return b(p) === s;
  }, ye.isContextProvider = function(p) {
    return b(p) === a;
  }, ye.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ye.isForwardRef = function(p) {
    return b(p) === c;
  }, ye.isFragment = function(p) {
    return b(p) === n;
  }, ye.isLazy = function(p) {
    return b(p) === m;
  }, ye.isMemo = function(p) {
    return b(p) === f;
  }, ye.isPortal = function(p) {
    return b(p) === t;
  }, ye.isProfiler = function(p) {
    return b(p) === i;
  }, ye.isStrictMode = function(p) {
    return b(p) === o;
  }, ye.isSuspense = function(p) {
    return b(p) === l;
  }, ye.isSuspenseList = function(p) {
    return b(p) === u;
  }, ye.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === i || p === o || p === l || p === u || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === f || p.$$typeof === a || p.$$typeof === s || p.$$typeof === c || p.$$typeof === y || p.getModuleId !== void 0);
  }, ye.typeOf = b, ye;
}
var be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function Xa() {
  return Eo || (Eo = 1, process.env.NODE_ENV !== "production" && function() {
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
              case y:
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
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    be.ContextConsumer = a, be.ContextProvider = c, be.Element = t, be.ForwardRef = l, be.Fragment = o, be.Lazy = h, be.Memo = m, be.Portal = n, be.Profiler = s, be.StrictMode = i, be.Suspense = u, be.SuspenseList = f, be.isContextConsumer = function(p) {
      return e(p) === a;
    }, be.isContextProvider = function(p) {
      return e(p) === c;
    }, be.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, be.isForwardRef = function(p) {
      return e(p) === l;
    }, be.isFragment = function(p) {
      return e(p) === o;
    }, be.isLazy = function(p) {
      return e(p) === h;
    }, be.isMemo = function(p) {
      return e(p) === m;
    }, be.isPortal = function(p) {
      return e(p) === n;
    }, be.isProfiler = function(p) {
      return e(p) === s;
    }, be.isStrictMode = function(p) {
      return e(p) === i;
    }, be.isSuspense = function(p) {
      return e(p) === u;
    }, be.isSuspenseList = function(p) {
      return e(p) === f;
    }, be.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === o || p === s || p === i || p === u || p === f || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === m || p.$$typeof === c || p.$$typeof === a || p.$$typeof === l || p.$$typeof === b || p.getModuleId !== void 0);
    }, be.typeOf = e;
  }()), be;
}
process.env.NODE_ENV === "production" ? br.exports = Ka() : br.exports = Xa();
var Tt = br.exports;
function Qe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function xi(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || Tt.isValidElementType(e) || !Qe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = xi(e[n]);
  }), t;
}
function Me(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? {
    ...e
  } : e;
  return Qe(e) && Qe(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ T.isValidElement(t[i]) || Tt.isValidElementType(t[i]) ? o[i] = t[i] : Qe(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Qe(e[i]) ? o[i] = Me(e[i], t[i], n) : n.clone ? o[i] = Qe(t[i]) ? xi(t[i]) : t[i] : o[i] = t[i];
  }), o;
}
function tn(e, t) {
  return t ? Me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ja = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.string, r.object, r.array]) : {}, ut = Ja;
function To(e, t) {
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
function Qa(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Za(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ct(18, `(${t})`));
    return null;
  }
  const [, o, i] = n, s = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(i).up(s);
}
function ec(e) {
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
const Mn = {
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
}, Co = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Mn[e]}px)`
}, tc = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Mn[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function He(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const s = o.breakpoints || Co;
    return t.reduce((a, c, l) => (a[s.up(s.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const s = o.breakpoints || Co;
    return Object.keys(t).reduce((a, c) => {
      if (Qa(s.keys, c)) {
        const l = Za(o.containerQueries ? o : tc, c);
        l && (a[l] = n(t[c], c));
      } else if (Object.keys(s.values || Mn).includes(c)) {
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
function Ei(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((o, i) => {
    const s = e.up(i);
    return o[s] = {}, o;
  }, {})) || {};
}
function vr(e, t) {
  return e.reduce((n, o) => {
    const i = n[o];
    return (!i || Object.keys(i).length === 0) && delete n[o], n;
  }, t);
}
function nc(e, ...t) {
  const n = Ei(e), o = [n, ...t].reduce((i, s) => Me(i, s), {});
  return vr(Object.keys(n), o);
}
function rc(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, o = Object.keys(t);
  return Array.isArray(e) ? o.forEach((i, s) => {
    s < e.length && (n[i] = !0);
  }) : o.forEach((i) => {
    e[i] != null && (n[i] = !0);
  }), n;
}
function sr({
  values: e,
  breakpoints: t,
  base: n
}) {
  const o = n || rc(e, t), i = Object.keys(o);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, c, l) => (Array.isArray(e) ? (a[c] = e[l] != null ? e[l] : e[s], s = l) : typeof e == "object" ? (a[c] = e[c] != null ? e[c] : e[s], s = c) : a[c] = e, a), {});
}
function An(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, i) => o && o[i] != null ? o[i] : null, e);
}
function Sn(e, t, n, o = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || o : i = An(e, n) || o, t && (i = t(i, o, e)), i;
}
function $e(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, u = An(l, o) || {};
    return He(a, c, (m) => {
      let h = Sn(u, i, m);
      return m === h && typeof m == "string" && (h = Sn(u, i, `${t}${m === "default" ? "" : J(m)}`, m)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ut
  } : {}, s.filterProps = [t], s;
}
function oc(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const ic = {
  m: "margin",
  p: "padding"
}, sc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, So = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ac = oc((e) => {
  if (e.length > 2)
    if (So[e])
      e = So[e];
    else
      return [e];
  const [t, n] = e.split(""), o = ic[t], i = sc[n] || "";
  return Array.isArray(i) ? i.map((s) => o + s) : [o + i];
}), _n = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Dn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], cc = [..._n, ...Dn];
function cn(e, t, n, o) {
  const i = An(e, t, !0) ?? n;
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
function Bn(e) {
  return cn(e, "spacing", 8, "spacing");
}
function Ct(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function lc(e, t) {
  return (n) => e.reduce((o, i) => (o[i] = Ct(t, n), o), {});
}
function uc(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const i = ac(n), s = lc(i, o), a = e[n];
  return He(e, a, s);
}
function Ti(e, t) {
  const n = Bn(e.theme);
  return Object.keys(e).map((o) => uc(e, t, o, n)).reduce(tn, {});
}
function Ce(e) {
  return Ti(e, _n);
}
Ce.propTypes = process.env.NODE_ENV !== "production" ? _n.reduce((e, t) => (e[t] = ut, e), {}) : {};
Ce.filterProps = _n;
function Se(e) {
  return Ti(e, Dn);
}
Se.propTypes = process.env.NODE_ENV !== "production" ? Dn.reduce((e, t) => (e[t] = ut, e), {}) : {};
Se.filterProps = Dn;
process.env.NODE_ENV !== "production" && cc.reduce((e, t) => (e[t] = ut, e), {});
function Ln(...e) {
  const t = e.reduce((o, i) => (i.filterProps.forEach((s) => {
    o[s] = i;
  }), o), {}), n = (o) => Object.keys(o).reduce((i, s) => t[s] ? tn(i, t[s](o)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, i) => Object.assign(o, i.propTypes), {}) : {}, n.filterProps = e.reduce((o, i) => o.concat(i.filterProps), []), n;
}
function ze(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function We(e, t) {
  return $e({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const dc = We("border", ze), pc = We("borderTop", ze), fc = We("borderRight", ze), mc = We("borderBottom", ze), gc = We("borderLeft", ze), hc = We("borderColor"), yc = We("borderTopColor"), bc = We("borderRightColor"), vc = We("borderBottomColor"), xc = We("borderLeftColor"), Ec = We("outline", ze), Tc = We("outlineColor"), Fn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = cn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: Ct(t, o)
    });
    return He(e, e.borderRadius, n);
  }
  return null;
};
Fn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ut
} : {};
Fn.filterProps = ["borderRadius"];
Ln(dc, pc, fc, mc, gc, hc, yc, bc, vc, xc, Fn, Ec, Tc);
const Vn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = cn(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: Ct(t, o)
    });
    return He(e, e.gap, n);
  }
  return null;
};
Vn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ut
} : {};
Vn.filterProps = ["gap"];
const zn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = cn(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: Ct(t, o)
    });
    return He(e, e.columnGap, n);
  }
  return null;
};
zn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ut
} : {};
zn.filterProps = ["columnGap"];
const Wn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = cn(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: Ct(t, o)
    });
    return He(e, e.rowGap, n);
  }
  return null;
};
Wn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ut
} : {};
Wn.filterProps = ["rowGap"];
const Cc = $e({
  prop: "gridColumn"
}), Sc = $e({
  prop: "gridRow"
}), Oc = $e({
  prop: "gridAutoFlow"
}), Rc = $e({
  prop: "gridAutoColumns"
}), wc = $e({
  prop: "gridAutoRows"
}), $c = $e({
  prop: "gridTemplateColumns"
}), Pc = $e({
  prop: "gridTemplateRows"
}), Ic = $e({
  prop: "gridTemplateAreas"
}), kc = $e({
  prop: "gridArea"
});
Ln(Vn, zn, Wn, Cc, Sc, Oc, Rc, wc, $c, Pc, Ic, kc);
function _t(e, t) {
  return t === "grey" ? t : e;
}
const Nc = $e({
  prop: "color",
  themeKey: "palette",
  transform: _t
}), jc = $e({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: _t
}), Mc = $e({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: _t
});
Ln(Nc, jc, Mc);
function De(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ac = $e({
  prop: "width",
  transform: De
}), _r = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, s, a, c, l;
      const o = ((a = (s = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : s.values) == null ? void 0 : a[n]) || Mn[n];
      return o ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: De(n)
      };
    };
    return He(e, e.maxWidth, t);
  }
  return null;
};
_r.filterProps = ["maxWidth"];
const _c = $e({
  prop: "minWidth",
  transform: De
}), Dc = $e({
  prop: "height",
  transform: De
}), Bc = $e({
  prop: "maxHeight",
  transform: De
}), Lc = $e({
  prop: "minHeight",
  transform: De
});
$e({
  prop: "size",
  cssProperty: "width",
  transform: De
});
$e({
  prop: "size",
  cssProperty: "height",
  transform: De
});
const Fc = $e({
  prop: "boxSizing"
});
Ln(Ac, _r, _c, Dc, Bc, Lc, Fc);
const Vc = {
  // borders
  border: {
    themeKey: "borders",
    transform: ze
  },
  borderTop: {
    themeKey: "borders",
    transform: ze
  },
  borderRight: {
    themeKey: "borders",
    transform: ze
  },
  borderBottom: {
    themeKey: "borders",
    transform: ze
  },
  borderLeft: {
    themeKey: "borders",
    transform: ze
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
    transform: ze
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
    transform: _t
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: _t
  },
  backgroundColor: {
    themeKey: "palette",
    transform: _t
  },
  // spacing
  p: {
    style: Se
  },
  pt: {
    style: Se
  },
  pr: {
    style: Se
  },
  pb: {
    style: Se
  },
  pl: {
    style: Se
  },
  px: {
    style: Se
  },
  py: {
    style: Se
  },
  padding: {
    style: Se
  },
  paddingTop: {
    style: Se
  },
  paddingRight: {
    style: Se
  },
  paddingBottom: {
    style: Se
  },
  paddingLeft: {
    style: Se
  },
  paddingX: {
    style: Se
  },
  paddingY: {
    style: Se
  },
  paddingInline: {
    style: Se
  },
  paddingInlineStart: {
    style: Se
  },
  paddingInlineEnd: {
    style: Se
  },
  paddingBlock: {
    style: Se
  },
  paddingBlockStart: {
    style: Se
  },
  paddingBlockEnd: {
    style: Se
  },
  m: {
    style: Ce
  },
  mt: {
    style: Ce
  },
  mr: {
    style: Ce
  },
  mb: {
    style: Ce
  },
  ml: {
    style: Ce
  },
  mx: {
    style: Ce
  },
  my: {
    style: Ce
  },
  margin: {
    style: Ce
  },
  marginTop: {
    style: Ce
  },
  marginRight: {
    style: Ce
  },
  marginBottom: {
    style: Ce
  },
  marginLeft: {
    style: Ce
  },
  marginX: {
    style: Ce
  },
  marginY: {
    style: Ce
  },
  marginInline: {
    style: Ce
  },
  marginInlineStart: {
    style: Ce
  },
  marginInlineEnd: {
    style: Ce
  },
  marginBlock: {
    style: Ce
  },
  marginBlockStart: {
    style: Ce
  },
  marginBlockEnd: {
    style: Ce
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
    style: Wn
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
    transform: De
  },
  maxWidth: {
    style: _r
  },
  minWidth: {
    transform: De
  },
  height: {
    transform: De
  },
  maxHeight: {
    transform: De
  },
  minHeight: {
    transform: De
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
}, ln = Vc;
function zc(...e) {
  const t = e.reduce((o, i) => o.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function Wc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Uc() {
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
    const h = An(i, u) || {};
    return m ? m(a) : He(a, o, (b) => {
      let p = Sn(h, f, b);
      return b === p && typeof b == "string" && (p = Sn(h, f, `${n}${b === "default" ? "" : J(b)}`, b)), l === !1 ? p : {
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
    const a = i.unstable_sxConfig ?? ln;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const f = Ei(i.breakpoints), m = Object.keys(f);
      let h = f;
      return Object.keys(u).forEach((y) => {
        const b = Wc(u[y], i);
        if (b != null)
          if (typeof b == "object")
            if (a[y])
              h = tn(h, e(y, b, i, a));
            else {
              const p = He({
                theme: i
              }, b, (x) => ({
                [y]: x
              }));
              zc(p, b) ? h[y] = t({
                sx: b,
                theme: i,
                nested: !0
              }) : h = tn(h, p);
            }
          else
            h = tn(h, e(y, b, i, a));
      }), !s && i.modularCssLayers ? {
        "@layer sx": To(i, vr(m, h))
      } : To(i, vr(m, h));
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const Ci = Uc();
Ci.filterProps = ["sx"];
const Lt = Ci, Gc = (e) => {
  var o;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((o = e == null ? void 0 : e.theme) == null ? void 0 : o.unstable_sxConfig) ?? ln;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function Dr(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: o,
    otherProps: i
  } = Gc(n);
  let s;
  return Array.isArray(t) ? s = [o, ...t] : typeof t == "function" ? s = (...a) => {
    const c = t(...a);
    return Qe(c) ? {
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
function Yc(e) {
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
var Hc = {
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
function qc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Kc = !1, Xc = /[A-Z]|^ms/g, Jc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Si = function(t) {
  return t.charCodeAt(1) === 45;
}, Oo = function(t) {
  return t != null && typeof t != "boolean";
}, ar = /* @__PURE__ */ qc(function(e) {
  return Si(e) ? e : e.replace(Xc, "-$&").toLowerCase();
}), Ro = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Jc, function(o, i, s) {
          return Je = {
            name: i,
            styles: s,
            next: Je
          }, i;
        });
  }
  return Hc[t] !== 1 && !Si(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Qc = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function rn(e, t, n) {
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
        return Je = {
          name: i.name,
          styles: i.styles,
          next: Je
        }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Je = {
              name: a.name,
              styles: a.styles,
              next: Je
            }, a = a.next;
        var c = s.styles + ";";
        return c;
      }
      return Zc(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Je, u = n(e);
        return Je = l, rn(e, t, u);
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
function Zc(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      o += rn(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? o += s + "{" + t[c] + "}" : Oo(c) && (o += ar(s) + ":" + Ro(s, c) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Kc)
          throw new Error(Qc);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            Oo(a[l]) && (o += ar(s) + ":" + Ro(s, a[l]) + ";");
        else {
          var u = rn(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              o += ar(s) + ":" + u + ";";
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
var wo = /label:\s*([^\s;{]+)\s*(;|$)/g, Je;
function el(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  Je = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    o = !1, i += rn(n, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (i += rn(n, t, e[c]), o) {
      var l = s;
      i += l[c];
    }
  wo.lastIndex = 0;
  for (var u = "", f; (f = wo.exec(i)) !== null; )
    u += "-" + f[1];
  var m = Yc(i) + u;
  return {
    name: m,
    styles: i,
    next: Je
  };
}
/**
 * @mui/styled-engine v7.3.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Oi(e, t) {
  const n = Ma(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
function tl(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const $o = [];
function Et(e) {
  return $o[0] = e, el($o);
}
const nl = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function rl(e) {
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
  } = e, s = nl(t), a = Object.keys(s);
  function c(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - o / 100}${n})`;
  }
  function u(h, y) {
    const b = a.indexOf(y);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : y) - o / 100}${n})`;
  }
  function f(h) {
    return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : c(h);
  }
  function m(h) {
    const y = a.indexOf(h);
    return y === 0 ? c(a[1]) : y === a.length - 1 ? l(a[y]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
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
const ol = {
  borderRadius: 4
}, il = ol;
function Ri(e = 8, t = Bn({
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
function sl(e, t) {
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
function Un(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: i,
    shape: s = {},
    ...a
  } = e, c = rl(n), l = Ri(i);
  let u = Me({
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
      ...il,
      ...s
    }
  }, a);
  return u = ec(u), u.applyStyles = sl, u = t.reduce((f, m) => Me(f, m), u), u.unstable_sxConfig = {
    ...ln,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return Lt({
      sx: m,
      theme: this
    });
  }, u;
}
function al(e) {
  return Object.keys(e).length === 0;
}
function cl(e = null) {
  const t = T.useContext(Aa);
  return !t || al(t) ? e : t;
}
const ll = Un();
function Br(e = ll) {
  return cl(e);
}
const Po = (e) => e, ul = () => {
  let e = Po;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Po;
    }
  };
}, dl = ul(), wi = dl;
function pl(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: o = "MuiBox-root",
    generateClassName: i
  } = e, s = Oi("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(Lt);
  return /* @__PURE__ */ T.forwardRef(function(l, u) {
    const f = Br(n), {
      className: m,
      component: h = "div",
      ...y
    } = Dr(l);
    return /* @__PURE__ */ E.jsx(s, {
      as: h,
      ref: u,
      className: Q(m, i ? i(o) : o),
      theme: t && f[t] || f,
      ...y
    });
  });
}
const fl = {
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
function pe(e, t, n = "Mui") {
  const o = fl[t];
  return o ? `${n}-${o}` : `${wi.generate(e)}-${t}`;
}
function ge(e, t, n = "Mui") {
  const o = {};
  return t.forEach((i) => {
    o[i] = pe(e, i, n);
  }), o;
}
function $i(e, t = "") {
  return e.displayName || e.name || t;
}
function Io(e, t, n) {
  const o = $i(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function ml(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return $i(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Tt.ForwardRef:
          return Io(e, e.render, "ForwardRef");
        case Tt.Memo:
          return Io(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Pi(e) {
  const {
    variants: t,
    ...n
  } = e, o = {
    variants: t,
    style: Et(n),
    isProcessed: !0
  };
  return o.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = Et(i.style));
  }), o;
}
const gl = Un();
function cr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function vt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function hl(e) {
  return e ? (t, n) => n[e] : null;
}
function yl(e, t, n) {
  e.theme = xl(e.theme) ? n : e.theme[t] || e.theme;
}
function Cn(e, t, n) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o))
    return o.flatMap((i) => Cn(e, i, n));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let i;
    if (o.isProcessed)
      i = n ? vt(o.style, n) : o.style;
    else {
      const {
        variants: s,
        ...a
      } = o;
      i = n ? vt(Et(a), n) : a;
    }
    return Ii(e, o.variants, [i], n);
  }
  return o != null && o.isProcessed ? n ? vt(Et(o.style), n) : o.style : n ? vt(Et(o), n) : o;
}
function Ii(e, t, n = [], o = void 0) {
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
      }), n.push(o ? vt(Et(c.style(i)), o) : c.style(i))) : n.push(o ? vt(Et(c.style), o) : c.style);
    }
  return n;
}
function ki(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = gl,
    rootShouldForwardProp: o = cr,
    slotShouldForwardProp: i = cr
  } = e;
  function s(c) {
    yl(c, t, n);
  }
  return (c, l = {}) => {
    tl(c, (N) => N.filter((M) => M !== Lt));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = hl(Ni(f)),
      ...b
    } = l, p = u && u.startsWith("Mui") || f ? "components" : "custom", x = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), S = h || !1;
    let w = cr;
    f === "Root" || f === "root" ? w = o : f ? w = i : El(c) && (w = void 0);
    const O = Oi(c, {
      shouldForwardProp: w,
      label: vl(u, f),
      ...b
    }), v = (N) => {
      if (N.__emotion_real === N)
        return N;
      if (typeof N == "function")
        return function(A) {
          return Cn(A, N, A.theme.modularCssLayers ? p : void 0);
        };
      if (Qe(N)) {
        const M = Pi(N);
        return function(F) {
          return M.variants ? Cn(F, M, F.theme.modularCssLayers ? p : void 0) : F.theme.modularCssLayers ? vt(M.style, p) : M.style;
        };
      }
      return N;
    }, C = (...N) => {
      const M = [], A = N.map(v), F = [];
      if (M.push(s), u && y && F.push(function(I) {
        var G, V;
        const $ = (V = (G = I.theme.components) == null ? void 0 : G[u]) == null ? void 0 : V.styleOverrides;
        if (!$)
          return null;
        const j = {};
        for (const B in $)
          j[B] = Cn(I, $[B], I.theme.modularCssLayers ? "theme" : void 0);
        return y(I, j);
      }), u && !x && F.push(function(I) {
        var j, G;
        const R = I.theme, $ = (G = (j = R == null ? void 0 : R.components) == null ? void 0 : j[u]) == null ? void 0 : G.variants;
        return $ ? Ii(I, $, [], I.theme.modularCssLayers ? "theme" : void 0) : null;
      }), S || F.push(Lt), Array.isArray(A[0])) {
        const d = A.shift(), I = new Array(M.length).fill(""), R = new Array(F.length).fill("");
        let $;
        $ = [...I, ...d, ...R], $.raw = [...I, ...d.raw, ...R], M.unshift($);
      }
      const Y = [...M, ...A, ...F], W = O(...Y);
      return c.muiName && (W.muiName = c.muiName), process.env.NODE_ENV !== "production" && (W.displayName = bl(u, f, c)), W;
    };
    return O.withConfig && (C.withConfig = O.withConfig), C;
  };
}
function bl(e, t, n) {
  return e ? `${e}${J(t || "")}` : `Styled(${ml(n)})`;
}
function vl(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Ni(t || "Root")}`), n;
}
function xl(e) {
  for (const t in e)
    return !1;
  return !0;
}
function El(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ni(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Tl = ki(), Cl = Tl;
function on(e, t, n = !1) {
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
              o[s][u] = on(a[u], c[u], n);
            }
        }
      } else
        s === "className" && n && t.className ? o.className = Q(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : s === "style" && n && t.style ? o.style = {
          ...e == null ? void 0 : e.style,
          ...t == null ? void 0 : t.style
        } : o[s] === void 0 && (o[s] = e[s]);
    }
  return o;
}
function Sl(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : on(t.components[n].defaultProps, o);
}
function Ol({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let i = Br(n);
  return o && (i = i[o] || i), Sl({
    theme: i,
    name: t,
    props: e
  });
}
const Rl = typeof window < "u" ? T.useLayoutEffect : T.useEffect, Ft = Rl;
function wl(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Lr(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), wl(e, t, n);
}
function $l(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, i) => i < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function lt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return lt($l(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ct(9, e));
  let o = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (o = o.split(" "), i = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ct(10, i));
  } else
    o = o.split(",");
  return o = o.map((s) => parseFloat(s)), {
    type: n,
    values: o,
    colorSpace: i
  };
}
const Pl = (e) => {
  const t = lt(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, Jt = (e, t) => {
  try {
    return Pl(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Gn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function ji(e) {
  e = lt(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, i = t[2] / 100, s = o * Math.min(i, 1 - i), a = (u, f = (u + n / 30) % 12) => i - s * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), Gn({
    type: c,
    values: l
  });
}
function xr(e) {
  e = lt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? lt(ji(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ko(e, t) {
  const n = xr(e), o = xr(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function On(e, t) {
  return e = lt(e), t = Lr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Gn(e);
}
function gt(e, t, n) {
  try {
    return On(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Yn(e, t) {
  if (e = lt(e), t = Lr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Gn(e);
}
function fe(e, t, n) {
  try {
    return Yn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Hn(e, t) {
  if (e = lt(e), t = Lr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Gn(e);
}
function me(e, t, n) {
  try {
    return Hn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Er(e, t = 0.15) {
  return xr(e) > 0.5 ? Yn(e, t) : Hn(e, t);
}
function yn(e, t, n) {
  try {
    return Er(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
const Il = "exact-prop: ​";
function Mi(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Il]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const kl = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (r.node, r.bool);
const Ai = () => T.useContext(kl) ?? !1, Nl = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (r.node, r.object);
function jl(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  if (!t || !t.components || !t.components[n])
    return o;
  const i = t.components[n];
  return i.defaultProps ? on(i.defaultProps, o, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? on(i, o, t.components.mergeClassNameAndStyle) : o;
}
function Ml({
  props: e,
  name: t
}) {
  const n = T.useContext(Nl);
  return jl({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let No = 0;
function Al(e) {
  const [t, n] = T.useState(e), o = e || t;
  return T.useEffect(() => {
    t == null && (No += 1, n(`mui-${No}`));
  }, [t]), o;
}
const _l = {
  ...T
}, jo = _l.useId;
function _i(e) {
  if (jo !== void 0) {
    const t = jo();
    return e ?? t;
  }
  return Al(e);
}
const Mo = {
  theme: void 0
};
function Dl(e) {
  let t, n;
  return function(i) {
    let s = t;
    return (s === void 0 || i.theme !== n) && (Mo.theme = i.theme, s = Pi(e(Mo)), t = s, n = i.theme), s;
  };
}
function Bl(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const i = o[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...o.slice(1))})` : `, ${i}`;
  }
  return (o, ...i) => `var(--${e ? `${e}-` : ""}${o}${t(...i)})`;
}
const Ao = (e, t, n, o = []) => {
  let i = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(s)] = n : i && typeof i == "object" && (i[s] = n) : i && typeof i == "object" && (i[s] || (i[s] = o.includes(s) ? [] : {}), i = i[s]);
  });
}, Ll = (e, t, n) => {
  function o(i, s = [], a = []) {
    Object.entries(i).forEach(([c, l]) => {
      (!n || n && !n([...s, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? o(l, [...s, c], Array.isArray(l) ? [...a, c] : a) : t([...s, c], l, a));
    });
  }
  o(e);
}, Fl = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function lr(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, i = {}, s = {}, a = {};
  return Ll(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!o || !o(c, l))) {
        const f = `--${n ? `${n}-` : ""}${c.join("-")}`, m = Fl(c, l);
        Object.assign(i, {
          [f]: m
        }), Ao(s, c, `var(${f})`, u), Ao(a, c, `var(${f}, ${m})`, u);
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
function Vl(e, t = {}) {
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
    varsWithDefaults: h
  } = lr(u, t);
  let y = h;
  const b = {}, {
    [l]: p,
    ...x
  } = a;
  if (Object.entries(x || {}).forEach(([v, C]) => {
    const {
      vars: N,
      css: M,
      varsWithDefaults: A
    } = lr(C, t);
    y = Me(y, A), b[v] = {
      css: M,
      vars: N
    };
  }), p) {
    const {
      css: v,
      vars: C,
      varsWithDefaults: N
    } = lr(p, t);
    y = Me(y, N), b[l] = {
      css: v,
      vars: C
    };
  }
  function S(v, C) {
    var M, A;
    let N = i;
    if (i === "class" && (N = ".%s"), i === "data" && (N = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (N = `[${i}="%s"]`), v) {
      if (N === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${((A = (M = a[v]) == null ? void 0 : M.palette) == null ? void 0 : A.mode) || v})`]: {
            ":root": C
          }
        };
      if (N)
        return e.defaultColorScheme === v ? `:root, ${N.replace("%s", String(v))}` : N.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let v = {
        ...f
      };
      return Object.entries(b).forEach(([, {
        vars: C
      }]) => {
        v = Me(v, C);
      }), v;
    },
    generateStyleSheets: () => {
      var F, Y;
      const v = [], C = e.defaultColorScheme || "light";
      function N(W, d) {
        Object.keys(d).length && v.push(typeof W == "string" ? {
          [W]: {
            ...d
          }
        } : W);
      }
      N(n(void 0, {
        ...m
      }), m);
      const {
        [C]: M,
        ...A
      } = b;
      if (M) {
        const {
          css: W
        } = M, d = (Y = (F = a[C]) == null ? void 0 : F.palette) == null ? void 0 : Y.mode, I = !o && d ? {
          colorScheme: d,
          ...W
        } : {
          ...W
        };
        N(n(C, {
          ...I
        }), I);
      }
      return Object.entries(A).forEach(([W, {
        css: d
      }]) => {
        var $, j;
        const I = (j = ($ = a[W]) == null ? void 0 : $.palette) == null ? void 0 : j.mode, R = !o && I ? {
          colorScheme: I,
          ...d
        } : {
          ...d
        };
        N(n(W, {
          ...R
        }), R);
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
function zl(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function Di(e, t) {
  var n, o, i;
  return /* @__PURE__ */ T.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (o = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : o.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
const Wl = Un(), Ul = Cl("div", {
  name: "MuiStack",
  slot: "Root"
});
function Gl(e) {
  return Ol({
    props: e,
    name: "MuiStack",
    defaultTheme: Wl
  });
}
function Yl(e, t) {
  const n = T.Children.toArray(e).filter(Boolean);
  return n.reduce((o, i, s) => (o.push(i), s < n.length - 1 && o.push(/* @__PURE__ */ T.cloneElement(t, {
    key: `separator-${s}`
  })), o), []);
}
const Hl = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], ql = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...He({
      theme: t
    }, sr({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (o) => ({
      flexDirection: o
    }))
  };
  if (e.spacing) {
    const o = Bn(t), i = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), s = sr({
      values: e.direction,
      base: i
    }), a = sr({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((l, u, f) => {
      if (!s[l]) {
        const h = u > 0 ? s[f[u - 1]] : "column";
        s[l] = h;
      }
    }), n = Me(n, He({
      theme: t
    }, a, (l, u) => e.useFlexGap ? {
      gap: Ct(o, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Hl(u ? s[u] : e.direction)}`]: Ct(o, l)
      }
    }));
  }
  return n = nc(t.breakpoints, n), n;
};
function Kl(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Ul,
    useThemeProps: n = Gl,
    componentName: o = "MuiStack"
  } = e, i = () => ve({
    root: ["root"]
  }, (l) => pe(o, l), {}), s = t(ql), a = /* @__PURE__ */ T.forwardRef(function(l, u) {
    const f = n(l), m = Dr(f), {
      component: h = "div",
      direction: y = "column",
      spacing: b = 0,
      divider: p,
      children: x,
      className: S,
      useFlexGap: w = !1,
      ...O
    } = m, v = {
      direction: y,
      spacing: b,
      useFlexGap: w
    }, C = i();
    return /* @__PURE__ */ E.jsx(s, {
      as: h,
      ownerState: v,
      ref: u,
      className: Q(C.root, S),
      ...O,
      children: p ? Yl(x, p) : x
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
const Xl = {
  black: "#000",
  white: "#fff"
}, sn = Xl, Jl = {
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
}, Ql = Jl, Zl = {
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
}, wt = Zl, eu = {
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
}, $t = eu, tu = {
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
}, qt = tu, nu = {
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
}, Pt = nu, ru = {
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
}, It = ru, ou = {
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
}, kt = ou;
function Bi() {
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
      paper: sn.white,
      default: sn.white
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
const Li = Bi();
function Fi() {
  return {
    text: {
      primary: sn.white,
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
      active: sn.white,
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
const Tr = Fi();
function _o(e, t, n, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Hn(e.main, i) : t === "dark" && (e.dark = Yn(e.main, s)));
}
function Do(e, t, n, o, i) {
  const s = i.light || i, a = i.dark || i * 1.5;
  t[n] || (t.hasOwnProperty(o) ? t[n] = t[o] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function iu(e = "light") {
  return e === "dark" ? {
    main: Pt[200],
    light: Pt[50],
    dark: Pt[400]
  } : {
    main: Pt[700],
    light: Pt[400],
    dark: Pt[800]
  };
}
function su(e = "light") {
  return e === "dark" ? {
    main: wt[200],
    light: wt[50],
    dark: wt[400]
  } : {
    main: wt[500],
    light: wt[300],
    dark: wt[700]
  };
}
function au(e = "light") {
  return e === "dark" ? {
    main: $t[500],
    light: $t[300],
    dark: $t[700]
  } : {
    main: $t[700],
    light: $t[400],
    dark: $t[800]
  };
}
function cu(e = "light") {
  return e === "dark" ? {
    main: It[400],
    light: It[300],
    dark: It[700]
  } : {
    main: It[700],
    light: It[500],
    dark: It[900]
  };
}
function lu(e = "light") {
  return e === "dark" ? {
    main: kt[400],
    light: kt[300],
    dark: kt[700]
  } : {
    main: kt[800],
    light: kt[500],
    dark: kt[900]
  };
}
function uu(e = "light") {
  return e === "dark" ? {
    main: qt[400],
    light: qt[300],
    dark: qt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: qt[500],
    dark: qt[900]
  };
}
function du(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Fr(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    colorSpace: i,
    ...s
  } = e, a = e.primary || iu(t), c = e.secondary || su(t), l = e.error || au(t), u = e.info || cu(t), f = e.success || lu(t), m = e.warning || uu(t);
  function h(x) {
    if (i)
      return du(x);
    const S = ko(x, Tr.text.primary) >= n ? Tr.text.primary : Li.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = ko(x, S);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${S} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const y = ({
    color: x,
    name: S,
    mainShade: w = 500,
    lightShade: O = 300,
    darkShade: v = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[w] && (x.main = x[w]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : ct(11, S ? ` (${S})` : "", w));
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
} });` : ct(12, S ? ` (${S})` : "", JSON.stringify(x.main)));
    return i ? (Do(i, x, "light", O, o), Do(i, x, "dark", v, o)) : (_o(x, "light", O, o), _o(x, "dark", v, o)), x.contrastText || (x.contrastText = h(x.main)), x;
  };
  let b;
  return t === "light" ? b = Bi() : t === "dark" && (b = Fi()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Me({
    // A collection of common colors.
    common: {
      ...sn
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Ql,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...b
  }, s);
}
function pu(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [i, s] = o;
    typeof s == "object" && (t[i] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function fu(e, t) {
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
function mu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Bo = {
  textTransform: "uppercase"
}, Lo = '"Roboto", "Helvetica", "Arial", sans-serif';
function gu(e, t) {
  const {
    fontFamily: n = Lo,
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
  const h = o / 14, y = f || ((x) => `${x / l * h}rem`), b = (x, S, w, O, v) => ({
    fontFamily: n,
    fontWeight: x,
    fontSize: y(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Lo ? {
      letterSpacing: `${mu(O / S)}em`
    } : {},
    ...v,
    ...u
  }), p = {
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
    button: b(a, 14, 1.75, 0.4, Bo),
    caption: b(s, 12, 1.66, 0.4),
    overline: b(s, 12, 2.66, 1, Bo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Me({
    htmlFontSize: l,
    pxToRem: y,
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
const hu = 0.2, yu = 0.14, bu = 0.12;
function Te(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${hu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${yu})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${bu})`].join(",");
}
const vu = ["none", Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], xu = vu, Eu = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Tu = {
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
function Fo(e) {
  return `${Math.round(e)}ms`;
}
function Cu(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Su(e) {
  const t = {
    ...Eu,
    ...e.easing
  }, n = {
    ...Tu,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Cu,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", m = (h) => !Number.isNaN(parseFloat(h));
        !f(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !m(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((f) => `${f} ${typeof a == "string" ? a : Fo(a)} ${c} ${typeof l == "string" ? l : Fo(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Ou = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Ru = Ou;
function wu(e) {
  return Qe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Vi(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const i = Object.entries(o);
    for (let s = 0; s < i.length; s++) {
      const [a, c] = i[s];
      !wu(c) || a.startsWith("unstable_") ? delete o[a] : Qe(c) && (o[a] = {
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
function Vo(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const $u = (e) => {
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
function Pu(e) {
  Object.assign(e, {
    alpha(t, n) {
      const o = this || e;
      return o.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : o.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : On(t, $u(n));
    },
    lighten(t, n) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #fff ${Vo(n)})` : Hn(t, n);
    },
    darken(t, n) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #000 ${Vo(n)})` : Yn(t, n);
    }
  });
}
function Cr(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ct(20));
  const m = Fr({
    ...s,
    colorSpace: u
  }), h = Un(e);
  let y = Me(h, {
    mixins: fu(h.breakpoints, o),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xu.slice(),
    typography: gu(m, c),
    transitions: Su(a),
    zIndex: {
      ...Ru
    }
  });
  if (y = Me(y, f), y = t.reduce((b, p) => Me(b, p), y), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (x, S) => {
      let w;
      for (w in x) {
        const O = x[w];
        if (b.includes(w) && Object.keys(O).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = pe("", w);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: O
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[w] = {};
        }
      }
    };
    Object.keys(y.components).forEach((x) => {
      const S = y.components[x].styleOverrides;
      S && x.startsWith("Mui") && p(S, x);
    });
  }
  return y.unstable_sxConfig = {
    ...ln,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, y.unstable_sx = function(p) {
    return Lt({
      sx: p,
      theme: this
    });
  }, y.toRuntimeSource = Vi, Pu(y), y;
}
function Sr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Iu = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Sr(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function zi(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Wi(e) {
  return e === "dark" ? Iu : [];
}
function ku(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: o,
    colorSpace: i,
    ...s
  } = e, a = Fr({
    ...t,
    colorSpace: i
  });
  return {
    palette: a,
    opacity: {
      ...zi(a.mode),
      ...n
    },
    overlays: o || Wi(a.mode),
    ...s
  };
}
function Nu(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const ju = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Mu = ju, Au = (e) => (t, n) => {
  const o = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let s = i;
  if (i === "class" && (s = ".%s"), i === "data" && (s = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Mu(e.cssVarPrefix).forEach((c) => {
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
function _u(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function k(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Qt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ji(e);
}
function tt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Jt(Qt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Du(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Xe = (e) => {
  try {
    return e();
  } catch {
  }
}, Bu = (e = "mui") => Bl(e);
function ur(e, t, n, o, i) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const s = i === "dark" ? "dark" : "light";
  if (!o) {
    t[i] = ku({
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
  } = Cr({
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
      ...zi(s),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || Wi(s)
  }, c;
}
function Lu(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: i = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: c = Nu,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...f
  } = e, m = Object.keys(n)[0], h = o || (n.light && m !== "light" ? "light" : m), y = Bu(s), {
    [h]: b,
    light: p,
    dark: x,
    ...S
  } = n, w = {
    ...S
  };
  let O = b;
  if ((h === "dark" && !("dark" in n) || h === "light" && !("light" in n)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : ct(21, h));
  let v;
  a && (v = "oklch");
  const C = ur(v, w, O, f, h);
  p && !w.light && ur(v, w, p, void 0, "light"), x && !w.dark && ur(v, w, x, void 0, "dark");
  let N = {
    defaultColorScheme: h,
    ...C,
    cssVarPrefix: s,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: y,
    colorSchemes: w,
    font: {
      ...pu(C.typography),
      ...C.font
    },
    spacing: Du(f.spacing)
  };
  Object.keys(N.colorSchemes).forEach((W) => {
    const d = N.colorSchemes[W].palette, I = ($) => {
      const j = $.split("-"), G = j[1], V = j[2];
      return y($, d[G][V]);
    };
    d.mode === "light" && (k(d.common, "background", "#fff"), k(d.common, "onBackground", "#000")), d.mode === "dark" && (k(d.common, "background", "#000"), k(d.common, "onBackground", "#fff"));
    function R($, j, G) {
      if (v) {
        let V;
        return $ === gt && (V = `transparent ${((1 - G) * 100).toFixed(0)}%`), $ === fe && (V = `#000 ${(G * 100).toFixed(0)}%`), $ === me && (V = `#fff ${(G * 100).toFixed(0)}%`), `color-mix(in ${v}, ${j}, ${V})`;
      }
      return $(j, G);
    }
    if (_u(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      k(d.Alert, "errorColor", R(fe, d.error.light, 0.6)), k(d.Alert, "infoColor", R(fe, d.info.light, 0.6)), k(d.Alert, "successColor", R(fe, d.success.light, 0.6)), k(d.Alert, "warningColor", R(fe, d.warning.light, 0.6)), k(d.Alert, "errorFilledBg", I("palette-error-main")), k(d.Alert, "infoFilledBg", I("palette-info-main")), k(d.Alert, "successFilledBg", I("palette-success-main")), k(d.Alert, "warningFilledBg", I("palette-warning-main")), k(d.Alert, "errorFilledColor", Xe(() => d.getContrastText(d.error.main))), k(d.Alert, "infoFilledColor", Xe(() => d.getContrastText(d.info.main))), k(d.Alert, "successFilledColor", Xe(() => d.getContrastText(d.success.main))), k(d.Alert, "warningFilledColor", Xe(() => d.getContrastText(d.warning.main))), k(d.Alert, "errorStandardBg", R(me, d.error.light, 0.9)), k(d.Alert, "infoStandardBg", R(me, d.info.light, 0.9)), k(d.Alert, "successStandardBg", R(me, d.success.light, 0.9)), k(d.Alert, "warningStandardBg", R(me, d.warning.light, 0.9)), k(d.Alert, "errorIconColor", I("palette-error-main")), k(d.Alert, "infoIconColor", I("palette-info-main")), k(d.Alert, "successIconColor", I("palette-success-main")), k(d.Alert, "warningIconColor", I("palette-warning-main")), k(d.AppBar, "defaultBg", I("palette-grey-100")), k(d.Avatar, "defaultBg", I("palette-grey-400")), k(d.Button, "inheritContainedBg", I("palette-grey-300")), k(d.Button, "inheritContainedHoverBg", I("palette-grey-A100")), k(d.Chip, "defaultBorder", I("palette-grey-400")), k(d.Chip, "defaultAvatarColor", I("palette-grey-700")), k(d.Chip, "defaultIconColor", I("palette-grey-700")), k(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), k(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), k(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), k(d.LinearProgress, "primaryBg", R(me, d.primary.main, 0.62)), k(d.LinearProgress, "secondaryBg", R(me, d.secondary.main, 0.62)), k(d.LinearProgress, "errorBg", R(me, d.error.main, 0.62)), k(d.LinearProgress, "infoBg", R(me, d.info.main, 0.62)), k(d.LinearProgress, "successBg", R(me, d.success.main, 0.62)), k(d.LinearProgress, "warningBg", R(me, d.warning.main, 0.62)), k(d.Skeleton, "bg", v ? R(gt, d.text.primary, 0.11) : `rgba(${I("palette-text-primaryChannel")} / 0.11)`), k(d.Slider, "primaryTrack", R(me, d.primary.main, 0.62)), k(d.Slider, "secondaryTrack", R(me, d.secondary.main, 0.62)), k(d.Slider, "errorTrack", R(me, d.error.main, 0.62)), k(d.Slider, "infoTrack", R(me, d.info.main, 0.62)), k(d.Slider, "successTrack", R(me, d.success.main, 0.62)), k(d.Slider, "warningTrack", R(me, d.warning.main, 0.62));
      const $ = v ? R(fe, d.background.default, 0.6825) : yn(d.background.default, 0.8);
      k(d.SnackbarContent, "bg", $), k(d.SnackbarContent, "color", Xe(() => v ? Tr.text.primary : d.getContrastText($))), k(d.SpeedDialAction, "fabHoverBg", yn(d.background.paper, 0.15)), k(d.StepConnector, "border", I("palette-grey-400")), k(d.StepContent, "border", I("palette-grey-400")), k(d.Switch, "defaultColor", I("palette-common-white")), k(d.Switch, "defaultDisabledColor", I("palette-grey-100")), k(d.Switch, "primaryDisabledColor", R(me, d.primary.main, 0.62)), k(d.Switch, "secondaryDisabledColor", R(me, d.secondary.main, 0.62)), k(d.Switch, "errorDisabledColor", R(me, d.error.main, 0.62)), k(d.Switch, "infoDisabledColor", R(me, d.info.main, 0.62)), k(d.Switch, "successDisabledColor", R(me, d.success.main, 0.62)), k(d.Switch, "warningDisabledColor", R(me, d.warning.main, 0.62)), k(d.TableCell, "border", R(me, R(gt, d.divider, 1), 0.88)), k(d.Tooltip, "bg", R(gt, d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      k(d.Alert, "errorColor", R(me, d.error.light, 0.6)), k(d.Alert, "infoColor", R(me, d.info.light, 0.6)), k(d.Alert, "successColor", R(me, d.success.light, 0.6)), k(d.Alert, "warningColor", R(me, d.warning.light, 0.6)), k(d.Alert, "errorFilledBg", I("palette-error-dark")), k(d.Alert, "infoFilledBg", I("palette-info-dark")), k(d.Alert, "successFilledBg", I("palette-success-dark")), k(d.Alert, "warningFilledBg", I("palette-warning-dark")), k(d.Alert, "errorFilledColor", Xe(() => d.getContrastText(d.error.dark))), k(d.Alert, "infoFilledColor", Xe(() => d.getContrastText(d.info.dark))), k(d.Alert, "successFilledColor", Xe(() => d.getContrastText(d.success.dark))), k(d.Alert, "warningFilledColor", Xe(() => d.getContrastText(d.warning.dark))), k(d.Alert, "errorStandardBg", R(fe, d.error.light, 0.9)), k(d.Alert, "infoStandardBg", R(fe, d.info.light, 0.9)), k(d.Alert, "successStandardBg", R(fe, d.success.light, 0.9)), k(d.Alert, "warningStandardBg", R(fe, d.warning.light, 0.9)), k(d.Alert, "errorIconColor", I("palette-error-main")), k(d.Alert, "infoIconColor", I("palette-info-main")), k(d.Alert, "successIconColor", I("palette-success-main")), k(d.Alert, "warningIconColor", I("palette-warning-main")), k(d.AppBar, "defaultBg", I("palette-grey-900")), k(d.AppBar, "darkBg", I("palette-background-paper")), k(d.AppBar, "darkColor", I("palette-text-primary")), k(d.Avatar, "defaultBg", I("palette-grey-600")), k(d.Button, "inheritContainedBg", I("palette-grey-800")), k(d.Button, "inheritContainedHoverBg", I("palette-grey-700")), k(d.Chip, "defaultBorder", I("palette-grey-700")), k(d.Chip, "defaultAvatarColor", I("palette-grey-300")), k(d.Chip, "defaultIconColor", I("palette-grey-300")), k(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), k(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), k(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), k(d.LinearProgress, "primaryBg", R(fe, d.primary.main, 0.5)), k(d.LinearProgress, "secondaryBg", R(fe, d.secondary.main, 0.5)), k(d.LinearProgress, "errorBg", R(fe, d.error.main, 0.5)), k(d.LinearProgress, "infoBg", R(fe, d.info.main, 0.5)), k(d.LinearProgress, "successBg", R(fe, d.success.main, 0.5)), k(d.LinearProgress, "warningBg", R(fe, d.warning.main, 0.5)), k(d.Skeleton, "bg", v ? R(gt, d.text.primary, 0.13) : `rgba(${I("palette-text-primaryChannel")} / 0.13)`), k(d.Slider, "primaryTrack", R(fe, d.primary.main, 0.5)), k(d.Slider, "secondaryTrack", R(fe, d.secondary.main, 0.5)), k(d.Slider, "errorTrack", R(fe, d.error.main, 0.5)), k(d.Slider, "infoTrack", R(fe, d.info.main, 0.5)), k(d.Slider, "successTrack", R(fe, d.success.main, 0.5)), k(d.Slider, "warningTrack", R(fe, d.warning.main, 0.5));
      const $ = v ? R(me, d.background.default, 0.985) : yn(d.background.default, 0.98);
      k(d.SnackbarContent, "bg", $), k(d.SnackbarContent, "color", Xe(() => v ? Li.text.primary : d.getContrastText($))), k(d.SpeedDialAction, "fabHoverBg", yn(d.background.paper, 0.15)), k(d.StepConnector, "border", I("palette-grey-600")), k(d.StepContent, "border", I("palette-grey-600")), k(d.Switch, "defaultColor", I("palette-grey-300")), k(d.Switch, "defaultDisabledColor", I("palette-grey-600")), k(d.Switch, "primaryDisabledColor", R(fe, d.primary.main, 0.55)), k(d.Switch, "secondaryDisabledColor", R(fe, d.secondary.main, 0.55)), k(d.Switch, "errorDisabledColor", R(fe, d.error.main, 0.55)), k(d.Switch, "infoDisabledColor", R(fe, d.info.main, 0.55)), k(d.Switch, "successDisabledColor", R(fe, d.success.main, 0.55)), k(d.Switch, "warningDisabledColor", R(fe, d.warning.main, 0.55)), k(d.TableCell, "border", R(fe, R(gt, d.divider, 1), 0.68)), k(d.Tooltip, "bg", R(gt, d.grey[700], 0.92));
    }
    tt(d.background, "default"), tt(d.background, "paper"), tt(d.common, "background"), tt(d.common, "onBackground"), tt(d, "divider"), Object.keys(d).forEach(($) => {
      const j = d[$];
      $ !== "tonalOffset" && j && typeof j == "object" && (j.main && k(d[$], "mainChannel", Jt(Qt(j.main))), j.light && k(d[$], "lightChannel", Jt(Qt(j.light))), j.dark && k(d[$], "darkChannel", Jt(Qt(j.dark))), j.contrastText && k(d[$], "contrastTextChannel", Jt(Qt(j.contrastText))), $ === "text" && (tt(d[$], "primary"), tt(d[$], "secondary")), $ === "action" && (j.active && tt(d[$], "active"), j.selected && tt(d[$], "selected")));
    });
  }), N = t.reduce((W, d) => Me(W, d), N);
  const M = {
    prefix: s,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: c,
    getSelector: Au(N),
    enableContrastVars: a
  }, {
    vars: A,
    generateThemeVars: F,
    generateStyleSheets: Y
  } = Vl(N, M);
  return N.vars = A, Object.entries(N.colorSchemes[N.defaultColorScheme]).forEach(([W, d]) => {
    N[W] = d;
  }), N.generateThemeVars = F, N.generateStyleSheets = Y, N.generateSpacing = function() {
    return Ri(f.spacing, Bn(this));
  }, N.getColorSchemeSelector = zl(l), N.spacing = N.generateSpacing(), N.shouldSkipGeneratingVar = c, N.unstable_sxConfig = {
    ...ln,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, N.unstable_sx = function(d) {
    return Lt({
      sx: d,
      theme: this
    });
  }, N.toRuntimeSource = Vi, N;
}
function zo(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Fr({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ui(e = {}, ...t) {
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
      return Cr(e, ...t);
    let f = n;
    "palette" in e || u[c] && (u[c] !== !0 ? f = u[c].palette : c === "dark" && (f = {
      mode: "dark"
    }));
    const m = Cr({
      ...e,
      palette: f
    }, ...t);
    return m.defaultColorScheme = c, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, zo(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, zo(m, "light", u.light)), m;
  }
  return !n && !("light" in u) && c === "light" && (u.light = !0), Lu({
    ...a,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof o != "boolean" && o
  }, ...t);
}
const Fu = Ui(), Gi = Fu, Vr = "$$material";
function un() {
  const e = Br(Gi);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[Vr] || e;
}
function Vu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const zu = (e) => Vu(e) && e !== "classes", Wt = zu, Wu = ki({
  themeId: Vr,
  defaultTheme: Gi,
  rootShouldForwardProp: Wt
}), X = Wu;
function Uu() {
  return Dr;
}
process.env.NODE_ENV !== "production" && (r.node, r.object.isRequired);
function he(e) {
  return Ml(e);
}
const Yi = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (Yi.displayName = "ListContext");
const Ye = Yi;
function Gu(e) {
  return pe("MuiList", e);
}
ge("MuiList", ["root", "padding", "dense", "subheader"]);
const Yu = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: i
  } = e;
  return ve({
    root: ["root", !n && "padding", o && "dense", i && "subheader"]
  }, Gu, t);
}, Hu = X("ul", {
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
}), Hi = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
  } = o, m = T.useMemo(() => ({
    dense: c
  }), [c]), h = {
    ...o,
    component: a,
    dense: c,
    disablePadding: l
  }, y = Yu(h);
  return /* @__PURE__ */ E.jsx(Ye.Provider, {
    value: m,
    children: /* @__PURE__ */ E.jsxs(Hu, {
      as: a,
      className: Q(y.root, s),
      ref: n,
      ownerState: h,
      ...f,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (Hi.propTypes = {
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
const Or = Hi;
function et(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function qu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ku(e, t, n, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof s == "function" && !qu(s) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const zr = et(r.elementType, Ku);
function Rn(e) {
  return typeof e == "string";
}
const Xu = Dl, Oe = Xu;
function _e(...e) {
  const t = T.useRef(void 0), n = T.useCallback((o) => {
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
  return T.useMemo(() => e.every((o) => o == null) ? null : (o) => {
    t.current && (t.current(), t.current = void 0), o != null && (t.current = n(o));
  }, e);
}
function Ju(e) {
  return pe("MuiListItem", e);
}
ge("MuiListItem", ["root", "container", "dense", "alignItemsFlexStart", "divider", "gutters", "padding", "secondaryAction"]);
const Qu = r.oneOfType([r.func, r.object]), qi = Qu;
function Wo(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Dt(e) {
  const t = T.useRef(e);
  return Ft(() => {
    t.current = e;
  }), T.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
const Uo = {};
function Ki(e, t) {
  const n = T.useRef(Uo);
  return n.current === Uo && (n.current = e(t)), n;
}
class wn {
  constructor() {
    Gt(this, "mountEffect", () => {
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
    return new wn();
  }
  static use() {
    const t = Ki(wn.create).current, [n, o] = T.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, T.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = ed(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Zu() {
  return wn.use();
}
function ed() {
  let e, t;
  const n = new Promise((o, i) => {
    e = o, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Rr() {
  return Rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, Rr.apply(null, arguments);
}
function Xi(e, t) {
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
function wr(e, t) {
  return wr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, wr(e, t);
}
function Ji(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, wr(e, t);
}
const Go = {
  disabled: !1
};
var td = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.shape({
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
const $n = Ge.createContext(null);
var nd = function(t) {
  return t.scrollTop;
}, Zt = "unmounted", yt = "exited", bt = "entering", jt = "entered", $r = "exiting", ot = /* @__PURE__ */ function(e) {
  Ji(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = i, c = a && !a.isMounting ? o.enter : o.appear, l;
    return s.appearStatus = null, o.in ? c ? (l = yt, s.appearStatus = bt) : l = jt : o.unmountOnExit || o.mountOnEnter ? l = Zt : l = yt, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Zt ? {
      status: yt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== bt && a !== jt && (s = bt) : (a === bt || a === jt) && (s = $r);
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
      if (this.cancelNextCallback(), s === bt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : gn.findDOMNode(this);
          a && nd(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === yt && this.setState({
        status: Zt
      });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, c = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [c] : [gn.findDOMNode(this), c], u = l[0], f = l[1], m = this.getTimeouts(), h = c ? m.appear : m.enter;
    if (!i && !a || Go.disabled) {
      this.safeSetState({
        status: jt
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: bt
    }, function() {
      s.props.onEntering(u, f), s.onTransitionEnd(h, function() {
        s.safeSetState({
          status: jt
        }, function() {
          s.props.onEntered(u, f);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : gn.findDOMNode(this);
    if (!s || Go.disabled) {
      this.safeSetState({
        status: yt
      }, function() {
        i.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: $r
    }, function() {
      i.props.onExiting(c), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: yt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : gn.findDOMNode(this), c = i == null && !this.props.addEndListener;
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
    if (i === Zt)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var c = Xi(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ge.createElement($n.Provider, {
        value: null
      }, typeof a == "function" ? a(i, c) : Ge.cloneElement(Ge.Children.only(a), c))
    );
  }, t;
}(Ge.Component);
ot.contextType = $n;
ot.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = td;
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
function Nt() {
}
ot.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Nt,
  onEntering: Nt,
  onEntered: Nt,
  onExit: Nt,
  onExiting: Nt,
  onExited: Nt
};
ot.UNMOUNTED = Zt;
ot.EXITED = yt;
ot.ENTERING = bt;
ot.ENTERED = jt;
ot.EXITING = $r;
const Wr = ot;
function rd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ur(e, t) {
  var n = function(s) {
    return t && En(s) ? t(s) : s;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && wa.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    o[i.key] = n(i);
  }), o;
}
function od(e, t) {
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
function xt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function id(e, t) {
  return Ur(e.children, function(n) {
    return Tn(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: xt(n, "appear", e),
      enter: xt(n, "enter", e),
      exit: xt(n, "exit", e)
    });
  });
}
function sd(e, t, n) {
  var o = Ur(e.children), i = od(t, o);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (En(a)) {
      var c = s in t, l = s in o, u = t[s], f = En(u) && !u.props.in;
      l && (!c || f) ? i[s] = Tn(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: xt(a, "exit", e),
        enter: xt(a, "enter", e)
      }) : !l && c && !f ? i[s] = Tn(a, {
        in: !1
      }) : l && c && En(u) && (i[s] = Tn(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: xt(a, "exit", e),
        enter: xt(a, "enter", e)
      }));
    }
  }), i;
}
var ad = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, cd = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Gr = /* @__PURE__ */ function(e) {
  Ji(t, e);
  function t(o, i) {
    var s;
    s = e.call(this, o, i) || this;
    var a = s.handleExited.bind(rd(s));
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
      children: l ? id(i, c) : sd(i, a, c),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = Ur(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(c) {
      var l = Rr({}, c.children);
      return delete l[i.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, c = Xi(i, ["component", "childFactory"]), l = this.state.contextValue, u = ad(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, s === null ? /* @__PURE__ */ Ge.createElement($n.Provider, {
      value: l
    }, u) : /* @__PURE__ */ Ge.createElement($n.Provider, {
      value: l
    }, /* @__PURE__ */ Ge.createElement(s, c, u));
  }, t;
}(Ge.Component);
Gr.propTypes = process.env.NODE_ENV !== "production" ? {
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
Gr.defaultProps = cd;
const ld = Gr, ud = [];
function dd(e) {
  T.useEffect(e, ud);
}
class Yr {
  constructor() {
    Gt(this, "currentId", null);
    Gt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Gt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Yr();
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
function Qi() {
  const e = Ki(Yr.create).current;
  return dd(e.disposeEffect), e;
}
function Zi(e) {
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
  } = e, [f, m] = T.useState(!1), h = Q(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), y = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, b = Q(n.child, f && n.childLeaving, o && n.childPulsate);
  return !c && !f && m(!0), T.useEffect(() => {
    if (!c && l != null) {
      const p = setTimeout(l, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ E.jsx("span", {
    className: h,
    style: y,
    children: /* @__PURE__ */ E.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Zi.propTypes = {
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
const pd = ge("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ve = pd, Pr = 550, fd = 80, md = an`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, gd = an`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, hd = an`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, yd = X("span", {
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
}), bd = X(Zi, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ve.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${md};
    animation-duration: ${Pr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ve.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ve.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ve.childLeaving} {
    opacity: 0;
    animation-name: ${gd};
    animation-duration: ${Pr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ve.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${hd};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, es = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a,
    ...c
  } = o, [l, u] = T.useState([]), f = T.useRef(0), m = T.useRef(null);
  T.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const h = T.useRef(!1), y = Qi(), b = T.useRef(null), p = T.useRef(null), x = T.useCallback((v) => {
    const {
      pulsate: C,
      rippleX: N,
      rippleY: M,
      rippleSize: A,
      cb: F
    } = v;
    u((Y) => [...Y, /* @__PURE__ */ E.jsx(bd, {
      classes: {
        ripple: Q(s.ripple, Ve.ripple),
        rippleVisible: Q(s.rippleVisible, Ve.rippleVisible),
        ripplePulsate: Q(s.ripplePulsate, Ve.ripplePulsate),
        child: Q(s.child, Ve.child),
        childLeaving: Q(s.childLeaving, Ve.childLeaving),
        childPulsate: Q(s.childPulsate, Ve.childPulsate)
      },
      timeout: Pr,
      pulsate: C,
      rippleX: N,
      rippleY: M,
      rippleSize: A
    }, f.current)]), f.current += 1, m.current = F;
  }, [s]), S = T.useCallback((v = {}, C = {}, N = () => {
  }) => {
    const {
      pulsate: M = !1,
      center: A = i || C.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = C;
    if ((v == null ? void 0 : v.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (h.current = !0);
    const Y = F ? null : p.current, W = Y ? Y.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let d, I, R;
    if (A || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      d = Math.round(W.width / 2), I = Math.round(W.height / 2);
    else {
      const {
        clientX: $,
        clientY: j
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      d = Math.round($ - W.left), I = Math.round(j - W.top);
    }
    if (A)
      R = Math.sqrt((2 * W.width ** 2 + W.height ** 2) / 3), R % 2 === 0 && (R += 1);
    else {
      const $ = Math.max(Math.abs((Y ? Y.clientWidth : 0) - d), d) * 2 + 2, j = Math.max(Math.abs((Y ? Y.clientHeight : 0) - I), I) * 2 + 2;
      R = Math.sqrt($ ** 2 + j ** 2);
    }
    v != null && v.touches ? b.current === null && (b.current = () => {
      x({
        pulsate: M,
        rippleX: d,
        rippleY: I,
        rippleSize: R,
        cb: N
      });
    }, y.start(fd, () => {
      b.current && (b.current(), b.current = null);
    })) : x({
      pulsate: M,
      rippleX: d,
      rippleY: I,
      rippleSize: R,
      cb: N
    });
  }, [i, x, y]), w = T.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), O = T.useCallback((v, C) => {
    if (y.clear(), (v == null ? void 0 : v.type) === "touchend" && b.current) {
      b.current(), b.current = null, y.start(0, () => {
        O(v, C);
      });
      return;
    }
    b.current = null, u((N) => N.length > 0 ? N.slice(1) : N), m.current = C;
  }, [y]);
  return T.useImperativeHandle(n, () => ({
    pulsate: w,
    start: S,
    stop: O
  }), [w, S, O]), /* @__PURE__ */ E.jsx(yd, {
    className: Q(Ve.root, s.root, a),
    ref: p,
    ...c,
    children: /* @__PURE__ */ E.jsx(ld, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (es.propTypes = {
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
const vd = es;
function xd(e) {
  return pe("MuiButtonBase", e);
}
const Ed = ge("MuiButtonBase", ["root", "disabled", "focusVisible"]), Td = Ed, Cd = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: i
  } = e, a = ve({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, xd, i);
  return n && o && (a.root += ` ${o}`), a;
}, Sd = X("button", {
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
  [`&.${Td.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ts = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    focusRipple: h = !1,
    focusVisibleClassName: y,
    LinkComponent: b = "a",
    onBlur: p,
    onClick: x,
    onContextMenu: S,
    onDragLeave: w,
    onFocus: O,
    onFocusVisible: v,
    onKeyDown: C,
    onKeyUp: N,
    onMouseDown: M,
    onMouseLeave: A,
    onMouseUp: F,
    onTouchEnd: Y,
    onTouchMove: W,
    onTouchStart: d,
    tabIndex: I = 0,
    TouchRippleProps: R,
    touchRippleRef: $,
    type: j,
    ...G
  } = o, V = T.useRef(null), B = Zu(), P = _e(B.ref, $), [L, q] = T.useState(!1);
  u && L && q(!1), T.useImperativeHandle(i, () => ({
    focusVisible: () => {
      q(!0), V.current.focus();
    }
  }), []);
  const H = B.shouldMount && !f && !u;
  T.useEffect(() => {
    L && h && !f && B.pulsate();
  }, [f, h, L, B]);
  const K = nt(B, "start", M, m), ie = nt(B, "stop", S, m), Z = nt(B, "stop", w, m), ee = nt(B, "stop", F, m), re = nt(B, "stop", (oe) => {
    L && oe.preventDefault(), A && A(oe);
  }, m), se = nt(B, "start", d, m), z = nt(B, "stop", Y, m), ne = nt(B, "stop", W, m), D = nt(B, "stop", (oe) => {
    Wo(oe.target) || q(!1), p && p(oe);
  }, !1), Ee = Dt((oe) => {
    V.current || (V.current = oe.currentTarget), Wo(oe.target) && (q(!0), v && v(oe)), O && O(oe);
  }), Ie = () => {
    const oe = V.current;
    return l && l !== "button" && !(oe.tagName === "A" && oe.href);
  }, ke = Dt((oe) => {
    h && !oe.repeat && L && oe.key === " " && B.stop(oe, () => {
      B.start(oe);
    }), oe.target === oe.currentTarget && Ie() && oe.key === " " && oe.preventDefault(), C && C(oe), oe.target === oe.currentTarget && Ie() && oe.key === "Enter" && !u && (oe.preventDefault(), x && x(oe));
  }), qe = Dt((oe) => {
    h && oe.key === " " && L && !oe.defaultPrevented && B.stop(oe, () => {
      B.pulsate(oe);
    }), N && N(oe), x && oe.target === oe.currentTarget && Ie() && oe.key === " " && !oe.defaultPrevented && x(oe);
  });
  let Ke = l;
  Ke === "button" && (G.href || G.to) && (Ke = b);
  const Ue = {};
  Ke === "button" ? (Ue.type = j === void 0 ? "button" : j, Ue.disabled = u) : (!G.href && !G.to && (Ue.role = "button"), u && (Ue["aria-disabled"] = u));
  const Le = _e(n, V), pt = {
    ...o,
    centerRipple: s,
    component: l,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: m,
    focusRipple: h,
    tabIndex: I,
    focusVisible: L
  }, Ne = Cd(pt);
  return /* @__PURE__ */ E.jsxs(Sd, {
    as: Ke,
    className: Q(Ne.root, c),
    ownerState: pt,
    onBlur: D,
    onClick: x,
    onContextMenu: ie,
    onFocus: Ee,
    onKeyDown: ke,
    onKeyUp: qe,
    onMouseDown: K,
    onMouseLeave: re,
    onMouseUp: ee,
    onDragLeave: Z,
    onTouchEnd: z,
    onTouchMove: ne,
    onTouchStart: se,
    ref: Le,
    tabIndex: u ? -1 : I,
    type: j,
    ...Ue,
    ...G,
    children: [a, H ? /* @__PURE__ */ E.jsx(vd, {
      ref: P,
      center: s,
      ...R
    }) : null]
  });
});
function nt(e, t, n, o = !1) {
  return Dt((i) => (n && n(i), o || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (ts.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: qi,
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
  component: zr,
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
const dn = ts;
function Od(e) {
  return pe("MuiListItemButton", e);
}
const Rd = ge("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), Mt = Rd, wd = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters];
}, $d = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: o,
    disabled: i,
    disableGutters: s,
    divider: a,
    selected: c
  } = e, u = ve({
    root: ["root", o && "dense", !s && "gutters", a && "divider", i && "disabled", t === "flex-start" && "alignItemsFlexStart", c && "selected"]
  }, Od, n);
  return {
    ...n,
    ...u
  };
}, Pd = X(dn, {
  shouldForwardProp: (e) => Wt(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: wd
})(Oe(({
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
  [`&.${Mt.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Mt.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Mt.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Mt.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Mt.disabled}`]: {
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
}))), ns = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    selected: h = !1,
    className: y,
    ...b
  } = o, p = T.useContext(Ye), x = T.useMemo(() => ({
    dense: l || p.dense || !1,
    alignItems: i,
    disableGutters: u
  }), [i, p.dense, l, u]), S = T.useRef(null);
  Ft(() => {
    s && (S.current ? S.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [s]);
  const w = {
    ...o,
    alignItems: i,
    dense: x.dense,
    disableGutters: u,
    divider: f,
    selected: h
  }, O = $d(w), v = _e(S, n);
  return /* @__PURE__ */ E.jsx(Ye.Provider, {
    value: x,
    children: /* @__PURE__ */ E.jsx(Pd, {
      ref: v,
      href: b.href || b.to,
      component: (b.href || b.to) && a === "div" ? "button" : a,
      focusVisibleClassName: Q(O.focusVisible, m),
      ownerState: w,
      className: Q(O.root, y),
      ...b,
      classes: O,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (ns.propTypes = {
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
const Yo = ns;
function Id(e) {
  return pe("MuiListItemSecondaryAction", e);
}
ge("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const kd = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return ve({
    root: ["root", t && "disableGutters"]
  }, Id, n);
}, Nd = X("div", {
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
}), Hr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: i,
    ...s
  } = o, a = T.useContext(Ye), c = {
    ...o,
    disableGutters: a.disableGutters
  }, l = kd(c);
  return /* @__PURE__ */ E.jsx(Nd, {
    className: Q(l.root, i),
    ownerState: c,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (Hr.propTypes = {
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
Hr.muiName = "ListItemSecondaryAction";
const jd = Hr, Md = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.hasSecondaryAction && t.secondaryAction];
}, Ad = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: o,
    disableGutters: i,
    disablePadding: s,
    divider: a,
    hasSecondaryAction: c
  } = e;
  return ve({
    root: ["root", o && "dense", !i && "gutters", !s && "padding", a && "divider", t === "flex-start" && "alignItemsFlexStart", c && "secondaryAction"],
    container: ["container"]
  }, Ju, n);
}, _d = X("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: Md
})(Oe(({
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
      [`& > .${Mt.root}`]: {
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
}))), Dd = X("li", {
  name: "MuiListItem",
  slot: "Container"
})({
  position: "relative"
}), rs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
      ...h
    } = {},
    dense: y = !1,
    disableGutters: b = !1,
    disablePadding: p = !1,
    divider: x = !1,
    secondaryAction: S,
    slotProps: w = {},
    slots: O = {},
    ...v
  } = o, C = T.useContext(Ye), N = T.useMemo(() => ({
    dense: y || C.dense || !1,
    alignItems: i,
    disableGutters: b
  }), [i, C.dense, y, b]), M = T.useRef(null), A = T.Children.toArray(s), F = A.length && Di(A[A.length - 1], ["ListItemSecondaryAction"]), Y = {
    ...o,
    alignItems: i,
    dense: N.dense,
    disableGutters: b,
    disablePadding: p,
    divider: x,
    hasSecondaryAction: F
  }, W = Ad(Y), d = _e(M, n), I = O.root || l.Root || _d, R = w.root || u.root || {}, $ = {
    className: Q(W.root, R.className, a),
    ...v
  };
  let j = c || "li";
  return F ? (j = !$.component && !c ? "div" : j, f === "li" && (j === "li" ? j = "div" : $.component === "li" && ($.component = "div")), /* @__PURE__ */ E.jsx(Ye.Provider, {
    value: N,
    children: /* @__PURE__ */ E.jsxs(Dd, {
      as: f,
      className: Q(W.container, m),
      ref: d,
      ownerState: Y,
      ...h,
      children: [/* @__PURE__ */ E.jsx(I, {
        ...R,
        ...!Rn(I) && {
          as: j,
          ownerState: {
            ...Y,
            ...R.ownerState
          }
        },
        ...$,
        children: A
      }), A.pop()]
    })
  })) : /* @__PURE__ */ E.jsx(Ye.Provider, {
    value: N,
    children: /* @__PURE__ */ E.jsxs(I, {
      ...R,
      as: j,
      ref: d,
      ...!Rn(I) && {
        ownerState: {
          ...Y,
          ...R.ownerState
        }
      },
      ...$,
      children: [A, S && /* @__PURE__ */ E.jsx(jd, {
        children: S
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (rs.propTypes = {
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
  children: et(r.node, (e) => {
    const t = T.Children.toArray(e.children);
    let n = -1;
    for (let o = t.length - 1; o >= 0; o -= 1) {
      const i = t[o];
      if (Di(i, ["ListItemSecondaryAction"])) {
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
  ContainerComponent: zr,
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
const Ho = rs;
function Bd(e) {
  return pe("MuiListItemIcon", e);
}
const Ld = ge("MuiListItemIcon", ["root", "alignItemsFlexStart"]), qo = Ld, Fd = (e) => {
  const {
    alignItems: t,
    classes: n
  } = e;
  return ve({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, Bd, n);
}, Vd = X("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(Oe(({
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
}))), os = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: i,
    ...s
  } = o, a = T.useContext(Ye), c = {
    ...o,
    alignItems: a.alignItems
  }, l = Fd(c);
  return /* @__PURE__ */ E.jsx(Vd, {
    className: Q(l.root, i),
    ownerState: c,
    ref: n,
    ...s
  });
});
process.env.NODE_ENV !== "production" && (os.propTypes = {
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
const Ko = os;
function zd(e) {
  return typeof e.main == "string";
}
function Wd(e, t = []) {
  if (!zd(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function St(e = []) {
  return ([, t]) => t && Wd(t, e);
}
function Ud(e) {
  return pe("MuiTypography", e);
}
const Gd = ge("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), Xo = Gd, Yd = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Hd = Uu(), qd = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: i,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, e.align !== "inherit" && `align${J(t)}`, n && "gutterBottom", o && "noWrap", i && "paragraph"]
  };
  return ve(c, Ud, a);
}, Kd = X("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${J(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(Oe(({
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
    })), ...Object.entries(e.palette).filter(St()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${J(n)}`
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
})), Jo = {
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
}, is = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    color: o,
    ...i
  } = he({
    props: t,
    name: "MuiTypography"
  }), s = !Yd[o], a = Hd({
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
    paragraph: h = !1,
    variant: y = "body1",
    variantMapping: b = Jo,
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
    variant: y,
    variantMapping: b
  }, S = u || (h ? "p" : b[y] || Jo[y]) || "span", w = qd(x);
  return /* @__PURE__ */ E.jsx(Kd, {
    as: S,
    ref: n,
    className: Q(w.root, l),
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
process.env.NODE_ENV !== "production" && (is.propTypes = {
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
const Be = is;
function Xd(e) {
  return pe("MuiListItemText", e);
}
const Jd = ge("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), At = Jd;
function ss(e, t, n) {
  return e === void 0 || Rn(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function as(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function cs(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function Qo(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ls(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const y = Q(n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, o == null ? void 0 : o.className), b = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...o == null ? void 0 : o.style
    }, p = {
      ...n,
      ...i,
      ...o
    };
    return y.length > 0 && (p.className = y), Object.keys(b).length > 0 && (p.style = b), {
      props: p,
      internalRef: void 0
    };
  }
  const a = cs({
    ...i,
    ...o
  }), c = Qo(o), l = Qo(i), u = t(a), f = Q(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, o == null ? void 0 : o.className), m = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
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
function we(e, t) {
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
    ...h
  } = s, y = f[e] || o, b = as(m[e], i), {
    props: {
      component: p,
      ...x
    },
    internalRef: S
  } = ls({
    className: n,
    ...l,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: b
  }), w = _e(S, b == null ? void 0 : b.ref, t.ref), O = e === "root" ? p || u : p, v = ss(y, {
    ...e === "root" && !u && !f[e] && a,
    ...e !== "root" && !f[e] && a,
    ...x,
    ...O && !c && {
      as: O
    },
    ...O && c && {
      component: O
    },
    ref: w
  }, i);
  return [y, v];
}
const Qd = (e) => {
  const {
    classes: t,
    inset: n,
    primary: o,
    secondary: i,
    dense: s
  } = e;
  return ve({
    root: ["root", n && "inset", s && "dense", o && i && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, Xd, t);
}, Zd = X("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${At.primary}`]: t.primary
    }, {
      [`& .${At.secondary}`]: t.secondary
    }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${Xo.root}:where(& .${At.primary})`]: {
    display: "block"
  },
  [`.${Xo.root}:where(& .${At.secondary})`]: {
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
}), us = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    slots: h = {},
    slotProps: y = {},
    ...b
  } = o, {
    dense: p
  } = T.useContext(Ye);
  let x = l ?? i, S = f;
  const w = {
    ...o,
    disableTypography: a,
    inset: c,
    primary: !!x,
    secondary: !!S,
    dense: p
  }, O = Qd(w), v = {
    slots: h,
    slotProps: {
      primary: u,
      secondary: m,
      ...y
    }
  }, [C, N] = we("root", {
    className: Q(O.root, s),
    elementType: Zd,
    externalForwardedProps: {
      ...v,
      ...b
    },
    ownerState: w,
    ref: n
  }), [M, A] = we("primary", {
    className: O.primary,
    elementType: Be,
    externalForwardedProps: v,
    ownerState: w
  }), [F, Y] = we("secondary", {
    className: O.secondary,
    elementType: Be,
    externalForwardedProps: v,
    ownerState: w
  });
  return x != null && x.type !== Be && !a && (x = /* @__PURE__ */ E.jsx(M, {
    variant: p ? "body2" : "body1",
    component: A != null && A.variant ? void 0 : "span",
    ...A,
    children: x
  })), S != null && S.type !== Be && !a && (S = /* @__PURE__ */ E.jsx(F, {
    variant: "body2",
    color: "textSecondary",
    ...Y,
    children: S
  })), /* @__PURE__ */ E.jsxs(C, {
    ...N,
    children: [x, S]
  });
});
process.env.NODE_ENV !== "production" && (us.propTypes = {
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
const Zo = us, ds = Kl({
  createStyledComponent: X("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => he({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (ds.propTypes = {
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
const at = ds, ps = ({
  mainLinks: e,
  secondaryLinks: t = [],
  activePath: n,
  onLinkClick: o
}) => {
  const i = (s) => {
    o && o(s);
  };
  return /* @__PURE__ */ E.jsxs(at, { sx: { flexGrow: 1, p: 1, justifyContent: "space-between" }, children: [
    /* @__PURE__ */ E.jsx(Or, { dense: !0, children: e.map((s, a) => /* @__PURE__ */ E.jsx(
      Ho,
      {
        disablePadding: !0,
        sx: { display: "block" },
        children: /* @__PURE__ */ E.jsxs(
          Yo,
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
              /* @__PURE__ */ E.jsx(Ko, { children: s.icon }),
              /* @__PURE__ */ E.jsx(Zo, { primary: s.text })
            ]
          }
        )
      },
      a
    )) }),
    t.length > 0 && /* @__PURE__ */ E.jsx(Or, { dense: !0, children: t.map((s, a) => /* @__PURE__ */ E.jsx(
      Ho,
      {
        disablePadding: !0,
        sx: { display: "block" },
        children: /* @__PURE__ */ E.jsxs(
          Yo,
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
              /* @__PURE__ */ E.jsx(Ko, { children: s.icon }),
              /* @__PURE__ */ E.jsx(Zo, { primary: s.text })
            ]
          }
        )
      },
      a
    )) })
  ] });
};
function ep(e) {
  return pe("MuiSvgIcon", e);
}
ge("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const tp = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${J(t)}`, `fontSize${J(n)}`]
  };
  return ve(i, ep, o);
}, np = X("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${J(n.color)}`], t[`fontSize${J(n.fontSize)}`]];
  }
})(Oe(({
  theme: e
}) => {
  var t, n, o, i, s, a, c, l, u, f, m, h, y, b;
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
          color: (h = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (b = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) == null ? void 0 : b.disabled
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
})), qr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    viewBox: h = "0 0 24 24",
    ...y
  } = o, b = /* @__PURE__ */ T.isValidElement(i) && i.type === "svg", p = {
    ...o,
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: h,
    hasSvgAsChild: b
  }, x = {};
  f || (x.viewBox = h);
  const S = tp(p);
  return /* @__PURE__ */ E.jsxs(np, {
    as: c,
    className: Q(S.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...x,
    ...y,
    ...b && i.props,
    ownerState: p,
    children: [b ? i.props.children : i, m ? /* @__PURE__ */ E.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (qr.propTypes = {
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
qr.muiName = "SvgIcon";
const ei = qr;
function dt(e, t) {
  function n(o, i) {
    return /* @__PURE__ */ E.jsx(ei, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: i,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = ei.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(n));
}
const rp = dt(/* @__PURE__ */ E.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function op(e) {
  return pe("MuiAvatar", e);
}
ge("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const ip = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: o
  } = e;
  return ve({
    root: ["root", n, o && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, op, t);
}, sp = X("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
  }
})(Oe(({
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
}))), ap = X("img", {
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
}), cp = X(rp, {
  name: "MuiAvatar",
  slot: "Fallback"
})({
  width: "75%",
  height: "75%"
});
function lp({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: o
}) {
  const [i, s] = T.useState(!1);
  return T.useEffect(() => {
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
const fs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    src: h,
    srcSet: y,
    variant: b = "circular",
    ...p
  } = o;
  let x = null;
  const S = {
    ...o,
    component: c,
    variant: b
  }, w = lp({
    ...f,
    ...typeof u.img == "function" ? u.img(S) : u.img,
    src: h,
    srcSet: y
  }), O = h || y, v = O && w !== "error";
  S.colorDefault = !v, delete S.ownerState;
  const C = ip(S), [N, M] = we("root", {
    ref: n,
    className: Q(C.root, a),
    elementType: sp,
    externalForwardedProps: {
      slots: l,
      slotProps: u,
      component: c,
      ...p
    },
    ownerState: S
  }), [A, F] = we("img", {
    className: C.img,
    elementType: ap,
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
      src: h,
      srcSet: y,
      sizes: m
    },
    ownerState: S
  }), [Y, W] = we("fallback", {
    className: C.fallback,
    elementType: cp,
    externalForwardedProps: {
      slots: l,
      slotProps: u
    },
    shouldForwardComponentProp: !0,
    ownerState: S
  });
  return v ? x = /* @__PURE__ */ E.jsx(A, {
    ...F
  }) : s || s === 0 ? x = s : O && i ? x = i[0] : x = /* @__PURE__ */ E.jsx(Y, {
    ...W
  }), /* @__PURE__ */ E.jsx(N, {
    ...M,
    children: x
  });
});
process.env.NODE_ENV !== "production" && (fs.propTypes = {
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
const ms = fs, up = ge("MuiBox", ["root"]), dp = up, pp = Ui(), gs = pl({
  themeId: Vr,
  defaultTheme: pp,
  defaultClassName: dp.root,
  generateClassName: wi.generate
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
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
const hs = gs;
function fp(e) {
  return pe("MuiDivider", e);
}
const mp = ge("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), ti = mp, gp = (e) => {
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
  return ve({
    root: ["root", t && "absolute", l, s && "light", a === "vertical" && "vertical", i && "flexItem", n && "withChildren", n && a === "vertical" && "withChildrenVertical", c === "right" && a !== "vertical" && "textAlignRight", c === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, fp, o);
}, hp = X("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(Oe(({
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
}))), yp = X("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(Oe(({
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
}))), Pn = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    textAlign: h = "center",
    variant: y = "fullWidth",
    ...b
  } = o, p = {
    ...o,
    absolute: i,
    component: l,
    flexItem: u,
    light: f,
    orientation: c,
    role: m,
    textAlign: h,
    variant: y
  }, x = gp(p);
  return /* @__PURE__ */ E.jsx(hp, {
    as: l,
    className: Q(x.root, a),
    role: m,
    ref: n,
    ownerState: p,
    "aria-orientation": m === "separator" && (l !== "hr" || c === "vertical") ? c : void 0,
    ...b,
    children: s ? /* @__PURE__ */ E.jsx(yp, {
      className: x.wrapper,
      ownerState: p,
      children: s
    }) : null
  });
});
Pn && (Pn.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (Pn.propTypes = {
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
const In = Pn;
function ni(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function ys(e, t = 166) {
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
function Ze(e) {
  return e && e.ownerDocument || document;
}
function rt(e) {
  return Ze(e).defaultView || window;
}
function ri(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function bp(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function bs(e, t) {
  if (!e)
    return t;
  function n(a, c) {
    const l = {};
    return Object.keys(c).forEach((u) => {
      bp(u, c[u]) && typeof a[u] == "function" && (l[u] = (...f) => {
        a[u](...f), c[u](...f);
      });
    }), l;
  }
  if (typeof e == "function" || typeof t == "function")
    return (a) => {
      const c = typeof t == "function" ? t(a) : t, l = typeof e == "function" ? e({
        ...a,
        ...c
      }) : e, u = Q(a == null ? void 0 : a.className, c == null ? void 0 : c.className, l == null ? void 0 : l.className), f = n(l, c);
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
  const o = t, i = n(e, o), s = Q(o == null ? void 0 : o.className, e == null ? void 0 : e.className);
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
function vp(e) {
  return pe("MuiCircularProgress", e);
}
ge("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const it = 44, Ir = an`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, kr = an`
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
`, xp = typeof Ir != "string" ? hi`
        animation: ${Ir} 1.4s linear infinite;
      ` : null, Ep = typeof kr != "string" ? hi`
        animation: ${kr} 1.4s ease-in-out infinite;
      ` : null, Tp = (e) => {
  const {
    classes: t,
    variant: n,
    color: o,
    disableShrink: i
  } = e, s = {
    root: ["root", n, `color${J(o)}`],
    svg: ["svg"],
    circle: ["circle", `circle${J(n)}`, i && "circleDisableShrink"]
  };
  return ve(s, vp, t);
}, Cp = X("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${J(n.color)}`]];
  }
})(Oe(({
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
    style: xp || {
      animation: `${Ir} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Sp = X("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Op = X("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${J(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Oe(({
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
    style: Ep || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${kr} 1.4s ease-in-out infinite`
    }
  }]
}))), vs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: s = "primary",
    disableShrink: a = !1,
    size: c = 40,
    style: l,
    thickness: u = 3.6,
    value: f = 0,
    variant: m = "indeterminate",
    ...h
  } = o, y = {
    ...o,
    color: s,
    disableShrink: a,
    size: c,
    thickness: u,
    value: f,
    variant: m
  }, b = Tp(y), p = {}, x = {}, S = {};
  if (m === "determinate") {
    const w = 2 * Math.PI * ((it - u) / 2);
    p.strokeDasharray = w.toFixed(3), S["aria-valuenow"] = Math.round(f), p.strokeDashoffset = `${((100 - f) / 100 * w).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ E.jsx(Cp, {
    className: Q(b.root, i),
    style: {
      width: c,
      height: c,
      ...x,
      ...l
    },
    ownerState: y,
    ref: n,
    role: "progressbar",
    ...S,
    ...h,
    children: /* @__PURE__ */ E.jsx(Sp, {
      className: b.svg,
      ownerState: y,
      viewBox: `${it / 2} ${it / 2} ${it} ${it}`,
      children: /* @__PURE__ */ E.jsx(Op, {
        className: b.circle,
        style: p,
        ownerState: y,
        cx: it,
        cy: it,
        r: (it - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (vs.propTypes = {
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
  disableShrink: et(r.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
const xs = vs;
function Rp(e) {
  return pe("MuiIconButton", e);
}
const wp = ge("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), oi = wp, $p = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: i,
    size: s,
    loading: a
  } = e, c = {
    root: ["root", a && "loading", n && "disabled", o !== "default" && `color${J(o)}`, i && `edge${J(i)}`, `size${J(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return ve(c, Rp, t);
}, Pp = X(dn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${J(n.color)}`], n.edge && t[`edge${J(n.edge)}`], t[`size${J(n.size)}`]];
  }
})(Oe(({
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
})), Oe(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(St()).map(([t]) => ({
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
  [`&.${oi.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${oi.loading}`]: {
    color: "transparent"
  }
}))), Ip = X("span", {
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
})), Es = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    loading: h = null,
    loadingIndicator: y,
    ...b
  } = o, p = _i(m), x = y ?? /* @__PURE__ */ E.jsx(xs, {
    "aria-labelledby": p,
    color: "inherit",
    size: 16
  }), S = {
    ...o,
    edge: i,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    loading: h,
    loadingIndicator: x,
    size: f
  }, w = $p(S);
  return /* @__PURE__ */ E.jsxs(Pp, {
    id: h ? p : m,
    className: Q(w.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l || h,
    ref: n,
    ...b,
    ownerState: S,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ E.jsx("span", {
      className: w.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ E.jsx(Ip, {
        className: w.loadingIndicator,
        ownerState: S,
        children: h && x
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (Es.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: et(r.node, (e) => T.Children.toArray(e.children).some((n) => /* @__PURE__ */ T.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const Kr = Es;
function Vt(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function Ts(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1,
    ...s
  } = e, a = i ? {} : as(n, o), {
    props: c,
    internalRef: l
  } = ls({
    ...s,
    externalSlotProps: a
  }), u = _e(l, a == null ? void 0 : a.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return ss(t, {
    ...c,
    ref: u
  }, o);
}
function Cs(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function dr(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function ii(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Ss(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function Kt(e, t, n, o, i, s) {
  let a = !1, c = i(e, t, t ? n : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = o ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !Ss(c, s) || l)
      c = i(e, c, n);
    else
      return c.focus(), !0;
  }
  return !1;
}
const Os = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    ...h
  } = t, y = T.useRef(null), b = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Ft(() => {
    i && y.current.focus();
  }, [i]), T.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (O, {
      direction: v
    }) => {
      const C = !y.current.style.width;
      if (O.clientHeight < y.current.clientHeight && C) {
        const N = `${Cs(rt(O))}px`;
        y.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = N, y.current.style.width = `calc(100% + ${N})`;
      }
      return y.current;
    }
  }), []);
  const p = (O) => {
    const v = y.current, C = O.key;
    if (O.ctrlKey || O.metaKey || O.altKey) {
      f && f(O);
      return;
    }
    const M = Ze(v).activeElement;
    if (C === "ArrowDown")
      O.preventDefault(), Kt(v, M, u, l, dr);
    else if (C === "ArrowUp")
      O.preventDefault(), Kt(v, M, u, l, ii);
    else if (C === "Home")
      O.preventDefault(), Kt(v, null, u, l, dr);
    else if (C === "End")
      O.preventDefault(), Kt(v, null, u, l, ii);
    else if (C.length === 1) {
      const A = b.current, F = C.toLowerCase(), Y = performance.now();
      A.keys.length > 0 && (Y - A.lastTime > 500 ? (A.keys = [], A.repeating = !0, A.previousKeyMatched = !0) : A.repeating && F !== A.keys[0] && (A.repeating = !1)), A.lastTime = Y, A.keys.push(F);
      const W = M && !A.repeating && Ss(M, A);
      A.previousKeyMatched && (W || Kt(v, M, !1, l, dr, A)) ? O.preventDefault() : A.previousKeyMatched = !1;
    }
    f && f(O);
  }, x = _e(y, n);
  let S = -1;
  T.Children.forEach(a, (O, v) => {
    if (!/* @__PURE__ */ T.isValidElement(O)) {
      S === v && (S += 1, S >= a.length && (S = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Tt.isFragment(O) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), O.props.disabled || (m === "selectedMenu" && O.props.selected || S === -1) && (S = v), S === v && (O.props.disabled || O.props.muiSkipListHighlight || O.type.muiSkipListHighlight) && (S += 1, S >= a.length && (S = -1));
  });
  const w = T.Children.map(a, (O, v) => {
    if (v === S) {
      const C = {};
      return s && (C.autoFocus = !0), O.props.tabIndex === void 0 && m === "selectedMenu" && (C.tabIndex = 0), /* @__PURE__ */ T.cloneElement(O, C);
    }
    return O;
  });
  return /* @__PURE__ */ E.jsx(Or, {
    role: "menu",
    ref: x,
    className: c,
    onKeyDown: p,
    tabIndex: i ? 0 : -1,
    ...h,
    children: w
  });
});
process.env.NODE_ENV !== "production" && (Os.propTypes = {
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
const kp = Os;
function Np(e) {
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
function Rs(e, t, n, o) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const s = Np(i);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function ws(e, t, n, o) {
  return e[t] === void 0 ? null : Rs(e, t, n, o);
}
function Nr() {
  return null;
}
ws.isRequired = Rs;
Nr.isRequired = Nr;
const jp = process.env.NODE_ENV === "production" ? Nr : ws, Bt = jp;
function Mp(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function $s(e, t, n, o, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = s.type;
  return typeof l == "function" && !Mp(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ps = et(r.element, $s);
Ps.isRequired = et(r.element.isRequired, $s);
const pn = Ps;
function fn(e) {
  var t;
  return parseInt(T.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Xr = (e) => e.scrollTop;
function zt(e, t) {
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
function jr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Ap = {
  entering: {
    opacity: 1,
    transform: jr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, pr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), kn = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    onExited: h,
    onExiting: y,
    style: b,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Wr,
    ...S
  } = t, w = Qi(), O = T.useRef(), v = un(), C = T.useRef(null), N = _e(C, fn(s), n), M = ($) => (j) => {
    if ($) {
      const G = C.current;
      j === void 0 ? $(G) : $(G, j);
    }
  }, A = M(f), F = M(($, j) => {
    Xr($);
    const {
      duration: G,
      delay: V,
      easing: B
    } = zt({
      style: b,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    let P;
    p === "auto" ? (P = v.transitions.getAutoHeightDuration($.clientHeight), O.current = P) : P = G, $.style.transition = [v.transitions.create("opacity", {
      duration: P,
      delay: V
    }), v.transitions.create("transform", {
      duration: pr ? P : P * 0.666,
      delay: V,
      easing: B
    })].join(","), l && l($, j);
  }), Y = M(u), W = M(y), d = M(($) => {
    const {
      duration: j,
      delay: G,
      easing: V
    } = zt({
      style: b,
      timeout: p,
      easing: a
    }, {
      mode: "exit"
    });
    let B;
    p === "auto" ? (B = v.transitions.getAutoHeightDuration($.clientHeight), O.current = B) : B = j, $.style.transition = [v.transitions.create("opacity", {
      duration: B,
      delay: G
    }), v.transitions.create("transform", {
      duration: pr ? B : B * 0.666,
      delay: pr ? G : G || B * 0.333,
      easing: V
    })].join(","), $.style.opacity = 0, $.style.transform = jr(0.75), m && m($);
  }), I = M(h), R = ($) => {
    p === "auto" && w.start(O.current || 0, $), o && o(C.current, $);
  };
  return /* @__PURE__ */ E.jsx(x, {
    appear: i,
    in: c,
    nodeRef: C,
    onEnter: F,
    onEntered: Y,
    onEntering: A,
    onExit: d,
    onExited: I,
    onExiting: W,
    addEndListener: R,
    timeout: p === "auto" ? null : p,
    ...S,
    children: ($, {
      ownerState: j,
      ...G
    }) => /* @__PURE__ */ T.cloneElement(s, {
      style: {
        opacity: 0,
        transform: jr(0.75),
        visibility: $ === "exited" && !c ? "hidden" : void 0,
        ...Ap[$],
        ...b,
        ...s.props.style
      },
      ref: N,
      ...G
    })
  });
});
process.env.NODE_ENV !== "production" && (kn.propTypes = {
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
  children: pn.isRequired,
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
kn && (kn.muiSupportAuto = !0);
const _p = kn;
function Dp(e) {
  const t = Ze(e);
  return t.body === e ? rt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function nn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function si(e) {
  return parseInt(rt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Bp(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function ai(e, t, n, o, i) {
  const s = [t, n, ...o];
  [].forEach.call(e.children, (a) => {
    const c = !s.includes(a), l = !Bp(a);
    c && l && nn(a, i);
  });
}
function fr(e, t) {
  let n = -1;
  return e.some((o, i) => t(o) ? (n = i, !0) : !1), n;
}
function Lp(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (Dp(o)) {
      const a = Cs(rt(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${si(o) + a}px`;
      const c = Ze(o).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${si(l) + a}px`;
      });
    }
    let s;
    if (o.parentNode instanceof DocumentFragment)
      s = Ze(o).body;
    else {
      const a = o.parentElement, c = rt(o);
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
function Fp(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Vp {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && nn(t.modalRef, !1);
    const i = Fp(n);
    ai(n, t.mount, t.modalRef, i, !0);
    const s = fr(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), o);
  }
  mount(t, n) {
    const o = fr(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    i.restore || (i.restore = Lp(i, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const i = fr(this.containers, (a) => a.modals.includes(t)), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(o, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && nn(t.modalRef, n), ai(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && nn(a.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const zp = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Wp(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Up(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Gp(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Up(e));
}
function Yp(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(zp)).forEach((o, i) => {
    const s = Wp(o);
    s === -1 || !Gp(o) || (s === 0 ? t.push(o) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: o
    }));
  }), n.sort((o, i) => o.tabIndex === i.tabIndex ? o.documentOrder - i.documentOrder : o.tabIndex - i.tabIndex).map((o) => o.node).concat(t);
}
function Hp() {
  return !0;
}
function Nn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = Yp,
    isEnabled: a = Hp,
    open: c
  } = e, l = T.useRef(!1), u = T.useRef(null), f = T.useRef(null), m = T.useRef(null), h = T.useRef(null), y = T.useRef(!1), b = T.useRef(null), p = _e(fn(t), b), x = T.useRef(null);
  T.useEffect(() => {
    !c || !b.current || (y.current = !n);
  }, [n, c]), T.useEffect(() => {
    if (!c || !b.current)
      return;
    const O = Ze(b.current);
    return b.current.contains(O.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), y.current && b.current.focus()), () => {
      i || (m.current && m.current.focus && (l.current = !0, m.current.focus()), m.current = null);
    };
  }, [c]), T.useEffect(() => {
    if (!c || !b.current)
      return;
    const O = Ze(b.current), v = (M) => {
      x.current = M, !(o || !a() || M.key !== "Tab") && O.activeElement === b.current && M.shiftKey && (l.current = !0, f.current && f.current.focus());
    }, C = () => {
      var F, Y;
      const M = b.current;
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
      if (!y.current)
        return;
      let A = [];
      if ((O.activeElement === u.current || O.activeElement === f.current) && (A = s(b.current)), A.length > 0) {
        const W = !!((F = x.current) != null && F.shiftKey && ((Y = x.current) == null ? void 0 : Y.key) === "Tab"), d = A[0], I = A[A.length - 1];
        typeof d != "string" && typeof I != "string" && (W ? I.focus() : d.focus());
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
  }, [n, o, i, a, c, s]);
  const S = (O) => {
    m.current === null && (m.current = O.relatedTarget), y.current = !0, h.current = O.target;
    const v = t.props.onFocus;
    v && v(O);
  }, w = (O) => {
    m.current === null && (m.current = O.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ E.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ E.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: p,
      onFocus: S
    }), /* @__PURE__ */ E.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: w,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Nn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: pn,
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
process.env.NODE_ENV !== "production" && (Nn["propTypes"] = Mi(Nn.propTypes));
function qp(e) {
  return typeof e == "function" ? e() : e;
}
const jn = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    children: o,
    container: i,
    disablePortal: s = !1
  } = t, [a, c] = T.useState(null), l = _e(/* @__PURE__ */ T.isValidElement(o) ? fn(o) : null, n);
  if (Ft(() => {
    s || c(qp(i) || document.body);
  }, [i, s]), Ft(() => {
    if (a && !s)
      return ri(n, a), () => {
        ri(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ T.isValidElement(o)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ T.cloneElement(o, u);
    }
    return o;
  }
  return a && /* @__PURE__ */ _a.createPortal(o, a);
});
process.env.NODE_ENV !== "production" && (jn.propTypes = {
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
  container: r.oneOfType([Vt, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool
});
process.env.NODE_ENV !== "production" && (jn["propTypes"] = Mi(jn.propTypes));
const Kp = jn, Xp = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Is = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = un(), i = {
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
    onEntering: h,
    onExit: y,
    onExited: b,
    onExiting: p,
    style: x,
    timeout: S = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Wr,
    ...O
  } = t, v = T.useRef(null), C = _e(v, fn(c), n), N = (R) => ($) => {
    if (R) {
      const j = v.current;
      $ === void 0 ? R(j) : R(j, $);
    }
  }, M = N(h), A = N((R, $) => {
    Xr(R);
    const j = zt({
      style: x,
      timeout: S,
      easing: l
    }, {
      mode: "enter"
    });
    R.style.webkitTransition = o.transitions.create("opacity", j), R.style.transition = o.transitions.create("opacity", j), f && f(R, $);
  }), F = N(m), Y = N(p), W = N((R) => {
    const $ = zt({
      style: x,
      timeout: S,
      easing: l
    }, {
      mode: "exit"
    });
    R.style.webkitTransition = o.transitions.create("opacity", $), R.style.transition = o.transitions.create("opacity", $), y && y(R);
  }), d = N(b), I = (R) => {
    s && s(v.current, R);
  };
  return /* @__PURE__ */ E.jsx(w, {
    appear: a,
    in: u,
    nodeRef: v,
    onEnter: A,
    onEntered: F,
    onEntering: M,
    onExit: W,
    onExited: d,
    onExiting: Y,
    addEndListener: I,
    timeout: S,
    ...O,
    children: (R, {
      ownerState: $,
      ...j
    }) => /* @__PURE__ */ T.cloneElement(c, {
      style: {
        opacity: 0,
        visibility: R === "exited" && !u ? "hidden" : void 0,
        ...Xp[R],
        ...x,
        ...c.props.style
      },
      ref: C,
      ...j
    })
  });
});
process.env.NODE_ENV !== "production" && (Is.propTypes = {
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
  children: pn.isRequired,
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
const Jp = Is;
function Qp(e) {
  return pe("MuiBackdrop", e);
}
ge("MuiBackdrop", ["root", "invisible"]);
const Zp = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ve({
    root: ["root", n && "invisible"]
  }, Qp, t);
}, ef = X("div", {
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
}), ks = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    slots: h = {},
    TransitionComponent: y,
    transitionDuration: b,
    ...p
  } = o, x = {
    ...o,
    component: a,
    invisible: c
  }, S = Zp(x), w = {
    transition: y,
    root: u.Root,
    ...h
  }, O = {
    ...f,
    ...m
  }, v = {
    component: a,
    slots: w,
    slotProps: O
  }, [C, N] = we("root", {
    elementType: ef,
    externalForwardedProps: v,
    className: Q(S.root, s),
    ownerState: x
  }), [M, A] = we("transition", {
    elementType: Jp,
    externalForwardedProps: v,
    ownerState: x
  });
  return /* @__PURE__ */ E.jsx(M, {
    in: l,
    timeout: b,
    ...p,
    ...A,
    children: /* @__PURE__ */ E.jsx(C, {
      "aria-hidden": !0,
      ...N,
      classes: S,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (ks.propTypes = {
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
const tf = ks;
function nf(e) {
  return typeof e == "function" ? e() : e;
}
function rf(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ci = () => {
}, bn = new Vp();
function of(e) {
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
  } = e, m = T.useRef({}), h = T.useRef(null), y = T.useRef(null), b = _e(y, f), [p, x] = T.useState(!u), S = rf(c);
  let w = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (w = !1);
  const O = () => Ze(h.current), v = () => (m.current.modalRef = y.current, m.current.mount = h.current, m.current), C = () => {
    bn.mount(v(), {
      disableScrollLock: o
    }), y.current && (y.current.scrollTop = 0);
  }, N = Dt(() => {
    const $ = nf(t) || O().body;
    bn.add(v(), $), y.current && C();
  }), M = () => bn.isTopModal(v()), A = Dt(($) => {
    h.current = $, $ && (u && M() ? C() : y.current && nn(y.current, w));
  }), F = T.useCallback(() => {
    bn.remove(v(), w);
  }, [w]);
  T.useEffect(() => () => {
    F();
  }, [F]), T.useEffect(() => {
    u ? N() : (!S || !i) && F();
  }, [u, F, S, i, N]);
  const Y = ($) => (j) => {
    var G;
    (G = $.onKeyDown) == null || G.call($, j), !(j.key !== "Escape" || j.which === 229 || // Wait until IME is settled.
    !M()) && (n || (j.stopPropagation(), l && l(j, "escapeKeyDown")));
  }, W = ($) => (j) => {
    var G;
    (G = $.onClick) == null || G.call($, j), j.target === j.currentTarget && l && l(j, "backdropClick");
  };
  return {
    getRootProps: ($ = {}) => {
      const j = cs(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const G = {
        ...j,
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
        ref: b
      };
    },
    getBackdropProps: ($ = {}) => {
      const j = $;
      return {
        "aria-hidden": !0,
        ...j,
        onClick: W(j),
        open: u
      };
    },
    getTransitionProps: () => {
      const $ = () => {
        x(!1), s && s();
      }, j = () => {
        x(!0), a && a(), i && F();
      };
      return {
        onEnter: ni($, (c == null ? void 0 : c.props.onEnter) ?? ci),
        onExited: ni(j, (c == null ? void 0 : c.props.onExited) ?? ci)
      };
    },
    rootRef: b,
    portalRef: A,
    isTopModal: M,
    exited: p,
    hasTransition: S
  };
}
function sf(e) {
  return pe("MuiModal", e);
}
ge("MuiModal", ["root", "hidden", "backdrop"]);
const af = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return ve({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, sf, o);
}, cf = X("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Oe(({
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
}))), lf = X(tf, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Ns = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = lf,
    BackdropProps: s,
    classes: a,
    className: c,
    closeAfterTransition: l = !1,
    children: u,
    container: f,
    component: m,
    components: h = {},
    componentsProps: y = {},
    disableAutoFocus: b = !1,
    disableEnforceFocus: p = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: S = !1,
    disableRestoreFocus: w = !1,
    disableScrollLock: O = !1,
    hideBackdrop: v = !1,
    keepMounted: C = !1,
    onClose: N,
    onTransitionEnter: M,
    onTransitionExited: A,
    open: F,
    slotProps: Y = {},
    slots: W = {},
    // eslint-disable-next-line react/prop-types
    theme: d,
    ...I
  } = o, R = {
    ...o,
    closeAfterTransition: l,
    disableAutoFocus: b,
    disableEnforceFocus: p,
    disableEscapeKeyDown: x,
    disablePortal: S,
    disableRestoreFocus: w,
    disableScrollLock: O,
    hideBackdrop: v,
    keepMounted: C
  }, {
    getRootProps: $,
    getBackdropProps: j,
    getTransitionProps: G,
    portalRef: V,
    isTopModal: B,
    exited: P,
    hasTransition: L
  } = of({
    ...R,
    rootRef: n
  }), q = {
    ...R,
    exited: P
  }, H = af(q), K = {};
  if (u.props.tabIndex === void 0 && (K.tabIndex = "-1"), L) {
    const {
      onEnter: z,
      onExited: ne
    } = G();
    K.onEnter = z, K.onExited = ne;
  }
  const ie = {
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...W
    },
    slotProps: {
      ...y,
      ...Y
    }
  }, [Z, ee] = we("root", {
    ref: n,
    elementType: cf,
    externalForwardedProps: {
      ...ie,
      ...I,
      component: m
    },
    getSlotProps: $,
    ownerState: q,
    className: Q(c, H == null ? void 0 : H.root, !q.open && q.exited && (H == null ? void 0 : H.hidden))
  }), [re, se] = we("backdrop", {
    ref: s == null ? void 0 : s.ref,
    elementType: i,
    externalForwardedProps: ie,
    shouldForwardComponentProp: !0,
    additionalProps: s,
    getSlotProps: (z) => j({
      ...z,
      onClick: (ne) => {
        z != null && z.onClick && z.onClick(ne);
      }
    }),
    className: Q(s == null ? void 0 : s.className, H == null ? void 0 : H.backdrop),
    ownerState: q
  });
  return !C && !F && (!L || P) ? null : /* @__PURE__ */ E.jsx(Kp, {
    ref: V,
    container: f,
    disablePortal: S,
    children: /* @__PURE__ */ E.jsxs(Z, {
      ...ee,
      children: [!v && i ? /* @__PURE__ */ E.jsx(re, {
        ...se
      }) : null, /* @__PURE__ */ E.jsx(Nn, {
        disableEnforceFocus: p,
        disableAutoFocus: b,
        disableRestoreFocus: w,
        isEnabled: B,
        open: F,
        children: /* @__PURE__ */ T.cloneElement(u, K)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
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
  children: pn.isRequired,
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
  container: r.oneOfType([Vt, r.func]),
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
const js = Ns;
function uf(e) {
  return pe("MuiPaper", e);
}
ge("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const df = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return ve(s, uf, i);
}, pf = X("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Oe(({
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
}))), Ms = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var y;
  const o = he({
    props: t,
    name: "MuiPaper"
  }), i = un(), {
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
  }, h = df(m);
  return process.env.NODE_ENV !== "production" && i.shadows[c] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${c}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${c}]\` is defined.`].join(`
`)), /* @__PURE__ */ E.jsx(pf, {
    as: a,
    ownerState: m,
    className: Q(h.root, s),
    ref: n,
    ...f,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[c],
        ...i.vars && {
          "--Paper-overlay": (y = i.vars.overlays) == null ? void 0 : y[c]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${On("#fff", Sr(c))}, ${On("#fff", Sr(c))})`
        }
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ms.propTypes = {
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
  elevation: et(Bt, (e) => {
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
const qn = Ms;
function ff(e) {
  return pe("MuiPopover", e);
}
ge("MuiPopover", ["root", "paper"]);
function li(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function ui(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function di(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function en(e) {
  return typeof e == "function" ? e() : e;
}
const mf = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"]
  }, ff, t);
}, gf = X(js, {
  name: "MuiPopover",
  slot: "Root"
})({}), As = X(qn, {
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
}), _s = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    elevation: h = 8,
    marginThreshold: y = 16,
    open: b,
    PaperProps: p = {},
    // TODO: remove in v7
    slots: x = {},
    slotProps: S = {},
    transformOrigin: w = {
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
  } = o, A = T.useRef(), F = {
    ...o,
    anchorOrigin: a,
    anchorReference: l,
    elevation: h,
    marginThreshold: y,
    transformOrigin: w,
    TransitionComponent: O,
    transitionDuration: v,
    TransitionProps: C
  }, Y = mf(F), W = T.useCallback(() => {
    if (l === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (c || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), c;
    const z = en(s), ne = z && z.nodeType === 1 ? z : Ze(A.current).body, D = ne.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Ee = ne.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Ee.top === 0 && Ee.left === 0 && Ee.right === 0 && Ee.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: D.top + li(D, a.vertical),
      left: D.left + ui(D, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, c, l]), d = T.useCallback((z) => ({
    vertical: li(z, w.vertical),
    horizontal: ui(z, w.horizontal)
  }), [w.horizontal, w.vertical]), I = T.useCallback((z) => {
    const ne = {
      width: z.offsetWidth,
      height: z.offsetHeight
    }, D = d(ne);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: di(D)
      };
    const Ee = W();
    let Ie = Ee.top - D.vertical, ke = Ee.left - D.horizontal;
    const qe = Ie + ne.height, Ke = ke + ne.width, Ue = rt(en(s)), Le = Ue.innerHeight - y, pt = Ue.innerWidth - y;
    if (y !== null && Ie < y) {
      const Ne = Ie - y;
      Ie -= Ne, D.vertical += Ne;
    } else if (y !== null && qe > Le) {
      const Ne = qe - Le;
      Ie -= Ne, D.vertical += Ne;
    }
    if (process.env.NODE_ENV !== "production" && ne.height > Le && ne.height && Le && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ne.height - Le}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), y !== null && ke < y) {
      const Ne = ke - y;
      ke -= Ne, D.horizontal += Ne;
    } else if (Ke > pt) {
      const Ne = Ke - pt;
      ke -= Ne, D.horizontal += Ne;
    }
    return {
      top: `${Math.round(Ie)}px`,
      left: `${Math.round(ke)}px`,
      transformOrigin: di(D)
    };
  }, [s, l, W, d, y]), [R, $] = T.useState(b), j = T.useCallback(() => {
    const z = A.current;
    if (!z)
      return;
    const ne = I(z);
    ne.top !== null && z.style.setProperty("top", ne.top), ne.left !== null && (z.style.left = ne.left), z.style.transformOrigin = ne.transformOrigin, $(!0);
  }, [I]);
  T.useEffect(() => (N && window.addEventListener("scroll", j), () => window.removeEventListener("scroll", j)), [s, N, j]);
  const G = () => {
    j();
  }, V = () => {
    $(!1);
  };
  T.useEffect(() => {
    b && j();
  }), T.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      j();
    }
  } : null, [b, j]), T.useEffect(() => {
    if (!b)
      return;
    const z = ys(() => {
      j();
    }), ne = rt(en(s));
    return ne.addEventListener("resize", z), () => {
      z.clear(), ne.removeEventListener("resize", z);
    };
  }, [s, b, j]);
  let B = v;
  const P = {
    slots: {
      transition: O,
      ...x
    },
    slotProps: {
      transition: C,
      paper: p,
      ...S
    }
  }, [L, q] = we("transition", {
    elementType: _p,
    externalForwardedProps: P,
    ownerState: F,
    getSlotProps: (z) => ({
      ...z,
      onEntering: (ne, D) => {
        var Ee;
        (Ee = z.onEntering) == null || Ee.call(z, ne, D), G();
      },
      onExited: (ne) => {
        var D;
        (D = z.onExited) == null || D.call(z, ne), V();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  v === "auto" && !L.muiSupportAuto && (B = void 0);
  const H = m || (s ? Ze(en(s)).body : void 0), [K, {
    slots: ie,
    slotProps: Z,
    ...ee
  }] = we("root", {
    ref: n,
    elementType: gf,
    externalForwardedProps: {
      ...P,
      ...M
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: bs(typeof S.backdrop == "function" ? S.backdrop(F) : S.backdrop, {
          invisible: !0
        })
      },
      container: H,
      open: b
    },
    ownerState: F,
    className: Q(Y.root, f)
  }), [re, se] = we("paper", {
    ref: A,
    className: Y.paper,
    elementType: As,
    externalForwardedProps: P,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: h,
      style: R ? void 0 : {
        opacity: 0
      }
    },
    ownerState: F
  });
  return /* @__PURE__ */ E.jsx(K, {
    ...ee,
    ...!Rn(K) && {
      slots: ie,
      slotProps: Z,
      disableScrollLock: N
    },
    children: /* @__PURE__ */ E.jsx(L, {
      ...q,
      timeout: B,
      children: /* @__PURE__ */ E.jsx(re, {
        ...se,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (_s.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: qi,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: et(r.oneOfType([Vt, r.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = en(e.anchorEl);
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
  container: r.oneOfType([Vt, r.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Bt,
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
    component: zr
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
const hf = _s;
function yf(e) {
  return pe("MuiMenu", e);
}
ge("MuiMenu", ["root", "paper", "list"]);
const bf = {
  vertical: "top",
  horizontal: "right"
}, vf = {
  vertical: "top",
  horizontal: "left"
}, xf = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, yf, t);
}, Ef = X(hf, {
  shouldForwardProp: (e) => Wt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), Tf = X(As, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Cf = X(kp, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ds = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    PopoverClasses: h,
    transitionDuration: y = "auto",
    TransitionProps: {
      onEntering: b,
      ...p
    } = {},
    variant: x = "selectedMenu",
    slots: S = {},
    slotProps: w = {},
    ...O
  } = o, v = Ai(), C = {
    ...o,
    autoFocus: i,
    disableAutoFocusItem: c,
    MenuListProps: l,
    onEntering: b,
    PaperProps: m,
    transitionDuration: y,
    TransitionProps: p,
    variant: x
  }, N = xf(C), M = i && !c && f, A = T.useRef(null), F = (B, P) => {
    A.current && A.current.adjustStyleForScrollbar(B, {
      direction: v ? "rtl" : "ltr"
    }), b && b(B, P);
  }, Y = (B) => {
    B.key === "Tab" && (B.preventDefault(), u && u(B, "tabKeyDown"));
  };
  let W = -1;
  T.Children.map(s, (B, P) => {
    /* @__PURE__ */ T.isValidElement(B) && (process.env.NODE_ENV !== "production" && Tt.isFragment(B) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), B.props.disabled || (x === "selectedMenu" && B.props.selected || W === -1) && (W = P));
  });
  const d = {
    slots: S,
    slotProps: {
      list: l,
      transition: p,
      paper: m,
      ...w
    }
  }, I = Ts({
    elementType: S.root,
    externalSlotProps: w.root,
    ownerState: C,
    className: [N.root, a]
  }), [R, $] = we("paper", {
    className: N.paper,
    elementType: Tf,
    externalForwardedProps: d,
    shouldForwardComponentProp: !0,
    ownerState: C
  }), [j, G] = we("list", {
    className: Q(N.list, l.className),
    elementType: Cf,
    shouldForwardComponentProp: !0,
    externalForwardedProps: d,
    getSlotProps: (B) => ({
      ...B,
      onKeyDown: (P) => {
        var L;
        Y(P), (L = B.onKeyDown) == null || L.call(B, P);
      }
    }),
    ownerState: C
  }), V = typeof d.slotProps.transition == "function" ? d.slotProps.transition(C) : d.slotProps.transition;
  return /* @__PURE__ */ E.jsx(Ef, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: v ? "right" : "left"
    },
    transformOrigin: v ? bf : vf,
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
      root: I,
      paper: $,
      backdrop: typeof w.backdrop == "function" ? w.backdrop(C) : w.backdrop,
      transition: {
        ...V,
        onEntering: (...B) => {
          var P;
          F(...B), (P = V == null ? void 0 : V.onEntering) == null || P.call(V, ...B);
        }
      }
    },
    open: f,
    ref: n,
    transitionDuration: y,
    ownerState: C,
    ...O,
    classes: h,
    children: /* @__PURE__ */ E.jsx(j, {
      actions: A,
      autoFocus: i && (W === -1 || c),
      autoFocusItem: M,
      variant: x,
      ...G,
      children: s
    })
  });
});
process.env.NODE_ENV !== "production" && (Ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: r.oneOfType([Vt, r.func]),
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
const Sf = Ds;
function Of(e) {
  return pe("MuiMenuItem", e);
}
const Rf = ge("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Xt = Rf, wf = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, $f = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: o,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, l = ve({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", o && "divider", s && "selected"]
  }, Of, a);
  return {
    ...a,
    ...l
  };
}, Pf = X(dn, {
  shouldForwardProp: (e) => Wt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: wf
})(Oe(({
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
  [`&.${Xt.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Xt.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Xt.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Xt.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Xt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${ti.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${ti.inset}`]: {
    marginLeft: 52
  },
  [`& .${At.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${At.inset}`]: {
    paddingLeft: 36
  },
  [`& .${qo.root}`]: {
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
      [`& .${qo.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Bs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    className: h,
    ...y
  } = o, b = T.useContext(Ye), p = T.useMemo(() => ({
    dense: a || b.dense || !1,
    disableGutters: l
  }), [b.dense, a, l]), x = T.useRef(null);
  Ft(() => {
    i && (x.current ? x.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const S = {
    ...o,
    dense: p.dense,
    divider: c,
    disableGutters: l
  }, w = $f(o), O = _e(x, n);
  let v;
  return o.disabled || (v = m !== void 0 ? m : -1), /* @__PURE__ */ E.jsx(Ye.Provider, {
    value: p,
    children: /* @__PURE__ */ E.jsx(Pf, {
      ref: O,
      role: f,
      tabIndex: v,
      component: s,
      focusVisibleClassName: Q(w.focusVisible, u),
      className: Q(w.root, h),
      ...y,
      ownerState: S,
      classes: w
    })
  });
});
process.env.NODE_ENV !== "production" && (Bs.propTypes = {
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
const vn = Bs, If = dt(/* @__PURE__ */ E.jsx("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), "MoreVertRounded"), Ls = dt([/* @__PURE__ */ E.jsx("path", {
  d: "M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
}, "0"), /* @__PURE__ */ E.jsx("path", {
  d: "m20.65 11.65-2.79-2.79c-.32-.32-.86-.1-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
}, "1")], "LogoutRounded"), kf = ({
  userName: e = "User Name",
  userEmail: t = "user@email.com",
  userAvatar: n,
  onLogout: o,
  onProfileClick: i,
  onAccountClick: s,
  onSettingsClick: a
}) => {
  const [c, l] = T.useState(null), u = !!c, f = (y) => {
    l(y.currentTarget);
  }, m = () => {
    l(null);
  }, h = (y) => {
    y == null || y(), m();
  };
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxs(
      at,
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
          /* @__PURE__ */ E.jsx(
            ms,
            {
              sizes: "small",
              alt: e,
              src: n,
              sx: { width: 36, height: 36 }
            }
          ),
          /* @__PURE__ */ E.jsxs(hs, { sx: { mr: "auto" }, children: [
            /* @__PURE__ */ E.jsx(
              Be,
              {
                variant: "body2",
                sx: { fontWeight: 500, lineHeight: "16px" },
                children: e
              }
            ),
            /* @__PURE__ */ E.jsx(
              Be,
              {
                variant: "caption",
                sx: { color: "text.secondary" },
                children: t
              }
            )
          ] }),
          /* @__PURE__ */ E.jsx(
            Kr,
            {
              size: "small",
              onClick: f,
              sx: { borderColor: "transparent" },
              children: /* @__PURE__ */ E.jsx(If, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ E.jsxs(
      Sf,
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
          /* @__PURE__ */ E.jsx(vn, { onClick: () => h(i), children: "Profile" }),
          /* @__PURE__ */ E.jsx(vn, { onClick: () => h(s), children: "My account" }),
          /* @__PURE__ */ E.jsx(In, {}),
          /* @__PURE__ */ E.jsx(vn, { onClick: () => h(a), children: "Settings" }),
          /* @__PURE__ */ E.jsx(In, {}),
          /* @__PURE__ */ E.jsxs(vn, { onClick: () => h(o), children: [
            /* @__PURE__ */ E.jsx(Be, { sx: { flexGrow: 1 }, children: "Logout" }),
            /* @__PURE__ */ E.jsx(Ls, { fontSize: "small" })
          ] })
        ]
      }
    )
  ] });
};
function Nf(e) {
  return pe("MuiCard", e);
}
ge("MuiCard", ["root"]);
const jf = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, Nf, t);
}, Mf = X(qn, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Fs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiCard"
  }), {
    className: i,
    raised: s = !1,
    ...a
  } = o, c = {
    ...o,
    raised: s
  }, l = jf(c);
  return /* @__PURE__ */ E.jsx(Mf, {
    className: Q(l.root, i),
    elevation: s ? 8 : void 0,
    ref: n,
    ownerState: c,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
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
  raised: et(r.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Af = Fs;
function _f(e) {
  return pe("MuiCardContent", e);
}
ge("MuiCardContent", ["root"]);
const Df = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, _f, t);
}, Bf = X("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Vs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiCardContent"
  }), {
    className: i,
    component: s = "div",
    ...a
  } = o, c = {
    ...o,
    component: s
  }, l = Df(c);
  return /* @__PURE__ */ E.jsx(Bf, {
    as: s,
    className: Q(l.root, i),
    ownerState: c,
    ref: n,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (Vs.propTypes = {
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
const Lf = Vs;
function Ff(e) {
  return pe("MuiButton", e);
}
const Vf = ge("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), ht = Vf, zs = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (zs.displayName = "ButtonGroupContext");
const zf = zs, Ws = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ws.displayName = "ButtonGroupButtonContext");
const Wf = Ws, Uf = (e) => {
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
    root: ["root", a && "loading", s, `${s}${J(t)}`, `size${J(i)}`, `${s}Size${J(i)}`, `color${J(t)}`, n && "disableElevation", o && "fullWidth", a && `loadingPosition${J(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${J(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${J(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = ve(u, Ff, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Us = [{
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
}], Gf = X(dn, {
  shouldForwardProp: (e) => Wt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${J(n.color)}`], t[`size${J(n.size)}`], t[`${n.variant}Size${J(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Oe(({
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
    [`&.${ht.disabled}`]: {
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
        [`&.${ht.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${ht.disabled}`]: {
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
        [`&.${ht.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(St()).map(([o]) => ({
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
        [`&.${ht.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${ht.disabled}`]: {
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
        [`&.${ht.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Yf = X("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${J(n.size)}`]];
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
  }, ...Us]
})), Hf = X("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${J(n.size)}`]];
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
  }, ...Us]
})), qf = X("span", {
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
})), pi = X("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Gs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = T.useContext(zf), i = T.useContext(Wf), s = on(o, t), a = he({
    props: s,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: f,
    disabled: m = !1,
    disableElevation: h = !1,
    disableFocusRipple: y = !1,
    endIcon: b,
    focusVisibleClassName: p,
    fullWidth: x = !1,
    id: S,
    loading: w = null,
    loadingIndicator: O,
    loadingPosition: v = "center",
    size: C = "medium",
    startIcon: N,
    type: M,
    variant: A = "text",
    ...F
  } = a, Y = _i(S), W = O ?? /* @__PURE__ */ E.jsx(xs, {
    "aria-labelledby": Y,
    color: "inherit",
    size: 16
  }), d = {
    ...a,
    color: l,
    component: u,
    disabled: m,
    disableElevation: h,
    disableFocusRipple: y,
    fullWidth: x,
    loading: w,
    loadingIndicator: W,
    loadingPosition: v,
    size: C,
    type: M,
    variant: A
  }, I = Uf(d), R = (N || w && v === "start") && /* @__PURE__ */ E.jsx(Yf, {
    className: I.startIcon,
    ownerState: d,
    children: N || /* @__PURE__ */ E.jsx(pi, {
      className: I.loadingIconPlaceholder,
      ownerState: d
    })
  }), $ = (b || w && v === "end") && /* @__PURE__ */ E.jsx(Hf, {
    className: I.endIcon,
    ownerState: d,
    children: b || /* @__PURE__ */ E.jsx(pi, {
      className: I.loadingIconPlaceholder,
      ownerState: d
    })
  }), j = i || "", G = typeof w == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ E.jsx("span", {
      className: I.loadingWrapper,
      style: {
        display: "contents"
      },
      children: w && /* @__PURE__ */ E.jsx(qf, {
        className: I.loadingIndicator,
        ownerState: d,
        children: W
      })
    })
  ) : null;
  return /* @__PURE__ */ E.jsxs(Gf, {
    ownerState: d,
    className: Q(o.className, I.root, f, j),
    component: u,
    disabled: m || w,
    focusRipple: !y,
    focusVisibleClassName: Q(I.focusVisible, p),
    ref: n,
    type: M,
    id: w ? Y : S,
    ...F,
    classes: I,
    children: [R, v !== "end" && G, c, v === "end" && G, $]
  });
});
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
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
const Ys = Gs, Kf = dt(/* @__PURE__ */ E.jsx("path", {
  d: "m19.46 8 .79-1.75L22 5.46c.39-.18.39-.73 0-.91l-1.75-.79L19.46 2c-.18-.39-.73-.39-.91 0l-.79 1.75-1.76.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0M11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5-.79 1.75-1.75.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.73.39.91 0l.79-1.75 1.76-.79c.39-.18.39-.73 0-.91l-1.75-.79-.79-1.76c-.18-.39-.74-.39-.92 0"
}), "AutoAwesomeRounded"), Hs = ({
  title: e = "",
  message: t = "",
  buttonText: n = "",
  onButtonClick: o,
  show: i = !0
}) => i ? /* @__PURE__ */ E.jsx(Af, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ E.jsxs(Lf, { children: [
  /* @__PURE__ */ E.jsx(Kf, { fontSize: "small" }),
  /* @__PURE__ */ E.jsx(Be, { gutterBottom: !0, sx: { fontWeight: 600 }, children: e }),
  /* @__PURE__ */ E.jsx(
    Be,
    {
      variant: "body2",
      sx: { mb: 2, color: "text.secondary" },
      children: t
    }
  ),
  /* @__PURE__ */ E.jsx(
    Ys,
    {
      variant: "contained",
      size: "small",
      fullWidth: !0,
      onClick: o,
      children: n
    }
  )
] }) }) : null;
function Xf(e, t, n) {
  const o = t.getBoundingClientRect(), i = n && n.getBoundingClientRect(), s = rt(t);
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
function qs(e) {
  return typeof e == "function" ? e() : e;
}
function xn(e, t, n) {
  const o = qs(n), i = Xf(e, t, o);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const Ks = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = un(), i = {
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
    in: h,
    onEnter: y,
    onEntered: b,
    onEntering: p,
    onExit: x,
    onExited: S,
    onExiting: w,
    style: O,
    timeout: v = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = Wr,
    ...N
  } = t, M = T.useRef(null), A = _e(fn(l), M, n), F = (V) => (B) => {
    V && (B === void 0 ? V(M.current) : V(M.current, B));
  }, Y = F((V, B) => {
    xn(f, V, u), Xr(V), y && y(V, B);
  }), W = F((V, B) => {
    const P = zt({
      timeout: v,
      style: O,
      easing: m
    }, {
      mode: "enter"
    });
    V.style.webkitTransition = o.transitions.create("-webkit-transform", {
      ...P
    }), V.style.transition = o.transitions.create("transform", {
      ...P
    }), V.style.webkitTransform = "none", V.style.transform = "none", p && p(V, B);
  }), d = F(b), I = F(w), R = F((V) => {
    const B = zt({
      timeout: v,
      style: O,
      easing: m
    }, {
      mode: "exit"
    });
    V.style.webkitTransition = o.transitions.create("-webkit-transform", B), V.style.transition = o.transitions.create("transform", B), xn(f, V, u), x && x(V);
  }), $ = F((V) => {
    V.style.webkitTransition = "", V.style.transition = "", S && S(V);
  }), j = (V) => {
    a && a(M.current, V);
  }, G = T.useCallback(() => {
    M.current && xn(f, M.current, u);
  }, [f, u]);
  return T.useEffect(() => {
    if (h || f === "down" || f === "right")
      return;
    const V = ys(() => {
      M.current && xn(f, M.current, u);
    }), B = rt(M.current);
    return B.addEventListener("resize", V), () => {
      V.clear(), B.removeEventListener("resize", V);
    };
  }, [f, h, u]), T.useEffect(() => {
    h || G();
  }, [h, G]), /* @__PURE__ */ E.jsx(C, {
    nodeRef: M,
    onEnter: Y,
    onEntered: d,
    onEntering: W,
    onExit: R,
    onExited: $,
    onExiting: I,
    addEndListener: j,
    appear: c,
    in: h,
    timeout: v,
    ...N,
    children: (V, {
      ownerState: B,
      ...P
    }) => /* @__PURE__ */ T.cloneElement(l, {
      ref: A,
      style: {
        visibility: V === "exited" && !h ? "hidden" : void 0,
        ...O,
        ...l.props.style
      },
      ...P
    })
  });
});
process.env.NODE_ENV !== "production" && (Ks.propTypes = {
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
  children: pn.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: et(r.oneOfType([Vt, r.func]), (e) => {
    if (e.open) {
      const t = qs(e.container);
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
const Jf = Ks;
function Qf(e) {
  return pe("MuiDrawer", e);
}
ge("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Xs = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, Zf = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: o
  } = e, i = {
    root: ["root", `anchor${J(n)}`],
    docked: [(o === "permanent" || o === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${J(n)}`, o !== "temporary" && `paperAnchorDocked${J(n)}`]
  };
  return ve(i, Qf, t);
}, em = X(js, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Xs
})(Oe(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), tm = X("div", {
  shouldForwardProp: Wt,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Xs
})({
  flex: "0 0 auto"
}), nm = X(qn, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${J(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${J(n.anchor)}`]];
  }
})(Oe(({
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
}))), Js = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function rm(e) {
  return ["left", "right"].includes(e);
}
function om({
  direction: e
}, t) {
  return e === "rtl" && rm(t) ? Js[t] : t;
}
const Qs = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
    props: t,
    name: "MuiDrawer"
  }), i = un(), s = Ai(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: c = "left",
    BackdropProps: l,
    children: u,
    className: f,
    elevation: m = 16,
    hideBackdrop: h = !1,
    ModalProps: {
      BackdropProps: y,
      ...b
    } = {},
    onClose: p,
    open: x = !1,
    PaperProps: S = {},
    SlideProps: w,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O,
    transitionDuration: v = a,
    variant: C = "temporary",
    slots: N = {},
    slotProps: M = {},
    ...A
  } = o, F = T.useRef(!1);
  T.useEffect(() => {
    F.current = !0;
  }, []);
  const Y = om({
    direction: s ? "rtl" : "ltr"
  }, c), d = {
    ...o,
    anchor: c,
    elevation: m,
    open: x,
    variant: C,
    ...A
  }, I = Zf(d), R = {
    slots: {
      transition: O,
      ...N
    },
    slotProps: {
      paper: S,
      transition: w,
      ...M,
      backdrop: bs(M.backdrop || {
        ...l,
        ...y
      }, {
        transitionDuration: v
      })
    }
  }, [$, j] = we("root", {
    ref: n,
    elementType: em,
    className: Q(I.root, I.modal, f),
    shouldForwardComponentProp: !0,
    ownerState: d,
    externalForwardedProps: {
      ...R,
      ...A,
      ...b
    },
    additionalProps: {
      open: x,
      onClose: p,
      hideBackdrop: h,
      slots: {
        backdrop: R.slots.backdrop
      },
      slotProps: {
        backdrop: R.slotProps.backdrop
      }
    }
  }), [G, V] = we("paper", {
    elementType: nm,
    shouldForwardComponentProp: !0,
    className: Q(I.paper, S.className),
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
  }), [B, P] = we("docked", {
    elementType: tm,
    ref: n,
    className: Q(I.root, I.docked, f),
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: A
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [L, q] = we("transition", {
    elementType: Jf,
    ownerState: d,
    externalForwardedProps: R,
    additionalProps: {
      in: x,
      direction: Js[Y],
      timeout: v,
      appear: F.current
    }
  }), H = /* @__PURE__ */ E.jsx(G, {
    ...V,
    children: u
  });
  if (C === "permanent")
    return /* @__PURE__ */ E.jsx(B, {
      ...P,
      children: H
    });
  const K = /* @__PURE__ */ E.jsx(L, {
    ...q,
    children: H
  });
  return C === "persistent" ? /* @__PURE__ */ E.jsx(B, {
    ...P,
    children: K
  }) : /* @__PURE__ */ E.jsx($, {
    ...j,
    children: K
  });
});
process.env.NODE_ENV !== "production" && (Qs.propTypes = {
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
  elevation: Bt,
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
const im = Qs, sm = dt(/* @__PURE__ */ E.jsx("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z"
}), "NotificationsRounded"), am = (e) => {
  const t = T.useRef({});
  return T.useEffect(() => {
    t.current = e;
  }), t.current;
}, Zs = am;
function cm(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: o = 99,
    showZero: i = !1
  } = e, s = Zs({
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
function lm(e) {
  return pe("MuiBadge", e);
}
const um = ge("MuiBadge", [
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
]), st = um, mr = 10, gr = 4, dm = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: o,
    overlap: i,
    variant: s,
    classes: a = {}
  } = e, c = {
    root: ["root"],
    badge: ["badge", s, o && "invisible", `anchorOrigin${J(n.vertical)}${J(n.horizontal)}`, `anchorOrigin${J(n.vertical)}${J(n.horizontal)}${J(i)}`, `overlap${J(i)}`, t !== "default" && `color${J(t)}`]
  };
  return ve(c, lm, a);
}, pm = X("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), fm = X("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${J(n.anchorOrigin.vertical)}${J(n.anchorOrigin.horizontal)}${J(n.overlap)}`], n.color !== "default" && t[`color${J(n.color)}`], n.invisible && t.invisible];
  }
})(Oe(({
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
  minWidth: mr * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: mr * 2,
  borderRadius: mr,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(e.palette).filter(St(["contrastText"])).map(([t]) => ({
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
      borderRadius: gr,
      height: gr * 2,
      minWidth: gr * 2,
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
      [`&.${st.invisible}`]: {
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
      [`&.${st.invisible}`]: {
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
      [`&.${st.invisible}`]: {
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
      [`&.${st.invisible}`]: {
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
      [`&.${st.invisible}`]: {
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
      [`&.${st.invisible}`]: {
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
      [`&.${st.invisible}`]: {
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
      [`&.${st.invisible}`]: {
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
function fi(e) {
  return {
    vertical: (e == null ? void 0 : e.vertical) ?? "top",
    horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
  };
}
const ea = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    color: h = "default",
    invisible: y = !1,
    max: b = 99,
    badgeContent: p,
    slots: x,
    slotProps: S,
    showZero: w = !1,
    variant: O = "standard",
    ...v
  } = o, {
    badgeContent: C,
    invisible: N,
    max: M,
    displayValue: A
  } = cm({
    max: b,
    invisible: y,
    badgeContent: p,
    showZero: w
  }), F = Zs({
    anchorOrigin: fi(i),
    color: h,
    overlap: m,
    variant: O,
    badgeContent: p
  }), Y = N || C == null && O !== "dot", {
    color: W = h,
    overlap: d = m,
    anchorOrigin: I,
    variant: R = O
  } = Y ? F : o, $ = fi(I), j = R !== "dot" ? A : void 0, G = {
    ...o,
    badgeContent: C,
    invisible: Y,
    max: M,
    displayValue: j,
    showZero: w,
    anchorOrigin: $,
    color: W,
    overlap: d,
    variant: R
  }, V = dm(G), B = {
    slots: {
      root: (x == null ? void 0 : x.root) ?? l.Root,
      badge: (x == null ? void 0 : x.badge) ?? l.Badge
    },
    slotProps: {
      root: (S == null ? void 0 : S.root) ?? u.root,
      badge: (S == null ? void 0 : S.badge) ?? u.badge
    }
  }, [P, L] = we("root", {
    elementType: pm,
    externalForwardedProps: {
      ...B,
      ...v
    },
    ownerState: G,
    className: Q(V.root, s),
    ref: n,
    additionalProps: {
      as: c
    }
  }), [q, H] = we("badge", {
    elementType: fm,
    externalForwardedProps: B,
    ownerState: G,
    className: V.badge
  });
  return /* @__PURE__ */ E.jsxs(P, {
    ...L,
    children: [f, /* @__PURE__ */ E.jsx(q, {
      ...H,
      children: j
    })]
  });
});
process.env.NODE_ENV !== "production" && (ea.propTypes = {
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
const mm = ea, gm = ({
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
  const h = (y) => {
    s == null || s(y), t();
  };
  return /* @__PURE__ */ E.jsx(
    im,
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
      children: /* @__PURE__ */ E.jsxs(
        at,
        {
          sx: {
            maxWidth: "70dvw",
            height: "100%"
          },
          children: [
            /* @__PURE__ */ E.jsxs(at, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [
              /* @__PURE__ */ E.jsxs(
                at,
                {
                  direction: "row",
                  sx: { gap: 1, alignItems: "center", flexGrow: 1, p: 1 },
                  children: [
                    /* @__PURE__ */ E.jsx(
                      ms,
                      {
                        sizes: "small",
                        alt: a,
                        src: c,
                        sx: { width: 24, height: 24 }
                      }
                    ),
                    /* @__PURE__ */ E.jsx(Be, { component: "p", variant: "h6", children: a })
                  ]
                }
              ),
              u && /* @__PURE__ */ E.jsx(
                mm,
                {
                  color: "error",
                  variant: "dot",
                  invisible: f === 0,
                  sx: { "& .MuiBadge-badge": { right: 2, top: 2 } },
                  children: /* @__PURE__ */ E.jsx(Kr, { size: "small", children: /* @__PURE__ */ E.jsx(sm, {}) })
                }
              )
            ] }),
            /* @__PURE__ */ E.jsx(In, {}),
            /* @__PURE__ */ E.jsxs(at, { sx: { flexGrow: 1 }, children: [
              /* @__PURE__ */ E.jsx(
                ps,
                {
                  mainLinks: n,
                  secondaryLinks: o,
                  activePath: i,
                  onLinkClick: h
                }
              ),
              /* @__PURE__ */ E.jsx(In, {})
            ] }),
            (m == null ? void 0 : m.show) && /* @__PURE__ */ E.jsx(Hs, { ...m }),
            /* @__PURE__ */ E.jsx(at, { sx: { p: 2 }, children: /* @__PURE__ */ E.jsx(
              Ys,
              {
                variant: "outlined",
                fullWidth: !0,
                startIcon: /* @__PURE__ */ E.jsx(Ls, {}),
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
function hm(e) {
  return pe("MuiAppBar", e);
}
ge("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const ym = (e) => {
  const {
    color: t,
    position: n,
    classes: o
  } = e, i = {
    root: ["root", `color${J(t)}`, `position${J(n)}`]
  };
  return ve(i, hm, o);
}, mi = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, bm = X(qn, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${J(n.position)}`], t[`color${J(n.color)}`]];
  }
})(Oe(({
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
  }, ...Object.entries(e.palette).filter(St(["contrastText"])).map(([t]) => ({
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
        backgroundColor: e.vars ? mi(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? mi(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
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
}))), ta = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
  }, f = ym(u);
  return /* @__PURE__ */ E.jsx(bm, {
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: Q(f.root, i, c === "fixed" && "mui-fixed"),
    ref: n,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (ta.propTypes = {
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
const vm = ta;
function xm(e) {
  return pe("MuiToolbar", e);
}
ge("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const Em = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: o
  } = e;
  return ve({
    root: ["root", !n && "gutters", o]
  }, xm, t);
}, Tm = X("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(Oe(({
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
}))), na = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
  }, f = Em(u);
  return /* @__PURE__ */ E.jsx(Tm, {
    as: s,
    className: Q(f.root, i),
    ref: n,
    ownerState: u,
    ...l
  });
});
process.env.NODE_ENV !== "production" && (na.propTypes = {
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
const Cm = na, Sm = dt(/* @__PURE__ */ E.jsx("path", {
  d: "M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
}), "MenuRounded"), Om = dt(/* @__PURE__ */ E.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz"), Rm = X(dn, {
  name: "MuiBreadcrumbCollapsed"
})(Oe(({
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
      backgroundColor: Er(e.palette.grey[200], 0.12)
    } : {
      backgroundColor: Er(e.palette.grey[600], 0.12)
    }
  }
}))), wm = X(Om)({
  width: 24,
  height: 16
});
function ra(e) {
  const {
    slots: t = {},
    slotProps: n = {},
    ...o
  } = e, i = e;
  return /* @__PURE__ */ E.jsx("li", {
    children: /* @__PURE__ */ E.jsx(Rm, {
      focusRipple: !0,
      ...o,
      ownerState: i,
      children: /* @__PURE__ */ E.jsx(wm, {
        as: t.CollapsedIcon,
        ownerState: i,
        ...n.collapsedIcon
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (ra.propTypes = {
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
function $m(e) {
  return pe("MuiBreadcrumbs", e);
}
const Pm = ge("MuiBreadcrumbs", ["root", "ol", "li", "separator"]), Mr = Pm, Im = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  }, $m, t);
}, km = X(Be, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${Mr.li}`]: t.li
  }, t.root]
})({}), Nm = X("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol"
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
}), jm = X("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator"
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function Mm(e, t, n, o) {
  return e.reduce((i, s, a) => (a < e.length - 1 ? i = i.concat(s, /* @__PURE__ */ E.jsx(jm, {
    "aria-hidden": !0,
    className: t,
    ownerState: o,
    children: n
  }, `separator-${a}`)) : i.push(s), i), []);
}
const oa = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const o = he({
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
    maxItems: h = 8,
    separator: y = "/",
    ...b
  } = o, [p, x] = T.useState(!1), S = {
    ...o,
    component: a,
    expanded: p,
    expandText: u,
    itemsAfterCollapse: f,
    itemsBeforeCollapse: m,
    maxItems: h,
    separator: y
  }, w = Im(S), O = Ts({
    elementType: c.CollapsedIcon,
    externalSlotProps: l.collapsedIcon,
    ownerState: S
  }), v = T.useRef(null), C = (M) => {
    const A = () => {
      x(!0);
      const F = v.current.querySelector("a[href],button,[tabindex]");
      F && F.focus();
    };
    return m + f >= M.length ? (process.env.NODE_ENV !== "production" && console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.", `itemsAfterCollapse={${f}} + itemsBeforeCollapse={${m}} >= maxItems={${h}}`].join(`
`)), M) : [...M.slice(0, m), /* @__PURE__ */ E.jsx(ra, {
      "aria-label": u,
      slots: {
        CollapsedIcon: c.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: O
      },
      onClick: A
    }, "ellipsis"), ...M.slice(M.length - f, M.length)];
  }, N = T.Children.toArray(i).filter((M) => (process.env.NODE_ENV !== "production" && Tt.isFragment(M) && console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ T.isValidElement(M))).map((M, A) => /* @__PURE__ */ E.jsx("li", {
    className: w.li,
    children: M
  }, `child-${A}`));
  return /* @__PURE__ */ E.jsx(km, {
    ref: n,
    component: a,
    color: "textSecondary",
    className: Q(w.root, s),
    ownerState: S,
    ...b,
    children: /* @__PURE__ */ E.jsx(Nm, {
      className: w.ol,
      ref: v,
      ownerState: S,
      children: Mm(p || h && N.length <= h ? N : C(N), w.separator, y, S)
    })
  });
});
process.env.NODE_ENV !== "production" && (oa.propTypes = {
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
  itemsAfterCollapse: Bt,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: Bt,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: Bt,
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
const Am = oa, _m = dt(/* @__PURE__ */ E.jsx("path", {
  d: "M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"
}), "NavigateNextRounded"), Dm = X(Am)(({ theme: e }) => ({
  margin: e.spacing(1, 0),
  [`& .${Mr.separator}`]: {
    color: (e.vars || e).palette.action.disabled,
    margin: 1
  },
  [`& .${Mr.ol}`]: {
    alignItems: "center"
  }
})), Bm = ({
  appName: e = "Dashboard",
  pageName: t = "Home"
}) => /* @__PURE__ */ E.jsxs(
  Dm,
  {
    "aria-label": "breadcrumb",
    separator: /* @__PURE__ */ E.jsx(_m, { fontSize: "small" }),
    children: [
      /* @__PURE__ */ E.jsx(Be, { variant: "body1", children: e }),
      /* @__PURE__ */ E.jsx(
        Be,
        {
          variant: "body1",
          sx: { color: "text.primary", fontWeight: 600 },
          children: t
        }
      )
    ]
  }
), Lm = X(Cm)({
  width: "100%",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "8px",
  flexShrink: 0
}), Fm = ({
  appName: e = "Dashboard",
  pageName: t = "Home",
  onMenuClick: n,
  showMenuButton: o = !0,
  headerStyles: i
}) => /* @__PURE__ */ E.jsx(
  vm,
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
    children: /* @__PURE__ */ E.jsx(Lm, { variant: "dense", children: /* @__PURE__ */ E.jsxs(
      at,
      {
        direction: "row",
        sx: {
          alignItems: "center",
          flexGrow: 1,
          width: "100%",
          gap: 1
        },
        children: [
          /* @__PURE__ */ E.jsx(hs, { sx: { mr: "auto" }, children: /* @__PURE__ */ E.jsx(
            Bm,
            {
              appName: e,
              pageName: t
            }
          ) }),
          o && /* @__PURE__ */ E.jsx(
            Kr,
            {
              "aria-label": "menu",
              onClick: n,
              sx: {
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "action.hover"
                }
              },
              children: /* @__PURE__ */ E.jsx(Sm, {})
            }
          )
        ]
      }
    ) })
  }
), Vm = 10 * 60 * 1e3, zm = "/api/auth/refresh", gi = "/login", Xm = ({
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
  userAvatar: h,
  onLogout: y,
  onProfileClick: b,
  onAccountClick: p,
  onSettingsClick: x,
  showNotifications: S = !1,
  notificationCount: w = 0,
  alertProps: O,
  style: v,
  headerStyles: C,
  sidebarStyles: N,
  contentStyles: M
}) => {
  const A = Ia(), F = ka(A.breakpoints.down("md")), [Y, W] = $a(!1), d = () => {
    W(!Y);
  }, I = () => {
    W(!1);
  };
  return Pa(() => {
    if (!c)
      return;
    (async () => {
      try {
        const $ = mt.get("tokenExpiry");
        if (!$) {
          console.warn("No tokenExpiry cookie found");
          return;
        }
        const j = /* @__PURE__ */ new Date(), V = new Date($).getTime() - j.getTime();
        if (V <= Vm && V > 0) {
          console.log("Token expires soon, refreshing...");
          try {
            const B = await fetch(zm, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              credentials: "include"
              // Include cookies in the request
            });
            if (!B.ok)
              throw new Error(
                `Refresh token API failed with status: ${B.status}`
              );
            const P = await B.json();
            P.token && mt.set("token", P.token, {
              expires: 7,
              // 7 days
              secure: !0,
              sameSite: "strict"
            }), P.tokenExpiry && mt.set("tokenExpiry", P.tokenExpiry, {
              expires: 7,
              // 7 days
              secure: !0,
              sameSite: "strict"
            }), console.log("Token refreshed successfully");
          } catch (B) {
            console.error("Token refresh failed:", B), mt.remove("token"), mt.remove("tokenExpiry"), window.location.href = gi;
          }
        } else
          V <= 0 ? (console.warn("Token has expired, redirecting to login"), mt.remove("token"), mt.remove("tokenExpiry"), window.location.href = gi) : console.log("Token is still valid, no refresh needed");
      } catch ($) {
        console.error("Error checking token expiry:", $);
      }
    })();
  }, [c]), /* @__PURE__ */ E.jsxs(mn, { sx: { display: "flex", height: "100vh", ...v }, children: [
    /* @__PURE__ */ E.jsx(Na, {}),
    s && /* @__PURE__ */ E.jsx(
      Fm,
      {
        appName: o,
        pageName: i,
        onMenuClick: F && a ? d : void 0,
        showMenuButton: F && a,
        headerStyles: C
      }
    ),
    a && !F && /* @__PURE__ */ E.jsxs(
      ja,
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
          /* @__PURE__ */ E.jsx(
            mn,
            {
              sx: {
                display: "flex",
                mt: "calc(var(--template-frame-height, 0px) + 4px)",
                p: 1.5
              }
            }
          ),
          /* @__PURE__ */ E.jsxs(
            mn,
            {
              sx: {
                overflow: "auto",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              },
              children: [
                /* @__PURE__ */ E.jsx(
                  ps,
                  {
                    mainLinks: t,
                    secondaryLinks: n,
                    activePath: l,
                    onLinkClick: u
                  }
                ),
                (O == null ? void 0 : O.show) && /* @__PURE__ */ E.jsx(Hs, { ...O })
              ]
            }
          ),
          /* @__PURE__ */ E.jsx(
            kf,
            {
              userName: f,
              userEmail: m,
              userAvatar: h,
              onLogout: y,
              onProfileClick: b,
              onAccountClick: p,
              onSettingsClick: x
            }
          )
        ]
      }
    ),
    a && F && /* @__PURE__ */ E.jsx(
      gm,
      {
        open: Y,
        onClose: I,
        mainLinks: t,
        secondaryLinks: n,
        activePath: l,
        onLinkClick: u,
        userName: f,
        userEmail: m,
        userAvatar: h,
        onLogout: y,
        showNotifications: S,
        notificationCount: w,
        alertProps: O
      }
    ),
    /* @__PURE__ */ E.jsx(
      mn,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          m: 1,
          width: F ? "100%" : a ? "calc(100% - 240px)" : "100%",
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
  Xm as LumoraWrapper,
  Xm as default
};
