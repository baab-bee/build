(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <br><br>  \r\n  <button routerLink=\"../sendEnvelope\" >Process Donation Request and Send Prepaid Envelope</button>\r\n  <br><br>\r\n  <button>Receive and Validate frames</button>\r\n  <br><br>\r\n  <button>Process Frame Request</button>\r\n  <br><br>\r\n  <button>Match Frames</button>\r\n  <br><br>\r\n  <button>Process Donation</button>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _donor_input_donor_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donor-input/donor-input.component */ "./src/app/donor-input/donor-input.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _donor_donor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donor/donor.component */ "./src/app/donor/donor.component.ts");
/* harmony import */ var _process_donor_envelope_process_donor_envelope_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./process-donor-envelope/process-donor-envelope.component */ "./src/app/process-donor-envelope/process-donor-envelope.component.ts");








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'donor', component: _donor_input_donor_input_component__WEBPACK_IMPORTED_MODULE_4__["DonorInputComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'donor-opts', component: _donor_donor_component__WEBPACK_IMPORTED_MODULE_6__["DonorComponent"] },
    { path: 'sendEnvelope', component: _process_donor_envelope_process_donor_envelope_component__WEBPACK_IMPORTED_MODULE_7__["ProcessDonorEnvelopeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: Arial;\r\n    height: 100%;\r\n  }\r\n  \r\n  /* Header/Blog Title */\r\n  \r\n  .header {\r\n    padding: 30px;\r\n    text-align: center;\r\n    background: white;\r\n  }\r\n  \r\n  .header h1 {\r\n    font-size: 50px;\r\n    color : brown;\r\n  }\r\n  \r\n  /*Fixed Footer for all pages*/\r\n  \r\n  .footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    color: grey;\r\n    text-align: center;\r\n }\r\n  \r\n  /* Style the top navigation bar */\r\n  \r\n  .topnav {\r\n    overflow: hidden;\r\n    background-color: black;\r\n  }\r\n  \r\n  /* Style the topnav links */\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  /* Change color on hover */\r\n  \r\n  .topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  \r\n  /* Create two unequal columns that floats next to each other */\r\n  \r\n  /* Left column */\r\n  \r\n  .leftcolumn {   \r\n    float: left;\r\n    width: 75%;\r\n  }\r\n  \r\n  /* Right column */\r\n  \r\n  .rightcolumn {\r\n    float: left;\r\n    width: 25%;\r\n    background-color: #f1f1f1;\r\n    padding-left: 20px;\r\n  }\r\n  \r\n  /* Fake image */\r\n  \r\n  .fakeimg {\r\n    background-color: #aaa;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Add a card effect for articles */\r\n  \r\n  .card {\r\n    background-color: white;\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  /* Clear floats after the columns */\r\n  \r\n  .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  /* Footer */\r\n  \r\n  .footer {\r\n    padding: 20px;\r\n    text-align: center;\r\n    background: #ddd;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBLHNCQUFzQjs7RUFDdEI7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBQ0EsNkJBQTZCOztFQUM3QjtJQUNFLGVBQWU7SUFDZixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCOztFQUVDLGlDQUFpQzs7RUFDakM7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCOztFQUVBLDJCQUEyQjs7RUFDM0I7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQSwwQkFBMEI7O0VBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQSw4REFBOEQ7O0VBQzlELGdCQUFnQjs7RUFDaEI7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBLGlCQUFpQjs7RUFDakI7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0VBRUEsZUFBZTs7RUFDZjtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBLG1DQUFtQzs7RUFDbkM7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQSxtQ0FBbUM7O0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUEsV0FBVzs7RUFDWDtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGVhZGVyL0Jsb2cgVGl0bGUgKi9cclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvciA6IGJyb3duO1xyXG4gIH1cclxuICAvKkZpeGVkIEZvb3RlciBmb3IgYWxsIHBhZ2VzKi9cclxuICAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSB0b3AgbmF2aWdhdGlvbiBiYXIgKi9cclxuICAudG9wbmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHRvcG5hdiBsaW5rcyAqL1xyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xyXG4gIC50b3BuYXYgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAvKiBDcmVhdGUgdHdvIHVuZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICAvKiBMZWZ0IGNvbHVtbiAqL1xyXG4gIC5sZWZ0Y29sdW1uIHsgICBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcbiAgXHJcbiAgLyogUmlnaHQgY29sdW1uICovXHJcbiAgLnJpZ2h0Y29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZha2UgaW1hZ2UgKi9cclxuICAuZmFrZWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBjYXJkIGVmZmVjdCBmb3IgYXJ0aWNsZXMgKi9cclxuICAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAvKiBGb290ZXIgKi9cclxuICAuZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'iframex';
        this.donorRoute = 'donor';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _donor_input_donor_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./donor-input/donor-input.component */ "./src/app/donor-input/donor-input.component.ts");
/* harmony import */ var _donor_donor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./donor/donor.component */ "./src/app/donor/donor.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _process_donor_envelope_process_donor_envelope_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./process-donor-envelope/process-donor-envelope.component */ "./src/app/process-donor-envelope/process-donor-envelope.component.ts");













//import { ReceiveAndValidate } from './ReceiveAndValidate/ReceiveAndValidate.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _donor_input_donor_input_component__WEBPACK_IMPORTED_MODULE_7__["DonorInputComponent"],
                _donor_donor_component__WEBPACK_IMPORTED_MODULE_8__["DonorComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
                _process_donor_envelope_process_donor_envelope_component__WEBPACK_IMPORTED_MODULE_12__["ProcessDonorEnvelopeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/donor-input/donor-input.component.css":
/*!*******************************************************!*\
  !*** ./src/app/donor-input/donor-input.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm9yLWlucHV0L2Rvbm9yLWlucHV0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/donor-input/donor-input.component.html":
/*!********************************************************!*\
  !*** ./src/app/donor-input/donor-input.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <form [formGroup] = \"donorForm\" (ngSubmit) = \"onSubmit() \">\r\n  <br><br>\r\n  No. of frames to be Donated :<input type=\"text\" formControlName=\"totalOrderedQty\"/>\r\n  <br><br>\r\n  <div formGroupName=\"user\" novalidate>\r\n  Name : <input type=\"text\" formControlName = \"name\" />\r\n  <br><br>\r\n  Email : <input type=\"text\" formControlName=\"emailId\"/>\r\n  <br><br>\r\n  Mobile No. : <input type=\"text\" name=\"mobile\" />\r\n  <br><br>\r\n  <div formGroupName=\"address\" novalidate>\r\n  Address1 : <input type=\"text\" formControlName=\"addressLine1\"/>\r\n  <br><br>\r\n  Address2 : <input type=\"text\" formControlName=\"addressLine2\" />\r\n  <br><br>\r\n  city : <input type=\"text\" formControlName=\"city\" />\r\n  <br><br>\r\n  state : <input type=\"text\" formControlName=\"state\"  />\r\n  <br><br>\r\n  zipcode : <input type=\"text\" formControlName=\"zipcode\"  />\r\n  <br><br>\r\n  country : <input type=\"text\" formControlName=\"country\"  />\r\n\r\n  </div> </div>\r\n  <br><br>\r\n\r\n  <button  type=\"submit\"  >Submit</button> &nbsp; &nbsp;  \r\n  <button  type=\"reset\"  >Cancel</button>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/donor-input/donor-input.component.ts":
/*!******************************************************!*\
  !*** ./src/app/donor-input/donor-input.component.ts ***!
  \******************************************************/
/*! exports provided: DonorInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorInputComponent", function() { return DonorInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_address_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/address.model */ "./src/app/donor-input/models/address.model.ts");





var DonorInputComponent = /** @class */ (function () {
    function DonorInputComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        // this.donorForm =this.createFormGroup();
        this.donorForm = this.createFormGroupWithBuilderAndModel(formBuilder);
    }
    DonorInputComponent.prototype.ngOnInit = function () {
    };
    DonorInputComponent.prototype.createFormGroup = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userRequestType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            totalOrderedQty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    addressLine1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                    addressLine2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                    city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                    state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                    zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                    country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                })
            })
        });
    };
    DonorInputComponent.prototype.createFormGroupWithBuilderAndModel = function (formBuilder) {
        return formBuilder.group({
            userRequestType: 'D',
            totalOrderedQty: '',
            remarks: '',
            user: formBuilder.group({
                name: '',
                emailId: '',
                mobile: '',
                address: formBuilder.group(new _models_address_model__WEBPACK_IMPORTED_MODULE_4__["Address"]())
            })
        });
    };
    /*
      onClickSubmit(data) {
        this.donor.totalOrderedQty = data.frameCount;
        this.donor.userRequestType = "D";
        this.user.name = data.name;
        this.user.emailId = data.email;
        this.user.mobile = data.mobile;
        this.address.addressLine1 = data.addressLine1;
        this.user.address = this.address;
        this.donor.user = this.user;
        console.log("Helloozczc" + JSON.stringify(this.donor));
      }
    */
    DonorInputComponent.prototype.onSubmit = function () {
        var _this = this;
        var result = Object.assign({}, this.donorForm.value);
        result.user = Object.assign({}, result.user);
        result.user.address = Object.assign({}, result.user.address);
        console.log("Form Model is" + JSON.stringify(result));
        var observer = this.http.post('http://localhost:8080/userRequests', result, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }) });
        observer.subscribe(function (response) {
            _this.response = response;
            console.log("recieved" + JSON.stringify(_this.response));
        });
    };
    DonorInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donor-input',
            template: __webpack_require__(/*! ./donor-input.component.html */ "./src/app/donor-input/donor-input.component.html"),
            styles: [__webpack_require__(/*! ./donor-input.component.css */ "./src/app/donor-input/donor-input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DonorInputComponent);
    return DonorInputComponent;
}());



