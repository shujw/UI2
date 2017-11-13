window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_0d037e7941204183828d5fb6d6739af2l_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_386a3b39b1114f1db458b4845c3f285cl_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_af40c796524942c0a6f703c9a58ad044l_zh_CNs_desktopd_pc/system/core.min.js','/v_a514a623ee554a7daa7a56aa003ec7d6l_zh_CNs_desktopd_pc/system/common.min.js','/v_a76e7159742f4793aedcf94fe6f8f056l_zh_CNs_desktopd_pc/system/components/comp.min.js','/v_b032551fec064b95968324d92b70c52el_zh_CNs_desktopd_pc/system/components/pc.addon.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/grid/grid');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/pcSample/layout/resource_distribute_role'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cbA7Bne';
	this._flag_='1a034b988db9977aad535689ff28ef59';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"ID","name":"fID","relation":"fID","type":"String"},"fName":{"define":"fName","label":"组织机构","name":"fName","relation":"fName","type":"String"},"fParentID":{"define":"fParentID","label":"父","name":"fParentID","relation":"fParentID","type":"String"},"fType":{"define":"fType","label":"类型","name":"fType","relation":"fType","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"roleDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"treeOption":{"isDelayLoad":false,"parentRelation":"fParentID"},"xid":"roleData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"fID":{"define":"fID","label":"ID","name":"fID","relation":"fID","type":"String"},"fName":{"define":"fName","label":"组织机构","name":"fName","relation":"fName","type":"String"},"fParentID":{"define":"fParentID","label":"父","name":"fParentID","relation":"fParentID","type":"String"},"fType":{"define":"fType","label":"类型","name":"fType","relation":"fType","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"resoureDataCustomRefresh"},"idColumn":"fID","isMain":false,"limit":20,"treeOption":{"isDelayLoad":false,"parentRelation":"fParentID"},"xid":"resourceData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"fName":{"define":"fName","label":"资源","name":"fName","relation":"fName","type":"String"}},"directDelete":false,"events":{},"idColumn":"fName","isMain":false,"limit":20,"xid":"selectData"});
}}); 
return __result;});
