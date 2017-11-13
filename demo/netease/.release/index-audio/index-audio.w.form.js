define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/netease/index-audio'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c32Af2i';
	this._flag_='6278f608d5e50ebcc3960c932516a56b';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClassID":{"define":"fClassID","label":"分类ID","name":"fClassID","relation":"fClassID","type":"String"},"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fOmit":{"define":"fOmit","label":"摘要","name":"fOmit","relation":"fOmit","type":"String"},"fPlayNumber":{"define":"fPlayNumber","label":"播放次数","name":"fPlayNumber","relation":"fPlayNumber","type":"String"},"fPostNumber":{"define":"fPostNumber","label":"跟帖量","name":"fPostNumber","relation":"fPostNumber","rules":{"calculate":"$row.val(\"fPostNumber\")>=0?$row.val(\"fPostNumber\")+\"跟贴\":\"\";","integer":true},"type":"Integer"},"fTime":{"define":"fTime","label":"时间","name":"fTime","relation":"fTime","type":"String"},"fTitle":{"define":"fTitle","label":"标题","name":"fTitle","relation":"fTitle","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"audioDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"audioData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"ID","name":"fID","relation":"fID","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"classDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"classData"});
}}); 
return __result;});