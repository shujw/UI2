window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_1cd9ff3745604ca0804da61d9d2755a4l_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_12cc1409e6db4c798bf48312285f6688l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_a4df432169534dfd8c1228918aa46493l_zh_CNs_desktopd_pc/system/core.min.js','/v_32c60ba8541948afb2d19967af2c8993l_zh_CNs_desktopd_pc/system/common.min.js','/v_3732328a568c47f78a955adf034831c8l_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/pcSample/text/roll'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c7BVNnq';
	this._flag_='bbbd4c4b0f5b523202b5f8aff74a0c53';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"new":{"define":"new","label":"新闻","name":"new","relation":"new","type":"String"}},"directDelete":false,"events":{},"idColumn":"new","initData":"[{\"new\":\"滚动新闻1\"},{\"new\":\"滚动新闻2\"},{\"new\":\"滚动新闻3\"},{\"new\":\"滚动新闻4\"},{\"new\":\"滚动新闻5\"}]","isMain":false,"limit":20,"xid":"newData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"customNew":{"define":"customNew","label":"新闻","name":"customNew","relation":"customNew","type":"String"}},"directDelete":false,"events":{},"idColumn":"customNew","initData":"[{\"customNew\":\"滚动新闻1\"},{\"customNew\":\"滚动新闻2\"},{\"customNew\":\"滚动新闻3\"},{\"customNew\":\"滚动新闻4\"},{\"customNew\":\"滚动新闻5\"}]","isMain":false,"limit":20,"xid":"customData"});
}}); 
return __result;});
