"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Toposort = require("toposort-class");
class FetchError extends Error {
  constructor(resp, body) {
    super(resp.statusText);
    this.name = "FetchError";
    this.resp = resp;
    this.status = resp.status;
    Object.assign(this, body);
  }
}
const l10n = {
  H5P: {
    advancedHelp: "Include this script on your website if you want dynamic sizing of the embedded content:",
    author: "Author",
    by: "by",
    cancelLabel: "Cancel",
    changes: "Changelog",
    close: "Close",
    confirmDialogBody: "Please confirm that you wish to proceed. This action is not reversible.",
    confirmDialogHeader: "Confirm action",
    confirmLabel: "Confirm",
    connectionLost: "Connection lost. Results will be stored and sent when you regain connection.",
    connectionReestablished: "Connection reestablished.",
    contentChanged: "This content has changed since you last used it.",
    contentCopied: "Content is copied to the clipboard",
    contentType: "Content Type",
    copyrightInformation: "Rights of use",
    copyrights: "Rights of use",
    copyrightsDescription: "View copyright information for this content.",
    disableFullscreen: "Disable fullscreen",
    download: "Download",
    downloadDescription: "Download this content as a H5P file.",
    embed: "Embed",
    embedDescription: "View the embed code for this content.",
    fullscreen: "Fullscreen",
    h5pDescription: "Visit H5P.org to check out more cool content.",
    hideAdvanced: "Hide advanced",
    license: "License",
    licenseC: "Copyright",
    licenseCC010: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
    licenseCC10: "1.0 Generic",
    licenseCC20: "2.0 Generic",
    licenseCC25: "2.5 Generic",
    licenseCC30: "3.0 Unported",
    licenseCC40: "4.0 International",
    licenseCCBY: "Attribution",
    licenseCCBYNC: "Attribution-NonCommercial",
    licenseCCBYNCND: "Attribution-NonCommercial-NoDerivs",
    licenseCCBYNCSA: "Attribution-NonCommercial-ShareAlike",
    licenseCCBYND: "Attribution-NoDerivs",
    licenseCCBYSA: "Attribution-ShareAlike",
    licenseExtras: "License Extras",
    licenseGPL: "General Public License",
    licensePD: "Public Domain",
    licensePDM: "Public Domain Mark",
    licenseU: "Undisclosed",
    licenseV1: "Version 1",
    licenseV2: "Version 2",
    licenseV3: "Version 3",
    noCopyrights: "No copyright information available for this content.",
    offlineDialogBody: "We were unable to send information about your completion of this task. Please check your internet connection.",
    offlineDialogHeader: "Your connection to the server was lost",
    offlineDialogRetryButtonLabel: "Retry now",
    offlineDialogRetryMessage: "Retrying in :num....",
    offlineSuccessfulSubmit: "Successfully submitted results.",
    resubmitScores: "Attempting to submit stored results.",
    reuse: "Reuse",
    reuseContent: "Reuse Content",
    reuseDescription: "Reuse this content.",
    showAdvanced: "Show advanced",
    showLess: "Show less",
    showMore: "Show more",
    size: "Size",
    source: "Source",
    startingOver: "You'll be starting over.",
    subLevel: "Sublevel",
    thumbnail: "Thumbnail",
    title: "Title",
    year: "Year"
  }
};
const frameScript = `/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/
(function(u, l) {
  var g, x, h = typeof l, y = u.document, C = u.location, E = u.jQuery, N = u.$, F = {}, q = [], A = "1.9.1", I = q.concat, j = q.push, B = q.slice, M = q.indexOf, $ = F.toString, R = F.hasOwnProperty, z = A.trim, n = function(e, t) {
    return new n.fn.init(e, t, x);
  }, ce = /[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source, re = /\\S+/g, Ce = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g, Se = /^(?:(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/, ee = /^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/, pe = /^[\\],:{}\\s]*$/, Be = /(?:^|:|,)(?:\\s*\\[)+/g, at = /\\\\(?:["\\\\\\/bfnrt]|u[\\da-fA-F]{4})/g, st = /"[^"\\\\\\r\\n]*"|true|false|null|-?(?:\\d+\\.|)\\d+(?:[eE][+-]?\\d+|)/g, xt = /^-ms-/, wt = /-([\\da-z])/gi, Ct = function(e, t) {
    return t.toUpperCase();
  }, Ne = function(e) {
    (y.addEventListener || e.type === "load" || y.readyState === "complete") && (lt(), n.ready());
  }, lt = function() {
    y.addEventListener ? (y.removeEventListener("DOMContentLoaded", Ne, !1), u.removeEventListener("load", Ne, !1)) : (y.detachEvent("onreadystatechange", Ne), u.detachEvent("onload", Ne));
  };
  n.fn = n.prototype = { jquery: A, constructor: n, init: function(e, t, i) {
    var r, o;
    if (!e)
      return this;
    if (typeof e == "string") {
      if (r = e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? [null, e, null] : Se.exec(e), !r || !r[1] && t)
        return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof n ? t[0] : t, n.merge(this, n.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), ee.test(r[1]) && n.isPlainObject(t))
          for (r in t)
            n.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      if (o = y.getElementById(r[2]), o && o.parentNode) {
        if (o.id !== r[2])
          return i.find(e);
        this.length = 1, this[0] = o;
      }
      return this.context = y, this.selector = e, this;
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : n.isFunction(e) ? i.ready(e) : (e.selector !== l && (this.selector = e.selector, this.context = e.context), n.makeArray(e, this));
  }, selector: "", length: 0, size: function() {
    return this.length;
  }, toArray: function() {
    return B.call(this);
  }, get: function(e) {
    return e == null ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
  }, pushStack: function(e) {
    var t = n.merge(this.constructor(), e);
    return t.prevObject = this, t.context = this.context, t;
  }, each: function(e, t) {
    return n.each(this, e, t);
  }, ready: function(e) {
    return n.ready.promise().done(e), this;
  }, slice: function() {
    return this.pushStack(B.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, eq: function(e) {
    var t = this.length, i = +e + (0 > e ? t : 0);
    return this.pushStack(i >= 0 && t > i ? [this[i]] : []);
  }, map: function(e) {
    return this.pushStack(n.map(this, function(t, i) {
      return e.call(t, i, t);
    }));
  }, end: function() {
    return this.prevObject || this.constructor(null);
  }, push: j, sort: [].sort, splice: [].splice }, n.fn.init.prototype = n.fn, n.extend = n.fn.extend = function() {
    var e, t, i, r, o, a, s = arguments[0] || {}, f = 1, b = arguments.length, w = !1;
    for (typeof s == "boolean" && (w = s, s = arguments[1] || {}, f = 2), typeof s == "object" || n.isFunction(s) || (s = {}), b === f && (s = this, --f); b > f; f++)
      if ((o = arguments[f]) != null)
        for (r in o)
          e = s[r], i = o[r], s !== i && (w && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[r] = n.extend(w, a, i)) : i !== l && (s[r] = i));
    return s;
  }, n.extend({ noConflict: function(e) {
    return u.$ === n && (u.$ = N), e && u.jQuery === n && (u.jQuery = E), n;
  }, isReady: !1, readyWait: 1, holdReady: function(e) {
    e ? n.readyWait++ : n.ready(!0);
  }, ready: function(e) {
    if (e === !0 ? !--n.readyWait : !n.isReady) {
      if (!y.body)
        return setTimeout(n.ready);
      n.isReady = !0, e !== !0 && --n.readyWait > 0 || (g.resolveWith(y, [n]), n.fn.trigger && n(y).trigger("ready").off("ready"));
    }
  }, isFunction: function(e) {
    return n.type(e) === "function";
  }, isArray: Array.isArray || function(e) {
    return n.type(e) === "array";
  }, isWindow: function(e) {
    return e != null && e == e.window;
  }, isNumeric: function(e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  }, type: function(e) {
    return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? F[$.call(e)] || "object" : typeof e;
  }, isPlainObject: function(e) {
    if (!e || n.type(e) !== "object" || e.nodeType || n.isWindow(e))
      return !1;
    try {
      if (e.constructor && !R.call(e, "constructor") && !R.call(e.constructor.prototype, "isPrototypeOf"))
        return !1;
    } catch (i) {
      return !1;
    }
    var t;
    for (t in e)
      ;
    return t === l || R.call(e, t);
  }, isEmptyObject: function(e) {
    var t;
    for (t in e)
      return !1;
    return !0;
  }, error: function(e) {
    throw Error(e);
  }, parseHTML: function(e, t, i) {
    if (!e || typeof e != "string")
      return null;
    typeof t == "boolean" && (i = t, t = !1), t = t || y;
    var r = ee.exec(e), o = !i && [];
    return r ? [t.createElement(r[1])] : (r = n.buildFragment([e], t, o), o && n(o).remove(), n.merge([], r.childNodes));
  }, parseJSON: function(e) {
    return u.JSON && u.JSON.parse ? u.JSON.parse(e) : e === null ? e : typeof e == "string" && (e = n.trim(e), e && pe.test(e.replace(at, "@").replace(st, "]").replace(Be, ""))) ? Function("return " + e)() : (n.error("Invalid JSON: " + e), l);
  }, parseXML: function(e) {
    var t, i;
    if (!e || typeof e != "string")
      return null;
    try {
      u.DOMParser ? (i = new DOMParser(), t = i.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e));
    } catch (r) {
      t = l;
    }
    return t && t.documentElement && !t.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + e), t;
  }, noop: function() {
  }, globalEval: function(e) {
    e && n.trim(e) && (u.execScript || function(t) {
      u.eval.call(u, t);
    })(e);
  }, camelCase: function(e) {
    return e.replace(xt, "ms-").replace(wt, Ct);
  }, nodeName: function(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }, each: function(e, t, i) {
    var r, o = 0, a = e.length, s = Q(e);
    if (i) {
      if (s)
        for (; a > o && (r = t.apply(e[o], i), r !== !1); o++)
          ;
      else
        for (o in e)
          if (r = t.apply(e[o], i), r === !1)
            break;
    } else if (s)
      for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++)
        ;
    else
      for (o in e)
        if (r = t.call(e[o], o, e[o]), r === !1)
          break;
    return e;
  }, trim: z && !z.call("\\uFEFF ") ? function(e) {
    return e == null ? "" : z.call(e);
  } : function(e) {
    return e == null ? "" : (e + "").replace(Ce, "");
  }, makeArray: function(e, t) {
    var i = t || [];
    return e != null && (Q(Object(e)) ? n.merge(i, typeof e == "string" ? [e] : e) : j.call(i, e)), i;
  }, inArray: function(e, t, i) {
    var r;
    if (t) {
      if (M)
        return M.call(t, e, i);
      for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
        if (i in t && t[i] === e)
          return i;
    }
    return -1;
  }, merge: function(e, t) {
    var i = t.length, r = e.length, o = 0;
    if (typeof i == "number")
      for (; i > o; o++)
        e[r++] = t[o];
    else
      for (; t[o] !== l; )
        e[r++] = t[o++];
    return e.length = r, e;
  }, grep: function(e, t, i) {
    var r, o = [], a = 0, s = e.length;
    for (i = !!i; s > a; a++)
      r = !!t(e[a], a), i !== r && o.push(e[a]);
    return o;
  }, map: function(e, t, i) {
    var r, o = 0, a = e.length, s = Q(e), f = [];
    if (s)
      for (; a > o; o++)
        r = t(e[o], o, i), r != null && (f[f.length] = r);
    else
      for (o in e)
        r = t(e[o], o, i), r != null && (f[f.length] = r);
    return I.apply([], f);
  }, guid: 1, proxy: function(e, t) {
    var i, r, o;
    return typeof t == "string" && (o = e[t], t = e, e = o), n.isFunction(e) ? (i = B.call(arguments, 2), r = function() {
      return e.apply(t || this, i.concat(B.call(arguments)));
    }, r.guid = e.guid = e.guid || n.guid++, r) : l;
  }, access: function(e, t, i, r, o, a, s) {
    var f = 0, b = e.length, w = i == null;
    if (n.type(i) === "object") {
      o = !0;
      for (f in i)
        n.access(e, t, f, i[f], !0, a, s);
    } else if (r !== l && (o = !0, n.isFunction(r) || (s = !0), w && (s ? (t.call(e, r), t = null) : (w = t, t = function(v, S, H) {
      return w.call(n(v), H);
    })), t))
      for (; b > f; f++)
        t(e[f], i, s ? r : r.call(e[f], f, t(e[f], i)));
    return o ? e : w ? t.call(e) : b ? t(e[0], i) : a;
  }, now: function() {
    return (/* @__PURE__ */ new Date()).getTime();
  } }), n.ready.promise = function(e) {
    if (!g)
      if (g = n.Deferred(), y.readyState === "complete")
        setTimeout(n.ready);
      else if (y.addEventListener)
        y.addEventListener("DOMContentLoaded", Ne, !1), u.addEventListener("load", Ne, !1);
      else {
        y.attachEvent("onreadystatechange", Ne), u.attachEvent("onload", Ne);
        var t = !1;
        try {
          t = u.frameElement == null && y.documentElement;
        } catch (i) {
        }
        t && t.doScroll && function i() {
          if (!n.isReady) {
            try {
              t.doScroll("left");
            } catch (r) {
              return setTimeout(i, 50);
            }
            lt(), n.ready();
          }
        }();
      }
    return g.promise(e);
  }, n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    F["[object " + t + "]"] = t.toLowerCase();
  });
  function Q(e) {
    var t = e.length, i = n.type(e);
    return n.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : i === "array" || i !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e);
  }
  x = n(y);
  var se = {};
  function Ae(e) {
    var t = se[e] = {};
    return n.each(e.match(re) || [], function(i, r) {
      t[r] = !0;
    }), t;
  }
  n.Callbacks = function(e) {
    e = typeof e == "string" ? se[e] || Ae(e) : n.extend({}, e);
    var t, i, r, o, a, s, f = [], b = !e.once && [], w = function(S) {
      for (i = e.memory && S, r = !0, a = s || 0, s = 0, o = f.length, t = !0; f && o > a; a++)
        if (f[a].apply(S[0], S[1]) === !1 && e.stopOnFalse) {
          i = !1;
          break;
        }
      t = !1, f && (b ? b.length && w(b.shift()) : i ? f = [] : v.disable());
    }, v = { add: function() {
      if (f) {
        var S = f.length;
        (function H(k) {
          n.each(k, function(W, V) {
            var Z = n.type(V);
            Z === "function" ? e.unique && v.has(V) || f.push(V) : V && V.length && Z !== "string" && H(V);
          });
        })(arguments), t ? o = f.length : i && (s = S, w(i));
      }
      return this;
    }, remove: function() {
      return f && n.each(arguments, function(S, H) {
        for (var k; (k = n.inArray(H, f, k)) > -1; )
          f.splice(k, 1), t && (o >= k && o--, a >= k && a--);
      }), this;
    }, has: function(S) {
      return S ? n.inArray(S, f) > -1 : !(!f || !f.length);
    }, empty: function() {
      return f = [], this;
    }, disable: function() {
      return f = b = i = l, this;
    }, disabled: function() {
      return !f;
    }, lock: function() {
      return b = l, i || v.disable(), this;
    }, locked: function() {
      return !b;
    }, fireWith: function(S, H) {
      return H = H || [], H = [S, H.slice ? H.slice() : H], !f || r && !b || (t ? b.push(H) : w(H)), this;
    }, fire: function() {
      return v.fireWith(this, arguments), this;
    }, fired: function() {
      return !!r;
    } };
    return v;
  }, n.extend({ Deferred: function(e) {
    var t = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], i = "pending", r = { state: function() {
      return i;
    }, always: function() {
      return o.done(arguments).fail(arguments), this;
    }, then: function() {
      var a = arguments;
      return n.Deferred(function(s) {
        n.each(t, function(f, b) {
          var w = b[0], v = n.isFunction(a[f]) && a[f];
          o[b[1]](function() {
            var S = v && v.apply(this, arguments);
            S && n.isFunction(S.promise) ? S.promise().done(s.resolve).fail(s.reject).progress(s.notify) : s[w + "With"](this === r ? s.promise() : this, v ? [S] : arguments);
          });
        }), a = null;
      }).promise();
    }, promise: function(a) {
      return a != null ? n.extend(a, r) : r;
    } }, o = {};
    return r.pipe = r.then, n.each(t, function(a, s) {
      var f = s[2], b = s[3];
      r[s[1]] = f.add, b && f.add(function() {
        i = b;
      }, t[1 ^ a][2].disable, t[2][2].lock), o[s[0]] = function() {
        return o[s[0] + "With"](this === o ? r : this, arguments), this;
      }, o[s[0] + "With"] = f.fireWith;
    }), r.promise(o), e && e.call(o, o), o;
  }, when: function(e) {
    var t = 0, i = B.call(arguments), r = i.length, o = r !== 1 || e && n.isFunction(e.promise) ? r : 0, a = o === 1 ? e : n.Deferred(), s = function(v, S, H) {
      return function(k) {
        S[v] = this, H[v] = arguments.length > 1 ? B.call(arguments) : k, H === f ? a.notifyWith(S, H) : --o || a.resolveWith(S, H);
      };
    }, f, b, w;
    if (r > 1)
      for (f = Array(r), b = Array(r), w = Array(r); r > t; t++)
        i[t] && n.isFunction(i[t].promise) ? i[t].promise().done(s(t, w, i)).fail(a.reject).progress(s(t, b, f)) : --o;
    return o || a.resolveWith(w, i), a.promise();
  } }), n.support = function() {
    var e, t, i, r, o, a, s, f, b, w, v = y.createElement("div");
    if (v.setAttribute("className", "t"), v.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = v.getElementsByTagName("*"), i = v.getElementsByTagName("a")[0], !t || !i || !t.length)
      return {};
    o = y.createElement("select"), s = o.appendChild(y.createElement("option")), r = v.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e = { getSetAttribute: v.className !== "t", leadingWhitespace: v.firstChild.nodeType === 3, tbody: !v.getElementsByTagName("tbody").length, htmlSerialize: !!v.getElementsByTagName("link").length, style: /top/.test(i.getAttribute("style")), hrefNormalized: i.getAttribute("href") === "/a", opacity: /^0.5/.test(i.style.opacity), cssFloat: !!i.style.cssFloat, checkOn: !!r.value, optSelected: s.selected, enctype: !!y.createElement("form").enctype, html5Clone: y.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", boxModel: y.compatMode === "CSS1Compat", deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !s.disabled;
    try {
      delete v.test;
    } catch (S) {
      e.deleteExpando = !1;
    }
    r = y.createElement("input"), r.setAttribute("value", ""), e.input = r.getAttribute("value") === "", r.value = "t", r.setAttribute("type", "radio"), e.radioValue = r.value === "t", r.setAttribute("checked", "t"), r.setAttribute("name", "t"), a = y.createDocumentFragment(), a.appendChild(r), e.appendChecked = r.checked, e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, v.attachEvent && (v.attachEvent("onclick", function() {
      e.noCloneEvent = !1;
    }), v.cloneNode(!0).click());
    for (w in { submit: !0, change: !0, focusin: !0 })
      v.setAttribute(f = "on" + w, "t"), e[w + "Bubbles"] = f in u || v.attributes[f].expando === !1;
    return v.style.backgroundClip = "content-box", v.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = v.style.backgroundClip === "content-box", n(function() {
      var S, H, k, W = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", V = y.getElementsByTagName("body")[0];
      V && (S = y.createElement("div"), S.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", V.appendChild(S).appendChild(v), v.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = v.getElementsByTagName("td"), k[0].style.cssText = "padding:0;margin:0;border:0;display:none", b = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", e.reliableHiddenOffsets = b && k[0].offsetHeight === 0, v.innerHTML = "", v.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = v.offsetWidth === 4, e.doesNotIncludeMarginInBodyOffset = V.offsetTop !== 1, u.getComputedStyle && (e.pixelPosition = (u.getComputedStyle(v, null) || {}).top !== "1%", e.boxSizingReliable = (u.getComputedStyle(v, null) || { width: "4px" }).width === "4px", H = v.appendChild(y.createElement("div")), H.style.cssText = v.style.cssText = W, H.style.marginRight = H.style.width = "0", v.style.width = "1px", e.reliableMarginRight = !parseFloat((u.getComputedStyle(H, null) || {}).marginRight)), typeof v.style.zoom !== h && (v.innerHTML = "", v.style.cssText = W + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = v.offsetWidth === 3, v.style.display = "block", v.innerHTML = "<div></div>", v.firstChild.style.width = "5px", e.shrinkWrapBlocks = v.offsetWidth !== 3, e.inlineBlockNeedsLayout && (V.style.zoom = 1)), V.removeChild(S), S = v = k = H = null);
    }), t = o = a = s = i = r = null, e;
  }();
  var ye = /(?:\\{[\\s\\S]*\\}|\\[[\\s\\S]*\\])$/, Wn = /([A-Z])/g;
  function Yt(e, t, i, r) {
    if (n.acceptData(e)) {
      var o, a, s = n.expando, f = typeof t == "string", b = e.nodeType, w = b ? n.cache : e, v = b ? e[s] : e[s] && s;
      if (v && w[v] && (r || w[v].data) || !f || i !== l)
        return v || (b ? e[s] = v = q.pop() || n.guid++ : v = s), w[v] || (w[v] = {}, b || (w[v].toJSON = n.noop)), (typeof t == "object" || typeof t == "function") && (r ? w[v] = n.extend(w[v], t) : w[v].data = n.extend(w[v].data, t)), o = w[v], r || (o.data || (o.data = {}), o = o.data), i !== l && (o[n.camelCase(t)] = i), f ? (a = o[t], a == null && (a = o[n.camelCase(t)])) : a = o, a;
    }
  }
  function Jt(e, t, i) {
    if (n.acceptData(e)) {
      var r, o, a, s = e.nodeType, f = s ? n.cache : e, b = s ? e[n.expando] : n.expando;
      if (f[b]) {
        if (t && (a = i ? f[b] : f[b].data)) {
          for (n.isArray(t) ? t = t.concat(n.map(t, n.camelCase)) : (t in a) ? t = [t] : (t = n.camelCase(t), t = t in a ? [t] : t.split(" ")), r = 0, o = t.length; o > r; r++)
            delete a[t[r]];
          if (!(i ? Tt : n.isEmptyObject)(a))
            return;
        }
        (i || (delete f[b].data, Tt(f[b]))) && (s ? n.cleanData([e], !0) : n.support.deleteExpando || f != f.window ? delete f[b] : f[b] = null);
      }
    }
  }
  n.extend({ cache: {}, expando: "jQuery" + (A + Math.random()).replace(/\\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(e) {
    return e = e.nodeType ? n.cache[e[n.expando]] : e[n.expando], !!e && !Tt(e);
  }, data: function(e, t, i) {
    return Yt(e, t, i);
  }, removeData: function(e, t) {
    return Jt(e, t);
  }, _data: function(e, t, i) {
    return Yt(e, t, i, !0);
  }, _removeData: function(e, t) {
    return Jt(e, t, !0);
  }, acceptData: function(e) {
    if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9)
      return !1;
    var t = e.nodeName && n.noData[e.nodeName.toLowerCase()];
    return !t || t !== !0 && e.getAttribute("classid") === t;
  } }), n.fn.extend({ data: function(e, t) {
    var i, r, o = this[0], a = 0, s = null;
    if (e === l) {
      if (this.length && (s = n.data(o), o.nodeType === 1 && !n._data(o, "parsedAttrs"))) {
        for (i = o.attributes; i.length > a; a++)
          r = i[a].name, r.indexOf("data-") || (r = n.camelCase(r.slice(5)), Gt(o, r, s[r]));
        n._data(o, "parsedAttrs", !0);
      }
      return s;
    }
    return typeof e == "object" ? this.each(function() {
      n.data(this, e);
    }) : n.access(this, function(f) {
      return f === l ? o ? Gt(o, e, n.data(o, e)) : null : (this.each(function() {
        n.data(this, e, f);
      }), l);
    }, null, t, arguments.length > 1, null, !0);
  }, removeData: function(e) {
    return this.each(function() {
      n.removeData(this, e);
    });
  } });
  function Gt(e, t, i) {
    if (i === l && e.nodeType === 1) {
      var r = "data-" + t.replace(Wn, "-$1").toLowerCase();
      if (i = e.getAttribute(r), typeof i == "string") {
        try {
          i = i === "true" ? !0 : i === "false" ? !1 : i === "null" ? null : +i + "" === i ? +i : ye.test(i) ? n.parseJSON(i) : i;
        } catch (o) {
        }
        n.data(e, t, i);
      } else
        i = l;
    }
    return i;
  }
  function Tt(e) {
    var t;
    for (t in e)
      if ((t !== "data" || !n.isEmptyObject(e[t])) && t !== "toJSON")
        return !1;
    return !0;
  }
  n.extend({ queue: function(e, t, i) {
    var r;
    return e ? (t = (t || "fx") + "queue", r = n._data(e, t), i && (!r || n.isArray(i) ? r = n._data(e, t, n.makeArray(i)) : r.push(i)), r || []) : l;
  }, dequeue: function(e, t) {
    t = t || "fx";
    var i = n.queue(e, t), r = i.length, o = i.shift(), a = n._queueHooks(e, t), s = function() {
      n.dequeue(e, t);
    };
    o === "inprogress" && (o = i.shift(), r--), a.cur = o, o && (t === "fx" && i.unshift("inprogress"), delete a.stop, o.call(e, s, a)), !r && a && a.empty.fire();
  }, _queueHooks: function(e, t) {
    var i = t + "queueHooks";
    return n._data(e, i) || n._data(e, i, { empty: n.Callbacks("once memory").add(function() {
      n._removeData(e, t + "queue"), n._removeData(e, i);
    }) });
  } }), n.fn.extend({ queue: function(e, t) {
    var i = 2;
    return typeof e != "string" && (t = e, e = "fx", i--), i > arguments.length ? n.queue(this[0], e) : t === l ? this : this.each(function() {
      var r = n.queue(this, e, t);
      n._queueHooks(this, e), e === "fx" && r[0] !== "inprogress" && n.dequeue(this, e);
    });
  }, dequeue: function(e) {
    return this.each(function() {
      n.dequeue(this, e);
    });
  }, delay: function(e, t) {
    return e = n.fx && n.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(i, r) {
      var o = setTimeout(i, e);
      r.stop = function() {
        clearTimeout(o);
      };
    });
  }, clearQueue: function(e) {
    return this.queue(e || "fx", []);
  }, promise: function(e, t) {
    var i, r = 1, o = n.Deferred(), a = this, s = this.length, f = function() {
      --r || o.resolveWith(a, [a]);
    };
    for (typeof e != "string" && (t = e, e = l), e = e || "fx"; s--; )
      i = n._data(a[s], e + "queueHooks"), i && i.empty && (r++, i.empty.add(f));
    return f(), o.promise(t);
  } });
  var Ve, Kt, Pt = /[\\t\\r\\n]/g, Un = /\\r/g, Vn = /^(?:input|select|textarea|button|object)$/i, Yn = /^(?:a|area)$/i, Zt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Et = /^(?:checked|selected)$/i, Re = n.support.getSetAttribute, Ht = n.support.input;
  n.fn.extend({ attr: function(e, t) {
    return n.access(this, n.attr, e, t, arguments.length > 1);
  }, removeAttr: function(e) {
    return this.each(function() {
      n.removeAttr(this, e);
    });
  }, prop: function(e, t) {
    return n.access(this, n.prop, e, t, arguments.length > 1);
  }, removeProp: function(e) {
    return e = n.propFix[e] || e, this.each(function() {
      try {
        this[e] = l, delete this[e];
      } catch (t) {
      }
    });
  }, addClass: function(e) {
    var t, i, r, o, a, s = 0, f = this.length, b = typeof e == "string" && e;
    if (n.isFunction(e))
      return this.each(function(w) {
        n(this).addClass(e.call(this, w, this.className));
      });
    if (b) {
      for (t = (e || "").match(re) || []; f > s; s++)
        if (i = this[s], r = i.nodeType === 1 && (i.className ? (" " + i.className + " ").replace(Pt, " ") : " ")) {
          for (a = 0; o = t[a++]; )
            0 > r.indexOf(" " + o + " ") && (r += o + " ");
          i.className = n.trim(r);
        }
    }
    return this;
  }, removeClass: function(e) {
    var t, i, r, o, a, s = 0, f = this.length, b = arguments.length === 0 || typeof e == "string" && e;
    if (n.isFunction(e))
      return this.each(function(w) {
        n(this).removeClass(e.call(this, w, this.className));
      });
    if (b) {
      for (t = (e || "").match(re) || []; f > s; s++)
        if (i = this[s], r = i.nodeType === 1 && (i.className ? (" " + i.className + " ").replace(Pt, " ") : "")) {
          for (a = 0; o = t[a++]; )
            for (; r.indexOf(" " + o + " ") >= 0; )
              r = r.replace(" " + o + " ", " ");
          i.className = e ? n.trim(r) : "";
        }
    }
    return this;
  }, toggleClass: function(e, t) {
    var i = typeof e, r = typeof t == "boolean";
    return n.isFunction(e) ? this.each(function(o) {
      n(this).toggleClass(e.call(this, o, this.className, t), t);
    }) : this.each(function() {
      if (i === "string")
        for (var o, a = 0, s = n(this), f = t, b = e.match(re) || []; o = b[a++]; )
          f = r ? f : !s.hasClass(o), s[f ? "addClass" : "removeClass"](o);
      else
        (i === h || i === "boolean") && (this.className && n._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : n._data(this, "__className__") || "");
    });
  }, hasClass: function(e) {
    for (var t = " " + e + " ", i = 0, r = this.length; r > i; i++)
      if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(Pt, " ").indexOf(t) >= 0)
        return !0;
    return !1;
  }, val: function(e) {
    var t, i, r, o = this[0];
    {
      if (arguments.length)
        return r = n.isFunction(e), this.each(function(a) {
          var s, f = n(this);
          this.nodeType === 1 && (s = r ? e.call(this, a, f.val()) : e, s == null ? s = "" : typeof s == "number" ? s += "" : n.isArray(s) && (s = n.map(s, function(b) {
            return b == null ? "" : b + "";
          })), i = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, s, "value") !== l || (this.value = s));
        });
      if (o)
        return i = n.valHooks[o.type] || n.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (t = i.get(o, "value")) !== l ? t : (t = o.value, typeof t == "string" ? t.replace(Un, "") : t == null ? "" : t);
    }
  } }), n.extend({ valHooks: { option: { get: function(e) {
    var t = e.attributes.value;
    return !t || t.specified ? e.value : e.text;
  } }, select: { get: function(e) {
    for (var t, i, r = e.options, o = e.selectedIndex, a = e.type === "select-one" || 0 > o, s = a ? null : [], f = a ? o + 1 : r.length, b = 0 > o ? f : a ? o : 0; f > b; b++)
      if (i = r[b], !(!i.selected && b !== o || (n.support.optDisabled ? i.disabled : i.getAttribute("disabled") !== null) || i.parentNode.disabled && n.nodeName(i.parentNode, "optgroup"))) {
        if (t = n(i).val(), a)
          return t;
        s.push(t);
      }
    return s;
  }, set: function(e, t) {
    var i = n.makeArray(t);
    return n(e).find("option").each(function() {
      this.selected = n.inArray(n(this).val(), i) >= 0;
    }), i.length || (e.selectedIndex = -1), i;
  } } }, attr: function(e, t, i) {
    var r, o, a, s = e.nodeType;
    if (e && s !== 3 && s !== 8 && s !== 2)
      return typeof e.getAttribute === h ? n.prop(e, t, i) : (o = s !== 1 || !n.isXMLDoc(e), o && (t = t.toLowerCase(), r = n.attrHooks[t] || (Zt.test(t) ? Kt : Ve)), i === l ? r && o && "get" in r && (a = r.get(e, t)) !== null ? a : (typeof e.getAttribute !== h && (a = e.getAttribute(t)), a == null ? l : a) : i !== null ? r && o && "set" in r && (a = r.set(e, i, t)) !== l ? a : (e.setAttribute(t, i + ""), i) : (n.removeAttr(e, t), l));
  }, removeAttr: function(e, t) {
    var i, r, o = 0, a = t && t.match(re);
    if (a && e.nodeType === 1)
      for (; i = a[o++]; )
        r = n.propFix[i] || i, Zt.test(i) ? !Re && Et.test(i) ? e[n.camelCase("default-" + i)] = e[r] = !1 : e[r] = !1 : n.attr(e, i, ""), e.removeAttribute(Re ? i : r);
  }, attrHooks: { type: { set: function(e, t) {
    if (!n.support.radioValue && t === "radio" && n.nodeName(e, "input")) {
      var i = e.value;
      return e.setAttribute("type", t), i && (e.value = i), t;
    }
  } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", for: "htmlFor", class: "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function(e, t, i) {
    var r, o, a, s = e.nodeType;
    if (e && s !== 3 && s !== 8 && s !== 2)
      return a = s !== 1 || !n.isXMLDoc(e), a && (t = n.propFix[t] || t, o = n.propHooks[t]), i !== l ? o && "set" in o && (r = o.set(e, i, t)) !== l ? r : e[t] = i : o && "get" in o && (r = o.get(e, t)) !== null ? r : e[t];
  }, propHooks: { tabIndex: { get: function(e) {
    var t = e.getAttributeNode("tabindex");
    return t && t.specified ? parseInt(t.value, 10) : Vn.test(e.nodeName) || Yn.test(e.nodeName) && e.href ? 0 : l;
  } } } }), Kt = { get: function(e, t) {
    var i = n.prop(e, t), r = typeof i == "boolean" && e.getAttribute(t), o = typeof i == "boolean" ? Ht && Re ? r != null : Et.test(t) ? e[n.camelCase("default-" + t)] : !!r : e.getAttributeNode(t);
    return o && o.value !== !1 ? t.toLowerCase() : l;
  }, set: function(e, t, i) {
    return t === !1 ? n.removeAttr(e, i) : Ht && Re || !Et.test(i) ? e.setAttribute(!Re && n.propFix[i] || i, i) : e[n.camelCase("default-" + i)] = e[i] = !0, i;
  } }, Ht && Re || (n.attrHooks.value = { get: function(e, t) {
    var i = e.getAttributeNode(t);
    return n.nodeName(e, "input") ? e.defaultValue : i && i.specified ? i.value : l;
  }, set: function(e, t, i) {
    return n.nodeName(e, "input") ? (e.defaultValue = t, l) : Ve && Ve.set(e, t, i);
  } }), Re || (Ve = n.valHooks.button = { get: function(e, t) {
    var i = e.getAttributeNode(t);
    return i && (t === "id" || t === "name" || t === "coords" ? i.value !== "" : i.specified) ? i.value : l;
  }, set: function(e, t, i) {
    var r = e.getAttributeNode(i);
    return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = t += "", i === "value" || t === e.getAttribute(i) ? t : l;
  } }, n.attrHooks.contenteditable = { get: Ve.get, set: function(e, t, i) {
    Ve.set(e, t === "" ? !1 : t, i);
  } }, n.each(["width", "height"], function(e, t) {
    n.attrHooks[t] = n.extend(n.attrHooks[t], { set: function(i, r) {
      return r === "" ? (i.setAttribute(t, "auto"), r) : l;
    } });
  })), n.support.hrefNormalized || (n.each(["href", "src", "width", "height"], function(e, t) {
    n.attrHooks[t] = n.extend(n.attrHooks[t], { get: function(i) {
      var r = i.getAttribute(t, 2);
      return r == null ? l : r;
    } });
  }), n.each(["href", "src"], function(e, t) {
    n.propHooks[t] = { get: function(i) {
      return i.getAttribute(t, 4);
    } };
  })), n.support.style || (n.attrHooks.style = { get: function(e) {
    return e.style.cssText || l;
  }, set: function(e, t) {
    return e.style.cssText = t + "";
  } }), n.support.optSelected || (n.propHooks.selected = n.extend(n.propHooks.selected, { get: function(e) {
    var t = e.parentNode;
    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
  } })), n.support.enctype || (n.propFix.enctype = "encoding"), n.support.checkOn || n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = { get: function(e) {
      return e.getAttribute("value") === null ? "on" : e.value;
    } };
  }), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = n.extend(n.valHooks[this], { set: function(e, t) {
      return n.isArray(t) ? e.checked = n.inArray(n(e).val(), t) >= 0 : l;
    } });
  });
  var St = /^(?:input|select|textarea)$/i, Jn = /^key/, Gn = /^(?:mouse|contextmenu)|click/, en = /^(?:focusinfocus|focusoutblur)$/, tn = /^([^.]*)(?:\\.(.+)|)$/;
  function ut() {
    return !0;
  }
  function Ye() {
    return !1;
  }
  n.event = { global: {}, add: function(e, t, i, r, o) {
    var a, s, f, b, w, v, S, H, k, W, V, Z = n._data(e);
    if (Z) {
      for (i.handler && (b = i, i = b.handler, o = b.selector), i.guid || (i.guid = n.guid++), (s = Z.events) || (s = Z.events = {}), (v = Z.handle) || (v = Z.handle = function(be) {
        return typeof n === h || be && n.event.triggered === be.type ? l : n.event.dispatch.apply(v.elem, arguments);
      }, v.elem = e), t = (t || "").match(re) || [""], f = t.length; f--; )
        a = tn.exec(t[f]) || [], k = V = a[1], W = (a[2] || "").split(".").sort(), w = n.event.special[k] || {}, k = (o ? w.delegateType : w.bindType) || k, w = n.event.special[k] || {}, S = n.extend({ type: k, origType: V, data: r, handler: i, guid: i.guid, selector: o, needsContext: o && n.expr.match.needsContext.test(o), namespace: W.join(".") }, b), (H = s[k]) || (H = s[k] = [], H.delegateCount = 0, w.setup && w.setup.call(e, r, W, v) !== !1 || (e.addEventListener ? e.addEventListener(k, v, !1) : e.attachEvent && e.attachEvent("on" + k, v))), w.add && (w.add.call(e, S), S.handler.guid || (S.handler.guid = i.guid)), o ? H.splice(H.delegateCount++, 0, S) : H.push(S), n.event.global[k] = !0;
      e = null;
    }
  }, remove: function(e, t, i, r, o) {
    var a, s, f, b, w, v, S, H, k, W, V, Z = n.hasData(e) && n._data(e);
    if (Z && (v = Z.events)) {
      for (t = (t || "").match(re) || [""], w = t.length; w--; )
        if (f = tn.exec(t[w]) || [], k = V = f[1], W = (f[2] || "").split(".").sort(), k) {
          for (S = n.event.special[k] || {}, k = (r ? S.delegateType : S.bindType) || k, H = v[k] || [], f = f[2] && RegExp("(^|\\\\.)" + W.join("\\\\.(?:.*\\\\.|)") + "(\\\\.|$)"), b = a = H.length; a--; )
            s = H[a], !o && V !== s.origType || i && i.guid !== s.guid || f && !f.test(s.namespace) || r && r !== s.selector && (r !== "**" || !s.selector) || (H.splice(a, 1), s.selector && H.delegateCount--, S.remove && S.remove.call(e, s));
          b && !H.length && (S.teardown && S.teardown.call(e, W, Z.handle) !== !1 || n.removeEvent(e, k, Z.handle), delete v[k]);
        } else
          for (k in v)
            n.event.remove(e, k + t[w], i, r, !0);
      n.isEmptyObject(v) && (delete Z.handle, n._removeData(e, "events"));
    }
  }, trigger: function(e, t, i, r) {
    var o, a, s, f, b, w, v, S = [i || y], H = R.call(e, "type") ? e.type : e, k = R.call(e, "namespace") ? e.namespace.split(".") : [];
    if (s = w = i = i || y, i.nodeType !== 3 && i.nodeType !== 8 && !en.test(H + n.event.triggered) && (H.indexOf(".") >= 0 && (k = H.split("."), H = k.shift(), k.sort()), a = 0 > H.indexOf(":") && "on" + H, e = e[n.expando] ? e : new n.Event(H, typeof e == "object" && e), e.isTrigger = !0, e.namespace = k.join("."), e.namespace_re = e.namespace ? RegExp("(^|\\\\.)" + k.join("\\\\.(?:.*\\\\.|)") + "(\\\\.|$)") : null, e.result = l, e.target || (e.target = i), t = t == null ? [e] : n.makeArray(t, [e]), b = n.event.special[H] || {}, r || !b.trigger || b.trigger.apply(i, t) !== !1)) {
      if (!r && !b.noBubble && !n.isWindow(i)) {
        for (f = b.delegateType || H, en.test(f + H) || (s = s.parentNode); s; s = s.parentNode)
          S.push(s), w = s;
        w === (i.ownerDocument || y) && S.push(w.defaultView || w.parentWindow || u);
      }
      for (v = 0; (s = S[v++]) && !e.isPropagationStopped(); )
        e.type = v > 1 ? f : b.bindType || H, o = (n._data(s, "events") || {})[e.type] && n._data(s, "handle"), o && o.apply(s, t), o = a && s[a], o && n.acceptData(s) && o.apply && o.apply(s, t) === !1 && e.preventDefault();
      if (e.type = H, !(r || e.isDefaultPrevented() || b._default && b._default.apply(i.ownerDocument, t) !== !1 || H === "click" && n.nodeName(i, "a") || !n.acceptData(i) || !a || !i[H] || n.isWindow(i))) {
        w = i[a], w && (i[a] = null), n.event.triggered = H;
        try {
          i[H]();
        } catch (W) {
        }
        n.event.triggered = l, w && (i[a] = w);
      }
      return e.result;
    }
  }, dispatch: function(e) {
    e = n.event.fix(e);
    var t, i, r, o, a, s = [], f = B.call(arguments), b = (n._data(this, "events") || {})[e.type] || [], w = n.event.special[e.type] || {};
    if (f[0] = e, e.delegateTarget = this, !w.preDispatch || w.preDispatch.call(this, e) !== !1) {
      for (s = n.event.handlers.call(this, e, b), t = 0; (o = s[t++]) && !e.isPropagationStopped(); )
        for (e.currentTarget = o.elem, a = 0; (r = o.handlers[a++]) && !e.isImmediatePropagationStopped(); )
          (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((n.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, f), i !== l && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
      return w.postDispatch && w.postDispatch.call(this, e), e.result;
    }
  }, handlers: function(e, t) {
    var i, r, o, a, s = [], f = t.delegateCount, b = e.target;
    if (f && b.nodeType && (!e.button || e.type !== "click")) {
      for (; b != this; b = b.parentNode || this)
        if (b.nodeType === 1 && (b.disabled !== !0 || e.type !== "click")) {
          for (o = [], a = 0; f > a; a++)
            r = t[a], i = r.selector + " ", o[i] === l && (o[i] = r.needsContext ? n(i, this).index(b) >= 0 : n.find(i, this, null, [b]).length), o[i] && o.push(r);
          o.length && s.push({ elem: b, handlers: o });
        }
    }
    return t.length > f && s.push({ elem: this, handlers: t.slice(f) }), s;
  }, fix: function(e) {
    if (e[n.expando])
      return e;
    var t, i, r, o = e.type, a = e, s = this.fixHooks[o];
    for (s || (this.fixHooks[o] = s = Gn.test(o) ? this.mouseHooks : Jn.test(o) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new n.Event(a), t = r.length; t--; )
      i = r[t], e[i] = a[i];
    return e.target || (e.target = a.srcElement || y), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e;
  }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) {
    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
  } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
    var i, r, o, a = t.button, s = t.fromElement;
    return e.pageX == null && t.clientX != null && (r = e.target.ownerDocument || y, o = r.documentElement, i = r.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || a === l || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;
  } }, special: { load: { noBubble: !0 }, click: { trigger: function() {
    return n.nodeName(this, "input") && this.type === "checkbox" && this.click ? (this.click(), !1) : l;
  } }, focus: { trigger: function() {
    if (this !== y.activeElement && this.focus)
      try {
        return this.focus(), !1;
      } catch (e) {
      }
  }, delegateType: "focusin" }, blur: { trigger: function() {
    return this === y.activeElement && this.blur ? (this.blur(), !1) : l;
  }, delegateType: "focusout" }, beforeunload: { postDispatch: function(e) {
    e.result !== l && (e.originalEvent.returnValue = e.result);
  } } }, simulate: function(e, t, i, r) {
    var o = n.extend(new n.Event(), i, { type: e, isSimulated: !0, originalEvent: {} });
    r ? n.event.trigger(o, null, t) : n.event.dispatch.call(t, o), o.isDefaultPrevented() && i.preventDefault();
  } }, n.removeEvent = y.removeEventListener ? function(e, t, i) {
    e.removeEventListener && e.removeEventListener(t, i, !1);
  } : function(e, t, i) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] === h && (e[r] = null), e.detachEvent(r, i));
  }, n.Event = function(e, t) {
    return this instanceof n.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? ut : Ye) : this.type = e, t && n.extend(this, t), this.timeStamp = e && e.timeStamp || n.now(), this[n.expando] = !0, l) : new n.Event(e, t);
  }, n.Event.prototype = { isDefaultPrevented: Ye, isPropagationStopped: Ye, isImmediatePropagationStopped: Ye, preventDefault: function() {
    var e = this.originalEvent;
    this.isDefaultPrevented = ut, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
  }, stopPropagation: function() {
    var e = this.originalEvent;
    this.isPropagationStopped = ut, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
  }, stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = ut, this.stopPropagation();
  } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
    n.event.special[e] = { delegateType: t, bindType: t, handle: function(i) {
      var r, o = this, a = i.relatedTarget, s = i.handleObj;
      return (!a || a !== o && !n.contains(o, a)) && (i.type = s.origType, r = s.handler.apply(this, arguments), i.type = t), r;
    } };
  }), n.support.submitBubbles || (n.event.special.submit = { setup: function() {
    return n.nodeName(this, "form") ? !1 : (n.event.add(this, "click._submit keypress._submit", function(e) {
      var t = e.target, i = n.nodeName(t, "input") || n.nodeName(t, "button") ? t.form : l;
      i && !n._data(i, "submitBubbles") && (n.event.add(i, "submit._submit", function(r) {
        r._submit_bubble = !0;
      }), n._data(i, "submitBubbles", !0));
    }), l);
  }, postDispatch: function(e) {
    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && n.event.simulate("submit", this.parentNode, e, !0));
  }, teardown: function() {
    return n.nodeName(this, "form") ? !1 : (n.event.remove(this, "._submit"), l);
  } }), n.support.changeBubbles || (n.event.special.change = { setup: function() {
    return St.test(this.nodeName) ? ((this.type === "checkbox" || this.type === "radio") && (n.event.add(this, "propertychange._change", function(e) {
      e.originalEvent.propertyName === "checked" && (this._just_changed = !0);
    }), n.event.add(this, "click._change", function(e) {
      this._just_changed && !e.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, e, !0);
    })), !1) : (n.event.add(this, "beforeactivate._change", function(e) {
      var t = e.target;
      St.test(t.nodeName) && !n._data(t, "changeBubbles") && (n.event.add(t, "change._change", function(i) {
        !this.parentNode || i.isSimulated || i.isTrigger || n.event.simulate("change", this.parentNode, i, !0);
      }), n._data(t, "changeBubbles", !0));
    }), l);
  }, handle: function(e) {
    var t = e.target;
    return this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox" ? e.handleObj.handler.apply(this, arguments) : l;
  }, teardown: function() {
    return n.event.remove(this, "._change"), !St.test(this.nodeName);
  } }), n.support.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
    var i = 0, r = function(o) {
      n.event.simulate(t, o.target, n.event.fix(o), !0);
    };
    n.event.special[t] = { setup: function() {
      i++ === 0 && y.addEventListener(e, r, !0);
    }, teardown: function() {
      --i === 0 && y.removeEventListener(e, r, !0);
    } };
  }), n.fn.extend({ on: function(e, t, i, r, o) {
    var a, s;
    if (typeof e == "object") {
      typeof t != "string" && (i = i || t, t = l);
      for (a in e)
        this.on(a, t, i, e[a], o);
      return this;
    }
    if (i == null && r == null ? (r = t, i = t = l) : r == null && (typeof t == "string" ? (r = i, i = l) : (r = i, i = t, t = l)), r === !1)
      r = Ye;
    else if (!r)
      return this;
    return o === 1 && (s = r, r = function(f) {
      return n().off(f), s.apply(this, arguments);
    }, r.guid = s.guid || (s.guid = n.guid++)), this.each(function() {
      n.event.add(this, e, r, i, t);
    });
  }, one: function(e, t, i, r) {
    return this.on(e, t, i, r, 1);
  }, off: function(e, t, i) {
    var r, o;
    if (e && e.preventDefault && e.handleObj)
      return r = e.handleObj, n(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
    if (typeof e == "object") {
      for (o in e)
        this.off(o, t, e[o]);
      return this;
    }
    return (t === !1 || typeof t == "function") && (i = t, t = l), i === !1 && (i = Ye), this.each(function() {
      n.event.remove(this, e, i, t);
    });
  }, bind: function(e, t, i) {
    return this.on(e, null, t, i);
  }, unbind: function(e, t) {
    return this.off(e, null, t);
  }, delegate: function(e, t, i, r) {
    return this.on(t, e, i, r);
  }, undelegate: function(e, t, i) {
    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", i);
  }, trigger: function(e, t) {
    return this.each(function() {
      n.event.trigger(e, t, this);
    });
  }, triggerHandler: function(e, t) {
    var i = this[0];
    return i ? n.event.trigger(e, t, i, !0) : l;
  } }), function(e, t) {
    var i, r, o, a, s, f, b, w, v, S, H, k, W, V, Z, be, xe, oe = "sizzle" + -/* @__PURE__ */ new Date(), U = e.document, le = {}, J = 0, de = 0, Le = Xt(), ht = Xt(), Pe = Xt(), Ee = typeof t, je = 1 << 31, $e = [], Fe = $e.pop, he = $e.push, Ze = $e.slice, Rt = $e.indexOf || function(d) {
      for (var m = 0, p = this.length; p > m; m++)
        if (this[m] === d)
          return m;
      return -1;
    }, fe = "[\\\\x20\\\\t\\\\r\\\\n\\\\f]", We = "(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+", Rn = We.replace("w", "w#"), qi = "([*^$|!~]?=)", _n = "\\\\[" + fe + "*(" + We + ")" + fe + "*(?:" + qi + fe + \`*(?:(['"])((?:\\\\\\\\.|[^\\\\\\\\])*?)\\\\3|(\` + Rn + ")|)|)" + fe + "*\\\\]", _t = ":(" + We + \`)(?:\\\\(((['"])((?:\\\\\\\\.|[^\\\\\\\\])*?)\\\\3|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\` + _n.replace(3, 8) + ")*)|.*)\\\\)|)", gt = RegExp("^" + fe + "+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)" + fe + "+$", "g"), Mi = RegExp("^" + fe + "*," + fe + "*"), Bi = RegExp("^" + fe + "*([\\\\x20\\\\t\\\\r\\\\n\\\\f>+~])" + fe + "*"), Ri = RegExp(_t), _i = RegExp("^" + Rn + "$"), mt = { ID: RegExp("^#(" + We + ")"), CLASS: RegExp("^\\\\.(" + We + ")"), NAME: RegExp(\`^\\\\[name=['"]?(\` + We + \`)['"]?\\\\]\`), TAG: RegExp("^(" + We.replace("w", "w*") + ")"), ATTR: RegExp("^" + _n), PSEUDO: RegExp("^" + _t), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(" + fe + "*(even|odd|(([+-]|)(\\\\d*)n|)" + fe + "*(?:([+-]|)" + fe + "*(\\\\d+)|))" + fe + "*\\\\)|)", "i"), needsContext: RegExp("^" + fe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(" + fe + "*((?:-\\\\d)?\\\\d*)" + fe + "*\\\\)|)(?=[^-]|$)", "i") }, zt = /[\\x20\\t\\r\\n\\f]*[+~]/, zi = /^[^{]+\\{\\s*\\[native code/, Qi = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/, Xi = /^(?:input|select|textarea|button)$/i, $i = /^h\\d$/i, Wi = /'|\\\\/g, Ui = /\\=[\\x20\\t\\r\\n\\f]*([^'"\\]]*)[\\x20\\t\\r\\n\\f]*\\]/g, Oe = /\\\\([\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|.)/g, qe = function(d, m) {
      var p = "0x" + m - 65536;
      return p !== p ? m : 0 > p ? String.fromCharCode(p + 65536) : String.fromCharCode(55296 | p >> 10, 56320 | 1023 & p);
    };
    try {
      Ze.call(U.documentElement.childNodes, 0)[0].nodeType;
    } catch (d) {
      Ze = function(m) {
        for (var p, T = []; p = this[m++]; )
          T.push(p);
        return T;
      };
    }
    function Qt(d) {
      return zi.test(d + "");
    }
    function Xt() {
      var d, m = [];
      return d = function(p, T) {
        return m.push(p += " ") > o.cacheLength && delete d[m.shift()], d[p] = T;
      };
    }
    function ke(d) {
      return d[oe] = !0, d;
    }
    function Me(d) {
      var m = S.createElement("div");
      try {
        return d(m);
      } catch (p) {
        return !1;
      } finally {
        m = null;
      }
    }
    function te(d, m, p, T) {
      var P, L, D, O, _, Y, G, X, ne, K;
      if ((m ? m.ownerDocument || m : U) !== S && v(m), m = m || S, p = p || [], !d || typeof d != "string")
        return p;
      if ((O = m.nodeType) !== 1 && O !== 9)
        return [];
      if (!k && !T) {
        if (P = Qi.exec(d))
          if (D = P[1]) {
            if (O === 9) {
              if (L = m.getElementById(D), !L || !L.parentNode)
                return p;
              if (L.id === D)
                return p.push(L), p;
            } else if (m.ownerDocument && (L = m.ownerDocument.getElementById(D)) && be(m, L) && L.id === D)
              return p.push(L), p;
          } else {
            if (P[2])
              return he.apply(p, Ze.call(m.getElementsByTagName(d), 0)), p;
            if ((D = P[3]) && le.getByClassName && m.getElementsByClassName)
              return he.apply(p, Ze.call(m.getElementsByClassName(D), 0)), p;
          }
        if (le.qsa && !W.test(d)) {
          if (G = !0, X = oe, ne = m, K = O === 9 && d, O === 1 && m.nodeName.toLowerCase() !== "object") {
            for (Y = yt(d), (G = m.getAttribute("id")) ? X = G.replace(Wi, "\\\\$&") : m.setAttribute("id", X), X = "[id='" + X + "'] ", _ = Y.length; _--; )
              Y[_] = X + vt(Y[_]);
            ne = zt.test(d) && m.parentNode || m, K = Y.join(",");
          }
          if (K)
            try {
              return he.apply(p, Ze.call(ne.querySelectorAll(K), 0)), p;
            } catch (ae) {
            } finally {
              G || m.removeAttribute("id");
            }
        }
      }
      return Ki(d.replace(gt, "$1"), m, p, T);
    }
    s = te.isXML = function(d) {
      var m = d && (d.ownerDocument || d).documentElement;
      return m ? m.nodeName !== "HTML" : !1;
    }, v = te.setDocument = function(d) {
      var m = d ? d.ownerDocument || d : U;
      return m !== S && m.nodeType === 9 && m.documentElement && (S = m, H = m.documentElement, k = s(m), le.tagNameNoComments = Me(function(p) {
        return p.appendChild(m.createComment("")), !p.getElementsByTagName("*").length;
      }), le.attributes = Me(function(p) {
        p.innerHTML = "<select></select>";
        var T = typeof p.lastChild.getAttribute("multiple");
        return T !== "boolean" && T !== "string";
      }), le.getByClassName = Me(function(p) {
        return p.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", p.getElementsByClassName && p.getElementsByClassName("e").length ? (p.lastChild.className = "e", p.getElementsByClassName("e").length === 2) : !1;
      }), le.getByName = Me(function(p) {
        p.id = oe + 0, p.innerHTML = "<a name='" + oe + "'></a><div name='" + oe + "'></div>", H.insertBefore(p, H.firstChild);
        var T = m.getElementsByName && m.getElementsByName(oe).length === 2 + m.getElementsByName(oe + 0).length;
        return le.getIdNotName = !m.getElementById(oe), H.removeChild(p), T;
      }), o.attrHandle = Me(function(p) {
        return p.innerHTML = "<a href='#'></a>", p.firstChild && typeof p.firstChild.getAttribute !== Ee && p.firstChild.getAttribute("href") === "#";
      }) ? {} : { href: function(p) {
        return p.getAttribute("href", 2);
      }, type: function(p) {
        return p.getAttribute("type");
      } }, le.getIdNotName ? (o.find.ID = function(p, T) {
        if (typeof T.getElementById !== Ee && !k) {
          var P = T.getElementById(p);
          return P && P.parentNode ? [P] : [];
        }
      }, o.filter.ID = function(p) {
        var T = p.replace(Oe, qe);
        return function(P) {
          return P.getAttribute("id") === T;
        };
      }) : (o.find.ID = function(p, T) {
        if (typeof T.getElementById !== Ee && !k) {
          var P = T.getElementById(p);
          return P ? P.id === p || typeof P.getAttributeNode !== Ee && P.getAttributeNode("id").value === p ? [P] : t : [];
        }
      }, o.filter.ID = function(p) {
        var T = p.replace(Oe, qe);
        return function(P) {
          var L = typeof P.getAttributeNode !== Ee && P.getAttributeNode("id");
          return L && L.value === T;
        };
      }), o.find.TAG = le.tagNameNoComments ? function(p, T) {
        return typeof T.getElementsByTagName !== Ee ? T.getElementsByTagName(p) : t;
      } : function(p, T) {
        var P, L = [], D = 0, O = T.getElementsByTagName(p);
        if (p === "*") {
          for (; P = O[D++]; )
            P.nodeType === 1 && L.push(P);
          return L;
        }
        return O;
      }, o.find.NAME = le.getByName && function(p, T) {
        return typeof T.getElementsByName !== Ee ? T.getElementsByName(name) : t;
      }, o.find.CLASS = le.getByClassName && function(p, T) {
        return typeof T.getElementsByClassName === Ee || k ? t : T.getElementsByClassName(p);
      }, V = [], W = [":focus"], (le.qsa = Qt(m.querySelectorAll)) && (Me(function(p) {
        p.innerHTML = "<select><option selected=''></option></select>", p.querySelectorAll("[selected]").length || W.push("\\\\[" + fe + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), p.querySelectorAll(":checked").length || W.push(":checked");
      }), Me(function(p) {
        p.innerHTML = "<input type='hidden' i=''/>", p.querySelectorAll("[i^='']").length && W.push("[*^$]=" + fe + \`*(?:""|'')\`), p.querySelectorAll(":enabled").length || W.push(":enabled", ":disabled"), p.querySelectorAll("*,:x"), W.push(",.*:");
      })), (le.matchesSelector = Qt(Z = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && Me(function(p) {
        le.disconnectedMatch = Z.call(p, "div"), Z.call(p, "[s!='']:x"), V.push("!=", _t);
      }), W = RegExp(W.join("|")), V = RegExp(V.join("|")), be = Qt(H.contains) || H.compareDocumentPosition ? function(p, T) {
        var P = p.nodeType === 9 ? p.documentElement : p, L = T && T.parentNode;
        return p === L || !(!L || L.nodeType !== 1 || !(P.contains ? P.contains(L) : p.compareDocumentPosition && 16 & p.compareDocumentPosition(L)));
      } : function(p, T) {
        if (T) {
          for (; T = T.parentNode; )
            if (T === p)
              return !0;
        }
        return !1;
      }, xe = H.compareDocumentPosition ? function(p, T) {
        var P;
        return p === T ? (b = !0, 0) : (P = T.compareDocumentPosition && p.compareDocumentPosition && p.compareDocumentPosition(T)) ? 1 & P || p.parentNode && p.parentNode.nodeType === 11 ? p === m || be(U, p) ? -1 : T === m || be(U, T) ? 1 : 0 : 4 & P ? -1 : 1 : p.compareDocumentPosition ? -1 : 1;
      } : function(p, T) {
        var P, L = 0, D = p.parentNode, O = T.parentNode, _ = [p], Y = [T];
        if (p === T)
          return b = !0, 0;
        if (!D || !O)
          return p === m ? -1 : T === m ? 1 : D ? -1 : O ? 1 : 0;
        if (D === O)
          return zn(p, T);
        for (P = p; P = P.parentNode; )
          _.unshift(P);
        for (P = T; P = P.parentNode; )
          Y.unshift(P);
        for (; _[L] === Y[L]; )
          L++;
        return L ? zn(_[L], Y[L]) : _[L] === U ? -1 : Y[L] === U ? 1 : 0;
      }, b = !1, [0, 0].sort(xe), le.detectDuplicates = b), S;
    }, te.matches = function(d, m) {
      return te(d, null, null, m);
    }, te.matchesSelector = function(d, m) {
      if ((d.ownerDocument || d) !== S && v(d), m = m.replace(Ui, "='$1']"), !(!le.matchesSelector || k || V && V.test(m) || W.test(m)))
        try {
          var p = Z.call(d, m);
          if (p || le.disconnectedMatch || d.document && d.document.nodeType !== 11)
            return p;
        } catch (T) {
        }
      return te(m, S, null, [d]).length > 0;
    }, te.contains = function(d, m) {
      return (d.ownerDocument || d) !== S && v(d), be(d, m);
    }, te.attr = function(d, m) {
      var p;
      return (d.ownerDocument || d) !== S && v(d), k || (m = m.toLowerCase()), (p = o.attrHandle[m]) ? p(d) : k || le.attributes ? d.getAttribute(m) : ((p = d.getAttributeNode(m)) || d.getAttribute(m)) && d[m] === !0 ? m : p && p.specified ? p.value : null;
    }, te.error = function(d) {
      throw Error("Syntax error, unrecognized expression: " + d);
    }, te.uniqueSort = function(d) {
      var m, p = [], T = 1, P = 0;
      if (b = !le.detectDuplicates, d.sort(xe), b) {
        for (; m = d[T]; T++)
          m === d[T - 1] && (P = p.push(T));
        for (; P--; )
          d.splice(p[P], 1);
      }
      return d;
    };
    function zn(d, m) {
      var p = m && d, T = p && (~m.sourceIndex || je) - (~d.sourceIndex || je);
      if (T)
        return T;
      if (p) {
        for (; p = p.nextSibling; )
          if (p === m)
            return -1;
      }
      return d ? 1 : -1;
    }
    function Vi(d) {
      return function(m) {
        var p = m.nodeName.toLowerCase();
        return p === "input" && m.type === d;
      };
    }
    function Yi(d) {
      return function(m) {
        var p = m.nodeName.toLowerCase();
        return (p === "input" || p === "button") && m.type === d;
      };
    }
    function Ue(d) {
      return ke(function(m) {
        return m = +m, ke(function(p, T) {
          for (var P, L = d([], p.length, m), D = L.length; D--; )
            p[P = L[D]] && (p[P] = !(T[P] = p[P]));
        });
      });
    }
    a = te.getText = function(d) {
      var m, p = "", T = 0, P = d.nodeType;
      if (P) {
        if (P === 1 || P === 9 || P === 11) {
          if (typeof d.textContent == "string")
            return d.textContent;
          for (d = d.firstChild; d; d = d.nextSibling)
            p += a(d);
        } else if (P === 3 || P === 4)
          return d.nodeValue;
      } else
        for (; m = d[T]; T++)
          p += a(m);
      return p;
    }, o = te.selectors = { cacheLength: 50, createPseudo: ke, match: mt, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(d) {
      return d[1] = d[1].replace(Oe, qe), d[3] = (d[4] || d[5] || "").replace(Oe, qe), d[2] === "~=" && (d[3] = " " + d[3] + " "), d.slice(0, 4);
    }, CHILD: function(d) {
      return d[1] = d[1].toLowerCase(), d[1].slice(0, 3) === "nth" ? (d[3] || te.error(d[0]), d[4] = +(d[4] ? d[5] + (d[6] || 1) : 2 * (d[3] === "even" || d[3] === "odd")), d[5] = +(d[7] + d[8] || d[3] === "odd")) : d[3] && te.error(d[0]), d;
    }, PSEUDO: function(d) {
      var m, p = !d[5] && d[2];
      return mt.CHILD.test(d[0]) ? null : (d[4] ? d[2] = d[4] : p && Ri.test(p) && (m = yt(p, !0)) && (m = p.indexOf(")", p.length - m) - p.length) && (d[0] = d[0].slice(0, m), d[2] = p.slice(0, m)), d.slice(0, 3));
    } }, filter: { TAG: function(d) {
      return d === "*" ? function() {
        return !0;
      } : (d = d.replace(Oe, qe).toLowerCase(), function(m) {
        return m.nodeName && m.nodeName.toLowerCase() === d;
      });
    }, CLASS: function(d) {
      var m = Le[d + " "];
      return m || (m = RegExp("(^|" + fe + ")" + d + "(" + fe + "|$)")) && Le(d, function(p) {
        return m.test(p.className || typeof p.getAttribute !== Ee && p.getAttribute("class") || "");
      });
    }, ATTR: function(d, m, p) {
      return function(T) {
        var P = te.attr(T, d);
        return P == null ? m === "!=" : m ? (P += "", m === "=" ? P === p : m === "!=" ? P !== p : m === "^=" ? p && P.indexOf(p) === 0 : m === "*=" ? p && P.indexOf(p) > -1 : m === "$=" ? p && P.slice(-p.length) === p : m === "~=" ? (" " + P + " ").indexOf(p) > -1 : m === "|=" ? P === p || P.slice(0, p.length + 1) === p + "-" : !1) : !0;
      };
    }, CHILD: function(d, m, p, T, P) {
      var L = d.slice(0, 3) !== "nth", D = d.slice(-4) !== "last", O = m === "of-type";
      return T === 1 && P === 0 ? function(_) {
        return !!_.parentNode;
      } : function(_, Y, G) {
        var X, ne, K, ae, ge, me, we = L !== D ? "nextSibling" : "previousSibling", ie = _.parentNode, it = O && _.nodeName.toLowerCase(), rt = !G && !O;
        if (ie) {
          if (L) {
            for (; we; ) {
              for (K = _; K = K[we]; )
                if (O ? K.nodeName.toLowerCase() === it : K.nodeType === 1)
                  return !1;
              me = we = d === "only" && !me && "nextSibling";
            }
            return !0;
          }
          if (me = [D ? ie.firstChild : ie.lastChild], D && rt) {
            for (ne = ie[oe] || (ie[oe] = {}), X = ne[d] || [], ge = X[0] === J && X[1], ae = X[0] === J && X[2], K = ge && ie.childNodes[ge]; K = ++ge && K && K[we] || (ae = ge = 0) || me.pop(); )
              if (K.nodeType === 1 && ++ae && K === _) {
                ne[d] = [J, ge, ae];
                break;
              }
          } else if (rt && (X = (_[oe] || (_[oe] = {}))[d]) && X[0] === J)
            ae = X[1];
          else
            for (; (K = ++ge && K && K[we] || (ae = ge = 0) || me.pop()) && !((O ? K.nodeName.toLowerCase() === it : K.nodeType === 1) && ++ae && (rt && ((K[oe] || (K[oe] = {}))[d] = [J, ae]), K === _)); )
              ;
          return ae -= P, ae === T || ae % T === 0 && ae / T >= 0;
        }
      };
    }, PSEUDO: function(d, m) {
      var p, T = o.pseudos[d] || o.setFilters[d.toLowerCase()] || te.error("unsupported pseudo: " + d);
      return T[oe] ? T(m) : T.length > 1 ? (p = [d, d, "", m], o.setFilters.hasOwnProperty(d.toLowerCase()) ? ke(function(P, L) {
        for (var D, O = T(P, m), _ = O.length; _--; )
          D = Rt.call(P, O[_]), P[D] = !(L[D] = O[_]);
      }) : function(P) {
        return T(P, 0, p);
      }) : T;
    } }, pseudos: { not: ke(function(d) {
      var m = [], p = [], T = f(d.replace(gt, "$1"));
      return T[oe] ? ke(function(P, L, D, O) {
        for (var _, Y = T(P, null, O, []), G = P.length; G--; )
          (_ = Y[G]) && (P[G] = !(L[G] = _));
      }) : function(P, L, D) {
        return m[0] = P, T(m, null, D, p), !p.pop();
      };
    }), has: ke(function(d) {
      return function(m) {
        return te(d, m).length > 0;
      };
    }), contains: ke(function(d) {
      return function(m) {
        return (m.textContent || m.innerText || a(m)).indexOf(d) > -1;
      };
    }), lang: ke(function(d) {
      return _i.test(d || "") || te.error("unsupported lang: " + d), d = d.replace(Oe, qe).toLowerCase(), function(m) {
        var p;
        do
          if (p = k ? m.getAttribute("xml:lang") || m.getAttribute("lang") : m.lang)
            return p = p.toLowerCase(), p === d || p.indexOf(d + "-") === 0;
        while ((m = m.parentNode) && m.nodeType === 1);
        return !1;
      };
    }), target: function(d) {
      var m = e.location && e.location.hash;
      return m && m.slice(1) === d.id;
    }, root: function(d) {
      return d === H;
    }, focus: function(d) {
      return d === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(d.type || d.href || ~d.tabIndex);
    }, enabled: function(d) {
      return d.disabled === !1;
    }, disabled: function(d) {
      return d.disabled === !0;
    }, checked: function(d) {
      var m = d.nodeName.toLowerCase();
      return m === "input" && !!d.checked || m === "option" && !!d.selected;
    }, selected: function(d) {
      return d.parentNode && d.parentNode.selectedIndex, d.selected === !0;
    }, empty: function(d) {
      for (d = d.firstChild; d; d = d.nextSibling)
        if (d.nodeName > "@" || d.nodeType === 3 || d.nodeType === 4)
          return !1;
      return !0;
    }, parent: function(d) {
      return !o.pseudos.empty(d);
    }, header: function(d) {
      return $i.test(d.nodeName);
    }, input: function(d) {
      return Xi.test(d.nodeName);
    }, button: function(d) {
      var m = d.nodeName.toLowerCase();
      return m === "input" && d.type === "button" || m === "button";
    }, text: function(d) {
      var m;
      return d.nodeName.toLowerCase() === "input" && d.type === "text" && ((m = d.getAttribute("type")) == null || m.toLowerCase() === d.type);
    }, first: Ue(function() {
      return [0];
    }), last: Ue(function(d, m) {
      return [m - 1];
    }), eq: Ue(function(d, m, p) {
      return [0 > p ? p + m : p];
    }), even: Ue(function(d, m) {
      for (var p = 0; m > p; p += 2)
        d.push(p);
      return d;
    }), odd: Ue(function(d, m) {
      for (var p = 1; m > p; p += 2)
        d.push(p);
      return d;
    }), lt: Ue(function(d, m, p) {
      for (var T = 0 > p ? p + m : p; --T >= 0; )
        d.push(T);
      return d;
    }), gt: Ue(function(d, m, p) {
      for (var T = 0 > p ? p + m : p; m > ++T; )
        d.push(T);
      return d;
    }) } };
    for (i in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      o.pseudos[i] = Vi(i);
    for (i in { submit: !0, reset: !0 })
      o.pseudos[i] = Yi(i);
    function yt(d, m) {
      var p, T, P, L, D, O, _, Y = ht[d + " "];
      if (Y)
        return m ? 0 : Y.slice(0);
      for (D = d, O = [], _ = o.preFilter; D; ) {
        (!p || (T = Mi.exec(D))) && (T && (D = D.slice(T[0].length) || D), O.push(P = [])), p = !1, (T = Bi.exec(D)) && (p = T.shift(), P.push({ value: p, type: T[0].replace(gt, " ") }), D = D.slice(p.length));
        for (L in o.filter)
          !(T = mt[L].exec(D)) || _[L] && !(T = _[L](T)) || (p = T.shift(), P.push({ value: p, type: L, matches: T }), D = D.slice(p.length));
        if (!p)
          break;
      }
      return m ? D.length : D ? te.error(d) : ht(d, O).slice(0);
    }
    function vt(d) {
      for (var m = 0, p = d.length, T = ""; p > m; m++)
        T += d[m].value;
      return T;
    }
    function $t(d, m, p) {
      var T = m.dir, P = p && T === "parentNode", L = de++;
      return m.first ? function(D, O, _) {
        for (; D = D[T]; )
          if (D.nodeType === 1 || P)
            return d(D, O, _);
      } : function(D, O, _) {
        var Y, G, X, ne = J + " " + L;
        if (_) {
          for (; D = D[T]; )
            if ((D.nodeType === 1 || P) && d(D, O, _))
              return !0;
        } else
          for (; D = D[T]; )
            if (D.nodeType === 1 || P) {
              if (X = D[oe] || (D[oe] = {}), (G = X[T]) && G[0] === ne) {
                if ((Y = G[1]) === !0 || Y === r)
                  return Y === !0;
              } else if (G = X[T] = [ne], G[1] = d(D, O, _) || r, G[1] === !0)
                return !0;
            }
      };
    }
    function Wt(d) {
      return d.length > 1 ? function(m, p, T) {
        for (var P = d.length; P--; )
          if (!d[P](m, p, T))
            return !1;
        return !0;
      } : d[0];
    }
    function bt(d, m, p, T, P) {
      for (var L, D = [], O = 0, _ = d.length, Y = m != null; _ > O; O++)
        (L = d[O]) && (!p || p(L, T, P)) && (D.push(L), Y && m.push(O));
      return D;
    }
    function Ut(d, m, p, T, P, L) {
      return T && !T[oe] && (T = Ut(T)), P && !P[oe] && (P = Ut(P, L)), ke(function(D, O, _, Y) {
        var G, X, ne, K = [], ae = [], ge = O.length, me = D || Gi(m || "*", _.nodeType ? [_] : _, []), we = !d || !D && m ? me : bt(me, K, d, _, Y), ie = p ? P || (D ? d : ge || T) ? [] : O : we;
        if (p && p(we, ie, _, Y), T)
          for (G = bt(ie, ae), T(G, [], _, Y), X = G.length; X--; )
            (ne = G[X]) && (ie[ae[X]] = !(we[ae[X]] = ne));
        if (D) {
          if (P || d) {
            if (P) {
              for (G = [], X = ie.length; X--; )
                (ne = ie[X]) && G.push(we[X] = ne);
              P(null, ie = [], G, Y);
            }
            for (X = ie.length; X--; )
              (ne = ie[X]) && (G = P ? Rt.call(D, ne) : K[X]) > -1 && (D[G] = !(O[G] = ne));
          }
        } else
          ie = bt(ie === O ? ie.splice(ge, ie.length) : ie), P ? P(null, O, ie, Y) : he.apply(O, ie);
      });
    }
    function Vt(d) {
      for (var m, p, T, P = d.length, L = o.relative[d[0].type], D = L || o.relative[" "], O = L ? 1 : 0, _ = $t(function(X) {
        return X === m;
      }, D, !0), Y = $t(function(X) {
        return Rt.call(m, X) > -1;
      }, D, !0), G = [function(X, ne, K) {
        return !L && (K || ne !== w) || ((m = ne).nodeType ? _(X, ne, K) : Y(X, ne, K));
      }]; P > O; O++)
        if (p = o.relative[d[O].type])
          G = [$t(Wt(G), p)];
        else {
          if (p = o.filter[d[O].type].apply(null, d[O].matches), p[oe]) {
            for (T = ++O; P > T && !o.relative[d[T].type]; T++)
              ;
            return Ut(O > 1 && Wt(G), O > 1 && vt(d.slice(0, O - 1)).replace(gt, "$1"), p, T > O && Vt(d.slice(O, T)), P > T && Vt(d = d.slice(T)), P > T && vt(d));
          }
          G.push(p);
        }
      return Wt(G);
    }
    function Ji(d, m) {
      var p = 0, T = m.length > 0, P = d.length > 0, L = function(D, O, _, Y, G) {
        var X, ne, K, ae = [], ge = 0, me = "0", we = D && [], ie = G != null, it = w, rt = D || P && o.find.TAG("*", G && O.parentNode || O), Xn = J += it == null ? 1 : Math.random() || 0.1;
        for (ie && (w = O !== S && O, r = p); (X = rt[me]) != null; me++) {
          if (P && X) {
            for (ne = 0; K = d[ne++]; )
              if (K(X, O, _)) {
                Y.push(X);
                break;
              }
            ie && (J = Xn, r = ++p);
          }
          T && ((X = !K && X) && ge--, D && we.push(X));
        }
        if (ge += me, T && me !== ge) {
          for (ne = 0; K = m[ne++]; )
            K(we, ae, O, _);
          if (D) {
            if (ge > 0)
              for (; me--; )
                we[me] || ae[me] || (ae[me] = Fe.call(Y));
            ae = bt(ae);
          }
          he.apply(Y, ae), ie && !D && ae.length > 0 && ge + m.length > 1 && te.uniqueSort(Y);
        }
        return ie && (J = Xn, w = it), we;
      };
      return T ? ke(L) : L;
    }
    f = te.compile = function(d, m) {
      var p, T = [], P = [], L = Pe[d + " "];
      if (!L) {
        for (m || (m = yt(d)), p = m.length; p--; )
          L = Vt(m[p]), L[oe] ? T.push(L) : P.push(L);
        L = Pe(d, Ji(P, T));
      }
      return L;
    };
    function Gi(d, m, p) {
      for (var T = 0, P = m.length; P > T; T++)
        te(d, m[T], p);
      return p;
    }
    function Ki(d, m, p, T) {
      var P, L, D, O, _, Y = yt(d);
      if (!T && Y.length === 1) {
        if (L = Y[0] = Y[0].slice(0), L.length > 2 && (D = L[0]).type === "ID" && m.nodeType === 9 && !k && o.relative[L[1].type]) {
          if (m = o.find.ID(D.matches[0].replace(Oe, qe), m)[0], !m)
            return p;
          d = d.slice(L.shift().value.length);
        }
        for (P = mt.needsContext.test(d) ? 0 : L.length; P-- && (D = L[P], !o.relative[O = D.type]); )
          if ((_ = o.find[O]) && (T = _(D.matches[0].replace(Oe, qe), zt.test(L[0].type) && m.parentNode || m))) {
            if (L.splice(P, 1), d = T.length && vt(L), !d)
              return he.apply(p, Ze.call(T, 0)), p;
            break;
          }
      }
      return f(d, Y)(T, m, k, p, zt.test(d)), p;
    }
    o.pseudos.nth = o.pseudos.eq;
    function Qn() {
    }
    o.filters = Qn.prototype = o.pseudos, o.setFilters = new Qn(), v(), te.attr = n.attr, n.find = te, n.expr = te.selectors, n.expr[":"] = n.expr.pseudos, n.unique = te.uniqueSort, n.text = te.getText, n.isXMLDoc = te.isXML, n.contains = te.contains;
  }(u);
  var Kn = /Until$/, Zn = /^(?:parents|prev(?:Until|All))/, ei = /^.[^:#\\[\\.,]*$/, nn = n.expr.match.needsContext, ti = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({ find: function(e) {
    var t, i, r, o = this.length;
    if (typeof e != "string")
      return r = this, this.pushStack(n(e).filter(function() {
        for (t = 0; o > t; t++)
          if (n.contains(r[t], this))
            return !0;
      }));
    for (i = [], t = 0; o > t; t++)
      n.find(e, this[t], i);
    return i = this.pushStack(o > 1 ? n.unique(i) : i), i.selector = (this.selector ? this.selector + " " : "") + e, i;
  }, has: function(e) {
    var t, i = n(e, this), r = i.length;
    return this.filter(function() {
      for (t = 0; r > t; t++)
        if (n.contains(this, i[t]))
          return !0;
    });
  }, not: function(e) {
    return this.pushStack(on(this, e, !1));
  }, filter: function(e) {
    return this.pushStack(on(this, e, !0));
  }, is: function(e) {
    return !!e && (typeof e == "string" ? nn.test(e) ? n(e, this.context).index(this[0]) >= 0 : n.filter(e, this).length > 0 : this.filter(e).length > 0);
  }, closest: function(e, t) {
    for (var i, r = 0, o = this.length, a = [], s = nn.test(e) || typeof e != "string" ? n(e, t || this.context) : 0; o > r; r++)
      for (i = this[r]; i && i.ownerDocument && i !== t && i.nodeType !== 11; ) {
        if (s ? s.index(i) > -1 : n.find.matchesSelector(i, e)) {
          a.push(i);
          break;
        }
        i = i.parentNode;
      }
    return this.pushStack(a.length > 1 ? n.unique(a) : a);
  }, index: function(e) {
    return e ? typeof e == "string" ? n.inArray(this[0], n(e)) : n.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e, t) {
    var i = typeof e == "string" ? n(e, t) : n.makeArray(e && e.nodeType ? [e] : e), r = n.merge(this.get(), i);
    return this.pushStack(n.unique(r));
  }, addBack: function(e) {
    return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
  } }), n.fn.andSelf = n.fn.addBack;
  function rn(e, t) {
    do
      e = e[t];
    while (e && e.nodeType !== 1);
    return e;
  }
  n.each({ parent: function(e) {
    var t = e.parentNode;
    return t && t.nodeType !== 11 ? t : null;
  }, parents: function(e) {
    return n.dir(e, "parentNode");
  }, parentsUntil: function(e, t, i) {
    return n.dir(e, "parentNode", i);
  }, next: function(e) {
    return rn(e, "nextSibling");
  }, prev: function(e) {
    return rn(e, "previousSibling");
  }, nextAll: function(e) {
    return n.dir(e, "nextSibling");
  }, prevAll: function(e) {
    return n.dir(e, "previousSibling");
  }, nextUntil: function(e, t, i) {
    return n.dir(e, "nextSibling", i);
  }, prevUntil: function(e, t, i) {
    return n.dir(e, "previousSibling", i);
  }, siblings: function(e) {
    return n.sibling((e.parentNode || {}).firstChild, e);
  }, children: function(e) {
    return n.sibling(e.firstChild);
  }, contents: function(e) {
    return n.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : n.merge([], e.childNodes);
  } }, function(e, t) {
    n.fn[e] = function(i, r) {
      var o = n.map(this, t, i);
      return Kn.test(e) || (r = i), r && typeof r == "string" && (o = n.filter(r, o)), o = this.length > 1 && !ti[e] ? n.unique(o) : o, this.length > 1 && Zn.test(e) && (o = o.reverse()), this.pushStack(o);
    };
  }), n.extend({ filter: function(e, t, i) {
    return i && (e = ":not(" + e + ")"), t.length === 1 ? n.find.matchesSelector(t[0], e) ? [t[0]] : [] : n.find.matches(e, t);
  }, dir: function(e, t, i) {
    for (var r = [], o = e[t]; o && o.nodeType !== 9 && (i === l || o.nodeType !== 1 || !n(o).is(i)); )
      o.nodeType === 1 && r.push(o), o = o[t];
    return r;
  }, sibling: function(e, t) {
    for (var i = []; e; e = e.nextSibling)
      e.nodeType === 1 && e !== t && i.push(e);
    return i;
  } });
  function on(e, t, i) {
    if (t = t || 0, n.isFunction(t))
      return n.grep(e, function(o, a) {
        var s = !!t.call(o, a, o);
        return s === i;
      });
    if (t.nodeType)
      return n.grep(e, function(o) {
        return o === t === i;
      });
    if (typeof t == "string") {
      var r = n.grep(e, function(o) {
        return o.nodeType === 1;
      });
      if (ei.test(t))
        return n.filter(t, r, !i);
      t = n.filter(t, r);
    }
    return n.grep(e, function(o) {
      return n.inArray(o, t) >= 0 === i;
    });
  }
  function an(e) {
    var t = sn.split("|"), i = e.createDocumentFragment();
    if (i.createElement)
      for (; t.length; )
        i.createElement(t.pop());
    return i;
  }
  var sn = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ni = / jQuery\\d+="(?:null|\\d+)"/g, ln = RegExp("<(?:" + sn + ")[\\\\s/>]", "i"), kt = /^\\s+/, un = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi, cn = /<([\\w:]+)/, dn = /<tbody/i, ii = /<|&#?\\w+;/, ri = /<(?:script|style|link)/i, Nt = /^(?:checkbox|radio)$/i, oi = /checked\\s*(?:[^=]|=\\s*.checked.)/i, fn = /^$|\\/(?:java|ecma)script/i, ai = /^true\\/(.*)/, si = /^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g, He = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: n.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, li = an(y), At = li.appendChild(y.createElement("div"));
  He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td, n.fn.extend({ text: function(e) {
    return n.access(this, function(t) {
      return t === l ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(t));
    }, null, e, arguments.length);
  }, wrapAll: function(e) {
    if (n.isFunction(e))
      return this.each(function(i) {
        n(this).wrapAll(e.call(this, i));
      });
    if (this[0]) {
      var t = n(e, this[0].ownerDocument).eq(0).clone(!0);
      this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var i = this; i.firstChild && i.firstChild.nodeType === 1; )
          i = i.firstChild;
        return i;
      }).append(this);
    }
    return this;
  }, wrapInner: function(e) {
    return n.isFunction(e) ? this.each(function(t) {
      n(this).wrapInner(e.call(this, t));
    }) : this.each(function() {
      var t = n(this), i = t.contents();
      i.length ? i.wrapAll(e) : t.append(e);
    });
  }, wrap: function(e) {
    var t = n.isFunction(e);
    return this.each(function(i) {
      n(this).wrapAll(t ? e.call(this, i) : e);
    });
  }, unwrap: function() {
    return this.parent().each(function() {
      n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
    }).end();
  }, append: function() {
    return this.domManip(arguments, !0, function(e) {
      (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e);
    });
  }, prepend: function() {
    return this.domManip(arguments, !0, function(e) {
      (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild);
    });
  }, before: function() {
    return this.domManip(arguments, !1, function(e) {
      this.parentNode && this.parentNode.insertBefore(e, this);
    });
  }, after: function() {
    return this.domManip(arguments, !1, function(e) {
      this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
    });
  }, remove: function(e, t) {
    for (var i, r = 0; (i = this[r]) != null; r++)
      (!e || n.filter(e, [i]).length > 0) && (t || i.nodeType !== 1 || n.cleanData(ve(i)), i.parentNode && (t && n.contains(i.ownerDocument, i) && Dt(ve(i, "script")), i.parentNode.removeChild(i)));
    return this;
  }, empty: function() {
    for (var e, t = 0; (e = this[t]) != null; t++) {
      for (e.nodeType === 1 && n.cleanData(ve(e, !1)); e.firstChild; )
        e.removeChild(e.firstChild);
      e.options && n.nodeName(e, "select") && (e.options.length = 0);
    }
    return this;
  }, clone: function(e, t) {
    return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
      return n.clone(this, e, t);
    });
  }, html: function(e) {
    return n.access(this, function(t) {
      var i = this[0] || {}, r = 0, o = this.length;
      if (t === l)
        return i.nodeType === 1 ? i.innerHTML.replace(ni, "") : l;
      if (!(typeof t != "string" || ri.test(t) || !n.support.htmlSerialize && ln.test(t) || !n.support.leadingWhitespace && kt.test(t) || He[(cn.exec(t) || ["", ""])[1].toLowerCase()])) {
        t = t.replace(un, "<$1></$2>");
        try {
          for (; o > r; r++)
            i = this[r] || {}, i.nodeType === 1 && (n.cleanData(ve(i, !1)), i.innerHTML = t);
          i = 0;
        } catch (a) {
        }
      }
      i && this.empty().append(t);
    }, null, e, arguments.length);
  }, replaceWith: function(e) {
    var t = n.isFunction(e);
    return t || typeof e == "string" || (e = n(e).not(this).detach()), this.domManip([e], !0, function(i) {
      var r = this.nextSibling, o = this.parentNode;
      o && (n(this).remove(), o.insertBefore(i, r));
    });
  }, detach: function(e) {
    return this.remove(e, !0);
  }, domManip: function(e, t, i) {
    e = I.apply([], e);
    var r, o, a, s, f, b, w = 0, v = this.length, S = this, H = v - 1, k = e[0], W = n.isFunction(k);
    if (W || !(1 >= v || typeof k != "string" || n.support.checkClone) && oi.test(k))
      return this.each(function(V) {
        var Z = S.eq(V);
        W && (e[0] = k.call(this, V, t ? Z.html() : l)), Z.domManip(e, t, i);
      });
    if (v && (b = n.buildFragment(e, this[0].ownerDocument, !1, this), r = b.firstChild, b.childNodes.length === 1 && (b = r), r)) {
      for (t = t && n.nodeName(r, "tr"), s = n.map(ve(b, "script"), pn), a = s.length; v > w; w++)
        o = b, w !== H && (o = n.clone(o, !0, !0), a && n.merge(s, ve(o, "script"))), i.call(t && n.nodeName(this[w], "table") ? ui(this[w], "tbody") : this[w], o, w);
      if (a)
        for (f = s[s.length - 1].ownerDocument, n.map(s, hn), w = 0; a > w; w++)
          o = s[w], fn.test(o.type || "") && !n._data(o, "globalEval") && n.contains(f, o) && (o.src ? n.ajax({ url: o.src, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) : n.globalEval((o.text || o.textContent || o.innerHTML || "").replace(si, "")));
      b = r = null;
    }
    return this;
  } });
  function ui(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
  }
  function pn(e) {
    var t = e.getAttributeNode("type");
    return e.type = (t && t.specified) + "/" + e.type, e;
  }
  function hn(e) {
    var t = ai.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }
  function Dt(e, t) {
    for (var i, r = 0; (i = e[r]) != null; r++)
      n._data(i, "globalEval", !t || n._data(t[r], "globalEval"));
  }
  function gn(e, t) {
    if (t.nodeType === 1 && n.hasData(e)) {
      var i, r, o, a = n._data(e), s = n._data(t, a), f = a.events;
      if (f) {
        delete s.handle, s.events = {};
        for (i in f)
          for (r = 0, o = f[i].length; o > r; r++)
            n.event.add(t, i, f[i][r]);
      }
      s.data && (s.data = n.extend({}, s.data));
    }
  }
  function ci(e, t) {
    var i, r, o;
    if (t.nodeType === 1) {
      if (i = t.nodeName.toLowerCase(), !n.support.noCloneEvent && t[n.expando]) {
        o = n._data(t);
        for (r in o.events)
          n.removeEvent(t, r, o.handle);
        t.removeAttribute(n.expando);
      }
      i === "script" && t.text !== e.text ? (pn(t).text = e.text, hn(t)) : i === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), n.support.html5Clone && e.innerHTML && !n.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : i === "input" && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : i === "option" ? t.defaultSelected = t.selected = e.defaultSelected : (i === "input" || i === "textarea") && (t.defaultValue = e.defaultValue);
    }
  }
  n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) {
    n.fn[e] = function(i) {
      for (var r, o = 0, a = [], s = n(i), f = s.length - 1; f >= o; o++)
        r = o === f ? this : this.clone(!0), n(s[o])[t](r), j.apply(a, r.get());
      return this.pushStack(a);
    };
  });
  function ve(e, t) {
    var i, r, o = 0, a = typeof e.getElementsByTagName !== h ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== h ? e.querySelectorAll(t || "*") : l;
    if (!a)
      for (a = [], i = e.childNodes || e; (r = i[o]) != null; o++)
        !t || n.nodeName(r, t) ? a.push(r) : n.merge(a, ve(r, t));
    return t === l || t && n.nodeName(e, t) ? n.merge([e], a) : a;
  }
  function di(e) {
    Nt.test(e.type) && (e.defaultChecked = e.checked);
  }
  n.extend({ clone: function(e, t, i) {
    var r, o, a, s, f, b = n.contains(e.ownerDocument, e);
    if (n.support.html5Clone || n.isXMLDoc(e) || !ln.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (At.innerHTML = e.outerHTML, At.removeChild(a = At.firstChild)), !(n.support.noCloneEvent && n.support.noCloneChecked || e.nodeType !== 1 && e.nodeType !== 11 || n.isXMLDoc(e)))
      for (r = ve(a), f = ve(e), s = 0; (o = f[s]) != null; ++s)
        r[s] && ci(o, r[s]);
    if (t)
      if (i)
        for (f = f || ve(e), r = r || ve(a), s = 0; (o = f[s]) != null; s++)
          gn(o, r[s]);
      else
        gn(e, a);
    return r = ve(a, "script"), r.length > 0 && Dt(r, !b && ve(e, "script")), r = f = o = null, a;
  }, buildFragment: function(e, t, i, r) {
    for (var o, a, s, f, b, w, v, S = e.length, H = an(t), k = [], W = 0; S > W; W++)
      if (a = e[W], a || a === 0)
        if (n.type(a) === "object")
          n.merge(k, a.nodeType ? [a] : a);
        else if (ii.test(a)) {
          for (f = f || H.appendChild(t.createElement("div")), b = (cn.exec(a) || ["", ""])[1].toLowerCase(), v = He[b] || He._default, f.innerHTML = v[1] + a.replace(un, "<$1></$2>") + v[2], o = v[0]; o--; )
            f = f.lastChild;
          if (!n.support.leadingWhitespace && kt.test(a) && k.push(t.createTextNode(kt.exec(a)[0])), !n.support.tbody)
            for (a = b !== "table" || dn.test(a) ? v[1] !== "<table>" || dn.test(a) ? 0 : f : f.firstChild, o = a && a.childNodes.length; o--; )
              n.nodeName(w = a.childNodes[o], "tbody") && !w.childNodes.length && a.removeChild(w);
          for (n.merge(k, f.childNodes), f.textContent = ""; f.firstChild; )
            f.removeChild(f.firstChild);
          f = H.lastChild;
        } else
          k.push(t.createTextNode(a));
    for (f && H.removeChild(f), n.support.appendChecked || n.grep(ve(k, "input"), di), W = 0; a = k[W++]; )
      if ((!r || n.inArray(a, r) === -1) && (s = n.contains(a.ownerDocument, a), f = ve(H.appendChild(a), "script"), s && Dt(f), i))
        for (o = 0; a = f[o++]; )
          fn.test(a.type || "") && i.push(a);
    return f = null, H;
  }, cleanData: function(e, t) {
    for (var i, r, o, a, s = 0, f = n.expando, b = n.cache, w = n.support.deleteExpando, v = n.event.special; (i = e[s]) != null; s++)
      if ((t || n.acceptData(i)) && (o = i[f], a = o && b[o])) {
        if (a.events)
          for (r in a.events)
            v[r] ? n.event.remove(i, r) : n.removeEvent(i, r, a.handle);
        b[o] && (delete b[o], w ? delete i[f] : typeof i.removeAttribute !== h ? i.removeAttribute(f) : i[f] = null, q.push(o));
      }
  } });
  var et, _e, ze, It = /alpha\\([^)]*\\)/i, fi = /opacity\\s*=\\s*([^)]*)/, pi = /^(top|right|bottom|left)$/, hi = /^(none|table(?!-c[ea]).+)/, mn = /^margin/, gi = RegExp("^(" + ce + ")(.*)$", "i"), ct = RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"), mi = RegExp("^([+-])=(" + ce + ")", "i"), yn = { BODY: "block" }, yi = { position: "absolute", visibility: "hidden", display: "block" }, vn = { letterSpacing: 0, fontWeight: 400 }, Qe = ["Top", "Right", "Bottom", "Left"], bn = ["Webkit", "O", "Moz", "ms"];
  function xn(e, t) {
    if (t in e)
      return t;
    for (var i = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = bn.length; o--; )
      if (t = bn[o] + i, t in e)
        return t;
    return r;
  }
  function tt(e, t) {
    return e = t || e, n.css(e, "display") === "none" || !n.contains(e.ownerDocument, e);
  }
  function wn(e, t) {
    for (var i, r, o, a = [], s = 0, f = e.length; f > s; s++)
      r = e[s], r.style && (a[s] = n._data(r, "olddisplay"), i = r.style.display, t ? (a[s] || i !== "none" || (r.style.display = ""), r.style.display === "" && tt(r) && (a[s] = n._data(r, "olddisplay", En(r.nodeName)))) : a[s] || (o = tt(r), (i && i !== "none" || !o) && n._data(r, "olddisplay", o ? i : n.css(r, "display"))));
    for (s = 0; f > s; s++)
      r = e[s], r.style && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? a[s] || "" : "none"));
    return e;
  }
  n.fn.extend({ css: function(e, t) {
    return n.access(this, function(i, r, o) {
      var a, s, f = {}, b = 0;
      if (n.isArray(r)) {
        for (s = _e(i), a = r.length; a > b; b++)
          f[r[b]] = n.css(i, r[b], !1, s);
        return f;
      }
      return o !== l ? n.style(i, r, o) : n.css(i, r);
    }, e, t, arguments.length > 1);
  }, show: function() {
    return wn(this, !0);
  }, hide: function() {
    return wn(this);
  }, toggle: function(e) {
    var t = typeof e == "boolean";
    return this.each(function() {
      (t ? e : tt(this)) ? n(this).show() : n(this).hide();
    });
  } }), n.extend({ cssHooks: { opacity: { get: function(e, t) {
    if (t) {
      var i = ze(e, "opacity");
      return i === "" ? "1" : i;
    }
  } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: n.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, i, r) {
    if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
      var o, a, s, f = n.camelCase(t), b = e.style;
      if (t = n.cssProps[f] || (n.cssProps[f] = xn(b, f)), s = n.cssHooks[t] || n.cssHooks[f], i === l)
        return s && "get" in s && (o = s.get(e, !1, r)) !== l ? o : b[t];
      if (a = typeof i, a === "string" && (o = mi.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(n.css(e, t)), a = "number"), !(i == null || a === "number" && isNaN(i) || (a !== "number" || n.cssNumber[f] || (i += "px"), n.support.clearCloneStyle || i !== "" || t.indexOf("background") !== 0 || (b[t] = "inherit"), s && "set" in s && (i = s.set(e, i, r)) === l)))
        try {
          b[t] = i;
        } catch (w) {
        }
    }
  }, css: function(e, t, i, r) {
    var o, a, s, f = n.camelCase(t);
    return t = n.cssProps[f] || (n.cssProps[f] = xn(e.style, f)), s = n.cssHooks[t] || n.cssHooks[f], s && "get" in s && (a = s.get(e, !0, i)), a === l && (a = ze(e, t, r)), a === "normal" && t in vn && (a = vn[t]), i === "" || i ? (o = parseFloat(a), i === !0 || n.isNumeric(o) ? o || 0 : a) : a;
  }, swap: function(e, t, i, r) {
    var o, a, s = {};
    for (a in t)
      s[a] = e.style[a], e.style[a] = t[a];
    o = i.apply(e, r || []);
    for (a in t)
      e.style[a] = s[a];
    return o;
  } }), u.getComputedStyle ? (_e = function(e) {
    return u.getComputedStyle(e, null);
  }, ze = function(e, t, i) {
    var r, o, a, s = i || _e(e), f = s ? s.getPropertyValue(t) || s[t] : l, b = e.style;
    return s && (f !== "" || n.contains(e.ownerDocument, e) || (f = n.style(e, t)), ct.test(f) && mn.test(t) && (r = b.width, o = b.minWidth, a = b.maxWidth, b.minWidth = b.maxWidth = b.width = f, f = s.width, b.width = r, b.minWidth = o, b.maxWidth = a)), f;
  }) : y.documentElement.currentStyle && (_e = function(e) {
    return e.currentStyle;
  }, ze = function(e, t, i) {
    var r, o, a, s = i || _e(e), f = s ? s[t] : l, b = e.style;
    return f == null && b && b[t] && (f = b[t]), ct.test(f) && !pi.test(t) && (r = b.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), b.left = t === "fontSize" ? "1em" : f, f = b.pixelLeft + "px", b.left = r, a && (o.left = a)), f === "" ? "auto" : f;
  });
  function Cn(e, t, i) {
    var r = gi.exec(t);
    return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t;
  }
  function Tn(e, t, i, r, o) {
    for (var a = i === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, s = 0; 4 > a; a += 2)
      i === "margin" && (s += n.css(e, i + Qe[a], !0, o)), r ? (i === "content" && (s -= n.css(e, "padding" + Qe[a], !0, o)), i !== "margin" && (s -= n.css(e, "border" + Qe[a] + "Width", !0, o))) : (s += n.css(e, "padding" + Qe[a], !0, o), i !== "padding" && (s += n.css(e, "border" + Qe[a] + "Width", !0, o)));
    return s;
  }
  function Pn(e, t, i) {
    var r = !0, o = t === "width" ? e.offsetWidth : e.offsetHeight, a = _e(e), s = n.support.boxSizing && n.css(e, "boxSizing", !1, a) === "border-box";
    if (0 >= o || o == null) {
      if (o = ze(e, t, a), (0 > o || o == null) && (o = e.style[t]), ct.test(o))
        return o;
      r = s && (n.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0;
    }
    return o + Tn(e, t, i || (s ? "border" : "content"), r, a) + "px";
  }
  function En(e) {
    var t = y, i = yn[e];
    return i || (i = Hn(e, t), i !== "none" && i || (et = (et || n("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (et[0].contentWindow || et[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), i = Hn(e, t), et.detach()), yn[e] = i), i;
  }
  function Hn(e, t) {
    var i = n(t.createElement(e)).appendTo(t.body), r = n.css(i[0], "display");
    return i.remove(), r;
  }
  n.each(["height", "width"], function(e, t) {
    n.cssHooks[t] = { get: function(i, r, o) {
      return r ? i.offsetWidth === 0 && hi.test(n.css(i, "display")) ? n.swap(i, yi, function() {
        return Pn(i, t, o);
      }) : Pn(i, t, o) : l;
    }, set: function(i, r, o) {
      var a = o && _e(i);
      return Cn(i, r, o ? Tn(i, t, o, n.support.boxSizing && n.css(i, "boxSizing", !1, a) === "border-box", a) : 0);
    } };
  }), n.support.opacity || (n.cssHooks.opacity = { get: function(e, t) {
    return fi.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
  }, set: function(e, t) {
    var i = e.style, r = e.currentStyle, o = n.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", a = r && r.filter || i.filter || "";
    i.zoom = 1, (t >= 1 || t === "") && n.trim(a.replace(It, "")) === "" && i.removeAttribute && (i.removeAttribute("filter"), t === "" || r && !r.filter) || (i.filter = It.test(a) ? a.replace(It, o) : a + " " + o);
  } }), n(function() {
    n.support.reliableMarginRight || (n.cssHooks.marginRight = { get: function(e, t) {
      return t ? n.swap(e, { display: "inline-block" }, ze, [e, "marginRight"]) : l;
    } }), !n.support.pixelPosition && n.fn.position && n.each(["top", "left"], function(e, t) {
      n.cssHooks[t] = { get: function(i, r) {
        return r ? (r = ze(i, t), ct.test(r) ? n(i).position()[t] + "px" : r) : l;
      } };
    });
  }), n.expr && n.expr.filters && (n.expr.filters.hidden = function(e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !n.support.reliableHiddenOffsets && (e.style && e.style.display || n.css(e, "display")) === "none";
  }, n.expr.filters.visible = function(e) {
    return !n.expr.filters.hidden(e);
  }), n.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
    n.cssHooks[e + t] = { expand: function(i) {
      for (var r = 0, o = {}, a = typeof i == "string" ? i.split(" ") : [i]; 4 > r; r++)
        o[e + Qe[r] + t] = a[r] || a[r - 2] || a[0];
      return o;
    } }, mn.test(e) || (n.cssHooks[e + t].set = Cn);
  });
  var vi = /%20/g, bi = /\\[\\]$/, Sn = /\\r?\\n/g, xi = /^(?:submit|button|image|reset|file)$/i, wi = /^(?:input|select|textarea|keygen)/i;
  n.fn.extend({ serialize: function() {
    return n.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e = n.prop(this, "elements");
      return e ? n.makeArray(e) : this;
    }).filter(function() {
      var e = this.type;
      return this.name && !n(this).is(":disabled") && wi.test(this.nodeName) && !xi.test(e) && (this.checked || !Nt.test(e));
    }).map(function(e, t) {
      var i = n(this).val();
      return i == null ? null : n.isArray(i) ? n.map(i, function(r) {
        return { name: t.name, value: r.replace(Sn, \`\\r
\`) };
      }) : { name: t.name, value: i.replace(Sn, \`\\r
\`) };
    }).get();
  } }), n.param = function(e, t) {
    var i, r = [], o = function(a, s) {
      s = n.isFunction(s) ? s() : s == null ? "" : s, r[r.length] = encodeURIComponent(a) + "=" + encodeURIComponent(s);
    };
    if (t === l && (t = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(e) || e.jquery && !n.isPlainObject(e))
      n.each(e, function() {
        o(this.name, this.value);
      });
    else
      for (i in e)
        Lt(i, e[i], t, o);
    return r.join("&").replace(vi, "+");
  };
  function Lt(e, t, i, r) {
    var o;
    if (n.isArray(t))
      n.each(t, function(a, s) {
        i || bi.test(e) ? r(e, s) : Lt(e + "[" + (typeof s == "object" ? a : "") + "]", s, i, r);
      });
    else if (i || n.type(t) !== "object")
      r(e, t);
    else
      for (o in t)
        Lt(e + "[" + o + "]", t[o], i, r);
  }
  n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    n.fn[t] = function(i, r) {
      return arguments.length > 0 ? this.on(t, null, i, r) : this.trigger(t);
    };
  }), n.fn.hover = function(e, t) {
    return this.mouseenter(e).mouseleave(t || e);
  };
  var Xe, Ie, jt = n.now(), Ft = /\\?/, Ci = /#.*$/, kn = /([?&])_=[^&]*/, Ti = /^(.*?):[ \\t]*([^\\r\\n]*)\\r?$/gm, Pi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ei = /^(?:GET|HEAD)$/, Hi = /^\\/\\//, Nn = /^([\\w.+-]+:)(?:\\/\\/([^\\/?#:]*)(?::(\\d+)|)|)/, An = n.fn.load, Dn = {}, Ot = {}, In = "*/".concat("*");
  try {
    Ie = C.href;
  } catch (e) {
    Ie = y.createElement("a"), Ie.href = "", Ie = Ie.href;
  }
  Xe = Nn.exec(Ie.toLowerCase()) || [];
  function Ln(e) {
    return function(t, i) {
      typeof t != "string" && (i = t, t = "*");
      var r, o = 0, a = t.toLowerCase().match(re) || [];
      if (n.isFunction(i))
        for (; r = a[o++]; )
          r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(i)) : (e[r] = e[r] || []).push(i);
    };
  }
  function jn(e, t, i, r) {
    var o = {}, a = e === Ot;
    function s(f) {
      var b;
      return o[f] = !0, n.each(e[f] || [], function(w, v) {
        var S = v(t, i, r);
        return typeof S != "string" || a || o[S] ? a ? !(b = S) : l : (t.dataTypes.unshift(S), s(S), !1);
      }), b;
    }
    return s(t.dataTypes[0]) || !o["*"] && s("*");
  }
  function qt(e, t) {
    var i, r, o = n.ajaxSettings.flatOptions || {};
    for (r in t)
      t[r] !== l && ((o[r] ? e : i || (i = {}))[r] = t[r]);
    return i && n.extend(!0, e, i), e;
  }
  n.fn.load = function(e, t, i) {
    if (typeof e != "string" && An)
      return An.apply(this, arguments);
    var r, o, a, s = this, f = e.indexOf(" ");
    return f >= 0 && (r = e.slice(f, e.length), e = e.slice(0, f)), n.isFunction(t) ? (i = t, t = l) : t && typeof t == "object" && (a = "POST"), s.length > 0 && n.ajax({ url: e, type: a, dataType: "html", data: t }).done(function(b) {
      o = arguments, s.html(r ? n("<div>").append(n.parseHTML(b)).find(r) : b);
    }).complete(i && function(b, w) {
      s.each(i, o || [b.responseText, w, b]);
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    n.fn[t] = function(i) {
      return this.on(t, i);
    };
  }), n.each(["get", "post"], function(e, t) {
    n[t] = function(i, r, o, a) {
      return n.isFunction(r) && (a = a || o, o = r, r = l), n.ajax({ url: i, type: t, dataType: a, data: r, success: o });
    };
  }), n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ie, type: "GET", isLocal: Pi.test(Xe[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": In, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": u.String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
    return t ? qt(qt(e, n.ajaxSettings), t) : qt(n.ajaxSettings, e);
  }, ajaxPrefilter: Ln(Dn), ajaxTransport: Ln(Ot), ajax: function(e, t) {
    typeof e == "object" && (t = e, e = l), t = t || {};
    var i, r, o, a, s, f, b, w, v = n.ajaxSetup({}, t), S = v.context || v, H = v.context && (S.nodeType || S.jquery) ? n(S) : n.event, k = n.Deferred(), W = n.Callbacks("once memory"), V = v.statusCode || {}, Z = {}, be = {}, xe = 0, oe = "canceled", U = { readyState: 0, getResponseHeader: function(J) {
      var de;
      if (xe === 2) {
        if (!w)
          for (w = {}; de = Ti.exec(a); )
            w[de[1].toLowerCase()] = de[2];
        de = w[J.toLowerCase()];
      }
      return de == null ? null : de;
    }, getAllResponseHeaders: function() {
      return xe === 2 ? a : null;
    }, setRequestHeader: function(J, de) {
      var Le = J.toLowerCase();
      return xe || (J = be[Le] = be[Le] || J, Z[J] = de), this;
    }, overrideMimeType: function(J) {
      return xe || (v.mimeType = J), this;
    }, statusCode: function(J) {
      var de;
      if (J)
        if (2 > xe)
          for (de in J)
            V[de] = [V[de], J[de]];
        else
          U.always(J[U.status]);
      return this;
    }, abort: function(J) {
      var de = J || oe;
      return b && b.abort(de), le(0, de), this;
    } };
    if (k.promise(U).complete = W.add, U.success = U.done, U.error = U.fail, v.url = ((e || v.url || Ie) + "").replace(Ci, "").replace(Hi, Xe[1] + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = n.trim(v.dataType || "*").toLowerCase().match(re) || [""], v.crossDomain == null && (i = Nn.exec(v.url.toLowerCase()), v.crossDomain = !(!i || i[1] === Xe[1] && i[2] === Xe[2] && (i[3] || (i[1] === "http:" ? 80 : 443)) == (Xe[3] || (Xe[1] === "http:" ? 80 : 443)))), v.data && v.processData && typeof v.data != "string" && (v.data = n.param(v.data, v.traditional)), jn(Dn, v, t, U), xe === 2)
      return U;
    f = v.global, f && n.active++ === 0 && n.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ei.test(v.type), o = v.url, v.hasContent || (v.data && (o = v.url += (Ft.test(o) ? "&" : "?") + v.data, delete v.data), v.cache === !1 && (v.url = kn.test(o) ? o.replace(kn, "$1_=" + jt++) : o + (Ft.test(o) ? "&" : "?") + "_=" + jt++)), v.ifModified && (n.lastModified[o] && U.setRequestHeader("If-Modified-Since", n.lastModified[o]), n.etag[o] && U.setRequestHeader("If-None-Match", n.etag[o])), (v.data && v.hasContent && v.contentType !== !1 || t.contentType) && U.setRequestHeader("Content-Type", v.contentType), U.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + (v.dataTypes[0] !== "*" ? ", " + In + "; q=0.01" : "") : v.accepts["*"]);
    for (r in v.headers)
      U.setRequestHeader(r, v.headers[r]);
    if (v.beforeSend && (v.beforeSend.call(S, U, v) === !1 || xe === 2))
      return U.abort();
    oe = "abort";
    for (r in { success: 1, error: 1, complete: 1 })
      U[r](v[r]);
    if (b = jn(Ot, v, t, U)) {
      U.readyState = 1, f && H.trigger("ajaxSend", [U, v]), v.async && v.timeout > 0 && (s = setTimeout(function() {
        U.abort("timeout");
      }, v.timeout));
      try {
        xe = 1, b.send(Z, le);
      } catch (J) {
        if (!(2 > xe))
          throw J;
        le(-1, J);
      }
    } else
      le(-1, "No Transport");
    function le(J, de, Le, ht) {
      var Pe, Ee, je, $e, Fe, he = de;
      xe !== 2 && (xe = 2, s && clearTimeout(s), b = l, a = ht || "", U.readyState = J > 0 ? 4 : 0, Le && ($e = Si(v, U, Le)), J >= 200 && 300 > J || J === 304 ? (v.ifModified && (Fe = U.getResponseHeader("Last-Modified"), Fe && (n.lastModified[o] = Fe), Fe = U.getResponseHeader("etag"), Fe && (n.etag[o] = Fe)), J === 204 ? (Pe = !0, he = "nocontent") : J === 304 ? (Pe = !0, he = "notmodified") : (Pe = ki(v, $e), he = Pe.state, Ee = Pe.data, je = Pe.error, Pe = !je)) : (je = he, (J || !he) && (he = "error", 0 > J && (J = 0))), U.status = J, U.statusText = (de || he) + "", Pe ? k.resolveWith(S, [Ee, he, U]) : k.rejectWith(S, [U, he, je]), U.statusCode(V), V = l, f && H.trigger(Pe ? "ajaxSuccess" : "ajaxError", [U, v, Pe ? Ee : je]), W.fireWith(S, [U, he]), f && (H.trigger("ajaxComplete", [U, v]), --n.active || n.event.trigger("ajaxStop")));
    }
    return U;
  }, getScript: function(e, t) {
    return n.get(e, l, t, "script");
  }, getJSON: function(e, t, i) {
    return n.get(e, t, i, "json");
  } });
  function Si(e, t, i) {
    var r, o, a, s, f = e.contents, b = e.dataTypes, w = e.responseFields;
    for (s in w)
      s in i && (t[w[s]] = i[s]);
    for (; b[0] === "*"; )
      b.shift(), o === l && (o = e.mimeType || t.getResponseHeader("Content-Type"));
    if (o) {
      for (s in f)
        if (f[s] && f[s].test(o)) {
          b.unshift(s);
          break;
        }
    }
    if (b[0] in i)
      a = b[0];
    else {
      for (s in i) {
        if (!b[0] || e.converters[s + " " + b[0]]) {
          a = s;
          break;
        }
        r || (r = s);
      }
      a = a || r;
    }
    return a ? (a !== b[0] && b.unshift(a), i[a]) : l;
  }
  function ki(e, t) {
    var i, r, o, a, s = {}, f = 0, b = e.dataTypes.slice(), w = b[0];
    if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), b[1])
      for (o in e.converters)
        s[o.toLowerCase()] = e.converters[o];
    for (; r = b[++f]; )
      if (r !== "*") {
        if (w !== "*" && w !== r) {
          if (o = s[w + " " + r] || s["* " + r], !o) {
            for (i in s)
              if (a = i.split(" "), a[1] === r && (o = s[w + " " + a[0]] || s["* " + a[0]])) {
                o === !0 ? o = s[i] : s[i] !== !0 && (r = a[0], b.splice(f--, 0, r));
                break;
              }
          }
          if (o !== !0)
            if (o && e.throws)
              t = o(t);
            else
              try {
                t = o(t);
              } catch (v) {
                return { state: "parsererror", error: o ? v : "No conversion from " + w + " to " + r };
              }
        }
        w = r;
      }
    return { state: "success", data: t };
  }
  n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) {
    return n.globalEval(e), e;
  } } }), n.ajaxPrefilter("script", function(e) {
    e.cache === l && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), n.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, i = y.head || n("head")[0] || y.documentElement;
      return { send: function(r, o) {
        t = y.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(a, s) {
          (s || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, s || o(200, "success"));
        }, i.insertBefore(t, i.firstChild);
      }, abort: function() {
        t && t.onload(l, !0);
      } };
    }
  });
  var Fn = [], Mt = /(=)\\?(?=&|$)|\\?\\?/;
  n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e = Fn.pop() || n.expando + "_" + jt++;
    return this[e] = !0, e;
  } }), n.ajaxPrefilter("json jsonp", function(e, t, i) {
    var r, o, a, s = e.jsonp !== !1 && (Mt.test(e.url) ? "url" : typeof e.data == "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(e.data) && "data");
    return s || e.dataTypes[0] === "jsonp" ? (r = e.jsonpCallback = n.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Mt, "$1" + r) : e.jsonp !== !1 && (e.url += (Ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
      return a || n.error(r + " was not called"), a[0];
    }, e.dataTypes[0] = "json", o = u[r], u[r] = function() {
      a = arguments;
    }, i.always(function() {
      u[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Fn.push(r)), a && n.isFunction(o) && o(a[0]), a = o = l;
    }), "script") : l;
  });
  var Je, Ge, Ni = 0, Bt = u.ActiveXObject && function() {
    var e;
    for (e in Je)
      Je[e](l, !0);
  };
  function On() {
    try {
      return new u.XMLHttpRequest();
    } catch (e) {
    }
  }
  function Ai() {
    try {
      return new u.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
  n.ajaxSettings.xhr = u.ActiveXObject ? function() {
    return !this.isLocal && On() || Ai();
  } : On, Ge = n.ajaxSettings.xhr(), n.support.cors = !!Ge && "withCredentials" in Ge, Ge = n.support.ajax = !!Ge, Ge && n.ajaxTransport(function(e) {
    if (!e.crossDomain || n.support.cors) {
      var t;
      return { send: function(i, r) {
        var o, a, s = e.xhr();
        if (e.username ? s.open(e.type, e.url, e.async, e.username, e.password) : s.open(e.type, e.url, e.async), e.xhrFields)
          for (a in e.xhrFields)
            s[a] = e.xhrFields[a];
        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
        try {
          for (a in i)
            s.setRequestHeader(a, i[a]);
        } catch (f) {
        }
        s.send(e.hasContent && e.data || null), t = function(f, b) {
          var w, v, S, H;
          try {
            if (t && (b || s.readyState === 4))
              if (t = l, o && (s.onreadystatechange = n.noop, Bt && delete Je[o]), b)
                s.readyState !== 4 && s.abort();
              else {
                H = {}, w = s.status, v = s.getAllResponseHeaders(), typeof s.responseText == "string" && (H.text = s.responseText);
                try {
                  S = s.statusText;
                } catch (k) {
                  S = "";
                }
                w || !e.isLocal || e.crossDomain ? w === 1223 && (w = 204) : w = H.text ? 200 : 404;
              }
          } catch (k) {
            b || r(-1, k);
          }
          H && r(w, S, H, v);
        }, e.async ? s.readyState === 4 ? setTimeout(t) : (o = ++Ni, Bt && (Je || (Je = {}, n(u).unload(Bt)), Je[o] = t), s.onreadystatechange = t) : t();
      }, abort: function() {
        t && t(l, !0);
      } };
    }
  });
  var Ke, dt, Di = /^(?:toggle|show|hide)$/, Ii = RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"), Li = /queueHooks$/, ft = [Oi], nt = { "*": [function(e, t) {
    var i, r, o = this.createTween(e, t), a = Ii.exec(t), s = o.cur(), f = +s || 0, b = 1, w = 20;
    if (a) {
      if (i = +a[2], r = a[3] || (n.cssNumber[e] ? "" : "px"), r !== "px" && f) {
        f = n.css(o.elem, e, !0) || i || 1;
        do
          b = b || ".5", f /= b, n.style(o.elem, e, f + r);
        while (b !== (b = o.cur() / s) && b !== 1 && --w);
      }
      o.unit = r, o.start = f, o.end = a[1] ? f + (a[1] + 1) * i : i;
    }
    return o;
  }] };
  function qn() {
    return setTimeout(function() {
      Ke = l;
    }), Ke = n.now();
  }
  function ji(e, t) {
    n.each(t, function(i, r) {
      for (var o = (nt[i] || []).concat(nt["*"]), a = 0, s = o.length; s > a; a++)
        if (o[a].call(e, i, r))
          return;
    });
  }
  function Mn(e, t, i) {
    var r, o, a = 0, s = ft.length, f = n.Deferred().always(function() {
      delete b.elem;
    }), b = function() {
      if (o)
        return !1;
      for (var S = Ke || qn(), H = Math.max(0, w.startTime + w.duration - S), k = H / w.duration || 0, W = 1 - k, V = 0, Z = w.tweens.length; Z > V; V++)
        w.tweens[V].run(W);
      return f.notifyWith(e, [w, W, H]), 1 > W && Z ? H : (f.resolveWith(e, [w]), !1);
    }, w = f.promise({ elem: e, props: n.extend({}, t), opts: n.extend(!0, { specialEasing: {} }, i), originalProperties: t, originalOptions: i, startTime: Ke || qn(), duration: i.duration, tweens: [], createTween: function(S, H) {
      var k = n.Tween(e, w.opts, S, H, w.opts.specialEasing[S] || w.opts.easing);
      return w.tweens.push(k), k;
    }, stop: function(S) {
      var H = 0, k = S ? w.tweens.length : 0;
      if (o)
        return this;
      for (o = !0; k > H; H++)
        w.tweens[H].run(1);
      return S ? f.resolveWith(e, [w, S]) : f.rejectWith(e, [w, S]), this;
    } }), v = w.props;
    for (Fi(v, w.opts.specialEasing); s > a; a++)
      if (r = ft[a].call(w, e, v, w.opts))
        return r;
    return ji(w, v), n.isFunction(w.opts.start) && w.opts.start.call(e, w), n.fx.timer(n.extend(b, { elem: e, anim: w, queue: w.opts.queue })), w.progress(w.opts.progress).done(w.opts.done, w.opts.complete).fail(w.opts.fail).always(w.opts.always);
  }
  function Fi(e, t) {
    var i, r, o, a, s;
    for (o in e)
      if (r = n.camelCase(o), a = t[r], i = e[o], n.isArray(i) && (a = i[1], i = e[o] = i[0]), o !== r && (e[r] = i, delete e[o]), s = n.cssHooks[r], s && "expand" in s) {
        i = s.expand(i), delete e[r];
        for (o in i)
          o in e || (e[o] = i[o], t[o] = a);
      } else
        t[r] = a;
  }
  n.Animation = n.extend(Mn, { tweener: function(e, t) {
    n.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
    for (var i, r = 0, o = e.length; o > r; r++)
      i = e[r], nt[i] = nt[i] || [], nt[i].unshift(t);
  }, prefilter: function(e, t) {
    t ? ft.unshift(e) : ft.push(e);
  } });
  function Oi(e, t, i) {
    var r, o, a, s, f, b, w, v, S, H = this, k = e.style, W = {}, V = [], Z = e.nodeType && tt(e);
    i.queue || (v = n._queueHooks(e, "fx"), v.unqueued == null && (v.unqueued = 0, S = v.empty.fire, v.empty.fire = function() {
      v.unqueued || S();
    }), v.unqueued++, H.always(function() {
      H.always(function() {
        v.unqueued--, n.queue(e, "fx").length || v.empty.fire();
      });
    })), e.nodeType === 1 && ("height" in t || "width" in t) && (i.overflow = [k.overflow, k.overflowX, k.overflowY], n.css(e, "display") === "inline" && n.css(e, "float") === "none" && (n.support.inlineBlockNeedsLayout && En(e.nodeName) !== "inline" ? k.zoom = 1 : k.display = "inline-block")), i.overflow && (k.overflow = "hidden", n.support.shrinkWrapBlocks || H.always(function() {
      k.overflow = i.overflow[0], k.overflowX = i.overflow[1], k.overflowY = i.overflow[2];
    }));
    for (o in t)
      if (s = t[o], Di.exec(s)) {
        if (delete t[o], b = b || s === "toggle", s === (Z ? "hide" : "show"))
          continue;
        V.push(o);
      }
    if (a = V.length)
      for (f = n._data(e, "fxshow") || n._data(e, "fxshow", {}), ("hidden" in f) && (Z = f.hidden), b && (f.hidden = !Z), Z ? n(e).show() : H.done(function() {
        n(e).hide();
      }), H.done(function() {
        var be;
        n._removeData(e, "fxshow");
        for (be in W)
          n.style(e, be, W[be]);
      }), o = 0; a > o; o++)
        r = V[o], w = H.createTween(r, Z ? f[r] : 0), W[r] = f[r] || n.style(e, r), r in f || (f[r] = w.start, Z && (w.end = w.start, w.start = r === "width" || r === "height" ? 1 : 0));
  }
  function Te(e, t, i, r, o) {
    return new Te.prototype.init(e, t, i, r, o);
  }
  n.Tween = Te, Te.prototype = { constructor: Te, init: function(e, t, i, r, o, a) {
    this.elem = e, this.prop = i, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (n.cssNumber[i] ? "" : "px");
  }, cur: function() {
    var e = Te.propHooks[this.prop];
    return e && e.get ? e.get(this) : Te.propHooks._default.get(this);
  }, run: function(e) {
    var t, i = Te.propHooks[this.prop];
    return this.pos = t = this.options.duration ? n.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Te.propHooks._default.set(this), this;
  } }, Te.prototype.init.prototype = Te.prototype, Te.propHooks = { _default: { get: function(e) {
    var t;
    return e.elem[e.prop] == null || e.elem.style && e.elem.style[e.prop] != null ? (t = n.css(e.elem, e.prop, ""), t && t !== "auto" ? t : 0) : e.elem[e.prop];
  }, set: function(e) {
    n.fx.step[e.prop] ? n.fx.step[e.prop](e) : e.elem.style && (e.elem.style[n.cssProps[e.prop]] != null || n.cssHooks[e.prop]) ? n.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
  } } }, Te.propHooks.scrollTop = Te.propHooks.scrollLeft = { set: function(e) {
    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
  } }, n.each(["toggle", "show", "hide"], function(e, t) {
    var i = n.fn[t];
    n.fn[t] = function(r, o, a) {
      return r == null || typeof r == "boolean" ? i.apply(this, arguments) : this.animate(pt(t, !0), r, o, a);
    };
  }), n.fn.extend({ fadeTo: function(e, t, i, r) {
    return this.filter(tt).css("opacity", 0).show().end().animate({ opacity: t }, e, i, r);
  }, animate: function(e, t, i, r) {
    var o = n.isEmptyObject(e), a = n.speed(t, i, r), s = function() {
      var f = Mn(this, n.extend({}, e), a);
      s.finish = function() {
        f.stop(!0);
      }, (o || n._data(this, "finish")) && f.stop(!0);
    };
    return s.finish = s, o || a.queue === !1 ? this.each(s) : this.queue(a.queue, s);
  }, stop: function(e, t, i) {
    var r = function(o) {
      var a = o.stop;
      delete o.stop, a(i);
    };
    return typeof e != "string" && (i = t, t = e, e = l), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
      var o = !0, a = e != null && e + "queueHooks", s = n.timers, f = n._data(this);
      if (a)
        f[a] && f[a].stop && r(f[a]);
      else
        for (a in f)
          f[a] && f[a].stop && Li.test(a) && r(f[a]);
      for (a = s.length; a--; )
        s[a].elem !== this || e != null && s[a].queue !== e || (s[a].anim.stop(i), o = !1, s.splice(a, 1));
      (o || !i) && n.dequeue(this, e);
    });
  }, finish: function(e) {
    return e !== !1 && (e = e || "fx"), this.each(function() {
      var t, i = n._data(this), r = i[e + "queue"], o = i[e + "queueHooks"], a = n.timers, s = r ? r.length : 0;
      for (i.finish = !0, n.queue(this, e, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), t = a.length; t--; )
        a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
      for (t = 0; s > t; t++)
        r[t] && r[t].finish && r[t].finish.call(this);
      delete i.finish;
    });
  } });
  function pt(e, t) {
    var i, r = { height: e }, o = 0;
    for (t = t ? 1 : 0; 4 > o; o += 2 - t)
      i = Qe[o], r["margin" + i] = r["padding" + i] = e;
    return t && (r.opacity = r.width = e), r;
  }
  n.each({ slideDown: pt("show"), slideUp: pt("hide"), slideToggle: pt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) {
    n.fn[e] = function(i, r, o) {
      return this.animate(t, i, r, o);
    };
  }), n.speed = function(e, t, i) {
    var r = e && typeof e == "object" ? n.extend({}, e) : { complete: i || !i && t || n.isFunction(e) && e, duration: e, easing: i && t || t && !n.isFunction(t) && t };
    return r.duration = n.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in n.fx.speeds ? n.fx.speeds[r.duration] : n.fx.speeds._default, (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
      n.isFunction(r.old) && r.old.call(this), r.queue && n.dequeue(this, r.queue);
    }, r;
  }, n.easing = { linear: function(e) {
    return e;
  }, swing: function(e) {
    return 0.5 - Math.cos(e * Math.PI) / 2;
  } }, n.timers = [], n.fx = Te.prototype.init, n.fx.tick = function() {
    var e, t = n.timers, i = 0;
    for (Ke = n.now(); t.length > i; i++)
      e = t[i], e() || t[i] !== e || t.splice(i--, 1);
    t.length || n.fx.stop(), Ke = l;
  }, n.fx.timer = function(e) {
    e() && n.timers.push(e) && n.fx.start();
  }, n.fx.interval = 13, n.fx.start = function() {
    dt || (dt = setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function() {
    clearInterval(dt), dt = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fx.step = {}, n.expr && n.expr.filters && (n.expr.filters.animated = function(e) {
    return n.grep(n.timers, function(t) {
      return e === t.elem;
    }).length;
  }), n.fn.offset = function(e) {
    if (arguments.length)
      return e === l ? this : this.each(function(s) {
        n.offset.setOffset(this, e, s);
      });
    var t, i, r = { top: 0, left: 0 }, o = this[0], a = o && o.ownerDocument;
    if (a)
      return t = a.documentElement, n.contains(t, o) ? (typeof o.getBoundingClientRect !== h && (r = o.getBoundingClientRect()), i = Bn(a), { top: r.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: r.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : r;
  }, n.offset = { setOffset: function(e, t, i) {
    var r = n.css(e, "position");
    r === "static" && (e.style.position = "relative");
    var o = n(e), a = o.offset(), s = n.css(e, "top"), f = n.css(e, "left"), b = (r === "absolute" || r === "fixed") && n.inArray("auto", [s, f]) > -1, w = {}, v = {}, S, H;
    b ? (v = o.position(), S = v.top, H = v.left) : (S = parseFloat(s) || 0, H = parseFloat(f) || 0), n.isFunction(t) && (t = t.call(e, i, a)), t.top != null && (w.top = t.top - a.top + S), t.left != null && (w.left = t.left - a.left + H), "using" in t ? t.using.call(e, w) : o.css(w);
  } }, n.fn.extend({ position: function() {
    if (this[0]) {
      var e, t, i = { top: 0, left: 0 }, r = this[0];
      return n.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), n.nodeName(e[0], "html") || (i = e.offset()), i.top += n.css(e[0], "borderTopWidth", !0), i.left += n.css(e[0], "borderLeftWidth", !0)), { top: t.top - i.top - n.css(r, "marginTop", !0), left: t.left - i.left - n.css(r, "marginLeft", !0) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      for (var e = this.offsetParent || y.documentElement; e && !n.nodeName(e, "html") && n.css(e, "position") === "static"; )
        e = e.offsetParent;
      return e || y.documentElement;
    });
  } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
    var i = /Y/.test(t);
    n.fn[e] = function(r) {
      return n.access(this, function(o, a, s) {
        var f = Bn(o);
        return s === l ? f ? t in f ? f[t] : f.document.documentElement[a] : o[a] : (f ? f.scrollTo(i ? n(f).scrollLeft() : s, i ? s : n(f).scrollTop()) : o[a] = s, l);
      }, e, r, arguments.length, null);
    };
  });
  function Bn(e) {
    return n.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
  }
  n.each({ Height: "height", Width: "width" }, function(e, t) {
    n.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(i, r) {
      n.fn[r] = function(o, a) {
        var s = arguments.length && (i || typeof o != "boolean"), f = i || (o === !0 || a === !0 ? "margin" : "border");
        return n.access(this, function(b, w, v) {
          var S;
          return n.isWindow(b) ? b.document.documentElement["client" + e] : b.nodeType === 9 ? (S = b.documentElement, Math.max(b.body["scroll" + e], S["scroll" + e], b.body["offset" + e], S["offset" + e], S["client" + e])) : v === l ? n.css(b, w, f) : n.style(b, w, v, f);
        }, t, s ? o : l, s, null);
      };
    });
  }), u.jQuery = u.$ = n, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
    return n;
  });
})(window);
var $n = window.H5P = window.H5P || {};
$n.jQuery = jQuery.noConflict(!0);
$n.jQuery.ajaxPrefilter(function(u) {
  u.crossDomain && (u.contents.script = !1);
});
var c = window.H5P = window.H5P || {};
c.isFramed = window.self !== window.parent;
c.$window = c.jQuery(window);
c.instances = [];
document.documentElement.requestFullScreen ? c.fullScreenBrowserPrefix = "" : document.documentElement.webkitRequestFullScreen ? (c.safariBrowser = navigator.userAgent.match(/version\\/([.\\d]+)/i), c.safariBrowser = c.safariBrowser === null ? 0 : parseInt(c.safariBrowser[1]), (c.safariBrowser === 0 || c.safariBrowser > 6) && (c.fullScreenBrowserPrefix = "webkit")) : document.documentElement.mozRequestFullScreen ? c.fullScreenBrowserPrefix = "moz" : document.documentElement.msRequestFullscreen && (c.fullScreenBrowserPrefix = "ms");
c.opened = {};
c.init = function(u) {
  c.$body === void 0 && (c.$body = c.jQuery(document.body)), c.fullscreenSupported === void 0 && (c.fullscreenSupported = !H5PIntegration.fullscreenDisabled && !c.fullscreenDisabled && (!(c.isFramed && c.externalEmbed !== !1) || !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled))), c.canHasFullScreen === void 0 && (c.canHasFullScreen = c.fullscreenSupported), c.jQuery(".h5p-content:not(.h5p-initialized)", u).each(function() {
    var l = c.jQuery(this).addClass("h5p-initialized"), g = c.jQuery('<div class="h5p-container"></div>').appendTo(l), x = l.data("content-id"), h = H5PIntegration.contents["cid-" + x];
    if (h === void 0)
      return c.error("No data for content id " + x + ". Perhaps the library is gone?");
    var y = {
      library: h.library,
      params: JSON.parse(h.jsonContent),
      metadata: h.metadata
    };
    c.getUserData(x, "state", function(z, n) {
      if (n)
        y.userDatas = {
          state: n
        };
      else if (n === null && H5PIntegration.saveFreq) {
        delete h.contentUserData;
        var ce = new c.Dialog("content-user-data-reset", "Data Reset", "<p>" + c.t("contentChanged") + "</p><p>" + c.t("startingOver") + '</p><div class="h5p-dialog-ok-button" tabIndex="0" role="button">OK</div>', g);
        c.jQuery(ce).on("dialog-opened", function(re, Ce) {
          var Se = function(ee) {
            (ee.type === "click" || ee.which === 32) && (ce.close(), c.deleteUserData(x, "state", 0));
          };
          Ce.find(".h5p-dialog-ok-button").click(Se).keypress(Se), c.trigger(C, "resize");
        }).on("dialog-closed", function() {
          c.trigger(C, "resize");
        }), ce.open();
      }
    });
    var C = c.newRunnable(y, x, g, !0, { standalone: !0 });
    c.offlineRequestQueue = new c.OfflineRequestQueue({ instance: C }), h.fullScreen == 1 && c.fullscreenSupported && c.jQuery(
      '<div class="h5p-content-controls"><div role="button" tabindex="0" class="h5p-enable-fullscreen" aria-label="' + c.t("fullscreen") + '" title="' + c.t("fullscreen") + '"></div></div>'
    ).prependTo(g).children().click(function() {
      c.fullScreen(g, C);
    }).keydown(function(z) {
      if (z.which === 32 || z.which === 13)
        return c.fullScreen(g, C), !1;
    });
    var E = h.displayOptions, N = !1;
    if (E.frame) {
      if (E.copyright) {
        var F = c.getCopyrights(C, y.params, x, y.metadata);
        F || (E.copyright = !1);
      }
      var q = new c.ActionBar(E), A = q.getDOMElement();
      q.on("reuse", function() {
        c.openReuseDialog(A, h, y, C, x), C.triggerXAPI("accessed-reuse");
      }), q.on("copyrights", function() {
        var z = new c.Dialog("copyrights", c.t("copyrightInformation"), F, g);
        z.open(!0), C.triggerXAPI("accessed-copyright");
      }), q.on("embed", function() {
        c.openEmbedDialog(A, h.embedCode, h.resizeCode, {
          width: l.width(),
          height: l.height()
        }, C), C.triggerXAPI("accessed-embed");
      }), q.hasActions() && (N = !0, A.insertAfter(g));
    }
    if (l.addClass(N ? "h5p-frame" : "h5p-no-frame"), c.opened[x] = /* @__PURE__ */ new Date(), c.on(C, "finish", function(z) {
      z.data !== void 0 && c.setFinished(x, z.data.score, z.data.maxScore, z.data.time);
    }), c.on(C, "xAPI", c.xAPICompletedListener), H5PIntegration.saveFreq !== !1 && (C.getCurrentState instanceof Function || typeof C.getCurrentState == "function")) {
      var I, j = function() {
        var z = C.getCurrentState();
        z !== void 0 && c.setUserData(x, "state", z, { deleteOnChange: !0 }), H5PIntegration.saveFreq && (I = setTimeout(j, H5PIntegration.saveFreq * 1e3));
      };
      H5PIntegration.saveFreq && (I = setTimeout(j, H5PIntegration.saveFreq * 1e3)), c.on(C, "xAPI", function(z) {
        var n = z.getVerb();
        (n === "completed" || n === "progressed") && (clearTimeout(I), I = setTimeout(j, 3e3));
      });
    }
    if (c.isFramed) {
      var B;
      if (c.externalEmbed === !1) {
        var M = window.frameElement, $ = function() {
          if (!window.parent.H5P.isFullscreen) {
            var z = M.parentElement.style.height;
            M.parentElement.style.height = M.parentElement.clientHeight + "px", M.getBoundingClientRect(), M.style.height = "1px", M.style.height = M.contentDocument.body.scrollHeight + "px", M.parentElement.style.height = z;
          }
        };
        c.on(C, "resize", function() {
          clearTimeout(B), B = setTimeout(function() {
            $();
          }, 1);
        });
      } else if (c.communicator) {
        var R = !1;
        c.communicator.on("ready", function() {
          c.communicator.send("hello");
        }), c.communicator.on("hello", function() {
          R = !0, document.body.style.height = "auto", document.body.style.overflow = "hidden", c.trigger(C, "resize");
        }), c.communicator.on("resizePrepared", function() {
          c.communicator.send("resize", {
            scrollHeight: document.body.scrollHeight
          });
        }), c.communicator.on("resize", function() {
          c.trigger(C, "resize");
        }), c.on(C, "resize", function() {
          c.isFullscreen || (clearTimeout(B), B = setTimeout(function() {
            R ? c.communicator.send("prepareResize", {
              scrollHeight: document.body.scrollHeight,
              clientHeight: document.body.clientHeight
            }) : c.communicator.send("hello");
          }, 0));
        });
      }
    }
    (!c.isFramed || c.externalEmbed === !1) && c.jQuery(window.parent).resize(function() {
      window.parent.H5P.isFullscreen, c.trigger(C, "resize");
    }), c.instances.push(C), c.trigger(C, "resize"), l.addClass("using-mouse"), l.on("mousedown keydown keyup", function(z) {
      l.toggleClass("using-mouse", z.type === "mousedown");
    }), c.externalDispatcher && c.externalDispatcher.trigger("initialized");
  }), c.jQuery("iframe.h5p-iframe:not(.h5p-initialized)", u).each(function() {
    var l = c.jQuery(this).addClass("h5p-initialized").data("content-id");
    this.contentDocument.open(), this.contentDocument.write('<!doctype html><html class="h5p-iframe"><head>' + c.getHeadTags(l) + '</head><body><div class="h5p-content" data-content-id="' + l + '"/></body></html>'), this.contentDocument.close();
  });
};
c.getHeadTags = function(u) {
  var l = function(x) {
    for (var h = "", y = 0; y < x.length; y++)
      h += '<link rel="stylesheet" href="' + x[y] + '">';
    return h;
  }, g = function(x) {
    for (var h = "", y = 0; y < x.length; y++)
      h += '<script src="' + x[y] + '"><\\/script>';
    return h;
  };
  return '<base target="_parent">' + l(H5PIntegration.core.styles) + l(H5PIntegration.contents["cid-" + u].styles) + g(H5PIntegration.core.scripts) + g(H5PIntegration.contents["cid-" + u].scripts) + "<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;<\\/script>";
};
c.communicator = function() {
  function u() {
    var l = this, g = {};
    window.addEventListener("message", function(h) {
      window.parent !== h.source || h.data.context !== "h5p" || g[h.data.action] !== void 0 && g[h.data.action](h.data);
    }, !1), l.on = function(x, h) {
      g[x] = h;
    }, l.send = function(x, h) {
      h === void 0 && (h = {}), h.context = "h5p", h.action = x, window.parent.postMessage(h, "*");
    };
  }
  return window.postMessage && window.addEventListener ? new u() : void 0;
}();
c.semiFullScreen = function(u, l, g, x) {
  c.fullScreen(u, l, g, x, !0);
};
c.fullScreen = function(u, l, g, x, h) {
  if (c.exitFullScreen === void 0) {
    if (c.isFramed && c.externalEmbed === !1) {
      window.parent.H5P.fullScreen(u, l, g, c.$body.get(), h), c.isFullscreen = !0, c.exitFullScreen = function() {
        window.parent.H5P.exitFullScreen();
      }, c.on(l, "exitFullScreen", function() {
        c.isFullscreen = !1, c.exitFullScreen = void 0;
      });
      return;
    }
    var y = u, C, E, N;
    if (x === void 0)
      N = c.$body;
    else {
      N = c.jQuery(x), C = N.add(u.get());
      var F = "#h5p-iframe-" + u.parent().data("content-id");
      E = c.jQuery(F), u = E.parent();
    }
    C = u.add(c.$body).add(C);
    var q = function(pe) {
      C.addClass(pe), E !== void 0 && E.css("height", "");
    }, A = function() {
      c.trigger(l, "resize"), c.trigger(l, "focus"), c.trigger(l, "enterFullScreen");
    }, I = function(pe) {
      c.isFullscreen = !1, C.removeClass(pe), c.trigger(l, "resize"), c.trigger(l, "focus"), c.exitFullScreen = void 0, g !== void 0 && g(), c.trigger(l, "exitFullScreen");
    };
    if (c.isFullscreen = !0, c.fullScreenBrowserPrefix === void 0 || h === !0) {
      if (c.isFramed)
        return;
      q("h5p-semi-fullscreen");
      var j = c.jQuery('<div role="button" tabindex="0" class="h5p-disable-fullscreen" title="' + c.t("disableFullscreen") + '" aria-label="' + c.t("disableFullscreen") + '"></div>').appendTo(y.find(".h5p-content-controls")), B, M = c.exitFullScreen = function() {
        $ ? R.content = $ : ce.removeChild(R), j.remove(), N.unbind("keyup", B), I("h5p-semi-fullscreen");
      };
      B = function(pe) {
        pe.keyCode === 27 && M();
      }, j.click(M), N.keyup(B);
      for (var $, R, z = document.getElementsByTagName("meta"), n = 0; n < z.length; n++)
        if (z[n].name === "viewport") {
          R = z[n], $ = R.content;
          break;
        }
      if ($ || (R = document.createElement("meta"), R.name = "viewport"), R.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0", !$) {
        var ce = document.getElementsByTagName("head")[0];
        ce.appendChild(R);
      }
      A();
    } else {
      q("h5p-fullscreen");
      var re, Ce = c.fullScreenBrowserPrefix === "ms" ? "MSFullscreenChange" : c.fullScreenBrowserPrefix + "fullscreenchange";
      if (document.addEventListener(Ce, function() {
        if (re === void 0) {
          re = !1, A();
          return;
        }
        I("h5p-fullscreen"), document.removeEventListener(Ce, arguments.callee, !1);
      }), c.fullScreenBrowserPrefix === "")
        u[0].requestFullScreen();
      else {
        var Se = c.fullScreenBrowserPrefix === "ms" ? "msRequestFullscreen" : c.fullScreenBrowserPrefix + "RequestFullScreen", ee = c.fullScreenBrowserPrefix === "webkit" && c.safariBrowser === 0 ? Element.ALLOW_KEYBOARD_INPUT : void 0;
        u[0][Se](ee);
      }
      c.exitFullScreen = function() {
        c.fullScreenBrowserPrefix === "" ? document.exitFullscreen() : c.fullScreenBrowserPrefix === "moz" ? document.mozCancelFullScreen() : document[c.fullScreenBrowserPrefix + "ExitFullscreen"]();
      };
    }
  }
};
(function() {
  c.addQueryParameter = function(l, g) {
    let x, h;
    const y = l.split("?");
    return y[1] ? (h = y[1].split("#"), x = y[0] + "?" + h[0] + "&") : (h = y[0].split("#"), x = h[0] + "?"), x += g, h[1] && (x += "#" + h[1]), x;
  }, c.setSource = function(l, g, x) {
    let h = g.path;
    const y = c.getCrossOrigin(g);
    y ? (l.crossOrigin = y, H5PIntegration.crossoriginCacheBuster && (h = c.addQueryParameter(h, H5PIntegration.crossoriginCacheBuster))) : l.removeAttribute("crossorigin"), l.src = c.getPath(h, x);
  };
  var u = function(l) {
    return l.match(/^[a-z0-9]+:\\/\\//i);
  };
  c.getCrossOrigin = function(l) {
    if (typeof l != "object")
      return H5PIntegration.crossorigin && H5PIntegration.crossoriginRegex && l.match(H5PIntegration.crossoriginRegex) ? H5PIntegration.crossorigin : null;
    if (H5PIntegration.crossorigin && !u(l.path))
      return H5PIntegration.crossorigin;
  }, c.getPath = function(l, g) {
    if (u(l))
      return l;
    var x, h = l.substr(-4, 4) === "#tmp";
    if (g !== void 0 && !h)
      H5PIntegration.contents !== void 0 && H5PIntegration.contents["cid-" + g] && (x = H5PIntegration.contents["cid-" + g].contentUrl), x || (x = H5PIntegration.url + "/content/" + g);
    else if (window.H5PEditor !== void 0)
      x = H5PEditor.filesPath;
    else
      return;
    return u(x) || (x = window.location.protocol + "//" + window.location.host + x), x + "/" + l;
  };
})();
c.getContentPath = function(u) {
  return H5PIntegration.url + "/content/" + u;
};
c.classFromName = function(u) {
  var l = u.split(".");
  return this[l[l.length - 1]];
};
c.newRunnable = function(u, l, g, x, h) {
  var y, C, E;
  try {
    y = u.library.split(" ", 2), E = y[0], C = y[1].split(".", 2);
  } catch (I) {
    return c.error("Invalid library string: " + u.library);
  }
  if (!(u.params instanceof Object) || u.params instanceof Array)
    return c.error("Invalid library params for: " + u.library), c.error(u.params);
  var N;
  try {
    y = y[0].split("."), N = window;
    for (var F = 0; F < y.length; F++)
      N = N[y[F]];
    if (typeof N != "function")
      throw null;
  } catch (I) {
    return c.error("Unable to find constructor for: " + u.library);
  }
  h === void 0 && (h = {}), u.subContentId && (h.subContentId = u.subContentId), u.userDatas && u.userDatas.state && H5PIntegration.saveFreq && (h.previousState = u.userDatas.state), u.metadata && (h.metadata = u.metadata);
  var q = h.standalone || !1;
  N.prototype = c.jQuery.extend({}, c.ContentType(q).prototype, N.prototype);
  var A;
  return c.jQuery.inArray(u.library, ["H5P.CoursePresentation 1.0", "H5P.CoursePresentation 1.1", "H5P.CoursePresentation 1.2", "H5P.CoursePresentation 1.3"]) > -1 ? A = new N(u.params, l) : A = new N(u.params, l, h), A.$ === void 0 && (A.$ = c.jQuery(A)), A.contentId === void 0 && (A.contentId = l), A.subContentId === void 0 && u.subContentId && (A.subContentId = u.subContentId), A.parent === void 0 && h && h.parent && (A.parent = h.parent), A.libraryInfo === void 0 && (A.libraryInfo = {
    versionedName: u.library,
    versionedNameNoSpaces: E + "-" + C[0] + "." + C[1],
    machineName: E,
    majorVersion: C[0],
    minorVersion: C[1]
  }), g !== void 0 && (g.toggleClass("h5p-standalone", q), A.attach(g), c.trigger(A, "domChanged", {
    $target: g,
    library: E,
    key: "newLibrary"
  }, { bubbles: !0, external: !0 }), (x === void 0 || !x) && c.trigger(A, "resize")), A;
};
c.error = function(u) {
  window.console !== void 0 && console.error !== void 0 && console.error(u.stack ? u.stack : u);
};
c.t = function(u, l, g) {
  if (g === void 0 && (g = "H5P"), H5PIntegration.l10n[g] === void 0)
    return '[Missing translation namespace "' + g + '"]';
  if (H5PIntegration.l10n[g][u] === void 0)
    return '[Missing translation "' + u + '" in "' + g + '"]';
  var x = H5PIntegration.l10n[g][u];
  if (l !== void 0)
    for (var h in l)
      x = x.replace(h, l[h]);
  return x;
};
c.Dialog = function(u, l, g, x) {
  var h = this, y = c.jQuery('<div class="h5p-popup-dialog h5p-' + u + '-dialog" role="dialog" tabindex="-1">                              <div class="h5p-inner">                                <h2>' + l + '</h2>                                <div class="h5p-scroll-content">' + g + '</div>                                <div class="h5p-close" role="button" tabindex="0" aria-label="' + c.t("close") + '" title="' + c.t("close") + '"></div>                              </div>                            </div>').insertAfter(x).click(function(C) {
    C && C.originalEvent && C.originalEvent.preventClosing || h.close();
  }).children(".h5p-inner").click(function(C) {
    C.originalEvent.preventClosing = !0;
  }).find(".h5p-close").click(function() {
    h.close();
  }).keypress(function(C) {
    if (C.which === 13 || C.which === 32)
      return h.close(), !1;
  }).end().find("a").click(function(C) {
    C.stopPropagation();
  }).end().end();
  h.open = function(C) {
    C && y.css("height", "100%"), setTimeout(function() {
      y.addClass("h5p-open"), c.jQuery(h).trigger("dialog-opened", [y]), y.focus();
    }, 1);
  }, h.close = function() {
    y.removeClass("h5p-open"), setTimeout(function() {
      y.remove(), c.jQuery(h).trigger("dialog-closed", [y]), x.attr("tabindex", "-1"), x.focus();
    }, 200);
  };
};
c.getCopyrights = function(u, l, g, x) {
  var h;
  if (u.getCopyrights !== void 0)
    try {
      h = u.getCopyrights();
    } catch (C) {
    }
  h === void 0 && (h = new c.ContentCopyrights(), c.findCopyrights(h, l, g));
  var y = c.buildMetadataCopyrights(x, u.libraryInfo.machineName);
  return y !== void 0 && h.addMediaInFront(y), h !== void 0 && (h = h.toString()), h;
};
c.findCopyrights = function(u, l, g, x) {
  x && (x.params = l, N(x, x.machineName, g));
  var h;
  for (var y in l)
    if (l.hasOwnProperty(y)) {
      if (y === "overrideSettings") {
        console.warn("The semantics field 'overrideSettings' is DEPRECATED and should not be used."), console.warn(l);
        continue;
      }
      var C = l[y];
      if (C && C.library && typeof C.library == "string" ? h = C.library.split(" ")[0] : C && C.library && typeof C.library == "object" && (h = C.library.library && typeof C.library.library == "string" ? C.library.library.split(" ")[0] : h), C instanceof Array)
        c.findCopyrights(u, C, g);
      else if (C instanceof Object)
        if (N(C, h, g), C.copyright === void 0 || C.copyright.license === void 0 || C.path === void 0 || C.mime === void 0)
          c.findCopyrights(u, C, g);
        else {
          var E = new c.MediaCopyright(C.copyright);
          C.width !== void 0 && C.height !== void 0 && E.setThumbnail(new c.Thumbnail(c.getPath(C.path, g), C.width, C.height)), u.addMedia(E);
        }
    }
  function N(F, q, A) {
    if (F.metadata) {
      const I = c.buildMetadataCopyrights(F.metadata, q);
      if (I !== void 0) {
        if (F.params && F.params.contentName === "Image" && F.params.file) {
          const j = F.params.file.path, B = F.params.file.width, M = F.params.file.height;
          I.setThumbnail(new c.Thumbnail(c.getPath(j, A), B, M));
        }
        u.addMedia(I);
      }
    }
  }
};
c.buildMetadataCopyrights = function(u) {
  if (u && u.license !== void 0 && u.license !== "U") {
    var l = {
      contentType: u.contentType,
      title: u.title,
      author: u.authors && u.authors.length > 0 ? u.authors.map(function(g) {
        return g.role ? g.name + " (" + g.role + ")" : g.name;
      }).join(", ") : void 0,
      source: u.source,
      year: u.yearFrom ? u.yearFrom + (u.yearTo ? "-" + u.yearTo : "") : void 0,
      license: u.license,
      version: u.licenseVersion,
      licenseExtras: u.licenseExtras,
      changes: u.changes && u.changes.length > 0 ? u.changes.map(function(g) {
        return g.log + (g.author ? ", " + g.author : "") + (g.date ? ", " + g.date : "");
      }).join(" / ") : void 0
    };
    return new c.MediaCopyright(l);
  }
};
c.openReuseDialog = function(u, l, g, x, h) {
  let y = "";
  l.displayOptions.export && (y += '<button type="button" class="h5p-big-button h5p-download-button"><div class="h5p-button-title">Download as an .h5p file</div><div class="h5p-button-description">.h5p files may be uploaded to any web-site where H5P content may be created.</div></button>'), l.displayOptions.export && l.displayOptions.copy && (y += '<div class="h5p-horizontal-line-text"><span>or</span></div>'), l.displayOptions.copy && (y += '<button type="button" class="h5p-big-button h5p-copy-button"><div class="h5p-button-title">Copy content</div><div class="h5p-button-description">Copied content may be pasted anywhere this content type is supported on this website.</div></button>');
  const C = new c.Dialog("reuse", c.t("reuseContent"), y, u);
  c.jQuery(C).on("dialog-opened", function(E, N) {
    c.jQuery('<a href="https://h5p.org/node/442225" target="_blank">More Info</a>').click(function(F) {
      F.stopPropagation();
    }).appendTo(N.find("h2")), N.find(".h5p-download-button").click(function() {
      window.location.href = l.exportUrl, x.triggerXAPI("downloaded"), C.close();
    }), N.find(".h5p-copy-button").click(function() {
      const F = new c.ClipboardItem(g);
      F.contentId = h, c.setClipboard(F), x.triggerXAPI("copied"), C.close(), c.attachToastTo(
        c.jQuery(".h5p-content:first")[0],
        c.t("contentCopied"),
        {
          position: {
            horizontal: "centered",
            vertical: "centered",
            noOverflowX: !0
          }
        }
      );
    }), c.trigger(x, "resize");
  }).on("dialog-closed", function() {
    c.trigger(x, "resize");
  }), C.open();
};
c.openEmbedDialog = function(u, l, g, x, h) {
  var y = l + g, C = new c.Dialog("embed", c.t("embed"), '<textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' + c.t("size") + ': <input type="text" value="' + Math.ceil(x.width) + '" class="h5p-embed-size"/> × <input type="text" value="' + Math.ceil(x.height) + '" class="h5p-embed-size"/> px<br/><div role="button" tabindex="0" class="h5p-expander">' + c.t("showAdvanced") + '</div><div class="h5p-expander-content"><p>' + c.t("advancedHelp") + '</p><textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false">' + g + "</textarea></div>", u);
  c.jQuery(C).on("dialog-opened", function(E, N) {
    var F = N.find(".h5p-inner"), q = F.find(".h5p-scroll-content");
    q.outerHeight() - q.innerHeight();
    var A = function() {
      c.trigger(h, "resize");
    }, I = N.find(".h5p-embed-size:eq(0)"), j = N.find(".h5p-embed-size:eq(1)"), B = function(R, z) {
      var n = parseFloat(R.val());
      return isNaN(n) ? z : Math.ceil(n);
    }, M = function() {
      N.find(".h5p-embed-code-container:first").val(y.replace(":w", B(I, x.width)).replace(":h", B(j, x.height)));
    };
    I.change(M), j.change(M), M(), N.find(".h5p-embed-code-container").each(function() {
      c.jQuery(this).css("height", this.scrollHeight + "px").focus(function() {
        c.jQuery(this).select();
      });
    }), N.find(".h5p-embed-code-container").eq(0).select(), A();
    var $ = function() {
      var R = c.jQuery(this), z = R.next();
      z.is(":visible") ? (R.removeClass("h5p-open").text(c.t("showAdvanced")).attr("aria-expanded", "true"), z.hide()) : (R.addClass("h5p-open").text(c.t("hideAdvanced")).attr("aria-expanded", "false"), z.show()), N.find(".h5p-embed-code-container").each(function() {
        c.jQuery(this).css("height", this.scrollHeight + "px");
      }), A();
    };
    N.find(".h5p-expander").click($).keypress(function(R) {
      if (R.keyCode === 32)
        return $.apply(this), !1;
    });
  }).on("dialog-closed", function() {
    c.trigger(h, "resize");
  }), C.open();
};
c.attachToastTo = function(u, l, g) {
  if (u === void 0 || l === void 0)
    return;
  const x = function(A) {
    var I = A.composedPath && A.composedPath() || A.path, j = A.target;
    if (I != null)
      return I.indexOf(window) < 0 ? I.concat(window) : I;
    if (j === window)
      return [window];
    function B(M, $) {
      $ = $ || [];
      var R = M.parentNode;
      return R ? B(R, $.concat(R)) : $;
    }
    return [j].concat(B(j), window);
  }, h = function(A) {
    var I = x(A);
    I.indexOf(u) === -1 && (clearTimeout(q), y());
  }, y = function() {
    document.removeEventListener("click", h), E.parentNode && E.parentNode.removeChild(E);
  }, C = function(A, I, j) {
    j = j || {}, j.offsetHorizontal = j.offsetHorizontal || 0, j.offsetVertical = j.offsetVertical || 0;
    const B = I.getBoundingClientRect(), M = A.getBoundingClientRect();
    let $ = 0, R = 0;
    switch (j.horizontal) {
      case "before":
        $ = M.left - B.width - j.offsetHorizontal;
        break;
      case "after":
        $ = M.left + M.width + j.offsetHorizontal;
        break;
      case "left":
        $ = M.left + j.offsetHorizontal;
        break;
      case "right":
        $ = M.left + M.width - B.width - j.offsetHorizontal;
        break;
      case "centered":
        $ = M.left + M.width / 2 - B.width / 2 + j.offsetHorizontal;
        break;
      default:
        $ = M.left + M.width / 2 - B.width / 2 + j.offsetHorizontal;
    }
    switch (j.vertical) {
      case "above":
        R = M.top - B.height - j.offsetVertical;
        break;
      case "below":
        R = M.top + M.height + j.offsetVertical;
        break;
      case "top":
        R = M.top + j.offsetVertical;
        break;
      case "bottom":
        R = M.top + M.height - B.height - j.offsetVertical;
        break;
      case "centered":
        R = M.top + M.height / 2 - B.height / 2 + j.offsetVertical;
        break;
      default:
        R = M.top + M.height + j.offsetVertical;
    }
    const n = document.body.getBoundingClientRect();
    return (j.noOverflowLeft || j.noOverflowX) && $ < n.x && ($ = n.x), (j.noOverflowRight || j.noOverflowX) && $ + B.width > n.x + n.width && ($ = n.x + n.width - B.width), (j.noOverflowTop || j.noOverflowY) && R < n.y && (R = n.y), (j.noOverflowBottom || j.noOverflowY) && R + B.height > n.y + n.height && ($ = n.y + n.height - B.height), { left: $, top: R };
  };
  g = g || {}, g.style = g.style || "h5p-toast", g.duration = g.duration || 3e3;
  const E = document.createElement("div");
  E.setAttribute("id", g.style), E.classList.add("h5p-toast-disabled"), E.classList.add(g.style);
  const N = document.createElement("span");
  N.innerHTML = l, E.appendChild(N), document.body.appendChild(E);
  const F = C(u, E, g.position);
  E.style.left = Math.round(F.left) + "px", E.style.top = Math.round(F.top) + "px", E.classList.remove("h5p-toast-disabled");
  const q = setTimeout(y, g.duration);
  document.addEventListener("click", h);
};
c.ContentCopyrights = function() {
  var u, l = [], g = [];
  this.setLabel = function(x) {
    u = x;
  }, this.addMedia = function(x) {
    x !== void 0 && l.push(x);
  }, this.addMediaInFront = function(x) {
    x !== void 0 && l.unshift(x);
  }, this.addContent = function(x) {
    x !== void 0 && g.push(x);
  }, this.toString = function() {
    for (var x = "", h = 0; h < l.length; h++)
      x += l[h];
    for (h = 0; h < g.length; h++)
      x += g[h];
    return x !== "" && (u !== void 0 && (x = "<h3>" + u + "</h3>" + x), x = '<div class="h5p-content-copyrights">' + x + "</div>"), x;
  };
};
c.MediaCopyright = function(u, l, g, x) {
  var h, y = new c.DefinitionList(), C = function(I) {
    return l === void 0 || l[I] === void 0 ? c.t(I) : l[I];
  }, E = function(I, j) {
    var B = c.copyrightLicenses[I], M = "";
    I === "PD" && j || (M += B.hasOwnProperty("label") ? B.label : B);
    var $;
    B.versions && (B.versions.default && (!j || !B.versions[j]) && (j = B.versions.default), j && B.versions[j] && ($ = B.versions[j])), $ && (M && (M += " "), M += $.hasOwnProperty("label") ? $.label : $);
    var R;
    B.hasOwnProperty("link") ? R = B.link.replace(":version", B.linkVersions ? B.linkVersions[j] : j) : $ && B.hasOwnProperty("link") && (R = $.link), R && (M = '<a href="' + R + '" target="_blank">' + M + "</a>");
    var z = "";
    return I !== "PD" && I !== "C" && (z += I), j && j !== "CC0 1.0" && (z && I !== "GNU GPL" && (z += " "), z += j), z && (M += " (" + z + ")"), I === "C" && (M += " &copy;"), M;
  };
  if (u !== void 0) {
    for (var N in x)
      x.hasOwnProperty(N) && (u[N] = x[N]);
    g === void 0 && (g = ["contentType", "title", "license", "author", "year", "source", "licenseExtras", "changes"]);
    for (var F = 0; F < g.length; F++) {
      var q = g[F];
      if (u[q] !== void 0 && u[q] !== "") {
        var A = u[q];
        q === "license" && (A = E(u.license, u.version)), q === "source" && (A = A ? '<a href="' + A + '" target="_blank">' + A + "</a>" : void 0), y.add(new c.Field(C(q), A));
      }
    }
  }
  this.setThumbnail = function(I) {
    h = I;
  }, this.undisclosed = function() {
    if (y.size() === 1) {
      var I = y.get(0);
      if (I.getLabel() === C("license") && I.getValue() === E("U"))
        return !0;
    }
    return !1;
  }, this.toString = function() {
    var I = "";
    return this.undisclosed() || (h !== void 0 && (I += h), I += y, I !== "" && (I = '<div class="h5p-media-copyright">' + I + "</div>")), I;
  };
};
c.Thumbnail = function(u, l, g) {
  var x, h = 100;
  l !== void 0 && (x = Math.round(h * (l / g))), this.toString = function() {
    return '<img src="' + u + '" alt="' + c.t("thumbnail") + '" class="h5p-thumbnail" height="' + h + '"' + (x === void 0 ? "" : ' width="' + x + '"') + "/>";
  };
};
c.Field = function(u, l) {
  this.getLabel = function() {
    return u;
  }, this.getValue = function() {
    return l;
  };
};
c.DefinitionList = function() {
  var u = [];
  this.add = function(l) {
    u.push(l);
  }, this.size = function() {
    return u.length;
  }, this.get = function(l) {
    return u[l];
  }, this.toString = function() {
    for (var l = "", g = 0; g < u.length; g++) {
      var x = u[g];
      l += "<dt>" + x.getLabel() + "</dt><dd>" + x.getValue() + "</dd>";
    }
    return l === "" ? l : '<dl class="h5p-definition-list">' + l + "</dl>";
  };
};
c.Coords = function(u, l, g, x) {
  return this instanceof c.Coords ? (this.x = 0, this.y = 0, this.w = 1, this.h = 1, typeof u == "object" ? (this.x = u.x, this.y = u.y, this.w = u.w, this.h = u.h) : (u !== void 0 && (this.x = u), l !== void 0 && (this.y = l), g !== void 0 && (this.w = g), x !== void 0 && (this.h = x)), this) : new c.Coords(u, l, g, x);
};
c.libraryFromString = function(u) {
  var l = /(.+)\\s(\\d+)\\.(\\d+)$/g, g = l.exec(u);
  return g !== null ? {
    machineName: g[1],
    majorVersion: parseInt(g[2]),
    minorVersion: parseInt(g[3])
  } : !1;
};
c.getLibraryPath = function(u) {
  return H5PIntegration.urlLibraries !== void 0 ? H5PIntegration.urlLibraries + "/" + u : H5PIntegration.url + "/libraries/" + u;
};
c.cloneObject = function(u, l) {
  var g = u instanceof Array ? [] : {};
  for (var x in u)
    u.hasOwnProperty(x) && (l !== void 0 && l && typeof u[x] == "object" ? g[x] = c.cloneObject(u[x], l) : g[x] = u[x]);
  return g;
};
c.trim = function(u) {
  return u.replace(/^\\s+|\\s+$/g, "");
};
c.jsLoaded = function(u) {
  return H5PIntegration.loadedJs = H5PIntegration.loadedJs || [], c.jQuery.inArray(u, H5PIntegration.loadedJs) !== -1;
};
c.cssLoaded = function(u) {
  return H5PIntegration.loadedCss = H5PIntegration.loadedCss || [], c.jQuery.inArray(u, H5PIntegration.loadedCss) !== -1;
};
c.shuffleArray = function(u) {
  if (u instanceof Array) {
    var l = u.length, g, x, h;
    if (l === 0)
      return !1;
    for (; --l; )
      g = Math.floor(Math.random() * (l + 1)), x = u[l], h = u[g], u[l] = h, u[g] = x;
    return u;
  }
};
c.setFinished = function(u, l, g, x) {
  var h = typeof l == "number" || l instanceof Number;
  if (h && H5PIntegration.postUserStatistics === !0) {
    var y = function(E) {
      return Math.round(E.getTime() / 1e3);
    };
    const C = {
      contentId: u,
      score: l,
      maxScore: g,
      opened: y(c.opened[u]),
      finished: y(/* @__PURE__ */ new Date()),
      time: x
    };
    c.jQuery.post(H5PIntegration.ajax.setFinished, C).fail(function() {
      c.offlineRequestQueue.add(H5PIntegration.ajax.setFinished, C);
    });
  }
};
Array.prototype.indexOf || (Array.prototype.indexOf = function(u) {
  for (var l = 0; l < this.length; l++)
    if (this[l] === u)
      return l;
  return -1;
});
String.prototype.trim === void 0 && (String.prototype.trim = function() {
  return c.trim(this);
});
c.trigger = function(u, l, g, x) {
  u.trigger !== void 0 ? u.trigger(l, g, x) : u.$ !== void 0 && u.$.trigger !== void 0 && u.$.trigger(l);
};
c.on = function(u, l, g) {
  u.on !== void 0 ? u.on(l, g) : u.$ !== void 0 && u.$.on !== void 0 && u.$.on(l, g);
};
c.createUUID = function() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(u) {
    var l = Math.random() * 16 | 0, g = u === "x" ? l : l & 3 | 8;
    return g.toString(16);
  });
};
c.createTitle = function(u, l) {
  if (!u)
    return "";
  l === void 0 && (l = 60);
  var g = c.jQuery("<div></div>").text(
    // Strip tags
    u.replace(/(<([^>]+)>)/ig, "")
    // Escape
  ).text();
  return g.length > l && (g = g.substr(0, l - 3) + "..."), g;
};
(function(u) {
  function l(h, y, C, E, N, F, q, A) {
    if (H5PIntegration.user === void 0) {
      E("Not signed in.");
      return;
    }
    var I = {
      url: H5PIntegration.ajax.contentUserData.replace(":contentId", h).replace(":dataType", y).replace(":subContentId", C || 0),
      dataType: "json",
      async: A === void 0 ? !0 : A
    };
    N !== void 0 ? (I.type = "POST", I.data = {
      data: N === null ? 0 : N,
      preload: F ? 1 : 0,
      invalidate: q ? 1 : 0
    }) : I.type = "GET", E !== void 0 && (I.error = function(j, B) {
      E(B);
    }, I.success = function(j) {
      if (!j.success) {
        E(j.message);
        return;
      }
      if (j.data === !1 || j.data === void 0) {
        E();
        return;
      }
      E(void 0, j.data);
    }), u.ajax(I);
  }
  c.getUserData = function(h, y, C, E) {
    E || (E = 0), H5PIntegration.contents = H5PIntegration.contents || {};
    var N = H5PIntegration.contents["cid-" + h] || {}, F = N.contentUserData;
    if (F && F[E] && F[E][y] !== void 0) {
      if (F[E][y] === "RESET") {
        C(void 0, null);
        return;
      }
      try {
        C(void 0, JSON.parse(F[E][y]));
      } catch (q) {
        C(q);
      }
    } else
      l(h, y, E, function(q, A) {
        if (q || A === void 0) {
          C(q, A);
          return;
        }
        N.contentUserData === void 0 && (N.contentUserData = F = {}), F[E] === void 0 && (F[E] = {}), F[E][y] = A;
        try {
          C(void 0, JSON.parse(A));
        } catch (I) {
          C(I);
        }
      });
  }, c.setUserData = function(h, y, C, E) {
    var N = c.jQuery.extend(!0, {}, {
      subContentId: 0,
      preloaded: !0,
      deleteOnChange: !1,
      async: !0
    }, E);
    try {
      C = JSON.stringify(C);
    } catch (A) {
      N.errorCallback && N.errorCallback(A);
      return;
    }
    var F = H5PIntegration.contents["cid-" + h];
    F === void 0 && (F = H5PIntegration.contents["cid-" + h] = {}), F.contentUserData || (F.contentUserData = {});
    var q = F.contentUserData;
    q[N.subContentId] === void 0 && (q[N.subContentId] = {}), C !== q[N.subContentId][y] && (q[N.subContentId][y] = C, l(h, y, N.subContentId, function(A) {
      N.errorCallback && A && N.errorCallback(A);
    }, C, N.preloaded, N.deleteOnChange, N.async));
  }, c.deleteUserData = function(h, y, C) {
    C || (C = 0);
    var E = H5PIntegration.contents["cid-" + h].contentUserData;
    E && E[C] && E[C][y] && delete E[C][y], l(h, y, C, void 0, null);
  }, c.getContentForInstance = function(h) {
    var y = "cid-" + h, C = H5PIntegration && H5PIntegration.contents && H5PIntegration.contents[y];
    return C ? H5PIntegration.contents[y] : void 0;
  }, c.ClipboardItem = function(h, y, C) {
    var E = this, N = function() {
      if (E.generic) {
        var F = E.specific[E.generic];
        !F.params.file || !F.params.file.width || !F.params.file.height || (E.width = 20, E.height = F.params.file.height / F.params.file.width * E.width);
      }
    };
    y || (y = "action", h = {
      action: h
    }), E.specific = h, y && h[y] && (E.generic = y), C && (E.from = C), window.H5PEditor && H5PEditor.contentId && (E.contentId = H5PEditor.contentId), !E.specific.width && !E.specific.height && N();
  }, c.clipboardify = function(h) {
    h instanceof c.ClipboardItem || (h = new c.ClipboardItem(h)), c.setClipboard(h);
  }, c.getClipboard = function() {
    return g();
  }, c.setClipboard = function(h) {
    localStorage.setItem("h5pClipboard", JSON.stringify(h)), c.externalDispatcher.trigger("datainclipboard", { reset: !1 });
  }, c.getLibraryConfig = function(h) {
    var y = H5PIntegration.libraryConfig && H5PIntegration.libraryConfig[h];
    return y ? H5PIntegration.libraryConfig[h] : {};
  };
  var g = function() {
    var h = localStorage.getItem("h5pClipboard");
    if (h) {
      try {
        h = JSON.parse(h);
      } catch (y) {
        console.error("Unable to parse JSON from clipboard.", y);
        return;
      }
      return x(h.specific, function(y) {
        var C = y.substr(-4, 4) === "#tmp";
        return !C && h.contentId && !y.match(/^https?:\\/\\//i) ? H5PEditor.contentId ? "../" + h.contentId + "/" + y : (H5PEditor.contentRelUrl ? H5PEditor.contentRelUrl : "../content/") + h.contentId + "/" + y : y;
      }), h.generic && (h.generic = h.specific[h.generic]), h;
    }
  }, x = function(h, y) {
    for (var C in h)
      if (h.hasOwnProperty(C) && h[C] instanceof Object) {
        var E = h[C];
        E.path !== void 0 && E.mime !== void 0 ? E.path = y(E.path) : (E.library !== void 0 && E.subContentId !== void 0 && delete E.subContentId, x(E, y));
      }
  };
  u(document).ready(function() {
    window.addEventListener("storage", function(E) {
      E.key === "h5pClipboard" && c.externalDispatcher.trigger("datainclipboard", { reset: E.newValue === null });
    });
    var h = {
      default: "4.0",
      "4.0": c.t("licenseCC40"),
      "3.0": c.t("licenseCC30"),
      "2.5": c.t("licenseCC25"),
      "2.0": c.t("licenseCC20"),
      "1.0": c.t("licenseCC10")
    };
    if (c.copyrightLicenses = {
      U: c.t("licenseU"),
      "CC BY": {
        label: c.t("licenseCCBY"),
        link: "http://creativecommons.org/licenses/by/:version",
        versions: h
      },
      "CC BY-SA": {
        label: c.t("licenseCCBYSA"),
        link: "http://creativecommons.org/licenses/by-sa/:version",
        versions: h
      },
      "CC BY-ND": {
        label: c.t("licenseCCBYND"),
        link: "http://creativecommons.org/licenses/by-nd/:version",
        versions: h
      },
      "CC BY-NC": {
        label: c.t("licenseCCBYNC"),
        link: "http://creativecommons.org/licenses/by-nc/:version",
        versions: h
      },
      "CC BY-NC-SA": {
        label: c.t("licenseCCBYNCSA"),
        link: "http://creativecommons.org/licenses/by-nc-sa/:version",
        versions: h
      },
      "CC BY-NC-ND": {
        label: c.t("licenseCCBYNCND"),
        link: "http://creativecommons.org/licenses/by-nc-nd/:version",
        versions: h
      },
      "CC0 1.0": {
        label: c.t("licenseCC010"),
        link: "https://creativecommons.org/publicdomain/zero/1.0/"
      },
      "GNU GPL": {
        label: c.t("licenseGPL"),
        link: "http://www.gnu.org/licenses/gpl-:version-standalone.html",
        linkVersions: {
          v3: "3.0",
          v2: "2.0",
          v1: "1.0"
        },
        versions: {
          default: "v3",
          v3: c.t("licenseV3"),
          v2: c.t("licenseV2"),
          v1: c.t("licenseV1")
        }
      },
      PD: {
        label: c.t("licensePD"),
        versions: {
          "CC0 1.0": {
            label: c.t("licenseCC010"),
            link: "https://creativecommons.org/publicdomain/zero/1.0/"
          },
          "CC PDM": {
            label: c.t("licensePDM"),
            link: "https://creativecommons.org/publicdomain/mark/1.0/"
          }
        }
      },
      "ODC PDDL": '<a href="http://opendatacommons.org/licenses/pddl/1.0/" target="_blank">Public Domain Dedication and Licence</a>',
      "CC PDM": {
        label: c.t("licensePDM"),
        link: "https://creativecommons.org/publicdomain/mark/1.0/"
      },
      C: c.t("licenseC")
    }, c.isFramed && c.externalEmbed === !1 && c.externalDispatcher.on("*", function(E) {
      window.parent.H5P.externalDispatcher.trigger.call(this, E);
    }), c.preventInit || c.init(document.body), H5PIntegration.saveFreq !== !1) {
      var y = 0, C = function() {
        var E = (/* @__PURE__ */ new Date()).getTime();
        if (E - y > 250) {
          y = E;
          for (var N = 0; N < c.instances.length; N++) {
            var F = c.instances[N];
            if (F.getCurrentState instanceof Function || typeof F.getCurrentState == "function") {
              var q = F.getCurrentState();
              q !== void 0 && c.setUserData(F.contentId, "state", q, { deleteOnChange: !0, async: !1 });
            }
          }
        }
      };
      c.$window.one("beforeunload unload", function() {
        c.$window.off("pagehide beforeunload unload"), C();
      }), c.$window.on("pagehide", C);
    }
  });
})(c.jQuery);
var ot = window.H5P = window.H5P || {};
ot.Event = function(u, l, g) {
  this.type = u, this.data = l;
  var x = !1, h = !1, y = !1;
  g === void 0 && (g = {}), g.bubbles === !0 && (x = !0), g.external === !0 && (h = !0), this.preventBubbling = function() {
    x = !1;
  }, this.getBubbles = function() {
    return x;
  }, this.scheduleForExternal = function() {
    return h && !y ? (y = !0, !0) : !1;
  };
};
ot.EventDispatcher = function() {
  function u() {
    var l = this, g = {};
    this.on = function(h, y, C) {
      if (typeof y != "function")
        throw TypeError("listener must be a function");
      l.trigger("newListener", { type: h, listener: y });
      var E = { listener: y, thisArg: C };
      g[h] ? g[h].push(E) : g[h] = [E];
    }, this.once = function(h, y, C) {
      if (!(y instanceof Function))
        throw TypeError("listener must be a function");
      var E = function(N) {
        l.off(N.type, E), y.call(this, N);
      };
      l.on(h, E, C);
    }, this.off = function(h, y) {
      if (y !== void 0 && !(y instanceof Function))
        throw TypeError("listener must be a function");
      if (g[h] !== void 0) {
        if (y === void 0) {
          delete g[h], l.trigger("removeListener", h);
          return;
        }
        for (var C = 0; C < g[h].length; C++)
          if (g[h][C].listener === y) {
            g[h].splice(C, 1), l.trigger("removeListener", h, { listener: y });
            break;
          }
        g[h].length || delete g[h];
      }
    };
    var x = function(h, y) {
      if (g[h] !== void 0)
        for (var C = g[h].slice(), E = 0; E < C.length; E++) {
          var N = C[E], F = N.thisArg ? N.thisArg : this;
          N.listener.call(F, y);
        }
    };
    this.trigger = function(h, y, C) {
      if (h !== void 0) {
        h instanceof String || typeof h == "string" ? h = new ot.Event(h, y, C) : y !== void 0 && (h.data = y);
        var E = h.scheduleForExternal();
        x.call(this, h.type, h), x.call(this, "*", h), h.getBubbles() && l.parent instanceof ot.EventDispatcher && (l.parent.trigger instanceof Function || typeof l.parent.trigger == "function") && l.parent.trigger(h), E && ot.externalDispatcher.trigger.call(this, h);
      }
    };
  }
  return u;
}();
var De = window.H5P = window.H5P || {};
De.externalDispatcher = new De.EventDispatcher();
De.EventDispatcher.prototype.triggerXAPI = function(u, l) {
  this.trigger(this.createXAPIEventTemplate(u, l));
};
De.EventDispatcher.prototype.createXAPIEventTemplate = function(u, l) {
  var g = new De.XAPIEvent();
  if (g.setActor(), g.setVerb(u), l !== void 0)
    for (var x in l)
      g.data.statement[x] = l[x];
  return "object" in g.data.statement || g.setObject(this), "context" in g.data.statement || g.setContext(this), g;
};
De.EventDispatcher.prototype.triggerXAPICompleted = function(u, l, g) {
  this.triggerXAPIScored(u, l, "completed", !0, g);
};
De.EventDispatcher.prototype.triggerXAPIScored = function(u, l, g, x, h) {
  var y = this.createXAPIEventTemplate(g);
  y.setScoredResult(u, l, this, x, h), this.trigger(y);
};
De.EventDispatcher.prototype.setActivityStarted = function() {
  this.activityStartTime === void 0 && (this.contentId !== void 0 && H5PIntegration.contents !== void 0 && H5PIntegration.contents["cid-" + this.contentId] !== void 0 && this.triggerXAPI("attempted"), this.activityStartTime = Date.now());
};
De.xAPICompletedListener = function(u) {
  if ((u.getVerb() === "completed" || u.getVerb() === "answered") && !u.getVerifiedStatementValue(["context", "contextActivities", "parent"])) {
    var l = u.getScore(), g = u.getMaxScore(), x = u.getVerifiedStatementValue(["object", "definition", "extensions", "http://h5p.org/x-api/h5p-local-content-id"]);
    De.setFinished(x, l, g);
  }
};
var ue = window.H5P = window.H5P || {};
ue.XAPIEvent = function() {
  ue.Event.call(this, "xAPI", { statement: {} }, { bubbles: !0, external: !0 });
};
ue.XAPIEvent.prototype = Object.create(ue.Event.prototype);
ue.XAPIEvent.prototype.constructor = ue.XAPIEvent;
ue.XAPIEvent.prototype.setScoredResult = function(u, l, g, x, h) {
  if (this.data.statement.result = {}, typeof u != "undefined" && (typeof l == "undefined" ? this.data.statement.result.score = { raw: u } : (this.data.statement.result.score = {
    min: 0,
    max: l,
    raw: u
  }, l > 0 && (this.data.statement.result.score.scaled = Math.round(u / l * 1e4) / 1e4))), typeof x == "undefined" ? this.data.statement.result.completion = this.getVerb() === "completed" || this.getVerb() === "answered" : this.data.statement.result.completion = x, typeof h != "undefined" && (this.data.statement.result.success = h), g && g.activityStartTime) {
    var y = Math.round((Date.now() - g.activityStartTime) / 10) / 100;
    this.data.statement.result.duration = "PT" + y + "S";
  }
};
ue.XAPIEvent.prototype.setVerb = function(u) {
  ue.jQuery.inArray(u, ue.XAPIEvent.allowedXAPIVerbs) !== -1 ? this.data.statement.verb = {
    id: "http://adlnet.gov/expapi/verbs/" + u,
    display: {
      "en-US": u
    }
  } : u.id !== void 0 && (this.data.statement.verb = u);
};
ue.XAPIEvent.prototype.getVerb = function(u) {
  var l = this.data.statement;
  return "verb" in l ? u === !0 ? l.verb : l.verb.id.slice(31) : null;
};
ue.XAPIEvent.prototype.setObject = function(u) {
  if (u.contentId)
    if (this.data.statement.object = {
      id: this.getContentXAPIId(u),
      objectType: "Activity",
      definition: {
        extensions: {
          "http://h5p.org/x-api/h5p-local-content-id": u.contentId
        }
      }
    }, u.subContentId)
      this.data.statement.object.definition.extensions["http://h5p.org/x-api/h5p-subContentId"] = u.subContentId, typeof u.getTitle == "function" && (this.data.statement.object.definition.name = {
        "en-US": u.getTitle()
      });
    else {
      var l = ue.getContentForInstance(u.contentId);
      l && l.metadata && l.metadata.title && (this.data.statement.object.definition.name = {
        "en-US": ue.createTitle(l.metadata.title)
      });
    }
  else
    this.data.statement.object = {
      definition: {}
    };
};
ue.XAPIEvent.prototype.setContext = function(u) {
  u.parent && (u.parent.contentId || u.parent.subContentId) && (this.data.statement.context = {
    contextActivities: {
      parent: [
        {
          id: this.getContentXAPIId(u.parent),
          objectType: "Activity"
        }
      ]
    }
  }), u.libraryInfo && (this.data.statement.context === void 0 && (this.data.statement.context = { contextActivities: {} }), this.data.statement.context.contextActivities.category = [
    {
      id: "http://h5p.org/libraries/" + u.libraryInfo.versionedNameNoSpaces,
      objectType: "Activity"
    }
  ]);
};
ue.XAPIEvent.prototype.setActor = function() {
  if (H5PIntegration.user !== void 0)
    this.data.statement.actor = {
      name: H5PIntegration.user.name,
      mbox: "mailto:" + H5PIntegration.user.mail,
      objectType: "Agent"
    };
  else {
    var u;
    try {
      localStorage.H5PUserUUID ? u = localStorage.H5PUserUUID : (u = ue.createUUID(), localStorage.H5PUserUUID = u);
    } catch (l) {
      u = "not-trackable-" + ue.createUUID();
    }
    this.data.statement.actor = {
      account: {
        name: u,
        homePage: H5PIntegration.siteUrl
      },
      objectType: "Agent"
    };
  }
};
ue.XAPIEvent.prototype.getMaxScore = function() {
  return this.getVerifiedStatementValue(["result", "score", "max"]);
};
ue.XAPIEvent.prototype.getScore = function() {
  return this.getVerifiedStatementValue(["result", "score", "raw"]);
};
ue.XAPIEvent.prototype.getContentXAPIId = function(u) {
  var l;
  return u.contentId && H5PIntegration && H5PIntegration.contents && H5PIntegration.contents["cid-" + u.contentId] && (l = H5PIntegration.contents["cid-" + u.contentId].url, u.subContentId && (l += "?subContentId=" + u.subContentId)), l;
};
ue.XAPIEvent.prototype.isFromChild = function() {
  var u = this.getVerifiedStatementValue(["context", "contextActivities", "parent", 0, "id"]);
  return !u || u.indexOf("subContentId") === -1;
};
ue.XAPIEvent.prototype.getVerifiedStatementValue = function(u) {
  for (var l = this.data.statement, g = 0; g < u.length; g++) {
    if (l[u[g]] === void 0)
      return null;
    l = l[u[g]];
  }
  return l;
};
ue.XAPIEvent.allowedXAPIVerbs = [
  "answered",
  "asked",
  "attempted",
  "attended",
  "commented",
  "completed",
  "exited",
  "experienced",
  "failed",
  "imported",
  "initialized",
  "interacted",
  "launched",
  "mastered",
  "passed",
  "preferred",
  "progressed",
  "registered",
  "responded",
  "resumed",
  "scored",
  "shared",
  "suspended",
  "terminated",
  "voided",
  // Custom verbs used for action toolbar below content
  "downloaded",
  "copied",
  "accessed-reuse",
  "accessed-embed",
  "accessed-copyright"
];
H5P.ContentType = function(u) {
  function l() {
  }
  return l.prototype = new H5P.EventDispatcher(), l.prototype.isRoot = function() {
    return u;
  }, l.prototype.getLibraryFilePath = function(g) {
    return H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces) + "/" + g;
  }, l;
};
H5P.ConfirmationDialog = function(u) {
  function l(g) {
    u.call(this);
    var x = this;
    H5P.ConfirmationDialog.uniqueId += 1;
    var h = H5P.ConfirmationDialog.uniqueId;
    g = g || {}, g.headerText = g.headerText || H5P.t("confirmDialogHeader"), g.dialogText = g.dialogText || H5P.t("confirmDialogBody"), g.cancelText = g.cancelText || H5P.t("cancelLabel"), g.confirmText = g.confirmText || H5P.t("confirmLabel");
    function y(Q) {
      x.hide(), x.trigger("confirmed"), Q.preventDefault();
    }
    function C(Q) {
      x.hide(), x.trigger("canceled"), Q.preventDefault();
    }
    function E(Q, se) {
      Q.focus(), se.preventDefault();
    }
    var N = 2 * 16, F = 8, q = !1, A = document.createElement("div");
    A.classList.add("h5p-confirmation-dialog-background", "hidden", "hiding");
    var I = document.createElement("div");
    I.classList.add("h5p-confirmation-dialog-popup", "hidden"), g.classes && g.classes.forEach(function(Q) {
      I.classList.add(Q);
    }), I.setAttribute("role", "dialog"), I.setAttribute("aria-labelledby", "h5p-confirmation-dialog-dialog-text-" + h), A.appendChild(I), I.addEventListener("keydown", function(Q) {
      Q.which === 27 && C(Q);
    });
    var j = document.createElement("div");
    j.classList.add("h5p-confirmation-dialog-header"), I.appendChild(j);
    var B = document.createElement("div");
    B.classList.add("h5p-confirmation-dialog-header-text"), B.innerHTML = g.headerText, j.appendChild(B);
    var M = document.createElement("div");
    M.classList.add("h5p-confirmation-dialog-body"), I.appendChild(M);
    var $ = document.createElement("div");
    $.classList.add("h5p-confirmation-dialog-text"), $.innerHTML = g.dialogText, $.id = "h5p-confirmation-dialog-dialog-text-" + h, M.appendChild($);
    var R = document.createElement("div");
    R.classList.add("h5p-confirmation-dialog-buttons"), M.appendChild(R);
    var z = document.createElement("button");
    z.classList.add("h5p-core-cancel-button"), z.textContent = g.cancelText;
    var n = document.createElement("button");
    n.classList.add("h5p-core-button"), n.classList.add("h5p-confirmation-dialog-confirm-button"), n.textContent = g.confirmText;
    var ce = document.createElement("button");
    ce.classList.add("h5p-confirmation-dialog-exit"), ce.setAttribute("aria-hidden", "true"), ce.tabIndex = -1, ce.title = g.cancelText, z.addEventListener("click", C), z.addEventListener("keydown", function(Q) {
      Q.which === 32 ? C(Q) : Q.which === 9 && Q.shiftKey && E(n, Q);
    }), g.hideCancel ? R.classList.add("center") : R.appendChild(z), n.addEventListener("click", y), n.addEventListener("keydown", function(Q) {
      if (Q.which === 32)
        y(Q);
      else if (Q.which === 9 && !Q.shiftKey) {
        const se = g.hideCancel ? n : z;
        E(se, Q);
      }
    }), R.appendChild(n), ce.addEventListener("click", C), ce.addEventListener("keydown", function(Q) {
      Q.which === 32 && C(Q);
    }), g.hideExit || I.appendChild(ce);
    var re, Ce, Se = [], ee = [], pe;
    this.appendTo = function(Q) {
      return re = Q, this;
    };
    var Be = function(Q) {
      A.contains(Q.target) || (Q.preventDefault(), n.focus());
    }, at = function(Q) {
      var se = [], Ae = Q.parentNode.children, ye;
      for (ye = 0; ye < Ae.length; ye += 1)
        se[ye] = !!Ae[ye].getAttribute("aria-hidden"), Ae[ye] !== Q && Ae[ye].setAttribute("aria-hidden", !0);
      return se;
    }, st = function(Q, se) {
      var Ae = Q.parentNode.children, ye;
      for (ye = 0; ye < Ae.length; ye += 1)
        Ae[ye] !== Q && !se[ye] && Ae[ye].removeAttribute("aria-hidden");
    }, xt = function() {
      Ce = re.parentNode || re, Ce.addEventListener("focus", Be, !0);
    }, wt = function() {
      Ce.removeAttribute("aria-hidden"), Ce.removeEventListener("focus", Be, !0);
    }, Ct = function() {
      Se = at(re), ee = at(A);
    }, Ne = function() {
      st(re, Se), st(A, ee);
    }, lt = function(Q) {
      var se = parseInt(I.style.top, 10);
      Q !== void 0 && (se = Q), se || (se = 0), se + I.offsetHeight > re.offsetHeight && (se = re.offsetHeight - I.offsetHeight - F), se - N <= 0 && (se = N + F, q = !0), I.style.top = se + "px";
    };
    this.show = function(Q) {
      return pe = document.activeElement, re.appendChild(A), xt(), Ct(), A.classList.remove("hidden"), lt(Q), setTimeout(function() {
        I.classList.remove("hidden"), A.classList.remove("hiding"), setTimeout(function() {
          if (n.focus(), q && g.instance) {
            var se = parseInt(I.offsetHeight, 10) + N + 2 * F;
            x.setViewPortMinimumHeight(se), g.instance.trigger("resize"), q = !1;
          }
        }, 100);
      }, 0), this;
    }, this.hide = function() {
      return A.classList.add("hiding"), I.classList.add("hidden"), wt(), g.skipRestoreFocus || pe.focus(), Ne(), setTimeout(function() {
        A.classList.add("hidden"), re.removeChild(A), x.setViewPortMinimumHeight(null);
      }, 100), this;
    }, this.getElement = function() {
      return I;
    }, this.getPreviouslyFocused = function() {
      return pe;
    }, this.setViewPortMinimumHeight = function(Q) {
      var se = document.querySelector(".h5p-container") || document.body;
      se.style.minHeight = typeof Q == "number" ? Q + "px" : Q;
    };
  }
  return l.prototype = Object.create(u.prototype), l.prototype.constructor = l, l;
}(H5P.EventDispatcher);
H5P.ConfirmationDialog.uniqueId = -1;
H5P.RequestQueue = function(u, l) {
  const g = function(x) {
    l.call(this), this.processingQueue = !1, x = x || {}, this.showToast = x.showToast, this.itemName = "requestQueue";
  };
  return g.prototype.add = function(x, h) {
    if (!window.localStorage)
      return !1;
    let y = this.getStoredRequests();
    return y || (y = []), y.push({
      url: x,
      data: h
    }), window.localStorage.setItem(this.itemName, JSON.stringify(y)), this.trigger("requestQueued", {
      storedStatements: y,
      processingQueue: this.processingQueue
    }), !0;
  }, g.prototype.getStoredRequests = function() {
    if (!window.localStorage)
      return !1;
    const x = window.localStorage.getItem(this.itemName);
    return x ? JSON.parse(x) : [];
  }, g.prototype.clearQueue = function() {
    return window.localStorage ? (window.localStorage.removeItem(this.itemName), !0) : !1;
  }, g.prototype.resumeQueue = function() {
    if (!H5PIntegration || !window.navigator || !window.localStorage || this.processingQueue)
      return !1;
    const x = this.getStoredRequests(), h = x.length;
    return this.clearQueue(), h ? (this.processingQueue = !0, this.processQueue(x), !0) : (this.trigger("emptiedQueue", x), !0);
  }, g.prototype.processQueue = function(x) {
    if (!x.length)
      return;
    this.trigger("processingQueue");
    const h = x.shift(), y = this;
    u.post(h.url, h.data).fail(y.onQueuedRequestFail.bind(y, h)).always(y.onQueuedRequestProcessed.bind(y, x));
  }, g.prototype.onQueuedRequestFail = function(x) {
    window.navigator.onLine || this.add(x.url, x.data);
  }, g.prototype.onQueuedRequestProcessed = function(x) {
    if (x.length) {
      this.processQueue(x);
      return;
    }
    this.processingQueue = !1;
    const h = this.getStoredRequests();
    this.trigger("queueEmptied", h);
  }, g.prototype.displayToastMessage = function(x, h, y) {
    if (!this.showToast && !h)
      return;
    const C = H5P.jQuery.extend(!0, {}, {
      position: {
        horizontal: "centered",
        vertical: "centered",
        noOverflowX: !0
      }
    }, y);
    H5P.attachToastTo(H5P.jQuery(".h5p-content:first")[0], x, C);
  }, g;
}(H5P.jQuery, H5P.EventDispatcher);
H5P.OfflineRequestQueue = function(u, l) {
  return function(x) {
    const h = new u();
    h.clearQueue();
    let y = null;
    const C = [10, 20, 40, 60, 120, 300, 600];
    let E = -1, N = null, F = !1, q = !1, A = !1;
    const I = x.instance, j = new l({
      headerText: H5P.t("offlineDialogHeader"),
      dialogText: H5P.t("offlineDialogBody"),
      confirmText: H5P.t("offlineDialogRetryButtonLabel"),
      hideCancel: !0,
      hideExit: !0,
      classes: ["offline"],
      instance: I,
      skipRestoreFocus: !0
    }), B = j.getElement(), M = document.createElement("div");
    M.classList.add("count-down"), M.innerHTML = H5P.t("offlineDialogRetryMessage").replace(":num", '<span class="count-down-num">0</span>'), B.querySelector(".h5p-confirmation-dialog-text").appendChild(M);
    const $ = M.querySelector(".count-down-num"), R = document.createElement("div");
    R.classList.add("throbber-wrapper");
    const z = document.createElement("div");
    z.classList.add("sending-requests-throbber"), R.appendChild(z), h.on("requestQueued", function(ee) {
      if (!(ee.data && ee.data.processingQueue)) {
        if (!F) {
          const pe = document.body.querySelector(".h5p-content");
          if (!pe)
            return;
          j.appendTo(pe), pe.appendChild(R), F = !0;
        }
        Ce();
      }
    }.bind(this)), h.on("queueEmptied", function(ee) {
      if (ee.data && ee.data.length) {
        Ce(!0);
        return;
      }
      clearInterval(N), n(!1), E = -1, q && (j.hide(), q = !1), h.displayToastMessage(
        H5P.t("offlineSuccessfulSubmit"),
        !0,
        {
          position: {
            vertical: "top",
            offsetVertical: "100"
          }
        }
      );
    }.bind(this)), j.on("confirmed", function() {
      q = !1, setTimeout(function() {
        ce();
      }, 100);
    }.bind(this)), window.addEventListener("online", function() {
      ce();
    }.bind(this)), window.addEventListener("message", function(ee) {
      window.parent === ee.source && ee.data.context === "h5p" && ee.data.action === "queueRequest" && this.add(ee.data.url, ee.data.data);
    }.bind(this));
    const n = function(ee) {
      A = !A, ee !== void 0 && (A = ee), A && q && (j.hide(), q = !1), A ? R.classList.add("show") : R.classList.remove("show");
    }, ce = function() {
      clearInterval(N), n(!0), h.resumeQueue();
    }, re = function() {
      E += 1, E >= C.length && (E = C.length - 1);
    }, Ce = function(ee) {
      q || (n(!1), q || (ee ? setTimeout(function() {
        j.show(0);
      }, 100) : j.show(0)), q = !0, y = (/* @__PURE__ */ new Date()).getTime(), re(), clearInterval(N), N = setInterval(Se, 100));
    }, Se = function() {
      const ee = (/* @__PURE__ */ new Date()).getTime(), pe = Math.floor((ee - y) / 1e3), Be = C[E] - pe;
      $.textContent = Be.toString(), Be <= 0 && ce();
    };
    this.add = function(ee, pe) {
      if (window.navigator.onLine)
        return !1;
      h.add(ee, pe);
    };
  };
}(H5P.RequestQueue, H5P.ConfirmationDialog);
H5P.ActionBar = function(u, l) {
  function g(x) {
    l.call(this);
    var h = this, y = !1, C = H5P.jQuery('<ul class="h5p-actions"></ul>'), E = function(N, F) {
      var q = function() {
        h.trigger(N);
      };
      H5P.jQuery("<li/>", {
        class: "h5p-button h5p-noselect h5p-" + (F || N),
        role: "button",
        tabindex: 0,
        title: H5P.t(N + "Description"),
        html: H5P.t(N),
        on: {
          click: q,
          keypress: function(A) {
            A.which === 32 && (q(), A.preventDefault());
          }
        },
        appendTo: C
      }), y = !0;
    };
    (x.export || x.copy) && E("reuse", "export"), x.copyright && E("copyrights"), x.embed && E("embed"), x.icon && (H5P.jQuery('<li><a class="h5p-link" href="http://h5p.org" target="_blank" title="' + H5P.t("h5pDescription") + '"></a></li>').appendTo(C), y = !0), h.getDOMElement = function() {
      return C;
    }, h.hasActions = function() {
      return y;
    };
  }
  return g.prototype = Object.create(l.prototype), g.prototype.constructor = g, g;
}(H5P.jQuery, H5P.EventDispatcher);
H5P.getLibraryPath = function(u) {
  return H5PIntegration._libraryPaths[u];
};
H5P.getPath = function(u, l) {
  if (function(h) {
    return h.match(/^[a-z0-9]+:\\/\\//i);
  }(u))
    return u;
  let x;
  if (l !== void 0)
    x = H5PIntegration.url + "/content";
  else if (window.H5PEditor !== void 0)
    x = H5PEditor.filesPath;
  else
    return;
  return x + "/" + u;
};
`;
const frameStyle = "";
function makeMap(str, expectsLowerCase) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
}
const EMPTY_OBJ = !!(process.env.NODE_ENV !== "production") ? Object.freeze({}) : {};
const EMPTY_ARR = !!(process.env.NODE_ENV !== "production") ? Object.freeze([]) : [];
const NOOP = () => {
};
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function warn$1(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol(!!(process.env.NODE_ENV !== "production") ? "iterate" : "");
const MAP_KEY_ITERATE_KEY = Symbol(!!(process.env.NODE_ENV !== "production") ? "Map key iterate" : "");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect2) {
  const { deps } = effect2;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect2);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo = !!(process.env.NODE_ENV !== "production") ? { effect: activeEffect, target, type, key } : void 0;
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (!!(process.env.NODE_ENV !== "production") && activeEffect.onTrack) {
      activeEffect.onTrack(
        extend(
          {
            effect: activeEffect
          },
          debuggerEventExtraInfo
        )
      );
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo = !!(process.env.NODE_ENV !== "production") ? { target, type, key, newValue, oldValue, oldTarget } : void 0;
  if (deps.length === 1) {
    if (deps[0]) {
      if (!!(process.env.NODE_ENV !== "production")) {
        triggerEffects(deps[0], eventInfo);
      } else {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    if (!!(process.env.NODE_ENV !== "production")) {
      triggerEffects(createDep(effects), eventInfo);
    } else {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect2 of effects) {
    if (effect2.computed) {
      triggerEffect(effect2, debuggerEventExtraInfo);
    }
  }
  for (const effect2 of effects) {
    if (!effect2.computed) {
      triggerEffect(effect2, debuggerEventExtraInfo);
    }
  }
}
function triggerEffect(effect2, debuggerEventExtraInfo) {
  if (effect2 !== activeEffect || effect2.allowRecurse) {
    if (!!(process.env.NODE_ENV !== "production") && effect2.onTrigger) {
      effect2.onTrigger(extend({ effect: effect2 }, debuggerEventExtraInfo));
    }
    if (effect2.scheduler) {
      effect2.scheduler();
    } else {
      effect2.run();
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _shallow = false) {
    this._isReadonly = _isReadonly;
    this._shallow = _shallow;
  }
  get(target, key, receiver) {
    const isReadonly2 = this._isReadonly, shallow = this._shallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(shallow = false) {
    super(false, shallow);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!this._shallow) {
      if (!isShallow$1(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(shallow = false) {
    super(true, shallow);
  }
  set(target, key) {
    if (!!(process.env.NODE_ENV !== "production")) {
      warn$1(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
  deleteProperty(target, key) {
    if (!!(process.env.NODE_ENV !== "production")) {
      warn$1(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (!!(process.env.NODE_ENV !== "production")) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (!!(process.env.NODE_ENV !== "production")) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = !!(process.env.NODE_ENV !== "production") ? isMap(target) ? new Map(target) : new Set(target) : void 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (!!(process.env.NODE_ENV !== "production")) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(
        `${capitalize(type)} operation ${key}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(
      method,
      false,
      false
    );
    readonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      false
    );
    shallowInstrumentations2[method] = createIterableMethod(
      method,
      false,
      true
    );
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (!!(process.env.NODE_ENV !== "production")) {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow$1(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn(msg, ...args) {
  if (!!!(process.env.NODE_ENV !== "production"))
    return;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = !!(process.env.NODE_ENV !== "production") ? ErrorTypeStrings[type] : type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  if (!!(process.env.NODE_ENV !== "production")) {
    const info = ErrorTypeStrings[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    if (!!(process.env.NODE_ENV !== "production")) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (!!(process.env.NODE_ENV !== "production") && checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  if (!!(process.env.NODE_ENV !== "production")) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check = !!(process.env.NODE_ENV !== "production") ? (job) => checkRecursiveUpdates(seen, job) : NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (!!(process.env.NODE_ENV !== "production") && check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      warn(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      );
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
const hmrDirtyComponents = /* @__PURE__ */ new Set();
if (!!(process.env.NODE_ENV !== "production")) {
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    instance.update();
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record)
    return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
  }
  queuePostFlushCb(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(
        normalizeClassComponent(instance.type)
      );
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}
let currentRenderingInstance = null;
let currentScopeId = null;
function markAttrsAccessed() {
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
const INITIAL_WATCHER_VALUE = {};
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  var _a;
  if (!!(process.env.NODE_ENV !== "production") && !cb) {
    if (immediate !== void 0) {
      warn(
        `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (deep !== void 0) {
      warn(
        `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
  }
  const warnInvalidSource = (s) => {
    warn(
      `Invalid watch source: `,
      s,
      `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
    );
  };
  const instance = getCurrentScope() === ((_a = currentInstance) == null ? void 0 : _a.scope) ? currentInstance : null;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow$1(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow$1(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else {
        !!(process.env.NODE_ENV !== "production") && warnInvalidSource(s);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = NOOP;
    !!(process.env.NODE_ENV !== "production") && warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (!!(process.env.NODE_ENV !== "production")) {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(
      effect.run.bind(effect),
      instance && instance.suspense
    );
  } else {
    effect.run();
  }
  const unwatch = () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path2) {
  const segments = path2.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    if (name !== "default")
      props.name = name;
    return createVNode("slot", props, fallback && fallback());
  }
  let slot = slots[name];
  if (!!(process.env.NODE_ENV !== "production") && slot && slot.length > 1) {
    warn(
      `SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`
    );
    slot = () => [];
  }
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(
    Fragment,
    {
      key: props.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      validSlotContent && validSlotContent.key || `_${name}`
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.props) : i.props,
    $attrs: (i) => !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.attrs) : i.attrs,
    $slots: (i) => !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.slots) : i.slots,
    $refs: (i) => !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.refs) : i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (!!(process.env.NODE_ENV !== "production") && key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
        !!(process.env.NODE_ENV !== "production") && markAttrsAccessed();
      } else if (!!(process.env.NODE_ENV !== "production") && key === "$slots") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (!!(process.env.NODE_ENV !== "production") && currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn(
          `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn(
          `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (!!(process.env.NODE_ENV !== "production") && setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      !!(process.env.NODE_ENV !== "production") && warn(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      !!(process.env.NODE_ENV !== "production") && warn(
        `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
      );
      return false;
    } else {
      if (!!(process.env.NODE_ENV !== "production") && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
if (!!(process.env.NODE_ENV !== "production") && true) {
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}
function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce(
    (normalized, p) => (normalized[p] = null, normalized),
    {}
  ) : props;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      !!(process.env.NODE_ENV !== "production") && warn(
        `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
      );
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray(to) && isArray(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
const queuePostRenderEffect = queueEffectWithSuspense;
const isTeleport = (type) => type.__isTeleport;
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = currentBlock || EMPTY_ARR;
  closeBlock();
  if (currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
      /* isBlock */
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(
    ...args
  );
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref,
  ref_key,
  ref_for
}) => {
  if (typeof ref === "number") {
    ref = "" + ref;
  }
  return ref != null ? isString(ref) || isRef(ref) || isFunction(ref) ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (!!(process.env.NODE_ENV !== "production") && vnode.key !== vnode.key) {
    warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (
    // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32
  ) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = !!(process.env.NODE_ENV !== "production") ? createVNodeWithArgsTransform : _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (!!(process.env.NODE_ENV !== "production") && !type) {
      warn(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (!isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  if (!!(process.env.NODE_ENV !== "production") && shapeFlag & 4 && isProxy(type)) {
    type = toRaw(type);
    warn(
      `Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
      `
Component that was made reactive: `,
      type
    );
  }
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: !!(process.env.NODE_ENV !== "production") && patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
let currentInstance = null;
let internalSetCurrentInstance;
let globalCurrentInstanceSetters;
let settersKey = "__VUE_INSTANCE_SETTERS__";
{
  if (!(globalCurrentInstanceSetters = getGlobalThis()[settersKey])) {
    globalCurrentInstanceSetters = getGlobalThis()[settersKey] = [];
  }
  globalCurrentInstanceSetters.push((i) => currentInstance = i);
  internalSetCurrentInstance = (instance) => {
    if (globalCurrentInstanceSetters.length > 1) {
      globalCurrentInstanceSetters.forEach((s) => s(instance));
    } else {
      globalCurrentInstanceSetters[0](instance);
    }
  };
}
const setCurrentInstance = (instance) => {
  internalSetCurrentInstance(instance);
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function initCustomFormatter() {
  if (!!!(process.env.NODE_ENV !== "production") || typeof window === "undefined") {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#0b1bc9" };
  const stringStyle = { style: "color:#b62e24" };
  const keywordStyle = { style: "color:#9d288c" };
  const formatter = {
    header(obj) {
      if (!isObject(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(obj.value),
          `>`
        ];
      } else if (isReactive(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${isReadonly(obj) ? ` (readonly)` : ``}`
        ];
      } else if (isReadonly(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">"
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return [
          "div",
          {},
          ...formatInstance(obj.$)
        ];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    const computed = extractKeys(instance, "computed");
    if (computed) {
      blocks.push(createInstanceBlock("computed", computed));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: instance }]
    ]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        type
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false)
          ];
        })
      ]
    ];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject(v)) {
      return ["object", { object: asRaw ? toRaw(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
function initDev() {
  {
    initCustomFormatter();
  }
}
if (!!(process.env.NODE_ENV !== "production")) {
  initDev();
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "H5p",
  props: {
    src: {
      type: String,
      required: true
    },
    librariesSrc: {
      type: String,
      default: ""
    },
    embed: {
      type: String,
      default: ""
    },
    resize: {
      type: String,
      default: ""
    },
    export: {
      type: String,
      default: ""
    },
    copyright: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    l10n: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      loading: true,
      error: void 0,
      srcdoc: ""
    };
  },
  computed: {
    path() {
      return this.src.endsWith("/") ? this.src.slice(0, -1) : this.src;
    },
    librariesPath: function path() {
      if (this.librariesSrc == null || this.librariesSrc.length === 0) {
        return this.path;
      }
      return this.librariesSrc.endsWith("/") ? this.librariesSrc.slice(0, -1) : this.librariesSrc;
    }
  },
  async mounted() {
    let h5p2;
    let content;
    let libraries;
    try {
      h5p2 = await this.getJSON("h5p.json");
      content = await this.getJSON("content", "content.json");
      libraries = await this.loadDependencies(h5p2.preloadedDependencies);
    } catch (e) {
      this.error = e;
      this.loading = false;
      return;
    }
    const { machineName, majorVersion, minorVersion } = h5p2.preloadedDependencies.find((dep) => dep.machineName === h5p2.mainLibrary);
    this.$emit("libraryInfo", { machineName, majorVersion, minorVersion, versionedName: machineName + " " + majorVersion + "." + minorVersion });
    const h5pIntegration = {
      l10n: {
        H5P: Object.assign({}, l10n.H5P, this.l10n)
      },
      url: this.path,
      contents: {
        "cid-default": {
          embedCode: this.embed,
          resizeCode: this.resize,
          exportUrl: this.export,
          fullScreen: this.fullscreen,
          library: `${machineName} ${majorVersion}.${minorVersion}`,
          jsonContent: JSON.stringify(content),
          metadata: h5p2,
          url: this.path,
          displayOptions: {
            frame: Boolean(this.export || this.embed || this.copyright || this.icon),
            export: Boolean(this.export),
            embed: Boolean(this.embed),
            copyright: this.copyright,
            icon: this.icon
          }
        }
      },
      _libraryPaths: Object.fromEntries(
        Object.entries(libraries).map(
          ([id, lib]) => [id, lib.path]
        )
      )
    };
    const { styles, scripts } = this.sortDependencies(libraries);
    const endScript = "<\/script>";
    const contentStyles = styles.map((style) => `<link rel="stylesheet" href="${style}">`).join("\n");
    const contentScripts = scripts.map((script) => `<script src="${script}">${endScript}`).join("\n");
    this.srcdoc = `<!doctype html>
<html class="h5p-iframe">
  <head>
    <base target="_parent">
    <style>${frameStyle}</style>
    ${contentStyles}
    <script>H5PIntegration = ${JSON.stringify(h5pIntegration)};var H5P = H5P || {};H5P.externalEmbed = true;${endScript}
    <script>${frameScript}${endScript}
    ${contentScripts}
  </head>
  <body>
    <div class="h5p-content" data-content-id="default"/>
  </body>
</html>`;
    this.loading = false;
  },
  methods: {
    addEventHandlers() {
      this.$refs.iframe.contentWindow.H5P.externalDispatcher.on("*", (ev) => {
        this.$emit(ev.type.toLowerCase(), ev.data);
      });
    },
    async getJSON(...url) {
      const path2 = url[0].startsWith("/") ? url.join("/") : this.path + "/" + url.join("/");
      const resp = await fetch(path2, { credentials: "include" });
      if (!resp.ok) {
        let body = {};
        try {
          body = await resp.json();
        } catch {
        }
        throw new FetchError(resp, body);
      }
      return resp.json();
    },
    async loadDependencies(deps, libraryMap = {}) {
      await Promise.all(deps.map(async ({ machineName, majorVersion, minorVersion }) => {
        const id = `${machineName}-${majorVersion}.${minorVersion}`;
        if (libraryMap[id])
          return;
        try {
          libraryMap[id] = {
            library: await this.getJSON(this.librariesPath, id, "library.json"),
            path: id
          };
        } catch {
          libraryMap[id] = {
            library: await this.getJSON(this.librariesPath, machineName, "library.json"),
            path: machineName
          };
        }
        const libDeps = libraryMap[id].library.preloadedDependencies;
        if (libDeps) {
          this.loadDependencies(libDeps, libraryMap);
          libraryMap[id].dependencies = libDeps.map(({ machineName: machineName2, majorVersion: majorVersion2, minorVersion: minorVersion2 }) => `${machineName2}-${majorVersion2}.${minorVersion2}`);
        }
      }));
      return libraryMap;
    },
    sortDependencies(libraries) {
      const sorter = new Toposort();
      Object.entries(libraries).forEach(([id, { dependencies = [] }]) => sorter.add(id, dependencies));
      const sorted = sorter.sort().reverse();
      const styles = sorted.map((id) => libraries[id]).map(({ path: path2, library }) => {
        var _a;
        return (_a = library.preloadedCss) == null ? void 0 : _a.map((file) => `${this.librariesPath}/${path2}/${file.path}`);
      }).flat(1).filter(Boolean);
      const scripts = sorted.map((id) => libraries[id]).map(({ path: path2, library }) => {
        var _a;
        return (_a = library.preloadedJs) == null ? void 0 : _a.map((file) => `${this.librariesPath}/${path2}/${file.path}`);
      }).flat(1).filter(Boolean);
      return { styles, scripts };
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = ["srcdoc"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ])) : $data.error ? (openBlock(), createElementBlock("div", _hoisted_2, [
    renderSlot(_ctx.$slots, "error", { error: $data.error })
  ])) : (openBlock(), createElementBlock("iframe", {
    key: 2,
    ref: "iframe",
    style: { "width": "100%", "height": "100%", "border": "none" },
    srcdoc: $data.srcdoc,
    onLoad: _cache[0] || (_cache[0] = (...args) => $options.addEventHandlers && $options.addEventHandlers(...args))
  }, null, 40, _hoisted_3));
}
const h5p = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
exports.default = h5p;
//# sourceMappingURL=vue-h5p.js.map
