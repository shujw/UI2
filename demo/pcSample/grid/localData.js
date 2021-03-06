define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};
	//加载数据
	Model.prototype.employeeDataCustomRefresh = function(event){
		var employee = event.source;
        $.ajax({
            type: "GET",
            url: require.toUrl('./json/employee.json'),
            dataType: 'json',
            async: false,
            cache: false,
            success: function(data){
            	employee.loadData(data);//将返回的数据加载到data组件
            },
            error: function(){
              throw justep.Error.create("加载数据失败");
            }
        });	
	};

	//返回
	Model.prototype.backClick = function(event){
		this.close();
	};

	
	return Model;
});