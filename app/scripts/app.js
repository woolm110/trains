/*global window, jQuery:false */

(function($) {
  'use strict';

  TrainPlatform = TrainPlatform || {};

  TrainPlatform.home = {
    CONST: {
      API: 'http://transportapi.com/v3/uk/train/station/WAT/live.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97&calling_at=QRB&train_status=passenger',
      $generateBtn: 'getTrains'
    },

    config: {

    },

    attachEventHandlers: function() {
      var _this = this;

      document.getElementById(_this.CONST.$generateBtn).addEventListener('click', function() {
        var html = '<table><tr><th>Destination</th><th>Time</th><th>Platform</th></tr>';

        _this.retrieveTrains(_this.CONST.API, function(result) {
          var l = result.departures.all.length,
            limit = 4;

          for (var i = 0; i < limit; i++) {
            var _this = result.departures.all[i];

            html += '<tr><td>' + _this.destination_name + '</td><td>' + _this.aimed_departure_time + '</td><td>' + _this.platform + '</td></tr>'
          };

          document.querySelectorAll('.trains')[0].innerHTML = html + '</table>';

        });
      });
    },

    retrieveTrains: function(url, onComplete) {
      $.ajax({
        url: url,
        success: function(result) {
          if (typeof(onComplete) === 'function') {
            onComplete(result);
          }
        }
      });
    },

    init: function() {
      var _this = this;

      _this.attachEventHandlers();

      console.log('app.js loaded')
    }
  };

})(jQuery);
