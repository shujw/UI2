define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/netease/index_main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ciUZ7fy';
	this._flag_='ff885f23c9a837667ebdf6b8b1474afa';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fOmit":{"define":"fOmit","label":"摘要","name":"fOmit","relation":"fOmit","type":"String"},"fPostNumber":{"define":"fPostNumber","label":"跟帖","name":"fPostNumber","relation":"fPostNumber","rules":{"calculate":"$row.val(\"fPostNumber\")>=0?$row.val(\"fPostNumber\")+\"跟贴\":\"\";","integer":true},"type":"Integer"},"fTitle":{"define":"fTitle","label":"标题","name":"fTitle","relation":"fTitle","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"productDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"newsData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"},"fUrl":{"define":"fUrl","label":"链接地址","name":"fUrl","relation":"fUrl","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"navDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"navData"});
}}); 
return __result;});