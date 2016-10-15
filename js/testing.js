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

    // 检测报告大图遮罩层打开事件
    $(".testing_img").click(function (event) {

        var img_url = $(event.target).first().attr("src");
        $("#testing_cover_img img").attr("src",img_url);

        $("<img/>").attr("src",img_url).load(function() {
            var margin_left = -(this.width/2);
            $("#testing_cover_img").css("margin-left",margin_left);
        });

        $("#testing_cover").show();
    });

    // 检测报告大图遮罩层关闭事件
    $("#testing_cover").click(function (event) {
        if(event.target==$("#testing_cover")[0]){
            $("#testing_cover").hide();
        }
    });

});