/**
 * Created by wb-xl204310 on 2016/7/25.
 */
!function(a, b) {
  function c(a) {
    var b = t.getStore("gearList");
    t.setStore("buyMesg", b[a])
  }
  function d(a) {
    var b = t.getStore("buyMesg").productList;
    b = b[a],
      "0" == b.gradeTerm && (b.lowestInvestAmount = "1"),
      t.setStore("buyData", b)
  }
  function e(b) {
    b = Number(b);
    var c = t.getStore("buyMesg")
      , e = (c.length,
        c.productList[0])
      , f = c.productList[1]
      , g = c.gradeLowestAnnualYieldRate
      , h = null
      , i = null
      , j = null
      , k = null
      , l = f ? c.productList[1].lowestInvestAmount : ba.option.dMaxMoney
      , m = {
        part1: .35,
        part2: 1.1,
        part3: 1.3,
        part4: 1.5,
        part5: 2.1,
        part6: 2.75
      };
    e && 2 == e.productStatus && 4 != e.productStatus && b > c.productList[0].lowestInvestAmount && l > b ? (g = c.productList[0].annualYieldRate / 100,
      h = 0 == c.productList[0].gradeTerm ? 1 : c.productList[0].gradeTerm,
      i = c.productList[0].productName,
      j = c.productList[0].gradeName,
      k = c.productList[0].lowestInvestAmount,
      d(0)) : f && 2 == f.productStatus && 4 != f.productStatus && b > c.productList[1].lowestInvestAmount ? (g = c.productList[1].annualYieldRate / 100,
      h = 0 == c.productList[1].gradeTerm ? 1 : c.productList[1].gradeTerm,
      i = c.productList[1].productName,
      j = c.productList[1].gradeName,
      k = c.productList[1].lowestInvestAmount,
      d(1)) : (g = c.productList[0].annualYieldRate / 100,
      h = 0 == c.productList[0].gradeTerm ? 1 : c.productList[0].gradeTerm,
      i = c.productList[0].productName,
      j = c.productList[0].gradeName,
      d(0));
    var n = t.getStore("buyData").productStatus
      , o = "已抢光";
    if (2 == n)
      0 == t.getStore("buyData").canBuyAmout ? (a(".productDetail").show(),
        B.removeClass("bg-col-00d397").addClass("bg-col-ccc").html(o)) : (a(".productDetail").show(),
        B.removeClass("bg-col-ccc").addClass("bg-col-00d397").html("转入"));
    else if (4 == n)
      a(".productDetail").show(),
        B.removeClass("bg-col-00d397").addClass("bg-col-ccc").html(o);
    else if (5 == n) {
      var p = "敬请期待";
      a(".productDetail").hide(),
        "10005" == t.getStore("buyData").productType && (p = "将于" + c.preSellDate + "起售"),
        B.removeClass("bg-col-00d397").addClass("bg-col-ccc").html(p)
    }
    var q = t.getStore("buyData").gradeTerm;
    if (0 == q) {
      var r = t.getStore("hqInfo") || "";
      r && "false" == r.isCanPay && "true" == r.isHaveHq && B.removeClass("bg-col-00d397").addClass("bg-col-ccc").html("首次购买次日可续存")
    }
    var s = (b * (Math.pow(1 + g, h / 365) - 1)).toFixed(2).toString()
      , u = s.split(".")[0] + "." + s.split(".")[1].substring(0, 2)
      , v = null ;
    v = 89 > h ? m.part1 : h >= 89 && 180 > h ? m.part2 : h >= 180 && 365 > h ? m.part3 : h >= 365 && 730 > h ? m.part4 : h >= 730 && 1095 > h ? m.part5 : m.part6;
    var w = (v / 100 * h * b / 365).toFixed(2).toString()
      , x = w.split(".")[0] + "." + w.split(".")[1].substring(0, 2);
    z.html(u),
      A.html(x),
      C.html(i),
      F.html(0 == q ? "每天" : q + "天")
  }
  function f() {
    var b = t.getStore("buyMesg")
      , c = ""
      , d = b.riskDesc || "";
    if (1 == b.isFB)
      c += M.replace("#inforTitle", "产品类别").replace("#inforContent", "固收理财");
    else if (b.itemDetail) {
      var e = b.itemDetail;
      a.each(e, function(a, b) {
        c += M.replace("#inforTitle", b.name).replace("#inforContent", b.value)
      })
    }
    I.html(c),
      J.html(d)
  }
  function g(a, b, d) {
    c(N - 1),
      ba.option.stopDraw = !1,
        t.getStore("buyMesg").gradeLowestInvestAmount > ba.option.totalMoney ? ba.init(t.getStore("buyMesg")) : e(ba.option.totalMoney),
      y.find("ul").find("span").removeClass("ho-h-on"),
      y.find("ul").find("li").eq(N).find("span").addClass("ho-h-on"),
      y.find("ul").animate({
        "margin-left": -(N - 1) * (v / 4)
      }, 300),
        a && b && d ? (y.find("li").eq(a).animate({
      width: v / 4 + "px"
    }, 300).find(".ho-h-tt").animate({
      "font-size": "1rem"
    }, 300),
      y.find("li").eq(a).animate({
        width: v / 4 + "px"
      }, 300).find(".ho-h-to").animate({
        "font-size": "0.75rem"
      }, 300),
      y.find("li").eq(b).animate({
        width: 2 * v / 4 + "px"
      }, 300).find(".ho-h-tt").animate({
        "font-size": "1.875rem"
      }, 300),
      y.find("li").eq(b).animate({
        width: 2 * v / 4 + "px"
      }, 300).find(".ho-h-to").animate({
        "font-size": "0.9375rem"
      }, 300),
      y.find("ul").find("li").eq(a).find(".rateLow").hide(),
      y.find("ul").find("li").eq(b).find(".rateLow").show()) : (y.find("li").eq(b).animate({
      width: v / 4 + "px"
    }, 300).find(".ho-h-tt").animate({
      "font-size": "1rem"
    }, 300),
      y.find("li").eq(b).animate({
        width: v / 4 + "px"
      }, 300).find(".ho-h-to").animate({
        "font-size": "0.75rem"
      }, 300),
      y.find("li").eq(a).animate({
        width: 2 * v / 4 + "px"
      }, 300).find(".ho-h-tt").animate({
        "font-size": "1.875rem"
      }, 300),
      y.find("li").eq(a).animate({
        width: 2 * v / 4 + "px"
      }, 300).find(".ho-h-to").animate({
        "font-size": "0.9375rem"
      }, 300));
    var f = Number(x.val())
      , g = t.getStore("buyMesg")
      , h = g.gradeLowestInvestAmount;
    0 == g.gradeTerm ? ba.option.ruleCellVal = 100 : "10005" === t.getStore("buyData").productType ? (ba.option.dMaxMoney = 5e5,
      ba.option.ruleCellVal = Number(g.intervalAmount > 100 ? g.intervalAmount : 100),
        f < g.minAmount ? (x.val(g.minAmount),
      E.html("起购金额" + g.minAmount + "元"),
      D.show()) : (f - g.minAmount) % g.intervalAmount != 0 && (f = Math.round((f - g.minAmount) / g.intervalAmount) * g.intervalAmount + Number(g.minAmount),
      E.html("单价" + g.intervalAmount + "元/份"),
      D.show(),
      x.val(f))) : (ba.option.ruleCellVal = 1e3,
      f % h != 0 && (f = Math.round(Number(f) / Number(h)) * Number(h),
      E.html("单价1000元/份"),
      D.show(),
      x.val(0 == f ? 1e3 : f))),
      ba.reDraw(f)
  }
  function h(b) {
    var c = null
      , d = null
      , e = null
      , f = null
      , h = null
      , i = null
      , j = null ;
    document.getElementById("gearCot").addEventListener("touchstart", function(a) {
      a.preventDefault(),
        c = a.touches[0].clientX;
      var b = new Date;
      i = b.getTime()
    }, !1),
      document.getElementById("gearCot").addEventListener("touchmove", function(a) {
        d = a.touches[0].clientX,
          y.find("ul").css("margin-left", -(N - 1) * (v / 4) + (d - c) / 4),
            d - c > 0 ? (h = N - 1,
          y.find("li").eq(N).css("width", 2 * v / 4 - v / 4 * Math.abs(d - c) / v + "px").find(".ho-h-tt").css("font-size", 1.875 - .875 * Math.abs(d - c) / v + "rem"),
          y.find("li").eq(N).css("width", 2 * v / 4 - v / 4 * Math.abs(d - c) / v + "px").find(".ho-h-to").css("font-size", .9375 - .1875 * Math.abs(d - c) / v + "rem"),
          y.find("li").eq(h).css("width", v / 4 + v / 4 * Math.abs(d - c) / v + "px").find(".ho-h-tt").css("font-size", 1 + .875 * Math.abs(d - c) / v + "rem"),
          y.find("li").eq(h).css("width", v / 4 + v / 4 * Math.abs(d - c) / v + "px").find(".ho-h-to").css("font-size", .75 + .1875 * Math.abs(d - c) / v + "rem")) : (f = N + 1,
          y.find("li").eq(N).css("width", 2 * v / 4 - v / 4 * Math.abs(d - c) / v + "px").find(".ho-h-tt").css("font-size", 1.875 - .875 * Math.abs(d - c) / v + "rem"),
          y.find("li").eq(N).css("width", 2 * v / 4 - v / 4 * Math.abs(d - c) / v + "px").find(".ho-h-to").css("font-size", .9375 - .1875 * Math.abs(d - c) / v + "rem"),
          y.find("li").eq(f).css("width", v / 4 + v / 4 * Math.abs(d - c) / v + "px").find(".ho-h-tt").css("font-size", 1 + .875 * Math.abs(d - c) / v + "rem"),
          y.find("li").eq(f).css("width", v / 4 + v / 4 * Math.abs(d - c) / v + "px").find(".ho-h-to").css("font-size", .75 + .1875 * Math.abs(d - c) / v + "rem"))
      }, !1);
    var k = null
      , l = null ;
    y.find("li").bind("touchend", function() {
      var b = new Date;
      j = b.getTime(),
        k = a(this).index(),
        l = N
    }),
      document.getElementById("gearCot").addEventListener("touchend", function(a) {
        if (e = a.changedTouches[0].clientX,
          180 > j - i && Math.abs(e - c) < 5)
          k != N && 0 != k && (k > l ? (N += 1,
            g(l, k, !0)) : (N -= 1,
            g(l, k, !0)));
        else if (e > c)
          if (e - c > v / 4) {
            if (1 >= N)
              return y.find("ul").animate({
                "margin-left": 0
              }, 200),
                y.find("li").eq(N).css("width", 2 * v / 4 + "px").find(".ho-h-tt").animate({
                  "font-size": "1.875rem"
                }, 200),
                y.find("li").eq(N).css("width", 2 * v / 4 + "px").find(".ho-h-to").animate({
                  "font-size": "0.9375rem"
                }, 200),
                y.find("li").eq(h).css("width", v / 4 + "px").find(".ho-h-tt").animate({
                  "font-size": "1.875rem"
                }, 200),
                void y.find("li").eq(h).css("width", v / 4 + "px").find(".ho-h-to").animate({
                  "font-size": "0.9375rem"
                }, 200);
            N -= 1,
              g(N + 1, h, !0)
          } else
            g(N, h);
        else if (c - e > v / 4) {
          if (N >= b)
            return y.find("ul").animate({
              "margin-left": -(v / 4) * (b - 1)
            }, 200),
              y.find("li").eq(N).css("width", 2 * v / 4 + "px").find(".ho-h-tt").animate({
                "font-size": "1.875rem"
              }, 200),
              y.find("li").eq(N).css("width", 2 * v / 4 + "px").find(".ho-h-to").animate({
                "font-size": "0.9375rem"
              }, 200),
              y.find("li").eq(f).find(".ho-h-tt").animate({
                "font-size": "1.875rem"
              }, 200),
              void y.find("li").eq(f).find(".ho-h-to").animate({
                "font-size": "0.9375rem"
              }, 200);
          N += 1,
            g(N - 1, f, !0)
        } else
          g(N, f)
      }, !1)
  }
  function i(b) {
    var c = b.length
      , d = K.replace("#width", v / 4 + "px");
    w.width((c + 4) * (v / 4));
    for (var e = 0; c > e; e++) {
      var f = '<span class="ho-h-tf ft-20 dp-n fm-fz ho-tf bd-x bd-nl-g bd-nt-g bd-nr-g bd-nb-g promotion-content" data-index=' + e + ">"
        , g = b[e].calcInterestTime || "";
      g && (g = f.replace("promotion-content", "") + a.parseToDate(b[e].calcInterestTime) + "&nbsp;开始计息"),
        d += b[e].productList.length > 1 ? L.replace("#width", v / 4 + "px").replace("#gradeName", b[e].gradeName).replace("#rateIntroContent", 301 == b[e].insuranceType ? "历史年化投资回报率" : "历史年化结算利率").replace("#promotionContent", b[e].productList[0].promotionContent ? f + b[e].productList[0].promotionContent + "</span>" : g).replace("#gradeLowestAnnualYieldRate", b[e].productList[0].annualYieldRate + "%").replace("#gradeHighestAnnualYieldRate", b[e].productList[1].annualYieldRate + "%") : L.replace("#width", v / 4 + "px").replace("#gradeName", b[e].gradeName).replace("#rateIntroContent", 301 == b[e].insuranceType ? "历史年化投资回报率" : "历史年化结算利率").replace("rateLow", "").replace("#promotionContent", b[e].productList[0].promotionContent ? f + b[e].productList[0].promotionContent + "</span>" : g).replace("#gradeLowestAnnualYieldRate", "").replace("#gradeHighestAnnualYieldRate", b[e].productList[0].annualYieldRate + "%")
    }
    w.append(d),
      w.find(".promotion-content").on("touchend", b, function() {
        var c = a(this).data("index")
          , d = b[c].productList[0].extra1 || "暂无内容";
        u.screeTips("详情", '<p class="remindword">' + d + "</p>"),
          event.preventDefault()
      }),
        0 >= N ? (y.find("ul").find("li").eq(1).find("span").addClass("ho-h-on"),
      y.find("ul").animate({
        "margin-left": 0
      }, 300)) : (y.find("ul").find("li").eq(N).css("width", 2 * v / 4 + "px").find("span").addClass("ho-h-on"),
      y.find("ul").animate({
        "margin-left": -(N - 1) * (v / 4)
      }, 300),
      y.find("ul").find("li").eq(N).find(".rateLow").show()),
      h(c)
  }
  function j() {
    var b = {
        1: "单笔最高19.9万元",
        2: "起购金额1000元",
        3: "单价1000元/份",
        4: "起购金额1元",
        5: "单笔最高50万元"
      }
      , c = this;
    this.show = function(a) {
      E.html(b[a]),
        D.show()
    }
      ,
      x.focus(function() {
        O = !0
      }),
      x.bind("input", function() {
        var b = a(this).val();
        val = "",
          /^\d+$/.test(b) ? val = b : (val = b.replace(/\D/g, ""),
            a(this).val(val)),
          val > ba.option.dMaxMoney && (val = ba.option.dMaxMoney,
            5e5 == val ? c.show(5) : c.show(1),
          a(this).val(val))
      }),
      x.blur(function() {
        var b = a(this).val() || 0
          , d = t.getStore("buyMesg")
          , e = t.getStore("buyData").lowestInvestAmount;
        O = 100 > b || b % 100 > 0,
          b > ba.option.dMaxMoney && (b = ba.option.dMaxMoney,
            5e5 == b ? c.show(5) : c.show(1)),
            "10005" == t.getStore("buyData").productType ? b < d.minAmount ? (b = d.minAmount,
          E.html("起购金额" + d.minAmount + "元"),
          D.show()) : (b - d.minAmount) % d.intervalAmount != 0 && (b = Math.round((b - d.minAmount) / d.intervalAmount) * d.intervalAmount + Number(d.minAmount),
          E.html("单价" + d.intervalAmount + "元/份"),
          D.show()) : (Number(b) < Number(e) && (b = e,
            1e3 > e ? c.show(4) : c.show(2)),
          "4" != t.getStore("buyData").gradeId && b % e != 0 && (b = Math.floor(Number(b) / Number(e)) * Number(e),
          c.show(3))),
          ba.option.stopDraw = !1,
          a(this).val(b),
          ba.reDraw(b)
      })
  }
  function k() {
    var a = navigator.userAgent.toLowerCase();
    return "micromessenger" == a.match(/MicroMessenger/i)
  }
  function l() {
    if (B.on("touchend", function() {
      var b = u.getQuery("version") || 5;
      if (!a(this).hasClass("bg-col-ccc")) {
        var c = t.getStore("buyData").productType;
        if (101 == c)
          window.location.href = "fund/tobuy.html?itemId=" + t.getStore("buyData").productId;
        else if (102 == c || 10005 == c) {
          var d = parseInt(x.val())
            , e = parseInt(d / Number(t.getStore("buyData").lowestInvestAmount)) || 1
            , f = 4 == t.getStore("buyData").gradeId ? d : Number(t.getStore("buyData").lowestInvestAmount) * e || Number(t.getStore("buyData").lowestInvestAmount);
          if (k())
            if (u.getQuery("sid"))
              m(f, e);
            else {
              var g = window.location.protocol + r.xbAl.xbServerUrl + "xb/client/redirect.action?version=" + b + "&source=weixin";
              window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5e6488a3d20bd1d7&redirect_uri=http%3a%2f%2fjrappgw.jd.com%2fwxjdissue%2fJDIssue%2flogin%3fsource%3d999%26uappType%3djdbt%26curOauthFlag%3d1%26returnUrl%3d" + encodeURIComponent(encodeURIComponent(g)) + "&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect"
            }
          else if (t.getStore("clientMsg").sid) {
            if (t.removeStore("totalItem"),
              parseInt(f) > parseInt(t.getStore("buyData").canBuyAmout))
              return E.html("不能超过库存"),
                void D.show();
            m(f, e)
          } else {
            var h = navigator.userAgent.toLowerCase()
              , i = /jdjr-app/.test(h);
            if (i) {
              a.waitFor(function() {
                return !!window.oBridgev3
              }, function() {
                var a = {
                  type: 1,
                  data: ""
                };
                window.oBridgev3.jsToGetResp(function(a) {
                  window.getSidt(a)
                }, a)
              })
            } else
              window.location.href = "//passport.m.jd.com/user/login.action?v=t&sid=&returnurl=" + encodeURIComponent(window.location.href + "?version=" + b)
          }
        }
      }
      event.preventDefault()
    }),
      D.bind("webkitAnimationEnd", function() {
        a(this).hide()
      }),
      a(".home-tip-cot").bind("touchstart", function() {
        a(this).find(".home-tip").addClass("home-tip-on")
      }),
      a(".home-tip-cot").bind("touchend", function() {
        a(this).find(".home-tip").removeClass("home-tip-on"),
          u.screeTips("收益说明", '<p class="remindword">年化收益率每日会有波动，收益也会波动。预期收益仅作为参考，请以实际收益为准</p>')
      }),
      a(".productDetail").tap(function() {
        "10005" === t.getStore("buyData").productType ? window.location.href = r.xbAl.xbUrl.replace("xb/", "stableEarnings/earnDetail.html?source=" + ("app" === t.getStore("clientMsg").source ? "app" : "jrm") + "&atJDM=0&pid=" + t.getStore("buyData").releventId + "&viewmode=1") : window.location.href = r.xbAl.bxUrl + "detailnew.html?sid=" + t.getStore("clientMsg").sid + "&souce=" + t.getStore("clientMsg").source + "&itemId=" + t.getStore("buyData").releventId + "&bizType=2"
      }),
      a("#help").tap(function() {
        window.location.href = "help.html" + window.location.search
      }),
      a("#goindex").tap(function() {
        window.location.href = "index.html" + window.location.search
      }),
      a("#hint").tap(function() {
        u.screeTips("风险提示", '<p class="remindword">投资者购买小白理财并不等于将资金作为存款存在银行或存款类金融机构，小白理财并不保证一定保本或盈利，也不保证最低收益，网站中所示的相关收益率均为历史收益的说明，请投资者购买前仔细阅读相关合同等法律文件。</p>')
      }),
      "jrm" === t.getStore("clientMsg").source) {
      var c = a("#toPosiDetailBtn");
      c.removeClass("dp-n"),
        c.siblings().removeClass("pos-w-100p").removeClass("po-fb"),
        c.parent().addClass("bd-t-ddd"),
        c.tap(function() {
          setTimeout(function() {
            b.location.href = "posidetail.html" + b.location.search
          })
        })
    }
  }
  function m(a, b) {
    var c = t.getStore("buyData").gradeTerm
      , d = u.getQuery("version") || 5;
    if (n("totalItem", "policyItem", "isSuccess", "newMoney", "bankItem", "bankFirstItem", "isFirst", "checkBankItem"),
      0 == c) {
      var e = t.getStore("hqInfo") || "";
      e && "true" == e.isCanPay && "true" == e.isHaveHq ? window.location.href = r.xbAl.bxUrl + "addbuyinsur.html?orderId=" + e.orderNo + "&val=" + a + "&sid=" + t.getStore("clientMsg").sid + "&source=" + t.getStore("clientMsg").source + "&version=" + d + "&bizType=2" : window.location.href = r.xbAl.bxUrl + "fillinsur.html?itemId=" + t.getStore("buyData").releventId + "&val=" + a + "&fs=" + b + "&gradeName=" + encodeURI(t.getStore("buyData").gradeName) + "&source=" + t.getStore("clientMsg").source + "&sid=" + t.getStore("clientMsg").sid + "&version=" + d + "&bizType=2"
    } else
      "10005" === t.getStore("buyData").productType ? window.location.href = r.xbAl.xbServerUrl + "fb/h5/redirect/toBuy.action?productId=" + t.getStore("buyData").releventId + "&xbaiAmount=" + a + "&source=" + t.getStore("clientMsg").source + "&sid=" + t.getStore("clientMsg").sid + "&version=13" : window.location.href = r.xbAl.bxUrl + "fillinsur.html?itemId=" + t.getStore("buyData").releventId + "&val=" + a + "&fs=" + b + "&gradeName=" + encodeURI(t.getStore("buyData").gradeName) + "&source=" + t.getStore("clientMsg").source + "&sid=" + t.getStore("clientMsg").sid + "&version=" + d + "&bizType=2"
  }
  function n() {
    for (var a = 0; a < arguments.length; a++)
      sessionStorage.getItem(arguments[a]) && sessionStorage.removeItem(arguments[a])
  }
  function o(a) {
    t.setStore("gearList", a),
      i(a),
      c(N - 1),
        0 == t.getStore("buyMesg").gradeTerm ? (ba.option.ruleCellVal = 100,
      ba.init(t.getStore("buyMesg"))) : ba.init(t.getStore("buyMesg")),
      l()
  }
  function p(a) {
    for (var b = 0; b < a.length; b++)
      if (0 == a[b].gradeTerm)
        return a[b].productList;
    return null
  }
  function q() {
    function c() {
      var c = H.find(".to-log")
        , g = H.find(".to-close")
        , h = t.getStore("clientMsg").sid;
      return h || !window.ShareHbSwitch ? (H.addClass("dp-n"),
        void a("#cgzBox").show().on("tap", function() {
          setTimeout(function() {
            var a = "app" === e ? "app" : "jrm"
              , c = "weixin" === e ? "" : f
              , d = "app" === e ? "70" : "71";
            t.setStore("jr_xb_noback", {
              back: 1
            }),
              b.location.href = "//ms.jr.jd.com/xb/h5/yuyue/redirect?source=" + a + "&version=" + d + "&sid=" + c
          }, 100)
        })) : (g.on("tap", function() {
        H.hide()
      }),
        void c.on("tap", function() {
          d("getpacket.html" + window.location.search)
        }))
    }
    function d(b) {
      var c = window.location.protocol + r.xbAl.xbServerUrl + "xb/client/redirect.action?version=" + g + "&source=" + e || "jrm";
      f ? window.location.href = b : k() ? window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5e6488a3d20bd1d7&redirect_uri=http%3a%2f%2fjrappgw.jd.com%2fwxjdissue%2fJDIssue%2flogin%3fsource%3d999%26uappType%3djdbt%26curOauthFlag%3d1%26returnUrl%3d" + encodeURIComponent(encodeURIComponent(c)) + "&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect" : /jdjr-app/.test(navigator.userAgent.toLowerCase()) ? a.waitFor(function() {
        return !!window.oBridgev3
      }, function() {
        var b = {
          type: 1,
          data: ""
        };
        window.oBridgev3.jsToGetResp(function(b) {
          "object" != typeof b && (b = a.parseJSON(b)),
            b && b.share || (window.location.href = c + "&sid=" + b.data)
        }, b)
      }) : window.location.href = "//passport.m.jd.com/user/login.action?v=t&sid=&returnurl=" + encodeURIComponent(c)
    }
    k() && a(".wx-tx").show(),
      j();
    var e = u.getQuery("source") || "jrm"
      , f = u.getQuery("sid") || ""
      , g = u.getQuery("version") || 5;
    a.setCookie("xbVersionTj", g, {
      expires: 10,
      domain: "jd.com"
    }),
      t.setStore("clientMsg", {
        source: e,
        sid: f,
        version: g
      }),
      t.setStore("isWeixn", {
        info: u.getQuery("info") || ""
      }),
      s.getAjax(r.xbAl.xbGetProductList, {
        sid: f,
        source: e,
        version: g
      }, function(b) {
        var c = p(b);
        t.getStore("clientMsg").sid && c ? s.getAjax(r.xbAl.xbgetHqInfo, {
          productId: c[0].releventId,
          sid: f,
          source: e
        }, function(c) {
          t.setStore("hqInfo", c),
            o(b),
            a.loading.showContent()
        }) : (o(b),
          a.loading.showContent())
      }),
      new Announce({
          pagelocation: "M0303"
        },"",function(a) {
          var b = document.getElementById("main-content");
          b.insertBefore(a, b.children[0])
        }
      ),
      !window.ShareHbSwitch || "app" !== u.getQuery("source") && "weixin" !== u.getQuery("source") || G.show().bind("tap", function() {
      a(this).simpleAnimationEnd(),
        a(this).addClass("toBig"),
        setTimeout(function() {
          window.location.href = "setpacket.html" + window.location.search
        }, 800)
    }),
      c()
  }
  var r = b.rouetMap()
    , s = a.libAjax()
    , t = a.store()
    , u = a.tools()
    , v = document.body.clientWidth
    , w = a("#gear")
    , x = (a("#rule"),
      a("#money"))
    , y = a("#gearCot")
    , z = (a("#ruleCot"),
      a("#moneyYq"))
    , A = a("#moneyMb")
    , B = a("#buyProductBtn")
    , C = a("#productName")
    , D = a("#showTips")
    , E = a("#tipsMsg")
    , F = a("#getDay")
    , G = a("#homeFhbBtn")
    , H = a("#adBox")
    , I = a("#productInfo")
    , J = a("#riskDesc")
    , K = '<li class="fl ho-h-250 dp-vc tx-c ft-col-999" style="width:#width"><span class="ho-h-to fm-fz ho-dq">&nbsp;</span><br /><span class="ho-h-tt fm-nbb ho-pn">&nbsp;</span><br /><span class="ho-h-th dp-n">&nbsp;</span></li>'
    , L = '<li class="fl ho-h-250 dp-vc tx-c ft-col-999" style="width:#width"><span class="ho-h-to fm-fz fm-nb ho-dq">#gradeName</span><br /><span class="ho-h-tt fm-nbb ho-pn"><span class="rateLow dp-n">#gradeLowestAnnualYieldRate~</span><span id="rateHigh">#gradeHighestAnnualYieldRate</span></span><br /><span class="ho-h-th ft-22 dp-n fm-fz ho-tp" id="rateIntro">#rateIntroContent</span><br />#promotionContent</li>'
    , M = '<li class="pt-24 pb-24"><span class="ft-col-999 tx-c  information-left">#inforTitle</span><span class="ft-col-666 information-right">#inforContent</span></li>'
    , N = 1
    , O = !1
    , P = null
    , Q = null
    , R = null
    , S = null
    , T = null
    , U = .1
    , V = null
    , W = null
    , X = null
    , Y = null
    , Z = !1
    , $ = null
    , _ = null
    , aa = null ;
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
    aa = setTimeout(function() {
      a()
    }, 15)
  }
    ,
    window.cancelAnimationFrame = window.cancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function(a) {
      clearTimeout(aa)
    }
  ;
  var ba = {
    option: {
      ruleCellWidth: 14,
      ruleCellHeightl: 12,
      ruleCellHeighth: 24,
      ruleLength: 100,
      ruleCellVal: 1e3,
      ruleStartX: 0,
      argsStartX: 0,
      ruleNowVal: 0,
      ruleSrartNum: 20,
      canvasWidth: 0,
      canvasHeight: 0,
      pointStartX: 0,
      pointEndX: 0,
      stopDraw: !1,
      totalMoney: 0,
      dMaxMoney: 199e3,
      defaultMon: 1e4
    },
    init: function(a) {
      a.productList[0].lowestInvestAmount;
      C.html(a.productList[0].productName);
      var b = a.productList[0].gradeTerm;
      F.html(0 == b ? "每天" : b + "天"),
        P = document.getElementById("ruleCot"),
        Q = P.getContext("2d"),
        P.width = 2 * P.offsetWidth,
        P.height = 2 * P.offsetHeight,
        ba.option.canvasWidth = 2 * P.offsetWidth,
        ba.option.canvasHeight = 2 * P.offsetHeight,
        P.style.width = "",
        P.style.height = "",
        ba.option.argsStartX = ba.returnX(ba.option.defaultMon),
        ba.option.ruleStartX = ba.option.argsStartX,
        ba.draw(),
        P.addEventListener("touchstart", ba.preDraw, !1),
        P.addEventListener("touchmove", ba.move, !1),
        P.addEventListener("touchend", ba.correct, !1)
    },
    returnX: function(a) {
      return ba.option.canvasWidth / ba.option.ruleCellWidth / 2 - a / ba.option.ruleCellVal
    },
    reDraw: function(a) {
      ba.option.ruleStartX = ba.returnX(a),
        ba.draw()
    },
    aniDraw: function(a, b) {
      var c = 6;
      _ = function() {
        if (a > .1) {
          if (b ? ba.option.ruleStartX = ba.option.ruleStartX + c : ba.option.ruleStartX = ba.option.ruleStartX - c,
            ba.option.totalMoney < t.getStore("buyData").lowestInvestAmount)
            return ba.option.ruleStartX = ba.returnX(t.getStore("buyData").lowestInvestAmount),
              E.html("起购金额" + t.getStore("buyData").lowestInvestAmount + "元"),
              ba.option.stopDraw = !1,
              D.show(),
              void ba.draw();
          if (ba.option.totalMoney > t.getStore("buyData").productAmount,
            ba.option.totalMoney > ba.option.dMaxMoney)
            return ba.option.ruleStartX = ba.returnX(ba.option.dMaxMoney),
                ba.option.dMaxMoney > 199e3 ? E.html("单笔最高50万元") : E.html("单笔最高19.9万元"),
              ba.option.stopDraw = !1,
              D.show(),
              void ba.draw();
          if (ba.option.ruleStartX > ba.option.canvasWidth / ba.option.ruleCellWidth / 2)
            return void (ba.option.stopDraw = !0);
          a = .95 * a,
            ba.draw(),
            c = .95 * c,
            requestAnimationFrame(_)
        } else
          ba.option.stopDraw = !0
      }
        ,
        window.requestAnimationFrame(_)
    },
    autoDraw: function() {
      ba.option.ruleStartX >= ba.option.argsStartX ? ba.draw() : (ba.draw(),
        ba.autoDraw()),
        ba.option.ruleStartX = ba.option.ruleStartX + U
    },
    drawText: function(a, b, c) {
      0 == t.getStore("buyMesg").gradeTerm && 1 > c && (c = 1),
        Q.save(),
        Q.fillStyle = "rgb(221, 221, 221)",
        Q.strokeStyle = "rgb(221, 221, 221)",
        Q.font = "lighter 24px HelveticaNeue-Bold",
        Q.textBaseline = "top",
        Q.textAlign = "center",
        Q.fillText(c, a, b),
        Q.restore()
    },
    draw: function() {
      if (!ba.option.stopDraw) {
        Q.clearRect(0, 0, ba.option.canvasWidth, ba.option.canvasHeight),
          Q.strokeStyle = "rgb(221,221,221)",
          Q.fillStyle = "#FFFFFF",
          Q.fillRect(0, 0, ba.option.canvasWidth, ba.option.canvasHeight);
        for (var a = ba.option.ruleStartX, b = 0; a < ba.option.canvasWidth / ba.option.ruleCellWidth; a++)
          if (!(0 > a)) {
            if (R = ba.option.ruleCellWidth * a,
              S = ba.option.canvasHeight,
              T = parseInt(a - ba.option.ruleStartX) * ba.option.ruleCellVal,
              parseInt(a - ba.option.ruleStartX) % 10) {
              if (R > 320 && T > ba.option.dMaxMoney)
                continue;Q.moveTo(R, S - ba.option.ruleCellHeightl),
                Q.lineTo(R, S)
            } else {
              if (R > 320 && T > ba.option.dMaxMoney)
                continue;Q.moveTo(R, S - ba.option.ruleCellHeighth),
                Q.lineTo(R, S),
                ba.drawText(R, S - 2.2 * ba.option.ruleCellHeighth, T)
            }
            if (b++,
              b >= ba.option.canvasWidth / ba.option.ruleCellWidth)
              break
          }
        if (Q.stroke(),
          Q.save(),
          Q.beginPath(),
          Q.strokeStyle = "rgb(255,128,26)",
          Q.translate(.5, 0),
          Q.moveTo(ba.option.canvasWidth / 2, 0),
          Q.lineTo(ba.option.canvasWidth / 2, ba.option.canvasHeight),
          Q.stroke(),
          Q.closePath(),
          Q.restore(),
          O) {
          var c = x.val() || 0;
          ba.option.totalMoney = c,
            t.setStore("allMoney", {
              money: c
            }),
            e(c)
        } else {
          var c = -Math.round(ba.option.ruleStartX - Math.round(ba.option.canvasWidth / ba.option.ruleCellWidth / 2)) * ba.option.ruleCellVal;
          ba.option.totalMoney = c,
            x.val(0 == c ? 1 : c),
            e(c),
            f(),
            t.setStore("allMoney", {
              money: c
            })
        }
        R = null ,
          S = null ,
          T = null ,
          a = null
      }
    },
    move: function(a) {
      if (a.preventDefault(),
        window.cancelAnimationFrame(_),
        ba.option.totalMoney < t.getStore("buyData").lowestInvestAmount && (ba.option.ruleStartX = ba.returnX(t.getStore("buyData").lowestInvestAmount),
        E.html("起购金额" + t.getStore("buyData").lowestInvestAmount + "元"),
        ba.option.stopDraw = !1,
        D.show()),
        ba.option.totalMoney > ba.option.dMaxMoney)
        ba.option.ruleStartX = ba.returnX(ba.option.dMaxMoney),
            ba.option.dMaxMoney > 199e3 ? E.html("单笔最高50万元") : E.html("单笔最高19.9万元"),
          ba.option.stopDraw = !1,
          D.show();
      else {
        ba.option.ruleStartX = (Math.round(1e3 * ba.option.ruleStartX) + (Math.round(100 * a.touches[0].clientX) - Math.round(100 * ba.option.pointStartX))) / 1e3,
          ba.option.pointStartX = Math.round(100 * a.touches[0].clientX) / 100;
        var b = new Date;
        W = b.getTime(),
          Y = a.changedTouches[0].clientX,
          $ = Math.abs((Y - X) / (W - V) * 10),
            $ > 4 ? ba.option.ruleStartX > ba.option.canvasWidth / ba.option.ruleCellWidth / 2 ? (ba.option.ruleStartX = ba.option.canvasWidth / ba.option.ruleCellWidth / 2,
          ba.option.stopDraw = !0) : Z = !0 : (Z = !1,
            ba.option.ruleStartX > ba.option.canvasWidth / ba.option.ruleCellWidth / 2 ? (ba.option.ruleStartX = ba.option.canvasWidth / ba.option.ruleCellWidth / 2,
          ba.option.stopDraw = !0) : (ba.option.stopDraw = !1,
          ba.draw()))
      }
    },
    correct: function(a) {
      if (Z) {
        var b = Y - X > 0;
        ba.option.stopDraw = !1,
          ba.aniDraw(Math.round($), b)
      }
      ba.option.totalMoney < t.getStore("buyData").lowestInvestAmount && (ba.option.ruleStartX = ba.returnX(t.getStore("buyData").lowestInvestAmount),
        E.html("起购金额" + t.getStore("buyData").lowestInvestAmount + "元"),
        ba.option.stopDraw = !1,
        D.show(),
        ba.draw()),
        ba.option.totalMoney > ba.option.dMaxMoney && (ba.option.ruleStartX = ba.returnX(ba.option.dMaxMoney),
          ba.option.dMaxMoney > 199e3 ? E.html("单笔最高50万元") : E.html("单笔最高19.9万元"),
        ba.option.stopDraw = !1,
        D.show(),
        ba.draw())
    },
    preDraw: function(a) {
      O = !1,
        Z = !1,
        window.cancelAnimationFrame(_),
        ba.option.stopDraw = !0;
      var b = new Date;
      V = b.getTime(),
        X = a.touches[0].clientX,
        ba.option.pointStartX = Math.round(100 * a.touches[0].clientX) / 100,
        ba.option.ruleStartX = ba.returnX(x.val()),
        ba.draw()
    }
  };
  window.getSidt = function(b) {
    if ("object" != typeof b && (b = a.parseJSON(b)),
      !b || !b.share) {
      var c = parseInt(x.val())
        , d = parseInt(c / Number(t.getStore("buyData").lowestInvestAmount))
        , e = t.getStore("buyData").gradeId = c;
      t.setStore("clientMsg", {
        sid: b.data,
        source: "app",
        version: 5
      }),
        t.removeStore("totalItem");
      r.xbAl.bxUrl + "?fillInsur=" + t.getStore("buyData").releventId + "&val=" + e + "&fs=" + d + "&gradeName=" + encodeURI(t.getStore("buyData").gradeName) + "&source=" + t.getStore("clientMsg").source + "&sid=" + t.getStore("clientMsg").sid + "&bizType=2";
      if (parseInt(e) > parseInt(t.getStore("buyData").canBuyAmout))
        return E.html("不能超过库存"),
          void D.show();
      var f = {};
      a.each(t.getStore("gearList"), function(a, b) {
        0 == b.gradeTerm && (f = b.productList)
      }),
        s.getAjax(r.xbAl.xbgetHqInfo, {
          productId: f[0].releventId,
          sid: decodeURIComponent(t.getStore("clientMsg").sid),
          source: "app"
        }, function(a) {
          t.setStore("hqInfo", a),
            m(e, d)
        })
    }
  }
    ,
    q(),
    function() {
      var b = a.getCookie("atJDM")
        , c = "http://st.360buyimg.com/common/commonH_B/js/m_common_header_bottom.js"
        , d = a("body")[0]
        , e = document.createElement("div");
      "1" === b && (e.id = "m_common_header",
        d.insertBefore(e, d.children[0]),
        a.getScript(c, function() {
          var a = new MCommonHeaderBottom
            , b = {
              hrederId: "m_common_header",
              title: document.title
            };
          a.header(b)
        }))
    }()
}(Zepto, window);
