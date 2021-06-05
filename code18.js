gdjs.Selfeval_45MindanaoCode = {};
gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1= [];
gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects2= [];
gdjs.Selfeval_45MindanaoCode.GDselfcheckObjects1= [];
gdjs.Selfeval_45MindanaoCode.GDselfcheckObjects2= [];
gdjs.Selfeval_45MindanaoCode.GDselfcheckbuttonObjects1= [];
gdjs.Selfeval_45MindanaoCode.GDselfcheckbuttonObjects2= [];
gdjs.Selfeval_45MindanaoCode.GDbgObjects1= [];
gdjs.Selfeval_45MindanaoCode.GDbgObjects2= [];
gdjs.Selfeval_45MindanaoCode.GDNewObjectObjects1= [];
gdjs.Selfeval_45MindanaoCode.GDNewObjectObjects2= [];
gdjs.Selfeval_45MindanaoCode.GDquestionsObjects1= [];
gdjs.Selfeval_45MindanaoCode.GDquestionsObjects2= [];

gdjs.Selfeval_45MindanaoCode.conditionTrue_0 = {val:false};
gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0 = {val:false};
gdjs.Selfeval_45MindanaoCode.condition1IsTrue_0 = {val:false};
gdjs.Selfeval_45MindanaoCode.condition2IsTrue_0 = {val:false};
gdjs.Selfeval_45MindanaoCode.condition3IsTrue_0 = {val:false};
gdjs.Selfeval_45MindanaoCode.conditionTrue_1 = {val:false};
gdjs.Selfeval_45MindanaoCode.condition0IsTrue_1 = {val:false};
gdjs.Selfeval_45MindanaoCode.condition1IsTrue_1 = {val:false};
gdjs.Selfeval_45MindanaoCode.condition2IsTrue_1 = {val:false};
gdjs.Selfeval_45MindanaoCode.condition3IsTrue_1 = {val:false};


gdjs.Selfeval_45MindanaoCode.mapOfGDgdjs_46Selfeval_9545MindanaoCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1});gdjs.Selfeval_45MindanaoCode.mapOfGDgdjs_46Selfeval_9545MindanaoCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1});gdjs.Selfeval_45MindanaoCode.mapOfGDgdjs_46Selfeval_9545MindanaoCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1});gdjs.Selfeval_45MindanaoCode.eventsList0 = function(runtimeScene) {

{


gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Tungkil-[AudioTrimmer.com].ogg", true, 4, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1);

gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45MindanaoCode.mapOfGDgdjs_46Selfeval_9545MindanaoCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1);

gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val = false;
gdjs.Selfeval_45MindanaoCode.condition1IsTrue_0.val = false;
gdjs.Selfeval_45MindanaoCode.condition2IsTrue_0.val = false;
{
gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45MindanaoCode.mapOfGDgdjs_46Selfeval_9545MindanaoCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val ) {
{
gdjs.Selfeval_45MindanaoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Selfeval_45MindanaoCode.condition1IsTrue_0.val ) {
{
{gdjs.Selfeval_45MindanaoCode.conditionTrue_1 = gdjs.Selfeval_45MindanaoCode.condition2IsTrue_0;
gdjs.Selfeval_45MindanaoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11244772);
}
}}
}
if (gdjs.Selfeval_45MindanaoCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1);

gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45MindanaoCode.mapOfGDgdjs_46Selfeval_9545MindanaoCode_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.Selfeval_45MindanaoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Selfeval_45MindanaoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects1.length = 0;
gdjs.Selfeval_45MindanaoCode.GDmainmapbObjects2.length = 0;
gdjs.Selfeval_45MindanaoCode.GDselfcheckObjects1.length = 0;
gdjs.Selfeval_45MindanaoCode.GDselfcheckObjects2.length = 0;
gdjs.Selfeval_45MindanaoCode.GDselfcheckbuttonObjects1.length = 0;
gdjs.Selfeval_45MindanaoCode.GDselfcheckbuttonObjects2.length = 0;
gdjs.Selfeval_45MindanaoCode.GDbgObjects1.length = 0;
gdjs.Selfeval_45MindanaoCode.GDbgObjects2.length = 0;
gdjs.Selfeval_45MindanaoCode.GDNewObjectObjects1.length = 0;
gdjs.Selfeval_45MindanaoCode.GDNewObjectObjects2.length = 0;
gdjs.Selfeval_45MindanaoCode.GDquestionsObjects1.length = 0;
gdjs.Selfeval_45MindanaoCode.GDquestionsObjects2.length = 0;

gdjs.Selfeval_45MindanaoCode.eventsList0(runtimeScene);
return;

}

gdjs['Selfeval_45MindanaoCode'] = gdjs.Selfeval_45MindanaoCode;
