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
    var TrainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TrainComponent = (function () {
                function TrainComponent() {
                }
                TrainComponent = __decorate([
                    core_1.Component({
                        selector: 'train',
                        templateUrl: 'app/Templates/train.template.html',
                        styles: ["\n    .train-departure > div {\n      height: 50px;\n    }\n\n    .col {\n      width: calc(100% / 3);\n      float: left;\n    }\n  "],
                        inputs: ['data'] // allows us to pass data through to template
                    }), 
                    __metadata('design:paramtypes', [])
                ], TrainComponent);
                return TrainComponent;
            }());
            exports_1("TrainComponent", TrainComponent);
        }
    }
});
//# sourceMappingURL=train.component.js.map