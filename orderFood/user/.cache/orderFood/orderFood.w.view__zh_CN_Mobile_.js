window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_ee1cb0b44f884dd8a50db4ba4c8079d3l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_b471d0cfd3b149399303580f58bcc5a2l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_29e3a60fab2345ceb68e9f4a72cbc8f7l_zh_CNs_d_m/system/components/comp2.min.js','/v_75dd4a9b32fb42aabc02b299b6b01069l_zh_CNs_d_m/system/core.min.js','/v_fb8cea1b471b416cabcd5ddc1e4f0735l_zh_CNs_d_m/system/common.min.js','/v_64e0e3154503452782fa0fc578cfa41fl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/orderFood/user/orderFood'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cQjeqAn';
	this._flag_='cf31f9c703a269c161dcb0711ea4a28e';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":false,"defCols":{"calcImageURL":{"define":"EXPRESS","label":"calcImageURL","name":"calcImageURL","relation":"EXPRESS","rules":{"calculate":"js:$model.transURL('./img/'+val('fImage'))"},"type":"String"},"calcPriceText":{"define":"EXPRESS","label":"calcPriceText","name":"calcPriceText","relation":"EXPRESS","rules":{"calculate":"js:'¥ ' + val('fPrice') + '元'"},"type":"String"},"fDescription":{"define":"fDescription","label":"fDescription","name":"fDescription","relation":"fDescription","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fImage":{"define":"fImage","label":"fImage","name":"fImage","relation":"fImage","type":"String"},"fName":{"define":"fName","label":"fName","name":"fName","relation":"fName","type":"String"},"fPrice":{"define":"fPrice","label":"fPrice","name":"fPrice","relation":"fPrice","rules":{"number":true},"type":"Float"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[]","isMain":false,"limit":6,"orderBys":[{"relation":"fID","type":1}],"queryAction":"queryFood","tableName":"takeout_food","url":"/justep/takeout","xid":"foodData"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"calcMoney":{"define":"calcMoney","label":"col3","name":"calcMoney","relation":"calcMoney","rules":{"calculate":"js:val('fPrice') * val('fCount')","number":true},"type":"Float"},"fCount":{"define":"fCount","label":"col2","name":"fCount","relation":"fCount","rules":{"integer":true},"type":"Integer"},"fFoodID":{"define":"fFoodID","label":"col4","name":"fFoodID","relation":"fFoodID","type":"String"},"fName":{"define":"fName","label":"col0","name":"fName","relation":"fName","type":"String"},"fPrice":{"define":"fPrice","label":"col1","name":"fPrice","relation":"fPrice","rules":{"number":true},"type":"Float"}},"directDelete":false,"events":{},"idColumn":"fFoodID","isMain":false,"limit":20,"xid":"cartData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClassName":{"define":"fClassName","label":"标题","name":"fClassName","relation":"fClassName","type":"String"},"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"rootClassDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"rootClassData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClassName":{"define":"fClassName","label":"分类名称","name":"fClassName","relation":"fClassName","type":"String"},"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fRootID":{"define":"fRootID","label":"一级分类ID","name":"fRootID","relation":"fRootID","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"secondClassDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"secondClassData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClassImg":{"define":"fClassImg","label":"分类图片","name":"fClassImg","relation":"fClassImg","type":"String"},"fClassName":{"define":"fClassName","label":"分类名称","name":"fClassName","relation":"fClassName","type":"String"},"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fSecondID":{"define":"fSecondID","label":"二级分类ID","name":"fSecondID","relation":"fSecondID","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"threeClassDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"xid":"threeClassData"});
}}); 
return __result;});