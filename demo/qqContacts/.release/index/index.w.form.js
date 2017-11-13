define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/panel/panel');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/qqContacts/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyeEBne';
	this._flag_='4c2eb3cbc0e0e61c036449881e1d9b63';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"count":{"define":"count","label":"人数","name":"count","relation":"count","rules":{"integer":true},"type":"Integer"},"groupName":{"define":"groupName","label":"分组","name":"groupName","relation":"groupName","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"lineCount":{"define":"lineCount","label":"在线人数","name":"lineCount","relation":"lineCount","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"groupName\":\"我的设备\"},{\"id\":\"2\",\"groupName\":\"手机通讯录\"},{\"id\":\"3\",\"groupName\":\"我的好友\"},{\"id\":\"4\",\"groupName\":\"同事\"}]","isMain":false,"limit":20,"xid":"groupData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"groupID":{"define":"groupID","label":"组ID","name":"groupID","relation":"groupID","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"img":{"define":"img","label":"头像","name":"img","relation":"img","type":"String"},"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"},"network":{"define":"network","label":"网络","name":"network","relation":"network","type":"String"},"note":{"define":"note","label":"备注","name":"note","relation":"note","type":"String"},"state":{"define":"state","label":"状态","name":"state","relation":"state","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"groupID\":\"1\",\"name\":\"我的电脑\",\"note\":\"无需数据线，手机轻松传文件到电脑\",\"network\":\"\",\"state\":\"在线\",\"img\":\"../../demo/qqContacts/img/1.jpg\"},{\"id\":\"2\",\"groupID\":\"1\",\"name\":\"我的打印机\",\"note\":\"将手机文件或照片发到电脑连接的打印机\",\"state\":\"离线\",\"img\":\"../../demo/qqContacts/img/2.jpg\"},{\"id\":\"3\",\"groupID\":\"1\",\"name\":\"发现新设备\",\"note\":\"搜索附近的设备，用QQ轻松连接设备。\",\"state\":\"离线\",\"img\":\"../../demo/qqContacts/img/3.jpg\"},{\"id\":\"4\",\"groupID\":\"2\",\"name\":\"Ciel\",\"network\":\"4G\",\"state\":\"在线\",\"img\":\"../../demo/qqContacts/img/4.jpg\"},{\"id\":\"5\",\"groupID\":\"2\",\"name\":\"曾经拥有\",\"note\":\"\",\"network\":\"W\",\"state\":\"在线\",\"img\":\"../../demo/qqContacts/img/5.jpg\"},{\"id\":\"6\",\"groupID\":\"2\",\"name\":\"华仔\",\"note\":\"想要改变命运，首先改变自己\",\"network\":\"W\",\"state\":\"在线\",\"img\":\"../../demo/qqContacts/img/6.jpg\"},{\"id\":\"7\",\"groupID\":\"2\",\"name\":\"御光剑影\",\"network\":\"3G\",\"state\":\"在线\",\"img\":\"../../demo/qqContacts/img/7.jpg\"},{\"id\":\"8\",\"groupID\":\"2\",\"name\":\"寒北\",\"network\":\"2G\",\"state\":\"在线\",\"img\":\"../../demo/qqContacts/img/8.jpg\"},{\"id\":\"9\",\"groupID\":\"2\",\"name\":\"被遗忘的角落\",\"note\":\"新的人生，新的自己，一切从新开始！\",\"network\":\"\",\"state\":\"离线\",\"img\":\"../../demo/qqContacts/img/9.jpg\"},{\"id\":\"10\",\"groupID\":\"3\",\"name\":\"泉哥\",\"note\":\"\",\"network\":\"3G\",\"state\":\"在线\",\"img\":\"../../demo/qqContacts/img/10.jpg\"},{\"id\":\"11\",\"groupID\":\"3\",\"name\":\"JACKIE\",\"note\":\"游戏化思维、社会化学习、专业化生存\",\"network\":\"\",\"state\":\"离线\",\"img\":\"../../demo/qqContacts/img/11.jpg\"},{\"id\":\"12\",\"groupID\":\"3\",\"name\":\"哈根达斯\",\"note\":\"\",\"state\":\"离线\",\"img\":\"../../demo/qqContacts/img/12.jpg\"}]","isMain":false,"limit":20,"xid":"contactData"});
}}); 
return __result;});