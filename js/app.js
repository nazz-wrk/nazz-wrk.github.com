$(function() {

var billy = {


  // Все обработчики тут
  init: function() {

    // Убираем/добавляем фальш labal
    var inputHiddenText = $(".js__input_hidden");
    inputHiddenText.each(function () {
      var self = $(this);
      if (self.val() != "") {
        billy.addHiddenClass( self );
      }
    });
    inputHiddenText.focus(function () {
      billy.addHiddenClass( $(this) );
    });
    inputHiddenText.blur(function () {
      if ($(this).val() == "") {
        $(this).parent().children("label").removeClass("js__none");
      }
    });

    // Изменение стилей при фокусе на инпут
    var focusInput = $(".js__input_focus");
    focusInput.focus(function() {
      $(this).addClass("js__input_white");
    });
    focusInput.blur(function() {
      if ($(this).val() == "") {
        $(this).removeClass("js__input_white");
      }
    });

    // Вызываем попап
    $(".js__popup").simplePopup();

    // Вызываем слайдер
    $(".c_slider, .c_slider__760").slides();

    // Детектим айОс
    var iphone = ( navigator.userAgent.match(/(iPhone|iPod)/i) ? true : false );
    var ipad = ( navigator.userAgent.match(/(iPad)/i) ? true : false );
    if (iphone) {
      $(".js__body").addClass("m__iphone");
    } if (ipad) {
      $(".js__body").addClass("m__ipad");
      // Т.к. media queries встали айпэду поперек горла, вставим ему свой вьюпорт
      $("meta[name=viewport]").attr("content", "width=1280");
    }

    console.log( $("meta[name=viewport]").attr("content") )

  },


  addHiddenClass: function( self ) {
    self.parent().children("label").addClass("js__none");
  },


  hiddenInput: function() {

  }


};

billy.init();

});

