(function(g){var window=this;'use strict';var uib=function(a,b){g.V.call(this,{G:"button",Ia:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],X:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},W:[{G:"svg",X:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},W:[{G:"g",X:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},W:[{G:"g",X:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
W:[{G:"path",X:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.F=a;this.Ra("click",this.onClick,this);this.updateValue("title",g.ST(a,"Espandi","i"));this.update({"data-title-no-tooltip":"Espandi"});g.nb(this,g.SS(b.Hc(),this.element))},vib=function(a){g.V.call(this,{G:"div",
N:"ytp-miniplayer-ui"});this.ag=!1;this.player=a;this.S(a,"minimized",this.Th);this.S(a,"onStateChange",this.xP)},wib=function(a){g.vT.call(this,a);
this.u=new g.NH(this);this.j=new vib(this.player);this.j.hide();g.GS(this.player,this.j.element,4);a.yg()&&(this.load(),g.Op(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(uib,g.V);uib.prototype.onClick=function(){this.F.Na("onExpandMiniplayer")};g.w(vib,g.V);g.k=vib.prototype;
g.k.BM=function(){this.tooltip=new g.UV(this.player,this);g.I(this,this.tooltip);g.GS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Pc=new g.dU(this.player);g.I(this,this.Pc);this.Uj=new g.V({G:"div",N:"ytp-miniplayer-scrim"});g.I(this,this.Uj);this.Uj.Ea(this.element);this.S(this.Uj.element,"click",this.fH);var a=new g.V({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Chiudi"},W:[g.fQ()]});g.I(this,a);a.Ea(this.Uj.element);this.S(a.element,"click",this.Zo);
a=new uib(this.player,this);g.I(this,a);a.Ea(this.Uj.element);this.Ku=new g.V({G:"div",N:"ytp-miniplayer-controls"});g.I(this,this.Ku);this.Ku.Ea(this.Uj.element);this.S(this.Ku.element,"click",this.fH);var b=new g.V({G:"div",N:"ytp-miniplayer-button-container"});g.I(this,b);b.Ea(this.Ku.element);a=new g.V({G:"div",N:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Ea(this.Ku.element);var c=new g.V({G:"div",N:"ytp-miniplayer-button-container"});g.I(this,c);c.Ea(this.Ku.element);this.aX=new g.fV(this.player,
this,!1);g.I(this,this.aX);this.aX.Ea(b.element);b=new g.eV(this.player,this);g.I(this,b);b.Ea(a.element);this.nextButton=new g.fV(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Ea(c.element);this.tj=new g.NV(this.player,this);g.I(this,this.tj);this.tj.Ea(this.Uj.element);this.Jc=new g.kV(this.player,this);g.I(this,this.Jc);g.GS(this.player,this.Jc.element,4);this.UG=new g.V({G:"div",N:"ytp-miniplayer-buttons"});g.I(this,this.UG);g.GS(this.player,this.UG.element,4);a=new g.V({G:"button",
Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Chiudi"},W:[g.fQ()]});g.I(this,a);a.Ea(this.UG.element);this.S(a.element,"click",this.Zo);a=new g.V({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Chiudi"},W:[g.mQ()]});g.I(this,a);a.Ea(this.UG.element);this.S(a.element,"click",this.u7);this.S(this.player,"presentingplayerstatechange",this.xd);this.S(this.player,"appresize",this.Db);this.S(this.player,"fullscreentoggled",this.Db);this.Db()};
g.k.show=function(){this.lf=new g.Ap(this.Hv,null,this);this.lf.start();this.ag||(this.BM(),this.ag=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Jc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.lf&&(this.lf.dispose(),this.lf=void 0);g.V.prototype.hide.call(this);this.player.yg()||(this.ag&&this.Jc.hide(),this.player.loadModule("annotations_module"))};
g.k.qa=function(){this.lf&&(this.lf.dispose(),this.lf=void 0);g.V.prototype.qa.call(this)};
g.k.Zo=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.u7=function(){this.player.playVideo()};
g.k.fH=function(a){if(a.target===this.Uj.element||a.target===this.Ku.element)g.NO(this.player.Cb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Th=function(){g.Op(this.player.getRootNode(),"ytp-player-minimized",this.player.yg())};
g.k.Ge=function(){this.Jc.xc();this.tj.xc()};
g.k.Hv=function(){this.Ge();this.lf&&this.lf.start()};
g.k.xd=function(a){g.MN(a.state,32)&&this.tooltip.hide()};
g.k.Db=function(){g.wV(this.Jc,0,this.player.jb().getPlayerSize().width,!1);g.lV(this.Jc)};
g.k.xP=function(a){this.player.yg()&&(0===a?this.hide():this.show())};
g.k.Hc=function(){return this.tooltip};
g.k.xg=function(){return!1};
g.k.Vg=function(){return!1};
g.k.Ub=function(){return!1};
g.k.Pl=function(){return!1};
g.k.cI=function(){};
g.k.Op=function(){};
g.k.py=function(){};
g.k.Nm=function(){return null};
g.k.PF=function(){return null};
g.k.TL=function(){return new g.ze(0,0)};
g.k.zk=function(){return new g.ym(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Uv=function(a,b,c,d,e){var f=0,h=d=0,l=g.Mm(a);if(b){c=g.Jp(b,"ytp-prev-button")||g.Jp(b,"ytp-next-button");var m=g.Jp(b,"ytp-play-button"),n=g.Jp(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Km(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Jp(b,"ytp-miniplayer-button-top-left"),f=g.Km(b,this.element),b=g.Mm(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.jb().getPlayerSize().width;e=f+(e||0);l=g.te(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.tp=function(){};
g.k.Hl=function(){return!1};
g.k.TD=function(){};
g.k.Tz=function(){};
g.k.Uq=function(){};
g.k.Tq=function(){};
g.k.aB=function(){};
g.k.Wr=function(){};
g.k.GD=function(){};g.w(wib,g.vT);g.k=wib.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Op(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.vT.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Tk=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.uT("miniplayer",wib);})(_yt_player);
