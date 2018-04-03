webpackJsonp([27],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
var App = {
    store: 'Ajwadates',
    ContactEmail: 'mahmadi@techlife.af',
    url: 'http://localhost:8080/ionic/',
    OneSignalAppID: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    GCM: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    consumerKey: 'ck_7ea66ceda242f09336d3cdcaf0755e9055b20488',
    consumerSecret: 'cs_446cd424068d0c3e002da7f0b1f5b4c830bcc039',
    paypalSandboxClientID: 'AZjyISbp1zmOhZ0o_iAG3W2IGjlz2hvEC-8cGoQ7fXcMFN9afaRuW0X1B1PVSgkSuTQWOKqM9N4NTkOP',
    paypalLiveClientID: '',
    paypalState: 'PayPalEnvironmentSandbox',
    languages: [
        { id: 'en', title: 'English' },
        { id: 'ar', title: 'Arabic' },
    ],
    defaultLang: 'en'
};
//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_paypal__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_rate__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_img_viewer__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_parallax_header_parallax_header__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_components__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_pipes__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_providers__ = __webpack_require__(99);
// Ionic native providers










// Modules





// Directives

// Components

// Pipes

// Providers

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/languages/', '.json');
}
var MODULES = [
    __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_14_ionic_img_viewer__["a" /* IonicImageViewerModule */],
    // database name for cart, wish, checkout, etc
    __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot({
        name: '_ionstore',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["b" /* TranslateModule */].forRoot({
        loader: {
            provide: __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["a" /* TranslateLoader */],
            useFactory: (createTranslateLoader),
            deps: [__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */]]
        }
    })
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_17__pipes_pipes__["b" /* MomentPipe */],
    __WEBPACK_IMPORTED_MODULE_17__pipes_pipes__["a" /* DiscountPipe */],
    __WEBPACK_IMPORTED_MODULE_17__pipes_pipes__["c" /* MoneyPipe */]
];
var PROVIDERS = [
    //AppState,
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["i" /* UserProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["f" /* OrderProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["a" /* AddressProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["k" /* WooCommerceProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["g" /* SettingsProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["j" /* WishlistProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["b" /* CartProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["c" /* HistoryProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["d" /* LoadingProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["e" /* NotifProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_providers__["h" /* ToastProvider */],
    // Ionic native specific providers
    __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */],
    __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__["a" /* StatusBar */],
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
    __WEBPACK_IMPORTED_MODULE_3__ionic_native_paypal__["a" /* PayPal */],
    __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__["a" /* Stripe */],
    __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
    __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
    __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_rate__["a" /* AppRate */],
    __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__["a" /* AppVersion */],
    __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_16__components_components__["b" /* IonRating */],
    __WEBPACK_IMPORTED_MODULE_16__components_components__["a" /* FaIconComponent */]
];
var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_15__directives_parallax_header_parallax_header__["a" /* ParallaxHeader */]
];
//# sourceMappingURL=app.imports.js.map

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		899,
		26
	],
	"../pages/account/chats/chats.module": [
		900,
		25
	],
	"../pages/account/chats/message/message.module": [
		903,
		24
	],
	"../pages/account/help/help.module": [
		901,
		23
	],
	"../pages/account/notification/notification.module": [
		902,
		22
	],
	"../pages/account/profile/profile.module": [
		907,
		21
	],
	"../pages/account/saved-address/add-address/add-address.module": [
		905,
		20
	],
	"../pages/account/saved-address/saved-address.module": [
		904,
		19
	],
	"../pages/account/settings/languages/languages.module": [
		911,
		18
	],
	"../pages/account/settings/notifications/notifications.module": [
		906,
		17
	],
	"../pages/account/settings/settings.module": [
		910,
		16
	],
	"../pages/account/settings/tos/tos.module": [
		908,
		15
	],
	"../pages/cart/cart.module": [
		909,
		14
	],
	"../pages/categories/categories.module": [
		915,
		13
	],
	"../pages/checkout/checkout.module": [
		912,
		12
	],
	"../pages/home/home.module": [
		924,
		11
	],
	"../pages/login/login.module": [
		917,
		10
	],
	"../pages/orders/detail/detail.module": [
		913,
		9
	],
	"../pages/orders/orders.module": [
		914,
		8
	],
	"../pages/product/grid/grid.module": [
		925,
		7
	],
	"../pages/product/mini-cart/mini-cart.module": [
		916,
		6
	],
	"../pages/product/modal-categories/modal-categories.module": [
		918,
		5
	],
	"../pages/product/product.module": [
		919,
		4
	],
	"../pages/search/search.module": [
		922,
		3
	],
	"../pages/tabs/tabs.module": [
		920,
		2
	],
	"../pages/thanks/thanks.module": [
		921,
		1
	],
	"../pages/wishlist/wishlist.module": [
		923,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 293;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_imports__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["d" /* PIPES */],
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["b" /* DIRECTIVES */],
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["a" /* COMPONENTS */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* IonicImageViewerModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["d" /* PIPES */],
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["a" /* COMPONENTS */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_imports__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__app_imports__["c" /* MODULES */],
            __WEBPACK_IMPORTED_MODULE_0__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: true,
                backButtonText: ''
            }, {
                links: [
                    { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/chats/chats.module#AccountChatsPageModule', name: 'AccountChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/help/help.module#AccountHelpPageModule', name: 'AccountHelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/notification/notification.module#AccountNotificationPageModule', name: 'AccountNotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/chats/message/message.module#AccountChatsMessagePageModule', name: 'AccountChatsMessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/saved-address/saved-address.module#SavedAddressPageModule', name: 'SavedAddressPage', segment: 'saved-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/saved-address/add-address/add-address.module#AddAddressPageModule', name: 'AddAddressPage', segment: 'add-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/settings/notifications/notifications.module#AccountSettingsNotificationsPageModule', name: 'AccountSettingsNotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/profile/profile.module#AccountProfilePageModule', name: 'AccountProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/settings/tos/tos.module#AccountSettingsTosPageModule', name: 'AccountSettingsTosPage', segment: 'tos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/settings/settings.module#AccountSettingsPageModule', name: 'AccountSettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/settings/languages/languages.module#AccountSettingsLanguagesPageModule', name: 'AccountSettingsLanguagesPage', segment: 'languages', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orders/detail/detail.module#OrderDetailPageModule', name: 'OrderDetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product/mini-cart/mini-cart.module#MiniCartPageModule', name: 'MiniCartPage', segment: 'mini-cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product/modal-categories/modal-categories.module#ModalCategoriesPageModule', name: 'ModalCategoriesPage', segment: 'modal-categories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/thanks/thanks.module#ThanksPageModule', name: 'ThanksPage', segment: 'thanks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/wishlist/wishlist.module#WishlistPageModule', name: 'WishlistPage', segment: 'wishlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product/grid/grid.module#ProductGridPageModule', name: 'ProductGridPage', segment: 'grid', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__app_imports__["e" /* PROVIDERS */],
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_global__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProvider = (function () {
    function UserProvider(storage, events, http) {
        this.storage = storage;
        this.events = events;
        this.http = http;
        this.USER_KEY = 'user';
        this.user = {};
        this.load();
        __WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url = __WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/api';
        // console.log(App.url);
    }
    UserProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.USER_KEY).then(function (val) {
            if (val)
                _this._loggedIn(val, 0);
        });
    };
    UserProvider.prototype._loggedIn = function (user, index) {
        this.user = user;
        this.save();
        this.events.publish('user:login', { tabIndex: index });
        return this.user;
    };
    UserProvider.prototype.login = function (data) {
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/user/generate_auth_cookie/?insecure=cool&username=' + data.user + '&password=' + data.pass);
        seq.map(function (res) { });
        return seq;
    };
    UserProvider.prototype.reset = function (data) {
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/user/retrieve_password/?insecure=cool&user_login=' + data.email);
        seq.map(function (res) { });
        return seq;
    };
    UserProvider.prototype.signup = function (data) {
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/user/register/?insecure=cool&nonce=' + data.nonce + '&first_name=' + data.name + '&display_name=' + data.name + '&username=' + data.user + '&user_pass=' + data.pass + '&email=' + data.email);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    UserProvider.prototype.update = function (data) {
        var cookie = this.user.cookie;
        var f = data.first ? '&first_name=' + data.first : '';
        var l = data.last ? '&last_name=' + data.last : '';
        var b = data.bio ? '&description=' + data.bio : '';
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/user/update_user_meta_vars/?insecure=cool&cookie=' + cookie + f + l + b);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    UserProvider.prototype.nonce = function (controller, method) {
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/get_nonce/?controller=' + controller + '&method=' + method);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    UserProvider.prototype.isLoggedIn = function () {
        var cookie = this.user.cookie;
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/user/validate_auth_cookie/?insecure=cool&cookie=' + cookie);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    UserProvider.prototype.logout = function () {
        var _this = this;
        this.user = {};
        return this.storage.remove(this.USER_KEY).then(function () {
            _this.events.publish('user:logout');
        });
    };
    UserProvider.prototype.setUserUpdate = function (data) {
        if (data.first)
            this.user.user.firstname = data.first;
        if (data.last)
            this.user.user.lastname = data.last;
        if (data.bio)
            this.user.user.description = data.bio;
        return this.save();
    };
    Object.defineProperty(UserProvider.prototype, "email", {
        get: function () {
            if (this.user.user.email)
                return this.user.user.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "name", {
        get: function () {
            if (this.user.user.displayname)
                return this.user.user.displayname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "firstname", {
        get: function () {
            if (this.user.user.firstname)
                return this.user.user.firstname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "lastname", {
        get: function () {
            if (this.user.user.lastname)
                return this.user.user.lastname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "displayname", {
        get: function () {
            if (this.user.user.displayname)
                return this.user.user.displayname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "id", {
        get: function () {
            if (this.user.user.id)
                return this.user.user.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "username", {
        get: function () {
            if (this.user.user.username)
                return this.user.user.username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "cookie", {
        get: function () {
            if (this.user.cookie)
                return this.user.cookie;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "all", {
        get: function () {
            if (this.user)
                return this.user.user;
        },
        enumerable: true,
        configurable: true
    });
    UserProvider.prototype.save = function () {
        return this.storage.set(this.USER_KEY, this.user);
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_global__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_stripe__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrderProvider = (function () {
    function OrderProvider(storage, http, stripe, events, payPal) {
        this.storage = storage;
        this.http = http;
        this.stripe = stripe;
        this.events = events;
        this.payPal = payPal;
        this.ORDER_KEY = 'order';
        this.order = {};
        this.load();
    }
    OrderProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.ORDER_KEY).then(function (val) {
            if (val) {
                _this.order = val;
                return _this.order;
            }
            else {
                _this.save();
            }
        });
    };
    OrderProvider.prototype.setBilling = function (billing) {
        this.order.billing = billing;
        this.events.publish('order:go');
        return this.save();
    };
    OrderProvider.prototype.setShipping = function (shipping) {
        this.order.shipping = shipping;
        this.events.publish('order:go');
        return this.save();
    };
    Object.defineProperty(OrderProvider.prototype, "billing", {
        get: function () {
            return this.order.billing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderProvider.prototype, "shipping", {
        get: function () {
            return this.order.shipping;
        },
        enumerable: true,
        configurable: true
    });
    OrderProvider.prototype.getToken = function (opt) {
        this.stripe.setPublishableKey(opt.publishable_key);
        var card = {
            number: opt.no,
            expMonth: opt.month,
            expYear: opt.year,
            cvc: opt.cvc
        };
        return this.stripe.createCardToken(card)
            .then(function (token) {
            return token;
        }, function (err) {
            return err;
        });
    };
    OrderProvider.prototype.stripeCharge = function (opt, token) {
        var data = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["e" /* URLSearchParams */](opt);
        data.set('currency', opt.currency);
        data.set('amount', opt.total);
        data.set('description', opt.billing.first_name + ' - ' + opt.total);
        data.set('receipt_email', opt.billing.email);
        if (opt.customer_id)
            data.set("metadata[Customer ID]", opt.customer_id);
        data.set("metadata[Customer Email]", opt.billing.email);
        data.set("metadata[Customer Name]", opt.billing.first_name);
        data.set("metadata[Customer Device]", opt.device);
        data.set('shipping[phone]', opt.shipping.phone);
        data.set('shipping[carrier]', opt.carrier);
        data.set('shipping[name]', opt.shipping.first_name);
        data.set('shipping[address][line1]', opt.shipping.address_1);
        data.set('shipping[address][postal_code]', opt.shipping.postcode);
        data.set('shipping[address][city]', opt.shipping.city);
        data.set('shipping[address][state]', opt.shipping.state);
        data.set('shipping[address][country]', opt.shipping.country);
        data.set('source', token.id);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + opt.secret_key);
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var seq = this.http.post('https://api.stripe.com/v1/charges', data.toString(), options);
        seq.map(function (res) {
            res.json();
            console.log(res.json());
        });
        return seq;
    };
    OrderProvider.prototype.checkoutPaypal = function (order, opt) {
        var _this = this;
        return this.payPal.init({
            PayPalEnvironmentProduction: __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* App */].paypalLiveClientID,
            PayPalEnvironmentSandbox: __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* App */].paypalSandboxClientID
        }).then(function () {
            return _this.payPal.prepareToRender(__WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* App */].paypalState, new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var paymentDetail = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["d" /* PayPalPaymentDetails */](opt.detail.subtotal.toFixed(2), opt.detail.shipping.toFixed(2), '0.00');
                var payment = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["c" /* PayPalPayment */](opt.total.toFixed(2), opt.currency, opt.desc, 'sale', paymentDetail);
                return _this.payPal.renderSinglePaymentUI(payment).then(function (x) {
                    return x;
                    // Successfully paid`
                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    OrderProvider.prototype.reset = function () {
        this.order = {};
        return this.storage.remove(this.ORDER_KEY).then(function () { });
    };
    OrderProvider.prototype.save = function () {
        return this.storage.set(this.ORDER_KEY, this.order);
    };
    return OrderProvider;
}());
OrderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["a" /* PayPal */]])
], OrderProvider);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressProvider = (function () {
    function AddressProvider(storage) {
        this.storage = storage;
        this.ADDRESS_KEY = 'address';
        this.address = [];
        this.load();
    }
    AddressProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.ADDRESS_KEY).then(function (val) {
            if (val) {
                _this.address = val;
                return _this.address;
            }
            else {
                _this.save();
            }
        });
    };
    AddressProvider.prototype.add = function (data) {
        this.address.push(data);
        console.log(this.address);
        return this.save();
    };
    AddressProvider.prototype.update = function (index, data) {
        this.address[index] = data;
        return this.save();
    };
    AddressProvider.prototype.remove = function (index) {
        this.address.splice(index, 1);
        return this.save();
    };
    AddressProvider.prototype.getById = function (id) {
        var tmp = {};
        for (var i in this.address) {
            if (this.address[i].id == id) {
                tmp = {
                    index: i,
                    data: this.address[i]
                };
                break;
            }
        }
        return tmp;
    };
    Object.defineProperty(AddressProvider.prototype, "getPrimary", {
        get: function () {
            var tmp = {};
            for (var i in this.address) {
                if (this.address[i].primary) {
                    tmp = this.address[i];
                    break;
                }
            }
            if (this.address.length > 0)
                return tmp;
            else
                return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressProvider.prototype, "length", {
        get: function () {
            return this.address.length;
        },
        enumerable: true,
        configurable: true
    });
    AddressProvider.prototype.setPrimary = function (index) {
        for (var i in this.address)
            this.address[i].primary = false;
        this.address[index].primary = true;
        return this.save();
    };
    AddressProvider.prototype.save = function () {
        return this.storage.set(this.ADDRESS_KEY, this.address);
    };
    Object.defineProperty(AddressProvider.prototype, "all", {
        get: function () {
            return this.address;
        },
        enumerable: true,
        configurable: true
    });
    return AddressProvider;
}());
AddressProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], AddressProvider);

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartProvider = (function () {
    function CartProvider(storage) {
        this.storage = storage;
        this.CART_KEY = 'cart';
        this.cart = [];
        this.load();
    }
    CartProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.CART_KEY).then(function (val) {
            if (val && val.length > 0) {
                _this.cart = val;
                return _this.cart;
            }
            else {
                _this.save();
            }
        });
    };
    CartProvider.prototype.post = function (product, qty) {
        if (qty === void 0) { qty = 1; }
        this.toCart(product, qty);
    };
    CartProvider.prototype.toCart = function (product, qty) {
        var exist = false;
        for (var i in this.cart) {
            if (this.cart[i].variation_id) {
                if (this.cart[i].variation_id == product.variation_id) {
                    this.cart[i].quantity += qty;
                    exist = true;
                    break;
                }
            }
            else {
                if (this.cart[i].id == product.id) {
                    this.cart[i].quantity += qty;
                    exist = true;
                    break;
                }
            }
        }
        if (!exist) {
            product.quantity = qty;
            this.add(product);
        }
        this.save();
    };
    CartProvider.prototype.add = function (product) {
        var tmp = {
            quantity: product.quantity,
            name: product.name,
            images: product.images,
            id: product.id,
            price: product.price,
            regular_price: product.regular_price,
            on_sale: product.on_sale,
            in_stock: product.in_stock,
            attributes: product.attributes,
            variation_id: product.variation_id
        };
        this.cart.push(tmp);
        return this.save();
    };
    CartProvider.prototype.remove = function (product) {
        for (var i in this.cart) {
            if (product.variation_id) {
                if (this.cart[i].id == product.id && this.cart[i].variation_id == product.variation_id) {
                    this.cart.splice(parseInt(i), 1);
                    break;
                }
            }
            else {
                if (this.cart[i].id == product.id) {
                    this.cart.splice(parseInt(i), 1);
                    break;
                }
            }
        }
        return this.save();
    };
    Object.defineProperty(CartProvider.prototype, "totalQty", {
        get: function () {
            return this.cart.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartProvider.prototype, "totalQtyDetail", {
        get: function () {
            var qty = 0;
            for (var i in this.cart)
                qty += this.cart[i].quantity;
            return qty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartProvider.prototype, "lineItems", {
        get: function () {
            var tmp, line_items = [];
            for (var i in this.cart) {
                tmp = {
                    meta_data: [{
                            key: 'img',
                            value: this.cart[i].images[0].src
                        }],
                    product_id: this.cart[i].id,
                    quantity: this.cart[i].quantity
                };
                if (this.cart[i].variation_id)
                    tmp.variation_id = this.cart[i].variation_id;
                line_items.push(tmp);
            }
            return line_items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartProvider.prototype, "total", {
        get: function () {
            var total = 0;
            for (var i in this.cart)
                total += parseInt(this.cart[i].price) * parseInt(this.cart[i].quantity);
            return total;
        },
        enumerable: true,
        configurable: true
    });
    CartProvider.prototype.save = function () {
        return this.storage.set(this.CART_KEY, this.cart);
    };
    CartProvider.prototype.reset = function () {
        this.cart = [];
        return this.storage.remove(this.CART_KEY).then(function () { });
    };
    Object.defineProperty(CartProvider.prototype, "all", {
        get: function () {
            return this.cart;
        },
        enumerable: true,
        configurable: true
    });
    return CartProvider;
}());
CartProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], CartProvider);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryProvider = (function () {
    function HistoryProvider(storage) {
        this.storage = storage;
        this.HISTORY_KEY = 'history';
        this.history = [];
        this.load();
    }
    HistoryProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.HISTORY_KEY).then(function (val) {
            if (val) {
                _this.history = val;
                return _this.history;
            }
            else {
                _this.save();
            }
        });
    };
    HistoryProvider.prototype.post = function (product) {
        var exist = false;
        for (var i in this.history) {
            if (this.history[i].id == product.id) {
                exist = true;
                break;
            }
        }
        if (!exist)
            this.history.push(product);
        return this.save();
    };
    Object.defineProperty(HistoryProvider.prototype, "clear", {
        get: function () {
            this.history = [];
            return this.save();
        },
        enumerable: true,
        configurable: true
    });
    HistoryProvider.prototype.save = function () {
        return this.storage.set(this.HISTORY_KEY, this.history);
    };
    Object.defineProperty(HistoryProvider.prototype, "all", {
        get: function () {
            return this.history;
        },
        enumerable: true,
        configurable: true
    });
    return HistoryProvider;
}());
HistoryProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], HistoryProvider);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifProvider = (function () {
    function NotifProvider(storage) {
        this.storage = storage;
        this.NOTIF_KEY = 'notif';
        this.notif = [];
        this.load();
    }
    NotifProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.NOTIF_KEY).then(function (val) {
            if (val) {
                _this.notif = val;
                return _this.notif;
            }
            else {
                _this.save();
            }
        });
    };
    NotifProvider.prototype.remove = function (id) {
        for (var i in this.notif) {
            if (this.notif[i].id == id) {
                this.notif.splice(i, 1);
                break;
            }
        }
        return this.save();
    };
    NotifProvider.prototype.post = function (data) {
        data.id = new Date().getTime();
        this.notif.push(data);
        return this.save();
    };
    Object.defineProperty(NotifProvider.prototype, "clear", {
        get: function () {
            this.notif = [];
            return this.save();
        },
        enumerable: true,
        configurable: true
    });
    NotifProvider.prototype.save = function () {
        return this.storage.set(this.NOTIF_KEY, this.notif);
    };
    Object.defineProperty(NotifProvider.prototype, "all", {
        get: function () {
            return this.notif;
        },
        enumerable: true,
        configurable: true
    });
    return NotifProvider;
}());
NotifProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], NotifProvider);

//# sourceMappingURL=notif.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistProvider = (function () {
    function WishlistProvider(storage) {
        this.storage = storage;
        this.WISHLIST_KEY = 'wish';
        this.wishlist = [];
        this.load();
    }
    WishlistProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.WISHLIST_KEY).then(function (val) {
            if (val && val.length > 0) {
                _this.wishlist = val;
                return _this.wishlist;
            }
            else {
                _this.save();
            }
        });
    };
    WishlistProvider.prototype.post = function (product) {
        if (product.isFav)
            this.remove(product);
        else
            this.setFav(product);
    };
    WishlistProvider.prototype.isFav = function (product) {
        var exist = false;
        for (var i in this.wishlist) {
            if (this.wishlist[i].id == product.id) {
                exist = true;
                break;
            }
        }
        return exist;
    };
    Object.defineProperty(WishlistProvider.prototype, "total", {
        get: function () {
            return this.wishlist.length || 0;
        },
        enumerable: true,
        configurable: true
    });
    WishlistProvider.prototype.setFav = function (product) {
        this.wishlist.push(product);
        return this.save();
    };
    WishlistProvider.prototype.remove = function (product) {
        for (var i in this.wishlist) {
            if (this.wishlist[i].id == product.id) {
                this.wishlist.splice(parseInt(i), 1);
                break;
            }
        }
        return this.save();
    };
    WishlistProvider.prototype.save = function () {
        return this.storage.set(this.WISHLIST_KEY, this.wishlist);
    };
    WishlistProvider.prototype.setFirst = function (value) {
        return this.storage.set(this.WISHLIST_KEY, value);
    };
    Object.defineProperty(WishlistProvider.prototype, "all", {
        get: function () {
            return this.wishlist;
        },
        enumerable: true,
        configurable: true
    });
    return WishlistProvider;
}());
WishlistProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], WishlistProvider);

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingProvider = (function () {
    function LoadingProvider(loader, translate) {
        this.loader = loader;
        this.translate = translate;
    }
    LoadingProvider.prototype.present = function () {
        var _this = this;
        this.translate.get(['WAIT']).subscribe(function (x) {
            _this.load = _this.loader.create({
                spinner: 'dots'
            });
        });
        this.load.present();
    };
    LoadingProvider.prototype.dismiss = function () {
        this.load.dismiss();
    };
    return LoadingProvider;
}());
LoadingProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], LoadingProvider);

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastProvider = (function () {
    function ToastProvider(_toast) {
        this._toast = _toast;
    }
    ToastProvider.prototype.show = function (msg, pos) {
        if (pos === void 0) { pos = 'bottom'; }
        this._toast.create({
            message: msg,
            duration: 2000,
            position: pos
        }).present();
    };
    ToastProvider.prototype.showWithClose = function (msg, pos) {
        if (pos === void 0) { pos = 'bottom'; }
        this._toast.create({
            message: msg,
            showCloseButton: true,
            closeButtonText: 'Ok'
        }).present();
    };
    return ToastProvider;
}());
ToastProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
], ToastProvider);

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsProvider = (function () {
    function SettingsProvider(storage) {
        this.storage = storage;
        this.SETTINGS_KEY = 'settings';
        this.settings = {};
        this.load();
    }
    SettingsProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (val) {
            if (val) {
                _this.settings = val;
                return _this.settings;
            }
            else {
                _this.storage.set(_this.SETTINGS_KEY, _this.settings);
            }
        });
    };
    SettingsProvider.prototype.getCountries = function () {
        var countries = [];
        var val = this.settings.countries;
        if (val.value.length == 0) {
            for (var i in val.options)
                countries.push({ id: i, name: val.options[i] });
        }
        else {
            for (var i in val.value)
                countries.push({ id: i, name: val.value[i] });
        }
        return countries;
    };
    SettingsProvider.prototype.setSettings = function (data, id) {
        var tmp = this.settings;
        tmp[id] = data;
        return this.save(tmp);
    };
    SettingsProvider.prototype.save = function (data) {
        return this.storage.set(this.SETTINGS_KEY, data);
    };
    Object.defineProperty(SettingsProvider.prototype, "all", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    return SettingsProvider;
}());
SettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], SettingsProvider);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooCommerceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_global__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WooCommerceProvider = (function () {
    function WooCommerceProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        this.woo = {};
        this.categories = [];
        this.init();
        this.tmp = new __WEBPACK_IMPORTED_MODULE_5__providers__["g" /* SettingsProvider */](this.storage);
    }
    WooCommerceProvider.prototype.loadSetting = function () {
        var _this = this;
        return this.WooCommerce.getAsync('system_status').then(function (x) {
            _this.tmp.setSettings(JSON.parse(x.body).settings, 'settings');
            return JSON.parse(x.body).settings;
        }, function (err) {
            console.log(err);
        });
    };
    WooCommerceProvider.prototype.saveCountries = function () {
        var _this = this;
        return this.WooCommerce.getAsync('settings/general/woocommerce_specific_ship_to_countries').then(function (x) {
            _this.tmp.setSettings(JSON.parse(x.body), 'countries');
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.loadZones = function () {
        var _this = this;
        return this.setShippingZone().then(function (x) {
            _this.tmp.setSettings(x, 'zones');
            return x;
        });
    };
    WooCommerceProvider.prototype.loadPayments = function () {
        return this.WooCommerce.getAsync('payment_gateways').then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getOrders = function (id, page, per_page, status) {
        var p = page ? '&page=' + page : '';
        var pp = per_page ? '&per_page=' + per_page : '&per_page=10';
        var s = status ? '&status=' + status : '';
        return this.WooCommerce.getAsync('orders?customer=' + id + p + pp + s).then(function (x) {
            var tmp = JSON.parse(x.body);
            var order = {
                paid: [],
                unpaid: []
            };
            for (var i in tmp) {
                for (var j in tmp[i].line_items) {
                    for (var k in tmp[i].line_items[j].meta_data) {
                        if (tmp[i].line_items[j].meta_data[k].key == 'img')
                            tmp[i].line_items[j].img = tmp[i].line_items[j].meta_data[k].value;
                    }
                }
                if (tmp[i].status == 'completed')
                    order.paid.push(tmp[i]);
                else
                    order.unpaid.push(tmp[i]);
            }
            return order;
        });
    };
    WooCommerceProvider.prototype.getOrderDetail = function (id) {
        return this.WooCommerce.getAsync('orders/' + id).then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getZoneLocation = function (id) {
        return this.WooCommerce.getAsync('shipping/zones/' + id + '/locations').then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getShippingZoneMethod = function (id) {
        return this.WooCommerce.getAsync('shipping/zones/' + id + '/methods').then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getTaxes = function () {
        return this.WooCommerce.getAsync('taxes').then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getSingleZone = function (zones, data) {
        var zone = false, rest = false, tmp;
        for (var i in zones) {
            if (zones[i].locations.length > 0) {
                for (var j in zones[i].locations) {
                    if ((zones[i].locations[j].type == 'country' && zones[i].locations[j].code == data.country) ||
                        (zones[i].locations[j].type == 'state' && zones[i].locations[j].code == data.country + ':' + data.state) ||
                        (zones[i].locations[j].type == 'postcode' && zones[i].locations[j].code == data.postcode)) {
                        tmp = zones[i].id;
                        zone = true;
                        break;
                    }
                }
            }
        }
        if (!zone) {
            for (var i in zones) {
                if (zones[i].locations.length == 0 && zones[i].id > 0) {
                    tmp = zones[i].id;
                    rest = true;
                    break;
                }
            }
        }
        if (!zone && !rest && zones[0])
            tmp = zones[0].id;
        return tmp;
    };
    WooCommerceProvider.prototype.setShippingZone = function () {
        var _this = this;
        return this.WooCommerce.getAsync('shipping/zones').then(function (x) {
            var zone = [];
            var tmp = JSON.parse(x.body);
            var _loop_1 = function (i) {
                // if(tmp[i].id > 0){
                _this.getZoneLocation(tmp[i].id).then(function (val) {
                    // if(val.length > 0){
                    zone.push({
                        id: tmp[i].id,
                        name: tmp[i].name,
                        order: tmp[i].order,
                        locations: val
                    });
                    // }
                });
                // }
            };
            for (var i in tmp) {
                _loop_1(i);
            }
            return zone;
        });
    };
    WooCommerceProvider.prototype.getProductReviews = function (id) {
        return this.WooCommerce.getAsync("products/" + id + "/reviews").then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getProductVariations = function (id) {
        return this.WooCommerce.getAsync("products/" + id + "/variations").then(function (x) {
            return JSON.parse(x.body);
            //tmp.price = tmp.variations[0].price + ' - ' + tmp.variations[tmp.variations.length-1].price;
        });
    };
    WooCommerceProvider.prototype.getSingleProduct = function (id) {
        return this.WooCommerce.getAsync("products/" + id).then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getProductRelated = function (related_ids) {
        var tmp = [];
        for (var i in related_ids) {
            this.getSingleProduct(related_ids[i]).then(function (x) {
                tmp.push(x);
            });
        }
        return tmp;
    };
    WooCommerceProvider.prototype.getAllProducts = function (page, category, search, min_price, max_price, per_page, status, order, attribute, attribute_term) {
        if (attribute === void 0) { attribute = ''; }
        if (attribute_term === void 0) { attribute_term = ''; }
        var p = page ? '&page=' + page : '';
        var pp = per_page ? '&per_page=' + per_page : '&per_page=10';
        var c = category ? '&category=' + category : '';
        var q = search ? '&search=' + search : '';
        var min = min_price ? '&min_price=' + min_price : '';
        var max = max_price ? '&max_price=' + max_price : '';
        var s = status ? '?status=' + status : '?status=publish';
        var a = attribute ? '&attribute=' + attribute : '';
        var t = attribute_term ? '&attribute_term=' + attribute_term : '';
        var o = order ? '&order=' + order : '';
        return this.WooCommerce.getAsync("products" + s + p + pp + c + q + min + max + a + t + o).then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getAllCategories = function () {
        return this.WooCommerce.getAsync("products/categories").then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getAttributeTerms = function (id) {
        return this.WooCommerce.getAsync("products/attributes/" + id + "/terms?hide_empty=true").then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getAttributes = function () {
        return this.WooCommerce.getAsync("products/attributes").then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getStates = function (id) {
        var seq = this.http.get('assets/i18n/states/' + id + '.json');
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    WooCommerceProvider.prototype.getSubCategories = function () {
        return this.WooCommerce.getAsync("products/categories").then(function (x) {
            var tmp = JSON.parse(x.body), root = [];
            for (var i in tmp) {
                if (tmp[i].parent == 0) {
                    var child = [];
                    child.push({ id: tmp[i].id, count: tmp[i].count, image: tmp[i].image, name: 'All ' + tmp[i].name, slug: tmp[i].slug });
                    for (var j in tmp) {
                        if (tmp[j].parent == tmp[i].id)
                            child.push(tmp[j]);
                    }
                    tmp[i].child = child;
                    root.push(tmp[i]);
                }
            }
            return root;
        });
    };
    WooCommerceProvider.prototype.createOrder = function (data) {
        return this.WooCommerce.postAsync("orders", data).then(function (x) {
            return JSON.parse(x.body);
        }, function (e) {
            console.log(e);
        });
    };
    WooCommerceProvider.prototype.init = function () {
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__({
            url: __WEBPACK_IMPORTED_MODULE_4__app_app_global__["a" /* App */].url,
            consumerKey: __WEBPACK_IMPORTED_MODULE_4__app_app_global__["a" /* App */].consumerKey,
            consumerSecret: __WEBPACK_IMPORTED_MODULE_4__app_app_global__["a" /* App */].consumerSecret,
            wpAPI: true,
            version: 'wc/v2',
            verifySsl: true,
            queryStringAuth: true
        });
        return this.WooCommerce;
    };
    return WooCommerceProvider;
}());
WooCommerceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], WooCommerceProvider);

//# sourceMappingURL=woocommerce.js.map

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ParallaxHeader directive.
  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
var ParallaxHeader = (function () {
    function ParallaxHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log('Hello ParallaxHeader Directive');
    }
    ParallaxHeader.prototype.ngOnInit = function () {
        var content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = content.getElementsByClassName('header-image')[0];
        var mainContent = content.getElementsByClassName('main-content')[0];
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        this.renderer.setElementStyle(this.header, 'background-size', 'cover');
        this.renderer.setElementStyle(mainContent, 'position', 'absolute');
    };
    ParallaxHeader.prototype.onWindowResize = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateParallaxHeader(ev);
        });
    };
    ParallaxHeader.prototype.updateParallaxHeader = function (ev) {
        if (ev.scrollTop >= 0) {
            this.translateAmt = ev.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0, ' + this.translateAmt + 'px, 0) scale(' + this.scaleAmt + ', ' + this.scaleAmt + ')');
    };
    return ParallaxHeader;
}());
ParallaxHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[parallax-header]',
        host: {
            'ionScroll': 'onContentScroll($event)',
            '(window:resize)': 'onWindowResize($event)'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
], ParallaxHeader);

//# sourceMappingURL=parallax-header.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fa_icon_fa_icon__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_rating_ion_rating__ = __webpack_require__(892);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fa_icon_fa_icon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ion_rating_ion_rating__["a"]; });



//# sourceMappingURL=components.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaIconComponent = (function (_super) {
    __extends(FaIconComponent, _super);
    function FaIconComponent(config, elementRef, renderer) {
        return _super.call(this, config, elementRef, renderer, "fa") || this;
    }
    Object.defineProperty(FaIconComponent.prototype, "fixedWidth", {
        set: function (fixedWidth) {
            this.setElementClass("fa-fw", this.isTrueProperty(fixedWidth));
        },
        enumerable: true,
        configurable: true
    });
    FaIconComponent.prototype.ngOnChanges = function (changes) {
        if (changes.name) {
            this.unsetPrevAndSetCurrentClass(changes.name);
        }
        if (changes.size) {
            this.unsetPrevAndSetCurrentClass(changes.size);
        }
    };
    FaIconComponent.prototype.isTrueProperty = function (val) {
        if (typeof val === "string") {
            val = val.toLowerCase().trim();
            return (val === "true" || val === "on" || val === "");
        }
        return !!val;
    };
    ;
    FaIconComponent.prototype.unsetPrevAndSetCurrentClass = function (change) {
        this.setElementClass("fa-" + change.previousValue, false);
        this.setElementClass("fa-" + change.currentValue, true);
    };
    return FaIconComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Ion */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FaIconComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FaIconComponent.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("fixed-width"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], FaIconComponent.prototype, "fixedWidth", null);
FaIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "fa-icon",
        template: "",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
], FaIconComponent);

//# sourceMappingURL=fa-icon.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonRating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonRating = (function () {
    function IonRating() {
        this.numStars = 5;
        this.readOnly = true;
        this.value = 5;
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.stars = [];
    }
    IonRating.prototype.ngAfterContentInit = function () {
        this.calc();
    };
    IonRating.prototype.calc = function () {
        this.stars = [];
        var tmp = this.value;
        for (var i = 0; i < this.numStars; i++, tmp--)
            if (tmp >= 1)
                this.stars.push("star");
            else if (tmp < 1 && tmp > 0)
                this.stars.push("star-half-o");
            else
                this.stars.push("star-o");
    };
    IonRating.prototype.starClicked = function (index) {
        if (!this.readOnly) {
            this.value = index + 1;
            this.calc();
            this.clicked.emit(this.value);
        }
    };
    return IonRating;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], IonRating.prototype, "numStars", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], IonRating.prototype, "readOnly", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], IonRating.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], IonRating.prototype, "clicked", void 0);
