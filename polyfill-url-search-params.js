/*
 *	orginal Source by https://stackoverflow.com/a/56984953
 *	
 *	This source is the result of converted by babel
 *	then Some fixed about getAll(param)
 *	
 *	by inqbs
*/
if(!window.URLSearchParams){
	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var URLSearchParams = function URLSearchParams(query) {
		var _this = this;

		_classCallCheck(this, URLSearchParams);

		this.getSearchObject = function () {
			var query = this.query;

			return query ? (/^[?#]/.test(query) ? query.slice(1) : query).split("&").reduce(function (params, param) {
				var _param$split = param.split("="),
				    _param$split2 = _slicedToArray(_param$split, 2),
				    key = _param$split2[0],
				    value = _param$split2[1];
				
				value = value ? decodeURIComponent(value.replace(/\+/g, " ")) : ";
				
				//	FIXED: params[key] 존재시 value를 array로
				if(params[key]){
					params[key].push? 
						params[key].push(value) : 
						(params[key] = [params[key], value]);
				}else{
					params[key] = value;
				}
				return params;
			}, {}) : {};
		};

		this.getAll = function (param) {
			var searchParams = _this.getSearchObject();
			return searchParams[param];
		};

		this.get = function (param) {
			var searchParams = _this.getSearchObject();
			return searchParams[param];
		};

		this.setUrl = function (param, value) {
			var searchParams = _this.getSearchObject();
			searchParams[param] = value;
			return Object.keys(searchParams).map(function (key) {
				return key + "=" + searchParams[key];
			}).join("&");
		};

		this.query = query;
	};
	
	window.URLSearchParams = URLSearchParams;
}