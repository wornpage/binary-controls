//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.keys, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible, ee = () => {};
function h(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function g() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/constants.js
var _ = 1 << 24, v = 1024, y = 2048, b = 4096, te = 8192, ne = 16384, re = 32768, ie = 1 << 25, ae = 65536, oe = 1 << 19, se = 1 << 20, ce = 65536, le = 1 << 21, ue = 1 << 22, de = 1 << 23, fe = Symbol("$state"), pe = Symbol("legacy props"), me = Symbol(""), he = Symbol("attributes"), ge = Symbol("class"), _e = Symbol("style"), ve = Symbol("text"), ye = Symbol("form reset"), be = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), xe = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Se() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Ce() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function we() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Te(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ke() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ae() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function je(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Me() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ne() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var x = !1;
function S(e) {
	x = e;
}
var C;
function w(t) {
	if (t === null) throw je(), e;
	return C = t;
}
function Pe() {
	return w(/* @__PURE__ */ R(C));
}
function Fe(t) {
	if (x) {
		if (/* @__PURE__ */ R(C) !== null) throw je(), e;
		C = t;
	}
}
function Ie(e = 1) {
	if (x) {
		for (var t = e, n = C; t--;) n = /* @__PURE__ */ R(n);
		C = n;
	}
}
function Le(e = !0) {
	for (var t = 0, n = C;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ R(n);
		e && n.remove(), n = i;
	}
}
function Re(t) {
	if (!t || t.nodeType !== 8) throw je(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function ze(e) {
	return e === this.v;
}
function Be(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ve(e) {
	return !Be(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var T = null;
function He(e) {
	T = e;
}
function Ue(e, t = !1, n) {
	T = {
		p: T,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: K,
		l: null
	};
}
function We(e) {
	var t = T, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) fn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, T = t.p, e ?? {};
}
function Ge() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var E = [];
function Ke() {
	var e = E;
	E = [], h(e);
}
function D(e) {
	if (E.length === 0 && !Dt) {
		var t = E;
		queueMicrotask(() => {
			t === E && Ke();
		});
	}
	E.push(e);
}
function qe() {
	for (; E.length > 0;) Ke();
}
function Je(e) {
	var t = K;
	if (t === null) return U.f |= de, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	O(e, t);
}
function O(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Ye = ~(y | b | v);
function k(e, t) {
	e.f = e.f & Ye | t;
}
function Xe(e) {
	e.f & 512 || e.deps === null ? k(e, v) : k(e, b);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ze(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ce, Ze(t.deps));
}
function Qe(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ze(e.deps), k(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var $e = !1;
function et(e) {
	var t = $e;
	try {
		return $e = !1, [e(), $e];
	} finally {
		$e = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function tt(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, D(() => {
			document.activeElement === t && e.focus();
		});
	}
}
var nt = !1;
function rt() {
	nt || (nt = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[ye]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function it(e) {
	var t = U, n = K;
	G(null), q(null);
	try {
		return e();
	} finally {
		G(t), q(n);
	}
}
function at(e, t, n, r = n) {
	e.addEventListener(t, () => it(n));
	let i = e[ye];
	e[ye] = i ? () => {
		i(), r(!0);
	} : () => r(!0), rt();
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function ot(e) {
	let t = 0, n = Vt(0), r;
	return () => {
		un() && (Q(n), _n(() => (t === 0 && (r = Yn(() => e(() => Gt(n)))), t += 1, () => {
			D(() => {
				--t, t === 0 && (r?.(), r = void 0, Gt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var st = ae | oe;
function ct(e, t, n, r) {
	new lt(e, t, n, r);
}
var lt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = x ? C : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = ot(() => (this.#m = Vt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = K;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = yn(() => {
			if (x) {
				let e = this.#t;
				Pe();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, st), x && (this.#e = C);
	}
	#g() {
		try {
			this.#a = B(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		D(r), t && (this.#s = B(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Ne();
				return;
			}
			t = !0, n && ke(), this.#s !== null && En(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					O(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = B(() => e(this.#e)), D(() => {
			var e = this.#c = document.createDocumentFragment(), t = L();
			e.append(t), this.#a = this.#S(() => B(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, En(this.#o, () => {
				this.#o = null;
			}), this.#x(A));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = B(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				An(this.#a, e);
				let t = this.#n.pending;
				this.#o = B(() => t(this.#e));
			} else this.#x(A);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Qe(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = K, n = U, r = T;
		q(this.#i), G(this.#i), He(this.#i.ctx);
		try {
			return Nt.ensure(), e();
		} catch (e) {
			return Je(e), null;
		} finally {
			q(t), G(n), He(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && En(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, D(() => {
			this.#d = !1, this.#m && Ut(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Q(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		A?.is_fork ? (this.#a && A.skip_effect(this.#a), this.#o && A.skip_effect(this.#o), this.#s && A.skip_effect(this.#s), A.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (V(this.#a), null), this.#o &&= (V(this.#o), null), this.#s &&= (V(this.#s), null), x && (w(this.#t), Ie(), w(Le()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return B(() => {
						var r = K;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return O(e, this.#i.parent), null;
				}
			}));
		};
		D(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				O(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => O(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function ut(e, t, n, r) {
	let i = Ge() ? mt : vt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = K, c = dt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				O(e, s);
			}
			ft();
		}
	}
	var d = pt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ gt(e))).then(u).catch((e) => O(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), ft();
	}) : f();
}
function dt() {
	var e = K, t = U, n = T, r = A;
	return function(i = !0) {
		q(e), G(t), He(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function ft(e = !0) {
	q(null), G(null), He(null), e && A?.deactivate();
}
function pt() {
	var e = K, t = e.b, n = A, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function mt(e) {
	var n = 2 | y;
	return K !== null && (K.f |= oe), {
		ctx: T,
		deps: null,
		effects: null,
		equals: ze,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: K,
		ac: null
	};
}
var ht = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function gt(e, n, r) {
	let i = K;
	i === null && Se();
	var a = void 0, o = Vt(t), s = !U, c = /* @__PURE__ */ new Set();
	return gn(() => {
		var t = K, n = g();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== be && n.reject(e);
			}).finally(ft);
		} catch (e) {
			n.reject(e), ft();
		}
		var r = A;
		if (s) {
			if (t.f & 32768) var l = pt();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(ht);
			else for (let e of c.values()) e.reject(ht);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== ht && (r.activate(), t ? (o.f |= de, Ut(o, t)) : (o.f & 8388608 && (o.f ^= de), Ut(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), dn(() => {
		for (let e of c) e.reject(ht);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function _t(e) {
	let t = /* @__PURE__ */ mt(e);
	return Pn(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function vt(e) {
	let t = /* @__PURE__ */ mt(e);
	return t.equals = Ve, t;
}
function yt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) V(t[n]);
	}
}
function bt(e) {
	var n, r = K, i = e.parent;
	if (!H && i !== null && e.v !== t && i.f & 24576) return Ae(), e.v;
	q(i);
	try {
		e.f &= ~ce, yt(e), n = Un(e);
	} finally {
		q(r);
	}
	return n;
}
function xt(e) {
	var t = bt(e);
	if (!e.equals(t) && (e.wv = Bn(), (!A?.is_fork || e.deps === null) && (A === null ? e.v = t : (A.capture(e, t, !0), Tt?.capture(e, t, !0)), e.deps === null))) {
		k(e, v);
		return;
	}
	H || (j === null ? Xe(e) : (un() || A?.is_fork) && j.set(e, t));
}
function St(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && it(() => {
		t.ac.abort(be), t.ac = null;
	}), t.fn !== null && (t.teardown = ee), Gn(t, 0), Sn(t));
}
function Ct(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Kn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var wt = null, A = null, Tt = null, j = null, Et = null, Dt = !1, Ot = !1, kt = null, At = null, jt = 0, Mt = 1, Nt = class e {
	id = Mt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		wt === null ? wt = this : (wt.#n = this, this.#t = wt), wt = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) k(r, y), t(r);
			for (r of n.m) k(r, b), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, jt++ > 1e3 && (this.#x(), Pt());
		for (let e of this.#u) this.#d.delete(e), k(e, y), this.schedule(e);
		for (let e of this.#d) k(e, b), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = kt = [], r = [], i = At = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Rt(e), this.#h() || this.discard(), t;
		}
		if (A = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (kt = null, At = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Lt(e, t);
			i.length > 0 && A.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), Tt = this, Ft(r), Ft(n), Tt = null, this.#s?.resolve();
		var s = A;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= v;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= v : i & 4 ? t.push(r) : Vn(r) && (i & 16 && this.#d.add(r), Kn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), k(i, y), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), A = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Qe(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), j?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		A = this;
	}
	deactivate() {
		A = null, j = null;
	}
	flush() {
		try {
			Ot = !0, A = this, this.#g();
		} finally {
			jt = 0, Et = null, kt = null, At = null, Ot = !1, A = null, j = null, P.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(ht);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, D(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= g()).promise;
	}
	static ensure() {
		if (A === null) {
			let t = A = new e();
			!Ot && !Dt && D(() => {
				t.#e || t.flush();
			});
		}
		return A;
	}
	apply() {
		j = null;
	}
	schedule(e) {
		if (Et = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (kt !== null && t === K && (U === null || !(U.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= v;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? wt = e : t.#t = e, this.linked = !1;
		}
	}
};
function M(e) {
	var t = Dt;
	Dt = !0;
	try {
		var n;
		for (e && (A !== null && !A.is_fork && A.flush(), n = e());;) {
			if (qe(), A === null) return n;
			A.flush();
		}
	} finally {
		Dt = t;
	}
}
function Pt() {
	try {
		Ce();
	} catch (e) {
		O(e, Et);
	}
}
var N = null;
function Ft(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Vn(r) && (N = /* @__PURE__ */ new Set(), Kn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Tn(r), N?.size > 0)) {
				P.clear();
				for (let e of N) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) N.has(n) && (N.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Kn(n);
					}
				}
				N.clear();
			}
		}
		N = null;
	}
}
function It(e) {
	A.schedule(e);
}
function Lt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), k(e, v);
		for (var n = e.first; n !== null;) Lt(n, t), n = n.next;
	}
}
function Rt(e) {
	k(e, v);
	for (var t = e.first; t !== null;) Rt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var zt = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), Bt = !1;
function Vt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: ze,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function F(e, t) {
	let n = Vt(e, t);
	return Pn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Ht(e, t = !1, n = !0) {
	let r = Vt(e);
	return t || (r.equals = Ve), r;
}
function I(e, t, n = !1) {
	return U !== null && (!W || U.f & 131072) && Ge() && U.f & 4325394 && (J === null || !J.has(e)) && Oe(), Ut(e, n ? qt(t) : t, At);
}
function Ut(e, t, n = null) {
	if (!e.equals(t)) {
		P.set(e, H ? t : e.v);
		var r = Nt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && bt(t), j === null && Xe(t);
		}
		e.wv = Bn(), Kt(e, y, n), Ge() && K !== null && K.f & 1024 && !(K.f & 96) && (Z === null ? Fn([e]) : Z.push(e)), !r.is_fork && zt.size > 0 && !Bt && Wt();
	}
	return t;
}
function Wt() {
	Bt = !1;
	for (let e of zt) {
		e.f & 1024 && k(e, b);
		let t;
		try {
			t = Vn(e);
		} catch {
			t = !0;
		}
		t && Kn(e);
	}
	zt.clear();
}
function Gt(e) {
	I(e, e.v + 1);
}
function Kt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ge(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & y) === 0;
			if (l && k(s, t), c & 131072) zt.add(s);
			else if (c & 2) {
				var u = s;
				j?.delete(u), c & 65536 || (c & 512 && (K === null || !(K.f & 2097152)) && (s.f |= ce), Kt(u, b, n));
			} else if (l) {
				var d = s;
				c & 16 && N !== null && N.add(d), n === null ? It(d) : n.push(d);
			}
		}
	}
}
function qt(e) {
	if (typeof e != "object" || !e || fe in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ F(0), s = null, c = Rn, u = (e) => {
		if (Rn === c) return e();
		var t = U, n = Rn;
		G(null), zn(c);
		var r = e();
		return G(t), zn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ F(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Ee();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ F(n.value, s);
				return i.set(t, e), e;
			}) : I(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ F(t, s));
					i.set(n, e), Gt(o);
				}
			} else I(r, t), Gt(o);
			return !0;
		},
		get(n, r, a) {
			if (r === fe) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ F(qt(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = Q(o);
				return d === t ? void 0 : d;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = Q(a));
			} else if (r === void 0) {
				var o = i.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, n) {
			if (n === fe) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || K !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ F(a ? qt(e[n]) : t, s)), i.set(n, r)), Q(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ F(t, s)), i.set(p + "", m)) : I(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ F(void 0, s)), I(d, qt(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var ee = u(() => qt(r));
				I(d, ee);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, n);
			if (h?.set && h.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var g = i.get("length"), _ = Number(n);
					Number.isInteger(_) && _ >= g.v && I(g, _ + 1);
				}
				Gt(o);
			}
			return !0;
		},
		ownKeys(e) {
			Q(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			De();
		}
	});
}
function Jt(e) {
	try {
		if (typeof e == "object" && e && fe in e) return e[fe];
	} catch {}
	return e;
}
function Yt(e, t) {
	return Object.is(Jt(e), Jt(t));
}
var Xt, Zt, Qt, $t;
function en() {
	if (Xt === void 0) {
		Xt = window, Zt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Qt = l(t, "firstChild").get, $t = l(t, "nextSibling").get, m(e) && (e[ge] = void 0, e[he] = null, e[_e] = void 0, e.__e = void 0), m(n) && (n[ve] = void 0);
	}
}
function L(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function tn(e) {
	return Qt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function R(e) {
	return $t.call(e);
}
function nn(e, t) {
	if (!x) return /* @__PURE__ */ tn(e);
	var n = /* @__PURE__ */ tn(C);
	if (n === null) n = C.appendChild(L());
	else if (t && n.nodeType !== 3) {
		var r = L();
		return n?.before(r), w(r), r;
	}
	return t && cn(n), w(n), n;
}
function rn(e, t = 1, n = !1) {
	let r = x ? C : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ R(r);
	if (!x) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = L();
			return r === null ? i?.after(a) : r.before(a), w(a), a;
		}
		cn(r);
	}
	return w(r), r;
}
function an(e) {
	e.textContent = "";
}
function on() {
	return !1;
}
function sn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function cn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function ln(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function z(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= te);
	var r = {
		ctx: T,
		deps: null,
		nodes: null,
		f: e | y | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	A?.register_created_effect(r);
	var i = r;
	if (e & 4) kt === null ? Nt.ensure().schedule(r) : kt.push(r);
	else if (t !== null) {
		try {
			Kn(r);
		} catch (e) {
			throw V(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ae));
	}
	if (i !== null && (i.parent = n, n !== null && ln(i, n), U !== null && U.f & 2 && !(e & 64))) {
		var a = U;
		(a.effects ??= []).push(i);
	}
	return r;
}
function un() {
	return U !== null && !W;
}
function dn(e) {
	let t = z(8, null);
	return k(t, v), t.teardown = e, t;
}
function fn(e) {
	return z(4 | se, e);
}
function pn(e) {
	Nt.ensure();
	let t = z(64 | oe, e);
	return () => {
		V(t);
	};
}
function mn(e) {
	Nt.ensure();
	let t = z(64 | oe, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? En(t, () => {
			V(t), n(void 0);
		}) : (V(t), n(void 0));
	});
}
function hn(e) {
	return z(4, e);
}
function gn(e) {
	return z(ue | oe, e);
}
function _n(e, t = 0) {
	return z(8 | t, e);
}
function vn(e, t = [], n = [], r = []) {
	ut(r, t, n, (t) => {
		z(8, () => {
			e(...t.map(Q));
		});
	});
}
function yn(e, t = 0) {
	return z(16 | t, e);
}
function bn(e, t = 0) {
	return z(_ | t, e);
}
function B(e) {
	return z(32 | oe, e);
}
function xn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = H, n = U;
		Nn(!0), G(null);
		try {
			t.call(null);
		} finally {
			Nn(e), G(n);
		}
	}
}
function Sn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && it(() => {
			e.abort(be);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : V(n, t), n = r;
	}
}
function Cn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || V(t), t = n;
	}
}
function V(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (wn(e.nodes.start, e.nodes.end), n = !0), e.f |= ie, Sn(e, t && !n), Gn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	xn(e), e.f ^= ie, e.f |= ne;
	var i = e.parent;
	i !== null && i.first !== null && Tn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function wn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ R(e);
		e.remove(), e = n;
	}
}
function Tn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function En(e, t, n = !0) {
	var r = [];
	Dn(e, r, !0);
	var i = () => {
		n && V(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Dn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= te;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Dn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function On(e) {
	kn(e, !0);
}
function kn(e, t) {
	if (e.f & 8192) {
		e.f ^= te, e.f & 1024 || (k(e, y), Nt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			kn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function An(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ R(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var jn = null, Mn = !1, H = !1;
function Nn(e) {
	H = e;
}
var U = null, W = !1;
function G(e) {
	U = e;
}
var K = null;
function q(e) {
	K = e;
}
var J = null;
function Pn(e) {
	U !== null && (J ??= /* @__PURE__ */ new Set()).add(e);
}
var Y = null, X = 0, Z = null;
function Fn(e) {
	Z = e;
}
var In = 1, Ln = 0, Rn = Ln;
function zn(e) {
	Rn = e;
}
function Bn() {
	return ++In;
}
function Vn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ce), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Vn(a) && xt(a), a.wv > e.wv) return !0;
		}
		t & 512 && j === null && k(e, v);
	}
	return !1;
}
function Hn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(J !== null && J.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Hn(a, t, !1) : t === a && (n ? k(a, y) : a.f & 1024 && k(a, b), It(a));
	}
}
function Un(e) {
	var t = Y, n = X, r = Z, i = U, a = J, o = T, s = W, c = Rn, l = e.f;
	Y = null, X = 0, Z = null, U = l & 96 ? null : e, J = null, He(e.ctx), W = !1, Rn = ++Ln, e.ac !== null && (it(() => {
		e.ac.abort(be);
	}), e.ac = null);
	try {
		e.f |= le;
		var u = e.fn, d = u();
		e.f |= re;
		var f = e.deps, p = A?.is_fork;
		if (Y !== null) {
			var m;
			if (p || Gn(e, X), f !== null && X > 0) for (f.length = X + Y.length, m = 0; m < Y.length; m++) f[X + m] = Y[m];
			else e.deps = f = Y;
			if (un() && e.f & 512) for (m = X; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && X < f.length && (Gn(e, X), f.length = X);
		if (Ge() && Z !== null && !W && f !== null && !(e.f & 6146)) for (m = 0; m < Z.length; m++) Hn(Z[m], e);
		if (i !== null && i !== e) {
			if (Ln++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Ln;
			if (t !== null) for (let e of t) e.rv = Ln;
			Z !== null && (r === null ? r = Z : r.push(...Z));
		}
		return e.f & 8388608 && (e.f ^= de), d;
	} catch (e) {
		return Je(e);
	} finally {
		e.f ^= le, Y = t, X = n, Z = r, U = i, J = a, He(o), W = s, Rn = c;
	}
}
function Wn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (Y === null || !a.call(Y, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~ce), c.v !== t && Xe(c), c.ac !== null && it(() => {
			c.ac.abort(be), c.ac = null, k(c, y);
		}), St(c), Gn(c, 0);
	}
}
function Gn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Wn(e, n[r]);
}
function Kn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		k(e, v);
		var n = K, r = Mn;
		K = e, Mn = !(t & 96);
		try {
			t & 16777232 ? Cn(e) : Sn(e), xn(e);
			var i = Un(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = In;
		} finally {
			Mn = r, K = n;
		}
	}
}
function Q(e) {
	var t = !!(e.f & 2);
	if (jn?.add(e), U !== null && !W && !(K !== null && K.f & 16384) && (J === null || !J.has(e))) {
		var n = U.deps;
		if (U.f & 2097152) e.rv < Ln && (e.rv = Ln, Y === null && n !== null && n[X] === e ? X++ : Y === null ? Y = [e] : Y.push(e));
		else {
			U.deps ??= [], a.call(U.deps, e) || U.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [U] : a.call(r, U) || r.push(U);
		}
	}
	if (H && P.has(e)) return P.get(e);
	if (t) {
		var i = e;
		if (H) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Jn(i)) && (o = bt(i)), P.set(i, o), o;
		}
		var s = !(i.f & 512) && !W && U !== null && (Mn || !!(U.f & 512)), c = (i.f & re) === 0;
		Vn(i) && (s && (i.f |= 512), xt(i)), s && !c && (Ct(i), qn(i));
	}
	if (j?.has(e)) return j.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function qn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Ct(t), qn(t));
}
function Jn(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (P.has(t) || t.f & 2 && Jn(t)) return !0;
	return !1;
}
function Yn(e) {
	var t = W;
	try {
		return W = !0, e();
	} finally {
		W = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Xn = Symbol("events"), Zn = /* @__PURE__ */ new Set(), Qn = /* @__PURE__ */ new Set();
function $n(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || rr.call(t, e), !e.cancelBubble) return it(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? D(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function er(e, t, n) {
	(t[Xn] ??= {})[e] = n;
}
function tr(e) {
	for (var t = 0; t < e.length; t++) Zn.add(e[t]);
	for (var n of Qn) n(e);
}
var nr = null;
function rr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	nr = e;
	var o = 0, s = nr === e && e[Xn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Xn] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		c(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = U, f = K;
		G(null), q(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var ee = a[Xn]?.[r];
					ee != null && (!a.disabled || e.target === a) && ee.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Xn] = t, delete e.currentTarget, G(d), q(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var ir = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ar(e) {
	return ir?.createHTML(e) ?? e;
}
function or(e) {
	var t = sn("template");
	return t.innerHTML = ar(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function sr(e, t) {
	var n = K;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function cr(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (x) return sr(C, null), C;
		i === void 0 && (i = or(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ tn(i)));
		var t = r || Zt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ tn(t), s = t.lastChild;
			sr(o, s);
		} else sr(t, t);
		return t;
	};
}
function lr(e, t) {
	if (x) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = C), Pe();
		return;
	}
	e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/utils.js
function ur(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var dr = [
	"beforeinput",
	"click",
	"change",
	"dblclick",
	"contextmenu",
	"focusin",
	"focusout",
	"input",
	"keydown",
	"keyup",
	"mousedown",
	"mousemove",
	"mouseout",
	"mouseover",
	"mouseup",
	"pointerdown",
	"pointermove",
	"pointerout",
	"pointerover",
	"pointerup",
	"touchend",
	"touchmove",
	"touchstart"
];
function fr(e) {
	return dr.includes(e);
}
var pr = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), mr = {
	formnovalidate: "formNoValidate",
	ismap: "isMap",
	nomodule: "noModule",
	playsinline: "playsInline",
	readonly: "readOnly",
	defaultvalue: "defaultValue",
	defaultchecked: "defaultChecked",
	srcobject: "srcObject",
	novalidate: "noValidate",
	allowfullscreen: "allowFullscreen",
	disablepictureinpicture: "disablePictureInPicture",
	disableremoteplayback: "disableRemotePlayback"
};
function hr(e) {
	return e = e.toLowerCase(), mr[e] ?? e;
}
[...pr];
var gr = ["touchstart", "touchmove"];
function _r(e) {
	return gr.includes(e);
}
function vr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ve] ??= e.nodeValue) && (e[ve] = n, e.nodeValue = `${n}`);
}
function yr(e, t) {
	return Sr(e, t);
}
function br(t, n) {
	en(), n.intro = n.intro ?? !1;
	let r = n.target, i = x, a = C;
	try {
		for (var o = /* @__PURE__ */ tn(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ R(o);
		if (!o) throw e;
		S(!0), w(o);
		let i = Sr(t, {
			...n,
			anchor: o
		});
		return S(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && we(), en(), an(r), S(!1), yr(t, n);
	} finally {
		S(i), w(a);
	}
}
var xr = /* @__PURE__ */ new Map();
function Sr(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	en();
	var u = void 0, d = mn(() => {
		var c = r ?? n.appendChild(L());
		ct(c, { pending: () => {} }, (n) => {
			Ue({});
			var r = T;
			if (s && (r.c = s), a && (i.$$events = a), x && sr(n, null), u = t(n, i) || {}, x && (K.nodes.end = C, C === null || C.nodeType !== 8 || C.data !== "]")) throw je(), e;
			We();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = _r(r);
					for (let e of [n, document]) {
						var a = xr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), xr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, rr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(o(Zn)), Qn.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = xr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, rr), t.delete(e), t.size === 0 && xr.delete(r)) : t.set(e, i);
			}
			Qn.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return Cr.set(u, d), u;
}
var Cr = /* @__PURE__ */ new WeakMap();
function wr(e, t) {
	let n = Cr.get(e);
	return n ? (Cr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Tr = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) On(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (On(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (V(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						An(r, t), t.append(L()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else V(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), En(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (V(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = A, r = on();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = L();
				i.append(a), this.#n.set(e, {
					effect: B(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, B(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else x && (this.anchor = C), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Er(e, t, n = !1) {
	var r;
	x && (r = C, Pe());
	var i = new Tr(e), a = n ? ae : 0;
	function o(e, t) {
		if (x) {
			var n = Re(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Le();
				w(a), i.anchor = a, S(!1), i.ensure(e, t), S(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	yn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function Dr(e, t) {
	hn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = sn("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attachments.js
function Or(e, t) {
	var n = void 0, r;
	bn(() => {
		n !== (n = t()) && (r &&= (V(r), null), n && (r = B(() => {
			hn(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function kr(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = kr(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function Ar() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = kr(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function jr(e) {
	return typeof e == "object" ? Ar(e) : e ?? "";
}
var Mr = [..." 	\n\r\f\xA0\v﻿"];
function Nr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Mr.includes(r[o - 1])) && (s === r.length || Mr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Pr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Fr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ir(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Fr)), i && c.push(...Object.keys(i).map(Fr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Fr(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += Pr(r)), i && (n += Pr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Lr(e, t, n, r, i, a) {
	var o = e[ge];
	if (x || o !== n || o === void 0) {
		var s = Nr(n, r, a);
		(!x || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[ge] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function Rr(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function zr(e, t, n, r) {
	var i = e[_e];
	if (x || i !== t) {
		var a = Ir(t, r);
		(!x || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[_e] = t;
	} else r && (Array.isArray(r) ? (Rr(e, n?.[0], r[0]), Rr(e, n?.[1], r[1], "important")) : Rr(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function Br(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!r(t)) return Me();
		for (var i of e.options) i.selected = t.includes(Hr(i));
		return;
	}
	for (i of e.options) if (Yt(Hr(i), t)) {
		i.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function Vr(e) {
	var t = new MutationObserver(() => {
		"__value" in e && Br(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), dn(() => {
		t.disconnect();
	});
}
function Hr(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Ur = Symbol("class"), Wr = Symbol("style"), Gr = Symbol("is custom element"), Kr = Symbol("is html"), qr = xe ? "link" : "LINK", Jr = xe ? "input" : "INPUT", Yr = xe ? "option" : "OPTION", Xr = xe ? "select" : "SELECT";
function Zr(e) {
	if (x) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					$r(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					$r(e, "checked", null), e.checked = r;
				}
			}
		};
		e[ye] = n, D(n), rt();
	}
}
function Qr(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $r(e, t, n, r) {
	var i = ni(e);
	x && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === qr) || i[t] !== (i[t] = n) && (t === "loading" && (e[me] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ii(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ei(e, n, r, i, a = !1, o = !1) {
	if (x && a && e.nodeName === Jr) {
		var s = e;
		(s.type === "checkbox" ? "defaultChecked" : "defaultValue") in r || Zr(s);
	}
	var c = ni(e), l = c[Gr], u = !c[Kr];
	let d = x && l;
	d && S(!1);
	var f = n || {}, p = e.nodeName === Yr;
	for (var m in n) m in r || (r[m] = null);
	r.class ? r.class = jr(r.class) : (i || r[Ur]) && (r.class = null), r[Wr] && (r.style ??= null);
	var ee = ii(e);
	if (e.nodeName === Jr && "type" in r && ("value" in r || "__value" in r)) {
		var h = r.type;
		(h !== f.type || h === void 0 && e.hasAttribute("type")) && (f.type = h, $r(e, "type", h, o));
	}
	for (let a in r) {
		let s = r[a];
		if (p && a === "value" && s == null) {
			e.value = e.__value = "", f[a] = s;
			continue;
		}
		if (a === "class") {
			Lr(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", s, i, n?.[Ur], r[Ur]), f[a] = s, f[Ur] = r[Ur];
			continue;
		}
		if (a === "style") {
			zr(e, s, n?.[Wr], r[Wr]), f[a] = s, f[Wr] = r[Wr];
			continue;
		}
		var g = f[a];
		if (!(s === g && !(s === void 0 && e.hasAttribute(a)))) {
			f[a] = s;
			var _ = a[0] + a[1];
			if (_ !== "$$") {
				if (_ === "on") {
					let t = {}, n = "$$" + a, r = a.slice(2);
					var v = fr(r);
					if (ur(r) && (r = r.slice(0, -7), t.capture = !0), !v && g) {
						if (s != null) continue;
						e.removeEventListener(r, f[n], t), f[n] = null;
					}
					if (v) er(r, e, s), tr([r]);
					else if (s != null) {
						function i(e) {
							f[a].call(this, e);
						}
						f[n] = $n(r, e, i, t);
					}
				} else if (a === "style") $r(e, a, s);
				else if (a === "autofocus") tt(e, !!s);
				else if (!l && (a === "__value" || a === "value" && s != null)) e.value = e.__value = s;
				else if (a === "selected" && p) Qr(e, s);
				else {
					var y = a;
					u || (y = hr(y));
					var b = y === "defaultValue" || y === "defaultChecked";
					if (s == null && !l && !b) {
						if (c[a] = null, y === "value" || y === "checked") {
							let t = e, r = n === void 0;
							if (y === "value") {
								let e = t.defaultValue;
								t.removeAttribute(y), t.defaultValue = e, t.value = t.__value = r ? e : null;
							} else {
								let e = t.defaultChecked;
								t.removeAttribute(y), t.defaultChecked = e, t.checked = r ? e : !1;
							}
						} else e.removeAttribute(a);
					} else b || ee.includes(y) && (l || typeof s != "string") ? (e[y] = s, y in c && (c[y] = t)) : typeof s != "function" && $r(e, y, s, o);
				}
			}
		}
	}
	return d && S(!0), f;
}
function ti(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	ut(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === Xr, l = !1;
		if (bn(() => {
			var u = t(...n.map(Q)), d = ei(e, r, u, a, o, s);
			l && c && "value" in u && Br(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || V(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && V(i[t]), i[t] = B(() => Or(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			hn(() => {
				Br(u, r.value, !0), Vr(u);
			});
		}
		l = !0;
	});
}
function ni(e) {
	return e[he] ??= {
		[Gr]: e.nodeName.includes("-"),
		[Kr]: e.namespaceURI === n
	};
}
var ri = /* @__PURE__ */ new Map();
function ii(e) {
	var t = e.getAttribute("is") || e.nodeName, n = ri.get(t);
	if (n) return n;
	ri.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function ai(e, t, n = t) {
	at(e, "change", (t) => {
		n(t ? e.defaultChecked : e.checked);
	}), (x && e.defaultChecked !== e.checked || Yn(t) == null) && n(e.checked), _n(() => {
		e.checked = !!t();
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var oi = {
	get(e, t) {
		if (!e.exclude.has(t)) return e.props[t];
	},
	set(e, t) {
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.has(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	has(e, t) {
		return !e.exclude.has(t) && t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.has(t));
	}
};
/*#__NO_SIDE_EFFECTS__*/
function si(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, oi);
}
function $(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ mt(r), Q(u)) : (c && (c = !1, s = o ? Yn(r) : r), s);
	let f;
	if (a) {
		var p = fe in e || pe in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, ee = !1;
	a ? [m, ee] = et(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && Te(t), f(m)));
	var h = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return h;
	if (f) {
		var g = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || g || ee) && f(t ? h() : e), e) : h();
		});
	}
	var _ = !1, v = (n & 1 ? mt : vt)(() => (_ = !1, h()));
	a && Q(v);
	var y = K;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Q(v) : i && a ? qt(e) : e;
			return I(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return H && _ || y.f & 16384 ? v.v : Q(v);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function ci(e) {
	return new li(e);
}
var li = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ Ht(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return Q(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === pe || (Q(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return I(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? br : yr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && M(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && c(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			wr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, ui;
typeof HTMLElement == "function" && (ui = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = sn("slot");
					e !== "default" && (n.name = e), lr(t, n);
				};
			}
			let t = {}, n = fi(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = di(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = ci({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = pn(() => {
				_n(() => {
					this.$$r = !0;
					for (let e of s(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = di(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = di(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return s(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function di(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function fi(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function pi(e, t, n, r, i, a) {
	let o = class extends ui {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return s(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return s(t).forEach((e) => {
		c(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = di(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (l(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		c(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region src/Checkbox.svelte
var mi = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"checked",
	"onchange",
	"label",
	"ariaLabel",
	"disabled"
]), hi = /* @__PURE__ */ cr("<span class=\"worn-checkbox-label svelte-10olx4a\"> </span>"), gi = /* @__PURE__ */ cr("<label><input/> <span class=\"worn-checkbox-mark svelte-10olx4a\" aria-hidden=\"true\"><svg viewBox=\"0 0 12 10\" class=\"worn-checkbox-tick svelte-10olx4a\"><path d=\"M1 5l3 3 7-7\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span> <!></label>"), _i = {
	hash: "svelte-10olx4a",
	code: ".worn-checkbox.svelte-10olx4a {--worn-binary-boundary: color-mix(in srgb, var(--worn-border-strong) 30%, var(--worn-text-muted));position:relative;display:inline-flex;box-sizing:border-box;max-inline-size:100%;min-inline-size:44px;min-block-size:44px;align-items:center;gap:8px;vertical-align:middle;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none;}.worn-checkbox.svelte-10olx4a:not(.is-labelled) {justify-content:center;}.worn-checkbox.is-disabled.svelte-10olx4a {cursor:not-allowed;}.worn-checkbox-input.svelte-10olx4a {position:absolute;z-index:1;inset:0;box-sizing:border-box;inline-size:100%;block-size:100%;margin:0;opacity:0;cursor:inherit;}.worn-checkbox-mark.svelte-10olx4a {--worn-binary-state-focus: currentColor;display:flex;box-sizing:border-box;inline-size:20px;block-size:20px;flex:0 0 20px;align-items:center;justify-content:center;border:2px solid var(--worn-binary-boundary);border-radius:3px;background:var(--worn-surface);transition:border-color 0.12s ease, background 0.12s ease;}.worn-checkbox-input.svelte-10olx4a:checked + .worn-checkbox-mark:where(.svelte-10olx4a) {--worn-binary-state-focus: var(--worn-accent-text);border-color:var(--worn-binary-boundary);background:var(--worn-accent);}.worn-checkbox.is-disabled.svelte-10olx4a .worn-checkbox-mark:where(.svelte-10olx4a) {border-color:var(--worn-border-strong);background:var(--worn-bg-secondary);}.worn-checkbox-tick.svelte-10olx4a {inline-size:10px;block-size:8px;color:var(--worn-accent-text);opacity:0;transform:scale(0.6);transition:opacity 0.12s ease, transform 0.12s ease;}.worn-checkbox-input.svelte-10olx4a:checked + .worn-checkbox-mark:where(.svelte-10olx4a) .worn-checkbox-tick:where(.svelte-10olx4a) {opacity:1;transform:scale(1);}.worn-checkbox-input.svelte-10olx4a:focus-visible + .worn-checkbox-mark:where(.svelte-10olx4a) {outline:2px dashed var(--worn-binary-focus, var(--worn-binary-state-focus, currentColor));outline-offset:2px;}.worn-checkbox-label.svelte-10olx4a {min-inline-size:0;overflow-wrap:anywhere;font-family:var(--font-typewriter);font-size:13px;color:var(--worn-text);}.worn-checkbox.is-disabled.svelte-10olx4a .worn-checkbox-label:where(.svelte-10olx4a) {color:var(--worn-text-muted);}\n\n  @media (prefers-reduced-motion: reduce) {.worn-checkbox-mark.svelte-10olx4a,\n    .worn-checkbox-tick.svelte-10olx4a {transition:none;}\n  }"
};
function vi(e, t) {
	Ue(t, !0), Dr(e, _i);
	let n = $(t, "checked", 15, !1), r = $(t, "disabled", 3, !1), i = /* @__PURE__ */ si(t, mi);
	var a = gi();
	let o;
	var s = nn(a);
	ti(s, () => ({
		type: "checkbox",
		class: "worn-checkbox-input",
		onchange: t.onchange,
		disabled: r(),
		"aria-label": t.ariaLabel || void 0,
		...i
	}), void 0, void 0, void 0, "svelte-10olx4a", !0);
	var c = rn(s, 4), l = (e) => {
		var n = hi(), r = nn(n, !0);
		Fe(n), vn(() => vr(r, t.label)), lr(e, n);
	};
	Er(c, (e) => {
		t.label && e(l);
	}), Fe(a), vn((e) => o = Lr(a, 1, "worn-checkbox svelte-10olx4a", null, o, e), [() => ({
		"is-disabled": r(),
		"is-labelled": !!t.label
	})]), ai(s, n), lr(e, a), We();
}
//#endregion
//#region src/CheckboxElement.svelte
var yi = {
	hash: "svelte-fpk9c6",
	code: ":host {display:inline-block;max-inline-size:100%;min-inline-size:44px;vertical-align:middle;}"
};
function bi(e, t) {
	Ue(t, !0), Dr(e, yi);
	let n = $(t, "checked", 7, !1), r = $(t, "disabled", 7, !1), i = $(t, "label", 7, ""), a = $(t, "ariaLabel", 7, ""), o = t.$$host, s = /* @__PURE__ */ _t(() => a() || o.getAttribute("aria-label") || "");
	function c(e) {
		n(e.currentTarget.checked), o.dispatchEvent(new CustomEvent("change", {
			detail: { checked: n() },
			bubbles: !0
		}));
	}
	return vi(e, {
		get disabled() {
			return r();
		},
		get label() {
			return i();
		},
		get ariaLabel() {
			return Q(s);
		},
		onchange: c,
		get checked() {
			return n();
		},
		set checked(e) {
			n(e);
		}
	}), We({
		get checked() {
			return n();
		},
		set checked(e = !1) {
			n(e), M();
		},
		get disabled() {
			return r();
		},
		set disabled(e = !1) {
			r(e), M();
		},
		get label() {
			return i();
		},
		set label(e = "") {
			i(e), M();
		},
		get ariaLabel() {
			return a();
		},
		set ariaLabel(e = "") {
			a(e), M();
		}
	});
}
customElements.define("worn-checkbox", pi(bi, {
	checked: {
		reflect: !0,
		type: "Boolean"
	},
	disabled: {
		reflect: !0,
		type: "Boolean"
	},
	label: {
		reflect: !0,
		type: "String"
	},
	ariaLabel: {
		attribute: "aria-label",
		reflect: !0,
		type: "String"
	}
}, [], [], { mode: "open" }));
//#endregion
//#region src/Switch.svelte
var xi = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"checked",
	"onchange",
	"label",
	"ariaLabel",
	"disabled"
]), Si = /* @__PURE__ */ cr("<span class=\"worn-switch-label svelte-14l7sgf\"> </span>"), Ci = /* @__PURE__ */ cr("<label><input/> <span class=\"worn-switch-track svelte-14l7sgf\" aria-hidden=\"true\"><span class=\"worn-switch-thumb svelte-14l7sgf\"></span></span> <!></label>"), wi = {
	hash: "svelte-14l7sgf",
	code: ".worn-switch.svelte-14l7sgf {--worn-binary-boundary: color-mix(in srgb, var(--worn-border-strong) 30%, var(--worn-text-muted));position:relative;display:inline-flex;box-sizing:border-box;max-inline-size:100%;min-inline-size:44px;min-block-size:44px;align-items:center;gap:10px;vertical-align:middle;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none;}.worn-switch.svelte-14l7sgf:not(.is-labelled) {justify-content:center;}.worn-switch.is-disabled.svelte-14l7sgf {cursor:not-allowed;}.worn-switch-input.svelte-14l7sgf {position:absolute;z-index:1;inset:0;box-sizing:border-box;inline-size:100%;block-size:100%;margin:0;opacity:0;cursor:inherit;}.worn-switch-track.svelte-14l7sgf {--worn-binary-state-focus: currentColor;position:relative;box-sizing:border-box;inline-size:42px;block-size:24px;flex:0 0 42px;border:2px solid var(--worn-binary-boundary);border-radius:12px;background:var(--worn-border-strong);transition:border-color 0.15s ease, background 0.15s ease;}.worn-switch-input.svelte-14l7sgf:checked + .worn-switch-track:where(.svelte-14l7sgf) {--worn-binary-state-focus: var(--worn-accent-text);border-color:var(--worn-binary-boundary);background:var(--worn-accent);}.worn-switch.is-disabled.svelte-14l7sgf .worn-switch-track:where(.svelte-14l7sgf),\n  .worn-switch.is-disabled.svelte-14l7sgf .worn-switch-input:where(.svelte-14l7sgf):checked + .worn-switch-track:where(.svelte-14l7sgf) {border-color:var(--worn-border-strong);background:var(--worn-border);}.worn-switch-thumb.svelte-14l7sgf {position:absolute;inset-block-start:1px;inset-inline-start:1px;inline-size:18px;block-size:18px;border-radius:50%;background:var(--worn-accent-text);box-shadow:0 1px 3px rgb(0 0 0 / 15%);transition:transform 0.15s ease, opacity 0.15s ease;}.worn-switch-input.svelte-14l7sgf:checked + .worn-switch-track:where(.svelte-14l7sgf) .worn-switch-thumb:where(.svelte-14l7sgf) {transform:translateX(18px);}.worn-switch.is-disabled.svelte-14l7sgf .worn-switch-thumb:where(.svelte-14l7sgf) {opacity:0.55;}.worn-switch-input.svelte-14l7sgf:focus-visible + .worn-switch-track:where(.svelte-14l7sgf) {outline:2px dashed var(--worn-binary-focus, var(--worn-binary-state-focus, currentColor));outline-offset:2px;}.worn-switch-label.svelte-14l7sgf {min-inline-size:0;overflow-wrap:anywhere;font-family:var(--font-typewriter);font-size:13px;color:var(--worn-text);}.worn-switch.is-disabled.svelte-14l7sgf .worn-switch-label:where(.svelte-14l7sgf) {color:var(--worn-text-muted);}\n\n  @media (prefers-reduced-motion: reduce) {.worn-switch-track.svelte-14l7sgf,\n    .worn-switch-thumb.svelte-14l7sgf {transition:none;}\n  }"
};
function Ti(e, t) {
	Ue(t, !0), Dr(e, wi);
	let n = $(t, "checked", 15, !1), r = $(t, "disabled", 3, !1), i = /* @__PURE__ */ si(t, xi);
	var a = Ci();
	let o;
	var s = nn(a);
	ti(s, () => ({
		type: "checkbox",
		class: "worn-switch-input",
		role: "switch",
		onchange: t.onchange,
		disabled: r(),
		"aria-checked": n(),
		"aria-label": t.ariaLabel || void 0,
		...i
	}), void 0, void 0, void 0, "svelte-14l7sgf", !0);
	var c = rn(s, 4), l = (e) => {
		var n = Si(), r = nn(n, !0);
		Fe(n), vn(() => vr(r, t.label)), lr(e, n);
	};
	Er(c, (e) => {
		t.label && e(l);
	}), Fe(a), vn((e) => o = Lr(a, 1, "worn-switch svelte-14l7sgf", null, o, e), [() => ({
		"is-disabled": r(),
		"is-labelled": !!t.label
	})]), ai(s, n), lr(e, a), We();
}
//#endregion
//#region src/SwitchElement.svelte
var Ei = {
	hash: "svelte-8g69xn",
	code: ":host {display:inline-block;max-inline-size:100%;min-inline-size:44px;vertical-align:middle;}"
};
function Di(e, t) {
	Ue(t, !0), Dr(e, Ei);
	let n = $(t, "checked", 7, !1), r = $(t, "disabled", 7, !1), i = $(t, "label", 7, ""), a = $(t, "ariaLabel", 7, ""), o = t.$$host, s = /* @__PURE__ */ _t(() => a() || o.getAttribute("aria-label") || "");
	function c(e) {
		n(e.currentTarget.checked), o.dispatchEvent(new CustomEvent("change", {
			detail: { checked: n() },
			bubbles: !0
		}));
	}
	return Ti(e, {
		get disabled() {
			return r();
		},
		get label() {
			return i();
		},
		get ariaLabel() {
			return Q(s);
		},
		onchange: c,
		get checked() {
			return n();
		},
		set checked(e) {
			n(e);
		}
	}), We({
		get checked() {
			return n();
		},
		set checked(e = !1) {
			n(e), M();
		},
		get disabled() {
			return r();
		},
		set disabled(e = !1) {
			r(e), M();
		},
		get label() {
			return i();
		},
		set label(e = "") {
			i(e), M();
		},
		get ariaLabel() {
			return a();
		},
		set ariaLabel(e = "") {
			a(e), M();
		}
	});
}
customElements.define("worn-switch", pi(Di, {
	checked: {
		reflect: !0,
		type: "Boolean"
	},
	disabled: {
		reflect: !0,
		type: "Boolean"
	},
	label: {
		reflect: !0,
		type: "String"
	},
	ariaLabel: {
		attribute: "aria-label",
		reflect: !0,
		type: "String"
	}
}, [], [], { mode: "open" }));
//#endregion
