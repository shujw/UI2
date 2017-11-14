define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/barcode/barcodeImage');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/system/components/justep/barcode/demo/demoBarcodeImage'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cjE3YZ3';
	this._flag_='5c96fd4514193662809f485ca68bef99';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"CN":{"define":"CN","label":"CN","name":"CN","relation":"CN","type":"String"},"description":{"define":"description","label":"描述","name":"description","relation":"description","type":"String"},"ean13":{"define":"ean13","label":"ean-13","name":"ean13","relation":"ean13","rules":{"integer":true},"type":"Integer"},"fAge":{"define":"fAge","label":"年龄","name":"fAge","relation":"fAge","rules":{"integer":true},"type":"Integer"},"fName":{"define":"fName","label":"显示名称","name":"fName","relation":"fName","type":"String"},"itf14":{"define":"itf14","label":"itf14","name":"itf14","relation":"itf14","rules":{"integer":true},"type":"Integer"},"qr":{"define":"qr","label":"qr","name":"qr","relation":"qr","type":"String"},"upca":{"define":"upca","label":"upc-a","name":"upca","relation":"upca","rules":{"integer":true},"type":"Integer"},"upce":{"define":"upce","label":"upc-e","name":"upce","relation":"upce","rules":{"integer":true},"type":"Integer"},"usps4cb":{"define":"usps4cb","label":"usps4cb","name":"usps4cb","relation":"usps4cb","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fName","initData":"[{description:' &nbsp &nbsp &nbsp描述：下面的条形码组件config全部为：{mw:0.6}，stretch全部为：true 二维码组件：stretch全部为：false', fName:'abcde',fAge:18,itf14:1234567890123,upca:12345678901,upce:1234567,ean13:123456789012,usps4cb:12345678901234567890,qr:'http://www.baidu.com',CN:'中华人民共和国'}]","isMain":false,"limit":20,"xid":"data1"});
}}); 
return __result;});