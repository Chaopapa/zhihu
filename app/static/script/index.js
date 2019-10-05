$(function() {
  //关注
  new MyScroll(".index-main", {
    click: true,
    tap: true
  });

  $(".index-nav-ad").click(function() {
    $(".i-main").load("./recommend.html");
    setTimeout(function() {
      //推荐
      new MyScroll(".rec-main", {
        click: true,
        tap: true
      });
    }, 100);
  });
  $(".index-nav-rank").click(function() {
    $(".i-main").load("./rank.html");
    setTimeout(function() {
      //热榜
      new MyScroll(".rank-main", {
        click: true,
        tap: true
      });
      var navSwiper = new Swiper(".nav-swiper", {
        slidesPerView: 6
      });
    }, 100);
  });
});
