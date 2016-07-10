import {Component} from 'angular2/core';

@Component({
  selector: 'train',
  templateUrl: 'app/Templates/train.template.html',
  styles: [`
    .train-departure > div {
      height: 50px;
    }

    .col {
      width: calc(100% / 3);
      float: left;
    }
  `],
  inputs: ['data'] // allows us to pass data through to template
})

export class TrainComponent {

}
