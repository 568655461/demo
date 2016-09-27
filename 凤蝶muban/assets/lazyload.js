(function(root, factory){
	root.lazyload = factory(root);
})(window, function(root){
	var lazyload = {};
	var callback = function(){};

	var offset, poll, delay;

	function isHidden(elem){
		return (elem.offsetParent === null);
	}

	function inView(elem, view){
		if( isHidden(elem) ){
			return false;
		}
		var box = elem.getBoundingClientRect();
		return (box.left <= view.r && box.right >= view.l && box.top <= view.b && box.bottom >= view.t);
	}

	function isLoaded(elem){
		return elem.getAttribute('data-loaded') ? true : false;
	}

	function debounceOrThrottle(){
		if(!!poll){
			return;
		}
		clearTimeout(poll);
		poll = setTimeout(function(){
			lazyload.render();
			poll = null;
		}, delay);
	}

	lazyload.init = function(opts){
		var offsetAll = opts.offset || 0;
		var offsetVertical = opts.offsetVertical || offsetAll;
		var offsetHorizontal = opts.offsetHorizontal || offsetAll;

		var optionToInt = function(opt){
			return parseInt(opt, 10);
		}
		offset = {
			t: optionToInt(offsetVertical),
			b: optionToInt(offsetVertical),
			l: optionToInt(offsetHorizontal),
			r: optionToInt(offsetHorizontal)
		}
		callback = opts.callback || callback;
		delay = opts.throttle || 250;

		if(document.addEventListener){
			root.addEventListener('scroll', debounceOrThrottle, false);
			root.addEventListener('resize', debounceOrThrottle, false);
			root.addEventListener('DOMContentLoaded', debounceOrThrottle, false);
		}
	}
	lazyload.render = function(){
		var nodes = document.querySelectorAll('[data-lazyload]');
		var length = nodes.length,
			elem;
		var view = {
			t: 0 - offset.t,
			l: 0 - offset.l,
			b: (root.innerHeight || document.documentElement.clientHeight) + offset.b,
			r: (root.innerWidth || document.documentElement.clientWidth) + offset.r
		};
		for( var i = 0; i < length; i++ ){
			elem = nodes[i];
			if( inView(elem, view) && !isLoaded(elem) ){
				if(elem.nodeName === 'IMG'){
					elem.src = elem.getAttribute('data-lazyload');
				}else{
					elem.style.backgroundImage = "url("+ elem.getAttribute('data-lazyload') +")";
				}
				elem.setAttribute("data-loaded", true);
				callback(elem, 'load');
			}
		}
	}

	return lazyload;
});