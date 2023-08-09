$(function(){
    $(".slide li").hide();
    $(".slide li").eq(0).show();

    var n=0; //현재 보여지는 이미지
        // setInterval(function(){},시간) 일정시간이 흐르면 행동하는 명령어
    setInterval(function(){
        $(".slide li").eq(n).fadeOut();
        if(n==2){
            n=0;
        }else{
            n++;
        }
        $(".slide li").eq(n).fadeIn();
    },4000)


}) //jquery