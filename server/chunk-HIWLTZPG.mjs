import './polyfills.server.mjs';
import{$ as l,A as b,Aa as X,B as jt,Ba as oe,C as lt,Ca as Y,D as P,Da as E,E as _,Ea as S,F as L,Fa as N,G as d,Ga as F,H as x,Ha as se,I as y,J as Pt,K as Lt,Ka as re,L as ct,M as pt,N as s,O as a,Oa as R,P as m,Q as ut,R as dt,Ra as J,S as mt,Sa as ae,T as Bt,U as B,V as f,W as zt,X as Vt,Y as Zt,Z as Gt,_ as $t,a as T,aa as q,b as St,ba as w,c as Ot,ca as u,d as Mt,da as Ut,e as At,ea as qt,f as Et,fa as z,g as Nt,ga as Qt,h as D,ha as ft,i as it,j as G,ja as Q,k as A,l as g,m as p,n as nt,na as Xt,o as $,p as ot,pa as Yt,q as Ft,qa as ht,r as Rt,s as st,sa as Jt,t as rt,ta as V,u as U,ua as Kt,v as at,va as Wt,w as kt,wa as te,x as j,xa as ee,y as Ht,ya as ie,z as c,za as ne}from"./chunk-QTO4CMSG.mjs";import{a as v,b as I}from"./chunk-VVCT4QZE.mjs";var Le=["overlay"],Be=["*"];function ze(i,o){i&1&&m(0,"div")}function Ve(i,o){if(i&1&&(s(0,"div"),_(1,ze,1,0,"div",6),a()),i&2){let t=f(2);y(t.spinner.class),x("color",t.spinner.color),c(),d("ngForOf",t.spinner.divArray)}}function Ze(i,o){if(i&1&&(m(0,"div",7),z(1,"safeHtml")),i&2){let t=f(2);d("innerHTML",Qt(1,1,t.template),j)}}function Ge(i,o){if(i&1&&(s(0,"div",2,0),_(2,Ve,2,5,"div",3)(3,Ze,2,3,"div",4),s(4,"div",5),Vt(5),a()()),i&2){let t=f();x("background-color",t.spinner.bdColor)("z-index",t.spinner.zIndex)("position",t.spinner.fullScreen?"fixed":"absolute"),d("@.disabled",t.disableAnimation)("@fadeIn","in"),c(2),d("ngIf",!t.template),c(),d("ngIf",t.template),c(),x("z-index",t.spinner.zIndex)}}var $e={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},vt={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},gt="primary",M=class i{constructor(o){Object.assign(this,o)}static create(o){return!o?.template&&!o?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new i(o)}},Ct=(()=>{class i{constructor(){this.spinnerObservable=new St(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe(Mt(e=>e&&e.name===t))}show(t=gt,e){return new Promise((n,r)=>{setTimeout(()=>{e&&Object.keys(e).length?(e.name=t,this.spinnerObservable.next(new M(I(v({},e),{show:!0}))),n(!0)):(this.spinnerObservable.next(new M({name:t,show:!0})),n(!0))},10)})}hide(t=gt,e=10){return new Promise((n,r)=>{setTimeout(()=>{this.spinnerObservable.next(new M({name:t,show:!1})),n(!0)},e)})}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),le=new G("NGX_SPINNER_CONFIG"),Ue=(()=>{class i{constructor(t){this._sanitizer=t}transform(t){if(t)return this._sanitizer.bypassSecurityTrustHtml(t)}static{this.\u0275fac=function(e){return new(e||i)(b(X,16))}}static{this.\u0275pipe=$({name:"safeHtml",type:i,pure:!0,standalone:!0})}}return i})(),ce=(()=>{class i{constructor(t,e,n,r){this.spinnerService=t,this.changeDetector=e,this.elementRef=n,this.globalConfig=r,this.disableAnimation=!1,this.spinner=new M,this.ngUnsubscribe=new T,this.setDefaultOptions=()=>{let{type:C}=this.globalConfig??{};this.spinner=M.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??C,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=vt.BD_COLOR,this.zIndex=vt.Z_INDEX,this.color=vt.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=gt,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(Nt(this.ngUnsubscribe)).subscribe(t=>{this.setDefaultOptions(),Object.assign(this.spinner,t),t.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(t){return t===this.elementRef.nativeElement.parentElement?!0:t.parentNode&&this.isSpinnerZone(t.parentNode)}ngOnChanges(t){for(let e in t)if(e){let n=t[e];if(n.isFirstChange())return;typeof n.currentValue<"u"&&n.currentValue!==n.previousValue&&n.currentValue!==""&&(this.spinner[e]=n.currentValue,e==="showSpinner"&&(n.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),e==="name"&&this.initObservable())}}getClass(t,e){this.spinner.divCount=$e[t],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((r,C)=>C);let n="";switch(e.toLowerCase()){case"small":n="la-sm";break;case"medium":n="la-2x";break;case"large":n="la-3x";break;default:break}return"la-"+t+" "+n}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static{this.\u0275fac=function(e){return new(e||i)(b(Ct),b(Xt),b(at),b(le,8))}}static{this.\u0275cmp=p({type:i,selectors:[["ngx-spinner"]],viewQuery:function(e,n){if(e&1&&Zt(Le,5),e&2){let r;Gt(r=$t())&&(n.spinnerDOM=r.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[Rt,u],ngContentSelectors:Be,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(e,n){e&1&&(zt(),_(0,Ge,6,12,"div",1)),e&2&&d("ngIf",n.spinner.show)},dependencies:[Ue,V,Jt],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[Y("fadeIn",[N("in",S({opacity:1})),F(":enter",[S({opacity:0}),E(300)]),F(":leave",E(200,S({opacity:0})))])]},changeDetection:0})}}return i})(),pe=(()=>{class i{static forRoot(t){return{ngModule:i,providers:[{provide:le,useValue:t}]}}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=nt({type:i})}static{this.\u0275inj=it({imports:[Kt]})}}return i})();var ue=(()=>{class i{constructor(){this.title="ECommerce"}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-root"]],standalone:!0,features:[u],decls:2,vars:0,consts:[["name","loadingEx1","type","ball-scale-multiple"]],template:function(e,n){e&1&&m(0,"router-outlet")(1,"ngx-spinner",0)},dependencies:[R,ce]})}}return i})();var de=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-nav-auth"]],standalone:!0,features:[u],decls:2,vars:0,template:function(e,n){e&1&&(s(0,"p"),l(1,"nav-auth works!"),a())}})}}return i})();var K=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-footer"]],standalone:!0,features:[u],decls:0,vars:0,template:function(e,n){}})}}return i})();var me=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-auth-layout"]],standalone:!0,features:[u],decls:5,vars:0,template:function(e,n){e&1&&(s(0,"p"),l(1,"auth-layout works!"),a(),m(2,"app-nav-auth")(3,"router-outlet")(4,"app-footer"))},dependencies:[de,R,K]})}}return i})();var fe=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-notfound"]],standalone:!0,features:[u],decls:2,vars:0,template:function(e,n){e&1&&(s(0,"p"),l(1,"notfound works!"),a())}})}}return i})();var he=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-nav-blank"]],standalone:!0,features:[u],decls:17,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light"],[1,"container-fluid"],["routerLink","home","routerLinkActive","router-link-active",1,"navbar-brand"],["src","./assets/images/ElevateLogo.jpg","width","90px",2,"border-radius","20%"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["routerLink","home","routerLinkActive","active-link","href","#",1,"nav-link"],["routerLink","product","routerLinkActive","active-link","href","#",1,"nav-link"],["routerLink","Categories","routerLinkActive","active-link","href","#",1,"nav-link"]],template:function(e,n){e&1&&(s(0,"nav",0)(1,"div",1)(2,"a",2),m(3,"img",3),a(),s(4,"button",4),m(5,"span",5),a(),s(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),l(10,"Home"),a()(),s(11,"li",8)(12,"a",10),l(13,"product"),a()(),s(14,"li",8)(15,"a",11),l(16,"Categories"),a()()()()()())},dependencies:[J]})}}return i})();var ve=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-blank-layout"]],standalone:!0,features:[u],decls:4,vars:0,consts:[[1,"container-fluid"]],template:function(e,n){e&1&&m(0,"app-nav-blank")(1,"div",0)(2,"router-outlet")(3,"app-footer")},dependencies:[he,K,R]})}}return i})();var ge=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-login"]],standalone:!0,features:[u],decls:2,vars:0,template:function(e,n){e&1&&(s(0,"p"),l(1,"login works!"),a())}})}}return i})();var Ce=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-register"]],standalone:!0,features:[u],decls:2,vars:0,template:function(e,n){e&1&&(s(0,"p"),l(1,"register works!"),a())}})}}return i})();var bt={baseurl:"https://fakestoreapi.com"};var be=(()=>{class i{constructor(){this._HttpClient=g(Wt)}GetAllProducts(){return this._HttpClient.get(`${bt.baseurl}/products`)}getSpecificProduct(t){return this._HttpClient.get(`${bt.baseurl}/products/${t}`)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var _e=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-product"]],standalone:!0,features:[u],decls:0,vars:0,template:function(e,n){}})}}return i})();var ye=(()=>{class i{transform(t,e){return t.split(" ",e).join(" ")}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275pipe=$({name:"termtext",type:i,pure:!0,standalone:!0})}}return i})();var qe=(i,o)=>o.id,Qe=i=>["/details",i],Xe=()=>[1,2,3,4,5];function Ye(i,o){i&1&&(s(0,"span"),m(1,"i",11),a())}function Je(i,o){i&1&&m(0,"i",8)}function Ke(i,o){if(i&1&&(s(0,"div",1)(1,"div",2)(2,"div",3),m(3,"img",4),z(4,"termtext"),s(5,"h3",5),l(6),a(),s(7,"h4",6),l(8),z(9,"termtext"),a(),s(10,"div",7)(11,"div")(12,"span"),l(13),a()(),s(14,"div"),ct(15,Ye,2,0,"span",null,Lt),_(17,Je,1,0,"i",8),s(18,"span",9),l(19),a()()()(),s(20,"div")(21,"button",10),l(22,"Add To Cart"),a()()()()),i&2){let t=o.$implicit;c(2),d("routerLink",qt(14,Qe,t.id)),c(),d("src",t.image,Ht)("alt",ft(4,8,t.title,2)),c(3),q(t.category),c(2),q(ft(9,11,t.title,2)),c(5),w("",t.price," EGP"),c(2),pt(Ut(16,Xe).slice(0,t.rating.rate)),c(2),Pt(17,t.rating.rate%1!==0?17:-1),c(2),q(t.rating.rate)}}var Te=(()=>{class i{constructor(){this._ProductService=g(be),this.productsList=[]}ngOnInit(){this._ProductService.GetAllProducts().subscribe({next:t=>{this.productsList=t,console.log(t)}})}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-home"]],standalone:!0,features:[u],decls:4,vars:0,consts:[[1,"row","g-3"],[1,"col-md-2"],[1,"border","p-2","product"],[3,"routerLink"],[2,"height","150px",3,"src","alt"],[1,"small","text-main"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fas","fa-star-half-alt","rating-color"],[1,"text-muted"],[1,"btn-main","w-100"],[1,"fas","fa-star","rating-color"]],template:function(e,n){e&1&&(s(0,"section")(1,"div",0),ct(2,Ke,23,17,"div",1,qe),a()()),e&2&&(c(2),pt(n.productsList.slice(0,50)))},dependencies:[J,ye]})}}return i})();var xe=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-brands"]],standalone:!0,features:[u],decls:2,vars:0,template:function(e,n){e&1&&(s(0,"p"),l(1,"brands works!"),a())}})}}return i})();var we=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-categories"]],standalone:!0,features:[u],decls:2,vars:0,template:function(e,n){e&1&&(s(0,"p"),l(1,"categories works!"),a())}})}}return i})();var Ie=(()=>{class i{constructor(){}ngOnInit(){}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-products"]],decls:2,vars:0,template:function(e,n){e&1&&(s(0,"p"),l(1,` products works!
`),a())}})}}return i})();var De=[{path:"",component:ve,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Te},{path:"products",component:Ie},{path:"product",component:_e},{path:"brands",component:xe},{path:"categories",component:we}]},{path:"",component:me,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:ge},{path:"register",component:Ce}]},{path:"*",component:fe}];var Se=["toast-component",""];function We(i,o){if(i&1){let t=mt();s(0,"button",5),B("click",function(){st(t);let n=f();return rt(n.remove())}),s(1,"span",6),l(2,"\xD7"),a()()}}function ti(i,o){if(i&1&&(ut(0),l(1),dt()),i&2){let t=f(2);c(),w("[",t.duplicatesCount+1,"]")}}function ei(i,o){if(i&1&&(s(0,"div"),l(1),_(2,ti,2,1,"ng-container",4),a()),i&2){let t=f();y(t.options.titleClass),L("aria-label",t.title),c(),w(" ",t.title," "),c(),d("ngIf",t.duplicatesCount)}}function ii(i,o){if(i&1&&m(0,"div",7),i&2){let t=f();y(t.options.messageClass),d("innerHTML",t.message,j)}}function ni(i,o){if(i&1&&(s(0,"div",8),l(1),a()),i&2){let t=f();y(t.options.messageClass),L("aria-label",t.message),c(),w(" ",t.message," ")}}function oi(i,o){if(i&1&&(s(0,"div"),m(1,"div",9),a()),i&2){let t=f();c(),x("width",t.width()+"%")}}function si(i,o){if(i&1){let t=mt();s(0,"button",5),B("click",function(){st(t);let n=f();return rt(n.remove())}),s(1,"span",6),l(2,"\xD7"),a()()}}function ri(i,o){if(i&1&&(ut(0),l(1),dt()),i&2){let t=f(2);c(),w("[",t.duplicatesCount+1,"]")}}function ai(i,o){if(i&1&&(s(0,"div"),l(1),_(2,ri,2,1,"ng-container",4),a()),i&2){let t=f();y(t.options.titleClass),L("aria-label",t.title),c(),w(" ",t.title," "),c(),d("ngIf",t.duplicatesCount)}}function li(i,o){if(i&1&&m(0,"div",7),i&2){let t=f();y(t.options.messageClass),d("innerHTML",t.message,j)}}function ci(i,o){if(i&1&&(s(0,"div",8),l(1),a()),i&2){let t=f();y(t.options.messageClass),L("aria-label",t.message),c(),w(" ",t.message," ")}}function pi(i,o){if(i&1&&(s(0,"div"),m(1,"div",9),a()),i&2){let t=f();c(),x("width",t.width()+"%")}}var _t=class{_attachedHost;component;viewContainerRef;injector;constructor(o,t){this.component=o,this.injector=t}attach(o,t){return this._attachedHost=o,o.attach(this,t)}detach(){let o=this._attachedHost;if(o)return this._attachedHost=void 0,o.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(o){this._attachedHost=o}},yt=class{_attachedPortal;_disposeFn;attach(o,t){return this._attachedPortal=o,this.attachComponentPortal(o,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(o){this._disposeFn=o}},Tt=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new T;_activate=new T;_manualClose=new T;_resetTimeout=new T;_countDuplicate=new T;constructor(o){this._overlayRef=o}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(o,t){o&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},k=class{toastId;config;message;title;toastType;toastRef;_onTap=new T;_onAction=new T;constructor(o,t,e,n,r,C){this.toastId=o,this.config=t,this.message=e,this.title=n,this.toastType=r,this.toastRef=C,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(o){this._onAction.next(o)}onAction(){return this._onAction.asObservable()}},Oe={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},Me=new G("ToastConfig"),xt=class extends yt{_hostDomElement;_componentFactoryResolver;_appRef;constructor(o,t,e){super(),this._hostDomElement=o,this._componentFactoryResolver=t,this._appRef=e}attachComponentPortal(o,t){let e=this._componentFactoryResolver.resolveComponentFactory(o.component),n;return n=e.create(o.injector),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.detachView(n.hostView),n.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(n),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(n)),n}_getComponentRootNode(o){return o.hostView.rootNodes[0]}},ui=(()=>{class i{_document=g(ht);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(e){return new(e||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),wt=class{_portalHost;constructor(o){this._portalHost=o}attach(o,t=!0){return this._portalHost.attach(o,t)}detach(){return this._portalHost.detach()}},di=(()=>{class i{_overlayContainer=g(ui);_componentFactoryResolver=g(jt);_appRef=g(Q);_document=g(ht);_paneElements=new Map;create(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}getPaneElement(t="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}_createPaneElement(t,e){let n=this._document.createElement("div");return n.id="toast-container",n.classList.add(t),n.classList.add("toast-container"),e?e.getContainerElement().appendChild(n):this._overlayContainer.getContainerElement().appendChild(n),n}_createPortalHost(t){return new xt(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new wt(this._createPortalHost(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),W=(()=>{class i{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,e,n,r,C){this.overlay=e,this._injector=n,this.sanitizer=r,this.ngZone=C,this.toastrConfig=v(v({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=v(v({},t.default.iconClasses),t.config.iconClasses))}show(t,e,n={},r=""){return this._preBuildNotification(r,t,e,this.applyConfig(n))}success(t,e,n={}){let r=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(r,t,e,this.applyConfig(n))}error(t,e,n={}){let r=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(r,t,e,this.applyConfig(n))}info(t,e,n={}){let r=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(r,t,e,this.applyConfig(n))}warning(t,e,n={}){let r=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(r,t,e,this.applyConfig(n))}clear(t){for(let e of this.toasts)if(t!==void 0){if(e.toastId===t){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(t){let e=this._findToast(t);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let n=this.toasts[this.currentlyActive].toastRef;n.isInactive()||(this.currentlyActive=this.currentlyActive+1,n.activate())}return!0}findDuplicate(t="",e="",n,r){let{includeTitleDuplicates:C}=this.toastrConfig;for(let O of this.toasts){let Z=C&&O.title===t;if((!C||Z)&&O.message===e)return O.toastRef.onDuplicate(n,r),O}return null}applyConfig(t={}){return v(v({},this.toastrConfig),t)}_findToast(t){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(t,e,n,r){return r.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,e,n,r)):this._buildNotification(t,e,n,r)}_buildNotification(t,e,n,r){if(!r.toastComponent)throw new Error("toastComponent required");let C=this.findDuplicate(n,e,this.toastrConfig.resetTimeoutOnDuplicate&&r.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&n||e)&&this.toastrConfig.preventDuplicates&&C!==null)return C;this.previousToastMessage=e;let O=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(O=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let Z=this.overlay.create(r.positionClass,this.overlayContainer);this.index=this.index+1;let It=e;e&&r.enableHtml&&(It=this.sanitizer.sanitize(kt.HTML,e));let H=new Tt(Z),tt=new k(this.index,r,It,n,t,H),ke=[{provide:k,useValue:tt}],He=U.create({providers:ke,parent:this._injector}),je=new _t(r.toastComponent,He),Dt=Z.attach(je,r.newestOnTop);H.componentInstance=Dt.instance;let et={toastId:this.index,title:n||"",message:e||"",toastRef:H,onShown:H.afterActivate(),onHidden:H.afterClosed(),onTap:tt.onTap(),onAction:tt.onAction(),portal:Dt};return O||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{et.toastRef.activate()})),this.toasts.push(et),et}static \u0275fac=function(e){return new(e||i)(A(Me),A(di),A(U),A(X),A(lt))};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),mi=(()=>{class i{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=P(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,n){this.toastrService=t,this.toastPackage=e,this.ngZone=n,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(r=>{this.duplicatesCount=r}),this.state=P({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>I(v({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(n=>100-n),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>I(v({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>I(v({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),e)):this.timeout=setTimeout(()=>t(),e)}outsideInterval(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),e)):this.intervalId=setInterval(()=>t(),e)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(e){return new(e||i)(b(W),b(k),b(lt))};static \u0275cmp=p({type:i,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,n){e&1&&B("click",function(){return n.tapToast()})("mouseenter",function(){return n.stickAround()})("mouseleave",function(){return n.delayedHideToast()}),e&2&&(Bt("@flyInOut",n._state),y(n.toastClasses),x("display",n.displayStyle))},standalone:!0,features:[u],attrs:Se,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,n){e&1&&_(0,We,3,0,"button",0)(1,ei,3,5,"div",1)(2,ii,1,3,"div",2)(3,ni,2,4,"div",3)(4,oi,2,2,"div",4),e&2&&(d("ngIf",n.options.closeButton),c(),d("ngIf",n.title),c(),d("ngIf",n.message&&n.options.enableHtml),c(),d("ngIf",n.message&&!n.options.enableHtml),c(),d("ngIf",n.options.progressBar))},dependencies:[V],encapsulation:2,data:{animation:[Y("flyInOut",[N("inactive",S({opacity:0})),N("active",S({opacity:1})),N("removed",S({opacity:0})),F("inactive => active",E("{{ easeTime }}ms {{ easing }}")),F("active => removed",E("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return i})(),fi=I(v({},Oe),{toastComponent:mi}),Ae=(i={})=>ot([{provide:Me,useValue:{default:fi,config:i}}]);var hi=(()=>{class i{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=P(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=P("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,n){this.toastrService=t,this.toastPackage=e,this.appRef=n,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(r=>{this.duplicatesCount=r})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(n=>100-n),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||i)(b(W),b(k),b(Q))};static \u0275cmp=p({type:i,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,n){e&1&&B("click",function(){return n.tapToast()})("mouseenter",function(){return n.stickAround()})("mouseleave",function(){return n.delayedHideToast()}),e&2&&(y(n.toastClasses),x("display",n.displayStyle))},standalone:!0,features:[u],attrs:Se,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,n){e&1&&_(0,si,3,0,"button",0)(1,ai,3,5,"div",1)(2,li,1,3,"div",2)(3,ci,2,4,"div",3)(4,pi,2,2,"div",4),e&2&&(d("ngIf",n.options.closeButton),c(),d("ngIf",n.title),c(),d("ngIf",n.message&&n.options.enableHtml),c(),d("ngIf",n.message&&!n.options.enableHtml),c(),d("ngIf",n.options.progressBar))},dependencies:[V],encapsulation:2,changeDetection:0})}return i})(),Vn=I(v({},Oe),{toastComponent:hi});var Ee=(i,o)=>{let t=g(W);return o(i).pipe(At(e=>(console.log("error from interceproers"),t.error(e.error.message,"Elevate ECommerce"),Ot(()=>e))))};var Ne=(i,o)=>{let t=g(Ct);return t.show("loadingEx1"),o(i).pipe(Et(()=>{t.hide("loadingEx1")}))};var Fe={providers:[ae(De),oe(),te(ie(),ee([Ee,Ne])),se(),Ae(),Ft(pe)]};var vi={providers:[re()]},Re=Yt(Fe,vi);var gi=()=>ne(ue,Re),Co=gi;export{Co as a};