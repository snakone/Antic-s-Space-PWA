(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4P23":function(n,t){n.exports=""},"6sod":function(n,t){n.exports='<ion-slides (ionSlideDidChange)="slideChange($event)">\r\n  <ion-slide [style]="a.cover | sanitizer:\'style\'"\r\n             *ngFor="let a of articles">\r\n            <div class="content">\r\n            <h5>{{(a.category | translate) | uppercase}}</h5>\r\n            <p>{{a.title}}</p>\r\n          </div>\r\n  </ion-slide>\r\n</ion-slides>\r\n'},"8a8t":function(n,t){n.exports="ion-segment-button {\n  color: var(--ion-color-light) !important; }\n\n.segment-button-checked ion-icon {\n  color: var(--ion-color-primary) !important; }\n\n.sc-ion-segment-md-h {\n  --color-checked: var(--ion-color-dark) !important; }\n\nion-label {\n  font-weight: bold; }\n\nion-icon {\n  position: relative;\n  left: 15px;\n  color: var(--ion-color-medium); }\n\n.segment::-webkit-scrollbar {\n  height: 8px;\n  display: block; }\n\n.segment::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  border-radius: 5px; }\n\n.segment::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  box-shadow: inset 0 0 3px var(--ion-color-primary); }\n"},"9wJs":function(n,t){n.exports="ion-slide {\n  min-height: 190px;\n  height: 190px;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  text-align: left; }\n  ion-slide:hover {\n    cursor: pointer; }\n  ion-slides {\n  max-width: 100%;\n  margin: 0 auto; }\n  .swiper-slide {\n  display: block; }\n  .content {\n  position: absolute;\n  bottom: 15px;\n  left: 15px; }\n  h5 {\n  background: var(--ion-color-primary);\n  padding: 4px 24px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: .6em;\n  font-weight: 900;\n  border-radius: 2px; }\n  p {\n  font-weight: 900;\n  padding-right: 90px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  text-shadow: 1px 2px 1px #474747, 1px 2px 2px #000000; }\n  @media (min-width: 975px) {\n  p {\n    padding-right: 155px; } }\n"},AHr2:function(n,t){n.exports='<app-header></app-header>\r\n\r\n<ion-content>\r\n  <app-segments></app-segments>\r\n  <app-articles-slide *ngIf="articles.length > 0"\r\n                      [articles]="articles">\r\n  </app-articles-slide>\r\n</ion-content>\r\n'},BAW5:function(n,t,e){"use strict";e.r(t);var i=e("mrSG"),o=e("CcnG"),r=e("Ip0R"),s=e("gIcY"),c=e("ZYCi"),a=e("ZZ/e"),p=e("s4d1"),l=function(){function n(n){this._article=n,this.articles=[],this.main=[],this.converted=!1}return n.prototype.ngOnInit=function(){this.getArticles()},n.prototype.getArticles=function(){var n=this;this._article.getArticles().subscribe(function(t){t.ok&&(n.articles=t.articles)})},n=i.c([Object(o.n)({selector:"app-articles",template:e("AHr2"),styles:[e("4P23")]}),i.f("design:paramtypes",[p.a])],n)}(),d=e("V/fk"),g=e("HrZV"),u=function(){function n(){this.categories=g.a}return n.prototype.ngOnInit=function(){},n.prototype.segmentChanged=function(n){},n=i.c([Object(o.n)({selector:"app-segments",template:e("OM6X"),styles:[e("8a8t")]}),i.f("design:paramtypes",[])],n)}(),h=function(){function n(){}return n.prototype.onResize=function(){var n=this;this.slides&&setTimeout(function(){return n.slides.update()},100)},n.prototype.ngOnInit=function(){},n.prototype.ionViewDidEnter=function(){this.onResize()},n.prototype.slideChange=function(n){return i.b(this,void 0,void 0,function(){return i.e(this,function(n){switch(n.label){case 0:return[4,this.slides.getActiveIndex()];case 1:return n.sent(),[2]}})})},i.c([Object(o.E)(),i.f("design:type",Array)],n.prototype,"articles",void 0),i.c([Object(o.lb)(a.d),i.f("design:type",a.d)],n.prototype,"slides",void 0),i.c([Object(o.z)("window:resize"),i.f("design:type",Function),i.f("design:paramtypes",[]),i.f("design:returntype",void 0)],n.prototype,"onResize",null),n=i.c([Object(o.n)({selector:"app-articles-slide",template:e("6sod"),styles:[e("9wJs")]}),i.f("design:paramtypes",[])],n)}(),m=e("PCNd");e.d(t,"ArticlesPageModule",function(){return b});var f=[{path:"",component:l}],b=function(){function n(){}return n=i.c([Object(o.J)({imports:[r.b,s.c,a.e,d.a,m.a,c.i.forChild(f)],declarations:[l,u,h]})],n)}()},OM6X:function(n,t){n.exports='<ion-segment (ionChange)="segmentChanged($event)"\r\n              class="segment"\r\n              mode="md"\r\n              scrollable>\r\n  <ion-segment-button color="light" *ngFor="let c of categories">\r\n      <ion-item lines="none">\r\n        <ion-icon [name]="c.icon" slot="start"></ion-icon>\r\n        <ion-label text-capitalize>{{c.name}}</ion-label>\r\n      </ion-item>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n'}}]);