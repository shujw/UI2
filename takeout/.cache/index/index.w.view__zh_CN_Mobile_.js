window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_bbf8c0e198fe45dab8492c35eec9f415l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_015e2754b8534e49a8f23c03448e2922l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_edbfebb12f024cceb254500a6da9bab3l_zh_CNs_d_m/system/components/comp2.min.js','/v_ccaecce520914ca7939b78f99a0ce605l_zh_CNs_d_m/system/core.min.js','/v_13ed922986ee421d8fc1741b044c4bf6l_zh_CNs_d_m/system/common.min.js','/v_97885003675c4e339a11d713a18f14b3l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/bootstrap/inputGroup/inputGroup');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/bootstrap/panel/panel');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/takeout/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cJVvymi';
	this._flag_='4d08d536f11ed0115d1654475c676e5c';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":false,"defCols":{"calcImageURL":{"define":"EXPRESS","label":"calcImageURL","name":"calcImageURL","relation":"EXPRESS","rules":{"calculate":"js:$model.transURL('./img/'+val('fImage'))"},"type":"String"},"calcPriceText":{"define":"EXPRESS","label":"calcPriceText","name":"calcPriceText","relation":"EXPRESS","rules":{"calculate":"js:'¥ ' + val('fPrice') + '元'"},"type":"String"},"fDescription":{"define":"fDescription","label":"fDescription","name":"fDescription","relation":"fDescription","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fImage":{"define":"fImage","label":"fImage","name":"fImage","relation":"fImage","type":"String"},"fName":{"define":"fName","label":"fName","name":"fName","relation":"fName","type":"String"},"fPrice":{"define":"fPrice","label":"fPrice","name":"fPrice","relation":"fPrice","rules":{"number":true},"type":"Float"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[]","isMain":false,"limit":6,"orderBys":[{"relation":"fID","type":1}],"queryAction":"queryFood","tableName":"takeout_food","url":"/justep/takeout","xid":"foodData"});
 new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAddress":{"define":"fAddress","label":"col2","name":"fAddress","relation":"fAddress","type":"String"},"fID":{"define":"fID","label":"col3","name":"fID","relation":"fID","type":"String"},"fName":{"define":"fName","label":"col0","name":"fName","relation":"fName","type":"String"},"fPhoneNumber":{"define":"fPhoneNumber","label":"col1","name":"fPhoneNumber","relation":"fPhoneNumber","type":"String"}},"directDelete":false,"events":{},"filters":{"userFilter":"fID = :user"},"idColumn":"fID","isMain":false,"limit":20,"queryAction":"queryUser","saveAction":"save","tableName":"takeout_user","url":"/justep/takeout","xid":"userData"});
 new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fAddress":{"define":"fAddress","label":"col4","name":"fAddress","relation":"fAddress","type":"String"},"fContent":{"define":"fContent","label":"col1","name":"fContent","relation":"fContent","type":"String"},"fCreateTime":{"define":"fCreateTime","label":"col0","name":"fCreateTime","relation":"fCreateTime","rules":{"datetime":true},"type":"DateTime"},"fID":{"define":"fID","label":"col6","name":"fID","relation":"fID","type":"String"},"fPayState":{"define":"fPayState","label":"col8","name":"fPayState","relation":"fPayState","rules":{"integer":true},"type":"Integer"},"fPhoneNumber":{"define":"fPhoneNumber","label":"col5","name":"fPhoneNumber","relation":"fPhoneNumber","type":"String"},"fSum":{"define":"fSum","label":"col2","name":"fSum","relation":"fSum","rules":{"number":true},"type":"Float"},"fUserID":{"define":"fUserID","label":"col3","name":"fUserID","relation":"fUserID","type":"String"},"fUserName":{"define":"fUserName","label":"col7","name":"fUserName","relation":"fUserName","type":"String"}},"directDelete":false,"events":{"onSaveCreateParam":"orderDataSaveCreateParam"},"filters":{"filter0":"","userFilter":"fUserID = :user"},"idColumn":"fID","isMain":false,"limit":10,"orderBys":[{"relation":"fCreateTime","type":0}],"queryAction":"queryOrder","saveAction":"save","tableName":"takeout_order","url":"/justep/takeout","xid":"orderData"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"calcMoney":{"define":"calcMoney","label":"col3","name":"calcMoney","relation":"calcMoney","rules":{"calculate":"js:val('fPrice') * val('fCount')","number":true},"type":"Float"},"fCount":{"define":"fCount","label":"col2","name":"fCount","relation":"fCount","rules":{"integer":true},"type":"Integer"},"fFoodID":{"define":"fFoodID","label":"col4","name":"fFoodID","relation":"fFoodID","type":"String"},"fName":{"define":"fName","label":"col0","name":"fName","relation":"fName","type":"String"},"fPrice":{"define":"fPrice","label":"col1","name":"fPrice","relation":"fPrice","rules":{"number":true},"type":"Float"}},"directDelete":false,"events":{},"idColumn":"fFoodID","isMain":false,"limit":20,"xid":"cartData"});
 new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"calcCanClearCart":{"define":"calcCanClearCart","label":"col1","name":"calcCanClearCart","relation":"calcCanClearCart","rules":{"calculate":"js:$model.comp('cartData').count() > 0"},"type":"String"},"calcCanSaveOrder":{"define":"calcCanSaveOrder","label":"col0","name":"calcCanSaveOrder","relation":"calcCanSaveOrder","rules":{"calculate":"js:$model.comp('cartData').sum(\"calcMoney\") > 0"},"type":"String"},"calcCartCountText":{"define":"calcCartCountText","label":"col1","name":"calcCartCountText","relation":"calcCartCountText","rules":{"calculate":"js:($model.comp('cartData').count() > 0) ? '购物车(' + $model.comp('cartData').count() + ')' : '购物车'"},"type":"String"},"calcCartSumMoneyText":{"define":"calcCartSumMoneyText","label":"col0","name":"calcCartSumMoneyText","relation":"calcCartSumMoneyText","rules":{"calculate":"js:'¥ ' + $model.comp('cartData').sum('calcMoney') + '元'"},"type":"String"}},"directDelete":false,"events":{},"idColumn":"calcCanSaveOrder","isMain":false,"limit":20,"xid":"statusData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","name":"fID","relation":"fID","type":"String"},"fPayType":{"define":"fPayType","label":"支付方式","name":"fPayType","relation":"fPayType","type":"String"},"fPayTypeLabel":{"define":"fPayTypeLabel","label":"支付方式名字","name":"fPayTypeLabel","relation":"fPayTypeLabel","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fPayType\":\"weixin\",\"fPayTypeLabel\":\"微信支付\"},{\"fID\":\"2\",\"fPayType\":\"alipay\",\"fPayTypeLabel\":\"支付宝支付\"},{\"fID\":\"3\",\"fPayType\":\"weixinJSSDK\",\"fPayTypeLabel\":\"微信内支付\"},{\"fID\":\"4\",\"fPayType\":\"faceToFace\",\"fPayTypeLabel\":\"货到付款\"},{\"fID\":\"5\",\"fPayType\":\"union\",\"fPayTypeLabel\":\"银联支付\"}]","isMain":false,"limit":20,"xid":"payData"});
}}); 
return __result;});
