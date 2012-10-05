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
    inputHiddenText.on("focus", function () {
      billy.addHiddenClass( $(this) );
    });
    inputHiddenText.on("blur", function () {
      if ($(this).val() == "") {
        $(this).parent().children("label").removeClass("js__none");
      }
    });

    // Изменение стилей при фокусе на инпут
    var focusInput = $(".js__input_focus");
    focusInput.on("focus", function() {
      $(this).addClass("js__input_white");
    });
    focusInput.on("blur", function() {
      if ($(this).val() == "") {
        $(this).removeClass("js__input_white");
      }
    });

    // Детектим айОс
    var iphone = ( navigator.userAgent.match(/(iPhone|iPod)/i) ? true : false );
    var ipad = ( navigator.userAgent.match(/(iPad)/i) ? true : false );
    var body = $("body");
    if (iphone) {
      body.addClass("m__iphone");
    } if (ipad) {
      body.addClass("m__ipad");
    }



    // Отложенная загрузка лайков — всегда самая последняя во всем init()
    billy.loadLikes();
  },


  addHiddenClass: function( self ) {
    self.parent().children("label").addClass("js__none");
  },

  loadLikes: function() {
    $.ajax({
        url: "partials/likes.html",
        dataType: "html",
        success: function ( likes ) {
          $(".f_likes_wrapper").html( likes );
        }
    });
  }

};

billy.init();

});
