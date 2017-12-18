/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = "".trim, l = {}, m = a.document, n = "2.1.0", o = function (a, b) { return new o.fn.init(a, b) }, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) { return b.toUpperCase() }; o.fn = o.prototype = { jquery: n, constructor: o, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function (a) { var b = o.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a, b) { return o.each(this, a, b) }, map: function (a) { return this.pushStack(o.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, o.extend = o.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || o.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (o.isPlainObject(d) || (e = o.isArray(d))) ? (e ? (e = !1, f = c && o.isArray(c) ? c : []) : f = c && o.isPlainObject(c) ? c : {}, g[b] = o.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g }, o.extend({ expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === o.type(a) }, isArray: Array.isArray, isWindow: function (a) { return null != a && a === a.window }, isNumeric: function (a) { return a - parseFloat(a) >= 0 }, isPlainObject: function (a) { if ("object" !== o.type(a) || a.nodeType || o.isWindow(a)) return !1; try { if (a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (b) { return !1 } return !0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function (a) { var b, c = eval; a = o.trim(a), a && (1 === a.indexOf("use strict") ? (b = m.createElement("script"), b.text = a, m.head.appendChild(b).parentNode.removeChild(b)) : c(a)) }, camelCase: function (a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, c) { var d, e = 0, f = a.length, g = s(a); if (c) { if (g) { for (; f > e; e++)if (d = b.apply(a[e], c), d === !1) break } else for (e in a) if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1) break } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: function (a) { return null == a ? "" : k.call(a) }, makeArray: function (a, b) { var c = b || []; return null != a && (s(Object(a)) ? o.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function (a, b, c) { return null == b ? -1 : g.call(b, a, c) }, merge: function (a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, f = 0, g = a.length, h = s(a), i = []; if (h) for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function (a, b) { var c, e, f; return "string" == typeof b && (c = a[b], b = a, a = c), o.isFunction(a) ? (e = d.call(arguments, 2), f = function () { return a.apply(b || this, e.concat(d.call(arguments))) }, f.guid = a.guid = a.guid || o.guid++ , f) : void 0 }, now: Date.now, support: l }), o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) { h["[object " + b + "]"] = b.toLowerCase() }); function s(a) { var b = a.length, c = o.type(a); return "function" === c || o.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var t = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date, t = a.document, u = 0, v = 0, w = eb(), x = eb(), y = eb(), z = function (a, b) { return a === b && (j = !0), 0 }, A = "undefined", B = 1 << 31, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = D.indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++)if (this[b] === a) return b; return -1 }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", M = L.replace("w", "w#"), N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]", O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)", P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(O), U = new RegExp("^" + M + "$"), V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L.replace("w", "w*") + ")"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = /'|\\/g, ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), bb = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }; try { G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType } catch (cb) { G = { apply: D.length ? function (a, b) { F.apply(a, H.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function db(a, b, d, e) { var f, g, h, i, j, m, p, q, u, v; if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d; if (1 !== (i = b.nodeType) && 9 !== i) return []; if (n && !e) { if (f = Z.exec(a)) if (h = f[1]) { if (9 === i) { if (g = b.getElementById(h), !g || !g.parentNode) return d; if (g.id === h) return d.push(g), d } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d } else { if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d } if (c.qsa && (!o || !o.test(a))) { if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) { m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length; while (j--) m[j] = q + pb(m[j]); u = $.test(a) && mb(b.parentNode) || b, v = m.join(",") } if (v) try { return G.apply(d, u.querySelectorAll(v)), d } catch (w) { } finally { p || b.removeAttribute("id") } } } return xb(a.replace(P, "$1"), b, d, e) } function eb() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function fb(a) { return a[s] = !0, a } function gb(a) { var b = l.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function hb(a, b) { var c = a.split("|"), e = a.length; while (e--) d.attrHandle[c[e]] = b } function ib(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function jb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function kb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function lb(a) { return fb(function (b) { return b = +b, fb(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function mb(a) { return a && typeof a.getElementsByTagName !== A && a } c = db.support = {}, f = db.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, k = db.setDocument = function (a) { var b, e = a ? a.ownerDocument || a : t, g = e.defaultView; return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () { k() }, !1) : g.attachEvent && g.attachEvent("onunload", function () { k() })), c.attributes = gb(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = gb(function (a) { return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function (a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = gb(function (a) { return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length }), c.getById ? (d.find.ID = function (a, b) { if (typeof b.getElementById !== A && n) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(ab, bb); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(ab, bb); return function (a) { var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0 }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function (a) { a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked") }), gb(function (a) { var b = e.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:") })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function (a) { c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O) }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, z = b ? function (a, b) { if (a === b) return j = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return j = !0, 0; var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], k = [b]; if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0; if (f === g) return ib(a, b); c = a; while (c = c.parentNode) h.unshift(c); c = b; while (c = c.parentNode) k.unshift(c); while (h[d] === k[d]) d++; return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0 }, e) : l }, db.matches = function (a, b) { return db(a, null, null, b) }, db.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try { var d = q.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return db(b, l, null, [a]).length > 0 }, db.contains = function (a, b) { return (a.ownerDocument || a) !== l && k(a), r(a, b) }, db.attr = function (a, b) { (a.ownerDocument || a) !== l && k(a); var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0; return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, db.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, db.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return i = null, a }, e = db.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = db.selectors = { cacheLength: 50, createPseudo: fb, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[5] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(ab, bb).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = w[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function (a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = db.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), t = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && t) { k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) { k[a] = [u, n, m]; break } } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a); return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: fb(function (a) { var b = [], c = [], d = g(a.replace(P, "$1")); return d[s] ? fb(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), !c.pop() } }), has: fb(function (a) { return function (b) { return db(a, b).length > 0 } }), contains: fb(function (a) { return function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: fb(function (a) { return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(), function (b) { var c; do if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === m }, focus: function (a) { return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return X.test(a.nodeName) }, input: function (a) { return W.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: lb(function () { return [0] }), last: lb(function (a, b) { return [b - 1] }), eq: lb(function (a, b, c) { return [0 > c ? c + b : c] }), even: lb(function (a, b) { for (var c = 0; b > c; c += 2)a.push(c); return a }), odd: lb(function (a, b) { for (var c = 1; b > c; c += 2)a.push(c); return a }), lt: lb(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d); return a }), gt: lb(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = jb(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = kb(b); function nb() { } nb.prototype = d.filters = d.pseudos, d.setFilters = new nb; function ob(a, b) { var c, e, f, g, h, i, j, k = x[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? db.error(a) : x(a, i).slice(0) } function pb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value; return d } function qb(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = v++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j = [u, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } } function rb(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function sb(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g } function tb(a, b, c, d, e, f) { return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || wb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : sb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = sb(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) } function ub(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function (a) { return a === b }, i, !0), l = qb(function (a) { return I.call(b, a) > -1 }, i, !0), m = [function (a, c, d) { return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > j; j++)if (c = d.relative[a[j].type]) m = [qb(rb(m), c)]; else { if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) { for (e = ++j; f > e; e++)if (d.relative[a[e].type]) break; return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({ value: " " === a[j - 2].type ? "*" : "" })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a)) } m.push(c) } return rb(m) } function vb(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, i, j, k) { var m, n, o, p = 0, q = "0", r = f && [], s = [], t = h, v = f || e && d.find.TAG("*", k), w = u += null == t ? 1 : Math.random() || .1, x = v.length; for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) { if (e && m) { n = 0; while (o = a[n++]) if (o(m, g, i)) { j.push(m); break } k && (u = w) } c && ((m = !o && m) && p-- , f && r.push(m)) } if (p += q, c && q !== p) { n = 0; while (o = b[n++]) o(r, s, g, i); if (f) { if (p > 0) while (q--) r[q] || s[q] || (s[q] = E.call(j)); s = sb(s) } G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j) } return k && (u = w, h = t), r }; return c ? fb(f) : f } g = db.compile = function (a, b) { var c, d = [], e = [], f = y[a + " "]; if (!f) { b || (b = ob(a)), c = b.length; while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f); f = y(a, vb(e, d)) } return f }; function wb(a, b, c) { for (var d = 0, e = b.length; e > d; d++)db(a, b[d], c); return c } function xb(a, b, e, f) { var h, i, j, k, l, m = ob(a); if (!f && 1 === m.length) { if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) { if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e; a = a.slice(i.shift().value.length) } h = V.needsContext.test(a) ? 0 : i.length; while (h--) { if (j = i[h], d.relative[k = j.type]) break; if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) { if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e; break } } } return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e } return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function (a) { return 1 & a.compareDocumentPosition(l.createElement("div")) }), gb(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || hb("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && gb(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || hb("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), gb(function (a) { return null == a.getAttribute("disabled") }) || hb(J, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), db }(a); o.find = t, o.expr = t.selectors, o.expr[":"] = o.expr.pseudos, o.unique = t.uniqueSort, o.text = t.getText, o.isXMLDoc = t.isXML, o.contains = t.contains; var u = o.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/; function x(a, b, c) { if (o.isFunction(b)) return o.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return o.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (w.test(b)) return o.filter(b, a, c); b = o.filter(b, a) } return o.grep(a, function (a) { return g.call(b, a) >= 0 !== c }) } o.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? o.find.matchesSelector(d, a) ? [d] : [] : o.find.matches(a, o.grep(b, function (a) { return 1 === a.nodeType })) }, o.fn.extend({ find: function (a) { var b, c = this.length, d = [], e = this; if ("string" != typeof a) return this.pushStack(o(a).filter(function () { for (b = 0; c > b; b++)if (o.contains(e[b], this)) return !0 })); for (b = 0; c > b; b++)o.find(a, e[b], d); return d = this.pushStack(c > 1 ? o.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d }, filter: function (a) { return this.pushStack(x(this, a || [], !1)) }, not: function (a) { return this.pushStack(x(this, a || [], !0)) }, is: function (a) { return !!x(this, "string" == typeof a && u.test(a) ? o(a) : a || [], !1).length } }); var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = o.fn.init = function (a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof o ? b[0] : b, o.merge(this, o.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : m, !0)), v.test(c[1]) && o.isPlainObject(b)) for (c in b) o.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } return d = m.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = m, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : o.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(o) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), o.makeArray(a, this)) }; A.prototype = o.fn, y = o(m); var B = /^(?:parents|prev(?:Until|All))/, C = { children: !0, contents: !0, next: !0, prev: !0 }; o.extend({ dir: function (a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) { if (e && o(a).is(c)) break; d.push(a) } return d }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a); return c } }), o.fn.extend({ has: function (a) { var b = o(a, this), c = b.length; return this.filter(function () { for (var a = 0; c > a; a++)if (o.contains(this, b[a])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? o(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && o.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? o.unique(f) : f) }, index: function (a) { return a ? "string" == typeof a ? g.call(o(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(o.unique(o.merge(this.get(), o(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function D(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a } o.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return o.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return o.dir(a, "parentNode", c) }, next: function (a) { return D(a, "nextSibling") }, prev: function (a) { return D(a, "previousSibling") }, nextAll: function (a) { return o.dir(a, "nextSibling") }, prevAll: function (a) { return o.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return o.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return o.dir(a, "previousSibling", c) }, siblings: function (a) { return o.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return o.sibling(a.firstChild) }, contents: function (a) { return a.contentDocument || o.merge([], a.childNodes) } }, function (a, b) { o.fn[a] = function (c, d) { var e = o.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = o.filter(d, e)), this.length > 1 && (C[a] || o.unique(e), B.test(a) && e.reverse()), this.pushStack(e) } }); var E = /\S+/g, F = {}; function G(a) { var b = F[a] = {}; return o.each(a.match(E) || [], function (a, c) { b[c] = !0 }), b } o.Callbacks = function (a) { a = "string" == typeof a ? F[a] || G(a) : o.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) { b = !1; break } d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable()) }, k = { add: function () { if (h) { var c = h.length; !function g(b) { o.each(b, function (b, c) { var d = o.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c) }) }(arguments), d ? f = h.length : b && (e = c, j(b)) } return this }, remove: function () { return h && o.each(arguments, function (a, b) { var c; while ((c = o.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f-- , g >= c && g--) }), this }, has: function (a) { return a ? o.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function () { return h = [], f = 0, this }, disable: function () { return h = i = b = void 0, this }, disabled: function () { return !h }, lock: function () { return i = void 0, b || k.disable(), this }, locked: function () { return !i }, fireWith: function (a, b) { return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this }, fire: function () { return k.fireWith(this, arguments), this }, fired: function () { return !!c } }; return k }, o.extend({ Deferred: function (a) { var b = [["resolve", "done", o.Callbacks("once memory"), "resolved"], ["reject", "fail", o.Callbacks("once memory"), "rejected"], ["notify", "progress", o.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return o.Deferred(function (c) { o.each(b, function (b, f) { var g = o.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && o.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? o.extend(a, d) : d } }, e = {}; return d.pipe = d.then, o.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && o.isFunction(a.promise) ? e : 0, g = 1 === f ? a : o.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && o.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise() } }); var H; o.fn.ready = function (a) { return o.ready.promise().done(a), this }, o.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? o.readyWait++ : o.ready(!0) }, ready: function (a) { (a === !0 ? --o.readyWait : o.isReady) || (o.isReady = !0, a !== !0 && --o.readyWait > 0 || (H.resolveWith(m, [o]), o.fn.trigger && o(m).trigger("ready").off("ready"))) } }); function I() { m.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), o.ready() } o.ready.promise = function (b) { return H || (H = o.Deferred(), "complete" === m.readyState ? setTimeout(o.ready) : (m.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b) }, o.ready.promise(); var J = o.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === o.type(c)) { e = !0; for (h in c) o.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, o.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(o(a), c) })), b)) for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }; o.acceptData = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; function K() { Object.defineProperty(this.cache = {}, 0, { get: function () { return {} } }), this.expando = o.expando + Math.random() } K.uid = 1, K.accepts = o.acceptData, K.prototype = { key: function (a) { if (!K.accepts(a)) return 0; var b = {}, c = a[this.expando]; if (!c) { c = K.uid++; try { b[this.expando] = { value: c }, Object.defineProperties(a, b) } catch (d) { b[this.expando] = c, o.extend(a, b) } } return this.cache[c] || (this.cache[c] = {}), c }, set: function (a, b, c) { var d, e = this.key(a), f = this.cache[e]; if ("string" == typeof b) f[b] = c; else if (o.isEmptyObject(f)) o.extend(this.cache[e], b); else for (d in b) f[d] = b[d]; return f }, get: function (a, b) { var c = this.cache[this.key(a)]; return void 0 === b ? c : c[b] }, access: function (a, b, c) { var d; return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, o.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function (a, b) { var c, d, e, f = this.key(a), g = this.cache[f]; if (void 0 === b) this.cache[f] = {}; else { o.isArray(b) ? d = b.concat(b.map(o.camelCase)) : (e = o.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length; while (c--) delete g[d[c]] } }, hasData: function (a) { return !o.isEmptyObject(this.cache[a[this.expando]] || {}) }, discard: function (a) { a[this.expando] && delete this.cache[a[this.expando]] } }; var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g; function P(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? o.parseJSON(c) : c } catch (e) { } M.set(a, b, c) } else c = void 0; return c } o.extend({ hasData: function (a) { return M.hasData(a) || L.hasData(a) }, data: function (a, b, c) { return M.access(a, b, c) }, removeData: function (a, b) { M.remove(a, b) }, _data: function (a, b, c) { return L.access(a, b, c) }, _removeData: function (a, b) { L.remove(a, b) } }), o.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = o.camelCase(d.slice(5)), P(f, d, e[d])); L.set(f, "hasDataAttrs", !0)
                } return e
            } return "object" == typeof a ? this.each(function () { M.set(this, a) }) : J(this, function (b) { var c, d = o.camelCase(a); if (f && void 0 === b) { if (c = M.get(f, a), void 0 !== c) return c; if (c = M.get(f, d), void 0 !== c) return c; if (c = P(f, d, void 0), void 0 !== c) return c } else this.each(function () { var c = M.get(this, d); M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) { return this.each(function () { M.remove(this, a) }) }
    }), o.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || o.isArray(c) ? d = L.access(a, b, o.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = o.queue(a, b), d = c.length, e = c.shift(), f = o._queueHooks(a, b), g = function () { o.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return L.get(a, c) || L.access(a, c, { empty: o.Callbacks("once memory").add(function () { L.remove(a, [b + "queue", c]) }) }) } }), o.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? o.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = o.queue(this, a, b); o._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && o.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { o.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = o.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++ , c.empty.add(h)); return h(), e.promise(b) } }); var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) { return a = b || a, "none" === o.css(a, "display") || !o.contains(a.ownerDocument, a) }, T = /^(?:checkbox|radio)$/i; !function () { var a = m.createDocumentFragment(), b = a.appendChild(m.createElement("div")); b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }(); var U = "undefined"; l.focusinBubbles = "onfocusin" in a; var V = /^key/, W = /^(?:mouse|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/; function Z() { return !0 } function $() { return !1 } function _() { try { return m.activeElement } catch (a) { } } o.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, p, q, r = L.get(a); if (r) { c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = o.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) { return typeof o !== U && o.event.triggered !== b.type ? o.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(E) || [""], j = b.length; while (j--) h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n && (l = o.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = o.event.special[n] || {}, k = o.extend({ type: n, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && o.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), o.event.global[n] = !0) } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, p, q, r = L.hasData(a) && L.get(a); if (r && (i = r.events)) { b = (b || "").match(E) || [""], j = b.length; while (j--) if (h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n) { l = o.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount-- , l.remove && l.remove.call(a, k)); g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || o.removeEvent(a, n, r.handle), delete i[n]) } else for (n in i) o.event.remove(a, n + b[j], c, d, !0); o.isEmptyObject(i) && (delete r.handle, L.remove(a, "events")) } }, trigger: function (b, c, d, e) { var f, g, h, i, k, l, n, p = [d || m], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : []; if (g = h = d = d || m, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + o.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[o.expando] ? b : new o.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : o.makeArray(c, [b]), n = o.event.special[q] || {}, e || !n.trigger || n.trigger.apply(d, c) !== !1)) { if (!e && !n.noBubble && !o.isWindow(d)) { for (i = n.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g; h === (d.ownerDocument || m) && p.push(h.defaultView || h.parentWindow || a) } f = 0; while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : n.bindType || q, l = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), l && l.apply(g, c), l = k && g[k], l && l.apply && o.acceptData(g) && (b.result = l.apply(g, c), b.result === !1 && b.preventDefault()); return b.type = q, e || b.isDefaultPrevented() || n._default && n._default.apply(p.pop(), c) !== !1 || !o.acceptData(d) || k && o.isFunction(d[q]) && !o.isWindow(d) && (h = d[k], h && (d[k] = null), o.event.triggered = q, d[q](), o.event.triggered = void 0, h && (d[k] = h)), b.result } }, dispatch: function (a) { a = o.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = o.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = o.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((o.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) { for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? o(e, this).index(i) >= 0 : o.find(e, this, null, [i]).length), d[e] && d.push(f); d.length && g.push({ elem: i, handlers: d }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, d, e, f = b.button; return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || m, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, fix: function (a) { if (a[o.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new o.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target || (a.target = m), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a }, special: { load: { noBubble: !0 }, focus: { trigger: function () { return this !== _() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function () { return this === _() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return "checkbox" === this.type && this.click && o.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function (a) { return o.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && (a.originalEvent.returnValue = a.result) } } }, simulate: function (a, b, c, d) { var e = o.extend(new o.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? o.event.trigger(e, null, b) : o.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, o.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) }, o.Event = function (a, b) { return this instanceof o.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() ? Z : $) : this.type = a, b && o.extend(this, b), this.timeStamp = a && a.timeStamp || o.now(), void (this[o.expando] = !0)) : new o.Event(a, b) }, o.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation() }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = Z, this.stopPropagation() } }, o.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) { o.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !o.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), l.focusinBubbles || o.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { o.event.simulate(b, a.target, o.event.fix(a), !0) }; o.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = L.access(d, b); e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = L.access(d, b) - 1; e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b)) } } }), o.fn.extend({ on: function (a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (g in a) this.on(g, b, c, a[g], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this; return 1 === e && (f = d, d = function (a) { return o().off(a), f.apply(this, arguments) }, d.guid = f.guid || (f.guid = o.guid++)), this.each(function () { o.event.add(this, a, d, c, b) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, o(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () { o.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { o.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? o.event.trigger(a, b, c, !0) : void 0 } }); var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td; function jb(a, b) { return o.nodeName(a, "table") && o.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function kb(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a } function lb(a) { var b = gb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function mb(a, b) { for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval")) } function nb(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j) for (c = 0, d = j[e].length; d > c; c++)o.event.add(b, e, j[e][c]) } M.hasData(a) && (h = M.access(a), i = o.extend({}, h), M.set(b, i)) } } function ob(a, b) { var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && o.nodeName(a, b) ? o.merge([a], c) : c } function pb(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } o.extend({ clone: function (a, b, c) { var d, e, f, g, h = a.cloneNode(!0), i = o.contains(a.ownerDocument, a); if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || o.isXMLDoc(a))) for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)pb(f[d], g[d]); if (b) if (c) for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)nb(f[d], g[d]); else nb(a, h); return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)if (e = a[m], e || 0 === e) if ("object" === o.type(e)) o.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) { f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0]; while (j--) f = f.lastChild; o.merge(l, f.childNodes), f = k.firstChild, f.textContent = "" } else l.push(b.createTextNode(e)); k.textContent = "", m = 0; while (e = l[m++]) if ((!d || -1 === o.inArray(e, d)) && (i = o.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) { j = 0; while (e = f[j++]) fb.test(e.type || "") && c.push(e) } return k }, cleanData: function (a) { for (var b, c, d, e, f, g, h = o.event.special, i = 0; void 0 !== (c = a[i]); i++) { if (o.acceptData(c) && (f = c[L.expando], f && (b = L.cache[f]))) { if (d = Object.keys(b.events || {}), d.length) for (g = 0; void 0 !== (e = d[g]); g++)h[e] ? o.event.remove(c, e) : o.removeEvent(c, e, b.handle); L.cache[f] && delete L.cache[f] } delete M.cache[c[M.expando]] } } }), o.fn.extend({ text: function (a) { return J(this, function (a) { return void 0 === a ? o.text(this) : this.empty().each(function () { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a) }) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = jb(this, a); b.appendChild(a) } }) }, prepend: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = jb(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) { for (var c, d = a ? o.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || o.cleanData(ob(c)), c.parentNode && (b && o.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (o.cleanData(ob(a, !1)), a.textContent = ""); return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return o.clone(this, a, b) }) }, html: function (a) { return J(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) { a = a.replace(ab, "<$1></$2>"); try { for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (o.cleanData(ob(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, o.cleanData(ob(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, k = this.length, m = this, n = k - 1, p = a[0], q = o.isFunction(p); if (q || k > 1 && "string" == typeof p && !l.checkClone && eb.test(p)) return this.each(function (c) { var d = m.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (k && (c = o.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) { for (f = o.map(ob(c, "script"), kb), g = f.length; k > j; j++)h = c, j !== n && (h = o.clone(h, !0, !0), g && o.merge(f, ob(h, "script"))), b.call(this[j], h, j); if (g) for (i = f[f.length - 1].ownerDocument, o.map(f, lb), j = 0; g > j; j++)h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && o.contains(i, h) && (h.src ? o._evalUrl && o._evalUrl(h.src) : o.globalEval(h.textContent.replace(hb, ""))) } return this } }), o.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { o.fn[a] = function (a) { for (var c, d = [], e = o(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), o(e[h])[b](c), f.apply(d, c.get()); return this.pushStack(d) } }); var qb, rb = {}; function sb(b, c) { var d = o(c.createElement(b)).appendTo(c.body), e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : o.css(d[0], "display"); return d.detach(), e } function tb(a) { var b = m, c = rb[a]; return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c } var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) }; function xb(a, b, c) { var d, e, f, g, h = a.style; return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || o.contains(a.ownerDocument, a) || (g = o.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g } function yb(a, b) { return { get: function () { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } } !function () { var b, c, d = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", e = m.documentElement, f = m.createElement("div"), g = m.createElement("div"); g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(g); function h() { g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", e.appendChild(f); var d = a.getComputedStyle(g, null); b = "1%" !== d.top, c = "4px" === d.width, e.removeChild(f) } a.getComputedStyle && o.extend(l, { pixelPosition: function () { return h(), b }, boxSizingReliable: function () { return null == c && h(), c }, reliableMarginRight: function () { var b, c = g.appendChild(m.createElement("div")); return c.style.cssText = g.style.cssText = d, c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.innerHTML = "", b } }) }(), o.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = { position: "absolute", visibility: "hidden", display: "block" }, Db = { letterSpacing: 0, fontWeight: 400 }, Eb = ["Webkit", "O", "Moz", "ms"]; function Fb(a, b) { if (b in a) return b; var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length; while (e--) if (b = Eb[e] + c, b in a) return b; return d } function Gb(a, b, c) { var d = Ab.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b } function Hb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += o.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= o.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= o.css(a, "border" + R[f] + "Width", !0, e))) : (g += o.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += o.css(a, "border" + R[f] + "Width", !0, e))); return g } function Ib(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === o.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e; d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px" } function Jb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : f[g] || (e = S(d), (c && "none" !== c || !e) && L.set(d, "olddisplay", e ? c : o.css(d, "display")))); for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } o.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = xb(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = o.camelCase(b), i = a.style; return b = o.cssProps[h] || (o.cssProps[h] = Fb(i, h)), g = o.cssHooks[b] || o.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(o.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || o.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = "", i[b] = c)), void 0) } }, css: function (a, b, c, d) { var e, f, g, h = o.camelCase(b); return b = o.cssProps[h] || (o.cssProps[h] = Fb(a.style, h)), g = o.cssHooks[b] || o.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || o.isNumeric(f) ? f || 0 : e) : e } }), o.each(["height", "width"], function (a, b) { o.cssHooks[b] = { get: function (a, c, d) { return c ? 0 === a.offsetWidth && zb.test(o.css(a, "display")) ? o.swap(a, Cb, function () { return Ib(a, b, d) }) : Ib(a, b, d) : void 0 }, set: function (a, c, d) { var e = d && wb(a); return Gb(a, c, d ? Hb(a, b, d, "border-box" === o.css(a, "boxSizing", !1, e), e) : 0) } } }), o.cssHooks.marginRight = yb(l.reliableMarginRight, function (a, b) { return b ? o.swap(a, { display: "inline-block" }, xb, [a, "marginRight"]) : void 0 }), o.each({ margin: "", padding: "", border: "Width" }, function (a, b) { o.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, ub.test(a) || (o.cssHooks[a + b].set = Gb) }), o.fn.extend({ css: function (a, b) { return J(this, function (a, b, c) { var d, e, f = {}, g = 0; if (o.isArray(b)) { for (d = wb(a), e = b.length; e > g; g++)f[b[g]] = o.css(a, b[g], !1, d); return f } return void 0 !== c ? o.style(a, b, c) : o.css(a, b) }, a, b, arguments.length > 1) }, show: function () { return Jb(this, !0) }, hide: function () { return Jb(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { S(this) ? o(this).show() : o(this).hide() }) } }); function Kb(a, b, c, d, e) { return new Kb.prototype.init(a, b, c, d, e) } o.Tween = Kb, Kb.prototype = { constructor: Kb, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (o.cssNumber[c] ? "" : "px") }, cur: function () { var a = Kb.propHooks[this.prop]; return a && a.get ? a.get(this) : Kb.propHooks._default.get(this) }, run: function (a) { var b, c = Kb.propHooks[this.prop]; return this.pos = b = this.options.duration ? o.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this } }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = { _default: { get: function (a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = o.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function (a) { o.fx.step[a.prop] ? o.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[o.cssProps[a.prop]] || o.cssHooks[a.prop]) ? o.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, o.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 } }, o.fx = Kb.prototype.init, o.fx.step = {}; var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = { "*": [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (o.cssNumber[a] ? "" : "px"), g = (o.cssNumber[a] || "px" !== f && +d) && Ob.exec(o.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || ".5", g /= h, o.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] }; function Sb() { return setTimeout(function () { Lb = void 0 }), Lb = o.now() } function Tb(a, b) { var c, d = 0, e = { height: a }; for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e } function Ub(a, b, c) { for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a)) return d } function Vb(a, b, c) { var d, e, f, g, h, i, j, k = this, l = {}, m = a.style, n = a.nodeType && S(a), p = L.get(a, "fxshow"); c.queue || (h = o._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++ , k.always(function () { k.always(function () { h.unqueued-- , o.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = o.css(a, "display"), "none" === j && (j = tb(a.nodeName)), "inline" === j && "none" === o.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function () { m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], Nb.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) { if ("show" !== e || !p || void 0 === p[d]) continue; n = !0 } l[d] = p && p[d] || o.style(a, d) } if (!o.isEmptyObject(l)) { p ? "hidden" in p && (n = p.hidden) : p = L.access(a, "fxshow", {}), f && (p.hidden = !n), n ? o(a).show() : k.done(function () { o(a).hide() }), k.done(function () { var b; L.remove(a, "fxshow"); for (b in l) o.style(a, b, l[b]) }); for (d in l) g = Ub(n ? p[d] : 0, d, k), d in p || (p[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function Wb(a, b) { var c, d, e, f, g; for (c in a) if (d = o.camelCase(c), e = b[d], f = a[c], o.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = o.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function Xb(a, b, c) { var d, e, f = 0, g = Qb.length, h = o.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: o.extend({}, b), opts: o.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: Lb || Sb(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = o.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++)j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (Wb(k, j.opts.specialEasing); g > f; f++)if (d = Qb[f].call(j, a, k, j.opts)) return d; return o.map(k, Ub, j), o.isFunction(j.opts.start) && j.opts.start.call(a, j), o.fx.timer(o.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } o.Animation = o.extend(Xb, { tweener: function (a, b) { o.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b) }, prefilter: function (a, b) { b ? Qb.unshift(a) : Qb.push(a) } }), o.speed = function (a, b, c) { var d = a && "object" == typeof a ? o.extend({}, a) : { complete: c || !c && b || o.isFunction(a) && a, duration: a, easing: c && b || b && !o.isFunction(b) && b }; return d.duration = o.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in o.fx.speeds ? o.fx.speeds[d.duration] : o.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { o.isFunction(d.old) && d.old.call(this), d.queue && o.dequeue(this, d.queue) }, d }, o.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = o.isEmptyObject(a), f = o.speed(b, c, d), g = function () { var b = Xb(this, o.extend({}, a), f); (e || L.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = o.timers, g = L.get(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]); for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && o.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = o.timers, g = d ? d.length : 0; for (c.finish = !0, o.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), o.each(["toggle", "show", "hide"], function (a, b) { var c = o.fn[b]; o.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e) } }), o.each({ slideDown: Tb("show"), slideUp: Tb("hide"), slideToggle: Tb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { o.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), o.timers = [], o.fx.tick = function () { var a, b = 0, c = o.timers; for (Lb = o.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || o.fx.stop(), Lb = void 0 }, o.fx.timer = function (a) { o.timers.push(a), a() ? o.fx.start() : o.timers.pop() }, o.fx.interval = 13, o.fx.start = function () { Mb || (Mb = setInterval(o.fx.tick, o.fx.interval)) }, o.fx.stop = function () { clearInterval(Mb), Mb = null }, o.fx.speeds = { slow: 600, fast: 200, _default: 400 }, o.fn.delay = function (a, b) { return a = o.fx ? o.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, function () { var a = m.createElement("input"), b = m.createElement("select"), c = b.appendChild(m.createElement("option")); a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = m.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value }(); var Yb, Zb, $b = o.expr.attrHandle; o.fn.extend({ attr: function (a, b) { return J(this, o.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { o.removeAttr(this, a) }) } }), o.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? o.prop(a, b, c) : (1 === f && o.isXMLDoc(a) || (b = b.toLowerCase(), d = o.attrHooks[b] || (o.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = o.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void o.removeAttr(a, b)) }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(E); if (f && 1 === a.nodeType) while (c = f[e++]) d = o.propFix[c] || c, o.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c) }, attrHooks: { type: { set: function (a, b) { if (!l.radioValue && "radio" === b && o.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } } }), Zb = { set: function (a, b, c) { return b === !1 ? o.removeAttr(a, c) : a.setAttribute(c, c), c } }, o.each(o.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $b[b] || o.find.attr; $b[b] = function (a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    }); var _b = /^(?:input|select|textarea|button)$/i; o.fn.extend({ prop: function (a, b) { return J(this, o.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return this.each(function () { delete this[o.propFix[a] || a] }) } }), o.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !o.isXMLDoc(a), f && (b = o.propFix[b] || b, e = o.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1 } } } }), l.optSelected || (o.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null } }), o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { o.propFix[this.toLowerCase()] = this }); var ac = /[\t\r\n\f]/g; o.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length; if (o.isFunction(a)) return this.each(function (b) { o(this).addClass(a.call(this, b, this.className)) }); if (h) for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) { f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " "); g = o.trim(d), c.className !== g && (c.className = g) } return this }, removeClass: function (a) { var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length; if (o.isFunction(a)) return this.each(function (b) { o(this).removeClass(a.call(this, b, this.className)) }); if (h) for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) { f = 0; while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " "); g = a ? o.trim(d) : "", c.className !== g && (c.className = g) } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(o.isFunction(a) ? function (c) { o(this).toggleClass(a.call(this, c, this.className, b), b) } : function () { if ("string" === c) { var b, d = 0, e = o(this), f = a.match(E) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "") }) }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0; return !1 } }); var bc = /\r/g; o.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = o.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, o(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : o.isArray(e) && (e = o.map(e, function (a) { return null == a ? "" : a + "" })), b = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = o.valHooks[e.type] || o.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c) } } }), o.extend({ valHooks: { select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && o.nodeName(c.parentNode, "optgroup"))) { if (b = o(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = o.makeArray(b), g = e.length; while (g--) d = e[g], (d.selected = o.inArray(o(d).val(), f) >= 0) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), o.each(["radio", "checkbox"], function () { o.valHooks[this] = { set: function (a, b) { return o.isArray(b) ? a.checked = o.inArray(o(a).val(), b) >= 0 : void 0 } }, l.checkOn || (o.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }), o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { o.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), o.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); var cc = o.now(), dc = /\?/; o.parseJSON = function (a) { return JSON.parse(a + "") }, o.parseXML = function (a) { var b, c; if (!a || "string" != typeof a) return null; try { c = new DOMParser, b = c.parseFromString(a, "text/xml") } catch (d) { b = void 0 } return (!b || b.getElementsByTagName("parsererror").length) && o.error("Invalid XML: " + a), b }; var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*"); try { fc = location.href } catch (qc) { fc = m.createElement("a"), fc.href = "", fc = fc.href } ec = mc.exec(fc.toLowerCase()) || []; function rc(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(E) || []; if (o.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function sc(a, b, c, d) { var e = {}, f = a === oc; function g(h) { var i; return e[h] = !0, o.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function tc(a, b) { var c, d, e = o.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && o.extend(!0, a, d), a } function uc(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d) for (e in h) if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c) f = i[0]; else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break } g || (g = e) } f = f || g } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function vc(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } o.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: fc, type: "GET", isLocal: jc.test(ec[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": pc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": o.parseJSON, "text xml": o.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? tc(tc(a, o.ajaxSettings), b) : tc(o.ajaxSettings, a) }, ajaxPrefilter: rc(nc), ajaxTransport: rc(oc), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = o.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? o(l) : o.event, n = o.Deferred(), p = o.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === t) { if (!f) { f = {}; while (b = ic.exec(e)) f[b[1].toLowerCase()] = b[2] } b = f[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === t ? e : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function (a) { return t || (k.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this }, abort: function (a) { var b = a || u; return c && c.abort(b), x(0, b), this } }; if (n.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = o.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = o.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t) return v; i = k.global, i && 0 === o.active++ && o.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (o.lastModified[d] && v.setRequestHeader("If-Modified-Since", o.lastModified[d]), o.etag[d] && v.setRequestHeader("If-None-Match", o.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]); for (j in k.headers) v.setRequestHeader(j, k.headers[j]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort(); u = "abort"; for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]); if (c = sc(oc, k, b, v)) { v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort("timeout") }, k.timeout)); try { t = 1, c.send(r, x) } catch (w) { if (!(2 > t)) throw w; x(-1, w) } } else x(-1, "No Transport"); function x(a, b, f, h) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (o.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (o.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? n.resolveWith(l, [r, x, v]) : n.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --o.active || o.event.trigger("ajaxStop"))) } return v }, getJSON: function (a, b, c) { return o.get(a, b, c, "json") }, getScript: function (a, b) { return o.get(a, void 0, b, "script") } }), o.each(["get", "post"], function (a, b) { o[b] = function (a, c, d, e) { return o.isFunction(c) && (e = e || d, d = c, c = void 0), o.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), o.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { o.fn[b] = function (a) { return this.on(b, a) } }), o._evalUrl = function (a) { return o.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, o.fn.extend({ wrapAll: function (a) { var b; return o.isFunction(a) ? this.each(function (b) { o(this).wrapAll(a.call(this, b)) }) : (this[0] && (b = o(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this) }, wrapInner: function (a) { return this.each(o.isFunction(a) ? function (b) { o(this).wrapInner(a.call(this, b)) } : function () { var b = o(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = o.isFunction(a); return this.each(function (c) { o(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { o.nodeName(this, "body") || o(this).replaceWith(this.childNodes) }).end() } }), o.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 }, o.expr.filters.visible = function (a) { return !o.expr.filters.hidden(a) }; var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i; function Bc(a, b, c, d) { var e; if (o.isArray(b)) o.each(b, function (b, e) { c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) }); else if (c || "object" !== o.type(b)) d(a, b); else for (e in b) Bc(a + "[" + e + "]", b[e], c, d) } o.param = function (a, b) { var c, d = [], e = function (a, b) { b = o.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = o.ajaxSettings && o.ajaxSettings.traditional), o.isArray(a) || a.jquery && !o.isPlainObject(a)) o.each(a, function () { e(this.name, this.value) }); else for (c in a) Bc(c, a[c], b, e); return d.join("&").replace(wc, "+") }, o.fn.extend({ serialize: function () { return o.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = o.prop(this, "elements"); return a ? o.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !o(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a)) }).map(function (a, b) { var c = o(this).val(); return null == c ? null : o.isArray(c) ? o.map(c, function (a) { return { name: b.name, value: a.replace(yc, "\r\n") } }) : { name: b.name, value: c.replace(yc, "\r\n") } }).get() } }), o.ajaxSettings.xhr = function () { try { return new XMLHttpRequest } catch (a) { } }; var Cc = 0, Dc = {}, Ec = { 0: 200, 1223: 204 }, Fc = o.ajaxSettings.xhr(); a.ActiveXObject && o(a).on("unload", function () { for (var a in Dc) Dc[a]() }), l.cors = !!Fc && "withCredentials" in Fc, l.ajax = Fc = !!Fc, o.ajaxTransport(function (a) { var b; return l.cors || Fc && !a.crossDomain ? { send: function (c, d) { var e, f = a.xhr(), g = ++Cc; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) f.setRequestHeader(e, c[e]); b = function (a) { return function () { b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders())) } }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort"), f.send(a.hasContent && a.data || null) }, abort: function () { b && b() } } : void 0 }), o.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { return o.globalEval(a), a } } }), o.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), o.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c; return { send: function (d, e) { b = o("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) { b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type) }), m.head.appendChild(b[0]) }, abort: function () { c && c() } } } }); var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/; o.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = Gc.pop() || o.expando + "_" + cc++; return this[a] = !0, a } }), o.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = o.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || o.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && o.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), o.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || m; var d = v.exec(a), e = !c && []; return d ? [b.createElement(d[1])] : (d = o.buildFragment([a], b, e), e && e.length && o(e).remove(), o.merge([], d.childNodes)) }; var Ic = o.fn.load; o.fn.load = function (a, b, c) { if ("string" != typeof a && Ic) return Ic.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h >= 0 && (d = a.slice(h), a = a.slice(0, h)), o.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && o.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) { f = arguments, g.html(d ? o("<div>").append(o.parseHTML(a)).find(d) : a) }).complete(c && function (a, b) { g.each(c, f || [a.responseText, b, a]) }), this }, o.expr.filters.animated = function (a) { return o.grep(o.timers, function (b) { return a === b.elem }).length }; var Jc = a.document.documentElement; function Kc(a) { return o.isWindow(a) ? a : 9 === a.nodeType && a.defaultView } o.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = o.css(a, "position"), l = o(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = o.css(a, "top"), i = o.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), o.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, o.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { o.offset.setOffset(this, a, b) }); var b, c, d = this[0], e = { top: 0, left: 0 }, f = d && d.ownerDocument; if (f) return b = f.documentElement, o.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e }, position: function () { if (this[0]) { var a, b, c = this[0], d = { top: 0, left: 0 }; return "fixed" === o.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), o.nodeName(a[0], "html") || (d = a.offset()), d.top += o.css(a[0], "borderTopWidth", !0), d.left += o.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - o.css(c, "marginTop", !0), left: b.left - d.left - o.css(c, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || Jc; while (a && !o.nodeName(a, "html") && "static" === o.css(a, "position")) a = a.offsetParent; return a || Jc }) } }), o.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) { var d = "pageYOffset" === c; o.fn[b] = function (e) { return J(this, function (b, e, f) { var g = Kc(b); return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f) }, b, e, arguments.length, null) } }), o.each(["top", "left"], function (a, b) { o.cssHooks[b] = yb(l.pixelPosition, function (a, c) { return c ? (c = xb(a, b), vb.test(c) ? o(a).position()[b] + "px" : c) : void 0 }) }), o.each({ Height: "height", Width: "width" }, function (a, b) { o.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { o.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return J(this, function (b, c, d) { var e; return o.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? o.css(b, c, g) : o.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), o.fn.size = function () { return this.length }, o.fn.andSelf = o.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return o }); var Lc = a.jQuery, Mc = a.$; return o.noConflict = function (b) { return a.$ === o && (a.$ = Mc), b && a.jQuery === o && (a.jQuery = Lc), o }, typeof b === U && (a.jQuery = a.$ = o), o
});

/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +function (a) { "use strict"; function b() { var a = document.createElement("bootstrap"), b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] }; return !1 } a.fn.emulateTransitionEnd = function (b) { var c = !1, d = this; a(this).one("bsTransitionEnd", function () { c = !0 }); var e = function () { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function () { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function (b) { return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var c = a(this), e = c.data("bs.alert"); e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]', d = function (b) { a(b).on("click", c, this.close) }; d.VERSION = "3.2.0", d.prototype.close = function (b) { function c() { f.detach().trigger("closed.bs.alert").remove() } var d = a(this), e = d.attr("data-target"); e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, "")); var f = a(e); b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c()) }; var e = a.fn.alert; a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b; e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function (b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 }; c.VERSION = "3.2.0", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) { var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data(); b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function () { "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c)) }, this), 0) }, c.prototype.toggle = function () { var a = !0, b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change") } a && this.$element.toggleClass("active") }; var d = a.fn.button; a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) { var d = a(c.target); d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) { a(b.target).closest(".btn").toggleClass("focus", "focus" == b.type) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide; e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function (b, c) { this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) }; c.VERSION = "3.2.0", c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }, c.prototype.keydown = function (a) { switch (a.which) { case 37: this.prev(); break; case 39: this.next(); break; default: return }a.preventDefault() }, c.prototype.cycle = function (b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function (a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.to = function (b) { var c = this, d = this.getItemIndex(this.$active = this.$element.find(".item.active")); return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () { c.to(b) }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b])) }, c.prototype.pause = function (b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function () { return this.sliding ? void 0 : this.slide("next") }, c.prototype.prev = function () { return this.sliding ? void 0 : this.slide("prev") }, c.prototype.slide = function (b, c) { var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this; if (!e.length) { if (!this.options.wrap) return; e = this.$element.find(".item")[h]() } if (e.hasClass("active")) return this.sliding = !1; var j = e[0], k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: g }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, f && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(e)]); l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: g }); return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function () { e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this } }; var d = a.fn.carousel; a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () { return a.fn.carousel = d, this }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (c) { var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to"); h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } }), a(window).on("load", function () { a('[data-ride="carousel"]').each(function () { var c = a(this); b.call(c, c.data()) }) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b); !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function (b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle() }; c.VERSION = "3.2.0", c.DEFAULTS = { toggle: !0 }, c.prototype.dimension = function () { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, c.prototype.show = function () { if (!this.transitioning && !this.$element.hasClass("in")) { var c = a.Event("show.bs.collapse"); if (this.$element.trigger(c), !c.isDefaultPrevented()) { var d = this.$parent && this.$parent.find("> .panel > .in"); if (d && d.length) { var e = d.data("bs.collapse"); if (e && e.transitioning) return; b.call(d, "hide"), e || d.data("bs.collapse", null) } var f = this.dimension(); this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1; var g = function () { this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return g.call(this); var h = a.camelCase(["scroll", f].join("-")); this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h]) } } }, c.prototype.hide = function () { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension(); this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in"), this.transitioning = 1; var d = function () { this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this) } } }, c.prototype.toggle = function () { this[this.$element.hasClass("in") ? "hide" : "show"]() }; var d = a.fn.collapse; a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function () { return a.fn.collapse = d, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (c) { var d, e = a(this), f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""), g = a(f), h = g.data("bs.collapse"), i = h ? "toggle" : e.data(), j = e.attr("data-parent"), k = j && a(j); h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e.toggleClass("collapsed", g.hasClass("in"))), b.call(g, i) }) }(jQuery), +function (a) { "use strict"; function b(b) { b && 3 === b.which || (a(e).remove(), a(f).each(function () { var d = a(this), e = c(d), f = { relatedTarget: this }; e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))) })) } function c(b) { var c = b.attr("data-target"); c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() } function d(b) { return this.each(function () { var c = a(this), d = c.data("bs.dropdown"); d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) { a(b).on("click.bs.dropdown", this.toggle) }; g.VERSION = "3.2.0", g.prototype.toggle = function (d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = c(e), g = f.hasClass("open"); if (b(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return; e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h) } return !1 } }, g.prototype.keydown = function (b) { if (/(38|40|27)/.test(b.keyCode)) { var d = a(this); if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) { var e = c(d), g = e.hasClass("open"); if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.divider):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h); if (i.length) { var j = i.index(i.filter(":focus")); 38 == b.keyCode && j > 0 && j-- , 40 == b.keyCode && j < i.length - 1 && j++ , ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown; a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown) }(jQuery), +function (a) { "use strict"; function b(b, d) { return this.each(function () { var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b); f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function (b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () { this.$element.trigger("loaded.bs.modal") }, this)) }; c.VERSION = "3.2.0", c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function (b) { var c = this, d = a.Event("show.bs.modal", { relatedTarget: b }); this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () { var d = a.support.transition && c.$element.hasClass("fade"); c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus(); var e = a.Event("shown.bs.modal", { relatedTarget: b }); d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function () { c.$element.trigger("focus").trigger(e) }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e) })) }, c.prototype.hide = function (b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()) }, c.prototype.enforceFocus = function () { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) { this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function () { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.hideModal = function () { var a = this; this.$element.hide(), this.backdrop(function () { a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function () { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function (b) { var c = this, d = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var e = a.support.transition && d; if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("mousedown.dismiss.bs.modal", a.proxy(function (a) { a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)) }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return; e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var f = function () { c.removeBackdrop(), b && b() }; a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f() } else b && b() }, c.prototype.checkScrollbar = function () { document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()) }, c.prototype.setScrollbar = function () { var a = parseInt(this.$body.css("padding-right") || 0, 10); this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function () { this.$body.css("padding-right", "") }, c.prototype.measureScrollbar = function () { var a = document.createElement("div"); a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal; a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) { var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data()); d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function () { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b; (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function (a, b) { this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b) }; c.VERSION = "3.2.0", c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) { this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout"; this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } } this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function () { return c.DEFAULTS }, c.prototype.getOptions = function (b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function () { var b = {}, c = this.getDefaults(); return this._options && a.each(this._options, function (a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function (b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show() }, c.prototype.leave = function (b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide() }, c.prototype.show = function () { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var c = a.contains(document.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !c) return; var d = this, e = this.tip(), f = this.getUID(this.type); this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade"); var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, h = /\s?auto?\s?/i, i = h.test(g); i && (g = g.replace(h, "") || "top"), e.detach().css({ top: 0, left: 0, display: "block" }).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element); var j = this.getPosition(), k = e[0].offsetWidth, l = e[0].offsetHeight; if (i) { var m = g, n = this.$element.parent(), o = this.getPosition(n); g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g) } var p = this.getCalculatedOffset(g, j, k, l); this.applyPlacement(p, g); var q = function () { d.$element.trigger("shown.bs." + d.type), d.hoverState = null }; a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q() } }, c.prototype.applyPlacement = function (b, c) { var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10); isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({ using: function (a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth, j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j); k.left ? b.left += k.left : b.top += k.top; var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j, m = k.left ? "left" : "top", n = k.left ? "offsetWidth" : "offsetHeight"; d.offset(b), this.replaceArrow(l, d[0][n], m) }, c.prototype.replaceArrow = function (a, b, c) { this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "") }, c.prototype.setContent = function () { var a = this.tip(), b = this.getTitle(); a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function () { function b() { "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type) } var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type); return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this) }, c.prototype.fixTitle = function () { var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function () { return this.getTitle() }, c.prototype.getPosition = function (b) { b = b || this.$element; var c = b[0], d = "BODY" == c.tagName, e = window.SVGElement && c instanceof window.SVGElement, f = c.getBoundingClientRect ? c.getBoundingClientRect() : null, g = d ? { top: 0, left: 0 } : b.offset(), h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() }, i = e ? {} : { width: d ? a(window).width() : b.outerWidth(), height: d ? a(window).height() : b.outerHeight() }; return a.extend({}, f, h, i, g) }, c.prototype.getCalculatedOffset = function (a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d; h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f, k = b.left + f + c; j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function () { var a, b = this.$element, c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function (a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function () { return this.$tip = this.$tip || a(this.options.template) }, c.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.validate = function () { this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null) }, c.prototype.enable = function () { this.enabled = !0 }, c.prototype.disable = function () { this.enabled = !1 }, c.prototype.toggleEnabled = function () { this.enabled = !this.enabled }, c.prototype.toggle = function (b) { var c = this; b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function () { clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type) }; var d = a.fn.tooltip; a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () { return a.fn.tooltip = d, this } }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b; (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function (a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js"); c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () { return c.DEFAULTS }, c.prototype.setContent = function () { var a = this.tip(), b = this.getTitle(), c = this.getContent(); a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function () { return this.getTitle() || this.getContent() }, c.prototype.getContent = function () { var a = this.$element, b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".arrow") }, c.prototype.tip = function () { return this.$tip || (this.$tip = a(this.options.template)), this.$tip }; var d = a.fn.popover; a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () { return a.fn.popover = d, this } }(jQuery), +function (a) { "use strict"; function b(c, d) { var e = a.proxy(this.process, this); this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process() } function c(c) { return this.each(function () { var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c; e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) } b.VERSION = "3.2.0", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function () { var b = "offset", c = 0; a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(); var d = this; this.$body.find(this.selector).map(function () { var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null }).sort(function (a, b) { return a[0] - b[0] }).each(function () { d.offsets.push(this[0]), d.targets.push(this[1]) }) }, b.prototype.process = function () { var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a); for (a = e.length; a--;)g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function (b) { this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active"); var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active"); d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy") }; var d = a.fn.scrollspy; a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function () { a('[data-spy="scroll"]').each(function () { var b = a(this); c.call(b, b.data()) }) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.tab"); e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function (b) { this.element = a(b) }; c.VERSION = "3.2.0", c.prototype.show = function () { var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", { relatedTarget: e }); if (b.trigger(f), !f.isDefaultPrevented()) { var g = a(d); this.activate(b.closest("li"), c), this.activate(g, g.parent(), function () { b.trigger({ type: "shown.bs.tab", relatedTarget: e }) }) } } }, c.prototype.activate = function (b, c, d) { function e() { f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d() } var f = c.find("> .active"), g = d && a.support.transition && (f.length && f.hasClass("fade") || !!c.find("> .fade").length); f.length && g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in") }; var d = a.fn.tab; a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () { return a.fn.tab = d, this }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (c) { c.preventDefault(), b.call(a(this), "show") }) }(jQuery), +function (a) {
    "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b; e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function (b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition() }; c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) { var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height(); if (null != c && "top" == this.affixed) return c > e ? "top" : !1; if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom"; var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b; return null != c && c >= i ? "top" : null != d && i + j >= a - d ? "bottom" : !1 }, c.prototype.getPinnedOffset = function () { if (this.pinnedOffset) return this.pinnedOffset; this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(), b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function () { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function () { if (this.$element.is(":visible")) { var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = a("body").height(); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return; this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix; a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () { return a.fn.affix = d, this }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
(function (e) { e.fn.appear = function (t, n) { var r = e.extend({ data: undefined, one: true, accX: 0, accY: 0 }, n); return this.each(function () { var n = e(this); n.appeared = false; if (!t) { n.trigger("appear", r.data); return } var i = e(window); var s = function () { if (!n.is(":visible")) { n.appeared = false; return } var e = i.scrollLeft(); var t = i.scrollTop(); var s = n.offset(); var o = s.left; var u = s.top; var a = r.accX; var f = r.accY; var l = n.height(); var c = i.height(); var h = n.width(); var p = i.width(); if (u + l + f >= t && u <= t + c + f && o + h + a >= e && o <= e + p + a) { if (!n.appeared) n.trigger("appear", r.data) } else { n.appeared = false } }; var o = function () { n.appeared = true; if (r.one) { i.unbind("scroll", s); var o = e.inArray(s, e.fn.appear.checks); if (o >= 0) e.fn.appear.checks.splice(o, 1) } t.apply(this, arguments) }; if (r.one) n.one("appear", r.data, o); else n.bind("appear", r.data, o); i.scroll(s); e.fn.appear.checks.push(s); s() }) }; e.extend(e.fn.appear, { checks: [], timeout: null, checkAll: function () { var t = e.fn.appear.checks.length; if (t > 0) while (t--) e.fn.appear.checks[t]() }, run: function () { if (e.fn.appear.timeout) clearTimeout(e.fn.appear.timeout); e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20) } }); e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (t, n) { var r = e.fn[n]; if (r) { e.fn[n] = function () { var t = r.apply(this, arguments); e.fn.appear.run(); return t } } }) })(jQuery)
/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
//!function () { function a() { } function b(a) { return f.retinaImageSuffix + a } function c(a, c) { if (this.path = a || "", "undefined" != typeof c && null !== c) this.at_2x_path = c, this.perform_check = !1; else { if (void 0 !== document.createElement) { var d = document.createElement("a"); d.href = this.path, d.pathname = d.pathname.replace(g, b), this.at_2x_path = d.href } else { var e = this.path.split("?"); e[0] = e[0].replace(g, b), this.at_2x_path = e.join("?") } this.perform_check = !0 } } function d(a) { this.el = a, this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x")); var b = this; this.path.check_2x_variant(function (a) { a && b.swap() }) } var e = "undefined" == typeof exports ? window : exports, f = { retinaImageSuffix: "@2x", check_mime_type: !0, force_original_dimensions: !0 }; e.Retina = a, a.configure = function (a) { null === a && (a = {}); for (var b in a) a.hasOwnProperty(b) && (f[b] = a[b]) }, a.init = function (a) { null === a && (a = e); var b = a.onload || function () { }; a.onload = function () { var a, c, e = document.getElementsByTagName("img"), f = []; for (a = 0; a < e.length; a += 1)c = e[a], c.getAttributeNode("data-no-retina") || f.push(new d(c)); b() } }, a.isRetina = function () { var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)"; return e.devicePixelRatio > 1 ? !0 : e.matchMedia && e.matchMedia(a).matches ? !0 : !1 }; var g = /\.\w+$/; e.RetinaImagePath = c, c.confirmed_paths = [], c.prototype.is_external = function () { return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain)) }, c.prototype.check_2x_variant = function (a) { var b, d = this; return this.is_external() ? a(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in c.confirmed_paths ? a(!0) : (b = new XMLHttpRequest, b.open("HEAD", this.at_2x_path), b.onreadystatechange = function () { if (4 !== b.readyState) return a(!1); if (b.status >= 200 && b.status <= 399) { if (f.check_mime_type) { var e = b.getResponseHeader("Content-Type"); if (null === e || !e.match(/^image/i)) return a(!1) } return c.confirmed_paths.push(d.at_2x_path), a(!0) } return a(!1) }, b.send(), void 0) : a(!0) }, e.RetinaImage = d, d.prototype.swap = function (a) { function b() { c.el.complete ? (f.force_original_dimensions && (c.el.setAttribute("width", c.el.offsetWidth), c.el.setAttribute("height", c.el.offsetHeight)), c.el.setAttribute("src", a)) : setTimeout(b, 5) } "undefined" == typeof a && (a = this.path.at_2x_path); var c = this; b() }, a.isRetina() && a.init(e) }();
/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function (a, b, c, d) { function e(b, c) { this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init() } var f = "stellar", g = { scrollProperty: "scroll", positionProperty: "position", horizontalScrolling: !0, verticalScrolling: !0, horizontalOffset: 0, verticalOffset: 0, responsive: !1, parallaxBackgrounds: !0, parallaxElements: !0, hideDistantElements: !0, hideElement: function (a) { a.hide() }, showElement: function (a) { a.show() } }, h = { scroll: { getLeft: function (a) { return a.scrollLeft() }, setLeft: function (a, b) { a.scrollLeft(b) }, getTop: function (a) { return a.scrollTop() }, setTop: function (a, b) { a.scrollTop(b) } }, position: { getLeft: function (a) { return -1 * parseInt(a.css("left"), 10) }, getTop: function (a) { return -1 * parseInt(a.css("top"), 10) } }, margin: { getLeft: function (a) { return -1 * parseInt(a.css("margin-left"), 10) }, getTop: function (a) { return -1 * parseInt(a.css("margin-top"), 10) } }, transform: { getLeft: function (a) { var b = getComputedStyle(a[0])[k]; return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0 }, getTop: function (a) { var b = getComputedStyle(a[0])[k]; return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0 } } }, i = { position: { setLeft: function (a, b) { a.css("left", b) }, setTop: function (a, b) { a.css("top", b) } }, transform: { setPosition: function (a, b, c, d, e) { a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)" } } }, j = function () { var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, d = a("script")[0].style, e = ""; for (b in d) if (c.test(b)) { e = b.match(c)[0]; break } return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"), function (a) { return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a) } }(), k = j("transform"), l = a("<div />", { style: "background:#fff" }).css("background-position-x") !== d, m = l ? function (a, b, c) { a.css({ "background-position-x": b, "background-position-y": c }) } : function (a, b, c) { a.css("background-position", b + " " + c) }, n = l ? function (a) { return [a.css("background-position-x"), a.css("background-position-y")] } : function (a) { return a.css("background-position").split(" ") }, o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a) { setTimeout(a, 1e3 / 60) }; e.prototype = { init: function () { this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({ firstLoad: !0 }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop() }, _defineElements: function () { this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent() }, _defineGetters: function () { var a = this, b = h[a.options.scrollProperty]; this._getScrollLeft = function () { return b.getLeft(a.$scrollElement) }, this._getScrollTop = function () { return b.getTop(a.$scrollElement) } }, _defineSetters: function () { var b = this, c = h[b.options.scrollProperty], d = i[b.options.positionProperty], e = c.setLeft, f = c.setTop; this._setScrollLeft = "function" == typeof e ? function (a) { e(b.$scrollElement, a) } : a.noop, this._setScrollTop = "function" == typeof f ? function (a) { f(b.$scrollElement, a) } : a.noop, this._setPosition = d.setPosition || function (a, c, e, f, g) { b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g) } }, _handleWindowLoadAndResize: function () { var c = this, d = a(b); c.options.responsive && d.bind("load." + this.name, function () { c.refresh() }), d.bind("resize." + this.name, function () { c._detectViewport(), c.options.responsive && c.refresh() }) }, refresh: function (c) { var d = this, e = d._getScrollLeft(), f = d._getScrollTop(); c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function () { var a = d._getScrollLeft(), b = d._getScrollTop(); d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b) }), this._setScrollLeft(e), this._setScrollTop(f) }, _detectViewport: function () { var a = this.$viewportElement.offset(), b = null !== a && a !== d; this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0 }, _findParticles: function () { { var b = this; this._getScrollLeft(), this._getScrollTop() } if (this.particles !== d) for (var c = this.particles.length - 1; c >= 0; c--)this.particles[c].$element.data("stellar-elementIsActive", d); this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () { var c, e, f, g, h, i, j, k, l, m = a(this), n = 0, o = 0, p = 0, q = 0; if (m.data("stellar-elementIsActive")) { if (m.data("stellar-elementIsActive") !== this) return } else m.data("stellar-elementIsActive", this); b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function () { var b = a(this); return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void (q += b.position().top)) }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({ $element: m, $offsetParent: j, isFixed: "fixed" === m.css("position"), horizontalOffset: c, verticalOffset: e, startingPositionLeft: f, startingPositionTop: g, startingOffsetLeft: k, startingOffsetTop: l, parentOffsetLeft: n, parentOffsetTop: o, stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1, width: m.outerWidth(!0), height: m.outerHeight(!0), isHidden: !1 }) }) }, _findBackgrounds: function () { var b, c = this, e = this._getScrollLeft(), f = this._getScrollTop(); this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function () { var b, g, h, i, j, k, l, o = a(this), p = n(o), q = 0, r = 0, s = 0, t = 0; if (o.data("stellar-backgroundIsActive")) { if (o.data("stellar-backgroundIsActive") !== this) return } else o.data("stellar-backgroundIsActive", this); o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function () { var b = a(this); return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void (t += b.position().top)) }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({ $element: o, $offsetParent: l, isFixed: "fixed" === o.css("background-attachment"), horizontalOffset: b, verticalOffset: g, startingValueLeft: p[0], startingValueTop: p[1], startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10), startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10), startingPositionLeft: o.position().left, startingPositionTop: o.position().top, startingOffsetLeft: j, startingOffsetTop: k, parentOffsetLeft: q, parentOffsetTop: r, stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio") }) })) }, _reset: function () { var a, b, c, d, e; for (e = this.particles.length - 1; e >= 0; e--)a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null); for (e = this.backgrounds.length - 1; e >= 0; e--)d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop) }, destroy: function () { this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name) }, _setOffsets: function () { var c = this, d = a(b); d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function () { c.horizontalOffset = c.options.horizontalOffset() })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function () { c.verticalOffset = c.options.verticalOffset() })) : this.verticalOffset = this.options.verticalOffset }, _repositionElements: function () { var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(), l = this._getScrollTop(), n = !0, o = !0; if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) { for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--)a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0); for (j = this.backgrounds.length - 1; j >= 0; j--)c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e) } }, _handleScrollEvent: function () { var a = this, b = !1, c = function () { a._repositionElements(), b = !1 }, d = function () { b || (o(c), b = !0) }; this.$scrollElement.bind("scroll." + this.name, d), d() }, _startAnimationLoop: function () { var a = this; this._animationLoop = function () { o(a._animationLoop), a._repositionElements() }, this._animationLoop() } }, a.fn[f] = function (b) { var c = arguments; return b === d || "object" == typeof b ? this.each(function () { a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b)) }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function () { var d = a.data(this, "plugin_" + f); d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null) }) : void 0 }, a[f] = function () { var c = a(b); return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0)) }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e }(jQuery, this, document);

(function (e) { var t = { topSpacing: 0, bottomSpacing: 0, className: "is-sticky", wrapperClassName: "sticky-wrapper", center: false, getWidthFrom: "", responsiveWidth: false }, n = e(window), r = e(document), i = [], s = n.height(), o = function () { var t = n.scrollTop(), o = r.height(), u = o - s, a = t > u ? u - t : 0; for (var f = 0; f < i.length; f++) { var l = i[f], c = l.stickyWrapper.offset().top, h = c - l.topSpacing - a; if (t <= h) { if (l.currentTop !== null) { l.stickyElement.css("position", "").css("top", ""); l.stickyElement.trigger("sticky-end", [l]).parent().removeClass(l.className); l.currentTop = null } } else { var p = o - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - t - a; if (p < 0) { p = p + l.topSpacing } else { p = l.topSpacing } if (l.currentTop != p) { l.stickyElement.css("position", "fixed").css("top", p); if (typeof l.getWidthFrom !== "undefined") { l.stickyElement.css("width", e(l.getWidthFrom).width()) } l.stickyElement.trigger("sticky-start", [l]).parent().addClass(l.className); l.currentTop = p } } } }, u = function () { s = n.height(); for (var t = 0; t < i.length; t++) { var r = i[t]; if (typeof r.getWidthFrom !== "undefined" && r.responsiveWidth === true) { r.stickyElement.css("width", e(r.getWidthFrom).width()) } } }, a = { init: function (n) { var r = e.extend({}, t, n); return this.each(function () { var n = e(this); var s = n.attr("id"); var o = s ? s + "-" + t.wrapperClassName : t.wrapperClassName; var u = e("<div></div>").attr("id", s + "-sticky-wrapper").addClass(r.wrapperClassName); n.wrapAll(u); if (r.center) { n.parent().css({ width: n.outerWidth(), marginLeft: "auto", marginRight: "auto" }) } if (n.css("float") == "right") { n.css({ "float": "none" }).parent().css({ "float": "right" }) } var a = n.parent(); a.css("height", n.outerHeight()); i.push({ topSpacing: r.topSpacing, bottomSpacing: r.bottomSpacing, stickyElement: n, currentTop: null, stickyWrapper: a, className: r.className, getWidthFrom: r.getWidthFrom, responsiveWidth: r.responsiveWidth }) }) }, update: o, unstick: function (t) { return this.each(function () { var t = e(this); var n = -1; for (var r = 0; r < i.length; r++) { if (i[r].stickyElement.get(0) == t.get(0)) { n = r } } if (n != -1) { i.splice(n, 1); t.unwrap(); t.removeAttr("style") } }) } }; if (window.addEventListener) { window.addEventListener("scroll", o, false); window.addEventListener("resize", u, false) } else if (window.attachEvent) { window.attachEvent("onscroll", o); window.attachEvent("onresize", u) } e.fn.sticky = function (t) { if (a[t]) { return a[t].apply(this, Array.prototype.slice.call(arguments, 1)) } else if (typeof t === "object" || !t) { return a.init.apply(this, arguments) } else { e.error("Method " + t + " does not exist on jQuery.sticky") } }; e.fn.unstick = function (t) { if (a[t]) { return a[t].apply(this, Array.prototype.slice.call(arguments, 1)) } else if (typeof t === "object" || !t) { return a.unstick.apply(this, arguments) } else { e.error("Method " + t + " does not exist on jQuery.sticky") } }; e(function () { setTimeout(o, 0) }) })(jQuery);

eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)', 62, 382, '||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'), 0, {}))
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
/*
 * International Telephone Input v8.5.1
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], function (b) { a(b, window, document) }) : "object" == typeof module && module.exports ? module.exports = a(require("jquery"), window, document) : a(jQuery, window, document) }(function (a, b, c, d) { "use strict"; function e(b, c) { this.a = a(b), c && (a.extend(c, c, { a: c.allowDropdown, b: c.autoHideDialCode, c: c.autoPlaceholder, c2: c.customPlaceholder, d: c.dropdownContainer, e: c.excludeCountries, f: c.formatOnInit, g: c.geoIpLookup, h: c.initialCountry, i: c.nationalMode, j: c.numberType, k: c.onlyCountries, l: c.preferredCountries, m: c.separateDialCode, n: c.utilsScript })), this.b = a.extend({}, h, c), this.ns = "." + f + g++ , this.d = Boolean(b.setSelectionRange), this.e = Boolean(a(b).attr("placeholder")) } var f = "intlTelInput", g = 1, h = { a: !0, b: !0, c: !0, c2: null, d: "", e: [], f: !0, g: null, h: "", i: !0, j: "MOBILE", k: [], l: ["us", "gb"], m: !1, n: "" }, i = { b: 38, c: 40, d: 13, e: 27, f: 43, A: 65, Z: 90, j: 32, k: 9 }; a(b).load(function () { a.fn[f].windowLoaded = !0 }), e.prototype = { _a: function () { return this.b.i && (this.b.b = !1), this.b.m && (this.b.b = this.b.i = !1, this.b.a = !0), this.g = /Android.+Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (a("body").addClass("iti-mobile"), this.b.d || (this.b.d = "body")), this.h = new a.Deferred, this.i = new a.Deferred, this._b(), this._f(), this._h(), this._i(), this._i2(), [this.h, this.i] }, _b: function () { this._d(), this._d2(), this._e() }, _c: function (a, b, c) { b in this.q || (this.q[b] = []); var d = c || 0; this.q[b][d] = a }, _c2: function (b, c) { var d; for (d = 0; d < b.length; d++)b[d] = b[d].toLowerCase(); for (this.p = [], d = 0; d < j.length; d++)c(a.inArray(j[d].iso2, b)) && this.p.push(j[d]) }, _d: function () { this.b.k.length ? this._c2(this.b.k, function (a) { return -1 != a }) : this.b.e.length ? this._c2(this.b.e, function (a) { return -1 == a }) : this.p = j }, _d2: function () { this.q = {}; for (var a = 0; a < this.p.length; a++) { var b = this.p[a]; if (this._c(b.iso2, b.dialCode, b.priority), b.areaCodes) for (var c = 0; c < b.areaCodes.length; c++)this._c(b.iso2, b.dialCode + b.areaCodes[c]) } }, _e: function () { this.r = []; for (var a = 0; a < this.b.l.length; a++) { var b = this.b.l[a].toLowerCase(), c = this._y(b, !1, !0); c && this.r.push(c) } }, _f: function () { this.a.attr("autocomplete", "off"); var b = "intl-tel-input"; this.b.a && (b += " allow-dropdown"), this.b.m && (b += " separate-dial-code"), this.a.wrap(a("<div>", { "class": b })), this.k = a("<div>", { "class": "flag-container" }).insertBefore(this.a); var c = a("<div>", { "class": "selected-flag" }); c.appendTo(this.k), this.l = a("<div>", { "class": "iti-flag" }).appendTo(c), this.b.m && (this.t = a("<div>", { "class": "selected-dial-code" }).appendTo(c)), this.b.a ? (c.attr("tabindex", "0"), a("<div>", { "class": "iti-arrow" }).appendTo(c), this.m = a("<ul>", { "class": "country-list hide" }), this.r.length && (this._g(this.r, "preferred"), a("<li>", { "class": "divider" }).appendTo(this.m)), this._g(this.p, ""), this.o = this.m.children(".country"), this.b.d ? this.dropdown = a("<div>", { "class": "intl-tel-input iti-container" }).append(this.m) : this.m.appendTo(this.k)) : this.o = a() }, _g: function (a, b) { for (var c = "", d = 0; d < a.length; d++) { var e = a[d]; c += "<li class='country " + b + "' data-dial-code='" + e.dialCode + "' data-country-code='" + e.iso2 + "'>", c += "<div class='flag-box'><div class='iti-flag " + e.iso2 + "'></div></div>", c += "<span class='country-name'>" + e.name + "</span>", c += "<span class='dial-code'>+" + e.dialCode + "</span>", c += "</li>" } this.m.append(c) }, _h: function () { var a = this.a.val(); this._af(a) ? this._v(a, !0) : "auto" !== this.b.h && (this.b.h ? this._z(this.b.h, !0) : (this.j = this.r.length ? this.r[0].iso2 : this.p[0].iso2, a || this._z(this.j, !0)), a || this.b.i || this.b.b || this.b.m || this.a.val("+" + this.s.dialCode)), a && this._u(a, this.b.f) }, _i: function () { this._j(), this.b.b && this._l(), this.b.a && this._i1() }, _i1: function () { var a = this, b = this.a.closest("label"); b.length && b.on("click" + this.ns, function (b) { a.m.hasClass("hide") ? a.a.focus() : b.preventDefault() }); var c = this.l.parent(); c.on("click" + this.ns, function () { !a.m.hasClass("hide") || a.a.prop("disabled") || a.a.prop("readonly") || a._n() }), this.k.on("keydown" + a.ns, function (b) { var c = a.m.hasClass("hide"); !c || b.which != i.b && b.which != i.c && b.which != i.j && b.which != i.d || (b.preventDefault(), b.stopPropagation(), a._n()), b.which == i.k && a._ac() }) }, _i2: function () { var c = this; this.b.n ? a.fn[f].windowLoaded ? a.fn[f].loadUtils(this.b.n, this.i) : a(b).load(function () { a.fn[f].loadUtils(c.b.n, c.i) }) : this.i.resolve(), "auto" === this.b.h ? this._i3() : this.h.resolve() }, _i3: function () { var c = b.Cookies ? Cookies.get("itiAutoCountry") : ""; c && (a.fn[f].autoCountry = c), a.fn[f].autoCountry ? this.handleAutoCountry() : a.fn[f].startedLoadingAutoCountry || (a.fn[f].startedLoadingAutoCountry = !0, "function" == typeof this.b.g && this.b.g(function (c) { a.fn[f].autoCountry = c.toLowerCase(), b.Cookies && Cookies.set("itiAutoCountry", a.fn[f].autoCountry, { path: "/" }), setTimeout(function () { a(".intl-tel-input input").intlTelInput("handleAutoCountry") }) })) }, _j: function () { var a = this; this.a.on("keyup" + this.ns, function () { a._v(a.a.val()) }), this.a.on("cut" + this.ns + " paste" + this.ns + " keyup" + this.ns, function () { setTimeout(function () { a._v(a.a.val()) }) }) }, _j2: function (a) { var b = this.a.attr("maxlength"); return b && a.length > b ? a.substr(0, b) : a }, _l: function () { var b = this; this.a.on("mousedown" + this.ns, function (a) { b.a.is(":focus") || b.a.val() || (a.preventDefault(), b.a.focus()) }), this.a.on("focus" + this.ns, function () { b.a.val() || b.a.prop("readonly") || !b.s.dialCode || (b.a.val("+" + b.s.dialCode), b.a.one("keypress.plus" + b.ns, function (a) { a.which == i.f && b.a.val("") }), setTimeout(function () { var a = b.a[0]; if (b.d) { var c = b.a.val().length; a.setSelectionRange(c, c) } })) }); var c = this.a.prop("form"); c && a(c).on("submit" + this.ns, function () { b._removeEmptyDialCode() }), this.a.on("blur" + this.ns, function () { b._removeEmptyDialCode() }) }, _removeEmptyDialCode: function () { var a = this.a.val(), b = "+" == a.charAt(0); if (b) { var c = this._m(a); c && this.s.dialCode != c || this.a.val("") } this.a.off("keypress.plus" + this.ns) }, _m: function (a) { return a.replace(/\D/g, "") }, _n: function () { this._o(); var a = this.m.children(".active"); a.length && (this._x(a), this._ad(a)), this._p(), this.l.children(".iti-arrow").addClass("up") }, _o: function () { var c = this; if (this.b.d && this.dropdown.appendTo(this.b.d), this.n = this.m.removeClass("hide").outerHeight(), !this.g) { var d = this.a.offset(), e = d.top, f = a(b).scrollTop(), g = e + this.a.outerHeight() + this.n < f + a(b).height(), h = e - this.n > f; if (this.m.toggleClass("dropup", !g && h), this.b.d) { var i = !g && h ? 0 : this.a.innerHeight(); this.dropdown.css({ top: e + i, left: d.left }), a(b).on("scroll" + this.ns, function () { c._ac() }) } } }, _p: function () { var b = this; this.m.on("mouseover" + this.ns, ".country", function () { b._x(a(this)) }), this.m.on("click" + this.ns, ".country", function () { b._ab(a(this)) }); var d = !0; a("html").on("click" + this.ns, function () { d || b._ac(), d = !1 }); var e = "", f = null; a(c).on("keydown" + this.ns, function (a) { a.preventDefault(), a.which == i.b || a.which == i.c ? b._q(a.which) : a.which == i.d ? b._r() : a.which == i.e ? b._ac() : (a.which >= i.A && a.which <= i.Z || a.which == i.j) && (f && clearTimeout(f), e += String.fromCharCode(a.which), b._s(e), f = setTimeout(function () { e = "" }, 1e3)) }) }, _q: function (a) { var b = this.m.children(".highlight").first(), c = a == i.b ? b.prev() : b.next(); c.length && (c.hasClass("divider") && (c = a == i.b ? c.prev() : c.next()), this._x(c), this._ad(c)) }, _r: function () { var a = this.m.children(".highlight").first(); a.length && this._ab(a) }, _s: function (a) { for (var b = 0; b < this.p.length; b++)if (this._t(this.p[b].name, a)) { var c = this.m.children("[data-country-code=" + this.p[b].iso2 + "]").not(".preferred"); this._x(c), this._ad(c, !0); break } }, _t: function (a, b) { return a.substr(0, b.length).toUpperCase() == b }, _u: function (c, d, e) { d && b.intlTelInputUtils && this.s && (a.isNumeric(e) || (e = this.b.i || "+" != c.charAt(0) ? intlTelInputUtils.numberFormat.NATIONAL : intlTelInputUtils.numberFormat.INTERNATIONAL), c = intlTelInputUtils.formatNumber(c, this.s.iso2, e)), c = this._ah(c), this.a.val(c) }, _v: function (b, c) { b && this.b.i && this.s && "1" == this.s.dialCode && "+" != b.charAt(0) && ("1" != b.charAt(0) && (b = "1" + b), b = "+" + b); var d = this._af(b), e = null; if (d) { var f = this.q[this._m(d)], g = this.s && -1 != a.inArray(this.s.iso2, f); if (!g || this._w(b, d)) for (var h = 0; h < f.length; h++)if (f[h]) { e = f[h]; break } } else "+" == b.charAt(0) && this._m(b).length ? e = "" : b && "+" != b || (e = this.j); null !== e && this._z(e, c) }, _w: function (a, b) { return "+1" == b && this._m(a).length >= 4 }, _x: function (a) { this.o.removeClass("highlight"), a.addClass("highlight") }, _y: function (a, b, c) { for (var d = b ? j : this.p, e = 0; e < d.length; e++)if (d[e].iso2 == a) return d[e]; if (c) return null; throw new Error("No country data for '" + a + "'") }, _z: function (a, b) { var c = this.s && this.s.iso2 ? this.s : {}; this.s = a ? this._y(a, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), this.l.attr("class", "iti-flag " + a); var d = a ? this.s.name + ": +" + this.s.dialCode : "Unknown"; if (this.l.parent().attr("title", d), this.b.m) { var e = this.s.dialCode ? "+" + this.s.dialCode : "", f = this.a.parent(); c.dialCode && f.removeClass("iti-sdc-" + (c.dialCode.length + 1)), e && f.addClass("iti-sdc-" + e.length), this.t.text(e) } this._aa(), this.o.removeClass("active"), a && this.o.find(".iti-flag." + a).first().closest(".country").addClass("active"), b || c.iso2 === a || this.a.trigger("countrychange", this.s) }, _aa: function () { if (b.intlTelInputUtils && !this.e && this.b.c && this.s) { var a = intlTelInputUtils.numberType[this.b.j], c = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.b.i, a) : ""; c = this._ah(c), "function" == typeof this.b.c2 && (c = this.b.c2(c, this.s)), this.a.attr("placeholder", c) } }, _ab: function (a) { if (this._z(a.attr("data-country-code")), this._ac(), this._ae(a.attr("data-dial-code"), !0), this.a.focus(), this.d) { var b = this.a.val().length; this.a[0].setSelectionRange(b, b) } }, _ac: function () { this.m.addClass("hide"), this.l.children(".iti-arrow").removeClass("up"), a(c).off(this.ns), a("html").off(this.ns), this.m.off(this.ns), this.b.d && (this.g || a(b).off("scroll" + this.ns), this.dropdown.detach()) }, _ad: function (a, b) { var c = this.m, d = c.height(), e = c.offset().top, f = e + d, g = a.outerHeight(), h = a.offset().top, i = h + g, j = h - e + c.scrollTop(), k = d / 2 - g / 2; if (e > h) b && (j -= k), c.scrollTop(j); else if (i > f) { b && (j += k); var l = d - g; c.scrollTop(j - l) } }, _ae: function (a, b) { var c, d = this.a.val(); if (a = "+" + a, "+" == d.charAt(0)) { var e = this._af(d); c = e ? d.replace(e, a) : a } else { if (this.b.i || this.b.m) return; if (d) c = a + d; else { if (!b && this.b.b) return; c = a } } this.a.val(c) }, _af: function (b) { var c = ""; if ("+" == b.charAt(0)) for (var d = "", e = 0; e < b.length; e++) { var f = b.charAt(e); if (a.isNumeric(f) && (d += f, this.q[d] && (c = b.substr(0, e + 1)), 4 == d.length)) break } return c }, _ag: function () { var a = this.b.m ? "+" + this.s.dialCode : ""; return a + this.a.val() }, _ah: function (a) { if (this.b.m) { var b = this._af(a); if (b) { null !== this.s.areaCodes && (b = "+" + this.s.dialCode); var c = " " === a[b.length] || "-" === a[b.length] ? b.length + 1 : b.length; a = a.substr(c) } } return this._j2(a) }, handleAutoCountry: function () { "auto" === this.b.h && (this.j = a.fn[f].autoCountry, this.a.val() || this.setCountry(this.j), this.h.resolve()) }, destroy: function () { if (this.allowDropdown && (this._ac(), this.l.parent().off(this.ns), this.a.closest("label").off(this.ns)), this.b.b) { var b = this.a.prop("form"); b && a(b).off(this.ns) } this.a.off(this.ns); var c = this.a.parent(); c.before(this.a).remove() }, getExtension: function () { return b.intlTelInputUtils ? intlTelInputUtils.getExtension(this._ag(), this.s.iso2) : "" }, getNumber: function (a) { return b.intlTelInputUtils ? intlTelInputUtils.formatNumber(this._ag(), this.s.iso2, a) : "" }, getNumberType: function () { return b.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._ag(), this.s.iso2) : -99 }, getSelectedCountryData: function () { return this.s || {} }, getValidationError: function () { return b.intlTelInputUtils ? intlTelInputUtils.getValidationError(this._ag(), this.s.iso2) : -99 }, isValidNumber: function () { var c = a.trim(this._ag()), d = this.b.i ? this.s.iso2 : ""; return b.intlTelInputUtils ? intlTelInputUtils.isValidNumber(c, d) : null }, setCountry: function (a) { a = a.toLowerCase(), this.l.hasClass(a) || (this._z(a), this._ae(this.s.dialCode, !1)) }, setNumber: function (b, c) { this._v(b), this._u(b, a.isNumeric(c), c) }, handleUtils: function () { b.intlTelInputUtils && (this.a.val() && this._u(this.a.val(), this.b.f), this._aa()), this.i.resolve() } }, a.fn[f] = function (b) { var c = arguments; if (b === d || "object" == typeof b) { var g = []; return this.each(function () { if (!a.data(this, "plugin_" + f)) { var c = new e(this, b), d = c._a(); g.push(d[0]), g.push(d[1]), a.data(this, "plugin_" + f, c) } }), a.when.apply(null, g) } if ("string" == typeof b && "_" !== b[0]) { var h; return this.each(function () { var d = a.data(this, "plugin_" + f); d instanceof e && "function" == typeof d[b] && (h = d[b].apply(d, Array.prototype.slice.call(c, 1))), "destroy" === b && a.data(this, "plugin_" + f, null) }), h !== d ? h : this } }, a.fn[f].getCountryData = function () { return j }, a.fn[f].loadUtils = function (b, c) { a.fn[f].loadedUtilsScript ? c && c.resolve() : (a.fn[f].loadedUtilsScript = !0, a.ajax({ url: b, complete: function () { a(".intl-tel-input input").intlTelInput("handleUtils") }, dataType: "script", cache: !0 })) }, a.fn[f].version = "8.5.1"; for (var j = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy (Saint-Barthélemy)", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1]], k = 0; k < j.length; k++) { var l = j[k]; j[k] = { name: l[0], iso2: l[1], dialCode: l[2], priority: l[3] || 0, areaCodes: l[4] || null } } });

/* -----------------------------------------------------------------

 	[Content Structure]

 	01. Helper Functions
 	02. Megamenu
 	03. Vertical / Full Screen Menu
 	03. Fixed Header
 	04. Slider configurations
 	05. Plugins configurations 
 		#
 		Stellar, Flickr Feed, Zoom, Raty, Range Slider, Text Rotator, 
 		Bootstrap config, Twitter feed, CountTo, MagnificPopup, Sharrre
 		#
 	06. Carousels configurations (owl-carousel)
	07. Website Enhancements and bug fixes
	08. Animations
	09. Portfolio configurations (isotope)
	10. Ajax contact form
	12. Preloader
	13. Window resize

------------------------------------------------------------------- */

