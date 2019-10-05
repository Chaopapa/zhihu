$(function(){

    new MyScroll('.index-main',{
        click:true,
        tap:true
    });

    $('.index-nav-ad').click(function(){
        $('.i-main').load('./recommend.html')
    })




})