IonRating = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ion-rating',template:/*ion-inline-start:"C:\Users\admin\Desktop\stor\src\components\ion-rating\ion-rating.html"*/'\n    <ion-row no-padding no-margin class="ion-rating-container">\n        <ion-col no-padding text-center *ngFor="let star of stars; let i = index" tappable (click)="starClicked(i)">\n            <!-- <ion-icon [name]="star"></ion-icon> -->\n            <fa-icon [name]="star"></fa-icon>\n        </ion-col>\n    </ion-row>\n'/*ion-inline-end:"C:\Users\admin\Desktop\stor\src\components\ion-rating\ion-rating.html"*/
    }),
    __metadata("design:paramtypes", [])
], IonRating);

//# sourceMappingURL=ion-rating.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__discount_discount__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_moment__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__money_money__ = __webpack_require__(897);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__discount_discount__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__moment_moment__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__money_money__["a"]; });




//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DiscountPipe = (function () {
    function DiscountPipe() {
    }
    DiscountPipe.prototype.transform = function (value, args) {
        return Math.ceil((value.regular_price - value.price) / value.regular_price * 100) + "% OFF";
    };
    return DiscountPipe;
}());
DiscountPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'discount',
    })
], DiscountPipe);

//# sourceMappingURL=discount.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, args) {
        args = args || '';
        return args === 'ago' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).fromNow() : __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format(args);
    };
    return MomentPipe;
}());
MomentPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'moment'
    })
], MomentPipe);

