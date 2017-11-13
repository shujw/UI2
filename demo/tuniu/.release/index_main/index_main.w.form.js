define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/dataOperation/dataOperation');
require('$model/UI2/system/components/bootstrap/table/table');
require('$model/UI2/system/components/justep/shell/shell');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/panel/panel');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/tuniu/index_main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cmm6ja2';
	this._flag_='545969a89bfc4224ab83f48f35b93b49';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"cityName":{"define":"cityName","name":"cityName","relation":"cityName","type":"String"},"inputVal":{"define":"inputVal","name":"inputVal","relation":"inputVal","type":"String"},"useTopClass":{"define":"useTopClass","name":"useTopClass","relation":"useTopClass","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"inputVal","initData":"[{\"inputVal\":\"马尔代夫\",\"useTopClass\":0,\"cityName\":\"北京\"}]","isMain":false,"limit":20,"xid":"data"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fPrice":{"define":"fPrice","label":"价格","name":"fPrice","relation":"fPrice","type":"String"},"fSatisfaction":{"define":"fSatisfaction","label":"满意度","name":"fSatisfaction","relation":"fSatisfaction","type":"String"},"fTitle":{"define":"fTitle","label":"标题","name":"fTitle","relation":"fTitle","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"{\"operation\":\"dataOperation1.refreshByGET\",\"args\":{\"url\":\"js: $model.toUrl('./json/productData.json')\",\"sync\":\"js:true\"}}"},"idColumn":"fID","isMain":false,"limit":20,"xid":"productData"});
 var __DataOP__ = require("$UI/system/components/justep/dataOperation/dataOperation");new __DataOP__(this,'dataOperation1');
}}); 
return __result;});