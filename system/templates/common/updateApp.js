define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var templateService = require("$UI/system/templates/common/js/templateService");
	
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.modelLoad = function(event) {
		
		this.templateEngine = this.getParent().templateEngine;
		this.templateFile = this.templateEngine.config.items[0].file;
		var currentDir = this.templateEngine.getTargetPath();
		this.rootDir = currentDir.indexOf('UI2')==-1?currentDir.substring(0,currentDir.indexOf('UI')+2):currentDir.substring(0,currentDir.indexOf('UI2')+3);
	};
	
	Model.prototype.getTitle = function(wizard){
		return 'app地址配置';
	};
	
	Model.prototype.hasCancelBtn = function(wizard) {
		return true;
	};
	
	Model.prototype.hasBackBtn = function(wizard) {	
		return true;
	};
	
	Model.prototype.hasNextBtn = function(wizard) {
		return false;
	};
	
	Model.prototype.hasFinishBtn = function(wizard) {
		return true;
	};
	
	Model.prototype.backPage = function(wizard){
		wizard.back(this);
	};
	Model.prototype.validate = function(wizard) {
		return true;
	};
	
	Model.prototype.finish = function(wizard) {
		
		var indexUrl = this.comp('wechatInput').val();
		var apkPlusPath = this.comp('badAdroidInput').val();
		var apkPath = this.comp('androidInput').val();
		var ipaPath = this.comp('isoInput').val();
		this.templateEngine.addContext(this.templateFile, "apkPath", apkPath);
		this.templateEngine.addContext(this.templateFile, "apkPlusPath", apkPlusPath);
		this.templateEngine.addContext(this.templateFile, "ipaPath", ipaPath);
		this.templateEngine.addContext(this.templateFile, "indexUrl", indexUrl);

		
	};



	return Model;
});