//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 403,
	"./af.js": 403,
	"./ar": 404,
	"./ar-dz": 405,
	"./ar-dz.js": 405,
	"./ar-kw": 406,
	"./ar-kw.js": 406,
	"./ar-ly": 407,
	"./ar-ly.js": 407,
	"./ar-ma": 408,
	"./ar-ma.js": 408,
	"./ar-sa": 409,
	"./ar-sa.js": 409,
	"./ar-tn": 410,
	"./ar-tn.js": 410,
	"./ar.js": 404,
	"./az": 411,
	"./az.js": 411,
	"./be": 412,
	"./be.js": 412,
	"./bg": 413,
	"./bg.js": 413,
	"./bm": 414,
	"./bm.js": 414,
	"./bn": 415,
	"./bn.js": 415,
	"./bo": 416,
	"./bo.js": 416,
	"./br": 417,
	"./br.js": 417,
	"./bs": 418,
	"./bs.js": 418,
	"./ca": 419,
	"./ca.js": 419,
	"./cs": 420,
	"./cs.js": 420,
	"./cv": 421,
	"./cv.js": 421,
	"./cy": 422,
	"./cy.js": 422,
	"./da": 423,
	"./da.js": 423,
	"./de": 424,
	"./de-at": 425,
	"./de-at.js": 425,
	"./de-ch": 426,
	"./de-ch.js": 426,
	"./de.js": 424,
	"./dv": 427,
	"./dv.js": 427,
	"./el": 428,
	"./el.js": 428,
	"./en-au": 429,
	"./en-au.js": 429,
	"./en-ca": 430,
	"./en-ca.js": 430,
	"./en-gb": 431,
	"./en-gb.js": 431,
	"./en-ie": 432,
	"./en-ie.js": 432,
	"./en-il": 433,
	"./en-il.js": 433,
	"./en-nz": 434,
	"./en-nz.js": 434,
	"./eo": 435,
	"./eo.js": 435,
	"./es": 436,
	"./es-do": 437,
	"./es-do.js": 437,
	"./es-us": 438,
	"./es-us.js": 438,
	"./es.js": 436,
	"./et": 439,
	"./et.js": 439,
	"./eu": 440,
	"./eu.js": 440,
	"./fa": 441,
	"./fa.js": 441,
	"./fi": 442,
	"./fi.js": 442,
	"./fo": 443,
	"./fo.js": 443,
	"./fr": 444,
	"./fr-ca": 445,
	"./fr-ca.js": 445,
	"./fr-ch": 446,
	"./fr-ch.js": 446,
	"./fr.js": 444,
	"./fy": 447,
	"./fy.js": 447,
	"./gd": 448,
	"./gd.js": 448,
	"./gl": 449,
	"./gl.js": 449,
	"./gom-latn": 450,
	"./gom-latn.js": 450,
	"./gu": 451,
	"./gu.js": 451,
	"./he": 452,
	"./he.js": 452,
	"./hi": 453,
	"./hi.js": 453,
	"./hr": 454,
	"./hr.js": 454,
	"./hu": 455,
	"./hu.js": 455,
	"./hy-am": 456,
	"./hy-am.js": 456,
	"./id": 457,
	"./id.js": 457,
	"./is": 458,
	"./is.js": 458,
	"./it": 459,
	"./it.js": 459,
	"./ja": 460,
	"./ja.js": 460,
	"./jv": 461,
	"./jv.js": 461,
	"./ka": 462,
	"./ka.js": 462,
	"./kk": 463,
	"./kk.js": 463,
	"./km": 464,
	"./km.js": 464,
	"./kn": 465,
	"./kn.js": 465,
	"./ko": 466,
	"./ko.js": 466,
	"./ky": 467,
	"./ky.js": 467,
	"./lb": 468,
	"./lb.js": 468,
	"./lo": 469,
	"./lo.js": 469,
	"./lt": 470,
	"./lt.js": 470,
	"./lv": 471,
	"./lv.js": 471,
	"./me": 472,
	"./me.js": 472,
	"./mi": 473,
	"./mi.js": 473,
	"./mk": 474,
	"./mk.js": 474,
	"./ml": 475,
	"./ml.js": 475,
	"./mn": 476,
	"./mn.js": 476,
	"./mr": 477,
	"./mr.js": 477,
	"./ms": 478,
	"./ms-my": 479,
	"./ms-my.js": 479,
	"./ms.js": 478,
	"./mt": 480,
	"./mt.js": 480,
	"./my": 481,
	"./my.js": 481,
	"./nb": 482,
	"./nb.js": 482,
	"./ne": 483,
	"./ne.js": 483,
	"./nl": 484,
	"./nl-be": 485,
	"./nl-be.js": 485,
	"./nl.js": 484,
	"./nn": 486,
	"./nn.js": 486,
	"./pa-in": 487,
	"./pa-in.js": 487,
	"./pl": 488,
	"./pl.js": 488,
	"./pt": 489,
	"./pt-br": 490,
	"./pt-br.js": 490,
	"./pt.js": 489,
	"./ro": 491,
	"./ro.js": 491,
	"./ru": 492,
	"./ru.js": 492,
	"./sd": 493,
	"./sd.js": 493,
	"./se": 494,
	"./se.js": 494,
	"./si": 495,
	"./si.js": 495,
	"./sk": 496,
	"./sk.js": 496,
	"./sl": 497,
	"./sl.js": 497,
	"./sq": 498,
	"./sq.js": 498,
	"./sr": 499,
	"./sr-cyrl": 500,
	"./sr-cyrl.js": 500,
	"./sr.js": 499,
	"./ss": 501,
	"./ss.js": 501,
	"./sv": 502,
	"./sv.js": 502,
	"./sw": 503,
	"./sw.js": 503,
	"./ta": 504,
	"./ta.js": 504,
	"./te": 505,
	"./te.js": 505,
	"./tet": 506,
	"./tet.js": 506,
	"./tg": 507,
	"./tg.js": 507,
	"./th": 508,
	"./th.js": 508,
	"./tl-ph": 509,
	"./tl-ph.js": 509,
	"./tlh": 510,
	"./tlh.js": 510,
	"./tr": 511,
	"./tr.js": 511,
	"./tzl": 512,
	"./tzl.js": 512,
	"./tzm": 513,
	"./tzm-latn": 514,
	"./tzm-latn.js": 514,
	"./tzm.js": 513,
	"./ug-cn": 515,
	"./ug-cn.js": 515,
	"./uk": 516,
	"./uk.js": 516,
	"./ur": 517,
	"./ur.js": 517,
	"./uz": 518,
	"./uz-latn": 519,
	"./uz-latn.js": 519,
	"./uz.js": 518,
	"./vi": 520,
	"./vi.js": 520,
	"./x-pseudo": 521,
	"./x-pseudo.js": 521,
	"./yo": 522,
	"./yo.js": 522,
	"./zh-cn": 523,
	"./zh-cn.js": 523,
	"./zh-hk": 524,
	"./zh-hk.js": 524,
	"./zh-tw": 525,
	"./zh-tw.js": 525
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 896;

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoneyPipe = (function () {
    function MoneyPipe(setting) {
        var _this = this;
        this.setting = setting;
        this.app = {};
        this.setting.load().then(function (x) {
            if (x)
                _this.app = x.settings;
        });
    }
    MoneyPipe.prototype.ionViewDidLoad = function () {
    };
    MoneyPipe.prototype.transform = function (value, app) {
        var x = app || this.setting.all.settings;
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CurrencyPipe */](x.currency).transform(value, x.currency, true, '1.' + x.number_of_decimals + '-' + x.number_of_decimals);
    };
    return MoneyPipe;
}());
MoneyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'money',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* SettingsProvider */]])
], MoneyPipe);

