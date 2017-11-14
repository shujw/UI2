define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/baas/masterDetail/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ceqErIn';
	this._flag_='912452a2fb192369b8b76a6f0e632691';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAddress":{"define":"fAddress","label":"fAddress","name":"fAddress","relation":"fAddress","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fName":{"define":"fName","label":"fName","name":"fName","relation":"fName","type":"String"},"fPhoneNumber":{"define":"fPhoneNumber","label":"fPhoneNumber","name":"fPhoneNumber","relation":"fPhoneNumber","type":"String"},"orderCount":{"define":"EXPRESS","label":"orderCount","name":"orderCount","relation":"EXPRESS","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fID","isMain":false,"limit":5,"queryAction":"queryUser","saveAction":"saveUser","tableName":"takeout_user","url":"/justep/demo","xid":"userData"});
 new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAddress":{"define":"fAddress","label":"fAddress","name":"fAddress","relation":"fAddress","type":"String"},"fContent":{"define":"fContent","label":"fContent","name":"fContent","relation":"fContent","type":"String"},"fCreateTime":{"define":"fCreateTime","label":"fCreateTime","name":"fCreateTime","relation":"fCreateTime","rules":{"datetime":true},"type":"DateTime"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fPhoneNumber":{"define":"fPhoneNumber","label":"fPhoneNumber","name":"fPhoneNumber","relation":"fPhoneNumber","type":"String"},"fSum":{"define":"fSum","label":"fSum","name":"fSum","relation":"fSum","rules":{"number":true},"type":"Float"},"fUserID":{"define":"fUserID","label":"fUserID","name":"fUserID","relation":"fUserID","type":"String"},"fUserName":{"define":"fUserName","label":"fUserName","name":"fUserName","relation":"fUserName","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","isMain":false,"limit":5,"master":{"relation":"fUserID","xid":"userData"},"queryAction":"queryOrder","saveAction":"saveOrder","tableName":"takeout_order","url":"/justep/demo","xid":"orderData"});
}}); 
return __result;});