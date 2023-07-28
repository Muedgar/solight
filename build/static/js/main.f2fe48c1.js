/*! For license information please see main.f2fe48c1.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(m, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          N = Symbol.for("react.portal"),
          E = Symbol.for("react.fragment"),
          k = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          j = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var I = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (I && e[I]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          D = Object.assign;
        function M(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var A = !1;
        function B(e, t) {
          if (!e || A) return "";
          A = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (A = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case N:
              return "Portal";
            case S:
              return "Profiler";
            case k:
              return "StrictMode";
            case j:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === k ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function oe(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ne = null,
          Ee = null,
          ke = null;
        function Se(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof Ne) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = xa(t)), Ne(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Ee ? (ke ? ke.push(e) : (ke = [e])) : (Ee = e);
        }
        function _e() {
          if (Ee) {
            var e = Ee,
              t = ke;
            if (((ke = Ee = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function je() {}
        var Oe = !1;
        function Pe(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Te(e, t, n);
          } finally {
            (Oe = !1), (null !== Ee || null !== ke) && (je(), _e());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (u)
          try {
            var Ie = {};
            Object.defineProperty(Ie, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Ie, Ie),
              window.removeEventListener("test", Ie, Ie);
          } catch (ue) {
            Le = !1;
          }
        function ze(e, t, n, r, a, o, i, l, s) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Fe = !1,
          De = null,
          Me = !1,
          Ae = null,
          Be = {
            onError: function (e) {
              (Fe = !0), (De = e);
            },
          };
        function Ue(e, t, n, r, a, o, i, l, s) {
          (Fe = !1), (De = null), ze.apply(Be, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (He(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return We(a), e;
                    if (i === r) return We(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = dt(l)) : 0 !== (o &= i) && (r = dt(o));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          Nt,
          Et,
          kt,
          St,
          Ct = !1,
          _t = [],
          Tt = null,
          jt = null,
          Ot = null,
          Pt = new Map(),
          Rt = new Map(),
          Lt = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tt = null;
              break;
            case "dragenter":
            case "dragleave":
              jt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && Nt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && Nt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function At(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function Bt() {
          (Ct = !1),
            null !== Tt && Mt(Tt) && (Tt = null),
            null !== jt && Mt(jt) && (jt = null),
            null !== Ot && Mt(Ot) && (Ot = null),
            Pt.forEach(At),
            Rt.forEach(At);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Ht(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < _t.length) {
            Ut(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
              var r = _t[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Tt && Ut(Tt, e),
              null !== jt && Ut(jt, e),
              null !== Ot && Ut(Ot, e),
              Pt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && Lt.shift();
        }
        var Vt = w.ReactCurrentBatchConfig,
          Wt = !0;
        function $t(e, t, n, r) {
          var a = bt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if (Wt) {
            var a = Yt(e, t, n, r);
            if (null === a) Wr(e, t, r, Kt, n), zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Tt = Ft(Tt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (jt = Ft(jt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = Ft(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Pt.set(o, Ft(Pt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Rt.set(o, Ft(Rt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && xt(o),
                  null === (o = Yt(e, t, n, r)) && Wr(e, t, r, Kt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Yt(e, t, n, r) {
          if (((Kt = null), null !== (e = ya((e = xe(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Gt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          dn = D({}, cn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = D({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          mn = an(pn),
          hn = an(D({}, pn, { dataTransfer: 0 })),
          vn = an(D({}, dn, { relatedTarget: 0 })),
          gn = an(
            D({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = D({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(D({}, cn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Nn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Sn() {
          return kn;
        }
        var Cn = D({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Nn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          _n = an(Cn),
          Tn = an(
            D({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          jn = an(
            D({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            })
          ),
          On = an(
            D({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pn = D({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(Pn),
          Ln = [9, 13, 27, 32],
          In = u && "CompositionEvent" in window,
          zn = null;
        u && "documentMode" in document && (zn = document.documentMode);
        var Fn = u && "TextEvent" in window && !zn,
          Dn = u && (!In || (zn && 8 < zn && 11 >= zn)),
          Mn = String.fromCharCode(32),
          An = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ce(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Kn(e) {
          Mr(e, 0);
        }
        function Yn(e) {
          if (q(wa(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (u) {
          var Jn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            $n(t, qn, e, xe(e)), Pe(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = ur(n, o));
                var i = ur(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = u && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== K(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(gr, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Nr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Er = {},
          kr = {};
        function Sr(e) {
          if (Er[e]) return Er[e];
          if (!Nr[e]) return e;
          var t,
            n = Nr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kr) return (Er[e] = n[t]);
          return e;
        }
        u &&
          ((kr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Nr.animationend.animation,
            delete Nr.animationiteration.animation,
            delete Nr.animationstart.animation),
          "TransitionEvent" in window || delete Nr.transitionend.transition);
        var Cr = Sr("animationend"),
          _r = Sr("animationiteration"),
          Tr = Sr("animationstart"),
          jr = Sr("transitionend"),
          Or = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, t) {
          Or.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < Pr.length; Lr++) {
          var Ir = Pr[Lr];
          Rr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        Rr(Cr, "onAnimationEnd"),
          Rr(_r, "onAnimationIteration"),
          Rr(Tr, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(jr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr)
          );
        function Dr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, s, c) {
              if ((Ue.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(o(198));
                var u = De;
                (Fe = !1), (De = null), Me || ((Me = !0), (Ae = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Dr(a, l, c), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, l, c), (o = s);
                }
            }
          }
          if (Me) throw ((e = Ae), (Me = !1), (Ae = null), e);
        }
        function Ar(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Fr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Br("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ya(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = o,
              a = xe(n),
              i = [];
            e: {
              var l = Or.get(e);
              if (void 0 !== l) {
                var s = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = _n;
                    break;
                  case "focusin":
                    (c = "focus"), (s = vn);
                    break;
                  case "focusout":
                    (c = "blur"), (s = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = jn;
                    break;
                  case Cr:
                  case _r:
                  case Tr:
                    s = gn;
                    break;
                  case jr:
                    s = On;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Tn;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== l ? l + "Capture" : null) : l;
                u = [];
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== f &&
                        null != (h = Re(m, f)) &&
                        u.push($r(m, h, p))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < u.length &&
                  ((l = new s(l, c, null, n, a)),
                  i.push({ event: l, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ya(c) && !c[ma])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ya(c)
                          : null) &&
                        (c !== (d = He(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((u = mn),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Tn),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (m = "pointer")),
                  (d = null == s ? l : wa(s)),
                  (p = null == c ? l : wa(c)),
                  ((l = new u(h, m + "leave", s, n, a)).target = d),
                  (l.relatedTarget = p),
                  (h = null),
                  ya(a) === r &&
                    (((u = new u(f, m + "enter", c, n, a)).target = p),
                    (u.relatedTarget = d),
                    (h = u)),
                  (d = h),
                  s && c)
                )
                  e: {
                    for (f = c, m = 0, p = u = s; p; p = qr(p)) m++;
                    for (p = 0, h = f; h; h = qr(h)) p++;
                    for (; 0 < m - p; ) (u = qr(u)), m--;
                    for (; 0 < p - m; ) (f = qr(f)), p--;
                    for (; m--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = qr(u)), (f = qr(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== s && Kr(i, l, s, u, !1),
                  null !== c && null !== d && Kr(i, d, c, u, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var v = Gn;
              else if (Wn(l))
                if (Xn) v = ir;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (v = or);
              switch (
                (v && (v = v(e, r))
                  ? $n(i, v, n, a)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var y;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Dn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Hn = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((An = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && An ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!In && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Mr(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Re(e, n)) && r.unshift($r(e, o, a)),
              null != (o = Re(e, t)) && r.push($r(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              c = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c),
              a
                ? null != (s = Re(n, o)) && i.unshift($r(n, s, l))
                : a || (null != (s = Re(n, o)) && i.push($r(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Gr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ht(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ma = "__reactContainer$" + da,
          ha = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var Na = [],
          Ea = -1;
        function ka(e) {
          return { current: e };
        }
        function Sa(e) {
          0 > Ea || ((e.current = Na[Ea]), (Na[Ea] = null), Ea--);
        }
        function Ca(e, t) {
          Ea++, (Na[Ea] = e.current), (e.current = t);
        }
        var _a = {},
          Ta = ka(_a),
          ja = ka(!1),
          Oa = _a;
        function Pa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return _a;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Sa(ja), Sa(Ta);
        }
        function Ia(e, t, n) {
          if (Ta.current !== _a) throw Error(o(168));
          Ca(Ta, t), Ca(ja, n);
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, V(e) || "Unknown", a));
          return D({}, n, r);
        }
        function Fa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              _a),
            (Oa = Ta.current),
            Ca(Ta, e),
            Ca(ja, ja.current),
            !0
          );
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = za(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Sa(ja),
              Sa(Ta),
              Ca(Ta, e))
            : Sa(ja),
            Ca(ja, n);
        }
        var Ma = null,
          Aa = !1,
          Ba = !1;
        function Ua(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function Ha() {
          if (!Ba && null !== Ma) {
            Ba = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ma;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ma = null), (Aa = !1);
            } catch (a) {
              throw (null !== Ma && (Ma = Ma.slice(e + 1)), qe(Ze, Ha), a);
            } finally {
              (bt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Va = [],
          Wa = 0,
          $a = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Ya = null,
          Ga = 1,
          Xa = "";
        function Ja(e, t) {
          (Va[Wa++] = Qa), (Va[Wa++] = $a), ($a = e), (Qa = t);
        }
        function Za(e, t, n) {
          (qa[Ka++] = Ga), (qa[Ka++] = Xa), (qa[Ka++] = Ya), (Ya = e);
          var r = Ga;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ga = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ga = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; )
            ($a = Va[--Wa]), (Va[Wa] = null), (Qa = Va[--Wa]), (Va[Wa] = null);
          for (; e === Ya; )
            (Ya = qa[--Ka]),
              (qa[Ka] = null),
              (Xa = qa[--Ka]),
              (qa[Ka] = null),
              (Ga = qa[--Ka]),
              (qa[Ka] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Rc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Ga, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Rc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function uo(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return uo(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = ca(t.nextSibling));
          }
          if ((uo(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ca(e.nextSibling);
        }
        function mo() {
          (ro = no = null), (ao = !1);
        }
        function ho(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var vo = w.ReactCurrentBatchConfig;
        function go(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yo = ka(null),
          bo = null,
          wo = null,
          xo = null;
        function No() {
          xo = wo = bo = null;
        }
        function Eo(e) {
          var t = yo.current;
          Sa(yo), (e._currentValue = t);
        }
        function ko(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function So(e, t) {
          (bo = e),
            (xo = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Co(e) {
          var t = e._currentValue;
          if (xo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var _o = null;
        function To(e) {
          null === _o ? (_o = [e]) : _o.push(e);
        }
        function jo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), To(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Oo(e, r)
          );
        }
        function Oo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Po = !1;
        function Ro(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Lo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Io(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function zo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & js))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Oo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), To(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Oo(e, n)
          );
        }
        function Fo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Do(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Mo(e, t, n, r) {
          var a = e.updateQueue;
          Po = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              c = s.next;
            (s.next = null), null === i ? (o = c) : (i.next = c), (i = s);
            var u = e.alternate;
            null !== u &&
              (l = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (u.firstBaseUpdate = c) : (l.next = c),
              (u.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (i = 0, u = c = s = null, l = o; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = l;
                  switch (((f = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        d = m.call(p, d, f);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (m = h.payload)
                              ? m.call(p, d, f)
                              : m) ||
                        void 0 === f
                      )
                        break e;
                      d = D({}, d, f);
                      break e;
                    case 2:
                      Po = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === u ? ((c = u = p), (s = d)) : (u = u.next = p),
                  (i |= f);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === u && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Ds |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Ao(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Bo = new r.Component().refs;
        function Uo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ho = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              o = Io(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (rc(t, e, a, r), Fo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              o = Io(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, a)) && (rc(t, e, a, r), Fo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              r = nc(e),
              a = Io(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = zo(e, a, r)) && (rc(t, e, r, n), Fo(t, e, r));
          },
        };
        function Vo(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function Wo(e, t, n) {
          var r = !1,
            a = _a,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Co(o))
              : ((a = Ra(t) ? Oa : Ta.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Pa(e, a)
                  : _a)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ho),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function $o(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ho.enqueueReplaceState(t, t.state, null);
        }
        function Qo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Bo), Ro(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Co(o))
            : ((o = Ra(t) ? Oa : Ta.current), (a.context = Pa(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Uo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Ho.enqueueReplaceState(a, a.state, null),
              Mo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Bo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Ko(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Yo(e) {
          return (0, e._init)(e._payload);
        }
        function Go(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ic(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Mc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === E
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === R &&
                    Yo(o) === t.type))
              ? (((r = a(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
              : (((r = zc(n.type, n.key, n.props, null, e.mode, r)).ref = qo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ac(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Fc(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Mc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = zc(t.type, t.key, t.props, null, e.mode, n)).ref = qo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case N:
                  return ((t = Ac(t, e.mode, n)).return = e), t;
                case R:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = Fc(t, e.mode, n, null)).return = e), t;
              Ko(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case N:
                  return n.key === a ? u(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== a ? null : d(e, t, n, r, null);
              Ko(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case N:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return m(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || z(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              Ko(t, r);
            }
            return null;
          }
          function h(a, o, l, s) {
            for (
              var c = null, u = null, d = o, h = (o = 0), v = null;
              null !== d && h < l.length;
              h++
            ) {
              d.index > h ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(a, d, l[h], s);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (o = i(g, o, h)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g),
                (d = v);
            }
            if (h === l.length) return n(a, d), ao && Ja(a, h), c;
            if (null === d) {
              for (; h < l.length; h++)
                null !== (d = f(a, l[h], s)) &&
                  ((o = i(d, o, h)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return ao && Ja(a, h), c;
            }
            for (d = r(a, d); h < l.length; h++)
              null !== (v = m(d, a, h, l[h], s)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? h : v.key),
                (o = i(v, o, h)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, h),
              c
            );
          }
          function v(a, l, s, c) {
            var u = z(s);
            if ("function" !== typeof u) throw Error(o(150));
            if (null == (s = u.call(s))) throw Error(o(151));
            for (
              var d = (u = null), h = l, v = (l = 0), g = null, y = s.next();
              null !== h && !y.done;
              v++, y = s.next()
            ) {
              h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
              var b = p(a, h, y.value, c);
              if (null === b) {
                null === h && (h = g);
                break;
              }
              e && h && null === b.alternate && t(a, h),
                (l = i(b, l, v)),
                null === d ? (u = b) : (d.sibling = b),
                (d = b),
                (h = g);
            }
            if (y.done) return n(a, h), ao && Ja(a, v), u;
            if (null === h) {
              for (; !y.done; v++, y = s.next())
                null !== (y = f(a, y.value, c)) &&
                  ((l = i(y, l, v)),
                  null === d ? (u = y) : (d.sibling = y),
                  (d = y));
              return ao && Ja(a, v), u;
            }
            for (h = r(a, h); !y.done; v++, y = s.next())
              null !== (y = m(h, a, v, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? v : y.key),
                (l = i(y, l, v)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, v),
              u
            );
          }
          return function e(r, o, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === E &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var c = i.key, u = o; null !== u; ) {
                      if (u.key === c) {
                        if ((c = i.type) === E) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((o = a(u, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === R &&
                            Yo(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((o = a(u, i.props)).ref = qo(r, u, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    i.type === E
                      ? (((o = Fc(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = o))
                      : (((s = zc(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = qo(r, o, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case N:
                  e: {
                    for (u = i.key; null !== o; ) {
                      if (o.key === u) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Ac(i, r.mode, s)).return = r), (r = o);
                  }
                  return l(r);
                case R:
                  return e(r, o, (u = i._init)(i._payload), s);
              }
              if (te(i)) return h(r, o, i, s);
              if (z(i)) return v(r, o, i, s);
              Ko(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Mc(i, r.mode, s)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Xo = Go(!0),
          Jo = Go(!1),
          Zo = {},
          ei = ka(Zo),
          ti = ka(Zo),
          ni = ka(Zo);
        function ri(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Ca(ni, t), Ca(ti, e), Ca(ei, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Sa(ei), Ca(ei, t);
        }
        function oi() {
          Sa(ei), Sa(ti), Sa(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = se(t, e.type);
          t !== n && (Ca(ti, e), Ca(ei, n));
        }
        function li(e) {
          ti.current === e && (Sa(ei), Sa(ti));
        }
        var si = ka(0);
        function ci(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ui = [];
        function di() {
          for (var e = 0; e < ui.length; e++)
            ui[e]._workInProgressVersionPrimary = null;
          ui.length = 0;
        }
        var fi = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          mi = 0,
          hi = null,
          vi = null,
          gi = null,
          yi = !1,
          bi = !1,
          wi = 0,
          xi = 0;
        function Ni() {
          throw Error(o(321));
        }
        function Ei(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function ki(e, t, n, r, a, i) {
          if (
            ((mi = i),
            (hi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (gi = vi = null),
                (t.updateQueue = null),
                (fi.current = cl),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((fi.current = il),
            (t = null !== vi && null !== vi.next),
            (mi = 0),
            (gi = vi = hi = null),
            (yi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Si() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e), gi
          );
        }
        function _i() {
          if (null === vi) {
            var e = hi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vi.next;
          var t = null === gi ? hi.memoizedState : gi.next;
          if (null !== t) (gi = t), (vi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (vi = e).memoizedState,
              baseState: vi.baseState,
              baseQueue: vi.baseQueue,
              queue: vi.queue,
              next: null,
            }),
              null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Ti(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function ji(e) {
          var t = _i(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = vi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (l = null),
              c = null,
              u = i;
            do {
              var d = u.lane;
              if ((mi & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((s = c = f), (l = r)) : (c = c.next = f),
                  (hi.lanes |= d),
                  (Ds |= d);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === c ? (l = r) : (c.next = s),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (hi.lanes |= i), (Ds |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Oi(e) {
          var t = _i(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Pi() {}
        function Ri(e, t) {
          var n = hi,
            r = _i(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wl = !0)),
            (r = r.queue),
            Wi(zi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ai(9, Ii.bind(null, n, r, a, t), void 0, null),
              null === Os)
            )
              throw Error(o(349));
            0 !== (30 & mi) || Li(n, t, a);
          }
          return a;
        }
        function Li(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = hi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ii(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Fi(t) && Di(e);
        }
        function zi(e, t, n) {
          return n(function () {
            Fi(t) && Di(e);
          });
        }
        function Fi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Di(e) {
          var t = Oo(e, 1);
          null !== t && rc(t, e, 1, -1);
        }
        function Mi(e) {
          var t = Ci();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ti,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, hi, e)),
            [t.memoizedState, e]
          );
        }
        function Ai(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = hi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Bi() {
          return _i().memoizedState;
        }
        function Ui(e, t, n, r) {
          var a = Ci();
          (hi.flags |= e),
            (a.memoizedState = Ai(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Hi(e, t, n, r) {
          var a = _i();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== vi) {
            var i = vi.memoizedState;
            if (((o = i.destroy), null !== r && Ei(r, i.deps)))
              return void (a.memoizedState = Ai(t, n, o, r));
          }
          (hi.flags |= e), (a.memoizedState = Ai(1 | t, n, o, r));
        }
        function Vi(e, t) {
          return Ui(8390656, 8, e, t);
        }
        function Wi(e, t) {
          return Hi(2048, 8, e, t);
        }
        function $i(e, t) {
          return Hi(4, 2, e, t);
        }
        function Qi(e, t) {
          return Hi(4, 4, e, t);
        }
        function qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ki(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Hi(4, 4, qi.bind(null, t, e), n)
          );
        }
        function Yi() {}
        function Gi(e, t) {
          var n = _i();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ei(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = _i();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ei(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ji(e, t, n) {
          return 0 === (21 & mi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = ht()), (hi.lanes |= n), (Ds |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return _i().memoizedState;
        }
        function tl(e, t, n) {
          var r = nc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = jo(e, t, n, r))) {
            rc(n, e, r, tc()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), To(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = jo(e, t, a, r)) &&
              (rc(n, e, r, (a = tc())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === hi || (null !== t && t === hi);
        }
        function al(e, t) {
          bi = yi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var il = {
            readContext: Co,
            useCallback: Ni,
            useContext: Ni,
            useEffect: Ni,
            useImperativeHandle: Ni,
            useInsertionEffect: Ni,
            useLayoutEffect: Ni,
            useMemo: Ni,
            useReducer: Ni,
            useRef: Ni,
            useState: Ni,
            useDebugValue: Ni,
            useDeferredValue: Ni,
            useTransition: Ni,
            useMutableSource: Ni,
            useSyncExternalStore: Ni,
            useId: Ni,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Co,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Co,
            useEffect: Vi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ui(4194308, 4, qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ui(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ui(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ci();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ci();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, hi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: Mi,
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = Mi(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = hi,
                a = Ci();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Os)) throw Error(o(349));
                0 !== (30 & mi) || Li(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Vi(zi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ai(9, Ii.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ci(),
                t = Os.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ga & ~(1 << (32 - it(Ga) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Co,
            useCallback: Gi,
            useContext: Co,
            useEffect: Wi,
            useImperativeHandle: Ki,
            useInsertionEffect: $i,
            useLayoutEffect: Qi,
            useMemo: Xi,
            useReducer: ji,
            useRef: Bi,
            useState: function () {
              return ji(Ti);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return Ji(_i(), vi.memoizedState, e);
            },
            useTransition: function () {
              return [ji(Ti)[0], _i().memoizedState];
            },
            useMutableSource: Pi,
            useSyncExternalStore: Ri,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          cl = {
            readContext: Co,
            useCallback: Gi,
            useContext: Co,
            useEffect: Wi,
            useImperativeHandle: Ki,
            useInsertionEffect: $i,
            useLayoutEffect: Qi,
            useMemo: Xi,
            useReducer: Oi,
            useRef: Bi,
            useState: function () {
              return Oi(Ti);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              var t = _i();
              return null === vi
                ? (t.memoizedState = e)
                : Ji(t, vi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(Ti)[0], _i().memoizedState];
            },
            useMutableSource: Pi,
            useSyncExternalStore: Ri,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function ul(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function ml(e, t, n) {
          ((n = Io(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $s || (($s = !0), (Qs = r)), fl(0, t);
            }),
            n
          );
        }
        function hl(e, t, n) {
          (n = Io(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cc.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Io(-1, 1)).tag = 2), zo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function xl(e, t, n, r) {
          t.child = null === e ? Jo(t, null, n, r) : Xo(t, e.child, n, r);
        }
        function Nl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            So(t, a),
            (r = ki(e, t, n, r, o, a)),
            (n = Si()),
            null === e || wl
              ? (ao && n && eo(t), (t.flags |= 1), xl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function El(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Lc(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), kl(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return $l(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ic(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function kl(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $l(e, t, a);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return _l(e, t, n, r, a);
        }
        function Sl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Is, Ls),
                (Ls |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Is, Ls),
                  (Ls |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ca(Is, Ls),
                (Ls |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Is, Ls),
              (Ls |= r);
          return xl(e, t, a, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function _l(e, t, n, r, a) {
          var o = Ra(n) ? Oa : Ta.current;
          return (
            (o = Pa(t, o)),
            So(t, a),
            (n = ki(e, t, n, r, o, a)),
            (r = Si()),
            null === e || wl
              ? (ao && r && eo(t), (t.flags |= 1), xl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function Tl(e, t, n, r, a) {
          if (Ra(n)) {
            var o = !0;
            Fa(t);
          } else o = !1;
          if ((So(t, a), null === t.stateNode))
            Wl(e, t), Wo(t, n, r), Qo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Co(c))
              : (c = Pa(t, (c = Ra(n) ? Oa : Ta.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== c) && $o(t, i, r, c)),
              (Po = !1);
            var f = t.memoizedState;
            (i.state = f),
              Mo(t, r, i, a),
              (s = t.memoizedState),
              l !== r || f !== s || ja.current || Po
                ? ("function" === typeof u &&
                    (Uo(t, n, u, r), (s = t.memoizedState)),
                  (l = Po || Vo(t, n, l, r, f, s, c))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = c),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Lo(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : go(t.type, l)),
              (i.props = c),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Co(s))
                : (s = Pa(t, (s = Ra(n) ? Oa : Ta.current)));
            var p = n.getDerivedStateFromProps;
            (u =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== d || f !== s) && $o(t, i, r, s)),
              (Po = !1),
              (f = t.memoizedState),
              (i.state = f),
              Mo(t, r, i, a);
            var m = t.memoizedState;
            l !== d || f !== m || ja.current || Po
              ? ("function" === typeof p &&
                  (Uo(t, n, p, r), (m = t.memoizedState)),
                (c = Po || Vo(t, n, c, r, f, m, s) || !1)
                  ? (u ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, m, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, m, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (i.props = r),
                (i.state = m),
                (i.context = s),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return jl(e, t, n, r, o, a);
        }
        function jl(e, t, n, r, a, o) {
          Cl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Da(t, n, !1), $l(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xo(t, e.child, null, o)),
                (t.child = Xo(t, null, l, o)))
              : xl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          );
        }
        function Ol(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ia(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ia(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Pl(e, t, n, r, a) {
          return mo(), ho(a), (t.flags |= 256), xl(e, t, n, r), t.child;
        }
        var Rl,
          Ll,
          Il,
          zl,
          Fl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Dl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ml(e, t, n) {
          var r,
            a = t.pendingProps,
            i = si.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ca(si, 1 & i),
            null === e)
          )
            return (
              co(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Dc(s, a, 0, null)),
                      (e = Fc(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Dl(n)),
                      (t.memoizedState = Fl),
                      e)
                    : Al(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bl(e, t, l, (r = dl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Dc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Fc(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xo(t, e.child, null, l),
                    (t.child.memoizedState = Dl(l)),
                    (t.memoizedState = Fl),
                    i);
              if (0 === (1 & t.mode)) return Bl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Bl(e, t, l, (r = dl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), wl || s)) {
                if (null !== (r = Os)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Oo(e, a), rc(r, e, a, -1));
                }
                return vc(), Bl(e, t, l, (r = dl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ca(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Ka++] = Ga),
                    (qa[Ka++] = Xa),
                    (qa[Ka++] = Ya),
                    (Ga = e.id),
                    (Xa = e.overflow),
                    (Ya = t)),
                  (t = Al(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Ic(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Ic(r, l))
                : ((l = Fc(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Dl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Ic(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Al(e, t) {
          return (
            ((t = Dc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Bl(e, t, n, r) {
          return (
            null !== r && ho(r),
            Xo(t, e.child, null, n),
            ((e = Al(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ul(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), ko(e.return, t, n);
        }
        function Hl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Vl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((xl(e, t, r.children, n), 0 !== (2 & (r = si.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t);
                else if (19 === e.tag) Ul(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(si, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ci(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Hl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ci(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Hl(t, !0, n, null, o);
                break;
              case "together":
                Hl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ds |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ic((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ic(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ql(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Kl(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ql(t), null;
            case 1:
            case 17:
              return Ra(t.type) && La(), ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Sa(ja),
                Sa(Ta),
                di(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (lc(oo), (oo = null)))),
                Ll(e, t),
                ql(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Il(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return ql(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ar("cancel", r), Ar("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ar("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < zr.length; a++) Ar(zr[a], r);
                      break;
                    case "source":
                      Ar("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ar("error", r), Ar("load", r);
                      break;
                    case "details":
                      Ar("toggle", r);
                      break;
                    case "input":
                      G(r, i), Ar("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ar("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ar("invalid", r);
                  }
                  for (var s in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var c = i[s];
                      "children" === s
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : l.hasOwnProperty(s) &&
                          null != c &&
                          "onScroll" === s &&
                          Ar("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      Q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Rl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Ar("cancel", e), Ar("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ar("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < zr.length; a++) Ar(zr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ar("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ar("error", e), Ar("load", e), (a = r);
                        break;
                      case "details":
                        Ar("toggle", e), (a = r);
                        break;
                      case "input":
                        G(e, r), (a = Y(e, r)), Ar("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Ar("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ar("invalid", e);
                    }
                    for (i in (ye(n, a), (c = a)))
                      if (c.hasOwnProperty(i)) {
                        var u = c[i];
                        "style" === i
                          ? ve(e, u)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === i
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && fe(e, u)
                            : "number" === typeof u && fe(e, "" + u)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != u && "onScroll" === i && Ar("scroll", e)
                              : null != u && b(e, i, u, s));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) zl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return ql(t), null;
            case 13:
              if (
                (Sa(si),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), mo(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[fa] = t;
                  } else
                    mo(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  ql(t), (i = !1);
                } else null !== oo && (lc(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current)
                        ? 0 === zs && (zs = 3)
                        : vc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return (
                oi(),
                Ll(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                ql(t),
                null
              );
            case 10:
              return Eo(t.type._context), ql(t), null;
            case 19:
              if ((Sa(si), null === (i = t.memoizedState))) return ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Ql(i, !1);
                else {
                  if (0 !== zs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ci(e))) {
                        for (
                          t.flags |= 128,
                            Ql(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(si, (1 & si.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Vs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ql(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ci(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ql(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return ql(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Vs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ql(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = si.current),
                  Ca(si, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ql(t), null);
            case 22:
            case 23:
              return (
                fc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ls) &&
                    (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Yl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                Sa(ja),
                Sa(Ta),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (Sa(si),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                mo();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Sa(si), null;
            case 4:
              return oi(), null;
            case 10:
              return Eo(t.type._context), null;
            case 22:
            case 23:
              return fc(), null;
            default:
              return null;
          }
        }
        (Rl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ll = function () {}),
          (Il = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (i = []);
                  break;
                case "select":
                  (a = D({}, a, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var s = a[u];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (l.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((s = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== s && (null != c || null != s))
                )
                  if ("style" === u)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          s[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (i || (i = []), i.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (i = i || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (i = i || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (l.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Ar("scroll", e),
                            i || s === c || (i = []))
                          : (i = i || []).push(u, c));
              }
              n && (i = i || []).push("style", n);
              var u = i;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (zl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Gl = !1,
          Xl = !1,
          Jl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Sc(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Sc(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && ts(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function os(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ha],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) ms(e, t, n), (n = n.sibling);
        }
        function ms(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || es(n, t);
            case 6:
              var r = ds,
                a = fs;
              (ds = null),
                ps(e, t, n),
                (fs = a),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ht(e))
                  : sa(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (a = fs),
                (ds = n.stateNode.containerInfo),
                (fs = !0),
                ps(e, t, n),
                (ds = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      ts(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Xl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Sc(n, t, l);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Xl = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Jl()),
              t.forEach(function (t) {
                var r = jc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(o(160));
                ms(i, l, a), (ds = null), (fs = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (u) {
                Sc(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vs(t, e), ys(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (v) {
                  Sc(e, e.return, v);
                }
                try {
                  rs(5, e, e.return);
                } catch (v) {
                  Sc(e, e.return, v);
                }
              }
              break;
            case 1:
              vs(t, e), ys(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (vs(t, e),
                ys(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (v) {
                  Sc(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(a, i),
                      be(s, l);
                    var u = be(s, i);
                    for (l = 0; l < c.length; l += 2) {
                      var d = c[l],
                        f = c[l + 1];
                      "style" === d
                        ? ve(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, u);
                    }
                    switch (s) {
                      case "input":
                        J(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var m = i.value;
                        null != m
                          ? ne(a, !!i.multiple, m, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (v) {
                    Sc(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vs(t, e), ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (v) {
                  Sc(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (vs(t, e),
                ys(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (v) {
                  Sc(e, e.return, v);
                }
              break;
            case 4:
            default:
              vs(t, e), ys(e);
              break;
            case 13:
              vs(t, e),
                ys(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hs = Xe())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xl = (u = Xl) || d), vs(t, e), (Xl = u))
                  : vs(t, e),
                ys(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Zl = e, d = e.child; null !== d; ) {
                    for (f = Zl = d; null !== Zl; ) {
                      switch (((m = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (v) {
                              Sc(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Ns(f);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Zl = m)) : Ns(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          u
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (s.style.display = he("display", l)));
                      } catch (v) {
                        Sc(e, e.return, v);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (v) {
                        Sc(e, e.return, v);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              vs(t, e), ys(e), 4 & r && hs(e);
            case 21:
          }
        }
        function ys(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  cs(e, ss(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Sc(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Zl = e), ws(e, t, n);
        }
        function ws(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var a = Zl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Gl;
              if (!i) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Xl;
                l = Gl;
                var c = Xl;
                if (((Gl = i), (Xl = s) && !c))
                  for (Zl = a; null !== Zl; )
                    (s = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Es(a)
                        : null !== s
                        ? ((s.return = i), (Zl = s))
                        : Es(a);
                for (; null !== o; ) (Zl = o), ws(o, t, n), (o = o.sibling);
                (Zl = a), (Gl = l), (Xl = c);
              }
              xs(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zl = o))
                : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || as(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : go(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ao(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ao(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ht(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Xl || (512 & t.flags && os(t));
              } catch (p) {
                Sc(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function Ns(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function Es(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    Sc(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Sc(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    Sc(t, o, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    Sc(t, i, s);
                  }
              }
            } catch (s) {
              Sc(t, t.return, s);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var ks,
          Ss = Math.ceil,
          Cs = w.ReactCurrentDispatcher,
          _s = w.ReactCurrentOwner,
          Ts = w.ReactCurrentBatchConfig,
          js = 0,
          Os = null,
          Ps = null,
          Rs = 0,
          Ls = 0,
          Is = ka(0),
          zs = 0,
          Fs = null,
          Ds = 0,
          Ms = 0,
          As = 0,
          Bs = null,
          Us = null,
          Hs = 0,
          Vs = 1 / 0,
          Ws = null,
          $s = !1,
          Qs = null,
          qs = null,
          Ks = !1,
          Ys = null,
          Gs = 0,
          Xs = 0,
          Js = null,
          Zs = -1,
          ec = 0;
        function tc() {
          return 0 !== (6 & js) ? Xe() : -1 !== Zs ? Zs : (Zs = Xe());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & js) && 0 !== Rs
            ? Rs & -Rs
            : null !== vo.transition
            ? (0 === ec && (ec = ht()), ec)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function rc(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Js = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & js) && e === Os) ||
              (e === Os && (0 === (2 & js) && (Ms |= n), 4 === zs && sc(e, Rs)),
              ac(e, r),
              1 === n &&
                0 === js &&
                0 === (1 & t.mode) &&
                ((Vs = Xe() + 500), Aa && Ha()));
        }
        function ac(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = ft(e, e === Os ? Rs : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Aa = !0), Ua(e);
                  })(cc.bind(null, e))
                : Ua(cc.bind(null, e)),
                ia(function () {
                  0 === (6 & js) && Ha();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Oc(n, oc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function oc(e, t) {
          if (((Zs = -1), (ec = 0), 0 !== (6 & js))) throw Error(o(327));
          var n = e.callbackNode;
          if (Ec() && e.callbackNode !== n) return null;
          var r = ft(e, e === Os ? Rs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
          else {
            t = r;
            var a = js;
            js |= 2;
            var i = hc();
            for (
              (Os === e && Rs === t) ||
              ((Ws = null), (Vs = Xe() + 500), pc(e, t));
              ;

            )
              try {
                bc();
                break;
              } catch (s) {
                mc(e, s);
              }
            No(),
              (Cs.current = i),
              (js = a),
              null !== Ps ? (t = 0) : ((Os = null), (Rs = 0), (t = zs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = ic(e, a))),
              1 === t)
            )
              throw ((n = Fs), pc(e, 0), sc(e, r), ac(e, Xe()), n);
            if (6 === t) sc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gc(e, r)) &&
                    0 !== (i = mt(e)) &&
                    ((r = i), (t = ic(e, i))),
                  1 === t))
              )
                throw ((n = Fs), pc(e, 0), sc(e, r), ac(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  Nc(e, Us, Ws);
                  break;
                case 3:
                  if (
                    (sc(e, r),
                    (130023424 & r) === r && 10 < (t = Hs + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(Nc.bind(null, e, Us, Ws), t);
                    break;
                  }
                  Nc(e, Us, Ws);
                  break;
                case 4:
                  if ((sc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ss(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Nc.bind(null, e, Us, Ws), r);
                    break;
                  }
                  Nc(e, Us, Ws);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ac(e, Xe()), e.callbackNode === n ? oc.bind(null, e) : null;
        }
        function ic(e, t) {
          var n = Bs;
          return (
            e.current.memoizedState.isDehydrated && (pc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = Us), (Us = n), null !== t && lc(t)),
            e
          );
        }
        function lc(e) {
          null === Us ? (Us = e) : Us.push.apply(Us, e);
        }
        function sc(e, t) {
          for (
            t &= ~As,
              t &= ~Ms,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cc(e) {
          if (0 !== (6 & js)) throw Error(o(327));
          Ec();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ac(e, Xe()), null;
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = ic(e, r)));
          }
          if (1 === n) throw ((n = Fs), pc(e, 0), sc(e, t), ac(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Nc(e, Us, Ws),
            ac(e, Xe()),
            null
          );
        }
        function uc(e, t) {
          var n = js;
          js |= 1;
          try {
            return e(t);
          } finally {
            0 === (js = n) && ((Vs = Xe() + 500), Aa && Ha());
          }
        }
        function dc(e) {
          null !== Ys && 0 === Ys.tag && 0 === (6 & js) && Ec();
          var t = js;
          js |= 1;
          var n = Ts.transition,
            r = bt;
          try {
            if (((Ts.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ts.transition = n), 0 === (6 & (js = t)) && Ha();
          }
        }
        function fc() {
          (Ls = Is.current), Sa(Is);
        }
        function pc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ps))
            for (n = Ps.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  oi(), Sa(ja), Sa(Ta), di();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  Sa(si);
                  break;
                case 10:
                  Eo(r.type._context);
                  break;
                case 22:
                case 23:
                  fc();
              }
              n = n.return;
            }
          if (
            ((Os = e),
            (Ps = e = Ic(e.current, null)),
            (Rs = Ls = t),
            (zs = 0),
            (Fs = null),
            (As = Ms = Ds = 0),
            (Us = Bs = null),
            null !== _o)
          ) {
            for (t = 0; t < _o.length; t++)
              if (null !== (r = (n = _o[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            _o = null;
          }
          return e;
        }
        function mc(e, t) {
          for (;;) {
            var n = Ps;
            try {
              if ((No(), (fi.current = il), yi)) {
                for (var r = hi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yi = !1;
              }
              if (
                ((mi = 0),
                (gi = vi = hi = null),
                (bi = !1),
                (wi = 0),
                (_s.current = null),
                null === n || null === n.return)
              ) {
                (zs = 1), (Fs = t), (Ps = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  c = t;
                if (
                  ((t = Rs),
                  (s.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var m = gl(l);
                  if (null !== m) {
                    (m.flags &= -257),
                      yl(m, l, s, 0, t),
                      1 & m.mode && vl(i, u, t),
                      (c = u);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var v = new Set();
                      v.add(c), (t.updateQueue = v);
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vl(i, u, t), vc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yl(g, l, s, 0, t),
                      ho(ul(c, s));
                    break e;
                  }
                }
                (i = c = ul(c, s)),
                  4 !== zs && (zs = 2),
                  null === Bs ? (Bs = [i]) : Bs.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Do(i, ml(0, c, t));
                      break e;
                    case 1:
                      s = c;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === qs || !qs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Do(i, hl(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xc(n);
            } catch (w) {
              (t = w), Ps === n && null !== n && (Ps = n = n.return);
              continue;
            }
            break;
          }
        }
        function hc() {
          var e = Cs.current;
          return (Cs.current = il), null === e ? il : e;
        }
        function vc() {
          (0 !== zs && 3 !== zs && 2 !== zs) || (zs = 4),
            null === Os ||
              (0 === (268435455 & Ds) && 0 === (268435455 & Ms)) ||
              sc(Os, Rs);
        }
        function gc(e, t) {
          var n = js;
          js |= 2;
          var r = hc();
          for ((Os === e && Rs === t) || ((Ws = null), pc(e, t)); ; )
            try {
              yc();
              break;
            } catch (a) {
              mc(e, a);
            }
          if ((No(), (js = n), (Cs.current = r), null !== Ps))
            throw Error(o(261));
          return (Os = null), (Rs = 0), zs;
        }
        function yc() {
          for (; null !== Ps; ) wc(Ps);
        }
        function bc() {
          for (; null !== Ps && !Ye(); ) wc(Ps);
        }
        function wc(e) {
          var t = ks(e.alternate, e, Ls);
          (e.memoizedProps = e.pendingProps),
            null === t ? xc(e) : (Ps = t),
            (_s.current = null);
        }
        function xc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Kl(n, t, Ls))) return void (Ps = n);
            } else {
              if (null !== (n = Yl(n, t)))
                return (n.flags &= 32767), void (Ps = n);
              if (null === e) return (zs = 6), void (Ps = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ps = t);
            Ps = t = e;
          } while (null !== t);
          0 === zs && (zs = 5);
        }
        function Nc(e, t, n) {
          var r = bt,
            a = Ts.transition;
          try {
            (Ts.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ec();
                } while (null !== Ys);
                if (0 !== (6 & js)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Os && ((Ps = Os = null), (Rs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ks ||
                    ((Ks = !0),
                    Oc(tt, function () {
                      return Ec(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ts.transition), (Ts.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = js;
                  (js |= 4),
                    (_s.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = l + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (c = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (m = f.firstChild);

                                )
                                  (p = f), (f = m);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++u === a && (s = l),
                                    p === i && ++d === r && (c = l),
                                    null !== (m = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = m;
                              }
                              n =
                                -1 === s || -1 === c
                                  ? null
                                  : { start: s, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var v = h.memoizedProps,
                                        g = h.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : go(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (x) {
                              Sc(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (h = ns), (ns = !1);
                    })(e, n),
                    gs(n, e),
                    mr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bs(n, e, a),
                    Ge(),
                    (js = s),
                    (bt = l),
                    (Ts.transition = i);
                } else e.current = n;
                if (
                  (Ks && ((Ks = !1), (Ys = e), (Gs = a)),
                  (i = e.pendingLanes),
                  0 === i && (qs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ac(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($s) throw (($s = !1), (e = Qs), (Qs = null), e);
                0 !== (1 & Gs) && 0 !== e.tag && Ec(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Js
                      ? Xs++
                      : ((Xs = 0), (Js = e))
                    : (Xs = 0),
                  Ha();
              })(e, t, n, r);
          } finally {
            (Ts.transition = a), (bt = r);
          }
          return null;
        }
        function Ec() {
          if (null !== Ys) {
            var e = wt(Gs),
              t = Ts.transition,
              n = bt;
            try {
              if (((Ts.transition = null), (bt = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Gs = 0), 0 !== (6 & js)))
                  throw Error(o(331));
                var a = js;
                for (js |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var c = 0; c < s.length; c++) {
                        var u = s[c];
                        for (Zl = u; null !== Zl; ) {
                          var d = Zl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zl = f);
                          else
                            for (; null !== Zl; ) {
                              var p = (d = Zl).sibling,
                                m = d.return;
                              if ((is(d), d === u)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Zl = p);
                                break;
                              }
                              Zl = m;
                            }
                        }
                      }
                      var h = i.alternate;
                      if (null !== h) {
                        var v = h.child;
                        if (null !== v) {
                          h.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Zl = y);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var w = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Zl = w);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (s = Zl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (N) {
                          Sc(s, s.return, N);
                        }
                      if (s === l) {
                        Zl = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Zl = x);
                        break e;
                      }
                      Zl = s.return;
                    }
                }
                if (
                  ((js = a),
                  Ha(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (N) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ts.transition = t);
            }
          }
          return !1;
        }
        function kc(e, t, n) {
          (e = zo(e, (t = ml(0, (t = ul(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (gt(e, 1, t), ac(e, t));
        }
        function Sc(e, t, n) {
          if (3 === e.tag) kc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                kc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qs || !qs.has(r)))
                ) {
                  (t = zo(t, (e = hl(t, (e = ul(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (gt(t, 1, e), ac(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Os === e &&
              (Rs & n) === n &&
              (4 === zs ||
              (3 === zs && (130023424 & Rs) === Rs && 500 > Xe() - Hs)
                ? pc(e, 0)
                : (As |= n)),
            ac(e, t);
        }
        function _c(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = tc();
          null !== (e = Oo(e, t)) && (gt(e, t, n), ac(e, n));
        }
        function Tc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), _c(e, n);
        }
        function jc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), _c(e, n);
        }
        function Oc(e, t) {
          return qe(e, t);
        }
        function Pc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Rc(e, t, n, r) {
          return new Pc(e, t, n, r);
        }
        function Lc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ic(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Rc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zc(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Lc(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case E:
                return Fc(n.children, a, i, t);
              case k:
                (l = 8), (a |= 8);
                break;
              case S:
                return (
                  ((e = Rc(12, n, t, 2 | a)).elementType = S), (e.lanes = i), e
                );
              case j:
                return (
                  ((e = Rc(13, n, t, a)).elementType = j), (e.lanes = i), e
                );
              case O:
                return (
                  ((e = Rc(19, n, t, a)).elementType = O), (e.lanes = i), e
                );
              case L:
                return Dc(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case _:
                      l = 9;
                      break e;
                    case T:
                      l = 11;
                      break e;
                    case P:
                      l = 14;
                      break e;
                    case R:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Rc(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Fc(e, t, n, r) {
          return ((e = Rc(7, e, r, t)).lanes = n), e;
        }
        function Dc(e, t, n, r) {
          return (
            ((e = Rc(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Mc(e, t, n) {
          return ((e = Rc(6, e, null, t)).lanes = n), e;
        }
        function Ac(e, t, n) {
          return (
            ((t = Rc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uc(e, t, n, r, a, o, i, l, s) {
          return (
            (e = new Bc(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Rc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ro(o),
            e
          );
        }
        function Hc(e) {
          if (!e) return _a;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return za(e, n, t);
          }
          return t;
        }
        function Vc(e, t, n, r, a, o, i, l, s) {
          return (
            ((e = Uc(n, r, !0, e, 0, o, 0, l, s)).context = Hc(null)),
            (n = e.current),
            ((o = Io((r = tc()), (a = nc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            zo(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ac(e, r),
            e
          );
        }
        function Wc(e, t, n, r) {
          var a = t.current,
            o = tc(),
            i = nc(a);
          return (
            (n = Hc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Io(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = zo(a, t, i)) && (rc(e, a, i, o), Fo(e, a, i)),
            i
          );
        }
        function $c(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qc(e, t) {
          Qc(e, t), (e = e.alternate) && Qc(e, t);
        }
        ks = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ja.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ol(t), mo();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Ra(t.type) && Fa(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(yo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ml(e, t, n)
                            : (Ca(si, 1 & si.current),
                              null !== (e = $l(e, t, n)) ? e.sibling : null);
                        Ca(si, 1 & si.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(si, si.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Sl(e, t, n);
                    }
                    return $l(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wl(e, t), (e = t.pendingProps);
              var a = Pa(t, Ta.current);
              So(t, n), (a = ki(null, t, r, e, a, n));
              var i = Si();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((i = !0), Fa(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ro(t),
                    (a.updater = Ho),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Qo(t, r, e, n),
                    (t = jl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    xl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Lc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = go(r, e)),
                  a)
                ) {
                  case 0:
                    t = _l(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Nl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = El(null, t, r, go(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _l(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Tl(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 3:
              e: {
                if ((Ol(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Lo(e, t),
                  Mo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Pl(e, t, r, n, (a = ul(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Pl(e, t, r, n, (a = ul(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ca(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Jo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((mo(), r === a)) {
                    t = $l(e, t, n);
                    break e;
                  }
                  xl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && co(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Cl(e, t),
                xl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return Ml(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xo(t, null, r, n)) : xl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Nl(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 7:
              return xl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Ca(yo, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !ja.current) {
                      t = $l(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === i.tag) {
                              (c = Io(-1, n & -n)).tag = 2;
                              var u = i.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (i.lanes |= n),
                              null !== (c = i.alternate) && (c.lanes |= n),
                              ko(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          ko(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                xl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                So(t, n),
                (r = r((a = Co(a)))),
                (t.flags |= 1),
                xl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = go((r = t.type), t.pendingProps)),
                El(e, t, r, (a = go(r.type, a)), n)
              );
            case 15:
              return kl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : go(r, a)),
                Wl(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Fa(t)) : (e = !1),
                So(t, n),
                Wo(t, r, a),
                Qo(t, r, a, n),
                jl(null, t, r, !0, e, n)
              );
            case 19:
              return Vl(e, t, n);
            case 22:
              return Sl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Kc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yc(e) {
          this._internalRoot = e;
        }
        function Gc(e) {
          this._internalRoot = e;
        }
        function Xc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zc() {}
        function eu(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = $c(i);
                l.call(e);
              };
            }
            Wc(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = $c(i);
                    o.call(e);
                  };
                }
                var i = Vc(t, r, e, 0, null, !1, 0, "", Zc);
                return (
                  (e._reactRootContainer = i),
                  (e[ma] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  dc(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = $c(s);
                  l.call(e);
                };
              }
              var s = Uc(e, 0, !1, null, 0, !1, 0, "", Zc);
              return (
                (e._reactRootContainer = s),
                (e[ma] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                dc(function () {
                  Wc(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return $c(i);
        }
        (Gc.prototype.render = Yc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Wc(e, t, null, null);
          }),
          (Gc.prototype.unmount = Yc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                dc(function () {
                  Wc(null, e, null, null);
                }),
                  (t[ma] = null);
              }
            }),
          (Gc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ac(t, Xe()),
                    0 === (6 & js) && ((Vs = Xe() + 500), Ha()));
                }
                break;
              case 13:
                dc(function () {
                  var t = Oo(e, 1);
                  if (null !== t) {
                    var n = tc();
                    rc(t, e, 1, n);
                  }
                }),
                  qc(e, 1);
            }
          }),
          (Nt = function (e) {
            if (13 === e.tag) {
              var t = Oo(e, 134217728);
              if (null !== t) rc(t, e, 134217728, tc());
              qc(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = Oo(e, t);
              if (null !== n) rc(n, e, t, tc());
              qc(e, t);
            }
          }),
          (kt = function () {
            return bt;
          }),
          (St = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Ne = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(o(90));
                      q(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Te = uc),
          (je = dc);
        var tu = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Ce, _e, uc],
          },
          nu = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          ru = {
            bundleType: nu.bundleType,
            version: nu.version,
            rendererPackageName: nu.rendererPackageName,
            rendererConfig: nu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!au.isDisabled && au.supportsFiber)
            try {
              (at = au.inject(ru)), (ot = au);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xc(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: N,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Kc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Yc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return dc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Jc(t)) throw Error(o(200));
            return eu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Kc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Vc(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ma] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Gc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Jc(t)) throw Error(o(200));
            return eu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Jc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (dc(function () {
                eu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ma] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Jc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return eu(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || m);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || m);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), h(w, g.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          N = Object.prototype.hasOwnProperty,
          E = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              N.call(t, a) && !k.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: E.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === o ? "." + T(s, 0) : o),
              x(i)
                ? ((a = ""),
                  null != e && (a = e.replace(_, "$&/") + "/"),
                  j(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(_, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), x(e)))
            for (var c = 0; c < e.length; c++) {
              var u = o + T((l = e[c]), c);
              s += j(l, t, a, u, i);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(l = e.next()).done; )
              s += j((l = l.value), t, a, (u = o + T(l, c++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            j(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          L = { transition: null },
          I = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: E,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = E.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                N.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              s = Array(c);
              for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                c = l + 1,
                u = e[c];
              if (0 > o(s, n))
                c < a && 0 > o(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(c < a && 0 > o(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              a(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function x(e) {
          if (((v = !1), w(e), !h))
            if (null !== r(c)) (h = !0), L(N);
            else {
              var t = r(u);
              null !== t && I(x, t.startTime - e);
            }
        }
        function N(e, n) {
          (h = !1), v && ((v = !1), y(C), (C = -1)), (m = !0);
          var o = p;
          try {
            for (
              w(n), f = r(c);
              null !== f && (!(f.expirationTime > n) || (e && !j()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var l = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === r(c) && a(c),
                  w(n);
              } else a(c);
              f = r(c);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(u);
              null !== d && I(x, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = o), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          k = !1,
          S = null,
          C = -1,
          _ = 5,
          T = -1;
        function j() {
          return !(t.unstable_now() - T < _);
        }
        function O() {
          if (null !== S) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? E() : ((k = !1), (S = null));
            }
          } else k = !1;
        }
        if ("function" === typeof b)
          E = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            R = P.port2;
          (P.port1.onmessage = O),
            (E = function () {
              R.postMessage(null);
            });
        } else
          E = function () {
            g(O, 0);
          };
        function L(e) {
          (S = e), k || ((k = !0), E());
        }
        function I(e, n) {
          C = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), L(N));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (v ? (y(C), (C = -1)) : (v = !0), I(x, o - i)))
                : ((e.sortIndex = l), n(c, e), h || m || ((h = !0), L(N))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".98f6c21d.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "sofalight:";
      n.l = function (r, a, o, i) {
        if (e[r]) e[r].push(a);
        else {
          var l, s;
          if (void 0 !== o)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + o
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [a]);
          var f = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = i),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var a,
            o,
            i = r[0],
            l = r[1],
            s = r[2],
            c = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) s(n);
          }
          for (t && t(r); c < i.length; c++)
            (o = i[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunksofalight = self.webpackChunksofalight || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      var e,
        t = n(791),
        r = n(250);
      function a(e) {
        return (
          (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          a(e)
        );
      }
      function o() {
        o = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          l = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (O) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function d(e, t, n, a) {
          var o = t && t.prototype instanceof m ? t : m,
            i = Object.create(o.prototype),
            l = new _(a || []);
          return r(i, "_invoke", { value: E(e, n, l) }), i;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        e.wrap = d;
        var p = {};
        function m() {}
        function h() {}
        function v() {}
        var g = {};
        u(g, l, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          b = y && y(y(T([])));
        b && b !== t && n.call(b, l) && (g = b);
        var w = (v.prototype = m.prototype = Object.create(g));
        function x(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function N(e, t) {
          function o(r, i, l, s) {
            var c = f(e[r], e, i);
            if ("throw" !== c.type) {
              var u = c.arg,
                d = u.value;
              return d && "object" == a(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      o("next", e, l, s);
                    },
                    function (e) {
                      o("throw", e, l, s);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (u.value = e), l(u);
                    },
                    function (e) {
                      return o("throw", e, l, s);
                    }
                  );
            }
            s(c.arg);
          }
          var i;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  o(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function E(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var l = k(i, n);
                if (l) {
                  if (l === p) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var s = f(e, t, n);
              if ("normal" === s.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), s.arg === p)
                )
                  continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function k(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var a = f(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), p
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function C(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function T(e) {
          if (e) {
            var t = e[l];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = v),
          r(w, "constructor", { value: v, configurable: !0 }),
          r(v, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(v, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), u(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          x(N.prototype),
          u(N.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = N),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new N(d(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          x(w),
          u(w, c, "Generator"),
          u(w, l, function () {
            return this;
          }),
          u(w, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = T),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(C),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var l = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (l && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), C(n), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    C(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function i(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            s = l.value;
        } catch (c) {
          return void n(c);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, a);
      }
      function l(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function l(e) {
              i(o, r, a, l, s, "next", e);
            }
            function s(e) {
              i(o, r, a, l, s, "throw", e);
            }
            l(void 0);
          });
        };
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        if (e) {
          if ("string" === typeof e) return c(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? c(e, t)
              : void 0
          );
        }
      }
      function d() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function f(e, t) {
        return (
          s(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                s = !0,
                c = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    s = !0
                  );
              } catch (u) {
                (c = !0), (a = u);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          u(e, t) ||
          d()
        );
      }
      function p(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function m(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return c(e);
          })(e) ||
          p(e) ||
          u(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function v(e) {
        var t = (function (e, t) {
          if ("object" !== a(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== a(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === a(t) ? t : String(t);
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, v(r.key), r);
        }
      }
      function y(e, t, n) {
        return (
          t && g(e.prototype, t),
          n && g(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function b(e, t) {
        return (
          (b = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          b(e, t)
        );
      }
      function w(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && b(e, t);
      }
      function x(e) {
        return (
          (x = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          x(e)
        );
      }
      function N() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function E(e, t) {
        if (t && ("object" === a(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function k(e) {
        var t = N();
        return function () {
          var n,
            r = x(e);
          if (t) {
            var a = x(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return E(this, n);
        };
      }
      function S(e, t, n) {
        return (
          (S = N()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && b(a, n.prototype), a;
              }),
          S.apply(null, arguments)
        );
      }
      function C(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (C = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return S(e, arguments, x(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              b(r, e)
            );
          }),
          C(e)
        );
      }
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          _.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var T,
        j = "popstate";
      function O(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function P(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function R(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function L(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          _(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? z(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function I(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          i = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function z(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function F(t, n, r, a) {
        void 0 === a && (a = {});
        var o = a,
          i = o.window,
          l = void 0 === i ? document.defaultView : i,
          s = o.v5Compat,
          c = void 0 !== s && s,
          u = l.history,
          d = e.Pop,
          f = null,
          p = m();
        function m() {
          return (u.state || { idx: null }).idx;
        }
        function h() {
          d = e.Pop;
          var t = m(),
            n = null == t ? null : t - p;
          (p = t), f && f({ action: d, location: g.location, delta: n });
        }
        function v(e) {
          var t =
              "null" !== l.location.origin
                ? l.location.origin
                : l.location.href,
            n = "string" === typeof e ? e : I(e);
          return (
            O(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), u.replaceState(_({}, u.state, { idx: p }), ""));
        var g = {
          get action() {
            return d;
          },
          get location() {
            return t(l, u);
          },
          listen: function (e) {
            if (f)
              throw new Error("A history only accepts one active listener");
            return (
              l.addEventListener(j, h),
              (f = e),
              function () {
                l.removeEventListener(j, h), (f = null);
              }
            );
          },
          createHref: function (e) {
            return n(l, e);
          },
          createURL: v,
          encodeLocation: function (e) {
            var t = v(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            d = e.Push;
            var a = L(g.location, t, n);
            r && r(a, t);
            var o = R(a, (p = m() + 1)),
              i = g.createHref(a);
            try {
              u.pushState(o, "", i);
            } catch (s) {
              l.location.assign(i);
            }
            c && f && f({ action: d, location: g.location, delta: 1 });
          },
          replace: function (t, n) {
            d = e.Replace;
            var a = L(g.location, t, n);
            r && r(a, t);
            var o = R(a, (p = m())),
              i = g.createHref(a);
            u.replaceState(o, "", i),
              c && f && f({ action: d, location: g.location, delta: 0 });
          },
          go: function (e) {
            return u.go(e);
          },
        };
        return g;
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(T || (T = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function D(e, t, n) {
        void 0 === n && (n = "/");
        var r = X(("string" === typeof t ? z(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = M(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var o = null, i = 0; null == o && i < a.length; ++i)
          o = K(a[i], G(r));
        return o;
      }
      function M(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, o) {
          var i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (O(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          var l = te([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (O(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            M(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: q(l, e.index), routesMeta: s });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                o = (function (e, t) {
                  var n =
                    ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = u(e)) ||
                      (t && e && "number" === typeof e.length)
                    ) {
                      n && (e = n);
                      var r = 0,
                        a = function () {};
                      return {
                        s: a,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: a,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var o,
                    i = !0,
                    l = !1;
                  return {
                    s: function () {
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return (i = e.done), e;
                    },
                    e: function (e) {
                      (l = !0), (o = e);
                    },
                    f: function () {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (l) throw o;
                      }
                    },
                  };
                })(A(e.path));
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var i = r.value;
                  a(e, t, i);
                }
              } catch (l) {
                o.e(l);
              } finally {
                o.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function A(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = s((n = t)) || p(n) || u(n) || d(),
          a = r[0],
          o = r.slice(1),
          i = a.endsWith("?"),
          l = a.replace(/\?$/, "");
        if (0 === o.length) return i ? [l, ""] : [l];
        var c = A(o.join("/")),
          f = [];
        return (
          f.push.apply(
            f,
            m(
              c.map(function (e) {
                return "" === e ? l : [l, e].join("/");
              })
            )
          ),
          i && f.push.apply(f, m(c)),
          f.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      var B = /^:\w+$/,
        U = 3,
        H = 2,
        V = 1,
        W = 10,
        $ = -2,
        Q = function (e) {
          return "*" === e;
        };
      function q(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(Q) && (r += $),
          t && (r += H),
          n
            .filter(function (e) {
              return !Q(e);
            })
            .reduce(function (e, t) {
              return e + (B.test(t) ? U : "" === t ? V : W);
            }, r)
        );
      }
      function K(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
          i < n.length;
          ++i
        ) {
          var l = n[i],
            s = i === n.length - 1,
            c = "/" === a ? t : t.slice(a.length) || "/",
            u = Y(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
              c
            );
          if (!u) return null;
          Object.assign(r, u.params);
          var d = l.route;
          o.push({
            params: r,
            pathname: te([a, u.pathname]),
            pathnameBase: ne(te([a, u.pathnameBase])),
            route: d,
          }),
            "/" !== u.pathnameBase && (a = te([a, u.pathnameBase]));
        }
        return o;
      }
      function Y(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            P(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          r = f(n, 2),
          a = r[0],
          o = r[1],
          i = t.match(a);
        if (!i) return null;
        var l = i[0],
          s = l.replace(/(.)\/+$/, "$1"),
          c = i.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              s = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    P(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: s,
          pattern: e,
        };
      }
      function G(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            P(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function X(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function J(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function Z(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function ee(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = z(e))
            : (O(
                !(a = _({}, e)).pathname || !a.pathname.includes("?"),
                J("?", "pathname", "search", a)
              ),
              O(
                !a.pathname || !a.pathname.includes("#"),
                J("#", "pathname", "hash", a)
              ),
              O(
                !a.search || !a.search.includes("#"),
                J("#", "search", "hash", a)
              ));
        var o,
          i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (r || null == l) o = n;
        else {
          var s = t.length - 1;
          if (l.startsWith("..")) {
            for (var c = l.split("/"); ".." === c[0]; ) c.shift(), (s -= 1);
            a.pathname = c.join("/");
          }
          o = s >= 0 ? t[s] : "/";
        }
        var u = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? z(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? "" : a,
              i = n.hash,
              l = void 0 === i ? "" : i,
              s = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: s, search: re(o), hash: ae(l) };
          })(a, o),
          d = l && "/" !== l && l.endsWith("/"),
          f = (i || "." === l) && n.endsWith("/");
        return u.pathname.endsWith("/") || (!d && !f) || (u.pathname += "/"), u;
      }
      var te = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        ne = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        re = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        ae = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        oe = (function (e) {
          w(n, e);
          var t = k(n);
          function n() {
            return h(this, n), t.apply(this, arguments);
          }
          return y(n);
        })(C(Error));
      function ie(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var le = ["post", "put", "patch", "delete"],
        se = (new Set(le), ["get"].concat(le));
      new Set(se),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      Symbol("deferred");
      function ce() {
        return (
          (ce = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ce.apply(this, arguments)
        );
      }
      var ue = t.createContext(null);
      var de = t.createContext(null);
      var fe = t.createContext(null);
      var pe = t.createContext(null);
      var me = t.createContext(null);
      var he = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      var ve = t.createContext(null);
      function ge() {
        return null != t.useContext(me);
      }
      function ye() {
        return ge() || O(!1), t.useContext(me).location;
      }
      function be(e) {
        t.useContext(pe).static || t.useLayoutEffect(e);
      }
      function we() {
        return t.useContext(he).isDataRoute
          ? (function () {
              var e = Oe(ke.UseNavigateStable).router,
                n = Re(Se.UseNavigateStable),
                r = t.useRef(!1);
              return (
                be(function () {
                  r.current = !0;
                }),
                t.useCallback(
                  function (t, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" === typeof t
                          ? e.navigate(t)
                          : e.navigate(t, ce({ fromRouteId: n }, a)));
                  },
                  [e, n]
                )
              );
            })()
          : (function () {
              ge() || O(!1);
              var e = t.useContext(pe),
                n = e.basename,
                r = e.navigator,
                a = t.useContext(he).matches,
                o = ye().pathname,
                i = JSON.stringify(
                  Z(a).map(function (e) {
                    return e.pathnameBase;
                  })
                ),
                l = t.useRef(!1);
              return (
                be(function () {
                  l.current = !0;
                }),
                t.useCallback(
                  function (e, t) {
                    if ((void 0 === t && (t = {}), l.current))
                      if ("number" !== typeof e) {
                        var a = ee(e, JSON.parse(i), o, "path" === t.relative);
                        "/" !== n &&
                          (a.pathname =
                            "/" === a.pathname ? n : te([n, a.pathname])),
                          (t.replace ? r.replace : r.push)(a, t.state, t);
                      } else r.go(e);
                  },
                  [n, r, i, o]
                )
              );
            })();
      }
      function xe(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(he).matches,
          o = ye().pathname,
          i = JSON.stringify(
            Z(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return ee(e, JSON.parse(i), o, "path" === r);
          },
          [e, i, o, r]
        );
      }
      function Ne(n, r, a) {
        ge() || O(!1);
        var o,
          i = t.useContext(pe).navigator,
          l = t.useContext(he).matches,
          s = l[l.length - 1],
          c = s ? s.params : {},
          u = (s && s.pathname, s ? s.pathnameBase : "/"),
          d = (s && s.route, ye());
        if (r) {
          var f,
            p = "string" === typeof r ? z(r) : r;
          "/" === u ||
            (null == (f = p.pathname) ? void 0 : f.startsWith(u)) ||
            O(!1),
            (o = p);
        } else o = d;
        var m = o.pathname || "/",
          h = D(n, { pathname: "/" === u ? m : m.slice(u.length) || "/" });
        var v = je(
          h &&
            h.map(function (e) {
              return Object.assign({}, e, {
                params: Object.assign({}, c, e.params),
                pathname: te([
                  u,
                  i.encodeLocation
                    ? i.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? u
                    : te([
                        u,
                        i.encodeLocation
                          ? i.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              });
            }),
          l,
          a
        );
        return r && v
          ? t.createElement(
              me.Provider,
              {
                value: {
                  location: ce(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    o
                  ),
                  navigationType: e.Pop,
                },
              },
              v
            )
          : v;
      }
      function Ee() {
        var e = (function () {
            var e,
              n = t.useContext(ve),
              r = Pe(Se.UseRouteError),
              a = Re(Se.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = ie(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          null
        );
      }
      var ke,
        Se,
        Ce = t.createElement(Ee, null),
        _e = (function (e) {
          w(r, e);
          var n = k(r);
          function r(e) {
            var t;
            return (
              h(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error,
              }),
              t
            );
          }
          return (
            y(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          he.Provider,
                          { value: this.props.routeContext },
                          t.createElement(ve.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location ||
                      ("idle" !== t.revalidation && "idle" === e.revalidation)
                      ? {
                          error: e.error,
                          location: e.location,
                          revalidation: e.revalidation,
                        }
                      : {
                          error: e.error || t.error,
                          location: t.location,
                          revalidation: e.revalidation || t.revalidation,
                        };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function Te(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(ue);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(he.Provider, { value: n }, a)
        );
      }
      function je(e, n, r) {
        var a;
        if ((void 0 === n && (n = []), void 0 === r && (r = null), null == e)) {
          var o;
          if (null == (o = r) || !o.errors) return null;
          e = r.matches;
        }
        var i = e,
          l = null == (a = r) ? void 0 : a.errors;
        if (null != l) {
          var s = i.findIndex(function (e) {
            return e.route.id && (null == l ? void 0 : l[e.route.id]);
          });
          s >= 0 || O(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
        }
        return i.reduceRight(function (e, a, o) {
          var s = a.route.id ? (null == l ? void 0 : l[a.route.id]) : null,
            c = null;
          r && (c = a.route.errorElement || Ce);
          var u = n.concat(i.slice(0, o + 1)),
            d = function () {
              var n;
              return (
                (n = s
                  ? c
                  : a.route.Component
                  ? t.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : e),
                t.createElement(Te, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: u,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? t.createElement(_e, {
                location: r.location,
                revalidation: r.revalidation,
                component: c,
                error: s,
                children: d(),
                routeContext: { outlet: null, matches: u, isDataRoute: !0 },
              })
            : d();
        }, null);
      }
      function Oe(e) {
        var n = t.useContext(ue);
        return n || O(!1), n;
      }
      function Pe(e) {
        var n = t.useContext(de);
        return n || O(!1), n;
      }
      function Re(e) {
        var n = (function (e) {
            var n = t.useContext(he);
            return n || O(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || O(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"),
          (e.UseRevalidator = "useRevalidator"),
          (e.UseNavigateStable = "useNavigate");
      })(ke || (ke = {})),
        (function (e) {
          (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId");
        })(Se || (Se = {}));
      var Le;
      function Ie(e) {
        O(!1);
      }
      function ze(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          o = n.children,
          i = void 0 === o ? null : o,
          l = n.location,
          s = n.navigationType,
          c = void 0 === s ? e.Pop : s,
          u = n.navigator,
          d = n.static,
          f = void 0 !== d && d;
        ge() && O(!1);
        var p = a.replace(/^\/*/, "/"),
          m = t.useMemo(
            function () {
              return { basename: p, navigator: u, static: f };
            },
            [p, u, f]
          );
        "string" === typeof l && (l = z(l));
        var h = l,
          v = h.pathname,
          g = void 0 === v ? "/" : v,
          y = h.search,
          b = void 0 === y ? "" : y,
          w = h.hash,
          x = void 0 === w ? "" : w,
          N = h.state,
          E = void 0 === N ? null : N,
          k = h.key,
          S = void 0 === k ? "default" : k,
          C = t.useMemo(
            function () {
              var e = X(g, p);
              return null == e
                ? null
                : {
                    location: {
                      pathname: e,
                      search: b,
                      hash: x,
                      state: E,
                      key: S,
                    },
                    navigationType: c,
                  };
            },
            [p, g, b, x, E, S, c]
          );
        return null == C
          ? null
          : t.createElement(
              pe.Provider,
              { value: m },
              t.createElement(me.Provider, { children: i, value: C })
            );
      }
      function Fe(e) {
        var t = e.children,
          n = e.location;
        return Ne(Me(t), n);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Le || (Le = {}));
      var De = new Promise(function () {});
      t.Component;
      function Me(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e)) {
              var o = [].concat(m(n), [a]);
              if (e.type !== t.Fragment) {
                e.type !== Ie && O(!1),
                  e.props.index && e.props.children && O(!1);
                var i = {
                  id: e.props.id || o.join("-"),
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  Component: e.props.Component,
                  index: e.props.index,
                  path: e.props.path,
                  loader: e.props.loader,
                  action: e.props.action,
                  errorElement: e.props.errorElement,
                  ErrorBoundary: e.props.ErrorBoundary,
                  hasErrorBoundary:
                    null != e.props.ErrorBoundary ||
                    null != e.props.errorElement,
                  shouldRevalidate: e.props.shouldRevalidate,
                  handle: e.props.handle,
                  lazy: e.props.lazy,
                };
                e.props.children && (i.children = Me(e.props.children, o)),
                  r.push(i);
              } else r.push.apply(r, Me(e.props.children, o));
            }
          }),
          r
        );
      }
      function Ae() {
        return (
          (Ae = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ae.apply(this, arguments)
        );
      }
      function Be(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var Ue = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
        ],
        He = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function Ve(e) {
        var n,
          r = e.basename,
          a = e.children,
          o = e.window,
          i = t.useRef();
        null == i.current &&
          (i.current =
            (void 0 === (n = { window: o, v5Compat: !0 }) && (n = {}),
            F(
              function (e, t) {
                var n = e.location;
                return L(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : I(t);
              },
              null,
              n
            )));
        var l = i.current,
          s = f(t.useState({ action: l.action, location: l.location }), 2),
          c = s[0],
          u = s[1];
        return (
          t.useLayoutEffect(
            function () {
              return l.listen(u);
            },
            [l]
          ),
          t.createElement(ze, {
            basename: r,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: l,
          })
        );
      }
      var We =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        $e = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Qe = t.forwardRef(function (e, n) {
          var r,
            a = e.onClick,
            o = e.relative,
            i = e.reloadDocument,
            l = e.replace,
            s = e.state,
            c = e.target,
            u = e.to,
            d = e.preventScrollReset,
            f = Be(e, Ue),
            p = t.useContext(pe).basename,
            m = !1;
          if ("string" === typeof u && $e.test(u) && ((r = u), We))
            try {
              var h = new URL(window.location.href),
                v = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
                g = X(v.pathname, p);
              v.origin === h.origin && null != g
                ? (u = g + v.search + v.hash)
                : (m = !0);
            } catch (w) {}
          var y = (function (e, n) {
              var r = (void 0 === n ? {} : n).relative;
              ge() || O(!1);
              var a = t.useContext(pe),
                o = a.basename,
                i = a.navigator,
                l = xe(e, { relative: r }),
                s = l.hash,
                c = l.pathname,
                u = l.search,
                d = c;
              return (
                "/" !== o && (d = "/" === c ? o : te([o, c])),
                i.createHref({ pathname: d, search: u, hash: s })
              );
            })(u, { relative: o }),
            b = (function (e, n) {
              var r = void 0 === n ? {} : n,
                a = r.target,
                o = r.replace,
                i = r.state,
                l = r.preventScrollReset,
                s = r.relative,
                c = we(),
                u = ye(),
                d = xe(e, { relative: s });
              return t.useCallback(
                function (t) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, a)
                  ) {
                    t.preventDefault();
                    var n = void 0 !== o ? o : I(u) === I(d);
                    c(e, {
                      replace: n,
                      state: i,
                      preventScrollReset: l,
                      relative: s,
                    });
                  }
                },
                [u, c, d, o, i, a, e, l, s]
              );
            })(u, {
              replace: l,
              state: s,
              target: c,
              preventScrollReset: d,
              relative: o,
            });
          return t.createElement(
            "a",
            Ae({}, f, {
              href: r || y,
              onClick:
                m || i
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e);
                    },
              ref: n,
              target: c,
            })
          );
        });
      var qe = t.forwardRef(function (e, n) {
        var r = e["aria-current"],
          a = void 0 === r ? "page" : r,
          o = e.caseSensitive,
          i = void 0 !== o && o,
          l = e.className,
          s = void 0 === l ? "" : l,
          c = e.end,
          u = void 0 !== c && c,
          d = e.style,
          f = e.to,
          p = e.children,
          m = Be(e, He),
          h = xe(f, { relative: m.relative }),
          v = ye(),
          g = t.useContext(de),
          y = t.useContext(pe).navigator,
          b = y.encodeLocation ? y.encodeLocation(h).pathname : h.pathname,
          w = v.pathname,
          x =
            g && g.navigation && g.navigation.location
              ? g.navigation.location.pathname
              : null;
        i ||
          ((w = w.toLowerCase()),
          (x = x ? x.toLowerCase() : null),
          (b = b.toLowerCase()));
        var N,
          E = w === b || (!u && w.startsWith(b) && "/" === w.charAt(b.length)),
          k =
            null != x &&
            (x === b || (!u && x.startsWith(b) && "/" === x.charAt(b.length))),
          S = E ? a : void 0;
        N =
          "function" === typeof s
            ? s({ isActive: E, isPending: k })
            : [s, E ? "active" : null, k ? "pending" : null]
                .filter(Boolean)
                .join(" ");
        var C = "function" === typeof d ? d({ isActive: E, isPending: k }) : d;
        return t.createElement(
          Qe,
          Ae({}, m, {
            "aria-current": S,
            className: N,
            ref: n,
            style: C,
            to: f,
          }),
          "function" === typeof p ? p({ isActive: E, isPending: k }) : p
        );
      });
      var Ke, Ye;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(Ke || (Ke = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Ye || (Ye = {}));
      var Ge = n.p + "static/media/logo.940055e294626e57deab.png";
      var Xe =
        n.p + "static/media/caretdown.d703ca0072be5912921d4428aa12c31d.svg";
      var Je = n.p + "static/media/menu.dd92aed316c5967acbf1f7094cd87de4.svg";
      var Ze = n.p + "static/media/gear.b025f2dd6454f62eedb36502ff98e839.svg";
      var et =
          n.p +
          "static/media/rightfrombracket.1438adba5dc67a3cc51879ad3fa83aff.svg",
        tt = n(184);
      var nt = function (e) {
        return (0, tt.jsxs)("div", {
          className:
            "sofa_light_dashboard_furniturestore_components_productadmin",
          children: [
            (0, tt.jsx)(Qe, {
              id: "productActions_Admin_Preview_A",
              to: "/sofaadmin/productdetails",
            }),
            (0, tt.jsx)("div", {
              style: { cursor: "pointer" },
              onClick: function (t) {
                localStorage.setItem(
                  "product_preview",
                  JSON.stringify(e.productData)
                ),
                  document
                    .getElementById("productActions_Admin_Preview_A")
                    .click();
              },
              className: "productImg",
              children: (0, tt.jsx)("img", { src: e.src, alt: "products" }),
            }),
            (0, tt.jsxs)("div", {
              className: "productDesc",
              children: [
                (0, tt.jsx)("p", { children: e.productname }),
                (0, tt.jsxs)("p", { children: [e.productprice, " RWF"] }),
                (0, tt.jsxs)("div", {
                  className: "productActions",
                  children: [
                    (0, tt.jsx)(Qe, {
                      id: "productActions_Admin_Edit_A",
                      to: "/sofaadmin/editproduct",
                    }),
                    (0, tt.jsx)("button", {
                      id: "edit_id_".concat(e.id),
                      onClick: (function () {
                        var t = l(
                          o().mark(function t(n) {
                            return o().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    localStorage.setItem(
                                      "product_edit",
                                      JSON.stringify(e.productData)
                                    ),
                                      document
                                        .getElementById(
                                          "productActions_Admin_Edit_A"
                                        )
                                        .click();
                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })(),
                      children: "Edit Item.",
                    }),
                    (0, tt.jsx)("button", {
                      onClick: (function () {
                        var t = l(
                          o().mark(function t(n) {
                            return o().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.next = 2),
                                      fetch(
                                        "http://localhost:3003/sofalight/backend/api/products/delete/" +
                                          e.id,
                                        {
                                          method: "DELETE",
                                          credentials: "include",
                                        }
                                      )
                                        .then(function (e) {
                                          return e.json();
                                        })
                                        .then(function (e) {
                                          window.location.reload();
                                        })
                                        .catch(function (e) {
                                          console.log(e.message);
                                        })
                                    );
                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })(),
                      children: "Delete.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var rt = function (e) {
        for (
          var t = m(String(e)).reverse(), n = [], r = 0, a = r + 3, o = 0;
          o < t.length;

        )
          n.push(t.slice(r, a).reverse()), (a = (r = a) + 3), o++;
        var i = (n = n.filter(function (e) {
            return e.length >= 1;
          })).reverse(),
          l = "";
        return (
          i.forEach(function (e, t) {
            var n = t === i.length - 1 ? "" : ",";
            l += e.join("") + n;
          }),
          l
        );
      };
      var at = n.p + "static/media/filter.5671b3e4ac01951ee6001d4a2afe41b3.svg";
      var ot = function () {
          var e = f((0, t.useState)(!0), 2),
            n = e[0],
            r = e[1],
            a = f((0, t.useState)([]), 2),
            i = a[0],
            s = a[1],
            c = f((0, t.useState)(31e5), 2),
            u = c[0],
            d = c[1],
            p = f((0, t.useState)("All"), 2),
            m = p[0],
            h = p[1],
            v = "check";
          (0, t.useEffect)(
            function () {
              function e() {
                return (e = l(
                  o().mark(function e() {
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch(
                                "http://localhost:3003/sofalight/backend/api/getLoggedIn",
                                { credentials: "include" }
                              )
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (e) {
                                  if (
                                    (console.log(e),
                                    "Not Logged in" === e.user ||
                                      "Couldn't get user data" === e.user)
                                  )
                                    return (
                                      console.log(e, "not logged in"),
                                      void (window.location = "/")
                                    );
                                  document.getElementById(
                                    "preloaderScreenViewProductsAdmin"
                                  ).style.display = "none";
                                })
                                .catch(function (e) {
                                  console.log("error");
                                })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              (function () {
                e.apply(this, arguments);
              })();
            },
            [v]
          ),
            (0, t.useEffect)(function () {
              window.addEventListener("resize", function () {
                window.innerWidth > 1263 &&
                  (document.querySelector(
                    ".products_show"
                  ).style.gridTemplateColumns = "1fr 1fr 1fr"),
                  window.innerWidth < 1263 &&
                    (document.querySelector(
                      ".products_show"
                    ).style.gridTemplateColumns = "1fr 1fr"),
                  window.innerWidth < 893 &&
                    (document.querySelector(
                      ".products_show"
                    ).style.gridTemplateColumns = "1fr");
              });
            }),
            (0, t.useEffect)(
              function () {
                function e() {
                  return (e = l(
                    o().mark(function e() {
                      var t;
                      return o().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                fetch(
                                  "http://localhost:3003/sofalight/backend/api/products"
                                )
                                  .then(function (e) {
                                    return e.json();
                                  })
                                  .then(function (e) {
                                    return e;
                                  })
                                  .catch(function (e) {
                                    console.log(e);
                                  })
                              );
                            case 2:
                              (t = e.sent), s(t);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              ["get"]
            );
          var g = f((0, t.useState)(""), 2),
            y = g[0],
            b = g[1],
            w = f((0, t.useState)("Highest Price"), 2),
            x = w[0],
            N = w[1];
          return (0, tt.jsxs)(tt.Fragment, {
            children: [
              (0, tt.jsx)("div", {
                id: "preloaderScreenViewProductsAdmin",
                children: (0, tt.jsx)("div", {
                  className: "loader",
                  children: (0, tt.jsx)("div", { className: "inner-loader" }),
                }),
              }),
              (0, tt.jsxs)("div", {
                className:
                  "sofa_light_dashboard_furniturestore_components_viewproducts",
                children: [
                  (0, tt.jsx)("button", {
                    className: "filter_menu",
                    onClick: function (e) {
                      r(!n);
                    },
                    children: "Filter Menu",
                  }),
                  (0, tt.jsxs)("div", {
                    className: n
                      ? "sofa_light_dashboard_furniturestore_components_viewproducts_left"
                      : "sofa_light_dashboard_furniturestore_components_viewproducts_left displayFlex",
                    children: [
                      (0, tt.jsxs)("div", {
                        className:
                          "sofa_light_dashboard_furniturestore_components_viewproducts_filter_title",
                        children: [
                          (0, tt.jsx)("img", { src: at, alt: "filter" }),
                          (0, tt.jsx)("p", {
                            style: { marginTop: "20px" },
                            children: "Filter",
                          }),
                        ],
                      }),
                      (0, tt.jsxs)("div", {
                        className:
                          "sofa_light_dashboard_furniturestore_components_pricerange",
                        children: [
                          (0, tt.jsx)("p", {
                            style: { paddingTop: "20px" },
                            className: "sizeOne",
                            children: "Price Range",
                          }),
                          (0, tt.jsx)("input", {
                            className: "slider",
                            type: "range",
                            value: u,
                            onChange: function (e) {
                              d(e.target.value);
                            },
                            min: "".concat(1e4),
                            max: "".concat(3e6),
                          }),
                          (0, tt.jsxs)("p", {
                            className: "sizeTwo",
                            children: [
                              (0, tt.jsxs)("span", {
                                children: [rt("10000"), " RWF"],
                              }),
                              "-",
                              (0, tt.jsxs)("span", {
                                children: [rt(u), " RWF"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, tt.jsxs)("div", {
                        className:
                          "sofa_light_dashboard_furniturestore_components_category",
                        children: [
                          (0, tt.jsx)("p", {
                            className: "sizeOne",
                            children: "Category ",
                          }),
                          (0, tt.jsx)("span", {
                            style: {
                              marginLeft: "20px",
                              fontSize: "12px",
                              backgroundColor: "black",
                              color: "white",
                              padding: "5px",
                            },
                            children: "Double Click on Category",
                          }),
                          (0, tt.jsx)("ul", {
                            children: [
                              ["All", 25],
                              ["Kitchen", 25],
                              ["Office", 25],
                              ["Living room", 25],
                              ["Dining", 25],
                              ["Partitions", 25],
                              ["Bed rooms", 25],
                              ["Wardrobes", 25],
                              ["Doors", 25],
                              ["Ceiling", 25],
                              ["Mattress", 25],
                              ["Painting", 25],
                            ].map(function (e, t) {
                              return (0, tt.jsx)(
                                "li",
                                {
                                  onClick: function (t) {
                                    h(e[0]), console.log(m);
                                  },
                                  className: "sizeTwo",
                                  children: (0, tt.jsx)("span", {
                                    children: e[0],
                                  }),
                                },
                                t
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, tt.jsxs)("div", {
                    children: [
                      (0, tt.jsxs)("div", {
                        className:
                          "sofa_light_dashboard_furniturestore_components_search",
                        children: [
                          (0, tt.jsx)("input", {
                            type: "text",
                            value: y,
                            onChange: function (e) {
                              return b(e.target.value);
                            },
                            placeholder: "Search",
                          }),
                          (0, tt.jsx)("div", {}),
                        ],
                      }),
                      (0, tt.jsxs)("div", {
                        className:
                          "sofa_light_dashboard_furniturestore_components_sortby",
                        children: [
                          (0, tt.jsx)("p", { children: "Sort By: " }),
                          (0, tt.jsxs)("p", {
                            children: [
                              (0, tt.jsx)("span", {
                                onClick: function (e) {
                                  return N("Highest Price");
                                },
                                className:
                                  "Highest Price" === x
                                    ? "sofa_light_dashboard_furniturestore_components_sortby_active"
                                    : "",
                                children: "Highest Price",
                              }),
                              (0, tt.jsx)("span", {
                                onClick: function (e) {
                                  return N("Lowest Price");
                                },
                                className:
                                  "Lowest Price" === x
                                    ? "sofa_light_dashboard_furniturestore_components_sortby_active"
                                    : "",
                                children: "Lowest Price",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, tt.jsx)("div", {
                        className: "products_show",
                        children: (0, tt.jsx)(tt.Fragment, {
                          children:
                            i.length > 0
                              ? (function (e) {
                                  if ("Highest Price" === x) {
                                    for (var t = 0; t < e.length; t++)
                                      for (var n = t + 1; n < e.length; n++)
                                        if (
                                          Number(
                                            e[t].productInfo.productPrice
                                          ) <
                                          Number(e[n].productInfo.productPrice)
                                        ) {
                                          var r = e[t];
                                          (e[t] = e[n]), (e[n] = r);
                                        }
                                  } else if ("Lowest Price" === x)
                                    for (var a = 0; a < e.length; a++)
                                      for (var o = a + 1; o < e.length; o++)
                                        if (
                                          Number(
                                            e[a].productInfo.productPrice
                                          ) >
                                          Number(e[o].productInfo.productPrice)
                                        ) {
                                          var i = e[o];
                                          (e[o] = e[a]), (e[a] = i);
                                        }
                                  return console.log("before reverse", e), e;
                                })(i).map(function (e, t) {
                                  if (Number(e.productInfo.productPrice) < u)
                                    if (e.productInfo.productCategory) {
                                      if (
                                        ("all" === m.toLowerCase() ||
                                          e.productInfo.productCategory.toLowerCase() ===
                                            m.toLowerCase()) &&
                                        ("" === y.trim() ||
                                          e.productInfo.productName
                                            .toLowerCase()
                                            .includes(y.toLowerCase().trim()))
                                      )
                                        return (0, tt.jsx)(
                                          nt,
                                          {
                                            productData: e,
                                            id: e._id,
                                            src: e.images[0][1],
                                            productname:
                                              e.productInfo.productName,
                                            productprice: rt(
                                              e.productInfo.productPrice
                                            ),
                                          },
                                          t
                                        );
                                    } else if (
                                      "all" === m.toLowerCase() &&
                                      ("" === y.trim() ||
                                        e.productInfo.productName
                                          .toLowerCase()
                                          .includes(y.toLowerCase().trim()))
                                    )
                                      return (0, tt.jsx)(
                                        nt,
                                        {
                                          productData: e,
                                          id: e._id,
                                          src: e.images[0][1],
                                          productname:
                                            e.productInfo.productName,
                                          productprice: rt(
                                            e.productInfo.productPrice
                                          ),
                                        },
                                        t
                                      );
                                  return (0,
                                  tt.jsx)("div", { style: { display: "none" } }, t);
                                })
                              : (0, tt.jsx)("h1", {
                                  children: "Loading products ...",
                                }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        it = n(164),
        lt = function () {
          return (
            (lt =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            lt.apply(this, arguments)
          );
        };
      function st(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      }
      function ct(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++)
            (!r && a in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var ut = {};
      var dt, ft, pt, mt;
      function ht() {
        if (ft) return dt;
        ft = 1;
        return (dt = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
      }
      ({
        get exports() {
          return ut;
        },
        set exports(e) {
          ut = e;
        },
      }).exports = (function () {
        if (mt) return pt;
        mt = 1;
        var e = ht();
        function t() {}
        function n() {}
        return (
          (n.resetWarningCache = t),
          (pt = function () {
            function r(t, n, r, a, o, i) {
              if (i !== e) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function a() {
              return r;
            }
            r.isRequired = r;
            var o = {
              array: r,
              bigint: r,
              bool: r,
              func: r,
              number: r,
              object: r,
              string: r,
              symbol: r,
              any: r,
              arrayOf: a,
              element: r,
              elementType: r,
              instanceOf: a,
              node: r,
              objectOf: a,
              oneOf: a,
              oneOfType: a,
              shape: a,
              exact: a,
              checkPropTypes: n,
              resetWarningCache: t,
            };
            return (o.PropTypes = o), o;
          })
        );
      })()();
      var vt,
        gt = {};
      (vt = {
        get exports() {
          return gt;
        },
        set exports(e) {
          gt = e;
        },
      }),
        (function () {
          var e = {}.hasOwnProperty;
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
              var a = arguments[r];
              if (a) {
                var o = typeof a;
                if ("string" === o || "number" === o) n.push(a);
                else if (Array.isArray(a)) {
                  if (a.length) {
                    var i = t.apply(null, a);
                    i && n.push(i);
                  }
                } else if ("object" === o) {
                  if (
                    a.toString !== Object.prototype.toString &&
                    !a.toString.toString().includes("[native code]")
                  ) {
                    n.push(a.toString());
                    continue;
                  }
                  for (var l in a) e.call(a, l) && a[l] && n.push(l);
                }
              }
            }
            return n.join(" ");
          }
          vt.exports
            ? ((t.default = t), (vt.exports = t))
            : (window.classNames = t);
        })();
      var yt = gt,
        bt = (0, t.createContext)({}),
        wt = (0, t.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.activeItemKey,
            o = e.alwaysOpen,
            i = void 0 !== o && o,
            l = e.className,
            s = e.flush,
            c = st(e, [
              "children",
              "activeItemKey",
              "alwaysOpen",
              "className",
              "flush",
            ]),
            u = (0, t.useState)(a),
            d = u[0],
            f = u[1];
          return t.createElement(
            "div",
            lt({ className: yt("accordion", { "accordion-flush": s }, l) }, c, {
              ref: n,
            }),
            t.createElement(
              bt.Provider,
              { value: { _activeItemKey: d, alwaysOpen: i, setActiveKey: f } },
              r
            )
          );
        });
      (wt.propTypes = {
        alwaysOpen: ut.bool,
        activeItemKey: ut.oneOfType([ut.number, ut.string]),
        children: ut.node,
        className: ut.string,
        flush: ut.bool,
      }),
        (wt.displayName = "CAccordion");
      var xt = (0, t.createContext)({}),
        Nt = (0, t.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.className,
            o = e.itemKey,
            i = st(e, ["children", "className", "itemKey"]),
            l = (0, t.useRef)(
              null !== o && void 0 !== o
                ? o
                : Math.random().toString(36).slice(2, 11)
            ),
            s = (0, t.useContext)(bt),
            c = s._activeItemKey,
            u = s.alwaysOpen,
            d = s.setActiveKey,
            f = (0, t.useState)(Boolean(c === l.current)),
            p = f[0],
            m = f[1];
          return (
            (0, t.useEffect)(
              function () {
                !u && p && d(l.current);
              },
              [p]
            ),
            (0, t.useEffect)(
              function () {
                m(Boolean(c === l.current));
              },
              [c]
            ),
            t.createElement(
              "div",
              lt({ className: yt("accordion-item", a) }, i, { ref: n }),
              t.createElement(
                xt.Provider,
                { value: { setVisible: m, visible: p } },
                r
              )
            )
          );
        });
      function Et() {
        return (
          (Et = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Et.apply(this, arguments)
        );
      }
      function kt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function St(e, t) {
        return (
          (St = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          St(e, t)
        );
      }
      function Ct(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          St(e, t);
      }
      function _t(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      (Nt.propTypes = {
        children: ut.node,
        className: ut.string,
        itemKey: ut.oneOfType([ut.number, ut.string]),
      }),
        (Nt.displayName = "CAccordionItem");
      var Tt = !1,
        jt = t.createContext(null),
        Ot = function (e) {
          return e.scrollTop;
        },
        Pt = "unmounted",
        Rt = "exited",
        Lt = "entering",
        It = "entered",
        zt = "exiting",
        Ft = (function (e) {
          function n(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var a,
              o = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? o
                  ? ((a = Rt), (r.appearStatus = Lt))
                  : (a = It)
                : (a = t.unmountOnExit || t.mountOnEnter ? Pt : Rt),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          Ct(n, e),
            (n.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === Pt ? { status: Rt } : null;
            });
          var r = n.prototype;
          return (
            (r.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (r.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== Lt && n !== It && (t = Lt)
                  : (n !== Lt && n !== It) || (t = zt);
              }
              this.updateStatus(!1, t);
            }),
            (r.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (r.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" !== typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (r.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === Lt)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : it.findDOMNode(this);
                    n && Ot(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === Rt &&
                  this.setState({ status: Pt });
            }),
            (r.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [it.findDOMNode(this), r],
                o = a[0],
                i = a[1],
                l = this.getTimeouts(),
                s = r ? l.appear : l.enter;
              (!e && !n) || Tt
                ? this.safeSetState({ status: It }, function () {
                    t.props.onEntered(o);
                  })
                : (this.props.onEnter(o, i),
                  this.safeSetState({ status: Lt }, function () {
                    t.props.onEntering(o, i),
                      t.onTransitionEnd(s, function () {
                        t.safeSetState({ status: It }, function () {
                          t.props.onEntered(o, i);
                        });
                      });
                  }));
            }),
            (r.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : it.findDOMNode(this);
              t && !Tt
                ? (this.props.onExit(r),
                  this.safeSetState({ status: zt }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: Rt }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: Rt }, function () {
                    e.props.onExited(r);
                  });
            }),
            (r.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (r.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (r.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (r.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : it.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    o = a[0],
                    i = a[1];
                  this.props.addEndListener(o, i);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (r.render = function () {
              var e = this.state.status;
              if (e === Pt) return null;
              var n = this.props,
                r = n.children;
              n.in,
                n.mountOnEnter,
                n.unmountOnExit,
                n.appear,
                n.enter,
                n.exit,
                n.timeout,
                n.addEndListener,
                n.onEnter,
                n.onEntering,
                n.onEntered,
                n.onExit,
                n.onExiting,
                n.onExited,
                n.nodeRef;
              var a = kt(n, [
                "children",
                "in",
                "mountOnEnter",
                "unmountOnExit",
                "appear",
                "enter",
                "exit",
                "timeout",
                "addEndListener",
                "onEnter",
                "onEntering",
                "onEntered",
                "onExit",
                "onExiting",
                "onExited",
                "nodeRef",
              ]);
              return t.createElement(
                jt.Provider,
                { value: null },
                "function" === typeof r
                  ? r(e, a)
                  : t.cloneElement(t.Children.only(r), a)
              );
            }),
            n
          );
        })(t.Component);
      function Dt() {}
      (Ft.contextType = jt),
        (Ft.propTypes = {}),
        (Ft.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: Dt,
          onEntering: Dt,
          onEntered: Dt,
          onExit: Dt,
          onExiting: Dt,
          onExited: Dt,
        }),
        (Ft.UNMOUNTED = Pt),
        (Ft.EXITED = Rt),
        (Ft.ENTERING = Lt),
        (Ft.ENTERED = It),
        (Ft.EXITING = zt);
      var Mt = Ft,
        At = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.add(r)
                  : (function (e, t) {
                      return e.classList
                        ? !!t && e.classList.contains(t)
                        : -1 !==
                            (
                              " " +
                              (e.className.baseVal || e.className) +
                              " "
                            ).indexOf(" " + t + " ");
                    })(n, r) ||
                    ("string" === typeof n.className
                      ? (n.className = n.className + " " + r)
                      : n.setAttribute(
                          "class",
                          ((n.className && n.className.baseVal) || "") + " " + r
                        )))
              );
              var n, r;
            })
          );
        },
        Bt = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : "string" === typeof n.className
                  ? (n.className = _t(n.className, r))
                  : n.setAttribute(
                      "class",
                      _t((n.className && n.className.baseVal) || "", r)
                    ))
              );
              var n, r;
            })
          );
        },
        Ut = (function (e) {
          function n() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (t.onEnter = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  o = r[1];
                t.removeClasses(a, "exit"),
                  t.addClass(a, o ? "appear" : "enter", "base"),
                  t.props.onEnter && t.props.onEnter(e, n);
              }),
              (t.onEntering = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  o = r[1] ? "appear" : "enter";
                t.addClass(a, o, "active"),
                  t.props.onEntering && t.props.onEntering(e, n);
              }),
              (t.onEntered = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  o = r[1] ? "appear" : "enter";
                t.removeClasses(a, o),
                  t.addClass(a, o, "done"),
                  t.props.onEntered && t.props.onEntered(e, n);
              }),
              (t.onExit = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "appear"),
                  t.removeClasses(n, "enter"),
                  t.addClass(n, "exit", "base"),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, "exit", "active"),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "exit"),
                  t.addClass(n, "exit", "done"),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  r = "string" === typeof n,
                  a = r ? "" + (r && n ? n + "-" : "") + e : n[e];
                return {
                  baseClassName: a,
                  activeClassName: r ? a + "-active" : n[e + "Active"],
                  doneClassName: r ? a + "-done" : n[e + "Done"],
                };
              }),
              t
            );
          }
          Ct(n, e);
          var r = n.prototype;
          return (
            (r.addClass = function (e, t, n) {
              var r = this.getClassNames(t)[n + "ClassName"],
                a = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === n && a && (r += " " + a),
                "active" === n && e && Ot(e),
                r && ((this.appliedClasses[t][n] = r), At(e, r));
            }),
            (r.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                a = n.active,
                o = n.done;
              (this.appliedClasses[t] = {}),
                r && Bt(e, r),
                a && Bt(e, a),
                o && Bt(e, o);
            }),
            (r.render = function () {
              var e = this.props;
              e.classNames;
              var n = kt(e, ["classNames"]);
              return t.createElement(
                Mt,
                Et({}, n, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              );
            }),
            n
          );
        })(t.Component);
      (Ut.defaultProps = { classNames: "" }), (Ut.propTypes = {});
      var Ht = Ut;
      function Vt() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return (0, t.useMemo)(function () {
          return e.every(function (e) {
            return null == e;
          })
            ? null
            : function (t) {
                e.forEach(function (e) {
                  !(function (e, t) {
                    if (null == e) return;
                    if (
                      (function (e) {
                        return !(
                          !e || "[object Function]" != {}.toString.call(e)
                        );
                      })(e)
                    )
                      e(t);
                    else
                      try {
                        e.current = t;
                      } catch (n) {
                        throw new Error(
                          'Cannot assign value "'
                            .concat(t, '" to ref "')
                            .concat(e, '"')
                        );
                      }
                  })(e, t);
                });
              };
        }, e);
      }
      var Wt = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.horizontal,
          i = e.onHide,
          l = e.onShow,
          s = e.visible,
          c = st(e, [
            "children",
            "className",
            "horizontal",
            "onHide",
            "onShow",
            "visible",
          ]),
          u = (0, t.useRef)(null),
          d = Vt(n, u),
          f = (0, t.useState)(),
          p = f[0],
          m = f[1],
          h = (0, t.useState)(),
          v = h[0],
          g = h[1];
        return t.createElement(
          Ht,
          {
            in: s,
            nodeRef: u,
            onEntering: function () {
              l && l(),
                o
                  ? u.current && g(u.current.scrollWidth)
                  : u.current && m(u.current.scrollHeight);
            },
            onEntered: function () {
              o ? g(0) : m(0);
            },
            onExit: function () {
              o
                ? u.current && g(u.current.scrollWidth)
                : u.current && m(u.current.scrollHeight);
            },
            onExiting: function () {
              i && i(), o ? g(0) : m(0);
            },
            onExited: function () {
              o ? g(0) : m(0);
            },
            timeout: 350,
          },
          function (e) {
            var n = 0 === p ? null : { height: p },
              i = 0 === v ? null : { width: v };
            return t.createElement(
              "div",
              lt(
                {
                  className: yt(a, {
                    "collapse-horizontal": o,
                    collapsing: "entering" === e || "exiting" === e,
                    "collapse show": "entered" === e,
                    collapse: "exited" === e,
                  }),
                  style: lt(lt({}, n), i),
                },
                c,
                { ref: d }
              ),
              r
            );
          }
        );
      });
      (Wt.propTypes = {
        children: ut.node,
        className: ut.string,
        horizontal: ut.bool,
        onHide: ut.func,
        onShow: ut.func,
        visible: ut.bool,
      }),
        (Wt.displayName = "CCollapse");
      var $t = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]),
          i = (0, t.useContext)(xt).visible;
        return t.createElement(
          Wt,
          { className: "accordion-collapse", visible: i },
          t.createElement(
            "div",
            lt({ className: yt("accordion-body", a) }, o, { ref: n }),
            r
          )
        );
      });
      ($t.propTypes = { children: ut.node, className: ut.string }),
        ($t.displayName = "CAccordionBody");
      var Qt = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]),
          i = (0, t.useContext)(xt),
          l = i.visible,
          s = i.setVisible;
        return t.createElement(
          "button",
          lt(
            {
              type: "button",
              className: yt("accordion-button", { collapsed: !l }, a),
              "aria-expanded": !l,
              onClick: function () {
                return s(!l);
              },
            },
            o,
            { ref: n }
          ),
          r
        );
      });
      (Qt.propTypes = { children: ut.node, className: ut.string }),
        (Qt.displayName = "CAccordionButton");
      var qt = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("accordion-header", a) }, o, { ref: n }),
          t.createElement(Qt, null, r)
        );
      });
      (qt.propTypes = { children: ut.node, className: ut.string }),
        (qt.displayName = "CAccordionHeader");
      var Kt = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = e.disabled,
          o = e.white,
          i = st(e, ["className", "disabled", "white"]);
        return t.createElement(
          "button",
          lt(
            {
              type: "button",
              className: yt("btn", "btn-close", { "btn-close-white": o }, a, r),
              "aria-label": "Close",
              disabled: a,
            },
            i,
            { ref: n }
          )
        );
      });
      (Kt.propTypes = {
        className: ut.string,
        disabled: ut.bool,
        white: ut.bool,
      }),
        (Kt.displayName = "CCloseButton");
      var Yt = ut.oneOfType([
          ut.oneOf([
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "dark",
            "light",
          ]),
          ut.string,
        ]),
        Gt = ut.oneOf([
          "auto",
          "auto-start",
          "auto-end",
          "top-end",
          "top",
          "top-start",
          "bottom-end",
          "bottom",
          "bottom-start",
          "right-start",
          "right",
          "right-end",
          "left-start",
          "left",
          "left-end",
        ]),
        Xt = ut.oneOfType([
          ut.oneOf([
            "rounded",
            "rounded-top",
            "rounded-end",
            "rounded-bottom",
            "rounded-start",
            "rounded-circle",
            "rounded-pill",
            "rounded-0",
            "rounded-1",
            "rounded-2",
            "rounded-3",
          ]),
          ut.string,
        ]),
        Jt = ut.oneOfType([Yt, ut.oneOf(["white", "muted"]), ut.string]),
        Zt = ut.oneOf(["hover", "focus", "click"]),
        en = (0, t.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.className,
            o = e.color,
            i = void 0 === o ? "primary" : o,
            l = e.dismissible,
            s = e.variant,
            c = e.visible,
            u = void 0 === c || c,
            d = e.onClose,
            f = st(e, [
              "children",
              "className",
              "color",
              "dismissible",
              "variant",
              "visible",
              "onClose",
            ]),
            p = (0, t.useRef)(null),
            m = Vt(n, p),
            h = (0, t.useState)(u),
            v = h[0],
            g = h[1];
          return (
            (0, t.useEffect)(
              function () {
                g(u);
              },
              [u]
            ),
            t.createElement(
              Mt,
              {
                in: v,
                mountOnEnter: !0,
                nodeRef: p,
                onExit: d,
                timeout: 150,
                unmountOnExit: !0,
              },
              function (e) {
                return t.createElement(
                  "div",
                  lt(
                    {
                      className: yt(
                        "alert",
                        "solid" === s
                          ? "bg-".concat(i, " text-white")
                          : "alert-".concat(i),
                        { "alert-dismissible fade": l, show: "entered" === e },
                        a
                      ),
                      role: "alert",
                    },
                    f,
                    { ref: m }
                  ),
                  r,
                  l &&
                    t.createElement(Kt, {
                      onClick: function () {
                        return g(!1);
                      },
                    })
                );
              }
            )
          );
        });
      (en.propTypes = {
        children: ut.node,
        className: ut.string,
        color: Yt.isRequired,
        dismissible: ut.bool,
        onClose: ut.func,
        variant: ut.string,
        visible: ut.bool,
      }),
        (en.displayName = "CAlert");
      var tn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.component,
          i = void 0 === o ? "h4" : o,
          l = st(e, ["children", "className", "component"]);
        return t.createElement(
          i,
          lt({ className: yt("alert-heading", a) }, l, { ref: n }),
          r
        );
      });
      (tn.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (tn.displayName = "CAlertHeading");
      var nn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.active,
          o = e.className,
          i = e.component,
          l = void 0 === i ? "a" : i,
          s = e.disabled,
          c = st(e, [
            "children",
            "active",
            "className",
            "component",
            "disabled",
          ]);
        return t.createElement(
          l,
          lt(
            { className: yt(o, { active: a, disabled: s }) },
            a && { "aria-current": "page" },
            "a" === l && s && { "aria-disabled": !0, tabIndex: -1 },
            ("a" === l || "button" === l) && {
              onClick: function (e) {
                e.preventDefault, !s && c.onClick && c.onClick(e);
              },
            },
            { disabled: s },
            c,
            { ref: n }
          ),
          r
        );
      });
      (nn.propTypes = {
        active: ut.bool,
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
        disabled: ut.bool,
      }),
        (nn.displayName = "CLink");
      var rn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          nn,
          lt({ className: yt("alert-link", a) }, o, { ref: n }),
          r
        );
      });
      (rn.propTypes = { children: ut.node, className: ut.string }),
        (rn.displayName = "CAlertLink");
      var an = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.color,
          l = e.shape,
          s = e.size,
          c = e.src,
          u = e.status,
          d = e.textColor,
          f = st(e, [
            "children",
            "className",
            "color",
            "shape",
            "size",
            "src",
            "status",
            "textColor",
          ]),
          p = u && yt("avatar-status", "bg-".concat(u));
        return t.createElement(
          "div",
          lt(
            {
              className: yt(
                "avatar",
                ((r = {}),
                (r["bg-".concat(i)] = i),
                (r["avatar-".concat(s)] = s),
                (r["text-".concat(d)] = d),
                r),
                l,
                o
              ),
            },
            f,
            { ref: n }
          ),
          c ? t.createElement("img", { src: c, className: "avatar-img" }) : a,
          u && t.createElement("span", { className: p })
        );
      });
      (an.propTypes = {
        children: ut.node,
        className: ut.string,
        color: Yt,
        shape: Xt,
        size: ut.string,
        src: ut.string,
        status: ut.string,
        textColor: Jt,
      }),
        (an.displayName = "CAvatar");
      var on = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = void 0 === r ? "modal-backdrop" : r,
          o = e.visible,
          i = st(e, ["className", "visible"]),
          l = (0, t.useRef)(null),
          s = Vt(n, l);
        return t.createElement(
          Mt,
          {
            in: o,
            mountOnEnter: !0,
            nodeRef: l,
            timeout: 150,
            unmountOnExit: !0,
          },
          function (e) {
            return t.createElement(
              "div",
              lt({ className: yt(a, "fade", { show: "entered" === e }) }, i, {
                ref: s,
              })
            );
          }
        );
      });
      (on.propTypes = { className: ut.string, visible: ut.bool }),
        (on.displayName = "CBackdrop");
      var ln = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.color,
          l = e.component,
          s = void 0 === l ? "span" : l,
          c = e.position,
          u = e.shape,
          d = e.size,
          f = e.textColor,
          p = st(e, [
            "children",
            "className",
            "color",
            "component",
            "position",
            "shape",
            "size",
            "textColor",
          ]);
        return t.createElement(
          s,
          lt(
            {
              className: yt(
                "badge",
                ((r = {}),
                (r["bg-".concat(i)] = i),
                (r["position-absolute translate-middle"] = c),
                (r["top-0"] =
                  null === c || void 0 === c ? void 0 : c.includes("top")),
                (r["top-100"] =
                  null === c || void 0 === c ? void 0 : c.includes("bottom")),
                (r["start-100"] =
                  null === c || void 0 === c ? void 0 : c.includes("end")),
                (r["start-0"] =
                  null === c || void 0 === c ? void 0 : c.includes("start")),
                (r["badge-".concat(d)] = d),
                (r["text-".concat(f)] = f),
                r),
                u,
                o
              ),
            },
            p,
            { ref: n }
          ),
          a
        );
      });
      (ln.propTypes = {
        children: ut.node,
        className: ut.string,
        color: Yt,
        component: ut.string,
        position: ut.oneOf([
          "top-start",
          "top-end",
          "bottom-end",
          "bottom-start",
        ]),
        shape: Xt,
        size: ut.oneOf(["sm"]),
        textColor: Jt,
      }),
        (ln.displayName = "CBadge");
      var sn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "nav",
          { "aria-label": "breadcrumb" },
          t.createElement(
            "ol",
            lt({ className: yt("breadcrumb", a) }, o, { ref: n }),
            r
          )
        );
      });
      (sn.propTypes = { children: ut.node, className: ut.string }),
        (sn.displayName = "CBreadcrumb");
      var cn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.active,
          o = e.className,
          i = e.href,
          l = st(e, ["children", "active", "className", "href"]);
        return t.createElement(
          "li",
          lt(
            { className: yt("breadcrumb-item", { active: a }, o) },
            a && { "aria-current": "page" },
            l,
            { ref: n }
          ),
          i ? t.createElement(nn, { href: i }, r) : r
        );
      });
      (cn.propTypes = {
        active: ut.bool,
        children: ut.node,
        className: ut.string,
        href: ut.string,
      }),
        (cn.displayName = "CBreadcrumbItem");
      var un = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.color,
          l = void 0 === i ? "primary" : i,
          s = e.component,
          c = void 0 === s ? "button" : s,
          u = e.shape,
          d = e.size,
          f = e.type,
          p = void 0 === f ? "button" : f,
          m = e.variant,
          h = st(e, [
            "children",
            "className",
            "color",
            "component",
            "shape",
            "size",
            "type",
            "variant",
          ]);
        return t.createElement(
          nn,
          lt(
            {
              component: h.href ? "a" : c,
              type: p,
              className: yt(
                "btn",
                m ? "btn-".concat(m, "-").concat(l) : "btn-".concat(l),
                ((r = {}), (r["btn-".concat(d)] = d), r),
                u,
                o
              ),
            },
            h,
            { ref: n }
          ),
          a
        );
      });
      (un.propTypes = {
        children: ut.node,
        className: ut.string,
        color: Yt,
        component: ut.elementType,
        shape: ut.string,
        size: ut.oneOf(["sm", "lg"]),
        type: ut.oneOf(["button", "submit", "reset"]),
        variant: ut.oneOf(["outline", "ghost"]),
      }),
        (un.displayName = "CButton");
      var dn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("btn-toolbar", a) }, o, { ref: n }),
          r
        );
      });
      (dn.propTypes = { children: ut.node, className: ut.string }),
        (dn.displayName = "CButtonToolbar");
      var fn = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.size,
          l = e.vertical,
          s = st(e, ["children", "className", "size", "vertical"]);
        return t.createElement(
          "div",
          lt(
            {
              className: yt(
                l ? "btn-group-vertical" : "btn-group",
                ((r = {}), (r["btn-group-".concat(i)] = i), r),
                o
              ),
            },
            s,
            { ref: n }
          ),
          a
        );
      });
      (fn.propTypes = {
        children: ut.node,
        className: ut.string,
        size: ut.oneOf(["sm", "lg"]),
        vertical: ut.bool,
      }),
        (fn.displayName = "CButtonGroup");
      var pn = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.color,
          l = st(e, ["children", "className", "color"]);
        return t.createElement(
          "div",
          lt(
            {
              className: yt(
                "callout",
                ((r = {}), (r["callout-".concat(i)] = i), r),
                o
              ),
            },
            l,
            { ref: n }
          ),
          a
        );
      });
      (pn.propTypes = { children: ut.node, className: ut.string, color: Yt }),
        (pn.displayName = "CCallout");
      var mn = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.color,
          l = e.textColor,
          s = st(e, ["children", "className", "color", "textColor"]);
        return t.createElement(
          "div",
          lt(
            {
              className: yt(
                "card",
                ((r = {}),
                (r["bg-".concat(i)] = i),
                (r["text-".concat(l)] = l),
                r),
                o
              ),
            },
            s,
            { ref: n }
          ),
          a
        );
      });
      (mn.propTypes = {
        children: ut.node,
        className: ut.string,
        color: Yt,
        textColor: ut.string,
      }),
        (mn.displayName = "CCard");
      var hn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("card-body", a) }, o, { ref: n }),
          r
        );
      });
      (hn.propTypes = { children: ut.node, className: ut.string }),
        (hn.displayName = "CCardBody");
      var vn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("card-footer", a) }, o, { ref: n }),
          r
        );
      });
      (vn.propTypes = { children: ut.node, className: ut.string }),
        (vn.displayName = "CCardFooter");
      var gn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("card-group", a) }, o, { ref: n }),
          r
        );
      });
      (gn.propTypes = { children: ut.node, className: ut.string }),
        (gn.displayName = "CCardGroup");
      var yn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = void 0 === a ? "div" : a,
          i = e.className,
          l = st(e, ["children", "component", "className"]);
        return t.createElement(
          o,
          lt({ className: yt("card-header", i) }, l, { ref: n }),
          r
        );
      });
      (yn.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (yn.displayName = "CCardHeader");
      var bn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.component,
          i = void 0 === o ? "img" : o,
          l = e.orientation,
          s = st(e, ["children", "className", "component", "orientation"]);
        return t.createElement(
          i,
          lt({ className: yt(l ? "card-img-".concat(l) : "card-img", a) }, s, {
            ref: n,
          }),
          r
        );
      });
      (bn.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
        orientation: ut.oneOf(["top", "bottom"]),
      }),
        (bn.displayName = "CCardImage");
      var wn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("card-img-overlay", a) }, o, { ref: n }),
          r
        );
      });
      (wn.propTypes = { children: ut.node, className: ut.string }),
        (wn.displayName = "CCardImageOverlay");
      var xn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          nn,
          lt({ className: yt("card-link", a) }, o, { ref: n }),
          r
        );
      });
      (xn.propTypes = { children: ut.node, className: ut.string }),
        (xn.displayName = "CCardLink");
      var Nn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = void 0 === a ? "h6" : a,
          i = e.className,
          l = st(e, ["children", "component", "className"]);
        return t.createElement(
          o,
          lt({ className: yt("card-subtitle", i) }, l, { ref: n }),
          r
        );
      });
      (Nn.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (Nn.displayName = "CCardSubtitle");
      var En = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = void 0 === a ? "p" : a,
          i = e.className,
          l = st(e, ["children", "component", "className"]);
        return t.createElement(
          o,
          lt({ className: yt("card-text", i) }, l, { ref: n }),
          r
        );
      });
      (En.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (En.displayName = "CCardText");
      var kn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = void 0 === a ? "h5" : a,
          i = e.className,
          l = st(e, ["children", "component", "className"]);
        return t.createElement(
          o,
          lt({ className: yt("card-title", i) }, l, { ref: n }),
          r
        );
      });
      (kn.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (kn.displayName = "CCardTitle");
      var Sn = function (e) {
          var t = e.getBoundingClientRect();
          return (
            Math.floor(t.top) >= 0 &&
            Math.floor(t.left) >= 0 &&
            Math.floor(t.bottom) <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            Math.floor(t.right) <=
              (window.innerWidth || document.documentElement.clientWidth)
          );
        },
        Cn = (0, t.createContext)({}),
        _n = (0, t.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.activeIndex,
            o = void 0 === a ? 0 : a,
            i = e.className,
            l = e.controls,
            s = e.dark,
            c = e.indicators,
            u = e.interval,
            d = void 0 === u ? 5e3 : u,
            f = e.onSlid,
            p = e.onSlide,
            m = e.pause,
            h = void 0 === m ? "hover" : m,
            v = e.touch,
            g = void 0 === v || v,
            y = e.transition,
            b = e.wrap,
            w = void 0 === b || b,
            x = st(e, [
              "children",
              "activeIndex",
              "className",
              "controls",
              "dark",
              "indicators",
              "interval",
              "onSlid",
              "onSlide",
              "pause",
              "touch",
              "transition",
              "wrap",
            ]),
            N = (0, t.useRef)(null),
            E = Vt(n, N),
            k = (0, t.useRef)({}).current,
            S = (0, t.useState)(o),
            C = S[0],
            _ = S[1],
            T = (0, t.useState)(!1),
            j = T[0],
            O = T[1],
            P = (0, t.useState)(),
            R = P[0],
            L = P[1],
            I = (0, t.useState)("next"),
            z = I[0],
            F = I[1],
            D = (0, t.useState)(0),
            M = D[0],
            A = D[1],
            B = (0, t.useState)(null),
            U = B[0],
            H = B[1],
            V = (0, t.useState)(),
            W = V[0],
            $ = V[1];
          (0, t.useEffect)(function () {
            A(t.Children.toArray(r).length);
          }),
            (0, t.useEffect)(
              function () {
                W && Q();
              },
              [W]
            ),
            (0, t.useEffect)(
              function () {
                !j && Q(), !j && f && f(C, z), j && p && p(C, z);
              },
              [j]
            ),
            (0, t.useEffect)(function () {
              return (
                window.addEventListener("scroll", G),
                function () {
                  window.removeEventListener("scroll", G);
                }
              );
            });
          var Q = function () {
              q(),
                (w || C !== M - 1) &&
                  "number" === typeof d &&
                  (k.timeout = setTimeout(
                    function () {
                      return K();
                    },
                    "number" === typeof R ? R : d
                  ));
            },
            q = function () {
              return h && k.timeout && clearTimeout(k.timeout);
            },
            K = function () {
              if (!document.hidden && N.current && Sn(N.current)) {
                if (j) return;
                Y("next");
              }
            },
            Y = function (e) {
              j ||
                (F(e),
                _(
                  "next" === e
                    ? C === M - 1
                      ? 0
                      : C + 1
                    : 0 === C
                    ? M - 1
                    : C - 1
                ));
            },
            G = function () {
              !document.hidden && N.current && Sn(N.current) ? $(!0) : $(!1);
            };
          return t.createElement(
            "div",
            lt(
              {
                className: yt(
                  "carousel slide",
                  { "carousel-dark": s, "carousel-fade": "crossfade" === y },
                  i
                ),
                onMouseEnter: q,
                onMouseLeave: Q,
              },
              g && {
                onTouchStart: function (e) {
                  var t = e.touches[0].clientX;
                  H(t);
                },
                onTouchMove: function (e) {
                  if (null !== U) {
                    var t = U - e.touches[0].clientX;
                    t > 5 && Y("next"), t < -5 && Y("prev"), H(null);
                  }
                },
              },
              x,
              { ref: E }
            ),
            t.createElement(
              Cn.Provider,
              { value: { setAnimating: O, setCustomInterval: L } },
              c &&
                t.createElement(
                  "ol",
                  { className: "carousel-indicators" },
                  Array.from({ length: M }, function (e, t) {
                    return t;
                  }).map(function (e) {
                    return t.createElement("li", {
                      key: "indicator".concat(e),
                      onClick: function () {
                        !j &&
                          (function (e) {
                            if (C !== e)
                              C < e
                                ? (F("next"), _(e))
                                : C > e && (F("prev"), _(e));
                          })(e);
                      },
                      className: C === e ? "active" : "",
                      "data-coreui-target": "",
                    });
                  })
                ),
              t.createElement(
                "div",
                { className: "carousel-inner" },
                t.Children.map(r, function (e, n) {
                  if (t.isValidElement(e))
                    return t.cloneElement(e, {
                      active: C === n,
                      direction: z,
                      key: n,
                    });
                })
              ),
              l &&
                t.createElement(
                  t.Fragment,
                  null,
                  t.createElement(
                    "button",
                    {
                      className: "carousel-control-prev",
                      onClick: function () {
                        return Y("prev");
                      },
                    },
                    t.createElement("span", {
                      className: "carousel-control-prev-icon",
                      "aria-label": "prev",
                    })
                  ),
                  t.createElement(
                    "button",
                    {
                      className: "carousel-control-next",
                      onClick: function () {
                        return Y("next");
                      },
                    },
                    t.createElement("span", {
                      className: "carousel-control-next-icon",
                      "aria-label": "next",
                    })
                  )
                )
            )
          );
        });
      (_n.propTypes = {
        activeIndex: ut.number,
        children: ut.node,
        className: ut.string,
        controls: ut.bool,
        dark: ut.bool,
        indicators: ut.bool,
        interval: ut.oneOfType([ut.bool, ut.number]),
        onSlid: ut.func,
        onSlide: ut.func,
        pause: ut.oneOf([!1, "hover"]),
        touch: ut.bool,
        transition: ut.oneOf(["slide", "crossfade"]),
        wrap: ut.bool,
      }),
        (_n.displayName = "CCarousel");
      var Tn = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = st(e, ["className"]);
        return t.createElement(
          "div",
          lt({ className: yt("carousel-caption", r) }, a, { ref: n })
        );
      });
      (Tn.propTypes = { className: ut.string }),
        (Tn.displayName = "CCarouselCaption");
      var jn = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.active,
          i = e.direction,
          l = e.interval,
          s = void 0 !== l && l,
          c = st(e, [
            "children",
            "className",
            "active",
            "direction",
            "interval",
          ]),
          u = (0, t.useContext)(Cn),
          d = u.setAnimating,
          f = u.setCustomInterval,
          p = (0, t.useRef)(null),
          m = Vt(n, p),
          h = (0, t.useRef)(),
          v = (0, t.useState)(),
          g = v[0],
          y = v[1],
          b = (0, t.useState)(),
          w = b[0],
          x = b[1],
          N = (0, t.useState)(o && "active"),
          E = N[0],
          k = N[1],
          S = (0, t.useState)(0),
          C = S[0],
          _ = S[1];
        return (
          (0, t.useEffect)(
            function () {
              o && (f(s), 0 !== C && x("carousel-item-".concat(i))),
                h.current && !o && k("active"),
                (o || h.current) &&
                  setTimeout(function () {
                    var e;
                    0 !== C &&
                      (null === (e = p.current) ||
                        void 0 === e ||
                        e.offsetHeight,
                      y(
                        "carousel-item-".concat("next" === i ? "start" : "end")
                      ));
                  }, 0),
                (h.current = o),
                0 === C && _(C + 1);
            },
            [o]
          ),
          (0, t.useEffect)(function () {
            var e, t;
            return (
              null === (e = p.current) ||
                void 0 === e ||
                e.addEventListener("transitionstart", function () {
                  o && d(!0);
                }),
              null === (t = p.current) ||
                void 0 === t ||
                t.addEventListener("transitionend", function () {
                  o && d(!1), y(""), x(""), o && k("active"), o || k("");
                }),
              function () {
                var e, t;
                null === (e = p.current) ||
                  void 0 === e ||
                  e.removeEventListener("transitionstart", function () {
                    o && d(!0);
                  }),
                  null === (t = p.current) ||
                    void 0 === t ||
                    t.removeEventListener("transitionend", function () {
                      o && d(!1), y(""), x(""), o && k("active"), o || k("");
                    });
              }
            );
          }),
          t.createElement(
            "div",
            lt({ className: yt("carousel-item", E, g, w, a), ref: m }, c),
            r
          )
        );
      });
      (jn.propTypes = {
        active: ut.bool,
        children: ut.node,
        className: ut.string,
        direction: ut.string,
        interval: ut.oneOfType([ut.bool, ut.number]),
      }),
        (jn.displayName = "CCarouselItem");
      var On = function (e) {
        var n = e.children,
          r = e.portal;
        return "undefined" !== typeof window && r
          ? (0, it.createPortal)(n, document.body)
          : t.createElement(t.Fragment, null, n);
      };
      (On.propTypes = { children: ut.node, portal: ut.bool.isRequired }),
        (On.displayName = "CConditionalPortal");
      var Pn = t.createContext(),
        Rn = t.createContext();
      function Ln(e) {
        var n = e.children,
          r = t.useState(null),
          a = r[0],
          o = r[1],
          i = t.useRef(!1);
        t.useEffect(function () {
          return function () {
            i.current = !0;
          };
        }, []);
        var l = t.useCallback(function (e) {
          i.current || o(e);
        }, []);
        return t.createElement(
          Pn.Provider,
          { value: a },
          t.createElement(Rn.Provider, { value: l }, n)
        );
      }
      var In = function (e) {
          return Array.isArray(e) ? e[0] : e;
        },
        zn = function (e) {
          if ("function" === typeof e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return e.apply(void 0, n);
          }
        },
        Fn = function (e, t) {
          if ("function" === typeof e) return zn(e, t);
          null != e && (e.current = t);
        },
        Dn = function (e) {
          return e.reduce(function (e, t) {
            var n = t[0],
              r = t[1];
            return (e[n] = r), e;
          }, {});
        },
        Mn =
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
            ? t.useLayoutEffect
            : t.useEffect,
        An = "top",
        Bn = "bottom",
        Un = "right",
        Hn = "left",
        Vn = "auto",
        Wn = [An, Bn, Un, Hn],
        $n = "start",
        Qn = "end",
        qn = "clippingParents",
        Kn = "viewport",
        Yn = "popper",
        Gn = "reference",
        Xn = Wn.reduce(function (e, t) {
          return e.concat([t + "-" + $n, t + "-" + Qn]);
        }, []),
        Jn = [].concat(Wn, [Vn]).reduce(function (e, t) {
          return e.concat([t, t + "-" + $n, t + "-" + Qn]);
        }, []),
        Zn = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function er(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function tr(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function nr(e) {
        return e instanceof tr(e).Element || e instanceof Element;
      }
      function rr(e) {
        return e instanceof tr(e).HTMLElement || e instanceof HTMLElement;
      }
      function ar(e) {
        return (
          "undefined" !== typeof ShadowRoot &&
          (e instanceof tr(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var or = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              a = t.elements[e];
            rr(a) &&
              er(a) &&
              (Object.assign(a.style, n),
              Object.keys(r).forEach(function (e) {
                var t = r[e];
                !1 === t
                  ? a.removeAttribute(e)
                  : a.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var r = t.elements[e],
                  a = t.attributes[e] || {},
                  o = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                rr(r) &&
                  er(r) &&
                  (Object.assign(r.style, o),
                  Object.keys(a).forEach(function (e) {
                    r.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function ir(e) {
        return e.split("-")[0];
      }
      var lr = Math.max,
        sr = Math.min,
        cr = Math.round;
      function ur() {
        var e = navigator.userAgentData;
        return null != e && e.brands
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function dr() {
        return !/^((?!chrome|android).)*safari/i.test(ur());
      }
      function fr(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          a = 1,
          o = 1;
        t &&
          rr(e) &&
          ((a = (e.offsetWidth > 0 && cr(r.width) / e.offsetWidth) || 1),
          (o = (e.offsetHeight > 0 && cr(r.height) / e.offsetHeight) || 1));
        var i = (nr(e) ? tr(e) : window).visualViewport,
          l = !dr() && n,
          s = (r.left + (l && i ? i.offsetLeft : 0)) / a,
          c = (r.top + (l && i ? i.offsetTop : 0)) / o,
          u = r.width / a,
          d = r.height / o;
        return {
          width: u,
          height: d,
          top: c,
          right: s + u,
          bottom: c + d,
          left: s,
          x: s,
          y: c,
        };
      }
      function pr(e) {
        var t = fr(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function mr(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && ar(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function hr(e) {
        return tr(e).getComputedStyle(e);
      }
      function vr(e) {
        return ["table", "td", "th"].indexOf(er(e)) >= 0;
      }
      function gr(e) {
        return ((nr(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function yr(e) {
        return "html" === er(e)
          ? e
          : e.assignedSlot || e.parentNode || (ar(e) ? e.host : null) || gr(e);
      }
      function br(e) {
        return rr(e) && "fixed" !== hr(e).position ? e.offsetParent : null;
      }
      function wr(e) {
        for (
          var t = tr(e), n = br(e);
          n && vr(n) && "static" === hr(n).position;

        )
          n = br(n);
        return n &&
          ("html" === er(n) ||
            ("body" === er(n) && "static" === hr(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(ur());
                if (
                  /Trident/i.test(ur()) &&
                  rr(e) &&
                  "fixed" === hr(e).position
                )
                  return null;
                var n = yr(e);
                for (
                  ar(n) && (n = n.host);
                  rr(n) && ["html", "body"].indexOf(er(n)) < 0;

                ) {
                  var r = hr(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function xr(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Nr(e, t, n) {
        return lr(e, sr(t, n));
      }
      function Er(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function kr(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      var Sr = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            a = e.options,
            o = n.elements.arrow,
            i = n.modifiersData.popperOffsets,
            l = ir(n.placement),
            s = xr(l),
            c = [Hn, Un].indexOf(l) >= 0 ? "height" : "width";
          if (o && i) {
            var u = (function (e, t) {
                return Er(
                  "number" !==
                    typeof (e =
                      "function" === typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : kr(e, Wn)
                );
              })(a.padding, n),
              d = pr(o),
              f = "y" === s ? An : Hn,
              p = "y" === s ? Bn : Un,
              m =
                n.rects.reference[c] +
                n.rects.reference[s] -
                i[s] -
                n.rects.popper[c],
              h = i[s] - n.rects.reference[s],
              v = wr(o),
              g = v
                ? "y" === s
                  ? v.clientHeight || 0
                  : v.clientWidth || 0
                : 0,
              y = m / 2 - h / 2,
              b = u[f],
              w = g - d[c] - u[p],
              x = g / 2 - d[c] / 2 + y,
              N = Nr(b, x, w),
              E = s;
            n.modifiersData[r] =
              (((t = {})[E] = N), (t.centerOffset = N - x), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" !== typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            mr(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Cr(e) {
        return e.split("-")[1];
      }
      var _r = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Tr(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          a = e.placement,
          o = e.variation,
          i = e.offsets,
          l = e.position,
          s = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          d = e.isFixed,
          f = i.x,
          p = void 0 === f ? 0 : f,
          m = i.y,
          h = void 0 === m ? 0 : m,
          v = "function" === typeof u ? u({ x: p, y: h }) : { x: p, y: h };
        (p = v.x), (h = v.y);
        var g = i.hasOwnProperty("x"),
          y = i.hasOwnProperty("y"),
          b = Hn,
          w = An,
          x = window;
        if (c) {
          var N = wr(n),
            E = "clientHeight",
            k = "clientWidth";
          if (
            (N === tr(n) &&
              "static" !== hr((N = gr(n))).position &&
              "absolute" === l &&
              ((E = "scrollHeight"), (k = "scrollWidth")),
            a === An || ((a === Hn || a === Un) && o === Qn))
          )
            (w = Bn),
              (h -=
                (d && N === x && x.visualViewport
                  ? x.visualViewport.height
                  : N[E]) - r.height),
              (h *= s ? 1 : -1);
          if (a === Hn || ((a === An || a === Bn) && o === Qn))
            (b = Un),
              (p -=
                (d && N === x && x.visualViewport
                  ? x.visualViewport.width
                  : N[k]) - r.width),
              (p *= s ? 1 : -1);
        }
        var S,
          C = Object.assign({ position: l }, c && _r),
          _ =
            !0 === u
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                  return { x: cr(t * r) / r || 0, y: cr(n * r) / r || 0 };
                })({ x: p, y: h })
              : { x: p, y: h };
        return (
          (p = _.x),
          (h = _.y),
          s
            ? Object.assign(
                {},
                C,
                (((S = {})[w] = y ? "0" : ""),
                (S[b] = g ? "0" : ""),
                (S.transform =
                  (x.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + h + "px)"
                    : "translate3d(" + p + "px, " + h + "px, 0)"),
                S)
              )
            : Object.assign(
                {},
                C,
                (((t = {})[w] = y ? h + "px" : ""),
                (t[b] = g ? p + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      var jr = { passive: !0 };
      var Or = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Pr(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Or[e];
        });
      }
      var Rr = { start: "end", end: "start" };
      function Lr(e) {
        return e.replace(/start|end/g, function (e) {
          return Rr[e];
        });
      }
      function Ir(e) {
        var t = tr(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function zr(e) {
        return fr(gr(e)).left + Ir(e).scrollLeft;
      }
      function Fr(e) {
        var t = hr(e),
          n = t.overflow,
          r = t.overflowX,
          a = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + a + r);
      }
      function Dr(e) {
        return ["html", "body", "#document"].indexOf(er(e)) >= 0
          ? e.ownerDocument.body
          : rr(e) && Fr(e)
          ? e
          : Dr(yr(e));
      }
      function Mr(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = Dr(e),
          a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          o = tr(r),
          i = a ? [o].concat(o.visualViewport || [], Fr(r) ? r : []) : r,
          l = t.concat(i);
        return a ? l : l.concat(Mr(yr(i)));
      }
      function Ar(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Br(e, t, n) {
        return t === Kn
          ? Ar(
              (function (e, t) {
                var n = tr(e),
                  r = gr(e),
                  a = n.visualViewport,
                  o = r.clientWidth,
                  i = r.clientHeight,
                  l = 0,
                  s = 0;
                if (a) {
                  (o = a.width), (i = a.height);
                  var c = dr();
                  (c || (!c && "fixed" === t)) &&
                    ((l = a.offsetLeft), (s = a.offsetTop));
                }
                return { width: o, height: i, x: l + zr(e), y: s };
              })(e, n)
            )
          : nr(t)
          ? (function (e, t) {
              var n = fr(e, !1, "fixed" === t);
              return (
                (n.top = n.top + e.clientTop),
                (n.left = n.left + e.clientLeft),
                (n.bottom = n.top + e.clientHeight),
                (n.right = n.left + e.clientWidth),
                (n.width = e.clientWidth),
                (n.height = e.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(t, n)
          : Ar(
              (function (e) {
                var t,
                  n = gr(e),
                  r = Ir(e),
                  a = null == (t = e.ownerDocument) ? void 0 : t.body,
                  o = lr(
                    n.scrollWidth,
                    n.clientWidth,
                    a ? a.scrollWidth : 0,
                    a ? a.clientWidth : 0
                  ),
                  i = lr(
                    n.scrollHeight,
                    n.clientHeight,
                    a ? a.scrollHeight : 0,
                    a ? a.clientHeight : 0
                  ),
                  l = -r.scrollLeft + zr(e),
                  s = -r.scrollTop;
                return (
                  "rtl" === hr(a || n).direction &&
                    (l += lr(n.clientWidth, a ? a.clientWidth : 0) - o),
                  { width: o, height: i, x: l, y: s }
                );
              })(gr(e))
            );
      }
      function Ur(e, t, n, r) {
        var a =
            "clippingParents" === t
              ? (function (e) {
                  var t = Mr(yr(e)),
                    n =
                      ["absolute", "fixed"].indexOf(hr(e).position) >= 0 &&
                      rr(e)
                        ? wr(e)
                        : e;
                  return nr(n)
                    ? t.filter(function (e) {
                        return nr(e) && mr(e, n) && "body" !== er(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          o = [].concat(a, [n]),
          i = o[0],
          l = o.reduce(function (t, n) {
            var a = Br(e, n, r);
            return (
              (t.top = lr(a.top, t.top)),
              (t.right = sr(a.right, t.right)),
              (t.bottom = sr(a.bottom, t.bottom)),
              (t.left = lr(a.left, t.left)),
              t
            );
          }, Br(e, i, r));
        return (
          (l.width = l.right - l.left),
          (l.height = l.bottom - l.top),
          (l.x = l.left),
          (l.y = l.top),
          l
        );
      }
      function Hr(e) {
        var t,
          n = e.reference,
          r = e.element,
          a = e.placement,
          o = a ? ir(a) : null,
          i = a ? Cr(a) : null,
          l = n.x + n.width / 2 - r.width / 2,
          s = n.y + n.height / 2 - r.height / 2;
        switch (o) {
          case An:
            t = { x: l, y: n.y - r.height };
            break;
          case Bn:
            t = { x: l, y: n.y + n.height };
            break;
          case Un:
            t = { x: n.x + n.width, y: s };
            break;
          case Hn:
            t = { x: n.x - r.width, y: s };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = o ? xr(o) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (i) {
            case $n:
              t[c] = t[c] - (n[u] / 2 - r[u] / 2);
              break;
            case Qn:
              t[c] = t[c] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      function Vr(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          a = void 0 === r ? e.placement : r,
          o = n.strategy,
          i = void 0 === o ? e.strategy : o,
          l = n.boundary,
          s = void 0 === l ? qn : l,
          c = n.rootBoundary,
          u = void 0 === c ? Kn : c,
          d = n.elementContext,
          f = void 0 === d ? Yn : d,
          p = n.altBoundary,
          m = void 0 !== p && p,
          h = n.padding,
          v = void 0 === h ? 0 : h,
          g = Er("number" !== typeof v ? v : kr(v, Wn)),
          y = f === Yn ? Gn : Yn,
          b = e.rects.popper,
          w = e.elements[m ? y : f],
          x = Ur(
            nr(w) ? w : w.contextElement || gr(e.elements.popper),
            s,
            u,
            i
          ),
          N = fr(e.elements.reference),
          E = Hr({
            reference: N,
            element: b,
            strategy: "absolute",
            placement: a,
          }),
          k = Ar(Object.assign({}, b, E)),
          S = f === Yn ? k : N,
          C = {
            top: x.top - S.top + g.top,
            bottom: S.bottom - x.bottom + g.bottom,
            left: x.left - S.left + g.left,
            right: S.right - x.right + g.right,
          },
          _ = e.modifiersData.offset;
        if (f === Yn && _) {
          var T = _[a];
          Object.keys(C).forEach(function (e) {
            var t = [Un, Bn].indexOf(e) >= 0 ? 1 : -1,
              n = [An, Bn].indexOf(e) >= 0 ? "y" : "x";
            C[e] += T[n] * t;
          });
        }
        return C;
      }
      function Wr(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          a = n.boundary,
          o = n.rootBoundary,
          i = n.padding,
          l = n.flipVariations,
          s = n.allowedAutoPlacements,
          c = void 0 === s ? Jn : s,
          u = Cr(r),
          d = u
            ? l
              ? Xn
              : Xn.filter(function (e) {
                  return Cr(e) === u;
                })
            : Wn,
          f = d.filter(function (e) {
            return c.indexOf(e) >= 0;
          });
        0 === f.length && (f = d);
        var p = f.reduce(function (t, n) {
          return (
            (t[n] = Vr(e, {
              placement: n,
              boundary: a,
              rootBoundary: o,
              padding: i,
            })[ir(n)]),
            t
          );
        }, {});
        return Object.keys(p).sort(function (e, t) {
          return p[e] - p[t];
        });
      }
      var $r = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name;
          if (!t.modifiersData[r]._skip) {
            for (
              var a = n.mainAxis,
                o = void 0 === a || a,
                i = n.altAxis,
                l = void 0 === i || i,
                s = n.fallbackPlacements,
                c = n.padding,
                u = n.boundary,
                d = n.rootBoundary,
                f = n.altBoundary,
                p = n.flipVariations,
                m = void 0 === p || p,
                h = n.allowedAutoPlacements,
                v = t.options.placement,
                g = ir(v),
                y =
                  s ||
                  (g === v || !m
                    ? [Pr(v)]
                    : (function (e) {
                        if (ir(e) === Vn) return [];
                        var t = Pr(e);
                        return [Lr(e), t, Lr(t)];
                      })(v)),
                b = [v].concat(y).reduce(function (e, n) {
                  return e.concat(
                    ir(n) === Vn
                      ? Wr(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: d,
                          padding: c,
                          flipVariations: m,
                          allowedAutoPlacements: h,
                        })
                      : n
                  );
                }, []),
                w = t.rects.reference,
                x = t.rects.popper,
                N = new Map(),
                E = !0,
                k = b[0],
                S = 0;
              S < b.length;
              S++
            ) {
              var C = b[S],
                _ = ir(C),
                T = Cr(C) === $n,
                j = [An, Bn].indexOf(_) >= 0,
                O = j ? "width" : "height",
                P = Vr(t, {
                  placement: C,
                  boundary: u,
                  rootBoundary: d,
                  altBoundary: f,
                  padding: c,
                }),
                R = j ? (T ? Un : Hn) : T ? Bn : An;
              w[O] > x[O] && (R = Pr(R));
              var L = Pr(R),
                I = [];
              if (
                (o && I.push(P[_] <= 0),
                l && I.push(P[R] <= 0, P[L] <= 0),
                I.every(function (e) {
                  return e;
                }))
              ) {
                (k = C), (E = !1);
                break;
              }
              N.set(C, I);
            }
            if (E)
              for (
                var z = function (e) {
                    var t = b.find(function (t) {
                      var n = N.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (k = t), "break";
                  },
                  F = m ? 3 : 1;
                F > 0;
                F--
              ) {
                if ("break" === z(F)) break;
              }
            t.placement !== k &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = k),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Qr(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function qr(e) {
        return [An, Un, Bn, Hn].some(function (t) {
          return e[t] >= 0;
        });
      }
      var Kr = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            a = n.offset,
            o = void 0 === a ? [0, 0] : a,
            i = Jn.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = ir(e),
                    a = [Hn, An].indexOf(r) >= 0 ? -1 : 1,
                    o =
                      "function" === typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    i = o[0],
                    l = o[1];
                  return (
                    (i = i || 0),
                    (l = (l || 0) * a),
                    [Hn, Un].indexOf(r) >= 0 ? { x: l, y: i } : { x: i, y: l }
                  );
                })(n, t.rects, o)),
                e
              );
            }, {}),
            l = i[t.placement],
            s = l.x,
            c = l.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += s),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[r] = i);
        },
      };
      var Yr = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            a = n.mainAxis,
            o = void 0 === a || a,
            i = n.altAxis,
            l = void 0 !== i && i,
            s = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            d = n.padding,
            f = n.tether,
            p = void 0 === f || f,
            m = n.tetherOffset,
            h = void 0 === m ? 0 : m,
            v = Vr(t, {
              boundary: s,
              rootBoundary: c,
              padding: d,
              altBoundary: u,
            }),
            g = ir(t.placement),
            y = Cr(t.placement),
            b = !y,
            w = xr(g),
            x = "x" === w ? "y" : "x",
            N = t.modifiersData.popperOffsets,
            E = t.rects.reference,
            k = t.rects.popper,
            S =
              "function" === typeof h
                ? h(Object.assign({}, t.rects, { placement: t.placement }))
                : h,
            C =
              "number" === typeof S
                ? { mainAxis: S, altAxis: S }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
            _ = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            T = { x: 0, y: 0 };
          if (N) {
            if (o) {
              var j,
                O = "y" === w ? An : Hn,
                P = "y" === w ? Bn : Un,
                R = "y" === w ? "height" : "width",
                L = N[w],
                I = L + v[O],
                z = L - v[P],
                F = p ? -k[R] / 2 : 0,
                D = y === $n ? E[R] : k[R],
                M = y === $n ? -k[R] : -E[R],
                A = t.elements.arrow,
                B = p && A ? pr(A) : { width: 0, height: 0 },
                U = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                H = U[O],
                V = U[P],
                W = Nr(0, E[R], B[R]),
                $ = b
                  ? E[R] / 2 - F - W - H - C.mainAxis
                  : D - W - H - C.mainAxis,
                Q = b
                  ? -E[R] / 2 + F + W + V + C.mainAxis
                  : M + W + V + C.mainAxis,
                q = t.elements.arrow && wr(t.elements.arrow),
                K = q ? ("y" === w ? q.clientTop || 0 : q.clientLeft || 0) : 0,
                Y = null != (j = null == _ ? void 0 : _[w]) ? j : 0,
                G = L + Q - Y,
                X = Nr(p ? sr(I, L + $ - Y - K) : I, L, p ? lr(z, G) : z);
              (N[w] = X), (T[w] = X - L);
            }
            if (l) {
              var J,
                Z = "x" === w ? An : Hn,
                ee = "x" === w ? Bn : Un,
                te = N[x],
                ne = "y" === x ? "height" : "width",
                re = te + v[Z],
                ae = te - v[ee],
                oe = -1 !== [An, Hn].indexOf(g),
                ie = null != (J = null == _ ? void 0 : _[x]) ? J : 0,
                le = oe ? re : te - E[ne] - k[ne] - ie + C.altAxis,
                se = oe ? te + E[ne] + k[ne] - ie - C.altAxis : ae,
                ce =
                  p && oe
                    ? (function (e, t, n) {
                        var r = Nr(e, t, n);
                        return r > n ? n : r;
                      })(le, te, se)
                    : Nr(p ? le : re, te, p ? se : ae);
              (N[x] = ce), (T[x] = ce - te);
            }
            t.modifiersData[r] = T;
          }
        },
        requiresIfExists: ["offset"],
      };
      function Gr(e, t, n) {
        void 0 === n && (n = !1);
        var r = rr(t),
          a =
            rr(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = cr(t.width) / e.offsetWidth || 1,
                r = cr(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          o = gr(t),
          i = fr(e, a, n),
          l = { scrollLeft: 0, scrollTop: 0 },
          s = { x: 0, y: 0 };
        return (
          (r || (!r && !n)) &&
            (("body" !== er(t) || Fr(o)) &&
              (l = (function (e) {
                return e !== tr(e) && rr(e)
                  ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop }
                  : Ir(e);
                var t;
              })(t)),
            rr(t)
              ? (((s = fr(t, !0)).x += t.clientLeft), (s.y += t.clientTop))
              : o && (s.x = zr(o))),
          {
            x: i.left + l.scrollLeft - s.x,
            y: i.top + l.scrollTop - s.y,
            width: i.width,
            height: i.height,
          }
        );
      }
      function Xr(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function a(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && a(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || a(e);
          }),
          r
        );
      }
      function Jr(e) {
        var t;
        return function () {
          return (
            t ||
              (t = new Promise(function (n) {
                Promise.resolve().then(function () {
                  (t = void 0), n(e());
                });
              })),
            t
          );
        };
      }
      var Zr = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function ea() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" === typeof e.getBoundingClientRect);
        });
      }
      function ta(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          a = t.defaultOptions,
          o = void 0 === a ? Zr : a;
        return function (e, t, n) {
          void 0 === n && (n = o);
          var a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Zr, o),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            i = [],
            l = !1,
            s = {
              state: a,
              setOptions: function (n) {
                var l = "function" === typeof n ? n(a.options) : n;
                c(),
                  (a.options = Object.assign({}, o, a.options, l)),
                  (a.scrollParents = {
                    reference: nr(e)
                      ? Mr(e)
                      : e.contextElement
                      ? Mr(e.contextElement)
                      : [],
                    popper: Mr(t),
                  });
                var u = (function (e) {
                  var t = Xr(e);
                  return Zn.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(r, a.options.modifiers))
                );
                return (
                  (a.orderedModifiers = u.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" === typeof o) {
                      var l = o({ state: a, name: t, instance: s, options: r }),
                        c = function () {};
                      i.push(l || c);
                    }
                  }),
                  s.update()
                );
              },
              forceUpdate: function () {
                if (!l) {
                  var e = a.elements,
                    t = e.reference,
                    n = e.popper;
                  if (ea(t, n)) {
                    (a.rects = {
                      reference: Gr(t, wr(n), "fixed" === a.options.strategy),
                      popper: pr(n),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < a.orderedModifiers.length; r++)
                      if (!0 !== a.reset) {
                        var o = a.orderedModifiers[r],
                          i = o.fn,
                          c = o.options,
                          u = void 0 === c ? {} : c,
                          d = o.name;
                        "function" === typeof i &&
                          (a =
                            i({ state: a, options: u, name: d, instance: s }) ||
                            a);
                      } else (a.reset = !1), (r = -1);
                  }
                }
              },
              update: Jr(function () {
                return new Promise(function (e) {
                  s.forceUpdate(), e(a);
                });
              }),
              destroy: function () {
                c(), (l = !0);
              },
            };
          if (!ea(e, t)) return s;
          function c() {
            i.forEach(function (e) {
              return e();
            }),
              (i = []);
          }
          return (
            s.setOptions(n).then(function (e) {
              !l && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            s
          );
        };
      }
      var na = ta({
          defaultModifiers: [
            {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  n = e.instance,
                  r = e.options,
                  a = r.scroll,
                  o = void 0 === a || a,
                  i = r.resize,
                  l = void 0 === i || i,
                  s = tr(t.elements.popper),
                  c = [].concat(
                    t.scrollParents.reference,
                    t.scrollParents.popper
                  );
                return (
                  o &&
                    c.forEach(function (e) {
                      e.addEventListener("scroll", n.update, jr);
                    }),
                  l && s.addEventListener("resize", n.update, jr),
                  function () {
                    o &&
                      c.forEach(function (e) {
                        e.removeEventListener("scroll", n.update, jr);
                      }),
                      l && s.removeEventListener("resize", n.update, jr);
                  }
                );
              },
              data: {},
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = Hr({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  a = void 0 === r || r,
                  o = n.adaptive,
                  i = void 0 === o || o,
                  l = n.roundOffsets,
                  s = void 0 === l || l,
                  c = {
                    placement: ir(t.placement),
                    variation: Cr(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: a,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    Tr(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: i,
                        roundOffsets: s,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      Tr(
                        Object.assign({}, c, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: s,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            or,
            Kr,
            $r,
            Yr,
            Sr,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  a = t.rects.popper,
                  o = t.modifiersData.preventOverflow,
                  i = Vr(t, { elementContext: "reference" }),
                  l = Vr(t, { altBoundary: !0 }),
                  s = Qr(i, r),
                  c = Qr(l, a, o),
                  u = qr(s),
                  d = qr(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: s,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": d,
                    }
                  ));
              },
            },
          ],
        }),
        ra = "undefined" !== typeof Element,
        aa = "function" === typeof Map,
        oa = "function" === typeof Set,
        ia = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
      function la(e, t) {
        if (e === t) return !0;
        if (e && t && "object" == typeof e && "object" == typeof t) {
          if (e.constructor !== t.constructor) return !1;
          var n, r, a, o;
          if (Array.isArray(e)) {
            if ((n = e.length) != t.length) return !1;
            for (r = n; 0 !== r--; ) if (!la(e[r], t[r])) return !1;
            return !0;
          }
          if (aa && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (o = e.entries(); !(r = o.next()).done; )
              if (!t.has(r.value[0])) return !1;
            for (o = e.entries(); !(r = o.next()).done; )
              if (!la(r.value[1], t.get(r.value[0]))) return !1;
            return !0;
          }
          if (oa && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (o = e.entries(); !(r = o.next()).done; )
              if (!t.has(r.value[0])) return !1;
            return !0;
          }
          if (ia && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if ((n = e.length) != t.length) return !1;
            for (r = n; 0 !== r--; ) if (e[r] !== t[r]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
          if (
            e.valueOf !== Object.prototype.valueOf &&
            "function" === typeof e.valueOf &&
            "function" === typeof t.valueOf
          )
            return e.valueOf() === t.valueOf();
          if (
            e.toString !== Object.prototype.toString &&
            "function" === typeof e.toString &&
            "function" === typeof t.toString
          )
            return e.toString() === t.toString();
          if ((n = (a = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 !== r--; )
            if (!Object.prototype.hasOwnProperty.call(t, a[r])) return !1;
          if (ra && e instanceof Element) return !1;
          for (r = n; 0 !== r--; )
            if (
              (("_owner" !== a[r] && "__v" !== a[r] && "__o" !== a[r]) ||
                !e.$$typeof) &&
              !la(e[a[r]], t[a[r]])
            )
              return !1;
          return !0;
        }
        return e !== e && t !== t;
      }
      var sa = function (e, t) {
          try {
            return la(e, t);
          } catch (n) {
            if ((n.message || "").match(/stack|recursion/i))
              return (
                console.warn("react-fast-compare cannot handle circular refs"),
                !1
              );
            throw n;
          }
        },
        ca = [],
        ua = function (e, n, r) {
          void 0 === r && (r = {});
          var a = t.useRef(null),
            o = {
              onFirstUpdate: r.onFirstUpdate,
              placement: r.placement || "bottom",
              strategy: r.strategy || "absolute",
              modifiers: r.modifiers || ca,
            },
            i = t.useState({
              styles: {
                popper: { position: o.strategy, left: "0", top: "0" },
                arrow: { position: "absolute" },
              },
              attributes: {},
            }),
            l = i[0],
            s = i[1],
            c = t.useMemo(function () {
              return {
                name: "updateState",
                enabled: !0,
                phase: "write",
                fn: function (e) {
                  var t = e.state,
                    n = Object.keys(t.elements);
                  it.flushSync(function () {
                    s({
                      styles: Dn(
                        n.map(function (e) {
                          return [e, t.styles[e] || {}];
                        })
                      ),
                      attributes: Dn(
                        n.map(function (e) {
                          return [e, t.attributes[e]];
                        })
                      ),
                    });
                  });
                },
                requires: ["computeStyles"],
              };
            }, []),
            u = t.useMemo(
              function () {
                var e = {
                  onFirstUpdate: o.onFirstUpdate,
                  placement: o.placement,
                  strategy: o.strategy,
                  modifiers: [].concat(o.modifiers, [
                    c,
                    { name: "applyStyles", enabled: !1 },
                  ]),
                };
                return sa(a.current, e) ? a.current || e : ((a.current = e), e);
              },
              [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, c]
            ),
            d = t.useRef();
          return (
            Mn(
              function () {
                d.current && d.current.setOptions(u);
              },
              [u]
            ),
            Mn(
              function () {
                if (null != e && null != n) {
                  var t = (r.createPopper || na)(e, n, u);
                  return (
                    (d.current = t),
                    function () {
                      t.destroy(), (d.current = null);
                    }
                  );
                }
              },
              [e, n, r.createPopper]
            ),
            {
              state: d.current ? d.current.state : null,
              styles: l.styles,
              attributes: l.attributes,
              update: d.current ? d.current.update : null,
              forceUpdate: d.current ? d.current.forceUpdate : null,
            }
          );
        },
        da = function () {},
        fa = function () {
          return Promise.resolve(null);
        },
        pa = [];
      function ma(e) {
        var n = e.placement,
          r = void 0 === n ? "bottom" : n,
          a = e.strategy,
          o = void 0 === a ? "absolute" : a,
          i = e.modifiers,
          l = void 0 === i ? pa : i,
          s = e.referenceElement,
          c = e.onFirstUpdate,
          u = e.innerRef,
          d = e.children,
          f = t.useContext(Pn),
          p = t.useState(null),
          m = p[0],
          h = p[1],
          v = t.useState(null),
          g = v[0],
          y = v[1];
        t.useEffect(
          function () {
            Fn(u, m);
          },
          [u, m]
        );
        var b = t.useMemo(
            function () {
              return {
                placement: r,
                strategy: o,
                onFirstUpdate: c,
                modifiers: [].concat(l, [
                  {
                    name: "arrow",
                    enabled: null != g,
                    options: { element: g },
                  },
                ]),
              };
            },
            [r, o, c, l, g]
          ),
          w = ua(s || f, m, b),
          x = w.state,
          N = w.styles,
          E = w.forceUpdate,
          k = w.update,
          S = t.useMemo(
            function () {
              return {
                ref: h,
                style: N.popper,
                placement: x ? x.placement : r,
                hasPopperEscaped:
                  x && x.modifiersData.hide
                    ? x.modifiersData.hide.hasPopperEscaped
                    : null,
                isReferenceHidden:
                  x && x.modifiersData.hide
                    ? x.modifiersData.hide.isReferenceHidden
                    : null,
                arrowProps: { style: N.arrow, ref: y },
                forceUpdate: E || da,
                update: k || fa,
              };
            },
            [h, y, r, x, N, k, E]
          );
        return In(d)(S);
      }
      var ha = function () {},
        va = ha;
      function ga(e) {
        var n = e.children,
          r = e.innerRef,
          a = t.useContext(Rn),
          o = t.useCallback(
            function (e) {
              Fn(r, e), zn(a, e);
            },
            [r, a]
          );
        return (
          t.useEffect(function () {
            return function () {
              return Fn(r, null);
            };
          }, []),
          t.useEffect(
            function () {
              va(
                Boolean(a),
                "`Reference` should not be used outside of a `Manager` component."
              );
            },
            [a]
          ),
          In(n)({ ref: o })
        );
      }
      var ya = function (e) {
          var n = e.children;
          return e.popper
            ? t.createElement(Ln, null, n)
            : t.createElement(t.Fragment, null, n);
        },
        ba = (0, t.createContext)({}),
        wa = (0, t.forwardRef)(function (e, n) {
          var r,
            a = e.children,
            o = e.alignment,
            i = e.autoClose,
            l = void 0 === i || i,
            s = e.className,
            c = e.dark,
            u = e.direction,
            d = e.onHide,
            f = e.onShow,
            p = e.placement,
            m = void 0 === p ? "bottom-start" : p,
            h = e.popper,
            v = void 0 === h || h,
            g = e.portal,
            y = void 0 !== g && g,
            b = e.variant,
            w = void 0 === b ? "btn-group" : b,
            x = e.component,
            N = void 0 === x ? "div" : x,
            E = e.visible,
            k = void 0 !== E && E,
            S = st(e, [
              "children",
              "alignment",
              "autoClose",
              "className",
              "dark",
              "direction",
              "onHide",
              "onShow",
              "placement",
              "popper",
              "portal",
              "variant",
              "component",
              "visible",
            ]),
            C = (0, t.useRef)(null),
            _ = (0, t.useRef)(null),
            T = Vt(n, C),
            j = (0, t.useState)(k),
            O = j[0],
            P = j[1],
            R = "nav-item" === w ? "li" : N;
          "object" === typeof o && (v = !1);
          var L = {
            alignment: o,
            autoClose: l,
            dark: c,
            direction: u,
            dropdownToggleRef: _,
            placement: m,
            popper: v,
            portal: y,
            variant: w,
            visible: O,
            setVisible: P,
          };
          return (
            (0, t.useEffect)(
              function () {
                P(k);
              },
              [k]
            ),
            (0, t.useEffect)(
              function () {
                O && f && f(), !O && d && d();
              },
              [O]
            ),
            t.createElement(
              ba.Provider,
              { value: L },
              t.createElement(
                ya,
                { popper: v },
                "input-group" === w
                  ? t.createElement(t.Fragment, null, a)
                  : t.createElement(
                      R,
                      lt(
                        {
                          className: yt(
                            "nav-item" === w ? "nav-item dropdown" : w,
                            ((r = {
                              "dropdown-center": "center" === u,
                              "dropup dropup-center": "dropup-center" === u,
                            }),
                            (r["".concat(u)] =
                              u && "center" !== u && "dropup-center" !== u),
                            (r.show = O),
                            r),
                            s
                          ),
                        },
                        S,
                        { ref: T }
                      ),
                      a
                    )
              )
            )
          );
        }),
        xa = ut.oneOf(["start", "end"]);
      (wa.propTypes = {
        alignment: ut.oneOfType([
          xa,
          ut.shape({ xs: xa }),
          ut.shape({ sm: xa }),
          ut.shape({ md: xa }),
          ut.shape({ lg: xa }),
          ut.shape({ xl: xa }),
          ut.shape({ xxl: xa }),
        ]),
        autoClose: ut.oneOfType([ut.bool, ut.oneOf(["inside", "outside"])]),
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
        dark: ut.bool,
        direction: ut.oneOf([
          "center",
          "dropup",
          "dropup-center",
          "dropend",
          "dropstart",
        ]),
        onHide: ut.func,
        onShow: ut.func,
        placement: Gt,
        popper: ut.bool,
        portal: ut.bool,
        variant: ut.oneOf(["btn-group", "dropdown", "input-group", "nav-item"]),
        visible: ut.bool,
      }),
        (wa.displayName = "CDropdown");
      var Na = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = st(e, ["className"]);
        return t.createElement(
          "hr",
          lt({ className: yt("dropdown-divider", r) }, a, { ref: n })
        );
      });
      (Na.propTypes = { className: ut.string }),
        (Na.displayName = "CDropdownDivider");
      var Ea = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.component,
          i = void 0 === o ? "h6" : o,
          l = st(e, ["children", "className", "component"]);
        return t.createElement(
          i,
          lt({ className: yt("dropdown-header", a) }, l, { ref: n }),
          r
        );
      });
      (Ea.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (Ea.displayName = "CDropdownHeader");
      var ka = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.component,
          i = void 0 === o ? "a" : o,
          l = st(e, ["children", "className", "component"]);
        return t.createElement(
          nn,
          lt({ className: yt("dropdown-item", a), component: i }, l, {
            ref: n,
          }),
          r
        );
      });
      (ka.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (ka.displayName = "CDropdownItem");
      var Sa = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.component,
          i = void 0 === o ? "span" : o,
          l = st(e, ["children", "className", "component"]);
        return t.createElement(
          i,
          lt({ className: yt("dropdown-item-text", a) }, l, { ref: n }),
          r
        );
      });
      (Sa.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (Sa.displayName = "CDropdownItemPlain");
      var Ca = function (e) {
          var t = [];
          return (
            "object" === typeof e &&
              Object.keys(e).map(function (n) {
                t.push(
                  "dropdown-menu"
                    .concat("xs" === n ? "" : "-".concat(n), "-")
                    .concat(e[n])
                );
              }),
            "string" === typeof e && t.push("dropdown-menu-".concat(e)),
            t
          );
        },
        _a = function (e) {
          var n = e.children,
            r = e.className,
            a = e.component,
            o = void 0 === a ? "ul" : a,
            i = st(e, ["children", "className", "component"]),
            l = (0, t.useContext)(ba),
            s = l.alignment,
            c = l.autoClose,
            u = l.dark,
            d = l.direction,
            f = l.dropdownToggleRef,
            p = l.placement,
            m = l.popper,
            h = l.portal,
            v = l.visible,
            g = l.setVisible,
            y = (0, t.useRef)(null);
          (0, t.useEffect)(
            function () {
              return (
                v && window.addEventListener("mouseup", w),
                v && window.addEventListener("keyup", b),
                function () {
                  window.removeEventListener("mouseup", w),
                    window.removeEventListener("keyup", b);
                }
              );
            },
            [v]
          );
          var b = function (e) {
              !1 !== c && "Escape" === e.key && g(!1);
            },
            w = function (e) {
              var t, n;
              (f && f.current.contains(e.target)) ||
                ((!0 === c ||
                  ("inside" === c &&
                    (null === (t = y.current) || void 0 === t
                      ? void 0
                      : t.contains(e.target))) ||
                  ("outside" === c &&
                    !(null === (n = y.current) || void 0 === n
                      ? void 0
                      : n.contains(e.target)))) &&
                  setTimeout(function () {
                    return g(!1);
                  }, 1));
            },
            x = p;
          "center" === d && (x = "bottom"),
            "dropup" === d && (x = "top-start"),
            "dropup-center" === d && (x = "top"),
            "dropend" === d && (x = "right-start"),
            "dropstart" === d && (x = "left-start"),
            "end" === s && (x = "bottom-end");
          var N = function (e, a) {
            return t.createElement(
              On,
              { portal: null !== h && void 0 !== h && h },
              t.createElement(
                o,
                lt(
                  {
                    className: yt(
                      "dropdown-menu",
                      { "dropdown-menu-dark": u, show: v },
                      s && Ca(s),
                      r
                    ),
                    ref: a,
                    style: e,
                    role: "menu",
                    "aria-hidden": !v,
                  },
                  !m && { "data-coreui-popper": "static" },
                  i
                ),
                "ul" === o
                  ? t.Children.map(n, function (e, n) {
                      if (t.isValidElement(e))
                        return t.createElement(
                          "li",
                          { key: n },
                          t.cloneElement(e)
                        );
                    })
                  : n
              )
            );
          };
          return m && v
            ? t.createElement(ma, { innerRef: y, placement: x }, function (e) {
                var t = e.ref,
                  n = e.style;
                return N(n, t);
              })
            : N();
        };
      (_a.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (_a.displayName = "CDropdownMenu");
      var Ta = function (e) {
        var n = e.children,
          r = e.caret,
          a = void 0 === r || r,
          o = e.custom,
          i = e.className,
          l = e.split,
          s = e.trigger,
          c = void 0 === s ? "click" : s,
          u = st(e, [
            "children",
            "caret",
            "custom",
            "className",
            "split",
            "trigger",
          ]),
          d = (0, t.useContext)(ba),
          f = d.dropdownToggleRef,
          p = d.popper,
          m = d.variant,
          h = d.visible,
          v = d.setVisible,
          g = lt(
            lt(
              {},
              ("click" === c || c.includes("click")) && {
                onClick: function (e) {
                  e.preventDefault(), v(!h);
                },
              }
            ),
            ("focus" === c || c.includes("focus")) && {
              onFocus: function () {
                return v(!0);
              },
              onBlur: function () {
                return v(!1);
              },
            }
          ),
          y = lt(
            {
              className: yt(
                {
                  "dropdown-toggle": a,
                  "dropdown-toggle-split": l,
                  "nav-link": "nav-item" === m,
                },
                i
              ),
              "aria-expanded": h,
            },
            !u.disabled && lt({}, g)
          ),
          b = function (e) {
            return o && t.isValidElement(n)
              ? t.createElement(
                  t.Fragment,
                  null,
                  t.cloneElement(
                    n,
                    lt(lt({ "aria-expanded": h }, !u.disabled && lt({}, g)), {
                      ref: Vt(e, f),
                    })
                  )
                )
              : "nav-item" === m
              ? t.createElement("a", lt({ href: "#" }, y, { ref: Vt(e, f) }), n)
              : t.createElement(
                  un,
                  lt({ type: "button" }, y, { tabIndex: 0 }, u, {
                    ref: Vt(e, f),
                  }),
                  n,
                  l &&
                    t.createElement(
                      "span",
                      { className: "visually-hidden" },
                      "Toggle Dropdown"
                    )
                );
          };
        return p
          ? t.createElement(ga, null, function (e) {
              var t = e.ref;
              return b(t);
            })
          : b(f);
      };
      (Ta.propTypes = {
        caret: ut.bool,
        children: ut.node,
        className: ut.string,
        custom: ut.bool,
        split: ut.bool,
        trigger: Zt,
      }),
        (Ta.displayName = "CDropdownToggle");
      var ja = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.position,
          l = st(e, ["children", "className", "position"]);
        return t.createElement(
          "div",
          lt(
            {
              className: yt(
                "footer",
                ((r = {}), (r["footer-".concat(i)] = i), r),
                o
              ),
            },
            l,
            { ref: n }
          ),
          a
        );
      });
      (ja.propTypes = {
        children: ut.node,
        className: ut.string,
        position: ut.oneOf(["fixed", "sticky"]),
      }),
        (ja.displayName = "CFooter");
      var Oa = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.validated,
          i = st(e, ["children", "className", "validated"]);
        return t.createElement(
          "form",
          lt({ className: yt({ "was-validated": o }, a) || void 0 }, i, {
            ref: n,
          }),
          r
        );
      });
      (Oa.propTypes = {
        children: ut.node,
        className: ut.string,
        validated: ut.bool,
      }),
        (Oa.displayName = "CForm");
      var Pa = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.component,
          l = void 0 === i ? "div" : i,
          s = e.invalid,
          c = e.tooltip,
          u = e.valid,
          d = st(e, [
            "children",
            "className",
            "component",
            "invalid",
            "tooltip",
            "valid",
          ]);
        return t.createElement(
          l,
          lt(
            {
              className: yt(
                ((r = {}),
                (r["invalid-".concat(c ? "tooltip" : "feedback")] = s),
                (r["valid-".concat(c ? "tooltip" : "feedback")] = u),
                r),
                o
              ),
            },
            d,
            { ref: n }
          ),
          a
        );
      });
      (Pa.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
        invalid: ut.bool,
        tooltip: ut.bool,
        valid: ut.bool,
      }),
        (Pa.displayName = "CFormFeedback");
      var Ra = function (e) {
        var n = e.describedby,
          r = e.feedback,
          a = e.feedbackInvalid,
          o = e.feedbackValid,
          i = e.invalid,
          l = e.tooltipFeedback,
          s = e.valid;
        return t.createElement(
          t.Fragment,
          null,
          r &&
            (s || i) &&
            t.createElement(
              Pa,
              lt({}, i && { id: n }, { invalid: i, tooltip: l, valid: s }),
              r
            ),
          a && t.createElement(Pa, { id: n, invalid: !0, tooltip: l }, a),
          o && t.createElement(Pa, { valid: !0, tooltip: l }, o)
        );
      };
      (Ra.propTypes = {
        describedby: ut.string,
        feedback: ut.oneOfType([ut.node, ut.string]),
        feedbackValid: ut.oneOfType([ut.node, ut.string]),
        feedbackInvalid: ut.oneOfType([ut.node, ut.string]),
        invalid: ut.bool,
        tooltipFeedback: ut.bool,
        valid: ut.bool,
      }),
        (Ra.displayName = "CFormControlValidation");
      var La = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.customClassName,
          i = st(e, ["children", "className", "customClassName"]);
        return t.createElement(
          "label",
          lt(
            { className: null !== o && void 0 !== o ? o : yt("form-label", a) },
            i,
            { ref: n }
          ),
          r
        );
      });
      (La.propTypes = {
        children: ut.node,
        className: ut.string,
        customClassName: ut.string,
      }),
        (La.displayName = "CFormLabel");
      var Ia = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = e.button,
          o = e.feedback,
          i = e.feedbackInvalid,
          l = e.feedbackValid,
          s = e.floatingLabel,
          c = e.tooltipFeedback,
          u = e.hitArea,
          d = e.id,
          f = e.indeterminate,
          p = e.inline,
          m = e.invalid,
          h = e.label,
          v = e.reverse,
          g = e.type,
          y = void 0 === g ? "checkbox" : g,
          b = e.valid,
          w = st(e, [
            "className",
            "button",
            "feedback",
            "feedbackInvalid",
            "feedbackValid",
            "floatingLabel",
            "tooltipFeedback",
            "hitArea",
            "id",
            "indeterminate",
            "inline",
            "invalid",
            "label",
            "reverse",
            "type",
            "valid",
          ]),
          x = (0, t.useRef)(null),
          N = Vt(n, x);
        (0, t.useEffect)(
          function () {
            x.current && f && (x.current.indeterminate = f);
          },
          [f]
        );
        var E = function () {
            return t.createElement(
              "input",
              lt(
                {
                  type: y,
                  className: yt(a ? "btn-check" : "form-check-input", {
                    "is-invalid": m,
                    "is-valid": b,
                    "me-2": u,
                  }),
                  id: d,
                },
                w,
                { ref: N }
              )
            );
          },
          k = function () {
            return t.createElement(Ra, {
              describedby: w["aria-describedby"],
              feedback: o,
              feedbackInvalid: i,
              feedbackValid: l,
              floatingLabel: s,
              invalid: m,
              tooltipFeedback: c,
              valid: b,
            });
          },
          S = function () {
            var e;
            return t.createElement(
              La,
              lt(
                {
                  customClassName: yt(
                    a
                      ? yt(
                          "btn",
                          a.variant
                            ? "btn-".concat(a.variant, "-").concat(a.color)
                            : "btn-".concat(a.color),
                          ((e = {}), (e["btn-".concat(a.size)] = a.size), e),
                          "".concat(a.shape)
                        )
                      : "form-check-label"
                  ),
                },
                d && { htmlFor: d }
              ),
              h
            );
          };
        return t.createElement(function () {
          return a
            ? t.createElement(
                t.Fragment,
                null,
                t.createElement(E, null),
                h && t.createElement(S, null),
                t.createElement(k, null)
              )
            : h
            ? u
              ? t.createElement(
                  t.Fragment,
                  null,
                  t.createElement(E, null),
                  t.createElement(
                    La,
                    lt(
                      {
                        customClassName: yt(
                          "form-check-label stretched-link",
                          r
                        ),
                      },
                      d && { htmlFor: d }
                    ),
                    h
                  ),
                  t.createElement(k, null)
                )
              : t.createElement(
                  "div",
                  {
                    className: yt(
                      "form-check",
                      {
                        "form-check-inline": p,
                        "form-check-reverse": v,
                        "is-invalid": m,
                        "is-valid": b,
                      },
                      r
                    ),
                  },
                  t.createElement(E, null),
                  t.createElement(S, null),
                  t.createElement(k, null)
                )
            : t.createElement(E, null);
        }, null);
      });
      (Ia.propTypes = lt(
        {
          button: ut.object,
          className: ut.string,
          hitArea: ut.oneOf(["full"]),
          id: ut.string,
          indeterminate: ut.bool,
          inline: ut.bool,
          label: ut.oneOfType([ut.string, ut.node]),
          reverse: ut.bool,
          type: ut.oneOf(["checkbox", "radio"]),
        },
        Ra.propTypes
      )),
        (Ia.displayName = "CFormCheck");
      var za = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("form-floating", a) }, o, { ref: n }),
          r
        );
      });
      (za.propTypes = { children: ut.node, className: ut.string }),
        (za.displayName = "CFormFloating");
      var Fa = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.component,
          i = void 0 === o ? "div" : o,
          l = st(e, ["children", "className", "component"]);
        return t.createElement(
          i,
          lt({ className: yt("form-text", a) }, l, { ref: n }),
          r
        );
      });
      (Fa.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (Fa.displayName = "CFormText");
      var Da = function (e) {
        var n = e.children,
          r = e.describedby,
          a = e.feedback,
          o = e.feedbackInvalid,
          i = e.feedbackValid,
          l = e.floatingClassName,
          s = e.floatingLabel,
          c = e.id,
          u = e.invalid,
          d = e.label,
          f = e.text,
          p = e.tooltipFeedback,
          m = e.valid,
          h = function () {
            return t.createElement(Ra, {
              describedby: r,
              feedback: a,
              feedbackInvalid: o,
              feedbackValid: i,
              floatingLabel: s,
              invalid: u,
              tooltipFeedback: p,
              valid: m,
            });
          };
        return s
          ? t.createElement(
              za,
              { className: l },
              n,
              t.createElement(La, { htmlFor: c }, d || s),
              f && t.createElement(Fa, { id: r }, f),
              t.createElement(h, null)
            )
          : t.createElement(
              t.Fragment,
              null,
              d && t.createElement(La, { htmlFor: c }, d),
              n,
              f && t.createElement(Fa, { id: r }, f),
              t.createElement(h, null)
            );
      };
      (Da.propTypes = lt(
        {
          children: ut.node,
          floatingClassName: ut.string,
          floatingLabel: ut.oneOfType([ut.node, ut.string]),
          label: ut.oneOfType([ut.node, ut.string]),
          text: ut.oneOfType([ut.node, ut.string]),
        },
        Ra.propTypes
      )),
        (Da.displayName = "CFormControlWrapper");
      var Ma = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.delay,
          l = void 0 !== i && i,
          s = e.feedback,
          c = e.feedbackInvalid,
          u = e.feedbackValid,
          d = e.floatingClassName,
          f = e.floatingLabel,
          p = e.id,
          m = e.invalid,
          h = e.label,
          v = e.onChange,
          g = e.plainText,
          y = e.size,
          b = e.text,
          w = e.tooltipFeedback,
          x = e.type,
          N = void 0 === x ? "text" : x,
          E = e.valid,
          k = st(e, [
            "children",
            "className",
            "delay",
            "feedback",
            "feedbackInvalid",
            "feedbackValid",
            "floatingClassName",
            "floatingLabel",
            "id",
            "invalid",
            "label",
            "onChange",
            "plainText",
            "size",
            "text",
            "tooltipFeedback",
            "type",
            "valid",
          ]),
          S = (0, t.useState)(),
          C = S[0],
          _ = S[1];
        return (
          (0, t.useEffect)(
            function () {
              var e = setTimeout(
                function () {
                  return C && v && v(C);
                },
                "number" === typeof l ? l : 500
              );
              return function () {
                return clearTimeout(e);
              };
            },
            [C]
          ),
          t.createElement(
            Da,
            {
              describedby: k["aria-describedby"],
              feedback: s,
              feedbackInvalid: c,
              feedbackValid: u,
              floatingClassName: d,
              floatingLabel: f,
              id: p,
              invalid: m,
              label: h,
              text: b,
              tooltipFeedback: w,
              valid: E,
            },
            t.createElement(
              "input",
              lt(
                {
                  className: yt(
                    g ? "form-control-plaintext" : "form-control",
                    ((r = {}),
                    (r["form-control-".concat(y)] = y),
                    (r["form-control-color"] = "color" === N),
                    (r["is-invalid"] = m),
                    (r["is-valid"] = E),
                    r),
                    o
                  ),
                  id: p,
                  type: N,
                  onChange: function (e) {
                    return l ? _(e) : v && v(e);
                  },
                },
                k,
                { ref: n }
              ),
              a
            )
          )
        );
      });
      (Ma.propTypes = lt(
        {
          className: ut.string,
          id: ut.string,
          delay: ut.oneOfType([ut.bool, ut.number]),
          plainText: ut.bool,
          size: ut.oneOf(["sm", "lg"]),
          type: ut.oneOfType([ut.oneOf(["color", "file", "text"]), ut.string]),
        },
        Da.propTypes
      )),
        (Ma.displayName = "CFormInput");
      var Aa = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = e.label,
          o = st(e, ["className", "label"]);
        return t.createElement(
          t.Fragment,
          null,
          a && t.createElement(La, { htmlFor: o.id }, a),
          t.createElement(
            "input",
            lt({ type: "range", className: yt("form-range", r) }, o, { ref: n })
          )
        );
      });
      (Aa.propTypes = {
        className: ut.string,
        label: ut.oneOfType([ut.node, ut.string]),
      }),
        (Aa.displayName = "CFormRange");
      var Ba = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.feedback,
          l = e.feedbackInvalid,
          s = e.feedbackValid,
          c = e.floatingClassName,
          u = e.floatingLabel,
          d = e.htmlSize,
          f = e.id,
          p = e.invalid,
          m = e.label,
          h = e.options,
          v = e.size,
          g = e.text,
          y = e.tooltipFeedback,
          b = e.valid,
          w = st(e, [
            "children",
            "className",
            "feedback",
            "feedbackInvalid",
            "feedbackValid",
            "floatingClassName",
            "floatingLabel",
            "htmlSize",
            "id",
            "invalid",
            "label",
            "options",
            "size",
            "text",
            "tooltipFeedback",
            "valid",
          ]);
        return t.createElement(
          Da,
          {
            describedby: w["aria-describedby"],
            feedback: i,
            feedbackInvalid: l,
            feedbackValid: s,
            floatingClassName: c,
            floatingLabel: u,
            id: f,
            invalid: p,
            label: m,
            text: g,
            tooltipFeedback: y,
            valid: b,
          },
          t.createElement(
            "select",
            lt(
              {
                id: f,
                className: yt(
                  "form-select",
                  ((r = {}),
                  (r["form-select-".concat(v)] = v),
                  (r["is-invalid"] = p),
                  (r["is-valid"] = b),
                  r),
                  o
                ),
                size: d,
              },
              w,
              { ref: n }
            ),
            h
              ? h.map(function (e, n) {
                  return t.createElement(
                    "option",
                    lt(
                      {},
                      "object" === typeof e &&
                        e.disabled && { disabled: e.disabled },
                      "object" === typeof e && e.value && { value: e.value },
                      { key: n }
                    ),
                    "string" === typeof e ? e : e.label
                  );
                })
              : a
          )
        );
      });
      (Ba.propTypes = lt(
        { className: ut.string, htmlSize: ut.number, options: ut.array },
        Da.propTypes
      )),
        (Ba.displayName = "CFormSelect");
      var Ua = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.className,
          o = e.id,
          i = e.invalid,
          l = e.label,
          s = e.reverse,
          c = e.size,
          u = e.type,
          d = void 0 === u ? "checkbox" : u,
          f = e.valid,
          p = st(e, [
            "className",
            "id",
            "invalid",
            "label",
            "reverse",
            "size",
            "type",
            "valid",
          ]);
        return t.createElement(
          "div",
          {
            className: yt(
              "form-check form-switch",
              ((r = { "form-check-reverse": s }),
              (r["form-switch-".concat(c)] = c),
              (r["is-invalid"] = i),
              (r["is-valid"] = f),
              r),
              a
            ),
          },
          t.createElement(
            "input",
            lt(
              {
                type: d,
                className: yt("form-check-input", {
                  "is-invalid": i,
                  "is-valid": f,
                }),
                id: o,
              },
              p,
              { ref: n }
            )
          ),
          l &&
            t.createElement(
              La,
              lt({ customClassName: "form-check-label" }, o && { htmlFor: o }),
              l
            )
        );
      });
      (Ua.propTypes = {
        className: ut.string,
        id: ut.string,
        invalid: ut.bool,
        label: ut.oneOfType([ut.string, ut.node]),
        reverse: ut.bool,
        size: ut.oneOf(["lg", "xl"]),
        type: ut.oneOf(["checkbox", "radio"]),
        valid: ut.bool,
      }),
        (Ua.displayName = "CFormSwitch");
      var Ha = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.feedback,
          i = e.feedbackInvalid,
          l = e.feedbackValid,
          s = e.floatingClassName,
          c = e.floatingLabel,
          u = e.id,
          d = e.invalid,
          f = e.label,
          p = e.plainText,
          m = e.text,
          h = e.tooltipFeedback,
          v = e.valid,
          g = st(e, [
            "children",
            "className",
            "feedback",
            "feedbackInvalid",
            "feedbackValid",
            "floatingClassName",
            "floatingLabel",
            "id",
            "invalid",
            "label",
            "plainText",
            "text",
            "tooltipFeedback",
            "valid",
          ]);
        return t.createElement(
          Da,
          {
            describedby: g["aria-describedby"],
            feedback: o,
            feedbackInvalid: i,
            feedbackValid: l,
            floatingClassName: s,
            floatingLabel: c,
            id: u,
            invalid: d,
            label: f,
            text: m,
            tooltipFeedback: h,
            valid: v,
          },
          t.createElement(
            "textarea",
            lt(
              {
                className: yt(
                  p ? "form-control-plaintext" : "form-control",
                  { "is-invalid": d, "is-valid": v },
                  a
                ),
                id: u,
              },
              g,
              { ref: n }
            ),
            r
          )
        );
      });
      (Ha.propTypes = lt(
        { className: ut.string, id: ut.string, plainText: ut.bool },
        Da.propTypes
      )),
        (Ha.displayName = "CFormTextarea");
      var Va = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.size,
          l = st(e, ["children", "className", "size"]);
        return t.createElement(
          "div",
          lt(
            {
              className: yt(
                "input-group",
                ((r = {}), (r["input-group-".concat(i)] = i), r),
                o
              ),
            },
            l,
            { ref: n }
          ),
          a
        );
      });
      (Va.propTypes = {
        children: ut.node,
        className: ut.string,
        size: ut.oneOf(["sm", "lg"]),
      }),
        (Va.displayName = "CInputGroup");
      var Wa = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.component,
          i = void 0 === o ? "span" : o,
          l = st(e, ["children", "className", "component"]);
        return t.createElement(
          i,
          lt({ className: yt("input-group-text", a) }, l, { ref: n }),
          r
        );
      });
      (Wa.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (Wa.displayName = "CInputGroupText");
      var $a = ["xxl", "xl", "lg", "md", "sm", "xs"],
        Qa = (0, t.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.className,
            o = st(e, ["children", "className"]),
            i = [];
          return (
            $a.forEach(function (e) {
              var t = o[e];
              delete o[e];
              var n = "xs" === e ? "" : "-".concat(e);
              ("number" !== typeof t && "string" !== typeof t) ||
                i.push("col".concat(n, "-").concat(t)),
                "boolean" === typeof t && i.push("col".concat(n)),
                t &&
                  "object" === typeof t &&
                  (("number" !== typeof t.span && "string" !== typeof t.span) ||
                    i.push("col".concat(n, "-").concat(t.span)),
                  "boolean" === typeof t.span && i.push("col".concat(n)),
                  ("number" !== typeof t.order &&
                    "string" !== typeof t.order) ||
                    i.push("order".concat(n, "-").concat(t.order)),
                  "number" === typeof t.offset &&
                    i.push("offset".concat(n, "-").concat(t.offset)));
            }),
            t.createElement(
              "div",
              lt({ className: yt(i.length > 0 ? i : "col", a) }, o, { ref: n }),
              r
            )
          );
        }),
        qa = ut.oneOfType([ut.bool, ut.number, ut.string, ut.oneOf(["auto"])]),
        Ka = ut.oneOfType([
          qa,
          ut.shape({
            span: qa,
            offset: ut.oneOfType([ut.number, ut.string]),
            order: ut.oneOfType([
              ut.oneOf(["first", "last"]),
              ut.number,
              ut.string,
            ]),
          }),
        ]);
      (Qa.propTypes = {
        children: ut.node,
        className: ut.string,
        xs: Ka,
        sm: Ka,
        md: Ka,
        lg: Ka,
        xl: Ka,
        xxl: Ka,
      }),
        (Qa.displayName = "CCol");
      var Ya = ["xxl", "xl", "lg", "md", "sm", "fluid"],
        Ga = (0, t.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.className,
            o = st(e, ["children", "className"]),
            i = [];
          return (
            Ya.forEach(function (e) {
              var t = o[e];
              delete o[e], t && i.push("container-".concat(e));
            }),
            t.createElement(
              "div",
              lt({ className: yt(i.length > 0 ? i : "container", a) }, o, {
                ref: n,
              }),
              r
            )
          );
        });
      (Ga.propTypes = {
        children: ut.node,
        className: ut.string,
        sm: ut.bool,
        md: ut.bool,
        lg: ut.bool,
        xl: ut.bool,
        xxl: ut.bool,
        fluid: ut.bool,
      }),
        (Ga.displayName = "CContainer");
      var Xa = ["xxl", "xl", "lg", "md", "sm", "xs"],
        Ja = (0, t.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.className,
            o = st(e, ["children", "className"]),
            i = [];
          return (
            Xa.forEach(function (e) {
              var t = o[e];
              delete o[e];
              var n = "xs" === e ? "" : "-".concat(e);
              "object" === typeof t &&
                (t.cols && i.push("row-cols".concat(n, "-").concat(t.cols)),
                "number" === typeof t.gutter &&
                  i.push("g".concat(n, "-").concat(t.gutter)),
                "number" === typeof t.gutterX &&
                  i.push("gx".concat(n, "-").concat(t.gutterX)),
                "number" === typeof t.gutterY &&
                  i.push("gy".concat(n, "-").concat(t.gutterY)));
            }),
            t.createElement("div", { className: yt("row", i, a), ref: n }, r)
          );
        }),
        Za = ut.shape({
          cols: ut.oneOfType([ut.oneOf(["auto"]), ut.number, ut.string]),
          gutter: ut.oneOfType([ut.string, ut.number]),
          gutterX: ut.oneOfType([ut.string, ut.number]),
          gutterY: ut.oneOfType([ut.string, ut.number]),
        });
      (Ja.propTypes = {
        children: ut.node,
        className: ut.string,
        xs: Za,
        sm: Za,
        md: Za,
        lg: Za,
        xl: Za,
        xxl: Za,
      }),
        (Ja.displayName = "CRow");
      var eo = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.container,
          l = e.position,
          s = st(e, ["children", "className", "container", "position"]);
        return t.createElement(
          "div",
          lt(
            {
              className: yt(
                "header",
                ((r = {}), (r["header-".concat(l)] = l), r),
                o
              ),
            },
            s,
            { ref: n }
          ),
          i
            ? t.createElement(
                "div",
                {
                  className:
                    "string" === typeof i
                      ? "container-".concat(i)
                      : "container",
                },
                a
              )
            : t.createElement(t.Fragment, null, a)
        );
      });
      (eo.propTypes = {
        children: ut.node,
        className: ut.string,
        container: ut.oneOfType([
          ut.bool,
          ut.oneOf(["sm", "md", "lg", "xl", "xxl", "fluid"]),
        ]),
        position: ut.oneOf(["fixed", "sticky"]),
      }),
        (eo.displayName = "CHeader");
      var to = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = void 0 === a ? "a" : a,
          i = e.className,
          l = st(e, ["children", "component", "className"]);
        return t.createElement(
          o,
          lt({ className: yt("header-brand", i) }, l, { ref: n }),
          r
        );
      });
      (to.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (to.displayName = "CHeaderBrand");
      var no = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = st(e, ["className"]);
        return t.createElement(
          "div",
          lt({ className: yt("header-divider", r) }, a, { ref: n })
        );
      });
      (no.propTypes = { className: ut.string }),
        (no.displayName = "CHeaderDivider");
      var ro = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = void 0 === a ? "ul" : a,
          i = e.className,
          l = st(e, ["children", "component", "className"]);
        return t.createElement(
          o,
          lt({ className: yt("header-nav", i), role: "navigation" }, l, {
            ref: n,
          }),
          r
        );
      });
      (ro.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (ro.displayName = "CHeaderNav");
      var ao = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "span",
          lt({ className: yt("header-text", a) }, o, { ref: n }),
          r
        );
      });
      (ao.propTypes = { children: ut.node, className: ut.string }),
        (ao.displayName = "CHeaderText");
      var oo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "button",
          lt({ type: "button", className: yt("header-toggler", a) }, o, {
            ref: n,
          }),
          null !== r && void 0 !== r
            ? r
            : t.createElement("span", { className: "header-toggler-icon" })
        );
      });
      (oo.propTypes = { children: ut.node, className: ut.string }),
        (oo.displayName = "CHeaderToggler");
      var io = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.align,
          o = e.className,
          i = e.fluid,
          l = e.rounded,
          s = e.thumbnail,
          c = st(e, ["align", "className", "fluid", "rounded", "thumbnail"]);
        return t.createElement(
          "img",
          lt(
            {
              className:
                yt(
                  ((r = {}),
                  (r["float-".concat(a)] = a && ("start" === a || "end" === a)),
                  (r["d-block mx-auto"] = a && "center" === a),
                  (r["img-fluid"] = i),
                  (r.rounded = l),
                  (r["img-thumbnail"] = s),
                  r),
                  o
                ) || void 0,
            },
            c,
            { ref: n }
          )
        );
      });
      (io.propTypes = {
        align: ut.oneOf(["start", "center", "end"]),
        className: ut.string,
        fluid: ut.bool,
        rounded: ut.bool,
        thumbnail: ut.bool,
      }),
        (io.displayName = "CImage");
      var lo = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.component,
          l = void 0 === i ? "ul" : i,
          s = e.flush,
          c = e.layout;
        return t.createElement(
          l,
          {
            className: yt(
              "list-group",
              ((r = { "list-group-flush": s }),
              (r["list-group-".concat(c)] = c),
              r),
              o
            ),
            ref: n,
          },
          a
        );
      });
      (lo.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
        flush: ut.bool,
        layout: ut.oneOf([
          "horizontal",
          "horizontal-sm",
          "horizontal-md",
          "horizontal-lg",
          "horizontal-xl",
          "horizontal-xxl",
        ]),
      }),
        (lo.displayName = "CListGroup");
      var so = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.active,
          i = e.className,
          l = e.disabled,
          s = e.color,
          c = e.component,
          u = void 0 === c ? "li" : c,
          d = st(e, [
            "children",
            "active",
            "className",
            "disabled",
            "color",
            "component",
          ]),
          f = "a" === u || "button" === u ? nn : u;
        return (
          (d = lt(
            lt(
              lt(
                lt(
                  {},
                  ("a" === u || "button" === u) && {
                    active: o,
                    disabled: l,
                    component: u,
                    ref: n,
                  }
                ),
                o && { "aria-current": !0 }
              ),
              l && { "aria-disabled": !0 }
            ),
            d
          )),
          t.createElement(
            f,
            lt(
              {
                className: yt(
                  "list-group-item",
                  ((r = {}),
                  (r["list-group-item-".concat(s)] = s),
                  (r["list-group-item-action"] = "a" === u || "button" === u),
                  (r.active = o),
                  (r.disabled = l),
                  r),
                  i
                ),
              },
              d
            ),
            a
          )
        );
      });
      (so.propTypes = {
        active: ut.bool,
        children: ut.node,
        className: ut.string,
        color: Yt,
        component: ut.elementType,
        disabled: ut.bool,
      }),
        (so.displayName = "CListGroupItem");
      var co = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("modal-content", a) }, o, { ref: n }),
          r
        );
      });
      (co.propTypes = { children: ut.node, className: ut.string }),
        (co.displayName = "CModalContent");
      var uo = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.alignment,
          i = e.className,
          l = e.fullscreen,
          s = e.scrollable,
          c = e.size,
          u = st(e, [
            "children",
            "alignment",
            "className",
            "fullscreen",
            "scrollable",
            "size",
          ]);
        return t.createElement(
          "div",
          lt(
            {
              className: yt(
                "modal-dialog",
                ((r = { "modal-dialog-centered": "center" === o }),
                (r[
                  "boolean" === typeof l
                    ? "modal-fullscreen"
                    : "modal-fullscreen-".concat(l, "-down")
                ] = l),
                (r["modal-dialog-scrollable"] = s),
                (r["modal-".concat(c)] = c),
                r),
                i
              ),
            },
            u,
            { ref: n }
          ),
          a
        );
      });
      (uo.propTypes = {
        alignment: ut.oneOf(["top", "center"]),
        children: ut.node,
        className: ut.string,
        fullscreen: ut.oneOfType([
          ut.bool,
          ut.oneOf(["sm", "md", "lg", "xl", "xxl"]),
        ]),
        scrollable: ut.bool,
        size: ut.oneOf(["sm", "lg", "xl"]),
      }),
        (uo.displayName = "CModalDialog");
      var fo = (0, t.createContext)({}),
        po = (0, t.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.alignment,
            o = e.backdrop,
            i = void 0 === o || o,
            l = e.className,
            s = e.duration,
            c = void 0 === s ? 150 : s,
            u = e.fullscreen,
            d = e.keyboard,
            f = void 0 === d || d,
            p = e.onClose,
            m = e.onClosePrevented,
            h = e.onShow,
            v = e.portal,
            g = void 0 === v || v,
            y = e.scrollable,
            b = e.size,
            w = e.transition,
            x = void 0 === w || w,
            N = e.unmountOnClose,
            E = void 0 === N || N,
            k = e.visible,
            S = st(e, [
              "children",
              "alignment",
              "backdrop",
              "className",
              "duration",
              "fullscreen",
              "keyboard",
              "onClose",
              "onClosePrevented",
              "onShow",
              "portal",
              "scrollable",
              "size",
              "transition",
              "unmountOnClose",
              "visible",
            ]),
            C = (0, t.useRef)(null),
            _ = (0, t.useRef)(null),
            T = Vt(n, C),
            j = (0, t.useState)(k),
            O = j[0],
            P = j[1],
            R = (0, t.useState)(!1),
            L = R[0],
            I = R[1],
            z = { visible: O, setVisible: P };
          (0, t.useEffect)(
            function () {
              P(k);
            },
            [k]
          ),
            (0, t.useEffect)(
              function () {
                return (
                  document.addEventListener("click", D),
                  document.addEventListener("keydown", M),
                  function () {
                    document.removeEventListener("click", D),
                      document.removeEventListener("keydown", M);
                  }
                );
              },
              [O]
            );
          var F = function () {
            return "static" === i ? I(!0) : p && p();
          };
          (0, t.useLayoutEffect)(
            function () {
              m && m(),
                setTimeout(function () {
                  return I(!1);
                }, c);
            },
            [L]
          ),
            (0, t.useLayoutEffect)(
              function () {
                return (
                  O
                    ? (document.body.classList.add("modal-open"),
                      i &&
                        ((document.body.style.overflow = "hidden"),
                        (document.body.style.paddingRight = "0px")),
                      setTimeout(
                        function () {
                          var e;
                          null === (e = C.current) || void 0 === e || e.focus();
                        },
                        x ? c : 0
                      ))
                    : (document.body.classList.remove("modal-open"),
                      i &&
                        (document.body.style.removeProperty("overflow"),
                        document.body.style.removeProperty("padding-right"))),
                  function () {
                    document.body.classList.remove("modal-open"),
                      i &&
                        (document.body.style.removeProperty("overflow"),
                        document.body.style.removeProperty("padding-right"));
                  }
                );
              },
              [O]
            );
          var D = function (e) {
              _.current && !_.current.contains(e.target) && F();
            },
            M = function (e) {
              "Escape" === e.key && f && F();
            };
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              Mt,
              {
                in: O,
                mountOnEnter: !0,
                nodeRef: C,
                onEnter: h,
                onExit: p,
                unmountOnExit: E,
                timeout: x ? c : 0,
              },
              function (e) {
                return t.createElement(
                  On,
                  { portal: g },
                  t.createElement(
                    fo.Provider,
                    { value: z },
                    t.createElement(
                      "div",
                      {
                        className: yt(
                          "modal",
                          { "modal-static": L, fade: x, show: "entered" === e },
                          l
                        ),
                        tabIndex: -1,
                        role: "dialog",
                        style: lt({}, "exited" !== e && { display: "block" }),
                        ref: T,
                      },
                      t.createElement(
                        uo,
                        { alignment: a, fullscreen: u, scrollable: y, size: b },
                        t.createElement(co, lt({}, S, { ref: _ }), r)
                      )
                    )
                  )
                );
              }
            ),
            i &&
              t.createElement(
                On,
                { portal: g },
                t.createElement(on, { visible: O })
              )
          );
        });
      (po.propTypes = {
        alignment: ut.oneOf(["top", "center"]),
        backdrop: ut.oneOfType([ut.bool, ut.oneOf(["static"])]),
        children: ut.node,
        className: ut.string,
        duration: ut.number,
        fullscreen: ut.oneOfType([
          ut.bool,
          ut.oneOf(["sm", "md", "lg", "xl", "xxl"]),
        ]),
        keyboard: ut.bool,
        onClose: ut.func,
        onClosePrevented: ut.func,
        onShow: ut.func,
        portal: ut.bool,
        scrollable: ut.bool,
        size: ut.oneOf(["sm", "lg", "xl"]),
        transition: ut.bool,
        unmountOnClose: ut.bool,
        visible: ut.bool,
      }),
        (po.displayName = "CModal");
      var mo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("modal-body", a) }, o, { ref: n }),
          r
        );
      });
      (mo.propTypes = { children: ut.node, className: ut.string }),
        (mo.displayName = "CModalBody");
      var ho = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("modal-footer", a) }, o, { ref: n }),
          r
        );
      });
      (ho.propTypes = { children: ut.node, className: ut.string }),
        (ho.displayName = "CModalFooter");
      var vo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.closeButton,
          i = void 0 === o || o,
          l = st(e, ["children", "className", "closeButton"]),
          s = (0, t.useContext)(fo).setVisible;
        return t.createElement(
          "div",
          lt({ className: yt("modal-header", a) }, l, { ref: n }),
          r,
          i &&
            t.createElement(Kt, {
              onClick: function () {
                return s(!1);
              },
            })
        );
      });
      (vo.propTypes = {
        children: ut.node,
        className: ut.string,
        closeButton: ut.bool,
      }),
        (vo.displayName = "CModalHeader");
      var go = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = void 0 === a ? "h5" : a,
          i = e.className,
          l = st(e, ["children", "component", "className"]);
        return t.createElement(
          o,
          lt({ className: yt("modal-title", i) }, l, { ref: n }),
          r
        );
      });
      (go.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (go.displayName = "CModalTitle");
      var yo = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.component,
          l = void 0 === i ? "ul" : i,
          s = e.layout,
          c = e.variant,
          u = st(e, [
            "children",
            "className",
            "component",
            "layout",
            "variant",
          ]);
        return t.createElement(
          l,
          lt(
            {
              className: yt(
                "nav",
                ((r = {}),
                (r["nav-".concat(s)] = s),
                (r["nav-".concat(c)] = c),
                r),
                o
              ),
              role: "navigation",
            },
            u,
            { ref: n }
          ),
          a
        );
      });
      (yo.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
        layout: ut.oneOf(["fill", "justified"]),
        variant: ut.oneOf(["tabs", "pills"]),
      }),
        (yo.displayName = "CNav");
      var bo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "ul",
          lt({ className: yt("nav-group-items", a) }, o, { ref: n }),
          r
        );
      });
      (bo.propTypes = { children: ut.node, className: ut.string }),
        (bo.displayName = "CNavGroupItems");
      var wo = (0, t.createContext)({}),
        xo = (0, t.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.className,
            o = st(e, ["children", "className"]),
            i = (0, t.useState)(""),
            l = { visibleGroup: i[0], setVisibleGroup: i[1] };
          return t.createElement(
            "ul",
            lt({ className: yt("sidebar-nav", a), ref: n }, o),
            t.createElement(
              wo.Provider,
              { value: l },
              t.Children.map(r, function (e, n) {
                if (t.isValidElement(e))
                  return t.cloneElement(e, { key: n, idx: "".concat(n) });
              })
            )
          );
        });
      (xo.propTypes = { children: ut.node, className: ut.string }),
        (xo.displayName = "CSidebarNav");
      var No = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.compact,
          i = e.idx,
          l = e.toggler,
          s = e.visible,
          c = st(e, [
            "children",
            "className",
            "compact",
            "idx",
            "toggler",
            "visible",
          ]),
          u = (0, t.useState)(),
          d = u[0],
          f = u[1],
          p = (0, t.useRef)(null),
          m = (0, t.useContext)(wo),
          h = m.visibleGroup,
          v = m.setVisibleGroup,
          g = (0, t.useState)(
            Boolean(s || (i && h && h.toString().startsWith(i.toString())))
          ),
          y = g[0],
          b = g[1];
        (0, t.useEffect)(
          function () {
            b(Boolean(i && h && h.toString().startsWith(i.toString())));
          },
          [h]
        );
        var w = { height: 0 },
          x = {
            entering: { display: "block", height: d },
            entered: { display: "block", height: d },
            exiting: { display: "block", height: d },
            exited: { height: d },
          };
        return t.createElement(
          "li",
          lt({ className: yt("nav-group", { show: y }, a) }, c, { ref: n }),
          l &&
            t.createElement(
              "a",
              {
                className: "nav-link nav-group-toggle",
                onClick: function (e) {
                  return (function (e) {
                    e.preventDefault(),
                      v(
                        y
                          ? (
                              null === i || void 0 === i
                                ? void 0
                                : i.toString().includes(".")
                            )
                            ? i.slice(0, i.lastIndexOf("."))
                            : ""
                          : i
                      ),
                      b(!y);
                  })(e);
                },
              },
              l
            ),
          t.createElement(
            Mt,
            {
              in: y,
              nodeRef: p,
              onEntering: function () {
                p.current && f(p.current.scrollHeight);
              },
              onEntered: function () {
                f("auto");
              },
              onExit: function () {
                p.current && f(p.current.scrollHeight);
              },
              onExiting: function () {
                var e;
                null === (e = p.current) || void 0 === e || e.offsetHeight,
                  f(0);
              },
              onExited: function () {
                f(0);
              },
              timeout: 300,
            },
            function (e) {
              return t.createElement(
                "ul",
                {
                  className: yt("nav-group-items", { compact: o }),
                  style: lt(lt({}, w), x[e]),
                  ref: p,
                },
                t.Children.map(r, function (e, n) {
                  if (t.isValidElement(e))
                    return t.cloneElement(e, {
                      key: n,
                      idx: "".concat(i, ".").concat(n),
                    });
                })
              );
            }
          )
        );
      });
      (No.propTypes = {
        children: ut.node,
        className: ut.string,
        compact: ut.bool,
        idx: ut.string,
        toggler: ut.oneOfType([ut.string, ut.node]),
        visible: ut.bool,
      }),
        (No.displayName = "CNavGroup");
      var Eo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.idx,
          i = st(e, ["children", "className", "idx"]),
          l = (0, t.useRef)(null),
          s = Vt(n, l),
          c = (0, t.useContext)(wo).setVisibleGroup;
        return (
          (0, t.useEffect)(
            function () {
              var e;
              (i.active =
                null === (e = l.current) || void 0 === e
                  ? void 0
                  : e.classList.contains("active")),
                o && i.active && c(o);
            },
            [i.active, a]
          ),
          t.createElement(
            nn,
            lt({ className: yt("nav-link", a) }, i, { ref: s }),
            r
          )
        );
      });
      (Eo.propTypes = {
        children: ut.node,
        className: ut.string,
        idx: ut.string,
      }),
        (Eo.displayName = "CNavLink");
      var ko = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "li",
          { className: yt("nav-item", a), ref: n },
          o.href || o.to ? t.createElement(Eo, lt({ className: a }, o), r) : r
        );
      });
      (ko.propTypes = { children: ut.node, className: ut.string }),
        (ko.displayName = "CNavItem");
      var So = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "li",
          lt({ className: yt("nav-title", a) }, o, { ref: n }),
          r
        );
      });
      (So.propTypes = { children: ut.node, className: ut.string }),
        (So.displayName = "CNavTitle");
      var Co = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.color,
          l = e.colorScheme,
          s = e.component,
          c = void 0 === s ? "nav" : s,
          u = e.container,
          d = e.expand,
          f = e.placement,
          p = st(e, [
            "children",
            "className",
            "color",
            "colorScheme",
            "component",
            "container",
            "expand",
            "placement",
          ]);
        return t.createElement(
          c,
          lt(
            {
              className: yt(
                "navbar",
                ((r = {}),
                (r["bg-".concat(i)] = i),
                (r["navbar-".concat(l)] = l),
                (r[
                  "boolean" === typeof d
                    ? "navbar-expand"
                    : "navbar-expand-".concat(d)
                ] = d),
                r),
                f,
                o
              ),
            },
            p,
            { ref: n }
          ),
          u
            ? t.createElement(
                "div",
                {
                  className:
                    "string" === typeof u
                      ? "container-".concat(u)
                      : "container",
                },
                a
              )
            : t.createElement(t.Fragment, null, a)
        );
      });
      (Co.propTypes = {
        children: ut.node,
        className: ut.string,
        color: Yt,
        colorScheme: ut.oneOf(["dark", "light"]),
        component: ut.elementType,
        container: ut.oneOfType([
          ut.bool,
          ut.oneOf(["sm", "md", "lg", "xl", "xxl", "fluid"]),
        ]),
        expand: ut.oneOfType([
          ut.bool,
          ut.oneOf(["sm", "md", "lg", "xl", "xxl"]),
        ]),
        placement: ut.oneOf(["fixed-top", "fixed-bottom", "sticky-top"]),
      }),
        (Co.displayName = "CNavbar");
      var _o = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = e.className,
          i = st(e, ["children", "component", "className"]),
          l = null !== a && void 0 !== a ? a : i.href ? "a" : "span";
        return t.createElement(
          l,
          lt({ className: yt("navbar-brand", o) }, i, { ref: n }),
          r
        );
      });
      (_o.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (_o.displayName = "CNavbarBrand");
      var To = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = void 0 === a ? "ul" : a,
          i = e.className,
          l = st(e, ["children", "component", "className"]);
        return t.createElement(
          o,
          lt({ className: yt("navbar-nav", i), role: "navigation" }, l, {
            ref: n,
          }),
          r
        );
      });
      (To.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (To.displayName = "CNavbarNav");
      var jo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "span",
          lt({ className: yt("navbar-text", a) }, o, { ref: n }),
          r
        );
      });
      (jo.propTypes = { children: ut.node, className: ut.string }),
        (jo.displayName = "CNavbarText");
      var Oo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "button",
          lt({ type: "button", className: yt("navbar-toggler", a) }, o, {
            ref: n,
          }),
          null !== r && void 0 !== r
            ? r
            : t.createElement("span", { className: "navbar-toggler-icon" })
        );
      });
      (Oo.propTypes = { children: ut.node, className: ut.string }),
        (Oo.displayName = "CNavbarToggler");
      var Po = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.backdrop,
          o = void 0 === a || a,
          i = e.className,
          l = e.keyboard,
          s = void 0 === l || l,
          c = e.onHide,
          u = e.onShow,
          d = e.placement,
          f = e.portal,
          p = void 0 !== f && f,
          m = e.responsive,
          h = void 0 === m || m,
          v = e.scroll,
          g = void 0 !== v && v,
          y = e.visible,
          b = void 0 !== y && y,
          w = st(e, [
            "children",
            "backdrop",
            "className",
            "keyboard",
            "onHide",
            "onShow",
            "placement",
            "portal",
            "responsive",
            "scroll",
            "visible",
          ]),
          x = (0, t.useState)(b),
          N = x[0],
          E = x[1],
          k = (0, t.useRef)(null),
          S = Vt(n, k);
        (0, t.useEffect)(
          function () {
            E(b);
          },
          [b]
        ),
          (0, t.useEffect)(
            function () {
              if (N && !g)
                return (
                  (document.body.style.overflow = "hidden"),
                  void (document.body.style.paddingRight = "0px")
                );
              g ||
                (document.body.style.removeProperty("overflow"),
                document.body.style.removeProperty("padding-right"));
            },
            [N]
          );
        var C = function (e) {
          "Escape" === e.key && s && E(!1);
        };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement(
            Mt,
            {
              in: N,
              nodeRef: k,
              onEnter: u,
              onEntered: function () {
                var e;
                return null === (e = k.current) || void 0 === e
                  ? void 0
                  : e.focus();
              },
              onExit: c,
              timeout: 300,
            },
            function (e) {
              var n;
              return t.createElement(
                On,
                { portal: p },
                t.createElement(
                  "div",
                  lt(
                    {
                      className: yt(
                        ((n = {}),
                        (n[
                          "offcanvas".concat(
                            "string" === typeof h ? "-" + h : ""
                          )
                        ] = h),
                        (n["offcanvas-".concat(d)] = d),
                        (n.showing = "entering" === e),
                        (n.show = "entered" === e),
                        (n["show hiding"] = "exiting" === e),
                        n),
                        i
                      ),
                      role: "dialog",
                      tabIndex: -1,
                      onKeyDown: C,
                    },
                    w,
                    { ref: S }
                  ),
                  r
                )
              );
            }
          ),
          o &&
            t.createElement(
              On,
              { portal: p },
              t.createElement(on, {
                className: "offcanvas-backdrop",
                onClick: function () {
                  "static" !== o && E(!1);
                },
                visible: N,
              })
            )
        );
      });
      (Po.propTypes = {
        backdrop: ut.oneOfType([ut.bool, ut.oneOf(["static"])]),
        children: ut.node,
        className: ut.string,
        keyboard: ut.bool,
        onHide: ut.func,
        onShow: ut.func,
        placement: ut.oneOf(["start", "end", "top", "bottom"]).isRequired,
        portal: ut.bool,
        responsive: ut.oneOfType([
          ut.bool,
          ut.oneOf(["sm", "md", "lg", "xl", "xxl"]),
        ]),
        scroll: ut.bool,
        visible: ut.bool,
      }),
        (Po.displayName = "COffcanvas");
      var Ro = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("offcanvas-body", a) }, o, { ref: n }),
          r
        );
      });
      (Ro.propTypes = { children: ut.node, className: ut.string }),
        (Ro.displayName = "COffcanvasBody");
      var Lo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("offcanvas-header", a) }, o, { ref: n }),
          r
        );
      });
      (Lo.propTypes = { children: ut.node, className: ut.string }),
        (Lo.displayName = "COffcanvasHeader");
      var Io = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = void 0 === a ? "h5" : a,
          i = e.className,
          l = st(e, ["children", "component", "className"]);
        return t.createElement(
          o,
          lt({ className: yt("offcanvas-title", i) }, l, { ref: n }),
          r
        );
      });
      (Io.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (Io.displayName = "COffcanvasTitle");
      var zo = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.align,
          i = e.className,
          l = e.size,
          s = st(e, ["children", "align", "className", "size"]);
        return t.createElement(
          "nav",
          lt({ ref: n }, s),
          t.createElement(
            "ul",
            {
              className: yt(
                "pagination",
                ((r = {}),
                (r["justify-content-".concat(o)] = o),
                (r["pagination-".concat(l)] = l),
                r),
                i
              ),
            },
            a
          )
        );
      });
      (zo.propTypes = {
        align: ut.oneOf(["start", "center", "end"]),
        children: ut.node,
        className: ut.string,
        size: ut.oneOf(["sm", "lg"]),
      }),
        (zo.displayName = "CPagination");
      var Fo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.component,
          i = st(e, ["children", "className", "component"]),
          l = null !== o && void 0 !== o ? o : i.active ? "span" : "a";
        return t.createElement(
          "li",
          lt(
            {
              className: yt(
                "page-item",
                { active: i.active, disabled: i.disabled },
                a
              ),
            },
            i.active && { "aria-current": "page" }
          ),
          "a" === l
            ? t.createElement(
                nn,
                lt({ className: "page-link", component: l }, i, { ref: n }),
                r
              )
            : t.createElement(l, { className: "page-link", ref: n }, r)
        );
      });
      (Fo.propTypes = {
        children: ut.node,
        className: ut.string,
        component: ut.elementType,
      }),
        (Fo.displayName = "CPaginationItem");
      var Do = ["xxl", "xl", "lg", "md", "sm", "xs"],
        Mo = (0, t.forwardRef)(function (e, n) {
          var r,
            a = e.children,
            o = e.animation,
            i = e.className,
            l = e.color,
            s = e.component,
            c = void 0 === s ? "span" : s,
            u = e.size,
            d = st(e, [
              "children",
              "animation",
              "className",
              "color",
              "component",
              "size",
            ]),
            f = [];
          return (
            Do.forEach(function (e) {
              var t = d[e];
              delete d[e];
              var n = "xs" === e ? "" : "-".concat(e);
              "number" === typeof t && f.push("col".concat(n, "-").concat(t)),
                "boolean" === typeof t && f.push("col".concat(n));
            }),
            t.createElement(
              c,
              lt(
                {
                  className: yt(
                    o ? "placeholder-".concat(o) : "placeholder",
                    ((r = {}),
                    (r["bg-".concat(l)] = l),
                    (r["placeholder-".concat(u)] = u),
                    r),
                    f,
                    i
                  ),
                },
                d,
                { ref: n }
              ),
              a
            )
          );
        });
      (Mo.propTypes = {
        animation: ut.oneOf(["glow", "wave"]),
        children: ut.node,
        className: ut.string,
        color: Yt,
        component: ut.elementType,
        size: ut.oneOf(["xs", "sm", "lg"]),
      }),
        (Mo.displayName = "CPlaceholder");
      var Ao = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.animated,
          i = e.className,
          l = e.color,
          s = e.value,
          c = void 0 === s ? 0 : s,
          u = e.variant,
          d = st(e, [
            "children",
            "animated",
            "className",
            "color",
            "value",
            "variant",
          ]);
        return t.createElement(
          "div",
          lt(
            {
              className: yt(
                "progress-bar",
                ((r = {}),
                (r["bg-".concat(l)] = l),
                (r["progress-bar-".concat(u)] = u),
                (r["progress-bar-animated"] = o),
                r),
                i
              ),
              role: "progressbar",
              style: { width: "".concat(c, "%") },
              "aria-valuenow": c,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
            },
            d,
            { ref: n }
          ),
          a
        );
      });
      (Ao.propTypes = {
        animated: ut.bool,
        children: ut.node,
        className: ut.string,
        color: Yt,
        value: ut.number,
        variant: ut.oneOf(["striped"]),
      }),
        (Ao.displayName = "CProgressBar");
      var Bo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.height,
          i = e.thin,
          l = e.value,
          s = void 0 === l ? 0 : l,
          c = e.white,
          u = st(e, [
            "children",
            "className",
            "height",
            "thin",
            "value",
            "white",
          ]);
        return t.createElement(
          "div",
          {
            className: yt(
              "progress",
              { "progress-thin": i, "progress-white": c },
              a
            ),
            style: o ? { height: "".concat(o, "px") } : {},
            ref: n,
          },
          s ? t.createElement(Ao, lt({ value: s }, u), r) : r
        );
      });
      (Bo.propTypes = {
        children: ut.node,
        className: ut.string,
        height: ut.number,
        thin: ut.bool,
        value: ut.number,
        white: ut.bool,
      }),
        (Bo.displayName = "CProgress");
      var Uo = function (e) {
        var n = e.children,
          r = e.className,
          a = e.content,
          o = e.offset,
          i = void 0 === o ? [0, 8] : o,
          l = e.onHide,
          s = e.onShow,
          c = e.placement,
          u = void 0 === c ? "top" : c,
          d = e.title,
          f = e.trigger,
          p = void 0 === f ? "click" : f,
          m = e.visible,
          h = st(e, [
            "children",
            "className",
            "content",
            "offset",
            "onHide",
            "onShow",
            "placement",
            "title",
            "trigger",
            "visible",
          ]),
          v = (0, t.useState)(m),
          g = v[0],
          y = v[1],
          b = (0, t.useRef)(),
          w = (0, t.useState)(null),
          x = w[0],
          N = w[1],
          E = (0, t.useState)(null),
          k = E[0],
          S = E[1],
          C = (0, t.useState)(null),
          _ = C[0],
          T = C[1],
          j = ua(x, k, {
            modifiers: [
              { name: "arrow", options: { element: _ } },
              { name: "offset", options: { offset: i } },
            ],
            placement: u,
          }),
          O = j.styles,
          P = j.attributes;
        return (
          (0, t.useEffect)(
            function () {
              y(m);
            },
            [m]
          ),
          t.createElement(
            t.Fragment,
            null,
            t.cloneElement(
              n,
              lt(
                lt(
                  lt(
                    { ref: N },
                    ("click" === p || p.includes("click")) && {
                      onClick: function () {
                        return y(!g);
                      },
                    }
                  ),
                  ("focus" === p || p.includes("focus")) && {
                    onFocus: function () {
                      return y(!0);
                    },
                    onBlur: function () {
                      return y(!1);
                    },
                  }
                ),
                ("hover" === p || p.includes("hover")) && {
                  onMouseEnter: function () {
                    return y(!0);
                  },
                  onMouseLeave: function () {
                    return y(!1);
                  },
                }
              )
            ),
            "undefined" !== typeof window &&
              (0, it.createPortal)(
                t.createElement(
                  Mt,
                  {
                    in: g,
                    mountOnEnter: !0,
                    nodeRef: b,
                    onEnter: s,
                    onExit: l,
                    timeout: { enter: 0, exit: 200 },
                    unmountOnExit: !0,
                  },
                  function (e) {
                    return t.createElement(
                      "div",
                      lt(
                        {
                          className: yt(
                            "popover",
                            "bs-popover-".concat(
                              u.replace("left", "start").replace("right", "end")
                            ),
                            "fade",
                            { show: "entered" === e },
                            r
                          ),
                          ref: S,
                          role: "tooltip",
                          style: O.popper,
                        },
                        P.popper,
                        h
                      ),
                      t.createElement("div", {
                        className: "popover-arrow",
                        style: O.arrow,
                        ref: T,
                      }),
                      t.createElement(
                        "div",
                        { className: "popover-header" },
                        d
                      ),
                      t.createElement("div", { className: "popover-body" }, a)
                    );
                  }
                ),
                document.body
              )
          )
        );
      };
      (Uo.propTypes = {
        children: ut.node,
        className: ut.string,
        content: ut.oneOfType([ut.string, ut.node]),
        offset: ut.any,
        onHide: ut.func,
        onShow: ut.func,
        placement: ut.oneOf(["auto", "top", "right", "bottom", "left"]),
        title: ut.oneOfType([ut.string, ut.node]),
        trigger: Zt,
        visible: ut.bool,
      }),
        (Uo.displayName = "CPopover");
      var Ho = function (e) {
          return Boolean(
            getComputedStyle(e).getPropertyValue("--cui-is-mobile")
          );
        },
        Vo = (0, t.forwardRef)(function (e, n) {
          var r,
            a = e.children,
            o = e.className,
            i = e.narrow,
            l = e.onHide,
            s = e.onShow,
            c = e.onVisibleChange,
            u = e.overlaid,
            d = e.position,
            f = e.size,
            p = e.unfoldable,
            m = e.visible,
            h = st(e, [
              "children",
              "className",
              "narrow",
              "onHide",
              "onShow",
              "onVisibleChange",
              "overlaid",
              "position",
              "size",
              "unfoldable",
              "visible",
            ]),
            v = (0, t.useRef)(null),
            g = Vt(n, v),
            y = (0, t.useState)(!1),
            b = y[0],
            w = y[1],
            x = (0, t.useState)(m),
            N = x[0],
            E = x[1],
            k = (0, t.useState)(),
            S = k[0],
            C = k[1];
          (0, t.useEffect)(
            function () {
              v.current && w(Ho(v.current)), E(m);
            },
            [m]
          ),
            (0, t.useEffect)(
              function () {
                void 0 !== S && c && c(S), !S && l && l(), S && s && s();
              },
              [S]
            ),
            (0, t.useEffect)(
              function () {
                b && m && E(!1);
              },
              [b]
            ),
            (0, t.useEffect)(function () {
              var e, t;
              return (
                v.current && w(Ho(v.current)),
                v.current && C(Sn(v.current)),
                window.addEventListener("resize", function () {
                  return T();
                }),
                window.addEventListener("mouseup", O),
                window.addEventListener("keyup", j),
                null === (e = v.current) ||
                  void 0 === e ||
                  e.addEventListener("mouseup", P),
                null === (t = v.current) ||
                  void 0 === t ||
                  t.addEventListener("transitionend", function () {
                    v.current && C(Sn(v.current));
                  }),
                function () {
                  var e, t;
                  window.removeEventListener("resize", function () {
                    return T();
                  }),
                    window.removeEventListener("mouseup", O),
                    window.removeEventListener("keyup", j),
                    null === (e = v.current) ||
                      void 0 === e ||
                      e.removeEventListener("mouseup", P),
                    null === (t = v.current) ||
                      void 0 === t ||
                      t.removeEventListener("transitionend", function () {
                        v.current && C(Sn(v.current));
                      });
                }
              );
            });
          var _ = function () {
              E(!1);
            },
            T = function () {
              v.current && w(Ho(v.current)), v.current && C(Sn(v.current));
            },
            j = function (e) {
              b && v.current && !v.current.contains(e.target) && _();
            },
            O = function (e) {
              b && v.current && !v.current.contains(e.target) && _();
            },
            P = function (e) {
              var t = e.target;
              t &&
                t.classList.contains("nav-link") &&
                !t.classList.contains("nav-group-toggle") &&
                b &&
                _();
            };
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              "div",
              lt(
                {
                  className: yt(
                    "sidebar",
                    ((r = { "sidebar-narrow": i, "sidebar-overlaid": u }),
                    (r["sidebar-".concat(d)] = d),
                    (r["sidebar-".concat(f)] = f),
                    (r["sidebar-narrow-unfoldable"] = p),
                    (r.show = !0 === N && b),
                    (r.hide = !1 === N && !b),
                    r),
                    o
                  ),
                },
                h,
                { ref: g }
              ),
              a
            ),
            "undefined" !== typeof window &&
              b &&
              (0, it.createPortal)(
                t.createElement(on, {
                  className: "sidebar-backdrop",
                  visible: N,
                }),
                document.body
              )
          );
        });
      (Vo.propTypes = {
        children: ut.node,
        className: ut.string,
        narrow: ut.bool,
        onHide: ut.func,
        onShow: ut.func,
        onVisibleChange: ut.func,
        overlaid: ut.bool,
        position: ut.oneOf(["fixed", "sticky"]),
        size: ut.oneOf(["sm", "lg", "xl"]),
        unfoldable: ut.bool,
        visible: ut.bool,
      }),
        (Vo.displayName = "CSidebar");
      var Wo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("sidebar-brand", a), ref: n }, o),
          r
        );
      });
      (Wo.propTypes = { children: ut.node, className: ut.string }),
        (Wo.displayName = "CSidebarBrand");
      var $o = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("sidebar-footer", a), ref: n }, o),
          r
        );
      });
      ($o.propTypes = { children: ut.node, className: ut.string }),
        ($o.displayName = "CSidebarFooter");
      var Qo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "button",
          lt({ className: yt("sidebar-toggler", a), ref: n }, o),
          r
        );
      });
      (Qo.propTypes = { children: ut.node, className: ut.string }),
        (Qo.displayName = "CSidebarToggler");
      var qo = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("sidebar-header", a), ref: n }, o),
          r
        );
      });
      (qo.propTypes = { children: ut.node, className: ut.string }),
        (qo.displayName = "CSidebarHeader");
      var Ko = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = e.color,
          o = e.component,
          i = void 0 === o ? "div" : o,
          l = e.size,
          s = e.variant,
          c = void 0 === s ? "border" : s,
          u = e.visuallyHiddenLabel,
          d = void 0 === u ? "Loading..." : u,
          f = st(e, [
            "className",
            "color",
            "component",
            "size",
            "variant",
            "visuallyHiddenLabel",
          ]);
        return t.createElement(
          i,
          lt(
            {
              className: yt(
                "spinner-".concat(c),
                "text-".concat(a),
                l && "spinner-".concat(c, "-").concat(l),
                r
              ),
              role: "status",
            },
            f,
            { ref: n }
          ),
          t.createElement("span", { className: "visually-hidden" }, d)
        );
      });
      (Ko.propTypes = {
        className: ut.string,
        color: Yt,
        component: ut.string,
        size: ut.oneOf(["sm"]),
        variant: ut.oneOf(["border", "grow"]),
        visuallyHiddenLabel: ut.string,
      }),
        (Ko.displayName = "CSpinner");
      var Yo = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.color,
          l = st(e, ["children", "className", "color"]);
        return t.createElement(
          "thead",
          lt(
            {
              className:
                yt(((r = {}), (r["table-".concat(i)] = i), r), o) || void 0,
            },
            l,
            { ref: n }
          ),
          a
        );
      });
      (Yo.propTypes = { children: ut.node, className: ut.string, color: Yt }),
        (Yo.displayName = "CTableHead");
      var Go = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.color,
          l = st(e, ["children", "className", "color"]);
        return t.createElement(
          "th",
          lt(
            {
              className:
                yt(((r = {}), (r["table-".concat(i)] = i), r), o) || void 0,
            },
            l,
            { ref: n }
          ),
          a
        );
      });
      (Go.propTypes = { children: ut.node, className: ut.string, color: Yt }),
        (Go.displayName = "CTableHeaderCell");
      var Xo = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.color,
          l = st(e, ["children", "className", "color"]);
        return t.createElement(
          "tbody",
          lt(
            {
              className:
                yt(((r = {}), (r["table-".concat(i)] = i), r), o) || void 0,
            },
            l,
            { ref: n }
          ),
          a
        );
      });
      (Xo.propTypes = { children: ut.node, className: ut.string, color: Yt }),
        (Xo.displayName = "CTableBody");
      var Jo = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.active,
          i = e.align,
          l = e.className,
          s = e.color,
          c = st(e, ["children", "active", "align", "className", "color"]),
          u = c.scope ? "th" : "td";
        return t.createElement(
          u,
          lt(
            {
              className:
                yt(
                  ((r = {}),
                  (r["align-".concat(i)] = i),
                  (r["table-active"] = o),
                  (r["table-".concat(s)] = s),
                  r),
                  l
                ) || void 0,
            },
            c,
            { ref: n }
          ),
          a
        );
      });
      (Jo.propTypes = {
        active: ut.bool,
        align: ut.oneOf(["bottom", "middle", "top"]),
        children: ut.node,
        className: ut.string,
        color: Yt,
      }),
        (Jo.displayName = "CTableDataCell");
      var Zo = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.active,
          i = e.align,
          l = e.className,
          s = e.color,
          c = st(e, ["children", "active", "align", "className", "color"]);
        return t.createElement(
          "tr",
          lt(
            {
              className:
                yt(
                  ((r = {}),
                  (r["align-".concat(i)] = i),
                  (r["table-active"] = o),
                  (r["table-".concat(s)] = s),
                  r),
                  l
                ) || void 0,
            },
            c,
            { ref: n }
          ),
          a
        );
      });
      (Zo.propTypes = {
        active: ut.bool,
        align: ut.oneOf(["bottom", "middle", "top"]),
        children: ut.node,
        className: ut.string,
        color: Yt,
      }),
        (Zo.displayName = "CTableRow");
      var ei = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.children,
          o = e.className,
          i = e.color,
          l = st(e, ["children", "className", "color"]);
        return t.createElement(
          "tfoot",
          lt(
            {
              className:
                yt(((r = {}), (r["table-".concat(i)] = i), r), o) || void 0,
            },
            l,
            { ref: n }
          ),
          a
        );
      });
      (ei.propTypes = { children: ut.node, className: ut.string, color: Yt }),
        (ei.displayName = "CTableFoot");
      var ti = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = st(e, ["children"]);
        return t.createElement("caption", lt({}, a, { ref: n }), r);
      });
      (ti.propTypes = { children: ut.node }),
        (ti.displayName = "CTableCaption");
      var ni = function (e) {
        var n = e.children,
          r = e.responsive,
          a = st(e, ["children", "responsive"]);
        return r
          ? t.createElement(
              "div",
              lt(
                {
                  className:
                    "boolean" === typeof r
                      ? "table-responsive"
                      : "table-responsive-".concat(r),
                },
                a
              ),
              n
            )
          : t.createElement(t.Fragment, null, n);
      };
      (ni.propTypes = {
        children: ut.node,
        responsive: ut.oneOfType([
          ut.bool,
          ut.oneOf(["sm", "md", "lg", "xl", "xxl"]),
        ]),
      }),
        (ni.displayName = "CTableResponsiveWrapper");
      var ri = function (e) {
          return e
            .replace(/[-_.]/g, " ")
            .replace(/ +/g, " ")
            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
            .split(" ")
            .map(function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            })
            .join(" ");
        },
        ai = function (e) {
          return Object.keys(e[0] || {}).filter(function (e) {
            return "_" !== e.charAt(0);
          });
        },
        oi = (0, t.forwardRef)(function (e, n) {
          var r,
            a = e.children,
            o = e.align,
            i = e.borderColor,
            l = e.bordered,
            s = e.borderless,
            c = e.caption,
            u = e.captionTop,
            d = e.className,
            f = e.color,
            p = e.columns,
            m = e.footer,
            h = e.hover,
            v = e.items,
            g = e.responsive,
            y = e.small,
            b = e.striped,
            w = e.stripedColumns,
            x = e.tableFootProps,
            N = e.tableHeadProps,
            E = st(e, [
              "children",
              "align",
              "borderColor",
              "bordered",
              "borderless",
              "caption",
              "captionTop",
              "className",
              "color",
              "columns",
              "footer",
              "hover",
              "items",
              "responsive",
              "small",
              "striped",
              "stripedColumns",
              "tableFootProps",
              "tableHeadProps",
            ]),
            k = (0, t.useMemo)(
              function () {
                return (function (e, t) {
                  return e
                    ? e.map(function (e) {
                        return "object" === typeof e ? e.key : e;
                      })
                    : t && ai(t);
                })(p, v);
              },
              [p, v]
            );
          return t.createElement(
            ni,
            { responsive: g },
            t.createElement(
              "table",
              lt(
                {
                  className: yt(
                    "table",
                    ((r = {}),
                    (r["align-".concat(o)] = o),
                    (r["border-".concat(i)] = i),
                    (r["caption-top"] = u || "top" === c),
                    (r["table-bordered"] = l),
                    (r["table-borderless"] = s),
                    (r["table-".concat(f)] = f),
                    (r["table-hover"] = h),
                    (r["table-sm"] = y),
                    (r["table-striped"] = b),
                    (r["table-striped-columns"] = w),
                    r),
                    d
                  ),
                },
                E,
                { ref: n }
              ),
              ((c && "top" !== c) || u) && t.createElement(ti, null, c || u),
              p &&
                t.createElement(
                  Yo,
                  lt({}, N),
                  t.createElement(
                    Zo,
                    null,
                    p.map(function (e, n) {
                      return t.createElement(
                        Go,
                        lt(
                          {},
                          e._props && lt({}, e._props),
                          e._style && { style: lt({}, e._style) },
                          { key: n }
                        ),
                        (function (e) {
                          var t;
                          return "object" === typeof e
                            ? null !== (t = e.label) && void 0 !== t
                              ? t
                              : ri(e.key)
                            : ri(e);
                        })(e)
                      );
                    })
                  )
                ),
              v &&
                t.createElement(
                  Xo,
                  null,
                  v.map(function (e, n) {
                    return t.createElement(
                      Zo,
                      lt({}, e._props && lt({}, e._props), { key: n }),
                      k &&
                        k.map(function (n, r) {
                          return e[n]
                            ? t.createElement(
                                Jo,
                                lt(
                                  {},
                                  e._cellProps &&
                                    lt(
                                      lt(
                                        {},
                                        e._cellProps.all &&
                                          lt({}, e._cellProps.all)
                                      ),
                                      e._cellProps[n] && lt({}, e._cellProps[n])
                                    ),
                                  { key: r }
                                ),
                                e[n]
                              )
                            : null;
                        })
                    );
                  })
                ),
              a,
              m &&
                t.createElement(
                  ei,
                  lt({}, x),
                  t.createElement(
                    Zo,
                    null,
                    m.map(function (e, n) {
                      return t.createElement(
                        Jo,
                        lt(
                          {},
                          "object" === typeof e && e._props && lt({}, e._props),
                          { key: n }
                        ),
                        "object" === typeof e ? e.label : e
                      );
                    })
                  )
                )
            )
          );
        });
      (oi.propTypes = {
        align: ut.oneOf(["bottom", "middle", "top"]),
        borderColor: ut.string,
        bordered: ut.bool,
        borderless: ut.bool,
        caption: ut.oneOfType([ut.string, ut.oneOf(["top"])]),
        captionTop: ut.string,
        children: ut.node,
        className: ut.string,
        color: Yt,
        columns: ut.array,
        footer: ut.array,
        hover: ut.bool,
        items: ut.array,
        responsive: ut.oneOfType([
          ut.bool,
          ut.oneOf(["sm", "md", "lg", "xl", "xxl"]),
        ]),
        small: ut.bool,
        striped: ut.bool,
        stripedColumns: ut.bool,
        tableFootProps: ut.shape(lt({}, ei.propTypes)),
        tableHeadProps: ut.shape(lt({}, Yo.propTypes)),
      }),
        (oi.displayName = "CTable");
      var ii = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("tab-content", a) }, o, { ref: n }),
          r
        );
      });
      (ii.propTypes = { children: ut.node, className: ut.string }),
        (ii.displayName = "CTabContent");
      var li = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.onHide,
          i = e.onShow,
          l = e.visible,
          s = st(e, ["children", "className", "onHide", "onShow", "visible"]),
          c = (0, t.useRef)(),
          u = Vt(n, c);
        return t.createElement(
          Mt,
          { in: l, nodeRef: c, onEnter: i, onExit: o, timeout: 150 },
          function (e) {
            return t.createElement(
              "div",
              lt(
                {
                  className: yt(
                    "tab-pane",
                    "fade",
                    { active: l, show: "entered" === e },
                    a
                  ),
                },
                s,
                { ref: u }
              ),
              r
            );
          }
        );
      });
      (li.propTypes = {
        children: ut.node,
        className: ut.string,
        onHide: ut.func,
        onShow: ut.func,
        visible: ut.bool,
      }),
        (li.displayName = "CTabPane");
      var si = (0, t.createContext)({}),
        ci = (0, t.forwardRef)(function (e, n) {
          var r = e.children,
            a = e.animation,
            o = void 0 === a || a,
            i = e.autohide,
            l = void 0 === i || i,
            s = e.className,
            c = e.color,
            u = e.delay,
            d = void 0 === u ? 5e3 : u,
            f = e.index,
            p = e.key,
            m = e.visible,
            h = void 0 !== m && m,
            v = e.onClose,
            g = e.onShow,
            y = st(e, [
              "children",
              "animation",
              "autohide",
              "className",
              "color",
              "delay",
              "index",
              "key",
              "visible",
              "onClose",
              "onShow",
            ]),
            b = (0, t.useRef)(),
            w = Vt(n, b),
            x = (0, t.useState)(!1),
            N = x[0],
            E = x[1],
            k = (0, t.useRef)();
          (0, t.useEffect)(
            function () {
              E(h);
            },
            [h]
          );
          var S = { visible: N, setVisible: E };
          (0, t.useEffect)(function () {
            return function () {
              return clearTimeout(k.current);
            };
          }, []),
            (0, t.useEffect)(
              function () {
                C();
              },
              [N]
            );
          var C = function () {
            l &&
              (clearTimeout(k.current),
              (k.current = window.setTimeout(function () {
                E(!1);
              }, d)));
          };
          return t.createElement(
            Mt,
            {
              in: N,
              nodeRef: b,
              onEnter: function () {
                return g && g(null !== f && void 0 !== f ? f : null);
              },
              onExited: function () {
                return v && v(null !== f && void 0 !== f ? f : null);
              },
              timeout: 250,
              unmountOnExit: !0,
            },
            function (e) {
              var n;
              return t.createElement(
                si.Provider,
                { value: S },
                t.createElement(
                  "div",
                  lt(
                    {
                      className: yt(
                        "toast",
                        ((n = { fade: o }),
                        (n["bg-".concat(c)] = c),
                        (n["border-0"] = c),
                        (n["show showing"] =
                          "entering" === e || "exiting" === e),
                        (n.show = "entered" === e),
                        n),
                        s
                      ),
                      "aria-live": "assertive",
                      "aria-atomic": "true",
                      role: "alert",
                      onMouseEnter: function () {
                        return clearTimeout(k.current);
                      },
                      onMouseLeave: function () {
                        return C();
                      },
                    },
                    y,
                    { key: p, ref: w }
                  ),
                  r
                )
              );
            }
          );
        });
      (ci.propTypes = {
        animation: ut.bool,
        autohide: ut.bool,
        children: ut.node,
        className: ut.string,
        color: Yt,
        delay: ut.number,
        index: ut.number,
        key: ut.number,
        onClose: ut.func,
        onShow: ut.func,
        visible: ut.bool,
      }),
        (ci.displayName = "CToast");
      var ui = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = st(e, ["children", "className"]);
        return t.createElement(
          "div",
          lt({ className: yt("toast-body", a) }, o, { ref: n }),
          r
        );
      });
      (ui.propTypes = { children: ut.node, className: ut.string }),
        (ui.displayName = "CToastBody");
      var di = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.component,
          o = st(e, ["children", "component"]),
          i = (0, t.useContext)(si).setVisible;
        return a
          ? t.createElement(
              a,
              lt(
                {
                  onClick: function () {
                    return i(!1);
                  },
                },
                o,
                { ref: n }
              ),
              r
            )
          : t.createElement(
              Kt,
              lt(
                {
                  onClick: function () {
                    return i(!1);
                  },
                },
                o,
                { ref: n }
              )
            );
      });
      (di.propTypes = lt(lt({}, Kt.propTypes), { component: ut.elementType })),
        (di.displayName = "CToastClose");
      var fi = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.closeButton,
          i = st(e, ["children", "className", "closeButton"]);
        return t.createElement(
          "div",
          lt({ className: yt("toast-header", a) }, i, { ref: n }),
          r,
          o && t.createElement(di, null)
        );
      });
      (fi.propTypes = {
        children: ut.node,
        className: ut.string,
        closeButton: ut.bool,
      }),
        (fi.displayName = "CToastHeader");
      var pi = (0, t.forwardRef)(function (e, n) {
        var r = e.children,
          a = e.className,
          o = e.placement,
          i = e.push,
          l = st(e, ["children", "className", "placement", "push"]),
          s = (0, t.useState)([]),
          c = s[0],
          u = s[1],
          d = (0, t.useRef)(0);
        (0, t.useEffect)(
          function () {
            d.current++, i && f(i);
          },
          [i]
        );
        var f = function (e) {
          u(function (n) {
            return ct(
              ct([], n, !0),
              [
                t.cloneElement(e, {
                  index: d.current,
                  key: d.current,
                  onClose: function (e) {
                    return u(function (t) {
                      return t.filter(function (t) {
                        return t.props.index !== e;
                      });
                    });
                  },
                }),
              ],
              !1
            );
          });
        };
        return t.createElement(
          On,
          { portal: "string" === typeof o },
          c.length > 0 || r
            ? t.createElement(
                "div",
                lt(
                  {
                    className: yt(
                      "toaster toast-container p-3",
                      {
                        "position-fixed": o,
                        "top-0": o && o.includes("top"),
                        "top-50 translate-middle-y": o && o.includes("middle"),
                        "bottom-0": o && o.includes("bottom"),
                        "start-0": o && o.includes("start"),
                        "start-50 translate-middle-x":
                          o && o.includes("center"),
                        "end-0": o && o.includes("end"),
                      },
                      a
                    ),
                  },
                  l,
                  { ref: n }
                ),
                r,
                c.map(function (e) {
                  return t.cloneElement(e, { visible: !0 });
                })
              )
            : null
        );
      });
      (pi.propTypes = {
        children: ut.node,
        className: ut.string,
        placement: ut.oneOfType([
          ut.string,
          ut.oneOf([
            "top-start",
            "top-center",
            "top-end",
            "middle-start",
            "middle-center",
            "middle-end",
            "bottom-start",
            "bottom-center",
            "bottom-end",
          ]),
        ]),
        push: ut.any,
      }),
        (pi.displayName = "CToaster");
      var mi = function (e) {
        var n = e.children,
          r = e.className,
          a = e.content,
          o = e.offset,
          i = void 0 === o ? [0, 0] : o,
          l = e.onHide,
          s = e.onShow,
          c = e.placement,
          u = void 0 === c ? "top" : c,
          d = e.trigger,
          f = void 0 === d ? "hover" : d,
          p = e.visible,
          m = st(e, [
            "children",
            "className",
            "content",
            "offset",
            "onHide",
            "onShow",
            "placement",
            "trigger",
            "visible",
          ]),
          h = (0, t.useRef)(),
          v = (0, t.useState)(p),
          g = v[0],
          y = v[1],
          b = (0, t.useState)(null),
          w = b[0],
          x = b[1],
          N = (0, t.useState)(null),
          E = N[0],
          k = N[1],
          S = (0, t.useState)(null),
          C = S[0],
          _ = S[1],
          T = ua(w, E, {
            modifiers: [
              { name: "arrow", options: { element: C } },
              { name: "offset", options: { offset: i } },
            ],
            placement: u,
          }),
          j = T.styles,
          O = T.attributes;
        return (
          (0, t.useEffect)(
            function () {
              y(p);
            },
            [p]
          ),
          t.createElement(
            t.Fragment,
            null,
            t.cloneElement(
              n,
              lt(
                lt(
                  lt(
                    { ref: x },
                    ("click" === f || f.includes("click")) && {
                      onClick: function () {
                        return y(!g);
                      },
                    }
                  ),
                  ("focus" === f || f.includes("focus")) && {
                    onFocus: function () {
                      return y(!0);
                    },
                    onBlur: function () {
                      return y(!1);
                    },
                  }
                ),
                ("hover" === f || f.includes("hover")) && {
                  onMouseEnter: function () {
                    return y(!0);
                  },
                  onMouseLeave: function () {
                    return y(!1);
                  },
                }
              )
            ),
            "undefined" !== typeof window &&
              (0, it.createPortal)(
                t.createElement(
                  Mt,
                  {
                    in: g,
                    mountOnEnter: !0,
                    nodeRef: h,
                    onEnter: s,
                    onExit: l,
                    timeout: { enter: 0, exit: 200 },
                    unmountOnExit: !0,
                  },
                  function (e) {
                    return t.createElement(
                      "div",
                      lt(
                        {
                          className: yt(
                            "tooltip",
                            "bs-popover-".concat(
                              u.replace("left", "start").replace("right", "end")
                            ),
                            "fade",
                            { show: "entered" === e },
                            r
                          ),
                          ref: k,
                          role: "tooltip",
                          style: j.popper,
                        },
                        O.popper,
                        m
                      ),
                      t.createElement("div", {
                        className: "tooltip-arrow",
                        style: j.arrow,
                        ref: _,
                      }),
                      t.createElement("div", { className: "tooltip-inner" }, a)
                    );
                  }
                ),
                document.body
              )
          )
        );
      };
      (mi.propTypes = {
        children: ut.node,
        content: ut.oneOfType([ut.string, ut.node]),
        offset: ut.any,
        onHide: ut.func,
        onShow: ut.func,
        placement: ut.oneOf(["auto", "top", "right", "bottom", "left"]),
        trigger: Zt,
        visible: ut.bool,
      }),
        (mi.displayName = "CTooltip");
      var hi = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.action,
          o = e.chart,
          i = e.className,
          l = e.color,
          s = e.title,
          c = e.value,
          u = st(e, [
            "action",
            "chart",
            "className",
            "color",
            "title",
            "value",
          ]);
        return t.createElement(
          mn,
          lt(
            {
              className: yt(
                ((r = {}),
                (r["bg-".concat(l)] = l),
                (r["text-high-emphasis-inverse"] = l),
                r),
                i
              ),
            },
            u,
            { ref: n }
          ),
          t.createElement(
            hn,
            {
              className:
                "pb-0 d-flex justify-content-between align-items-start",
            },
            t.createElement(
              "div",
              null,
              c && t.createElement("div", { className: "fs-4 fw-semibold" }, c),
              s && t.createElement("div", null, s)
            ),
            a
          ),
          o
        );
      });
      (hi.propTypes = {
        action: ut.node,
        chart: ut.oneOfType([ut.string, ut.node]),
        className: ut.string,
        color: Yt,
        title: ut.oneOfType([ut.string, ut.node]),
        value: ut.oneOfType([ut.string, ut.node, ut.number]),
      }),
        (hi.displayName = "CWidgetStatsA");
      var vi = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = e.color,
          o = e.inverse,
          i = e.progress,
          l = e.text,
          s = e.title,
          c = e.value,
          u = st(e, [
            "className",
            "color",
            "inverse",
            "progress",
            "text",
            "title",
            "value",
          ]);
        return t.createElement(
          mn,
          lt(
            { className: r, color: a },
            o && { textColor: "high-emphasis-inverse" },
            u,
            { ref: n }
          ),
          t.createElement(
            hn,
            null,
            c && t.createElement("div", { className: "fs-4 fw-semibold" }, c),
            s && t.createElement("div", null, s),
            t.createElement(
              Bo,
              lt({ className: "my-2", height: 4 }, o && { white: !0 }, i)
            ),
            l &&
              t.createElement(
                "small",
                {
                  className: o
                    ? "text-medium-emphasis-inverse"
                    : "text-medium-emphasis",
                },
                l
              )
          )
        );
      });
      (vi.propTypes = {
        className: ut.string,
        color: Yt,
        inverse: ut.bool,
        progress: ut.object,
        text: ut.string,
        title: ut.oneOfType([ut.string, ut.node]),
        value: ut.oneOfType([ut.string, ut.node, ut.number]),
      }),
        (vi.displayName = "CWidgetCWidgetStatsB");
      var gi = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = e.color,
          o = e.icon,
          i = e.inverse,
          l = e.progress,
          s = e.title,
          c = e.value,
          u = st(e, [
            "className",
            "color",
            "icon",
            "inverse",
            "progress",
            "title",
            "value",
          ]);
        return t.createElement(
          mn,
          lt(
            { className: r, color: a },
            i && { textColor: "high-emphasis-inverse" },
            u,
            { ref: n }
          ),
          t.createElement(
            hn,
            null,
            o &&
              t.createElement(
                "div",
                {
                  className: "text-medium-emphasis".concat(
                    i ? "-inverse" : "",
                    " text-end mb-4"
                  ),
                },
                o
              ),
            c &&
              t.createElement(
                "div",
                {
                  className: "text-high-emphasis".concat(
                    i ? "-inverse" : "",
                    " fs-4 fw-semibold"
                  ),
                },
                c
              ),
            s &&
              t.createElement(
                "div",
                {
                  className: i
                    ? "text-medium-emphasis-inverse"
                    : "text-medium-emphasis",
                },
                s
              ),
            t.createElement(
              Bo,
              lt({ className: "mt-3 mb-0", height: 4 }, i && { white: !0 }, l)
            )
          )
        );
      });
      (gi.propTypes = {
        className: ut.string,
        color: Yt,
        icon: ut.oneOfType([ut.string, ut.node]),
        inverse: ut.bool,
        progress: ut.object,
        title: ut.oneOfType([ut.string, ut.node]),
        value: ut.oneOfType([ut.string, ut.node, ut.number]),
      }),
        (gi.displayName = "CWidgetStatsCWidgetStatsC");
      var yi = (0, t.forwardRef)(function (e, n) {
        var r,
          a = e.className,
          o = e.chart,
          i = e.color,
          l = e.icon,
          s = e.values,
          c = st(e, ["className", "chart", "color", "icon", "values"]);
        return t.createElement(
          mn,
          lt({ className: a }, c, { ref: n }),
          t.createElement(
            yn,
            {
              className: yt(
                "position-relative d-flex justify-content-center align-items-center",
                ((r = {}), (r["bg-".concat(i)] = i), r)
              ),
            },
            l,
            o
          ),
          t.createElement(
            hn,
            { className: "row text-center" },
            s &&
              s.map(function (e, n) {
                return t.createElement(
                  t.Fragment,
                  { key: n },
                  n % 2 !== 0 && t.createElement("div", { className: "vr" }),
                  t.createElement(
                    Qa,
                    null,
                    t.createElement(
                      "div",
                      { className: "fs-5 fw-semibold" },
                      e.value
                    ),
                    t.createElement(
                      "div",
                      {
                        className: "text-uppercase text-medium-emphasis small",
                      },
                      e.title
                    )
                  )
                );
              })
          )
        );
      });
      (yi.propTypes = {
        chart: ut.oneOfType([ut.string, ut.node]),
        className: ut.string,
        color: Yt,
        icon: ut.oneOfType([ut.string, ut.node]),
        values: ut.arrayOf(ut.any),
      }),
        (yi.displayName = "CWidgetStatsD");
      var bi = (0, t.forwardRef)(function (e, n) {
        var r = e.chart,
          a = e.className,
          o = e.title,
          i = e.value,
          l = st(e, ["chart", "className", "title", "value"]);
        return t.createElement(
          mn,
          lt({ className: yt(a) }, l, { ref: n }),
          t.createElement(
            hn,
            { className: "text-center" },
            o &&
              t.createElement(
                "div",
                {
                  className:
                    "text-medium-emphasis small text-uppercase fw-semibold",
                },
                o
              ),
            i &&
              t.createElement("div", { className: "fs-6 fw-semibold py-3" }, i),
            r
          )
        );
      });
      (bi.propTypes = {
        children: ut.node,
        chart: ut.oneOfType([ut.string, ut.node]),
        className: ut.string,
        title: ut.oneOfType([ut.string, ut.node]),
        value: ut.oneOfType([ut.string, ut.node, ut.number]),
      }),
        (bi.displayName = "CWidgetStatsE");
      var wi = (0, t.forwardRef)(function (e, n) {
        var r = e.className,
          a = e.color,
          o = e.footer,
          i = e.icon,
          l = e.padding,
          s = void 0 === l || l,
          c = e.title,
          u = e.value,
          d = st(e, [
            "className",
            "color",
            "footer",
            "icon",
            "padding",
            "title",
            "value",
          ]);
        return t.createElement(
          mn,
          lt({ className: r }, d, { ref: n }),
          t.createElement(
            hn,
            {
              className: "d-flex align-items-center ".concat(!1 === s && "p-0"),
            },
            t.createElement(
              "div",
              {
                className: "me-3 text-white bg-"
                  .concat(a, " ")
                  .concat(s ? "p-3" : "p-4"),
              },
              i
            ),
            t.createElement(
              "div",
              null,
              t.createElement(
                "div",
                { className: "fs-6 fw-semibold text-".concat(a) },
                u
              ),
              t.createElement(
                "div",
                {
                  className:
                    "text-medium-emphasis text-uppercase fw-semibold small",
                },
                c
              )
            )
          ),
          o && t.createElement(vn, null, o)
        );
      });
      (wi.propTypes = {
        className: ut.string,
        color: Yt,
        footer: ut.oneOfType([ut.string, ut.node]),
        icon: ut.oneOfType([ut.string, ut.node]),
        padding: ut.bool,
        title: ut.oneOfType([ut.string, ut.node]),
        value: ut.oneOfType([ut.string, ut.node, ut.number]),
      }),
        (wi.displayName = "CWidgetStatsF");
      var xi = function (e) {
        return (0, tt.jsx)("div", {
          className: "sofa_light_dashboard_furniturestore_components_titles",
          children: (0, tt.jsx)("p", { children: e.title }),
        });
      };
      var Ni = function (e) {
        return (0, tt.jsx)("div", {
          className: "sofa_light_dashboard_furniturestore_components_labels",
          children: (0, tt.jsx)("p", { children: e.title }),
        });
      };
      var Ei = function (e) {
        var n = f((0, t.useState)("edit" === e.typ ? e.initVal : ""), 2),
          r = n[0],
          a = n[1];
        return (0, tt.jsx)("div", {
          className: "sofa_light_dashboard_furniturestore_components_textfield",
          children: (0, tt.jsx)("input", {
            id: e.id,
            type: "text",
            value: r,
            onChange: function (t) {
              a(t.target.value), e.keepSync(t.target.value);
            },
          }),
        });
      };
      var ki = function (e) {
        var n = f((0, t.useState)("edit" === e.typ ? e.initVal : ""), 2),
          r = n[0],
          a = n[1];
        return (0, tt.jsx)("div", {
          className: "sofa_light_dashboard_furniturestore_components_textarea",
          children: (0, tt.jsx)("textarea", {
            id: e.id,
            type: "text",
            value: r,
            onChange: function (t) {
              a(t.target.value), e.keepSync(t.target.value);
            },
          }),
        });
      };
      var Si = function (e) {
        var n = f((0, t.useState)(e.val1), 2),
          r = n[0],
          a = n[1];
        return (0, tt.jsxs)("div", {
          className:
            "sofa_light_dashboard_furniturestore_components_radiobutton",
          children: [
            (0, tt.jsx)("input", {
              onClick: function (t) {
                a(e.val1), e.keepSync(e.val1), console.log(r);
              },
              type: "radio",
              name: "radio",
            }),
            (0, tt.jsx)("label", { htmlFor: "radio", children: e.val1 }),
            (0, tt.jsx)("input", {
              onClick: function (t) {
                a(e.val2), e.keepSync(e.val2), console.log(r);
              },
              type: "radio",
              name: "radio",
            }),
            (0, tt.jsx)("label", { htmlFor: "radio", children: e.val2 }),
          ],
        });
      };
      var Ci = function (e) {
        var n = f((0, t.useState)("edit" === e.typ ? e.initVal : ""), 2),
          r = n[0],
          a = n[1];
        return (0, tt.jsx)("div", {
          className:
            "sofa_light_dashboard_furniturestore_components_customtextfield",
          children: (0, tt.jsx)("input", {
            id: e.id,
            type: "number",
            value: r,
            onChange: function (t) {
              t.target.value > -1 &&
                (a(t.target.value), e.keepSync(t.target.value));
            },
          }),
        });
      };
      var _i = n.p + "static/media/delete.ae23fc3aa8ce3d34ec36d4e67fa768ab.svg";
      var Ti = function (e) {
        return (0, tt.jsxs)("div", {
          className:
            "sofa_light_dashboard_furniturestore_components_imageViewer",
          children: [
            (0, tt.jsxs)("div", {
              children: [
                (0, tt.jsx)("img", { src: e.img, alt: "name" }),
                (0, tt.jsx)("p", { children: e.title }),
              ],
            }),
            (0, tt.jsx)("img", {
              onClick: e.clickedHandler,
              src: _i,
              alt: "delete",
            }),
          ],
        });
      };
      var ji = function (e) {
        var n = f((0, t.useState)("edit" === e.typ ? e.initVal : "Kitchen"), 2),
          r = n[0],
          a = n[1];
        return (0, tt.jsx)("div", {
          className: "sofa_light_dashboard_furniturestore_components_textfield",
          children: (0, tt.jsxs)("select", {
            id: e.id,
            value: r,
            onChange: function (t) {
              a(t.target.value), e.keepSync(t.target.value);
            },
            children: [
              (0, tt.jsx)("option", { value: "Kitchen", children: "Kitchen" }),
              (0, tt.jsx)("option", { value: "Office", children: "Office" }),
              (0, tt.jsx)("option", {
                value: "Living room",
                children: "Living room",
              }),
              (0, tt.jsx)("option", { value: "Dining", children: "Dining" }),
              (0, tt.jsx)("option", {
                value: "Partitions",
                children: "Partitions",
              }),
              (0, tt.jsx)("option", {
                value: "Bed rooms",
                children: "Bed rooms",
              }),
              (0, tt.jsx)("option", {
                value: "Wardrobes",
                children: "Wardrobes",
              }),
              (0, tt.jsx)("option", { value: "Doors", children: "Doors" }),
              (0, tt.jsx)("option", { value: "Ceiling", children: "Ceiling" }),
              (0, tt.jsx)("option", {
                value: "Mattress",
                children: "Mattress",
              }),
              (0, tt.jsx)("option", {
                value: "Painting",
                children: "Painting",
              }),
            ],
          }),
        });
      };
      var Oi = n.p + "static/media/upload.2a47d6f677142583bb1c80d9c24dd193.svg";
      var Pi = function (e) {
        return (0, tt.jsx)("div", {
          className:
            "sofa_light_dashboard_furniturestore_components_product_action_button",
          children: (0, tt.jsxs)("button", {
            id: "saveProductButtonId",
            onClick: function (t) {
              e.handleSave(t);
            },
            children: [
              "Save Product",
              (0, tt.jsx)("svg", {
                style: { display: "none" },
                id: "saveProductStatusButtonId",
                className: "spinner",
                viewBox: "0 0 50 50",
                children: (0, tt.jsx)("circle", {
                  className: "path",
                  cx: "25",
                  cy: "25",
                  r: "20",
                  fill: "none",
                  strokeWidth: "5",
                }),
              }),
            ],
          }),
        });
      };
      function Ri() {
        return (Ri = l(
          o().mark(function e(t, n) {
            var r, a;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = "not saved"),
                      (a = { productInfo: n, images: t }),
                      console.log("sending data ", a),
                      (e.next = 5),
                      fetch(
                        "http://localhost:3003/sofalight/backend/api/products/add",
                        {
                          method: "POST",
                          credentials: "include",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(a),
                        }
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          r = "saved";
                        })
                        .catch(function (e) {
                          console.log(e.message);
                        })
                    );
                  case 5:
                    return e.abrupt("return", r);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Li = function (e, t) {
        return Ri.apply(this, arguments);
      };
      var Ii = function () {
        var e = "check";
        (0, t.useEffect)(
          function () {
            function e() {
              return (e = l(
                o().mark(function e() {
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "http://localhost:3003/sofalight/backend/api/getLoggedIn",
                              { credentials: "include" }
                            )
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                if (
                                  (console.log(e),
                                  "Not Logged in" === e.user ||
                                    "Couldn't get user data" === e.user)
                                )
                                  return (
                                    console.log(e, "not logged in"),
                                    void (window.location = "/")
                                  );
                                document.getElementById(
                                  "preloaderScreenAddProduct"
                                ).style.display = "none";
                              })
                              .catch(function (e) {
                                console.log("error");
                              })
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            (function () {
              e.apply(this, arguments);
            })();
          },
          [e]
        );
        var n = f((0, t.useState)([]), 2),
          r = n[0],
          a = n[1],
          i = f((0, t.useState)(), 2),
          s = i[0],
          c = i[1],
          u = f((0, t.useState)(), 2),
          d = u[0],
          p = u[1],
          h = f((0, t.useState)(), 2),
          v = h[0],
          g = h[1],
          y = f((0, t.useState)(), 2),
          b = y[0],
          w = y[1],
          x = f((0, t.useState)(), 2),
          N = x[0],
          E = x[1],
          k = f((0, t.useState)(), 2),
          S = k[0],
          C = k[1],
          _ = f((0, t.useState)(), 2),
          T = _[0],
          j = _[1],
          O = f((0, t.useState)(0), 2),
          P = O[0],
          R = O[1],
          L = (0, t.useRef)(),
          I = (0, t.useRef)(),
          z = (0, t.useRef)(),
          F = (0, tt.jsxs)(ci, {
            children: [
              (0, tt.jsxs)(fi, {
                closeButton: !0,
                children: [
                  (0, tt.jsx)("svg", {
                    className: "rounded me-2",
                    width: "20",
                    height: "20",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMidYMid slice",
                    focusable: "false",
                    role: "img",
                    children: (0, tt.jsx)("rect", {
                      width: "100%",
                      height: "100%",
                      fill: "green",
                    }),
                  }),
                  (0, tt.jsx)("div", {
                    className: "fw-bold me-auto",
                    children: "Product Creation Status",
                  }),
                  (0, tt.jsx)("small", { children: "Now" }),
                ],
              }),
              (0, tt.jsx)(ui, { children: "Product created successfully." }),
            ],
          }),
          D = (0, tt.jsxs)(ci, {
            children: [
              (0, tt.jsxs)(fi, {
                closeButton: !0,
                children: [
                  (0, tt.jsx)("svg", {
                    className: "rounded me-2",
                    width: "20",
                    height: "20",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMidYMid slice",
                    focusable: "false",
                    role: "img",
                    children: (0, tt.jsx)("rect", {
                      width: "100%",
                      height: "100%",
                      fill: "red",
                    }),
                  }),
                  (0, tt.jsx)("div", {
                    className: "fw-bold me-auto",
                    children: "Product Creation Status",
                  }),
                  (0, tt.jsx)("small", { children: "Now" }),
                ],
              }),
              (0, tt.jsx)(ui, {
                children:
                  "Product not created. Refresh the page and try again.",
              }),
            ],
          }),
          M = (0, tt.jsxs)(ci, {
            children: [
              (0, tt.jsxs)(fi, {
                closeButton: !0,
                children: [
                  (0, tt.jsx)("svg", {
                    className: "rounded me-2",
                    width: "20",
                    height: "20",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMidYMid slice",
                    focusable: "false",
                    role: "img",
                    children: (0, tt.jsx)("rect", {
                      width: "100%",
                      height: "100%",
                      fill: "red",
                    }),
                  }),
                  (0, tt.jsx)("div", {
                    className: "fw-bold me-auto",
                    children: "Product Creation Status",
                  }),
                  (0, tt.jsx)("small", { children: "Now" }),
                ],
              }),
              (0, tt.jsx)(ui, {
                children:
                  "Some of products information are empty and you need to upload at least one image",
              }),
            ],
          }),
          A = (0, t.useRef)(),
          B = (0, t.useRef)();
        return (
          (0, t.useEffect)(
            function () {
              (A.current = window.cloudinary),
                (B.current = A.current.createUploadWidget(
                  { cloudName: "dyovmrkfu", uploadPreset: "bhvm3nzv" },
                  function (e, t) {
                    !e &&
                      t &&
                      "success" === t.event &&
                      (console.log(t),
                      a(
                        [].concat(m(r), [
                          [
                            t.info.original_filename,
                            t.info.secure_url,
                            t.info.public_id,
                          ],
                        ])
                      ));
                  }
                ));
            },
            [r]
          ),
          (0, tt.jsxs)(tt.Fragment, {
            children: [
              (0, tt.jsx)("div", {
                id: "preloaderScreenAddProduct",
                children: (0, tt.jsx)("div", {
                  className: "loader",
                  children: (0, tt.jsx)("div", { className: "inner-loader" }),
                }),
              }),
              (0, tt.jsxs)("div", {
                className: "sofa_light_dashboard_furniturestore_AddProduct",
                children: [
                  (0, tt.jsxs)(tt.Fragment, {
                    children: [
                      (0, tt.jsx)(un, {
                        style: { display: "none" },
                        id: "successbuttonId",
                        onClick: function () {
                          return R(F);
                        },
                        children: "Send a toast",
                      }),
                      (0, tt.jsx)(pi, {
                        ref: L,
                        push: P,
                        placement: "top-end",
                      }),
                      (0, tt.jsx)(un, {
                        style: { display: "none" },
                        id: "failurebuttonId",
                        onClick: function () {
                          return R(D);
                        },
                        children: "Send a toast",
                      }),
                      (0, tt.jsx)(pi, {
                        ref: I,
                        push: P,
                        placement: "top-end",
                      }),
                      (0, tt.jsx)(un, {
                        style: { display: "none" },
                        id: "emptyerrorbuttonId",
                        onClick: function () {
                          return R(M);
                        },
                        children: "Send a toast",
                      }),
                      (0, tt.jsx)(pi, {
                        ref: z,
                        push: P,
                        placement: "top-end",
                      }),
                    ],
                  }),
                  (0, tt.jsx)(xi, { title: "About Product (Add)" }),
                  (0, tt.jsx)(Ni, { title: "Product Name:" }),
                  (0, tt.jsx)(Ei, {
                    keepSync: function (e) {
                      return c(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_textfield_product_name",
                  }),
                  (0, tt.jsx)(Ni, { title: "Brand:" }),
                  (0, tt.jsx)(Ei, {
                    keepSync: function (e) {
                      return p(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_textfield_sub_text",
                  }),
                  (0, tt.jsx)(Ni, { title: "Category:" }),
                  (0, tt.jsx)(ji, {
                    keepSync: function (e) {
                      return g(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_textfield_product_category",
                  }),
                  (0, tt.jsx)(Ni, { title: "Price:" }),
                  (0, tt.jsx)(Ci, {
                    keepSync: function (e) {
                      return w(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_custom_text_field_1",
                  }),
                  (0, tt.jsx)(Ni, { title: "Discount:" }),
                  (0, tt.jsx)(Ci, {
                    keepSync: function (e) {
                      return E(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_custom_text_field_2",
                  }),
                  (0, tt.jsx)(Ni, { title: "Status:" }),
                  (0, tt.jsx)(Si, {
                    keepSync: function (e) {
                      return C(e);
                    },
                    val1: "Published",
                    val2: "Draft",
                  }),
                  (0, tt.jsx)(Ni, { title: "Product Description:" }),
                  (0, tt.jsx)(ki, {
                    keepSync: function (e) {
                      return j(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_textarea_1",
                  }),
                  (0, tt.jsx)(xi, {
                    title: "Product Images (".concat(4 - r.length, ")"),
                  }),
                  (0, tt.jsxs)("div", {
                    onClick: function () {
                      r.length >= 4 || B.current.open();
                    },
                    id: "sofa_light_dashboard_furniturestore_components_imageUpload_Id",
                    className:
                      "sofa_light_dashboard_furniturestore_components_imageUpload",
                    children: [
                      (0, tt.jsx)("img", { src: Oi, alt: "upload" }),
                      (0, tt.jsxs)("p", {
                        children: [
                          (0, tt.jsx)("span", { children: "Click and Browse" }),
                          " to Choose a File",
                        ],
                      }),
                    ],
                  }),
                  (0, tt.jsx)("div", {
                    id: "sofa_light_dashboard_furniturestore_components_product_images_div",
                    children: r.map(function (e, t) {
                      return (0, tt.jsx)(
                        Ti,
                        {
                          clickedHandler: function (t) {
                            (r = r.filter(function (t) {
                              return t[2] !== e[2];
                            })),
                              a(r);
                          },
                          img: e[1],
                          title: e[0],
                        },
                        t
                      );
                    }),
                  }),
                  (0, tt.jsx)(Pi, {
                    handleSave: (function () {
                      var e = l(
                        o().mark(function e(t) {
                          var n, i;
                          return o().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    "" !== s &&
                                    "" !== d &&
                                    "" !== v &&
                                    "" !== b &&
                                    "" !== N &&
                                    "" !== S &&
                                    "" !== T &&
                                    0 !== r.length
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  return (
                                    document
                                      .getElementById("emptyerrorbuttonId")
                                      .click(),
                                    e.abrupt("return")
                                  );
                                case 3:
                                  return (
                                    (n = {
                                      productName: s,
                                      productSubText: d,
                                      productCategory: v,
                                      productPrice: b,
                                      productDiscount: N,
                                      productStatus: S,
                                      productDescription: T,
                                    }),
                                    (document.getElementById(
                                      "saveProductStatusButtonId"
                                    ).style.display = "block"),
                                    document
                                      .getElementById("saveProductButtonId")
                                      .setAttribute("disabled", "true"),
                                    (e.next = 8),
                                    Li(r, n)
                                  );
                                case 8:
                                  (i = e.sent),
                                    console.log("save status", i),
                                    "saved" === i
                                      ? (a([]),
                                        (document.getElementById(
                                          "saveProductStatusButtonId"
                                        ).style.display = "none"),
                                        document
                                          .getElementById("successbuttonId")
                                          .click(),
                                        document
                                          .getElementById("saveProductButtonId")
                                          .removeAttribute("disabled"))
                                      : document
                                          .getElementById("failurebuttonId")
                                          .click();
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var zi = function (e) {
        return (0, tt.jsx)("div", {
          className:
            "sofa_light_dashboard_furniturestore_components_product_action_button",
          children: (0, tt.jsxs)("button", {
            id: "editProductButtonIdEdit",
            onClick: function (t) {
              e.handleSave(t);
            },
            children: [
              "Edit Product",
              (0, tt.jsx)("svg", {
                style: { display: "none" },
                id: "editProductStatusButtonIdEdit",
                className: "spinner",
                viewBox: "0 0 50 50",
                children: (0, tt.jsx)("circle", {
                  className: "path",
                  cx: "25",
                  cy: "25",
                  r: "20",
                  fill: "none",
                  strokeWidth: "5",
                }),
              }),
            ],
          }),
        });
      };
      function Fi() {
        return (Fi = l(
          o().mark(function e(t, n, r) {
            var a, i;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = "not updated"),
                      (i = { productInfo: r, images: n }),
                      (e.next = 4),
                      fetch(
                        "http://localhost:3003/sofalight/backend/api/products/update/" +
                          t,
                        {
                          credentials: "include",
                          method: "PUT",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(i),
                        }
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          a = "updated";
                        })
                        .catch(function (e) {
                          console.log(e.message);
                        })
                    );
                  case 4:
                    return e.abrupt("return", a);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Di = function (e, t, n) {
        return Fi.apply(this, arguments);
      };
      var Mi = function () {
        var e = "check";
        (0, t.useEffect)(
          function () {
            function e() {
              return (e = l(
                o().mark(function e() {
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "http://localhost:3003/sofalight/backend/api/getLoggedIn",
                              { credentials: "include" }
                            )
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                if (
                                  (console.log(e),
                                  "Not Logged in" === e.user ||
                                    "Couldn't get user data" === e.user)
                                )
                                  return (
                                    console.log(e, "not logged in"),
                                    void (window.location = "/")
                                  );
                                document.getElementById(
                                  "preloaderScreenEditProduct"
                                ).style.display = "none";
                              })
                              .catch(function (e) {
                                console.log("error");
                              })
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            (function () {
              e.apply(this, arguments);
            })();
          },
          [e]
        );
        var n = JSON.parse(localStorage.getItem("product_edit")),
          r = f((0, t.useState)(n.images), 2),
          a = r[0],
          i = r[1],
          s = f((0, t.useState)(n.productInfo.productName), 2),
          c = s[0],
          u = s[1],
          d = f((0, t.useState)(n.productInfo.productSubText), 2),
          p = d[0],
          h = d[1],
          v = f((0, t.useState)(n.productInfo.productCategory), 2),
          g = v[0],
          y = v[1],
          b = f((0, t.useState)(n.productInfo.productPrice), 2),
          w = b[0],
          x = b[1],
          N = f((0, t.useState)(n.productInfo.productDiscount), 2),
          E = N[0],
          k = N[1],
          S = f((0, t.useState)(n.productInfo.productStatus), 2),
          C = S[0],
          _ = S[1],
          T = f((0, t.useState)(n.productInfo.productDescription), 2),
          j = T[0],
          O = T[1],
          P = f((0, t.useState)(0), 2),
          R = P[0],
          L = P[1],
          I = (0, t.useRef)(),
          z = (0, t.useRef)(),
          F = (0, t.useRef)(),
          D = (0, tt.jsxs)(ci, {
            children: [
              (0, tt.jsxs)(fi, {
                closeButton: !0,
                children: [
                  (0, tt.jsx)("svg", {
                    className: "rounded me-2",
                    width: "20",
                    height: "20",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMidYMid slice",
                    focusable: "false",
                    role: "img",
                    children: (0, tt.jsx)("rect", {
                      width: "100%",
                      height: "100%",
                      fill: "green",
                    }),
                  }),
                  (0, tt.jsx)("div", {
                    className: "fw-bold me-auto",
                    children: "Product Update Status",
                  }),
                  (0, tt.jsx)("small", { children: "Now" }),
                ],
              }),
              (0, tt.jsx)(ui, { children: "Product updated successfully." }),
            ],
          }),
          M = (0, tt.jsxs)(ci, {
            children: [
              (0, tt.jsxs)(fi, {
                closeButton: !0,
                children: [
                  (0, tt.jsx)("svg", {
                    className: "rounded me-2",
                    width: "20",
                    height: "20",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMidYMid slice",
                    focusable: "false",
                    role: "img",
                    children: (0, tt.jsx)("rect", {
                      width: "100%",
                      height: "100%",
                      fill: "red",
                    }),
                  }),
                  (0, tt.jsx)("div", {
                    className: "fw-bold me-auto",
                    children: "Product Update Status",
                  }),
                  (0, tt.jsx)("small", { children: "Now" }),
                ],
              }),
              (0, tt.jsx)(ui, {
                children:
                  "Product not updated. Refresh the page and try again or contact support if the problem persists.",
              }),
            ],
          }),
          A = (0, tt.jsxs)(ci, {
            children: [
              (0, tt.jsxs)(fi, {
                closeButton: !0,
                children: [
                  (0, tt.jsx)("svg", {
                    className: "rounded me-2",
                    width: "20",
                    height: "20",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMidYMid slice",
                    focusable: "false",
                    role: "img",
                    children: (0, tt.jsx)("rect", {
                      width: "100%",
                      height: "100%",
                      fill: "red",
                    }),
                  }),
                  (0, tt.jsx)("div", {
                    className: "fw-bold me-auto",
                    children: "Product Update Status",
                  }),
                  (0, tt.jsx)("small", { children: "Now" }),
                ],
              }),
              (0, tt.jsx)(ui, {
                children:
                  "Some of products information are empty and you need to upload at least one image",
              }),
            ],
          }),
          B = (0, t.useRef)(),
          U = (0, t.useRef)();
        return (
          (0, t.useEffect)(
            function () {
              (B.current = window.cloudinary),
                (U.current = B.current.createUploadWidget(
                  { cloudName: "dyovmrkfu", uploadPreset: "bhvm3nzv" },
                  function (e, t) {
                    !e &&
                      t &&
                      "success" === t.event &&
                      i(
                        [].concat(m(a), [
                          [
                            t.info.original_filename,
                            t.info.secure_url,
                            t.info.asset_id,
                          ],
                        ])
                      );
                  }
                ));
            },
            [a]
          ),
          (0, tt.jsxs)(tt.Fragment, {
            children: [
              (0, tt.jsx)("div", {
                id: "preloaderScreenEditProduct",
                children: (0, tt.jsx)("div", {
                  className: "loader",
                  children: (0, tt.jsx)("div", { className: "inner-loader" }),
                }),
              }),
              (0, tt.jsxs)("div", {
                className: "sofa_light_dashboard_furniturestore_AddProduct",
                children: [
                  (0, tt.jsxs)(tt.Fragment, {
                    children: [
                      (0, tt.jsx)(un, {
                        style: { display: "none" },
                        id: "successbuttonIdEdit",
                        onClick: function () {
                          return L(D);
                        },
                        children: "Send a toast",
                      }),
                      (0, tt.jsx)(pi, {
                        ref: I,
                        push: R,
                        placement: "top-end",
                      }),
                      (0, tt.jsx)(un, {
                        style: { display: "none" },
                        id: "failurebuttonIdEdit",
                        onClick: function () {
                          return L(M);
                        },
                        children: "Send a toast",
                      }),
                      (0, tt.jsx)(pi, {
                        ref: z,
                        push: R,
                        placement: "top-end",
                      }),
                      (0, tt.jsx)(un, {
                        style: { display: "none" },
                        id: "emptyerrorbuttonIdEdit",
                        onClick: function () {
                          return L(A);
                        },
                        children: "Send a toast",
                      }),
                      (0, tt.jsx)(pi, {
                        ref: F,
                        push: R,
                        placement: "top-end",
                      }),
                    ],
                  }),
                  (0, tt.jsx)(xi, { title: "About Product (Edit)" }),
                  (0, tt.jsx)(Ni, { title: "Product Name:" }),
                  (0, tt.jsx)(Ei, {
                    typ: "edit",
                    initVal: c,
                    keepSync: function (e) {
                      return u(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_textfield_product_name",
                  }),
                  (0, tt.jsx)(Ni, { title: "Brand:" }),
                  (0, tt.jsx)(Ei, {
                    typ: "edit",
                    initVal: p,
                    keepSync: function (e) {
                      return h(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_textfield_sub_text",
                  }),
                  (0, tt.jsx)(Ni, { title: "Category:" }),
                  (0, tt.jsx)(ji, {
                    typ: "edit",
                    initVal: g,
                    keepSync: function (e) {
                      return y(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_textfield_product_category",
                  }),
                  (0, tt.jsx)(Ni, { title: "Price:" }),
                  (0, tt.jsx)(Ci, {
                    typ: "edit",
                    initVal: w,
                    keepSync: function (e) {
                      return x(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_custom_text_field_1",
                  }),
                  (0, tt.jsx)(Ni, { title: "Discount:" }),
                  (0, tt.jsx)(Ci, {
                    typ: "edit",
                    initVal: E,
                    keepSync: function (e) {
                      return k(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_custom_text_field_2",
                  }),
                  (0, tt.jsx)(Ni, { title: "Status:" }),
                  (0, tt.jsx)(Si, {
                    keepSync: function (e) {
                      return _(e);
                    },
                    val1: "Published",
                    val2: "Draft",
                  }),
                  (0, tt.jsx)(Ni, { title: "Product Description:" }),
                  (0, tt.jsx)(ki, {
                    typ: "edit",
                    initVal: j,
                    keepSync: function (e) {
                      return O(e);
                    },
                    id: "sofa_light_dashboard_furniturestore_components_textarea_1",
                  }),
                  (0, tt.jsx)(xi, {
                    title: "Product Images (".concat(4 - a.length, ")"),
                  }),
                  (0, tt.jsxs)("div", {
                    onClick: function () {
                      a.length >= 4 || U.current.open();
                    },
                    id: "sofa_light_dashboard_furniturestore_components_imageUpload_Id",
                    className:
                      "sofa_light_dashboard_furniturestore_components_imageUpload",
                    children: [
                      (0, tt.jsx)("img", { src: Oi, alt: "upload" }),
                      (0, tt.jsxs)("p", {
                        children: [
                          (0, tt.jsx)("span", { children: "Click and Browse" }),
                          " to Choose a File",
                        ],
                      }),
                    ],
                  }),
                  (0, tt.jsx)("div", {
                    id: "sofa_light_dashboard_furniturestore_components_product_images_div",
                    children: a.map(function (e, t) {
                      return (0, tt.jsx)(
                        Ti,
                        {
                          clickedHandler: function (t) {
                            (a = a.filter(function (t) {
                              return t[2] !== e[2];
                            })),
                              i(a);
                          },
                          img: e[1],
                          title: e[0],
                        },
                        t
                      );
                    }),
                  }),
                  (0, tt.jsx)(zi, {
                    handleSave: (function () {
                      var e = l(
                        o().mark(function e(t) {
                          var r, l;
                          return o().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    "" !== c &&
                                    "" !== p &&
                                    "" !== g &&
                                    "" !== w &&
                                    "" !== E &&
                                    "" !== C &&
                                    "" !== j &&
                                    0 !== a.length
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  return (
                                    document
                                      .getElementById("emptyerrorbuttonIdEdit")
                                      .click(),
                                    e.abrupt("return")
                                  );
                                case 3:
                                  return (
                                    (r = {
                                      productName: c,
                                      productSubText: p,
                                      productCategory: g,
                                      productPrice: w,
                                      productDiscount: E,
                                      productStatus: C,
                                      productDescription: j,
                                    }),
                                    (t.target.children[0].style.display =
                                      "block"),
                                    t.target.setAttribute("disabled", "true"),
                                    (e.next = 8),
                                    Di(n._id, a, r)
                                  );
                                case 8:
                                  (l = e.sent),
                                    console.log("save status", l),
                                    "updated" === l
                                      ? (i([]),
                                        (t.target.children[0].style.display =
                                          "none"),
                                        document
                                          .getElementById("successbuttonIdEdit")
                                          .click(),
                                        t.target.removeAttribute("disabled"))
                                      : document
                                          .getElementById("failurebuttonIdEdit")
                                          .click();
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var Ai = n.p + "static/media/cart.92ef1eb8f6760643f59e59cdee8425e2.svg";
      var Bi = function (e) {
        for (
          var t = m(String(e)).reverse(), n = [], r = 0, a = r + 3, o = 0;
          o < t.length;

        )
          n.push(t.slice(r, a).reverse()), (a = (r = a) + 3), o++;
        var i = (n = n.filter(function (e) {
            return e.length >= 1;
          })).reverse(),
          l = "";
        return (
          i.forEach(function (e, t) {
            var n = t === i.length - 1 ? "" : ",";
            l += e.join("") + n;
          }),
          l
        );
      };
      var Ui = function (e) {
        var n = e.role,
          r = JSON.parse(localStorage.getItem("product_preview")),
          a = f((0, t.useState)("Add To Cart"), 2),
          i = a[0],
          s = a[1],
          c = f((0, t.useState)(1), 2),
          u = c[0],
          d = c[1],
          p = f((0, t.useState)(r.images[0][1]), 2),
          m = p[0],
          h = p[1],
          v =
            Number(r.productInfo.productPrice) +
            Number(r.productInfo.productPrice) *
              (Number(r.productInfo.productDiscount) / 100);
        return (
          (0, t.useEffect)(function () {
            window.addEventListener("resize", function () {
              window.innerWidth > 1e3 &&
                ((document.querySelector(
                  ".sofa_light_dashboard_furniturestore_components_productpreview"
                ).style.flexDirection = "row"),
                (document.querySelector(
                  ".sofa_light_dashboard_furniturestore_components_productpreview_imagepreview"
                ).style.width = "60%"),
                (document.querySelector(
                  ".sofa_light_dashboard_furniturestore_components_productpreview_description"
                ).style.width = "40%")),
                window.innerWidth < 1e3 &&
                  ((document.querySelector(
                    ".sofa_light_dashboard_furniturestore_components_productpreview"
                  ).style.flexDirection = "column"),
                  (document.querySelector(
                    ".sofa_light_dashboard_furniturestore_components_productpreview_imagepreview"
                  ).style.width = "90%"),
                  (document.querySelector(
                    ".sofa_light_dashboard_furniturestore_components_productpreview_description"
                  ).style.width = "90%"));
            });
          }),
          (0, tt.jsxs)("div", {
            className:
              "sofa_light_dashboard_furniturestore_components_productpreview",
            children: [
              (0, tt.jsxs)("div", {
                className:
                  "sofa_light_dashboard_furniturestore_components_productpreview_imagepreview",
                children: [
                  (0, tt.jsx)("div", {
                    className: "imagePreview",
                    children: (0, tt.jsx)("img", { src: m, alt: "preview" }),
                  }),
                  (0, tt.jsx)("div", {
                    className: "thumbnails",
                    children: r.images.map(function (e, t) {
                      return (0, tt.jsx)(
                        "div",
                        {
                          onClick: function (t) {
                            return h(e[1]);
                          },
                          children: (0, tt.jsx)("img", {
                            src: e[1],
                            alt: "preview",
                          }),
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
              (0, tt.jsxs)("div", {
                className:
                  "sofa_light_dashboard_furniturestore_components_productpreview_description",
                children: [
                  (0, tt.jsx)("h1", {
                    className: "productTitle",
                    children: r.productInfo.productName,
                  }),
                  (0, tt.jsxs)("h6", {
                    className: "productBrand",
                    children: [
                      (0, tt.jsx)("span", { children: "Brand : " }),
                      (0, tt.jsx)("span", {
                        children: r.productInfo.productMetaTitle,
                      }),
                    ],
                  }),
                  (0, tt.jsxs)("h4", {
                    className: "productPrice",
                    children: [Bi(r.productInfo.productPrice), " RWF"],
                  }),
                  (0, tt.jsxs)("h5", {
                    className: "productOriginalPrice",
                    children: [
                      (0, tt.jsxs)("span", {
                        children: [Bi(Math.floor(v)), " RWF"],
                      }),
                      " ",
                      (0, tt.jsx)("span", { children: "Before Discount" }),
                    ],
                  }),
                  (0, tt.jsx)("p", {
                    className: "productDetails",
                    children: r.productInfo.productDescription,
                  }),
                  (0, tt.jsxs)("p", {
                    className: "productStatus",
                    children: [
                      (0, tt.jsx)("span", { children: "Available: " }),
                      (0, tt.jsx)("span", { children: "In Stock" }),
                    ],
                  }),
                  (0, tt.jsxs)("p", {
                    className: "productCategory",
                    children: [
                      (0, tt.jsx)("span", { children: "Category: " }),
                      (0, tt.jsx)("span", {
                        children: r.productInfo.productCategory,
                      }),
                    ],
                  }),
                  (0, tt.jsxs)("div", {
                    className: "admin" === n ? "hide" : "productQuantity",
                    children: [
                      (0, tt.jsx)("span", { children: "Quantity: " }),
                      (0, tt.jsxs)("div", {
                        children: [
                          (0, tt.jsx)("button", {
                            onClick: function (e) {
                              return d(u > 1 ? --u : u);
                            },
                            children: "-",
                          }),
                          (0, tt.jsx)("span", { children: u }),
                          (0, tt.jsx)("button", {
                            onClick: function (e) {
                              return d(++u);
                            },
                            children: "+",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, tt.jsxs)("div", {
                    className: "admin" === n ? "hide" : "productActions",
                    children: [
                      (0, tt.jsx)("button", { children: "Order Now." }),
                      (0, tt.jsxs)("button", {
                        onClick: (function () {
                          var e = l(
                            o().mark(function e(t) {
                              var n, a, i, l, c, d, f, p;
                              return o().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (!localStorage.getItem("cart_items")) {
                                        e.next = 20;
                                        break;
                                      }
                                      if (
                                        ((n = JSON.parse(
                                          localStorage.getItem("cart_items")
                                        )),
                                        (a = ""),
                                        n.forEach(function (e) {
                                          e.item_id === r._id &&
                                            (a = "found item");
                                        }),
                                        "found item" !== a)
                                      ) {
                                        e.next = 11;
                                        break;
                                      }
                                      return (
                                        (n = n.filter(function (e) {
                                          return e.item_id !== r._id;
                                        })),
                                        (i = JSON.stringify(n)),
                                        localStorage.setItem("cart_items", i),
                                        s("Add To Cart."),
                                        t.target.removeAttribute("disabled"),
                                        e.abrupt("return")
                                      );
                                    case 11:
                                      return (
                                        (l = {
                                          item_img: r.images[0][1],
                                          item_id: r._id,
                                          item_name: r.productInfo.productName,
                                          item_price:
                                            r.productInfo.productPrice,
                                          item_quantity: u,
                                        }),
                                        n.push(l),
                                        (c = JSON.stringify(n)),
                                        localStorage.setItem("cart_items", c),
                                        s("Item Added."),
                                        t.target.removeAttribute("disabled"),
                                        e.abrupt("return")
                                      );
                                    case 20:
                                      (d = {
                                        item_img: r.images[0][1],
                                        item_id: r._id,
                                        item_name: r.productInfo.productName,
                                        item_price: r.productInfo.productPrice,
                                        item_quantity: u,
                                      }),
                                        (f = []).push(d),
                                        (p = JSON.stringify(f)),
                                        localStorage.setItem("cart_items", p),
                                        s("Item Added."),
                                        t.target.removeAttribute("disabled");
                                    case 27:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                        children: [
                          (0, tt.jsx)("img", { src: Ai, alt: "cart" }),
                          i,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      var Hi = function (e) {
        var n = "check";
        return (
          (0, t.useEffect)(
            function () {
              function e() {
                return (e = l(
                  o().mark(function e() {
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch(
                                "http://localhost:3003/sofalight/backend/api/getLoggedIn",
                                { credentials: "include" }
                              )
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (e) {
                                  if (
                                    (console.log(e),
                                    "Not Logged in" === e.user ||
                                      "Couldn't get user data" === e.user)
                                  )
                                    return (
                                      console.log(e, "not logged in"),
                                      void (window.location = "/")
                                    );
                                  document.getElementById(
                                    "preloaderScreenProductDetails"
                                  ).style.display = "none";
                                })
                                .catch(function (e) {
                                  console.log("error");
                                })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              (function () {
                e.apply(this, arguments);
              })();
            },
            [n]
          ),
          (0, tt.jsxs)(tt.Fragment, {
            children: [
              (0, tt.jsx)("div", {
                id: "preloaderScreenProductDetails",
                children: (0, tt.jsx)("div", {
                  className: "loader",
                  children: (0, tt.jsx)("div", { className: "inner-loader" }),
                }),
              }),
              (0, tt.jsx)("div", {
                children: (0, tt.jsx)(Ui, { role: e.role }),
              }),
            ],
          })
        );
      };
      var Vi = function () {
          var e = "check";
          (0, t.useEffect)(
            function () {
              function e() {
                return (e = l(
                  o().mark(function e() {
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch(
                                "http://localhost:3003/sofalight/backend/api/getLoggedIn",
                                { credentials: "include" }
                              )
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (e) {
                                  if (
                                    "Not Logged in" === e.user ||
                                    "Couldn't get user data" === e.user
                                  )
                                    return (
                                      console.log(e, "not logged in"),
                                      void (window.location = "/")
                                    );
                                  document.getElementById(
                                    "preloaderScreenOrdersProduct"
                                  ).style.display = "none";
                                })
                                .catch(function (e) {
                                  console.log("error");
                                })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              (function () {
                e.apply(this, arguments);
              })();
            },
            [e]
          );
          var n = f((0, t.useState)([]), 2),
            r = n[0],
            a = n[1];
          return (
            (0, t.useEffect)(
              function () {
                function e() {
                  return (e = l(
                    o().mark(function e() {
                      var t;
                      return o().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                fetch(
                                  "http://localhost:3003/sofalight/backend/api/products/order",
                                  { credentials: "include" }
                                )
                                  .then(function (e) {
                                    return e.json();
                                  })
                                  .then(function (e) {
                                    return e;
                                  })
                                  .catch(function (e) {
                                    console.log(e);
                                  })
                              );
                            case 2:
                              (t = e.sent), a(t);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              ["get"]
            ),
            (0, tt.jsxs)(tt.Fragment, {
              children: [
                (0, tt.jsx)("div", {
                  id: "preloaderScreenOrdersProduct",
                  children: (0, tt.jsx)("div", {
                    className: "loader",
                    children: (0, tt.jsx)("div", { className: "inner-loader" }),
                  }),
                }),
                (0, tt.jsx)("button", {
                  className: "deleteOrdersButton",
                  onClick: (function () {
                    var e = l(
                      o().mark(function e(t) {
                        var n, r;
                        return o().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  0 !==
                                  (n =
                                    document.querySelectorAll(
                                      ".activeToDelete"
                                    )).length
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  alert("Select at least one order to delete"),
                                  e.abrupt("return")
                                );
                              case 4:
                                return (
                                  (r = []),
                                  n.forEach(function (e, t) {
                                    var a = {
                                      id: n[t].getAttribute("orderid"),
                                      name: n[t].getAttribute("productname"),
                                      price: n[t].getAttribute("price"),
                                      quantity: n[t].getAttribute("quantity"),
                                    };
                                    r.push(a);
                                  }),
                                  (e.next = 8),
                                  fetch(
                                    "http://localhost:3003/sofalight/backend/api/products/orders/deleteOne",
                                    {
                                      method: "DELETE",
                                      credentials: "include",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(r),
                                    }
                                  )
                                    .then(function (e) {
                                      return e.json();
                                    })
                                    .then(function (e) {
                                      alert("deleted successfully"),
                                        window.location.reload();
                                    })
                                    .catch(function (e) {
                                      console.log(e.message);
                                    })
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  children: "Delete Orders",
                }),
                (0, tt.jsx)("div", {
                  className:
                    "sofa_light_dashboard_furniturestore_components_carttable",
                  children: (0, tt.jsxs)("table", {
                    children: [
                      (0, tt.jsx)("thead", {
                        children: (0, tt.jsxs)("tr", {
                          children: [
                            (0, tt.jsx)("th", {
                              style: { paddingLeft: "35px" },
                              name: "product",
                              children: "Product Name",
                            }),
                            (0, tt.jsx)("th", {
                              name: "price",
                              children: "Price",
                            }),
                            (0, tt.jsx)("th", {
                              name: "quantity",
                              children: "Quantity",
                            }),
                            (0, tt.jsx)("th", {
                              name: "total",
                              children: "Total",
                            }),
                            (0, tt.jsx)("th", {
                              name: "customer",
                              children: "Customer Name",
                            }),
                            (0, tt.jsx)("th", {
                              name: "phone",
                              children: "Customer Phone",
                            }),
                            (0, tt.jsx)("th", {
                              name: "date",
                              children: "Order Date",
                            }),
                          ],
                        }),
                      }),
                      (0, tt.jsx)("tbody", {
                        children: r.map(function (e, t) {
                          return (0, tt.jsxs)(
                            "tr",
                            {
                              id: "ordertrId".concat(t),
                              onClick: function (e) {
                                document
                                  .getElementById("ordertrId".concat(t))
                                  .classList.toggle("activeToDelete");
                              },
                              orderid: e[7],
                              productname: e[1],
                              price: e[2],
                              quantity: e[3],
                              children: [
                                (0, tt.jsxs)("td", {
                                  htmlFor: "product",
                                  children: [
                                    (0, tt.jsx)("img", {
                                      className: "thumbnail",
                                      src: e[0],
                                      alt: "thumbnail",
                                    }),
                                    (0, tt.jsx)("div", {
                                      className: "thumbnailDescription",
                                      children: (0, tt.jsx)("div", {
                                        children: (0, tt.jsx)("p", {
                                          style: { marginTop: "40px" },
                                          children: e[1],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, tt.jsxs)("td", {
                                  htmlFor: "price",
                                  className: "money",
                                  children: [rt(e[2]), " RWF"],
                                }),
                                (0, tt.jsx)("td", {
                                  htmlFor: "quantity",
                                  className: "money",
                                  children: e[3],
                                }),
                                (0, tt.jsxs)("td", {
                                  htmlFor: "total",
                                  className: "money",
                                  children: [rt(e[2] * e[3]), " RWF"],
                                }),
                                (0, tt.jsx)("td", {
                                  htmlFor: "customer",
                                  className: "money",
                                  children: e[4],
                                }),
                                (0, tt.jsx)("td", {
                                  htmlFor: "phone",
                                  className: "money",
                                  children: e[5],
                                }),
                                (0, tt.jsx)("td", {
                                  htmlFor: "date",
                                  className: "money",
                                  children: e[6],
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        Wi = (function (e) {
          w(n, e);
          var t = k(n);
          function n(e) {
            var r;
            return (
              h(this, n), ((r = t.call(this, e)).state = { hasError: !1 }), r
            );
          }
          return (
            y(
              n,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.log(e, t.componentStack);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.hasError
                      ? this.props.fallback
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { hasError: !0 };
                  },
                },
              ]
            ),
            n
          );
        })(t.Component);
      var $i = function (e) {
        return (0, tt.jsx)("div", {
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
          children: (0, tt.jsx)("p", {
            style: { fontSize: "2em", fontWeight: "bolder" },
            children: e.message,
          }),
        });
      };
      function Qi(e, t) {
        return qi.apply(this, arguments);
      }
      function qi() {
        return (qi = l(
          o().mark(function e(t, n) {
            var r, a;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = "not logged in"),
                      (a = { email: t, password: n }),
                      (e.next = 4),
                      fetch(
                        "http://localhost:3003/sofalight/backend/api/login",
                        {
                          method: "POST",
                          credentials: "include",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(a),
                        }
                      )
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          if (!e.user) throw new Error("not logged in");
                          r = "logged in";
                        })
                        .catch(function (e) {
                          console.log(e.message);
                        })
                    );
                  case 4:
                    return e.abrupt("return", r);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Ki = function () {
        var e = f((0, t.useState)(""), 2),
          n = e[0],
          r = e[1],
          a = f((0, t.useState)(""), 2),
          i = a[0],
          s = a[1],
          c = "check";
        return (
          (0, t.useEffect)(
            function () {
              function e() {
                return (e = l(
                  o().mark(function e() {
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch(
                                "http://localhost:3003/sofalight/backend/api/getLoggedIn",
                                { credentials: "include" }
                              )
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (e) {
                                  console.log(e),
                                    "Not Logged in" !== e.user &&
                                    "Couldn't get user data" !== e.user
                                      ? (sessionStorage.setItem(
                                          "email",
                                          e.data.email
                                        ),
                                        document
                                          .getElementById(
                                            "moveToAdminDashboard"
                                          )
                                          .click())
                                      : console.log(e, "not logged in");
                                })
                                .catch(function (e) {
                                  console.log("error");
                                })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              (function () {
                e.apply(this, arguments);
              })();
            },
            [c]
          ),
          (0, tt.jsx)("div", {
            id: "adminAppSigin",
            children: (0, tt.jsxs)("div", {
              className: "signin",
              children: [
                (0, tt.jsx)("h1", { children: "SofaLight Business" }),
                (0, tt.jsxs)("div", {
                  className: "signin_form",
                  children: [
                    (0, tt.jsx)("div", {
                      className: "signin_title",
                      children: (0, tt.jsx)("p", {
                        children: "Sign in SofaLight",
                      }),
                    }),
                    (0, tt.jsx)("label", {
                      htmlFor: "email",
                      children: "Email",
                    }),
                    (0, tt.jsx)("input", {
                      type: "email",
                      value: n,
                      onChange: function (e) {
                        return r(e.target.value);
                      },
                    }),
                    (0, tt.jsx)("label", {
                      htmlFor: "email",
                      children: "Password",
                    }),
                    (0, tt.jsx)("input", {
                      type: "password",
                      value: i,
                      onChange: function (e) {
                        return s(e.target.value);
                      },
                    }),
                    (0, tt.jsx)("div", {
                      className: "signinbutton",
                      children: (0, tt.jsx)("button", {
                        onClick: (function () {
                          var e = l(
                            o().mark(function e(t) {
                              return o().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        t.target.setAttribute(
                                          "disabled",
                                          "true"
                                        ),
                                        (t.target.innerHTML = "Sign in ..."),
                                        (e.next = 4),
                                        Qi(n, i)
                                      );
                                    case 4:
                                      "logged in" === e.sent
                                        ? (console.log("user logged in"),
                                          document
                                            .getElementById(
                                              "moveToAdminDashboard"
                                            )
                                            .click())
                                        : (console.log("user not logged in"),
                                          t.target.removeAttribute("disabled"),
                                          (t.target.innerHTML =
                                            "Sign in failed."),
                                          setTimeout(function () {
                                            t.target.innerHTML = "Sign in.";
                                          }, 5e3));
                                    case 6:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                        children: "Sign In",
                      }),
                    }),
                  ],
                }),
                (0, tt.jsx)(qe, {
                  id: "moveToAdminDashboard",
                  to: "/sofaadmin/",
                }),
              ],
            }),
          })
        );
      };
      var Yi = function () {
        var e = f((0, t.useState)(""), 2),
          n = e[0],
          r = e[1],
          a = f((0, t.useState)(""), 2),
          i = a[0],
          s = a[1],
          c = "check";
        return (
          (0, t.useEffect)(
            function () {
              function e() {
                return (e = l(
                  o().mark(function e() {
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch(
                                "http://localhost:3003/sofalight/backend/api/getLoggedIn",
                                { credentials: "include" }
                              )
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (e) {
                                  if (
                                    (console.log(e),
                                    "Not Logged in" === e.user ||
                                      "Couldn't get user data" === e.user)
                                  )
                                    return (
                                      console.log(e, "not logged in"),
                                      void (window.location = "/")
                                    );
                                  document.getElementById(
                                    "preloaderScreenSettings"
                                  ).style.display = "none";
                                })
                                .catch(function (e) {
                                  console.log("error");
                                })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              (function () {
                e.apply(this, arguments);
              })();
            },
            [c]
          ),
          (0, tt.jsxs)(tt.Fragment, {
            children: [
              (0, tt.jsx)("div", {
                id: "preloaderScreenSettings",
                children: (0, tt.jsx)("div", {
                  className: "loader",
                  children: (0, tt.jsx)("div", { className: "inner-loader" }),
                }),
              }),
              (0, tt.jsx)("div", {
                className: "signin",
                children: (0, tt.jsxs)("div", {
                  className: "signin_form",
                  children: [
                    (0, tt.jsx)("div", {
                      className: "signin_title",
                      children: (0, tt.jsx)("p", {
                        children: "Change Password SofaLight",
                      }),
                    }),
                    (0, tt.jsx)("label", { children: "New Password" }),
                    (0, tt.jsx)("input", {
                      type: "password",
                      value: i,
                      onChange: function (e) {
                        return s(e.target.value);
                      },
                    }),
                    (0, tt.jsx)("label", { children: "Confirm New Password" }),
                    (0, tt.jsx)("input", {
                      type: "password",
                      value: n,
                      onChange: function (e) {
                        return r(e.target.value);
                      },
                    }),
                    (0, tt.jsx)("div", {
                      className: "signinbutton",
                      children: (0, tt.jsx)("button", {
                        onClick: (function () {
                          var e = l(
                            o().mark(function e(t) {
                              return o().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((t.target.innerHTML =
                                          "Changing Password ..."),
                                        i.toString().trim() ===
                                          n.toString().trim())
                                      ) {
                                        e.next = 5;
                                        break;
                                      }
                                      return (
                                        (t.target.innerHTML =
                                          "Passwords Don't match ..."),
                                        setTimeout(function () {
                                          t.target.innerHTML =
                                            "Change Password";
                                        }, 3e3),
                                        e.abrupt("return")
                                      );
                                    case 5:
                                      if (!(n.toString().trim().length < 6)) {
                                        e.next = 9;
                                        break;
                                      }
                                      return (
                                        (t.target.innerHTML =
                                          "Passwords Length Must Be More Than 6 ..."),
                                        setTimeout(function () {
                                          t.target.innerHTML =
                                            "Change Password";
                                        }, 3e3),
                                        e.abrupt("return")
                                      );
                                    case 9:
                                      return (
                                        (e.next = 11),
                                        fetch(
                                          "http://localhost:3003/sofalight/backend/api/changePassword",
                                          {
                                            method: "POST",
                                            credentials: "include",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              password: n,
                                            }),
                                          }
                                        )
                                          .then(function (e) {
                                            return e.json();
                                          })
                                          .then(function (e) {
                                            if (
                                              "You are not authorized for this action" ===
                                                e.user ||
                                              "Not Logged in" === e.user
                                            )
                                              return (
                                                (t.target.innerHTML =
                                                  "Password Not Changed."),
                                                void setTimeout(function () {
                                                  t.target.innerHTML =
                                                    "Change Password";
                                                }, 5e3)
                                              );
                                            (t.target.innerHTML =
                                              "Password Changed."),
                                              setTimeout(function () {
                                                t.target.innerHTML =
                                                  "Change Password";
                                              }, 5e3);
                                          })
                                          .catch(function (e) {
                                            return console.log(e);
                                          })
                                      );
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                        children: "Change Password",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var Gi = function () {
        var e = f((0, t.useState)(!1), 2),
          n = e[0],
          r = e[1];
        return (0, tt.jsx)(tt.Fragment, {
          children: (0, tt.jsxs)(Ve, {
            children: [
              (0, tt.jsx)(Fe, {
                children: (0, tt.jsx)(Ie, {
                  path: "/",
                  element: (0, tt.jsx)(Wi, {
                    fallback: (0, tt.jsx)($i, {
                      message:
                        "Can not connect to service. Please contact support. Thank you!",
                    }),
                    children: (0, tt.jsx)(Ki, {}),
                  }),
                }),
              }),
              (0, tt.jsxs)("div", {
                className: "dashboard",
                children: [
                  (0, tt.jsxs)("nav", {
                    className: "dashboard_navbar",
                    children: [
                      (0, tt.jsxs)("div", {
                        className: "dashboard_navbar_logo_menu_position",
                        children: [
                          (0, tt.jsx)("img", {
                            className: "dashboard_navbar_logo",
                            src: Ge,
                            alt: "logo",
                          }),
                          (0, tt.jsx)("div", {
                            className: "dashboard_navbar_menu_position",
                            children: (0, tt.jsx)("button", {
                              onClick: function (e) {
                                return r(!n);
                              },
                              className: "dashboard_navbar_menu_button",
                              children: (0, tt.jsx)("img", {
                                style: { width: "20px", height: "20px" },
                                src: Je,
                                alt: "menu",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, tt.jsx)("div", {
                        className: "dashboard_navbar_admin_profile",
                        children: (0, tt.jsxs)("div", {
                          className: "dashboard_navbar_admin_profile_menu",
                          children: [
                            (0, tt.jsx)("p", { children: "Welcome Admin!" }),
                            (0, tt.jsx)("img", {
                              className: "dashboard_navbar_caret",
                              src: Xe,
                              alt: "caretdown",
                            }),
                            (0, tt.jsxs)("div", {
                              className:
                                "dashboard_navbar_admin_profile_content",
                              children: [
                                (0, tt.jsx)(qe, {
                                  style: { textDecoration: "none" },
                                  to: "/sofaadmin/settings",
                                  children: (0, tt.jsxs)("p", {
                                    children: [
                                      (0, tt.jsx)("img", {
                                        className:
                                          "dashboard_navbar_admin_profile_img",
                                        src: Ze,
                                        alt: "gear",
                                      }),
                                      (0, tt.jsx)("span", {
                                        style: { color: "black" },
                                        children: "Settings",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, tt.jsxs)("button", {
                                  onClick: (function () {
                                    var e = l(
                                      o().mark(function e(t) {
                                        return o().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  fetch(
                                                    "http://localhost:3003/sofalight/backend/api/logout",
                                                    { credentials: "include" }
                                                  )
                                                    .then(function (e) {
                                                      return e.json();
                                                    })
                                                    .then(function (e) {
                                                      window.location = "/";
                                                    })
                                                    .catch(function (e) {
                                                      return console.log(e);
                                                    })
                                                );
                                              case 2:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                  children: [
                                    (0, tt.jsx)("img", {
                                      className:
                                        "dashboard_navbar_admin_profile_img",
                                      src: et,
                                      alt: "right from bracket",
                                    }),
                                    (0, tt.jsx)("span", {
                                      children: "Sign Out",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, tt.jsxs)("div", {
                    className: "dashboard_navbar_admin_sidebar_and_content",
                    children: [
                      (0, tt.jsxs)("aside", {
                        className: n
                          ? "dashboard_navbar_admin_sidebar dashboard_navbar_admin_sidebar_width"
                          : "dashboard_navbar_admin_sidebar",
                        children: [
                          (0, tt.jsx)("h1", { children: "APPLICATION" }),
                          (0, tt.jsx)("p", { children: "Furniture Store" }),
                          (0, tt.jsxs)("ul", {
                            children: [
                              (0, tt.jsx)(qe, {
                                to: "/sofaadmin/",
                                children: (0, tt.jsx)("li", {
                                  children: "Products",
                                }),
                              }),
                              (0, tt.jsx)(qe, {
                                to: "/sofaadmin/addproduct",
                                children: (0, tt.jsx)("li", {
                                  children: "Add Product",
                                }),
                              }),
                              (0, tt.jsx)(qe, {
                                to: "/sofaadmin/orders",
                                children: (0, tt.jsx)("li", {
                                  children: "Orders",
                                }),
                              }),
                            ],
                          }),
                          (0, tt.jsx)("h1", { children: "MANAGE" }),
                          (0, tt.jsx)("ul", {
                            children: (0, tt.jsx)(qe, {
                              to: "/sofaadmin/settings",
                              children: (0, tt.jsx)("li", {
                                children: "Settings",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, tt.jsx)("div", {
                        className: "dashboard_navbar_admin_content",
                        children: (0, tt.jsxs)(Fe, {
                          children: [
                            (0, tt.jsx)(Ie, {
                              path: "/sofaadmin/",
                              element: (0, tt.jsx)(Wi, {
                                fallback: (0, tt.jsx)($i, {
                                  message:
                                    "Can not connect to service. Please contact support. Thank you!",
                                }),
                                children: (0, tt.jsx)(ot, {}),
                              }),
                            }),
                            (0, tt.jsx)(Ie, {
                              path: "/sofaadmin/viewproducts",
                              element: (0, tt.jsx)(Wi, {
                                fallback: (0, tt.jsx)("p", {
                                  children: "Something went wrong",
                                }),
                                children: (0, tt.jsx)(ot, {}),
                              }),
                            }),
                            (0, tt.jsx)(Ie, {
                              path: "/sofaadmin/addproduct",
                              element: (0, tt.jsx)(Ii, {}),
                            }),
                            (0, tt.jsx)(Ie, {
                              path: "/sofaadmin/editproduct",
                              element: (0, tt.jsx)(Wi, {
                                fallback: (0, tt.jsx)($i, {
                                  message:
                                    "Click on an edit button of a product to edit product information.",
                                }),
                                children: (0, tt.jsx)(Mi, {}),
                              }),
                            }),
                            (0, tt.jsx)(Ie, {
                              path: "/sofaadmin/productdetails",
                              element: (0, tt.jsx)(Wi, {
                                fallback: (0, tt.jsx)($i, {
                                  message:
                                    "Click on an image of a product to view more product information.",
                                }),
                                children: (0, tt.jsx)(Hi, { role: "admin" }),
                              }),
                            }),
                            (0, tt.jsx)(Ie, {
                              path: "/sofaadmin/orders",
                              element: (0, tt.jsx)(Wi, {
                                fallback: (0, tt.jsx)($i, {
                                  message:
                                    "Can not connect to service. Please contact support. Thank you!",
                                }),
                                children: (0, tt.jsx)(Vi, {}),
                              }),
                            }),
                            (0, tt.jsx)(Ie, {
                              path: "/sofaadmin/settings",
                              element: (0, tt.jsx)(Wi, {
                                fallback: (0, tt.jsx)($i, {
                                  message:
                                    "Can not connect to service. Please contact support. Thank you!",
                                }),
                                children: (0, tt.jsx)(Yi, {}),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var Xi = function () {
          return (0, tt.jsx)("div", { children: (0, tt.jsx)(Gi, {}) });
        },
        Ji = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  o = t.getLCP,
                  i = t.getTTFB;
                n(e), r(e), a(e), o(e), i(e);
              });
        };
      r
        .createRoot(document.getElementById("root"))
        .render((0, tt.jsx)(t.StrictMode, { children: (0, tt.jsx)(Xi, {}) })),
        Ji();
    })();
})();
//# sourceMappingURL=main.f2fe48c1.js.map
