window.addEventListener('DOMContentLoaded', () => {

  document.body.classList.toggle("dark-mode");
  for (let i = 1; i < document.getElementsByClassName("side_icon").length; i++) {
    document.getElementsByClassName("side_icon")[i].classList.toggle("dark-mode-icon");
  }
  document.getElementById("dmb").classList.toggle("dark-mode-btn");

  $('#dark_mode_btn').on("click", function() {
    document.body.classList.toggle("dark-mode");
    for (let i = 1; i < document.getElementsByClassName("side_icon").length; i++) {
      document.getElementsByClassName("side_icon")[i].classList.toggle("dark-mode-icon");
    }
    document.getElementById("dmb").classList.toggle("dark-mode-btn");
    document.getElementById("dmb").classList.toggle("dark-mode-btn-white");
  });

  let current_id = undefined;

  $("a[href^='#']").click(function(e) {
    console.log();
    if(current_id !== $(this).children().attr("id")){
      if(current_id !== undefined ){
      $(`#${current_id}`).css("background-color", "white");
    }
    current_id = $(this).children().attr("id");
    $(`#${current_id}`).css("background-color", "#39FF14");
    }

    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position
    });
  });

  $("#col2").on('mousewheel DOMMouseScroll touchmove', function(e) {
    var scrollTop = $(window).scrollTop();
    var midplace = $(window).innerHeight() / 2;
    $(".findByScroll").each(function(index){
        var elemHeight = $(this).height();
        var elementTop = $(this).position().top;
        if (scrollTop + midplace > elementTop  && scrollTop + midplace < elementTop + elemHeight){
          if(current_id !== $(this).attr("id")){
            if(current_id !== undefined ){
            $(`#${current_id}`).css("background-color", "white");
          }
          current_id = $(this).attr("id").toLowerCase();
          $(`#${current_id}`).css("background-color", "#39FF14");
          }
}
    });
});
});
