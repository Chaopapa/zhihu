$(function(){
    var repliesSwiper = new Swiper('.replies-swiper',{
        slidesPerView:4,
        slidesOffsetBefore : 15,
    });
    new IScroll('.replies-main',{
        click:true,
        tap:true
    })
});