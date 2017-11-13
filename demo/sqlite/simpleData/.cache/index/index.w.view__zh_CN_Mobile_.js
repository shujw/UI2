window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_35ce56a96b954d35957b8fe8449eabe5l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_ece82ba6bf5a49c395921d21ce6e740dl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_afcdb2d7ffba43f8a5f3f0d293bacfc6l_zh_CNs_d_m/system/core.min.js','/v_02f3b643b1514a338a6b249ed00be352l_zh_CNs_d_m/system/common.min.js','/v_88f00abd56824469909b5b1f78a63a47l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/button/toggle');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/sqlite/simpleData/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cYFFvY3';
	this._flag_='8e4a3edfd3ec023bb5fa79418dd03d6d';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fBoolean":{"define":"fBoolean","label":"布尔型","name":"fBoolean","relation":"fBoolean","type":"Boolean"},"fDate":{"define":"fDate","label":"日期型","name":"fDate","relation":"fDate","rules":{"date":true},"type":"Date"},"fDateTime":{"define":"fDateTime","label":"日期时间型","name":"fDateTime","relation":"fDateTime","rules":{"datetime":true},"type":"DateTime"},"fDecimal":{"define":"fDecimal","label":"Decimal(18,4)","name":"fDecimal","relation":"fDecimal","rules":{"number":true},"type":"Decimal"},"fDouble":{"define":"fDouble","label":"双精度","name":"fDouble","relation":"fDouble","rules":{"number":true},"type":"Double"},"fFloat":{"define":"fFloat","label":"浮点数","name":"fFloat","relation":"fFloat","rules":{"number":true},"type":"Float"},"fInteger":{"define":"fInteger","label":"整型","name":"fInteger","relation":"fInteger","rules":{"integer":true},"type":"Integer"},"fLong":{"define":"fLong","label":"长整形","name":"fLong","relation":"fLong","rules":{"integer":true},"type":"Long"},"fString":{"define":"fString","label":"字符型","name":"fString","relation":"fString","type":"String"},"fTime":{"define":"fTime","label":"时间型","name":"fTime","relation":"fTime","rules":{"time":true},"type":"Time"}},"directDelete":false,"events":{"onCustomRefresh":"testDataCustomRefresh","onCustomSave":"testDataCustomSave"},"idColumn":"fString","isMain":false,"limit":5,"xid":"testData"});
}}); 
return __result;});
