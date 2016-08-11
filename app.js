jQuery(document).ready(function() {
    "use strict";

    var widgetDo = function() {
        jQuery('body, #widget-left').toggleClass('open');
        jQuery('.widget-button i').toggleClass('icon-arrow-right icon-arrow-left');

        if (!jQuery('body').hasClass('open')) {
            jQuery('#tweet').twittie({
                username: 'renta4',
                list: 'renta4',
                dateFormat: '%b. %d, %Y',
                template: '{{tweet}} <div class="date">{{date}}</div>',
                count: 25,
                loadingText: ''
            });
        }
    };

    jQuery('.widget-button').click(function() {
        widgetDo();
    });

    jQuery('#tweet').twittie({
        username: 'renta4',
        list: 'renta4',
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}} <div class="date">{{date}}</div>',
        count: 25,
        loadingText: ''
    });

    jQuery("body").swipe({
        swipe: function(event, direction) {
            if (direction === 'left' & jQuery('body').hasClass('open')) {
                widgetDo();
            }
            if (direction === 'right' & !jQuery('body').hasClass('open')) {
                widgetDo();
            }
        },
        allowPageScroll: "vertical"
    });


  document.onkeydown = checkKey;

  function checkKey(e) {

      e = e || window.event;

      if (e.keyCode == '38') {
          // up arrow
          jQuery("#tweet").animate({ scrollTop: 0 }, 1000);
          e.stopPropagation();
      }
      else if (e.keyCode == '40') {
          // down arrow
          jQuery("#tweet").animate({ scrollTop: jQuery("#tweet").scrollTop() + jQuery(window).height() - 20 }, 1000);
          e.stopPropagation();
      }
      else if (e.keyCode == '37'  & jQuery('body').hasClass('open')) {
        // left arrow
        widgetDo();
      }
      else if (e.keyCode == '39' & !jQuery('body').hasClass('open')) {
        // right arrow
        widgetDo();
      }

  }
});
