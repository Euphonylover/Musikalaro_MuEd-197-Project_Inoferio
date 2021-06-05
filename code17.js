gdjs.Selfeval_45RondallaCode = {};
gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1= [];
gdjs.Selfeval_45RondallaCode.GDmainmapbObjects2= [];
gdjs.Selfeval_45RondallaCode.GDselfcheckObjects1= [];
gdjs.Selfeval_45RondallaCode.GDselfcheckObjects2= [];
gdjs.Selfeval_45RondallaCode.GDselfcheckbuttonObjects1= [];
gdjs.Selfeval_45RondallaCode.GDselfcheckbuttonObjects2= [];
gdjs.Selfeval_45RondallaCode.GDpaperbgObjects1= [];
gdjs.Selfeval_45RondallaCode.GDpaperbgObjects2= [];
gdjs.Selfeval_45RondallaCode.GDNewObjectObjects1= [];
gdjs.Selfeval_45RondallaCode.GDNewObjectObjects2= [];
gdjs.Selfeval_45RondallaCode.GDquestionsObjects1= [];
gdjs.Selfeval_45RondallaCode.GDquestionsObjects2= [];

gdjs.Selfeval_45RondallaCode.conditionTrue_0 = {val:false};
gdjs.Selfeval_45RondallaCode.condition0IsTrue_0 = {val:false};
gdjs.Selfeval_45RondallaCode.condition1IsTrue_0 = {val:false};
gdjs.Selfeval_45RondallaCode.condition2IsTrue_0 = {val:false};
gdjs.Selfeval_45RondallaCode.condition3IsTrue_0 = {val:false};
gdjs.Selfeval_45RondallaCode.conditionTrue_1 = {val:false};
gdjs.Selfeval_45RondallaCode.condition0IsTrue_1 = {val:false};
gdjs.Selfeval_45RondallaCode.condition1IsTrue_1 = {val:false};
gdjs.Selfeval_45RondallaCode.condition2IsTrue_1 = {val:false};
gdjs.Selfeval_45RondallaCode.condition3IsTrue_1 = {val:false};


gdjs.Selfeval_45RondallaCode.mapOfGDgdjs_46Selfeval_9545RondallaCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1});gdjs.Selfeval_45RondallaCode.mapOfGDgdjs_46Selfeval_9545RondallaCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1});gdjs.Selfeval_45RondallaCode.mapOfGDgdjs_46Selfeval_9545RondallaCode_46GDmainmapbObjects1Objects = Hashtable.newFrom({"mainmapb": gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1});gdjs.Selfeval_45RondallaCode.eventsList0 = function(runtimeScene) {

{


gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Walang-Hanggang-Karaoke-vid-[AudioTrimmer.com]-[AudioTrimmer.com]2.ogg", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1);

gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45RondallaCode.mapOfGDgdjs_46Selfeval_9545RondallaCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if (gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1);

gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val = false;
gdjs.Selfeval_45RondallaCode.condition1IsTrue_0.val = false;
gdjs.Selfeval_45RondallaCode.condition2IsTrue_0.val = false;
{
gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45RondallaCode.mapOfGDgdjs_46Selfeval_9545RondallaCode_46GDmainmapbObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val ) {
{
gdjs.Selfeval_45RondallaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Selfeval_45RondallaCode.condition1IsTrue_0.val ) {
{
{gdjs.Selfeval_45RondallaCode.conditionTrue_1 = gdjs.Selfeval_45RondallaCode.condition2IsTrue_0;
gdjs.Selfeval_45RondallaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11238828);
}
}}
}
if (gdjs.Selfeval_45RondallaCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Map", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainmapb"), gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1);

gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val = false;
{
gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Selfeval_45RondallaCode.mapOfGDgdjs_46Selfeval_9545RondallaCode_46GDmainmapbObjects1Objects, runtimeScene, true, true);
}if (gdjs.Selfeval_45RondallaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1 */
{for(var i = 0, len = gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1.length ;i < len;++i) {
    gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Selfeval_45RondallaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Selfeval_45RondallaCode.GDmainmapbObjects1.length = 0;
gdjs.Selfeval_45RondallaCode.GDmainmapbObjects2.length = 0;
gdjs.Selfeval_45RondallaCode.GDselfcheckObjects1.length = 0;
gdjs.Selfeval_45RondallaCode.GDselfcheckObjects2.length = 0;
gdjs.Selfeval_45RondallaCode.GDselfcheckbuttonObjects1.length = 0;
gdjs.Selfeval_45RondallaCode.GDselfcheckbuttonObjects2.length = 0;
gdjs.Selfeval_45RondallaCode.GDpaperbgObjects1.length = 0;
gdjs.Selfeval_45RondallaCode.GDpaperbgObjects2.length = 0;
gdjs.Selfeval_45RondallaCode.GDNewObjectObjects1.length = 0;
gdjs.Selfeval_45RondallaCode.GDNewObjectObjects2.length = 0;
gdjs.Selfeval_45RondallaCode.GDquestionsObjects1.length = 0;
gdjs.Selfeval_45RondallaCode.GDquestionsObjects2.length = 0;

gdjs.Selfeval_45RondallaCode.eventsList0(runtimeScene);
return;

}

gdjs['Selfeval_45RondallaCode'] = gdjs.Selfeval_45RondallaCode;