/* =========================== */
// update-v1.3 (28 June 2015) (Added SmoothScroll)
// update-v1.3.1 (30 June 2015) (Moved smoothscroll script outisde the main function)
// SmoothScroll
!function () { function e() { var e = !1; e && c("keydown", r), v.keyboardSupport && !e && u("keydown", r) } function t() { if (document.body) { var t = document.body, n = document.documentElement, o = window.innerHeight, r = t.scrollHeight; if (S = document.compatMode.indexOf("CSS") >= 0 ? n : t, w = t, e(), x = !0, top != self) y = !0; else if (r > o && (t.offsetHeight <= o || n.offsetHeight <= o)) { var a = !1, i = function () { a || n.scrollHeight == document.height || (a = !0, setTimeout(function () { n.style.height = document.height + "px", a = !1 }, 500)) }; if (n.style.height = "auto", setTimeout(i, 10), S.offsetHeight <= o) { var l = document.createElement("div"); l.style.clear = "both", t.appendChild(l) } } v.fixedBackground || b || (t.style.backgroundAttachment = "scroll", n.style.backgroundAttachment = "scroll") } } function n(e, t, n, o) { if (o || (o = 1e3), d(t, n), 1 != v.accelerationMax) { var r = +new Date, a = r - C; if (a < v.accelerationDelta) { var i = (1 + 30 / a) / 2; i > 1 && (i = Math.min(i, v.accelerationMax), t *= i, n *= i) } C = +new Date } if (M.push({ x: t, y: n, lastX: 0 > t ? .99 : -.99, lastY: 0 > n ? .99 : -.99, start: +new Date }), !T) { var l = e === document.body, u = function () { for (var r = +new Date, a = 0, i = 0, c = 0; c < M.length; c++) { var s = M[c], d = r - s.start, f = d >= v.animationTime, h = f ? 1 : d / v.animationTime; v.pulseAlgorithm && (h = p(h)); var m = s.x * h - s.lastX >> 0, w = s.y * h - s.lastY >> 0; a += m, i += w, s.lastX += m, s.lastY += w, f && (M.splice(c, 1), c--) } l ? window.scrollBy(a, i) : (a && (e.scrollLeft += a), i && (e.scrollTop += i)), t || n || (M = []), M.length ? N(u, e, o / v.frameRate + 1) : T = !1 }; N(u, e, 0), T = !0 } } function o(e) { x || t(); var o = e.target, r = l(o); if (!r || e.defaultPrevented || s(w, "embed") || s(o, "embed") && /\.pdf/i.test(o.src)) return !0; var a = e.wheelDeltaX || 0, i = e.wheelDeltaY || 0; return a || i || (i = e.wheelDelta || 0), !v.touchpadSupport && f(i) ? !0 : (Math.abs(a) > 1.2 && (a *= v.stepSize / 120), Math.abs(i) > 1.2 && (i *= v.stepSize / 120), n(r, -a, -i), void e.preventDefault()) } function r(e) { var t = e.target, o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== H.spacebar; if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || o) return !0; if (s(t, "button") && e.keyCode === H.spacebar) return !0; var r, a = 0, i = 0, u = l(w), c = u.clientHeight; switch (u == document.body && (c = window.innerHeight), e.keyCode) { case H.up: i = -v.arrowScroll; break; case H.down: i = v.arrowScroll; break; case H.spacebar: r = e.shiftKey ? 1 : -1, i = -r * c * .9; break; case H.pageup: i = .9 * -c; break; case H.pagedown: i = .9 * c; break; case H.home: i = -u.scrollTop; break; case H.end: var d = u.scrollHeight - u.scrollTop - c; i = d > 0 ? d + 10 : 0; break; case H.left: a = -v.arrowScroll; break; case H.right: a = v.arrowScroll; break; default: return !0 }n(u, a, i), e.preventDefault() } function a(e) { w = e.target } function i(e, t) { for (var n = e.length; n--;)E[A(e[n])] = t; return t } function l(e) { var t = [], n = S.scrollHeight; do { var o = E[A(e)]; if (o) return i(t, o); if (t.push(e), n === e.scrollHeight) { if (!y || S.clientHeight + 10 < n) return i(t, document.body) } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return i(t, e) } while (e = e.parentNode) } function u(e, t, n) { window.addEventListener(e, t, n || !1) } function c(e, t, n) { window.removeEventListener(e, t, n || !1) } function s(e, t) { return (e.nodeName || "").toLowerCase() === t.toLowerCase() } function d(e, t) { e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (k.x !== e || k.y !== t) && (k.x = e, k.y = t, M = [], C = 0) } function f(e) { if (e) { e = Math.abs(e), D.push(e), D.shift(), clearTimeout(z); var t = h(D[0], 120) && h(D[1], 120) && h(D[2], 120); return !t } } function h(e, t) { return Math.floor(e / t) == e / t } function m(e) { var t, n, o; return e *= v.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (n = Math.exp(-1), e -= 1, o = 1 - Math.exp(-e), t = n + o * (1 - n)), t * v.pulseNormalize } function p(e) { return e >= 1 ? 1 : 0 >= e ? 0 : (1 == v.pulseNormalize && (v.pulseNormalize /= m(1)), m(e)) } var w, g = { frameRate: 150, animationTime: 400, stepSize: 120, pulseAlgorithm: !0, pulseScale: 8, pulseNormalize: 1, accelerationDelta: 20, accelerationMax: 1, keyboardSupport: !0, arrowScroll: 50, touchpadSupport: !0, fixedBackground: !0, excluded: "" }, v = g, b = !1, y = !1, k = { x: 0, y: 0 }, x = !1, S = document.documentElement, D = [120, 120, 120], H = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 }, v = g, M = [], T = !1, C = +new Date, E = {}; setInterval(function () { E = {} }, 1e4); var z, A = function () { var e = 0; return function (t) { return t.uniqueID || (t.uniqueID = e++) } }(), N = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (e, t, n) { window.setTimeout(e, n || 1e3 / 60) } }(), K = /chrome/i.test(window.navigator.userAgent), L = null; "onwheel" in document.createElement("div") ? L = "wheel" : "onmousewheel" in document.createElement("div") && (L = "mousewheel"), L && K && (u(L, o), u("mousedown", a), u("load", t)) }();
/* =========================== */



