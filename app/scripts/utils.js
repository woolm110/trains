/*global window, jQuery:false */

(function($) {
  'use strict';

  TrainPlatform = TrainPlatform || {};

  TrainPlatform.utils = {

    CONST: {},

    css3AnimateCallback: function($eles, onComplete, animation) {

      var animStr = animation ? 'Animation' : 'Transition';

      $eles.each(function() {

        var $ele = $(this);

        if (Modernizr.csstransitions) {

          $ele.on(animStr.toLowerCase() + 'end webkit' + animStr + 'End o' + animStr.toLowerCase() + 'End ms' + animStr + 'End', function(e) {

            (function($ele) {
              if (e.target === $ele[0]) {

                if (typeof(onComplete) === 'function') {
                  onComplete($ele);
                }
                $ele.off(animStr.toLowerCase() + 'end webkit' + animStr + 'End o' + animStr.toLowerCase() + 'End ms' + animStr + 'End');
              }
            })($ele);

          });
        } else {

          if (typeof(onComplete) === 'function') {
            onComplete($ele);
          }
        }
      });
    },

    debounceEvent: function(userOpts) {
      var opts = {
          eventName: false,
          $ele: false,
          onComplete: false,
          toWait: 500
        },
        throttleCacheEvent;

      $.extend(opts, userOpts);

      function completeFunction(e) {
        if (typeof(opts.onComplete) === 'function') {
          opts.onComplete(e, opts.$ele);
        }
      }

      opts.$ele.on(opts.eventName, function(e) {
        clearTimeout(throttleCacheEvent);
        throttleCacheEvent = setTimeout(function() {
          completeFunction(e);
        }, opts.toWait);
      });
    },


    init: function() {
      console.log('utils.js loaded');
    }
  };

})(jQuery);
