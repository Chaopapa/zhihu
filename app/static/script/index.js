$(function() {
  //关注
  new MyScroll(".index-main", {
    click: true,
    tap: true,
    refreshData: function(endScroll) {
      $.ajax({
        url: noticeRefresh,
        success: function(data) {
          var html = "";
          $.each(data.list, function(index, item) {
            html +=
              " <li>" +
              '<a href="detail.html" class="item">' +
              '<div class="index-list-title">' +
              "<object>" +
              '<a href="" # class="index-list-title-info">' +
              '<img src="' +
              item.imgSrc +
              '" alt="" />' +
              "<div>" +
              "<h4>" +
              item.name +
              '<img src="../static/images/biaoshi.jpg" alt="" />' +
              "</h4>" +
              "<p>发布了想法</p>" +
              "</div>" +
              "</a>" +
              "<span>19分钟前</span>" +
              "</object>" +
              "</div>" +
              '<div class="index-list-content">' +
              "<p>" +
              item.content +
              "</p>" +
              "<p>" +
              item.content +
              "</p>" +
              "</div>" +
              '<div class="index-list-opa">' +
              '<object data="" type="">' +
              '<a href="">转发</a>' +
              '<a href="">评论</a>' +
              '<a href="">点赞</a>' +
              '<a href="">更多</a>' +
              "</object>" +
              " </div>" +
              " </a>" +
              "</li>";
          });
          $(".index-main-list").html(html);

          endScroll();
        },
        fail: function(err) {
          console.log(err);
        }
      });
    },
    loadData: function(endScroll) {
      $.ajax({
        url: noticeLoad,
        success: function(data) {
          var html = "";
          $.each(data.list, function(index, item) {
            $item = $(
              " <li>" +
                '<a href="detail.html" class="item">' +
                '<div class="index-list-title">' +
                "<object>" +
                '<a href="" # class="index-list-title-info">' +
                '<img src="' +
                item.imgSrc +
                '" alt="" />' +
                "<div>" +
                "<h4>" +
                item.name +
                '<img src="../static/images/biaoshi.jpg" alt="" />' +
                "</h4>" +
                "<p>发布了想法</p>" +
                "</div>" +
                "</a>" +
                "<span>19分钟前</span>" +
                "</object>" +
                "</div>" +
                '<div class="index-list-content">' +
                "<p>" +
                item.content +
                "</p>" +
                "<p>" +
                item.content +
                "</p>" +
                "</div>" +
                '<div class="index-list-opa">' +
                '<object data="" type="">' +
                '<a href="">转发</a>' +
                '<a href="">评论</a>' +
                '<a href="">点赞</a>' +
                '<a href="">更多</a>' +
                "</object>" +
                " </div>" +
                " </a>" +
                "</li>"
            );
            $(".index-main-list").append($item);
          });

          endScroll();
        },
        fail: function(err) {
          console.log(err);
        }
      });
    }
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
        tap: true,
        refreshData: function(endScroll) {
          $.ajax({
            url: rankRefresh,
            success: function(data) {
              var html = "";
              $.each(data.list, function(index, item) {
                html +=
                  '<li class="rank-main-item"><p>' +
                  item.id +
                  "</p> <div><p>" +
                  item.title +
                  "?" +
                  '</p><span>92万热度</span></div><img src="' +
                  item.imgSrc +
                  '" alt="" /></li>';
              });
              $(".rank-main-list").html(html);
              endScroll();
            },
            fail: function(err) {
              console.log(err);
            }
          });
        }
      });
      var navSwiper = new Swiper(".nav-swiper", {
        slidesPerView: 6
      });
    }, 100);
  });

  //打开学习列表
  $('.goItem').click(function(){
    window.open('item.html','_self');
  });
});
