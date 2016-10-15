/**
 * Created by Administrator on 2016/10/15.
 */
$(document).ready(function () {
    // $(".business_img").hover(function (event) {
    //     console.log($(event.target));
    //     $(event.target).removeClass("business_img_normal").addClass("business_img_active");
    // },function (event) {
    //     $(event.target).removeClass("business_img_active").addClass("business_img_normal");
    // });

    // 公司风采大图遮罩层打开事件
    $(".business_img").click(function (event) {

        var img_url = $(event.target).first().attr("src");
        $("#business_cover_img img").attr("src",img_url);

        $("<img/>").attr("src",img_url).load(function() {
            var margin_left = -(this.width/2);
            $("#business_cover_img").css("margin-left",margin_left);
        });

        $("#business_cover").show();
    });

    // 公司风采大图遮罩层关闭事件
    $("#business_cover").click(function (event) {
        if(event.target==$("#business_cover")[0]){
            $("#business_cover").hide();
        }
    });
    
});