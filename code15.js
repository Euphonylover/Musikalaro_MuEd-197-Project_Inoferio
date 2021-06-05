gdjs.Selfeval_45CorCode = {};
gdjs.Selfeval_45CorCode.GDmainmapbObjects1= [];
gdjs.Selfeval_45CorCode.GDmainmapbObjects2= [];
gdjs.Selfeval_45CorCode.GDselfcheckObjects1= [];
gdjs.Selfeval_45CorCode.GDselfcheckObjects2= [];
gdjs.Selfeval_45CorCode.GDselfcheckbuttonObjects1= [];
gdjs.Selfeval_45CorCode.GDselfcheckbuttonObjects2= [];
gdjs.Selfeval_45CorCode.GDNewObjectObjects1= [];
gdjs.Selfeval_45CorCode.GDNewObjectObjects2= [];
gdjs.Selfeval_45CorCode.GDpaperbgObjects1= [];
gdjs.Selfeval_45CorCode.GDpaperbgObjects2= [];
gdjs.Selfeval_45CorCode.GDquestionsObjects1= [];
gdjs.Selfeval_45CorCode.GDquestionsObjects2= [];

gdjs.Selfeval_45CorCode.conditionTrue_0 = {val:false};
gdjs.Selfeval_45CorCode.condition0IsTrue_0 = {val:false};
gdjs.Selfeval_45CorCode.condition1IsTrue_0 = {val:false};
gdjs.Selfeval_45CorCode.condition2IsTrue_0 = {val:false};
gdjs.Selfeval_45CorCode.condition3IsTrue_0 = {val:false};
gdjs.Selfeval_45CorCode.conditionTrue_1 = {val:false};
gdjs.Selfeval_45CorCode.condition0IsTrue_1 = {val:false};
gdjs.Selfeval_45CorCode.condition1IsTrue_1 = {val:false};
gdjs.Selfeval_45CorCode.condition2IsTrue_1 = {val:false};
gdjs.Selfeval_45CorCode.condition3IsTrue_1 = {val:false};


gdjs.Selfeval_45CorCode.mapOfGDgdjs_46Selfeval_9545CorCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45CorCode.GDmainmapbObjects1});gdjs.Selfeval_45CorCode.mapOfGDgdjs_46Selfeval_9545CorCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45CorCode.GDmainmapbObjects1});gdjs.Selfeval_45CorCode.mapOfGDgdjs_46Selfeval_9545CorCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45CorCode.GDmainmapbObjects1});gdjs.Selfeval_45CorCode.eventsList0 = function(runtimeScene) {

{


gdjs.Selfeval_45CorCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45CorCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Selfeval_45CorCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Bamboo.ogg", true, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45CorCode.GDmainmapbObjects1);

gdjs.Selfeval_45CorCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45CorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45CorCode.mapOfGDgdjs_46Selfeval_9545CorCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.Selfeval_45CorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Selfeval_45CorCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.Selfeval_45CorCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.Selfeval_45CorCode.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45CorCode.GDmainmapbObjects1);

gdjs.Selfeval_45CorCode.condition0IsTrue_0.val = false;
gdjs.Selfeval_45CorCode.condition1IsTrue_0.val = false;
gdjs.Selfeval_45CorCode.condition2IsTrue_0.val = false;
{
gdjs.Selfeval_45CorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45CorCode.mapOfGDgdjs_46Selfeval_9545CorCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Selfeval_45CorCode.condition0IsTrue_0.val ) {
{
gdjs.Selfeval_45CorCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Selfeval_45CorCode.condition1IsTrue_0.val ) {
{
{gdjs.Selfeval_45CorCode.conditionTrue_1 = gdjs.Selfeval_45CorCode.condition2IsTrue_0;
gdjs.Selfeval_45CorCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11226508);
}
}}
}
if (gdjs.Selfeval_45CorCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45CorCode.GDmainmapbObjects1);

gdjs.Selfeval_45CorCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45CorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45CorCode.mapOfGDgdjs_46Selfeval_9545CorCode_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.Selfeval_45CorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Selfeval_45CorCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.Selfeval_45CorCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.Selfeval_45CorCode.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Selfeval_45CorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Selfeval_45CorCode.GDmainmapbObjects1.length = 0;
gdjs.Selfeval_45CorCode.GDmainmapbObjects2.length = 0;
gdjs.Selfeval_45CorCode.GDselfcheckObjects1.length = 0;
gdjs.Selfeval_45CorCode.GDselfcheckObjects2.length = 0;
gdjs.Selfeval_45CorCode.GDselfcheckbuttonObjects1.length = 0;
gdjs.Selfeval_45CorCode.GDselfcheckbuttonObjects2.length = 0;
gdjs.Selfeval_45CorCode.GDNewObjectObjects1.length = 0;
gdjs.Selfeval_45CorCode.GDNewObjectObjects2.length = 0;
gdjs.Selfeval_45CorCode.GDpaperbgObjects1.length = 0;
gdjs.Selfeval_45CorCode.GDpaperbgObjects2.length = 0;
gdjs.Selfeval_45CorCode.GDquestionsObjects1.length = 0;
gdjs.Selfeval_45CorCode.GDquestionsObjects2.length = 0;

gdjs.Selfeval_45CorCode.eventsList0(runtimeScene);
return;

}

gdjs['Selfeval_45CorCode'] = gdjs.Selfeval_45CorCode;
