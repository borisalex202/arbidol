(function($) {
  var overlay = $('.overlay'),
      elHidOverlay = $('.main-menu'),
      scrollbarWidth = scrollbarWidth();

  $('[data-toggle]').on('click', function(){
    var el = $(this).data('toggle'),
        className = $(this).data('class-name');

    if(className){
      $(el).toggleClass(className);
    } else {
      $(el).toggleClass('active');
    }
  });
  $('.icon-menu').on('click', function(){
    overlay.toggleClass('show');
    $('body').toggleClass('no-scroll');
    if($('body').hasClass('no-scroll')) {
      $('body').css('padding-right', scrollbarWidth);
    } else {
      $('body').css('padding-right', 0);
    }
  });
  overlay.on('click', function(){
    $(this).toggleClass('show');
    $('body').removeClass('no-scroll').css('padding-right', 0);
    elHidOverlay.removeClass('active');
  });

  var linkHasChild = $('.has-childs > a');
	linkHasChild.on('click', function(){
    var parent = $(this).parent();

		parent.toggleClass('active');
    if(parent.hasClass('active')) {
      parent.find('.sub-menu').slideDown();
    } else {
      parent.find('.sub-menu').slideUp();
    }
	})

  function scrollbarWidth() {
    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    return scrollbarWidth;
  }

})(jQuery);
