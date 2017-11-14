define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/system/components/justep/data/demo/base'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c2M32Av';
	this._flag_='d830624798bb36edc65582931c11bfc9';
	this._wCfg_=[{"fString":"fstring","fInteger":233,"fFloat":23.60}];
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"FID":{"define":"FID","label":"FID","name":"FID","relation":"FID","type":"String"},"fDate":{"define":"fDate","label":"fDate","name":"fDate","relation":"fDate","rules":{"date":true},"type":"Date"},"fDateTime":{"define":"fDateTime","label":"fDateTime","name":"fDateTime","relation":"fDateTime","rules":{"datetime":true},"type":"DateTime"},"fFloat":{"define":"fFloat","label":"fFloat","name":"fFloat","relation":"fFloat","rules":{"number":true},"type":"Float"},"fInteger":{"define":"fInteger","label":"fInteger","name":"fInteger","relation":"fInteger","rules":{"constraint":{"message":"fInteger必须大于50","params":{"expr":"js:val('fInteger')>50"}},"integer":true},"type":"Integer"},"fString":{"define":"fString","label":"fString","name":"fString","relation":"fString","rules":{"required":{"message":"请填写String","params":{"expr":"js:true"}}},"type":"String"},"fTime":{"define":"fTime","label":"fTime","name":"fTime","relation":"fTime","rules":{"time":true},"type":"Time"}},"directDelete":false,"events":{},"idColumn":"FID","isMain":false,"limit":20,"xid":"masterData"});
}}); 
return __result;});