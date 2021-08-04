var chartDom = document.getElementById('center_down_right');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '气体中的速度'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['U（m/s）音速', 'V（m/s）风速']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'U（m/s）音速',
            type: 'line',
            stack: '总量',
            data: [-1, -2, -8, 4, -6, -1, -8]
        },
        {
            name: 'V（m/s）风速',
            type: 'line',
            stack: '总量',
            data: [-3, -2.0, -5, -10, -7, -1.5, -3.4]
        },
    ]
};

option && myChart.setOption(option);