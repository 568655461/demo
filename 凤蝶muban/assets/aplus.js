/***********************************************
 * @name aplus
 * @author yuguozhou
 ***********************************************/

void function(win) {

	var doc = win.document;

	if (win["afwealth_tracker"] === 1)
		return;

	win["afwealth_tracker"] = 1;

	var isAlipay = navigator.userAgent.match(/AlipayClient\/([\d.]+)/igm) || navigator.userAgent.match(/AFWealth/i);

	var tracker = (function(win, doc) {

		var LOG_URL = '//kcart.alipay.com/web/bi.do?BIProfile=merge&d=',

		    COOKIE_REG = /(?:^|\s)cna=([^;]+)(?:;|$)/;

		function getApCNA() {

			return doc.cookie.match(COOKIE_REG);

		}

		function stringifyParam(obj) {

			//[{"page_type":"clk","pg":"http://docs.spmjs.io/mtracker/latest/examples/index.html?seed=testJsClick3","r":1432727175697}]

			var _str = [];

			for (var key in obj) {

				if (obj.hasOwnProperty(key)) {

					_str.push(key + "=" + obj[key]);

				}

			}

			return _str.join("&");

		}

		var _aplus = {

			queue : [],

			imgIndex : 0,

			init : function() {

				var that = this;

				// 如果处于loading状态，则注册load后发送统计队列
				if (isAlipay) {
					document.addEventListener('AlipayJSBridgeReady', function() {
						that.sendList();
					}, false);
				} else {
					if (doc.readyState === 'loading') {

						win.addEventListener("load", function() {

							that.sendList();

						}, false);

					}
				}

				//this.add("pv");

			},

			add : function(config) {

				var _ts = toString,
				    params = {},
				    _type = _ts.call(config);

				if (_type === "[object String]") {

					params = {
						"seed" : config
					};
				} else if (_type === "[object Object]") {
					params = config;
				}
				if (isAlipay) {
					if ( typeof AlipayJSBridge !== "undefined") {
						this.send(params);
					} else {
						this.queue.push(params);
					}
				} else {
					if (doc.readyState !== 'loading') {

						this.send(params);

					} else {

						this.queue.push(params);

					}
				}

			},

			sendList : function() {
				var list = this.queue;
				console.log("listlength:" + list.length);
				while (list.length) {

					this.send(list.shift());

				}

			},

			send : function(options) {
				var params = {};
				params["page_type"] = "clk";
				params["pg"] = location.href.split(/\?|#|;jsessionid=/)[0] + "?" + stringifyParam(options || {});
				params["r"] = Date.now();
				if (isAlipay) {
					var seed = "H5_MTRACKER_AP_OPEN";
					if(options["seed"] && options["seed"] === "clicked"){
						seed = "H5_MTRACKER_AP_CLK";	
					}
					
					AlipayJSBridge.call('remoteLog', {
						type : "monitor",
						seedId : seed,
						ucId : options["caseid"],
						param1 : location.href,
						param2 : options["logid"],
						param3 : options["fr"]||"",
						param4 : (options["data"]||"") + "&" + options["appid"]
					});
				} else {
					var imgObj = new Image(),
					    imgName = "hl_log_name" + this.imgIndex++;

					win[imgName] = imgObj;

					imgObj.onload = imgObj.onerror = function() {

						win[imgName] = null;

					};

					imgObj.src = LOG_URL + encodeURIComponent(JSON.stringify([params]));

					imgObj = null;
				}

			}
		};

		_aplus.init();

		return function(options) {
			_aplus.add(options);

		};

	})(win, doc);

	window['afwTracker'] = tracker;

}(window);