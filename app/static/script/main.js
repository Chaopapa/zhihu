$(function() {

    //重置视口
    function resetRemUnit() {
        var width = document.documentElement.clientWidth || window.innerWidth || document.documentElement.getBoundingClientRect().width;
        document.documentElement.style.fontSize = (width * 100 / 750) + 'px';
    }
    resetRemUnit();
    window.onresize = resetRemUnit;




})