webpackJsonp([1],{rroy:function(l,n,t){"use strict";function e(l){return r._33(0,[(l()(),r._15(0,null,null,12,"lte-box",[["lteTitle","Http Response"]],null,null,null,a.b,a.a)),r._13(114688,null,3,s.a,[],{lteTitle:[0,"lteTitle"],collapsable:[1,"collapsable"],removable:[2,"removable"]},null),r._30(335544320,7,{boxTitleDirective:0}),r._30(335544320,8,{boxFooterDirective:0}),r._30(335544320,9,{boxContentDirective:0}),r._13(16384,null,3,p.a,[],{lteTitle:[0,"lteTitle"]},null),r._30(335544320,10,{boxTitleDirective:0}),r._30(335544320,11,{boxFooterDirective:0}),r._30(335544320,12,{boxContentDirective:0}),(l()(),r._32(4,["\n  "])),(l()(),r._15(0,null,4,1,"pre",[["style","max-height: 300px; overflow: scroll;"]],null,null,null,null,null)),(l()(),r._32(null,["",""])),(l()(),r._32(4,["\n"]))],function(l,n){l(n,1,0,"Http Response",!1,!1);l(n,5,0,"Http Response")},function(l,n){l(n,11,0,n.component.response)})}function u(l){return r._33(0,[(l()(),r._15(0,null,null,19,"lte-box",[],null,null,null,a.b,a.a)),r._13(114688,null,3,s.a,[],{collapsable:[0,"collapsable"],removable:[1,"removable"],solid:[2,"solid"]},null),r._30(335544320,1,{boxTitleDirective:0}),r._30(335544320,2,{boxFooterDirective:0}),r._30(335544320,3,{boxContentDirective:0}),r._13(16384,null,3,p.a,[],null,null),r._30(335544320,4,{boxTitleDirective:0}),r._30(335544320,5,{boxFooterDirective:0}),r._30(335544320,6,{boxContentDirective:0}),(l()(),r._32(4,["\n  "])),(l()(),r._15(0,null,4,1,"p",[],null,null,null,null,null)),(l()(),r._32(null,['This is an component to test the Http interceptor of the structural directive "ngLoading".'])),(l()(),r._32(4,["\n  "])),(l()(),r._15(0,null,4,1,"p",[],null,null,null,null,null)),(l()(),r._32(null,["You can disable this feature like this:"])),(l()(),r._32(4,["\n  "])),(l()(),r._15(0,null,4,2,"pre",[],null,null,null,null,null)),(l()(),r._15(0,null,null,1,"code",[["class","language-html"]],null,null,null,null,null)),(l()(),r._32(null,['<div *mkLoadingPage="{checkPendingHttp: true, checkPendingRoute: true}">\n  <mk-material-bar colorOne="#dd4b39" colorTwo="#00a65a" colorThree="#f39c12"></mk-material-bar>\n</div>'])),(l()(),r._32(4,["\n"])),(l()(),r._32(null,["\n\n"])),(l()(),r._15(0,null,null,1,"button",[["class","btn btn-sm btn-success"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;if("click"===n){e=!1!==u.startRequest()&&e}return e},null,null)),(l()(),r._32(null,["Start http request"])),(l()(),r._15(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._15(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._32(null,["\n\n"])),(l()(),r._9(16777216,null,null,1,null,e)),r._13(16384,null,0,h.j,[r.Y,r.V],{ngIf:[0,"ngIf"]},null),(l()(),r._32(null,["\n"]))],function(l,n){var t=n.component;l(n,1,0,!1,!1,!0),l(n,27,0,t.response)},null)}function o(l){return r._33(0,[(l()(),r._15(0,null,null,1,"app-http-interceptor",[],null,null,null,u,v)),r._13(4243456,null,0,b,[_.e],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var r=t("/oeL"),i=function(){function l(){}return l}(),c=[""],a=t("KN8/"),s=t("b1nM"),p=t("rR9K"),_=t("CPp0"),b=(t("5v8a"),function(){function l(l){this.http=l}return l.prototype.ngAfterViewInit=function(){Prism.highlightAll()},l.prototype.startRequest=function(){var l=this;this.get().subscribe(function(n){l.response=n,Prism.highlightAll()})},l.prototype.get=function(){return this.http.get("https://jsonplaceholder.typicode.com/photos").map(this.handleResponse)},l.prototype.handleResponse=function(l){return l.text()},l.prototype.handleError=function(l){console.log("Error",l)},l.ctorParameters=function(){return[{type:_.e}]},l}()),h=t("qbdv"),f=[c],v=r._12({encapsulation:0,styles:f,data:{}}),d=r._10("app-http-interceptor",b,o,{},{},[]),g=t("BkNc"),m=function(){function l(){}return l}(),x=t("xjgy"),k=t("BYWn");t.d(n,"HttpInterceptorModuleNgFactory",function(){return y});var y=r._11(i,[],function(l){return r._25([r._26(512,r.k,r._7,[[8,[d]],[3,r.k],r.E]),r._26(4608,h.l,h.k,[r.A]),r._26(512,h.b,h.b,[]),r._26(512,g.r,g.r,[[2,g.x],[2,g.p]]),r._26(512,m,m,[]),r._26(512,x.a,x.a,[]),r._26(512,k.a,k.a,[]),r._26(512,i,i,[]),r._26(1024,g.n,function(){return[[{path:"",component:b}]]},[])])})}});