$(function() {
  var beforeY = null;
  $("body").on("touchstart", function(e) {
    console.log("start");
    console.log(e.changedTouches[0]);
    beforeY = e.changedTouches[0].pageY;
  });
  $("body").on("touchend", function(e) {
    var afterY = e.changedTouches[0].pageY;
    //比较screenY判断是否上滑
    if (afterY < beforeY) {
      //上滑底下的列表展开。
      $(".add-list").removeClass("add-list-normal");
    }
  });

  /**
   * 关闭列表
   */
  $(".add-list-close").click(function() {
    $(".add-list").addClass("add-list-normal");
  });

  /**
   * 列表向下滑
   */
  var listBeforeY = null;
  $(".add-list").on("touchstart", function(e) {
    listBeforeY = e.changedTouches[0].screenY;
    $(this).on("touchend", function(e) {
      var afterY = e.changedTouches[0].screenY;
      //比较screenY判断是否上滑
      if (afterY >  listBeforeY) {
        //上滑底下的列表收起。
        $(".add-list").addClass("add-list-normal");
      }
      e.stopPropagation();
    });
  });

  var opaList = $(".add-opa a");
  opaList.eq(0).click(function() {
    alert();
    $(".add-list").removeClass("add-list-normal");
  });
});
