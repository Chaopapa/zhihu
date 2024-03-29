$(function(){
    new MyScroll('.message-main',{
        tap:true,
        click:true,
        refreshData:function(endScroll){
            $.ajax({
                url:messageRefreshApi,
                success:function(data){
                    var html = '';
                    $.each(data.list,function(index,item){
                       html +=' <li>'+
                       '  <div class="message-list-img">'+
                       '<img src="'+item.imgSrc+'" alt="" /></div>'+
                       '<div class="message-list-content">'+
                       '<h4>'+item.title+'</h4>'+
                       '<p class="m-desc">'+item.desc+'</p>'+
                       '<div class="m-content">'+item.content+'</div>'+
                       '<span class="m-time">'+item.time+'</span></div></li>'
                    });
                    $('.message-list').html(html);


                    endScroll();
                },
                fail:function(err){
                    console.log(err);
                }
            });
        },
        loadData:function(endScroll){
            $.ajax({
                url:messageLoadApi,
                success:function(data){
                    $.each(data.list,function(index,item){
                       var listItem=$(' <li>'+
                        '  <div class="message-list-img">'+
                        '<img src="'+item.imgSrc+'" alt="" /></div>'+
                        '<div class="message-list-content">'+
                        '<h4>'+item.title+'</h4>'+
                        '<p class="m-desc">'+item.desc+'</p>'+
                        '<div class="m-content">'+item.content+'</div>'+
                        '<span class="m-time">'+item.time+'</span></div></li>');
                        $('.message-list').append(listItem);
                     });
                     endScroll();
                  
                },
                fail:function(err){
                    
                    console.log(err);
                }
            })
        },

    });

    //点击切换页面
    $('.private').click(function(){
        $('.m-main').load('./private.html');
    })





})