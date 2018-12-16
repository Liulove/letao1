// 在第一个ajax开启前启动进度条，在最后一个ajax结束后结束进度条
$(document).ajaxStart(function () {
    NProgress.start();
})

$(document).ajaxStop(function () {
    NProgress.done();
})

$(function () {
    // 二级菜单切换功能
    $('.category').click(function () {
        $('.lt_aside .child').stop().slideToggle();
    })

    // 菜单切换效果
    $('.lt_main .icon-menu').click(function () {
        $(".lt_aside").toggleClass('hidemenu')
        $(".lt_main").toggleClass('hidemenu')
        $(".lt_main .lt_topbar").toggleClass('hidemenu')
    })

    // 3.退出效果
    $('.lt_main .icon-logout').click(function () {
        $('#logoutModal').modal('show')
    })

    $("#logoutBtn").click(function () {
        $.ajax({
            type: "get",
            url: "/employee/employeeLogout",
            dataType: "json",
            success: function (info) {
                console.log(info);
                if (info.error) {
                    console.log(操作失败);

                }
                if (info.success) {
                    location.href = "login.html";
                }

            }
        })
    })
})