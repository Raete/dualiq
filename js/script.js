String.prototype.capitalize = function() { 
  return this.charAt(0).toUpperCase() + this.slice(1);
};

(function($) {
// hlavní menu vyvolání classu open (full menu)
var $toggles = $('.icon-menu');

$toggles.on('click', function () {
    $(this).closest('.top-menu').toggleClass('open');
});

var $toggleLink = $('.link');

$toggleLink.on('click', function () {
    $(this).closest('.top-menu').toggleClass('open');
});


//scrolování v hlavním menu
  var menu = $('.menu'),
      menuLinks = menu.find('a');

  menuLinks.on('click', function(event){
      event.preventDefault();
    
    var id = this.hash;

    $('html,body').animate({ scrollTop: $(id).offset().top }, function() {
      window.location.hash = id;
    });
  });


// galerie projektů
var gallery = $('.project-gallery');
var overlay = $('<div>', { id: 'overlay' });
    overlay.appendTo('body').hide();

  overlay.on('click', function() {
    $(this).fadeOut('fast');
  });

  $(document).on('keyup', function(event) {
    if ( event.which === 27 ) overlay.fadeOut('fast');
  });

  // lightbox
  gallery.on('click', 'a', function(event){
    var href = $(this).attr('href'),
        image = $('<img>', { src: href });

    overlay.html( image )
         .show();

    event.preventDefault();
  });


//menu - sekce service

  var servicesContent = $('.contentSet');

  servicesContent.hide();

  var selected = $('.service-menu').find('.selected');
  
  function showServicesContent( selected ) {
    if ( selected.length ) {
      var id = selected.find('a').attr('href');
      selectedContent = $(id);
    } 
    
    var newContentSet = selectedContent.length ?  selectedContent : servicesContent.eq(0);
    servicesContent.not( newContentSet ).hide();
    newContentSet.show().addClass( selected.data('class') || 'fadeInTop' );
  }

  showServicesContent( selected );

  $('.service-menu li').on('click', function(event) {
    var fadeClass = 'fadeIn' + $(this).data('from').capitalize();

    $(this)
      .data('class', fadeClass)
      .addClass('selected')
      .siblings().removeClass('selected');

    showServicesContent( $(this) );
    event.preventDefault();
  });


//timeline změna barev
	$.fn.viewportChecker = function(useroptions){
		// Define options and extend with user
		var options = {
			classToAdd: 'visible',
			offset: 100,
			callbackFunction: function(elem){}
		};
		$.extend(options, useroptions);

		// Cache the given element and height of the browser
		var $elem = this,
		    windowHeight = $(window).height();

		this.checkElements = function(){
			// Set some vars to check with
			var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
			    viewportTop = $(scrollElem).scrollTop(),
			    viewportBottom = (viewportTop + windowHeight);

			$elem.each(function(){
				var $obj = $(this);
				// If class already exists; quit
				if ($obj.hasClass(options.classToAdd)){
					return;
				}

				// define the top position of the element and include the offset which makes is appear earlier or later
				var elemTop = Math.round( $obj.offset().top ) + options.offset,
				    elemBottom = elemTop + ($obj.height());

				// Add class if in viewport
				if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
					$obj.addClass(options.classToAdd);

					// Do the callback function. Callback wil send the jQuery object as parameter
					options.callbackFunction($obj);
				}
			});
		};

		// Run checkelements on load and scroll
		$(window).scroll(this.checkElements);
		this.checkElements();

		// On resize change the height var
		$(window).resize(function(e){
			windowHeight = e.currentTarget.innerHeight;
		});
	};

// testimony
  var slider = $('.slide');

  slider.hide();

  var selected = $('.slider-nav').find('.selected');
  
  function showslider( selected ) {

    if ( selected.length ) {
      var id = selected.find('a').attr('href');
      selectedSlide = $(id);
    } 
    
    var newSlide = selectedSlide.length ?  selectedSlide : slider.eq(0);

    slider.not( newSlide ).hide();
    
    newSlide.show().addClass( selected.data('class') || 'fade' );
  }

  showslider( selected );

  $('.slider-nav li').on('click', function(event) {
    var fadeClass = 'fade';

    $(this)
      .data('class', fadeClass)
      .addClass('selected')
      .siblings().removeClass('selected');

    showslider( $(this) );
    event.preventDefault();
  });


//back to top
var win = $(window)
var backToTop = $('<a>', { 
      href: '#home', 
      class: 'back-to-top',
      html: '<i class="fa fa-angle-up"></i>'
    });

  backToTop
    .hide()
    .appendTo('body')
    .on('click', function() {
      $('html,body').animate({ scrollTop: 0 });
    });


  win.scroll(function() {
    if ( win.scrollTop() >= 500 ) backToTop.fadeIn();
    else backToTop.hide();
  });












})(jQuery);



