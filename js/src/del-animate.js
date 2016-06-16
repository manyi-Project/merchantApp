/**
 * Created by Administrator on 2016/6/16 0016.
 */
$(function () {
    var animateWidth = 100,$_g_animate,$_g_shoppingList_box;
    function animate(animateW) {
        $_g_animate.css("width",animateW);
        $_g_shoppingList_box.css({marginLeft:-animateW});
    }
    $(".shoppingList_box_outer").on({
        touchstart:function (e) {
            startX=e.originalEvent.targetTouches [0].pageX;
        },
        touchmove:function (e) {
            endX=e.originalEvent.targetTouches[0].pageX;
        },
        touchend:function (e) {
            $_g_animate = $('.animate',this);
            $_g_shoppingList_box =$('.shoppingList_box',this);
            //左滑
            if((startX-endX)>100){
                animate(animateWidth);
            }
            //右滑
            if((endX-startX)>100){
                animate(0);
            }
        }
    });
    $(".shoppingList_box_outer .animate").on("touchend",function(){
        $(this).parent().remove();
    })
})