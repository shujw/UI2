define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/shell/shell');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/shell/shellImpl');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/tuniu/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cz2q2Qj';
	this._flag_='5112c19f43c8f5169f62bd9eafb665bb';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
}}); 
return __result;});