/***/ }),

/***/ "./src/app/donor-input/models/address.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/donor-input/models/address.model.ts ***!
  \*****************************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address() {
        this.addressLine1 = '';
        this.addressLine2 = '';
        this.city = '';
        this.state = '';
        this.zipcode = 0;
        this.country = '';
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/donor/donor.component.css":
/*!*******************************************!*\
  !*** ./src/app/donor/donor.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-list-radio {\r\n    left: 40%;\r\n    top: 20%;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ub3IvZG9ub3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZG9ub3IvZG9ub3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxpc3QtcmFkaW8ge1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/donor/donor.component.html":
/*!********************************************!*\
  !*** ./src/app/donor/donor.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form   [formGroup] = \"donorComp\" class=\"form-list-radio\" (ngSubmit) = \"onClickSubmit(donorComp.value)\">\r\n  <div class=\"custom-control custom-radio\">\r\n    <input type=\"radio\" class=\"custom-control-input\"  name=\"exampleRadios\" formControlName=\"donorCompOpts\" id=\"exampleRadios1\" value=\"prepaid_envelope\"> \r\n    <label class=\"custom-control-label\" for=\"exampleRadios1\">I Want a Prepaid Envelope </label>\r\n  </div>\r\n  <div class=\"custom-control custom-radio\">\r\n  <input type=\"radio\" class=\"custom-control-input\"  name=\"exampleRadios\" formControlName=\"donorCompOpts\" id=\"exampleRadios2\" value=\"dropoff_location\">\r\n  <label class=\"custom-control-label\" for=\"exampleRadios2\"> I Want to Dropoff in a location </label>\r\n  </div>\r\n  <div class=\"custom-control custom-radio\">\r\n  <input type=\"radio\" class=\"custom-control-input\"   name=\"exampleRadios\" formControlName=\"donorCompOpts\" id=\"exampleRadios3\" value=\"selfpaid_envelope\"> \r\n  <label class=\"custom-control-label\" for=\"exampleRadios3\">I will send it in a self paid Envelope </label>\r\n  \r\n  </div>\r\n  <button type=\"submit\"  class=\"btn btn-primary\" [disabled] = \"!donorComp.valid\" >OK</button>\r\n</form>\r\n<!--<p>\r\n  Selected value : {{radioSelectedValue}}\r\n</p>\r\nrouterLink=\"../donor\"\r\n-->"

/***/ }),

