System.register(['angular2/core', './train.component', './spinner.component', '../Services/trains.service', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, train_component_1, spinner_component_1, trains_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (train_component_1_1) {
                train_component_1 = train_component_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (trains_service_1_1) {
                trains_service_1 = trains_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            // decorator / call it
            AppComponent = (function () {
                function AppComponent(_trainsService) {
                    this._trainsService = _trainsService;
                }
                AppComponent.prototype.findNextTrain = function () {
                    var _this = this;
                    this.isRequesting = true;
                    this._trainsService.getTrains()
                        .subscribe(function (res) { return _this.trains = res.departures.all; }, function () { return _this.stopRefreshing(); }, function () { return _this.stopRefreshing(); });
                };
                AppComponent.prototype.stopRefreshing = function () {
                    this.isRequesting = false;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div class=\"container\">\n     <h2 class=\"text-center\">Trains</h2>\n     <div class=\"row header\">\n       <div class=\"col text-center\"><h3>Destination</h3></div>\n       <div class=\"col text-center\"><h3>Time</h3></div>\n       <div class=\"col text-center\"><h3>Platform</h3></div>\n     </div>\n     <div class=\"row\">\n       <button (click)=\"findNextTrain()\">Get me home</button>\n     </div>\n     <my-spinner [isRunning]=\"isRequesting\"></my-spinner>\n    <train *ngFor=\"#train of trains\" [data]=\"train\"></train>\n  </div>",
                        styles: ["\n    h2 {\n      margin-bottom: 30px;\n    }\n\n    h3 {\n      font-size: 20px;\n    }\n\n    .header > div {\n      height: 50px;\n    }\n\n    .col {\n      width: calc(100% / 3);\n      float: left;\n      margin-bottom: 30px;\n    }\n\n    button {\n      margin: 0 auto;\n      display: block;\n      background: white;\n      -webkit-appearance: none;\n      border: none;\n      color: black;\n      border-radius: 2px;\n      padding: 10px 20px;\n      margin-bottom: 30px;\n    }\n  "],
                        directives: [train_component_1.TrainComponent, spinner_component_1.SpinnerComponent],
                        providers: [trains_service_1.TrainsService, http_1.HTTP_PROVIDERS] // required so we can call our service in the constructor
                    }), 
                    __metadata('design:paramtypes', [trains_service_1.TrainsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map