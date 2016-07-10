import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable, Inject} from 'angular2/core';

@Injectable();

export class TrainsService {
  private _url = 'http://transportapi.com/v3/uk/train/station/WAT/live.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97&calling_at=QRB&train_status=passenger'

  constructor(@Inject(Http) private _http: Http) {

  }

  getTrains() {
    return this._http.get(this._url)
      .map((responseData) => {
        return responseData.json();
      });
  }
}
