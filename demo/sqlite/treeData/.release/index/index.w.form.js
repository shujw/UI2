define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/tree/tree');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/breadcrumb/breadcrumb');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/sqlite/treeData/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c6viqaa';
	this._flag_='fb6535d3d3f3d8a7c748b910b892d081';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fName":{"define":"fName","label":"fName","name":"fName","relation":"fName","type":"String"},"fParentID":{"define":"fParentID","label":"fParentID","name":"fParentID","relation":"fParentID","type":"String"},"fType":{"define":"fType","label":"fType","name":"fType","relation":"fType","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"regionDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"treeOption":{"isDelayLoad":false,"parentRelation":"fParentID"},"xid":"regionData"});
}}); 
return __result;});