/***/ "./src/app/donor/donor.component.ts":
/*!******************************************!*\
  !*** ./src/app/donor/donor.component.ts ***!
  \******************************************/
/*! exports provided: DonorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorComponent", function() { return DonorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DonorComponent = /** @class */ (function () {
    function DonorComponent(formBuilder, router) {
        this.donorComp = formBuilder.group({
            donorCompOpts: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.router = router;
    }
    //on submit function
    DonorComponent.prototype.onClickSubmit = function (data) {
        this.radioSelectedValue = data.donorCompOpts;
        if (this.radioSelectedValue == 'prepaid_envelope') {
            //alert(this.radioSelectedValue)
            this.router.navigate(['../donor']);
        }
        else if (this.radioSelectedValue == 'dropoff_location') {
            //this.alerts.setMessage('dropoff error','error');                                     
            alert("Please go to drop off location");
            return false;
        }
        else {
            alert("Please go to home page");
            return false;
        }
        //navigate to the donor-input screen
    };
    DonorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donor',
            template: __webpack_require__(/*! ./donor.component.html */ "./src/app/donor/donor.component.html"),
            styles: [__webpack_require__(/*! ./donor.component.css */ "./src/app/donor/donor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DonorComponent);
    return DonorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: Arial;\r\n  height: 100%;\r\n}\r\n\r\n/* Header/Blog Title */\r\n\r\n.header {\r\n  padding: 30px;\r\n  text-align: center;\r\n  background: white;\r\n}\r\n\r\n.header h1 {\r\n  font-size: 50px;\r\n  color : brown;\r\n}\r\n\r\n/*Fixed Footer for all pages*/\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  color: grey;\r\n  text-align: center;\r\n}\r\n\r\n/* Style the top navigation bar */\r\n\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color: black;\r\n}\r\n\r\n/* Style the topnav links */\r\n\r\n.topnav a {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Change color on hover */\r\n\r\n.topnav a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n/* Create two unequal columns that floats next to each other */\r\n\r\n/* Left column */\r\n\r\n.leftcolumn {   \r\n  float: left;\r\n  width: 75%;\r\n}\r\n\r\n/* Right column */\r\n\r\n.rightcolumn {\r\n  float: left;\r\n  width: 25%;\r\n  background-color: #f1f1f1;\r\n  padding-left: 20px;\r\n}\r\n\r\n/* Fake image */\r\n\r\n.fakeimg {\r\n  background-color: #aaa;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n/* Add a card effect for articles */\r\n\r\n.card {\r\n  background-color: white;\r\n  padding: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer {\r\n  padding: 20px;\r\n  text-align: center;\r\n  background: #ddd;\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBQ0EsNkJBQTZCOztBQUM3QjtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBLGlDQUFpQzs7QUFDakM7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQSw4REFBOEQ7O0FBQzlELGdCQUFnQjs7QUFDaEI7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogSGVhZGVyL0Jsb2cgVGl0bGUgKi9cclxuLmhlYWRlciB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDEge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvciA6IGJyb3duO1xyXG59XHJcbi8qRml4ZWQgRm9vdGVyIGZvciBhbGwgcGFnZXMqL1xyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgdG9wIG5hdmlnYXRpb24gYmFyICovXHJcbi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSB0b3BuYXYgbGlua3MgKi9cclxuLnRvcG5hdiBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogQ2hhbmdlIGNvbG9yIG9uIGhvdmVyICovXHJcbi50b3BuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0d28gdW5lcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4vKiBMZWZ0IGNvbHVtbiAqL1xyXG4ubGVmdGNvbHVtbiB7ICAgXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLyogUmlnaHQgY29sdW1uICovXHJcbi5yaWdodGNvbHVtbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLyogRmFrZSBpbWFnZSAqL1xyXG4uZmFrZWltZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBBZGQgYSBjYXJkIGVmZmVjdCBmb3IgYXJ0aWNsZXMgKi9cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi8qIEZvb3RlciAqL1xyXG4uZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\r\n    </head>\r\n    <body>\r\n<div class=\"header\">\r\n  <h1>IFramex</h1>\r\n</div>\r\n<div class=\"topnav\">\r\n  <a>  <i class=\"fas fa-bars\"></i></a>\r\n  <a routerLink=\"../donor-opts\">DONATE FRAMES</a>\r\n   <a>NEED FRAMES</a>\r\n   <a routerLink=\"../admin\">ADMIN LOGIN</a>\r\n</div>\r\n<div class=\"footer\">\r\n  <p>Copyright @ iframex.com , EST 2019</p>\r\n</div>\r\n    </body>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/process-donor-envelope/process-donor-envelope.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/process-donor-envelope/process-donor-envelope.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3MtZG9ub3ItZW52ZWxvcGUvcHJvY2Vzcy1kb25vci1lbnZlbG9wZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/process-donor-envelope/process-donor-envelope.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/process-donor-envelope/process-donor-envelope.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%; padding-top: 35px; box-sizing: border-box;\">\r\n  <ag-grid-angular\r\n    #agGrid\r\n    style=\"width: 1000px; height: 600px;\"\r\n    id=\"myGrid\"\r\n    class=\"ag-theme-balham\"\r\n    [columnDefs]=\"columnDefs\"\r\n    [defaultColDef]=\"defaultColDef\"\r\n    [enableSorting]=\"true\"\r\n    [enableFilter]=\"true\"\r\n    [pagination]=\"true\"\r\n    [suppressRowClickSelection]=\"true\"\r\n    [rowSelection]=\"rowSelection\"\r\n    (selectionChanged)=\"onSelectionChanged($event)\"\r\n    (gridReady)=\"onGridReady($event)\"\r\n    [rowData]=\"rowData\"\r\n  ></ag-grid-angular>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/process-donor-envelope/process-donor-envelope.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/process-donor-envelope/process-donor-envelope.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProcessDonorEnvelopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessDonorEnvelopeComponent", function() { return ProcessDonorEnvelopeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-request-service */ "./src/app/process-donor-envelope/user-request-service.ts");



var ProcessDonorEnvelopeComponent = /** @class */ (function () {
    function ProcessDonorEnvelopeComponent(userRequest) {
        this.userRequest = userRequest;
        this.columnDefs = this.createColumnDefs();
        this.rowSelection = "multiple";
    }
    // this.http.get('http://localhost:8080/userRequests').subscribe((data)=>{
    // this.rowData=data;
    // });
    ProcessDonorEnvelopeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRequest.findAll().subscribe(function (UserRequest) {
            _this.rowData = UserRequest;
        }, function (error) {
            console.log(error);
        });
    };
    ProcessDonorEnvelopeComponent.prototype.onSelectionChanged = function () {
        var selectedRows = this.gridApi.getSelectedRows();
        console.log("Hello" + selectedRows);
    };
    ProcessDonorEnvelopeComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    };
    ProcessDonorEnvelopeComponent.prototype.createColumnDefs = function () {
        return [
            { field: 'id', checkboxSelection: true },
            { field: 'status' },
            {
                field: 'name', valueGetter: function (params) {
                    if (!params.data.user)
                        return '';
                    return params.data.user.name;
                }
            },
            {
                field: 'addressLine1', valueGetter: function (params) {
                    if (!params.data.user || !params.data.user.address || !params.data.user.address.addressLine1)
                        return '';
                    return params.data.user.address.addressLine1;
                }
            },
            {
                field: 'addressLine2', valueGetter: function (params) {
                    if (!params.data.user || !params.data.user.address || !params.data.user.address.addressLine2)
                        return '';
                    return params.data.user.address.addressLine2;
                }
            },
            {
                field: 'city', valueGetter: function (params) {
                    if (!params.data.user || !params.data.user.address || !params.data.user.address.city)
                        return '';
                    return params.data.user.address.city;
                }
            },
            {
                field: 'state', valueGetter: function (params) {
                    if (!params.data.user || !params.data.user.address || !params.data.user.address.state)
                        return '';
                    return params.data.user.address.state;
                }
            },
            {
                field: 'country', valueGetter: function (params) {
                    if (!params.data.user || !params.data.user.address || !params.data.user.address.country)
                        return '';
                    return params.data.user.address.country;
                }
            },
            {
                field: 'zipcode', valueGetter: function (params) {
                    if (!params.data.user || !params.data.user.address || !params.data.user.address.zipcode)
                        return '';
                    return params.data.user.address.zipcode;
                }
            }
        ];
    };
    ProcessDonorEnvelopeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-process-donor-envelope',
            template: __webpack_require__(/*! ./process-donor-envelope.component.html */ "./src/app/process-donor-envelope/process-donor-envelope.component.html"),
            providers: [_user_request_service__WEBPACK_IMPORTED_MODULE_2__["UserRequestService"]],
            styles: [__webpack_require__(/*! ./process-donor-envelope.component.css */ "./src/app/process-donor-envelope/process-donor-envelope.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_request_service__WEBPACK_IMPORTED_MODULE_2__["UserRequestService"]])
    ], ProcessDonorEnvelopeComponent);
    return ProcessDonorEnvelopeComponent;
}());



/***/ }),

/***/ "./src/app/process-donor-envelope/user-request-service.ts":
/*!****************************************************************!*\
  !*** ./src/app/process-donor-envelope/user-request-service.ts ***!
  \****************************************************************/
/*! exports provided: UserRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRequestService", function() { return UserRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UserRequestService = /** @class */ (function () {
    function UserRequestService(http) {
        this.http = http;
        this.userRequestUrl = 'http://localhost:8080/userRequests';
    }
    UserRequestService.prototype.findAll = function () {
        return this.http.get(this.userRequestUrl, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) });
    };
    ;
    UserRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserRequestService);
    return UserRequestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\AngularRepo\iframex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map