window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_04d111b4c6434a2f8baf0dcb462b6a03l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_7e2bd0a8a0ec45eb86ae9398b9490833l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_758109ec312a4635b1ae266f75505485l_zh_CNs_d_m/system/core.min.js','/v_22e838e592504a7db7441228f5afa40cl_zh_CNs_d_m/system/common.min.js','/v_10be5949f5064ec28aca4fa6b9f66379l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
