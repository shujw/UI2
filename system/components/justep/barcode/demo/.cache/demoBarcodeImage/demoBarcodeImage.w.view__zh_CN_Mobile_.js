window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_cfbbc841f6be4c059014d3191c62ea73l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_595bac08f33f4012acaea0064fcb6724l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_90db3411e1a649d0948a8415c756b6b8l_zh_CNs_d_m/system/core.min.js','/v_3136dc622e634da2847521c7c4548cbdl_zh_CNs_d_m/system/common.min.js','/v_44a64442dd0046348691e6f75131823el_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
