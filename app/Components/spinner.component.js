System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SpinnerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SpinnerComponent = (function () {
                function SpinnerComponent() {
                    this.isDelayedRunning = false;
                    this.delay = 300;
                }
                Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
                    set: function (value) {
                        var _this = this;
                        if (!value) {
                            this.cancelTimeout();
                            return this.isDelayedRunning = false;
                        }
                        if (this.currentTimeout) {
                            return;
                        }
                        this.currentTimeout = setTimeout(function () {
                            _this.isDelayedRunning = value;
                            _this.cancelTimeout();
                        }, this.delay);
                    },
                    enumerable: true,
                    configurable: true
                });
                SpinnerComponent.prototype.cancelTimeout = function () {
                    clearTimeout(this.currentTimeout);
                    this.currentTimeout = undefined;
                };
                SpinnerComponent.prototype.ngOnDestroy = function () {
                    this.cancelTimeout();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], SpinnerComponent.prototype, "delay", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], SpinnerComponent.prototype, "isRunning", null);
                SpinnerComponent = __decorate([
                    core_1.Component({
                        selector: 'my-spinner',
                        template: "\n    <div [hidden]=\"!isDelayedRunning\" class=\"spinner\">  \n      <div class=\"double-bounce1\"></div>\n      <div class=\"double-bounce2\"></div>\n    </div>",
                        styles: ["\n      .spinner {\n        width: 40px;\n        height: 40px;\n\n        position: relative;\n        margin: 100px auto;\n      }\n\n      .double-bounce1, .double-bounce2 {\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        background-color: #333;\n        opacity: 0.6;\n        position: absolute;\n        top: 0;\n        left: 0;\n\n        -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n        animation: sk-bounce 2.0s infinite ease-in-out;\n      }\n\n      .double-bounce2 {\n        -webkit-animation-delay: -1.0s;\n        animation-delay: -1.0s;\n      }\n\n      @-webkit-keyframes sk-bounce {\n        0%, 100% { -webkit-transform: scale(0.0) }\n        50% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bounce {\n        0%, 100% {\n          transform: scale(0.0);\n          -webkit-transform: scale(0.0);\n        } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SpinnerComponent);
                return SpinnerComponent;
            }());
            exports_1("SpinnerComponent", SpinnerComponent);
        }
    }
});
//# sourceMappingURL=spinner.component.js.map