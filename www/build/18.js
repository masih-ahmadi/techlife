webpackJsonp([18],{

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsLanguagesPageModule", function() { return AccountSettingsLanguagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languages__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(526);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountSettingsLanguagesPageModule = (function () {
    function AccountSettingsLanguagesPageModule() {
    }
    return AccountSettingsLanguagesPageModule;
}());
AccountSettingsLanguagesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__languages__["a" /* AccountSettingsLanguagesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__languages__["a" /* AccountSettingsLanguagesPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AccountSettingsLanguagesPageModule);

//# sourceMappingURL=languages.module.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingsLanguagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_global__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountSettingsLanguagesPage = (function () {
    function AccountSettingsLanguagesPage(navCtrl, settings, toast, fb, navParams, translate, plt) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.toast = toast;
        this.fb = fb;
        this.navParams = navParams;
        this.translate = translate;
        this.plt = plt;
        this.languages = __WEBPACK_IMPORTED_MODULE_4__app_app_global__["a" /* App */].languages;
        this.form = this.fb.group({
            lang: [this.settings.all.language || this.translate.currentLang, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
    }
    AccountSettingsLanguagesPage.prototype.doSubmit = function () {
        var _this = this;
        this.settings.setSettings(this.form.value.lang, 'language');
        this.translate.use(this.form.value.lang);
        if (this.form.value.lang == "ar") {
            this.plt.setDir('rtl', true);
        }
        else {
            this.plt.setDir('ltr', true);
        }
        this.translate.get('LANGUAGE_SAVED').subscribe(function (x) {
            _this.toast.show(x);
        });
    };
    return AccountSettingsLanguagesPage;
}());
AccountSettingsLanguagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-settings-languages',template:/*ion-inline-start:"C:\Users\admin\Desktop\stor\src\pages\account\settings\languages\languages.html"*/'<ion-header no-border no-lines>\n  <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content>\n    <form (submit)="doSubmit()" [formGroup]="form" novalidate>\n      <ion-list radio-group formControlName="lang">\n        <h1 margin-left margin-bottom>{{ \'LANGUAGES\' | translate}}</h1>\n        <ion-item mode="ios" *ngFor="let x of languages">\n          <ion-label>{{x.title}}</ion-label>\n          <ion-radio mode="ios" [value]="x.id" required></ion-radio>\n        </ion-item>\n        <div padding>\n          <button ion-button block [disabled]="!form.valid">{{ \'SAVE\' | translate}}</button>\n        </div>\n      </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\Desktop\stor\src\pages\account\settings\languages\languages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_providers__["g" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_providers__["h" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */]])
], AccountSettingsLanguagesPage);

//# sourceMappingURL=languages.js.map

/***/ })

});
//# sourceMappingURL=18.js.map