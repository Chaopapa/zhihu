$(function() {
  //关注
  new MyScroll(".index-main", {
    click: true,
    tap: true
  });

  $(".index-nav-ad").click(function() {
    $(".i-main").load("./recommend.html");
    setInterval(function(){
        //推荐
    new MyScroll(".rec-main", {
        click: true,
        tap: true
      });
    },100);
  });
});
