import {Component} from 'angular2/core';
import {TrainComponent} from './train.component';
import {TrainsService} from '../Services/trains.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {KeysPipe} from '../Pipes/keys.pipe'

// decorator / call it
@Component({
  selector: 'my-app',
  template:`
  <div class="container">
     <h2 class="text-center">Trains</h2>
     <div class="row header">
       <div class="col text-center"><h3>Destination</h3></div>
       <div class="col text-center"><h3>Time</h3></div>
       <div class="col text-center"><h3>Platform</h3></div>
     </div>
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
  `]
  directives: [TrainComponent],
  providers: [TrainsService, HTTP_PROVIDERS], // required so we can call our service in the constructor
  pipes: [KeysPipe]
})

export class AppComponent {
  req: any;
  trains: any;

  constructor(private _trainsService: TrainsService) {

    this.req = _trainsService.getTrains()
      .subscribe((res) => {
        this.trains = res.departures.all;
      })
   }
}

 
