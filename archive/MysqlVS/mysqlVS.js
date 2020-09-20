/**
 * 1. 执行完后如果有结果, 需要自动滚动下来
 * 2. 所有的操作都可以只分为2部分: 交互 和 提交
 *
 * author: lvsi
 */
(function () {

    // 示例配置
    let example_config = {

        // 请求的地址
        api: "",
        second: 5,
    };

    let MysqlVS = function (config = {}) {

        // MysqlVS : 即包含着 example_config + config . 其中 config 会覆盖掉 example_config
        MysqlVS.prototype.tool.configContainer = Object.assign(example_config, config);
    };

    MysqlVS.prototype = {

        // 初始化启动
        init: function () {

            this.interactive.enable();
            this.submit.enable();
        },

        // 交互操作
        interactive: {

            enable: function () {

                this.onSafetySelect();
                this.listenInputSQL();
            },

            onSafetySelect: function () {

                // 用 prop 代替 attr
                $(document).on("click", "#Radio_safety_level_3", function () {

                    // 全部都藏起来
                    $(".input-group-sql").addClass("hidden");

                    // 只显示select
                    $(".input-group-sql-select").removeClass("hidden");

                    // 全部都取消选中
                    $(".input-radio-sql").removeAttr("checked");
                    $("#Radio_sql_type_select").prop("checked", "checked");
                    $("#Radio_mysql_affected_rows_no").prop("checked", "checked");
                });

                $(document).on("click", "#Radio_safety_level_2", function () {

                    // 全部都藏起来
                    $(".input-group-sql").addClass("hidden");

                    // 只显示select和update
                    $(".input-group-sql-select").removeClass("hidden");
                    $(".input-group-sql-update").removeClass("hidden");

                    // 全部都取消选中
                    $(".input-radio-sql").removeAttr("checked");
                    $("#Radio_sql_type_update").prop("checked", "checked");
                    $("#Radio_mysql_affected_rows_1").prop("checked", "checked");
                });

                $(document).on("click", "#Radio_safety_level_1", function () {

                    // 全部都显示出来
                    $(".input-group-sql").removeClass("hidden");

                    // 全部都取消选中
                    $(".input-radio-sql").removeAttr("checked");
                    $("#Radio_sql_type_delete").prop("checked", "checked");
                    $("#Radio_mysql_affected_rows_1").prop("checked", "checked");
                });

                $(document).on("click", "input", function () {

                    // 无限用0表示
                    let affected_rows = MysqlVS.prototype.tool.globalVariableContainer.affected_rows = parseInt($("input[name='affected_rows']:checked").val());
                    if (isNaN(affected_rows)) {

                        MysqlVS.prototype.tool.globalVariableContainer.affected_rows = 0;
                    }

                    $("#Operation-meaning").text("使用 " + $(".input-group-sql input:checked").val() + " 进行 " + $("input[name='affected_rows']:checked").val() + " 的操作");
                });
            },

            // 监听 SQL 输入
            listenInputSQL: function () {

                let sql = "";

                $(document).on("focus", "#SQL", function () {

                });

                $(document).on("blur", "#SQL", function () {

                    MysqlVS.prototype.tool.globalVariableContainer.sql = sql = $.trim($(this).val());

                    if ("" === sql) {

                        $("#Btn-submit").addClass("disabled").prop("disabled", true);
                    } else {

                        $("#Btn-submit").removeClass("disabled").prop("disabled", false);
                    }
                });
            }
        },

        // 提交操作
        submit: {

            enable: function () {

                // 点击提交按钮
                $(document).on("click", "#Btn-submit", function () {

                    if (!MysqlVS.prototype.submit.checkForm()) {

                        alert("输入不完整或者不正确，请重新输入");
                        return;
                    }

                    MysqlVS.prototype.submit.setStatus(MysqlVS.prototype.tool.constContainer.STATUS.PRELOAD);
                });

                // 点击中断按钮
                $(document).on("click", "#Btn-killed", function () {

                    MysqlVS.prototype.submit.setStatus(MysqlVS.prototype.tool.constContainer.STATUS.KILLED);
                });

                // 点击跳过等待按钮
                $(document).on("click", "#Btn-ignore", function () {

                    MysqlVS.prototype.submit.setStatus(MysqlVS.prototype.tool.constContainer.STATUS.IGNORE);
                });
            },

            checkForm: function () {

                MysqlVS.prototype.tool.globalVariableContainer.sql = $.trim($("#SQL").val());

                if ("" === MysqlVS.prototype.tool.globalVariableContainer.sql) {

                    return false;
                }

                return true;
            },

            setStatus: function (status) {

                let STATUS = MysqlVS.prototype.tool.constContainer.STATUS;

                switch (status) {

                    // 初始状态
                    case STATUS.INITIAL:

                        MysqlVS.prototype.tool.setStatusInitial();
                        break;

                    // 预加载状态
                    case STATUS.PRELOAD:

                        MysqlVS.prototype.tool.startClock();
                        MysqlVS.prototype.tool.setStatusPreload();
                        break;

                    // 加载中状态
                    case STATUS.LOADING:

                        MysqlVS.prototype.tool.setStatusLoading();
                        break;

                    // 中止状态
                    case STATUS.KILLED:

                        MysqlVS.prototype.tool.setStatusKilled();
                        break;

                    // 跳过忽略状态
                    case STATUS.IGNORE:

                        MysqlVS.prototype.tool.setStatusIgnore();
                        break;

                    // 结束状态
                    case STATUS.FINISH:

                        MysqlVS.prototype.tool.setStatusFinish();
                        break;

                    // 兜底状态
                    case STATUS.COMPLETE:

                        MysqlVS.prototype.tool.setStatusComplete();
                        break;

                    default:
                        break;
                }
            },

            ajax: {

                ready: function (params) {

                    let permission = [

                        MysqlVS.prototype.tool.constContainer.STATUS.LOADING,
                        MysqlVS.prototype.tool.constContainer.STATUS.IGNORE
                    ];

                    // 检查 params

                    // 检查是否正在send
                    if (MysqlVS.prototype.tool.globalVariableContainer.ajax_send) {

                        return false;
                    }
                    MysqlVS.prototype.tool.globalVariableContainer.ajax_send = true;

                    // 检查当前所处的状态
                    return permission.indexOf(MysqlVS.prototype.tool.globalVariableContainer.status) >= 0;
                },

                send: function (params) {

                    if (!this.ready(params)) {

                        return;
                    }

                    $.ajax({
                        url: MysqlVS.prototype.tool.configContainer.api,
                        type: 'post',
                        dataType: 'json',
                        data: params,
                        success: function (res) {

                            if (parseInt(res['errno']) === 0) {

                                MysqlVS.prototype.tool.globalVariableContainer.sql_error = false;
                                MysqlVS.prototype.tool.globalVariableContainer.sql_error = "";

                                MysqlVS.prototype.tool.globalVariableContainer.response = res;
                                MysqlVS.prototype.tool.globalVariableContainer.response_data = res['data'];
                                MysqlVS.prototype.submit.setStatus(MysqlVS.prototype.tool.constContainer.STATUS.FINISH);
                            } else {

                                MysqlVS.prototype.tool.globalVariableContainer.sql_error = true;
                                MysqlVS.prototype.tool.globalVariableContainer.sql_error_msg = res['errmsg'];
                            }
                        },
                        error: function (e) {

                            alert("网络错误，请重试!");

                        },
                        complete: function () {

                            MysqlVS.prototype.submit.setStatus(MysqlVS.prototype.tool.constContainer.STATUS.COMPLETE);
                        }
                    });
                }
            },
        },

        tool: {

            configContainer: {},

            constContainer: {

                STATUS: {

                    INITIAL: 0, // 初始状态
                    PRELOAD: 1, // 预加载状态
                    LOADING: 2, // 加载中
                    KILLED: 3,  // 中止
                    IGNORE: 4,  // 跳过忽略
                    FINISH: 5,  // 结束
                    COMPLETE: 6,// 兜底
                }
            },

            globalVariableContainer: {

                status: 0,
                clock: null,
                ajax_send: false,
                sql: "",
                affected_rows: 0,
                sql_error: false,
                sql_error_msg: "",
                response: {},
                response_data: {},
            },

            startClock: function () {

                clearInterval(this.globalVariableContainer.clock);

                let second = MysqlVS.prototype.tool.configContainer.second;
                $(".clock").text(second);
                setTimeout(function () {

                    $(".clock").text(--second);
                }, 1000);

                let clock = setInterval(function () {

                    if (-1 === second) {

                        clearInterval(clock);
                        MysqlVS.prototype.submit.setStatus(MysqlVS.prototype.tool.constContainer.STATUS.LOADING);
                        return;
                    }

                    $(".clock").text(second);

                    --second;

                }, 1000);

                this.globalVariableContainer.clock = clock;
            },

            lightUpScreen() {

                if (MysqlVS.prototype.tool.globalVariableContainer.sql_error) {

                    $("#Tip").html("<span style='color: red;'>" + MysqlVS.prototype.tool.globalVariableContainer.sql_error_msg + "</span>");
                    return;
                }

                let results = MysqlVS.prototype.tool.globalVariableContainer.response_data;
                if (typeof results[0] === "undefined") {

                    // 结果集为空;
                    $("#Tip").html("<span>结果集为空 ！</span>");
                    return;
                }

                $("#Tip").html("<span>结果集为 " + results.length + "</span>");
                $("#Nomore").html("<span>—————— 没有更多了 ——————</span>");

                // 表头
                let keys = [];
                let table_head_row_tpl = "<th>序号</th>";
                for (let key in results[0]) {

                    keys.push(key);
                    table_head_row_tpl += ("<th>" + key + "</th>");
                }
                let table_head_tpl = "<thead><tr>" + table_head_row_tpl + "</tr></thead>";


                // 表身
                let number = 1;
                let table_body_row_tpl = "";
                for (let result of results) {


                    if (0 === number % 2) {
                        table_body_row_tpl += "<tr class='even'><td>" + number + "</td>";
                    } else {
                        table_body_row_tpl += "<tr><td>" + number + "</td>";
                    }
                    for (let key of keys) {

                        table_body_row_tpl += ("<td>" + result[key] + "</td>");
                    }
                    table_body_row_tpl += "</tr>";
                    ++number;
                }
                let table_body_tpl = "<tbody>" + table_body_row_tpl + "</tbody>";

                // 整个表格
                let tpl = table_head_tpl + table_body_tpl;


                $("#Content").html("").append(tpl);

            },

            setStatusInitial() {

                // 提示语
                $("#Loadding").addClass("hidden");
                $("#Loadding span").addClass("hidden");

                // 按钮控制台
                $("#Btn-submit").removeClass("disabled").prop("disabled", false);
                $("#Btn-killed").addClass("disabled").prop("disabled", true);
                $("#Btn-ignore").addClass("disabled").prop("disabled", true);

                // SQL 输入框
                $("#SQL").prop("disabled", false).css("background", "#fff");

                MysqlVS.prototype.tool.globalVariableContainer.ajax_send = false;
                this.globalVariableContainer.status = this.constContainer.STATUS.INITIAL;
            },

            setStatusPreload() {

                // 提示语
                $("#Loadding").removeClass("hidden");
                $("#Loadding span").addClass("hidden");
                $("#Loadding .color-danger").removeClass("hidden");

                $("#Loadding .color-warning").addClass("hidden");
                $("#Loadding .color-primary").addClass("hidden");

                // 按钮控制台
                $("#Btn-submit").addClass("disabled").prop("disabled", true);
                $("#Btn-killed").removeClass("disabled").prop("disabled", false);
                $("#Btn-ignore").removeClass("disabled").prop("disabled", false);

                // SQL 输入框
                $("#SQL").prop("disabled", true).css("background", "#eee");

                MysqlVS.prototype.tool.globalVariableContainer.ajax_send = false;
                this.globalVariableContainer.status = this.constContainer.STATUS.PRELOAD;
            },

            setStatusLoading() {

                // 提示语
                $("#Loadding").removeClass("hidden");
                $("#Loadding span").addClass("hidden");
                $("#Loadding .color-warning").removeClass("hidden");

                $("#Loadding .color-danger").addClass("hidden");
                $("#Loadding .color-primary").addClass("hidden");

                // 按钮控制台
                $("#Btn-submit").addClass("disabled").prop("disabled", true);
                $("#Btn-killed").addClass("disabled").prop("disabled", true);
                $("#Btn-ignore").addClass("disabled").prop("disabled", true);

                // SQL 输入框
                $("#SQL").prop("disabled", true).css("background", "#eee");


                // 显示器
                $("#Tip").html("");
                $("#Content").html("");
                $("#Nomore").html("");

                this.globalVariableContainer.status = this.constContainer.STATUS.LOADING;
                MysqlVS.prototype.submit.ajax.send({
                    sql: MysqlVS.prototype.tool.globalVariableContainer.sql,
                    affected_rows: MysqlVS.prototype.tool.globalVariableContainer.affected_rows
                });

            },

            setStatusKilled() {

                this.setStatusInitial();

                clearInterval(this.globalVariableContainer.clock);

                MysqlVS.prototype.tool.globalVariableContainer.ajax_send = false;
                this.globalVariableContainer.status = this.constContainer.STATUS.KILLED;
            },

            setStatusIgnore() {

                clearInterval(this.globalVariableContainer.clock);

                this.setStatusLoading();

                this.globalVariableContainer.status = this.constContainer.STATUS.IGNORE;
            },

            setStatusFinish() {

                // 提示语
                $("#Loadding").removeClass("hidden");
                $("#Loadding span").addClass("hidden");
                $("#Loadding .color-safe").removeClass("hidden");

                // 按钮控制台
                $("#Btn-submit").removeClass("disabled").prop("disabled", false);
                $("#Btn-killed").addClass("disabled").prop("disabled", true);
                $("#Btn-ignore").addClass("disabled").prop("disabled", true);

                // SQL 输入框
                $("#SQL").prop("disabled", false).css("background", "#fff");

                MysqlVS.prototype.tool.globalVariableContainer.ajax_send = false;
                this.globalVariableContainer.status = this.constContainer.STATUS.FINISH;
            },

            setStatusComplete() {

                this.setStatusFinish();

                // 显示结果
                MysqlVS.prototype.tool.lightUpScreen();

                this.globalVariableContainer.status = this.constContainer.STATUS.COMPLETE;
            }


        }
    };

    // 扩展功能：MySQL可视化操作
    $.fn.extend({

        mysqlVS: function (config = {}) {

            return $(this).each(function () {

                // 启动
                (new MysqlVS(config)).init();
            });
        }
    });

})();