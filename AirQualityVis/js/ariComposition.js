
var chartDom = document.getElementById('left_center');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '空气中气体含量',
        subtext: '大气质量',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '气体类型',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: 'SO2'},
                {value: 735, name: 'NO2'},
                {value: 580, name: 'CO'},
                {value: 484, name: 'O3'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

option && myChart.setOption(option);
