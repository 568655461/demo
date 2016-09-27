require('./index.css');

var main={
    init: function () {
        this.showBanner();
        this.load();
        this.getRequest();
        this.smartBanner();
        this.openPage();
        this.bindEvent();
    },
    showBanner: function () {
        this.ua = window.navigator.userAgent;
        this.smart = document.querySelector(".smartBanner");

        this.show = document.querySelector(".show");
        this.fixed = document.querySelector(".fixed-box");
        if(!this.ua.match(/(iPhone|iPod|Android|ios)/i)){
            this.smart.style.display="block";
            this.fixed.style.display="block";
            this.show.style.display="block";
            this.smart.style.bottom="50px";
        }else if (/afwealth/ig.test(this.ua)) {
            this.smart.style.display="none";
            this.show.style.display="block";
            this.fixed.style.display="block";
        } else {
            this.smart.style.display="block";
            this.show.style.display="none";
            this.fixed.style.display="none";
        };
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
            }, false);
        };
    },
    load: function () {
        lazyload.init({
            offset: 10, //提前10px加载
            throttle: 50, //每50ms触发一次加载
            callback: function(element, op) {

            }
        });
    },
    smartBanner: function () {
        var that=this,
            J_SmartBanner=document.querySelector("#J_SmartBanner");            console.log(that);

        that.smartBanner = new SmartBanner({
            iosDown: "https://itunes.apple.com/cn/app/ma-yi-ju-bao/id1025628019?mt=8",
            androidDown: "https://m.antfortune.com/app/android-download.htm",
            url:J_SmartBanner.getAttribute("data-link"),
            appid: 'h5',
            action: 'nav',
            data: {
                dest: "mywealth"
            },
            fr: that.fr
        });
    },
    openPage: function () {
        var that=this;
        that.afwTrackerFn('MY-1501-320',"gj-mg","openPage");
    },
    bindEvent: function () {
        var that=this;
        var fixedA=this.fixed.querySelector("a"),
            bannerA=this.show.querySelector("a"),
            btn=document.querySelector(".four-btn");
        btn.addEventListener("click", function () {
            if (/afwealth/ig.test(that.ua)){
                that.afwTrackerFn('MY-1601-619',"gj-mg-shangtou");
                window.location.href=this.getAttribute("data-link");
            }
        });
        fixedA.addEventListener("click", function () {
            that.afwTrackerFn('MY-1601-602',"gj-mg-jump");
            window.location.href=this.getAttribute("data-link");
        });
        bannerA.addEventListener("click", function () {
            that.afwTrackerFn('MY-1601-603',"gj-mg-more");
            window.location.href=this.getAttribute("data-link");
        });
        this.smart.addEventListener("click", function () {
            that.afwTrackerFn('MY-1601-602',"gj-mg-jump");
            that.smartBanner.install();
        });
    },
    afwTrackerFn: function (caseId,logid,seed) {
        var that=this;
        console.log(that);
        afwTracker({
            seed: seed||"clicked",
            caseid: caseId,
            logid: logid,
            fr: that.fr
        });
    },
    getRequest: function () {
        function getRequest() {
            var url = window.location.search;console.log(url);
            var request = {};
            if (url.indexOf('?') != -1) {
                var str = url.substr(1);
                var strs = str.split('&');
                for (var i = 0; i < strs.length; i++) {
                    request[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
                }
            }
            return request;
        };
        var params = getRequest();
        this.fr = params['fr'] || '6068';
    }
};
document.addEventListener("DOMContentLoaded", function () {
    main.init();
});

