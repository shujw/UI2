define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	// 转换动态图片URL
	Model.prototype.transURL = function(url) {
		var tempUrl = require.toUrl(url);
		var index = tempUrl.indexOf('orderFood');
		var resultUrl = tempUrl.substr(0, index) + "takeout" + tempUrl.substr(index + 14);
		return resultUrl;
	};

	Model.prototype.addCartBtnClick = function(event) {
		var row = event.bindingContext.$object;
		var cartData = this.comp("cartData");
		console.dir(row);
		if (cartData.find([ 'fFoodID' ], [ row.val('fID') ]).length === 0) {
			cartData.newData({
				index : 0,
				defaultValues : [ {
					"fFoodID" : row.val("fID"),
					"fName" : row.val("fName"),
					"fPrice" : row.val("fPrice"),
					"fCount" : 1
				} ]
			});
			row.val("fCount", 1);
			// 设置组件属性值
		} else {
			var currentCartDataRow = cartData.find([ 'fFoodID' ], [ row.val('fID') ])[0];
			currentCartDataRow.val("fCount", currentCartDataRow.val("fCount") + 1);
			// this.comp('output5').set({"value":
			// currentCartDataRow.val("fCount")});
			row.val("fCount", currentCartDataRow.val("fCount"));
		}
	};

	Model.prototype.reduceCartBtnClick = function(event) {
		var row = event.bindingContext.$object;
		row.val("fCount", (row.val("fCount") > 0) ? row.val("fCount") - 1 : 0);
		var cartData = this.comp("cartData");
		if (cartData.find([ 'fFoodID' ], [ row.val('fID') ]).length === 0) {
			// TODO 按钮不显示设置
		} else {
			var currentCartDataRow = cartData.find([ 'fFoodID' ], [ row.val('fID') ])[0];
			currentCartDataRow.val("fCount", row.val("fCount"));
		}
	};

	Model.prototype.addCountBtnClick = function(event) {
		var row = event.bindingContext.$object;
		row.val("fCount", row.val("fCount") + 1);
		var foodData = this.comp("foodData");
		var currentfoodDataRow = foodData.find([ 'fID' ], [ row.val('fFoodID') ])[0];
			currentfoodDataRow.val("fCount", row.val("fCount"));
	};
	
	Model.prototype.reduceCountBtnClick = function(event) {
		var row = event.bindingContext.$object;
		row.val("fCount", (row.val("fCount") > 0) ? row.val("fCount") - 1 : 0);
		var foodData = this.comp("foodData");
		var currentfoodDataRow = foodData.find([ 'fID' ], [ row.val('fFoodID') ])[0];
			currentfoodDataRow.val("fCount", row.val("fCount"));
	};

	// 图片路径转换
	Model.prototype.getImageUrl = function(url) {
		return require.toUrl(url);
	};

	Model.prototype.showPopOver = function(event) {
		this.comp("popOver").show();
	};

	// 获取一级分类信息
	/*
	 * 1、默认显示当前一级菜单对应的二、三级数据 2、点击其它一级菜单，再加载它的二三级数据
	 */
	Model.prototype.rootClassDataCustomRefresh = function(event) {
		/*
		 * 1、加载一级分类数据
		 */
		var url = require.toUrl("./class/json/rootClassData.json");
		var rootClassData = event.source;
		rootClassData.clear();
		$.ajaxSettings.async = false;
		$.getJSON(url, function(data) {
			rootClassData.loadData(data);
		});
	};
	// 获取二级分类信息
	Model.prototype.secondClassDataCustomRefresh = function(event) {
		/*
		 * 1、加载二级分类数据
		 */
		var url = require.toUrl("./class/json/secondClassData.json");
		var secondClassData = event.source;
		secondClassData.clear();
		$.ajaxSettings.async = false;
		$.getJSON(url, function(data) {
			secondClassData.loadData(data);
		});
	};
	// 获取三级分类信息
	Model.prototype.threeClassDataCustomRefresh = function(event) {
		/*
		 * 1、加载三级分类数据
		 */
		var url = require.toUrl("./class/json/threeClassData.json");
		var threeClassData = event.source;
		threeClassData.clear();
		$.ajaxSettings.async = false;
		$.getJSON(url, function(data) {
			threeClassData.loadData(data);
		});
	};

	// 商品点击事件
	Model.prototype.listClick = function(event) {
		/*
		 * 1、获取当前商品ID 2、转到商品详细信息页，带参数 3、在详细页的接收事件中，从服务端过滤数据
		 * 
		 * 显示页面代码如下： justep.Shell.showPage("list",{ keyValue :
		 * this.comp("threeClassData").getValue("fClassName") });
		 */
	};

	return Model;
});