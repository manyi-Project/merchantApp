/**
 * Created by Administrator on 2016/4/26 0026.
 */
$(function(){
<<<<<<< HEAD
=======
    var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        paginationClickable:true
    });
>>>>>>> 1f0a3b6a8747af5916fa58ab7d3521223c152e92
    function GetRTime(){
        var EndTime= new Date('2016/05/16 11:00:00');
        var NowTime = new Date();
        var t =EndTime.getTime() - NowTime.getTime();
        var h= 0, m= 0,s=0;
        if(t>=0){
            h=Math.floor(t/1000/60/60%24);
            m=Math.floor(t/1000/60%60);
            s=Math.floor(t/1000%60);
        }
        document.getElementById("h").innerHTML = h;
        document.getElementById("m").innerHTML = m;
        document.getElementById("s").innerHTML = s;
    }
    setInterval(GetRTime,0);

    $(".search input").focus(function(){
        //$(this).css({"textAlign":"left"});
        $(".searchImg").hide();
    });
    $(".search input").blur(function(){
        if($(this).val() == ""){
            //$(this).css({"textAlign":"center"});
            $(".searchImg").show();
        }
    });
});
