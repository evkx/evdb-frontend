function K1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a && Object.defineProperty(e, i, a.get ? a : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
var Ho =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function i_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var ma = {},
  G1 = {
    get exports() {
      return ma;
    },
    set exports(e) {
      ma = e;
    },
  },
  Yl = {},
  N = {},
  X1 = {
    get exports() {
      return N;
    },
    set exports(e) {
      N = e;
    },
  },
  xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $a = Symbol.for('react.element'),
  Y1 = Symbol.for('react.portal'),
  J1 = Symbol.for('react.fragment'),
  ew = Symbol.for('react.strict_mode'),
  tw = Symbol.for('react.profiler'),
  nw = Symbol.for('react.provider'),
  rw = Symbol.for('react.context'),
  ow = Symbol.for('react.forward_ref'),
  iw = Symbol.for('react.suspense'),
  aw = Symbol.for('react.memo'),
  sw = Symbol.for('react.lazy'),
  am = Symbol.iterator;
function lw(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (am && e[am]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var a_ = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  s_ = Object.assign,
  l_ = {};
function wi(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = l_), (this.updater = n || a_);
}
wi.prototype.isReactComponent = {};
wi.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
wi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function u_() {}
u_.prototype = wi.prototype;
function Hf(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = l_), (this.updater = n || a_);
}
var Wf = (Hf.prototype = new u_());
Wf.constructor = Hf;
s_(Wf, wi.prototype);
Wf.isPureReactComponent = !0;
var sm = Array.isArray,
  c_ = Object.prototype.hasOwnProperty,
  Zf = { current: null },
  d_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function f_(e, t, n) {
  var r,
    i = {},
    a = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (a = '' + t.key), t))
      c_.call(t, r) && !d_.hasOwnProperty(r) && (i[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) i.children = n;
  else if (1 < c) {
    for (var d = Array(c), h = 0; h < c; h++) d[h] = arguments[h + 2];
    i.children = d;
  }
  if (e && e.defaultProps) for (r in ((c = e.defaultProps), c)) i[r] === void 0 && (i[r] = c[r]);
  return { $$typeof: $a, type: e, key: a, ref: l, props: i, _owner: Zf.current };
}
function uw(e, t) {
  return { $$typeof: $a, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Vf(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === $a;
}
function cw(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var lm = /\/+/g;
function bc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? cw('' + e.key) : t.toString(36);
}
function Fs(e, t, n, r, i) {
  var a = typeof e;
  (a === 'undefined' || a === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (a) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case $a:
          case Y1:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === '' ? '.' + bc(l, 0) : r),
      sm(i)
        ? ((n = ''),
          e != null && (n = e.replace(lm, '$&/') + '/'),
          Fs(i, t, n, '', function (h) {
            return h;
          }))
        : i != null &&
          (Vf(i) &&
            (i = uw(
              i,
              n +
                (!i.key || (l && l.key === i.key) ? '' : ('' + i.key).replace(lm, '$&/') + '/') +
                e,
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), sm(e)))
    for (var c = 0; c < e.length; c++) {
      a = e[c];
      var d = r + bc(a, c);
      l += Fs(a, t, n, d, i);
    }
  else if (((d = lw(e)), typeof d == 'function'))
    for (e = d.call(e), c = 0; !(a = e.next()).done; )
      (a = a.value), (d = r + bc(a, c++)), (l += Fs(a, t, n, d, i));
  else if (a === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return l;
}
function ys(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Fs(e, r, '', '', function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function dw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Dt = { current: null },
  js = { transition: null },
  fw = { ReactCurrentDispatcher: Dt, ReactCurrentBatchConfig: js, ReactCurrentOwner: Zf };
xe.Children = {
  map: ys,
  forEach: function (e, t, n) {
    ys(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ys(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ys(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Vf(e))
      throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
xe.Component = wi;
xe.Fragment = J1;
xe.Profiler = tw;
xe.PureComponent = Hf;
xe.StrictMode = ew;
xe.Suspense = iw;
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fw;
xe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.',
    );
  var r = s_({}, e.props),
    i = e.key,
    a = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (l = Zf.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (d in t)
      c_.call(t, d) &&
        !d_.hasOwnProperty(d) &&
        (r[d] = t[d] === void 0 && c !== void 0 ? c[d] : t[d]);
  }
  var d = arguments.length - 2;
  if (d === 1) r.children = n;
  else if (1 < d) {
    c = Array(d);
    for (var h = 0; h < d; h++) c[h] = arguments[h + 2];
    r.children = c;
  }
  return { $$typeof: $a, type: e.type, key: i, ref: a, props: r, _owner: l };
};
xe.createContext = function (e) {
  return (
    (e = {
      $$typeof: rw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: nw, _context: e }),
    (e.Consumer = e)
  );
};
xe.createElement = f_;
xe.createFactory = function (e) {
  var t = f_.bind(null, e);
  return (t.type = e), t;
};
xe.createRef = function () {
  return { current: null };
};
xe.forwardRef = function (e) {
  return { $$typeof: ow, render: e };
};
xe.isValidElement = Vf;
xe.lazy = function (e) {
  return { $$typeof: sw, _payload: { _status: -1, _result: e }, _init: dw };
};
xe.memo = function (e, t) {
  return { $$typeof: aw, type: e, compare: t === void 0 ? null : t };
};
xe.startTransition = function (e) {
  var t = js.transition;
  js.transition = {};
  try {
    e();
  } finally {
    js.transition = t;
  }
};
xe.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
xe.useCallback = function (e, t) {
  return Dt.current.useCallback(e, t);
};
xe.useContext = function (e) {
  return Dt.current.useContext(e);
};
xe.useDebugValue = function () {};
xe.useDeferredValue = function (e) {
  return Dt.current.useDeferredValue(e);
};
xe.useEffect = function (e, t) {
  return Dt.current.useEffect(e, t);
};
xe.useId = function () {
  return Dt.current.useId();
};
xe.useImperativeHandle = function (e, t, n) {
  return Dt.current.useImperativeHandle(e, t, n);
};
xe.useInsertionEffect = function (e, t) {
  return Dt.current.useInsertionEffect(e, t);
};
xe.useLayoutEffect = function (e, t) {
  return Dt.current.useLayoutEffect(e, t);
};
xe.useMemo = function (e, t) {
  return Dt.current.useMemo(e, t);
};
xe.useReducer = function (e, t, n) {
  return Dt.current.useReducer(e, t, n);
};
xe.useRef = function (e) {
  return Dt.current.useRef(e);
};
xe.useState = function (e) {
  return Dt.current.useState(e);
};
xe.useSyncExternalStore = function (e, t, n) {
  return Dt.current.useSyncExternalStore(e, t, n);
};
xe.useTransition = function () {
  return Dt.current.useTransition();
};
xe.version = '18.2.0';
(function (e) {
  e.exports = xe;
})(X1);
const Z = i_(N),
  fd = K1({ __proto__: null, default: Z }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hw = N,
  pw = Symbol.for('react.element'),
  mw = Symbol.for('react.fragment'),
  gw = Object.prototype.hasOwnProperty,
  vw = hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _w = { key: !0, ref: !0, __self: !0, __source: !0 };
function h_(e, t, n) {
  var r,
    i = {},
    a = null,
    l = null;
  n !== void 0 && (a = '' + n),
    t.key !== void 0 && (a = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) gw.call(t, r) && !_w.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: pw, type: e, key: a, ref: l, props: i, _owner: vw.current };
}
Yl.Fragment = mw;
Yl.jsx = h_;
Yl.jsxs = h_;
(function (e) {
  e.exports = Yl;
})(G1);
const yw = ma.Fragment,
  Ce = ma.jsx,
  nn = ma.jsxs;
var ga = {},
  bw = {
    get exports() {
      return ga;
    },
    set exports(e) {
      ga = e;
    },
  },
  Kt = {},
  hd = {},
  ww = {
    get exports() {
      return hd;
    },
    set exports(e) {
      hd = e;
    },
  },
  p_ = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, re) {
    var H = I.length;
    I.push(re);
    e: for (; 0 < H; ) {
      var P = (H - 1) >>> 1,
        R = I[P];
      if (0 < i(R, re)) (I[P] = re), (I[H] = R), (H = P);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var re = I[0],
      H = I.pop();
    if (H !== re) {
      I[0] = H;
      e: for (var P = 0, R = I.length, z = R >>> 1; P < z; ) {
        var j = 2 * (P + 1) - 1,
          K = I[j],
          Y = j + 1,
          oe = I[Y];
        if (0 > i(K, H))
          Y < R && 0 > i(oe, K)
            ? ((I[P] = oe), (I[Y] = H), (P = Y))
            : ((I[P] = K), (I[j] = H), (P = j));
        else if (Y < R && 0 > i(oe, H)) (I[P] = oe), (I[Y] = H), (P = Y);
        else break e;
      }
    }
    return re;
  }
  function i(I, re) {
    var H = I.sortIndex - re.sortIndex;
    return H !== 0 ? H : I.id - re.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var l = Date,
      c = l.now();
    e.unstable_now = function () {
      return l.now() - c;
    };
  }
  var d = [],
    h = [],
    g = 1,
    v = null,
    m = 3,
    _ = !1,
    x = !1,
    S = !1,
    O = typeof setTimeout == 'function' ? setTimeout : null,
    w = typeof clearTimeout == 'function' ? clearTimeout : null,
    b = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function k(I) {
    for (var re = n(h); re !== null; ) {
      if (re.callback === null) r(h);
      else if (re.startTime <= I) r(h), (re.sortIndex = re.expirationTime), t(d, re);
      else break;
      re = n(h);
    }
  }
  function E(I) {
    if (((S = !1), k(I), !x))
      if (n(d) !== null) (x = !0), X(D);
      else {
        var re = n(h);
        re !== null && de(E, re.startTime - I);
      }
  }
  function D(I, re) {
    (x = !1), S && ((S = !1), w(Q), (Q = -1)), (_ = !0);
    var H = m;
    try {
      for (k(re), v = n(d); v !== null && (!(v.expirationTime > re) || (I && !ue())); ) {
        var P = v.callback;
        if (typeof P == 'function') {
          (v.callback = null), (m = v.priorityLevel);
          var R = P(v.expirationTime <= re);
          (re = e.unstable_now()),
            typeof R == 'function' ? (v.callback = R) : v === n(d) && r(d),
            k(re);
        } else r(d);
        v = n(d);
      }
      if (v !== null) var z = !0;
      else {
        var j = n(h);
        j !== null && de(E, j.startTime - re), (z = !1);
      }
      return z;
    } finally {
      (v = null), (m = H), (_ = !1);
    }
  }
  var F = !1,
    W = null,
    Q = -1,
    te = 5,
    q = -1;
  function ue() {
    return !(e.unstable_now() - q < te);
  }
  function ge() {
    if (W !== null) {
      var I = e.unstable_now();
      q = I;
      var re = !0;
      try {
        re = W(!0, I);
      } finally {
        re ? Ze() : ((F = !1), (W = null));
      }
    } else F = !1;
  }
  var Ze;
  if (typeof b == 'function')
    Ze = function () {
      b(ge);
    };
  else if (typeof MessageChannel < 'u') {
    var ce = new MessageChannel(),
      Ne = ce.port2;
    (ce.port1.onmessage = ge),
      (Ze = function () {
        Ne.postMessage(null);
      });
  } else
    Ze = function () {
      O(ge, 0);
    };
  function X(I) {
    (W = I), F || ((F = !0), Ze());
  }
  function de(I, re) {
    Q = O(function () {
      I(e.unstable_now());
    }, re);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || _ || ((x = !0), X(D));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (te = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(d);
    }),
    (e.unstable_next = function (I) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = m;
      }
      var H = m;
      m = re;
      try {
        return I();
      } finally {
        m = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, re) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var H = m;
      m = I;
      try {
        return re();
      } finally {
        m = H;
      }
    }),
    (e.unstable_scheduleCallback = function (I, re, H) {
      var P = e.unstable_now();
      switch (
        (typeof H == 'object' && H !== null
          ? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? P + H : P))
          : (H = P),
        I)
      ) {
        case 1:
          var R = -1;
          break;
        case 2:
          R = 250;
          break;
        case 5:
          R = 1073741823;
          break;
        case 4:
          R = 1e4;
          break;
        default:
          R = 5e3;
      }
      return (
        (R = H + R),
        (I = {
          id: g++,
          callback: re,
          priorityLevel: I,
          startTime: H,
          expirationTime: R,
          sortIndex: -1,
        }),
        H > P
          ? ((I.sortIndex = H),
            t(h, I),
            n(d) === null && I === n(h) && (S ? (w(Q), (Q = -1)) : (S = !0), de(E, H - P)))
          : ((I.sortIndex = R), t(d, I), x || _ || ((x = !0), X(D))),
        I
      );
    }),
    (e.unstable_shouldYield = ue),
    (e.unstable_wrapCallback = function (I) {
      var re = m;
      return function () {
        var H = m;
        m = re;
        try {
          return I.apply(this, arguments);
        } finally {
          m = H;
        }
      };
    });
})(p_);
(function (e) {
  e.exports = p_;
})(ww);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var m_ = N,
  qt = hd;
function V(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var g_ = new Set(),
  va = {};
function Lo(e, t) {
  fi(e, t), fi(e + 'Capture', t);
}
function fi(e, t) {
  for (va[e] = t, e = 0; e < t.length; e++) g_.add(t[e]);
}
var sr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  pd = Object.prototype.hasOwnProperty,
  xw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  um = {},
  cm = {};
function Sw(e) {
  return pd.call(cm, e) ? !0 : pd.call(um, e) ? !1 : xw.test(e) ? (cm[e] = !0) : ((um[e] = !0), !1);
}
function kw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Cw(e, t, n, r) {
  if (t === null || typeof t > 'u' || kw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function At(e, t, n, r, i, a, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = l);
}
var kt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    kt[e] = new At(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  kt[t] = new At(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  kt[e] = new At(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  kt[e] = new At(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    kt[e] = new At(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  kt[e] = new At(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  kt[e] = new At(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  kt[e] = new At(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  kt[e] = new At(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qf = /[\-:]([a-z])/g;
function Qf(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(qf, Qf);
    kt[t] = new At(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(qf, Qf);
    kt[t] = new At(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(qf, Qf);
  kt[t] = new At(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  kt[e] = new At(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
kt.xlinkHref = new At('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  kt[e] = new At(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Kf(e, t, n, r) {
  var i = kt.hasOwnProperty(t) ? kt[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Cw(t, n, i, r) && (n = null),
    r || i === null
      ? Sw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var fr = m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bs = Symbol.for('react.element'),
  Wo = Symbol.for('react.portal'),
  Zo = Symbol.for('react.fragment'),
  Gf = Symbol.for('react.strict_mode'),
  md = Symbol.for('react.profiler'),
  v_ = Symbol.for('react.provider'),
  __ = Symbol.for('react.context'),
  Xf = Symbol.for('react.forward_ref'),
  gd = Symbol.for('react.suspense'),
  vd = Symbol.for('react.suspense_list'),
  Yf = Symbol.for('react.memo'),
  Sr = Symbol.for('react.lazy'),
  y_ = Symbol.for('react.offscreen'),
  dm = Symbol.iterator;
function Bi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (dm && e[dm]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Je = Object.assign,
  wc;
function Yi(e) {
  if (wc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wc = (t && t[1]) || '';
    }
  return (
    `
` +
    wc +
    e
  );
}
var xc = !1;
function Sc(e, t) {
  if (!e || xc) return '';
  xc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (h) {
          var r = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          r = h;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (h) {
        r = h;
      }
      e();
    }
  } catch (h) {
    if (h && r && typeof h.stack == 'string') {
      for (
        var i = h.stack.split(`
`),
          a = r.stack.split(`
`),
          l = i.length - 1,
          c = a.length - 1;
        1 <= l && 0 <= c && i[l] !== a[c];

      )
        c--;
      for (; 1 <= l && 0 <= c; l--, c--)
        if (i[l] !== a[c]) {
          if (l !== 1 || c !== 1)
            do
              if ((l--, c--, 0 > c || i[l] !== a[c])) {
                var d =
                  `
` + i[l].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    d.includes('<anonymous>') &&
                    (d = d.replace('<anonymous>', e.displayName)),
                  d
                );
              }
            while (1 <= l && 0 <= c);
          break;
        }
    }
  } finally {
    (xc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Yi(e) : '';
}
function Pw(e) {
  switch (e.tag) {
    case 5:
      return Yi(e.type);
    case 16:
      return Yi('Lazy');
    case 13:
      return Yi('Suspense');
    case 19:
      return Yi('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Sc(e.type, !1)), e;
    case 11:
      return (e = Sc(e.type.render, !1)), e;
    case 1:
      return (e = Sc(e.type, !0)), e;
    default:
      return '';
  }
}
function _d(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Zo:
      return 'Fragment';
    case Wo:
      return 'Portal';
    case md:
      return 'Profiler';
    case Gf:
      return 'StrictMode';
    case gd:
      return 'Suspense';
    case vd:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case __:
        return (e.displayName || 'Context') + '.Consumer';
      case v_:
        return (e._context.displayName || 'Context') + '.Provider';
      case Xf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Yf:
        return (t = e.displayName || null), t !== null ? t : _d(e.type) || 'Memo';
      case Sr:
        (t = e._payload), (e = e._init);
        try {
          return _d(e(t));
        } catch {}
    }
  return null;
}
function Ew(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return _d(t);
    case 8:
      return t === Gf ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Hr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function b_(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Ow(e) {
  var t = b_(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = '' + l), a.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ws(e) {
  e._valueTracker || (e._valueTracker = Ow(e));
}
function w_(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = b_(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function il(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yd(e, t) {
  var n = t.checked;
  return Je({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function fm(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Hr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function x_(e, t) {
  (t = t.checked), t != null && Kf(e, 'checked', t, !1);
}
function bd(e, t) {
  x_(e, t);
  var n = Hr(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? wd(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && wd(e, t.type, Hr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function hm(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function wd(e, t, n) {
  (t !== 'number' || il(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ji = Array.isArray;
function ri(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Hr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function xd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return Je({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function pm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(V(92));
      if (Ji(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Hr(n) };
}
function S_(e, t) {
  var n = Hr(t.value),
    r = Hr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function mm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function k_(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Sd(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? k_(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var xs,
  C_ = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        xs = xs || document.createElement('div'),
          xs.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = xs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _a(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var oa = {
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
  Lw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(oa).forEach(function (e) {
  Lw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (oa[t] = oa[e]);
  });
});
function P_(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (oa.hasOwnProperty(e) && oa[e])
    ? ('' + t).trim()
    : t + 'px';
}
function E_(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = P_(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Tw = Je(
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
  },
);
function kd(e, t) {
  if (t) {
    if (Tw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(V(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(V(62));
  }
}
function Cd(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Pd = null;
function Jf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ed = null,
  oi = null,
  ii = null;
function gm(e) {
  if ((e = Za(e))) {
    if (typeof Ed != 'function') throw Error(V(280));
    var t = e.stateNode;
    t && ((t = ru(t)), Ed(e.stateNode, e.type, t));
  }
}
function O_(e) {
  oi ? (ii ? ii.push(e) : (ii = [e])) : (oi = e);
}
function L_() {
  if (oi) {
    var e = oi,
      t = ii;
    if (((ii = oi = null), gm(e), t)) for (e = 0; e < t.length; e++) gm(t[e]);
  }
}
function T_(e, t) {
  return e(t);
}
function z_() {}
var kc = !1;
function R_(e, t, n) {
  if (kc) return e(t, n);
  kc = !0;
  try {
    return T_(e, t, n);
  } finally {
    (kc = !1), (oi !== null || ii !== null) && (z_(), L_());
  }
}
function ya(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ru(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(V(231, t, typeof n));
  return n;
}
var Od = !1;
if (sr)
  try {
    var Fi = {};
    Object.defineProperty(Fi, 'passive', {
      get: function () {
        Od = !0;
      },
    }),
      window.addEventListener('test', Fi, Fi),
      window.removeEventListener('test', Fi, Fi);
  } catch {
    Od = !1;
  }
function zw(e, t, n, r, i, a, l, c, d) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, h);
  } catch (g) {
    this.onError(g);
  }
}
var ia = !1,
  al = null,
  sl = !1,
  Ld = null,
  Rw = {
    onError: function (e) {
      (ia = !0), (al = e);
    },
  };
function Iw(e, t, n, r, i, a, l, c, d) {
  (ia = !1), (al = null), zw.apply(Rw, arguments);
}
function Mw(e, t, n, r, i, a, l, c, d) {
  if ((Iw.apply(this, arguments), ia)) {
    if (ia) {
      var h = al;
      (ia = !1), (al = null);
    } else throw Error(V(198));
    sl || ((sl = !0), (Ld = h));
  }
}
function To(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function I_(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function vm(e) {
  if (To(e) !== e) throw Error(V(188));
}
function Nw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = To(e)), t === null)) throw Error(V(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return vm(i), e;
        if (a === r) return vm(i), t;
        a = a.sibling;
      }
      throw Error(V(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var l = !1, c = i.child; c; ) {
        if (c === n) {
          (l = !0), (n = i), (r = a);
          break;
        }
        if (c === r) {
          (l = !0), (r = i), (n = a);
          break;
        }
        c = c.sibling;
      }
      if (!l) {
        for (c = a.child; c; ) {
          if (c === n) {
            (l = !0), (n = a), (r = i);
            break;
          }
          if (c === r) {
            (l = !0), (r = a), (n = i);
            break;
          }
          c = c.sibling;
        }
        if (!l) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function M_(e) {
  return (e = Nw(e)), e !== null ? N_(e) : null;
}
function N_(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = N_(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var D_ = qt.unstable_scheduleCallback,
  _m = qt.unstable_cancelCallback,
  Dw = qt.unstable_shouldYield,
  Aw = qt.unstable_requestPaint,
  at = qt.unstable_now,
  Bw = qt.unstable_getCurrentPriorityLevel,
  eh = qt.unstable_ImmediatePriority,
  A_ = qt.unstable_UserBlockingPriority,
  ll = qt.unstable_NormalPriority,
  Fw = qt.unstable_LowPriority,
  B_ = qt.unstable_IdlePriority,
  Jl = null,
  $n = null;
function jw(e) {
  if ($n && typeof $n.onCommitFiberRoot == 'function')
    try {
      $n.onCommitFiberRoot(Jl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xn = Math.clz32 ? Math.clz32 : Hw,
  Uw = Math.log,
  $w = Math.LN2;
function Hw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Uw(e) / $w) | 0)) | 0;
}
var Ss = 64,
  ks = 4194304;
function ea(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function ul(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var c = l & ~i;
    c !== 0 ? (r = ea(c)) : ((a &= l), a !== 0 && (r = ea(a)));
  } else (l = n & ~i), l !== 0 ? (r = ea(l)) : a !== 0 && (r = ea(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ww(e, t) {
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zw(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes;
    0 < a;

  ) {
    var l = 31 - xn(a),
      c = 1 << l,
      d = i[l];
    d === -1 ? (!(c & n) || c & r) && (i[l] = Ww(c, t)) : d <= t && (e.expiredLanes |= c),
      (a &= ~c);
  }
}
function Td(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function F_() {
  var e = Ss;
  return (Ss <<= 1), !(Ss & 4194240) && (Ss = 64), e;
}
function Cc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ha(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xn(t)),
    (e[t] = n);
}
function Vw(e, t) {
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
    var i = 31 - xn(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function th(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Re = 0;
function j_(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var U_,
  nh,
  $_,
  H_,
  W_,
  zd = !1,
  Cs = [],
  Rr = null,
  Ir = null,
  Mr = null,
  ba = new Map(),
  wa = new Map(),
  Pr = [],
  qw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function ym(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Rr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Ir = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Mr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ba.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      wa.delete(t.pointerId);
  }
}
function ji(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = Za(t)), t !== null && nh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Qw(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Rr = ji(Rr, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Ir = ji(Ir, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Mr = ji(Mr, e, t, n, r, i)), !0;
    case 'pointerover':
      var a = i.pointerId;
      return ba.set(a, ji(ba.get(a) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (a = i.pointerId), wa.set(a, ji(wa.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Z_(e) {
  var t = ho(e.target);
  if (t !== null) {
    var n = To(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = I_(n)), t !== null)) {
          (e.blockedOn = t),
            W_(e.priority, function () {
              $_(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Us(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Rd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pd = r), n.target.dispatchEvent(r), (Pd = null);
    } else return (t = Za(n)), t !== null && nh(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function bm(e, t, n) {
  Us(e) && n.delete(t);
}
function Kw() {
  (zd = !1),
    Rr !== null && Us(Rr) && (Rr = null),
    Ir !== null && Us(Ir) && (Ir = null),
    Mr !== null && Us(Mr) && (Mr = null),
    ba.forEach(bm),
    wa.forEach(bm);
}
function Ui(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zd || ((zd = !0), qt.unstable_scheduleCallback(qt.unstable_NormalPriority, Kw)));
}
function xa(e) {
  function t(i) {
    return Ui(i, e);
  }
  if (0 < Cs.length) {
    Ui(Cs[0], e);
    for (var n = 1; n < Cs.length; n++) {
      var r = Cs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rr !== null && Ui(Rr, e),
      Ir !== null && Ui(Ir, e),
      Mr !== null && Ui(Mr, e),
      ba.forEach(t),
      wa.forEach(t),
      n = 0;
    n < Pr.length;
    n++
  )
    (r = Pr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pr.length && ((n = Pr[0]), n.blockedOn === null); )
    Z_(n), n.blockedOn === null && Pr.shift();
}
var ai = fr.ReactCurrentBatchConfig,
  cl = !0;
function Gw(e, t, n, r) {
  var i = Re,
    a = ai.transition;
  ai.transition = null;
  try {
    (Re = 1), rh(e, t, n, r);
  } finally {
    (Re = i), (ai.transition = a);
  }
}
function Xw(e, t, n, r) {
  var i = Re,
    a = ai.transition;
  ai.transition = null;
  try {
    (Re = 4), rh(e, t, n, r);
  } finally {
    (Re = i), (ai.transition = a);
  }
}
function rh(e, t, n, r) {
  if (cl) {
    var i = Rd(e, t, n, r);
    if (i === null) Nc(e, t, r, dl, n), ym(e, r);
    else if (Qw(i, e, t, n, r)) r.stopPropagation();
    else if ((ym(e, r), t & 4 && -1 < qw.indexOf(e))) {
      for (; i !== null; ) {
        var a = Za(i);
        if ((a !== null && U_(a), (a = Rd(e, t, n, r)), a === null && Nc(e, t, r, dl, n), a === i))
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else Nc(e, t, r, null, n);
  }
}
var dl = null;
function Rd(e, t, n, r) {
  if (((dl = null), (e = Jf(r)), (e = ho(e)), e !== null))
    if (((t = To(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = I_(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (dl = e), null;
}
function V_(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Bw()) {
        case eh:
          return 1;
        case A_:
          return 4;
        case ll:
        case Fw:
          return 16;
        case B_:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lr = null,
  oh = null,
  $s = null;
function q_() {
  if ($s) return $s;
  var e,
    t = oh,
    n = t.length,
    r,
    i = 'value' in Lr ? Lr.value : Lr.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[a - r]; r++);
  return ($s = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Hs(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ps() {
  return !0;
}
function wm() {
  return !1;
}
function Gt(e) {
  function t(n, r, i, a, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = l),
      (this.currentTarget = null);
    for (var c in e) e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(a) : a[c]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Ps
        : wm),
      (this.isPropagationStopped = wm),
      this
    );
  }
  return (
    Je(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ps));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ps));
      },
      persist: function () {},
      isPersistent: Ps,
    }),
    t
  );
}
var xi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ih = Gt(xi),
  Wa = Je({}, xi, { view: 0, detail: 0 }),
  Yw = Gt(Wa),
  Pc,
  Ec,
  $i,
  eu = Je({}, Wa, {
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
    getModifierState: ah,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== $i &&
            ($i && e.type === 'mousemove'
              ? ((Pc = e.screenX - $i.screenX), (Ec = e.screenY - $i.screenY))
              : (Ec = Pc = 0),
            ($i = e)),
          Pc);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ec;
    },
  }),
  xm = Gt(eu),
  Jw = Je({}, eu, { dataTransfer: 0 }),
  ex = Gt(Jw),
  tx = Je({}, Wa, { relatedTarget: 0 }),
  Oc = Gt(tx),
  nx = Je({}, xi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rx = Gt(nx),
  ox = Je({}, xi, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ix = Gt(ox),
  ax = Je({}, xi, { data: 0 }),
  Sm = Gt(ax),
  sx = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  lx = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  ux = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function cx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ux[e]) ? !!t[e] : !1;
}
function ah() {
  return cx;
}
var dx = Je({}, Wa, {
    key: function (e) {
      if (e.key) {
        var t = sx[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Hs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? lx[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ah,
    charCode: function (e) {
      return e.type === 'keypress' ? Hs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Hs(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  fx = Gt(dx),
  hx = Je({}, eu, {
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
  }),
  km = Gt(hx),
  px = Je({}, Wa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ah,
  }),
  mx = Gt(px),
  gx = Je({}, xi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vx = Gt(gx),
  _x = Je({}, eu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yx = Gt(_x),
  bx = [9, 13, 27, 32],
  sh = sr && 'CompositionEvent' in window,
  aa = null;
sr && 'documentMode' in document && (aa = document.documentMode);
var wx = sr && 'TextEvent' in window && !aa,
  Q_ = sr && (!sh || (aa && 8 < aa && 11 >= aa)),
  Cm = String.fromCharCode(32),
  Pm = !1;
function K_(e, t) {
  switch (e) {
    case 'keyup':
      return bx.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function G_(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Vo = !1;
function xx(e, t) {
  switch (e) {
    case 'compositionend':
      return G_(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Pm = !0), Cm);
    case 'textInput':
      return (e = t.data), e === Cm && Pm ? null : e;
    default:
      return null;
  }
}
function Sx(e, t) {
  if (Vo)
    return e === 'compositionend' || (!sh && K_(e, t))
      ? ((e = q_()), ($s = oh = Lr = null), (Vo = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Q_ && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var kx = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function Em(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!kx[e.type] : t === 'textarea';
}
function X_(e, t, n, r) {
  O_(r),
    (t = fl(t, 'onChange')),
    0 < t.length &&
      ((n = new ih('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var sa = null,
  Sa = null;
function Cx(e) {
  ly(e, 0);
}
function tu(e) {
  var t = Ko(e);
  if (w_(t)) return e;
}
function Px(e, t) {
  if (e === 'change') return t;
}
var Y_ = !1;
if (sr) {
  var Lc;
  if (sr) {
    var Tc = 'oninput' in document;
    if (!Tc) {
      var Om = document.createElement('div');
      Om.setAttribute('oninput', 'return;'), (Tc = typeof Om.oninput == 'function');
    }
    Lc = Tc;
  } else Lc = !1;
  Y_ = Lc && (!document.documentMode || 9 < document.documentMode);
}
function Lm() {
  sa && (sa.detachEvent('onpropertychange', J_), (Sa = sa = null));
}
function J_(e) {
  if (e.propertyName === 'value' && tu(Sa)) {
    var t = [];
    X_(t, Sa, e, Jf(e)), R_(Cx, t);
  }
}
function Ex(e, t, n) {
  e === 'focusin'
    ? (Lm(), (sa = t), (Sa = n), sa.attachEvent('onpropertychange', J_))
    : e === 'focusout' && Lm();
}
function Ox(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return tu(Sa);
}
function Lx(e, t) {
  if (e === 'click') return tu(t);
}
function Tx(e, t) {
  if (e === 'input' || e === 'change') return tu(t);
}
function zx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Cn = typeof Object.is == 'function' ? Object.is : zx;
function ka(e, t) {
  if (Cn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!pd.call(t, i) || !Cn(e[i], t[i])) return !1;
  }
  return !0;
}
function Tm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zm(e, t) {
  var n = Tm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Tm(n);
  }
}
function ey(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ey(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ty() {
  for (var e = window, t = il(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = il(e.document);
  }
  return t;
}
function lh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Rx(e) {
  var t = ty(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ey(n.ownerDocument.documentElement, n)) {
    if (r !== null && lh(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = zm(n, a));
        var l = zm(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Ix = sr && 'documentMode' in document && 11 >= document.documentMode,
  qo = null,
  Id = null,
  la = null,
  Md = !1;
function Rm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Md ||
    qo == null ||
    qo !== il(r) ||
    ((r = qo),
    'selectionStart' in r && lh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (la && ka(la, r)) ||
      ((la = r),
      (r = fl(Id, 'onSelect')),
      0 < r.length &&
        ((t = new ih('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qo))));
}
function Es(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Qo = {
    animationend: Es('Animation', 'AnimationEnd'),
    animationiteration: Es('Animation', 'AnimationIteration'),
    animationstart: Es('Animation', 'AnimationStart'),
    transitionend: Es('Transition', 'TransitionEnd'),
  },
  zc = {},
  ny = {};
sr &&
  ((ny = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Qo.animationend.animation,
    delete Qo.animationiteration.animation,
    delete Qo.animationstart.animation),
  'TransitionEvent' in window || delete Qo.transitionend.transition);
function nu(e) {
  if (zc[e]) return zc[e];
  if (!Qo[e]) return e;
  var t = Qo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ny) return (zc[e] = t[n]);
  return e;
}
var ry = nu('animationend'),
  oy = nu('animationiteration'),
  iy = nu('animationstart'),
  ay = nu('transitionend'),
  sy = new Map(),
  Im =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function Kr(e, t) {
  sy.set(e, t), Lo(t, [e]);
}
for (var Rc = 0; Rc < Im.length; Rc++) {
  var Ic = Im[Rc],
    Mx = Ic.toLowerCase(),
    Nx = Ic[0].toUpperCase() + Ic.slice(1);
  Kr(Mx, 'on' + Nx);
}
Kr(ry, 'onAnimationEnd');
Kr(oy, 'onAnimationIteration');
Kr(iy, 'onAnimationStart');
Kr('dblclick', 'onDoubleClick');
Kr('focusin', 'onFocus');
Kr('focusout', 'onBlur');
Kr(ay, 'onTransitionEnd');
fi('onMouseEnter', ['mouseout', 'mouseover']);
fi('onMouseLeave', ['mouseout', 'mouseover']);
fi('onPointerEnter', ['pointerout', 'pointerover']);
fi('onPointerLeave', ['pointerout', 'pointerover']);
Lo('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Lo(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
);
Lo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Lo('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Lo('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Lo('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var ta =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Dx = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ta));
function Mm(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Mw(r, t, void 0, e), (e.currentTarget = null);
}
function ly(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var c = r[l],
            d = c.instance,
            h = c.currentTarget;
          if (((c = c.listener), d !== a && i.isPropagationStopped())) break e;
          Mm(i, c, h), (a = d);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((c = r[l]),
            (d = c.instance),
            (h = c.currentTarget),
            (c = c.listener),
            d !== a && i.isPropagationStopped())
          )
            break e;
          Mm(i, c, h), (a = d);
        }
    }
  }
  if (sl) throw ((e = Ld), (sl = !1), (Ld = null), e);
}
function He(e, t) {
  var n = t[Fd];
  n === void 0 && (n = t[Fd] = new Set());
  var r = e + '__bubble';
  n.has(r) || (uy(t, e, 2, !1), n.add(r));
}
function Mc(e, t, n) {
  var r = 0;
  t && (r |= 4), uy(n, e, r, t);
}
var Os = '_reactListening' + Math.random().toString(36).slice(2);
function Ca(e) {
  if (!e[Os]) {
    (e[Os] = !0),
      g_.forEach(function (n) {
        n !== 'selectionchange' && (Dx.has(n) || Mc(n, !1, e), Mc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Os] || ((t[Os] = !0), Mc('selectionchange', !1, t));
  }
}
function uy(e, t, n, r) {
  switch (V_(t)) {
    case 1:
      var i = Gw;
      break;
    case 4:
      i = Xw;
      break;
    default:
      i = rh;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Od || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Nc(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var c = r.stateNode.containerInfo;
        if (c === i || (c.nodeType === 8 && c.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var d = l.tag;
            if (
              (d === 3 || d === 4) &&
              ((d = l.stateNode.containerInfo), d === i || (d.nodeType === 8 && d.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; c !== null; ) {
          if (((l = ho(c)), l === null)) return;
          if (((d = l.tag), d === 5 || d === 6)) {
            r = a = l;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  R_(function () {
    var h = a,
      g = Jf(n),
      v = [];
    e: {
      var m = sy.get(e);
      if (m !== void 0) {
        var _ = ih,
          x = e;
        switch (e) {
          case 'keypress':
            if (Hs(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            _ = fx;
            break;
          case 'focusin':
            (x = 'focus'), (_ = Oc);
            break;
          case 'focusout':
            (x = 'blur'), (_ = Oc);
            break;
          case 'beforeblur':
          case 'afterblur':
            _ = Oc;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            _ = xm;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            _ = ex;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            _ = mx;
            break;
          case ry:
          case oy:
          case iy:
            _ = rx;
            break;
          case ay:
            _ = vx;
            break;
          case 'scroll':
            _ = Yw;
            break;
          case 'wheel':
            _ = yx;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            _ = ix;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            _ = km;
        }
        var S = (t & 4) !== 0,
          O = !S && e === 'scroll',
          w = S ? (m !== null ? m + 'Capture' : null) : m;
        S = [];
        for (var b = h, k; b !== null; ) {
          k = b;
          var E = k.stateNode;
          if (
            (k.tag === 5 &&
              E !== null &&
              ((k = E), w !== null && ((E = ya(b, w)), E != null && S.push(Pa(b, E, k)))),
            O)
          )
            break;
          b = b.return;
        }
        0 < S.length && ((m = new _(m, x, null, n, g)), v.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (_ = e === 'mouseout' || e === 'pointerout'),
          m && n !== Pd && (x = n.relatedTarget || n.fromElement) && (ho(x) || x[lr]))
        )
          break e;
        if (
          (_ || m) &&
          ((m =
            g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window),
          _
            ? ((x = n.relatedTarget || n.toElement),
              (_ = h),
              (x = x ? ho(x) : null),
              x !== null && ((O = To(x)), x !== O || (x.tag !== 5 && x.tag !== 6)) && (x = null))
            : ((_ = null), (x = h)),
          _ !== x)
        ) {
          if (
            ((S = xm),
            (E = 'onMouseLeave'),
            (w = 'onMouseEnter'),
            (b = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = km), (E = 'onPointerLeave'), (w = 'onPointerEnter'), (b = 'pointer')),
            (O = _ == null ? m : Ko(_)),
            (k = x == null ? m : Ko(x)),
            (m = new S(E, b + 'leave', _, n, g)),
            (m.target = O),
            (m.relatedTarget = k),
            (E = null),
            ho(g) === h &&
              ((S = new S(w, b + 'enter', x, n, g)),
              (S.target = k),
              (S.relatedTarget = O),
              (E = S)),
            (O = E),
            _ && x)
          )
            t: {
              for (S = _, w = x, b = 0, k = S; k; k = Fo(k)) b++;
              for (k = 0, E = w; E; E = Fo(E)) k++;
              for (; 0 < b - k; ) (S = Fo(S)), b--;
              for (; 0 < k - b; ) (w = Fo(w)), k--;
              for (; b--; ) {
                if (S === w || (w !== null && S === w.alternate)) break t;
                (S = Fo(S)), (w = Fo(w));
              }
              S = null;
            }
          else S = null;
          _ !== null && Nm(v, m, _, S, !1), x !== null && O !== null && Nm(v, O, x, S, !0);
        }
      }
      e: {
        if (
          ((m = h ? Ko(h) : window),
          (_ = m.nodeName && m.nodeName.toLowerCase()),
          _ === 'select' || (_ === 'input' && m.type === 'file'))
        )
          var D = Px;
        else if (Em(m))
          if (Y_) D = Tx;
          else {
            D = Ox;
            var F = Ex;
          }
        else
          (_ = m.nodeName) &&
            _.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (D = Lx);
        if (D && (D = D(e, h))) {
          X_(v, D, n, g);
          break e;
        }
        F && F(e, m, h),
          e === 'focusout' &&
            (F = m._wrapperState) &&
            F.controlled &&
            m.type === 'number' &&
            wd(m, 'number', m.value);
      }
      switch (((F = h ? Ko(h) : window), e)) {
        case 'focusin':
          (Em(F) || F.contentEditable === 'true') && ((qo = F), (Id = h), (la = null));
          break;
        case 'focusout':
          la = Id = qo = null;
          break;
        case 'mousedown':
          Md = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Md = !1), Rm(v, n, g);
          break;
        case 'selectionchange':
          if (Ix) break;
        case 'keydown':
        case 'keyup':
          Rm(v, n, g);
      }
      var W;
      if (sh)
        e: {
          switch (e) {
            case 'compositionstart':
              var Q = 'onCompositionStart';
              break e;
            case 'compositionend':
              Q = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              Q = 'onCompositionUpdate';
              break e;
          }
          Q = void 0;
        }
      else
        Vo
          ? K_(e, n) && (Q = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (Q = 'onCompositionStart');
      Q &&
        (Q_ &&
          n.locale !== 'ko' &&
          (Vo || Q !== 'onCompositionStart'
            ? Q === 'onCompositionEnd' && Vo && (W = q_())
            : ((Lr = g), (oh = 'value' in Lr ? Lr.value : Lr.textContent), (Vo = !0))),
        (F = fl(h, Q)),
        0 < F.length &&
          ((Q = new Sm(Q, e, null, n, g)),
          v.push({ event: Q, listeners: F }),
          W ? (Q.data = W) : ((W = G_(n)), W !== null && (Q.data = W)))),
        (W = wx ? xx(e, n) : Sx(e, n)) &&
          ((h = fl(h, 'onBeforeInput')),
          0 < h.length &&
            ((g = new Sm('onBeforeInput', 'beforeinput', null, n, g)),
            v.push({ event: g, listeners: h }),
            (g.data = W)));
    }
    ly(v, t);
  });
}
function Pa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = ya(e, n)),
      a != null && r.unshift(Pa(e, a, i)),
      (a = ya(e, t)),
      a != null && r.push(Pa(e, a, i))),
      (e = e.return);
  }
  return r;
}
function Fo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nm(e, t, n, r, i) {
  for (var a = t._reactName, l = []; n !== null && n !== r; ) {
    var c = n,
      d = c.alternate,
      h = c.stateNode;
    if (d !== null && d === r) break;
    c.tag === 5 &&
      h !== null &&
      ((c = h),
      i
        ? ((d = ya(n, a)), d != null && l.unshift(Pa(n, d, c)))
        : i || ((d = ya(n, a)), d != null && l.push(Pa(n, d, c)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ax = /\r\n?/g,
  Bx = /\u0000|\uFFFD/g;
function Dm(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Ax,
      `
`,
    )
    .replace(Bx, '');
}
function Ls(e, t, n) {
  if (((t = Dm(t)), Dm(e) !== t && n)) throw Error(V(425));
}
function hl() {}
var Nd = null,
  Dd = null;
function Ad(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bd = typeof setTimeout == 'function' ? setTimeout : void 0,
  Fx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Am = typeof Promise == 'function' ? Promise : void 0,
  jx =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Am < 'u'
      ? function (e) {
          return Am.resolve(null).then(e).catch(Ux);
        }
      : Bd;
function Ux(e) {
  setTimeout(function () {
    throw e;
  });
}
function Dc(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), xa(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  xa(t);
}
function Nr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Bm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Si = Math.random().toString(36).slice(2),
  Fn = '__reactFiber$' + Si,
  Ea = '__reactProps$' + Si,
  lr = '__reactContainer$' + Si,
  Fd = '__reactEvents$' + Si,
  $x = '__reactListeners$' + Si,
  Hx = '__reactHandles$' + Si;
function ho(e) {
  var t = e[Fn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[lr] || n[Fn])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Bm(e); e !== null; ) {
          if ((n = e[Fn])) return n;
          e = Bm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Za(e) {
  return (
    (e = e[Fn] || e[lr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ko(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function ru(e) {
  return e[Ea] || null;
}
var jd = [],
  Go = -1;
function Gr(e) {
  return { current: e };
}
function We(e) {
  0 > Go || ((e.current = jd[Go]), (jd[Go] = null), Go--);
}
function $e(e, t) {
  Go++, (jd[Go] = e.current), (e.current = t);
}
var Wr = {},
  Tt = Gr(Wr),
  Ut = Gr(!1),
  xo = Wr;
function hi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Wr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function $t(e) {
  return (e = e.childContextTypes), e != null;
}
function pl() {
  We(Ut), We(Tt);
}
function Fm(e, t, n) {
  if (Tt.current !== Wr) throw Error(V(168));
  $e(Tt, t), $e(Ut, n);
}
function cy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(V(108, Ew(e) || 'Unknown', i));
  return Je({}, n, r);
}
function ml(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Wr),
    (xo = Tt.current),
    $e(Tt, e),
    $e(Ut, Ut.current),
    !0
  );
}
function jm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n
    ? ((e = cy(e, t, xo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      We(Ut),
      We(Tt),
      $e(Tt, e))
    : We(Ut),
    $e(Ut, n);
}
var nr = null,
  ou = !1,
  Ac = !1;
function dy(e) {
  nr === null ? (nr = [e]) : nr.push(e);
}
function Wx(e) {
  (ou = !0), dy(e);
}
function Xr() {
  if (!Ac && nr !== null) {
    Ac = !0;
    var e = 0,
      t = Re;
    try {
      var n = nr;
      for (Re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (nr = null), (ou = !1);
    } catch (i) {
      throw (nr !== null && (nr = nr.slice(e + 1)), D_(eh, Xr), i);
    } finally {
      (Re = t), (Ac = !1);
    }
  }
  return null;
}
var Xo = [],
  Yo = 0,
  gl = null,
  vl = 0,
  rn = [],
  on = 0,
  So = null,
  rr = 1,
  or = '';
function ao(e, t) {
  (Xo[Yo++] = vl), (Xo[Yo++] = gl), (gl = e), (vl = t);
}
function fy(e, t, n) {
  (rn[on++] = rr), (rn[on++] = or), (rn[on++] = So), (So = e);
  var r = rr;
  e = or;
  var i = 32 - xn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - xn(t) + i;
  if (30 < a) {
    var l = i - (i % 5);
    (a = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (rr = (1 << (32 - xn(t) + i)) | (n << i) | r),
      (or = a + e);
  } else (rr = (1 << a) | (n << i) | r), (or = e);
}
function uh(e) {
  e.return !== null && (ao(e, 1), fy(e, 1, 0));
}
function ch(e) {
  for (; e === gl; ) (gl = Xo[--Yo]), (Xo[Yo] = null), (vl = Xo[--Yo]), (Xo[Yo] = null);
  for (; e === So; )
    (So = rn[--on]),
      (rn[on] = null),
      (or = rn[--on]),
      (rn[on] = null),
      (rr = rn[--on]),
      (rn[on] = null);
}
var Vt = null,
  Zt = null,
  Qe = !1,
  bn = null;
function hy(e, t) {
  var n = an(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Um(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Vt = e), (Zt = Nr(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Vt = e), (Zt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = So !== null ? { id: rr, overflow: or } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = an(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Vt = e),
            (Zt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ud(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $d(e) {
  if (Qe) {
    var t = Zt;
    if (t) {
      var n = t;
      if (!Um(e, t)) {
        if (Ud(e)) throw Error(V(418));
        t = Nr(n.nextSibling);
        var r = Vt;
        t && Um(e, t) ? hy(r, n) : ((e.flags = (e.flags & -4097) | 2), (Qe = !1), (Vt = e));
      }
    } else {
      if (Ud(e)) throw Error(V(418));
      (e.flags = (e.flags & -4097) | 2), (Qe = !1), (Vt = e);
    }
  }
}
function $m(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Vt = e;
}
function Ts(e) {
  if (e !== Vt) return !1;
  if (!Qe) return $m(e), (Qe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Ad(e.type, e.memoizedProps))),
    t && (t = Zt))
  ) {
    if (Ud(e)) throw (py(), Error(V(418)));
    for (; t; ) hy(e, t), (t = Nr(t.nextSibling));
  }
  if (($m(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Zt = Nr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Zt = null;
    }
  } else Zt = Vt ? Nr(e.stateNode.nextSibling) : null;
  return !0;
}
function py() {
  for (var e = Zt; e; ) e = Nr(e.nextSibling);
}
function pi() {
  (Zt = Vt = null), (Qe = !1);
}
function dh(e) {
  bn === null ? (bn = [e]) : bn.push(e);
}
var Zx = fr.ReactCurrentBatchConfig;
function _n(e, t) {
  if (e && e.defaultProps) {
    (t = Je({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var _l = Gr(null),
  yl = null,
  Jo = null,
  fh = null;
function hh() {
  fh = Jo = yl = null;
}
function ph(e) {
  var t = _l.current;
  We(_l), (e._currentValue = t);
}
function Hd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function si(e, t) {
  (yl = e),
    (fh = Jo = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (jt = !0), (e.firstContext = null));
}
function ln(e) {
  var t = e._currentValue;
  if (fh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jo === null)) {
      if (yl === null) throw Error(V(308));
      (Jo = e), (yl.dependencies = { lanes: 0, firstContext: e });
    } else Jo = Jo.next = e;
  return t;
}
var po = null;
function mh(e) {
  po === null ? (po = [e]) : po.push(e);
}
function my(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), mh(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ur(e, r)
  );
}
function ur(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kr = !1;
function gh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gy(e, t) {
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
function ir(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Oe & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), ur(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), mh(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ur(e, n)
  );
}
function Ws(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), th(e, n);
  }
}
function Hm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = l) : (a = a.next = l), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function bl(e, t, n, r) {
  var i = e.updateQueue;
  kr = !1;
  var a = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    c = i.shared.pending;
  if (c !== null) {
    i.shared.pending = null;
    var d = c,
      h = d.next;
    (d.next = null), l === null ? (a = h) : (l.next = h), (l = d);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (c = g.lastBaseUpdate),
      c !== l && (c === null ? (g.firstBaseUpdate = h) : (c.next = h), (g.lastBaseUpdate = d)));
  }
  if (a !== null) {
    var v = i.baseState;
    (l = 0), (g = h = d = null), (c = a);
    do {
      var m = c.lane,
        _ = c.eventTime;
      if ((r & m) === m) {
        g !== null &&
          (g = g.next =
            {
              eventTime: _,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var x = e,
            S = c;
          switch (((m = t), (_ = n), S.tag)) {
            case 1:
              if (((x = S.payload), typeof x == 'function')) {
                v = x.call(_, v, m);
                break e;
              }
              v = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (((x = S.payload), (m = typeof x == 'function' ? x.call(_, v, m) : x), m == null))
                break e;
              v = Je({}, v, m);
              break e;
            case 2:
              kr = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64), (m = i.effects), m === null ? (i.effects = [c]) : m.push(c));
      } else
        (_ = {
          eventTime: _,
          lane: m,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          g === null ? ((h = g = _), (d = v)) : (g = g.next = _),
          (l |= m);
      if (((c = c.next), c === null)) {
        if (((c = i.shared.pending), c === null)) break;
        (m = c), (c = m.next), (m.next = null), (i.lastBaseUpdate = m), (i.shared.pending = null);
      }
    } while (1);
    if (
      (g === null && (d = v),
      (i.baseState = d),
      (i.firstBaseUpdate = h),
      (i.lastBaseUpdate = g),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (Co |= l), (e.lanes = l), (e.memoizedState = v);
  }
}
function Wm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(V(191, i));
        i.call(r);
      }
    }
}
var vy = new m_.Component().refs;
function Wd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Je({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var iu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? To(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Nt(),
      i = Br(e),
      a = ir(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = Dr(e, a, i)),
      t !== null && (Sn(t, e, i, r), Ws(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Nt(),
      i = Br(e),
      a = ir(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Dr(e, a, i)),
      t !== null && (Sn(t, e, i, r), Ws(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Nt(),
      r = Br(e),
      i = ir(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Dr(e, i, r)),
      t !== null && (Sn(t, e, r, n), Ws(t, e, r));
  },
};
function Zm(e, t, n, r, i, a, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, a, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ka(n, r) || !ka(i, a)
      : !0
  );
}
function _y(e, t, n) {
  var r = !1,
    i = Wr,
    a = t.contextType;
  return (
    typeof a == 'object' && a !== null
      ? (a = ln(a))
      : ((i = $t(t) ? xo : Tt.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? hi(e, i) : Wr)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = iu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Vm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && iu.enqueueReplaceState(t, t.state, null);
}
function Zd(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = vy), gh(e);
  var a = t.contextType;
  typeof a == 'object' && a !== null
    ? (i.context = ln(a))
    : ((a = $t(t) ? xo : Tt.current), (i.context = hi(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == 'function' && (Wd(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && iu.enqueueReplaceState(i, i.state, null),
      bl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Hi(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
      var i = r,
        a = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === a
        ? t.ref
        : ((t = function (l) {
            var c = i.refs;
            c === vy && (c = i.refs = {}), l === null ? delete c[a] : (c[a] = l);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != 'string') throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function zs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      V(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
    ))
  );
}
function qm(e) {
  var t = e._init;
  return t(e._payload);
}
function yy(e) {
  function t(w, b) {
    if (e) {
      var k = w.deletions;
      k === null ? ((w.deletions = [b]), (w.flags |= 16)) : k.push(b);
    }
  }
  function n(w, b) {
    if (!e) return null;
    for (; b !== null; ) t(w, b), (b = b.sibling);
    return null;
  }
  function r(w, b) {
    for (w = new Map(); b !== null; )
      b.key !== null ? w.set(b.key, b) : w.set(b.index, b), (b = b.sibling);
    return w;
  }
  function i(w, b) {
    return (w = Fr(w, b)), (w.index = 0), (w.sibling = null), w;
  }
  function a(w, b, k) {
    return (
      (w.index = k),
      e
        ? ((k = w.alternate),
          k !== null ? ((k = k.index), k < b ? ((w.flags |= 2), b) : k) : ((w.flags |= 2), b))
        : ((w.flags |= 1048576), b)
    );
  }
  function l(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function c(w, b, k, E) {
    return b === null || b.tag !== 6
      ? ((b = Wc(k, w.mode, E)), (b.return = w), b)
      : ((b = i(b, k)), (b.return = w), b);
  }
  function d(w, b, k, E) {
    var D = k.type;
    return D === Zo
      ? g(w, b, k.props.children, E, k.key)
      : b !== null &&
        (b.elementType === D ||
          (typeof D == 'object' && D !== null && D.$$typeof === Sr && qm(D) === b.type))
      ? ((E = i(b, k.props)), (E.ref = Hi(w, b, k)), (E.return = w), E)
      : ((E = Gs(k.type, k.key, k.props, null, w.mode, E)),
        (E.ref = Hi(w, b, k)),
        (E.return = w),
        E);
  }
  function h(w, b, k, E) {
    return b === null ||
      b.tag !== 4 ||
      b.stateNode.containerInfo !== k.containerInfo ||
      b.stateNode.implementation !== k.implementation
      ? ((b = Zc(k, w.mode, E)), (b.return = w), b)
      : ((b = i(b, k.children || [])), (b.return = w), b);
  }
  function g(w, b, k, E, D) {
    return b === null || b.tag !== 7
      ? ((b = yo(k, w.mode, E, D)), (b.return = w), b)
      : ((b = i(b, k)), (b.return = w), b);
  }
  function v(w, b, k) {
    if ((typeof b == 'string' && b !== '') || typeof b == 'number')
      return (b = Wc('' + b, w.mode, k)), (b.return = w), b;
    if (typeof b == 'object' && b !== null) {
      switch (b.$$typeof) {
        case bs:
          return (
            (k = Gs(b.type, b.key, b.props, null, w.mode, k)),
            (k.ref = Hi(w, null, b)),
            (k.return = w),
            k
          );
        case Wo:
          return (b = Zc(b, w.mode, k)), (b.return = w), b;
        case Sr:
          var E = b._init;
          return v(w, E(b._payload), k);
      }
      if (Ji(b) || Bi(b)) return (b = yo(b, w.mode, k, null)), (b.return = w), b;
      zs(w, b);
    }
    return null;
  }
  function m(w, b, k, E) {
    var D = b !== null ? b.key : null;
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return D !== null ? null : c(w, b, '' + k, E);
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case bs:
          return k.key === D ? d(w, b, k, E) : null;
        case Wo:
          return k.key === D ? h(w, b, k, E) : null;
        case Sr:
          return (D = k._init), m(w, b, D(k._payload), E);
      }
      if (Ji(k) || Bi(k)) return D !== null ? null : g(w, b, k, E, null);
      zs(w, k);
    }
    return null;
  }
  function _(w, b, k, E, D) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (w = w.get(k) || null), c(b, w, '' + E, D);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case bs:
          return (w = w.get(E.key === null ? k : E.key) || null), d(b, w, E, D);
        case Wo:
          return (w = w.get(E.key === null ? k : E.key) || null), h(b, w, E, D);
        case Sr:
          var F = E._init;
          return _(w, b, k, F(E._payload), D);
      }
      if (Ji(E) || Bi(E)) return (w = w.get(k) || null), g(b, w, E, D, null);
      zs(b, E);
    }
    return null;
  }
  function x(w, b, k, E) {
    for (var D = null, F = null, W = b, Q = (b = 0), te = null; W !== null && Q < k.length; Q++) {
      W.index > Q ? ((te = W), (W = null)) : (te = W.sibling);
      var q = m(w, W, k[Q], E);
      if (q === null) {
        W === null && (W = te);
        break;
      }
      e && W && q.alternate === null && t(w, W),
        (b = a(q, b, Q)),
        F === null ? (D = q) : (F.sibling = q),
        (F = q),
        (W = te);
    }
    if (Q === k.length) return n(w, W), Qe && ao(w, Q), D;
    if (W === null) {
      for (; Q < k.length; Q++)
        (W = v(w, k[Q], E)),
          W !== null && ((b = a(W, b, Q)), F === null ? (D = W) : (F.sibling = W), (F = W));
      return Qe && ao(w, Q), D;
    }
    for (W = r(w, W); Q < k.length; Q++)
      (te = _(W, w, Q, k[Q], E)),
        te !== null &&
          (e && te.alternate !== null && W.delete(te.key === null ? Q : te.key),
          (b = a(te, b, Q)),
          F === null ? (D = te) : (F.sibling = te),
          (F = te));
    return (
      e &&
        W.forEach(function (ue) {
          return t(w, ue);
        }),
      Qe && ao(w, Q),
      D
    );
  }
  function S(w, b, k, E) {
    var D = Bi(k);
    if (typeof D != 'function') throw Error(V(150));
    if (((k = D.call(k)), k == null)) throw Error(V(151));
    for (
      var F = (D = null), W = b, Q = (b = 0), te = null, q = k.next();
      W !== null && !q.done;
      Q++, q = k.next()
    ) {
      W.index > Q ? ((te = W), (W = null)) : (te = W.sibling);
      var ue = m(w, W, q.value, E);
      if (ue === null) {
        W === null && (W = te);
        break;
      }
      e && W && ue.alternate === null && t(w, W),
        (b = a(ue, b, Q)),
        F === null ? (D = ue) : (F.sibling = ue),
        (F = ue),
        (W = te);
    }
    if (q.done) return n(w, W), Qe && ao(w, Q), D;
    if (W === null) {
      for (; !q.done; Q++, q = k.next())
        (q = v(w, q.value, E)),
          q !== null && ((b = a(q, b, Q)), F === null ? (D = q) : (F.sibling = q), (F = q));
      return Qe && ao(w, Q), D;
    }
    for (W = r(w, W); !q.done; Q++, q = k.next())
      (q = _(W, w, Q, q.value, E)),
        q !== null &&
          (e && q.alternate !== null && W.delete(q.key === null ? Q : q.key),
          (b = a(q, b, Q)),
          F === null ? (D = q) : (F.sibling = q),
          (F = q));
    return (
      e &&
        W.forEach(function (ge) {
          return t(w, ge);
        }),
      Qe && ao(w, Q),
      D
    );
  }
  function O(w, b, k, E) {
    if (
      (typeof k == 'object' &&
        k !== null &&
        k.type === Zo &&
        k.key === null &&
        (k = k.props.children),
      typeof k == 'object' && k !== null)
    ) {
      switch (k.$$typeof) {
        case bs:
          e: {
            for (var D = k.key, F = b; F !== null; ) {
              if (F.key === D) {
                if (((D = k.type), D === Zo)) {
                  if (F.tag === 7) {
                    n(w, F.sibling), (b = i(F, k.props.children)), (b.return = w), (w = b);
                    break e;
                  }
                } else if (
                  F.elementType === D ||
                  (typeof D == 'object' && D !== null && D.$$typeof === Sr && qm(D) === F.type)
                ) {
                  n(w, F.sibling),
                    (b = i(F, k.props)),
                    (b.ref = Hi(w, F, k)),
                    (b.return = w),
                    (w = b);
                  break e;
                }
                n(w, F);
                break;
              } else t(w, F);
              F = F.sibling;
            }
            k.type === Zo
              ? ((b = yo(k.props.children, w.mode, E, k.key)), (b.return = w), (w = b))
              : ((E = Gs(k.type, k.key, k.props, null, w.mode, E)),
                (E.ref = Hi(w, b, k)),
                (E.return = w),
                (w = E));
          }
          return l(w);
        case Wo:
          e: {
            for (F = k.key; b !== null; ) {
              if (b.key === F)
                if (
                  b.tag === 4 &&
                  b.stateNode.containerInfo === k.containerInfo &&
                  b.stateNode.implementation === k.implementation
                ) {
                  n(w, b.sibling), (b = i(b, k.children || [])), (b.return = w), (w = b);
                  break e;
                } else {
                  n(w, b);
                  break;
                }
              else t(w, b);
              b = b.sibling;
            }
            (b = Zc(k, w.mode, E)), (b.return = w), (w = b);
          }
          return l(w);
        case Sr:
          return (F = k._init), O(w, b, F(k._payload), E);
      }
      if (Ji(k)) return x(w, b, k, E);
      if (Bi(k)) return S(w, b, k, E);
      zs(w, k);
    }
    return (typeof k == 'string' && k !== '') || typeof k == 'number'
      ? ((k = '' + k),
        b !== null && b.tag === 6
          ? (n(w, b.sibling), (b = i(b, k)), (b.return = w), (w = b))
          : (n(w, b), (b = Wc(k, w.mode, E)), (b.return = w), (w = b)),
        l(w))
      : n(w, b);
  }
  return O;
}
var mi = yy(!0),
  by = yy(!1),
  Va = {},
  Hn = Gr(Va),
  Oa = Gr(Va),
  La = Gr(Va);
function mo(e) {
  if (e === Va) throw Error(V(174));
  return e;
}
function vh(e, t) {
  switch (($e(La, t), $e(Oa, e), $e(Hn, Va), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Sd(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Sd(t, e));
  }
  We(Hn), $e(Hn, t);
}
function gi() {
  We(Hn), We(Oa), We(La);
}
function wy(e) {
  mo(La.current);
  var t = mo(Hn.current),
    n = Sd(t, e.type);
  t !== n && ($e(Oa, e), $e(Hn, n));
}
function _h(e) {
  Oa.current === e && (We(Hn), We(Oa));
}
var Ge = Gr(0);
function wl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Bc = [];
function yh() {
  for (var e = 0; e < Bc.length; e++) Bc[e]._workInProgressVersionPrimary = null;
  Bc.length = 0;
}
var Zs = fr.ReactCurrentDispatcher,
  Fc = fr.ReactCurrentBatchConfig,
  ko = 0,
  Ye = null,
  dt = null,
  gt = null,
  xl = !1,
  ua = !1,
  Ta = 0,
  Vx = 0;
function Ct() {
  throw Error(V(321));
}
function bh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Cn(e[n], t[n])) return !1;
  return !0;
}
function wh(e, t, n, r, i, a) {
  if (
    ((ko = a),
    (Ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zs.current = e === null || e.memoizedState === null ? Gx : Xx),
    (e = n(r, i)),
    ua)
  ) {
    a = 0;
    do {
      if (((ua = !1), (Ta = 0), 25 <= a)) throw Error(V(301));
      (a += 1), (gt = dt = null), (t.updateQueue = null), (Zs.current = Yx), (e = n(r, i));
    } while (ua);
  }
  if (
    ((Zs.current = Sl),
    (t = dt !== null && dt.next !== null),
    (ko = 0),
    (gt = dt = Ye = null),
    (xl = !1),
    t)
  )
    throw Error(V(300));
  return e;
}
function xh() {
  var e = Ta !== 0;
  return (Ta = 0), e;
}
function An() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return gt === null ? (Ye.memoizedState = gt = e) : (gt = gt.next = e), gt;
}
function un() {
  if (dt === null) {
    var e = Ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = dt.next;
  var t = gt === null ? Ye.memoizedState : gt.next;
  if (t !== null) (gt = t), (dt = e);
  else {
    if (e === null) throw Error(V(310));
    (dt = e),
      (e = {
        memoizedState: dt.memoizedState,
        baseState: dt.baseState,
        baseQueue: dt.baseQueue,
        queue: dt.queue,
        next: null,
      }),
      gt === null ? (Ye.memoizedState = gt = e) : (gt = gt.next = e);
  }
  return gt;
}
function za(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function jc(e) {
  var t = un(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = dt,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = a.next), (a.next = l);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var c = (l = null),
      d = null,
      h = a;
    do {
      var g = h.lane;
      if ((ko & g) === g)
        d !== null &&
          (d = d.next =
            {
              lane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
          (r = h.hasEagerState ? h.eagerState : e(r, h.action));
      else {
        var v = {
          lane: g,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        d === null ? ((c = d = v), (l = r)) : (d = d.next = v), (Ye.lanes |= g), (Co |= g);
      }
      h = h.next;
    } while (h !== null && h !== a);
    d === null ? (l = r) : (d.next = c),
      Cn(r, t.memoizedState) || (jt = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = d),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (Ye.lanes |= a), (Co |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Uc(e) {
  var t = un(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (a = e(a, l.action)), (l = l.next);
    while (l !== i);
    Cn(a, t.memoizedState) || (jt = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function xy() {}
function Sy(e, t) {
  var n = Ye,
    r = un(),
    i = t(),
    a = !Cn(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (jt = !0)),
    (r = r.queue),
    Sh(Py.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (gt !== null && gt.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Ra(9, Cy.bind(null, n, r, i, t), void 0, null), vt === null))
      throw Error(V(349));
    ko & 30 || ky(n, t, i);
  }
  return i;
}
function ky(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Ye.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Cy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ey(t) && Oy(e);
}
function Py(e, t, n) {
  return n(function () {
    Ey(t) && Oy(e);
  });
}
function Ey(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Cn(e, n);
  } catch {
    return !0;
  }
}
function Oy(e) {
  var t = ur(e, 1);
  t !== null && Sn(t, e, 1, -1);
}
function Qm(e) {
  var t = An();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: za,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kx.bind(null, Ye, e)),
    [t.memoizedState, e]
  );
}
function Ra(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ly() {
  return un().memoizedState;
}
function Vs(e, t, n, r) {
  var i = An();
  (Ye.flags |= e), (i.memoizedState = Ra(1 | t, n, void 0, r === void 0 ? null : r));
}
function au(e, t, n, r) {
  var i = un();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (dt !== null) {
    var l = dt.memoizedState;
    if (((a = l.destroy), r !== null && bh(r, l.deps))) {
      i.memoizedState = Ra(t, n, a, r);
      return;
    }
  }
  (Ye.flags |= e), (i.memoizedState = Ra(1 | t, n, a, r));
}
function Km(e, t) {
  return Vs(8390656, 8, e, t);
}
function Sh(e, t) {
  return au(2048, 8, e, t);
}
function Ty(e, t) {
  return au(4, 2, e, t);
}
function zy(e, t) {
  return au(4, 4, e, t);
}
function Ry(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Iy(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), au(4, 4, Ry.bind(null, t, e), n);
}
function kh() {}
function My(e, t) {
  var n = un();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bh(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Ny(e, t) {
  var n = un();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Dy(e, t, n) {
  return ko & 21
    ? (Cn(n, t) || ((n = F_()), (Ye.lanes |= n), (Co |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (jt = !0)), (e.memoizedState = n));
}
function qx(e, t) {
  var n = Re;
  (Re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Fc.transition;
  Fc.transition = {};
  try {
    e(!1), t();
  } finally {
    (Re = n), (Fc.transition = r);
  }
}
function Ay() {
  return un().memoizedState;
}
function Qx(e, t, n) {
  var r = Br(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), By(e)))
    Fy(t, n);
  else if (((n = my(e, t, n, r)), n !== null)) {
    var i = Nt();
    Sn(n, e, r, i), jy(n, t, r);
  }
}
function Kx(e, t, n) {
  var r = Br(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (By(e)) Fy(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && ((a = t.lastRenderedReducer), a !== null))
      try {
        var l = t.lastRenderedState,
          c = a(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = c), Cn(c, l))) {
          var d = t.interleaved;
          d === null ? ((i.next = i), mh(t)) : ((i.next = d.next), (d.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = my(e, t, i, r)), n !== null && ((i = Nt()), Sn(n, e, r, i), jy(n, t, r));
  }
}
function By(e) {
  var t = e.alternate;
  return e === Ye || (t !== null && t === Ye);
}
function Fy(e, t) {
  ua = xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function jy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), th(e, n);
  }
}
var Sl = {
    readContext: ln,
    useCallback: Ct,
    useContext: Ct,
    useEffect: Ct,
    useImperativeHandle: Ct,
    useInsertionEffect: Ct,
    useLayoutEffect: Ct,
    useMemo: Ct,
    useReducer: Ct,
    useRef: Ct,
    useState: Ct,
    useDebugValue: Ct,
    useDeferredValue: Ct,
    useTransition: Ct,
    useMutableSource: Ct,
    useSyncExternalStore: Ct,
    useId: Ct,
    unstable_isNewReconciler: !1,
  },
  Gx = {
    readContext: ln,
    useCallback: function (e, t) {
      return (An().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ln,
    useEffect: Km,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Vs(4194308, 4, Ry.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Vs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = An();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = An();
      return (
        (t = n !== void 0 ? n(t) : t),
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
        (e = e.dispatch = Qx.bind(null, Ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = An();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qm,
    useDebugValue: kh,
    useDeferredValue: function (e) {
      return (An().memoizedState = e);
    },
    useTransition: function () {
      var e = Qm(!1),
        t = e[0];
      return (e = qx.bind(null, e[1])), (An().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ye,
        i = An();
      if (Qe) {
        if (n === void 0) throw Error(V(407));
        n = n();
      } else {
        if (((n = t()), vt === null)) throw Error(V(349));
        ko & 30 || ky(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        Km(Py.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Ra(9, Cy.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = An(),
        t = vt.identifierPrefix;
      if (Qe) {
        var n = or,
          r = rr;
        (n = (r & ~(1 << (32 - xn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Ta++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Vx++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xx = {
    readContext: ln,
    useCallback: My,
    useContext: ln,
    useEffect: Sh,
    useImperativeHandle: Iy,
    useInsertionEffect: Ty,
    useLayoutEffect: zy,
    useMemo: Ny,
    useReducer: jc,
    useRef: Ly,
    useState: function () {
      return jc(za);
    },
    useDebugValue: kh,
    useDeferredValue: function (e) {
      var t = un();
      return Dy(t, dt.memoizedState, e);
    },
    useTransition: function () {
      var e = jc(za)[0],
        t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: xy,
    useSyncExternalStore: Sy,
    useId: Ay,
    unstable_isNewReconciler: !1,
  },
  Yx = {
    readContext: ln,
    useCallback: My,
    useContext: ln,
    useEffect: Sh,
    useImperativeHandle: Iy,
    useInsertionEffect: Ty,
    useLayoutEffect: zy,
    useMemo: Ny,
    useReducer: Uc,
    useRef: Ly,
    useState: function () {
      return Uc(za);
    },
    useDebugValue: kh,
    useDeferredValue: function (e) {
      var t = un();
      return dt === null ? (t.memoizedState = e) : Dy(t, dt.memoizedState, e);
    },
    useTransition: function () {
      var e = Uc(za)[0],
        t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: xy,
    useSyncExternalStore: Sy,
    useId: Ay,
    unstable_isNewReconciler: !1,
  };
function vi(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Pw(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function $c(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jx = typeof WeakMap == 'function' ? WeakMap : Map;
function Uy(e, t, n) {
  (n = ir(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Cl || ((Cl = !0), (nf = r)), Vd(e, t);
    }),
    n
  );
}
function $y(e, t, n) {
  (n = ir(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Vd(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == 'function' &&
      (n.callback = function () {
        Vd(e, t), typeof r != 'function' && (Ar === null ? (Ar = new Set([this])) : Ar.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' });
      }),
    n
  );
}
function Gm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jx();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = hS.bind(null, e, t, n)), t.then(e, e));
}
function Xm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ym(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = ir(-1, 1)), (t.tag = 2), Dr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var eS = fr.ReactCurrentOwner,
  jt = !1;
function Mt(e, t, n, r) {
  t.child = e === null ? by(t, null, n, r) : mi(t, e.child, n, r);
}
function Jm(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    si(t, i),
    (r = wh(e, t, n, r, a, i)),
    (n = xh()),
    e !== null && !jt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), cr(e, t, i))
      : (Qe && n && uh(t), (t.flags |= 1), Mt(e, t, r, i), t.child)
  );
}
function eg(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == 'function' &&
      !Rh(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Hy(e, t, a, r, i))
      : ((e = Gs(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var l = a.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : ka), n(l, r) && e.ref === t.ref))
      return cr(e, t, i);
  }
  return (t.flags |= 1), (e = Fr(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Hy(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (ka(a, r) && e.ref === t.ref)
      if (((jt = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0)) e.flags & 131072 && (jt = !0);
      else return (t.lanes = e.lanes), cr(e, t, i);
  }
  return qd(e, t, n, r, i);
}
function Wy(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $e(ti, Wt),
        (Wt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          $e(ti, Wt),
          (Wt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        $e(ti, Wt),
        (Wt |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), $e(ti, Wt), (Wt |= r);
  return Mt(e, t, i, n), t.child;
}
function Zy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qd(e, t, n, r, i) {
  var a = $t(n) ? xo : Tt.current;
  return (
    (a = hi(t, a)),
    si(t, i),
    (n = wh(e, t, n, r, a, i)),
    (r = xh()),
    e !== null && !jt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), cr(e, t, i))
      : (Qe && r && uh(t), (t.flags |= 1), Mt(e, t, n, i), t.child)
  );
}
function tg(e, t, n, r, i) {
  if ($t(n)) {
    var a = !0;
    ml(t);
  } else a = !1;
  if ((si(t, i), t.stateNode === null)) qs(e, t), _y(t, n, r), Zd(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      c = t.memoizedProps;
    l.props = c;
    var d = l.context,
      h = n.contextType;
    typeof h == 'object' && h !== null
      ? (h = ln(h))
      : ((h = $t(n) ? xo : Tt.current), (h = hi(t, h)));
    var g = n.getDerivedStateFromProps,
      v = typeof g == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
    v ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((c !== r || d !== h) && Vm(t, l, r, h)),
      (kr = !1);
    var m = t.memoizedState;
    (l.state = m),
      bl(t, r, l, i),
      (d = t.memoizedState),
      c !== r || m !== d || Ut.current || kr
        ? (typeof g == 'function' && (Wd(t, n, g, r), (d = t.memoizedState)),
          (c = kr || Zm(t, n, c, r, m, d, h))
            ? (v ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = d)),
          (l.props = r),
          (l.state = d),
          (l.context = h),
          (r = c))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      gy(e, t),
      (c = t.memoizedProps),
      (h = t.type === t.elementType ? c : _n(t.type, c)),
      (l.props = h),
      (v = t.pendingProps),
      (m = l.context),
      (d = n.contextType),
      typeof d == 'object' && d !== null
        ? (d = ln(d))
        : ((d = $t(n) ? xo : Tt.current), (d = hi(t, d)));
    var _ = n.getDerivedStateFromProps;
    (g = typeof _ == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((c !== v || m !== d) && Vm(t, l, r, d)),
      (kr = !1),
      (m = t.memoizedState),
      (l.state = m),
      bl(t, r, l, i);
    var x = t.memoizedState;
    c !== v || m !== x || Ut.current || kr
      ? (typeof _ == 'function' && (Wd(t, n, _, r), (x = t.memoizedState)),
        (h = kr || Zm(t, n, h, r, m, x, d) || !1)
          ? (g ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' && l.componentWillUpdate(r, x, d),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, x, d)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (c === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (c === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (l.props = r),
        (l.state = x),
        (l.context = d),
        (r = h))
      : (typeof l.componentDidUpdate != 'function' ||
          (c === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (c === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Qd(e, t, n, r, a, i);
}
function Qd(e, t, n, r, i, a) {
  Zy(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && jm(t, n, !1), cr(e, t, a);
  (r = t.stateNode), (eS.current = t);
  var c = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = mi(t, e.child, null, a)), (t.child = mi(t, null, c, a)))
      : Mt(e, t, c, a),
    (t.memoizedState = r.state),
    i && jm(t, n, !0),
    t.child
  );
}
function Vy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Fm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fm(e, t.context, !1),
    vh(e, t.containerInfo);
}
function ng(e, t, n, r, i) {
  return pi(), dh(i), (t.flags |= 256), Mt(e, t, n, r), t.child;
}
var Kd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qy(e, t, n) {
  var r = t.pendingProps,
    i = Ge.current,
    a = !1,
    l = (t.flags & 128) !== 0,
    c;
  if (
    ((c = l) || (c = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    c ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    $e(Ge, i & 1),
    e === null)
  )
    return (
      $d(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = l))
                : (a = uu(l, r, 0, null)),
              (e = yo(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Gd(n)),
              (t.memoizedState = Kd),
              e)
            : Ch(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((c = i.dehydrated), c !== null)))
    return tS(e, t, l, r, c, i, n);
  if (a) {
    (a = r.fallback), (l = t.mode), (i = e.child), (c = i.sibling);
    var d = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = d), (t.deletions = null))
        : ((r = Fr(i, d)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      c !== null ? (a = Fr(c, a)) : ((a = yo(a, l, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Gd(n)
          : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (a.memoizedState = l),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = Kd),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Fr(a, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ch(e, t) {
  return (t = uu({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Rs(e, t, n, r) {
  return (
    r !== null && dh(r),
    mi(t, e.child, null, n),
    (e = Ch(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tS(e, t, n, r, i, a, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = $c(Error(V(422)))), Rs(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = uu({ mode: 'visible', children: r.children }, i, 0, null)),
        (a = yo(a, i, l, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && mi(t, e.child, null, l),
        (t.child.memoizedState = Gd(l)),
        (t.memoizedState = Kd),
        a);
  if (!(t.mode & 1)) return Rs(e, t, l, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var c = r.dgst;
    return (r = c), (a = Error(V(419))), (r = $c(a, r, void 0)), Rs(e, t, l, r);
  }
  if (((c = (l & e.childLanes) !== 0), jt || c)) {
    if (((r = vt), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 && i !== a.retryLane && ((a.retryLane = i), ur(e, i), Sn(r, e, i, -1));
    }
    return zh(), (r = $c(Error(V(421)))), Rs(e, t, l, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = pS.bind(null, e)), (i._reactRetry = t), null)
    : ((e = a.treeContext),
      (Zt = Nr(i.nextSibling)),
      (Vt = t),
      (Qe = !0),
      (bn = null),
      e !== null &&
        ((rn[on++] = rr),
        (rn[on++] = or),
        (rn[on++] = So),
        (rr = e.id),
        (or = e.overflow),
        (So = t)),
      (t = Ch(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Hd(e.return, t, n);
}
function Hc(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function Qy(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((Mt(e, t, r.children, n), (r = Ge.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rg(e, n, t);
        else if (e.tag === 19) rg(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if (($e(Ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && wl(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Hc(t, !1, i, n, a);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && wl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Hc(t, !0, n, null, a);
        break;
      case 'together':
        Hc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qs(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function cr(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Co |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = Fr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Fr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function nS(e, t, n) {
  switch (t.tag) {
    case 3:
      Vy(t), pi();
      break;
    case 5:
      wy(t);
      break;
    case 1:
      $t(t.type) && ml(t);
      break;
    case 4:
      vh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      $e(_l, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($e(Ge, Ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? qy(e, t, n)
          : ($e(Ge, Ge.current & 1), (e = cr(e, t, n)), e !== null ? e.sibling : null);
      $e(Ge, Ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        $e(Ge, Ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Wy(e, t, n);
  }
  return cr(e, t, n);
}
var Ky, Xd, Gy, Xy;
Ky = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Xd = function () {};
Gy = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), mo(Hn.current);
    var a = null;
    switch (n) {
      case 'input':
        (i = yd(e, i)), (r = yd(e, r)), (a = []);
        break;
      case 'select':
        (i = Je({}, i, { value: void 0 })), (r = Je({}, r, { value: void 0 })), (a = []);
        break;
      case 'textarea':
        (i = xd(e, i)), (r = xd(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = hl);
    }
    kd(n, r);
    var l;
    n = null;
    for (h in i)
      if (!r.hasOwnProperty(h) && i.hasOwnProperty(h) && i[h] != null)
        if (h === 'style') {
          var c = i[h];
          for (l in c) c.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          h !== 'dangerouslySetInnerHTML' &&
            h !== 'children' &&
            h !== 'suppressContentEditableWarning' &&
            h !== 'suppressHydrationWarning' &&
            h !== 'autoFocus' &&
            (va.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
    for (h in r) {
      var d = r[h];
      if (((c = i?.[h]), r.hasOwnProperty(h) && d !== c && (d != null || c != null)))
        if (h === 'style')
          if (c) {
            for (l in c)
              !c.hasOwnProperty(l) || (d && d.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
            for (l in d) d.hasOwnProperty(l) && c[l] !== d[l] && (n || (n = {}), (n[l] = d[l]));
          } else n || (a || (a = []), a.push(h, n)), (n = d);
        else
          h === 'dangerouslySetInnerHTML'
            ? ((d = d ? d.__html : void 0),
              (c = c ? c.__html : void 0),
              d != null && c !== d && (a = a || []).push(h, d))
            : h === 'children'
            ? (typeof d != 'string' && typeof d != 'number') || (a = a || []).push(h, '' + d)
            : h !== 'suppressContentEditableWarning' &&
              h !== 'suppressHydrationWarning' &&
              (va.hasOwnProperty(h)
                ? (d != null && h === 'onScroll' && He('scroll', e), a || c === d || (a = []))
                : (a = a || []).push(h, d));
    }
    n && (a = a || []).push('style', n);
    var h = a;
    (t.updateQueue = h) && (t.flags |= 4);
  }
};
Xy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wi(e, t) {
  if (!Qe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function rS(e, t, n) {
  var r = t.pendingProps;
  switch ((ch(t), t.tag)) {
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
      return Pt(t), null;
    case 1:
      return $t(t.type) && pl(), Pt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        gi(),
        We(Ut),
        We(Tt),
        yh(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ts(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), bn !== null && (af(bn), (bn = null)))),
        Xd(e, t),
        Pt(t),
        null
      );
    case 5:
      _h(t);
      var i = mo(La.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gy(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return Pt(t), null;
        }
        if (((e = mo(Hn.current)), Ts(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[Fn] = t), (r[Ea] = a), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              He('cancel', r), He('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              He('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < ta.length; i++) He(ta[i], r);
              break;
            case 'source':
              He('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              He('error', r), He('load', r);
              break;
            case 'details':
              He('toggle', r);
              break;
            case 'input':
              fm(r, a), He('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!a.multiple }), He('invalid', r);
              break;
            case 'textarea':
              pm(r, a), He('invalid', r);
          }
          kd(n, a), (i = null);
          for (var l in a)
            if (a.hasOwnProperty(l)) {
              var c = a[l];
              l === 'children'
                ? typeof c == 'string'
                  ? r.textContent !== c &&
                    (a.suppressHydrationWarning !== !0 && Ls(r.textContent, c, e),
                    (i = ['children', c]))
                  : typeof c == 'number' &&
                    r.textContent !== '' + c &&
                    (a.suppressHydrationWarning !== !0 && Ls(r.textContent, c, e),
                    (i = ['children', '' + c]))
                : va.hasOwnProperty(l) && c != null && l === 'onScroll' && He('scroll', r);
            }
          switch (n) {
            case 'input':
              ws(r), hm(r, a, !0);
              break;
            case 'textarea':
              ws(r), mm(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof a.onClick == 'function' && (r.onclick = hl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = k_(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Fn] = t),
            (e[Ea] = r),
            Ky(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Cd(n, r)), n)) {
              case 'dialog':
                He('cancel', e), He('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                He('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < ta.length; i++) He(ta[i], e);
                i = r;
                break;
              case 'source':
                He('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                He('error', e), He('load', e), (i = r);
                break;
              case 'details':
                He('toggle', e), (i = r);
                break;
              case 'input':
                fm(e, r), (i = yd(e, r)), He('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Je({}, r, { value: void 0 })),
                  He('invalid', e);
                break;
              case 'textarea':
                pm(e, r), (i = xd(e, r)), He('invalid', e);
                break;
              default:
                i = r;
            }
            kd(n, i), (c = i);
            for (a in c)
              if (c.hasOwnProperty(a)) {
                var d = c[a];
                a === 'style'
                  ? E_(e, d)
                  : a === 'dangerouslySetInnerHTML'
                  ? ((d = d ? d.__html : void 0), d != null && C_(e, d))
                  : a === 'children'
                  ? typeof d == 'string'
                    ? (n !== 'textarea' || d !== '') && _a(e, d)
                    : typeof d == 'number' && _a(e, '' + d)
                  : a !== 'suppressContentEditableWarning' &&
                    a !== 'suppressHydrationWarning' &&
                    a !== 'autoFocus' &&
                    (va.hasOwnProperty(a)
                      ? d != null && a === 'onScroll' && He('scroll', e)
                      : d != null && Kf(e, a, d, l));
              }
            switch (n) {
              case 'input':
                ws(e), hm(e, r, !1);
                break;
              case 'textarea':
                ws(e), mm(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Hr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? ri(e, !!r.multiple, a, !1)
                    : r.defaultValue != null && ri(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = hl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pt(t), null;
    case 6:
      if (e && t.stateNode != null) Xy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(V(166));
        if (((n = mo(La.current)), mo(Hn.current), Ts(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fn] = t),
            (a = r.nodeValue !== n) && ((e = Vt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ls(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ls(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fn] = t),
            (t.stateNode = r);
      }
      return Pt(t), null;
    case 13:
      if (
        (We(Ge),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Qe && Zt !== null && t.mode & 1 && !(t.flags & 128))
          py(), pi(), (t.flags |= 98560), (a = !1);
        else if (((a = Ts(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(V(318));
            if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
              throw Error(V(317));
            a[Fn] = t;
          } else pi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pt(t), (a = !1);
        } else bn !== null && (af(bn), (bn = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || Ge.current & 1 ? ft === 0 && (ft = 3) : zh())),
          t.updateQueue !== null && (t.flags |= 4),
          Pt(t),
          null);
    case 4:
      return gi(), Xd(e, t), e === null && Ca(t.stateNode.containerInfo), Pt(t), null;
    case 10:
      return ph(t.type._context), Pt(t), null;
    case 17:
      return $t(t.type) && pl(), Pt(t), null;
    case 19:
      if ((We(Ge), (a = t.memoizedState), a === null)) return Pt(t), null;
      if (((r = (t.flags & 128) !== 0), (l = a.rendering), l === null))
        if (r) Wi(a, !1);
        else {
          if (ft !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = wl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Wi(a, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (l = a.alternate),
                    l === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = l.childLanes),
                        (a.lanes = l.lanes),
                        (a.child = l.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = l.memoizedProps),
                        (a.memoizedState = l.memoizedState),
                        (a.updateQueue = l.updateQueue),
                        (a.type = l.type),
                        (e = l.dependencies),
                        (a.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return $e(Ge, (Ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            at() > _i &&
            ((t.flags |= 128), (r = !0), Wi(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = wl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Wi(a, !0),
              a.tail === null && a.tailMode === 'hidden' && !l.alternate && !Qe)
            )
              return Pt(t), null;
          } else
            2 * at() - a.renderingStartTime > _i &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Wi(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = a.last), n !== null ? (n.sibling = l) : (t.child = l), (a.last = l));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = at()),
          (t.sibling = null),
          (n = Ge.current),
          $e(Ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pt(t), null);
    case 22:
    case 23:
      return (
        Th(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Wt & 1073741824 && (Pt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function oS(e, t) {
  switch ((ch(t), t.tag)) {
    case 1:
      return (
        $t(t.type) && pl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        gi(),
        We(Ut),
        We(Tt),
        yh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return _h(t), null;
    case 13:
      if ((We(Ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(V(340));
        pi();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return We(Ge), null;
    case 4:
      return gi(), null;
    case 10:
      return ph(t.type._context), null;
    case 22:
    case 23:
      return Th(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Is = !1,
  Lt = !1,
  iS = typeof WeakSet == 'function' ? WeakSet : Set,
  ne = null;
function ei(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        nt(e, t, r);
      }
    else n.current = null;
}
function Yd(e, t, n) {
  try {
    n();
  } catch (r) {
    nt(e, t, r);
  }
}
var og = !1;
function aS(e, t) {
  if (((Nd = cl), (e = ty()), lh(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            c = -1,
            d = -1,
            h = 0,
            g = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var _;
              v !== n || (i !== 0 && v.nodeType !== 3) || (c = l + i),
                v !== a || (r !== 0 && v.nodeType !== 3) || (d = l + r),
                v.nodeType === 3 && (l += v.nodeValue.length),
                (_ = v.firstChild) !== null;

            )
              (m = v), (v = _);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++h === i && (c = l),
                m === a && ++g === r && (d = l),
                (_ = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = _;
          }
          n = c === -1 || d === -1 ? null : { start: c, end: d };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Dd = { focusedElem: e, selectionRange: n }, cl = !1, ne = t; ne !== null; )
    if (((t = ne), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (ne = e);
    else
      for (; ne !== null; ) {
        t = ne;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var S = x.memoizedProps,
                    O = x.memoizedState,
                    w = t.stateNode,
                    b = w.getSnapshotBeforeUpdate(t.elementType === t.type ? S : _n(t.type, S), O);
                  w.__reactInternalSnapshotBeforeUpdate = b;
                }
                break;
              case 3:
                var k = t.stateNode.containerInfo;
                k.nodeType === 1
                  ? (k.textContent = '')
                  : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(V(163));
            }
        } catch (E) {
          nt(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (ne = e);
          break;
        }
        ne = t.return;
      }
  return (x = og), (og = !1), x;
}
function ca(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Yd(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function su(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
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
function Jd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Yy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Yy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Fn], delete t[Ea], delete t[Fd], delete t[$x], delete t[Hx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Jy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ig(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jy(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ef(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ef(e, t, n), e = e.sibling; e !== null; ) ef(e, t, n), (e = e.sibling);
}
function tf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tf(e, t, n), e = e.sibling; e !== null; ) tf(e, t, n), (e = e.sibling);
}
var wt = null,
  yn = !1;
function br(e, t, n) {
  for (n = n.child; n !== null; ) e0(e, t, n), (n = n.sibling);
}
function e0(e, t, n) {
  if ($n && typeof $n.onCommitFiberUnmount == 'function')
    try {
      $n.onCommitFiberUnmount(Jl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Lt || ei(n, t);
    case 6:
      var r = wt,
        i = yn;
      (wt = null),
        br(e, t, n),
        (wt = r),
        (yn = i),
        wt !== null &&
          (yn
            ? ((e = wt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : wt.removeChild(n.stateNode));
      break;
    case 18:
      wt !== null &&
        (yn
          ? ((e = wt),
            (n = n.stateNode),
            e.nodeType === 8 ? Dc(e.parentNode, n) : e.nodeType === 1 && Dc(e, n),
            xa(e))
          : Dc(wt, n.stateNode));
      break;
    case 4:
      (r = wt),
        (i = yn),
        (wt = n.stateNode.containerInfo),
        (yn = !0),
        br(e, t, n),
        (wt = r),
        (yn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Lt && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var a = i,
            l = a.destroy;
          (a = a.tag), l !== void 0 && (a & 2 || a & 4) && Yd(n, t, l), (i = i.next);
        } while (i !== r);
      }
      br(e, t, n);
      break;
    case 1:
      if (!Lt && (ei(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (c) {
          nt(n, t, c);
        }
      br(e, t, n);
      break;
    case 21:
      br(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Lt = (r = Lt) || n.memoizedState !== null), br(e, t, n), (Lt = r))
        : br(e, t, n);
      break;
    default:
      br(e, t, n);
  }
}
function ag(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new iS()),
      t.forEach(function (r) {
        var i = mS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function mn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          l = t,
          c = l;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              (wt = c.stateNode), (yn = !1);
              break e;
            case 3:
              (wt = c.stateNode.containerInfo), (yn = !0);
              break e;
            case 4:
              (wt = c.stateNode.containerInfo), (yn = !0);
              break e;
          }
          c = c.return;
        }
        if (wt === null) throw Error(V(160));
        e0(a, l, i), (wt = null), (yn = !1);
        var d = i.alternate;
        d !== null && (d.return = null), (i.return = null);
      } catch (h) {
        nt(i, t, h);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) t0(t, e), (t = t.sibling);
}
function t0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mn(t, e), Mn(e), r & 4)) {
        try {
          ca(3, e, e.return), su(3, e);
        } catch (S) {
          nt(e, e.return, S);
        }
        try {
          ca(5, e, e.return);
        } catch (S) {
          nt(e, e.return, S);
        }
      }
      break;
    case 1:
      mn(t, e), Mn(e), r & 512 && n !== null && ei(n, n.return);
      break;
    case 5:
      if ((mn(t, e), Mn(e), r & 512 && n !== null && ei(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          _a(i, '');
        } catch (S) {
          nt(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          l = n !== null ? n.memoizedProps : a,
          c = e.type,
          d = e.updateQueue;
        if (((e.updateQueue = null), d !== null))
          try {
            c === 'input' && a.type === 'radio' && a.name != null && x_(i, a), Cd(c, l);
            var h = Cd(c, a);
            for (l = 0; l < d.length; l += 2) {
              var g = d[l],
                v = d[l + 1];
              g === 'style'
                ? E_(i, v)
                : g === 'dangerouslySetInnerHTML'
                ? C_(i, v)
                : g === 'children'
                ? _a(i, v)
                : Kf(i, g, v, h);
            }
            switch (c) {
              case 'input':
                bd(i, a);
                break;
              case 'textarea':
                S_(i, a);
                break;
              case 'select':
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var _ = a.value;
                _ != null
                  ? ri(i, !!a.multiple, _, !1)
                  : m !== !!a.multiple &&
                    (a.defaultValue != null
                      ? ri(i, !!a.multiple, a.defaultValue, !0)
                      : ri(i, !!a.multiple, a.multiple ? [] : '', !1));
            }
            i[Ea] = a;
          } catch (S) {
            nt(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((mn(t, e), Mn(e), r & 4)) {
        if (e.stateNode === null) throw Error(V(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (S) {
          nt(e, e.return, S);
        }
      }
      break;
    case 3:
      if ((mn(t, e), Mn(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          xa(t.containerInfo);
        } catch (S) {
          nt(e, e.return, S);
        }
      break;
    case 4:
      mn(t, e), Mn(e);
      break;
    case 13:
      mn(t, e),
        Mn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a || (i.alternate !== null && i.alternate.memoizedState !== null) || (Oh = at())),
        r & 4 && ag(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Lt = (h = Lt) || g), mn(t, e), (Lt = h)) : mn(t, e),
        Mn(e),
        r & 8192)
      ) {
        if (((h = e.memoizedState !== null), (e.stateNode.isHidden = h) && !g && e.mode & 1))
          for (ne = e, g = e.child; g !== null; ) {
            for (v = ne = g; ne !== null; ) {
              switch (((m = ne), (_ = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ca(4, m, m.return);
                  break;
                case 1:
                  ei(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (S) {
                      nt(r, n, S);
                    }
                  }
                  break;
                case 5:
                  ei(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    lg(v);
                    continue;
                  }
              }
              _ !== null ? ((_.return = m), (ne = _)) : lg(v);
            }
            g = g.sibling;
          }
        e: for (g = null, v = e; ; ) {
          if (v.tag === 5) {
            if (g === null) {
              g = v;
              try {
                (i = v.stateNode),
                  h
                    ? ((a = i.style),
                      typeof a.setProperty == 'function'
                        ? a.setProperty('display', 'none', 'important')
                        : (a.display = 'none'))
                    : ((c = v.stateNode),
                      (d = v.memoizedProps.style),
                      (l = d != null && d.hasOwnProperty('display') ? d.display : null),
                      (c.style.display = P_('display', l)));
              } catch (S) {
                nt(e, e.return, S);
              }
            }
          } else if (v.tag === 6) {
            if (g === null)
              try {
                v.stateNode.nodeValue = h ? '' : v.memoizedProps;
              } catch (S) {
                nt(e, e.return, S);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) || v.memoizedState === null || v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            g === v && (g = null), (v = v.return);
          }
          g === v && (g = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      mn(t, e), Mn(e), r & 4 && ag(e);
      break;
    case 21:
      break;
    default:
      mn(t, e), Mn(e);
  }
}
function Mn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (_a(i, ''), (r.flags &= -33));
          var a = ig(e);
          tf(e, a, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            c = ig(e);
          ef(e, c, l);
          break;
        default:
          throw Error(V(161));
      }
    } catch (d) {
      nt(e, e.return, d);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sS(e, t, n) {
  (ne = e), n0(e);
}
function n0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ne !== null; ) {
    var i = ne,
      a = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Is;
      if (!l) {
        var c = i.alternate,
          d = (c !== null && c.memoizedState !== null) || Lt;
        c = Is;
        var h = Lt;
        if (((Is = l), (Lt = d) && !h))
          for (ne = i; ne !== null; )
            (l = ne),
              (d = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? ug(i)
                : d !== null
                ? ((d.return = l), (ne = d))
                : ug(i);
        for (; a !== null; ) (ne = a), n0(a), (a = a.sibling);
        (ne = i), (Is = c), (Lt = h);
      }
      sg(e);
    } else i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (ne = a)) : sg(e);
  }
}
function sg(e) {
  for (; ne !== null; ) {
    var t = ne;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Lt || su(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Lt)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : _n(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var a = t.updateQueue;
              a !== null && Wm(t, a, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wm(t, l, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var d = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    d.autoFocus && n.focus();
                    break;
                  case 'img':
                    d.src && (n.src = d.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var h = t.alternate;
                if (h !== null) {
                  var g = h.memoizedState;
                  if (g !== null) {
                    var v = g.dehydrated;
                    v !== null && xa(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(V(163));
          }
        Lt || (t.flags & 512 && Jd(t));
      } catch (m) {
        nt(t, t.return, m);
      }
    }
    if (t === e) {
      ne = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (ne = n);
      break;
    }
    ne = t.return;
  }
}
function lg(e) {
  for (; ne !== null; ) {
    var t = ne;
    if (t === e) {
      ne = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (ne = n);
      break;
    }
    ne = t.return;
  }
}
function ug(e) {
  for (; ne !== null; ) {
    var t = ne;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            su(4, t);
          } catch (d) {
            nt(t, n, d);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (d) {
              nt(t, i, d);
            }
          }
          var a = t.return;
          try {
            Jd(t);
          } catch (d) {
            nt(t, a, d);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Jd(t);
          } catch (d) {
            nt(t, l, d);
          }
      }
    } catch (d) {
      nt(t, t.return, d);
    }
    if (t === e) {
      ne = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      (c.return = t.return), (ne = c);
      break;
    }
    ne = t.return;
  }
}
var lS = Math.ceil,
  kl = fr.ReactCurrentDispatcher,
  Ph = fr.ReactCurrentOwner,
  sn = fr.ReactCurrentBatchConfig,
  Oe = 0,
  vt = null,
  ct = null,
  St = 0,
  Wt = 0,
  ti = Gr(0),
  ft = 0,
  Ia = null,
  Co = 0,
  lu = 0,
  Eh = 0,
  da = null,
  Ft = null,
  Oh = 0,
  _i = 1 / 0,
  tr = null,
  Cl = !1,
  nf = null,
  Ar = null,
  Ms = !1,
  Tr = null,
  Pl = 0,
  fa = 0,
  rf = null,
  Qs = -1,
  Ks = 0;
function Nt() {
  return Oe & 6 ? at() : Qs !== -1 ? Qs : (Qs = at());
}
function Br(e) {
  return e.mode & 1
    ? Oe & 2 && St !== 0
      ? St & -St
      : Zx.transition !== null
      ? (Ks === 0 && (Ks = F_()), Ks)
      : ((e = Re), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : V_(e.type))), e)
    : 1;
}
function Sn(e, t, n, r) {
  if (50 < fa) throw ((fa = 0), (rf = null), Error(V(185)));
  Ha(e, n, r),
    (!(Oe & 2) || e !== vt) &&
      (e === vt && (!(Oe & 2) && (lu |= n), ft === 4 && Er(e, St)),
      Ht(e, r),
      n === 1 && Oe === 0 && !(t.mode & 1) && ((_i = at() + 500), ou && Xr()));
}
function Ht(e, t) {
  var n = e.callbackNode;
  Zw(e, t);
  var r = ul(e, e === vt ? St : 0);
  if (r === 0) n !== null && _m(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _m(n), t === 1))
      e.tag === 0 ? Wx(cg.bind(null, e)) : dy(cg.bind(null, e)),
        jx(function () {
          !(Oe & 6) && Xr();
        }),
        (n = null);
    else {
      switch (j_(r)) {
        case 1:
          n = eh;
          break;
        case 4:
          n = A_;
          break;
        case 16:
          n = ll;
          break;
        case 536870912:
          n = B_;
          break;
        default:
          n = ll;
      }
      n = c0(n, r0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function r0(e, t) {
  if (((Qs = -1), (Ks = 0), Oe & 6)) throw Error(V(327));
  var n = e.callbackNode;
  if (li() && e.callbackNode !== n) return null;
  var r = ul(e, e === vt ? St : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = El(e, r);
  else {
    t = r;
    var i = Oe;
    Oe |= 2;
    var a = i0();
    (vt !== e || St !== t) && ((tr = null), (_i = at() + 500), _o(e, t));
    do
      try {
        dS();
        break;
      } catch (c) {
        o0(e, c);
      }
    while (1);
    hh(), (kl.current = a), (Oe = i), ct !== null ? (t = 0) : ((vt = null), (St = 0), (t = ft));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = Td(e)), i !== 0 && ((r = i), (t = of(e, i)))), t === 1))
      throw ((n = Ia), _o(e, 0), Er(e, r), Ht(e, at()), n);
    if (t === 6) Er(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !uS(i) &&
          ((t = El(e, r)), t === 2 && ((a = Td(e)), a !== 0 && ((r = a), (t = of(e, a)))), t === 1))
      )
        throw ((n = Ia), _o(e, 0), Er(e, r), Ht(e, at()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          so(e, Ft, tr);
          break;
        case 3:
          if ((Er(e, r), (r & 130023424) === r && ((t = Oh + 500 - at()), 10 < t))) {
            if (ul(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Nt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Bd(so.bind(null, e, Ft, tr), t);
            break;
          }
          so(e, Ft, tr);
          break;
        case 4:
          if ((Er(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - xn(r);
            (a = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~a);
          }
          if (
            ((r = i),
            (r = at() - r),
            (r =
              (120 > r
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
                : 1960 * lS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bd(so.bind(null, e, Ft, tr), r);
            break;
          }
          so(e, Ft, tr);
          break;
        case 5:
          so(e, Ft, tr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return Ht(e, at()), e.callbackNode === n ? r0.bind(null, e) : null;
}
function of(e, t) {
  var n = da;
  return (
    e.current.memoizedState.isDehydrated && (_o(e, t).flags |= 256),
    (e = El(e, t)),
    e !== 2 && ((t = Ft), (Ft = n), t !== null && af(t)),
    e
  );
}
function af(e) {
  Ft === null ? (Ft = e) : Ft.push.apply(Ft, e);
}
function uS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Cn(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Er(e, t) {
  for (
    t &= ~Eh, t &= ~lu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cg(e) {
  if (Oe & 6) throw Error(V(327));
  li();
  var t = ul(e, 0);
  if (!(t & 1)) return Ht(e, at()), null;
  var n = El(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Td(e);
    r !== 0 && ((t = r), (n = of(e, r)));
  }
  if (n === 1) throw ((n = Ia), _o(e, 0), Er(e, t), Ht(e, at()), n);
  if (n === 6) throw Error(V(345));
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), so(e, Ft, tr), Ht(e, at()), null
  );
}
function Lh(e, t) {
  var n = Oe;
  Oe |= 1;
  try {
    return e(t);
  } finally {
    (Oe = n), Oe === 0 && ((_i = at() + 500), ou && Xr());
  }
}
function Po(e) {
  Tr !== null && Tr.tag === 0 && !(Oe & 6) && li();
  var t = Oe;
  Oe |= 1;
  var n = sn.transition,
    r = Re;
  try {
    if (((sn.transition = null), (Re = 1), e)) return e();
  } finally {
    (Re = r), (sn.transition = n), (Oe = t), !(Oe & 6) && Xr();
  }
}
function Th() {
  (Wt = ti.current), We(ti);
}
function _o(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fx(n)), ct !== null))
    for (n = ct.return; n !== null; ) {
      var r = n;
      switch ((ch(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && pl();
          break;
        case 3:
          gi(), We(Ut), We(Tt), yh();
          break;
        case 5:
          _h(r);
          break;
        case 4:
          gi();
          break;
        case 13:
          We(Ge);
          break;
        case 19:
          We(Ge);
          break;
        case 10:
          ph(r.type._context);
          break;
        case 22:
        case 23:
          Th();
      }
      n = n.return;
    }
  if (
    ((vt = e),
    (ct = e = Fr(e.current, null)),
    (St = Wt = t),
    (ft = 0),
    (Ia = null),
    (Eh = lu = Co = 0),
    (Ft = da = null),
    po !== null)
  ) {
    for (t = 0; t < po.length; t++)
      if (((n = po[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var l = a.next;
          (a.next = i), (r.next = l);
        }
        n.pending = r;
      }
    po = null;
  }
  return e;
}
function o0(e, t) {
  do {
    var n = ct;
    try {
      if ((hh(), (Zs.current = Sl), xl)) {
        for (var r = Ye.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        xl = !1;
      }
      if (
        ((ko = 0),
        (gt = dt = Ye = null),
        (ua = !1),
        (Ta = 0),
        (Ph.current = null),
        n === null || n.return === null)
      ) {
        (ft = 1), (Ia = t), (ct = null);
        break;
      }
      e: {
        var a = e,
          l = n.return,
          c = n,
          d = t;
        if (
          ((t = St),
          (c.flags |= 32768),
          d !== null && typeof d == 'object' && typeof d.then == 'function')
        ) {
          var h = d,
            g = c,
            v = g.tag;
          if (!(g.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = g.alternate;
            m
              ? ((g.updateQueue = m.updateQueue),
                (g.memoizedState = m.memoizedState),
                (g.lanes = m.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var _ = Xm(l);
          if (_ !== null) {
            (_.flags &= -257), Ym(_, l, c, a, t), _.mode & 1 && Gm(a, h, t), (t = _), (d = h);
            var x = t.updateQueue;
            if (x === null) {
              var S = new Set();
              S.add(d), (t.updateQueue = S);
            } else x.add(d);
            break e;
          } else {
            if (!(t & 1)) {
              Gm(a, h, t), zh();
              break e;
            }
            d = Error(V(426));
          }
        } else if (Qe && c.mode & 1) {
          var O = Xm(l);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), Ym(O, l, c, a, t), dh(vi(d, c));
            break e;
          }
        }
        (a = d = vi(d, c)), ft !== 4 && (ft = 2), da === null ? (da = [a]) : da.push(a), (a = l);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var w = Uy(a, d, t);
              Hm(a, w);
              break e;
            case 1:
              c = d;
              var b = a.type,
                k = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof b.getDerivedStateFromError == 'function' ||
                  (k !== null &&
                    typeof k.componentDidCatch == 'function' &&
                    (Ar === null || !Ar.has(k))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var E = $y(a, c, t);
                Hm(a, E);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      s0(n);
    } catch (D) {
      (t = D), ct === n && n !== null && (ct = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function i0() {
  var e = kl.current;
  return (kl.current = Sl), e === null ? Sl : e;
}
function zh() {
  (ft === 0 || ft === 3 || ft === 2) && (ft = 4),
    vt === null || (!(Co & 268435455) && !(lu & 268435455)) || Er(vt, St);
}
function El(e, t) {
  var n = Oe;
  Oe |= 2;
  var r = i0();
  (vt !== e || St !== t) && ((tr = null), _o(e, t));
  do
    try {
      cS();
      break;
    } catch (i) {
      o0(e, i);
    }
  while (1);
  if ((hh(), (Oe = n), (kl.current = r), ct !== null)) throw Error(V(261));
  return (vt = null), (St = 0), ft;
}
function cS() {
  for (; ct !== null; ) a0(ct);
}
function dS() {
  for (; ct !== null && !Dw(); ) a0(ct);
}
function a0(e) {
  var t = u0(e.alternate, e, Wt);
  (e.memoizedProps = e.pendingProps), t === null ? s0(e) : (ct = t), (Ph.current = null);
}
function s0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = oS(n, t)), n !== null)) {
        (n.flags &= 32767), (ct = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ft = 6), (ct = null);
        return;
      }
    } else if (((n = rS(n, t, Wt)), n !== null)) {
      ct = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ct = t;
      return;
    }
    ct = t = e;
  } while (t !== null);
  ft === 0 && (ft = 5);
}
function so(e, t, n) {
  var r = Re,
    i = sn.transition;
  try {
    (sn.transition = null), (Re = 1), fS(e, t, n, r);
  } finally {
    (sn.transition = i), (Re = r);
  }
  return null;
}
function fS(e, t, n, r) {
  do li();
  while (Tr !== null);
  if (Oe & 6) throw Error(V(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(V(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (Vw(e, a),
    e === vt && ((ct = vt = null), (St = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ms ||
      ((Ms = !0),
      c0(ll, function () {
        return li(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = sn.transition), (sn.transition = null);
    var l = Re;
    Re = 1;
    var c = Oe;
    (Oe |= 4),
      (Ph.current = null),
      aS(e, n),
      t0(n, e),
      Rx(Dd),
      (cl = !!Nd),
      (Dd = Nd = null),
      (e.current = n),
      sS(n),
      Aw(),
      (Oe = c),
      (Re = l),
      (sn.transition = a);
  } else e.current = n;
  if (
    (Ms && ((Ms = !1), (Tr = e), (Pl = i)),
    (a = e.pendingLanes),
    a === 0 && (Ar = null),
    jw(n.stateNode),
    Ht(e, at()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Cl) throw ((Cl = !1), (e = nf), (nf = null), e);
  return (
    Pl & 1 && e.tag !== 0 && li(),
    (a = e.pendingLanes),
    a & 1 ? (e === rf ? fa++ : ((fa = 0), (rf = e))) : (fa = 0),
    Xr(),
    null
  );
}
function li() {
  if (Tr !== null) {
    var e = j_(Pl),
      t = sn.transition,
      n = Re;
    try {
      if (((sn.transition = null), (Re = 16 > e ? 16 : e), Tr === null)) var r = !1;
      else {
        if (((e = Tr), (Tr = null), (Pl = 0), Oe & 6)) throw Error(V(331));
        var i = Oe;
        for (Oe |= 4, ne = e.current; ne !== null; ) {
          var a = ne,
            l = a.child;
          if (ne.flags & 16) {
            var c = a.deletions;
            if (c !== null) {
              for (var d = 0; d < c.length; d++) {
                var h = c[d];
                for (ne = h; ne !== null; ) {
                  var g = ne;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ca(8, g, a);
                  }
                  var v = g.child;
                  if (v !== null) (v.return = g), (ne = v);
                  else
                    for (; ne !== null; ) {
                      g = ne;
                      var m = g.sibling,
                        _ = g.return;
                      if ((Yy(g), g === h)) {
                        ne = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = _), (ne = m);
                        break;
                      }
                      ne = _;
                    }
                }
              }
              var x = a.alternate;
              if (x !== null) {
                var S = x.child;
                if (S !== null) {
                  x.child = null;
                  do {
                    var O = S.sibling;
                    (S.sibling = null), (S = O);
                  } while (S !== null);
                }
              }
              ne = a;
            }
          }
          if (a.subtreeFlags & 2064 && l !== null) (l.return = a), (ne = l);
          else
            e: for (; ne !== null; ) {
              if (((a = ne), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ca(9, a, a.return);
                }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (ne = w);
                break e;
              }
              ne = a.return;
            }
        }
        var b = e.current;
        for (ne = b; ne !== null; ) {
          l = ne;
          var k = l.child;
          if (l.subtreeFlags & 2064 && k !== null) (k.return = l), (ne = k);
          else
            e: for (l = b; ne !== null; ) {
              if (((c = ne), c.flags & 2048))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      su(9, c);
                  }
                } catch (D) {
                  nt(c, c.return, D);
                }
              if (c === l) {
                ne = null;
                break e;
              }
              var E = c.sibling;
              if (E !== null) {
                (E.return = c.return), (ne = E);
                break e;
              }
              ne = c.return;
            }
        }
        if (((Oe = i), Xr(), $n && typeof $n.onPostCommitFiberRoot == 'function'))
          try {
            $n.onPostCommitFiberRoot(Jl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Re = n), (sn.transition = t);
    }
  }
  return !1;
}
function dg(e, t, n) {
  (t = vi(n, t)),
    (t = Uy(e, t, 1)),
    (e = Dr(e, t, 1)),
    (t = Nt()),
    e !== null && (Ha(e, 1, t), Ht(e, t));
}
function nt(e, t, n) {
  if (e.tag === 3) dg(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Ar === null || !Ar.has(r)))
        ) {
          (e = vi(n, e)),
            (e = $y(t, e, 1)),
            (t = Dr(t, e, 1)),
            (e = Nt()),
            t !== null && (Ha(t, 1, e), Ht(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Nt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    vt === e &&
      (St & n) === n &&
      (ft === 4 || (ft === 3 && (St & 130023424) === St && 500 > at() - Oh) ? _o(e, 0) : (Eh |= n)),
    Ht(e, t);
}
function l0(e, t) {
  t === 0 && (e.mode & 1 ? ((t = ks), (ks <<= 1), !(ks & 130023424) && (ks = 4194304)) : (t = 1));
  var n = Nt();
  (e = ur(e, t)), e !== null && (Ha(e, t, n), Ht(e, n));
}
function pS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), l0(e, n);
}
function mS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(V(314));
  }
  r !== null && r.delete(t), l0(e, n);
}
var u0;
u0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ut.current) jt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (jt = !1), nS(e, t, n);
      jt = !!(e.flags & 131072);
    }
  else (jt = !1), Qe && t.flags & 1048576 && fy(t, vl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qs(e, t), (e = t.pendingProps);
      var i = hi(t, Tt.current);
      si(t, n), (i = wh(null, t, r, e, i, n));
      var a = xh();
      return (
        (t.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $t(r) ? ((a = !0), ml(t)) : (a = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            gh(t),
            (i.updater = iu),
            (t.stateNode = i),
            (i._reactInternals = t),
            Zd(t, r, e, n),
            (t = Qd(null, t, r, !0, a, n)))
          : ((t.tag = 0), Qe && a && uh(t), Mt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = vS(r)),
          (e = _n(r, e)),
          i)
        ) {
          case 0:
            t = qd(null, t, r, e, n);
            break e;
          case 1:
            t = tg(null, t, r, e, n);
            break e;
          case 11:
            t = Jm(null, t, r, e, n);
            break e;
          case 14:
            t = eg(null, t, r, _n(r.type, e), n);
            break e;
        }
        throw Error(V(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _n(r, i)),
        qd(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _n(r, i)),
        tg(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Vy(t), e === null)) throw Error(V(387));
        (r = t.pendingProps), (a = t.memoizedState), (i = a.element), gy(e, t), bl(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = vi(Error(V(423)), t)), (t = ng(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = vi(Error(V(424)), t)), (t = ng(e, t, r, n, i));
            break e;
          } else
            for (
              Zt = Nr(t.stateNode.containerInfo.firstChild),
                Vt = t,
                Qe = !0,
                bn = null,
                n = by(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pi(), r === i)) {
            t = cr(e, t, n);
            break e;
          }
          Mt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wy(t),
        e === null && $d(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Ad(r, i) ? (l = null) : a !== null && Ad(r, a) && (t.flags |= 32),
        Zy(e, t),
        Mt(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && $d(t), null;
    case 13:
      return qy(e, t, n);
    case 4:
      return (
        vh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mi(t, null, r, n)) : Mt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _n(r, i)),
        Jm(e, t, r, i, n)
      );
    case 7:
      return Mt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Mt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Mt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (l = i.value),
          $e(_l, r._currentValue),
          (r._currentValue = l),
          a !== null)
        )
          if (Cn(a.value, l)) {
            if (a.children === i.children && !Ut.current) {
              t = cr(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var c = a.dependencies;
              if (c !== null) {
                l = a.child;
                for (var d = c.firstContext; d !== null; ) {
                  if (d.context === r) {
                    if (a.tag === 1) {
                      (d = ir(-1, n & -n)), (d.tag = 2);
                      var h = a.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var g = h.pending;
                        g === null ? (d.next = d) : ((d.next = g.next), (g.next = d)),
                          (h.pending = d);
                      }
                    }
                    (a.lanes |= n),
                      (d = a.alternate),
                      d !== null && (d.lanes |= n),
                      Hd(a.return, n, t),
                      (c.lanes |= n);
                    break;
                  }
                  d = d.next;
                }
              } else if (a.tag === 10) l = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((l = a.return), l === null)) throw Error(V(341));
                (l.lanes |= n),
                  (c = l.alternate),
                  c !== null && (c.lanes |= n),
                  Hd(l, n, t),
                  (l = a.sibling);
              } else l = a.child;
              if (l !== null) l.return = a;
              else
                for (l = a; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((a = l.sibling), a !== null)) {
                    (a.return = l.return), (l = a);
                    break;
                  }
                  l = l.return;
                }
              a = l;
            }
        Mt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        si(t, n),
        (i = ln(i)),
        (r = r(i)),
        (t.flags |= 1),
        Mt(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = _n(r, t.pendingProps)), (i = _n(r.type, i)), eg(e, t, r, i, n);
    case 15:
      return Hy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _n(r, i)),
        qs(e, t),
        (t.tag = 1),
        $t(r) ? ((e = !0), ml(t)) : (e = !1),
        si(t, n),
        _y(t, r, i),
        Zd(t, r, i, n),
        Qd(null, t, r, !0, e, n)
      );
    case 19:
      return Qy(e, t, n);
    case 22:
      return Wy(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function c0(e, t) {
  return D_(e, t);
}
function gS(e, t, n, r) {
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
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function an(e, t, n, r) {
  return new gS(e, t, n, r);
}
function Rh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vS(e) {
  if (typeof e == 'function') return Rh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xf)) return 11;
    if (e === Yf) return 14;
  }
  return 2;
}
function Fr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = an(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gs(e, t, n, r, i, a) {
  var l = 2;
  if (((r = e), typeof e == 'function')) Rh(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case Zo:
        return yo(n.children, i, a, t);
      case Gf:
        (l = 8), (i |= 8);
        break;
      case md:
        return (e = an(12, n, t, i | 2)), (e.elementType = md), (e.lanes = a), e;
      case gd:
        return (e = an(13, n, t, i)), (e.elementType = gd), (e.lanes = a), e;
      case vd:
        return (e = an(19, n, t, i)), (e.elementType = vd), (e.lanes = a), e;
      case y_:
        return uu(n, i, a, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case v_:
              l = 10;
              break e;
            case __:
              l = 9;
              break e;
            case Xf:
              l = 11;
              break e;
            case Yf:
              l = 14;
              break e;
            case Sr:
              (l = 16), (r = null);
              break e;
          }
        throw Error(V(130, e == null ? e : typeof e, ''));
    }
  return (t = an(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t;
}
function yo(e, t, n, r) {
  return (e = an(7, e, r, t)), (e.lanes = n), e;
}
function uu(e, t, n, r) {
  return (
    (e = an(22, e, r, t)), (e.elementType = y_), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  );
}
function Wc(e, t, n) {
  return (e = an(6, e, null, t)), (e.lanes = n), e;
}
function Zc(e, t, n) {
  return (
    (t = an(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _S(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Cc(0)),
    (this.expirationTimes = Cc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Cc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ih(e, t, n, r, i, a, l, c, d) {
  return (
    (e = new _S(e, t, n, c, d)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = an(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    gh(a),
    e
  );
}
function yS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wo,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function d0(e) {
  if (!e) return Wr;
  e = e._reactInternals;
  e: {
    if (To(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($t(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($t(n)) return cy(e, n, t);
  }
  return t;
}
function f0(e, t, n, r, i, a, l, c, d) {
  return (
    (e = Ih(n, r, !0, e, i, a, l, c, d)),
    (e.context = d0(null)),
    (n = e.current),
    (r = Nt()),
    (i = Br(n)),
    (a = ir(r, i)),
    (a.callback = t ?? null),
    Dr(n, a, i),
    (e.current.lanes = i),
    Ha(e, i, r),
    Ht(e, r),
    e
  );
}
function cu(e, t, n, r) {
  var i = t.current,
    a = Nt(),
    l = Br(i);
  return (
    (n = d0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ir(a, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dr(i, t, l)),
    e !== null && (Sn(e, i, l, a), Ws(e, i, l)),
    l
  );
}
function Ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Mh(e, t) {
  fg(e, t), (e = e.alternate) && fg(e, t);
}
function bS() {
  return null;
}
var h0 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nh(e) {
  this._internalRoot = e;
}
du.prototype.render = Nh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  cu(e, t, null, null);
};
du.prototype.unmount = Nh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Po(function () {
      cu(null, e, null, null);
    }),
      (t[lr] = null);
  }
};
function du(e) {
  this._internalRoot = e;
}
du.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = H_();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pr.length && t !== 0 && t < Pr[n].priority; n++);
    Pr.splice(n, 0, e), n === 0 && Z_(e);
  }
};
function Dh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function fu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function hg() {}
function wS(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var h = Ol(l);
        a.call(h);
      };
    }
    var l = f0(t, r, e, 0, null, !1, !1, '', hg);
    return (
      (e._reactRootContainer = l),
      (e[lr] = l.current),
      Ca(e.nodeType === 8 ? e.parentNode : e),
      Po(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var c = r;
    r = function () {
      var h = Ol(d);
      c.call(h);
    };
  }
  var d = Ih(e, 0, !1, null, null, !1, !1, '', hg);
  return (
    (e._reactRootContainer = d),
    (e[lr] = d.current),
    Ca(e.nodeType === 8 ? e.parentNode : e),
    Po(function () {
      cu(t, d, n, r);
    }),
    d
  );
}
function hu(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var l = a;
    if (typeof i == 'function') {
      var c = i;
      i = function () {
        var d = Ol(l);
        c.call(d);
      };
    }
    cu(t, l, e, i);
  } else l = wS(n, t, e, i, r);
  return Ol(l);
}
U_ = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ea(t.pendingLanes);
        n !== 0 && (th(t, n | 1), Ht(t, at()), !(Oe & 6) && ((_i = at() + 500), Xr()));
      }
      break;
    case 13:
      Po(function () {
        var r = ur(e, 1);
        if (r !== null) {
          var i = Nt();
          Sn(r, e, 1, i);
        }
      }),
        Mh(e, 1);
  }
};
nh = function (e) {
  if (e.tag === 13) {
    var t = ur(e, 134217728);
    if (t !== null) {
      var n = Nt();
      Sn(t, e, 134217728, n);
    }
    Mh(e, 134217728);
  }
};
$_ = function (e) {
  if (e.tag === 13) {
    var t = Br(e),
      n = ur(e, t);
    if (n !== null) {
      var r = Nt();
      Sn(n, e, t, r);
    }
    Mh(e, t);
  }
};
H_ = function () {
  return Re;
};
W_ = function (e, t) {
  var n = Re;
  try {
    return (Re = e), t();
  } finally {
    Re = n;
  }
};
Ed = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((bd(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ru(r);
            if (!i) throw Error(V(90));
            w_(r), bd(r, i);
          }
        }
      }
      break;
    case 'textarea':
      S_(e, n);
      break;
    case 'select':
      (t = n.value), t != null && ri(e, !!n.multiple, t, !1);
  }
};
T_ = Lh;
z_ = Po;
var xS = { usingClientEntryPoint: !1, Events: [Za, Ko, ru, O_, L_, Lh] },
  Zi = {
    findFiberByHostInstance: ho,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  SS = {
    bundleType: Zi.bundleType,
    version: Zi.version,
    rendererPackageName: Zi.rendererPackageName,
    rendererConfig: Zi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: fr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = M_(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zi.findFiberByHostInstance || bS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ns.isDisabled && Ns.supportsFiber)
    try {
      (Jl = Ns.inject(SS)), ($n = Ns);
    } catch {}
}
Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xS;
Kt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Dh(t)) throw Error(V(200));
  return yS(e, t, null, n);
};
Kt.createRoot = function (e, t) {
  if (!Dh(e)) throw Error(V(299));
  var n = !1,
    r = '',
    i = h0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ih(e, 1, !1, null, null, n, !1, r, i)),
    (e[lr] = t.current),
    Ca(e.nodeType === 8 ? e.parentNode : e),
    new Nh(t)
  );
};
Kt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(V(188))
      : ((e = Object.keys(e).join(',')), Error(V(268, e)));
  return (e = M_(t)), (e = e === null ? null : e.stateNode), e;
};
Kt.flushSync = function (e) {
  return Po(e);
};
Kt.hydrate = function (e, t, n) {
  if (!fu(t)) throw Error(V(200));
  return hu(null, e, t, !0, n);
};
Kt.hydrateRoot = function (e, t, n) {
  if (!Dh(e)) throw Error(V(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = '',
    l = h0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = f0(t, null, e, 1, n ?? null, i, !1, a, l)),
    (e[lr] = t.current),
    Ca(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new du(t);
};
Kt.render = function (e, t, n) {
  if (!fu(t)) throw Error(V(200));
  return hu(null, e, t, !1, n);
};
Kt.unmountComponentAtNode = function (e) {
  if (!fu(e)) throw Error(V(40));
  return e._reactRootContainer
    ? (Po(function () {
        hu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[lr] = null);
        });
      }),
      !0)
    : !1;
};
Kt.unstable_batchedUpdates = Lh;
Kt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!fu(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return hu(e, t, n, !1, r);
};
Kt.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Kt);
})(bw);
const kS = i_(ga);
var p0,
  pg = ga;
(p0 = pg.createRoot), pg.hydrateRoot;
var sf = {},
  CS = {
    get exports() {
      return sf;
    },
    set exports(e) {
      sf = e;
    },
  },
  m0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yi = N;
function PS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ES = typeof Object.is == 'function' ? Object.is : PS,
  OS = yi.useState,
  LS = yi.useEffect,
  TS = yi.useLayoutEffect,
  zS = yi.useDebugValue;
function RS(e, t) {
  var n = t(),
    r = OS({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    a = r[1];
  return (
    TS(
      function () {
        (i.value = n), (i.getSnapshot = t), Vc(i) && a({ inst: i });
      },
      [e, n, t],
    ),
    LS(
      function () {
        return (
          Vc(i) && a({ inst: i }),
          e(function () {
            Vc(i) && a({ inst: i });
          })
        );
      },
      [e],
    ),
    zS(n),
    n
  );
}
function Vc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ES(e, n);
  } catch {
    return !0;
  }
}
function IS(e, t) {
  return t();
}
var MS =
  typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'
    ? IS
    : RS;
m0.useSyncExternalStore = yi.useSyncExternalStore !== void 0 ? yi.useSyncExternalStore : MS;
(function (e) {
  e.exports = m0;
})(CS);
var lf = {},
  NS = {
    get exports() {
      return lf;
    },
    set exports(e) {
      lf = e;
    },
  },
  g0 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pu = N,
  DS = sf;
function AS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var BS = typeof Object.is == 'function' ? Object.is : AS,
  FS = DS.useSyncExternalStore,
  jS = pu.useRef,
  US = pu.useEffect,
  $S = pu.useMemo,
  HS = pu.useDebugValue;
g0.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var a = jS(null);
  if (a.current === null) {
    var l = { hasValue: !1, value: null };
    a.current = l;
  } else l = a.current;
  a = $S(
    function () {
      function d(_) {
        if (!h) {
          if (((h = !0), (g = _), (_ = r(_)), i !== void 0 && l.hasValue)) {
            var x = l.value;
            if (i(x, _)) return (v = x);
          }
          return (v = _);
        }
        if (((x = v), BS(g, _))) return x;
        var S = r(_);
        return i !== void 0 && i(x, S) ? x : ((g = _), (v = S));
      }
      var h = !1,
        g,
        v,
        m = n === void 0 ? null : n;
      return [
        function () {
          return d(t());
        },
        m === null
          ? void 0
          : function () {
              return d(m());
            },
      ];
    },
    [t, n, r, i],
  );
  var c = FS(e, a[0], a[1]);
  return (
    US(
      function () {
        (l.hasValue = !0), (l.value = c);
      },
      [c],
    ),
    HS(c),
    c
  );
};
(function (e) {
  e.exports = g0;
})(NS);
function WS(e) {
  e();
}
let v0 = WS;
const ZS = (e) => (v0 = e),
  VS = () => v0,
  Zr = N.createContext(null);
function _0() {
  return N.useContext(Zr);
}
const qS = () => {
  throw new Error('uSES not initialized!');
};
let y0 = qS;
const QS = (e) => {
    y0 = e;
  },
  KS = (e, t) => e === t;
function GS(e = Zr) {
  const t = e === Zr ? _0 : () => N.useContext(e);
  return function (r, i = KS) {
    const { store: a, subscription: l, getServerState: c } = t(),
      d = y0(l.addNestedSub, a.getState, c || a.getState, r, i);
    return N.useDebugValue(d), d;
  };
}
const XS = GS();
function Te() {
  return (
    (Te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Te.apply(this, arguments)
  );
}
var uf = {},
  YS = {
    get exports() {
      return uf;
    },
    set exports(e) {
      uf = e;
    },
  },
  Ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _t = typeof Symbol == 'function' && Symbol.for,
  Ah = _t ? Symbol.for('react.element') : 60103,
  Bh = _t ? Symbol.for('react.portal') : 60106,
  mu = _t ? Symbol.for('react.fragment') : 60107,
  gu = _t ? Symbol.for('react.strict_mode') : 60108,
  vu = _t ? Symbol.for('react.profiler') : 60114,
  _u = _t ? Symbol.for('react.provider') : 60109,
  yu = _t ? Symbol.for('react.context') : 60110,
  Fh = _t ? Symbol.for('react.async_mode') : 60111,
  bu = _t ? Symbol.for('react.concurrent_mode') : 60111,
  wu = _t ? Symbol.for('react.forward_ref') : 60112,
  xu = _t ? Symbol.for('react.suspense') : 60113,
  JS = _t ? Symbol.for('react.suspense_list') : 60120,
  Su = _t ? Symbol.for('react.memo') : 60115,
  ku = _t ? Symbol.for('react.lazy') : 60116,
  ek = _t ? Symbol.for('react.block') : 60121,
  tk = _t ? Symbol.for('react.fundamental') : 60117,
  nk = _t ? Symbol.for('react.responder') : 60118,
  rk = _t ? Symbol.for('react.scope') : 60119;
function Xt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ah:
        switch (((e = e.type), e)) {
          case Fh:
          case bu:
          case mu:
          case vu:
          case gu:
          case xu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case yu:
              case wu:
              case ku:
              case Su:
              case _u:
                return e;
              default:
                return t;
            }
        }
      case Bh:
        return t;
    }
  }
}
function b0(e) {
  return Xt(e) === bu;
}
Ie.AsyncMode = Fh;
Ie.ConcurrentMode = bu;
Ie.ContextConsumer = yu;
Ie.ContextProvider = _u;
Ie.Element = Ah;
Ie.ForwardRef = wu;
Ie.Fragment = mu;
Ie.Lazy = ku;
Ie.Memo = Su;
Ie.Portal = Bh;
Ie.Profiler = vu;
Ie.StrictMode = gu;
Ie.Suspense = xu;
Ie.isAsyncMode = function (e) {
  return b0(e) || Xt(e) === Fh;
};
Ie.isConcurrentMode = b0;
Ie.isContextConsumer = function (e) {
  return Xt(e) === yu;
};
Ie.isContextProvider = function (e) {
  return Xt(e) === _u;
};
Ie.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ah;
};
Ie.isForwardRef = function (e) {
  return Xt(e) === wu;
};
Ie.isFragment = function (e) {
  return Xt(e) === mu;
};
Ie.isLazy = function (e) {
  return Xt(e) === ku;
};
Ie.isMemo = function (e) {
  return Xt(e) === Su;
};
Ie.isPortal = function (e) {
  return Xt(e) === Bh;
};
Ie.isProfiler = function (e) {
  return Xt(e) === vu;
};
Ie.isStrictMode = function (e) {
  return Xt(e) === gu;
};
Ie.isSuspense = function (e) {
  return Xt(e) === xu;
};
Ie.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === mu ||
    e === bu ||
    e === vu ||
    e === gu ||
    e === xu ||
    e === JS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ku ||
        e.$$typeof === Su ||
        e.$$typeof === _u ||
        e.$$typeof === yu ||
        e.$$typeof === wu ||
        e.$$typeof === tk ||
        e.$$typeof === nk ||
        e.$$typeof === rk ||
        e.$$typeof === ek))
  );
};
Ie.typeOf = Xt;
(function (e) {
  e.exports = Ie;
})(YS);
var w0 = uf,
  ok = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  ik = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  x0 = {};
x0[w0.ForwardRef] = ok;
x0[w0.Memo] = ik;
var mg = {},
  ak = {
    get exports() {
      return mg;
    },
    set exports(e) {
      mg = e;
    },
  },
  Me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jh = Symbol.for('react.element'),
  Uh = Symbol.for('react.portal'),
  Cu = Symbol.for('react.fragment'),
  Pu = Symbol.for('react.strict_mode'),
  Eu = Symbol.for('react.profiler'),
  Ou = Symbol.for('react.provider'),
  Lu = Symbol.for('react.context'),
  sk = Symbol.for('react.server_context'),
  Tu = Symbol.for('react.forward_ref'),
  zu = Symbol.for('react.suspense'),
  Ru = Symbol.for('react.suspense_list'),
  Iu = Symbol.for('react.memo'),
  Mu = Symbol.for('react.lazy'),
  lk = Symbol.for('react.offscreen'),
  S0;
S0 = Symbol.for('react.module.reference');
function cn(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case jh:
        switch (((e = e.type), e)) {
          case Cu:
          case Eu:
          case Pu:
          case zu:
          case Ru:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case sk:
              case Lu:
              case Tu:
              case Mu:
              case Iu:
              case Ou:
                return e;
              default:
                return t;
            }
        }
      case Uh:
        return t;
    }
  }
}
Me.ContextConsumer = Lu;
Me.ContextProvider = Ou;
Me.Element = jh;
Me.ForwardRef = Tu;
Me.Fragment = Cu;
Me.Lazy = Mu;
Me.Memo = Iu;
Me.Portal = Uh;
Me.Profiler = Eu;
Me.StrictMode = Pu;
Me.Suspense = zu;
Me.SuspenseList = Ru;
Me.isAsyncMode = function () {
  return !1;
};
Me.isConcurrentMode = function () {
  return !1;
};
Me.isContextConsumer = function (e) {
  return cn(e) === Lu;
};
Me.isContextProvider = function (e) {
  return cn(e) === Ou;
};
Me.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === jh;
};
Me.isForwardRef = function (e) {
  return cn(e) === Tu;
};
Me.isFragment = function (e) {
  return cn(e) === Cu;
};
Me.isLazy = function (e) {
  return cn(e) === Mu;
};
Me.isMemo = function (e) {
  return cn(e) === Iu;
};
Me.isPortal = function (e) {
  return cn(e) === Uh;
};
Me.isProfiler = function (e) {
  return cn(e) === Eu;
};
Me.isStrictMode = function (e) {
  return cn(e) === Pu;
};
Me.isSuspense = function (e) {
  return cn(e) === zu;
};
Me.isSuspenseList = function (e) {
  return cn(e) === Ru;
};
Me.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Cu ||
    e === Eu ||
    e === Pu ||
    e === zu ||
    e === Ru ||
    e === lk ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Mu ||
        e.$$typeof === Iu ||
        e.$$typeof === Ou ||
        e.$$typeof === Lu ||
        e.$$typeof === Tu ||
        e.$$typeof === S0 ||
        e.getModuleId !== void 0))
  );
};
Me.typeOf = cn;
(function (e) {
  e.exports = Me;
})(ak);
function uk() {
  const e = VS();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        a = (n = { callback: r, next: null, prev: n });
      return (
        a.prev ? (a.prev.next = a) : (t = a),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            a.next ? (a.next.prev = a.prev) : (n = a.prev),
            a.prev ? (a.prev.next = a.next) : (t = a.next));
        }
      );
    },
  };
}
const gg = { notify() {}, get: () => [] };
function ck(e, t) {
  let n,
    r = gg;
  function i(v) {
    return d(), r.subscribe(v);
  }
  function a() {
    r.notify();
  }
  function l() {
    g.onStateChange && g.onStateChange();
  }
  function c() {
    return Boolean(n);
  }
  function d() {
    n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = uk()));
  }
  function h() {
    n && (n(), (n = void 0), r.clear(), (r = gg));
  }
  const g = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: h,
    getListeners: () => r,
  };
  return g;
}
const dk =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  fk = dk ? N.useLayoutEffect : N.useEffect;
function hk({ store: e, context: t, children: n, serverState: r }) {
  const i = N.useMemo(() => {
      const c = ck(e);
      return { store: e, subscription: c, getServerState: r ? () => r : void 0 };
    }, [e, r]),
    a = N.useMemo(() => e.getState(), [e]);
  fk(() => {
    const { subscription: c } = i;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      a !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [i, a]);
  const l = t || Zr;
  return Z.createElement(l.Provider, { value: i }, n);
}
function k0(e = Zr) {
  const t = e === Zr ? _0 : () => N.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const pk = k0();
function mk(e = Zr) {
  const t = e === Zr ? pk : k0(e);
  return function () {
    return t().dispatch;
  };
}
const gk = mk();
QS(lf.useSyncExternalStoreWithSelector);
ZS(ga.unstable_batchedUpdates);
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fe() {
  return (
    (Fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fe.apply(this, arguments)
  );
}
var ut;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ut || (ut = {}));
const vg = 'popstate';
function vk(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: a, search: l, hash: c } = r.location;
    return Ma(
      '',
      { pathname: a, search: l, hash: c },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default',
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : Vr(i);
  }
  return yk(t, n, null, e);
}
function be(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function _k() {
  return Math.random().toString(36).substr(2, 8);
}
function _g(e) {
  return { usr: e.state, key: e.key };
}
function Ma(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Fe(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? hr(t) : t,
      { state: n, key: (t && t.key) || r || _k() },
    )
  );
}
function Vr(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function hr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function Na(e) {
  let t =
      typeof window < 'u' && typeof window.location < 'u' && window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href,
    n = typeof e == 'string' ? e : Vr(e);
  return (
    be(t, 'No window.location.(origin|href) available to create URL for href: ' + n), new URL(n, t)
  );
}
function yk(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    l = i.history,
    c = ut.Pop,
    d = null;
  function h() {
    (c = ut.Pop), d && d({ action: c, location: m.location });
  }
  function g(_, x) {
    c = ut.Push;
    let S = Ma(m.location, _, x);
    n && n(S, _);
    let O = _g(S),
      w = m.createHref(S);
    try {
      l.pushState(O, '', w);
    } catch {
      i.location.assign(w);
    }
    a && d && d({ action: c, location: m.location });
  }
  function v(_, x) {
    c = ut.Replace;
    let S = Ma(m.location, _, x);
    n && n(S, _);
    let O = _g(S),
      w = m.createHref(S);
    l.replaceState(O, '', w), a && d && d({ action: c, location: m.location });
  }
  let m = {
    get action() {
      return c;
    },
    get location() {
      return e(i, l);
    },
    listen(_) {
      if (d) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(vg, h),
        (d = _),
        () => {
          i.removeEventListener(vg, h), (d = null);
        }
      );
    },
    createHref(_) {
      return t(i, _);
    },
    encodeLocation(_) {
      let x = Na(typeof _ == 'string' ? _ : Vr(_));
      return { pathname: x.pathname, search: x.search, hash: x.hash };
    },
    push: g,
    replace: v,
    go(_) {
      return l.go(_);
    },
  };
  return m;
}
var xt;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(xt || (xt = {}));
function bk(e) {
  return e.index === !0;
}
function C0(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, i) => {
      let a = [...t, i],
        l = typeof r.id == 'string' ? r.id : a.join('-');
      return (
        be(r.index !== !0 || !r.children, 'Cannot specify children on an index route'),
        be(
          !n.has(l),
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        n.add(l),
        bk(r)
          ? Fe({}, r, { id: l })
          : Fe({}, r, { id: l, children: r.children ? C0(r.children, a, n) : void 0 })
      );
    })
  );
}
function na(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? hr(t) : t,
    i = O0(r.pathname || '/', n);
  if (i == null) return null;
  let a = P0(e);
  wk(a);
  let l = null;
  for (let c = 0; l == null && c < a.length; ++c) l = Tk(a[c], Ik(i));
  return l;
}
function P0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (a, l, c) => {
    let d = {
      relativePath: c === void 0 ? a.path || '' : c,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: l,
      route: a,
    };
    d.relativePath.startsWith('/') &&
      (be(
        d.relativePath.startsWith(r),
        'Absolute route path "' +
          d.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (d.relativePath = d.relativePath.slice(r.length)));
    let h = bo([r, d.relativePath]),
      g = n.concat(d);
    a.children &&
      a.children.length > 0 &&
      (be(
        a.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + h + '".'),
      ),
      P0(a.children, t, g, h)),
      !(a.path == null && !a.index) && t.push({ path: h, score: Ok(h, a.index), routesMeta: g });
  };
  return (
    e.forEach((a, l) => {
      var c;
      if (a.path === '' || !((c = a.path) != null && c.includes('?'))) i(a, l);
      else for (let d of E0(a.path)) i(a, l, d);
    }),
    t
  );
}
function E0(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    a = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [a, ''] : [a];
  let l = E0(r.join('/')),
    c = [];
  return (
    c.push(...l.map((d) => (d === '' ? a : [a, d].join('/')))),
    i && c.push(...l),
    c.map((d) => (e.startsWith('/') && d === '' ? '/' : d))
  );
}
function wk(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Lk(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const xk = /^:\w+$/,
  Sk = 3,
  kk = 2,
  Ck = 1,
  Pk = 10,
  Ek = -2,
  yg = (e) => e === '*';
function Ok(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(yg) && (r += Ek),
    t && (r += kk),
    n.filter((i) => !yg(i)).reduce((i, a) => i + (xk.test(a) ? Sk : a === '' ? Ck : Pk), r)
  );
}
function Lk(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Tk(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    a = [];
  for (let l = 0; l < n.length; ++l) {
    let c = n[l],
      d = l === n.length - 1,
      h = i === '/' ? t : t.slice(i.length) || '/',
      g = zk({ path: c.relativePath, caseSensitive: c.caseSensitive, end: d }, h);
    if (!g) return null;
    Object.assign(r, g.params);
    let v = c.route;
    a.push({
      params: r,
      pathname: bo([i, g.pathname]),
      pathnameBase: Bk(bo([i, g.pathnameBase])),
      route: v,
    }),
      g.pathnameBase !== '/' && (i = bo([i, g.pathnameBase]));
  }
  return a;
}
function zk(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Rk(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    l = a.replace(/(.)\/+$/, '$1'),
    c = i.slice(1);
  return {
    params: r.reduce((h, g, v) => {
      if (g === '*') {
        let m = c[v] || '';
        l = a.slice(0, a.length - m.length).replace(/(.)\/+$/, '$1');
      }
      return (h[g] = Mk(c[v] || '', g)), h;
    }, {}),
    pathname: a,
    pathnameBase: l,
    pattern: e,
  };
}
function Rk(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    $h(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (l, c) => (r.push(c), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function Ik(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      $h(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function Mk(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      $h(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    );
  }
}
function O0(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function $h(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Nk(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? hr(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : Dk(n, t)) : t, search: Fk(r), hash: jk(i) };
}
function Dk(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function qc(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function L0(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Ak(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string'
    ? (i = hr(e))
    : ((i = Fe({}, e)),
      be(!i.pathname || !i.pathname.includes('?'), qc('?', 'pathname', 'search', i)),
      be(!i.pathname || !i.pathname.includes('#'), qc('#', 'pathname', 'hash', i)),
      be(!i.search || !i.search.includes('#'), qc('#', 'search', 'hash', i)));
  let a = e === '' || i.pathname === '',
    l = a ? '/' : i.pathname,
    c;
  if (r || l == null) c = n;
  else {
    let v = t.length - 1;
    if (l.startsWith('..')) {
      let m = l.split('/');
      for (; m[0] === '..'; ) m.shift(), (v -= 1);
      i.pathname = m.join('/');
    }
    c = v >= 0 ? t[v] : '/';
  }
  let d = Nk(i, c),
    h = l && l !== '/' && l.endsWith('/'),
    g = (a || l === '.') && n.endsWith('/');
  return !d.pathname.endsWith('/') && (h || g) && (d.pathname += '/'), d;
}
const bo = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Bk = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Fk = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  jk = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class bg extends Error {}
class Uk {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      be(t && typeof t == 'object' && !Array.isArray(t), 'defer() only accepts plain objects');
    let n;
    (this.abortPromise = new Promise((i, a) => (n = a))), (this.controller = new AbortController());
    let r = () => n(new bg('Deferred data aborted'));
    (this.unlistenAbortSignal = () => this.controller.signal.removeEventListener('abort', r)),
      this.controller.signal.addEventListener('abort', r),
      (this.data = Object.entries(t).reduce((i, a) => {
        let [l, c] = a;
        return Object.assign(i, { [l]: this.trackPromise(l, c) });
      }, {}));
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.pendingKeys.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (i) => this.onSettle(r, t, null, i),
      (i) => this.onSettle(r, t, i),
    );
    return r.catch(() => {}), Object.defineProperty(r, '_tracked', { get: () => !0 }), r;
  }
  onSettle(t, n, r, i) {
    if (this.controller.signal.aborted && r instanceof bg)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => r }),
        Promise.reject(r)
      );
    this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
    const a = this.subscriber;
    return r
      ? (Object.defineProperty(t, '_error', { get: () => r }), a && a(!1), Promise.reject(r))
      : (Object.defineProperty(t, '_data', { get: () => i }), a && a(!1), i);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(), this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener('abort', r),
        (n = await new Promise((i) => {
          this.subscribe((a) => {
            t.removeEventListener('abort', r), (a || this.done) && i(a);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      be(
        this.data !== null && this.done,
        'Can only unwrap data on initialized and settled deferreds',
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, i] = n;
        return Object.assign(t, { [r]: Hk(i) });
      }, {})
    );
  }
}
function $k(e) {
  return e instanceof Promise && e._tracked === !0;
}
function Hk(e) {
  if (!$k(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class Nu {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = i),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function T0(e) {
  return e instanceof Nu;
}
const z0 = ['post', 'put', 'patch', 'delete'],
  Wk = new Set(z0),
  Zk = ['get', ...z0],
  Vk = new Set(Zk),
  qk = new Set([301, 302, 303, 307, 308]),
  Qk = new Set([307, 308]),
  Qc = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Kk = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Gk =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Xk = !Gk;
function Yk(e) {
  be(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let t = C0(e.routes),
    n = null,
    r = new Set(),
    i = null,
    a = null,
    l = null,
    c = e.hydrationData != null,
    d = na(t, e.history.location, e.basename),
    h = null;
  if (d == null) {
    let A = uo(404, { pathname: e.history.location.pathname }),
      { matches: U, route: G } = Pg(t);
    (d = U), (h = { [G.id]: A });
  }
  let g = !d.some((A) => A.route.loader) || e.hydrationData != null,
    v,
    m = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: d,
      initialized: g,
      navigation: Qc,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
    },
    _ = ut.Pop,
    x = !1,
    S,
    O = !1,
    w = !1,
    b = [],
    k = [],
    E = new Map(),
    D = 0,
    F = -1,
    W = new Map(),
    Q = new Set(),
    te = new Map(),
    q = new Map();
  function ue() {
    return (
      (n = e.history.listen((A) => {
        let { action: U, location: G } = A;
        return I(U, G);
      })),
      m.initialized || I(ut.Pop, m.location),
      v
    );
  }
  function ge() {
    n && n(), r.clear(), S && S.abort(), m.fetchers.forEach((A, U) => et(U));
  }
  function Ze(A) {
    return r.add(A), () => r.delete(A);
  }
  function ce(A) {
    (m = Fe({}, m, A)), r.forEach((U) => U(m));
  }
  function Ne(A, U) {
    var G;
    let ie =
        m.actionData != null &&
        m.navigation.formMethod != null &&
        co(m.navigation.formMethod) &&
        m.navigation.state === 'loading' &&
        ((G = A.state) == null ? void 0 : G._isRedirect) !== !0,
      J;
    U.actionData
      ? Object.keys(U.actionData).length > 0
        ? (J = U.actionData)
        : (J = null)
      : ie
      ? (J = m.actionData)
      : (J = null);
    let he = U.loaderData
      ? Cg(m.loaderData, U.loaderData, U.matches || [], U.errors)
      : m.loaderData;
    ce(
      Fe({}, U, {
        actionData: J,
        loaderData: he,
        historyAction: _,
        location: A,
        initialized: !0,
        navigation: Qc,
        revalidation: 'idle',
        restoreScrollPosition: m.navigation.formData ? !1 : De(A, U.matches || m.matches),
        preventScrollReset: x,
      }),
    ),
      O ||
        _ === ut.Pop ||
        (_ === ut.Push
          ? e.history.push(A, A.state)
          : _ === ut.Replace && e.history.replace(A, A.state)),
      (_ = ut.Pop),
      (x = !1),
      (O = !1),
      (w = !1),
      (b = []),
      (k = []);
  }
  async function X(A, U) {
    if (typeof A == 'number') {
      e.history.go(A);
      return;
    }
    let { path: G, submission: ie, error: J } = wg(A, U),
      he = Ma(m.location, G, U && U.state);
    he = Fe({}, he, e.history.encodeLocation(he));
    let pe = U && U.replace != null ? U.replace : void 0,
      ye = ut.Push;
    pe === !0
      ? (ye = ut.Replace)
      : pe === !1 ||
        (ie != null &&
          co(ie.formMethod) &&
          ie.formAction === m.location.pathname + m.location.search &&
          (ye = ut.Replace));
    let le = U && 'preventScrollReset' in U ? U.preventScrollReset === !0 : void 0;
    return await I(ye, he, {
      submission: ie,
      pendingError: J,
      preventScrollReset: le,
      replace: U && U.replace,
    });
  }
  function de() {
    if ((oe(), ce({ revalidation: 'loading' }), m.navigation.state !== 'submitting')) {
      if (m.navigation.state === 'idle') {
        I(m.historyAction, m.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      I(_ || m.historyAction, m.navigation.location, { overrideNavigation: m.navigation });
    }
  }
  async function I(A, U, G) {
    S && S.abort(),
      (S = null),
      (_ = A),
      (O = (G && G.startUninterruptedRevalidation) === !0),
      Bt(m.location, m.matches),
      (x = (G && G.preventScrollReset) === !0);
    let ie = G && G.overrideNavigation,
      J = na(t, U, e.basename);
    if (!J) {
      let ze = uo(404, { pathname: U.pathname }),
        { matches: pt, route: mt } = Pg(t);
      ke(), Ne(U, { matches: pt, loaderData: {}, errors: { [mt.id]: ze } });
      return;
    }
    if (rC(m.location, U)) {
      Ne(U, { matches: J });
      return;
    }
    S = new AbortController();
    let he = qi(U, S.signal, G && G.submission),
      pe,
      ye;
    if (G && G.pendingError) ye = { [ni(J).route.id]: G.pendingError };
    else if (G && G.submission && co(G.submission.formMethod)) {
      let ze = await re(he, U, G.submission, J, { replace: G.replace });
      if (ze.shortCircuited) return;
      (pe = ze.pendingActionData),
        (ye = ze.pendingActionError),
        (ie = Fe({ state: 'loading', location: U }, G.submission)),
        (he = new Request(he.url, { signal: he.signal }));
    }
    let {
      shortCircuited: le,
      loaderData: je,
      errors: _e,
    } = await H(he, U, J, ie, G && G.submission, G && G.replace, pe, ye);
    le ||
      ((S = null),
      Ne(U, Fe({ matches: J }, pe ? { actionData: pe } : {}, { loaderData: je, errors: _e })));
  }
  async function re(A, U, G, ie, J) {
    oe();
    let he = Fe({ state: 'submitting', location: U }, G);
    ce({ navigation: he });
    let pe,
      ye = Tg(ie, U);
    if (!ye.route.action)
      pe = {
        type: xt.error,
        error: uo(405, { method: A.method, pathname: U.pathname, routeId: ye.route.id }),
      };
    else if (((pe = await Vi('action', A, ye, ie, v.basename)), A.signal.aborted))
      return { shortCircuited: !0 };
    if (ui(pe)) {
      let le;
      return (
        J && J.replace != null
          ? (le = J.replace)
          : (le = pe.location === m.location.pathname + m.location.search),
        await K(m, pe, { submission: G, replace: le }),
        { shortCircuited: !0 }
      );
    }
    if (ha(pe)) {
      let le = ni(ie, ye.route.id);
      return (
        (J && J.replace) !== !0 && (_ = ut.Push),
        { pendingActionData: {}, pendingActionError: { [le.route.id]: pe.error } }
      );
    }
    if (go(pe)) throw new Error('defer() is not supported in actions');
    return { pendingActionData: { [ye.route.id]: pe.data } };
  }
  async function H(A, U, G, ie, J, he, pe, ye) {
    let le = ie;
    le ||
      (le = Fe(
        {
          state: 'loading',
          location: U,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        J,
      ));
    let je =
        J ||
        (le.formMethod && le.formAction && le.formData && le.formEncType
          ? {
              formMethod: le.formMethod,
              formAction: le.formAction,
              formData: le.formData,
              formEncType: le.formEncType,
            }
          : void 0),
      [_e, ze] = xg(m, G, je, U, w, b, k, pe, ye, te);
    if (
      (ke(
        (tt) =>
          !(G && G.some((Rt) => Rt.route.id === tt)) || (_e && _e.some((Rt) => Rt.route.id === tt)),
      ),
      _e.length === 0 && ze.length === 0)
    )
      return (
        Ne(U, Fe({ matches: G, loaderData: {}, errors: ye || null }, pe ? { actionData: pe } : {})),
        { shortCircuited: !0 }
      );
    if (!O) {
      ze.forEach((Rt) => {
        let [Qn] = Rt,
          mr = m.fetchers.get(Qn),
          gr = {
            state: 'loading',
            data: mr && mr.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        m.fetchers.set(Qn, gr);
      });
      let tt = pe || m.actionData;
      ce(
        Fe(
          { navigation: le },
          tt ? (Object.keys(tt).length === 0 ? { actionData: null } : { actionData: tt }) : {},
          ze.length > 0 ? { fetchers: new Map(m.fetchers) } : {},
        ),
      );
    }
    (F = ++D),
      ze.forEach((tt) => {
        let [Rt] = tt;
        return E.set(Rt, S);
      });
    let { results: pt, loaderResults: mt, fetcherResults: Vn } = await Y(m.matches, G, _e, ze, A);
    if (A.signal.aborted) return { shortCircuited: !0 };
    ze.forEach((tt) => {
      let [Rt] = tt;
      return E.delete(Rt);
    });
    let qn = Eg(pt);
    if (qn) return await K(m, qn, { replace: he }), { shortCircuited: !0 };
    let { loaderData: Ln, errors: dn } = kg(m, G, _e, mt, ye, ze, Vn, q);
    q.forEach((tt, Rt) => {
      tt.subscribe((Qn) => {
        (Qn || tt.done) && q.delete(Rt);
      });
    }),
      Be();
    let Yr = ot(F);
    return Fe(
      { loaderData: Ln, errors: dn },
      Yr || ze.length > 0 ? { fetchers: new Map(m.fetchers) } : {},
    );
  }
  function P(A) {
    return m.fetchers.get(A) || Kk;
  }
  function R(A, U, G, ie) {
    if (Xk)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    E.has(A) && Ve(A);
    let J = na(t, G, e.basename);
    if (!J) {
      se(A, U, uo(404, { pathname: G }));
      return;
    }
    let { path: he, submission: pe } = wg(G, ie, !0),
      ye = Tg(J, he);
    if (pe && co(pe.formMethod)) {
      z(A, U, he, ye, J, pe);
      return;
    }
    te.set(A, [he, ye, J]), j(A, U, he, ye, J, pe);
  }
  async function z(A, U, G, ie, J, he) {
    if ((oe(), te.delete(A), !ie.route.action)) {
      let fn = uo(405, { method: he.formMethod, pathname: G, routeId: U });
      se(A, U, fn);
      return;
    }
    let pe = m.fetchers.get(A),
      ye = Fe({ state: 'submitting' }, he, {
        data: pe && pe.data,
        ' _hasFetcherDoneAnything ': !0,
      });
    m.fetchers.set(A, ye), ce({ fetchers: new Map(m.fetchers) });
    let le = new AbortController(),
      je = qi(G, le.signal, he);
    E.set(A, le);
    let _e = await Vi('action', je, ie, J, v.basename);
    if (je.signal.aborted) {
      E.get(A) === le && E.delete(A);
      return;
    }
    if (ui(_e)) {
      E.delete(A), Q.add(A);
      let fn = Fe({ state: 'loading' }, he, { data: void 0, ' _hasFetcherDoneAnything ': !0 });
      return (
        m.fetchers.set(A, fn),
        ce({ fetchers: new Map(m.fetchers) }),
        K(m, _e, { isFetchActionRedirect: !0 })
      );
    }
    if (ha(_e)) {
      se(A, U, _e.error);
      return;
    }
    go(_e) && be(!1, 'defer() is not supported in actions');
    let ze = m.navigation.location || m.location,
      pt = qi(ze, le.signal),
      mt = m.navigation.state !== 'idle' ? na(t, m.navigation.location, e.basename) : m.matches;
    be(mt, "Didn't find any matches after fetcher action");
    let Vn = ++D;
    W.set(A, Vn);
    let qn = Fe({ state: 'loading', data: _e.data }, he, { ' _hasFetcherDoneAnything ': !0 });
    m.fetchers.set(A, qn);
    let [Ln, dn] = xg(m, mt, he, ze, w, b, k, { [ie.route.id]: _e.data }, void 0, te);
    dn
      .filter((fn) => {
        let [Kn] = fn;
        return Kn !== A;
      })
      .forEach((fn) => {
        let [Kn] = fn,
          Ja = m.fetchers.get(Kn),
          Vu = {
            state: 'loading',
            data: Ja && Ja.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        m.fetchers.set(Kn, Vu), E.set(Kn, le);
      }),
      ce({ fetchers: new Map(m.fetchers) });
    let { results: Yr, loaderResults: tt, fetcherResults: Rt } = await Y(m.matches, mt, Ln, dn, pt);
    if (le.signal.aborted) return;
    W.delete(A),
      E.delete(A),
      dn.forEach((fn) => {
        let [Kn] = fn;
        return E.delete(Kn);
      });
    let Qn = Eg(Yr);
    if (Qn) return K(m, Qn);
    let { loaderData: mr, errors: gr } = kg(m, m.matches, Ln, tt, void 0, dn, Rt, q),
      Ya = {
        state: 'idle',
        data: _e.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
    m.fetchers.set(A, Ya);
    let Zu = ot(Vn);
    m.navigation.state === 'loading' && Vn > F
      ? (be(_, 'Expected pending action'),
        S && S.abort(),
        Ne(m.navigation.location, {
          matches: mt,
          loaderData: mr,
          errors: gr,
          fetchers: new Map(m.fetchers),
        }))
      : (ce(
          Fe(
            { errors: gr, loaderData: Cg(m.loaderData, mr, mt, gr) },
            Zu ? { fetchers: new Map(m.fetchers) } : {},
          ),
        ),
        (w = !1));
  }
  async function j(A, U, G, ie, J, he) {
    let pe = m.fetchers.get(A),
      ye = Fe(
        {
          state: 'loading',
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        he,
        { data: pe && pe.data, ' _hasFetcherDoneAnything ': !0 },
      );
    m.fetchers.set(A, ye), ce({ fetchers: new Map(m.fetchers) });
    let le = new AbortController(),
      je = qi(G, le.signal);
    E.set(A, le);
    let _e = await Vi('loader', je, ie, J, v.basename);
    if (
      (go(_e) && (_e = (await N0(_e, je.signal, !0)) || _e),
      E.get(A) === le && E.delete(A),
      je.signal.aborted)
    )
      return;
    if (ui(_e)) {
      await K(m, _e);
      return;
    }
    if (ha(_e)) {
      let pt = ni(m.matches, U);
      m.fetchers.delete(A),
        ce({ fetchers: new Map(m.fetchers), errors: { [pt.route.id]: _e.error } });
      return;
    }
    be(!go(_e), 'Unhandled fetcher deferred data');
    let ze = {
      state: 'idle',
      data: _e.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      ' _hasFetcherDoneAnything ': !0,
    };
    m.fetchers.set(A, ze), ce({ fetchers: new Map(m.fetchers) });
  }
  async function K(A, U, G) {
    var ie;
    let { submission: J, replace: he, isFetchActionRedirect: pe } = G === void 0 ? {} : G;
    U.revalidate && (w = !0);
    let ye = Ma(
      A.location,
      U.location,
      Fe({ _isRedirect: !0 }, pe ? { _isFetchActionRedirect: !0 } : {}),
    );
    if (
      (be(ye, 'Expected a location on the redirect navigation'),
      typeof ((ie = window) == null ? void 0 : ie.location) < 'u')
    ) {
      let mt = Na(U.location).origin;
      if (window.location.origin !== mt) {
        he ? window.location.replace(U.location) : window.location.assign(U.location);
        return;
      }
    }
    S = null;
    let le = he === !0 ? ut.Replace : ut.Push,
      { formMethod: je, formAction: _e, formEncType: ze, formData: pt } = A.navigation;
    !J &&
      je &&
      _e &&
      pt &&
      ze &&
      (J = { formMethod: je, formAction: _e, formEncType: ze, formData: pt }),
      Qk.has(U.status) && J && co(J.formMethod)
        ? await I(le, ye, { submission: Fe({}, J, { formAction: U.location }) })
        : await I(le, ye, {
            overrideNavigation: {
              state: 'loading',
              location: ye,
              formMethod: J ? J.formMethod : void 0,
              formAction: J ? J.formAction : void 0,
              formEncType: J ? J.formEncType : void 0,
              formData: J ? J.formData : void 0,
            },
          });
  }
  async function Y(A, U, G, ie, J) {
    let he = await Promise.all([
        ...G.map((le) => Vi('loader', J, le, U, v.basename)),
        ...ie.map((le) => {
          let [, je, _e, ze] = le;
          return Vi('loader', qi(je, J.signal), _e, ze, v.basename);
        }),
      ]),
      pe = he.slice(0, G.length),
      ye = he.slice(G.length);
    return (
      await Promise.all([
        Og(A, G, pe, J.signal, !1, m.loaderData),
        Og(
          A,
          ie.map((le) => {
            let [, , je] = le;
            return je;
          }),
          ye,
          J.signal,
          !0,
        ),
      ]),
      { results: he, loaderResults: pe, fetcherResults: ye }
    );
  }
  function oe() {
    (w = !0),
      b.push(...ke()),
      te.forEach((A, U) => {
        E.has(U) && (k.push(U), Ve(U));
      });
  }
  function se(A, U, G) {
    let ie = ni(m.matches, U);
    et(A), ce({ errors: { [ie.route.id]: G }, fetchers: new Map(m.fetchers) });
  }
  function et(A) {
    E.has(A) && Ve(A), te.delete(A), W.delete(A), Q.delete(A), m.fetchers.delete(A);
  }
  function Ve(A) {
    let U = E.get(A);
    be(U, 'Expected fetch controller: ' + A), U.abort(), E.delete(A);
  }
  function Ae(A) {
    for (let U of A) {
      let ie = {
        state: 'idle',
        data: P(U).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
      m.fetchers.set(U, ie);
    }
  }
  function Be() {
    let A = [];
    for (let U of Q) {
      let G = m.fetchers.get(U);
      be(G, 'Expected fetcher: ' + U), G.state === 'loading' && (Q.delete(U), A.push(U));
    }
    Ae(A);
  }
  function ot(A) {
    let U = [];
    for (let [G, ie] of W)
      if (ie < A) {
        let J = m.fetchers.get(G);
        be(J, 'Expected fetcher: ' + G), J.state === 'loading' && (Ve(G), W.delete(G), U.push(G));
      }
    return Ae(U), U.length > 0;
  }
  function ke(A) {
    let U = [];
    return (
      q.forEach((G, ie) => {
        (!A || A(ie)) && (G.cancel(), U.push(ie), q.delete(ie));
      }),
      U
    );
  }
  function Yt(A, U, G) {
    if (((i = A), (l = U), (a = G || ((ie) => ie.key)), !c && m.navigation === Qc)) {
      c = !0;
      let ie = De(m.location, m.matches);
      ie != null && ce({ restoreScrollPosition: ie });
    }
    return () => {
      (i = null), (l = null), (a = null);
    };
  }
  function Bt(A, U) {
    if (i && a && l) {
      let G = U.map((J) => Lg(J, m.loaderData)),
        ie = a(A, G) || A.key;
      i[ie] = l();
    }
  }
  function De(A, U) {
    if (i && a && l) {
      let G = U.map((he) => Lg(he, m.loaderData)),
        ie = a(A, G) || A.key,
        J = i[ie];
      if (typeof J == 'number') return J;
    }
    return null;
  }
  return (
    (v = {
      get basename() {
        return e.basename;
      },
      get state() {
        return m;
      },
      get routes() {
        return t;
      },
      initialize: ue,
      subscribe: Ze,
      enableScrollRestoration: Yt,
      navigate: X,
      fetch: R,
      revalidate: de,
      createHref: (A) => e.history.createHref(A),
      encodeLocation: (A) => e.history.encodeLocation(A),
      getFetcher: P,
      deleteFetcher: et,
      dispose: ge,
      _internalFetchControllers: E,
      _internalActiveDeferreds: q,
    }),
    v
  );
}
function Jk(e) {
  return e != null && 'formData' in e;
}
function wg(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == 'string' ? e : Vr(e);
  if (!t || !Jk(t)) return { path: r };
  if (t.formMethod && !iC(t.formMethod))
    return { path: r, error: uo(405, { method: t.formMethod }) };
  let i;
  if (
    t.formData &&
    ((i = {
      formMethod: t.formMethod || 'get',
      formAction: M0(r),
      formEncType: (t && t.formEncType) || 'application/x-www-form-urlencoded',
      formData: t.formData,
    }),
    co(i.formMethod))
  )
    return { path: r, submission: i };
  let a = hr(r);
  try {
    let l = I0(t.formData);
    n && a.search && D0(a.search) && l.append('index', ''), (a.search = '?' + l);
  } catch {
    return { path: r, error: uo(400) };
  }
  return { path: Vr(a), submission: i };
}
function eC(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function xg(e, t, n, r, i, a, l, c, d, h) {
  let g = d ? Object.values(d)[0] : c ? Object.values(c)[0] : void 0,
    v = d ? Object.keys(d)[0] : void 0,
    _ = eC(t, v).filter(
      (S, O) =>
        S.route.loader != null &&
        (tC(e.loaderData, e.matches[O], S) ||
          a.some((w) => w === S.route.id) ||
          Sg(e.location, e.matches[O], n, r, S, i, g)),
    ),
    x = [];
  return (
    h &&
      h.forEach((S, O) => {
        let [w, b, k] = S;
        l.includes(O) ? x.push([O, w, b, k]) : i && Sg(w, b, n, w, b, i, g) && x.push([O, w, b, k]);
      }),
    [_, x]
  );
}
function tC(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function R0(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n && n.endsWith('*') && e.params['*'] !== t.params['*']);
}
function Sg(e, t, n, r, i, a, l) {
  let c = Na(e),
    d = t.params,
    h = Na(r),
    g = i.params,
    v = R0(t, i) || c.toString() === h.toString() || c.search !== h.search || a;
  if (i.route.shouldRevalidate) {
    let m = i.route.shouldRevalidate(
      Fe({ currentUrl: c, currentParams: d, nextUrl: h, nextParams: g }, n, {
        actionResult: l,
        defaultShouldRevalidate: v,
      }),
    );
    if (typeof m == 'boolean') return m;
  }
  return v;
}
async function Vi(e, t, n, r, i, a, l, c) {
  i === void 0 && (i = '/'), a === void 0 && (a = !1), l === void 0 && (l = !1);
  let d,
    h,
    g,
    v = new Promise((_, x) => (g = x)),
    m = () => g();
  t.signal.addEventListener('abort', m);
  try {
    let _ = n.route[e];
    be(_, 'Could not find the ' + e + ' to run on the "' + n.route.id + '" route'),
      (h = await Promise.race([_({ request: t, params: n.params, context: c }), v])),
      be(
        h !== void 0,
        'You defined ' +
          (e === 'action' ? 'an action' : 'a loader') +
          ' for route ' +
          ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
          'function. Please return a value or `null`.',
      );
  } catch (_) {
    (d = xt.error), (h = _);
  } finally {
    t.signal.removeEventListener('abort', m);
  }
  if (oC(h)) {
    let _ = h.status;
    if (qk.has(_)) {
      let O = h.headers.get('Location');
      if (
        (be(O, 'Redirects returned/thrown from loaders/actions must have a Location header'),
        !(/^[a-z+]+:\/\//i.test(O) || O.startsWith('//')))
      ) {
        let b = r.slice(0, r.indexOf(n) + 1),
          k = L0(b).map((D) => D.pathnameBase),
          E = Ak(O, k, new URL(t.url).pathname);
        if ((be(Vr(E), 'Unable to resolve redirect location: ' + O), i)) {
          let D = E.pathname;
          E.pathname = D === '/' ? i : bo([i, D]);
        }
        O = Vr(E);
      }
      if (a) throw (h.headers.set('Location', O), h);
      return {
        type: xt.redirect,
        status: _,
        location: O,
        revalidate: h.headers.get('X-Remix-Revalidate') !== null,
      };
    }
    if (l) throw { type: d || xt.data, response: h };
    let x,
      S = h.headers.get('Content-Type');
    return (
      S && /\bapplication\/json\b/.test(S) ? (x = await h.json()) : (x = await h.text()),
      d === xt.error
        ? { type: d, error: new Nu(_, h.statusText, x), headers: h.headers }
        : { type: xt.data, data: x, statusCode: h.status, headers: h.headers }
    );
  }
  return d === xt.error
    ? { type: d, error: h }
    : h instanceof Uk
    ? { type: xt.deferred, deferredData: h }
    : { type: xt.data, data: h };
}
function qi(e, t, n) {
  let r = Na(M0(e)).toString(),
    i = { signal: t };
  if (n && co(n.formMethod)) {
    let { formMethod: a, formEncType: l, formData: c } = n;
    (i.method = a.toUpperCase()), (i.body = l === 'application/x-www-form-urlencoded' ? I0(c) : c);
  }
  return new Request(r, i);
}
function I0(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    be(
      typeof r == 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.',
    ),
      t.append(n, r);
  return t;
}
function nC(e, t, n, r, i) {
  let a = {},
    l = null,
    c,
    d = !1,
    h = {};
  return (
    n.forEach((g, v) => {
      let m = t[v].route.id;
      if ((be(!ui(g), 'Cannot handle redirect results in processLoaderData'), ha(g))) {
        let _ = ni(e, m),
          x = g.error;
        r && ((x = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[_.route.id] == null && (l[_.route.id] = x),
          (a[m] = void 0),
          d || ((d = !0), (c = T0(g.error) ? g.error.status : 500)),
          g.headers && (h[m] = g.headers);
      } else
        go(g)
          ? (i && i.set(m, g.deferredData), (a[m] = g.deferredData.data))
          : ((a[m] = g.data),
            g.statusCode != null && g.statusCode !== 200 && !d && (c = g.statusCode),
            g.headers && (h[m] = g.headers));
    }),
    r && ((l = r), (a[Object.keys(r)[0]] = void 0)),
    { loaderData: a, errors: l, statusCode: c || 200, loaderHeaders: h }
  );
}
function kg(e, t, n, r, i, a, l, c) {
  let { loaderData: d, errors: h } = nC(t, n, r, i, c);
  for (let g = 0; g < a.length; g++) {
    let [v, , m] = a[g];
    be(l !== void 0 && l[g] !== void 0, 'Did not find corresponding fetcher result');
    let _ = l[g];
    if (ha(_)) {
      let x = ni(e.matches, m.route.id);
      (h && h[x.route.id]) || (h = Fe({}, h, { [x.route.id]: _.error })), e.fetchers.delete(v);
    } else {
      if (ui(_)) throw new Error('Unhandled fetcher revalidation redirect');
      if (go(_)) throw new Error('Unhandled fetcher deferred data');
      {
        let x = {
          state: 'idle',
          data: _.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          ' _hasFetcherDoneAnything ': !0,
        };
        e.fetchers.set(v, x);
      }
    }
  }
  return { loaderData: d, errors: h };
}
function Cg(e, t, n, r) {
  let i = Fe({}, t);
  for (let a of n) {
    let l = a.route.id;
    if (
      (t.hasOwnProperty(l) ? t[l] !== void 0 && (i[l] = t[l]) : e[l] !== void 0 && (i[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return i;
}
function ni(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Pg(e) {
  let t = e.find((n) => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function uo(e, t) {
  let { pathname: n, routeId: r, method: i } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    l = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((a = 'Bad Request'),
        i && n && r
          ? (l =
              'You made a ' +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : (l = 'Cannot submit binary form data using GET'))
      : e === 403
      ? ((a = 'Forbidden'), (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = 'Not Found'), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = 'Method Not Allowed'),
        i && n && r
          ? (l =
              'You made a ' +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Nu(e || 500, a, new Error(l), !0)
  );
}
function Eg(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (ui(n)) return n;
  }
}
function M0(e) {
  let t = typeof e == 'string' ? hr(e) : e;
  return Vr(Fe({}, t, { hash: '' }));
}
function rC(e, t) {
  return e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash;
}
function go(e) {
  return e.type === xt.deferred;
}
function ha(e) {
  return e.type === xt.error;
}
function ui(e) {
  return (e && e.type) === xt.redirect;
}
function oC(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function iC(e) {
  return Vk.has(e);
}
function co(e) {
  return Wk.has(e);
}
async function Og(e, t, n, r, i, a) {
  for (let l = 0; l < n.length; l++) {
    let c = n[l],
      d = t[l],
      h = e.find((v) => v.route.id === d.route.id),
      g = h != null && !R0(h, d) && (a && a[d.route.id]) !== void 0;
    go(c) &&
      (i || g) &&
      (await N0(c, r, i).then((v) => {
        v && (n[l] = v || n[l]);
      }));
  }
}
async function N0(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: xt.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: xt.error, error: i };
      }
    return { type: xt.data, data: e.deferredData.data };
  }
}
function D0(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Lg(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Tg(e, t) {
  let n = typeof t == 'string' ? hr(t).search : t.search;
  if (e[e.length - 1].route.index && D0(n || '')) return e[e.length - 1];
  let r = L0(e);
  return r[r.length - 1];
}
/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ll() {
  return (
    (Ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ll.apply(this, arguments)
  );
}
function aC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const sC = typeof Object.is == 'function' ? Object.is : aC,
  { useState: lC, useEffect: uC, useLayoutEffect: cC, useDebugValue: dC } = fd;
function fC(e, t, n) {
  const r = t(),
    [{ inst: i }, a] = lC({ inst: { value: r, getSnapshot: t } });
  return (
    cC(() => {
      (i.value = r), (i.getSnapshot = t), Kc(i) && a({ inst: i });
    }, [e, r, t]),
    uC(
      () => (
        Kc(i) && a({ inst: i }),
        e(() => {
          Kc(i) && a({ inst: i });
        })
      ),
      [e],
    ),
    dC(r),
    r
  );
}
function Kc(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !sC(n, r);
  } catch {
    return !0;
  }
}
function hC(e, t, n) {
  return t();
}
const pC =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  mC = !pC,
  gC = mC ? hC : fC,
  vC = 'useSyncExternalStore' in fd ? ((e) => e.useSyncExternalStore)(fd) : gC,
  Hh = N.createContext(null),
  Wh = N.createContext(null),
  A0 = N.createContext(null),
  Du = N.createContext(null),
  Au = N.createContext({ outlet: null, matches: [] }),
  B0 = N.createContext(null);
function Zh() {
  return N.useContext(Du) != null;
}
function _C() {
  return Zh() || be(!1), N.useContext(Du).location;
}
function yC(e, t) {
  Zh() || be(!1);
  let { navigator: n } = N.useContext(A0),
    r = N.useContext(Wh),
    { matches: i } = N.useContext(Au),
    a = i[i.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : '/';
  a && a.route;
  let d = _C(),
    h;
  if (t) {
    var g;
    let S = typeof t == 'string' ? hr(t) : t;
    c === '/' || ((g = S.pathname) != null && g.startsWith(c)) || be(!1), (h = S);
  } else h = d;
  let v = h.pathname || '/',
    m = c === '/' ? v : v.slice(c.length) || '/',
    _ = na(e, { pathname: m }),
    x = SC(
      _ &&
        _.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: bo([
              c,
              n.encodeLocation ? n.encodeLocation(S.pathname).pathname : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === '/'
                ? c
                : bo([
                    c,
                    n.encodeLocation ? n.encodeLocation(S.pathnameBase).pathname : S.pathnameBase,
                  ]),
          }),
        ),
      i,
      r || void 0,
    );
  return t && x
    ? N.createElement(
        Du.Provider,
        {
          value: {
            location: Ll({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, h),
            navigationType: ut.Pop,
          },
        },
        x,
      )
    : x;
}
function bC() {
  let e = EC(),
    t = T0(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    i = { padding: '0.5rem', backgroundColor: r },
    a = { padding: '2px 4px', backgroundColor: r };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement('h2', null, 'Unhandled Thrown Error!'),
    N.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? N.createElement('pre', { style: i }, n) : null,
    N.createElement('p', null, '💿 Hey developer 👋'),
    N.createElement(
      'p',
      null,
      'You can provide a way better UX than this when your app throws errors by providing your own ',
      N.createElement('code', { style: a }, 'errorElement'),
      ' props on ',
      N.createElement('code', { style: a }, '<Route>'),
    ),
  );
}
class wC extends N.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error
      ? N.createElement(
          Au.Provider,
          { value: this.props.routeContext },
          N.createElement(B0.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children;
  }
}
function xC(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = N.useContext(Hh);
  return (
    i &&
      i.static &&
      i.staticContext &&
      n.route.errorElement &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Au.Provider, { value: t }, r)
  );
}
function SC(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    i = n?.errors;
  if (i != null) {
    let a = r.findIndex((l) => l.route.id && i?.[l.route.id]);
    a >= 0 || be(!1), (r = r.slice(0, Math.min(r.length, a + 1)));
  }
  return r.reduceRight((a, l, c) => {
    let d = l.route.id ? i?.[l.route.id] : null,
      h = n ? l.route.errorElement || N.createElement(bC, null) : null,
      g = t.concat(r.slice(0, c + 1)),
      v = () =>
        N.createElement(
          xC,
          { match: l, routeContext: { outlet: a, matches: g } },
          d ? h : l.route.element !== void 0 ? l.route.element : a,
        );
    return n && (l.route.errorElement || c === 0)
      ? N.createElement(wC, {
          location: n.location,
          component: h,
          error: d,
          children: v(),
          routeContext: { outlet: null, matches: g },
        })
      : v();
  }, null);
}
var zg;
(function (e) {
  e.UseRevalidator = 'useRevalidator';
})(zg || (zg = {}));
var Tl;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(Tl || (Tl = {}));
function kC(e) {
  let t = N.useContext(Wh);
  return t || be(!1), t;
}
function CC(e) {
  let t = N.useContext(Au);
  return t || be(!1), t;
}
function PC(e) {
  let t = CC(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || be(!1), n.route.id;
}
function EC() {
  var e;
  let t = N.useContext(B0),
    n = kC(Tl.UseRouteError),
    r = PC(Tl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function OC(e) {
  let { fallbackElement: t, router: n } = e,
    r = vC(
      n.subscribe,
      () => n.state,
      () => n.state,
    ),
    i = N.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (l) => n.navigate(l),
        push: (l, c, d) => n.navigate(l, { state: c, preventScrollReset: d?.preventScrollReset }),
        replace: (l, c, d) =>
          n.navigate(l, { replace: !0, state: c, preventScrollReset: d?.preventScrollReset }),
      }),
      [n],
    ),
    a = n.basename || '/';
  return N.createElement(
    N.Fragment,
    null,
    N.createElement(
      Hh.Provider,
      { value: { router: n, navigator: i, static: !1, basename: a } },
      N.createElement(
        Wh.Provider,
        { value: r },
        N.createElement(
          TC,
          {
            basename: n.basename,
            location: n.state.location,
            navigationType: n.state.historyAction,
            navigator: i,
          },
          n.state.initialized ? N.createElement(zC, null) : t,
        ),
      ),
    ),
    null,
  );
}
function LC(e) {
  be(!1);
}
function TC(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = ut.Pop,
    navigator: a,
    static: l = !1,
  } = e;
  Zh() && be(!1);
  let c = t.replace(/^\/*/, '/'),
    d = N.useMemo(() => ({ basename: c, navigator: a, static: l }), [c, a, l]);
  typeof r == 'string' && (r = hr(r));
  let { pathname: h = '/', search: g = '', hash: v = '', state: m = null, key: _ = 'default' } = r,
    x = N.useMemo(() => {
      let S = O0(h, c);
      return S == null ? null : { pathname: S, search: g, hash: v, state: m, key: _ };
    }, [c, h, g, v, m, _]);
  return x == null
    ? null
    : N.createElement(
        A0.Provider,
        { value: d },
        N.createElement(Du.Provider, { children: n, value: { location: x, navigationType: i } }),
      );
}
function zC(e) {
  let { children: t, location: n } = e,
    r = N.useContext(Hh),
    i = r && !t ? r.router.routes : cf(t);
  return yC(i, n);
}
var Rg;
(function (e) {
  (e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error');
})(Rg || (Rg = {}));
new Promise(() => {});
function cf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, i) => {
      if (!N.isValidElement(r)) return;
      if (r.type === N.Fragment) {
        n.push.apply(n, cf(r.props.children, t));
        return;
      }
      r.type !== LC && be(!1), !r.props.index || !r.props.children || be(!1);
      let a = [...t, i],
        l = {
          id: r.props.id || a.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (l.children = cf(r.props.children, a)), n.push(l);
    }),
    n
  );
}
function F0(e) {
  return e.map((t) => {
    let n = Ll({}, t);
    return (
      n.hasErrorBoundary == null && (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = F0(n.children)),
      n
    );
  });
}
/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function df() {
  return (
    (df = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    df.apply(this, arguments)
  );
}
function RC(e, t) {
  return Yk({
    basename: t?.basename,
    history: vk({ window: t?.window }),
    hydrationData: t?.hydrationData || IC(),
    routes: F0(e),
  }).initialize();
}
function IC() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = df({}, t, { errors: MC(t.errors) })), t;
}
function MC(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === 'RouteErrorResponse')
      n[r] = new Nu(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === 'Error') {
      let a = new Error(i.message);
      (a.stack = ''), (n[r] = a);
    } else n[r] = i;
  return n;
}
var Ig;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(Ig || (Ig = {}));
var Mg;
(function (e) {
  (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(Mg || (Mg = {}));
function kn(e) {
  return (
    (kn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    kn(e)
  );
}
function NC(e, t) {
  if (kn(e) !== 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (kn(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function j0(e) {
  var t = NC(e, 'string');
  return kn(t) === 'symbol' ? t : String(t);
}
function Pn(e, t, n) {
  return (
    (t = j0(t)),
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function DC() {
  if (console && console.warn) {
    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    typeof n[0] == 'string' && (n[0] = 'react-i18next:: '.concat(n[0])),
      (e = console).warn.apply(e, n);
  }
}
var Ng = {};
function ff() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  (typeof t[0] == 'string' && Ng[t[0]]) ||
    (typeof t[0] == 'string' && (Ng[t[0]] = new Date()), DC.apply(void 0, t));
}
function Dg(e, t, n) {
  e.loadNamespaces(t, function () {
    if (e.isInitialized) n();
    else {
      var r = function i() {
        setTimeout(function () {
          e.off('initialized', i);
        }, 0),
          n();
      };
      e.on('initialized', r);
    }
  });
}
function AC(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = t.languages[0],
    i = t.options ? t.options.fallbackLng : !1,
    a = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === 'cimode') return !0;
  var l = function (d, h) {
    var g = t.services.backendConnector.state[''.concat(d, '|').concat(h)];
    return g === -1 || g === 2;
  };
  return n.bindI18n &&
    n.bindI18n.indexOf('languageChanging') > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !l(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(r, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (l(r, e) && (!i || l(a, e)))
      );
}
function BC(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!t.languages || !t.languages.length)
    return ff('i18n.languages were undefined or empty', t.languages), !0;
  var r = t.options.ignoreJSONStructure !== void 0;
  return r
    ? t.hasLoadedNamespace(e, {
        precheck: function (a, l) {
          if (
            n.bindI18n &&
            n.bindI18n.indexOf('languageChanging') > -1 &&
            a.services.backendConnector.backend &&
            a.isLanguageChangingTo &&
            !l(a.isLanguageChangingTo, e)
          )
            return !1;
        },
      })
    : AC(e, t, n);
}
var FC =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  jC = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  UC = function (t) {
    return jC[t];
  },
  $C = function (t) {
    return t.replace(FC, UC);
  };
function Ag(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Bg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ag(Object(n), !0).forEach(function (r) {
          Pn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ag(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var hf = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: $C,
};
function HC() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  hf = Bg(Bg({}, hf), e);
}
function WC() {
  return hf;
}
var U0;
function ZC(e) {
  U0 = e;
}
function VC() {
  return U0;
}
function En(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Fg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, j0(r.key), r);
  }
}
function On(e, t, n) {
  return (
    t && Fg(e.prototype, t),
    n && Fg(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var qC = {
    type: '3rdParty',
    init: function (t) {
      HC(t.options.react), ZC(t);
    },
  },
  QC = N.createContext(),
  KC = (function () {
    function e() {
      En(this, e), (this.usedNamespaces = {});
    }
    return (
      On(e, [
        {
          key: 'addUsedNamespaces',
          value: function (n) {
            var r = this;
            n.forEach(function (i) {
              r.usedNamespaces[i] || (r.usedNamespaces[i] = !0);
            });
          },
        },
        {
          key: 'getUsedNamespaces',
          value: function () {
            return Object.keys(this.usedNamespaces);
          },
        },
      ]),
      e
    );
  })();
function $0(e) {
  if (Array.isArray(e)) return e;
}
function GC(e, t) {
  var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r,
      i,
      a,
      l,
      c = [],
      d = !0,
      h = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        d = !1;
      } else for (; !(d = (r = a.call(n)).done) && (c.push(r.value), c.length !== t); d = !0);
    } catch (g) {
      (h = !0), (i = g);
    } finally {
      try {
        if (!d && n.return != null && ((l = n.return()), Object(l) !== l)) return;
      } finally {
        if (h) throw i;
      }
    }
    return c;
  }
}
function jg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function H0(e, t) {
  if (e) {
    if (typeof e == 'string') return jg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jg(e, t);
  }
}
function W0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XC(e, t) {
  return $0(e) || GC(e, t) || H0(e, t) || W0();
}
function Ug(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Gc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ug(Object(n), !0).forEach(function (r) {
          Pn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ug(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var YC = function (t, n) {
  var r = N.useRef();
  return (
    N.useEffect(
      function () {
        r.current = n ? r.current : t;
      },
      [t, n],
    ),
    r.current
  );
};
function Z0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.i18n,
    r = N.useContext(QC) || {},
    i = r.i18n,
    a = r.defaultNS,
    l = n || i || VC();
  if ((l && !l.reportNamespaces && (l.reportNamespaces = new KC()), !l)) {
    ff('You will need to pass in an i18next instance by using initReactI18next');
    var c = function (te) {
        return Array.isArray(te) ? te[te.length - 1] : te;
      },
      d = [c, {}, !1];
    return (d.t = c), (d.i18n = {}), (d.ready = !1), d;
  }
  l.options.react &&
    l.options.react.wait !== void 0 &&
    ff(
      'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
    );
  var h = Gc(Gc(Gc({}, WC()), l.options.react), t),
    g = h.useSuspense,
    v = h.keyPrefix,
    m = e || a || (l.options && l.options.defaultNS);
  (m = typeof m == 'string' ? [m] : m || ['translation']),
    l.reportNamespaces.addUsedNamespaces && l.reportNamespaces.addUsedNamespaces(m);
  var _ =
    (l.isInitialized || l.initializedStoreOnce) &&
    m.every(function (Q) {
      return BC(Q, l, h);
    });
  function x() {
    return l.getFixedT(null, h.nsMode === 'fallback' ? m : m[0], v);
  }
  var S = N.useState(x),
    O = XC(S, 2),
    w = O[0],
    b = O[1],
    k = m.join(),
    E = YC(k),
    D = N.useRef(!0);
  N.useEffect(
    function () {
      var Q = h.bindI18n,
        te = h.bindI18nStore;
      (D.current = !0),
        !_ &&
          !g &&
          Dg(l, m, function () {
            D.current && b(x);
          }),
        _ && E && E !== k && D.current && b(x);
      function q() {
        D.current && b(x);
      }
      return (
        Q && l && l.on(Q, q),
        te && l && l.store.on(te, q),
        function () {
          (D.current = !1),
            Q &&
              l &&
              Q.split(' ').forEach(function (ue) {
                return l.off(ue, q);
              }),
            te &&
              l &&
              te.split(' ').forEach(function (ue) {
                return l.store.off(ue, q);
              });
        }
      );
    },
    [l, k],
  );
  var F = N.useRef(!0);
  N.useEffect(
    function () {
      D.current && !F.current && b(x), (F.current = !1);
    },
    [l, v],
  );
  var W = [w, l, _];
  if (((W.t = w), (W.i18n = l), (W.ready = _), _ || (!_ && !g))) return W;
  throw new Promise(function (Q) {
    Dg(l, m, function () {
      Q();
    });
  });
}
function zl(e, t) {
  return (
    (zl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    zl(e, t)
  );
}
function qa(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), zl(e, t);
}
var Qa = (function () {
    function e() {
      this.listeners = [];
    }
    var t = e.prototype;
    return (
      (t.subscribe = function (r) {
        var i = this,
          a = r || function () {};
        return (
          this.listeners.push(a),
          this.onSubscribe(),
          function () {
            (i.listeners = i.listeners.filter(function (l) {
              return l !== a;
            })),
              i.onUnsubscribe();
          }
        );
      }),
      (t.hasListeners = function () {
        return this.listeners.length > 0;
      }),
      (t.onSubscribe = function () {}),
      (t.onUnsubscribe = function () {}),
      e
    );
  })(),
  Rl = typeof window > 'u';
function Ot() {}
function JC(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function pf(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function Il(e) {
  return Array.isArray(e) ? e : [e];
}
function V0(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Xs(e, t, n) {
  return Bu(e)
    ? typeof t == 'function'
      ? Te({}, n, { queryKey: e, queryFn: t })
      : Te({}, t, { queryKey: e })
    : e;
}
function Cr(e, t, n) {
  return Bu(e) ? [Te({}, t, { queryKey: e }), n] : [e || {}, t];
}
function eP(e, t) {
  if ((e === !0 && t === !0) || (e == null && t == null)) return 'all';
  if (e === !1 && t === !1) return 'none';
  var n = e ?? !t;
  return n ? 'active' : 'inactive';
}
function $g(e, t) {
  var n = e.active,
    r = e.exact,
    i = e.fetching,
    a = e.inactive,
    l = e.predicate,
    c = e.queryKey,
    d = e.stale;
  if (Bu(c)) {
    if (r) {
      if (t.queryHash !== Vh(c, t.options)) return !1;
    } else if (!Ml(t.queryKey, c)) return !1;
  }
  var h = eP(n, a);
  if (h === 'none') return !1;
  if (h !== 'all') {
    var g = t.isActive();
    if ((h === 'active' && !g) || (h === 'inactive' && g)) return !1;
  }
  return !(
    (typeof d == 'boolean' && t.isStale() !== d) ||
    (typeof i == 'boolean' && t.isFetching() !== i) ||
    (l && !l(t))
  );
}
function Hg(e, t) {
  var n = e.exact,
    r = e.fetching,
    i = e.predicate,
    a = e.mutationKey;
  if (Bu(a)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (vo(t.options.mutationKey) !== vo(a)) return !1;
    } else if (!Ml(t.options.mutationKey, a)) return !1;
  }
  return !((typeof r == 'boolean' && (t.state.status === 'loading') !== r) || (i && !i(t)));
}
function Vh(e, t) {
  var n = t?.queryKeyHashFn || vo;
  return n(e);
}
function vo(e) {
  var t = Il(e);
  return tP(t);
}
function tP(e) {
  return JSON.stringify(e, function (t, n) {
    return mf(n)
      ? Object.keys(n)
          .sort()
          .reduce(function (r, i) {
            return (r[i] = n[i]), r;
          }, {})
      : n;
  });
}
function Ml(e, t) {
  return q0(Il(e), Il(t));
}
function q0(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == 'object' && typeof t == 'object'
    ? !Object.keys(t).some(function (n) {
        return !q0(e[n], t[n]);
      })
    : !1;
}
function Nl(e, t) {
  if (e === t) return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || (mf(e) && mf(t))) {
    for (
      var r = n ? e.length : Object.keys(e).length,
        i = n ? t : Object.keys(t),
        a = i.length,
        l = n ? [] : {},
        c = 0,
        d = 0;
      d < a;
      d++
    ) {
      var h = n ? d : i[d];
      (l[h] = Nl(e[h], t[h])), l[h] === e[h] && c++;
    }
    return r === a && c === r ? e : l;
  }
  return t;
}
function nP(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function mf(e) {
  if (!Wg(e)) return !1;
  var t = e.constructor;
  if (typeof t > 'u') return !0;
  var n = t.prototype;
  return !(!Wg(n) || !n.hasOwnProperty('isPrototypeOf'));
}
function Wg(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function Bu(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function rP(e) {
  return new Promise(function (t) {
    setTimeout(t, e);
  });
}
function Zg(e) {
  Promise.resolve()
    .then(e)
    .catch(function (t) {
      return setTimeout(function () {
        throw t;
      });
    });
}
function Q0() {
  if (typeof AbortController == 'function') return new AbortController();
}
var oP = (function (e) {
    qa(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var a;
          if (!Rl && (a = window) != null && a.addEventListener) {
            var l = function () {
              return i();
            };
            return (
              window.addEventListener('visibilitychange', l, !1),
              window.addEventListener('focus', l, !1),
              function () {
                window.removeEventListener('visibilitychange', l),
                  window.removeEventListener('focus', l);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var a,
          l = this;
        (this.setup = i),
          (a = this.cleanup) == null || a.call(this),
          (this.cleanup = i(function (c) {
            typeof c == 'boolean' ? l.setFocused(c) : l.onFocus();
          }));
      }),
      (n.setFocused = function (i) {
        (this.focused = i), i && this.onFocus();
      }),
      (n.onFocus = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isFocused = function () {
        return typeof this.focused == 'boolean'
          ? this.focused
          : typeof document > 'u'
          ? !0
          : [void 0, 'visible', 'prerender'].includes(document.visibilityState);
      }),
      t
    );
  })(Qa),
  pa = new oP(),
  iP = (function (e) {
    qa(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var a;
          if (!Rl && (a = window) != null && a.addEventListener) {
            var l = function () {
              return i();
            };
            return (
              window.addEventListener('online', l, !1),
              window.addEventListener('offline', l, !1),
              function () {
                window.removeEventListener('online', l), window.removeEventListener('offline', l);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var a,
          l = this;
        (this.setup = i),
          (a = this.cleanup) == null || a.call(this),
          (this.cleanup = i(function (c) {
            typeof c == 'boolean' ? l.setOnline(c) : l.onOnline();
          }));
      }),
      (n.setOnline = function (i) {
        (this.online = i), i && this.onOnline();
      }),
      (n.onOnline = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isOnline = function () {
        return typeof this.online == 'boolean'
          ? this.online
          : typeof navigator > 'u' || typeof navigator.onLine > 'u'
          ? !0
          : navigator.onLine;
      }),
      t
    );
  })(Qa),
  Ys = new iP();
function aP(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function Dl(e) {
  return typeof e?.cancel == 'function';
}
var K0 = function (t) {
  (this.revert = t?.revert), (this.silent = t?.silent);
};
function Js(e) {
  return e instanceof K0;
}
var G0 = function (t) {
    var n = this,
      r = !1,
      i,
      a,
      l,
      c;
    (this.abort = t.abort),
      (this.cancel = function (m) {
        return i?.(m);
      }),
      (this.cancelRetry = function () {
        r = !0;
      }),
      (this.continueRetry = function () {
        r = !1;
      }),
      (this.continue = function () {
        return a?.();
      }),
      (this.failureCount = 0),
      (this.isPaused = !1),
      (this.isResolved = !1),
      (this.isTransportCancelable = !1),
      (this.promise = new Promise(function (m, _) {
        (l = m), (c = _);
      }));
    var d = function (_) {
        n.isResolved || ((n.isResolved = !0), t.onSuccess == null || t.onSuccess(_), a?.(), l(_));
      },
      h = function (_) {
        n.isResolved || ((n.isResolved = !0), t.onError == null || t.onError(_), a?.(), c(_));
      },
      g = function () {
        return new Promise(function (_) {
          (a = _), (n.isPaused = !0), t.onPause == null || t.onPause();
        }).then(function () {
          (a = void 0), (n.isPaused = !1), t.onContinue == null || t.onContinue();
        });
      },
      v = function m() {
        if (!n.isResolved) {
          var _;
          try {
            _ = t.fn();
          } catch (x) {
            _ = Promise.reject(x);
          }
          (i = function (S) {
            if (!n.isResolved && (h(new K0(S)), n.abort == null || n.abort(), Dl(_)))
              try {
                _.cancel();
              } catch {}
          }),
            (n.isTransportCancelable = Dl(_)),
            Promise.resolve(_)
              .then(d)
              .catch(function (x) {
                var S, O;
                if (!n.isResolved) {
                  var w = (S = t.retry) != null ? S : 3,
                    b = (O = t.retryDelay) != null ? O : aP,
                    k = typeof b == 'function' ? b(n.failureCount, x) : b,
                    E =
                      w === !0 ||
                      (typeof w == 'number' && n.failureCount < w) ||
                      (typeof w == 'function' && w(n.failureCount, x));
                  if (r || !E) {
                    h(x);
                    return;
                  }
                  n.failureCount++,
                    t.onFail == null || t.onFail(n.failureCount, x),
                    rP(k)
                      .then(function () {
                        if (!pa.isFocused() || !Ys.isOnline()) return g();
                      })
                      .then(function () {
                        r ? h(x) : m();
                      });
                }
              });
        }
      };
    v();
  },
  sP = (function () {
    function e() {
      (this.queue = []),
        (this.transactions = 0),
        (this.notifyFn = function (n) {
          n();
        }),
        (this.batchNotifyFn = function (n) {
          n();
        });
    }
    var t = e.prototype;
    return (
      (t.batch = function (r) {
        var i;
        this.transactions++;
        try {
          i = r();
        } finally {
          this.transactions--, this.transactions || this.flush();
        }
        return i;
      }),
      (t.schedule = function (r) {
        var i = this;
        this.transactions
          ? this.queue.push(r)
          : Zg(function () {
              i.notifyFn(r);
            });
      }),
      (t.batchCalls = function (r) {
        var i = this;
        return function () {
          for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c];
          i.schedule(function () {
            r.apply(void 0, l);
          });
        };
      }),
      (t.flush = function () {
        var r = this,
          i = this.queue;
        (this.queue = []),
          i.length &&
            Zg(function () {
              r.batchNotifyFn(function () {
                i.forEach(function (a) {
                  r.notifyFn(a);
                });
              });
            });
      }),
      (t.setNotifyFunction = function (r) {
        this.notifyFn = r;
      }),
      (t.setBatchNotifyFunction = function (r) {
        this.batchNotifyFn = r;
      }),
      e
    );
  })(),
  rt = new sP(),
  X0 = console;
function Al() {
  return X0;
}
function lP(e) {
  X0 = e;
}
var uP = (function () {
    function e(n) {
      (this.abortSignalConsumed = !1),
        (this.hadObservers = !1),
        (this.defaultOptions = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.cache = n.cache),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.initialState = n.state || this.getDefaultState(this.options)),
        (this.state = this.initialState),
        (this.meta = n.meta),
        this.scheduleGc();
    }
    var t = e.prototype;
    return (
      (t.setOptions = function (r) {
        var i;
        (this.options = Te({}, this.defaultOptions, r)),
          (this.meta = r?.meta),
          (this.cacheTime = Math.max(
            this.cacheTime || 0,
            (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3,
          ));
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.scheduleGc = function () {
        var r = this;
        this.clearGcTimeout(),
          pf(this.cacheTime) &&
            (this.gcTimeout = setTimeout(function () {
              r.optionalRemove();
            }, this.cacheTime));
      }),
      (t.clearGcTimeout = function () {
        this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
      }),
      (t.optionalRemove = function () {
        this.observers.length ||
          (this.state.isFetching
            ? this.hadObservers && this.scheduleGc()
            : this.cache.remove(this));
      }),
      (t.setData = function (r, i) {
        var a,
          l,
          c = this.state.data,
          d = JC(r, c);
        return (
          (a = (l = this.options).isDataEqual) != null && a.call(l, c, d)
            ? (d = c)
            : this.options.structuralSharing !== !1 && (d = Nl(c, d)),
          this.dispatch({ data: d, type: 'success', dataUpdatedAt: i?.updatedAt }),
          d
        );
      }),
      (t.setState = function (r, i) {
        this.dispatch({ type: 'setState', state: r, setStateOptions: i });
      }),
      (t.cancel = function (r) {
        var i,
          a = this.promise;
        return (
          (i = this.retryer) == null || i.cancel(r), a ? a.then(Ot).catch(Ot) : Promise.resolve()
        );
      }),
      (t.destroy = function () {
        this.clearGcTimeout(), this.cancel({ silent: !0 });
      }),
      (t.reset = function () {
        this.destroy(), this.setState(this.initialState);
      }),
      (t.isActive = function () {
        return this.observers.some(function (r) {
          return r.options.enabled !== !1;
        });
      }),
      (t.isFetching = function () {
        return this.state.isFetching;
      }),
      (t.isStale = function () {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          this.observers.some(function (r) {
            return r.getCurrentResult().isStale;
          })
        );
      }),
      (t.isStaleByTime = function (r) {
        return (
          r === void 0 && (r = 0),
          this.state.isInvalidated || !this.state.dataUpdatedAt || !V0(this.state.dataUpdatedAt, r)
        );
      }),
      (t.onFocus = function () {
        var r,
          i = this.observers.find(function (a) {
            return a.shouldFetchOnWindowFocus();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.onOnline = function () {
        var r,
          i = this.observers.find(function (a) {
            return a.shouldFetchOnReconnect();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 &&
          (this.observers.push(r),
          (this.hadObservers = !0),
          this.clearGcTimeout(),
          this.cache.notify({ type: 'observerAdded', query: this, observer: r }));
      }),
      (t.removeObserver = function (r) {
        this.observers.indexOf(r) !== -1 &&
          ((this.observers = this.observers.filter(function (i) {
            return i !== r;
          })),
          this.observers.length ||
            (this.retryer &&
              (this.retryer.isTransportCancelable || this.abortSignalConsumed
                ? this.retryer.cancel({ revert: !0 })
                : this.retryer.cancelRetry()),
            this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
          this.cache.notify({ type: 'observerRemoved', query: this, observer: r }));
      }),
      (t.getObserversCount = function () {
        return this.observers.length;
      }),
      (t.invalidate = function () {
        this.state.isInvalidated || this.dispatch({ type: 'invalidate' });
      }),
      (t.fetch = function (r, i) {
        var a = this,
          l,
          c,
          d;
        if (this.state.isFetching) {
          if (this.state.dataUpdatedAt && i?.cancelRefetch) this.cancel({ silent: !0 });
          else if (this.promise) {
            var h;
            return (h = this.retryer) == null || h.continueRetry(), this.promise;
          }
        }
        if ((r && this.setOptions(r), !this.options.queryFn)) {
          var g = this.observers.find(function (b) {
            return b.options.queryFn;
          });
          g && this.setOptions(g.options);
        }
        var v = Il(this.queryKey),
          m = Q0(),
          _ = { queryKey: v, pageParam: void 0, meta: this.meta };
        Object.defineProperty(_, 'signal', {
          enumerable: !0,
          get: function () {
            if (m) return (a.abortSignalConsumed = !0), m.signal;
          },
        });
        var x = function () {
            return a.options.queryFn
              ? ((a.abortSignalConsumed = !1), a.options.queryFn(_))
              : Promise.reject('Missing queryFn');
          },
          S = {
            fetchOptions: i,
            options: this.options,
            queryKey: v,
            state: this.state,
            fetchFn: x,
            meta: this.meta,
          };
        if ((l = this.options.behavior) != null && l.onFetch) {
          var O;
          (O = this.options.behavior) == null || O.onFetch(S);
        }
        if (
          ((this.revertState = this.state),
          !this.state.isFetching ||
            this.state.fetchMeta !== ((c = S.fetchOptions) == null ? void 0 : c.meta))
        ) {
          var w;
          this.dispatch({ type: 'fetch', meta: (w = S.fetchOptions) == null ? void 0 : w.meta });
        }
        return (
          (this.retryer = new G0({
            fn: S.fetchFn,
            abort: m == null || (d = m.abort) == null ? void 0 : d.bind(m),
            onSuccess: function (k) {
              a.setData(k),
                a.cache.config.onSuccess == null || a.cache.config.onSuccess(k, a),
                a.cacheTime === 0 && a.optionalRemove();
            },
            onError: function (k) {
              (Js(k) && k.silent) || a.dispatch({ type: 'error', error: k }),
                Js(k) ||
                  (a.cache.config.onError == null || a.cache.config.onError(k, a), Al().error(k)),
                a.cacheTime === 0 && a.optionalRemove();
            },
            onFail: function () {
              a.dispatch({ type: 'failed' });
            },
            onPause: function () {
              a.dispatch({ type: 'pause' });
            },
            onContinue: function () {
              a.dispatch({ type: 'continue' });
            },
            retry: S.options.retry,
            retryDelay: S.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = this.reducer(this.state, r)),
          rt.batch(function () {
            i.observers.forEach(function (a) {
              a.onQueryUpdate(r);
            }),
              i.cache.notify({ query: i, type: 'queryUpdated', action: r });
          });
      }),
      (t.getDefaultState = function (r) {
        var i = typeof r.initialData == 'function' ? r.initialData() : r.initialData,
          a = typeof r.initialData < 'u',
          l = a
            ? typeof r.initialDataUpdatedAt == 'function'
              ? r.initialDataUpdatedAt()
              : r.initialDataUpdatedAt
            : 0,
          c = typeof i < 'u';
        return {
          data: i,
          dataUpdateCount: 0,
          dataUpdatedAt: c ? l ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: c ? 'success' : 'idle',
        };
      }),
      (t.reducer = function (r, i) {
        var a, l;
        switch (i.type) {
          case 'failed':
            return Te({}, r, { fetchFailureCount: r.fetchFailureCount + 1 });
          case 'pause':
            return Te({}, r, { isPaused: !0 });
          case 'continue':
            return Te({}, r, { isPaused: !1 });
          case 'fetch':
            return Te(
              {},
              r,
              {
                fetchFailureCount: 0,
                fetchMeta: (a = i.meta) != null ? a : null,
                isFetching: !0,
                isPaused: !1,
              },
              !r.dataUpdatedAt && { error: null, status: 'loading' },
            );
          case 'success':
            return Te({}, r, {
              data: i.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: (l = i.dataUpdatedAt) != null ? l : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: 'success',
            });
          case 'error':
            var c = i.error;
            return Js(c) && c.revert && this.revertState
              ? Te({}, this.revertState)
              : Te({}, r, {
                  error: c,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: 'error',
                });
          case 'invalidate':
            return Te({}, r, { isInvalidated: !0 });
          case 'setState':
            return Te({}, r, i.state);
          default:
            return r;
        }
      }),
      e
    );
  })(),
  cP = (function (e) {
    qa(t, e);
    function t(r) {
      var i;
      return (
        (i = e.call(this) || this), (i.config = r || {}), (i.queries = []), (i.queriesMap = {}), i
      );
    }
    var n = t.prototype;
    return (
      (n.build = function (i, a, l) {
        var c,
          d = a.queryKey,
          h = (c = a.queryHash) != null ? c : Vh(d, a),
          g = this.get(h);
        return (
          g ||
            ((g = new uP({
              cache: this,
              queryKey: d,
              queryHash: h,
              options: i.defaultQueryOptions(a),
              state: l,
              defaultOptions: i.getQueryDefaults(d),
              meta: a.meta,
            })),
            this.add(g)),
          g
        );
      }),
      (n.add = function (i) {
        this.queriesMap[i.queryHash] ||
          ((this.queriesMap[i.queryHash] = i),
          this.queries.push(i),
          this.notify({ type: 'queryAdded', query: i }));
      }),
      (n.remove = function (i) {
        var a = this.queriesMap[i.queryHash];
        a &&
          (i.destroy(),
          (this.queries = this.queries.filter(function (l) {
            return l !== i;
          })),
          a === i && delete this.queriesMap[i.queryHash],
          this.notify({ type: 'queryRemoved', query: i }));
      }),
      (n.clear = function () {
        var i = this;
        rt.batch(function () {
          i.queries.forEach(function (a) {
            i.remove(a);
          });
        });
      }),
      (n.get = function (i) {
        return this.queriesMap[i];
      }),
      (n.getAll = function () {
        return this.queries;
      }),
      (n.find = function (i, a) {
        var l = Cr(i, a),
          c = l[0];
        return (
          typeof c.exact > 'u' && (c.exact = !0),
          this.queries.find(function (d) {
            return $g(c, d);
          })
        );
      }),
      (n.findAll = function (i, a) {
        var l = Cr(i, a),
          c = l[0];
        return Object.keys(c).length > 0
          ? this.queries.filter(function (d) {
              return $g(c, d);
            })
          : this.queries;
      }),
      (n.notify = function (i) {
        var a = this;
        rt.batch(function () {
          a.listeners.forEach(function (l) {
            l(i);
          });
        });
      }),
      (n.onFocus = function () {
        var i = this;
        rt.batch(function () {
          i.queries.forEach(function (a) {
            a.onFocus();
          });
        });
      }),
      (n.onOnline = function () {
        var i = this;
        rt.batch(function () {
          i.queries.forEach(function (a) {
            a.onOnline();
          });
        });
      }),
      t
    );
  })(Qa),
  dP = (function () {
    function e(n) {
      (this.options = Te({}, n.defaultOptions, n.options)),
        (this.mutationId = n.mutationId),
        (this.mutationCache = n.mutationCache),
        (this.observers = []),
        (this.state = n.state || fP()),
        (this.meta = n.meta);
    }
    var t = e.prototype;
    return (
      (t.setState = function (r) {
        this.dispatch({ type: 'setState', state: r });
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 && this.observers.push(r);
      }),
      (t.removeObserver = function (r) {
        this.observers = this.observers.filter(function (i) {
          return i !== r;
        });
      }),
      (t.cancel = function () {
        return this.retryer
          ? (this.retryer.cancel(), this.retryer.promise.then(Ot).catch(Ot))
          : Promise.resolve();
      }),
      (t.continue = function () {
        return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute();
      }),
      (t.execute = function () {
        var r = this,
          i,
          a = this.state.status === 'loading',
          l = Promise.resolve();
        return (
          a ||
            (this.dispatch({ type: 'loading', variables: this.options.variables }),
            (l = l
              .then(function () {
                r.mutationCache.config.onMutate == null ||
                  r.mutationCache.config.onMutate(r.state.variables, r);
              })
              .then(function () {
                return r.options.onMutate == null ? void 0 : r.options.onMutate(r.state.variables);
              })
              .then(function (c) {
                c !== r.state.context &&
                  r.dispatch({ type: 'loading', context: c, variables: r.state.variables });
              }))),
          l
            .then(function () {
              return r.executeMutation();
            })
            .then(function (c) {
              (i = c),
                r.mutationCache.config.onSuccess == null ||
                  r.mutationCache.config.onSuccess(i, r.state.variables, r.state.context, r);
            })
            .then(function () {
              return r.options.onSuccess == null
                ? void 0
                : r.options.onSuccess(i, r.state.variables, r.state.context);
            })
            .then(function () {
              return r.options.onSettled == null
                ? void 0
                : r.options.onSettled(i, null, r.state.variables, r.state.context);
            })
            .then(function () {
              return r.dispatch({ type: 'success', data: i }), i;
            })
            .catch(function (c) {
              return (
                r.mutationCache.config.onError == null ||
                  r.mutationCache.config.onError(c, r.state.variables, r.state.context, r),
                Al().error(c),
                Promise.resolve()
                  .then(function () {
                    return r.options.onError == null
                      ? void 0
                      : r.options.onError(c, r.state.variables, r.state.context);
                  })
                  .then(function () {
                    return r.options.onSettled == null
                      ? void 0
                      : r.options.onSettled(void 0, c, r.state.variables, r.state.context);
                  })
                  .then(function () {
                    throw (r.dispatch({ type: 'error', error: c }), c);
                  })
              );
            })
        );
      }),
      (t.executeMutation = function () {
        var r = this,
          i;
        return (
          (this.retryer = new G0({
            fn: function () {
              return r.options.mutationFn
                ? r.options.mutationFn(r.state.variables)
                : Promise.reject('No mutationFn found');
            },
            onFail: function () {
              r.dispatch({ type: 'failed' });
            },
            onPause: function () {
              r.dispatch({ type: 'pause' });
            },
            onContinue: function () {
              r.dispatch({ type: 'continue' });
            },
            retry: (i = this.options.retry) != null ? i : 0,
            retryDelay: this.options.retryDelay,
          })),
          this.retryer.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = hP(this.state, r)),
          rt.batch(function () {
            i.observers.forEach(function (a) {
              a.onMutationUpdate(r);
            }),
              i.mutationCache.notify(i);
          });
      }),
      e
    );
  })();
function fP() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
  };
}
function hP(e, t) {
  switch (t.type) {
    case 'failed':
      return Te({}, e, { failureCount: e.failureCount + 1 });
    case 'pause':
      return Te({}, e, { isPaused: !0 });
    case 'continue':
      return Te({}, e, { isPaused: !1 });
    case 'loading':
      return Te({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: 'loading',
        variables: t.variables,
      });
    case 'success':
      return Te({}, e, { data: t.data, error: null, status: 'success', isPaused: !1 });
    case 'error':
      return Te({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: 'error',
      });
    case 'setState':
      return Te({}, e, t.state);
    default:
      return e;
  }
}
var pP = (function (e) {
  qa(t, e);
  function t(r) {
    var i;
    return (
      (i = e.call(this) || this), (i.config = r || {}), (i.mutations = []), (i.mutationId = 0), i
    );
  }
  var n = t.prototype;
  return (
    (n.build = function (i, a, l) {
      var c = new dP({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: i.defaultMutationOptions(a),
        state: l,
        defaultOptions: a.mutationKey ? i.getMutationDefaults(a.mutationKey) : void 0,
        meta: a.meta,
      });
      return this.add(c), c;
    }),
    (n.add = function (i) {
      this.mutations.push(i), this.notify(i);
    }),
    (n.remove = function (i) {
      (this.mutations = this.mutations.filter(function (a) {
        return a !== i;
      })),
        i.cancel(),
        this.notify(i);
    }),
    (n.clear = function () {
      var i = this;
      rt.batch(function () {
        i.mutations.forEach(function (a) {
          i.remove(a);
        });
      });
    }),
    (n.getAll = function () {
      return this.mutations;
    }),
    (n.find = function (i) {
      return (
        typeof i.exact > 'u' && (i.exact = !0),
        this.mutations.find(function (a) {
          return Hg(i, a);
        })
      );
    }),
    (n.findAll = function (i) {
      return this.mutations.filter(function (a) {
        return Hg(i, a);
      });
    }),
    (n.notify = function (i) {
      var a = this;
      rt.batch(function () {
        a.listeners.forEach(function (l) {
          l(i);
        });
      });
    }),
    (n.onFocus = function () {
      this.resumePausedMutations();
    }),
    (n.onOnline = function () {
      this.resumePausedMutations();
    }),
    (n.resumePausedMutations = function () {
      var i = this.mutations.filter(function (a) {
        return a.state.isPaused;
      });
      return rt.batch(function () {
        return i.reduce(function (a, l) {
          return a.then(function () {
            return l.continue().catch(Ot);
          });
        }, Promise.resolve());
      });
    }),
    t
  );
})(Qa);
function mP() {
  return {
    onFetch: function (t) {
      t.fetchFn = function () {
        var n,
          r,
          i,
          a,
          l,
          c,
          d = (n = t.fetchOptions) == null || (r = n.meta) == null ? void 0 : r.refetchPage,
          h = (i = t.fetchOptions) == null || (a = i.meta) == null ? void 0 : a.fetchMore,
          g = h?.pageParam,
          v = h?.direction === 'forward',
          m = h?.direction === 'backward',
          _ = ((l = t.state.data) == null ? void 0 : l.pages) || [],
          x = ((c = t.state.data) == null ? void 0 : c.pageParams) || [],
          S = Q0(),
          O = S?.signal,
          w = x,
          b = !1,
          k =
            t.options.queryFn ||
            function () {
              return Promise.reject('Missing queryFn');
            },
          E = function (ce, Ne, X, de) {
            return (
              (w = de ? [Ne].concat(w) : [].concat(w, [Ne])),
              de ? [X].concat(ce) : [].concat(ce, [X])
            );
          },
          D = function (ce, Ne, X, de) {
            if (b) return Promise.reject('Cancelled');
            if (typeof X > 'u' && !Ne && ce.length) return Promise.resolve(ce);
            var I = { queryKey: t.queryKey, signal: O, pageParam: X, meta: t.meta },
              re = k(I),
              H = Promise.resolve(re).then(function (R) {
                return E(ce, X, R, de);
              });
            if (Dl(re)) {
              var P = H;
              P.cancel = re.cancel;
            }
            return H;
          },
          F;
        if (!_.length) F = D([]);
        else if (v) {
          var W = typeof g < 'u',
            Q = W ? g : Vg(t.options, _);
          F = D(_, W, Q);
        } else if (m) {
          var te = typeof g < 'u',
            q = te ? g : gP(t.options, _);
          F = D(_, te, q, !0);
        } else
          (function () {
            w = [];
            var Ze = typeof t.options.getNextPageParam > 'u',
              ce = d && _[0] ? d(_[0], 0, _) : !0;
            F = ce ? D([], Ze, x[0]) : Promise.resolve(E([], x[0], _[0]));
            for (
              var Ne = function (I) {
                  F = F.then(function (re) {
                    var H = d && _[I] ? d(_[I], I, _) : !0;
                    if (H) {
                      var P = Ze ? x[I] : Vg(t.options, re);
                      return D(re, Ze, P);
                    }
                    return Promise.resolve(E(re, x[I], _[I]));
                  });
                },
                X = 1;
              X < _.length;
              X++
            )
              Ne(X);
          })();
        var ue = F.then(function (Ze) {
            return { pages: Ze, pageParams: w };
          }),
          ge = ue;
        return (
          (ge.cancel = function () {
            (b = !0), S?.abort(), Dl(F) && F.cancel();
          }),
          ue
        );
      };
    },
  };
}
function Vg(e, t) {
  return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function gP(e, t) {
  return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
var vP = (function () {
    function e(n) {
      n === void 0 && (n = {}),
        (this.queryCache = n.queryCache || new cP()),
        (this.mutationCache = n.mutationCache || new pP()),
        (this.defaultOptions = n.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []);
    }
    var t = e.prototype;
    return (
      (t.mount = function () {
        var r = this;
        (this.unsubscribeFocus = pa.subscribe(function () {
          pa.isFocused() && Ys.isOnline() && (r.mutationCache.onFocus(), r.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = Ys.subscribe(function () {
            pa.isFocused() &&
              Ys.isOnline() &&
              (r.mutationCache.onOnline(), r.queryCache.onOnline());
          }));
      }),
      (t.unmount = function () {
        var r, i;
        (r = this.unsubscribeFocus) == null || r.call(this),
          (i = this.unsubscribeOnline) == null || i.call(this);
      }),
      (t.isFetching = function (r, i) {
        var a = Cr(r, i),
          l = a[0];
        return (l.fetching = !0), this.queryCache.findAll(l).length;
      }),
      (t.isMutating = function (r) {
        return this.mutationCache.findAll(Te({}, r, { fetching: !0 })).length;
      }),
      (t.getQueryData = function (r, i) {
        var a;
        return (a = this.queryCache.find(r, i)) == null ? void 0 : a.state.data;
      }),
      (t.getQueriesData = function (r) {
        return this.getQueryCache()
          .findAll(r)
          .map(function (i) {
            var a = i.queryKey,
              l = i.state,
              c = l.data;
            return [a, c];
          });
      }),
      (t.setQueryData = function (r, i, a) {
        var l = Xs(r),
          c = this.defaultQueryOptions(l);
        return this.queryCache.build(this, c).setData(i, a);
      }),
      (t.setQueriesData = function (r, i, a) {
        var l = this;
        return rt.batch(function () {
          return l
            .getQueryCache()
            .findAll(r)
            .map(function (c) {
              var d = c.queryKey;
              return [d, l.setQueryData(d, i, a)];
            });
        });
      }),
      (t.getQueryState = function (r, i) {
        var a;
        return (a = this.queryCache.find(r, i)) == null ? void 0 : a.state;
      }),
      (t.removeQueries = function (r, i) {
        var a = Cr(r, i),
          l = a[0],
          c = this.queryCache;
        rt.batch(function () {
          c.findAll(l).forEach(function (d) {
            c.remove(d);
          });
        });
      }),
      (t.resetQueries = function (r, i, a) {
        var l = this,
          c = Cr(r, i, a),
          d = c[0],
          h = c[1],
          g = this.queryCache,
          v = Te({}, d, { active: !0 });
        return rt.batch(function () {
          return (
            g.findAll(d).forEach(function (m) {
              m.reset();
            }),
            l.refetchQueries(v, h)
          );
        });
      }),
      (t.cancelQueries = function (r, i, a) {
        var l = this,
          c = Cr(r, i, a),
          d = c[0],
          h = c[1],
          g = h === void 0 ? {} : h;
        typeof g.revert > 'u' && (g.revert = !0);
        var v = rt.batch(function () {
          return l.queryCache.findAll(d).map(function (m) {
            return m.cancel(g);
          });
        });
        return Promise.all(v).then(Ot).catch(Ot);
      }),
      (t.invalidateQueries = function (r, i, a) {
        var l,
          c,
          d,
          h = this,
          g = Cr(r, i, a),
          v = g[0],
          m = g[1],
          _ = Te({}, v, {
            active: (l = (c = v.refetchActive) != null ? c : v.active) != null ? l : !0,
            inactive: (d = v.refetchInactive) != null ? d : !1,
          });
        return rt.batch(function () {
          return (
            h.queryCache.findAll(v).forEach(function (x) {
              x.invalidate();
            }),
            h.refetchQueries(_, m)
          );
        });
      }),
      (t.refetchQueries = function (r, i, a) {
        var l = this,
          c = Cr(r, i, a),
          d = c[0],
          h = c[1],
          g = rt.batch(function () {
            return l.queryCache.findAll(d).map(function (m) {
              return m.fetch(void 0, Te({}, h, { meta: { refetchPage: d?.refetchPage } }));
            });
          }),
          v = Promise.all(g).then(Ot);
        return h?.throwOnError || (v = v.catch(Ot)), v;
      }),
      (t.fetchQuery = function (r, i, a) {
        var l = Xs(r, i, a),
          c = this.defaultQueryOptions(l);
        typeof c.retry > 'u' && (c.retry = !1);
        var d = this.queryCache.build(this, c);
        return d.isStaleByTime(c.staleTime) ? d.fetch(c) : Promise.resolve(d.state.data);
      }),
      (t.prefetchQuery = function (r, i, a) {
        return this.fetchQuery(r, i, a).then(Ot).catch(Ot);
      }),
      (t.fetchInfiniteQuery = function (r, i, a) {
        var l = Xs(r, i, a);
        return (l.behavior = mP()), this.fetchQuery(l);
      }),
      (t.prefetchInfiniteQuery = function (r, i, a) {
        return this.fetchInfiniteQuery(r, i, a).then(Ot).catch(Ot);
      }),
      (t.cancelMutations = function () {
        var r = this,
          i = rt.batch(function () {
            return r.mutationCache.getAll().map(function (a) {
              return a.cancel();
            });
          });
        return Promise.all(i).then(Ot).catch(Ot);
      }),
      (t.resumePausedMutations = function () {
        return this.getMutationCache().resumePausedMutations();
      }),
      (t.executeMutation = function (r) {
        return this.mutationCache.build(this, r).execute();
      }),
      (t.getQueryCache = function () {
        return this.queryCache;
      }),
      (t.getMutationCache = function () {
        return this.mutationCache;
      }),
      (t.getDefaultOptions = function () {
        return this.defaultOptions;
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.setQueryDefaults = function (r, i) {
        var a = this.queryDefaults.find(function (l) {
          return vo(r) === vo(l.queryKey);
        });
        a ? (a.defaultOptions = i) : this.queryDefaults.push({ queryKey: r, defaultOptions: i });
      }),
      (t.getQueryDefaults = function (r) {
        var i;
        return r
          ? (i = this.queryDefaults.find(function (a) {
              return Ml(r, a.queryKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.setMutationDefaults = function (r, i) {
        var a = this.mutationDefaults.find(function (l) {
          return vo(r) === vo(l.mutationKey);
        });
        a
          ? (a.defaultOptions = i)
          : this.mutationDefaults.push({ mutationKey: r, defaultOptions: i });
      }),
      (t.getMutationDefaults = function (r) {
        var i;
        return r
          ? (i = this.mutationDefaults.find(function (a) {
              return Ml(r, a.mutationKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.defaultQueryOptions = function (r) {
        if (r?._defaulted) return r;
        var i = Te({}, this.defaultOptions.queries, this.getQueryDefaults(r?.queryKey), r, {
          _defaulted: !0,
        });
        return !i.queryHash && i.queryKey && (i.queryHash = Vh(i.queryKey, i)), i;
      }),
      (t.defaultQueryObserverOptions = function (r) {
        return this.defaultQueryOptions(r);
      }),
      (t.defaultMutationOptions = function (r) {
        return r?._defaulted
          ? r
          : Te({}, this.defaultOptions.mutations, this.getMutationDefaults(r?.mutationKey), r, {
              _defaulted: !0,
            });
      }),
      (t.clear = function () {
        this.queryCache.clear(), this.mutationCache.clear();
      }),
      e
    );
  })(),
  _P = (function (e) {
    qa(t, e);
    function t(r, i) {
      var a;
      return (
        (a = e.call(this) || this),
        (a.client = r),
        (a.options = i),
        (a.trackedProps = []),
        (a.selectError = null),
        a.bindMethods(),
        a.setOptions(i),
        a
      );
    }
    var n = t.prototype;
    return (
      (n.bindMethods = function () {
        (this.remove = this.remove.bind(this)), (this.refetch = this.refetch.bind(this));
      }),
      (n.onSubscribe = function () {
        this.listeners.length === 1 &&
          (this.currentQuery.addObserver(this),
          qg(this.currentQuery, this.options) && this.executeFetch(),
          this.updateTimers());
      }),
      (n.onUnsubscribe = function () {
        this.listeners.length || this.destroy();
      }),
      (n.shouldFetchOnReconnect = function () {
        return gf(this.currentQuery, this.options, this.options.refetchOnReconnect);
      }),
      (n.shouldFetchOnWindowFocus = function () {
        return gf(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
      }),
      (n.destroy = function () {
        (this.listeners = []), this.clearTimers(), this.currentQuery.removeObserver(this);
      }),
      (n.setOptions = function (i, a) {
        var l = this.options,
          c = this.currentQuery;
        if (
          ((this.options = this.client.defaultQueryObserverOptions(i)),
          typeof this.options.enabled < 'u' && typeof this.options.enabled != 'boolean')
        )
          throw new Error('Expected enabled to be a boolean');
        this.options.queryKey || (this.options.queryKey = l.queryKey), this.updateQuery();
        var d = this.hasListeners();
        d && Qg(this.currentQuery, c, this.options, l) && this.executeFetch(),
          this.updateResult(a),
          d &&
            (this.currentQuery !== c ||
              this.options.enabled !== l.enabled ||
              this.options.staleTime !== l.staleTime) &&
            this.updateStaleTimeout();
        var h = this.computeRefetchInterval();
        d &&
          (this.currentQuery !== c ||
            this.options.enabled !== l.enabled ||
            h !== this.currentRefetchInterval) &&
          this.updateRefetchInterval(h);
      }),
      (n.getOptimisticResult = function (i) {
        var a = this.client.defaultQueryObserverOptions(i),
          l = this.client.getQueryCache().build(this.client, a);
        return this.createResult(l, a);
      }),
      (n.getCurrentResult = function () {
        return this.currentResult;
      }),
      (n.trackResult = function (i, a) {
        var l = this,
          c = {},
          d = function (g) {
            l.trackedProps.includes(g) || l.trackedProps.push(g);
          };
        return (
          Object.keys(i).forEach(function (h) {
            Object.defineProperty(c, h, {
              configurable: !1,
              enumerable: !0,
              get: function () {
                return d(h), i[h];
              },
            });
          }),
          (a.useErrorBoundary || a.suspense) && d('error'),
          c
        );
      }),
      (n.getNextResult = function (i) {
        var a = this;
        return new Promise(function (l, c) {
          var d = a.subscribe(function (h) {
            h.isFetching || (d(), h.isError && i?.throwOnError ? c(h.error) : l(h));
          });
        });
      }),
      (n.getCurrentQuery = function () {
        return this.currentQuery;
      }),
      (n.remove = function () {
        this.client.getQueryCache().remove(this.currentQuery);
      }),
      (n.refetch = function (i) {
        return this.fetch(Te({}, i, { meta: { refetchPage: i?.refetchPage } }));
      }),
      (n.fetchOptimistic = function (i) {
        var a = this,
          l = this.client.defaultQueryObserverOptions(i),
          c = this.client.getQueryCache().build(this.client, l);
        return c.fetch().then(function () {
          return a.createResult(c, l);
        });
      }),
      (n.fetch = function (i) {
        var a = this;
        return this.executeFetch(i).then(function () {
          return a.updateResult(), a.currentResult;
        });
      }),
      (n.executeFetch = function (i) {
        this.updateQuery();
        var a = this.currentQuery.fetch(this.options, i);
        return i?.throwOnError || (a = a.catch(Ot)), a;
      }),
      (n.updateStaleTimeout = function () {
        var i = this;
        if (
          (this.clearStaleTimeout(),
          !(Rl || this.currentResult.isStale || !pf(this.options.staleTime)))
        ) {
          var a = V0(this.currentResult.dataUpdatedAt, this.options.staleTime),
            l = a + 1;
          this.staleTimeoutId = setTimeout(function () {
            i.currentResult.isStale || i.updateResult();
          }, l);
        }
      }),
      (n.computeRefetchInterval = function () {
        var i;
        return typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
          : (i = this.options.refetchInterval) != null
          ? i
          : !1;
      }),
      (n.updateRefetchInterval = function (i) {
        var a = this;
        this.clearRefetchInterval(),
          (this.currentRefetchInterval = i),
          !(
            Rl ||
            this.options.enabled === !1 ||
            !pf(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
          ) &&
            (this.refetchIntervalId = setInterval(function () {
              (a.options.refetchIntervalInBackground || pa.isFocused()) && a.executeFetch();
            }, this.currentRefetchInterval));
      }),
      (n.updateTimers = function () {
        this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
      }),
      (n.clearTimers = function () {
        this.clearStaleTimeout(), this.clearRefetchInterval();
      }),
      (n.clearStaleTimeout = function () {
        this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
      }),
      (n.clearRefetchInterval = function () {
        this.refetchIntervalId &&
          (clearInterval(this.refetchIntervalId), (this.refetchIntervalId = void 0));
      }),
      (n.createResult = function (i, a) {
        var l = this.currentQuery,
          c = this.options,
          d = this.currentResult,
          h = this.currentResultState,
          g = this.currentResultOptions,
          v = i !== l,
          m = v ? i.state : this.currentQueryInitialState,
          _ = v ? this.currentResult : this.previousQueryResult,
          x = i.state,
          S = x.dataUpdatedAt,
          O = x.error,
          w = x.errorUpdatedAt,
          b = x.isFetching,
          k = x.status,
          E = !1,
          D = !1,
          F;
        if (a.optimisticResults) {
          var W = this.hasListeners(),
            Q = !W && qg(i, a),
            te = W && Qg(i, l, a, c);
          (Q || te) && ((b = !0), S || (k = 'loading'));
        }
        if (a.keepPreviousData && !x.dataUpdateCount && _?.isSuccess && k !== 'error')
          (F = _.data), (S = _.dataUpdatedAt), (k = _.status), (E = !0);
        else if (a.select && typeof x.data < 'u')
          if (d && x.data === h?.data && a.select === this.selectFn) F = this.selectResult;
          else
            try {
              (this.selectFn = a.select),
                (F = a.select(x.data)),
                a.structuralSharing !== !1 && (F = Nl(d?.data, F)),
                (this.selectResult = F),
                (this.selectError = null);
            } catch (ge) {
              Al().error(ge), (this.selectError = ge);
            }
        else F = x.data;
        if (typeof a.placeholderData < 'u' && typeof F > 'u' && (k === 'loading' || k === 'idle')) {
          var q;
          if (d?.isPlaceholderData && a.placeholderData === g?.placeholderData) q = d.data;
          else if (
            ((q = typeof a.placeholderData == 'function' ? a.placeholderData() : a.placeholderData),
            a.select && typeof q < 'u')
          )
            try {
              (q = a.select(q)),
                a.structuralSharing !== !1 && (q = Nl(d?.data, q)),
                (this.selectError = null);
            } catch (ge) {
              Al().error(ge), (this.selectError = ge);
            }
          typeof q < 'u' && ((k = 'success'), (F = q), (D = !0));
        }
        this.selectError &&
          ((O = this.selectError), (F = this.selectResult), (w = Date.now()), (k = 'error'));
        var ue = {
          status: k,
          isLoading: k === 'loading',
          isSuccess: k === 'success',
          isError: k === 'error',
          isIdle: k === 'idle',
          data: F,
          dataUpdatedAt: S,
          error: O,
          errorUpdatedAt: w,
          failureCount: x.fetchFailureCount,
          errorUpdateCount: x.errorUpdateCount,
          isFetched: x.dataUpdateCount > 0 || x.errorUpdateCount > 0,
          isFetchedAfterMount:
            x.dataUpdateCount > m.dataUpdateCount || x.errorUpdateCount > m.errorUpdateCount,
          isFetching: b,
          isRefetching: b && k !== 'loading',
          isLoadingError: k === 'error' && x.dataUpdatedAt === 0,
          isPlaceholderData: D,
          isPreviousData: E,
          isRefetchError: k === 'error' && x.dataUpdatedAt !== 0,
          isStale: qh(i, a),
          refetch: this.refetch,
          remove: this.remove,
        };
        return ue;
      }),
      (n.shouldNotifyListeners = function (i, a) {
        if (!a) return !0;
        var l = this.options,
          c = l.notifyOnChangeProps,
          d = l.notifyOnChangePropsExclusions;
        if ((!c && !d) || (c === 'tracked' && !this.trackedProps.length)) return !0;
        var h = c === 'tracked' ? this.trackedProps : c;
        return Object.keys(i).some(function (g) {
          var v = g,
            m = i[v] !== a[v],
            _ = h?.some(function (S) {
              return S === g;
            }),
            x = d?.some(function (S) {
              return S === g;
            });
          return m && !x && (!h || _);
        });
      }),
      (n.updateResult = function (i) {
        var a = this.currentResult;
        if (
          ((this.currentResult = this.createResult(this.currentQuery, this.options)),
          (this.currentResultState = this.currentQuery.state),
          (this.currentResultOptions = this.options),
          !nP(this.currentResult, a))
        ) {
          var l = { cache: !0 };
          i?.listeners !== !1 &&
            this.shouldNotifyListeners(this.currentResult, a) &&
            (l.listeners = !0),
            this.notify(Te({}, l, i));
        }
      }),
      (n.updateQuery = function () {
        var i = this.client.getQueryCache().build(this.client, this.options);
        if (i !== this.currentQuery) {
          var a = this.currentQuery;
          (this.currentQuery = i),
            (this.currentQueryInitialState = i.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() && (a?.removeObserver(this), i.addObserver(this));
        }
      }),
      (n.onQueryUpdate = function (i) {
        var a = {};
        i.type === 'success'
          ? (a.onSuccess = !0)
          : i.type === 'error' && !Js(i.error) && (a.onError = !0),
          this.updateResult(a),
          this.hasListeners() && this.updateTimers();
      }),
      (n.notify = function (i) {
        var a = this;
        rt.batch(function () {
          i.onSuccess
            ? (a.options.onSuccess == null || a.options.onSuccess(a.currentResult.data),
              a.options.onSettled == null || a.options.onSettled(a.currentResult.data, null))
            : i.onError &&
              (a.options.onError == null || a.options.onError(a.currentResult.error),
              a.options.onSettled == null || a.options.onSettled(void 0, a.currentResult.error)),
            i.listeners &&
              a.listeners.forEach(function (l) {
                l(a.currentResult);
              }),
            i.cache &&
              a.client
                .getQueryCache()
                .notify({ query: a.currentQuery, type: 'observerResultsUpdated' });
        });
      }),
      t
    );
  })(Qa);
function yP(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === 'error' && t.retryOnMount === !1)
  );
}
function qg(e, t) {
  return yP(e, t) || (e.state.dataUpdatedAt > 0 && gf(e, t, t.refetchOnMount));
}
function gf(e, t, n) {
  if (t.enabled !== !1) {
    var r = typeof n == 'function' ? n(e) : n;
    return r === 'always' || (r !== !1 && qh(e, t));
  }
  return !1;
}
function Qg(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== 'error') &&
    qh(e, n)
  );
}
function qh(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var bP = kS.unstable_batchedUpdates;
rt.setBatchNotifyFunction(bP);
var wP = console;
lP(wP);
var Kg = Z.createContext(void 0),
  Y0 = Z.createContext(!1);
function J0(e) {
  return e && typeof window < 'u'
    ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Kg),
      window.ReactQueryClientContext)
    : Kg;
}
var xP = function () {
    var t = Z.useContext(J0(Z.useContext(Y0)));
    if (!t) throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return t;
  },
  SP = function (t) {
    var n = t.client,
      r = t.contextSharing,
      i = r === void 0 ? !1 : r,
      a = t.children;
    Z.useEffect(
      function () {
        return (
          n.mount(),
          function () {
            n.unmount();
          }
        );
      },
      [n],
    );
    var l = J0(i);
    return Z.createElement(Y0.Provider, { value: i }, Z.createElement(l.Provider, { value: n }, a));
  };
function kP() {
  var e = !1;
  return {
    clearReset: function () {
      e = !1;
    },
    reset: function () {
      e = !0;
    },
    isReset: function () {
      return e;
    },
  };
}
var CP = Z.createContext(kP()),
  PP = function () {
    return Z.useContext(CP);
  };
function EP(e, t, n) {
  return typeof t == 'function' ? t.apply(void 0, n) : typeof t == 'boolean' ? t : !!e;
}
function OP(e, t) {
  var n = Z.useRef(!1),
    r = Z.useState(0),
    i = r[1],
    a = xP(),
    l = PP(),
    c = a.defaultQueryObserverOptions(e);
  (c.optimisticResults = !0),
    c.onError && (c.onError = rt.batchCalls(c.onError)),
    c.onSuccess && (c.onSuccess = rt.batchCalls(c.onSuccess)),
    c.onSettled && (c.onSettled = rt.batchCalls(c.onSettled)),
    c.suspense &&
      (typeof c.staleTime != 'number' && (c.staleTime = 1e3),
      c.cacheTime === 0 && (c.cacheTime = 1)),
    (c.suspense || c.useErrorBoundary) && (l.isReset() || (c.retryOnMount = !1));
  var d = Z.useState(function () {
      return new t(a, c);
    }),
    h = d[0],
    g = h.getOptimisticResult(c);
  if (
    (Z.useEffect(
      function () {
        (n.current = !0), l.clearReset();
        var v = h.subscribe(
          rt.batchCalls(function () {
            n.current &&
              i(function (m) {
                return m + 1;
              });
          }),
        );
        return (
          h.updateResult(),
          function () {
            (n.current = !1), v();
          }
        );
      },
      [l, h],
    ),
    Z.useEffect(
      function () {
        h.setOptions(c, { listeners: !1 });
      },
      [c, h],
    ),
    c.suspense && g.isLoading)
  )
    throw h
      .fetchOptimistic(c)
      .then(function (v) {
        var m = v.data;
        c.onSuccess == null || c.onSuccess(m), c.onSettled == null || c.onSettled(m, null);
      })
      .catch(function (v) {
        l.clearReset(),
          c.onError == null || c.onError(v),
          c.onSettled == null || c.onSettled(void 0, v);
      });
  if (
    g.isError &&
    !l.isReset() &&
    !g.isFetching &&
    EP(c.suspense, c.useErrorBoundary, [g.error, h.getCurrentQuery()])
  )
    throw g.error;
  return c.notifyOnChangeProps === 'tracked' && (g = h.trackResult(g, c)), g;
}
function LP(e, t, n) {
  var r = Xs(e, t, n);
  return OP(r, _P);
}
function jr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fu(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && zl(e, t);
}
function Ka(e, t) {
  if (t && (kn(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return jr(e);
}
function Zn(e) {
  return (
    (Zn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Zn(e)
  );
}
function TP(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function zP(e) {
  return $0(e) || TP(e) || H0(e) || W0();
}
function Gg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Xg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gg(Object(n), !0).forEach(function (r) {
          Pn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Gg(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var RP = {
    type: 'logger',
    log: function (t) {
      this.output('log', t);
    },
    warn: function (t) {
      this.output('warn', t);
    },
    error: function (t) {
      this.output('error', t);
    },
    output: function (t, n) {
      console && console[t] && console[t].apply(console, n);
    },
  },
  IP = (function () {
    function e(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      En(this, e), this.init(t, n);
    }
    return (
      On(e, [
        {
          key: 'init',
          value: function (n) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            (this.prefix = r.prefix || 'i18next:'),
              (this.logger = n || RP),
              (this.options = r),
              (this.debug = r.debug);
          },
        },
        {
          key: 'setDebug',
          value: function (n) {
            this.debug = n;
          },
        },
        {
          key: 'log',
          value: function () {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return this.forward(r, 'log', '', !0);
          },
        },
        {
          key: 'warn',
          value: function () {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return this.forward(r, 'warn', '', !0);
          },
        },
        {
          key: 'error',
          value: function () {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return this.forward(r, 'error', '');
          },
        },
        {
          key: 'deprecate',
          value: function () {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return this.forward(r, 'warn', 'WARNING DEPRECATED: ', !0);
          },
        },
        {
          key: 'forward',
          value: function (n, r, i, a) {
            return a && !this.debug
              ? null
              : (typeof n[0] == 'string' &&
                  (n[0] = ''.concat(i).concat(this.prefix, ' ').concat(n[0])),
                this.logger[r](n));
          },
        },
        {
          key: 'create',
          value: function (n) {
            return new e(
              this.logger,
              Xg(Xg({}, { prefix: ''.concat(this.prefix, ':').concat(n, ':') }), this.options),
            );
          },
        },
        {
          key: 'clone',
          value: function (n) {
            return (
              (n = n || this.options), (n.prefix = n.prefix || this.prefix), new e(this.logger, n)
            );
          },
        },
      ]),
      e
    );
  })(),
  jn = new IP(),
  qr = (function () {
    function e() {
      En(this, e), (this.observers = {});
    }
    return (
      On(e, [
        {
          key: 'on',
          value: function (n, r) {
            var i = this;
            return (
              n.split(' ').forEach(function (a) {
                (i.observers[a] = i.observers[a] || []), i.observers[a].push(r);
              }),
              this
            );
          },
        },
        {
          key: 'off',
          value: function (n, r) {
            if (this.observers[n]) {
              if (!r) {
                delete this.observers[n];
                return;
              }
              this.observers[n] = this.observers[n].filter(function (i) {
                return i !== r;
              });
            }
          },
        },
        {
          key: 'emit',
          value: function (n) {
            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
              i[a - 1] = arguments[a];
            if (this.observers[n]) {
              var l = [].concat(this.observers[n]);
              l.forEach(function (d) {
                d.apply(void 0, i);
              });
            }
            if (this.observers['*']) {
              var c = [].concat(this.observers['*']);
              c.forEach(function (d) {
                d.apply(d, [n].concat(i));
              });
            }
          },
        },
      ]),
      e
    );
  })();
function Qi() {
  var e,
    t,
    n = new Promise(function (r, i) {
      (e = r), (t = i);
    });
  return (n.resolve = e), (n.reject = t), n;
}
function Yg(e) {
  return e == null ? '' : '' + e;
}
function MP(e, t, n) {
  e.forEach(function (r) {
    t[r] && (n[r] = t[r]);
  });
}
function Qh(e, t, n) {
  function r(c) {
    return c && c.indexOf('###') > -1 ? c.replace(/###/g, '.') : c;
  }
  function i() {
    return !e || typeof e == 'string';
  }
  for (var a = typeof t != 'string' ? [].concat(t) : t.split('.'); a.length > 1; ) {
    if (i()) return {};
    var l = r(a.shift());
    !e[l] && n && (e[l] = new n()),
      Object.prototype.hasOwnProperty.call(e, l) ? (e = e[l]) : (e = {});
  }
  return i() ? {} : { obj: e, k: r(a.shift()) };
}
function Jg(e, t, n) {
  var r = Qh(e, t, Object),
    i = r.obj,
    a = r.k;
  i[a] = n;
}
function NP(e, t, n, r) {
  var i = Qh(e, t, Object),
    a = i.obj,
    l = i.k;
  (a[l] = a[l] || []), r && (a[l] = a[l].concat(n)), r || a[l].push(n);
}
function Bl(e, t) {
  var n = Qh(e, t),
    r = n.obj,
    i = n.k;
  if (r) return r[i];
}
function ev(e, t, n) {
  var r = Bl(e, n);
  return r !== void 0 ? r : Bl(t, n);
}
function eb(e, t, n) {
  for (var r in t)
    r !== '__proto__' &&
      r !== 'constructor' &&
      (r in e
        ? typeof e[r] == 'string' ||
          e[r] instanceof String ||
          typeof t[r] == 'string' ||
          t[r] instanceof String
          ? n && (e[r] = t[r])
          : eb(e[r], t[r], n)
        : (e[r] = t[r]));
  return e;
}
function jo(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var DP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
function AP(e) {
  return typeof e == 'string'
    ? e.replace(/[&<>"'\/]/g, function (t) {
        return DP[t];
      })
    : e;
}
var ju =
    typeof window < 'u' &&
    window.navigator &&
    typeof window.navigator.userAgentData > 'u' &&
    window.navigator.userAgent &&
    window.navigator.userAgent.indexOf('MSIE') > -1,
  BP = [' ', ',', '?', '!', ';'];
function FP(e, t, n) {
  (t = t || ''), (n = n || '');
  var r = BP.filter(function (c) {
    return t.indexOf(c) < 0 && n.indexOf(c) < 0;
  });
  if (r.length === 0) return !0;
  var i = new RegExp(
      '('.concat(
        r
          .map(function (c) {
            return c === '?' ? '\\?' : c;
          })
          .join('|'),
        ')',
      ),
    ),
    a = !i.test(e);
  if (!a) {
    var l = e.indexOf(n);
    l > 0 && !i.test(e.substring(0, l)) && (a = !0);
  }
  return a;
}
function tv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tv(Object(n), !0).forEach(function (r) {
          Pn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function jP(e) {
  var t = UP();
  return function () {
    var r = Zn(e),
      i;
    if (t) {
      var a = Zn(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else i = r.apply(this, arguments);
    return Ka(this, i);
  };
}
function UP() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function tb(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
  if (e) {
    if (e[t]) return e[t];
    for (var r = t.split(n), i = e, a = 0; a < r.length; ++a) {
      if (!i || (typeof i[r[a]] == 'string' && a + 1 < r.length)) return;
      if (i[r[a]] === void 0) {
        for (var l = 2, c = r.slice(a, a + l).join(n), d = i[c]; d === void 0 && r.length > a + l; )
          l++, (c = r.slice(a, a + l).join(n)), (d = i[c]);
        if (d === void 0) return;
        if (d === null) return null;
        if (t.endsWith(c)) {
          if (typeof d == 'string') return d;
          if (c && typeof d[c] == 'string') return d[c];
        }
        var h = r.slice(a + l).join(n);
        return h ? tb(d, h, n) : void 0;
      }
      i = i[r[a]];
    }
    return i;
  }
}
var $P = (function (e) {
    Fu(n, e);
    var t = jP(n);
    function n(r) {
      var i,
        a =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { ns: ['translation'], defaultNS: 'translation' };
      return (
        En(this, n),
        (i = t.call(this)),
        ju && qr.call(jr(i)),
        (i.data = r || {}),
        (i.options = a),
        i.options.keySeparator === void 0 && (i.options.keySeparator = '.'),
        i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0),
        i
      );
    }
    return (
      On(n, [
        {
          key: 'addNamespaces',
          value: function (i) {
            this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
          },
        },
        {
          key: 'removeNamespaces',
          value: function (i) {
            var a = this.options.ns.indexOf(i);
            a > -1 && this.options.ns.splice(a, 1);
          },
        },
        {
          key: 'getResource',
          value: function (i, a, l) {
            var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
              d = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator,
              h =
                c.ignoreJSONStructure !== void 0
                  ? c.ignoreJSONStructure
                  : this.options.ignoreJSONStructure,
              g = [i, a];
            l && typeof l != 'string' && (g = g.concat(l)),
              l && typeof l == 'string' && (g = g.concat(d ? l.split(d) : l)),
              i.indexOf('.') > -1 && (g = i.split('.'));
            var v = Bl(this.data, g);
            return v || !h || typeof l != 'string'
              ? v
              : tb(this.data && this.data[i] && this.data[i][a], l, d);
          },
        },
        {
          key: 'addResource',
          value: function (i, a, l, c) {
            var d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 },
              h = this.options.keySeparator;
            h === void 0 && (h = '.');
            var g = [i, a];
            l && (g = g.concat(h ? l.split(h) : l)),
              i.indexOf('.') > -1 && ((g = i.split('.')), (c = a), (a = g[1])),
              this.addNamespaces(a),
              Jg(this.data, g, c),
              d.silent || this.emit('added', i, a, l, c);
          },
        },
        {
          key: 'addResources',
          value: function (i, a, l) {
            var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
            for (var d in l)
              (typeof l[d] == 'string' ||
                Object.prototype.toString.apply(l[d]) === '[object Array]') &&
                this.addResource(i, a, d, l[d], { silent: !0 });
            c.silent || this.emit('added', i, a, l);
          },
        },
        {
          key: 'addResourceBundle',
          value: function (i, a, l, c, d) {
            var h = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1 },
              g = [i, a];
            i.indexOf('.') > -1 && ((g = i.split('.')), (c = l), (l = a), (a = g[1])),
              this.addNamespaces(a);
            var v = Bl(this.data, g) || {};
            c ? eb(v, l, d) : (v = Ds(Ds({}, v), l)),
              Jg(this.data, g, v),
              h.silent || this.emit('added', i, a, l);
          },
        },
        {
          key: 'removeResourceBundle',
          value: function (i, a) {
            this.hasResourceBundle(i, a) && delete this.data[i][a],
              this.removeNamespaces(a),
              this.emit('removed', i, a);
          },
        },
        {
          key: 'hasResourceBundle',
          value: function (i, a) {
            return this.getResource(i, a) !== void 0;
          },
        },
        {
          key: 'getResourceBundle',
          value: function (i, a) {
            return (
              a || (a = this.options.defaultNS),
              this.options.compatibilityAPI === 'v1'
                ? Ds(Ds({}, {}), this.getResource(i, a))
                : this.getResource(i, a)
            );
          },
        },
        {
          key: 'getDataByLanguage',
          value: function (i) {
            return this.data[i];
          },
        },
        {
          key: 'hasLanguageSomeTranslations',
          value: function (i) {
            var a = this.getDataByLanguage(i),
              l = (a && Object.keys(a)) || [];
            return !!l.find(function (c) {
              return a[c] && Object.keys(a[c]).length > 0;
            });
          },
        },
        {
          key: 'toJSON',
          value: function () {
            return this.data;
          },
        },
      ]),
      n
    );
  })(qr),
  nb = {
    processors: {},
    addPostProcessor: function (t) {
      this.processors[t.name] = t;
    },
    handle: function (t, n, r, i, a) {
      var l = this;
      return (
        t.forEach(function (c) {
          l.processors[c] && (n = l.processors[c].process(n, r, i, a));
        }),
        n
      );
    },
  };
function nv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nv(Object(n), !0).forEach(function (r) {
          Pn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : nv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function HP(e) {
  var t = WP();
  return function () {
    var r = Zn(e),
      i;
    if (t) {
      var a = Zn(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else i = r.apply(this, arguments);
    return Ka(this, i);
  };
}
function WP() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
var rv = {},
  ov = (function (e) {
    Fu(n, e);
    var t = HP(n);
    function n(r) {
      var i,
        a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return (
        En(this, n),
        (i = t.call(this)),
        ju && qr.call(jr(i)),
        MP(
          [
            'resourceStore',
            'languageUtils',
            'pluralResolver',
            'interpolator',
            'backendConnector',
            'i18nFormat',
            'utils',
          ],
          r,
          jr(i),
        ),
        (i.options = a),
        i.options.keySeparator === void 0 && (i.options.keySeparator = '.'),
        (i.logger = jn.create('translator')),
        i
      );
    }
    return (
      On(
        n,
        [
          {
            key: 'changeLanguage',
            value: function (i) {
              i && (this.language = i);
            },
          },
          {
            key: 'exists',
            value: function (i) {
              var a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : { interpolation: {} };
              if (i == null) return !1;
              var l = this.resolve(i, a);
              return l && l.res !== void 0;
            },
          },
          {
            key: 'extractFromKey',
            value: function (i, a) {
              var l = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
              l === void 0 && (l = ':');
              var c = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
                d = a.ns || this.options.defaultNS || [],
                h = l && i.indexOf(l) > -1,
                g =
                  !this.options.userDefinedKeySeparator &&
                  !a.keySeparator &&
                  !this.options.userDefinedNsSeparator &&
                  !a.nsSeparator &&
                  !FP(i, l, c);
              if (h && !g) {
                var v = i.match(this.interpolator.nestingRegexp);
                if (v && v.length > 0) return { key: i, namespaces: d };
                var m = i.split(l);
                (l !== c || (l === c && this.options.ns.indexOf(m[0]) > -1)) && (d = m.shift()),
                  (i = m.join(c));
              }
              return typeof d == 'string' && (d = [d]), { key: i, namespaces: d };
            },
          },
          {
            key: 'translate',
            value: function (i, a, l) {
              var c = this;
              if (
                (kn(a) !== 'object' &&
                  this.options.overloadTranslationOptionHandler &&
                  (a = this.options.overloadTranslationOptionHandler(arguments)),
                a || (a = {}),
                i == null)
              )
                return '';
              Array.isArray(i) || (i = [String(i)]);
              var d = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails,
                h = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
                g = this.extractFromKey(i[i.length - 1], a),
                v = g.key,
                m = g.namespaces,
                _ = m[m.length - 1],
                x = a.lng || this.language,
                S = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
              if (x && x.toLowerCase() === 'cimode') {
                if (S) {
                  var O = a.nsSeparator || this.options.nsSeparator;
                  return d
                    ? ((w.res = ''.concat(_).concat(O).concat(v)), w)
                    : ''.concat(_).concat(O).concat(v);
                }
                return d ? ((w.res = v), w) : v;
              }
              var w = this.resolve(i, a),
                b = w && w.res,
                k = (w && w.usedKey) || v,
                E = (w && w.exactUsedKey) || v,
                D = Object.prototype.toString.apply(b),
                F = ['[object Number]', '[object Function]', '[object RegExp]'],
                W = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays,
                Q = !this.i18nFormat || this.i18nFormat.handleAsObject,
                te = typeof b != 'string' && typeof b != 'boolean' && typeof b != 'number';
              if (
                Q &&
                b &&
                te &&
                F.indexOf(D) < 0 &&
                !(typeof W == 'string' && D === '[object Array]')
              ) {
                if (!a.returnObjects && !this.options.returnObjects) {
                  this.options.returnedObjectHandler ||
                    this.logger.warn(
                      'accessing an object - but returnObjects options is not enabled!',
                    );
                  var q = this.options.returnedObjectHandler
                    ? this.options.returnedObjectHandler(k, b, It(It({}, a), {}, { ns: m }))
                    : "key '"
                        .concat(v, ' (')
                        .concat(this.language, ")' returned an object instead of string.");
                  return d ? ((w.res = q), w) : q;
                }
                if (h) {
                  var ue = D === '[object Array]',
                    ge = ue ? [] : {},
                    Ze = ue ? E : k;
                  for (var ce in b)
                    if (Object.prototype.hasOwnProperty.call(b, ce)) {
                      var Ne = ''.concat(Ze).concat(h).concat(ce);
                      (ge[ce] = this.translate(Ne, It(It({}, a), { joinArrays: !1, ns: m }))),
                        ge[ce] === Ne && (ge[ce] = b[ce]);
                    }
                  b = ge;
                }
              } else if (Q && typeof W == 'string' && D === '[object Array]')
                (b = b.join(W)), b && (b = this.extendTranslation(b, i, a, l));
              else {
                var X = !1,
                  de = !1,
                  I = a.count !== void 0 && typeof a.count != 'string',
                  re = n.hasDefaultValue(a),
                  H = I ? this.pluralResolver.getSuffix(x, a.count, a) : '',
                  P = a['defaultValue'.concat(H)] || a.defaultValue;
                !this.isValidLookup(b) && re && ((X = !0), (b = P)),
                  this.isValidLookup(b) || ((de = !0), (b = v));
                var R =
                    a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                  z = R && de ? void 0 : b,
                  j = re && P !== b && this.options.updateMissing;
                if (de || X || j) {
                  if ((this.logger.log(j ? 'updateKey' : 'missingKey', x, _, v, j ? P : b), h)) {
                    var K = this.resolve(v, It(It({}, a), {}, { keySeparator: !1 }));
                    K &&
                      K.res &&
                      this.logger.warn(
                        'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                      );
                  }
                  var Y = [],
                    oe = this.languageUtils.getFallbackCodes(
                      this.options.fallbackLng,
                      a.lng || this.language,
                    );
                  if (this.options.saveMissingTo === 'fallback' && oe && oe[0])
                    for (var se = 0; se < oe.length; se++) Y.push(oe[se]);
                  else
                    this.options.saveMissingTo === 'all'
                      ? (Y = this.languageUtils.toResolveHierarchy(a.lng || this.language))
                      : Y.push(a.lng || this.language);
                  var et = function (Ae, Be, ot) {
                    var ke = re && ot !== b ? ot : z;
                    c.options.missingKeyHandler
                      ? c.options.missingKeyHandler(Ae, _, Be, ke, j, a)
                      : c.backendConnector &&
                        c.backendConnector.saveMissing &&
                        c.backendConnector.saveMissing(Ae, _, Be, ke, j, a),
                      c.emit('missingKey', Ae, _, Be, b);
                  };
                  this.options.saveMissing &&
                    (this.options.saveMissingPlurals && I
                      ? Y.forEach(function (Ve) {
                          c.pluralResolver.getSuffixes(Ve, a).forEach(function (Ae) {
                            et([Ve], v + Ae, a['defaultValue'.concat(Ae)] || P);
                          });
                        })
                      : et(Y, v, P));
                }
                (b = this.extendTranslation(b, i, a, w, l)),
                  de &&
                    b === v &&
                    this.options.appendNamespaceToMissingKey &&
                    (b = ''.concat(_, ':').concat(v)),
                  (de || X) &&
                    this.options.parseMissingKeyHandler &&
                    (this.options.compatibilityAPI !== 'v1'
                      ? (b = this.options.parseMissingKeyHandler(
                          this.options.appendNamespaceToMissingKey
                            ? ''.concat(_, ':').concat(v)
                            : v,
                          X ? b : void 0,
                        ))
                      : (b = this.options.parseMissingKeyHandler(b)));
              }
              return d ? ((w.res = b), w) : b;
            },
          },
          {
            key: 'extendTranslation',
            value: function (i, a, l, c, d) {
              var h = this;
              if (this.i18nFormat && this.i18nFormat.parse)
                i = this.i18nFormat.parse(
                  i,
                  It(It({}, this.options.interpolation.defaultVariables), l),
                  c.usedLng,
                  c.usedNS,
                  c.usedKey,
                  { resolved: c },
                );
              else if (!l.skipInterpolation) {
                l.interpolation &&
                  this.interpolator.init(
                    It(It({}, l), {
                      interpolation: It(It({}, this.options.interpolation), l.interpolation),
                    }),
                  );
                var g =
                    typeof i == 'string' &&
                    (l && l.interpolation && l.interpolation.skipOnVariables !== void 0
                      ? l.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables),
                  v;
                if (g) {
                  var m = i.match(this.interpolator.nestingRegexp);
                  v = m && m.length;
                }
                var _ = l.replace && typeof l.replace != 'string' ? l.replace : l;
                if (
                  (this.options.interpolation.defaultVariables &&
                    (_ = It(It({}, this.options.interpolation.defaultVariables), _)),
                  (i = this.interpolator.interpolate(i, _, l.lng || this.language, l)),
                  g)
                ) {
                  var x = i.match(this.interpolator.nestingRegexp),
                    S = x && x.length;
                  v < S && (l.nest = !1);
                }
                l.nest !== !1 &&
                  (i = this.interpolator.nest(
                    i,
                    function () {
                      for (var b = arguments.length, k = new Array(b), E = 0; E < b; E++)
                        k[E] = arguments[E];
                      return d && d[0] === k[0] && !l.context
                        ? (h.logger.warn(
                            'It seems you are nesting recursively key: '
                              .concat(k[0], ' in key: ')
                              .concat(a[0]),
                          ),
                          null)
                        : h.translate.apply(h, k.concat([a]));
                    },
                    l,
                  )),
                  l.interpolation && this.interpolator.reset();
              }
              var O = l.postProcess || this.options.postProcess,
                w = typeof O == 'string' ? [O] : O;
              return (
                i != null &&
                  w &&
                  w.length &&
                  l.applyPostProcessor !== !1 &&
                  (i = nb.handle(
                    w,
                    i,
                    a,
                    this.options && this.options.postProcessPassResolved
                      ? It({ i18nResolved: c }, l)
                      : l,
                    this,
                  )),
                i
              );
            },
          },
          {
            key: 'resolve',
            value: function (i) {
              var a = this,
                l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                c,
                d,
                h,
                g,
                v;
              return (
                typeof i == 'string' && (i = [i]),
                i.forEach(function (m) {
                  if (!a.isValidLookup(c)) {
                    var _ = a.extractFromKey(m, l),
                      x = _.key;
                    d = x;
                    var S = _.namespaces;
                    a.options.fallbackNS && (S = S.concat(a.options.fallbackNS));
                    var O = l.count !== void 0 && typeof l.count != 'string',
                      w = O && !l.ordinal && l.count === 0 && a.pluralResolver.shouldUseIntlApi(),
                      b =
                        l.context !== void 0 &&
                        (typeof l.context == 'string' || typeof l.context == 'number') &&
                        l.context !== '',
                      k = l.lngs
                        ? l.lngs
                        : a.languageUtils.toResolveHierarchy(l.lng || a.language, l.fallbackLng);
                    S.forEach(function (E) {
                      a.isValidLookup(c) ||
                        ((v = E),
                        !rv[''.concat(k[0], '-').concat(E)] &&
                          a.utils &&
                          a.utils.hasLoadedNamespace &&
                          !a.utils.hasLoadedNamespace(v) &&
                          ((rv[''.concat(k[0], '-').concat(E)] = !0),
                          a.logger.warn(
                            'key "'
                              .concat(d, '" for languages "')
                              .concat(k.join(', '), `" won't get resolved as namespace "`)
                              .concat(v, '" was not yet loaded'),
                            'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                          )),
                        k.forEach(function (D) {
                          if (!a.isValidLookup(c)) {
                            g = D;
                            var F = [x];
                            if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                              a.i18nFormat.addLookupKeys(F, x, D, E, l);
                            else {
                              var W;
                              O && (W = a.pluralResolver.getSuffix(D, l.count, l));
                              var Q = ''.concat(a.options.pluralSeparator, 'zero');
                              if ((O && (F.push(x + W), w && F.push(x + Q)), b)) {
                                var te = ''
                                  .concat(x)
                                  .concat(a.options.contextSeparator)
                                  .concat(l.context);
                                F.push(te), O && (F.push(te + W), w && F.push(te + Q));
                              }
                            }
                            for (var q; (q = F.pop()); )
                              a.isValidLookup(c) || ((h = q), (c = a.getResource(D, E, q, l)));
                          }
                        }));
                    });
                  }
                }),
                { res: c, usedKey: d, exactUsedKey: h, usedLng: g, usedNS: v }
              );
            },
          },
          {
            key: 'isValidLookup',
            value: function (i) {
              return (
                i !== void 0 &&
                !(!this.options.returnNull && i === null) &&
                !(!this.options.returnEmptyString && i === '')
              );
            },
          },
          {
            key: 'getResource',
            value: function (i, a, l) {
              var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
              return this.i18nFormat && this.i18nFormat.getResource
                ? this.i18nFormat.getResource(i, a, l, c)
                : this.resourceStore.getResource(i, a, l, c);
            },
          },
        ],
        [
          {
            key: 'hasDefaultValue',
            value: function (i) {
              var a = 'defaultValue';
              for (var l in i)
                if (
                  Object.prototype.hasOwnProperty.call(i, l) &&
                  a === l.substring(0, a.length) &&
                  i[l] !== void 0
                )
                  return !0;
              return !1;
            },
          },
        ],
      ),
      n
    );
  })(qr);
function Xc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var iv = (function () {
    function e(t) {
      En(this, e),
        (this.options = t),
        (this.supportedLngs = this.options.supportedLngs || !1),
        (this.logger = jn.create('languageUtils'));
    }
    return (
      On(e, [
        {
          key: 'getScriptPartFromCode',
          value: function (n) {
            if (!n || n.indexOf('-') < 0) return null;
            var r = n.split('-');
            return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === 'x')
              ? null
              : this.formatLanguageCode(r.join('-'));
          },
        },
        {
          key: 'getLanguagePartFromCode',
          value: function (n) {
            if (!n || n.indexOf('-') < 0) return n;
            var r = n.split('-');
            return this.formatLanguageCode(r[0]);
          },
        },
        {
          key: 'formatLanguageCode',
          value: function (n) {
            if (typeof n == 'string' && n.indexOf('-') > -1) {
              var r = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'],
                i = n.split('-');
              return (
                this.options.lowerCaseLng
                  ? (i = i.map(function (a) {
                      return a.toLowerCase();
                    }))
                  : i.length === 2
                  ? ((i[0] = i[0].toLowerCase()),
                    (i[1] = i[1].toUpperCase()),
                    r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Xc(i[1].toLowerCase())))
                  : i.length === 3 &&
                    ((i[0] = i[0].toLowerCase()),
                    i[1].length === 2 && (i[1] = i[1].toUpperCase()),
                    i[0] !== 'sgn' && i[2].length === 2 && (i[2] = i[2].toUpperCase()),
                    r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Xc(i[1].toLowerCase())),
                    r.indexOf(i[2].toLowerCase()) > -1 && (i[2] = Xc(i[2].toLowerCase()))),
                i.join('-')
              );
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? n.toLowerCase() : n;
          },
        },
        {
          key: 'isSupportedCode',
          value: function (n) {
            return (
              (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
                (n = this.getLanguagePartFromCode(n)),
              !this.supportedLngs ||
                !this.supportedLngs.length ||
                this.supportedLngs.indexOf(n) > -1
            );
          },
        },
        {
          key: 'getBestMatchFromCodes',
          value: function (n) {
            var r = this;
            if (!n) return null;
            var i;
            return (
              n.forEach(function (a) {
                if (!i) {
                  var l = r.formatLanguageCode(a);
                  (!r.options.supportedLngs || r.isSupportedCode(l)) && (i = l);
                }
              }),
              !i &&
                this.options.supportedLngs &&
                n.forEach(function (a) {
                  if (!i) {
                    var l = r.getLanguagePartFromCode(a);
                    if (r.isSupportedCode(l)) return (i = l);
                    i = r.options.supportedLngs.find(function (c) {
                      if (c.indexOf(l) === 0) return c;
                    });
                  }
                }),
              i || (i = this.getFallbackCodes(this.options.fallbackLng)[0]),
              i
            );
          },
        },
        {
          key: 'getFallbackCodes',
          value: function (n, r) {
            if (!n) return [];
            if (
              (typeof n == 'function' && (n = n(r)),
              typeof n == 'string' && (n = [n]),
              Object.prototype.toString.apply(n) === '[object Array]')
            )
              return n;
            if (!r) return n.default || [];
            var i = n[r];
            return (
              i || (i = n[this.getScriptPartFromCode(r)]),
              i || (i = n[this.formatLanguageCode(r)]),
              i || (i = n[this.getLanguagePartFromCode(r)]),
              i || (i = n.default),
              i || []
            );
          },
        },
        {
          key: 'toResolveHierarchy',
          value: function (n, r) {
            var i = this,
              a = this.getFallbackCodes(r || this.options.fallbackLng || [], n),
              l = [],
              c = function (h) {
                h &&
                  (i.isSupportedCode(h)
                    ? l.push(h)
                    : i.logger.warn(
                        'rejecting language code not found in supportedLngs: '.concat(h),
                      ));
              };
            return (
              typeof n == 'string' && n.indexOf('-') > -1
                ? (this.options.load !== 'languageOnly' && c(this.formatLanguageCode(n)),
                  this.options.load !== 'languageOnly' &&
                    this.options.load !== 'currentOnly' &&
                    c(this.getScriptPartFromCode(n)),
                  this.options.load !== 'currentOnly' && c(this.getLanguagePartFromCode(n)))
                : typeof n == 'string' && c(this.formatLanguageCode(n)),
              a.forEach(function (d) {
                l.indexOf(d) < 0 && c(i.formatLanguageCode(d));
              }),
              l
            );
          },
        },
      ]),
      e
    );
  })(),
  ZP = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    { lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  VP = {
    1: function (t) {
      return Number(t > 1);
    },
    2: function (t) {
      return Number(t != 1);
    },
    3: function (t) {
      return 0;
    },
    4: function (t) {
      return Number(
        t % 10 == 1 && t % 100 != 11
          ? 0
          : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
          ? 1
          : 2,
      );
    },
    5: function (t) {
      return Number(
        t == 0
          ? 0
          : t == 1
          ? 1
          : t == 2
          ? 2
          : t % 100 >= 3 && t % 100 <= 10
          ? 3
          : t % 100 >= 11
          ? 4
          : 5,
      );
    },
    6: function (t) {
      return Number(t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2);
    },
    7: function (t) {
      return Number(
        t == 1 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
      );
    },
    8: function (t) {
      return Number(t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3);
    },
    9: function (t) {
      return Number(t >= 2);
    },
    10: function (t) {
      return Number(t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4);
    },
    11: function (t) {
      return Number(t == 1 || t == 11 ? 0 : t == 2 || t == 12 ? 1 : t > 2 && t < 20 ? 2 : 3);
    },
    12: function (t) {
      return Number(t % 10 != 1 || t % 100 == 11);
    },
    13: function (t) {
      return Number(t !== 0);
    },
    14: function (t) {
      return Number(t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3);
    },
    15: function (t) {
      return Number(
        t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
      );
    },
    16: function (t) {
      return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2);
    },
    17: function (t) {
      return Number(t == 1 || (t % 10 == 1 && t % 100 != 11) ? 0 : 1);
    },
    18: function (t) {
      return Number(t == 0 ? 0 : t == 1 ? 1 : 2);
    },
    19: function (t) {
      return Number(
        t == 1
          ? 0
          : t == 0 || (t % 100 > 1 && t % 100 < 11)
          ? 1
          : t % 100 > 10 && t % 100 < 20
          ? 2
          : 3,
      );
    },
    20: function (t) {
      return Number(t == 1 ? 0 : t == 0 || (t % 100 > 0 && t % 100 < 20) ? 1 : 2);
    },
    21: function (t) {
      return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0);
    },
    22: function (t) {
      return Number(t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3);
    },
  },
  qP = ['v1', 'v2', 'v3'],
  av = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function QP() {
  var e = {};
  return (
    ZP.forEach(function (t) {
      t.lngs.forEach(function (n) {
        e[n] = { numbers: t.nr, plurals: VP[t.fc] };
      });
    }),
    e
  );
}
var KP = (function () {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    En(this, e),
      (this.languageUtils = t),
      (this.options = n),
      (this.logger = jn.create('pluralResolver')),
      (!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
        )),
      (this.rules = QP());
  }
  return (
    On(e, [
      {
        key: 'addRule',
        value: function (n, r) {
          this.rules[n] = r;
        },
      },
      {
        key: 'getRule',
        value: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(n, { type: r.ordinal ? 'ordinal' : 'cardinal' });
            } catch {
              return;
            }
          return this.rules[n] || this.rules[this.languageUtils.getLanguagePartFromCode(n)];
        },
      },
      {
        key: 'needsPlural',
        value: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = this.getRule(n, r);
          return this.shouldUseIntlApi()
            ? i && i.resolvedOptions().pluralCategories.length > 1
            : i && i.numbers.length > 1;
        },
      },
      {
        key: 'getPluralFormsOfKey',
        value: function (n, r) {
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.getSuffixes(n, i).map(function (a) {
            return ''.concat(r).concat(a);
          });
        },
      },
      {
        key: 'getSuffixes',
        value: function (n) {
          var r = this,
            i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = this.getRule(n, i);
          return a
            ? this.shouldUseIntlApi()
              ? a
                  .resolvedOptions()
                  .pluralCategories.sort(function (l, c) {
                    return av[l] - av[c];
                  })
                  .map(function (l) {
                    return ''.concat(r.options.prepend).concat(l);
                  })
              : a.numbers.map(function (l) {
                  return r.getSuffix(n, l, i);
                })
            : [];
        },
      },
      {
        key: 'getSuffix',
        value: function (n, r) {
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = this.getRule(n, i);
          return a
            ? this.shouldUseIntlApi()
              ? ''.concat(this.options.prepend).concat(a.select(r))
              : this.getSuffixRetroCompatible(a, r)
            : (this.logger.warn('no plural rule found for: '.concat(n)), '');
        },
      },
      {
        key: 'getSuffixRetroCompatible',
        value: function (n, r) {
          var i = this,
            a = n.noAbs ? n.plurals(r) : n.plurals(Math.abs(r)),
            l = n.numbers[a];
          this.options.simplifyPluralSuffix &&
            n.numbers.length === 2 &&
            n.numbers[0] === 1 &&
            (l === 2 ? (l = 'plural') : l === 1 && (l = ''));
          var c = function () {
            return i.options.prepend && l.toString()
              ? i.options.prepend + l.toString()
              : l.toString();
          };
          return this.options.compatibilityJSON === 'v1'
            ? l === 1
              ? ''
              : typeof l == 'number'
              ? '_plural_'.concat(l.toString())
              : c()
            : this.options.compatibilityJSON === 'v2' ||
              (this.options.simplifyPluralSuffix && n.numbers.length === 2 && n.numbers[0] === 1)
            ? c()
            : this.options.prepend && a.toString()
            ? this.options.prepend + a.toString()
            : a.toString();
        },
      },
      {
        key: 'shouldUseIntlApi',
        value: function () {
          return !qP.includes(this.options.compatibilityJSON);
        },
      },
    ]),
    e
  );
})();
function sv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sv(Object(n), !0).forEach(function (r) {
          Pn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : sv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var GP = (function () {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    En(this, e),
      (this.logger = jn.create('interpolator')),
      (this.options = t),
      (this.format =
        (t.interpolation && t.interpolation.format) ||
        function (n) {
          return n;
        }),
      this.init(t);
  }
  return (
    On(e, [
      {
        key: 'init',
        value: function () {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          n.interpolation || (n.interpolation = { escapeValue: !0 });
          var r = n.interpolation;
          (this.escape = r.escape !== void 0 ? r.escape : AP),
            (this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0),
            (this.useRawValueToEscape =
              r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1),
            (this.prefix = r.prefix ? jo(r.prefix) : r.prefixEscaped || '{{'),
            (this.suffix = r.suffix ? jo(r.suffix) : r.suffixEscaped || '}}'),
            (this.formatSeparator = r.formatSeparator
              ? r.formatSeparator
              : r.formatSeparator || ','),
            (this.unescapePrefix = r.unescapeSuffix ? '' : r.unescapePrefix || '-'),
            (this.unescapeSuffix = this.unescapePrefix ? '' : r.unescapeSuffix || ''),
            (this.nestingPrefix = r.nestingPrefix
              ? jo(r.nestingPrefix)
              : r.nestingPrefixEscaped || jo('$t(')),
            (this.nestingSuffix = r.nestingSuffix
              ? jo(r.nestingSuffix)
              : r.nestingSuffixEscaped || jo(')')),
            (this.nestingOptionsSeparator = r.nestingOptionsSeparator
              ? r.nestingOptionsSeparator
              : r.nestingOptionsSeparator || ','),
            (this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3),
            (this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1),
            this.resetRegExp();
        },
      },
      {
        key: 'reset',
        value: function () {
          this.options && this.init(this.options);
        },
      },
      {
        key: 'resetRegExp',
        value: function () {
          var n = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
          this.regexp = new RegExp(n, 'g');
          var r = ''
            .concat(this.prefix)
            .concat(this.unescapePrefix, '(.+?)')
            .concat(this.unescapeSuffix)
            .concat(this.suffix);
          this.regexpUnescape = new RegExp(r, 'g');
          var i = ''.concat(this.nestingPrefix, '(.+?)').concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(i, 'g');
        },
      },
      {
        key: 'interpolate',
        value: function (n, r, i, a) {
          var l = this,
            c,
            d,
            h,
            g =
              (this.options &&
                this.options.interpolation &&
                this.options.interpolation.defaultVariables) ||
              {};
          function v(O) {
            return O.replace(/\$/g, '$$$$');
          }
          var m = function (w) {
            if (w.indexOf(l.formatSeparator) < 0) {
              var b = ev(r, g, w);
              return l.alwaysFormat
                ? l.format(b, void 0, i, gn(gn(gn({}, a), r), {}, { interpolationkey: w }))
                : b;
            }
            var k = w.split(l.formatSeparator),
              E = k.shift().trim(),
              D = k.join(l.formatSeparator).trim();
            return l.format(ev(r, g, E), D, i, gn(gn(gn({}, a), r), {}, { interpolationkey: E }));
          };
          this.resetRegExp();
          var _ = (a && a.missingInterpolationHandler) || this.options.missingInterpolationHandler,
            x =
              a && a.interpolation && a.interpolation.skipOnVariables !== void 0
                ? a.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables,
            S = [
              {
                regex: this.regexpUnescape,
                safeValue: function (w) {
                  return v(w);
                },
              },
              {
                regex: this.regexp,
                safeValue: function (w) {
                  return l.escapeValue ? v(l.escape(w)) : v(w);
                },
              },
            ];
          return (
            S.forEach(function (O) {
              for (h = 0; (c = O.regex.exec(n)); ) {
                var w = c[1].trim();
                if (((d = m(w)), d === void 0))
                  if (typeof _ == 'function') {
                    var b = _(n, c, a);
                    d = typeof b == 'string' ? b : '';
                  } else if (a && a.hasOwnProperty(w)) d = '';
                  else if (x) {
                    d = c[0];
                    continue;
                  } else
                    l.logger.warn(
                      'missed to pass in variable '.concat(w, ' for interpolating ').concat(n),
                    ),
                      (d = '');
                else typeof d != 'string' && !l.useRawValueToEscape && (d = Yg(d));
                var k = O.safeValue(d);
                if (
                  ((n = n.replace(c[0], k)),
                  x
                    ? ((O.regex.lastIndex += d.length), (O.regex.lastIndex -= c[0].length))
                    : (O.regex.lastIndex = 0),
                  h++,
                  h >= l.maxReplaces)
                )
                  break;
              }
            }),
            n
          );
        },
      },
      {
        key: 'nest',
        value: function (n, r) {
          var i = this,
            a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            l,
            c,
            d;
          function h(_, x) {
            var S = this.nestingOptionsSeparator;
            if (_.indexOf(S) < 0) return _;
            var O = _.split(new RegExp(''.concat(S, '[ ]*{'))),
              w = '{'.concat(O[1]);
            (_ = O[0]), (w = this.interpolate(w, d));
            var b = w.match(/'/g),
              k = w.match(/"/g);
            ((b && b.length % 2 === 0 && !k) || k.length % 2 !== 0) && (w = w.replace(/'/g, '"'));
            try {
              (d = JSON.parse(w)), x && (d = gn(gn({}, x), d));
            } catch (E) {
              return (
                this.logger.warn('failed parsing options string in nesting for key '.concat(_), E),
                ''.concat(_).concat(S).concat(w)
              );
            }
            return delete d.defaultValue, _;
          }
          for (; (l = this.nestingRegexp.exec(n)); ) {
            var g = [];
            (d = gn({}, a)),
              (d = d.replace && typeof d.replace != 'string' ? d.replace : d),
              (d.applyPostProcessor = !1),
              delete d.defaultValue;
            var v = !1;
            if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
              var m = l[1].split(this.formatSeparator).map(function (_) {
                return _.trim();
              });
              (l[1] = m.shift()), (g = m), (v = !0);
            }
            if (((c = r(h.call(this, l[1].trim(), d), d)), c && l[0] === n && typeof c != 'string'))
              return c;
            typeof c != 'string' && (c = Yg(c)),
              c ||
                (this.logger.warn('missed to resolve '.concat(l[1], ' for nesting ').concat(n)),
                (c = '')),
              v &&
                (c = g.reduce(function (_, x) {
                  return i.format(
                    _,
                    x,
                    a.lng,
                    gn(gn({}, a), {}, { interpolationkey: l[1].trim() }),
                  );
                }, c.trim())),
              (n = n.replace(l[0], c)),
              (this.regexp.lastIndex = 0);
          }
          return n;
        },
      },
    ]),
    e
  );
})();
function lv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lv(Object(n), !0).forEach(function (r) {
          Pn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : lv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function XP(e) {
  var t = e.toLowerCase().trim(),
    n = {};
  if (e.indexOf('(') > -1) {
    var r = e.split('(');
    t = r[0].toLowerCase().trim();
    var i = r[1].substring(0, r[1].length - 1);
    if (t === 'currency' && i.indexOf(':') < 0) n.currency || (n.currency = i.trim());
    else if (t === 'relativetime' && i.indexOf(':') < 0) n.range || (n.range = i.trim());
    else {
      var a = i.split(';');
      a.forEach(function (l) {
        if (l) {
          var c = l.split(':'),
            d = zP(c),
            h = d[0],
            g = d.slice(1),
            v = g
              .join(':')
              .trim()
              .replace(/^'+|'+$/g, '');
          n[h.trim()] || (n[h.trim()] = v),
            v === 'false' && (n[h.trim()] = !1),
            v === 'true' && (n[h.trim()] = !0),
            isNaN(v) || (n[h.trim()] = parseInt(v, 10));
        }
      });
    }
  }
  return { formatName: t, formatOptions: n };
}
function Uo(e) {
  var t = {};
  return function (r, i, a) {
    var l = i + JSON.stringify(a),
      c = t[l];
    return c || ((c = e(i, a)), (t[l] = c)), c(r);
  };
}
var YP = (function () {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    En(this, e),
      (this.logger = jn.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: Uo(function (n, r) {
          var i = new Intl.NumberFormat(n, r);
          return function (a) {
            return i.format(a);
          };
        }),
        currency: Uo(function (n, r) {
          var i = new Intl.NumberFormat(n, wr(wr({}, r), {}, { style: 'currency' }));
          return function (a) {
            return i.format(a);
          };
        }),
        datetime: Uo(function (n, r) {
          var i = new Intl.DateTimeFormat(n, wr({}, r));
          return function (a) {
            return i.format(a);
          };
        }),
        relativetime: Uo(function (n, r) {
          var i = new Intl.RelativeTimeFormat(n, wr({}, r));
          return function (a) {
            return i.format(a, r.range || 'day');
          };
        }),
        list: Uo(function (n, r) {
          var i = new Intl.ListFormat(n, wr({}, r));
          return function (a) {
            return i.format(a);
          };
        }),
      }),
      this.init(t);
  }
  return (
    On(e, [
      {
        key: 'init',
        value: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { interpolation: {} },
            i = r.interpolation;
          this.formatSeparator = i.formatSeparator ? i.formatSeparator : i.formatSeparator || ',';
        },
      },
      {
        key: 'add',
        value: function (n, r) {
          this.formats[n.toLowerCase().trim()] = r;
        },
      },
      {
        key: 'addCached',
        value: function (n, r) {
          this.formats[n.toLowerCase().trim()] = Uo(r);
        },
      },
      {
        key: 'format',
        value: function (n, r, i, a) {
          var l = this,
            c = r.split(this.formatSeparator),
            d = c.reduce(function (h, g) {
              var v = XP(g),
                m = v.formatName,
                _ = v.formatOptions;
              if (l.formats[m]) {
                var x = h;
                try {
                  var S = (a && a.formatParams && a.formatParams[a.interpolationkey]) || {},
                    O = S.locale || S.lng || a.locale || a.lng || i;
                  x = l.formats[m](h, O, wr(wr(wr({}, _), a), S));
                } catch (w) {
                  l.logger.warn(w);
                }
                return x;
              } else l.logger.warn('there was no format function for '.concat(m));
              return h;
            }, n);
          return d;
        },
      },
    ]),
    e
  );
})();
function uv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function cv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uv(Object(n), !0).forEach(function (r) {
          Pn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : uv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function JP(e) {
  var t = e2();
  return function () {
    var r = Zn(e),
      i;
    if (t) {
      var a = Zn(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else i = r.apply(this, arguments);
    return Ka(this, i);
  };
}
function e2() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function t2(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
var n2 = (function (e) {
  Fu(n, e);
  var t = JP(n);
  function n(r, i, a) {
    var l,
      c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (
      En(this, n),
      (l = t.call(this)),
      ju && qr.call(jr(l)),
      (l.backend = r),
      (l.store = i),
      (l.services = a),
      (l.languageUtils = a.languageUtils),
      (l.options = c),
      (l.logger = jn.create('backendConnector')),
      (l.waitingReads = []),
      (l.maxParallelReads = c.maxParallelReads || 10),
      (l.readingCalls = 0),
      (l.maxRetries = c.maxRetries >= 0 ? c.maxRetries : 5),
      (l.retryTimeout = c.retryTimeout >= 1 ? c.retryTimeout : 350),
      (l.state = {}),
      (l.queue = []),
      l.backend && l.backend.init && l.backend.init(a, c.backend, c),
      l
    );
  }
  return (
    On(n, [
      {
        key: 'queueLoad',
        value: function (i, a, l, c) {
          var d = this,
            h = {},
            g = {},
            v = {},
            m = {};
          return (
            i.forEach(function (_) {
              var x = !0;
              a.forEach(function (S) {
                var O = ''.concat(_, '|').concat(S);
                !l.reload && d.store.hasResourceBundle(_, S)
                  ? (d.state[O] = 2)
                  : d.state[O] < 0 ||
                    (d.state[O] === 1
                      ? g[O] === void 0 && (g[O] = !0)
                      : ((d.state[O] = 1),
                        (x = !1),
                        g[O] === void 0 && (g[O] = !0),
                        h[O] === void 0 && (h[O] = !0),
                        m[S] === void 0 && (m[S] = !0)));
              }),
                x || (v[_] = !0);
            }),
            (Object.keys(h).length || Object.keys(g).length) &&
              this.queue.push({
                pending: g,
                pendingCount: Object.keys(g).length,
                loaded: {},
                errors: [],
                callback: c,
              }),
            {
              toLoad: Object.keys(h),
              pending: Object.keys(g),
              toLoadLanguages: Object.keys(v),
              toLoadNamespaces: Object.keys(m),
            }
          );
        },
      },
      {
        key: 'loaded',
        value: function (i, a, l) {
          var c = i.split('|'),
            d = c[0],
            h = c[1];
          a && this.emit('failedLoading', d, h, a),
            l && this.store.addResourceBundle(d, h, l),
            (this.state[i] = a ? -1 : 2);
          var g = {};
          this.queue.forEach(function (v) {
            NP(v.loaded, [d], h),
              t2(v, i),
              a && v.errors.push(a),
              v.pendingCount === 0 &&
                !v.done &&
                (Object.keys(v.loaded).forEach(function (m) {
                  g[m] || (g[m] = {});
                  var _ = v.loaded[m];
                  _.length &&
                    _.forEach(function (x) {
                      g[m][x] === void 0 && (g[m][x] = !0);
                    });
                }),
                (v.done = !0),
                v.errors.length ? v.callback(v.errors) : v.callback());
          }),
            this.emit('loaded', g),
            (this.queue = this.queue.filter(function (v) {
              return !v.done;
            }));
        },
      },
      {
        key: 'read',
        value: function (i, a, l) {
          var c = this,
            d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
            h = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
            g = arguments.length > 5 ? arguments[5] : void 0;
          if (!i.length) return g(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({ lng: i, ns: a, fcName: l, tried: d, wait: h, callback: g });
            return;
          }
          this.readingCalls++;
          var v = function (S, O) {
              if ((c.readingCalls--, c.waitingReads.length > 0)) {
                var w = c.waitingReads.shift();
                c.read(w.lng, w.ns, w.fcName, w.tried, w.wait, w.callback);
              }
              if (S && O && d < c.maxRetries) {
                setTimeout(function () {
                  c.read.call(c, i, a, l, d + 1, h * 2, g);
                }, h);
                return;
              }
              g(S, O);
            },
            m = this.backend[l].bind(this.backend);
          if (m.length === 2) {
            try {
              var _ = m(i, a);
              _ && typeof _.then == 'function'
                ? _.then(function (x) {
                    return v(null, x);
                  }).catch(v)
                : v(null, _);
            } catch (x) {
              v(x);
            }
            return;
          }
          return m(i, a, v);
        },
      },
      {
        key: 'prepareLoading',
        value: function (i, a) {
          var l = this,
            c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            d = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn('No backend was added via i18next.use. Will not load resources.'),
              d && d()
            );
          typeof i == 'string' && (i = this.languageUtils.toResolveHierarchy(i)),
            typeof a == 'string' && (a = [a]);
          var h = this.queueLoad(i, a, c, d);
          if (!h.toLoad.length) return h.pending.length || d(), null;
          h.toLoad.forEach(function (g) {
            l.loadOne(g);
          });
        },
      },
      {
        key: 'load',
        value: function (i, a, l) {
          this.prepareLoading(i, a, {}, l);
        },
      },
      {
        key: 'reload',
        value: function (i, a, l) {
          this.prepareLoading(i, a, { reload: !0 }, l);
        },
      },
      {
        key: 'loadOne',
        value: function (i) {
          var a = this,
            l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '',
            c = i.split('|'),
            d = c[0],
            h = c[1];
          this.read(d, h, 'read', void 0, void 0, function (g, v) {
            g &&
              a.logger.warn(
                ''.concat(l, 'loading namespace ').concat(h, ' for language ').concat(d, ' failed'),
                g,
              ),
              !g &&
                v &&
                a.logger.log(
                  ''.concat(l, 'loaded namespace ').concat(h, ' for language ').concat(d),
                  v,
                ),
              a.loaded(i, g, v);
          });
        },
      },
      {
        key: 'saveMissing',
        value: function (i, a, l, c, d) {
          var h = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
            g = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function () {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(a)
          ) {
            this.logger.warn(
              'did not save key "'
                .concat(l, '" as the namespace "')
                .concat(a, '" was not yet loaded'),
              'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
            );
            return;
          }
          if (!(l == null || l === '')) {
            if (this.backend && this.backend.create) {
              var v = cv(cv({}, h), {}, { isUpdate: d }),
                m = this.backend.create.bind(this.backend);
              if (m.length < 6)
                try {
                  var _;
                  m.length === 5 ? (_ = m(i, a, l, c, v)) : (_ = m(i, a, l, c)),
                    _ && typeof _.then == 'function'
                      ? _.then(function (x) {
                          return g(null, x);
                        }).catch(g)
                      : g(null, _);
                } catch (x) {
                  g(x);
                }
              else m(i, a, l, c, g, v);
            }
            !i || !i[0] || this.store.addResource(i[0], a, l, c);
          }
        },
      },
    ]),
    n
  );
})(qr);
function dv() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !0,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (t) {
      var n = {};
      if (
        (kn(t[1]) === 'object' && (n = t[1]),
        typeof t[1] == 'string' && (n.defaultValue = t[1]),
        typeof t[2] == 'string' && (n.tDescription = t[2]),
        kn(t[2]) === 'object' || kn(t[3]) === 'object')
      ) {
        var r = t[3] || t[2];
        Object.keys(r).forEach(function (i) {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: function (t, n, r, i) {
        return t;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function fv(e) {
  return (
    typeof e.ns == 'string' && (e.ns = [e.ns]),
    typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  );
}
function hv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hv(Object(n), !0).forEach(function (r) {
          Pn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : hv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function r2(e) {
  var t = o2();
  return function () {
    var r = Zn(e),
      i;
    if (t) {
      var a = Zn(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else i = r.apply(this, arguments);
    return Ka(this, i);
  };
}
function o2() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function As() {}
function i2(e) {
  var t = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
  t.forEach(function (n) {
    typeof e[n] == 'function' && (e[n] = e[n].bind(e));
  });
}
var Fl = (function (e) {
  Fu(n, e);
  var t = r2(n);
  function n() {
    var r,
      i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (En(this, n),
      (r = t.call(this)),
      ju && qr.call(jr(r)),
      (r.options = fv(i)),
      (r.services = {}),
      (r.logger = jn),
      (r.modules = { external: [] }),
      i2(jr(r)),
      a && !r.isInitialized && !i.isClone)
    ) {
      if (!r.options.initImmediate) return r.init(i, a), Ka(r, jr(r));
      setTimeout(function () {
        r.init(i, a);
      }, 0);
    }
    return r;
  }
  return (
    On(n, [
      {
        key: 'init',
        value: function () {
          var i = this,
            a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            l = arguments.length > 1 ? arguments[1] : void 0;
          typeof a == 'function' && ((l = a), (a = {})),
            !a.defaultNS &&
              a.defaultNS !== !1 &&
              a.ns &&
              (typeof a.ns == 'string'
                ? (a.defaultNS = a.ns)
                : a.ns.indexOf('translation') < 0 && (a.defaultNS = a.ns[0]));
          var c = dv();
          (this.options = Nn(Nn(Nn({}, c), this.options), fv(a))),
            this.options.compatibilityAPI !== 'v1' &&
              (this.options.interpolation = Nn(
                Nn({}, c.interpolation),
                this.options.interpolation,
              )),
            a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator),
            a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);
          function d(w) {
            return w ? (typeof w == 'function' ? new w() : w) : null;
          }
          if (!this.options.isClone) {
            this.modules.logger
              ? jn.init(d(this.modules.logger), this.options)
              : jn.init(null, this.options);
            var h;
            this.modules.formatter ? (h = this.modules.formatter) : typeof Intl < 'u' && (h = YP);
            var g = new iv(this.options);
            this.store = new $P(this.options.resources, this.options);
            var v = this.services;
            (v.logger = jn),
              (v.resourceStore = this.store),
              (v.languageUtils = g),
              (v.pluralResolver = new KP(g, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              h &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format === c.interpolation.format) &&
                ((v.formatter = d(h)),
                v.formatter.init(v, this.options),
                (this.options.interpolation.format = v.formatter.format.bind(v.formatter))),
              (v.interpolator = new GP(this.options)),
              (v.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
              (v.backendConnector = new n2(
                d(this.modules.backend),
                v.resourceStore,
                v,
                this.options,
              )),
              v.backendConnector.on('*', function (w) {
                for (var b = arguments.length, k = new Array(b > 1 ? b - 1 : 0), E = 1; E < b; E++)
                  k[E - 1] = arguments[E];
                i.emit.apply(i, [w].concat(k));
              }),
              this.modules.languageDetector &&
                ((v.languageDetector = d(this.modules.languageDetector)),
                v.languageDetector.init &&
                  v.languageDetector.init(v, this.options.detection, this.options)),
              this.modules.i18nFormat &&
                ((v.i18nFormat = d(this.modules.i18nFormat)),
                v.i18nFormat.init && v.i18nFormat.init(this)),
              (this.translator = new ov(this.services, this.options)),
              this.translator.on('*', function (w) {
                for (var b = arguments.length, k = new Array(b > 1 ? b - 1 : 0), E = 1; E < b; E++)
                  k[E - 1] = arguments[E];
                i.emit.apply(i, [w].concat(k));
              }),
              this.modules.external.forEach(function (w) {
                w.init && w.init(i);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            l || (l = As),
            this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
          ) {
            var m = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            m.length > 0 && m[0] !== 'dev' && (this.options.lng = m[0]);
          }
          !this.services.languageDetector &&
            !this.options.lng &&
            this.logger.warn('init: no languageDetector is used and no lng is defined');
          var _ = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
          _.forEach(function (w) {
            i[w] = function () {
              var b;
              return (b = i.store)[w].apply(b, arguments);
            };
          });
          var x = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
          x.forEach(function (w) {
            i[w] = function () {
              var b;
              return (b = i.store)[w].apply(b, arguments), i;
            };
          });
          var S = Qi(),
            O = function () {
              var b = function (E, D) {
                i.isInitialized &&
                  !i.initializedStoreOnce &&
                  i.logger.warn(
                    'init: i18next is already initialized. You should call init just once!',
                  ),
                  (i.isInitialized = !0),
                  i.options.isClone || i.logger.log('initialized', i.options),
                  i.emit('initialized', i.options),
                  S.resolve(D),
                  l(E, D);
              };
              if (i.languages && i.options.compatibilityAPI !== 'v1' && !i.isInitialized)
                return b(null, i.t.bind(i));
              i.changeLanguage(i.options.lng, b);
            };
          return this.options.resources || !this.options.initImmediate ? O() : setTimeout(O, 0), S;
        },
      },
      {
        key: 'loadResources',
        value: function (i) {
          var a = this,
            l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : As,
            c = l,
            d = typeof i == 'string' ? i : this.language;
          if (
            (typeof i == 'function' && (c = i),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (d && d.toLowerCase() === 'cimode') return c();
            var h = [],
              g = function (_) {
                if (_) {
                  var x = a.services.languageUtils.toResolveHierarchy(_);
                  x.forEach(function (S) {
                    h.indexOf(S) < 0 && h.push(S);
                  });
                }
              };
            if (d) g(d);
            else {
              var v = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              v.forEach(function (m) {
                return g(m);
              });
            }
            this.options.preload &&
              this.options.preload.forEach(function (m) {
                return g(m);
              }),
              this.services.backendConnector.load(h, this.options.ns, function (m) {
                !m && !a.resolvedLanguage && a.language && a.setResolvedLanguage(a.language), c(m);
              });
          } else c(null);
        },
      },
      {
        key: 'reloadResources',
        value: function (i, a, l) {
          var c = Qi();
          return (
            i || (i = this.languages),
            a || (a = this.options.ns),
            l || (l = As),
            this.services.backendConnector.reload(i, a, function (d) {
              c.resolve(), l(d);
            }),
            c
          );
        },
      },
      {
        key: 'use',
        value: function (i) {
          if (!i)
            throw new Error(
              'You are passing an undefined module! Please check the object you are passing to i18next.use()',
            );
          if (!i.type)
            throw new Error(
              'You are passing a wrong module! Please check the object you are passing to i18next.use()',
            );
          return (
            i.type === 'backend' && (this.modules.backend = i),
            (i.type === 'logger' || (i.log && i.warn && i.error)) && (this.modules.logger = i),
            i.type === 'languageDetector' && (this.modules.languageDetector = i),
            i.type === 'i18nFormat' && (this.modules.i18nFormat = i),
            i.type === 'postProcessor' && nb.addPostProcessor(i),
            i.type === 'formatter' && (this.modules.formatter = i),
            i.type === '3rdParty' && this.modules.external.push(i),
            this
          );
        },
      },
      {
        key: 'setResolvedLanguage',
        value: function (i) {
          if (!(!i || !this.languages) && !(['cimode', 'dev'].indexOf(i) > -1))
            for (var a = 0; a < this.languages.length; a++) {
              var l = this.languages[a];
              if (
                !(['cimode', 'dev'].indexOf(l) > -1) &&
                this.store.hasLanguageSomeTranslations(l)
              ) {
                this.resolvedLanguage = l;
                break;
              }
            }
        },
      },
      {
        key: 'changeLanguage',
        value: function (i, a) {
          var l = this;
          this.isLanguageChangingTo = i;
          var c = Qi();
          this.emit('languageChanging', i);
          var d = function (m) {
              (l.language = m),
                (l.languages = l.services.languageUtils.toResolveHierarchy(m)),
                (l.resolvedLanguage = void 0),
                l.setResolvedLanguage(m);
            },
            h = function (m, _) {
              _
                ? (d(_),
                  l.translator.changeLanguage(_),
                  (l.isLanguageChangingTo = void 0),
                  l.emit('languageChanged', _),
                  l.logger.log('languageChanged', _))
                : (l.isLanguageChangingTo = void 0),
                c.resolve(function () {
                  return l.t.apply(l, arguments);
                }),
                a &&
                  a(m, function () {
                    return l.t.apply(l, arguments);
                  });
            },
            g = function (m) {
              !i && !m && l.services.languageDetector && (m = []);
              var _ = typeof m == 'string' ? m : l.services.languageUtils.getBestMatchFromCodes(m);
              _ &&
                (l.language || d(_),
                l.translator.language || l.translator.changeLanguage(_),
                l.services.languageDetector &&
                  l.services.languageDetector.cacheUserLanguage &&
                  l.services.languageDetector.cacheUserLanguage(_)),
                l.loadResources(_, function (x) {
                  h(x, _);
                });
            };
          return (
            !i && this.services.languageDetector && !this.services.languageDetector.async
              ? g(this.services.languageDetector.detect())
              : !i && this.services.languageDetector && this.services.languageDetector.async
              ? this.services.languageDetector.detect.length === 0
                ? this.services.languageDetector.detect().then(g)
                : this.services.languageDetector.detect(g)
              : g(i),
            c
          );
        },
      },
      {
        key: 'getFixedT',
        value: function (i, a, l) {
          var c = this,
            d = function h(g, v) {
              var m;
              if (kn(v) !== 'object') {
                for (var _ = arguments.length, x = new Array(_ > 2 ? _ - 2 : 0), S = 2; S < _; S++)
                  x[S - 2] = arguments[S];
                m = c.options.overloadTranslationOptionHandler([g, v].concat(x));
              } else m = Nn({}, v);
              (m.lng = m.lng || h.lng),
                (m.lngs = m.lngs || h.lngs),
                (m.ns = m.ns || h.ns),
                (m.keyPrefix = m.keyPrefix || l || h.keyPrefix);
              var O = c.options.keySeparator || '.',
                w;
              return (
                m.keyPrefix && Array.isArray(g)
                  ? (w = g.map(function (b) {
                      return ''.concat(m.keyPrefix).concat(O).concat(b);
                    }))
                  : (w = m.keyPrefix ? ''.concat(m.keyPrefix).concat(O).concat(g) : g),
                c.t(w, m)
              );
            };
          return (
            typeof i == 'string' ? (d.lng = i) : (d.lngs = i), (d.ns = a), (d.keyPrefix = l), d
          );
        },
      },
      {
        key: 't',
        value: function () {
          var i;
          return this.translator && (i = this.translator).translate.apply(i, arguments);
        },
      },
      {
        key: 'exists',
        value: function () {
          var i;
          return this.translator && (i = this.translator).exists.apply(i, arguments);
        },
      },
      {
        key: 'setDefaultNamespace',
        value: function (i) {
          this.options.defaultNS = i;
        },
      },
      {
        key: 'hasLoadedNamespace',
        value: function (i) {
          var a = this,
            l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                'hasLoadedNamespace: i18n.languages were undefined or empty',
                this.languages,
              ),
              !1
            );
          var c = this.resolvedLanguage || this.languages[0],
            d = this.options ? this.options.fallbackLng : !1,
            h = this.languages[this.languages.length - 1];
          if (c.toLowerCase() === 'cimode') return !0;
          var g = function (_, x) {
            var S = a.services.backendConnector.state[''.concat(_, '|').concat(x)];
            return S === -1 || S === 2;
          };
          if (l.precheck) {
            var v = l.precheck(this, g);
            if (v !== void 0) return v;
          }
          return !!(
            this.hasResourceBundle(c, i) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (g(c, i) && (!d || g(h, i)))
          );
        },
      },
      {
        key: 'loadNamespaces',
        value: function (i, a) {
          var l = this,
            c = Qi();
          return this.options.ns
            ? (typeof i == 'string' && (i = [i]),
              i.forEach(function (d) {
                l.options.ns.indexOf(d) < 0 && l.options.ns.push(d);
              }),
              this.loadResources(function (d) {
                c.resolve(), a && a(d);
              }),
              c)
            : (a && a(), Promise.resolve());
        },
      },
      {
        key: 'loadLanguages',
        value: function (i, a) {
          var l = Qi();
          typeof i == 'string' && (i = [i]);
          var c = this.options.preload || [],
            d = i.filter(function (h) {
              return c.indexOf(h) < 0;
            });
          return d.length
            ? ((this.options.preload = c.concat(d)),
              this.loadResources(function (h) {
                l.resolve(), a && a(h);
              }),
              l)
            : (a && a(), Promise.resolve());
        },
      },
      {
        key: 'dir',
        value: function (i) {
          if (
            (i ||
              (i =
                this.resolvedLanguage ||
                (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
            !i)
          )
            return 'rtl';
          var a = [
              'ar',
              'shu',
              'sqr',
              'ssh',
              'xaa',
              'yhd',
              'yud',
              'aao',
              'abh',
              'abv',
              'acm',
              'acq',
              'acw',
              'acx',
              'acy',
              'adf',
              'ads',
              'aeb',
              'aec',
              'afb',
              'ajp',
              'apc',
              'apd',
              'arb',
              'arq',
              'ars',
              'ary',
              'arz',
              'auz',
              'avl',
              'ayh',
              'ayl',
              'ayn',
              'ayp',
              'bbz',
              'pga',
              'he',
              'iw',
              'ps',
              'pbt',
              'pbu',
              'pst',
              'prp',
              'prd',
              'ug',
              'ur',
              'ydd',
              'yds',
              'yih',
              'ji',
              'yi',
              'hbo',
              'men',
              'xmn',
              'fa',
              'jpr',
              'peo',
              'pes',
              'prs',
              'dv',
              'sam',
              'ckb',
            ],
            l = (this.services && this.services.languageUtils) || new iv(dv());
          return a.indexOf(l.getLanguagePartFromCode(i)) > -1 ||
            i.toLowerCase().indexOf('-arab') > 1
            ? 'rtl'
            : 'ltr';
        },
      },
      {
        key: 'cloneInstance',
        value: function () {
          var i = this,
            a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : As,
            c = Nn(Nn(Nn({}, this.options), a), { isClone: !0 }),
            d = new n(c);
          (a.debug !== void 0 || a.prefix !== void 0) && (d.logger = d.logger.clone(a));
          var h = ['store', 'services', 'language'];
          return (
            h.forEach(function (g) {
              d[g] = i[g];
            }),
            (d.services = Nn({}, this.services)),
            (d.services.utils = { hasLoadedNamespace: d.hasLoadedNamespace.bind(d) }),
            (d.translator = new ov(d.services, d.options)),
            d.translator.on('*', function (g) {
              for (var v = arguments.length, m = new Array(v > 1 ? v - 1 : 0), _ = 1; _ < v; _++)
                m[_ - 1] = arguments[_];
              d.emit.apply(d, [g].concat(m));
            }),
            d.init(c, l),
            (d.translator.options = d.options),
            (d.translator.backendConnector.services.utils = {
              hasLoadedNamespace: d.hasLoadedNamespace.bind(d),
            }),
            d
          );
        },
      },
      {
        key: 'toJSON',
        value: function () {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        },
      },
    ]),
    n
  );
})(qr);
Pn(Fl, 'createInstance', function () {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 ? arguments[1] : void 0;
  return new Fl(e, t);
});
var zt = Fl.createInstance();
zt.createInstance = Fl.createInstance;
zt.createInstance;
zt.dir;
zt.init;
zt.loadResources;
zt.reloadResources;
var a2 = zt.use;
zt.changeLanguage;
zt.getFixedT;
var Yc = zt.t;
zt.exists;
zt.setDefaultNamespace;
zt.hasLoadedNamespace;
zt.loadNamespaces;
zt.loadLanguages;
const pv = () =>
    nn('div', {
      children: [
        Ce('h1', { children: 'Det skjedde en feil' }),
        Ce('p', {
          children: Ce('i', { children: 'Vennligst gå tilbake i nettleseren eller refresh siden' }),
        }),
      ],
    }),
  s2 = 'altinn',
  l2 = 'FDK',
  u2 = '1.5rem',
  c2 = '1.875rem',
  d2 = '2.25rem',
  f2 = '3rem',
  h2 = '3.75rem',
  p2 = '#e3f7ff',
  m2 = '#d4f9e4',
  g2 = '#fbf6bd',
  v2 = '#000000',
  _2 = '#e3f7ff',
  y2 = '#d4f9e4',
  b2 = '#fbf6bd',
  w2 = '1.5rem',
  x2 = '1.75rem',
  S2 = '2.25rem',
  k2 = '1rem',
  C2 = '1.125rem',
  P2 = '1.5rem',
  E2 = '6rem',
  O2 = '1.5rem',
  L2 = '2.25rem',
  T2 = '0.75rem',
  z2 = '0.75rem',
  R2 = '0.375rem',
  I2 = '6.688rem',
  M2 = '4rem',
  N2 = '2.25rem',
  D2 = '3.75rem',
  A2 = 'Altinn-DIN',
  B2 = 'Regular',
  F2 = 1.5,
  j2 = '1rem',
  U2 = '3%',
  $2 = 0,
  H2 = 'none',
  W2 = 'none',
  Z2 = 'bold',
  V2 = 'medium',
  q2 = 'medium',
  Q2 = '#bcc7cc',
  K2 = '#bcc7cc',
  G2 = '0.75rem',
  X2 = '1.5rem',
  Y2 = '0.25rem',
  J2 = '0.5rem',
  eE = 0.75,
  tE = '1.5rem',
  nE = '1.5rem',
  rE = 'medium',
  oE = '1rem',
  iE = '1.125rem',
  aE = '1px',
  sE = '0.5rem',
  lE = '0.75rem',
  uE = '1.125rem',
  cE = '1.5rem',
  dE = '1.125rem',
  fE = '1.5rem',
  hE = '#022f51',
  pE = '#0062ba',
  mE = '#0062ba',
  gE = '#022f514d',
  vE = '#D5203B',
  _E = '#ffffff',
  yE = '#e3f7ff',
  bE = '#0062ba',
  wE = '#ffffff',
  xE = '#000000',
  SE = '#004C8F',
  kE = '#ffffff',
  CE = '#0000004d',
  PE = '#000000',
  EE = '2px',
  OE = '2px',
  LE = '0.875rem',
  TE = '1rem',
  zE = '0.75rem',
  RE = '1.125rem',
  IE = '1.5rem',
  ME = '1.5rem',
  NE = '#000000',
  DE = '0.5rem',
  AE = '0.375rem',
  BE = '2px',
  FE = '#022f51',
  jE = '#0062ba',
  UE = '#efefef',
  $E = '#bcc7cc',
  HE = '#ffffff',
  WE = '#ffffff',
  ZE = '#ffffff',
  VE = '#f5f5f5',
  qE = '#bcc7cc',
  QE = '#000000',
  KE = '0.75rem',
  GE = '0.375rem',
  XE = '6.25rem',
  YE = '9.375rem',
  JE = '12.5rem',
  eO = '18.75rem',
  tO = '25rem',
  nO = '#D5203B',
  rO = '#8e1527',
  oO = '1rem',
  iO = '1.5rem',
  aO = '2.25rem',
  sO = '0.563rem',
  lO = '1.125rem',
  uO = '1rem',
  cO = '100%',
  dO = 'auto',
  fO = '2px',
  hO = '#0062ba',
  pO = '#ffffff',
  mO = '#ffffff',
  gO = '#000000',
  vO = '#0062ba',
  _O = '1.5rem',
  yO = '0.125rem',
  bO = '0.25rem',
  wO = '#022f51',
  xO = '#022f514d',
  SO = '#022f51',
  kO = '#022f51',
  CO = '#ffffff',
  PO = '#022f514d',
  EO = '#ffffff',
  OO = '#022f51',
  LO = '2.25rem',
  TO = '1.4rem',
  zO = '1.5rem',
  RO = '0.875rem',
  IO = '1.125rem',
  MO = '0.688rem',
  NO = '1px',
  DO = '#0062ba',
  AO = '#004C8F',
  BO = '#022f51',
  FO = '#0062ba4d',
  jO = '#ffffff',
  UO = '#118849',
  $O = '#0D6D3A',
  HO = '#0C4D22',
  WO = '#1188494d',
  ZO = '#E02E49',
  VO = '#E02E49',
  qO = '#B11B31',
  QO = '#e02e494d',
  KO = '#98177E',
  GO = '0.5rem',
  XO = '0.5rem',
  YO = '0.5rem',
  JO = '1.125rem',
  eL = '2.25rem',
  tL = '3rem',
  nL = '0.375rem',
  rL = '0.563rem',
  oL = '0.563rem',
  iL = '#0062ba',
  aL = '#ffffff',
  sL = '#0062ba4d',
  lL = '#e3f7ff',
  uL = '#0062ba',
  cL = '#0062ba',
  dL = '#ffffff',
  fL = '#0062ba',
  hL = '#004C8F',
  pL = '#ffffff',
  mL = '#e3f7ff',
  gL = '#004C8F',
  vL = '1px',
  _L = '2.25rem',
  yL = '3rem',
  bL = '3.75rem',
  wL = '1.5rem',
  xL = '1.875rem',
  SL = '2.5rem',
  kL = '#008fd6',
  CL = '#0062ba',
  PL = '#98177E',
  EL = '#ffffff',
  OL = '#ffffff',
  LL = '#ffffff',
  TL = '#D5203B',
  zL = '#8e1527',
  RL = '#6a6a6a',
  IL = '0.75rem',
  ML = '0.375rem',
  NL = '2px',
  DL = '4px',
  AL = '#fbf6bd',
  BL = '#fbf6bd',
  FL = '#d4f9e4',
  jL = '#d4f9e4',
  UL = 2.25,
  $L = '1rem',
  HL = '1.125rem',
  WL = '0.375rem',
  ZL = '#D5203B',
  VL = '0.875rem',
  qL = '1px',
  QL = '2px',
  KL = 0.375,
  GL = 0.75,
  XL = 1.5,
  YL = 2.25,
  JL = 3,
  eT = 3.75,
  tT = 4.5,
  nT = 5.25,
  rT = 6,
  oT = 12,
  iT = '#011728',
  aT = '#022f51',
  sT = '#004C8F',
  lT = '#0062ba',
  uT = '#008fd6',
  cT = '#cff0ff',
  dT = '#e3f7ff',
  fT = '#8e1527',
  hT = '#B11B31',
  pT = '#D5203B',
  mT = '#E02E49',
  gT = '#f9cad3',
  vT = '#FCE4E9',
  _T = '#0C4D22',
  yT = '#0D6D3A',
  bT = '#118849',
  wT = '#15A859',
  xT = '#17c96b',
  ST = '#d4f9e4',
  kT = '#fbf6bd',
  CT = '#ffda06',
  PT = '#98177E',
  ET = '#7E0C67',
  OT = '#ffffff',
  LT = '#000000',
  TT = '#262626',
  zT = '#6a6a6a',
  RT = '#bcc7cc',
  IT = '#efefef',
  MT = '#f5f5f5',
  NT = '#e0daf7',
  DT = '#3f3161',
  AT = '#e3f7ff',
  BT = '#cff0ff',
  FT = '#008fd6',
  jT = '#0062ba',
  UT = '#004C8F',
  $T = '#022f51',
  HT = '#D5203B',
  WT = '#8e1527',
  ZT = '#FCE4E9',
  VT = '#0D6D3A',
  qT = '#d4f9e4',
  QT = '#008fd6',
  KT = '#0062ba',
  GT = '#0062ba',
  XT = '#004C8F',
  YT = '#ffda06',
  JT = '#fbf6bd',
  ez = '#98177E',
  tz = '#7E0C67',
  nz = '#98177E',
  rz = '30%',
  oz = '3px',
  iz = '2px',
  az = '2.25rem',
  sz = '0.75rem',
  lz = '0.875rem',
  uz = '1rem',
  cz = '1rem',
  dz = '1.125rem',
  fz = '1rem',
  hz = '1.125rem',
  pz = '1.25rem',
  mz = '1.125rem',
  gz = '1.25rem',
  vz = '1.5rem',
  _z = '1.25rem',
  yz = '1.5rem',
  bz = '1.75rem',
  wz = '1.5rem',
  xz = '1.75rem',
  Sz = '2.25rem',
  kz = '1.75rem',
  Cz = '2.25rem',
  Pz = '2.75rem',
  Ez = '1.75rem',
  Oz = '2.25rem',
  Lz = '2.75rem',
  Tz = '1.5rem',
  zz = '1.75rem',
  Rz = '2.25rem',
  Iz = '1.25rem',
  Mz = '1.5rem',
  Nz = '1.75rem',
  Dz = '1.125rem',
  Az = '1.25rem',
  Bz = '1.5rem',
  Fz = '1rem',
  jz = '1.125rem',
  Uz = '1.25rem',
  $z = '0.875rem',
  Hz = '1rem',
  Wz = '1.125rem',
  Zz = '1.5rem',
  Vz = '1rem',
  qz = '1rem',
  Qz = '1.125rem',
  Kz = '1rem',
  Gz = '1.125rem',
  Xz = '0.875rem',
  Yz = '1.125rem',
  Jz = '1.25rem',
  eR = '1.25rem',
  tR = '1.5rem',
  nR = 'Altinn-DIN',
  rR = 'Altinn-DIN',
  oR = 'Altinn-DIN',
  iR = 'Altinn-DIN',
  aR = 'Altinn-DIN',
  sR = '0px',
  lR = '540px',
  uR = '768px',
  cR = '960px',
  dR = '1200px',
  fR = '1600px',
  hR = 'Altinn-DIN',
  pR = 'Regular',
  mR = 1.5,
  gR = '1rem',
  vR = '0.3px',
  _R = 0,
  yR = 'none',
  bR = 'none',
  wR = '0.75rem',
  xR = '1.5rem',
  SR = '2.25rem',
  kR = '3rem',
  CR = '3.75rem',
  PR = '4.5rem',
  ER = '5.25rem',
  OR = '6rem',
  LR = '7.5rem',
  TR = '12rem',
  zR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BorderWidthStandard: QL,
        BorderWidthThin: qL,
        BreakpointsLg: cR,
        BreakpointsMd: uR,
        BreakpointsSm: lR,
        BreakpointsXl: dR,
        BreakpointsXs: sR,
        BreakpointsXxl: fR,
        ColorsAccessibilityTabFocus: ez,
        ColorsAccessibilityVisited: tz,
        ColorsBlack: LT,
        ColorsBlue200: dT,
        ColorsBlue300: cT,
        ColorsBlue500: uT,
        ColorsBlue700: lT,
        ColorsBlue800: sT,
        ColorsBlue900: aT,
        ColorsBlue950: iT,
        ColorsBrandAltinnFirst200: AT,
        ColorsBrandAltinnFirst300: BT,
        ColorsBrandAltinnFirst500: FT,
        ColorsBrandAltinnFirst700: jT,
        ColorsBrandAltinnFirst800: UT,
        ColorsBrandAltinnFirst900: $T,
        ColorsBrandAltinnSecondPurple300: NT,
        ColorsBrandAltinnSecondPurple700: DT,
        ColorsErrorCalm: ZT,
        ColorsErrorIntens: HT,
        ColorsErrorIntensHover: WT,
        ColorsGreen300: ST,
        ColorsGreen500: xT,
        ColorsGreen600: wT,
        ColorsGreen700: bT,
        ColorsGreen800: yT,
        ColorsGreen900: _T,
        ColorsInteractionButtonDefault: GT,
        ColorsInteractionButtonHover: XT,
        ColorsInteractionInteractionBorderDefault: QT,
        ColorsInteractionInteractionBorderHover: KT,
        ColorsNeutral100: MT,
        ColorsNeutral200: IT,
        ColorsNeutral400: RT,
        ColorsNeutral600: zT,
        ColorsNeutral800: TT,
        ColorsPurple600: PT,
        ColorsPurple700: ET,
        ColorsRed200: vT,
        ColorsRed300: gT,
        ColorsRed500: mT,
        ColorsRed600: pT,
        ColorsRed700: hT,
        ColorsRed800: fT,
        ColorsSuccessCalm: qT,
        ColorsSuccessIntens: VT,
        ColorsWarningCalm: JT,
        ColorsWarningIntense: YT,
        ColorsWhite: OT,
        ColorsYellow300: kT,
        ColorsYellow500: CT,
        ComponentButtonBorderWidthDefault: vL,
        ComponentButtonColorFocusOutlineAll: KO,
        ComponentButtonFilledColorTextAll: jO,
        ComponentButtonFilledDangerColorBackgroundDefault: ZO,
        ComponentButtonFilledDangerColorBackgroundDisabled: VO,
        ComponentButtonFilledDangerColorBackgroundHover: qO,
        ComponentButtonFilledDangerColorBackgroundPressed: QO,
        ComponentButtonFilledPrimaryColorBackgroundDefault: DO,
        ComponentButtonFilledPrimaryColorBackgroundDisabled: FO,
        ComponentButtonFilledPrimaryColorBackgroundHover: AO,
        ComponentButtonFilledPrimaryColorBackgroundPressed: BO,
        ComponentButtonFilledSuccessColorBackgroundDefault: UO,
        ComponentButtonFilledSuccessColorBackgroundDisabled: WO,
        ComponentButtonFilledSuccessColorBackgroundHover: $O,
        ComponentButtonFilledSuccessColorBackgroundPressed: HO,
        ComponentButtonOutlinePrimaryColorBackgroundDefault: pL,
        ComponentButtonOutlinePrimaryColorBackgroundHover: mL,
        ComponentButtonOutlinePrimaryColorBackgroundPressed: gL,
        ComponentButtonOutlinePrimaryColorBorderDefault: fL,
        ComponentButtonOutlinePrimaryColorBorderHover: hL,
        ComponentButtonOutlinePrimaryColorTextDefault: cL,
        ComponentButtonOutlinePrimaryColorTextPressed: dL,
        ComponentButtonQuietPrimaryColorBackgroundHover: lL,
        ComponentButtonQuietPrimaryColorBackgroundPressed: uL,
        ComponentButtonQuietPrimaryColorTextDefault: iL,
        ComponentButtonQuietPrimaryColorTextDisabled: sL,
        ComponentButtonQuietPrimaryColorTextPressed: aL,
        ComponentButtonQuietSpacePaddingXLarge: oL,
        ComponentButtonQuietSpacePaddingXMedium: rL,
        ComponentButtonQuietSpacePaddingXSmall: nL,
        ComponentButtonSizeHeightLarge: bL,
        ComponentButtonSizeHeightMedium: yL,
        ComponentButtonSizeHeightSmall: _L,
        ComponentButtonSizeIconLarge: SL,
        ComponentButtonSizeIconMedium: xL,
        ComponentButtonSizeIconSmall: wL,
        ComponentButtonSpaceGapLarge: YO,
        ComponentButtonSpaceGapMedium: XO,
        ComponentButtonSpaceGapSmall: GO,
        ComponentButtonSpacePaddingXLarge: tL,
        ComponentButtonSpacePaddingXMedium: eL,
        ComponentButtonSpacePaddingXSmall: JO,
        ComponentCheckboxBorderWidthSmall: OE,
        ComponentCheckboxBorderWidthXsmall: EE,
        ComponentCheckboxColorBackgroundChecked: bE,
        ComponentCheckboxColorBackgroundDefault: _E,
        ComponentCheckboxColorBackgroundError: wE,
        ComponentCheckboxColorBackgroundHover: yE,
        ComponentCheckboxColorBorderChecked: mE,
        ComponentCheckboxColorBorderDefault: hE,
        ComponentCheckboxColorBorderDisabled: gE,
        ComponentCheckboxColorBorderError: vE,
        ComponentCheckboxColorBorderHover: pE,
        ComponentCheckboxColorTextChecked: kE,
        ComponentCheckboxColorTextDefault: xE,
        ComponentCheckboxColorTextDisabled: CE,
        ComponentCheckboxColorTextError: PE,
        ComponentCheckboxColorTextHover: SE,
        ComponentCheckboxFontSizeSm: TE,
        ComponentCheckboxFontSizeXs: LE,
        ComponentCheckboxGroupSpaceGapXSmall: aO,
        ComponentCheckboxGroupSpaceGapXXsmall: iO,
        ComponentCheckboxGroupSpaceGapYSmall: lO,
        ComponentCheckboxGroupSpaceGapYXsmall: sO,
        ComponentCheckboxSizeHeightSmall: fE,
        ComponentCheckboxSizeHeightXsmall: dE,
        ComponentCheckboxSizeWidthSmall: cE,
        ComponentCheckboxSizeWidthXsmall: uE,
        ComponentCheckboxSpaceGapSmall: lE,
        ComponentCheckboxSpaceGapXsmall: sE,
        ComponentErrorMessageColorText: ZL,
        ComponentErrorMessageFontSizeXs: VL,
        ComponentErrorMessageSpacePaddingTop: WL,
        ComponentExpandableRowBorderWidthDefault: aE,
        ComponentExpandableRowColorBorderBottomDefault: K2,
        ComponentExpandableRowColorBorderTopDefault: Q2,
        ComponentExpandableRowFontSizeHeaderBreakpointMd: iE,
        ComponentExpandableRowFontSizeHeaderBreakpointSm: oE,
        ComponentExpandableRowFontWeightHeader: rE,
        ComponentExpandableRowSizeIconXs: nE,
        ComponentExpandableRowSpaceGapTitleMd: tE,
        ComponentExpandableRowSpaceGapTitleXs: eE,
        ComponentExpandableRowSpacePaddingBottomXs: J2,
        ComponentExpandableRowSpacePaddingTopXs: Y2,
        ComponentExpandableRowSpacePaddingXMd: X2,
        ComponentExpandableRowSpacePaddingXXs: G2,
        ComponentFieldDescriptionColorTextDefault: NE,
        ComponentFieldDescriptionSpaceTopSmall: DE,
        ComponentFieldDescriptionSpaceTopXsmall: AE,
        ComponentFieldsetSpaceGapYLarge: ME,
        ComponentFieldsetSpaceGapYMedium: IE,
        ComponentFieldsetSpaceGapYSmall: RE,
        ComponentFieldsetSpaceGapYXsmall: zE,
        ComponentIconButtonBorderWidthDefault: NO,
        ComponentIconButtonColorBackgroundDefault: EO,
        ComponentIconButtonColorBackgroundHover: OO,
        ComponentIconButtonColorBorderDefault: wO,
        ComponentIconButtonColorBorderDisabled: xO,
        ComponentIconButtonColorIconDefault: kO,
        ComponentIconButtonColorIconDisabled: PO,
        ComponentIconButtonColorIconHover: CO,
        ComponentIconButtonColorOutlineFocus: SO,
        ComponentIconButtonSizeLargeCircle: LO,
        ComponentIconButtonSizeLargeIcon: TO,
        ComponentIconButtonSizeMediumCircle: zO,
        ComponentIconButtonSizeMediumIcon: RO,
        ComponentIconButtonSizeSmallCircle: IO,
        ComponentIconButtonSizeSmallIcon: MO,
        ComponentIconSizeLg: f2,
        ComponentIconSizeMd: d2,
        ComponentIconSizeSm: c2,
        ComponentIconSizeXl: h2,
        ComponentIconSizeXs: u2,
        ComponentInputBorderWidthDefault: NL,
        ComponentInputBorderWidthFocus: DL,
        ComponentInputColorBackgroundDefault: EL,
        ComponentInputColorBackgroundFocus: LL,
        ComponentInputColorBackgroundHover: OL,
        ComponentInputColorBorderDefault: kL,
        ComponentInputColorBorderHover: CL,
        ComponentInputColorOutlineFocus: PL,
        ComponentInputDisabledColorBorderDefault: RL,
        ComponentInputErrorColorBorderDefault: TL,
        ComponentInputErrorColorBorderHover: zL,
        ComponentInputFontSizeMd: HL,
        ComponentInputFontSizeSm: $L,
        ComponentInputReadOnlyConfirmColorBackgroundDefault: FL,
        ComponentInputReadOnlyConfirmColorBorderDefault: jL,
        ComponentInputReadOnlyInfoColorBackgroundDefault: BL,
        ComponentInputReadOnlyInfoColorBorderDefault: AL,
        ComponentInputSizeMinHeightDefault: UL,
        ComponentInputSpacePaddingX: IL,
        ComponentInputSpacePaddingY: ML,
        ComponentLabelFontWeightDefault: q2,
        ComponentLegendFontWeightDefault: V2,
        ComponentPanelColorArrowDefault: _2,
        ComponentPanelColorArrowSuccess: y2,
        ComponentPanelColorArrowWarning: b2,
        ComponentPanelColorBackgroundDefault: p2,
        ComponentPanelColorBackgroundSuccess: m2,
        ComponentPanelColorBackgroundWarning: g2,
        ComponentPanelColorTextDefault: v2,
        ComponentPanelFontSizeBodyBreakpointMd: C2,
        ComponentPanelFontSizeBodyBreakpointSm: k2,
        ComponentPanelFontSizeHeaderBreakpointLg: S2,
        ComponentPanelFontSizeHeaderBreakpointMd: x2,
        ComponentPanelFontSizeHeaderBreakpointSm: w2,
        ComponentPanelFontWeightHeading: Z2,
        ComponentPanelSizeIconMd: D2,
        ComponentPanelSizeIconXs: N2,
        ComponentPanelSpaceArrowLeftMd: I2,
        ComponentPanelSpaceArrowLeftXs: M2,
        ComponentPanelSpaceGapMd: z2,
        ComponentPanelSpaceGapXs: T2,
        ComponentPanelSpacePaddingXMd: E2,
        ComponentPanelSpacePaddingXXs: P2,
        ComponentPanelSpacePaddingYMd: L2,
        ComponentPanelSpacePaddingYXs: O2,
        ComponentPanelSpaceTextGroupGapXs: R2,
        ComponentPanelTypographyDefaultFontFamily: A2,
        ComponentPanelTypographyDefaultFontSize: j2,
        ComponentPanelTypographyDefaultFontWeight: B2,
        ComponentPanelTypographyDefaultLetterSpacing: U2,
        ComponentPanelTypographyDefaultLineHeight: F2,
        ComponentPanelTypographyDefaultParagraphSpacing: $2,
        ComponentPanelTypographyDefaultTextCase: W2,
        ComponentPanelTypographyDefaultTextDecoration: H2,
        ComponentTextareaBorderWidthNormal: BE,
        ComponentTextareaColorBackgroundDefault: HE,
        ComponentTextareaColorBackgroundFocus: ZE,
        ComponentTextareaColorBackgroundHover: WE,
        ComponentTextareaColorBackgroundReadOnly: VE,
        ComponentTextareaColorBorderDefault: FE,
        ComponentTextareaColorBorderDisabled: UE,
        ComponentTextareaColorBorderHover: jE,
        ComponentTextareaColorBorderReadOnly: $E,
        ComponentTextareaColorTextDefault: QE,
        ComponentTextareaColorTextDisabled: qE,
        ComponentTextareaErrorColorBorderDefault: nO,
        ComponentTextareaErrorColorBorderHover: rO,
        ComponentTextareaFontSizeSm: oO,
        ComponentTextareaSizeMinHeightLarge: eO,
        ComponentTextareaSizeMinHeightMedium: JE,
        ComponentTextareaSizeMinHeightSmall: YE,
        ComponentTextareaSizeMinHeightXlarge: tO,
        ComponentTextareaSizeMinHeightXsmall: XE,
        ComponentTextareaSpacePaddingX: KE,
        ComponentTextareaSpacePaddingY: GE,
        ComponentToggleButtonBorderWidthInactive: fO,
        ComponentToggleButtonColorBackgroundActive: hO,
        ComponentToggleButtonColorBackgroundInactive: pO,
        ComponentToggleButtonColorBorderInactive: vO,
        ComponentToggleButtonColorTextActive: mO,
        ComponentToggleButtonColorTextInactive: gO,
        ComponentToggleButtonFontSizeSm: uO,
        ComponentToggleButtonSizeMinWidthMd: dO,
        ComponentToggleButtonSizeMinWidthSm: cO,
        ComponentToggleButtonSpacePaddingBottom: bO,
        ComponentToggleButtonSpacePaddingTop: yO,
        ComponentToggleButtonSpacePaddingX: _O,
        FontFamilyBody: iR,
        FontFamilyDefault: nR,
        FontFamilyHeading: rR,
        FontFamilyIngress: oR,
        FontFamilyLabel: aR,
        FontSize100: sz,
        FontSize200: lz,
        FontSize300: uz,
        FontSize400BreakpointMd: dz,
        FontSize400BreakpointSm: cz,
        FontSize500BreakpointLg: pz,
        FontSize500BreakpointMd: hz,
        FontSize500BreakpointSm: fz,
        FontSize600BreakpointLg: vz,
        FontSize600BreakpointMd: gz,
        FontSize600BreakpointSm: mz,
        FontSize700BreakpointLg: bz,
        FontSize700BreakpointMd: yz,
        FontSize700BreakpointSm: _z,
        FontSize800BreakpointLg: Sz,
        FontSize800BreakpointMd: xz,
        FontSize800BreakpointSm: wz,
        FontSize900BreakpointLg: Pz,
        FontSize900BreakpointMd: Cz,
        FontSize900BreakpointSm: kz,
        FontSizeBodyLargeBreakpointMd: Qz,
        FontSizeBodyLargeBreakpointSm: qz,
        FontSizeBodyMedium: Vz,
        FontSizeComponentSizeLg: Zz,
        FontSizeComponentSizeMd: Wz,
        FontSizeComponentSizeSm: Hz,
        FontSizeComponentSizeXs: $z,
        FontSizeDetailDefault: Xz,
        FontSizeHeadingH1BreakpointLg: Lz,
        FontSizeHeadingH1BreakpointMd: Oz,
        FontSizeHeadingH1BreakpointSm: Ez,
        FontSizeHeadingH2BreakpointLg: Rz,
        FontSizeHeadingH2BreakpointMd: zz,
        FontSizeHeadingH2BreakpointSm: Tz,
        FontSizeHeadingH3BreakpointLg: Nz,
        FontSizeHeadingH3BreakpointMd: Mz,
        FontSizeHeadingH3BreakpointSm: Iz,
        FontSizeHeadingH4BreakpointLg: Bz,
        FontSizeHeadingH4BreakpointMd: Az,
        FontSizeHeadingH4BreakpointSm: Dz,
        FontSizeHeadingH5BreakpointLg: Uz,
        FontSizeHeadingH5BreakpointMd: jz,
        FontSizeHeadingH5BreakpointSm: Fz,
        FontSizeIngressMediumBreakpointMd: tR,
        FontSizeIngressMediumBreakpointSm: eR,
        FontSizeIngressSmallBreakpointMd: Jz,
        FontSizeIngressSmallBreakpointSm: Yz,
        FontSizeLabelSmallBreakpointMd: Gz,
        FontSizeLabelSmallBreakpointSm: Kz,
        InteractiveComponentsBorderRadiusNormal: oz,
        InteractiveComponentsBorderWidthNormal: iz,
        InteractiveComponentsColorsDisabledOpacity: rz,
        InteractiveComponentsColorsFocusOutline: nz,
        ParagraphSpaceDefault: az,
        SizeBase: wR,
        SizeX10: LR,
        SizeX16: TR,
        SizeX2: xR,
        SizeX3: SR,
        SizeX4: kR,
        SizeX5: CR,
        SizeX6: PR,
        SizeX7: ER,
        SizeX8: OR,
        SpaceBase: GL,
        SpaceHalf: KL,
        SpaceX16: oT,
        SpaceX2: XL,
        SpaceX3: YL,
        SpaceX4: JL,
        SpaceX5: eT,
        SpaceX6: tT,
        SpaceX7: nT,
        SpaceX8: rT,
        TokenSetOrder0: s2,
        TokenSetOrder1: l2,
        TypographyDefaultFontFamily: hR,
        TypographyDefaultFontSize: gR,
        TypographyDefaultFontWeight: pR,
        TypographyDefaultLetterSpacing: vR,
        TypographyDefaultLineHeight: mR,
        TypographyDefaultParagraphSpacing: _R,
        TypographyDefaultTextCase: bR,
        TypographyDefaultTextDecoration: yR,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  RR = { 0: { value: 'altinn', type: 'other' }, 1: { value: 'FDK', type: 'other' } },
  IR = {
    icon: {
      size: {
        xs: { value: '1.5rem', type: 'sizing' },
        sm: { value: '1.875rem', type: 'sizing' },
        md: { value: '2.25rem', type: 'sizing' },
        lg: { value: '3rem', type: 'sizing' },
        xl: { value: '3.75rem', type: 'sizing' },
      },
    },
    panel: {
      color: {
        background: {
          default: { value: '#e3f7ff', type: 'color' },
          success: { value: '#d4f9e4', type: 'color' },
          warning: { value: '#fbf6bd', type: 'color' },
        },
        text: { default: { value: '#000000', type: 'color' } },
        arrow: {
          default: { value: '#e3f7ff', type: 'color' },
          success: { value: '#d4f9e4', type: 'color' },
          warning: { value: '#fbf6bd', type: 'color' },
        },
      },
      font_size: {
        header: {
          breakpoint_sm: { value: '1.5rem', type: 'fontSizes' },
          breakpoint_md: { value: '1.75rem', type: 'fontSizes' },
          breakpoint_lg: { value: '2.25rem', type: 'fontSizes' },
        },
        body: {
          breakpoint_sm: { value: '1rem', type: 'fontSizes' },
          breakpoint_md: { value: '1.125rem', type: 'fontSizes' },
        },
      },
      space: {
        padding: {
          x: { xs: { value: '1.5rem', type: 'spacing' }, md: { value: '6rem', type: 'spacing' } },
          y: {
            xs: { value: '1.5rem', type: 'spacing' },
            md: { value: '2.25rem', type: 'spacing' },
          },
        },
        gap: {
          xs: { value: '0.75rem', type: 'spacing' },
          md: { value: '0.75rem', type: 'spacing' },
        },
        text_group: { gap: { xs: { value: '0.375rem', type: 'spacing' } } },
        arrow_left: {
          md: { value: '6.688rem', type: 'spacing' },
          xs: { value: '4rem', type: 'spacing' },
        },
      },
      size: {
        icon: {
          xs: { value: '2.25rem', type: 'sizing' },
          md: { value: '3.75rem', type: 'sizing' },
        },
      },
      typography: {
        default: {
          fontFamily: { value: 'Altinn-DIN', type: 'fontFamily' },
          fontWeight: { value: 'Regular', type: 'fontWeight' },
          lineHeight: { value: 1.5, type: 'lineHeight' },
          fontSize: { value: '1rem', type: 'fontSize' },
          letterSpacing: { value: '3%', type: 'letterSpacing' },
          paragraphSpacing: { value: 0, type: 'paragraphSpacing' },
          textDecoration: { value: 'none', type: 'textDecoration' },
          textCase: { value: 'none', type: 'textCase' },
        },
      },
      font_weight: { heading: { value: 'bold', type: 'fontWeights' } },
    },
    legend: { font_weight: { default: { value: 'medium', type: 'fontWeights' } } },
    label: { font_weight: { default: { value: 'medium', type: 'fontWeights' } } },
    expandable_row: {
      color: {
        border_top: { default: { value: '#bcc7cc', type: 'color' } },
        border_bottom: { default: { value: '#bcc7cc', type: 'color' } },
      },
      space: {
        padding: {
          x: {
            xs: { value: '0.75rem', type: 'spacing' },
            md: { value: '1.5rem', type: 'spacing' },
          },
          top: { xs: { value: '0.25rem', type: 'spacing' } },
          bottom: { xs: { value: '0.5rem', type: 'spacing' } },
        },
        gap: {
          title: { xs: { value: 0.75, type: 'spacing' }, md: { value: '1.5rem', type: 'spacing' } },
        },
      },
      size: { icon: { xs: { value: '1.5rem', type: 'sizing' } } },
      font_weight: { header: { value: 'medium', type: 'fontWeights' } },
      font_size: {
        header: {
          breakpoint_sm: { value: '1rem', type: 'fontSizes' },
          breakpoint_md: { value: '1.125rem', type: 'fontSizes' },
        },
      },
      border_width: { default: { value: '1px', type: 'borderWidth' } },
    },
    checkbox: {
      space: {
        gap: {
          xsmall: { value: '0.5rem', type: 'spacing' },
          small: { value: '0.75rem', type: 'spacing' },
        },
      },
      size: {
        width: {
          xsmall: { value: '1.125rem', type: 'sizing' },
          small: { value: '1.5rem', type: 'sizing' },
        },
        height: {
          xsmall: { value: '1.125rem', type: 'sizing' },
          small: { value: '1.5rem', type: 'sizing' },
        },
      },
      color: {
        border: {
          default: { value: '#022f51', type: 'color' },
          hover: { value: '#0062ba', type: 'color' },
          checked: { value: '#0062ba', type: 'color' },
          disabled: { value: '#022f514d', type: 'color' },
          error: { value: '#D5203B', type: 'color' },
        },
        background: {
          default: { value: '#ffffff', type: 'color' },
          hover: { value: '#e3f7ff', type: 'color' },
          checked: { value: '#0062ba', type: 'color' },
          error: { value: '#ffffff', type: 'color' },
        },
        text: {
          default: { value: '#000000', type: 'color' },
          hover: { value: '#004C8F', type: 'color' },
          checked: { value: '#ffffff', type: 'color' },
          disabled: { value: '#0000004d', type: 'color' },
          error: { value: '#000000', type: 'color' },
        },
      },
      border_width: {
        xsmall: { value: '2px', type: 'borderWidth' },
        small: { value: '2px', type: 'borderWidth' },
      },
      font_size: {
        xs: { value: '0.875rem', type: 'fontSizes' },
        sm: { value: '1rem', type: 'fontSizes' },
      },
    },
    fieldset: {
      space: {
        gap: {
          y: {
            xsmall: { value: '0.75rem', type: 'spacing' },
            small: { value: '1.125rem', type: 'spacing' },
            medium: { value: '1.5rem', type: 'spacing' },
            large: { value: '1.5rem', type: 'spacing' },
          },
        },
      },
    },
    field_description: {
      color: { text: { default: { value: '#000000', type: 'color' } } },
      space: {
        top: {
          small: { value: '0.5rem', type: 'spacing' },
          xsmall: { value: '0.375rem', type: 'spacing' },
        },
      },
    },
    textarea: {
      border_width: { normal: { value: '2px', type: 'borderWidth' } },
      color: {
        border: {
          default: { value: '#022f51', type: 'color' },
          hover: { value: '#0062ba', type: 'color' },
          disabled: { value: '#efefef', type: 'color' },
          'read-only': { value: '#bcc7cc', type: 'color' },
        },
        background: {
          default: { value: '#ffffff', type: 'color' },
          hover: { value: '#ffffff', type: 'color' },
          focus: { value: '#ffffff', type: 'color' },
          'read-only': { value: '#f5f5f5', type: 'color' },
        },
        text: {
          disabled: { value: '#bcc7cc', type: 'color' },
          default: { value: '#000000', type: 'color' },
        },
      },
      space: {
        padding: {
          x: { value: '0.75rem', type: 'spacing' },
          y: { value: '0.375rem', type: 'spacing' },
        },
      },
      size: {
        min_height: {
          xsmall: { value: '6.25rem', type: 'sizing' },
          small: { value: '9.375rem', type: 'sizing' },
          medium: { value: '12.5rem', type: 'sizing' },
          large: { value: '18.75rem', type: 'sizing' },
          xlarge: { value: '25rem', type: 'sizing' },
        },
      },
      error: {
        color: {
          border: {
            default: { value: '#D5203B', type: 'color' },
            hover: { value: '#8e1527', type: 'color' },
          },
        },
      },
      font_size: { sm: { value: '1rem', type: 'fontSizes' } },
    },
    'checkbox-group': {
      space: {
        gap: {
          x: {
            xsmall: { value: '1.5rem', type: 'spacing' },
            small: { value: '2.25rem', type: 'spacing' },
          },
          y: {
            xsmall: { value: '0.563rem', type: 'spacing' },
            small: { value: '1.125rem', type: 'spacing' },
          },
        },
      },
    },
    toggle_button: {
      font_size: { sm: { value: '1rem', type: 'fontSizes' } },
      size: {
        min_width: { sm: { value: '100%', type: 'sizing' }, md: { value: 'auto', type: 'sizing' } },
      },
      border_width: { inactive: { value: '2px', type: 'borderWidth' } },
      color: {
        background: {
          active: { value: '#0062ba', type: 'color' },
          inactive: { value: '#ffffff', type: 'color' },
        },
        text: {
          active: { value: '#ffffff', type: 'color' },
          inactive: { value: '#000000', type: 'color' },
        },
        border: { inactive: { value: '#0062ba', type: 'color' } },
      },
      space: {
        padding: {
          x: { value: '1.5rem', type: 'spacing' },
          top: { value: '0.125rem', type: 'spacing' },
          bottom: { value: '0.25rem', type: 'spacing' },
        },
      },
    },
    icon_button: {
      color: {
        border: {
          default: { value: '#022f51', type: 'color' },
          disabled: { value: '#022f514d', type: 'color' },
        },
        outline: { focus: { value: '#022f51', type: 'color' } },
        icon: {
          default: { value: '#022f51', type: 'color' },
          hover: { value: '#ffffff', type: 'color' },
          disabled: { value: '#022f514d', type: 'color' },
        },
        background: {
          default: { value: '#ffffff', type: 'color' },
          hover: { value: '#022f51', type: 'color' },
        },
      },
      size: {
        large: {
          circle: { value: '2.25rem', type: 'sizing' },
          icon: { value: '1.4rem', type: 'sizing' },
        },
        medium: {
          circle: { value: '1.5rem', type: 'sizing' },
          icon: { value: '0.875rem', type: 'sizing' },
        },
        small: {
          circle: { value: '1.125rem', type: 'sizing' },
          icon: { value: '0.688rem', type: 'sizing' },
        },
      },
      border_width: { default: { value: '1px', type: 'borderWidth' } },
    },
    button: {
      filled: {
        primary: {
          color: {
            background: {
              default: { value: '#0062ba', type: 'color' },
              hover: { value: '#004C8F', type: 'color' },
              pressed: { value: '#022f51', type: 'color' },
              disabled: { value: '#0062ba4d', type: 'color' },
            },
          },
        },
        color: { text: { all: { value: '#ffffff', type: 'color' } } },
        success: {
          color: {
            background: {
              default: { value: '#118849', type: 'color' },
              hover: { value: '#0D6D3A', type: 'color' },
              pressed: { value: '#0C4D22', type: 'color' },
              disabled: { value: '#1188494d', type: 'color' },
            },
          },
        },
        danger: {
          color: {
            background: {
              default: { value: '#E02E49', type: 'color' },
              disabled: { value: '#E02E49', type: 'color' },
              hover: { value: '#B11B31', type: 'color' },
              pressed: { value: '#e02e494d', type: 'color' },
            },
          },
        },
      },
      color: { focus_outline: { all: { value: '#98177E', type: 'color' } } },
      space: {
        gap: {
          small: { value: '0.5rem', type: 'spacing' },
          medium: { value: '0.5rem', type: 'spacing' },
          large: { value: '0.5rem', type: 'spacing' },
        },
        padding: {
          x: {
            small: { value: '1.125rem', type: 'spacing' },
            medium: { value: '2.25rem', type: 'spacing' },
            large: { value: '3rem', type: 'spacing' },
          },
        },
      },
      quiet: {
        space: {
          padding: {
            x: {
              small: { value: '0.375rem', type: 'spacing' },
              medium: { value: '0.563rem', type: 'spacing' },
              large: { value: '0.563rem', type: 'spacing' },
            },
          },
        },
        primary: {
          color: {
            text: {
              default: { value: '#0062ba', type: 'color' },
              pressed: { value: '#ffffff', type: 'color' },
              disabled: { value: '#0062ba4d', type: 'color' },
            },
            background: {
              hover: { value: '#e3f7ff', type: 'color' },
              pressed: { value: '#0062ba', type: 'color' },
            },
          },
        },
      },
      outline: {
        primary: {
          color: {
            text: {
              default: { value: '#0062ba', type: 'color' },
              pressed: { value: '#ffffff', type: 'color' },
            },
            border: {
              default: { value: '#0062ba', type: 'color' },
              hover: { value: '#004C8F', type: 'color' },
            },
            background: {
              default: { value: '#ffffff', type: 'color' },
              hover: { value: '#e3f7ff', type: 'color' },
              pressed: { value: '#004C8F', type: 'color' },
            },
          },
        },
      },
      border_width: { default: { value: '1px', type: 'borderWidth' } },
      size: {
        height: {
          small: { value: '2.25rem', type: 'sizing' },
          medium: { value: '3rem', type: 'sizing' },
          large: { value: '3.75rem', type: 'sizing' },
        },
        icon: {
          small: { value: '1.5rem', type: 'sizing' },
          medium: { value: '1.875rem', type: 'sizing' },
          large: { value: '2.5rem', type: 'sizing' },
        },
      },
    },
    input: {
      color: {
        border: {
          default: { value: '#008fd6', type: 'color' },
          hover: { value: '#0062ba', type: 'color' },
        },
        outline: {
          focus: {
            value: '#98177E',
            type: 'color',
            description: 'Braking: Focus for input should have outline-border with dark blue',
          },
        },
        background: {
          default: { value: '#ffffff', type: 'color' },
          hover: { value: '#ffffff', type: 'color' },
          focus: { value: '#ffffff', type: 'color' },
        },
      },
      error: {
        color: {
          border: {
            default: { value: '#D5203B', type: 'color' },
            hover: { value: '#8e1527', type: 'color' },
          },
        },
      },
      disabled: { color: { border: { default: { value: '#6a6a6a', type: 'color' } } } },
      space: {
        padding: {
          x: { value: '0.75rem', type: 'spacing' },
          y: { value: '0.375rem', type: 'spacing' },
        },
      },
      border_width: {
        default: { value: '2px', type: 'borderWidth' },
        focus: { value: '4px', type: 'borderWidth' },
      },
      read_only_info: {
        color: {
          border: { default: { value: '#fbf6bd', type: 'color' } },
          background: { default: { value: '#fbf6bd', type: 'color' } },
        },
      },
      read_only_confirm: {
        color: {
          background: { default: { value: '#d4f9e4', type: 'color' } },
          border: { default: { value: '#d4f9e4', type: 'color' } },
        },
      },
      size: { min_height: { default: { value: 2.25, type: 'sizing' } } },
      font_size: {
        sm: { value: '1rem', type: 'fontSizes' },
        md: { value: '1.125rem', type: 'fontSizes' },
      },
    },
    error_message: {
      space: { padding: { top: { value: '0.375rem', type: 'spacing' } } },
      color: { text: { value: '#D5203B', type: 'color' } },
      font_size: { xs: { value: '0.875rem', type: 'fontSizes' } },
    },
  },
  MR = {
    thin: { value: '1px', type: 'borderWidth' },
    standard: { value: '2px', type: 'borderWidth' },
  },
  NR = {
    half: { value: 0.375, type: 'spacing' },
    base: { value: 0.75, type: 'spacing' },
    x2: { value: 1.5, type: 'spacing' },
    x3: { value: 2.25, type: 'spacing' },
    x4: { value: 3, type: 'spacing' },
    x5: { value: 3.75, type: 'spacing' },
    x6: { value: 4.5, type: 'spacing' },
    x7: { value: 5.25, type: 'spacing' },
    x8: { value: 6, type: 'spacing' },
    x16: { value: 12, type: 'spacing' },
  },
  DR = {
    'blue-950': { value: '#011728', type: 'color' },
    'blue-900': { value: '#022f51', type: 'color' },
    'blue-800': { value: '#004C8F', type: 'color' },
    'blue-700': { value: '#0062ba', type: 'color' },
    'blue-500': {
      value: '#008fd6',
      type: 'color',
      description:
        'Den gamle hovedblåfargen til Altinn.  Ble byttet ut med #008FD6 Januar 2021. #1EADF7 skal fortsatt brukes på modalbakgrunner og knapper hvor det er svart tekst. ',
    },
    'blue-300': { value: '#cff0ff', type: 'color' },
    'blue-200': { value: '#e3f7ff', type: 'color' },
    'red-800': { value: '#8e1527', type: 'color' },
    'red-700': { value: '#B11B31', type: 'color' },
    'red-600': { value: '#D5203B', type: 'color' },
    'red-500': { value: '#E02E49', type: 'color' },
    'red-300': { value: '#f9cad3', type: 'color' },
    'red-200': { value: '#FCE4E9', type: 'color' },
    'green-900': { value: '#0C4D22', type: 'color' },
    'green-800': { value: '#0D6D3A', type: 'color' },
    'green-700': { value: '#118849', type: 'color' },
    'green-600': { value: '#15A859', type: 'color' },
    'green-500': { value: '#17c96b', type: 'color' },
    'green-300': { value: '#d4f9e4', type: 'color' },
    'yellow-300': { value: '#fbf6bd', type: 'color' },
    'yellow-500': { value: '#ffda06', type: 'color' },
    'purple-600': { value: '#98177E', type: 'color' },
    'purple-700': { value: '#7E0C67', type: 'color' },
    white: { value: '#ffffff', type: 'color' },
    black: { value: '#000000', type: 'color' },
    'neutral-800': { value: '#262626', type: 'color' },
    'neutral-600': { value: '#6a6a6a', type: 'color' },
    'neutral-400': { value: '#bcc7cc', type: 'color' },
    'neutral-200': { value: '#efefef', type: 'color' },
    'neutral-100': { value: '#f5f5f5', type: 'color' },
    brand: {
      altinn: {
        second: {
          'purple-300': { value: '#e0daf7', type: 'color' },
          'purple-700': { value: '#3f3161', type: 'color' },
        },
        first: {
          200: { value: '#e3f7ff', type: 'color' },
          300: { value: '#cff0ff', type: 'color' },
          500: { value: '#008fd6', type: 'color' },
          700: { value: '#0062ba', type: 'color' },
          800: { value: '#004C8F', type: 'color' },
          900: { value: '#022f51', type: 'color' },
        },
      },
    },
    error: {
      intens: {
        value: '#D5203B',
        type: 'color',
        hover2: { value: '{colors.red-800}', type: 'color' },
        hover: { value: '{colors.red-800}', type: 'color' },
      },
      intens_hover: { value: '#8e1527', type: 'color' },
      calm: { value: '#FCE4E9', type: 'color' },
    },
    success: {
      intens: { value: '#0D6D3A', type: 'color' },
      calm: { value: '#d4f9e4', type: 'color' },
    },
    interaction: {
      'interaction-border-default': { value: '#008fd6', type: 'color' },
      'interaction-border-hover': { value: '#0062ba', type: 'color' },
      'button-default': { value: '#0062ba', type: 'color' },
      'button-hover': { value: '#004C8F', type: 'color' },
    },
    warning: {
      intense: { value: '#ffda06', type: 'color' },
      calm: { value: '#fbf6bd', type: 'color' },
    },
    accessibility: {
      'tab-focus': { value: '#98177E', type: 'color' },
      visited: { value: '#7E0C67', type: 'color' },
    },
  },
  AR = {
    colors: {
      focus_outline: { value: '#98177E', type: 'color' },
      disabled: { opacity: { value: '30%', type: 'color' } },
    },
    border_radius: { normal: { value: '3px', type: 'borderRadius' } },
    border_width: { normal: { value: '2px', type: 'borderWidth' } },
  },
  BR = { default: { value: '2.25rem', type: 'paragraphSpacing' } },
  FR = {
    100: { value: '0.75rem', type: 'fontSizes' },
    200: { value: '0.875rem', type: 'fontSizes' },
    300: { value: '1rem', type: 'fontSizes' },
    400: {
      breakpoint_sm: { value: '1rem', type: 'fontSizes' },
      breakpoint_md: { value: '1.125rem', type: 'fontSizes' },
    },
    500: {
      breakpoint_sm: { value: '1rem', type: 'fontSizes' },
      breakpoint_md: { value: '1.125rem', type: 'fontSizes' },
      breakpoint_lg: { value: '1.25rem', type: 'fontSizes' },
    },
    600: {
      breakpoint_sm: { value: '1.125rem', type: 'fontSizes', description: '18px' },
      breakpoint_md: { value: '1.25rem', type: 'fontSizes', description: '20px' },
      breakpoint_lg: { value: '1.5rem', type: 'fontSizes', description: '24px' },
    },
    700: {
      breakpoint_sm: { value: '1.25rem', type: 'fontSizes', description: '20px' },
      breakpoint_md: { value: '1.5rem', type: 'fontSizes', description: '24px' },
      breakpoint_lg: { value: '1.75rem', type: 'fontSizes', description: '28px' },
    },
    800: {
      breakpoint_sm: { value: '1.5rem', type: 'fontSizes', description: '24px' },
      breakpoint_md: { value: '1.75rem', type: 'fontSizes', description: '28px' },
      breakpoint_lg: { value: '2.25rem', type: 'fontSizes', description: '36px' },
    },
    900: {
      breakpoint_sm: { value: '1.75rem', type: 'fontSizes', description: '28px' },
      breakpoint_md: { value: '2.25rem', type: 'fontSizes', description: '36px' },
      breakpoint_lg: { value: '2.75rem', type: 'fontSizes', description: '44px' },
    },
    heading: {
      h1: {
        breakpoint_sm: { value: '1.75rem', type: 'fontSizes' },
        breakpoint_md: { value: '2.25rem', type: 'fontSizes' },
        breakpoint_lg: { value: '2.75rem', type: 'fontSizes' },
      },
      h2: {
        breakpoint_sm: { value: '1.5rem', type: 'fontSizes' },
        breakpoint_md: { value: '1.75rem', type: 'fontSizes' },
        breakpoint_lg: { value: '2.25rem', type: 'fontSizes' },
      },
      h3: {
        breakpoint_sm: { value: '1.25rem', type: 'fontSizes' },
        breakpoint_md: { value: '1.5rem', type: 'fontSizes' },
        breakpoint_lg: { value: '1.75rem', type: 'fontSizes' },
      },
      h4: {
        breakpoint_sm: { value: '1.125rem', type: 'fontSizes' },
        breakpoint_md: { value: '1.25rem', type: 'fontSizes' },
        breakpoint_lg: { value: '1.5rem', type: 'fontSizes' },
      },
      h5: {
        breakpoint_sm: { value: '1rem', type: 'fontSizes' },
        breakpoint_md: { value: '1.125rem', type: 'fontSizes' },
        breakpoint_lg: { value: '1.25rem', type: 'fontSizes' },
      },
    },
    'component-size': {
      xs: { value: '0.875rem', type: 'fontSizes', description: '14px' },
      sm: { value: '1rem', type: 'fontSizes', description: '16px' },
      md: { value: '1.125rem', type: 'fontSizes', description: '18px' },
      lg: { value: '1.5rem', type: 'fontSizes', description: '24px' },
    },
    body: {
      medium: {
        value: '1rem',
        type: 'fontSizes',
        description: 'Body text should never be smaller than 16px',
      },
      large: {
        breakpoint_sm: { value: '1rem', type: 'fontSizes' },
        breakpoint_md: { value: '1.125rem', type: 'fontSizes' },
      },
    },
    label: {
      small: {
        breakpoint_sm: { value: '1rem', type: 'fontSizes' },
        breakpoint_md: { value: '1.125rem', type: 'fontSizes' },
      },
    },
    detail: { default: { value: '0.875rem', type: 'fontSizes' } },
    ingress: {
      small: {
        breakpoint_sm: {
          value: '1.125rem',
          type: 'fontSizes',
          description:
            '18px (Ingress should never be smaller than 18px, to keep a visual difference from the body text that is 16px.)',
        },
        breakpoint_md: { value: '1.25rem', type: 'fontSizes', description: '20px' },
      },
      medium: {
        breakpoint_sm: { value: '1.25rem', type: 'fontSizes', description: '20px' },
        breakpoint_md: { value: '1.5rem', type: 'fontSizes', description: '24px' },
      },
    },
  },
  jR = {
    default: { value: 'Altinn-DIN', type: 'fontFamilies' },
    heading: { value: 'Altinn-DIN', type: 'fontFamilies' },
    ingress: { value: 'Altinn-DIN', type: 'fontFamilies' },
    body: { value: 'Altinn-DIN', type: 'fontFamilies' },
    label: { value: 'Altinn-DIN', type: 'fontFamilies' },
  },
  UR = {
    xs: {
      value: '0px',
      type: 'sizing',
      description:
        'Specific styling for the smallest mobile sizes and up. Will affect screen sizes with the set size and larger.',
    },
    sm: {
      value: '540px',
      type: 'sizing',
      description:
        'Specific styling for the largest mobile sizes and up. Will affect screen sizes with the set size and larger.',
    },
    md: {
      value: '768px',
      type: 'sizing',
      description:
        'Specific styling for tablet and up. Will affect screen sizes with the set size and larger.',
    },
    lg: {
      value: '960px',
      type: 'sizing',
      description:
        'Specific styling for the largest tablets and up. Will affect screen sizes with the set size and larger.Will affect screen sizes with this size and larger',
    },
    xl: {
      value: '1200px',
      type: 'sizing',
      description:
        'Specific styling for laptops and up. Will affect screen sizes with the set size and larger.',
    },
    xxl: {
      value: '1600px',
      type: 'sizing',
      description:
        'Specific styling for desktops and up. Will affect screen sizes with the set size and larger.',
    },
  },
  $R = {
    default: {
      fontFamily: { value: 'Altinn-DIN', type: 'fontFamily' },
      fontWeight: { value: 'Regular', type: 'fontWeight' },
      lineHeight: { value: 1.5, type: 'lineHeight' },
      fontSize: { value: '1rem', type: 'fontSize' },
      letterSpacing: { value: '0.3px', type: 'letterSpacing' },
      paragraphSpacing: { value: 0, type: 'paragraphSpacing' },
      textDecoration: { value: 'none', type: 'textDecoration' },
      textCase: { value: 'none', type: 'textCase' },
    },
  },
  HR = {
    base: { value: 0.75, type: 'sizing' },
    x2: { value: 1.5, type: 'sizing' },
    x3: { value: 2.25, type: 'sizing' },
    x4: { value: 3, type: 'sizing' },
    x5: { value: 3.75, type: 'sizing' },
    x6: { value: 4.5, type: 'sizing' },
    x7: { value: 5.25, type: 'sizing' },
    x8: { value: 6, type: 'sizing' },
    x10: { value: 7.5, type: 'sizing' },
    x16: { value: 12, type: 'sizing' },
  },
  rb = {
    tokenSetOrder: RR,
    component: IR,
    border_width: MR,
    space: NR,
    colors: DR,
    interactive_components: AR,
    paragraph_space: BR,
    font_size: FR,
    font_family: jR,
    breakpoints: UR,
    typography: $R,
    size: HR,
  };
var mv;
(function (e) {
  (e.event = 'event'), (e.props = 'prop');
})(mv || (mv = {}));
var vf = {},
  WR = {
    get exports() {
      return vf;
    },
    set exports(e) {
      vf = e;
    },
  };
/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (e, t) {
  (function (n, r) {
    r(t);
  })(Ho, function (n) {
    var r = '1.9.3';
    function i(o) {
      var s, u, f, p;
      for (u = 1, f = arguments.length; u < f; u++) {
        p = arguments[u];
        for (s in p) o[s] = p[s];
      }
      return o;
    }
    var a =
      Object.create ||
      (function () {
        function o() {}
        return function (s) {
          return (o.prototype = s), new o();
        };
      })();
    function l(o, s) {
      var u = Array.prototype.slice;
      if (o.bind) return o.bind.apply(o, u.call(arguments, 1));
      var f = u.call(arguments, 2);
      return function () {
        return o.apply(s, f.length ? f.concat(u.call(arguments)) : arguments);
      };
    }
    var c = 0;
    function d(o) {
      return '_leaflet_id' in o || (o._leaflet_id = ++c), o._leaflet_id;
    }
    function h(o, s, u) {
      var f, p, y, C;
      return (
        (C = function () {
          (f = !1), p && (y.apply(u, p), (p = !1));
        }),
        (y = function () {
          f ? (p = arguments) : (o.apply(u, arguments), setTimeout(C, s), (f = !0));
        }),
        y
      );
    }
    function g(o, s, u) {
      var f = s[1],
        p = s[0],
        y = f - p;
      return o === f && u ? o : ((((o - p) % y) + y) % y) + p;
    }
    function v() {
      return !1;
    }
    function m(o, s) {
      if (s === !1) return o;
      var u = Math.pow(10, s === void 0 ? 6 : s);
      return Math.round(o * u) / u;
    }
    function _(o) {
      return o.trim ? o.trim() : o.replace(/^\s+|\s+$/g, '');
    }
    function x(o) {
      return _(o).split(/\s+/);
    }
    function S(o, s) {
      Object.prototype.hasOwnProperty.call(o, 'options') ||
        (o.options = o.options ? a(o.options) : {});
      for (var u in s) o.options[u] = s[u];
      return o.options;
    }
    function O(o, s, u) {
      var f = [];
      for (var p in o)
        f.push(encodeURIComponent(u ? p.toUpperCase() : p) + '=' + encodeURIComponent(o[p]));
      return (!s || s.indexOf('?') === -1 ? '?' : '&') + f.join('&');
    }
    var w = /\{ *([\w_ -]+) *\}/g;
    function b(o, s) {
      return o.replace(w, function (u, f) {
        var p = s[f];
        if (p === void 0) throw new Error('No value provided for variable ' + u);
        return typeof p == 'function' && (p = p(s)), p;
      });
    }
    var k =
      Array.isArray ||
      function (o) {
        return Object.prototype.toString.call(o) === '[object Array]';
      };
    function E(o, s) {
      for (var u = 0; u < o.length; u++) if (o[u] === s) return u;
      return -1;
    }
    var D = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    function F(o) {
      return window['webkit' + o] || window['moz' + o] || window['ms' + o];
    }
    var W = 0;
    function Q(o) {
      var s = +new Date(),
        u = Math.max(0, 16 - (s - W));
      return (W = s + u), window.setTimeout(o, u);
    }
    var te = window.requestAnimationFrame || F('RequestAnimationFrame') || Q,
      q =
        window.cancelAnimationFrame ||
        F('CancelAnimationFrame') ||
        F('CancelRequestAnimationFrame') ||
        function (o) {
          window.clearTimeout(o);
        };
    function ue(o, s, u) {
      if (u && te === Q) o.call(s);
      else return te.call(window, l(o, s));
    }
    function ge(o) {
      o && q.call(window, o);
    }
    var Ze = {
      __proto__: null,
      extend: i,
      create: a,
      bind: l,
      get lastId() {
        return c;
      },
      stamp: d,
      throttle: h,
      wrapNum: g,
      falseFn: v,
      formatNum: m,
      trim: _,
      splitWords: x,
      setOptions: S,
      getParamString: O,
      template: b,
      isArray: k,
      indexOf: E,
      emptyImageUrl: D,
      requestFn: te,
      cancelFn: q,
      requestAnimFrame: ue,
      cancelAnimFrame: ge,
    };
    function ce() {}
    (ce.extend = function (o) {
      var s = function () {
          S(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        },
        u = (s.__super__ = this.prototype),
        f = a(u);
      (f.constructor = s), (s.prototype = f);
      for (var p in this)
        Object.prototype.hasOwnProperty.call(this, p) &&
          p !== 'prototype' &&
          p !== '__super__' &&
          (s[p] = this[p]);
      return (
        o.statics && i(s, o.statics),
        o.includes && (Ne(o.includes), i.apply(null, [f].concat(o.includes))),
        i(f, o),
        delete f.statics,
        delete f.includes,
        f.options && ((f.options = u.options ? a(u.options) : {}), i(f.options, o.options)),
        (f._initHooks = []),
        (f.callInitHooks = function () {
          if (!this._initHooksCalled) {
            u.callInitHooks && u.callInitHooks.call(this), (this._initHooksCalled = !0);
            for (var y = 0, C = f._initHooks.length; y < C; y++) f._initHooks[y].call(this);
          }
        }),
        s
      );
    }),
      (ce.include = function (o) {
        var s = this.prototype.options;
        return (
          i(this.prototype, o),
          o.options && ((this.prototype.options = s), this.mergeOptions(o.options)),
          this
        );
      }),
      (ce.mergeOptions = function (o) {
        return i(this.prototype.options, o), this;
      }),
      (ce.addInitHook = function (o) {
        var s = Array.prototype.slice.call(arguments, 1),
          u =
            typeof o == 'function'
              ? o
              : function () {
                  this[o].apply(this, s);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(u),
          this
        );
      });
    function Ne(o) {
      if (!(typeof L > 'u' || !L || !L.Mixin)) {
        o = k(o) ? o : [o];
        for (var s = 0; s < o.length; s++)
          o[s] === L.Mixin.Events &&
            console.warn(
              'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
              new Error().stack,
            );
      }
    }
    var X = {
      on: function (o, s, u) {
        if (typeof o == 'object') for (var f in o) this._on(f, o[f], s);
        else {
          o = x(o);
          for (var p = 0, y = o.length; p < y; p++) this._on(o[p], s, u);
        }
        return this;
      },
      off: function (o, s, u) {
        if (!arguments.length) delete this._events;
        else if (typeof o == 'object') for (var f in o) this._off(f, o[f], s);
        else {
          o = x(o);
          for (var p = arguments.length === 1, y = 0, C = o.length; y < C; y++)
            p ? this._off(o[y]) : this._off(o[y], s, u);
        }
        return this;
      },
      _on: function (o, s, u, f) {
        if (typeof s != 'function') {
          console.warn('wrong listener type: ' + typeof s);
          return;
        }
        if (this._listens(o, s, u) === !1) {
          u === this && (u = void 0);
          var p = { fn: s, ctx: u };
          f && (p.once = !0),
            (this._events = this._events || {}),
            (this._events[o] = this._events[o] || []),
            this._events[o].push(p);
        }
      },
      _off: function (o, s, u) {
        var f, p, y;
        if (this._events && ((f = this._events[o]), !!f)) {
          if (arguments.length === 1) {
            if (this._firingCount) for (p = 0, y = f.length; p < y; p++) f[p].fn = v;
            delete this._events[o];
            return;
          }
          if (typeof s != 'function') {
            console.warn('wrong listener type: ' + typeof s);
            return;
          }
          var C = this._listens(o, s, u);
          if (C !== !1) {
            var T = f[C];
            this._firingCount && ((T.fn = v), (this._events[o] = f = f.slice())), f.splice(C, 1);
          }
        }
      },
      fire: function (o, s, u) {
        if (!this.listens(o, u)) return this;
        var f = i({}, s, { type: o, target: this, sourceTarget: (s && s.sourceTarget) || this });
        if (this._events) {
          var p = this._events[o];
          if (p) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var y = 0, C = p.length; y < C; y++) {
              var T = p[y],
                M = T.fn;
              T.once && this.off(o, M, T.ctx), M.call(T.ctx || this, f);
            }
            this._firingCount--;
          }
        }
        return u && this._propagateEvent(f), this;
      },
      listens: function (o, s, u, f) {
        typeof o != 'string' && console.warn('"string" type argument expected');
        var p = s;
        typeof s != 'function' && ((f = !!s), (p = void 0), (u = void 0));
        var y = this._events && this._events[o];
        if (y && y.length && this._listens(o, p, u) !== !1) return !0;
        if (f) {
          for (var C in this._eventParents)
            if (this._eventParents[C].listens(o, s, u, f)) return !0;
        }
        return !1;
      },
      _listens: function (o, s, u) {
        if (!this._events) return !1;
        var f = this._events[o] || [];
        if (!s) return !!f.length;
        u === this && (u = void 0);
        for (var p = 0, y = f.length; p < y; p++) if (f[p].fn === s && f[p].ctx === u) return p;
        return !1;
      },
      once: function (o, s, u) {
        if (typeof o == 'object') for (var f in o) this._on(f, o[f], s, !0);
        else {
          o = x(o);
          for (var p = 0, y = o.length; p < y; p++) this._on(o[p], s, u, !0);
        }
        return this;
      },
      addEventParent: function (o) {
        return (
          (this._eventParents = this._eventParents || {}), (this._eventParents[d(o)] = o), this
        );
      },
      removeEventParent: function (o) {
        return this._eventParents && delete this._eventParents[d(o)], this;
      },
      _propagateEvent: function (o) {
        for (var s in this._eventParents)
          this._eventParents[s].fire(
            o.type,
            i({ layer: o.target, propagatedFrom: o.target }, o),
            !0,
          );
      },
    };
    (X.addEventListener = X.on),
      (X.removeEventListener = X.clearAllEventListeners = X.off),
      (X.addOneTimeEventListener = X.once),
      (X.fireEvent = X.fire),
      (X.hasEventListeners = X.listens);
    var de = ce.extend(X);
    function I(o, s, u) {
      (this.x = u ? Math.round(o) : o), (this.y = u ? Math.round(s) : s);
    }
    var re =
      Math.trunc ||
      function (o) {
        return o > 0 ? Math.floor(o) : Math.ceil(o);
      };
    I.prototype = {
      clone: function () {
        return new I(this.x, this.y);
      },
      add: function (o) {
        return this.clone()._add(H(o));
      },
      _add: function (o) {
        return (this.x += o.x), (this.y += o.y), this;
      },
      subtract: function (o) {
        return this.clone()._subtract(H(o));
      },
      _subtract: function (o) {
        return (this.x -= o.x), (this.y -= o.y), this;
      },
      divideBy: function (o) {
        return this.clone()._divideBy(o);
      },
      _divideBy: function (o) {
        return (this.x /= o), (this.y /= o), this;
      },
      multiplyBy: function (o) {
        return this.clone()._multiplyBy(o);
      },
      _multiplyBy: function (o) {
        return (this.x *= o), (this.y *= o), this;
      },
      scaleBy: function (o) {
        return new I(this.x * o.x, this.y * o.y);
      },
      unscaleBy: function (o) {
        return new I(this.x / o.x, this.y / o.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = re(this.x)), (this.y = re(this.y)), this;
      },
      distanceTo: function (o) {
        o = H(o);
        var s = o.x - this.x,
          u = o.y - this.y;
        return Math.sqrt(s * s + u * u);
      },
      equals: function (o) {
        return (o = H(o)), o.x === this.x && o.y === this.y;
      },
      contains: function (o) {
        return (o = H(o)), Math.abs(o.x) <= Math.abs(this.x) && Math.abs(o.y) <= Math.abs(this.y);
      },
      toString: function () {
        return 'Point(' + m(this.x) + ', ' + m(this.y) + ')';
      },
    };
    function H(o, s, u) {
      return o instanceof I
        ? o
        : k(o)
        ? new I(o[0], o[1])
        : o == null
        ? o
        : typeof o == 'object' && 'x' in o && 'y' in o
        ? new I(o.x, o.y)
        : new I(o, s, u);
    }
    function P(o, s) {
      if (o) for (var u = s ? [o, s] : o, f = 0, p = u.length; f < p; f++) this.extend(u[f]);
    }
    P.prototype = {
      extend: function (o) {
        var s, u;
        if (!o) return this;
        if (o instanceof I || typeof o[0] == 'number' || 'x' in o) s = u = H(o);
        else if (((o = R(o)), (s = o.min), (u = o.max), !s || !u)) return this;
        return (
          !this.min && !this.max
            ? ((this.min = s.clone()), (this.max = u.clone()))
            : ((this.min.x = Math.min(s.x, this.min.x)),
              (this.max.x = Math.max(u.x, this.max.x)),
              (this.min.y = Math.min(s.y, this.min.y)),
              (this.max.y = Math.max(u.y, this.max.y))),
          this
        );
      },
      getCenter: function (o) {
        return H((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, o);
      },
      getBottomLeft: function () {
        return H(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return H(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (o) {
        var s, u;
        return (
          typeof o[0] == 'number' || o instanceof I ? (o = H(o)) : (o = R(o)),
          o instanceof P ? ((s = o.min), (u = o.max)) : (s = u = o),
          s.x >= this.min.x && u.x <= this.max.x && s.y >= this.min.y && u.y <= this.max.y
        );
      },
      intersects: function (o) {
        o = R(o);
        var s = this.min,
          u = this.max,
          f = o.min,
          p = o.max,
          y = p.x >= s.x && f.x <= u.x,
          C = p.y >= s.y && f.y <= u.y;
        return y && C;
      },
      overlaps: function (o) {
        o = R(o);
        var s = this.min,
          u = this.max,
          f = o.min,
          p = o.max,
          y = p.x > s.x && f.x < u.x,
          C = p.y > s.y && f.y < u.y;
        return y && C;
      },
      isValid: function () {
        return !!(this.min && this.max);
      },
      pad: function (o) {
        var s = this.min,
          u = this.max,
          f = Math.abs(s.x - u.x) * o,
          p = Math.abs(s.y - u.y) * o;
        return R(H(s.x - f, s.y - p), H(u.x + f, u.y + p));
      },
      equals: function (o) {
        return o
          ? ((o = R(o)), this.min.equals(o.getTopLeft()) && this.max.equals(o.getBottomRight()))
          : !1;
      },
    };
    function R(o, s) {
      return !o || o instanceof P ? o : new P(o, s);
    }
    function z(o, s) {
      if (o) for (var u = s ? [o, s] : o, f = 0, p = u.length; f < p; f++) this.extend(u[f]);
    }
    z.prototype = {
      extend: function (o) {
        var s = this._southWest,
          u = this._northEast,
          f,
          p;
        if (o instanceof K) (f = o), (p = o);
        else if (o instanceof z) {
          if (((f = o._southWest), (p = o._northEast), !f || !p)) return this;
        } else return o ? this.extend(Y(o) || j(o)) : this;
        return (
          !s && !u
            ? ((this._southWest = new K(f.lat, f.lng)), (this._northEast = new K(p.lat, p.lng)))
            : ((s.lat = Math.min(f.lat, s.lat)),
              (s.lng = Math.min(f.lng, s.lng)),
              (u.lat = Math.max(p.lat, u.lat)),
              (u.lng = Math.max(p.lng, u.lng))),
          this
        );
      },
      pad: function (o) {
        var s = this._southWest,
          u = this._northEast,
          f = Math.abs(s.lat - u.lat) * o,
          p = Math.abs(s.lng - u.lng) * o;
        return new z(new K(s.lat - f, s.lng - p), new K(u.lat + f, u.lng + p));
      },
      getCenter: function () {
        return new K(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2,
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new K(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new K(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (o) {
        typeof o[0] == 'number' || o instanceof K || 'lat' in o ? (o = Y(o)) : (o = j(o));
        var s = this._southWest,
          u = this._northEast,
          f,
          p;
        return (
          o instanceof z ? ((f = o.getSouthWest()), (p = o.getNorthEast())) : (f = p = o),
          f.lat >= s.lat && p.lat <= u.lat && f.lng >= s.lng && p.lng <= u.lng
        );
      },
      intersects: function (o) {
        o = j(o);
        var s = this._southWest,
          u = this._northEast,
          f = o.getSouthWest(),
          p = o.getNorthEast(),
          y = p.lat >= s.lat && f.lat <= u.lat,
          C = p.lng >= s.lng && f.lng <= u.lng;
        return y && C;
      },
      overlaps: function (o) {
        o = j(o);
        var s = this._southWest,
          u = this._northEast,
          f = o.getSouthWest(),
          p = o.getNorthEast(),
          y = p.lat > s.lat && f.lat < u.lat,
          C = p.lng > s.lng && f.lng < u.lng;
        return y && C;
      },
      toBBoxString: function () {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
      },
      equals: function (o, s) {
        return o
          ? ((o = j(o)),
            this._southWest.equals(o.getSouthWest(), s) &&
              this._northEast.equals(o.getNorthEast(), s))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      },
    };
    function j(o, s) {
      return o instanceof z ? o : new z(o, s);
    }
    function K(o, s, u) {
      if (isNaN(o) || isNaN(s)) throw new Error('Invalid LatLng object: (' + o + ', ' + s + ')');
      (this.lat = +o), (this.lng = +s), u !== void 0 && (this.alt = +u);
    }
    K.prototype = {
      equals: function (o, s) {
        if (!o) return !1;
        o = Y(o);
        var u = Math.max(Math.abs(this.lat - o.lat), Math.abs(this.lng - o.lng));
        return u <= (s === void 0 ? 1e-9 : s);
      },
      toString: function (o) {
        return 'LatLng(' + m(this.lat, o) + ', ' + m(this.lng, o) + ')';
      },
      distanceTo: function (o) {
        return se.distance(this, Y(o));
      },
      wrap: function () {
        return se.wrapLatLng(this);
      },
      toBounds: function (o) {
        var s = (180 * o) / 40075017,
          u = s / Math.cos((Math.PI / 180) * this.lat);
        return j([this.lat - s, this.lng - u], [this.lat + s, this.lng + u]);
      },
      clone: function () {
        return new K(this.lat, this.lng, this.alt);
      },
    };
    function Y(o, s, u) {
      return o instanceof K
        ? o
        : k(o) && typeof o[0] != 'object'
        ? o.length === 3
          ? new K(o[0], o[1], o[2])
          : o.length === 2
          ? new K(o[0], o[1])
          : null
        : o == null
        ? o
        : typeof o == 'object' && 'lat' in o
        ? new K(o.lat, 'lng' in o ? o.lng : o.lon, o.alt)
        : s === void 0
        ? null
        : new K(o, s, u);
    }
    var oe = {
        latLngToPoint: function (o, s) {
          var u = this.projection.project(o),
            f = this.scale(s);
          return this.transformation._transform(u, f);
        },
        pointToLatLng: function (o, s) {
          var u = this.scale(s),
            f = this.transformation.untransform(o, u);
          return this.projection.unproject(f);
        },
        project: function (o) {
          return this.projection.project(o);
        },
        unproject: function (o) {
          return this.projection.unproject(o);
        },
        scale: function (o) {
          return 256 * Math.pow(2, o);
        },
        zoom: function (o) {
          return Math.log(o / 256) / Math.LN2;
        },
        getProjectedBounds: function (o) {
          if (this.infinite) return null;
          var s = this.projection.bounds,
            u = this.scale(o),
            f = this.transformation.transform(s.min, u),
            p = this.transformation.transform(s.max, u);
          return new P(f, p);
        },
        infinite: !1,
        wrapLatLng: function (o) {
          var s = this.wrapLng ? g(o.lng, this.wrapLng, !0) : o.lng,
            u = this.wrapLat ? g(o.lat, this.wrapLat, !0) : o.lat,
            f = o.alt;
          return new K(u, s, f);
        },
        wrapLatLngBounds: function (o) {
          var s = o.getCenter(),
            u = this.wrapLatLng(s),
            f = s.lat - u.lat,
            p = s.lng - u.lng;
          if (f === 0 && p === 0) return o;
          var y = o.getSouthWest(),
            C = o.getNorthEast(),
            T = new K(y.lat - f, y.lng - p),
            M = new K(C.lat - f, C.lng - p);
          return new z(T, M);
        },
      },
      se = i({}, oe, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (o, s) {
          var u = Math.PI / 180,
            f = o.lat * u,
            p = s.lat * u,
            y = Math.sin(((s.lat - o.lat) * u) / 2),
            C = Math.sin(((s.lng - o.lng) * u) / 2),
            T = y * y + Math.cos(f) * Math.cos(p) * C * C,
            M = 2 * Math.atan2(Math.sqrt(T), Math.sqrt(1 - T));
          return this.R * M;
        },
      }),
      et = 6378137,
      Ve = {
        R: et,
        MAX_LATITUDE: 85.0511287798,
        project: function (o) {
          var s = Math.PI / 180,
            u = this.MAX_LATITUDE,
            f = Math.max(Math.min(u, o.lat), -u),
            p = Math.sin(f * s);
          return new I(this.R * o.lng * s, (this.R * Math.log((1 + p) / (1 - p))) / 2);
        },
        unproject: function (o) {
          var s = 180 / Math.PI;
          return new K(
            (2 * Math.atan(Math.exp(o.y / this.R)) - Math.PI / 2) * s,
            (o.x * s) / this.R,
          );
        },
        bounds: (function () {
          var o = et * Math.PI;
          return new P([-o, -o], [o, o]);
        })(),
      };
    function Ae(o, s, u, f) {
      if (k(o)) {
        (this._a = o[0]), (this._b = o[1]), (this._c = o[2]), (this._d = o[3]);
        return;
      }
      (this._a = o), (this._b = s), (this._c = u), (this._d = f);
    }
    Ae.prototype = {
      transform: function (o, s) {
        return this._transform(o.clone(), s);
      },
      _transform: function (o, s) {
        return (
          (s = s || 1),
          (o.x = s * (this._a * o.x + this._b)),
          (o.y = s * (this._c * o.y + this._d)),
          o
        );
      },
      untransform: function (o, s) {
        return (s = s || 1), new I((o.x / s - this._b) / this._a, (o.y / s - this._d) / this._c);
      },
    };
    function Be(o, s, u, f) {
      return new Ae(o, s, u, f);
    }
    var ot = i({}, se, {
        code: 'EPSG:3857',
        projection: Ve,
        transformation: (function () {
          var o = 0.5 / (Math.PI * Ve.R);
          return Be(o, 0.5, -o, 0.5);
        })(),
      }),
      ke = i({}, ot, { code: 'EPSG:900913' });
    function Yt(o) {
      return document.createElementNS('http://www.w3.org/2000/svg', o);
    }
    function Bt(o, s) {
      var u = '',
        f,
        p,
        y,
        C,
        T,
        M;
      for (f = 0, y = o.length; f < y; f++) {
        for (T = o[f], p = 0, C = T.length; p < C; p++)
          (M = T[p]), (u += (p ? 'L' : 'M') + M.x + ' ' + M.y);
        u += s ? (ae.svg ? 'z' : 'x') : '';
      }
      return u || 'M0 0';
    }
    var De = document.documentElement.style,
      A = 'ActiveXObject' in window,
      U = A && !document.addEventListener,
      G = 'msLaunchUri' in navigator && !('documentMode' in document),
      ie = Tn('webkit'),
      J = Tn('android'),
      he = Tn('android 2') || Tn('android 3'),
      pe = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      ye = J && Tn('Google') && pe < 537 && !('AudioNode' in window),
      le = !!window.opera,
      je = !G && Tn('chrome'),
      _e = Tn('gecko') && !ie && !le && !A,
      ze = !je && Tn('safari'),
      pt = Tn('phantom'),
      mt = 'OTransition' in De,
      Vn = navigator.platform.indexOf('Win') === 0,
      qn = A && 'transition' in De,
      Ln = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !he,
      dn = 'MozPerspective' in De,
      Yr = !window.L_DISABLE_3D && (qn || Ln || dn) && !mt && !pt,
      tt = typeof orientation < 'u' || Tn('mobile'),
      Rt = tt && ie,
      Qn = tt && Ln,
      mr = !window.PointerEvent && window.MSPointerEvent,
      gr = !!(window.PointerEvent || mr),
      Ya = 'ontouchstart' in window || !!window.TouchEvent,
      Zu = !window.L_NO_TOUCH && (Ya || gr),
      fn = tt && le,
      Kn = tt && _e,
      Ja = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      Vu = (function () {
        var o = !1;
        try {
          var s = Object.defineProperty({}, 'passive', {
            get: function () {
              o = !0;
            },
          });
          window.addEventListener('testPassiveEventSupport', v, s),
            window.removeEventListener('testPassiveEventSupport', v, s);
        } catch {}
        return o;
      })(),
      Fb = (function () {
        return !!document.createElement('canvas').getContext;
      })(),
      qu = !!(document.createElementNS && Yt('svg').createSVGRect),
      jb =
        !!qu &&
        (function () {
          var o = document.createElement('div');
          return (
            (o.innerHTML = '<svg/>'),
            (o.firstChild && o.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg'
          );
        })(),
      Ub =
        !qu &&
        (function () {
          try {
            var o = document.createElement('div');
            o.innerHTML = '<v:shape adj="1"/>';
            var s = o.firstChild;
            return (s.style.behavior = 'url(#default#VML)'), s && typeof s.adj == 'object';
          } catch {
            return !1;
          }
        })(),
      $b = navigator.platform.indexOf('Mac') === 0,
      Hb = navigator.platform.indexOf('Linux') === 0;
    function Tn(o) {
      return navigator.userAgent.toLowerCase().indexOf(o) >= 0;
    }
    var ae = {
        ie: A,
        ielt9: U,
        edge: G,
        webkit: ie,
        android: J,
        android23: he,
        androidStock: ye,
        opera: le,
        chrome: je,
        gecko: _e,
        safari: ze,
        phantom: pt,
        opera12: mt,
        win: Vn,
        ie3d: qn,
        webkit3d: Ln,
        gecko3d: dn,
        any3d: Yr,
        mobile: tt,
        mobileWebkit: Rt,
        mobileWebkit3d: Qn,
        msPointer: mr,
        pointer: gr,
        touch: Zu,
        touchNative: Ya,
        mobileOpera: fn,
        mobileGecko: Kn,
        retina: Ja,
        passiveEvents: Vu,
        canvas: Fb,
        svg: qu,
        vml: Ub,
        inlineSvg: jb,
        mac: $b,
        linux: Hb,
      },
      dp = ae.msPointer ? 'MSPointerDown' : 'pointerdown',
      fp = ae.msPointer ? 'MSPointerMove' : 'pointermove',
      hp = ae.msPointer ? 'MSPointerUp' : 'pointerup',
      pp = ae.msPointer ? 'MSPointerCancel' : 'pointercancel',
      Qu = { touchstart: dp, touchmove: fp, touchend: hp, touchcancel: pp },
      mp = { touchstart: Kb, touchmove: es, touchend: es, touchcancel: es },
      zo = {},
      gp = !1;
    function Wb(o, s, u) {
      return (
        s === 'touchstart' && Qb(),
        mp[s]
          ? ((u = mp[s].bind(this, u)), o.addEventListener(Qu[s], u, !1), u)
          : (console.warn('wrong event specified:', s), v)
      );
    }
    function Zb(o, s, u) {
      if (!Qu[s]) {
        console.warn('wrong event specified:', s);
        return;
      }
      o.removeEventListener(Qu[s], u, !1);
    }
    function Vb(o) {
      zo[o.pointerId] = o;
    }
    function qb(o) {
      zo[o.pointerId] && (zo[o.pointerId] = o);
    }
    function vp(o) {
      delete zo[o.pointerId];
    }
    function Qb() {
      gp ||
        (document.addEventListener(dp, Vb, !0),
        document.addEventListener(fp, qb, !0),
        document.addEventListener(hp, vp, !0),
        document.addEventListener(pp, vp, !0),
        (gp = !0));
    }
    function es(o, s) {
      if (s.pointerType !== (s.MSPOINTER_TYPE_MOUSE || 'mouse')) {
        s.touches = [];
        for (var u in zo) s.touches.push(zo[u]);
        (s.changedTouches = [s]), o(s);
      }
    }
    function Kb(o, s) {
      s.MSPOINTER_TYPE_TOUCH && s.pointerType === s.MSPOINTER_TYPE_TOUCH && yt(s), es(o, s);
    }
    function Gb(o) {
      var s = {},
        u,
        f;
      for (f in o) (u = o[f]), (s[f] = u && u.bind ? u.bind(o) : u);
      return (
        (o = s), (s.type = 'dblclick'), (s.detail = 2), (s.isTrusted = !1), (s._simulated = !0), s
      );
    }
    var Xb = 200;
    function Yb(o, s) {
      o.addEventListener('dblclick', s);
      var u = 0,
        f;
      function p(y) {
        if (y.detail !== 1) {
          f = y.detail;
          return;
        }
        if (
          !(
            y.pointerType === 'mouse' ||
            (y.sourceCapabilities && !y.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var C = xp(y);
          if (
            !(
              C.some(function (M) {
                return M instanceof HTMLLabelElement && M.attributes.for;
              }) &&
              !C.some(function (M) {
                return M instanceof HTMLInputElement || M instanceof HTMLSelectElement;
              })
            )
          ) {
            var T = Date.now();
            T - u <= Xb ? (f++, f === 2 && s(Gb(y))) : (f = 1), (u = T);
          }
        }
      }
      return o.addEventListener('click', p), { dblclick: s, simDblclick: p };
    }
    function Jb(o, s) {
      o.removeEventListener('dblclick', s.dblclick), o.removeEventListener('click', s.simDblclick);
    }
    var Ku = rs(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']),
      Pi = rs(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']),
      _p = Pi === 'webkitTransition' || Pi === 'OTransition' ? Pi + 'End' : 'transitionend';
    function yp(o) {
      return typeof o == 'string' ? document.getElementById(o) : o;
    }
    function Ei(o, s) {
      var u = o.style[s] || (o.currentStyle && o.currentStyle[s]);
      if ((!u || u === 'auto') && document.defaultView) {
        var f = document.defaultView.getComputedStyle(o, null);
        u = f ? f[s] : null;
      }
      return u === 'auto' ? null : u;
    }
    function Le(o, s, u) {
      var f = document.createElement(o);
      return (f.className = s || ''), u && u.appendChild(f), f;
    }
    function Ke(o) {
      var s = o.parentNode;
      s && s.removeChild(o);
    }
    function ts(o) {
      for (; o.firstChild; ) o.removeChild(o.firstChild);
    }
    function Ro(o) {
      var s = o.parentNode;
      s && s.lastChild !== o && s.appendChild(o);
    }
    function Io(o) {
      var s = o.parentNode;
      s && s.firstChild !== o && s.insertBefore(o, s.firstChild);
    }
    function Gu(o, s) {
      if (o.classList !== void 0) return o.classList.contains(s);
      var u = ns(o);
      return u.length > 0 && new RegExp('(^|\\s)' + s + '(\\s|$)').test(u);
    }
    function ve(o, s) {
      if (o.classList !== void 0)
        for (var u = x(s), f = 0, p = u.length; f < p; f++) o.classList.add(u[f]);
      else if (!Gu(o, s)) {
        var y = ns(o);
        Xu(o, (y ? y + ' ' : '') + s);
      }
    }
    function it(o, s) {
      o.classList !== void 0
        ? o.classList.remove(s)
        : Xu(o, _((' ' + ns(o) + ' ').replace(' ' + s + ' ', ' ')));
    }
    function Xu(o, s) {
      o.className.baseVal === void 0 ? (o.className = s) : (o.className.baseVal = s);
    }
    function ns(o) {
      return (
        o.correspondingElement && (o = o.correspondingElement),
        o.className.baseVal === void 0 ? o.className : o.className.baseVal
      );
    }
    function Jt(o, s) {
      'opacity' in o.style ? (o.style.opacity = s) : 'filter' in o.style && e1(o, s);
    }
    function e1(o, s) {
      var u = !1,
        f = 'DXImageTransform.Microsoft.Alpha';
      try {
        u = o.filters.item(f);
      } catch {
        if (s === 1) return;
      }
      (s = Math.round(s * 100)),
        u
          ? ((u.Enabled = s !== 100), (u.Opacity = s))
          : (o.style.filter += ' progid:' + f + '(opacity=' + s + ')');
    }
    function rs(o) {
      for (var s = document.documentElement.style, u = 0; u < o.length; u++)
        if (o[u] in s) return o[u];
      return !1;
    }
    function Jr(o, s, u) {
      var f = s || new I(0, 0);
      o.style[Ku] =
        (ae.ie3d
          ? 'translate(' + f.x + 'px,' + f.y + 'px)'
          : 'translate3d(' + f.x + 'px,' + f.y + 'px,0)') + (u ? ' scale(' + u + ')' : '');
    }
    function st(o, s) {
      (o._leaflet_pos = s),
        ae.any3d ? Jr(o, s) : ((o.style.left = s.x + 'px'), (o.style.top = s.y + 'px'));
    }
    function eo(o) {
      return o._leaflet_pos || new I(0, 0);
    }
    var Oi, Li, Yu;
    if ('onselectstart' in document)
      (Oi = function () {
        me(window, 'selectstart', yt);
      }),
        (Li = function () {
          Ue(window, 'selectstart', yt);
        });
    else {
      var Ti = rs([
        'userSelect',
        'WebkitUserSelect',
        'OUserSelect',
        'MozUserSelect',
        'msUserSelect',
      ]);
      (Oi = function () {
        if (Ti) {
          var o = document.documentElement.style;
          (Yu = o[Ti]), (o[Ti] = 'none');
        }
      }),
        (Li = function () {
          Ti && ((document.documentElement.style[Ti] = Yu), (Yu = void 0));
        });
    }
    function Ju() {
      me(window, 'dragstart', yt);
    }
    function ec() {
      Ue(window, 'dragstart', yt);
    }
    var os, tc;
    function nc(o) {
      for (; o.tabIndex === -1; ) o = o.parentNode;
      o.style &&
        (is(),
        (os = o),
        (tc = o.style.outline),
        (o.style.outline = 'none'),
        me(window, 'keydown', is));
    }
    function is() {
      os && ((os.style.outline = tc), (os = void 0), (tc = void 0), Ue(window, 'keydown', is));
    }
    function bp(o) {
      do o = o.parentNode;
      while ((!o.offsetWidth || !o.offsetHeight) && o !== document.body);
      return o;
    }
    function rc(o) {
      var s = o.getBoundingClientRect();
      return {
        x: s.width / o.offsetWidth || 1,
        y: s.height / o.offsetHeight || 1,
        boundingClientRect: s,
      };
    }
    var t1 = {
      __proto__: null,
      TRANSFORM: Ku,
      TRANSITION: Pi,
      TRANSITION_END: _p,
      get: yp,
      getStyle: Ei,
      create: Le,
      remove: Ke,
      empty: ts,
      toFront: Ro,
      toBack: Io,
      hasClass: Gu,
      addClass: ve,
      removeClass: it,
      setClass: Xu,
      getClass: ns,
      setOpacity: Jt,
      testProp: rs,
      setTransform: Jr,
      setPosition: st,
      getPosition: eo,
      get disableTextSelection() {
        return Oi;
      },
      get enableTextSelection() {
        return Li;
      },
      disableImageDrag: Ju,
      enableImageDrag: ec,
      preventOutline: nc,
      restoreOutline: is,
      getSizedParentNode: bp,
      getScale: rc,
    };
    function me(o, s, u, f) {
      if (s && typeof s == 'object') for (var p in s) ic(o, p, s[p], u);
      else {
        s = x(s);
        for (var y = 0, C = s.length; y < C; y++) ic(o, s[y], u, f);
      }
      return this;
    }
    var zn = '_leaflet_events';
    function Ue(o, s, u, f) {
      if (arguments.length === 1) wp(o), delete o[zn];
      else if (s && typeof s == 'object') for (var p in s) ac(o, p, s[p], u);
      else if (((s = x(s)), arguments.length === 2))
        wp(o, function (T) {
          return E(s, T) !== -1;
        });
      else for (var y = 0, C = s.length; y < C; y++) ac(o, s[y], u, f);
      return this;
    }
    function wp(o, s) {
      for (var u in o[zn]) {
        var f = u.split(/\d/)[0];
        (!s || s(f)) && ac(o, f, null, null, u);
      }
    }
    var oc = {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout',
      wheel: !('onwheel' in window) && 'mousewheel',
    };
    function ic(o, s, u, f) {
      var p = s + d(u) + (f ? '_' + d(f) : '');
      if (o[zn] && o[zn][p]) return this;
      var y = function (T) {
          return u.call(f || o, T || window.event);
        },
        C = y;
      !ae.touchNative && ae.pointer && s.indexOf('touch') === 0
        ? (y = Wb(o, s, y))
        : ae.touch && s === 'dblclick'
        ? (y = Yb(o, y))
        : 'addEventListener' in o
        ? s === 'touchstart' || s === 'touchmove' || s === 'wheel' || s === 'mousewheel'
          ? o.addEventListener(oc[s] || s, y, ae.passiveEvents ? { passive: !1 } : !1)
          : s === 'mouseenter' || s === 'mouseleave'
          ? ((y = function (T) {
              (T = T || window.event), lc(o, T) && C(T);
            }),
            o.addEventListener(oc[s], y, !1))
          : o.addEventListener(s, C, !1)
        : o.attachEvent('on' + s, y),
        (o[zn] = o[zn] || {}),
        (o[zn][p] = y);
    }
    function ac(o, s, u, f, p) {
      p = p || s + d(u) + (f ? '_' + d(f) : '');
      var y = o[zn] && o[zn][p];
      if (!y) return this;
      !ae.touchNative && ae.pointer && s.indexOf('touch') === 0
        ? Zb(o, s, y)
        : ae.touch && s === 'dblclick'
        ? Jb(o, y)
        : 'removeEventListener' in o
        ? o.removeEventListener(oc[s] || s, y, !1)
        : o.detachEvent('on' + s, y),
        (o[zn][p] = null);
    }
    function to(o) {
      return (
        o.stopPropagation
          ? o.stopPropagation()
          : o.originalEvent
          ? (o.originalEvent._stopped = !0)
          : (o.cancelBubble = !0),
        this
      );
    }
    function sc(o) {
      return ic(o, 'wheel', to), this;
    }
    function zi(o) {
      return (
        me(o, 'mousedown touchstart dblclick contextmenu', to),
        (o._leaflet_disable_click = !0),
        this
      );
    }
    function yt(o) {
      return o.preventDefault ? o.preventDefault() : (o.returnValue = !1), this;
    }
    function no(o) {
      return yt(o), to(o), this;
    }
    function xp(o) {
      if (o.composedPath) return o.composedPath();
      for (var s = [], u = o.target; u; ) s.push(u), (u = u.parentNode);
      return s;
    }
    function Sp(o, s) {
      if (!s) return new I(o.clientX, o.clientY);
      var u = rc(s),
        f = u.boundingClientRect;
      return new I(
        (o.clientX - f.left) / u.x - s.clientLeft,
        (o.clientY - f.top) / u.y - s.clientTop,
      );
    }
    var n1 =
      ae.linux && ae.chrome
        ? window.devicePixelRatio
        : ae.mac
        ? window.devicePixelRatio * 3
        : window.devicePixelRatio > 0
        ? 2 * window.devicePixelRatio
        : 1;
    function kp(o) {
      return ae.edge
        ? o.wheelDeltaY / 2
        : o.deltaY && o.deltaMode === 0
        ? -o.deltaY / n1
        : o.deltaY && o.deltaMode === 1
        ? -o.deltaY * 20
        : o.deltaY && o.deltaMode === 2
        ? -o.deltaY * 60
        : o.deltaX || o.deltaZ
        ? 0
        : o.wheelDelta
        ? (o.wheelDeltaY || o.wheelDelta) / 2
        : o.detail && Math.abs(o.detail) < 32765
        ? -o.detail * 20
        : o.detail
        ? (o.detail / -32765) * 60
        : 0;
    }
    function lc(o, s) {
      var u = s.relatedTarget;
      if (!u) return !0;
      try {
        for (; u && u !== o; ) u = u.parentNode;
      } catch {
        return !1;
      }
      return u !== o;
    }
    var r1 = {
        __proto__: null,
        on: me,
        off: Ue,
        stopPropagation: to,
        disableScrollPropagation: sc,
        disableClickPropagation: zi,
        preventDefault: yt,
        stop: no,
        getPropagationPath: xp,
        getMousePosition: Sp,
        getWheelDelta: kp,
        isExternalTarget: lc,
        addListener: me,
        removeListener: Ue,
      },
      Cp = de.extend({
        run: function (o, s, u, f) {
          this.stop(),
            (this._el = o),
            (this._inProgress = !0),
            (this._duration = u || 0.25),
            (this._easeOutPower = 1 / Math.max(f || 0.5, 0.2)),
            (this._startPos = eo(o)),
            (this._offset = s.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire('start'),
            this._animate();
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = ue(this._animate, this)), this._step();
        },
        _step: function (o) {
          var s = +new Date() - this._startTime,
            u = this._duration * 1e3;
          s < u ? this._runFrame(this._easeOut(s / u), o) : (this._runFrame(1), this._complete());
        },
        _runFrame: function (o, s) {
          var u = this._startPos.add(this._offset.multiplyBy(o));
          s && u._round(), st(this._el, u), this.fire('step');
        },
        _complete: function () {
          ge(this._animId), (this._inProgress = !1), this.fire('end');
        },
        _easeOut: function (o) {
          return 1 - Math.pow(1 - o, this._easeOutPower);
        },
      }),
      Pe = de.extend({
        options: {
          crs: ot,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (o, s) {
          (s = S(this, s)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(o),
            this._initLayout(),
            (this._onResize = l(this._onResize, this)),
            this._initEvents(),
            s.maxBounds && this.setMaxBounds(s.maxBounds),
            s.zoom !== void 0 && (this._zoom = this._limitZoom(s.zoom)),
            s.center && s.zoom !== void 0 && this.setView(Y(s.center), s.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated = Pi && ae.any3d && !ae.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(), me(this._proxy, _p, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (o, s, u) {
          if (
            ((s = s === void 0 ? this._zoom : this._limitZoom(s)),
            (o = this._limitCenter(Y(o), s, this.options.maxBounds)),
            (u = u || {}),
            this._stop(),
            this._loaded && !u.reset && u !== !0)
          ) {
            u.animate !== void 0 &&
              ((u.zoom = i({ animate: u.animate }, u.zoom)),
              (u.pan = i({ animate: u.animate, duration: u.duration }, u.pan)));
            var f =
              this._zoom !== s
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(o, s, u.zoom)
                : this._tryAnimatedPan(o, u.pan);
            if (f) return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(o, s, u.pan && u.pan.noMoveStart), this;
        },
        setZoom: function (o, s) {
          return this._loaded
            ? this.setView(this.getCenter(), o, { zoom: s })
            : ((this._zoom = o), this);
        },
        zoomIn: function (o, s) {
          return (
            (o = o || (ae.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + o, s)
          );
        },
        zoomOut: function (o, s) {
          return (
            (o = o || (ae.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - o, s)
          );
        },
        setZoomAround: function (o, s, u) {
          var f = this.getZoomScale(s),
            p = this.getSize().divideBy(2),
            y = o instanceof I ? o : this.latLngToContainerPoint(o),
            C = y.subtract(p).multiplyBy(1 - 1 / f),
            T = this.containerPointToLatLng(p.add(C));
          return this.setView(T, s, { zoom: u });
        },
        _getBoundsCenterZoom: function (o, s) {
          (s = s || {}), (o = o.getBounds ? o.getBounds() : j(o));
          var u = H(s.paddingTopLeft || s.padding || [0, 0]),
            f = H(s.paddingBottomRight || s.padding || [0, 0]),
            p = this.getBoundsZoom(o, !1, u.add(f));
          if (((p = typeof s.maxZoom == 'number' ? Math.min(s.maxZoom, p) : p), p === 1 / 0))
            return { center: o.getCenter(), zoom: p };
          var y = f.subtract(u).divideBy(2),
            C = this.project(o.getSouthWest(), p),
            T = this.project(o.getNorthEast(), p),
            M = this.unproject(C.add(T).divideBy(2).add(y), p);
          return { center: M, zoom: p };
        },
        fitBounds: function (o, s) {
          if (((o = j(o)), !o.isValid())) throw new Error('Bounds are not valid.');
          var u = this._getBoundsCenterZoom(o, s);
          return this.setView(u.center, u.zoom, s);
        },
        fitWorld: function (o) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            o,
          );
        },
        panTo: function (o, s) {
          return this.setView(o, this._zoom, { pan: s });
        },
        panBy: function (o, s) {
          if (((o = H(o).round()), (s = s || {}), !o.x && !o.y)) return this.fire('moveend');
          if (s.animate !== !0 && !this.getSize().contains(o))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(o)),
                this.getZoom(),
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new Cp()),
              this._panAnim.on(
                { step: this._onPanTransitionStep, end: this._onPanTransitionEnd },
                this,
              )),
            s.noMoveStart || this.fire('movestart'),
            s.animate !== !1)
          ) {
            ve(this._mapPane, 'leaflet-pan-anim');
            var u = this._getMapPanePos().subtract(o).round();
            this._panAnim.run(this._mapPane, u, s.duration || 0.25, s.easeLinearity);
          } else this._rawPanBy(o), this.fire('move').fire('moveend');
          return this;
        },
        flyTo: function (o, s, u) {
          if (((u = u || {}), u.animate === !1 || !ae.any3d)) return this.setView(o, s, u);
          this._stop();
          var f = this.project(this.getCenter()),
            p = this.project(o),
            y = this.getSize(),
            C = this._zoom;
          (o = Y(o)), (s = s === void 0 ? C : s);
          var T = Math.max(y.x, y.y),
            M = T * this.getZoomScale(C, s),
            $ = p.distanceTo(f) || 1,
            ee = 1.42,
            fe = ee * ee;
          function we(lt) {
            var _s = lt ? -1 : 1,
              Z1 = lt ? M : T,
              V1 = M * M - T * T + _s * fe * fe * $ * $,
              q1 = 2 * Z1 * fe * $,
              yc = V1 / q1,
              im = Math.sqrt(yc * yc + 1) - yc,
              Q1 = im < 1e-9 ? -18 : Math.log(im);
            return Q1;
          }
          function tn(lt) {
            return (Math.exp(lt) - Math.exp(-lt)) / 2;
          }
          function oo(lt) {
            return (Math.exp(lt) + Math.exp(-lt)) / 2;
          }
          function vs(lt) {
            return tn(lt) / oo(lt);
          }
          var yr = we(0);
          function _c(lt) {
            return T * (oo(yr) / oo(yr + ee * lt));
          }
          function U1(lt) {
            return (T * (oo(yr) * vs(yr + ee * lt) - tn(yr))) / fe;
          }
          function $1(lt) {
            return 1 - Math.pow(1 - lt, 1.5);
          }
          var H1 = Date.now(),
            rm = (we(1) - yr) / ee,
            W1 = u.duration ? 1e3 * u.duration : 1e3 * rm * 0.8;
          function om() {
            var lt = (Date.now() - H1) / W1,
              _s = $1(lt) * rm;
            lt <= 1
              ? ((this._flyToFrame = ue(om, this)),
                this._move(
                  this.unproject(f.add(p.subtract(f).multiplyBy(U1(_s) / $)), C),
                  this.getScaleZoom(T / _c(_s), C),
                  { flyTo: !0 },
                ))
              : this._move(o, s)._moveEnd(!0);
          }
          return this._moveStart(!0, u.noMoveStart), om.call(this), this;
        },
        flyToBounds: function (o, s) {
          var u = this._getBoundsCenterZoom(o, s);
          return this.flyTo(u.center, u.zoom, s);
        },
        setMaxBounds: function (o) {
          return (
            (o = j(o)),
            this.listens('moveend', this._panInsideMaxBounds) &&
              this.off('moveend', this._panInsideMaxBounds),
            o.isValid()
              ? ((this.options.maxBounds = o),
                this._loaded && this._panInsideMaxBounds(),
                this.on('moveend', this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (o) {
          var s = this.options.minZoom;
          return (
            (this.options.minZoom = o),
            this._loaded &&
            s !== o &&
            (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
              ? this.setZoom(o)
              : this
          );
        },
        setMaxZoom: function (o) {
          var s = this.options.maxZoom;
          return (
            (this.options.maxZoom = o),
            this._loaded &&
            s !== o &&
            (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
              ? this.setZoom(o)
              : this
          );
        },
        panInsideBounds: function (o, s) {
          this._enforcingBounds = !0;
          var u = this.getCenter(),
            f = this._limitCenter(u, this._zoom, j(o));
          return u.equals(f) || this.panTo(f, s), (this._enforcingBounds = !1), this;
        },
        panInside: function (o, s) {
          s = s || {};
          var u = H(s.paddingTopLeft || s.padding || [0, 0]),
            f = H(s.paddingBottomRight || s.padding || [0, 0]),
            p = this.project(this.getCenter()),
            y = this.project(o),
            C = this.getPixelBounds(),
            T = R([C.min.add(u), C.max.subtract(f)]),
            M = T.getSize();
          if (!T.contains(y)) {
            this._enforcingBounds = !0;
            var $ = y.subtract(T.getCenter()),
              ee = T.extend(y).getSize().subtract(M);
            (p.x += $.x < 0 ? -ee.x : ee.x),
              (p.y += $.y < 0 ? -ee.y : ee.y),
              this.panTo(this.unproject(p), s),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (o) {
          if (!this._loaded) return this;
          o = i({ animate: !1, pan: !0 }, o === !0 ? { animate: !0 } : o);
          var s = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var u = this.getSize(),
            f = s.divideBy(2).round(),
            p = u.divideBy(2).round(),
            y = f.subtract(p);
          return !y.x && !y.y
            ? this
            : (o.animate && o.pan
                ? this.panBy(y)
                : (o.pan && this._rawPanBy(y),
                  this.fire('move'),
                  o.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(l(this.fire, this, 'moveend'), 200)))
                    : this.fire('moveend')),
              this.fire('resize', { oldSize: s, newSize: u }));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire('viewreset'),
            this._stop()
          );
        },
        locate: function (o) {
          if (
            ((o = this._locateOptions = i({ timeout: 1e4, watch: !1 }, o)),
            !('geolocation' in navigator))
          )
            return (
              this._handleGeolocationError({ code: 0, message: 'Geolocation not supported.' }), this
            );
          var s = l(this._handleGeolocationResponse, this),
            u = l(this._handleGeolocationError, this);
          return (
            o.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(s, u, o))
              : navigator.geolocation.getCurrentPosition(s, u, o),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (o) {
          if (this._container._leaflet_id) {
            var s = o.code,
              u =
                o.message ||
                (s === 1 ? 'permission denied' : s === 2 ? 'position unavailable' : 'timeout');
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire('locationerror', { code: s, message: 'Geolocation error: ' + u + '.' });
          }
        },
        _handleGeolocationResponse: function (o) {
          if (this._container._leaflet_id) {
            var s = o.coords.latitude,
              u = o.coords.longitude,
              f = new K(s, u),
              p = f.toBounds(o.coords.accuracy * 2),
              y = this._locateOptions;
            if (y.setView) {
              var C = this.getBoundsZoom(p);
              this.setView(f, y.maxZoom ? Math.min(C, y.maxZoom) : C);
            }
            var T = { latlng: f, bounds: p, timestamp: o.timestamp };
            for (var M in o.coords) typeof o.coords[M] == 'number' && (T[M] = o.coords[M]);
            this.fire('locationfound', T);
          }
        },
        addHandler: function (o, s) {
          if (!s) return this;
          var u = (this[o] = new s(this));
          return this._handlers.push(u), this.options[o] && u.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds && this.off('moveend', this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error('Map container is being reused by another instance');
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            (this._container._leaflet_id = void 0), (this._containerId = void 0);
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            Ke(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest && (ge(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire('unload');
          var o;
          for (o in this._layers) this._layers[o].remove();
          for (o in this._panes) Ke(this._panes[o]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (o, s) {
          var u = 'leaflet-pane' + (o ? ' leaflet-' + o.replace('Pane', '') + '-pane' : ''),
            f = Le('div', u, s || this._mapPane);
          return o && (this._panes[o] = f), f;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var o = this.getPixelBounds(),
            s = this.unproject(o.getBottomLeft()),
            u = this.unproject(o.getTopRight());
          return new z(s, u);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (o, s, u) {
          (o = j(o)), (u = H(u || [0, 0]));
          var f = this.getZoom() || 0,
            p = this.getMinZoom(),
            y = this.getMaxZoom(),
            C = o.getNorthWest(),
            T = o.getSouthEast(),
            M = this.getSize().subtract(u),
            $ = R(this.project(T, f), this.project(C, f)).getSize(),
            ee = ae.any3d ? this.options.zoomSnap : 1,
            fe = M.x / $.x,
            we = M.y / $.y,
            tn = s ? Math.max(fe, we) : Math.min(fe, we);
          return (
            (f = this.getScaleZoom(tn, f)),
            ee &&
              ((f = Math.round(f / (ee / 100)) * (ee / 100)),
              (f = s ? Math.ceil(f / ee) * ee : Math.floor(f / ee) * ee)),
            Math.max(p, Math.min(y, f))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new I(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0,
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (o, s) {
          var u = this._getTopLeftPoint(o, s);
          return new P(u, u.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (o) {
          return this.options.crs.getProjectedBounds(o === void 0 ? this.getZoom() : o);
        },
        getPane: function (o) {
          return typeof o == 'string' ? this._panes[o] : o;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (o, s) {
          var u = this.options.crs;
          return (s = s === void 0 ? this._zoom : s), u.scale(o) / u.scale(s);
        },
        getScaleZoom: function (o, s) {
          var u = this.options.crs;
          s = s === void 0 ? this._zoom : s;
          var f = u.zoom(o * u.scale(s));
          return isNaN(f) ? 1 / 0 : f;
        },
        project: function (o, s) {
          return (s = s === void 0 ? this._zoom : s), this.options.crs.latLngToPoint(Y(o), s);
        },
        unproject: function (o, s) {
          return (s = s === void 0 ? this._zoom : s), this.options.crs.pointToLatLng(H(o), s);
        },
        layerPointToLatLng: function (o) {
          var s = H(o).add(this.getPixelOrigin());
          return this.unproject(s);
        },
        latLngToLayerPoint: function (o) {
          var s = this.project(Y(o))._round();
          return s._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (o) {
          return this.options.crs.wrapLatLng(Y(o));
        },
        wrapLatLngBounds: function (o) {
          return this.options.crs.wrapLatLngBounds(j(o));
        },
        distance: function (o, s) {
          return this.options.crs.distance(Y(o), Y(s));
        },
        containerPointToLayerPoint: function (o) {
          return H(o).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (o) {
          return H(o).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (o) {
          var s = this.containerPointToLayerPoint(H(o));
          return this.layerPointToLatLng(s);
        },
        latLngToContainerPoint: function (o) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(Y(o)));
        },
        mouseEventToContainerPoint: function (o) {
          return Sp(o, this._container);
        },
        mouseEventToLayerPoint: function (o) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o));
        },
        mouseEventToLatLng: function (o) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(o));
        },
        _initContainer: function (o) {
          var s = (this._container = yp(o));
          if (s) {
            if (s._leaflet_id) throw new Error('Map container is already initialized.');
          } else throw new Error('Map container not found.');
          me(s, 'scroll', this._onScroll, this), (this._containerId = d(s));
        },
        _initLayout: function () {
          var o = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && ae.any3d),
            ve(
              o,
              'leaflet-container' +
                (ae.touch ? ' leaflet-touch' : '') +
                (ae.retina ? ' leaflet-retina' : '') +
                (ae.ielt9 ? ' leaflet-oldie' : '') +
                (ae.safari ? ' leaflet-safari' : '') +
                (this._fadeAnimated ? ' leaflet-fade-anim' : ''),
            );
          var s = Ei(o, 'position');
          s !== 'absolute' &&
            s !== 'relative' &&
            s !== 'fixed' &&
            s !== 'sticky' &&
            (o.style.position = 'relative'),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var o = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane('mapPane', this._container)),
            st(this._mapPane, new I(0, 0)),
            this.createPane('tilePane'),
            this.createPane('overlayPane'),
            this.createPane('shadowPane'),
            this.createPane('markerPane'),
            this.createPane('tooltipPane'),
            this.createPane('popupPane'),
            this.options.markerZoomAnimation ||
              (ve(o.markerPane, 'leaflet-zoom-hide'), ve(o.shadowPane, 'leaflet-zoom-hide'));
        },
        _resetView: function (o, s, u) {
          st(this._mapPane, new I(0, 0));
          var f = !this._loaded;
          (this._loaded = !0), (s = this._limitZoom(s)), this.fire('viewprereset');
          var p = this._zoom !== s;
          this._moveStart(p, u)._move(o, s)._moveEnd(p),
            this.fire('viewreset'),
            f && this.fire('load');
        },
        _moveStart: function (o, s) {
          return o && this.fire('zoomstart'), s || this.fire('movestart'), this;
        },
        _move: function (o, s, u, f) {
          s === void 0 && (s = this._zoom);
          var p = this._zoom !== s;
          return (
            (this._zoom = s),
            (this._lastCenter = o),
            (this._pixelOrigin = this._getNewPixelOrigin(o)),
            f
              ? u && u.pinch && this.fire('zoom', u)
              : ((p || (u && u.pinch)) && this.fire('zoom', u), this.fire('move', u)),
            this
          );
        },
        _moveEnd: function (o) {
          return o && this.fire('zoomend'), this.fire('moveend');
        },
        _stop: function () {
          return ge(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function (o) {
          st(this._mapPane, this._getMapPanePos().subtract(o));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error('Set map center and zoom first.');
        },
        _initEvents: function (o) {
          (this._targets = {}), (this._targets[d(this._container)] = this);
          var s = o ? Ue : me;
          s(
            this._container,
            'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
            this._handleDOMEvent,
            this,
          ),
            this.options.trackResize && s(window, 'resize', this._onResize, this),
            ae.any3d &&
              this.options.transform3DLimit &&
              (o ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
        },
        _onResize: function () {
          ge(this._resizeRequest),
            (this._resizeRequest = ue(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var o = this._getMapPanePos();
          Math.max(Math.abs(o.x), Math.abs(o.y)) >= this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (o, s) {
          for (
            var u = [],
              f,
              p = s === 'mouseout' || s === 'mouseover',
              y = o.target || o.srcElement,
              C = !1;
            y;

          ) {
            if (
              ((f = this._targets[d(y)]),
              f && (s === 'click' || s === 'preclick') && this._draggableMoved(f))
            ) {
              C = !0;
              break;
            }
            if (
              (f && f.listens(s, !0) && ((p && !lc(y, o)) || (u.push(f), p))) ||
              y === this._container
            )
              break;
            y = y.parentNode;
          }
          return !u.length && !C && !p && this.listens(s, !0) && (u = [this]), u;
        },
        _isClickDisabled: function (o) {
          for (; o && o !== this._container; ) {
            if (o._leaflet_disable_click) return !0;
            o = o.parentNode;
          }
        },
        _handleDOMEvent: function (o) {
          var s = o.target || o.srcElement;
          if (
            !(
              !this._loaded ||
              s._leaflet_disable_events ||
              (o.type === 'click' && this._isClickDisabled(s))
            )
          ) {
            var u = o.type;
            u === 'mousedown' && nc(s), this._fireDOMEvent(o, u);
          }
        },
        _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
        _fireDOMEvent: function (o, s, u) {
          if (o.type === 'click') {
            var f = i({}, o);
            (f.type = 'preclick'), this._fireDOMEvent(f, f.type, u);
          }
          var p = this._findEventTargets(o, s);
          if (u) {
            for (var y = [], C = 0; C < u.length; C++) u[C].listens(s, !0) && y.push(u[C]);
            p = y.concat(p);
          }
          if (p.length) {
            s === 'contextmenu' && yt(o);
            var T = p[0],
              M = { originalEvent: o };
            if (o.type !== 'keypress' && o.type !== 'keydown' && o.type !== 'keyup') {
              var $ = T.getLatLng && (!T._radius || T._radius <= 10);
              (M.containerPoint = $
                ? this.latLngToContainerPoint(T.getLatLng())
                : this.mouseEventToContainerPoint(o)),
                (M.layerPoint = this.containerPointToLayerPoint(M.containerPoint)),
                (M.latlng = $ ? T.getLatLng() : this.layerPointToLatLng(M.layerPoint));
            }
            for (C = 0; C < p.length; C++)
              if (
                (p[C].fire(s, M, !0),
                M.originalEvent._stopped ||
                  (p[C].options.bubblingMouseEvents === !1 && E(this._mouseEvents, s) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (o) {
          return (
            (o = o.dragging && o.dragging.enabled() ? o : this),
            (o.dragging && o.dragging.moved()) || (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var o = 0, s = this._handlers.length; o < s; o++) this._handlers[o].disable();
        },
        whenReady: function (o, s) {
          return this._loaded ? o.call(s || this, { target: this }) : this.on('load', o, s), this;
        },
        _getMapPanePos: function () {
          return eo(this._mapPane) || new I(0, 0);
        },
        _moved: function () {
          var o = this._getMapPanePos();
          return o && !o.equals([0, 0]);
        },
        _getTopLeftPoint: function (o, s) {
          var u = o && s !== void 0 ? this._getNewPixelOrigin(o, s) : this.getPixelOrigin();
          return u.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (o, s) {
          var u = this.getSize()._divideBy(2);
          return this.project(o, s)._subtract(u)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function (o, s, u) {
          var f = this._getNewPixelOrigin(u, s);
          return this.project(o, s)._subtract(f);
        },
        _latLngBoundsToNewLayerBounds: function (o, s, u) {
          var f = this._getNewPixelOrigin(u, s);
          return R([
            this.project(o.getSouthWest(), s)._subtract(f),
            this.project(o.getNorthWest(), s)._subtract(f),
            this.project(o.getSouthEast(), s)._subtract(f),
            this.project(o.getNorthEast(), s)._subtract(f),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (o) {
          return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint());
        },
        _limitCenter: function (o, s, u) {
          if (!u) return o;
          var f = this.project(o, s),
            p = this.getSize().divideBy(2),
            y = new P(f.subtract(p), f.add(p)),
            C = this._getBoundsOffset(y, u, s);
          return Math.abs(C.x) <= 1 && Math.abs(C.y) <= 1 ? o : this.unproject(f.add(C), s);
        },
        _limitOffset: function (o, s) {
          if (!s) return o;
          var u = this.getPixelBounds(),
            f = new P(u.min.add(o), u.max.add(o));
          return o.add(this._getBoundsOffset(f, s));
        },
        _getBoundsOffset: function (o, s, u) {
          var f = R(this.project(s.getNorthEast(), u), this.project(s.getSouthWest(), u)),
            p = f.min.subtract(o.min),
            y = f.max.subtract(o.max),
            C = this._rebound(p.x, -y.x),
            T = this._rebound(p.y, -y.y);
          return new I(C, T);
        },
        _rebound: function (o, s) {
          return o + s > 0
            ? Math.round(o - s) / 2
            : Math.max(0, Math.ceil(o)) - Math.max(0, Math.floor(s));
        },
        _limitZoom: function (o) {
          var s = this.getMinZoom(),
            u = this.getMaxZoom(),
            f = ae.any3d ? this.options.zoomSnap : 1;
          return f && (o = Math.round(o / f) * f), Math.max(s, Math.min(u, o));
        },
        _onPanTransitionStep: function () {
          this.fire('move');
        },
        _onPanTransitionEnd: function () {
          it(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
        },
        _tryAnimatedPan: function (o, s) {
          var u = this._getCenterOffset(o)._trunc();
          return (s && s.animate) !== !0 && !this.getSize().contains(u)
            ? !1
            : (this.panBy(u, s), !0);
        },
        _createAnimProxy: function () {
          var o = (this._proxy = Le('div', 'leaflet-proxy leaflet-zoom-animated'));
          this._panes.mapPane.appendChild(o),
            this.on(
              'zoomanim',
              function (s) {
                var u = Ku,
                  f = this._proxy.style[u];
                Jr(this._proxy, this.project(s.center, s.zoom), this.getZoomScale(s.zoom, 1)),
                  f === this._proxy.style[u] && this._animatingZoom && this._onZoomTransitionEnd();
              },
              this,
            ),
            this.on('load moveend', this._animMoveEnd, this),
            this._on('unload', this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          Ke(this._proxy), this.off('load moveend', this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function () {
          var o = this.getCenter(),
            s = this.getZoom();
          Jr(this._proxy, this.project(o, s), this.getZoomScale(s, 1));
        },
        _catchTransitionEnd: function (o) {
          this._animatingZoom &&
            o.propertyName.indexOf('transform') >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
        },
        _tryAnimatedZoom: function (o, s, u) {
          if (this._animatingZoom) return !0;
          if (
            ((u = u || {}),
            !this._zoomAnimated ||
              u.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(s - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var f = this.getZoomScale(s),
            p = this._getCenterOffset(o)._divideBy(1 - 1 / f);
          return u.animate !== !0 && !this.getSize().contains(p)
            ? !1
            : (ue(function () {
                this._moveStart(!0, !1)._animateZoom(o, s, !0);
              }, this),
              !0);
        },
        _animateZoom: function (o, s, u, f) {
          this._mapPane &&
            (u &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = o),
              (this._animateToZoom = s),
              ve(this._mapPane, 'leaflet-zoom-anim')),
            this.fire('zoomanim', { center: o, zoom: s, noUpdate: f }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(l(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && it(this._mapPane, 'leaflet-zoom-anim'),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire('zoom'),
            delete this._tempFireZoomEvent,
            this.fire('move'),
            this._moveEnd(!0));
        },
      });
    function o1(o, s) {
      return new Pe(o, s);
    }
    var hn = ce.extend({
        options: { position: 'topright' },
        initialize: function (o) {
          S(this, o);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (o) {
          var s = this._map;
          return (
            s && s.removeControl(this), (this.options.position = o), s && s.addControl(this), this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (o) {
          this.remove(), (this._map = o);
          var s = (this._container = this.onAdd(o)),
            u = this.getPosition(),
            f = o._controlCorners[u];
          return (
            ve(s, 'leaflet-control'),
            u.indexOf('bottom') !== -1 ? f.insertBefore(s, f.firstChild) : f.appendChild(s),
            this._map.on('unload', this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (Ke(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off('unload', this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (o) {
          this._map && o && o.screenX > 0 && o.screenY > 0 && this._map.getContainer().focus();
        },
      }),
      Ri = function (o) {
        return new hn(o);
      };
    Pe.include({
      addControl: function (o) {
        return o.addTo(this), this;
      },
      removeControl: function (o) {
        return o.remove(), this;
      },
      _initControlPos: function () {
        var o = (this._controlCorners = {}),
          s = 'leaflet-',
          u = (this._controlContainer = Le('div', s + 'control-container', this._container));
        function f(p, y) {
          var C = s + p + ' ' + s + y;
          o[p + y] = Le('div', C, u);
        }
        f('top', 'left'), f('top', 'right'), f('bottom', 'left'), f('bottom', 'right');
      },
      _clearControlPos: function () {
        for (var o in this._controlCorners) Ke(this._controlCorners[o]);
        Ke(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      },
    });
    var Pp = hn.extend({
        options: {
          collapsed: !0,
          position: 'topright',
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (o, s, u, f) {
            return u < f ? -1 : f < u ? 1 : 0;
          },
        },
        initialize: function (o, s, u) {
          S(this, u),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1);
          for (var f in o) this._addLayer(o[f], f);
          for (f in s) this._addLayer(s[f], f, !0);
        },
        onAdd: function (o) {
          this._initLayout(),
            this._update(),
            (this._map = o),
            o.on('zoomend', this._checkDisabledLayers, this);
          for (var s = 0; s < this._layers.length; s++)
            this._layers[s].layer.on('add remove', this._onLayerChange, this);
          return this._container;
        },
        addTo: function (o) {
          return hn.prototype.addTo.call(this, o), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off('zoomend', this._checkDisabledLayers, this);
          for (var o = 0; o < this._layers.length; o++)
            this._layers[o].layer.off('add remove', this._onLayerChange, this);
        },
        addBaseLayer: function (o, s) {
          return this._addLayer(o, s), this._map ? this._update() : this;
        },
        addOverlay: function (o, s) {
          return this._addLayer(o, s, !0), this._map ? this._update() : this;
        },
        removeLayer: function (o) {
          o.off('add remove', this._onLayerChange, this);
          var s = this._getLayer(d(o));
          return (
            s && this._layers.splice(this._layers.indexOf(s), 1), this._map ? this._update() : this
          );
        },
        expand: function () {
          ve(this._container, 'leaflet-control-layers-expanded'),
            (this._section.style.height = null);
          var o = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            o < this._section.clientHeight
              ? (ve(this._section, 'leaflet-control-layers-scrollbar'),
                (this._section.style.height = o + 'px'))
              : it(this._section, 'leaflet-control-layers-scrollbar'),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return it(this._container, 'leaflet-control-layers-expanded'), this;
        },
        _initLayout: function () {
          var o = 'leaflet-control-layers',
            s = (this._container = Le('div', o)),
            u = this.options.collapsed;
          s.setAttribute('aria-haspopup', !0), zi(s), sc(s);
          var f = (this._section = Le('section', o + '-list'));
          u &&
            (this._map.on('click', this.collapse, this),
            me(s, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this));
          var p = (this._layersLink = Le('a', o + '-toggle', s));
          (p.href = '#'),
            (p.title = 'Layers'),
            p.setAttribute('role', 'button'),
            me(
              p,
              {
                keydown: function (y) {
                  y.keyCode === 13 && this._expandSafely();
                },
                click: function (y) {
                  yt(y), this._expandSafely();
                },
              },
              this,
            ),
            u || this.expand(),
            (this._baseLayersList = Le('div', o + '-base', f)),
            (this._separator = Le('div', o + '-separator', f)),
            (this._overlaysList = Le('div', o + '-overlays', f)),
            s.appendChild(f);
        },
        _getLayer: function (o) {
          for (var s = 0; s < this._layers.length; s++)
            if (this._layers[s] && d(this._layers[s].layer) === o) return this._layers[s];
        },
        _addLayer: function (o, s, u) {
          this._map && o.on('add remove', this._onLayerChange, this),
            this._layers.push({ layer: o, name: s, overlay: u }),
            this.options.sortLayers &&
              this._layers.sort(
                l(function (f, p) {
                  return this.options.sortFunction(f.layer, p.layer, f.name, p.name);
                }, this),
              ),
            this.options.autoZIndex &&
              o.setZIndex &&
              (this._lastZIndex++, o.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          ts(this._baseLayersList), ts(this._overlaysList), (this._layerControlInputs = []);
          var o,
            s,
            u,
            f,
            p = 0;
          for (u = 0; u < this._layers.length; u++)
            (f = this._layers[u]),
              this._addItem(f),
              (s = s || f.overlay),
              (o = o || !f.overlay),
              (p += f.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((o = o && p > 1), (this._baseLayersList.style.display = o ? '' : 'none')),
            (this._separator.style.display = s && o ? '' : 'none'),
            this
          );
        },
        _onLayerChange: function (o) {
          this._handlingClick || this._update();
          var s = this._getLayer(d(o.target)),
            u = s.overlay
              ? o.type === 'add'
                ? 'overlayadd'
                : 'overlayremove'
              : o.type === 'add'
              ? 'baselayerchange'
              : null;
          u && this._map.fire(u, s);
        },
        _createRadioElement: function (o, s) {
          var u =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              o +
              '"' +
              (s ? ' checked="checked"' : '') +
              '/>',
            f = document.createElement('div');
          return (f.innerHTML = u), f.firstChild;
        },
        _addItem: function (o) {
          var s = document.createElement('label'),
            u = this._map.hasLayer(o.layer),
            f;
          o.overlay
            ? ((f = document.createElement('input')),
              (f.type = 'checkbox'),
              (f.className = 'leaflet-control-layers-selector'),
              (f.defaultChecked = u))
            : (f = this._createRadioElement('leaflet-base-layers_' + d(this), u)),
            this._layerControlInputs.push(f),
            (f.layerId = d(o.layer)),
            me(f, 'click', this._onInputClick, this);
          var p = document.createElement('span');
          p.innerHTML = ' ' + o.name;
          var y = document.createElement('span');
          s.appendChild(y), y.appendChild(f), y.appendChild(p);
          var C = o.overlay ? this._overlaysList : this._baseLayersList;
          return C.appendChild(s), this._checkDisabledLayers(), s;
        },
        _onInputClick: function () {
          var o = this._layerControlInputs,
            s,
            u,
            f = [],
            p = [];
          this._handlingClick = !0;
          for (var y = o.length - 1; y >= 0; y--)
            (s = o[y]),
              (u = this._getLayer(s.layerId).layer),
              s.checked ? f.push(u) : s.checked || p.push(u);
          for (y = 0; y < p.length; y++) this._map.hasLayer(p[y]) && this._map.removeLayer(p[y]);
          for (y = 0; y < f.length; y++) this._map.hasLayer(f[y]) || this._map.addLayer(f[y]);
          (this._handlingClick = !1), this._refocusOnMap();
        },
        _checkDisabledLayers: function () {
          for (
            var o = this._layerControlInputs, s, u, f = this._map.getZoom(), p = o.length - 1;
            p >= 0;
            p--
          )
            (s = o[p]),
              (u = this._getLayer(s.layerId).layer),
              (s.disabled =
                (u.options.minZoom !== void 0 && f < u.options.minZoom) ||
                (u.options.maxZoom !== void 0 && f > u.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function () {
          var o = this._section;
          me(o, 'click', yt),
            this.expand(),
            setTimeout(function () {
              Ue(o, 'click', yt);
            });
        },
      }),
      i1 = function (o, s, u) {
        return new Pp(o, s, u);
      },
      uc = hn.extend({
        options: {
          position: 'topleft',
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: 'Zoom in',
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: 'Zoom out',
        },
        onAdd: function (o) {
          var s = 'leaflet-control-zoom',
            u = Le('div', s + ' leaflet-bar'),
            f = this.options;
          return (
            (this._zoomInButton = this._createButton(
              f.zoomInText,
              f.zoomInTitle,
              s + '-in',
              u,
              this._zoomIn,
            )),
            (this._zoomOutButton = this._createButton(
              f.zoomOutText,
              f.zoomOutTitle,
              s + '-out',
              u,
              this._zoomOut,
            )),
            this._updateDisabled(),
            o.on('zoomend zoomlevelschange', this._updateDisabled, this),
            u
          );
        },
        onRemove: function (o) {
          o.off('zoomend zoomlevelschange', this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (o) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(this._map.options.zoomDelta * (o.shiftKey ? 3 : 1));
        },
        _zoomOut: function (o) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(this._map.options.zoomDelta * (o.shiftKey ? 3 : 1));
        },
        _createButton: function (o, s, u, f, p) {
          var y = Le('a', u, f);
          return (
            (y.innerHTML = o),
            (y.href = '#'),
            (y.title = s),
            y.setAttribute('role', 'button'),
            y.setAttribute('aria-label', s),
            zi(y),
            me(y, 'click', no),
            me(y, 'click', p, this),
            me(y, 'click', this._refocusOnMap, this),
            y
          );
        },
        _updateDisabled: function () {
          var o = this._map,
            s = 'leaflet-disabled';
          it(this._zoomInButton, s),
            it(this._zoomOutButton, s),
            this._zoomInButton.setAttribute('aria-disabled', 'false'),
            this._zoomOutButton.setAttribute('aria-disabled', 'false'),
            (this._disabled || o._zoom === o.getMinZoom()) &&
              (ve(this._zoomOutButton, s),
              this._zoomOutButton.setAttribute('aria-disabled', 'true')),
            (this._disabled || o._zoom === o.getMaxZoom()) &&
              (ve(this._zoomInButton, s), this._zoomInButton.setAttribute('aria-disabled', 'true'));
        },
      });
    Pe.mergeOptions({ zoomControl: !0 }),
      Pe.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new uc()), this.addControl(this.zoomControl));
      });
    var a1 = function (o) {
        return new uc(o);
      },
      Ep = hn.extend({
        options: { position: 'bottomleft', maxWidth: 100, metric: !0, imperial: !0 },
        onAdd: function (o) {
          var s = 'leaflet-control-scale',
            u = Le('div', s),
            f = this.options;
          return (
            this._addScales(f, s + '-line', u),
            o.on(f.updateWhenIdle ? 'moveend' : 'move', this._update, this),
            o.whenReady(this._update, this),
            u
          );
        },
        onRemove: function (o) {
          o.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
        },
        _addScales: function (o, s, u) {
          o.metric && (this._mScale = Le('div', s, u)),
            o.imperial && (this._iScale = Le('div', s, u));
        },
        _update: function () {
          var o = this._map,
            s = o.getSize().y / 2,
            u = o.distance(
              o.containerPointToLatLng([0, s]),
              o.containerPointToLatLng([this.options.maxWidth, s]),
            );
          this._updateScales(u);
        },
        _updateScales: function (o) {
          this.options.metric && o && this._updateMetric(o),
            this.options.imperial && o && this._updateImperial(o);
        },
        _updateMetric: function (o) {
          var s = this._getRoundNum(o),
            u = s < 1e3 ? s + ' m' : s / 1e3 + ' km';
          this._updateScale(this._mScale, u, s / o);
        },
        _updateImperial: function (o) {
          var s = o * 3.2808399,
            u,
            f,
            p;
          s > 5280
            ? ((u = s / 5280),
              (f = this._getRoundNum(u)),
              this._updateScale(this._iScale, f + ' mi', f / u))
            : ((p = this._getRoundNum(s)), this._updateScale(this._iScale, p + ' ft', p / s));
        },
        _updateScale: function (o, s, u) {
          (o.style.width = Math.round(this.options.maxWidth * u) + 'px'), (o.innerHTML = s);
        },
        _getRoundNum: function (o) {
          var s = Math.pow(10, (Math.floor(o) + '').length - 1),
            u = o / s;
          return (u = u >= 10 ? 10 : u >= 5 ? 5 : u >= 3 ? 3 : u >= 2 ? 2 : 1), s * u;
        },
      }),
      s1 = function (o) {
        return new Ep(o);
      },
      l1 =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      cc = hn.extend({
        options: {
          position: 'bottomright',
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (ae.inlineSvg ? l1 + ' ' : '') +
            'Leaflet</a>',
        },
        initialize: function (o) {
          S(this, o), (this._attributions = {});
        },
        onAdd: function (o) {
          (o.attributionControl = this),
            (this._container = Le('div', 'leaflet-control-attribution')),
            zi(this._container);
          for (var s in o._layers)
            o._layers[s].getAttribution && this.addAttribution(o._layers[s].getAttribution());
          return this._update(), o.on('layeradd', this._addAttribution, this), this._container;
        },
        onRemove: function (o) {
          o.off('layeradd', this._addAttribution, this);
        },
        _addAttribution: function (o) {
          o.layer.getAttribution &&
            (this.addAttribution(o.layer.getAttribution()),
            o.layer.once(
              'remove',
              function () {
                this.removeAttribution(o.layer.getAttribution());
              },
              this,
            ));
        },
        setPrefix: function (o) {
          return (this.options.prefix = o), this._update(), this;
        },
        addAttribution: function (o) {
          return o
            ? (this._attributions[o] || (this._attributions[o] = 0),
              this._attributions[o]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (o) {
          return o
            ? (this._attributions[o] && (this._attributions[o]--, this._update()), this)
            : this;
        },
        _update: function () {
          if (this._map) {
            var o = [];
            for (var s in this._attributions) this._attributions[s] && o.push(s);
            var u = [];
            this.options.prefix && u.push(this.options.prefix),
              o.length && u.push(o.join(', ')),
              (this._container.innerHTML = u.join(' <span aria-hidden="true">|</span> '));
          }
        },
      });
    Pe.mergeOptions({ attributionControl: !0 }),
      Pe.addInitHook(function () {
        this.options.attributionControl && new cc().addTo(this);
      });
    var u1 = function (o) {
      return new cc(o);
    };
    (hn.Layers = Pp),
      (hn.Zoom = uc),
      (hn.Scale = Ep),
      (hn.Attribution = cc),
      (Ri.layers = i1),
      (Ri.zoom = a1),
      (Ri.scale = s1),
      (Ri.attribution = u1);
    var Rn = ce.extend({
      initialize: function (o) {
        this._map = o;
      },
      enable: function () {
        return this._enabled ? this : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    Rn.addTo = function (o, s) {
      return o.addHandler(s, this), this;
    };
    var c1 = { Events: X },
      Op = ae.touch ? 'touchstart mousedown' : 'mousedown',
      vr = de.extend({
        options: { clickTolerance: 3 },
        initialize: function (o, s, u, f) {
          S(this, f),
            (this._element = o),
            (this._dragStartTarget = s || o),
            (this._preventOutline = u);
        },
        enable: function () {
          this._enabled ||
            (me(this._dragStartTarget, Op, this._onDown, this), (this._enabled = !0));
        },
        disable: function () {
          this._enabled &&
            (vr._dragging === this && this.finishDrag(!0),
            Ue(this._dragStartTarget, Op, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (o) {
          if (this._enabled && ((this._moved = !1), !Gu(this._element, 'leaflet-zoom-anim'))) {
            if (o.touches && o.touches.length !== 1) {
              vr._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(vr._dragging || o.shiftKey || (o.which !== 1 && o.button !== 1 && !o.touches)) &&
              ((vr._dragging = this),
              this._preventOutline && nc(this._element),
              Ju(),
              Oi(),
              !this._moving)
            ) {
              this.fire('down');
              var s = o.touches ? o.touches[0] : o,
                u = bp(this._element);
              (this._startPoint = new I(s.clientX, s.clientY)),
                (this._startPos = eo(this._element)),
                (this._parentScale = rc(u));
              var f = o.type === 'mousedown';
              me(document, f ? 'mousemove' : 'touchmove', this._onMove, this),
                me(document, f ? 'mouseup' : 'touchend touchcancel', this._onUp, this);
            }
          }
        },
        _onMove: function (o) {
          if (this._enabled) {
            if (o.touches && o.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var s = o.touches && o.touches.length === 1 ? o.touches[0] : o,
              u = new I(s.clientX, s.clientY)._subtract(this._startPoint);
            (!u.x && !u.y) ||
              Math.abs(u.x) + Math.abs(u.y) < this.options.clickTolerance ||
              ((u.x /= this._parentScale.x),
              (u.y /= this._parentScale.y),
              yt(o),
              this._moved ||
                (this.fire('dragstart'),
                (this._moved = !0),
                ve(document.body, 'leaflet-dragging'),
                (this._lastTarget = o.target || o.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                ve(this._lastTarget, 'leaflet-drag-target')),
              (this._newPos = this._startPos.add(u)),
              (this._moving = !0),
              (this._lastEvent = o),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var o = { originalEvent: this._lastEvent };
          this.fire('predrag', o), st(this._element, this._newPos), this.fire('drag', o);
        },
        _onUp: function () {
          this._enabled && this.finishDrag();
        },
        finishDrag: function (o) {
          it(document.body, 'leaflet-dragging'),
            this._lastTarget &&
              (it(this._lastTarget, 'leaflet-drag-target'), (this._lastTarget = null)),
            Ue(document, 'mousemove touchmove', this._onMove, this),
            Ue(document, 'mouseup touchend touchcancel', this._onUp, this),
            ec(),
            Li(),
            this._moved &&
              this._moving &&
              this.fire('dragend', {
                noInertia: o,
                distance: this._newPos.distanceTo(this._startPos),
              }),
            (this._moving = !1),
            (vr._dragging = !1);
        },
      });
    function Lp(o, s) {
      if (!s || !o.length) return o.slice();
      var u = s * s;
      return (o = h1(o, u)), (o = f1(o, u)), o;
    }
    function Tp(o, s, u) {
      return Math.sqrt(Ii(o, s, u, !0));
    }
    function d1(o, s, u) {
      return Ii(o, s, u);
    }
    function f1(o, s) {
      var u = o.length,
        f = typeof Uint8Array != void 0 + '' ? Uint8Array : Array,
        p = new f(u);
      (p[0] = p[u - 1] = 1), dc(o, p, s, 0, u - 1);
      var y,
        C = [];
      for (y = 0; y < u; y++) p[y] && C.push(o[y]);
      return C;
    }
    function dc(o, s, u, f, p) {
      var y = 0,
        C,
        T,
        M;
      for (T = f + 1; T <= p - 1; T++) (M = Ii(o[T], o[f], o[p], !0)), M > y && ((C = T), (y = M));
      y > u && ((s[C] = 1), dc(o, s, u, f, C), dc(o, s, u, C, p));
    }
    function h1(o, s) {
      for (var u = [o[0]], f = 1, p = 0, y = o.length; f < y; f++)
        p1(o[f], o[p]) > s && (u.push(o[f]), (p = f));
      return p < y - 1 && u.push(o[y - 1]), u;
    }
    var zp;
    function Rp(o, s, u, f, p) {
      var y = f ? zp : ro(o, u),
        C = ro(s, u),
        T,
        M,
        $;
      for (zp = C; ; ) {
        if (!(y | C)) return [o, s];
        if (y & C) return !1;
        (T = y || C),
          (M = as(o, s, T, u, p)),
          ($ = ro(M, u)),
          T === y ? ((o = M), (y = $)) : ((s = M), (C = $));
      }
    }
    function as(o, s, u, f, p) {
      var y = s.x - o.x,
        C = s.y - o.y,
        T = f.min,
        M = f.max,
        $,
        ee;
      return (
        u & 8
          ? (($ = o.x + (y * (M.y - o.y)) / C), (ee = M.y))
          : u & 4
          ? (($ = o.x + (y * (T.y - o.y)) / C), (ee = T.y))
          : u & 2
          ? (($ = M.x), (ee = o.y + (C * (M.x - o.x)) / y))
          : u & 1 && (($ = T.x), (ee = o.y + (C * (T.x - o.x)) / y)),
        new I($, ee, p)
      );
    }
    function ro(o, s) {
      var u = 0;
      return (
        o.x < s.min.x ? (u |= 1) : o.x > s.max.x && (u |= 2),
        o.y < s.min.y ? (u |= 4) : o.y > s.max.y && (u |= 8),
        u
      );
    }
    function p1(o, s) {
      var u = s.x - o.x,
        f = s.y - o.y;
      return u * u + f * f;
    }
    function Ii(o, s, u, f) {
      var p = s.x,
        y = s.y,
        C = u.x - p,
        T = u.y - y,
        M = C * C + T * T,
        $;
      return (
        M > 0 &&
          (($ = ((o.x - p) * C + (o.y - y) * T) / M),
          $ > 1 ? ((p = u.x), (y = u.y)) : $ > 0 && ((p += C * $), (y += T * $))),
        (C = o.x - p),
        (T = o.y - y),
        f ? C * C + T * T : new I(p, y)
      );
    }
    function en(o) {
      return !k(o[0]) || (typeof o[0][0] != 'object' && typeof o[0][0] < 'u');
    }
    function Ip(o) {
      return console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.'), en(o);
    }
    function Mp(o, s) {
      var u, f, p, y, C, T, M, $;
      if (!o || o.length === 0) throw new Error('latlngs not passed');
      en(o) || (console.warn('latlngs are not flat! Only the first ring will be used'), (o = o[0]));
      var ee = [];
      for (var fe in o) ee.push(s.project(Y(o[fe])));
      var we = ee.length;
      for (u = 0, f = 0; u < we - 1; u++) f += ee[u].distanceTo(ee[u + 1]) / 2;
      if (f === 0) $ = ee[0];
      else
        for (u = 0, y = 0; u < we - 1; u++)
          if (((C = ee[u]), (T = ee[u + 1]), (p = C.distanceTo(T)), (y += p), y > f)) {
            (M = (y - f) / p), ($ = [T.x - M * (T.x - C.x), T.y - M * (T.y - C.y)]);
            break;
          }
      return s.unproject(H($));
    }
    var m1 = {
      __proto__: null,
      simplify: Lp,
      pointToSegmentDistance: Tp,
      closestPointOnSegment: d1,
      clipSegment: Rp,
      _getEdgeIntersection: as,
      _getBitCode: ro,
      _sqClosestPointOnSegment: Ii,
      isFlat: en,
      _flat: Ip,
      polylineCenter: Mp,
    };
    function Np(o, s, u) {
      var f,
        p = [1, 4, 2, 8],
        y,
        C,
        T,
        M,
        $,
        ee,
        fe,
        we;
      for (y = 0, ee = o.length; y < ee; y++) o[y]._code = ro(o[y], s);
      for (T = 0; T < 4; T++) {
        for (fe = p[T], f = [], y = 0, ee = o.length, C = ee - 1; y < ee; C = y++)
          (M = o[y]),
            ($ = o[C]),
            M._code & fe
              ? $._code & fe || ((we = as($, M, fe, s, u)), (we._code = ro(we, s)), f.push(we))
              : ($._code & fe && ((we = as($, M, fe, s, u)), (we._code = ro(we, s)), f.push(we)),
                f.push(M));
        o = f;
      }
      return o;
    }
    function Dp(o, s) {
      var u, f, p, y, C, T, M, $, ee;
      if (!o || o.length === 0) throw new Error('latlngs not passed');
      en(o) || (console.warn('latlngs are not flat! Only the first ring will be used'), (o = o[0]));
      var fe = [];
      for (var we in o) fe.push(s.project(Y(o[we])));
      var tn = fe.length;
      for (T = M = $ = 0, u = 0, f = tn - 1; u < tn; f = u++)
        (p = fe[u]),
          (y = fe[f]),
          (C = p.y * y.x - y.y * p.x),
          (M += (p.x + y.x) * C),
          ($ += (p.y + y.y) * C),
          (T += C * 3);
      return T === 0 ? (ee = fe[0]) : (ee = [M / T, $ / T]), s.unproject(H(ee));
    }
    var g1 = { __proto__: null, clipPolygon: Np, polygonCenter: Dp },
      fc = {
        project: function (o) {
          return new I(o.lng, o.lat);
        },
        unproject: function (o) {
          return new K(o.y, o.x);
        },
        bounds: new P([-180, -90], [180, 90]),
      },
      hc = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new P([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function (o) {
          var s = Math.PI / 180,
            u = this.R,
            f = o.lat * s,
            p = this.R_MINOR / u,
            y = Math.sqrt(1 - p * p),
            C = y * Math.sin(f),
            T = Math.tan(Math.PI / 4 - f / 2) / Math.pow((1 - C) / (1 + C), y / 2);
          return (f = -u * Math.log(Math.max(T, 1e-10))), new I(o.lng * s * u, f);
        },
        unproject: function (o) {
          for (
            var s = 180 / Math.PI,
              u = this.R,
              f = this.R_MINOR / u,
              p = Math.sqrt(1 - f * f),
              y = Math.exp(-o.y / u),
              C = Math.PI / 2 - 2 * Math.atan(y),
              T = 0,
              M = 0.1,
              $;
            T < 15 && Math.abs(M) > 1e-7;
            T++
          )
            ($ = p * Math.sin(C)),
              ($ = Math.pow((1 - $) / (1 + $), p / 2)),
              (M = Math.PI / 2 - 2 * Math.atan(y * $) - C),
              (C += M);
          return new K(C * s, (o.x * s) / u);
        },
      },
      v1 = { __proto__: null, LonLat: fc, Mercator: hc, SphericalMercator: Ve },
      _1 = i({}, se, {
        code: 'EPSG:3395',
        projection: hc,
        transformation: (function () {
          var o = 0.5 / (Math.PI * hc.R);
          return Be(o, 0.5, -o, 0.5);
        })(),
      }),
      Ap = i({}, se, {
        code: 'EPSG:4326',
        projection: fc,
        transformation: Be(1 / 180, 1, -1 / 180, 0.5),
      }),
      y1 = i({}, oe, {
        projection: fc,
        transformation: Be(1, 0, -1, 0),
        scale: function (o) {
          return Math.pow(2, o);
        },
        zoom: function (o) {
          return Math.log(o) / Math.LN2;
        },
        distance: function (o, s) {
          var u = s.lng - o.lng,
            f = s.lat - o.lat;
          return Math.sqrt(u * u + f * f);
        },
        infinite: !0,
      });
    (oe.Earth = se),
      (oe.EPSG3395 = _1),
      (oe.EPSG3857 = ot),
      (oe.EPSG900913 = ke),
      (oe.EPSG4326 = Ap),
      (oe.Simple = y1);
    var pn = de.extend({
      options: { pane: 'overlayPane', attribution: null, bubblingMouseEvents: !0 },
      addTo: function (o) {
        return o.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (o) {
        return o && o.removeLayer(this), this;
      },
      getPane: function (o) {
        return this._map.getPane(o ? this.options[o] || o : this.options.pane);
      },
      addInteractiveTarget: function (o) {
        return (this._map._targets[d(o)] = this), this;
      },
      removeInteractiveTarget: function (o) {
        return delete this._map._targets[d(o)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (o) {
        var s = o.target;
        if (s.hasLayer(this)) {
          if (((this._map = s), (this._zoomAnimated = s._zoomAnimated), this.getEvents)) {
            var u = this.getEvents();
            s.on(u, this),
              this.once(
                'remove',
                function () {
                  s.off(u, this);
                },
                this,
              );
          }
          this.onAdd(s), this.fire('add'), s.fire('layeradd', { layer: this });
        }
      },
    });
    Pe.include({
      addLayer: function (o) {
        if (!o._layerAdd) throw new Error('The provided object is not a Layer.');
        var s = d(o);
        return this._layers[s]
          ? this
          : ((this._layers[s] = o),
            (o._mapToAdd = this),
            o.beforeAdd && o.beforeAdd(this),
            this.whenReady(o._layerAdd, o),
            this);
      },
      removeLayer: function (o) {
        var s = d(o);
        return this._layers[s]
          ? (this._loaded && o.onRemove(this),
            delete this._layers[s],
            this._loaded && (this.fire('layerremove', { layer: o }), o.fire('remove')),
            (o._map = o._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (o) {
        return d(o) in this._layers;
      },
      eachLayer: function (o, s) {
        for (var u in this._layers) o.call(s, this._layers[u]);
        return this;
      },
      _addLayers: function (o) {
        o = o ? (k(o) ? o : [o]) : [];
        for (var s = 0, u = o.length; s < u; s++) this.addLayer(o[s]);
      },
      _addZoomLimit: function (o) {
        (!isNaN(o.options.maxZoom) || !isNaN(o.options.minZoom)) &&
          ((this._zoomBoundLayers[d(o)] = o), this._updateZoomLevels());
      },
      _removeZoomLimit: function (o) {
        var s = d(o);
        this._zoomBoundLayers[s] && (delete this._zoomBoundLayers[s], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var o = 1 / 0,
          s = -1 / 0,
          u = this._getZoomSpan();
        for (var f in this._zoomBoundLayers) {
          var p = this._zoomBoundLayers[f].options;
          (o = p.minZoom === void 0 ? o : Math.min(o, p.minZoom)),
            (s = p.maxZoom === void 0 ? s : Math.max(s, p.maxZoom));
        }
        (this._layersMaxZoom = s === -1 / 0 ? void 0 : s),
          (this._layersMinZoom = o === 1 / 0 ? void 0 : o),
          u !== this._getZoomSpan() && this.fire('zoomlevelschange'),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      },
    });
    var Mo = pn.extend({
        initialize: function (o, s) {
          S(this, s), (this._layers = {});
          var u, f;
          if (o) for (u = 0, f = o.length; u < f; u++) this.addLayer(o[u]);
        },
        addLayer: function (o) {
          var s = this.getLayerId(o);
          return (this._layers[s] = o), this._map && this._map.addLayer(o), this;
        },
        removeLayer: function (o) {
          var s = o in this._layers ? o : this.getLayerId(o);
          return (
            this._map && this._layers[s] && this._map.removeLayer(this._layers[s]),
            delete this._layers[s],
            this
          );
        },
        hasLayer: function (o) {
          var s = typeof o == 'number' ? o : this.getLayerId(o);
          return s in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (o) {
          var s = Array.prototype.slice.call(arguments, 1),
            u,
            f;
          for (u in this._layers) (f = this._layers[u]), f[o] && f[o].apply(f, s);
          return this;
        },
        onAdd: function (o) {
          this.eachLayer(o.addLayer, o);
        },
        onRemove: function (o) {
          this.eachLayer(o.removeLayer, o);
        },
        eachLayer: function (o, s) {
          for (var u in this._layers) o.call(s, this._layers[u]);
          return this;
        },
        getLayer: function (o) {
          return this._layers[o];
        },
        getLayers: function () {
          var o = [];
          return this.eachLayer(o.push, o), o;
        },
        setZIndex: function (o) {
          return this.invoke('setZIndex', o);
        },
        getLayerId: function (o) {
          return d(o);
        },
      }),
      b1 = function (o, s) {
        return new Mo(o, s);
      },
      Gn = Mo.extend({
        addLayer: function (o) {
          return this.hasLayer(o)
            ? this
            : (o.addEventParent(this),
              Mo.prototype.addLayer.call(this, o),
              this.fire('layeradd', { layer: o }));
        },
        removeLayer: function (o) {
          return this.hasLayer(o)
            ? (o in this._layers && (o = this._layers[o]),
              o.removeEventParent(this),
              Mo.prototype.removeLayer.call(this, o),
              this.fire('layerremove', { layer: o }))
            : this;
        },
        setStyle: function (o) {
          return this.invoke('setStyle', o);
        },
        bringToFront: function () {
          return this.invoke('bringToFront');
        },
        bringToBack: function () {
          return this.invoke('bringToBack');
        },
        getBounds: function () {
          var o = new z();
          for (var s in this._layers) {
            var u = this._layers[s];
            o.extend(u.getBounds ? u.getBounds() : u.getLatLng());
          }
          return o;
        },
      }),
      w1 = function (o, s) {
        return new Gn(o, s);
      },
      No = ce.extend({
        options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 },
        initialize: function (o) {
          S(this, o);
        },
        createIcon: function (o) {
          return this._createIcon('icon', o);
        },
        createShadow: function (o) {
          return this._createIcon('shadow', o);
        },
        _createIcon: function (o, s) {
          var u = this._getIconUrl(o);
          if (!u) {
            if (o === 'icon') throw new Error('iconUrl not set in Icon options (see the docs).');
            return null;
          }
          var f = this._createImg(u, s && s.tagName === 'IMG' ? s : null);
          return (
            this._setIconStyles(f, o),
            (this.options.crossOrigin || this.options.crossOrigin === '') &&
              (f.crossOrigin = this.options.crossOrigin === !0 ? '' : this.options.crossOrigin),
            f
          );
        },
        _setIconStyles: function (o, s) {
          var u = this.options,
            f = u[s + 'Size'];
          typeof f == 'number' && (f = [f, f]);
          var p = H(f),
            y = H((s === 'shadow' && u.shadowAnchor) || u.iconAnchor || (p && p.divideBy(2, !0)));
          (o.className = 'leaflet-marker-' + s + ' ' + (u.className || '')),
            y && ((o.style.marginLeft = -y.x + 'px'), (o.style.marginTop = -y.y + 'px')),
            p && ((o.style.width = p.x + 'px'), (o.style.height = p.y + 'px'));
        },
        _createImg: function (o, s) {
          return (s = s || document.createElement('img')), (s.src = o), s;
        },
        _getIconUrl: function (o) {
          return (ae.retina && this.options[o + 'RetinaUrl']) || this.options[o + 'Url'];
        },
      });
    function x1(o) {
      return new No(o);
    }
    var Mi = No.extend({
        options: {
          iconUrl: 'marker-icon.png',
          iconRetinaUrl: 'marker-icon-2x.png',
          shadowUrl: 'marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (o) {
          return (
            typeof Mi.imagePath != 'string' && (Mi.imagePath = this._detectIconPath()),
            (this.options.imagePath || Mi.imagePath) + No.prototype._getIconUrl.call(this, o)
          );
        },
        _stripUrl: function (o) {
          var s = function (u, f, p) {
            var y = f.exec(u);
            return y && y[p];
          };
          return (o = s(o, /^url\((['"])?(.+)\1\)$/, 2)), o && s(o, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function () {
          var o = Le('div', 'leaflet-default-icon-path', document.body),
            s = Ei(o, 'background-image') || Ei(o, 'backgroundImage');
          if ((document.body.removeChild(o), (s = this._stripUrl(s)), s)) return s;
          var u = document.querySelector('link[href$="leaflet.css"]');
          return u ? u.href.substring(0, u.href.length - 11 - 1) : '';
        },
      }),
      Bp = Rn.extend({
        initialize: function (o) {
          this._marker = o;
        },
        addHooks: function () {
          var o = this._marker._icon;
          this._draggable || (this._draggable = new vr(o, o, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this,
              )
              .enable(),
            ve(o, 'leaflet-marker-draggable');
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this,
            )
            .disable(),
            this._marker._icon && it(this._marker._icon, 'leaflet-marker-draggable');
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (o) {
          var s = this._marker,
            u = s._map,
            f = this._marker.options.autoPanSpeed,
            p = this._marker.options.autoPanPadding,
            y = eo(s._icon),
            C = u.getPixelBounds(),
            T = u.getPixelOrigin(),
            M = R(C.min._subtract(T).add(p), C.max._subtract(T).subtract(p));
          if (!M.contains(y)) {
            var $ = H(
              (Math.max(M.max.x, y.x) - M.max.x) / (C.max.x - M.max.x) -
                (Math.min(M.min.x, y.x) - M.min.x) / (C.min.x - M.min.x),
              (Math.max(M.max.y, y.y) - M.max.y) / (C.max.y - M.max.y) -
                (Math.min(M.min.y, y.y) - M.min.y) / (C.min.y - M.min.y),
            ).multiplyBy(f);
            u.panBy($, { animate: !1 }),
              this._draggable._newPos._add($),
              this._draggable._startPos._add($),
              st(s._icon, this._draggable._newPos),
              this._onDrag(o),
              (this._panRequest = ue(this._adjustPan.bind(this, o)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire('movestart').fire('dragstart');
        },
        _onPreDrag: function (o) {
          this._marker.options.autoPan &&
            (ge(this._panRequest), (this._panRequest = ue(this._adjustPan.bind(this, o))));
        },
        _onDrag: function (o) {
          var s = this._marker,
            u = s._shadow,
            f = eo(s._icon),
            p = s._map.layerPointToLatLng(f);
          u && st(u, f),
            (s._latlng = p),
            (o.latlng = p),
            (o.oldLatLng = this._oldLatLng),
            s.fire('move', o).fire('drag', o);
        },
        _onDragEnd: function (o) {
          ge(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire('moveend').fire('dragend', o);
        },
      }),
      ss = pn.extend({
        options: {
          icon: new Mi(),
          interactive: !0,
          keyboard: !0,
          title: '',
          alt: 'Marker',
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: 'markerPane',
          shadowPane: 'shadowPane',
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (o, s) {
          S(this, s), (this._latlng = Y(o));
        },
        onAdd: function (o) {
          (this._zoomAnimated = this._zoomAnimated && o.options.markerZoomAnimation),
            this._zoomAnimated && o.on('zoomanim', this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (o) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && o.off('zoomanim', this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (o) {
          var s = this._latlng;
          return (
            (this._latlng = Y(o)),
            this.update(),
            this.fire('move', { oldLatLng: s, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (o) {
          return (this.options.zIndexOffset = o), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (o) {
          return (
            (this.options.icon = o),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var o = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(o);
          }
          return this;
        },
        _initIcon: function () {
          var o = this.options,
            s = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
            u = o.icon.createIcon(this._icon),
            f = !1;
          u !== this._icon &&
            (this._icon && this._removeIcon(),
            (f = !0),
            o.title && (u.title = o.title),
            u.tagName === 'IMG' && (u.alt = o.alt || '')),
            ve(u, s),
            o.keyboard && ((u.tabIndex = '0'), u.setAttribute('role', 'button')),
            (this._icon = u),
            o.riseOnHover &&
              this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
            this.options.autoPanOnFocus && me(u, 'focus', this._panOnFocus, this);
          var p = o.icon.createShadow(this._shadow),
            y = !1;
          p !== this._shadow && (this._removeShadow(), (y = !0)),
            p && (ve(p, s), (p.alt = '')),
            (this._shadow = p),
            o.opacity < 1 && this._updateOpacity(),
            f && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            p && y && this.getPane(o.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
            this.options.autoPanOnFocus && Ue(this._icon, 'focus', this._panOnFocus, this),
            Ke(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && Ke(this._shadow), (this._shadow = null);
        },
        _setPos: function (o) {
          this._icon && st(this._icon, o),
            this._shadow && st(this._shadow, o),
            (this._zIndex = o.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (o) {
          this._icon && (this._icon.style.zIndex = this._zIndex + o);
        },
        _animateZoom: function (o) {
          var s = this._map._latLngToNewLayerPoint(this._latlng, o.zoom, o.center).round();
          this._setPos(s);
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (ve(this._icon, 'leaflet-interactive'), this.addInteractiveTarget(this._icon), Bp)
          ) {
            var o = this.options.draggable;
            this.dragging && ((o = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new Bp(this)),
              o && this.dragging.enable();
          }
        },
        setOpacity: function (o) {
          return (this.options.opacity = o), this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function () {
          var o = this.options.opacity;
          this._icon && Jt(this._icon, o), this._shadow && Jt(this._shadow, o);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var o = this._map;
          if (o) {
            var s = this.options.icon.options,
              u = s.iconSize ? H(s.iconSize) : H(0, 0),
              f = s.iconAnchor ? H(s.iconAnchor) : H(0, 0);
            o.panInside(this._latlng, { paddingTopLeft: f, paddingBottomRight: u.subtract(f) });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function S1(o, s) {
      return new ss(o, s);
    }
    var _r = pn.extend({
        options: {
          stroke: !0,
          color: '#3388ff',
          weight: 3,
          opacity: 1,
          lineCap: 'round',
          lineJoin: 'round',
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: 'evenodd',
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (o) {
          this._renderer = o.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (o) {
          return (
            S(this, o),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                o &&
                Object.prototype.hasOwnProperty.call(o, 'weight') &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      ls = _r.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (o, s) {
          S(this, s), (this._latlng = Y(o)), (this._radius = this.options.radius);
        },
        setLatLng: function (o) {
          var s = this._latlng;
          return (
            (this._latlng = Y(o)),
            this.redraw(),
            this.fire('move', { oldLatLng: s, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (o) {
          return (this.options.radius = this._radius = o), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (o) {
          var s = (o && o.radius) || this._radius;
          return _r.prototype.setStyle.call(this, o), this.setRadius(s), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
        },
        _updateBounds: function () {
          var o = this._radius,
            s = this._radiusY || o,
            u = this._clickTolerance(),
            f = [o + u, s + u];
          this._pxBounds = new P(this._point.subtract(f), this._point.add(f));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        _containsPoint: function (o) {
          return o.distanceTo(this._point) <= this._radius + this._clickTolerance();
        },
      });
    function k1(o, s) {
      return new ls(o, s);
    }
    var pc = ls.extend({
      initialize: function (o, s, u) {
        if (
          (typeof s == 'number' && (s = i({}, u, { radius: s })),
          S(this, s),
          (this._latlng = Y(o)),
          isNaN(this.options.radius))
        )
          throw new Error('Circle radius cannot be NaN');
        this._mRadius = this.options.radius;
      },
      setRadius: function (o) {
        return (this._mRadius = o), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var o = [this._radius, this._radiusY || this._radius];
        return new z(
          this._map.layerPointToLatLng(this._point.subtract(o)),
          this._map.layerPointToLatLng(this._point.add(o)),
        );
      },
      setStyle: _r.prototype.setStyle,
      _project: function () {
        var o = this._latlng.lng,
          s = this._latlng.lat,
          u = this._map,
          f = u.options.crs;
        if (f.distance === se.distance) {
          var p = Math.PI / 180,
            y = this._mRadius / se.R / p,
            C = u.project([s + y, o]),
            T = u.project([s - y, o]),
            M = C.add(T).divideBy(2),
            $ = u.unproject(M).lat,
            ee =
              Math.acos(
                (Math.cos(y * p) - Math.sin(s * p) * Math.sin($ * p)) /
                  (Math.cos(s * p) * Math.cos($ * p)),
              ) / p;
          (isNaN(ee) || ee === 0) && (ee = y / Math.cos((Math.PI / 180) * s)),
            (this._point = M.subtract(u.getPixelOrigin())),
            (this._radius = isNaN(ee) ? 0 : M.x - u.project([$, o - ee]).x),
            (this._radiusY = M.y - C.y);
        } else {
          var fe = f.unproject(f.project(this._latlng).subtract([this._mRadius, 0]));
          (this._point = u.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - u.latLngToLayerPoint(fe).x);
        }
        this._updateBounds();
      },
    });
    function C1(o, s, u) {
      return new pc(o, s, u);
    }
    var Xn = _r.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (o, s) {
        S(this, s), this._setLatLngs(o);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (o) {
        return this._setLatLngs(o), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (o) {
        for (var s = 1 / 0, u = null, f = Ii, p, y, C = 0, T = this._parts.length; C < T; C++)
          for (var M = this._parts[C], $ = 1, ee = M.length; $ < ee; $++) {
            (p = M[$ - 1]), (y = M[$]);
            var fe = f(o, p, y, !0);
            fe < s && ((s = fe), (u = f(o, p, y)));
          }
        return u && (u.distance = Math.sqrt(s)), u;
      },
      getCenter: function () {
        if (!this._map) throw new Error('Must add layer to map before using getCenter()');
        return Mp(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (o, s) {
        return (
          (s = s || this._defaultShape()),
          (o = Y(o)),
          s.push(o),
          this._bounds.extend(o),
          this.redraw()
        );
      },
      _setLatLngs: function (o) {
        (this._bounds = new z()), (this._latlngs = this._convertLatLngs(o));
      },
      _defaultShape: function () {
        return en(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (o) {
        for (var s = [], u = en(o), f = 0, p = o.length; f < p; f++)
          u ? ((s[f] = Y(o[f])), this._bounds.extend(s[f])) : (s[f] = this._convertLatLngs(o[f]));
        return s;
      },
      _project: function () {
        var o = new P();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, o),
          this._bounds.isValid() && o.isValid() && ((this._rawPxBounds = o), this._updateBounds());
      },
      _updateBounds: function () {
        var o = this._clickTolerance(),
          s = new I(o, o);
        this._rawPxBounds &&
          (this._pxBounds = new P([
            this._rawPxBounds.min.subtract(s),
            this._rawPxBounds.max.add(s),
          ]));
      },
      _projectLatlngs: function (o, s, u) {
        var f = o[0] instanceof K,
          p = o.length,
          y,
          C;
        if (f) {
          for (C = [], y = 0; y < p; y++)
            (C[y] = this._map.latLngToLayerPoint(o[y])), u.extend(C[y]);
          s.push(C);
        } else for (y = 0; y < p; y++) this._projectLatlngs(o[y], s, u);
      },
      _clipPoints: function () {
        var o = this._renderer._bounds;
        if (((this._parts = []), !(!this._pxBounds || !this._pxBounds.intersects(o)))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var s = this._parts,
            u,
            f,
            p,
            y,
            C,
            T,
            M;
          for (u = 0, p = 0, y = this._rings.length; u < y; u++)
            for (M = this._rings[u], f = 0, C = M.length; f < C - 1; f++)
              (T = Rp(M[f], M[f + 1], o, f, !0)),
                T &&
                  ((s[p] = s[p] || []),
                  s[p].push(T[0]),
                  (T[1] !== M[f + 1] || f === C - 2) && (s[p].push(T[1]), p++));
        }
      },
      _simplifyPoints: function () {
        for (var o = this._parts, s = this.options.smoothFactor, u = 0, f = o.length; u < f; u++)
          o[u] = Lp(o[u], s);
      },
      _update: function () {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (o, s) {
        var u,
          f,
          p,
          y,
          C,
          T,
          M = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(o)) return !1;
        for (u = 0, y = this._parts.length; u < y; u++)
          for (T = this._parts[u], f = 0, C = T.length, p = C - 1; f < C; p = f++)
            if (!(!s && f === 0) && Tp(o, T[p], T[f]) <= M) return !0;
        return !1;
      },
    });
    function P1(o, s) {
      return new Xn(o, s);
    }
    Xn._flat = Ip;
    var Do = Xn.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map) throw new Error('Must add layer to map before using getCenter()');
        return Dp(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (o) {
        var s = Xn.prototype._convertLatLngs.call(this, o),
          u = s.length;
        return u >= 2 && s[0] instanceof K && s[0].equals(s[u - 1]) && s.pop(), s;
      },
      _setLatLngs: function (o) {
        Xn.prototype._setLatLngs.call(this, o),
          en(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return en(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var o = this._renderer._bounds,
          s = this.options.weight,
          u = new I(s, s);
        if (
          ((o = new P(o.min.subtract(u), o.max.add(u))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(o)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var f = 0, p = this._rings.length, y; f < p; f++)
            (y = Np(this._rings[f], o, !0)), y.length && this._parts.push(y);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (o) {
        var s = !1,
          u,
          f,
          p,
          y,
          C,
          T,
          M,
          $;
        if (!this._pxBounds || !this._pxBounds.contains(o)) return !1;
        for (y = 0, M = this._parts.length; y < M; y++)
          for (u = this._parts[y], C = 0, $ = u.length, T = $ - 1; C < $; T = C++)
            (f = u[C]),
              (p = u[T]),
              f.y > o.y != p.y > o.y &&
                o.x < ((p.x - f.x) * (o.y - f.y)) / (p.y - f.y) + f.x &&
                (s = !s);
        return s || Xn.prototype._containsPoint.call(this, o, !0);
      },
    });
    function E1(o, s) {
      return new Do(o, s);
    }
    var Yn = Gn.extend({
      initialize: function (o, s) {
        S(this, s), (this._layers = {}), o && this.addData(o);
      },
      addData: function (o) {
        var s = k(o) ? o : o.features,
          u,
          f,
          p;
        if (s) {
          for (u = 0, f = s.length; u < f; u++)
            (p = s[u]),
              (p.geometries || p.geometry || p.features || p.coordinates) && this.addData(p);
          return this;
        }
        var y = this.options;
        if (y.filter && !y.filter(o)) return this;
        var C = us(o, y);
        return C
          ? ((C.feature = fs(o)),
            (C.defaultOptions = C.options),
            this.resetStyle(C),
            y.onEachFeature && y.onEachFeature(o, C),
            this.addLayer(C))
          : this;
      },
      resetStyle: function (o) {
        return o === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((o.options = i({}, o.defaultOptions)),
            this._setLayerStyle(o, this.options.style),
            this);
      },
      setStyle: function (o) {
        return this.eachLayer(function (s) {
          this._setLayerStyle(s, o);
        }, this);
      },
      _setLayerStyle: function (o, s) {
        o.setStyle && (typeof s == 'function' && (s = s(o.feature)), o.setStyle(s));
      },
    });
    function us(o, s) {
      var u = o.type === 'Feature' ? o.geometry : o,
        f = u ? u.coordinates : null,
        p = [],
        y = s && s.pointToLayer,
        C = (s && s.coordsToLatLng) || mc,
        T,
        M,
        $,
        ee;
      if (!f && !u) return null;
      switch (u.type) {
        case 'Point':
          return (T = C(f)), Fp(y, o, T, s);
        case 'MultiPoint':
          for ($ = 0, ee = f.length; $ < ee; $++) (T = C(f[$])), p.push(Fp(y, o, T, s));
          return new Gn(p);
        case 'LineString':
        case 'MultiLineString':
          return (M = cs(f, u.type === 'LineString' ? 0 : 1, C)), new Xn(M, s);
        case 'Polygon':
        case 'MultiPolygon':
          return (M = cs(f, u.type === 'Polygon' ? 1 : 2, C)), new Do(M, s);
        case 'GeometryCollection':
          for ($ = 0, ee = u.geometries.length; $ < ee; $++) {
            var fe = us(
              { geometry: u.geometries[$], type: 'Feature', properties: o.properties },
              s,
            );
            fe && p.push(fe);
          }
          return new Gn(p);
        case 'FeatureCollection':
          for ($ = 0, ee = u.features.length; $ < ee; $++) {
            var we = us(u.features[$], s);
            we && p.push(we);
          }
          return new Gn(p);
        default:
          throw new Error('Invalid GeoJSON object.');
      }
    }
    function Fp(o, s, u, f) {
      return o ? o(s, u) : new ss(u, f && f.markersInheritOptions && f);
    }
    function mc(o) {
      return new K(o[1], o[0], o[2]);
    }
    function cs(o, s, u) {
      for (var f = [], p = 0, y = o.length, C; p < y; p++)
        (C = s ? cs(o[p], s - 1, u) : (u || mc)(o[p])), f.push(C);
      return f;
    }
    function gc(o, s) {
      return (
        (o = Y(o)),
        o.alt !== void 0 ? [m(o.lng, s), m(o.lat, s), m(o.alt, s)] : [m(o.lng, s), m(o.lat, s)]
      );
    }
    function ds(o, s, u, f) {
      for (var p = [], y = 0, C = o.length; y < C; y++)
        p.push(s ? ds(o[y], en(o[y]) ? 0 : s - 1, u, f) : gc(o[y], f));
      return !s && u && p.push(p[0].slice()), p;
    }
    function Ao(o, s) {
      return o.feature ? i({}, o.feature, { geometry: s }) : fs(s);
    }
    function fs(o) {
      return o.type === 'Feature' || o.type === 'FeatureCollection'
        ? o
        : { type: 'Feature', properties: {}, geometry: o };
    }
    var vc = {
      toGeoJSON: function (o) {
        return Ao(this, { type: 'Point', coordinates: gc(this.getLatLng(), o) });
      },
    };
    ss.include(vc),
      pc.include(vc),
      ls.include(vc),
      Xn.include({
        toGeoJSON: function (o) {
          var s = !en(this._latlngs),
            u = ds(this._latlngs, s ? 1 : 0, !1, o);
          return Ao(this, { type: (s ? 'Multi' : '') + 'LineString', coordinates: u });
        },
      }),
      Do.include({
        toGeoJSON: function (o) {
          var s = !en(this._latlngs),
            u = s && !en(this._latlngs[0]),
            f = ds(this._latlngs, u ? 2 : s ? 1 : 0, !0, o);
          return s || (f = [f]), Ao(this, { type: (u ? 'Multi' : '') + 'Polygon', coordinates: f });
        },
      }),
      Mo.include({
        toMultiPoint: function (o) {
          var s = [];
          return (
            this.eachLayer(function (u) {
              s.push(u.toGeoJSON(o).geometry.coordinates);
            }),
            Ao(this, { type: 'MultiPoint', coordinates: s })
          );
        },
        toGeoJSON: function (o) {
          var s = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (s === 'MultiPoint') return this.toMultiPoint(o);
          var u = s === 'GeometryCollection',
            f = [];
          return (
            this.eachLayer(function (p) {
              if (p.toGeoJSON) {
                var y = p.toGeoJSON(o);
                if (u) f.push(y.geometry);
                else {
                  var C = fs(y);
                  C.type === 'FeatureCollection' ? f.push.apply(f, C.features) : f.push(C);
                }
              }
            }),
            u
              ? Ao(this, { geometries: f, type: 'GeometryCollection' })
              : { type: 'FeatureCollection', features: f }
          );
        },
      });
    function jp(o, s) {
      return new Yn(o, s);
    }
    var O1 = jp,
      hs = pn.extend({
        options: {
          opacity: 1,
          alt: '',
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: '',
          zIndex: 1,
          className: '',
        },
        initialize: function (o, s, u) {
          (this._url = o), (this._bounds = j(s)), S(this, u);
        },
        onAdd: function () {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (ve(this._image, 'leaflet-interactive'), this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          Ke(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (o) {
          return (this.options.opacity = o), this._image && this._updateOpacity(), this;
        },
        setStyle: function (o) {
          return o.opacity && this.setOpacity(o.opacity), this;
        },
        bringToFront: function () {
          return this._map && Ro(this._image), this;
        },
        bringToBack: function () {
          return this._map && Io(this._image), this;
        },
        setUrl: function (o) {
          return (this._url = o), this._image && (this._image.src = o), this;
        },
        setBounds: function (o) {
          return (this._bounds = j(o)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var o = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (o.zoomanim = this._animateZoom), o;
        },
        setZIndex: function (o) {
          return (this.options.zIndex = o), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var o = this._url.tagName === 'IMG',
            s = (this._image = o ? this._url : Le('img'));
          if (
            (ve(s, 'leaflet-image-layer'),
            this._zoomAnimated && ve(s, 'leaflet-zoom-animated'),
            this.options.className && ve(s, this.options.className),
            (s.onselectstart = v),
            (s.onmousemove = v),
            (s.onload = l(this.fire, this, 'load')),
            (s.onerror = l(this._overlayOnError, this, 'error')),
            (this.options.crossOrigin || this.options.crossOrigin === '') &&
              (s.crossOrigin = this.options.crossOrigin === !0 ? '' : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            o)
          ) {
            this._url = s.src;
            return;
          }
          (s.src = this._url), (s.alt = this.options.alt);
        },
        _animateZoom: function (o) {
          var s = this._map.getZoomScale(o.zoom),
            u = this._map._latLngBoundsToNewLayerBounds(this._bounds, o.zoom, o.center).min;
          Jr(this._image, u, s);
        },
        _reset: function () {
          var o = this._image,
            s = new P(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast()),
            ),
            u = s.getSize();
          st(o, s.min), (o.style.width = u.x + 'px'), (o.style.height = u.y + 'px');
        },
        _updateOpacity: function () {
          Jt(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire('error');
          var o = this.options.errorOverlayUrl;
          o && this._url !== o && ((this._url = o), (this._image.src = o));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      L1 = function (o, s, u) {
        return new hs(o, s, u);
      },
      Up = hs.extend({
        options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1, playsInline: !0 },
        _initImage: function () {
          var o = this._url.tagName === 'VIDEO',
            s = (this._image = o ? this._url : Le('video'));
          if (
            (ve(s, 'leaflet-image-layer'),
            this._zoomAnimated && ve(s, 'leaflet-zoom-animated'),
            this.options.className && ve(s, this.options.className),
            (s.onselectstart = v),
            (s.onmousemove = v),
            (s.onloadeddata = l(this.fire, this, 'load')),
            o)
          ) {
            for (var u = s.getElementsByTagName('source'), f = [], p = 0; p < u.length; p++)
              f.push(u[p].src);
            this._url = u.length > 0 ? f : [s.src];
            return;
          }
          k(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(s.style, 'objectFit') &&
              (s.style.objectFit = 'fill'),
            (s.autoplay = !!this.options.autoplay),
            (s.loop = !!this.options.loop),
            (s.muted = !!this.options.muted),
            (s.playsInline = !!this.options.playsInline);
          for (var y = 0; y < this._url.length; y++) {
            var C = Le('source');
            (C.src = this._url[y]), s.appendChild(C);
          }
        },
      });
    function T1(o, s, u) {
      return new Up(o, s, u);
    }
    var $p = hs.extend({
      _initImage: function () {
        var o = (this._image = this._url);
        ve(o, 'leaflet-image-layer'),
          this._zoomAnimated && ve(o, 'leaflet-zoom-animated'),
          this.options.className && ve(o, this.options.className),
          (o.onselectstart = v),
          (o.onmousemove = v);
      },
    });
    function z1(o, s, u) {
      return new $p(o, s, u);
    }
    var In = pn.extend({
      options: { interactive: !1, offset: [0, 0], className: '', pane: void 0, content: '' },
      initialize: function (o, s) {
        o && (o instanceof K || k(o))
          ? ((this._latlng = Y(o)), S(this, s))
          : (S(this, o), (this._source = s)),
          this.options.content && (this._content = this.options.content);
      },
      openOn: function (o) {
        return (
          (o = arguments.length ? o : this._source._map), o.hasLayer(this) || o.addLayer(this), this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (o) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = o) : (o = this._source),
              this._prepareOpen(),
              this.openOn(o._map)),
          this
        );
      },
      onAdd: function (o) {
        (this._zoomAnimated = o._zoomAnimated),
          this._container || this._initLayout(),
          o._fadeAnimated && Jt(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          o._fadeAnimated && Jt(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (ve(this._container, 'leaflet-interactive'),
            this.addInteractiveTarget(this._container));
      },
      onRemove: function (o) {
        o._fadeAnimated
          ? (Jt(this._container, 0),
            (this._removeTimeout = setTimeout(l(Ke, void 0, this._container), 200)))
          : Ke(this._container),
          this.options.interactive &&
            (it(this._container, 'leaflet-interactive'),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (o) {
        return (
          (this._latlng = Y(o)), this._map && (this._updatePosition(), this._adjustPan()), this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (o) {
        return (this._content = o), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = 'hidden'),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ''),
          this._adjustPan());
      },
      getEvents: function () {
        var o = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (o.zoomanim = this._animateZoom), o;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && Ro(this._container), this;
      },
      bringToBack: function () {
        return this._map && Io(this._container), this;
      },
      _prepareOpen: function (o) {
        var s = this._source;
        if (!s._map) return !1;
        if (s instanceof Gn) {
          s = null;
          var u = this._source._layers;
          for (var f in u)
            if (u[f]._map) {
              s = u[f];
              break;
            }
          if (!s) return !1;
          this._source = s;
        }
        if (!o)
          if (s.getCenter) o = s.getCenter();
          else if (s.getLatLng) o = s.getLatLng();
          else if (s.getBounds) o = s.getBounds().getCenter();
          else throw new Error('Unable to get source layer LatLng.');
        return this.setLatLng(o), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (this._content) {
          var o = this._contentNode,
            s =
              typeof this._content == 'function'
                ? this._content(this._source || this)
                : this._content;
          if (typeof s == 'string') o.innerHTML = s;
          else {
            for (; o.hasChildNodes(); ) o.removeChild(o.firstChild);
            o.appendChild(s);
          }
          this.fire('contentupdate');
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var o = this._map.latLngToLayerPoint(this._latlng),
            s = H(this.options.offset),
            u = this._getAnchor();
          this._zoomAnimated ? st(this._container, o.add(u)) : (s = s.add(o).add(u));
          var f = (this._containerBottom = -s.y),
            p = (this._containerLeft = -Math.round(this._containerWidth / 2) + s.x);
          (this._container.style.bottom = f + 'px'), (this._container.style.left = p + 'px');
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    Pe.include({
      _initOverlay: function (o, s, u, f) {
        var p = s;
        return p instanceof o || (p = new o(f).setContent(s)), u && p.setLatLng(u), p;
      },
    }),
      pn.include({
        _initOverlay: function (o, s, u, f) {
          var p = u;
          return (
            p instanceof o
              ? (S(p, f), (p._source = this))
              : ((p = s && !f ? s : new o(f, this)), p.setContent(u)),
            p
          );
        },
      });
    var ps = In.extend({
        options: {
          pane: 'popupPane',
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: '',
        },
        openOn: function (o) {
          return (
            (o = arguments.length ? o : this._source._map),
            !o.hasLayer(this) && o._popup && o._popup.options.autoClose && o.removeLayer(o._popup),
            (o._popup = this),
            In.prototype.openOn.call(this, o)
          );
        },
        onAdd: function (o) {
          In.prototype.onAdd.call(this, o),
            o.fire('popupopen', { popup: this }),
            this._source &&
              (this._source.fire('popupopen', { popup: this }, !0),
              this._source instanceof _r || this._source.on('preclick', to));
        },
        onRemove: function (o) {
          In.prototype.onRemove.call(this, o),
            o.fire('popupclose', { popup: this }),
            this._source &&
              (this._source.fire('popupclose', { popup: this }, !0),
              this._source instanceof _r || this._source.off('preclick', to));
        },
        getEvents: function () {
          var o = In.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) && (o.preclick = this.close),
            this.options.keepInView && (o.moveend = this._adjustPan),
            o
          );
        },
        _initLayout: function () {
          var o = 'leaflet-popup',
            s = (this._container = Le(
              'div',
              o + ' ' + (this.options.className || '') + ' leaflet-zoom-animated',
            )),
            u = (this._wrapper = Le('div', o + '-content-wrapper', s));
          if (
            ((this._contentNode = Le('div', o + '-content', u)),
            zi(s),
            sc(this._contentNode),
            me(s, 'contextmenu', to),
            (this._tipContainer = Le('div', o + '-tip-container', s)),
            (this._tip = Le('div', o + '-tip', this._tipContainer)),
            this.options.closeButton)
          ) {
            var f = (this._closeButton = Le('a', o + '-close-button', s));
            f.setAttribute('role', 'button'),
              f.setAttribute('aria-label', 'Close popup'),
              (f.href = '#close'),
              (f.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              me(
                f,
                'click',
                function (p) {
                  yt(p), this.close();
                },
                this,
              );
          }
        },
        _updateLayout: function () {
          var o = this._contentNode,
            s = o.style;
          (s.width = ''), (s.whiteSpace = 'nowrap');
          var u = o.offsetWidth;
          (u = Math.min(u, this.options.maxWidth)),
            (u = Math.max(u, this.options.minWidth)),
            (s.width = u + 1 + 'px'),
            (s.whiteSpace = ''),
            (s.height = '');
          var f = o.offsetHeight,
            p = this.options.maxHeight,
            y = 'leaflet-popup-scrolled';
          p && f > p ? ((s.height = p + 'px'), ve(o, y)) : it(o, y),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (o) {
          var s = this._map._latLngToNewLayerPoint(this._latlng, o.zoom, o.center),
            u = this._getAnchor();
          st(this._container, s.add(u));
        },
        _adjustPan: function () {
          if (this.options.autoPan) {
            if ((this._map._panAnim && this._map._panAnim.stop(), this._autopanning)) {
              this._autopanning = !1;
              return;
            }
            var o = this._map,
              s = parseInt(Ei(this._container, 'marginBottom'), 10) || 0,
              u = this._container.offsetHeight + s,
              f = this._containerWidth,
              p = new I(this._containerLeft, -u - this._containerBottom);
            p._add(eo(this._container));
            var y = o.layerPointToContainerPoint(p),
              C = H(this.options.autoPanPadding),
              T = H(this.options.autoPanPaddingTopLeft || C),
              M = H(this.options.autoPanPaddingBottomRight || C),
              $ = o.getSize(),
              ee = 0,
              fe = 0;
            y.x + f + M.x > $.x && (ee = y.x + f - $.x + M.x),
              y.x - ee - T.x < 0 && (ee = y.x - T.x),
              y.y + u + M.y > $.y && (fe = y.y + u - $.y + M.y),
              y.y - fe - T.y < 0 && (fe = y.y - T.y),
              (ee || fe) &&
                (this.options.keepInView && (this._autopanning = !0),
                o.fire('autopanstart').panBy([ee, fe]));
          }
        },
        _getAnchor: function () {
          return H(
            this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0],
          );
        },
      }),
      R1 = function (o, s) {
        return new ps(o, s);
      };
    Pe.mergeOptions({ closePopupOnClick: !0 }),
      Pe.include({
        openPopup: function (o, s, u) {
          return this._initOverlay(ps, o, s, u).openOn(this), this;
        },
        closePopup: function (o) {
          return (o = arguments.length ? o : this._popup), o && o.close(), this;
        },
      }),
      pn.include({
        bindPopup: function (o, s) {
          return (
            (this._popup = this._initOverlay(ps, this._popup, o, s)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (o) {
          return (
            this._popup &&
              (this instanceof Gn || (this._popup._source = this),
              this._popup._prepareOpen(o || this._latlng) && this._popup.openOn(this._map)),
            this
          );
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (o) {
          return this._popup && this._popup.setContent(o), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (o) {
          if (!(!this._popup || !this._map)) {
            no(o);
            var s = o.layer || o.target;
            if (this._popup._source === s && !(s instanceof _r)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(o.latlng);
              return;
            }
            (this._popup._source = s), this.openPopup(o.latlng);
          }
        },
        _movePopup: function (o) {
          this._popup.setLatLng(o.latlng);
        },
        _onKeyPress: function (o) {
          o.originalEvent.keyCode === 13 && this._openPopup(o);
        },
      });
    var ms = In.extend({
        options: {
          pane: 'tooltipPane',
          offset: [0, 0],
          direction: 'auto',
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (o) {
          In.prototype.onAdd.call(this, o),
            this.setOpacity(this.options.opacity),
            o.fire('tooltipopen', { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire('tooltipopen', { tooltip: this }, !0));
        },
        onRemove: function (o) {
          In.prototype.onRemove.call(this, o),
            o.fire('tooltipclose', { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire('tooltipclose', { tooltip: this }, !0));
        },
        getEvents: function () {
          var o = In.prototype.getEvents.call(this);
          return this.options.permanent || (o.preclick = this.close), o;
        },
        _initLayout: function () {
          var o = 'leaflet-tooltip',
            s =
              o +
              ' ' +
              (this.options.className || '') +
              ' leaflet-zoom-' +
              (this._zoomAnimated ? 'animated' : 'hide');
          (this._contentNode = this._container = Le('div', s)),
            this._container.setAttribute('role', 'tooltip'),
            this._container.setAttribute('id', 'leaflet-tooltip-' + d(this));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (o) {
          var s,
            u,
            f = this._map,
            p = this._container,
            y = f.latLngToContainerPoint(f.getCenter()),
            C = f.layerPointToContainerPoint(o),
            T = this.options.direction,
            M = p.offsetWidth,
            $ = p.offsetHeight,
            ee = H(this.options.offset),
            fe = this._getAnchor();
          T === 'top'
            ? ((s = M / 2), (u = $))
            : T === 'bottom'
            ? ((s = M / 2), (u = 0))
            : T === 'center'
            ? ((s = M / 2), (u = $ / 2))
            : T === 'right'
            ? ((s = 0), (u = $ / 2))
            : T === 'left'
            ? ((s = M), (u = $ / 2))
            : C.x < y.x
            ? ((T = 'right'), (s = 0), (u = $ / 2))
            : ((T = 'left'), (s = M + (ee.x + fe.x) * 2), (u = $ / 2)),
            (o = o.subtract(H(s, u, !0)).add(ee).add(fe)),
            it(p, 'leaflet-tooltip-right'),
            it(p, 'leaflet-tooltip-left'),
            it(p, 'leaflet-tooltip-top'),
            it(p, 'leaflet-tooltip-bottom'),
            ve(p, 'leaflet-tooltip-' + T),
            st(p, o);
        },
        _updatePosition: function () {
          var o = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(o);
        },
        setOpacity: function (o) {
          (this.options.opacity = o), this._container && Jt(this._container, o);
        },
        _animateZoom: function (o) {
          var s = this._map._latLngToNewLayerPoint(this._latlng, o.zoom, o.center);
          this._setPosition(s);
        },
        _getAnchor: function () {
          return H(
            this._source && this._source._getTooltipAnchor && !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0],
          );
        },
      }),
      I1 = function (o, s) {
        return new ms(o, s);
      };
    Pe.include({
      openTooltip: function (o, s, u) {
        return this._initOverlay(ms, o, s, u).openOn(this), this;
      },
      closeTooltip: function (o) {
        return o.close(), this;
      },
    }),
      pn.include({
        bindTooltip: function (o, s) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(ms, this._tooltip, o, s)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (o) {
          if (!(!o && this._tooltipHandlersAdded)) {
            var s = o ? 'off' : 'on',
              u = { remove: this.closeTooltip, move: this._moveTooltip };
            this._tooltip.options.permanent
              ? (u.add = this._openTooltip)
              : ((u.mouseover = this._openTooltip),
                (u.mouseout = this.closeTooltip),
                (u.click = this._openTooltip),
                this._map ? this._addFocusListeners() : (u.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (u.mousemove = this._moveTooltip),
              this[s](u),
              (this._tooltipHandlersAdded = !o);
          }
        },
        openTooltip: function (o) {
          return (
            this._tooltip &&
              (this instanceof Gn || (this._tooltip._source = this),
              this._tooltip._prepareOpen(o) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (o) {
          return this._tooltip && this._tooltip.setContent(o), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (o) {
          var s = o.getElement();
          s &&
            (me(
              s,
              'focus',
              function () {
                (this._tooltip._source = o), this.openTooltip();
              },
              this,
            ),
            me(s, 'blur', this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (o) {
          var s = o.getElement();
          s && s.setAttribute('aria-describedby', this._tooltip._container.id);
        },
        _openTooltip: function (o) {
          !this._tooltip ||
            !this._map ||
            (this._map.dragging && this._map.dragging.moving()) ||
            ((this._tooltip._source = o.layer || o.target),
            this.openTooltip(this._tooltip.options.sticky ? o.latlng : void 0));
        },
        _moveTooltip: function (o) {
          var s = o.latlng,
            u,
            f;
          this._tooltip.options.sticky &&
            o.originalEvent &&
            ((u = this._map.mouseEventToContainerPoint(o.originalEvent)),
            (f = this._map.containerPointToLayerPoint(u)),
            (s = this._map.layerPointToLatLng(f))),
            this._tooltip.setLatLng(s);
        },
      });
    var Hp = No.extend({
      options: { iconSize: [12, 12], html: !1, bgPos: null, className: 'leaflet-div-icon' },
      createIcon: function (o) {
        var s = o && o.tagName === 'DIV' ? o : document.createElement('div'),
          u = this.options;
        if (
          (u.html instanceof Element
            ? (ts(s), s.appendChild(u.html))
            : (s.innerHTML = u.html !== !1 ? u.html : ''),
          u.bgPos)
        ) {
          var f = H(u.bgPos);
          s.style.backgroundPosition = -f.x + 'px ' + -f.y + 'px';
        }
        return this._setIconStyles(s, 'icon'), s;
      },
      createShadow: function () {
        return null;
      },
    });
    function M1(o) {
      return new Hp(o);
    }
    No.Default = Mi;
    var Ni = pn.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: ae.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: 'tilePane',
        className: '',
        keepBuffer: 2,
      },
      initialize: function (o) {
        S(this, o);
      },
      onAdd: function () {
        this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView();
      },
      beforeAdd: function (o) {
        o._addZoomLimit(this);
      },
      onRemove: function (o) {
        this._removeAllTiles(),
          Ke(this._container),
          o._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return this._map && (Ro(this._container), this._setAutoZIndex(Math.max)), this;
      },
      bringToBack: function () {
        return this._map && (Io(this._container), this._setAutoZIndex(Math.min)), this;
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (o) {
        return (this.options.opacity = o), this._updateOpacity(), this;
      },
      setZIndex: function (o) {
        return (this.options.zIndex = o), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var o = this._clampZoom(this._map.getZoom());
          o !== this._tileZoom && ((this._tileZoom = o), this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function () {
        var o = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove || (this._onMove = h(this._onMoveEnd, this.options.updateInterval, this)),
            (o.move = this._onMove)),
          this._zoomAnimated && (o.zoomanim = this._animateZoom),
          o
        );
      },
      createTile: function () {
        return document.createElement('div');
      },
      getTileSize: function () {
        var o = this.options.tileSize;
        return o instanceof I ? o : new I(o, o);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (o) {
        for (
          var s = this.getPane().children, u = -o(-1 / 0, 1 / 0), f = 0, p = s.length, y;
          f < p;
          f++
        )
          (y = s[f].style.zIndex), s[f] !== this._container && y && (u = o(u, +y));
        isFinite(u) && ((this.options.zIndex = u + o(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !ae.ielt9) {
          Jt(this._container, this.options.opacity);
          var o = +new Date(),
            s = !1,
            u = !1;
          for (var f in this._tiles) {
            var p = this._tiles[f];
            if (!(!p.current || !p.loaded)) {
              var y = Math.min(1, (o - p.loaded) / 200);
              Jt(p.el, y),
                y < 1 ? (s = !0) : (p.active ? (u = !0) : this._onOpaqueTile(p), (p.active = !0));
            }
          }
          u && !this._noPrune && this._pruneTiles(),
            s && (ge(this._fadeFrame), (this._fadeFrame = ue(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: v,
      _initContainer: function () {
        this._container ||
          ((this._container = Le('div', 'leaflet-layer ' + (this.options.className || ''))),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var o = this._tileZoom,
          s = this.options.maxZoom;
        if (o !== void 0) {
          for (var u in this._levels)
            (u = Number(u)),
              this._levels[u].el.children.length || u === o
                ? ((this._levels[u].el.style.zIndex = s - Math.abs(o - u)), this._onUpdateLevel(u))
                : (Ke(this._levels[u].el),
                  this._removeTilesAtZoom(u),
                  this._onRemoveLevel(u),
                  delete this._levels[u]);
          var f = this._levels[o],
            p = this._map;
          return (
            f ||
              ((f = this._levels[o] = {}),
              (f.el = Le('div', 'leaflet-tile-container leaflet-zoom-animated', this._container)),
              (f.el.style.zIndex = s),
              (f.origin = p.project(p.unproject(p.getPixelOrigin()), o).round()),
              (f.zoom = o),
              this._setZoomTransform(f, p.getCenter(), p.getZoom()),
              v(f.el.offsetWidth),
              this._onCreateLevel(f)),
            (this._level = f),
            f
          );
        }
      },
      _onUpdateLevel: v,
      _onRemoveLevel: v,
      _onCreateLevel: v,
      _pruneTiles: function () {
        if (this._map) {
          var o,
            s,
            u = this._map.getZoom();
          if (u > this.options.maxZoom || u < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (o in this._tiles) (s = this._tiles[o]), (s.retain = s.current);
          for (o in this._tiles)
            if (((s = this._tiles[o]), s.current && !s.active)) {
              var f = s.coords;
              this._retainParent(f.x, f.y, f.z, f.z - 5) ||
                this._retainChildren(f.x, f.y, f.z, f.z + 2);
            }
          for (o in this._tiles) this._tiles[o].retain || this._removeTile(o);
        }
      },
      _removeTilesAtZoom: function (o) {
        for (var s in this._tiles) this._tiles[s].coords.z === o && this._removeTile(s);
      },
      _removeAllTiles: function () {
        for (var o in this._tiles) this._removeTile(o);
      },
      _invalidateAll: function () {
        for (var o in this._levels)
          Ke(this._levels[o].el), this._onRemoveLevel(Number(o)), delete this._levels[o];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (o, s, u, f) {
        var p = Math.floor(o / 2),
          y = Math.floor(s / 2),
          C = u - 1,
          T = new I(+p, +y);
        T.z = +C;
        var M = this._tileCoordsToKey(T),
          $ = this._tiles[M];
        return $ && $.active
          ? (($.retain = !0), !0)
          : ($ && $.loaded && ($.retain = !0), C > f ? this._retainParent(p, y, C, f) : !1);
      },
      _retainChildren: function (o, s, u, f) {
        for (var p = 2 * o; p < 2 * o + 2; p++)
          for (var y = 2 * s; y < 2 * s + 2; y++) {
            var C = new I(p, y);
            C.z = u + 1;
            var T = this._tileCoordsToKey(C),
              M = this._tiles[T];
            if (M && M.active) {
              M.retain = !0;
              continue;
            } else M && M.loaded && (M.retain = !0);
            u + 1 < f && this._retainChildren(p, y, u + 1, f);
          }
      },
      _resetView: function (o) {
        var s = o && (o.pinch || o.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), s, s);
      },
      _animateZoom: function (o) {
        this._setView(o.center, o.zoom, !0, o.noUpdate);
      },
      _clampZoom: function (o) {
        var s = this.options;
        return s.minNativeZoom !== void 0 && o < s.minNativeZoom
          ? s.minNativeZoom
          : s.maxNativeZoom !== void 0 && s.maxNativeZoom < o
          ? s.maxNativeZoom
          : o;
      },
      _setView: function (o, s, u, f) {
        var p = Math.round(s);
        (this.options.maxZoom !== void 0 && p > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && p < this.options.minZoom)
          ? (p = void 0)
          : (p = this._clampZoom(p));
        var y = this.options.updateWhenZooming && p !== this._tileZoom;
        (!f || y) &&
          ((this._tileZoom = p),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          p !== void 0 && this._update(o),
          u || this._pruneTiles(),
          (this._noPrune = !!u)),
          this._setZoomTransforms(o, s);
      },
      _setZoomTransforms: function (o, s) {
        for (var u in this._levels) this._setZoomTransform(this._levels[u], o, s);
      },
      _setZoomTransform: function (o, s, u) {
        var f = this._map.getZoomScale(u, o.zoom),
          p = o.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(s, u)).round();
        ae.any3d ? Jr(o.el, p, f) : st(o.el, p);
      },
      _resetGrid: function () {
        var o = this._map,
          s = o.options.crs,
          u = (this._tileSize = this.getTileSize()),
          f = this._tileZoom,
          p = this._map.getPixelWorldBounds(this._tileZoom);
        p && (this._globalTileRange = this._pxBoundsToTileRange(p)),
          (this._wrapX = s.wrapLng &&
            !this.options.noWrap && [
              Math.floor(o.project([0, s.wrapLng[0]], f).x / u.x),
              Math.ceil(o.project([0, s.wrapLng[1]], f).x / u.y),
            ]),
          (this._wrapY = s.wrapLat &&
            !this.options.noWrap && [
              Math.floor(o.project([s.wrapLat[0], 0], f).y / u.x),
              Math.ceil(o.project([s.wrapLat[1], 0], f).y / u.y),
            ]);
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (o) {
        var s = this._map,
          u = s._animatingZoom ? Math.max(s._animateToZoom, s.getZoom()) : s.getZoom(),
          f = s.getZoomScale(u, this._tileZoom),
          p = s.project(o, this._tileZoom).floor(),
          y = s.getSize().divideBy(f * 2);
        return new P(p.subtract(y), p.add(y));
      },
      _update: function (o) {
        var s = this._map;
        if (s) {
          var u = this._clampZoom(s.getZoom());
          if ((o === void 0 && (o = s.getCenter()), this._tileZoom !== void 0)) {
            var f = this._getTiledPixelBounds(o),
              p = this._pxBoundsToTileRange(f),
              y = p.getCenter(),
              C = [],
              T = this.options.keepBuffer,
              M = new P(p.getBottomLeft().subtract([T, -T]), p.getTopRight().add([T, -T]));
            if (!(isFinite(p.min.x) && isFinite(p.min.y) && isFinite(p.max.x) && isFinite(p.max.y)))
              throw new Error('Attempted to load an infinite number of tiles');
            for (var $ in this._tiles) {
              var ee = this._tiles[$].coords;
              (ee.z !== this._tileZoom || !M.contains(new I(ee.x, ee.y))) &&
                (this._tiles[$].current = !1);
            }
            if (Math.abs(u - this._tileZoom) > 1) {
              this._setView(o, u);
              return;
            }
            for (var fe = p.min.y; fe <= p.max.y; fe++)
              for (var we = p.min.x; we <= p.max.x; we++) {
                var tn = new I(we, fe);
                if (((tn.z = this._tileZoom), !!this._isValidTile(tn))) {
                  var oo = this._tiles[this._tileCoordsToKey(tn)];
                  oo ? (oo.current = !0) : C.push(tn);
                }
              }
            if (
              (C.sort(function (yr, _c) {
                return yr.distanceTo(y) - _c.distanceTo(y);
              }),
              C.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire('loading'));
              var vs = document.createDocumentFragment();
              for (we = 0; we < C.length; we++) this._addTile(C[we], vs);
              this._level.el.appendChild(vs);
            }
          }
        }
      },
      _isValidTile: function (o) {
        var s = this._map.options.crs;
        if (!s.infinite) {
          var u = this._globalTileRange;
          if (
            (!s.wrapLng && (o.x < u.min.x || o.x > u.max.x)) ||
            (!s.wrapLat && (o.y < u.min.y || o.y > u.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var f = this._tileCoordsToBounds(o);
        return j(this.options.bounds).overlaps(f);
      },
      _keyToBounds: function (o) {
        return this._tileCoordsToBounds(this._keyToTileCoords(o));
      },
      _tileCoordsToNwSe: function (o) {
        var s = this._map,
          u = this.getTileSize(),
          f = o.scaleBy(u),
          p = f.add(u),
          y = s.unproject(f, o.z),
          C = s.unproject(p, o.z);
        return [y, C];
      },
      _tileCoordsToBounds: function (o) {
        var s = this._tileCoordsToNwSe(o),
          u = new z(s[0], s[1]);
        return this.options.noWrap || (u = this._map.wrapLatLngBounds(u)), u;
      },
      _tileCoordsToKey: function (o) {
        return o.x + ':' + o.y + ':' + o.z;
      },
      _keyToTileCoords: function (o) {
        var s = o.split(':'),
          u = new I(+s[0], +s[1]);
        return (u.z = +s[2]), u;
      },
      _removeTile: function (o) {
        var s = this._tiles[o];
        s &&
          (Ke(s.el),
          delete this._tiles[o],
          this.fire('tileunload', { tile: s.el, coords: this._keyToTileCoords(o) }));
      },
      _initTile: function (o) {
        ve(o, 'leaflet-tile');
        var s = this.getTileSize();
        (o.style.width = s.x + 'px'),
          (o.style.height = s.y + 'px'),
          (o.onselectstart = v),
          (o.onmousemove = v),
          ae.ielt9 && this.options.opacity < 1 && Jt(o, this.options.opacity);
      },
      _addTile: function (o, s) {
        var u = this._getTilePos(o),
          f = this._tileCoordsToKey(o),
          p = this.createTile(this._wrapCoords(o), l(this._tileReady, this, o));
        this._initTile(p),
          this.createTile.length < 2 && ue(l(this._tileReady, this, o, null, p)),
          st(p, u),
          (this._tiles[f] = { el: p, coords: o, current: !0 }),
          s.appendChild(p),
          this.fire('tileloadstart', { tile: p, coords: o });
      },
      _tileReady: function (o, s, u) {
        s && this.fire('tileerror', { error: s, tile: u, coords: o });
        var f = this._tileCoordsToKey(o);
        (u = this._tiles[f]),
          u &&
            ((u.loaded = +new Date()),
            this._map._fadeAnimated
              ? (Jt(u.el, 0),
                ge(this._fadeFrame),
                (this._fadeFrame = ue(this._updateOpacity, this)))
              : ((u.active = !0), this._pruneTiles()),
            s ||
              (ve(u.el, 'leaflet-tile-loaded'), this.fire('tileload', { tile: u.el, coords: o })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire('load'),
              ae.ielt9 || !this._map._fadeAnimated
                ? ue(this._pruneTiles, this)
                : setTimeout(l(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (o) {
        return o.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (o) {
        var s = new I(
          this._wrapX ? g(o.x, this._wrapX) : o.x,
          this._wrapY ? g(o.y, this._wrapY) : o.y,
        );
        return (s.z = o.z), s;
      },
      _pxBoundsToTileRange: function (o) {
        var s = this.getTileSize();
        return new P(o.min.unscaleBy(s).floor(), o.max.unscaleBy(s).ceil().subtract([1, 1]));
      },
      _noTilesToLoad: function () {
        for (var o in this._tiles) if (!this._tiles[o].loaded) return !1;
        return !0;
      },
    });
    function N1(o) {
      return new Ni(o);
    }
    var Bo = Ni.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: 'abc',
        errorTileUrl: '',
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (o, s) {
        (this._url = o),
          (s = S(this, s)),
          s.detectRetina && ae.retina && s.maxZoom > 0
            ? ((s.tileSize = Math.floor(s.tileSize / 2)),
              s.zoomReverse
                ? (s.zoomOffset--, (s.minZoom = Math.min(s.maxZoom, s.minZoom + 1)))
                : (s.zoomOffset++, (s.maxZoom = Math.max(s.minZoom, s.maxZoom - 1))),
              (s.minZoom = Math.max(0, s.minZoom)))
            : s.zoomReverse
            ? (s.minZoom = Math.min(s.maxZoom, s.minZoom))
            : (s.maxZoom = Math.max(s.minZoom, s.maxZoom)),
          typeof s.subdomains == 'string' && (s.subdomains = s.subdomains.split('')),
          this.on('tileunload', this._onTileRemove);
      },
      setUrl: function (o, s) {
        return (
          this._url === o && s === void 0 && (s = !0), (this._url = o), s || this.redraw(), this
        );
      },
      createTile: function (o, s) {
        var u = document.createElement('img');
        return (
          me(u, 'load', l(this._tileOnLoad, this, s, u)),
          me(u, 'error', l(this._tileOnError, this, s, u)),
          (this.options.crossOrigin || this.options.crossOrigin === '') &&
            (u.crossOrigin = this.options.crossOrigin === !0 ? '' : this.options.crossOrigin),
          typeof this.options.referrerPolicy == 'string' &&
            (u.referrerPolicy = this.options.referrerPolicy),
          (u.alt = ''),
          (u.src = this.getTileUrl(o)),
          u
        );
      },
      getTileUrl: function (o) {
        var s = {
          r: ae.retina ? '@2x' : '',
          s: this._getSubdomain(o),
          x: o.x,
          y: o.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var u = this._globalTileRange.max.y - o.y;
          this.options.tms && (s.y = u), (s['-y'] = u);
        }
        return b(this._url, i(s, this.options));
      },
      _tileOnLoad: function (o, s) {
        ae.ielt9 ? setTimeout(l(o, this, null, s), 0) : o(null, s);
      },
      _tileOnError: function (o, s, u) {
        var f = this.options.errorTileUrl;
        f && s.getAttribute('src') !== f && (s.src = f), o(u, s);
      },
      _onTileRemove: function (o) {
        o.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var o = this._tileZoom,
          s = this.options.maxZoom,
          u = this.options.zoomReverse,
          f = this.options.zoomOffset;
        return u && (o = s - o), o + f;
      },
      _getSubdomain: function (o) {
        var s = Math.abs(o.x + o.y) % this.options.subdomains.length;
        return this.options.subdomains[s];
      },
      _abortLoading: function () {
        var o, s;
        for (o in this._tiles)
          if (
            this._tiles[o].coords.z !== this._tileZoom &&
            ((s = this._tiles[o].el), (s.onload = v), (s.onerror = v), !s.complete)
          ) {
            s.src = D;
            var u = this._tiles[o].coords;
            Ke(s), delete this._tiles[o], this.fire('tileabort', { tile: s, coords: u });
          }
      },
      _removeTile: function (o) {
        var s = this._tiles[o];
        if (s) return s.el.setAttribute('src', D), Ni.prototype._removeTile.call(this, o);
      },
      _tileReady: function (o, s, u) {
        if (!(!this._map || (u && u.getAttribute('src') === D)))
          return Ni.prototype._tileReady.call(this, o, s, u);
      },
    });
    function Wp(o, s) {
      return new Bo(o, s);
    }
    var Zp = Bo.extend({
      defaultWmsParams: {
        service: 'WMS',
        request: 'GetMap',
        layers: '',
        styles: '',
        format: 'image/jpeg',
        transparent: !1,
        version: '1.1.1',
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (o, s) {
        this._url = o;
        var u = i({}, this.defaultWmsParams);
        for (var f in s) f in this.options || (u[f] = s[f]);
        s = S(this, s);
        var p = s.detectRetina && ae.retina ? 2 : 1,
          y = this.getTileSize();
        (u.width = y.x * p), (u.height = y.y * p), (this.wmsParams = u);
      },
      onAdd: function (o) {
        (this._crs = this.options.crs || o.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var s = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
        (this.wmsParams[s] = this._crs.code), Bo.prototype.onAdd.call(this, o);
      },
      getTileUrl: function (o) {
        var s = this._tileCoordsToNwSe(o),
          u = this._crs,
          f = R(u.project(s[0]), u.project(s[1])),
          p = f.min,
          y = f.max,
          C = (
            this._wmsVersion >= 1.3 && this._crs === Ap
              ? [p.y, p.x, y.y, y.x]
              : [p.x, p.y, y.x, y.y]
          ).join(','),
          T = Bo.prototype.getTileUrl.call(this, o);
        return (
          T +
          O(this.wmsParams, T, this.options.uppercase) +
          (this.options.uppercase ? '&BBOX=' : '&bbox=') +
          C
        );
      },
      setParams: function (o, s) {
        return i(this.wmsParams, o), s || this.redraw(), this;
      },
    });
    function D1(o, s) {
      return new Zp(o, s);
    }
    (Bo.WMS = Zp), (Wp.wms = D1);
    var Jn = pn.extend({
        options: { padding: 0.1 },
        initialize: function (o) {
          S(this, o), d(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            this._zoomAnimated && ve(this._container, 'leaflet-zoom-animated')),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on('update', this._updatePaths, this);
        },
        onRemove: function () {
          this.off('update', this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var o = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return this._zoomAnimated && (o.zoomanim = this._onAnimZoom), o;
        },
        _onAnimZoom: function (o) {
          this._updateTransform(o.center, o.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (o, s) {
          var u = this._map.getZoomScale(s, this._zoom),
            f = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            p = this._map.project(this._center, s),
            y = f.multiplyBy(-u).add(p).subtract(this._map._getNewPixelOrigin(o, s));
          ae.any3d ? Jr(this._container, y, u) : st(this._container, y);
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var o in this._layers) this._layers[o]._reset();
        },
        _onZoomEnd: function () {
          for (var o in this._layers) this._layers[o]._project();
        },
        _updatePaths: function () {
          for (var o in this._layers) this._layers[o]._update();
        },
        _update: function () {
          var o = this.options.padding,
            s = this._map.getSize(),
            u = this._map.containerPointToLayerPoint(s.multiplyBy(-o)).round();
          (this._bounds = new P(u, u.add(s.multiplyBy(1 + o * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        },
      }),
      Vp = Jn.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var o = Jn.prototype.getEvents.call(this);
          return (o.viewprereset = this._onViewPreReset), o;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          Jn.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var o = (this._container = document.createElement('canvas'));
          me(o, 'mousemove', this._onMouseMove, this),
            me(o, 'click dblclick mousedown mouseup contextmenu', this._onClick, this),
            me(o, 'mouseout', this._handleMouseOut, this),
            (o._leaflet_disable_events = !0),
            (this._ctx = o.getContext('2d'));
        },
        _destroyContainer: function () {
          ge(this._redrawRequest),
            delete this._ctx,
            Ke(this._container),
            Ue(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var o;
            this._redrawBounds = null;
            for (var s in this._layers) (o = this._layers[s]), o._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            Jn.prototype._update.call(this);
            var o = this._bounds,
              s = this._container,
              u = o.getSize(),
              f = ae.retina ? 2 : 1;
            st(s, o.min),
              (s.width = f * u.x),
              (s.height = f * u.y),
              (s.style.width = u.x + 'px'),
              (s.style.height = u.y + 'px'),
              ae.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-o.min.x, -o.min.y),
              this.fire('update');
          }
        },
        _reset: function () {
          Jn.prototype._reset.call(this),
            this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (o) {
          this._updateDashArray(o), (this._layers[d(o)] = o);
          var s = (o._order = { layer: o, prev: this._drawLast, next: null });
          this._drawLast && (this._drawLast.next = s),
            (this._drawLast = s),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (o) {
          this._requestRedraw(o);
        },
        _removePath: function (o) {
          var s = o._order,
            u = s.next,
            f = s.prev;
          u ? (u.prev = f) : (this._drawLast = f),
            f ? (f.next = u) : (this._drawFirst = u),
            delete o._order,
            delete this._layers[d(o)],
            this._requestRedraw(o);
        },
        _updatePath: function (o) {
          this._extendRedrawBounds(o), o._project(), o._update(), this._requestRedraw(o);
        },
        _updateStyle: function (o) {
          this._updateDashArray(o), this._requestRedraw(o);
        },
        _updateDashArray: function (o) {
          if (typeof o.options.dashArray == 'string') {
            var s = o.options.dashArray.split(/[, ]+/),
              u = [],
              f,
              p;
            for (p = 0; p < s.length; p++) {
              if (((f = Number(s[p])), isNaN(f))) return;
              u.push(f);
            }
            o.options._dashArray = u;
          } else o.options._dashArray = o.options.dashArray;
        },
        _requestRedraw: function (o) {
          this._map &&
            (this._extendRedrawBounds(o),
            (this._redrawRequest = this._redrawRequest || ue(this._redraw, this)));
        },
        _extendRedrawBounds: function (o) {
          if (o._pxBounds) {
            var s = (o.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new P()),
              this._redrawBounds.extend(o._pxBounds.min.subtract([s, s])),
              this._redrawBounds.extend(o._pxBounds.max.add([s, s]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var o = this._redrawBounds;
          if (o) {
            var s = o.getSize();
            this._ctx.clearRect(o.min.x, o.min.y, s.x, s.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(0, 0, this._container.width, this._container.height),
              this._ctx.restore();
        },
        _draw: function () {
          var o,
            s = this._redrawBounds;
          if ((this._ctx.save(), s)) {
            var u = s.getSize();
            this._ctx.beginPath(), this._ctx.rect(s.min.x, s.min.y, u.x, u.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var f = this._drawFirst; f; f = f.next)
            (o = f.layer), (!s || (o._pxBounds && o._pxBounds.intersects(s))) && o._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (o, s) {
          if (this._drawing) {
            var u,
              f,
              p,
              y,
              C = o._parts,
              T = C.length,
              M = this._ctx;
            if (T) {
              for (M.beginPath(), u = 0; u < T; u++) {
                for (f = 0, p = C[u].length; f < p; f++)
                  (y = C[u][f]), M[f ? 'lineTo' : 'moveTo'](y.x, y.y);
                s && M.closePath();
              }
              this._fillStroke(M, o);
            }
          }
        },
        _updateCircle: function (o) {
          if (!(!this._drawing || o._empty())) {
            var s = o._point,
              u = this._ctx,
              f = Math.max(Math.round(o._radius), 1),
              p = (Math.max(Math.round(o._radiusY), 1) || f) / f;
            p !== 1 && (u.save(), u.scale(1, p)),
              u.beginPath(),
              u.arc(s.x, s.y / p, f, 0, Math.PI * 2, !1),
              p !== 1 && u.restore(),
              this._fillStroke(u, o);
          }
        },
        _fillStroke: function (o, s) {
          var u = s.options;
          u.fill &&
            ((o.globalAlpha = u.fillOpacity),
            (o.fillStyle = u.fillColor || u.color),
            o.fill(u.fillRule || 'evenodd')),
            u.stroke &&
              u.weight !== 0 &&
              (o.setLineDash && o.setLineDash((s.options && s.options._dashArray) || []),
              (o.globalAlpha = u.opacity),
              (o.lineWidth = u.weight),
              (o.strokeStyle = u.color),
              (o.lineCap = u.lineCap),
              (o.lineJoin = u.lineJoin),
              o.stroke());
        },
        _onClick: function (o) {
          for (
            var s = this._map.mouseEventToLayerPoint(o), u, f, p = this._drawFirst;
            p;
            p = p.next
          )
            (u = p.layer),
              u.options.interactive &&
                u._containsPoint(s) &&
                (!(o.type === 'click' || o.type === 'preclick') || !this._map._draggableMoved(u)) &&
                (f = u);
          this._fireEvent(f ? [f] : !1, o);
        },
        _onMouseMove: function (o) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var s = this._map.mouseEventToLayerPoint(o);
            this._handleMouseHover(o, s);
          }
        },
        _handleMouseOut: function (o) {
          var s = this._hoveredLayer;
          s &&
            (it(this._container, 'leaflet-interactive'),
            this._fireEvent([s], o, 'mouseout'),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (o, s) {
          if (!this._mouseHoverThrottled) {
            for (var u, f, p = this._drawFirst; p; p = p.next)
              (u = p.layer), u.options.interactive && u._containsPoint(s) && (f = u);
            f !== this._hoveredLayer &&
              (this._handleMouseOut(o),
              f &&
                (ve(this._container, 'leaflet-interactive'),
                this._fireEvent([f], o, 'mouseover'),
                (this._hoveredLayer = f))),
              this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, o),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                l(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32,
              );
          }
        },
        _fireEvent: function (o, s, u) {
          this._map._fireDOMEvent(s, u || s.type, o);
        },
        _bringToFront: function (o) {
          var s = o._order;
          if (s) {
            var u = s.next,
              f = s.prev;
            if (u) u.prev = f;
            else return;
            f ? (f.next = u) : u && (this._drawFirst = u),
              (s.prev = this._drawLast),
              (this._drawLast.next = s),
              (s.next = null),
              (this._drawLast = s),
              this._requestRedraw(o);
          }
        },
        _bringToBack: function (o) {
          var s = o._order;
          if (s) {
            var u = s.next,
              f = s.prev;
            if (f) f.next = u;
            else return;
            u ? (u.prev = f) : f && (this._drawLast = f),
              (s.prev = null),
              (s.next = this._drawFirst),
              (this._drawFirst.prev = s),
              (this._drawFirst = s),
              this._requestRedraw(o);
          }
        },
      });
    function qp(o) {
      return ae.canvas ? new Vp(o) : null;
    }
    var Di = (function () {
        try {
          return (
            document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
            function (o) {
              return document.createElement('<lvml:' + o + ' class="lvml">');
            }
          );
        } catch {}
        return function (o) {
          return document.createElement(
            '<' + o + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">',
          );
        };
      })(),
      A1 = {
        _initContainer: function () {
          this._container = Le('div', 'leaflet-vml-container');
        },
        _update: function () {
          this._map._animatingZoom || (Jn.prototype._update.call(this), this.fire('update'));
        },
        _initPath: function (o) {
          var s = (o._container = Di('shape'));
          ve(s, 'leaflet-vml-shape ' + (this.options.className || '')),
            (s.coordsize = '1 1'),
            (o._path = Di('path')),
            s.appendChild(o._path),
            this._updateStyle(o),
            (this._layers[d(o)] = o);
        },
        _addPath: function (o) {
          var s = o._container;
          this._container.appendChild(s), o.options.interactive && o.addInteractiveTarget(s);
        },
        _removePath: function (o) {
          var s = o._container;
          Ke(s), o.removeInteractiveTarget(s), delete this._layers[d(o)];
        },
        _updateStyle: function (o) {
          var s = o._stroke,
            u = o._fill,
            f = o.options,
            p = o._container;
          (p.stroked = !!f.stroke),
            (p.filled = !!f.fill),
            f.stroke
              ? (s || (s = o._stroke = Di('stroke')),
                p.appendChild(s),
                (s.weight = f.weight + 'px'),
                (s.color = f.color),
                (s.opacity = f.opacity),
                f.dashArray
                  ? (s.dashStyle = k(f.dashArray)
                      ? f.dashArray.join(' ')
                      : f.dashArray.replace(/( *, *)/g, ' '))
                  : (s.dashStyle = ''),
                (s.endcap = f.lineCap.replace('butt', 'flat')),
                (s.joinstyle = f.lineJoin))
              : s && (p.removeChild(s), (o._stroke = null)),
            f.fill
              ? (u || (u = o._fill = Di('fill')),
                p.appendChild(u),
                (u.color = f.fillColor || f.color),
                (u.opacity = f.fillOpacity))
              : u && (p.removeChild(u), (o._fill = null));
        },
        _updateCircle: function (o) {
          var s = o._point.round(),
            u = Math.round(o._radius),
            f = Math.round(o._radiusY || u);
          this._setPath(
            o,
            o._empty() ? 'M0 0' : 'AL ' + s.x + ',' + s.y + ' ' + u + ',' + f + ' 0,' + 65535 * 360,
          );
        },
        _setPath: function (o, s) {
          o._path.v = s;
        },
        _bringToFront: function (o) {
          Ro(o._container);
        },
        _bringToBack: function (o) {
          Io(o._container);
        },
      },
      gs = ae.vml ? Di : Yt,
      Ai = Jn.extend({
        _initContainer: function () {
          (this._container = gs('svg')),
            this._container.setAttribute('pointer-events', 'none'),
            (this._rootGroup = gs('g')),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          Ke(this._container),
            Ue(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            Jn.prototype._update.call(this);
            var o = this._bounds,
              s = o.getSize(),
              u = this._container;
            (!this._svgSize || !this._svgSize.equals(s)) &&
              ((this._svgSize = s), u.setAttribute('width', s.x), u.setAttribute('height', s.y)),
              st(u, o.min),
              u.setAttribute('viewBox', [o.min.x, o.min.y, s.x, s.y].join(' ')),
              this.fire('update');
          }
        },
        _initPath: function (o) {
          var s = (o._path = gs('path'));
          o.options.className && ve(s, o.options.className),
            o.options.interactive && ve(s, 'leaflet-interactive'),
            this._updateStyle(o),
            (this._layers[d(o)] = o);
        },
        _addPath: function (o) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(o._path),
            o.addInteractiveTarget(o._path);
        },
        _removePath: function (o) {
          Ke(o._path), o.removeInteractiveTarget(o._path), delete this._layers[d(o)];
        },
        _updatePath: function (o) {
          o._project(), o._update();
        },
        _updateStyle: function (o) {
          var s = o._path,
            u = o.options;
          s &&
            (u.stroke
              ? (s.setAttribute('stroke', u.color),
                s.setAttribute('stroke-opacity', u.opacity),
                s.setAttribute('stroke-width', u.weight),
                s.setAttribute('stroke-linecap', u.lineCap),
                s.setAttribute('stroke-linejoin', u.lineJoin),
                u.dashArray
                  ? s.setAttribute('stroke-dasharray', u.dashArray)
                  : s.removeAttribute('stroke-dasharray'),
                u.dashOffset
                  ? s.setAttribute('stroke-dashoffset', u.dashOffset)
                  : s.removeAttribute('stroke-dashoffset'))
              : s.setAttribute('stroke', 'none'),
            u.fill
              ? (s.setAttribute('fill', u.fillColor || u.color),
                s.setAttribute('fill-opacity', u.fillOpacity),
                s.setAttribute('fill-rule', u.fillRule || 'evenodd'))
              : s.setAttribute('fill', 'none'));
        },
        _updatePoly: function (o, s) {
          this._setPath(o, Bt(o._parts, s));
        },
        _updateCircle: function (o) {
          var s = o._point,
            u = Math.max(Math.round(o._radius), 1),
            f = Math.max(Math.round(o._radiusY), 1) || u,
            p = 'a' + u + ',' + f + ' 0 1,0 ',
            y = o._empty()
              ? 'M0 0'
              : 'M' + (s.x - u) + ',' + s.y + p + u * 2 + ',0 ' + p + -u * 2 + ',0 ';
          this._setPath(o, y);
        },
        _setPath: function (o, s) {
          o._path.setAttribute('d', s);
        },
        _bringToFront: function (o) {
          Ro(o._path);
        },
        _bringToBack: function (o) {
          Io(o._path);
        },
      });
    ae.vml && Ai.include(A1);
    function Qp(o) {
      return ae.svg || ae.vml ? new Ai(o) : null;
    }
    Pe.include({
      getRenderer: function (o) {
        var s =
          o.options.renderer ||
          this._getPaneRenderer(o.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          s || (s = this._renderer = this._createRenderer()),
          this.hasLayer(s) || this.addLayer(s),
          s
        );
      },
      _getPaneRenderer: function (o) {
        if (o === 'overlayPane' || o === void 0) return !1;
        var s = this._paneRenderers[o];
        return (
          s === void 0 && ((s = this._createRenderer({ pane: o })), (this._paneRenderers[o] = s)), s
        );
      },
      _createRenderer: function (o) {
        return (this.options.preferCanvas && qp(o)) || Qp(o);
      },
    });
    var Kp = Do.extend({
      initialize: function (o, s) {
        Do.prototype.initialize.call(this, this._boundsToLatLngs(o), s);
      },
      setBounds: function (o) {
        return this.setLatLngs(this._boundsToLatLngs(o));
      },
      _boundsToLatLngs: function (o) {
        return (o = j(o)), [o.getSouthWest(), o.getNorthWest(), o.getNorthEast(), o.getSouthEast()];
      },
    });
    function B1(o, s) {
      return new Kp(o, s);
    }
    (Ai.create = gs),
      (Ai.pointsToPath = Bt),
      (Yn.geometryToLayer = us),
      (Yn.coordsToLatLng = mc),
      (Yn.coordsToLatLngs = cs),
      (Yn.latLngToCoords = gc),
      (Yn.latLngsToCoords = ds),
      (Yn.getFeature = Ao),
      (Yn.asFeature = fs),
      Pe.mergeOptions({ boxZoom: !0 });
    var Gp = Rn.extend({
      initialize: function (o) {
        (this._map = o),
          (this._container = o._container),
          (this._pane = o._panes.overlayPane),
          (this._resetStateTimeout = 0),
          o.on('unload', this._destroy, this);
      },
      addHooks: function () {
        me(this._container, 'mousedown', this._onMouseDown, this);
      },
      removeHooks: function () {
        Ue(this._container, 'mousedown', this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        Ke(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (o) {
        if (!o.shiftKey || (o.which !== 1 && o.button !== 1)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          Oi(),
          Ju(),
          (this._startPoint = this._map.mouseEventToContainerPoint(o)),
          me(
            document,
            {
              contextmenu: no,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this,
          );
      },
      _onMouseMove: function (o) {
        this._moved ||
          ((this._moved = !0),
          (this._box = Le('div', 'leaflet-zoom-box', this._container)),
          ve(this._container, 'leaflet-crosshair'),
          this._map.fire('boxzoomstart')),
          (this._point = this._map.mouseEventToContainerPoint(o));
        var s = new P(this._point, this._startPoint),
          u = s.getSize();
        st(this._box, s.min),
          (this._box.style.width = u.x + 'px'),
          (this._box.style.height = u.y + 'px');
      },
      _finish: function () {
        this._moved && (Ke(this._box), it(this._container, 'leaflet-crosshair')),
          Li(),
          ec(),
          Ue(
            document,
            {
              contextmenu: no,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this,
          );
      },
      _onMouseUp: function (o) {
        if (!(o.which !== 1 && o.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(l(this._resetState, this), 0));
          var s = new z(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point),
          );
          this._map.fitBounds(s).fire('boxzoomend', { boxZoomBounds: s });
        }
      },
      _onKeyDown: function (o) {
        o.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    Pe.addInitHook('addHandler', 'boxZoom', Gp), Pe.mergeOptions({ doubleClickZoom: !0 });
    var Xp = Rn.extend({
      addHooks: function () {
        this._map.on('dblclick', this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off('dblclick', this._onDoubleClick, this);
      },
      _onDoubleClick: function (o) {
        var s = this._map,
          u = s.getZoom(),
          f = s.options.zoomDelta,
          p = o.originalEvent.shiftKey ? u - f : u + f;
        s.options.doubleClickZoom === 'center'
          ? s.setZoom(p)
          : s.setZoomAround(o.containerPoint, p);
      },
    });
    Pe.addInitHook('addHandler', 'doubleClickZoom', Xp),
      Pe.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      });
    var Yp = Rn.extend({
      addHooks: function () {
        if (!this._draggable) {
          var o = this._map;
          (this._draggable = new vr(o._mapPane, o._container)),
            this._draggable.on(
              { dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd },
              this,
            ),
            this._draggable.on('predrag', this._onPreDragLimit, this),
            o.options.worldCopyJump &&
              (this._draggable.on('predrag', this._onPreDragWrap, this),
              o.on('zoomend', this._onZoomEnd, this),
              o.whenReady(this._onZoomEnd, this));
        }
        ve(this._map._container, 'leaflet-grab leaflet-touch-drag'),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        it(this._map._container, 'leaflet-grab'),
          it(this._map._container, 'leaflet-touch-drag'),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var o = this._map;
        if ((o._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)) {
          var s = j(this._map.options.maxBounds);
          (this._offsetLimit = R(
            this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(s.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize()),
          )),
            (this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)));
        } else this._offsetLimit = null;
        o.fire('movestart').fire('dragstart'),
          o.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (o) {
        if (this._map.options.inertia) {
          var s = (this._lastTime = +new Date()),
            u = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
          this._positions.push(u), this._times.push(s), this._prunePositions(s);
        }
        this._map.fire('move', o).fire('drag', o);
      },
      _prunePositions: function (o) {
        for (; this._positions.length > 1 && o - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var o = this._map.getSize().divideBy(2),
          s = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = s.subtract(o).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (o, s) {
        return o - (o - s) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var o = this._draggable._newPos.subtract(this._draggable._startPos),
            s = this._offsetLimit;
          o.x < s.min.x && (o.x = this._viscousLimit(o.x, s.min.x)),
            o.y < s.min.y && (o.y = this._viscousLimit(o.y, s.min.y)),
            o.x > s.max.x && (o.x = this._viscousLimit(o.x, s.max.x)),
            o.y > s.max.y && (o.y = this._viscousLimit(o.y, s.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(o));
        }
      },
      _onPreDragWrap: function () {
        var o = this._worldWidth,
          s = Math.round(o / 2),
          u = this._initialWorldOffset,
          f = this._draggable._newPos.x,
          p = ((f - s + u) % o) + s - u,
          y = ((f + s + u) % o) - s - u,
          C = Math.abs(p + u) < Math.abs(y + u) ? p : y;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = C);
      },
      _onDragEnd: function (o) {
        var s = this._map,
          u = s.options,
          f = !u.inertia || o.noInertia || this._times.length < 2;
        if ((s.fire('dragend', o), f)) s.fire('moveend');
        else {
          this._prunePositions(+new Date());
          var p = this._lastPos.subtract(this._positions[0]),
            y = (this._lastTime - this._times[0]) / 1e3,
            C = u.easeLinearity,
            T = p.multiplyBy(C / y),
            M = T.distanceTo([0, 0]),
            $ = Math.min(u.inertiaMaxSpeed, M),
            ee = T.multiplyBy($ / M),
            fe = $ / (u.inertiaDeceleration * C),
            we = ee.multiplyBy(-fe / 2).round();
          !we.x && !we.y
            ? s.fire('moveend')
            : ((we = s._limitOffset(we, s.options.maxBounds)),
              ue(function () {
                s.panBy(we, { duration: fe, easeLinearity: C, noMoveStart: !0, animate: !0 });
              }));
        }
      },
    });
    Pe.addInitHook('addHandler', 'dragging', Yp),
      Pe.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
    var Jp = Rn.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (o) {
        (this._map = o),
          this._setPanDelta(o.options.keyboardPanDelta),
          this._setZoomDelta(o.options.zoomDelta);
      },
      addHooks: function () {
        var o = this._map._container;
        o.tabIndex <= 0 && (o.tabIndex = '0'),
          me(o, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this),
          this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
      },
      removeHooks: function () {
        this._removeHooks(),
          Ue(
            this._map._container,
            { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown },
            this,
          ),
          this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var o = document.body,
            s = document.documentElement,
            u = o.scrollTop || s.scrollTop,
            f = o.scrollLeft || s.scrollLeft;
          this._map._container.focus(), window.scrollTo(f, u);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire('focus');
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire('blur');
      },
      _setPanDelta: function (o) {
        var s = (this._panKeys = {}),
          u = this.keyCodes,
          f,
          p;
        for (f = 0, p = u.left.length; f < p; f++) s[u.left[f]] = [-1 * o, 0];
        for (f = 0, p = u.right.length; f < p; f++) s[u.right[f]] = [o, 0];
        for (f = 0, p = u.down.length; f < p; f++) s[u.down[f]] = [0, o];
        for (f = 0, p = u.up.length; f < p; f++) s[u.up[f]] = [0, -1 * o];
      },
      _setZoomDelta: function (o) {
        var s = (this._zoomKeys = {}),
          u = this.keyCodes,
          f,
          p;
        for (f = 0, p = u.zoomIn.length; f < p; f++) s[u.zoomIn[f]] = o;
        for (f = 0, p = u.zoomOut.length; f < p; f++) s[u.zoomOut[f]] = -o;
      },
      _addHooks: function () {
        me(document, 'keydown', this._onKeyDown, this);
      },
      _removeHooks: function () {
        Ue(document, 'keydown', this._onKeyDown, this);
      },
      _onKeyDown: function (o) {
        if (!(o.altKey || o.ctrlKey || o.metaKey)) {
          var s = o.keyCode,
            u = this._map,
            f;
          if (s in this._panKeys) {
            if (!u._panAnim || !u._panAnim._inProgress)
              if (
                ((f = this._panKeys[s]),
                o.shiftKey && (f = H(f).multiplyBy(3)),
                u.options.maxBounds && (f = u._limitOffset(H(f), u.options.maxBounds)),
                u.options.worldCopyJump)
              ) {
                var p = u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(f)));
                u.panTo(p);
              } else u.panBy(f);
          } else if (s in this._zoomKeys)
            u.setZoom(u.getZoom() + (o.shiftKey ? 3 : 1) * this._zoomKeys[s]);
          else if (s === 27 && u._popup && u._popup.options.closeOnEscapeKey) u.closePopup();
          else return;
          no(o);
        }
      },
    });
    Pe.addInitHook('addHandler', 'keyboard', Jp),
      Pe.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
    var em = Rn.extend({
      addHooks: function () {
        me(this._map._container, 'wheel', this._onWheelScroll, this), (this._delta = 0);
      },
      removeHooks: function () {
        Ue(this._map._container, 'wheel', this._onWheelScroll, this);
      },
      _onWheelScroll: function (o) {
        var s = kp(o),
          u = this._map.options.wheelDebounceTime;
        (this._delta += s),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(o)),
          this._startTime || (this._startTime = +new Date());
        var f = Math.max(u - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer), (this._timer = setTimeout(l(this._performZoom, this), f)), no(o);
      },
      _performZoom: function () {
        var o = this._map,
          s = o.getZoom(),
          u = this._map.options.zoomSnap || 0;
        o._stop();
        var f = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          p = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(f))))) / Math.LN2,
          y = u ? Math.ceil(p / u) * u : p,
          C = o._limitZoom(s + (this._delta > 0 ? y : -y)) - s;
        (this._delta = 0),
          (this._startTime = null),
          C &&
            (o.options.scrollWheelZoom === 'center'
              ? o.setZoom(s + C)
              : o.setZoomAround(this._lastMousePos, s + C));
      },
    });
    Pe.addInitHook('addHandler', 'scrollWheelZoom', em);
    var F1 = 600;
    Pe.mergeOptions({ tapHold: ae.touchNative && ae.safari && ae.mobile, tapTolerance: 15 });
    var tm = Rn.extend({
      addHooks: function () {
        me(this._map._container, 'touchstart', this._onDown, this);
      },
      removeHooks: function () {
        Ue(this._map._container, 'touchstart', this._onDown, this);
      },
      _onDown: function (o) {
        if ((clearTimeout(this._holdTimeout), o.touches.length === 1)) {
          var s = o.touches[0];
          (this._startPos = this._newPos = new I(s.clientX, s.clientY)),
            (this._holdTimeout = setTimeout(
              l(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (me(document, 'touchend', yt),
                    me(document, 'touchend touchcancel', this._cancelClickPrevent),
                    this._simulateEvent('contextmenu', s));
              }, this),
              F1,
            )),
            me(document, 'touchend touchcancel contextmenu', this._cancel, this),
            me(document, 'touchmove', this._onMove, this);
        }
      },
      _cancelClickPrevent: function o() {
        Ue(document, 'touchend', yt), Ue(document, 'touchend touchcancel', o);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          Ue(document, 'touchend touchcancel contextmenu', this._cancel, this),
          Ue(document, 'touchmove', this._onMove, this);
      },
      _onMove: function (o) {
        var s = o.touches[0];
        this._newPos = new I(s.clientX, s.clientY);
      },
      _isTapValid: function () {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function (o, s) {
        var u = new MouseEvent(o, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: s.screenX,
          screenY: s.screenY,
          clientX: s.clientX,
          clientY: s.clientY,
        });
        (u._simulated = !0), s.target.dispatchEvent(u);
      },
    });
    Pe.addInitHook('addHandler', 'tapHold', tm),
      Pe.mergeOptions({ touchZoom: ae.touch, bounceAtZoomLimits: !0 });
    var nm = Rn.extend({
      addHooks: function () {
        ve(this._map._container, 'leaflet-touch-zoom'),
          me(this._map._container, 'touchstart', this._onTouchStart, this);
      },
      removeHooks: function () {
        it(this._map._container, 'leaflet-touch-zoom'),
          Ue(this._map._container, 'touchstart', this._onTouchStart, this);
      },
      _onTouchStart: function (o) {
        var s = this._map;
        if (!(!o.touches || o.touches.length !== 2 || s._animatingZoom || this._zooming)) {
          var u = s.mouseEventToContainerPoint(o.touches[0]),
            f = s.mouseEventToContainerPoint(o.touches[1]);
          (this._centerPoint = s.getSize()._divideBy(2)),
            (this._startLatLng = s.containerPointToLatLng(this._centerPoint)),
            s.options.touchZoom !== 'center' &&
              (this._pinchStartLatLng = s.containerPointToLatLng(u.add(f)._divideBy(2))),
            (this._startDist = u.distanceTo(f)),
            (this._startZoom = s.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            s._stop(),
            me(document, 'touchmove', this._onTouchMove, this),
            me(document, 'touchend touchcancel', this._onTouchEnd, this),
            yt(o);
        }
      },
      _onTouchMove: function (o) {
        if (!(!o.touches || o.touches.length !== 2 || !this._zooming)) {
          var s = this._map,
            u = s.mouseEventToContainerPoint(o.touches[0]),
            f = s.mouseEventToContainerPoint(o.touches[1]),
            p = u.distanceTo(f) / this._startDist;
          if (
            ((this._zoom = s.getScaleZoom(p, this._startZoom)),
            !s.options.bounceAtZoomLimits &&
              ((this._zoom < s.getMinZoom() && p < 1) || (this._zoom > s.getMaxZoom() && p > 1)) &&
              (this._zoom = s._limitZoom(this._zoom)),
            s.options.touchZoom === 'center')
          ) {
            if (((this._center = this._startLatLng), p === 1)) return;
          } else {
            var y = u._add(f)._divideBy(2)._subtract(this._centerPoint);
            if (p === 1 && y.x === 0 && y.y === 0) return;
            this._center = s.unproject(
              s.project(this._pinchStartLatLng, this._zoom).subtract(y),
              this._zoom,
            );
          }
          this._moved || (s._moveStart(!0, !1), (this._moved = !0)), ge(this._animRequest);
          var C = l(s._move, s, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          (this._animRequest = ue(C, this, !0)), yt(o);
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        (this._zooming = !1),
          ge(this._animRequest),
          Ue(document, 'touchmove', this._onTouchMove, this),
          Ue(document, 'touchend touchcancel', this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap,
              )
            : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      },
    });
    Pe.addInitHook('addHandler', 'touchZoom', nm),
      (Pe.BoxZoom = Gp),
      (Pe.DoubleClickZoom = Xp),
      (Pe.Drag = Yp),
      (Pe.Keyboard = Jp),
      (Pe.ScrollWheelZoom = em),
      (Pe.TapHold = tm),
      (Pe.TouchZoom = nm),
      (n.Bounds = P),
      (n.Browser = ae),
      (n.CRS = oe),
      (n.Canvas = Vp),
      (n.Circle = pc),
      (n.CircleMarker = ls),
      (n.Class = ce),
      (n.Control = hn),
      (n.DivIcon = Hp),
      (n.DivOverlay = In),
      (n.DomEvent = r1),
      (n.DomUtil = t1),
      (n.Draggable = vr),
      (n.Evented = de),
      (n.FeatureGroup = Gn),
      (n.GeoJSON = Yn),
      (n.GridLayer = Ni),
      (n.Handler = Rn),
      (n.Icon = No),
      (n.ImageOverlay = hs),
      (n.LatLng = K),
      (n.LatLngBounds = z),
      (n.Layer = pn),
      (n.LayerGroup = Mo),
      (n.LineUtil = m1),
      (n.Map = Pe),
      (n.Marker = ss),
      (n.Mixin = c1),
      (n.Path = _r),
      (n.Point = I),
      (n.PolyUtil = g1),
      (n.Polygon = Do),
      (n.Polyline = Xn),
      (n.Popup = ps),
      (n.PosAnimation = Cp),
      (n.Projection = v1),
      (n.Rectangle = Kp),
      (n.Renderer = Jn),
      (n.SVG = Ai),
      (n.SVGOverlay = $p),
      (n.TileLayer = Bo),
      (n.Tooltip = ms),
      (n.Transformation = Ae),
      (n.Util = Ze),
      (n.VideoOverlay = Up),
      (n.bind = l),
      (n.bounds = R),
      (n.canvas = qp),
      (n.circle = C1),
      (n.circleMarker = k1),
      (n.control = Ri),
      (n.divIcon = M1),
      (n.extend = i),
      (n.featureGroup = w1),
      (n.geoJSON = jp),
      (n.geoJson = O1),
      (n.gridLayer = N1),
      (n.icon = x1),
      (n.imageOverlay = L1),
      (n.latLng = Y),
      (n.latLngBounds = j),
      (n.layerGroup = b1),
      (n.map = o1),
      (n.marker = S1),
      (n.point = H),
      (n.polygon = E1),
      (n.polyline = P1),
      (n.popup = R1),
      (n.rectangle = B1),
      (n.setOptions = S),
      (n.stamp = d),
      (n.svg = Qp),
      (n.svgOverlay = z1),
      (n.tileLayer = Wp),
      (n.tooltip = I1),
      (n.transformation = Be),
      (n.version = r),
      (n.videoOverlay = T1);
    var j1 = window.L;
    (n.noConflict = function () {
      return (window.L = j1), this;
    }),
      (window.L = n);
  });
})(WR, vf);
var Jc,
  _f = {};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (Jc = {
  get exports() {
    return _f;
  },
  set exports(e) {
    _f = e;
  },
}),
  (function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) {
        var i = arguments[r];
        if (i) {
          var a = typeof i;
          if (a === 'string' || a === 'number') n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var l = t.apply(null, i);
              l && n.push(l);
            }
          } else if (a === 'object') {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes('[native code]')
            ) {
              n.push(i.toString());
              continue;
            }
            for (var c in i) e.call(i, c) && i[c] && n.push(c);
          }
        }
      }
      return n.join(' ');
    }
    Jc.exports ? ((t.default = t), (Jc.exports = t)) : (window.classNames = t);
  })();
var Xe = _f;
const ZR = /(\d*\.?\d+)rem(?=\W|$)/gim,
  VR = (e) =>
    typeof e == 'string'
      ? e.replace(
          ZR,
          (t, n) =>
            `${((i, a = 2) => {
              const l = 10 ** a;
              return Math.round((i + Number.EPSILON) * l) / l;
            })(1.6 * n)}rem`,
        )
      : e,
  Kh = {
    get: (e, t) => {
      if (!(t in e)) return;
      const n = e[t];
      return typeof n == 'object' ? new Proxy(n, Kh) : VR(n);
    },
  },
  yf = new Proxy(zR, Kh);
new Proxy(rb, Kh);
var gv, vv, _v;
function bf() {
  return (
    (bf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bf.apply(this, arguments)
  );
}
var yv,
  bv,
  wv,
  qR = function (e) {
    return N.createElement(
      'svg',
      bf({ viewBox: '0 0 36 36', xmlns: 'http://www.w3.org/2000/svg' }, e),
      gv ||
        (gv = N.createElement('path', {
          d: 'M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z',
        })),
      vv ||
        (vv = N.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z',
        })),
      _v ||
        (_v = N.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z',
        })),
    );
  };
function wf() {
  return (
    (wf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wf.apply(this, arguments)
  );
}
var QR = function (e) {
  return N.createElement(
    'svg',
    wf({ viewBox: '0 0 36 36', xmlns: 'http://www.w3.org/2000/svg' }, e),
    yv ||
      (yv = N.createElement('path', {
        d: 'M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z',
      })),
    bv ||
      (bv = N.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z',
      })),
    wv ||
      (wv = N.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M28 13 16 25l-1.06-1.06 12-12L28 13Z',
      })),
  );
};
function Se(e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (e && typeof document < 'u') {
    var r = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
    (i.type = 'text/css'),
      n === 'top' && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i),
      i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e));
  }
}
var zr,
  vn = {
    panel: 'Panel-module_panel__4VWNp',
    'panel--mobile-layout': 'Panel-module_panel--mobile-layout__OII-B',
    panel__pointer: 'Panel-module_panel__pointer__BETJ8',
    'panel__pointer-position': 'Panel-module_panel__pointer-position__Zer8q',
    'panel__content-wrapper--info': 'Panel-module_panel__content-wrapper--info__lrfgo',
    'panel__pointer--info': 'Panel-module_panel__pointer--info__5OaTN',
    'panel__content-wrapper--success': 'Panel-module_panel__content-wrapper--success__k0JQD',
    'panel__pointer--success': 'Panel-module_panel__pointer--success__O-X6n',
    'panel__content-wrapper--warning': 'Panel-module_panel__content-wrapper--warning__vYY8E',
    'panel__pointer--warning': 'Panel-module_panel__pointer--warning__l5Zf8',
    'panel__content-wrapper--error': 'Panel-module_panel__content-wrapper--error__3LhKe',
    'panel__pointer--error': 'Panel-module_panel__pointer--error__4MGTF',
    'panel__content-wrapper': 'Panel-module_panel__content-wrapper__oiWk8',
    'panel__icon-wrapper': 'Panel-module_panel__icon-wrapper__631EQ',
    panel__content: 'Panel-module_panel__content__U3cAc',
    panel__header: 'Panel-module_panel__header__UJuRe',
    panel__body: 'Panel-module_panel__body__gRd1x',
  };
Se(`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .Panel-module_panel__4VWNp {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-y-padding: var(--component-panel-space-padding-y-md);
    --panel-x-padding: var(--component-panel-space-padding-x-md);
    --panel-content-gap: var(--component-panel-space-gap-md);
    --panel-pointer-width: calc(var(--component-panel-size-icon-md) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-md */
@media only screen and (min-width: 768px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_md
    );
  }
}

/* breakpoints-lg */
@media only screen and (min-width: 960px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* breakpoints-xl */
@media only screen and (min-width: 1200px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* print style */
@media print {
  .Panel-module_panel__4VWNp {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

.Panel-module_panel__4VWNp {
  width: 100%;
}

.Panel-module_panel__pointer__BETJ8 {
  width: var(--panel-pointer-width);
  height: var(--panel-pointer-height);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.Panel-module_panel__pointer-position__Zer8q {
  top: 1px;
  position: relative;
  left: calc(var(--panel-x-padding) + (var(--panel-pointer-width) / 2));
}

.Panel-module_panel__content-wrapper--info__lrfgo,
.Panel-module_panel__pointer--info__5OaTN {
  background-color: var(--component-panel-color-background-default);
}

.Panel-module_panel__content-wrapper--success__k0JQD,
.Panel-module_panel__pointer--success__O-X6n {
  background-color: var(--component-panel-color-background-success);
}

.Panel-module_panel__content-wrapper--warning__vYY8E,
.Panel-module_panel__pointer--warning__l5Zf8 {
  background-color: var(--component-panel-color-background-warning);
}

.Panel-module_panel__content-wrapper--error__3LhKe,
.Panel-module_panel__pointer--error__4MGTF {
  background-color: var(--colors-red-300);
}

.Panel-module_panel__content-wrapper__oiWk8 {
  display: flex;
  gap: var(--panel-content-gap);
  padding: var(--panel-y-padding) var(--panel-x-padding);
}

.Panel-module_panel__icon-wrapper__631EQ {
  display: flex;
  flex: none;
}

.Panel-module_panel__content__U3cAc {
  display: flex;
  flex-direction: column;
  gap: var(--component-panel-space-text_group-gap-xs);
}

.Panel-module_panel__header__UJuRe {
  margin: 0;
  font-size: var(--panel-header-font_size);
  font-weight: var(--component-panel-font_weight-heading);
}

.Panel-module_panel__body__gRd1x {
  font-size: var(--panel-body-font_size);
}
`),
  (function (e) {
    (e.Success = 'success'), (e.Info = 'info'), (e.Warning = 'warning'), (e.Error = 'error');
  })(zr || (zr = {}));
const KR = ({ size: e, variant: t }) => {
    switch (t) {
      case zr.Info:
      case zr.Error:
      case zr.Warning:
        return Z.createElement(qR, {
          style: { width: e, height: e },
          'data-testid': 'panel-icon-info',
        });
      case zr.Success:
        return Z.createElement(QR, {
          style: { width: e, height: e },
          'data-testid': 'panel-icon-success',
        });
    }
  },
  GR = ({ forceMobileLayout: e }) => {
    const t = (function (n) {
      const r = (c) => {
          var d;
          return (d = window?.matchMedia(c).matches) !== null && d !== void 0 && d;
        },
        [i, a] = N.useState(r(n)),
        l = () => {
          a(r(n));
        };
      return (
        N.useEffect(() => {
          const c = window.matchMedia(n);
          return l(), c.addEventListener('change', l), () => c.removeEventListener('change', l);
        }, [n]),
        i
      );
    })(`(max-width: ${yf.BreakpointsSm})`);
    return !!e || t;
  },
  XR = ({ children: e }) =>
    Z.createElement('div', { className: Xe(vn['panel__pointer-position']) }, e),
  YR = ({
    renderIcon: e = KR,
    title: t,
    children: n,
    variant: r = zr.Info,
    showPointer: i = !1,
    showIcon: a = !0,
    forceMobileLayout: l = !1,
    renderArrow: c = XR,
  }) => {
    const d = GR({ forceMobileLayout: l }),
      h = d ? yf.ComponentPanelSizeIconXs : yf.ComponentPanelSizeIconMd;
    return Z.createElement(
      'div',
      { className: Xe(vn.panel, { [vn['panel--mobile-layout']]: d }) },
      i &&
        c({
          children: Z.createElement('div', {
            'data-testid': 'panel-pointer',
            className: Xe(vn.panel__pointer, vn[`panel__pointer--${r}`]),
          }),
        }),
      Z.createElement(
        'div',
        {
          'data-testid': 'panel-content-wrapper',
          className: Xe(vn['panel__content-wrapper'], vn[`panel__content-wrapper--${r}`]),
        },
        a &&
          Z.createElement(
            'div',
            { 'data-testid': 'panel-icon-wrapper', className: vn['panel__icon-wrapper'] },
            e({ size: h, variant: r }),
          ),
        Z.createElement(
          'div',
          { className: vn.panel__content },
          t && Z.createElement('h2', { className: vn.panel__header }, t),
          Z.createElement('div', { className: vn.panel__body }, n),
        ),
      ),
    );
  };
Se(`.PopoverPanel-module_popover-panel__tGILa {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.PopoverPanel-module_popover-panel__arrow__Cmcr3 {
  transform: scale(-1);
  margin-top: -1px;
}
`);
Se(`.CircularProgress-module_svg__TUYPH {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}

.CircularProgress-module_circleTransition__D9rut {
  transition: stroke-dashoffset 1s ease-in-out;
}

.CircularProgress-module_container__gVi97 {
  position: relative;
}

.CircularProgress-module_label__OgO-f {
  all: initial;
  font-family: inherit;
  font-size: var(--font_size-300);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
`);
Se(`/**
 * Do not edit directly
 * Generated on Tue, 20 Dec 2022 08:09:03 GMT
 */

:root {
  --token-set-order-0: altinn;
  --token-set-order-1: FDK;
  --component-icon-size-xs: 2.4rem;
  --component-icon-size-sm: 3rem;
  --component-icon-size-md: 3.6rem;
  --component-icon-size-lg: 4.8rem;
  --component-icon-size-xl: 6rem;
  --component-panel-color-background-default: #e3f7ff;
  --component-panel-color-background-success: #d4f9e4;
  --component-panel-color-background-warning: #fbf6bd;
  --component-panel-color-text-default: #000000;
  --component-panel-color-arrow-default: #e3f7ff;
  --component-panel-color-arrow-success: #d4f9e4;
  --component-panel-color-arrow-warning: #fbf6bd;
  --component-panel-font_size-header-breakpoint_sm: 2.4rem;
  --component-panel-font_size-header-breakpoint_md: 2.8rem;
  --component-panel-font_size-header-breakpoint_lg: 3.6rem;
  --component-panel-font_size-body-breakpoint_sm: 1.6rem;
  --component-panel-font_size-body-breakpoint_md: 1.8rem;
  --component-panel-space-padding-x-xs: 2.4rem;
  --component-panel-space-padding-x-md: 9.6rem;
  --component-panel-space-padding-y-xs: 2.4rem;
  --component-panel-space-padding-y-md: 3.6rem;
  --component-panel-space-gap-xs: 1.2rem;
  --component-panel-space-gap-md: 1.2rem;
  --component-panel-space-text_group-gap-xs: 0.6rem;
  --component-panel-space-arrow_left-md: 10.7rem;
  --component-panel-space-arrow_left-xs: 6.4rem;
  --component-panel-size-icon-xs: 3.6rem;
  --component-panel-size-icon-md: 6rem;
  --component-panel-typography-default-font-family: Altinn-DIN;
  --component-panel-typography-default-font-weight: Regular;
  --component-panel-typography-default-line-height: 1.5;
  --component-panel-typography-default-font-size: 1.6rem;
  --component-panel-typography-default-letter-spacing: 3%;
  --component-panel-typography-default-paragraph-spacing: 0;
  --component-panel-typography-default-text-decoration: none;
  --component-panel-typography-default-text-case: none;
  --component-panel-font_weight-heading: bold;
  --component-legend-font_weight-default: medium;
  --component-label-font_weight-default: medium;
  --component-expandable_row-color-border_top-default: #bcc7cc;
  --component-expandable_row-color-border_bottom-default: #bcc7cc;
  --component-expandable_row-space-padding-x-xs: 1.2rem;
  --component-expandable_row-space-padding-x-md: 2.4rem;
  --component-expandable_row-space-padding-top-xs: 0.4rem;
  --component-expandable_row-space-padding-bottom-xs: 0.8rem;
  --component-expandable_row-space-gap-title-xs: 0.75;
  --component-expandable_row-space-gap-title-md: 2.4rem;
  --component-expandable_row-size-icon-xs: 2.4rem;
  --component-expandable_row-font_weight-header: medium;
  --component-expandable_row-font_size-header-breakpoint_sm: 1.6rem;
  --component-expandable_row-font_size-header-breakpoint_md: 1.8rem;
  --component-expandable_row-border_width-default: 1px;
  --component-checkbox-space-gap-xsmall: 0.8rem;
  --component-checkbox-space-gap-small: 1.2rem;
  --component-checkbox-size-width-xsmall: 1.8rem;
  --component-checkbox-size-width-small: 2.4rem;
  --component-checkbox-size-height-xsmall: 1.8rem;
  --component-checkbox-size-height-small: 2.4rem;
  --component-checkbox-color-border-default: #022f51;
  --component-checkbox-color-border-hover: #0062ba;
  --component-checkbox-color-border-checked: #0062ba;
  --component-checkbox-color-border-disabled: #022f514d;
  --component-checkbox-color-border-error: #D5203B;
  --component-checkbox-color-background-default: #ffffff;
  --component-checkbox-color-background-hover: #e3f7ff;
  --component-checkbox-color-background-checked: #0062ba;
  --component-checkbox-color-background-error: #ffffff;
  --component-checkbox-color-text-default: #000000;
  --component-checkbox-color-text-hover: #004C8F;
  --component-checkbox-color-text-checked: #ffffff;
  --component-checkbox-color-text-disabled: #0000004d;
  --component-checkbox-color-text-error: #000000;
  --component-checkbox-border_width-xsmall: 2px;
  --component-checkbox-border_width-small: 2px;
  --component-checkbox-font_size-xs: 1.4rem;
  --component-checkbox-font_size-sm: 1.6rem;
  --component-fieldset-space-gap-y-xsmall: 1.2rem;
  --component-fieldset-space-gap-y-small: 1.8rem;
  --component-fieldset-space-gap-y-medium: 2.4rem;
  --component-fieldset-space-gap-y-large: 2.4rem;
  --component-field_description-color-text-default: #000000;
  --component-field_description-space-top-small: 0.8rem;
  --component-field_description-space-top-xsmall: 0.6rem;
  --component-textarea-border_width-normal: 2px;
  --component-textarea-color-border-default: #022f51;
  --component-textarea-color-border-hover: #0062ba;
  --component-textarea-color-border-disabled: #efefef;
  --component-textarea-color-border-read-only: #bcc7cc;
  --component-textarea-color-background-default: #ffffff;
  --component-textarea-color-background-hover: #ffffff;
  --component-textarea-color-background-focus: #ffffff;
  --component-textarea-color-background-read-only: #f5f5f5;
  --component-textarea-color-text-disabled: #bcc7cc;
  --component-textarea-color-text-default: #000000;
  --component-textarea-space-padding-x: 1.2rem;
  --component-textarea-space-padding-y: 0.6rem;
  --component-textarea-size-min_height-xsmall: 10rem;
  --component-textarea-size-min_height-small: 15rem;
  --component-textarea-size-min_height-medium: 20rem;
  --component-textarea-size-min_height-large: 30rem;
  --component-textarea-size-min_height-xlarge: 40rem;
  --component-textarea-error-color-border-default: #D5203B;
  --component-textarea-error-color-border-hover: #8e1527;
  --component-textarea-font_size-sm: 1.6rem;
  --component-checkbox-group-space-gap-x-xsmall: 2.4rem;
  --component-checkbox-group-space-gap-x-small: 3.6rem;
  --component-checkbox-group-space-gap-y-xsmall: 0.9rem;
  --component-checkbox-group-space-gap-y-small: 1.8rem;
  --component-toggle_button-font_size-sm: 1.6rem;
  --component-toggle_button-size-min_width-sm: 100%;
  --component-toggle_button-size-min_width-md: auto;
  --component-toggle_button-border_width-inactive: 2px;
  --component-toggle_button-color-background-active: #0062ba;
  --component-toggle_button-color-background-inactive: #ffffff;
  --component-toggle_button-color-text-active: #ffffff;
  --component-toggle_button-color-text-inactive: #000000;
  --component-toggle_button-color-border-inactive: #0062ba;
  --component-toggle_button-space-padding-x: 2.4rem;
  --component-toggle_button-space-padding-top: 0.2rem;
  --component-toggle_button-space-padding-bottom: 0.4rem;
  --component-icon_button-color-border-default: #022f51;
  --component-icon_button-color-border-disabled: #022f514d;
  --component-icon_button-color-outline-focus: #022f51;
  --component-icon_button-color-icon-default: #022f51;
  --component-icon_button-color-icon-hover: #ffffff;
  --component-icon_button-color-icon-disabled: #022f514d;
  --component-icon_button-color-background-default: #ffffff;
  --component-icon_button-color-background-hover: #022f51;
  --component-icon_button-size-large-circle: 3.6rem;
  --component-icon_button-size-large-icon: 2.24rem;
  --component-icon_button-size-medium-circle: 2.4rem;
  --component-icon_button-size-medium-icon: 1.4rem;
  --component-icon_button-size-small-circle: 1.8rem;
  --component-icon_button-size-small-icon: 1.1rem;
  --component-icon_button-border_width-default: 1px;
  --component-button-filled-primary-color-background-default: #0062ba;
  --component-button-filled-primary-color-background-hover: #004C8F;
  --component-button-filled-primary-color-background-pressed: #022f51;
  --component-button-filled-primary-color-background-disabled: #0062ba4d;
  --component-button-filled-color-text-all: #ffffff;
  --component-button-filled-success-color-background-default: #118849;
  --component-button-filled-success-color-background-hover: #0D6D3A;
  --component-button-filled-success-color-background-pressed: #0C4D22;
  --component-button-filled-success-color-background-disabled: #1188494d;
  --component-button-filled-danger-color-background-default: #E02E49;
  --component-button-filled-danger-color-background-disabled: #E02E49;
  --component-button-filled-danger-color-background-hover: #B11B31;
  --component-button-filled-danger-color-background-pressed: #e02e494d;
  --component-button-color-focus_outline-all: #98177E;
  --component-button-space-gap-small: 0.8rem;
  --component-button-space-gap-medium: 0.8rem;
  --component-button-space-gap-large: 0.8rem;
  --component-button-space-padding-x-small: 1.8rem;
  --component-button-space-padding-x-medium: 3.6rem;
  --component-button-space-padding-x-large: 4.8rem;
  --component-button-quiet-space-padding-x-small: 0.6rem;
  --component-button-quiet-space-padding-x-medium: 0.9rem;
  --component-button-quiet-space-padding-x-large: 0.9rem;
  --component-button-quiet-primary-color-text-default: #0062ba;
  --component-button-quiet-primary-color-text-pressed: #ffffff;
  --component-button-quiet-primary-color-text-disabled: #0062ba4d;
  --component-button-quiet-primary-color-background-hover: #e3f7ff;
  --component-button-quiet-primary-color-background-pressed: #0062ba;
  --component-button-outline-primary-color-text-default: #0062ba;
  --component-button-outline-primary-color-text-pressed: #ffffff;
  --component-button-outline-primary-color-border-default: #0062ba;
  --component-button-outline-primary-color-border-hover: #004C8F;
  --component-button-outline-primary-color-background-default: #ffffff;
  --component-button-outline-primary-color-background-hover: #e3f7ff;
  --component-button-outline-primary-color-background-pressed: #004C8F;
  --component-button-border_width-default: 1px;
  --component-button-size-height-small: 3.6rem;
  --component-button-size-height-medium: 4.8rem;
  --component-button-size-height-large: 6rem;
  --component-button-size-icon-small: 2.4rem;
  --component-button-size-icon-medium: 3rem;
  --component-button-size-icon-large: 4rem;
  --component-input-color-border-default: #008fd6;
  --component-input-color-border-hover: #0062ba;
  --component-input-color-outline-focus: #98177E;
  --component-input-color-background-default: #ffffff;
  --component-input-color-background-hover: #ffffff;
  --component-input-color-background-focus: #ffffff;
  --component-input-error-color-border-default: #D5203B;
  --component-input-error-color-border-hover: #8e1527;
  --component-input-disabled-color-border-default: #6a6a6a;
  --component-input-space-padding-x: 1.2rem;
  --component-input-space-padding-y: 0.6rem;
  --component-input-border_width-default: 2px;
  --component-input-border_width-focus: 4px;
  --component-input-read_only_info-color-border-default: #fbf6bd;
  --component-input-read_only_info-color-background-default: #fbf6bd;
  --component-input-read_only_confirm-color-background-default: #d4f9e4;
  --component-input-read_only_confirm-color-border-default: #d4f9e4;
  --component-input-size-min_height-default: 2.25;
  --component-input-font_size-sm: 1.6rem;
  --component-input-font_size-md: 1.8rem;
  --component-error_message-space-padding-top: 0.6rem;
  --component-error_message-color-text: #D5203B;
  --component-error_message-font_size-xs: 1.4rem;
  --border_width-thin: 1px;
  --border_width-standard: 2px;
  --space-half: 0.375;
  --space-base: 0.75;
  --space-x2: 1.5;
  --space-x3: 2.25;
  --space-x4: 3;
  --space-x5: 3.75;
  --space-x6: 4.5;
  --space-x7: 5.25;
  --space-x8: 6;
  --space-x16: 12;
  --colors-blue-950: #011728;
  --colors-blue-900: #022f51;
  --colors-blue-800: #004C8F;
  --colors-blue-700: #0062ba;
  --colors-blue-500: #008fd6;
  --colors-blue-300: #cff0ff;
  --colors-blue-200: #e3f7ff;
  --colors-red-800: #8e1527;
  --colors-red-700: #B11B31;
  --colors-red-600: #D5203B;
  --colors-red-500: #E02E49;
  --colors-red-300: #f9cad3;
  --colors-red-200: #FCE4E9;
  --colors-green-900: #0C4D22;
  --colors-green-800: #0D6D3A;
  --colors-green-700: #118849;
  --colors-green-600: #15A859;
  --colors-green-500: #17c96b;
  --colors-green-300: #d4f9e4;
  --colors-yellow-300: #fbf6bd;
  --colors-yellow-500: #ffda06;
  --colors-purple-600: #98177E;
  --colors-purple-700: #7E0C67;
  --colors-white: #ffffff;
  --colors-black: #000000;
  --colors-neutral-800: #262626;
  --colors-neutral-600: #6a6a6a;
  --colors-neutral-400: #bcc7cc;
  --colors-neutral-200: #efefef;
  --colors-neutral-100: #f5f5f5;
  --colors-brand-altinn-second-purple-300: #e0daf7;
  --colors-brand-altinn-second-purple-700: #3f3161;
  --colors-brand-altinn-first-200: #e3f7ff;
  --colors-brand-altinn-first-300: #cff0ff;
  --colors-brand-altinn-first-500: #008fd6;
  --colors-brand-altinn-first-700: #0062ba;
  --colors-brand-altinn-first-800: #004C8F;
  --colors-brand-altinn-first-900: #022f51;
  --colors-error-intens: #D5203B;
  --colors-error-intens_hover: #8e1527;
  --colors-error-calm: #FCE4E9;
  --colors-success-intens: #0D6D3A;
  --colors-success-calm: #d4f9e4;
  --colors-interaction-interaction-border-default: #008fd6;
  --colors-interaction-interaction-border-hover: #0062ba;
  --colors-interaction-button-default: #0062ba;
  --colors-interaction-button-hover: #004C8F;
  --colors-warning-intense: #ffda06;
  --colors-warning-calm: #fbf6bd;
  --colors-accessibility-tab-focus: #98177E;
  --colors-accessibility-visited: #7E0C67;
  --interactive_components-colors-focus_outline: #98177E;
  --interactive_components-colors-disabled-opacity: 30%;
  --interactive_components-border_radius-normal: 3px;
  --interactive_components-border_width-normal: 2px;
  --paragraph_space-default: 3.6rem;
  --font_size-100: 1.2rem;
  --font_size-200: 1.4rem;
  --font_size-300: 1.6rem;
  --font_size-400-breakpoint_sm: 1.6rem;
  --font_size-400-breakpoint_md: 1.8rem;
  --font_size-500-breakpoint_sm: 1.6rem;
  --font_size-500-breakpoint_md: 1.8rem;
  --font_size-500-breakpoint_lg: 2rem;
  --font_size-600-breakpoint_sm: 1.8rem;
  --font_size-600-breakpoint_md: 2rem;
  --font_size-600-breakpoint_lg: 2.4rem;
  --font_size-700-breakpoint_sm: 2rem;
  --font_size-700-breakpoint_md: 2.4rem;
  --font_size-700-breakpoint_lg: 2.8rem;
  --font_size-800-breakpoint_sm: 2.4rem;
  --font_size-800-breakpoint_md: 2.8rem;
  --font_size-800-breakpoint_lg: 3.6rem;
  --font_size-900-breakpoint_sm: 2.8rem;
  --font_size-900-breakpoint_md: 3.6rem;
  --font_size-900-breakpoint_lg: 4.4rem;
  --font_size-heading-h1-breakpoint_sm: 2.8rem;
  --font_size-heading-h1-breakpoint_md: 3.6rem;
  --font_size-heading-h1-breakpoint_lg: 4.4rem;
  --font_size-heading-h2-breakpoint_sm: 2.4rem;
  --font_size-heading-h2-breakpoint_md: 2.8rem;
  --font_size-heading-h2-breakpoint_lg: 3.6rem;
  --font_size-heading-h3-breakpoint_sm: 2rem;
  --font_size-heading-h3-breakpoint_md: 2.4rem;
  --font_size-heading-h3-breakpoint_lg: 2.8rem;
  --font_size-heading-h4-breakpoint_sm: 1.8rem;
  --font_size-heading-h4-breakpoint_md: 2rem;
  --font_size-heading-h4-breakpoint_lg: 2.4rem;
  --font_size-heading-h5-breakpoint_sm: 1.6rem;
  --font_size-heading-h5-breakpoint_md: 1.8rem;
  --font_size-heading-h5-breakpoint_lg: 2rem;
  --font_size-component-size-xs: 1.4rem;
  --font_size-component-size-sm: 1.6rem;
  --font_size-component-size-md: 1.8rem;
  --font_size-component-size-lg: 2.4rem;
  --font_size-body-medium: 1.6rem;
  --font_size-body-large-breakpoint_sm: 1.6rem;
  --font_size-body-large-breakpoint_md: 1.8rem;
  --font_size-label-small-breakpoint_sm: 1.6rem;
  --font_size-label-small-breakpoint_md: 1.8rem;
  --font_size-detail-default: 1.4rem;
  --font_size-ingress-small-breakpoint_sm: 1.8rem;
  --font_size-ingress-small-breakpoint_md: 2rem;
  --font_size-ingress-medium-breakpoint_sm: 2rem;
  --font_size-ingress-medium-breakpoint_md: 2.4rem;
  --font_family-default: Altinn-DIN;
  --font_family-heading: Altinn-DIN;
  --font_family-ingress: Altinn-DIN;
  --font_family-body: Altinn-DIN;
  --font_family-label: Altinn-DIN;
  --breakpoints-xs: 0px;
  --breakpoints-sm: 540px;
  --breakpoints-md: 768px;
  --breakpoints-lg: 960px;
  --breakpoints-xl: 1200px;
  --breakpoints-xxl: 1600px;
  --typography-default-font-family: Altinn-DIN;
  --typography-default-font-weight: Regular;
  --typography-default-line-height: 1.5;
  --typography-default-font-size: 1.6rem;
  --typography-default-letter-spacing: 0.3px;
  --typography-default-paragraph-spacing: 0;
  --typography-default-text-decoration: none;
  --typography-default-text-case: none;
  --size-base: 1.2rem;
  --size-x2: 2.4rem;
  --size-x3: 3.6rem;
  --size-x4: 4.8rem;
  --size-x5: 6rem;
  --size-x6: 7.2rem;
  --size-x7: 8.4rem;
  --size-x8: 9.6rem;
  --size-x10: 12rem;
  --size-x16: 19.2rem;
}
`);
Se(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';

html {
  font-family: var(--font_family-default), sans-serif;
}

/* old design system dependency rules */
/* these rules should be removed when we are rid of the old design system dependency, ref https://github.com/Altinn/altinn-design-system/issues/15 */
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}
/* old design system dependency rules end*/
`);
N.createContext(void 0);
Se(`.ToggleButtonGroup-module_toggle-button-group__op1wi {
  border-color: var(--component-toggle_button-color-border-inactive);
  border-width: 2px;
  border-style: solid;
  min-height: 32px;
  border-radius: 3px;
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  width: var(--toggle-button-group-width);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .ToggleButtonGroup-module_toggle-button-group__op1wi {
    --toggle-button-group-width: 100%;
  }
}

/* breakpoints-md and above */
@media only screen and (min-width: 768px) {
  .ToggleButtonGroup-module_toggle-button-group__op1wi {
    --toggle-button-group-width: auto;
  }
}
`);
Se(`.ToggleButton-module_toggle-button__g4lb- {
  border-radius: 0;
  border: none;
  padding-left: var(--component-toggle_button-space-padding-x);
  padding-right: var(--component-toggle_button-space-padding-x);
  font-family: inherit;
  background-color: var(--component-toggle_button-color-background-inactive);
  color: var(--component-toggle_button-color-text-inactive);
  font-size: var(--component-toggle_button-font_size-sm);
  height: 100%;
}

.ToggleButton-module_toggle-button--selected__Gm7TD {
  background-color: var(--component-toggle_button-color-background-active);
  color: var(--component-toggle_button-color-text-active);
}

.ToggleButton-module_toggle-button__g4lb-:not(.ToggleButton-module_toggle-button--selected__Gm7TD):hover {
  background-color: var(--colors-blue-300);
}
`);
var Da;
(function (e) {
  (e.Primary = 'primary'), (e.Secondary = 'secondary');
})(Da || (Da = {}));
const ob = N.createContext(void 0),
  Gh = () => {
    const e = N.useContext(ob);
    if (e === void 0)
      throw new Error('useAccordionContext must be used within an AccordionContext');
    return e;
  };
var JR = 'Accordion-module_accordion__LVhhv';
Se(`.Accordion-module_accordion__LVhhv {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`);
const e3 = ({ children: e, open: t, onClick: n, iconVariant: r = Da.Primary }) => {
  const i = N.useId(),
    a = N.useId();
  return Z.createElement(
    'div',
    { className: JR },
    Z.createElement(
      ob.Provider,
      { value: { onClick: n, open: t, headerId: i, contentId: a, iconVariant: r } },
      e,
    ),
  );
};
var t3 = 'AccordionHeader-module_accordion-header__QlYjQ',
  n3 = 'AccordionHeader-module_accordion-header__subtitle__OSUoH',
  r3 = 'AccordionHeader-module_accordion-header--subtitle__DNear',
  o3 = 'AccordionHeader-module_accordion-header__title__ss-G6',
  i3 = 'AccordionHeader-module_accordion-header__actions__eYrxF';
Se(`.AccordionHeader-module_accordion-header__QlYjQ {
  --component-accordion_header-border_top_style: solid;
  --component-accordion_header-border_top_color: var(--colors-neutral-200);
  --component-accordion_header-border_top_width: var(--border_width-thin);
  --component-accordion_header-color-background: var(--colors-white);
  display: flex;
  border-top-width: var(--component-accordion_header-border_top_width);
  border-top-style: var(--component-accordion_header-border_top_style);
  border-top-color: var(--component-accordion_header-border_top_color);
  background-color: var(--component-accordion_header-color-background);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .AccordionHeader-module_accordion-header__subtitle__OSUoH {
    display: none;
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .AccordionHeader-module_accordion-header__subtitle__OSUoH {
    opacity: 60%;
    font-size: 1.4rem;
    display: block;
  }
  .AccordionHeader-module_accordion-header--subtitle__DNear {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 0.3rem;
  }
}

.AccordionHeader-module_accordion-header__title__ss-G6 {
  --component-accordion_header_title-spacing-margin_left: 2.5rem;
  --component-accordion_header_title-border_top_style: none;
  --component-accordion_header_title-border_bottom_style: none;
  --component-accordion_header_title-border_right_style: none;
  --component-accordion_header_title-border_left_style: none;
  --component-accordion_header_title-font_size: var(--font_size-300);
  --component-accordion_header_title-font_weight: var(
    --component-panel-font_weight-heading
  );
  --component-accordion_header_title-color-background: none;
  font-family: inherit;
  flex: 1 1 auto;
  border-top-style: var(--component-accordion_header_title-border_top_style);
  border-bottom-style: var(
    --component-accordion_header_title-border_bottom_style
  );
  border-left-style: var(--component-accordion_header_title-border_left_style);
  border-right-style: var(
    --component-accordion_header_title-border_right_style
  );
  text-align: var(--component-accordion_header_title-text-align);
  background-color: var(--component-accordion_header_title-color-background);
  font-size: var(--component-accordion_header_title-font_size);
  font-weight: var(--component-accordion_header_title-font_weight);
  margin-left: var(--component-accordion_header_title-spacing-margin_left);
  line-height: 16px;
}

.AccordionHeader-module_accordion-header__actions__eYrxF {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0 0.3rem;
}
`);
var xv,
  Sv = {
    'accordion-icon': 'AccordionIcon-module_accordion-icon__PWdLi',
    'accordion-icon--opened': 'AccordionIcon-module_accordion-icon--opened__Vv1Nk',
  };
function xf() {
  return (
    (xf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xf.apply(this, arguments)
  );
}
Se(`.AccordionIcon-module_accordion-icon__PWdLi {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.AccordionIcon-module_accordion-icon--opened__Vv1Nk {
  transform: rotate(90deg);
}
`);
var kv,
  a3 = function (e) {
    return N.createElement(
      'svg',
      xf({ viewBox: '0 0 36 36', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
      xv ||
        (xv = N.createElement('path', {
          d: 'M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z',
          fill: '#000',
        })),
    );
  };
function Sf() {
  return (
    (Sf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Sf.apply(this, arguments)
  );
}
var s3 = function (e) {
  return N.createElement(
    'svg',
    Sf({ viewBox: '0 0 36 36', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
    kv ||
      (kv = N.createElement('path', {
        d: 'M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z',
        fill: '#0062BA',
      })),
  );
};
const l3 = () => {
    const { onClick: e, open: t, iconVariant: n } = Gh(),
      r = {
        height: 20,
        width: 20,
        className: Xe([Sv['accordion-icon'], { [Sv['accordion-icon--opened']]: t }]),
        'data-testid': n,
        onClick: e,
      };
    switch (n) {
      case Da.Primary:
        return Z.createElement(a3, Object.assign({}, r));
      case Da.Secondary:
        return Z.createElement(s3, Object.assign({}, r));
    }
  },
  u3 = ({ children: e, actions: t, subtitle: n }) => {
    const { onClick: r, open: i, headerId: a, contentId: l } = Gh();
    return Z.createElement(
      'div',
      { className: Xe(t3, { [r3]: n }) },
      Z.createElement(l3, null),
      Z.createElement(
        'button',
        {
          className: Xe(o3),
          'aria-expanded': i,
          type: 'button',
          onClick: r,
          id: a,
          'aria-controls': l,
        },
        e,
        n?.length &&
          Z.createElement(
            'div',
            { 'data-testid': 'accordion-header-subtitle', className: Xe(n3) },
            n,
          ),
      ),
      Z.createElement('div', { className: Xe(i3) }, t),
    );
  },
  c3 = ({ children: e }) => {
    const { open: t, contentId: n, headerId: r } = Gh();
    return Z.createElement(
      'div',
      null,
      t && Z.createElement('div', { 'aria-expanded': t, id: n, 'aria-labelledby': r }, e),
    );
  };
function ib(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
const kf = (e) => {
  var { svgIconComponent: t } = e,
    n = ib(e, ['svgIconComponent']);
  return N.isValidElement(t) ? N.cloneElement(t, Object.assign({}, n)) : null;
};
var Cf,
  Pf,
  Ef,
  Dn = {
    button: 'Button-module_button__2ZuB7',
    icon: 'Button-module_icon__-43u5',
    'button--small': 'Button-module_button--small__pcER7',
    'button--medium': 'Button-module_button--medium__cM-9Y',
    'button--large': 'Button-module_button--large__TSWMa',
    'button--full-width': 'Button-module_button--full-width__XyuwA',
    'button--dashed-border': 'Button-module_button--dashed-border__Dproa',
    'button--only-icon': 'Button-module_button--only-icon__-Qpvj',
    'button--filled': 'Button-module_button--filled__Ve5OB',
    'button--outline': 'Button-module_button--outline__eVhnr',
    'button--quiet': 'Button-module_button--quiet__AEmi2',
    'button--filled--primary': 'Button-module_button--filled--primary__kKhXC',
    'button--filled--secondary': 'Button-module_button--filled--secondary__27xFb',
    'button--filled--success': 'Button-module_button--filled--success__anfvy',
    'button--filled--danger': 'Button-module_button--filled--danger__d14Ii',
    'button--filled--inverted': 'Button-module_button--filled--inverted__g-6zn',
    'button--outline--primary': 'Button-module_button--outline--primary__USFE4',
    'button--outline--secondary': 'Button-module_button--outline--secondary__X0lEf',
    'button--outline--success': 'Button-module_button--outline--success__wfKN7',
    'button--outline--danger': 'Button-module_button--outline--danger__slPnr',
    'button--outline--inverted': 'Button-module_button--outline--inverted__FeUQl',
    'button--quiet--primary': 'Button-module_button--quiet--primary__-Omoa',
    'button--quiet--secondary': 'Button-module_button--quiet--secondary__rT8ax',
    'button--quiet--success': 'Button-module_button--quiet--success__IJJnb',
    'button--quiet--danger': 'Button-module_button--quiet--danger__Mz0hv',
    'button--quiet--inverted': 'Button-module_button--quiet--inverted__8SNZA',
  };
Se(`.Button-module_button__2ZuB7 {
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);

  all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */
  font-family: inherit;
  border: var(--component-button-border_width-default) solid transparent;
  padding: 0 var(--button-vertical-padding);
  text-align: center;
  box-sizing: border-box;
  letter-spacing: var(--typography-default-letter-spacing);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Button-module_button__2ZuB7:focus-visible {
  outline: var(--interactive_components-colors-focus_outline) solid
    var(--border_width-standard);
  outline-offset: var(--border_width-standard);
}

.Button-module_button__2ZuB7:focus:not(:focus-visible) {
  outline: none;
}

.Button-module_button__2ZuB7:disabled {
  cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.Button-module_icon__-43u5 {
  height: var(--icon-size);
  width: var(--icon-size);
}

.Button-module_button--small__pcER7 {
  height: var(--component-button-size-height-small);
  font-size: var(--font_size-300);
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);
  gap: var(--component-button-space-gap-small);
}

.Button-module_button--medium__cM-9Y {
  height: var(--component-button-size-height-medium);
  min-width: var(--component-button-size-height-medium);
  font-size: var(--font_size-400-breakpoint_md);
  --icon-size: var(--component-button-size-icon-medium);
  --button-vertical-padding: var(--component-button-space-padding-x-medium);
  gap: var(--component-button-space-gap-medium);
}

.Button-module_button--large__TSWMa {
  height: var(--component-button-size-height-large);
  min-width: var(--component-button-size-height-large);
  font-size: var(--font_size-600-breakpoint_md);
  --icon-size: var(--component-button-size-icon-large);
  --button-vertical-padding: var(--component-button-space-padding-x-large);
  gap: var(--component-button-space-gap-large);
}

.Button-module_button--full-width__XyuwA {
  width: 100%;
}

.Button-module_button--dashed-border__Dproa {
  border-style: dashed;
}

.Button-module_button--only-icon__-Qpvj {
  padding: 0.5rem !important;
}

.Button-module_button--filled__Ve5OB {
  border-radius: 3px;
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
}

.Button-module_button--outline__eVhnr {
  border-radius: 3px;
  background-color: transparent;
}

.Button-module_button--quiet__AEmi2 {
  border-radius: 50px;
  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);
  background-color: transparent;
}

/* Filled button colors */
.Button-module_button--filled--primary__kKhXC {
  background: var(--component-button-filled-primary-color-background-default);
}

.Button-module_button--filled--primary__kKhXC:not(:disabled):hover {
  background: var(--component-button-filled-primary-color-background-hover);
}

.Button-module_button--filled--primary__kKhXC:not(:disabled):active {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_button--filled--secondary__27xFb {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_button--filled--secondary__27xFb:not(:disabled):hover {
  background: var(--colors-blue-800);
}

.Button-module_button--filled--secondary__27xFb:not(:disabled):active {
  background: var(--colors-blue-950);
}

.Button-module_button--filled--success__anfvy {
  background: var(--component-button-filled-success-color-background-default);
}

.Button-module_button--filled--success__anfvy:not(:disabled):hover {
  background: var(--component-button-filled-success-color-background-hover);
}

.Button-module_button--filled--success__anfvy:not(:disabled):active {
  background: var(--component-button-filled-success-color-background-pressed);
}

.Button-module_button--filled--danger__d14Ii {
  background: var(--component-button-filled-danger-color-background-default);
}

.Button-module_button--filled--danger__d14Ii:not(:disabled):hover {
  background: var(--component-button-filled-danger-color-background-hover);
}

.Button-module_button--filled--danger__d14Ii:not(:disabled):active {
  background: var(--colors-red-800);
}

.Button-module_button--filled--inverted__g-6zn {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_button--filled--inverted__g-6zn:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Button-module_button--filled--inverted__g-6zn:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: rgba(255, 255, 255, 0.1);
}

.Button-module_button--filled--inverted__g-6zn:focus-visible {
  outline-color: var(--colors-white);
}

/* Outline button colors */
.Button-module_button--outline--primary__USFE4 {
  color: var(--component-button-outline-primary-color-text-default);
  fill: var(--component-button-outline-primary-color-text-default);
  border-color: var(--component-button-outline-primary-color-border-default);
  background: var(--component-button-outline-primary-color-background-default);
}

.Button-module_button--outline--primary__USFE4:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-outline-primary-color-background-hover);
  border-color: var(--component-button-outline-primary-color-border-hover);
}

.Button-module_button--outline--primary__USFE4:not(:disabled):active {
  color: var(--component-button-outline-primary-color-text-pressed);
  fill: var(--component-button-outline-primary-color-text-pressed);
  background: var(--component-button-outline-primary-color-background-pressed);
}

.Button-module_button--outline--secondary__X0lEf {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
  border-color: var(--colors-blue-900);
}

.Button-module_button--outline--secondary__X0lEf:not(:disabled):hover {
  background: var(--colors-blue-200);
}

.Button-module_button--outline--secondary__X0lEf:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-blue-900);
}

.Button-module_button--outline--success__wfKN7 {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
  background: var(--colors-white);
  border-color: var(--colors-green-700);
}

.Button-module_button--outline--success__wfKN7:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.Button-module_button--outline--success__wfKN7:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-green-700);
}

.Button-module_button--outline--danger__slPnr {
  color: var(--colors-red-500);
  fill: var(--colors-red-500);
  background: var(--colors-white);
  border-color: var(--colors-red-500);
}

.Button-module_button--outline--danger__slPnr:not(:disabled):hover {
  color: var(--colors-red-700);
  fill: var(--colors-red-700);
  background: var(--colors-red-200);
  border-color: var(--colors-red-700);
}

.Button-module_button--outline--danger__slPnr:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-red-500);
}

.Button-module_button--outline--inverted__FeUQl {
  color: var(--colors-white);
  fill: var(--colors-white);
  border-color: var(--colors-white);
  background: transparent;
}

.Button-module_button--outline--inverted__FeUQl:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.1);
}

.Button-module_button--outline--inverted__FeUQl:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_button--outline--inverted__FeUQl:focus-visible {
  outline-color: var(--colors-white);
}

/* Quiet button colors */
.Button-module_button--quiet--primary__-Omoa {
  color: var(--component-button-quiet-primary-color-text-default);
  fill: var(--component-button-quiet-primary-color-text-default);
}

.Button-module_button--quiet--primary__-Omoa:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-quiet-primary-color-background-hover);
}

.Button-module_button--quiet--primary__-Omoa:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--component-button-quiet-primary-color-background-pressed);
}

.Button-module_button--quiet--secondary__rT8ax {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
}

.Button-module_button--quiet--secondary__rT8ax:not(:disabled):hover {
  background: var(--colors-neutral-400);
}

.Button-module_button--quiet--secondary__rT8ax:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-blue-900);
}

.Button-module_button--quiet--success__IJJnb {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
}

.Button-module_button--quiet--success__IJJnb:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.Button-module_button--quiet--success__IJJnb:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-green-900);
}

.Button-module_button--quiet--danger__Mz0hv {
  color: var(--colors-red-600);
  fill: var(--colors-red-600);
}

.Button-module_button--quiet--danger__Mz0hv:not(:disabled):hover {
  color: var(--colors-red-800);
  fill: var(--colors-red-800);
  background: var(--colors-red-200);
}

.Button-module_button--quiet--danger__Mz0hv:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-red-800);
}

.Button-module_button--quiet--inverted__8SNZA {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: transparent;
}

.Button-module_button--quiet--inverted__8SNZA:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Button-module_button--quiet--inverted__8SNZA:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_button--quiet--inverted__8SNZA:focus-visible {
  outline-color: var(--colors-white);
}
`),
  (function (e) {
    (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
  })(Cf || (Cf = {})),
  (function (e) {
    (e.Primary = 'primary'),
      (e.Secondary = 'secondary'),
      (e.Success = 'success'),
      (e.Danger = 'danger'),
      (e.Inverted = 'inverted');
  })(Pf || (Pf = {})),
  (function (e) {
    (e.Filled = 'filled'), (e.Outline = 'outline'), (e.Quiet = 'quiet');
  })(Ef || (Ef = {}));
var jl, Aa;
N.forwardRef((e, t) => {
  var {
      children: n,
      color: r = Pf.Primary,
      variant: i = Ef.Filled,
      size: a = Cf.Small,
      fullWidth: l = !1,
      dashedBorder: c = !1,
      iconPlacement: d = 'left',
      icon: h,
      type: g = 'button',
      className: v,
    } = e,
    m = ib(e, [
      'children',
      'color',
      'variant',
      'size',
      'fullWidth',
      'dashedBorder',
      'iconPlacement',
      'icon',
      'type',
      'className',
    ]);
  return Z.createElement(
    'button',
    Object.assign({}, m, {
      ref: t,
      className: Xe(
        Dn.button,
        Dn[`button--${a}`],
        Dn[`button--${i}`],
        Dn[`button--${r}`],
        Dn[`button--${i}--${r}`],
        { [Dn['button--full-width']]: l },
        { [Dn['button--dashed-border']]: c },
        { [Dn['button--only-icon']]: !n && h },
        v,
      ),
      type: g,
    }),
    h && d === 'left' && Z.createElement(kf, { svgIconComponent: h, className: Dn.icon }),
    n,
    h && d === 'right' && Z.createElement(kf, { svgIconComponent: h, className: Dn.icon }),
  );
});
(function (e) {
  (e.Primary = 'primary'), (e.Success = 'success');
})(jl || (jl = {})),
  (function (e) {
    (e.Small = 'small'), (e.Medium = 'medium');
  })(Aa || (Aa = {}));
const ab = N.createContext({ color: jl.Primary, size: Aa.Medium });
var d3 = 'Page-module_page__THNNc';
Se(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);
const f3 = ({ children: e, color: t = jl.Primary, size: n = Aa.Medium }) =>
  Z.createElement(
    'div',
    { className: d3 },
    Z.createElement(ab.Provider, { value: { color: t, size: n } }, e),
  );
var ed = {
  'page-header': 'PageHeader-module_page-header__94GS1',
  'page-header--primary': 'PageHeader-module_page-header--primary__-DYm-',
  'page-header--success': 'PageHeader-module_page-header--success__JUNEP',
  'page-header--small': 'PageHeader-module_page-header--small__iSiFU',
  'page-header--medium': 'PageHeader-module_page-header--medium__TiCR6',
};
Se(`.PageHeader-module_page-header__94GS1 {
  height: var(--page-header-height);
  background-color: var(--component-page_header-background-color);
  display: flex;
  width: 100%;
  color: var(--component-page_header-color);
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: inherit;
  align-items: center;
  font-size: var(--page_header-title-font-size);
  fill: var(--component-page_header-color);
}

.PageHeader-module_page-header--primary__-DYm- {
  --component-page_header-background-color: #022f51;
  --component-page_header-color: white;
}

.PageHeader-module_page-header--success__JUNEP {
  --component-page_header-background-color: #17c96b;
  --component-page_header-color: black;
}

.PageHeader-module_page-header--small__iSiFU {
  --page_header-title-font-size: 18px;
  --page-header-height: 72px;
}

.PageHeader-module_page-header--medium__TiCR6 {
  --page_header-title-font-size: 28px;
  --page-header-height: 96px;
}
`);
const h3 = ({ children: e, icon: t }) => {
  const { color: n, size: r } = (() => {
      const a = N.useContext(ab);
      if (a === void 0) throw new Error('usePageContext must be used within a PageContext');
      return a;
    })(),
    i = r === Aa.Small ? 28 : 40;
  return Z.createElement(
    'header',
    { className: Xe(ed['page-header'], ed[`page-header--${n}`], ed[`page-header--${r}`]) },
    Z.createElement(kf, { width: i, height: i, svgIconComponent: t }),
    Z.createElement('span', null, e),
  );
};
var p3 = { 'page-content': 'PageContent-module_page-content__-sHWi' };
Se(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);
const m3 = ({ children: e }) => Z.createElement('div', { className: Xe(p3['page-content']) }, e);
var Of;
Se(`.List-module_list__9aWGq {
  padding-left: 0;
  list-style-type: none;
  border-top-color: var(--component-list-border_top_color);
  border-top-style: var(--component-list-border_top_style);
  border-top-width: var(--component-list-border_top_width);
}

.List-module_list--solid__--Ld- {
  --component-list-border_top_color: #bcc7cc;
  --component-list-border_top_style: solid;
  --component-list-border_top_width: 0.1rem;
}

.List-module_list--dashed__CDfmL {
  --component-list-border_top_color: #1eadf7;
  --component-list-border_top_style: dashed;
  --component-list-border_top_width: 0.1rem;
}
`),
  (function (e) {
    (e.Solid = 'solid'), (e.Dashed = 'dashed');
  })(Of || (Of = {}));
N.createContext({ borderStyle: Of.Solid });
Se(`.ListItem-module_list-item__OIENi {
  display: block;
  border-bottom-color: var(--component-list_item-border_bottom_color);
  border-bottom-style: var(--component-list_item-border-bottom-style);
  border-bottom-width: var(--component-list_item-border-bottom-width);
}

.ListItem-module_list-item--solid__H4Nk8 {
  --component-list_item-border_bottom_color: #bcc7cc;
  --component-list_item-border-bottom-style: solid;
  --component-list_item-border-bottom-width: 0.1rem;
}

.ListItem-module_list-item--dashed__26PJV {
  --component-list_item-border-bottom-width: 0.1rem;
  --component-list_item-border_bottom_color: #1eadf7;
  --component-list_item-border-bottom-style: dashed;
}
`);
var fo, Ul, wo;
(function (e) {
  (e.Default = 'default'),
    (e.Error = 'error'),
    (e.Disabled = 'disabled'),
    (e.ReadOnlyInfo = 'readonly-info'),
    (e.ReadOnlyConfirm = 'readonly-confirm');
})(fo || (fo = {})),
  (function (e) {
    (e.ReadOnlyInfo = 'readonly-info'), (e.ReadOnlyConfirm = 'readonly-confirm');
  })(Ul || (Ul = {})),
  (function (e) {
    (e.None = 'none'), (e.Error = 'error'), (e.Search = 'search');
  })(wo || (wo = {}));
var Cv;
function Lf() {
  return (
    (Lf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Lf.apply(this, arguments)
  );
}
var Pv,
  g3 = function (e) {
    return N.createElement(
      'svg',
      Lf({ width: 16, height: 15, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
      Cv ||
        (Cv = N.createElement('path', {
          d: 'M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z',
          fill: '#fff',
        })),
    );
  };
function Tf() {
  return (
    (Tf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tf.apply(this, arguments)
  );
}
var v3 = function (e) {
    return N.createElement(
      'svg',
      Tf(
        {
          width: 15,
          height: 15,
          viewBox: '0 0 36 36',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        e,
      ),
      Pv ||
        (Pv = N.createElement('path', {
          d: 'M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z',
          fill: '#000',
        })),
    );
  },
  Bn = {
    InputWrapper: 'InputWrapper-module_InputWrapper__us2BQ',
    'InputWrapper--with-focus-effect': 'InputWrapper-module_InputWrapper--with-focus-effect__24aF7',
    'InputWrapper--default': 'InputWrapper-module_InputWrapper--default__Lcj6I',
    'InputWrapper--error': 'InputWrapper-module_InputWrapper--error__C8fG3',
    'InputWrapper--disabled': 'InputWrapper-module_InputWrapper--disabled__p0H70',
    'InputWrapper--readonly-info': 'InputWrapper-module_InputWrapper--readonly-info__u6Mi8',
    'InputWrapper--readonly-confirm': 'InputWrapper-module_InputWrapper--readonly-confirm__Y-YY-',
    'InputWrapper--search': 'InputWrapper-module_InputWrapper--search__1aIP8',
    'InputWrapper--with-padding': 'InputWrapper-module_InputWrapper--with-padding__o-H2V',
    InputWrapper__field: 'InputWrapper-module_InputWrapper__field__-Uwxu',
    InputWrapper__icon: 'InputWrapper-module_InputWrapper__icon__tbkEy',
    'InputWrapper__icon--disabled': 'InputWrapper-module_InputWrapper__icon--disabled__mmqUt',
    InputWrapper__label: 'InputWrapper-module_InputWrapper__label__tLifi',
  };
Se(`.InputWrapper-module_InputWrapper__us2BQ {
  --background: var(--component-input-color-background-default);
  --border-color: var(--component-input-color-border-default);
  --outline-color: var(--component-input-color-outline-focus);
  --icon-background: transparent;
  --paddingY: 0;
  --paddingX: 0;
  background: var(--background);
  border-width: var(--component-input-border_width-default);
  border-radius: var(--interactive_components-border_radius-normal);
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  border-color: var(--border-color);
}

.InputWrapper-module_InputWrapper--with-focus-effect__24aF7:focus-within {
  outline: var(--outline-color) auto var(--border_width-thin);
  outline-offset: calc(var(--border_width-thin) + var(--border_width-standard));
}

.InputWrapper-module_InputWrapper--default__Lcj6I:hover {
  --border-color: var(--component-input-color-border-hover);
}

.InputWrapper-module_InputWrapper--error__C8fG3 {
  --icon-background: var(--component-input-error-color-border-default);
  --border-color: var(--component-input-error-color-border-default);
}

.InputWrapper-module_InputWrapper--error__C8fG3:hover {
  --icon-background: var(--component-input-error-color-border-hover);
  --border-color: var(--component-input-error-color-border-hover);
}

.InputWrapper-module_InputWrapper--disabled__p0H70 {
  --background: repeating-linear-gradient(
    135deg,
    #efefef,
    #efefef 2px,
    #fff 3px,
    #fff 5px
  );
  --border-color: var(--component-input-disabled-color-border-default);
}

.InputWrapper-module_InputWrapper--readonly-info__u6Mi8 {
  --background: var(--component-input-read_only_info-color-background-default);
  --border-color: var(--component-input-read_only_info-color-border-default);
}

.InputWrapper-module_InputWrapper--readonly-confirm__Y-YY- {
  --background: var(
    --component-input-read_only_confirm-color-background-default
  );
  --border-color: var(--component-input-read_only_confirm-color-border-default);
}

.InputWrapper-module_InputWrapper--search__1aIP8 {
  flex-direction: row-reverse;
}

.InputWrapper-module_InputWrapper--with-padding__o-H2V {
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */
  --paddingY: calc(
    var(--component-input-space-padding-y) -
      var(--component-input-border_width-default)
  );
  --paddingX: var(--component-input-space-padding-x);
}

.InputWrapper-module_InputWrapper__field__-Uwxu {
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: var(--paddingY) var(--paddingX);
  width: 100%;
  background: var(--background);
}

.InputWrapper-module_InputWrapper__icon__tbkEy {
  background: var(--icon-background);
  padding-right: var(--component-input-border_width-focus);
  padding-left: var(--component-input-border_width-default);
  display: flex;
  align-items: center;
  flex: none;
}

.InputWrapper-module_InputWrapper__icon--disabled__mmqUt {
  opacity: 60%;
}

.InputWrapper-module_InputWrapper__label__tLifi {
  font-weight: var(--component-label-font_weight-default);
  padding: 0;
}
`);
const _3 = ({ variant: e, disabled: t = !1 }) =>
    e === wo.Error
      ? Z.createElement(
          'div',
          { className: Bn.InputWrapper__icon },
          Z.createElement(g3, { 'data-testid': 'input-icon-error' }),
        )
      : e === wo.Search
      ? Z.createElement(
          'div',
          { className: Xe(Bn.InputWrapper__icon, { [Bn['InputWrapper__icon--disabled']]: t }) },
          Z.createElement(v3, { 'data-testid': 'input-icon-search' }),
        )
      : null,
  y3 = ({
    isValid: e = !0,
    disabled: t = !1,
    readOnly: n = !1,
    isSearch: r = !1,
    label: i,
    inputId: a,
    inputRenderer: l,
    noFocusEffect: c,
    noPadding: d,
  }) => {
    const h = N.useId(),
      g = a ?? h,
      { variant: v, iconVariant: m } = (({
        readOnly: _ = !1,
        disabled: x = !1,
        isValid: S = !0,
        isSearch: O = !1,
      } = {}) => {
        let w = wo.None;
        return (
          O && (w = wo.Search),
          x
            ? { variant: fo.Disabled, iconVariant: w }
            : _ === !0 || _ === Ul.ReadOnlyInfo
            ? { variant: fo.ReadOnlyInfo, iconVariant: w }
            : _ === Ul.ReadOnlyConfirm
            ? { variant: fo.ReadOnlyConfirm, iconVariant: w }
            : S === !1
            ? { variant: fo.Error, iconVariant: wo.Error }
            : { variant: fo.Default, iconVariant: w }
        );
      })({ readOnly: n, disabled: t, isValid: e, isSearch: r });
    return Z.createElement(
      Z.Fragment,
      null,
      i &&
        Z.createElement(
          'label',
          {
            'data-testid': 'InputWrapper-label',
            className: Xe(Bn.InputWrapper__label),
            htmlFor: g,
          },
          i,
        ),
      Z.createElement(
        'div',
        {
          'data-testid': 'InputWrapper',
          className: Xe(Bn.InputWrapper, Bn[`InputWrapper--${v}`], {
            [Bn['InputWrapper--search']]: r,
            [Bn['InputWrapper--with-focus-effect']]: !c,
            [Bn['InputWrapper--with-padding']]: !d,
          }),
        },
        Z.createElement(_3, { variant: m, disabled: t }),
        l({ className: Bn.InputWrapper__field, inputId: g, variant: v }),
      ),
    );
  };
var b3 = 'ErrorMessage-module_error-message-wrapper__O-Mrx';
Se(`.ErrorMessage-module_error-message-wrapper__O-Mrx {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);
const w3 = ({ id: e, children: t, ariaLabel: n }) =>
  Z.createElement(
    'div',
    {
      'data-testid': 'ErrorMessage',
      'aria-label': n,
      id: e,
      role: 'alertdialog',
      className: Xe(b3),
    },
    t,
  );
Se(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);
var zf;
Se(`Table {
  /* #FFFFFF */

  /* Inside auto layout */
  background-color: #ffffff;
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}
`),
  (function (e) {
    (e.Header = 'header'), (e.Body = 'body'), (e.Footer = 'footer');
  })(zf || (zf = {}));
N.createContext(void 0);
N.createContext(void 0);
N.createContext({ variantStandard: zf.Body });
Se(`.TableHeader-module_table-header__mrqgB {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);
Se(`.TableRow-module_TableRow__3GK6I {
  width: 1056px;
  height: 60px;
}

.TableRow-module_table-row--selected__0i2on {
  background-color: #e0daf7;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
  border-left: 2px solid #011728;
}

.TableRow-module_table-row--body__CP23F:hover {
  background-color: #e3f7ff;
  cursor: pointer;
}
`);
Se(`.TableBody-module_TableBody__tqUvt {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`);
Se(`.TableCell-module_header-table-cell__NOs4b {
  text-align: left;
  padding: 8px;
  margin: 20px 0 20px 0;
  background: #f5f5f5;
  user-select: none;
}

.TableCell-module_header-table-cell-radiobutton__I1mdW {
  text-align: left;
  padding: 8px;
  margin: 10px 0 10px 0;
  background: #f5f5f5;
  user-select: none;
}

.TableCell-module_body-table-cell__MhHfa {
  text-align: left;
  padding: 8px;
  border-top: 1px solid #dde3e5;
  max-width: 300px;
  margin: 20px 0 20px 0;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.TableCell-module_body-table-cell-radiobutton__kha-K {
  text-align: left;
  border-top: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.TableCell-module_image__vWvwd {
  max-width: 45px;
  max-height: 45px;
}

.TableCell-module_input__cyAaE {
  margin: 0px 15px 0px 15px;
}
.TableCell-module_radio-button__FbSRH {
  margin: 0px 0px 0px 15px;
}

.TableCell-module_container-sortable__70xdN {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.TableCell-module_icon__ADG4G {
  fill: rgba(0, 0, 0, 0.4);
  margin-left: -5px;
}

.TableCell-module_icon-desc__do5N3 {
  fill: rgb(0, 0, 0);
  margin-left: -5px;
}

.TableCell-module_icon-asc__96gN7 {
  fill: rgb(0, 0, 0);
  transform: rotate(180deg);
  margin-left: -5px;
}
`);
var Ev;
(function (e) {
  (e.Descending = 'desc'),
    (e.Ascending = 'asc'),
    (e.NotSortable = 'notSortable'),
    (e.NotActive = 'notActive');
})(Ev || (Ev = {}));
Se(`.TableFooter-module_table-footer__FJZKm {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);
var $l,
  er = {
    template: 'CheckboxRadioTemplate-module_template__CbnTf',
    'template--xsmall': 'CheckboxRadioTemplate-module_template--xsmall__seIf7',
    'template--small': 'CheckboxRadioTemplate-module_template--small__5Y0JS',
    'template--disabled': 'CheckboxRadioTemplate-module_template--disabled__0IHY1',
    'template__input-wrapper': 'CheckboxRadioTemplate-module_template__input-wrapper__ZDnfs',
    'template__input-wrapper__input':
      'CheckboxRadioTemplate-module_template__input-wrapper__input__cIez-',
    'template__input-wrapper__visible-box':
      'CheckboxRadioTemplate-module_template__input-wrapper__visible-box__mgLMA',
    'template__label-and-description':
      'CheckboxRadioTemplate-module_template__label-and-description__PNky5',
    'template__label-and-description__label':
      'CheckboxRadioTemplate-module_template__label-and-description__label__I57HD',
    'template__label-and-description__description':
      'CheckboxRadioTemplate-module_template__label-and-description__description__muYTd',
  };
Se(`.CheckboxRadioTemplate-module_template__CbnTf {
  --cursor: pointer;
  --description-color: var(--component-field_description-color-text-default);
  --label-color: var(--component-checkbox-color-text-default);
  --opacity: 1;

  border-radius: var(--input_box-border_radius);
  cursor: var(--cursor);
  display: inline-flex;
  flex-direction: row;
  font-size: var(--font_size);
  gap: var(--gap);
  line-height: var(--typography-default-line-height);
  opacity: var(--opacity);
}

.CheckboxRadioTemplate-module_template--xsmall__seIf7 {
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

.CheckboxRadioTemplate-module_template--small__5Y0JS {
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);
  --gap: var(--component-checkbox-space-gap-small);
}

.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_template--disabled__0IHY1):hover {
  --label-color: var(--component-checkbox-color-text-hover);
}

.CheckboxRadioTemplate-module_template--disabled__0IHY1 {
  --cursor: auto;
  --opacity: var(--interactive_components-colors-disabled-opacity);
}

.CheckboxRadioTemplate-module_template__input-wrapper__ZDnfs {
  display: inline-block;
  height: var(--input_box-size);
  position: relative;
}

.CheckboxRadioTemplate-module_template__input-wrapper__input__cIez- {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.CheckboxRadioTemplate-module_template__input-wrapper__visible-box__mgLMA {
  display: inline-block;
  flex: 0 0 var(--input_box-size);
  height: var(--input_box-size);
  position: relative;
  width: var(--input_box-size);
}

.CheckboxRadioTemplate-module_template__label-and-description__PNky5 {
  display: inline-flex;
  flex-direction: column;
  gap: var(--description-margin_top);

  /* Center-align input box with the first line in the label */
  margin-top: calc(
    (
        var(--input_box-size) -
          (var(--typography-default-line-height) * var(--font_size))
      ) / 2
  );
}

.CheckboxRadioTemplate-module_template__label-and-description__label__I57HD {
  color: var(--label-color);
}

.CheckboxRadioTemplate-module_template__label-and-description__description__muYTd {
  color: var(--description-color);
}

@supports not selector(:has(:focus-visible)) {
  .CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_template--disabled__0IHY1):focus-within {
    outline: 2px solid var(--interactive_components-colors-focus_outline);
    outline-offset: 2px;
  }
}

.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_template--disabled__0IHY1):has(:focus-visible) {
  outline: 2px solid var(--interactive_components-colors-focus_outline);
  outline-offset: 2px;
}
`),
  (function (e) {
    (e.Xsmall = 'xsmall'), (e.Small = 'small');
  })($l || ($l = {}));
const x3 = ({
  checked: e,
  children: t,
  className: n,
  description: r,
  disabled: i,
  hideInput: a,
  hideLabel: l,
  inputId: c,
  label: d,
  name: h,
  onChange: g,
  presentation: v,
  size: m,
  type: _,
  value: x,
}) => {
  const S = N.useId(),
    O = c ?? 'input-' + S,
    w = d ? `${O}-label` : void 0,
    b = r ? `${O}-description` : void 0,
    k = d && !l;
  return Z.createElement(
    'label',
    {
      className: Xe(er.template, er[`template--${m}`], i && er['template--disabled'], n),
      htmlFor: c,
    },
    !a &&
      Z.createElement(
        'span',
        { className: er['template__input-wrapper'] },
        Z.createElement('input', {
          'aria-describedby': b,
          'aria-label': k || typeof d != 'string' ? void 0 : d,
          'aria-labelledby': k ? w : void 0,
          checked: e != null && e,
          className: er['template__input-wrapper__input'],
          disabled: i,
          id: O,
          name: h,
          onChange: i ? void 0 : g,
          role: v ? 'presentation' : void 0,
          type: _,
          value: x,
        }),
        Z.createElement('span', { className: er['template__input-wrapper__visible-box'] }, t),
      ),
    (k || r) &&
      Z.createElement(
        'span',
        { className: er['template__label-and-description'] },
        k &&
          Z.createElement(
            'span',
            { className: er['template__label-and-description__label'], id: w },
            d,
          ),
        r &&
          Z.createElement(
            'span',
            { className: er['template__label-and-description__description'], id: b },
            r,
          ),
      ),
  );
};
var S3 = 'Checkbox-module_checkbox__lSeQj',
  k3 = 'Checkbox-module_checkbox--compact__NW3zE',
  C3 = 'Checkbox-module_checkbox--error__uc35n',
  P3 = 'Checkbox-module_checkbox--checked__WAGbe',
  E3 = 'Checkbox-module_checkbox--disabled__The3C',
  O3 = 'Checkbox-module_checkbox--read-only__VSKJU',
  L3 = 'Checkbox-module_visible-box__UhCh4',
  T3 = 'Checkbox-module_visible-box__checkmark__n-q0I';
Se(`.Checkbox-module_checkbox__lSeQj {
  /* Internal variables */
  --checkbox-background_color: var(
    --component-checkbox-color-background-default
  );
  --checkbox-border_color: var(--component-checkbox-color-border-default);
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);
  --checkbox-border_width: var(--component-checkbox-border_width-small);
  --checkbox-checkmark-display: none;
  --checkbox-height: var(--component-checkbox-size-height-small);
  --checkbox-width: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-size: var(--checkbox-height);
  --input_box-border_radius: var(--checkbox-border_radius);
}

.Checkbox-module_checkbox--compact__NW3zE {
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);
  --checkbox-height: var(--component-checkbox-size-height-xsmall);
  --checkbox-width: var(--component-checkbox-size-width-xsmall);
}

.Checkbox-module_checkbox--error__uc35n {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-error);
}

.Checkbox-module_checkbox--checked__WAGbe {
  --checkbox-checkmark-display: inline-block;
}

.Checkbox-module_checkbox--checked__WAGbe:not(.Checkbox-module_checkbox--disabled__The3C) {
  --checkbox-background_color: var(
    --component-checkbox-color-background-checked
  );
  --checkbox-border_color: var(--component-checkbox-color-border-checked);
}

.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_checkbox--disabled__The3C, .Checkbox-module_checkbox--checked__WAGbe):hover {
  --checkbox-background_color: var(--component-checkbox-color-background-hover);
}

.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_checkbox--disabled__The3C, .Checkbox-module_checkbox--error__uc35n, .Checkbox-module_checkbox--checked__WAGbe):hover {
  --checkbox-border_color: var(--component-checkbox-color-border-hover);
}

.Checkbox-module_checkbox--disabled__The3C.Checkbox-module_checkbox--checked__WAGbe {
  --checkbox-background_color: var(--component-checkbox-color-border-disabled);
  --checkbox-border_color: transparent;
}

.Checkbox-module_checkbox--read-only__VSKJU {
  --cursor: auto;
}

.Checkbox-module_visible-box__UhCh4 {
  background-color: var(--checkbox-background_color);
  border-color: var(--checkbox-border_color);
  border-radius: var(--checkbox-border_radius);
  border-style: solid;
  border-width: var(--checkbox-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--checkbox-height);
  width: var(--checkbox-width);
}

.Checkbox-module_visible-box__checkmark__n-q0I {
  background-color: white;
  clip-path: polygon(
    47.11% 56.51%,
    30.37% 38.94%,
    21.5% 48.09%,
    47.11% 74.54%,
    81.5% 39.16%,
    72.63% 30%
  );
  display: var(--checkbox-checkmark-display);
  height: 100%;
  width: 100%;
}
`);
const z3 = ({
  checkboxId: e,
  checked: t,
  compact: n,
  description: r,
  disabled: i,
  error: a,
  hideLabel: l,
  label: c,
  name: d,
  onChange: h,
  presentation: g,
  readOnly: v,
}) =>
  Z.createElement(
    x3,
    {
      checked: t,
      className: Xe(S3, t && P3, a && C3, i && E3, n && k3, v && O3),
      description: r,
      disabled: i,
      hideInput: v,
      hideLabel: l,
      inputId: e,
      label: c,
      name: d,
      onChange: h,
      presentation: g,
      size: n ? $l.Xsmall : $l.Small,
      type: 'checkbox',
    },
    Z.createElement('span', { className: L3 }, Z.createElement('span', { className: T3 })),
  );
Se(`.TextArea-module_TextArea__yR7M3 {
  font-family: inherit;
  font-size: var(--component-checkbox-font_size-sm);
}

.TextArea-module_TextArea--resize-none__bCtAH {
  resize: none;
}

.TextArea-module_TextArea--resize-both__Ipa6Y {
  resize: both;
}

.TextArea-module_TextArea--resize-horizontal__YEPbS {
  resize: horizontal;
}

.TextArea-module_TextArea--resize-vertical__dR26z {
  resize: vertical;
}
`);
var Ba,
  $o = {
    'field-set': 'FieldSet-module_field-set__N3GyH',
    'field-set--xsmall': 'FieldSet-module_field-set--xsmall__-4TGb',
    'field-set__legend': 'FieldSet-module_field-set__legend__UWNqr',
    'field-set__description': 'FieldSet-module_field-set__description__TUOvx',
    'field-set__content': 'FieldSet-module_field-set__content__9pJd2',
    'field-set__error-message': 'FieldSet-module_field-set__error-message__T6z8b',
  };
Se(`.FieldSet-module_field-set__N3GyH {
  --color: var(--component-checkbox-color-text-default);
  --content-margin_top: var(--component-fieldset-space-gap-y-small);
  --description-color: var(--component-field_description-color-text-default);
  --description-margin_top: var(--component-field_description-space-top-small);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);
  --font_size: var(--component-checkbox-font_size-sm);

  color: var(--color);
  border: 0;
  font-size: var(--font_size);
  line-height: var(--typography-default-line-height);
  margin: 0;
  padding: 0;
}

.FieldSet-module_field-set--xsmall__-4TGb {
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
}

.FieldSet-module_field-set__N3GyH:disabled {
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.FieldSet-module_field-set__N3GyH:disabled * {
  opacity: 1;
}

.FieldSet-module_field-set__legend__UWNqr {
  font-weight: bold;
  padding: 0;
}

.FieldSet-module_field-set__description__TUOvx {
  color: var(--description-color);
  margin: 0;
}

.FieldSet-module_field-set__legend__UWNqr + .FieldSet-module_field-set__description__TUOvx {
  margin-top: var(--description-margin_top);
}

.FieldSet-module_field-set__content__9pJd2:not(:first-child) {
  margin-top: var(--content-margin_top);
}

.FieldSet-module_field-set__error-message__T6z8b {
  margin-top: var(--error_message-margin_top);
}
`),
  (function (e) {
    (e.Xsmall = 'xsmall'), (e.Small = 'small');
  })(Ba || (Ba = {}));
const R3 = ({
  children: e,
  className: t,
  description: n,
  disabled: r,
  error: i,
  legend: a,
  size: l = Ba.Small,
}) =>
  Z.createElement(
    'fieldset',
    { className: Xe($o['field-set'], $o[`field-set--${l}`], t), disabled: r },
    a && Z.createElement('legend', { className: $o['field-set__legend'] }, a),
    n && Z.createElement('p', { className: $o['field-set__description'] }, n),
    Z.createElement('div', { className: $o['field-set__content'] }, e),
    i &&
      Z.createElement(
        'div',
        { className: $o['field-set__error-message'] },
        Z.createElement(w3, null, i),
      ),
  );
function I3(e) {
  return e.length === new Set(e).size;
}
function Ov(e, t) {
  N.useEffect(
    () => (document.addEventListener(e, t), () => document.removeEventListener(e, t)),
    [e, t],
  );
}
function td(e, t) {
  N.useEffect(() => {
    const n = (r) => {
      r.key === e && t();
    };
    return (
      document.addEventListener('keydown', n), () => document.removeEventListener('keydown', n)
    );
  }, [e, t]);
}
function M3(e) {
  const t = N.useRef();
  return (
    N.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
const N3 = (e, t) => {
  const n = N.useRef(!0);
  N.useEffect(() => {
    if (!n.current) return e();
    n.current = !1;
  }, t);
};
var Hl,
  nd = {
    'checkbox-group': 'CheckboxGroup-module_checkbox-group__Ltsbh',
    'checkbox-group--compact': 'CheckboxGroup-module_checkbox-group--compact__nMqjR',
    'checkbox-group--vertical': 'CheckboxGroup-module_checkbox-group--vertical__mh6Hp',
    'checkbox-group--horizontal': 'CheckboxGroup-module_checkbox-group--horizontal__mFAei',
  };
Se(`.CheckboxGroup-module_checkbox-group__Ltsbh {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);

  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.CheckboxGroup-module_checkbox-group--compact__nMqjR {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.CheckboxGroup-module_checkbox-group--vertical__mh6Hp {
  flex-direction: column;
}

.CheckboxGroup-module_checkbox-group--horizontal__mFAei {
  flex-direction: row;
}
`),
  (function (e) {
    (e.Vertical = 'vertical'), (e.Horizontal = 'horizontal');
  })(Hl || (Hl = {}));
const D3 = (e, t) => {
    switch (t.type) {
      case 'check':
        return e.concat([t.name]);
      case 'uncheck':
        return e.filter((n) => n !== t.name);
      case 'reset':
        return t.state;
    }
  },
  Lv = (e) => e.filter(({ checked: t }) => t).map(({ name: t }) => t),
  A3 = ({
    compact: e,
    description: t,
    disabled: n,
    error: r,
    items: i,
    legend: a,
    onChange: l,
    presentation: c,
    variant: d = Hl.Vertical,
  }) => {
    if (!I3(i.map((m) => m.name))) throw Error('Each name in the checkbox group must be unique.');
    const [h, g] = N.useReducer(D3, Lv(i));
    N.useEffect(() => g({ type: 'reset', state: Lv(i) }), [i]);
    const v = M3(h);
    return (
      N3(() => {
        l &&
          !n &&
          !(function (m, _) {
            if (m === _) return !0;
            if (m === void 0 || _ === void 0 || m.length !== _.length) return !1;
            for (const x in m) if (m[x] !== _[x]) return !1;
            return !0;
          })(v, h) &&
          l(h);
      }, [h, l, n]),
      Z.createElement(
        R3,
        { description: t, disabled: n, error: r, legend: a, size: e ? Ba.Xsmall : Ba.Small },
        Z.createElement(
          'div',
          {
            className: Xe(
              nd['checkbox-group'],
              nd[`checkbox-group--${d}`],
              e && nd['checkbox-group--compact'],
            ),
          },
          i.map((m) =>
            Z.createElement(z3, {
              checkboxId: m.checkboxId,
              checked: h.includes(m.name),
              compact: e,
              description: m.description,
              disabled: n || m.disabled,
              error: !!r,
              key: m.name,
              label: m.label,
              name: m.name,
              onChange: (_) => {
                g({ type: _.target.checked ? 'check' : 'uncheck', name: m.name });
              },
              presentation: c,
            }),
          ),
        ),
      )
    );
  };
Se(`.Pagination-module_pagination-icon__zVOLT {
  fill: rgb(0, 0, 0);
}

.Pagination-module_pagination-icon__zVOLT:not(:last-child) {
  margin-right: 20px;
}

.Pagination-module_pagination-icon__zVOLT:hover {
  cursor: pointer;
}

.Pagination-module_pagination-icon--disabled__IvaxN {
  fill: rgba(0, 0, 0, 0.4);
  cursor: default !important;
}

.Pagination-module_pagination-wrapper__cUN7w {
  display: flex;
  align-items: center;
  justify-content: right;
}

.Pagination-module_icon-button__uZQ12 {
  background-color: transparent;
  border: none;
}
`);
var B3 = 'MultiSelectItem-module_multi-select-item__KLSzx',
  F3 = 'MultiSelectItem-module_multi-select-item__delete-button__MxGVX',
  j3 = 'MultiSelectItem-module_multi-select-item__delete-button__cross__mi9CU';
Se(`.MultiSelectItem-module_multi-select-item__KLSzx {
  --border-radius: calc(var(--multiselect_item-height) / 2);
  align-items: center;
  background-color: var(--multiselect_item-background_color);
  border-radius: var(--border-radius);
  color: var(--multiselect_item-text_color);
  display: inline-flex;
  font-size: var(--font_size);
  gap: var(--multiselect_item-space_between);
  height: var(--multiselect_item-height);
  padding-left: var(--multiselect_item-space_left);
}

.MultiSelectItem-module_multi-select-item__delete-button__MxGVX {
  background-color: transparent;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  padding: calc(
    (var(--multiselect_item-height) - var(--delete_cross-size)) / 2
  );
  width: var(--multiselect_item-height);
}

.MultiSelectItem-module_multi-select-item__delete-button__MxGVX:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

.MultiSelectItem-module_multi-select-item__delete-button__MxGVX:focus-visible {
  background-color: var(--delete_cross_box-color-hover);
  outline: var(--focus_visible-outline);
}

.MultiSelectItem-module_multi-select-item__delete-button__cross__mi9CU {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`);
const U3 = ({ deleteButtonLabel: e, disabled: t, onDeleteButtonClick: n, label: r }) =>
  Z.createElement(
    'span',
    { className: B3 },
    Z.createElement('span', null, r),
    Z.createElement(
      'button',
      { 'aria-label': e, className: F3, disabled: t, onClick: n },
      Z.createElement('span', { className: j3 }),
    ),
  );
var bt = {
  select: 'Select-module_select__cjdcr',
  'select--disabled': 'Select-module_select--disabled__t9hQF',
  'select--expanded': 'Select-module_select--expanded__d5GAE',
  'select__option-list': 'Select-module_select__option-list__JhHMx',
  'select--using-keyboard': 'Select-module_select--using-keyboard__nXszu',
  select__field__button: 'Select-module_select__field__button__Y8Swc',
  select__field: 'Select-module_select__field__vU8L6',
  'select--multiple': 'Select-module_select--multiple__4Bh85',
  'select--single': 'Select-module_select--single__AbWOX',
  'select--single__field__value': 'Select-module_select--single__field__value__czE9k',
  'select--multiple__field__values': 'Select-module_select--multiple__field__values__hCbrG',
  'select__field__arrow-wrapper': 'Select-module_select__field__arrow-wrapper__G-aKb',
  'select__field__arrow-wrapper__arrow': 'Select-module_select__field__arrow-wrapper__arrow__sb-Jj',
  'select--multiple__field__delete-button':
    'Select-module_select--multiple__field__delete-button__UGXAq',
  'select--multiple__field__delete-button__cross':
    'Select-module_select--multiple__field__delete-button__cross__sKqhI',
  'select__option-list__option': 'Select-module_select__option-list__option__DsRkr',
  'select__option-list__option--selected':
    'Select-module_select__option-list__option--selected__x17Ux',
  'select--multiple__option-list__option--focused':
    'Select-module_select--multiple__option-list__option--focused__MUTsb',
};
Se(`.Select-module_select__cjdcr {
  --delete_cross_box-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --delete_cross_box-color-hover: var(--colors-red-500);
  --delete_cross_box-size: 25px;
  --delete_cross-clip_path: polygon(
    14.29% 0%,
    50% 35.71%,
    85.71% 0%,
    100% 14.29%,
    64.29% 50%,
    100% 85.71%,
    85.71% 100%,
    50% 64.29%,
    14.29% 100%,
    0% 85.71%,
    35.71% 50%,
    0% 14.29%
  );
  --delete_cross-color: var(--colors-blue-900);
  --delete_cross-color-active: var(--colors-blue-700);
  --delete_cross-color-disabled: #022f5180;
  --delete_cross-color-hover: white;
  --delete_cross-size: 12px;
  --arrow-border_left: 1px solid #022f5180;
  --arrow-color: var(--colors-blue-900);
  --arrow-height_to_width_fraction: calc(8 / 14);
  --arrow-horizontal_padding: 6px;
  --arrow-size: 14px;
  --arrow_wrapper-margin: 4px;
  --field-height-inside: calc(
    var(--field-height) - var(--component-input-border_width-default) * 2
  );
  --field-height: 36px;
  --font_size: 16px;
  --interactive_element-cursor: pointer;
  --line-height: 1.5;
  --multiselect_item-background_color: var(--colors-blue-900);
  --multiselect_item-height: 24px;
  --multiselect_item-space_between: 6px;
  --multiselect_item-space_left: 16px;
  --multiselect_item-text_color: white;
  --multiselect_item_delete_cross-color: white;
  --multiselect_items-gap: 4px;
  --multiselect_items-padding: calc(
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2
  );
  --option-background_color-default: transparent;
  --option-background_color-hover: var(--colors-blue-200);
  --option-background_color-selected: var(--colors-blue-300);
  --option-background_color-selected-hover: var(--colors-blue-500);
  --option-border_color: #022f5180;
  --option-border_width: 1px;
  --option-height: 36px;
  --option_list-background_color: white;
  --option_list-border: 1px solid #68707c;
  --option_list-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --option_list-number_of_visible_options: 7;
  --option_list-shadow: 1px 1px 3px #00000040;
  --option_list-z_index: 1;
  --option-outline-focus: none;
  --option-padding_horizontal: 12px;
  --singleselect_field-padding_left: 12px;
  --focus_visible-outline: 2px auto
    var(--interactive_components-colors-focus_outline);

  font-size: var(--font_size);
  line-height: var(--line-height);
  position: relative;
}

.Select-module_select--disabled__t9hQF {
  --interactive_element-cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.Select-module_select--expanded__d5GAE {
  --delete_cross-color: var(--delete_cross-color-active);
}

.Select-module_select__cjdcr:not(.Select-module_select--expanded__d5GAE) .Select-module_select__option-list__JhHMx {
  display: none;
}

.Select-module_select--using-keyboard__nXszu {
  --option-outline-focus: var(--focus_visible-outline);
}

.Select-module_select__field__button__Y8Swc {
  background: transparent;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  margin: 0;
  padding: 0;
}

.Select-module_select__field__vU8L6 {
  display: inline-flex;
  padding: 0;
}

.Select-module_select--multiple__4Bh85 .Select-module_select__field__vU8L6,
.Select-module_select--single__AbWOX .Select-module_select__field__button__Y8Swc {
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  font-family: var(--font_family-default);
  font-size: var(--font_size);
  min-height: var(--field-height-inside);
  position: relative;
  width: 100%;
}

.Select-module_select--single__field__value__czE9k {
  flex: 1;
  padding-left: var(--singleselect_field-padding_left);
  text-align: left;
}

.Select-module_select--multiple__field__values__hCbrG {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: var(--multiselect_items-gap);
  padding: var(--multiselect_items-padding);
}

.Select-module_select--multiple__4Bh85 .Select-module_select__field__button__Y8Swc:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_select__field__arrow-wrapper__G-aKb {
  --arrow-height: calc(
    var(--arrow-size) * var(--arrow-height_to_width_fraction)
  );
  --arrow-vertical_padding: calc(
    (var(--field-height-inside) - var(--arrow-height)) / 2 -
      var(--arrow_wrapper-margin)
  );
  align-items: center;
  border-left: var(--arrow-border_left);
  box-sizing: border-box;
  display: flex;
  height: calc(100% - var(--arrow-vertical_padding));
  margin-bottom: var(--arrow_wrapper-margin);
  margin-left: var(--arrow_wrapper-margin);
  margin-top: var(--arrow_wrapper-margin);
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);
}

.Select-module_select__field__arrow-wrapper__arrow__sb-Jj {
  background-color: var(--arrow-color);
  clip-path: polygon(
    11.72% 9.93%,
    50% 67.28%,
    88.28% 9.93%,
    97.43% 29.13%,
    50% 96.79%,
    2.57% 29.13%
  );
  display: inline-block;
  height: var(--arrow-height);
  width: var(--arrow-size);
}

.Select-module_select--multiple__field__delete-button__UGXAq {
  background: none;
  border-radius: var(--delete_cross_box-border_radius);
  border: none;
  cursor: var(--interactive_element-cursor);
  height: var(--delete_cross_box-size);
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);
  width: var(--delete_cross_box-size);
}

.Select-module_select--multiple__field__delete-button__UGXAq:disabled {
  cursor: auto;
}

.Select-module_select--multiple__field__delete-button__UGXAq:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_select--multiple__field__delete-button__UGXAq:hover:not(:disabled) {
  background-color: var(--delete_cross_box-color-hover);
  --delete_cross-color: var(--delete_cross-color-hover);
}

.Select-module_select--multiple__field__delete-button__UGXAq:disabled {
  --delete_cross-color: var(--delete_cross-color-disabled);
  background-color: transparent;
}

.Select-module_select--multiple__field__delete-button__cross__sKqhI {
  background-color: var(--delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}

.Select-module_select__option-list__JhHMx {
  background-color: var(--option_list-background_color);
  border-radius: var(--option_list-border_radius);
  border: var(--option_list-border);
  box-shadow: var(--option_list-shadow);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-height: calc(
    var(--option-height) * var(--option_list-number_of_visible_options)
  );
  overflow-y: auto;
  padding: 0;
  position: absolute;
  z-index: var(--option_list-z_index);
}

.Select-module_select__option-list__option__DsRkr {
  background-color: var(--option-background_color-default);
  border-color: var(--option-border_color);
  border-style: solid;
  border-width: var(--option-border_width) 0 0 0;
  box-sizing: border-box;
  cursor: var(--interactive_element-cursor);
  display: inline-block;
  min-height: var(--option-height);
  overflow-x: hidden;
  padding-left: var(--option-padding_horizontal);
  padding-right: var(--option-padding_horizontal);
  padding-top: calc(
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2
  );
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Select-module_select__option-list__option__DsRkr:hover {
  background-color: var(--option-background_color-hover);
}

.Select-module_select__option-list__option--selected__x17Ux {
  background-color: var(--option-background_color-selected);
}

.Select-module_select__option-list__option--selected__x17Ux:hover {
  background-color: var(--option-background_color-selected-hover);
}

.Select-module_select--multiple__option-list__option--focused__MUTsb {
  outline: var(--option-outline-focus);
}
`);
const Bs = { ArrowUp: 'ArrowUp', ArrowDown: 'ArrowDown', Enter: 'Enter' },
  Tv = (e) => {
    const {
        disabled: t,
        error: n,
        hideLabel: r,
        inputId: i,
        label: a,
        multiple: l,
        onChange: c,
        options: d,
        value: h,
      } = e,
      g = d.map((X) => X.value);
    if (g.length !== new Set(g).size) throw Error('Each value in the option list must be unique.');
    const [v, m] = N.useState(l && h != null ? h : []),
      [_, x] = N.useState(l ? void 0 : h),
      S = d.findIndex((X) => X.value === _),
      [O, w] = N.useState(!1);
    Ov('click', () => w(!1)), Ov('keydown', () => w(!0));
    const [b, k] = N.useState(!1),
      E = N.useRef(null),
      D = N.useRef(null);
    N.useEffect(() => {
      const X = E.current;
      if (X) {
        const de = X.offsetHeight,
          I = X.getElementsByTagName('li')[0].offsetHeight,
          re = X.scrollTop,
          H = S * I,
          P = H + I;
        (H >= re && P <= re + de) || (X.scrollTop = H < re ? H : P - de);
      }
    }, [S]);
    const F = (X) => {
        var de;
        return (de = d.find((I) => I.value === X)) !== null && de !== void 0
          ? de
          : { label: '', value: '' };
      },
      W = (X, de) => {
        v?.length || x(de), m(X), c && c(X);
      },
      Q = (X) => {
        var de;
        l ? (v.includes(X) ? te(X) : W([...v, X], X)) : (x((de = X)), k(!1), c && c(de));
      },
      te = (X) => {
        W(
          v.filter((de) => de !== X),
          X,
        );
      },
      q = N.useCallback(() => {
        if (_ === void 0) x(d[0].value);
        else {
          const X = S + 1;
          X >= 0 && X < d.length && x(d[X].value);
        }
        k(!0);
      }, [_, S, x, d]),
      ue = N.useCallback(() => {
        if (_ === void 0) x(d[d.length - 1].value);
        else {
          const X = S - 1;
          X >= 0 && X < d.length && x(d[X].value);
        }
        k(!0);
      }, [_, S, x, d]);
    td(Bs.ArrowDown, () => b && q()),
      td(Bs.ArrowUp, () => b && ue()),
      td(Bs.Enter, () => b && l && _ && Q(_));
    const ge = (X) => _ === X,
      Ze = (X) => (l ? v.includes(X) : ge(X)),
      ce = N.useId(),
      Ne = D.current
        ? `calc(${D.current.offsetWidth}px + 2 * ${rb.component.input.border_width.default.value})`
        : void 0;
    return Z.createElement(
      'div',
      {
        className: Xe(
          bt.select,
          bt['select--' + (l ? 'multiple' : 'single')],
          b && bt['select--expanded'],
          t && bt['select--disabled'],
          O && bt['select--using-keyboard'],
        ),
        'data-testid': 'select-root',
      },
      Z.createElement(y3, {
        disabled: t,
        inputId: i,
        inputRenderer: ({ className: X, inputId: de }) =>
          Z.createElement(
            'span',
            { className: Xe(X, bt.select__field), ref: D },
            l &&
              Z.createElement(
                Z.Fragment,
                null,
                Z.createElement(
                  'span',
                  { className: bt['select--multiple__field__values'] },
                  v
                    .map(F)
                    .map((I) =>
                      Z.createElement(U3, {
                        deleteButtonLabel: I.deleteButtonLabel,
                        disabled: t != null && t,
                        key: I.value,
                        label: I.label,
                        onDeleteButtonClick: () => te(I.value),
                      }),
                    ),
                ),
                Z.createElement(
                  'button',
                  {
                    'aria-label': e.deleteButtonLabel,
                    className: bt['select--multiple__field__delete-button'],
                    disabled: !v.length || t,
                    onClick: () => {
                      W([]);
                    },
                  },
                  Z.createElement('span', {
                    className: bt['select--multiple__field__delete-button__cross'],
                  }),
                ),
              ),
            Z.createElement(
              'button',
              {
                'aria-controls': ce,
                'aria-expanded': b,
                'aria-label': a,
                className: bt.select__field__button,
                disabled: t,
                id: de,
                onBlur: () => k(!1),
                onClick: () => k(!b),
                onKeyDown: (I) => {
                  Object.values(Bs).includes(I.key) && (I.preventDefault(), k(!0));
                },
                role: 'combobox',
                value: l ? v : _,
              },
              !l &&
                Z.createElement(
                  'span',
                  { className: bt['select--single__field__value'] },
                  F(_).label,
                ),
              Z.createElement(
                'span',
                { className: bt['select__field__arrow-wrapper'] },
                Z.createElement('span', { className: bt['select__field__arrow-wrapper__arrow'] }),
              ),
            ),
          ),
        isSearch: !1,
        isValid: !n,
        label: r ? void 0 : a,
        noFocusEffect: l,
        noPadding: !0,
        readOnly: !1,
      }),
      Z.createElement(
        'ul',
        {
          className: bt['select__option-list'],
          id: ce,
          ref: E,
          role: 'listbox',
          style: { width: Ne },
        },
        d.map((X) =>
          Z.createElement(
            'li',
            {
              'aria-selected': Ze(X.value),
              className: Xe(
                bt['select__option-list__option'],
                Ze(X.value) && bt['select__option-list__option--selected'],
                l && ge(X.value) && bt['select--multiple__option-list__option--focused'],
              ),
              key: X.value,
              onClick: () => Q(X.value),
              onMouseDown: (de) => de.preventDefault(),
              onKeyDown: (de) => de.preventDefault(),
              role: 'option',
              value: X.value,
            },
            X.label,
          ),
        ),
      ),
    );
  };
Se(`.Tabs-module_tabs__QzIkz {
  --divider-color: #c9c9c9;
  --divider-width: 1px;
  --tab-border_bottom_color-selected: var(--colors-blue-700);
  --tab-border_bottom_color: transparent;
  --tab-border_bottom_width: 4px;
  --tab-font_family: var(--font_family-default);
  --tab-font_size: var(--font_size-component-size-sm);
  --tab-font_weight: 500;
  --tab-height: 32px;
  --tab-text_color-hover: var(--colors-black);
  --tab-text_color-selected: var(--colors-blue-700);
  --tab-text_color: #68707c;
  --tablist-gap: 36px;
  --tablist-margin_horizontal: 2rem;
  --tabpanel-margin_horizontal: 2rem;
  --tabpanel-margin_vertical: 2rem;
  position: relative;
}

.Tabs-module_tabs__tablist__YLXsB {
  display: flex;
  gap: var(--tablist-gap);
  margin: 0 var(--tablist-margin_horizontal);
  position: relative;
  z-index: 1;
}

.Tabs-module_tabs__tablist__tab__5RyZr {
  background-color: transparent;
  border-bottom-color: var(--tab-border_bottom_color);
  border-bottom-style: solid;
  border-width: 0 0 var(--tab-border_bottom_width) 0;
  color: var(--tab-text_color);
  cursor: pointer;
  font-family: var(--tab-font_family);
  font-size: var(--tab-font_size);
  font-weight: var(--tab-font_weight);
  line-height: var(--tab-height);
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Tabs-module_tabs__tablist__tab--selected__XugYC {
  --tab-text_color: var(--tab-text_color-selected);
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);
}

.Tabs-module_tabs__tablist__tab__5RyZr:hover {
  --tab-text_color: var(--tab-text_color-hover);
}

.Tabs-module_tabs__tablist__tab__5RyZr:focus-visible {
  outline: var(--component-input-color-outline-focus) auto 2px;
  outline-offset: 2px;
}

.Tabs-module_tabs__divider__mdVZt {
  border-color: var(--divider-color);
  border-style: solid;
  border-width: var(--divider-width) 0 0 0;
  height: var(--divider-width);
  margin: 0;
  position: absolute;
  top: var(--tab-height);
  width: 100%;
}

.Tabs-module_tabs__tabpanel__6fbCa {
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);
}
`);
var zv;
Se(`.RadioButton-module_radio__-lcP- {
  /* Internal variables */
  --radio-background_color: var(--component-checkbox-color-background-default);
  --radio-border_color: var(--component-checkbox-color-border-default);
  --radio-border_width: var(--component-checkbox-border_width-small);
  --radio-checkmark-color: var(--colors-blue-700);
  --radio-checkmark-display: none;
  --radio-size: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-border_radius: calc(var(--radio-size) / 2);
  --input_box-size: var(--radio-size);
}

.RadioButton-module_radio--small__YR1Q8 {
  --radio-size: var(--component-checkbox-size-width-small);
}

.RadioButton-module_radio--xsmall__wK2Gd {
  --radio-size: var(--component-checkbox-size-width-xsmall);
}

.RadioButton-module_radio--error__-utI6 {
  --radio-background_color: var(--component-checkbox-color-background-error);
  --radio-border_color: var(--component-checkbox-color-border-error);
}

.RadioButton-module_radio--checked__NKmOP {
  --radio-checkmark-display: inline-block;
}

.RadioButton-module_radio--checked__NKmOP:not(.RadioButton-module_radio--disabled__yBzoh, .RadioButton-module_radio--error__-utI6) {
  --radio-border_color: var(--component-checkbox-color-border-checked);
}

.RadioButton-module_radio__-lcP-:not(.RadioButton-module_radio--disabled__yBzoh, .RadioButton-module_radio--checked__NKmOP):hover {
  --radio-background_color: var(--component-checkbox-color-background-hover);
}

.RadioButton-module_radio__-lcP-:not(.RadioButton-module_radio--disabled__yBzoh, .RadioButton-module_radio--error__-utI6, .RadioButton-module_radio--checked__NKmOP):hover {
  --radio-border_color: var(--component-checkbox-color-border-hover);
}

.RadioButton-module_radio--disabled__yBzoh.RadioButton-module_radio--checked__NKmOP {
  --radio-background_color: var(--component-checkbox-color-border-disabled);
  --radio-border_color: transparent;
}

.RadioButton-module_visible-button__CpJsm {
  background-color: var(--radio-background_color);
  border-color: var(--radio-border_color);
  border-radius: 50%;
  border-style: solid;
  border-width: var(--radio-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--radio-size);
  width: var(--radio-size);
}

.RadioButton-module_visible-button__checkmark__muOzA {
  --radio-checkmark-size: 80%;
  background-color: var(--radio-checkmark-color);
  border-radius: 50%;
  display: var(--radio-checkmark-display);
  height: var(--radio-checkmark-size);
  margin: calc(
    (var(--radio-size) - var(--radio-checkmark-size)) / 2 -
      var(--radio-border_width)
  );
  width: var(--radio-checkmark-size);
}
`),
  (function (e) {
    (e.Xsmall = 'xsmall'), (e.Small = 'small');
  })(zv || (zv = {}));
var Rv, Iv;
Se(`.RadioGroup-module_radio-group__RXgmX {
  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.RadioGroup-module_radio-group--xsmall__rMTu- {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.RadioGroup-module_radio-group--small__6KkpL {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);
}

.RadioGroup-module_radio-group--vertical__YgbUL {
  flex-direction: column;
}

.RadioGroup-module_radio-group--horizontal__gjKVV {
  flex-direction: row;
}
`),
  (function (e) {
    (e.Xsmall = 'xsmall'), (e.Small = 'small');
  })(Rv || (Rv = {})),
  (function (e) {
    (e.Vertical = 'vertical'), (e.Horizontal = 'horizontal');
  })(Iv || (Iv = {}));
const $3 = (e) =>
  N.createElement(
    'svg',
    {
      'xmlns:svg': 'http://www.w3.org/2000/svg',
      xmlns: 'http://www.w3.org/2000/svg',
      width: 410,
      height: 160,
      viewBox: '-0.52 -0.464 511 330',
      id: 'svg2',
      xmlSpace: 'preserve',
      ...e,
    },
    N.createElement('defs', { id: 'defs4' }),
    N.createElement('path', {
      d: 'M 236.54427,9.8485 C 220.2445,9.8485 204.45277,15.405415 191.41289,25.550223 L 97.337229,97.995127 L -135.0706,131.12201 C -150.90459,133.65817 -161.13586,149.44963 -156.32358,165.14237 L -132.57022,244.60846 L -86.188678,244.60846 C -90.823109,289.62242 -60.00389,319.2235 -20.679452,319.2235 C 18.644986,319.2235 49.844083,285.73585 44.829779,244.60846 L 425.19586,244.60846 C 419.65783,289.49008 452.23789,319.2235 490.70508,319.2235 C 529.17227,319.2235 561.22444,285.70267 556.21433,244.60846 L 651.04018,244.60846 C 659.88863,244.60846 667.48002,236.98237 667.48,227.63005 L 667.48,137.76012 C 667.48,129.20037 661.30023,122.08284 653.22799,120.97335 L 491.76774,97.995127 L 427.82125,32.635149 C 413.84999,18.051989 394.74442,10.165524 374.56372,9.8485 L 236.54427,9.8485 z M 304.42883,37.42226 L 378.62679,37.42226 C 389.64854,37.42226 399.73373,43.261111 405.94316,52.613356 L 424.25825,80.825395 C 428.78955,88.722668 423.85522,96.409133 415.38198,97.803717 L 304.42883,97.803717 L 304.42883,37.42226 z M 224.60508,37.549916 L 283.42586,37.549916 L 283.42586,97.803717 L 132.59212,97.803717 L 200.10167,45.97523 C 207.08728,40.585799 215.91189,37.549914 224.60508,37.549916 z',
      id: 'path12',
    }),
  );
function sb(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: lb } = Object.prototype,
  { getPrototypeOf: Xh } = Object,
  Yh = ((e) => (t) => {
    const n = lb.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  pr = (e) => ((e = e.toLowerCase()), (t) => Yh(t) === e),
  Uu = (e) => (t) => typeof t === e,
  { isArray: ki } = Array,
  Fa = Uu('undefined');
function H3(e) {
  return (
    e !== null &&
    !Fa(e) &&
    e.constructor !== null &&
    !Fa(e.constructor) &&
    Eo(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ub = pr('ArrayBuffer');
function W3(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ub(e.buffer)),
    t
  );
}
const Z3 = Uu('string'),
  Eo = Uu('function'),
  cb = Uu('number'),
  Jh = (e) => e !== null && typeof e == 'object',
  V3 = (e) => e === !0 || e === !1,
  el = (e) => {
    if (Yh(e) !== 'object') return !1;
    const t = Xh(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  q3 = pr('Date'),
  Q3 = pr('File'),
  K3 = pr('Blob'),
  G3 = pr('FileList'),
  X3 = (e) => Jh(e) && Eo(e.pipe),
  Y3 = (e) => {
    const t = '[object FormData]';
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        lb.call(e) === t ||
        (Eo(e.toString) && e.toString() === t))
    );
  },
  J3 = pr('URLSearchParams'),
  e5 = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function Ga(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, i;
  if ((typeof e != 'object' && (e = [e]), ki(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = a.length;
    let c;
    for (r = 0; r < l; r++) (c = a[r]), t.call(null, e[c], c, e);
  }
}
function db(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const fb = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  hb = (e) => !Fa(e) && e !== fb;
function Rf() {
  const { caseless: e } = (hb(this) && this) || {},
    t = {},
    n = (r, i) => {
      const a = (e && db(t, i)) || i;
      el(t[a]) && el(r)
        ? (t[a] = Rf(t[a], r))
        : el(r)
        ? (t[a] = Rf({}, r))
        : ki(r)
        ? (t[a] = r.slice())
        : (t[a] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && Ga(arguments[r], n);
  return t;
}
const t5 = (e, t, n, { allOwnKeys: r } = {}) => (
    Ga(
      t,
      (i, a) => {
        n && Eo(i) ? (e[a] = sb(i, n)) : (e[a] = i);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  n5 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  r5 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  o5 = (e, t, n, r) => {
    let i, a, l;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        (l = i[a]), (!r || r(l, e, t)) && !c[l] && ((t[l] = e[l]), (c[l] = !0));
      e = n !== !1 && Xh(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  i5 = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  a5 = (e) => {
    if (!e) return null;
    if (ki(e)) return e;
    let t = e.length;
    if (!cb(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  s5 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Xh(Uint8Array)),
  l5 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const a = i.value;
      t.call(e, a[0], a[1]);
    }
  },
  u5 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  c5 = pr('HTMLFormElement'),
  d5 = (e) =>
    e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Mv = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  f5 = pr('RegExp'),
  pb = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ga(n, (i, a) => {
      t(i, a, e) !== !1 && (r[a] = i);
    }),
      Object.defineProperties(e, r);
  },
  h5 = (e) => {
    pb(e, (t, n) => {
      if (Eo(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (Eo(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  p5 = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((a) => {
          n[a] = !0;
        });
      };
    return ki(e) ? r(e) : r(String(e).split(t)), n;
  },
  m5 = () => {},
  g5 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  v5 = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Jh(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[i] = r;
            const a = ki(r) ? [] : {};
            return (
              Ga(r, (l, c) => {
                const d = n(l, i + 1);
                !Fa(d) && (a[c] = d);
              }),
              (t[i] = void 0),
              a
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  B = {
    isArray: ki,
    isArrayBuffer: ub,
    isBuffer: H3,
    isFormData: Y3,
    isArrayBufferView: W3,
    isString: Z3,
    isNumber: cb,
    isBoolean: V3,
    isObject: Jh,
    isPlainObject: el,
    isUndefined: Fa,
    isDate: q3,
    isFile: Q3,
    isBlob: K3,
    isRegExp: f5,
    isFunction: Eo,
    isStream: X3,
    isURLSearchParams: J3,
    isTypedArray: s5,
    isFileList: G3,
    forEach: Ga,
    merge: Rf,
    extend: t5,
    trim: e5,
    stripBOM: n5,
    inherits: r5,
    toFlatObject: o5,
    kindOf: Yh,
    kindOfTest: pr,
    endsWith: i5,
    toArray: a5,
    forEachEntry: l5,
    matchAll: u5,
    isHTMLForm: c5,
    hasOwnProperty: Mv,
    hasOwnProp: Mv,
    reduceDescriptors: pb,
    freezeMethods: h5,
    toObjectSet: p5,
    toCamelCase: d5,
    noop: m5,
    toFiniteNumber: g5,
    findKey: db,
    global: fb,
    isContextDefined: hb,
    toJSONObject: v5,
  };
function Ee(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
B.inherits(Ee, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    };
  },
});
const mb = Ee.prototype,
  gb = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  gb[e] = { value: e };
});
Object.defineProperties(Ee, gb);
Object.defineProperty(mb, 'isAxiosError', { value: !0 });
Ee.from = (e, t, n, r, i, a) => {
  const l = Object.create(mb);
  return (
    B.toFlatObject(
      e,
      l,
      function (d) {
        return d !== Error.prototype;
      },
      (c) => c !== 'isAxiosError',
    ),
    Ee.call(l, e.message, t, n, r, i),
    (l.cause = e),
    (l.name = e.name),
    a && Object.assign(l, a),
    l
  );
};
var _5 = typeof self == 'object' ? self.FormData : window.FormData;
const y5 = _5;
function If(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function vb(e) {
  return B.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Nv(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, a) {
          return (i = vb(i)), !n && a ? '[' + i + ']' : i;
        })
        .join(n ? '.' : '')
    : t;
}
function b5(e) {
  return B.isArray(e) && !e.some(If);
}
const w5 = B.toFlatObject(B, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function x5(e) {
  return e && B.isFunction(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator];
}
function $u(e, t, n) {
  if (!B.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new (y5 || FormData)()),
    (n = B.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (S, O) {
      return !B.isUndefined(O[S]);
    }));
  const r = n.metaTokens,
    i = n.visitor || g,
    a = n.dots,
    l = n.indexes,
    d = (n.Blob || (typeof Blob < 'u' && Blob)) && x5(t);
  if (!B.isFunction(i)) throw new TypeError('visitor must be a function');
  function h(x) {
    if (x === null) return '';
    if (B.isDate(x)) return x.toISOString();
    if (!d && B.isBlob(x)) throw new Ee('Blob is not supported. Use a Buffer instead.');
    return B.isArrayBuffer(x) || B.isTypedArray(x)
      ? d && typeof Blob == 'function'
        ? new Blob([x])
        : Buffer.from(x)
      : x;
  }
  function g(x, S, O) {
    let w = x;
    if (x && !O && typeof x == 'object') {
      if (B.endsWith(S, '{}')) (S = r ? S : S.slice(0, -2)), (x = JSON.stringify(x));
      else if (
        (B.isArray(x) && b5(x)) ||
        B.isFileList(x) ||
        (B.endsWith(S, '[]') && (w = B.toArray(x)))
      )
        return (
          (S = vb(S)),
          w.forEach(function (k, E) {
            !(B.isUndefined(k) || k === null) &&
              t.append(l === !0 ? Nv([S], E, a) : l === null ? S : S + '[]', h(k));
          }),
          !1
        );
    }
    return If(x) ? !0 : (t.append(Nv(O, S, a), h(x)), !1);
  }
  const v = [],
    m = Object.assign(w5, { defaultVisitor: g, convertValue: h, isVisitable: If });
  function _(x, S) {
    if (!B.isUndefined(x)) {
      if (v.indexOf(x) !== -1) throw Error('Circular reference detected in ' + S.join('.'));
      v.push(x),
        B.forEach(x, function (w, b) {
          (!(B.isUndefined(w) || w === null) &&
            i.call(t, w, B.isString(b) ? b.trim() : b, S, m)) === !0 && _(w, S ? S.concat(b) : [b]);
        }),
        v.pop();
    }
  }
  if (!B.isObject(e)) throw new TypeError('data must be an object');
  return _(e), t;
}
function Dv(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ep(e, t) {
  (this._pairs = []), e && $u(e, this, t);
}
const _b = ep.prototype;
_b.append = function (t, n) {
  this._pairs.push([t, n]);
};
_b.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Dv);
      }
    : Dv;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + '=' + n(i[1]);
    }, '')
    .join('&');
};
function S5(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function yb(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || S5,
    i = n && n.serialize;
  let a;
  if (
    (i ? (a = i(t, n)) : (a = B.isURLSearchParams(t) ? t.toString() : new ep(t, n).toString(r)), a)
  ) {
    const l = e.indexOf('#');
    l !== -1 && (e = e.slice(0, l)), (e += (e.indexOf('?') === -1 ? '?' : '&') + a);
  }
  return e;
}
class k5 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    B.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Av = k5,
  bb = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  C5 = typeof URLSearchParams < 'u' ? URLSearchParams : ep,
  P5 = FormData,
  E5 = (() => {
    let e;
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' || e === 'NativeScript' || e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  })(),
  O5 = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  Un = {
    isBrowser: !0,
    classes: { URLSearchParams: C5, FormData: P5, Blob },
    isStandardBrowserEnv: E5,
    isStandardBrowserWebWorkerEnv: O5,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
function L5(e, t) {
  return $u(
    e,
    new Un.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, a) {
          return Un.isNode && B.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function T5(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function z5(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let a;
  for (r = 0; r < i; r++) (a = n[r]), (t[a] = e[a]);
  return t;
}
function wb(e) {
  function t(n, r, i, a) {
    let l = n[a++];
    const c = Number.isFinite(+l),
      d = a >= n.length;
    return (
      (l = !l && B.isArray(i) ? i.length : l),
      d
        ? (B.hasOwnProp(i, l) ? (i[l] = [i[l], r]) : (i[l] = r), !c)
        : ((!i[l] || !B.isObject(i[l])) && (i[l] = []),
          t(n, r, i[l], a) && B.isArray(i[l]) && (i[l] = z5(i[l])),
          !c)
    );
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const n = {};
    return (
      B.forEachEntry(e, (r, i) => {
        t(T5(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
const R5 = { 'Content-Type': void 0 };
function I5(e, t, n) {
  if (B.isString(e))
    try {
      return (t || JSON.parse)(e), B.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const Hu = {
  transitional: bb,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        i = r.indexOf('application/json') > -1,
        a = B.isObject(t);
      if ((a && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t)))
        return i && i ? JSON.stringify(wb(t)) : t;
      if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t))
        return t;
      if (B.isArrayBufferView(t)) return t.buffer;
      if (B.isURLSearchParams(t))
        return (
          n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
        );
      let c;
      if (a) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return L5(t, this.formSerializer).toString();
        if ((c = B.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const d = this.env && this.env.FormData;
          return $u(c ? { 'files[]': t } : t, d && new d(), this.formSerializer);
        }
      }
      return a || i ? (n.setContentType('application/json', !1), I5(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Hu.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === 'json';
      if (t && B.isString(t) && ((r && !this.responseType) || i)) {
        const l = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (l)
            throw c.name === 'SyntaxError'
              ? Ee.from(c, Ee.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Un.classes.FormData, Blob: Un.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
B.forEach(['delete', 'get', 'head'], function (t) {
  Hu.headers[t] = {};
});
B.forEach(['post', 'put', 'patch'], function (t) {
  Hu.headers[t] = B.merge(R5);
});
const tp = Hu,
  M5 = B.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  N5 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (l) {
            (i = l.indexOf(':')),
              (n = l.substring(0, i).trim().toLowerCase()),
              (r = l.substring(i + 1).trim()),
              !(!n || (t[n] && M5[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Bv = Symbol('internals');
function Ki(e) {
  return e && String(e).trim().toLowerCase();
}
function tl(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(tl) : String(e);
}
function D5(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function A5(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Fv(e, t, n, r) {
  if (B.isFunction(r)) return r.call(this, t, n);
  if (B.isString(t)) {
    if (B.isString(r)) return t.indexOf(r) !== -1;
    if (B.isRegExp(r)) return r.test(t);
  }
}
function B5(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function F5(e, t) {
  const n = B.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, a, l) {
        return this[r].call(this, t, i, a, l);
      },
      configurable: !0,
    });
  });
}
class Wu {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function a(c, d, h) {
      const g = Ki(d);
      if (!g) throw new Error('header name must be a non-empty string');
      const v = B.findKey(i, g);
      (!v || i[v] === void 0 || h === !0 || (h === void 0 && i[v] !== !1)) && (i[v || d] = tl(c));
    }
    const l = (c, d) => B.forEach(c, (h, g) => a(h, g, d));
    return (
      B.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : B.isString(t) && (t = t.trim()) && !A5(t)
        ? l(N5(t), n)
        : t != null && a(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Ki(t)), t)) {
      const r = B.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return D5(i);
        if (B.isFunction(n)) return n.call(this, i, r);
        if (B.isRegExp(n)) return n.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Ki(t)), t)) {
      const r = B.findKey(this, t);
      return !!(r && (!n || Fv(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function a(l) {
      if (((l = Ki(l)), l)) {
        const c = B.findKey(r, l);
        c && (!n || Fv(r, r[c], c, n)) && (delete r[c], (i = !0));
      }
    }
    return B.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      B.forEach(this, (i, a) => {
        const l = B.findKey(r, a);
        if (l) {
          (n[l] = tl(i)), delete n[a];
          return;
        }
        const c = t ? B5(a) : String(a).trim();
        c !== a && delete n[a], (n[c] = tl(i)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      B.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && B.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Bv] = this[Bv] = { accessors: {} }).accessors,
      i = this.prototype;
    function a(l) {
      const c = Ki(l);
      r[c] || (F5(i, l), (r[c] = !0));
    }
    return B.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Wu.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent']);
B.freezeMethods(Wu.prototype);
B.freezeMethods(Wu);
const ar = Wu;
function rd(e, t) {
  const n = this || tp,
    r = t || n,
    i = ar.from(r.headers);
  let a = r.data;
  return (
    B.forEach(e, function (c) {
      a = c.call(n, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function xb(e) {
  return !!(e && e.__CANCEL__);
}
function Xa(e, t, n) {
  Ee.call(this, e ?? 'canceled', Ee.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
B.inherits(Xa, Ee, { __CANCEL__: !0 });
const j5 = null;
function U5(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Ee(
          'Request failed with status code ' + n.status,
          [Ee.ERR_BAD_REQUEST, Ee.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n,
        ),
      );
}
const $5 = Un.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, a, l, c) {
          const d = [];
          d.push(n + '=' + encodeURIComponent(r)),
            B.isNumber(i) && d.push('expires=' + new Date(i).toGMTString()),
            B.isString(a) && d.push('path=' + a),
            B.isString(l) && d.push('domain=' + l),
            c === !0 && d.push('secure'),
            (document.cookie = d.join('; '));
        },
        read: function (n) {
          const r = document.cookie.match(new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'));
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function H5(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function W5(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Sb(e, t) {
  return e && !H5(t) ? W5(e, t) : t;
}
const Z5 = Un.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function i(a) {
        let l = a;
        return (
          t && (n.setAttribute('href', l), (l = n.href)),
          n.setAttribute('href', l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (l) {
          const c = B.isString(l) ? i(l) : l;
          return c.protocol === r.protocol && c.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function V5(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function q5(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    a = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (d) {
      const h = Date.now(),
        g = r[a];
      l || (l = h), (n[i] = d), (r[i] = h);
      let v = a,
        m = 0;
      for (; v !== i; ) (m += n[v++]), (v = v % e);
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), h - l < t)) return;
      const _ = g && h - g;
      return _ ? Math.round((m * 1e3) / _) : void 0;
    }
  );
}
function jv(e, t) {
  let n = 0;
  const r = q5(50, 250);
  return (i) => {
    const a = i.loaded,
      l = i.lengthComputable ? i.total : void 0,
      c = a - n,
      d = r(c),
      h = a <= l;
    n = a;
    const g = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && l && h ? (l - a) / d : void 0,
      event: i,
    };
    (g[t ? 'download' : 'upload'] = !0), e(g);
  };
}
const Q5 = typeof XMLHttpRequest < 'u',
  K5 =
    Q5 &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const a = ar.from(e.headers).normalize(),
          l = e.responseType;
        let c;
        function d() {
          e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener('abort', c);
        }
        B.isFormData(i) &&
          (Un.isStandardBrowserEnv || Un.isStandardBrowserWebWorkerEnv) &&
          a.setContentType(!1);
        let h = new XMLHttpRequest();
        if (e.auth) {
          const _ = e.auth.username || '',
            x = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
          a.set('Authorization', 'Basic ' + btoa(_ + ':' + x));
        }
        const g = Sb(e.baseURL, e.url);
        h.open(e.method.toUpperCase(), yb(g, e.params, e.paramsSerializer), !0),
          (h.timeout = e.timeout);
        function v() {
          if (!h) return;
          const _ = ar.from('getAllResponseHeaders' in h && h.getAllResponseHeaders()),
            S = {
              data: !l || l === 'text' || l === 'json' ? h.responseText : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: _,
              config: e,
              request: h,
            };
          U5(
            function (w) {
              n(w), d();
            },
            function (w) {
              r(w), d();
            },
            S,
          ),
            (h = null);
        }
        if (
          ('onloadend' in h
            ? (h.onloadend = v)
            : (h.onreadystatechange = function () {
                !h ||
                  h.readyState !== 4 ||
                  (h.status === 0 && !(h.responseURL && h.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(v);
              }),
          (h.onabort = function () {
            h && (r(new Ee('Request aborted', Ee.ECONNABORTED, e, h)), (h = null));
          }),
          (h.onerror = function () {
            r(new Ee('Network Error', Ee.ERR_NETWORK, e, h)), (h = null);
          }),
          (h.ontimeout = function () {
            let x = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded';
            const S = e.transitional || bb;
            e.timeoutErrorMessage && (x = e.timeoutErrorMessage),
              r(new Ee(x, S.clarifyTimeoutError ? Ee.ETIMEDOUT : Ee.ECONNABORTED, e, h)),
              (h = null);
          }),
          Un.isStandardBrowserEnv)
        ) {
          const _ = (e.withCredentials || Z5(g)) && e.xsrfCookieName && $5.read(e.xsrfCookieName);
          _ && a.set(e.xsrfHeaderName, _);
        }
        i === void 0 && a.setContentType(null),
          'setRequestHeader' in h &&
            B.forEach(a.toJSON(), function (x, S) {
              h.setRequestHeader(S, x);
            }),
          B.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials),
          l && l !== 'json' && (h.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            h.addEventListener('progress', jv(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            h.upload &&
            h.upload.addEventListener('progress', jv(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((c = (_) => {
              h && (r(!_ || _.type ? new Xa(null, e, h) : _), h.abort(), (h = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal && (e.signal.aborted ? c() : e.signal.addEventListener('abort', c)));
        const m = V5(g);
        if (m && Un.protocols.indexOf(m) === -1) {
          r(new Ee('Unsupported protocol ' + m + ':', Ee.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(i || null);
      });
    },
  nl = { http: j5, xhr: K5 };
B.forEach(nl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const G5 = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let i = 0; i < t && ((n = e[i]), !(r = B.isString(n) ? nl[n.toLowerCase()] : n)); i++);
    if (!r)
      throw r === !1
        ? new Ee(`Adapter ${n} is not supported by the environment`, 'ERR_NOT_SUPPORT')
        : new Error(
            B.hasOwnProp(nl, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`,
          );
    if (!B.isFunction(r)) throw new TypeError('adapter is not a function');
    return r;
  },
  adapters: nl,
};
function od(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new Xa(null, e);
}
function Uv(e) {
  return (
    od(e),
    (e.headers = ar.from(e.headers)),
    (e.data = rd.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    G5.getAdapter(e.adapter || tp.adapter)(e).then(
      function (r) {
        return (
          od(e), (r.data = rd.call(e, e.transformResponse, r)), (r.headers = ar.from(r.headers)), r
        );
      },
      function (r) {
        return (
          xb(r) ||
            (od(e),
            r &&
              r.response &&
              ((r.response.data = rd.call(e, e.transformResponse, r.response)),
              (r.response.headers = ar.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const $v = (e) => (e instanceof ar ? e.toJSON() : e);
function bi(e, t) {
  t = t || {};
  const n = {};
  function r(h, g, v) {
    return B.isPlainObject(h) && B.isPlainObject(g)
      ? B.merge.call({ caseless: v }, h, g)
      : B.isPlainObject(g)
      ? B.merge({}, g)
      : B.isArray(g)
      ? g.slice()
      : g;
  }
  function i(h, g, v) {
    if (B.isUndefined(g)) {
      if (!B.isUndefined(h)) return r(void 0, h, v);
    } else return r(h, g, v);
  }
  function a(h, g) {
    if (!B.isUndefined(g)) return r(void 0, g);
  }
  function l(h, g) {
    if (B.isUndefined(g)) {
      if (!B.isUndefined(h)) return r(void 0, h);
    } else return r(void 0, g);
  }
  function c(h, g, v) {
    if (v in t) return r(h, g);
    if (v in e) return r(void 0, h);
  }
  const d = {
    url: a,
    method: a,
    data: a,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: c,
    headers: (h, g) => i($v(h), $v(g), !0),
  };
  return (
    B.forEach(Object.keys(e).concat(Object.keys(t)), function (g) {
      const v = d[g] || i,
        m = v(e[g], t[g], g);
      (B.isUndefined(m) && v !== c) || (n[g] = m);
    }),
    n
  );
}
const kb = '1.2.2',
  np = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  np[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const Hv = {};
np.transitional = function (t, n, r) {
  function i(a, l) {
    return '[Axios v' + kb + "] Transitional option '" + a + "'" + l + (r ? '. ' + r : '');
  }
  return (a, l, c) => {
    if (t === !1)
      throw new Ee(i(l, ' has been removed' + (n ? ' in ' + n : '')), Ee.ERR_DEPRECATED);
    return (
      n &&
        !Hv[l] &&
        ((Hv[l] = !0),
        console.warn(
          i(l, ' has been deprecated since v' + n + ' and will be removed in the near future'),
        )),
      t ? t(a, l, c) : !0
    );
  };
};
function X5(e, t, n) {
  if (typeof e != 'object') throw new Ee('options must be an object', Ee.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const a = r[i],
      l = t[a];
    if (l) {
      const c = e[a],
        d = c === void 0 || l(c, a, e);
      if (d !== !0) throw new Ee('option ' + a + ' must be ' + d, Ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Ee('Unknown option ' + a, Ee.ERR_BAD_OPTION);
  }
}
const Mf = { assertOptions: X5, validators: np },
  xr = Mf.validators;
class Wl {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new Av(), response: new Av() });
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = bi(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: a } = n;
    r !== void 0 &&
      Mf.assertOptions(
        r,
        {
          silentJSONParsing: xr.transitional(xr.boolean),
          forcedJSONParsing: xr.transitional(xr.boolean),
          clarifyTimeoutError: xr.transitional(xr.boolean),
        },
        !1,
      ),
      i !== void 0 && Mf.assertOptions(i, { encode: xr.function, serialize: xr.function }, !0),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let l;
    (l = a && B.merge(a.common, a[n.method])),
      l &&
        B.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (x) => {
          delete a[x];
        }),
      (n.headers = ar.concat(l, a));
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == 'function' && S.runWhen(n) === !1) ||
        ((d = d && S.synchronous), c.unshift(S.fulfilled, S.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (S) {
      h.push(S.fulfilled, S.rejected);
    });
    let g,
      v = 0,
      m;
    if (!d) {
      const x = [Uv.bind(this), void 0];
      for (x.unshift.apply(x, c), x.push.apply(x, h), m = x.length, g = Promise.resolve(n); v < m; )
        g = g.then(x[v++], x[v++]);
      return g;
    }
    m = c.length;
    let _ = n;
    for (v = 0; v < m; ) {
      const x = c[v++],
        S = c[v++];
      try {
        _ = x(_);
      } catch (O) {
        S.call(this, O);
        break;
      }
    }
    try {
      g = Uv.call(this, _);
    } catch (x) {
      return Promise.reject(x);
    }
    for (v = 0, m = h.length; v < m; ) g = g.then(h[v++], h[v++]);
    return g;
  }
  getUri(t) {
    t = bi(this.defaults, t);
    const n = Sb(t.baseURL, t.url);
    return yb(n, t.params, t.paramsSerializer);
  }
}
B.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Wl.prototype[t] = function (n, r) {
    return this.request(bi(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
B.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (a, l, c) {
      return this.request(
        bi(c || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: a,
          data: l,
        }),
      );
    };
  }
  (Wl.prototype[t] = n()), (Wl.prototype[t + 'Form'] = n(!0));
});
const rl = Wl;
class rp {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (a) {
      n = a;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; ) r._listeners[a](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let a;
        const l = new Promise((c) => {
          r.subscribe(c), (a = c);
        }).then(i);
        return (
          (l.cancel = function () {
            r.unsubscribe(a);
          }),
          l
        );
      }),
      t(function (a, l, c) {
        r.reason || ((r.reason = new Xa(a, l, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new rp(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const Y5 = rp;
function J5(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function eI(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const Nf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Nf).forEach(([e, t]) => {
  Nf[t] = e;
});
const tI = Nf;
function Cb(e) {
  const t = new rl(e),
    n = sb(rl.prototype.request, t);
  return (
    B.extend(n, rl.prototype, t, { allOwnKeys: !0 }),
    B.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Cb(bi(e, i));
    }),
    n
  );
}
const ht = Cb(tp);
ht.Axios = rl;
ht.CanceledError = Xa;
ht.CancelToken = Y5;
ht.isCancel = xb;
ht.VERSION = kb;
ht.toFormData = $u;
ht.AxiosError = Ee;
ht.Cancel = ht.CanceledError;
ht.all = function (t) {
  return Promise.all(t);
};
ht.spread = J5;
ht.isAxiosError = eI;
ht.mergeConfig = bi;
ht.AxiosHeaders = ar;
ht.formToJSON = (e) => wb(B.isHTMLForm(e) ? new FormData(e) : e);
ht.HttpStatusCode = tI;
ht.default = ht;
const Pb = ht;
function wn(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf',
  );
}
function Qr(e) {
  return !!e && !!e[qe];
}
function dr(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return i === Object || (typeof i == 'function' && Function.toString.call(i) === cI);
    })(e) ||
      Array.isArray(e) ||
      !!e[Gv] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Gv]) ||
      op(e) ||
      ip(e))
  );
}
function Oo(e, t, n) {
  n === void 0 && (n = !1),
    Ci(e) === 0
      ? (n ? Object.keys : di)(e).forEach(function (r) {
          (n && typeof r == 'symbol') || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function Ci(e) {
  var t = e[qe];
  return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : op(e) ? 2 : ip(e) ? 3 : 0;
}
function ci(e, t) {
  return Ci(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function nI(e, t) {
  return Ci(e) === 2 ? e.get(t) : e[t];
}
function Eb(e, t, n) {
  var r = Ci(e);
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function Ob(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function op(e) {
  return lI && e instanceof Map;
}
function ip(e) {
  return uI && e instanceof Set;
}
function lo(e) {
  return e.o || e.t;
}
function ap(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Tb(e);
  delete t[qe];
  for (var n = di(t), r = 0; r < n.length; r++) {
    var i = n[r],
      a = t[i];
    a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
      (a.get || a.set) &&
        (t[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[i] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function sp(e, t) {
  return (
    t === void 0 && (t = !1),
    lp(e) ||
      Qr(e) ||
      !dr(e) ||
      (Ci(e) > 1 && (e.set = e.add = e.clear = e.delete = rI),
      Object.freeze(e),
      t &&
        Oo(
          e,
          function (n, r) {
            return sp(r, !0);
          },
          !0,
        )),
    e
  );
}
function rI() {
  wn(2);
}
function lp(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e);
}
function Wn(e) {
  var t = Ff[e];
  return t || wn(18, e), t;
}
function oI(e, t) {
  Ff[e] || (Ff[e] = t);
}
function Df() {
  return ja;
}
function id(e, t) {
  t && (Wn('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function Zl(e) {
  Af(e), e.p.forEach(iI), (e.p = null);
}
function Af(e) {
  e === ja && (ja = e.l);
}
function Wv(e) {
  return (ja = { p: [], l: ja, h: e, m: !0, _: 0 });
}
function iI(e) {
  var t = e[qe];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function ad(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.g || Wn('ES5').S(t, e, r),
    r
      ? (n[qe].P && (Zl(t), wn(4)),
        dr(e) && ((e = Vl(t, e)), t.l || ql(t, e)),
        t.u && Wn('Patches').M(n[qe].t, e, t.u, t.s))
      : (e = Vl(t, n, [])),
    Zl(t),
    t.u && t.v(t.u, t.s),
    e !== Lb ? e : void 0
  );
}
function Vl(e, t, n) {
  if (lp(t)) return t;
  var r = t[qe];
  if (!r)
    return (
      Oo(
        t,
        function (a, l) {
          return Zv(e, r, t, a, l, n);
        },
        !0,
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return ql(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = ap(r.k)) : r.o;
    Oo(r.i === 3 ? new Set(i) : i, function (a, l) {
      return Zv(e, r, i, a, l, n);
    }),
      ql(e, i, !1),
      n && e.u && Wn('Patches').N(r, n, e.u, e.s);
  }
  return r.o;
}
function Zv(e, t, n, r, i, a) {
  if (Qr(i)) {
    var l = Vl(e, i, a && t && t.i !== 3 && !ci(t.R, r) ? a.concat(r) : void 0);
    if ((Eb(n, r, l), !Qr(l))) return;
    e.m = !1;
  }
  if (dr(i) && !lp(i)) {
    if (!e.h.D && e._ < 1) return;
    Vl(e, i), (t && t.A.l) || ql(e, i);
  }
}
function ql(e, t, n) {
  n === void 0 && (n = !1), e.h.D && e.m && sp(t, n);
}
function sd(e, t) {
  var n = e[qe];
  return (n ? lo(n) : e)[t];
}
function Vv(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Or(e) {
  e.P || ((e.P = !0), e.l && Or(e.l));
}
function ld(e) {
  e.o || (e.o = ap(e.t));
}
function Bf(e, t, n) {
  var r = op(t)
    ? Wn('MapSet').F(t, n)
    : ip(t)
    ? Wn('MapSet').T(t, n)
    : e.g
    ? (function (i, a) {
        var l = Array.isArray(i),
          c = {
            i: l ? 1 : 0,
            A: a ? a.A : Df(),
            P: !1,
            I: !1,
            R: {},
            l: a,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          d = c,
          h = Ua;
        l && ((d = [c]), (h = ra));
        var g = Proxy.revocable(d, h),
          v = g.revoke,
          m = g.proxy;
        return (c.k = m), (c.j = v), m;
      })(t, n)
    : Wn('ES5').J(t, n);
  return (n ? n.A : Df()).p.push(r), r;
}
function aI(e) {
  return (
    Qr(e) || wn(22, e),
    (function t(n) {
      if (!dr(n)) return n;
      var r,
        i = n[qe],
        a = Ci(n);
      if (i) {
        if (!i.P && (i.i < 4 || !Wn('ES5').K(i))) return i.t;
        (i.I = !0), (r = qv(n, a)), (i.I = !1);
      } else r = qv(n, a);
      return (
        Oo(r, function (l, c) {
          (i && nI(i.t, l) === c) || Eb(r, l, t(c));
        }),
        a === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function qv(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return ap(e);
}
function sI() {
  function e(a, l) {
    var c = i[a];
    return (
      c
        ? (c.enumerable = l)
        : (i[a] = c =
            {
              configurable: !0,
              enumerable: l,
              get: function () {
                var d = this[qe];
                return Ua.get(d, a);
              },
              set: function (d) {
                var h = this[qe];
                Ua.set(h, a, d);
              },
            }),
      c
    );
  }
  function t(a) {
    for (var l = a.length - 1; l >= 0; l--) {
      var c = a[l][qe];
      if (!c.P)
        switch (c.i) {
          case 5:
            r(c) && Or(c);
            break;
          case 4:
            n(c) && Or(c);
        }
    }
  }
  function n(a) {
    for (var l = a.t, c = a.k, d = di(c), h = d.length - 1; h >= 0; h--) {
      var g = d[h];
      if (g !== qe) {
        var v = l[g];
        if (v === void 0 && !ci(l, g)) return !0;
        var m = c[g],
          _ = m && m[qe];
        if (_ ? _.t !== v : !Ob(m, v)) return !0;
      }
    }
    var x = !!l[qe];
    return d.length !== di(l).length + (x ? 0 : 1);
  }
  function r(a) {
    var l = a.k;
    if (l.length !== a.t.length) return !0;
    var c = Object.getOwnPropertyDescriptor(l, l.length - 1);
    if (c && !c.get) return !0;
    for (var d = 0; d < l.length; d++) if (!l.hasOwnProperty(d)) return !0;
    return !1;
  }
  var i = {};
  oI('ES5', {
    J: function (a, l) {
      var c = Array.isArray(a),
        d = (function (g, v) {
          if (g) {
            for (var m = Array(v.length), _ = 0; _ < v.length; _++)
              Object.defineProperty(m, '' + _, e(_, !0));
            return m;
          }
          var x = Tb(v);
          delete x[qe];
          for (var S = di(x), O = 0; O < S.length; O++) {
            var w = S[O];
            x[w] = e(w, g || !!x[w].enumerable);
          }
          return Object.create(Object.getPrototypeOf(v), x);
        })(c, a),
        h = {
          i: c ? 5 : 4,
          A: l ? l.A : Df(),
          P: !1,
          I: !1,
          R: {},
          l,
          t: a,
          k: d,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(d, qe, { value: h, writable: !0 }), d;
    },
    S: function (a, l, c) {
      c
        ? Qr(l) && l[qe].A === a && t(a.p)
        : (a.u &&
            (function d(h) {
              if (h && typeof h == 'object') {
                var g = h[qe];
                if (g) {
                  var v = g.t,
                    m = g.k,
                    _ = g.R,
                    x = g.i;
                  if (x === 4)
                    Oo(m, function (k) {
                      k !== qe &&
                        (v[k] !== void 0 || ci(v, k) ? _[k] || d(m[k]) : ((_[k] = !0), Or(g)));
                    }),
                      Oo(v, function (k) {
                        m[k] !== void 0 || ci(m, k) || ((_[k] = !1), Or(g));
                      });
                  else if (x === 5) {
                    if ((r(g) && (Or(g), (_.length = !0)), m.length < v.length))
                      for (var S = m.length; S < v.length; S++) _[S] = !1;
                    else for (var O = v.length; O < m.length; O++) _[O] = !0;
                    for (var w = Math.min(m.length, v.length), b = 0; b < w; b++)
                      m.hasOwnProperty(b) || (_[b] = !0), _[b] === void 0 && d(m[b]);
                  }
                }
              }
            })(a.p[0]),
          t(a.p));
    },
    K: function (a) {
      return a.i === 4 ? n(a) : r(a);
    },
  });
}
var Qv,
  ja,
  up = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  lI = typeof Map < 'u',
  uI = typeof Set < 'u',
  Kv = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  Lb = up ? Symbol.for('immer-nothing') : (((Qv = {})['immer-nothing'] = !0), Qv),
  Gv = up ? Symbol.for('immer-draftable') : '__$immer_draftable',
  qe = up ? Symbol.for('immer-state') : '__$immer_state',
  cI = '' + Object.prototype.constructor,
  di =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames,
  Tb =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        di(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  Ff = {},
  Ua = {
    get: function (e, t) {
      if (t === qe) return e;
      var n = lo(e);
      if (!ci(n, t))
        return (function (i, a, l) {
          var c,
            d = Vv(a, l);
          return d
            ? 'value' in d
              ? d.value
              : (c = d.get) === null || c === void 0
              ? void 0
              : c.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !dr(r) ? r : r === sd(e.t, t) ? (ld(e), (e.o[t] = Bf(e.A.h, r, e))) : r;
    },
    has: function (e, t) {
      return t in lo(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(lo(e));
    },
    set: function (e, t, n) {
      var r = Vv(lo(e), t);
      if (r?.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = sd(lo(e), t),
          a = i?.[qe];
        if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (Ob(n, i) && (n !== void 0 || ci(e.t, t))) return !0;
        ld(e), Or(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        sd(e.t, t) !== void 0 || t in e.t ? ((e.R[t] = !1), ld(e), Or(e)) : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = lo(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      wn(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      wn(12);
    },
  },
  ra = {};
Oo(Ua, function (e, t) {
  ra[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (ra.deleteProperty = function (e, t) {
    return ra.set.call(this, e, t, void 0);
  }),
  (ra.set = function (e, t, n) {
    return Ua.set.call(this, e[0], t, n, e[0]);
  });
var dI = (function () {
    function e(n) {
      var r = this;
      (this.g = Kv),
        (this.D = !0),
        (this.produce = function (i, a, l) {
          if (typeof i == 'function' && typeof a != 'function') {
            var c = a;
            a = i;
            var d = r;
            return function (S) {
              var O = this;
              S === void 0 && (S = c);
              for (var w = arguments.length, b = Array(w > 1 ? w - 1 : 0), k = 1; k < w; k++)
                b[k - 1] = arguments[k];
              return d.produce(S, function (E) {
                var D;
                return (D = a).call.apply(D, [O, E].concat(b));
              });
            };
          }
          var h;
          if (
            (typeof a != 'function' && wn(6),
            l !== void 0 && typeof l != 'function' && wn(7),
            dr(i))
          ) {
            var g = Wv(r),
              v = Bf(r, i, void 0),
              m = !0;
            try {
              (h = a(v)), (m = !1);
            } finally {
              m ? Zl(g) : Af(g);
            }
            return typeof Promise < 'u' && h instanceof Promise
              ? h.then(
                  function (S) {
                    return id(g, l), ad(S, g);
                  },
                  function (S) {
                    throw (Zl(g), S);
                  },
                )
              : (id(g, l), ad(h, g));
          }
          if (!i || typeof i != 'object') {
            if (((h = a(i)) === void 0 && (h = i), h === Lb && (h = void 0), r.D && sp(h, !0), l)) {
              var _ = [],
                x = [];
              Wn('Patches').M(i, h, _, x), l(_, x);
            }
            return h;
          }
          wn(21, i);
        }),
        (this.produceWithPatches = function (i, a) {
          if (typeof i == 'function')
            return function (h) {
              for (var g = arguments.length, v = Array(g > 1 ? g - 1 : 0), m = 1; m < g; m++)
                v[m - 1] = arguments[m];
              return r.produceWithPatches(h, function (_) {
                return i.apply(void 0, [_].concat(v));
              });
            };
          var l,
            c,
            d = r.produce(i, a, function (h, g) {
              (l = h), (c = g);
            });
          return typeof Promise < 'u' && d instanceof Promise
            ? d.then(function (h) {
                return [h, l, c];
              })
            : [d, l, c];
        }),
        typeof n?.useProxies == 'boolean' && this.setUseProxies(n.useProxies),
        typeof n?.autoFreeze == 'boolean' && this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        dr(n) || wn(8), Qr(n) && (n = aI(n));
        var r = Wv(this),
          i = Bf(this, n, void 0);
        return (i[qe].C = !0), Af(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[qe],
          a = i.A;
        return id(a, r), ad(void 0, a);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Kv && wn(20), (this.g = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var a = r[i];
          if (a.path.length === 0 && a.op === 'replace') {
            n = a.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var l = Wn('Patches').$;
        return Qr(n)
          ? l(n, r)
          : this.produce(n, function (c) {
              return l(c, r);
            });
      }),
      e
    );
  })(),
  Qt = new dI(),
  zb = Qt.produce;
Qt.produceWithPatches.bind(Qt);
Qt.setAutoFreeze.bind(Qt);
Qt.setUseProxies.bind(Qt);
Qt.applyPatches.bind(Qt);
Qt.createDraft.bind(Qt);
Qt.finishDraft.bind(Qt);
function Xv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Yv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xv(Object(n), !0).forEach(function (r) {
          Pn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Xv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Et(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var Jv = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  ud = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Ql = {
    INIT: '@@redux/INIT' + ud(),
    REPLACE: '@@redux/REPLACE' + ud(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + ud();
    },
  };
function fI(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Rb(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Et(0));
  if ((typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)), typeof n < 'u')) {
    if (typeof n != 'function') throw new Error(Et(1));
    return n(Rb)(e, t);
  }
  if (typeof e != 'function') throw new Error(Et(2));
  var i = e,
    a = t,
    l = [],
    c = l,
    d = !1;
  function h() {
    c === l && (c = l.slice());
  }
  function g() {
    if (d) throw new Error(Et(3));
    return a;
  }
  function v(S) {
    if (typeof S != 'function') throw new Error(Et(4));
    if (d) throw new Error(Et(5));
    var O = !0;
    return (
      h(),
      c.push(S),
      function () {
        if (O) {
          if (d) throw new Error(Et(6));
          (O = !1), h();
          var b = c.indexOf(S);
          c.splice(b, 1), (l = null);
        }
      }
    );
  }
  function m(S) {
    if (!fI(S)) throw new Error(Et(7));
    if (typeof S.type > 'u') throw new Error(Et(8));
    if (d) throw new Error(Et(9));
    try {
      (d = !0), (a = i(a, S));
    } finally {
      d = !1;
    }
    for (var O = (l = c), w = 0; w < O.length; w++) {
      var b = O[w];
      b();
    }
    return S;
  }
  function _(S) {
    if (typeof S != 'function') throw new Error(Et(10));
    (i = S), m({ type: Ql.REPLACE });
  }
  function x() {
    var S,
      O = v;
    return (
      (S = {
        subscribe: function (b) {
          if (typeof b != 'object' || b === null) throw new Error(Et(11));
          function k() {
            b.next && b.next(g());
          }
          k();
          var E = O(k);
          return { unsubscribe: E };
        },
      }),
      (S[Jv] = function () {
        return this;
      }),
      S
    );
  }
  return (
    m({ type: Ql.INIT }),
    (r = { dispatch: m, subscribe: v, getState: g, replaceReducer: _ }),
    (r[Jv] = x),
    r
  );
}
function hI(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Ql.INIT });
    if (typeof r > 'u') throw new Error(Et(12));
    if (typeof n(void 0, { type: Ql.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(Et(13));
  });
}
function pI(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == 'function' && (n[i] = e[i]);
  }
  var a = Object.keys(n),
    l;
  try {
    hI(n);
  } catch (c) {
    l = c;
  }
  return function (d, h) {
    if ((d === void 0 && (d = {}), l)) throw l;
    for (var g = !1, v = {}, m = 0; m < a.length; m++) {
      var _ = a[m],
        x = n[_],
        S = d[_],
        O = x(S, h);
      if (typeof O > 'u') throw (h && h.type, new Error(Et(14)));
      (v[_] = O), (g = g || O !== S);
    }
    return (g = g || a.length !== Object.keys(d).length), g ? v : d;
  };
}
function Kl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function mI() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        a = function () {
          throw new Error(Et(15));
        },
        l = {
          getState: i.getState,
          dispatch: function () {
            return a.apply(void 0, arguments);
          },
        },
        c = t.map(function (d) {
          return d(l);
        });
      return (a = Kl.apply(void 0, c)(i.dispatch)), Yv(Yv({}, i), {}, { dispatch: a });
    };
  };
}
function Ib(e) {
  var t = function (r) {
    var i = r.dispatch,
      a = r.getState;
    return function (l) {
      return function (c) {
        return typeof c == 'function' ? c(i, a, e) : l(c);
      };
    };
  };
  return t;
}
var Mb = Ib();
Mb.withExtraArgument = Ib;
const e_ = Mb;
var gI =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
      };
    })(),
  vI =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (a[0] & 1) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        a,
        l;
      return (
        (l = { next: c(0), throw: c(1), return: c(2) }),
        typeof Symbol == 'function' &&
          (l[Symbol.iterator] = function () {
            return this;
          }),
        l
      );
      function c(h) {
        return function (g) {
          return d([h, g]);
        };
      }
      function d(h) {
        if (r) throw new TypeError('Generator is already executing.');
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (a =
                  h[0] & 2
                    ? i.return
                    : h[0]
                    ? i.throw || ((a = i.return) && a.call(i), 0)
                    : i.next) &&
                !(a = a.call(i, h[1])).done)
            )
              return a;
            switch (((i = 0), a && (h = [h[0] & 2, a.value]), h[0])) {
              case 0:
              case 1:
                a = h;
                break;
              case 4:
                return n.label++, { value: h[1], done: !1 };
              case 5:
                n.label++, (i = h[1]), (h = [0]);
                continue;
              case 7:
                (h = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((a = n.trys),
                  !(a = a.length > 0 && a[a.length - 1]) && (h[0] === 6 || h[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (h[0] === 3 && (!a || (h[1] > a[0] && h[1] < a[3]))) {
                  n.label = h[1];
                  break;
                }
                if (h[0] === 6 && n.label < a[1]) {
                  (n.label = a[1]), (a = h);
                  break;
                }
                if (a && n.label < a[2]) {
                  (n.label = a[2]), n.ops.push(h);
                  break;
                }
                a[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            h = t.call(e, n);
          } catch (g) {
            (h = [6, g]), (i = 0);
          } finally {
            r = a = 0;
          }
        if (h[0] & 5) throw h[1];
        return { value: h[0] ? h[1] : void 0, done: !0 };
      }
    },
  Gl =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  _I = Object.defineProperty,
  yI = Object.defineProperties,
  bI = Object.getOwnPropertyDescriptors,
  t_ = Object.getOwnPropertySymbols,
  wI = Object.prototype.hasOwnProperty,
  xI = Object.prototype.propertyIsEnumerable,
  n_ = function (e, t, n) {
    return t in e
      ? _I(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Ur = function (e, t) {
    for (var n in t || (t = {})) wI.call(t, n) && n_(e, n, t[n]);
    if (t_)
      for (var r = 0, i = t_(t); r < i.length; r++) {
        var n = i[r];
        xI.call(t, n) && n_(e, n, t[n]);
      }
    return e;
  },
  cd = function (e, t) {
    return yI(e, bI(t));
  },
  SI = function (e, t, n) {
    return new Promise(function (r, i) {
      var a = function (d) {
          try {
            c(n.next(d));
          } catch (h) {
            i(h);
          }
        },
        l = function (d) {
          try {
            c(n.throw(d));
          } catch (h) {
            i(h);
          }
        },
        c = function (d) {
          return d.done ? r(d.value) : Promise.resolve(d.value).then(a, l);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  kI =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? Kl : Kl.apply(null, arguments);
        };
function CI(e) {
  if (typeof e != 'object' || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
  return t === n;
}
var PI = (function (e) {
  gI(t, e);
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var i = e.apply(this, n) || this;
    return Object.setPrototypeOf(i, t.prototype), i;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return e.prototype.concat.apply(this, n);
    }),
    (t.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, Gl([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, Gl([void 0], n.concat(this))))();
    }),
    t
  );
})(Array);
function jf(e) {
  return dr(e) ? zb(e, function () {}) : e;
}
function EI(e) {
  return typeof e == 'boolean';
}
function OI() {
  return function (t) {
    return LI(t);
  };
}
function LI(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new PI();
  return n && (EI(n) ? r.push(e_) : r.push(e_.withExtraArgument(n.extraArgument))), r;
}
var TI = !0;
function zI(e) {
  var t = OI(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    a = n.middleware,
    l = a === void 0 ? t() : a,
    c = n.devTools,
    d = c === void 0 ? !0 : c,
    h = n.preloadedState,
    g = h === void 0 ? void 0 : h,
    v = n.enhancers,
    m = v === void 0 ? void 0 : v,
    _;
  if (typeof i == 'function') _ = i;
  else if (CI(i)) _ = pI(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
    );
  var x = l;
  typeof x == 'function' && (x = x(t));
  var S = mI.apply(void 0, x),
    O = Kl;
  d && (O = kI(Ur({ trace: !TI }, typeof d == 'object' && d)));
  var w = [S];
  Array.isArray(m) ? (w = Gl([S], m)) : typeof m == 'function' && (w = m(w));
  var b = O.apply(void 0, w);
  return Rb(_, g, b);
}
function $r(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var a = t.apply(void 0, r);
      if (!a) throw new Error('prepareAction did not return an object');
      return Ur(
        Ur({ type: e, payload: a.payload }, 'meta' in a && { meta: a.meta }),
        'error' in a && { error: a.error },
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return '' + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function Nb(e) {
  var t = {},
    n = [],
    r,
    i = {
      addCase: function (a, l) {
        var c = typeof a == 'string' ? a : a.type;
        if (c in t)
          throw new Error('addCase cannot be called with two reducers for the same action type');
        return (t[c] = l), i;
      },
      addMatcher: function (a, l) {
        return n.push({ matcher: a, reducer: l }), i;
      },
      addDefaultCase: function (a) {
        return (r = a), i;
      },
    };
  return e(i), [t, n, r];
}
function RI(e) {
  return typeof e == 'function';
}
function II(e, t, n, r) {
  n === void 0 && (n = []);
  var i = typeof t == 'function' ? Nb(t) : [t, n, r],
    a = i[0],
    l = i[1],
    c = i[2],
    d;
  if (RI(e))
    d = function () {
      return jf(e());
    };
  else {
    var h = jf(e);
    d = function () {
      return h;
    };
  }
  function g(v, m) {
    v === void 0 && (v = d());
    var _ = Gl(
      [a[m.type]],
      l
        .filter(function (x) {
          var S = x.matcher;
          return S(m);
        })
        .map(function (x) {
          var S = x.reducer;
          return S;
        }),
    );
    return (
      _.filter(function (x) {
        return !!x;
      }).length === 0 && (_ = [c]),
      _.reduce(function (x, S) {
        if (S)
          if (Qr(x)) {
            var O = x,
              w = S(O, m);
            return w === void 0 ? x : w;
          } else {
            if (dr(x))
              return zb(x, function (b) {
                return S(b, m);
              });
            var w = S(x, m);
            if (w === void 0) {
              if (x === null) return x;
              throw Error('A case reducer on a non-draftable value must not return undefined');
            }
            return w;
          }
        return x;
      }, v)
    );
  }
  return (g.getInitialState = d), g;
}
function MI(e, t) {
  return e + '/' + t;
}
function NI(e) {
  var t = e.name;
  if (!t) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n = typeof e.initialState == 'function' ? e.initialState : jf(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    a = {},
    l = {},
    c = {};
  i.forEach(function (g) {
    var v = r[g],
      m = MI(t, g),
      _,
      x;
    'reducer' in v ? ((_ = v.reducer), (x = v.prepare)) : (_ = v),
      (a[g] = _),
      (l[m] = _),
      (c[g] = x ? $r(m, x) : $r(m));
  });
  function d() {
    var g = typeof e.extraReducers == 'function' ? Nb(e.extraReducers) : [e.extraReducers],
      v = g[0],
      m = v === void 0 ? {} : v,
      _ = g[1],
      x = _ === void 0 ? [] : _,
      S = g[2],
      O = S === void 0 ? void 0 : S,
      w = Ur(Ur({}, m), l);
    return II(n, function (b) {
      for (var k in w) b.addCase(k, w[k]);
      for (var E = 0, D = x; E < D.length; E++) {
        var F = D[E];
        b.addMatcher(F.matcher, F.reducer);
      }
      O && b.addDefaultCase(O);
    });
  }
  var h;
  return {
    name: t,
    reducer: function (g, v) {
      return h || (h = d()), h(g, v);
    },
    actions: c,
    caseReducers: a,
    getInitialState: function () {
      return h || (h = d()), h.getInitialState();
    },
  };
}
var DI = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  AI = function (e) {
    e === void 0 && (e = 21);
    for (var t = '', n = e; n--; ) t += DI[(Math.random() * 64) | 0];
    return t;
  },
  BI = ['name', 'message', 'stack', 'code'],
  dd = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  r_ = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  FI = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = BI; n < r.length; n++) {
        var i = r[n];
        typeof e[i] == 'string' && (t[i] = e[i]);
      }
      return t;
    }
    return { message: String(e) };
  },
  Db = (function () {
    function e(t, n, r) {
      var i = $r(t + '/fulfilled', function (h, g, v, m) {
          return {
            payload: h,
            meta: cd(Ur({}, m || {}), { arg: v, requestId: g, requestStatus: 'fulfilled' }),
          };
        }),
        a = $r(t + '/pending', function (h, g, v) {
          return {
            payload: void 0,
            meta: cd(Ur({}, v || {}), { arg: g, requestId: h, requestStatus: 'pending' }),
          };
        }),
        l = $r(t + '/rejected', function (h, g, v, m, _) {
          return {
            payload: m,
            error: ((r && r.serializeError) || FI)(h || 'Rejected'),
            meta: cd(Ur({}, _ || {}), {
              arg: v,
              requestId: g,
              rejectedWithValue: !!m,
              requestStatus: 'rejected',
              aborted: h?.name === 'AbortError',
              condition: h?.name === 'ConditionError',
            }),
          };
        }),
        c =
          typeof AbortController < 'u'
            ? AbortController
            : (function () {
                function h() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (h.prototype.abort = function () {}), h;
              })();
      function d(h) {
        return function (g, v, m) {
          var _ = r?.idGenerator ? r.idGenerator(h) : AI(),
            x = new c(),
            S;
          function O(b) {
            (S = b), x.abort();
          }
          var w = (function () {
            return SI(this, null, function () {
              var b, k, E, D, F, W, Q;
              return vI(this, function (te) {
                switch (te.label) {
                  case 0:
                    return (
                      te.trys.push([0, 4, , 5]),
                      (D =
                        (b = r?.condition) == null
                          ? void 0
                          : b.call(r, h, { getState: v, extra: m })),
                      UI(D) ? [4, D] : [3, 2]
                    );
                  case 1:
                    (D = te.sent()), (te.label = 2);
                  case 2:
                    if (D === !1 || x.signal.aborted)
                      throw {
                        name: 'ConditionError',
                        message: 'Aborted due to condition callback returning false.',
                      };
                    return (
                      (F = new Promise(function (q, ue) {
                        return x.signal.addEventListener('abort', function () {
                          return ue({ name: 'AbortError', message: S || 'Aborted' });
                        });
                      })),
                      g(
                        a(
                          _,
                          h,
                          (k = r?.getPendingMeta) == null
                            ? void 0
                            : k.call(r, { requestId: _, arg: h }, { getState: v, extra: m }),
                        ),
                      ),
                      [
                        4,
                        Promise.race([
                          F,
                          Promise.resolve(
                            n(h, {
                              dispatch: g,
                              getState: v,
                              extra: m,
                              requestId: _,
                              signal: x.signal,
                              abort: O,
                              rejectWithValue: function (q, ue) {
                                return new dd(q, ue);
                              },
                              fulfillWithValue: function (q, ue) {
                                return new r_(q, ue);
                              },
                            }),
                          ).then(function (q) {
                            if (q instanceof dd) throw q;
                            return q instanceof r_ ? i(q.payload, _, h, q.meta) : i(q, _, h);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (E = te.sent()), [3, 5];
                  case 4:
                    return (
                      (W = te.sent()),
                      (E = W instanceof dd ? l(null, _, h, W.payload, W.meta) : l(W, _, h)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (Q = r && !r.dispatchConditionRejection && l.match(E) && E.meta.condition),
                      Q || g(E),
                      [2, E]
                    );
                }
              });
            });
          })();
          return Object.assign(w, {
            abort: O,
            requestId: _,
            arg: h,
            unwrap: function () {
              return w.then(jI);
            },
          });
        };
      }
      return Object.assign(d, { pending: a, rejected: l, fulfilled: i, typePrefix: t });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function jI(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function UI(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function';
}
var cp = 'listenerMiddleware';
$r(cp + '/add');
$r(cp + '/removeAll');
$r(cp + '/remove');
var o_;
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis);
sI();
const $I = {
    loading: !0,
    brandloading: !0,
    evList: { evs: [] },
    search: { name: '', sortOrder: 3, evType: [], brands: [] },
    searchOptions: { brands: ['Audi'], seatConfig: [] },
    error: '',
  },
  Uf = Db(
    'evsearch/fetchEvs',
    async (e) =>
      await Pb.post('https://localhost:7033/api/Ev', e, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then((t) => t.data)
        .catch((t) => {
          console.error('error', t);
        }),
  ),
  $f = Db(
    'evsearch/fetchSearchOptions',
    async () =>
      await Pb.get('https://localhost:7033/api/searchoptions')
        .then((e) => e.data)
        .catch((e) => {
          console.error('error', e);
        }),
  ),
  Ab = NI({
    name: 'evsearch',
    initialState: $I,
    reducers: {
      updateSortOrder: (e, t) => {
        const n = t.payload.trim().toLowerCase();
        e.search.sortOrder = parseInt(n);
      },
      updateEvType: (e, t) => {
        const n = t.payload;
        e.search.evType = n;
      },
      updateBrands: (e, t) => {
        const n = t.payload;
        e.search.brands = n;
      },
    },
    extraReducers: (e) => {
      e.addCase(Uf.fulfilled, (t, n) => {
        const r = n.payload;
        (t.evList = r), (t.loading = !1);
      })
        .addCase(Uf.rejected, (t, n) => {
          t.error = n.error.message;
        })
        .addCase($f.fulfilled, (t, n) => {
          const r = n.payload;
          (t.searchOptions = r), (t.brandloading = !1);
        })
        .addCase($f.rejected, (t, n) => {
          t.error = n.error.message;
        });
    },
  }),
  HI = Ab.reducer,
  { updateSortOrder: WI, updateEvType: ZI, updateBrands: VI } = Ab.actions,
  Gi = XS,
  qI = () => gk(),
  QI = '_line_x3q2g_1',
  KI = { line: QI },
  GI = () => Ce('hr', { className: KI.line }),
  XI = '_evsearchAccordionContent_xtp78_1',
  YI = '_scopeText_xtp78_9',
  JI = '_scopeItems_xtp78_17',
  eM = '_line_xtp78_25',
  tM = '_contentTexts_xtp78_35',
  nM = '_bottomContentTexts_xtp78_45',
  io = {
    evsearchAccordionContent: XI,
    scopeText: YI,
    scopeItems: JI,
    line: eM,
    contentTexts: tM,
    bottomContentTexts: nM,
  },
  rM = ({
    title: e = 'No info',
    subtitle: t = 'No info',
    topContentText: n,
    textList: r = [''],
  }) => {
    const [i, a] = N.useState(!1);
    return Ce('div', {
      children: nn(e3, {
        open: i,
        onClick: () => a(!i),
        children: [
          Ce(u3, { subtitle: t, children: e }),
          Ce(c3, {
            children: nn('div', {
              className: io.newApiAccordionContent,
              children: [
                r.length > 0 &&
                  nn('div', {
                    children: [
                      nn('p', {
                        className: io.scopeText,
                        children: [Yc('api_delegation.scopes'), ':'],
                      }),
                      r.map((l, c) => Ce('div', { className: io.scopeItems, children: l }, c)),
                    ],
                  }),
                n &&
                  nn('div', {
                    children: [
                      Ce('div', { className: io.line, children: Ce(GI, {}) }),
                      Ce('p', {
                        className: io.scopeText,
                        children: Yc('api_delegation.description'),
                      }),
                      Ce('div', { className: io.contentTexts, children: n }),
                    ],
                  }),
                n === void 0 &&
                  Ce('div', {
                    className: io.contentTexts,
                    children: Yc('api_delegation.data_retrieval_failed'),
                  }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  oM = '_pageContent_r6jh1_1',
  iM = '_page_r6jh1_1',
  Xi = { pageContent: oM, page: iM };
var Bb = ((e) => (
  (e.Sedan = 'Sedan'),
  (e.Coupe = 'Coupe'),
  (e.Hatchback = 'Hatchback'),
  (e.Sport = 'Sport'),
  (e.StationWagon = 'StationWagon'),
  (e.SUV = 'SUV'),
  (e.CoupeSUV = 'CoupeSUV'),
  (e.Convertible = 'Convertible'),
  (e.Minivan = 'Minivan'),
  (e.PickupTruck = 'PickupTruck'),
  (e.Crossover = 'Crossover'),
  (e.Roadster = 'Roadster'),
  (e.MPV = 'MPV'),
  e
))(Bb || {});
const aM = () => {
    const { t: e } = Z0('common'),
      t = Gi((S) => S.evsearchResult.loading),
      n = Gi((S) => S.evsearchResult.evList.evs),
      r = Gi((S) => S.evsearchResult.searchOptions.brands),
      i = qI(),
      a = Gi((S) => S.evsearchResult.search),
      l = async (S) => await i(Uf(S)),
      c = async () => await i($f()),
      d = Gi((S) => S.evsearchResult.error);
    N.useEffect(() => {
      t && (l(a), c());
    }, []);
    const h = (S) => {
        i(WI(S));
        const O = { evType: a.evType, sortOrder: parseInt(S), name: a.name, brands: a.brands };
        l(O);
      },
      g = (S) => {
        i(VI(S));
        const O = { evType: a.evType, sortOrder: a.sortOrder, name: a.name, brands: S };
        l(O);
      },
      v = r.map((S) => ({ label: S, value: S })),
      m = (S) => {
        i(ZI(S));
        const O = { evType: S, sortOrder: a.sortOrder, name: a.name, brands: a.brands };
        l(O);
      },
      _ = Object.keys(Bb),
      x = () =>
        d
          ? Ce(YR, {
              title: e('api_delegation.data_retrieval_failed'),
              variant: zr.Error,
              forceMobileLayout: !0,
              children: nn('div', { children: [e('api_delegation.error_message'), ': ', d] }),
            })
          : t
          ? e('api_delegation.loading') + '...'
          : n.map((S, O) =>
              Ce(
                rM,
                {
                  title: S.name,
                  subtitle: S.sortValue + ' ' + S.sortParameter,
                  topContentText: S.infoUri,
                },
                O,
              ),
            );
    return Ce('div', {
      className: Xi.page,
      children: nn(f3, {
        children: [
          Ce(h3, { icon: Ce($3, {}), children: e('evsearch.title') }),
          nn(m3, {
            children: [
              nn('div', {
                className: Xi.pageContent,
                children: [
                  Ce(Tv, {
                    label: 'Sortering',
                    multiple: !1,
                    onChange: h,
                    options: [
                      { label: 'Merke,model', value: '1' },
                      { label: 'Rekkevidde WLTP minimum spesifikasjon', value: '2' },
                      { label: 'Netto batterystørrelse minst-størst', value: '3' },
                      { label: 'Netto batteristørrels størst-minst', value: '4' },
                      { label: 'WLTP forbruk minium spesifikasjon', value: '5' },
                    ],
                  }),
                  Ce(Tv, { label: 'Brands', multiple: !0, onChange: g, options: v }),
                  Ce('br', {}),
                  Ce(A3, {
                    'data-testid': 'evsearch-evtype',
                    variant: Hl.Horizontal,
                    onChange: (S) => m(S),
                    items: _.map((S) => ({
                      label: S,
                      name: S,
                      checked: a.evType === void 0 || a.evType.includes(S),
                    })),
                  }),
                  Ce('br', {}),
                  Ce('br', {}),
                ],
              }),
              Ce('div', {
                className: Xi.pageContentAccordionsContainer,
                children: nn('div', {
                  className: Xi.apiAccordions,
                  children: [
                    nn('h4', { children: [e('evsearch.searchresult'), ':'] }),
                    Ce('div', { className: Xi.accordionScrollContainer, children: x() }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  sM = RC(
    [
      { path: '/', errorElement: Ce(pv, {}) },
      { path: 'evsearch', element: Ce(aM, {}), errorElement: Ce(pv, {}) },
    ],
    { basename: '/' },
  ),
  lM = { backendApiUrl: new URL(window.location.href).origin + '/api/', defaultLocale: 'no_nb' },
  ol = { backendApiUrl: {}.VITE_BACKEND_API_URL, defaultLocale: {}.VITE_DEFAULT_LOCALE };
for (const e in ol) ol[e] === void 0 && delete ol[e];
const uM = { ...lM, ...ol };
function cM(e) {
  return uM[e];
}
const dM = ({ children: e }) => {
  const { i18n: t } = Z0('common'),
    r = `/public/localizations/${t.language}.json`,
    i = new URL(r, import.meta.url).href;
  return (
    LP(
      'Localizations',
      async () => {
        const l = await (await fetch(i)).json();
        zt.addResourceBundle(t.language, 'common', l);
      },
      { staleTime: 1 / 0, suspense: !0 },
    ),
    Ce(yw, { children: e })
  );
};
var Xl = {},
  fM = {
    get exports() {
      return Xl;
    },
    set exports(e) {
      Xl = e;
    },
  };
(function (e, t) {
  (function (n, r) {
    r(t);
  })(Ho, function (n) {
    function r(P, R) {
      (P.super_ = R),
        (P.prototype = Object.create(R.prototype, {
          constructor: { value: P, enumerable: !1, writable: !0, configurable: !0 },
        }));
    }
    function i(P, R) {
      Object.defineProperty(this, 'kind', { value: P, enumerable: !0 }),
        R && R.length && Object.defineProperty(this, 'path', { value: R, enumerable: !0 });
    }
    function a(P, R, z) {
      a.super_.call(this, 'E', P),
        Object.defineProperty(this, 'lhs', { value: R, enumerable: !0 }),
        Object.defineProperty(this, 'rhs', { value: z, enumerable: !0 });
    }
    function l(P, R) {
      l.super_.call(this, 'N', P), Object.defineProperty(this, 'rhs', { value: R, enumerable: !0 });
    }
    function c(P, R) {
      c.super_.call(this, 'D', P), Object.defineProperty(this, 'lhs', { value: R, enumerable: !0 });
    }
    function d(P, R, z) {
      d.super_.call(this, 'A', P),
        Object.defineProperty(this, 'index', { value: R, enumerable: !0 }),
        Object.defineProperty(this, 'item', { value: z, enumerable: !0 });
    }
    function h(P, R, z) {
      var j = P.slice((z || R) + 1 || P.length);
      return (P.length = R < 0 ? P.length + R : R), P.push.apply(P, j), P;
    }
    function g(P) {
      var R = typeof P > 'u' ? 'undefined' : Ne(P);
      return R !== 'object'
        ? R
        : P === Math
        ? 'math'
        : P === null
        ? 'null'
        : Array.isArray(P)
        ? 'array'
        : Object.prototype.toString.call(P) === '[object Date]'
        ? 'date'
        : typeof P.toString == 'function' && /^\/.*\//.test(P.toString())
        ? 'regexp'
        : 'object';
    }
    function v(P, R, z, j, K, Y, oe) {
      (K = K || []), (oe = oe || []);
      var se = K.slice(0);
      if (typeof Y < 'u') {
        if (j) {
          if (typeof j == 'function' && j(se, Y)) return;
          if ((typeof j > 'u' ? 'undefined' : Ne(j)) === 'object') {
            if (j.prefilter && j.prefilter(se, Y)) return;
            if (j.normalize) {
              var et = j.normalize(se, Y, P, R);
              et && ((P = et[0]), (R = et[1]));
            }
          }
        }
        se.push(Y);
      }
      g(P) === 'regexp' && g(R) === 'regexp' && ((P = P.toString()), (R = R.toString()));
      var Ve = typeof P > 'u' ? 'undefined' : Ne(P),
        Ae = typeof R > 'u' ? 'undefined' : Ne(R),
        Be =
          Ve !== 'undefined' ||
          (oe && oe[oe.length - 1].lhs && oe[oe.length - 1].lhs.hasOwnProperty(Y)),
        ot =
          Ae !== 'undefined' ||
          (oe && oe[oe.length - 1].rhs && oe[oe.length - 1].rhs.hasOwnProperty(Y));
      if (!Be && ot) z(new l(se, R));
      else if (!ot && Be) z(new c(se, P));
      else if (g(P) !== g(R)) z(new a(se, P, R));
      else if (g(P) === 'date' && P - R !== 0) z(new a(se, P, R));
      else if (Ve === 'object' && P !== null && R !== null)
        if (
          oe.filter(function (De) {
            return De.lhs === P;
          }).length
        )
          P !== R && z(new a(se, P, R));
        else {
          if ((oe.push({ lhs: P, rhs: R }), Array.isArray(P))) {
            var ke;
            for (P.length, ke = 0; ke < P.length; ke++)
              ke >= R.length
                ? z(new d(se, ke, new c(void 0, P[ke])))
                : v(P[ke], R[ke], z, j, se, ke, oe);
            for (; ke < R.length; ) z(new d(se, ke, new l(void 0, R[ke++])));
          } else {
            var Yt = Object.keys(P),
              Bt = Object.keys(R);
            Yt.forEach(function (De, A) {
              var U = Bt.indexOf(De);
              U >= 0
                ? (v(P[De], R[De], z, j, se, De, oe), (Bt = h(Bt, U)))
                : v(P[De], void 0, z, j, se, De, oe);
            }),
              Bt.forEach(function (De) {
                v(void 0, R[De], z, j, se, De, oe);
              });
          }
          oe.length = oe.length - 1;
        }
      else P !== R && ((Ve === 'number' && isNaN(P) && isNaN(R)) || z(new a(se, P, R)));
    }
    function m(P, R, z, j) {
      return (
        (j = j || []),
        v(
          P,
          R,
          function (K) {
            K && j.push(K);
          },
          z,
        ),
        j.length ? j : void 0
      );
    }
    function _(P, R, z) {
      if (z.path && z.path.length) {
        var j,
          K = P[R],
          Y = z.path.length - 1;
        for (j = 0; j < Y; j++) K = K[z.path[j]];
        switch (z.kind) {
          case 'A':
            _(K[z.path[j]], z.index, z.item);
            break;
          case 'D':
            delete K[z.path[j]];
            break;
          case 'E':
          case 'N':
            K[z.path[j]] = z.rhs;
        }
      } else
        switch (z.kind) {
          case 'A':
            _(P[R], z.index, z.item);
            break;
          case 'D':
            P = h(P, R);
            break;
          case 'E':
          case 'N':
            P[R] = z.rhs;
        }
      return P;
    }
    function x(P, R, z) {
      if (P && R && z && z.kind) {
        for (var j = P, K = -1, Y = z.path ? z.path.length - 1 : 0; ++K < Y; )
          typeof j[z.path[K]] > 'u' && (j[z.path[K]] = typeof z.path[K] == 'number' ? [] : {}),
            (j = j[z.path[K]]);
        switch (z.kind) {
          case 'A':
            _(z.path ? j[z.path[K]] : j, z.index, z.item);
            break;
          case 'D':
            delete j[z.path[K]];
            break;
          case 'E':
          case 'N':
            j[z.path[K]] = z.rhs;
        }
      }
    }
    function S(P, R, z) {
      if (z.path && z.path.length) {
        var j,
          K = P[R],
          Y = z.path.length - 1;
        for (j = 0; j < Y; j++) K = K[z.path[j]];
        switch (z.kind) {
          case 'A':
            S(K[z.path[j]], z.index, z.item);
            break;
          case 'D':
            K[z.path[j]] = z.lhs;
            break;
          case 'E':
            K[z.path[j]] = z.lhs;
            break;
          case 'N':
            delete K[z.path[j]];
        }
      } else
        switch (z.kind) {
          case 'A':
            S(P[R], z.index, z.item);
            break;
          case 'D':
            P[R] = z.lhs;
            break;
          case 'E':
            P[R] = z.lhs;
            break;
          case 'N':
            P = h(P, R);
        }
      return P;
    }
    function O(P, R, z) {
      if (P && R && z && z.kind) {
        var j,
          K,
          Y = P;
        for (K = z.path.length - 1, j = 0; j < K; j++)
          typeof Y[z.path[j]] > 'u' && (Y[z.path[j]] = {}), (Y = Y[z.path[j]]);
        switch (z.kind) {
          case 'A':
            S(Y[z.path[j]], z.index, z.item);
            break;
          case 'D':
            Y[z.path[j]] = z.lhs;
            break;
          case 'E':
            Y[z.path[j]] = z.lhs;
            break;
          case 'N':
            delete Y[z.path[j]];
        }
      }
    }
    function w(P, R, z) {
      if (P && R) {
        var j = function (K) {
          (z && !z(P, R, K)) || x(P, R, K);
        };
        v(P, R, j);
      }
    }
    function b(P) {
      return 'color: ' + I[P].color + '; font-weight: bold';
    }
    function k(P) {
      var R = P.kind,
        z = P.path,
        j = P.lhs,
        K = P.rhs,
        Y = P.index,
        oe = P.item;
      switch (R) {
        case 'E':
          return [z.join('.'), j, '→', K];
        case 'N':
          return [z.join('.'), K];
        case 'D':
          return [z.join('.')];
        case 'A':
          return [z.join('.') + '[' + Y + ']', oe];
        default:
          return [];
      }
    }
    function E(P, R, z, j) {
      var K = m(P, R);
      try {
        j ? z.groupCollapsed('diff') : z.group('diff');
      } catch {
        z.log('diff');
      }
      K
        ? K.forEach(function (Y) {
            var oe = Y.kind,
              se = k(Y);
            z.log.apply(z, ['%c ' + I[oe].text, b(oe)].concat(X(se)));
          })
        : z.log('—— no diff ——');
      try {
        z.groupEnd();
      } catch {
        z.log('—— diff end —— ');
      }
    }
    function D(P, R, z, j) {
      switch (typeof P > 'u' ? 'undefined' : Ne(P)) {
        case 'object':
          return typeof P[j] == 'function' ? P[j].apply(P, X(z)) : P[j];
        case 'function':
          return P(R);
        default:
          return P;
      }
    }
    function F(P) {
      var R = P.timestamp,
        z = P.duration;
      return function (j, K, Y) {
        var oe = ['action'];
        return (
          oe.push('%c' + String(j.type)),
          R && oe.push('%c@ ' + K),
          z && oe.push('%c(in ' + Y.toFixed(2) + ' ms)'),
          oe.join(' ')
        );
      };
    }
    function W(P, R) {
      var z = R.logger,
        j = R.actionTransformer,
        K = R.titleFormatter,
        Y = K === void 0 ? F(R) : K,
        oe = R.collapsed,
        se = R.colors,
        et = R.level,
        Ve = R.diff,
        Ae = typeof R.titleFormatter > 'u';
      P.forEach(function (Be, ot) {
        var ke = Be.started,
          Yt = Be.startedTime,
          Bt = Be.action,
          De = Be.prevState,
          A = Be.error,
          U = Be.took,
          G = Be.nextState,
          ie = P[ot + 1];
        ie && ((G = ie.prevState), (U = ie.started - ke));
        var J = j(Bt),
          he =
            typeof oe == 'function'
              ? oe(
                  function () {
                    return G;
                  },
                  Bt,
                  Be,
                )
              : oe,
          pe = Ze(Yt),
          ye = se.title ? 'color: ' + se.title(J) + ';' : '',
          le = ['color: gray; font-weight: lighter;'];
        le.push(ye),
          R.timestamp && le.push('color: gray; font-weight: lighter;'),
          R.duration && le.push('color: gray; font-weight: lighter;');
        var je = Y(J, pe, U);
        try {
          he
            ? se.title && Ae
              ? z.groupCollapsed.apply(z, ['%c ' + je].concat(le))
              : z.groupCollapsed(je)
            : se.title && Ae
            ? z.group.apply(z, ['%c ' + je].concat(le))
            : z.group(je);
        } catch {
          z.log(je);
        }
        var _e = D(et, J, [De], 'prevState'),
          ze = D(et, J, [J], 'action'),
          pt = D(et, J, [A, De], 'error'),
          mt = D(et, J, [G], 'nextState');
        if (_e)
          if (se.prevState) {
            var Vn = 'color: ' + se.prevState(De) + '; font-weight: bold';
            z[_e]('%c prev state', Vn, De);
          } else z[_e]('prev state', De);
        if (ze)
          if (se.action) {
            var qn = 'color: ' + se.action(J) + '; font-weight: bold';
            z[ze]('%c action    ', qn, J);
          } else z[ze]('action    ', J);
        if (A && pt)
          if (se.error) {
            var Ln = 'color: ' + se.error(A, De) + '; font-weight: bold;';
            z[pt]('%c error     ', Ln, A);
          } else z[pt]('error     ', A);
        if (mt)
          if (se.nextState) {
            var dn = 'color: ' + se.nextState(G) + '; font-weight: bold';
            z[mt]('%c next state', dn, G);
          } else z[mt]('next state', G);
        Ve && E(De, G, z, he);
        try {
          z.groupEnd();
        } catch {
          z.log('—— log end ——');
        }
      });
    }
    function Q() {
      var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        R = Object.assign({}, re, P),
        z = R.logger,
        j = R.stateTransformer,
        K = R.errorTransformer,
        Y = R.predicate,
        oe = R.logErrors,
        se = R.diffPredicate;
      if (typeof z > 'u')
        return function () {
          return function (Ve) {
            return function (Ae) {
              return Ve(Ae);
            };
          };
        };
      if (P.getState && P.dispatch)
        return (
          console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),
          function () {
            return function (Ve) {
              return function (Ae) {
                return Ve(Ae);
              };
            };
          }
        );
      var et = [];
      return function (Ve) {
        var Ae = Ve.getState;
        return function (Be) {
          return function (ot) {
            if (typeof Y == 'function' && !Y(Ae, ot)) return Be(ot);
            var ke = {};
            et.push(ke),
              (ke.started = ce.now()),
              (ke.startedTime = new Date()),
              (ke.prevState = j(Ae())),
              (ke.action = ot);
            var Yt = void 0;
            if (oe)
              try {
                Yt = Be(ot);
              } catch (De) {
                ke.error = K(De);
              }
            else Yt = Be(ot);
            (ke.took = ce.now() - ke.started), (ke.nextState = j(Ae()));
            var Bt = R.diff && typeof se == 'function' ? se(Ae, ot) : R.diff;
            if ((W(et, Object.assign({}, R, { diff: Bt })), (et.length = 0), ke.error))
              throw ke.error;
            return Yt;
          };
        };
      };
    }
    var te,
      q,
      ue = function (P, R) {
        return new Array(R + 1).join(P);
      },
      ge = function (P, R) {
        return ue('0', R - P.toString().length) + P;
      },
      Ze = function (P) {
        return (
          ge(P.getHours(), 2) +
          ':' +
          ge(P.getMinutes(), 2) +
          ':' +
          ge(P.getSeconds(), 2) +
          '.' +
          ge(P.getMilliseconds(), 3)
        );
      },
      ce =
        typeof performance < 'u' && performance !== null && typeof performance.now == 'function'
          ? performance
          : Date,
      Ne =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (P) {
              return typeof P;
            }
          : function (P) {
              return P &&
                typeof Symbol == 'function' &&
                P.constructor === Symbol &&
                P !== Symbol.prototype
                ? 'symbol'
                : typeof P;
            },
      X = function (P) {
        if (Array.isArray(P)) {
          for (var R = 0, z = Array(P.length); R < P.length; R++) z[R] = P[R];
          return z;
        }
        return Array.from(P);
      },
      de = [];
    (te =
      (typeof Ho > 'u' ? 'undefined' : Ne(Ho)) === 'object' && Ho
        ? Ho
        : typeof window < 'u'
        ? window
        : {}),
      (q = te.DeepDiff),
      q &&
        de.push(function () {
          typeof q < 'u' && te.DeepDiff === m && ((te.DeepDiff = q), (q = void 0));
        }),
      r(a, i),
      r(l, i),
      r(c, i),
      r(d, i),
      Object.defineProperties(m, {
        diff: { value: m, enumerable: !0 },
        observableDiff: { value: v, enumerable: !0 },
        applyDiff: { value: w, enumerable: !0 },
        applyChange: { value: x, enumerable: !0 },
        revertChange: { value: O, enumerable: !0 },
        isConflict: {
          value: function () {
            return typeof q < 'u';
          },
          enumerable: !0,
        },
        noConflict: {
          value: function () {
            return (
              de &&
                (de.forEach(function (P) {
                  P();
                }),
                (de = null)),
              m
            );
          },
          enumerable: !0,
        },
      });
    var I = {
        E: { color: '#2196F3', text: 'CHANGED:' },
        N: { color: '#4CAF50', text: 'ADDED:' },
        D: { color: '#F44336', text: 'DELETED:' },
        A: { color: '#2196F3', text: 'ARRAY:' },
      },
      re = {
        level: 'log',
        logger: console,
        logErrors: !0,
        collapsed: void 0,
        predicate: void 0,
        duration: !1,
        timestamp: !0,
        stateTransformer: function (P) {
          return P;
        },
        actionTransformer: function (P) {
          return P;
        },
        errorTransformer: function (P) {
          return P;
        },
        colors: {
          title: function () {
            return 'inherit';
          },
          prevState: function () {
            return '#9E9E9E';
          },
          action: function () {
            return '#03A9F4';
          },
          nextState: function () {
            return '#4CAF50';
          },
          error: function () {
            return '#F20404';
          },
        },
        diff: !1,
        diffPredicate: void 0,
        transformer: void 0,
      },
      H = function () {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          R = P.dispatch,
          z = P.getState;
        return typeof R == 'function' || typeof z == 'function'
          ? Q()({ dispatch: R, getState: z })
          : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
      };
    (n.defaults = re),
      (n.createLogger = Q),
      (n.logger = H),
      (n.default = H),
      Object.defineProperty(n, '__esModule', { value: !0 });
  });
})(fM, Xl);
Xl.createLogger();
const hM = zI({ reducer: { evsearchResult: HI } }),
  pM = (e) => {
    if (e === 'no_nb') return 'no_nb';
    if (e === 'en') return 'en';
    if (e === 'no_nn') return 'no_nn';
  };
a2(qC).init(
  {
    lng: pM('no_nb'),
    fallbackLng: cM('defaultLocale'),
    ns: ['common'],
    defaultNS: 'common',
    returnNull: !1,
  },
  () => {
    const e = new vP({ defaultOptions: void 0 });
    p0(document.getElementById('root')).render(
      Ce(N.StrictMode, {
        children: Ce(hk, {
          store: hM,
          children: Ce(SP, { client: e, children: Ce(dM, { children: Ce(OC, { router: sM }) }) }),
        }),
      }),
    );
  },
);
