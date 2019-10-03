$(function(){
    var myScroll =  new IScroll('.mine-main',{
        click:true,
        tap:true,
        probeType:3
    });

    myScroll.on('scroll',function(){
        console.log(1);
        if(myScroll.y<-50){
            $('.mine-header').addClass('ani');
            $('.mine-header').css('display','flex');
           
            $('.mine-main-header').css('display','none');
        }else{
            $('.mine-header').css('display','none');
            $('.mine-main-header').css('display','flex');
        }
            
    })



})