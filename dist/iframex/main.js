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

module.exports = "<div>\n  <br><br>  \n  <button routerLink=\"../sendEnvelope\" >Process Donation Request and Send Prepaid Envelope</button>\n  <br><br>\n  <button>Receive and Validate frames</button>\n  <br><br>\n  <button>Process Frame Request</button>\n  <br><br>\n  <button>Match Frames</button>\n  <br><br>\n  <button>Process Donation</button>\n  </div>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
                _process_donor_envelope_process_donor_envelope_component__WEBPACK_IMPORTED_MODULE_12__["ProcessDonorEnvelopeComponent"]
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

module.exports = "<form [formGroup]=\"donorForm\" class=\"ml-2\" (ngSubmit)=\"onSubmit() \">\r\n  <div class=\"form-group\">\r\n    <label for=\"formFrameCount\" class=\"col-form-label col-form-label-sm\">Frame Count</label>\r\n    <input type=\"text\" class=\"form-control form-control-sm col-3\" id=\"formFrameCount\" formControlName=\"totalOrderedQty\"\r\n      placeholder=\"Enter total number of frames\" />\r\n  </div>\r\n  <div formGroupName=\"user\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"formUserName\" class=\"col-form-label col-form-label-sm\">User Name</label>\r\n      <input type=\"text\" class=\"form-control form-control-sm col-3\" id=\"formUserName\" formControlName=\"name\"\r\n        placeholder=\"Enter Your Name\" />\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"forEmail\" class=\"col-form-label col-form-label-sm\">Email address</label>\r\n        <input type=\"email\" class=\"form-control form-control-sm\" id=\"forEmail\" formControlName=\"emailId\"\r\n          aria-describedby=\"emailHelp\" placeholder=\"Enter Your Email\" />\r\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"formMobile\" class=\"col-form-label col-form-label-sm\">Phone</label>\r\n        <input type=\"text\" type=\"text\" class=\"form-control form-control-sm\" id=\"formMobile\" name=\"mobile\"\r\n          placeholder=\"Enter Your Mobile Number\" />\r\n      </div>\r\n    </div>\r\n    <div formGroupName=\"address\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"formStreet1\" class=\"col-form-label col-form-label-sm\">Address</label>\r\n        <input type=\"text\" class=\"form-control form-control-sm col-6\" id=\"formStreet1\" formControlName=\"addressLine1\"\r\n          placeholder=\"Enter Your Street Address\" />\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"formStreet2\" class=\"col-form-label col-form-label-sm\">Address 2</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"formStreet2\" formControlName=\"addressLine2\"\r\n            placeholder=\"Enter Your Street Address 2\" />\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"formcity\" class=\"col-form-label col-form-label-sm\">City</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"formcity\" formControlName=\"city\"\r\n            placeholder=\"Enter Your City\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n\r\n          <label for=\"formState\" class=\"col-form-label col-form-label-sm\">State</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"formState\" formControlName=\"state\"\r\n            placeholder=\"Enter your State\" />\r\n\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"formZip\" class=\" col-form-label col-form-label-sm\">ZIP/Postal Code</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"formZip\" formControlName=\"zipcode\"\r\n            placeholder=\"Enter your Postal COde\" />\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"formCountry\" class=\"col-form-label col-form-label-sm\">Country</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"formCountry\" formControlName=\"country\"\r\n            placeholder=\"Enter your Country\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary  ml-3\">Submit</button>\r\n  <button type=\"reset\" class=\"btn btn-primary  ml-3\">Cancel</button>\r\n  <div class=\"row\"  *ngIf=\"showMsg\">\r\n      <div  #alert class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n          <strong>Success! Data Submitted Successfully!</strong>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeAlert()\"> \r\n            <span aria-hidden=\"true\">&times;</span></button> \r\n    </div>\r\n  </div>\r\n</form>"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var DonorInputComponent = /** @class */ (function () {
    function DonorInputComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.showMsg = false;
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
    DonorInputComponent.prototype.closeAlert = function () {
        this.alert.nativeElement.classList.remove('show');
    };
    DonorInputComponent.prototype.onSubmit = function () {
        var _this = this;
        var result = Object.assign({}, this.donorForm.value);
        result.user = Object.assign({}, result.user);
        result.user.address = Object.assign({}, result.user.address);
        console.log("Form Model is" + JSON.stringify(result));
        var url = this.baseUrl + 'userRequests';
        var observer = this.http.post(url, result, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }) });
        observer.subscribe(function (response) {
            _this.response = response;
            console.log("recieved" + JSON.stringify(_this.response));
            _this.showMsg = true;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alert'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DonorInputComponent.prototype, "alert", void 0);
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

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: Arial;\r\n    padding: 10px;\r\n    background: yellow;\r\n  }\r\n  \r\n  /* Header/Blog Title */\r\n  \r\n  .header {\r\n    padding: 30px;\r\n    text-align: center;\r\n    background: white;\r\n  }\r\n  \r\n  .header h1 {\r\n    font-size: 50px;\r\n    color : brown;\r\n  }\r\n  \r\n  /* Style the top navigation bar */\r\n  \r\n  .topnav {\r\n    overflow: hidden;\r\n    background-color: black;\r\n  }\r\n  \r\n  /* Style the topnav links */\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  /* Change color on hover */\r\n  \r\n  .topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  \r\n  /* Create two unequal columns that floats next to each other */\r\n  \r\n  /* Left column */\r\n  \r\n  .leftcolumn {   \r\n    float: left;\r\n    width: 75%;\r\n  }\r\n  \r\n  /* Right column */\r\n  \r\n  .rightcolumn {\r\n    float: left;\r\n    width: 25%;\r\n    background-color: #f1f1f1;\r\n    padding-left: 20px;\r\n  }\r\n  \r\n  /* Fake image */\r\n  \r\n  .fakeimg {\r\n    background-color: #aaa;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Add a card effect for articles */\r\n  \r\n  .card {\r\n    background-color: white;\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  /* Clear floats after the columns */\r\n  \r\n  .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  /* Footer */\r\n  \r\n  .footer {\r\n    padding: 20px;\r\n    text-align: center;\r\n    background: #ddd;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQSxzQkFBc0I7O0VBQ3RCO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBLGlDQUFpQzs7RUFDakM7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCOztFQUVBLDJCQUEyQjs7RUFDM0I7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQSwwQkFBMEI7O0VBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQSw4REFBOEQ7O0VBQzlELGdCQUFnQjs7RUFDaEI7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBLGlCQUFpQjs7RUFDakI7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0VBRUEsZUFBZTs7RUFDZjtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBLG1DQUFtQzs7RUFDbkM7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQSxtQ0FBbUM7O0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUEsV0FBVzs7RUFDWDtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhlYWRlci9CbG9nIFRpdGxlICovXHJcbiAgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3IgOiBicm93bjtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHRvcCBuYXZpZ2F0aW9uIGJhciAqL1xyXG4gIC50b3BuYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgdG9wbmF2IGxpbmtzICovXHJcbiAgLnRvcG5hdiBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIGNvbG9yIG9uIGhvdmVyICovXHJcbiAgLnRvcG5hdiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSB0d28gdW5lcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIC8qIExlZnQgY29sdW1uICovXHJcbiAgLmxlZnRjb2x1bW4geyAgIFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxuICBcclxuICAvKiBSaWdodCBjb2x1bW4gKi9cclxuICAucmlnaHRjb2x1bW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogRmFrZSBpbWFnZSAqL1xyXG4gIC5mYWtlaW1nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhIGNhcmQgZWZmZWN0IGZvciBhcnRpY2xlcyAqL1xyXG4gIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvb3RlciAqL1xyXG4gIC5mb290ZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\r\n    </head>\r\n    <body>\r\n<div class=\"header\">\r\n  <h1>IFramex</h1>\r\n</div>\r\n<div class=\"topnav\">\r\n  <a>  <i class=\"fas fa-bars\"></i></a>\r\n  <a routerLink=\"../donor-opts\">DONATE FRAMES</a>\r\n   <a>NEED FRAMES</a>\r\n   <a routerLink=\"../admin\">ADMIN LOGIN</a>\r\n</div>\r\n    </body>"

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

module.exports = "<div style=\"height: 100%; padding-top: 35px; box-sizing: border-box;\">\n  <ag-grid-angular\n    #agGrid\n    style=\"width: 1000px; height: 600px;\"\n    id=\"myGrid\"\n    class=\"ag-theme-balham\"\n    [columnDefs]=\"columnDefs\"\n    [defaultColDef]=\"defaultColDef\"\n    [enableSorting]=\"true\"\n    [enableFilter]=\"true\"\n    [pagination]=\"true\"\n    [suppressRowClickSelection]=\"true\"\n    [rowSelection]=\"rowSelection\"\n    (selectionChanged)=\"onSelectionChanged($event)\"\n    (gridReady)=\"onGridReady($event)\"\n    [rowData]=\"rowData\"\n  ></ag-grid-angular>\n</div>\n"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserRequestService = /** @class */ (function () {
    function UserRequestService(http) {
        this.http = http;
        this.userRequestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/admin/receiveframe/initiated/processed';
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
    production: false,
    baseUrl: 'http://localhost:8084/'
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

module.exports = __webpack_require__(/*! E:\ANgular\css\AngularRepo\iframex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map