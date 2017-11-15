window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_00c1ec967a174147a901698cab400a9bl_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_284f1e13668746e9a6a3d4367ed16cf5l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_6dc8b24214dc40d3a29e4c67ad9a097el_zh_CNs_d_m/system/components/comp2.min.js','/v_9daf9ff70ff4452ead421de14bdf4263l_zh_CNs_d_m/system/core.min.js','/v_c5b272f8146448acb68f23ecdccaba8fl_zh_CNs_d_m/system/common.min.js','/v_1dd9fa99cd514d9497cf0ba95ea10098l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/dataOperation/dataOperation');
require('$model/UI2/system/components/bootstrap/table/table');
require('$model/UI2/system/components/justep/shell/shell');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/panel/panel');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/tuniu/index_main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cmm6ja2';
	this._flag_='545969a89bfc4224ab83f48f35b93b49';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"cityName":{"define":"cityName","name":"cityName","relation":"cityName","type":"String"},"inputVal":{"define":"inputVal","name":"inputVal","relation":"inputVal","type":"String"},"useTopClass":{"define":"useTopClass","name":"useTopClass","relation":"useTopClass","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"inputVal","initData":"[{\"inputVal\":\"马尔代夫\",\"useTopClass\":0,\"cityName\":\"北京\"}]","isMain":false,"limit":20,"xid":"data"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fPrice":{"define":"fPrice","label":"价格","name":"fPrice","relation":"fPrice","type":"String"},"fSatisfaction":{"define":"fSatisfaction","label":"满意度","name":"fSatisfaction","relation":"fSatisfaction","type":"String"},"fTitle":{"define":"fTitle","label":"标题","name":"fTitle","relation":"fTitle","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"{\"operation\":\"dataOperation1.refreshByGET\",\"args\":{\"url\":\"js: $model.toUrl('./json/productData.json')\",\"sync\":\"js:true\"}}"},"idColumn":"fID","isMain":false,"limit":20,"xid":"productData"});
 var __DataOP__ = require("$UI/system/components/justep/dataOperation/dataOperation");new __DataOP__(this,'dataOperation1');
}}); 
return __result;});
