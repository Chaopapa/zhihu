function MyScroll(dom,options){
    var myScroll = new IScroll(dom,Object.assign(
        options,
        {probeType:3}
    ));

    // myScroll.scrollTo(0,-50,0);
    
    //监听正在滚动处理下拉刷新
    myScroll.on("scroll",function(){
        if(myScroll.y>0){//达到下拉刷新的条件
            console.log("正在刷新");
        }else{//没有达到条件
            // console.log();
        }




    });
    //监听滚动停止事件。处理下拉刷新
    myScroll.on("scrollEnd",function(){
        console.log(myScroll.y);
    });

    //监听正在滚动事件处理上拉加载更多
    myScroll.on("scroll",function(){
        if(myScroll.y<=myScroll.maxScrollY){
            console.log("正在加载");
        }
    });

    //监听滚动结束事件处理上拉加载更多




}
