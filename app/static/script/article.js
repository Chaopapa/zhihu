$(function(){
    $('.article-pub').click(function(){

        sessionStorage.setItem('at',$('.at').val());
        sessionStorage.setItem('content',$('.content').val());
        location.href="./article2.html";
    })
});