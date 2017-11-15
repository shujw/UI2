define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/orderFood/user/orderFood'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cQjeqAn';
	this._flag_='cf31f9c703a269c161dcb0711ea4a28e';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":false,"defCols":{"calcImageURL":{"define":"EXPRESS","label":"calcImageURL","name":"calcImageURL","relation":"EXPRESS","rules":{"calculate":"js:$model.transURL('./img/'+val('fImage'))"},"type":"String"},"calcPriceText":{"define":"EXPRESS","label":"calcPriceText","name":"calcPriceText","relation":"EXPRESS","rules":{"calculate":"js:'¥ ' + val('fPrice') + '元'"},"type":"String"},"fCount":{"define":"fCount","label":"fCount","name":"fCount","relation":"fCount","rules":{"integer":true},"type":"Integer"},"fDescription":{"define":"fDescription","label":"fDescription","name":"fDescription","relation":"fDescription","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fImage":{"define":"fImage","label":"fImage","name":"fImage","relation":"fImage","type":"String"},"fName":{"define":"fName","label":"fName","name":"fName","relation":"fName","type":"String"},"fPrice":{"define":"fPrice","label":"fPrice","name":"fPrice","relation":"fPrice","rules":{"number":true},"type":"Float"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[]","isMain":false,"limit":6,"orderBys":[{"relation":"fID","type":1}],"queryAction":"queryFood","tableName":"takeout_food","url":"/justep/takeout","xid":"foodData"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"calcMoney":{"define":"calcMoney","label":"col3","name":"calcMoney","relation":"calcMoney","rules":{"calculate":"js:val('fPrice') * val('fCount')","number":true},"type":"Float"},"fCount":{"define":"fCount","label":"col2","name":"fCount","relation":"fCount","rules":{"integer":true},"type":"Integer"},"fFoodID":{"define":"fFoodID","label":"col4","name":"fFoodID","relation":"fFoodID","type":"String"},"fName":{"define":"fName","label":"col0","name":"fName","relation":"fName","type":"String"},"fPrice":{"define":"fPrice","label":"col1","name":"fPrice","relation":"fPrice","rules":{"number":true},"type":"Float"}},"directDelete":false,"events":{},"idColumn":"fFoodID","isMain":false,"limit":20,"xid":"cartData"});
 new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"calcCanClearCart":{"define":"calcCanClearCart","label":"col1","name":"calcCanClearCart","relation":"calcCanClearCart","rules":{"calculate":"js:$model.comp('cartData').count() > 0"},"type":"String"},"calcCanSaveOrder":{"define":"calcCanSaveOrder","label":"col0","name":"calcCanSaveOrder","relation":"calcCanSaveOrder","rules":{"calculate":"js:$model.comp('cartData').sum(\"calcMoney\") > 0"},"type":"String"},"calcCartCountText":{"define":"calcCartCountText","label":"col1","name":"calcCartCountText","relation":"calcCartCountText","rules":{"calculate":"js:($model.comp('cartData').count() > 0) ? '购物车(' + $model.comp('cartData').count() + ')' : '购物车'"},"type":"String"},"calcCartSumMoneyText":{"define":"calcCartSumMoneyText","label":"col0","name":"calcCartSumMoneyText","relation":"calcCartSumMoneyText","rules":{"calculate":"js:'¥ ' + $model.comp('cartData').sum('calcMoney') + '元'"},"type":"String"}},"directDelete":false,"events":{},"idColumn":"calcCanSaveOrder","isMain":false,"limit":20,"xid":"statusData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClassName":{"define":"fClassName","label":"标题","name":"fClassName","relation":"fClassName","type":"String"},"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"rootClassDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"rootClassData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClassName":{"define":"fClassName","label":"分类名称","name":"fClassName","relation":"fClassName","type":"String"},"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fRootID":{"define":"fRootID","label":"一级分类ID","name":"fRootID","relation":"fRootID","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"secondClassDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"secondClassData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClassImg":{"define":"fClassImg","label":"分类图片","name":"fClassImg","relation":"fClassImg","type":"String"},"fClassName":{"define":"fClassName","label":"分类名称","name":"fClassName","relation":"fClassName","type":"String"},"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fSecondID":{"define":"fSecondID","label":"二级分类ID","name":"fSecondID","relation":"fSecondID","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"threeClassDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"threeClassData"});
}}); 
return __result;});