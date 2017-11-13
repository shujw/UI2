define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/pcSample/navigator'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cAjeIVn';
	this._flag_='d1d08ea6a1074798999459e196075842';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"},"src":{"define":"src","label":"地址","name":"src","relation":"src","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"gridDataCustomRefresh"},"idColumn":"name","isMain":false,"limit":20,"xid":"gridData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"},"src":{"define":"src","label":"地址","name":"src","relation":"src","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"formsDataCustomRefresh"},"idColumn":"name","isMain":false,"limit":20,"xid":"formsData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"Name","name":"name","relation":"name","type":"String"},"src":{"define":"src","label":"Src","name":"src","relation":"src","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"navigatorDataCustomRefresh"},"idColumn":"name","isMain":false,"limit":20,"xid":"navigatorData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"},"src":{"define":"src","label":"地址","name":"src","relation":"src","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"formsDataCustomRefresh"},"idColumn":"name","isMain":false,"limit":20,"xid":"textData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"Name","name":"name","relation":"name","type":"String"},"src":{"define":"src","label":"Src","name":"src","relation":"src","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"tableDataCustomRefresh"},"idColumn":"name","isMain":false,"limit":20,"xid":"tableData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"Name","name":"name","relation":"name","type":"String"},"src":{"define":"src","label":"Src","name":"src","relation":"src","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"formElementDataCustomRefresh"},"idColumn":"name","isMain":false,"limit":20,"xid":"formElementData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"Name","name":"name","relation":"name","type":"String"},"src":{"define":"src","label":"Src","name":"src","relation":"src","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"layoutDataCustomRefresh"},"idColumn":"name","isMain":false,"limit":20,"xid":"layoutData"});
}}); 
return __result;});