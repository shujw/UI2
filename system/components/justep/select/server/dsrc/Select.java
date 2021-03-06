import java.util.List;
import java.util.Map;

import org.dom4j.Element;

import com.justep.ui.component.ComponentContext;
import com.justep.ui.component.ComponentTemplate;
import com.justep.ui2.system.component.data.BaseDataDef;


public class Select implements ComponentTemplate {

	public void execute(Element bound, Map<String, String> dataItems, Map<String, Object> props, Map<String, String> events,
			Map<String, Object> context) {
		String optionLabel = bound.attributeValue("bind-optionsLabel");
		if(null!=optionLabel && !"".equals(optionLabel)){
			bound.addAttribute("bind-optionsText", "'"+optionLabel+"'");
			bound.remove(bound.attribute("bind-optionsLabel"));
		}
		
		String optionValue = bound.attributeValue("bind-optionsValue");
		if(null!=optionValue && !"".equals(optionValue)){
			bound.addAttribute("bind-optionsValue", "'"+optionValue+"'");
		}

		String optionCaption = bound.attributeValue("bind-optionsCaption");
		if(null!=optionCaption && !"".equals(optionCaption)){
			bound.addAttribute("bind-optionsCaption", "'"+optionCaption+"'");
		}
		
		String options = bound.attributeValue("bind-options");
		if(null!=options && !"".equals(options)){
			String str = options.replaceAll("\\$model.", "").replaceAll("\\$parent.", "");
			boolean isExpr = str.indexOf("(")>=0 || str.indexOf("'")>=0;
			//支持data的特殊处理，支持直接写data的xid
			Object dataDef = context.get("data." + str);
			//增加按xml查找data判断
			if(dataDef instanceof BaseDataDef || "sys.data".equals(dataDef) || (!isExpr && null!=bound.getDocument().selectSingleNode("//*[@xid='" + str	+ "' and starts-with(@component,'$model/UI2" +
					"/system/components/justep/data/')]"))) options = options+".datas";
			bound.addAttribute("bind-options", options);

			//生成select组件的selectOptionsAfterRender
			@SuppressWarnings("unchecked")
			List<String> init = (List<String>) context.get(ComponentContext.INIT);
			String js = "var justep = require('$UI/system/lib/justep');"
						+"if(!this['__justep__']) this['__justep__'] = {};"
						+"if(!this['__justep__'].selectOptionsAfterRender)"
						+"	this['__justep__'].selectOptionsAfterRender = function($element) {"
						+"		var comp = justep.Component.getComponent($element);"
						+"		if(comp) comp._addDefaultOption();"
						+"	};"
						+"if(!this['__justep__'].selectOptionsBeforeRender)"
						+"	this['__justep__'].selectOptionsBeforeRender = function($element) {"
						+"		var comp = justep.Component.getComponent($element);"
						+"		if(comp) comp._optionsBeforeRender();"
						+"	};";
			init.add(js);			
			bound.addAttribute("bind-optionsAfterRender2", "$model.__justep__.selectOptionsAfterRender.bind($model,$element)");
			bound.addAttribute("bind-optionsBeforeRender", "$model.__justep__.selectOptionsBeforeRender.bind($model,$element)");
		}
	}

}
