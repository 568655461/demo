/**
 * Created by wb-xl204310 on 2016/7/25.
 */
!function (a, b) {
  function c(a) {
    return a.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
  }

  function d(a) {
    return e ? e + a : a.toLowerCase()
  }

  var e, f, g, h, i, j, k, l, m, n, o = "", p = {Webkit: "webkit", Moz: "", O: "o"}, q = document.createElement("div"), r = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, s = {};
  a.each(p, function (a, c) {
    return q.style[a + "TransitionProperty"] !== b ? (o = "-" + a.toLowerCase() + "-", e = c, !1) : void 0
  }), f = o + "transform", s[g = o + "transition-property"] = s[h = o + "transition-duration"] = s[j = o + "transition-delay"] = s[i = o + "transition-timing-function"] = s[k = o + "animation-name"] = s[l = o + "animation-duration"] = s[n = o + "animation-delay"] = s[m = o + "animation-timing-function"] = "", a.fx = {off: e === b && q.style.transitionProperty === b, speeds: {_default: 400, fast: 200, slow: 600}, cssPrefix: o, transitionEnd: d("TransitionEnd"), animationEnd: d("AnimationEnd")}, a.fn.animate = function (c, d, e, f, g) {
    return a.isFunction(d) && (f = d, e = b, d = b), a.isFunction(e) && (f = e, e = b), a.isPlainObject(d) && (e = d.easing, f = d.complete, g = d.delay, d = d.duration), d && (d = ("number" == typeof d ? d : a.fx.speeds[d] || a.fx.speeds._default) / 1e3), g && (g = parseFloat(g) / 1e3), this.anim(c, d, e, f, g)
  }, a.fn.anim = function (d, e, o, p, q) {
    var t, u, v, w = {}, x = "", y = this, z = a.fx.transitionEnd, A = !1;
    if (e === b && (e = a.fx.speeds._default / 1e3), q === b && (q = 0), a.fx.off && (e = 0), "string" == typeof d)w[k] = d, w[l] = e + "s", w[n] = q + "s", w[m] = o || "linear", z = a.fx.animationEnd; else {
      u = [];
      for (t in d)r.test(t) ? x += t + "(" + d[t] + ") " : (w[t] = d[t], u.push(c(t)));
      x && (w[f] = x, u.push(f)), e > 0 && "object" == typeof d && (w[g] = u.join(", "), w[h] = e + "s", w[j] = q + "s", w[i] = o || "linear")
    }
    return v = function (b) {
      if ("undefined" != typeof b) {
        if (b.target !== b.currentTarget)return;
        a(b.target).unbind(z, v)
      } else a(this).unbind(z, v);
      A = !0, a(this).css(s), p && p.call(this)
    }, e > 0 && (this.bind(z, v), setTimeout(function () {
      A || v.call(y)
    }, 1e3 * (e + q) + 25)), this.size() && this.get(0).clientLeft, this.css(w), 0 >= e && setTimeout(function () {
      y.each(function () {
        v.call(this)
      })
    }, 0), this
  }, q = null
}(Zepto), function (a) {
  var b = [], c = b.slice;
  a.msg = function () {
    function b() {
      return'<div class="lib-mask"></div>'
    }

    function c() {
      return'<div class="lib-maskt"></div>'
    }

    function d() {
      a(".lod-Box").remove();
      var b = '<div class="lod-Box lod-bfc">' + c() + '<div class="lod-spinn"><div class="lod-double-bounce1"></div><div class="lod-double-bounce2"></div><div class="lod-text">鍔犺浇涓�...</div></div></div>';
      a("body").append(b)
    }

    function e() {
      this.show = function () {
        d()
      }, this.hide = function () {
        a(".lod-Box").remove()
      }
    }

    function f() {
      a("#dialog-msg,#dialog-tips").remove()
    }

    function g(c) {
      a("#dialog-msg,#dialog-tips").remove();
      var d = 3 == c.type ? '<div class="tips fadeOut" id="dialog-tips">' + c.content + "</div>" : '<div id="dialog-msg">' + b() + '<div class="dialog-msg"><div class="dialog-content">' + c.content + '</div><div class="dialog-btn-content"><div class="dialog-btn-left"' + (1 == c.type ? 'style="width:100%;"' : "") + ' id="dialog-btn-cancel">' + c.canceltext + "</div>" + (1 == c.type ? "" : '<div class="dialog-btn-right" id="dialog-btn-ok">' + c.oktext + "</div>") + "</div></div></div>";
      a("body").append(d), a("#dialog-btn-cancel").tap(function () {
        c.cancel(), f()
      }), a("#dialog-btn-ok").tap(function () {
        c.ok()
      }), a("#dialog-tips").bind("webkitAnimationEnd", function () {
        a(this).remove()
      })
    }

    function h(a) {
      this.type = a.type, this.content = a.content, this.ok = a.ok, this.cancel = a.cancel, this.oktext = a.oktext, this.canceltext = a.canceltext, this.show = function (a) {
        a = {type: a.type || this.type, content: a.content || this.content, ok: "function" == typeof a.ok ? a.ok : this.ok, cancel: "function" == typeof a.cancel ? a.cancel : this.cancel, oktext: a.oktext || this.oktext, canceltext: a.canceltext || this.canceltext}, g(a)
      }, this.hide = function () {
        f()
      }
    }

    function i() {
      var a = new e, b = {type: 1, content: "鐏垎鎶㈣喘涓紒璇风◢鍚庨噸璇晘", ok: function () {
        f()
      }, cancel: function () {
        f()
      }, oktext: "纭", canceltext: "鍙栨秷"}, c = new h(b);
      return{loading: a, dialog: c}
    }

    return i()
  }, a.libAjax = function () {
    function b(b, c, d, f) {
      function g(a) {
        var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"), c = window.location.search.substr(1).match(b);
        return null != c ? decodeURIComponent(c[2]) : null
      }

      var h = f || "none", i = "jsonp" == h ? "GET" : "POST";
      c.sid = g("sid") || c.sid, a.ajax({type: i, url: b, crossDomain: !0, xhrFields: {withCredentials: !0}, data: c, dataType: h, beforeSend: function () {
      }, success: function (b) {
        if ("object" != typeof b && (b = a.parseJSON(b)), !b)return void e.show({type: 3, content: "鐏垎鎶㈣喘涓紒璇风◢鍚庨噸璇晘"});
        var c = b.resultCode, f = (b.resultMsg, b.resultData);
        0 == c ? "object" == typeof f && d(f) : 3 == c ? window.location.href = "http://passport.m.jd.com/user/login.action?v=t&sid=&returnurl=" + window.location.href : e.show({type: 3, content: "鐏垎鎶㈣喘涓紒璇风◢鍚庨噸璇晘"})
      }, error: function () {
        e.show({type: 3, content: "鐏垎鎶㈣喘涓紒璇风◢鍚庨噸璇晘"})
      }})
    }

    function c() {
      this.getAjax = function (a, c, d, e) {
        b(a, c, d, e)
      }
    }

    var d = a.msg(), e = (d.loading, d.dialog);
    return new c
  }, a.store = function () {
    function b(a) {
      var c = "", d = "{";
      for (c in a)d += "object" == typeof a[c] ? '"' + c + '":' + b(a[c]) + "," : '"' + c + '":"' + a[c] + '",';
      return d = d.substring(0, d.length - 1), d += "}"
    }

    function c(b) {
      return a.parseJSON(b)
    }

    function d() {
      this.setStore = function (c, d) {
        return c = a.trim(c), sessionStorage ? c ? (this.removeStore(c), "object" == typeof d && (d = b(d)), sessionStorage.setItem(c, d || null), null) : null : void 0
      }, this.getStore = function (b) {
        return b = a.trim(b), sessionStorage ? b ? null == sessionStorage.getItem(b) || "null" == sessionStorage.getItem(b) ? null : c(sessionStorage.getItem(b)) : null : void 0
      }, this.removeStore = function (b) {
        return b = a.trim(b), sessionStorage ? b.length > 0 && sessionStorage.getItem(b) ? (sessionStorage.removeItem(b), null) : null : void 0
      }
    }

    return new d
  }, a.tools = function () {
    function b(b, c, d) {
      var e = "", f = "", g = c;
      for (e in b)if (e == d) {
        var h = "object" == typeof b[e] ? b[e] : a.parseJSON(b[e])[0];
        for (f in h)g = g.replace("#" + f, h[f] || "")
      } else g = g.replace("#" + e, b[e] || "");
      return g
    }

    function c(b, c) {
      var d = '<div class="remindBox dialogeffect" style="padding-top:18%;display:none;"><p class="title1">' + b + '</p><div style="height: 70%;overflow-y: auto;"><p class="remindword">' + c + '</p></div><img class="closeBtn" id="btnClose" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjIzNUUwQ0JGNDlFMTFFNEIzQzRGMUUwMEY4QTNGRDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjIzNUUwQ0NGNDlFMTFFNEIzQzRGMUUwMEY4QTNGRDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMjM1RTBDOUY0OUUxMUU0QjNDNEYxRTAwRjhBM0ZENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMjM1RTBDQUY0OUUxMUU0QjNDNEYxRTAwRjhBM0ZENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkmPRFAAAAGWSURBVHja1NgxSsVAEMbxfR+eQUF7CxF5ZxBBC08gXiw3EKwFbWJro2Chd1Be96zVGciDELLJZndmd3bhX6XI/ggDu1k1TfPqnAN1SX27etYh9URt0QHW1DO1XxGA93vK+2fAFfVJnVQC2QGOqXfqmhFf1HklkCHggtqge1gDZBTgunlwFUC8gCHCKmQSMIawBpkF+BBWIEGAKURpSDBgDlEKsggQgsgNWQwIReSCRAGWILQh0YClCC1IEiAGIQ1JBsQipCAigBREKkQMkIqIhYgCJBBLIeIAKUQoRAUgiZiDqAGkET7IWhPAa0/h/LODtB3kjVppATS+RB9yS/11gF/qRgOgieAZuOsB+D33WqdfKAH6M3CmfYyHMoBn4EP7GA9lwCbHfQQZAOr3EWQCqEKQEaAGQWaACgQFAOIQFAKIQlAQIAZBYYAIBAYAyRAYASRBYAgQDYExQBQEBgFTkINQhAWAD9KOQWAYEAzpI44MAoIg6AFao4BZCCoBTEIY8VgJwAd5YMQP9VIJYAjhH3PbfwEGALxYFqfhhN66AAAAAElFTkSuQmCC"></div>', e = a(d);
      a("body").append(e), e.simpleAnimationEnd(), e.show().addClass("effectsIn"), e.find("#btnClose").tap(function () {
        e.show().addClass("effectsOut");
        var b = a(this);
        setTimeout(function () {
          b.parent().remove()
        }, 150)
      })
    }

    function d(a) {
      var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"), c = window.location.search.substr(1).match(b);
      return null != c ? decodeURIComponent(c[2]) : null
    }

    function e() {
      this.setDate = function (a, c, d) {
        return b(a, c, d)
      }, this.screeTips = function (a, b) {
        return c(a, b)
      }, this.getQuery = function (a) {
        return d(a)
      }
    }

    return new e
  }, a.getScript = function (a, b) {
    var c = document.createElement("script");
    c.type = "text/javascript", c.async = !0, c.onload = c.onreadystatechange = function () {
      this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (b && b(), c.onload = c.onreadystatechange = null)
    }, c.src = a, this(c).appendTo("body")
  }, a.waitFor = function (a, b, c) {
    c || (c = 10), c *= 1e3;
    var d = setInterval(function () {
      c -= 30, a && a() && (b && b(), clearInterval(d)), 0 > c && clearInterval(d)
    }, 30)
  }, a.getCookie = function (a, b) {
    b = b || {};
    var c, d = b.raw ? function (a) {
      return a
    } : decodeURIComponent;
    return(c = new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)").exec(document.cookie)) ? d(c[1]) : null
  }, a.setCookie = function (b, c, d) {
    if (d = a.extend({}, {domain: "", path: "/"}, d), null === c && (d.expires = -1), "number" == typeof d.expires) {
      var e = d.expires, f = d.expires = new Date;
      f.setTime(f.getTime() + 1e3 * e * 60 * 60)
    }
    return c = "" + c, document.cookie = [b, "=", d.raw ? c : c, d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""].join("")
  }, a.delay = function (b, d) {
    var e = c.call(arguments, 2);
    if (a.isFunction(b)) {
      d = d || 30;
      var f = setTimeout(function () {
        return clearTimeout(f), b.apply(null, e)
      }, d)
    }
  }, a.parseMillisecond = function (a, b) {
    if (b = b || "-", !a)return"";
    var c = new Date(a), d = c.getFullYear(), e = ("0" + (c.getMonth() + 1)).slice(-2), f = ("0" + c.getDate()).slice(-2), g = ("0" + c.getHours()).slice(-2), h = ("0" + c.getMinutes()).slice(-2);
    return d + b + e + b + f + " " + g + ":" + h
  }, a.parseToDate = function (a, b) {
    if (b = b || "-", !a)return"";
    var c = new Date(a), d = c.getFullYear(), e = ("0" + (c.getMonth() + 1)).slice(-2), f = ("0" + c.getDate()).slice(-2);
    ("0" + c.getHours()).slice(-2), ("0" + c.getMinutes()).slice(-2);
    return d + b + e + b + f
  }
}(Zepto), window.jQuery = window.Zepto;
var jaq = jaq || [];
jaq.push(["account", "UA-J2011-12"]), jaq.push(["domain", "jrapp.jd.com"]), function () {
  var a = document.createElement("script");
  a.type = "text/javascript", a.async = !0, a.src = ("https:" == document.location.protocol ? "https://cscssl" : "http://csc") + ".jd.com/joya.js";
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b)
}();
var _jaq = _jaq || [];
_jaq.push(["account", "UA-J2011-12"]), _jaq.push(["domain", "jr.jd.com"]), function () {
  var a = document.createElement("script");
  a.type = "text/javascript", a.async = !0, a.src = ("https:" == document.location.protocol ? "https://jrclick" : "http://jrclick") + ".jd.com/wl.dev.js";
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b)
}(), function (a) {
  a.fn.simpleAnimationEnd = function () {
    return this.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function (b) {
      var c, d = b.animationName;
      c = a(b.currentTarget), d && c.removeClass(d)
    })
  }, a.loading = {showContent: function (b) {
    b = a.extend({loadName: "#loading-box", contentName: "#main-content"}, b);
    var c = a(b.loadName), d = a(b.contentName);
    a("body").css({overflow: "hidden"}), this.hide(c), this.show(d), setTimeout(function () {
      a("body").css("overflow", "visible")
    }, 700)
  }, hide: function (a) {
    a.simpleAnimationEnd(), a.addClass("effectsOut"), setTimeout(function () {
      a.hide()
    }, 450)
  }, show: function (a) {
    a.simpleAnimationEnd(), setTimeout(function () {
      a.removeClass("hide").addClass("show")
    }, 30)
  }}
}(Zepto);