(function ($) {
    "use strict";



    /* *********************	Helper functions	********************* */


    /* Validate function */
    function validate(data, def) {
        return (data !== undefined) ? data : def;
    }

    var $win = $(window),

        // body 
        $body = $('body'),

        // Window width (without scrollbar)
        $windowWidth = $win.width(),

        // Media Query fix (outerWidth -- scrollbar) 
        // Media queries width include the scrollbar
        mqWidth = $win.outerWidth(true, true),

        // Detect Mobile Devices 
        isMobileDevice = ((navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini|Mobi/i) || (mqWidth < 767)) ? true : false);

    // detect IE browsers
    var ie = (function () {
        var rv = 0,
            ua = window.navigator.userAgent,
            msie = ua.indexOf('MSIE '),
            trident = ua.indexOf('Trident/');

        if (msie > 0) {
            // IE 10 or older => return version number
            rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        } else if (trident > 0) {
            // IE 11 (or newer) => return version number
            var rvNum = ua.indexOf('rv:');
            rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
        }

        return ((rv > 0) ? rv : 0);
    }());



    /* *********************	Megamenu	********************* */


    var menu = $(".menu"),
        Megamenu = {
            desktopMenu: function () {

                menu.children("li").show(0);
                menu.children(".toggle-menu").hide(0);

                // Mobile touch for tablets > 768px
                if (isMobileDevice) {

                    menu.on("click touchstart", "a", function (e) {

                        if ($(this).attr('href') === '#') {
                            e.preventDefault();
                            e.stopPropagation();
                        }

                        var $this = $(this),
                            $sub = $this.siblings(".submenu, .megamenu");

                        $this.parent("li").siblings("li").find(".submenu, .megamenu").stop(true, true).fadeOut(300);

                        if ($sub.css("display") === "none") {
                            $sub.stop(true, true).fadeIn(300);
                        } else {
                            $sub.stop(true, true).fadeOut(300);
                            $this.siblings(".submenu").find(".submenu").stop(true, true).fadeOut(300);
                        }
                    });

                    $(document).on("click.menu touchstart.menu", function (e) {

                        if ($(e.target).closest(menu).length === 0) {
                            menu.find(".submenu, .megamenu").fadeOut(300);
                        }
                    });

                    // Desktop hover effect	
                } else {

                    menu.find('li').on({
                        "mouseenter": function () {
                            $(this).children(".submenu, .megamenu").stop(true, true).fadeIn(300);
                        },
                        "mouseleave": function () {
                            $(this).children(".submenu, .megamenu").stop(true, true).fadeOut(300);
                        }
                    });
                }
            },
            mobileMenu: function () {

                var $children = menu.children("li"),
                    $toggle = menu.children("li.toggle-menu"),
                    $notToggle = $children.not("toggle-menu");


                $notToggle.hide(0);
                $toggle.show(0).on("click", function () {

                    if ($children.is(":hidden")) {
                        $children.slideDown(300);
                    } else {
                        $notToggle.slideUp(300);
                        $toggle.show(0);
                    }
                });

                // Click (touch) effect
                menu.find("li").not(".toggle-menu").each(function () {

                    var $this = $(this);

                    if ($this.children(".submenu, .megamenu").length) {

                        $this.children("a").on("click", function (e) {

                            if ($(this).attr('href') === '#') {
                                e.preventDefault();
                                e.stopPropagation();
                            }

                            var $sub = $(this).siblings(".submenu, .megamenu");

                            if ($sub.hasClass("open")) {
                                $sub.slideUp(300).removeClass("open");
                            } else {
                                $sub.slideDown(300).addClass("open");
                            }
                        });
                    }
                });
            },
            unbindEvents: function () {
                menu.find("li, a").off();
                $(document).off("click.menu touchstart.menu");
                menu.find(".submenu, .megamenu").hide(0);
            }
        }; // END Megamenu object



    if ($windowWidth < 768) {
        Megamenu.mobileMenu();
    } else {
        Megamenu.desktopMenu();
    }




    /* *********************	Vertical / Fullscreen Menu	********************* */

    // Vertical / Fullscreen Menu Trigger 
    $('#menu-trigger').on("click", function () {

        if ($(this).hasClass('fullscreen-trigger')) {
            $(".fullscreen-menu-wrapper").toggleClass("on");

        } else if ($(this).hasClass("top-menu-trigger")) {
            $(".top-menu-wrapper").toggleClass("on");

        } else {
            $(".vertical-menu-wrapper").toggleClass("on");
            $(".vertical-menu-footer").toggleClass("on");
        }

        $(this).toggleClass("menu-close");
        return false;
    });




    /* *********************	Fixed Header	********************* */

    function fixedHeader() {
        $(".main-header").sticky({
            topSpacing: 0,
            className: "menu-fixed"
        });
    }

    if ((!$('.static-menu').length) && ($windowWidth > 991) && (!isMobileDevice)) {
        fixedHeader();
    }



    /* *********************	Slider config	********************* */


    if ($('.rs_boxed').length) {
        jQuery('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 550,
            hideThumbs: 200,
            fullWidth: "off",
            hideTimerBar: "on",
            spinner: "spinner4",
            navigationStyle: "preview4",
            navigationType: "none",
            onHoverStop: "off",
            shadow: "3"
        });
    }

    if ($('.rs_fullscreen').length) {
        jQuery('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 550,
            hideThumbs: 200,
            fullWidth: "off",
            fullScreen: "on",
            spinner: "spinner4",
            navigationStyle: "preview4",
            navigationType: "none",
            onHoverStop: "off",
            hideTimerBar: "on"

        });
    }

    if ($('.rs_fullwidth').length) {
        jQuery('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 550,
            hideThumbs: 200,
            fullWidth: "on",
            hideTimerBar: "on",
            spinner: "spinner4",
            navigationStyle: "preview4",
            navigationType: "none",
            onHoverStop: "off"
        });
    }



    if ($('.rs_fullscreen_video').length) {
        jQuery('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 550,
            hideThumbs: 10,
            fullWidth: "off",
            fullScreen: "on",
            spinner: "spinner4",
            navigationType: "none",
            hideTimerBar: "on",
            videoloop: "loop"
        });
    }

    if ($('.rs_fullwidth_video').length) {
        jQuery('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 550,
            hideThumbs: 200,
            fullWidth: "on",
            spinner: "spinner4",
            navigationType: "none",
            hideTimerBar: "on",
            videoloop: "loop"
        });
    }




    /* *********************	Plugins config	********************* */
    /* Text Rotator, Stellar, Flickr Feed, Zoom, Raty, Range Slider, 
       CountTo, Magnific Popup, Sharrre */



    // Text Rotator 
    if ($().textrotator && $(".rotate")) {
        $(".rotate").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 3000 // How many milliseconds until the next word show.
        });
    }


    // Stellar - Parallax backgrounds 
    if (($(".stellar").length) && $(window).width() > 767) {

        $body.stellar({
            horizontalScrolling: false,
            verticalOffset: 0,
            horizontalOffset: 0,
            responsive: true,
            scrollProperty: 'scroll',
            parallaxElements: false
        });
    }


    // FLickr Feed plugin
    if (($(".flickr-feed").length) && $().jflickrfeed) {

        // Flickr Data
        var flickrData = {
            limit: 6,
            qstrings: {
                // You have to put your flickr ID here
                id: '52617155@N08'
            },
            itemTemplate: '<li><a href="{{link}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
        };

        // Flickr sidebar photos
        $('#flickr-sidebar').jflickrfeed(flickrData);
    }

    // Twitter feed
    // Make sure you included tweetie <script src="plugins/tweetie/tweetie.min.js"></script> in the page you want to use it
    if ($('.twitter-feed').length) {

        $('.twitter-feed').twittie({
            'count': 1,
            'dateFormat': "%d %b, %Y",
            'apiPath': "../plugins/tweetie/api/tweet.php",
            'template': '<div class="sidebar-tweet clearfix"><i class="fa fa-twitter"></i><p class="tweet-content"><a href="http://twitter.com/{{user_name}}" class="tweet-user">@{{user_name}}</a> <span>{{tweet}}</span> <small>{{date}}</small></p></div>'
        });
    }



    // Zoom plugin configurations
    if (($().zoom) && ($(".zoom").length) && (isMobileDevice === false)) {
        $(".zoom").zoom();
    }



    // Raty plugin configurations 
    if (($().raty) && $(".rating-system").length) {

        // Rate product
        $(".rating-system.rate-product").raty({
            starOn: "plugins/raty/img/star-on.png",
            starOff: "plugins/raty/img/star-off.png",
            starHalf: "plugins/raty/img/star-half.png",
            cancelOn: "plugins/raty/img/cancel-on.png",
            cancelOff: "plugins/raty/img/cancel-off.png",
            score: 4.26,
            number: 5
        });

        // Rate review - read only
        $(".rating-system.rate-review").raty({
            starOn: "plugins/raty/img/star-on.png",
            starOff: "plugins/raty/img/star-off.png",
            starHalf: "plugins/raty/img/star-half.png",
            cancelOn: "plugins/raty/img/cancel-on.png",
            cancelOff: ".plugins/raty/img/cancel-off.png",
            score: 5,
            number: 5,
            readOnly: true
        });

    }


    // Range Slider configarations 
    if (($().ionRangeSlider) && $(".range-slider").length) {
        $(".range-slider.range-price").ionRangeSlider({
            min: 0,
            max: 2000,
            from: 310,
            to: 1400,
            type: 'double',
            prefix: "$",
            maxPostfix: "+",
            prettify: false,
            hasGrid: false,
            onChange: function (obj) {
                $(".1s").text(obj.fromNumber);
                $(".2s").text(obj.toNumber);
            }
        });
    }

    // Include CountTo
    if ($('.stats-timer').length) {
        (function (e) { function t(e, t) { return e.toFixed(t.decimals) } e.fn.countTo = function (t) { t = t || {}; return e(this).each(function () { function l() { a += i; u++; c(a); if (typeof n.onUpdate == "function") { n.onUpdate.call(s, a) } if (u >= r) { o.removeData("countTo"); clearInterval(f.interval); a = n.to; if (typeof n.onComplete == "function") { n.onComplete.call(s, a) } } } function c(e) { var t = n.formatter.call(s, e, n); o.text(t) } var n = e.extend({}, e.fn.countTo.defaults, { from: e(this).data("from"), to: e(this).data("to"), speed: e(this).data("speed"), refreshInterval: e(this).data("refresh-interval"), decimals: e(this).data("decimals") }, t); var r = Math.ceil(n.speed / n.refreshInterval), i = (n.to - n.from) / r; var s = this, o = e(this), u = 0, a = n.from, f = o.data("countTo") || {}; o.data("countTo", f); if (f.interval) { clearInterval(f.interval) } f.interval = setInterval(l, n.refreshInterval); c(a) }) }; e.fn.countTo.defaults = { from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: t, onUpdate: null, onComplete: null } })(jQuery);
    }

    // countTo plugin configarations
    if (($().countTo) && ($('.stats-timer').length)) {

        if (isMobileDevice) {
            $('.stats-content').find(".stats-timer").countTo();
        } else {
            // appear init and then countTo
            $(".stats-content").appear(function () {
                $(this).find(".stats-timer").countTo();
            });
        }

    } // END if



    // Magnific-popup configurations ( Gallery Template )
    if (($().magnificPopup) && ($(".init-popup").length)) {

        // Popup Gallery
        $(".popup-gallery").magnificPopup({
            delegate: "a.init-popup",
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1],
                tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return '<h5 class="title-mfp">' + item.el.attr("title") + '</h5>';
                }
            }
        });

        // Popup Image
        $(".image-popup").magnificPopup({
            type: "image",
            closeOnContentClick: true,
            mainClass: "mfp-img-mobile",
            image: {
                tError: '<a href="%url%">The image</a> could not be loaded.',
                titleSrc: function (item) {
                    return '<h5 class="title-mfp">' + item.el.attr("title") + '</h5>';
                },
                verticalFit: true
            }
        });
    }



    // Sharrre plugin 
    if (($().sharrre) && $(".sharrre").length) {

        $("#shareit").sharrre({
            share: {
                twitter: true,
                facebook: true,
                googlePlus: true
            },
            enableHover: false,
            urlCurl: "../plugins/sharrre/sharrre.php",
            enableTracking: ((typeof (_gaq) != 'undefined') ? true : false),
            template: "<ul class='social-icon intro-share'><li><a href='#'><i class='fa fa-facebook'></i></a></li><li><a href='#'><i class='fa fa-twitter'></i></a></li><li><a href='#'><i class='fa fa-google-plus'></i></a></li></ul>",
            render: function (api, options) {
                $(api.element).on("click", ".fa-twitter", function () {
                    api.openPopup("twitter");
                });
                $(api.element).on("click", ".fa-facebook", function () {
                    api.openPopup("facebook");
                });
                $(api.element).on("click", ".fa-google-plus", function () {
                    api.openPopup("googlePlus");
                });
            }
        });
    }



    // Bootstrap configarations
    // Tooltips 
    if ($().tooltip) {
        $("[data-toggle='tooltip']").tooltip();
    }
    // Popovers
    if ($().popover) {
        $("[data-toggle='popover']").popover();
    }



    /* *********************	Carousel config	********************* */


    $win.load(function () {

        if (($().owlCarousel) && ($(".owl-carousel").length)) {

            $(".owl-portfolio").owlCarousel({
                singleItem: true,
                stopOnHover: true,
                navigation: false,
                autoPlay: 5500
            });

            $("#owl-shop").owlCarousel({
                singleItem: true,
                stopOnHover: true,
                navigation: true,
                navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                pagination: false,
                autoPlay: false
            });

            $(".owl-columns5").owlCarousel({
                itemsCustom: [[0, 1], [767, 3], [991, 4], [1199, 5]],
                navigation: false,
                pagination: false,
                autoplay: false
            });

            $(".owl-columns4").owlCarousel({
                itemsCustom: [[0, 1], [767, 2], [991, 3], [1199, 4]],
                navigation: false,
                pagination: false,
                autoplay: false
            });

            $(".owl-columns3").owlCarousel({
                itemsCustom: [[0, 1], [767, 2], [991, 3]],
                navigation: false,
                pagination: false,
                autoplay: false
            });

            $(".owl-columns2").owlCarousel({
                itemsCustom: [[0, 1], [767, 1], [991, 2]],
                navigation: false,
                pagination: false,
                autoplay: false
            });

        } // END if 

    });





    /* *********************	Website enhancement & bug fixes	********************* */



    // Back to Top Button
    $body.append($('<div class="back-to-top"><i class="fa fa-angle-up"></i></div>'));

    $win.scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.back-to-top .fa').css({ bottom: "0" });
        } else {
            $('.back-to-top .fa').css({ bottom: "-70px" });
        }
    });

    $('.back-to-top .fa').click(function () {
        $('html, body').animate({ scrollTop: '0' }, 500);
        return false;
    });



    // Pause or Play Video
    $("#video-button").on("click", function () {
        var $this = $(this),
            video = document.getElementById('video-fullwidth');

        if ($this.hasClass("pause")) {
            video.pause();
            $this.removeClass("pause").addClass("play");

        } else if ($this.hasClass("play")) {
            video.play();
            $this.removeClass("play").addClass("pause");
        }

        return false;
    });

    $("#video-fullwidth").css("height", "100%");


    // Set a background overlay for revolution slider videos
    $win.load(function () {
        $(".html5vid").append($("<div class='bg-overlay op4' style='z-index:5'></div>"));
    });

    // Max Height 
    function max_height() {
        $(".max_height").each(function () {
            var maxHeight = 0;
            $(this).find(".el_max_height").each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            }).height(maxHeight);
        });
    }

    $win.load(function () {
        max_height();
    });




    // Fix column sibling height 
    function fixHeight() {
        $(".data-height-fix").each(function () {
            var siblingHeight = $(this).find($(".get-height")).outerHeight();
            $(".set-height").css("height", siblingHeight);
        });
    }

    fixHeight();


    // Notifications 
    $("#show_notification").on("click", function () {
        $(".alert-modal").addClass('alert-modal-on');
        return false;
    });

    // Toggles upside-down 
    $(".panel-title").on("click", "a", function () {
        $(this).find(".fa").toggleClass("upside-down");
    });


    // Body full height 
    function setWindowHeight() {
        var windowHeight = $(window).height();
        $(".window-fullheight").css("height", windowHeight);
    }

    setWindowHeight();



    // remove from Cart
    $('.remove-product').click(function () {
        $(this).parent("td").parent("tr").hide();
        return false;
    });



    // Fix height attribute on iframes
    $('iframe').each(function () {
        var $this = $(this);
        $this.css('height', $this.attr('height') + 'px');

    });

    /* Responsive Videos - 16:9 / 4:3 format */
    function rsEmbed() {
        $('.rs-video').each(function () {
            var $this = $(this),
                embedWidth = $this.width(),
                embedHeight = ($this.hasClass('video-4by3') ? (embedWidth * 0.75) : (embedWidth * 0.5625));

            $this.css('height', embedHeight + 'px');
        });
    }

    rsEmbed();


    // Fix IE9 placeholder 
    if (ie === 9) {
        $.getScript('../plugins/jquery.placeholder.js', function () {
            $('input, textarea').placeholder();
        });
    }




    /* *********************	Animations	********************* */

    // Animations
    if (($().appear) && (isMobileDevice === false)) {

        $('.animated').appear(function () {
            var $this = $(this);

            $this.each(function () {

                var animation = $this.data('animation'),
                    delay = ($this.data('delay') + 'ms'),
                    speed = ($this.data('speed') + 'ms');

                $this.addClass('on').addClass(animation).css({
                    '-moz-animation-delay': delay,
                    '-webkit-animation-delay': delay,
                    'animation-delay': delay,
                    '-webkit-animation-duration': speed,
                    'animation-duration': speed
                });

            });
        }, { accX: 50, accY: -150 });

    } else {

        $('.animated').removeClass("animated");
    }


    // Progress bars animations
    $(".progress").each(function () {

        var $this = $(this);

        if (($().appear) && (isMobileDevice === false) && ($this.hasClass("no-anim") === false)) {

            $this.appear(function () {

                var $bar = $this.find(".progress-bar");
                $bar.addClass("progress-bar-animate").css("width", $bar.attr("data-percentage") + "%");


            }, { accY: -150 });

        } else {

            var $bar = $this.find(".progress-bar");
            $bar.css("width", $bar.attr("data-percentage") + "%");
        }
    });




    /* *********************	Portfolio config (Isotope)	********************* */


    if ($().isotope && $('#portfolio-isotope').length) {

        var $portfolio = $('.portfolio'),
            $layout = ($(".portfolio-fit-row").length ? "fitRows" : "masonry");

        if (ie) {

            var portfolioRow = $("#portfolio-isotope").find(".row");
            var $gutter = 30;

            if (portfolioRow.hasClass("col-p5")) {
                $gutter = 10;
            } else if (portfolioRow.hasClass("col-p10")) {
                $gutter = 20;
            } else if (portfolioRow.hasClass("col-p20")) {
                $gutter = 40;
            } else if (portfolioRow.hasClass("col-p30")) {
                $gutter = 60;
            } else if (portfolioRow.hasClass("col-p0")) {
                $gutter = 0;
            }

            if ($layout === "fitRows") {
                $gutter = 30;
            }


            var $item = $portfolio.find('.el'),
                itemWidth = $item.outerWidth(true) - $gutter;

            portfolioRow.css({ "margin-left": 0 });

            (function () {

                function fixGrid() {
                    $item.each(function () {
                        $item.css({
                            'width': itemWidth + 'px',
                            'padding-left': 0,
                            'padding-right': 0
                        });
                    });
                }
                fixGrid();

                $win.resize(function () {
                    fixGrid();
                });

            })();

            $portfolio.isotope({
                itemSelector: '.el',
                filter: '*',
                layoutMode: "masonry",
                transitionDuration: '0.6s',
                masonry: {
                    columnWidth: '.el',
                    gutter: $gutter
                }
            });

        } else {

            $portfolio.imagesLoaded(function () {
                $portfolio.isotope({
                    itemSelector: '.el',
                    filter: '*',
                    layoutMode: $layout,
                    transitionDuration: '0.6s',
                    masonry: {
                        columnWidth: '.el'
                    }
                });
            });
        }


        // Filter links
        $('.portfolio-filter > ul > li > a').on('click', function () {

            var $this = $(this),
                fv = $this.attr('data-filter');

            $portfolio.isotope({ filter: fv });

            $('.portfolio-filter > ul > li > a').removeClass('active');
            $this.addClass('active');

            return false;
        });

    } // END if 




    /* *********************	Ajax Contact Form	 ********************* */


    if ($('.ajax-contact-form').length) {

        var form = {

            init: false,

            initialize: function () {

                // if form is already initialized, skip 
                if (this.init) {
                    return;
                }
                this.init = true;


                var $form = $(".ajax-contact-form");

                $form.validate({
                    submitHandler: function (form) {

                        // Loading Button
                        var btn = $(this.submitButton);
                        btn.button("loading");

                        // Ajax Submit
                        $.ajax({
                            type: "POST",
                            url: $form.attr("action"),
                            data: {
                                "val_fname": $form.find("#val_fname").val(),
                                "val_lname": $form.find("#val_lname").val(),
                                "g-recaptcha-response": $form.find('#g-recaptcha-response').val(),
                                "val_email": $form.find("#val_email").val(),
                                "val_subject": $form.find("#val_subject").val(),
                                "val_message": $form.find("#val_message").val()
                            },
                            dataType: "json",
                            success: function (data) {

                                var $success = $form.find("#contact-success"),
                                    $error = $form.find("#contact-error");

                                if (data.response == "success") {

                                    $success.removeClass("hidden");
                                    $error.addClass("hidden");

                                    // Reset Form
                                    $form.find(".form-control")
                                        .val("")
                                        .blur()
                                        .parent()
                                        .removeClass("has-success")
                                        .removeClass("has-error")
                                        .find("label.error")
                                        .remove();


                                } else {

                                    $error.removeClass("hidden");
                                    $success.addClass("hidden");
                                }
                            },
                            complete: function () {
                                btn.button("reset");
                            }
                        });
                    },
                    rules: {
                        val_fname: {
                            required: false
                        },
                        val_lname: {
                            required: false
                        },
                        val_email: {
                            required: true,
                            email: true
                        },
                        val_subject: {
                            required: true
                        },
                        val_message: {
                            required: true
                        }
                    },
                    messages: {
                        val_email: {
                            required: "<span class='form-message-error'>Please enter your email address!</span>",
                            email: "<span class='form-message-error'>Please enter a valid email address!</span>"
                        },
                        val_subject: {
                            required: "<span class='form-message-error'>This field is required!</span>"
                        },
                        val_message: {
                            required: "<span class='form-message-error'>This field is required!</span>"
                        }
                    },
                    highlight: function (element) {
                        $(element)
                            .parent()
                            .removeClass("has-success")
                            .addClass("has-error");
                    },
                    success: function (element) {
                        $(element)
                            .parent()
                            .removeClass("has-error")
                            .addClass("has-success")
                            .find("label.error")
                            .remove();
                    }
                });


            } // END initialize

        }; // END form object

        form.initialize();

    }




    /* *********************	Preloader	********************* */


    $win.load(function () {

        if ($("#preloader").length) {

            $('#status').fadeOut();
            $('#preloader').delay(300).fadeOut('slow');
            $body.delay(300).css({ 'overflow': 'visible' });

        } // END if


    }); // END Window Load




    /* *********************	Window Resize	********************* */


    var globalResizeTimer = null;
    $(window).on("resize", function () {
        if (globalResizeTimer !== null) {
            window.clearTimeout(globalResizeTimer);
        }
        globalResizeTimer = window.setTimeout(function () {


            var mqWidth = $win.outerWidth(true, true),

                newWidth = $win.width(),

                isMobileDevice = ((navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini|Mobi/i) || (mqWidth < 767)) ? true : false);


            if ($windowWidth <= 767 && newWidth > 767) {
                Megamenu.unbindEvents();
                Megamenu.desktopMenu();
            }

            if ($windowWidth > 767 && newWidth <= 767) {
                Megamenu.unbindEvents();
                Megamenu.mobileMenu();
            }

            $windowWidth = newWidth;

            // Responsive videos
            rsEmbed();

            // Set Window Height
            setWindowHeight();

            // Set the same height to siblings (just 2)
            fixHeight();

            // Set the maximum height of multiple siblings 
            /* =========================== */
            // update-v1.3 (fixed colored box height issue when you resize the browser)
            $(".el_max_height").css("height", "auto");
            /* =========================== */
            max_height();


            if (mqWidth < 991) {
                $(".main-header").unstick();
                $(".sticky-wrapper").css("height", "auto");
            } else {
                fixedHeader();
                $(".sticky-wrapper").css("height", "76px");
            }

        }, 400);
    });


})(jQuery);
/* END Document ready */

