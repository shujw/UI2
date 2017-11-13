<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:mobile;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:112px;left:254px;width:140px;"> 
    <div component="$UI/system/components/justep/data/baasData" autoLoad="true"
      orderBy="fID:asc" xid="foodData" idColumn="fID" confirmDelete="true" queryAction="queryFood"
      tableName="takeout_food" url="/justep/takeout" limit="6" confirmRefresh="false"> 
      <column label="fID" name="fID" type="String" xid="default1"/>  
      <column label="fName" name="fName" type="String" xid="default2"/>  
      <column label="fPrice" name="fPrice" type="Float" xid="default3"/>  
      <column label="fDescription" name="fDescription" type="String" xid="default4"/>  
      <column label="fImage" name="fImage" type="String" xid="default5"/>  
      <column label="calcPriceText" name="calcPriceText" type="String" isCalculate="true"
        xid="default23"/>  
      <column label="calcImageURL" name="calcImageURL" type="String" isCalculate="true"
        xid="default24"/>  
      <rule xid="rule2"> 
        <col name="calcPriceText" xid="ruleCol2"> 
          <calculate xid="calculate2"> 
            <expr xid="default30">js:'¥ ' + val('fPrice') + '元'</expr> 
          </calculate> 
        </col>  
        <col name="calcImageURL" xid="ruleCol7"> 
          <calculate xid="calculate7"> 
            <expr xid="default35"><![CDATA[js:$model.transURL('./img/'+val('fImage'))]]></expr> 
          </calculate> 
        </col> 
      </rule>  
      <data xid="default6">[]</data> 
    </div>
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="cartData" idColumn="fFoodID"> 
      <column label="col4" name="fFoodID" type="String" xid="default41"/>  
      <column label="col0" name="fName" type="String" xid="default37"/>  
      <column label="col1" name="fPrice" type="Float" xid="default38"/>  
      <column label="col2" name="fCount" type="Integer" xid="default39"/>  
      <column label="col3" name="calcMoney" type="Float" xid="default40"/>  
      <rule xid="rule4"> 
        <col name="calcMoney" xid="ruleCol4"> 
          <calculate xid="calculate4"> 
            <expr xid="default27">js:val('fPrice') * val('fCount')</expr> 
          </calculate> 
        </col> 
      </rule> 
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="rootClassData" idColumn="fID" onCustomRefresh="rootClassDataCustomRefresh"> 
      <column label="id" name="fID" type="String" xid="default6"/>  
      <column label="标题" name="fClassName" type="String" xid="xid6"/> 
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="secondClassData" idColumn="fID" onCustomRefresh="secondClassDataCustomRefresh"> 
      <column label="id" name="fID" type="String" xid="xid1"/>  
      <column label="一级分类ID" name="fRootID" type="String" xid="xid2"/>  
      <column label="分类名称" name="fClassName" type="String" xid="xid3"/> 
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="threeClassData" onCustomRefresh="threeClassDataCustomRefresh" idColumn="fID"> 
      <column label="id" name="fID" type="String" xid="xid4"/>  
      <column label="二级分类ID" name="fSecondID" type="String" xid="xid5"/>  
      <column label="分类名称" name="fClassName" type="String" xid="xid7"/>  
      <column label="分类图片" name="fClassImg" type="String" xid="xid8"/> 
    </div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full x-card x-has-iosstatusbar"> 
    <div class="x-panel-top" height="49"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        title="桌号：9"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon"
            label="分类" xid="button6" icon="icon-chevron-left" onClick="{operation:'window.close'}"> 
            <i xid="i6" class="icon-chevron-left"/>  
            <span xid="span6">分类</span> 
          </a> 
        </div>  
        <div class="x-titlebar-title">桌号：9</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div xid="content" class="x-panel-content x-cards"> 
      <div component="$UI/system/components/bootstrap/row/row" class="row tb-box"> 
        <div class="col col-xs-3" xid="col10"> 
          <div component="$UI/system/components/justep/list/list" class="x-list tb-root"
            xid="rootClassList" data="rootClassData" dataItemAlias="rootClassRow"> 
            <ul class="x-list-template list-group" xid="listTemplateUl1"> 
              <li xid="li1" bind-css="{'current':rootClassRow.val('fID')==$model.rootClassData.val('fID')}"
                class="list-group-item text-center tb-nopadding"> 
                <h5 xid="h52" bind-text="ref('fClassName')" class="text-black"><![CDATA[]]></h5> 
              </li> 
            </ul> 
          </div> 
        </div>  
        <div class="col col-xs-9" xid="col11"> 
          <div component="$UI/system/components/justep/list/list" class="x-list x-cards"
            xid="foodList" data="foodData" limit="8"> 
            <ul class="x-list-template list-group" xid="listTemplateUl1"> 
              <li xid="li1" class="list-group-item"> 
                <div class="media"> 
                  <div class="media-left"> 
                    <img alt="" xid="image1" style="width:120px;height:89px;width:38vw;height: 25.333333333333vw;max-width:120px;max-height:89px;"
                      class="img-rounded media-object" bind-attr-src="val('calcImageURL')"/> 
                  </div>  
                  <div class="media-body"> 
                    <div component="$UI/system/components/justep/output/output"
                      class="x-output list-group-item-heading" xid="output1" bind-ref="ref('fName')"
                      style="font-size:14px;font-weight:bold"/>  
                    <div component="$UI/system/components/justep/output/output"
                      class="x-output list-group-item-text" xid="output2" bind-ref="ref('fDescription')"
                      style="font-size:x-small;"/>  
                    <a component="$UI/system/components/justep/button/button"
                      xid="addCartBtn" onClick="addCartBtnClick" icon="icon-ios7-plus-outline"
                      class="btn btn-icon-top pull-right x-card" style="padding:0;color:#EC8557;font-weight:bold;font-size:large;font-variant:normal;text-decoration:none;"> 
                      <i xid="i14" class="icon-ios7-plus-outline"/>  
                      <span xid="span10"/> 
                    </a>
                    <div component="$UI/system/components/justep/output/output"
                      class="x-output list-group-item-text" xid="output3" bind-ref="ref('calcPriceText')"
                      style="font-weight:normal;color:#F98C5C;"/> 
                  </div> 
                </div> 
              </li> 
            </ul> 
          </div> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
