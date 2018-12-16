$(function () {
    // 基于准备好的dom，初始化echarts实例
    var left_echarts = echarts.init(document.querySelector('.echarts-left'));

    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: '2018年注册人数'
        },
        tooltip: {},
        legend: {
            data: ['人数']
        },
        xAxis: {
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [500, 630, 940, 530, 300, 200]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    left_echarts.setOption(option1);




    // 基于准备好的dom，初始化echarts实例
    var right_echarts = echarts.init(document.querySelector('.echarts-right'));

    // 指定图表的配置项和数据
    var option2 = {
        title: {
            text: '热门品牌销售',
            subtext: '2018年12月',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['奔驰', '宝马', '大众', '丰田', '红旗', '吉利']
        },
        series: [
            {
                name: '品牌',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    { value: 335142, name: '奔驰' },
                    { value: 310424, name: '宝马' },
                    { value: 234421, name: '大众' },
                    { value: 135032, name: '丰田' },
                    { value: 5000, name: '红旗' },
                    { value: 320501, name: '吉利' }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    right_echarts.setOption(option2);


})
