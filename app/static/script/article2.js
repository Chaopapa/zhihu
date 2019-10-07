$(function(){
    var title = sessionStorage.getItem('at');
    var content = sessionStorage.getItem('content');
    $('.article2-main-content h3').text(title);
    $('.article2-main-content>p').text(content);
})