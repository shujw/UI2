define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/system/components/justep/controlGroup/demo/demo'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cmm6J32';
	this._flag_='8555159cb1ab69676a9e2c34395dc861';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAge":{"define":"fAge","label":"年龄","name":"fAge","relation":"fAge","rules":{"integer":true},"type":"Integer"},"fName":{"define":"fName","label":"名称","name":"fName","relation":"fName","type":"String"},"fSex":{"define":"fSex","label":"性别","name":"fSex","relation":"fSex","type":"String"},"fText":{"define":"fText","label":"说明信息","name":"fText","relation":"fText","type":"String"}},"directDelete":false,"events":{},"idColumn":"fName","initData":"[{fName:'张三',fAge:18,fText:'自我介绍...'},{fName:'test',fAge:28,fText:'自我介绍...'}]","isMain":false,"limit":20,"xid":"mainData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fName":{"define":"fName","label":"显示名称","name":"fName","relation":"fName","type":"String"},"fValue":{"define":"fValue","label":"值","name":"fValue","relation":"fValue","type":"String"}},"directDelete":false,"events":{},"idColumn":"fValue","initData":"[{fValue:'1',fName:'男'},{fValue:'0',fName:'女'}]","isMain":false,"limit":20,"xid":"data1"});
}}); 
return __result;});