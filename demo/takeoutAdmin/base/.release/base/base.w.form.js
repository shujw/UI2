define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/takeoutAdmin/base/base'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='false';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c7vMbe2';
	this._flag_='25edbc8b410290d28ae69e34268fd42a';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
}}); 
return __result;});