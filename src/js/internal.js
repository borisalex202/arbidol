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
      $('.wrapper').css('padding-right', scrollbarWidth);
    } else {
      $('.wrapper').css('padding-right', 0);
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
	});

  var gqBlock = $('.grid-q'),
      gaBlock = $('.answer-block');

  gqBlock.on('click', function(e){
      e.preventDefault();
      var posTop = $(this).find(gaBlock).offset();

      $('html, body').animate({
          scrollTop: posTop.top
      }, 500);
  });
  gqBlock.find('.content').on('click', function(e){
    gqBlock.not($(this).closest('.grid-q')).removeClass('active');
    $(this).closest('.grid-q').toggleClass('active');
  });
  $(document).mouseup(function (e){
		var el = gaBlock;
		if (!el.is(e.target)
		    && el.has(e.target).length === 0) {
					gqBlock.removeClass('active');
		}
	});
  $('.icon-cross').on('click', function(){
    $(this).closest('.grid-q').removeClass('active');
  });

  var search_tap = 0;
  $('.icon-search').on('click', function(e){
    if(search_tap == 0) {
      e.preventDefault();
      $(this).closest('.search-block').addClass('active');
      $(this).closest('.search-block').find('input').focus();
    }
    search_tap = 1;
  });
  $('.icon-eye').on('click', function(){
    $('.site-footer').addClass('hide-text');
  });

  function scrollbarWidth() {
    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    return scrollbarWidth;
  }

})(jQuery);
