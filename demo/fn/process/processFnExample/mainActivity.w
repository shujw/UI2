<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:pc">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:30px;top:204px;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/bizData" autoLoad="false" xid="dataMain" concept="DEMO_Orders" autoNew="true" onAfterNew="dataMainAfterNew"><reader xid="default1" action="/demo/common/logic/action/queryDEMO_OrdersAction"></reader>
  <writer xid="default2" action="/demo/common/logic/action/saveDEMO_OrdersAction"></writer>
  <creator xid="default3" action="/demo/common/logic/action/createDEMO_OrdersAction"></creator></div></div> 
<div component="$UI/system/components/justep/toolBar/toolBar" class="x-toolbar form-inline x-toolbar-spliter" xid="toolBar1"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="流转" xid="button1" onClick="{operation:'process1.advance'}">
   <i xid="i1"></i>
   <span xid="span1">流转</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="回退" xid="button2" onClick="{operation:'process1.back'}">
   <i xid="i2"></i>
   <span xid="span2">回退</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="保存" xid="button3" onClick="{operation:'dataMain.save'}">
   <i xid="i3"></i>
   <span xid="span3">保存</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="流程图" xid="button4" onClick="{operation:'process1.showChart'}">
   <i xid="i4"></i>
   <span xid="span4">流程图</span></a></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="wdTestProcessFn" src="$UI/demo/common/process/dialogs/testFn.w" status="normal" width="60%" height="60%"></span><div component="$UI/system/components/justep/process/process" xid="process1" data="dataMain"></div><div class="x-cell-layout" component="$UI/system/components/justep/cellLayout/cellLayout" style="width:100%;height:150px;" xid="cellLayout1"><layout-content xid="default4"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="19" columnWidth="80" style="border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td ></td><td ></td><td  style="width: 180px;"></td><td ></td><td  style="width: 180px;"></td><td ></td><td  style="width: 180px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px;"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px;"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px; border-right-width: 1px; border-right-color: rgb(192, 192, 192); border-right-style: solid;">主键值</td><td  style="height: 19px; border: 1px solid rgb(192, 192, 192);" componentId="output1"></td><td  style="height: 19px; border-right-width: 1px; border-right-color: rgb(192, 192, 192); border-right-style: solid;">订单编号</td><td  style="height: 19px; border: 1px solid rgb(192, 192, 192);" componentId="input1"></td><td  style="height: 19px; border-right-width: 1px; border-right-color: rgb(192, 192, 192); border-right-style: solid;">订单日期</td><td  style="height: 19px; border: 1px solid rgb(192, 192, 192);" componentId="input2"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px;"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px;"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px; border-right-width: 1px; border-right-color: rgb(192, 192, 192); border-right-style: solid;">运费</td><td  style="height: 19px; border: 1px solid rgb(192, 192, 192);" componentId="input3"></td><td  style="height: 19px; border-right-width: 1px; border-right-color: rgb(192, 192, 192); border-right-style: solid;">收货人</td><td  style="height: 19px; border: 1px solid rgb(192, 192, 192);" componentId="input4"></td><td  style="height: 19px; border-right-width: 1px; border-right-color: rgb(192, 192, 192); border-right-style: solid;">收货地址</td><td  style="height: 19px; border: 1px solid rgb(192, 192, 192);" componentId="input5"></td></tr>
  </table>
]]></layout-content>
  <div component="$UI/system/components/justep/output/output" class="x-output x-cell-control" xid="output1" bind-ref="dataMain.ref('DEMO_Orders')"></div>
  <input component="$UI/system/components/justep/input/input" class="form-control x-cell-control" xid="input1" bind-ref="dataMain.ref('fOrderNumber')"></input>
  <input component="$UI/system/components/justep/input/input" class="form-control x-cell-control" xid="input2" bind-ref="dataMain.ref('fOrderDate')"></input>
  <input component="$UI/system/components/justep/input/input" class="form-control x-cell-control" xid="input3" bind-ref="dataMain.ref('fFreght')"></input>
  <input component="$UI/system/components/justep/input/input" class="form-control x-cell-control" xid="input4" bind-ref="dataMain.ref('fShipName')"></input>
  <input component="$UI/system/components/justep/input/input" class="form-control x-cell-control" xid="input5" bind-ref="dataMain.ref('fShipAddress')"></input></div>
  <div class="x-cell-layout" component="$UI/system/components/justep/cellLayout/cellLayout" style="width:100%;height:500px;" xid="cellLayout2"><layout-content xid="default5"><![CDATA[
  <table cellspacing="0" cellpadding="0" rowHeight="19" columnWidth="80" style="border-collapse:collapse;table-layout:fixed;width:1px;">
     <tr><td ></td><td  style="width: 15px;"></td><td  style="width: 210px;"></td><td  style="width: 10px;"></td><td  style="width: 300px;"></td><td  style="width: 10px;"></td><td  style="width: 210px;"></td><td  style="width: 10px;"></td><td  style="width: 300px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px;">测试</td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td></tr>
     <tr><td  style="height: 17px;"></td><td  style="height: 17px;"></td><td  colSpan="8" style="height: 17px; color: rgb(0, 0, 255);">本案例用于演示和测试流程中的模型函数，在流程图的条件分支环节中可以看到使用表单数据做流程规则的用法。</td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  colSpan="8" style="height: 19px; color: rgb(0, 0, 255);">本案例的流程模型参见：/BIZ/demo/fn/process/processFnExample/processFnExampleProcess.process.m。</td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  colSpan="8" style="height: 19px; color: rgb(0, 0, 255);">在流程模型中，除了会用到流程类的模型函数，还会大量用到组织类的模型函数及其他函数，相关内容请参看《函数案例》。</td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  colSpan="8" style="height: 8px; color: rgb(0, 0, 255); border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192);"></td></tr>
     <tr><td  style="height: 25px;"></td><td  style="height: 25px;"></td><td  colSpan="8" style="height: 25px; background-color: rgb(51, 102, 255); color: rgb(255, 255, 255); font-weight: bold; text-align: center;">流程函数</td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: right; font-weight: bold;">获取当前环节</td><td  style="height: 19px;"></td><td  style="height: 19px;" componentId="label2"></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: right; font-weight: bold;">获取当前环节名称</td><td  style="height: 19px;"></td><td  style="height: 19px;" componentId="label9"></td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: right; font-weight: bold; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;">获取当前流程</td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;" componentId="label3"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px; text-align: right; font-weight: bold; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;">获取当前流程名称</td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px;" componentId="label10"></td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px; border-top-style: solid; border-top-width: 1px; border-top-color: rgb(192, 192, 192);"></td><td  style="height: 8px;"></td><td  style="height: 8px; border-top-style: solid; border-top-width: 1px; border-top-color: rgb(192, 192, 192);"></td><td  style="height: 8px;"></td><td  style="height: 8px; border-top-style: solid; border-top-width: 1px; border-top-color: rgb(192, 192, 192);"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: right; font-weight: bold;">获取指定环节的提交者</td><td  style="height: 19px;"></td><td  style="height: 19px;" componentId="label4"></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: right; font-weight: bold;">获取指定环节的执行者</td><td  style="height: 19px;"></td><td  style="height: 19px;" componentId="label11"></td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: right; font-weight: bold;">获取指定环节的提交者所在机构</td><td  style="height: 19px;"></td><td  style="height: 19px;" componentId="label5"></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: right; font-weight: bold;">获取指定环节的执行者所在机构</td><td  style="height: 19px;"></td><td  style="height: 19px;" componentId="label12"></td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td  style="height: 15px;"></td><td  style="height: 15px;"></td><td  style="height: 15px; text-align: center; font-weight: bold; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 15px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  colSpan="6" style="height: 15px; color: rgb(0, 0, 255); border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;">在这组函数里：'START'表示首环节；'ALL'表示所有环节</td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px; border-top-style: solid; border-top-width: 1px; border-top-color: rgb(192, 192, 192);"></td><td  style="height: 8px;"></td><td  style="height: 8px; border-top-style: solid; border-top-width: 1px; border-top-color: rgb(192, 192, 192);"></td><td  style="height: 8px;"></td><td  style="height: 8px; border-top-style: solid; border-top-width: 1px; border-top-color: rgb(192, 192, 192);"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px; font-weight: bold; text-align: right;">判断流程是否正在启动</td><td  style="height: 19px;"></td><td  style="height: 19px;" componentId="label6"></td><td  style="height: 19px;"></td><td  style="height: 19px; font-weight: bold; text-align: right;">判断流程是否已经结束</td><td  style="height: 19px;"></td><td  style="height: 19px;" componentId="label13"></td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td  style="height: 25px;"></td><td  style="height: 25px;"></td><td  colSpan="8" style="height: 25px; border-top-style: solid; border-top-width: 1px; border-color: rgb(192, 192, 192); text-align: center; background-color: rgb(153, 204, 0); color: rgb(255, 255, 255); font-weight: bold;">流程中获取表单数据</td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: right; font-weight: bold; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;">获取流程关联的数据主键值</td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;" componentId="label7"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px; text-align: right; font-weight: bold; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  style="height: 19px;"></td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px; border-top-style: solid; border-top-width: 1px; border-color: rgb(192, 192, 192);"></td><td  style="height: 8px;"></td><td  style="height: 8px; border-top-style: solid; border-top-width: 1px; border-top-color: rgb(192, 192, 192); border-bottom-color: rgb(192, 192, 192); border-left-color: rgb(192, 192, 192);"></td><td  style="height: 8px;"></td><td  style="height: 8px; border-top-style: solid; border-top-width: 1px; border-color: rgb(192, 192, 192);"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: right; font-weight: bold; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;">获取表单中的运费</td><td  style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;"></td><td  colSpan="6" style="height: 19px; border-bottom-width: 1px; border-bottom-color: rgb(192, 192, 192); border-bottom-style: solid;" componentId="label8"></td></tr>
     <tr><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px; text-align: center; font-weight: bold;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  colSpan="8" style="height: 19px; color: rgb(255, 0, 0); font-weight: bold;">这里列出的只有一部分常用的模型函数，更多的模型函数请参看《X5 API手册》或模型表达式设计器。</td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px; text-align: center; font-weight: bold;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: center; font-weight: bold;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td></tr>
     <tr><td  style="height: 12px;"></td><td  style="height: 12px;"></td><td  style="height: 12px;"></td><td  style="height: 12px;"></td><td  style="height: 12px;"></td><td  style="height: 12px;"></td><td  style="height: 12px;"></td><td  style="height: 12px;"></td><td  style="height: 12px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td></tr>
     <tr><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td></tr>
     <tr><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td><td  style="height: 7px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td></tr>
     <tr><td  style="height: 9px;"></td><td  style="height: 9px;"></td><td  style="height: 9px;"></td><td  style="height: 9px;"></td><td  style="height: 9px;"></td><td  style="height: 9px;"></td><td  style="height: 9px;"></td><td  style="height: 9px;"></td><td  style="height: 9px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td></tr>
     <tr><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td><td  style="height: 8px;"></td></tr>
     <tr><td ></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: center; font-weight: bold;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td><td  style="height: 19px; text-align: center; font-weight: bold;"></td><td  style="height: 19px;"></td><td  style="height: 19px;"></td></tr>
  </table>
]]></layout-content>
  <label xid="label2" class=" x-cell-control" title="process"><![CDATA[currentActivity()]]></label>
  <label xid="label3" class=" x-cell-control" title="process"><![CDATA[currentProcess()]]></label>
  <label xid="label4" class=" x-cell-control" title="process"><![CDATA[findActivityCreator('businessActivity1')]]></label>
  <label xid="label5" class=" x-cell-control" title="process"><![CDATA[findActivityCreatorOgn('businessActivity1')]]></label>
  <label xid="label6" class=" x-cell-control" title="process"><![CDATA[isStartingProcess()]]></label>
  <label xid="label7" class=" x-cell-control" title="process"><![CDATA[getProcessData1()]]></label>
  <label xid="label8" class=" x-cell-control" title="process"><![CDATA[relationValue('DEMO_Orders', getProcessData1(), null, null, 'fFreght', '/demo/common/data')]]></label>
  <label xid="label9" class=" x-cell-control" title="process"><![CDATA[currentActivityLabel()]]></label>
  <label xid="label10" class=" x-cell-control" title="process"><![CDATA[currentProcessLabel()]]></label>
  <label xid="label11" class=" x-cell-control" title="process"><![CDATA[findActivityExecutor('businessActivity1')]]></label>
  <label xid="label12" class=" x-cell-control" title="process"><![CDATA[findActivityExecutorOgn('businessActivity1')]]></label>
  <label xid="label13" class=" x-cell-control" title="process"><![CDATA[isProcessFinished()]]></label></div></div>