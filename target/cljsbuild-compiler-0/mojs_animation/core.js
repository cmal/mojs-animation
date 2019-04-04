// Compiled by ClojureScript 1.7.122 {}
goog.provide('mojs_animation.core');
goog.require('cljs.core');
goog.require('reagent.core');
mojs_animation.core.circle_0 = (function mojs_animation$core$circle_0(this$){
return (new mojs.Shape(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shape","shape",1190694006),"circle",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"0","0",351625802),(1)], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(1000),new cljs.core.Keyword(null,"delay","delay",-574225219),(1000),new cljs.core.Keyword(null,"easing","easing",735372043),"cubic.out",new cljs.core.Keyword(null,"repeat","repeat",832692087),(999)], null)))).play();
});
mojs_animation.core.circle_1 = (function mojs_animation$core$circle_1(this$){
return (new mojs.Shape(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shape","shape",1190694006),"circle",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"0","0",351625802),(1)], null),new cljs.core.Keyword(null,"left","left",-399115937),"25%",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cyan","cyan",1118839274),"yellow"], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(25),new cljs.core.Keyword(null,"duration","duration",1444101068),(2000),new cljs.core.Keyword(null,"repeat","repeat",832692087),(999)], null)))).play();
});
mojs_animation.core.rect_2 = (function mojs_animation$core$rect_2(this$){
return (new mojs.Shape(cljs.core.clj__GT_js.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"strokeDashoffset","strokeDashoffset",-421034101),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentArrayMap(null, 1, ["rgba(0,255,255,1)","magenta"], null),"none",new cljs.core.PersistentArrayMap(null, 1, ["-100%","100%"], null),(2000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"0","0",351625802),(180)], null),(20),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"10","10",-333527256),(0)], null),"100%","rect",(999),"50%"])))).play();
});
mojs_animation.core.polygon_3 = (function mojs_animation$core$polygon_3(this$){
return (new mojs.Shape(cljs.core.clj__GT_js.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentArrayMap(null, 1, ["deeppink","#00F87F"], null),(2000),(5),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"0","0",351625802),"rand(0,360)"], null),(25),"polygon",(999),new cljs.core.PersistentArrayMap(null, 1, ["rand(-100%,-200%)",(0)], null),"75%"])))).play();
});
mojs_animation.core.animation_0 = (function mojs_animation$core$animation_0(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.square","div.square",-441224302)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mojs_animation.core.circle_0], null));
});
mojs_animation.core.animation_1 = (function mojs_animation$core$animation_1(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.square","div.square",-441224302)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mojs_animation.core.circle_1], null));
});
mojs_animation.core.animation_2 = (function mojs_animation$core$animation_2(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.square","div.square",-441224302)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mojs_animation.core.rect_2], null));
});
mojs_animation.core.animation_3 = (function mojs_animation$core$animation_3(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.square","div.square",-441224302)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mojs_animation.core.polygon_3], null));
});
mojs_animation.core.animation = (function mojs_animation$core$animation(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mojs_animation.core.animation_0], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mojs_animation.core.animation_1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mojs_animation.core.animation_2], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mojs_animation.core.animation_3], null)], null);
});
mojs_animation.core.main = (function mojs_animation$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mojs_animation.core.animation], null),document.getElementById("app"));
});
goog.exportSymbol('mojs_animation.core.main', mojs_animation.core.main);
