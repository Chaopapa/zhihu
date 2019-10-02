function MyScroll(dom,options){
    var myScroll = new IScroll(dom,Object.assign(
        options,
        {probeType:3}
    ));
    var refreshImg = $('.myScroll-flash img');
    var loadImg = $('.myScroll-load img')
    myScroll.scrollTo(0,-50,0);
    
    //监听正在滚动处理下拉刷新
    myScroll.on("scroll",function(){
        if(myScroll.y<50){
            refreshImg.attr("src","../static/images/refresh.png");
        }


    });
    //监听滚动停止事件。处理下拉刷新
    myScroll.on("scrollEnd",function(){
        if(myScroll.y>=0){//满足刷新条件加载    
           options.refreshData&&options.refreshData(function(){
               myScroll.scrollTo(0,-50,300);
               myScroll.refresh();
           });
          
        }else if(myScroll.y>-50&&myScroll.y<0){//不刷新
            myScroll.scrollTo(0,-50,300);
        }
    });

    //监听正在滚动事件处理上拉加载更多
    myScroll.on("scroll",function(){
        if(myScroll.y<=myScroll.maxScrollY){
            loadImg.attr("src","../static/images/load.png");
        }
    });

    //监听滚动结束事件处理上拉加载更多
    myScroll.on("scrollEnd",function () {
        if(myScroll.y<=myScroll.maxScrollY){//满足刷新条件
            options.loadData&&options.loadData(function(){
                myScroll.refresh();
            });
        }else if(myScroll.y>myScroll.maxScrollY&&myScroll.y<myScroll.maxScrollY+50){
    
            myScroll.scrollTo(0,myScroll.maxScrollY+50,300);
            
        }
    });



}
