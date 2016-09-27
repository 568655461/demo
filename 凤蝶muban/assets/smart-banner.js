/**
 * SmartBanner���
 * @module smartBanner
 * @author yuguo.zhou@alibaba-inc.com
 * @date 2015-05-22
 */

(function(win) {
    var SmartBanner = function(options) {
        var that = this;

        this.options = options || {};
        //��ʼ������
        this.initEnv();
        //��ʼ��������
        this.initDownLoader();
    };

    SmartBanner.prototype = {
        constructor : SmartBanner,
        initEnv : function() {
            //��ʼ������ϵͳ
            var userAgent = navigator.userAgent,
                options = this.options;

            if (userAgent.match(/iPhone|iPod|iPad/i) != null) {
                this.platform = 'ios';
            } else if (userAgent.match(/Android|Linux/i) != null) {
                this.platform = 'android';
            }

            //��ʼ��ʱ���
            this.timeout = options.timeout || 1500;

            //��ʼ��iframe
            var _frame = document.createElement('frame');
            _frame.style.display = 'none';
            document.body.appendChild(_frame);
            this.frame = _frame;

        },
        initDownLoader : function() {
            var that = this;

            function clearIt() {
                console.log("clearit");
                clearTimeout(that.timeload);
                that.timeload = null;
            }

            // window.onblur = function() {
            // //�ͻ��˻���ȡ��timeout��ȡ�������¼�
            //
            // };
            window.addEventListener("pagehide", clearIt, !1);
            document.addEventListener("webkitvisibilitychange",  clearIt, !1);
            document.addEventListener("visibilitychange", clearIt, !1);
            document.addEventListener("WV.Event.APP.Background",  clearIt, !1);
            document.addEventListener("WV.Event.APP.Active",  clearIt, !1);
            window.addEventListener("blur",  clearIt, !1);

        },
        download : function(beginTime) {

            var that = this;
            var endTime = new Date().getTime();
            var bannerUrl = '';
            if (((endTime - beginTime) > (that.timeout + 200)) || navigator.userAgent.match(/AFWealth/i)) {//���ʱ�����timeoutʱ�䣬˵���ѻ���ͻ���
                clearTimeout(that.timeload);
                that.timeload = null;
                return;
            };

            if (this.platform == "ios") {
                bannerUrl = that.options.iosDown;
            } else {
                if(that.options.appid){
                    if( !that.options.data ){
                        bannerUrl = that.options.androidDown + "?scheme=" + encodeURIComponent("afwealth://platformapi/startapp?appid=" + that.options.appid + "&action=" + that.options.action) + '&fr=' + that.options.fr;
                    }else{
                        bannerUrl = that.options.androidDown + "?scheme=" + encodeURIComponent("afwealth://platformapi/startapp?appid=" + that.options.appid + "&action=" + that.options.action + "&" + that.getObj2Str(that.options.data)) + '&fr=' + that.options.fr;
                    }
                }else{
                    bannerUrl = that.options.androidDown + '?fr=' + that.options.fr;
                }
                //location.search;
            }
            win.location.href = bannerUrl;
        },
        getObj2Str : function(obj) {
            if(!obj) return "";
            var str = [];
            for (var k in obj) {
                str.push(k + "=" + encodeURIComponent(obj[k]));
            }
            return str.join("&");
        },
        redirect : function() {
            var that = this;
            var frame = that.frame;

            var op = that.options,
                _data = op.data;

            var paramUrl;
            if(op.url){
                paramUrl = op.url;
            }else{
                var paramStr = that.getObj2Str(_data);
                paramUrl = "afwealth://platformapi/startapp?appid=" + op.appid  +"&action=" + op.action + "&" + paramStr;
            }



            if(this.platform === "ios" && navigator.userAgent.indexOf("9_") != -1){
                location.href = paramUrl;
            }else{
                frame && frame.setAttribute('src', paramUrl);
            }
        },

        install : function() {
            var that = this;
            var beginTime = new Date().getTime();

            that.timeload = setTimeout(function() {
                that.download(beginTime);
                //����
            }, that.timeout);
            that.redirect();
            //����
        }
    };

    win.SmartBanner = SmartBanner;

})(window);
