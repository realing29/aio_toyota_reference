(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,728,341,14],[0,646,186,77],[0,0,447,518],[343,728,117,26],[188,703,271,23],[188,669,228,32],[0,520,316,69],[399,520,72,147],[0,591,397,53]]}
];


// symbols:



(lib.КредитованиеосуществляетсяАОТойотаБанк = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1731МАРТА = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.AIOtoyotaFSип = function() {
	this.initialize(img.AIOtoyotaFSип);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,1036);


(lib.disc = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.red = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Toyota_BrandTag = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.white = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer2();
	this.instance.parent = this;
	this.instance.setTransform(-58.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-13,117,26);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer3();
	this.instance.parent = this;
	this.instance.setTransform(-135.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.5,-11.5,271,23);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer4();
	this.instance.parent = this;
	this.instance.setTransform(-114,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-16,228,32);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1731МАРТА();
	this.instance.parent = this;
	this.instance.setTransform(-93,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-38.5,186,77);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1731МАРТА();
	this.instance.parent = this;
	this.instance.setTransform(-93,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-38.5,186,77);


(lib.show_branding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AgfAgQgNgOAAgSQAAgRANgOQAOgNARAAQASAAAOANQANAOAAARQAAASgNAOQgOANgSAAQgRAAgOgNg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.legal_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.disc();
	this.instance.parent = this;
	this.instance.setTransform(-226,-95,1.011,1.011);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgniBS1MAAAilpMBPFAAAMAAAClpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_txt, new cjs.Rectangle(-253,-530.1,506.2,1060.3), null);


(lib.hide_branding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AgYAYQgKgKAAgOQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAOgLAKQgKALgOAAQgNAAgLgLg");
	this.shape.setTransform(3.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,7);


(lib.content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.hide_branding("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(578.5,265.5,1,1,0,0,0,3.5,3.5);

	this.instance_1 = new lib.show_branding("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(558.5,276.5,1,1,0,0,0,4.5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},160).to({state:[{t:this.instance_1}]},97).wait(8));

	// legal
	this.instance_2 = new lib.legal_txt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).to({alpha:1},7,cjs.Ease.cubicInOut).wait(90).to({alpha:0},7).wait(1));

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_66 = new cjs.Graphics().p("AlxHjIAAvGILjAAIlyPGg");
	var mask_graphics_67 = new cjs.Graphics().p("AoeHjIAAvGIQ9ABIlyPGg");
	var mask_graphics_68 = new cjs.Graphics().p("Aq9HjIAAvGIV7ABIlyPGg");
	var mask_graphics_69 = new cjs.Graphics().p("AtOHiIAAvFIadABIlyPHg");
	var mask_graphics_70 = new cjs.Graphics().p("AvTHiIAAvGIenADIlyPGg");
	var mask_graphics_71 = new cjs.Graphics().p("AxMHiIAAvGMAiZAADIlyPGg");
	var mask_graphics_72 = new cjs.Graphics().p("Ay6HiIAAvGMAl0AADIlyPGg");
	var mask_graphics_73 = new cjs.Graphics().p("A0dHhIAAvGMAo7AAEIlyPHg");
	var mask_graphics_74 = new cjs.Graphics().p("A12HhIAAvGMArtAAEIlyPHg");
	var mask_graphics_75 = new cjs.Graphics().p("A3HHhIAAvGMAuPAAFIlyPGg");
	var mask_graphics_76 = new cjs.Graphics().p("A4PHhIAAvGMAwfAAFIlyPGg");
	var mask_graphics_77 = new cjs.Graphics().p("A5PHhIAAvGMAyeAAFIlyPGg");
	var mask_graphics_78 = new cjs.Graphics().p("A6IHhIAAvGMA0RAAFIlyPGg");
	var mask_graphics_79 = new cjs.Graphics().p("A66HhIAAvGMA11AAFIlyPGg");
	var mask_graphics_80 = new cjs.Graphics().p("A7mHhIAAvGMA3NAAFIlyPGg");
	var mask_graphics_81 = new cjs.Graphics().p("A8MHhIAAvGMA4ZAAFIlyPGg");
	var mask_graphics_82 = new cjs.Graphics().p("A8uHgIAAvFMA5dAAGIlyPFg");
	var mask_graphics_83 = new cjs.Graphics().p("A9KHgIAAvFMA6VAAGIlyPFg");
	var mask_graphics_84 = new cjs.Graphics().p("A9jHgIAAvFMA7GAAGIlyPFg");
	var mask_graphics_85 = new cjs.Graphics().p("A93HgIAAvFMA7vAAGIlyPFg");
	var mask_graphics_86 = new cjs.Graphics().p("A+JHgIAAvFMA8TAAGIlyPFg");
	var mask_graphics_87 = new cjs.Graphics().p("A+XHgIAAvGMA8vAAHIlyPGg");
	var mask_graphics_88 = new cjs.Graphics().p("A+jHgIAAvGMA9HAAHIlyPGg");
	var mask_graphics_89 = new cjs.Graphics().p("A+tHgIAAvGMA9bAAHIlyPGg");
	var mask_graphics_90 = new cjs.Graphics().p("A+0HgIAAvGMA9pAAHIlyPGg");
	var mask_graphics_91 = new cjs.Graphics().p("A+6HgIAAvGMA91AAHIlyPGg");
	var mask_graphics_92 = new cjs.Graphics().p("A++HgIAAvGMA99AAHIlyPGg");
	var mask_graphics_93 = new cjs.Graphics().p("A/CHgIAAvGMA+FAAHIlyPGg");
	var mask_graphics_94 = new cjs.Graphics().p("A/EHgIAAvGMA+JAAHIlyPGg");
	var mask_graphics_95 = new cjs.Graphics().p("A/GHgIAAvGMA+NAAHIlyPGg");
	var mask_graphics_96 = new cjs.Graphics().p("A/HHgIAAvGMA+PAAHIlyPGg");
	var mask_graphics_97 = new cjs.Graphics().p("A/IHgIAAvGMA+RAAHIlyPGg");
	var mask_graphics_98 = new cjs.Graphics().p("A/IHgIAAvGMA+RAAHIlyPGg");
	var mask_graphics_99 = new cjs.Graphics().p("A/IHgIAAvGMA+RAAHIlyPGg");
	var mask_graphics_100 = new cjs.Graphics().p("A/IHgIAAvGMA+RAAHIlyPGg");
	var mask_graphics_101 = new cjs.Graphics().p("A/IHgIAAvGMA+RAAHIlyPGg");
	var mask_graphics_102 = new cjs.Graphics().p("A/IHgIAAvGMA+RAAHIlyPGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_graphics_66,x:-212.2,y:421.9}).wait(1).to({graphics:mask_graphics_67,x:-194.9,y:421.9}).wait(1).to({graphics:mask_graphics_68,x:-179,y:421.9}).wait(1).to({graphics:mask_graphics_69,x:-164.5,y:422}).wait(1).to({graphics:mask_graphics_70,x:-151.2,y:422}).wait(1).to({graphics:mask_graphics_71,x:-139.1,y:422}).wait(1).to({graphics:mask_graphics_72,x:-128.1,y:422}).wait(1).to({graphics:mask_graphics_73,x:-118.2,y:422.1}).wait(1).to({graphics:mask_graphics_74,x:-109.3,y:422.1}).wait(1).to({graphics:mask_graphics_75,x:-101.2,y:422.1}).wait(1).to({graphics:mask_graphics_76,x:-94,y:422.1}).wait(1).to({graphics:mask_graphics_77,x:-87.6,y:422.1}).wait(1).to({graphics:mask_graphics_78,x:-81.9,y:422.1}).wait(1).to({graphics:mask_graphics_79,x:-76.9,y:422.1}).wait(1).to({graphics:mask_graphics_80,x:-72.5,y:422.1}).wait(1).to({graphics:mask_graphics_81,x:-68.7,y:422.1}).wait(1).to({graphics:mask_graphics_82,x:-65.3,y:422.2}).wait(1).to({graphics:mask_graphics_83,x:-62.5,y:422.2}).wait(1).to({graphics:mask_graphics_84,x:-60,y:422.2}).wait(1).to({graphics:mask_graphics_85,x:-58,y:422.2}).wait(1).to({graphics:mask_graphics_86,x:-56.2,y:422.2}).wait(1).to({graphics:mask_graphics_87,x:-54.8,y:422.2}).wait(1).to({graphics:mask_graphics_88,x:-53.6,y:422.2}).wait(1).to({graphics:mask_graphics_89,x:-52.6,y:422.2}).wait(1).to({graphics:mask_graphics_90,x:-51.9,y:422.2}).wait(1).to({graphics:mask_graphics_91,x:-51.3,y:422.2}).wait(1).to({graphics:mask_graphics_92,x:-50.9,y:422.2}).wait(1).to({graphics:mask_graphics_93,x:-50.5,y:422.2}).wait(1).to({graphics:mask_graphics_94,x:-50.3,y:422.2}).wait(1).to({graphics:mask_graphics_95,x:-50.1,y:422.2}).wait(1).to({graphics:mask_graphics_96,x:-50,y:422.2}).wait(1).to({graphics:mask_graphics_97,x:-49.9,y:422.2}).wait(1).to({graphics:mask_graphics_98,x:-49.9,y:422.2}).wait(1).to({graphics:mask_graphics_99,x:-49.9,y:422.2}).wait(1).to({graphics:mask_graphics_100,x:-49.9,y:422.2}).wait(1).to({graphics:mask_graphics_101,x:-49.9,y:422.2}).wait(1).to({graphics:mask_graphics_102,x:-49.9,y:422.2}).wait(1).to({graphics:null,x:0,y:0}).wait(162));

	// red.png
	this.instance_3 = new lib.red();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-197,391);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({_off:false},0).to({_off:true},102).wait(97));

	// Layer_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_58 = new cjs.Graphics().p("AkAFsIAArXIIBAAIkBLXg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AoplrIRTAAIkCLXItRAAg");
	var mask_1_graphics_60 = new cjs.Graphics().p("As1lrIZrgBIkCLYI1pABg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AwmlqMAhNgACIkBLXI9MACg");
	var mask_1_graphics_62 = new cjs.Graphics().p("Az+lqMAn9gACIkBLXMgj8AACg");
	var mask_1_graphics_63 = new cjs.Graphics().p("A2+lqMAt9gACIkBLXMgp8AADg");
	var mask_1_graphics_64 = new cjs.Graphics().p("A5olqMAzRgADIkCLYMgvPAADg");
	var mask_1_graphics_65 = new cjs.Graphics().p("A78lqMA35gADIkCLYMgz3AADg");
	var mask_1_graphics_66 = new cjs.Graphics().p("A98lpMA75gAEIkBLXMg34AAEg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A/rlpMA/XgAEIkCLXMg7VAAEg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EghIgFpMBCRgAEIkCLXMg+PAAEg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgiWgFpMBEtgAEIkCLXMhArAAEg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgjVgFpMBGsgAEIkCLXMhCqAAEg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgkIgFpMBIRgAEIkBLXMhEQAAEg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgkwgFpMBJhgAEIkBLXMhFgAAEg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EglOgFpMBKdgAEIkCLXMhGbAAEg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgljgFpMBLHgAEIkBLXMhHGAAEg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EglygFpMBLlgAEIkCLXMhHjAAEg");
	var mask_1_graphics_76 = new cjs.Graphics().p("Egl6gFpMBL1gAEIkBLXMhH0AAEg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Egl/gFpMBL/gAEIkCLXMhH9AAEg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EgmAgFpMBMCgAEIkCLXMhIAAAEg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EgmBgFpMBMDgAEIkCLXMhIBAAEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(58).to({graphics:mask_1_graphics_58,x:-215.5,y:370.8}).wait(1).to({graphics:mask_1_graphics_59,x:-185.9,y:370.8}).wait(1).to({graphics:mask_1_graphics_60,x:-159.1,y:370.8}).wait(1).to({graphics:mask_1_graphics_61,x:-135,y:370.8}).wait(1).to({graphics:mask_1_graphics_62,x:-113.4,y:370.7}).wait(1).to({graphics:mask_1_graphics_63,x:-94.2,y:370.7}).wait(1).to({graphics:mask_1_graphics_64,x:-77.2,y:370.7}).wait(1).to({graphics:mask_1_graphics_65,x:-62.4,y:370.7}).wait(1).to({graphics:mask_1_graphics_66,x:-49.5,y:370.7}).wait(1).to({graphics:mask_1_graphics_67,x:-38.5,y:370.7}).wait(1).to({graphics:mask_1_graphics_68,x:-29.2,y:370.6}).wait(1).to({graphics:mask_1_graphics_69,x:-21.4,y:370.6}).wait(1).to({graphics:mask_1_graphics_70,x:-15,y:370.6}).wait(1).to({graphics:mask_1_graphics_71,x:-9.9,y:370.6}).wait(1).to({graphics:mask_1_graphics_72,x:-6,y:370.6}).wait(1).to({graphics:mask_1_graphics_73,x:-3,y:370.6}).wait(1).to({graphics:mask_1_graphics_74,x:-0.9,y:370.6}).wait(1).to({graphics:mask_1_graphics_75,x:0.6,y:370.6}).wait(1).to({graphics:mask_1_graphics_76,x:1.4,y:370.6}).wait(1).to({graphics:mask_1_graphics_77,x:1.9,y:370.6}).wait(1).to({graphics:mask_1_graphics_78,x:2.1,y:370.6}).wait(1).to({graphics:mask_1_graphics_79,x:2.1,y:370.6}).wait(1).to({graphics:null,x:0,y:0}).wait(185));

	// white.png
	this.instance_4 = new lib.white();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-197,349);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(58).to({_off:false},0).to({_off:true},110).wait(97));

	// 17 – 31 МАРТА.png
	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-128.3,-286.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-128.3,-286.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},19).to({state:[{t:this.instance_6}]},27).to({state:[]},122).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({_off:true,alpha:1},27,cjs.Ease.quintIn).wait(219));

	// Layer 4.png
	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-127.3,-356.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({x:-94.3,alpha:1},8,cjs.Ease.cubicIn).to({x:-107.3},5,cjs.Ease.cubicIn).to({_off:true},144).wait(97));

	// Layer 3.png
	this.instance_8 = new lib.Tween5("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-105.8,-390.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({x:-72.8,alpha:1},8,cjs.Ease.cubicIn).to({x:-85.8},5,cjs.Ease.cubicIn).to({_off:true},149).wait(97));

	// Layer 2.png
	this.instance_9 = new lib.Tween6("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-182.8,-422.9);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-149.8,alpha:1},8,cjs.Ease.cubicOut).to({x:-162.8},5,cjs.Ease.cubicIn).to({_off:true},155).wait(97));

	// Кредитование осуществляется АО «Тойота Банк».png
	this.instance_10 = new lib.КредитованиеосуществляетсяАОТойотаБанк();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-171,483);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},168).wait(97));

	// Toyota_BrandTag.png
	this.instance_11 = new lib.Toyota_BrandTag();
	this.instance_11.parent = this;
	this.instance_11.setTransform(128,-519);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},168).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.3,-519,441.3,1016);


// stage content:
(lib.AIOtoyotaFS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// content
	this.instance = new lib.content();
	this.instance.parent = this;
	this.instance.setTransform(240,518);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// back
	this.instance_1 = new lib.AIOtoyotaFSип();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(238.7,517,481.3,1037);
// library properties:
lib.properties = {
	id: '7B6CBD67A234F3488145E008774DD399',
	width: 480,
	height: 1036,
	fps: 24,
	color: "#343233",
	opacity: 1.00,
	manifest: [
		{src:"images/AIOtoyotaFSип.jpg", id:"AIOtoyotaFSип"},
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7B6CBD67A234F3488145E008774DD399'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;