//# sourceMappingURL=money.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(oneSignal, notif, platform, /*private config: Config,*/ settings, translate, woo, statusBar, splashScreen) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.notif = notif;
        this.platform = platform;
        this.settings = settings;
        this.translate = translate;
        this.woo = woo;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'TabsPage';
        this.app = {};
        this.settings.load().then(function (x) {
            _this.woo.loadZones();
            _this.app = x;
            _this.initTranslate();
        });
        platform.ready().then(function () {
            if (platform.is('cordova')) {
                _this.oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* App */].OneSignalAppID, __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* App */].GCM);
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
                _this.oneSignal.handleNotificationReceived().subscribe(function (x) {
                    // do something when notification is received
                    console.log(x);
                    _this.notif.post(x.payload);
                });
                _this.oneSignal.handleNotificationOpened().subscribe(function () {
                    // do something when a notification is opened
                });
                _this.oneSignal.endInit();
            }
        });
    }
    MyApp.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            // this.statusBar.overlaysWebView(false);
            // this.statusBar.backgroundColorByHexString('#FF1654');
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.ionViewCanEnter = function () {
    };
    MyApp.prototype.initTranslate = function () {
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang(this.app && this.app.language !== undefined ? this.app.language : __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* App */].defaultLang);
        if (this.app.language == "ar") {
            this.platform.setDir('rtl', true);
        }
        else {
            this.platform.setDir('ltr', true);
        }
        if (this.app && this.app.language !== undefined)
            this.translate.use(this.app.language);
        else
            this.translate.use(__WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* App */].defaultLang);
        // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
        //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        // });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\admin\Desktop\stor\src\app\app.html"*/'<ion-nav [root]="rootPage" #content main></ion-nav>\n'/*ion-inline-end:"C:\Users\admin\Desktop\stor\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["e" /* NotifProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["g" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["k" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_order__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_history__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notif_notif__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loading_loading__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toast_toast__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_settings__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__woocommerce_woocommerce__ = __webpack_require__(601);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__user_user__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__order_order__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__address_address__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__cart_cart__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__history_history__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__woocommerce_woocommerce__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_9__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__loading_loading__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__toast_toast__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__notif_notif__["a"]; });












//# sourceMappingURL=providers.js.map

/***/ })

},[531]);
//# sourceMappingURL=main.js.map