(function () {
    $('.support-form').on('submit', function (e) {
        e.preventDefault();
        var phoneInput = $('#intl-phone-number'),
            countryInfo = phoneInput.intlTelInput("getSelectedCountryData"),
            __this = this;

        phoneInput.val(countryInfo.dialCode + phoneInput.val());

        $.post('/contacts/rapid', $(this).serialize(), function (response) {
            $('.rapid-contact-feedback').css('background', 'green').html('Your contact was sent.');
        }).fail(function () {
            $('.rapid-contact-feedback').css('background', 'red').html('Please try again.');
        }).always(function () {
            $(__this).parents('.modal').modal('toggle');
        });
    });

    $('.type-select').on('change', function (e) {
        $('.hidden-fields').hide();
        $('.hidden-fields input').prop('required', false);

        if ($(this).val() == 'call') {
            $('.phone-field').show();
            $('.phone-field input').prop('required', true);
        } else if ($(this).val() == 'skype') {
            $('.skype-field').show();
            $('.skype-field input').prop('required', true);
        }
    });

    $('#intl-phone-number').intlTelInput();
})();

$(document).ready(function (e) {
    $("aside a").click(function (event) {
        event.preventDefault();
        var destino = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            destino = $(document).height() - $(window).height();
        } else {
            destino = $(this.hash).offset().top;
        }

        $('html,body').animate({
            scrollTop: destino
        }, 2000, 'swing');
    });
});
$('#nav').affix({
    offset: {
        top: $('header').height()
    }
});

$('#sidebar-2').affix({
    offset: {
        top: 250
    }
});