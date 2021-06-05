gdjs.Selfeval_45MarchingCode = {};
gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1= [];
gdjs.Selfeval_45MarchingCode.GDmainmapbObjects2= [];
gdjs.Selfeval_45MarchingCode.GDselfcheckObjects1= [];
gdjs.Selfeval_45MarchingCode.GDselfcheckObjects2= [];
gdjs.Selfeval_45MarchingCode.GDselfcheckbuttonObjects1= [];
gdjs.Selfeval_45MarchingCode.GDselfcheckbuttonObjects2= [];
gdjs.Selfeval_45MarchingCode.GDbgObjects1= [];
gdjs.Selfeval_45MarchingCode.GDbgObjects2= [];
gdjs.Selfeval_45MarchingCode.GDNewObjectObjects1= [];
gdjs.Selfeval_45MarchingCode.GDNewObjectObjects2= [];
gdjs.Selfeval_45MarchingCode.GDquestionsObjects1= [];
gdjs.Selfeval_45MarchingCode.GDquestionsObjects2= [];

gdjs.Selfeval_45MarchingCode.conditionTrue_0 = {val:false};
gdjs.Selfeval_45MarchingCode.condition0IsTrue_0 = {val:false};
gdjs.Selfeval_45MarchingCode.condition1IsTrue_0 = {val:false};
gdjs.Selfeval_45MarchingCode.condition2IsTrue_0 = {val:false};
gdjs.Selfeval_45MarchingCode.condition3IsTrue_0 = {val:false};
gdjs.Selfeval_45MarchingCode.conditionTrue_1 = {val:false};
gdjs.Selfeval_45MarchingCode.condition0IsTrue_1 = {val:false};
gdjs.Selfeval_45MarchingCode.condition1IsTrue_1 = {val:false};
gdjs.Selfeval_45MarchingCode.condition2IsTrue_1 = {val:false};
gdjs.Selfeval_45MarchingCode.condition3IsTrue_1 = {val:false};


gdjs.Selfeval_45MarchingCode.mapOfGDgdjs_46Selfeval_9545MarchingCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1});gdjs.Selfeval_45MarchingCode.mapOfGDgdjs_46Selfeval_9545MarchingCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1});gdjs.Selfeval_45MarchingCode.mapOfGDgdjs_46Selfeval_9545MarchingCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1});gdjs.Selfeval_45MarchingCode.eventsList0 = function(runtimeScene) {

{


gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "MARCHING-BAND-PARADE_Trombone2.ogg", true, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1);

gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45MarchingCode.mapOfGDgdjs_46Selfeval_9545MarchingCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1);

gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val = false;
gdjs.Selfeval_45MarchingCode.condition1IsTrue_0.val = false;
gdjs.Selfeval_45MarchingCode.condition2IsTrue_0.val = false;
{
gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45MarchingCode.mapOfGDgdjs_46Selfeval_9545MarchingCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val ) {
{
gdjs.Selfeval_45MarchingCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Selfeval_45MarchingCode.condition1IsTrue_0.val ) {
{
{gdjs.Selfeval_45MarchingCode.conditionTrue_1 = gdjs.Selfeval_45MarchingCode.condition2IsTrue_0;
gdjs.Selfeval_45MarchingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11232668);
}
}}
}
if (gdjs.Selfeval_45MarchingCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1);

gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45MarchingCode.mapOfGDgdjs_46Selfeval_9545MarchingCode_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.Selfeval_45MarchingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Selfeval_45MarchingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Selfeval_45MarchingCode.GDmainmapbObjects1.length = 0;
gdjs.Selfeval_45MarchingCode.GDmainmapbObjects2.length = 0;
gdjs.Selfeval_45MarchingCode.GDselfcheckObjects1.length = 0;
gdjs.Selfeval_45MarchingCode.GDselfcheckObjects2.length = 0;
gdjs.Selfeval_45MarchingCode.GDselfcheckbuttonObjects1.length = 0;
gdjs.Selfeval_45MarchingCode.GDselfcheckbuttonObjects2.length = 0;
gdjs.Selfeval_45MarchingCode.GDbgObjects1.length = 0;
gdjs.Selfeval_45MarchingCode.GDbgObjects2.length = 0;
gdjs.Selfeval_45MarchingCode.GDNewObjectObjects1.length = 0;
gdjs.Selfeval_45MarchingCode.GDNewObjectObjects2.length = 0;
gdjs.Selfeval_45MarchingCode.GDquestionsObjects1.length = 0;
gdjs.Selfeval_45MarchingCode.GDquestionsObjects2.length = 0;

gdjs.Selfeval_45MarchingCode.eventsList0(runtimeScene);
return;

}

gdjs['Selfeval_45MarchingCode'] = gdjs.Selfeval_45MarchingCode;
