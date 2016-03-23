var BaseView = require('../../rendr/shared/base/view'),
  $ = require('jquery');

module.exports = BaseView.extend({

  events: {
    'click .main-header .time-icons-hamburger': 'onClickHamburgerMenuIcon'
  },

  postRender: function() {
    console.log('vr page');

    $(document).ready(function(){
      activeItem = $(".accordion li:first");
      $(activeItem).addClass('active');
      $(activeItem).children(".vertical-block__text").hide();

      $(".accordion li").click(function(){
          $(activeItem).animate({width: "75px"}, {
            duration:300, 
            queue:false,
          });

          $(activeItem).children("img").css({
              "filter":"blur(5px)",           
              "webkitFilter":"blur(5px)",
              "mozFilter":"blur(5px)",
              "oFilter":"blur(5px)",
              "msFilter":"blur(5px)"
          });

          $(activeItem).children(".vertical-block__text").show();

          $(this).animate({width: "1000px"}, {
            duration:300,
            queue:false,
          });
          
          $(this).children("img").css({
              "filter":"blur(0px)",
              "webkitFilter":"blur(0px)",
              "mozFilter":"blur(0px)",
              "oFilter":"blur(0px)",
              "msFilter":"blur(0px)",
              "-webkit-transform": "translateZ(0)"
          });

          $(this).children(".vertical-block__text").hide();

          activeItem = this;
        });
      });
    },

  onClickHamburgerMenuIcon: function(e) {
    e.preventDefault();

    $('body').toggleClass('is-hamburger-menu-visible')
  }

});

module.exports.id = 'vr/vr_index_view';
