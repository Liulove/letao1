$(function () {
    // 1.进行表单校验配置
    $("#form").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: "用户名不能为空"
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: "用户名为2到6位"
                    },
                    callback: {
                        message: "用户名不正确"
                    }
                }
            },

            password: {
                validators: {
                    notEmpty: {
                        message: "密码不能为空"
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: "密码为6-12位"
                    },
                    callback: {
                        message: "密码错误"
                    }
                }
            }
        }
    })

    // 2.注册表单校验成功事件，表单校验成功时会触发
    $("#form").on("success.form.bv", function (e) {
        e.preventDefault();
        // 使用ajax提交
        $.ajax({
            type: "post",
            url: "/employee/employeeLogin",
            data: $('#form').serialize(),
            dataType: "json",
            success: function (info) {
                console.log(info);
                if (info.success) {
                    location.href = "index.html"
                }

                if (info.error === 1000) {
                    $("#form").data('bootstrapValidator').updateStatus("username", "INVALID", "callback");
                }
                if (info.error === 1001) {
                    $("form").data("bootstrapValidator").updateStatus("password", "INVALID", "callback");
                }

            }
        })
    })

    // 3.表单重置
    $('[type="reset"]').click(function () {
        $('#form').data('bootstrapValidator').resetForm();
    })
})