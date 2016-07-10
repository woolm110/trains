System.register(['angular2/core', './train.component', '../Services/trains.service', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, train_component_1, trains_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (train_component_1_1) {
                train_component_1 = train_component_1_1;
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
                    var _this = this;
                    this._trainsService = _trainsService;
                    this.req = _trainsService.getTrains()
                        .subscribe(function (res) {
                        _this.trains = res.departures.all;
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div class=\"container\">\n     <h2 class=\"text-center\">Trains</h2>\n     <div class=\"row header\">\n       <div class=\"col text-center\"><h3>Destination</h3></div>\n       <div class=\"col text-center\"><h3>Time</h3></div>\n       <div class=\"col text-center\"><h3>Platform</h3></div>\n     </div>\n    <train *ngFor=\"#train of trains\" [data]=\"train\"></train>\n  </div>",
                        styles: ["\n    h2 {\n      margin-bottom: 30px;\n    }\n\n    h3 {\n      font-size: 20px;\n    }\n\n    .header > div {\n      height: 50px;\n    }\n\n    .col {\n      width: calc(100% / 3);\n      float: left;\n      margin-bottom: 30px;\n    }\n  "],
                        directives: [train_component_1.TrainComponent],
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