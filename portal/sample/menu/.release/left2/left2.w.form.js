define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/portal/sample/menu/left2'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='false';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c7NRF7v';
	this._flag_='85cab8d8866484aca15369bce32f6992';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 require('$UI/system/components/bootstrap/lib/js/bootstrap');
}}); 
return __result;});