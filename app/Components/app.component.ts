import {Component} from 'angular2/core';
import {TrainComponent} from './train.component';
import {SpinnerComponent} from './spinner.component';
import {TrainsService} from '../Services/trains.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

// decorator / call it
@Component({
  selector: 'my-app',
  template:`
  <div class="container">
     <h2 class="text-center">Trains</h2>
     <div class="row">
       <button (click)="findNextTrain()">Get me home</button>
     </div>
     <div class="row header">
       <div class="col text-center"><h3>Destination</h3></div>
       <div class="col text-center"><h3>Time</h3></div>
       <div class="col text-center"><h3>Platform</h3></div>
     </div>
     <my-spinner [isRunning]="isRequesting"></my-spinner>
    <train *ngFor="#train of trains" [data]="train"></train>
  </div>`, // pass data through to template
  styles: [`
    h2 {
      margin-bottom: 30px;
    }

    h3 {
      font-size: 20px;
    }

    .header > div {
      height: 50px;
    }

    .col {
      width: calc(100% / 3);
      float: left;
      margin-bottom: 30px;
    }

    button {
      margin: 0 auto;
      display: block;
      background: white;
      -webkit-appearance: none;
      border: none;
      color: black;
      border-radius: 2px;
      padding: 10px 20px;
      margin-bottom: 30px;
    }
  `],
  directives: [TrainComponent, SpinnerComponent],
  providers: [TrainsService, HTTP_PROVIDERS] // required so we can call our service in the constructor
})

export class AppComponent {
  public isRequesting: boolean;
  private trains: any;

  constructor(private _trainsService: TrainsService) {}

   private findNextTrain() {
     this.isRequesting = true;

     this._trainsService.getTrains()
       .subscribe(
         res => this.trains = res.departures.all,
         () => this.stopRefreshing(),
         () => this.stopRefreshing()
       )
   }

   private stopRefreshing() {
     this.isRequesting = false;
   }
}

 
