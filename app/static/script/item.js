$(function(){
    new MyScroll('.item-main',{
        click:true,
        tap:true
    });
    $('.close').click(function(){
     history.back();
    })
})